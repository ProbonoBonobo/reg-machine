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
if(cljs.core.truth_((function (){var or__4561__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__4561__auto__){
return or__4561__auto__;
} else {
var G__21197 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__21197) {
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
var G__21200 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__21200) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__21204){
var vec__21205 = p__21204;
var k = cljs.core.nth.call(null,vec__21205,(0),null);
var v = cljs.core.nth.call(null,vec__21205,(1),null);
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
return (function (){var or__4561__auto__ = React.isValidElement;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
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
var vec__21207 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__21207,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__21207,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args21208 = [];
var len__5619__auto___21833 = arguments.length;
var i__5620__auto___21834 = (0);
while(true){
if((i__5620__auto___21834 < len__5619__auto___21833)){
args21208.push((arguments[i__5620__auto___21834]));

var G__21835 = (i__5620__auto___21834 + (1));
i__5620__auto___21834 = G__21835;
continue;
} else {
}
break;
}

var G__21212 = args21208.length;
switch (G__21212) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21208.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq21209){
var G__21210 = cljs.core.first.call(null,seq21209);
var seq21209__$1 = cljs.core.next.call(null,seq21209);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__21210,seq21209__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args21213 = [];
var len__5619__auto___21837 = arguments.length;
var i__5620__auto___21838 = (0);
while(true){
if((i__5620__auto___21838 < len__5619__auto___21837)){
args21213.push((arguments[i__5620__auto___21838]));

var G__21839 = (i__5620__auto___21838 + (1));
i__5620__auto___21838 = G__21839;
continue;
} else {
}
break;
}

var G__21217 = args21213.length;
switch (G__21217) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21213.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq21214){
var G__21215 = cljs.core.first.call(null,seq21214);
var seq21214__$1 = cljs.core.next.call(null,seq21214);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__21215,seq21214__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(var_args){
var args21218 = [];
var len__5619__auto___21841 = arguments.length;
var i__5620__auto___21842 = (0);
while(true){
if((i__5620__auto___21842 < len__5619__auto___21841)){
args21218.push((arguments[i__5620__auto___21842]));

var G__21843 = (i__5620__auto___21842 + (1));
i__5620__auto___21842 = G__21843;
continue;
} else {
}
break;
}

var G__21222 = args21218.length;
switch (G__21222) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21218.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq21219){
var G__21220 = cljs.core.first.call(null,seq21219);
var seq21219__$1 = cljs.core.next.call(null,seq21219);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__21220,seq21219__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(var_args){
var args21223 = [];
var len__5619__auto___21845 = arguments.length;
var i__5620__auto___21846 = (0);
while(true){
if((i__5620__auto___21846 < len__5619__auto___21845)){
args21223.push((arguments[i__5620__auto___21846]));

var G__21847 = (i__5620__auto___21846 + (1));
i__5620__auto___21846 = G__21847;
continue;
} else {
}
break;
}

var G__21227 = args21223.length;
switch (G__21227) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21223.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq21224){
var G__21225 = cljs.core.first.call(null,seq21224);
var seq21224__$1 = cljs.core.next.call(null,seq21224);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__21225,seq21224__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(var_args){
var args21228 = [];
var len__5619__auto___21849 = arguments.length;
var i__5620__auto___21850 = (0);
while(true){
if((i__5620__auto___21850 < len__5619__auto___21849)){
args21228.push((arguments[i__5620__auto___21850]));

var G__21851 = (i__5620__auto___21850 + (1));
i__5620__auto___21850 = G__21851;
continue;
} else {
}
break;
}

var G__21232 = args21228.length;
switch (G__21232) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21228.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq21229){
var G__21230 = cljs.core.first.call(null,seq21229);
var seq21229__$1 = cljs.core.next.call(null,seq21229);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__21230,seq21229__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args21233 = [];
var len__5619__auto___21853 = arguments.length;
var i__5620__auto___21854 = (0);
while(true){
if((i__5620__auto___21854 < len__5619__auto___21853)){
args21233.push((arguments[i__5620__auto___21854]));

var G__21855 = (i__5620__auto___21854 + (1));
i__5620__auto___21854 = G__21855;
continue;
} else {
}
break;
}

var G__21237 = args21233.length;
switch (G__21237) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21233.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq21234){
var G__21235 = cljs.core.first.call(null,seq21234);
var seq21234__$1 = cljs.core.next.call(null,seq21234);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__21235,seq21234__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args21238 = [];
var len__5619__auto___21857 = arguments.length;
var i__5620__auto___21858 = (0);
while(true){
if((i__5620__auto___21858 < len__5619__auto___21857)){
args21238.push((arguments[i__5620__auto___21858]));

var G__21859 = (i__5620__auto___21858 + (1));
i__5620__auto___21858 = G__21859;
continue;
} else {
}
break;
}

var G__21242 = args21238.length;
switch (G__21242) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21238.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq21239){
var G__21240 = cljs.core.first.call(null,seq21239);
var seq21239__$1 = cljs.core.next.call(null,seq21239);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__21240,seq21239__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(var_args){
var args21243 = [];
var len__5619__auto___21861 = arguments.length;
var i__5620__auto___21862 = (0);
while(true){
if((i__5620__auto___21862 < len__5619__auto___21861)){
args21243.push((arguments[i__5620__auto___21862]));

var G__21863 = (i__5620__auto___21862 + (1));
i__5620__auto___21862 = G__21863;
continue;
} else {
}
break;
}

var G__21247 = args21243.length;
switch (G__21247) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21243.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq21244){
var G__21245 = cljs.core.first.call(null,seq21244);
var seq21244__$1 = cljs.core.next.call(null,seq21244);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__21245,seq21244__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(var_args){
var args21248 = [];
var len__5619__auto___21865 = arguments.length;
var i__5620__auto___21866 = (0);
while(true){
if((i__5620__auto___21866 < len__5619__auto___21865)){
args21248.push((arguments[i__5620__auto___21866]));

var G__21867 = (i__5620__auto___21866 + (1));
i__5620__auto___21866 = G__21867;
continue;
} else {
}
break;
}

var G__21252 = args21248.length;
switch (G__21252) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21248.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq21249){
var G__21250 = cljs.core.first.call(null,seq21249);
var seq21249__$1 = cljs.core.next.call(null,seq21249);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__21250,seq21249__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args21253 = [];
var len__5619__auto___21869 = arguments.length;
var i__5620__auto___21870 = (0);
while(true){
if((i__5620__auto___21870 < len__5619__auto___21869)){
args21253.push((arguments[i__5620__auto___21870]));

var G__21871 = (i__5620__auto___21870 + (1));
i__5620__auto___21870 = G__21871;
continue;
} else {
}
break;
}

var G__21257 = args21253.length;
switch (G__21257) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21253.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq21254){
var G__21255 = cljs.core.first.call(null,seq21254);
var seq21254__$1 = cljs.core.next.call(null,seq21254);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__21255,seq21254__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args21258 = [];
var len__5619__auto___21873 = arguments.length;
var i__5620__auto___21874 = (0);
while(true){
if((i__5620__auto___21874 < len__5619__auto___21873)){
args21258.push((arguments[i__5620__auto___21874]));

var G__21875 = (i__5620__auto___21874 + (1));
i__5620__auto___21874 = G__21875;
continue;
} else {
}
break;
}

var G__21262 = args21258.length;
switch (G__21262) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21258.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq21259){
var G__21260 = cljs.core.first.call(null,seq21259);
var seq21259__$1 = cljs.core.next.call(null,seq21259);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__21260,seq21259__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(var_args){
var args21263 = [];
var len__5619__auto___21877 = arguments.length;
var i__5620__auto___21878 = (0);
while(true){
if((i__5620__auto___21878 < len__5619__auto___21877)){
args21263.push((arguments[i__5620__auto___21878]));

var G__21879 = (i__5620__auto___21878 + (1));
i__5620__auto___21878 = G__21879;
continue;
} else {
}
break;
}

var G__21267 = args21263.length;
switch (G__21267) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21263.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq21264){
var G__21265 = cljs.core.first.call(null,seq21264);
var seq21264__$1 = cljs.core.next.call(null,seq21264);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__21265,seq21264__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args21268 = [];
var len__5619__auto___21881 = arguments.length;
var i__5620__auto___21882 = (0);
while(true){
if((i__5620__auto___21882 < len__5619__auto___21881)){
args21268.push((arguments[i__5620__auto___21882]));

var G__21883 = (i__5620__auto___21882 + (1));
i__5620__auto___21882 = G__21883;
continue;
} else {
}
break;
}

var G__21272 = args21268.length;
switch (G__21272) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21268.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq21269){
var G__21270 = cljs.core.first.call(null,seq21269);
var seq21269__$1 = cljs.core.next.call(null,seq21269);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__21270,seq21269__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(var_args){
var args21273 = [];
var len__5619__auto___21885 = arguments.length;
var i__5620__auto___21886 = (0);
while(true){
if((i__5620__auto___21886 < len__5619__auto___21885)){
args21273.push((arguments[i__5620__auto___21886]));

var G__21887 = (i__5620__auto___21886 + (1));
i__5620__auto___21886 = G__21887;
continue;
} else {
}
break;
}

var G__21277 = args21273.length;
switch (G__21277) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21273.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq21274){
var G__21275 = cljs.core.first.call(null,seq21274);
var seq21274__$1 = cljs.core.next.call(null,seq21274);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__21275,seq21274__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(var_args){
var args21278 = [];
var len__5619__auto___21889 = arguments.length;
var i__5620__auto___21890 = (0);
while(true){
if((i__5620__auto___21890 < len__5619__auto___21889)){
args21278.push((arguments[i__5620__auto___21890]));

var G__21891 = (i__5620__auto___21890 + (1));
i__5620__auto___21890 = G__21891;
continue;
} else {
}
break;
}

var G__21282 = args21278.length;
switch (G__21282) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21278.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq21279){
var G__21280 = cljs.core.first.call(null,seq21279);
var seq21279__$1 = cljs.core.next.call(null,seq21279);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__21280,seq21279__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(var_args){
var args21283 = [];
var len__5619__auto___21893 = arguments.length;
var i__5620__auto___21894 = (0);
while(true){
if((i__5620__auto___21894 < len__5619__auto___21893)){
args21283.push((arguments[i__5620__auto___21894]));

var G__21895 = (i__5620__auto___21894 + (1));
i__5620__auto___21894 = G__21895;
continue;
} else {
}
break;
}

var G__21287 = args21283.length;
switch (G__21287) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21283.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq21284){
var G__21285 = cljs.core.first.call(null,seq21284);
var seq21284__$1 = cljs.core.next.call(null,seq21284);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__21285,seq21284__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args21288 = [];
var len__5619__auto___21897 = arguments.length;
var i__5620__auto___21898 = (0);
while(true){
if((i__5620__auto___21898 < len__5619__auto___21897)){
args21288.push((arguments[i__5620__auto___21898]));

var G__21899 = (i__5620__auto___21898 + (1));
i__5620__auto___21898 = G__21899;
continue;
} else {
}
break;
}

var G__21292 = args21288.length;
switch (G__21292) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21288.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq21289){
var G__21290 = cljs.core.first.call(null,seq21289);
var seq21289__$1 = cljs.core.next.call(null,seq21289);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__21290,seq21289__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args21293 = [];
var len__5619__auto___21901 = arguments.length;
var i__5620__auto___21902 = (0);
while(true){
if((i__5620__auto___21902 < len__5619__auto___21901)){
args21293.push((arguments[i__5620__auto___21902]));

var G__21903 = (i__5620__auto___21902 + (1));
i__5620__auto___21902 = G__21903;
continue;
} else {
}
break;
}

var G__21297 = args21293.length;
switch (G__21297) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21293.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq21294){
var G__21295 = cljs.core.first.call(null,seq21294);
var seq21294__$1 = cljs.core.next.call(null,seq21294);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__21295,seq21294__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args21298 = [];
var len__5619__auto___21905 = arguments.length;
var i__5620__auto___21906 = (0);
while(true){
if((i__5620__auto___21906 < len__5619__auto___21905)){
args21298.push((arguments[i__5620__auto___21906]));

var G__21907 = (i__5620__auto___21906 + (1));
i__5620__auto___21906 = G__21907;
continue;
} else {
}
break;
}

var G__21302 = args21298.length;
switch (G__21302) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21298.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq21299){
var G__21300 = cljs.core.first.call(null,seq21299);
var seq21299__$1 = cljs.core.next.call(null,seq21299);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__21300,seq21299__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(var_args){
var args21303 = [];
var len__5619__auto___21909 = arguments.length;
var i__5620__auto___21910 = (0);
while(true){
if((i__5620__auto___21910 < len__5619__auto___21909)){
args21303.push((arguments[i__5620__auto___21910]));

var G__21911 = (i__5620__auto___21910 + (1));
i__5620__auto___21910 = G__21911;
continue;
} else {
}
break;
}

var G__21307 = args21303.length;
switch (G__21307) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21303.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq21304){
var G__21305 = cljs.core.first.call(null,seq21304);
var seq21304__$1 = cljs.core.next.call(null,seq21304);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__21305,seq21304__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(var_args){
var args21308 = [];
var len__5619__auto___21913 = arguments.length;
var i__5620__auto___21914 = (0);
while(true){
if((i__5620__auto___21914 < len__5619__auto___21913)){
args21308.push((arguments[i__5620__auto___21914]));

var G__21915 = (i__5620__auto___21914 + (1));
i__5620__auto___21914 = G__21915;
continue;
} else {
}
break;
}

var G__21312 = args21308.length;
switch (G__21312) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21308.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq21309){
var G__21310 = cljs.core.first.call(null,seq21309);
var seq21309__$1 = cljs.core.next.call(null,seq21309);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__21310,seq21309__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args21313 = [];
var len__5619__auto___21917 = arguments.length;
var i__5620__auto___21918 = (0);
while(true){
if((i__5620__auto___21918 < len__5619__auto___21917)){
args21313.push((arguments[i__5620__auto___21918]));

var G__21919 = (i__5620__auto___21918 + (1));
i__5620__auto___21918 = G__21919;
continue;
} else {
}
break;
}

var G__21317 = args21313.length;
switch (G__21317) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21313.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq21314){
var G__21315 = cljs.core.first.call(null,seq21314);
var seq21314__$1 = cljs.core.next.call(null,seq21314);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__21315,seq21314__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(var_args){
var args21318 = [];
var len__5619__auto___21921 = arguments.length;
var i__5620__auto___21922 = (0);
while(true){
if((i__5620__auto___21922 < len__5619__auto___21921)){
args21318.push((arguments[i__5620__auto___21922]));

var G__21923 = (i__5620__auto___21922 + (1));
i__5620__auto___21922 = G__21923;
continue;
} else {
}
break;
}

var G__21322 = args21318.length;
switch (G__21322) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21318.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq21319){
var G__21320 = cljs.core.first.call(null,seq21319);
var seq21319__$1 = cljs.core.next.call(null,seq21319);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__21320,seq21319__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args21323 = [];
var len__5619__auto___21925 = arguments.length;
var i__5620__auto___21926 = (0);
while(true){
if((i__5620__auto___21926 < len__5619__auto___21925)){
args21323.push((arguments[i__5620__auto___21926]));

var G__21927 = (i__5620__auto___21926 + (1));
i__5620__auto___21926 = G__21927;
continue;
} else {
}
break;
}

var G__21327 = args21323.length;
switch (G__21327) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21323.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq21324){
var G__21325 = cljs.core.first.call(null,seq21324);
var seq21324__$1 = cljs.core.next.call(null,seq21324);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__21325,seq21324__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args21328 = [];
var len__5619__auto___21929 = arguments.length;
var i__5620__auto___21930 = (0);
while(true){
if((i__5620__auto___21930 < len__5619__auto___21929)){
args21328.push((arguments[i__5620__auto___21930]));

var G__21931 = (i__5620__auto___21930 + (1));
i__5620__auto___21930 = G__21931;
continue;
} else {
}
break;
}

var G__21332 = args21328.length;
switch (G__21332) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21328.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq21329){
var G__21330 = cljs.core.first.call(null,seq21329);
var seq21329__$1 = cljs.core.next.call(null,seq21329);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__21330,seq21329__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(var_args){
var args21333 = [];
var len__5619__auto___21933 = arguments.length;
var i__5620__auto___21934 = (0);
while(true){
if((i__5620__auto___21934 < len__5619__auto___21933)){
args21333.push((arguments[i__5620__auto___21934]));

var G__21935 = (i__5620__auto___21934 + (1));
i__5620__auto___21934 = G__21935;
continue;
} else {
}
break;
}

var G__21337 = args21333.length;
switch (G__21337) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21333.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq21334){
var G__21335 = cljs.core.first.call(null,seq21334);
var seq21334__$1 = cljs.core.next.call(null,seq21334);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__21335,seq21334__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args21338 = [];
var len__5619__auto___21937 = arguments.length;
var i__5620__auto___21938 = (0);
while(true){
if((i__5620__auto___21938 < len__5619__auto___21937)){
args21338.push((arguments[i__5620__auto___21938]));

var G__21939 = (i__5620__auto___21938 + (1));
i__5620__auto___21938 = G__21939;
continue;
} else {
}
break;
}

var G__21342 = args21338.length;
switch (G__21342) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21338.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq21339){
var G__21340 = cljs.core.first.call(null,seq21339);
var seq21339__$1 = cljs.core.next.call(null,seq21339);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__21340,seq21339__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(var_args){
var args21343 = [];
var len__5619__auto___21941 = arguments.length;
var i__5620__auto___21942 = (0);
while(true){
if((i__5620__auto___21942 < len__5619__auto___21941)){
args21343.push((arguments[i__5620__auto___21942]));

var G__21943 = (i__5620__auto___21942 + (1));
i__5620__auto___21942 = G__21943;
continue;
} else {
}
break;
}

var G__21347 = args21343.length;
switch (G__21347) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21343.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq21344){
var G__21345 = cljs.core.first.call(null,seq21344);
var seq21344__$1 = cljs.core.next.call(null,seq21344);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__21345,seq21344__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args21348 = [];
var len__5619__auto___21945 = arguments.length;
var i__5620__auto___21946 = (0);
while(true){
if((i__5620__auto___21946 < len__5619__auto___21945)){
args21348.push((arguments[i__5620__auto___21946]));

var G__21947 = (i__5620__auto___21946 + (1));
i__5620__auto___21946 = G__21947;
continue;
} else {
}
break;
}

var G__21352 = args21348.length;
switch (G__21352) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21348.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq21349){
var G__21350 = cljs.core.first.call(null,seq21349);
var seq21349__$1 = cljs.core.next.call(null,seq21349);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__21350,seq21349__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args21353 = [];
var len__5619__auto___21949 = arguments.length;
var i__5620__auto___21950 = (0);
while(true){
if((i__5620__auto___21950 < len__5619__auto___21949)){
args21353.push((arguments[i__5620__auto___21950]));

var G__21951 = (i__5620__auto___21950 + (1));
i__5620__auto___21950 = G__21951;
continue;
} else {
}
break;
}

var G__21357 = args21353.length;
switch (G__21357) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21353.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq21354){
var G__21355 = cljs.core.first.call(null,seq21354);
var seq21354__$1 = cljs.core.next.call(null,seq21354);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__21355,seq21354__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(var_args){
var args21358 = [];
var len__5619__auto___21953 = arguments.length;
var i__5620__auto___21954 = (0);
while(true){
if((i__5620__auto___21954 < len__5619__auto___21953)){
args21358.push((arguments[i__5620__auto___21954]));

var G__21955 = (i__5620__auto___21954 + (1));
i__5620__auto___21954 = G__21955;
continue;
} else {
}
break;
}

var G__21362 = args21358.length;
switch (G__21362) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21358.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq21359){
var G__21360 = cljs.core.first.call(null,seq21359);
var seq21359__$1 = cljs.core.next.call(null,seq21359);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__21360,seq21359__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args21363 = [];
var len__5619__auto___21957 = arguments.length;
var i__5620__auto___21958 = (0);
while(true){
if((i__5620__auto___21958 < len__5619__auto___21957)){
args21363.push((arguments[i__5620__auto___21958]));

var G__21959 = (i__5620__auto___21958 + (1));
i__5620__auto___21958 = G__21959;
continue;
} else {
}
break;
}

var G__21367 = args21363.length;
switch (G__21367) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21363.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq21364){
var G__21365 = cljs.core.first.call(null,seq21364);
var seq21364__$1 = cljs.core.next.call(null,seq21364);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__21365,seq21364__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args21373 = [];
var len__5619__auto___21961 = arguments.length;
var i__5620__auto___21962 = (0);
while(true){
if((i__5620__auto___21962 < len__5619__auto___21961)){
args21373.push((arguments[i__5620__auto___21962]));

var G__21963 = (i__5620__auto___21962 + (1));
i__5620__auto___21962 = G__21963;
continue;
} else {
}
break;
}

var G__21377 = args21373.length;
switch (G__21377) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21373.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq21374){
var G__21375 = cljs.core.first.call(null,seq21374);
var seq21374__$1 = cljs.core.next.call(null,seq21374);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__21375,seq21374__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args21378 = [];
var len__5619__auto___21965 = arguments.length;
var i__5620__auto___21966 = (0);
while(true){
if((i__5620__auto___21966 < len__5619__auto___21965)){
args21378.push((arguments[i__5620__auto___21966]));

var G__21967 = (i__5620__auto___21966 + (1));
i__5620__auto___21966 = G__21967;
continue;
} else {
}
break;
}

var G__21382 = args21378.length;
switch (G__21382) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21378.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq21379){
var G__21380 = cljs.core.first.call(null,seq21379);
var seq21379__$1 = cljs.core.next.call(null,seq21379);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__21380,seq21379__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args21383 = [];
var len__5619__auto___21969 = arguments.length;
var i__5620__auto___21970 = (0);
while(true){
if((i__5620__auto___21970 < len__5619__auto___21969)){
args21383.push((arguments[i__5620__auto___21970]));

var G__21971 = (i__5620__auto___21970 + (1));
i__5620__auto___21970 = G__21971;
continue;
} else {
}
break;
}

var G__21387 = args21383.length;
switch (G__21387) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21383.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq21384){
var G__21385 = cljs.core.first.call(null,seq21384);
var seq21384__$1 = cljs.core.next.call(null,seq21384);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__21385,seq21384__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args21388 = [];
var len__5619__auto___21973 = arguments.length;
var i__5620__auto___21974 = (0);
while(true){
if((i__5620__auto___21974 < len__5619__auto___21973)){
args21388.push((arguments[i__5620__auto___21974]));

var G__21975 = (i__5620__auto___21974 + (1));
i__5620__auto___21974 = G__21975;
continue;
} else {
}
break;
}

var G__21392 = args21388.length;
switch (G__21392) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21388.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq21389){
var G__21390 = cljs.core.first.call(null,seq21389);
var seq21389__$1 = cljs.core.next.call(null,seq21389);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__21390,seq21389__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(var_args){
var args21393 = [];
var len__5619__auto___21977 = arguments.length;
var i__5620__auto___21978 = (0);
while(true){
if((i__5620__auto___21978 < len__5619__auto___21977)){
args21393.push((arguments[i__5620__auto___21978]));

var G__21979 = (i__5620__auto___21978 + (1));
i__5620__auto___21978 = G__21979;
continue;
} else {
}
break;
}

var G__21397 = args21393.length;
switch (G__21397) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21393.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq21394){
var G__21395 = cljs.core.first.call(null,seq21394);
var seq21394__$1 = cljs.core.next.call(null,seq21394);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__21395,seq21394__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args21398 = [];
var len__5619__auto___21981 = arguments.length;
var i__5620__auto___21982 = (0);
while(true){
if((i__5620__auto___21982 < len__5619__auto___21981)){
args21398.push((arguments[i__5620__auto___21982]));

var G__21983 = (i__5620__auto___21982 + (1));
i__5620__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var G__21402 = args21398.length;
switch (G__21402) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21398.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq21399){
var G__21400 = cljs.core.first.call(null,seq21399);
var seq21399__$1 = cljs.core.next.call(null,seq21399);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__21400,seq21399__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args21403 = [];
var len__5619__auto___21985 = arguments.length;
var i__5620__auto___21986 = (0);
while(true){
if((i__5620__auto___21986 < len__5619__auto___21985)){
args21403.push((arguments[i__5620__auto___21986]));

var G__21987 = (i__5620__auto___21986 + (1));
i__5620__auto___21986 = G__21987;
continue;
} else {
}
break;
}

var G__21407 = args21403.length;
switch (G__21407) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21403.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq21404){
var G__21405 = cljs.core.first.call(null,seq21404);
var seq21404__$1 = cljs.core.next.call(null,seq21404);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__21405,seq21404__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args21408 = [];
var len__5619__auto___21989 = arguments.length;
var i__5620__auto___21990 = (0);
while(true){
if((i__5620__auto___21990 < len__5619__auto___21989)){
args21408.push((arguments[i__5620__auto___21990]));

var G__21991 = (i__5620__auto___21990 + (1));
i__5620__auto___21990 = G__21991;
continue;
} else {
}
break;
}

var G__21412 = args21408.length;
switch (G__21412) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21408.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq21409){
var G__21410 = cljs.core.first.call(null,seq21409);
var seq21409__$1 = cljs.core.next.call(null,seq21409);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__21410,seq21409__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args21413 = [];
var len__5619__auto___21993 = arguments.length;
var i__5620__auto___21994 = (0);
while(true){
if((i__5620__auto___21994 < len__5619__auto___21993)){
args21413.push((arguments[i__5620__auto___21994]));

var G__21995 = (i__5620__auto___21994 + (1));
i__5620__auto___21994 = G__21995;
continue;
} else {
}
break;
}

var G__21417 = args21413.length;
switch (G__21417) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21413.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq21414){
var G__21415 = cljs.core.first.call(null,seq21414);
var seq21414__$1 = cljs.core.next.call(null,seq21414);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__21415,seq21414__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args21418 = [];
var len__5619__auto___21997 = arguments.length;
var i__5620__auto___21998 = (0);
while(true){
if((i__5620__auto___21998 < len__5619__auto___21997)){
args21418.push((arguments[i__5620__auto___21998]));

var G__21999 = (i__5620__auto___21998 + (1));
i__5620__auto___21998 = G__21999;
continue;
} else {
}
break;
}

var G__21422 = args21418.length;
switch (G__21422) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21418.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq21419){
var G__21420 = cljs.core.first.call(null,seq21419);
var seq21419__$1 = cljs.core.next.call(null,seq21419);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__21420,seq21419__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args21423 = [];
var len__5619__auto___22001 = arguments.length;
var i__5620__auto___22002 = (0);
while(true){
if((i__5620__auto___22002 < len__5619__auto___22001)){
args21423.push((arguments[i__5620__auto___22002]));

var G__22003 = (i__5620__auto___22002 + (1));
i__5620__auto___22002 = G__22003;
continue;
} else {
}
break;
}

var G__21427 = args21423.length;
switch (G__21427) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21423.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq21424){
var G__21425 = cljs.core.first.call(null,seq21424);
var seq21424__$1 = cljs.core.next.call(null,seq21424);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__21425,seq21424__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(var_args){
var args21428 = [];
var len__5619__auto___22005 = arguments.length;
var i__5620__auto___22006 = (0);
while(true){
if((i__5620__auto___22006 < len__5619__auto___22005)){
args21428.push((arguments[i__5620__auto___22006]));

var G__22007 = (i__5620__auto___22006 + (1));
i__5620__auto___22006 = G__22007;
continue;
} else {
}
break;
}

var G__21432 = args21428.length;
switch (G__21432) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21428.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq21429){
var G__21430 = cljs.core.first.call(null,seq21429);
var seq21429__$1 = cljs.core.next.call(null,seq21429);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__21430,seq21429__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(var_args){
var args21433 = [];
var len__5619__auto___22009 = arguments.length;
var i__5620__auto___22010 = (0);
while(true){
if((i__5620__auto___22010 < len__5619__auto___22009)){
args21433.push((arguments[i__5620__auto___22010]));

var G__22011 = (i__5620__auto___22010 + (1));
i__5620__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var G__21437 = args21433.length;
switch (G__21437) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21433.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq21434){
var G__21435 = cljs.core.first.call(null,seq21434);
var seq21434__$1 = cljs.core.next.call(null,seq21434);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__21435,seq21434__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args21438 = [];
var len__5619__auto___22013 = arguments.length;
var i__5620__auto___22014 = (0);
while(true){
if((i__5620__auto___22014 < len__5619__auto___22013)){
args21438.push((arguments[i__5620__auto___22014]));

var G__22015 = (i__5620__auto___22014 + (1));
i__5620__auto___22014 = G__22015;
continue;
} else {
}
break;
}

var G__21442 = args21438.length;
switch (G__21442) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21438.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq21439){
var G__21440 = cljs.core.first.call(null,seq21439);
var seq21439__$1 = cljs.core.next.call(null,seq21439);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__21440,seq21439__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(var_args){
var args21443 = [];
var len__5619__auto___22017 = arguments.length;
var i__5620__auto___22018 = (0);
while(true){
if((i__5620__auto___22018 < len__5619__auto___22017)){
args21443.push((arguments[i__5620__auto___22018]));

var G__22019 = (i__5620__auto___22018 + (1));
i__5620__auto___22018 = G__22019;
continue;
} else {
}
break;
}

var G__21447 = args21443.length;
switch (G__21447) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21443.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq21444){
var G__21445 = cljs.core.first.call(null,seq21444);
var seq21444__$1 = cljs.core.next.call(null,seq21444);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__21445,seq21444__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(var_args){
var args21448 = [];
var len__5619__auto___22021 = arguments.length;
var i__5620__auto___22022 = (0);
while(true){
if((i__5620__auto___22022 < len__5619__auto___22021)){
args21448.push((arguments[i__5620__auto___22022]));

var G__22023 = (i__5620__auto___22022 + (1));
i__5620__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var G__21452 = args21448.length;
switch (G__21452) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21448.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq21449){
var G__21450 = cljs.core.first.call(null,seq21449);
var seq21449__$1 = cljs.core.next.call(null,seq21449);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__21450,seq21449__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args21453 = [];
var len__5619__auto___22025 = arguments.length;
var i__5620__auto___22026 = (0);
while(true){
if((i__5620__auto___22026 < len__5619__auto___22025)){
args21453.push((arguments[i__5620__auto___22026]));

var G__22027 = (i__5620__auto___22026 + (1));
i__5620__auto___22026 = G__22027;
continue;
} else {
}
break;
}

var G__21457 = args21453.length;
switch (G__21457) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21453.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq21454){
var G__21455 = cljs.core.first.call(null,seq21454);
var seq21454__$1 = cljs.core.next.call(null,seq21454);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__21455,seq21454__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(var_args){
var args21458 = [];
var len__5619__auto___22029 = arguments.length;
var i__5620__auto___22030 = (0);
while(true){
if((i__5620__auto___22030 < len__5619__auto___22029)){
args21458.push((arguments[i__5620__auto___22030]));

var G__22031 = (i__5620__auto___22030 + (1));
i__5620__auto___22030 = G__22031;
continue;
} else {
}
break;
}

var G__21462 = args21458.length;
switch (G__21462) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21458.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq21459){
var G__21460 = cljs.core.first.call(null,seq21459);
var seq21459__$1 = cljs.core.next.call(null,seq21459);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__21460,seq21459__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args21463 = [];
var len__5619__auto___22033 = arguments.length;
var i__5620__auto___22034 = (0);
while(true){
if((i__5620__auto___22034 < len__5619__auto___22033)){
args21463.push((arguments[i__5620__auto___22034]));

var G__22035 = (i__5620__auto___22034 + (1));
i__5620__auto___22034 = G__22035;
continue;
} else {
}
break;
}

var G__21467 = args21463.length;
switch (G__21467) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21463.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq21464){
var G__21465 = cljs.core.first.call(null,seq21464);
var seq21464__$1 = cljs.core.next.call(null,seq21464);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__21465,seq21464__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args21468 = [];
var len__5619__auto___22037 = arguments.length;
var i__5620__auto___22038 = (0);
while(true){
if((i__5620__auto___22038 < len__5619__auto___22037)){
args21468.push((arguments[i__5620__auto___22038]));

var G__22039 = (i__5620__auto___22038 + (1));
i__5620__auto___22038 = G__22039;
continue;
} else {
}
break;
}

var G__21472 = args21468.length;
switch (G__21472) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21468.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq21469){
var G__21470 = cljs.core.first.call(null,seq21469);
var seq21469__$1 = cljs.core.next.call(null,seq21469);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__21470,seq21469__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args21473 = [];
var len__5619__auto___22041 = arguments.length;
var i__5620__auto___22042 = (0);
while(true){
if((i__5620__auto___22042 < len__5619__auto___22041)){
args21473.push((arguments[i__5620__auto___22042]));

var G__22043 = (i__5620__auto___22042 + (1));
i__5620__auto___22042 = G__22043;
continue;
} else {
}
break;
}

var G__21477 = args21473.length;
switch (G__21477) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21473.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq21474){
var G__21475 = cljs.core.first.call(null,seq21474);
var seq21474__$1 = cljs.core.next.call(null,seq21474);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__21475,seq21474__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(var_args){
var args21478 = [];
var len__5619__auto___22045 = arguments.length;
var i__5620__auto___22046 = (0);
while(true){
if((i__5620__auto___22046 < len__5619__auto___22045)){
args21478.push((arguments[i__5620__auto___22046]));

var G__22047 = (i__5620__auto___22046 + (1));
i__5620__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var G__21482 = args21478.length;
switch (G__21482) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21478.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq21479){
var G__21480 = cljs.core.first.call(null,seq21479);
var seq21479__$1 = cljs.core.next.call(null,seq21479);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__21480,seq21479__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args21483 = [];
var len__5619__auto___22049 = arguments.length;
var i__5620__auto___22050 = (0);
while(true){
if((i__5620__auto___22050 < len__5619__auto___22049)){
args21483.push((arguments[i__5620__auto___22050]));

var G__22051 = (i__5620__auto___22050 + (1));
i__5620__auto___22050 = G__22051;
continue;
} else {
}
break;
}

var G__21487 = args21483.length;
switch (G__21487) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21483.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq21484){
var G__21485 = cljs.core.first.call(null,seq21484);
var seq21484__$1 = cljs.core.next.call(null,seq21484);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__21485,seq21484__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(var_args){
var args21488 = [];
var len__5619__auto___22053 = arguments.length;
var i__5620__auto___22054 = (0);
while(true){
if((i__5620__auto___22054 < len__5619__auto___22053)){
args21488.push((arguments[i__5620__auto___22054]));

var G__22055 = (i__5620__auto___22054 + (1));
i__5620__auto___22054 = G__22055;
continue;
} else {
}
break;
}

var G__21492 = args21488.length;
switch (G__21492) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21488.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq21489){
var G__21490 = cljs.core.first.call(null,seq21489);
var seq21489__$1 = cljs.core.next.call(null,seq21489);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__21490,seq21489__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(var_args){
var args21493 = [];
var len__5619__auto___22057 = arguments.length;
var i__5620__auto___22058 = (0);
while(true){
if((i__5620__auto___22058 < len__5619__auto___22057)){
args21493.push((arguments[i__5620__auto___22058]));

var G__22059 = (i__5620__auto___22058 + (1));
i__5620__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var G__21497 = args21493.length;
switch (G__21497) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21493.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq21494){
var G__21495 = cljs.core.first.call(null,seq21494);
var seq21494__$1 = cljs.core.next.call(null,seq21494);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__21495,seq21494__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(var_args){
var args21498 = [];
var len__5619__auto___22061 = arguments.length;
var i__5620__auto___22062 = (0);
while(true){
if((i__5620__auto___22062 < len__5619__auto___22061)){
args21498.push((arguments[i__5620__auto___22062]));

var G__22063 = (i__5620__auto___22062 + (1));
i__5620__auto___22062 = G__22063;
continue;
} else {
}
break;
}

var G__21502 = args21498.length;
switch (G__21502) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21498.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq21499){
var G__21500 = cljs.core.first.call(null,seq21499);
var seq21499__$1 = cljs.core.next.call(null,seq21499);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__21500,seq21499__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(var_args){
var args21503 = [];
var len__5619__auto___22065 = arguments.length;
var i__5620__auto___22066 = (0);
while(true){
if((i__5620__auto___22066 < len__5619__auto___22065)){
args21503.push((arguments[i__5620__auto___22066]));

var G__22067 = (i__5620__auto___22066 + (1));
i__5620__auto___22066 = G__22067;
continue;
} else {
}
break;
}

var G__21507 = args21503.length;
switch (G__21507) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21503.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq21504){
var G__21505 = cljs.core.first.call(null,seq21504);
var seq21504__$1 = cljs.core.next.call(null,seq21504);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__21505,seq21504__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args21508 = [];
var len__5619__auto___22069 = arguments.length;
var i__5620__auto___22070 = (0);
while(true){
if((i__5620__auto___22070 < len__5619__auto___22069)){
args21508.push((arguments[i__5620__auto___22070]));

var G__22071 = (i__5620__auto___22070 + (1));
i__5620__auto___22070 = G__22071;
continue;
} else {
}
break;
}

var G__21512 = args21508.length;
switch (G__21512) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21508.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq21509){
var G__21510 = cljs.core.first.call(null,seq21509);
var seq21509__$1 = cljs.core.next.call(null,seq21509);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__21510,seq21509__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args21513 = [];
var len__5619__auto___22073 = arguments.length;
var i__5620__auto___22074 = (0);
while(true){
if((i__5620__auto___22074 < len__5619__auto___22073)){
args21513.push((arguments[i__5620__auto___22074]));

var G__22075 = (i__5620__auto___22074 + (1));
i__5620__auto___22074 = G__22075;
continue;
} else {
}
break;
}

var G__21517 = args21513.length;
switch (G__21517) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21513.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq21514){
var G__21515 = cljs.core.first.call(null,seq21514);
var seq21514__$1 = cljs.core.next.call(null,seq21514);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__21515,seq21514__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args21518 = [];
var len__5619__auto___22077 = arguments.length;
var i__5620__auto___22078 = (0);
while(true){
if((i__5620__auto___22078 < len__5619__auto___22077)){
args21518.push((arguments[i__5620__auto___22078]));

var G__22079 = (i__5620__auto___22078 + (1));
i__5620__auto___22078 = G__22079;
continue;
} else {
}
break;
}

var G__21522 = args21518.length;
switch (G__21522) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21518.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq21519){
var G__21520 = cljs.core.first.call(null,seq21519);
var seq21519__$1 = cljs.core.next.call(null,seq21519);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__21520,seq21519__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args21523 = [];
var len__5619__auto___22081 = arguments.length;
var i__5620__auto___22082 = (0);
while(true){
if((i__5620__auto___22082 < len__5619__auto___22081)){
args21523.push((arguments[i__5620__auto___22082]));

var G__22083 = (i__5620__auto___22082 + (1));
i__5620__auto___22082 = G__22083;
continue;
} else {
}
break;
}

var G__21527 = args21523.length;
switch (G__21527) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21523.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq21524){
var G__21525 = cljs.core.first.call(null,seq21524);
var seq21524__$1 = cljs.core.next.call(null,seq21524);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__21525,seq21524__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args21528 = [];
var len__5619__auto___22085 = arguments.length;
var i__5620__auto___22086 = (0);
while(true){
if((i__5620__auto___22086 < len__5619__auto___22085)){
args21528.push((arguments[i__5620__auto___22086]));

var G__22087 = (i__5620__auto___22086 + (1));
i__5620__auto___22086 = G__22087;
continue;
} else {
}
break;
}

var G__21532 = args21528.length;
switch (G__21532) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21528.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq21529){
var G__21530 = cljs.core.first.call(null,seq21529);
var seq21529__$1 = cljs.core.next.call(null,seq21529);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__21530,seq21529__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args21533 = [];
var len__5619__auto___22089 = arguments.length;
var i__5620__auto___22090 = (0);
while(true){
if((i__5620__auto___22090 < len__5619__auto___22089)){
args21533.push((arguments[i__5620__auto___22090]));

var G__22091 = (i__5620__auto___22090 + (1));
i__5620__auto___22090 = G__22091;
continue;
} else {
}
break;
}

var G__21537 = args21533.length;
switch (G__21537) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21533.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq21534){
var G__21535 = cljs.core.first.call(null,seq21534);
var seq21534__$1 = cljs.core.next.call(null,seq21534);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__21535,seq21534__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args21538 = [];
var len__5619__auto___22093 = arguments.length;
var i__5620__auto___22094 = (0);
while(true){
if((i__5620__auto___22094 < len__5619__auto___22093)){
args21538.push((arguments[i__5620__auto___22094]));

var G__22095 = (i__5620__auto___22094 + (1));
i__5620__auto___22094 = G__22095;
continue;
} else {
}
break;
}

var G__21542 = args21538.length;
switch (G__21542) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21538.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq21539){
var G__21540 = cljs.core.first.call(null,seq21539);
var seq21539__$1 = cljs.core.next.call(null,seq21539);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__21540,seq21539__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args21543 = [];
var len__5619__auto___22097 = arguments.length;
var i__5620__auto___22098 = (0);
while(true){
if((i__5620__auto___22098 < len__5619__auto___22097)){
args21543.push((arguments[i__5620__auto___22098]));

var G__22099 = (i__5620__auto___22098 + (1));
i__5620__auto___22098 = G__22099;
continue;
} else {
}
break;
}

var G__21547 = args21543.length;
switch (G__21547) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21543.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq21544){
var G__21545 = cljs.core.first.call(null,seq21544);
var seq21544__$1 = cljs.core.next.call(null,seq21544);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__21545,seq21544__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(var_args){
var args21548 = [];
var len__5619__auto___22101 = arguments.length;
var i__5620__auto___22102 = (0);
while(true){
if((i__5620__auto___22102 < len__5619__auto___22101)){
args21548.push((arguments[i__5620__auto___22102]));

var G__22103 = (i__5620__auto___22102 + (1));
i__5620__auto___22102 = G__22103;
continue;
} else {
}
break;
}

var G__21552 = args21548.length;
switch (G__21552) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21548.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq21549){
var G__21550 = cljs.core.first.call(null,seq21549);
var seq21549__$1 = cljs.core.next.call(null,seq21549);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__21550,seq21549__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args21553 = [];
var len__5619__auto___22105 = arguments.length;
var i__5620__auto___22106 = (0);
while(true){
if((i__5620__auto___22106 < len__5619__auto___22105)){
args21553.push((arguments[i__5620__auto___22106]));

var G__22107 = (i__5620__auto___22106 + (1));
i__5620__auto___22106 = G__22107;
continue;
} else {
}
break;
}

var G__21557 = args21553.length;
switch (G__21557) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21553.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq21554){
var G__21555 = cljs.core.first.call(null,seq21554);
var seq21554__$1 = cljs.core.next.call(null,seq21554);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__21555,seq21554__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args21558 = [];
var len__5619__auto___22109 = arguments.length;
var i__5620__auto___22110 = (0);
while(true){
if((i__5620__auto___22110 < len__5619__auto___22109)){
args21558.push((arguments[i__5620__auto___22110]));

var G__22111 = (i__5620__auto___22110 + (1));
i__5620__auto___22110 = G__22111;
continue;
} else {
}
break;
}

var G__21562 = args21558.length;
switch (G__21562) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21558.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq21559){
var G__21560 = cljs.core.first.call(null,seq21559);
var seq21559__$1 = cljs.core.next.call(null,seq21559);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__21560,seq21559__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(var_args){
var args21563 = [];
var len__5619__auto___22113 = arguments.length;
var i__5620__auto___22114 = (0);
while(true){
if((i__5620__auto___22114 < len__5619__auto___22113)){
args21563.push((arguments[i__5620__auto___22114]));

var G__22115 = (i__5620__auto___22114 + (1));
i__5620__auto___22114 = G__22115;
continue;
} else {
}
break;
}

var G__21567 = args21563.length;
switch (G__21567) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21563.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq21564){
var G__21565 = cljs.core.first.call(null,seq21564);
var seq21564__$1 = cljs.core.next.call(null,seq21564);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__21565,seq21564__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(var_args){
var args21568 = [];
var len__5619__auto___22117 = arguments.length;
var i__5620__auto___22118 = (0);
while(true){
if((i__5620__auto___22118 < len__5619__auto___22117)){
args21568.push((arguments[i__5620__auto___22118]));

var G__22119 = (i__5620__auto___22118 + (1));
i__5620__auto___22118 = G__22119;
continue;
} else {
}
break;
}

var G__21572 = args21568.length;
switch (G__21572) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21568.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq21569){
var G__21570 = cljs.core.first.call(null,seq21569);
var seq21569__$1 = cljs.core.next.call(null,seq21569);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__21570,seq21569__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(var_args){
var args21573 = [];
var len__5619__auto___22121 = arguments.length;
var i__5620__auto___22122 = (0);
while(true){
if((i__5620__auto___22122 < len__5619__auto___22121)){
args21573.push((arguments[i__5620__auto___22122]));

var G__22123 = (i__5620__auto___22122 + (1));
i__5620__auto___22122 = G__22123;
continue;
} else {
}
break;
}

var G__21577 = args21573.length;
switch (G__21577) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21573.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq21574){
var G__21575 = cljs.core.first.call(null,seq21574);
var seq21574__$1 = cljs.core.next.call(null,seq21574);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__21575,seq21574__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args21578 = [];
var len__5619__auto___22125 = arguments.length;
var i__5620__auto___22126 = (0);
while(true){
if((i__5620__auto___22126 < len__5619__auto___22125)){
args21578.push((arguments[i__5620__auto___22126]));

var G__22127 = (i__5620__auto___22126 + (1));
i__5620__auto___22126 = G__22127;
continue;
} else {
}
break;
}

var G__21582 = args21578.length;
switch (G__21582) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21578.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq21579){
var G__21580 = cljs.core.first.call(null,seq21579);
var seq21579__$1 = cljs.core.next.call(null,seq21579);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__21580,seq21579__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args21583 = [];
var len__5619__auto___22129 = arguments.length;
var i__5620__auto___22130 = (0);
while(true){
if((i__5620__auto___22130 < len__5619__auto___22129)){
args21583.push((arguments[i__5620__auto___22130]));

var G__22131 = (i__5620__auto___22130 + (1));
i__5620__auto___22130 = G__22131;
continue;
} else {
}
break;
}

var G__21587 = args21583.length;
switch (G__21587) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21583.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq21584){
var G__21585 = cljs.core.first.call(null,seq21584);
var seq21584__$1 = cljs.core.next.call(null,seq21584);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__21585,seq21584__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(var_args){
var args21588 = [];
var len__5619__auto___22133 = arguments.length;
var i__5620__auto___22134 = (0);
while(true){
if((i__5620__auto___22134 < len__5619__auto___22133)){
args21588.push((arguments[i__5620__auto___22134]));

var G__22135 = (i__5620__auto___22134 + (1));
i__5620__auto___22134 = G__22135;
continue;
} else {
}
break;
}

var G__21592 = args21588.length;
switch (G__21592) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21588.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq21589){
var G__21590 = cljs.core.first.call(null,seq21589);
var seq21589__$1 = cljs.core.next.call(null,seq21589);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__21590,seq21589__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args21593 = [];
var len__5619__auto___22137 = arguments.length;
var i__5620__auto___22138 = (0);
while(true){
if((i__5620__auto___22138 < len__5619__auto___22137)){
args21593.push((arguments[i__5620__auto___22138]));

var G__22139 = (i__5620__auto___22138 + (1));
i__5620__auto___22138 = G__22139;
continue;
} else {
}
break;
}

var G__21597 = args21593.length;
switch (G__21597) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21593.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq21594){
var G__21595 = cljs.core.first.call(null,seq21594);
var seq21594__$1 = cljs.core.next.call(null,seq21594);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__21595,seq21594__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args21598 = [];
var len__5619__auto___22141 = arguments.length;
var i__5620__auto___22142 = (0);
while(true){
if((i__5620__auto___22142 < len__5619__auto___22141)){
args21598.push((arguments[i__5620__auto___22142]));

var G__22143 = (i__5620__auto___22142 + (1));
i__5620__auto___22142 = G__22143;
continue;
} else {
}
break;
}

var G__21602 = args21598.length;
switch (G__21602) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21598.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq21599){
var G__21600 = cljs.core.first.call(null,seq21599);
var seq21599__$1 = cljs.core.next.call(null,seq21599);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__21600,seq21599__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args21603 = [];
var len__5619__auto___22145 = arguments.length;
var i__5620__auto___22146 = (0);
while(true){
if((i__5620__auto___22146 < len__5619__auto___22145)){
args21603.push((arguments[i__5620__auto___22146]));

var G__22147 = (i__5620__auto___22146 + (1));
i__5620__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var G__21607 = args21603.length;
switch (G__21607) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21603.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq21604){
var G__21605 = cljs.core.first.call(null,seq21604);
var seq21604__$1 = cljs.core.next.call(null,seq21604);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__21605,seq21604__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(var_args){
var args21608 = [];
var len__5619__auto___22149 = arguments.length;
var i__5620__auto___22150 = (0);
while(true){
if((i__5620__auto___22150 < len__5619__auto___22149)){
args21608.push((arguments[i__5620__auto___22150]));

var G__22151 = (i__5620__auto___22150 + (1));
i__5620__auto___22150 = G__22151;
continue;
} else {
}
break;
}

var G__21612 = args21608.length;
switch (G__21612) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21608.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq21609){
var G__21610 = cljs.core.first.call(null,seq21609);
var seq21609__$1 = cljs.core.next.call(null,seq21609);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__21610,seq21609__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args21613 = [];
var len__5619__auto___22153 = arguments.length;
var i__5620__auto___22154 = (0);
while(true){
if((i__5620__auto___22154 < len__5619__auto___22153)){
args21613.push((arguments[i__5620__auto___22154]));

var G__22155 = (i__5620__auto___22154 + (1));
i__5620__auto___22154 = G__22155;
continue;
} else {
}
break;
}

var G__21617 = args21613.length;
switch (G__21617) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21613.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq21614){
var G__21615 = cljs.core.first.call(null,seq21614);
var seq21614__$1 = cljs.core.next.call(null,seq21614);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__21615,seq21614__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(var_args){
var args21618 = [];
var len__5619__auto___22157 = arguments.length;
var i__5620__auto___22158 = (0);
while(true){
if((i__5620__auto___22158 < len__5619__auto___22157)){
args21618.push((arguments[i__5620__auto___22158]));

var G__22159 = (i__5620__auto___22158 + (1));
i__5620__auto___22158 = G__22159;
continue;
} else {
}
break;
}

var G__21622 = args21618.length;
switch (G__21622) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21618.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq21619){
var G__21620 = cljs.core.first.call(null,seq21619);
var seq21619__$1 = cljs.core.next.call(null,seq21619);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__21620,seq21619__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(var_args){
var args21623 = [];
var len__5619__auto___22161 = arguments.length;
var i__5620__auto___22162 = (0);
while(true){
if((i__5620__auto___22162 < len__5619__auto___22161)){
args21623.push((arguments[i__5620__auto___22162]));

var G__22163 = (i__5620__auto___22162 + (1));
i__5620__auto___22162 = G__22163;
continue;
} else {
}
break;
}

var G__21627 = args21623.length;
switch (G__21627) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21623.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq21624){
var G__21625 = cljs.core.first.call(null,seq21624);
var seq21624__$1 = cljs.core.next.call(null,seq21624);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__21625,seq21624__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(var_args){
var args21628 = [];
var len__5619__auto___22165 = arguments.length;
var i__5620__auto___22166 = (0);
while(true){
if((i__5620__auto___22166 < len__5619__auto___22165)){
args21628.push((arguments[i__5620__auto___22166]));

var G__22167 = (i__5620__auto___22166 + (1));
i__5620__auto___22166 = G__22167;
continue;
} else {
}
break;
}

var G__21632 = args21628.length;
switch (G__21632) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21628.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq21629){
var G__21630 = cljs.core.first.call(null,seq21629);
var seq21629__$1 = cljs.core.next.call(null,seq21629);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__21630,seq21629__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(var_args){
var args21633 = [];
var len__5619__auto___22169 = arguments.length;
var i__5620__auto___22170 = (0);
while(true){
if((i__5620__auto___22170 < len__5619__auto___22169)){
args21633.push((arguments[i__5620__auto___22170]));

var G__22171 = (i__5620__auto___22170 + (1));
i__5620__auto___22170 = G__22171;
continue;
} else {
}
break;
}

var G__21637 = args21633.length;
switch (G__21637) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21633.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq21634){
var G__21635 = cljs.core.first.call(null,seq21634);
var seq21634__$1 = cljs.core.next.call(null,seq21634);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__21635,seq21634__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(var_args){
var args21638 = [];
var len__5619__auto___22173 = arguments.length;
var i__5620__auto___22174 = (0);
while(true){
if((i__5620__auto___22174 < len__5619__auto___22173)){
args21638.push((arguments[i__5620__auto___22174]));

var G__22175 = (i__5620__auto___22174 + (1));
i__5620__auto___22174 = G__22175;
continue;
} else {
}
break;
}

var G__21642 = args21638.length;
switch (G__21642) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21638.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq21639){
var G__21640 = cljs.core.first.call(null,seq21639);
var seq21639__$1 = cljs.core.next.call(null,seq21639);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__21640,seq21639__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(var_args){
var args21643 = [];
var len__5619__auto___22177 = arguments.length;
var i__5620__auto___22178 = (0);
while(true){
if((i__5620__auto___22178 < len__5619__auto___22177)){
args21643.push((arguments[i__5620__auto___22178]));

var G__22179 = (i__5620__auto___22178 + (1));
i__5620__auto___22178 = G__22179;
continue;
} else {
}
break;
}

var G__21647 = args21643.length;
switch (G__21647) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21643.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq21644){
var G__21645 = cljs.core.first.call(null,seq21644);
var seq21644__$1 = cljs.core.next.call(null,seq21644);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__21645,seq21644__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args21648 = [];
var len__5619__auto___22181 = arguments.length;
var i__5620__auto___22182 = (0);
while(true){
if((i__5620__auto___22182 < len__5619__auto___22181)){
args21648.push((arguments[i__5620__auto___22182]));

var G__22183 = (i__5620__auto___22182 + (1));
i__5620__auto___22182 = G__22183;
continue;
} else {
}
break;
}

var G__21652 = args21648.length;
switch (G__21652) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21648.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq21649){
var G__21650 = cljs.core.first.call(null,seq21649);
var seq21649__$1 = cljs.core.next.call(null,seq21649);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__21650,seq21649__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(var_args){
var args21653 = [];
var len__5619__auto___22185 = arguments.length;
var i__5620__auto___22186 = (0);
while(true){
if((i__5620__auto___22186 < len__5619__auto___22185)){
args21653.push((arguments[i__5620__auto___22186]));

var G__22187 = (i__5620__auto___22186 + (1));
i__5620__auto___22186 = G__22187;
continue;
} else {
}
break;
}

var G__21657 = args21653.length;
switch (G__21657) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21653.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq21654){
var G__21655 = cljs.core.first.call(null,seq21654);
var seq21654__$1 = cljs.core.next.call(null,seq21654);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__21655,seq21654__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args21658 = [];
var len__5619__auto___22189 = arguments.length;
var i__5620__auto___22190 = (0);
while(true){
if((i__5620__auto___22190 < len__5619__auto___22189)){
args21658.push((arguments[i__5620__auto___22190]));

var G__22191 = (i__5620__auto___22190 + (1));
i__5620__auto___22190 = G__22191;
continue;
} else {
}
break;
}

var G__21662 = args21658.length;
switch (G__21662) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21658.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq21659){
var G__21660 = cljs.core.first.call(null,seq21659);
var seq21659__$1 = cljs.core.next.call(null,seq21659);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__21660,seq21659__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args21663 = [];
var len__5619__auto___22193 = arguments.length;
var i__5620__auto___22194 = (0);
while(true){
if((i__5620__auto___22194 < len__5619__auto___22193)){
args21663.push((arguments[i__5620__auto___22194]));

var G__22195 = (i__5620__auto___22194 + (1));
i__5620__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var G__21667 = args21663.length;
switch (G__21667) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21663.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq21664){
var G__21665 = cljs.core.first.call(null,seq21664);
var seq21664__$1 = cljs.core.next.call(null,seq21664);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__21665,seq21664__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args21668 = [];
var len__5619__auto___22197 = arguments.length;
var i__5620__auto___22198 = (0);
while(true){
if((i__5620__auto___22198 < len__5619__auto___22197)){
args21668.push((arguments[i__5620__auto___22198]));

var G__22199 = (i__5620__auto___22198 + (1));
i__5620__auto___22198 = G__22199;
continue;
} else {
}
break;
}

var G__21672 = args21668.length;
switch (G__21672) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21668.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq21669){
var G__21670 = cljs.core.first.call(null,seq21669);
var seq21669__$1 = cljs.core.next.call(null,seq21669);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__21670,seq21669__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(var_args){
var args21673 = [];
var len__5619__auto___22201 = arguments.length;
var i__5620__auto___22202 = (0);
while(true){
if((i__5620__auto___22202 < len__5619__auto___22201)){
args21673.push((arguments[i__5620__auto___22202]));

var G__22203 = (i__5620__auto___22202 + (1));
i__5620__auto___22202 = G__22203;
continue;
} else {
}
break;
}

var G__21677 = args21673.length;
switch (G__21677) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21673.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq21674){
var G__21675 = cljs.core.first.call(null,seq21674);
var seq21674__$1 = cljs.core.next.call(null,seq21674);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__21675,seq21674__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args21678 = [];
var len__5619__auto___22205 = arguments.length;
var i__5620__auto___22206 = (0);
while(true){
if((i__5620__auto___22206 < len__5619__auto___22205)){
args21678.push((arguments[i__5620__auto___22206]));

var G__22207 = (i__5620__auto___22206 + (1));
i__5620__auto___22206 = G__22207;
continue;
} else {
}
break;
}

var G__21682 = args21678.length;
switch (G__21682) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21678.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq21679){
var G__21680 = cljs.core.first.call(null,seq21679);
var seq21679__$1 = cljs.core.next.call(null,seq21679);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__21680,seq21679__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(var_args){
var args21683 = [];
var len__5619__auto___22209 = arguments.length;
var i__5620__auto___22210 = (0);
while(true){
if((i__5620__auto___22210 < len__5619__auto___22209)){
args21683.push((arguments[i__5620__auto___22210]));

var G__22211 = (i__5620__auto___22210 + (1));
i__5620__auto___22210 = G__22211;
continue;
} else {
}
break;
}

var G__21687 = args21683.length;
switch (G__21687) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21683.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq21684){
var G__21685 = cljs.core.first.call(null,seq21684);
var seq21684__$1 = cljs.core.next.call(null,seq21684);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__21685,seq21684__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args21688 = [];
var len__5619__auto___22213 = arguments.length;
var i__5620__auto___22214 = (0);
while(true){
if((i__5620__auto___22214 < len__5619__auto___22213)){
args21688.push((arguments[i__5620__auto___22214]));

var G__22215 = (i__5620__auto___22214 + (1));
i__5620__auto___22214 = G__22215;
continue;
} else {
}
break;
}

var G__21692 = args21688.length;
switch (G__21692) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21688.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq21689){
var G__21690 = cljs.core.first.call(null,seq21689);
var seq21689__$1 = cljs.core.next.call(null,seq21689);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__21690,seq21689__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(var_args){
var args21693 = [];
var len__5619__auto___22217 = arguments.length;
var i__5620__auto___22218 = (0);
while(true){
if((i__5620__auto___22218 < len__5619__auto___22217)){
args21693.push((arguments[i__5620__auto___22218]));

var G__22219 = (i__5620__auto___22218 + (1));
i__5620__auto___22218 = G__22219;
continue;
} else {
}
break;
}

var G__21697 = args21693.length;
switch (G__21697) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21693.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq21694){
var G__21695 = cljs.core.first.call(null,seq21694);
var seq21694__$1 = cljs.core.next.call(null,seq21694);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__21695,seq21694__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args21698 = [];
var len__5619__auto___22221 = arguments.length;
var i__5620__auto___22222 = (0);
while(true){
if((i__5620__auto___22222 < len__5619__auto___22221)){
args21698.push((arguments[i__5620__auto___22222]));

var G__22223 = (i__5620__auto___22222 + (1));
i__5620__auto___22222 = G__22223;
continue;
} else {
}
break;
}

var G__21702 = args21698.length;
switch (G__21702) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21698.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq21699){
var G__21700 = cljs.core.first.call(null,seq21699);
var seq21699__$1 = cljs.core.next.call(null,seq21699);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__21700,seq21699__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(var_args){
var args21703 = [];
var len__5619__auto___22225 = arguments.length;
var i__5620__auto___22226 = (0);
while(true){
if((i__5620__auto___22226 < len__5619__auto___22225)){
args21703.push((arguments[i__5620__auto___22226]));

var G__22227 = (i__5620__auto___22226 + (1));
i__5620__auto___22226 = G__22227;
continue;
} else {
}
break;
}

var G__21707 = args21703.length;
switch (G__21707) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21703.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq21704){
var G__21705 = cljs.core.first.call(null,seq21704);
var seq21704__$1 = cljs.core.next.call(null,seq21704);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__21705,seq21704__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(var_args){
var args21708 = [];
var len__5619__auto___22229 = arguments.length;
var i__5620__auto___22230 = (0);
while(true){
if((i__5620__auto___22230 < len__5619__auto___22229)){
args21708.push((arguments[i__5620__auto___22230]));

var G__22231 = (i__5620__auto___22230 + (1));
i__5620__auto___22230 = G__22231;
continue;
} else {
}
break;
}

var G__21712 = args21708.length;
switch (G__21712) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21708.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq21709){
var G__21710 = cljs.core.first.call(null,seq21709);
var seq21709__$1 = cljs.core.next.call(null,seq21709);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__21710,seq21709__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args21713 = [];
var len__5619__auto___22233 = arguments.length;
var i__5620__auto___22234 = (0);
while(true){
if((i__5620__auto___22234 < len__5619__auto___22233)){
args21713.push((arguments[i__5620__auto___22234]));

var G__22235 = (i__5620__auto___22234 + (1));
i__5620__auto___22234 = G__22235;
continue;
} else {
}
break;
}

var G__21717 = args21713.length;
switch (G__21717) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21713.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq21714){
var G__21715 = cljs.core.first.call(null,seq21714);
var seq21714__$1 = cljs.core.next.call(null,seq21714);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__21715,seq21714__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(var_args){
var args21718 = [];
var len__5619__auto___22237 = arguments.length;
var i__5620__auto___22238 = (0);
while(true){
if((i__5620__auto___22238 < len__5619__auto___22237)){
args21718.push((arguments[i__5620__auto___22238]));

var G__22239 = (i__5620__auto___22238 + (1));
i__5620__auto___22238 = G__22239;
continue;
} else {
}
break;
}

var G__21722 = args21718.length;
switch (G__21722) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21718.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq21719){
var G__21720 = cljs.core.first.call(null,seq21719);
var seq21719__$1 = cljs.core.next.call(null,seq21719);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__21720,seq21719__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(var_args){
var args21723 = [];
var len__5619__auto___22241 = arguments.length;
var i__5620__auto___22242 = (0);
while(true){
if((i__5620__auto___22242 < len__5619__auto___22241)){
args21723.push((arguments[i__5620__auto___22242]));

var G__22243 = (i__5620__auto___22242 + (1));
i__5620__auto___22242 = G__22243;
continue;
} else {
}
break;
}

var G__21727 = args21723.length;
switch (G__21727) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21723.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq21724){
var G__21725 = cljs.core.first.call(null,seq21724);
var seq21724__$1 = cljs.core.next.call(null,seq21724);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__21725,seq21724__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args21728 = [];
var len__5619__auto___22245 = arguments.length;
var i__5620__auto___22246 = (0);
while(true){
if((i__5620__auto___22246 < len__5619__auto___22245)){
args21728.push((arguments[i__5620__auto___22246]));

var G__22247 = (i__5620__auto___22246 + (1));
i__5620__auto___22246 = G__22247;
continue;
} else {
}
break;
}

var G__21732 = args21728.length;
switch (G__21732) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21728.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq21729){
var G__21730 = cljs.core.first.call(null,seq21729);
var seq21729__$1 = cljs.core.next.call(null,seq21729);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__21730,seq21729__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args21733 = [];
var len__5619__auto___22249 = arguments.length;
var i__5620__auto___22250 = (0);
while(true){
if((i__5620__auto___22250 < len__5619__auto___22249)){
args21733.push((arguments[i__5620__auto___22250]));

var G__22251 = (i__5620__auto___22250 + (1));
i__5620__auto___22250 = G__22251;
continue;
} else {
}
break;
}

var G__21737 = args21733.length;
switch (G__21737) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21733.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq21734){
var G__21735 = cljs.core.first.call(null,seq21734);
var seq21734__$1 = cljs.core.next.call(null,seq21734);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__21735,seq21734__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(var_args){
var args21738 = [];
var len__5619__auto___22253 = arguments.length;
var i__5620__auto___22254 = (0);
while(true){
if((i__5620__auto___22254 < len__5619__auto___22253)){
args21738.push((arguments[i__5620__auto___22254]));

var G__22255 = (i__5620__auto___22254 + (1));
i__5620__auto___22254 = G__22255;
continue;
} else {
}
break;
}

var G__21742 = args21738.length;
switch (G__21742) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21738.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq21739){
var G__21740 = cljs.core.first.call(null,seq21739);
var seq21739__$1 = cljs.core.next.call(null,seq21739);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__21740,seq21739__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args21743 = [];
var len__5619__auto___22257 = arguments.length;
var i__5620__auto___22258 = (0);
while(true){
if((i__5620__auto___22258 < len__5619__auto___22257)){
args21743.push((arguments[i__5620__auto___22258]));

var G__22259 = (i__5620__auto___22258 + (1));
i__5620__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var G__21747 = args21743.length;
switch (G__21747) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21743.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq21744){
var G__21745 = cljs.core.first.call(null,seq21744);
var seq21744__$1 = cljs.core.next.call(null,seq21744);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__21745,seq21744__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args21748 = [];
var len__5619__auto___22261 = arguments.length;
var i__5620__auto___22262 = (0);
while(true){
if((i__5620__auto___22262 < len__5619__auto___22261)){
args21748.push((arguments[i__5620__auto___22262]));

var G__22263 = (i__5620__auto___22262 + (1));
i__5620__auto___22262 = G__22263;
continue;
} else {
}
break;
}

var G__21752 = args21748.length;
switch (G__21752) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21748.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq21749){
var G__21750 = cljs.core.first.call(null,seq21749);
var seq21749__$1 = cljs.core.next.call(null,seq21749);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__21750,seq21749__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args21753 = [];
var len__5619__auto___22265 = arguments.length;
var i__5620__auto___22266 = (0);
while(true){
if((i__5620__auto___22266 < len__5619__auto___22265)){
args21753.push((arguments[i__5620__auto___22266]));

var G__22267 = (i__5620__auto___22266 + (1));
i__5620__auto___22266 = G__22267;
continue;
} else {
}
break;
}

var G__21757 = args21753.length;
switch (G__21757) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21753.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq21754){
var G__21755 = cljs.core.first.call(null,seq21754);
var seq21754__$1 = cljs.core.next.call(null,seq21754);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__21755,seq21754__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(var_args){
var args21758 = [];
var len__5619__auto___22269 = arguments.length;
var i__5620__auto___22270 = (0);
while(true){
if((i__5620__auto___22270 < len__5619__auto___22269)){
args21758.push((arguments[i__5620__auto___22270]));

var G__22271 = (i__5620__auto___22270 + (1));
i__5620__auto___22270 = G__22271;
continue;
} else {
}
break;
}

var G__21762 = args21758.length;
switch (G__21762) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21758.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq21759){
var G__21760 = cljs.core.first.call(null,seq21759);
var seq21759__$1 = cljs.core.next.call(null,seq21759);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__21760,seq21759__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(var_args){
var args21763 = [];
var len__5619__auto___22273 = arguments.length;
var i__5620__auto___22274 = (0);
while(true){
if((i__5620__auto___22274 < len__5619__auto___22273)){
args21763.push((arguments[i__5620__auto___22274]));

var G__22275 = (i__5620__auto___22274 + (1));
i__5620__auto___22274 = G__22275;
continue;
} else {
}
break;
}

var G__21767 = args21763.length;
switch (G__21767) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21763.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq21764){
var G__21765 = cljs.core.first.call(null,seq21764);
var seq21764__$1 = cljs.core.next.call(null,seq21764);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__21765,seq21764__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(var_args){
var args21768 = [];
var len__5619__auto___22277 = arguments.length;
var i__5620__auto___22278 = (0);
while(true){
if((i__5620__auto___22278 < len__5619__auto___22277)){
args21768.push((arguments[i__5620__auto___22278]));

var G__22279 = (i__5620__auto___22278 + (1));
i__5620__auto___22278 = G__22279;
continue;
} else {
}
break;
}

var G__21772 = args21768.length;
switch (G__21772) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21768.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq21769){
var G__21770 = cljs.core.first.call(null,seq21769);
var seq21769__$1 = cljs.core.next.call(null,seq21769);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__21770,seq21769__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args21773 = [];
var len__5619__auto___22281 = arguments.length;
var i__5620__auto___22282 = (0);
while(true){
if((i__5620__auto___22282 < len__5619__auto___22281)){
args21773.push((arguments[i__5620__auto___22282]));

var G__22283 = (i__5620__auto___22282 + (1));
i__5620__auto___22282 = G__22283;
continue;
} else {
}
break;
}

var G__21777 = args21773.length;
switch (G__21777) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21773.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq21774){
var G__21775 = cljs.core.first.call(null,seq21774);
var seq21774__$1 = cljs.core.next.call(null,seq21774);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__21775,seq21774__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args21778 = [];
var len__5619__auto___22285 = arguments.length;
var i__5620__auto___22286 = (0);
while(true){
if((i__5620__auto___22286 < len__5619__auto___22285)){
args21778.push((arguments[i__5620__auto___22286]));

var G__22287 = (i__5620__auto___22286 + (1));
i__5620__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var G__21782 = args21778.length;
switch (G__21782) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21778.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq21779){
var G__21780 = cljs.core.first.call(null,seq21779);
var seq21779__$1 = cljs.core.next.call(null,seq21779);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__21780,seq21779__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args21783 = [];
var len__5619__auto___22289 = arguments.length;
var i__5620__auto___22290 = (0);
while(true){
if((i__5620__auto___22290 < len__5619__auto___22289)){
args21783.push((arguments[i__5620__auto___22290]));

var G__22291 = (i__5620__auto___22290 + (1));
i__5620__auto___22290 = G__22291;
continue;
} else {
}
break;
}

var G__21787 = args21783.length;
switch (G__21787) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21783.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq21784){
var G__21785 = cljs.core.first.call(null,seq21784);
var seq21784__$1 = cljs.core.next.call(null,seq21784);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__21785,seq21784__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(var_args){
var args21788 = [];
var len__5619__auto___22293 = arguments.length;
var i__5620__auto___22294 = (0);
while(true){
if((i__5620__auto___22294 < len__5619__auto___22293)){
args21788.push((arguments[i__5620__auto___22294]));

var G__22295 = (i__5620__auto___22294 + (1));
i__5620__auto___22294 = G__22295;
continue;
} else {
}
break;
}

var G__21792 = args21788.length;
switch (G__21792) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21788.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq21789){
var G__21790 = cljs.core.first.call(null,seq21789);
var seq21789__$1 = cljs.core.next.call(null,seq21789);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__21790,seq21789__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args21793 = [];
var len__5619__auto___22297 = arguments.length;
var i__5620__auto___22298 = (0);
while(true){
if((i__5620__auto___22298 < len__5619__auto___22297)){
args21793.push((arguments[i__5620__auto___22298]));

var G__22299 = (i__5620__auto___22298 + (1));
i__5620__auto___22298 = G__22299;
continue;
} else {
}
break;
}

var G__21797 = args21793.length;
switch (G__21797) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21793.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq21794){
var G__21795 = cljs.core.first.call(null,seq21794);
var seq21794__$1 = cljs.core.next.call(null,seq21794);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__21795,seq21794__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args21798 = [];
var len__5619__auto___22301 = arguments.length;
var i__5620__auto___22302 = (0);
while(true){
if((i__5620__auto___22302 < len__5619__auto___22301)){
args21798.push((arguments[i__5620__auto___22302]));

var G__22303 = (i__5620__auto___22302 + (1));
i__5620__auto___22302 = G__22303;
continue;
} else {
}
break;
}

var G__21802 = args21798.length;
switch (G__21802) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21798.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq21799){
var G__21800 = cljs.core.first.call(null,seq21799);
var seq21799__$1 = cljs.core.next.call(null,seq21799);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__21800,seq21799__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args21803 = [];
var len__5619__auto___22305 = arguments.length;
var i__5620__auto___22306 = (0);
while(true){
if((i__5620__auto___22306 < len__5619__auto___22305)){
args21803.push((arguments[i__5620__auto___22306]));

var G__22307 = (i__5620__auto___22306 + (1));
i__5620__auto___22306 = G__22307;
continue;
} else {
}
break;
}

var G__21807 = args21803.length;
switch (G__21807) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21803.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq21804){
var G__21805 = cljs.core.first.call(null,seq21804);
var seq21804__$1 = cljs.core.next.call(null,seq21804);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__21805,seq21804__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args21808 = [];
var len__5619__auto___22309 = arguments.length;
var i__5620__auto___22310 = (0);
while(true){
if((i__5620__auto___22310 < len__5619__auto___22309)){
args21808.push((arguments[i__5620__auto___22310]));

var G__22311 = (i__5620__auto___22310 + (1));
i__5620__auto___22310 = G__22311;
continue;
} else {
}
break;
}

var G__21812 = args21808.length;
switch (G__21812) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21808.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq21809){
var G__21810 = cljs.core.first.call(null,seq21809);
var seq21809__$1 = cljs.core.next.call(null,seq21809);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__21810,seq21809__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args21813 = [];
var len__5619__auto___22313 = arguments.length;
var i__5620__auto___22314 = (0);
while(true){
if((i__5620__auto___22314 < len__5619__auto___22313)){
args21813.push((arguments[i__5620__auto___22314]));

var G__22315 = (i__5620__auto___22314 + (1));
i__5620__auto___22314 = G__22315;
continue;
} else {
}
break;
}

var G__21817 = args21813.length;
switch (G__21817) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21813.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq21814){
var G__21815 = cljs.core.first.call(null,seq21814);
var seq21814__$1 = cljs.core.next.call(null,seq21814);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__21815,seq21814__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args21818 = [];
var len__5619__auto___22317 = arguments.length;
var i__5620__auto___22318 = (0);
while(true){
if((i__5620__auto___22318 < len__5619__auto___22317)){
args21818.push((arguments[i__5620__auto___22318]));

var G__22319 = (i__5620__auto___22318 + (1));
i__5620__auto___22318 = G__22319;
continue;
} else {
}
break;
}

var G__21822 = args21818.length;
switch (G__21822) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21818.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq21819){
var G__21820 = cljs.core.first.call(null,seq21819);
var seq21819__$1 = cljs.core.next.call(null,seq21819);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__21820,seq21819__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(var_args){
var args21823 = [];
var len__5619__auto___22321 = arguments.length;
var i__5620__auto___22322 = (0);
while(true){
if((i__5620__auto___22322 < len__5619__auto___22321)){
args21823.push((arguments[i__5620__auto___22322]));

var G__22323 = (i__5620__auto___22322 + (1));
i__5620__auto___22322 = G__22323;
continue;
} else {
}
break;
}

var G__21827 = args21823.length;
switch (G__21827) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21823.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq21824){
var G__21825 = cljs.core.first.call(null,seq21824);
var seq21824__$1 = cljs.core.next.call(null,seq21824);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__21825,seq21824__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args21828 = [];
var len__5619__auto___22325 = arguments.length;
var i__5620__auto___22326 = (0);
while(true){
if((i__5620__auto___22326 < len__5619__auto___22325)){
args21828.push((arguments[i__5620__auto___22326]));

var G__22327 = (i__5620__auto___22326 + (1));
i__5620__auto___22326 = G__22327;
continue;
} else {
}
break;
}

var G__21832 = args21828.length;
switch (G__21832) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21828.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq21829){
var G__21830 = cljs.core.first.call(null,seq21829);
var seq21829__$1 = cljs.core.next.call(null,seq21829);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__21830,seq21829__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(var_args){
var args21368 = [];
var len__5619__auto___22329 = arguments.length;
var i__5620__auto___22330 = (0);
while(true){
if((i__5620__auto___22330 < len__5619__auto___22329)){
args21368.push((arguments[i__5620__auto___22330]));

var G__22331 = (i__5620__auto___22330 + (1));
i__5620__auto___22330 = G__22331;
continue;
} else {
}
break;
}

var G__21372 = args21368.length;
switch (G__21372) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args21368.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5638__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__9349__auto__,children__9350__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__9349__auto__,children__9350__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq21369){
var G__21370 = cljs.core.first.call(null,seq21369);
var seq21369__$1 = cljs.core.next.call(null,seq21369);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__21370,seq21369__$1);
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
