(defproject josefk "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj"]

  :test-paths ["test/clj"]

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [ring "1.3.2"]
                 [ring/ring-core "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-defaults "0.1.4"]
                 [compojure "1.4.0"]
                 [enlive "1.1.6"]
                 [sablono "0.3.5"]
                 [org.omcljs/om "0.8.8"]
                 [racehub/om-bootstrap "0.5.3"]
                 [environ "1.0.0"]
                 [quil "2.2.6"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.4.1"]
            [lein-environ "1.0.0"]
            [lein-ring "0.8.13"]]

  :min-lein-version "2.5.0"

  :uberjar-name "josefk.jar"

  :cljsbuild {:builds {;:main  {:source-paths ["resources/public/js/out/cljs"]}
                       :app {:source-paths ["resources/public/js/out/josefk"]
                             :compiler {:output-to     "resources/public/js/app.js"
                                        :output-dir    "resources/public/js/out"
                                        :source-map    "resources/public/js/out/josefk/app.js.map"
                                        :preamble      ["resources/public/js/out/react.inc.js"]
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev     {:source-paths     ["env/dev/clj"]
                       ;:test-paths ["test/clj"]

                       :min-lein-version "2.0.0"

                       :dependencies     [[figwheel "0.2.5"]
                                          [figwheel-sidecar "0.2.5"]
                                          [com.cemerick/piggieback "0.1.5"]
                                          [weasel "0.6.0"]
                                          [sablono "0.3.5"]]

                       :repl-options     {:init-ns          josefk.server
                                          :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                       :plugins          [[lein-figwheel "0.2.5"]]

                       :figwheel         {:http-server-root "public"
                                          :server-port      3449
                                          :css-dirs         ["resources/public/css"]
                                          :ring-handler     josefk.server/http-handler}

                       :env              {:is-dev true}

                       :cljsbuild        {:test-commands {"test" ["phantomjs" "env/test/js/unit-test.js" "env/test/unit-test.html"]}
                                          :builds        {:app {:source-paths ["resources/public/js/out/josefk"]}
                                                          :test {:source-paths ["src/cljs" "test/cljs"]
                                                                 :compiler {:output-to     "resources/public/js/app_test.js"
                                                                            :output-dir    "resources/public/js/test"
                                                                            :source-map    "resources/public/js/test.js.map"
                                                                            :preamble      ["resources/public/js/out/react.inc.js"]
                                                                            :optimizations :whitespace
                                                                            :pretty-print  false}}}
                                                          }}


             :uberjar {:source-paths ["env/prod/clj"]
                       :hooks        [leiningen.cljsbuild]
                       :env          {:production true}
                       :omit-source  true
                       :aot          :all
                       :main         josefk.server
                       :cljsbuild    {:builds {:app
                                               {:source-paths ["env/prod/cljs"]
                                                :compiler
                                                              {:output-to "resources/public/js/reg_machine.js"
                                                               :output-dir "resources/public/js"
                                                               :optimizations :none
                                                               :pretty-print  false}}}}}})
