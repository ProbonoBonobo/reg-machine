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
;(def state (atom {:accumulator {:r1 "" :r2 "" :r3 "" :op ""} :target :r1})

(defn bind-input [input-atom]
  #(reset! input-atom (-> %1 .-target .-value)))

(defn some-component []
  (let [value-atom (atom nil)]
    [:input {:type "text" :on-change (bind-input value-atom)}]))


(def app-state (atom {:values {:x "" :y "" :op "" :result "" :tape []} :data-bus :result :control-bus :op :address-bus :x :primary-register :x :secondary-register :y
                      :current-target :x :shift-in false :opval "" :opcode nil}))
(def keyboard-input (atom {:key-id nil :ascii-code nil}))

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
;(def val (get-in @app-state [:opval]) )

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
                    (shift? val) (swap! app-state assoc-in [:shift-in] true) ;helper events for keyboard inputs
                    (unshift? val) (swap! app-state assoc-in [:shift-in] false)
                    (operator? val) (if (empty? ans)
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
                    (eval? val) (if (empty? ans)
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
                      ;[:button {:href    "#"
                      ;          :onClick #(do
                      ;                     (but app-state target-register '.)
                      ;                     )}
                      ;
                      ; "."] " "]



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
                                (d/td (d/code {} (str (get-in @app-state [:shift-in])))))))

                     ]))))

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
                           (swap! keyboard-input assoc-in [:key-id] character)
                           (swap! keyboard-input assoc-in [:ascii-code] ascii-code)
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
(def img (atom nil))
(defn quil-setup []
  ; Set frame rate to 30 frames per second.
  (reset! img (q/load-image "lock-1.jpg"))
  (q/frame-rate 10)
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
  (let [line-height .75]
  (zipmap [:x :y] (into [] [(* 2.5 x-scalar)
                            (* (+ 6.5 (* line-num line-height)) y-scalar)]))))
(defn translate-target []
  (if (= (get-in @app-state [:current-target]) :x)
    "r1"
    (if (= (get-in @app-state [:current-target]) :y)
      "r2"
      "r3")))


(defn quil-draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  ;(let [angle (:angle state)
  ;     x (* 150 (q/cos angle))
  ;    y (* 150 (q/sin angle))]
  (let [x 19
        y 16
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
            (* 6 x-scalar)
            (* 7 y-scalar))
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
    ;
    ;(if (can-evaluate?)
    ;  (q/line (* 20 x-scalar)
    ;          (* 7 y-scalar)
    ;          (* 17 x-scalar)
    ;          (* 7 y-scalar)))

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

    ;
    ;   (q/line op-sentinel-x op-sentinel-y (* 21.5 x-scalar) (* 7.33 y-scalar))
    ;   (q/line op-sentinel-x op-sentinel-y (* 15 x-scalar) (* 11.75 y-scalar)))


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
    (q/text "1" (* 3 x-scalar) (* 3.8 y-scalar))
    (q/text "2" (* 6 x-scalar) (* 3.8 y-scalar))
    (q/text "3" (* 9 x-scalar) (* 3.8 y-scalar))
    (q/text "4" (* 12 x-scalar) (* 3.8 y-scalar))
    (q/text "5" (* 15 x-scalar) (* 3.8 y-scalar))
    (q/text "6" (* 18 x-scalar) (* 3.8 y-scalar))
    (q/text "7" (* 21 x-scalar) (* 3.8 y-scalar))
    (q/text "8" (* 24 x-scalar) (* 3.8 y-scalar))
    (q/text "9" (* 27 x-scalar) (* 3.8 y-scalar))
    (q/text "10" (* 29.75 x-scalar) (* 3.8 y-scalar))
    (q/text "11" (* 32.8 x-scalar) (* 3.8 y-scalar))
    (q/text "OPCODE" (* 10.5 x-scalar) (* 9 y-scalar))
    (q/text (get-in @app-state [:opcode]) (* 11.5 x-scalar) (* 10.25 y-scalar))
    (if (= (get-in @app-state [:current-target]) :x)
      (q/text "r1" (* 14.83 x-scalar) (* 11.89 y-scalar))
      (if (= (get-in @app-state [:current-target]) :y)
        (q/text "r2" (* 14.83 x-scalar) (* 11.89 y-scalar))
        (q/text "r3" (* 14.83 x-scalar) (* 11.89 y-scalar))))
    (cond (= code 0) (q/text (str "(put " (get-in @keyboard-input [:key-id]) " :register :" (translate-target) ")") (get (line 1) :x) (get (line 2) :y))
          (= code 1) (do
                       (q/text (str "loading instr reg 1...") (get (line 1) :x) (get (line 1) :y))
                       (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
                       (q/text (str "(put :r2 (target))") (get (line 3) :x) (get (line 3) :y))
                       (q/text (str "(put " (get-in @keyboard-input [:key-id]) " :r2)") (get (line 4) :x) (get (line 4) :y))
                       (q/text (str "=> 'ok") (get (line 2) :x) (get (line 2) :y))
                       (= code 3) (do
                                    (q/text (str "loading instr reg 3...") (get (line 1) :x) (get (line 1) :y))
                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
                                    (q/text (str "(eval '(put (key) (target))") (get (line 3) :x) (get (line 3) :y))
                                    (q/text (str "=> (put " (get-in @keyboard-input [:key-id]) " " (translate-target) ")") (get (line 4) :x) (get (line 4) :y))))))
  )
                     ;;1 push to empty y register
                     ;(fn [e] (do (divert-route :current-target :y)
                     ;            (put e :current-target)))
                     ;;2 push to empty op
                     ;(fn [e] (put e :control-bus))
                     ;;3 push to a non-empty x-register
                     ;(fn [e] (shunt e :current-target))
                     ;;4 push to a non-empty y-register
                     ;(fn [e] (shunt e :current-target))
                     ;;5 push to a sparkly clean x register (triggered when "equals" is followed by a number)
                     ;(fn [e]
                     ;  (do (flushRegister :result)
                     ;      (flushRegister :op)
                     ;      (flushRegister :x)
                     ;      (flushRegister :y)
                     ;      (divert-route :current-target :x)
                     ;      (put e :current-target)))
                     ;;6 push to fully-evaluated op register
                     ;(fn [e]
                     ;  (if (can-evaluate?)
                     ;    (do (put (apply (dispatch (show 'op))    ; Try not to assume a particular data type.  Just serialize these jumps:
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

(q/defsketch josefk
             :host "josefk"
             :size [800 500]
             ; setup function called only once, during sketch initialization.
             :setup quil-setup
             ; update-state is called on each iteration before draw-state.
             :update quil-update-state
             :draw quil-draw-state
             ; This sketch uses functional-mode middleware.
             ; Check quil wiki for more info about middlewares and particularly
             ; fun-mode.
             :middleware [m/fun-mode])

;(q/defsketch input
;             :host "josefk"
;             :size [(* 7 x-scalar) (* 5 y-scalar)]
;             :setup quil-input-setup
;
;             ; update-state is called on each iteration before draw-state.
;             :update quil-update-input-state
;             :draw quil-draw-input
;             ; This sketch uses functional-mode middleware.
;             ; Check quil wiki for more info about middlewares and particularly
;             ; fun-mode.
;             :middleware [m/fun-mode])


    ;(add-watch x :on-change (fn [_ _ _ _] (render!)))
    ;(add-watch y :on-change (fn [_ _ _ _] (render!)))
    ;(add-watch op :on-change (fn [_ _ _ _] (render!)))

    (add-watch app-state :on-change (fn [_ _ _ _] (render!)))
    (add-watch keyboard-input :on-change (fn [_ _ _ _] (render!)))
    ;(add-watch result :on-change (fn [_ _ _ _] (render!)))

    (render!)
