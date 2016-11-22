(defproject succulent "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[devcards "0.2.1-7"]
								 ;[lein-doo "0.1.7"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
								 [org.clojure/core.async "0.2.395"]
                 [garden "1.3.2"]
                 ;[cljsjs/react "15.0.1-1"]
                 ;[cljsjs/react-dom "15.3.1-0"]]
                 ;[reagent "0.6.0" :exclusions [cljsjs/react]]
								 ;[sablono "0.4.0"]
								 ;[ring "1.3.2"]
								 ;[ring/ring-core "1.4.0"]
								 ;[ring/ring-jetty-adapter "1.4.0"]
								 ;[ring/ring-defaults "0.1.4"]
								 ;[compojure "1.4.0"]
								 ;[enlive "1.1.6"]
								 ;[sablono "0.3.5"]
								 ;[org.omcljs/om "0.8.8"]
								 ;[racehub/om-bootstrap "0.6.1"]
								 ;[environ "1.0.0"]
								 [quil "2.5.0"]]
  :plugins [[lein-cljsbuild "1.1.4" :exclusions  [[org.clojure/clojure]]]

            [lein-doo "0.1.7"]
            [lein-figwheel "0.5.8"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :figwheel { :css-dirs ["resources/public/css"] }
  :cljsbuild {
    :test-commands {"test" ["lein" "doo" "phantom" "test" "once"]}
    :builds [{:id "dev"             ; development configuration
              :source-paths ["src"] ; Paths to monitor for build
              :figwheel true        ; Enable figwheel
              :compiler {:main succulent.core     ; your main namespace
                         :asset-path "cljs/out"                       ; Where to load dependendt files go, mind you this one is relative
                         :output-to "resources/public/cljs/main.js"   ; Where the main file will be built
												 :output-dir "resources/public/cljs/out"      ; Directory for temporary files
												 :source-map-timestamp true}                  ; Sourcemaps hurray!
							}
						 {:id "test"
							:source-paths ["src" "test"]
							:compiler {:main runners.doo
												 :optimizations :none
												 :output-to "resources/public/cljs/tests/all-tests.js"}}
             {:id "devcards-test"
              :source-paths ["src" "test"]
              :figwheel {:devcards true}
              :compiler {:main runners.browser
                         :optimizations :none
                         :asset-path "cljs/tests/out"
                         :output-dir "resources/public/cljs/tests/out"
                         :output-to "resources/public/cljs/tests/all-tests.js"
                         :source-map-timestamp true}}

]})
