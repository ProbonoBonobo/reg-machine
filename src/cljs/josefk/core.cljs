(ns josefk.core
  (:require [sablono.core :as sab]
            ;[om.core :as om]
            [om-bootstrap.button :as b]
            [om-bootstrap.table :refer [table]]
            [om-tools.dom :as d]
            [om-bootstrap.grid :as g]
            [om-bootstrap.random :as r]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

;(defonce app-state (atom {:text "Hello Chestnut!"}))
;
;
(defn bind-input [input-atom]
  #(reset! input-atom (-> %1 .-target .-value)))

(defn some-component []
  (let [value-atom (atom nil)]
    [:input {:type "text" :on-change (bind-input value-atom)}]))


(def app-state (atom {:values {:x "" :y "" :op "" :result "" :tape []}
                      :current-target :x :shift-in false}))
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
        (= arg 'tape) (get-in @app-state [:values :tape])))

(defn boolean? [val]
  ; interestingly clojure doesn't have a primitive predicate test for this
  (not (or (true? val) (false? val))))

(defn toggle [atmap bool-target]
  (let [val (get-in @atmap [:shift-in])]
    ; the ol' boolean switcharoo
    (cond (not (boolean? val))
          val
          :else (if (true? val)
                  (swap! atmap assoc-in [bool-target] false)
                  (swap! atmap assoc-in [bool-target] true)))))
(defn null? [lat]
  ; tweak clojure to be more like scheme
  ; indifferent to the difference between nil, nothing, and the empty string
  (or (empty? lat) (= "" (first lat)) (and (= (first lat) nil) (= (count lat) 1))))

(defn add [x y]
  (+ x y))
(defn reval! [arg]
  ; Destructively update the value of the result register
  (let [current-op (show 'op)
        x-target (if (= (show 'x) "")
                   :result
                   :x)
        prev-calc (if (null? (show 'tape)) ;for functionally reversing the state of the app (not yet implemented)
                    x-target
                    :tape)
        xyvector (into [] (map js/parseFloat (into [] [(get-in @app-state [:values x-target])
                                                       (get-in @app-state [:values :y])])))]
    (cond
      ; TODO: change dispatch type from string to keyword
      ; TODO: consolidate add/subtract/divide/multiply into a single method
      (= current-op "add")
      (do
        (swap! app-state assoc-in [:values :tape] (str "(" current-op " " (get-in @app-state [:values prev-calc]) " " (show 'y) ")"))
        (swap! app-state assoc-in [:values :result] (str (apply + xyvector)))
        (swap! app-state assoc-in [:values :x] "")
        (swap! app-state assoc-in [:values :y] "")
        (swap! app-state assoc-in [:values :op] "")

        )
      (= current-op "subtract")
      (do
        (swap! app-state assoc-in [:values :tape] (str "(" current-op " " (get-in @app-state [:values prev-calc]) " " (show 'y) ")"))
        (swap! app-state assoc-in [:values :result] (str (apply - xyvector)))
        (swap! app-state assoc-in [:values :x] "")
        (swap! app-state assoc-in [:values :y] "")
        (swap! app-state assoc-in [:values :op] "")
        )
      (= current-op "divide")
      (do
        (swap! app-state assoc-in [:values :tape] (str "(" current-op " " (get-in @app-state [:values prev-calc]) " " (show 'y) ")"))
        (swap! app-state assoc-in [:values :result] (str (apply / xyvector)))
        (swap! app-state assoc-in [:values :x] "")
        (swap! app-state assoc-in [:values :y] "")
        (swap! app-state assoc-in [:values :op] "")
        )
      (= current-op "multiply")
      (do
        (swap! app-state assoc-in [:values :tape] (str "(" current-op " " (get-in @app-state [:values prev-calc]) " " (show 'y) ")"))
        (swap! app-state assoc-in [:values :result] (str (apply * xyvector)))
        (swap! app-state assoc-in [:values :x] "")
        (swap! app-state assoc-in [:values :y] "")
        (swap! app-state assoc-in [:values :op] "")
        ))
    (swap! app-state assoc-in [:current-target] :result)

    ))



(defn can-evaluate? [] (and (not (= "" (get-in @app-state [:values :x])))
                            (not (= "" (get-in @app-state [:values :op])))
                            (not (= "" (get-in @app-state [:values :y])))))

(defn concatToRegister [atmap loc value]
  (let [pending-op (get-in @app-state [:values :op])]
    (do
      (if (not (null? (seq pending-op)))
        (swap! app-state assoc-in [:current-target] :y))
      (if (not (= "NaN" (str value)))
        (swap! atmap update-in [:values (get-in @app-state [:current-target])] str value)))))
;(if (can-evaluate?) (do (swap! app-state assoc-in [:values :result] (get-in (reval! 'equals) [:values :result]))))))
;(swap! app-state assoc-in [:values :op] pending-op)
;(swap! app-state assoc-in [:current-target] current-target)))))

(defn register-empty? [target]
  (= (get-in @app-state [:values target]) ""))


(defn op-button-handler [op]
  (cond (and (register-empty? :y) (register-empty? :op)) (do
                                                           (swap! app-state assoc-in [:values :op] op))
        ;(swap! app-state assoc-in [:current-target] :y))
        (and (not (register-empty? :y)) (not (register-empty? :op))) (do
                                                                       (reval! 'equals)
                                                                       (swap! app-state assoc-in [:values :x] (show 'result))
                                                                       (swap! app-state assoc-in [:values :op] op)
                                                                       ))
  ;))
  ;(swap! keyboard-input assoc-in [:key-id] "")
  (swap! app-state assoc-in [:shift-in] false))




(defn a-simple-stateful-object [app-state input]
  (let [target-register (get-in @app-state [:current-target])]


    (do
      (sab/html [:div


                 [:h1
                  (r/well {}  (str (get-in @app-state [:values (get-in @app-state [:current-target])])))
                  ]
                 [:button {:href    "#"

                           :onClick #(concatToRegister app-state target-register 1)}
                  "1"] " "

                 [:button {:href    "#"
                           :onClick #(concatToRegister app-state target-register 2)}
                  "2"] " "

                 [:button {:href    "#"
                           :onClick #(concatToRegister app-state target-register 3)}
                  "3"] " "
                 [:button {:href    "#"
                           :onClick #(op-button-handler "add")}
                  "+"] " "
                 [:button {:href    "#"
                           :onClick #(op-button-handler "divide")}
                  "/"] " "
                 [:div



                  [:button {:href    "#"
                            :onClick #(concatToRegister app-state target-register 4)}
                   "4"] " "
                  [:button {:href    "#"
                            :onClick #(concatToRegister app-state target-register 5)}
                   "5"] " "
                  [:button {:href    "#"
                            :onClick #(concatToRegister app-state target-register 6)}
                   "6"] " "
                  [:button {:href    "#"
                            :onClick #(op-button-handler "subtract")}
                   "-"] " "
                  [:button {:href    "#"
                            :onClick #(do

                                       (concatToRegister app-state target-register '.)
                                       )}

                   "."] " "]

                 [:div


                  [:button {:href    "#"
                            :onClick #(concatToRegister app-state target-register 7)}
                   "7"] " "
                  [:button {:href    "#"
                            :onClick #(concatToRegister app-state target-register 8)}
                   "8"] " "
                  [:button {:href    "#"
                            :onClick #(concatToRegister app-state target-register 9)}
                   "9"] " "
                  [:button {:href    "#"
                            :onClick #(op-button-handler "multiply")
                            }
                   "*"] " "
                  [:button {:href    "#"
                            :onClick #(do (reval! 'equals)
                                          (swap! app-state assoc-in [:values :x] "")
                                          (swap! app-state assoc-in [:values :op] ""))

                            }
                   "="] " "
                  [:button {:href    "#"
                            :onClick #(do ;(concatToRegister app-state target-register \))
                                       (swap! app-state update-in [:values :target-register] (fn [x] (js/parseInt x))))}
                   ")"] " "
                  ]



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
                            (d/td (d/code {} (show 'current-target))))
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
                            (d/td (d/code {} (str (true? (get-in @app-state [:shift-in]))))))))











                 ]

                )
      )

    )
  )
(def stringnums (set ["1" "2" "3" "4" "5" "6" "7" "8" "9" "0"]))
; this is quite ugly, so a word of explanation is called for
; since we're storing the ints as strings for display purposes (and the ascii values are all
; string properties anyway), this is probably the fastest way to see if we need to shunt the
; keydown event to the target register
; FYI - it could be my imagination, but interestingly app performance seems to degrade when the construction
; of this set is deferred to the body of the event listener (i.e., encapsulated in a let statement). it seems totally
; possible the event listener was constructing a new binary tree every time a key was pressed, which would be
; mildly time/space consuming and ah, well, pointless

(def stringops (set ["+" "-" "/" "*"]))


(.addEventListener js/window "keydown"
                   ; The app seems to be working now, but a be mindful of a periodically recurring bug that causes
                   ; duplication of keypress events, s.t. "15+4" propagates outward as "1155+44" (or even "111555+444").
                   ; I suspect that this event listener is probably holding the keydown event hostage in certain
                   ; edge cases where it doesn't immediately return a value. Logic has been simplified a little bit
                   ; to expedite, but could be simplified more. if the issue comes up again, try inserting an ackermann
                   ; function in the body maybe, it may or may not cycle endlessly

                   (fn [e]
                     (let [cached-event e
                           ascii-code (.-keyCode cached-event)
                           character (js/String.fromCharCode (.-keyCode cached-event))
                           shifted? (get-in @app-state [:shift-in])]
                       (do
                         (reset! keyboard-input {:key-id character})
                         (cond (and (contains? stringnums character)
                                    (not shifted?)) (concatToRegister app-state (get-in @app-state [:current-target])
                                                                      character)
                               (= ascii-code 16) (swap! app-state assoc-in [:shift-in] true)
                               ;(= (.-keyCode e) 43) (op-button-handler "add")
                               (true? shifted?) (do
                                                  (cond
                                                    (= (get-in @keyboard-input [:key-id]) "»") (op-button-handler "add")
                                                    (= (get-in @keyboard-input [:key-id]) "8") (op-button-handler "multiply"))
                                                  (swap! app-state assoc-in [:shift-in] false)
                                                  (swap! keyboard-input [:key-id] "")
                                                  )
                               (= (get-in @keyboard-input [:key-id]) "»") (reval! 'equals)
                               (= (get-in @keyboard-input [:key-id]) "½") (op-button-handler "subtract")
                               (= (get-in @keyboard-input [:key-id]) "¾") (concatToRegister app-state (show 'current-target) ".")
                               (= ascii-code 191) (op-button-handler "divide")
                               ;:else (concatToRegister app-state (get-in @app-state [:current-target]) (.charCodeAt (str character))))
                               )

                         ;(swap! keyboard-input [:key-id] "")
                         )



                       ;(contains? stringops (str character))  (op-button-handler "add")
                       ; (swap! app-state assoc-in [:shift-in] true))
                       )))




;(defn main []
;  (let [target-register (get-in @app-state [:current-target])]
;  (om/root
;    (fn [app owner]
;      (reify
;        om/IRender
;        (render [_]
;          (d/h1 nil (get-in @app [:values]) app))))
;    app-state
;    {:target (. js/document (getElementById "app"))})))

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

