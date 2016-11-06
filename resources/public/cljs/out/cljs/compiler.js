// Compiled by ClojureScript 1.9.227 {}
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
var map__68190 = s;
var map__68190__$1 = ((((!((map__68190 == null)))?((((map__68190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68190):map__68190);
var name = cljs.core.get.call(null,map__68190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__68190__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__68193 = info;
var map__68194 = G__68193;
var map__68194__$1 = ((((!((map__68194 == null)))?((((map__68194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68194):map__68194);
var shadow = cljs.core.get.call(null,map__68194__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__68193__$1 = G__68193;
while(true){
var d__$2 = d__$1;
var map__68196 = G__68193__$1;
var map__68196__$1 = ((((!((map__68196 == null)))?((((map__68196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68196):map__68196);
var shadow__$1 = cljs.core.get.call(null,map__68196__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__68198 = (d__$2 + (1));
var G__68199 = shadow__$1;
d__$1 = G__68198;
G__68193__$1 = G__68199;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__68200){
var map__68205 = p__68200;
var map__68205__$1 = ((((!((map__68205 == null)))?((((map__68205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68205):map__68205);
var name_var = map__68205__$1;
var name = cljs.core.get.call(null,map__68205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__68205__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__68207 = info;
var map__68207__$1 = ((((!((map__68207 == null)))?((((map__68207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68207):map__68207);
var ns = cljs.core.get.call(null,map__68207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__68207__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args68209 = [];
var len__25826__auto___68212 = arguments.length;
var i__25827__auto___68213 = (0);
while(true){
if((i__25827__auto___68213 < len__25826__auto___68212)){
args68209.push((arguments[i__25827__auto___68213]));

var G__68214 = (i__25827__auto___68213 + (1));
i__25827__auto___68213 = G__68214;
continue;
} else {
}
break;
}

var G__68211 = args68209.length;
switch (G__68211) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68209.length)].join('')));

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
var G__68217 = cp;
switch (G__68217) {
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
var seq__68223_68227 = cljs.core.seq.call(null,s);
var chunk__68224_68228 = null;
var count__68225_68229 = (0);
var i__68226_68230 = (0);
while(true){
if((i__68226_68230 < count__68225_68229)){
var c_68231 = cljs.core._nth.call(null,chunk__68224_68228,i__68226_68230);
sb.append(cljs.compiler.escape_char.call(null,c_68231));

var G__68232 = seq__68223_68227;
var G__68233 = chunk__68224_68228;
var G__68234 = count__68225_68229;
var G__68235 = (i__68226_68230 + (1));
seq__68223_68227 = G__68232;
chunk__68224_68228 = G__68233;
count__68225_68229 = G__68234;
i__68226_68230 = G__68235;
continue;
} else {
var temp__4657__auto___68236 = cljs.core.seq.call(null,seq__68223_68227);
if(temp__4657__auto___68236){
var seq__68223_68237__$1 = temp__4657__auto___68236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68223_68237__$1)){
var c__25562__auto___68238 = cljs.core.chunk_first.call(null,seq__68223_68237__$1);
var G__68239 = cljs.core.chunk_rest.call(null,seq__68223_68237__$1);
var G__68240 = c__25562__auto___68238;
var G__68241 = cljs.core.count.call(null,c__25562__auto___68238);
var G__68242 = (0);
seq__68223_68227 = G__68239;
chunk__68224_68228 = G__68240;
count__68225_68229 = G__68241;
i__68226_68230 = G__68242;
continue;
} else {
var c_68243 = cljs.core.first.call(null,seq__68223_68237__$1);
sb.append(cljs.compiler.escape_char.call(null,c_68243));

var G__68244 = cljs.core.next.call(null,seq__68223_68237__$1);
var G__68245 = null;
var G__68246 = (0);
var G__68247 = (0);
seq__68223_68227 = G__68244;
chunk__68224_68228 = G__68245;
count__68225_68229 = G__68246;
i__68226_68230 = G__68247;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__25676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25680__auto__,method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__40444__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__40444__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__68253_68258 = ast;
var map__68253_68259__$1 = ((((!((map__68253_68258 == null)))?((((map__68253_68258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68253_68258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68253_68258):map__68253_68258);
var env_68260 = cljs.core.get.call(null,map__68253_68259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_68260))){
var map__68255_68261 = env_68260;
var map__68255_68262__$1 = ((((!((map__68255_68261 == null)))?((((map__68255_68261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68255_68261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68255_68261):map__68255_68261);
var line_68263 = cljs.core.get.call(null,map__68255_68262__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68264 = cljs.core.get.call(null,map__68255_68262__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__68255_68261,map__68255_68262__$1,line_68263,column_68264,map__68253_68258,map__68253_68259__$1,env_68260,val__40444__auto__){
return (function (m){
var minfo = (function (){var G__68257 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__68257,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__68257;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_68263 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__68255_68261,map__68255_68262__$1,line_68263,column_68264,map__68253_68258,map__68253_68259__$1,env_68260,val__40444__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_68264)?(column_68264 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__68255_68261,map__68255_68262__$1,line_68263,column_68264,map__68253_68258,map__68253_68259__$1,env_68260,val__40444__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__68255_68261,map__68255_68262__$1,line_68263,column_68264,map__68253_68258,map__68253_68259__$1,env_68260,val__40444__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__68255_68261,map__68255_68262__$1,line_68263,column_68264,map__68253_68258,map__68253_68259__$1,env_68260,val__40444__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__68255_68261,map__68255_68262__$1,line_68263,column_68264,map__68253_68258,map__68253_68259__$1,env_68260,val__40444__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__40444__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68271 = arguments.length;
var i__25827__auto___68272 = (0);
while(true){
if((i__25827__auto___68272 < len__25826__auto___68271)){
args__25833__auto__.push((arguments[i__25827__auto___68272]));

var G__68273 = (i__25827__auto___68272 + (1));
i__25827__auto___68272 = G__68273;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__68267_68274 = cljs.core.seq.call(null,xs);
var chunk__68268_68275 = null;
var count__68269_68276 = (0);
var i__68270_68277 = (0);
while(true){
if((i__68270_68277 < count__68269_68276)){
var x_68278 = cljs.core._nth.call(null,chunk__68268_68275,i__68270_68277);
if((x_68278 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_68278)){
cljs.compiler.emit.call(null,x_68278);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_68278)){
cljs.core.apply.call(null,cljs.compiler.emits,x_68278);
} else {
if(goog.isFunction(x_68278)){
x_68278.call(null);
} else {
var s_68279 = cljs.core.print_str.call(null,x_68278);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__68267_68274,chunk__68268_68275,count__68269_68276,i__68270_68277,s_68279,x_68278){
return (function (p1__68265_SHARP_){
return (p1__68265_SHARP_ + cljs.core.count.call(null,s_68279));
});})(seq__68267_68274,chunk__68268_68275,count__68269_68276,i__68270_68277,s_68279,x_68278))
);
}

cljs.core.print.call(null,s_68279);

}
}
}
}

var G__68280 = seq__68267_68274;
var G__68281 = chunk__68268_68275;
var G__68282 = count__68269_68276;
var G__68283 = (i__68270_68277 + (1));
seq__68267_68274 = G__68280;
chunk__68268_68275 = G__68281;
count__68269_68276 = G__68282;
i__68270_68277 = G__68283;
continue;
} else {
var temp__4657__auto___68284 = cljs.core.seq.call(null,seq__68267_68274);
if(temp__4657__auto___68284){
var seq__68267_68285__$1 = temp__4657__auto___68284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68267_68285__$1)){
var c__25562__auto___68286 = cljs.core.chunk_first.call(null,seq__68267_68285__$1);
var G__68287 = cljs.core.chunk_rest.call(null,seq__68267_68285__$1);
var G__68288 = c__25562__auto___68286;
var G__68289 = cljs.core.count.call(null,c__25562__auto___68286);
var G__68290 = (0);
seq__68267_68274 = G__68287;
chunk__68268_68275 = G__68288;
count__68269_68276 = G__68289;
i__68270_68277 = G__68290;
continue;
} else {
var x_68291 = cljs.core.first.call(null,seq__68267_68285__$1);
if((x_68291 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_68291)){
cljs.compiler.emit.call(null,x_68291);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_68291)){
cljs.core.apply.call(null,cljs.compiler.emits,x_68291);
} else {
if(goog.isFunction(x_68291)){
x_68291.call(null);
} else {
var s_68292 = cljs.core.print_str.call(null,x_68291);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__68267_68274,chunk__68268_68275,count__68269_68276,i__68270_68277,s_68292,x_68291,seq__68267_68285__$1,temp__4657__auto___68284){
return (function (p1__68265_SHARP_){
return (p1__68265_SHARP_ + cljs.core.count.call(null,s_68292));
});})(seq__68267_68274,chunk__68268_68275,count__68269_68276,i__68270_68277,s_68292,x_68291,seq__68267_68285__$1,temp__4657__auto___68284))
);
}

cljs.core.print.call(null,s_68292);

}
}
}
}

var G__68293 = cljs.core.next.call(null,seq__68267_68285__$1);
var G__68294 = null;
var G__68295 = (0);
var G__68296 = (0);
seq__68267_68274 = G__68293;
chunk__68268_68275 = G__68294;
count__68269_68276 = G__68295;
i__68270_68277 = G__68296;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq68266){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68266));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68301 = arguments.length;
var i__25827__auto___68302 = (0);
while(true){
if((i__25827__auto___68302 < len__25826__auto___68301)){
args__25833__auto__.push((arguments[i__25827__auto___68302]));

var G__68303 = (i__25827__auto___68302 + (1));
i__25827__auto___68302 = G__68303;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__68298){
var map__68299 = p__68298;
var map__68299__$1 = ((((!((map__68299 == null)))?((((map__68299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68299):map__68299);
var m = map__68299__$1;
var gen_line = cljs.core.get.call(null,map__68299__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq68297){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68297));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_68306_68308 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_68307_68309 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_68306_68308,_STAR_print_fn_STAR_68307_68309,sb__25737__auto__){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(_STAR_print_newline_STAR_68306_68308,_STAR_print_fn_STAR_68307_68309,sb__25737__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_68307_68309;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_68306_68308;
}
return [cljs.core.str(sb__25737__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25680__auto__,method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__));
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
var vec__68310 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__68310,(0),null);
var flags = cljs.core.nth.call(null,vec__68310,(1),null);
var pattern = cljs.core.nth.call(null,vec__68310,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__68314){
var map__68315 = p__68314;
var map__68315__$1 = ((((!((map__68315 == null)))?((((map__68315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68315):map__68315);
var arg = map__68315__$1;
var info = cljs.core.get.call(null,map__68315__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__68315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__68315__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__24751__auto__ = js_module_name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__68317 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__68317);
} else {
return G__68317;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__68318){
var map__68319 = p__68318;
var map__68319__$1 = ((((!((map__68319 == null)))?((((map__68319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68319):map__68319);
var arg = map__68319__$1;
var env = cljs.core.get.call(null,map__68319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__68319__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__68319__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__68319__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__68321 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__68321__$1 = ((((!((map__68321 == null)))?((((map__68321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68321):map__68321);
var name = cljs.core.get.call(null,map__68321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__68323){
var map__68324 = p__68323;
var map__68324__$1 = ((((!((map__68324 == null)))?((((map__68324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68324):map__68324);
var expr = cljs.core.get.call(null,map__68324__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__68324__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__68324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__68326_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__68326_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__68327){
var map__68328 = p__68327;
var map__68328__$1 = ((((!((map__68328 == null)))?((((map__68328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68328):map__68328);
var env = cljs.core.get.call(null,map__68328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__68328__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__68328__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__68330){
var map__68331 = p__68330;
var map__68331__$1 = ((((!((map__68331 == null)))?((((map__68331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68331):map__68331);
var items = cljs.core.get.call(null,map__68331__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__68331__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__68333){
var map__68334 = p__68333;
var map__68334__$1 = ((((!((map__68334 == null)))?((((map__68334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68334):map__68334);
var items = cljs.core.get.call(null,map__68334__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__68334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_68336 = cljs.core.count.call(null,items);
if((cnt_68336 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_68336,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__68337_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__68337_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__68338){
var map__68339 = p__68338;
var map__68339__$1 = ((((!((map__68339 == null)))?((((map__68339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68339):map__68339);
var items = cljs.core.get.call(null,map__68339__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__68339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__68341){
var map__68342 = p__68341;
var map__68342__$1 = ((((!((map__68342 == null)))?((((map__68342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68342):map__68342);
var items = cljs.core.get.call(null,map__68342__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__68342__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__68342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___68360 = cljs.core.seq.call(null,items);
if(temp__4657__auto___68360){
var items_68361__$1 = temp__4657__auto___68360;
var vec__68344_68362 = items_68361__$1;
var seq__68345_68363 = cljs.core.seq.call(null,vec__68344_68362);
var first__68346_68364 = cljs.core.first.call(null,seq__68345_68363);
var seq__68345_68365__$1 = cljs.core.next.call(null,seq__68345_68363);
var vec__68347_68366 = first__68346_68364;
var k_68367 = cljs.core.nth.call(null,vec__68347_68366,(0),null);
var v_68368 = cljs.core.nth.call(null,vec__68347_68366,(1),null);
var r_68369 = seq__68345_68365__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_68367),"\": ",v_68368);

var seq__68350_68370 = cljs.core.seq.call(null,r_68369);
var chunk__68351_68371 = null;
var count__68352_68372 = (0);
var i__68353_68373 = (0);
while(true){
if((i__68353_68373 < count__68352_68372)){
var vec__68354_68374 = cljs.core._nth.call(null,chunk__68351_68371,i__68353_68373);
var k_68375__$1 = cljs.core.nth.call(null,vec__68354_68374,(0),null);
var v_68376__$1 = cljs.core.nth.call(null,vec__68354_68374,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_68375__$1),"\": ",v_68376__$1);

var G__68377 = seq__68350_68370;
var G__68378 = chunk__68351_68371;
var G__68379 = count__68352_68372;
var G__68380 = (i__68353_68373 + (1));
seq__68350_68370 = G__68377;
chunk__68351_68371 = G__68378;
count__68352_68372 = G__68379;
i__68353_68373 = G__68380;
continue;
} else {
var temp__4657__auto___68381__$1 = cljs.core.seq.call(null,seq__68350_68370);
if(temp__4657__auto___68381__$1){
var seq__68350_68382__$1 = temp__4657__auto___68381__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68350_68382__$1)){
var c__25562__auto___68383 = cljs.core.chunk_first.call(null,seq__68350_68382__$1);
var G__68384 = cljs.core.chunk_rest.call(null,seq__68350_68382__$1);
var G__68385 = c__25562__auto___68383;
var G__68386 = cljs.core.count.call(null,c__25562__auto___68383);
var G__68387 = (0);
seq__68350_68370 = G__68384;
chunk__68351_68371 = G__68385;
count__68352_68372 = G__68386;
i__68353_68373 = G__68387;
continue;
} else {
var vec__68357_68388 = cljs.core.first.call(null,seq__68350_68382__$1);
var k_68389__$1 = cljs.core.nth.call(null,vec__68357_68388,(0),null);
var v_68390__$1 = cljs.core.nth.call(null,vec__68357_68388,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_68389__$1),"\": ",v_68390__$1);

var G__68391 = cljs.core.next.call(null,seq__68350_68382__$1);
var G__68392 = null;
var G__68393 = (0);
var G__68394 = (0);
seq__68350_68370 = G__68391;
chunk__68351_68371 = G__68392;
count__68352_68372 = G__68393;
i__68353_68373 = G__68394;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__68395){
var map__68396 = p__68395;
var map__68396__$1 = ((((!((map__68396 == null)))?((((map__68396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68396):map__68396);
var form = cljs.core.get.call(null,map__68396__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__68396__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__68398){
var map__68401 = p__68398;
var map__68401__$1 = ((((!((map__68401 == null)))?((((map__68401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68401):map__68401);
var op = cljs.core.get.call(null,map__68401__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__68401__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__24739__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__24739__auto__){
var and__24739__auto____$1 = form;
if(cljs.core.truth_(and__24739__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__68403){
var map__68406 = p__68403;
var map__68406__$1 = ((((!((map__68406 == null)))?((((map__68406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68406):map__68406);
var op = cljs.core.get.call(null,map__68406__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__68406__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__24751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__68408){
var map__68409 = p__68408;
var map__68409__$1 = ((((!((map__68409 == null)))?((((map__68409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68409):map__68409);
var test = cljs.core.get.call(null,map__68409__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__68409__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__68409__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__68409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__68409__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__24751__auto__ = unchecked;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__68411){
var map__68412 = p__68411;
var map__68412__$1 = ((((!((map__68412 == null)))?((((map__68412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68412):map__68412);
var v = cljs.core.get.call(null,map__68412__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__68412__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__68412__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__68412__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__68412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__68414_68432 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__68415_68433 = null;
var count__68416_68434 = (0);
var i__68417_68435 = (0);
while(true){
if((i__68417_68435 < count__68416_68434)){
var vec__68418_68436 = cljs.core._nth.call(null,chunk__68415_68433,i__68417_68435);
var ts_68437 = cljs.core.nth.call(null,vec__68418_68436,(0),null);
var then_68438 = cljs.core.nth.call(null,vec__68418_68436,(1),null);
var seq__68421_68439 = cljs.core.seq.call(null,ts_68437);
var chunk__68422_68440 = null;
var count__68423_68441 = (0);
var i__68424_68442 = (0);
while(true){
if((i__68424_68442 < count__68423_68441)){
var test_68443 = cljs.core._nth.call(null,chunk__68422_68440,i__68424_68442);
cljs.compiler.emitln.call(null,"case ",test_68443,":");

var G__68444 = seq__68421_68439;
var G__68445 = chunk__68422_68440;
var G__68446 = count__68423_68441;
var G__68447 = (i__68424_68442 + (1));
seq__68421_68439 = G__68444;
chunk__68422_68440 = G__68445;
count__68423_68441 = G__68446;
i__68424_68442 = G__68447;
continue;
} else {
var temp__4657__auto___68448 = cljs.core.seq.call(null,seq__68421_68439);
if(temp__4657__auto___68448){
var seq__68421_68449__$1 = temp__4657__auto___68448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68421_68449__$1)){
var c__25562__auto___68450 = cljs.core.chunk_first.call(null,seq__68421_68449__$1);
var G__68451 = cljs.core.chunk_rest.call(null,seq__68421_68449__$1);
var G__68452 = c__25562__auto___68450;
var G__68453 = cljs.core.count.call(null,c__25562__auto___68450);
var G__68454 = (0);
seq__68421_68439 = G__68451;
chunk__68422_68440 = G__68452;
count__68423_68441 = G__68453;
i__68424_68442 = G__68454;
continue;
} else {
var test_68455 = cljs.core.first.call(null,seq__68421_68449__$1);
cljs.compiler.emitln.call(null,"case ",test_68455,":");

var G__68456 = cljs.core.next.call(null,seq__68421_68449__$1);
var G__68457 = null;
var G__68458 = (0);
var G__68459 = (0);
seq__68421_68439 = G__68456;
chunk__68422_68440 = G__68457;
count__68423_68441 = G__68458;
i__68424_68442 = G__68459;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_68438);
} else {
cljs.compiler.emitln.call(null,then_68438);
}

cljs.compiler.emitln.call(null,"break;");

var G__68460 = seq__68414_68432;
var G__68461 = chunk__68415_68433;
var G__68462 = count__68416_68434;
var G__68463 = (i__68417_68435 + (1));
seq__68414_68432 = G__68460;
chunk__68415_68433 = G__68461;
count__68416_68434 = G__68462;
i__68417_68435 = G__68463;
continue;
} else {
var temp__4657__auto___68464 = cljs.core.seq.call(null,seq__68414_68432);
if(temp__4657__auto___68464){
var seq__68414_68465__$1 = temp__4657__auto___68464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68414_68465__$1)){
var c__25562__auto___68466 = cljs.core.chunk_first.call(null,seq__68414_68465__$1);
var G__68467 = cljs.core.chunk_rest.call(null,seq__68414_68465__$1);
var G__68468 = c__25562__auto___68466;
var G__68469 = cljs.core.count.call(null,c__25562__auto___68466);
var G__68470 = (0);
seq__68414_68432 = G__68467;
chunk__68415_68433 = G__68468;
count__68416_68434 = G__68469;
i__68417_68435 = G__68470;
continue;
} else {
var vec__68425_68471 = cljs.core.first.call(null,seq__68414_68465__$1);
var ts_68472 = cljs.core.nth.call(null,vec__68425_68471,(0),null);
var then_68473 = cljs.core.nth.call(null,vec__68425_68471,(1),null);
var seq__68428_68474 = cljs.core.seq.call(null,ts_68472);
var chunk__68429_68475 = null;
var count__68430_68476 = (0);
var i__68431_68477 = (0);
while(true){
if((i__68431_68477 < count__68430_68476)){
var test_68478 = cljs.core._nth.call(null,chunk__68429_68475,i__68431_68477);
cljs.compiler.emitln.call(null,"case ",test_68478,":");

var G__68479 = seq__68428_68474;
var G__68480 = chunk__68429_68475;
var G__68481 = count__68430_68476;
var G__68482 = (i__68431_68477 + (1));
seq__68428_68474 = G__68479;
chunk__68429_68475 = G__68480;
count__68430_68476 = G__68481;
i__68431_68477 = G__68482;
continue;
} else {
var temp__4657__auto___68483__$1 = cljs.core.seq.call(null,seq__68428_68474);
if(temp__4657__auto___68483__$1){
var seq__68428_68484__$1 = temp__4657__auto___68483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68428_68484__$1)){
var c__25562__auto___68485 = cljs.core.chunk_first.call(null,seq__68428_68484__$1);
var G__68486 = cljs.core.chunk_rest.call(null,seq__68428_68484__$1);
var G__68487 = c__25562__auto___68485;
var G__68488 = cljs.core.count.call(null,c__25562__auto___68485);
var G__68489 = (0);
seq__68428_68474 = G__68486;
chunk__68429_68475 = G__68487;
count__68430_68476 = G__68488;
i__68431_68477 = G__68489;
continue;
} else {
var test_68490 = cljs.core.first.call(null,seq__68428_68484__$1);
cljs.compiler.emitln.call(null,"case ",test_68490,":");

var G__68491 = cljs.core.next.call(null,seq__68428_68484__$1);
var G__68492 = null;
var G__68493 = (0);
var G__68494 = (0);
seq__68428_68474 = G__68491;
chunk__68429_68475 = G__68492;
count__68430_68476 = G__68493;
i__68431_68477 = G__68494;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_68473);
} else {
cljs.compiler.emitln.call(null,then_68473);
}

cljs.compiler.emitln.call(null,"break;");

var G__68495 = cljs.core.next.call(null,seq__68414_68465__$1);
var G__68496 = null;
var G__68497 = (0);
var G__68498 = (0);
seq__68414_68432 = G__68495;
chunk__68415_68433 = G__68496;
count__68416_68434 = G__68497;
i__68417_68435 = G__68498;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__68499){
var map__68500 = p__68499;
var map__68500__$1 = ((((!((map__68500 == null)))?((((map__68500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68500):map__68500);
var throw$ = cljs.core.get.call(null,map__68500__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__68500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__68507 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__68507,(0),null);
var rstr = cljs.core.nth.call(null,vec__68507,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__68507,fstr,rstr,ret_t,axstr){
return (function (p1__68502_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__68502_SHARP_);
});})(idx,vec__68507,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__68510 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__68510),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__68510;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
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
return (function (p1__68511_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__68511_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__68518 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__68519 = cljs.core.seq.call(null,vec__68518);
var first__68520 = cljs.core.first.call(null,seq__68519);
var seq__68519__$1 = cljs.core.next.call(null,seq__68519);
var p = first__68520;
var first__68520__$1 = cljs.core.first.call(null,seq__68519__$1);
var seq__68519__$2 = cljs.core.next.call(null,seq__68519__$1);
var ts = first__68520__$1;
var first__68520__$2 = cljs.core.first.call(null,seq__68519__$2);
var seq__68519__$3 = cljs.core.next.call(null,seq__68519__$2);
var n = first__68520__$2;
var xs = seq__68519__$3;
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__24739__auto__){
var and__24739__auto____$1 = ts;
if(cljs.core.truth_(and__24739__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__68521 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__68522 = cljs.core.seq.call(null,vec__68521);
var first__68523 = cljs.core.first.call(null,seq__68522);
var seq__68522__$1 = cljs.core.next.call(null,seq__68522);
var p = first__68523;
var first__68523__$1 = cljs.core.first.call(null,seq__68522__$1);
var seq__68522__$2 = cljs.core.next.call(null,seq__68522__$1);
var ts = first__68523__$1;
var xs = seq__68522__$2;
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__24739__auto__){
var and__24739__auto____$1 = ts;
if(cljs.core.truth_(and__24739__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
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
var args68525 = [];
var len__25826__auto___68560 = arguments.length;
var i__25827__auto___68561 = (0);
while(true){
if((i__25827__auto___68561 < len__25826__auto___68560)){
args68525.push((arguments[i__25827__auto___68561]));

var G__68562 = (i__25827__auto___68561 + (1));
i__25827__auto___68561 = G__68562;
continue;
} else {
}
break;
}

var G__68527 = args68525.length;
switch (G__68527) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68525.length)].join('')));

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
var vec__68549 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__68524_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__68524_SHARP_);
} else {
return p1__68524_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__68550 = cljs.core.seq.call(null,vec__68549);
var first__68551 = cljs.core.first.call(null,seq__68550);
var seq__68550__$1 = cljs.core.next.call(null,seq__68550);
var x = first__68551;
var ys = seq__68550__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__68552 = cljs.core.seq.call(null,ys);
var chunk__68553 = null;
var count__68554 = (0);
var i__68555 = (0);
while(true){
if((i__68555 < count__68554)){
var next_line = cljs.core._nth.call(null,chunk__68553,i__68555);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__68564 = seq__68552;
var G__68565 = chunk__68553;
var G__68566 = count__68554;
var G__68567 = (i__68555 + (1));
seq__68552 = G__68564;
chunk__68553 = G__68565;
count__68554 = G__68566;
i__68555 = G__68567;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__68552);
if(temp__4657__auto__){
var seq__68552__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68552__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__68552__$1);
var G__68568 = cljs.core.chunk_rest.call(null,seq__68552__$1);
var G__68569 = c__25562__auto__;
var G__68570 = cljs.core.count.call(null,c__25562__auto__);
var G__68571 = (0);
seq__68552 = G__68568;
chunk__68553 = G__68569;
count__68554 = G__68570;
i__68555 = G__68571;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__68552__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__68572 = cljs.core.next.call(null,seq__68552__$1);
var G__68573 = null;
var G__68574 = (0);
var G__68575 = (0);
seq__68552 = G__68572;
chunk__68553 = G__68573;
count__68554 = G__68574;
i__68555 = G__68575;
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

var seq__68556_68576 = cljs.core.seq.call(null,docs__$2);
var chunk__68557_68577 = null;
var count__68558_68578 = (0);
var i__68559_68579 = (0);
while(true){
if((i__68559_68579 < count__68558_68578)){
var e_68580 = cljs.core._nth.call(null,chunk__68557_68577,i__68559_68579);
if(cljs.core.truth_(e_68580)){
print_comment_lines.call(null,e_68580);
} else {
}

var G__68581 = seq__68556_68576;
var G__68582 = chunk__68557_68577;
var G__68583 = count__68558_68578;
var G__68584 = (i__68559_68579 + (1));
seq__68556_68576 = G__68581;
chunk__68557_68577 = G__68582;
count__68558_68578 = G__68583;
i__68559_68579 = G__68584;
continue;
} else {
var temp__4657__auto___68585 = cljs.core.seq.call(null,seq__68556_68576);
if(temp__4657__auto___68585){
var seq__68556_68586__$1 = temp__4657__auto___68585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68556_68586__$1)){
var c__25562__auto___68587 = cljs.core.chunk_first.call(null,seq__68556_68586__$1);
var G__68588 = cljs.core.chunk_rest.call(null,seq__68556_68586__$1);
var G__68589 = c__25562__auto___68587;
var G__68590 = cljs.core.count.call(null,c__25562__auto___68587);
var G__68591 = (0);
seq__68556_68576 = G__68588;
chunk__68557_68577 = G__68589;
count__68558_68578 = G__68590;
i__68559_68579 = G__68591;
continue;
} else {
var e_68592 = cljs.core.first.call(null,seq__68556_68586__$1);
if(cljs.core.truth_(e_68592)){
print_comment_lines.call(null,e_68592);
} else {
}

var G__68593 = cljs.core.next.call(null,seq__68556_68586__$1);
var G__68594 = null;
var G__68595 = (0);
var G__68596 = (0);
seq__68556_68576 = G__68593;
chunk__68557_68577 = G__68594;
count__68558_68578 = G__68595;
i__68559_68579 = G__68596;
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
var and__24739__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__68598_SHARP_){
return goog.string.startsWith(p1__68598_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = opts;
if(cljs.core.truth_(and__24739__auto____$1)){
var and__24739__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__24739__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
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
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__68599){
var map__68600 = p__68599;
var map__68600__$1 = ((((!((map__68600 == null)))?((((map__68600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68600):map__68600);
var name = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__68600__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__24751__auto__ = init;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
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

if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__24739__auto__)){
return test;
} else {
return and__24739__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__68602){
var map__68623 = p__68602;
var map__68623__$1 = ((((!((map__68623 == null)))?((((map__68623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68623):map__68623);
var name = cljs.core.get.call(null,map__68623__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__68623__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__68623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__68625_68643 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__68626_68644 = null;
var count__68627_68645 = (0);
var i__68628_68646 = (0);
while(true){
if((i__68628_68646 < count__68627_68645)){
var vec__68629_68647 = cljs.core._nth.call(null,chunk__68626_68644,i__68628_68646);
var i_68648 = cljs.core.nth.call(null,vec__68629_68647,(0),null);
var param_68649 = cljs.core.nth.call(null,vec__68629_68647,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_68649);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__68650 = seq__68625_68643;
var G__68651 = chunk__68626_68644;
var G__68652 = count__68627_68645;
var G__68653 = (i__68628_68646 + (1));
seq__68625_68643 = G__68650;
chunk__68626_68644 = G__68651;
count__68627_68645 = G__68652;
i__68628_68646 = G__68653;
continue;
} else {
var temp__4657__auto___68654 = cljs.core.seq.call(null,seq__68625_68643);
if(temp__4657__auto___68654){
var seq__68625_68655__$1 = temp__4657__auto___68654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68625_68655__$1)){
var c__25562__auto___68656 = cljs.core.chunk_first.call(null,seq__68625_68655__$1);
var G__68657 = cljs.core.chunk_rest.call(null,seq__68625_68655__$1);
var G__68658 = c__25562__auto___68656;
var G__68659 = cljs.core.count.call(null,c__25562__auto___68656);
var G__68660 = (0);
seq__68625_68643 = G__68657;
chunk__68626_68644 = G__68658;
count__68627_68645 = G__68659;
i__68628_68646 = G__68660;
continue;
} else {
var vec__68632_68661 = cljs.core.first.call(null,seq__68625_68655__$1);
var i_68662 = cljs.core.nth.call(null,vec__68632_68661,(0),null);
var param_68663 = cljs.core.nth.call(null,vec__68632_68661,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_68663);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__68664 = cljs.core.next.call(null,seq__68625_68655__$1);
var G__68665 = null;
var G__68666 = (0);
var G__68667 = (0);
seq__68625_68643 = G__68664;
chunk__68626_68644 = G__68665;
count__68627_68645 = G__68666;
i__68628_68646 = G__68667;
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

var seq__68635_68668 = cljs.core.seq.call(null,params);
var chunk__68636_68669 = null;
var count__68637_68670 = (0);
var i__68638_68671 = (0);
while(true){
if((i__68638_68671 < count__68637_68670)){
var param_68672 = cljs.core._nth.call(null,chunk__68636_68669,i__68638_68671);
cljs.compiler.emit.call(null,param_68672);

if(cljs.core._EQ_.call(null,param_68672,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68673 = seq__68635_68668;
var G__68674 = chunk__68636_68669;
var G__68675 = count__68637_68670;
var G__68676 = (i__68638_68671 + (1));
seq__68635_68668 = G__68673;
chunk__68636_68669 = G__68674;
count__68637_68670 = G__68675;
i__68638_68671 = G__68676;
continue;
} else {
var temp__4657__auto___68677 = cljs.core.seq.call(null,seq__68635_68668);
if(temp__4657__auto___68677){
var seq__68635_68678__$1 = temp__4657__auto___68677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68635_68678__$1)){
var c__25562__auto___68679 = cljs.core.chunk_first.call(null,seq__68635_68678__$1);
var G__68680 = cljs.core.chunk_rest.call(null,seq__68635_68678__$1);
var G__68681 = c__25562__auto___68679;
var G__68682 = cljs.core.count.call(null,c__25562__auto___68679);
var G__68683 = (0);
seq__68635_68668 = G__68680;
chunk__68636_68669 = G__68681;
count__68637_68670 = G__68682;
i__68638_68671 = G__68683;
continue;
} else {
var param_68684 = cljs.core.first.call(null,seq__68635_68678__$1);
cljs.compiler.emit.call(null,param_68684);

if(cljs.core._EQ_.call(null,param_68684,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68685 = cljs.core.next.call(null,seq__68635_68678__$1);
var G__68686 = null;
var G__68687 = (0);
var G__68688 = (0);
seq__68635_68668 = G__68685;
chunk__68636_68669 = G__68686;
count__68637_68670 = G__68687;
i__68638_68671 = G__68688;
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

var seq__68639_68689 = cljs.core.seq.call(null,params);
var chunk__68640_68690 = null;
var count__68641_68691 = (0);
var i__68642_68692 = (0);
while(true){
if((i__68642_68692 < count__68641_68691)){
var param_68693 = cljs.core._nth.call(null,chunk__68640_68690,i__68642_68692);
cljs.compiler.emit.call(null,param_68693);

if(cljs.core._EQ_.call(null,param_68693,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68694 = seq__68639_68689;
var G__68695 = chunk__68640_68690;
var G__68696 = count__68641_68691;
var G__68697 = (i__68642_68692 + (1));
seq__68639_68689 = G__68694;
chunk__68640_68690 = G__68695;
count__68641_68691 = G__68696;
i__68642_68692 = G__68697;
continue;
} else {
var temp__4657__auto___68698 = cljs.core.seq.call(null,seq__68639_68689);
if(temp__4657__auto___68698){
var seq__68639_68699__$1 = temp__4657__auto___68698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68639_68699__$1)){
var c__25562__auto___68700 = cljs.core.chunk_first.call(null,seq__68639_68699__$1);
var G__68701 = cljs.core.chunk_rest.call(null,seq__68639_68699__$1);
var G__68702 = c__25562__auto___68700;
var G__68703 = cljs.core.count.call(null,c__25562__auto___68700);
var G__68704 = (0);
seq__68639_68689 = G__68701;
chunk__68640_68690 = G__68702;
count__68641_68691 = G__68703;
i__68642_68692 = G__68704;
continue;
} else {
var param_68705 = cljs.core.first.call(null,seq__68639_68699__$1);
cljs.compiler.emit.call(null,param_68705);

if(cljs.core._EQ_.call(null,param_68705,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68706 = cljs.core.next.call(null,seq__68639_68699__$1);
var G__68707 = null;
var G__68708 = (0);
var G__68709 = (0);
seq__68639_68689 = G__68706;
chunk__68640_68690 = G__68707;
count__68641_68691 = G__68708;
i__68642_68692 = G__68709;
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
var seq__68714 = cljs.core.seq.call(null,params);
var chunk__68715 = null;
var count__68716 = (0);
var i__68717 = (0);
while(true){
if((i__68717 < count__68716)){
var param = cljs.core._nth.call(null,chunk__68715,i__68717);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68718 = seq__68714;
var G__68719 = chunk__68715;
var G__68720 = count__68716;
var G__68721 = (i__68717 + (1));
seq__68714 = G__68718;
chunk__68715 = G__68719;
count__68716 = G__68720;
i__68717 = G__68721;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__68714);
if(temp__4657__auto__){
var seq__68714__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68714__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__68714__$1);
var G__68722 = cljs.core.chunk_rest.call(null,seq__68714__$1);
var G__68723 = c__25562__auto__;
var G__68724 = cljs.core.count.call(null,c__25562__auto__);
var G__68725 = (0);
seq__68714 = G__68722;
chunk__68715 = G__68723;
count__68716 = G__68724;
i__68717 = G__68725;
continue;
} else {
var param = cljs.core.first.call(null,seq__68714__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68726 = cljs.core.next.call(null,seq__68714__$1);
var G__68727 = null;
var G__68728 = (0);
var G__68729 = (0);
seq__68714 = G__68726;
chunk__68715 = G__68727;
count__68716 = G__68728;
i__68717 = G__68729;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__68730){
var map__68733 = p__68730;
var map__68733__$1 = ((((!((map__68733 == null)))?((((map__68733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68733):map__68733);
var type = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__68733__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__68735){
var map__68746 = p__68735;
var map__68746__$1 = ((((!((map__68746 == null)))?((((map__68746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68746):map__68746);
var f = map__68746__$1;
var type = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__68746__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_68756__$1 = (function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_68757 = cljs.compiler.munge.call(null,name_68756__$1);
var delegate_name_68758 = [cljs.core.str(mname_68757),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_68758," = function (");

var seq__68748_68759 = cljs.core.seq.call(null,params);
var chunk__68749_68760 = null;
var count__68750_68761 = (0);
var i__68751_68762 = (0);
while(true){
if((i__68751_68762 < count__68750_68761)){
var param_68763 = cljs.core._nth.call(null,chunk__68749_68760,i__68751_68762);
cljs.compiler.emit.call(null,param_68763);

if(cljs.core._EQ_.call(null,param_68763,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68764 = seq__68748_68759;
var G__68765 = chunk__68749_68760;
var G__68766 = count__68750_68761;
var G__68767 = (i__68751_68762 + (1));
seq__68748_68759 = G__68764;
chunk__68749_68760 = G__68765;
count__68750_68761 = G__68766;
i__68751_68762 = G__68767;
continue;
} else {
var temp__4657__auto___68768 = cljs.core.seq.call(null,seq__68748_68759);
if(temp__4657__auto___68768){
var seq__68748_68769__$1 = temp__4657__auto___68768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68748_68769__$1)){
var c__25562__auto___68770 = cljs.core.chunk_first.call(null,seq__68748_68769__$1);
var G__68771 = cljs.core.chunk_rest.call(null,seq__68748_68769__$1);
var G__68772 = c__25562__auto___68770;
var G__68773 = cljs.core.count.call(null,c__25562__auto___68770);
var G__68774 = (0);
seq__68748_68759 = G__68771;
chunk__68749_68760 = G__68772;
count__68750_68761 = G__68773;
i__68751_68762 = G__68774;
continue;
} else {
var param_68775 = cljs.core.first.call(null,seq__68748_68769__$1);
cljs.compiler.emit.call(null,param_68775);

if(cljs.core._EQ_.call(null,param_68775,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68776 = cljs.core.next.call(null,seq__68748_68769__$1);
var G__68777 = null;
var G__68778 = (0);
var G__68779 = (0);
seq__68748_68759 = G__68776;
chunk__68749_68760 = G__68777;
count__68750_68761 = G__68778;
i__68751_68762 = G__68779;
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

cljs.compiler.emitln.call(null,"var ",mname_68757," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_68780 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_68780,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_68758,".call(this,");

var seq__68752_68781 = cljs.core.seq.call(null,params);
var chunk__68753_68782 = null;
var count__68754_68783 = (0);
var i__68755_68784 = (0);
while(true){
if((i__68755_68784 < count__68754_68783)){
var param_68785 = cljs.core._nth.call(null,chunk__68753_68782,i__68755_68784);
cljs.compiler.emit.call(null,param_68785);

if(cljs.core._EQ_.call(null,param_68785,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68786 = seq__68752_68781;
var G__68787 = chunk__68753_68782;
var G__68788 = count__68754_68783;
var G__68789 = (i__68755_68784 + (1));
seq__68752_68781 = G__68786;
chunk__68753_68782 = G__68787;
count__68754_68783 = G__68788;
i__68755_68784 = G__68789;
continue;
} else {
var temp__4657__auto___68790 = cljs.core.seq.call(null,seq__68752_68781);
if(temp__4657__auto___68790){
var seq__68752_68791__$1 = temp__4657__auto___68790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68752_68791__$1)){
var c__25562__auto___68792 = cljs.core.chunk_first.call(null,seq__68752_68791__$1);
var G__68793 = cljs.core.chunk_rest.call(null,seq__68752_68791__$1);
var G__68794 = c__25562__auto___68792;
var G__68795 = cljs.core.count.call(null,c__25562__auto___68792);
var G__68796 = (0);
seq__68752_68781 = G__68793;
chunk__68753_68782 = G__68794;
count__68754_68783 = G__68795;
i__68755_68784 = G__68796;
continue;
} else {
var param_68797 = cljs.core.first.call(null,seq__68752_68791__$1);
cljs.compiler.emit.call(null,param_68797);

if(cljs.core._EQ_.call(null,param_68797,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__68798 = cljs.core.next.call(null,seq__68752_68791__$1);
var G__68799 = null;
var G__68800 = (0);
var G__68801 = (0);
seq__68752_68781 = G__68798;
chunk__68753_68782 = G__68799;
count__68754_68783 = G__68800;
i__68755_68784 = G__68801;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_68757,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_68757,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_68756__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_68757,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_68758,";");

cljs.compiler.emitln.call(null,"return ",mname_68757,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__68805){
var map__68806 = p__68805;
var map__68806__$1 = ((((!((map__68806 == null)))?((((map__68806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68806):map__68806);
var name = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__68806__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__68802_SHARP_){
var and__24739__auto__ = p1__68802_SHARP_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__68802_SHARP_));
} else {
return and__24739__auto__;
}
});})(map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_68841__$1 = (function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_68842 = cljs.compiler.munge.call(null,name_68841__$1);
var maxparams_68843 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_68844 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_68841__$1,mname_68842,maxparams_68843,loop_locals,map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_68842),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_68841__$1,mname_68842,maxparams_68843,loop_locals,map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_68845 = cljs.core.sort_by.call(null,((function (name_68841__$1,mname_68842,maxparams_68843,mmap_68844,loop_locals,map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__68803_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__68803_SHARP_)));
});})(name_68841__$1,mname_68842,maxparams_68843,mmap_68844,loop_locals,map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_68844));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_68842," = null;");

var seq__68808_68846 = cljs.core.seq.call(null,ms_68845);
var chunk__68809_68847 = null;
var count__68810_68848 = (0);
var i__68811_68849 = (0);
while(true){
if((i__68811_68849 < count__68810_68848)){
var vec__68812_68850 = cljs.core._nth.call(null,chunk__68809_68847,i__68811_68849);
var n_68851 = cljs.core.nth.call(null,vec__68812_68850,(0),null);
var meth_68852 = cljs.core.nth.call(null,vec__68812_68850,(1),null);
cljs.compiler.emits.call(null,"var ",n_68851," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_68852))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_68852);
} else {
cljs.compiler.emit_fn_method.call(null,meth_68852);
}

cljs.compiler.emitln.call(null,";");

var G__68853 = seq__68808_68846;
var G__68854 = chunk__68809_68847;
var G__68855 = count__68810_68848;
var G__68856 = (i__68811_68849 + (1));
seq__68808_68846 = G__68853;
chunk__68809_68847 = G__68854;
count__68810_68848 = G__68855;
i__68811_68849 = G__68856;
continue;
} else {
var temp__4657__auto___68857 = cljs.core.seq.call(null,seq__68808_68846);
if(temp__4657__auto___68857){
var seq__68808_68858__$1 = temp__4657__auto___68857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68808_68858__$1)){
var c__25562__auto___68859 = cljs.core.chunk_first.call(null,seq__68808_68858__$1);
var G__68860 = cljs.core.chunk_rest.call(null,seq__68808_68858__$1);
var G__68861 = c__25562__auto___68859;
var G__68862 = cljs.core.count.call(null,c__25562__auto___68859);
var G__68863 = (0);
seq__68808_68846 = G__68860;
chunk__68809_68847 = G__68861;
count__68810_68848 = G__68862;
i__68811_68849 = G__68863;
continue;
} else {
var vec__68815_68864 = cljs.core.first.call(null,seq__68808_68858__$1);
var n_68865 = cljs.core.nth.call(null,vec__68815_68864,(0),null);
var meth_68866 = cljs.core.nth.call(null,vec__68815_68864,(1),null);
cljs.compiler.emits.call(null,"var ",n_68865," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_68866))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_68866);
} else {
cljs.compiler.emit_fn_method.call(null,meth_68866);
}

cljs.compiler.emitln.call(null,";");

var G__68867 = cljs.core.next.call(null,seq__68808_68858__$1);
var G__68868 = null;
var G__68869 = (0);
var G__68870 = (0);
seq__68808_68846 = G__68867;
chunk__68809_68847 = G__68868;
count__68810_68848 = G__68869;
i__68811_68849 = G__68870;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_68842," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_68843),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_68843)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_68843));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__68818_68871 = cljs.core.seq.call(null,ms_68845);
var chunk__68819_68872 = null;
var count__68820_68873 = (0);
var i__68821_68874 = (0);
while(true){
if((i__68821_68874 < count__68820_68873)){
var vec__68822_68875 = cljs.core._nth.call(null,chunk__68819_68872,i__68821_68874);
var n_68876 = cljs.core.nth.call(null,vec__68822_68875,(0),null);
var meth_68877 = cljs.core.nth.call(null,vec__68822_68875,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_68877))){
cljs.compiler.emitln.call(null,"default:");

var restarg_68878 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_68878," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_68879 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_68878," = new cljs.core.IndexedSeq(",a_68879,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_68876,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_68843)),(((cljs.core.count.call(null,maxparams_68843) > (1)))?", ":null),restarg_68878,");");
} else {
var pcnt_68880 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_68877));
cljs.compiler.emitln.call(null,"case ",pcnt_68880,":");

cljs.compiler.emitln.call(null,"return ",n_68876,".call(this",(((pcnt_68880 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_68880,maxparams_68843));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),",")),");");
}

var G__68881 = seq__68818_68871;
var G__68882 = chunk__68819_68872;
var G__68883 = count__68820_68873;
var G__68884 = (i__68821_68874 + (1));
seq__68818_68871 = G__68881;
chunk__68819_68872 = G__68882;
count__68820_68873 = G__68883;
i__68821_68874 = G__68884;
continue;
} else {
var temp__4657__auto___68885 = cljs.core.seq.call(null,seq__68818_68871);
if(temp__4657__auto___68885){
var seq__68818_68886__$1 = temp__4657__auto___68885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68818_68886__$1)){
var c__25562__auto___68887 = cljs.core.chunk_first.call(null,seq__68818_68886__$1);
var G__68888 = cljs.core.chunk_rest.call(null,seq__68818_68886__$1);
var G__68889 = c__25562__auto___68887;
var G__68890 = cljs.core.count.call(null,c__25562__auto___68887);
var G__68891 = (0);
seq__68818_68871 = G__68888;
chunk__68819_68872 = G__68889;
count__68820_68873 = G__68890;
i__68821_68874 = G__68891;
continue;
} else {
var vec__68825_68892 = cljs.core.first.call(null,seq__68818_68886__$1);
var n_68893 = cljs.core.nth.call(null,vec__68825_68892,(0),null);
var meth_68894 = cljs.core.nth.call(null,vec__68825_68892,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_68894))){
cljs.compiler.emitln.call(null,"default:");

var restarg_68895 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_68895," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_68896 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_68895," = new cljs.core.IndexedSeq(",a_68896,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_68893,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_68843)),(((cljs.core.count.call(null,maxparams_68843) > (1)))?", ":null),restarg_68895,");");
} else {
var pcnt_68897 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_68894));
cljs.compiler.emitln.call(null,"case ",pcnt_68897,":");

cljs.compiler.emitln.call(null,"return ",n_68893,".call(this",(((pcnt_68897 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_68897,maxparams_68843));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),",")),");");
}

var G__68898 = cljs.core.next.call(null,seq__68818_68886__$1);
var G__68899 = null;
var G__68900 = (0);
var G__68901 = (0);
seq__68818_68871 = G__68898;
chunk__68819_68872 = G__68899;
count__68820_68873 = G__68900;
i__68821_68874 = G__68901;
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
cljs.compiler.emitln.call(null,mname_68842,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_68842,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_68841__$1,mname_68842,maxparams_68843,mmap_68844,ms_68845,loop_locals,map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__68804_SHARP_){
var vec__68828 = p1__68804_SHARP_;
var n = cljs.core.nth.call(null,vec__68828,(0),null);
var m = cljs.core.nth.call(null,vec__68828,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_68841__$1,mname_68842,maxparams_68843,mmap_68844,ms_68845,loop_locals,map__68806,map__68806__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_68845),".cljs$lang$applyTo;");
} else {
}

var seq__68831_68902 = cljs.core.seq.call(null,ms_68845);
var chunk__68832_68903 = null;
var count__68833_68904 = (0);
var i__68834_68905 = (0);
while(true){
if((i__68834_68905 < count__68833_68904)){
var vec__68835_68906 = cljs.core._nth.call(null,chunk__68832_68903,i__68834_68905);
var n_68907 = cljs.core.nth.call(null,vec__68835_68906,(0),null);
var meth_68908 = cljs.core.nth.call(null,vec__68835_68906,(1),null);
var c_68909 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_68908));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_68908))){
cljs.compiler.emitln.call(null,mname_68842,".cljs$core$IFn$_invoke$arity$variadic = ",n_68907,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_68842,".cljs$core$IFn$_invoke$arity$",c_68909," = ",n_68907,";");
}

var G__68910 = seq__68831_68902;
var G__68911 = chunk__68832_68903;
var G__68912 = count__68833_68904;
var G__68913 = (i__68834_68905 + (1));
seq__68831_68902 = G__68910;
chunk__68832_68903 = G__68911;
count__68833_68904 = G__68912;
i__68834_68905 = G__68913;
continue;
} else {
var temp__4657__auto___68914 = cljs.core.seq.call(null,seq__68831_68902);
if(temp__4657__auto___68914){
var seq__68831_68915__$1 = temp__4657__auto___68914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68831_68915__$1)){
var c__25562__auto___68916 = cljs.core.chunk_first.call(null,seq__68831_68915__$1);
var G__68917 = cljs.core.chunk_rest.call(null,seq__68831_68915__$1);
var G__68918 = c__25562__auto___68916;
var G__68919 = cljs.core.count.call(null,c__25562__auto___68916);
var G__68920 = (0);
seq__68831_68902 = G__68917;
chunk__68832_68903 = G__68918;
count__68833_68904 = G__68919;
i__68834_68905 = G__68920;
continue;
} else {
var vec__68838_68921 = cljs.core.first.call(null,seq__68831_68915__$1);
var n_68922 = cljs.core.nth.call(null,vec__68838_68921,(0),null);
var meth_68923 = cljs.core.nth.call(null,vec__68838_68921,(1),null);
var c_68924 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_68923));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_68923))){
cljs.compiler.emitln.call(null,mname_68842,".cljs$core$IFn$_invoke$arity$variadic = ",n_68922,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_68842,".cljs$core$IFn$_invoke$arity$",c_68924," = ",n_68922,";");
}

var G__68925 = cljs.core.next.call(null,seq__68831_68915__$1);
var G__68926 = null;
var G__68927 = (0);
var G__68928 = (0);
seq__68831_68902 = G__68925;
chunk__68832_68903 = G__68926;
count__68833_68904 = G__68927;
i__68834_68905 = G__68928;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_68842,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__68929){
var map__68930 = p__68929;
var map__68930__$1 = ((((!((map__68930 == null)))?((((map__68930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68930):map__68930);
var statements = cljs.core.get.call(null,map__68930__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__68930__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__68930__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__24739__auto__ = statements;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24739__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__68932_68936 = cljs.core.seq.call(null,statements);
var chunk__68933_68937 = null;
var count__68934_68938 = (0);
var i__68935_68939 = (0);
while(true){
if((i__68935_68939 < count__68934_68938)){
var s_68940 = cljs.core._nth.call(null,chunk__68933_68937,i__68935_68939);
cljs.compiler.emitln.call(null,s_68940);

var G__68941 = seq__68932_68936;
var G__68942 = chunk__68933_68937;
var G__68943 = count__68934_68938;
var G__68944 = (i__68935_68939 + (1));
seq__68932_68936 = G__68941;
chunk__68933_68937 = G__68942;
count__68934_68938 = G__68943;
i__68935_68939 = G__68944;
continue;
} else {
var temp__4657__auto___68945 = cljs.core.seq.call(null,seq__68932_68936);
if(temp__4657__auto___68945){
var seq__68932_68946__$1 = temp__4657__auto___68945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68932_68946__$1)){
var c__25562__auto___68947 = cljs.core.chunk_first.call(null,seq__68932_68946__$1);
var G__68948 = cljs.core.chunk_rest.call(null,seq__68932_68946__$1);
var G__68949 = c__25562__auto___68947;
var G__68950 = cljs.core.count.call(null,c__25562__auto___68947);
var G__68951 = (0);
seq__68932_68936 = G__68948;
chunk__68933_68937 = G__68949;
count__68934_68938 = G__68950;
i__68935_68939 = G__68951;
continue;
} else {
var s_68952 = cljs.core.first.call(null,seq__68932_68946__$1);
cljs.compiler.emitln.call(null,s_68952);

var G__68953 = cljs.core.next.call(null,seq__68932_68946__$1);
var G__68954 = null;
var G__68955 = (0);
var G__68956 = (0);
seq__68932_68936 = G__68953;
chunk__68933_68937 = G__68954;
count__68934_68938 = G__68955;
i__68935_68939 = G__68956;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__24739__auto__ = statements;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24739__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__68957){
var map__68958 = p__68957;
var map__68958__$1 = ((((!((map__68958 == null)))?((((map__68958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68958):map__68958);
var env = cljs.core.get.call(null,map__68958__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__68958__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__68958__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__68958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__68958__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__68960,is_loop){
var map__68972 = p__68960;
var map__68972__$1 = ((((!((map__68972 == null)))?((((map__68972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68972):map__68972);
var bindings = cljs.core.get.call(null,map__68972__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__68972__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__68972__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_68974_68983 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_68974_68983,context,map__68972,map__68972__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_68974_68983,context,map__68972,map__68972__$1,bindings,expr,env))
,bindings):null));

try{var seq__68975_68984 = cljs.core.seq.call(null,bindings);
var chunk__68976_68985 = null;
var count__68977_68986 = (0);
var i__68978_68987 = (0);
while(true){
if((i__68978_68987 < count__68977_68986)){
var map__68979_68988 = cljs.core._nth.call(null,chunk__68976_68985,i__68978_68987);
var map__68979_68989__$1 = ((((!((map__68979_68988 == null)))?((((map__68979_68988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68979_68988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68979_68988):map__68979_68988);
var binding_68990 = map__68979_68989__$1;
var init_68991 = cljs.core.get.call(null,map__68979_68989__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_68990);

cljs.compiler.emitln.call(null," = ",init_68991,";");

var G__68992 = seq__68975_68984;
var G__68993 = chunk__68976_68985;
var G__68994 = count__68977_68986;
var G__68995 = (i__68978_68987 + (1));
seq__68975_68984 = G__68992;
chunk__68976_68985 = G__68993;
count__68977_68986 = G__68994;
i__68978_68987 = G__68995;
continue;
} else {
var temp__4657__auto___68996 = cljs.core.seq.call(null,seq__68975_68984);
if(temp__4657__auto___68996){
var seq__68975_68997__$1 = temp__4657__auto___68996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68975_68997__$1)){
var c__25562__auto___68998 = cljs.core.chunk_first.call(null,seq__68975_68997__$1);
var G__68999 = cljs.core.chunk_rest.call(null,seq__68975_68997__$1);
var G__69000 = c__25562__auto___68998;
var G__69001 = cljs.core.count.call(null,c__25562__auto___68998);
var G__69002 = (0);
seq__68975_68984 = G__68999;
chunk__68976_68985 = G__69000;
count__68977_68986 = G__69001;
i__68978_68987 = G__69002;
continue;
} else {
var map__68981_69003 = cljs.core.first.call(null,seq__68975_68997__$1);
var map__68981_69004__$1 = ((((!((map__68981_69003 == null)))?((((map__68981_69003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68981_69003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68981_69003):map__68981_69003);
var binding_69005 = map__68981_69004__$1;
var init_69006 = cljs.core.get.call(null,map__68981_69004__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_69005);

cljs.compiler.emitln.call(null," = ",init_69006,";");

var G__69007 = cljs.core.next.call(null,seq__68975_68997__$1);
var G__69008 = null;
var G__69009 = (0);
var G__69010 = (0);
seq__68975_68984 = G__69007;
chunk__68976_68985 = G__69008;
count__68977_68986 = G__69009;
i__68978_68987 = G__69010;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_68974_68983;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__69011){
var map__69012 = p__69011;
var map__69012__$1 = ((((!((map__69012 == null)))?((((map__69012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69012):map__69012);
var frame = cljs.core.get.call(null,map__69012__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__69012__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__69012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25666__auto___69014 = cljs.core.count.call(null,exprs);
var i_69015 = (0);
while(true){
if((i_69015 < n__25666__auto___69014)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_69015)," = ",exprs.call(null,i_69015),";");

var G__69016 = (i_69015 + (1));
i_69015 = G__69016;
continue;
} else {
}
break;
}

var n__25666__auto___69017 = cljs.core.count.call(null,exprs);
var i_69018 = (0);
while(true){
if((i_69018 < n__25666__auto___69017)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_69018))," = ",temps.call(null,i_69018),";");

var G__69019 = (i_69018 + (1));
i_69018 = G__69019;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__69020){
var map__69021 = p__69020;
var map__69021__$1 = ((((!((map__69021 == null)))?((((map__69021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69021):map__69021);
var bindings = cljs.core.get.call(null,map__69021__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__69021__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__69021__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__69023_69031 = cljs.core.seq.call(null,bindings);
var chunk__69024_69032 = null;
var count__69025_69033 = (0);
var i__69026_69034 = (0);
while(true){
if((i__69026_69034 < count__69025_69033)){
var map__69027_69035 = cljs.core._nth.call(null,chunk__69024_69032,i__69026_69034);
var map__69027_69036__$1 = ((((!((map__69027_69035 == null)))?((((map__69027_69035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69027_69035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69027_69035):map__69027_69035);
var binding_69037 = map__69027_69036__$1;
var init_69038 = cljs.core.get.call(null,map__69027_69036__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_69037)," = ",init_69038,";");

var G__69039 = seq__69023_69031;
var G__69040 = chunk__69024_69032;
var G__69041 = count__69025_69033;
var G__69042 = (i__69026_69034 + (1));
seq__69023_69031 = G__69039;
chunk__69024_69032 = G__69040;
count__69025_69033 = G__69041;
i__69026_69034 = G__69042;
continue;
} else {
var temp__4657__auto___69043 = cljs.core.seq.call(null,seq__69023_69031);
if(temp__4657__auto___69043){
var seq__69023_69044__$1 = temp__4657__auto___69043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69023_69044__$1)){
var c__25562__auto___69045 = cljs.core.chunk_first.call(null,seq__69023_69044__$1);
var G__69046 = cljs.core.chunk_rest.call(null,seq__69023_69044__$1);
var G__69047 = c__25562__auto___69045;
var G__69048 = cljs.core.count.call(null,c__25562__auto___69045);
var G__69049 = (0);
seq__69023_69031 = G__69046;
chunk__69024_69032 = G__69047;
count__69025_69033 = G__69048;
i__69026_69034 = G__69049;
continue;
} else {
var map__69029_69050 = cljs.core.first.call(null,seq__69023_69044__$1);
var map__69029_69051__$1 = ((((!((map__69029_69050 == null)))?((((map__69029_69050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69029_69050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69029_69050):map__69029_69050);
var binding_69052 = map__69029_69051__$1;
var init_69053 = cljs.core.get.call(null,map__69029_69051__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_69052)," = ",init_69053,";");

var G__69054 = cljs.core.next.call(null,seq__69023_69044__$1);
var G__69055 = null;
var G__69056 = (0);
var G__69057 = (0);
seq__69023_69031 = G__69054;
chunk__69024_69032 = G__69055;
count__69025_69033 = G__69056;
i__69026_69034 = G__69057;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__69060){
var map__69061 = p__69060;
var map__69061__$1 = ((((!((map__69061 == null)))?((((map__69061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69061):map__69061);
var expr = map__69061__$1;
var f = cljs.core.get.call(null,map__69061__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__69061__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__69061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__24739__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__24739__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__24739__auto__ = protocol;
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = tag;
if(cljs.core.truth_(and__24739__auto____$1)){
var or__24751__auto__ = (function (){var and__24739__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24739__auto____$2)){
var and__24739__auto____$3 = protocol;
if(cljs.core.truth_(and__24739__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__24739__auto____$3;
}
} else {
return and__24739__auto____$2;
}
})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var and__24739__auto____$2 = (function (){var or__24751__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__24751__auto____$1)){
return or__24751__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__24739__auto____$2)){
var or__24751__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__24751__auto____$1){
return or__24751__auto____$1;
} else {
var and__24739__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__24739__auto____$3){
var and__24739__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__24739__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__24739__auto____$4;
}
} else {
return and__24739__auto____$3;
}
}
} else {
return and__24739__auto____$2;
}
}
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__24751__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__24751__auto__){
return or__24751__auto__;
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
var vec__69063 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__24739__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__24739__auto__)){
return (arity > mfa);
} else {
return and__24739__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env){
return (function (p1__69058_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__69058_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env){
return (function (p1__69059_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__69059_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__69061,map__69061__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__69063,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__69063,(1),null);
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_69066 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_69066,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_69067 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_69067,args)),(((mfa_69067 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_69067,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = js_QMARK_;
if(or__24751__auto____$1){
return or__24751__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__24739__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__24739__auto__;
}
})())){
var fprop_69068 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_69068," ? ",f__$1,fprop_69068,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__69069){
var map__69070 = p__69069;
var map__69070__$1 = ((((!((map__69070 == null)))?((((map__69070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69070):map__69070);
var ctor = cljs.core.get.call(null,map__69070__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__69070__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__69070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__69072){
var map__69073 = p__69072;
var map__69073__$1 = ((((!((map__69073 == null)))?((((map__69073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69073):map__69073);
var target = cljs.core.get.call(null,map__69073__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__69073__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__69073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
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

var seq__69079_69083 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__69080_69084 = null;
var count__69081_69085 = (0);
var i__69082_69086 = (0);
while(true){
if((i__69082_69086 < count__69081_69085)){
var lib_69087 = cljs.core._nth.call(null,chunk__69080_69084,i__69082_69086);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_69087),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_69087),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_69087),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_69087),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_69087),"');");

}
}

var G__69088 = seq__69079_69083;
var G__69089 = chunk__69080_69084;
var G__69090 = count__69081_69085;
var G__69091 = (i__69082_69086 + (1));
seq__69079_69083 = G__69088;
chunk__69080_69084 = G__69089;
count__69081_69085 = G__69090;
i__69082_69086 = G__69091;
continue;
} else {
var temp__4657__auto___69092 = cljs.core.seq.call(null,seq__69079_69083);
if(temp__4657__auto___69092){
var seq__69079_69093__$1 = temp__4657__auto___69092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69079_69093__$1)){
var c__25562__auto___69094 = cljs.core.chunk_first.call(null,seq__69079_69093__$1);
var G__69095 = cljs.core.chunk_rest.call(null,seq__69079_69093__$1);
var G__69096 = c__25562__auto___69094;
var G__69097 = cljs.core.count.call(null,c__25562__auto___69094);
var G__69098 = (0);
seq__69079_69083 = G__69095;
chunk__69080_69084 = G__69096;
count__69081_69085 = G__69097;
i__69082_69086 = G__69098;
continue;
} else {
var lib_69099 = cljs.core.first.call(null,seq__69079_69093__$1);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_69099),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_69099),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_69099),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_69099),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_69099),"');");

}
}

var G__69100 = cljs.core.next.call(null,seq__69079_69093__$1);
var G__69101 = null;
var G__69102 = (0);
var G__69103 = (0);
seq__69079_69083 = G__69100;
chunk__69080_69084 = G__69101;
count__69081_69085 = G__69102;
i__69082_69086 = G__69103;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__69104){
var map__69105 = p__69104;
var map__69105__$1 = ((((!((map__69105 == null)))?((((map__69105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69105):map__69105);
var name = cljs.core.get.call(null,map__69105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__69105__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__69105__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__69105__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__69105__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__69105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__69107){
var map__69108 = p__69107;
var map__69108__$1 = ((((!((map__69108 == null)))?((((map__69108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69108):map__69108);
var t = cljs.core.get.call(null,map__69108__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__69108__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__69108__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__69108__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__69108__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__69110_69128 = cljs.core.seq.call(null,protocols);
var chunk__69111_69129 = null;
var count__69112_69130 = (0);
var i__69113_69131 = (0);
while(true){
if((i__69113_69131 < count__69112_69130)){
var protocol_69132 = cljs.core._nth.call(null,chunk__69111_69129,i__69113_69131);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_69132)].join('')),"}");

var G__69133 = seq__69110_69128;
var G__69134 = chunk__69111_69129;
var G__69135 = count__69112_69130;
var G__69136 = (i__69113_69131 + (1));
seq__69110_69128 = G__69133;
chunk__69111_69129 = G__69134;
count__69112_69130 = G__69135;
i__69113_69131 = G__69136;
continue;
} else {
var temp__4657__auto___69137 = cljs.core.seq.call(null,seq__69110_69128);
if(temp__4657__auto___69137){
var seq__69110_69138__$1 = temp__4657__auto___69137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69110_69138__$1)){
var c__25562__auto___69139 = cljs.core.chunk_first.call(null,seq__69110_69138__$1);
var G__69140 = cljs.core.chunk_rest.call(null,seq__69110_69138__$1);
var G__69141 = c__25562__auto___69139;
var G__69142 = cljs.core.count.call(null,c__25562__auto___69139);
var G__69143 = (0);
seq__69110_69128 = G__69140;
chunk__69111_69129 = G__69141;
count__69112_69130 = G__69142;
i__69113_69131 = G__69143;
continue;
} else {
var protocol_69144 = cljs.core.first.call(null,seq__69110_69138__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_69144)].join('')),"}");

var G__69145 = cljs.core.next.call(null,seq__69110_69138__$1);
var G__69146 = null;
var G__69147 = (0);
var G__69148 = (0);
seq__69110_69128 = G__69145;
chunk__69111_69129 = G__69146;
count__69112_69130 = G__69147;
i__69113_69131 = G__69148;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__69114_69149 = cljs.core.seq.call(null,fields__$1);
var chunk__69115_69150 = null;
var count__69116_69151 = (0);
var i__69117_69152 = (0);
while(true){
if((i__69117_69152 < count__69116_69151)){
var fld_69153 = cljs.core._nth.call(null,chunk__69115_69150,i__69117_69152);
cljs.compiler.emitln.call(null,"this.",fld_69153," = ",fld_69153,";");

var G__69154 = seq__69114_69149;
var G__69155 = chunk__69115_69150;
var G__69156 = count__69116_69151;
var G__69157 = (i__69117_69152 + (1));
seq__69114_69149 = G__69154;
chunk__69115_69150 = G__69155;
count__69116_69151 = G__69156;
i__69117_69152 = G__69157;
continue;
} else {
var temp__4657__auto___69158 = cljs.core.seq.call(null,seq__69114_69149);
if(temp__4657__auto___69158){
var seq__69114_69159__$1 = temp__4657__auto___69158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69114_69159__$1)){
var c__25562__auto___69160 = cljs.core.chunk_first.call(null,seq__69114_69159__$1);
var G__69161 = cljs.core.chunk_rest.call(null,seq__69114_69159__$1);
var G__69162 = c__25562__auto___69160;
var G__69163 = cljs.core.count.call(null,c__25562__auto___69160);
var G__69164 = (0);
seq__69114_69149 = G__69161;
chunk__69115_69150 = G__69162;
count__69116_69151 = G__69163;
i__69117_69152 = G__69164;
continue;
} else {
var fld_69165 = cljs.core.first.call(null,seq__69114_69159__$1);
cljs.compiler.emitln.call(null,"this.",fld_69165," = ",fld_69165,";");

var G__69166 = cljs.core.next.call(null,seq__69114_69159__$1);
var G__69167 = null;
var G__69168 = (0);
var G__69169 = (0);
seq__69114_69149 = G__69166;
chunk__69115_69150 = G__69167;
count__69116_69151 = G__69168;
i__69117_69152 = G__69169;
continue;
}
} else {
}
}
break;
}

var seq__69118_69170 = cljs.core.seq.call(null,pmasks);
var chunk__69119_69171 = null;
var count__69120_69172 = (0);
var i__69121_69173 = (0);
while(true){
if((i__69121_69173 < count__69120_69172)){
var vec__69122_69174 = cljs.core._nth.call(null,chunk__69119_69171,i__69121_69173);
var pno_69175 = cljs.core.nth.call(null,vec__69122_69174,(0),null);
var pmask_69176 = cljs.core.nth.call(null,vec__69122_69174,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_69175,"$ = ",pmask_69176,";");

var G__69177 = seq__69118_69170;
var G__69178 = chunk__69119_69171;
var G__69179 = count__69120_69172;
var G__69180 = (i__69121_69173 + (1));
seq__69118_69170 = G__69177;
chunk__69119_69171 = G__69178;
count__69120_69172 = G__69179;
i__69121_69173 = G__69180;
continue;
} else {
var temp__4657__auto___69181 = cljs.core.seq.call(null,seq__69118_69170);
if(temp__4657__auto___69181){
var seq__69118_69182__$1 = temp__4657__auto___69181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69118_69182__$1)){
var c__25562__auto___69183 = cljs.core.chunk_first.call(null,seq__69118_69182__$1);
var G__69184 = cljs.core.chunk_rest.call(null,seq__69118_69182__$1);
var G__69185 = c__25562__auto___69183;
var G__69186 = cljs.core.count.call(null,c__25562__auto___69183);
var G__69187 = (0);
seq__69118_69170 = G__69184;
chunk__69119_69171 = G__69185;
count__69120_69172 = G__69186;
i__69121_69173 = G__69187;
continue;
} else {
var vec__69125_69188 = cljs.core.first.call(null,seq__69118_69182__$1);
var pno_69189 = cljs.core.nth.call(null,vec__69125_69188,(0),null);
var pmask_69190 = cljs.core.nth.call(null,vec__69125_69188,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_69189,"$ = ",pmask_69190,";");

var G__69191 = cljs.core.next.call(null,seq__69118_69182__$1);
var G__69192 = null;
var G__69193 = (0);
var G__69194 = (0);
seq__69118_69170 = G__69191;
chunk__69119_69171 = G__69192;
count__69120_69172 = G__69193;
i__69121_69173 = G__69194;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__69195){
var map__69196 = p__69195;
var map__69196__$1 = ((((!((map__69196 == null)))?((((map__69196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69196):map__69196);
var t = cljs.core.get.call(null,map__69196__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__69196__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__69196__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__69196__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__69196__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__69198_69216 = cljs.core.seq.call(null,protocols);
var chunk__69199_69217 = null;
var count__69200_69218 = (0);
var i__69201_69219 = (0);
while(true){
if((i__69201_69219 < count__69200_69218)){
var protocol_69220 = cljs.core._nth.call(null,chunk__69199_69217,i__69201_69219);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_69220)].join('')),"}");

var G__69221 = seq__69198_69216;
var G__69222 = chunk__69199_69217;
var G__69223 = count__69200_69218;
var G__69224 = (i__69201_69219 + (1));
seq__69198_69216 = G__69221;
chunk__69199_69217 = G__69222;
count__69200_69218 = G__69223;
i__69201_69219 = G__69224;
continue;
} else {
var temp__4657__auto___69225 = cljs.core.seq.call(null,seq__69198_69216);
if(temp__4657__auto___69225){
var seq__69198_69226__$1 = temp__4657__auto___69225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69198_69226__$1)){
var c__25562__auto___69227 = cljs.core.chunk_first.call(null,seq__69198_69226__$1);
var G__69228 = cljs.core.chunk_rest.call(null,seq__69198_69226__$1);
var G__69229 = c__25562__auto___69227;
var G__69230 = cljs.core.count.call(null,c__25562__auto___69227);
var G__69231 = (0);
seq__69198_69216 = G__69228;
chunk__69199_69217 = G__69229;
count__69200_69218 = G__69230;
i__69201_69219 = G__69231;
continue;
} else {
var protocol_69232 = cljs.core.first.call(null,seq__69198_69226__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_69232)].join('')),"}");

var G__69233 = cljs.core.next.call(null,seq__69198_69226__$1);
var G__69234 = null;
var G__69235 = (0);
var G__69236 = (0);
seq__69198_69216 = G__69233;
chunk__69199_69217 = G__69234;
count__69200_69218 = G__69235;
i__69201_69219 = G__69236;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__69202_69237 = cljs.core.seq.call(null,fields__$1);
var chunk__69203_69238 = null;
var count__69204_69239 = (0);
var i__69205_69240 = (0);
while(true){
if((i__69205_69240 < count__69204_69239)){
var fld_69241 = cljs.core._nth.call(null,chunk__69203_69238,i__69205_69240);
cljs.compiler.emitln.call(null,"this.",fld_69241," = ",fld_69241,";");

var G__69242 = seq__69202_69237;
var G__69243 = chunk__69203_69238;
var G__69244 = count__69204_69239;
var G__69245 = (i__69205_69240 + (1));
seq__69202_69237 = G__69242;
chunk__69203_69238 = G__69243;
count__69204_69239 = G__69244;
i__69205_69240 = G__69245;
continue;
} else {
var temp__4657__auto___69246 = cljs.core.seq.call(null,seq__69202_69237);
if(temp__4657__auto___69246){
var seq__69202_69247__$1 = temp__4657__auto___69246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69202_69247__$1)){
var c__25562__auto___69248 = cljs.core.chunk_first.call(null,seq__69202_69247__$1);
var G__69249 = cljs.core.chunk_rest.call(null,seq__69202_69247__$1);
var G__69250 = c__25562__auto___69248;
var G__69251 = cljs.core.count.call(null,c__25562__auto___69248);
var G__69252 = (0);
seq__69202_69237 = G__69249;
chunk__69203_69238 = G__69250;
count__69204_69239 = G__69251;
i__69205_69240 = G__69252;
continue;
} else {
var fld_69253 = cljs.core.first.call(null,seq__69202_69247__$1);
cljs.compiler.emitln.call(null,"this.",fld_69253," = ",fld_69253,";");

var G__69254 = cljs.core.next.call(null,seq__69202_69247__$1);
var G__69255 = null;
var G__69256 = (0);
var G__69257 = (0);
seq__69202_69237 = G__69254;
chunk__69203_69238 = G__69255;
count__69204_69239 = G__69256;
i__69205_69240 = G__69257;
continue;
}
} else {
}
}
break;
}

var seq__69206_69258 = cljs.core.seq.call(null,pmasks);
var chunk__69207_69259 = null;
var count__69208_69260 = (0);
var i__69209_69261 = (0);
while(true){
if((i__69209_69261 < count__69208_69260)){
var vec__69210_69262 = cljs.core._nth.call(null,chunk__69207_69259,i__69209_69261);
var pno_69263 = cljs.core.nth.call(null,vec__69210_69262,(0),null);
var pmask_69264 = cljs.core.nth.call(null,vec__69210_69262,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_69263,"$ = ",pmask_69264,";");

var G__69265 = seq__69206_69258;
var G__69266 = chunk__69207_69259;
var G__69267 = count__69208_69260;
var G__69268 = (i__69209_69261 + (1));
seq__69206_69258 = G__69265;
chunk__69207_69259 = G__69266;
count__69208_69260 = G__69267;
i__69209_69261 = G__69268;
continue;
} else {
var temp__4657__auto___69269 = cljs.core.seq.call(null,seq__69206_69258);
if(temp__4657__auto___69269){
var seq__69206_69270__$1 = temp__4657__auto___69269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69206_69270__$1)){
var c__25562__auto___69271 = cljs.core.chunk_first.call(null,seq__69206_69270__$1);
var G__69272 = cljs.core.chunk_rest.call(null,seq__69206_69270__$1);
var G__69273 = c__25562__auto___69271;
var G__69274 = cljs.core.count.call(null,c__25562__auto___69271);
var G__69275 = (0);
seq__69206_69258 = G__69272;
chunk__69207_69259 = G__69273;
count__69208_69260 = G__69274;
i__69209_69261 = G__69275;
continue;
} else {
var vec__69213_69276 = cljs.core.first.call(null,seq__69206_69270__$1);
var pno_69277 = cljs.core.nth.call(null,vec__69213_69276,(0),null);
var pmask_69278 = cljs.core.nth.call(null,vec__69213_69276,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_69277,"$ = ",pmask_69278,";");

var G__69279 = cljs.core.next.call(null,seq__69206_69270__$1);
var G__69280 = null;
var G__69281 = (0);
var G__69282 = (0);
seq__69206_69258 = G__69279;
chunk__69207_69259 = G__69280;
count__69208_69260 = G__69281;
i__69209_69261 = G__69282;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__69283){
var map__69284 = p__69283;
var map__69284__$1 = ((((!((map__69284 == null)))?((((map__69284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69284):map__69284);
var target = cljs.core.get.call(null,map__69284__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__69284__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__69284__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__69284__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__69284__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__69286){
var map__69287 = p__69286;
var map__69287__$1 = ((((!((map__69287 == null)))?((((map__69287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69287):map__69287);
var op = cljs.core.get.call(null,map__69287__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__69287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__69287__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__69287__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__69287__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24739__auto__ = code;
if(cljs.core.truth_(and__24739__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24739__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__41545__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41545__auto__))){
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
var seq__69301 = cljs.core.seq.call(null,table);
var chunk__69302 = null;
var count__69303 = (0);
var i__69304 = (0);
while(true){
if((i__69304 < count__69303)){
var vec__69305 = cljs.core._nth.call(null,chunk__69302,i__69304);
var sym = cljs.core.nth.call(null,vec__69305,(0),null);
var value = cljs.core.nth.call(null,vec__69305,(1),null);
var ns_69311 = cljs.core.namespace.call(null,sym);
var name_69312 = cljs.core.name.call(null,sym);
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

var G__69313 = seq__69301;
var G__69314 = chunk__69302;
var G__69315 = count__69303;
var G__69316 = (i__69304 + (1));
seq__69301 = G__69313;
chunk__69302 = G__69314;
count__69303 = G__69315;
i__69304 = G__69316;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__69301);
if(temp__4657__auto__){
var seq__69301__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69301__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__69301__$1);
var G__69317 = cljs.core.chunk_rest.call(null,seq__69301__$1);
var G__69318 = c__25562__auto__;
var G__69319 = cljs.core.count.call(null,c__25562__auto__);
var G__69320 = (0);
seq__69301 = G__69317;
chunk__69302 = G__69318;
count__69303 = G__69319;
i__69304 = G__69320;
continue;
} else {
var vec__69308 = cljs.core.first.call(null,seq__69301__$1);
var sym = cljs.core.nth.call(null,vec__69308,(0),null);
var value = cljs.core.nth.call(null,vec__69308,(1),null);
var ns_69321 = cljs.core.namespace.call(null,sym);
var name_69322 = cljs.core.name.call(null,sym);
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

var G__69323 = cljs.core.next.call(null,seq__69301__$1);
var G__69324 = null;
var G__69325 = (0);
var G__69326 = (0);
seq__69301 = G__69323;
chunk__69302 = G__69324;
count__69303 = G__69325;
i__69304 = G__69326;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1478402642445