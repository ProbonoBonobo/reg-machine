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
var G__53550 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__53550) {
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
var G__53553 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__53553) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__53559){
var vec__53560 = p__53559;
var k = cljs.core.nth.call(null,vec__53560,(0),null);
var v = cljs.core.nth.call(null,vec__53560,(1),null);
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
var vec__53566 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__53566,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__53566,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args53569 = [];
var len__25826__auto___54194 = arguments.length;
var i__25827__auto___54195 = (0);
while(true){
if((i__25827__auto___54195 < len__25826__auto___54194)){
args53569.push((arguments[i__25827__auto___54195]));

var G__54196 = (i__25827__auto___54195 + (1));
i__25827__auto___54195 = G__54196;
continue;
} else {
}
break;
}

var G__53573 = args53569.length;
switch (G__53573) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53569.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq53570){
var G__53571 = cljs.core.first.call(null,seq53570);
var seq53570__$1 = cljs.core.next.call(null,seq53570);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__53571,seq53570__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args53574 = [];
var len__25826__auto___54198 = arguments.length;
var i__25827__auto___54199 = (0);
while(true){
if((i__25827__auto___54199 < len__25826__auto___54198)){
args53574.push((arguments[i__25827__auto___54199]));

var G__54200 = (i__25827__auto___54199 + (1));
i__25827__auto___54199 = G__54200;
continue;
} else {
}
break;
}

var G__53578 = args53574.length;
switch (G__53578) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53574.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq53575){
var G__53576 = cljs.core.first.call(null,seq53575);
var seq53575__$1 = cljs.core.next.call(null,seq53575);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__53576,seq53575__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args53579 = [];
var len__25826__auto___54202 = arguments.length;
var i__25827__auto___54203 = (0);
while(true){
if((i__25827__auto___54203 < len__25826__auto___54202)){
args53579.push((arguments[i__25827__auto___54203]));

var G__54204 = (i__25827__auto___54203 + (1));
i__25827__auto___54203 = G__54204;
continue;
} else {
}
break;
}

var G__53583 = args53579.length;
switch (G__53583) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53579.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq53580){
var G__53581 = cljs.core.first.call(null,seq53580);
var seq53580__$1 = cljs.core.next.call(null,seq53580);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__53581,seq53580__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args53584 = [];
var len__25826__auto___54206 = arguments.length;
var i__25827__auto___54207 = (0);
while(true){
if((i__25827__auto___54207 < len__25826__auto___54206)){
args53584.push((arguments[i__25827__auto___54207]));

var G__54208 = (i__25827__auto___54207 + (1));
i__25827__auto___54207 = G__54208;
continue;
} else {
}
break;
}

var G__53588 = args53584.length;
switch (G__53588) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53584.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq53585){
var G__53586 = cljs.core.first.call(null,seq53585);
var seq53585__$1 = cljs.core.next.call(null,seq53585);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__53586,seq53585__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args53589 = [];
var len__25826__auto___54210 = arguments.length;
var i__25827__auto___54211 = (0);
while(true){
if((i__25827__auto___54211 < len__25826__auto___54210)){
args53589.push((arguments[i__25827__auto___54211]));

var G__54212 = (i__25827__auto___54211 + (1));
i__25827__auto___54211 = G__54212;
continue;
} else {
}
break;
}

var G__53593 = args53589.length;
switch (G__53593) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53589.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq53590){
var G__53591 = cljs.core.first.call(null,seq53590);
var seq53590__$1 = cljs.core.next.call(null,seq53590);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__53591,seq53590__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args53594 = [];
var len__25826__auto___54214 = arguments.length;
var i__25827__auto___54215 = (0);
while(true){
if((i__25827__auto___54215 < len__25826__auto___54214)){
args53594.push((arguments[i__25827__auto___54215]));

var G__54216 = (i__25827__auto___54215 + (1));
i__25827__auto___54215 = G__54216;
continue;
} else {
}
break;
}

var G__53598 = args53594.length;
switch (G__53598) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53594.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq53595){
var G__53596 = cljs.core.first.call(null,seq53595);
var seq53595__$1 = cljs.core.next.call(null,seq53595);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__53596,seq53595__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args53599 = [];
var len__25826__auto___54218 = arguments.length;
var i__25827__auto___54219 = (0);
while(true){
if((i__25827__auto___54219 < len__25826__auto___54218)){
args53599.push((arguments[i__25827__auto___54219]));

var G__54220 = (i__25827__auto___54219 + (1));
i__25827__auto___54219 = G__54220;
continue;
} else {
}
break;
}

var G__53603 = args53599.length;
switch (G__53603) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53599.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq53600){
var G__53601 = cljs.core.first.call(null,seq53600);
var seq53600__$1 = cljs.core.next.call(null,seq53600);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__53601,seq53600__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args53604 = [];
var len__25826__auto___54222 = arguments.length;
var i__25827__auto___54223 = (0);
while(true){
if((i__25827__auto___54223 < len__25826__auto___54222)){
args53604.push((arguments[i__25827__auto___54223]));

var G__54224 = (i__25827__auto___54223 + (1));
i__25827__auto___54223 = G__54224;
continue;
} else {
}
break;
}

var G__53608 = args53604.length;
switch (G__53608) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53604.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq53605){
var G__53606 = cljs.core.first.call(null,seq53605);
var seq53605__$1 = cljs.core.next.call(null,seq53605);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__53606,seq53605__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args53609 = [];
var len__25826__auto___54226 = arguments.length;
var i__25827__auto___54227 = (0);
while(true){
if((i__25827__auto___54227 < len__25826__auto___54226)){
args53609.push((arguments[i__25827__auto___54227]));

var G__54228 = (i__25827__auto___54227 + (1));
i__25827__auto___54227 = G__54228;
continue;
} else {
}
break;
}

var G__53613 = args53609.length;
switch (G__53613) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53609.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq53610){
var G__53611 = cljs.core.first.call(null,seq53610);
var seq53610__$1 = cljs.core.next.call(null,seq53610);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__53611,seq53610__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args53614 = [];
var len__25826__auto___54230 = arguments.length;
var i__25827__auto___54231 = (0);
while(true){
if((i__25827__auto___54231 < len__25826__auto___54230)){
args53614.push((arguments[i__25827__auto___54231]));

var G__54232 = (i__25827__auto___54231 + (1));
i__25827__auto___54231 = G__54232;
continue;
} else {
}
break;
}

var G__53618 = args53614.length;
switch (G__53618) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53614.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq53615){
var G__53616 = cljs.core.first.call(null,seq53615);
var seq53615__$1 = cljs.core.next.call(null,seq53615);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__53616,seq53615__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args53619 = [];
var len__25826__auto___54234 = arguments.length;
var i__25827__auto___54235 = (0);
while(true){
if((i__25827__auto___54235 < len__25826__auto___54234)){
args53619.push((arguments[i__25827__auto___54235]));

var G__54236 = (i__25827__auto___54235 + (1));
i__25827__auto___54235 = G__54236;
continue;
} else {
}
break;
}

var G__53623 = args53619.length;
switch (G__53623) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53619.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq53620){
var G__53621 = cljs.core.first.call(null,seq53620);
var seq53620__$1 = cljs.core.next.call(null,seq53620);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__53621,seq53620__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args53624 = [];
var len__25826__auto___54238 = arguments.length;
var i__25827__auto___54239 = (0);
while(true){
if((i__25827__auto___54239 < len__25826__auto___54238)){
args53624.push((arguments[i__25827__auto___54239]));

var G__54240 = (i__25827__auto___54239 + (1));
i__25827__auto___54239 = G__54240;
continue;
} else {
}
break;
}

var G__53628 = args53624.length;
switch (G__53628) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53624.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq53625){
var G__53626 = cljs.core.first.call(null,seq53625);
var seq53625__$1 = cljs.core.next.call(null,seq53625);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__53626,seq53625__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args53629 = [];
var len__25826__auto___54242 = arguments.length;
var i__25827__auto___54243 = (0);
while(true){
if((i__25827__auto___54243 < len__25826__auto___54242)){
args53629.push((arguments[i__25827__auto___54243]));

var G__54244 = (i__25827__auto___54243 + (1));
i__25827__auto___54243 = G__54244;
continue;
} else {
}
break;
}

var G__53633 = args53629.length;
switch (G__53633) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53629.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq53630){
var G__53631 = cljs.core.first.call(null,seq53630);
var seq53630__$1 = cljs.core.next.call(null,seq53630);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__53631,seq53630__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args53634 = [];
var len__25826__auto___54246 = arguments.length;
var i__25827__auto___54247 = (0);
while(true){
if((i__25827__auto___54247 < len__25826__auto___54246)){
args53634.push((arguments[i__25827__auto___54247]));

var G__54248 = (i__25827__auto___54247 + (1));
i__25827__auto___54247 = G__54248;
continue;
} else {
}
break;
}

var G__53638 = args53634.length;
switch (G__53638) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53634.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq53635){
var G__53636 = cljs.core.first.call(null,seq53635);
var seq53635__$1 = cljs.core.next.call(null,seq53635);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__53636,seq53635__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args53639 = [];
var len__25826__auto___54250 = arguments.length;
var i__25827__auto___54251 = (0);
while(true){
if((i__25827__auto___54251 < len__25826__auto___54250)){
args53639.push((arguments[i__25827__auto___54251]));

var G__54252 = (i__25827__auto___54251 + (1));
i__25827__auto___54251 = G__54252;
continue;
} else {
}
break;
}

var G__53643 = args53639.length;
switch (G__53643) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53639.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq53640){
var G__53641 = cljs.core.first.call(null,seq53640);
var seq53640__$1 = cljs.core.next.call(null,seq53640);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__53641,seq53640__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args53644 = [];
var len__25826__auto___54254 = arguments.length;
var i__25827__auto___54255 = (0);
while(true){
if((i__25827__auto___54255 < len__25826__auto___54254)){
args53644.push((arguments[i__25827__auto___54255]));

var G__54256 = (i__25827__auto___54255 + (1));
i__25827__auto___54255 = G__54256;
continue;
} else {
}
break;
}

var G__53648 = args53644.length;
switch (G__53648) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53644.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq53645){
var G__53646 = cljs.core.first.call(null,seq53645);
var seq53645__$1 = cljs.core.next.call(null,seq53645);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__53646,seq53645__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args53649 = [];
var len__25826__auto___54258 = arguments.length;
var i__25827__auto___54259 = (0);
while(true){
if((i__25827__auto___54259 < len__25826__auto___54258)){
args53649.push((arguments[i__25827__auto___54259]));

var G__54260 = (i__25827__auto___54259 + (1));
i__25827__auto___54259 = G__54260;
continue;
} else {
}
break;
}

var G__53653 = args53649.length;
switch (G__53653) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53649.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq53650){
var G__53651 = cljs.core.first.call(null,seq53650);
var seq53650__$1 = cljs.core.next.call(null,seq53650);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__53651,seq53650__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args53654 = [];
var len__25826__auto___54262 = arguments.length;
var i__25827__auto___54263 = (0);
while(true){
if((i__25827__auto___54263 < len__25826__auto___54262)){
args53654.push((arguments[i__25827__auto___54263]));

var G__54264 = (i__25827__auto___54263 + (1));
i__25827__auto___54263 = G__54264;
continue;
} else {
}
break;
}

var G__53658 = args53654.length;
switch (G__53658) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53654.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq53655){
var G__53656 = cljs.core.first.call(null,seq53655);
var seq53655__$1 = cljs.core.next.call(null,seq53655);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__53656,seq53655__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args53659 = [];
var len__25826__auto___54266 = arguments.length;
var i__25827__auto___54267 = (0);
while(true){
if((i__25827__auto___54267 < len__25826__auto___54266)){
args53659.push((arguments[i__25827__auto___54267]));

var G__54268 = (i__25827__auto___54267 + (1));
i__25827__auto___54267 = G__54268;
continue;
} else {
}
break;
}

var G__53663 = args53659.length;
switch (G__53663) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53659.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq53660){
var G__53661 = cljs.core.first.call(null,seq53660);
var seq53660__$1 = cljs.core.next.call(null,seq53660);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__53661,seq53660__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args53664 = [];
var len__25826__auto___54270 = arguments.length;
var i__25827__auto___54271 = (0);
while(true){
if((i__25827__auto___54271 < len__25826__auto___54270)){
args53664.push((arguments[i__25827__auto___54271]));

var G__54272 = (i__25827__auto___54271 + (1));
i__25827__auto___54271 = G__54272;
continue;
} else {
}
break;
}

var G__53668 = args53664.length;
switch (G__53668) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53664.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq53665){
var G__53666 = cljs.core.first.call(null,seq53665);
var seq53665__$1 = cljs.core.next.call(null,seq53665);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__53666,seq53665__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args53669 = [];
var len__25826__auto___54274 = arguments.length;
var i__25827__auto___54275 = (0);
while(true){
if((i__25827__auto___54275 < len__25826__auto___54274)){
args53669.push((arguments[i__25827__auto___54275]));

var G__54276 = (i__25827__auto___54275 + (1));
i__25827__auto___54275 = G__54276;
continue;
} else {
}
break;
}

var G__53673 = args53669.length;
switch (G__53673) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53669.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq53670){
var G__53671 = cljs.core.first.call(null,seq53670);
var seq53670__$1 = cljs.core.next.call(null,seq53670);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__53671,seq53670__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args53674 = [];
var len__25826__auto___54278 = arguments.length;
var i__25827__auto___54279 = (0);
while(true){
if((i__25827__auto___54279 < len__25826__auto___54278)){
args53674.push((arguments[i__25827__auto___54279]));

var G__54280 = (i__25827__auto___54279 + (1));
i__25827__auto___54279 = G__54280;
continue;
} else {
}
break;
}

var G__53678 = args53674.length;
switch (G__53678) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53674.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq53675){
var G__53676 = cljs.core.first.call(null,seq53675);
var seq53675__$1 = cljs.core.next.call(null,seq53675);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__53676,seq53675__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args53679 = [];
var len__25826__auto___54282 = arguments.length;
var i__25827__auto___54283 = (0);
while(true){
if((i__25827__auto___54283 < len__25826__auto___54282)){
args53679.push((arguments[i__25827__auto___54283]));

var G__54284 = (i__25827__auto___54283 + (1));
i__25827__auto___54283 = G__54284;
continue;
} else {
}
break;
}

var G__53683 = args53679.length;
switch (G__53683) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53679.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq53680){
var G__53681 = cljs.core.first.call(null,seq53680);
var seq53680__$1 = cljs.core.next.call(null,seq53680);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__53681,seq53680__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args53684 = [];
var len__25826__auto___54286 = arguments.length;
var i__25827__auto___54287 = (0);
while(true){
if((i__25827__auto___54287 < len__25826__auto___54286)){
args53684.push((arguments[i__25827__auto___54287]));

var G__54288 = (i__25827__auto___54287 + (1));
i__25827__auto___54287 = G__54288;
continue;
} else {
}
break;
}

var G__53688 = args53684.length;
switch (G__53688) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53684.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq53685){
var G__53686 = cljs.core.first.call(null,seq53685);
var seq53685__$1 = cljs.core.next.call(null,seq53685);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__53686,seq53685__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args53689 = [];
var len__25826__auto___54290 = arguments.length;
var i__25827__auto___54291 = (0);
while(true){
if((i__25827__auto___54291 < len__25826__auto___54290)){
args53689.push((arguments[i__25827__auto___54291]));

var G__54292 = (i__25827__auto___54291 + (1));
i__25827__auto___54291 = G__54292;
continue;
} else {
}
break;
}

var G__53693 = args53689.length;
switch (G__53693) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53689.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq53690){
var G__53691 = cljs.core.first.call(null,seq53690);
var seq53690__$1 = cljs.core.next.call(null,seq53690);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__53691,seq53690__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args53694 = [];
var len__25826__auto___54294 = arguments.length;
var i__25827__auto___54295 = (0);
while(true){
if((i__25827__auto___54295 < len__25826__auto___54294)){
args53694.push((arguments[i__25827__auto___54295]));

var G__54296 = (i__25827__auto___54295 + (1));
i__25827__auto___54295 = G__54296;
continue;
} else {
}
break;
}

var G__53698 = args53694.length;
switch (G__53698) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53694.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq53695){
var G__53696 = cljs.core.first.call(null,seq53695);
var seq53695__$1 = cljs.core.next.call(null,seq53695);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__53696,seq53695__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args53699 = [];
var len__25826__auto___54298 = arguments.length;
var i__25827__auto___54299 = (0);
while(true){
if((i__25827__auto___54299 < len__25826__auto___54298)){
args53699.push((arguments[i__25827__auto___54299]));

var G__54300 = (i__25827__auto___54299 + (1));
i__25827__auto___54299 = G__54300;
continue;
} else {
}
break;
}

var G__53703 = args53699.length;
switch (G__53703) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53699.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq53700){
var G__53701 = cljs.core.first.call(null,seq53700);
var seq53700__$1 = cljs.core.next.call(null,seq53700);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__53701,seq53700__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args53704 = [];
var len__25826__auto___54302 = arguments.length;
var i__25827__auto___54303 = (0);
while(true){
if((i__25827__auto___54303 < len__25826__auto___54302)){
args53704.push((arguments[i__25827__auto___54303]));

var G__54304 = (i__25827__auto___54303 + (1));
i__25827__auto___54303 = G__54304;
continue;
} else {
}
break;
}

var G__53708 = args53704.length;
switch (G__53708) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53704.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq53705){
var G__53706 = cljs.core.first.call(null,seq53705);
var seq53705__$1 = cljs.core.next.call(null,seq53705);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__53706,seq53705__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args53709 = [];
var len__25826__auto___54306 = arguments.length;
var i__25827__auto___54307 = (0);
while(true){
if((i__25827__auto___54307 < len__25826__auto___54306)){
args53709.push((arguments[i__25827__auto___54307]));

var G__54308 = (i__25827__auto___54307 + (1));
i__25827__auto___54307 = G__54308;
continue;
} else {
}
break;
}

var G__53713 = args53709.length;
switch (G__53713) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53709.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq53710){
var G__53711 = cljs.core.first.call(null,seq53710);
var seq53710__$1 = cljs.core.next.call(null,seq53710);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__53711,seq53710__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args53714 = [];
var len__25826__auto___54310 = arguments.length;
var i__25827__auto___54311 = (0);
while(true){
if((i__25827__auto___54311 < len__25826__auto___54310)){
args53714.push((arguments[i__25827__auto___54311]));

var G__54312 = (i__25827__auto___54311 + (1));
i__25827__auto___54311 = G__54312;
continue;
} else {
}
break;
}

var G__53718 = args53714.length;
switch (G__53718) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53714.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq53715){
var G__53716 = cljs.core.first.call(null,seq53715);
var seq53715__$1 = cljs.core.next.call(null,seq53715);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__53716,seq53715__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args53719 = [];
var len__25826__auto___54314 = arguments.length;
var i__25827__auto___54315 = (0);
while(true){
if((i__25827__auto___54315 < len__25826__auto___54314)){
args53719.push((arguments[i__25827__auto___54315]));

var G__54316 = (i__25827__auto___54315 + (1));
i__25827__auto___54315 = G__54316;
continue;
} else {
}
break;
}

var G__53723 = args53719.length;
switch (G__53723) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53719.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq53720){
var G__53721 = cljs.core.first.call(null,seq53720);
var seq53720__$1 = cljs.core.next.call(null,seq53720);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__53721,seq53720__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args53724 = [];
var len__25826__auto___54318 = arguments.length;
var i__25827__auto___54319 = (0);
while(true){
if((i__25827__auto___54319 < len__25826__auto___54318)){
args53724.push((arguments[i__25827__auto___54319]));

var G__54320 = (i__25827__auto___54319 + (1));
i__25827__auto___54319 = G__54320;
continue;
} else {
}
break;
}

var G__53728 = args53724.length;
switch (G__53728) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53724.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq53725){
var G__53726 = cljs.core.first.call(null,seq53725);
var seq53725__$1 = cljs.core.next.call(null,seq53725);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__53726,seq53725__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args53734 = [];
var len__25826__auto___54322 = arguments.length;
var i__25827__auto___54323 = (0);
while(true){
if((i__25827__auto___54323 < len__25826__auto___54322)){
args53734.push((arguments[i__25827__auto___54323]));

var G__54324 = (i__25827__auto___54323 + (1));
i__25827__auto___54323 = G__54324;
continue;
} else {
}
break;
}

var G__53738 = args53734.length;
switch (G__53738) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53734.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq53735){
var G__53736 = cljs.core.first.call(null,seq53735);
var seq53735__$1 = cljs.core.next.call(null,seq53735);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__53736,seq53735__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args53739 = [];
var len__25826__auto___54326 = arguments.length;
var i__25827__auto___54327 = (0);
while(true){
if((i__25827__auto___54327 < len__25826__auto___54326)){
args53739.push((arguments[i__25827__auto___54327]));

var G__54328 = (i__25827__auto___54327 + (1));
i__25827__auto___54327 = G__54328;
continue;
} else {
}
break;
}

var G__53743 = args53739.length;
switch (G__53743) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53739.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq53740){
var G__53741 = cljs.core.first.call(null,seq53740);
var seq53740__$1 = cljs.core.next.call(null,seq53740);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__53741,seq53740__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args53744 = [];
var len__25826__auto___54330 = arguments.length;
var i__25827__auto___54331 = (0);
while(true){
if((i__25827__auto___54331 < len__25826__auto___54330)){
args53744.push((arguments[i__25827__auto___54331]));

var G__54332 = (i__25827__auto___54331 + (1));
i__25827__auto___54331 = G__54332;
continue;
} else {
}
break;
}

var G__53748 = args53744.length;
switch (G__53748) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53744.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq53745){
var G__53746 = cljs.core.first.call(null,seq53745);
var seq53745__$1 = cljs.core.next.call(null,seq53745);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__53746,seq53745__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args53749 = [];
var len__25826__auto___54334 = arguments.length;
var i__25827__auto___54335 = (0);
while(true){
if((i__25827__auto___54335 < len__25826__auto___54334)){
args53749.push((arguments[i__25827__auto___54335]));

var G__54336 = (i__25827__auto___54335 + (1));
i__25827__auto___54335 = G__54336;
continue;
} else {
}
break;
}

var G__53753 = args53749.length;
switch (G__53753) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53749.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq53750){
var G__53751 = cljs.core.first.call(null,seq53750);
var seq53750__$1 = cljs.core.next.call(null,seq53750);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__53751,seq53750__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args53754 = [];
var len__25826__auto___54338 = arguments.length;
var i__25827__auto___54339 = (0);
while(true){
if((i__25827__auto___54339 < len__25826__auto___54338)){
args53754.push((arguments[i__25827__auto___54339]));

var G__54340 = (i__25827__auto___54339 + (1));
i__25827__auto___54339 = G__54340;
continue;
} else {
}
break;
}

var G__53758 = args53754.length;
switch (G__53758) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53754.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq53755){
var G__53756 = cljs.core.first.call(null,seq53755);
var seq53755__$1 = cljs.core.next.call(null,seq53755);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__53756,seq53755__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args53759 = [];
var len__25826__auto___54342 = arguments.length;
var i__25827__auto___54343 = (0);
while(true){
if((i__25827__auto___54343 < len__25826__auto___54342)){
args53759.push((arguments[i__25827__auto___54343]));

var G__54344 = (i__25827__auto___54343 + (1));
i__25827__auto___54343 = G__54344;
continue;
} else {
}
break;
}

var G__53763 = args53759.length;
switch (G__53763) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53759.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq53760){
var G__53761 = cljs.core.first.call(null,seq53760);
var seq53760__$1 = cljs.core.next.call(null,seq53760);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__53761,seq53760__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args53764 = [];
var len__25826__auto___54346 = arguments.length;
var i__25827__auto___54347 = (0);
while(true){
if((i__25827__auto___54347 < len__25826__auto___54346)){
args53764.push((arguments[i__25827__auto___54347]));

var G__54348 = (i__25827__auto___54347 + (1));
i__25827__auto___54347 = G__54348;
continue;
} else {
}
break;
}

var G__53768 = args53764.length;
switch (G__53768) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53764.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq53765){
var G__53766 = cljs.core.first.call(null,seq53765);
var seq53765__$1 = cljs.core.next.call(null,seq53765);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__53766,seq53765__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args53769 = [];
var len__25826__auto___54350 = arguments.length;
var i__25827__auto___54351 = (0);
while(true){
if((i__25827__auto___54351 < len__25826__auto___54350)){
args53769.push((arguments[i__25827__auto___54351]));

var G__54352 = (i__25827__auto___54351 + (1));
i__25827__auto___54351 = G__54352;
continue;
} else {
}
break;
}

var G__53773 = args53769.length;
switch (G__53773) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53769.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq53770){
var G__53771 = cljs.core.first.call(null,seq53770);
var seq53770__$1 = cljs.core.next.call(null,seq53770);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__53771,seq53770__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args53774 = [];
var len__25826__auto___54354 = arguments.length;
var i__25827__auto___54355 = (0);
while(true){
if((i__25827__auto___54355 < len__25826__auto___54354)){
args53774.push((arguments[i__25827__auto___54355]));

var G__54356 = (i__25827__auto___54355 + (1));
i__25827__auto___54355 = G__54356;
continue;
} else {
}
break;
}

var G__53778 = args53774.length;
switch (G__53778) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53774.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq53775){
var G__53776 = cljs.core.first.call(null,seq53775);
var seq53775__$1 = cljs.core.next.call(null,seq53775);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__53776,seq53775__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args53779 = [];
var len__25826__auto___54358 = arguments.length;
var i__25827__auto___54359 = (0);
while(true){
if((i__25827__auto___54359 < len__25826__auto___54358)){
args53779.push((arguments[i__25827__auto___54359]));

var G__54360 = (i__25827__auto___54359 + (1));
i__25827__auto___54359 = G__54360;
continue;
} else {
}
break;
}

var G__53783 = args53779.length;
switch (G__53783) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53779.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq53780){
var G__53781 = cljs.core.first.call(null,seq53780);
var seq53780__$1 = cljs.core.next.call(null,seq53780);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__53781,seq53780__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args53784 = [];
var len__25826__auto___54362 = arguments.length;
var i__25827__auto___54363 = (0);
while(true){
if((i__25827__auto___54363 < len__25826__auto___54362)){
args53784.push((arguments[i__25827__auto___54363]));

var G__54364 = (i__25827__auto___54363 + (1));
i__25827__auto___54363 = G__54364;
continue;
} else {
}
break;
}

var G__53788 = args53784.length;
switch (G__53788) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53784.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq53785){
var G__53786 = cljs.core.first.call(null,seq53785);
var seq53785__$1 = cljs.core.next.call(null,seq53785);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__53786,seq53785__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args53789 = [];
var len__25826__auto___54366 = arguments.length;
var i__25827__auto___54367 = (0);
while(true){
if((i__25827__auto___54367 < len__25826__auto___54366)){
args53789.push((arguments[i__25827__auto___54367]));

var G__54368 = (i__25827__auto___54367 + (1));
i__25827__auto___54367 = G__54368;
continue;
} else {
}
break;
}

var G__53793 = args53789.length;
switch (G__53793) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53789.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq53790){
var G__53791 = cljs.core.first.call(null,seq53790);
var seq53790__$1 = cljs.core.next.call(null,seq53790);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__53791,seq53790__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args53794 = [];
var len__25826__auto___54370 = arguments.length;
var i__25827__auto___54371 = (0);
while(true){
if((i__25827__auto___54371 < len__25826__auto___54370)){
args53794.push((arguments[i__25827__auto___54371]));

var G__54372 = (i__25827__auto___54371 + (1));
i__25827__auto___54371 = G__54372;
continue;
} else {
}
break;
}

var G__53798 = args53794.length;
switch (G__53798) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53794.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq53795){
var G__53796 = cljs.core.first.call(null,seq53795);
var seq53795__$1 = cljs.core.next.call(null,seq53795);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__53796,seq53795__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args53799 = [];
var len__25826__auto___54374 = arguments.length;
var i__25827__auto___54375 = (0);
while(true){
if((i__25827__auto___54375 < len__25826__auto___54374)){
args53799.push((arguments[i__25827__auto___54375]));

var G__54376 = (i__25827__auto___54375 + (1));
i__25827__auto___54375 = G__54376;
continue;
} else {
}
break;
}

var G__53803 = args53799.length;
switch (G__53803) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53799.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq53800){
var G__53801 = cljs.core.first.call(null,seq53800);
var seq53800__$1 = cljs.core.next.call(null,seq53800);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__53801,seq53800__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args53804 = [];
var len__25826__auto___54378 = arguments.length;
var i__25827__auto___54379 = (0);
while(true){
if((i__25827__auto___54379 < len__25826__auto___54378)){
args53804.push((arguments[i__25827__auto___54379]));

var G__54380 = (i__25827__auto___54379 + (1));
i__25827__auto___54379 = G__54380;
continue;
} else {
}
break;
}

var G__53808 = args53804.length;
switch (G__53808) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53804.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq53805){
var G__53806 = cljs.core.first.call(null,seq53805);
var seq53805__$1 = cljs.core.next.call(null,seq53805);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__53806,seq53805__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args53809 = [];
var len__25826__auto___54382 = arguments.length;
var i__25827__auto___54383 = (0);
while(true){
if((i__25827__auto___54383 < len__25826__auto___54382)){
args53809.push((arguments[i__25827__auto___54383]));

var G__54384 = (i__25827__auto___54383 + (1));
i__25827__auto___54383 = G__54384;
continue;
} else {
}
break;
}

var G__53813 = args53809.length;
switch (G__53813) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53809.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq53810){
var G__53811 = cljs.core.first.call(null,seq53810);
var seq53810__$1 = cljs.core.next.call(null,seq53810);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__53811,seq53810__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args53814 = [];
var len__25826__auto___54386 = arguments.length;
var i__25827__auto___54387 = (0);
while(true){
if((i__25827__auto___54387 < len__25826__auto___54386)){
args53814.push((arguments[i__25827__auto___54387]));

var G__54388 = (i__25827__auto___54387 + (1));
i__25827__auto___54387 = G__54388;
continue;
} else {
}
break;
}

var G__53818 = args53814.length;
switch (G__53818) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53814.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq53815){
var G__53816 = cljs.core.first.call(null,seq53815);
var seq53815__$1 = cljs.core.next.call(null,seq53815);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__53816,seq53815__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args53819 = [];
var len__25826__auto___54390 = arguments.length;
var i__25827__auto___54391 = (0);
while(true){
if((i__25827__auto___54391 < len__25826__auto___54390)){
args53819.push((arguments[i__25827__auto___54391]));

var G__54392 = (i__25827__auto___54391 + (1));
i__25827__auto___54391 = G__54392;
continue;
} else {
}
break;
}

var G__53823 = args53819.length;
switch (G__53823) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53819.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq53820){
var G__53821 = cljs.core.first.call(null,seq53820);
var seq53820__$1 = cljs.core.next.call(null,seq53820);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__53821,seq53820__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args53824 = [];
var len__25826__auto___54394 = arguments.length;
var i__25827__auto___54395 = (0);
while(true){
if((i__25827__auto___54395 < len__25826__auto___54394)){
args53824.push((arguments[i__25827__auto___54395]));

var G__54396 = (i__25827__auto___54395 + (1));
i__25827__auto___54395 = G__54396;
continue;
} else {
}
break;
}

var G__53828 = args53824.length;
switch (G__53828) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53824.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq53825){
var G__53826 = cljs.core.first.call(null,seq53825);
var seq53825__$1 = cljs.core.next.call(null,seq53825);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__53826,seq53825__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args53829 = [];
var len__25826__auto___54398 = arguments.length;
var i__25827__auto___54399 = (0);
while(true){
if((i__25827__auto___54399 < len__25826__auto___54398)){
args53829.push((arguments[i__25827__auto___54399]));

var G__54400 = (i__25827__auto___54399 + (1));
i__25827__auto___54399 = G__54400;
continue;
} else {
}
break;
}

var G__53833 = args53829.length;
switch (G__53833) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53829.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq53830){
var G__53831 = cljs.core.first.call(null,seq53830);
var seq53830__$1 = cljs.core.next.call(null,seq53830);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__53831,seq53830__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args53834 = [];
var len__25826__auto___54402 = arguments.length;
var i__25827__auto___54403 = (0);
while(true){
if((i__25827__auto___54403 < len__25826__auto___54402)){
args53834.push((arguments[i__25827__auto___54403]));

var G__54404 = (i__25827__auto___54403 + (1));
i__25827__auto___54403 = G__54404;
continue;
} else {
}
break;
}

var G__53838 = args53834.length;
switch (G__53838) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53834.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq53835){
var G__53836 = cljs.core.first.call(null,seq53835);
var seq53835__$1 = cljs.core.next.call(null,seq53835);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__53836,seq53835__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args53839 = [];
var len__25826__auto___54406 = arguments.length;
var i__25827__auto___54407 = (0);
while(true){
if((i__25827__auto___54407 < len__25826__auto___54406)){
args53839.push((arguments[i__25827__auto___54407]));

var G__54408 = (i__25827__auto___54407 + (1));
i__25827__auto___54407 = G__54408;
continue;
} else {
}
break;
}

var G__53843 = args53839.length;
switch (G__53843) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53839.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq53840){
var G__53841 = cljs.core.first.call(null,seq53840);
var seq53840__$1 = cljs.core.next.call(null,seq53840);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__53841,seq53840__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args53844 = [];
var len__25826__auto___54410 = arguments.length;
var i__25827__auto___54411 = (0);
while(true){
if((i__25827__auto___54411 < len__25826__auto___54410)){
args53844.push((arguments[i__25827__auto___54411]));

var G__54412 = (i__25827__auto___54411 + (1));
i__25827__auto___54411 = G__54412;
continue;
} else {
}
break;
}

var G__53848 = args53844.length;
switch (G__53848) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53844.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq53845){
var G__53846 = cljs.core.first.call(null,seq53845);
var seq53845__$1 = cljs.core.next.call(null,seq53845);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__53846,seq53845__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args53849 = [];
var len__25826__auto___54414 = arguments.length;
var i__25827__auto___54415 = (0);
while(true){
if((i__25827__auto___54415 < len__25826__auto___54414)){
args53849.push((arguments[i__25827__auto___54415]));

var G__54416 = (i__25827__auto___54415 + (1));
i__25827__auto___54415 = G__54416;
continue;
} else {
}
break;
}

var G__53853 = args53849.length;
switch (G__53853) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53849.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq53850){
var G__53851 = cljs.core.first.call(null,seq53850);
var seq53850__$1 = cljs.core.next.call(null,seq53850);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__53851,seq53850__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args53854 = [];
var len__25826__auto___54418 = arguments.length;
var i__25827__auto___54419 = (0);
while(true){
if((i__25827__auto___54419 < len__25826__auto___54418)){
args53854.push((arguments[i__25827__auto___54419]));

var G__54420 = (i__25827__auto___54419 + (1));
i__25827__auto___54419 = G__54420;
continue;
} else {
}
break;
}

var G__53858 = args53854.length;
switch (G__53858) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53854.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq53855){
var G__53856 = cljs.core.first.call(null,seq53855);
var seq53855__$1 = cljs.core.next.call(null,seq53855);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__53856,seq53855__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args53859 = [];
var len__25826__auto___54422 = arguments.length;
var i__25827__auto___54423 = (0);
while(true){
if((i__25827__auto___54423 < len__25826__auto___54422)){
args53859.push((arguments[i__25827__auto___54423]));

var G__54424 = (i__25827__auto___54423 + (1));
i__25827__auto___54423 = G__54424;
continue;
} else {
}
break;
}

var G__53863 = args53859.length;
switch (G__53863) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53859.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq53860){
var G__53861 = cljs.core.first.call(null,seq53860);
var seq53860__$1 = cljs.core.next.call(null,seq53860);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__53861,seq53860__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args53864 = [];
var len__25826__auto___54426 = arguments.length;
var i__25827__auto___54427 = (0);
while(true){
if((i__25827__auto___54427 < len__25826__auto___54426)){
args53864.push((arguments[i__25827__auto___54427]));

var G__54428 = (i__25827__auto___54427 + (1));
i__25827__auto___54427 = G__54428;
continue;
} else {
}
break;
}

var G__53868 = args53864.length;
switch (G__53868) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53864.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq53865){
var G__53866 = cljs.core.first.call(null,seq53865);
var seq53865__$1 = cljs.core.next.call(null,seq53865);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__53866,seq53865__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args53869 = [];
var len__25826__auto___54430 = arguments.length;
var i__25827__auto___54431 = (0);
while(true){
if((i__25827__auto___54431 < len__25826__auto___54430)){
args53869.push((arguments[i__25827__auto___54431]));

var G__54432 = (i__25827__auto___54431 + (1));
i__25827__auto___54431 = G__54432;
continue;
} else {
}
break;
}

var G__53873 = args53869.length;
switch (G__53873) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53869.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq53870){
var G__53871 = cljs.core.first.call(null,seq53870);
var seq53870__$1 = cljs.core.next.call(null,seq53870);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__53871,seq53870__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args53874 = [];
var len__25826__auto___54434 = arguments.length;
var i__25827__auto___54435 = (0);
while(true){
if((i__25827__auto___54435 < len__25826__auto___54434)){
args53874.push((arguments[i__25827__auto___54435]));

var G__54436 = (i__25827__auto___54435 + (1));
i__25827__auto___54435 = G__54436;
continue;
} else {
}
break;
}

var G__53878 = args53874.length;
switch (G__53878) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53874.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq53875){
var G__53876 = cljs.core.first.call(null,seq53875);
var seq53875__$1 = cljs.core.next.call(null,seq53875);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__53876,seq53875__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args53879 = [];
var len__25826__auto___54438 = arguments.length;
var i__25827__auto___54439 = (0);
while(true){
if((i__25827__auto___54439 < len__25826__auto___54438)){
args53879.push((arguments[i__25827__auto___54439]));

var G__54440 = (i__25827__auto___54439 + (1));
i__25827__auto___54439 = G__54440;
continue;
} else {
}
break;
}

var G__53883 = args53879.length;
switch (G__53883) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53879.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq53880){
var G__53881 = cljs.core.first.call(null,seq53880);
var seq53880__$1 = cljs.core.next.call(null,seq53880);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__53881,seq53880__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args53884 = [];
var len__25826__auto___54442 = arguments.length;
var i__25827__auto___54443 = (0);
while(true){
if((i__25827__auto___54443 < len__25826__auto___54442)){
args53884.push((arguments[i__25827__auto___54443]));

var G__54444 = (i__25827__auto___54443 + (1));
i__25827__auto___54443 = G__54444;
continue;
} else {
}
break;
}

var G__53888 = args53884.length;
switch (G__53888) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53884.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq53885){
var G__53886 = cljs.core.first.call(null,seq53885);
var seq53885__$1 = cljs.core.next.call(null,seq53885);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__53886,seq53885__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args53889 = [];
var len__25826__auto___54446 = arguments.length;
var i__25827__auto___54447 = (0);
while(true){
if((i__25827__auto___54447 < len__25826__auto___54446)){
args53889.push((arguments[i__25827__auto___54447]));

var G__54448 = (i__25827__auto___54447 + (1));
i__25827__auto___54447 = G__54448;
continue;
} else {
}
break;
}

var G__53893 = args53889.length;
switch (G__53893) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53889.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq53890){
var G__53891 = cljs.core.first.call(null,seq53890);
var seq53890__$1 = cljs.core.next.call(null,seq53890);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__53891,seq53890__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args53894 = [];
var len__25826__auto___54450 = arguments.length;
var i__25827__auto___54451 = (0);
while(true){
if((i__25827__auto___54451 < len__25826__auto___54450)){
args53894.push((arguments[i__25827__auto___54451]));

var G__54452 = (i__25827__auto___54451 + (1));
i__25827__auto___54451 = G__54452;
continue;
} else {
}
break;
}

var G__53898 = args53894.length;
switch (G__53898) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53894.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq53895){
var G__53896 = cljs.core.first.call(null,seq53895);
var seq53895__$1 = cljs.core.next.call(null,seq53895);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__53896,seq53895__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args53899 = [];
var len__25826__auto___54454 = arguments.length;
var i__25827__auto___54455 = (0);
while(true){
if((i__25827__auto___54455 < len__25826__auto___54454)){
args53899.push((arguments[i__25827__auto___54455]));

var G__54456 = (i__25827__auto___54455 + (1));
i__25827__auto___54455 = G__54456;
continue;
} else {
}
break;
}

var G__53903 = args53899.length;
switch (G__53903) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53899.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq53900){
var G__53901 = cljs.core.first.call(null,seq53900);
var seq53900__$1 = cljs.core.next.call(null,seq53900);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__53901,seq53900__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args53904 = [];
var len__25826__auto___54458 = arguments.length;
var i__25827__auto___54459 = (0);
while(true){
if((i__25827__auto___54459 < len__25826__auto___54458)){
args53904.push((arguments[i__25827__auto___54459]));

var G__54460 = (i__25827__auto___54459 + (1));
i__25827__auto___54459 = G__54460;
continue;
} else {
}
break;
}

var G__53908 = args53904.length;
switch (G__53908) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53904.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq53905){
var G__53906 = cljs.core.first.call(null,seq53905);
var seq53905__$1 = cljs.core.next.call(null,seq53905);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__53906,seq53905__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args53909 = [];
var len__25826__auto___54462 = arguments.length;
var i__25827__auto___54463 = (0);
while(true){
if((i__25827__auto___54463 < len__25826__auto___54462)){
args53909.push((arguments[i__25827__auto___54463]));

var G__54464 = (i__25827__auto___54463 + (1));
i__25827__auto___54463 = G__54464;
continue;
} else {
}
break;
}

var G__53913 = args53909.length;
switch (G__53913) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53909.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq53910){
var G__53911 = cljs.core.first.call(null,seq53910);
var seq53910__$1 = cljs.core.next.call(null,seq53910);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__53911,seq53910__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args53914 = [];
var len__25826__auto___54466 = arguments.length;
var i__25827__auto___54467 = (0);
while(true){
if((i__25827__auto___54467 < len__25826__auto___54466)){
args53914.push((arguments[i__25827__auto___54467]));

var G__54468 = (i__25827__auto___54467 + (1));
i__25827__auto___54467 = G__54468;
continue;
} else {
}
break;
}

var G__53918 = args53914.length;
switch (G__53918) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53914.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq53915){
var G__53916 = cljs.core.first.call(null,seq53915);
var seq53915__$1 = cljs.core.next.call(null,seq53915);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__53916,seq53915__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args53919 = [];
var len__25826__auto___54470 = arguments.length;
var i__25827__auto___54471 = (0);
while(true){
if((i__25827__auto___54471 < len__25826__auto___54470)){
args53919.push((arguments[i__25827__auto___54471]));

var G__54472 = (i__25827__auto___54471 + (1));
i__25827__auto___54471 = G__54472;
continue;
} else {
}
break;
}

var G__53923 = args53919.length;
switch (G__53923) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53919.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq53920){
var G__53921 = cljs.core.first.call(null,seq53920);
var seq53920__$1 = cljs.core.next.call(null,seq53920);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__53921,seq53920__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args53924 = [];
var len__25826__auto___54474 = arguments.length;
var i__25827__auto___54475 = (0);
while(true){
if((i__25827__auto___54475 < len__25826__auto___54474)){
args53924.push((arguments[i__25827__auto___54475]));

var G__54476 = (i__25827__auto___54475 + (1));
i__25827__auto___54475 = G__54476;
continue;
} else {
}
break;
}

var G__53928 = args53924.length;
switch (G__53928) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53924.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq53925){
var G__53926 = cljs.core.first.call(null,seq53925);
var seq53925__$1 = cljs.core.next.call(null,seq53925);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__53926,seq53925__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args53929 = [];
var len__25826__auto___54478 = arguments.length;
var i__25827__auto___54479 = (0);
while(true){
if((i__25827__auto___54479 < len__25826__auto___54478)){
args53929.push((arguments[i__25827__auto___54479]));

var G__54480 = (i__25827__auto___54479 + (1));
i__25827__auto___54479 = G__54480;
continue;
} else {
}
break;
}

var G__53933 = args53929.length;
switch (G__53933) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53929.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq53930){
var G__53931 = cljs.core.first.call(null,seq53930);
var seq53930__$1 = cljs.core.next.call(null,seq53930);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__53931,seq53930__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args53934 = [];
var len__25826__auto___54482 = arguments.length;
var i__25827__auto___54483 = (0);
while(true){
if((i__25827__auto___54483 < len__25826__auto___54482)){
args53934.push((arguments[i__25827__auto___54483]));

var G__54484 = (i__25827__auto___54483 + (1));
i__25827__auto___54483 = G__54484;
continue;
} else {
}
break;
}

var G__53938 = args53934.length;
switch (G__53938) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53934.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq53935){
var G__53936 = cljs.core.first.call(null,seq53935);
var seq53935__$1 = cljs.core.next.call(null,seq53935);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__53936,seq53935__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args53939 = [];
var len__25826__auto___54486 = arguments.length;
var i__25827__auto___54487 = (0);
while(true){
if((i__25827__auto___54487 < len__25826__auto___54486)){
args53939.push((arguments[i__25827__auto___54487]));

var G__54488 = (i__25827__auto___54487 + (1));
i__25827__auto___54487 = G__54488;
continue;
} else {
}
break;
}

var G__53943 = args53939.length;
switch (G__53943) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53939.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq53940){
var G__53941 = cljs.core.first.call(null,seq53940);
var seq53940__$1 = cljs.core.next.call(null,seq53940);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__53941,seq53940__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args53944 = [];
var len__25826__auto___54490 = arguments.length;
var i__25827__auto___54491 = (0);
while(true){
if((i__25827__auto___54491 < len__25826__auto___54490)){
args53944.push((arguments[i__25827__auto___54491]));

var G__54492 = (i__25827__auto___54491 + (1));
i__25827__auto___54491 = G__54492;
continue;
} else {
}
break;
}

var G__53948 = args53944.length;
switch (G__53948) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53944.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq53945){
var G__53946 = cljs.core.first.call(null,seq53945);
var seq53945__$1 = cljs.core.next.call(null,seq53945);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__53946,seq53945__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args53949 = [];
var len__25826__auto___54494 = arguments.length;
var i__25827__auto___54495 = (0);
while(true){
if((i__25827__auto___54495 < len__25826__auto___54494)){
args53949.push((arguments[i__25827__auto___54495]));

var G__54496 = (i__25827__auto___54495 + (1));
i__25827__auto___54495 = G__54496;
continue;
} else {
}
break;
}

var G__53953 = args53949.length;
switch (G__53953) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53949.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq53950){
var G__53951 = cljs.core.first.call(null,seq53950);
var seq53950__$1 = cljs.core.next.call(null,seq53950);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__53951,seq53950__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args53954 = [];
var len__25826__auto___54498 = arguments.length;
var i__25827__auto___54499 = (0);
while(true){
if((i__25827__auto___54499 < len__25826__auto___54498)){
args53954.push((arguments[i__25827__auto___54499]));

var G__54500 = (i__25827__auto___54499 + (1));
i__25827__auto___54499 = G__54500;
continue;
} else {
}
break;
}

var G__53958 = args53954.length;
switch (G__53958) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53954.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq53955){
var G__53956 = cljs.core.first.call(null,seq53955);
var seq53955__$1 = cljs.core.next.call(null,seq53955);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__53956,seq53955__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args53959 = [];
var len__25826__auto___54502 = arguments.length;
var i__25827__auto___54503 = (0);
while(true){
if((i__25827__auto___54503 < len__25826__auto___54502)){
args53959.push((arguments[i__25827__auto___54503]));

var G__54504 = (i__25827__auto___54503 + (1));
i__25827__auto___54503 = G__54504;
continue;
} else {
}
break;
}

var G__53963 = args53959.length;
switch (G__53963) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53959.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq53960){
var G__53961 = cljs.core.first.call(null,seq53960);
var seq53960__$1 = cljs.core.next.call(null,seq53960);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__53961,seq53960__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args53964 = [];
var len__25826__auto___54506 = arguments.length;
var i__25827__auto___54507 = (0);
while(true){
if((i__25827__auto___54507 < len__25826__auto___54506)){
args53964.push((arguments[i__25827__auto___54507]));

var G__54508 = (i__25827__auto___54507 + (1));
i__25827__auto___54507 = G__54508;
continue;
} else {
}
break;
}

var G__53968 = args53964.length;
switch (G__53968) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53964.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq53965){
var G__53966 = cljs.core.first.call(null,seq53965);
var seq53965__$1 = cljs.core.next.call(null,seq53965);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__53966,seq53965__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args53969 = [];
var len__25826__auto___54510 = arguments.length;
var i__25827__auto___54511 = (0);
while(true){
if((i__25827__auto___54511 < len__25826__auto___54510)){
args53969.push((arguments[i__25827__auto___54511]));

var G__54512 = (i__25827__auto___54511 + (1));
i__25827__auto___54511 = G__54512;
continue;
} else {
}
break;
}

var G__53973 = args53969.length;
switch (G__53973) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53969.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq53970){
var G__53971 = cljs.core.first.call(null,seq53970);
var seq53970__$1 = cljs.core.next.call(null,seq53970);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__53971,seq53970__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args53974 = [];
var len__25826__auto___54514 = arguments.length;
var i__25827__auto___54515 = (0);
while(true){
if((i__25827__auto___54515 < len__25826__auto___54514)){
args53974.push((arguments[i__25827__auto___54515]));

var G__54516 = (i__25827__auto___54515 + (1));
i__25827__auto___54515 = G__54516;
continue;
} else {
}
break;
}

var G__53978 = args53974.length;
switch (G__53978) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53974.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq53975){
var G__53976 = cljs.core.first.call(null,seq53975);
var seq53975__$1 = cljs.core.next.call(null,seq53975);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__53976,seq53975__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args53979 = [];
var len__25826__auto___54518 = arguments.length;
var i__25827__auto___54519 = (0);
while(true){
if((i__25827__auto___54519 < len__25826__auto___54518)){
args53979.push((arguments[i__25827__auto___54519]));

var G__54520 = (i__25827__auto___54519 + (1));
i__25827__auto___54519 = G__54520;
continue;
} else {
}
break;
}

var G__53983 = args53979.length;
switch (G__53983) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53979.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq53980){
var G__53981 = cljs.core.first.call(null,seq53980);
var seq53980__$1 = cljs.core.next.call(null,seq53980);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__53981,seq53980__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args53984 = [];
var len__25826__auto___54522 = arguments.length;
var i__25827__auto___54523 = (0);
while(true){
if((i__25827__auto___54523 < len__25826__auto___54522)){
args53984.push((arguments[i__25827__auto___54523]));

var G__54524 = (i__25827__auto___54523 + (1));
i__25827__auto___54523 = G__54524;
continue;
} else {
}
break;
}

var G__53988 = args53984.length;
switch (G__53988) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53984.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq53985){
var G__53986 = cljs.core.first.call(null,seq53985);
var seq53985__$1 = cljs.core.next.call(null,seq53985);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__53986,seq53985__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args53989 = [];
var len__25826__auto___54526 = arguments.length;
var i__25827__auto___54527 = (0);
while(true){
if((i__25827__auto___54527 < len__25826__auto___54526)){
args53989.push((arguments[i__25827__auto___54527]));

var G__54528 = (i__25827__auto___54527 + (1));
i__25827__auto___54527 = G__54528;
continue;
} else {
}
break;
}

var G__53993 = args53989.length;
switch (G__53993) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53989.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq53990){
var G__53991 = cljs.core.first.call(null,seq53990);
var seq53990__$1 = cljs.core.next.call(null,seq53990);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__53991,seq53990__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args53994 = [];
var len__25826__auto___54530 = arguments.length;
var i__25827__auto___54531 = (0);
while(true){
if((i__25827__auto___54531 < len__25826__auto___54530)){
args53994.push((arguments[i__25827__auto___54531]));

var G__54532 = (i__25827__auto___54531 + (1));
i__25827__auto___54531 = G__54532;
continue;
} else {
}
break;
}

var G__53998 = args53994.length;
switch (G__53998) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53994.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq53995){
var G__53996 = cljs.core.first.call(null,seq53995);
var seq53995__$1 = cljs.core.next.call(null,seq53995);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__53996,seq53995__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args53999 = [];
var len__25826__auto___54534 = arguments.length;
var i__25827__auto___54535 = (0);
while(true){
if((i__25827__auto___54535 < len__25826__auto___54534)){
args53999.push((arguments[i__25827__auto___54535]));

var G__54536 = (i__25827__auto___54535 + (1));
i__25827__auto___54535 = G__54536;
continue;
} else {
}
break;
}

var G__54003 = args53999.length;
switch (G__54003) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53999.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq54000){
var G__54001 = cljs.core.first.call(null,seq54000);
var seq54000__$1 = cljs.core.next.call(null,seq54000);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__54001,seq54000__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args54004 = [];
var len__25826__auto___54538 = arguments.length;
var i__25827__auto___54539 = (0);
while(true){
if((i__25827__auto___54539 < len__25826__auto___54538)){
args54004.push((arguments[i__25827__auto___54539]));

var G__54540 = (i__25827__auto___54539 + (1));
i__25827__auto___54539 = G__54540;
continue;
} else {
}
break;
}

var G__54008 = args54004.length;
switch (G__54008) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54004.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq54005){
var G__54006 = cljs.core.first.call(null,seq54005);
var seq54005__$1 = cljs.core.next.call(null,seq54005);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__54006,seq54005__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args54009 = [];
var len__25826__auto___54542 = arguments.length;
var i__25827__auto___54543 = (0);
while(true){
if((i__25827__auto___54543 < len__25826__auto___54542)){
args54009.push((arguments[i__25827__auto___54543]));

var G__54544 = (i__25827__auto___54543 + (1));
i__25827__auto___54543 = G__54544;
continue;
} else {
}
break;
}

var G__54013 = args54009.length;
switch (G__54013) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54009.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq54010){
var G__54011 = cljs.core.first.call(null,seq54010);
var seq54010__$1 = cljs.core.next.call(null,seq54010);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__54011,seq54010__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args54014 = [];
var len__25826__auto___54546 = arguments.length;
var i__25827__auto___54547 = (0);
while(true){
if((i__25827__auto___54547 < len__25826__auto___54546)){
args54014.push((arguments[i__25827__auto___54547]));

var G__54548 = (i__25827__auto___54547 + (1));
i__25827__auto___54547 = G__54548;
continue;
} else {
}
break;
}

var G__54018 = args54014.length;
switch (G__54018) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54014.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq54015){
var G__54016 = cljs.core.first.call(null,seq54015);
var seq54015__$1 = cljs.core.next.call(null,seq54015);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__54016,seq54015__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args54019 = [];
var len__25826__auto___54550 = arguments.length;
var i__25827__auto___54551 = (0);
while(true){
if((i__25827__auto___54551 < len__25826__auto___54550)){
args54019.push((arguments[i__25827__auto___54551]));

var G__54552 = (i__25827__auto___54551 + (1));
i__25827__auto___54551 = G__54552;
continue;
} else {
}
break;
}

var G__54023 = args54019.length;
switch (G__54023) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54019.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq54020){
var G__54021 = cljs.core.first.call(null,seq54020);
var seq54020__$1 = cljs.core.next.call(null,seq54020);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__54021,seq54020__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args54024 = [];
var len__25826__auto___54554 = arguments.length;
var i__25827__auto___54555 = (0);
while(true){
if((i__25827__auto___54555 < len__25826__auto___54554)){
args54024.push((arguments[i__25827__auto___54555]));

var G__54556 = (i__25827__auto___54555 + (1));
i__25827__auto___54555 = G__54556;
continue;
} else {
}
break;
}

var G__54028 = args54024.length;
switch (G__54028) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54024.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq54025){
var G__54026 = cljs.core.first.call(null,seq54025);
var seq54025__$1 = cljs.core.next.call(null,seq54025);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__54026,seq54025__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args54029 = [];
var len__25826__auto___54558 = arguments.length;
var i__25827__auto___54559 = (0);
while(true){
if((i__25827__auto___54559 < len__25826__auto___54558)){
args54029.push((arguments[i__25827__auto___54559]));

var G__54560 = (i__25827__auto___54559 + (1));
i__25827__auto___54559 = G__54560;
continue;
} else {
}
break;
}

var G__54033 = args54029.length;
switch (G__54033) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54029.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq54030){
var G__54031 = cljs.core.first.call(null,seq54030);
var seq54030__$1 = cljs.core.next.call(null,seq54030);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__54031,seq54030__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args54034 = [];
var len__25826__auto___54562 = arguments.length;
var i__25827__auto___54563 = (0);
while(true){
if((i__25827__auto___54563 < len__25826__auto___54562)){
args54034.push((arguments[i__25827__auto___54563]));

var G__54564 = (i__25827__auto___54563 + (1));
i__25827__auto___54563 = G__54564;
continue;
} else {
}
break;
}

var G__54038 = args54034.length;
switch (G__54038) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54034.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq54035){
var G__54036 = cljs.core.first.call(null,seq54035);
var seq54035__$1 = cljs.core.next.call(null,seq54035);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__54036,seq54035__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args54039 = [];
var len__25826__auto___54566 = arguments.length;
var i__25827__auto___54567 = (0);
while(true){
if((i__25827__auto___54567 < len__25826__auto___54566)){
args54039.push((arguments[i__25827__auto___54567]));

var G__54568 = (i__25827__auto___54567 + (1));
i__25827__auto___54567 = G__54568;
continue;
} else {
}
break;
}

var G__54043 = args54039.length;
switch (G__54043) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54039.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq54040){
var G__54041 = cljs.core.first.call(null,seq54040);
var seq54040__$1 = cljs.core.next.call(null,seq54040);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__54041,seq54040__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args54044 = [];
var len__25826__auto___54570 = arguments.length;
var i__25827__auto___54571 = (0);
while(true){
if((i__25827__auto___54571 < len__25826__auto___54570)){
args54044.push((arguments[i__25827__auto___54571]));

var G__54572 = (i__25827__auto___54571 + (1));
i__25827__auto___54571 = G__54572;
continue;
} else {
}
break;
}

var G__54048 = args54044.length;
switch (G__54048) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54044.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq54045){
var G__54046 = cljs.core.first.call(null,seq54045);
var seq54045__$1 = cljs.core.next.call(null,seq54045);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__54046,seq54045__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args54049 = [];
var len__25826__auto___54574 = arguments.length;
var i__25827__auto___54575 = (0);
while(true){
if((i__25827__auto___54575 < len__25826__auto___54574)){
args54049.push((arguments[i__25827__auto___54575]));

var G__54576 = (i__25827__auto___54575 + (1));
i__25827__auto___54575 = G__54576;
continue;
} else {
}
break;
}

var G__54053 = args54049.length;
switch (G__54053) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54049.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq54050){
var G__54051 = cljs.core.first.call(null,seq54050);
var seq54050__$1 = cljs.core.next.call(null,seq54050);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__54051,seq54050__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args54054 = [];
var len__25826__auto___54578 = arguments.length;
var i__25827__auto___54579 = (0);
while(true){
if((i__25827__auto___54579 < len__25826__auto___54578)){
args54054.push((arguments[i__25827__auto___54579]));

var G__54580 = (i__25827__auto___54579 + (1));
i__25827__auto___54579 = G__54580;
continue;
} else {
}
break;
}

var G__54058 = args54054.length;
switch (G__54058) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54054.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq54055){
var G__54056 = cljs.core.first.call(null,seq54055);
var seq54055__$1 = cljs.core.next.call(null,seq54055);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__54056,seq54055__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args54059 = [];
var len__25826__auto___54582 = arguments.length;
var i__25827__auto___54583 = (0);
while(true){
if((i__25827__auto___54583 < len__25826__auto___54582)){
args54059.push((arguments[i__25827__auto___54583]));

var G__54584 = (i__25827__auto___54583 + (1));
i__25827__auto___54583 = G__54584;
continue;
} else {
}
break;
}

var G__54063 = args54059.length;
switch (G__54063) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54059.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq54060){
var G__54061 = cljs.core.first.call(null,seq54060);
var seq54060__$1 = cljs.core.next.call(null,seq54060);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__54061,seq54060__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args54064 = [];
var len__25826__auto___54586 = arguments.length;
var i__25827__auto___54587 = (0);
while(true){
if((i__25827__auto___54587 < len__25826__auto___54586)){
args54064.push((arguments[i__25827__auto___54587]));

var G__54588 = (i__25827__auto___54587 + (1));
i__25827__auto___54587 = G__54588;
continue;
} else {
}
break;
}

var G__54068 = args54064.length;
switch (G__54068) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54064.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq54065){
var G__54066 = cljs.core.first.call(null,seq54065);
var seq54065__$1 = cljs.core.next.call(null,seq54065);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__54066,seq54065__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args54069 = [];
var len__25826__auto___54590 = arguments.length;
var i__25827__auto___54591 = (0);
while(true){
if((i__25827__auto___54591 < len__25826__auto___54590)){
args54069.push((arguments[i__25827__auto___54591]));

var G__54592 = (i__25827__auto___54591 + (1));
i__25827__auto___54591 = G__54592;
continue;
} else {
}
break;
}

var G__54073 = args54069.length;
switch (G__54073) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54069.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq54070){
var G__54071 = cljs.core.first.call(null,seq54070);
var seq54070__$1 = cljs.core.next.call(null,seq54070);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__54071,seq54070__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args54074 = [];
var len__25826__auto___54594 = arguments.length;
var i__25827__auto___54595 = (0);
while(true){
if((i__25827__auto___54595 < len__25826__auto___54594)){
args54074.push((arguments[i__25827__auto___54595]));

var G__54596 = (i__25827__auto___54595 + (1));
i__25827__auto___54595 = G__54596;
continue;
} else {
}
break;
}

var G__54078 = args54074.length;
switch (G__54078) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54074.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq54075){
var G__54076 = cljs.core.first.call(null,seq54075);
var seq54075__$1 = cljs.core.next.call(null,seq54075);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__54076,seq54075__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args54079 = [];
var len__25826__auto___54598 = arguments.length;
var i__25827__auto___54599 = (0);
while(true){
if((i__25827__auto___54599 < len__25826__auto___54598)){
args54079.push((arguments[i__25827__auto___54599]));

var G__54600 = (i__25827__auto___54599 + (1));
i__25827__auto___54599 = G__54600;
continue;
} else {
}
break;
}

var G__54083 = args54079.length;
switch (G__54083) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54079.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq54080){
var G__54081 = cljs.core.first.call(null,seq54080);
var seq54080__$1 = cljs.core.next.call(null,seq54080);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__54081,seq54080__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args54084 = [];
var len__25826__auto___54602 = arguments.length;
var i__25827__auto___54603 = (0);
while(true){
if((i__25827__auto___54603 < len__25826__auto___54602)){
args54084.push((arguments[i__25827__auto___54603]));

var G__54604 = (i__25827__auto___54603 + (1));
i__25827__auto___54603 = G__54604;
continue;
} else {
}
break;
}

var G__54088 = args54084.length;
switch (G__54088) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54084.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq54085){
var G__54086 = cljs.core.first.call(null,seq54085);
var seq54085__$1 = cljs.core.next.call(null,seq54085);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__54086,seq54085__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args54089 = [];
var len__25826__auto___54606 = arguments.length;
var i__25827__auto___54607 = (0);
while(true){
if((i__25827__auto___54607 < len__25826__auto___54606)){
args54089.push((arguments[i__25827__auto___54607]));

var G__54608 = (i__25827__auto___54607 + (1));
i__25827__auto___54607 = G__54608;
continue;
} else {
}
break;
}

var G__54093 = args54089.length;
switch (G__54093) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54089.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq54090){
var G__54091 = cljs.core.first.call(null,seq54090);
var seq54090__$1 = cljs.core.next.call(null,seq54090);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__54091,seq54090__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args54094 = [];
var len__25826__auto___54610 = arguments.length;
var i__25827__auto___54611 = (0);
while(true){
if((i__25827__auto___54611 < len__25826__auto___54610)){
args54094.push((arguments[i__25827__auto___54611]));

var G__54612 = (i__25827__auto___54611 + (1));
i__25827__auto___54611 = G__54612;
continue;
} else {
}
break;
}

var G__54098 = args54094.length;
switch (G__54098) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54094.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq54095){
var G__54096 = cljs.core.first.call(null,seq54095);
var seq54095__$1 = cljs.core.next.call(null,seq54095);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__54096,seq54095__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args54099 = [];
var len__25826__auto___54614 = arguments.length;
var i__25827__auto___54615 = (0);
while(true){
if((i__25827__auto___54615 < len__25826__auto___54614)){
args54099.push((arguments[i__25827__auto___54615]));

var G__54616 = (i__25827__auto___54615 + (1));
i__25827__auto___54615 = G__54616;
continue;
} else {
}
break;
}

var G__54103 = args54099.length;
switch (G__54103) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54099.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq54100){
var G__54101 = cljs.core.first.call(null,seq54100);
var seq54100__$1 = cljs.core.next.call(null,seq54100);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__54101,seq54100__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args54104 = [];
var len__25826__auto___54618 = arguments.length;
var i__25827__auto___54619 = (0);
while(true){
if((i__25827__auto___54619 < len__25826__auto___54618)){
args54104.push((arguments[i__25827__auto___54619]));

var G__54620 = (i__25827__auto___54619 + (1));
i__25827__auto___54619 = G__54620;
continue;
} else {
}
break;
}

var G__54108 = args54104.length;
switch (G__54108) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54104.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq54105){
var G__54106 = cljs.core.first.call(null,seq54105);
var seq54105__$1 = cljs.core.next.call(null,seq54105);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__54106,seq54105__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args54109 = [];
var len__25826__auto___54622 = arguments.length;
var i__25827__auto___54623 = (0);
while(true){
if((i__25827__auto___54623 < len__25826__auto___54622)){
args54109.push((arguments[i__25827__auto___54623]));

var G__54624 = (i__25827__auto___54623 + (1));
i__25827__auto___54623 = G__54624;
continue;
} else {
}
break;
}

var G__54113 = args54109.length;
switch (G__54113) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54109.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq54110){
var G__54111 = cljs.core.first.call(null,seq54110);
var seq54110__$1 = cljs.core.next.call(null,seq54110);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__54111,seq54110__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args54114 = [];
var len__25826__auto___54626 = arguments.length;
var i__25827__auto___54627 = (0);
while(true){
if((i__25827__auto___54627 < len__25826__auto___54626)){
args54114.push((arguments[i__25827__auto___54627]));

var G__54628 = (i__25827__auto___54627 + (1));
i__25827__auto___54627 = G__54628;
continue;
} else {
}
break;
}

var G__54118 = args54114.length;
switch (G__54118) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54114.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq54115){
var G__54116 = cljs.core.first.call(null,seq54115);
var seq54115__$1 = cljs.core.next.call(null,seq54115);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__54116,seq54115__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args54119 = [];
var len__25826__auto___54630 = arguments.length;
var i__25827__auto___54631 = (0);
while(true){
if((i__25827__auto___54631 < len__25826__auto___54630)){
args54119.push((arguments[i__25827__auto___54631]));

var G__54632 = (i__25827__auto___54631 + (1));
i__25827__auto___54631 = G__54632;
continue;
} else {
}
break;
}

var G__54123 = args54119.length;
switch (G__54123) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54119.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq54120){
var G__54121 = cljs.core.first.call(null,seq54120);
var seq54120__$1 = cljs.core.next.call(null,seq54120);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__54121,seq54120__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args54124 = [];
var len__25826__auto___54634 = arguments.length;
var i__25827__auto___54635 = (0);
while(true){
if((i__25827__auto___54635 < len__25826__auto___54634)){
args54124.push((arguments[i__25827__auto___54635]));

var G__54636 = (i__25827__auto___54635 + (1));
i__25827__auto___54635 = G__54636;
continue;
} else {
}
break;
}

var G__54128 = args54124.length;
switch (G__54128) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54124.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq54125){
var G__54126 = cljs.core.first.call(null,seq54125);
var seq54125__$1 = cljs.core.next.call(null,seq54125);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__54126,seq54125__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args54129 = [];
var len__25826__auto___54638 = arguments.length;
var i__25827__auto___54639 = (0);
while(true){
if((i__25827__auto___54639 < len__25826__auto___54638)){
args54129.push((arguments[i__25827__auto___54639]));

var G__54640 = (i__25827__auto___54639 + (1));
i__25827__auto___54639 = G__54640;
continue;
} else {
}
break;
}

var G__54133 = args54129.length;
switch (G__54133) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54129.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq54130){
var G__54131 = cljs.core.first.call(null,seq54130);
var seq54130__$1 = cljs.core.next.call(null,seq54130);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__54131,seq54130__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args54134 = [];
var len__25826__auto___54642 = arguments.length;
var i__25827__auto___54643 = (0);
while(true){
if((i__25827__auto___54643 < len__25826__auto___54642)){
args54134.push((arguments[i__25827__auto___54643]));

var G__54644 = (i__25827__auto___54643 + (1));
i__25827__auto___54643 = G__54644;
continue;
} else {
}
break;
}

var G__54138 = args54134.length;
switch (G__54138) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54134.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq54135){
var G__54136 = cljs.core.first.call(null,seq54135);
var seq54135__$1 = cljs.core.next.call(null,seq54135);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__54136,seq54135__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args54139 = [];
var len__25826__auto___54646 = arguments.length;
var i__25827__auto___54647 = (0);
while(true){
if((i__25827__auto___54647 < len__25826__auto___54646)){
args54139.push((arguments[i__25827__auto___54647]));

var G__54648 = (i__25827__auto___54647 + (1));
i__25827__auto___54647 = G__54648;
continue;
} else {
}
break;
}

var G__54143 = args54139.length;
switch (G__54143) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54139.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq54140){
var G__54141 = cljs.core.first.call(null,seq54140);
var seq54140__$1 = cljs.core.next.call(null,seq54140);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__54141,seq54140__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args54144 = [];
var len__25826__auto___54650 = arguments.length;
var i__25827__auto___54651 = (0);
while(true){
if((i__25827__auto___54651 < len__25826__auto___54650)){
args54144.push((arguments[i__25827__auto___54651]));

var G__54652 = (i__25827__auto___54651 + (1));
i__25827__auto___54651 = G__54652;
continue;
} else {
}
break;
}

var G__54148 = args54144.length;
switch (G__54148) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54144.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq54145){
var G__54146 = cljs.core.first.call(null,seq54145);
var seq54145__$1 = cljs.core.next.call(null,seq54145);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__54146,seq54145__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args54149 = [];
var len__25826__auto___54654 = arguments.length;
var i__25827__auto___54655 = (0);
while(true){
if((i__25827__auto___54655 < len__25826__auto___54654)){
args54149.push((arguments[i__25827__auto___54655]));

var G__54656 = (i__25827__auto___54655 + (1));
i__25827__auto___54655 = G__54656;
continue;
} else {
}
break;
}

var G__54153 = args54149.length;
switch (G__54153) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54149.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq54150){
var G__54151 = cljs.core.first.call(null,seq54150);
var seq54150__$1 = cljs.core.next.call(null,seq54150);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__54151,seq54150__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args54154 = [];
var len__25826__auto___54658 = arguments.length;
var i__25827__auto___54659 = (0);
while(true){
if((i__25827__auto___54659 < len__25826__auto___54658)){
args54154.push((arguments[i__25827__auto___54659]));

var G__54660 = (i__25827__auto___54659 + (1));
i__25827__auto___54659 = G__54660;
continue;
} else {
}
break;
}

var G__54158 = args54154.length;
switch (G__54158) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54154.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq54155){
var G__54156 = cljs.core.first.call(null,seq54155);
var seq54155__$1 = cljs.core.next.call(null,seq54155);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__54156,seq54155__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args54159 = [];
var len__25826__auto___54662 = arguments.length;
var i__25827__auto___54663 = (0);
while(true){
if((i__25827__auto___54663 < len__25826__auto___54662)){
args54159.push((arguments[i__25827__auto___54663]));

var G__54664 = (i__25827__auto___54663 + (1));
i__25827__auto___54663 = G__54664;
continue;
} else {
}
break;
}

var G__54163 = args54159.length;
switch (G__54163) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54159.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq54160){
var G__54161 = cljs.core.first.call(null,seq54160);
var seq54160__$1 = cljs.core.next.call(null,seq54160);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__54161,seq54160__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args54164 = [];
var len__25826__auto___54666 = arguments.length;
var i__25827__auto___54667 = (0);
while(true){
if((i__25827__auto___54667 < len__25826__auto___54666)){
args54164.push((arguments[i__25827__auto___54667]));

var G__54668 = (i__25827__auto___54667 + (1));
i__25827__auto___54667 = G__54668;
continue;
} else {
}
break;
}

var G__54168 = args54164.length;
switch (G__54168) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54164.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq54165){
var G__54166 = cljs.core.first.call(null,seq54165);
var seq54165__$1 = cljs.core.next.call(null,seq54165);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__54166,seq54165__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args54169 = [];
var len__25826__auto___54670 = arguments.length;
var i__25827__auto___54671 = (0);
while(true){
if((i__25827__auto___54671 < len__25826__auto___54670)){
args54169.push((arguments[i__25827__auto___54671]));

var G__54672 = (i__25827__auto___54671 + (1));
i__25827__auto___54671 = G__54672;
continue;
} else {
}
break;
}

var G__54173 = args54169.length;
switch (G__54173) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54169.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq54170){
var G__54171 = cljs.core.first.call(null,seq54170);
var seq54170__$1 = cljs.core.next.call(null,seq54170);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__54171,seq54170__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args54174 = [];
var len__25826__auto___54674 = arguments.length;
var i__25827__auto___54675 = (0);
while(true){
if((i__25827__auto___54675 < len__25826__auto___54674)){
args54174.push((arguments[i__25827__auto___54675]));

var G__54676 = (i__25827__auto___54675 + (1));
i__25827__auto___54675 = G__54676;
continue;
} else {
}
break;
}

var G__54178 = args54174.length;
switch (G__54178) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54174.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq54175){
var G__54176 = cljs.core.first.call(null,seq54175);
var seq54175__$1 = cljs.core.next.call(null,seq54175);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__54176,seq54175__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args54179 = [];
var len__25826__auto___54678 = arguments.length;
var i__25827__auto___54679 = (0);
while(true){
if((i__25827__auto___54679 < len__25826__auto___54678)){
args54179.push((arguments[i__25827__auto___54679]));

var G__54680 = (i__25827__auto___54679 + (1));
i__25827__auto___54679 = G__54680;
continue;
} else {
}
break;
}

var G__54183 = args54179.length;
switch (G__54183) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54179.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq54180){
var G__54181 = cljs.core.first.call(null,seq54180);
var seq54180__$1 = cljs.core.next.call(null,seq54180);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__54181,seq54180__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args54184 = [];
var len__25826__auto___54682 = arguments.length;
var i__25827__auto___54683 = (0);
while(true){
if((i__25827__auto___54683 < len__25826__auto___54682)){
args54184.push((arguments[i__25827__auto___54683]));

var G__54684 = (i__25827__auto___54683 + (1));
i__25827__auto___54683 = G__54684;
continue;
} else {
}
break;
}

var G__54188 = args54184.length;
switch (G__54188) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54184.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq54185){
var G__54186 = cljs.core.first.call(null,seq54185);
var seq54185__$1 = cljs.core.next.call(null,seq54185);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__54186,seq54185__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args54189 = [];
var len__25826__auto___54686 = arguments.length;
var i__25827__auto___54687 = (0);
while(true){
if((i__25827__auto___54687 < len__25826__auto___54686)){
args54189.push((arguments[i__25827__auto___54687]));

var G__54688 = (i__25827__auto___54687 + (1));
i__25827__auto___54687 = G__54688;
continue;
} else {
}
break;
}

var G__54193 = args54189.length;
switch (G__54193) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args54189.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq54190){
var G__54191 = cljs.core.first.call(null,seq54190);
var seq54190__$1 = cljs.core.next.call(null,seq54190);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__54191,seq54190__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args53729 = [];
var len__25826__auto___54690 = arguments.length;
var i__25827__auto___54691 = (0);
while(true){
if((i__25827__auto___54691 < len__25826__auto___54690)){
args53729.push((arguments[i__25827__auto___54691]));

var G__54692 = (i__25827__auto___54691 + (1));
i__25827__auto___54691 = G__54692;
continue;
} else {
}
break;
}

var G__53733 = args53729.length;
switch (G__53733) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args53729.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25845__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__37038__auto__,children__37039__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__37038__auto__,children__37039__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq53730){
var G__53731 = cljs.core.first.call(null,seq53730);
var seq53730__$1 = cljs.core.next.call(null,seq53730);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__53731,seq53730__$1);
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

//# sourceMappingURL=dom.js.map?rel=1477762302705