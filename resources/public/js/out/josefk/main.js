// Compiled by ClojureScript 1.7.122 {}
goog.provide('josefk.main');
goog.require('cljs.core');
goog.require('josefk.core');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('weasel.repl');
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return josefk.core.reg_machine.call(null);
}));
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null));
josefk.core.reg_machine.call(null);

//# sourceMappingURL=main.js.map