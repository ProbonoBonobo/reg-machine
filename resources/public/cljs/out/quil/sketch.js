// Compiled by ClojureScript 1.9.293 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.util');
goog.require('goog.events.EventType');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args46411 = [];
var len__26007__auto___46414 = arguments.length;
var i__26008__auto___46415 = (0);
while(true){
if((i__26008__auto___46415 < len__26007__auto___46414)){
args46411.push((arguments[i__26008__auto___46415]));

var G__46416 = (i__26008__auto___46415 + (1));
i__26008__auto___46415 = G__46416;
continue;
} else {
}
break;
}

var G__46413 = args46411.length;
switch (G__46413) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46411.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__46430 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__46431 = null;
var count__46432 = (0);
var i__46433 = (0);
while(true){
if((i__46433 < count__46432)){
var vec__46434 = cljs.core._nth.call(null,chunk__46431,i__46433);
var processing_name = cljs.core.nth.call(null,vec__46434,(0),null);
var quil_name = cljs.core.nth.call(null,vec__46434,(1),null);
var temp__4657__auto___46442 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___46442)){
var handler_46443 = temp__4657__auto___46442;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__46430,chunk__46431,count__46432,i__46433,handler_46443,temp__4657__auto___46442,vec__46434,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_46437 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_46443.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_46437;
}});})(seq__46430,chunk__46431,count__46432,i__46433,handler_46443,temp__4657__auto___46442,vec__46434,processing_name,quil_name))
);
} else {
}

var G__46444 = seq__46430;
var G__46445 = chunk__46431;
var G__46446 = count__46432;
var G__46447 = (i__46433 + (1));
seq__46430 = G__46444;
chunk__46431 = G__46445;
count__46432 = G__46446;
i__46433 = G__46447;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46430);
if(temp__4657__auto__){
var seq__46430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46430__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__46430__$1);
var G__46448 = cljs.core.chunk_rest.call(null,seq__46430__$1);
var G__46449 = c__25713__auto__;
var G__46450 = cljs.core.count.call(null,c__25713__auto__);
var G__46451 = (0);
seq__46430 = G__46448;
chunk__46431 = G__46449;
count__46432 = G__46450;
i__46433 = G__46451;
continue;
} else {
var vec__46438 = cljs.core.first.call(null,seq__46430__$1);
var processing_name = cljs.core.nth.call(null,vec__46438,(0),null);
var quil_name = cljs.core.nth.call(null,vec__46438,(1),null);
var temp__4657__auto___46452__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___46452__$1)){
var handler_46453 = temp__4657__auto___46452__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__46430,chunk__46431,count__46432,i__46433,handler_46453,temp__4657__auto___46452__$1,vec__46438,processing_name,quil_name,seq__46430__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_46441 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_46453.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_46441;
}});})(seq__46430,chunk__46431,count__46432,i__46433,handler_46453,temp__4657__auto___46452__$1,vec__46438,processing_name,quil_name,seq__46430__$1,temp__4657__auto__))
);
} else {
}

var G__46454 = cljs.core.next.call(null,seq__46430__$1);
var G__46455 = null;
var G__46456 = (0);
var G__46457 = (0);
seq__46430 = G__46454;
chunk__46431 = G__46455;
count__46432 = G__46456;
i__46433 = G__46457;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__46458_SHARP_){
return p1__46458_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__24899__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__26014__auto__ = [];
var len__26007__auto___46460 = arguments.length;
var i__26008__auto___46461 = (0);
while(true){
if((i__26008__auto___46461 < len__26007__auto___46460)){
args__26014__auto__.push((arguments[i__26008__auto___46461]));

var G__46462 = (i__26008__auto___46461 + (1));
i__26008__auto___46461 = G__46462;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__24899__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq46459){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46459));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__46471 = quil.sketch.empty_body_QMARK_.call(null);
var seq__46467_46472 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__46468_46473 = null;
var count__46469_46474 = (0);
var i__46470_46475 = (0);
while(true){
if((i__46470_46475 < count__46469_46474)){
var sk_46476 = cljs.core._nth.call(null,chunk__46468_46473,i__46470_46475);
if(cljs.core.truth_(add_elem_QMARK__46471)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_46476));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_46476).call(null);

var G__46477 = seq__46467_46472;
var G__46478 = chunk__46468_46473;
var G__46479 = count__46469_46474;
var G__46480 = (i__46470_46475 + (1));
seq__46467_46472 = G__46477;
chunk__46468_46473 = G__46478;
count__46469_46474 = G__46479;
i__46470_46475 = G__46480;
continue;
} else {
var temp__4657__auto___46481 = cljs.core.seq.call(null,seq__46467_46472);
if(temp__4657__auto___46481){
var seq__46467_46482__$1 = temp__4657__auto___46481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46467_46482__$1)){
var c__25713__auto___46483 = cljs.core.chunk_first.call(null,seq__46467_46482__$1);
var G__46484 = cljs.core.chunk_rest.call(null,seq__46467_46482__$1);
var G__46485 = c__25713__auto___46483;
var G__46486 = cljs.core.count.call(null,c__25713__auto___46483);
var G__46487 = (0);
seq__46467_46472 = G__46484;
chunk__46468_46473 = G__46485;
count__46469_46474 = G__46486;
i__46470_46475 = G__46487;
continue;
} else {
var sk_46488 = cljs.core.first.call(null,seq__46467_46482__$1);
if(cljs.core.truth_(add_elem_QMARK__46471)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_46488));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_46488).call(null);

var G__46489 = cljs.core.next.call(null,seq__46467_46482__$1);
var G__46490 = null;
var G__46491 = (0);
var G__46492 = (0);
seq__46467_46472 = G__46489;
chunk__46468_46473 = G__46490;
count__46469_46474 = G__46491;
i__46470_46475 = G__46492;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1479783412851