// Compiled by ClojureScript 1.9.227 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33190__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33191__i = 0, G__33191__a = new Array(arguments.length -  0);
while (G__33191__i < G__33191__a.length) {G__33191__a[G__33191__i] = arguments[G__33191__i + 0]; ++G__33191__i;}
  args = new cljs.core.IndexedSeq(G__33191__a,0);
} 
return G__33190__delegate.call(this,args);};
G__33190.cljs$lang$maxFixedArity = 0;
G__33190.cljs$lang$applyTo = (function (arglist__33192){
var args = cljs.core.seq(arglist__33192);
return G__33190__delegate(args);
});
G__33190.cljs$core$IFn$_invoke$arity$variadic = G__33190__delegate;
return G__33190;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33193__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33194__i = 0, G__33194__a = new Array(arguments.length -  0);
while (G__33194__i < G__33194__a.length) {G__33194__a[G__33194__i] = arguments[G__33194__i + 0]; ++G__33194__i;}
  args = new cljs.core.IndexedSeq(G__33194__a,0);
} 
return G__33193__delegate.call(this,args);};
G__33193.cljs$lang$maxFixedArity = 0;
G__33193.cljs$lang$applyTo = (function (arglist__33195){
var args = cljs.core.seq(arglist__33195);
return G__33193__delegate(args);
});
G__33193.cljs$core$IFn$_invoke$arity$variadic = G__33193__delegate;
return G__33193;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map