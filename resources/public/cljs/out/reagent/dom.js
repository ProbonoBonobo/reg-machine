// Compiled by ClojureScript 1.9.227 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24751__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_47451 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_47451){
return (function (){
var _STAR_always_update_STAR_47452 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_47452;
}});})(_STAR_always_update_STAR_47451))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_47451;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args47453 = [];
var len__25826__auto___47456 = arguments.length;
var i__25827__auto___47457 = (0);
while(true){
if((i__25827__auto___47457 < len__25826__auto___47456)){
args47453.push((arguments[i__25827__auto___47457]));

var G__47458 = (i__25827__auto___47457 + (1));
i__25827__auto___47457 = G__47458;
continue;
} else {
}
break;
}

var G__47455 = args47453.length;
switch (G__47455) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47453.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__47464_47468 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__47465_47469 = null;
var count__47466_47470 = (0);
var i__47467_47471 = (0);
while(true){
if((i__47467_47471 < count__47466_47470)){
var v_47472 = cljs.core._nth.call(null,chunk__47465_47469,i__47467_47471);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_47472);

var G__47473 = seq__47464_47468;
var G__47474 = chunk__47465_47469;
var G__47475 = count__47466_47470;
var G__47476 = (i__47467_47471 + (1));
seq__47464_47468 = G__47473;
chunk__47465_47469 = G__47474;
count__47466_47470 = G__47475;
i__47467_47471 = G__47476;
continue;
} else {
var temp__4657__auto___47477 = cljs.core.seq.call(null,seq__47464_47468);
if(temp__4657__auto___47477){
var seq__47464_47478__$1 = temp__4657__auto___47477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47464_47478__$1)){
var c__25562__auto___47479 = cljs.core.chunk_first.call(null,seq__47464_47478__$1);
var G__47480 = cljs.core.chunk_rest.call(null,seq__47464_47478__$1);
var G__47481 = c__25562__auto___47479;
var G__47482 = cljs.core.count.call(null,c__25562__auto___47479);
var G__47483 = (0);
seq__47464_47468 = G__47480;
chunk__47465_47469 = G__47481;
count__47466_47470 = G__47482;
i__47467_47471 = G__47483;
continue;
} else {
var v_47484 = cljs.core.first.call(null,seq__47464_47478__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_47484);

var G__47485 = cljs.core.next.call(null,seq__47464_47478__$1);
var G__47486 = null;
var G__47487 = (0);
var G__47488 = (0);
seq__47464_47468 = G__47485;
chunk__47465_47469 = G__47486;
count__47466_47470 = G__47487;
i__47467_47471 = G__47488;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1478445848300