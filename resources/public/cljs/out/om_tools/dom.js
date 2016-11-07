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
if(cljs.core.truth_((function (){var or__24751__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__24751__auto__){
return or__24751__auto__;
} else {
var G__45328 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__45328) {
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
var G__45331 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__45331) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45337){
var vec__45338 = p__45337;
var k = cljs.core.nth.call(null,vec__45338,(0),null);
var v = cljs.core.nth.call(null,vec__45338,(1),null);
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
return (function (){var or__24751__auto__ = React.isValidElement;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var vec__45344 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__45344,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__45344,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args45347 = [];
var len__25826__auto___45972 = arguments.length;
var i__25827__auto___45973 = (0);
while(true){
if((i__25827__auto___45973 < len__25826__auto___45972)){
args45347.push((arguments[i__25827__auto___45973]));

var G__45974 = (i__25827__auto___45973 + (1));
i__25827__auto___45973 = G__45974;
continue;
} else {
}
break;
}

var G__45351 = args45347.length;
switch (G__45351) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45347.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq45348){
var G__45349 = cljs.core.first.call(null,seq45348);
var seq45348__$1 = cljs.core.next.call(null,seq45348);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__45349,seq45348__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args45352 = [];
var len__25826__auto___45976 = arguments.length;
var i__25827__auto___45977 = (0);
while(true){
if((i__25827__auto___45977 < len__25826__auto___45976)){
args45352.push((arguments[i__25827__auto___45977]));

var G__45978 = (i__25827__auto___45977 + (1));
i__25827__auto___45977 = G__45978;
continue;
} else {
}
break;
}

var G__45356 = args45352.length;
switch (G__45356) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45352.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq45353){
var G__45354 = cljs.core.first.call(null,seq45353);
var seq45353__$1 = cljs.core.next.call(null,seq45353);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__45354,seq45353__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args45357 = [];
var len__25826__auto___45980 = arguments.length;
var i__25827__auto___45981 = (0);
while(true){
if((i__25827__auto___45981 < len__25826__auto___45980)){
args45357.push((arguments[i__25827__auto___45981]));

var G__45982 = (i__25827__auto___45981 + (1));
i__25827__auto___45981 = G__45982;
continue;
} else {
}
break;
}

var G__45361 = args45357.length;
switch (G__45361) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45357.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq45358){
var G__45359 = cljs.core.first.call(null,seq45358);
var seq45358__$1 = cljs.core.next.call(null,seq45358);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__45359,seq45358__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args45362 = [];
var len__25826__auto___45984 = arguments.length;
var i__25827__auto___45985 = (0);
while(true){
if((i__25827__auto___45985 < len__25826__auto___45984)){
args45362.push((arguments[i__25827__auto___45985]));

var G__45986 = (i__25827__auto___45985 + (1));
i__25827__auto___45985 = G__45986;
continue;
} else {
}
break;
}

var G__45366 = args45362.length;
switch (G__45366) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45362.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq45363){
var G__45364 = cljs.core.first.call(null,seq45363);
var seq45363__$1 = cljs.core.next.call(null,seq45363);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__45364,seq45363__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args45367 = [];
var len__25826__auto___45988 = arguments.length;
var i__25827__auto___45989 = (0);
while(true){
if((i__25827__auto___45989 < len__25826__auto___45988)){
args45367.push((arguments[i__25827__auto___45989]));

var G__45990 = (i__25827__auto___45989 + (1));
i__25827__auto___45989 = G__45990;
continue;
} else {
}
break;
}

var G__45371 = args45367.length;
switch (G__45371) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45367.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq45368){
var G__45369 = cljs.core.first.call(null,seq45368);
var seq45368__$1 = cljs.core.next.call(null,seq45368);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__45369,seq45368__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args45372 = [];
var len__25826__auto___45992 = arguments.length;
var i__25827__auto___45993 = (0);
while(true){
if((i__25827__auto___45993 < len__25826__auto___45992)){
args45372.push((arguments[i__25827__auto___45993]));

var G__45994 = (i__25827__auto___45993 + (1));
i__25827__auto___45993 = G__45994;
continue;
} else {
}
break;
}

var G__45376 = args45372.length;
switch (G__45376) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45372.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq45373){
var G__45374 = cljs.core.first.call(null,seq45373);
var seq45373__$1 = cljs.core.next.call(null,seq45373);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__45374,seq45373__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args45377 = [];
var len__25826__auto___45996 = arguments.length;
var i__25827__auto___45997 = (0);
while(true){
if((i__25827__auto___45997 < len__25826__auto___45996)){
args45377.push((arguments[i__25827__auto___45997]));

var G__45998 = (i__25827__auto___45997 + (1));
i__25827__auto___45997 = G__45998;
continue;
} else {
}
break;
}

var G__45381 = args45377.length;
switch (G__45381) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45377.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq45378){
var G__45379 = cljs.core.first.call(null,seq45378);
var seq45378__$1 = cljs.core.next.call(null,seq45378);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__45379,seq45378__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args45382 = [];
var len__25826__auto___46000 = arguments.length;
var i__25827__auto___46001 = (0);
while(true){
if((i__25827__auto___46001 < len__25826__auto___46000)){
args45382.push((arguments[i__25827__auto___46001]));

var G__46002 = (i__25827__auto___46001 + (1));
i__25827__auto___46001 = G__46002;
continue;
} else {
}
break;
}

var G__45386 = args45382.length;
switch (G__45386) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45382.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq45383){
var G__45384 = cljs.core.first.call(null,seq45383);
var seq45383__$1 = cljs.core.next.call(null,seq45383);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__45384,seq45383__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args45387 = [];
var len__25826__auto___46004 = arguments.length;
var i__25827__auto___46005 = (0);
while(true){
if((i__25827__auto___46005 < len__25826__auto___46004)){
args45387.push((arguments[i__25827__auto___46005]));

var G__46006 = (i__25827__auto___46005 + (1));
i__25827__auto___46005 = G__46006;
continue;
} else {
}
break;
}

var G__45391 = args45387.length;
switch (G__45391) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45387.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq45388){
var G__45389 = cljs.core.first.call(null,seq45388);
var seq45388__$1 = cljs.core.next.call(null,seq45388);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__45389,seq45388__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args45392 = [];
var len__25826__auto___46008 = arguments.length;
var i__25827__auto___46009 = (0);
while(true){
if((i__25827__auto___46009 < len__25826__auto___46008)){
args45392.push((arguments[i__25827__auto___46009]));

var G__46010 = (i__25827__auto___46009 + (1));
i__25827__auto___46009 = G__46010;
continue;
} else {
}
break;
}

var G__45396 = args45392.length;
switch (G__45396) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45392.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq45393){
var G__45394 = cljs.core.first.call(null,seq45393);
var seq45393__$1 = cljs.core.next.call(null,seq45393);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__45394,seq45393__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args45397 = [];
var len__25826__auto___46012 = arguments.length;
var i__25827__auto___46013 = (0);
while(true){
if((i__25827__auto___46013 < len__25826__auto___46012)){
args45397.push((arguments[i__25827__auto___46013]));

var G__46014 = (i__25827__auto___46013 + (1));
i__25827__auto___46013 = G__46014;
continue;
} else {
}
break;
}

var G__45401 = args45397.length;
switch (G__45401) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45397.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq45398){
var G__45399 = cljs.core.first.call(null,seq45398);
var seq45398__$1 = cljs.core.next.call(null,seq45398);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__45399,seq45398__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args45402 = [];
var len__25826__auto___46016 = arguments.length;
var i__25827__auto___46017 = (0);
while(true){
if((i__25827__auto___46017 < len__25826__auto___46016)){
args45402.push((arguments[i__25827__auto___46017]));

var G__46018 = (i__25827__auto___46017 + (1));
i__25827__auto___46017 = G__46018;
continue;
} else {
}
break;
}

var G__45406 = args45402.length;
switch (G__45406) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45402.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq45403){
var G__45404 = cljs.core.first.call(null,seq45403);
var seq45403__$1 = cljs.core.next.call(null,seq45403);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__45404,seq45403__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args45407 = [];
var len__25826__auto___46020 = arguments.length;
var i__25827__auto___46021 = (0);
while(true){
if((i__25827__auto___46021 < len__25826__auto___46020)){
args45407.push((arguments[i__25827__auto___46021]));

var G__46022 = (i__25827__auto___46021 + (1));
i__25827__auto___46021 = G__46022;
continue;
} else {
}
break;
}

var G__45411 = args45407.length;
switch (G__45411) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45407.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq45408){
var G__45409 = cljs.core.first.call(null,seq45408);
var seq45408__$1 = cljs.core.next.call(null,seq45408);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__45409,seq45408__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args45412 = [];
var len__25826__auto___46024 = arguments.length;
var i__25827__auto___46025 = (0);
while(true){
if((i__25827__auto___46025 < len__25826__auto___46024)){
args45412.push((arguments[i__25827__auto___46025]));

var G__46026 = (i__25827__auto___46025 + (1));
i__25827__auto___46025 = G__46026;
continue;
} else {
}
break;
}

var G__45416 = args45412.length;
switch (G__45416) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45412.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq45413){
var G__45414 = cljs.core.first.call(null,seq45413);
var seq45413__$1 = cljs.core.next.call(null,seq45413);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__45414,seq45413__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args45417 = [];
var len__25826__auto___46028 = arguments.length;
var i__25827__auto___46029 = (0);
while(true){
if((i__25827__auto___46029 < len__25826__auto___46028)){
args45417.push((arguments[i__25827__auto___46029]));

var G__46030 = (i__25827__auto___46029 + (1));
i__25827__auto___46029 = G__46030;
continue;
} else {
}
break;
}

var G__45421 = args45417.length;
switch (G__45421) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45417.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq45418){
var G__45419 = cljs.core.first.call(null,seq45418);
var seq45418__$1 = cljs.core.next.call(null,seq45418);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__45419,seq45418__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args45422 = [];
var len__25826__auto___46032 = arguments.length;
var i__25827__auto___46033 = (0);
while(true){
if((i__25827__auto___46033 < len__25826__auto___46032)){
args45422.push((arguments[i__25827__auto___46033]));

var G__46034 = (i__25827__auto___46033 + (1));
i__25827__auto___46033 = G__46034;
continue;
} else {
}
break;
}

var G__45426 = args45422.length;
switch (G__45426) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45422.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq45423){
var G__45424 = cljs.core.first.call(null,seq45423);
var seq45423__$1 = cljs.core.next.call(null,seq45423);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__45424,seq45423__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args45427 = [];
var len__25826__auto___46036 = arguments.length;
var i__25827__auto___46037 = (0);
while(true){
if((i__25827__auto___46037 < len__25826__auto___46036)){
args45427.push((arguments[i__25827__auto___46037]));

var G__46038 = (i__25827__auto___46037 + (1));
i__25827__auto___46037 = G__46038;
continue;
} else {
}
break;
}

var G__45431 = args45427.length;
switch (G__45431) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45427.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq45428){
var G__45429 = cljs.core.first.call(null,seq45428);
var seq45428__$1 = cljs.core.next.call(null,seq45428);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__45429,seq45428__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args45432 = [];
var len__25826__auto___46040 = arguments.length;
var i__25827__auto___46041 = (0);
while(true){
if((i__25827__auto___46041 < len__25826__auto___46040)){
args45432.push((arguments[i__25827__auto___46041]));

var G__46042 = (i__25827__auto___46041 + (1));
i__25827__auto___46041 = G__46042;
continue;
} else {
}
break;
}

var G__45436 = args45432.length;
switch (G__45436) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45432.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq45433){
var G__45434 = cljs.core.first.call(null,seq45433);
var seq45433__$1 = cljs.core.next.call(null,seq45433);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__45434,seq45433__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args45437 = [];
var len__25826__auto___46044 = arguments.length;
var i__25827__auto___46045 = (0);
while(true){
if((i__25827__auto___46045 < len__25826__auto___46044)){
args45437.push((arguments[i__25827__auto___46045]));

var G__46046 = (i__25827__auto___46045 + (1));
i__25827__auto___46045 = G__46046;
continue;
} else {
}
break;
}

var G__45441 = args45437.length;
switch (G__45441) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45437.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq45438){
var G__45439 = cljs.core.first.call(null,seq45438);
var seq45438__$1 = cljs.core.next.call(null,seq45438);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__45439,seq45438__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args45442 = [];
var len__25826__auto___46048 = arguments.length;
var i__25827__auto___46049 = (0);
while(true){
if((i__25827__auto___46049 < len__25826__auto___46048)){
args45442.push((arguments[i__25827__auto___46049]));

var G__46050 = (i__25827__auto___46049 + (1));
i__25827__auto___46049 = G__46050;
continue;
} else {
}
break;
}

var G__45446 = args45442.length;
switch (G__45446) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45442.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq45443){
var G__45444 = cljs.core.first.call(null,seq45443);
var seq45443__$1 = cljs.core.next.call(null,seq45443);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__45444,seq45443__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args45447 = [];
var len__25826__auto___46052 = arguments.length;
var i__25827__auto___46053 = (0);
while(true){
if((i__25827__auto___46053 < len__25826__auto___46052)){
args45447.push((arguments[i__25827__auto___46053]));

var G__46054 = (i__25827__auto___46053 + (1));
i__25827__auto___46053 = G__46054;
continue;
} else {
}
break;
}

var G__45451 = args45447.length;
switch (G__45451) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45447.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq45448){
var G__45449 = cljs.core.first.call(null,seq45448);
var seq45448__$1 = cljs.core.next.call(null,seq45448);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__45449,seq45448__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args45452 = [];
var len__25826__auto___46056 = arguments.length;
var i__25827__auto___46057 = (0);
while(true){
if((i__25827__auto___46057 < len__25826__auto___46056)){
args45452.push((arguments[i__25827__auto___46057]));

var G__46058 = (i__25827__auto___46057 + (1));
i__25827__auto___46057 = G__46058;
continue;
} else {
}
break;
}

var G__45456 = args45452.length;
switch (G__45456) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45452.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq45453){
var G__45454 = cljs.core.first.call(null,seq45453);
var seq45453__$1 = cljs.core.next.call(null,seq45453);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__45454,seq45453__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args45457 = [];
var len__25826__auto___46060 = arguments.length;
var i__25827__auto___46061 = (0);
while(true){
if((i__25827__auto___46061 < len__25826__auto___46060)){
args45457.push((arguments[i__25827__auto___46061]));

var G__46062 = (i__25827__auto___46061 + (1));
i__25827__auto___46061 = G__46062;
continue;
} else {
}
break;
}

var G__45461 = args45457.length;
switch (G__45461) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45457.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq45458){
var G__45459 = cljs.core.first.call(null,seq45458);
var seq45458__$1 = cljs.core.next.call(null,seq45458);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__45459,seq45458__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args45462 = [];
var len__25826__auto___46064 = arguments.length;
var i__25827__auto___46065 = (0);
while(true){
if((i__25827__auto___46065 < len__25826__auto___46064)){
args45462.push((arguments[i__25827__auto___46065]));

var G__46066 = (i__25827__auto___46065 + (1));
i__25827__auto___46065 = G__46066;
continue;
} else {
}
break;
}

var G__45466 = args45462.length;
switch (G__45466) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45462.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq45463){
var G__45464 = cljs.core.first.call(null,seq45463);
var seq45463__$1 = cljs.core.next.call(null,seq45463);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__45464,seq45463__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args45467 = [];
var len__25826__auto___46068 = arguments.length;
var i__25827__auto___46069 = (0);
while(true){
if((i__25827__auto___46069 < len__25826__auto___46068)){
args45467.push((arguments[i__25827__auto___46069]));

var G__46070 = (i__25827__auto___46069 + (1));
i__25827__auto___46069 = G__46070;
continue;
} else {
}
break;
}

var G__45471 = args45467.length;
switch (G__45471) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45467.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq45468){
var G__45469 = cljs.core.first.call(null,seq45468);
var seq45468__$1 = cljs.core.next.call(null,seq45468);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__45469,seq45468__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args45472 = [];
var len__25826__auto___46072 = arguments.length;
var i__25827__auto___46073 = (0);
while(true){
if((i__25827__auto___46073 < len__25826__auto___46072)){
args45472.push((arguments[i__25827__auto___46073]));

var G__46074 = (i__25827__auto___46073 + (1));
i__25827__auto___46073 = G__46074;
continue;
} else {
}
break;
}

var G__45476 = args45472.length;
switch (G__45476) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45472.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq45473){
var G__45474 = cljs.core.first.call(null,seq45473);
var seq45473__$1 = cljs.core.next.call(null,seq45473);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__45474,seq45473__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args45477 = [];
var len__25826__auto___46076 = arguments.length;
var i__25827__auto___46077 = (0);
while(true){
if((i__25827__auto___46077 < len__25826__auto___46076)){
args45477.push((arguments[i__25827__auto___46077]));

var G__46078 = (i__25827__auto___46077 + (1));
i__25827__auto___46077 = G__46078;
continue;
} else {
}
break;
}

var G__45481 = args45477.length;
switch (G__45481) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45477.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq45478){
var G__45479 = cljs.core.first.call(null,seq45478);
var seq45478__$1 = cljs.core.next.call(null,seq45478);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__45479,seq45478__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args45482 = [];
var len__25826__auto___46080 = arguments.length;
var i__25827__auto___46081 = (0);
while(true){
if((i__25827__auto___46081 < len__25826__auto___46080)){
args45482.push((arguments[i__25827__auto___46081]));

var G__46082 = (i__25827__auto___46081 + (1));
i__25827__auto___46081 = G__46082;
continue;
} else {
}
break;
}

var G__45486 = args45482.length;
switch (G__45486) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45482.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq45483){
var G__45484 = cljs.core.first.call(null,seq45483);
var seq45483__$1 = cljs.core.next.call(null,seq45483);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__45484,seq45483__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args45487 = [];
var len__25826__auto___46084 = arguments.length;
var i__25827__auto___46085 = (0);
while(true){
if((i__25827__auto___46085 < len__25826__auto___46084)){
args45487.push((arguments[i__25827__auto___46085]));

var G__46086 = (i__25827__auto___46085 + (1));
i__25827__auto___46085 = G__46086;
continue;
} else {
}
break;
}

var G__45491 = args45487.length;
switch (G__45491) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45487.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq45488){
var G__45489 = cljs.core.first.call(null,seq45488);
var seq45488__$1 = cljs.core.next.call(null,seq45488);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__45489,seq45488__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args45492 = [];
var len__25826__auto___46088 = arguments.length;
var i__25827__auto___46089 = (0);
while(true){
if((i__25827__auto___46089 < len__25826__auto___46088)){
args45492.push((arguments[i__25827__auto___46089]));

var G__46090 = (i__25827__auto___46089 + (1));
i__25827__auto___46089 = G__46090;
continue;
} else {
}
break;
}

var G__45496 = args45492.length;
switch (G__45496) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45492.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq45493){
var G__45494 = cljs.core.first.call(null,seq45493);
var seq45493__$1 = cljs.core.next.call(null,seq45493);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__45494,seq45493__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args45497 = [];
var len__25826__auto___46092 = arguments.length;
var i__25827__auto___46093 = (0);
while(true){
if((i__25827__auto___46093 < len__25826__auto___46092)){
args45497.push((arguments[i__25827__auto___46093]));

var G__46094 = (i__25827__auto___46093 + (1));
i__25827__auto___46093 = G__46094;
continue;
} else {
}
break;
}

var G__45501 = args45497.length;
switch (G__45501) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45497.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq45498){
var G__45499 = cljs.core.first.call(null,seq45498);
var seq45498__$1 = cljs.core.next.call(null,seq45498);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__45499,seq45498__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args45502 = [];
var len__25826__auto___46096 = arguments.length;
var i__25827__auto___46097 = (0);
while(true){
if((i__25827__auto___46097 < len__25826__auto___46096)){
args45502.push((arguments[i__25827__auto___46097]));

var G__46098 = (i__25827__auto___46097 + (1));
i__25827__auto___46097 = G__46098;
continue;
} else {
}
break;
}

var G__45506 = args45502.length;
switch (G__45506) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45502.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq45503){
var G__45504 = cljs.core.first.call(null,seq45503);
var seq45503__$1 = cljs.core.next.call(null,seq45503);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__45504,seq45503__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args45512 = [];
var len__25826__auto___46100 = arguments.length;
var i__25827__auto___46101 = (0);
while(true){
if((i__25827__auto___46101 < len__25826__auto___46100)){
args45512.push((arguments[i__25827__auto___46101]));

var G__46102 = (i__25827__auto___46101 + (1));
i__25827__auto___46101 = G__46102;
continue;
} else {
}
break;
}

var G__45516 = args45512.length;
switch (G__45516) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45512.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq45513){
var G__45514 = cljs.core.first.call(null,seq45513);
var seq45513__$1 = cljs.core.next.call(null,seq45513);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__45514,seq45513__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args45517 = [];
var len__25826__auto___46104 = arguments.length;
var i__25827__auto___46105 = (0);
while(true){
if((i__25827__auto___46105 < len__25826__auto___46104)){
args45517.push((arguments[i__25827__auto___46105]));

var G__46106 = (i__25827__auto___46105 + (1));
i__25827__auto___46105 = G__46106;
continue;
} else {
}
break;
}

var G__45521 = args45517.length;
switch (G__45521) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45517.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq45518){
var G__45519 = cljs.core.first.call(null,seq45518);
var seq45518__$1 = cljs.core.next.call(null,seq45518);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__45519,seq45518__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args45522 = [];
var len__25826__auto___46108 = arguments.length;
var i__25827__auto___46109 = (0);
while(true){
if((i__25827__auto___46109 < len__25826__auto___46108)){
args45522.push((arguments[i__25827__auto___46109]));

var G__46110 = (i__25827__auto___46109 + (1));
i__25827__auto___46109 = G__46110;
continue;
} else {
}
break;
}

var G__45526 = args45522.length;
switch (G__45526) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45522.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq45523){
var G__45524 = cljs.core.first.call(null,seq45523);
var seq45523__$1 = cljs.core.next.call(null,seq45523);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__45524,seq45523__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args45527 = [];
var len__25826__auto___46112 = arguments.length;
var i__25827__auto___46113 = (0);
while(true){
if((i__25827__auto___46113 < len__25826__auto___46112)){
args45527.push((arguments[i__25827__auto___46113]));

var G__46114 = (i__25827__auto___46113 + (1));
i__25827__auto___46113 = G__46114;
continue;
} else {
}
break;
}

var G__45531 = args45527.length;
switch (G__45531) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45527.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq45528){
var G__45529 = cljs.core.first.call(null,seq45528);
var seq45528__$1 = cljs.core.next.call(null,seq45528);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__45529,seq45528__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args45532 = [];
var len__25826__auto___46116 = arguments.length;
var i__25827__auto___46117 = (0);
while(true){
if((i__25827__auto___46117 < len__25826__auto___46116)){
args45532.push((arguments[i__25827__auto___46117]));

var G__46118 = (i__25827__auto___46117 + (1));
i__25827__auto___46117 = G__46118;
continue;
} else {
}
break;
}

var G__45536 = args45532.length;
switch (G__45536) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45532.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq45533){
var G__45534 = cljs.core.first.call(null,seq45533);
var seq45533__$1 = cljs.core.next.call(null,seq45533);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__45534,seq45533__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args45537 = [];
var len__25826__auto___46120 = arguments.length;
var i__25827__auto___46121 = (0);
while(true){
if((i__25827__auto___46121 < len__25826__auto___46120)){
args45537.push((arguments[i__25827__auto___46121]));

var G__46122 = (i__25827__auto___46121 + (1));
i__25827__auto___46121 = G__46122;
continue;
} else {
}
break;
}

var G__45541 = args45537.length;
switch (G__45541) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45537.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq45538){
var G__45539 = cljs.core.first.call(null,seq45538);
var seq45538__$1 = cljs.core.next.call(null,seq45538);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__45539,seq45538__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args45542 = [];
var len__25826__auto___46124 = arguments.length;
var i__25827__auto___46125 = (0);
while(true){
if((i__25827__auto___46125 < len__25826__auto___46124)){
args45542.push((arguments[i__25827__auto___46125]));

var G__46126 = (i__25827__auto___46125 + (1));
i__25827__auto___46125 = G__46126;
continue;
} else {
}
break;
}

var G__45546 = args45542.length;
switch (G__45546) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45542.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq45543){
var G__45544 = cljs.core.first.call(null,seq45543);
var seq45543__$1 = cljs.core.next.call(null,seq45543);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__45544,seq45543__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args45547 = [];
var len__25826__auto___46128 = arguments.length;
var i__25827__auto___46129 = (0);
while(true){
if((i__25827__auto___46129 < len__25826__auto___46128)){
args45547.push((arguments[i__25827__auto___46129]));

var G__46130 = (i__25827__auto___46129 + (1));
i__25827__auto___46129 = G__46130;
continue;
} else {
}
break;
}

var G__45551 = args45547.length;
switch (G__45551) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45547.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq45548){
var G__45549 = cljs.core.first.call(null,seq45548);
var seq45548__$1 = cljs.core.next.call(null,seq45548);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__45549,seq45548__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args45552 = [];
var len__25826__auto___46132 = arguments.length;
var i__25827__auto___46133 = (0);
while(true){
if((i__25827__auto___46133 < len__25826__auto___46132)){
args45552.push((arguments[i__25827__auto___46133]));

var G__46134 = (i__25827__auto___46133 + (1));
i__25827__auto___46133 = G__46134;
continue;
} else {
}
break;
}

var G__45556 = args45552.length;
switch (G__45556) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45552.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq45553){
var G__45554 = cljs.core.first.call(null,seq45553);
var seq45553__$1 = cljs.core.next.call(null,seq45553);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__45554,seq45553__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args45557 = [];
var len__25826__auto___46136 = arguments.length;
var i__25827__auto___46137 = (0);
while(true){
if((i__25827__auto___46137 < len__25826__auto___46136)){
args45557.push((arguments[i__25827__auto___46137]));

var G__46138 = (i__25827__auto___46137 + (1));
i__25827__auto___46137 = G__46138;
continue;
} else {
}
break;
}

var G__45561 = args45557.length;
switch (G__45561) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45557.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq45558){
var G__45559 = cljs.core.first.call(null,seq45558);
var seq45558__$1 = cljs.core.next.call(null,seq45558);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__45559,seq45558__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args45562 = [];
var len__25826__auto___46140 = arguments.length;
var i__25827__auto___46141 = (0);
while(true){
if((i__25827__auto___46141 < len__25826__auto___46140)){
args45562.push((arguments[i__25827__auto___46141]));

var G__46142 = (i__25827__auto___46141 + (1));
i__25827__auto___46141 = G__46142;
continue;
} else {
}
break;
}

var G__45566 = args45562.length;
switch (G__45566) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45562.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq45563){
var G__45564 = cljs.core.first.call(null,seq45563);
var seq45563__$1 = cljs.core.next.call(null,seq45563);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__45564,seq45563__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args45567 = [];
var len__25826__auto___46144 = arguments.length;
var i__25827__auto___46145 = (0);
while(true){
if((i__25827__auto___46145 < len__25826__auto___46144)){
args45567.push((arguments[i__25827__auto___46145]));

var G__46146 = (i__25827__auto___46145 + (1));
i__25827__auto___46145 = G__46146;
continue;
} else {
}
break;
}

var G__45571 = args45567.length;
switch (G__45571) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45567.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq45568){
var G__45569 = cljs.core.first.call(null,seq45568);
var seq45568__$1 = cljs.core.next.call(null,seq45568);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__45569,seq45568__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args45572 = [];
var len__25826__auto___46148 = arguments.length;
var i__25827__auto___46149 = (0);
while(true){
if((i__25827__auto___46149 < len__25826__auto___46148)){
args45572.push((arguments[i__25827__auto___46149]));

var G__46150 = (i__25827__auto___46149 + (1));
i__25827__auto___46149 = G__46150;
continue;
} else {
}
break;
}

var G__45576 = args45572.length;
switch (G__45576) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45572.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq45573){
var G__45574 = cljs.core.first.call(null,seq45573);
var seq45573__$1 = cljs.core.next.call(null,seq45573);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__45574,seq45573__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args45577 = [];
var len__25826__auto___46152 = arguments.length;
var i__25827__auto___46153 = (0);
while(true){
if((i__25827__auto___46153 < len__25826__auto___46152)){
args45577.push((arguments[i__25827__auto___46153]));

var G__46154 = (i__25827__auto___46153 + (1));
i__25827__auto___46153 = G__46154;
continue;
} else {
}
break;
}

var G__45581 = args45577.length;
switch (G__45581) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45577.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq45578){
var G__45579 = cljs.core.first.call(null,seq45578);
var seq45578__$1 = cljs.core.next.call(null,seq45578);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__45579,seq45578__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args45582 = [];
var len__25826__auto___46156 = arguments.length;
var i__25827__auto___46157 = (0);
while(true){
if((i__25827__auto___46157 < len__25826__auto___46156)){
args45582.push((arguments[i__25827__auto___46157]));

var G__46158 = (i__25827__auto___46157 + (1));
i__25827__auto___46157 = G__46158;
continue;
} else {
}
break;
}

var G__45586 = args45582.length;
switch (G__45586) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45582.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq45583){
var G__45584 = cljs.core.first.call(null,seq45583);
var seq45583__$1 = cljs.core.next.call(null,seq45583);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__45584,seq45583__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args45587 = [];
var len__25826__auto___46160 = arguments.length;
var i__25827__auto___46161 = (0);
while(true){
if((i__25827__auto___46161 < len__25826__auto___46160)){
args45587.push((arguments[i__25827__auto___46161]));

var G__46162 = (i__25827__auto___46161 + (1));
i__25827__auto___46161 = G__46162;
continue;
} else {
}
break;
}

var G__45591 = args45587.length;
switch (G__45591) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45587.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq45588){
var G__45589 = cljs.core.first.call(null,seq45588);
var seq45588__$1 = cljs.core.next.call(null,seq45588);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__45589,seq45588__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args45592 = [];
var len__25826__auto___46164 = arguments.length;
var i__25827__auto___46165 = (0);
while(true){
if((i__25827__auto___46165 < len__25826__auto___46164)){
args45592.push((arguments[i__25827__auto___46165]));

var G__46166 = (i__25827__auto___46165 + (1));
i__25827__auto___46165 = G__46166;
continue;
} else {
}
break;
}

var G__45596 = args45592.length;
switch (G__45596) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45592.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq45593){
var G__45594 = cljs.core.first.call(null,seq45593);
var seq45593__$1 = cljs.core.next.call(null,seq45593);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__45594,seq45593__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args45597 = [];
var len__25826__auto___46168 = arguments.length;
var i__25827__auto___46169 = (0);
while(true){
if((i__25827__auto___46169 < len__25826__auto___46168)){
args45597.push((arguments[i__25827__auto___46169]));

var G__46170 = (i__25827__auto___46169 + (1));
i__25827__auto___46169 = G__46170;
continue;
} else {
}
break;
}

var G__45601 = args45597.length;
switch (G__45601) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45597.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq45598){
var G__45599 = cljs.core.first.call(null,seq45598);
var seq45598__$1 = cljs.core.next.call(null,seq45598);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__45599,seq45598__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args45602 = [];
var len__25826__auto___46172 = arguments.length;
var i__25827__auto___46173 = (0);
while(true){
if((i__25827__auto___46173 < len__25826__auto___46172)){
args45602.push((arguments[i__25827__auto___46173]));

var G__46174 = (i__25827__auto___46173 + (1));
i__25827__auto___46173 = G__46174;
continue;
} else {
}
break;
}

var G__45606 = args45602.length;
switch (G__45606) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45602.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq45603){
var G__45604 = cljs.core.first.call(null,seq45603);
var seq45603__$1 = cljs.core.next.call(null,seq45603);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__45604,seq45603__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args45607 = [];
var len__25826__auto___46176 = arguments.length;
var i__25827__auto___46177 = (0);
while(true){
if((i__25827__auto___46177 < len__25826__auto___46176)){
args45607.push((arguments[i__25827__auto___46177]));

var G__46178 = (i__25827__auto___46177 + (1));
i__25827__auto___46177 = G__46178;
continue;
} else {
}
break;
}

var G__45611 = args45607.length;
switch (G__45611) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45607.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq45608){
var G__45609 = cljs.core.first.call(null,seq45608);
var seq45608__$1 = cljs.core.next.call(null,seq45608);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__45609,seq45608__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args45612 = [];
var len__25826__auto___46180 = arguments.length;
var i__25827__auto___46181 = (0);
while(true){
if((i__25827__auto___46181 < len__25826__auto___46180)){
args45612.push((arguments[i__25827__auto___46181]));

var G__46182 = (i__25827__auto___46181 + (1));
i__25827__auto___46181 = G__46182;
continue;
} else {
}
break;
}

var G__45616 = args45612.length;
switch (G__45616) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45612.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq45613){
var G__45614 = cljs.core.first.call(null,seq45613);
var seq45613__$1 = cljs.core.next.call(null,seq45613);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__45614,seq45613__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args45617 = [];
var len__25826__auto___46184 = arguments.length;
var i__25827__auto___46185 = (0);
while(true){
if((i__25827__auto___46185 < len__25826__auto___46184)){
args45617.push((arguments[i__25827__auto___46185]));

var G__46186 = (i__25827__auto___46185 + (1));
i__25827__auto___46185 = G__46186;
continue;
} else {
}
break;
}

var G__45621 = args45617.length;
switch (G__45621) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45617.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq45618){
var G__45619 = cljs.core.first.call(null,seq45618);
var seq45618__$1 = cljs.core.next.call(null,seq45618);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__45619,seq45618__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args45622 = [];
var len__25826__auto___46188 = arguments.length;
var i__25827__auto___46189 = (0);
while(true){
if((i__25827__auto___46189 < len__25826__auto___46188)){
args45622.push((arguments[i__25827__auto___46189]));

var G__46190 = (i__25827__auto___46189 + (1));
i__25827__auto___46189 = G__46190;
continue;
} else {
}
break;
}

var G__45626 = args45622.length;
switch (G__45626) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45622.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq45623){
var G__45624 = cljs.core.first.call(null,seq45623);
var seq45623__$1 = cljs.core.next.call(null,seq45623);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__45624,seq45623__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args45627 = [];
var len__25826__auto___46192 = arguments.length;
var i__25827__auto___46193 = (0);
while(true){
if((i__25827__auto___46193 < len__25826__auto___46192)){
args45627.push((arguments[i__25827__auto___46193]));

var G__46194 = (i__25827__auto___46193 + (1));
i__25827__auto___46193 = G__46194;
continue;
} else {
}
break;
}

var G__45631 = args45627.length;
switch (G__45631) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45627.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq45628){
var G__45629 = cljs.core.first.call(null,seq45628);
var seq45628__$1 = cljs.core.next.call(null,seq45628);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__45629,seq45628__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args45632 = [];
var len__25826__auto___46196 = arguments.length;
var i__25827__auto___46197 = (0);
while(true){
if((i__25827__auto___46197 < len__25826__auto___46196)){
args45632.push((arguments[i__25827__auto___46197]));

var G__46198 = (i__25827__auto___46197 + (1));
i__25827__auto___46197 = G__46198;
continue;
} else {
}
break;
}

var G__45636 = args45632.length;
switch (G__45636) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45632.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq45633){
var G__45634 = cljs.core.first.call(null,seq45633);
var seq45633__$1 = cljs.core.next.call(null,seq45633);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__45634,seq45633__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args45637 = [];
var len__25826__auto___46200 = arguments.length;
var i__25827__auto___46201 = (0);
while(true){
if((i__25827__auto___46201 < len__25826__auto___46200)){
args45637.push((arguments[i__25827__auto___46201]));

var G__46202 = (i__25827__auto___46201 + (1));
i__25827__auto___46201 = G__46202;
continue;
} else {
}
break;
}

var G__45641 = args45637.length;
switch (G__45641) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45637.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq45638){
var G__45639 = cljs.core.first.call(null,seq45638);
var seq45638__$1 = cljs.core.next.call(null,seq45638);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__45639,seq45638__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args45642 = [];
var len__25826__auto___46204 = arguments.length;
var i__25827__auto___46205 = (0);
while(true){
if((i__25827__auto___46205 < len__25826__auto___46204)){
args45642.push((arguments[i__25827__auto___46205]));

var G__46206 = (i__25827__auto___46205 + (1));
i__25827__auto___46205 = G__46206;
continue;
} else {
}
break;
}

var G__45646 = args45642.length;
switch (G__45646) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45642.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq45643){
var G__45644 = cljs.core.first.call(null,seq45643);
var seq45643__$1 = cljs.core.next.call(null,seq45643);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__45644,seq45643__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args45647 = [];
var len__25826__auto___46208 = arguments.length;
var i__25827__auto___46209 = (0);
while(true){
if((i__25827__auto___46209 < len__25826__auto___46208)){
args45647.push((arguments[i__25827__auto___46209]));

var G__46210 = (i__25827__auto___46209 + (1));
i__25827__auto___46209 = G__46210;
continue;
} else {
}
break;
}

var G__45651 = args45647.length;
switch (G__45651) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45647.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq45648){
var G__45649 = cljs.core.first.call(null,seq45648);
var seq45648__$1 = cljs.core.next.call(null,seq45648);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__45649,seq45648__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args45652 = [];
var len__25826__auto___46212 = arguments.length;
var i__25827__auto___46213 = (0);
while(true){
if((i__25827__auto___46213 < len__25826__auto___46212)){
args45652.push((arguments[i__25827__auto___46213]));

var G__46214 = (i__25827__auto___46213 + (1));
i__25827__auto___46213 = G__46214;
continue;
} else {
}
break;
}

var G__45656 = args45652.length;
switch (G__45656) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45652.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq45653){
var G__45654 = cljs.core.first.call(null,seq45653);
var seq45653__$1 = cljs.core.next.call(null,seq45653);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__45654,seq45653__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args45657 = [];
var len__25826__auto___46216 = arguments.length;
var i__25827__auto___46217 = (0);
while(true){
if((i__25827__auto___46217 < len__25826__auto___46216)){
args45657.push((arguments[i__25827__auto___46217]));

var G__46218 = (i__25827__auto___46217 + (1));
i__25827__auto___46217 = G__46218;
continue;
} else {
}
break;
}

var G__45661 = args45657.length;
switch (G__45661) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45657.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq45658){
var G__45659 = cljs.core.first.call(null,seq45658);
var seq45658__$1 = cljs.core.next.call(null,seq45658);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__45659,seq45658__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args45662 = [];
var len__25826__auto___46220 = arguments.length;
var i__25827__auto___46221 = (0);
while(true){
if((i__25827__auto___46221 < len__25826__auto___46220)){
args45662.push((arguments[i__25827__auto___46221]));

var G__46222 = (i__25827__auto___46221 + (1));
i__25827__auto___46221 = G__46222;
continue;
} else {
}
break;
}

var G__45666 = args45662.length;
switch (G__45666) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45662.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq45663){
var G__45664 = cljs.core.first.call(null,seq45663);
var seq45663__$1 = cljs.core.next.call(null,seq45663);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__45664,seq45663__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args45667 = [];
var len__25826__auto___46224 = arguments.length;
var i__25827__auto___46225 = (0);
while(true){
if((i__25827__auto___46225 < len__25826__auto___46224)){
args45667.push((arguments[i__25827__auto___46225]));

var G__46226 = (i__25827__auto___46225 + (1));
i__25827__auto___46225 = G__46226;
continue;
} else {
}
break;
}

var G__45671 = args45667.length;
switch (G__45671) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45667.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq45668){
var G__45669 = cljs.core.first.call(null,seq45668);
var seq45668__$1 = cljs.core.next.call(null,seq45668);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__45669,seq45668__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args45672 = [];
var len__25826__auto___46228 = arguments.length;
var i__25827__auto___46229 = (0);
while(true){
if((i__25827__auto___46229 < len__25826__auto___46228)){
args45672.push((arguments[i__25827__auto___46229]));

var G__46230 = (i__25827__auto___46229 + (1));
i__25827__auto___46229 = G__46230;
continue;
} else {
}
break;
}

var G__45676 = args45672.length;
switch (G__45676) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45672.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq45673){
var G__45674 = cljs.core.first.call(null,seq45673);
var seq45673__$1 = cljs.core.next.call(null,seq45673);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__45674,seq45673__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args45677 = [];
var len__25826__auto___46232 = arguments.length;
var i__25827__auto___46233 = (0);
while(true){
if((i__25827__auto___46233 < len__25826__auto___46232)){
args45677.push((arguments[i__25827__auto___46233]));

var G__46234 = (i__25827__auto___46233 + (1));
i__25827__auto___46233 = G__46234;
continue;
} else {
}
break;
}

var G__45681 = args45677.length;
switch (G__45681) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45677.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq45678){
var G__45679 = cljs.core.first.call(null,seq45678);
var seq45678__$1 = cljs.core.next.call(null,seq45678);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__45679,seq45678__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args45682 = [];
var len__25826__auto___46236 = arguments.length;
var i__25827__auto___46237 = (0);
while(true){
if((i__25827__auto___46237 < len__25826__auto___46236)){
args45682.push((arguments[i__25827__auto___46237]));

var G__46238 = (i__25827__auto___46237 + (1));
i__25827__auto___46237 = G__46238;
continue;
} else {
}
break;
}

var G__45686 = args45682.length;
switch (G__45686) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45682.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq45683){
var G__45684 = cljs.core.first.call(null,seq45683);
var seq45683__$1 = cljs.core.next.call(null,seq45683);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__45684,seq45683__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args45687 = [];
var len__25826__auto___46240 = arguments.length;
var i__25827__auto___46241 = (0);
while(true){
if((i__25827__auto___46241 < len__25826__auto___46240)){
args45687.push((arguments[i__25827__auto___46241]));

var G__46242 = (i__25827__auto___46241 + (1));
i__25827__auto___46241 = G__46242;
continue;
} else {
}
break;
}

var G__45691 = args45687.length;
switch (G__45691) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45687.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq45688){
var G__45689 = cljs.core.first.call(null,seq45688);
var seq45688__$1 = cljs.core.next.call(null,seq45688);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__45689,seq45688__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args45692 = [];
var len__25826__auto___46244 = arguments.length;
var i__25827__auto___46245 = (0);
while(true){
if((i__25827__auto___46245 < len__25826__auto___46244)){
args45692.push((arguments[i__25827__auto___46245]));

var G__46246 = (i__25827__auto___46245 + (1));
i__25827__auto___46245 = G__46246;
continue;
} else {
}
break;
}

var G__45696 = args45692.length;
switch (G__45696) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45692.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq45693){
var G__45694 = cljs.core.first.call(null,seq45693);
var seq45693__$1 = cljs.core.next.call(null,seq45693);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__45694,seq45693__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args45697 = [];
var len__25826__auto___46248 = arguments.length;
var i__25827__auto___46249 = (0);
while(true){
if((i__25827__auto___46249 < len__25826__auto___46248)){
args45697.push((arguments[i__25827__auto___46249]));

var G__46250 = (i__25827__auto___46249 + (1));
i__25827__auto___46249 = G__46250;
continue;
} else {
}
break;
}

var G__45701 = args45697.length;
switch (G__45701) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45697.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq45698){
var G__45699 = cljs.core.first.call(null,seq45698);
var seq45698__$1 = cljs.core.next.call(null,seq45698);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__45699,seq45698__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args45702 = [];
var len__25826__auto___46252 = arguments.length;
var i__25827__auto___46253 = (0);
while(true){
if((i__25827__auto___46253 < len__25826__auto___46252)){
args45702.push((arguments[i__25827__auto___46253]));

var G__46254 = (i__25827__auto___46253 + (1));
i__25827__auto___46253 = G__46254;
continue;
} else {
}
break;
}

var G__45706 = args45702.length;
switch (G__45706) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45702.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq45703){
var G__45704 = cljs.core.first.call(null,seq45703);
var seq45703__$1 = cljs.core.next.call(null,seq45703);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__45704,seq45703__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args45707 = [];
var len__25826__auto___46256 = arguments.length;
var i__25827__auto___46257 = (0);
while(true){
if((i__25827__auto___46257 < len__25826__auto___46256)){
args45707.push((arguments[i__25827__auto___46257]));

var G__46258 = (i__25827__auto___46257 + (1));
i__25827__auto___46257 = G__46258;
continue;
} else {
}
break;
}

var G__45711 = args45707.length;
switch (G__45711) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45707.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq45708){
var G__45709 = cljs.core.first.call(null,seq45708);
var seq45708__$1 = cljs.core.next.call(null,seq45708);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__45709,seq45708__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args45712 = [];
var len__25826__auto___46260 = arguments.length;
var i__25827__auto___46261 = (0);
while(true){
if((i__25827__auto___46261 < len__25826__auto___46260)){
args45712.push((arguments[i__25827__auto___46261]));

var G__46262 = (i__25827__auto___46261 + (1));
i__25827__auto___46261 = G__46262;
continue;
} else {
}
break;
}

var G__45716 = args45712.length;
switch (G__45716) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45712.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq45713){
var G__45714 = cljs.core.first.call(null,seq45713);
var seq45713__$1 = cljs.core.next.call(null,seq45713);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__45714,seq45713__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args45717 = [];
var len__25826__auto___46264 = arguments.length;
var i__25827__auto___46265 = (0);
while(true){
if((i__25827__auto___46265 < len__25826__auto___46264)){
args45717.push((arguments[i__25827__auto___46265]));

var G__46266 = (i__25827__auto___46265 + (1));
i__25827__auto___46265 = G__46266;
continue;
} else {
}
break;
}

var G__45721 = args45717.length;
switch (G__45721) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45717.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq45718){
var G__45719 = cljs.core.first.call(null,seq45718);
var seq45718__$1 = cljs.core.next.call(null,seq45718);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__45719,seq45718__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args45722 = [];
var len__25826__auto___46268 = arguments.length;
var i__25827__auto___46269 = (0);
while(true){
if((i__25827__auto___46269 < len__25826__auto___46268)){
args45722.push((arguments[i__25827__auto___46269]));

var G__46270 = (i__25827__auto___46269 + (1));
i__25827__auto___46269 = G__46270;
continue;
} else {
}
break;
}

var G__45726 = args45722.length;
switch (G__45726) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45722.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq45723){
var G__45724 = cljs.core.first.call(null,seq45723);
var seq45723__$1 = cljs.core.next.call(null,seq45723);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__45724,seq45723__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args45727 = [];
var len__25826__auto___46272 = arguments.length;
var i__25827__auto___46273 = (0);
while(true){
if((i__25827__auto___46273 < len__25826__auto___46272)){
args45727.push((arguments[i__25827__auto___46273]));

var G__46274 = (i__25827__auto___46273 + (1));
i__25827__auto___46273 = G__46274;
continue;
} else {
}
break;
}

var G__45731 = args45727.length;
switch (G__45731) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45727.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq45728){
var G__45729 = cljs.core.first.call(null,seq45728);
var seq45728__$1 = cljs.core.next.call(null,seq45728);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__45729,seq45728__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args45732 = [];
var len__25826__auto___46276 = arguments.length;
var i__25827__auto___46277 = (0);
while(true){
if((i__25827__auto___46277 < len__25826__auto___46276)){
args45732.push((arguments[i__25827__auto___46277]));

var G__46278 = (i__25827__auto___46277 + (1));
i__25827__auto___46277 = G__46278;
continue;
} else {
}
break;
}

var G__45736 = args45732.length;
switch (G__45736) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45732.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq45733){
var G__45734 = cljs.core.first.call(null,seq45733);
var seq45733__$1 = cljs.core.next.call(null,seq45733);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__45734,seq45733__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args45737 = [];
var len__25826__auto___46280 = arguments.length;
var i__25827__auto___46281 = (0);
while(true){
if((i__25827__auto___46281 < len__25826__auto___46280)){
args45737.push((arguments[i__25827__auto___46281]));

var G__46282 = (i__25827__auto___46281 + (1));
i__25827__auto___46281 = G__46282;
continue;
} else {
}
break;
}

var G__45741 = args45737.length;
switch (G__45741) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45737.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq45738){
var G__45739 = cljs.core.first.call(null,seq45738);
var seq45738__$1 = cljs.core.next.call(null,seq45738);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__45739,seq45738__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args45742 = [];
var len__25826__auto___46284 = arguments.length;
var i__25827__auto___46285 = (0);
while(true){
if((i__25827__auto___46285 < len__25826__auto___46284)){
args45742.push((arguments[i__25827__auto___46285]));

var G__46286 = (i__25827__auto___46285 + (1));
i__25827__auto___46285 = G__46286;
continue;
} else {
}
break;
}

var G__45746 = args45742.length;
switch (G__45746) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45742.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq45743){
var G__45744 = cljs.core.first.call(null,seq45743);
var seq45743__$1 = cljs.core.next.call(null,seq45743);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__45744,seq45743__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args45747 = [];
var len__25826__auto___46288 = arguments.length;
var i__25827__auto___46289 = (0);
while(true){
if((i__25827__auto___46289 < len__25826__auto___46288)){
args45747.push((arguments[i__25827__auto___46289]));

var G__46290 = (i__25827__auto___46289 + (1));
i__25827__auto___46289 = G__46290;
continue;
} else {
}
break;
}

var G__45751 = args45747.length;
switch (G__45751) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45747.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq45748){
var G__45749 = cljs.core.first.call(null,seq45748);
var seq45748__$1 = cljs.core.next.call(null,seq45748);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__45749,seq45748__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args45752 = [];
var len__25826__auto___46292 = arguments.length;
var i__25827__auto___46293 = (0);
while(true){
if((i__25827__auto___46293 < len__25826__auto___46292)){
args45752.push((arguments[i__25827__auto___46293]));

var G__46294 = (i__25827__auto___46293 + (1));
i__25827__auto___46293 = G__46294;
continue;
} else {
}
break;
}

var G__45756 = args45752.length;
switch (G__45756) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45752.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq45753){
var G__45754 = cljs.core.first.call(null,seq45753);
var seq45753__$1 = cljs.core.next.call(null,seq45753);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__45754,seq45753__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args45757 = [];
var len__25826__auto___46296 = arguments.length;
var i__25827__auto___46297 = (0);
while(true){
if((i__25827__auto___46297 < len__25826__auto___46296)){
args45757.push((arguments[i__25827__auto___46297]));

var G__46298 = (i__25827__auto___46297 + (1));
i__25827__auto___46297 = G__46298;
continue;
} else {
}
break;
}

var G__45761 = args45757.length;
switch (G__45761) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45757.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq45758){
var G__45759 = cljs.core.first.call(null,seq45758);
var seq45758__$1 = cljs.core.next.call(null,seq45758);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__45759,seq45758__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args45762 = [];
var len__25826__auto___46300 = arguments.length;
var i__25827__auto___46301 = (0);
while(true){
if((i__25827__auto___46301 < len__25826__auto___46300)){
args45762.push((arguments[i__25827__auto___46301]));

var G__46302 = (i__25827__auto___46301 + (1));
i__25827__auto___46301 = G__46302;
continue;
} else {
}
break;
}

var G__45766 = args45762.length;
switch (G__45766) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45762.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq45763){
var G__45764 = cljs.core.first.call(null,seq45763);
var seq45763__$1 = cljs.core.next.call(null,seq45763);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__45764,seq45763__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args45767 = [];
var len__25826__auto___46304 = arguments.length;
var i__25827__auto___46305 = (0);
while(true){
if((i__25827__auto___46305 < len__25826__auto___46304)){
args45767.push((arguments[i__25827__auto___46305]));

var G__46306 = (i__25827__auto___46305 + (1));
i__25827__auto___46305 = G__46306;
continue;
} else {
}
break;
}

var G__45771 = args45767.length;
switch (G__45771) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45767.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq45768){
var G__45769 = cljs.core.first.call(null,seq45768);
var seq45768__$1 = cljs.core.next.call(null,seq45768);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__45769,seq45768__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args45772 = [];
var len__25826__auto___46308 = arguments.length;
var i__25827__auto___46309 = (0);
while(true){
if((i__25827__auto___46309 < len__25826__auto___46308)){
args45772.push((arguments[i__25827__auto___46309]));

var G__46310 = (i__25827__auto___46309 + (1));
i__25827__auto___46309 = G__46310;
continue;
} else {
}
break;
}

var G__45776 = args45772.length;
switch (G__45776) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45772.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq45773){
var G__45774 = cljs.core.first.call(null,seq45773);
var seq45773__$1 = cljs.core.next.call(null,seq45773);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__45774,seq45773__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args45777 = [];
var len__25826__auto___46312 = arguments.length;
var i__25827__auto___46313 = (0);
while(true){
if((i__25827__auto___46313 < len__25826__auto___46312)){
args45777.push((arguments[i__25827__auto___46313]));

var G__46314 = (i__25827__auto___46313 + (1));
i__25827__auto___46313 = G__46314;
continue;
} else {
}
break;
}

var G__45781 = args45777.length;
switch (G__45781) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45777.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq45778){
var G__45779 = cljs.core.first.call(null,seq45778);
var seq45778__$1 = cljs.core.next.call(null,seq45778);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__45779,seq45778__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args45782 = [];
var len__25826__auto___46316 = arguments.length;
var i__25827__auto___46317 = (0);
while(true){
if((i__25827__auto___46317 < len__25826__auto___46316)){
args45782.push((arguments[i__25827__auto___46317]));

var G__46318 = (i__25827__auto___46317 + (1));
i__25827__auto___46317 = G__46318;
continue;
} else {
}
break;
}

var G__45786 = args45782.length;
switch (G__45786) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45782.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq45783){
var G__45784 = cljs.core.first.call(null,seq45783);
var seq45783__$1 = cljs.core.next.call(null,seq45783);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__45784,seq45783__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args45787 = [];
var len__25826__auto___46320 = arguments.length;
var i__25827__auto___46321 = (0);
while(true){
if((i__25827__auto___46321 < len__25826__auto___46320)){
args45787.push((arguments[i__25827__auto___46321]));

var G__46322 = (i__25827__auto___46321 + (1));
i__25827__auto___46321 = G__46322;
continue;
} else {
}
break;
}

var G__45791 = args45787.length;
switch (G__45791) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45787.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq45788){
var G__45789 = cljs.core.first.call(null,seq45788);
var seq45788__$1 = cljs.core.next.call(null,seq45788);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__45789,seq45788__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args45792 = [];
var len__25826__auto___46324 = arguments.length;
var i__25827__auto___46325 = (0);
while(true){
if((i__25827__auto___46325 < len__25826__auto___46324)){
args45792.push((arguments[i__25827__auto___46325]));

var G__46326 = (i__25827__auto___46325 + (1));
i__25827__auto___46325 = G__46326;
continue;
} else {
}
break;
}

var G__45796 = args45792.length;
switch (G__45796) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45792.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq45793){
var G__45794 = cljs.core.first.call(null,seq45793);
var seq45793__$1 = cljs.core.next.call(null,seq45793);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__45794,seq45793__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args45797 = [];
var len__25826__auto___46328 = arguments.length;
var i__25827__auto___46329 = (0);
while(true){
if((i__25827__auto___46329 < len__25826__auto___46328)){
args45797.push((arguments[i__25827__auto___46329]));

var G__46330 = (i__25827__auto___46329 + (1));
i__25827__auto___46329 = G__46330;
continue;
} else {
}
break;
}

var G__45801 = args45797.length;
switch (G__45801) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45797.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq45798){
var G__45799 = cljs.core.first.call(null,seq45798);
var seq45798__$1 = cljs.core.next.call(null,seq45798);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__45799,seq45798__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args45802 = [];
var len__25826__auto___46332 = arguments.length;
var i__25827__auto___46333 = (0);
while(true){
if((i__25827__auto___46333 < len__25826__auto___46332)){
args45802.push((arguments[i__25827__auto___46333]));

var G__46334 = (i__25827__auto___46333 + (1));
i__25827__auto___46333 = G__46334;
continue;
} else {
}
break;
}

var G__45806 = args45802.length;
switch (G__45806) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45802.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq45803){
var G__45804 = cljs.core.first.call(null,seq45803);
var seq45803__$1 = cljs.core.next.call(null,seq45803);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__45804,seq45803__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args45807 = [];
var len__25826__auto___46336 = arguments.length;
var i__25827__auto___46337 = (0);
while(true){
if((i__25827__auto___46337 < len__25826__auto___46336)){
args45807.push((arguments[i__25827__auto___46337]));

var G__46338 = (i__25827__auto___46337 + (1));
i__25827__auto___46337 = G__46338;
continue;
} else {
}
break;
}

var G__45811 = args45807.length;
switch (G__45811) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45807.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq45808){
var G__45809 = cljs.core.first.call(null,seq45808);
var seq45808__$1 = cljs.core.next.call(null,seq45808);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__45809,seq45808__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args45812 = [];
var len__25826__auto___46340 = arguments.length;
var i__25827__auto___46341 = (0);
while(true){
if((i__25827__auto___46341 < len__25826__auto___46340)){
args45812.push((arguments[i__25827__auto___46341]));

var G__46342 = (i__25827__auto___46341 + (1));
i__25827__auto___46341 = G__46342;
continue;
} else {
}
break;
}

var G__45816 = args45812.length;
switch (G__45816) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45812.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq45813){
var G__45814 = cljs.core.first.call(null,seq45813);
var seq45813__$1 = cljs.core.next.call(null,seq45813);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__45814,seq45813__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args45817 = [];
var len__25826__auto___46344 = arguments.length;
var i__25827__auto___46345 = (0);
while(true){
if((i__25827__auto___46345 < len__25826__auto___46344)){
args45817.push((arguments[i__25827__auto___46345]));

var G__46346 = (i__25827__auto___46345 + (1));
i__25827__auto___46345 = G__46346;
continue;
} else {
}
break;
}

var G__45821 = args45817.length;
switch (G__45821) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45817.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq45818){
var G__45819 = cljs.core.first.call(null,seq45818);
var seq45818__$1 = cljs.core.next.call(null,seq45818);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__45819,seq45818__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args45822 = [];
var len__25826__auto___46348 = arguments.length;
var i__25827__auto___46349 = (0);
while(true){
if((i__25827__auto___46349 < len__25826__auto___46348)){
args45822.push((arguments[i__25827__auto___46349]));

var G__46350 = (i__25827__auto___46349 + (1));
i__25827__auto___46349 = G__46350;
continue;
} else {
}
break;
}

var G__45826 = args45822.length;
switch (G__45826) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45822.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq45823){
var G__45824 = cljs.core.first.call(null,seq45823);
var seq45823__$1 = cljs.core.next.call(null,seq45823);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__45824,seq45823__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args45827 = [];
var len__25826__auto___46352 = arguments.length;
var i__25827__auto___46353 = (0);
while(true){
if((i__25827__auto___46353 < len__25826__auto___46352)){
args45827.push((arguments[i__25827__auto___46353]));

var G__46354 = (i__25827__auto___46353 + (1));
i__25827__auto___46353 = G__46354;
continue;
} else {
}
break;
}

var G__45831 = args45827.length;
switch (G__45831) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45827.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq45828){
var G__45829 = cljs.core.first.call(null,seq45828);
var seq45828__$1 = cljs.core.next.call(null,seq45828);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__45829,seq45828__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args45832 = [];
var len__25826__auto___46356 = arguments.length;
var i__25827__auto___46357 = (0);
while(true){
if((i__25827__auto___46357 < len__25826__auto___46356)){
args45832.push((arguments[i__25827__auto___46357]));

var G__46358 = (i__25827__auto___46357 + (1));
i__25827__auto___46357 = G__46358;
continue;
} else {
}
break;
}

var G__45836 = args45832.length;
switch (G__45836) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45832.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq45833){
var G__45834 = cljs.core.first.call(null,seq45833);
var seq45833__$1 = cljs.core.next.call(null,seq45833);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__45834,seq45833__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args45837 = [];
var len__25826__auto___46360 = arguments.length;
var i__25827__auto___46361 = (0);
while(true){
if((i__25827__auto___46361 < len__25826__auto___46360)){
args45837.push((arguments[i__25827__auto___46361]));

var G__46362 = (i__25827__auto___46361 + (1));
i__25827__auto___46361 = G__46362;
continue;
} else {
}
break;
}

var G__45841 = args45837.length;
switch (G__45841) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45837.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq45838){
var G__45839 = cljs.core.first.call(null,seq45838);
var seq45838__$1 = cljs.core.next.call(null,seq45838);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__45839,seq45838__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args45842 = [];
var len__25826__auto___46364 = arguments.length;
var i__25827__auto___46365 = (0);
while(true){
if((i__25827__auto___46365 < len__25826__auto___46364)){
args45842.push((arguments[i__25827__auto___46365]));

var G__46366 = (i__25827__auto___46365 + (1));
i__25827__auto___46365 = G__46366;
continue;
} else {
}
break;
}

var G__45846 = args45842.length;
switch (G__45846) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45842.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq45843){
var G__45844 = cljs.core.first.call(null,seq45843);
var seq45843__$1 = cljs.core.next.call(null,seq45843);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__45844,seq45843__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args45847 = [];
var len__25826__auto___46368 = arguments.length;
var i__25827__auto___46369 = (0);
while(true){
if((i__25827__auto___46369 < len__25826__auto___46368)){
args45847.push((arguments[i__25827__auto___46369]));

var G__46370 = (i__25827__auto___46369 + (1));
i__25827__auto___46369 = G__46370;
continue;
} else {
}
break;
}

var G__45851 = args45847.length;
switch (G__45851) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45847.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq45848){
var G__45849 = cljs.core.first.call(null,seq45848);
var seq45848__$1 = cljs.core.next.call(null,seq45848);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__45849,seq45848__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args45852 = [];
var len__25826__auto___46372 = arguments.length;
var i__25827__auto___46373 = (0);
while(true){
if((i__25827__auto___46373 < len__25826__auto___46372)){
args45852.push((arguments[i__25827__auto___46373]));

var G__46374 = (i__25827__auto___46373 + (1));
i__25827__auto___46373 = G__46374;
continue;
} else {
}
break;
}

var G__45856 = args45852.length;
switch (G__45856) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45852.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq45853){
var G__45854 = cljs.core.first.call(null,seq45853);
var seq45853__$1 = cljs.core.next.call(null,seq45853);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__45854,seq45853__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args45857 = [];
var len__25826__auto___46376 = arguments.length;
var i__25827__auto___46377 = (0);
while(true){
if((i__25827__auto___46377 < len__25826__auto___46376)){
args45857.push((arguments[i__25827__auto___46377]));

var G__46378 = (i__25827__auto___46377 + (1));
i__25827__auto___46377 = G__46378;
continue;
} else {
}
break;
}

var G__45861 = args45857.length;
switch (G__45861) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45857.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq45858){
var G__45859 = cljs.core.first.call(null,seq45858);
var seq45858__$1 = cljs.core.next.call(null,seq45858);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__45859,seq45858__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args45862 = [];
var len__25826__auto___46380 = arguments.length;
var i__25827__auto___46381 = (0);
while(true){
if((i__25827__auto___46381 < len__25826__auto___46380)){
args45862.push((arguments[i__25827__auto___46381]));

var G__46382 = (i__25827__auto___46381 + (1));
i__25827__auto___46381 = G__46382;
continue;
} else {
}
break;
}

var G__45866 = args45862.length;
switch (G__45866) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45862.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq45863){
var G__45864 = cljs.core.first.call(null,seq45863);
var seq45863__$1 = cljs.core.next.call(null,seq45863);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__45864,seq45863__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args45867 = [];
var len__25826__auto___46384 = arguments.length;
var i__25827__auto___46385 = (0);
while(true){
if((i__25827__auto___46385 < len__25826__auto___46384)){
args45867.push((arguments[i__25827__auto___46385]));

var G__46386 = (i__25827__auto___46385 + (1));
i__25827__auto___46385 = G__46386;
continue;
} else {
}
break;
}

var G__45871 = args45867.length;
switch (G__45871) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45867.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq45868){
var G__45869 = cljs.core.first.call(null,seq45868);
var seq45868__$1 = cljs.core.next.call(null,seq45868);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__45869,seq45868__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args45872 = [];
var len__25826__auto___46388 = arguments.length;
var i__25827__auto___46389 = (0);
while(true){
if((i__25827__auto___46389 < len__25826__auto___46388)){
args45872.push((arguments[i__25827__auto___46389]));

var G__46390 = (i__25827__auto___46389 + (1));
i__25827__auto___46389 = G__46390;
continue;
} else {
}
break;
}

var G__45876 = args45872.length;
switch (G__45876) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45872.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq45873){
var G__45874 = cljs.core.first.call(null,seq45873);
var seq45873__$1 = cljs.core.next.call(null,seq45873);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__45874,seq45873__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args45877 = [];
var len__25826__auto___46392 = arguments.length;
var i__25827__auto___46393 = (0);
while(true){
if((i__25827__auto___46393 < len__25826__auto___46392)){
args45877.push((arguments[i__25827__auto___46393]));

var G__46394 = (i__25827__auto___46393 + (1));
i__25827__auto___46393 = G__46394;
continue;
} else {
}
break;
}

var G__45881 = args45877.length;
switch (G__45881) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45877.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq45878){
var G__45879 = cljs.core.first.call(null,seq45878);
var seq45878__$1 = cljs.core.next.call(null,seq45878);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__45879,seq45878__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args45882 = [];
var len__25826__auto___46396 = arguments.length;
var i__25827__auto___46397 = (0);
while(true){
if((i__25827__auto___46397 < len__25826__auto___46396)){
args45882.push((arguments[i__25827__auto___46397]));

var G__46398 = (i__25827__auto___46397 + (1));
i__25827__auto___46397 = G__46398;
continue;
} else {
}
break;
}

var G__45886 = args45882.length;
switch (G__45886) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45882.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq45883){
var G__45884 = cljs.core.first.call(null,seq45883);
var seq45883__$1 = cljs.core.next.call(null,seq45883);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__45884,seq45883__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args45887 = [];
var len__25826__auto___46400 = arguments.length;
var i__25827__auto___46401 = (0);
while(true){
if((i__25827__auto___46401 < len__25826__auto___46400)){
args45887.push((arguments[i__25827__auto___46401]));

var G__46402 = (i__25827__auto___46401 + (1));
i__25827__auto___46401 = G__46402;
continue;
} else {
}
break;
}

var G__45891 = args45887.length;
switch (G__45891) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45887.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq45888){
var G__45889 = cljs.core.first.call(null,seq45888);
var seq45888__$1 = cljs.core.next.call(null,seq45888);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__45889,seq45888__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args45892 = [];
var len__25826__auto___46404 = arguments.length;
var i__25827__auto___46405 = (0);
while(true){
if((i__25827__auto___46405 < len__25826__auto___46404)){
args45892.push((arguments[i__25827__auto___46405]));

var G__46406 = (i__25827__auto___46405 + (1));
i__25827__auto___46405 = G__46406;
continue;
} else {
}
break;
}

var G__45896 = args45892.length;
switch (G__45896) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45892.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq45893){
var G__45894 = cljs.core.first.call(null,seq45893);
var seq45893__$1 = cljs.core.next.call(null,seq45893);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__45894,seq45893__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args45897 = [];
var len__25826__auto___46408 = arguments.length;
var i__25827__auto___46409 = (0);
while(true){
if((i__25827__auto___46409 < len__25826__auto___46408)){
args45897.push((arguments[i__25827__auto___46409]));

var G__46410 = (i__25827__auto___46409 + (1));
i__25827__auto___46409 = G__46410;
continue;
} else {
}
break;
}

var G__45901 = args45897.length;
switch (G__45901) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45897.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq45898){
var G__45899 = cljs.core.first.call(null,seq45898);
var seq45898__$1 = cljs.core.next.call(null,seq45898);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__45899,seq45898__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args45902 = [];
var len__25826__auto___46412 = arguments.length;
var i__25827__auto___46413 = (0);
while(true){
if((i__25827__auto___46413 < len__25826__auto___46412)){
args45902.push((arguments[i__25827__auto___46413]));

var G__46414 = (i__25827__auto___46413 + (1));
i__25827__auto___46413 = G__46414;
continue;
} else {
}
break;
}

var G__45906 = args45902.length;
switch (G__45906) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45902.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq45903){
var G__45904 = cljs.core.first.call(null,seq45903);
var seq45903__$1 = cljs.core.next.call(null,seq45903);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__45904,seq45903__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args45907 = [];
var len__25826__auto___46416 = arguments.length;
var i__25827__auto___46417 = (0);
while(true){
if((i__25827__auto___46417 < len__25826__auto___46416)){
args45907.push((arguments[i__25827__auto___46417]));

var G__46418 = (i__25827__auto___46417 + (1));
i__25827__auto___46417 = G__46418;
continue;
} else {
}
break;
}

var G__45911 = args45907.length;
switch (G__45911) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45907.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq45908){
var G__45909 = cljs.core.first.call(null,seq45908);
var seq45908__$1 = cljs.core.next.call(null,seq45908);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__45909,seq45908__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args45912 = [];
var len__25826__auto___46420 = arguments.length;
var i__25827__auto___46421 = (0);
while(true){
if((i__25827__auto___46421 < len__25826__auto___46420)){
args45912.push((arguments[i__25827__auto___46421]));

var G__46422 = (i__25827__auto___46421 + (1));
i__25827__auto___46421 = G__46422;
continue;
} else {
}
break;
}

var G__45916 = args45912.length;
switch (G__45916) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45912.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq45913){
var G__45914 = cljs.core.first.call(null,seq45913);
var seq45913__$1 = cljs.core.next.call(null,seq45913);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__45914,seq45913__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args45917 = [];
var len__25826__auto___46424 = arguments.length;
var i__25827__auto___46425 = (0);
while(true){
if((i__25827__auto___46425 < len__25826__auto___46424)){
args45917.push((arguments[i__25827__auto___46425]));

var G__46426 = (i__25827__auto___46425 + (1));
i__25827__auto___46425 = G__46426;
continue;
} else {
}
break;
}

var G__45921 = args45917.length;
switch (G__45921) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45917.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq45918){
var G__45919 = cljs.core.first.call(null,seq45918);
var seq45918__$1 = cljs.core.next.call(null,seq45918);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__45919,seq45918__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args45922 = [];
var len__25826__auto___46428 = arguments.length;
var i__25827__auto___46429 = (0);
while(true){
if((i__25827__auto___46429 < len__25826__auto___46428)){
args45922.push((arguments[i__25827__auto___46429]));

var G__46430 = (i__25827__auto___46429 + (1));
i__25827__auto___46429 = G__46430;
continue;
} else {
}
break;
}

var G__45926 = args45922.length;
switch (G__45926) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45922.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq45923){
var G__45924 = cljs.core.first.call(null,seq45923);
var seq45923__$1 = cljs.core.next.call(null,seq45923);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__45924,seq45923__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args45927 = [];
var len__25826__auto___46432 = arguments.length;
var i__25827__auto___46433 = (0);
while(true){
if((i__25827__auto___46433 < len__25826__auto___46432)){
args45927.push((arguments[i__25827__auto___46433]));

var G__46434 = (i__25827__auto___46433 + (1));
i__25827__auto___46433 = G__46434;
continue;
} else {
}
break;
}

var G__45931 = args45927.length;
switch (G__45931) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45927.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq45928){
var G__45929 = cljs.core.first.call(null,seq45928);
var seq45928__$1 = cljs.core.next.call(null,seq45928);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__45929,seq45928__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args45932 = [];
var len__25826__auto___46436 = arguments.length;
var i__25827__auto___46437 = (0);
while(true){
if((i__25827__auto___46437 < len__25826__auto___46436)){
args45932.push((arguments[i__25827__auto___46437]));

var G__46438 = (i__25827__auto___46437 + (1));
i__25827__auto___46437 = G__46438;
continue;
} else {
}
break;
}

var G__45936 = args45932.length;
switch (G__45936) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45932.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq45933){
var G__45934 = cljs.core.first.call(null,seq45933);
var seq45933__$1 = cljs.core.next.call(null,seq45933);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__45934,seq45933__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args45937 = [];
var len__25826__auto___46440 = arguments.length;
var i__25827__auto___46441 = (0);
while(true){
if((i__25827__auto___46441 < len__25826__auto___46440)){
args45937.push((arguments[i__25827__auto___46441]));

var G__46442 = (i__25827__auto___46441 + (1));
i__25827__auto___46441 = G__46442;
continue;
} else {
}
break;
}

var G__45941 = args45937.length;
switch (G__45941) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45937.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq45938){
var G__45939 = cljs.core.first.call(null,seq45938);
var seq45938__$1 = cljs.core.next.call(null,seq45938);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__45939,seq45938__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args45942 = [];
var len__25826__auto___46444 = arguments.length;
var i__25827__auto___46445 = (0);
while(true){
if((i__25827__auto___46445 < len__25826__auto___46444)){
args45942.push((arguments[i__25827__auto___46445]));

var G__46446 = (i__25827__auto___46445 + (1));
i__25827__auto___46445 = G__46446;
continue;
} else {
}
break;
}

var G__45946 = args45942.length;
switch (G__45946) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45942.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq45943){
var G__45944 = cljs.core.first.call(null,seq45943);
var seq45943__$1 = cljs.core.next.call(null,seq45943);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__45944,seq45943__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args45947 = [];
var len__25826__auto___46448 = arguments.length;
var i__25827__auto___46449 = (0);
while(true){
if((i__25827__auto___46449 < len__25826__auto___46448)){
args45947.push((arguments[i__25827__auto___46449]));

var G__46450 = (i__25827__auto___46449 + (1));
i__25827__auto___46449 = G__46450;
continue;
} else {
}
break;
}

var G__45951 = args45947.length;
switch (G__45951) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45947.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq45948){
var G__45949 = cljs.core.first.call(null,seq45948);
var seq45948__$1 = cljs.core.next.call(null,seq45948);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__45949,seq45948__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args45952 = [];
var len__25826__auto___46452 = arguments.length;
var i__25827__auto___46453 = (0);
while(true){
if((i__25827__auto___46453 < len__25826__auto___46452)){
args45952.push((arguments[i__25827__auto___46453]));

var G__46454 = (i__25827__auto___46453 + (1));
i__25827__auto___46453 = G__46454;
continue;
} else {
}
break;
}

var G__45956 = args45952.length;
switch (G__45956) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45952.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq45953){
var G__45954 = cljs.core.first.call(null,seq45953);
var seq45953__$1 = cljs.core.next.call(null,seq45953);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__45954,seq45953__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args45957 = [];
var len__25826__auto___46456 = arguments.length;
var i__25827__auto___46457 = (0);
while(true){
if((i__25827__auto___46457 < len__25826__auto___46456)){
args45957.push((arguments[i__25827__auto___46457]));

var G__46458 = (i__25827__auto___46457 + (1));
i__25827__auto___46457 = G__46458;
continue;
} else {
}
break;
}

var G__45961 = args45957.length;
switch (G__45961) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45957.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq45958){
var G__45959 = cljs.core.first.call(null,seq45958);
var seq45958__$1 = cljs.core.next.call(null,seq45958);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__45959,seq45958__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args45962 = [];
var len__25826__auto___46460 = arguments.length;
var i__25827__auto___46461 = (0);
while(true){
if((i__25827__auto___46461 < len__25826__auto___46460)){
args45962.push((arguments[i__25827__auto___46461]));

var G__46462 = (i__25827__auto___46461 + (1));
i__25827__auto___46461 = G__46462;
continue;
} else {
}
break;
}

var G__45966 = args45962.length;
switch (G__45966) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45962.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq45963){
var G__45964 = cljs.core.first.call(null,seq45963);
var seq45963__$1 = cljs.core.next.call(null,seq45963);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__45964,seq45963__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args45967 = [];
var len__25826__auto___46464 = arguments.length;
var i__25827__auto___46465 = (0);
while(true){
if((i__25827__auto___46465 < len__25826__auto___46464)){
args45967.push((arguments[i__25827__auto___46465]));

var G__46466 = (i__25827__auto___46465 + (1));
i__25827__auto___46465 = G__46466;
continue;
} else {
}
break;
}

var G__45971 = args45967.length;
switch (G__45971) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45967.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq45968){
var G__45969 = cljs.core.first.call(null,seq45968);
var seq45968__$1 = cljs.core.next.call(null,seq45968);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__45969,seq45968__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args45507 = [];
var len__25826__auto___46468 = arguments.length;
var i__25827__auto___46469 = (0);
while(true){
if((i__25827__auto___46469 < len__25826__auto___46468)){
args45507.push((arguments[i__25827__auto___46469]));

var G__46470 = (i__25827__auto___46469 + (1));
i__25827__auto___46469 = G__46470;
continue;
} else {
}
break;
}

var G__45511 = args45507.length;
switch (G__45511) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args45507.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__45315__auto__,children__45316__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__45315__auto__,children__45316__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq45508){
var G__45509 = cljs.core.first.call(null,seq45508);
var seq45508__$1 = cljs.core.next.call(null,seq45508);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__45509,seq45508__$1);
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

//# sourceMappingURL=dom.js.map?rel=1478445844358