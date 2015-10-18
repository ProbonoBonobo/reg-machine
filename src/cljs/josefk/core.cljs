(ns josefk.core
  (:require [sablono.core :as sab]
            [om-bootstrap.button :as b]
            [om-bootstrap.table :refer [table]]
            [om-tools.dom :as d]
            [om-bootstrap.grid :as g]
            [om-bootstrap.random :as r]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(enable-console-print!)

;(defonce app-state (atom {:text "Hello Chestnut!"}))
;
;
(defn bind-input [input-atom]
  #(reset! input-atom (-> %1 .-target .-value)))

(defn some-component []
  (let [value-atom (atom nil)]
    [:input {:type "text" :on-change (bind-input value-atom)}]))


(def app-state (atom {:values {:x "" :y "" :op "" :result "" :tape []} :data-bus :result :control-bus :op :address-bus :x :primary-register :x :secondary-register :y
                      :current-target :x :shift-in false :opval ""}))
(def keyboard-input (atom {:key-id nil}))

(defn flushRegister [m]
  ; Destructively clear the associated register.
  (swap! app-state assoc-in [:values m] ""))

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


(defn null? [lat]
  ; tweak clojure to be more like scheme
  ; indifferent to the difference between nil, nothing, and the empty string
  (or (empty? lat) (= "" (first lat)) (and (= (first lat) nil) (= (count lat) 1))))

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
(defn operator? [val]
  (let [ops (set ["add" "subtract" "multiply" "divide" "/" "*" "+" "-"])]
    (contains? ops val)))
(defn eval? [val]
  (let [evaluators (set ["equals" "="])]
    (contains? evaluators val)))
(defn num? [val]
  (or (number? val)))
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
(def val (get-in @app-state [:opval]) )

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
          ; no else case. just do nothing on undefined/badly-formed inputs (provided they don't break the calc)
          ; null inputs call this procedure also, but push an empty string (i.e. do nothing)

          (defn bus-driver [val]
            ; the bus-driver's name is otto. he's a cool dude.
            ; he handles state changes otto-matically.
            ; attempts to do at a high level what a program control unit does in von neumann architecture.
            ; otto's responsibilities are total: he updates the address bus, control bus, data bus, and numeric registers
            ; from initial input to final output.
            ; in theory, the bus registers enable indexical (i.e. stack-based) access to value registers, but registers
            ; are currently implemented as strings.  so the busses are basically just static pointers for now. if that changes,
            ; bus accessor methods can be written to effectively control the flow of time, reverse state, and
            ; even reverse the order of evaluation!
            ;
            (let [address-bus (show 'address-bus)
                  control-bus (show 'control-bus)
                  data-bus (show 'data-bus)
                  key-in (show 'key-in)
                  x (show 'x)
                  y (show 'y)
                  op (show 'op)
                  ans (show 'result)]

              (cond (num? val) (if (empty? ans)
                                 (if (empty? y)
                                   (if (empty? op)
                                     (if (empty? x)
                                       (push val :to-empty :x-register) ;the first action
                                       (push val :to-non-empty :x-register)) ;keep concatenating to x
                                     (push val :to-empty :y-register)) ;update :current-target to y and assoc the new val
                                   (push val :to-non-empty :y-register)) ;keep concatenating to y
                                 (push val :to-fresh-sparkly :x-register)) ;clear registers, reset target to x, put val there
                    (shift? val) (swap! app-state assoc-in [:shift-in] true) ;helper events for keyboard inputs
                    (unshift? val) (swap! app-state assoc-in [:shift-in] false)
                    (operator? val) (if (empty? ans)
                                      (if (empty? y)
                                        (if (empty? op)
                                          (if (empty? x)
                                            (push "" :nothin-baby :shhh-just-the-wind) ;don't add voids
                                            (push val :to-empty :op-register)) ;this is the usual case
                                          (push val :to-non-empty :op-register)) ;if duplicate ops, take most recent
                                        (push val :to-fully-evaluated :op-register)) ;chained expressions are ok (e.g. 5+3*8-2)
                                      (push val :to-previously-evaluated :op-register)) ;resume chaining if the prev op was "equals"
                    (eval? val) (if (empty? ans)
                                  (if (empty? y)
                                    (if (empty? op)
                                      (if (empty? x)
                                        (push "" :nothin-baby :shhh-just-the-wind) ;don't evaluate voids
                                        (push val :to-unevaluated :output-register)) ;let x equal itself
                                      (push val :to-unevaluated :output-register)) ;stupid edge case
                                    (push val :to-fully-evaluated :output-register)) ;normal evaluation flushes all but the output register
                                  (push "" :nothin-baby :shhh-just-the-wind))))) ;already evaluated, do nothing
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

    (cond (num? num) (if (empty? ans)
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


    (defn butt-stuff [arg]
      ; implements the interface to our non-blocking I/O Monad, the bus-driver control unit
      (do
        (swap! keyboard-input assoc-in [:key-id] (str arg))
        (bus-driver arg)
        (if (not (= arg :shift-in))
          (swap! app-state assoc-in [:shift-in] false))))

    (defn a-simple-stateful-object [app-state input]
      (let [target-register (get-in @app-state [:current-target])]


        (do
          (sab/html [:div
                     [:div
                      [:h5
                       [:sub " op: " (str (if (not (empty? (show 'op))) (cond (= (show 'op) "add") " + "
                                                                              (= (show 'op) "subtract") " - "
                                                                              (= (show 'op) "multiply") " * "
                                                                              (= (show 'op) "divide") " / ")))]]
                      [:h1 (r/well {} (str (get-in @app-state [:values (get-route :current-target)])))]
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
                       "/"] " "
                      [:div



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
                                 :onClick #(do
                                            (concatToRegister app-state target-register '.)
                                            )}

                        "."] " "]

                      [:div


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
                                 :onClick #(do (butt-stuff "multiply"))
                                 }
                        "*"] " "
                       [:button {:href    "#"
                                 :onClick #(do (butt-stuff "equals"))

                                 }
                        "="]]]



                     (table {:striped? true :bordered? true :condensed? false :hover? true}
                            (d/thead
                              (d/tr {:class "col-md-*"}
                                    (d/th {:width 30} "#")
                                    (d/th {:width 100} "R")
                                    (d/th {:width 1000} "Value")))
                            (d/tbody
                              (d/tr
                                (d/td "0")
                                (d/td (d/code {} "X Register:"))
                                (d/td (d/code {} (show 'x))))
                              (d/tr
                                (d/td "1")
                                (d/td (d/code {} "Y Register"))
                                (d/td (d/code {} (show 'y))))
                              (d/tr
                                (d/td "2")
                                (d/td (d/code {} "Instruction Register:"))
                                (d/td (d/code {} (show 'op))))
                              (d/tr
                                (d/td "3")
                                (d/td (d/code {} "Accumulator Register:"))
                                (d/td (d/code {} (show 'result))))
                              (d/tr
                                (d/td "4")
                                (d/td (d/code {} "Address Register:"))
                                (d/td (d/code {} (get-route :current-target))))
                              (d/tr
                                (d/td "5")
                                (d/td (d/code {} "Tape register:"))
                                (d/td (d/code {} (show 'tape))))))
                     [:div [:p ""]]
                     (table {:striped? true :bordered? true :condensed? false :hover? true}
                            (d/thead
                              (d/tr {:class "col-md-*"}
                                    (d/th {:width 30} "I/O Monad: ")
                                    (d/th {:width 100} "Current: ")))
                            (d/tbody
                              (d/tr
                                (d/td (d/code {} "State Register:"))
                                (d/td (str (get-in @keyboard-input [:key-id]))))
                              (d/tr
                                (d/td (d/code {} "Shift key:"))
                                (d/td (d/code {} (str (get-in @app-state [:shift-in])))))))]))))

    (def stringnums (set ["1" "2" "3" "4" "5" "6" "7" "8" "9" "0"]))

    (def stringops (set ["+" "-" "/" "*"]))

    (defn ascii-number? [ascii-code]
      (and (< ascii-code 58)
           (> ascii-code 47)))

    (defn ascii-shift? [ascii-code]
      (= 16 ascii-code))

    (defn convert-to-int [ascii-code]
      (- ascii-code 48))

    (.addEventListener js/window "keydown"
                       (fn [e]
                         (let [ascii-code (.-keyCode e)
                               character (js/String.fromCharCode (.-keyCode e))
                               shifted? (get-in @app-state [:shift-in])]
                           (cond
                             (= ascii-code 16) (swap! app-state assoc-in [:shift-in] true)
                             (= ascii-code 48) (butt-stuff 0)
                             (= ascii-code 49) (butt-stuff 1)
                             (= ascii-code 50) (butt-stuff 2)
                             (= ascii-code 51) (butt-stuff 3)
                             (= ascii-code 52) (butt-stuff 4)
                             (= ascii-code 53) (butt-stuff 5)
                             (= ascii-code 54) (butt-stuff 6)
                             (= ascii-code 55) (butt-stuff 7)
                             (= ascii-code 56) (if (true? (get-in @app-state [:shift-in]))
                                                 (butt-stuff "multiply")
                                                 (butt-stuff 8))
                             (= ascii-code 57) (butt-stuff 9)
                             (= ascii-code 187) (if (true? (get-in @app-state [:shift-in]))
                                                  (butt-stuff "add")
                                                  (butt-stuff "equals"))
                             (= ascii-code 189) (if (true? (not (get-in @app-state [:shift-in])))
                                                  (butt-stuff "subtract"))
                             (= ascii-code 191) (if (false? (get-in @app-state [:shift-in]))
                                                  (butt-stuff "divide"))
                             :else (swap! app-state assoc-in [:shift-in] false)))))

    (defn render! []
      (.render js/React
               (a-simple-stateful-object app-state keyboard-input)
               (.getElementById js/document "app")))


    ;(add-watch x :on-change (fn [_ _ _ _] (render!)))
    ;(add-watch y :on-change (fn [_ _ _ _] (render!)))
    ;(add-watch op :on-change (fn [_ _ _ _] (render!)))

    (add-watch app-state :on-change (fn [_ _ _ _] (render!)))
    (add-watch keyboard-input :on-change (fn [_ _ _ _] (render!)))
    ;(add-watch result :on-change (fn [_ _ _ _] (render!)))

    (render!)
