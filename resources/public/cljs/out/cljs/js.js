// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___67070 = arguments.length;
var i__25827__auto___67071 = (0);
while(true){
if((i__25827__auto___67071 < len__25826__auto___67070)){
args__25833__auto__.push((arguments[i__25827__auto___67071]));

var G__67072 = (i__25827__auto___67071 + (1));
i__25827__auto___67071 = G__67072;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_67069 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.call(null,cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67069;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq67068){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67068));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.call(null,clojure.string.replace.call(null,file,"/","."),(0),(cljs.core.count.call(null,file) - (5)));
return cljs.core.symbol.call(null,cljs.core.demunge.call(null,lib_name));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_.call(null,[cljs.core.str(sym)].join(''),".")){
return sym;
} else {
return cljs.analyzer.resolve_symbol.call(null,sym);
}
});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__67073){
var map__67076 = p__67073;
var map__67076__$1 = ((((!((map__67076 == null)))?((((map__67076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67076):map__67076);
var resource = map__67076__$1;
var source = cljs.core.get.call(null,map__67076__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var args67078 = [];
var len__25826__auto___67083 = arguments.length;
var i__25827__auto___67084 = (0);
while(true){
if((i__25827__auto___67084 < len__25826__auto___67083)){
args67078.push((arguments[i__25827__auto___67084]));

var G__67085 = (i__25827__auto___67084 + (1));
i__25827__auto___67084 = G__67085;
continue;
} else {
}
break;
}

var G__67080 = args67078.length;
switch (G__67080) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67078.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__67081 = cljs.env.default_compiler_env.call(null);
cljs.core.swap_BANG_.call(null,G__67081,((function (G__67081){
return (function (state){
});})(G__67081))
);

return G__67081;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__67082 = cljs.js.empty_state.call(null);
cljs.core.swap_BANG_.call(null,G__67082,init);

return G__67082;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.call(null,JSON.parse(sm_json));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str(pre),cljs.core.str(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__67087){
var map__67092 = p__67087;
var map__67092__$1 = ((((!((map__67092 == null)))?((((map__67092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67092):map__67092);
var opts = map__67092__$1;
var output_dir = cljs.core.get.call(null,map__67092__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.call(null,map__67092__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace.call(null,cljs.core.munge.call(null,[cljs.core.str(name)].join('')),".","/"):[cljs.core.str("cljs-"),cljs.core.str(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__24751__auto__ = output_dir;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__67094 = [cljs.core.str(smn),cljs.core.str(".cljs?rel="),cljs.core.str(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__67094,[cljs.core.str(out),cljs.core.str("/")].join(''));
} else {
return G__67094;
}
})();
var file = (function (){var G__67095 = [cljs.core.str(smn),cljs.core.str(".js?rel="),cljs.core.str(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__67095,[cljs.core.str(out),cljs.core.str("/")].join(''));
} else {
return G__67095;
}
})();
var json = cljs.source_map.encode.call(null,cljs.core.PersistentArrayMap.fromArray([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)], true, false),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,json);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),name], null),cljs.source_map.invert_reverse_map.call(null,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append([cljs.core.str("\n//# sourceURL="),cljs.core.str(file),cljs.core.str("\n//# sourceMappingURL=data:application/json;base64,"),cljs.core.str(goog.crypt.base64.encodeString(clojure.string.replace.call(null,json,/%([0-9A-F]{2})/,String.fromCharCode("0x$1"))))].join(''));
});
cljs.js.current_alias_map = (function cljs$js$current_alias_map(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq.call(null,coll)){
return proc.call(null,cljs.core.first.call(null,coll),(function (res){
if(cljs.core.truth_(break_QMARK_.call(null,res))){
return cb.call(null,res);
} else {
return cljs$js$run_async_BANG_.call(null,proc,cljs.core.rest.call(null,coll),break_QMARK_,cb);
}
}));
} else {
return cb.call(null,null);
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_.call(null,(function (name,cb__$1){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.require = (function cljs$js$require(var_args){
var args67096 = [];
var len__25826__auto___67107 = arguments.length;
var i__25827__auto___67108 = (0);
while(true){
if((i__25827__auto___67108 < len__25826__auto___67107)){
args67096.push((arguments[i__25827__auto___67108]));

var G__67109 = (i__25827__auto___67108 + (1));
i__25827__auto___67108 = G__67109;
continue;
} else {
}
break;
}

var G__67098 = args67096.length;
switch (G__67098) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67096.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.call(null,name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.call(null,null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.call(null),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars);
var aname = (function (){var G__67099 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__67099);
} else {
return G__67099;
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,[cljs.core.str("Loading "),cljs.core.str(name),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)),cljs.core.str(" namespace")].join(''));
} else {
}

if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_),aname))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name)], null),((function (env,bound_vars__$1,aname){
return (function (resource){
if((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str("(or (map? resource) (nil? resource))")].join('')));
}

if(cljs.core.truth_(resource)){
var map__67101 = resource;
var map__67101__$1 = ((((!((map__67101 == null)))?((((map__67101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67101):map__67101);
var lang = cljs.core.get.call(null,map__67101__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__67101__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__67101__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.call(null,map__67101__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.call(null,map__67101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__67103 = cljs.core._EQ_;
var expr__67104 = lang;
if(cljs.core.truth_(pred__67103.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__67104))){
return cljs.js.eval_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__67103,expr__67104,map__67101,map__67101__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});})(pred__67103,expr__67104,map__67101,map__67101__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_(pred__67103.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__67104))){
return cljs.js.process_macros_deps.call(null,bound_vars__$1,cache,opts,((function (pred__67103,expr__67104,map__67101,map__67101__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cljs.js.process_libs_deps.call(null,bound_vars__$1,cache,opts,((function (pred__67103,expr__67104,map__67101,map__67101__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var res__$2 = (function (){try{new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e67106){var cause = e67106;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,[cljs.core.str("Could not require "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
}
});})(pred__67103,expr__67104,map__67101,map__67101__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
}
});})(pred__67103,expr__67104,map__67101,map__67101__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join(''))));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,name)], null)))));
}
});})(env,bound_vars__$1,aname))
);
}catch (e67100){var cause = e67100;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,[cljs.core.str("Could not require "),cljs.core.str(name)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;


cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.fromArray([from,to], true, false),m);
if(cljs.core.truth_((function (){var and__24739__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([to], true),cljs.core.vals.call(null,replaced));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.assoc.call(null,replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (patch){
return (function (acc,p__67115){
var vec__67116 = p__67115;
var renamed = cljs.core.nth.call(null,vec__67116,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__67116,(1),null);
var entry = vec__67116;
if(cljs.core._EQ_.call(null,[cljs.core.str(from)].join(''),cljs.core.namespace.call(null,qualified_sym))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,[cljs.core.str(to)].join(''),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch.call(null,new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames.call(null,new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames.call(null,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var args67120 = [];
var len__25826__auto___67124 = arguments.length;
var i__25827__auto___67125 = (0);
while(true){
if((i__25827__auto___67125 < len__25826__auto___67124)){
args67120.push((arguments[i__25827__auto___67125]));

var G__67126 = (i__25827__auto___67125 + (1));
i__25827__auto___67125 = G__67126;
continue;
} else {
}
break;
}

var G__67122 = args67120.length;
switch (G__67122) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67120.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading dependencies for",lib);
} else {
}

var _STAR_cljs_dep_set_STAR_67123 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_67123){
return (function (p1__67119_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),p1__67119_SHARP_));
});})(_STAR_cljs_dep_set_STAR_67123))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__67119#] (not (contains? (:*cljs-dep-set* bound-vars) p1__67119#))) deps)")].join('')));
}

if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.call(null,bound_vars,dep,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_67123){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading result: ",res);
} else {
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
var temp__4655__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([dep,null], true, false),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__4655__auto__)){
var cljs_dep = temp__4655__auto__;
return cljs.js.require.call(null,bound_vars,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_67123){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,dep,cljs_dep);

return cljs.js.load_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,((function (cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_67123){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_67123))
);
}
});})(cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_67123))
);
} else {
return cb.call(null,res);
}
}
});})(dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_67123))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_67123;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 6;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var args67129 = [];
var len__25826__auto___67139 = arguments.length;
var i__25827__auto___67140 = (0);
while(true){
if((i__25827__auto___67140 < len__25826__auto___67139)){
args67129.push((arguments[i__25827__auto___67140]));

var G__67141 = (i__25827__auto___67140 + (1));
i__25827__auto___67140 = G__67141;
continue;
} else {
}
break;
}

var G__67131 = args67129.length;
switch (G__67131) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67129.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var _STAR_cljs_dep_set_STAR_67132 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_67132,compiler){
return (function (p1__67128_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),p1__67128_SHARP_));
});})(_STAR_cljs_dep_set_STAR_67132,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__67128#] (not (contains? (:*cljs-dep-set* bound-vars) p1__67128#))) deps)")].join('')));
}

if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,dep)], null),((function (dep,_STAR_cljs_dep_set_STAR_67132,compiler){
return (function (resource){
if((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str("(or (map? resource) (nil? resource))")].join('')));
}

if(cljs.core.truth_(resource)){
var map__67134 = resource;
var map__67134__$1 = ((((!((map__67134 == null)))?((((map__67134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67134):map__67134);
var name = cljs.core.get.call(null,map__67134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.call(null,map__67134__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__67134__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.call(null,map__67134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__67136 = cljs.core._EQ_;
var expr__67137 = lang;
if(cljs.core.truth_(pred__67136.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__67137))){
return cljs.js.analyze_str_STAR_.call(null,bound_vars,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__67136,expr__67137,map__67134,map__67134__$1,name,lang,source,file,dep,_STAR_cljs_dep_set_STAR_67132,compiler){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(pred__67136,expr__67137,map__67134,map__67134__$1,name,lang,source,file,dep,_STAR_cljs_dep_set_STAR_67132,compiler))
);
} else {
if(cljs.core.truth_(pred__67136.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__67137))){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)))));
}
});})(dep,_STAR_cljs_dep_set_STAR_67132,compiler))
);
}catch (e67133){var cause = e67133;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not analyze dep "),cljs.core.str(dep)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_67132;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,reload,reloads,opts,cb){
if(cljs.core.seq.call(null,macros)){
var nsym = cljs.core.first.call(null,cljs.core.vals.call(null,macros));
var k__$1 = (function (){var or__24751__auto__ = reload.call(null,k);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = cljs.core.get_in.call(null,reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__24751__auto____$1)){
return or__24751__auto____$1;
} else {
var or__24751__auto____$2 = (function (){var and__24739__auto__ = cljs.core._EQ_.call(null,nsym,cljs.core.name);
if(and__24739__auto__){
var and__24739__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__24739__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(or__24751__auto____$2)){
return or__24751__auto____$2;
} else {
return null;
}
}
}
})();
return cljs.js.require.call(null,bound_vars,nsym,k__$1,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"ns","ns",441598760)),((function (nsym,k__$1){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs$js$load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),reload,reloads,opts,cb);
} else {
return cb.call(null,res);
}
});})(nsym,k__$1))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(ast,smap){
var rewrite_renames = (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,(function (acc,p__67149){
var vec__67150 = p__67149;
var renamed = cljs.core.nth.call(null,vec__67150,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__67150,(1),null);
var entry = vec__67150;
var from = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_sym));
var to = cljs.core.get.call(null,smap,from);
if(cljs.core.some_QMARK_.call(null,to)){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,[cljs.core.str(to)].join(''),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"uses","uses",232664692),((function (rewrite_renames){
return (function (p1__67143_SHARP_){
return clojure.walk.postwalk_replace.call(null,smap,p1__67143_SHARP_);
});})(rewrite_renames))
),new cljs.core.Keyword(null,"requires","requires",-1201390927),((function (rewrite_renames){
return (function (p1__67144_SHARP_){
return cljs.core.merge.call(null,smap,clojure.walk.postwalk_replace.call(null,smap,p1__67144_SHARP_));
});})(rewrite_renames))
),new cljs.core.Keyword(null,"renames","renames",343278368),rewrite_renames),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),rewrite_renames);
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var args67155 = [];
var len__25826__auto___67185 = arguments.length;
var i__25827__auto___67186 = (0);
while(true){
if((i__25827__auto___67186 < len__25826__auto___67185)){
args67155.push((arguments[i__25827__auto___67186]));

var G__67187 = (i__25827__auto___67186 + (1));
i__25827__auto___67186 = G__67187;
continue;
} else {
}
break;
}

var G__67157 = args67155.length;
switch (G__67157) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67155.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.call(null,false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__67158,opts,cb){
var map__67159 = p__67158;
var map__67159__$1 = ((((!((map__67159 == null)))?((((map__67159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67159):map__67159);
var ast = map__67159__$1;
var op = cljs.core.get.call(null,map__67159__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),op)){
var check_uses_and_load_macros = ((function (map__67159,map__67159__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__67179 = rewritten_ast;
var map__67179__$1 = ((((!((map__67179 == null)))?((((map__67179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67179):map__67179);
var uses = cljs.core.get.call(null,map__67179__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var requires = cljs.core.get.call(null,map__67179__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var require_macros = cljs.core.get.call(null,map__67179__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var use_macros = cljs.core.get.call(null,map__67179__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.call(null,map__67179__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.call(null,map__67179__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,reload,reloads,opts,((function (env,map__67179,map__67179__$1,uses,requires,require_macros,use_macros,reload,reloads,map__67159,map__67159__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,reloads,reloads,opts,((function (env,map__67179,map__67179__$1,uses,requires,require_macros,use_macros,reload,reloads,map__67159,map__67159__$1,ast,op){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
var res__$3 = (function (){try{if(cljs.core.seq.call(null,use_macros)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

cljs.analyzer.check_use_macros.call(null,use_macros,env);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e67181){var cause = e67181;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$3))){
return cb.call(null,res__$3);
} else {
try{var _STAR_analyze_deps_STAR_67183 = cljs.analyzer._STAR_analyze_deps_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);

try{var ast_SINGLEQUOTE_ = cljs.analyzer.check_rename_macros_inferring_missing.call(null,cljs.analyzer.check_use_macros_inferring_missing.call(null,rewritten_ast,env),env);
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null));
}finally {cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_67183;
}}catch (e67182){var cause = e67182;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(env,map__67179,map__67179__$1,uses,requires,require_macros,use_macros,reload,reloads,map__67159,map__67159__$1,ast,op))
);
}
});})(env,map__67179,map__67179__$1,uses,requires,require_macros,use_macros,reload,reloads,map__67159,map__67159__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking uses");
} else {
}

cljs.analyzer.check_uses.call(null,(cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__24739__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null),env);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}catch (e67184){var cause = e67184;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__67159,map__67159__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__24739__auto__ = load;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__24739__auto__;
}
})())){
return cljs.js.load_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__67159,map__67159__$1,ast,op){
return (function (p1__67153_SHARP_){
return check_uses_and_load_macros.call(null,p1__67153_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__67153_SHARP_)));
});})(map__67159,map__67159__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.core.not.call(null,load);
if(and__24739__auto__){
var and__24739__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__24739__auto____$1)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__67159,map__67159__$1,ast,op){
return (function (p1__67154_SHARP_){
return check_uses_and_load_macros.call(null,p1__67154_SHARP_,ast);
});})(map__67159,map__67159__$1,ast,op))
);
} else {
return check_uses_and_load_macros.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var the_ns = (function (){var or__24751__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__67220 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67220,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__67220;
}
})();
return ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_67234 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_67235 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_67236 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_67237 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_67238 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR_67239 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_67240 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol67241 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_67242 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_67243 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns);

cljs.analyzer._STAR_passes_STAR_ = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map.call(null);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)], null);
}catch (e67244){var cause = e67244;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__67245 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__67245__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__67245,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__67245);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67245__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__67245__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e67246){var cause = e67246;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.call(null,bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67234,_STAR_cljs_ns_STAR_67235,_STAR_cljs_static_fns_STAR_67236,_STAR_ns_STAR_67237,_STAR_passes_STAR_67238,_STAR_alias_map_STAR_67239,_STAR_data_readers_STAR_67240,resolve_symbol67241,_STAR_source_map_data_STAR_67242,_STAR_cljs_file_STAR_67243,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop.call(null,ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67234,_STAR_cljs_ns_STAR_67235,_STAR_cljs_static_fns_STAR_67236,_STAR_ns_STAR_67237,_STAR_passes_STAR_67238,_STAR_alias_map_STAR_67239,_STAR_data_readers_STAR_67240,resolve_symbol67241,_STAR_source_map_data_STAR_67242,_STAR_cljs_file_STAR_67243,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__67247 = ast;
var G__67248 = ns;
last_ast = G__67247;
ns = G__67248;
continue;
}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_67243;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_67242;

cljs.tools.reader.resolve_symbol = resolve_symbol67241;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_67240;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_67239;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_67238;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_67237;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_67236;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_67235;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_67234;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
.call(null,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var args67249 = [];
var len__25826__auto___67252 = arguments.length;
var i__25827__auto___67253 = (0);
while(true){
if((i__25827__auto___67253 < len__25826__auto___67252)){
args67249.push((arguments[i__25827__auto___67253]));

var G__67254 = (i__25827__auto___67253 + (1));
i__25827__auto___67253 = G__67254;
continue;
} else {
}
break;
}

var G__67251 = args67249.length;
switch (G__67251) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67249.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.call(null,state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.call(null,state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_.call(null,state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_.call(null,name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_.call(null,opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__24751__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__67270 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67270,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__67270;
}
})();
var _STAR_compiler_STAR_67271 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_67272 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_67273 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_67274 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_67275 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_67276 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_67277 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol67278 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_67279 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map.call(null);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env.call(null);
var aenv__$1 = (function (){var G__67280 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__67280__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__67280,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__67280);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67280__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__67280__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e67281){var cause = e67281;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv,aenv__$1,res,_STAR_compiler_STAR_67271,_STAR_eval_fn_STAR_67272,_STAR_cljs_ns_STAR_67273,_STAR_cljs_static_fns_STAR_67274,_STAR_ns_STAR_67275,_STAR_alias_map_STAR_67276,_STAR_data_readers_STAR_67277,resolve_symbol67278,_STAR_source_map_data_STAR_67279,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var src = [cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\")")].join('');
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null))], null));
}
});})(ast,aenv,aenv__$1,res,_STAR_compiler_STAR_67271,_STAR_eval_fn_STAR_67272,_STAR_cljs_ns_STAR_67273,_STAR_cljs_static_fns_STAR_67274,_STAR_ns_STAR_67275,_STAR_alias_map_STAR_67276,_STAR_data_readers_STAR_67277,resolve_symbol67278,_STAR_source_map_data_STAR_67279,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67282_67284 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67283_67285 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_67282_67284,_STAR_print_fn_STAR_67283_67285,sb__25737__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_67271,_STAR_eval_fn_STAR_67272,_STAR_cljs_ns_STAR_67273,_STAR_cljs_static_fns_STAR_67274,_STAR_ns_STAR_67275,_STAR_alias_map_STAR_67276,_STAR_data_readers_STAR_67277,resolve_symbol67278,_STAR_source_map_data_STAR_67279,the_ns,bound_vars__$1){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(_STAR_print_newline_STAR_67282_67284,_STAR_print_fn_STAR_67283_67285,sb__25737__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_67271,_STAR_eval_fn_STAR_67272,_STAR_cljs_ns_STAR_67273,_STAR_cljs_static_fns_STAR_67274,_STAR_ns_STAR_67275,_STAR_alias_map_STAR_67276,_STAR_data_readers_STAR_67277,resolve_symbol67278,_STAR_source_map_data_STAR_67279,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit.call(null,ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67283_67285;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67282_67284;
}
return [cljs.core.str(sb__25737__auto__)].join('');
})();
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null))], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_67279;

cljs.tools.reader.resolve_symbol = resolve_symbol67278;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_67277;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_67276;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_67275;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_67274;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_67273;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_67272;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_67271;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *   :eval - the eval function to invoke, see *eval-fn*
 *   :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var args67286 = [];
var len__25826__auto___67289 = arguments.length;
var i__25827__auto___67290 = (0);
while(true){
if((i__25827__auto___67290 < len__25826__auto___67289)){
args67286.push((arguments[i__25827__auto___67290]));

var G__67291 = (i__25827__auto___67290 + (1));
i__25827__auto___67290 = G__67291;
continue;
} else {
}
break;
}

var G__67288 = args67286.length;
switch (G__67288) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67286.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.call(null,state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__24751__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__67326 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67326,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__67326;
}
})();
return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_67341 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_67342 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_67343 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_67344 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_67345 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_67346 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_67347 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol67348 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_67349 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map.call(null);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)], null);
}catch (e67350){var cause = e67350;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__67351 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__67351__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__67351,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__67351);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67351__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__67351__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e67352){var cause = e67352;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
sb.append((function (){var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67353_67355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67354_67356 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_67353_67355,_STAR_print_fn_STAR_67354_67356,sb__25737__auto__,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67341,_STAR_eval_fn_STAR_67342,_STAR_cljs_ns_STAR_67343,_STAR_cljs_static_fns_STAR_67344,_STAR_ns_STAR_67345,_STAR_alias_map_STAR_67346,_STAR_data_readers_STAR_67347,resolve_symbol67348,_STAR_source_map_data_STAR_67349,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(ns,_STAR_print_newline_STAR_67353_67355,_STAR_print_fn_STAR_67354_67356,sb__25737__auto__,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67341,_STAR_eval_fn_STAR_67342,_STAR_cljs_ns_STAR_67343,_STAR_cljs_static_fns_STAR_67344,_STAR_ns_STAR_67345,_STAR_alias_map_STAR_67346,_STAR_data_readers_STAR_67347,resolve_symbol67348,_STAR_source_map_data_STAR_67349,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit.call(null,ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67354_67356;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67353_67355;
}
return [cljs.core.str(sb__25737__auto__)].join('');
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.call(null,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67341,_STAR_eval_fn_STAR_67342,_STAR_cljs_ns_STAR_67343,_STAR_cljs_static_fns_STAR_67344,_STAR_ns_STAR_67345,_STAR_alias_map_STAR_67346,_STAR_data_readers_STAR_67347,resolve_symbol67348,_STAR_source_map_data_STAR_67349,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cljs$js$compile_str_STAR__$_compile_loop.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67341,_STAR_eval_fn_STAR_67342,_STAR_cljs_ns_STAR_67343,_STAR_cljs_static_fns_STAR_67344,_STAR_ns_STAR_67345,_STAR_alias_map_STAR_67346,_STAR_data_readers_STAR_67347,resolve_symbol67348,_STAR_source_map_data_STAR_67349,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__67357 = ns;
ns = G__67357;
continue;
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_67349;

cljs.tools.reader.resolve_symbol = resolve_symbol67348;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_67347;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_67346;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_67345;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_67344;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_67343;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_67342;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_67341;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *   :load       - library resolution function, see *load-fn*
 *   :source-map - set to true to generate inline source map information
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var args67358 = [];
var len__25826__auto___67361 = arguments.length;
var i__25827__auto___67362 = (0);
while(true){
if((i__25827__auto___67362 < len__25826__auto___67361)){
args67358.push((arguments[i__25827__auto___67362]));

var G__67363 = (i__25827__auto___67362 + (1));
i__25827__auto___67362 = G__67363;
continue;
} else {
}
break;
}

var G__67360 = args67358.length;
switch (G__67360) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67358.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.call(null,state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.call(null,state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_.call(null,state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_.call(null,name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_.call(null,opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data.call(null):null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__24751__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__67407 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67407,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__67407;
}
})();
var aname = (function (){var G__67408 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__67408);
} else {
return G__67408;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Evaluating",name);
} else {
}

return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_67427 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_67428 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_67429 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_67430 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_67431 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_67432 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_67433 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol67434 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_67435 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_67436 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map.call(null);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)], null);
}catch (e67437){var cause = e67437;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__67438 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,ns));
var G__67438__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__67438,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__67438);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__67438__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__67438__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e67439){var cause = e67439;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
sb.append((function (){var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67440_67445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67441_67446 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_67440_67445,_STAR_print_fn_STAR_67441_67446,sb__25737__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(ns,_STAR_print_newline_STAR_67440_67445,_STAR_print_fn_STAR_67441_67446,sb__25737__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emitln.call(null,[cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\");")].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67441_67446;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67440_67445;
}
return [cljs.core.str(sb__25737__auto__)].join('');
})());

return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cljs$js$eval_str_STAR__$_compile_loop.call(null,ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
sb.append((function (){var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67442_67447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67443_67448 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_67442_67447,_STAR_print_fn_STAR_67443_67448,sb__25737__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(ns,_STAR_print_newline_STAR_67442_67447,_STAR_print_fn_STAR_67443_67448,sb__25737__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emit.call(null,ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67443_67448;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67442_67447;
}
return [cljs.core.str(sb__25737__auto__)].join('');
})());

var G__67449 = ns_SINGLEQUOTE_;
ns = G__67449;
continue;
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,js_source);
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,evalm)], null);
}catch (e67444){var cause = e67444;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,"ERROR",cause));
}})();
return cb.call(null,res__$2);
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_67427,_STAR_eval_fn_STAR_67428,_STAR_cljs_ns_STAR_67429,_STAR_cljs_static_fns_STAR_67430,_STAR_ns_STAR_67431,_STAR_alias_map_STAR_67432,_STAR_data_readers_STAR_67433,resolve_symbol67434,_STAR_source_map_data_STAR_67435,_STAR_cljs_file_STAR_67436,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__4655__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,evalm,complete);
} else {
return complete.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_67436;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_67435;

cljs.tools.reader.resolve_symbol = resolve_symbol67434;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_67433;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_67432;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_67431;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_67430;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_67429;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_67428;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_67427;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol)
 *  optional, the name of the source
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval         - eval function to invoke, see *eval-fn*
 *  :load         - library resolution function, see *load-fn*
 *  :source-map   - set to true to generate inline source map information
 *  :cache-source - optional, a function to run side-effects with the
 *                  compilation result prior to actual evalution. This function
 *                  takes two arguments, the first is the eval map, the source
 *                  will be under :source. The second argument is a callback of
 *                  one argument. If an error occurs an :error key should be
 *                  supplied.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var args67450 = [];
var len__25826__auto___67453 = arguments.length;
var i__25827__auto___67454 = (0);
while(true){
if((i__25827__auto___67454 < len__25826__auto___67453)){
args67450.push((arguments[i__25827__auto___67454]));

var G__67455 = (i__25827__auto___67454 + (1));
i__25827__auto___67454 = G__67455;
continue;
} else {
}
break;
}

var G__67452 = args67450.length;
switch (G__67452) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67450.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.call(null,state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.call(null,state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_.call(null,state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_.call(null,name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_.call(null,opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;


//# sourceMappingURL=js.js.map?rel=1478399649505