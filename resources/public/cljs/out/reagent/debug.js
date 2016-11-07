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
var G__25938__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25939__i = 0, G__25939__a = new Array(arguments.length -  0);
while (G__25939__i < G__25939__a.length) {G__25939__a[G__25939__i] = arguments[G__25939__i + 0]; ++G__25939__i;}
  args = new cljs.core.IndexedSeq(G__25939__a,0);
} 
return G__25938__delegate.call(this,args);};
G__25938.cljs$lang$maxFixedArity = 0;
G__25938.cljs$lang$applyTo = (function (arglist__25940){
var args = cljs.core.seq(arglist__25940);
return G__25938__delegate(args);
});
G__25938.cljs$core$IFn$_invoke$arity$variadic = G__25938__delegate;
return G__25938;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25941__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25942__i = 0, G__25942__a = new Array(arguments.length -  0);
while (G__25942__i < G__25942__a.length) {G__25942__a[G__25942__i] = arguments[G__25942__i + 0]; ++G__25942__i;}
  args = new cljs.core.IndexedSeq(G__25942__a,0);
} 
return G__25941__delegate.call(this,args);};
G__25941.cljs$lang$maxFixedArity = 0;
G__25941.cljs$lang$applyTo = (function (arglist__25943){
var args = cljs.core.seq(arglist__25943);
return G__25941__delegate(args);
});
G__25941.cljs$core$IFn$_invoke$arity$variadic = G__25941__delegate;
return G__25941;
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

//# sourceMappingURL=debug.js.map?rel=1478445816034