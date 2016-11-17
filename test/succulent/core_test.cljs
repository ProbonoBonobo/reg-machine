(ns succulent.core-test
  (:require [cljs.test :refer-macros [is testing async]]
            [devcards.core :refer-macros [deftest]]
             [succulent.core :as s]))

;(deftest input-number
;         (testing "(sendkeys \"5\")")
;         (sendkeys "5")
;         (is = (goto :charstring) 5))

;(deftest test7
;         (testing "make-forest"
;           (plant :test :forest)
;           (is (true? (satisfies? Forest (get-in @db [:test]))))))

;(deftest a-test
;  (testing "FIXME, I fail."
;    (async done
;      (js/setTimeout
;        (fn []
;          (throw (js/Error. "Jibber")))
;        100))))
;(deftest test1
;         (testing "An app-state atom has the :cpu key whose value is a nested object."
;           (is (and (not (empty? @s/app-state))
;                    (contains?k @s/app-state :cpu)))))
;(deftest test2
;         (testing "The :cpu "
;           (is (= 1 1))))