// Compiled by ClojureScript 1.7.122 {}
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
if(cljs.core.truth_((function (){var or__19201__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__19201__auto__){
return or__19201__auto__;
} else {
var G__34347 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__34347) {
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
var G__34350 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__34350) {
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
om_tools.dom.format_opts;
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34354){
var vec__34355 = p__34354;
var k = cljs.core.nth.call(null,vec__34355,(0),null);
var v = cljs.core.nth.call(null,vec__34355,(1),null);
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
return (function (){var or__19201__auto__ = React.isValidElement;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
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
var vec__34357 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__34357,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__34357,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args34358 = [];
var len__20259__auto___34983 = arguments.length;
var i__20260__auto___34984 = (0);
while(true){
if((i__20260__auto___34984 < len__20259__auto___34983)){
args34358.push((arguments[i__20260__auto___34984]));

var G__34985 = (i__20260__auto___34984 + (1));
i__20260__auto___34984 = G__34985;
continue;
} else {
}
break;
}

var G__34362 = args34358.length;
switch (G__34362) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34358.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq34359){
var G__34360 = cljs.core.first.call(null,seq34359);
var seq34359__$1 = cljs.core.next.call(null,seq34359);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__34360,seq34359__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args34363 = [];
var len__20259__auto___34987 = arguments.length;
var i__20260__auto___34988 = (0);
while(true){
if((i__20260__auto___34988 < len__20259__auto___34987)){
args34363.push((arguments[i__20260__auto___34988]));

var G__34989 = (i__20260__auto___34988 + (1));
i__20260__auto___34988 = G__34989;
continue;
} else {
}
break;
}

var G__34367 = args34363.length;
switch (G__34367) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34363.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq34364){
var G__34365 = cljs.core.first.call(null,seq34364);
var seq34364__$1 = cljs.core.next.call(null,seq34364);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__34365,seq34364__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args34368 = [];
var len__20259__auto___34991 = arguments.length;
var i__20260__auto___34992 = (0);
while(true){
if((i__20260__auto___34992 < len__20259__auto___34991)){
args34368.push((arguments[i__20260__auto___34992]));

var G__34993 = (i__20260__auto___34992 + (1));
i__20260__auto___34992 = G__34993;
continue;
} else {
}
break;
}

var G__34372 = args34368.length;
switch (G__34372) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34368.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq34369){
var G__34370 = cljs.core.first.call(null,seq34369);
var seq34369__$1 = cljs.core.next.call(null,seq34369);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__34370,seq34369__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args34373 = [];
var len__20259__auto___34995 = arguments.length;
var i__20260__auto___34996 = (0);
while(true){
if((i__20260__auto___34996 < len__20259__auto___34995)){
args34373.push((arguments[i__20260__auto___34996]));

var G__34997 = (i__20260__auto___34996 + (1));
i__20260__auto___34996 = G__34997;
continue;
} else {
}
break;
}

var G__34377 = args34373.length;
switch (G__34377) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34373.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq34374){
var G__34375 = cljs.core.first.call(null,seq34374);
var seq34374__$1 = cljs.core.next.call(null,seq34374);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__34375,seq34374__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args34378 = [];
var len__20259__auto___34999 = arguments.length;
var i__20260__auto___35000 = (0);
while(true){
if((i__20260__auto___35000 < len__20259__auto___34999)){
args34378.push((arguments[i__20260__auto___35000]));

var G__35001 = (i__20260__auto___35000 + (1));
i__20260__auto___35000 = G__35001;
continue;
} else {
}
break;
}

var G__34382 = args34378.length;
switch (G__34382) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34378.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq34379){
var G__34380 = cljs.core.first.call(null,seq34379);
var seq34379__$1 = cljs.core.next.call(null,seq34379);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__34380,seq34379__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args34383 = [];
var len__20259__auto___35003 = arguments.length;
var i__20260__auto___35004 = (0);
while(true){
if((i__20260__auto___35004 < len__20259__auto___35003)){
args34383.push((arguments[i__20260__auto___35004]));

var G__35005 = (i__20260__auto___35004 + (1));
i__20260__auto___35004 = G__35005;
continue;
} else {
}
break;
}

var G__34387 = args34383.length;
switch (G__34387) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34383.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq34384){
var G__34385 = cljs.core.first.call(null,seq34384);
var seq34384__$1 = cljs.core.next.call(null,seq34384);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__34385,seq34384__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args34388 = [];
var len__20259__auto___35007 = arguments.length;
var i__20260__auto___35008 = (0);
while(true){
if((i__20260__auto___35008 < len__20259__auto___35007)){
args34388.push((arguments[i__20260__auto___35008]));

var G__35009 = (i__20260__auto___35008 + (1));
i__20260__auto___35008 = G__35009;
continue;
} else {
}
break;
}

var G__34392 = args34388.length;
switch (G__34392) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34388.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq34389){
var G__34390 = cljs.core.first.call(null,seq34389);
var seq34389__$1 = cljs.core.next.call(null,seq34389);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__34390,seq34389__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args34393 = [];
var len__20259__auto___35011 = arguments.length;
var i__20260__auto___35012 = (0);
while(true){
if((i__20260__auto___35012 < len__20259__auto___35011)){
args34393.push((arguments[i__20260__auto___35012]));

var G__35013 = (i__20260__auto___35012 + (1));
i__20260__auto___35012 = G__35013;
continue;
} else {
}
break;
}

var G__34397 = args34393.length;
switch (G__34397) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34393.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq34394){
var G__34395 = cljs.core.first.call(null,seq34394);
var seq34394__$1 = cljs.core.next.call(null,seq34394);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__34395,seq34394__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args34398 = [];
var len__20259__auto___35015 = arguments.length;
var i__20260__auto___35016 = (0);
while(true){
if((i__20260__auto___35016 < len__20259__auto___35015)){
args34398.push((arguments[i__20260__auto___35016]));

var G__35017 = (i__20260__auto___35016 + (1));
i__20260__auto___35016 = G__35017;
continue;
} else {
}
break;
}

var G__34402 = args34398.length;
switch (G__34402) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34398.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq34399){
var G__34400 = cljs.core.first.call(null,seq34399);
var seq34399__$1 = cljs.core.next.call(null,seq34399);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__34400,seq34399__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args34403 = [];
var len__20259__auto___35019 = arguments.length;
var i__20260__auto___35020 = (0);
while(true){
if((i__20260__auto___35020 < len__20259__auto___35019)){
args34403.push((arguments[i__20260__auto___35020]));

var G__35021 = (i__20260__auto___35020 + (1));
i__20260__auto___35020 = G__35021;
continue;
} else {
}
break;
}

var G__34407 = args34403.length;
switch (G__34407) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34403.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq34404){
var G__34405 = cljs.core.first.call(null,seq34404);
var seq34404__$1 = cljs.core.next.call(null,seq34404);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__34405,seq34404__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args34408 = [];
var len__20259__auto___35023 = arguments.length;
var i__20260__auto___35024 = (0);
while(true){
if((i__20260__auto___35024 < len__20259__auto___35023)){
args34408.push((arguments[i__20260__auto___35024]));

var G__35025 = (i__20260__auto___35024 + (1));
i__20260__auto___35024 = G__35025;
continue;
} else {
}
break;
}

var G__34412 = args34408.length;
switch (G__34412) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34408.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq34409){
var G__34410 = cljs.core.first.call(null,seq34409);
var seq34409__$1 = cljs.core.next.call(null,seq34409);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__34410,seq34409__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args34413 = [];
var len__20259__auto___35027 = arguments.length;
var i__20260__auto___35028 = (0);
while(true){
if((i__20260__auto___35028 < len__20259__auto___35027)){
args34413.push((arguments[i__20260__auto___35028]));

var G__35029 = (i__20260__auto___35028 + (1));
i__20260__auto___35028 = G__35029;
continue;
} else {
}
break;
}

var G__34417 = args34413.length;
switch (G__34417) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34413.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq34414){
var G__34415 = cljs.core.first.call(null,seq34414);
var seq34414__$1 = cljs.core.next.call(null,seq34414);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__34415,seq34414__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args34418 = [];
var len__20259__auto___35031 = arguments.length;
var i__20260__auto___35032 = (0);
while(true){
if((i__20260__auto___35032 < len__20259__auto___35031)){
args34418.push((arguments[i__20260__auto___35032]));

var G__35033 = (i__20260__auto___35032 + (1));
i__20260__auto___35032 = G__35033;
continue;
} else {
}
break;
}

var G__34422 = args34418.length;
switch (G__34422) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34418.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq34419){
var G__34420 = cljs.core.first.call(null,seq34419);
var seq34419__$1 = cljs.core.next.call(null,seq34419);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__34420,seq34419__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args34423 = [];
var len__20259__auto___35035 = arguments.length;
var i__20260__auto___35036 = (0);
while(true){
if((i__20260__auto___35036 < len__20259__auto___35035)){
args34423.push((arguments[i__20260__auto___35036]));

var G__35037 = (i__20260__auto___35036 + (1));
i__20260__auto___35036 = G__35037;
continue;
} else {
}
break;
}

var G__34427 = args34423.length;
switch (G__34427) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34423.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq34424){
var G__34425 = cljs.core.first.call(null,seq34424);
var seq34424__$1 = cljs.core.next.call(null,seq34424);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__34425,seq34424__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args34428 = [];
var len__20259__auto___35039 = arguments.length;
var i__20260__auto___35040 = (0);
while(true){
if((i__20260__auto___35040 < len__20259__auto___35039)){
args34428.push((arguments[i__20260__auto___35040]));

var G__35041 = (i__20260__auto___35040 + (1));
i__20260__auto___35040 = G__35041;
continue;
} else {
}
break;
}

var G__34432 = args34428.length;
switch (G__34432) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34428.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq34429){
var G__34430 = cljs.core.first.call(null,seq34429);
var seq34429__$1 = cljs.core.next.call(null,seq34429);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__34430,seq34429__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args34433 = [];
var len__20259__auto___35043 = arguments.length;
var i__20260__auto___35044 = (0);
while(true){
if((i__20260__auto___35044 < len__20259__auto___35043)){
args34433.push((arguments[i__20260__auto___35044]));

var G__35045 = (i__20260__auto___35044 + (1));
i__20260__auto___35044 = G__35045;
continue;
} else {
}
break;
}

var G__34437 = args34433.length;
switch (G__34437) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34433.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq34434){
var G__34435 = cljs.core.first.call(null,seq34434);
var seq34434__$1 = cljs.core.next.call(null,seq34434);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__34435,seq34434__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args34438 = [];
var len__20259__auto___35047 = arguments.length;
var i__20260__auto___35048 = (0);
while(true){
if((i__20260__auto___35048 < len__20259__auto___35047)){
args34438.push((arguments[i__20260__auto___35048]));

var G__35049 = (i__20260__auto___35048 + (1));
i__20260__auto___35048 = G__35049;
continue;
} else {
}
break;
}

var G__34442 = args34438.length;
switch (G__34442) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34438.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq34439){
var G__34440 = cljs.core.first.call(null,seq34439);
var seq34439__$1 = cljs.core.next.call(null,seq34439);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__34440,seq34439__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args34443 = [];
var len__20259__auto___35051 = arguments.length;
var i__20260__auto___35052 = (0);
while(true){
if((i__20260__auto___35052 < len__20259__auto___35051)){
args34443.push((arguments[i__20260__auto___35052]));

var G__35053 = (i__20260__auto___35052 + (1));
i__20260__auto___35052 = G__35053;
continue;
} else {
}
break;
}

var G__34447 = args34443.length;
switch (G__34447) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34443.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq34444){
var G__34445 = cljs.core.first.call(null,seq34444);
var seq34444__$1 = cljs.core.next.call(null,seq34444);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__34445,seq34444__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args34448 = [];
var len__20259__auto___35055 = arguments.length;
var i__20260__auto___35056 = (0);
while(true){
if((i__20260__auto___35056 < len__20259__auto___35055)){
args34448.push((arguments[i__20260__auto___35056]));

var G__35057 = (i__20260__auto___35056 + (1));
i__20260__auto___35056 = G__35057;
continue;
} else {
}
break;
}

var G__34452 = args34448.length;
switch (G__34452) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34448.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq34449){
var G__34450 = cljs.core.first.call(null,seq34449);
var seq34449__$1 = cljs.core.next.call(null,seq34449);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__34450,seq34449__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args34453 = [];
var len__20259__auto___35059 = arguments.length;
var i__20260__auto___35060 = (0);
while(true){
if((i__20260__auto___35060 < len__20259__auto___35059)){
args34453.push((arguments[i__20260__auto___35060]));

var G__35061 = (i__20260__auto___35060 + (1));
i__20260__auto___35060 = G__35061;
continue;
} else {
}
break;
}

var G__34457 = args34453.length;
switch (G__34457) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34453.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq34454){
var G__34455 = cljs.core.first.call(null,seq34454);
var seq34454__$1 = cljs.core.next.call(null,seq34454);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__34455,seq34454__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args34458 = [];
var len__20259__auto___35063 = arguments.length;
var i__20260__auto___35064 = (0);
while(true){
if((i__20260__auto___35064 < len__20259__auto___35063)){
args34458.push((arguments[i__20260__auto___35064]));

var G__35065 = (i__20260__auto___35064 + (1));
i__20260__auto___35064 = G__35065;
continue;
} else {
}
break;
}

var G__34462 = args34458.length;
switch (G__34462) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34458.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq34459){
var G__34460 = cljs.core.first.call(null,seq34459);
var seq34459__$1 = cljs.core.next.call(null,seq34459);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__34460,seq34459__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args34463 = [];
var len__20259__auto___35067 = arguments.length;
var i__20260__auto___35068 = (0);
while(true){
if((i__20260__auto___35068 < len__20259__auto___35067)){
args34463.push((arguments[i__20260__auto___35068]));

var G__35069 = (i__20260__auto___35068 + (1));
i__20260__auto___35068 = G__35069;
continue;
} else {
}
break;
}

var G__34467 = args34463.length;
switch (G__34467) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34463.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq34464){
var G__34465 = cljs.core.first.call(null,seq34464);
var seq34464__$1 = cljs.core.next.call(null,seq34464);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__34465,seq34464__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args34468 = [];
var len__20259__auto___35071 = arguments.length;
var i__20260__auto___35072 = (0);
while(true){
if((i__20260__auto___35072 < len__20259__auto___35071)){
args34468.push((arguments[i__20260__auto___35072]));

var G__35073 = (i__20260__auto___35072 + (1));
i__20260__auto___35072 = G__35073;
continue;
} else {
}
break;
}

var G__34472 = args34468.length;
switch (G__34472) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34468.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq34469){
var G__34470 = cljs.core.first.call(null,seq34469);
var seq34469__$1 = cljs.core.next.call(null,seq34469);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__34470,seq34469__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args34473 = [];
var len__20259__auto___35075 = arguments.length;
var i__20260__auto___35076 = (0);
while(true){
if((i__20260__auto___35076 < len__20259__auto___35075)){
args34473.push((arguments[i__20260__auto___35076]));

var G__35077 = (i__20260__auto___35076 + (1));
i__20260__auto___35076 = G__35077;
continue;
} else {
}
break;
}

var G__34477 = args34473.length;
switch (G__34477) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34473.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq34474){
var G__34475 = cljs.core.first.call(null,seq34474);
var seq34474__$1 = cljs.core.next.call(null,seq34474);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__34475,seq34474__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args34478 = [];
var len__20259__auto___35079 = arguments.length;
var i__20260__auto___35080 = (0);
while(true){
if((i__20260__auto___35080 < len__20259__auto___35079)){
args34478.push((arguments[i__20260__auto___35080]));

var G__35081 = (i__20260__auto___35080 + (1));
i__20260__auto___35080 = G__35081;
continue;
} else {
}
break;
}

var G__34482 = args34478.length;
switch (G__34482) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34478.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq34479){
var G__34480 = cljs.core.first.call(null,seq34479);
var seq34479__$1 = cljs.core.next.call(null,seq34479);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__34480,seq34479__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args34483 = [];
var len__20259__auto___35083 = arguments.length;
var i__20260__auto___35084 = (0);
while(true){
if((i__20260__auto___35084 < len__20259__auto___35083)){
args34483.push((arguments[i__20260__auto___35084]));

var G__35085 = (i__20260__auto___35084 + (1));
i__20260__auto___35084 = G__35085;
continue;
} else {
}
break;
}

var G__34487 = args34483.length;
switch (G__34487) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34483.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq34484){
var G__34485 = cljs.core.first.call(null,seq34484);
var seq34484__$1 = cljs.core.next.call(null,seq34484);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__34485,seq34484__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args34488 = [];
var len__20259__auto___35087 = arguments.length;
var i__20260__auto___35088 = (0);
while(true){
if((i__20260__auto___35088 < len__20259__auto___35087)){
args34488.push((arguments[i__20260__auto___35088]));

var G__35089 = (i__20260__auto___35088 + (1));
i__20260__auto___35088 = G__35089;
continue;
} else {
}
break;
}

var G__34492 = args34488.length;
switch (G__34492) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34488.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq34489){
var G__34490 = cljs.core.first.call(null,seq34489);
var seq34489__$1 = cljs.core.next.call(null,seq34489);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__34490,seq34489__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args34493 = [];
var len__20259__auto___35091 = arguments.length;
var i__20260__auto___35092 = (0);
while(true){
if((i__20260__auto___35092 < len__20259__auto___35091)){
args34493.push((arguments[i__20260__auto___35092]));

var G__35093 = (i__20260__auto___35092 + (1));
i__20260__auto___35092 = G__35093;
continue;
} else {
}
break;
}

var G__34497 = args34493.length;
switch (G__34497) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34493.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq34494){
var G__34495 = cljs.core.first.call(null,seq34494);
var seq34494__$1 = cljs.core.next.call(null,seq34494);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__34495,seq34494__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args34498 = [];
var len__20259__auto___35095 = arguments.length;
var i__20260__auto___35096 = (0);
while(true){
if((i__20260__auto___35096 < len__20259__auto___35095)){
args34498.push((arguments[i__20260__auto___35096]));

var G__35097 = (i__20260__auto___35096 + (1));
i__20260__auto___35096 = G__35097;
continue;
} else {
}
break;
}

var G__34502 = args34498.length;
switch (G__34502) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34498.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq34499){
var G__34500 = cljs.core.first.call(null,seq34499);
var seq34499__$1 = cljs.core.next.call(null,seq34499);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__34500,seq34499__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args34503 = [];
var len__20259__auto___35099 = arguments.length;
var i__20260__auto___35100 = (0);
while(true){
if((i__20260__auto___35100 < len__20259__auto___35099)){
args34503.push((arguments[i__20260__auto___35100]));

var G__35101 = (i__20260__auto___35100 + (1));
i__20260__auto___35100 = G__35101;
continue;
} else {
}
break;
}

var G__34507 = args34503.length;
switch (G__34507) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34503.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq34504){
var G__34505 = cljs.core.first.call(null,seq34504);
var seq34504__$1 = cljs.core.next.call(null,seq34504);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__34505,seq34504__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args34508 = [];
var len__20259__auto___35103 = arguments.length;
var i__20260__auto___35104 = (0);
while(true){
if((i__20260__auto___35104 < len__20259__auto___35103)){
args34508.push((arguments[i__20260__auto___35104]));

var G__35105 = (i__20260__auto___35104 + (1));
i__20260__auto___35104 = G__35105;
continue;
} else {
}
break;
}

var G__34512 = args34508.length;
switch (G__34512) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34508.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq34509){
var G__34510 = cljs.core.first.call(null,seq34509);
var seq34509__$1 = cljs.core.next.call(null,seq34509);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__34510,seq34509__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args34513 = [];
var len__20259__auto___35107 = arguments.length;
var i__20260__auto___35108 = (0);
while(true){
if((i__20260__auto___35108 < len__20259__auto___35107)){
args34513.push((arguments[i__20260__auto___35108]));

var G__35109 = (i__20260__auto___35108 + (1));
i__20260__auto___35108 = G__35109;
continue;
} else {
}
break;
}

var G__34517 = args34513.length;
switch (G__34517) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34513.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq34514){
var G__34515 = cljs.core.first.call(null,seq34514);
var seq34514__$1 = cljs.core.next.call(null,seq34514);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__34515,seq34514__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args34523 = [];
var len__20259__auto___35111 = arguments.length;
var i__20260__auto___35112 = (0);
while(true){
if((i__20260__auto___35112 < len__20259__auto___35111)){
args34523.push((arguments[i__20260__auto___35112]));

var G__35113 = (i__20260__auto___35112 + (1));
i__20260__auto___35112 = G__35113;
continue;
} else {
}
break;
}

var G__34527 = args34523.length;
switch (G__34527) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34523.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq34524){
var G__34525 = cljs.core.first.call(null,seq34524);
var seq34524__$1 = cljs.core.next.call(null,seq34524);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__34525,seq34524__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args34528 = [];
var len__20259__auto___35115 = arguments.length;
var i__20260__auto___35116 = (0);
while(true){
if((i__20260__auto___35116 < len__20259__auto___35115)){
args34528.push((arguments[i__20260__auto___35116]));

var G__35117 = (i__20260__auto___35116 + (1));
i__20260__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var G__34532 = args34528.length;
switch (G__34532) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34528.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq34529){
var G__34530 = cljs.core.first.call(null,seq34529);
var seq34529__$1 = cljs.core.next.call(null,seq34529);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__34530,seq34529__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args34533 = [];
var len__20259__auto___35119 = arguments.length;
var i__20260__auto___35120 = (0);
while(true){
if((i__20260__auto___35120 < len__20259__auto___35119)){
args34533.push((arguments[i__20260__auto___35120]));

var G__35121 = (i__20260__auto___35120 + (1));
i__20260__auto___35120 = G__35121;
continue;
} else {
}
break;
}

var G__34537 = args34533.length;
switch (G__34537) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34533.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq34534){
var G__34535 = cljs.core.first.call(null,seq34534);
var seq34534__$1 = cljs.core.next.call(null,seq34534);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__34535,seq34534__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args34538 = [];
var len__20259__auto___35123 = arguments.length;
var i__20260__auto___35124 = (0);
while(true){
if((i__20260__auto___35124 < len__20259__auto___35123)){
args34538.push((arguments[i__20260__auto___35124]));

var G__35125 = (i__20260__auto___35124 + (1));
i__20260__auto___35124 = G__35125;
continue;
} else {
}
break;
}

var G__34542 = args34538.length;
switch (G__34542) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34538.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq34539){
var G__34540 = cljs.core.first.call(null,seq34539);
var seq34539__$1 = cljs.core.next.call(null,seq34539);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__34540,seq34539__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args34543 = [];
var len__20259__auto___35127 = arguments.length;
var i__20260__auto___35128 = (0);
while(true){
if((i__20260__auto___35128 < len__20259__auto___35127)){
args34543.push((arguments[i__20260__auto___35128]));

var G__35129 = (i__20260__auto___35128 + (1));
i__20260__auto___35128 = G__35129;
continue;
} else {
}
break;
}

var G__34547 = args34543.length;
switch (G__34547) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34543.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq34544){
var G__34545 = cljs.core.first.call(null,seq34544);
var seq34544__$1 = cljs.core.next.call(null,seq34544);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__34545,seq34544__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args34548 = [];
var len__20259__auto___35131 = arguments.length;
var i__20260__auto___35132 = (0);
while(true){
if((i__20260__auto___35132 < len__20259__auto___35131)){
args34548.push((arguments[i__20260__auto___35132]));

var G__35133 = (i__20260__auto___35132 + (1));
i__20260__auto___35132 = G__35133;
continue;
} else {
}
break;
}

var G__34552 = args34548.length;
switch (G__34552) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34548.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq34549){
var G__34550 = cljs.core.first.call(null,seq34549);
var seq34549__$1 = cljs.core.next.call(null,seq34549);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__34550,seq34549__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args34553 = [];
var len__20259__auto___35135 = arguments.length;
var i__20260__auto___35136 = (0);
while(true){
if((i__20260__auto___35136 < len__20259__auto___35135)){
args34553.push((arguments[i__20260__auto___35136]));

var G__35137 = (i__20260__auto___35136 + (1));
i__20260__auto___35136 = G__35137;
continue;
} else {
}
break;
}

var G__34557 = args34553.length;
switch (G__34557) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34553.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq34554){
var G__34555 = cljs.core.first.call(null,seq34554);
var seq34554__$1 = cljs.core.next.call(null,seq34554);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__34555,seq34554__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args34558 = [];
var len__20259__auto___35139 = arguments.length;
var i__20260__auto___35140 = (0);
while(true){
if((i__20260__auto___35140 < len__20259__auto___35139)){
args34558.push((arguments[i__20260__auto___35140]));

var G__35141 = (i__20260__auto___35140 + (1));
i__20260__auto___35140 = G__35141;
continue;
} else {
}
break;
}

var G__34562 = args34558.length;
switch (G__34562) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34558.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq34559){
var G__34560 = cljs.core.first.call(null,seq34559);
var seq34559__$1 = cljs.core.next.call(null,seq34559);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__34560,seq34559__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args34563 = [];
var len__20259__auto___35143 = arguments.length;
var i__20260__auto___35144 = (0);
while(true){
if((i__20260__auto___35144 < len__20259__auto___35143)){
args34563.push((arguments[i__20260__auto___35144]));

var G__35145 = (i__20260__auto___35144 + (1));
i__20260__auto___35144 = G__35145;
continue;
} else {
}
break;
}

var G__34567 = args34563.length;
switch (G__34567) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34563.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq34564){
var G__34565 = cljs.core.first.call(null,seq34564);
var seq34564__$1 = cljs.core.next.call(null,seq34564);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__34565,seq34564__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args34568 = [];
var len__20259__auto___35147 = arguments.length;
var i__20260__auto___35148 = (0);
while(true){
if((i__20260__auto___35148 < len__20259__auto___35147)){
args34568.push((arguments[i__20260__auto___35148]));

var G__35149 = (i__20260__auto___35148 + (1));
i__20260__auto___35148 = G__35149;
continue;
} else {
}
break;
}

var G__34572 = args34568.length;
switch (G__34572) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34568.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq34569){
var G__34570 = cljs.core.first.call(null,seq34569);
var seq34569__$1 = cljs.core.next.call(null,seq34569);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__34570,seq34569__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args34573 = [];
var len__20259__auto___35151 = arguments.length;
var i__20260__auto___35152 = (0);
while(true){
if((i__20260__auto___35152 < len__20259__auto___35151)){
args34573.push((arguments[i__20260__auto___35152]));

var G__35153 = (i__20260__auto___35152 + (1));
i__20260__auto___35152 = G__35153;
continue;
} else {
}
break;
}

var G__34577 = args34573.length;
switch (G__34577) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34573.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq34574){
var G__34575 = cljs.core.first.call(null,seq34574);
var seq34574__$1 = cljs.core.next.call(null,seq34574);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__34575,seq34574__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args34578 = [];
var len__20259__auto___35155 = arguments.length;
var i__20260__auto___35156 = (0);
while(true){
if((i__20260__auto___35156 < len__20259__auto___35155)){
args34578.push((arguments[i__20260__auto___35156]));

var G__35157 = (i__20260__auto___35156 + (1));
i__20260__auto___35156 = G__35157;
continue;
} else {
}
break;
}

var G__34582 = args34578.length;
switch (G__34582) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34578.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq34579){
var G__34580 = cljs.core.first.call(null,seq34579);
var seq34579__$1 = cljs.core.next.call(null,seq34579);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__34580,seq34579__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args34583 = [];
var len__20259__auto___35159 = arguments.length;
var i__20260__auto___35160 = (0);
while(true){
if((i__20260__auto___35160 < len__20259__auto___35159)){
args34583.push((arguments[i__20260__auto___35160]));

var G__35161 = (i__20260__auto___35160 + (1));
i__20260__auto___35160 = G__35161;
continue;
} else {
}
break;
}

var G__34587 = args34583.length;
switch (G__34587) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34583.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq34584){
var G__34585 = cljs.core.first.call(null,seq34584);
var seq34584__$1 = cljs.core.next.call(null,seq34584);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__34585,seq34584__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args34588 = [];
var len__20259__auto___35163 = arguments.length;
var i__20260__auto___35164 = (0);
while(true){
if((i__20260__auto___35164 < len__20259__auto___35163)){
args34588.push((arguments[i__20260__auto___35164]));

var G__35165 = (i__20260__auto___35164 + (1));
i__20260__auto___35164 = G__35165;
continue;
} else {
}
break;
}

var G__34592 = args34588.length;
switch (G__34592) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34588.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq34589){
var G__34590 = cljs.core.first.call(null,seq34589);
var seq34589__$1 = cljs.core.next.call(null,seq34589);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__34590,seq34589__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args34593 = [];
var len__20259__auto___35167 = arguments.length;
var i__20260__auto___35168 = (0);
while(true){
if((i__20260__auto___35168 < len__20259__auto___35167)){
args34593.push((arguments[i__20260__auto___35168]));

var G__35169 = (i__20260__auto___35168 + (1));
i__20260__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var G__34597 = args34593.length;
switch (G__34597) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34593.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq34594){
var G__34595 = cljs.core.first.call(null,seq34594);
var seq34594__$1 = cljs.core.next.call(null,seq34594);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__34595,seq34594__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args34598 = [];
var len__20259__auto___35171 = arguments.length;
var i__20260__auto___35172 = (0);
while(true){
if((i__20260__auto___35172 < len__20259__auto___35171)){
args34598.push((arguments[i__20260__auto___35172]));

var G__35173 = (i__20260__auto___35172 + (1));
i__20260__auto___35172 = G__35173;
continue;
} else {
}
break;
}

var G__34602 = args34598.length;
switch (G__34602) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34598.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq34599){
var G__34600 = cljs.core.first.call(null,seq34599);
var seq34599__$1 = cljs.core.next.call(null,seq34599);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__34600,seq34599__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args34603 = [];
var len__20259__auto___35175 = arguments.length;
var i__20260__auto___35176 = (0);
while(true){
if((i__20260__auto___35176 < len__20259__auto___35175)){
args34603.push((arguments[i__20260__auto___35176]));

var G__35177 = (i__20260__auto___35176 + (1));
i__20260__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var G__34607 = args34603.length;
switch (G__34607) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34603.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq34604){
var G__34605 = cljs.core.first.call(null,seq34604);
var seq34604__$1 = cljs.core.next.call(null,seq34604);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__34605,seq34604__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args34608 = [];
var len__20259__auto___35179 = arguments.length;
var i__20260__auto___35180 = (0);
while(true){
if((i__20260__auto___35180 < len__20259__auto___35179)){
args34608.push((arguments[i__20260__auto___35180]));

var G__35181 = (i__20260__auto___35180 + (1));
i__20260__auto___35180 = G__35181;
continue;
} else {
}
break;
}

var G__34612 = args34608.length;
switch (G__34612) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34608.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq34609){
var G__34610 = cljs.core.first.call(null,seq34609);
var seq34609__$1 = cljs.core.next.call(null,seq34609);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__34610,seq34609__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args34613 = [];
var len__20259__auto___35183 = arguments.length;
var i__20260__auto___35184 = (0);
while(true){
if((i__20260__auto___35184 < len__20259__auto___35183)){
args34613.push((arguments[i__20260__auto___35184]));

var G__35185 = (i__20260__auto___35184 + (1));
i__20260__auto___35184 = G__35185;
continue;
} else {
}
break;
}

var G__34617 = args34613.length;
switch (G__34617) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34613.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq34614){
var G__34615 = cljs.core.first.call(null,seq34614);
var seq34614__$1 = cljs.core.next.call(null,seq34614);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__34615,seq34614__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args34618 = [];
var len__20259__auto___35187 = arguments.length;
var i__20260__auto___35188 = (0);
while(true){
if((i__20260__auto___35188 < len__20259__auto___35187)){
args34618.push((arguments[i__20260__auto___35188]));

var G__35189 = (i__20260__auto___35188 + (1));
i__20260__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var G__34622 = args34618.length;
switch (G__34622) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34618.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq34619){
var G__34620 = cljs.core.first.call(null,seq34619);
var seq34619__$1 = cljs.core.next.call(null,seq34619);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__34620,seq34619__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args34623 = [];
var len__20259__auto___35191 = arguments.length;
var i__20260__auto___35192 = (0);
while(true){
if((i__20260__auto___35192 < len__20259__auto___35191)){
args34623.push((arguments[i__20260__auto___35192]));

var G__35193 = (i__20260__auto___35192 + (1));
i__20260__auto___35192 = G__35193;
continue;
} else {
}
break;
}

var G__34627 = args34623.length;
switch (G__34627) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34623.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq34624){
var G__34625 = cljs.core.first.call(null,seq34624);
var seq34624__$1 = cljs.core.next.call(null,seq34624);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__34625,seq34624__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args34628 = [];
var len__20259__auto___35195 = arguments.length;
var i__20260__auto___35196 = (0);
while(true){
if((i__20260__auto___35196 < len__20259__auto___35195)){
args34628.push((arguments[i__20260__auto___35196]));

var G__35197 = (i__20260__auto___35196 + (1));
i__20260__auto___35196 = G__35197;
continue;
} else {
}
break;
}

var G__34632 = args34628.length;
switch (G__34632) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34628.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq34629){
var G__34630 = cljs.core.first.call(null,seq34629);
var seq34629__$1 = cljs.core.next.call(null,seq34629);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__34630,seq34629__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args34633 = [];
var len__20259__auto___35199 = arguments.length;
var i__20260__auto___35200 = (0);
while(true){
if((i__20260__auto___35200 < len__20259__auto___35199)){
args34633.push((arguments[i__20260__auto___35200]));

var G__35201 = (i__20260__auto___35200 + (1));
i__20260__auto___35200 = G__35201;
continue;
} else {
}
break;
}

var G__34637 = args34633.length;
switch (G__34637) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34633.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq34634){
var G__34635 = cljs.core.first.call(null,seq34634);
var seq34634__$1 = cljs.core.next.call(null,seq34634);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__34635,seq34634__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args34638 = [];
var len__20259__auto___35203 = arguments.length;
var i__20260__auto___35204 = (0);
while(true){
if((i__20260__auto___35204 < len__20259__auto___35203)){
args34638.push((arguments[i__20260__auto___35204]));

var G__35205 = (i__20260__auto___35204 + (1));
i__20260__auto___35204 = G__35205;
continue;
} else {
}
break;
}

var G__34642 = args34638.length;
switch (G__34642) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34638.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq34639){
var G__34640 = cljs.core.first.call(null,seq34639);
var seq34639__$1 = cljs.core.next.call(null,seq34639);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__34640,seq34639__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args34643 = [];
var len__20259__auto___35207 = arguments.length;
var i__20260__auto___35208 = (0);
while(true){
if((i__20260__auto___35208 < len__20259__auto___35207)){
args34643.push((arguments[i__20260__auto___35208]));

var G__35209 = (i__20260__auto___35208 + (1));
i__20260__auto___35208 = G__35209;
continue;
} else {
}
break;
}

var G__34647 = args34643.length;
switch (G__34647) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34643.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq34644){
var G__34645 = cljs.core.first.call(null,seq34644);
var seq34644__$1 = cljs.core.next.call(null,seq34644);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__34645,seq34644__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args34648 = [];
var len__20259__auto___35211 = arguments.length;
var i__20260__auto___35212 = (0);
while(true){
if((i__20260__auto___35212 < len__20259__auto___35211)){
args34648.push((arguments[i__20260__auto___35212]));

var G__35213 = (i__20260__auto___35212 + (1));
i__20260__auto___35212 = G__35213;
continue;
} else {
}
break;
}

var G__34652 = args34648.length;
switch (G__34652) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34648.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq34649){
var G__34650 = cljs.core.first.call(null,seq34649);
var seq34649__$1 = cljs.core.next.call(null,seq34649);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__34650,seq34649__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args34653 = [];
var len__20259__auto___35215 = arguments.length;
var i__20260__auto___35216 = (0);
while(true){
if((i__20260__auto___35216 < len__20259__auto___35215)){
args34653.push((arguments[i__20260__auto___35216]));

var G__35217 = (i__20260__auto___35216 + (1));
i__20260__auto___35216 = G__35217;
continue;
} else {
}
break;
}

var G__34657 = args34653.length;
switch (G__34657) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34653.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq34654){
var G__34655 = cljs.core.first.call(null,seq34654);
var seq34654__$1 = cljs.core.next.call(null,seq34654);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__34655,seq34654__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args34658 = [];
var len__20259__auto___35219 = arguments.length;
var i__20260__auto___35220 = (0);
while(true){
if((i__20260__auto___35220 < len__20259__auto___35219)){
args34658.push((arguments[i__20260__auto___35220]));

var G__35221 = (i__20260__auto___35220 + (1));
i__20260__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var G__34662 = args34658.length;
switch (G__34662) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34658.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq34659){
var G__34660 = cljs.core.first.call(null,seq34659);
var seq34659__$1 = cljs.core.next.call(null,seq34659);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__34660,seq34659__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args34663 = [];
var len__20259__auto___35223 = arguments.length;
var i__20260__auto___35224 = (0);
while(true){
if((i__20260__auto___35224 < len__20259__auto___35223)){
args34663.push((arguments[i__20260__auto___35224]));

var G__35225 = (i__20260__auto___35224 + (1));
i__20260__auto___35224 = G__35225;
continue;
} else {
}
break;
}

var G__34667 = args34663.length;
switch (G__34667) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34663.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq34664){
var G__34665 = cljs.core.first.call(null,seq34664);
var seq34664__$1 = cljs.core.next.call(null,seq34664);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__34665,seq34664__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args34668 = [];
var len__20259__auto___35227 = arguments.length;
var i__20260__auto___35228 = (0);
while(true){
if((i__20260__auto___35228 < len__20259__auto___35227)){
args34668.push((arguments[i__20260__auto___35228]));

var G__35229 = (i__20260__auto___35228 + (1));
i__20260__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var G__34672 = args34668.length;
switch (G__34672) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34668.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq34669){
var G__34670 = cljs.core.first.call(null,seq34669);
var seq34669__$1 = cljs.core.next.call(null,seq34669);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__34670,seq34669__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args34673 = [];
var len__20259__auto___35231 = arguments.length;
var i__20260__auto___35232 = (0);
while(true){
if((i__20260__auto___35232 < len__20259__auto___35231)){
args34673.push((arguments[i__20260__auto___35232]));

var G__35233 = (i__20260__auto___35232 + (1));
i__20260__auto___35232 = G__35233;
continue;
} else {
}
break;
}

var G__34677 = args34673.length;
switch (G__34677) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34673.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq34674){
var G__34675 = cljs.core.first.call(null,seq34674);
var seq34674__$1 = cljs.core.next.call(null,seq34674);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__34675,seq34674__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args34678 = [];
var len__20259__auto___35235 = arguments.length;
var i__20260__auto___35236 = (0);
while(true){
if((i__20260__auto___35236 < len__20259__auto___35235)){
args34678.push((arguments[i__20260__auto___35236]));

var G__35237 = (i__20260__auto___35236 + (1));
i__20260__auto___35236 = G__35237;
continue;
} else {
}
break;
}

var G__34682 = args34678.length;
switch (G__34682) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34678.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq34679){
var G__34680 = cljs.core.first.call(null,seq34679);
var seq34679__$1 = cljs.core.next.call(null,seq34679);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__34680,seq34679__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args34683 = [];
var len__20259__auto___35239 = arguments.length;
var i__20260__auto___35240 = (0);
while(true){
if((i__20260__auto___35240 < len__20259__auto___35239)){
args34683.push((arguments[i__20260__auto___35240]));

var G__35241 = (i__20260__auto___35240 + (1));
i__20260__auto___35240 = G__35241;
continue;
} else {
}
break;
}

var G__34687 = args34683.length;
switch (G__34687) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34683.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq34684){
var G__34685 = cljs.core.first.call(null,seq34684);
var seq34684__$1 = cljs.core.next.call(null,seq34684);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__34685,seq34684__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args34688 = [];
var len__20259__auto___35243 = arguments.length;
var i__20260__auto___35244 = (0);
while(true){
if((i__20260__auto___35244 < len__20259__auto___35243)){
args34688.push((arguments[i__20260__auto___35244]));

var G__35245 = (i__20260__auto___35244 + (1));
i__20260__auto___35244 = G__35245;
continue;
} else {
}
break;
}

var G__34692 = args34688.length;
switch (G__34692) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34688.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq34689){
var G__34690 = cljs.core.first.call(null,seq34689);
var seq34689__$1 = cljs.core.next.call(null,seq34689);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__34690,seq34689__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args34693 = [];
var len__20259__auto___35247 = arguments.length;
var i__20260__auto___35248 = (0);
while(true){
if((i__20260__auto___35248 < len__20259__auto___35247)){
args34693.push((arguments[i__20260__auto___35248]));

var G__35249 = (i__20260__auto___35248 + (1));
i__20260__auto___35248 = G__35249;
continue;
} else {
}
break;
}

var G__34697 = args34693.length;
switch (G__34697) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34693.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq34694){
var G__34695 = cljs.core.first.call(null,seq34694);
var seq34694__$1 = cljs.core.next.call(null,seq34694);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__34695,seq34694__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args34698 = [];
var len__20259__auto___35251 = arguments.length;
var i__20260__auto___35252 = (0);
while(true){
if((i__20260__auto___35252 < len__20259__auto___35251)){
args34698.push((arguments[i__20260__auto___35252]));

var G__35253 = (i__20260__auto___35252 + (1));
i__20260__auto___35252 = G__35253;
continue;
} else {
}
break;
}

var G__34702 = args34698.length;
switch (G__34702) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34698.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq34699){
var G__34700 = cljs.core.first.call(null,seq34699);
var seq34699__$1 = cljs.core.next.call(null,seq34699);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__34700,seq34699__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args34703 = [];
var len__20259__auto___35255 = arguments.length;
var i__20260__auto___35256 = (0);
while(true){
if((i__20260__auto___35256 < len__20259__auto___35255)){
args34703.push((arguments[i__20260__auto___35256]));

var G__35257 = (i__20260__auto___35256 + (1));
i__20260__auto___35256 = G__35257;
continue;
} else {
}
break;
}

var G__34707 = args34703.length;
switch (G__34707) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34703.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq34704){
var G__34705 = cljs.core.first.call(null,seq34704);
var seq34704__$1 = cljs.core.next.call(null,seq34704);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__34705,seq34704__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args34708 = [];
var len__20259__auto___35259 = arguments.length;
var i__20260__auto___35260 = (0);
while(true){
if((i__20260__auto___35260 < len__20259__auto___35259)){
args34708.push((arguments[i__20260__auto___35260]));

var G__35261 = (i__20260__auto___35260 + (1));
i__20260__auto___35260 = G__35261;
continue;
} else {
}
break;
}

var G__34712 = args34708.length;
switch (G__34712) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34708.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq34709){
var G__34710 = cljs.core.first.call(null,seq34709);
var seq34709__$1 = cljs.core.next.call(null,seq34709);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__34710,seq34709__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args34713 = [];
var len__20259__auto___35263 = arguments.length;
var i__20260__auto___35264 = (0);
while(true){
if((i__20260__auto___35264 < len__20259__auto___35263)){
args34713.push((arguments[i__20260__auto___35264]));

var G__35265 = (i__20260__auto___35264 + (1));
i__20260__auto___35264 = G__35265;
continue;
} else {
}
break;
}

var G__34717 = args34713.length;
switch (G__34717) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34713.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq34714){
var G__34715 = cljs.core.first.call(null,seq34714);
var seq34714__$1 = cljs.core.next.call(null,seq34714);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__34715,seq34714__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args34718 = [];
var len__20259__auto___35267 = arguments.length;
var i__20260__auto___35268 = (0);
while(true){
if((i__20260__auto___35268 < len__20259__auto___35267)){
args34718.push((arguments[i__20260__auto___35268]));

var G__35269 = (i__20260__auto___35268 + (1));
i__20260__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var G__34722 = args34718.length;
switch (G__34722) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34718.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq34719){
var G__34720 = cljs.core.first.call(null,seq34719);
var seq34719__$1 = cljs.core.next.call(null,seq34719);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__34720,seq34719__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args34723 = [];
var len__20259__auto___35271 = arguments.length;
var i__20260__auto___35272 = (0);
while(true){
if((i__20260__auto___35272 < len__20259__auto___35271)){
args34723.push((arguments[i__20260__auto___35272]));

var G__35273 = (i__20260__auto___35272 + (1));
i__20260__auto___35272 = G__35273;
continue;
} else {
}
break;
}

var G__34727 = args34723.length;
switch (G__34727) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34723.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq34724){
var G__34725 = cljs.core.first.call(null,seq34724);
var seq34724__$1 = cljs.core.next.call(null,seq34724);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__34725,seq34724__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args34728 = [];
var len__20259__auto___35275 = arguments.length;
var i__20260__auto___35276 = (0);
while(true){
if((i__20260__auto___35276 < len__20259__auto___35275)){
args34728.push((arguments[i__20260__auto___35276]));

var G__35277 = (i__20260__auto___35276 + (1));
i__20260__auto___35276 = G__35277;
continue;
} else {
}
break;
}

var G__34732 = args34728.length;
switch (G__34732) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34728.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq34729){
var G__34730 = cljs.core.first.call(null,seq34729);
var seq34729__$1 = cljs.core.next.call(null,seq34729);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__34730,seq34729__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args34733 = [];
var len__20259__auto___35279 = arguments.length;
var i__20260__auto___35280 = (0);
while(true){
if((i__20260__auto___35280 < len__20259__auto___35279)){
args34733.push((arguments[i__20260__auto___35280]));

var G__35281 = (i__20260__auto___35280 + (1));
i__20260__auto___35280 = G__35281;
continue;
} else {
}
break;
}

var G__34737 = args34733.length;
switch (G__34737) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34733.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq34734){
var G__34735 = cljs.core.first.call(null,seq34734);
var seq34734__$1 = cljs.core.next.call(null,seq34734);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__34735,seq34734__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args34738 = [];
var len__20259__auto___35283 = arguments.length;
var i__20260__auto___35284 = (0);
while(true){
if((i__20260__auto___35284 < len__20259__auto___35283)){
args34738.push((arguments[i__20260__auto___35284]));

var G__35285 = (i__20260__auto___35284 + (1));
i__20260__auto___35284 = G__35285;
continue;
} else {
}
break;
}

var G__34742 = args34738.length;
switch (G__34742) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34738.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq34739){
var G__34740 = cljs.core.first.call(null,seq34739);
var seq34739__$1 = cljs.core.next.call(null,seq34739);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__34740,seq34739__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args34743 = [];
var len__20259__auto___35287 = arguments.length;
var i__20260__auto___35288 = (0);
while(true){
if((i__20260__auto___35288 < len__20259__auto___35287)){
args34743.push((arguments[i__20260__auto___35288]));

var G__35289 = (i__20260__auto___35288 + (1));
i__20260__auto___35288 = G__35289;
continue;
} else {
}
break;
}

var G__34747 = args34743.length;
switch (G__34747) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34743.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq34744){
var G__34745 = cljs.core.first.call(null,seq34744);
var seq34744__$1 = cljs.core.next.call(null,seq34744);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__34745,seq34744__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args34748 = [];
var len__20259__auto___35291 = arguments.length;
var i__20260__auto___35292 = (0);
while(true){
if((i__20260__auto___35292 < len__20259__auto___35291)){
args34748.push((arguments[i__20260__auto___35292]));

var G__35293 = (i__20260__auto___35292 + (1));
i__20260__auto___35292 = G__35293;
continue;
} else {
}
break;
}

var G__34752 = args34748.length;
switch (G__34752) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34748.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq34749){
var G__34750 = cljs.core.first.call(null,seq34749);
var seq34749__$1 = cljs.core.next.call(null,seq34749);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__34750,seq34749__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args34753 = [];
var len__20259__auto___35295 = arguments.length;
var i__20260__auto___35296 = (0);
while(true){
if((i__20260__auto___35296 < len__20259__auto___35295)){
args34753.push((arguments[i__20260__auto___35296]));

var G__35297 = (i__20260__auto___35296 + (1));
i__20260__auto___35296 = G__35297;
continue;
} else {
}
break;
}

var G__34757 = args34753.length;
switch (G__34757) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34753.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq34754){
var G__34755 = cljs.core.first.call(null,seq34754);
var seq34754__$1 = cljs.core.next.call(null,seq34754);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__34755,seq34754__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args34758 = [];
var len__20259__auto___35299 = arguments.length;
var i__20260__auto___35300 = (0);
while(true){
if((i__20260__auto___35300 < len__20259__auto___35299)){
args34758.push((arguments[i__20260__auto___35300]));

var G__35301 = (i__20260__auto___35300 + (1));
i__20260__auto___35300 = G__35301;
continue;
} else {
}
break;
}

var G__34762 = args34758.length;
switch (G__34762) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34758.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq34759){
var G__34760 = cljs.core.first.call(null,seq34759);
var seq34759__$1 = cljs.core.next.call(null,seq34759);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__34760,seq34759__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args34763 = [];
var len__20259__auto___35303 = arguments.length;
var i__20260__auto___35304 = (0);
while(true){
if((i__20260__auto___35304 < len__20259__auto___35303)){
args34763.push((arguments[i__20260__auto___35304]));

var G__35305 = (i__20260__auto___35304 + (1));
i__20260__auto___35304 = G__35305;
continue;
} else {
}
break;
}

var G__34767 = args34763.length;
switch (G__34767) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34763.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq34764){
var G__34765 = cljs.core.first.call(null,seq34764);
var seq34764__$1 = cljs.core.next.call(null,seq34764);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__34765,seq34764__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args34768 = [];
var len__20259__auto___35307 = arguments.length;
var i__20260__auto___35308 = (0);
while(true){
if((i__20260__auto___35308 < len__20259__auto___35307)){
args34768.push((arguments[i__20260__auto___35308]));

var G__35309 = (i__20260__auto___35308 + (1));
i__20260__auto___35308 = G__35309;
continue;
} else {
}
break;
}

var G__34772 = args34768.length;
switch (G__34772) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34768.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq34769){
var G__34770 = cljs.core.first.call(null,seq34769);
var seq34769__$1 = cljs.core.next.call(null,seq34769);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__34770,seq34769__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args34773 = [];
var len__20259__auto___35311 = arguments.length;
var i__20260__auto___35312 = (0);
while(true){
if((i__20260__auto___35312 < len__20259__auto___35311)){
args34773.push((arguments[i__20260__auto___35312]));

var G__35313 = (i__20260__auto___35312 + (1));
i__20260__auto___35312 = G__35313;
continue;
} else {
}
break;
}

var G__34777 = args34773.length;
switch (G__34777) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34773.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq34774){
var G__34775 = cljs.core.first.call(null,seq34774);
var seq34774__$1 = cljs.core.next.call(null,seq34774);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__34775,seq34774__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(var_args){
var args34778 = [];
var len__20259__auto___35315 = arguments.length;
var i__20260__auto___35316 = (0);
while(true){
if((i__20260__auto___35316 < len__20259__auto___35315)){
args34778.push((arguments[i__20260__auto___35316]));

var G__35317 = (i__20260__auto___35316 + (1));
i__20260__auto___35316 = G__35317;
continue;
} else {
}
break;
}

var G__34782 = args34778.length;
switch (G__34782) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34778.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq34779){
var G__34780 = cljs.core.first.call(null,seq34779);
var seq34779__$1 = cljs.core.next.call(null,seq34779);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__34780,seq34779__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args34783 = [];
var len__20259__auto___35319 = arguments.length;
var i__20260__auto___35320 = (0);
while(true){
if((i__20260__auto___35320 < len__20259__auto___35319)){
args34783.push((arguments[i__20260__auto___35320]));

var G__35321 = (i__20260__auto___35320 + (1));
i__20260__auto___35320 = G__35321;
continue;
} else {
}
break;
}

var G__34787 = args34783.length;
switch (G__34787) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34783.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq34784){
var G__34785 = cljs.core.first.call(null,seq34784);
var seq34784__$1 = cljs.core.next.call(null,seq34784);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__34785,seq34784__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args34788 = [];
var len__20259__auto___35323 = arguments.length;
var i__20260__auto___35324 = (0);
while(true){
if((i__20260__auto___35324 < len__20259__auto___35323)){
args34788.push((arguments[i__20260__auto___35324]));

var G__35325 = (i__20260__auto___35324 + (1));
i__20260__auto___35324 = G__35325;
continue;
} else {
}
break;
}

var G__34792 = args34788.length;
switch (G__34792) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34788.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq34789){
var G__34790 = cljs.core.first.call(null,seq34789);
var seq34789__$1 = cljs.core.next.call(null,seq34789);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__34790,seq34789__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args34793 = [];
var len__20259__auto___35327 = arguments.length;
var i__20260__auto___35328 = (0);
while(true){
if((i__20260__auto___35328 < len__20259__auto___35327)){
args34793.push((arguments[i__20260__auto___35328]));

var G__35329 = (i__20260__auto___35328 + (1));
i__20260__auto___35328 = G__35329;
continue;
} else {
}
break;
}

var G__34797 = args34793.length;
switch (G__34797) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34793.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq34794){
var G__34795 = cljs.core.first.call(null,seq34794);
var seq34794__$1 = cljs.core.next.call(null,seq34794);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__34795,seq34794__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args34798 = [];
var len__20259__auto___35331 = arguments.length;
var i__20260__auto___35332 = (0);
while(true){
if((i__20260__auto___35332 < len__20259__auto___35331)){
args34798.push((arguments[i__20260__auto___35332]));

var G__35333 = (i__20260__auto___35332 + (1));
i__20260__auto___35332 = G__35333;
continue;
} else {
}
break;
}

var G__34802 = args34798.length;
switch (G__34802) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34798.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq34799){
var G__34800 = cljs.core.first.call(null,seq34799);
var seq34799__$1 = cljs.core.next.call(null,seq34799);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__34800,seq34799__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args34803 = [];
var len__20259__auto___35335 = arguments.length;
var i__20260__auto___35336 = (0);
while(true){
if((i__20260__auto___35336 < len__20259__auto___35335)){
args34803.push((arguments[i__20260__auto___35336]));

var G__35337 = (i__20260__auto___35336 + (1));
i__20260__auto___35336 = G__35337;
continue;
} else {
}
break;
}

var G__34807 = args34803.length;
switch (G__34807) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34803.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq34804){
var G__34805 = cljs.core.first.call(null,seq34804);
var seq34804__$1 = cljs.core.next.call(null,seq34804);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__34805,seq34804__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args34808 = [];
var len__20259__auto___35339 = arguments.length;
var i__20260__auto___35340 = (0);
while(true){
if((i__20260__auto___35340 < len__20259__auto___35339)){
args34808.push((arguments[i__20260__auto___35340]));

var G__35341 = (i__20260__auto___35340 + (1));
i__20260__auto___35340 = G__35341;
continue;
} else {
}
break;
}

var G__34812 = args34808.length;
switch (G__34812) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34808.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq34809){
var G__34810 = cljs.core.first.call(null,seq34809);
var seq34809__$1 = cljs.core.next.call(null,seq34809);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__34810,seq34809__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args34813 = [];
var len__20259__auto___35343 = arguments.length;
var i__20260__auto___35344 = (0);
while(true){
if((i__20260__auto___35344 < len__20259__auto___35343)){
args34813.push((arguments[i__20260__auto___35344]));

var G__35345 = (i__20260__auto___35344 + (1));
i__20260__auto___35344 = G__35345;
continue;
} else {
}
break;
}

var G__34817 = args34813.length;
switch (G__34817) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34813.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq34814){
var G__34815 = cljs.core.first.call(null,seq34814);
var seq34814__$1 = cljs.core.next.call(null,seq34814);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__34815,seq34814__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args34818 = [];
var len__20259__auto___35347 = arguments.length;
var i__20260__auto___35348 = (0);
while(true){
if((i__20260__auto___35348 < len__20259__auto___35347)){
args34818.push((arguments[i__20260__auto___35348]));

var G__35349 = (i__20260__auto___35348 + (1));
i__20260__auto___35348 = G__35349;
continue;
} else {
}
break;
}

var G__34822 = args34818.length;
switch (G__34822) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34818.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq34819){
var G__34820 = cljs.core.first.call(null,seq34819);
var seq34819__$1 = cljs.core.next.call(null,seq34819);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__34820,seq34819__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args34823 = [];
var len__20259__auto___35351 = arguments.length;
var i__20260__auto___35352 = (0);
while(true){
if((i__20260__auto___35352 < len__20259__auto___35351)){
args34823.push((arguments[i__20260__auto___35352]));

var G__35353 = (i__20260__auto___35352 + (1));
i__20260__auto___35352 = G__35353;
continue;
} else {
}
break;
}

var G__34827 = args34823.length;
switch (G__34827) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34823.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq34824){
var G__34825 = cljs.core.first.call(null,seq34824);
var seq34824__$1 = cljs.core.next.call(null,seq34824);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__34825,seq34824__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args34828 = [];
var len__20259__auto___35355 = arguments.length;
var i__20260__auto___35356 = (0);
while(true){
if((i__20260__auto___35356 < len__20259__auto___35355)){
args34828.push((arguments[i__20260__auto___35356]));

var G__35357 = (i__20260__auto___35356 + (1));
i__20260__auto___35356 = G__35357;
continue;
} else {
}
break;
}

var G__34832 = args34828.length;
switch (G__34832) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34828.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq34829){
var G__34830 = cljs.core.first.call(null,seq34829);
var seq34829__$1 = cljs.core.next.call(null,seq34829);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__34830,seq34829__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args34833 = [];
var len__20259__auto___35359 = arguments.length;
var i__20260__auto___35360 = (0);
while(true){
if((i__20260__auto___35360 < len__20259__auto___35359)){
args34833.push((arguments[i__20260__auto___35360]));

var G__35361 = (i__20260__auto___35360 + (1));
i__20260__auto___35360 = G__35361;
continue;
} else {
}
break;
}

var G__34837 = args34833.length;
switch (G__34837) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34833.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq34834){
var G__34835 = cljs.core.first.call(null,seq34834);
var seq34834__$1 = cljs.core.next.call(null,seq34834);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__34835,seq34834__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args34838 = [];
var len__20259__auto___35363 = arguments.length;
var i__20260__auto___35364 = (0);
while(true){
if((i__20260__auto___35364 < len__20259__auto___35363)){
args34838.push((arguments[i__20260__auto___35364]));

var G__35365 = (i__20260__auto___35364 + (1));
i__20260__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var G__34842 = args34838.length;
switch (G__34842) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34838.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq34839){
var G__34840 = cljs.core.first.call(null,seq34839);
var seq34839__$1 = cljs.core.next.call(null,seq34839);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__34840,seq34839__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args34843 = [];
var len__20259__auto___35367 = arguments.length;
var i__20260__auto___35368 = (0);
while(true){
if((i__20260__auto___35368 < len__20259__auto___35367)){
args34843.push((arguments[i__20260__auto___35368]));

var G__35369 = (i__20260__auto___35368 + (1));
i__20260__auto___35368 = G__35369;
continue;
} else {
}
break;
}

var G__34847 = args34843.length;
switch (G__34847) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34843.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq34844){
var G__34845 = cljs.core.first.call(null,seq34844);
var seq34844__$1 = cljs.core.next.call(null,seq34844);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__34845,seq34844__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args34848 = [];
var len__20259__auto___35371 = arguments.length;
var i__20260__auto___35372 = (0);
while(true){
if((i__20260__auto___35372 < len__20259__auto___35371)){
args34848.push((arguments[i__20260__auto___35372]));

var G__35373 = (i__20260__auto___35372 + (1));
i__20260__auto___35372 = G__35373;
continue;
} else {
}
break;
}

var G__34852 = args34848.length;
switch (G__34852) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34848.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq34849){
var G__34850 = cljs.core.first.call(null,seq34849);
var seq34849__$1 = cljs.core.next.call(null,seq34849);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__34850,seq34849__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args34853 = [];
var len__20259__auto___35375 = arguments.length;
var i__20260__auto___35376 = (0);
while(true){
if((i__20260__auto___35376 < len__20259__auto___35375)){
args34853.push((arguments[i__20260__auto___35376]));

var G__35377 = (i__20260__auto___35376 + (1));
i__20260__auto___35376 = G__35377;
continue;
} else {
}
break;
}

var G__34857 = args34853.length;
switch (G__34857) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34853.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq34854){
var G__34855 = cljs.core.first.call(null,seq34854);
var seq34854__$1 = cljs.core.next.call(null,seq34854);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__34855,seq34854__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args34858 = [];
var len__20259__auto___35379 = arguments.length;
var i__20260__auto___35380 = (0);
while(true){
if((i__20260__auto___35380 < len__20259__auto___35379)){
args34858.push((arguments[i__20260__auto___35380]));

var G__35381 = (i__20260__auto___35380 + (1));
i__20260__auto___35380 = G__35381;
continue;
} else {
}
break;
}

var G__34862 = args34858.length;
switch (G__34862) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34858.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq34859){
var G__34860 = cljs.core.first.call(null,seq34859);
var seq34859__$1 = cljs.core.next.call(null,seq34859);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__34860,seq34859__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args34863 = [];
var len__20259__auto___35383 = arguments.length;
var i__20260__auto___35384 = (0);
while(true){
if((i__20260__auto___35384 < len__20259__auto___35383)){
args34863.push((arguments[i__20260__auto___35384]));

var G__35385 = (i__20260__auto___35384 + (1));
i__20260__auto___35384 = G__35385;
continue;
} else {
}
break;
}

var G__34867 = args34863.length;
switch (G__34867) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34863.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq34864){
var G__34865 = cljs.core.first.call(null,seq34864);
var seq34864__$1 = cljs.core.next.call(null,seq34864);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__34865,seq34864__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args34868 = [];
var len__20259__auto___35387 = arguments.length;
var i__20260__auto___35388 = (0);
while(true){
if((i__20260__auto___35388 < len__20259__auto___35387)){
args34868.push((arguments[i__20260__auto___35388]));

var G__35389 = (i__20260__auto___35388 + (1));
i__20260__auto___35388 = G__35389;
continue;
} else {
}
break;
}

var G__34872 = args34868.length;
switch (G__34872) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34868.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq34869){
var G__34870 = cljs.core.first.call(null,seq34869);
var seq34869__$1 = cljs.core.next.call(null,seq34869);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__34870,seq34869__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args34873 = [];
var len__20259__auto___35391 = arguments.length;
var i__20260__auto___35392 = (0);
while(true){
if((i__20260__auto___35392 < len__20259__auto___35391)){
args34873.push((arguments[i__20260__auto___35392]));

var G__35393 = (i__20260__auto___35392 + (1));
i__20260__auto___35392 = G__35393;
continue;
} else {
}
break;
}

var G__34877 = args34873.length;
switch (G__34877) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34873.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq34874){
var G__34875 = cljs.core.first.call(null,seq34874);
var seq34874__$1 = cljs.core.next.call(null,seq34874);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__34875,seq34874__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args34878 = [];
var len__20259__auto___35395 = arguments.length;
var i__20260__auto___35396 = (0);
while(true){
if((i__20260__auto___35396 < len__20259__auto___35395)){
args34878.push((arguments[i__20260__auto___35396]));

var G__35397 = (i__20260__auto___35396 + (1));
i__20260__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var G__34882 = args34878.length;
switch (G__34882) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34878.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq34879){
var G__34880 = cljs.core.first.call(null,seq34879);
var seq34879__$1 = cljs.core.next.call(null,seq34879);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__34880,seq34879__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args34883 = [];
var len__20259__auto___35399 = arguments.length;
var i__20260__auto___35400 = (0);
while(true){
if((i__20260__auto___35400 < len__20259__auto___35399)){
args34883.push((arguments[i__20260__auto___35400]));

var G__35401 = (i__20260__auto___35400 + (1));
i__20260__auto___35400 = G__35401;
continue;
} else {
}
break;
}

var G__34887 = args34883.length;
switch (G__34887) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34883.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq34884){
var G__34885 = cljs.core.first.call(null,seq34884);
var seq34884__$1 = cljs.core.next.call(null,seq34884);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__34885,seq34884__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args34888 = [];
var len__20259__auto___35403 = arguments.length;
var i__20260__auto___35404 = (0);
while(true){
if((i__20260__auto___35404 < len__20259__auto___35403)){
args34888.push((arguments[i__20260__auto___35404]));

var G__35405 = (i__20260__auto___35404 + (1));
i__20260__auto___35404 = G__35405;
continue;
} else {
}
break;
}

var G__34892 = args34888.length;
switch (G__34892) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34888.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq34889){
var G__34890 = cljs.core.first.call(null,seq34889);
var seq34889__$1 = cljs.core.next.call(null,seq34889);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__34890,seq34889__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args34893 = [];
var len__20259__auto___35407 = arguments.length;
var i__20260__auto___35408 = (0);
while(true){
if((i__20260__auto___35408 < len__20259__auto___35407)){
args34893.push((arguments[i__20260__auto___35408]));

var G__35409 = (i__20260__auto___35408 + (1));
i__20260__auto___35408 = G__35409;
continue;
} else {
}
break;
}

var G__34897 = args34893.length;
switch (G__34897) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34893.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq34894){
var G__34895 = cljs.core.first.call(null,seq34894);
var seq34894__$1 = cljs.core.next.call(null,seq34894);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__34895,seq34894__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args34898 = [];
var len__20259__auto___35411 = arguments.length;
var i__20260__auto___35412 = (0);
while(true){
if((i__20260__auto___35412 < len__20259__auto___35411)){
args34898.push((arguments[i__20260__auto___35412]));

var G__35413 = (i__20260__auto___35412 + (1));
i__20260__auto___35412 = G__35413;
continue;
} else {
}
break;
}

var G__34902 = args34898.length;
switch (G__34902) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34898.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq34899){
var G__34900 = cljs.core.first.call(null,seq34899);
var seq34899__$1 = cljs.core.next.call(null,seq34899);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__34900,seq34899__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args34903 = [];
var len__20259__auto___35415 = arguments.length;
var i__20260__auto___35416 = (0);
while(true){
if((i__20260__auto___35416 < len__20259__auto___35415)){
args34903.push((arguments[i__20260__auto___35416]));

var G__35417 = (i__20260__auto___35416 + (1));
i__20260__auto___35416 = G__35417;
continue;
} else {
}
break;
}

var G__34907 = args34903.length;
switch (G__34907) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34903.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq34904){
var G__34905 = cljs.core.first.call(null,seq34904);
var seq34904__$1 = cljs.core.next.call(null,seq34904);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__34905,seq34904__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args34908 = [];
var len__20259__auto___35419 = arguments.length;
var i__20260__auto___35420 = (0);
while(true){
if((i__20260__auto___35420 < len__20259__auto___35419)){
args34908.push((arguments[i__20260__auto___35420]));

var G__35421 = (i__20260__auto___35420 + (1));
i__20260__auto___35420 = G__35421;
continue;
} else {
}
break;
}

var G__34912 = args34908.length;
switch (G__34912) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34908.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first.call(null,seq34909);
var seq34909__$1 = cljs.core.next.call(null,seq34909);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__34910,seq34909__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args34913 = [];
var len__20259__auto___35423 = arguments.length;
var i__20260__auto___35424 = (0);
while(true){
if((i__20260__auto___35424 < len__20259__auto___35423)){
args34913.push((arguments[i__20260__auto___35424]));

var G__35425 = (i__20260__auto___35424 + (1));
i__20260__auto___35424 = G__35425;
continue;
} else {
}
break;
}

var G__34917 = args34913.length;
switch (G__34917) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34913.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq34914){
var G__34915 = cljs.core.first.call(null,seq34914);
var seq34914__$1 = cljs.core.next.call(null,seq34914);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__34915,seq34914__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args34918 = [];
var len__20259__auto___35427 = arguments.length;
var i__20260__auto___35428 = (0);
while(true){
if((i__20260__auto___35428 < len__20259__auto___35427)){
args34918.push((arguments[i__20260__auto___35428]));

var G__35429 = (i__20260__auto___35428 + (1));
i__20260__auto___35428 = G__35429;
continue;
} else {
}
break;
}

var G__34922 = args34918.length;
switch (G__34922) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34918.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq34919){
var G__34920 = cljs.core.first.call(null,seq34919);
var seq34919__$1 = cljs.core.next.call(null,seq34919);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__34920,seq34919__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args34923 = [];
var len__20259__auto___35431 = arguments.length;
var i__20260__auto___35432 = (0);
while(true){
if((i__20260__auto___35432 < len__20259__auto___35431)){
args34923.push((arguments[i__20260__auto___35432]));

var G__35433 = (i__20260__auto___35432 + (1));
i__20260__auto___35432 = G__35433;
continue;
} else {
}
break;
}

var G__34927 = args34923.length;
switch (G__34927) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34923.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq34924){
var G__34925 = cljs.core.first.call(null,seq34924);
var seq34924__$1 = cljs.core.next.call(null,seq34924);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__34925,seq34924__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args34928 = [];
var len__20259__auto___35435 = arguments.length;
var i__20260__auto___35436 = (0);
while(true){
if((i__20260__auto___35436 < len__20259__auto___35435)){
args34928.push((arguments[i__20260__auto___35436]));

var G__35437 = (i__20260__auto___35436 + (1));
i__20260__auto___35436 = G__35437;
continue;
} else {
}
break;
}

var G__34932 = args34928.length;
switch (G__34932) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34928.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq34929){
var G__34930 = cljs.core.first.call(null,seq34929);
var seq34929__$1 = cljs.core.next.call(null,seq34929);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__34930,seq34929__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args34933 = [];
var len__20259__auto___35439 = arguments.length;
var i__20260__auto___35440 = (0);
while(true){
if((i__20260__auto___35440 < len__20259__auto___35439)){
args34933.push((arguments[i__20260__auto___35440]));

var G__35441 = (i__20260__auto___35440 + (1));
i__20260__auto___35440 = G__35441;
continue;
} else {
}
break;
}

var G__34937 = args34933.length;
switch (G__34937) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34933.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq34934){
var G__34935 = cljs.core.first.call(null,seq34934);
var seq34934__$1 = cljs.core.next.call(null,seq34934);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__34935,seq34934__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args34938 = [];
var len__20259__auto___35443 = arguments.length;
var i__20260__auto___35444 = (0);
while(true){
if((i__20260__auto___35444 < len__20259__auto___35443)){
args34938.push((arguments[i__20260__auto___35444]));

var G__35445 = (i__20260__auto___35444 + (1));
i__20260__auto___35444 = G__35445;
continue;
} else {
}
break;
}

var G__34942 = args34938.length;
switch (G__34942) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34938.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq34939){
var G__34940 = cljs.core.first.call(null,seq34939);
var seq34939__$1 = cljs.core.next.call(null,seq34939);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__34940,seq34939__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args34943 = [];
var len__20259__auto___35447 = arguments.length;
var i__20260__auto___35448 = (0);
while(true){
if((i__20260__auto___35448 < len__20259__auto___35447)){
args34943.push((arguments[i__20260__auto___35448]));

var G__35449 = (i__20260__auto___35448 + (1));
i__20260__auto___35448 = G__35449;
continue;
} else {
}
break;
}

var G__34947 = args34943.length;
switch (G__34947) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34943.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq34944){
var G__34945 = cljs.core.first.call(null,seq34944);
var seq34944__$1 = cljs.core.next.call(null,seq34944);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__34945,seq34944__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args34948 = [];
var len__20259__auto___35451 = arguments.length;
var i__20260__auto___35452 = (0);
while(true){
if((i__20260__auto___35452 < len__20259__auto___35451)){
args34948.push((arguments[i__20260__auto___35452]));

var G__35453 = (i__20260__auto___35452 + (1));
i__20260__auto___35452 = G__35453;
continue;
} else {
}
break;
}

var G__34952 = args34948.length;
switch (G__34952) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34948.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq34949){
var G__34950 = cljs.core.first.call(null,seq34949);
var seq34949__$1 = cljs.core.next.call(null,seq34949);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__34950,seq34949__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args34953 = [];
var len__20259__auto___35455 = arguments.length;
var i__20260__auto___35456 = (0);
while(true){
if((i__20260__auto___35456 < len__20259__auto___35455)){
args34953.push((arguments[i__20260__auto___35456]));

var G__35457 = (i__20260__auto___35456 + (1));
i__20260__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var G__34957 = args34953.length;
switch (G__34957) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34953.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq34954){
var G__34955 = cljs.core.first.call(null,seq34954);
var seq34954__$1 = cljs.core.next.call(null,seq34954);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__34955,seq34954__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args34958 = [];
var len__20259__auto___35459 = arguments.length;
var i__20260__auto___35460 = (0);
while(true){
if((i__20260__auto___35460 < len__20259__auto___35459)){
args34958.push((arguments[i__20260__auto___35460]));

var G__35461 = (i__20260__auto___35460 + (1));
i__20260__auto___35460 = G__35461;
continue;
} else {
}
break;
}

var G__34962 = args34958.length;
switch (G__34962) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34958.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq34959){
var G__34960 = cljs.core.first.call(null,seq34959);
var seq34959__$1 = cljs.core.next.call(null,seq34959);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__34960,seq34959__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args34963 = [];
var len__20259__auto___35463 = arguments.length;
var i__20260__auto___35464 = (0);
while(true){
if((i__20260__auto___35464 < len__20259__auto___35463)){
args34963.push((arguments[i__20260__auto___35464]));

var G__35465 = (i__20260__auto___35464 + (1));
i__20260__auto___35464 = G__35465;
continue;
} else {
}
break;
}

var G__34967 = args34963.length;
switch (G__34967) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34963.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq34964){
var G__34965 = cljs.core.first.call(null,seq34964);
var seq34964__$1 = cljs.core.next.call(null,seq34964);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__34965,seq34964__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args34968 = [];
var len__20259__auto___35467 = arguments.length;
var i__20260__auto___35468 = (0);
while(true){
if((i__20260__auto___35468 < len__20259__auto___35467)){
args34968.push((arguments[i__20260__auto___35468]));

var G__35469 = (i__20260__auto___35468 + (1));
i__20260__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var G__34972 = args34968.length;
switch (G__34972) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34968.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq34969){
var G__34970 = cljs.core.first.call(null,seq34969);
var seq34969__$1 = cljs.core.next.call(null,seq34969);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__34970,seq34969__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args34973 = [];
var len__20259__auto___35471 = arguments.length;
var i__20260__auto___35472 = (0);
while(true){
if((i__20260__auto___35472 < len__20259__auto___35471)){
args34973.push((arguments[i__20260__auto___35472]));

var G__35473 = (i__20260__auto___35472 + (1));
i__20260__auto___35472 = G__35473;
continue;
} else {
}
break;
}

var G__34977 = args34973.length;
switch (G__34977) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34973.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq34974){
var G__34975 = cljs.core.first.call(null,seq34974);
var seq34974__$1 = cljs.core.next.call(null,seq34974);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__34975,seq34974__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args34978 = [];
var len__20259__auto___35475 = arguments.length;
var i__20260__auto___35476 = (0);
while(true){
if((i__20260__auto___35476 < len__20259__auto___35475)){
args34978.push((arguments[i__20260__auto___35476]));

var G__35477 = (i__20260__auto___35476 + (1));
i__20260__auto___35476 = G__35477;
continue;
} else {
}
break;
}

var G__34982 = args34978.length;
switch (G__34982) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34978.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq34979){
var G__34980 = cljs.core.first.call(null,seq34979);
var seq34979__$1 = cljs.core.next.call(null,seq34979);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__34980,seq34979__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args34518 = [];
var len__20259__auto___35479 = arguments.length;
var i__20260__auto___35480 = (0);
while(true){
if((i__20260__auto___35480 < len__20259__auto___35479)){
args34518.push((arguments[i__20260__auto___35480]));

var G__35481 = (i__20260__auto___35480 + (1));
i__20260__auto___35480 = G__35481;
continue;
} else {
}
break;
}

var G__34522 = args34518.length;
switch (G__34522) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34518.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20278__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__23494__auto__,children__23495__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__23494__auto__,children__23495__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq34519){
var G__34520 = cljs.core.first.call(null,seq34519);
var seq34519__$1 = cljs.core.next.call(null,seq34519);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__34520,seq34519__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1444632658160