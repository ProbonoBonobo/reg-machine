// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__60966 = s;
var map__60966__$1 = ((((!((map__60966 == null)))?((((map__60966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60966):map__60966);
var name = cljs.core.get.call(null,map__60966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__60966__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__60969 = info;
var map__60970 = G__60969;
var map__60970__$1 = ((((!((map__60970 == null)))?((((map__60970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60970):map__60970);
var shadow = cljs.core.get.call(null,map__60970__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__60969__$1 = G__60969;
while(true){
var d__$2 = d__$1;
var map__60972 = G__60969__$1;
var map__60972__$1 = ((((!((map__60972 == null)))?((((map__60972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60972):map__60972);
var shadow__$1 = cljs.core.get.call(null,map__60972__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__60974 = (d__$2 + (1));
var G__60975 = shadow__$1;
d__$1 = G__60974;
G__60969__$1 = G__60975;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__60976){
var map__60981 = p__60976;
var map__60981__$1 = ((((!((map__60981 == null)))?((((map__60981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60981):map__60981);
var name_var = map__60981__$1;
var name = cljs.core.get.call(null,map__60981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__60981__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__60983 = info;
var map__60983__$1 = ((((!((map__60983 == null)))?((((map__60983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60983):map__60983);
var ns = cljs.core.get.call(null,map__60983__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__60983__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args60985 = [];
var len__7651__auto___60988 = arguments.length;
var i__7652__auto___60989 = (0);
while(true){
if((i__7652__auto___60989 < len__7651__auto___60988)){
args60985.push((arguments[i__7652__auto___60989]));

var G__60990 = (i__7652__auto___60989 + (1));
i__7652__auto___60989 = G__60990;
continue;
} else {
}
break;
}

var G__60987 = args60985.length;
switch (G__60987) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60985.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__60993 = cp;
switch (G__60993) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__60999_61003 = cljs.core.seq.call(null,s);
var chunk__61000_61004 = null;
var count__61001_61005 = (0);
var i__61002_61006 = (0);
while(true){
if((i__61002_61006 < count__61001_61005)){
var c_61007 = cljs.core._nth.call(null,chunk__61000_61004,i__61002_61006);
sb.append(cljs.compiler.escape_char.call(null,c_61007));

var G__61008 = seq__60999_61003;
var G__61009 = chunk__61000_61004;
var G__61010 = count__61001_61005;
var G__61011 = (i__61002_61006 + (1));
seq__60999_61003 = G__61008;
chunk__61000_61004 = G__61009;
count__61001_61005 = G__61010;
i__61002_61006 = G__61011;
continue;
} else {
var temp__4657__auto___61012 = cljs.core.seq.call(null,seq__60999_61003);
if(temp__4657__auto___61012){
var seq__60999_61013__$1 = temp__4657__auto___61012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60999_61013__$1)){
var c__7357__auto___61014 = cljs.core.chunk_first.call(null,seq__60999_61013__$1);
var G__61015 = cljs.core.chunk_rest.call(null,seq__60999_61013__$1);
var G__61016 = c__7357__auto___61014;
var G__61017 = cljs.core.count.call(null,c__7357__auto___61014);
var G__61018 = (0);
seq__60999_61003 = G__61015;
chunk__61000_61004 = G__61016;
count__61001_61005 = G__61017;
i__61002_61006 = G__61018;
continue;
} else {
var c_61019 = cljs.core.first.call(null,seq__60999_61013__$1);
sb.append(cljs.compiler.escape_char.call(null,c_61019));

var G__61020 = cljs.core.next.call(null,seq__60999_61013__$1);
var G__61021 = null;
var G__61022 = (0);
var G__61023 = (0);
seq__60999_61003 = G__61020;
chunk__61000_61004 = G__61021;
count__61001_61005 = G__61022;
i__61002_61006 = G__61023;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7475__auto__,method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__49694__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__49694__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__61029_61034 = ast;
var map__61029_61035__$1 = ((((!((map__61029_61034 == null)))?((((map__61029_61034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61029_61034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61029_61034):map__61029_61034);
var env_61036 = cljs.core.get.call(null,map__61029_61035__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_61036))){
var map__61031_61037 = env_61036;
var map__61031_61038__$1 = ((((!((map__61031_61037 == null)))?((((map__61031_61037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61031_61037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61031_61037):map__61031_61037);
var line_61039 = cljs.core.get.call(null,map__61031_61038__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61040 = cljs.core.get.call(null,map__61031_61038__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__61031_61037,map__61031_61038__$1,line_61039,column_61040,map__61029_61034,map__61029_61035__$1,env_61036,val__49694__auto__){
return (function (m){
var minfo = (function (){var G__61033 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__61033,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__61033;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_61039 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__61031_61037,map__61031_61038__$1,line_61039,column_61040,map__61029_61034,map__61029_61035__$1,env_61036,val__49694__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_61040)?(column_61040 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__61031_61037,map__61031_61038__$1,line_61039,column_61040,map__61029_61034,map__61029_61035__$1,env_61036,val__49694__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__61031_61037,map__61031_61038__$1,line_61039,column_61040,map__61029_61034,map__61029_61035__$1,env_61036,val__49694__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__61031_61037,map__61031_61038__$1,line_61039,column_61040,map__61029_61034,map__61029_61035__$1,env_61036,val__49694__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__61031_61037,map__61031_61038__$1,line_61039,column_61040,map__61029_61034,map__61029_61035__$1,env_61036,val__49694__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__49694__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7658__auto__ = [];
var len__7651__auto___61047 = arguments.length;
var i__7652__auto___61048 = (0);
while(true){
if((i__7652__auto___61048 < len__7651__auto___61047)){
args__7658__auto__.push((arguments[i__7652__auto___61048]));

var G__61049 = (i__7652__auto___61048 + (1));
i__7652__auto___61048 = G__61049;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__61043_61050 = cljs.core.seq.call(null,xs);
var chunk__61044_61051 = null;
var count__61045_61052 = (0);
var i__61046_61053 = (0);
while(true){
if((i__61046_61053 < count__61045_61052)){
var x_61054 = cljs.core._nth.call(null,chunk__61044_61051,i__61046_61053);
if((x_61054 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_61054)){
cljs.compiler.emit.call(null,x_61054);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_61054)){
cljs.core.apply.call(null,cljs.compiler.emits,x_61054);
} else {
if(goog.isFunction(x_61054)){
x_61054.call(null);
} else {
var s_61055 = cljs.core.print_str.call(null,x_61054);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__61043_61050,chunk__61044_61051,count__61045_61052,i__61046_61053,s_61055,x_61054){
return (function (p1__61041_SHARP_){
return (p1__61041_SHARP_ + cljs.core.count.call(null,s_61055));
});})(seq__61043_61050,chunk__61044_61051,count__61045_61052,i__61046_61053,s_61055,x_61054))
);
}

cljs.core.print.call(null,s_61055);

}
}
}
}

var G__61056 = seq__61043_61050;
var G__61057 = chunk__61044_61051;
var G__61058 = count__61045_61052;
var G__61059 = (i__61046_61053 + (1));
seq__61043_61050 = G__61056;
chunk__61044_61051 = G__61057;
count__61045_61052 = G__61058;
i__61046_61053 = G__61059;
continue;
} else {
var temp__4657__auto___61060 = cljs.core.seq.call(null,seq__61043_61050);
if(temp__4657__auto___61060){
var seq__61043_61061__$1 = temp__4657__auto___61060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61043_61061__$1)){
var c__7357__auto___61062 = cljs.core.chunk_first.call(null,seq__61043_61061__$1);
var G__61063 = cljs.core.chunk_rest.call(null,seq__61043_61061__$1);
var G__61064 = c__7357__auto___61062;
var G__61065 = cljs.core.count.call(null,c__7357__auto___61062);
var G__61066 = (0);
seq__61043_61050 = G__61063;
chunk__61044_61051 = G__61064;
count__61045_61052 = G__61065;
i__61046_61053 = G__61066;
continue;
} else {
var x_61067 = cljs.core.first.call(null,seq__61043_61061__$1);
if((x_61067 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_61067)){
cljs.compiler.emit.call(null,x_61067);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_61067)){
cljs.core.apply.call(null,cljs.compiler.emits,x_61067);
} else {
if(goog.isFunction(x_61067)){
x_61067.call(null);
} else {
var s_61068 = cljs.core.print_str.call(null,x_61067);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__61043_61050,chunk__61044_61051,count__61045_61052,i__61046_61053,s_61068,x_61067,seq__61043_61061__$1,temp__4657__auto___61060){
return (function (p1__61041_SHARP_){
return (p1__61041_SHARP_ + cljs.core.count.call(null,s_61068));
});})(seq__61043_61050,chunk__61044_61051,count__61045_61052,i__61046_61053,s_61068,x_61067,seq__61043_61061__$1,temp__4657__auto___61060))
);
}

cljs.core.print.call(null,s_61068);

}
}
}
}

var G__61069 = cljs.core.next.call(null,seq__61043_61061__$1);
var G__61070 = null;
var G__61071 = (0);
var G__61072 = (0);
seq__61043_61050 = G__61069;
chunk__61044_61051 = G__61070;
count__61045_61052 = G__61071;
i__61046_61053 = G__61072;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq61042){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61042));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7658__auto__ = [];
var len__7651__auto___61077 = arguments.length;
var i__7652__auto___61078 = (0);
while(true){
if((i__7652__auto___61078 < len__7651__auto___61077)){
args__7658__auto__.push((arguments[i__7652__auto___61078]));

var G__61079 = (i__7652__auto___61078 + (1));
i__7652__auto___61078 = G__61079;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__61074){
var map__61075 = p__61074;
var map__61075__$1 = ((((!((map__61075 == null)))?((((map__61075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61075):map__61075);
var m = map__61075__$1;
var gen_line = cljs.core.get.call(null,map__61075__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq61073){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61073));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_61082_61084 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_61083_61085 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_61082_61084,_STAR_print_fn_STAR_61083_61085,sb__7532__auto__){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_61082_61084,_STAR_print_fn_STAR_61083_61085,sb__7532__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_61083_61085;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_61082_61084;
}
return [cljs.core.str(sb__7532__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7475__auto__,method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__61086 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__61086,(0),null);
var flags = cljs.core.nth.call(null,vec__61086,(1),null);
var pattern = cljs.core.nth.call(null,vec__61086,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__61090){
var map__61091 = p__61090;
var map__61091__$1 = ((((!((map__61091 == null)))?((((map__61091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61091):map__61091);
var arg = map__61091__$1;
var info = cljs.core.get.call(null,map__61091__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__61091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__61091__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__6543__auto__ = js_module_name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__61093 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__61093);
} else {
return G__61093;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__61094){
var map__61095 = p__61094;
var map__61095__$1 = ((((!((map__61095 == null)))?((((map__61095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61095):map__61095);
var arg = map__61095__$1;
var env = cljs.core.get.call(null,map__61095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__61095__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__61095__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__61095__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__61097 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__61097__$1 = ((((!((map__61097 == null)))?((((map__61097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61097):map__61097);
var name = cljs.core.get.call(null,map__61097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__61099){
var map__61100 = p__61099;
var map__61100__$1 = ((((!((map__61100 == null)))?((((map__61100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61100):map__61100);
var expr = cljs.core.get.call(null,map__61100__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__61100__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__61100__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__61102_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__61102_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__61103){
var map__61104 = p__61103;
var map__61104__$1 = ((((!((map__61104 == null)))?((((map__61104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61104):map__61104);
var env = cljs.core.get.call(null,map__61104__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__61104__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__61104__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__61106){
var map__61107 = p__61106;
var map__61107__$1 = ((((!((map__61107 == null)))?((((map__61107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61107):map__61107);
var items = cljs.core.get.call(null,map__61107__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__61107__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__61109){
var map__61110 = p__61109;
var map__61110__$1 = ((((!((map__61110 == null)))?((((map__61110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61110):map__61110);
var items = cljs.core.get.call(null,map__61110__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__61110__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_61112 = cljs.core.count.call(null,items);
if((cnt_61112 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_61112,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__61113_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__61113_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__61114){
var map__61115 = p__61114;
var map__61115__$1 = ((((!((map__61115 == null)))?((((map__61115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61115):map__61115);
var items = cljs.core.get.call(null,map__61115__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__61115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__61117){
var map__61118 = p__61117;
var map__61118__$1 = ((((!((map__61118 == null)))?((((map__61118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61118):map__61118);
var items = cljs.core.get.call(null,map__61118__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__61118__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__61118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___61136 = cljs.core.seq.call(null,items);
if(temp__4657__auto___61136){
var items_61137__$1 = temp__4657__auto___61136;
var vec__61120_61138 = items_61137__$1;
var seq__61121_61139 = cljs.core.seq.call(null,vec__61120_61138);
var first__61122_61140 = cljs.core.first.call(null,seq__61121_61139);
var seq__61121_61141__$1 = cljs.core.next.call(null,seq__61121_61139);
var vec__61123_61142 = first__61122_61140;
var k_61143 = cljs.core.nth.call(null,vec__61123_61142,(0),null);
var v_61144 = cljs.core.nth.call(null,vec__61123_61142,(1),null);
var r_61145 = seq__61121_61141__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_61143),"\": ",v_61144);

var seq__61126_61146 = cljs.core.seq.call(null,r_61145);
var chunk__61127_61147 = null;
var count__61128_61148 = (0);
var i__61129_61149 = (0);
while(true){
if((i__61129_61149 < count__61128_61148)){
var vec__61130_61150 = cljs.core._nth.call(null,chunk__61127_61147,i__61129_61149);
var k_61151__$1 = cljs.core.nth.call(null,vec__61130_61150,(0),null);
var v_61152__$1 = cljs.core.nth.call(null,vec__61130_61150,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_61151__$1),"\": ",v_61152__$1);

var G__61153 = seq__61126_61146;
var G__61154 = chunk__61127_61147;
var G__61155 = count__61128_61148;
var G__61156 = (i__61129_61149 + (1));
seq__61126_61146 = G__61153;
chunk__61127_61147 = G__61154;
count__61128_61148 = G__61155;
i__61129_61149 = G__61156;
continue;
} else {
var temp__4657__auto___61157__$1 = cljs.core.seq.call(null,seq__61126_61146);
if(temp__4657__auto___61157__$1){
var seq__61126_61158__$1 = temp__4657__auto___61157__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61126_61158__$1)){
var c__7357__auto___61159 = cljs.core.chunk_first.call(null,seq__61126_61158__$1);
var G__61160 = cljs.core.chunk_rest.call(null,seq__61126_61158__$1);
var G__61161 = c__7357__auto___61159;
var G__61162 = cljs.core.count.call(null,c__7357__auto___61159);
var G__61163 = (0);
seq__61126_61146 = G__61160;
chunk__61127_61147 = G__61161;
count__61128_61148 = G__61162;
i__61129_61149 = G__61163;
continue;
} else {
var vec__61133_61164 = cljs.core.first.call(null,seq__61126_61158__$1);
var k_61165__$1 = cljs.core.nth.call(null,vec__61133_61164,(0),null);
var v_61166__$1 = cljs.core.nth.call(null,vec__61133_61164,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_61165__$1),"\": ",v_61166__$1);

var G__61167 = cljs.core.next.call(null,seq__61126_61158__$1);
var G__61168 = null;
var G__61169 = (0);
var G__61170 = (0);
seq__61126_61146 = G__61167;
chunk__61127_61147 = G__61168;
count__61128_61148 = G__61169;
i__61129_61149 = G__61170;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__61171){
var map__61172 = p__61171;
var map__61172__$1 = ((((!((map__61172 == null)))?((((map__61172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61172):map__61172);
var form = cljs.core.get.call(null,map__61172__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__61172__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__61174){
var map__61177 = p__61174;
var map__61177__$1 = ((((!((map__61177 == null)))?((((map__61177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61177):map__61177);
var op = cljs.core.get.call(null,map__61177__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__61177__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6531__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6531__auto__){
var and__6531__auto____$1 = form;
if(cljs.core.truth_(and__6531__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__61179){
var map__61182 = p__61179;
var map__61182__$1 = ((((!((map__61182 == null)))?((((map__61182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61182):map__61182);
var op = cljs.core.get.call(null,map__61182__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__61182__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6543__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__61184){
var map__61185 = p__61184;
var map__61185__$1 = ((((!((map__61185 == null)))?((((map__61185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61185):map__61185);
var test = cljs.core.get.call(null,map__61185__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__61185__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__61185__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__61185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__61185__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6543__auto__ = unchecked;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__61187){
var map__61188 = p__61187;
var map__61188__$1 = ((((!((map__61188 == null)))?((((map__61188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61188):map__61188);
var v = cljs.core.get.call(null,map__61188__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__61188__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__61188__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__61188__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__61188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__61190_61208 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__61191_61209 = null;
var count__61192_61210 = (0);
var i__61193_61211 = (0);
while(true){
if((i__61193_61211 < count__61192_61210)){
var vec__61194_61212 = cljs.core._nth.call(null,chunk__61191_61209,i__61193_61211);
var ts_61213 = cljs.core.nth.call(null,vec__61194_61212,(0),null);
var then_61214 = cljs.core.nth.call(null,vec__61194_61212,(1),null);
var seq__61197_61215 = cljs.core.seq.call(null,ts_61213);
var chunk__61198_61216 = null;
var count__61199_61217 = (0);
var i__61200_61218 = (0);
while(true){
if((i__61200_61218 < count__61199_61217)){
var test_61219 = cljs.core._nth.call(null,chunk__61198_61216,i__61200_61218);
cljs.compiler.emitln.call(null,"case ",test_61219,":");

var G__61220 = seq__61197_61215;
var G__61221 = chunk__61198_61216;
var G__61222 = count__61199_61217;
var G__61223 = (i__61200_61218 + (1));
seq__61197_61215 = G__61220;
chunk__61198_61216 = G__61221;
count__61199_61217 = G__61222;
i__61200_61218 = G__61223;
continue;
} else {
var temp__4657__auto___61224 = cljs.core.seq.call(null,seq__61197_61215);
if(temp__4657__auto___61224){
var seq__61197_61225__$1 = temp__4657__auto___61224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61197_61225__$1)){
var c__7357__auto___61226 = cljs.core.chunk_first.call(null,seq__61197_61225__$1);
var G__61227 = cljs.core.chunk_rest.call(null,seq__61197_61225__$1);
var G__61228 = c__7357__auto___61226;
var G__61229 = cljs.core.count.call(null,c__7357__auto___61226);
var G__61230 = (0);
seq__61197_61215 = G__61227;
chunk__61198_61216 = G__61228;
count__61199_61217 = G__61229;
i__61200_61218 = G__61230;
continue;
} else {
var test_61231 = cljs.core.first.call(null,seq__61197_61225__$1);
cljs.compiler.emitln.call(null,"case ",test_61231,":");

var G__61232 = cljs.core.next.call(null,seq__61197_61225__$1);
var G__61233 = null;
var G__61234 = (0);
var G__61235 = (0);
seq__61197_61215 = G__61232;
chunk__61198_61216 = G__61233;
count__61199_61217 = G__61234;
i__61200_61218 = G__61235;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_61214);
} else {
cljs.compiler.emitln.call(null,then_61214);
}

cljs.compiler.emitln.call(null,"break;");

var G__61236 = seq__61190_61208;
var G__61237 = chunk__61191_61209;
var G__61238 = count__61192_61210;
var G__61239 = (i__61193_61211 + (1));
seq__61190_61208 = G__61236;
chunk__61191_61209 = G__61237;
count__61192_61210 = G__61238;
i__61193_61211 = G__61239;
continue;
} else {
var temp__4657__auto___61240 = cljs.core.seq.call(null,seq__61190_61208);
if(temp__4657__auto___61240){
var seq__61190_61241__$1 = temp__4657__auto___61240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61190_61241__$1)){
var c__7357__auto___61242 = cljs.core.chunk_first.call(null,seq__61190_61241__$1);
var G__61243 = cljs.core.chunk_rest.call(null,seq__61190_61241__$1);
var G__61244 = c__7357__auto___61242;
var G__61245 = cljs.core.count.call(null,c__7357__auto___61242);
var G__61246 = (0);
seq__61190_61208 = G__61243;
chunk__61191_61209 = G__61244;
count__61192_61210 = G__61245;
i__61193_61211 = G__61246;
continue;
} else {
var vec__61201_61247 = cljs.core.first.call(null,seq__61190_61241__$1);
var ts_61248 = cljs.core.nth.call(null,vec__61201_61247,(0),null);
var then_61249 = cljs.core.nth.call(null,vec__61201_61247,(1),null);
var seq__61204_61250 = cljs.core.seq.call(null,ts_61248);
var chunk__61205_61251 = null;
var count__61206_61252 = (0);
var i__61207_61253 = (0);
while(true){
if((i__61207_61253 < count__61206_61252)){
var test_61254 = cljs.core._nth.call(null,chunk__61205_61251,i__61207_61253);
cljs.compiler.emitln.call(null,"case ",test_61254,":");

var G__61255 = seq__61204_61250;
var G__61256 = chunk__61205_61251;
var G__61257 = count__61206_61252;
var G__61258 = (i__61207_61253 + (1));
seq__61204_61250 = G__61255;
chunk__61205_61251 = G__61256;
count__61206_61252 = G__61257;
i__61207_61253 = G__61258;
continue;
} else {
var temp__4657__auto___61259__$1 = cljs.core.seq.call(null,seq__61204_61250);
if(temp__4657__auto___61259__$1){
var seq__61204_61260__$1 = temp__4657__auto___61259__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61204_61260__$1)){
var c__7357__auto___61261 = cljs.core.chunk_first.call(null,seq__61204_61260__$1);
var G__61262 = cljs.core.chunk_rest.call(null,seq__61204_61260__$1);
var G__61263 = c__7357__auto___61261;
var G__61264 = cljs.core.count.call(null,c__7357__auto___61261);
var G__61265 = (0);
seq__61204_61250 = G__61262;
chunk__61205_61251 = G__61263;
count__61206_61252 = G__61264;
i__61207_61253 = G__61265;
continue;
} else {
var test_61266 = cljs.core.first.call(null,seq__61204_61260__$1);
cljs.compiler.emitln.call(null,"case ",test_61266,":");

var G__61267 = cljs.core.next.call(null,seq__61204_61260__$1);
var G__61268 = null;
var G__61269 = (0);
var G__61270 = (0);
seq__61204_61250 = G__61267;
chunk__61205_61251 = G__61268;
count__61206_61252 = G__61269;
i__61207_61253 = G__61270;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_61249);
} else {
cljs.compiler.emitln.call(null,then_61249);
}

cljs.compiler.emitln.call(null,"break;");

var G__61271 = cljs.core.next.call(null,seq__61190_61241__$1);
var G__61272 = null;
var G__61273 = (0);
var G__61274 = (0);
seq__61190_61208 = G__61271;
chunk__61191_61209 = G__61272;
count__61192_61210 = G__61273;
i__61193_61211 = G__61274;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__61275){
var map__61276 = p__61275;
var map__61276__$1 = ((((!((map__61276 == null)))?((((map__61276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61276):map__61276);
var throw$ = cljs.core.get.call(null,map__61276__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__61276__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__61283 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__61283,(0),null);
var rstr = cljs.core.nth.call(null,vec__61283,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__61283,fstr,rstr,ret_t,axstr){
return (function (p1__61278_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__61278_SHARP_);
});})(idx,vec__61283,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__61286 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__61286),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__61286;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__61287_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__61287_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__61294 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__61295 = cljs.core.seq.call(null,vec__61294);
var first__61296 = cljs.core.first.call(null,seq__61295);
var seq__61295__$1 = cljs.core.next.call(null,seq__61295);
var p = first__61296;
var first__61296__$1 = cljs.core.first.call(null,seq__61295__$1);
var seq__61295__$2 = cljs.core.next.call(null,seq__61295__$1);
var ts = first__61296__$1;
var first__61296__$2 = cljs.core.first.call(null,seq__61295__$2);
var seq__61295__$3 = cljs.core.next.call(null,seq__61295__$2);
var n = first__61296__$2;
var xs = seq__61295__$3;
if(cljs.core.truth_((function (){var and__6531__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__6531__auto__){
var and__6531__auto____$1 = ts;
if(cljs.core.truth_(and__6531__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__61297 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__61298 = cljs.core.seq.call(null,vec__61297);
var first__61299 = cljs.core.first.call(null,seq__61298);
var seq__61298__$1 = cljs.core.next.call(null,seq__61298);
var p = first__61299;
var first__61299__$1 = cljs.core.first.call(null,seq__61298__$1);
var seq__61298__$2 = cljs.core.next.call(null,seq__61298__$1);
var ts = first__61299__$1;
var xs = seq__61298__$2;
if(cljs.core.truth_((function (){var and__6531__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__6531__auto__){
var and__6531__auto____$1 = ts;
if(cljs.core.truth_(and__6531__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args61301 = [];
var len__7651__auto___61336 = arguments.length;
var i__7652__auto___61337 = (0);
while(true){
if((i__7652__auto___61337 < len__7651__auto___61336)){
args61301.push((arguments[i__7652__auto___61337]));

var G__61338 = (i__7652__auto___61337 + (1));
i__7652__auto___61337 = G__61338;
continue;
} else {
}
break;
}

var G__61303 = args61301.length;
switch (G__61303) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61301.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__61325 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__61300_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__61300_SHARP_);
} else {
return p1__61300_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__61326 = cljs.core.seq.call(null,vec__61325);
var first__61327 = cljs.core.first.call(null,seq__61326);
var seq__61326__$1 = cljs.core.next.call(null,seq__61326);
var x = first__61327;
var ys = seq__61326__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__61328 = cljs.core.seq.call(null,ys);
var chunk__61329 = null;
var count__61330 = (0);
var i__61331 = (0);
while(true){
if((i__61331 < count__61330)){
var next_line = cljs.core._nth.call(null,chunk__61329,i__61331);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__61340 = seq__61328;
var G__61341 = chunk__61329;
var G__61342 = count__61330;
var G__61343 = (i__61331 + (1));
seq__61328 = G__61340;
chunk__61329 = G__61341;
count__61330 = G__61342;
i__61331 = G__61343;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61328);
if(temp__4657__auto__){
var seq__61328__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61328__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__61328__$1);
var G__61344 = cljs.core.chunk_rest.call(null,seq__61328__$1);
var G__61345 = c__7357__auto__;
var G__61346 = cljs.core.count.call(null,c__7357__auto__);
var G__61347 = (0);
seq__61328 = G__61344;
chunk__61329 = G__61345;
count__61330 = G__61346;
i__61331 = G__61347;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__61328__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__61348 = cljs.core.next.call(null,seq__61328__$1);
var G__61349 = null;
var G__61350 = (0);
var G__61351 = (0);
seq__61328 = G__61348;
chunk__61329 = G__61349;
count__61330 = G__61350;
i__61331 = G__61351;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__61332_61352 = cljs.core.seq.call(null,docs__$2);
var chunk__61333_61353 = null;
var count__61334_61354 = (0);
var i__61335_61355 = (0);
while(true){
if((i__61335_61355 < count__61334_61354)){
var e_61356 = cljs.core._nth.call(null,chunk__61333_61353,i__61335_61355);
if(cljs.core.truth_(e_61356)){
print_comment_lines.call(null,e_61356);
} else {
}

var G__61357 = seq__61332_61352;
var G__61358 = chunk__61333_61353;
var G__61359 = count__61334_61354;
var G__61360 = (i__61335_61355 + (1));
seq__61332_61352 = G__61357;
chunk__61333_61353 = G__61358;
count__61334_61354 = G__61359;
i__61335_61355 = G__61360;
continue;
} else {
var temp__4657__auto___61361 = cljs.core.seq.call(null,seq__61332_61352);
if(temp__4657__auto___61361){
var seq__61332_61362__$1 = temp__4657__auto___61361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61332_61362__$1)){
var c__7357__auto___61363 = cljs.core.chunk_first.call(null,seq__61332_61362__$1);
var G__61364 = cljs.core.chunk_rest.call(null,seq__61332_61362__$1);
var G__61365 = c__7357__auto___61363;
var G__61366 = cljs.core.count.call(null,c__7357__auto___61363);
var G__61367 = (0);
seq__61332_61352 = G__61364;
chunk__61333_61353 = G__61365;
count__61334_61354 = G__61366;
i__61335_61355 = G__61367;
continue;
} else {
var e_61368 = cljs.core.first.call(null,seq__61332_61362__$1);
if(cljs.core.truth_(e_61368)){
print_comment_lines.call(null,e_61368);
} else {
}

var G__61369 = cljs.core.next.call(null,seq__61332_61362__$1);
var G__61370 = null;
var G__61371 = (0);
var G__61372 = (0);
seq__61332_61352 = G__61369;
chunk__61333_61353 = G__61370;
count__61334_61354 = G__61371;
i__61335_61355 = G__61372;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__6531__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__61374_SHARP_){
return goog.string.startsWith(p1__61374_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = opts;
if(cljs.core.truth_(and__6531__auto____$1)){
var and__6531__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6531__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__6531__auto____$2;
}
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__61375){
var map__61376 = p__61375;
var map__61376__$1 = ((((!((map__61376 == null)))?((((map__61376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61376):map__61376);
var name = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6543__auto__ = init;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__6531__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6531__auto__)){
return test;
} else {
return and__6531__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__61378){
var map__61399 = p__61378;
var map__61399__$1 = ((((!((map__61399 == null)))?((((map__61399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61399):map__61399);
var name = cljs.core.get.call(null,map__61399__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__61399__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__61399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__61401_61419 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__61402_61420 = null;
var count__61403_61421 = (0);
var i__61404_61422 = (0);
while(true){
if((i__61404_61422 < count__61403_61421)){
var vec__61405_61423 = cljs.core._nth.call(null,chunk__61402_61420,i__61404_61422);
var i_61424 = cljs.core.nth.call(null,vec__61405_61423,(0),null);
var param_61425 = cljs.core.nth.call(null,vec__61405_61423,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_61425);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__61426 = seq__61401_61419;
var G__61427 = chunk__61402_61420;
var G__61428 = count__61403_61421;
var G__61429 = (i__61404_61422 + (1));
seq__61401_61419 = G__61426;
chunk__61402_61420 = G__61427;
count__61403_61421 = G__61428;
i__61404_61422 = G__61429;
continue;
} else {
var temp__4657__auto___61430 = cljs.core.seq.call(null,seq__61401_61419);
if(temp__4657__auto___61430){
var seq__61401_61431__$1 = temp__4657__auto___61430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61401_61431__$1)){
var c__7357__auto___61432 = cljs.core.chunk_first.call(null,seq__61401_61431__$1);
var G__61433 = cljs.core.chunk_rest.call(null,seq__61401_61431__$1);
var G__61434 = c__7357__auto___61432;
var G__61435 = cljs.core.count.call(null,c__7357__auto___61432);
var G__61436 = (0);
seq__61401_61419 = G__61433;
chunk__61402_61420 = G__61434;
count__61403_61421 = G__61435;
i__61404_61422 = G__61436;
continue;
} else {
var vec__61408_61437 = cljs.core.first.call(null,seq__61401_61431__$1);
var i_61438 = cljs.core.nth.call(null,vec__61408_61437,(0),null);
var param_61439 = cljs.core.nth.call(null,vec__61408_61437,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_61439);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__61440 = cljs.core.next.call(null,seq__61401_61431__$1);
var G__61441 = null;
var G__61442 = (0);
var G__61443 = (0);
seq__61401_61419 = G__61440;
chunk__61402_61420 = G__61441;
count__61403_61421 = G__61442;
i__61404_61422 = G__61443;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__61411_61444 = cljs.core.seq.call(null,params);
var chunk__61412_61445 = null;
var count__61413_61446 = (0);
var i__61414_61447 = (0);
while(true){
if((i__61414_61447 < count__61413_61446)){
var param_61448 = cljs.core._nth.call(null,chunk__61412_61445,i__61414_61447);
cljs.compiler.emit.call(null,param_61448);

if(cljs.core._EQ_.call(null,param_61448,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61449 = seq__61411_61444;
var G__61450 = chunk__61412_61445;
var G__61451 = count__61413_61446;
var G__61452 = (i__61414_61447 + (1));
seq__61411_61444 = G__61449;
chunk__61412_61445 = G__61450;
count__61413_61446 = G__61451;
i__61414_61447 = G__61452;
continue;
} else {
var temp__4657__auto___61453 = cljs.core.seq.call(null,seq__61411_61444);
if(temp__4657__auto___61453){
var seq__61411_61454__$1 = temp__4657__auto___61453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61411_61454__$1)){
var c__7357__auto___61455 = cljs.core.chunk_first.call(null,seq__61411_61454__$1);
var G__61456 = cljs.core.chunk_rest.call(null,seq__61411_61454__$1);
var G__61457 = c__7357__auto___61455;
var G__61458 = cljs.core.count.call(null,c__7357__auto___61455);
var G__61459 = (0);
seq__61411_61444 = G__61456;
chunk__61412_61445 = G__61457;
count__61413_61446 = G__61458;
i__61414_61447 = G__61459;
continue;
} else {
var param_61460 = cljs.core.first.call(null,seq__61411_61454__$1);
cljs.compiler.emit.call(null,param_61460);

if(cljs.core._EQ_.call(null,param_61460,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61461 = cljs.core.next.call(null,seq__61411_61454__$1);
var G__61462 = null;
var G__61463 = (0);
var G__61464 = (0);
seq__61411_61444 = G__61461;
chunk__61412_61445 = G__61462;
count__61413_61446 = G__61463;
i__61414_61447 = G__61464;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__61415_61465 = cljs.core.seq.call(null,params);
var chunk__61416_61466 = null;
var count__61417_61467 = (0);
var i__61418_61468 = (0);
while(true){
if((i__61418_61468 < count__61417_61467)){
var param_61469 = cljs.core._nth.call(null,chunk__61416_61466,i__61418_61468);
cljs.compiler.emit.call(null,param_61469);

if(cljs.core._EQ_.call(null,param_61469,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61470 = seq__61415_61465;
var G__61471 = chunk__61416_61466;
var G__61472 = count__61417_61467;
var G__61473 = (i__61418_61468 + (1));
seq__61415_61465 = G__61470;
chunk__61416_61466 = G__61471;
count__61417_61467 = G__61472;
i__61418_61468 = G__61473;
continue;
} else {
var temp__4657__auto___61474 = cljs.core.seq.call(null,seq__61415_61465);
if(temp__4657__auto___61474){
var seq__61415_61475__$1 = temp__4657__auto___61474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61415_61475__$1)){
var c__7357__auto___61476 = cljs.core.chunk_first.call(null,seq__61415_61475__$1);
var G__61477 = cljs.core.chunk_rest.call(null,seq__61415_61475__$1);
var G__61478 = c__7357__auto___61476;
var G__61479 = cljs.core.count.call(null,c__7357__auto___61476);
var G__61480 = (0);
seq__61415_61465 = G__61477;
chunk__61416_61466 = G__61478;
count__61417_61467 = G__61479;
i__61418_61468 = G__61480;
continue;
} else {
var param_61481 = cljs.core.first.call(null,seq__61415_61475__$1);
cljs.compiler.emit.call(null,param_61481);

if(cljs.core._EQ_.call(null,param_61481,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61482 = cljs.core.next.call(null,seq__61415_61475__$1);
var G__61483 = null;
var G__61484 = (0);
var G__61485 = (0);
seq__61415_61465 = G__61482;
chunk__61416_61466 = G__61483;
count__61417_61467 = G__61484;
i__61418_61468 = G__61485;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__61490 = cljs.core.seq.call(null,params);
var chunk__61491 = null;
var count__61492 = (0);
var i__61493 = (0);
while(true){
if((i__61493 < count__61492)){
var param = cljs.core._nth.call(null,chunk__61491,i__61493);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61494 = seq__61490;
var G__61495 = chunk__61491;
var G__61496 = count__61492;
var G__61497 = (i__61493 + (1));
seq__61490 = G__61494;
chunk__61491 = G__61495;
count__61492 = G__61496;
i__61493 = G__61497;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61490);
if(temp__4657__auto__){
var seq__61490__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61490__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__61490__$1);
var G__61498 = cljs.core.chunk_rest.call(null,seq__61490__$1);
var G__61499 = c__7357__auto__;
var G__61500 = cljs.core.count.call(null,c__7357__auto__);
var G__61501 = (0);
seq__61490 = G__61498;
chunk__61491 = G__61499;
count__61492 = G__61500;
i__61493 = G__61501;
continue;
} else {
var param = cljs.core.first.call(null,seq__61490__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61502 = cljs.core.next.call(null,seq__61490__$1);
var G__61503 = null;
var G__61504 = (0);
var G__61505 = (0);
seq__61490 = G__61502;
chunk__61491 = G__61503;
count__61492 = G__61504;
i__61493 = G__61505;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__61506){
var map__61509 = p__61506;
var map__61509__$1 = ((((!((map__61509 == null)))?((((map__61509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61509):map__61509);
var type = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__61509__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__61511){
var map__61522 = p__61511;
var map__61522__$1 = ((((!((map__61522 == null)))?((((map__61522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61522):map__61522);
var f = map__61522__$1;
var type = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__61522__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_61532__$1 = (function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_61533 = cljs.compiler.munge.call(null,name_61532__$1);
var delegate_name_61534 = [cljs.core.str(mname_61533),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_61534," = function (");

var seq__61524_61535 = cljs.core.seq.call(null,params);
var chunk__61525_61536 = null;
var count__61526_61537 = (0);
var i__61527_61538 = (0);
while(true){
if((i__61527_61538 < count__61526_61537)){
var param_61539 = cljs.core._nth.call(null,chunk__61525_61536,i__61527_61538);
cljs.compiler.emit.call(null,param_61539);

if(cljs.core._EQ_.call(null,param_61539,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61540 = seq__61524_61535;
var G__61541 = chunk__61525_61536;
var G__61542 = count__61526_61537;
var G__61543 = (i__61527_61538 + (1));
seq__61524_61535 = G__61540;
chunk__61525_61536 = G__61541;
count__61526_61537 = G__61542;
i__61527_61538 = G__61543;
continue;
} else {
var temp__4657__auto___61544 = cljs.core.seq.call(null,seq__61524_61535);
if(temp__4657__auto___61544){
var seq__61524_61545__$1 = temp__4657__auto___61544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61524_61545__$1)){
var c__7357__auto___61546 = cljs.core.chunk_first.call(null,seq__61524_61545__$1);
var G__61547 = cljs.core.chunk_rest.call(null,seq__61524_61545__$1);
var G__61548 = c__7357__auto___61546;
var G__61549 = cljs.core.count.call(null,c__7357__auto___61546);
var G__61550 = (0);
seq__61524_61535 = G__61547;
chunk__61525_61536 = G__61548;
count__61526_61537 = G__61549;
i__61527_61538 = G__61550;
continue;
} else {
var param_61551 = cljs.core.first.call(null,seq__61524_61545__$1);
cljs.compiler.emit.call(null,param_61551);

if(cljs.core._EQ_.call(null,param_61551,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61552 = cljs.core.next.call(null,seq__61524_61545__$1);
var G__61553 = null;
var G__61554 = (0);
var G__61555 = (0);
seq__61524_61535 = G__61552;
chunk__61525_61536 = G__61553;
count__61526_61537 = G__61554;
i__61527_61538 = G__61555;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_61533," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_61556 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_61556,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_61534,".call(this,");

var seq__61528_61557 = cljs.core.seq.call(null,params);
var chunk__61529_61558 = null;
var count__61530_61559 = (0);
var i__61531_61560 = (0);
while(true){
if((i__61531_61560 < count__61530_61559)){
var param_61561 = cljs.core._nth.call(null,chunk__61529_61558,i__61531_61560);
cljs.compiler.emit.call(null,param_61561);

if(cljs.core._EQ_.call(null,param_61561,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61562 = seq__61528_61557;
var G__61563 = chunk__61529_61558;
var G__61564 = count__61530_61559;
var G__61565 = (i__61531_61560 + (1));
seq__61528_61557 = G__61562;
chunk__61529_61558 = G__61563;
count__61530_61559 = G__61564;
i__61531_61560 = G__61565;
continue;
} else {
var temp__4657__auto___61566 = cljs.core.seq.call(null,seq__61528_61557);
if(temp__4657__auto___61566){
var seq__61528_61567__$1 = temp__4657__auto___61566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61528_61567__$1)){
var c__7357__auto___61568 = cljs.core.chunk_first.call(null,seq__61528_61567__$1);
var G__61569 = cljs.core.chunk_rest.call(null,seq__61528_61567__$1);
var G__61570 = c__7357__auto___61568;
var G__61571 = cljs.core.count.call(null,c__7357__auto___61568);
var G__61572 = (0);
seq__61528_61557 = G__61569;
chunk__61529_61558 = G__61570;
count__61530_61559 = G__61571;
i__61531_61560 = G__61572;
continue;
} else {
var param_61573 = cljs.core.first.call(null,seq__61528_61567__$1);
cljs.compiler.emit.call(null,param_61573);

if(cljs.core._EQ_.call(null,param_61573,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__61574 = cljs.core.next.call(null,seq__61528_61567__$1);
var G__61575 = null;
var G__61576 = (0);
var G__61577 = (0);
seq__61528_61557 = G__61574;
chunk__61529_61558 = G__61575;
count__61530_61559 = G__61576;
i__61531_61560 = G__61577;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_61533,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_61533,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_61532__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_61533,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_61534,";");

cljs.compiler.emitln.call(null,"return ",mname_61533,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__61581){
var map__61582 = p__61581;
var map__61582__$1 = ((((!((map__61582 == null)))?((((map__61582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61582):map__61582);
var name = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__61582__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__61578_SHARP_){
var and__6531__auto__ = p1__61578_SHARP_;
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__61578_SHARP_));
} else {
return and__6531__auto__;
}
});})(map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_61617__$1 = (function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_61618 = cljs.compiler.munge.call(null,name_61617__$1);
var maxparams_61619 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_61620 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_61617__$1,mname_61618,maxparams_61619,loop_locals,map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_61618),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_61617__$1,mname_61618,maxparams_61619,loop_locals,map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_61621 = cljs.core.sort_by.call(null,((function (name_61617__$1,mname_61618,maxparams_61619,mmap_61620,loop_locals,map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__61579_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__61579_SHARP_)));
});})(name_61617__$1,mname_61618,maxparams_61619,mmap_61620,loop_locals,map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_61620));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_61618," = null;");

var seq__61584_61622 = cljs.core.seq.call(null,ms_61621);
var chunk__61585_61623 = null;
var count__61586_61624 = (0);
var i__61587_61625 = (0);
while(true){
if((i__61587_61625 < count__61586_61624)){
var vec__61588_61626 = cljs.core._nth.call(null,chunk__61585_61623,i__61587_61625);
var n_61627 = cljs.core.nth.call(null,vec__61588_61626,(0),null);
var meth_61628 = cljs.core.nth.call(null,vec__61588_61626,(1),null);
cljs.compiler.emits.call(null,"var ",n_61627," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_61628))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_61628);
} else {
cljs.compiler.emit_fn_method.call(null,meth_61628);
}

cljs.compiler.emitln.call(null,";");

var G__61629 = seq__61584_61622;
var G__61630 = chunk__61585_61623;
var G__61631 = count__61586_61624;
var G__61632 = (i__61587_61625 + (1));
seq__61584_61622 = G__61629;
chunk__61585_61623 = G__61630;
count__61586_61624 = G__61631;
i__61587_61625 = G__61632;
continue;
} else {
var temp__4657__auto___61633 = cljs.core.seq.call(null,seq__61584_61622);
if(temp__4657__auto___61633){
var seq__61584_61634__$1 = temp__4657__auto___61633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61584_61634__$1)){
var c__7357__auto___61635 = cljs.core.chunk_first.call(null,seq__61584_61634__$1);
var G__61636 = cljs.core.chunk_rest.call(null,seq__61584_61634__$1);
var G__61637 = c__7357__auto___61635;
var G__61638 = cljs.core.count.call(null,c__7357__auto___61635);
var G__61639 = (0);
seq__61584_61622 = G__61636;
chunk__61585_61623 = G__61637;
count__61586_61624 = G__61638;
i__61587_61625 = G__61639;
continue;
} else {
var vec__61591_61640 = cljs.core.first.call(null,seq__61584_61634__$1);
var n_61641 = cljs.core.nth.call(null,vec__61591_61640,(0),null);
var meth_61642 = cljs.core.nth.call(null,vec__61591_61640,(1),null);
cljs.compiler.emits.call(null,"var ",n_61641," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_61642))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_61642);
} else {
cljs.compiler.emit_fn_method.call(null,meth_61642);
}

cljs.compiler.emitln.call(null,";");

var G__61643 = cljs.core.next.call(null,seq__61584_61634__$1);
var G__61644 = null;
var G__61645 = (0);
var G__61646 = (0);
seq__61584_61622 = G__61643;
chunk__61585_61623 = G__61644;
count__61586_61624 = G__61645;
i__61587_61625 = G__61646;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_61618," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_61619),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_61619)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_61619));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__61594_61647 = cljs.core.seq.call(null,ms_61621);
var chunk__61595_61648 = null;
var count__61596_61649 = (0);
var i__61597_61650 = (0);
while(true){
if((i__61597_61650 < count__61596_61649)){
var vec__61598_61651 = cljs.core._nth.call(null,chunk__61595_61648,i__61597_61650);
var n_61652 = cljs.core.nth.call(null,vec__61598_61651,(0),null);
var meth_61653 = cljs.core.nth.call(null,vec__61598_61651,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_61653))){
cljs.compiler.emitln.call(null,"default:");

var restarg_61654 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_61654," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_61655 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_61654," = new cljs.core.IndexedSeq(",a_61655,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_61652,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_61619)),(((cljs.core.count.call(null,maxparams_61619) > (1)))?", ":null),restarg_61654,");");
} else {
var pcnt_61656 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61653));
cljs.compiler.emitln.call(null,"case ",pcnt_61656,":");

cljs.compiler.emitln.call(null,"return ",n_61652,".call(this",(((pcnt_61656 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_61656,maxparams_61619));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),",")),");");
}

var G__61657 = seq__61594_61647;
var G__61658 = chunk__61595_61648;
var G__61659 = count__61596_61649;
var G__61660 = (i__61597_61650 + (1));
seq__61594_61647 = G__61657;
chunk__61595_61648 = G__61658;
count__61596_61649 = G__61659;
i__61597_61650 = G__61660;
continue;
} else {
var temp__4657__auto___61661 = cljs.core.seq.call(null,seq__61594_61647);
if(temp__4657__auto___61661){
var seq__61594_61662__$1 = temp__4657__auto___61661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61594_61662__$1)){
var c__7357__auto___61663 = cljs.core.chunk_first.call(null,seq__61594_61662__$1);
var G__61664 = cljs.core.chunk_rest.call(null,seq__61594_61662__$1);
var G__61665 = c__7357__auto___61663;
var G__61666 = cljs.core.count.call(null,c__7357__auto___61663);
var G__61667 = (0);
seq__61594_61647 = G__61664;
chunk__61595_61648 = G__61665;
count__61596_61649 = G__61666;
i__61597_61650 = G__61667;
continue;
} else {
var vec__61601_61668 = cljs.core.first.call(null,seq__61594_61662__$1);
var n_61669 = cljs.core.nth.call(null,vec__61601_61668,(0),null);
var meth_61670 = cljs.core.nth.call(null,vec__61601_61668,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_61670))){
cljs.compiler.emitln.call(null,"default:");

var restarg_61671 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_61671," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_61672 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_61671," = new cljs.core.IndexedSeq(",a_61672,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_61669,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_61619)),(((cljs.core.count.call(null,maxparams_61619) > (1)))?", ":null),restarg_61671,");");
} else {
var pcnt_61673 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61670));
cljs.compiler.emitln.call(null,"case ",pcnt_61673,":");

cljs.compiler.emitln.call(null,"return ",n_61669,".call(this",(((pcnt_61673 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_61673,maxparams_61619));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),",")),");");
}

var G__61674 = cljs.core.next.call(null,seq__61594_61662__$1);
var G__61675 = null;
var G__61676 = (0);
var G__61677 = (0);
seq__61594_61647 = G__61674;
chunk__61595_61648 = G__61675;
count__61596_61649 = G__61676;
i__61597_61650 = G__61677;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_61618,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_61618,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_61617__$1,mname_61618,maxparams_61619,mmap_61620,ms_61621,loop_locals,map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__61580_SHARP_){
var vec__61604 = p1__61580_SHARP_;
var n = cljs.core.nth.call(null,vec__61604,(0),null);
var m = cljs.core.nth.call(null,vec__61604,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_61617__$1,mname_61618,maxparams_61619,mmap_61620,ms_61621,loop_locals,map__61582,map__61582__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_61621),".cljs$lang$applyTo;");
} else {
}

var seq__61607_61678 = cljs.core.seq.call(null,ms_61621);
var chunk__61608_61679 = null;
var count__61609_61680 = (0);
var i__61610_61681 = (0);
while(true){
if((i__61610_61681 < count__61609_61680)){
var vec__61611_61682 = cljs.core._nth.call(null,chunk__61608_61679,i__61610_61681);
var n_61683 = cljs.core.nth.call(null,vec__61611_61682,(0),null);
var meth_61684 = cljs.core.nth.call(null,vec__61611_61682,(1),null);
var c_61685 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61684));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_61684))){
cljs.compiler.emitln.call(null,mname_61618,".cljs$core$IFn$_invoke$arity$variadic = ",n_61683,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_61618,".cljs$core$IFn$_invoke$arity$",c_61685," = ",n_61683,";");
}

var G__61686 = seq__61607_61678;
var G__61687 = chunk__61608_61679;
var G__61688 = count__61609_61680;
var G__61689 = (i__61610_61681 + (1));
seq__61607_61678 = G__61686;
chunk__61608_61679 = G__61687;
count__61609_61680 = G__61688;
i__61610_61681 = G__61689;
continue;
} else {
var temp__4657__auto___61690 = cljs.core.seq.call(null,seq__61607_61678);
if(temp__4657__auto___61690){
var seq__61607_61691__$1 = temp__4657__auto___61690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61607_61691__$1)){
var c__7357__auto___61692 = cljs.core.chunk_first.call(null,seq__61607_61691__$1);
var G__61693 = cljs.core.chunk_rest.call(null,seq__61607_61691__$1);
var G__61694 = c__7357__auto___61692;
var G__61695 = cljs.core.count.call(null,c__7357__auto___61692);
var G__61696 = (0);
seq__61607_61678 = G__61693;
chunk__61608_61679 = G__61694;
count__61609_61680 = G__61695;
i__61610_61681 = G__61696;
continue;
} else {
var vec__61614_61697 = cljs.core.first.call(null,seq__61607_61691__$1);
var n_61698 = cljs.core.nth.call(null,vec__61614_61697,(0),null);
var meth_61699 = cljs.core.nth.call(null,vec__61614_61697,(1),null);
var c_61700 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_61699));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_61699))){
cljs.compiler.emitln.call(null,mname_61618,".cljs$core$IFn$_invoke$arity$variadic = ",n_61698,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_61618,".cljs$core$IFn$_invoke$arity$",c_61700," = ",n_61698,";");
}

var G__61701 = cljs.core.next.call(null,seq__61607_61691__$1);
var G__61702 = null;
var G__61703 = (0);
var G__61704 = (0);
seq__61607_61678 = G__61701;
chunk__61608_61679 = G__61702;
count__61609_61680 = G__61703;
i__61610_61681 = G__61704;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_61618,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__61705){
var map__61706 = p__61705;
var map__61706__$1 = ((((!((map__61706 == null)))?((((map__61706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61706):map__61706);
var statements = cljs.core.get.call(null,map__61706__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__61706__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__61706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6531__auto__ = statements;
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6531__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__61708_61712 = cljs.core.seq.call(null,statements);
var chunk__61709_61713 = null;
var count__61710_61714 = (0);
var i__61711_61715 = (0);
while(true){
if((i__61711_61715 < count__61710_61714)){
var s_61716 = cljs.core._nth.call(null,chunk__61709_61713,i__61711_61715);
cljs.compiler.emitln.call(null,s_61716);

var G__61717 = seq__61708_61712;
var G__61718 = chunk__61709_61713;
var G__61719 = count__61710_61714;
var G__61720 = (i__61711_61715 + (1));
seq__61708_61712 = G__61717;
chunk__61709_61713 = G__61718;
count__61710_61714 = G__61719;
i__61711_61715 = G__61720;
continue;
} else {
var temp__4657__auto___61721 = cljs.core.seq.call(null,seq__61708_61712);
if(temp__4657__auto___61721){
var seq__61708_61722__$1 = temp__4657__auto___61721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61708_61722__$1)){
var c__7357__auto___61723 = cljs.core.chunk_first.call(null,seq__61708_61722__$1);
var G__61724 = cljs.core.chunk_rest.call(null,seq__61708_61722__$1);
var G__61725 = c__7357__auto___61723;
var G__61726 = cljs.core.count.call(null,c__7357__auto___61723);
var G__61727 = (0);
seq__61708_61712 = G__61724;
chunk__61709_61713 = G__61725;
count__61710_61714 = G__61726;
i__61711_61715 = G__61727;
continue;
} else {
var s_61728 = cljs.core.first.call(null,seq__61708_61722__$1);
cljs.compiler.emitln.call(null,s_61728);

var G__61729 = cljs.core.next.call(null,seq__61708_61722__$1);
var G__61730 = null;
var G__61731 = (0);
var G__61732 = (0);
seq__61708_61712 = G__61729;
chunk__61709_61713 = G__61730;
count__61710_61714 = G__61731;
i__61711_61715 = G__61732;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6531__auto__ = statements;
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6531__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__61733){
var map__61734 = p__61733;
var map__61734__$1 = ((((!((map__61734 == null)))?((((map__61734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61734):map__61734);
var env = cljs.core.get.call(null,map__61734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__61734__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__61734__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__61734__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__61734__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__61736,is_loop){
var map__61748 = p__61736;
var map__61748__$1 = ((((!((map__61748 == null)))?((((map__61748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61748):map__61748);
var bindings = cljs.core.get.call(null,map__61748__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__61748__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__61748__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_61750_61759 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_61750_61759,context,map__61748,map__61748__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_61750_61759,context,map__61748,map__61748__$1,bindings,expr,env))
,bindings):null));

try{var seq__61751_61760 = cljs.core.seq.call(null,bindings);
var chunk__61752_61761 = null;
var count__61753_61762 = (0);
var i__61754_61763 = (0);
while(true){
if((i__61754_61763 < count__61753_61762)){
var map__61755_61764 = cljs.core._nth.call(null,chunk__61752_61761,i__61754_61763);
var map__61755_61765__$1 = ((((!((map__61755_61764 == null)))?((((map__61755_61764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61755_61764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61755_61764):map__61755_61764);
var binding_61766 = map__61755_61765__$1;
var init_61767 = cljs.core.get.call(null,map__61755_61765__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_61766);

cljs.compiler.emitln.call(null," = ",init_61767,";");

var G__61768 = seq__61751_61760;
var G__61769 = chunk__61752_61761;
var G__61770 = count__61753_61762;
var G__61771 = (i__61754_61763 + (1));
seq__61751_61760 = G__61768;
chunk__61752_61761 = G__61769;
count__61753_61762 = G__61770;
i__61754_61763 = G__61771;
continue;
} else {
var temp__4657__auto___61772 = cljs.core.seq.call(null,seq__61751_61760);
if(temp__4657__auto___61772){
var seq__61751_61773__$1 = temp__4657__auto___61772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61751_61773__$1)){
var c__7357__auto___61774 = cljs.core.chunk_first.call(null,seq__61751_61773__$1);
var G__61775 = cljs.core.chunk_rest.call(null,seq__61751_61773__$1);
var G__61776 = c__7357__auto___61774;
var G__61777 = cljs.core.count.call(null,c__7357__auto___61774);
var G__61778 = (0);
seq__61751_61760 = G__61775;
chunk__61752_61761 = G__61776;
count__61753_61762 = G__61777;
i__61754_61763 = G__61778;
continue;
} else {
var map__61757_61779 = cljs.core.first.call(null,seq__61751_61773__$1);
var map__61757_61780__$1 = ((((!((map__61757_61779 == null)))?((((map__61757_61779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61757_61779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61757_61779):map__61757_61779);
var binding_61781 = map__61757_61780__$1;
var init_61782 = cljs.core.get.call(null,map__61757_61780__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_61781);

cljs.compiler.emitln.call(null," = ",init_61782,";");

var G__61783 = cljs.core.next.call(null,seq__61751_61773__$1);
var G__61784 = null;
var G__61785 = (0);
var G__61786 = (0);
seq__61751_61760 = G__61783;
chunk__61752_61761 = G__61784;
count__61753_61762 = G__61785;
i__61754_61763 = G__61786;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_61750_61759;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__61787){
var map__61788 = p__61787;
var map__61788__$1 = ((((!((map__61788 == null)))?((((map__61788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61788):map__61788);
var frame = cljs.core.get.call(null,map__61788__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__61788__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__61788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7461__auto___61790 = cljs.core.count.call(null,exprs);
var i_61791 = (0);
while(true){
if((i_61791 < n__7461__auto___61790)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_61791)," = ",exprs.call(null,i_61791),";");

var G__61792 = (i_61791 + (1));
i_61791 = G__61792;
continue;
} else {
}
break;
}

var n__7461__auto___61793 = cljs.core.count.call(null,exprs);
var i_61794 = (0);
while(true){
if((i_61794 < n__7461__auto___61793)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_61794))," = ",temps.call(null,i_61794),";");

var G__61795 = (i_61794 + (1));
i_61794 = G__61795;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__61796){
var map__61797 = p__61796;
var map__61797__$1 = ((((!((map__61797 == null)))?((((map__61797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61797):map__61797);
var bindings = cljs.core.get.call(null,map__61797__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__61797__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__61797__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__61799_61807 = cljs.core.seq.call(null,bindings);
var chunk__61800_61808 = null;
var count__61801_61809 = (0);
var i__61802_61810 = (0);
while(true){
if((i__61802_61810 < count__61801_61809)){
var map__61803_61811 = cljs.core._nth.call(null,chunk__61800_61808,i__61802_61810);
var map__61803_61812__$1 = ((((!((map__61803_61811 == null)))?((((map__61803_61811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61803_61811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61803_61811):map__61803_61811);
var binding_61813 = map__61803_61812__$1;
var init_61814 = cljs.core.get.call(null,map__61803_61812__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_61813)," = ",init_61814,";");

var G__61815 = seq__61799_61807;
var G__61816 = chunk__61800_61808;
var G__61817 = count__61801_61809;
var G__61818 = (i__61802_61810 + (1));
seq__61799_61807 = G__61815;
chunk__61800_61808 = G__61816;
count__61801_61809 = G__61817;
i__61802_61810 = G__61818;
continue;
} else {
var temp__4657__auto___61819 = cljs.core.seq.call(null,seq__61799_61807);
if(temp__4657__auto___61819){
var seq__61799_61820__$1 = temp__4657__auto___61819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61799_61820__$1)){
var c__7357__auto___61821 = cljs.core.chunk_first.call(null,seq__61799_61820__$1);
var G__61822 = cljs.core.chunk_rest.call(null,seq__61799_61820__$1);
var G__61823 = c__7357__auto___61821;
var G__61824 = cljs.core.count.call(null,c__7357__auto___61821);
var G__61825 = (0);
seq__61799_61807 = G__61822;
chunk__61800_61808 = G__61823;
count__61801_61809 = G__61824;
i__61802_61810 = G__61825;
continue;
} else {
var map__61805_61826 = cljs.core.first.call(null,seq__61799_61820__$1);
var map__61805_61827__$1 = ((((!((map__61805_61826 == null)))?((((map__61805_61826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61805_61826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61805_61826):map__61805_61826);
var binding_61828 = map__61805_61827__$1;
var init_61829 = cljs.core.get.call(null,map__61805_61827__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_61828)," = ",init_61829,";");

var G__61830 = cljs.core.next.call(null,seq__61799_61820__$1);
var G__61831 = null;
var G__61832 = (0);
var G__61833 = (0);
seq__61799_61807 = G__61830;
chunk__61800_61808 = G__61831;
count__61801_61809 = G__61832;
i__61802_61810 = G__61833;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__61836){
var map__61837 = p__61836;
var map__61837__$1 = ((((!((map__61837 == null)))?((((map__61837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61837):map__61837);
var expr = map__61837__$1;
var f = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6531__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6531__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6531__auto__ = protocol;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = tag;
if(cljs.core.truth_(and__6531__auto____$1)){
var or__6543__auto__ = (function (){var and__6531__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6531__auto____$2)){
var and__6531__auto____$3 = protocol;
if(cljs.core.truth_(and__6531__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__6531__auto____$3;
}
} else {
return and__6531__auto____$2;
}
})();
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
var and__6531__auto____$2 = (function (){var or__6543__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6543__auto____$1)){
return or__6543__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6531__auto____$2)){
var or__6543__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6543__auto____$1){
return or__6543__auto____$1;
} else {
var and__6531__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6531__auto____$3){
var and__6531__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6531__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__6531__auto____$4;
}
} else {
return and__6531__auto____$3;
}
}
} else {
return and__6531__auto____$2;
}
}
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6543__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6543__auto__){
return or__6543__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__61839 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6531__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6531__auto__)){
return (arity > mfa);
} else {
return and__6531__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env){
return (function (p1__61834_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__61834_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env){
return (function (p1__61835_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__61835_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__61837,map__61837__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__61839,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__61839,(1),null);
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_61842 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_61842,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_61843 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_61843,args)),(((mfa_61843 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_61843,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__6543__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
var or__6543__auto____$1 = js_QMARK_;
if(or__6543__auto____$1){
return or__6543__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6531__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6531__auto__;
}
})())){
var fprop_61844 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_61844," ? ",f__$1,fprop_61844,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__61845){
var map__61846 = p__61845;
var map__61846__$1 = ((((!((map__61846 == null)))?((((map__61846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61846):map__61846);
var ctor = cljs.core.get.call(null,map__61846__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__61846__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__61846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__61848){
var map__61849 = p__61848;
var map__61849__$1 = ((((!((map__61849 == null)))?((((map__61849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61849):map__61849);
var target = cljs.core.get.call(null,map__61849__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__61849__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__61849__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__61855_61859 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__61856_61860 = null;
var count__61857_61861 = (0);
var i__61858_61862 = (0);
while(true){
if((i__61858_61862 < count__61857_61861)){
var lib_61863 = cljs.core._nth.call(null,chunk__61856_61860,i__61858_61862);
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_61863),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_61863),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_61863),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_61863),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_61863),"');");

}
}

var G__61864 = seq__61855_61859;
var G__61865 = chunk__61856_61860;
var G__61866 = count__61857_61861;
var G__61867 = (i__61858_61862 + (1));
seq__61855_61859 = G__61864;
chunk__61856_61860 = G__61865;
count__61857_61861 = G__61866;
i__61858_61862 = G__61867;
continue;
} else {
var temp__4657__auto___61868 = cljs.core.seq.call(null,seq__61855_61859);
if(temp__4657__auto___61868){
var seq__61855_61869__$1 = temp__4657__auto___61868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61855_61869__$1)){
var c__7357__auto___61870 = cljs.core.chunk_first.call(null,seq__61855_61869__$1);
var G__61871 = cljs.core.chunk_rest.call(null,seq__61855_61869__$1);
var G__61872 = c__7357__auto___61870;
var G__61873 = cljs.core.count.call(null,c__7357__auto___61870);
var G__61874 = (0);
seq__61855_61859 = G__61871;
chunk__61856_61860 = G__61872;
count__61857_61861 = G__61873;
i__61858_61862 = G__61874;
continue;
} else {
var lib_61875 = cljs.core.first.call(null,seq__61855_61869__$1);
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_61875),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_61875),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_61875),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_61875),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_61875),"');");

}
}

var G__61876 = cljs.core.next.call(null,seq__61855_61869__$1);
var G__61877 = null;
var G__61878 = (0);
var G__61879 = (0);
seq__61855_61859 = G__61876;
chunk__61856_61860 = G__61877;
count__61857_61861 = G__61878;
i__61858_61862 = G__61879;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__61880){
var map__61881 = p__61880;
var map__61881__$1 = ((((!((map__61881 == null)))?((((map__61881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61881):map__61881);
var name = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__61883){
var map__61884 = p__61883;
var map__61884__$1 = ((((!((map__61884 == null)))?((((map__61884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61884):map__61884);
var name = cljs.core.get.call(null,map__61884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__61884__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__61884__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__61884__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__61884__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__61884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__61886){
var map__61887 = p__61886;
var map__61887__$1 = ((((!((map__61887 == null)))?((((map__61887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61887):map__61887);
var t = cljs.core.get.call(null,map__61887__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__61887__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__61887__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__61887__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__61887__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__61889_61907 = cljs.core.seq.call(null,protocols);
var chunk__61890_61908 = null;
var count__61891_61909 = (0);
var i__61892_61910 = (0);
while(true){
if((i__61892_61910 < count__61891_61909)){
var protocol_61911 = cljs.core._nth.call(null,chunk__61890_61908,i__61892_61910);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_61911)].join('')),"}");

var G__61912 = seq__61889_61907;
var G__61913 = chunk__61890_61908;
var G__61914 = count__61891_61909;
var G__61915 = (i__61892_61910 + (1));
seq__61889_61907 = G__61912;
chunk__61890_61908 = G__61913;
count__61891_61909 = G__61914;
i__61892_61910 = G__61915;
continue;
} else {
var temp__4657__auto___61916 = cljs.core.seq.call(null,seq__61889_61907);
if(temp__4657__auto___61916){
var seq__61889_61917__$1 = temp__4657__auto___61916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61889_61917__$1)){
var c__7357__auto___61918 = cljs.core.chunk_first.call(null,seq__61889_61917__$1);
var G__61919 = cljs.core.chunk_rest.call(null,seq__61889_61917__$1);
var G__61920 = c__7357__auto___61918;
var G__61921 = cljs.core.count.call(null,c__7357__auto___61918);
var G__61922 = (0);
seq__61889_61907 = G__61919;
chunk__61890_61908 = G__61920;
count__61891_61909 = G__61921;
i__61892_61910 = G__61922;
continue;
} else {
var protocol_61923 = cljs.core.first.call(null,seq__61889_61917__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_61923)].join('')),"}");

var G__61924 = cljs.core.next.call(null,seq__61889_61917__$1);
var G__61925 = null;
var G__61926 = (0);
var G__61927 = (0);
seq__61889_61907 = G__61924;
chunk__61890_61908 = G__61925;
count__61891_61909 = G__61926;
i__61892_61910 = G__61927;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__61893_61928 = cljs.core.seq.call(null,fields__$1);
var chunk__61894_61929 = null;
var count__61895_61930 = (0);
var i__61896_61931 = (0);
while(true){
if((i__61896_61931 < count__61895_61930)){
var fld_61932 = cljs.core._nth.call(null,chunk__61894_61929,i__61896_61931);
cljs.compiler.emitln.call(null,"this.",fld_61932," = ",fld_61932,";");

var G__61933 = seq__61893_61928;
var G__61934 = chunk__61894_61929;
var G__61935 = count__61895_61930;
var G__61936 = (i__61896_61931 + (1));
seq__61893_61928 = G__61933;
chunk__61894_61929 = G__61934;
count__61895_61930 = G__61935;
i__61896_61931 = G__61936;
continue;
} else {
var temp__4657__auto___61937 = cljs.core.seq.call(null,seq__61893_61928);
if(temp__4657__auto___61937){
var seq__61893_61938__$1 = temp__4657__auto___61937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61893_61938__$1)){
var c__7357__auto___61939 = cljs.core.chunk_first.call(null,seq__61893_61938__$1);
var G__61940 = cljs.core.chunk_rest.call(null,seq__61893_61938__$1);
var G__61941 = c__7357__auto___61939;
var G__61942 = cljs.core.count.call(null,c__7357__auto___61939);
var G__61943 = (0);
seq__61893_61928 = G__61940;
chunk__61894_61929 = G__61941;
count__61895_61930 = G__61942;
i__61896_61931 = G__61943;
continue;
} else {
var fld_61944 = cljs.core.first.call(null,seq__61893_61938__$1);
cljs.compiler.emitln.call(null,"this.",fld_61944," = ",fld_61944,";");

var G__61945 = cljs.core.next.call(null,seq__61893_61938__$1);
var G__61946 = null;
var G__61947 = (0);
var G__61948 = (0);
seq__61893_61928 = G__61945;
chunk__61894_61929 = G__61946;
count__61895_61930 = G__61947;
i__61896_61931 = G__61948;
continue;
}
} else {
}
}
break;
}

var seq__61897_61949 = cljs.core.seq.call(null,pmasks);
var chunk__61898_61950 = null;
var count__61899_61951 = (0);
var i__61900_61952 = (0);
while(true){
if((i__61900_61952 < count__61899_61951)){
var vec__61901_61953 = cljs.core._nth.call(null,chunk__61898_61950,i__61900_61952);
var pno_61954 = cljs.core.nth.call(null,vec__61901_61953,(0),null);
var pmask_61955 = cljs.core.nth.call(null,vec__61901_61953,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_61954,"$ = ",pmask_61955,";");

var G__61956 = seq__61897_61949;
var G__61957 = chunk__61898_61950;
var G__61958 = count__61899_61951;
var G__61959 = (i__61900_61952 + (1));
seq__61897_61949 = G__61956;
chunk__61898_61950 = G__61957;
count__61899_61951 = G__61958;
i__61900_61952 = G__61959;
continue;
} else {
var temp__4657__auto___61960 = cljs.core.seq.call(null,seq__61897_61949);
if(temp__4657__auto___61960){
var seq__61897_61961__$1 = temp__4657__auto___61960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61897_61961__$1)){
var c__7357__auto___61962 = cljs.core.chunk_first.call(null,seq__61897_61961__$1);
var G__61963 = cljs.core.chunk_rest.call(null,seq__61897_61961__$1);
var G__61964 = c__7357__auto___61962;
var G__61965 = cljs.core.count.call(null,c__7357__auto___61962);
var G__61966 = (0);
seq__61897_61949 = G__61963;
chunk__61898_61950 = G__61964;
count__61899_61951 = G__61965;
i__61900_61952 = G__61966;
continue;
} else {
var vec__61904_61967 = cljs.core.first.call(null,seq__61897_61961__$1);
var pno_61968 = cljs.core.nth.call(null,vec__61904_61967,(0),null);
var pmask_61969 = cljs.core.nth.call(null,vec__61904_61967,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_61968,"$ = ",pmask_61969,";");

var G__61970 = cljs.core.next.call(null,seq__61897_61961__$1);
var G__61971 = null;
var G__61972 = (0);
var G__61973 = (0);
seq__61897_61949 = G__61970;
chunk__61898_61950 = G__61971;
count__61899_61951 = G__61972;
i__61900_61952 = G__61973;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__61974){
var map__61975 = p__61974;
var map__61975__$1 = ((((!((map__61975 == null)))?((((map__61975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61975):map__61975);
var t = cljs.core.get.call(null,map__61975__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__61975__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__61975__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__61975__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__61975__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__61977_61995 = cljs.core.seq.call(null,protocols);
var chunk__61978_61996 = null;
var count__61979_61997 = (0);
var i__61980_61998 = (0);
while(true){
if((i__61980_61998 < count__61979_61997)){
var protocol_61999 = cljs.core._nth.call(null,chunk__61978_61996,i__61980_61998);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_61999)].join('')),"}");

var G__62000 = seq__61977_61995;
var G__62001 = chunk__61978_61996;
var G__62002 = count__61979_61997;
var G__62003 = (i__61980_61998 + (1));
seq__61977_61995 = G__62000;
chunk__61978_61996 = G__62001;
count__61979_61997 = G__62002;
i__61980_61998 = G__62003;
continue;
} else {
var temp__4657__auto___62004 = cljs.core.seq.call(null,seq__61977_61995);
if(temp__4657__auto___62004){
var seq__61977_62005__$1 = temp__4657__auto___62004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61977_62005__$1)){
var c__7357__auto___62006 = cljs.core.chunk_first.call(null,seq__61977_62005__$1);
var G__62007 = cljs.core.chunk_rest.call(null,seq__61977_62005__$1);
var G__62008 = c__7357__auto___62006;
var G__62009 = cljs.core.count.call(null,c__7357__auto___62006);
var G__62010 = (0);
seq__61977_61995 = G__62007;
chunk__61978_61996 = G__62008;
count__61979_61997 = G__62009;
i__61980_61998 = G__62010;
continue;
} else {
var protocol_62011 = cljs.core.first.call(null,seq__61977_62005__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_62011)].join('')),"}");

var G__62012 = cljs.core.next.call(null,seq__61977_62005__$1);
var G__62013 = null;
var G__62014 = (0);
var G__62015 = (0);
seq__61977_61995 = G__62012;
chunk__61978_61996 = G__62013;
count__61979_61997 = G__62014;
i__61980_61998 = G__62015;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__61981_62016 = cljs.core.seq.call(null,fields__$1);
var chunk__61982_62017 = null;
var count__61983_62018 = (0);
var i__61984_62019 = (0);
while(true){
if((i__61984_62019 < count__61983_62018)){
var fld_62020 = cljs.core._nth.call(null,chunk__61982_62017,i__61984_62019);
cljs.compiler.emitln.call(null,"this.",fld_62020," = ",fld_62020,";");

var G__62021 = seq__61981_62016;
var G__62022 = chunk__61982_62017;
var G__62023 = count__61983_62018;
var G__62024 = (i__61984_62019 + (1));
seq__61981_62016 = G__62021;
chunk__61982_62017 = G__62022;
count__61983_62018 = G__62023;
i__61984_62019 = G__62024;
continue;
} else {
var temp__4657__auto___62025 = cljs.core.seq.call(null,seq__61981_62016);
if(temp__4657__auto___62025){
var seq__61981_62026__$1 = temp__4657__auto___62025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61981_62026__$1)){
var c__7357__auto___62027 = cljs.core.chunk_first.call(null,seq__61981_62026__$1);
var G__62028 = cljs.core.chunk_rest.call(null,seq__61981_62026__$1);
var G__62029 = c__7357__auto___62027;
var G__62030 = cljs.core.count.call(null,c__7357__auto___62027);
var G__62031 = (0);
seq__61981_62016 = G__62028;
chunk__61982_62017 = G__62029;
count__61983_62018 = G__62030;
i__61984_62019 = G__62031;
continue;
} else {
var fld_62032 = cljs.core.first.call(null,seq__61981_62026__$1);
cljs.compiler.emitln.call(null,"this.",fld_62032," = ",fld_62032,";");

var G__62033 = cljs.core.next.call(null,seq__61981_62026__$1);
var G__62034 = null;
var G__62035 = (0);
var G__62036 = (0);
seq__61981_62016 = G__62033;
chunk__61982_62017 = G__62034;
count__61983_62018 = G__62035;
i__61984_62019 = G__62036;
continue;
}
} else {
}
}
break;
}

var seq__61985_62037 = cljs.core.seq.call(null,pmasks);
var chunk__61986_62038 = null;
var count__61987_62039 = (0);
var i__61988_62040 = (0);
while(true){
if((i__61988_62040 < count__61987_62039)){
var vec__61989_62041 = cljs.core._nth.call(null,chunk__61986_62038,i__61988_62040);
var pno_62042 = cljs.core.nth.call(null,vec__61989_62041,(0),null);
var pmask_62043 = cljs.core.nth.call(null,vec__61989_62041,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_62042,"$ = ",pmask_62043,";");

var G__62044 = seq__61985_62037;
var G__62045 = chunk__61986_62038;
var G__62046 = count__61987_62039;
var G__62047 = (i__61988_62040 + (1));
seq__61985_62037 = G__62044;
chunk__61986_62038 = G__62045;
count__61987_62039 = G__62046;
i__61988_62040 = G__62047;
continue;
} else {
var temp__4657__auto___62048 = cljs.core.seq.call(null,seq__61985_62037);
if(temp__4657__auto___62048){
var seq__61985_62049__$1 = temp__4657__auto___62048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61985_62049__$1)){
var c__7357__auto___62050 = cljs.core.chunk_first.call(null,seq__61985_62049__$1);
var G__62051 = cljs.core.chunk_rest.call(null,seq__61985_62049__$1);
var G__62052 = c__7357__auto___62050;
var G__62053 = cljs.core.count.call(null,c__7357__auto___62050);
var G__62054 = (0);
seq__61985_62037 = G__62051;
chunk__61986_62038 = G__62052;
count__61987_62039 = G__62053;
i__61988_62040 = G__62054;
continue;
} else {
var vec__61992_62055 = cljs.core.first.call(null,seq__61985_62049__$1);
var pno_62056 = cljs.core.nth.call(null,vec__61992_62055,(0),null);
var pmask_62057 = cljs.core.nth.call(null,vec__61992_62055,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_62056,"$ = ",pmask_62057,";");

var G__62058 = cljs.core.next.call(null,seq__61985_62049__$1);
var G__62059 = null;
var G__62060 = (0);
var G__62061 = (0);
seq__61985_62037 = G__62058;
chunk__61986_62038 = G__62059;
count__61987_62039 = G__62060;
i__61988_62040 = G__62061;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__62062){
var map__62063 = p__62062;
var map__62063__$1 = ((((!((map__62063 == null)))?((((map__62063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62063):map__62063);
var target = cljs.core.get.call(null,map__62063__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__62063__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__62063__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__62063__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__62063__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__62065){
var map__62066 = p__62065;
var map__62066__$1 = ((((!((map__62066 == null)))?((((map__62066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62066):map__62066);
var op = cljs.core.get.call(null,map__62066__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__62066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__62066__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__62066__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__62066__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6531__auto__ = code;
if(cljs.core.truth_(and__6531__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6531__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__51576__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__51576__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__62080 = cljs.core.seq.call(null,table);
var chunk__62081 = null;
var count__62082 = (0);
var i__62083 = (0);
while(true){
if((i__62083 < count__62082)){
var vec__62084 = cljs.core._nth.call(null,chunk__62081,i__62083);
var sym = cljs.core.nth.call(null,vec__62084,(0),null);
var value = cljs.core.nth.call(null,vec__62084,(1),null);
var ns_62090 = cljs.core.namespace.call(null,sym);
var name_62091 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__62092 = seq__62080;
var G__62093 = chunk__62081;
var G__62094 = count__62082;
var G__62095 = (i__62083 + (1));
seq__62080 = G__62092;
chunk__62081 = G__62093;
count__62082 = G__62094;
i__62083 = G__62095;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62080);
if(temp__4657__auto__){
var seq__62080__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62080__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__62080__$1);
var G__62096 = cljs.core.chunk_rest.call(null,seq__62080__$1);
var G__62097 = c__7357__auto__;
var G__62098 = cljs.core.count.call(null,c__7357__auto__);
var G__62099 = (0);
seq__62080 = G__62096;
chunk__62081 = G__62097;
count__62082 = G__62098;
i__62083 = G__62099;
continue;
} else {
var vec__62087 = cljs.core.first.call(null,seq__62080__$1);
var sym = cljs.core.nth.call(null,vec__62087,(0),null);
var value = cljs.core.nth.call(null,vec__62087,(1),null);
var ns_62100 = cljs.core.namespace.call(null,sym);
var name_62101 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__62102 = cljs.core.next.call(null,seq__62080__$1);
var G__62103 = null;
var G__62104 = (0);
var G__62105 = (0);
seq__62080 = G__62102;
chunk__62081 = G__62103;
count__62082 = G__62104;
i__62083 = G__62105;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1479783837521