(ns succulent.core "0.1.1-SNAPSHOT"
  (:require
  [sablono.core :as sab]
  [reagent.core :as r]
  [om-bootstrap.button :as b]
  [om-bootstrap.table :refer [table]]
  [om-tools.dom :as d]
  [om-bootstrap.grid :as g]
  [om-bootstrap.random :as etc]
  [om.core :as om :include-macros true]
  [om.dom :as dom :include-macros true]
  [quil.core :as q :include-macros true]
  [quil.middleware :as m]
  [cljs.tools.reader]
  [cljs.js]))


(js/console.log "Booted")

(defn bind-input [input-atom]
  #(reset! input-atom (-> %1 .-target .-value)))

(defn some-component []
  (let [value-atom (r/atom nil)]
    [:input {:type "text" :on-change (bind-input value-atom)}]))


(def app-state
  (atom
    {:values             {:x "" :y "" :op "" :result "" :tape [""] }
     :data-bus           :result
     :control-bus        :op
     :address-bus        :x
     :primary-register   :x
     :secondary-register :y
     :current-target     :x
     :shift-in           false
     :opval              ""
     :opcode             nil }))

;
(def db (atom {:mutex      {:state         0
                              :threads       [:semaphoreA :semaphoreB]
                              :active-thread :semaphoreA}
                 :semaphoreA {
                              :state     0
                              :registers {:op ""}
                              :available [:op]
                              :selected  :op
                              :locked?   false}
                 :semaphoreB {
                             :state 2
                             :registers {:r1 ""
                                         :r2 ""
                                         :r3 ""}

                             :available [:r1 :r2 :r3]
                             :selected :r3
                             :locked? true }
                 :accumulator {:op "" :r1 "" :r2 "" :r3 "" :null ""}
                 :opcode 0}))

(defn siginterrupt []
  (swap! db update-in [:mutex :state] bit-xor 1)
  (swap! db update-in [:mutex :active-thread] (get (get-in @db [:mutex :threads]) (get-in @db [:mutex :state])))
  (swap! db update-in [:semaphoreA :state] inc)
  (swap! db update-in [:semaphoreB :state] inc)

  (swap! db update-in [:semaphoreA :locked?] not)
  (swap! db assoc-in [:semaphoreA :selected]
         (get (get-in @db [:semaphoreA :registers])
              (mod (get-in @db [:semaphoreA :state]) 1)) )
  (swap! db update-in [:semaphoreB :locked?] not)
  (swap! db assoc-in [:semaphoreB :selected]
         (get (get-in @db [:semaphoreB :registers])
         (mod (get-in @db [:semaphoreB :state]) 3)) ))

(defn href [resource]
  (let [ref-ptr (get-in @db [:mutex :state])
        threadpool (get-in @db [:mutex :threads])
        current-owner (get threadpool ref-ptr :out-of-bounds)
        active-thread (get-in @db [:threads current-owner])
        semA-ptr (get-in @db [:threads active-thread :state])
        semA-target (get (get-in @db [:threads active-thread :registers]) semA-ptr :semA-out-of-bounds)
        semB-ptr (get-in @db [:threads active-thread :state])
        semB-target (get (get-in @db [:threads active-thread :registers]) semB-ptr :semB-out-of-bounds)
        active-target (if (zero? ref-ptr) semA-target semB-target)]
    (cond
      (= resource :active-thread) active-thread
      (= resource :target-register) (get-in @db [:accumulator active-target])
      (= resource :accumulator) (get-in @db [:accumulator]))))

(def keyboard-input (atom {:key-id "" :ascii-code "" :tag ""}))
;(def keypress (r/atom nil))
;(def io (r/atom {:target nil
;                 :curr '()
;                 :prev '()
;                 :next '()
;                 :stacks {:op '() :output '()}}))
;
;(defn stack [msg args]
;  (let (destination (is-number? msg))
;  (cond (not (and (vector? args)
;                   (= (count args) 1))) (.log js/log ("Bad input to stack: "  args (= msg 'push)))
;        (= msg 'push))


;(defn active [] (get-in @app-state [:core]))
;
;
;
;(defn ask [op target origin ]
;  (let [next-available (active)
;        op-register (get-in @app-state [:cpu :cores (active) :r1])
;        target-register (get-in @app-state [:cpu :cores next-available :r2])
;        result-register (get-in @app-state [::cores next-available :r3]) ]
;    target-register.cons(target);
;    op-register.cons(op)))
;
;
(defn flushRegister [m]
  ; Destructively clear the associated register.
  (swap! app-state assoc-in [:values m] ""))
;
(defn show [arg]
  ; Return the current value of the associated register.
  (cond (= arg 'x) (get-in @app-state [:values :x])
        (= arg 'y) (get-in @app-state [:values :y])
        (= arg 'op) (get-in @app-state [:values :op])
        (= arg 'result) (get-in @app-state [:values :result])
        (= arg 'current-target) (get-in @app-state [:current-target])
        (= arg 'address-bus) (get-in @app-state [:values (get-in @app-state [:address-bus])])
        (= arg 'data-bus) (get-in @app-state [:values (get-in @app-state [:data-bus])])
        (= arg 'control-bus) (get-in @app-state [:values (get-in @app-state [:control-bus])])
        (= arg 'key-in) (get-in @keyboard-input [:key-id])
        (= arg 'tape) (get-in @app-state [:values :tape])))
;
;
(defn get-route [reg]
  (get-in @app-state [reg]))
(defn divert-route [reg newroute]
  (swap! app-state assoc-in [reg] newroute))
(defn shunt [val reg]
  (swap! app-state update-in [:values (get-route reg)] str val))
(defn put [val reg]
  (swap! app-state assoc-in [:values (get-in @app-state [reg])] (if (keyword? val)
                                                                  val           ;don't convert kws to strings
                                                                  (str val))))
;
(defn clear? [val]
  (= val "clear"))
(defn operator? [val]
  (let [ops (set ["add" "subtract" "multiply" "divide" "/" "*" "+" "-"])]
    (contains? ops val)))
(defn eval? [val]
  (let [evaluators (set ["equals" "="])]
    (contains? evaluators val)))
(defn num? [val]
  (js/isFinite (js/parseInt val)))
(defn shift? [val]
  (= val "shiftin"))
(defn unshift? [val]
  (= val "unshift"))
(defn can-evaluate?[]  (cond (not-any? true? (into [] (map empty? (map str (map show ['x 'y 'op]))))) :as-usual
                             (not-any? true? (into [] (map empty? (map str (map show ['y 'op 'data-bus]))))) :as-current-continuation
                             :else false))
(defn dispatch [instruction]
  (cond (= instruction "add") +
        (= instruction "subtract") -
        (= instruction "divide") /
        (= instruction "multiply") *))

(defn flip-address-switch []
  (let [current-mode (get-in @app-state [:address-bus])]
    (if (= current-mode :x)
      (divert-route :address-bus :y)
      (divert-route :address-bus :x))))

;
(defn push [val p q]
  ; mechanical instructions for carrying out sequential push operations onto the machine
  ; to update the machine non-destructively instead, convert registers to lists, cons an
  ; empty string to each of the lists, and point the respective bus at the head of the list
  ;
  (let [dispatch (fn [instruction]
                   (cond   (= instruction "add") +
                           (= instruction "subtract") -
                           (= instruction "divide") /
                           (= instruction "multiply") *))]
    (cond (= p :to-empty)
          (cond (= q :x-register)
                (do
                  (divert-route :current-target :x)
                  (put val :current-target))
                (= q :y-register)
                (do
                  (divert-route :current-target :y)
                  (put val :current-target))
                (= q :op-register)
                (put val :control-bus))
          (= p :to-non-empty)
          (cond (= q :x-register)
                (shunt val :current-target)
                (= q :y-register)
                (shunt val :current-target)
                (= q :op-register)
                (put val :control-bus))
          (and (= p :to-fresh-sparkly)
               (= q :x-register))
          (do (flushRegister :result)
              (flushRegister :op)
              (flushRegister :x)
              (flushRegister :y)
              (divert-route :current-target :x)
              (push val :to-empty :x-register))
          (and (= p :to-fully-evaluated)
               (= q :op-register))
          (do                                       ; Try not to assume a particular data type.
            (put (apply (dispatch (show 'op))     ; Just serialize these jumps:
                        [(js/parseFloat (show 'x))    ; 1) push expression to output-register (we know it's well-formed)
                         (js/parseFloat (show 'y))])  ; 2) reduce it down
                 :data-bus)                           ; 3) clear non-empty input registers
            (flushRegister :x)                        ; 4) allocate space in x
            (put (show 'data-bus) :primary-register)  ; 5) put it in the box
            (flushRegister :result)
            (flushRegister :y)
            (flushRegister :op)
            (divert-route :current-target :x)
            (push val :to-empty :op-register))
          (and (= p :to-fully-evaluated)
               (= q :output-register))  ; same as above, only omitting the step where we copied result to x
          (do (put (apply (dispatch (show 'op)) [(js/parseFloat (show 'x)) (js/parseFloat (show 'y))]) :data-bus)
              (flushRegister :x)
              (flushRegister :y)
              (flushRegister :op)
              (divert-route :current-target :result))
          (and (= p :to-previously-evaluated)
               (= q :op-register))  ; here steps 1-4 are invariant, simply proceed with 5th step
          (do (put (show 'data-bus) :primary-register)
              (put val :control-bus)
              (flushRegister :result)
              (divert-route :current-target :x))
          (and (= p :to-unevaluated)
               (= q :output-register)) ; here we shunt the x register to output but don't evaluate
          (do (put (show 'x) :data-bus)
              (flushRegister :x)
              (divert-route :current-target :result))
          (and (= p :to-unevaluated)
               (= q :output-register))
          (do (put (show 'x) :data-bus)
              (flushRegister :x)
              (flushRegister :op)
              (divert-route :current-target :result)))))
;; no else case. just do nothing on undefined/badly-formed inputs (provided they don't break the calc)
;; null inputs call this procedure also, but push an empty string (i.e. do nothing)
;
(defn bus-driver [input]
;  ; the bus-driver's name is otto. he's a cool dude.
;  ; he handles state changes otto-matically.
;  ; attempts to do at a high level what a program control unit does in von neumann architecture.
;  ; otto's responsibilities are total: he updates the address bus, control bus, data bus, and numeric registers
;  ; from initial input to final output.
;  ; in theory, the bus registers enable indexical (i.e. stack-based) access to value registers, but registers
;  ; are currently implemented as strings.  so the busses are basically just static pointers for now. if that changes,
;  ; bus accessor methods can be written to effectively control the flow of time, reverse state, and
;  ; even reverse the order of evaluation!
;  ;
  (let [address-bus (show 'address-bus)
        control-bus (show 'control-bus)
        data-bus (show 'data-bus)
        key-in (show 'key-in)
        x (show 'x)
        y (show 'y)
        op (show 'op)
        ans (show 'result)
        tag (get-in @keyboard-input [:tag])
        k (get-in @keyboard-input [:key-id])]
    (.log js/console "Bus driver called with arg: " val)
    (cond
      (= tag :number) (if (empty? ans)
                   (if (empty? y)
                     (if (empty? op)
                       (if (empty? x)
                         (do (swap! app-state assoc-in [:opcode] 0)
                             (push val :to-empty :x-register)) ;the first action
                         (do (swap! app-state assoc-in [:opcode] 3)
                             (push val :to-non-empty :x-register))) ;keep concatenating to x
                       (do (swap! app-state assoc-in [:opcode] 1)
                           (push val :to-empty :y-register))) ;update :current-target to y and assoc the new val
                     (do (swap! app-state assoc-in [:opcode] 3)
                         (push val :to-non-empty :y-register))) ;keep concatenating to y
                   (do (swap! app-state assoc-in [:opcode] 5)
                       (push val :to-fresh-sparkly :x-register))) ;clear registers, reset target to x, put val there
      (= tag :operator) (if (empty? ans)
                        (if (empty? y)
                          (if (empty? op)
                            (if (empty? x)
                              (do (swap! app-state assoc-in [:opcode] 4)
                                  (push "" :nothin-baby :shhh-just-the-wind)) ;don't add voids
                              (do (swap! app-state assoc-in [:opcode] 2)
                                  (push val :to-empty :op-register))) ;this is the usual case
                            (do (swap! app-state assoc-in [:opcode] 2)
                                (push val :to-non-empty :op-register))) ;if duplicate ops, take most recent
                          (do (swap! app-state assoc-in [:opcode] 6)
                              (push val :to-fully-evaluated :op-register))) ;chained expressions are ok (e.g. 5+3*8-2)
                        (do (swap! app-state assoc-in [:opcode] 8)
                            (push val :to-previously-evaluated :op-register))) ;resume chaining if the prev op was "equals"
      (= tag :equals) (if (empty? ans)
                    (if (empty? y)
                      (if (empty? op)
                        (if (empty? x)
                          (do (swap! app-state assoc-in [:opcode] 2)
                              (push "" :nothin-baby :shhh-just-the-wind)) ;don't evaluate voids
                          (do (swap! app-state assoc-in [:opcode] 10)
                              (push val :to-unevaluated :output-register))) ;let x equal itself
                        (do (swap! app-state assoc-in [:opcode] 10)
                            (push val :to-unevaluated :output-register))) ;stupid edge case
                      (do (swap! app-state assoc-in [:opcode] 7)
                          (push val :to-fully-evaluated :output-register))) ;normal evaluation flushes all but the output register
                    (do (swap! app-state assoc-in [:opcode] 2)
                        (push "" :nothin-baby :shhh-just-the-wind)))))) ;already evaluated, do nothing
(def opcode
  ;an experiment in rewriting "push" as a vector of methods: we're not really doing the von-neumann bottleneck
  ;any favors by dispatching on action tags. can we force the use of direct addressing by converting the cond
  ;statement to an array of 12 procedures, and access them indexically?
  (vec [
        ;the first action
        (fn [e] (do (divert-route :current-target :x)
                    (put e :current-target)))
        ;1 push to empty y register
        (fn [e] (do (divert-route :current-target :y)
                    (put e :current-target)))
        ;2 push to empty op
        (fn [e] (put e :control-bus))
        ;3 push to a non-empty x-register
        (fn [e] (shunt e :current-target))
        ;4 push to a non-empty y-register
        (fn [e] (shunt e :current-target))
        ;5 push to a sparkly clean x register (triggered when "equals" is followed by a number)
        (fn [e]
          (do (flushRegister :result)
              (flushRegister :op)
              (flushRegister :x)
              (flushRegister :y)
              (divert-route :current-target :x)
              (put e :current-target)))
        ;6 push to fully-evaluated op register
        (fn [e]
          (if (can-evaluate?)
            (do (put (apply (dispatch (show 'op))    ; Try not to assume a particular data type.  Just serialize these jumps:
                            [(js/parseFloat (show 'x))    ; 1) push expression to output-register (we know it's well-formed)
                             (js/parseFloat (show 'y))])   ; 2) reduce it down
                     :data-bus)                          ; 3) clear non-empty input registers
                (flushRegister :x)                        ; 4) allocate space in x
                (put (show 'data-bus) :primary-register)  ; 5) box it up
                (flushRegister :result)
                (flushRegister :y)
                (flushRegister :op)
                (divert-route :current-target :x)
                (put e :control-bus))))
        ;7 eval and push answer to output register
        (fn []
          (if (can-evaluate?)
            (do (put (apply (dispatch (show 'op))
                            [(js/parseFloat (show 'x))
                             (js/parseFloat (show 'y))])
                     :data-bus)
                (flushRegister :x)
                (flushRegister :y)
                (flushRegister :op)
                (divert-route :current-target :result))))
        ;8 push op to previously evaluated expression
        (fn [e]
          (do (put (show 'data-bus) :primary-register)
              (put e :control-bus)
              (flushRegister :result)
              (divert-route :current-target :x)))
        ;10 edge case such that x equals itself if y is empty
        (fn []
          (do (put (show 'x) :data-bus)
              (flushRegister :x)
              (divert-route :current-target :result)))
        ;11 stupid edge case in the event the exp isn't well-formed ("5 +")
        (fn []
          (do (put (show 'x) :data-bus)
              (flushRegister :x)
              (flushRegister :op)
              (divert-route :current-target :result)))]))
;
;
(defn shortbus [num]
  ;let's try something crazy: call methods from the vector
  (let [address-bus (show 'address-bus)
        control-bus (show 'control-bus)
        data-bus (show 'data-bus)
        key-in (show 'key-in)
        x (show 'x)
        y (show 'y)
        op (show 'op)
        ans (show 'result)]
    (swap! app-state assoc-in [:opval] num)

    (cond
      (num? num) (if (empty? ans)
                   (if (empty? y)
                     (if (empty? op)
                       (if (empty? x)
                         (apply (opcode 0) [num]) ;the first action
                         (apply (opcode 3) [num])) ;keep concatenating to x
                       (apply (opcode 1) [num])) ;update :current-target to y and assoc the new val
                     (apply (opcode 4) [num])) ;keep concatenating to y
                   (apply (opcode 5) [num])) ;clear registers, reset target to x, put val there
      (shift? num) (swap! app-state assoc-in [:shift-in] true) ;helper events for keyboard inputs
      (unshift? num) (swap! app-state assoc-in [:shift-in] false)
      (operator? num) (if (empty? ans)
                        (if (empty? y)
                          (if (empty? op)
                            (if (empty? x)
                              (apply (opcode -1) []) ;don't add voids
                              (apply (opcode 2) [num])) ;typical usual case for ops
                            (apply (opcode 2) [num])) ;if duplicate ops, we take most recent. same logic
                          (apply (opcode 6) [num])) ;chained expressions are ok (e.g. 5+3*8-2)
                        (apply (opcode 8) [num])) ;resume chaining if the prev op was "equals"
      (eval? val) (if (empty? ans)
                    (if (empty? y)
                      (if (empty? op)
                        (if (empty? x)
                          (apply (opcode -1) []) ;don't evaluate voids
                          (apply (opcode 10) [])) ;let x equal itself
                        (apply (opcode 11) [])) ;stupid edge case
                      (apply (opcode 7) [])) ;normal evaluation flushes all but the output register
                    (apply (opcode -1) []))))) ;already evaluated, do nothing
;
;
(defn butt-stuff [arg]
  ; implements the interface to our non-blocking I/O Monad, the bus-driver control unit
  (do
    (swap! keyboard-input assoc-in [:key-id] (str arg))
    (bus-driver arg)))

(defn a-simple-stateful-object [app-state input]
  (let [target-register (get-in @app-state [:current-target])]


    (do
      (sab/html [:div
                 [:div
                  [:h1 (etc/well {} (str (get-in @app-state [target-register])))
                  ]
                 [:h3
                  [:button {:href    "#"

                            :onClick #(do (butt-stuff 1))}
                   "1"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 2))}
                   "2"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 3))}
                   "3"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff "add"))}
                   "+"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff "divide"))}
                   "/"] " " ]
                 [:h3
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 4))}
                   "4"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 5))}
                   "5"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 6))}
                   "6"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff "subtract"))}
                   "-"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff "multiply"))}
                   "*"] " " ]
                 [:h3
                  [:button {:href    "#"

                            :onClick #(do (butt-stuff 7))}
                   "7"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 8))}
                   "8"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff 9))}
                   "9"] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff "equals"))}
                   "="] " "
                  [:button {:href    "#"
                            :onClick #(do (butt-stuff "clear"))}
                   "clear"] " " ]

                 [:div [:p ""]]
                 (table {:striped? true :bordered? true :condensed? false :hover? true}
                        (d/thead
                          (d/tr {:class "col-md-*"}
                                (d/th {:width 30} "Inpu Monad: ")
                                (d/th {:width 100} "Current key: ")))
                        (d/tbody
                          (d/tr
                            (d/td (d/code {} "State Register:"))
                            (d/td (str (get-in @keyboard-input [:key-id]))))
                          (d/tr
                            (d/td (d/code {} "Shift key:"))
                            (d/td (d/code {} (str (get-in @app-state [:shift-in])))))
                          (d/tr
                            (d/td (d/code {} "Has interacted? "))
                            (d/td (d/code {} (str (get-in @app-state [:has-interacted])))))))
                 ]]))))

(def stringnums (set ["1" "2" "3" "4" "5" "6" "7" "8" "9" "0"]))

(def stringops (set ["+" "-" "/" "*"]))

(defn ascii-number? [ascii-code]
  (and (< ascii-code 58)
       (> ascii-code 47)))

(defn ascii-shift? [ascii-code]
  (= 16 ascii-code))

(defn convert-to-int [ascii-code]
  (- ascii-code 48))

  (defn NaN? [e] (let [ch (.-key e)] (js/parseInt ch))(js/isNaN ))
  (defn numeric? [e] (complement (NaN? e)))
  (defn notop? [ascii-code] (not-any? #(= ascii-code %) '(42 43 45 47)))
(defn op? [ascii-code] (complement (notop? ascii-code)))
;(deftype Input [char]
;  Object
;  (-keyCode [this] (.-keyCode this)))

(defn tag [ascii-code]
  (let [num ascii-code
        operators #{42 43 45 47}
        numbers #{48 49 50 51 52 53 54 56 57}
        equals 61]
    (cond (contains? operators num) :operator
          (contains? numbers num) :number
          (= equals num) :equals
          :else ("Value not in ascii range: " ascii-code))))
    (.addEventListener js/window "keypress"
                   (fn [e]
                     (let [character (.-key e)
                           ascii-code (.-keyCode e)
                           keyCode (.-code e)
                           is-number? (not (js/isNaN (js/parseInt character)))
                           is-operator? (op? ascii-code)]

                         (swap! keyboard-input assoc-in [:key-id] character)
                         (swap! keyboard-input assoc-in [:ascii-code] (js/String ascii-code))
                         (swap! keyboard-input assoc-in [:tag] (js/String (tag ascii-code)))
                         ;(reset! keypress (Input. e))
                         (.log js/console "ascii-code: " ascii-code " character: " character " number? " (not (js/isNaN (js/parseInt character))))
                         (.log js/console "keyboard-input:   [:key-id] " (get-in @keyboard-input [:key-id])
                                                         ", [:ascii-code] " (get-in @keyboard-input [:ascii-code])
                                                         ", [:tag] " (get-in @keyboard-input [:tag]))
                         (shortbus character))))
(defn render! []
  (.render js/ReactDOM
           (a-simple-stateful-object app-state keyboard-input)
           (.getElementById js/document "app")))
(defn quil-setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0})

(def x-scalar 22.2222)
(def y-scalar 22.2727)
(defn quil-update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   ;:angle (+ (:angle state) 0.1)})
   })
(def op-sentinel-x (* 15 x-scalar))
(def op-sentinel-y (* 7.33 y-scalar))
(def targ-x (* 15 x-scalar))
(def targ-y (* 11.75 y-scalar))
(defn line [line-num]
  ;utility function for generating line coordinates in the body of the control unit
  (let [line-height 0.55]
    (zipmap [:x :y] (into [] [(* 2.5 x-scalar)
                              (* (+ 6.75 (* line-num line-height)) y-scalar)]))))
(defn translate-target []
  (if (= (get-in @app-state [:current-target]) :x)
    "r1"
    (if (= (get-in @app-state [:current-target]) :y)
      "r2"
      "r3")))

(defn draw-rectangle
  [x1 y1 x2 y2] (comp (q/rect (* x1 x-scalar)
                              (* y1 y-scalar)
                              (* x2 x-scalar)
                              (* y2 y-scalar))))

(defn draw-triangle
  [ordinality]
  (let [x-coords (map (fn [x] (+ x (* ordinality 3))) [2.25 2.5 2])
        y-coords [4 4.5 4.5]]
    (comp (q/triangle
            (* (nth x-coords 0) x-scalar)
            (* (nth y-coords 0) y-scalar)
            (* (nth x-coords 1) x-scalar)
            (* (nth y-coords 1) y-scalar)
            (* (nth x-coords 2) x-scalar)
            (* (nth y-coords 2) y-scalar)))))

(defn draw-circle
  ;draws a circle of radius r around the center coordinates.
  ;if x and y scalars are different, it averages the scaling factor of the radius
  [cx cy r] (comp (q/ellipse (* cx x-scalar)
                             (* cy y-scalar)
                             (* r (/ (+ x-scalar y-scalar) 2))
                             (* r (/ (+ x-scalar y-scalar) 2)))))
(defn draw-caption
  ;inserts a string at the translated coordinate vector
  [s x1 y1] (comp (q/text s
                          (* x1 x-scalar)
                          (* y1 y-scalar))))

(defn print-to-console [& args]
  (map-indexed (fn [line-number txt] (comp (q/text txt
                                                   (get (line line-number) :x)
                                                   (get (line line-number) :y))))
               args))

(defn quil-draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  ;(let [angle (:angle state)
  ;     x (* 150 (q/cos angle))
  ;    y (* 150 (q/sin angle))]




  (let [
        ;the names here appear to be ignored by quil, but they are helpful as comments
        meta-bounding-box (q/rect (* 0.25 x-scalar)
                                  (* 4.5 y-scalar)
                                  (* 35.5 x-scalar)
                                  (* 10.5 y-scalar))

        input-bounding-box (q/rect (* 19 x-scalar)
                                   (* 16 y-scalar)
                                   (* 7 x-scalar)
                                   (* 5 y-scalar))
        output-bounding-box (q/rect (* 28 x-scalar)
                                    (* 16 y-scalar)
                                    (* 7 x-scalar)
                                    (* 5 y-scalar))
        acu-bounding-box (q/rect (* 19 x-scalar)
                                 (* 5 y-scalar)
                                 (* 16 x-scalar)
                                 (* 9.5 y-scalar))
        accumulator-box (q/rect (* 20 x-scalar)
                                (* 9 y-scalar)
                                (* 14 x-scalar)
                                (* 5 y-scalar))
        cpu-bounding-box (q/rect (* 1 x-scalar)
                                 (* 5 y-scalar)
                                 (* 16 x-scalar)
                                 (* 9.5 y-scalar))
        op-box (q/rect (* 20 x-scalar)
                       (* 6.5 y-scalar)
                       (* 14 x-scalar)
                       (* 1.75 y-scalar))
        ;ram-bounding-box    (q/rect (* 0.5 x-scalar)
        ;                           (* 2.5 y-scalar)
        ;                          (* 33.5 x-scalar)
        ;                         (* 3 y-scalar))
        instruction1 (q/rect (* 0.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction2 (q/rect (* 3.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction3 (q/rect (* 6.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction4 (q/rect (* 9.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction5 (q/rect (* 12.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction6 (q/rect (* 15.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction7 (q/rect (* 18.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction8 (q/rect (* 21.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction9 (q/rect (* 24.5 x-scalar)
                             (* 1 y-scalar)
                             (* 3 x-scalar)
                             (* 3 y-scalar))
        instruction10 (q/rect (* 27.5 x-scalar)
                              (* 1 y-scalar)
                              (* 3 x-scalar)
                              (* 3 y-scalar))
        instruction11 (q/rect (* 30.5 x-scalar)
                              (* 1 y-scalar)
                              (* 3 x-scalar)
                              (* 3 y-scalar))
        code (get-in @app-state [:opcode])

        ]
    (apply q/fill [200])
    (q/rect (* 19 x-scalar)
            (* 16 y-scalar)
            (* 7 x-scalar)
            (* 5 y-scalar))
    (q/rect (* 28 x-scalar)
            (* 16 y-scalar)
            (* 7 x-scalar)
            (* 5 y-scalar))
    (q/rect (* 19 x-scalar)
            (* 5 y-scalar)
            (* 16 x-scalar)
            (* 9.5 y-scalar))
    (q/rect (* 20 x-scalar)
            (* 9 y-scalar)
            (* 14 x-scalar)
            (* 5 y-scalar))
    (q/rect (* 1 x-scalar)
            (* 5 y-scalar)
            (* 16 x-scalar)
            (* 9.5 y-scalar))
    (q/rect (* 20 x-scalar)
            (* 6.5 y-scalar)
            (* 14 x-scalar)
            (* 1.75 y-scalar))
    (q/rect (* 10 x-scalar)
            (* 8.33 y-scalar)
            (* 4 x-scalar)
            (* 2.41 y-scalar))
    (q/rect (* 2 x-scalar)
            (* 6.5 y-scalar)
            (* 7 x-scalar)
            (* 7.5 y-scalar))
    ;Move origin point to the center of the sketch.
    ; Draw the circle.
    (apply q/fill [63 2 0])
    (q/line (* 12 x-scalar) op-sentinel-y op-sentinel-x op-sentinel-y)
    (q/line (* 12 x-scalar) op-sentinel-y (* 12 x-scalar) (* 8.33 y-scalar))
    (q/line (* 12 x-scalar) targ-y targ-x targ-y)
    (q/line (* 12 x-scalar) targ-y (* 12 x-scalar) (* 10.75 y-scalar))




    ; move the input line over if there's a shift event
    (if (true? (get-in @app-state [:shift-in]))
      (q/line (* 20 x-scalar) (* 16 y-scalar) (* 25 x-scalar) (* 14 y-scalar))
      (q/line (* 22 x-scalar) (* 16 y-scalar) (* 27 x-scalar) (* 14 y-scalar)))
    (q/line (* 32 x-scalar) (* 16 y-scalar) (* 27 x-scalar) (* 14 y-scalar))

    (if (= (get-in @app-state [:current-target]) :x)
      (do
        (q/ellipse (* 21.25 x-scalar) (* 10.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
        (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 10.75 y-scalar)))
      (if (= (get-in @app-state [:current-target]) :y)
        (do (q/ellipse (* 21.25 x-scalar) (* 11.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
            (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 11.75 y-scalar)))
        (do (q/ellipse (* 21.25 x-scalar) (* 12.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
            (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 12.75 y-scalar)))))
    (q/line op-sentinel-x op-sentinel-y (* 20 x-scalar) op-sentinel-y)


    ; boolean sentinel for op register
    (if (empty? (get-in @app-state [:values :op]))
      (apply q/fill [250 340 240])
      (apply q/fill [80 250 340]))
    (q/ellipse op-sentinel-x op-sentinel-y (* 2 x-scalar) (* 2 y-scalar))
    ; sentinel node for current target
    (if (not (contains? (set [3 1 5]) (get-in @app-state [:opcode])))
      (apply q/fill [250 340 240])
      (apply q/fill [80 250 340]))
    (q/ellipse targ-x targ-y (* 2 x-scalar) (* 2 y-scalar))

    ;solder the sentinels to the opcode getter

    (apply q/fill [63 2 0])

    (q/text "INPUT " (* 19.66 x-scalar) (* 17 y-scalar))
    (q/text (str "keyboard:") (* 20.33 x-scalar) (* 18 y-scalar))
    (q/text (str (get-in @keyboard-input [:key-id])) (* 23.33 x-scalar) (* 18 y-scalar))
    (q/text (str "ascii code:") (* 20.33 x-scalar) (* 19 y-scalar))
    (q/text (str (get-in @keyboard-input [:ascii-code])) (* 23.33 x-scalar) (* 19 y-scalar))
    (q/text "OUTPUT " (* 28.66 x-scalar) (* 17 y-scalar))
    (q/text (str (get-in @app-state [:values (get-in @app-state [:current-target])])) (* 29.33 x-scalar) (* 18 y-scalar))
    (q/text "ACCUMULATOR " (* 21 x-scalar) (* 10 y-scalar))
    (q/text "r1" (* 22 x-scalar) (* 11 y-scalar))
    (q/text (get-in @app-state [:values :x]) (* 23 x-scalar) (* 11 y-scalar))
    (q/text "r2" (* 22 x-scalar) (* 12 y-scalar))
    (q/text (get-in @app-state [:values :y]) (* 23 x-scalar) (* 12 y-scalar))
    (q/text "r3" (* 22 x-scalar) (* 13 y-scalar))
    (q/text (get-in @app-state [:values :result]) (* 23 x-scalar) (* 13 y-scalar))
    (q/text "ARITHMETIC CONTROL UNIT " (* 20 x-scalar) (* 6 y-scalar))
    (q/text "op" (* 22 x-scalar) (* 7.5 y-scalar))
    (q/text (get-in @app-state [:values :op]) (* 23 x-scalar) (* 7.5 y-scalar))
    (q/text "CONTROL UNIT" (* 2 x-scalar) (* 6 y-scalar))
    (q/text "INSTRUCTION REGISTERS" (* 1 x-scalar) (* 0.85 y-scalar))
    (q/text "0" (* 3 x-scalar) (* 3.8 y-scalar))
    (q/text "1" (* 6 x-scalar) (* 3.8 y-scalar))
    (q/text "2" (* 9 x-scalar) (* 3.8 y-scalar))
    (q/text "3" (* 12 x-scalar) (* 3.8 y-scalar))
    (q/text "4" (* 15 x-scalar) (* 3.8 y-scalar))
    (q/text "5" (* 18 x-scalar) (* 3.8 y-scalar))
    (q/text "6" (* 21 x-scalar) (* 3.8 y-scalar))
    (q/text "7" (* 24 x-scalar) (* 3.8 y-scalar))
    (q/text "8" (* 27 x-scalar) (* 3.8 y-scalar))
    (q/text "9" (* 29.75 x-scalar) (* 3.8 y-scalar))
    (q/text "10" (* 32.8 x-scalar) (* 3.8 y-scalar))
    (q/text "OPCODE" (* 10.5 x-scalar) (* 9 y-scalar))
    (q/text (get-in @app-state [:opcode]) (* 11.5 x-scalar) (* 10.25 y-scalar))
    (if (= (get-in @app-state [:current-target]) :x)
      (q/text "r1" (* 14.83 x-scalar) (* 11.89 y-scalar))
      (if (= (get-in @app-state [:current-target]) :y)
        (q/text "r2" (* 14.83 x-scalar) (* 11.89 y-scalar))
        (q/text "r3" (* 14.83 x-scalar) (* 11.89 y-scalar))))

    (cond (= code 0) (do
                       (draw-triangle 0)
                       (q/text (print-to-console " " ";the first action" " " "(apply (opcode 0) [num])" "=> loading..." "..." (apply str "now putting '" (get-in @keyboard-input [:key-id]) "' in :r1")) 1 1)
                       )
          (= code 3) (do
                       (draw-triangle 3)
                       (q/text (print-to-console " " ";keep stringing to" "  target register" " " "(apply (opcode 3) [num]" "=> loading..." "..." (apply str "putting '" (get-in @keyboard-input [:key-id]) "' in " (translate-target) "...") " " "update complete.") 1 1)
                       )
          (= code 1) (do
                       (draw-triangle 1)
                       (q/text (print-to-console " " ";switch register to r2" "  ;and put val in r2" " " "(apply (opcode 1) [num]) " "=>  loading..." "..." " " (apply str "putting '" (get-in @keyboard-input [:key-id]) "'" "  in :r2...") " ""update complete.") 1 1))
          (= code 2) (do
                       (draw-triangle 2)
                       (q/text (print-to-console " " ";lock r1 and update the " "  cleared op reg" " " "(apply (opcode 2) [num]) " "=>  loading..." "..." (apply str "setting op to'" (show 'op) "'...") " " "update complete.") 1 1))
          (= code 6) (do
                       (draw-triangle 6)
                       (q/text (print-to-console " " ";chained expression" "  (e.g. '5+4-7')" " " "(apply (opcode 6) [num]) " "=> loading..." " " "pushing vectorized " "      expression to r3..." (apply str "r3 evaluates to '" (show 'x) "'...") (apply str "copying '" (show 'x) "' to locked r1...") (apply str "setting op to '" (show 'op) "'...") " " "evaluation complete.") 1 1))
          (= code 8) (do
                       (draw-triangle 8)
                       (q/text (print-to-console " " ";resume chaining a " "  previously evaluated" "  expression" " " "(apply (opcode 8) [num]))" "=> loading..." " " (str "copying '" (show 'x) "' from r3 to locked r1...") "now clearing r3..." (apply str "setting op to '" (show 'op) "'") "evaluation complete.") 1 1))
          (= code 7) (do
                       (draw-triangle 7)
                       (q/text (print-to-console " " ";evaluate normally and" "  flush the registers" " " "(apply (opcode 8) [num]))" "=> loading..." " " "pushing (op r1 r2) to r3..." (apply str "r3 evaluates to '" (show 'result) "'...") "flushing the registers..." " " "evaluation complete.") 1 1))
          (= code 5) (do
                       (draw-triangle 5)
                       (q/text (print-to-console " " ";start a new expression" " " "(apply (opcode 5) [num])" "=> loading...." " " "flushing r3..." (apply str "now putting '" (show 'x) "' in r1...") " " "update complete.") 1 1))
          (= code 10) (do
                        (draw-triangle 10)
                        (q/text (print-to-console " " ";bad expression" "  flush registers but" "  push r1 to r3"  " " "(apply (opcode 10) [num]))" "=> loading..." " " "pushing r1 to r3..." "flushing the registers..." " " "update complete.") 1 1))
          :else (q/text (print-to-console " ""[heavy breathing]" " " " " " " "listening to keyboard " "  for numbers...") 1 1)
          )))
;(apply (opcode 1) [num])) ;update :current-target to y and assoc the new val
;        (apply (opcode 4) [num])) ;keep concatenating to y
;  (apply (opcode 5) [num])) ;clear registers, reset target to x, put val there
;(shift? num) (swap! app-state assoc-in [:shift-in] true) ;helper events for keyboard inputs
;(unshift? num) (swap! app-state assoc-in [:shift-in] false)
;(operator? num) (if (empty? ans)
;                  (if (empty? y)
;                    (if (empty? op)
;                      (if (empty? x)
;                        (apply (opcode -1) []) ;don't add voids
;                        (apply (opcode 2) [num])) ;typical usual case for ops
;                      (apply (opcode 2) [num])) ;if duplicate ops, we take most recent. same logic
;                    (apply (opcode 6) [num])) ;chained expressions are ok (e.g. 5+3*8-2)
;                  (apply (opcode 8) [num])) ;resume chaining if the prev op was "equals"
;(eval? val) (if (empty? ans)
;              (if (empty? y)
;                (if (empty? op)
;                  (if (empty? x)
;                    (apply (opcode -1) []) ;don't evaluate voids
;                    (apply (opcode 10) [])) ;let x equal itself
;                  (apply (opcode 11) [])) ;stupid edge case
;                (apply (opcode 7) [])) ;normal evaluation flushes all but the output register
;              (apply (opcode -1) []))))) ;already evaluated, do nothing
;
;
;(= code 1) (q/text (print-to-console "loading instr reg 1..." "..." "'(map (reduce apply [put]) " "
;                                    (q/text (str "loading instr reg 1...") (get (line 1) :x) (get (line 1) :y))
;                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
;                                    (q/text (str "(put :r2 (target))") (get (line 3) :x) (get (line 3) :y))
;                                    (q/text (str "(put " (get-in @keyboard-input [:key-id]) " :r2)") (get (line 4) :x) (get (line 4) :y))
;                                    (q/text (str "=> 'ok") (get (line 2) :x) (get (line 2) :y)))
;          (= code 3) (do
;                                    (q/text (str "loading instr reg 3...") (get (line 1) :x) (get (line 1) :y))
;                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
;                                    (q/text (str "(eval '(put (key) (target))") (get (line 3) :x) (get (line 3) :y))
;                                    (q/text (str "=> (put " (get-in @keyboard-input [:key-id]) " " (translate-target) ")") (get (line 4) :x) (get (line 4) :y)))
;          :else (q/text (print-to-console " " "i am a robot" "  *bleep bloop*" ) 0 0))))
;
;                     ;;1 push to empty y register
;                     ;(fn [e] (do (divert-route :current-target :y)
;                     ;            (put e :current-target)))
;                     ;;2 push to empty op
;                     ;(fn [e] (put e :control-bus))
;                     ;;3 push to a non-empty x-register
;                     ;(fn [e] (shunt e :current-target))
;                     ;;4 push to a non-empty y-register
;                     ;(fn [e] (shunt e :current-target))
;                     ;;5 push to a sparkly clean x register (triggered when "equals" is followed by a number)
;                     ;(fn [e]
;                     ;  (do (flushRegister :result)
;                     ;      (flushRegister :op)
;                     ;      (flushRegister :x)
;                     ;      (flushRegister :y)
;                     ;      (divert-route :current-target :x)
;                     ;      (put e :current-target)))
;                     ;;6 push to fully-evaluated op register
;                     ;(fn [e]
;                     ;  (if (can-evaluate?)
;                     ;    (do (put (apply (dispatch (show 'op))    ; Try not to assume a particular data type.  Just serialize these jumps:
;                    [(js/parseFloat (show 'x))    ; 1) push expression to output-register (we know it's well-formed)
;                     (js/parseFloat (show 'y))])   ; 2) reduce it down
;             :data-bus)                          ; 3) clear non-empty input registers
;        (flushRegister :x)                        ; 4) allocate space in x
;        (put (show 'data-bus) :primary-register)  ; 5) box it up
;        (flushRegister :result)
;        (flushRegister :y)
;        (flushRegister :op)
;        (divert-route :current-target :x)
;        (put e :control-bus))))
;;7 eval and push answer to output register
;(fn []
;  (if (can-evaluate?)
;    (do (put (apply (dispatch (show 'op))
;                    [(js/parseFloat (show 'x))
;                     (js/parseFloat (show 'y))])
;             :data-bus)
;        (flushRegister :x)
;        (flushRegister :y)
;        (flushRegister :op)
;        (divert-route :current-target :result))))
;;8 push op to previously evaluated expression
;(fn [e]
;  (do (put (show 'data-bus) :primary-register)
;      (put e :control-bus)
;      (flushRegister :result)
;      (divert-route :current-target :x)))
;;10 edge case such that x equals itself if y is empty
;(fn []
;  (do (put (show 'x) :data-bus)
;      (flushRegister :x)
;      (divert-route :current-target :result)))
;;11 stupid edge case in the event the exp isn't well-formed ("5 +")
;(fn []
;  (do (put (show 'x) :data-bus)
;      (flushRegister :x)
;      (flushRegister :op)
;      (divert-route :current-target :result)))]))

;(q/line (* 10 x-scalar) (* 9 y-scalar) (
;(do
;(q/rect (* 20 x-scalar)
;        (* 6.5 y-scalar)
;        (* 14 x-scalar)
;        (* 1.75 y-scalar))
;(apply q/fill [100 100 100])
;(q/text "Locked. Incorrect arity for eval" (* 22 x-scalar) (* 7.5 y-scalar))))
;               (q/end-shape)



;(defn quil-input-setup []
;  ; Set frame rate to 30 frames per second.
;  (q/frame-rate 30)
;  ; Set color mode to HSB (HSV) instead of default RGB.
;  (q/color-mode :hsb)
;  ; setup function returns initial state. It contains
;  ; circle color and position.
;  {:color 0
;   :angle 0})
;(defn quil-update-input-state [state]
;  ; Update sketch state by changing circle color and position.
;  {:color (mod (+ (:color state) 0.7) 255)
;   ;:angle (+ (:angle state) 0.1)})
; })
;
;(defn quil-draw-input-state [input-state]
;  (let [input-bounding-box  (q/rect (* 19 x-scalar)
;                              (* 16 y-scalar)
;                              (* 7 x-scalar)
;                              (* 5 y-scalar))]))

(q/defsketch input
             :host "succulent"
             :size [1000 500]
             ; setup function called only once, during sketch initialization.
             :setup quil-setup
             ; update-state is called on each iteration before draw-state.
             :update quil-update-state
             :draw quil-draw-state
             ; This sketch uses functional-mode middleware.
             ; Check quil wiki for more info about middlewares and particularly
             ; fun-mode.
             :middleware [m/fun-mode])

;;(q/defsketch input
;;             :host "josefk"
;;             :size [(* 7 x-scalar) (* 5 y-scalar)]
;;             :setup quil-input-setup
;;
;;             ; update-state is called on each iteration before draw-state.
;;             :update quil-update-input-state
;;             :draw quil-draw-input
;;             ; This sketch uses functional-mode middleware.
;;             ; Check quil wiki for more info about middlewares and particularly
;;             ; fun-mode.
;;             :middleware [m/fun-mode])
;
;
;;(add-watch x :on-change (fn [_ _ _ _] (render!)))
;;(add-watch y :on-change (fn [_ _ _ _] (render!)))
;;(add-watch op :on-change (fn [_ _ _ _] (render!)))
;
(add-watch app-state :on-change (fn [_ _ _ _] (render!)))
(add-watch keyboard-input :on-change (fn [_ _ _ _] (render!)))
;(add-watch result :on-change (fn [_ _ _ _] (render!)))

(render!)

