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
var args44249 = [];
var len__7651__auto___44252 = arguments.length;
var i__7652__auto___44253 = (0);
while(true){
if((i__7652__auto___44253 < len__7651__auto___44252)){
args44249.push((arguments[i__7652__auto___44253]));

var G__44254 = (i__7652__auto___44253 + (1));
i__7652__auto___44253 = G__44254;
continue;
} else {
}
break;
}

var G__44251 = args44249.length;
switch (G__44251) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44249.length)].join('')));

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
var seq__44268 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__44269 = null;
var count__44270 = (0);
var i__44271 = (0);
while(true){
if((i__44271 < count__44270)){
var vec__44272 = cljs.core._nth.call(null,chunk__44269,i__44271);
var processing_name = cljs.core.nth.call(null,vec__44272,(0),null);
var quil_name = cljs.core.nth.call(null,vec__44272,(1),null);
var temp__4657__auto___44280 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___44280)){
var handler_44281 = temp__4657__auto___44280;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__44268,chunk__44269,count__44270,i__44271,handler_44281,temp__4657__auto___44280,vec__44272,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_44275 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_44281.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_44275;
}});})(seq__44268,chunk__44269,count__44270,i__44271,handler_44281,temp__4657__auto___44280,vec__44272,processing_name,quil_name))
);
} else {
}

var G__44282 = seq__44268;
var G__44283 = chunk__44269;
var G__44284 = count__44270;
var G__44285 = (i__44271 + (1));
seq__44268 = G__44282;
chunk__44269 = G__44283;
count__44270 = G__44284;
i__44271 = G__44285;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44268);
if(temp__4657__auto__){
var seq__44268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44268__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__44268__$1);
var G__44286 = cljs.core.chunk_rest.call(null,seq__44268__$1);
var G__44287 = c__7357__auto__;
var G__44288 = cljs.core.count.call(null,c__7357__auto__);
var G__44289 = (0);
seq__44268 = G__44286;
chunk__44269 = G__44287;
count__44270 = G__44288;
i__44271 = G__44289;
continue;
} else {
var vec__44276 = cljs.core.first.call(null,seq__44268__$1);
var processing_name = cljs.core.nth.call(null,vec__44276,(0),null);
var quil_name = cljs.core.nth.call(null,vec__44276,(1),null);
var temp__4657__auto___44290__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___44290__$1)){
var handler_44291 = temp__4657__auto___44290__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__44268,chunk__44269,count__44270,i__44271,handler_44291,temp__4657__auto___44290__$1,vec__44276,processing_name,quil_name,seq__44268__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_44279 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_44291.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_44279;
}});})(seq__44268,chunk__44269,count__44270,i__44271,handler_44291,temp__4657__auto___44290__$1,vec__44276,processing_name,quil_name,seq__44268__$1,temp__4657__auto__))
);
} else {
}

var G__44292 = cljs.core.next.call(null,seq__44268__$1);
var G__44293 = null;
var G__44294 = (0);
var G__44295 = (0);
seq__44268 = G__44292;
chunk__44269 = G__44293;
count__44270 = G__44294;
i__44271 = G__44295;
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
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__44296_SHARP_){
return p1__44296_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__6543__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
var args__7658__auto__ = [];
var len__7651__auto___44298 = arguments.length;
var i__7652__auto___44299 = (0);
while(true){
if((i__7652__auto___44299 < len__7651__auto___44298)){
args__7658__auto__.push((arguments[i__7652__auto___44299]));

var G__44300 = (i__7652__auto___44299 + (1));
i__7652__auto___44299 = G__44300;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__6543__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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

quil.sketch.sketch.cljs$lang$applyTo = (function (seq44297){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44297));
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
var add_elem_QMARK__44309 = quil.sketch.empty_body_QMARK_.call(null);
var seq__44305_44310 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__44306_44311 = null;
var count__44307_44312 = (0);
var i__44308_44313 = (0);
while(true){
if((i__44308_44313 < count__44307_44312)){
var sk_44314 = cljs.core._nth.call(null,chunk__44306_44311,i__44308_44313);
if(cljs.core.truth_(add_elem_QMARK__44309)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_44314));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_44314).call(null);

var G__44315 = seq__44305_44310;
var G__44316 = chunk__44306_44311;
var G__44317 = count__44307_44312;
var G__44318 = (i__44308_44313 + (1));
seq__44305_44310 = G__44315;
chunk__44306_44311 = G__44316;
count__44307_44312 = G__44317;
i__44308_44313 = G__44318;
continue;
} else {
var temp__4657__auto___44319 = cljs.core.seq.call(null,seq__44305_44310);
if(temp__4657__auto___44319){
var seq__44305_44320__$1 = temp__4657__auto___44319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44305_44320__$1)){
var c__7357__auto___44321 = cljs.core.chunk_first.call(null,seq__44305_44320__$1);
var G__44322 = cljs.core.chunk_rest.call(null,seq__44305_44320__$1);
var G__44323 = c__7357__auto___44321;
var G__44324 = cljs.core.count.call(null,c__7357__auto___44321);
var G__44325 = (0);
seq__44305_44310 = G__44322;
chunk__44306_44311 = G__44323;
count__44307_44312 = G__44324;
i__44308_44313 = G__44325;
continue;
} else {
var sk_44326 = cljs.core.first.call(null,seq__44305_44320__$1);
if(cljs.core.truth_(add_elem_QMARK__44309)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_44326));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_44326).call(null);

var G__44327 = cljs.core.next.call(null,seq__44305_44320__$1);
var G__44328 = null;
var G__44329 = (0);
var G__44330 = (0);
seq__44305_44310 = G__44327;
chunk__44306_44311 = G__44328;
count__44307_44312 = G__44329;
i__44308_44313 = G__44330;
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

//# sourceMappingURL=sketch.js.map?rel=1479783233309