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
var G__50965__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__50965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50966__i = 0, G__50966__a = new Array(arguments.length -  0);
while (G__50966__i < G__50966__a.length) {G__50966__a[G__50966__i] = arguments[G__50966__i + 0]; ++G__50966__i;}
  args = new cljs.core.IndexedSeq(G__50966__a,0);
} 
return G__50965__delegate.call(this,args);};
G__50965.cljs$lang$maxFixedArity = 0;
G__50965.cljs$lang$applyTo = (function (arglist__50967){
var args = cljs.core.seq(arglist__50967);
return G__50965__delegate(args);
});
G__50965.cljs$core$IFn$_invoke$arity$variadic = G__50965__delegate;
return G__50965;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__50968__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__50968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50969__i = 0, G__50969__a = new Array(arguments.length -  0);
while (G__50969__i < G__50969__a.length) {G__50969__a[G__50969__i] = arguments[G__50969__i + 0]; ++G__50969__i;}
  args = new cljs.core.IndexedSeq(G__50969__a,0);
} 
return G__50968__delegate.call(this,args);};
G__50968.cljs$lang$maxFixedArity = 0;
G__50968.cljs$lang$applyTo = (function (arglist__50970){
var args = cljs.core.seq(arglist__50970);
return G__50968__delegate(args);
});
G__50968.cljs$core$IFn$_invoke$arity$variadic = G__50968__delegate;
return G__50968;
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

//# sourceMappingURL=debug.js.map?rel=1478399613873