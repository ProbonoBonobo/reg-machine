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
var G__65695__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65696__i = 0, G__65696__a = new Array(arguments.length -  0);
while (G__65696__i < G__65696__a.length) {G__65696__a[G__65696__i] = arguments[G__65696__i + 0]; ++G__65696__i;}
  args = new cljs.core.IndexedSeq(G__65696__a,0);
} 
return G__65695__delegate.call(this,args);};
G__65695.cljs$lang$maxFixedArity = 0;
G__65695.cljs$lang$applyTo = (function (arglist__65697){
var args = cljs.core.seq(arglist__65697);
return G__65695__delegate(args);
});
G__65695.cljs$core$IFn$_invoke$arity$variadic = G__65695__delegate;
return G__65695;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__65698__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65699__i = 0, G__65699__a = new Array(arguments.length -  0);
while (G__65699__i < G__65699__a.length) {G__65699__a[G__65699__i] = arguments[G__65699__i + 0]; ++G__65699__i;}
  args = new cljs.core.IndexedSeq(G__65699__a,0);
} 
return G__65698__delegate.call(this,args);};
G__65698.cljs$lang$maxFixedArity = 0;
G__65698.cljs$lang$applyTo = (function (arglist__65700){
var args = cljs.core.seq(arglist__65700);
return G__65698__delegate(args);
});
G__65698.cljs$core$IFn$_invoke$arity$variadic = G__65698__delegate;
return G__65698;
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

//# sourceMappingURL=debug.js.map?rel=1478402636671