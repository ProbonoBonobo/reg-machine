// Compiled by ClojureScript 1.7.122 {}
goog.provide('josefk.test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('josefk.core_test');
cljs.core.enable_console_print_BANG_.call(null);
josefk.test_runner.runner = (function josefk$test_runner$runner(){
if(cljs.core.truth_(cljs.test.successful_QMARK_.call(null,cljs.test.run_block.call(null,(function (){var env19410 = cljs.test.empty_env.call(null);
var summary19411 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env19410,summary19411){
return (function (){
cljs.test.set_env_BANG_.call(null,env19410);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"josefk.core-test","josefk.core-test",1233673726,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19304__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19304__auto__,env19410,summary19411){
return (function (){
if((env__19304__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__19304__auto__,env19410,summary19411))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return josefk.core_test.example_passing_test;},new cljs.core.Symbol("josefk.core-test","example-passing-test","josefk.core-test/example-passing-test",-61675870,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"josefk.core-test","josefk.core-test",1233673726,null),new cljs.core.Symbol(null,"example-passing-test","example-passing-test",594018964,null),"test/cljs/josefk/core-test.cljs",30,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(josefk.core_test.example_passing_test)?josefk.core_test.example_passing_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19304__auto__,env19410,summary19411){
return (function (){
if((env__19304__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19304__auto__,env19410,summary19411))
], null));
})());
});})(env19410,summary19411))
,((function (env19410,summary19411){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"josefk.core-test","josefk.core-test",1233673726,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env19410,summary19411))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env19410,summary19411){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary19411,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary19411),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env19410,summary19411))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env19410,summary19411){
return (function (){
cljs.test.set_env_BANG_.call(null,env19410);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary19411));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary19411),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env19410,summary19411))
], null));
})())))){
return (0);
} else {
return (1);
}
});
