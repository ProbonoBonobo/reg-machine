// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6404__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var G__30673 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__30673) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__30676 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__30676) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30682){
var vec__30683 = p__30682;
var k = cljs.core.nth.call(null,vec__30683,(0),null);
var v = cljs.core.nth.call(null,vec__30683,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6404__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__30689 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__30689,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__30689,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args30692 = [];
var len__7479__auto___31317 = arguments.length;
var i__7480__auto___31318 = (0);
while(true){
if((i__7480__auto___31318 < len__7479__auto___31317)){
args30692.push((arguments[i__7480__auto___31318]));

var G__31319 = (i__7480__auto___31318 + (1));
i__7480__auto___31318 = G__31319;
continue;
} else {
}
break;
}

var G__30696 = args30692.length;
switch (G__30696) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30692.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq30693){
var G__30694 = cljs.core.first.call(null,seq30693);
var seq30693__$1 = cljs.core.next.call(null,seq30693);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__30694,seq30693__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args30697 = [];
var len__7479__auto___31321 = arguments.length;
var i__7480__auto___31322 = (0);
while(true){
if((i__7480__auto___31322 < len__7479__auto___31321)){
args30697.push((arguments[i__7480__auto___31322]));

var G__31323 = (i__7480__auto___31322 + (1));
i__7480__auto___31322 = G__31323;
continue;
} else {
}
break;
}

var G__30701 = args30697.length;
switch (G__30701) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30697.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq30698){
var G__30699 = cljs.core.first.call(null,seq30698);
var seq30698__$1 = cljs.core.next.call(null,seq30698);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__30699,seq30698__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args30702 = [];
var len__7479__auto___31325 = arguments.length;
var i__7480__auto___31326 = (0);
while(true){
if((i__7480__auto___31326 < len__7479__auto___31325)){
args30702.push((arguments[i__7480__auto___31326]));

var G__31327 = (i__7480__auto___31326 + (1));
i__7480__auto___31326 = G__31327;
continue;
} else {
}
break;
}

var G__30706 = args30702.length;
switch (G__30706) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30702.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq30703){
var G__30704 = cljs.core.first.call(null,seq30703);
var seq30703__$1 = cljs.core.next.call(null,seq30703);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__30704,seq30703__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args30707 = [];
var len__7479__auto___31329 = arguments.length;
var i__7480__auto___31330 = (0);
while(true){
if((i__7480__auto___31330 < len__7479__auto___31329)){
args30707.push((arguments[i__7480__auto___31330]));

var G__31331 = (i__7480__auto___31330 + (1));
i__7480__auto___31330 = G__31331;
continue;
} else {
}
break;
}

var G__30711 = args30707.length;
switch (G__30711) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30707.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq30708){
var G__30709 = cljs.core.first.call(null,seq30708);
var seq30708__$1 = cljs.core.next.call(null,seq30708);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__30709,seq30708__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args30712 = [];
var len__7479__auto___31333 = arguments.length;
var i__7480__auto___31334 = (0);
while(true){
if((i__7480__auto___31334 < len__7479__auto___31333)){
args30712.push((arguments[i__7480__auto___31334]));

var G__31335 = (i__7480__auto___31334 + (1));
i__7480__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var G__30716 = args30712.length;
switch (G__30716) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30712.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq30713){
var G__30714 = cljs.core.first.call(null,seq30713);
var seq30713__$1 = cljs.core.next.call(null,seq30713);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__30714,seq30713__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args30717 = [];
var len__7479__auto___31337 = arguments.length;
var i__7480__auto___31338 = (0);
while(true){
if((i__7480__auto___31338 < len__7479__auto___31337)){
args30717.push((arguments[i__7480__auto___31338]));

var G__31339 = (i__7480__auto___31338 + (1));
i__7480__auto___31338 = G__31339;
continue;
} else {
}
break;
}

var G__30721 = args30717.length;
switch (G__30721) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30717.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq30718){
var G__30719 = cljs.core.first.call(null,seq30718);
var seq30718__$1 = cljs.core.next.call(null,seq30718);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__30719,seq30718__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args30722 = [];
var len__7479__auto___31341 = arguments.length;
var i__7480__auto___31342 = (0);
while(true){
if((i__7480__auto___31342 < len__7479__auto___31341)){
args30722.push((arguments[i__7480__auto___31342]));

var G__31343 = (i__7480__auto___31342 + (1));
i__7480__auto___31342 = G__31343;
continue;
} else {
}
break;
}

var G__30726 = args30722.length;
switch (G__30726) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30722.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq30723){
var G__30724 = cljs.core.first.call(null,seq30723);
var seq30723__$1 = cljs.core.next.call(null,seq30723);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__30724,seq30723__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args30727 = [];
var len__7479__auto___31345 = arguments.length;
var i__7480__auto___31346 = (0);
while(true){
if((i__7480__auto___31346 < len__7479__auto___31345)){
args30727.push((arguments[i__7480__auto___31346]));

var G__31347 = (i__7480__auto___31346 + (1));
i__7480__auto___31346 = G__31347;
continue;
} else {
}
break;
}

var G__30731 = args30727.length;
switch (G__30731) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30727.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq30728){
var G__30729 = cljs.core.first.call(null,seq30728);
var seq30728__$1 = cljs.core.next.call(null,seq30728);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__30729,seq30728__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args30732 = [];
var len__7479__auto___31349 = arguments.length;
var i__7480__auto___31350 = (0);
while(true){
if((i__7480__auto___31350 < len__7479__auto___31349)){
args30732.push((arguments[i__7480__auto___31350]));

var G__31351 = (i__7480__auto___31350 + (1));
i__7480__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var G__30736 = args30732.length;
switch (G__30736) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30732.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq30733){
var G__30734 = cljs.core.first.call(null,seq30733);
var seq30733__$1 = cljs.core.next.call(null,seq30733);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__30734,seq30733__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args30737 = [];
var len__7479__auto___31353 = arguments.length;
var i__7480__auto___31354 = (0);
while(true){
if((i__7480__auto___31354 < len__7479__auto___31353)){
args30737.push((arguments[i__7480__auto___31354]));

var G__31355 = (i__7480__auto___31354 + (1));
i__7480__auto___31354 = G__31355;
continue;
} else {
}
break;
}

var G__30741 = args30737.length;
switch (G__30741) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30737.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq30738){
var G__30739 = cljs.core.first.call(null,seq30738);
var seq30738__$1 = cljs.core.next.call(null,seq30738);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__30739,seq30738__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args30742 = [];
var len__7479__auto___31357 = arguments.length;
var i__7480__auto___31358 = (0);
while(true){
if((i__7480__auto___31358 < len__7479__auto___31357)){
args30742.push((arguments[i__7480__auto___31358]));

var G__31359 = (i__7480__auto___31358 + (1));
i__7480__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var G__30746 = args30742.length;
switch (G__30746) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30742.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq30743){
var G__30744 = cljs.core.first.call(null,seq30743);
var seq30743__$1 = cljs.core.next.call(null,seq30743);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__30744,seq30743__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args30747 = [];
var len__7479__auto___31361 = arguments.length;
var i__7480__auto___31362 = (0);
while(true){
if((i__7480__auto___31362 < len__7479__auto___31361)){
args30747.push((arguments[i__7480__auto___31362]));

var G__31363 = (i__7480__auto___31362 + (1));
i__7480__auto___31362 = G__31363;
continue;
} else {
}
break;
}

var G__30751 = args30747.length;
switch (G__30751) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30747.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq30748){
var G__30749 = cljs.core.first.call(null,seq30748);
var seq30748__$1 = cljs.core.next.call(null,seq30748);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__30749,seq30748__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args30752 = [];
var len__7479__auto___31365 = arguments.length;
var i__7480__auto___31366 = (0);
while(true){
if((i__7480__auto___31366 < len__7479__auto___31365)){
args30752.push((arguments[i__7480__auto___31366]));

var G__31367 = (i__7480__auto___31366 + (1));
i__7480__auto___31366 = G__31367;
continue;
} else {
}
break;
}

var G__30756 = args30752.length;
switch (G__30756) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30752.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq30753){
var G__30754 = cljs.core.first.call(null,seq30753);
var seq30753__$1 = cljs.core.next.call(null,seq30753);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__30754,seq30753__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args30757 = [];
var len__7479__auto___31369 = arguments.length;
var i__7480__auto___31370 = (0);
while(true){
if((i__7480__auto___31370 < len__7479__auto___31369)){
args30757.push((arguments[i__7480__auto___31370]));

var G__31371 = (i__7480__auto___31370 + (1));
i__7480__auto___31370 = G__31371;
continue;
} else {
}
break;
}

var G__30761 = args30757.length;
switch (G__30761) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30757.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq30758){
var G__30759 = cljs.core.first.call(null,seq30758);
var seq30758__$1 = cljs.core.next.call(null,seq30758);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__30759,seq30758__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args30762 = [];
var len__7479__auto___31373 = arguments.length;
var i__7480__auto___31374 = (0);
while(true){
if((i__7480__auto___31374 < len__7479__auto___31373)){
args30762.push((arguments[i__7480__auto___31374]));

var G__31375 = (i__7480__auto___31374 + (1));
i__7480__auto___31374 = G__31375;
continue;
} else {
}
break;
}

var G__30766 = args30762.length;
switch (G__30766) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30762.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq30763){
var G__30764 = cljs.core.first.call(null,seq30763);
var seq30763__$1 = cljs.core.next.call(null,seq30763);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__30764,seq30763__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args30767 = [];
var len__7479__auto___31377 = arguments.length;
var i__7480__auto___31378 = (0);
while(true){
if((i__7480__auto___31378 < len__7479__auto___31377)){
args30767.push((arguments[i__7480__auto___31378]));

var G__31379 = (i__7480__auto___31378 + (1));
i__7480__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var G__30771 = args30767.length;
switch (G__30771) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30767.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq30768){
var G__30769 = cljs.core.first.call(null,seq30768);
var seq30768__$1 = cljs.core.next.call(null,seq30768);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__30769,seq30768__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args30772 = [];
var len__7479__auto___31381 = arguments.length;
var i__7480__auto___31382 = (0);
while(true){
if((i__7480__auto___31382 < len__7479__auto___31381)){
args30772.push((arguments[i__7480__auto___31382]));

var G__31383 = (i__7480__auto___31382 + (1));
i__7480__auto___31382 = G__31383;
continue;
} else {
}
break;
}

var G__30776 = args30772.length;
switch (G__30776) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30772.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq30773){
var G__30774 = cljs.core.first.call(null,seq30773);
var seq30773__$1 = cljs.core.next.call(null,seq30773);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__30774,seq30773__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args30777 = [];
var len__7479__auto___31385 = arguments.length;
var i__7480__auto___31386 = (0);
while(true){
if((i__7480__auto___31386 < len__7479__auto___31385)){
args30777.push((arguments[i__7480__auto___31386]));

var G__31387 = (i__7480__auto___31386 + (1));
i__7480__auto___31386 = G__31387;
continue;
} else {
}
break;
}

var G__30781 = args30777.length;
switch (G__30781) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30777.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq30778){
var G__30779 = cljs.core.first.call(null,seq30778);
var seq30778__$1 = cljs.core.next.call(null,seq30778);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__30779,seq30778__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args30782 = [];
var len__7479__auto___31389 = arguments.length;
var i__7480__auto___31390 = (0);
while(true){
if((i__7480__auto___31390 < len__7479__auto___31389)){
args30782.push((arguments[i__7480__auto___31390]));

var G__31391 = (i__7480__auto___31390 + (1));
i__7480__auto___31390 = G__31391;
continue;
} else {
}
break;
}

var G__30786 = args30782.length;
switch (G__30786) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30782.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq30783){
var G__30784 = cljs.core.first.call(null,seq30783);
var seq30783__$1 = cljs.core.next.call(null,seq30783);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__30784,seq30783__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args30787 = [];
var len__7479__auto___31393 = arguments.length;
var i__7480__auto___31394 = (0);
while(true){
if((i__7480__auto___31394 < len__7479__auto___31393)){
args30787.push((arguments[i__7480__auto___31394]));

var G__31395 = (i__7480__auto___31394 + (1));
i__7480__auto___31394 = G__31395;
continue;
} else {
}
break;
}

var G__30791 = args30787.length;
switch (G__30791) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30787.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq30788){
var G__30789 = cljs.core.first.call(null,seq30788);
var seq30788__$1 = cljs.core.next.call(null,seq30788);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__30789,seq30788__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args30792 = [];
var len__7479__auto___31397 = arguments.length;
var i__7480__auto___31398 = (0);
while(true){
if((i__7480__auto___31398 < len__7479__auto___31397)){
args30792.push((arguments[i__7480__auto___31398]));

var G__31399 = (i__7480__auto___31398 + (1));
i__7480__auto___31398 = G__31399;
continue;
} else {
}
break;
}

var G__30796 = args30792.length;
switch (G__30796) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30792.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq30793){
var G__30794 = cljs.core.first.call(null,seq30793);
var seq30793__$1 = cljs.core.next.call(null,seq30793);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__30794,seq30793__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args30797 = [];
var len__7479__auto___31401 = arguments.length;
var i__7480__auto___31402 = (0);
while(true){
if((i__7480__auto___31402 < len__7479__auto___31401)){
args30797.push((arguments[i__7480__auto___31402]));

var G__31403 = (i__7480__auto___31402 + (1));
i__7480__auto___31402 = G__31403;
continue;
} else {
}
break;
}

var G__30801 = args30797.length;
switch (G__30801) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30797.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq30798){
var G__30799 = cljs.core.first.call(null,seq30798);
var seq30798__$1 = cljs.core.next.call(null,seq30798);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__30799,seq30798__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args30802 = [];
var len__7479__auto___31405 = arguments.length;
var i__7480__auto___31406 = (0);
while(true){
if((i__7480__auto___31406 < len__7479__auto___31405)){
args30802.push((arguments[i__7480__auto___31406]));

var G__31407 = (i__7480__auto___31406 + (1));
i__7480__auto___31406 = G__31407;
continue;
} else {
}
break;
}

var G__30806 = args30802.length;
switch (G__30806) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30802.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq30803){
var G__30804 = cljs.core.first.call(null,seq30803);
var seq30803__$1 = cljs.core.next.call(null,seq30803);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__30804,seq30803__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args30807 = [];
var len__7479__auto___31409 = arguments.length;
var i__7480__auto___31410 = (0);
while(true){
if((i__7480__auto___31410 < len__7479__auto___31409)){
args30807.push((arguments[i__7480__auto___31410]));

var G__31411 = (i__7480__auto___31410 + (1));
i__7480__auto___31410 = G__31411;
continue;
} else {
}
break;
}

var G__30811 = args30807.length;
switch (G__30811) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30807.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq30808){
var G__30809 = cljs.core.first.call(null,seq30808);
var seq30808__$1 = cljs.core.next.call(null,seq30808);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__30809,seq30808__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args30812 = [];
var len__7479__auto___31413 = arguments.length;
var i__7480__auto___31414 = (0);
while(true){
if((i__7480__auto___31414 < len__7479__auto___31413)){
args30812.push((arguments[i__7480__auto___31414]));

var G__31415 = (i__7480__auto___31414 + (1));
i__7480__auto___31414 = G__31415;
continue;
} else {
}
break;
}

var G__30816 = args30812.length;
switch (G__30816) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30812.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq30813){
var G__30814 = cljs.core.first.call(null,seq30813);
var seq30813__$1 = cljs.core.next.call(null,seq30813);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__30814,seq30813__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args30817 = [];
var len__7479__auto___31417 = arguments.length;
var i__7480__auto___31418 = (0);
while(true){
if((i__7480__auto___31418 < len__7479__auto___31417)){
args30817.push((arguments[i__7480__auto___31418]));

var G__31419 = (i__7480__auto___31418 + (1));
i__7480__auto___31418 = G__31419;
continue;
} else {
}
break;
}

var G__30821 = args30817.length;
switch (G__30821) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30817.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq30818){
var G__30819 = cljs.core.first.call(null,seq30818);
var seq30818__$1 = cljs.core.next.call(null,seq30818);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__30819,seq30818__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args30822 = [];
var len__7479__auto___31421 = arguments.length;
var i__7480__auto___31422 = (0);
while(true){
if((i__7480__auto___31422 < len__7479__auto___31421)){
args30822.push((arguments[i__7480__auto___31422]));

var G__31423 = (i__7480__auto___31422 + (1));
i__7480__auto___31422 = G__31423;
continue;
} else {
}
break;
}

var G__30826 = args30822.length;
switch (G__30826) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30822.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq30823){
var G__30824 = cljs.core.first.call(null,seq30823);
var seq30823__$1 = cljs.core.next.call(null,seq30823);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__30824,seq30823__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args30827 = [];
var len__7479__auto___31425 = arguments.length;
var i__7480__auto___31426 = (0);
while(true){
if((i__7480__auto___31426 < len__7479__auto___31425)){
args30827.push((arguments[i__7480__auto___31426]));

var G__31427 = (i__7480__auto___31426 + (1));
i__7480__auto___31426 = G__31427;
continue;
} else {
}
break;
}

var G__30831 = args30827.length;
switch (G__30831) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30827.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq30828){
var G__30829 = cljs.core.first.call(null,seq30828);
var seq30828__$1 = cljs.core.next.call(null,seq30828);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__30829,seq30828__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args30832 = [];
var len__7479__auto___31429 = arguments.length;
var i__7480__auto___31430 = (0);
while(true){
if((i__7480__auto___31430 < len__7479__auto___31429)){
args30832.push((arguments[i__7480__auto___31430]));

var G__31431 = (i__7480__auto___31430 + (1));
i__7480__auto___31430 = G__31431;
continue;
} else {
}
break;
}

var G__30836 = args30832.length;
switch (G__30836) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30832.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq30833){
var G__30834 = cljs.core.first.call(null,seq30833);
var seq30833__$1 = cljs.core.next.call(null,seq30833);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__30834,seq30833__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args30837 = [];
var len__7479__auto___31433 = arguments.length;
var i__7480__auto___31434 = (0);
while(true){
if((i__7480__auto___31434 < len__7479__auto___31433)){
args30837.push((arguments[i__7480__auto___31434]));

var G__31435 = (i__7480__auto___31434 + (1));
i__7480__auto___31434 = G__31435;
continue;
} else {
}
break;
}

var G__30841 = args30837.length;
switch (G__30841) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30837.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq30838){
var G__30839 = cljs.core.first.call(null,seq30838);
var seq30838__$1 = cljs.core.next.call(null,seq30838);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__30839,seq30838__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args30842 = [];
var len__7479__auto___31437 = arguments.length;
var i__7480__auto___31438 = (0);
while(true){
if((i__7480__auto___31438 < len__7479__auto___31437)){
args30842.push((arguments[i__7480__auto___31438]));

var G__31439 = (i__7480__auto___31438 + (1));
i__7480__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var G__30846 = args30842.length;
switch (G__30846) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30842.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq30843){
var G__30844 = cljs.core.first.call(null,seq30843);
var seq30843__$1 = cljs.core.next.call(null,seq30843);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__30844,seq30843__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args30847 = [];
var len__7479__auto___31441 = arguments.length;
var i__7480__auto___31442 = (0);
while(true){
if((i__7480__auto___31442 < len__7479__auto___31441)){
args30847.push((arguments[i__7480__auto___31442]));

var G__31443 = (i__7480__auto___31442 + (1));
i__7480__auto___31442 = G__31443;
continue;
} else {
}
break;
}

var G__30851 = args30847.length;
switch (G__30851) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30847.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq30848){
var G__30849 = cljs.core.first.call(null,seq30848);
var seq30848__$1 = cljs.core.next.call(null,seq30848);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__30849,seq30848__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args30857 = [];
var len__7479__auto___31445 = arguments.length;
var i__7480__auto___31446 = (0);
while(true){
if((i__7480__auto___31446 < len__7479__auto___31445)){
args30857.push((arguments[i__7480__auto___31446]));

var G__31447 = (i__7480__auto___31446 + (1));
i__7480__auto___31446 = G__31447;
continue;
} else {
}
break;
}

var G__30861 = args30857.length;
switch (G__30861) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30857.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq30858){
var G__30859 = cljs.core.first.call(null,seq30858);
var seq30858__$1 = cljs.core.next.call(null,seq30858);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__30859,seq30858__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args30862 = [];
var len__7479__auto___31449 = arguments.length;
var i__7480__auto___31450 = (0);
while(true){
if((i__7480__auto___31450 < len__7479__auto___31449)){
args30862.push((arguments[i__7480__auto___31450]));

var G__31451 = (i__7480__auto___31450 + (1));
i__7480__auto___31450 = G__31451;
continue;
} else {
}
break;
}

var G__30866 = args30862.length;
switch (G__30866) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30862.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq30863){
var G__30864 = cljs.core.first.call(null,seq30863);
var seq30863__$1 = cljs.core.next.call(null,seq30863);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__30864,seq30863__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args30867 = [];
var len__7479__auto___31453 = arguments.length;
var i__7480__auto___31454 = (0);
while(true){
if((i__7480__auto___31454 < len__7479__auto___31453)){
args30867.push((arguments[i__7480__auto___31454]));

var G__31455 = (i__7480__auto___31454 + (1));
i__7480__auto___31454 = G__31455;
continue;
} else {
}
break;
}

var G__30871 = args30867.length;
switch (G__30871) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30867.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq30868){
var G__30869 = cljs.core.first.call(null,seq30868);
var seq30868__$1 = cljs.core.next.call(null,seq30868);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__30869,seq30868__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args30872 = [];
var len__7479__auto___31457 = arguments.length;
var i__7480__auto___31458 = (0);
while(true){
if((i__7480__auto___31458 < len__7479__auto___31457)){
args30872.push((arguments[i__7480__auto___31458]));

var G__31459 = (i__7480__auto___31458 + (1));
i__7480__auto___31458 = G__31459;
continue;
} else {
}
break;
}

var G__30876 = args30872.length;
switch (G__30876) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30872.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq30873){
var G__30874 = cljs.core.first.call(null,seq30873);
var seq30873__$1 = cljs.core.next.call(null,seq30873);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__30874,seq30873__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args30877 = [];
var len__7479__auto___31461 = arguments.length;
var i__7480__auto___31462 = (0);
while(true){
if((i__7480__auto___31462 < len__7479__auto___31461)){
args30877.push((arguments[i__7480__auto___31462]));

var G__31463 = (i__7480__auto___31462 + (1));
i__7480__auto___31462 = G__31463;
continue;
} else {
}
break;
}

var G__30881 = args30877.length;
switch (G__30881) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30877.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq30878){
var G__30879 = cljs.core.first.call(null,seq30878);
var seq30878__$1 = cljs.core.next.call(null,seq30878);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__30879,seq30878__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args30882 = [];
var len__7479__auto___31465 = arguments.length;
var i__7480__auto___31466 = (0);
while(true){
if((i__7480__auto___31466 < len__7479__auto___31465)){
args30882.push((arguments[i__7480__auto___31466]));

var G__31467 = (i__7480__auto___31466 + (1));
i__7480__auto___31466 = G__31467;
continue;
} else {
}
break;
}

var G__30886 = args30882.length;
switch (G__30886) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30882.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq30883){
var G__30884 = cljs.core.first.call(null,seq30883);
var seq30883__$1 = cljs.core.next.call(null,seq30883);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__30884,seq30883__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args30887 = [];
var len__7479__auto___31469 = arguments.length;
var i__7480__auto___31470 = (0);
while(true){
if((i__7480__auto___31470 < len__7479__auto___31469)){
args30887.push((arguments[i__7480__auto___31470]));

var G__31471 = (i__7480__auto___31470 + (1));
i__7480__auto___31470 = G__31471;
continue;
} else {
}
break;
}

var G__30891 = args30887.length;
switch (G__30891) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30887.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq30888){
var G__30889 = cljs.core.first.call(null,seq30888);
var seq30888__$1 = cljs.core.next.call(null,seq30888);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__30889,seq30888__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args30892 = [];
var len__7479__auto___31473 = arguments.length;
var i__7480__auto___31474 = (0);
while(true){
if((i__7480__auto___31474 < len__7479__auto___31473)){
args30892.push((arguments[i__7480__auto___31474]));

var G__31475 = (i__7480__auto___31474 + (1));
i__7480__auto___31474 = G__31475;
continue;
} else {
}
break;
}

var G__30896 = args30892.length;
switch (G__30896) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30892.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq30893){
var G__30894 = cljs.core.first.call(null,seq30893);
var seq30893__$1 = cljs.core.next.call(null,seq30893);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__30894,seq30893__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args30897 = [];
var len__7479__auto___31477 = arguments.length;
var i__7480__auto___31478 = (0);
while(true){
if((i__7480__auto___31478 < len__7479__auto___31477)){
args30897.push((arguments[i__7480__auto___31478]));

var G__31479 = (i__7480__auto___31478 + (1));
i__7480__auto___31478 = G__31479;
continue;
} else {
}
break;
}

var G__30901 = args30897.length;
switch (G__30901) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30897.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq30898){
var G__30899 = cljs.core.first.call(null,seq30898);
var seq30898__$1 = cljs.core.next.call(null,seq30898);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__30899,seq30898__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args30902 = [];
var len__7479__auto___31481 = arguments.length;
var i__7480__auto___31482 = (0);
while(true){
if((i__7480__auto___31482 < len__7479__auto___31481)){
args30902.push((arguments[i__7480__auto___31482]));

var G__31483 = (i__7480__auto___31482 + (1));
i__7480__auto___31482 = G__31483;
continue;
} else {
}
break;
}

var G__30906 = args30902.length;
switch (G__30906) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30902.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq30903){
var G__30904 = cljs.core.first.call(null,seq30903);
var seq30903__$1 = cljs.core.next.call(null,seq30903);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__30904,seq30903__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args30907 = [];
var len__7479__auto___31485 = arguments.length;
var i__7480__auto___31486 = (0);
while(true){
if((i__7480__auto___31486 < len__7479__auto___31485)){
args30907.push((arguments[i__7480__auto___31486]));

var G__31487 = (i__7480__auto___31486 + (1));
i__7480__auto___31486 = G__31487;
continue;
} else {
}
break;
}

var G__30911 = args30907.length;
switch (G__30911) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30907.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq30908){
var G__30909 = cljs.core.first.call(null,seq30908);
var seq30908__$1 = cljs.core.next.call(null,seq30908);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__30909,seq30908__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args30912 = [];
var len__7479__auto___31489 = arguments.length;
var i__7480__auto___31490 = (0);
while(true){
if((i__7480__auto___31490 < len__7479__auto___31489)){
args30912.push((arguments[i__7480__auto___31490]));

var G__31491 = (i__7480__auto___31490 + (1));
i__7480__auto___31490 = G__31491;
continue;
} else {
}
break;
}

var G__30916 = args30912.length;
switch (G__30916) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30912.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq30913){
var G__30914 = cljs.core.first.call(null,seq30913);
var seq30913__$1 = cljs.core.next.call(null,seq30913);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__30914,seq30913__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args30917 = [];
var len__7479__auto___31493 = arguments.length;
var i__7480__auto___31494 = (0);
while(true){
if((i__7480__auto___31494 < len__7479__auto___31493)){
args30917.push((arguments[i__7480__auto___31494]));

var G__31495 = (i__7480__auto___31494 + (1));
i__7480__auto___31494 = G__31495;
continue;
} else {
}
break;
}

var G__30921 = args30917.length;
switch (G__30921) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30917.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq30918){
var G__30919 = cljs.core.first.call(null,seq30918);
var seq30918__$1 = cljs.core.next.call(null,seq30918);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__30919,seq30918__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args30922 = [];
var len__7479__auto___31497 = arguments.length;
var i__7480__auto___31498 = (0);
while(true){
if((i__7480__auto___31498 < len__7479__auto___31497)){
args30922.push((arguments[i__7480__auto___31498]));

var G__31499 = (i__7480__auto___31498 + (1));
i__7480__auto___31498 = G__31499;
continue;
} else {
}
break;
}

var G__30926 = args30922.length;
switch (G__30926) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30922.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq30923){
var G__30924 = cljs.core.first.call(null,seq30923);
var seq30923__$1 = cljs.core.next.call(null,seq30923);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__30924,seq30923__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args30927 = [];
var len__7479__auto___31501 = arguments.length;
var i__7480__auto___31502 = (0);
while(true){
if((i__7480__auto___31502 < len__7479__auto___31501)){
args30927.push((arguments[i__7480__auto___31502]));

var G__31503 = (i__7480__auto___31502 + (1));
i__7480__auto___31502 = G__31503;
continue;
} else {
}
break;
}

var G__30931 = args30927.length;
switch (G__30931) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30927.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq30928){
var G__30929 = cljs.core.first.call(null,seq30928);
var seq30928__$1 = cljs.core.next.call(null,seq30928);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__30929,seq30928__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args30932 = [];
var len__7479__auto___31505 = arguments.length;
var i__7480__auto___31506 = (0);
while(true){
if((i__7480__auto___31506 < len__7479__auto___31505)){
args30932.push((arguments[i__7480__auto___31506]));

var G__31507 = (i__7480__auto___31506 + (1));
i__7480__auto___31506 = G__31507;
continue;
} else {
}
break;
}

var G__30936 = args30932.length;
switch (G__30936) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30932.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq30933){
var G__30934 = cljs.core.first.call(null,seq30933);
var seq30933__$1 = cljs.core.next.call(null,seq30933);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__30934,seq30933__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args30937 = [];
var len__7479__auto___31509 = arguments.length;
var i__7480__auto___31510 = (0);
while(true){
if((i__7480__auto___31510 < len__7479__auto___31509)){
args30937.push((arguments[i__7480__auto___31510]));

var G__31511 = (i__7480__auto___31510 + (1));
i__7480__auto___31510 = G__31511;
continue;
} else {
}
break;
}

var G__30941 = args30937.length;
switch (G__30941) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30937.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq30938){
var G__30939 = cljs.core.first.call(null,seq30938);
var seq30938__$1 = cljs.core.next.call(null,seq30938);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__30939,seq30938__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args30942 = [];
var len__7479__auto___31513 = arguments.length;
var i__7480__auto___31514 = (0);
while(true){
if((i__7480__auto___31514 < len__7479__auto___31513)){
args30942.push((arguments[i__7480__auto___31514]));

var G__31515 = (i__7480__auto___31514 + (1));
i__7480__auto___31514 = G__31515;
continue;
} else {
}
break;
}

var G__30946 = args30942.length;
switch (G__30946) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30942.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq30943){
var G__30944 = cljs.core.first.call(null,seq30943);
var seq30943__$1 = cljs.core.next.call(null,seq30943);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__30944,seq30943__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args30947 = [];
var len__7479__auto___31517 = arguments.length;
var i__7480__auto___31518 = (0);
while(true){
if((i__7480__auto___31518 < len__7479__auto___31517)){
args30947.push((arguments[i__7480__auto___31518]));

var G__31519 = (i__7480__auto___31518 + (1));
i__7480__auto___31518 = G__31519;
continue;
} else {
}
break;
}

var G__30951 = args30947.length;
switch (G__30951) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30947.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq30948){
var G__30949 = cljs.core.first.call(null,seq30948);
var seq30948__$1 = cljs.core.next.call(null,seq30948);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__30949,seq30948__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args30952 = [];
var len__7479__auto___31521 = arguments.length;
var i__7480__auto___31522 = (0);
while(true){
if((i__7480__auto___31522 < len__7479__auto___31521)){
args30952.push((arguments[i__7480__auto___31522]));

var G__31523 = (i__7480__auto___31522 + (1));
i__7480__auto___31522 = G__31523;
continue;
} else {
}
break;
}

var G__30956 = args30952.length;
switch (G__30956) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30952.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq30953){
var G__30954 = cljs.core.first.call(null,seq30953);
var seq30953__$1 = cljs.core.next.call(null,seq30953);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__30954,seq30953__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args30957 = [];
var len__7479__auto___31525 = arguments.length;
var i__7480__auto___31526 = (0);
while(true){
if((i__7480__auto___31526 < len__7479__auto___31525)){
args30957.push((arguments[i__7480__auto___31526]));

var G__31527 = (i__7480__auto___31526 + (1));
i__7480__auto___31526 = G__31527;
continue;
} else {
}
break;
}

var G__30961 = args30957.length;
switch (G__30961) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30957.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq30958){
var G__30959 = cljs.core.first.call(null,seq30958);
var seq30958__$1 = cljs.core.next.call(null,seq30958);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__30959,seq30958__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args30962 = [];
var len__7479__auto___31529 = arguments.length;
var i__7480__auto___31530 = (0);
while(true){
if((i__7480__auto___31530 < len__7479__auto___31529)){
args30962.push((arguments[i__7480__auto___31530]));

var G__31531 = (i__7480__auto___31530 + (1));
i__7480__auto___31530 = G__31531;
continue;
} else {
}
break;
}

var G__30966 = args30962.length;
switch (G__30966) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30962.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq30963){
var G__30964 = cljs.core.first.call(null,seq30963);
var seq30963__$1 = cljs.core.next.call(null,seq30963);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__30964,seq30963__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args30967 = [];
var len__7479__auto___31533 = arguments.length;
var i__7480__auto___31534 = (0);
while(true){
if((i__7480__auto___31534 < len__7479__auto___31533)){
args30967.push((arguments[i__7480__auto___31534]));

var G__31535 = (i__7480__auto___31534 + (1));
i__7480__auto___31534 = G__31535;
continue;
} else {
}
break;
}

var G__30971 = args30967.length;
switch (G__30971) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30967.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq30968){
var G__30969 = cljs.core.first.call(null,seq30968);
var seq30968__$1 = cljs.core.next.call(null,seq30968);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__30969,seq30968__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args30972 = [];
var len__7479__auto___31537 = arguments.length;
var i__7480__auto___31538 = (0);
while(true){
if((i__7480__auto___31538 < len__7479__auto___31537)){
args30972.push((arguments[i__7480__auto___31538]));

var G__31539 = (i__7480__auto___31538 + (1));
i__7480__auto___31538 = G__31539;
continue;
} else {
}
break;
}

var G__30976 = args30972.length;
switch (G__30976) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30972.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq30973){
var G__30974 = cljs.core.first.call(null,seq30973);
var seq30973__$1 = cljs.core.next.call(null,seq30973);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__30974,seq30973__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args30977 = [];
var len__7479__auto___31541 = arguments.length;
var i__7480__auto___31542 = (0);
while(true){
if((i__7480__auto___31542 < len__7479__auto___31541)){
args30977.push((arguments[i__7480__auto___31542]));

var G__31543 = (i__7480__auto___31542 + (1));
i__7480__auto___31542 = G__31543;
continue;
} else {
}
break;
}

var G__30981 = args30977.length;
switch (G__30981) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30977.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq30978){
var G__30979 = cljs.core.first.call(null,seq30978);
var seq30978__$1 = cljs.core.next.call(null,seq30978);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__30979,seq30978__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args30982 = [];
var len__7479__auto___31545 = arguments.length;
var i__7480__auto___31546 = (0);
while(true){
if((i__7480__auto___31546 < len__7479__auto___31545)){
args30982.push((arguments[i__7480__auto___31546]));

var G__31547 = (i__7480__auto___31546 + (1));
i__7480__auto___31546 = G__31547;
continue;
} else {
}
break;
}

var G__30986 = args30982.length;
switch (G__30986) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30982.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq30983){
var G__30984 = cljs.core.first.call(null,seq30983);
var seq30983__$1 = cljs.core.next.call(null,seq30983);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__30984,seq30983__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args30987 = [];
var len__7479__auto___31549 = arguments.length;
var i__7480__auto___31550 = (0);
while(true){
if((i__7480__auto___31550 < len__7479__auto___31549)){
args30987.push((arguments[i__7480__auto___31550]));

var G__31551 = (i__7480__auto___31550 + (1));
i__7480__auto___31550 = G__31551;
continue;
} else {
}
break;
}

var G__30991 = args30987.length;
switch (G__30991) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30987.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq30988){
var G__30989 = cljs.core.first.call(null,seq30988);
var seq30988__$1 = cljs.core.next.call(null,seq30988);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__30989,seq30988__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args30992 = [];
var len__7479__auto___31553 = arguments.length;
var i__7480__auto___31554 = (0);
while(true){
if((i__7480__auto___31554 < len__7479__auto___31553)){
args30992.push((arguments[i__7480__auto___31554]));

var G__31555 = (i__7480__auto___31554 + (1));
i__7480__auto___31554 = G__31555;
continue;
} else {
}
break;
}

var G__30996 = args30992.length;
switch (G__30996) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30992.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq30993){
var G__30994 = cljs.core.first.call(null,seq30993);
var seq30993__$1 = cljs.core.next.call(null,seq30993);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__30994,seq30993__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args30997 = [];
var len__7479__auto___31557 = arguments.length;
var i__7480__auto___31558 = (0);
while(true){
if((i__7480__auto___31558 < len__7479__auto___31557)){
args30997.push((arguments[i__7480__auto___31558]));

var G__31559 = (i__7480__auto___31558 + (1));
i__7480__auto___31558 = G__31559;
continue;
} else {
}
break;
}

var G__31001 = args30997.length;
switch (G__31001) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30997.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq30998){
var G__30999 = cljs.core.first.call(null,seq30998);
var seq30998__$1 = cljs.core.next.call(null,seq30998);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__30999,seq30998__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args31002 = [];
var len__7479__auto___31561 = arguments.length;
var i__7480__auto___31562 = (0);
while(true){
if((i__7480__auto___31562 < len__7479__auto___31561)){
args31002.push((arguments[i__7480__auto___31562]));

var G__31563 = (i__7480__auto___31562 + (1));
i__7480__auto___31562 = G__31563;
continue;
} else {
}
break;
}

var G__31006 = args31002.length;
switch (G__31006) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31002.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq31003){
var G__31004 = cljs.core.first.call(null,seq31003);
var seq31003__$1 = cljs.core.next.call(null,seq31003);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__31004,seq31003__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args31007 = [];
var len__7479__auto___31565 = arguments.length;
var i__7480__auto___31566 = (0);
while(true){
if((i__7480__auto___31566 < len__7479__auto___31565)){
args31007.push((arguments[i__7480__auto___31566]));

var G__31567 = (i__7480__auto___31566 + (1));
i__7480__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var G__31011 = args31007.length;
switch (G__31011) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31007.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq31008){
var G__31009 = cljs.core.first.call(null,seq31008);
var seq31008__$1 = cljs.core.next.call(null,seq31008);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__31009,seq31008__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args31012 = [];
var len__7479__auto___31569 = arguments.length;
var i__7480__auto___31570 = (0);
while(true){
if((i__7480__auto___31570 < len__7479__auto___31569)){
args31012.push((arguments[i__7480__auto___31570]));

var G__31571 = (i__7480__auto___31570 + (1));
i__7480__auto___31570 = G__31571;
continue;
} else {
}
break;
}

var G__31016 = args31012.length;
switch (G__31016) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31012.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq31013){
var G__31014 = cljs.core.first.call(null,seq31013);
var seq31013__$1 = cljs.core.next.call(null,seq31013);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__31014,seq31013__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args31017 = [];
var len__7479__auto___31573 = arguments.length;
var i__7480__auto___31574 = (0);
while(true){
if((i__7480__auto___31574 < len__7479__auto___31573)){
args31017.push((arguments[i__7480__auto___31574]));

var G__31575 = (i__7480__auto___31574 + (1));
i__7480__auto___31574 = G__31575;
continue;
} else {
}
break;
}

var G__31021 = args31017.length;
switch (G__31021) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31017.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq31018){
var G__31019 = cljs.core.first.call(null,seq31018);
var seq31018__$1 = cljs.core.next.call(null,seq31018);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__31019,seq31018__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args31022 = [];
var len__7479__auto___31577 = arguments.length;
var i__7480__auto___31578 = (0);
while(true){
if((i__7480__auto___31578 < len__7479__auto___31577)){
args31022.push((arguments[i__7480__auto___31578]));

var G__31579 = (i__7480__auto___31578 + (1));
i__7480__auto___31578 = G__31579;
continue;
} else {
}
break;
}

var G__31026 = args31022.length;
switch (G__31026) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31022.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq31023){
var G__31024 = cljs.core.first.call(null,seq31023);
var seq31023__$1 = cljs.core.next.call(null,seq31023);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__31024,seq31023__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args31027 = [];
var len__7479__auto___31581 = arguments.length;
var i__7480__auto___31582 = (0);
while(true){
if((i__7480__auto___31582 < len__7479__auto___31581)){
args31027.push((arguments[i__7480__auto___31582]));

var G__31583 = (i__7480__auto___31582 + (1));
i__7480__auto___31582 = G__31583;
continue;
} else {
}
break;
}

var G__31031 = args31027.length;
switch (G__31031) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31027.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq31028){
var G__31029 = cljs.core.first.call(null,seq31028);
var seq31028__$1 = cljs.core.next.call(null,seq31028);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__31029,seq31028__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args31032 = [];
var len__7479__auto___31585 = arguments.length;
var i__7480__auto___31586 = (0);
while(true){
if((i__7480__auto___31586 < len__7479__auto___31585)){
args31032.push((arguments[i__7480__auto___31586]));

var G__31587 = (i__7480__auto___31586 + (1));
i__7480__auto___31586 = G__31587;
continue;
} else {
}
break;
}

var G__31036 = args31032.length;
switch (G__31036) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31032.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq31033){
var G__31034 = cljs.core.first.call(null,seq31033);
var seq31033__$1 = cljs.core.next.call(null,seq31033);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__31034,seq31033__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args31037 = [];
var len__7479__auto___31589 = arguments.length;
var i__7480__auto___31590 = (0);
while(true){
if((i__7480__auto___31590 < len__7479__auto___31589)){
args31037.push((arguments[i__7480__auto___31590]));

var G__31591 = (i__7480__auto___31590 + (1));
i__7480__auto___31590 = G__31591;
continue;
} else {
}
break;
}

var G__31041 = args31037.length;
switch (G__31041) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31037.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq31038){
var G__31039 = cljs.core.first.call(null,seq31038);
var seq31038__$1 = cljs.core.next.call(null,seq31038);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__31039,seq31038__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args31042 = [];
var len__7479__auto___31593 = arguments.length;
var i__7480__auto___31594 = (0);
while(true){
if((i__7480__auto___31594 < len__7479__auto___31593)){
args31042.push((arguments[i__7480__auto___31594]));

var G__31595 = (i__7480__auto___31594 + (1));
i__7480__auto___31594 = G__31595;
continue;
} else {
}
break;
}

var G__31046 = args31042.length;
switch (G__31046) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31042.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq31043){
var G__31044 = cljs.core.first.call(null,seq31043);
var seq31043__$1 = cljs.core.next.call(null,seq31043);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__31044,seq31043__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args31047 = [];
var len__7479__auto___31597 = arguments.length;
var i__7480__auto___31598 = (0);
while(true){
if((i__7480__auto___31598 < len__7479__auto___31597)){
args31047.push((arguments[i__7480__auto___31598]));

var G__31599 = (i__7480__auto___31598 + (1));
i__7480__auto___31598 = G__31599;
continue;
} else {
}
break;
}

var G__31051 = args31047.length;
switch (G__31051) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31047.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq31048){
var G__31049 = cljs.core.first.call(null,seq31048);
var seq31048__$1 = cljs.core.next.call(null,seq31048);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__31049,seq31048__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args31052 = [];
var len__7479__auto___31601 = arguments.length;
var i__7480__auto___31602 = (0);
while(true){
if((i__7480__auto___31602 < len__7479__auto___31601)){
args31052.push((arguments[i__7480__auto___31602]));

var G__31603 = (i__7480__auto___31602 + (1));
i__7480__auto___31602 = G__31603;
continue;
} else {
}
break;
}

var G__31056 = args31052.length;
switch (G__31056) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31052.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq31053){
var G__31054 = cljs.core.first.call(null,seq31053);
var seq31053__$1 = cljs.core.next.call(null,seq31053);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__31054,seq31053__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args31057 = [];
var len__7479__auto___31605 = arguments.length;
var i__7480__auto___31606 = (0);
while(true){
if((i__7480__auto___31606 < len__7479__auto___31605)){
args31057.push((arguments[i__7480__auto___31606]));

var G__31607 = (i__7480__auto___31606 + (1));
i__7480__auto___31606 = G__31607;
continue;
} else {
}
break;
}

var G__31061 = args31057.length;
switch (G__31061) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31057.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq31058){
var G__31059 = cljs.core.first.call(null,seq31058);
var seq31058__$1 = cljs.core.next.call(null,seq31058);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__31059,seq31058__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args31062 = [];
var len__7479__auto___31609 = arguments.length;
var i__7480__auto___31610 = (0);
while(true){
if((i__7480__auto___31610 < len__7479__auto___31609)){
args31062.push((arguments[i__7480__auto___31610]));

var G__31611 = (i__7480__auto___31610 + (1));
i__7480__auto___31610 = G__31611;
continue;
} else {
}
break;
}

var G__31066 = args31062.length;
switch (G__31066) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31062.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq31063){
var G__31064 = cljs.core.first.call(null,seq31063);
var seq31063__$1 = cljs.core.next.call(null,seq31063);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__31064,seq31063__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args31067 = [];
var len__7479__auto___31613 = arguments.length;
var i__7480__auto___31614 = (0);
while(true){
if((i__7480__auto___31614 < len__7479__auto___31613)){
args31067.push((arguments[i__7480__auto___31614]));

var G__31615 = (i__7480__auto___31614 + (1));
i__7480__auto___31614 = G__31615;
continue;
} else {
}
break;
}

var G__31071 = args31067.length;
switch (G__31071) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31067.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq31068){
var G__31069 = cljs.core.first.call(null,seq31068);
var seq31068__$1 = cljs.core.next.call(null,seq31068);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__31069,seq31068__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args31072 = [];
var len__7479__auto___31617 = arguments.length;
var i__7480__auto___31618 = (0);
while(true){
if((i__7480__auto___31618 < len__7479__auto___31617)){
args31072.push((arguments[i__7480__auto___31618]));

var G__31619 = (i__7480__auto___31618 + (1));
i__7480__auto___31618 = G__31619;
continue;
} else {
}
break;
}

var G__31076 = args31072.length;
switch (G__31076) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31072.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq31073){
var G__31074 = cljs.core.first.call(null,seq31073);
var seq31073__$1 = cljs.core.next.call(null,seq31073);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__31074,seq31073__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args31077 = [];
var len__7479__auto___31621 = arguments.length;
var i__7480__auto___31622 = (0);
while(true){
if((i__7480__auto___31622 < len__7479__auto___31621)){
args31077.push((arguments[i__7480__auto___31622]));

var G__31623 = (i__7480__auto___31622 + (1));
i__7480__auto___31622 = G__31623;
continue;
} else {
}
break;
}

var G__31081 = args31077.length;
switch (G__31081) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31077.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq31078){
var G__31079 = cljs.core.first.call(null,seq31078);
var seq31078__$1 = cljs.core.next.call(null,seq31078);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__31079,seq31078__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args31082 = [];
var len__7479__auto___31625 = arguments.length;
var i__7480__auto___31626 = (0);
while(true){
if((i__7480__auto___31626 < len__7479__auto___31625)){
args31082.push((arguments[i__7480__auto___31626]));

var G__31627 = (i__7480__auto___31626 + (1));
i__7480__auto___31626 = G__31627;
continue;
} else {
}
break;
}

var G__31086 = args31082.length;
switch (G__31086) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31082.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq31083){
var G__31084 = cljs.core.first.call(null,seq31083);
var seq31083__$1 = cljs.core.next.call(null,seq31083);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__31084,seq31083__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args31087 = [];
var len__7479__auto___31629 = arguments.length;
var i__7480__auto___31630 = (0);
while(true){
if((i__7480__auto___31630 < len__7479__auto___31629)){
args31087.push((arguments[i__7480__auto___31630]));

var G__31631 = (i__7480__auto___31630 + (1));
i__7480__auto___31630 = G__31631;
continue;
} else {
}
break;
}

var G__31091 = args31087.length;
switch (G__31091) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31087.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq31088){
var G__31089 = cljs.core.first.call(null,seq31088);
var seq31088__$1 = cljs.core.next.call(null,seq31088);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__31089,seq31088__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args31092 = [];
var len__7479__auto___31633 = arguments.length;
var i__7480__auto___31634 = (0);
while(true){
if((i__7480__auto___31634 < len__7479__auto___31633)){
args31092.push((arguments[i__7480__auto___31634]));

var G__31635 = (i__7480__auto___31634 + (1));
i__7480__auto___31634 = G__31635;
continue;
} else {
}
break;
}

var G__31096 = args31092.length;
switch (G__31096) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31092.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq31093){
var G__31094 = cljs.core.first.call(null,seq31093);
var seq31093__$1 = cljs.core.next.call(null,seq31093);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__31094,seq31093__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args31097 = [];
var len__7479__auto___31637 = arguments.length;
var i__7480__auto___31638 = (0);
while(true){
if((i__7480__auto___31638 < len__7479__auto___31637)){
args31097.push((arguments[i__7480__auto___31638]));

var G__31639 = (i__7480__auto___31638 + (1));
i__7480__auto___31638 = G__31639;
continue;
} else {
}
break;
}

var G__31101 = args31097.length;
switch (G__31101) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31097.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq31098){
var G__31099 = cljs.core.first.call(null,seq31098);
var seq31098__$1 = cljs.core.next.call(null,seq31098);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__31099,seq31098__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args31102 = [];
var len__7479__auto___31641 = arguments.length;
var i__7480__auto___31642 = (0);
while(true){
if((i__7480__auto___31642 < len__7479__auto___31641)){
args31102.push((arguments[i__7480__auto___31642]));

var G__31643 = (i__7480__auto___31642 + (1));
i__7480__auto___31642 = G__31643;
continue;
} else {
}
break;
}

var G__31106 = args31102.length;
switch (G__31106) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31102.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq31103){
var G__31104 = cljs.core.first.call(null,seq31103);
var seq31103__$1 = cljs.core.next.call(null,seq31103);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__31104,seq31103__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args31107 = [];
var len__7479__auto___31645 = arguments.length;
var i__7480__auto___31646 = (0);
while(true){
if((i__7480__auto___31646 < len__7479__auto___31645)){
args31107.push((arguments[i__7480__auto___31646]));

var G__31647 = (i__7480__auto___31646 + (1));
i__7480__auto___31646 = G__31647;
continue;
} else {
}
break;
}

var G__31111 = args31107.length;
switch (G__31111) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31107.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq31108){
var G__31109 = cljs.core.first.call(null,seq31108);
var seq31108__$1 = cljs.core.next.call(null,seq31108);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__31109,seq31108__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args31112 = [];
var len__7479__auto___31649 = arguments.length;
var i__7480__auto___31650 = (0);
while(true){
if((i__7480__auto___31650 < len__7479__auto___31649)){
args31112.push((arguments[i__7480__auto___31650]));

var G__31651 = (i__7480__auto___31650 + (1));
i__7480__auto___31650 = G__31651;
continue;
} else {
}
break;
}

var G__31116 = args31112.length;
switch (G__31116) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31112.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq31113){
var G__31114 = cljs.core.first.call(null,seq31113);
var seq31113__$1 = cljs.core.next.call(null,seq31113);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__31114,seq31113__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args31117 = [];
var len__7479__auto___31653 = arguments.length;
var i__7480__auto___31654 = (0);
while(true){
if((i__7480__auto___31654 < len__7479__auto___31653)){
args31117.push((arguments[i__7480__auto___31654]));

var G__31655 = (i__7480__auto___31654 + (1));
i__7480__auto___31654 = G__31655;
continue;
} else {
}
break;
}

var G__31121 = args31117.length;
switch (G__31121) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31117.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq31118){
var G__31119 = cljs.core.first.call(null,seq31118);
var seq31118__$1 = cljs.core.next.call(null,seq31118);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__31119,seq31118__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args31122 = [];
var len__7479__auto___31657 = arguments.length;
var i__7480__auto___31658 = (0);
while(true){
if((i__7480__auto___31658 < len__7479__auto___31657)){
args31122.push((arguments[i__7480__auto___31658]));

var G__31659 = (i__7480__auto___31658 + (1));
i__7480__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var G__31126 = args31122.length;
switch (G__31126) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31122.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq31123){
var G__31124 = cljs.core.first.call(null,seq31123);
var seq31123__$1 = cljs.core.next.call(null,seq31123);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__31124,seq31123__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args31127 = [];
var len__7479__auto___31661 = arguments.length;
var i__7480__auto___31662 = (0);
while(true){
if((i__7480__auto___31662 < len__7479__auto___31661)){
args31127.push((arguments[i__7480__auto___31662]));

var G__31663 = (i__7480__auto___31662 + (1));
i__7480__auto___31662 = G__31663;
continue;
} else {
}
break;
}

var G__31131 = args31127.length;
switch (G__31131) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31127.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq31128){
var G__31129 = cljs.core.first.call(null,seq31128);
var seq31128__$1 = cljs.core.next.call(null,seq31128);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__31129,seq31128__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args31132 = [];
var len__7479__auto___31665 = arguments.length;
var i__7480__auto___31666 = (0);
while(true){
if((i__7480__auto___31666 < len__7479__auto___31665)){
args31132.push((arguments[i__7480__auto___31666]));

var G__31667 = (i__7480__auto___31666 + (1));
i__7480__auto___31666 = G__31667;
continue;
} else {
}
break;
}

var G__31136 = args31132.length;
switch (G__31136) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31132.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq31133){
var G__31134 = cljs.core.first.call(null,seq31133);
var seq31133__$1 = cljs.core.next.call(null,seq31133);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__31134,seq31133__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args31137 = [];
var len__7479__auto___31669 = arguments.length;
var i__7480__auto___31670 = (0);
while(true){
if((i__7480__auto___31670 < len__7479__auto___31669)){
args31137.push((arguments[i__7480__auto___31670]));

var G__31671 = (i__7480__auto___31670 + (1));
i__7480__auto___31670 = G__31671;
continue;
} else {
}
break;
}

var G__31141 = args31137.length;
switch (G__31141) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31137.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq31138){
var G__31139 = cljs.core.first.call(null,seq31138);
var seq31138__$1 = cljs.core.next.call(null,seq31138);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__31139,seq31138__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args31142 = [];
var len__7479__auto___31673 = arguments.length;
var i__7480__auto___31674 = (0);
while(true){
if((i__7480__auto___31674 < len__7479__auto___31673)){
args31142.push((arguments[i__7480__auto___31674]));

var G__31675 = (i__7480__auto___31674 + (1));
i__7480__auto___31674 = G__31675;
continue;
} else {
}
break;
}

var G__31146 = args31142.length;
switch (G__31146) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31142.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq31143){
var G__31144 = cljs.core.first.call(null,seq31143);
var seq31143__$1 = cljs.core.next.call(null,seq31143);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__31144,seq31143__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args31147 = [];
var len__7479__auto___31677 = arguments.length;
var i__7480__auto___31678 = (0);
while(true){
if((i__7480__auto___31678 < len__7479__auto___31677)){
args31147.push((arguments[i__7480__auto___31678]));

var G__31679 = (i__7480__auto___31678 + (1));
i__7480__auto___31678 = G__31679;
continue;
} else {
}
break;
}

var G__31151 = args31147.length;
switch (G__31151) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31147.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq31148){
var G__31149 = cljs.core.first.call(null,seq31148);
var seq31148__$1 = cljs.core.next.call(null,seq31148);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__31149,seq31148__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args31152 = [];
var len__7479__auto___31681 = arguments.length;
var i__7480__auto___31682 = (0);
while(true){
if((i__7480__auto___31682 < len__7479__auto___31681)){
args31152.push((arguments[i__7480__auto___31682]));

var G__31683 = (i__7480__auto___31682 + (1));
i__7480__auto___31682 = G__31683;
continue;
} else {
}
break;
}

var G__31156 = args31152.length;
switch (G__31156) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31152.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq31153){
var G__31154 = cljs.core.first.call(null,seq31153);
var seq31153__$1 = cljs.core.next.call(null,seq31153);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__31154,seq31153__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args31157 = [];
var len__7479__auto___31685 = arguments.length;
var i__7480__auto___31686 = (0);
while(true){
if((i__7480__auto___31686 < len__7479__auto___31685)){
args31157.push((arguments[i__7480__auto___31686]));

var G__31687 = (i__7480__auto___31686 + (1));
i__7480__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var G__31161 = args31157.length;
switch (G__31161) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31157.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq31158){
var G__31159 = cljs.core.first.call(null,seq31158);
var seq31158__$1 = cljs.core.next.call(null,seq31158);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__31159,seq31158__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args31162 = [];
var len__7479__auto___31689 = arguments.length;
var i__7480__auto___31690 = (0);
while(true){
if((i__7480__auto___31690 < len__7479__auto___31689)){
args31162.push((arguments[i__7480__auto___31690]));

var G__31691 = (i__7480__auto___31690 + (1));
i__7480__auto___31690 = G__31691;
continue;
} else {
}
break;
}

var G__31166 = args31162.length;
switch (G__31166) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31162.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq31163){
var G__31164 = cljs.core.first.call(null,seq31163);
var seq31163__$1 = cljs.core.next.call(null,seq31163);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__31164,seq31163__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args31167 = [];
var len__7479__auto___31693 = arguments.length;
var i__7480__auto___31694 = (0);
while(true){
if((i__7480__auto___31694 < len__7479__auto___31693)){
args31167.push((arguments[i__7480__auto___31694]));

var G__31695 = (i__7480__auto___31694 + (1));
i__7480__auto___31694 = G__31695;
continue;
} else {
}
break;
}

var G__31171 = args31167.length;
switch (G__31171) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31167.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq31168){
var G__31169 = cljs.core.first.call(null,seq31168);
var seq31168__$1 = cljs.core.next.call(null,seq31168);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__31169,seq31168__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args31172 = [];
var len__7479__auto___31697 = arguments.length;
var i__7480__auto___31698 = (0);
while(true){
if((i__7480__auto___31698 < len__7479__auto___31697)){
args31172.push((arguments[i__7480__auto___31698]));

var G__31699 = (i__7480__auto___31698 + (1));
i__7480__auto___31698 = G__31699;
continue;
} else {
}
break;
}

var G__31176 = args31172.length;
switch (G__31176) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31172.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq31173){
var G__31174 = cljs.core.first.call(null,seq31173);
var seq31173__$1 = cljs.core.next.call(null,seq31173);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__31174,seq31173__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args31177 = [];
var len__7479__auto___31701 = arguments.length;
var i__7480__auto___31702 = (0);
while(true){
if((i__7480__auto___31702 < len__7479__auto___31701)){
args31177.push((arguments[i__7480__auto___31702]));

var G__31703 = (i__7480__auto___31702 + (1));
i__7480__auto___31702 = G__31703;
continue;
} else {
}
break;
}

var G__31181 = args31177.length;
switch (G__31181) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31177.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq31178){
var G__31179 = cljs.core.first.call(null,seq31178);
var seq31178__$1 = cljs.core.next.call(null,seq31178);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__31179,seq31178__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args31182 = [];
var len__7479__auto___31705 = arguments.length;
var i__7480__auto___31706 = (0);
while(true){
if((i__7480__auto___31706 < len__7479__auto___31705)){
args31182.push((arguments[i__7480__auto___31706]));

var G__31707 = (i__7480__auto___31706 + (1));
i__7480__auto___31706 = G__31707;
continue;
} else {
}
break;
}

var G__31186 = args31182.length;
switch (G__31186) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31182.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq31183){
var G__31184 = cljs.core.first.call(null,seq31183);
var seq31183__$1 = cljs.core.next.call(null,seq31183);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__31184,seq31183__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args31187 = [];
var len__7479__auto___31709 = arguments.length;
var i__7480__auto___31710 = (0);
while(true){
if((i__7480__auto___31710 < len__7479__auto___31709)){
args31187.push((arguments[i__7480__auto___31710]));

var G__31711 = (i__7480__auto___31710 + (1));
i__7480__auto___31710 = G__31711;
continue;
} else {
}
break;
}

var G__31191 = args31187.length;
switch (G__31191) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31187.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq31188){
var G__31189 = cljs.core.first.call(null,seq31188);
var seq31188__$1 = cljs.core.next.call(null,seq31188);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__31189,seq31188__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args31192 = [];
var len__7479__auto___31713 = arguments.length;
var i__7480__auto___31714 = (0);
while(true){
if((i__7480__auto___31714 < len__7479__auto___31713)){
args31192.push((arguments[i__7480__auto___31714]));

var G__31715 = (i__7480__auto___31714 + (1));
i__7480__auto___31714 = G__31715;
continue;
} else {
}
break;
}

var G__31196 = args31192.length;
switch (G__31196) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31192.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq31193){
var G__31194 = cljs.core.first.call(null,seq31193);
var seq31193__$1 = cljs.core.next.call(null,seq31193);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__31194,seq31193__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args31197 = [];
var len__7479__auto___31717 = arguments.length;
var i__7480__auto___31718 = (0);
while(true){
if((i__7480__auto___31718 < len__7479__auto___31717)){
args31197.push((arguments[i__7480__auto___31718]));

var G__31719 = (i__7480__auto___31718 + (1));
i__7480__auto___31718 = G__31719;
continue;
} else {
}
break;
}

var G__31201 = args31197.length;
switch (G__31201) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31197.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq31198){
var G__31199 = cljs.core.first.call(null,seq31198);
var seq31198__$1 = cljs.core.next.call(null,seq31198);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__31199,seq31198__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args31202 = [];
var len__7479__auto___31721 = arguments.length;
var i__7480__auto___31722 = (0);
while(true){
if((i__7480__auto___31722 < len__7479__auto___31721)){
args31202.push((arguments[i__7480__auto___31722]));

var G__31723 = (i__7480__auto___31722 + (1));
i__7480__auto___31722 = G__31723;
continue;
} else {
}
break;
}

var G__31206 = args31202.length;
switch (G__31206) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31202.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq31203){
var G__31204 = cljs.core.first.call(null,seq31203);
var seq31203__$1 = cljs.core.next.call(null,seq31203);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__31204,seq31203__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args31207 = [];
var len__7479__auto___31725 = arguments.length;
var i__7480__auto___31726 = (0);
while(true){
if((i__7480__auto___31726 < len__7479__auto___31725)){
args31207.push((arguments[i__7480__auto___31726]));

var G__31727 = (i__7480__auto___31726 + (1));
i__7480__auto___31726 = G__31727;
continue;
} else {
}
break;
}

var G__31211 = args31207.length;
switch (G__31211) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31207.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq31208){
var G__31209 = cljs.core.first.call(null,seq31208);
var seq31208__$1 = cljs.core.next.call(null,seq31208);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__31209,seq31208__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args31212 = [];
var len__7479__auto___31729 = arguments.length;
var i__7480__auto___31730 = (0);
while(true){
if((i__7480__auto___31730 < len__7479__auto___31729)){
args31212.push((arguments[i__7480__auto___31730]));

var G__31731 = (i__7480__auto___31730 + (1));
i__7480__auto___31730 = G__31731;
continue;
} else {
}
break;
}

var G__31216 = args31212.length;
switch (G__31216) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31212.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq31213){
var G__31214 = cljs.core.first.call(null,seq31213);
var seq31213__$1 = cljs.core.next.call(null,seq31213);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__31214,seq31213__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args31217 = [];
var len__7479__auto___31733 = arguments.length;
var i__7480__auto___31734 = (0);
while(true){
if((i__7480__auto___31734 < len__7479__auto___31733)){
args31217.push((arguments[i__7480__auto___31734]));

var G__31735 = (i__7480__auto___31734 + (1));
i__7480__auto___31734 = G__31735;
continue;
} else {
}
break;
}

var G__31221 = args31217.length;
switch (G__31221) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31217.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq31218){
var G__31219 = cljs.core.first.call(null,seq31218);
var seq31218__$1 = cljs.core.next.call(null,seq31218);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__31219,seq31218__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args31222 = [];
var len__7479__auto___31737 = arguments.length;
var i__7480__auto___31738 = (0);
while(true){
if((i__7480__auto___31738 < len__7479__auto___31737)){
args31222.push((arguments[i__7480__auto___31738]));

var G__31739 = (i__7480__auto___31738 + (1));
i__7480__auto___31738 = G__31739;
continue;
} else {
}
break;
}

var G__31226 = args31222.length;
switch (G__31226) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31222.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq31223){
var G__31224 = cljs.core.first.call(null,seq31223);
var seq31223__$1 = cljs.core.next.call(null,seq31223);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__31224,seq31223__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args31227 = [];
var len__7479__auto___31741 = arguments.length;
var i__7480__auto___31742 = (0);
while(true){
if((i__7480__auto___31742 < len__7479__auto___31741)){
args31227.push((arguments[i__7480__auto___31742]));

var G__31743 = (i__7480__auto___31742 + (1));
i__7480__auto___31742 = G__31743;
continue;
} else {
}
break;
}

var G__31231 = args31227.length;
switch (G__31231) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31227.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq31228){
var G__31229 = cljs.core.first.call(null,seq31228);
var seq31228__$1 = cljs.core.next.call(null,seq31228);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__31229,seq31228__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args31232 = [];
var len__7479__auto___31745 = arguments.length;
var i__7480__auto___31746 = (0);
while(true){
if((i__7480__auto___31746 < len__7479__auto___31745)){
args31232.push((arguments[i__7480__auto___31746]));

var G__31747 = (i__7480__auto___31746 + (1));
i__7480__auto___31746 = G__31747;
continue;
} else {
}
break;
}

var G__31236 = args31232.length;
switch (G__31236) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31232.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq31233){
var G__31234 = cljs.core.first.call(null,seq31233);
var seq31233__$1 = cljs.core.next.call(null,seq31233);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__31234,seq31233__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args31237 = [];
var len__7479__auto___31749 = arguments.length;
var i__7480__auto___31750 = (0);
while(true){
if((i__7480__auto___31750 < len__7479__auto___31749)){
args31237.push((arguments[i__7480__auto___31750]));

var G__31751 = (i__7480__auto___31750 + (1));
i__7480__auto___31750 = G__31751;
continue;
} else {
}
break;
}

var G__31241 = args31237.length;
switch (G__31241) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31237.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq31238){
var G__31239 = cljs.core.first.call(null,seq31238);
var seq31238__$1 = cljs.core.next.call(null,seq31238);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__31239,seq31238__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args31242 = [];
var len__7479__auto___31753 = arguments.length;
var i__7480__auto___31754 = (0);
while(true){
if((i__7480__auto___31754 < len__7479__auto___31753)){
args31242.push((arguments[i__7480__auto___31754]));

var G__31755 = (i__7480__auto___31754 + (1));
i__7480__auto___31754 = G__31755;
continue;
} else {
}
break;
}

var G__31246 = args31242.length;
switch (G__31246) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31242.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq31243){
var G__31244 = cljs.core.first.call(null,seq31243);
var seq31243__$1 = cljs.core.next.call(null,seq31243);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__31244,seq31243__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args31247 = [];
var len__7479__auto___31757 = arguments.length;
var i__7480__auto___31758 = (0);
while(true){
if((i__7480__auto___31758 < len__7479__auto___31757)){
args31247.push((arguments[i__7480__auto___31758]));

var G__31759 = (i__7480__auto___31758 + (1));
i__7480__auto___31758 = G__31759;
continue;
} else {
}
break;
}

var G__31251 = args31247.length;
switch (G__31251) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31247.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq31248){
var G__31249 = cljs.core.first.call(null,seq31248);
var seq31248__$1 = cljs.core.next.call(null,seq31248);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__31249,seq31248__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args31252 = [];
var len__7479__auto___31761 = arguments.length;
var i__7480__auto___31762 = (0);
while(true){
if((i__7480__auto___31762 < len__7479__auto___31761)){
args31252.push((arguments[i__7480__auto___31762]));

var G__31763 = (i__7480__auto___31762 + (1));
i__7480__auto___31762 = G__31763;
continue;
} else {
}
break;
}

var G__31256 = args31252.length;
switch (G__31256) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31252.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq31253){
var G__31254 = cljs.core.first.call(null,seq31253);
var seq31253__$1 = cljs.core.next.call(null,seq31253);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__31254,seq31253__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args31257 = [];
var len__7479__auto___31765 = arguments.length;
var i__7480__auto___31766 = (0);
while(true){
if((i__7480__auto___31766 < len__7479__auto___31765)){
args31257.push((arguments[i__7480__auto___31766]));

var G__31767 = (i__7480__auto___31766 + (1));
i__7480__auto___31766 = G__31767;
continue;
} else {
}
break;
}

var G__31261 = args31257.length;
switch (G__31261) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31257.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq31258){
var G__31259 = cljs.core.first.call(null,seq31258);
var seq31258__$1 = cljs.core.next.call(null,seq31258);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__31259,seq31258__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args31262 = [];
var len__7479__auto___31769 = arguments.length;
var i__7480__auto___31770 = (0);
while(true){
if((i__7480__auto___31770 < len__7479__auto___31769)){
args31262.push((arguments[i__7480__auto___31770]));

var G__31771 = (i__7480__auto___31770 + (1));
i__7480__auto___31770 = G__31771;
continue;
} else {
}
break;
}

var G__31266 = args31262.length;
switch (G__31266) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31262.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq31263){
var G__31264 = cljs.core.first.call(null,seq31263);
var seq31263__$1 = cljs.core.next.call(null,seq31263);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__31264,seq31263__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args31267 = [];
var len__7479__auto___31773 = arguments.length;
var i__7480__auto___31774 = (0);
while(true){
if((i__7480__auto___31774 < len__7479__auto___31773)){
args31267.push((arguments[i__7480__auto___31774]));

var G__31775 = (i__7480__auto___31774 + (1));
i__7480__auto___31774 = G__31775;
continue;
} else {
}
break;
}

var G__31271 = args31267.length;
switch (G__31271) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31267.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq31268){
var G__31269 = cljs.core.first.call(null,seq31268);
var seq31268__$1 = cljs.core.next.call(null,seq31268);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__31269,seq31268__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args31272 = [];
var len__7479__auto___31777 = arguments.length;
var i__7480__auto___31778 = (0);
while(true){
if((i__7480__auto___31778 < len__7479__auto___31777)){
args31272.push((arguments[i__7480__auto___31778]));

var G__31779 = (i__7480__auto___31778 + (1));
i__7480__auto___31778 = G__31779;
continue;
} else {
}
break;
}

var G__31276 = args31272.length;
switch (G__31276) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31272.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq31273){
var G__31274 = cljs.core.first.call(null,seq31273);
var seq31273__$1 = cljs.core.next.call(null,seq31273);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__31274,seq31273__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args31277 = [];
var len__7479__auto___31781 = arguments.length;
var i__7480__auto___31782 = (0);
while(true){
if((i__7480__auto___31782 < len__7479__auto___31781)){
args31277.push((arguments[i__7480__auto___31782]));

var G__31783 = (i__7480__auto___31782 + (1));
i__7480__auto___31782 = G__31783;
continue;
} else {
}
break;
}

var G__31281 = args31277.length;
switch (G__31281) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31277.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq31278){
var G__31279 = cljs.core.first.call(null,seq31278);
var seq31278__$1 = cljs.core.next.call(null,seq31278);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__31279,seq31278__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args31282 = [];
var len__7479__auto___31785 = arguments.length;
var i__7480__auto___31786 = (0);
while(true){
if((i__7480__auto___31786 < len__7479__auto___31785)){
args31282.push((arguments[i__7480__auto___31786]));

var G__31787 = (i__7480__auto___31786 + (1));
i__7480__auto___31786 = G__31787;
continue;
} else {
}
break;
}

var G__31286 = args31282.length;
switch (G__31286) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31282.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq31283){
var G__31284 = cljs.core.first.call(null,seq31283);
var seq31283__$1 = cljs.core.next.call(null,seq31283);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__31284,seq31283__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args31287 = [];
var len__7479__auto___31789 = arguments.length;
var i__7480__auto___31790 = (0);
while(true){
if((i__7480__auto___31790 < len__7479__auto___31789)){
args31287.push((arguments[i__7480__auto___31790]));

var G__31791 = (i__7480__auto___31790 + (1));
i__7480__auto___31790 = G__31791;
continue;
} else {
}
break;
}

var G__31291 = args31287.length;
switch (G__31291) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31287.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq31288){
var G__31289 = cljs.core.first.call(null,seq31288);
var seq31288__$1 = cljs.core.next.call(null,seq31288);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__31289,seq31288__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args31292 = [];
var len__7479__auto___31793 = arguments.length;
var i__7480__auto___31794 = (0);
while(true){
if((i__7480__auto___31794 < len__7479__auto___31793)){
args31292.push((arguments[i__7480__auto___31794]));

var G__31795 = (i__7480__auto___31794 + (1));
i__7480__auto___31794 = G__31795;
continue;
} else {
}
break;
}

var G__31296 = args31292.length;
switch (G__31296) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31292.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq31293){
var G__31294 = cljs.core.first.call(null,seq31293);
var seq31293__$1 = cljs.core.next.call(null,seq31293);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__31294,seq31293__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args31297 = [];
var len__7479__auto___31797 = arguments.length;
var i__7480__auto___31798 = (0);
while(true){
if((i__7480__auto___31798 < len__7479__auto___31797)){
args31297.push((arguments[i__7480__auto___31798]));

var G__31799 = (i__7480__auto___31798 + (1));
i__7480__auto___31798 = G__31799;
continue;
} else {
}
break;
}

var G__31301 = args31297.length;
switch (G__31301) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31297.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq31298){
var G__31299 = cljs.core.first.call(null,seq31298);
var seq31298__$1 = cljs.core.next.call(null,seq31298);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__31299,seq31298__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args31302 = [];
var len__7479__auto___31801 = arguments.length;
var i__7480__auto___31802 = (0);
while(true){
if((i__7480__auto___31802 < len__7479__auto___31801)){
args31302.push((arguments[i__7480__auto___31802]));

var G__31803 = (i__7480__auto___31802 + (1));
i__7480__auto___31802 = G__31803;
continue;
} else {
}
break;
}

var G__31306 = args31302.length;
switch (G__31306) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31302.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq31303){
var G__31304 = cljs.core.first.call(null,seq31303);
var seq31303__$1 = cljs.core.next.call(null,seq31303);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__31304,seq31303__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args31307 = [];
var len__7479__auto___31805 = arguments.length;
var i__7480__auto___31806 = (0);
while(true){
if((i__7480__auto___31806 < len__7479__auto___31805)){
args31307.push((arguments[i__7480__auto___31806]));

var G__31807 = (i__7480__auto___31806 + (1));
i__7480__auto___31806 = G__31807;
continue;
} else {
}
break;
}

var G__31311 = args31307.length;
switch (G__31311) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31307.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq31308){
var G__31309 = cljs.core.first.call(null,seq31308);
var seq31308__$1 = cljs.core.next.call(null,seq31308);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__31309,seq31308__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args31312 = [];
var len__7479__auto___31809 = arguments.length;
var i__7480__auto___31810 = (0);
while(true){
if((i__7480__auto___31810 < len__7479__auto___31809)){
args31312.push((arguments[i__7480__auto___31810]));

var G__31811 = (i__7480__auto___31810 + (1));
i__7480__auto___31810 = G__31811;
continue;
} else {
}
break;
}

var G__31316 = args31312.length;
switch (G__31316) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args31312.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq31313){
var G__31314 = cljs.core.first.call(null,seq31313);
var seq31313__$1 = cljs.core.next.call(null,seq31313);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__31314,seq31313__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args30852 = [];
var len__7479__auto___31813 = arguments.length;
var i__7480__auto___31814 = (0);
while(true){
if((i__7480__auto___31814 < len__7479__auto___31813)){
args30852.push((arguments[i__7480__auto___31814]));

var G__31815 = (i__7480__auto___31814 + (1));
i__7480__auto___31814 = G__31815;
continue;
} else {
}
break;
}

var G__30856 = args30852.length;
switch (G__30856) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args30852.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__14340__auto__,children__14341__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__14340__auto__,children__14341__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq30853){
var G__30854 = cljs.core.first.call(null,seq30853);
var seq30853__$1 = cljs.core.next.call(null,seq30853);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__30854,seq30853__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map