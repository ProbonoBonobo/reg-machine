// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558),cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = cljs.core.atom.call(null,false);
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837)],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 62, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
var args51681 = [];
var len__25826__auto___51684 = arguments.length;
var i__25827__auto___51685 = (0);
while(true){
if((i__25827__auto___51685 < len__25826__auto___51684)){
args51681.push((arguments[i__25827__auto___51685]));

var G__51686 = (i__25827__auto___51685 + (1));
i__25827__auto___51685 = G__51686;
continue;
} else {
}
break;
}

var G__51683 = args51681.length;
switch (G__51683) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51681.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.call(null,m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;

cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || (x.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || (x.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || (x.cljs$core$IVector$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || (x.cljs$core$ISet$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge.call(null,[cljs.core.str(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
var args51696 = [];
var len__25826__auto___51699 = arguments.length;
var i__25827__auto___51700 = (0);
while(true){
if((i__25827__auto___51700 < len__25826__auto___51699)){
args51696.push((arguments[i__25827__auto___51700]));

var G__51701 = (i__25827__auto___51700 + (1));
i__25827__auto___51700 = G__51701;
continue;
} else {
}
break;
}

var G__51698 = args51696.length;
switch (G__51698) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51696.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.call(null,ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str(clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns),".","/")),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
var args51703 = [];
var len__25826__auto___51720 = arguments.length;
var i__25827__auto___51721 = (0);
while(true){
if((i__25827__auto___51721 < len__25826__auto___51720)){
args51703.push((arguments[i__25827__auto___51721]));

var G__51722 = (i__25827__auto___51721 + (1));
i__25827__auto___51721 = G__51722;
continue;
} else {
}
break;
}

var G__51705 = args51703.length;
switch (G__51705) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51703.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.call(null,x,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)),cljs.core.memoize.call(null,get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = memo_get_deps.call(null,x);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51706_51724 = cljs.core.seq.call(null,deps);
var chunk__51707_51725 = null;
var count__51708_51726 = (0);
var i__51709_51727 = (0);
while(true){
if((i__51709_51727 < count__51708_51726)){
var dep_51728 = cljs.core._nth.call(null,chunk__51707_51725,i__51709_51727);
cljs.analyzer.topo_sort.call(null,dep_51728,(depth + (1)),state,memo_get_deps);

var G__51729 = seq__51706_51724;
var G__51730 = chunk__51707_51725;
var G__51731 = count__51708_51726;
var G__51732 = (i__51709_51727 + (1));
seq__51706_51724 = G__51729;
chunk__51707_51725 = G__51730;
count__51708_51726 = G__51731;
i__51709_51727 = G__51732;
continue;
} else {
var temp__4657__auto___51733 = cljs.core.seq.call(null,seq__51706_51724);
if(temp__4657__auto___51733){
var seq__51706_51734__$1 = temp__4657__auto___51733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51706_51734__$1)){
var c__25562__auto___51735 = cljs.core.chunk_first.call(null,seq__51706_51734__$1);
var G__51736 = cljs.core.chunk_rest.call(null,seq__51706_51734__$1);
var G__51737 = c__25562__auto___51735;
var G__51738 = cljs.core.count.call(null,c__25562__auto___51735);
var G__51739 = (0);
seq__51706_51724 = G__51736;
chunk__51707_51725 = G__51737;
count__51708_51726 = G__51738;
i__51709_51727 = G__51739;
continue;
} else {
var dep_51740 = cljs.core.first.call(null,seq__51706_51734__$1);
cljs.analyzer.topo_sort.call(null,dep_51740,(depth + (1)),state,memo_get_deps);

var G__51741 = cljs.core.next.call(null,seq__51706_51734__$1);
var G__51742 = null;
var G__51743 = (0);
var G__51744 = (0);
seq__51706_51724 = G__51741;
chunk__51707_51725 = G__51742;
count__51708_51726 = G__51743;
i__51709_51727 = G__51744;
continue;
}
} else {
}
}
break;
}

var seq__51710_51745 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__51711_51746 = null;
var count__51712_51747 = (0);
var i__51713_51748 = (0);
while(true){
if((i__51713_51748 < count__51712_51747)){
var vec__51714_51749 = cljs.core._nth.call(null,chunk__51711_51746,i__51713_51748);
var _LT_depth_51750 = cljs.core.nth.call(null,vec__51714_51749,(0),null);
var __51751 = cljs.core.nth.call(null,vec__51714_51749,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_51750], null),clojure.set.difference,deps);

var G__51752 = seq__51710_51745;
var G__51753 = chunk__51711_51746;
var G__51754 = count__51712_51747;
var G__51755 = (i__51713_51748 + (1));
seq__51710_51745 = G__51752;
chunk__51711_51746 = G__51753;
count__51712_51747 = G__51754;
i__51713_51748 = G__51755;
continue;
} else {
var temp__4657__auto___51756 = cljs.core.seq.call(null,seq__51710_51745);
if(temp__4657__auto___51756){
var seq__51710_51757__$1 = temp__4657__auto___51756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51710_51757__$1)){
var c__25562__auto___51758 = cljs.core.chunk_first.call(null,seq__51710_51757__$1);
var G__51759 = cljs.core.chunk_rest.call(null,seq__51710_51757__$1);
var G__51760 = c__25562__auto___51758;
var G__51761 = cljs.core.count.call(null,c__25562__auto___51758);
var G__51762 = (0);
seq__51710_51745 = G__51759;
chunk__51711_51746 = G__51760;
count__51712_51747 = G__51761;
i__51713_51748 = G__51762;
continue;
} else {
var vec__51717_51763 = cljs.core.first.call(null,seq__51710_51757__$1);
var _LT_depth_51764 = cljs.core.nth.call(null,vec__51717_51763,(0),null);
var __51765 = cljs.core.nth.call(null,vec__51717_51763,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_51764], null),clojure.set.difference,deps);

var G__51766 = cljs.core.next.call(null,seq__51710_51757__$1);
var G__51767 = null;
var G__51768 = (0);
var G__51769 = (0);
seq__51710_51745 = G__51766;
chunk__51711_51746 = G__51767;
count__51712_51747 = G__51768;
i__51713_51748 = G__51769;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword(null,"op","op",-1882987955)));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__25676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","error-message"),((function (method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__){
return (function() { 
var G__51770__delegate = function (warning_type,_){
return warning_type;
};
var G__51770 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__51771__i = 0, G__51771__a = new Array(arguments.length -  1);
while (G__51771__i < G__51771__a.length) {G__51771__a[G__51771__i] = arguments[G__51771__i + 1]; ++G__51771__i;}
  _ = new cljs.core.IndexedSeq(G__51771__a,0);
} 
return G__51770__delegate.call(this,warning_type,_);};
G__51770.cljs$lang$maxFixedArity = 1;
G__51770.cljs$lang$applyTo = (function (arglist__51772){
var warning_type = cljs.core.first(arglist__51772);
var _ = cljs.core.rest(arglist__51772);
return G__51770__delegate(warning_type,_);
});
G__51770.cljs$core$IFn$_invoke$arity$variadic = G__51770__delegate;
return G__51770;
})()
;})(method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25680__auto__,method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),(function (warning_type,info){
return [cljs.core.str("Preamble resource file not found: "),cljs.core.str(clojure.string.join.call(null," ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),(function (warning_type,info){
return [cljs.core.str("Required namespace not provided for "),cljs.core.str(clojure.string.join.call(null," ",new cljs.core.Keyword(null,"unprovided","unprovided",-652330764).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),(function (warning_type,info){
return [cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205).cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var ")),cljs.core.str(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__51773){
var map__51774 = p__51773;
var map__51774__$1 = ((((!((map__51774 == null)))?((((map__51774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51774):map__51774);
var info = map__51774__$1;
var ns_sym = cljs.core.get.call(null,map__51774__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__51774__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return [cljs.core.str("No such namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629))),cljs.core.str(", "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583))),cljs.core.str(", or Closure namespace \""),cljs.core.str(js_provide),cljs.core.str("\"")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__51776){
var map__51777 = p__51776;
var map__51777__$1 = ((((!((map__51777 == null)))?((((map__51777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51777):map__51777);
var info = map__51777__$1;
var ns_sym = cljs.core.get.call(null,map__51777__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__51777__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return [cljs.core.str("No such macros namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"clj","clj",-660495428))),cljs.core.str(" or "),cljs.core.str(cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" not declared ^:dynamic")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef","redef",1032704258),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" already refers to: "),cljs.core.str(cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" being replaced by: "),cljs.core.str(cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" at line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is being replaced")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),(function (warning_type,info){
return [cljs.core.str(cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" no longer fn, references are stale")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),(function (warning_type,info){
return [cljs.core.str("Wrong number of args ("),cljs.core.str(new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(") passed to "),cljs.core.str((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" is deprecated.")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),(function (warning_type,info){
return [cljs.core.str("Invalid :refer, "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not exist")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is deprecated")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),(function (warning_type,info){
return [cljs.core.str("Can't resolve protocol symbol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),(function (warning_type,info){
return [cljs.core.str("Symbol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is not a protocol")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),(function (warning_type,info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840).cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare method called "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare arity "),cljs.core.str(new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949).cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),(function (warning_type,info){
return [cljs.core.str("Duplicated methods in protocol implementation "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" implemented multiple times")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" declares method "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" with variadic signature (&)")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have more than 1 variadic overload")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have 2 overloads with same arity")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),(function (warning_type,info){
return [cljs.core.str("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str("instead of "),cljs.core.str(new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" e.g "),cljs.core.str(new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(", all arguments must be numbers, got "),cljs.core.str(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" instead.")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),(function (warning_type,info){
return [cljs.core.str("Cannot invoke type constructor "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" as function ")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is a single segment namespace")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__51780){
var map__51781 = p__51780;
var map__51781__$1 = ((((!((map__51781 == null)))?((((map__51781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51781):map__51781);
var info = map__51781__$1;
var name = cljs.core.get.call(null,map__51781__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,((function (map__51781,map__51781__$1,info,name){
return (function (p1__51779_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__51779_SHARP_))){
return [cljs.core.str(p1__51779_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__51779_SHARP_;
}
});})(map__51781,map__51781__$1,info,name))
,clojure.string.split.call(null,cljs.core.name.call(null,name),/\./))));
return [cljs.core.str("Namespace "),cljs.core.str(name),cljs.core.str(" contains a reserved JavaScript keyword,"),cljs.core.str(" the corresponding Google Closure namespace will be munged to "),cljs.core.str(munged)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__51783){
var map__51784 = p__51783;
var map__51784__$1 = ((((!((map__51784 == null)))?((((map__51784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51784):map__51784);
var info = map__51784__$1;
var ns = cljs.core.get.call(null,map__51784__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.call(null,map__51784__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str("Namespace "),cljs.core.str(ns),cljs.core.str(" clashes with var "),cljs.core.str(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__51786){
var map__51787 = p__51786;
var map__51787__$1 = ((((!((map__51787 == null)))?((((map__51787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51787):map__51787);
var info = map__51787__$1;
var protocol = cljs.core.get.call(null,map__51787__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.call(null,map__51787__$1,new cljs.core.Keyword(null,"method","method",55703592));
return [cljs.core.str("Bad extend-type method shape for protocol "),cljs.core.str(protocol),cljs.core.str(" method "),cljs.core.str(method),cljs.core.str(", method arities must be grouped together")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__51789){
var map__51790 = p__51789;
var map__51790__$1 = ((((!((map__51790 == null)))?((((map__51790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51790):map__51790);
var info = map__51790__$1;
var module_type = cljs.core.get.call(null,map__51790__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.call(null,map__51790__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str("Unsupported JavaScript module type "),cljs.core.str(module_type),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__51792){
var map__51793 = p__51792;
var map__51793__$1 = ((((!((map__51793 == null)))?((((map__51793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51793):map__51793);
var preprocess = cljs.core.get.call(null,map__51793__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.call(null,map__51793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str("Unsupported preprocess value "),cljs.core.str(preprocess),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__4657__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
var _STAR_print_fn_STAR_51796 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,[cljs.core.str("WARNING: "),cljs.core.str(s)].join('')));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51796;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
var G__51797 = [cljs.core.str(ret),cljs.core.str(c)].join('');
var G__51798 = (n__$1 - (1));
ret = G__51797;
n__$1 = G__51798;
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str(cljs.analyzer.repeat_char.call(null,"0",(pad - len))),cljs.core.str(hex)].join(''):hex);
return [cljs.core.str("_u"),cljs.core.str(hex__$1),cljs.core.str("_")].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error([cljs.core.str("constant type "),cljs.core.str(cljs.core.type.call(null,value)),cljs.core.str(" not supported")].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.call(null,[cljs.core.str(value)].join(''),(1)):[cljs.core.str(value)].join(''));
var name__$1 = ((cljs.core._EQ_.call(null,".",name))?"_DOT_":clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.munge.call(null,clojure.string.replace.call(null,name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,((function (prefix,name){
return (function (p1__51799_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__51799_SHARP_,(4));
});})(prefix,name))
));
return cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var args51800 = [];
var len__25826__auto___51808 = arguments.length;
var i__25827__auto___51809 = (0);
while(true){
if((i__25827__auto___51809 < len__25826__auto___51808)){
args51800.push((arguments[i__25827__auto___51809]));

var G__51810 = (i__25827__auto___51809 + (1));
i__25827__auto___51809 = G__51810;
continue;
} else {
}
break;
}

var G__51802 = args51800.length;
switch (G__51802) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51800.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.call(null,null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__51803 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
if(cljs.core.truth_(cljs.core.get.call(null,table,val))){
return table;
} else {
return cljs.core.assoc.call(null,table,val,cljs.analyzer.gen_constant_id.call(null,val));
}
}));
if(cljs.core.truth_(env)){
return cljs.core.update_in.call(null,G__51803,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),((function (G__51803){
return (function (p__51804){
var map__51805 = p__51804;
var map__51805__$1 = ((((!((map__51805 == null)))?((((map__51805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51805):map__51805);
var constants = map__51805__$1;
var seen = cljs.core.get.call(null,map__51805__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__51805__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__51807 = constants;
if(!(cljs.core.contains_QMARK_.call(null,seen,val))){
return cljs.core.assoc.call(null,G__51807,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,val),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,order,val));
} else {
return G__51807;
}
});})(G__51803))
);
} else {
return G__51803;
}
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t_cljs$analyzer51812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer51812 = (function (meta51813){
this.meta51813 = meta51813;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.analyzer.t_cljs$analyzer51812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51814,meta51813__$1){
var self__ = this;
var _51814__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer51812(meta51813__$1));
});

cljs.analyzer.t_cljs$analyzer51812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51814){
var self__ = this;
var _51814__$1 = this;
return self__.meta51813;
});

cljs.analyzer.t_cljs$analyzer51812.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t_cljs$analyzer51812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51813","meta51813",-599471519,null)], null);
});

cljs.analyzer.t_cljs$analyzer51812.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer51812.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer51812";

cljs.analyzer.t_cljs$analyzer51812.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.analyzer/t_cljs$analyzer51812");
});

cljs.analyzer.__GT_t_cljs$analyzer51812 = (function cljs$analyzer$__GT_t_cljs$analyzer51812(meta51813){
return (new cljs.analyzer.t_cljs$analyzer51812(meta51813));
});

}

return (new cljs.analyzer.t_cljs$analyzer51812(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var args51815 = [];
var len__25826__auto___51818 = arguments.length;
var i__25827__auto___51819 = (0);
while(true){
if((i__25827__auto___51819 < len__25826__auto___51818)){
args51815.push((arguments[i__25827__auto___51819]));

var G__51820 = (i__25827__auto___51819 + (1));
i__25827__auto___51819 = G__51820;
continue;
} else {
}
break;
}

var G__51817 = args51815.length;
switch (G__51817) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51815.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.call(null,cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var ns = cljs.core.get_in.call(null,cljs.core.deref.call(null,cenv),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),key], null));
if(!((ns == null))){
return ns;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return null;
}
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__24751__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__24751__auto__ = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
var args51822 = [];
var len__25826__auto___51833 = arguments.length;
var i__25827__auto___51834 = (0);
while(true){
if((i__25827__auto___51834 < len__25826__auto___51833)){
args51822.push((arguments[i__25827__auto___51834]));

var G__51835 = (i__25827__auto___51834 + (1));
i__25827__auto___51834 = G__51835;
continue;
} else {
}
break;
}

var G__51824 = args51822.length;
switch (G__51824) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51822.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.call(null,ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__24751__auto__ = (cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)) == null);
if(or__24751__auto__){
return or__24751__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51825){
var vec__51826 = p__51825;
var k = cljs.core.nth.call(null,vec__51826,(0),null);
var v = cljs.core.nth.call(null,vec__51826,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta.call(null,v);
var ns__$1 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.call(null,vm,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(ns__$1)].join(''),[cljs.core.str(k)].join('')),new cljs.core.Keyword(null,"macro","macro",-867863404),true);
})()], null);
}),cljs.core.filter.call(null,(function (p__51829){
var vec__51830 = p__51829;
var _ = cljs.core.nth.call(null,vec__51830,(0),null);
var v = cljs.core.nth.call(null,vec__51830,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_.call(null,ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__47934__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (val__47934__auto__){
return (function (p1__51837_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__51837_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__51837_SHARP_], null)],null));
});})(val__47934__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var args51838 = [];
var len__25826__auto___51842 = arguments.length;
var i__25827__auto___51843 = (0);
while(true){
if((i__25827__auto___51843 < len__25826__auto___51842)){
args51838.push((arguments[i__25827__auto___51843]));

var G__51844 = (i__25827__auto___51843 + (1));
i__25827__auto___51843 = G__51844;
continue;
} else {
}
break;
}

var G__51840 = args51838.length;
switch (G__51840) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51838.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.call(null,null,env);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
var G__51841 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__51841,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912)], null)));
} else {
return G__51841;
}
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str(s),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" at line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[cljs.core.str(" in file "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__51850 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__51851 = null;
var count__51852 = (0);
var i__51853 = (0);
while(true){
if((i__51853 < count__51852)){
var handler = cljs.core._nth.call(null,chunk__51851,i__51853);
handler.call(null,warning_type,env,extra);

var G__51854 = seq__51850;
var G__51855 = chunk__51851;
var G__51856 = count__51852;
var G__51857 = (i__51853 + (1));
seq__51850 = G__51854;
chunk__51851 = G__51855;
count__51852 = G__51856;
i__51853 = G__51857;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51850);
if(temp__4657__auto__){
var seq__51850__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51850__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__51850__$1);
var G__51858 = cljs.core.chunk_rest.call(null,seq__51850__$1);
var G__51859 = c__25562__auto__;
var G__51860 = cljs.core.count.call(null,c__25562__auto__);
var G__51861 = (0);
seq__51850 = G__51858;
chunk__51851 = G__51859;
count__51852 = G__51860;
i__51853 = G__51861;
continue;
} else {
var handler = cljs.core.first.call(null,seq__51850__$1);
handler.call(null,warning_type,env,extra);

var G__51862 = cljs.core.next.call(null,seq__51850__$1);
var G__51863 = null;
var G__51864 = (0);
var G__51865 = (0);
seq__51850 = G__51862;
chunk__51851 = G__51863;
count__51852 = G__51864;
i__51853 = G__51865;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
var args51866 = [];
var len__25826__auto___51869 = arguments.length;
var i__25827__auto___51870 = (0);
while(true){
if((i__25827__auto___51870 < len__25826__auto___51869)){
args51866.push((arguments[i__25827__auto___51870]));

var G__51871 = (i__25827__auto___51870 + (1));
i__25827__auto___51870 = G__51871;
continue;
} else {
}
break;
}

var G__51868 = args51866.length;
switch (G__51868) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51866.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.call(null,env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.call(null,cljs.analyzer.message.call(null,env,msg),cljs.core.assoc.call(null,cljs.analyzer.source_info.call(null,env),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349)),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,ex)));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null,new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),null], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_.call(null,cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),env__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix__$1,new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205),!((cljs.analyzer.get_expander.call(null,cljs.core.symbol.call(null,[cljs.core.str(prefix__$1)].join(''),[cljs.core.str(suffix__$1)].join('')),env__$1) == null))], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix))){
return null;
} else {
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env);
if(!((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
if(!((cljs.core.get.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
return false;
}
}
}
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
var args51874 = [];
var len__25826__auto___51877 = arguments.length;
var i__25827__auto___51878 = (0);
while(true){
if((i__25827__auto___51878 < len__25826__auto___51877)){
args51874.push((arguments[i__25827__auto___51878]));

var G__51879 = (i__25827__auto___51878 + (1));
i__25827__auto___51878 = G__51879;
continue;
} else {
}
break;
}

var G__51876 = args51874.length;
switch (G__51876) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51874.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning.call(null,env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first.call(null,clojure.string.split.call(null,sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.call(null,suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_.call(null,env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_.call(null,env,prefix))) && (!((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),prefix)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),suffix__$1)))) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),suffix__$1) == null))){
return missing_fn.call(null,env,prefix,suffix__$1);
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.call(null,env__$1,[cljs.core.str("Unable to resolve var: "),cljs.core.str(suffix__$1),cljs.core.str(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
var args51881 = [];
var len__25826__auto___51884 = arguments.length;
var i__25827__auto___51885 = (0);
while(true){
if((i__25827__auto___51885 < len__25826__auto___51884)){
args51881.push((arguments[i__25827__auto___51885]));

var G__51886 = (i__25827__auto___51885 + (1));
i__25827__auto___51885 = G__51886;
continue;
} else {
}
break;
}

var G__51883 = args51881.length;
switch (G__51883) {
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51881.length)].join('')));

}
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,default$){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,default$);
});

cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3;

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
var args51888 = [];
var len__25826__auto___51891 = arguments.length;
var i__25827__auto___51892 = (0);
while(true){
if((i__25827__auto___51892 < len__25826__auto___51891)){
args51888.push((arguments[i__25827__auto___51892]));

var G__51893 = (i__25827__auto___51892 + (1));
i__25827__auto___51892 = G__51893;
continue;
} else {
}
break;
}

var G__51890 = args51888.length;
switch (G__51890) {
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51888.length)].join('')));

}
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,default$){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,default$);
});

cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns_sym)) && ((cljs.core.get.call(null,cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym) == null))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__24739__auto__ = (function (){var or__24751__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var temp__4657__auto__ = cljs.analyzer.get_expander.call(null,sym,env);
if(cljs.core.truth_(temp__4657__auto__)){
var mac = temp__4657__auto__;
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mac));
return cljs.core._EQ_.call(null,ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
} else {
return null;
}
}
})();
if(cljs.core.truth_(and__24739__auto__)){
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__24739__auto__;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
var args51895 = [];
var len__25826__auto___51898 = arguments.length;
var i__25827__auto___51899 = (0);
while(true){
if((i__25827__auto___51899 < len__25826__auto___51898)){
args51895.push((arguments[i__25827__auto___51899]));

var G__51900 = (i__25827__auto___51899 + (1));
i__25827__auto___51899 = G__51900;
continue;
} else {
}
break;
}

var G__51897 = args51895.length;
switch (G__51897) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51895.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.call(null,env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
if(("js" === cljs.core.namespace.call(null,sym))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sym,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null);
} else {
var s = [cljs.core.str(sym)].join('');
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var lb = cljs.core.get.call(null,lcls,sym);
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace.call(null,sym) == null))){
var ns = cljs.core.namespace.call(null,sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1);
if((confirm == null)){
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns.call(null,env,full_ns);
} else {
}

confirm.call(null,env,full_ns,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),[cljs.core.str(cljs.core.name.call(null,sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));
} else {
if((goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),idx));
var suffix = cljs.core.subs.call(null,s,(idx + (1)));
var lb__$1 = cljs.core.get.call(null,lcls,prefix);
if(!((lb__$1 == null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
} else {
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),prefix);
if(!((full_ns == null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),suffix)], null);
} else {
var info = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),prefix);
if(!((info == null))){
return cljs.core.merge.call(null,info,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cur_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),cur_ns], null));
} else {
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,suffix)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.call(null,"",prefix))?cljs.core.symbol.call(null,suffix):cljs.core.symbol.call(null,[cljs.core.str(prefix)].join(''),suffix)),new cljs.core.Keyword(null,"ns","ns",441598760),prefix], null));
}
}
}
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"uses","uses",232664692),sym) == null))){
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"uses","uses",232664692),sym);
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"renames","renames",343278368),sym) == null))){
var qualified_symbol = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"renames","renames",343278368),sym);
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),qualified_symbol,new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));
} else {
if(!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"imports","imports",-1249933394),sym) == null))){
var G__51902 = env;
var G__51903 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__51904 = confirm;
env = G__51902;
sym = G__51903;
confirm = G__51904;
continue;
} else {
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var full_ns = ((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null)))?cur_ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):cur_ns
));
if((confirm == null)){
} else {
confirm.call(null,env,full_ns,sym);
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));

}
}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not.call(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))){
return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.call(null,env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__51909 = cljs.core.seq.call(null,names);
var chunk__51910 = null;
var count__51911 = (0);
var i__51912 = (0);
while(true){
if((i__51912 < count__51911)){
var name = cljs.core._nth.call(null,chunk__51910,i__51912);
var env_51913__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_51914 = cljs.analyzer.resolve_existing_var.call(null,env_51913__$1,name);
if(cljs.core.truth_((function (){var and__24739__auto__ = ev_51914;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_51914));
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_51913__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_51914,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_51914)], null));
} else {
}

var G__51915 = seq__51909;
var G__51916 = chunk__51910;
var G__51917 = count__51911;
var G__51918 = (i__51912 + (1));
seq__51909 = G__51915;
chunk__51910 = G__51916;
count__51911 = G__51917;
i__51912 = G__51918;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51909);
if(temp__4657__auto__){
var seq__51909__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51909__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__51909__$1);
var G__51919 = cljs.core.chunk_rest.call(null,seq__51909__$1);
var G__51920 = c__25562__auto__;
var G__51921 = cljs.core.count.call(null,c__25562__auto__);
var G__51922 = (0);
seq__51909 = G__51919;
chunk__51910 = G__51920;
count__51911 = G__51921;
i__51912 = G__51922;
continue;
} else {
var name = cljs.core.first.call(null,seq__51909__$1);
var env_51923__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_51924 = cljs.analyzer.resolve_existing_var.call(null,env_51923__$1,name);
if(cljs.core.truth_((function (){var and__24739__auto__ = ev_51924;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_51924));
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_51923__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_51924,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_51924)], null));
} else {
}

var G__51925 = cljs.core.next.call(null,seq__51909__$1);
var G__51926 = null;
var G__51927 = (0);
var G__51928 = (0);
seq__51909 = G__51925;
chunk__51910 = G__51926;
count__51911 = G__51927;
i__51912 = G__51928;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
if(cljs.core.truth_(cljs.core.namespace.call(null,sym))){
var ns__$1 = cljs.core.namespace.call(null,sym);
var ns__$2 = ((cljs.core._EQ_.call(null,"clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.call(null,env,ns__$2);
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)))){
var full_ns = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null)))){
var qualified_symbol = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null));
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym__$1], null));
} else {
var ns__$1 = (cljs.core.truth_(cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)))?ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):null));
if(cljs.core.truth_(ns__$1)){
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"var","var",870848730,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e);
if(!((tag == null))){
return tag;
} else {
var tag__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
if(!((tag__$1 == null))){
return tag__$1;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e)));
}
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__24751__auto__ = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count.call(null,params);
return cljs.core.some.call(null,((function (methods$,c){
return (function (m){
var and__24739__auto__ = (function (){var or__24751__auto__ = (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__24751__auto__){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__24739__auto__)){
return m;
} else {
return and__24739__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.call(null,env,t);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(var$);
if(!((type == null))){
return type;
} else {
var type__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$));
if(!((type__$1 == null))){
return type__$1;
} else {
var proto = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$);
if(!((proto == null))){
return proto;
} else {
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),null], null), null),t);
}
}
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__51933 = e;
var map__51933__$1 = ((((!((map__51933 == null)))?((((map__51933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51933):map__51933);
var map__51934 = cljs.core.get.call(null,map__51933__$1,new cljs.core.Keyword(null,"test","test",577538877));
var map__51934__$1 = ((((!((map__51934 == null)))?((((map__51934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51934):map__51934);
var op = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var then_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(e));
if((cljs.core.keyword_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(e));
if((cljs.core.symbol_identical_QMARK_.call(null,then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_.call(null,else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_.call(null,then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_.call(null,env,then_tag))) && ((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_.call(null,env,else_tag)))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,then_tag))?then_tag:cljs.core.PersistentHashSet.fromArray([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,else_tag))?else_tag:cljs.core.PersistentHashSet.fromArray([else_tag], true));
return cljs.core.into.call(null,then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__51939 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(e);
var map__51939__$1 = ((((!((map__51939 == null)))?((((map__51939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51939):map__51939);
var f = map__51939__$1;
var info = cljs.core.get.call(null,map__51939__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var ret_tag = (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info) == null))?null:new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(info));
if(!((ret_tag == null))){
return ret_tag;
} else {
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"method","method",55703592));
var ret_tag__$1 = cljs.analyzer.infer_tag.call(null,env,me);
if(!((ret_tag__$1 == null))){
return ret_tag__$1;
} else {
return cljs.analyzer.ANY_SYM;
}
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var tag = cljs.analyzer.get_tag.call(null,e);
if(!((tag == null))){
return tag;
} else {
var G__51943 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__51943) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(e));

break;
case "if":
return cljs.analyzer.infer_if.call(null,env,e);

break;
case "method":
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "constant":
var G__51944 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__51944)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__51944)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
if(!((new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e) == null))){
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke.call(null,env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
return cljs$analyzer$infer_tag.call(null,env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__25676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","parse"),((function (method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__){
return (function() { 
var G__51946__delegate = function (op,rest){
return op;
};
var G__51946 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__51947__i = 0, G__51947__a = new Array(arguments.length -  1);
while (G__51947__i < G__51947__a.length) {G__51947__a[G__51947__i] = arguments[G__51947__i + 1]; ++G__51947__i;}
  rest = new cljs.core.IndexedSeq(G__51947__a,0);
} 
return G__51946__delegate.call(this,op,rest);};
G__51946.cljs$lang$maxFixedArity = 1;
G__51946.cljs$lang$applyTo = (function (arglist__51948){
var op = cljs.core.first(arglist__51948);
var rest = cljs.core.rest(arglist__51948);
return G__51946__delegate(op,rest);
});
G__51946.cljs$core$IFn$_invoke$arity$variadic = G__51946__delegate;
return G__51946;
})()
;})(method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25680__auto__,method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__4655__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__4655__auto__)){
var var_ns = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),cljs.analyzer.analyze.call(null,expr_env,sym),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.analyzer.analyze.call(null,expr_env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,var_ns),cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))),new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null);
var m = cljs.core.merge.call(null,(function (){var user_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys.call(null,user_meta);
return cljs.core.zipmap.call(null,uks,cljs.core.map.call(null,((function (user_meta,uks,ks,var_ns,temp__4655__auto__,var$,expr_env){
return (function (p1__51949_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.get.call(null,user_meta,p1__51949_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(user_meta,uks,ks,var_ns,temp__4655__auto__,var$,expr_env))
,uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,((function (ks,var_ns,temp__4655__auto__,var$,expr_env){
return (function (p1__51950_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.get.call(null,var$,p1__51950_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ks,var_ns,temp__4655__auto__,var$,expr_env))
,ks)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists)))?cljs.core.second.call(null,arglists):arglists);
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.with_meta,arglists_SINGLEQUOTE_,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838).cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
})()));
return cljs.analyzer.analyze.call(null,expr_env,m);
})()], null);
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__51951,_,___$1){
var vec__51952 = p__51951;
var ___$2 = cljs.core.nth.call(null,vec__51952,(0),null);
var sym = cljs.core.nth.call(null,vec__51952,(1),null);
var form = vec__51952;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),cljs.analyzer.var_ast.call(null,env,sym));
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__51955,name,_){
var vec__51956 = p__51955;
var ___$1 = cljs.core.nth.call(null,vec__51956,(0),null);
var test = cljs.core.nth.call(null,vec__51956,(1),null);
var then = cljs.core.nth.call(null,vec__51956,(2),null);
var else$ = cljs.core.nth.call(null,vec__51956,(3),null);
var form = vec__51956;
if((cljs.core.count.call(null,form) < (3))){
throw cljs.analyzer.error.call(null,env,"Too few arguments to if");
} else {
}

if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_51959 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_51959;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_51960 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return cljs.analyzer.analyze.call(null,env,then);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_51960;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_51961 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_51961;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__51964,name,_){
var vec__51965 = p__51964;
var ___$1 = cljs.core.nth.call(null,vec__51965,(0),null);
var sym = cljs.core.nth.call(null,vec__51965,(1),null);
var tests = cljs.core.nth.call(null,vec__51965,(2),null);
var thens = cljs.core.nth.call(null,vec__51965,(3),null);
var default$ = cljs.core.nth.call(null,vec__51965,(4),null);
var form = vec__51965;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* must switch on symbol"),cljs.core.str("\n"),cljs.core.str("(symbol? sym)")].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be grouped in vectors"),cljs.core.str("\n"),cljs.core.str("(every? vector? tests)")].join('')));
}

var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var v = (function (){var _STAR_recur_frames_STAR_51968 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_51968;
}})();
var tests__$1 = cljs.core.mapv.call(null,((function (expr_env,v,vec__51965,___$1,sym,tests,thens,default$,form){
return (function (p1__51962_SHARP_){
return cljs.core.mapv.call(null,((function (expr_env,v,vec__51965,___$1,sym,tests,thens,default$,form){
return (function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
});})(expr_env,v,vec__51965,___$1,sym,tests,thens,default$,form))
,p1__51962_SHARP_);
});})(expr_env,v,vec__51965,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.call(null,((function (expr_env,v,tests__$1,vec__51965,___$1,sym,tests,thens,default$,form){
return (function (p1__51963_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__51963_SHARP_);
});})(expr_env,v,tests__$1,vec__51965,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = cljs.analyzer.analyze.call(null,env,default$);
if(cljs.core.every_QMARK_.call(null,((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__51965,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__24751__auto__ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var and__24739__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(t));
if(and__24739__auto__){
return cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__24739__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__51965,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.call(null,cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be numbers, strings, or constants"),cljs.core.str("\n"),cljs.core.str("(every? (fn [t] (or (-> t :info :const) (and (= :constant (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case*","case*",716180697),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"tests","tests",-1041085625),tests__$1,new cljs.core.Keyword(null,"thens","thens",226631442),thens__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__51969,name,_){
var vec__51970 = p__51969;
var ___$1 = cljs.core.nth.call(null,vec__51970,(0),null);
var throw$ = cljs.core.nth.call(null,vec__51970,(1),null);
var form = vec__51970;
var throw_expr = (function (){var _STAR_recur_frames_STAR_51973 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),throw$);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_51973;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"throw","throw",-1044625833),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__51978,name,_){
var vec__51979 = p__51978;
var seq__51980 = cljs.core.seq.call(null,vec__51979);
var first__51981 = cljs.core.first.call(null,seq__51980);
var seq__51980__$1 = cljs.core.next.call(null,seq__51980);
var ___$1 = first__51981;
var body = seq__51980__$1;
var form = vec__51979;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),((function (vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form){
return (function (p1__51974_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),p1__51974_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__51974_SHARP_;
}
});})(vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form){
return (function (p1__51975_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__51975_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,((function (catchenv,catch_QMARK_,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form){
return (function (p1__51976_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__51976_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(catchenv,catch_QMARK_,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form){
return (function (p1__51977_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__51977_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form))
);
var map__51982 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__51983 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var seq__51984 = cljs.core.seq.call(null,vec__51983);
var first__51985 = cljs.core.first.call(null,seq__51984);
var seq__51984__$1 = cljs.core.next.call(null,seq__51984);
var form__$1 = first__51985;
var forms_STAR_ = seq__51984__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__51986 = (((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__51986) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__51996 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__51996;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__51997 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__51997;
continue;
} else {
var G__51998 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__51998;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_(default_QMARK_.call(null,form__$1))){
var G__51999 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__51999;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__52000 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__52000;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__52001 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__52001;
continue;
} else {
throw cljs.analyzer.error.call(null,env,"Invalid try form");

}
}
}

break;
case "finally":
var G__52002 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188));
parser = G__52002;
continue;

break;
case "done":
throw cljs.analyzer.error.call(null,env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__51982__$1 = ((((!((map__51982 == null)))?((((map__51982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51982):map__51982);
var body__$1 = cljs.core.get.call(null,map__51982__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.call(null,map__51982__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.call(null,map__51982__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.call(null,map__51982__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.rest.call(null,fblock))))):null);
var e = (cljs.core.truth_((function (){var or__24751__auto__ = cljs.core.seq.call(null,cblocks);
if(or__24751__auto__){
return or__24751__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.call(null,"e"):null);
var default$ = (function (){var temp__4655__auto__ = dblock;
if(cljs.core.truth_(temp__4655__auto__)){
var vec__51988 = temp__4655__auto__;
var seq__51989 = cljs.core.seq.call(null,vec__51988);
var first__51990 = cljs.core.first.call(null,seq__51989);
var seq__51989__$1 = cljs.core.next.call(null,seq__51989);
var ___$2 = first__51990;
var first__51990__$1 = cljs.core.first.call(null,seq__51989__$1);
var seq__51989__$2 = cljs.core.next.call(null,seq__51989__$1);
var ___$3 = first__51990__$1;
var first__51990__$2 = cljs.core.first.call(null,seq__51989__$2);
var seq__51989__$3 = cljs.core.next.call(null,seq__51989__$2);
var name__$1 = first__51990__$2;
var cb = seq__51989__$3;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cb)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
})();
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.mapcat.call(null,((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__51982,map__51982__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form){
return (function (p__51991){
var vec__51992 = p__51991;
var seq__51993 = cljs.core.seq.call(null,vec__51992);
var first__51994 = cljs.core.first.call(null,seq__51993);
var seq__51993__$1 = cljs.core.next.call(null,seq__51993);
var ___$2 = first__51994;
var first__51994__$1 = cljs.core.first.call(null,seq__51993__$1);
var seq__51993__$2 = cljs.core.next.call(null,seq__51993__$1);
var type = first__51994__$1;
var first__51994__$2 = cljs.core.first.call(null,seq__51993__$2);
var seq__51993__$3 = cljs.core.next.call(null,seq__51993__$2);
var name__$1 = first__51994__$2;
var cb = seq__51993__$3;
if(cljs.core.truth_(name__$1)){
if(cljs.core.not.call(null,cljs.core.namespace.call(null,name__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't qualify symbol in catch"),cljs.core.str("\n"),cljs.core.str("(not (namespace name))")].join('')));
}
} else {
}

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),(function (){var x__25585__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cb)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__51982,map__51982__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__51979,seq__51980,first__51981,seq__51980__$1,___$1,body,form))
,cblocks),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__25585__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.call(null,locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1),cblock):null);
var try$ = cljs.analyzer.analyze.call(null,(cljs.core.truth_((function (){var or__24751__auto__ = e;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return finally$;
}
})())?catchenv:env),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"try","try",1380742522),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"try","try",1380742522),try$,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$,new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"catch","catch",1038065524),catch$,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,_,___$1){
var pfn = (function() {
var G__52006 = null;
var G__52006__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__52006__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__52006__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__52006 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__52006__2.call(this,___$2,sym);
case 3:
return G__52006__3.call(this,___$2,sym,doc);
case 4:
return G__52006__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52006.cljs$core$IFn$_invoke$arity$2 = G__52006__2;
G__52006.cljs$core$IFn$_invoke$arity$3 = G__52006__3;
G__52006.cljs$core$IFn$_invoke$arity$4 = G__52006__4;
return G__52006;
})()
;
var args = cljs.core.apply.call(null,pfn,form);
var sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta.call(null,sym);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var protocol = cljs.analyzer.valid_proto.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)));
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join(''));
var sym_ns = cljs.core.namespace.call(null,sym);
var sym__$1 = (cljs.core.truth_((function (){var and__24739__auto__ = sym_ns;
if(cljs.core.truth_(and__24739__auto__)){
return !(cljs.core.symbol_identical_QMARK_.call(null,cljs.core.symbol.call(null,sym_ns),ns_name));
} else {
return and__24739__auto__;
}
})())?(function(){throw cljs.analyzer.error.call(null,env,[cljs.core.str("Can't def ns-qualified name in namespace "),cljs.core.str(sym_ns)].join(''))})():((cljs.core.some_QMARK_.call(null,sym_ns))?cljs.core.symbol.call(null,cljs.core.name.call(null,sym)):sym
));
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym__$1)].join('')),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,[cljs.core.str(ns_name)].join(''),[cljs.core.str(sym__$1)].join(''))], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1)))){
throw cljs.analyzer.error.call(null,env,"Can't redefine a constant");
} else {
}

var temp__4657__auto___52007 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__4657__auto___52007)){
var doc_52008 = temp__4657__auto___52007;
if(typeof doc_52008 === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
}
} else {
}

var temp__4657__auto___52009 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if(cljs.core.truth_(temp__4657__auto___52009)){
var v_52010 = temp__4657__auto___52009;
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.core.not.call(null,cljs.analyzer._STAR_allow_redef_STAR_);
if(and__24739__auto__){
var and__24739__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_52010));
if(and__24739__auto____$1){
var and__24739__auto____$2 = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__24739__auto____$2){
var and__24739__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__24739__auto____$3)){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_),sym__$1);
} else {
return and__24739__auto____$3;
}
} else {
return and__24739__auto____$2;
}
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_52010)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

var env__$1 = (cljs.core.truth_((function (){var or__24751__auto__ = (cljs.core.not_EQ_.call(null,ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_.call(null,env,sym__$1));
if(or__24751__auto__){
return or__24751__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"uses","uses",232664692),sym__$1], null));
}
})())?(function (){var ev = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1);
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef","redef",1032704258),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,sym__$1);

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,sym__$1);
})():env);
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_.call(null,args,new cljs.core.Keyword(null,"init","init",-1875481434)))?(function (){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),sym_meta,(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1)));

var _STAR_recur_frames_STAR_52004 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52004;
}})()
:null);
var fn_var_QMARK_ = (function (){var and__24739__auto__ = init_expr;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204));
} else {
return and__24739__auto__;
}
})();
var tag__$1 = (cljs.core.truth_(fn_var_QMARK_)?(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return tag;
}
})():tag);
var export_as = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__4657__auto__)){
var export_val = temp__4657__auto__;
if(cljs.core._EQ_.call(null,true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__24751__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
}
})();
var temp__4657__auto___52011 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if(cljs.core.truth_(temp__4657__auto___52011)){
var v_52012 = temp__4657__auto___52011;
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)));
if(and__24739__auto__){
var and__24739__auto____$1 = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_52012);
if(cljs.core.truth_(and__24739__auto____$1)){
return cljs.core.not.call(null,fn_var_QMARK_);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1], null));
} else {
}
} else {
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__52005 = sym_meta;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__52005,new cljs.core.Keyword(null,"test","test",577538877),true);
} else {
return G__52005;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,sym_meta,new cljs.core.Keyword(null,"test","test",577538877)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (f){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),protocol], null):null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__4657__auto__)){
var protocol_symbol = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),protocol_symbol,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol_symbol)),new cljs.core.Keyword(null,"impls","impls",-1314014853),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),(cljs.core.truth_(fn_var_QMARK_)?(function (){var params = cljs.core.map.call(null,((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (p1__52003_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__52003_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4655__auto__)){
var top_fn_meta = temp__4655__auto__;
return top_fn_meta;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),params,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
}
})());
})():null),(cljs.core.truth_((function (){var and__24739__auto__ = fn_var_QMARK_;
if(cljs.core.truth_(and__24739__auto__)){
return tag__$1;
} else {
return and__24739__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):null)));

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"name","name",1843675177),var_name,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"def-var","def-var",-698214377),true),sym__$1),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797)),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"init","init",-1875481434),init_expr], null),(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-ast","var-ast",1200379319),cljs.analyzer.var_ast.call(null,env__$1,sym__$1)], null):null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4657__auto__)){
var test = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test)], null);
} else {
return null;
}
})(),(cljs.core.truth_(tag__$1)?(cljs.core.truth_(fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null)):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),(cljs.core.truth_(export_as)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),export_as], null):null),(cljs.core.truth_(init_expr)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__52017,name){
var vec__52018 = p__52017;
var locals = cljs.core.nth.call(null,vec__52018,(0),null);
var params = cljs.core.nth.call(null,vec__52018,(1),null);
if(cljs.core.truth_(cljs.core.namespace.call(null,name))){
throw cljs.analyzer.error.call(null,env,[cljs.core.str("Can't use qualified name as parameter: "),cljs.core.str(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line.call(null,name,env);
var column = cljs.analyzer.get_col.call(null,name,env);
var nmeta = cljs.core.meta.call(null,name);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((locals == null))?null:locals.call(null,name));
var env__$1 = cljs.core.merge.call(null,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
var param = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[name,true,new cljs.core.Keyword(null,"var","var",-769682797),env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,locals,name,param),cljs.core.conj.call(null,params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_52022 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52022;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first.call(null,form);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var param_names__$1 = cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var body = cljs.core.next.call(null,form);
var step = cljs.analyzer.analyze_fn_method_param.call(null,env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__52026 = cljs.core.reduce.call(null,step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.call(null,vec__52026,(0),null);
var params = cljs.core.nth.call(null,vec__52026,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast.call(null,params):params);
var fixed_arity = cljs.core.count.call(null,params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null)], null);
var recur_frames = cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1);
var body_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
var expr = cljs.analyzer.analyze_fn_method_body.call(null,body_env,body_form,recur_frames);
var recurs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(recur_frame));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),fixed_arity,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"recurs","recurs",-1959309309),recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((name == null)){
return null;
} else {
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.call(null,locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),name], null)):null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531),true,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),fn_scope,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow__$1], null)], null);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
var ret_tag = (((tag == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag], null));
return cljs.core.merge.call(null,name_var,ret_tag);
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__52029_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__52029_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_52031 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_.call(null,menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_52031;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__52033,name,_){
var vec__52034 = p__52033;
var seq__52035 = cljs.core.seq.call(null,vec__52034);
var first__52036 = cljs.core.first.call(null,seq__52035);
var seq__52035__$1 = cljs.core.next.call(null,seq__52035);
var ___$1 = first__52036;
var args = seq__52035__$1;
var form = vec__52034;
var vec__52037 = (((cljs.core.first.call(null,args) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__52037,(0),null);
var meths = cljs.core.nth.call(null,vec__52037,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?(function (){var x__25585__auto__ = meths;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})():meths);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var.call(null,env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859)], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (!((name__$1 == null))))?cljs.core.assoc.call(null,locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta.call(null,form);
var type = new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026).cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count.call(null,meths__$1) > (1)))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)):env__$1);
var menv__$1 = cljs.core.merge.call(null,menv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),proto_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),proto_inline], null));
var methods$ = cljs.core.map.call(null,((function (vec__52037,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__52034,seq__52035,first__52036,seq__52035__$1,___$1,args,form){
return (function (p1__52032_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$1,p1__52032_SHARP_,type);
});})(vec__52037,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__52034,seq__52035,first__52036,seq__52035__$1,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),methods$));
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$));
var locals__$2 = ((!((name__$1 == null)))?cljs.core.update_in.call(null,locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?cljs.analyzer.analyze_fn_methods_pass2.call(null,menv__$1,locals__$2,type,meths__$1):methods$);
var form__$1 = cljs.core.vary_meta.call(null,form,cljs.core.dissoc,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742));
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,new cljs.core.Keyword(null,"fn","fn",-1175266204),env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_52040 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$__$1);
var variadic_params_52041 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,variadic_methods_52040)));
var param_counts_52042 = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235)),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_52040))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(!(((variadic_params_52041 === (0))) || ((variadic_params_52041 === ((1) + mfa))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_52042),param_counts_52042)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

return cljs.analyzer.analyze_wrap_meta.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__52043,name,_){
var vec__52044 = p__52043;
var seq__52045 = cljs.core.seq.call(null,vec__52044);
var first__52046 = cljs.core.first.call(null,seq__52045);
var seq__52045__$1 = cljs.core.next.call(null,seq__52045);
var ___$1 = first__52046;
var first__52046__$1 = cljs.core.first.call(null,seq__52045__$1);
var seq__52045__$2 = cljs.core.next.call(null,seq__52045__$1);
var bindings = first__52046__$1;
var exprs = seq__52045__$2;
var form = vec__52044;
if((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings)))){
} else {
throw cljs.analyzer.error.call(null,env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.partition.call(null,(2),bindings)));
var names = cljs.core.keys.call(null,n__GT_fexpr);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var vec__52047 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__52044,seq__52045,first__52046,seq__52045__$1,___$1,first__52046__$1,seq__52045__$2,bindings,exprs,form){
return (function (p__52053,n){
var vec__52054 = p__52053;
var map__52057 = cljs.core.nth.call(null,vec__52054,(0),null);
var map__52057__$1 = ((((!((map__52057 == null)))?((((map__52057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52057):map__52057);
var env__$1 = map__52057__$1;
var locals = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.call(null,vec__52054,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_52059 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_52059;
}})();
var be = (function (){var G__52060 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col.call(null,n,env__$1),cljs.analyzer.get_line.call(null,n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,locals.call(null,n),true]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__52060,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag);
} else {
return G__52060;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.call(null,bes,be)], null);
});})(n__GT_fexpr,names,context,vec__52044,seq__52045,first__52046,seq__52045__$1,___$1,first__52046__$1,seq__52045__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.call(null,vec__52047,(0),null);
var bes = cljs.core.nth.call(null,vec__52047,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__52050 = cljs.core.reduce.call(null,((function (n__GT_fexpr,names,context,vec__52047,meth_env,bes,meth_env__$1,vec__52044,seq__52045,first__52046,seq__52045__$1,___$1,first__52046__$1,seq__52045__$2,bindings,exprs,form){
return (function (p__52061,p__52062){
var vec__52063 = p__52061;
var meth_env__$2 = cljs.core.nth.call(null,vec__52063,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__52063,(1),null);
var map__52066 = p__52062;
var map__52066__$1 = ((((!((map__52066 == null)))?((((map__52066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52066):map__52066);
var be = map__52066__$1;
var name__$1 = cljs.core.get.call(null,map__52066__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.call(null,map__52066__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var env__$1 = cljs.core.assoc_in.call(null,meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),shadow);
var fexpr = cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1));
var be_SINGLEQUOTE_ = cljs.core.assoc.call(null,be,new cljs.core.Keyword(null,"init","init",-1875481434),fexpr,new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.call(null,bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__52047,meth_env,bes,meth_env__$1,vec__52044,seq__52045,first__52046,seq__52045__$1,___$1,first__52046__$1,seq__52045__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.call(null,vec__52050,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__52050,(1),null);
var expr = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,meth_env__$2,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs))));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes__$1,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__52068_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),p1__52068_SHARP_);
}),cljs.core.butlast.call(null,exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_52070 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52070;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__52071,_,___$1){
var vec__52072 = p__52071;
var seq__52073 = cljs.core.seq.call(null,vec__52072);
var first__52074 = cljs.core.first.call(null,seq__52073);
var seq__52073__$1 = cljs.core.next.call(null,seq__52073);
var ___$2 = first__52074;
var exprs = seq__52073__$1;
var form = vec__52072;
var statements = cljs.analyzer.analyze_do_statements.call(null,env,exprs);
if((cljs.core.count.call(null,exprs) <= (1))){
var ret = cljs.analyzer.analyze.call(null,env,cljs.core.first.call(null,exprs));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
var ret_env = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)):cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105)));
var ret = cljs.analyzer.analyze.call(null,ret_env,cljs.core.last.call(null,exprs));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_52076 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_52076;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
if(!((tag == null))){
return tag;
} else {
var tag__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
if(!((tag__$1 == null))){
return tag__$1;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(init_expr));
}
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.call(null,encl_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var bindings__$1 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),bindings));
while(true){
var binding = cljs.core.first.call(null,bindings__$1);
if(!((binding == null))){
var vec__52080 = binding;
var name = cljs.core.nth.call(null,vec__52080,(0),null);
var init = cljs.core.nth.call(null,vec__52080,(1),null);
if((!((cljs.core.namespace.call(null,name) == null))) || (goog.string.contains([cljs.core.str(name)].join(''),"."))){
throw cljs.analyzer.error.call(null,encl_env,[cljs.core.str("Invalid local name: "),cljs.core.str(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init.call(null,env,init,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line.call(null,name,env);
var col = cljs.analyzer.get_col.call(null,name,env);
var be = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[init_expr,name,true,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),name.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env))], null),cljs.analyzer.get_let_tag.call(null,name,init_expr),name.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env)),true]);
var be__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var G__52083 = cljs.core.conj.call(null,bes,be__$1);
var G__52084 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$1);
var G__52085 = cljs.core.next.call(null,bindings__$1);
bes = G__52083;
env = G__52084;
bindings__$1 = G__52085;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_52087 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52087;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs))));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_52090 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_52091 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_52091;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52090;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__52092,is_loop){
var vec__52099 = p__52092;
var seq__52100 = cljs.core.seq.call(null,vec__52099);
var first__52101 = cljs.core.first.call(null,seq__52100);
var seq__52100__$1 = cljs.core.next.call(null,seq__52100);
var _ = first__52101;
var first__52101__$1 = cljs.core.first.call(null,seq__52100__$1);
var seq__52100__$2 = cljs.core.next.call(null,seq__52100__$1);
var bindings = first__52101__$1;
var exprs = seq__52100__$2;
var form = vec__52099;
if((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings)))){
} else {
throw cljs.analyzer.error.call(null,encl_env,"bindings must be vector of even number of elements");
}

var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__52102 = cljs.analyzer.analyze_let_bindings.call(null,encl_env,bindings);
var bes = cljs.core.nth.call(null,vec__52102,(0),null);
var env = cljs.core.nth.call(null,vec__52102,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),bes,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null)], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?new cljs.core.Keyword(null,"loop","loop",-395552849):new cljs.core.Keyword(null,"let","let",-1282412701));
var children = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),encl_env,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,false);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,true);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__52106,_,___$1){
var vec__52107 = p__52106;
var seq__52108 = cljs.core.seq.call(null,vec__52107);
var first__52109 = cljs.core.first.call(null,seq__52108);
var seq__52108__$1 = cljs.core.next.call(null,seq__52108);
var ___$2 = first__52109;
var exprs = seq__52108__$1;
var form = vec__52107;
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first.call(null,cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_52110 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52110,context,frame,vec__52107,seq__52108,first__52109,seq__52108__$1,___$2,exprs,form){
return (function (p1__52105_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),p1__52105_SHARP_);
});})(_STAR_recur_frames_STAR_52110,context,frame,vec__52107,seq__52108,first__52109,seq__52108__$1,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52110;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.call(null,env,"Can't recur here");
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs__$1),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.call(null,env,"recur argument count mismatch");
}

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(frame),true);

return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs__$1,new cljs.core.Keyword(null,"children","children",-940561982),exprs__$1);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__52111,___$1,___$2){
var vec__52112 = p__52111;
var ___$3 = cljs.core.nth.call(null,vec__52112,(0),null);
var x = cljs.core.nth.call(null,vec__52112,(1),null);
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true),x);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__52116,___$1,___$2){
var vec__52117 = p__52116;
var seq__52118 = cljs.core.seq.call(null,vec__52117);
var first__52119 = cljs.core.first.call(null,seq__52118);
var seq__52118__$1 = cljs.core.next.call(null,seq__52118);
var ___$3 = first__52119;
var first__52119__$1 = cljs.core.first.call(null,seq__52118__$1);
var seq__52118__$2 = cljs.core.next.call(null,seq__52118__$1);
var ctor = first__52119__$1;
var args = seq__52118__$2;
var form = vec__52117;
if((ctor instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"First arg to new must be a symbol");
}

var _STAR_recur_frames_STAR_52120 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ctorexpr = cljs.analyzer.analyze.call(null,enve,ctor);
var ctor_var = cljs.analyzer.resolve_existing_var.call(null,env,ctor);
var record_args = (cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
} else {
return and__24739__auto__;
}
})())?cljs.core.repeat.call(null,(3),cljs.analyzer.analyze.call(null,enve,null)):null);
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_52120,vec__52117,seq__52118,first__52119,seq__52118__$1,___$3,first__52119__$1,seq__52118__$2,ctor,args,form){
return (function (p1__52115_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__52115_SHARP_);
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_52120,vec__52117,seq__52118,first__52119,seq__52118__$1,___$3,first__52119__$1,seq__52118__$2,ctor,args,form))
,args)),record_args);
var known_num_fields = new cljs.core.Keyword(null,"num-fields","num-fields",1529154024).cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count.call(null,args);
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
if(and__24739__auto__){
var and__24739__auto____$1 = known_num_fields;
if(cljs.core.truth_(and__24739__auto____$1)){
return cljs.core.not_EQ_.call(null,known_num_fields,argc);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctorexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__24751__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52120;
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__52121,___$1,___$2){
var vec__52122 = p__52121;
var ___$3 = cljs.core.nth.call(null,vec__52122,(0),null);
var target = cljs.core.nth.call(null,vec__52122,(1),null);
var val = cljs.core.nth.call(null,vec__52122,(2),null);
var alt = cljs.core.nth.call(null,vec__52122,(3),null);
var form = vec__52122;
var vec__52125 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = target;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__52125,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__52125,(1),null);
var _STAR_recur_frames_STAR_52128 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = (((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null))) && ((val__$1 === true) || (val__$1 === false)))?(function (){
cljs.core._STAR_unchecked_if_STAR_ = val__$1;

return new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250);
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),target__$1)))){
throw cljs.analyzer.error.call(null,env,"Can't set! a constant");
} else {
}

var local_52129 = target__$1.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_((function (){var or__24751__auto__ = (local_52129 == null);
if(or__24751__auto__){
return or__24751__auto__;
} else {
var and__24739__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_52129);
if(cljs.core.truth_(and__24739__auto__)){
var or__24751__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_52129);
if(cljs.core.truth_(or__24751__auto____$1)){
return or__24751__auto____$1;
} else {
var or__24751__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_52129);
if(cljs.core.truth_(or__24751__auto____$2)){
return or__24751__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_52129);
}
}
} else {
return and__24739__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,"Can't set! local var or non-mutable field");
}

return cljs.analyzer.analyze_symbol.call(null,enve,target__$1);
})()
:((cljs.core.seq_QMARK_.call(null,target__$1))?(function (){var targetexpr = cljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(targetexpr))){
return targetexpr;
} else {
return null;
}
})():null)
));
var valexpr = cljs.analyzer.analyze.call(null,enve,val__$1);
if(cljs.core.truth_(targetexpr)){
} else {
throw cljs.analyzer.error.call(null,env,"set! target must be a field or a symbol naming a var");
}

if(cljs.core._EQ_.call(null,targetexpr,new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"val","val",128701612),valexpr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52128;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? dep)"));
}

var js_index = new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var temp__4655__auto__ = cljs.core.find.call(null,js_index,cljs.core.name.call(null,dep));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__52135 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__52135,(0),null);
var map__52138 = cljs.core.nth.call(null,vec__52135,(1),null);
var map__52138__$1 = ((((!((map__52138 == null)))?((((map__52138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52138):map__52138);
var foreign = cljs.core.get.call(null,map__52138__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
return foreign;
} else {
return false;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var args52141 = [];
var len__25826__auto___52149 = arguments.length;
var i__25827__auto___52150 = (0);
while(true){
if((i__25827__auto___52150 < len__25826__auto___52149)){
args52141.push((arguments[i__25827__auto___52150]));

var G__52151 = (i__25827__auto___52150 + (1));
i__25827__auto___52150 = G__52151;
continue;
} else {
}
break;
}

var G__52143 = args52141.length;
switch (G__52143) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52141.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.call(null,lib,deps,env,null);
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var _STAR_cljs_dep_set_STAR_52144 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_52144,compiler){
return (function (p1__52140_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__52140_SHARP_));
});})(_STAR_cljs_dep_set_STAR_52144,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected, "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__52140#] (not (contains? *cljs-dep-set* p1__52140#))) deps)")].join('')));
}

var seq__52145 = cljs.core.seq.call(null,deps);
var chunk__52146 = null;
var count__52147 = (0);
var i__52148 = (0);
while(true){
if((i__52148 < count__52147)){
var dep = cljs.core._nth.call(null,chunk__52146,i__52148);
if(cljs.core.truth_((function (){var or__24751__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}

var G__52153 = seq__52145;
var G__52154 = chunk__52146;
var G__52155 = count__52147;
var G__52156 = (i__52148 + (1));
seq__52145 = G__52153;
chunk__52146 = G__52154;
count__52147 = G__52155;
i__52148 = G__52156;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52145);
if(temp__4657__auto__){
var seq__52145__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52145__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__52145__$1);
var G__52157 = cljs.core.chunk_rest.call(null,seq__52145__$1);
var G__52158 = c__25562__auto__;
var G__52159 = cljs.core.count.call(null,c__25562__auto__);
var G__52160 = (0);
seq__52145 = G__52157;
chunk__52146 = G__52158;
count__52147 = G__52159;
i__52148 = G__52160;
continue;
} else {
var dep = cljs.core.first.call(null,seq__52145__$1);
if(cljs.core.truth_((function (){var or__24751__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep));
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}

var G__52161 = cljs.core.next.call(null,seq__52145__$1);
var G__52162 = null;
var G__52163 = (0);
var G__52164 = (0);
seq__52145 = G__52161;
chunk__52146 = G__52162;
count__52147 = G__52163;
i__52148 = G__52164;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_52144;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name.call(null,lib)], null));
return (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && (!(cljs.core._EQ_.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452)))) && (cljs.core.not.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916))));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym) == null));
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__52169){
var vec__52170 = p__52169;
var sym = cljs.core.nth.call(null,vec__52170,(0),null);
var lib = cljs.core.nth.call(null,vec__52170,(1),null);
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv);
});})(cenv))
,uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__52177){
var vec__52178 = p__52177;
var _ = cljs.core.nth.call(null,vec__52178,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__52178,(1),null);
return cljs.analyzer.missing_rename_QMARK_.call(null,qualified_sym,cenv);
});})(cenv))
,renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__52185){
var vec__52186 = p__52185;
var sym = cljs.core.nth.call(null,vec__52186,(0),null);
var lib = cljs.core.nth.call(null,vec__52186,(1),null);
return cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym);
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cenv){
return (function (p__52193){
var vec__52194 = p__52193;
var sym = cljs.core.nth.call(null,vec__52194,(0),null);
var lib = cljs.core.nth.call(null,vec__52194,(1),null);
return cljs.core.not.call(null,cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym));
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__52201){
var vec__52202 = p__52201;
var _ = cljs.core.nth.call(null,vec__52202,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__52202,(1),null);
return cljs.core.not.call(null,cljs.analyzer.missing_rename_macro_QMARK_.call(null,qualified_sym));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var seq__52215 = cljs.core.seq.call(null,uses);
var chunk__52216 = null;
var count__52217 = (0);
var i__52218 = (0);
while(true){
if((i__52218 < count__52217)){
var vec__52219 = cljs.core._nth.call(null,chunk__52216,i__52218);
var sym = cljs.core.nth.call(null,vec__52219,(0),null);
var lib = cljs.core.nth.call(null,vec__52219,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}

var G__52225 = seq__52215;
var G__52226 = chunk__52216;
var G__52227 = count__52217;
var G__52228 = (i__52218 + (1));
seq__52215 = G__52225;
chunk__52216 = G__52226;
count__52217 = G__52227;
i__52218 = G__52228;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52215);
if(temp__4657__auto__){
var seq__52215__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52215__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__52215__$1);
var G__52229 = cljs.core.chunk_rest.call(null,seq__52215__$1);
var G__52230 = c__25562__auto__;
var G__52231 = cljs.core.count.call(null,c__25562__auto__);
var G__52232 = (0);
seq__52215 = G__52229;
chunk__52216 = G__52230;
count__52217 = G__52231;
i__52218 = G__52232;
continue;
} else {
var vec__52222 = cljs.core.first.call(null,seq__52215__$1);
var sym = cljs.core.nth.call(null,vec__52222,(0),null);
var lib = cljs.core.nth.call(null,vec__52222,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}

var G__52233 = cljs.core.next.call(null,seq__52215__$1);
var G__52234 = null;
var G__52235 = (0);
var G__52236 = (0);
seq__52215 = G__52233;
chunk__52216 = G__52234;
count__52217 = G__52235;
i__52218 = G__52236;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
var args52237 = [];
var len__25826__auto___52250 = arguments.length;
var i__25827__auto___52251 = (0);
while(true){
if((i__25827__auto___52251 < len__25826__auto___52250)){
args52237.push((arguments[i__25827__auto___52251]));

var G__52252 = (i__25827__auto___52251 + (1));
i__25827__auto___52251 = G__52252;
continue;
} else {
}
break;
}

var G__52239 = args52237.length;
switch (G__52239) {
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52237.length)].join('')));

}
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.call(null,use_macros,null,env);
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var seq__52240_52254 = cljs.core.seq.call(null,use_macros);
var chunk__52241_52255 = null;
var count__52242_52256 = (0);
var i__52243_52257 = (0);
while(true){
if((i__52243_52257 < count__52242_52256)){
var vec__52244_52258 = cljs.core._nth.call(null,chunk__52241_52255,i__52243_52257);
var sym_52259 = cljs.core.nth.call(null,vec__52244_52258,(0),null);
var lib_52260 = cljs.core.nth.call(null,vec__52244_52258,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_52260,sym_52259))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_52260,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_52259], null)));
} else {
}

var G__52261 = seq__52240_52254;
var G__52262 = chunk__52241_52255;
var G__52263 = count__52242_52256;
var G__52264 = (i__52243_52257 + (1));
seq__52240_52254 = G__52261;
chunk__52241_52255 = G__52262;
count__52242_52256 = G__52263;
i__52243_52257 = G__52264;
continue;
} else {
var temp__4657__auto___52265 = cljs.core.seq.call(null,seq__52240_52254);
if(temp__4657__auto___52265){
var seq__52240_52266__$1 = temp__4657__auto___52265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52240_52266__$1)){
var c__25562__auto___52267 = cljs.core.chunk_first.call(null,seq__52240_52266__$1);
var G__52268 = cljs.core.chunk_rest.call(null,seq__52240_52266__$1);
var G__52269 = c__25562__auto___52267;
var G__52270 = cljs.core.count.call(null,c__25562__auto___52267);
var G__52271 = (0);
seq__52240_52254 = G__52268;
chunk__52241_52255 = G__52269;
count__52242_52256 = G__52270;
i__52243_52257 = G__52271;
continue;
} else {
var vec__52247_52272 = cljs.core.first.call(null,seq__52240_52266__$1);
var sym_52273 = cljs.core.nth.call(null,vec__52247_52272,(0),null);
var lib_52274 = cljs.core.nth.call(null,vec__52247_52272,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_52274,sym_52273))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_52274,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_52273], null)));
} else {
}

var G__52275 = cljs.core.next.call(null,seq__52240_52266__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__52240_52254 = G__52275;
chunk__52241_52255 = G__52276;
count__52242_52256 = G__52277;
i__52243_52257 = G__52278;
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses.call(null,cljs.analyzer.missing_use_macros.call(null,missing_uses,env),env);

return cljs.analyzer.inferred_use_macros.call(null,missing_uses,env);
});

cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3;

cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__52282,env){
var map__52285 = p__52282;
var map__52285__$1 = ((((!((map__52285 == null)))?((((map__52285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52285):map__52285);
var ast = map__52285__$1;
var name = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uses = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var missing_uses = (cljs.core.truth_((function (){var and__24739__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__24739__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,uses,cljs.core.keys.call(null,missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__52285,map__52285__$1,ast,name,uses,use_macros){
return (function (p1__52279_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__52279_SHARP_,cljs.core.keys.call(null,missing_uses));
});})(missing_uses,maybe_macros,map__52285,map__52285__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__52285,map__52285__$1,ast,name,uses,use_macros){
return (function (p1__52280_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__52280_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
});})(missing_uses,maybe_macros,remove_missing_uses,map__52285,map__52285__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__52285,map__52285__$1,ast,name,uses,use_macros){
return (function (p1__52281_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__52281_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.merge,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__52285,map__52285__$1,ast,name,uses,use_macros))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__52290,env){
var map__52293 = p__52290;
var map__52293__$1 = ((((!((map__52293 == null)))?((((map__52293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52293):map__52293);
var ast = map__52293__$1;
var name = cljs.core.get.call(null,map__52293__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var renames = cljs.core.get.call(null,map__52293__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var missing_renames = (cljs.core.truth_((function (){var and__24739__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.seq.call(null,renames);
} else {
return and__24739__auto__;
}
})())?cljs.analyzer.missing_renames.call(null,renames,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,renames,cljs.core.keys.call(null,missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros.call(null,missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__52293,map__52293__$1,ast,name,renames){
return (function (p1__52287_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__52287_SHARP_,cljs.core.keys.call(null,missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__52293,map__52293__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__52293,map__52293__$1,ast,name,renames){
return (function (p1__52288_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__52288_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__52293,map__52293__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__52293,map__52293__$1,ast,name,renames){
return (function (p1__52289_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__52289_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),cljs.core.merge,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__52293,map__52293__$1,ast,name,renames))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str(msg),cljs.core.str("; offending spec: "),cljs.core.str(cljs.core.pr_str.call(null,spec))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_.call(null,spec)){
if((cljs.core.first.call(null,spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),cljs.core.next.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies.call(null,cljs.core.next.call(null,spec));
return ((fs.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(0)) <= (1))) && ((fs.call(null,new cljs.core.Keyword(null,"refer","refer",-964295553),(0)) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.call(null,(function (s,p__52300){
var vec__52301 = p__52300;
var seq__52302 = cljs.core.seq.call(null,vec__52301);
var first__52303 = cljs.core.first.call(null,seq__52302);
var seq__52302__$1 = cljs.core.next.call(null,seq__52302);
var k = first__52303;
var filters = seq__52302__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440))){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.call(null,env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null);
var xs = (function (){var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null);
var err = !(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,filters)));
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if(!((fs == null))){
var kw = cljs.core.first.call(null,fs);
if(cljs.core.truth_(valid_kws.call(null,kw))){
var refs = cljs.core.second.call(null,fs);
if(!(((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__52301,seq__52302,first__52303,seq__52302__$1,k,filters){
return (function (p1__52295_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__52295_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__52301,seq__52302,first__52303,seq__52302__$1,k,filters))
,refs))))){
var G__52304 = fs;
var G__52305 = ret;
var G__52306 = true;
fs = G__52304;
ret = G__52305;
err = G__52306;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
var G__52307 = cljs.core.nnext.call(null,fs);
var G__52308 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.into,refs);
var G__52309 = false;
fs = G__52307;
ret = G__52308;
err = G__52309;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))){
var G__52310 = cljs.core.nnext.call(null,fs);
var G__52311 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),cljs.core.merge,refs);
var G__52312 = false;
fs = G__52310;
ret = G__52311;
err = G__52312;
continue;
} else {
return null;
}
}
}
} else {
var G__52313 = fs;
var G__52314 = ret;
var G__52315 = true;
fs = G__52313;
ret = G__52314;
err = G__52315;
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.call(null,cljs.core.into,s,xs);
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null),args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__52317){
var vec__52321 = p__52317;
var seq__52322 = cljs.core.seq.call(null,vec__52321);
var first__52323 = cljs.core.first.call(null,seq__52322);
var seq__52322__$1 = cljs.core.next.call(null,seq__52322);
var lib = first__52323;
var filters = seq__52322__$1;
var spec = vec__52321;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if(!((fs == null))){
var kw = cljs.core.first.call(null,fs);
var only_QMARK_ = cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"only","only",1907811652));
if((only_QMARK_) || (cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613)))){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw)], true),ret))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second.call(null,fs);
if(!(((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__52321,seq__52322,first__52323,seq__52322__$1,lib,filters,spec){
return (function (p1__52316_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__52316_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__52321,seq__52322,first__52323,seq__52322__$1,lib,filters,spec))
,refs))))){
var G__52324 = fs;
var G__52325 = ret;
var G__52326 = true;
fs = G__52324;
ret = G__52325;
err = G__52326;
continue;
} else {
var G__52327 = cljs.core.nnext.call(null,fs);
var G__52328 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw),refs], null));
var G__52329 = false;
fs = G__52327;
ret = G__52328;
err = G__52329;
continue;
}
}
} else {
var G__52330 = fs;
var G__52331 = ret;
var G__52332 = true;
fs = G__52330;
ret = G__52331;
err = G__52332;
continue;
}
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),ret))){
return ret;
} else {
var G__52333 = fs;
var G__52334 = ret;
var G__52335 = true;
fs = G__52333;
ret = G__52334;
err = G__52335;
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__52360 = env;
var G__52361 = macros_QMARK_;
var G__52362 = deps;
var G__52363 = aliases;
var G__52364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__52360;
macros_QMARK_ = G__52361;
deps = G__52362;
aliases = G__52363;
spec = G__52364;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec.call(null,env,macros_QMARK_,spec);

var vec__52348 = spec;
var seq__52349 = cljs.core.seq.call(null,vec__52348);
var first__52350 = cljs.core.first.call(null,seq__52349);
var seq__52349__$1 = cljs.core.next.call(null,seq__52349);
var lib = first__52350;
var opts = seq__52349__$1;
var lib__$1 = (function (){var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,lib)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var js_module_name = temp__4655__auto__;
return cljs.core.symbol.call(null,js_module_name);
} else {
return lib;
}
})();
var map__52351 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__52351__$1 = ((((!((map__52351 == null)))?((((map__52351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52351):map__52351);
var alias = cljs.core.get.call(null,map__52351__$1,new cljs.core.Keyword(null,"as","as",1148689641),lib__$1);
var referred = cljs.core.get.call(null,map__52351__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var renamed = cljs.core.get.call(null,map__52351__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__52352 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.Keyword(null,"rename","rename",1508157613)], null));
var rk = cljs.core.nth.call(null,vec__52352,(0),null);
var uk = cljs.core.nth.call(null,vec__52352,(1),null);
var renk = cljs.core.nth.call(null,vec__52352,(2),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(cljs.core.truth_(alias)){
var alias_type_52365 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__52366 = alias_type_52365.call(null,cljs.core.deref.call(null,aliases)).call(null,alias);
if((!((lib_SINGLEQUOTE__52366 == null))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__52366))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_52365], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null));
} else {
}

if(((cljs.core.sequential_QMARK_.call(null,referred)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.call(null,(cljs.core.truth_(alias)?cljs.core.PersistentArrayMap.fromArray([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([alias,lib__$1], true, false),cljs.core.PersistentArrayMap.fromArray([lib__$1,lib__$1], true, false))], true, false):null),((referred_without_renamed)?cljs.core.PersistentArrayMap.fromArray([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))], true, false):null),(cljs.core.truth_(renamed)?cljs.core.PersistentArrayMap.fromArray([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__52348,seq__52349,first__52350,seq__52349__$1,lib,opts,lib__$1,map__52351,map__52351__$1,alias,referred,renamed,referred_without_renamed,vec__52352,rk,uk,renk){
return (function (m,p__52356){
var vec__52357 = p__52356;
var original = cljs.core.nth.call(null,vec__52357,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__52357,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([original], true),referred))){
} else {
throw cljs.analyzer.error.call(null,env,[cljs.core.str("Renamed symbol "),cljs.core.str(original),cljs.core.str(" not referred")].join(''));
}

return cljs.core.assoc.call(null,m,renamed__$1,cljs.core.symbol.call(null,[cljs.core.str(lib__$1)].join(''),[cljs.core.str(original)].join('')));
});})(env,macros_QMARK_,deps,aliases,spec,vec__52348,seq__52349,first__52350,seq__52349__$1,lib,opts,lib__$1,map__52351,map__52351__$1,alias,referred,renamed,referred_without_renamed,vec__52352,rk,uk,renk))
,cljs.core.PersistentArrayMap.EMPTY,renamed)], true, false):null));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,spec) == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__52367_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__52367_SHARP_,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.first.call(null,spec)),cljs.core.str("."),cljs.core.str(p1__52367_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):cljs.core.PersistentArrayMap.fromArray([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(spec)].join(''),/\./))),spec], true, false));
var seq__52378_52388 = cljs.core.seq.call(null,import_map);
var chunk__52379_52389 = null;
var count__52380_52390 = (0);
var i__52381_52391 = (0);
while(true){
if((i__52381_52391 < count__52380_52390)){
var vec__52382_52392 = cljs.core._nth.call(null,chunk__52379_52389,i__52381_52391);
var __52393 = cljs.core.nth.call(null,vec__52382_52392,(0),null);
var spec_52394__$1 = cljs.core.nth.call(null,vec__52382_52392,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_52394__$1);

var G__52395 = seq__52378_52388;
var G__52396 = chunk__52379_52389;
var G__52397 = count__52380_52390;
var G__52398 = (i__52381_52391 + (1));
seq__52378_52388 = G__52395;
chunk__52379_52389 = G__52396;
count__52380_52390 = G__52397;
i__52381_52391 = G__52398;
continue;
} else {
var temp__4657__auto___52399 = cljs.core.seq.call(null,seq__52378_52388);
if(temp__4657__auto___52399){
var seq__52378_52400__$1 = temp__4657__auto___52399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52378_52400__$1)){
var c__25562__auto___52401 = cljs.core.chunk_first.call(null,seq__52378_52400__$1);
var G__52402 = cljs.core.chunk_rest.call(null,seq__52378_52400__$1);
var G__52403 = c__25562__auto___52401;
var G__52404 = cljs.core.count.call(null,c__25562__auto___52401);
var G__52405 = (0);
seq__52378_52388 = G__52402;
chunk__52379_52389 = G__52403;
count__52380_52390 = G__52404;
i__52381_52391 = G__52405;
continue;
} else {
var vec__52385_52406 = cljs.core.first.call(null,seq__52378_52400__$1);
var __52407 = cljs.core.nth.call(null,vec__52385_52406,(0),null);
var spec_52408__$1 = cljs.core.nth.call(null,vec__52385_52406,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_52408__$1);

var G__52409 = cljs.core.next.call(null,seq__52378_52400__$1);
var G__52410 = null;
var G__52411 = (0);
var G__52412 = (0);
seq__52378_52388 = G__52409;
chunk__52379_52389 = G__52410;
count__52380_52390 = G__52411;
i__52381_52391 = G__52412;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import","import",-1399500709),import_map,new cljs.core.Keyword(null,"require","require",-468001333),import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.core.truth_(cljs.analyzer._STAR_macro_infer_STAR_)){
var ns = ((cljs.core.sequential_QMARK_.call(null,form))?cljs.core.first.call(null,form):form);
var map__52415 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__52415__$1 = ((((!((map__52415 == null)))?((((map__52415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52415):map__52415);
var use_macros = cljs.core.get.call(null,map__52415__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__52415__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__24751__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals.call(null,require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./);
if(cljs.core._EQ_.call(null,"clojure",cljs.core.first.call(null,segs))){
return cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.cons.call(null,"cljs",cljs.core.next.call(null,segs))));
} else {
return sym;
}
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__52430 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__52431){
var vec__52432 = p__52431;
var seq__52433 = cljs.core.seq.call(null,vec__52432);
var first__52434 = cljs.core.first.call(null,seq__52433);
var seq__52433__$1 = cljs.core.next.call(null,seq__52433);
var k = first__52434;
var specs = seq__52433__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__52430__$1 = ((((!((map__52430 == null)))?((((map__52430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52430):map__52430);
var indexed = map__52430__$1;
var require = cljs.core.get.call(null,map__52430__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = ((function (map__52430,map__52430__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not.call(null,(function (){var and__24739__auto__ = cljs.core.sequential_QMARK_.call(null,spec);
if(and__24739__auto__){
return cljs.core.some.call(null,pred,spec);
} else {
return and__24739__auto__;
}
})())){
return spec;
} else {
var vec__52436 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__52436,(0),null);
var r = cljs.core.nth.call(null,vec__52436,(1),null);
var G__52442 = pred;
var G__52443 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__52442;
spec = G__52443;
continue;
}
break;
}
});})(map__52430,map__52430__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.core.map.call(null,((function (map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953))){
return new cljs.core.Keyword(null,"refer","refer",-964295553);
} else {
return x;
}
});})(map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__52417_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__52417_SHARP_);
});})(map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.call(null,((function (map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
return replace_refer_macros.call(null,remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null], null), null),x))));
} else {
return x;
}
});})(map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.call(null,((function (map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__24751__auto__ = (function (){var and__24739__auto__ = cljs.core.sequential_QMARK_.call(null,x);
if(and__24739__auto__){
return cljs.core.some.call(null,sugar_keys,x);
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = reload_spec_QMARK_.call(null,x);
if(cljs.core.truth_(or__24751__auto____$1)){
return or__24751__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_.call(null,x);
}
}
});})(map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.call(null,remove_from_spec,sugar_keys);
var temp__4655__auto__ = cljs.core.seq.call(null,to_macro_specs.call(null,require));
if(temp__4655__auto__){
var require_specs = temp__4655__auto__;
return cljs.core.map.call(null,((function (require_specs,temp__4655__auto__,map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
var vec__52439 = x;
var k = cljs.core.nth.call(null,vec__52439,(0),null);
var v = cljs.core.nth.call(null,vec__52439,(1),null);
return cljs.core.cons.call(null,k,cljs.core.map.call(null,remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__4655__auto__,map__52430,map__52430__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.call(null,indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
} else {
return args;
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.call(null,(function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.butlast.call(null,xs))),cljs.core.symbol.call(null,cljs.core.last.call(null,xs))], null);
}),cljs.core.drop.call(null,(2),cljs.core.reductions.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__52454 = cljs.core.seq.call(null,to_check);
var chunk__52455 = null;
var count__52456 = (0);
var i__52457 = (0);
while(true){
if((i__52457 < count__52456)){
var vec__52458 = cljs.core._nth.call(null,chunk__52455,i__52457);
var clash_ns = cljs.core.nth.call(null,vec__52458,(0),null);
var name = cljs.core.nth.call(null,vec__52458,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,[cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__52464 = seq__52454;
var G__52465 = chunk__52455;
var G__52466 = count__52456;
var G__52467 = (i__52457 + (1));
seq__52454 = G__52464;
chunk__52455 = G__52465;
count__52456 = G__52466;
i__52457 = G__52467;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52454);
if(temp__4657__auto__){
var seq__52454__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52454__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__52454__$1);
var G__52468 = cljs.core.chunk_rest.call(null,seq__52454__$1);
var G__52469 = c__25562__auto__;
var G__52470 = cljs.core.count.call(null,c__25562__auto__);
var G__52471 = (0);
seq__52454 = G__52468;
chunk__52455 = G__52469;
count__52456 = G__52470;
i__52457 = G__52471;
continue;
} else {
var vec__52461 = cljs.core.first.call(null,seq__52454__$1);
var clash_ns = cljs.core.nth.call(null,vec__52461,(0),null);
var name = cljs.core.nth.call(null,vec__52461,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,[cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__52472 = cljs.core.next.call(null,seq__52454__$1);
var G__52473 = null;
var G__52474 = (0);
var G__52475 = (0);
seq__52454 = G__52472;
chunk__52455 = G__52473;
count__52456 = G__52474;
i__52457 = G__52475;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str(name)].join('');
if(cljs.core.not.call(null,goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.call(null,[cljs.core.str(name_str),cljs.core.str("$macros")].join(''));
} else {
return name;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__52478,___$1,opts){
var vec__52479 = p__52478;
var seq__52480 = cljs.core.seq.call(null,vec__52479);
var first__52481 = cljs.core.first.call(null,seq__52480);
var seq__52480__$1 = cljs.core.next.call(null,seq__52480);
var ___$2 = first__52481;
var first__52481__$1 = cljs.core.first.call(null,seq__52480__$1);
var seq__52480__$2 = cljs.core.next.call(null,seq__52480__$1);
var name = first__52481__$1;
var args = seq__52480__$2;
var form = vec__52479;
if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__52482 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__52482);
} else {
return G__52482;
}
})();
var segments_52500 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_52500))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_52500))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_52500);

var docstring = ((typeof cljs.core.first.call(null,args) === 'string')?cljs.core.first.call(null,args):null);
var mdocstr = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name__$1));
var args__$1 = (cljs.core.truth_(docstring)?cljs.core.next.call(null,args):args);
var metadata = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1)))?cljs.core.first.call(null,args__$1):null);
var form_meta = cljs.core.meta.call(null,form);
var args__$2 = cljs.analyzer.desugar_ns_specs.call(null,(cljs.core.truth_(metadata)?cljs.core.next.call(null,args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.call(null,name__$1,cljs.core.merge,metadata);
var map__52483 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__52483__$1 = ((((!((map__52483 == null)))?((((map__52483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52483):map__52483);
var excludes = cljs.core.get.call(null,map__52483__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__52483__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (m,p__52486){
var vec__52487 = p__52486;
var original = cljs.core.nth.call(null,vec__52487,(0),null);
var renamed = cljs.core.nth.call(null,vec__52487,(1),null);
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(original)].join('')));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null));
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var map__52484 = cljs.core.reduce.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (m,p__52490){
var vec__52491 = p__52490;
var seq__52492 = cljs.core.seq.call(null,vec__52491);
var first__52493 = cljs.core.first.call(null,seq__52492);
var seq__52492__$1 = cljs.core.next.call(null,seq__52492);
var k = first__52493;
var libs = seq__52492__$1;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,"Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported");
}

if(cljs.core.truth_(cljs.core.deref.call(null,valid_forms).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,[cljs.core.str("Only one "),cljs.core.str(k),cljs.core.str(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.call(null,valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

var temp__4657__auto___52501 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__52491,seq__52492,first__52493,seq__52492__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (p1__52476_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__52476_SHARP_));
});})(vec__52491,seq__52492,first__52493,seq__52492__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
,libs));
if(temp__4657__auto___52501){
var xs_52502 = temp__4657__auto___52501;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_52502),cljs.core.map.call(null,((function (xs_52502,temp__4657__auto___52501,vec__52491,seq__52492,first__52493,seq__52492__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (p1__52477_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__52477_SHARP_));
});})(xs_52502,temp__4657__auto___52501,vec__52491,seq__52492,first__52493,seq__52492__$1,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
,xs_52502)));
} else {
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (p__52494){
var vec__52495 = p__52494;
var r = cljs.core.nth.call(null,vec__52495,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
,args__$2));
var map__52484__$1 = ((((!((map__52484 == null)))?((((map__52484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52484):map__52484);
var params = map__52484__$1;
var uses = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"doc","doc",1913296891)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros,excludes,name__$2,imports,requires,uses,require_macros,(function (){var or__24751__auto__ = docstring;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return mdocstr;
}
})()]);
var ns_info__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(form_meta))?(function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null));
if((cljs.core.count.call(null,ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null);
return cljs.core.merge.call(null,ns_info_SINGLEQUOTE_,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.select_keys.call(null,ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys.call(null,ns_info,merge_keys)));
} else {
return ns_info;
}
})():ns_info);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null),cljs.core.merge,ns_info__$1);

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.deref.call(null,deps),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__52499 = ns_info__$1;
var G__52499__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__52499,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__52499,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__52484,map__52484__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.fromArray([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true], true, false));
});})(G__52499,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__52484,map__52484__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
):G__52499);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__52499__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__52499,G__52499__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__52484,map__52484__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form){
return (function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.fromArray([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true], true, false));
});})(G__52499,G__52499__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__52483,map__52483__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__52484,map__52484__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__52479,seq__52480,first__52481,seq__52480__$1,___$2,first__52481__$1,seq__52480__$2,name,args,form))
);
} else {
return G__52499__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__52503){
var vec__52507 = p__52503;
var _ = cljs.core.nth.call(null,vec__52507,(0),null);
var tsym = cljs.core.nth.call(null,vec__52507,(1),null);
var fields = cljs.core.nth.call(null,vec__52507,(2),null);
var pmasks = cljs.core.nth.call(null,vec__52507,(3),null);
var body = cljs.core.nth.call(null,vec__52507,(4),null);
var form = vec__52507;
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.call(null,((function (t,vec__52507,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.call(null,m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[fld,true,cljs.analyzer.get_col.call(null,fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.analyzer.get_line.call(null,fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),m.call(null,fld)]));
});})(t,vec__52507,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op))?cljs.core.concat.call(null,fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null)):fields));
var protocols = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),((function (t,locals,protocols,vec__52507,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.call(null,(function (){var or__24751__auto__ = m;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),t,new cljs.core.Keyword(null,"type","type",1174270348),true,new cljs.core.Keyword(null,"num-fields","num-fields",1529154024),cljs.core.count.call(null,fields),new cljs.core.Keyword(null,"record","record",-779106859),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op));
return cljs.core.merge.call(null,m__$1,cljs.core.dissoc.call(null,cljs.core.meta.call(null,tsym),new cljs.core.Keyword(null,"protocols","protocols",-5615896)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols], null),cljs.analyzer.source_info.call(null,tsym,env));
});})(t,locals,protocols,vec__52507,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698),pmasks,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.disj.call(null,protocols,new cljs.core.Symbol("cljs.core","Object","cljs.core/Object",-345545431,null)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),locals),body)], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),env,form);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__52510_SHARP_){
return cljs.core.boolean$.call(null,(function (){var and__24739__auto__ = (p1__52510_SHARP_ instanceof cljs.core.Symbol);
if(and__24739__auto__){
return cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__52510_SHARP_));
} else {
return and__24739__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__52511){
var vec__52515 = p__52511;
var target = cljs.core.nth.call(null,vec__52515,(0),null);
var member = cljs.core.nth.call(null,vec__52515,(1),null);
var args = cljs.core.nth.call(null,vec__52515,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642):new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
),(cljs.core.truth_(cljs.analyzer.property_symbol_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886):(((member instanceof cljs.core.Symbol))?new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902):((cljs.core.seq_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923):new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642)
))),(((args == null))?cljs.core.List.EMPTY:new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__25676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","build-dot-form"),((function (method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__){
return (function (p1__52518_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__52518_SHARP_);
});})(method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25680__auto__,method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__52519){
var vec__52520 = p__52519;
var target = cljs.core.nth.call(null,vec__52520,(0),null);
var prop = cljs.core.nth.call(null,vec__52520,(1),null);
var _ = cljs.core.nth.call(null,vec__52520,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1)))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__52523){
var vec__52524 = p__52523;
var target = cljs.core.nth.call(null,vec__52524,(0),null);
var prop = cljs.core.nth.call(null,vec__52524,(1),null);
var args = cljs.core.nth.call(null,vec__52524,(2),null);
throw (new Error([cljs.core.str("Cannot provide arguments "),cljs.core.str(args),cljs.core.str(" on property access "),cljs.core.str(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),meth,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first.call(null,meth),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
});
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__52527){
var vec__52528 = p__52527;
var target = cljs.core.nth.call(null,vec__52528,(0),null);
var meth = cljs.core.nth.call(null,vec__52528,(1),null);
var args = cljs.core.nth.call(null,vec__52528,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__52531){
var vec__52532 = p__52531;
var target = cljs.core.nth.call(null,vec__52532,(0),null);
var meth = cljs.core.nth.call(null,vec__52532,(1),null);
var args = cljs.core.nth.call(null,vec__52532,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__52535){
var vec__52536 = p__52535;
var target = cljs.core.nth.call(null,vec__52536,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__52536,(1),null);
var _ = cljs.core.nth.call(null,vec__52536,(2),null);
return cljs.analyzer.build_method_call.call(null,target,cljs.core.first.call(null,meth_expr),cljs.core.rest.call(null,meth_expr));
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dot_form){
throw (new Error([cljs.core.str("Unknown dot form of "),cljs.core.str(cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,".",".",1975675962,null),dot_form)),cljs.core.str(" with classification "),cljs.core.str(cljs.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__52543 = cljs.analyzer.build_dot_form.call(null,v);
var map__52543__$1 = ((((!((map__52543 == null)))?((((map__52543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52543):map__52543);
var dot_action = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = cljs.analyzer.analyze.call(null,enve,target__$1);
var form_meta = cljs.core.meta.call(null,form);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
var G__52545 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__52545) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"field","field",-1302436500),field__$1,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.call(null,((function (G__52545,v,map__52543,map__52543__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag){
return (function (p1__52539_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__52539_SHARP_);
});})(G__52545,v,map__52543,map__52543__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag))
,args);
var children = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dot_action)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__52547,___$1,___$2){
var vec__52548 = p__52547;
var seq__52549 = cljs.core.seq.call(null,vec__52548);
var first__52550 = cljs.core.first.call(null,seq__52549);
var seq__52549__$1 = cljs.core.next.call(null,seq__52549);
var ___$3 = first__52550;
var first__52550__$1 = cljs.core.first.call(null,seq__52549__$1);
var seq__52549__$2 = cljs.core.next.call(null,seq__52549__$1);
var target = first__52550__$1;
var vec__52551 = seq__52549__$2;
var seq__52552 = cljs.core.seq.call(null,vec__52551);
var first__52553 = cljs.core.first.call(null,seq__52552);
var seq__52552__$1 = cljs.core.next.call(null,seq__52552);
var field = first__52553;
var member_PLUS_ = seq__52552__$1;
var form = vec__52548;
var _STAR_recur_frames_STAR_52554 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52554;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta.call(null,form);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if(!((tag == null))){
return tag;
} else {
if(new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return null;
}
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__25585__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
} else {
var end = s.indexOf("}",idx);
var inner = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.subs.call(null,s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.core.cons.call(null,inner,cljs$analyzer$js_star_interp.call(null,env,cljs.core.subs.call(null,s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__25585__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs$analyzer$js_star_seg.call(null,cljs.core.subs.call(null,s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"long","long",1469079434,null),null,new cljs.core.Symbol(null,"double","double",-1769548886,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.call(null,cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null)));
} else {
return null;
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var argexprs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (enve){
return (function (p1__52555_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__52555_SHARP_);
});})(enve))
,args));
var form_meta = cljs.core.meta.call(null,form);
var segs = cljs.analyzer.js_star_seg.call(null,jsform);
var tag = cljs.analyzer.get_js_tag.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_52557 = cljs.core.map.call(null,((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__52556_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__52556_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,types_52557)){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,types_52557)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"segs","segs",-1940299576),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)],[argexprs,argexprs,numeric,segs,new cljs.core.Keyword(null,"js","js",1768080579),env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_52559 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52559;
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__52560,_,___$1){
var vec__52561 = p__52560;
var seq__52562 = cljs.core.seq.call(null,vec__52561);
var first__52563 = cljs.core.first.call(null,seq__52562);
var seq__52562__$1 = cljs.core.next.call(null,seq__52562);
var ___$2 = first__52563;
var first__52563__$1 = cljs.core.first.call(null,seq__52562__$1);
var seq__52562__$2 = cljs.core.next.call(null,seq__52562__$1);
var jsform = first__52563__$1;
var args = seq__52562__$2;
var form = vec__52561;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star.call(null,env,jsform,args,form);
} else {
var code = cljs.core.apply.call(null,cljs.core.str,cljs.analyzer.js_star_interp.call(null,env,jsform));
var tag = cljs.analyzer.get_js_tag.call(null,form);
var form_meta = cljs.core.meta.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),numeric], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,f),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_.call(null,(function (p1__52564_SHARP_){
return ((p1__52564_SHARP_ == null)) || ((p1__52564_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__52564_SHARP_ === 'string') || (typeof p1__52564_SHARP_ === 'number') || (p1__52564_SHARP_ === true) || (p1__52564_SHARP_ === false);
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([argc], true),cljs.core.map.call(null,cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__52566){
var vec__52572 = p__52566;
var seq__52573 = cljs.core.seq.call(null,vec__52572);
var first__52574 = cljs.core.first.call(null,seq__52573);
var seq__52573__$1 = cljs.core.next.call(null,seq__52573);
var f = first__52574;
var args = seq__52573__$1;
var form = vec__52572;
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var fexpr = cljs.analyzer.analyze.call(null,enve,f);
var argc = cljs.core.count.call(null,args);
var fn_var_QMARK_ = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fexpr));
if(cljs.core.truth_(fn_var_QMARK_)){
var map__52575_52577 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__52575_52578__$1 = ((((!((map__52575_52577 == null)))?((((map__52575_52577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52575_52577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52575_52577):map__52575_52577);
var variadic_52579 = cljs.core.get.call(null,map__52575_52578__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var max_fixed_arity_52580 = cljs.core.get.call(null,map__52575_52578__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_52581 = cljs.core.get.call(null,map__52575_52578__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_52582 = cljs.core.get.call(null,map__52575_52578__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((!(cljs.analyzer.valid_arity_QMARK_.call(null,argc,method_params_52581))) && ((!(variadic_52579)) || ((variadic_52579) && ((argc < max_fixed_arity_52580))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_52582,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.first.call(null,form),new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}

var deprecated_QMARK__52583 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__52584 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if((cljs.core.boolean$.call(null,deprecated_QMARK__52583)) && (!(cljs.core.boolean$.call(null,no_warn_QMARK__52584)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr)) == null)){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
}

if(cljs.core.truth_((function (){var or__24751__auto__ = !(cljs.core.boolean$.call(null,cljs.analyzer._STAR_cljs_static_fns_STAR_));
if(or__24751__auto__){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = !((f instanceof cljs.core.Symbol));
if(or__24751__auto____$1){
return or__24751__auto____$1;
} else {
var or__24751__auto____$2 = fn_var_QMARK_;
if(cljs.core.truth_(or__24751__auto____$2)){
return or__24751__auto____$2;
} else {
return (cljs.analyzer.analyzed_QMARK_.call(null,f)) || (cljs.analyzer.all_values_QMARK_.call(null,args));
}
}
}
})())){
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__52572,seq__52573,first__52574,seq__52573__$1,f,args,form){
return (function (p1__52565_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__52565_SHARP_);
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__52572,seq__52573,first__52574,seq__52573__$1,f,args,form))
;
var argexprs = cljs.core.map.call(null,ana_expr,args);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"f","f",-1597136552),fexpr,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.vec.call(null,argexprs),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.call(null,argc,cljs.core.repeatedly.call(null,cljs.core.gensym));
return cljs.analyzer.analyze.call(null,env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,arg_syms,args))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),arg_syms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_52586 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52586;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null));
} else {
var map__52589 = cljs.core.meta.call(null,sym);
var map__52589__$1 = ((((!((map__52589 == null)))?((((map__52589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52589):map__52589);
var line = cljs.core.get.call(null,map__52589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52589__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var env__$1 = ((!((line == null)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"column","column",2078222095),column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"form","form",-1624062471),sym], null);
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env__$2);
var lb = cljs.core.get.call(null,lcls,sym);
if(!((lb == null))){
return cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),lb);
} else {
if(!(new cljs.core.Keyword(null,"def-var","def-var",-698214377).cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
var sym_meta = cljs.core.meta.call(null,sym);
var info = ((!(cljs.core.contains_QMARK_.call(null,sym_meta,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162))))?cljs.analyzer.resolve_existing_var.call(null,env__$2,sym):cljs.analyzer.resolve_var.call(null,env__$2,sym));
return cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),info);
} else {
var info = cljs.analyzer.resolve_var.call(null,env__$2,sym);
return cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),info);
}
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
if(!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null));
}
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
if(!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null));
}
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__24751__auto__ = cljs.analyzer.resolve_macro_ns_alias.call(null,env,nstr,null);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,nstr,null);
}
})();
var nstr__$1 = (cljs.core.truth_(res)?[cljs.core.str(res)].join(''):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(cljs.core.truth_(goog.string.contains(nstr__$1,"."))){
return cljs.core.find_macros_ns.call(null,cljs.core.symbol.call(null,nstr__$1));
} else {
var G__52592 = env;
var G__52592__$1 = (((G__52592 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__52592));
var G__52592__$2 = (((G__52592__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__52592__$1));
var G__52592__$3 = (((G__52592__$2 == null))?null:cljs.core.get.call(null,G__52592__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__52592__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__52592__$3);
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),sym) == null))) || ((cljs.analyzer.excluded_QMARK_.call(null,env,sym)) && (!(cljs.analyzer.used_QMARK_.call(null,env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace.call(null,sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns.call(null,env,nstr);
if((ns == null)){
return null;
} else {
return ns.findInternedVar(cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
}
} else {
if(!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym) == null))){
var qualified_symbol = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym);
var nsym = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym__$1);
} else {
var nsym = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym);
if(!((nsym == null))){
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_.call(null,sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first.call(null,form);
if(!((cljs.core.get.call(null,cljs.analyzer.specials,op) == null))){
return form;
} else {
var mac_var = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander.call(null,op,env):null);
if(!((mac_var == null))){
var mchk = (function (){var and__24739__auto__ = cljs.spec;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.spec.macroexpand_check;
} else {
return and__24739__auto__;
}
})();
var _ = (cljs.core.truth_(mchk)?mchk.call(null,mac_var,cljs.core.next.call(null,form)):null);
var form_SINGLEQUOTE_ = cljs.core.apply.call(null,cljs.core.deref.call(null,mac_var),form,env,cljs.core.rest.call(null,form));
if(cljs.analyzer.cljs_seq_QMARK_.call(null,form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first.call(null,form_SINGLEQUOTE_);
var sym = cljs.core.first.call(null,form);
if(cljs.core.symbol_identical_QMARK_.call(null,sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = (cljs.core.truth_(cljs.core.namespace.call(null,sym))?sym:cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,mac_var.sym));
var mac_var_name = cljs.core.symbol.call(null,cljs.core.name.call(null,mac_var.sym));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),mac_var_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),mac_var_name,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword("cljs.analyzer","numeric","cljs.analyzer/numeric",1415704188)], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.call(null,js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),true):js_op);
return cljs.core.vary_meta.call(null,form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
} else {
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str(op)].join('');
if(("." === opname.charAt((0)))){
var vec__52596 = cljs.core.next.call(null,form);
var seq__52597 = cljs.core.seq.call(null,vec__52596);
var first__52598 = cljs.core.first.call(null,seq__52597);
var seq__52597__$1 = cljs.core.next.call(null,seq__52597);
var target = first__52598;
var args = seq__52597__$1;
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.DOT_SYM,target,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(1))),args),cljs.core.meta.call(null,form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.NEW_SYM,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(0),(cljs.core.count.call(null,opname) - (1)))),cljs.core.next.call(null,form)),cljs.core.meta.call(null,form));
} else {
return form;

}
}
} else {
return form;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__47934__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_.call(null,env,form);
}catch (e52600){var err__47970__auto__ = e52600;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__47970__auto__)){
throw err__47970__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__47970__auto__.message,err__47970__auto__);
}
}}finally {if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(!((cljs.core.get.call(null,cljs.analyzer.specials,op) == null))){
return cljs.analyzer.parse.call(null,op,env,form,name,opts);
} else {
return cljs.analyzer.parse_invoke.call(null,env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_.call(null,op,env,form,name,opts);
}catch (e52602){var err__47970__auto__ = e52602;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__47970__auto__)){
throw err__47970__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__47970__auto__.message,err__47970__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var args52603 = [];
var len__25826__auto___52606 = arguments.length;
var i__25827__auto___52607 = (0);
while(true){
if((i__25827__auto___52607 < len__25826__auto___52606)){
args52603.push((arguments[i__25827__auto___52607]));

var G__52608 = (i__25827__auto___52607 + (1));
i__25827__auto___52607 = G__52608;
continue;
} else {
}
break;
}

var G__52605 = args52603.length;
switch (G__52605) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52603.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.call(null,env,form,name,null);
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var line__$1 = (((line == null))?new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env):line);
var col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var col__$1 = (((col == null))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),col__$1);
var op = cljs.core.first.call(null,form);
if((op == null)){
throw cljs.analyzer.error.call(null,env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap.call(null,op,env__$1,form,name,opts);
} else {
return cljs.analyzer.analyze.call(null,env__$1,mform,name,opts);
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ks = (function (){var _STAR_recur_frames_STAR_52614 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52614,expr_env){
return (function (p1__52610_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52610_SHARP_);
});})(_STAR_recur_frames_STAR_52614,expr_env))
,cljs.core.keys.call(null,form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52614;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_52615 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52615,expr_env,ks){
return (function (p1__52611_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52611_SHARP_);
});})(_STAR_recur_frames_STAR_52615,expr_env,ks))
,cljs.core.vals.call(null,form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52615;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),ks,new cljs.core.Keyword(null,"vals","vals",768058733),vs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.interleave.call(null,ks,vs)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_52618 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52618,expr_env){
return (function (p1__52616_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52616_SHARP_);
});})(_STAR_recur_frames_STAR_52618,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52618;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_52621 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52621,expr_env){
return (function (p1__52619_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52619_SHARP_);
});})(_STAR_recur_frames_STAR_52621,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52621;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_52624 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52624,expr_env){
return (function (p1__52622_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52622_SHARP_);
});})(_STAR_recur_frames_STAR_52624,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52624;
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = ((cljs.core.map_QMARK_.call(null,val))?cljs.core.zipmap.call(null,cljs.core.keys.call(null,val),(function (){var _STAR_recur_frames_STAR_52629 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52629,val,expr_env){
return (function (p1__52625_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52625_SHARP_);
});})(_STAR_recur_frames_STAR_52629,val,expr_env))
,cljs.core.vals.call(null,val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52629;
}})()):(function (){var _STAR_recur_frames_STAR_52630 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.call(null,cljs.core.map.call(null,((function (_STAR_recur_frames_STAR_52630,val,expr_env){
return (function (p1__52626_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__52626_SHARP_);
});})(_STAR_recur_frames_STAR_52630,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_52630;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-value","js-value",-758336661),new cljs.core.Keyword(null,"js-type","js-type",539386702),((cljs.core.map_QMARK_.call(null,val))?new cljs.core.Keyword(null,"object","object",1474613949):new cljs.core.Keyword(null,"array","array",-2080713842)),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core.map_QMARK_.call(null,val))?new cljs.core.Symbol(null,"object","object",-1179821820,null):new cljs.core.Symbol(null,"array","array",-440182315,null))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"source","source",-433931539));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,form));
if(cljs.core.seq.call(null,m)){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in.call(null,expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291));
var meta_expr = cljs.analyzer.analyze_map.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"meta","meta",1499536964),meta_expr,new cljs.core.Keyword(null,"expr","expr",745722291),expr__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast);
if((tag == null)){
var tag__$1 = cljs.analyzer.infer_tag.call(null,env,ast);
if(!((tag__$1 == null))){
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1);
} else {
return ast;
}
} else {
return ast;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol.call(null,env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_.call(null,form)) && (cljs.core.seq.call(null,form))){
return cljs.analyzer.analyze_seq.call(null,env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,form)){
return cljs.analyzer.analyze_map.call(null,env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,form)){
return cljs.analyzer.analyze_vector.call(null,env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,form)){
return cljs.analyzer.analyze_set.call(null,env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword.call(null,env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value.call(null,env,form);
} else {
if(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__52632 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__52632,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
} else {
return G__52632;
}

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq.call(null,form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form.call(null,env,form__$1,name,opts);
return cljs.core.reduce.call(null,((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return pass.call(null,env,ast__$1,opts);
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have :children [exprs...] entry. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
var args52633 = [];
var len__25826__auto___52638 = arguments.length;
var i__25827__auto___52639 = (0);
while(true){
if((i__25827__auto___52639 < len__25826__auto___52638)){
args52633.push((arguments[i__25827__auto___52639]));

var G__52640 = (i__25827__auto___52639 + (1));
i__25827__auto___52639 = G__52640;
continue;
} else {
}
break;
}

var G__52635 = args52633.length;
switch (G__52635) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52633.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.call(null,env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.call(null,env,form,name,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__47934__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{try{var _STAR_alias_map_STAR_52637 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__24751__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_52637;
}}catch (e52636){var err__47970__auto__ = e52636;
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__47970__auto__)){
throw err__47970__auto__;
} else {
throw cljs.analyzer.error.call(null,env,err__47970__auto__.message,err__47970__auto__);
}
}}finally {if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;

cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),s));
});

//# sourceMappingURL=analyzer.js.map?rel=1478399617846