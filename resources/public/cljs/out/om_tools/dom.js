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
var G__79214 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__79214) {
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
var G__79217 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__79217) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__79223){
var vec__79224 = p__79223;
var k = cljs.core.nth.call(null,vec__79224,(0),null);
var v = cljs.core.nth.call(null,vec__79224,(1),null);
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
var vec__79230 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__79230,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__79230,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args79233 = [];
var len__25826__auto___79858 = arguments.length;
var i__25827__auto___79859 = (0);
while(true){
if((i__25827__auto___79859 < len__25826__auto___79858)){
args79233.push((arguments[i__25827__auto___79859]));

var G__79860 = (i__25827__auto___79859 + (1));
i__25827__auto___79859 = G__79860;
continue;
} else {
}
break;
}

var G__79237 = args79233.length;
switch (G__79237) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79233.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq79234){
var G__79235 = cljs.core.first.call(null,seq79234);
var seq79234__$1 = cljs.core.next.call(null,seq79234);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__79235,seq79234__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args79238 = [];
var len__25826__auto___79862 = arguments.length;
var i__25827__auto___79863 = (0);
while(true){
if((i__25827__auto___79863 < len__25826__auto___79862)){
args79238.push((arguments[i__25827__auto___79863]));

var G__79864 = (i__25827__auto___79863 + (1));
i__25827__auto___79863 = G__79864;
continue;
} else {
}
break;
}

var G__79242 = args79238.length;
switch (G__79242) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79238.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq79239){
var G__79240 = cljs.core.first.call(null,seq79239);
var seq79239__$1 = cljs.core.next.call(null,seq79239);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__79240,seq79239__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args79243 = [];
var len__25826__auto___79866 = arguments.length;
var i__25827__auto___79867 = (0);
while(true){
if((i__25827__auto___79867 < len__25826__auto___79866)){
args79243.push((arguments[i__25827__auto___79867]));

var G__79868 = (i__25827__auto___79867 + (1));
i__25827__auto___79867 = G__79868;
continue;
} else {
}
break;
}

var G__79247 = args79243.length;
switch (G__79247) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79243.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq79244){
var G__79245 = cljs.core.first.call(null,seq79244);
var seq79244__$1 = cljs.core.next.call(null,seq79244);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__79245,seq79244__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args79248 = [];
var len__25826__auto___79870 = arguments.length;
var i__25827__auto___79871 = (0);
while(true){
if((i__25827__auto___79871 < len__25826__auto___79870)){
args79248.push((arguments[i__25827__auto___79871]));

var G__79872 = (i__25827__auto___79871 + (1));
i__25827__auto___79871 = G__79872;
continue;
} else {
}
break;
}

var G__79252 = args79248.length;
switch (G__79252) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79248.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq79249){
var G__79250 = cljs.core.first.call(null,seq79249);
var seq79249__$1 = cljs.core.next.call(null,seq79249);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__79250,seq79249__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args79253 = [];
var len__25826__auto___79874 = arguments.length;
var i__25827__auto___79875 = (0);
while(true){
if((i__25827__auto___79875 < len__25826__auto___79874)){
args79253.push((arguments[i__25827__auto___79875]));

var G__79876 = (i__25827__auto___79875 + (1));
i__25827__auto___79875 = G__79876;
continue;
} else {
}
break;
}

var G__79257 = args79253.length;
switch (G__79257) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79253.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq79254){
var G__79255 = cljs.core.first.call(null,seq79254);
var seq79254__$1 = cljs.core.next.call(null,seq79254);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__79255,seq79254__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args79258 = [];
var len__25826__auto___79878 = arguments.length;
var i__25827__auto___79879 = (0);
while(true){
if((i__25827__auto___79879 < len__25826__auto___79878)){
args79258.push((arguments[i__25827__auto___79879]));

var G__79880 = (i__25827__auto___79879 + (1));
i__25827__auto___79879 = G__79880;
continue;
} else {
}
break;
}

var G__79262 = args79258.length;
switch (G__79262) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79258.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq79259){
var G__79260 = cljs.core.first.call(null,seq79259);
var seq79259__$1 = cljs.core.next.call(null,seq79259);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__79260,seq79259__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args79263 = [];
var len__25826__auto___79882 = arguments.length;
var i__25827__auto___79883 = (0);
while(true){
if((i__25827__auto___79883 < len__25826__auto___79882)){
args79263.push((arguments[i__25827__auto___79883]));

var G__79884 = (i__25827__auto___79883 + (1));
i__25827__auto___79883 = G__79884;
continue;
} else {
}
break;
}

var G__79267 = args79263.length;
switch (G__79267) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79263.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq79264){
var G__79265 = cljs.core.first.call(null,seq79264);
var seq79264__$1 = cljs.core.next.call(null,seq79264);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__79265,seq79264__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args79268 = [];
var len__25826__auto___79886 = arguments.length;
var i__25827__auto___79887 = (0);
while(true){
if((i__25827__auto___79887 < len__25826__auto___79886)){
args79268.push((arguments[i__25827__auto___79887]));

var G__79888 = (i__25827__auto___79887 + (1));
i__25827__auto___79887 = G__79888;
continue;
} else {
}
break;
}

var G__79272 = args79268.length;
switch (G__79272) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79268.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq79269){
var G__79270 = cljs.core.first.call(null,seq79269);
var seq79269__$1 = cljs.core.next.call(null,seq79269);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__79270,seq79269__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args79273 = [];
var len__25826__auto___79890 = arguments.length;
var i__25827__auto___79891 = (0);
while(true){
if((i__25827__auto___79891 < len__25826__auto___79890)){
args79273.push((arguments[i__25827__auto___79891]));

var G__79892 = (i__25827__auto___79891 + (1));
i__25827__auto___79891 = G__79892;
continue;
} else {
}
break;
}

var G__79277 = args79273.length;
switch (G__79277) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79273.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq79274){
var G__79275 = cljs.core.first.call(null,seq79274);
var seq79274__$1 = cljs.core.next.call(null,seq79274);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__79275,seq79274__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args79278 = [];
var len__25826__auto___79894 = arguments.length;
var i__25827__auto___79895 = (0);
while(true){
if((i__25827__auto___79895 < len__25826__auto___79894)){
args79278.push((arguments[i__25827__auto___79895]));

var G__79896 = (i__25827__auto___79895 + (1));
i__25827__auto___79895 = G__79896;
continue;
} else {
}
break;
}

var G__79282 = args79278.length;
switch (G__79282) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79278.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq79279){
var G__79280 = cljs.core.first.call(null,seq79279);
var seq79279__$1 = cljs.core.next.call(null,seq79279);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__79280,seq79279__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args79283 = [];
var len__25826__auto___79898 = arguments.length;
var i__25827__auto___79899 = (0);
while(true){
if((i__25827__auto___79899 < len__25826__auto___79898)){
args79283.push((arguments[i__25827__auto___79899]));

var G__79900 = (i__25827__auto___79899 + (1));
i__25827__auto___79899 = G__79900;
continue;
} else {
}
break;
}

var G__79287 = args79283.length;
switch (G__79287) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79283.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq79284){
var G__79285 = cljs.core.first.call(null,seq79284);
var seq79284__$1 = cljs.core.next.call(null,seq79284);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__79285,seq79284__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args79288 = [];
var len__25826__auto___79902 = arguments.length;
var i__25827__auto___79903 = (0);
while(true){
if((i__25827__auto___79903 < len__25826__auto___79902)){
args79288.push((arguments[i__25827__auto___79903]));

var G__79904 = (i__25827__auto___79903 + (1));
i__25827__auto___79903 = G__79904;
continue;
} else {
}
break;
}

var G__79292 = args79288.length;
switch (G__79292) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79288.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq79289){
var G__79290 = cljs.core.first.call(null,seq79289);
var seq79289__$1 = cljs.core.next.call(null,seq79289);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__79290,seq79289__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args79293 = [];
var len__25826__auto___79906 = arguments.length;
var i__25827__auto___79907 = (0);
while(true){
if((i__25827__auto___79907 < len__25826__auto___79906)){
args79293.push((arguments[i__25827__auto___79907]));

var G__79908 = (i__25827__auto___79907 + (1));
i__25827__auto___79907 = G__79908;
continue;
} else {
}
break;
}

var G__79297 = args79293.length;
switch (G__79297) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79293.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq79294){
var G__79295 = cljs.core.first.call(null,seq79294);
var seq79294__$1 = cljs.core.next.call(null,seq79294);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__79295,seq79294__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args79298 = [];
var len__25826__auto___79910 = arguments.length;
var i__25827__auto___79911 = (0);
while(true){
if((i__25827__auto___79911 < len__25826__auto___79910)){
args79298.push((arguments[i__25827__auto___79911]));

var G__79912 = (i__25827__auto___79911 + (1));
i__25827__auto___79911 = G__79912;
continue;
} else {
}
break;
}

var G__79302 = args79298.length;
switch (G__79302) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79298.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq79299){
var G__79300 = cljs.core.first.call(null,seq79299);
var seq79299__$1 = cljs.core.next.call(null,seq79299);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__79300,seq79299__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args79303 = [];
var len__25826__auto___79914 = arguments.length;
var i__25827__auto___79915 = (0);
while(true){
if((i__25827__auto___79915 < len__25826__auto___79914)){
args79303.push((arguments[i__25827__auto___79915]));

var G__79916 = (i__25827__auto___79915 + (1));
i__25827__auto___79915 = G__79916;
continue;
} else {
}
break;
}

var G__79307 = args79303.length;
switch (G__79307) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79303.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq79304){
var G__79305 = cljs.core.first.call(null,seq79304);
var seq79304__$1 = cljs.core.next.call(null,seq79304);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__79305,seq79304__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args79308 = [];
var len__25826__auto___79918 = arguments.length;
var i__25827__auto___79919 = (0);
while(true){
if((i__25827__auto___79919 < len__25826__auto___79918)){
args79308.push((arguments[i__25827__auto___79919]));

var G__79920 = (i__25827__auto___79919 + (1));
i__25827__auto___79919 = G__79920;
continue;
} else {
}
break;
}

var G__79312 = args79308.length;
switch (G__79312) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79308.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq79309){
var G__79310 = cljs.core.first.call(null,seq79309);
var seq79309__$1 = cljs.core.next.call(null,seq79309);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__79310,seq79309__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args79313 = [];
var len__25826__auto___79922 = arguments.length;
var i__25827__auto___79923 = (0);
while(true){
if((i__25827__auto___79923 < len__25826__auto___79922)){
args79313.push((arguments[i__25827__auto___79923]));

var G__79924 = (i__25827__auto___79923 + (1));
i__25827__auto___79923 = G__79924;
continue;
} else {
}
break;
}

var G__79317 = args79313.length;
switch (G__79317) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79313.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq79314){
var G__79315 = cljs.core.first.call(null,seq79314);
var seq79314__$1 = cljs.core.next.call(null,seq79314);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__79315,seq79314__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args79318 = [];
var len__25826__auto___79926 = arguments.length;
var i__25827__auto___79927 = (0);
while(true){
if((i__25827__auto___79927 < len__25826__auto___79926)){
args79318.push((arguments[i__25827__auto___79927]));

var G__79928 = (i__25827__auto___79927 + (1));
i__25827__auto___79927 = G__79928;
continue;
} else {
}
break;
}

var G__79322 = args79318.length;
switch (G__79322) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79318.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq79319){
var G__79320 = cljs.core.first.call(null,seq79319);
var seq79319__$1 = cljs.core.next.call(null,seq79319);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__79320,seq79319__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args79323 = [];
var len__25826__auto___79930 = arguments.length;
var i__25827__auto___79931 = (0);
while(true){
if((i__25827__auto___79931 < len__25826__auto___79930)){
args79323.push((arguments[i__25827__auto___79931]));

var G__79932 = (i__25827__auto___79931 + (1));
i__25827__auto___79931 = G__79932;
continue;
} else {
}
break;
}

var G__79327 = args79323.length;
switch (G__79327) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79323.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq79324){
var G__79325 = cljs.core.first.call(null,seq79324);
var seq79324__$1 = cljs.core.next.call(null,seq79324);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__79325,seq79324__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args79328 = [];
var len__25826__auto___79934 = arguments.length;
var i__25827__auto___79935 = (0);
while(true){
if((i__25827__auto___79935 < len__25826__auto___79934)){
args79328.push((arguments[i__25827__auto___79935]));

var G__79936 = (i__25827__auto___79935 + (1));
i__25827__auto___79935 = G__79936;
continue;
} else {
}
break;
}

var G__79332 = args79328.length;
switch (G__79332) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79328.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq79329){
var G__79330 = cljs.core.first.call(null,seq79329);
var seq79329__$1 = cljs.core.next.call(null,seq79329);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__79330,seq79329__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args79333 = [];
var len__25826__auto___79938 = arguments.length;
var i__25827__auto___79939 = (0);
while(true){
if((i__25827__auto___79939 < len__25826__auto___79938)){
args79333.push((arguments[i__25827__auto___79939]));

var G__79940 = (i__25827__auto___79939 + (1));
i__25827__auto___79939 = G__79940;
continue;
} else {
}
break;
}

var G__79337 = args79333.length;
switch (G__79337) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79333.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq79334){
var G__79335 = cljs.core.first.call(null,seq79334);
var seq79334__$1 = cljs.core.next.call(null,seq79334);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__79335,seq79334__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args79338 = [];
var len__25826__auto___79942 = arguments.length;
var i__25827__auto___79943 = (0);
while(true){
if((i__25827__auto___79943 < len__25826__auto___79942)){
args79338.push((arguments[i__25827__auto___79943]));

var G__79944 = (i__25827__auto___79943 + (1));
i__25827__auto___79943 = G__79944;
continue;
} else {
}
break;
}

var G__79342 = args79338.length;
switch (G__79342) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79338.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq79339){
var G__79340 = cljs.core.first.call(null,seq79339);
var seq79339__$1 = cljs.core.next.call(null,seq79339);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__79340,seq79339__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args79343 = [];
var len__25826__auto___79946 = arguments.length;
var i__25827__auto___79947 = (0);
while(true){
if((i__25827__auto___79947 < len__25826__auto___79946)){
args79343.push((arguments[i__25827__auto___79947]));

var G__79948 = (i__25827__auto___79947 + (1));
i__25827__auto___79947 = G__79948;
continue;
} else {
}
break;
}

var G__79347 = args79343.length;
switch (G__79347) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79343.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq79344){
var G__79345 = cljs.core.first.call(null,seq79344);
var seq79344__$1 = cljs.core.next.call(null,seq79344);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__79345,seq79344__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args79348 = [];
var len__25826__auto___79950 = arguments.length;
var i__25827__auto___79951 = (0);
while(true){
if((i__25827__auto___79951 < len__25826__auto___79950)){
args79348.push((arguments[i__25827__auto___79951]));

var G__79952 = (i__25827__auto___79951 + (1));
i__25827__auto___79951 = G__79952;
continue;
} else {
}
break;
}

var G__79352 = args79348.length;
switch (G__79352) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79348.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq79349){
var G__79350 = cljs.core.first.call(null,seq79349);
var seq79349__$1 = cljs.core.next.call(null,seq79349);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__79350,seq79349__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args79353 = [];
var len__25826__auto___79954 = arguments.length;
var i__25827__auto___79955 = (0);
while(true){
if((i__25827__auto___79955 < len__25826__auto___79954)){
args79353.push((arguments[i__25827__auto___79955]));

var G__79956 = (i__25827__auto___79955 + (1));
i__25827__auto___79955 = G__79956;
continue;
} else {
}
break;
}

var G__79357 = args79353.length;
switch (G__79357) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79353.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq79354){
var G__79355 = cljs.core.first.call(null,seq79354);
var seq79354__$1 = cljs.core.next.call(null,seq79354);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__79355,seq79354__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args79358 = [];
var len__25826__auto___79958 = arguments.length;
var i__25827__auto___79959 = (0);
while(true){
if((i__25827__auto___79959 < len__25826__auto___79958)){
args79358.push((arguments[i__25827__auto___79959]));

var G__79960 = (i__25827__auto___79959 + (1));
i__25827__auto___79959 = G__79960;
continue;
} else {
}
break;
}

var G__79362 = args79358.length;
switch (G__79362) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79358.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq79359){
var G__79360 = cljs.core.first.call(null,seq79359);
var seq79359__$1 = cljs.core.next.call(null,seq79359);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__79360,seq79359__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args79363 = [];
var len__25826__auto___79962 = arguments.length;
var i__25827__auto___79963 = (0);
while(true){
if((i__25827__auto___79963 < len__25826__auto___79962)){
args79363.push((arguments[i__25827__auto___79963]));

var G__79964 = (i__25827__auto___79963 + (1));
i__25827__auto___79963 = G__79964;
continue;
} else {
}
break;
}

var G__79367 = args79363.length;
switch (G__79367) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79363.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq79364){
var G__79365 = cljs.core.first.call(null,seq79364);
var seq79364__$1 = cljs.core.next.call(null,seq79364);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__79365,seq79364__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args79368 = [];
var len__25826__auto___79966 = arguments.length;
var i__25827__auto___79967 = (0);
while(true){
if((i__25827__auto___79967 < len__25826__auto___79966)){
args79368.push((arguments[i__25827__auto___79967]));

var G__79968 = (i__25827__auto___79967 + (1));
i__25827__auto___79967 = G__79968;
continue;
} else {
}
break;
}

var G__79372 = args79368.length;
switch (G__79372) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79368.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq79369){
var G__79370 = cljs.core.first.call(null,seq79369);
var seq79369__$1 = cljs.core.next.call(null,seq79369);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__79370,seq79369__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args79373 = [];
var len__25826__auto___79970 = arguments.length;
var i__25827__auto___79971 = (0);
while(true){
if((i__25827__auto___79971 < len__25826__auto___79970)){
args79373.push((arguments[i__25827__auto___79971]));

var G__79972 = (i__25827__auto___79971 + (1));
i__25827__auto___79971 = G__79972;
continue;
} else {
}
break;
}

var G__79377 = args79373.length;
switch (G__79377) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79373.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq79374){
var G__79375 = cljs.core.first.call(null,seq79374);
var seq79374__$1 = cljs.core.next.call(null,seq79374);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__79375,seq79374__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args79378 = [];
var len__25826__auto___79974 = arguments.length;
var i__25827__auto___79975 = (0);
while(true){
if((i__25827__auto___79975 < len__25826__auto___79974)){
args79378.push((arguments[i__25827__auto___79975]));

var G__79976 = (i__25827__auto___79975 + (1));
i__25827__auto___79975 = G__79976;
continue;
} else {
}
break;
}

var G__79382 = args79378.length;
switch (G__79382) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79378.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq79379){
var G__79380 = cljs.core.first.call(null,seq79379);
var seq79379__$1 = cljs.core.next.call(null,seq79379);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__79380,seq79379__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args79383 = [];
var len__25826__auto___79978 = arguments.length;
var i__25827__auto___79979 = (0);
while(true){
if((i__25827__auto___79979 < len__25826__auto___79978)){
args79383.push((arguments[i__25827__auto___79979]));

var G__79980 = (i__25827__auto___79979 + (1));
i__25827__auto___79979 = G__79980;
continue;
} else {
}
break;
}

var G__79387 = args79383.length;
switch (G__79387) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79383.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq79384){
var G__79385 = cljs.core.first.call(null,seq79384);
var seq79384__$1 = cljs.core.next.call(null,seq79384);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__79385,seq79384__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args79388 = [];
var len__25826__auto___79982 = arguments.length;
var i__25827__auto___79983 = (0);
while(true){
if((i__25827__auto___79983 < len__25826__auto___79982)){
args79388.push((arguments[i__25827__auto___79983]));

var G__79984 = (i__25827__auto___79983 + (1));
i__25827__auto___79983 = G__79984;
continue;
} else {
}
break;
}

var G__79392 = args79388.length;
switch (G__79392) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79388.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq79389){
var G__79390 = cljs.core.first.call(null,seq79389);
var seq79389__$1 = cljs.core.next.call(null,seq79389);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__79390,seq79389__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args79398 = [];
var len__25826__auto___79986 = arguments.length;
var i__25827__auto___79987 = (0);
while(true){
if((i__25827__auto___79987 < len__25826__auto___79986)){
args79398.push((arguments[i__25827__auto___79987]));

var G__79988 = (i__25827__auto___79987 + (1));
i__25827__auto___79987 = G__79988;
continue;
} else {
}
break;
}

var G__79402 = args79398.length;
switch (G__79402) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79398.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq79399){
var G__79400 = cljs.core.first.call(null,seq79399);
var seq79399__$1 = cljs.core.next.call(null,seq79399);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__79400,seq79399__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args79403 = [];
var len__25826__auto___79990 = arguments.length;
var i__25827__auto___79991 = (0);
while(true){
if((i__25827__auto___79991 < len__25826__auto___79990)){
args79403.push((arguments[i__25827__auto___79991]));

var G__79992 = (i__25827__auto___79991 + (1));
i__25827__auto___79991 = G__79992;
continue;
} else {
}
break;
}

var G__79407 = args79403.length;
switch (G__79407) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79403.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq79404){
var G__79405 = cljs.core.first.call(null,seq79404);
var seq79404__$1 = cljs.core.next.call(null,seq79404);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__79405,seq79404__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args79408 = [];
var len__25826__auto___79994 = arguments.length;
var i__25827__auto___79995 = (0);
while(true){
if((i__25827__auto___79995 < len__25826__auto___79994)){
args79408.push((arguments[i__25827__auto___79995]));

var G__79996 = (i__25827__auto___79995 + (1));
i__25827__auto___79995 = G__79996;
continue;
} else {
}
break;
}

var G__79412 = args79408.length;
switch (G__79412) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79408.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq79409){
var G__79410 = cljs.core.first.call(null,seq79409);
var seq79409__$1 = cljs.core.next.call(null,seq79409);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__79410,seq79409__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args79413 = [];
var len__25826__auto___79998 = arguments.length;
var i__25827__auto___79999 = (0);
while(true){
if((i__25827__auto___79999 < len__25826__auto___79998)){
args79413.push((arguments[i__25827__auto___79999]));

var G__80000 = (i__25827__auto___79999 + (1));
i__25827__auto___79999 = G__80000;
continue;
} else {
}
break;
}

var G__79417 = args79413.length;
switch (G__79417) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79413.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq79414){
var G__79415 = cljs.core.first.call(null,seq79414);
var seq79414__$1 = cljs.core.next.call(null,seq79414);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__79415,seq79414__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args79418 = [];
var len__25826__auto___80002 = arguments.length;
var i__25827__auto___80003 = (0);
while(true){
if((i__25827__auto___80003 < len__25826__auto___80002)){
args79418.push((arguments[i__25827__auto___80003]));

var G__80004 = (i__25827__auto___80003 + (1));
i__25827__auto___80003 = G__80004;
continue;
} else {
}
break;
}

var G__79422 = args79418.length;
switch (G__79422) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79418.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq79419){
var G__79420 = cljs.core.first.call(null,seq79419);
var seq79419__$1 = cljs.core.next.call(null,seq79419);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__79420,seq79419__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args79423 = [];
var len__25826__auto___80006 = arguments.length;
var i__25827__auto___80007 = (0);
while(true){
if((i__25827__auto___80007 < len__25826__auto___80006)){
args79423.push((arguments[i__25827__auto___80007]));

var G__80008 = (i__25827__auto___80007 + (1));
i__25827__auto___80007 = G__80008;
continue;
} else {
}
break;
}

var G__79427 = args79423.length;
switch (G__79427) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79423.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq79424){
var G__79425 = cljs.core.first.call(null,seq79424);
var seq79424__$1 = cljs.core.next.call(null,seq79424);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__79425,seq79424__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args79428 = [];
var len__25826__auto___80010 = arguments.length;
var i__25827__auto___80011 = (0);
while(true){
if((i__25827__auto___80011 < len__25826__auto___80010)){
args79428.push((arguments[i__25827__auto___80011]));

var G__80012 = (i__25827__auto___80011 + (1));
i__25827__auto___80011 = G__80012;
continue;
} else {
}
break;
}

var G__79432 = args79428.length;
switch (G__79432) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79428.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq79429){
var G__79430 = cljs.core.first.call(null,seq79429);
var seq79429__$1 = cljs.core.next.call(null,seq79429);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__79430,seq79429__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args79433 = [];
var len__25826__auto___80014 = arguments.length;
var i__25827__auto___80015 = (0);
while(true){
if((i__25827__auto___80015 < len__25826__auto___80014)){
args79433.push((arguments[i__25827__auto___80015]));

var G__80016 = (i__25827__auto___80015 + (1));
i__25827__auto___80015 = G__80016;
continue;
} else {
}
break;
}

var G__79437 = args79433.length;
switch (G__79437) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79433.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq79434){
var G__79435 = cljs.core.first.call(null,seq79434);
var seq79434__$1 = cljs.core.next.call(null,seq79434);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__79435,seq79434__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args79438 = [];
var len__25826__auto___80018 = arguments.length;
var i__25827__auto___80019 = (0);
while(true){
if((i__25827__auto___80019 < len__25826__auto___80018)){
args79438.push((arguments[i__25827__auto___80019]));

var G__80020 = (i__25827__auto___80019 + (1));
i__25827__auto___80019 = G__80020;
continue;
} else {
}
break;
}

var G__79442 = args79438.length;
switch (G__79442) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79438.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq79439){
var G__79440 = cljs.core.first.call(null,seq79439);
var seq79439__$1 = cljs.core.next.call(null,seq79439);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__79440,seq79439__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args79443 = [];
var len__25826__auto___80022 = arguments.length;
var i__25827__auto___80023 = (0);
while(true){
if((i__25827__auto___80023 < len__25826__auto___80022)){
args79443.push((arguments[i__25827__auto___80023]));

var G__80024 = (i__25827__auto___80023 + (1));
i__25827__auto___80023 = G__80024;
continue;
} else {
}
break;
}

var G__79447 = args79443.length;
switch (G__79447) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79443.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq79444){
var G__79445 = cljs.core.first.call(null,seq79444);
var seq79444__$1 = cljs.core.next.call(null,seq79444);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__79445,seq79444__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args79448 = [];
var len__25826__auto___80026 = arguments.length;
var i__25827__auto___80027 = (0);
while(true){
if((i__25827__auto___80027 < len__25826__auto___80026)){
args79448.push((arguments[i__25827__auto___80027]));

var G__80028 = (i__25827__auto___80027 + (1));
i__25827__auto___80027 = G__80028;
continue;
} else {
}
break;
}

var G__79452 = args79448.length;
switch (G__79452) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79448.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq79449){
var G__79450 = cljs.core.first.call(null,seq79449);
var seq79449__$1 = cljs.core.next.call(null,seq79449);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__79450,seq79449__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args79453 = [];
var len__25826__auto___80030 = arguments.length;
var i__25827__auto___80031 = (0);
while(true){
if((i__25827__auto___80031 < len__25826__auto___80030)){
args79453.push((arguments[i__25827__auto___80031]));

var G__80032 = (i__25827__auto___80031 + (1));
i__25827__auto___80031 = G__80032;
continue;
} else {
}
break;
}

var G__79457 = args79453.length;
switch (G__79457) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79453.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq79454){
var G__79455 = cljs.core.first.call(null,seq79454);
var seq79454__$1 = cljs.core.next.call(null,seq79454);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__79455,seq79454__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args79458 = [];
var len__25826__auto___80034 = arguments.length;
var i__25827__auto___80035 = (0);
while(true){
if((i__25827__auto___80035 < len__25826__auto___80034)){
args79458.push((arguments[i__25827__auto___80035]));

var G__80036 = (i__25827__auto___80035 + (1));
i__25827__auto___80035 = G__80036;
continue;
} else {
}
break;
}

var G__79462 = args79458.length;
switch (G__79462) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79458.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq79459){
var G__79460 = cljs.core.first.call(null,seq79459);
var seq79459__$1 = cljs.core.next.call(null,seq79459);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__79460,seq79459__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args79463 = [];
var len__25826__auto___80038 = arguments.length;
var i__25827__auto___80039 = (0);
while(true){
if((i__25827__auto___80039 < len__25826__auto___80038)){
args79463.push((arguments[i__25827__auto___80039]));

var G__80040 = (i__25827__auto___80039 + (1));
i__25827__auto___80039 = G__80040;
continue;
} else {
}
break;
}

var G__79467 = args79463.length;
switch (G__79467) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79463.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq79464){
var G__79465 = cljs.core.first.call(null,seq79464);
var seq79464__$1 = cljs.core.next.call(null,seq79464);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__79465,seq79464__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args79468 = [];
var len__25826__auto___80042 = arguments.length;
var i__25827__auto___80043 = (0);
while(true){
if((i__25827__auto___80043 < len__25826__auto___80042)){
args79468.push((arguments[i__25827__auto___80043]));

var G__80044 = (i__25827__auto___80043 + (1));
i__25827__auto___80043 = G__80044;
continue;
} else {
}
break;
}

var G__79472 = args79468.length;
switch (G__79472) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79468.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq79469){
var G__79470 = cljs.core.first.call(null,seq79469);
var seq79469__$1 = cljs.core.next.call(null,seq79469);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__79470,seq79469__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args79473 = [];
var len__25826__auto___80046 = arguments.length;
var i__25827__auto___80047 = (0);
while(true){
if((i__25827__auto___80047 < len__25826__auto___80046)){
args79473.push((arguments[i__25827__auto___80047]));

var G__80048 = (i__25827__auto___80047 + (1));
i__25827__auto___80047 = G__80048;
continue;
} else {
}
break;
}

var G__79477 = args79473.length;
switch (G__79477) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79473.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq79474){
var G__79475 = cljs.core.first.call(null,seq79474);
var seq79474__$1 = cljs.core.next.call(null,seq79474);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__79475,seq79474__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args79478 = [];
var len__25826__auto___80050 = arguments.length;
var i__25827__auto___80051 = (0);
while(true){
if((i__25827__auto___80051 < len__25826__auto___80050)){
args79478.push((arguments[i__25827__auto___80051]));

var G__80052 = (i__25827__auto___80051 + (1));
i__25827__auto___80051 = G__80052;
continue;
} else {
}
break;
}

var G__79482 = args79478.length;
switch (G__79482) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79478.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq79479){
var G__79480 = cljs.core.first.call(null,seq79479);
var seq79479__$1 = cljs.core.next.call(null,seq79479);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__79480,seq79479__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args79483 = [];
var len__25826__auto___80054 = arguments.length;
var i__25827__auto___80055 = (0);
while(true){
if((i__25827__auto___80055 < len__25826__auto___80054)){
args79483.push((arguments[i__25827__auto___80055]));

var G__80056 = (i__25827__auto___80055 + (1));
i__25827__auto___80055 = G__80056;
continue;
} else {
}
break;
}

var G__79487 = args79483.length;
switch (G__79487) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79483.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq79484){
var G__79485 = cljs.core.first.call(null,seq79484);
var seq79484__$1 = cljs.core.next.call(null,seq79484);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__79485,seq79484__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args79488 = [];
var len__25826__auto___80058 = arguments.length;
var i__25827__auto___80059 = (0);
while(true){
if((i__25827__auto___80059 < len__25826__auto___80058)){
args79488.push((arguments[i__25827__auto___80059]));

var G__80060 = (i__25827__auto___80059 + (1));
i__25827__auto___80059 = G__80060;
continue;
} else {
}
break;
}

var G__79492 = args79488.length;
switch (G__79492) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79488.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq79489){
var G__79490 = cljs.core.first.call(null,seq79489);
var seq79489__$1 = cljs.core.next.call(null,seq79489);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__79490,seq79489__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args79493 = [];
var len__25826__auto___80062 = arguments.length;
var i__25827__auto___80063 = (0);
while(true){
if((i__25827__auto___80063 < len__25826__auto___80062)){
args79493.push((arguments[i__25827__auto___80063]));

var G__80064 = (i__25827__auto___80063 + (1));
i__25827__auto___80063 = G__80064;
continue;
} else {
}
break;
}

var G__79497 = args79493.length;
switch (G__79497) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79493.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq79494){
var G__79495 = cljs.core.first.call(null,seq79494);
var seq79494__$1 = cljs.core.next.call(null,seq79494);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__79495,seq79494__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args79498 = [];
var len__25826__auto___80066 = arguments.length;
var i__25827__auto___80067 = (0);
while(true){
if((i__25827__auto___80067 < len__25826__auto___80066)){
args79498.push((arguments[i__25827__auto___80067]));

var G__80068 = (i__25827__auto___80067 + (1));
i__25827__auto___80067 = G__80068;
continue;
} else {
}
break;
}

var G__79502 = args79498.length;
switch (G__79502) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79498.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq79499){
var G__79500 = cljs.core.first.call(null,seq79499);
var seq79499__$1 = cljs.core.next.call(null,seq79499);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__79500,seq79499__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args79503 = [];
var len__25826__auto___80070 = arguments.length;
var i__25827__auto___80071 = (0);
while(true){
if((i__25827__auto___80071 < len__25826__auto___80070)){
args79503.push((arguments[i__25827__auto___80071]));

var G__80072 = (i__25827__auto___80071 + (1));
i__25827__auto___80071 = G__80072;
continue;
} else {
}
break;
}

var G__79507 = args79503.length;
switch (G__79507) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79503.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq79504){
var G__79505 = cljs.core.first.call(null,seq79504);
var seq79504__$1 = cljs.core.next.call(null,seq79504);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__79505,seq79504__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args79508 = [];
var len__25826__auto___80074 = arguments.length;
var i__25827__auto___80075 = (0);
while(true){
if((i__25827__auto___80075 < len__25826__auto___80074)){
args79508.push((arguments[i__25827__auto___80075]));

var G__80076 = (i__25827__auto___80075 + (1));
i__25827__auto___80075 = G__80076;
continue;
} else {
}
break;
}

var G__79512 = args79508.length;
switch (G__79512) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79508.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq79509){
var G__79510 = cljs.core.first.call(null,seq79509);
var seq79509__$1 = cljs.core.next.call(null,seq79509);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__79510,seq79509__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args79513 = [];
var len__25826__auto___80078 = arguments.length;
var i__25827__auto___80079 = (0);
while(true){
if((i__25827__auto___80079 < len__25826__auto___80078)){
args79513.push((arguments[i__25827__auto___80079]));

var G__80080 = (i__25827__auto___80079 + (1));
i__25827__auto___80079 = G__80080;
continue;
} else {
}
break;
}

var G__79517 = args79513.length;
switch (G__79517) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79513.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq79514){
var G__79515 = cljs.core.first.call(null,seq79514);
var seq79514__$1 = cljs.core.next.call(null,seq79514);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__79515,seq79514__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args79518 = [];
var len__25826__auto___80082 = arguments.length;
var i__25827__auto___80083 = (0);
while(true){
if((i__25827__auto___80083 < len__25826__auto___80082)){
args79518.push((arguments[i__25827__auto___80083]));

var G__80084 = (i__25827__auto___80083 + (1));
i__25827__auto___80083 = G__80084;
continue;
} else {
}
break;
}

var G__79522 = args79518.length;
switch (G__79522) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79518.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq79519){
var G__79520 = cljs.core.first.call(null,seq79519);
var seq79519__$1 = cljs.core.next.call(null,seq79519);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__79520,seq79519__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args79523 = [];
var len__25826__auto___80086 = arguments.length;
var i__25827__auto___80087 = (0);
while(true){
if((i__25827__auto___80087 < len__25826__auto___80086)){
args79523.push((arguments[i__25827__auto___80087]));

var G__80088 = (i__25827__auto___80087 + (1));
i__25827__auto___80087 = G__80088;
continue;
} else {
}
break;
}

var G__79527 = args79523.length;
switch (G__79527) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79523.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq79524){
var G__79525 = cljs.core.first.call(null,seq79524);
var seq79524__$1 = cljs.core.next.call(null,seq79524);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__79525,seq79524__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args79528 = [];
var len__25826__auto___80090 = arguments.length;
var i__25827__auto___80091 = (0);
while(true){
if((i__25827__auto___80091 < len__25826__auto___80090)){
args79528.push((arguments[i__25827__auto___80091]));

var G__80092 = (i__25827__auto___80091 + (1));
i__25827__auto___80091 = G__80092;
continue;
} else {
}
break;
}

var G__79532 = args79528.length;
switch (G__79532) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79528.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq79529){
var G__79530 = cljs.core.first.call(null,seq79529);
var seq79529__$1 = cljs.core.next.call(null,seq79529);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__79530,seq79529__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args79533 = [];
var len__25826__auto___80094 = arguments.length;
var i__25827__auto___80095 = (0);
while(true){
if((i__25827__auto___80095 < len__25826__auto___80094)){
args79533.push((arguments[i__25827__auto___80095]));

var G__80096 = (i__25827__auto___80095 + (1));
i__25827__auto___80095 = G__80096;
continue;
} else {
}
break;
}

var G__79537 = args79533.length;
switch (G__79537) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79533.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq79534){
var G__79535 = cljs.core.first.call(null,seq79534);
var seq79534__$1 = cljs.core.next.call(null,seq79534);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__79535,seq79534__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args79538 = [];
var len__25826__auto___80098 = arguments.length;
var i__25827__auto___80099 = (0);
while(true){
if((i__25827__auto___80099 < len__25826__auto___80098)){
args79538.push((arguments[i__25827__auto___80099]));

var G__80100 = (i__25827__auto___80099 + (1));
i__25827__auto___80099 = G__80100;
continue;
} else {
}
break;
}

var G__79542 = args79538.length;
switch (G__79542) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79538.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq79539){
var G__79540 = cljs.core.first.call(null,seq79539);
var seq79539__$1 = cljs.core.next.call(null,seq79539);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__79540,seq79539__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args79543 = [];
var len__25826__auto___80102 = arguments.length;
var i__25827__auto___80103 = (0);
while(true){
if((i__25827__auto___80103 < len__25826__auto___80102)){
args79543.push((arguments[i__25827__auto___80103]));

var G__80104 = (i__25827__auto___80103 + (1));
i__25827__auto___80103 = G__80104;
continue;
} else {
}
break;
}

var G__79547 = args79543.length;
switch (G__79547) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79543.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq79544){
var G__79545 = cljs.core.first.call(null,seq79544);
var seq79544__$1 = cljs.core.next.call(null,seq79544);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__79545,seq79544__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args79548 = [];
var len__25826__auto___80106 = arguments.length;
var i__25827__auto___80107 = (0);
while(true){
if((i__25827__auto___80107 < len__25826__auto___80106)){
args79548.push((arguments[i__25827__auto___80107]));

var G__80108 = (i__25827__auto___80107 + (1));
i__25827__auto___80107 = G__80108;
continue;
} else {
}
break;
}

var G__79552 = args79548.length;
switch (G__79552) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79548.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq79549){
var G__79550 = cljs.core.first.call(null,seq79549);
var seq79549__$1 = cljs.core.next.call(null,seq79549);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__79550,seq79549__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args79553 = [];
var len__25826__auto___80110 = arguments.length;
var i__25827__auto___80111 = (0);
while(true){
if((i__25827__auto___80111 < len__25826__auto___80110)){
args79553.push((arguments[i__25827__auto___80111]));

var G__80112 = (i__25827__auto___80111 + (1));
i__25827__auto___80111 = G__80112;
continue;
} else {
}
break;
}

var G__79557 = args79553.length;
switch (G__79557) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79553.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq79554){
var G__79555 = cljs.core.first.call(null,seq79554);
var seq79554__$1 = cljs.core.next.call(null,seq79554);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__79555,seq79554__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args79558 = [];
var len__25826__auto___80114 = arguments.length;
var i__25827__auto___80115 = (0);
while(true){
if((i__25827__auto___80115 < len__25826__auto___80114)){
args79558.push((arguments[i__25827__auto___80115]));

var G__80116 = (i__25827__auto___80115 + (1));
i__25827__auto___80115 = G__80116;
continue;
} else {
}
break;
}

var G__79562 = args79558.length;
switch (G__79562) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79558.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq79559){
var G__79560 = cljs.core.first.call(null,seq79559);
var seq79559__$1 = cljs.core.next.call(null,seq79559);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__79560,seq79559__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args79563 = [];
var len__25826__auto___80118 = arguments.length;
var i__25827__auto___80119 = (0);
while(true){
if((i__25827__auto___80119 < len__25826__auto___80118)){
args79563.push((arguments[i__25827__auto___80119]));

var G__80120 = (i__25827__auto___80119 + (1));
i__25827__auto___80119 = G__80120;
continue;
} else {
}
break;
}

var G__79567 = args79563.length;
switch (G__79567) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79563.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq79564){
var G__79565 = cljs.core.first.call(null,seq79564);
var seq79564__$1 = cljs.core.next.call(null,seq79564);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__79565,seq79564__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args79568 = [];
var len__25826__auto___80122 = arguments.length;
var i__25827__auto___80123 = (0);
while(true){
if((i__25827__auto___80123 < len__25826__auto___80122)){
args79568.push((arguments[i__25827__auto___80123]));

var G__80124 = (i__25827__auto___80123 + (1));
i__25827__auto___80123 = G__80124;
continue;
} else {
}
break;
}

var G__79572 = args79568.length;
switch (G__79572) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79568.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq79569){
var G__79570 = cljs.core.first.call(null,seq79569);
var seq79569__$1 = cljs.core.next.call(null,seq79569);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__79570,seq79569__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args79573 = [];
var len__25826__auto___80126 = arguments.length;
var i__25827__auto___80127 = (0);
while(true){
if((i__25827__auto___80127 < len__25826__auto___80126)){
args79573.push((arguments[i__25827__auto___80127]));

var G__80128 = (i__25827__auto___80127 + (1));
i__25827__auto___80127 = G__80128;
continue;
} else {
}
break;
}

var G__79577 = args79573.length;
switch (G__79577) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79573.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq79574){
var G__79575 = cljs.core.first.call(null,seq79574);
var seq79574__$1 = cljs.core.next.call(null,seq79574);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__79575,seq79574__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args79578 = [];
var len__25826__auto___80130 = arguments.length;
var i__25827__auto___80131 = (0);
while(true){
if((i__25827__auto___80131 < len__25826__auto___80130)){
args79578.push((arguments[i__25827__auto___80131]));

var G__80132 = (i__25827__auto___80131 + (1));
i__25827__auto___80131 = G__80132;
continue;
} else {
}
break;
}

var G__79582 = args79578.length;
switch (G__79582) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79578.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq79579){
var G__79580 = cljs.core.first.call(null,seq79579);
var seq79579__$1 = cljs.core.next.call(null,seq79579);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__79580,seq79579__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args79583 = [];
var len__25826__auto___80134 = arguments.length;
var i__25827__auto___80135 = (0);
while(true){
if((i__25827__auto___80135 < len__25826__auto___80134)){
args79583.push((arguments[i__25827__auto___80135]));

var G__80136 = (i__25827__auto___80135 + (1));
i__25827__auto___80135 = G__80136;
continue;
} else {
}
break;
}

var G__79587 = args79583.length;
switch (G__79587) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79583.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq79584){
var G__79585 = cljs.core.first.call(null,seq79584);
var seq79584__$1 = cljs.core.next.call(null,seq79584);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__79585,seq79584__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args79588 = [];
var len__25826__auto___80138 = arguments.length;
var i__25827__auto___80139 = (0);
while(true){
if((i__25827__auto___80139 < len__25826__auto___80138)){
args79588.push((arguments[i__25827__auto___80139]));

var G__80140 = (i__25827__auto___80139 + (1));
i__25827__auto___80139 = G__80140;
continue;
} else {
}
break;
}

var G__79592 = args79588.length;
switch (G__79592) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79588.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq79589){
var G__79590 = cljs.core.first.call(null,seq79589);
var seq79589__$1 = cljs.core.next.call(null,seq79589);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__79590,seq79589__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args79593 = [];
var len__25826__auto___80142 = arguments.length;
var i__25827__auto___80143 = (0);
while(true){
if((i__25827__auto___80143 < len__25826__auto___80142)){
args79593.push((arguments[i__25827__auto___80143]));

var G__80144 = (i__25827__auto___80143 + (1));
i__25827__auto___80143 = G__80144;
continue;
} else {
}
break;
}

var G__79597 = args79593.length;
switch (G__79597) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79593.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq79594){
var G__79595 = cljs.core.first.call(null,seq79594);
var seq79594__$1 = cljs.core.next.call(null,seq79594);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__79595,seq79594__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args79598 = [];
var len__25826__auto___80146 = arguments.length;
var i__25827__auto___80147 = (0);
while(true){
if((i__25827__auto___80147 < len__25826__auto___80146)){
args79598.push((arguments[i__25827__auto___80147]));

var G__80148 = (i__25827__auto___80147 + (1));
i__25827__auto___80147 = G__80148;
continue;
} else {
}
break;
}

var G__79602 = args79598.length;
switch (G__79602) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79598.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq79599){
var G__79600 = cljs.core.first.call(null,seq79599);
var seq79599__$1 = cljs.core.next.call(null,seq79599);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__79600,seq79599__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args79603 = [];
var len__25826__auto___80150 = arguments.length;
var i__25827__auto___80151 = (0);
while(true){
if((i__25827__auto___80151 < len__25826__auto___80150)){
args79603.push((arguments[i__25827__auto___80151]));

var G__80152 = (i__25827__auto___80151 + (1));
i__25827__auto___80151 = G__80152;
continue;
} else {
}
break;
}

var G__79607 = args79603.length;
switch (G__79607) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79603.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq79604){
var G__79605 = cljs.core.first.call(null,seq79604);
var seq79604__$1 = cljs.core.next.call(null,seq79604);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__79605,seq79604__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args79608 = [];
var len__25826__auto___80154 = arguments.length;
var i__25827__auto___80155 = (0);
while(true){
if((i__25827__auto___80155 < len__25826__auto___80154)){
args79608.push((arguments[i__25827__auto___80155]));

var G__80156 = (i__25827__auto___80155 + (1));
i__25827__auto___80155 = G__80156;
continue;
} else {
}
break;
}

var G__79612 = args79608.length;
switch (G__79612) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79608.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq79609){
var G__79610 = cljs.core.first.call(null,seq79609);
var seq79609__$1 = cljs.core.next.call(null,seq79609);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__79610,seq79609__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args79613 = [];
var len__25826__auto___80158 = arguments.length;
var i__25827__auto___80159 = (0);
while(true){
if((i__25827__auto___80159 < len__25826__auto___80158)){
args79613.push((arguments[i__25827__auto___80159]));

var G__80160 = (i__25827__auto___80159 + (1));
i__25827__auto___80159 = G__80160;
continue;
} else {
}
break;
}

var G__79617 = args79613.length;
switch (G__79617) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79613.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq79614){
var G__79615 = cljs.core.first.call(null,seq79614);
var seq79614__$1 = cljs.core.next.call(null,seq79614);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__79615,seq79614__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args79618 = [];
var len__25826__auto___80162 = arguments.length;
var i__25827__auto___80163 = (0);
while(true){
if((i__25827__auto___80163 < len__25826__auto___80162)){
args79618.push((arguments[i__25827__auto___80163]));

var G__80164 = (i__25827__auto___80163 + (1));
i__25827__auto___80163 = G__80164;
continue;
} else {
}
break;
}

var G__79622 = args79618.length;
switch (G__79622) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79618.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq79619){
var G__79620 = cljs.core.first.call(null,seq79619);
var seq79619__$1 = cljs.core.next.call(null,seq79619);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__79620,seq79619__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args79623 = [];
var len__25826__auto___80166 = arguments.length;
var i__25827__auto___80167 = (0);
while(true){
if((i__25827__auto___80167 < len__25826__auto___80166)){
args79623.push((arguments[i__25827__auto___80167]));

var G__80168 = (i__25827__auto___80167 + (1));
i__25827__auto___80167 = G__80168;
continue;
} else {
}
break;
}

var G__79627 = args79623.length;
switch (G__79627) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79623.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq79624){
var G__79625 = cljs.core.first.call(null,seq79624);
var seq79624__$1 = cljs.core.next.call(null,seq79624);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__79625,seq79624__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args79628 = [];
var len__25826__auto___80170 = arguments.length;
var i__25827__auto___80171 = (0);
while(true){
if((i__25827__auto___80171 < len__25826__auto___80170)){
args79628.push((arguments[i__25827__auto___80171]));

var G__80172 = (i__25827__auto___80171 + (1));
i__25827__auto___80171 = G__80172;
continue;
} else {
}
break;
}

var G__79632 = args79628.length;
switch (G__79632) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79628.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq79629){
var G__79630 = cljs.core.first.call(null,seq79629);
var seq79629__$1 = cljs.core.next.call(null,seq79629);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__79630,seq79629__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args79633 = [];
var len__25826__auto___80174 = arguments.length;
var i__25827__auto___80175 = (0);
while(true){
if((i__25827__auto___80175 < len__25826__auto___80174)){
args79633.push((arguments[i__25827__auto___80175]));

var G__80176 = (i__25827__auto___80175 + (1));
i__25827__auto___80175 = G__80176;
continue;
} else {
}
break;
}

var G__79637 = args79633.length;
switch (G__79637) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79633.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq79634){
var G__79635 = cljs.core.first.call(null,seq79634);
var seq79634__$1 = cljs.core.next.call(null,seq79634);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__79635,seq79634__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args79638 = [];
var len__25826__auto___80178 = arguments.length;
var i__25827__auto___80179 = (0);
while(true){
if((i__25827__auto___80179 < len__25826__auto___80178)){
args79638.push((arguments[i__25827__auto___80179]));

var G__80180 = (i__25827__auto___80179 + (1));
i__25827__auto___80179 = G__80180;
continue;
} else {
}
break;
}

var G__79642 = args79638.length;
switch (G__79642) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79638.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq79639){
var G__79640 = cljs.core.first.call(null,seq79639);
var seq79639__$1 = cljs.core.next.call(null,seq79639);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__79640,seq79639__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args79643 = [];
var len__25826__auto___80182 = arguments.length;
var i__25827__auto___80183 = (0);
while(true){
if((i__25827__auto___80183 < len__25826__auto___80182)){
args79643.push((arguments[i__25827__auto___80183]));

var G__80184 = (i__25827__auto___80183 + (1));
i__25827__auto___80183 = G__80184;
continue;
} else {
}
break;
}

var G__79647 = args79643.length;
switch (G__79647) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79643.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq79644){
var G__79645 = cljs.core.first.call(null,seq79644);
var seq79644__$1 = cljs.core.next.call(null,seq79644);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__79645,seq79644__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args79648 = [];
var len__25826__auto___80186 = arguments.length;
var i__25827__auto___80187 = (0);
while(true){
if((i__25827__auto___80187 < len__25826__auto___80186)){
args79648.push((arguments[i__25827__auto___80187]));

var G__80188 = (i__25827__auto___80187 + (1));
i__25827__auto___80187 = G__80188;
continue;
} else {
}
break;
}

var G__79652 = args79648.length;
switch (G__79652) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79648.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq79649){
var G__79650 = cljs.core.first.call(null,seq79649);
var seq79649__$1 = cljs.core.next.call(null,seq79649);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__79650,seq79649__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args79653 = [];
var len__25826__auto___80190 = arguments.length;
var i__25827__auto___80191 = (0);
while(true){
if((i__25827__auto___80191 < len__25826__auto___80190)){
args79653.push((arguments[i__25827__auto___80191]));

var G__80192 = (i__25827__auto___80191 + (1));
i__25827__auto___80191 = G__80192;
continue;
} else {
}
break;
}

var G__79657 = args79653.length;
switch (G__79657) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79653.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq79654){
var G__79655 = cljs.core.first.call(null,seq79654);
var seq79654__$1 = cljs.core.next.call(null,seq79654);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__79655,seq79654__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args79658 = [];
var len__25826__auto___80194 = arguments.length;
var i__25827__auto___80195 = (0);
while(true){
if((i__25827__auto___80195 < len__25826__auto___80194)){
args79658.push((arguments[i__25827__auto___80195]));

var G__80196 = (i__25827__auto___80195 + (1));
i__25827__auto___80195 = G__80196;
continue;
} else {
}
break;
}

var G__79662 = args79658.length;
switch (G__79662) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79658.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq79659){
var G__79660 = cljs.core.first.call(null,seq79659);
var seq79659__$1 = cljs.core.next.call(null,seq79659);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__79660,seq79659__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args79663 = [];
var len__25826__auto___80198 = arguments.length;
var i__25827__auto___80199 = (0);
while(true){
if((i__25827__auto___80199 < len__25826__auto___80198)){
args79663.push((arguments[i__25827__auto___80199]));

var G__80200 = (i__25827__auto___80199 + (1));
i__25827__auto___80199 = G__80200;
continue;
} else {
}
break;
}

var G__79667 = args79663.length;
switch (G__79667) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79663.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq79664){
var G__79665 = cljs.core.first.call(null,seq79664);
var seq79664__$1 = cljs.core.next.call(null,seq79664);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__79665,seq79664__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args79668 = [];
var len__25826__auto___80202 = arguments.length;
var i__25827__auto___80203 = (0);
while(true){
if((i__25827__auto___80203 < len__25826__auto___80202)){
args79668.push((arguments[i__25827__auto___80203]));

var G__80204 = (i__25827__auto___80203 + (1));
i__25827__auto___80203 = G__80204;
continue;
} else {
}
break;
}

var G__79672 = args79668.length;
switch (G__79672) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79668.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq79669){
var G__79670 = cljs.core.first.call(null,seq79669);
var seq79669__$1 = cljs.core.next.call(null,seq79669);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__79670,seq79669__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args79673 = [];
var len__25826__auto___80206 = arguments.length;
var i__25827__auto___80207 = (0);
while(true){
if((i__25827__auto___80207 < len__25826__auto___80206)){
args79673.push((arguments[i__25827__auto___80207]));

var G__80208 = (i__25827__auto___80207 + (1));
i__25827__auto___80207 = G__80208;
continue;
} else {
}
break;
}

var G__79677 = args79673.length;
switch (G__79677) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79673.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq79674){
var G__79675 = cljs.core.first.call(null,seq79674);
var seq79674__$1 = cljs.core.next.call(null,seq79674);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__79675,seq79674__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args79678 = [];
var len__25826__auto___80210 = arguments.length;
var i__25827__auto___80211 = (0);
while(true){
if((i__25827__auto___80211 < len__25826__auto___80210)){
args79678.push((arguments[i__25827__auto___80211]));

var G__80212 = (i__25827__auto___80211 + (1));
i__25827__auto___80211 = G__80212;
continue;
} else {
}
break;
}

var G__79682 = args79678.length;
switch (G__79682) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79678.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq79679){
var G__79680 = cljs.core.first.call(null,seq79679);
var seq79679__$1 = cljs.core.next.call(null,seq79679);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__79680,seq79679__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args79683 = [];
var len__25826__auto___80214 = arguments.length;
var i__25827__auto___80215 = (0);
while(true){
if((i__25827__auto___80215 < len__25826__auto___80214)){
args79683.push((arguments[i__25827__auto___80215]));

var G__80216 = (i__25827__auto___80215 + (1));
i__25827__auto___80215 = G__80216;
continue;
} else {
}
break;
}

var G__79687 = args79683.length;
switch (G__79687) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79683.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq79684){
var G__79685 = cljs.core.first.call(null,seq79684);
var seq79684__$1 = cljs.core.next.call(null,seq79684);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__79685,seq79684__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args79688 = [];
var len__25826__auto___80218 = arguments.length;
var i__25827__auto___80219 = (0);
while(true){
if((i__25827__auto___80219 < len__25826__auto___80218)){
args79688.push((arguments[i__25827__auto___80219]));

var G__80220 = (i__25827__auto___80219 + (1));
i__25827__auto___80219 = G__80220;
continue;
} else {
}
break;
}

var G__79692 = args79688.length;
switch (G__79692) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79688.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq79689){
var G__79690 = cljs.core.first.call(null,seq79689);
var seq79689__$1 = cljs.core.next.call(null,seq79689);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__79690,seq79689__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args79693 = [];
var len__25826__auto___80222 = arguments.length;
var i__25827__auto___80223 = (0);
while(true){
if((i__25827__auto___80223 < len__25826__auto___80222)){
args79693.push((arguments[i__25827__auto___80223]));

var G__80224 = (i__25827__auto___80223 + (1));
i__25827__auto___80223 = G__80224;
continue;
} else {
}
break;
}

var G__79697 = args79693.length;
switch (G__79697) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79693.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq79694){
var G__79695 = cljs.core.first.call(null,seq79694);
var seq79694__$1 = cljs.core.next.call(null,seq79694);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__79695,seq79694__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args79698 = [];
var len__25826__auto___80226 = arguments.length;
var i__25827__auto___80227 = (0);
while(true){
if((i__25827__auto___80227 < len__25826__auto___80226)){
args79698.push((arguments[i__25827__auto___80227]));

var G__80228 = (i__25827__auto___80227 + (1));
i__25827__auto___80227 = G__80228;
continue;
} else {
}
break;
}

var G__79702 = args79698.length;
switch (G__79702) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79698.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq79699){
var G__79700 = cljs.core.first.call(null,seq79699);
var seq79699__$1 = cljs.core.next.call(null,seq79699);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__79700,seq79699__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args79703 = [];
var len__25826__auto___80230 = arguments.length;
var i__25827__auto___80231 = (0);
while(true){
if((i__25827__auto___80231 < len__25826__auto___80230)){
args79703.push((arguments[i__25827__auto___80231]));

var G__80232 = (i__25827__auto___80231 + (1));
i__25827__auto___80231 = G__80232;
continue;
} else {
}
break;
}

var G__79707 = args79703.length;
switch (G__79707) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79703.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq79704){
var G__79705 = cljs.core.first.call(null,seq79704);
var seq79704__$1 = cljs.core.next.call(null,seq79704);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__79705,seq79704__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args79708 = [];
var len__25826__auto___80234 = arguments.length;
var i__25827__auto___80235 = (0);
while(true){
if((i__25827__auto___80235 < len__25826__auto___80234)){
args79708.push((arguments[i__25827__auto___80235]));

var G__80236 = (i__25827__auto___80235 + (1));
i__25827__auto___80235 = G__80236;
continue;
} else {
}
break;
}

var G__79712 = args79708.length;
switch (G__79712) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79708.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq79709){
var G__79710 = cljs.core.first.call(null,seq79709);
var seq79709__$1 = cljs.core.next.call(null,seq79709);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__79710,seq79709__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args79713 = [];
var len__25826__auto___80238 = arguments.length;
var i__25827__auto___80239 = (0);
while(true){
if((i__25827__auto___80239 < len__25826__auto___80238)){
args79713.push((arguments[i__25827__auto___80239]));

var G__80240 = (i__25827__auto___80239 + (1));
i__25827__auto___80239 = G__80240;
continue;
} else {
}
break;
}

var G__79717 = args79713.length;
switch (G__79717) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79713.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq79714){
var G__79715 = cljs.core.first.call(null,seq79714);
var seq79714__$1 = cljs.core.next.call(null,seq79714);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__79715,seq79714__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args79718 = [];
var len__25826__auto___80242 = arguments.length;
var i__25827__auto___80243 = (0);
while(true){
if((i__25827__auto___80243 < len__25826__auto___80242)){
args79718.push((arguments[i__25827__auto___80243]));

var G__80244 = (i__25827__auto___80243 + (1));
i__25827__auto___80243 = G__80244;
continue;
} else {
}
break;
}

var G__79722 = args79718.length;
switch (G__79722) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79718.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq79719){
var G__79720 = cljs.core.first.call(null,seq79719);
var seq79719__$1 = cljs.core.next.call(null,seq79719);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__79720,seq79719__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args79723 = [];
var len__25826__auto___80246 = arguments.length;
var i__25827__auto___80247 = (0);
while(true){
if((i__25827__auto___80247 < len__25826__auto___80246)){
args79723.push((arguments[i__25827__auto___80247]));

var G__80248 = (i__25827__auto___80247 + (1));
i__25827__auto___80247 = G__80248;
continue;
} else {
}
break;
}

var G__79727 = args79723.length;
switch (G__79727) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79723.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq79724){
var G__79725 = cljs.core.first.call(null,seq79724);
var seq79724__$1 = cljs.core.next.call(null,seq79724);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__79725,seq79724__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args79728 = [];
var len__25826__auto___80250 = arguments.length;
var i__25827__auto___80251 = (0);
while(true){
if((i__25827__auto___80251 < len__25826__auto___80250)){
args79728.push((arguments[i__25827__auto___80251]));

var G__80252 = (i__25827__auto___80251 + (1));
i__25827__auto___80251 = G__80252;
continue;
} else {
}
break;
}

var G__79732 = args79728.length;
switch (G__79732) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79728.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq79729){
var G__79730 = cljs.core.first.call(null,seq79729);
var seq79729__$1 = cljs.core.next.call(null,seq79729);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__79730,seq79729__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args79733 = [];
var len__25826__auto___80254 = arguments.length;
var i__25827__auto___80255 = (0);
while(true){
if((i__25827__auto___80255 < len__25826__auto___80254)){
args79733.push((arguments[i__25827__auto___80255]));

var G__80256 = (i__25827__auto___80255 + (1));
i__25827__auto___80255 = G__80256;
continue;
} else {
}
break;
}

var G__79737 = args79733.length;
switch (G__79737) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79733.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq79734){
var G__79735 = cljs.core.first.call(null,seq79734);
var seq79734__$1 = cljs.core.next.call(null,seq79734);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__79735,seq79734__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args79738 = [];
var len__25826__auto___80258 = arguments.length;
var i__25827__auto___80259 = (0);
while(true){
if((i__25827__auto___80259 < len__25826__auto___80258)){
args79738.push((arguments[i__25827__auto___80259]));

var G__80260 = (i__25827__auto___80259 + (1));
i__25827__auto___80259 = G__80260;
continue;
} else {
}
break;
}

var G__79742 = args79738.length;
switch (G__79742) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79738.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq79739){
var G__79740 = cljs.core.first.call(null,seq79739);
var seq79739__$1 = cljs.core.next.call(null,seq79739);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__79740,seq79739__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args79743 = [];
var len__25826__auto___80262 = arguments.length;
var i__25827__auto___80263 = (0);
while(true){
if((i__25827__auto___80263 < len__25826__auto___80262)){
args79743.push((arguments[i__25827__auto___80263]));

var G__80264 = (i__25827__auto___80263 + (1));
i__25827__auto___80263 = G__80264;
continue;
} else {
}
break;
}

var G__79747 = args79743.length;
switch (G__79747) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79743.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq79744){
var G__79745 = cljs.core.first.call(null,seq79744);
var seq79744__$1 = cljs.core.next.call(null,seq79744);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__79745,seq79744__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args79748 = [];
var len__25826__auto___80266 = arguments.length;
var i__25827__auto___80267 = (0);
while(true){
if((i__25827__auto___80267 < len__25826__auto___80266)){
args79748.push((arguments[i__25827__auto___80267]));

var G__80268 = (i__25827__auto___80267 + (1));
i__25827__auto___80267 = G__80268;
continue;
} else {
}
break;
}

var G__79752 = args79748.length;
switch (G__79752) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79748.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq79749){
var G__79750 = cljs.core.first.call(null,seq79749);
var seq79749__$1 = cljs.core.next.call(null,seq79749);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__79750,seq79749__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args79753 = [];
var len__25826__auto___80270 = arguments.length;
var i__25827__auto___80271 = (0);
while(true){
if((i__25827__auto___80271 < len__25826__auto___80270)){
args79753.push((arguments[i__25827__auto___80271]));

var G__80272 = (i__25827__auto___80271 + (1));
i__25827__auto___80271 = G__80272;
continue;
} else {
}
break;
}

var G__79757 = args79753.length;
switch (G__79757) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79753.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq79754){
var G__79755 = cljs.core.first.call(null,seq79754);
var seq79754__$1 = cljs.core.next.call(null,seq79754);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__79755,seq79754__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args79758 = [];
var len__25826__auto___80274 = arguments.length;
var i__25827__auto___80275 = (0);
while(true){
if((i__25827__auto___80275 < len__25826__auto___80274)){
args79758.push((arguments[i__25827__auto___80275]));

var G__80276 = (i__25827__auto___80275 + (1));
i__25827__auto___80275 = G__80276;
continue;
} else {
}
break;
}

var G__79762 = args79758.length;
switch (G__79762) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79758.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq79759){
var G__79760 = cljs.core.first.call(null,seq79759);
var seq79759__$1 = cljs.core.next.call(null,seq79759);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__79760,seq79759__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args79763 = [];
var len__25826__auto___80278 = arguments.length;
var i__25827__auto___80279 = (0);
while(true){
if((i__25827__auto___80279 < len__25826__auto___80278)){
args79763.push((arguments[i__25827__auto___80279]));

var G__80280 = (i__25827__auto___80279 + (1));
i__25827__auto___80279 = G__80280;
continue;
} else {
}
break;
}

var G__79767 = args79763.length;
switch (G__79767) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79763.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq79764){
var G__79765 = cljs.core.first.call(null,seq79764);
var seq79764__$1 = cljs.core.next.call(null,seq79764);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__79765,seq79764__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args79768 = [];
var len__25826__auto___80282 = arguments.length;
var i__25827__auto___80283 = (0);
while(true){
if((i__25827__auto___80283 < len__25826__auto___80282)){
args79768.push((arguments[i__25827__auto___80283]));

var G__80284 = (i__25827__auto___80283 + (1));
i__25827__auto___80283 = G__80284;
continue;
} else {
}
break;
}

var G__79772 = args79768.length;
switch (G__79772) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79768.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq79769){
var G__79770 = cljs.core.first.call(null,seq79769);
var seq79769__$1 = cljs.core.next.call(null,seq79769);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__79770,seq79769__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args79773 = [];
var len__25826__auto___80286 = arguments.length;
var i__25827__auto___80287 = (0);
while(true){
if((i__25827__auto___80287 < len__25826__auto___80286)){
args79773.push((arguments[i__25827__auto___80287]));

var G__80288 = (i__25827__auto___80287 + (1));
i__25827__auto___80287 = G__80288;
continue;
} else {
}
break;
}

var G__79777 = args79773.length;
switch (G__79777) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79773.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq79774){
var G__79775 = cljs.core.first.call(null,seq79774);
var seq79774__$1 = cljs.core.next.call(null,seq79774);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__79775,seq79774__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args79778 = [];
var len__25826__auto___80290 = arguments.length;
var i__25827__auto___80291 = (0);
while(true){
if((i__25827__auto___80291 < len__25826__auto___80290)){
args79778.push((arguments[i__25827__auto___80291]));

var G__80292 = (i__25827__auto___80291 + (1));
i__25827__auto___80291 = G__80292;
continue;
} else {
}
break;
}

var G__79782 = args79778.length;
switch (G__79782) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79778.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq79779){
var G__79780 = cljs.core.first.call(null,seq79779);
var seq79779__$1 = cljs.core.next.call(null,seq79779);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__79780,seq79779__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args79783 = [];
var len__25826__auto___80294 = arguments.length;
var i__25827__auto___80295 = (0);
while(true){
if((i__25827__auto___80295 < len__25826__auto___80294)){
args79783.push((arguments[i__25827__auto___80295]));

var G__80296 = (i__25827__auto___80295 + (1));
i__25827__auto___80295 = G__80296;
continue;
} else {
}
break;
}

var G__79787 = args79783.length;
switch (G__79787) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79783.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq79784){
var G__79785 = cljs.core.first.call(null,seq79784);
var seq79784__$1 = cljs.core.next.call(null,seq79784);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__79785,seq79784__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args79788 = [];
var len__25826__auto___80298 = arguments.length;
var i__25827__auto___80299 = (0);
while(true){
if((i__25827__auto___80299 < len__25826__auto___80298)){
args79788.push((arguments[i__25827__auto___80299]));

var G__80300 = (i__25827__auto___80299 + (1));
i__25827__auto___80299 = G__80300;
continue;
} else {
}
break;
}

var G__79792 = args79788.length;
switch (G__79792) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79788.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq79789){
var G__79790 = cljs.core.first.call(null,seq79789);
var seq79789__$1 = cljs.core.next.call(null,seq79789);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__79790,seq79789__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args79793 = [];
var len__25826__auto___80302 = arguments.length;
var i__25827__auto___80303 = (0);
while(true){
if((i__25827__auto___80303 < len__25826__auto___80302)){
args79793.push((arguments[i__25827__auto___80303]));

var G__80304 = (i__25827__auto___80303 + (1));
i__25827__auto___80303 = G__80304;
continue;
} else {
}
break;
}

var G__79797 = args79793.length;
switch (G__79797) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79793.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq79794){
var G__79795 = cljs.core.first.call(null,seq79794);
var seq79794__$1 = cljs.core.next.call(null,seq79794);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__79795,seq79794__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args79798 = [];
var len__25826__auto___80306 = arguments.length;
var i__25827__auto___80307 = (0);
while(true){
if((i__25827__auto___80307 < len__25826__auto___80306)){
args79798.push((arguments[i__25827__auto___80307]));

var G__80308 = (i__25827__auto___80307 + (1));
i__25827__auto___80307 = G__80308;
continue;
} else {
}
break;
}

var G__79802 = args79798.length;
switch (G__79802) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79798.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq79799){
var G__79800 = cljs.core.first.call(null,seq79799);
var seq79799__$1 = cljs.core.next.call(null,seq79799);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__79800,seq79799__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args79803 = [];
var len__25826__auto___80310 = arguments.length;
var i__25827__auto___80311 = (0);
while(true){
if((i__25827__auto___80311 < len__25826__auto___80310)){
args79803.push((arguments[i__25827__auto___80311]));

var G__80312 = (i__25827__auto___80311 + (1));
i__25827__auto___80311 = G__80312;
continue;
} else {
}
break;
}

var G__79807 = args79803.length;
switch (G__79807) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79803.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq79804){
var G__79805 = cljs.core.first.call(null,seq79804);
var seq79804__$1 = cljs.core.next.call(null,seq79804);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__79805,seq79804__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args79808 = [];
var len__25826__auto___80314 = arguments.length;
var i__25827__auto___80315 = (0);
while(true){
if((i__25827__auto___80315 < len__25826__auto___80314)){
args79808.push((arguments[i__25827__auto___80315]));

var G__80316 = (i__25827__auto___80315 + (1));
i__25827__auto___80315 = G__80316;
continue;
} else {
}
break;
}

var G__79812 = args79808.length;
switch (G__79812) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79808.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq79809){
var G__79810 = cljs.core.first.call(null,seq79809);
var seq79809__$1 = cljs.core.next.call(null,seq79809);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__79810,seq79809__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args79813 = [];
var len__25826__auto___80318 = arguments.length;
var i__25827__auto___80319 = (0);
while(true){
if((i__25827__auto___80319 < len__25826__auto___80318)){
args79813.push((arguments[i__25827__auto___80319]));

var G__80320 = (i__25827__auto___80319 + (1));
i__25827__auto___80319 = G__80320;
continue;
} else {
}
break;
}

var G__79817 = args79813.length;
switch (G__79817) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79813.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq79814){
var G__79815 = cljs.core.first.call(null,seq79814);
var seq79814__$1 = cljs.core.next.call(null,seq79814);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__79815,seq79814__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args79818 = [];
var len__25826__auto___80322 = arguments.length;
var i__25827__auto___80323 = (0);
while(true){
if((i__25827__auto___80323 < len__25826__auto___80322)){
args79818.push((arguments[i__25827__auto___80323]));

var G__80324 = (i__25827__auto___80323 + (1));
i__25827__auto___80323 = G__80324;
continue;
} else {
}
break;
}

var G__79822 = args79818.length;
switch (G__79822) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79818.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq79819){
var G__79820 = cljs.core.first.call(null,seq79819);
var seq79819__$1 = cljs.core.next.call(null,seq79819);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__79820,seq79819__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args79823 = [];
var len__25826__auto___80326 = arguments.length;
var i__25827__auto___80327 = (0);
while(true){
if((i__25827__auto___80327 < len__25826__auto___80326)){
args79823.push((arguments[i__25827__auto___80327]));

var G__80328 = (i__25827__auto___80327 + (1));
i__25827__auto___80327 = G__80328;
continue;
} else {
}
break;
}

var G__79827 = args79823.length;
switch (G__79827) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79823.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq79824){
var G__79825 = cljs.core.first.call(null,seq79824);
var seq79824__$1 = cljs.core.next.call(null,seq79824);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__79825,seq79824__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args79828 = [];
var len__25826__auto___80330 = arguments.length;
var i__25827__auto___80331 = (0);
while(true){
if((i__25827__auto___80331 < len__25826__auto___80330)){
args79828.push((arguments[i__25827__auto___80331]));

var G__80332 = (i__25827__auto___80331 + (1));
i__25827__auto___80331 = G__80332;
continue;
} else {
}
break;
}

var G__79832 = args79828.length;
switch (G__79832) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79828.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq79829){
var G__79830 = cljs.core.first.call(null,seq79829);
var seq79829__$1 = cljs.core.next.call(null,seq79829);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__79830,seq79829__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args79833 = [];
var len__25826__auto___80334 = arguments.length;
var i__25827__auto___80335 = (0);
while(true){
if((i__25827__auto___80335 < len__25826__auto___80334)){
args79833.push((arguments[i__25827__auto___80335]));

var G__80336 = (i__25827__auto___80335 + (1));
i__25827__auto___80335 = G__80336;
continue;
} else {
}
break;
}

var G__79837 = args79833.length;
switch (G__79837) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79833.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq79834){
var G__79835 = cljs.core.first.call(null,seq79834);
var seq79834__$1 = cljs.core.next.call(null,seq79834);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__79835,seq79834__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args79838 = [];
var len__25826__auto___80338 = arguments.length;
var i__25827__auto___80339 = (0);
while(true){
if((i__25827__auto___80339 < len__25826__auto___80338)){
args79838.push((arguments[i__25827__auto___80339]));

var G__80340 = (i__25827__auto___80339 + (1));
i__25827__auto___80339 = G__80340;
continue;
} else {
}
break;
}

var G__79842 = args79838.length;
switch (G__79842) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79838.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq79839){
var G__79840 = cljs.core.first.call(null,seq79839);
var seq79839__$1 = cljs.core.next.call(null,seq79839);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__79840,seq79839__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args79843 = [];
var len__25826__auto___80342 = arguments.length;
var i__25827__auto___80343 = (0);
while(true){
if((i__25827__auto___80343 < len__25826__auto___80342)){
args79843.push((arguments[i__25827__auto___80343]));

var G__80344 = (i__25827__auto___80343 + (1));
i__25827__auto___80343 = G__80344;
continue;
} else {
}
break;
}

var G__79847 = args79843.length;
switch (G__79847) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79843.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq79844){
var G__79845 = cljs.core.first.call(null,seq79844);
var seq79844__$1 = cljs.core.next.call(null,seq79844);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__79845,seq79844__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args79848 = [];
var len__25826__auto___80346 = arguments.length;
var i__25827__auto___80347 = (0);
while(true){
if((i__25827__auto___80347 < len__25826__auto___80346)){
args79848.push((arguments[i__25827__auto___80347]));

var G__80348 = (i__25827__auto___80347 + (1));
i__25827__auto___80347 = G__80348;
continue;
} else {
}
break;
}

var G__79852 = args79848.length;
switch (G__79852) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79848.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq79849){
var G__79850 = cljs.core.first.call(null,seq79849);
var seq79849__$1 = cljs.core.next.call(null,seq79849);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__79850,seq79849__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args79853 = [];
var len__25826__auto___80350 = arguments.length;
var i__25827__auto___80351 = (0);
while(true){
if((i__25827__auto___80351 < len__25826__auto___80350)){
args79853.push((arguments[i__25827__auto___80351]));

var G__80352 = (i__25827__auto___80351 + (1));
i__25827__auto___80351 = G__80352;
continue;
} else {
}
break;
}

var G__79857 = args79853.length;
switch (G__79857) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79853.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq79854){
var G__79855 = cljs.core.first.call(null,seq79854);
var seq79854__$1 = cljs.core.next.call(null,seq79854);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__79855,seq79854__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args79393 = [];
var len__25826__auto___80354 = arguments.length;
var i__25827__auto___80355 = (0);
while(true){
if((i__25827__auto___80355 < len__25826__auto___80354)){
args79393.push((arguments[i__25827__auto___80355]));

var G__80356 = (i__25827__auto___80355 + (1));
i__25827__auto___80355 = G__80356;
continue;
} else {
}
break;
}

var G__79397 = args79393.length;
switch (G__79397) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args79393.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37403__auto__,children__37404__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__37403__auto__,children__37404__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq79394){
var G__79395 = cljs.core.first.call(null,seq79394);
var seq79394__$1 = cljs.core.next.call(null,seq79394);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__79395,seq79394__$1);
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

//# sourceMappingURL=dom.js.map?rel=1478402662033