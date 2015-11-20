// Compiled by ClojureScript 1.7.122 {}
goog.provide('josefk.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
josefk.core_test.example_passing_test = (function josefk$core_test$example_passing_test(){
return cljs.test.test_var.call(null,josefk$core_test$example_passing_test.cljs$lang$var);
});
josefk.core_test.example_passing_test.cljs$lang$test = (function (){
try{var values__19199__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__19200__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19199__auto__);
if(cljs.core.truth_(result__19200__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19199__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19199__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19200__auto__;
}catch (e19405){var t__19237__auto__ = e19405;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19237__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

josefk.core_test.example_passing_test.cljs$lang$var = new cljs.core.Var(function(){return josefk.core_test.example_passing_test;},new cljs.core.Symbol("josefk.core-test","example-passing-test","josefk.core-test/example-passing-test",-61675870,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"josefk.core-test","josefk.core-test",1233673726,null),new cljs.core.Symbol(null,"example-passing-test","example-passing-test",594018964,null),"test/cljs/josefk/core-test.cljs",30,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(josefk.core_test.example_passing_test)?josefk.core_test.example_passing_test.cljs$lang$test:null)]));
