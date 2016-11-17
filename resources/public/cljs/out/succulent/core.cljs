(ns succulent.core
  "0.1.0-SNAPSHOT"
  (:require
    [clojure.set :as set]
    [clojure.string :as string]
    ;om-bootstrap.button :as b]
    ;[om-bootstrap.table :refer [table]]
    ;[om-tools.dom :as d]
    ;[om-bootstrap.grid :as g]
    ;[om-bootstrap.random :as etc]
    ;[om.core :as om :include-macros true]
    ;[om.dom :as dom :include-macros true]
    [quil.core :as q :include-macros true]
    [quil.middleware :as m]))

(declare read-string)

(declare handle)

(defn bool? [x]
  (or (true? x) (false? x)))

(defn int->bool [i]
  (cond
    (not (number? i)) nil
    (zero? i) false
    (> i 0) true
    :else nil))

(defn bool->int [b]
  (cond
    (not (bool? b)) nil
    (true? b) 1
    (false? b) 0
    :else nil))

(defn ascii?
  "Returns true if the given value represents a printable ASCII character."
  [val]
  (< 0x1f val 0x7f))

(defn ascii
  "Returns the ASCII character corresponding to the low order byte of the given
value if it is a printable ASCII character, or a period otherwise."
  [val]
  (let [modval (mod val 256)]
    (if (ascii? modval)
      (str (char modval))
      (str (char 129)))))

(defn attach-tag [k]
  (let [numeric-vals (sorted-set 48 49 50 51 52 53 54 55 56 57)
        arithmetic-ops (sorted-set 43 47 42 94)
        equals-sign (sorted-set 61)
        minus-sign (sorted-set 45)]
    (cond (contains? numeric-vals k) :number
          (contains? arithmetic-ops k) :operator
          (contains? equals-sign k) :equals
          (contains? minus-sign k) :polymorphic
          :else :invalid)))



(def lookup-table
  [[nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]
    [nil 0 0 [nil nil nil nil nil nil nil nil]]])


(def db
  (atom {:refs {:queue [:queue]
                :front-ptr [:queue :front-ptr]
                :rear-ptr [:queue :rear-ptr]
                :queue-val [:queue :val]
                :queue-state [:queue :state]
                :atom2action [:atom2action]}
         :atom2action
               {"+" +
                "/" /
                "-" -
                "*" *}
         :patterns
               {"component" #{:val :state :children :idx :locked? :sign-bit}}
         :registry
               [nil nil nil nil nil nil nil nil]
         :test
               {:r1 2r0 :r2 2r0 :r3 2r0 :r4 2r0}
         :app-state
               {:cols [nil nil nil nil nil nil nil nil]
                :rows [[2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]
                       [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]]}
         :queue {:val [[str ["Empty!"]] [str ["Empty!"]]]
                 :front-ptr 0
                 :rear-ptr 1
                 :state 0
                 :children []}}))

(defn atom2action [at]
  (get-in @db [:atom2action at]))

(defn defabstract [& {k :k props :props constraints :constraints}]
  (cond (not (vector? props)) (str "Not a vector: " props)
        (not (vector? constraints)) (str "Not a vector: " constraints)
        :else (swap! db update-in [:patterns] merge {k {:props (into #{} props) :constraints [constraints]}})))

(defn has-all? [& {props :props object :object}]
  (cond (not (map? object)) (str "Not a map:" object)
        (not (set? props))  (str "Not a set: " props)
        (set/superset? (into #{} (keys object)) props) true
        :else false))

(defn fulfills? [instance pattern-name]
  (let [constraints (get-in @db [:pattern pattern-name :constraints])]
    (map #(apply % instance) constraints)))

          (def asciitable
  "Charlength string keys => numeric vals"
  (into (sorted-map) (map (juxt ascii (juxt identity attach-tag)) (range 0 130))))

(defn charCode [e]
  "Node.js-compatible version of the JS function"
  (first (get-in asciitable [e])))

(defn inspect-tag [e]
  (second (get-in asciitable [e])))






(defn refpath
  ([t]
  (if (contains? (into #{} (keys (get-in @db [:refs]))) t)
    (get-in @db [:refs t])
    :unknown))
  ([t param]
   (conj (refpath t) param)))

(defn goto [path]
  (if (and (keyword? path)
           (contains? (into #{} (keys (get-in @db [:refs]))) path))
    (get-in @db (refpath path))
    (get-in @db path)))

(defn ask [component property]
  (let [sign-bit (["" "-"] (get-in @db (conj (refpath component) :sign-bit)))]
    (cond (= property :val) (str sign-bit (get-in @db (conj (refpath component) :val)))
          (= property :state) (apply (get-in @db (conj (refpath component) :state)) [])
          :else (get-in @db (conj (refpath component) property)))))

(defn querytarget [component property]
  (conj (refpath component) property))

(defn load-inst [subroutine]
  (do
    (swap! db assoc-in [:queue :val] (into (get-in @db [:queue :val]) subroutine))
    (swap! db update-in [:queue :rear-ptr] + (count (into [] subroutine)))
    (swap! db assoc-in [:queue :state] 2)))



(defn process-queue []
  (let [next-instruction (nth (goto :queue-val) (goto :front-ptr))
        f (first next-instruction)
        args (second next-instruction)
        has-next? (int->bool (goto :queue-state))]
    (if has-next?
      (do
        (apply f args)
        (swap! db update-in (refpath :front-ptr) inc)
        (swap! db assoc-in (refpath :queue-state) (if (= (goto :front-ptr)
                                                         (goto :rear-ptr))
                                                       0
                                                       1))
        :busy)
      :update-complete)))

(defn thread-update []
  (loop [msg :busy]
    (if (= msg :update-complete)
      "Ready to do more stuff"
      (recur (process-queue)))))



(defn in-refs? [k]
  (contains? (get-in @db [:refs]) k))

(defn executable? [k]
  (contains? (get-in @db [:atom2action]) k))

(defn component? [k]
  (if (coll? k)

    false))

(defn make-executable [k f]
      (swap! db update-in [:atom2action] merge {k f}))



(defn reset-db []
  (swap! db (atom {:refs {}})))

(def pseudo-ns (atom {:square {:fn #(* %1 %1) :args [:number] :callstack '()}}))


(defn kidsum [parent]
  (count (keys (get-in (goto parent) [:children]))))

(defn kidx [parent i]
  (if (> i (kidsum parent))
    nil
    (get (get (get-in (goto parent) [:children]) i) :idx)))

(defn straw-poll
  ([attr] (vec (map (juxt #(get-in % [:idx]) #(get-in % [attr])) (vals (get-in @db [:registers :children])))))
  ([attr coll] (vec (map (juxt #(get-in % [:idx]) #(get-in % [attr])) (map goto coll)))))

(defn get-color [ref]
  (let [frequency [:green :yellow :red]]
    (cond (number? ref) (frequency ref)
          (in-refs? ref) (frequency (ask ref :state))
          (component? ref) (frequency (get-in ref :state))
          :else (str "Can't determine a color from argument: '" ref "'"))))

(defn green? [component]
  (= (get-color component) :green))

(defn yellow? [component]
  (= (get-color component) :yellow))

(defn red? [component]
  (= (get-color component) :red))


(defn active-register []
  (loop [ord 0
         idx (kidx :registers ord)]
      (if-not (red? (ask idx :state))
        idx
        (recur (inc ord)
               (kidx :registers ord)))))

(defn next-register []
  (let [curr (active-register)]
    (cond (= curr :r1) :op
          (= curr :op) :r2
          (= curr :r2) :r3
          (= curr :r3) :r1
          :else (str "Active register has an invalid address: " curr))))

(defn car [seq]
  (first seq))
(defn cdr [seq]
  (rest seq))
(defn cadr [seq]
  (first (rest seq)))
(defn cadar [seq]
  (first (rest (first seq))))
(defn caadr [seq]
  (first (first (rest seq))))
(defn cadadr [seq]
  (first (rest (first (rest seq)))))
(defn cadaddr [seq]
  (first (rest (rest (first (rest seq))))))
(defn cadadadr [seq]
  (first (rest (first (rest (first (rest seq)))))))





(defn make-root-component
    ([k] (if-not (in-refs? k)
          (do
           (swap! db assoc k {:idx k :state 0 :val "" :locked? 0 :sign-bit 0 :children {} })
           (swap! db update-in [:refs] merge {k [k]}))
          "Not overwriting the existing root component"))
    ([k v] (if-not (in-refs? k)
             (do
               (swap! db assoc k v)
               (swap! db update-in [:refs] merge {k [k]})))
            "Not overwriting the existing root component"))

(defn get-state [component]
  (cond (empty? (ask component :val)) 0
        (ask component :locked?) 2
        :else 1))

(defn make-assignment [i registry]
  (let [slot (nth registry i)
        can-assign? (bit-test 0 slot)]
    (if can-assign?
      (bit-flip slot 0)
      slot)))
;
(defn assign-register [i owner]
                 (swap! db update-in [:app-state :rows] (partial make-assignment i)))

(defn register-component [component index]
  (let [slot (nth (get-in @db [:app-state :rows]) index)
        owner (nth (get-in @db [:app-state :cols]) index)]

    (cond (not (zero? slot)) [false (str "Already in use: Slot " index)]
          (not (nil? owner)) [false (str "Already assigned: Slot " index)]
          :else (assign-register index component))))


(defn make-nested-component
  ([parent k]
   (let [root       (get-in @db [parent])
         siblings   (get-in @db (into [] [parent :children]))
         next-index (count siblings)]
     (if-not (in-refs? k)
       (do
         (swap! db update-in [parent :children] conj {next-index {:idx k :state #(get-state k) :val "" :locked? 0 :sign-bit 0 :children {}}})
         (swap! db update-in [:refs] merge {k (into [] [parent :children next-index])}))
       "Not overwriting the existing component"))))

;(defn make-nested-component
;    ([parent k]
;     (let [root       (get-in @db [parent])
;           siblings   (get-in @db (into [] [parent :children]))
;           next-index (count siblings)]
;       (if-not (in-refs? k)
;         (do
;           (swap! db update-in [parent :children] conj {next-index {:idx k :state 0 :val "" :locked? 0 :sign-bit 0 :children {}}})
;           (swap! db update-in [:refs] merge {k (into [] [parent :children next-index])}))
;         "Not overwriting the existing component"))))

(defn compatible? [e]
  (let [tag (inspect-tag e)
        curr (active-register)
        focus (goto curr)
        state (get focus :state)]
    (if (or (= curr :r1)
            (= curr :r2))
      (cond (= tag :number) [true curr]
            (= tag :invalid) [true :null]
            (and (= state 0) (= tag :operator)) [true :null]
            (and (= state 0) (= tag :polymorphic)) [true curr]
            (and (= curr :r2) (= state 1) (= tag :equals)) [false :evaluate]
            (and (= curr :r2) (= state 1) (= tag :operator)) [false :evaluate]
            :else [false :sigswitch])
      (cond (and (= state 0) (= tag :polymorphic)) [true curr]
            (= tag :operator) [true curr]
            (= tag :invalid) [true :null]
            :else [false :sigswitch]))))




(defn pass?
  ([component arg]   (cond (= arg :t1) (bool->int (> (count (get-in component [:val])) 0))
                            (= arg :t4) (* 2 (component :locked?))
                            :else "?")))


(defn syncstat [thread]
  (let [threadstate (goto thread)
        prev (threadstate :state)
        preimage (+ (pass? threadstate :t1) (pass? threadstate :t4))
        T [0 1 -1 2]
        current-state (T preimage)]
    (do
      (swap! db assoc-in (refpath thread :state) current-state)
      {:register thread :updated? (bit-flip (bool->int (= prev current-state)) 0) :state current-state :val (ask thread :val)})))

(defn clear
  ([] (map clear [:r1 :op :r2 :r3]))
  ([targ]
   (let [exiting-value (goto targ)
         v (get-in exiting-value [:val])
         i (kidsum targ)]
          (map (juxt
                 #(swap! db update-in (refpath % :children) merge {i v})
                 #(swap! db assoc-in (refpath % :state) 0)
                 #(swap! db assoc-in (refpath % :val) "")
                 #(swap! db assoc-in (refpath % :locked?) 0))  [targ]))))
(defn partial-flush [coll]
  (doseq [regs coll
          :let [cleared-reg (clear regs)]
          :when true]
    (println "Flushed " coll ". Value now: " cleared-reg)))

(defn lock [r]
  (do
    (swap! db update-in (refpath r :locked?) bit-or 1)
    (syncstat r)))


(defn put [val reg]
  (cond (string? val) (swap! db update-in (refpath reg :val) str val)
        (number? val) (swap! db assoc-in (refpath reg :val) val)
        :else (str "Unknown type: " val)))

(defn sendkey [e]
  (do
    (swap! db assoc-in (querytarget :charstring :val) (str e))
    (swap! db assoc-in (querytarget :charcode :val) (charCode e))
    (swap! db assoc-in (querytarget :data-caption :val) (inspect-tag e))
    (swap! db assoc-in (querytarget :destination :val)  (compatible? e))
    (put e (active-register))))


(defn probe [repr index chr]
   (if (and (string? repr) (not (empty? repr)))
     (= (nth repr index) chr)
     false))


(defn str->int [v]
  (let [is-neg? (probe v 0 \-)
        absolute-val  (first (map read-string (re-seq #"[\d.]+" v)))]
    (if-not is-neg?
      absolute-val
      (* -1 absolute-val))))


(defn carry [val curr next]
  (do
    (lock curr)
    (handle val)))

(defn copy [reg1 reg2]
  (let [val (ask reg1 :val)
        destination (refpath reg2 :val)]
      (put val reg2)))

(defn sign-bit [reg]
  (ask reg :sign-bit))


(defn evaluate []
  (let [x (str->int (ask :r1 :val))
        y (str->int (ask :r2 :val))
        op (atom2action (ask :op :val))]
    (str (apply op [x y]))))

(defn flip! [reg bit]
  (swap! db update-in (refpath reg bit) bit-xor 1))

(defn clr! [reg]
  (swap! db assoc-in (refpath reg) {:idx reg, :state #(get-state reg), :val "", :locked? 0, :sign-bit 0, :children {}}))

(defn get-opcode []
  (cond
    (green? :r1) 1
    (or (yellow? :r1)
        (green? :op)) 2
    (yellow? :op) 3
    (and (red? :op)
         (green? :r2)) 4
    (yellow? :r2) 5
    (yellow? :r3) 6)
  :else 7)

(defn stat! [reg val]
  [])
  ;(swap! db assoc-in (refpath reg :state) val))

(defn L1dispatch [opcode]
  (let [IR (seq (vec [(fn [x tag] "Not initialized")
                      (fn [x tag] (cond (= tag :number) [[put [x :r1]] [stat! [:r1 1]]]
                                        (= tag :polymorphic) [[put [x :r1]] [stat! [:r1 0]] [flip! [:r1 :sign-bit]]]
                                        :else [[put ["" :r1]] [stat! [:r1 0]]]))
                      (fn [x tag] (cond (= tag :number) [[put [x :r1]] [stat! [:r1 1]]]
                                        (= tag :polymorphic) [[put [x :op]] [stat! [:r1 2]] [stat! [:op 1]]]
                                        (= tag :operator) [[put [x :op]] [stat! [:r1 2]] [stat! [:op 1]]]
                                        :else [[put ["" :r1]] [stat! [:r1 1]]]))
                      (fn [x tag] (cond (= tag :number) [[put [x :r2]] [stat! [:op 2]] [stat! [:r2 1]]]
                                        (= tag :polymorphic) [[put [x :r2]] [stat! [:op 2]] [stat! [:r2 0]] [flip! [:r2 :sign-bit]]]
                                        (= tag :operator) [[put [x :op]] [stat! [:op 1]]]
                                        :else [[put ["" :op]] [stat! [:r1 1]]]))
                      (fn [x tag] (cond (= tag :number) [[put [x :r2]] [stat! [:r2 1]]]
                                        :else [[put ["" :op]] [stat! [:r2 0]]]))
                      (fn [x tag] (cond (= tag :number) [[put [x :r2]] [stat! [:r2 1]]]
                                        (= tag :polymorphic) [[put (evaluate) :r3] [stat! [:r2 2]] [stat! [:r3 2]] [clr! [:r1]] [copy [:r3 :r1]] [stat! [:r1 2]] [clr! [:op]] [put [x :op]] [stat! [:op 1]] [clr! [:r2]] [clr! [:r3]]]
                                        (= tag :operator) [[put [(evaluate) :r3]] [stat! [:r2 2]] [stat! [:r3 2]] [clr! [:r1]] [copy [:r3 :r1]] [stat! [:r1 2]] [clr! [:op]] [put [x :op]] [stat! [:op 1]] [clr! [:r2]] [clr! [:r3]]]
                                        (= tag :equals) [[put [(evaluate) :r3]] [stat! [:r2 2]] [stat! [:r3 1]] [clr! [:r1]] [clr! [:r2]] [clr! [:op]]]
                                        :else [[put ["" :r2]] [stat! [:r2 1]]]))

                      (fn [x tag] (cond (= tag :number) [[clr! [:r3]] [put [x :r1]] [stat! :r1 1]]
                                        (= tag :polymorphic) [[copy [:r3 :r1]] [clr! [:r3]] [put [x :op]]]
                                        (= tag :operator) [[copy [:r3 :r1]] [clr! [:r3]] [put [x :op]]]
                                        :else [[put ["" :r3]] [stat! [:r3 1]]]))
                      (fn [x tag] [put "help" :r3])
                      ]))]
    (nth IR opcode)))

(defn L2dispatch [k tag]
  (let [instruction-set (L1dispatch (get-opcode))]
    (load-inst (apply instruction-set [k tag]))
    (thread-update)))


(defn p [chr]
  (L2dispatch chr (second (asciitable chr))))


;(defn handle [k]
;  (let [tag (inspect-tag k)
;        curr (active-register)
;        next (next-register)
;        focus (goto curr)
;        state (get focus :state)]
;    (do
;      (syncstat curr)
;      (syncstat next)
;      (cond (= curr :r1) (cond (green? state)  (cond (= tag :number) (put k :r1)
;                                                     (= tag :polymorphic) (flip :sign-bit :r1)
;                                                     :else db)
;                               (yellow? state) (cond (= tag :number) (put k :r1)
;                                                     (= tag :polymorphic) (carry k :r1 :op)
;                                                     (= tag :operator) (carry k :r1 :op)
;                                                     :else db))
;            (= curr :op) (cond (green? state)  (cond (= tag :operator) (put k :op)
;                                                     (= tag :polymorphic) (put k :op)
;                                                     :else db)
;                               (yellow? state)  (cond (= tag :number) (carry k :op :r2)
;                                                     (= tag :polymorphic) (flip :sign-bit :r2)
;                                                     (= tag :operator) (replace k :op)
;                                                     :else db))
;            (= curr :r2) (cond (green? state)    (cond (= tag :number) (put k :r2)
;                                                      (= tag :polymorphic) (put k :r2)
;                                                      :else db)
;                              (yellow? state)   (cond (= tag :number) (put k :r2)
;                                                    (= tag :operator) (do (lock :r2)
;                                                                          (put (evaluate) :r3)
;                                                                          (lock :r3)
;                                                                          (copy :r3 :r1)
;                                                                          (lock :r1))
;                                                     (= tag :equals)  (do (lock :r2)
;                                                                          (put (evaluate) :r3))
;                                                     (= tag :polymorphic) (do (put (evaluate) :r3))
;                                                      :else db))
;            (= curr :r3) (cond (green? state) "This shouldn't ever be true"
;                               (yellow? state) (cond (= tag :number) (do (prn "We are here")
;                                                                         (clear :r3)
;                                                                         (clear :r2)
;                                                                         (clear :op)
;                                                                         (clear :r1)
;                                                                         (put k :r1))
;                                                     (= tag :operator) (do (copy :r3 :r1)
;                                                                           (clear :r3)
;                                                                           (clear :r2)
;                                                                           (clear :op)
;                                                                           (lock :r1)
;                                                                           (put k :op))
;                                                     (= tag :polymorphic) (do (lock :r3)
;                                                                              (copy :r3 :r1)
;                                                                              (lock :r1)
;                                                                              (put k :op))))
;
;    ))))

  ;(let [target (active-register)
  ;      next (next-register)
  ;      status-light (ask target :state)
  ;      event-context (compatible? k)
  ;      k-goes-here? (and (first event-context)
  ;                        (= (second event-context) (active-register)))
  ;      switch-contexts? (and (yellow? status-light)
  ;                            (false? k-goes-here?))
  ;      eval?        (= (second event-context) :evaluate)]
  ;  (cond k-goes-here? (if (green? status-light)
  ;                       (do
  ;                           (swap! db assoc-in (querytarget target :val) (str k))
  ;                           (swap! db assoc-in (querytarget target :state) 1))
  ;                       (swap! db update-in (querytarget target :val) str k))
  ;        eval?           (do
  ;                          (lock target)
  ;                          (swap! db assoc-in (querytarget next :val) (apply (ask :op :val) [(ask :r1 :val) (ask :r2 :val)])))
  ;        switch-contexts? (do
  ;                             (lock target)
  ;                             (swap! db assoc-in (querytarget next :val) (str k))
  ;                             (swap! db assoc-in (querytarget next :state) 1))
  ;
  ;        :else (str "Unsure what to do with " k))))





;(defn sorting-hat [k]
;  (let [signal (compatible? k)
;        focus (active-register)
;        siginterrupt? (first signal)
;        destination (second signal)]
;    (if siginterrupt?
;      (do
;        (lock focus)
;        (put k)
;      (put k)))))




        ;([parent k v]
        ;  (let [root (get-in @db [parent])
        ;        siblings (get-in @db [(into [] [root :children])])
        ;        next-index (count siblings)]
        ;    (do
        ;                (swap! db update-in [parent :children] conj {next-index {v)
        ;                (swap! db update-in [:refs] merge {k (into [] [parent :children next-index])})))))





        (defn douche [reg]
          (let [k (if (keyword? reg)
                    (goto reg)
                    reg)]
            (swap! db assoc-in [:registers k :val] (apply cons [(get-in @db [:registers k :val :asc])
                                                                (get-in @db [:registers k :val :desc])]))))



        (defn opcode
          ([] (let [current-reg (active-register)
                    bit0        ({:r1 0 :op 1 :r2 0 :r3 1} (get (active-register) :key))
                    bit1        ({true 0 false 1} (get (active-register) :empty?))
                    bit2        ({true 1 false 0} (get (active-register) :locked?))]
                [(+ bit0 (* bit1 2) (* bit2 4)) [bit0 bit1 bit2]]))
          ([key] (let [current-state (opcode)
                       action-tag    (get key :tag)
                       active-thread ({0 :semB 1 :semA} (caadr current-state))
                       status-light  ({true :red false :green} (cadadr current-state))]
                   (cond (= active-thread :semA)
                         (if (red? status-light)
                           (cond (= action-tag :number) "lock the register"))))))





        ;UTILITIES
        ;

        ;(defn pp [x]
        ;  (cljs.pprint/pprint x))

        (defn exp [x n]
          (reduce * (repeat n x)))

        (def Errour (atom {:maknam [(str "there is no error")
                                    (str "not a string")
                                    (str "can't make keyword from arg")
                                    (str "not a unique identifier")]}))


        (defn input-to-maknam-is-a-string? [v]
          (if (string? v) 1 0))

        (defn input-to-maknam-is-keywordizable? [v]
          (if (keyword? (keyword v)) 1 0))

        (defn input-to-maknam-is-unique? [v]
          (if (get-in @pseudo-ns [(keyword v)]) 0 1))

        (defn response-ok? [res bytelength]
          (= res (exp bytelength 2)))

        (defn make-response-code [bits]
          (let [response (bit-shift-left 1 (count (take-while #(= 1 (apply (first %) (second %))) bits)))]
            (if (response-ok? response (count bits))
              0
              response)))


(defn IR [opcode]
  (let [instructions {0 [[make-root-component [:registers]]
                         [make-nested-component [:registers :r1]]
                         [make-nested-component [:registers :op]]
                         [make-nested-component [:registers :r2]]
                         [make-nested-component [:registers :r3]]
                         [make-root-component [:input]]
                         [make-nested-component [:input :charstring]]
                         [make-nested-component [:input :charcode]]
                         [make-nested-component [:input :data-caption]]
                         [make-nested-component [:input :destination]]
                         [make-root-component [:semaphores]]
                         [make-nested-component [:semaphores :A]]
                         [make-nested-component [:semaphores :B]]
                         [str ["Empty!"]]]}]
    (load-inst (get instructions opcode))))

(IR 0)
(thread-update)


(defn reset-db! []
  (do
  (reset! db {:refs {:queue [:queue]
                          :front-ptr [:queue :front-ptr]
                          :rear-ptr [:queue :rear-ptr]
                          :queue-val [:queue :val]
                          :queue-state [:queue :state]
                          :atom2action [:atom2action]}
                   :atom2action
                         {"+" +
                          "/" /
                          "-" -
                          "*" *}
                   :patterns
                         {"component" #{:val :state :children :idx :locked? :sign-bit}}
                   :registry
                    [nil nil nil nil nil nil nil nil]
                   :app-state
                    [2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0 2r0]

                   :queue {:val [[str ["Empty!"]] [str ["Empty!"]]]
                           :front-ptr 0
                           :rear-ptr 1
                           :state 0
                           :children []}}))
  (IR 0)
  (thread-update))

(defn stream-str [expr]
    (doseq [chars (seq (clojure.string/split expr #""))
            :let [chr (handle (str chars))]
            :when true]
      (println chr)))

;(defn dec->bin [num]
;  (.parseInt js/window (.toString num 2)))

(defn msd [bin]
  (if (< bin 1) 0
                (+ (msd (* bin 0.1)) 1)))
(defn get-type [v]
  (cond
    (number? v) :number
    (string? v) :string
    (vector? v) :vector
    (list? v) :list
    (map? v) :map
    (set? v) :set
    (fn? v) :function
    :else :unknown-type))

(defn print-db []
  (do
  (prn (str "   R1:   {state: " (ask :r1 :state) " value: " (ask :r1 :val) " locked?: " (ask :r1 :locked?) "   }"))
  (prn (str "   OP:   {state: " (ask :op :state) " value: " (ask :op :val) " locked?: " (ask :op :locked?) "   }"))
  (prn (str "   R2:   {state: " (ask :r2 :state) " value: " (ask :r2 :val) " locked?: " (ask :r2 :locked?) "   }"))
  (prn (str "   R3:   {state: " (ask :r3 :state) " value: " (ask :r3 :val) " locked?: " (ask :r3 :locked?) "   }"))
  ))

            ;(deftest test1
;  (testing "5+3="
;    (do
;      (reset-db!)
;      (handle "5")
;      (handle "+")
;      (handle "3")
;      (handle "="))
;    (is (= (ask :r1 :val) "5"))
;    (is (= (ask :op :val) "+"))
;    (is (= (ask :r2 :val) "3"))
;    (is (= (ask :r3 :val) "8"))))
;
;(deftest test2
;  (testing "(stream-str '5+3=')"
;    (stream-str "5+3=")
;    (is (= (ask :r1 :val) "5"))
;    (is (= (ask :op :val) "+"))
;    (is (= (ask :r2 :val) "3"))
;    (is (= (ask :r3 :val) "8"))
;    (is (= (any? #(not (= % 2)) (straw-poll :state))))
;    (is (= (any? #(not (= % 1)) (straw-poll :locked? [:r1 :op :r2]))))
;    (is (= (:yellow (get-color :r3))))))



;(defn make-error-response [caller bin# arg]
;  (str caller " -- Encountered an error: " (get (get-in @Errour [:maknam]) (msd (dec->bin bin#))) ". [ " (get-type arg) " " arg " ]"))

;(defn maknam [st]
;  (let [bit1 #(input-to-maknam-is-a-string? %1)
;        bit2 #(input-to-maknam-is-keywordizable? %1)
;        bit3 #(input-to-maknam-is-unique? %1)
;        biny [[bit1 [st]] [bit2 [st]] [bit3 [st]]]
;        code (make-response-code biny)]
;
;    (if (= code 0)
;      {:status code :response (keyword st)}
;      {:status code :response (make-error-response :maknam code st)})))


;(defrecord Tree [val left right])
;
;(defn tree [val left right]
;  (->Tree val left right))

;
;
;
;(defrecord Forest [root val size depth])
;
;(defn forest [root val size depth]
;  (->Forest root val size depth))
;
;(def the-empty-tree {:val nil :left :empty :right :empty})
;
;(defn make-tree
;  ([config] (let [val ({true (config :val) false (get the-empty-tree :val)} (contains? config :val))
;                  left   ({true (config :left) false (get the-empty-tree :left)} (contains? config :lef))
;                  right   ({true (config :right) false (get the-empty-tree :right)} (contains? config :right))]
;              (map->Tree {:val val :left left :right right}))))
;
;
;
;(def nullarbor {:root      :nullarbor
;                :nullarbor :empty
;                :empty     the-empty-tree
;                :size      0
;                :depth     0})
;(defn make-forest
;  ([] (atom (map->Forest nullarbor)))
;  ([config] (let [root  ({true (config :root) false (get nullarbor :root)} (contains? config :root))
;                  val   ({true (config root) false :empty} (contains? config root))
;                  empty ({true (config :empty) false (get nullarbor :empty)} (contains? config :empty))
;                  size  ({true (config :size) false (get nullarbor :size)} (contains? config :size))
;                  depth ({true (config :depth) false (get nullarbor :depth)} (contains? config :depth))]
;              (atom (map->Forest {:root root root val :empty empty :size size :depth depth})))))
;
;
;
;
;
;(defn plant [k constructor]
;  (cond (= constructor :forest) (reset! db (merge @db {k (make-forest)}))
;        (= constructor :tree) (reset! db (merge @db {k (make-tree the-empty-tree)}))))
;
;(defn implant [k constructor loc]
;  (cond (= constructor :tree) (reset! db (merge @(get-in @db [loc]) {k (make-tree the-empty-tree)})))
;  )
;
;(defprotocol HierarchicalDataStructure
;  (get-root [this])
;  (get-size [this])
;  (get-depth [this]))
;
;(defrecord TwoDimensionalForest [struct])
;;
;;(extend TwoDimensionalForest
;;        HierarchicalDataStructure
;;        (get-root [this] (get-in this [:root]))
;;        (get-size [this] (get-in this [:size]))
;;        (get-depth [this] (get-in this [:depth])))
;
;
;(def my-forest
;            {:root    :cedar
;             :cedar   (make-tree {:val "foo" :left :pine
;                             :right   :cypress})
;             :pine    (make-tree {:val "bar" :left :empty
;                             :right   :empty})
;             :cypress (make-tree {:val "baz" :left :elm
;                             :right   :empty})
;             :elm     (make-tree {:val "bar" :left :empty
;                             :right   :empty})
;             :empty   (make-tree the-empty-tree)
;             :size    0
;             :depth   0})
;
;
;
;(defn make-treemap [hashval]
;  (merge forest {:root hashval (keyword hashval) (atom forest)}))
;
;(defprotocol Enterable
;  (enter [this selector]))
;
;(defprotocol Arable
;  (car [this]))
;
;(defprotocol Cdrable
;  (cdr [this]))
;
;(defprotocol Cadrable
;  (cadr [this]))
;
;(defprotocol Cddrable
;  (cddr [this]))
;  ;
;  ;(defprotocol TreeNode
  ;  (left [this])
  ;  (right [this])
  ;  (children [this]))
  ;
  ;(extend-type Tree
  ;  TreeNode
  ;  (left [this] (get-in this [:left]))
  ;  (right [this] (get-in this [:right]))
  ;  (children [this] [(left this) (right this)]))
;
;
;
;(defprotocol LazyLL
;  (parent? [this]))
;
;(extend-type Keyword
;  Enterable
;  (enter [this selector] (get-in @(get-in @db [this]) [selector])))
;
;(extend-type Atom
;  Enterable
;  (enter [this selector]
;    (get-in @this [selector])))
;
;
;(extend-type Atom
;  Arable
;  (car [this]
;    (enter this :root)))
;
;(extend-type Atom
;  Cadrable
;  (cadr [this]
;    (enter this (car this))))
;
;(extend-type Atom
;  Cddrable
;  (cddr [this]
;    #(enter this (cadr this))))
;
;(extend-type Atom
;  LazyLL
;  (parent? [this]
;    (not (= (cadr this) :empty))))
;
;(extend-type Atom
;  Cdrable
;  (cdr [this]
;    (if (parent? (cadr this))
;      [(cadr this) ["#p"]]
;      [])))
;
;(extend-type Keyword
;  Cdrable
;  (cdr [this]
;    (vector (cadr this) (cddr this))))
;
;
;
;
;(defn traverse-graph-dfs [g s]
;  (loop [vertices [] explored #{s} frontier [s]]
;    (if (empty? frontier)
;      (filter #(not (= % :empty)) vertices)
;      (let [v (peek frontier)
;            neighbors (g v)]
;        (recur
;          (conj vertices v)
;          (into explored neighbors)
;          (into (pop frontier) (remove explored neighbors)))))))
;(reset-db)
;(plant :sherwood :forest)
;(plant :gump :forest)
;(plant :oak :tree)
;(implant :conifer :tree :sherwood)
;(def noderows (clojure.set/difference (into #{} (keys tstmap)) #{:root :depth :size :empty}))   ;extract the tree nodes by excluding the property vals
;(def adjacency-matrix (map (juxt identity #(get-in tstmap [% :val :right]) #(get-in tstmap [% :val :left])) noderows))
;(def kvpairs (into [] (mapcat hash-map (map first adjacency-matrix) (map rest adjacency-matrix))))
;(def kvmap (into {} kvpairs))
;; count the children starting with the root node
;(defn count-children [kids] (count (filter #(not (= % :empty)) kids)))
;
;[[:cedar (:cypress :pine)] [:pine (:empty :empty)] [:cypress (:empty :elm)] [:elm (:empty :empty)]]
;(traverse-graph-dfs kvmap :cedar)

;
;  )
;
;(defn make-pseudo-defn [& {:keys [pseudoname pseudoargs pseudobody]
;                :or {pseudoname false
;                     pseudoargs false
;                     pseudobody false}}]
;  (hash-map :name (makname pseudoname)
;            :args (makargs pseudoargs)
;            :fn   (makfunc pseudobody)
;            :stak (makstak))
;
;(defn pseudo-defn [pseudoname pseudoargs pseudobody]
;
;
;
;
;
;(def db (atom {:mutex      {:state       0
;                              :threads       [[:semaphoreA] [:semaphoreB]]
;                 :semaphoreA {
;
;                              :state     0
;                              :registers { :op { :val { :curr "" :prev [] }
;                                                 :locked? 0  }}
;                              :needs-adden?   true}
;                 :semaphoreB { :state     0
;                               :registers { :r1 { :val { :not-initialized true }
;                                                  :addresses { :curr 0
;                                                               :records [:not-initialized] }
;                                                  :locked? 0  }
;                                            :r2 { :val { :not-initialized true }
;                                                  :addresses { :curr 0
;                                                               :records [:not-initialized] }
;                                                  :locked? 0  }
;                                            :r3 { :val { :not-initialized true }
;                                                  :addresses { :curr 0
;                                                               :records [:not-initialized] }
;                                                  :locked? 0  } }
;                               :needs-op? true }
;                 :opcode 1}))
;
;(defn resolve [route]
;  (get-in @db route))
;
;(defn locked? [thread]
;  (resolve (into (route-to thread) :locked?)))
;
;(defn route-to [msg]
;  (cond (= msg :thread-ref)         (resolve [:mutex :active-thread])
;        (= msg :reg)                (into (route-to :thread-ref) [:row])
;        (= msg :current-register)   (resolve (route-to :reg))
;        (= msg :reg-ctr)            (into (route-to :thread-ref) [:col])
;        (= msg :current-index)      (resolve (route-to :reg-ctr))
;        (= msg :opcode)             [:opcode]
;        (= msg :semaphoreA)         (resolve [:semaphoreA :row])
;        (= msg :semaphoreB)         (resolve [:semaphoreB :row])
;        (= msg :r3)                 [:semaphoreB :registers :r3]
;        (= msg :r2)                 [:semaphoreB :registers :r2]
;        (= msg :r1)                 [:semaphoreB :registers :r1]
;        (= msg :op)                 [:semaphoreA :registers :op] ))
;
;
;(defn jump-to [msg]
;  (cond
;    (= msg :reg) (resolve (route-to :current-register))
;    (= msg :curr) (resolve (route-to :current-register))
;    (= msg :prev) (dec (jump-to :currrent-index))
;    (= msg :current-target)  (resolve (route-to :current-register))
;    (= msg :prev-target) (get (jump-to :reg) (jump-to :prev))
;    (= msg :next-target) (get (jump-to :reg) (jump-to :next))
;    (= msg :r3) (get-in @db [:semaphoreB :registers :r3 :val :curr])
;    (= msg :r2) (get-in @db [:semaphoreB :registers :r2 :val :curr])
;    (= msg :r1) (get-in @db [:semaphoreB :registers :r1 :val :curr])
;    (= msg :op) (get-in @db [:semaphoreA :registers :op :val :curr])
;    (= msg :active-register) (keyword (str "r" (inc (mod (get-in @db [:semaphoreB :state]) 3))))))
;
;  (def keyboard-input (atom {:key-id "" :ascii-code "" :tag ""}))
;
;(defn lock [thread]
;    (swap! db update-in (into [] (conj thread :locked?)) bit-or 1))
;
;(defn put [val reg]
;  (if (and (not (locked? reg))
;           (swap! db update-in (route-to reg) str val))
;    :ok
;    :locked))
;
;
;
;
;(defn get-opcode []
;  (let [state-bit (get-in @db [:mutex :state])
;        is-nonempty? (> (count (jump-to :current-target)) 0)
;        is-locked? (locked? (route-to :thread-ref))]
;    (js/parseInt (str state-bit (apply bit-or (into [] (map {false 0 true 1} [is-nonempty? is-locked?])))) 2)))
;
;
;
;(defn unlock [thread]
;  (do
;      (swap! db update-in (conj thread :state) inc)
;      (swap! db update-in (conj thread :locked?) not)))
;
;(defn enq [e]
;  (let [current-thread (route-to :thread-ref)]
;    (cond (locked? current-thread) (do (unlock current-thread)
;                                       (swap! db assoc-in (route-to :current-register) (get-in e [:key-id]))))))



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
;(defn flushRegister [m]
;  ; Destructively clear the associated register.
;  (swap! db assoc-in (route-to m) ""))
;;
;
;
;
;
;
;(def opcode
;  ;an experiment in rewriting "push" as a vector of methods: we're not really doing the von-neumann bottleneck
;  ;any favors by dispatching on action tags. can we force the use of direct addressing by converting the cond
;  ;statement to an array of 12 procedures, and access them indexically?
;  (vec [
;        ;the first action
;        (fn [e] (put (get-in e [:key-id]) :r1))
;
;        ;1 push to empty y register
;        (fn [e] (put (get-in e [:key-id]) :r2))
;        ;3 push to op reg
;        (fn [e] (put (get-in e [:key-id]) :op))
;        ;4 push to a non-empty y-register
;        (fn [e] (put (get-in e [:key-id]) :r2))
;        ;5 push to a sparkly clean x register (triggered when "equals" is followed by a number)
;        (fn [e]
;          (do (flushRegister :r3)
;              (flushRegister :op)
;              (flushRegister :r1)
;              (flushRegister :r2)
;              (divert-route :current-target :x)
;              (put (get-in e [:key-id]) :current-target)))
;        ;;6 push to fully-evaluated op register
;        (fn [e]
;          (if (can-evaluate?)
;            (do (put (apply (jump-to :op)    ; Try not to assume a particular data type.  Just serialize these jumps:
;                            [(js/parseFloat (jump-to :r1) )   ; 1) push expression to output-register (we know it's well-formed)
;                             (js/parseFloat (jump-to :r2))] ) ; 2) reduce it down
;                     :r3)                          ; 3) clear non-empty input registers
;                (flushRegister :r1)                       ; 4) allocate space in x
;                                                          ; 5) box it up
;                (flushRegister :r2)
;                (flushRegister :op)
;                (swap! db update-in [:semaphoreB :state] inc))))
;        ;;7 eval and push answer to output register
;        (fn []
;          (if (can-evaluate?)
;            (do (put (apply (jump-to :op)
;                            [(js/parseFloat (jump-to :r1))
;                             (js/parseFloat (jump-to :r2))])
;                     :r3)
;                (flushRegister :r1)
;                (flushRegister :r2)
;                (flushRegister :op)
;                (swap! db update-in [:semaphoreB :state] inc))))]))
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
;      (divert-route :current-target :result)))])))
;
;;
;(defn shortbus [e]
;  ;let's try something crazy: call methods from the vector
;  (let [current-row (into [] (route-to :current-register))
;        index       (route-to :current-index)
;        op          (get-in @db [:opcode])
;        data-tag    (get-in @e [:tag])
;        charval     (get-in @e [:key-id])]
;
;    (cond
;      (= data-tag :number)
;                (if (empty? (jump-to :r3))
;                   (if (empty? (jump-to :r2))
;                     (if (empty? (jump-to :op))
;                       (if (empty? (jump-to :r1))
;                         (apply (opcode 0) [charval]) ;the first action
;                         (apply (opcode 3) [charval])) ;keep concatenating to x
;                       (apply (opcode 1) [charval])) ;update :current-target to y and assoc the new val
;                     (apply (opcode 4) [charval])) ;keep concatenating to y
;                   (apply (opcode 5) [charval])) ;clear registers, reset target to x, put val there
;      (= data-tag :operator)    (if (empty? (jump-to :r3))
;                           (if (empty? (jump-to :r2))
;                             (if (empty? (jump-to :op))
;                               (if (empty? (jump-to :r1))
;                              (apply (opcode 2) []) ;don't add voids
;                              (apply (opcode 2) [charval])) ;typical usual case for ops
;                            (apply (opcode 2) [charval])) ;if duplicate ops, we take most recent. same logic
;                          (apply (opcode 6) [charval])) ;chained expressions are ok (e.g. 5+3*8-2)
;                        (apply (opcode 8) [charval])) ;resume chaining if the prev op was "equals"
;      (= data-tag :equals)     (if (empty? (jump-to :r3))
;                        (if (empty? (jump-to :r2))
;                          (if (empty? (jump-to :op))
;                            (if (empty? (jump-to :r1))
;                          (apply (opcode 0) []) ;don't evaluate voids
;                          (apply (opcode 10) [])) ;let x equal itself
;                        (apply (opcode 11) [])) ;stupid edge case
;                      (apply (opcode 7) [])) ;normal evaluation flushes all but the output register
;                    (apply (opcode 0) []))))) ;already evaluated, do nothing
;;
;
;
;;  Object
;;  (-keyCode [this] (.-keyCode this)))
;
;
;(defn tag [ascii-code]
;  (let [num ascii-code
;        operators #{42 43 45 47}
;        numbers #{48 49 50 51 52 53 54 56 57}
;        equals 61]
;    (cond (contains? operators num) :operator
;          (contains? numbers num) :number
;          (= equals num) :equals
;          :else ("Value not in ascii range: " ascii-code))))
;    (.addEventListener js/window "keypress"
;                   (fn [e]
;                     (let [character (.-key e)
;                           ascii-code (.-keyCode e)]
;
;                         (swap! keyboard-input assoc-in [:key-id] character)
;                         (swap! keyboard-input assoc-in [:ascii-code] (js/String ascii-code))
;                         (swap! keyboard-input assoc-in [:tag] (tag ascii-code))
;                         ;(reset! keypress (Input. e))
;                         ;(.log js/console "ascii-code: " ascii-code " character: " character " number? " (not (js/isNaN (js/parseInt character))))
;                         ;(.log js/console "keyboard-input:   [:key-id] " (get-in @keyboard-input [:key-id])
;                         ;                                ", [:ascii-code] " (get-in @keyboard-input [:ascii-code])
;                         ;                                ", [:tag] " (get-in @keyboard-input [:tag]))
;
;                         (swap! db assoc-in [:opcode] (get-opcode))
;                         (shortbus @keyboard-input))))
;(defn render! []
;  (.render js/ReactDOM
;           (a-simple-stateful-object db keyboard-input)
;           (.getElementById js/document "app")))
(defn quil-setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0})
;
(def x-scalar 22.2222)
(def y-scalar 22.2727)
(defn quil-update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)})
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
  (let [index (mod (get-in @db [:semaphoreB :state]) 3)]
    (get ["r1"  "r2"  "r3"] index)))

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
;(defn draw-caption
;  ;inserts a string at the translated coordinate vector
;  [s x1 y1] (comp (q/text s
;                          (* x1 x-scalar)
;                          (* y1 y-scalar))))

;(defn print-to-console [& args]
;  (map-indexed (fn [line-number txt] (comp (q/text txt
;                                                   (get (line line-number) :x)
;                                                   (get (line line-number) :y))))
;               args))
;
(defn quil-draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  (let [angle (:angle state)
       x (* 150 (q/cos angle))
      y (* 150 (q/sin angle))]
    (let [
          ;the names here appear to be ignored by quil, but they are helpful as comments
          meta-bounding-box   (q/rect (* 0.25 x-scalar)
                                      (* 4.5 y-scalar)
                                      (* 35.5 x-scalar)
                                      (* 10.5 y-scalar))

          input-bounding-box  (q/rect (* 19 x-scalar)
                                      (* 16 y-scalar)
                                      (* 7 x-scalar)
                                      (* 5 y-scalar))
          output-bounding-box (q/rect (* 28 x-scalar)
                                      (* 16 y-scalar)
                                      (* 7 x-scalar)
                                      (* 5 y-scalar))
          acu-bounding-box    (q/rect (* 19 x-scalar)
                                      (* 5 y-scalar)
                                      (* 16 x-scalar)
                                      (* 9.5 y-scalar))
          accumulator-box     (q/rect (* 20 x-scalar)
                                      (* 9 y-scalar)
                                      (* 14 x-scalar)
                                      (* 5 y-scalar))
          cpu-bounding-box    (q/rect (* 1 x-scalar)
                                      (* 5 y-scalar)
                                      (* 16 x-scalar)
                                      (* 9.5 y-scalar))
          op-box              (q/rect (* 20 x-scalar)
                                      (* 6.5 y-scalar)
                                      (* 14 x-scalar)
                                      (* 1.75 y-scalar))
          ;ram-bounding-box    (q/rect (* 0.5 x-scalar)
          ;                           (* 2.5 y-scalar)
          ;                          (* 33.5 x-scalar)
          ;                         (* 3 y-scalar))
          instruction1        (q/rect (* 0.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction2        (q/rect (* 3.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction3        (q/rect (* 6.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction4        (q/rect (* 9.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction5        (q/rect (* 12.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction6        (q/rect (* 15.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction7        (q/rect (* 18.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction8        (q/rect (* 21.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction9        (q/rect (* 24.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction10       (q/rect (* 27.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          instruction11       (q/rect (* 30.5 x-scalar)
                                      (* 1 y-scalar)
                                      (* 3 x-scalar)
                                      (* 3 y-scalar))
          code                (get-in @db [:opcode])

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
      ;    ;Move origin point to the center of the sketch.
      ;    ; Draw the circle.
      (apply q/fill [63 2 0])
      (q/line (* 12 x-scalar) op-sentinel-y op-sentinel-x op-sentinel-y)
      (q/line (* 12 x-scalar) op-sentinel-y (* 12 x-scalar) (* 8.33 y-scalar))
      (q/line (* 12 x-scalar) targ-y targ-x targ-y)
      (q/line (* 12 x-scalar) targ-y (* 12 x-scalar) (* 10.75 y-scalar))
      ;
      ;
      ;
      ;    ; move the input line over if there's a shift event
      ;
      ;    (if (= (mod (get-in @db [:semaphoreB :state]) 3) 0)
      ;      (do
      ;        (q/ellipse (* 21.25 x-scalar) (* 10.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
      ;        (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 10.75 y-scalar)))
      ;      (if (= (mod (get-in @db [:semaphoreB :state]) 3) 1)
      ;        (do (q/ellipse (* 21.25 x-scalar) (* 11.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
      ;            (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 11.75 y-scalar)))
      ;        (do (q/ellipse (* 21.25 x-scalar) (* 12.85 y-scalar) (* 0.25 x-scalar) (* 0.25 y-scalar))
      ;            (q/line (* 15 x-scalar) (* 11.75 y-scalar) (* 20 x-scalar) (* 12.75 y-scalar)))))
      ;    (q/line op-sentinel-x op-sentinel-y (* 20 x-scalar) op-sentinel-y)
      ;
      ;
      ;    ; boolean sentinel for op register
      (if (empty? (get-in @db [:semaphoreA :registers :op :val :curr]))
        (apply q/fill [250 340 240])
        (apply q/fill [80 250 340]))
      (q/ellipse op-sentinel-x op-sentinel-y (* 2 x-scalar) (* 2 y-scalar))
      ;    ; sentinel node for current target
      (if (empty? (get-in @db (resolve [:semaphoreB :row])))
        (apply q/fill [250 340 240])
        (apply q/fill [80 250 340]))
      (q/ellipse targ-x targ-y (* 2 x-scalar) (* 2 y-scalar))
      ;
      ;    ;solder the sentinels to the opcode getter
      ;
      (apply q/fill [63 2 0])

      (q/text "INPUT " (* 19.66 x-scalar) (* 17 y-scalar))
      (q/text (str "keyboard:") (* 20.33 x-scalar) (* 18 y-scalar))
      (q/text (str (get-in @keyboard-input [:key-id])) (* 23.33 x-scalar) (* 18 y-scalar))
      (q/text (str "ascii code:") (* 20.33 x-scalar) (* 19 y-scalar))
      (q/text (str (get-in @keyboard-input [:ascii-code])) (* 23.33 x-scalar) (* 19 y-scalar))
          (q/text "OUTPUT " (* 28.66 x-scalar) (* 17 y-scalar))
          (q/text (str (resolve (route-to :current-target))) (* 29.33 x-scalar) (* 18 y-scalar))
          (q/text "ACCUMULATOR " (* 21 x-scalar) (* 10 y-scalar))
          (q/text "r1" (* 22 x-scalar) (* 11 y-scalar))
          (q/text (get-in @db [:semaphoreB :registers :r1 :val :curr]) (* 23 x-scalar) (* 11 y-scalar))
          (q/text "r2" (* 22 x-scalar) (* 12 y-scalar))
          (q/text (get-in @db [:semaphoreB :registers :r2 :val :curr]) (* 23 x-scalar) (* 12 y-scalar))
          (q/text "r3" (* 22 x-scalar) (* 13 y-scalar))
          (q/text (get-in @db [:semaphoreB :registers :r1 :val :curr]) (* 23 x-scalar) (* 13 y-scalar))
          (q/text "ARITHMETIC CONTROL UNIT " (* 20 x-scalar) (* 6 y-scalar))
          (q/text "op" (* 22 x-scalar) (* 7.5 y-scalar))
          (q/text (get-in @db [:semaphoreA :registers :op :val :curr]) (* 23 x-scalar) (* 7.5 y-scalar))
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
          (q/text (get-in @db [:opcode]) (* 11.5 x-scalar) (* 10.25 y-scalar))
          (if (= (mod (get-in @db [:semaphoreB :state]) 3) 0)
            (q/text "r1" (* 14.83 x-scalar) (* 11.89 y-scalar))
            (if (= (mod (get-in @db [:semaphoreB :state]) 3) 1)
              (q/text "r2" (* 14.83 x-scalar) (* 11.89 y-scalar))
              (q/text "r3" (* 14.83 x-scalar) (* 11.89 y-scalar))))
      ;
      ;    (cond (= code 0) (do
      ;                       (draw-triangle 0)
      ;                       (q/text (print-to-console " " ";the first action" " " "(apply (opcode 0) [num])" "=> loading..." "..." (apply str "now putting '" (get-in @keyboard-input [:key-id]) "' in :r1")) 1 1)
      ;                       )
      ;          (= code 3) (do
      ;                       (draw-triangle 3)
      ;                       (q/text (print-to-console " " ";keep stringing to" "  target register" " " "(apply (opcode 3) [num]" "=> loading..." "..." (apply str "putting '" (get-in @keyboard-input [:key-id]) "' in " (translate-target) "...") " " "update complete.") 1 1)
      ;                       )
      ;          (= code 1) (do
      ;                       (draw-triangle 1)
      ;                       (q/text (print-to-console " " ";switch register to r2" "  ;and put val in r2" " " "(apply (opcode 1) [num]) " "=>  loading..." "..." " " (apply str "putting '" (get-in @keyboard-input [:key-id]) "'" "  in :r2...") " ""update complete.") 1 1))
      ;          (= code 2) (do
      ;                       (draw-triangle 2)
      ;                       (q/text (print-to-console " " ";lock r1 and update the " "  cleared op reg" " " "(apply (opcode 2) [num]) " "=>  loading..." "..." (apply str "setting op to'" (jump-to :op) "'...") " " "update complete.") 1 1))
      ;          (= code 6) (do
      ;                       (draw-triangle 6)
      ;                       (q/text (print-to-console " " ";chained expression" "  (e.g. '5+4-7')" " " "(apply (opcode 6) [num]) " "=> loading..." " " "pushing vectorized " "      expression to r3..." (apply str "r3 evaluates to '" (jump-to :r1) "'...") (apply str "copying '" (jump-to :r1) "' to locked r1...") (apply str "setting op to '" (jump-to :op) "'...") " " "evaluation complete.") 1 1))
      ;          (= code 8) (do
      ;                       (draw-triangle 8)
      ;                       (q/text (print-to-console " " ";resume chaining a " "  previously evaluated" "  expression" " " "(apply (opcode 8) [num]))" "=> loading..." " " (str "copying '" (jump-to :r1) "' from r3 to locked r1...") "now clearing r3..." (apply str "setting op to '" (jump-to :op) "'") "evaluation complete.") 1 1))
      ;          (= code 7) (do
      ;                       (draw-triangle 7)
      ;                       (q/text (print-to-console " " ";evaluate normally and" "  flush the registers" " " "(apply (opcode 8) [num]))" "=> loading..." " " "pushing (op r1 r2) to r3..." (apply str "r3 evaluates to '" (jump-to :r3) "'...") "flushing the registers..." " " "evaluation complete.") 1 1))
      ;          (= code 5) (do
      ;                       (draw-triangle 5)
      ;                       (q/text (print-to-console " " ";start a new expression" " " "(apply (opcode 5) [num])" "=> loading...." " " "flushing r3..." (apply str "now putting '" (jump-to :r1) "' in r1...") " " "update complete.") 1 1))
      ;          (= code 10) (do
      ;                        (draw-triangle 10)
      ;                        (q/text (print-to-console " " ";bad expression" "  flush registers but" "  push r1 to r3"  " " "(apply (opcode 10) [num]))" "=> loading..." " " "pushing r1 to r3..." "flushing the registers..." " " "update complete.") 1 1))
      ;          :else (q/text (print-to-console " ""[heavy breathing]" " " " " " " "listening to keyboard " "  for numbers...") 1 1)
      ;          )))
      ;
      ;(defn pp [x]
      ;  (cljs.pprint/pprint x)
      ;  (.log js/console (cljs.pprint/pprint x)))
      ;(apply (opcode 1) [num])) ;update :current-target to y and assoc the new val
      ;        (apply (opcode 4) [num])) ;keep concatenating to y
      ;  (apply (opcode 5) [num])) ;clear registers, reset target to x, put val there
      ;(shift? num) (swap! app-state assoc-in [:shift-in] true) ;helper events for keyboard inputs
      ;(unshift? num) (swap! app-state assoc-in [:shift-in] false)
      ;;(operator? num) (if (empty? ans)
      ;;                  (if (empty? y)
      ;;                    (if (empty? op)
      ;;                      (if (empty? x)
      ;;                        (apply (opcode -1) []) ;don't add voids
      ;;                        (apply (opcode 2) [num])) ;typical usual case for ops
      ;;                      (apply (opcode 2) [num])) ;if duplicate ops, we take most recent. same logic
      ;;                    (apply (opcode 6) [num])) ;chained expressions are ok (e.g. 5+3*8-2)
      ;;                  (apply (opcode 8) [num])) ;resume chaining if the prev op was "equals"
      ;;(eval? val) (if (empty? ans)
      ;;              (if (empty? y)
      ;;                (if (empty? op)
      ;;                  (if (empty? x)
      ;;                    (apply (opcode -1) []) ;don't evaluate voids
      ;;                    (apply (opcode 10) [])) ;let x equal itself
      ;;                  (apply (opcode 11) [])) ;stupid edge case
      ;;                (apply (opcode 7) [])) ;normal evaluation flushes all but the output register
      ;;              (apply (opcode -1) []))))) ;already evaluated, do nothing
      ;;
      ;;
      ;;(= code 1) (q/text (print-to-console "loading instr reg 1..." "..." "'(map (reduce apply [put]) " "
      ;;                                    (q/text (str "loading instr reg 1...") (get (line 1) :x) (get (line 1) :y))
      ;;                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
      ;;                                    (q/text (str "(put :r2 (target))") (get (line 3) :x) (get (line 3) :y))
      ;;                                    (q/text (str "(put " (get-in @keyboard-input [:key-id]) " :r2)") (get (line 4) :x) (get (line 4) :y))
      ;;                                    (q/text (str "=> 'ok") (get (line 2) :x) (get (line 2) :y)))
      ;;          (= code 3) (do
      ;;                                    (q/text (str "loading instr reg 3...") (get (line 1) :x) (get (line 1) :y))
      ;;                                    (q/text (str "...") (get (line 2) :x) (get (line 2) :y))
      ;;                                    (q/text (str "(eval '(put (key) (target))") (get (line 3) :x) (get (line 3) :y))
      ;;                                    (q/text (str "=> (put " (get-in @keyboard-input [:key-id]) " " (translate-target) ")") (get (line 4) :x) (get (line 4) :y)))
      ;;          :else (q/text (print-to-console " " "i am a robot" "  *bleep bloop*" ) 0 0))))
      ;;
      ;;                     ;;1 push to empty y register
      ;;                     ;(fn [e] (do (divert-route :current-target :y)
      ;;                     ;            (put e :current-target)))
      ;;                     ;;2 push to empty op
      ;;                     ;(fn [e] (put e :control-bus))
      ;;                     ;;3 push to a non-empty x-register
      ;;                     ;(fn [e] (shunt e :current-target))
      ;;                     ;;4 push to a non-empty y-register
      ;;                     ;(fn [e] (shunt e :current-target))
      ;;                     ;;5 push to a sparkly clean x register (triggered when "equals" is followed by a number)
      ;;                     ;(fn [e]
      ;;                     ;  (do (flushRegister :result)
      ;;                     ;      (flushRegister :op)
      ;;                     ;      (flushRegister :x)
      ;;                     ;      (flushRegister :y)
      ;;                     ;      (divert-route :current-target :x)
      ;;                     ;      (put e :current-target)))
      ;;                     ;;6 push to fully-evaluated op register
      ;;                     ;(fn [e]
      ;;                     ;  (if (can-evaluate?)
      ;;                     ;    (do (put (apply (dispatch (show 'op))    ; Try not to assume a particular data type.  Just serialize these jumps:
      ;;                    [(js/parseFloat (show 'x))    ; 1) push expression to output-register (we know it's well-formed)
      ;;                     (js/parseFloat (show 'y))])   ; 2) reduce it down
      ;;             :data-bus)                          ; 3) clear non-empty input registers
      ;;        (flushRegister :x)                        ; 4) allocate space in x
      ;;        (put (show 'data-bus) :primary-register)  ; 5) box it up
      ;;        (flushRegister :result)
      ;;        (flushRegister :y)
      ;;        (flushRegister :op)
      ;;        (divert-route :current-target :x)
      ;;        (put e :control-bus))))
      ;;;7 eval and push answer to output register
      ;;(fn []
      ;;  (if (can-evaluate?)
      ;;    (do (put (apply (dispatch (show 'op))
      ;;                    [(js/parseFloat (show 'x))
      ;;                     (js/parseFloat (show 'y))])
      ;;             :data-bus)
      ;;        (flushRegister :x)
      ;;        (flushRegister :y)
      ;;        (flushRegister :op)
      ;;        (divert-route :current-target :result))))
      ;;;8 push op to previously evaluated expression
      ;;(fn [e]
      ;;  (do (put (show 'data-bus) :primary-register)
      ;;      (put e :control-bus)
      ;;      (flushRegister :result)
      ;;      (divert-route :current-target :x)))
      ;;;10 edge case such that x equals itself if y is empty
      ;;(fn []
      ;;  (do (put (show 'x) :data-bus)
      ;;      (flushRegister :x)
      ;;      (divert-route :current-target :result)))
      ;;;11 stupid edge case in the event the exp isn't well-formed ("5 +")
      ;;(fn []
      ;;  (do (put (show 'x) :data-bus)
      ;;      (flushRegister :x)
      ;;      (flushRegister :op)
      ;;      (divert-route :current-target :result)))]))
      ;
      ;;(q/line (* 10 x-scalar) (* 9 y-scalar) (
      ;;(do
      ;;(q/rect (* 20 x-scalar)
      ;;        (* 6.5 y-scalar)
      ;;        (* 14 x-scalar)
      ;;        (* 1.75 y-scalar))
      ;;(apply q/fill [100 100 100])
      ;;(q/text "Locked. Incorrect arity for eval" (* 22 x-scalar) (* 7.5 y-scalar))))
      ;;               (q/end-shape)
      ;
      ;
      ;
      )))
(defn quil-input-setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0})
(defn quil-update-input-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   ;:angle (+ (:angle state) 0.1)})
 })

(defn quil-draw-input-state [input-state]
  (let [input-bounding-box  (q/rect (* 19 x-scalar)
                              (* 16 y-scalar)
                              (* 7 x-scalar)
                              (* 5 y-scalar))]))

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
;
;;;(q/defsketch input
;;;             :host "josefk"
;;;             :size [(* 7 x-scalar) (* 5 y-scalar)]
;;;             :setup quil-input-setup
;;;
;;;             ; update-state is called on each iteration before draw-state.
;;;             :update quil-update-input-state
;;;             :draw quil-draw-input
;;;             ; This sketch uses functional-mode middleware.
;;;             ; Check quil wiki for more info about middlewares and particularly
;;;             ; fun-mode.
;;;             :middleware [m/fun-mode])
;;
;;
;;;(add-watch x :on-change (fn [_ _ _ _] (render!)))
;;;(add-watch y :on-change (fn [_ _ _ _] (render!)))
;;;(add-watch op :on-change (fn [_ _ _ _] (render!)))
;;
;(add-watch db :on-change (fn [_ _ _ _] (render!)))
;(add-watch keyboard-input :on-change (fn [_ _ _ _] (render!)))
;;(add-watch result :on-change (fn [_ _ _ _] (render!)))
;
;(render!)
;;