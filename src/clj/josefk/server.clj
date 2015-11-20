(ns josefk.server
  (:require [clojure.java.io :as io]
            [josefk.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(deftemplate page (io/resource "register-machine.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/register-machine.html")
  (resources "/react" {:root "react"})
  (GET "/register-machine.html" req (page))
           (GET "/register-machine.html" req (page)))

;(defroutes regmachine-routes
;           (resources "register-machine.html")
;           (resources "/react" {:root "react"})
;          (GET "/register-machine.html" []
;              (response/redirect "/register-machine.html")
;              (route/resources "/register-machine.html")))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (wrap-defaults #'routes api-defaults))
    (wrap-defaults routes api-defaults)))

(defn run-web-server [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (println (format "Starting web server on port %d." port))
    (run-jetty http-handler {:port port :join? false})))

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defn run [& [port]]
  (when is-dev?
    (run-auto-reload))
  (run-web-server port))

(defn -main [& [port]]
  (run port))
