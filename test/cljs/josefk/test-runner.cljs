(ns josefk.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [josefk.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'josefk.core-test))
    0
    1))
