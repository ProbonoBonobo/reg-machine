// Compiled by ClojureScript 1.9.227 {}
goog.provide('succulent.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('succulent.core');

succulent.core_test.test1 = (function succulent$core_test$test1(){
return cljs.test.test_var.call(null,succulent$core_test$test1.cljs$lang$var);
});
succulent.core_test.test1.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"An app-state atom has the :cpu key whose value is a nested object.");

try{try{var value__14640__auto__ = (function (){var and__6392__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,succulent.core.app_state)));
if(and__6392__auto__){
return succulent.core_test.contains_QMARK_k.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.Keyword(null,"cpu","cpu",106162238));
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(value__14640__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("s","app-state","s/app-state",130569142,null)))),cljs.core.list(new cljs.core.Symbol(null,"contains?k","contains?k",-219137953,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("s","app-state","s/app-state",130569142,null)),new cljs.core.Keyword(null,"cpu","cpu",106162238))),new cljs.core.Keyword(null,"actual","actual",107306363),value__14640__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("s","app-state","s/app-state",130569142,null)))),cljs.core.list(new cljs.core.Symbol(null,"contains?k","contains?k",-219137953,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("s","app-state","s/app-state",130569142,null)),new cljs.core.Keyword(null,"cpu","cpu",106162238))),new cljs.core.Keyword(null,"actual","actual",107306363),value__14640__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__14640__auto__;
}catch (e15597){var t__14675__auto__ = e15597;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("s","app-state","s/app-state",130569142,null)))),cljs.core.list(new cljs.core.Symbol(null,"contains?k","contains?k",-219137953,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("s","app-state","s/app-state",130569142,null)),new cljs.core.Keyword(null,"cpu","cpu",106162238))),new cljs.core.Keyword(null,"actual","actual",107306363),t__14675__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

succulent.core_test.test1.cljs$lang$var = new cljs.core.Var(function(){return succulent.core_test.test1;},new cljs.core.Symbol("succulent.core-test","test1","succulent.core-test/test1",-258546938,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"succulent.core-test","succulent.core-test",-8270364,null),new cljs.core.Symbol(null,"test1","test1",451069442,null),"test/succulent/core_test.cljs",15,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(succulent.core_test.test1)?succulent.core_test.test1.cljs$lang$test:null)]));

succulent.core_test.test2 = (function succulent$core_test$test2(){
return cljs.test.test_var.call(null,succulent$core_test$test2.cljs$lang$var);
});
succulent.core_test.test2.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"The :cpu ");

try{try{var values__14637__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__14638__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__14637__auto__);
if(cljs.core.truth_(result__14638__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__14637__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7238__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__14637__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__14638__auto__;
}catch (e15598){var t__14675__auto__ = e15598;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__14675__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

succulent.core_test.test2.cljs$lang$var = new cljs.core.Var(function(){return succulent.core_test.test2;},new cljs.core.Symbol("succulent.core-test","test2","succulent.core-test/test2",-770177641,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"succulent.core-test","succulent.core-test",-8270364,null),new cljs.core.Symbol(null,"test2","test2",-1194335589,null),"test/succulent/core_test.cljs",15,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(succulent.core_test.test2)?succulent.core_test.test2.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map