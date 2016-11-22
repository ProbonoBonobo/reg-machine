(ns succulent.core
  "0.1.0-SNAPSHOT"
  (:require
    [clojure.set :as set]
    [clojure.string :as string]))
    ;om-bootstrap.button :as b]
    ;[om-bootstrap.table :refer ([table]]
    ;[om-tools.dom :as d]
    ;[om-bootstrap.grid :as g]
    ;[om-bootstrap.random :as etc]
    ;[om.core :as om :include-macros true]
    ;[om.dom :as dom :include-macros true]
    ;[quil.core :as q :include-macros true]
    ;[quil.middleware :as m]))



(def flatvecs [ [1 9 3 1 -9] [] [99999] [2r1111111111111111111 4] ["a" "5" "b" "*" "+" "8" "3" "="] ["9" "9" "3" "*" "4" "0" "0" "="]])
(def nestvecs [ [ 0 2 0 9 9 -9 [ 4 8 2 [ 9 ]]] [[[[[3] 8] 9] 9]999] [9 [[[[[[4]]]]]]]])

(defn exp [x n]
  (loop [acc 1 n n]
    (if (zero? n)
      acc
      (recur (* x acc) (dec n)))))

(defn bool? [x]
  (or (true? x) (false? x)))

(defn int->bool [i]
  (cond
    (not (number? i)) false
    (< i 1) false
    (> i 0) true
    :else false))

(defn bool->int [b]
  (cond
    (not (bool? b)) -1
    (true? b) 1
    (false? b) 0
    :else -1))

(defn ascii?
  [val]
  (< 0x1f val 0x7f))

(defn ascii
  [val]
  (let [modval (mod val 256)]
    (if (ascii? modval)
      (str (char modval))
      (str (char 254)))))



(defn lookup-symbol [sym]

    (cond (= sym 43) "plus"
          (= sym 45) "minus"
          (= sym 47) "divide"
          (= sym 42) "multiply"
          (= sym 94) "exponent"
          (= sym "plus") #(+ %1 %2)
          (= sym "divide") #(/ %1 %2)
          (= sym "minus") #(- %1 %2)
          (= sym "multiply") #(* %1 %2)
          (= sym "exponent") #(exp %1 %2)))

(def K
  {:numbers (sorted-set 48 49 50 51 52 53 54 55 56 57)
   :operators (sorted-set 43 47 42 94 45)
   :minus-sign (sorted-set 45)
   :equals-sign (sorted-set 61)
   :ascii-range (into (sorted-set) (range 0 255))
   :dont-cares (clojure.set/difference (K :ascii-range) (clojure.set/union (K :numbers) (K :operators) (K :minus-sign) (K :equals-sign)))
   :char-range (into (sorted-set) (map ascii (into [] (range 0 255))))})

(defn multiplexer [k]
  (clojure.string/join
    (map bool->int
           [(contains? (K :numbers) k)
            (contains? (K :operator) k)
            (contains? (K :minus-sign) k)
            (contains? (K :equals-sign) k)
            (contains? (K :dont-cares) k)])))

(defn attach-tag [k]
  (let [intval (js/parseInt (str (char k)))]
    [k intval]))

(def cachedascii (into (sorted-map) (map (juxt ascii attach-tag) (into [] (range 0 255)))))

(defn asciitable
  ([x]
           (cond (contains? (K :char-range) x) (get cachedascii x)
                 (contains? (K :ascii-range) x) (get cachedascii (ascii x))
                 :else (str "Unknown arg to asciitable: " x))))

(defn inspect-tag [e]
  (second (asciitable [e])))

(def pred-reg
  (atom {}))

(defn make-fexpr [f fname]
  (reset! pred-reg (conj @pred-reg {fname f})))

(defn print-fexpr [fname]
  (apply (get-in @pred-reg [fname]) []))

;(defn pp [x]
;  (if (map? x) (do (println "Pretty printing the map:")
;                   (cljs.pprint/pprint x))
;               (do (println "Pretty printing the atom:")
;                   (cljs.pprint/pprint @x))))

(def app-state
  (atom {       :focus :data
                :data {:r1 {:state 2r0 :val "" :locked? 0}
                       :r2 {:state 2r0 :val "" :locked? 1}
                       :r3 {:state 2r0 :val "" :locked? 1}}
                :acc  {:op {:state 2r0 :val "" :locked? 0}
                       :eq {:state 2r0 :val "" :locked? 1}}}))

(defn nuke! []
  (reset! app-state {       :focus :data
                            :data {:r1 {:state 2r0 :val "" :locked? 0}
                                   :r2 {:state 2r0 :val "" :locked? 1}
                                   :r3 {:state 2r0 :val "" :locked? 1}}
                            :acc  {:op {:state 2r0 :val "" :locked? 0}
                                   :eq {:state 2r0 :val "" :locked? 1}}}))

(defn data? [reg]
  (contains? #{:r1 :r2 :r3} reg))

(defn locked? [target]
  (if (data? target)
    (if (= target :r1) (= 1 (get-in @app-state [:data :r1 :locked?]))
                       (if (= target :r2) (= 1 (get-in @app-state [:data :r2 :locked?]))
                                          (= 0 (get-in @app-state [:data :r2 :locked?]))))
    (if (= target :op) (not (empty? (get-in @app-state [:acc :op :val])))
                       (not (empty? (get-in @app-state [:acc :eq :val]))))))


(defn get-state [target]
  (let [val (get-in app-state [:data target :val])]
    (cond (empty? val) 0
          (locked? target) 2
          :else 1)))

(defn get-focus []
  (get-in @app-state [:focus]))

(defn get-target [branch]
  (cond (= branch :data) (if (locked? :r1)
                           (if (locked? :r3)
                             :r2
                             :r1)
                           :r1)
        (= branch :acc) (if (locked? :op)
                          :eq
                          :op)))

(defn inc-data-reg [targ]
  (.indexOf [:r1 :r2 :r3 :r1] (inc (.indexOf [:r1 :r2 :r3] targ))))

(defn put [val targ]
    (if (locked? targ)
      (put val (inc-data-reg targ))
      (swap! app-state update-in [:data targ] str val)))

(defn get-op []
  (get-in @app-state [:acc :op]))

(defn get-val [r]
  (get-in @app-state [:data r :val]))

(defn num? [x]
  (and (> x 47)
       (< x 58)))

(defn op? [x]
  (contains? #{43 45 42 61 47} x))

(defn semaphora [k]
  (let [charCode (.charCodeAt k)]
    (cond (num? charCode)  (put k (get-target :data))
          (op? charCode) (swap! app-state update-in [:data (get-target :data) :locked?] bit-or 1)
          :else "Not yet implemented")))

(defn semaphorb [k]
  (let [charCode (.charCodeAt k)]
  (cond
        (= charCode 43) (swap! app-state update-in [:acc (get-target :acc) :val] str "add")
        (= charCode 45) (swap! app-state update-in [:acc (get-target :acc) :val] str "subtract")
        (= charCode 42) (swap! app-state update-in [:acc (get-target :acc) :val] str "multiply")
        (= charCode 61) (swap! app-state update-in [:acc (get-target :acc) :val] str "equals"))))



(defn send [k]
  (do (semaphora (.charAt k 0))
      (semaphorb (.charAt k 0))))
;
;(defn quil-setup []
;  ; Set frame rate to 30 frames per second.
;  (q/frame-rate 30)
;  ; Set color mode to HSB (HSV) instead of default RGB.
;  (q/color-mode :hsb)
;  ; setup function returns initial state. It contains
;  ; circle color and position.
;  {:color 0
;   :angle 0})
;;
;(def x-scalar 22.2222)
;(def y-scalar 22.2727)
;(defn quil-update-state [state]
;  ; Update sketch state by changing circle color and position.
;  {:color (mod (+ (:color state) 0.7) 255)
;   :angle (+ (:angle state) 0.1)})
;(def op-sentinel-x (* 15 x-scalar))
;(def op-sentinel-y (* 7.33 y-scalar))
;(def targ-x (* 15 x-scalar))
;(def targ-y (* 11.75 y-scalar))
;(defn line [line-num]
;  ;utility function for generating line coordinates in the body of the control unit
;  (let [line-height 0.55]
;    (zipmap [:x :y] (into [] [(* 2.5 x-scalar)
;                              (* (+ 6.75 (* line-num line-height)) y-scalar)]))))
;;(defn translate-target []
;;  (let [index (mod (get-in @db [:semaphoreB :state]) 3)]
;;    (get ["r1"  "r2"  "r3"] index)))
;
;(defn draw-rectangle
;  [x1 y1 x2 y2] (comp (q/rect (* x1 x-scalar)
;                              (* y1 y-scalar)
;                              (* x2 x-scalar)
;                              (* y2 y-scalar))))
;
;(defn draw-triangle
;  [ordinality]
;  (let [x-coords (map (fn [x] (+ x (* ordinality 3))) [2.25 2.5 2])
;        y-coords [4 4.5 4.5]]
;    (comp (q/triangle
;            (* (nth x-coords 0) x-scalar)
;            (* (nth y-coords 0) y-scalar)
;            (* (nth x-coords 1) x-scalar)
;            (* (nth y-coords 1) y-scalar)
;            (* (nth x-coords 2) x-scalar)
;            (* (nth y-coords 2) y-scalar)))))
;
;(defn draw-circle
;  ;draws a circle of radius r around the center coordinates.
;  ;if x and y scalars are different, it averages the scaling factor of the radius
;  [cx cy r] (comp (q/ellipse (* cx x-scalar)
;                             (* cy y-scalar)
;                             (* r (/ (+ x-scalar y-scalar) 2))
;                             (* r (/ (+ x-scalar y-scalar) 2)))))
;;(defn draw-caption
;;  ;inserts a string at the translated coordinate vector
;;  [s x1 y1] (comp (q/text s
;;                          (* x1 x-scalar)
;;                          (* y1 y-scalar))))
;
;;(defn print-to-console [& args]
;;  (map-indexed (fn [line-number txt] (comp (q/text txt
;;                                                   (get (line line-number) :x)
;;                                                   (get (line line-number) :y))))
;;               args))
;;
;(defn quil-draw-state [state]
;  ; Clear the sketch by filling it with light-grey color.
;  (q/background 240)
;  ; Set circle color.
;  (q/fill (:color state) 255 255)
;  ; Calculate x and y coordinates of the circle.
;  (let [angle (:angle state)
;       x (* 150 (q/cos angle))
;      y (* 150 (q/sin angle))]
;    (let [
;          ;the names here appear to be ignored by quil, but they are helpful as comments
;          meta-bounding-box   (q/rect (* 0.25 x-scalar)
;                                      (* 4.5 y-scalar)
;                                      (* 35.5 x-scalar)
;                                      (* 10.5 y-scalar))
;
;          input-bounding-box  (q/rect (* 19 x-scalar)
;                                      (* 16 y-scalar)
;                                      (* 7 x-scalar)
;                                      (* 5 y-scalar))
;          output-bounding-box (q/rect (* 28 x-scalar)
;                                      (* 16 y-scalar)
;                                      (* 7 x-scalar)
;                                      (* 5 y-scalar))
;          acu-bounding-box    (q/rect (* 19 x-scalar)
;                                      (* 5 y-scalar)
;                                      (* 16 x-scalar)
;                                      (* 9.5 y-scalar))
;          accumulator-box     (q/rect (* 20 x-scalar)
;                                      (* 9 y-scalar)
;                                      (* 14 x-scalar)
;                                      (* 5 y-scalar))
;          cpu-bounding-box    (q/rect (* 1 x-scalar)
;                                      (* 5 y-scalar)
;                                      (* 16 x-scalar)
;                                      (* 9.5 y-scalar))
;          op-box              (q/rect (* 20 x-scalar)
;                                      (* 6.5 y-scalar)
;                                      (* 14 x-scalar)
;                                      (* 1.75 y-scalar))
;          ;ram-bounding-box    (q/rect (* 0.5 x-scalar)
;          ;                           (* 2.5 y-scalar)
;          ;                          (* 33.5 x-scalar)
;          ;                         (* 3 y-scalar))
;          instruction1        (q/rect (* 0.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction2        (q/rect (* 3.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction3        (q/rect (* 6.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction4        (q/rect (* 9.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction5        (q/rect (* 12.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction6        (q/rect (* 15.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction7        (q/rect (* 18.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction8        (q/rect (* 21.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction9        (q/rect (* 24.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction10       (q/rect (* 27.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          instruction11       (q/rect (* 30.5 x-scalar)
;                                      (* 1 y-scalar)
;                                      (* 3 x-scalar)
;                                      (* 3 y-scalar))
;          ;code                (get-in @db [:opcode])
;
;          ]
;      (apply q/fill [200])
;      (q/rect (* 19 x-scalar)
;              (* 16 y-scalar)
;              (* 7 x-scalar)
;              (* 5 y-scalar))
;      (q/rect (* 28 x-scalar)
;              (* 16 y-scalar)
;              (* 7 x-scalar)
;              (* 5 y-scalar))
;      (q/rect (* 19 x-scalar)
;              (* 5 y-scalar)
;              (* 16 x-scalar)
;              (* 9.5 y-scalar))
;      (q/rect (* 20 x-scalar)
;              (* 9 y-scalar)
;              (* 14 x-scalar)
;              (* 5 y-scalar))
;      (q/rect (* 1 x-scalar)
;              (* 5 y-scalar)
;              (* 16 x-scalar)
;              (* 9.5 y-scalar))
;      (q/rect (* 20 x-scalar)
;              (* 6.5 y-scalar)
;              (* 14 x-scalar)
;              (* 1.75 y-scalar))
;      (q/rect (* 10 x-scalar)
;              (* 8.33 y-scalar)
;              (* 4 x-scalar)
;              (* 2.41 y-scalar))
;      (q/rect (* 2 x-scalar)
;              (* 6.5 y-scalar)
;              (* 7 x-scalar)
;              (* 7.5 y-scalar))
;      ;    ;Move origin point to the center of the sketch.
;      ;    ; Draw the circle.
;      (apply q/fill [63 2 0])
;      (q/line (* 12 x-scalar) op-sentinel-y op-sentinel-x op-sentinel-y)
;      (q/line (* 12 x-scalar) op-sentinel-y (* 12 x-scalar) (* 8.33 y-scalar))
;      (q/line (* 12 x-scalar) targ-y targ-x targ-y)
;      (q/line (* 12 x-scalar) targ-y (* 12 x-scalar) (* 10.75 y-scalar))
;      ;
;      ;
;      ;
;      ;    ; move the input line over if there's a shift event
;      ;
;      ;    (if (= (mod (get-in @db [:semaphoreB :state]) 3) 0)
;      ;      (do
;      ;        (q/ellipse (* 21.25 x-scalar) (* 10.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
;      ;        (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 10.75 y-scalar)))
;      ;      (if (= (mod (get-in @db [:semaphoreB :state]) 3) 1)
;      ;        (do (q/ellipse (* 21.25 x-scalar) (* 11.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
;      ;            (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 11.75 y-scalar)))
;      ;        (do (q/ellipse (* 21.25 x-scalar) (* 12.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
;      ;            (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 12.75 y-scalar)))))
;      ;    (q/line op-sentinel-x op-sentinel-y (* 20 x-scalar) op-sentinel-y)
;      ;
;      ;
;      ;;    ; boolean sentinel for op register
;      ;(if (empty? (get-in @db [:semaphoreA :registers :op :val :curr]))
;      ;  (apply q/fill [250 340 240])
;      ;  (apply q/fill [80 250 340]))
;      ;(q/ellipse op-sentinel-x op-sentinel-y (* 2 x-scalar) (* 2 y-scalar))
;      ;;    ; sentinel node for current target
;      ;(if (empty? (get-in @db (resolve [:semaphoreB :row])))
;      ;  (apply q/fill [250 340 240])
;      ;  (apply q/fill [80 250 340]))
;      ;(q/ellipse targ-x targ-y (* 2 x-scalar) (* 2 y-scalar))
;      ;;
;      ;    ;solder the sentinels to the opcode getter
;      ;
;      (apply q/fill [63 2 0])
;      ;
;      ;(q/text "INPUT " (* 19.66 x-scalar) (* 17 y-scalar))
;      ;(q/text (str "keyboard:") (* 20.33 x-scalar) (* 18 y-scalar))
;      ;(q/text (str (get-in @keyboard-input [:key-id])) (* 23.33 x-scalar) (* 18 y-scalar))
;      ;(q/text (str "ascii code:") (* 20.33 x-scalar) (* 19 y-scalar))
;      ;(q/text (str (get-in @keyboard-input [:ascii-code])) (* 23.33 x-scalar) (* 19 y-scalar))
;      ;    (q/text "OUTPUT " (* 28.66 x-scalar) (* 17 y-scalar))
;      ;    (q/text (str (resolve (route-to :current-target))) (* 29.33 x-scalar) (* 18 y-scalar))
;      ;    (q/text "ACCUMULATOR " (* 21 x-scalar) (* 10 y-scalar))
;      ;    (q/text "r1" (* 22 x-scalar) (* 11 y-scalar))
;      ;    (q/text (get-in @db [:semaphoreB :registers :r1 :val :curr]) (* 23 x-scalar) (* 11 y-scalar))
;      ;    (q/text "r2" (* 22 x-scalar) (* 12 y-scalar))
;      ;    (q/text (get-in @db [:semaphoreB :registers :r2 :val :curr]) (* 23 x-scalar) (* 12 y-scalar))
;      ;    (q/text "r3" (* 22 x-scalar) (* 13 y-scalar))
;      ;    (q/text (get-in @db [:semaphoreB :registers :r1 :val :curr]) (* 23 x-scalar) (* 13 y-scalar))
;      ;    (q/text "ARITHMETIC CONTROL UNIT " (* 20 x-scalar) (* 6 y-scalar))
;      ;    (q/text "op" (* 22 x-scalar) (* 7.5 y-scalar))
;      ;    (q/text (get-in @db [:semaphoreA :registers :op :val :curr]) (* 23 x-scalar) (* 7.5 y-scalar))
;      ;    (q/text "CONTROL UNIT" (* 2 x-scalar) (* 6 y-scalar))
;      ;    (q/text "INSTRUCTION REGISTERS" (* 1 x-scalar) (* 0.85 y-scalar))
;      ;    (q/text "0" (* 3 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "1" (* 6 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "2" (* 9 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "3" (* 12 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "4" (* 15 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "5" (* 18 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "6" (* 21 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "7" (* 24 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "8" (* 27 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "9" (* 29.75 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "10" (* 32.8 x-scalar) (* 3.8 y-scalar))
;      ;    (q/text "OPCODE" (* 10.5 x-scalar) (* 9 y-scalar))
;      ;    (q/text (get-in @db [:opcode]) (* 11.5 x-scalar) (* 10.25 y-scalar))
;      ;    (if (= (mod (get-in @db [:semaphoreB :state]) 3) 0)
;      ;      (q/text "r1" (* 14.83 x-scalar) (* 11.89 y-scalar))
;      ;      (if (= (mod (get-in @db [:semaphoreB :state]) 3) 1)
;      ;        (q/text "r2" (* 14.83 x-scalar) (* 11.89 y-scalar))
;      ;        (q/text "r3" (* 14.83 x-scalar) (* 11.89 y-scalar))))
;      ;
;      ;    (cond (= code 0) (do
;      ;                       (draw-triangle 0)
;      ;                       (q/text (print-to-console " " ";the first action" " " "(apply (opcode 0) [num])" "=> loading..." "..." (apply str "now putting '" (get-in @keyboard-input [:key-id]) "' in :r1")) 1 1)
;      ;                       )
;      ;          (= code 3) (do
;      ;                       (draw-triangle 3)
;      ;                       (q/text (print-to-console " " ";keep stringing to" "  target register" " " "(apply (opcode 3) [num]" "=> loading..." "..." (apply str "putting '" (get-in @keyboard-input [:key-id]) "' in " (translate-target) "...") " " "update complete.") 1 1)
;      ;                       )
;      ;          (= code 1) (do
;      ;                       (draw-triangle 1)
;      ;                       (q/text (print-to-console " " ";switch register to r2" "  ;and put val in r2" " " "(apply (opcode 1) [num]) " "=>  loading..." "..." " " (apply str "putting '" (get-in @keyboard-input [:key-id]) "'" "  in :r2...") " ""update complete.") 1 1))
;      ;          (= code 2) (do
;      ;                       (draw-triangle 2)
;      ;                       (q/text (print-to-console " " ";lock r1 and update the " "  cleared op reg" " " "(apply (opcode 2) [num]) " "=>  loading..." "..." (apply str "setting op to'" (jump-to :op) "'...") " " "update complete.") 1 1))
;      ;          (= code 6) (do
;      ;                       (draw-triangle 6)
;      ;                       (q/text (print-to-console " " ";chained expression" "  (e.g. '5+4-7')" " " "(apply (opcode 6) [num]) " "=> loading..." " " "pushing vectorized " "      expression to r3..." (apply str "r3 evaluates to '" (jump-to :r1) "'...") (apply str "copying '" (jump-to :r1) "' to locked r1...") (apply str "setting op to '" (jump-to :op) "'...") " " "evaluation complete.") 1 1))
;      ;          (= code 8) (do
;      ;                       (draw-triangle 8)
;      ;                       (q/text (print-to-console " " ";resume chaining a " "  previously evaluated" "  expression" " " "(apply (opcode 8) [num]))" "=> loading..." " " (str "copying '" (jump-to :r1) "' from r3 to locked r1...") "now clearing r3..." (apply str "setting op to '" (jump-to :op) "'") "evaluation complete.") 1 1))
;      ;          (= code 7) (do
;      ;                       (draw-triangle 7)
;      ;                       (q/text (print-to-console " " ";evaluate normally and" "  flush the registers" " " "(apply (opcode 8) [num]))" "=> loading..." " " "pushing (op r1 r2) to r3..." (apply str "r3 evaluates to '" (jump-to :r3) "'...") "flushing the registers..." " " "evaluation complete.") 1 1))
;      ;          (= code 5) (do
;      ;                       (draw-triangle 5)
;      ;                       (q/text (print-to-console " " ";start a new expression" " " "(apply (opcode 5) [num])" "=> loading...." " " "flushing r3..." (apply str "now putting '" (jump-to :r1) "' in r1...") " " "update complete.") 1 1))
;      ;          (= code 10) (do
;      ;                        (draw-triangle 10)
;      ;                        (q/text (print-to-console " " ";bad expression" "  flush registers but" "  push r1 to r3"  " " "(apply (opcode 10) [num]))" "=> loading..." " " "pushing r1 to r3..." "flushing the registers..." " " "update complete.") 1 1))
;      ;          :else (q/text (print-to-console " ""[heavy breathing]" " " " " " " "listening to keyboard " "  for numbers...") 1 1)
;      ;          )))
;      ;
;      ;(defn pp [x]
;      ;  (cljs.pprint/pprint x)
;      ;  (.log js/console (cljs.pprint/pprint x)))
;      ;(apply (opcode 1) [num])) ;update :current-target to y and assoc the new val
;      ;        (apply (opcode 4) [num])) ;keep concatenating to y
;      ;  (apply (opcode 5) [num])) ;clear registers, reset target to x, put val there
;      ;(shift? num) (swap! app-state assoc-in [:shift-in] true) ;helper events for keyboard inputs
;      ;(unshift? num) (swap! app-state assoc-in [:shift-in] false)
;      ;;(operator? num) (if (empty? ans)
;      ;;                  (if (empty? y)
;      ;;                    (if (empty? op)
;      ;;                      (if (empty? x)
;      ;;                        (apply (opcode -1) []) ;don't add voids
;      ;;                        (apply (opcode 2) [num])) ;typical usual case for ops
;      ;;                      (apply (opcode 2) [num])) ;if duplicate ops, we take most recent. same logic
;      ;;                    (apply (opcode 6) [num])) ;chained expressions are ok (e.g. 5+3*8-2)
;      ;;                  (apply (opcode 8) [num])) ;resume chaining if the prev op was "equals"
;      ;;(eval? val) (if (empty? ans)
;      ;;              (if (empty? y)
;      ;;                (if (empty? op)
;      ;;                  (if (empty? x)
;      ;;                    (apply (opcode -1) []) ;don't evaluate voids
;      ;;                    (apply (opcode 10) [])) ;let x equal itself
;      ;;                  (apply (opcode 11) [])) ;stupid edge case
;      ;;                (apply (opcode 7) [])) ;normal evaluation flushes all but the output register
;      ;;              (apply (opcode -1) []))))) ;already evaluated, do nothing
;      ;;
;      ;;
;      ;;(= code 1) (q/text (print-to-console "loading instr reg 1..." "..." "'(map (reduce apply [put]) " "
;      ;;                                    (q/text (str "loading instr reg 1...") (get (line 1) :x) (get (line 1) :y))
;      ;;                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
;      ;;                                    (q/text (str "(put :r2 (target))") (get (line 3) :x) (get (line 3) :y))
;      ;;                                    (q/text (str "(put " (get-in @keyboard-input [:key-id]) " :r2)") (get (line 4) :x) (get (line 4) :y))
;      ;;                                    (q/text (str "=> 'ok") (get (line 2) :x) (get (line 2) :y)))
;      ;;          (= code 3) (do
;      ;;                                    (q/text (str "loading instr reg 3...") (get (line 1) :x) (get (line 1) :y))
;      ;;                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
;      ;;                                    (q/text (str "(eval '(put (key) (target))") (get (line 3) :x) (get (line 3) :y))
;      ;;                                    (q/text (str "=> (put " (get-in @keyboard-input [:key-id]) " " (translate-target) ")") (get (line 4) :x) (get (line 4) :y)))
;      ;;          :else (q/text (print-to-console " " "i am a robot" "  *bleep bloop*" ) 0 0))))
;      ;;
;      ;;                     ;;1 push to empty y register
;      ;;                     ;(fn [e] (do (divert-route :current-target :y)
;      ;;                     ;            (put e :current-target)))
;      ;;                     ;;2 push to empty op
;      ;;                     ;(fn [e] (put e :control-bus))
;      ;;                     ;;3 push to a non-empty x-register
;      ;;                     ;(fn [e] (shunt e :current-target))
;      ;;                     ;;4 push to a non-empty y-register
;      ;;                     ;(fn [e] (shunt e :current-target))
;      ;;                     ;;5 push to a sparkly clean x register (triggered when "equals" is followed by a number)
;      ;;                     ;(fn [e]
;      ;;                     ;  (do (flushRegister :result)
;      ;;                     ;      (flushRegister :op)
;      ;;                     ;      (flushRegister :x)
;      ;;                     ;      (flushRegister :y)
;      ;;                     ;      (divert-route :current-target :x)
;      ;;                     ;      (put e :current-target)))
;      ;;                     ;;6 push to fully-evaluated op register
;      ;;                     ;(fn [e]
;      ;;                     ;  (if (can-evaluate?)
;      ;;                     ;    (do (put (apply (dispatch (show 'op))    ; Try not to assume a particular data type.  Just serialize these jumps:
;      ;;                    [(js/parseFloat (show 'x))    ; 1) push expression to output-register (we know it's well-formed)
;      ;;                     (js/parseFloat (show 'y))])   ; 2) reduce it down
;      ;;             :data-bus)                          ; 3) clear non-empty input registers
;      ;;        (flushRegister :x)                        ; 4) allocate space in x
;      ;;        (put (show 'data-bus) :primary-register)  ; 5) box it up
;      ;;        (flushRegister :result)
;      ;;        (flushRegister :y)
;      ;;        (flushRegister :op)
;      ;;        (divert-route :current-target :x)
;      ;;        (put e :control-bus))))
;      ;;;7 eval and push answer to output register
;      ;;(fn []
;      ;;  (if (can-evaluate?)
;      ;;    (do (put (apply (dispatch (show 'op))
;      ;;                    [(js/parseFloat (show 'x))
;      ;;                     (js/parseFloat (show 'y))])
;      ;;             :data-bus)
;      ;;        (flushRegister :x)
;      ;;        (flushRegister :y)
;      ;;        (flushRegister :op)
;      ;;        (divert-route :current-target :result))))
;      ;;;8 push op to previously evaluated expression
;      ;;(fn [e]
;      ;;  (do (put (show 'data-bus) :primary-register)
;      ;;      (put e :control-bus)
;      ;;      (flushRegister :result)
;      ;;      (divert-route :current-target :x)))
;      ;;;10 edge case such that x equals itself if y is empty
;      ;;(fn []
;      ;;  (do (put (show 'x) :data-bus)
;      ;;      (flushRegister :x)
;      ;;      (divert-route :current-target :result)))
;      ;;;11 stupid edge case in the event the exp isn't well-formed ("5 +")
;      ;;(fn []
;      ;;  (do (put (show 'x) :data-bus)
;      ;;      (flushRegister :x)
;      ;;      (flushRegister :op)
;      ;;      (divert-route :current-target :result)))]))
;      ;
;      ;;(q/line (* 10 x-scalar) (* 9 y-scalar) (
;      ;;(do
;      ;;(q/rect (* 20 x-scalar)
;      ;;        (* 6.5 y-scalar)
;      ;;        (* 14 x-scalar)
;      ;;        (* 1.75 y-scalar))
;      ;;(apply q/fill [100 100 100])
;      ;;(q/text "Locked. Incorrect arity for eval" (* 22 x-scalar) (* 7.5 y-scalar))))
;      ;;               (q/end-shape)
;      ;
;      ;
;      ;
;      )))
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
;
;(q/defsketch input
;             :host "succulent"
;             :size [1000 500]
;             ; setup function called only once, during sketch initialization.
;             :setup quil-setup
;             ; update-state is called on each iteration before draw-state.
;             :update quil-update-state
;             :draw quil-draw-state
;             ; This sketch uses functional-mode middleware.
;             ; Check quil wiki for more info about middlewares and particularly
;             ; fun-mode.
;             :middleware [m/fun-mode])
;;
;;;;(q/defsketch input
;;;;             :host "josefk"
;;;;             :size [(* 7 x-scalar) (* 5 y-scalar)]
;;;;             :setup quil-input-setup
;;;;
;;;;             ; update-state is called on each iteration before draw-state.
;;;;             :update quil-update-input-state
;;;;             :draw quil-draw-input
;;;;             ; This sketch uses functional-mode middleware.
;;;;             ; Check quil wiki for more info about middlewares and particularly
;;;;             ; fun-mode.
;;;;             :middleware [m/fun-mode])
;;;
;;;
;;;;(add-watch x :on-change (fn [_ _ _ _] (render!)))
;;;;(add-watch y :on-change (fn [_ _ _ _] (render!)))
;;;;(add-watch op :on-change (fn [_ _ _ _] (render!)))
;;;
;;(add-watch db :on-change (fn [_ _ _ _] (render!)))
;;(add-watch keyboard-input :on-change (fn [_ _ _ _] (render!)))
;;;(add-watch result :on-change (fn [_ _ _ _] (render!)))
;;
;;(render!)
;;