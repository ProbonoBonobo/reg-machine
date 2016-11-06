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
var G__64854 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__64854) {
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
var G__64857 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__64857) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__64863){
var vec__64864 = p__64863;
var k = cljs.core.nth.call(null,vec__64864,(0),null);
var v = cljs.core.nth.call(null,vec__64864,(1),null);
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
var vec__64870 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__64870,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__64870,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args64873 = [];
var len__25826__auto___65498 = arguments.length;
var i__25827__auto___65499 = (0);
while(true){
if((i__25827__auto___65499 < len__25826__auto___65498)){
args64873.push((arguments[i__25827__auto___65499]));

var G__65500 = (i__25827__auto___65499 + (1));
i__25827__auto___65499 = G__65500;
continue;
} else {
}
break;
}

var G__64877 = args64873.length;
switch (G__64877) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64873.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq64874){
var G__64875 = cljs.core.first.call(null,seq64874);
var seq64874__$1 = cljs.core.next.call(null,seq64874);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__64875,seq64874__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args64878 = [];
var len__25826__auto___65502 = arguments.length;
var i__25827__auto___65503 = (0);
while(true){
if((i__25827__auto___65503 < len__25826__auto___65502)){
args64878.push((arguments[i__25827__auto___65503]));

var G__65504 = (i__25827__auto___65503 + (1));
i__25827__auto___65503 = G__65504;
continue;
} else {
}
break;
}

var G__64882 = args64878.length;
switch (G__64882) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64878.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq64879){
var G__64880 = cljs.core.first.call(null,seq64879);
var seq64879__$1 = cljs.core.next.call(null,seq64879);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__64880,seq64879__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args64883 = [];
var len__25826__auto___65506 = arguments.length;
var i__25827__auto___65507 = (0);
while(true){
if((i__25827__auto___65507 < len__25826__auto___65506)){
args64883.push((arguments[i__25827__auto___65507]));

var G__65508 = (i__25827__auto___65507 + (1));
i__25827__auto___65507 = G__65508;
continue;
} else {
}
break;
}

var G__64887 = args64883.length;
switch (G__64887) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64883.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq64884){
var G__64885 = cljs.core.first.call(null,seq64884);
var seq64884__$1 = cljs.core.next.call(null,seq64884);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__64885,seq64884__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args64888 = [];
var len__25826__auto___65510 = arguments.length;
var i__25827__auto___65511 = (0);
while(true){
if((i__25827__auto___65511 < len__25826__auto___65510)){
args64888.push((arguments[i__25827__auto___65511]));

var G__65512 = (i__25827__auto___65511 + (1));
i__25827__auto___65511 = G__65512;
continue;
} else {
}
break;
}

var G__64892 = args64888.length;
switch (G__64892) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64888.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq64889){
var G__64890 = cljs.core.first.call(null,seq64889);
var seq64889__$1 = cljs.core.next.call(null,seq64889);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__64890,seq64889__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args64893 = [];
var len__25826__auto___65514 = arguments.length;
var i__25827__auto___65515 = (0);
while(true){
if((i__25827__auto___65515 < len__25826__auto___65514)){
args64893.push((arguments[i__25827__auto___65515]));

var G__65516 = (i__25827__auto___65515 + (1));
i__25827__auto___65515 = G__65516;
continue;
} else {
}
break;
}

var G__64897 = args64893.length;
switch (G__64897) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64893.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq64894){
var G__64895 = cljs.core.first.call(null,seq64894);
var seq64894__$1 = cljs.core.next.call(null,seq64894);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__64895,seq64894__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args64898 = [];
var len__25826__auto___65518 = arguments.length;
var i__25827__auto___65519 = (0);
while(true){
if((i__25827__auto___65519 < len__25826__auto___65518)){
args64898.push((arguments[i__25827__auto___65519]));

var G__65520 = (i__25827__auto___65519 + (1));
i__25827__auto___65519 = G__65520;
continue;
} else {
}
break;
}

var G__64902 = args64898.length;
switch (G__64902) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64898.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq64899){
var G__64900 = cljs.core.first.call(null,seq64899);
var seq64899__$1 = cljs.core.next.call(null,seq64899);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__64900,seq64899__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args64903 = [];
var len__25826__auto___65522 = arguments.length;
var i__25827__auto___65523 = (0);
while(true){
if((i__25827__auto___65523 < len__25826__auto___65522)){
args64903.push((arguments[i__25827__auto___65523]));

var G__65524 = (i__25827__auto___65523 + (1));
i__25827__auto___65523 = G__65524;
continue;
} else {
}
break;
}

var G__64907 = args64903.length;
switch (G__64907) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64903.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq64904){
var G__64905 = cljs.core.first.call(null,seq64904);
var seq64904__$1 = cljs.core.next.call(null,seq64904);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__64905,seq64904__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args64908 = [];
var len__25826__auto___65526 = arguments.length;
var i__25827__auto___65527 = (0);
while(true){
if((i__25827__auto___65527 < len__25826__auto___65526)){
args64908.push((arguments[i__25827__auto___65527]));

var G__65528 = (i__25827__auto___65527 + (1));
i__25827__auto___65527 = G__65528;
continue;
} else {
}
break;
}

var G__64912 = args64908.length;
switch (G__64912) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64908.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq64909){
var G__64910 = cljs.core.first.call(null,seq64909);
var seq64909__$1 = cljs.core.next.call(null,seq64909);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__64910,seq64909__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args64913 = [];
var len__25826__auto___65530 = arguments.length;
var i__25827__auto___65531 = (0);
while(true){
if((i__25827__auto___65531 < len__25826__auto___65530)){
args64913.push((arguments[i__25827__auto___65531]));

var G__65532 = (i__25827__auto___65531 + (1));
i__25827__auto___65531 = G__65532;
continue;
} else {
}
break;
}

var G__64917 = args64913.length;
switch (G__64917) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64913.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq64914){
var G__64915 = cljs.core.first.call(null,seq64914);
var seq64914__$1 = cljs.core.next.call(null,seq64914);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__64915,seq64914__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args64918 = [];
var len__25826__auto___65534 = arguments.length;
var i__25827__auto___65535 = (0);
while(true){
if((i__25827__auto___65535 < len__25826__auto___65534)){
args64918.push((arguments[i__25827__auto___65535]));

var G__65536 = (i__25827__auto___65535 + (1));
i__25827__auto___65535 = G__65536;
continue;
} else {
}
break;
}

var G__64922 = args64918.length;
switch (G__64922) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64918.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq64919){
var G__64920 = cljs.core.first.call(null,seq64919);
var seq64919__$1 = cljs.core.next.call(null,seq64919);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__64920,seq64919__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args64923 = [];
var len__25826__auto___65538 = arguments.length;
var i__25827__auto___65539 = (0);
while(true){
if((i__25827__auto___65539 < len__25826__auto___65538)){
args64923.push((arguments[i__25827__auto___65539]));

var G__65540 = (i__25827__auto___65539 + (1));
i__25827__auto___65539 = G__65540;
continue;
} else {
}
break;
}

var G__64927 = args64923.length;
switch (G__64927) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64923.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq64924){
var G__64925 = cljs.core.first.call(null,seq64924);
var seq64924__$1 = cljs.core.next.call(null,seq64924);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__64925,seq64924__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args64928 = [];
var len__25826__auto___65542 = arguments.length;
var i__25827__auto___65543 = (0);
while(true){
if((i__25827__auto___65543 < len__25826__auto___65542)){
args64928.push((arguments[i__25827__auto___65543]));

var G__65544 = (i__25827__auto___65543 + (1));
i__25827__auto___65543 = G__65544;
continue;
} else {
}
break;
}

var G__64932 = args64928.length;
switch (G__64932) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64928.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq64929){
var G__64930 = cljs.core.first.call(null,seq64929);
var seq64929__$1 = cljs.core.next.call(null,seq64929);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__64930,seq64929__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args64933 = [];
var len__25826__auto___65546 = arguments.length;
var i__25827__auto___65547 = (0);
while(true){
if((i__25827__auto___65547 < len__25826__auto___65546)){
args64933.push((arguments[i__25827__auto___65547]));

var G__65548 = (i__25827__auto___65547 + (1));
i__25827__auto___65547 = G__65548;
continue;
} else {
}
break;
}

var G__64937 = args64933.length;
switch (G__64937) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64933.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq64934){
var G__64935 = cljs.core.first.call(null,seq64934);
var seq64934__$1 = cljs.core.next.call(null,seq64934);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__64935,seq64934__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args64938 = [];
var len__25826__auto___65550 = arguments.length;
var i__25827__auto___65551 = (0);
while(true){
if((i__25827__auto___65551 < len__25826__auto___65550)){
args64938.push((arguments[i__25827__auto___65551]));

var G__65552 = (i__25827__auto___65551 + (1));
i__25827__auto___65551 = G__65552;
continue;
} else {
}
break;
}

var G__64942 = args64938.length;
switch (G__64942) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64938.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq64939){
var G__64940 = cljs.core.first.call(null,seq64939);
var seq64939__$1 = cljs.core.next.call(null,seq64939);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__64940,seq64939__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args64943 = [];
var len__25826__auto___65554 = arguments.length;
var i__25827__auto___65555 = (0);
while(true){
if((i__25827__auto___65555 < len__25826__auto___65554)){
args64943.push((arguments[i__25827__auto___65555]));

var G__65556 = (i__25827__auto___65555 + (1));
i__25827__auto___65555 = G__65556;
continue;
} else {
}
break;
}

var G__64947 = args64943.length;
switch (G__64947) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64943.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq64944){
var G__64945 = cljs.core.first.call(null,seq64944);
var seq64944__$1 = cljs.core.next.call(null,seq64944);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__64945,seq64944__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args64948 = [];
var len__25826__auto___65558 = arguments.length;
var i__25827__auto___65559 = (0);
while(true){
if((i__25827__auto___65559 < len__25826__auto___65558)){
args64948.push((arguments[i__25827__auto___65559]));

var G__65560 = (i__25827__auto___65559 + (1));
i__25827__auto___65559 = G__65560;
continue;
} else {
}
break;
}

var G__64952 = args64948.length;
switch (G__64952) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64948.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq64949){
var G__64950 = cljs.core.first.call(null,seq64949);
var seq64949__$1 = cljs.core.next.call(null,seq64949);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__64950,seq64949__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args64953 = [];
var len__25826__auto___65562 = arguments.length;
var i__25827__auto___65563 = (0);
while(true){
if((i__25827__auto___65563 < len__25826__auto___65562)){
args64953.push((arguments[i__25827__auto___65563]));

var G__65564 = (i__25827__auto___65563 + (1));
i__25827__auto___65563 = G__65564;
continue;
} else {
}
break;
}

var G__64957 = args64953.length;
switch (G__64957) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64953.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq64954){
var G__64955 = cljs.core.first.call(null,seq64954);
var seq64954__$1 = cljs.core.next.call(null,seq64954);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__64955,seq64954__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args64958 = [];
var len__25826__auto___65566 = arguments.length;
var i__25827__auto___65567 = (0);
while(true){
if((i__25827__auto___65567 < len__25826__auto___65566)){
args64958.push((arguments[i__25827__auto___65567]));

var G__65568 = (i__25827__auto___65567 + (1));
i__25827__auto___65567 = G__65568;
continue;
} else {
}
break;
}

var G__64962 = args64958.length;
switch (G__64962) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64958.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq64959){
var G__64960 = cljs.core.first.call(null,seq64959);
var seq64959__$1 = cljs.core.next.call(null,seq64959);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__64960,seq64959__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args64963 = [];
var len__25826__auto___65570 = arguments.length;
var i__25827__auto___65571 = (0);
while(true){
if((i__25827__auto___65571 < len__25826__auto___65570)){
args64963.push((arguments[i__25827__auto___65571]));

var G__65572 = (i__25827__auto___65571 + (1));
i__25827__auto___65571 = G__65572;
continue;
} else {
}
break;
}

var G__64967 = args64963.length;
switch (G__64967) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64963.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq64964){
var G__64965 = cljs.core.first.call(null,seq64964);
var seq64964__$1 = cljs.core.next.call(null,seq64964);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__64965,seq64964__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args64968 = [];
var len__25826__auto___65574 = arguments.length;
var i__25827__auto___65575 = (0);
while(true){
if((i__25827__auto___65575 < len__25826__auto___65574)){
args64968.push((arguments[i__25827__auto___65575]));

var G__65576 = (i__25827__auto___65575 + (1));
i__25827__auto___65575 = G__65576;
continue;
} else {
}
break;
}

var G__64972 = args64968.length;
switch (G__64972) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64968.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq64969){
var G__64970 = cljs.core.first.call(null,seq64969);
var seq64969__$1 = cljs.core.next.call(null,seq64969);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__64970,seq64969__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args64973 = [];
var len__25826__auto___65578 = arguments.length;
var i__25827__auto___65579 = (0);
while(true){
if((i__25827__auto___65579 < len__25826__auto___65578)){
args64973.push((arguments[i__25827__auto___65579]));

var G__65580 = (i__25827__auto___65579 + (1));
i__25827__auto___65579 = G__65580;
continue;
} else {
}
break;
}

var G__64977 = args64973.length;
switch (G__64977) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64973.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq64974){
var G__64975 = cljs.core.first.call(null,seq64974);
var seq64974__$1 = cljs.core.next.call(null,seq64974);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__64975,seq64974__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args64978 = [];
var len__25826__auto___65582 = arguments.length;
var i__25827__auto___65583 = (0);
while(true){
if((i__25827__auto___65583 < len__25826__auto___65582)){
args64978.push((arguments[i__25827__auto___65583]));

var G__65584 = (i__25827__auto___65583 + (1));
i__25827__auto___65583 = G__65584;
continue;
} else {
}
break;
}

var G__64982 = args64978.length;
switch (G__64982) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64978.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq64979){
var G__64980 = cljs.core.first.call(null,seq64979);
var seq64979__$1 = cljs.core.next.call(null,seq64979);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__64980,seq64979__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args64983 = [];
var len__25826__auto___65586 = arguments.length;
var i__25827__auto___65587 = (0);
while(true){
if((i__25827__auto___65587 < len__25826__auto___65586)){
args64983.push((arguments[i__25827__auto___65587]));

var G__65588 = (i__25827__auto___65587 + (1));
i__25827__auto___65587 = G__65588;
continue;
} else {
}
break;
}

var G__64987 = args64983.length;
switch (G__64987) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64983.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq64984){
var G__64985 = cljs.core.first.call(null,seq64984);
var seq64984__$1 = cljs.core.next.call(null,seq64984);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__64985,seq64984__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args64988 = [];
var len__25826__auto___65590 = arguments.length;
var i__25827__auto___65591 = (0);
while(true){
if((i__25827__auto___65591 < len__25826__auto___65590)){
args64988.push((arguments[i__25827__auto___65591]));

var G__65592 = (i__25827__auto___65591 + (1));
i__25827__auto___65591 = G__65592;
continue;
} else {
}
break;
}

var G__64992 = args64988.length;
switch (G__64992) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64988.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq64989){
var G__64990 = cljs.core.first.call(null,seq64989);
var seq64989__$1 = cljs.core.next.call(null,seq64989);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__64990,seq64989__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args64993 = [];
var len__25826__auto___65594 = arguments.length;
var i__25827__auto___65595 = (0);
while(true){
if((i__25827__auto___65595 < len__25826__auto___65594)){
args64993.push((arguments[i__25827__auto___65595]));

var G__65596 = (i__25827__auto___65595 + (1));
i__25827__auto___65595 = G__65596;
continue;
} else {
}
break;
}

var G__64997 = args64993.length;
switch (G__64997) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64993.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq64994){
var G__64995 = cljs.core.first.call(null,seq64994);
var seq64994__$1 = cljs.core.next.call(null,seq64994);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__64995,seq64994__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args64998 = [];
var len__25826__auto___65598 = arguments.length;
var i__25827__auto___65599 = (0);
while(true){
if((i__25827__auto___65599 < len__25826__auto___65598)){
args64998.push((arguments[i__25827__auto___65599]));

var G__65600 = (i__25827__auto___65599 + (1));
i__25827__auto___65599 = G__65600;
continue;
} else {
}
break;
}

var G__65002 = args64998.length;
switch (G__65002) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args64998.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq64999){
var G__65000 = cljs.core.first.call(null,seq64999);
var seq64999__$1 = cljs.core.next.call(null,seq64999);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__65000,seq64999__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args65003 = [];
var len__25826__auto___65602 = arguments.length;
var i__25827__auto___65603 = (0);
while(true){
if((i__25827__auto___65603 < len__25826__auto___65602)){
args65003.push((arguments[i__25827__auto___65603]));

var G__65604 = (i__25827__auto___65603 + (1));
i__25827__auto___65603 = G__65604;
continue;
} else {
}
break;
}

var G__65007 = args65003.length;
switch (G__65007) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65003.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq65004){
var G__65005 = cljs.core.first.call(null,seq65004);
var seq65004__$1 = cljs.core.next.call(null,seq65004);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__65005,seq65004__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args65008 = [];
var len__25826__auto___65606 = arguments.length;
var i__25827__auto___65607 = (0);
while(true){
if((i__25827__auto___65607 < len__25826__auto___65606)){
args65008.push((arguments[i__25827__auto___65607]));

var G__65608 = (i__25827__auto___65607 + (1));
i__25827__auto___65607 = G__65608;
continue;
} else {
}
break;
}

var G__65012 = args65008.length;
switch (G__65012) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65008.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq65009){
var G__65010 = cljs.core.first.call(null,seq65009);
var seq65009__$1 = cljs.core.next.call(null,seq65009);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__65010,seq65009__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args65013 = [];
var len__25826__auto___65610 = arguments.length;
var i__25827__auto___65611 = (0);
while(true){
if((i__25827__auto___65611 < len__25826__auto___65610)){
args65013.push((arguments[i__25827__auto___65611]));

var G__65612 = (i__25827__auto___65611 + (1));
i__25827__auto___65611 = G__65612;
continue;
} else {
}
break;
}

var G__65017 = args65013.length;
switch (G__65017) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65013.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq65014){
var G__65015 = cljs.core.first.call(null,seq65014);
var seq65014__$1 = cljs.core.next.call(null,seq65014);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__65015,seq65014__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args65018 = [];
var len__25826__auto___65614 = arguments.length;
var i__25827__auto___65615 = (0);
while(true){
if((i__25827__auto___65615 < len__25826__auto___65614)){
args65018.push((arguments[i__25827__auto___65615]));

var G__65616 = (i__25827__auto___65615 + (1));
i__25827__auto___65615 = G__65616;
continue;
} else {
}
break;
}

var G__65022 = args65018.length;
switch (G__65022) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65018.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq65019){
var G__65020 = cljs.core.first.call(null,seq65019);
var seq65019__$1 = cljs.core.next.call(null,seq65019);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__65020,seq65019__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args65023 = [];
var len__25826__auto___65618 = arguments.length;
var i__25827__auto___65619 = (0);
while(true){
if((i__25827__auto___65619 < len__25826__auto___65618)){
args65023.push((arguments[i__25827__auto___65619]));

var G__65620 = (i__25827__auto___65619 + (1));
i__25827__auto___65619 = G__65620;
continue;
} else {
}
break;
}

var G__65027 = args65023.length;
switch (G__65027) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65023.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq65024){
var G__65025 = cljs.core.first.call(null,seq65024);
var seq65024__$1 = cljs.core.next.call(null,seq65024);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__65025,seq65024__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args65028 = [];
var len__25826__auto___65622 = arguments.length;
var i__25827__auto___65623 = (0);
while(true){
if((i__25827__auto___65623 < len__25826__auto___65622)){
args65028.push((arguments[i__25827__auto___65623]));

var G__65624 = (i__25827__auto___65623 + (1));
i__25827__auto___65623 = G__65624;
continue;
} else {
}
break;
}

var G__65032 = args65028.length;
switch (G__65032) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65028.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq65029){
var G__65030 = cljs.core.first.call(null,seq65029);
var seq65029__$1 = cljs.core.next.call(null,seq65029);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__65030,seq65029__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args65038 = [];
var len__25826__auto___65626 = arguments.length;
var i__25827__auto___65627 = (0);
while(true){
if((i__25827__auto___65627 < len__25826__auto___65626)){
args65038.push((arguments[i__25827__auto___65627]));

var G__65628 = (i__25827__auto___65627 + (1));
i__25827__auto___65627 = G__65628;
continue;
} else {
}
break;
}

var G__65042 = args65038.length;
switch (G__65042) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65038.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq65039){
var G__65040 = cljs.core.first.call(null,seq65039);
var seq65039__$1 = cljs.core.next.call(null,seq65039);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__65040,seq65039__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args65043 = [];
var len__25826__auto___65630 = arguments.length;
var i__25827__auto___65631 = (0);
while(true){
if((i__25827__auto___65631 < len__25826__auto___65630)){
args65043.push((arguments[i__25827__auto___65631]));

var G__65632 = (i__25827__auto___65631 + (1));
i__25827__auto___65631 = G__65632;
continue;
} else {
}
break;
}

var G__65047 = args65043.length;
switch (G__65047) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65043.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq65044){
var G__65045 = cljs.core.first.call(null,seq65044);
var seq65044__$1 = cljs.core.next.call(null,seq65044);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__65045,seq65044__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args65048 = [];
var len__25826__auto___65634 = arguments.length;
var i__25827__auto___65635 = (0);
while(true){
if((i__25827__auto___65635 < len__25826__auto___65634)){
args65048.push((arguments[i__25827__auto___65635]));

var G__65636 = (i__25827__auto___65635 + (1));
i__25827__auto___65635 = G__65636;
continue;
} else {
}
break;
}

var G__65052 = args65048.length;
switch (G__65052) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65048.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq65049){
var G__65050 = cljs.core.first.call(null,seq65049);
var seq65049__$1 = cljs.core.next.call(null,seq65049);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__65050,seq65049__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args65053 = [];
var len__25826__auto___65638 = arguments.length;
var i__25827__auto___65639 = (0);
while(true){
if((i__25827__auto___65639 < len__25826__auto___65638)){
args65053.push((arguments[i__25827__auto___65639]));

var G__65640 = (i__25827__auto___65639 + (1));
i__25827__auto___65639 = G__65640;
continue;
} else {
}
break;
}

var G__65057 = args65053.length;
switch (G__65057) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65053.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq65054){
var G__65055 = cljs.core.first.call(null,seq65054);
var seq65054__$1 = cljs.core.next.call(null,seq65054);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__65055,seq65054__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args65058 = [];
var len__25826__auto___65642 = arguments.length;
var i__25827__auto___65643 = (0);
while(true){
if((i__25827__auto___65643 < len__25826__auto___65642)){
args65058.push((arguments[i__25827__auto___65643]));

var G__65644 = (i__25827__auto___65643 + (1));
i__25827__auto___65643 = G__65644;
continue;
} else {
}
break;
}

var G__65062 = args65058.length;
switch (G__65062) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65058.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq65059){
var G__65060 = cljs.core.first.call(null,seq65059);
var seq65059__$1 = cljs.core.next.call(null,seq65059);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__65060,seq65059__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args65063 = [];
var len__25826__auto___65646 = arguments.length;
var i__25827__auto___65647 = (0);
while(true){
if((i__25827__auto___65647 < len__25826__auto___65646)){
args65063.push((arguments[i__25827__auto___65647]));

var G__65648 = (i__25827__auto___65647 + (1));
i__25827__auto___65647 = G__65648;
continue;
} else {
}
break;
}

var G__65067 = args65063.length;
switch (G__65067) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65063.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq65064){
var G__65065 = cljs.core.first.call(null,seq65064);
var seq65064__$1 = cljs.core.next.call(null,seq65064);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__65065,seq65064__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args65068 = [];
var len__25826__auto___65650 = arguments.length;
var i__25827__auto___65651 = (0);
while(true){
if((i__25827__auto___65651 < len__25826__auto___65650)){
args65068.push((arguments[i__25827__auto___65651]));

var G__65652 = (i__25827__auto___65651 + (1));
i__25827__auto___65651 = G__65652;
continue;
} else {
}
break;
}

var G__65072 = args65068.length;
switch (G__65072) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65068.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq65069){
var G__65070 = cljs.core.first.call(null,seq65069);
var seq65069__$1 = cljs.core.next.call(null,seq65069);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__65070,seq65069__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args65073 = [];
var len__25826__auto___65654 = arguments.length;
var i__25827__auto___65655 = (0);
while(true){
if((i__25827__auto___65655 < len__25826__auto___65654)){
args65073.push((arguments[i__25827__auto___65655]));

var G__65656 = (i__25827__auto___65655 + (1));
i__25827__auto___65655 = G__65656;
continue;
} else {
}
break;
}

var G__65077 = args65073.length;
switch (G__65077) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65073.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq65074){
var G__65075 = cljs.core.first.call(null,seq65074);
var seq65074__$1 = cljs.core.next.call(null,seq65074);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__65075,seq65074__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args65078 = [];
var len__25826__auto___65658 = arguments.length;
var i__25827__auto___65659 = (0);
while(true){
if((i__25827__auto___65659 < len__25826__auto___65658)){
args65078.push((arguments[i__25827__auto___65659]));

var G__65660 = (i__25827__auto___65659 + (1));
i__25827__auto___65659 = G__65660;
continue;
} else {
}
break;
}

var G__65082 = args65078.length;
switch (G__65082) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65078.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq65079){
var G__65080 = cljs.core.first.call(null,seq65079);
var seq65079__$1 = cljs.core.next.call(null,seq65079);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__65080,seq65079__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args65083 = [];
var len__25826__auto___65662 = arguments.length;
var i__25827__auto___65663 = (0);
while(true){
if((i__25827__auto___65663 < len__25826__auto___65662)){
args65083.push((arguments[i__25827__auto___65663]));

var G__65664 = (i__25827__auto___65663 + (1));
i__25827__auto___65663 = G__65664;
continue;
} else {
}
break;
}

var G__65087 = args65083.length;
switch (G__65087) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65083.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq65084){
var G__65085 = cljs.core.first.call(null,seq65084);
var seq65084__$1 = cljs.core.next.call(null,seq65084);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__65085,seq65084__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args65088 = [];
var len__25826__auto___65666 = arguments.length;
var i__25827__auto___65667 = (0);
while(true){
if((i__25827__auto___65667 < len__25826__auto___65666)){
args65088.push((arguments[i__25827__auto___65667]));

var G__65668 = (i__25827__auto___65667 + (1));
i__25827__auto___65667 = G__65668;
continue;
} else {
}
break;
}

var G__65092 = args65088.length;
switch (G__65092) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65088.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq65089){
var G__65090 = cljs.core.first.call(null,seq65089);
var seq65089__$1 = cljs.core.next.call(null,seq65089);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__65090,seq65089__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args65093 = [];
var len__25826__auto___65670 = arguments.length;
var i__25827__auto___65671 = (0);
while(true){
if((i__25827__auto___65671 < len__25826__auto___65670)){
args65093.push((arguments[i__25827__auto___65671]));

var G__65672 = (i__25827__auto___65671 + (1));
i__25827__auto___65671 = G__65672;
continue;
} else {
}
break;
}

var G__65097 = args65093.length;
switch (G__65097) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65093.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq65094){
var G__65095 = cljs.core.first.call(null,seq65094);
var seq65094__$1 = cljs.core.next.call(null,seq65094);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__65095,seq65094__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args65098 = [];
var len__25826__auto___65674 = arguments.length;
var i__25827__auto___65675 = (0);
while(true){
if((i__25827__auto___65675 < len__25826__auto___65674)){
args65098.push((arguments[i__25827__auto___65675]));

var G__65676 = (i__25827__auto___65675 + (1));
i__25827__auto___65675 = G__65676;
continue;
} else {
}
break;
}

var G__65102 = args65098.length;
switch (G__65102) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65098.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq65099){
var G__65100 = cljs.core.first.call(null,seq65099);
var seq65099__$1 = cljs.core.next.call(null,seq65099);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__65100,seq65099__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args65103 = [];
var len__25826__auto___65678 = arguments.length;
var i__25827__auto___65679 = (0);
while(true){
if((i__25827__auto___65679 < len__25826__auto___65678)){
args65103.push((arguments[i__25827__auto___65679]));

var G__65680 = (i__25827__auto___65679 + (1));
i__25827__auto___65679 = G__65680;
continue;
} else {
}
break;
}

var G__65107 = args65103.length;
switch (G__65107) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65103.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq65104){
var G__65105 = cljs.core.first.call(null,seq65104);
var seq65104__$1 = cljs.core.next.call(null,seq65104);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__65105,seq65104__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args65108 = [];
var len__25826__auto___65682 = arguments.length;
var i__25827__auto___65683 = (0);
while(true){
if((i__25827__auto___65683 < len__25826__auto___65682)){
args65108.push((arguments[i__25827__auto___65683]));

var G__65684 = (i__25827__auto___65683 + (1));
i__25827__auto___65683 = G__65684;
continue;
} else {
}
break;
}

var G__65112 = args65108.length;
switch (G__65112) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65108.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq65109){
var G__65110 = cljs.core.first.call(null,seq65109);
var seq65109__$1 = cljs.core.next.call(null,seq65109);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__65110,seq65109__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args65113 = [];
var len__25826__auto___65686 = arguments.length;
var i__25827__auto___65687 = (0);
while(true){
if((i__25827__auto___65687 < len__25826__auto___65686)){
args65113.push((arguments[i__25827__auto___65687]));

var G__65688 = (i__25827__auto___65687 + (1));
i__25827__auto___65687 = G__65688;
continue;
} else {
}
break;
}

var G__65117 = args65113.length;
switch (G__65117) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65113.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq65114){
var G__65115 = cljs.core.first.call(null,seq65114);
var seq65114__$1 = cljs.core.next.call(null,seq65114);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__65115,seq65114__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args65118 = [];
var len__25826__auto___65690 = arguments.length;
var i__25827__auto___65691 = (0);
while(true){
if((i__25827__auto___65691 < len__25826__auto___65690)){
args65118.push((arguments[i__25827__auto___65691]));

var G__65692 = (i__25827__auto___65691 + (1));
i__25827__auto___65691 = G__65692;
continue;
} else {
}
break;
}

var G__65122 = args65118.length;
switch (G__65122) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65118.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq65119){
var G__65120 = cljs.core.first.call(null,seq65119);
var seq65119__$1 = cljs.core.next.call(null,seq65119);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__65120,seq65119__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args65123 = [];
var len__25826__auto___65694 = arguments.length;
var i__25827__auto___65695 = (0);
while(true){
if((i__25827__auto___65695 < len__25826__auto___65694)){
args65123.push((arguments[i__25827__auto___65695]));

var G__65696 = (i__25827__auto___65695 + (1));
i__25827__auto___65695 = G__65696;
continue;
} else {
}
break;
}

var G__65127 = args65123.length;
switch (G__65127) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65123.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq65124){
var G__65125 = cljs.core.first.call(null,seq65124);
var seq65124__$1 = cljs.core.next.call(null,seq65124);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__65125,seq65124__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args65128 = [];
var len__25826__auto___65698 = arguments.length;
var i__25827__auto___65699 = (0);
while(true){
if((i__25827__auto___65699 < len__25826__auto___65698)){
args65128.push((arguments[i__25827__auto___65699]));

var G__65700 = (i__25827__auto___65699 + (1));
i__25827__auto___65699 = G__65700;
continue;
} else {
}
break;
}

var G__65132 = args65128.length;
switch (G__65132) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65128.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq65129){
var G__65130 = cljs.core.first.call(null,seq65129);
var seq65129__$1 = cljs.core.next.call(null,seq65129);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__65130,seq65129__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args65133 = [];
var len__25826__auto___65702 = arguments.length;
var i__25827__auto___65703 = (0);
while(true){
if((i__25827__auto___65703 < len__25826__auto___65702)){
args65133.push((arguments[i__25827__auto___65703]));

var G__65704 = (i__25827__auto___65703 + (1));
i__25827__auto___65703 = G__65704;
continue;
} else {
}
break;
}

var G__65137 = args65133.length;
switch (G__65137) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65133.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq65134){
var G__65135 = cljs.core.first.call(null,seq65134);
var seq65134__$1 = cljs.core.next.call(null,seq65134);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__65135,seq65134__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args65138 = [];
var len__25826__auto___65706 = arguments.length;
var i__25827__auto___65707 = (0);
while(true){
if((i__25827__auto___65707 < len__25826__auto___65706)){
args65138.push((arguments[i__25827__auto___65707]));

var G__65708 = (i__25827__auto___65707 + (1));
i__25827__auto___65707 = G__65708;
continue;
} else {
}
break;
}

var G__65142 = args65138.length;
switch (G__65142) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65138.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq65139){
var G__65140 = cljs.core.first.call(null,seq65139);
var seq65139__$1 = cljs.core.next.call(null,seq65139);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__65140,seq65139__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args65143 = [];
var len__25826__auto___65710 = arguments.length;
var i__25827__auto___65711 = (0);
while(true){
if((i__25827__auto___65711 < len__25826__auto___65710)){
args65143.push((arguments[i__25827__auto___65711]));

var G__65712 = (i__25827__auto___65711 + (1));
i__25827__auto___65711 = G__65712;
continue;
} else {
}
break;
}

var G__65147 = args65143.length;
switch (G__65147) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65143.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq65144){
var G__65145 = cljs.core.first.call(null,seq65144);
var seq65144__$1 = cljs.core.next.call(null,seq65144);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__65145,seq65144__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args65148 = [];
var len__25826__auto___65714 = arguments.length;
var i__25827__auto___65715 = (0);
while(true){
if((i__25827__auto___65715 < len__25826__auto___65714)){
args65148.push((arguments[i__25827__auto___65715]));

var G__65716 = (i__25827__auto___65715 + (1));
i__25827__auto___65715 = G__65716;
continue;
} else {
}
break;
}

var G__65152 = args65148.length;
switch (G__65152) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65148.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq65149){
var G__65150 = cljs.core.first.call(null,seq65149);
var seq65149__$1 = cljs.core.next.call(null,seq65149);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__65150,seq65149__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args65153 = [];
var len__25826__auto___65718 = arguments.length;
var i__25827__auto___65719 = (0);
while(true){
if((i__25827__auto___65719 < len__25826__auto___65718)){
args65153.push((arguments[i__25827__auto___65719]));

var G__65720 = (i__25827__auto___65719 + (1));
i__25827__auto___65719 = G__65720;
continue;
} else {
}
break;
}

var G__65157 = args65153.length;
switch (G__65157) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65153.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq65154){
var G__65155 = cljs.core.first.call(null,seq65154);
var seq65154__$1 = cljs.core.next.call(null,seq65154);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__65155,seq65154__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args65158 = [];
var len__25826__auto___65722 = arguments.length;
var i__25827__auto___65723 = (0);
while(true){
if((i__25827__auto___65723 < len__25826__auto___65722)){
args65158.push((arguments[i__25827__auto___65723]));

var G__65724 = (i__25827__auto___65723 + (1));
i__25827__auto___65723 = G__65724;
continue;
} else {
}
break;
}

var G__65162 = args65158.length;
switch (G__65162) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65158.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq65159){
var G__65160 = cljs.core.first.call(null,seq65159);
var seq65159__$1 = cljs.core.next.call(null,seq65159);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__65160,seq65159__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args65163 = [];
var len__25826__auto___65726 = arguments.length;
var i__25827__auto___65727 = (0);
while(true){
if((i__25827__auto___65727 < len__25826__auto___65726)){
args65163.push((arguments[i__25827__auto___65727]));

var G__65728 = (i__25827__auto___65727 + (1));
i__25827__auto___65727 = G__65728;
continue;
} else {
}
break;
}

var G__65167 = args65163.length;
switch (G__65167) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65163.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq65164){
var G__65165 = cljs.core.first.call(null,seq65164);
var seq65164__$1 = cljs.core.next.call(null,seq65164);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__65165,seq65164__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args65168 = [];
var len__25826__auto___65730 = arguments.length;
var i__25827__auto___65731 = (0);
while(true){
if((i__25827__auto___65731 < len__25826__auto___65730)){
args65168.push((arguments[i__25827__auto___65731]));

var G__65732 = (i__25827__auto___65731 + (1));
i__25827__auto___65731 = G__65732;
continue;
} else {
}
break;
}

var G__65172 = args65168.length;
switch (G__65172) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65168.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq65169){
var G__65170 = cljs.core.first.call(null,seq65169);
var seq65169__$1 = cljs.core.next.call(null,seq65169);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__65170,seq65169__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args65173 = [];
var len__25826__auto___65734 = arguments.length;
var i__25827__auto___65735 = (0);
while(true){
if((i__25827__auto___65735 < len__25826__auto___65734)){
args65173.push((arguments[i__25827__auto___65735]));

var G__65736 = (i__25827__auto___65735 + (1));
i__25827__auto___65735 = G__65736;
continue;
} else {
}
break;
}

var G__65177 = args65173.length;
switch (G__65177) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65173.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq65174){
var G__65175 = cljs.core.first.call(null,seq65174);
var seq65174__$1 = cljs.core.next.call(null,seq65174);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__65175,seq65174__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args65178 = [];
var len__25826__auto___65738 = arguments.length;
var i__25827__auto___65739 = (0);
while(true){
if((i__25827__auto___65739 < len__25826__auto___65738)){
args65178.push((arguments[i__25827__auto___65739]));

var G__65740 = (i__25827__auto___65739 + (1));
i__25827__auto___65739 = G__65740;
continue;
} else {
}
break;
}

var G__65182 = args65178.length;
switch (G__65182) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65178.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq65179){
var G__65180 = cljs.core.first.call(null,seq65179);
var seq65179__$1 = cljs.core.next.call(null,seq65179);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__65180,seq65179__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args65183 = [];
var len__25826__auto___65742 = arguments.length;
var i__25827__auto___65743 = (0);
while(true){
if((i__25827__auto___65743 < len__25826__auto___65742)){
args65183.push((arguments[i__25827__auto___65743]));

var G__65744 = (i__25827__auto___65743 + (1));
i__25827__auto___65743 = G__65744;
continue;
} else {
}
break;
}

var G__65187 = args65183.length;
switch (G__65187) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65183.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq65184){
var G__65185 = cljs.core.first.call(null,seq65184);
var seq65184__$1 = cljs.core.next.call(null,seq65184);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__65185,seq65184__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args65188 = [];
var len__25826__auto___65746 = arguments.length;
var i__25827__auto___65747 = (0);
while(true){
if((i__25827__auto___65747 < len__25826__auto___65746)){
args65188.push((arguments[i__25827__auto___65747]));

var G__65748 = (i__25827__auto___65747 + (1));
i__25827__auto___65747 = G__65748;
continue;
} else {
}
break;
}

var G__65192 = args65188.length;
switch (G__65192) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65188.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq65189){
var G__65190 = cljs.core.first.call(null,seq65189);
var seq65189__$1 = cljs.core.next.call(null,seq65189);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__65190,seq65189__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args65193 = [];
var len__25826__auto___65750 = arguments.length;
var i__25827__auto___65751 = (0);
while(true){
if((i__25827__auto___65751 < len__25826__auto___65750)){
args65193.push((arguments[i__25827__auto___65751]));

var G__65752 = (i__25827__auto___65751 + (1));
i__25827__auto___65751 = G__65752;
continue;
} else {
}
break;
}

var G__65197 = args65193.length;
switch (G__65197) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65193.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq65194){
var G__65195 = cljs.core.first.call(null,seq65194);
var seq65194__$1 = cljs.core.next.call(null,seq65194);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__65195,seq65194__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args65198 = [];
var len__25826__auto___65754 = arguments.length;
var i__25827__auto___65755 = (0);
while(true){
if((i__25827__auto___65755 < len__25826__auto___65754)){
args65198.push((arguments[i__25827__auto___65755]));

var G__65756 = (i__25827__auto___65755 + (1));
i__25827__auto___65755 = G__65756;
continue;
} else {
}
break;
}

var G__65202 = args65198.length;
switch (G__65202) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65198.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq65199){
var G__65200 = cljs.core.first.call(null,seq65199);
var seq65199__$1 = cljs.core.next.call(null,seq65199);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__65200,seq65199__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args65203 = [];
var len__25826__auto___65758 = arguments.length;
var i__25827__auto___65759 = (0);
while(true){
if((i__25827__auto___65759 < len__25826__auto___65758)){
args65203.push((arguments[i__25827__auto___65759]));

var G__65760 = (i__25827__auto___65759 + (1));
i__25827__auto___65759 = G__65760;
continue;
} else {
}
break;
}

var G__65207 = args65203.length;
switch (G__65207) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65203.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq65204){
var G__65205 = cljs.core.first.call(null,seq65204);
var seq65204__$1 = cljs.core.next.call(null,seq65204);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__65205,seq65204__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args65208 = [];
var len__25826__auto___65762 = arguments.length;
var i__25827__auto___65763 = (0);
while(true){
if((i__25827__auto___65763 < len__25826__auto___65762)){
args65208.push((arguments[i__25827__auto___65763]));

var G__65764 = (i__25827__auto___65763 + (1));
i__25827__auto___65763 = G__65764;
continue;
} else {
}
break;
}

var G__65212 = args65208.length;
switch (G__65212) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65208.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq65209){
var G__65210 = cljs.core.first.call(null,seq65209);
var seq65209__$1 = cljs.core.next.call(null,seq65209);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__65210,seq65209__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args65213 = [];
var len__25826__auto___65766 = arguments.length;
var i__25827__auto___65767 = (0);
while(true){
if((i__25827__auto___65767 < len__25826__auto___65766)){
args65213.push((arguments[i__25827__auto___65767]));

var G__65768 = (i__25827__auto___65767 + (1));
i__25827__auto___65767 = G__65768;
continue;
} else {
}
break;
}

var G__65217 = args65213.length;
switch (G__65217) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65213.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq65214){
var G__65215 = cljs.core.first.call(null,seq65214);
var seq65214__$1 = cljs.core.next.call(null,seq65214);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__65215,seq65214__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args65218 = [];
var len__25826__auto___65770 = arguments.length;
var i__25827__auto___65771 = (0);
while(true){
if((i__25827__auto___65771 < len__25826__auto___65770)){
args65218.push((arguments[i__25827__auto___65771]));

var G__65772 = (i__25827__auto___65771 + (1));
i__25827__auto___65771 = G__65772;
continue;
} else {
}
break;
}

var G__65222 = args65218.length;
switch (G__65222) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65218.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq65219){
var G__65220 = cljs.core.first.call(null,seq65219);
var seq65219__$1 = cljs.core.next.call(null,seq65219);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__65220,seq65219__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args65223 = [];
var len__25826__auto___65774 = arguments.length;
var i__25827__auto___65775 = (0);
while(true){
if((i__25827__auto___65775 < len__25826__auto___65774)){
args65223.push((arguments[i__25827__auto___65775]));

var G__65776 = (i__25827__auto___65775 + (1));
i__25827__auto___65775 = G__65776;
continue;
} else {
}
break;
}

var G__65227 = args65223.length;
switch (G__65227) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65223.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq65224){
var G__65225 = cljs.core.first.call(null,seq65224);
var seq65224__$1 = cljs.core.next.call(null,seq65224);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__65225,seq65224__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args65228 = [];
var len__25826__auto___65778 = arguments.length;
var i__25827__auto___65779 = (0);
while(true){
if((i__25827__auto___65779 < len__25826__auto___65778)){
args65228.push((arguments[i__25827__auto___65779]));

var G__65780 = (i__25827__auto___65779 + (1));
i__25827__auto___65779 = G__65780;
continue;
} else {
}
break;
}

var G__65232 = args65228.length;
switch (G__65232) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65228.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq65229){
var G__65230 = cljs.core.first.call(null,seq65229);
var seq65229__$1 = cljs.core.next.call(null,seq65229);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__65230,seq65229__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args65233 = [];
var len__25826__auto___65782 = arguments.length;
var i__25827__auto___65783 = (0);
while(true){
if((i__25827__auto___65783 < len__25826__auto___65782)){
args65233.push((arguments[i__25827__auto___65783]));

var G__65784 = (i__25827__auto___65783 + (1));
i__25827__auto___65783 = G__65784;
continue;
} else {
}
break;
}

var G__65237 = args65233.length;
switch (G__65237) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65233.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq65234){
var G__65235 = cljs.core.first.call(null,seq65234);
var seq65234__$1 = cljs.core.next.call(null,seq65234);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__65235,seq65234__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args65238 = [];
var len__25826__auto___65786 = arguments.length;
var i__25827__auto___65787 = (0);
while(true){
if((i__25827__auto___65787 < len__25826__auto___65786)){
args65238.push((arguments[i__25827__auto___65787]));

var G__65788 = (i__25827__auto___65787 + (1));
i__25827__auto___65787 = G__65788;
continue;
} else {
}
break;
}

var G__65242 = args65238.length;
switch (G__65242) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65238.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq65239){
var G__65240 = cljs.core.first.call(null,seq65239);
var seq65239__$1 = cljs.core.next.call(null,seq65239);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__65240,seq65239__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args65243 = [];
var len__25826__auto___65790 = arguments.length;
var i__25827__auto___65791 = (0);
while(true){
if((i__25827__auto___65791 < len__25826__auto___65790)){
args65243.push((arguments[i__25827__auto___65791]));

var G__65792 = (i__25827__auto___65791 + (1));
i__25827__auto___65791 = G__65792;
continue;
} else {
}
break;
}

var G__65247 = args65243.length;
switch (G__65247) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65243.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq65244){
var G__65245 = cljs.core.first.call(null,seq65244);
var seq65244__$1 = cljs.core.next.call(null,seq65244);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__65245,seq65244__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args65248 = [];
var len__25826__auto___65794 = arguments.length;
var i__25827__auto___65795 = (0);
while(true){
if((i__25827__auto___65795 < len__25826__auto___65794)){
args65248.push((arguments[i__25827__auto___65795]));

var G__65796 = (i__25827__auto___65795 + (1));
i__25827__auto___65795 = G__65796;
continue;
} else {
}
break;
}

var G__65252 = args65248.length;
switch (G__65252) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65248.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq65249){
var G__65250 = cljs.core.first.call(null,seq65249);
var seq65249__$1 = cljs.core.next.call(null,seq65249);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__65250,seq65249__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args65253 = [];
var len__25826__auto___65798 = arguments.length;
var i__25827__auto___65799 = (0);
while(true){
if((i__25827__auto___65799 < len__25826__auto___65798)){
args65253.push((arguments[i__25827__auto___65799]));

var G__65800 = (i__25827__auto___65799 + (1));
i__25827__auto___65799 = G__65800;
continue;
} else {
}
break;
}

var G__65257 = args65253.length;
switch (G__65257) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65253.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq65254){
var G__65255 = cljs.core.first.call(null,seq65254);
var seq65254__$1 = cljs.core.next.call(null,seq65254);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__65255,seq65254__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args65258 = [];
var len__25826__auto___65802 = arguments.length;
var i__25827__auto___65803 = (0);
while(true){
if((i__25827__auto___65803 < len__25826__auto___65802)){
args65258.push((arguments[i__25827__auto___65803]));

var G__65804 = (i__25827__auto___65803 + (1));
i__25827__auto___65803 = G__65804;
continue;
} else {
}
break;
}

var G__65262 = args65258.length;
switch (G__65262) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65258.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq65259){
var G__65260 = cljs.core.first.call(null,seq65259);
var seq65259__$1 = cljs.core.next.call(null,seq65259);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__65260,seq65259__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args65263 = [];
var len__25826__auto___65806 = arguments.length;
var i__25827__auto___65807 = (0);
while(true){
if((i__25827__auto___65807 < len__25826__auto___65806)){
args65263.push((arguments[i__25827__auto___65807]));

var G__65808 = (i__25827__auto___65807 + (1));
i__25827__auto___65807 = G__65808;
continue;
} else {
}
break;
}

var G__65267 = args65263.length;
switch (G__65267) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65263.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq65264){
var G__65265 = cljs.core.first.call(null,seq65264);
var seq65264__$1 = cljs.core.next.call(null,seq65264);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__65265,seq65264__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args65268 = [];
var len__25826__auto___65810 = arguments.length;
var i__25827__auto___65811 = (0);
while(true){
if((i__25827__auto___65811 < len__25826__auto___65810)){
args65268.push((arguments[i__25827__auto___65811]));

var G__65812 = (i__25827__auto___65811 + (1));
i__25827__auto___65811 = G__65812;
continue;
} else {
}
break;
}

var G__65272 = args65268.length;
switch (G__65272) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65268.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq65269){
var G__65270 = cljs.core.first.call(null,seq65269);
var seq65269__$1 = cljs.core.next.call(null,seq65269);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__65270,seq65269__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args65273 = [];
var len__25826__auto___65814 = arguments.length;
var i__25827__auto___65815 = (0);
while(true){
if((i__25827__auto___65815 < len__25826__auto___65814)){
args65273.push((arguments[i__25827__auto___65815]));

var G__65816 = (i__25827__auto___65815 + (1));
i__25827__auto___65815 = G__65816;
continue;
} else {
}
break;
}

var G__65277 = args65273.length;
switch (G__65277) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65273.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq65274){
var G__65275 = cljs.core.first.call(null,seq65274);
var seq65274__$1 = cljs.core.next.call(null,seq65274);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__65275,seq65274__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args65278 = [];
var len__25826__auto___65818 = arguments.length;
var i__25827__auto___65819 = (0);
while(true){
if((i__25827__auto___65819 < len__25826__auto___65818)){
args65278.push((arguments[i__25827__auto___65819]));

var G__65820 = (i__25827__auto___65819 + (1));
i__25827__auto___65819 = G__65820;
continue;
} else {
}
break;
}

var G__65282 = args65278.length;
switch (G__65282) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65278.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq65279){
var G__65280 = cljs.core.first.call(null,seq65279);
var seq65279__$1 = cljs.core.next.call(null,seq65279);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__65280,seq65279__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args65283 = [];
var len__25826__auto___65822 = arguments.length;
var i__25827__auto___65823 = (0);
while(true){
if((i__25827__auto___65823 < len__25826__auto___65822)){
args65283.push((arguments[i__25827__auto___65823]));

var G__65824 = (i__25827__auto___65823 + (1));
i__25827__auto___65823 = G__65824;
continue;
} else {
}
break;
}

var G__65287 = args65283.length;
switch (G__65287) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65283.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq65284){
var G__65285 = cljs.core.first.call(null,seq65284);
var seq65284__$1 = cljs.core.next.call(null,seq65284);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__65285,seq65284__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args65288 = [];
var len__25826__auto___65826 = arguments.length;
var i__25827__auto___65827 = (0);
while(true){
if((i__25827__auto___65827 < len__25826__auto___65826)){
args65288.push((arguments[i__25827__auto___65827]));

var G__65828 = (i__25827__auto___65827 + (1));
i__25827__auto___65827 = G__65828;
continue;
} else {
}
break;
}

var G__65292 = args65288.length;
switch (G__65292) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65288.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq65289){
var G__65290 = cljs.core.first.call(null,seq65289);
var seq65289__$1 = cljs.core.next.call(null,seq65289);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__65290,seq65289__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args65293 = [];
var len__25826__auto___65830 = arguments.length;
var i__25827__auto___65831 = (0);
while(true){
if((i__25827__auto___65831 < len__25826__auto___65830)){
args65293.push((arguments[i__25827__auto___65831]));

var G__65832 = (i__25827__auto___65831 + (1));
i__25827__auto___65831 = G__65832;
continue;
} else {
}
break;
}

var G__65297 = args65293.length;
switch (G__65297) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65293.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq65294){
var G__65295 = cljs.core.first.call(null,seq65294);
var seq65294__$1 = cljs.core.next.call(null,seq65294);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__65295,seq65294__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args65298 = [];
var len__25826__auto___65834 = arguments.length;
var i__25827__auto___65835 = (0);
while(true){
if((i__25827__auto___65835 < len__25826__auto___65834)){
args65298.push((arguments[i__25827__auto___65835]));

var G__65836 = (i__25827__auto___65835 + (1));
i__25827__auto___65835 = G__65836;
continue;
} else {
}
break;
}

var G__65302 = args65298.length;
switch (G__65302) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65298.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq65299){
var G__65300 = cljs.core.first.call(null,seq65299);
var seq65299__$1 = cljs.core.next.call(null,seq65299);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__65300,seq65299__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args65303 = [];
var len__25826__auto___65838 = arguments.length;
var i__25827__auto___65839 = (0);
while(true){
if((i__25827__auto___65839 < len__25826__auto___65838)){
args65303.push((arguments[i__25827__auto___65839]));

var G__65840 = (i__25827__auto___65839 + (1));
i__25827__auto___65839 = G__65840;
continue;
} else {
}
break;
}

var G__65307 = args65303.length;
switch (G__65307) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65303.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq65304){
var G__65305 = cljs.core.first.call(null,seq65304);
var seq65304__$1 = cljs.core.next.call(null,seq65304);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__65305,seq65304__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args65308 = [];
var len__25826__auto___65842 = arguments.length;
var i__25827__auto___65843 = (0);
while(true){
if((i__25827__auto___65843 < len__25826__auto___65842)){
args65308.push((arguments[i__25827__auto___65843]));

var G__65844 = (i__25827__auto___65843 + (1));
i__25827__auto___65843 = G__65844;
continue;
} else {
}
break;
}

var G__65312 = args65308.length;
switch (G__65312) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65308.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq65309){
var G__65310 = cljs.core.first.call(null,seq65309);
var seq65309__$1 = cljs.core.next.call(null,seq65309);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__65310,seq65309__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args65313 = [];
var len__25826__auto___65846 = arguments.length;
var i__25827__auto___65847 = (0);
while(true){
if((i__25827__auto___65847 < len__25826__auto___65846)){
args65313.push((arguments[i__25827__auto___65847]));

var G__65848 = (i__25827__auto___65847 + (1));
i__25827__auto___65847 = G__65848;
continue;
} else {
}
break;
}

var G__65317 = args65313.length;
switch (G__65317) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65313.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq65314){
var G__65315 = cljs.core.first.call(null,seq65314);
var seq65314__$1 = cljs.core.next.call(null,seq65314);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__65315,seq65314__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args65318 = [];
var len__25826__auto___65850 = arguments.length;
var i__25827__auto___65851 = (0);
while(true){
if((i__25827__auto___65851 < len__25826__auto___65850)){
args65318.push((arguments[i__25827__auto___65851]));

var G__65852 = (i__25827__auto___65851 + (1));
i__25827__auto___65851 = G__65852;
continue;
} else {
}
break;
}

var G__65322 = args65318.length;
switch (G__65322) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65318.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq65319){
var G__65320 = cljs.core.first.call(null,seq65319);
var seq65319__$1 = cljs.core.next.call(null,seq65319);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__65320,seq65319__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args65323 = [];
var len__25826__auto___65854 = arguments.length;
var i__25827__auto___65855 = (0);
while(true){
if((i__25827__auto___65855 < len__25826__auto___65854)){
args65323.push((arguments[i__25827__auto___65855]));

var G__65856 = (i__25827__auto___65855 + (1));
i__25827__auto___65855 = G__65856;
continue;
} else {
}
break;
}

var G__65327 = args65323.length;
switch (G__65327) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65323.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq65324){
var G__65325 = cljs.core.first.call(null,seq65324);
var seq65324__$1 = cljs.core.next.call(null,seq65324);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__65325,seq65324__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args65328 = [];
var len__25826__auto___65858 = arguments.length;
var i__25827__auto___65859 = (0);
while(true){
if((i__25827__auto___65859 < len__25826__auto___65858)){
args65328.push((arguments[i__25827__auto___65859]));

var G__65860 = (i__25827__auto___65859 + (1));
i__25827__auto___65859 = G__65860;
continue;
} else {
}
break;
}

var G__65332 = args65328.length;
switch (G__65332) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65328.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq65329){
var G__65330 = cljs.core.first.call(null,seq65329);
var seq65329__$1 = cljs.core.next.call(null,seq65329);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__65330,seq65329__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args65333 = [];
var len__25826__auto___65862 = arguments.length;
var i__25827__auto___65863 = (0);
while(true){
if((i__25827__auto___65863 < len__25826__auto___65862)){
args65333.push((arguments[i__25827__auto___65863]));

var G__65864 = (i__25827__auto___65863 + (1));
i__25827__auto___65863 = G__65864;
continue;
} else {
}
break;
}

var G__65337 = args65333.length;
switch (G__65337) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65333.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq65334){
var G__65335 = cljs.core.first.call(null,seq65334);
var seq65334__$1 = cljs.core.next.call(null,seq65334);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__65335,seq65334__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args65338 = [];
var len__25826__auto___65866 = arguments.length;
var i__25827__auto___65867 = (0);
while(true){
if((i__25827__auto___65867 < len__25826__auto___65866)){
args65338.push((arguments[i__25827__auto___65867]));

var G__65868 = (i__25827__auto___65867 + (1));
i__25827__auto___65867 = G__65868;
continue;
} else {
}
break;
}

var G__65342 = args65338.length;
switch (G__65342) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65338.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq65339){
var G__65340 = cljs.core.first.call(null,seq65339);
var seq65339__$1 = cljs.core.next.call(null,seq65339);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__65340,seq65339__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args65343 = [];
var len__25826__auto___65870 = arguments.length;
var i__25827__auto___65871 = (0);
while(true){
if((i__25827__auto___65871 < len__25826__auto___65870)){
args65343.push((arguments[i__25827__auto___65871]));

var G__65872 = (i__25827__auto___65871 + (1));
i__25827__auto___65871 = G__65872;
continue;
} else {
}
break;
}

var G__65347 = args65343.length;
switch (G__65347) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65343.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq65344){
var G__65345 = cljs.core.first.call(null,seq65344);
var seq65344__$1 = cljs.core.next.call(null,seq65344);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__65345,seq65344__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args65348 = [];
var len__25826__auto___65874 = arguments.length;
var i__25827__auto___65875 = (0);
while(true){
if((i__25827__auto___65875 < len__25826__auto___65874)){
args65348.push((arguments[i__25827__auto___65875]));

var G__65876 = (i__25827__auto___65875 + (1));
i__25827__auto___65875 = G__65876;
continue;
} else {
}
break;
}

var G__65352 = args65348.length;
switch (G__65352) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65348.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq65349){
var G__65350 = cljs.core.first.call(null,seq65349);
var seq65349__$1 = cljs.core.next.call(null,seq65349);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__65350,seq65349__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args65353 = [];
var len__25826__auto___65878 = arguments.length;
var i__25827__auto___65879 = (0);
while(true){
if((i__25827__auto___65879 < len__25826__auto___65878)){
args65353.push((arguments[i__25827__auto___65879]));

var G__65880 = (i__25827__auto___65879 + (1));
i__25827__auto___65879 = G__65880;
continue;
} else {
}
break;
}

var G__65357 = args65353.length;
switch (G__65357) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65353.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq65354){
var G__65355 = cljs.core.first.call(null,seq65354);
var seq65354__$1 = cljs.core.next.call(null,seq65354);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__65355,seq65354__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args65358 = [];
var len__25826__auto___65882 = arguments.length;
var i__25827__auto___65883 = (0);
while(true){
if((i__25827__auto___65883 < len__25826__auto___65882)){
args65358.push((arguments[i__25827__auto___65883]));

var G__65884 = (i__25827__auto___65883 + (1));
i__25827__auto___65883 = G__65884;
continue;
} else {
}
break;
}

var G__65362 = args65358.length;
switch (G__65362) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65358.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq65359){
var G__65360 = cljs.core.first.call(null,seq65359);
var seq65359__$1 = cljs.core.next.call(null,seq65359);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__65360,seq65359__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args65363 = [];
var len__25826__auto___65886 = arguments.length;
var i__25827__auto___65887 = (0);
while(true){
if((i__25827__auto___65887 < len__25826__auto___65886)){
args65363.push((arguments[i__25827__auto___65887]));

var G__65888 = (i__25827__auto___65887 + (1));
i__25827__auto___65887 = G__65888;
continue;
} else {
}
break;
}

var G__65367 = args65363.length;
switch (G__65367) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65363.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq65364){
var G__65365 = cljs.core.first.call(null,seq65364);
var seq65364__$1 = cljs.core.next.call(null,seq65364);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__65365,seq65364__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args65368 = [];
var len__25826__auto___65890 = arguments.length;
var i__25827__auto___65891 = (0);
while(true){
if((i__25827__auto___65891 < len__25826__auto___65890)){
args65368.push((arguments[i__25827__auto___65891]));

var G__65892 = (i__25827__auto___65891 + (1));
i__25827__auto___65891 = G__65892;
continue;
} else {
}
break;
}

var G__65372 = args65368.length;
switch (G__65372) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65368.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq65369){
var G__65370 = cljs.core.first.call(null,seq65369);
var seq65369__$1 = cljs.core.next.call(null,seq65369);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__65370,seq65369__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args65373 = [];
var len__25826__auto___65894 = arguments.length;
var i__25827__auto___65895 = (0);
while(true){
if((i__25827__auto___65895 < len__25826__auto___65894)){
args65373.push((arguments[i__25827__auto___65895]));

var G__65896 = (i__25827__auto___65895 + (1));
i__25827__auto___65895 = G__65896;
continue;
} else {
}
break;
}

var G__65377 = args65373.length;
switch (G__65377) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65373.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq65374){
var G__65375 = cljs.core.first.call(null,seq65374);
var seq65374__$1 = cljs.core.next.call(null,seq65374);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__65375,seq65374__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args65378 = [];
var len__25826__auto___65898 = arguments.length;
var i__25827__auto___65899 = (0);
while(true){
if((i__25827__auto___65899 < len__25826__auto___65898)){
args65378.push((arguments[i__25827__auto___65899]));

var G__65900 = (i__25827__auto___65899 + (1));
i__25827__auto___65899 = G__65900;
continue;
} else {
}
break;
}

var G__65382 = args65378.length;
switch (G__65382) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65378.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq65379){
var G__65380 = cljs.core.first.call(null,seq65379);
var seq65379__$1 = cljs.core.next.call(null,seq65379);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__65380,seq65379__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args65383 = [];
var len__25826__auto___65902 = arguments.length;
var i__25827__auto___65903 = (0);
while(true){
if((i__25827__auto___65903 < len__25826__auto___65902)){
args65383.push((arguments[i__25827__auto___65903]));

var G__65904 = (i__25827__auto___65903 + (1));
i__25827__auto___65903 = G__65904;
continue;
} else {
}
break;
}

var G__65387 = args65383.length;
switch (G__65387) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65383.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq65384){
var G__65385 = cljs.core.first.call(null,seq65384);
var seq65384__$1 = cljs.core.next.call(null,seq65384);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__65385,seq65384__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args65388 = [];
var len__25826__auto___65906 = arguments.length;
var i__25827__auto___65907 = (0);
while(true){
if((i__25827__auto___65907 < len__25826__auto___65906)){
args65388.push((arguments[i__25827__auto___65907]));

var G__65908 = (i__25827__auto___65907 + (1));
i__25827__auto___65907 = G__65908;
continue;
} else {
}
break;
}

var G__65392 = args65388.length;
switch (G__65392) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65388.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq65389){
var G__65390 = cljs.core.first.call(null,seq65389);
var seq65389__$1 = cljs.core.next.call(null,seq65389);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__65390,seq65389__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args65393 = [];
var len__25826__auto___65910 = arguments.length;
var i__25827__auto___65911 = (0);
while(true){
if((i__25827__auto___65911 < len__25826__auto___65910)){
args65393.push((arguments[i__25827__auto___65911]));

var G__65912 = (i__25827__auto___65911 + (1));
i__25827__auto___65911 = G__65912;
continue;
} else {
}
break;
}

var G__65397 = args65393.length;
switch (G__65397) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65393.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq65394){
var G__65395 = cljs.core.first.call(null,seq65394);
var seq65394__$1 = cljs.core.next.call(null,seq65394);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__65395,seq65394__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args65398 = [];
var len__25826__auto___65914 = arguments.length;
var i__25827__auto___65915 = (0);
while(true){
if((i__25827__auto___65915 < len__25826__auto___65914)){
args65398.push((arguments[i__25827__auto___65915]));

var G__65916 = (i__25827__auto___65915 + (1));
i__25827__auto___65915 = G__65916;
continue;
} else {
}
break;
}

var G__65402 = args65398.length;
switch (G__65402) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65398.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq65399){
var G__65400 = cljs.core.first.call(null,seq65399);
var seq65399__$1 = cljs.core.next.call(null,seq65399);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__65400,seq65399__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args65403 = [];
var len__25826__auto___65918 = arguments.length;
var i__25827__auto___65919 = (0);
while(true){
if((i__25827__auto___65919 < len__25826__auto___65918)){
args65403.push((arguments[i__25827__auto___65919]));

var G__65920 = (i__25827__auto___65919 + (1));
i__25827__auto___65919 = G__65920;
continue;
} else {
}
break;
}

var G__65407 = args65403.length;
switch (G__65407) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65403.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq65404){
var G__65405 = cljs.core.first.call(null,seq65404);
var seq65404__$1 = cljs.core.next.call(null,seq65404);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__65405,seq65404__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args65408 = [];
var len__25826__auto___65922 = arguments.length;
var i__25827__auto___65923 = (0);
while(true){
if((i__25827__auto___65923 < len__25826__auto___65922)){
args65408.push((arguments[i__25827__auto___65923]));

var G__65924 = (i__25827__auto___65923 + (1));
i__25827__auto___65923 = G__65924;
continue;
} else {
}
break;
}

var G__65412 = args65408.length;
switch (G__65412) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65408.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq65409){
var G__65410 = cljs.core.first.call(null,seq65409);
var seq65409__$1 = cljs.core.next.call(null,seq65409);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__65410,seq65409__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args65413 = [];
var len__25826__auto___65926 = arguments.length;
var i__25827__auto___65927 = (0);
while(true){
if((i__25827__auto___65927 < len__25826__auto___65926)){
args65413.push((arguments[i__25827__auto___65927]));

var G__65928 = (i__25827__auto___65927 + (1));
i__25827__auto___65927 = G__65928;
continue;
} else {
}
break;
}

var G__65417 = args65413.length;
switch (G__65417) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65413.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq65414){
var G__65415 = cljs.core.first.call(null,seq65414);
var seq65414__$1 = cljs.core.next.call(null,seq65414);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__65415,seq65414__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args65418 = [];
var len__25826__auto___65930 = arguments.length;
var i__25827__auto___65931 = (0);
while(true){
if((i__25827__auto___65931 < len__25826__auto___65930)){
args65418.push((arguments[i__25827__auto___65931]));

var G__65932 = (i__25827__auto___65931 + (1));
i__25827__auto___65931 = G__65932;
continue;
} else {
}
break;
}

var G__65422 = args65418.length;
switch (G__65422) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65418.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq65419){
var G__65420 = cljs.core.first.call(null,seq65419);
var seq65419__$1 = cljs.core.next.call(null,seq65419);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__65420,seq65419__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args65423 = [];
var len__25826__auto___65934 = arguments.length;
var i__25827__auto___65935 = (0);
while(true){
if((i__25827__auto___65935 < len__25826__auto___65934)){
args65423.push((arguments[i__25827__auto___65935]));

var G__65936 = (i__25827__auto___65935 + (1));
i__25827__auto___65935 = G__65936;
continue;
} else {
}
break;
}

var G__65427 = args65423.length;
switch (G__65427) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65423.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq65424){
var G__65425 = cljs.core.first.call(null,seq65424);
var seq65424__$1 = cljs.core.next.call(null,seq65424);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__65425,seq65424__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args65428 = [];
var len__25826__auto___65938 = arguments.length;
var i__25827__auto___65939 = (0);
while(true){
if((i__25827__auto___65939 < len__25826__auto___65938)){
args65428.push((arguments[i__25827__auto___65939]));

var G__65940 = (i__25827__auto___65939 + (1));
i__25827__auto___65939 = G__65940;
continue;
} else {
}
break;
}

var G__65432 = args65428.length;
switch (G__65432) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65428.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq65429){
var G__65430 = cljs.core.first.call(null,seq65429);
var seq65429__$1 = cljs.core.next.call(null,seq65429);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__65430,seq65429__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args65433 = [];
var len__25826__auto___65942 = arguments.length;
var i__25827__auto___65943 = (0);
while(true){
if((i__25827__auto___65943 < len__25826__auto___65942)){
args65433.push((arguments[i__25827__auto___65943]));

var G__65944 = (i__25827__auto___65943 + (1));
i__25827__auto___65943 = G__65944;
continue;
} else {
}
break;
}

var G__65437 = args65433.length;
switch (G__65437) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65433.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq65434){
var G__65435 = cljs.core.first.call(null,seq65434);
var seq65434__$1 = cljs.core.next.call(null,seq65434);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__65435,seq65434__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args65438 = [];
var len__25826__auto___65946 = arguments.length;
var i__25827__auto___65947 = (0);
while(true){
if((i__25827__auto___65947 < len__25826__auto___65946)){
args65438.push((arguments[i__25827__auto___65947]));

var G__65948 = (i__25827__auto___65947 + (1));
i__25827__auto___65947 = G__65948;
continue;
} else {
}
break;
}

var G__65442 = args65438.length;
switch (G__65442) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65438.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq65439){
var G__65440 = cljs.core.first.call(null,seq65439);
var seq65439__$1 = cljs.core.next.call(null,seq65439);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__65440,seq65439__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args65443 = [];
var len__25826__auto___65950 = arguments.length;
var i__25827__auto___65951 = (0);
while(true){
if((i__25827__auto___65951 < len__25826__auto___65950)){
args65443.push((arguments[i__25827__auto___65951]));

var G__65952 = (i__25827__auto___65951 + (1));
i__25827__auto___65951 = G__65952;
continue;
} else {
}
break;
}

var G__65447 = args65443.length;
switch (G__65447) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65443.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq65444){
var G__65445 = cljs.core.first.call(null,seq65444);
var seq65444__$1 = cljs.core.next.call(null,seq65444);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__65445,seq65444__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args65448 = [];
var len__25826__auto___65954 = arguments.length;
var i__25827__auto___65955 = (0);
while(true){
if((i__25827__auto___65955 < len__25826__auto___65954)){
args65448.push((arguments[i__25827__auto___65955]));

var G__65956 = (i__25827__auto___65955 + (1));
i__25827__auto___65955 = G__65956;
continue;
} else {
}
break;
}

var G__65452 = args65448.length;
switch (G__65452) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65448.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq65449){
var G__65450 = cljs.core.first.call(null,seq65449);
var seq65449__$1 = cljs.core.next.call(null,seq65449);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__65450,seq65449__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args65453 = [];
var len__25826__auto___65958 = arguments.length;
var i__25827__auto___65959 = (0);
while(true){
if((i__25827__auto___65959 < len__25826__auto___65958)){
args65453.push((arguments[i__25827__auto___65959]));

var G__65960 = (i__25827__auto___65959 + (1));
i__25827__auto___65959 = G__65960;
continue;
} else {
}
break;
}

var G__65457 = args65453.length;
switch (G__65457) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65453.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq65454){
var G__65455 = cljs.core.first.call(null,seq65454);
var seq65454__$1 = cljs.core.next.call(null,seq65454);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__65455,seq65454__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args65458 = [];
var len__25826__auto___65962 = arguments.length;
var i__25827__auto___65963 = (0);
while(true){
if((i__25827__auto___65963 < len__25826__auto___65962)){
args65458.push((arguments[i__25827__auto___65963]));

var G__65964 = (i__25827__auto___65963 + (1));
i__25827__auto___65963 = G__65964;
continue;
} else {
}
break;
}

var G__65462 = args65458.length;
switch (G__65462) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65458.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq65459){
var G__65460 = cljs.core.first.call(null,seq65459);
var seq65459__$1 = cljs.core.next.call(null,seq65459);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__65460,seq65459__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args65463 = [];
var len__25826__auto___65966 = arguments.length;
var i__25827__auto___65967 = (0);
while(true){
if((i__25827__auto___65967 < len__25826__auto___65966)){
args65463.push((arguments[i__25827__auto___65967]));

var G__65968 = (i__25827__auto___65967 + (1));
i__25827__auto___65967 = G__65968;
continue;
} else {
}
break;
}

var G__65467 = args65463.length;
switch (G__65467) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65463.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq65464){
var G__65465 = cljs.core.first.call(null,seq65464);
var seq65464__$1 = cljs.core.next.call(null,seq65464);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__65465,seq65464__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args65468 = [];
var len__25826__auto___65970 = arguments.length;
var i__25827__auto___65971 = (0);
while(true){
if((i__25827__auto___65971 < len__25826__auto___65970)){
args65468.push((arguments[i__25827__auto___65971]));

var G__65972 = (i__25827__auto___65971 + (1));
i__25827__auto___65971 = G__65972;
continue;
} else {
}
break;
}

var G__65472 = args65468.length;
switch (G__65472) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65468.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq65469){
var G__65470 = cljs.core.first.call(null,seq65469);
var seq65469__$1 = cljs.core.next.call(null,seq65469);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__65470,seq65469__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args65473 = [];
var len__25826__auto___65974 = arguments.length;
var i__25827__auto___65975 = (0);
while(true){
if((i__25827__auto___65975 < len__25826__auto___65974)){
args65473.push((arguments[i__25827__auto___65975]));

var G__65976 = (i__25827__auto___65975 + (1));
i__25827__auto___65975 = G__65976;
continue;
} else {
}
break;
}

var G__65477 = args65473.length;
switch (G__65477) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65473.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq65474){
var G__65475 = cljs.core.first.call(null,seq65474);
var seq65474__$1 = cljs.core.next.call(null,seq65474);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__65475,seq65474__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args65478 = [];
var len__25826__auto___65978 = arguments.length;
var i__25827__auto___65979 = (0);
while(true){
if((i__25827__auto___65979 < len__25826__auto___65978)){
args65478.push((arguments[i__25827__auto___65979]));

var G__65980 = (i__25827__auto___65979 + (1));
i__25827__auto___65979 = G__65980;
continue;
} else {
}
break;
}

var G__65482 = args65478.length;
switch (G__65482) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65478.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq65479){
var G__65480 = cljs.core.first.call(null,seq65479);
var seq65479__$1 = cljs.core.next.call(null,seq65479);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__65480,seq65479__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args65483 = [];
var len__25826__auto___65982 = arguments.length;
var i__25827__auto___65983 = (0);
while(true){
if((i__25827__auto___65983 < len__25826__auto___65982)){
args65483.push((arguments[i__25827__auto___65983]));

var G__65984 = (i__25827__auto___65983 + (1));
i__25827__auto___65983 = G__65984;
continue;
} else {
}
break;
}

var G__65487 = args65483.length;
switch (G__65487) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65483.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq65484){
var G__65485 = cljs.core.first.call(null,seq65484);
var seq65484__$1 = cljs.core.next.call(null,seq65484);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__65485,seq65484__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args65488 = [];
var len__25826__auto___65986 = arguments.length;
var i__25827__auto___65987 = (0);
while(true){
if((i__25827__auto___65987 < len__25826__auto___65986)){
args65488.push((arguments[i__25827__auto___65987]));

var G__65988 = (i__25827__auto___65987 + (1));
i__25827__auto___65987 = G__65988;
continue;
} else {
}
break;
}

var G__65492 = args65488.length;
switch (G__65492) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65488.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq65489){
var G__65490 = cljs.core.first.call(null,seq65489);
var seq65489__$1 = cljs.core.next.call(null,seq65489);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__65490,seq65489__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args65493 = [];
var len__25826__auto___65990 = arguments.length;
var i__25827__auto___65991 = (0);
while(true){
if((i__25827__auto___65991 < len__25826__auto___65990)){
args65493.push((arguments[i__25827__auto___65991]));

var G__65992 = (i__25827__auto___65991 + (1));
i__25827__auto___65991 = G__65992;
continue;
} else {
}
break;
}

var G__65497 = args65493.length;
switch (G__65497) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65493.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq65494){
var G__65495 = cljs.core.first.call(null,seq65494);
var seq65494__$1 = cljs.core.next.call(null,seq65494);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__65495,seq65494__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args65033 = [];
var len__25826__auto___65994 = arguments.length;
var i__25827__auto___65995 = (0);
while(true){
if((i__25827__auto___65995 < len__25826__auto___65994)){
args65033.push((arguments[i__25827__auto___65995]));

var G__65996 = (i__25827__auto___65995 + (1));
i__25827__auto___65995 = G__65996;
continue;
} else {
}
break;
}

var G__65037 = args65033.length;
switch (G__65037) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args65033.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__28968__auto__,children__28969__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__28968__auto__,children__28969__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq65034){
var G__65035 = cljs.core.first.call(null,seq65034);
var seq65034__$1 = cljs.core.next.call(null,seq65034);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__65035,seq65034__$1);
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

//# sourceMappingURL=dom.js.map?rel=1478399638571