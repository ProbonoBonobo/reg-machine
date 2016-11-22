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
var map__58120 = s;
var map__58120__$1 = ((((!((map__58120 == null)))?((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58120):map__58120);
var name = cljs.core.get.call(null,map__58120__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__58120__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__58123 = info;
var map__58124 = G__58123;
var map__58124__$1 = ((((!((map__58124 == null)))?((((map__58124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58124):map__58124);
var shadow = cljs.core.get.call(null,map__58124__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__58123__$1 = G__58123;
while(true){
var d__$2 = d__$1;
var map__58126 = G__58123__$1;
var map__58126__$1 = ((((!((map__58126 == null)))?((((map__58126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58126):map__58126);
var shadow__$1 = cljs.core.get.call(null,map__58126__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__58128 = (d__$2 + (1));
var G__58129 = shadow__$1;
d__$1 = G__58128;
G__58123__$1 = G__58129;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__58130){
var map__58135 = p__58130;
var map__58135__$1 = ((((!((map__58135 == null)))?((((map__58135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58135):map__58135);
var name_var = map__58135__$1;
var name = cljs.core.get.call(null,map__58135__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__58135__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__58137 = info;
var map__58137__$1 = ((((!((map__58137 == null)))?((((map__58137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58137):map__58137);
var ns = cljs.core.get.call(null,map__58137__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__58137__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args58139 = [];
var len__7651__auto___58142 = arguments.length;
var i__7652__auto___58143 = (0);
while(true){
if((i__7652__auto___58143 < len__7651__auto___58142)){
args58139.push((arguments[i__7652__auto___58143]));

var G__58144 = (i__7652__auto___58143 + (1));
i__7652__auto___58143 = G__58144;
continue;
} else {
}
break;
}

var G__58141 = args58139.length;
switch (G__58141) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58139.length)].join('')));

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
var G__58147 = cp;
switch (G__58147) {
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
var seq__58153_58157 = cljs.core.seq.call(null,s);
var chunk__58154_58158 = null;
var count__58155_58159 = (0);
var i__58156_58160 = (0);
while(true){
if((i__58156_58160 < count__58155_58159)){
var c_58161 = cljs.core._nth.call(null,chunk__58154_58158,i__58156_58160);
sb.append(cljs.compiler.escape_char.call(null,c_58161));

var G__58162 = seq__58153_58157;
var G__58163 = chunk__58154_58158;
var G__58164 = count__58155_58159;
var G__58165 = (i__58156_58160 + (1));
seq__58153_58157 = G__58162;
chunk__58154_58158 = G__58163;
count__58155_58159 = G__58164;
i__58156_58160 = G__58165;
continue;
} else {
var temp__4657__auto___58166 = cljs.core.seq.call(null,seq__58153_58157);
if(temp__4657__auto___58166){
var seq__58153_58167__$1 = temp__4657__auto___58166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58153_58167__$1)){
var c__7357__auto___58168 = cljs.core.chunk_first.call(null,seq__58153_58167__$1);
var G__58169 = cljs.core.chunk_rest.call(null,seq__58153_58167__$1);
var G__58170 = c__7357__auto___58168;
var G__58171 = cljs.core.count.call(null,c__7357__auto___58168);
var G__58172 = (0);
seq__58153_58157 = G__58169;
chunk__58154_58158 = G__58170;
count__58155_58159 = G__58171;
i__58156_58160 = G__58172;
continue;
} else {
var c_58173 = cljs.core.first.call(null,seq__58153_58167__$1);
sb.append(cljs.compiler.escape_char.call(null,c_58173));

var G__58174 = cljs.core.next.call(null,seq__58153_58167__$1);
var G__58175 = null;
var G__58176 = (0);
var G__58177 = (0);
seq__58153_58157 = G__58174;
chunk__58154_58158 = G__58175;
count__58155_58159 = G__58176;
i__58156_58160 = G__58177;
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
var val__56220__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__56220__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__58183_58188 = ast;
var map__58183_58189__$1 = ((((!((map__58183_58188 == null)))?((((map__58183_58188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58183_58188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58183_58188):map__58183_58188);
var env_58190 = cljs.core.get.call(null,map__58183_58189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_58190))){
var map__58185_58191 = env_58190;
var map__58185_58192__$1 = ((((!((map__58185_58191 == null)))?((((map__58185_58191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58185_58191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58185_58191):map__58185_58191);
var line_58193 = cljs.core.get.call(null,map__58185_58192__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58194 = cljs.core.get.call(null,map__58185_58192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__58185_58191,map__58185_58192__$1,line_58193,column_58194,map__58183_58188,map__58183_58189__$1,env_58190,val__56220__auto__){
return (function (m){
var minfo = (function (){var G__58187 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__58187,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__58187;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_58193 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__58185_58191,map__58185_58192__$1,line_58193,column_58194,map__58183_58188,map__58183_58189__$1,env_58190,val__56220__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_58194)?(column_58194 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__58185_58191,map__58185_58192__$1,line_58193,column_58194,map__58183_58188,map__58183_58189__$1,env_58190,val__56220__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__58185_58191,map__58185_58192__$1,line_58193,column_58194,map__58183_58188,map__58183_58189__$1,env_58190,val__56220__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__58185_58191,map__58185_58192__$1,line_58193,column_58194,map__58183_58188,map__58183_58189__$1,env_58190,val__56220__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__58185_58191,map__58185_58192__$1,line_58193,column_58194,map__58183_58188,map__58183_58189__$1,env_58190,val__56220__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__56220__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7658__auto__ = [];
var len__7651__auto___58201 = arguments.length;
var i__7652__auto___58202 = (0);
while(true){
if((i__7652__auto___58202 < len__7651__auto___58201)){
args__7658__auto__.push((arguments[i__7652__auto___58202]));

var G__58203 = (i__7652__auto___58202 + (1));
i__7652__auto___58202 = G__58203;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__58197_58204 = cljs.core.seq.call(null,xs);
var chunk__58198_58205 = null;
var count__58199_58206 = (0);
var i__58200_58207 = (0);
while(true){
if((i__58200_58207 < count__58199_58206)){
var x_58208 = cljs.core._nth.call(null,chunk__58198_58205,i__58200_58207);
if((x_58208 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_58208)){
cljs.compiler.emit.call(null,x_58208);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_58208)){
cljs.core.apply.call(null,cljs.compiler.emits,x_58208);
} else {
if(goog.isFunction(x_58208)){
x_58208.call(null);
} else {
var s_58209 = cljs.core.print_str.call(null,x_58208);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__58197_58204,chunk__58198_58205,count__58199_58206,i__58200_58207,s_58209,x_58208){
return (function (p1__58195_SHARP_){
return (p1__58195_SHARP_ + cljs.core.count.call(null,s_58209));
});})(seq__58197_58204,chunk__58198_58205,count__58199_58206,i__58200_58207,s_58209,x_58208))
);
}

cljs.core.print.call(null,s_58209);

}
}
}
}

var G__58210 = seq__58197_58204;
var G__58211 = chunk__58198_58205;
var G__58212 = count__58199_58206;
var G__58213 = (i__58200_58207 + (1));
seq__58197_58204 = G__58210;
chunk__58198_58205 = G__58211;
count__58199_58206 = G__58212;
i__58200_58207 = G__58213;
continue;
} else {
var temp__4657__auto___58214 = cljs.core.seq.call(null,seq__58197_58204);
if(temp__4657__auto___58214){
var seq__58197_58215__$1 = temp__4657__auto___58214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58197_58215__$1)){
var c__7357__auto___58216 = cljs.core.chunk_first.call(null,seq__58197_58215__$1);
var G__58217 = cljs.core.chunk_rest.call(null,seq__58197_58215__$1);
var G__58218 = c__7357__auto___58216;
var G__58219 = cljs.core.count.call(null,c__7357__auto___58216);
var G__58220 = (0);
seq__58197_58204 = G__58217;
chunk__58198_58205 = G__58218;
count__58199_58206 = G__58219;
i__58200_58207 = G__58220;
continue;
} else {
var x_58221 = cljs.core.first.call(null,seq__58197_58215__$1);
if((x_58221 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_58221)){
cljs.compiler.emit.call(null,x_58221);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_58221)){
cljs.core.apply.call(null,cljs.compiler.emits,x_58221);
} else {
if(goog.isFunction(x_58221)){
x_58221.call(null);
} else {
var s_58222 = cljs.core.print_str.call(null,x_58221);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__58197_58204,chunk__58198_58205,count__58199_58206,i__58200_58207,s_58222,x_58221,seq__58197_58215__$1,temp__4657__auto___58214){
return (function (p1__58195_SHARP_){
return (p1__58195_SHARP_ + cljs.core.count.call(null,s_58222));
});})(seq__58197_58204,chunk__58198_58205,count__58199_58206,i__58200_58207,s_58222,x_58221,seq__58197_58215__$1,temp__4657__auto___58214))
);
}

cljs.core.print.call(null,s_58222);

}
}
}
}

var G__58223 = cljs.core.next.call(null,seq__58197_58215__$1);
var G__58224 = null;
var G__58225 = (0);
var G__58226 = (0);
seq__58197_58204 = G__58223;
chunk__58198_58205 = G__58224;
count__58199_58206 = G__58225;
i__58200_58207 = G__58226;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq58196){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58196));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7658__auto__ = [];
var len__7651__auto___58231 = arguments.length;
var i__7652__auto___58232 = (0);
while(true){
if((i__7652__auto___58232 < len__7651__auto___58231)){
args__7658__auto__.push((arguments[i__7652__auto___58232]));

var G__58233 = (i__7652__auto___58232 + (1));
i__7652__auto___58232 = G__58233;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__58228){
var map__58229 = p__58228;
var map__58229__$1 = ((((!((map__58229 == null)))?((((map__58229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58229):map__58229);
var m = map__58229__$1;
var gen_line = cljs.core.get.call(null,map__58229__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq58227){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58227));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_58236_58238 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_58237_58239 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_58236_58238,_STAR_print_fn_STAR_58237_58239,sb__7532__auto__){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_58236_58238,_STAR_print_fn_STAR_58237_58239,sb__7532__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_58237_58239;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_58236_58238;
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
var vec__58240 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__58240,(0),null);
var flags = cljs.core.nth.call(null,vec__58240,(1),null);
var pattern = cljs.core.nth.call(null,vec__58240,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__58244){
var map__58245 = p__58244;
var map__58245__$1 = ((((!((map__58245 == null)))?((((map__58245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58245):map__58245);
var arg = map__58245__$1;
var info = cljs.core.get.call(null,map__58245__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__58245__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__58245__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__58247 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__58247);
} else {
return G__58247;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__58248){
var map__58249 = p__58248;
var map__58249__$1 = ((((!((map__58249 == null)))?((((map__58249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58249):map__58249);
var arg = map__58249__$1;
var env = cljs.core.get.call(null,map__58249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__58249__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__58249__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__58249__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__58251 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__58251__$1 = ((((!((map__58251 == null)))?((((map__58251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58251):map__58251);
var name = cljs.core.get.call(null,map__58251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__58253){
var map__58254 = p__58253;
var map__58254__$1 = ((((!((map__58254 == null)))?((((map__58254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58254):map__58254);
var expr = cljs.core.get.call(null,map__58254__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__58254__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__58254__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__58256_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__58256_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__58257){
var map__58258 = p__58257;
var map__58258__$1 = ((((!((map__58258 == null)))?((((map__58258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58258):map__58258);
var env = cljs.core.get.call(null,map__58258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__58258__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__58258__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__58260){
var map__58261 = p__58260;
var map__58261__$1 = ((((!((map__58261 == null)))?((((map__58261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58261):map__58261);
var items = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__58263){
var map__58264 = p__58263;
var map__58264__$1 = ((((!((map__58264 == null)))?((((map__58264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58264):map__58264);
var items = cljs.core.get.call(null,map__58264__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__58264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_58266 = cljs.core.count.call(null,items);
if((cnt_58266 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_58266,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__58267_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__58267_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__58268){
var map__58269 = p__58268;
var map__58269__$1 = ((((!((map__58269 == null)))?((((map__58269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58269):map__58269);
var items = cljs.core.get.call(null,map__58269__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__58269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__58271){
var map__58272 = p__58271;
var map__58272__$1 = ((((!((map__58272 == null)))?((((map__58272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58272):map__58272);
var items = cljs.core.get.call(null,map__58272__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__58272__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__58272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___58290 = cljs.core.seq.call(null,items);
if(temp__4657__auto___58290){
var items_58291__$1 = temp__4657__auto___58290;
var vec__58274_58292 = items_58291__$1;
var seq__58275_58293 = cljs.core.seq.call(null,vec__58274_58292);
var first__58276_58294 = cljs.core.first.call(null,seq__58275_58293);
var seq__58275_58295__$1 = cljs.core.next.call(null,seq__58275_58293);
var vec__58277_58296 = first__58276_58294;
var k_58297 = cljs.core.nth.call(null,vec__58277_58296,(0),null);
var v_58298 = cljs.core.nth.call(null,vec__58277_58296,(1),null);
var r_58299 = seq__58275_58295__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_58297),"\": ",v_58298);

var seq__58280_58300 = cljs.core.seq.call(null,r_58299);
var chunk__58281_58301 = null;
var count__58282_58302 = (0);
var i__58283_58303 = (0);
while(true){
if((i__58283_58303 < count__58282_58302)){
var vec__58284_58304 = cljs.core._nth.call(null,chunk__58281_58301,i__58283_58303);
var k_58305__$1 = cljs.core.nth.call(null,vec__58284_58304,(0),null);
var v_58306__$1 = cljs.core.nth.call(null,vec__58284_58304,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_58305__$1),"\": ",v_58306__$1);

var G__58307 = seq__58280_58300;
var G__58308 = chunk__58281_58301;
var G__58309 = count__58282_58302;
var G__58310 = (i__58283_58303 + (1));
seq__58280_58300 = G__58307;
chunk__58281_58301 = G__58308;
count__58282_58302 = G__58309;
i__58283_58303 = G__58310;
continue;
} else {
var temp__4657__auto___58311__$1 = cljs.core.seq.call(null,seq__58280_58300);
if(temp__4657__auto___58311__$1){
var seq__58280_58312__$1 = temp__4657__auto___58311__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58280_58312__$1)){
var c__7357__auto___58313 = cljs.core.chunk_first.call(null,seq__58280_58312__$1);
var G__58314 = cljs.core.chunk_rest.call(null,seq__58280_58312__$1);
var G__58315 = c__7357__auto___58313;
var G__58316 = cljs.core.count.call(null,c__7357__auto___58313);
var G__58317 = (0);
seq__58280_58300 = G__58314;
chunk__58281_58301 = G__58315;
count__58282_58302 = G__58316;
i__58283_58303 = G__58317;
continue;
} else {
var vec__58287_58318 = cljs.core.first.call(null,seq__58280_58312__$1);
var k_58319__$1 = cljs.core.nth.call(null,vec__58287_58318,(0),null);
var v_58320__$1 = cljs.core.nth.call(null,vec__58287_58318,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_58319__$1),"\": ",v_58320__$1);

var G__58321 = cljs.core.next.call(null,seq__58280_58312__$1);
var G__58322 = null;
var G__58323 = (0);
var G__58324 = (0);
seq__58280_58300 = G__58321;
chunk__58281_58301 = G__58322;
count__58282_58302 = G__58323;
i__58283_58303 = G__58324;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__58325){
var map__58326 = p__58325;
var map__58326__$1 = ((((!((map__58326 == null)))?((((map__58326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58326):map__58326);
var form = cljs.core.get.call(null,map__58326__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__58326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__58328){
var map__58331 = p__58328;
var map__58331__$1 = ((((!((map__58331 == null)))?((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58331):map__58331);
var op = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__58333){
var map__58336 = p__58333;
var map__58336__$1 = ((((!((map__58336 == null)))?((((map__58336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58336):map__58336);
var op = cljs.core.get.call(null,map__58336__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__58336__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__58338){
var map__58339 = p__58338;
var map__58339__$1 = ((((!((map__58339 == null)))?((((map__58339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58339):map__58339);
var test = cljs.core.get.call(null,map__58339__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__58339__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__58339__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__58339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__58339__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__58341){
var map__58342 = p__58341;
var map__58342__$1 = ((((!((map__58342 == null)))?((((map__58342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58342):map__58342);
var v = cljs.core.get.call(null,map__58342__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__58342__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__58342__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__58342__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__58342__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__58344_58362 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__58345_58363 = null;
var count__58346_58364 = (0);
var i__58347_58365 = (0);
while(true){
if((i__58347_58365 < count__58346_58364)){
var vec__58348_58366 = cljs.core._nth.call(null,chunk__58345_58363,i__58347_58365);
var ts_58367 = cljs.core.nth.call(null,vec__58348_58366,(0),null);
var then_58368 = cljs.core.nth.call(null,vec__58348_58366,(1),null);
var seq__58351_58369 = cljs.core.seq.call(null,ts_58367);
var chunk__58352_58370 = null;
var count__58353_58371 = (0);
var i__58354_58372 = (0);
while(true){
if((i__58354_58372 < count__58353_58371)){
var test_58373 = cljs.core._nth.call(null,chunk__58352_58370,i__58354_58372);
cljs.compiler.emitln.call(null,"case ",test_58373,":");

var G__58374 = seq__58351_58369;
var G__58375 = chunk__58352_58370;
var G__58376 = count__58353_58371;
var G__58377 = (i__58354_58372 + (1));
seq__58351_58369 = G__58374;
chunk__58352_58370 = G__58375;
count__58353_58371 = G__58376;
i__58354_58372 = G__58377;
continue;
} else {
var temp__4657__auto___58378 = cljs.core.seq.call(null,seq__58351_58369);
if(temp__4657__auto___58378){
var seq__58351_58379__$1 = temp__4657__auto___58378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58351_58379__$1)){
var c__7357__auto___58380 = cljs.core.chunk_first.call(null,seq__58351_58379__$1);
var G__58381 = cljs.core.chunk_rest.call(null,seq__58351_58379__$1);
var G__58382 = c__7357__auto___58380;
var G__58383 = cljs.core.count.call(null,c__7357__auto___58380);
var G__58384 = (0);
seq__58351_58369 = G__58381;
chunk__58352_58370 = G__58382;
count__58353_58371 = G__58383;
i__58354_58372 = G__58384;
continue;
} else {
var test_58385 = cljs.core.first.call(null,seq__58351_58379__$1);
cljs.compiler.emitln.call(null,"case ",test_58385,":");

var G__58386 = cljs.core.next.call(null,seq__58351_58379__$1);
var G__58387 = null;
var G__58388 = (0);
var G__58389 = (0);
seq__58351_58369 = G__58386;
chunk__58352_58370 = G__58387;
count__58353_58371 = G__58388;
i__58354_58372 = G__58389;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_58368);
} else {
cljs.compiler.emitln.call(null,then_58368);
}

cljs.compiler.emitln.call(null,"break;");

var G__58390 = seq__58344_58362;
var G__58391 = chunk__58345_58363;
var G__58392 = count__58346_58364;
var G__58393 = (i__58347_58365 + (1));
seq__58344_58362 = G__58390;
chunk__58345_58363 = G__58391;
count__58346_58364 = G__58392;
i__58347_58365 = G__58393;
continue;
} else {
var temp__4657__auto___58394 = cljs.core.seq.call(null,seq__58344_58362);
if(temp__4657__auto___58394){
var seq__58344_58395__$1 = temp__4657__auto___58394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58344_58395__$1)){
var c__7357__auto___58396 = cljs.core.chunk_first.call(null,seq__58344_58395__$1);
var G__58397 = cljs.core.chunk_rest.call(null,seq__58344_58395__$1);
var G__58398 = c__7357__auto___58396;
var G__58399 = cljs.core.count.call(null,c__7357__auto___58396);
var G__58400 = (0);
seq__58344_58362 = G__58397;
chunk__58345_58363 = G__58398;
count__58346_58364 = G__58399;
i__58347_58365 = G__58400;
continue;
} else {
var vec__58355_58401 = cljs.core.first.call(null,seq__58344_58395__$1);
var ts_58402 = cljs.core.nth.call(null,vec__58355_58401,(0),null);
var then_58403 = cljs.core.nth.call(null,vec__58355_58401,(1),null);
var seq__58358_58404 = cljs.core.seq.call(null,ts_58402);
var chunk__58359_58405 = null;
var count__58360_58406 = (0);
var i__58361_58407 = (0);
while(true){
if((i__58361_58407 < count__58360_58406)){
var test_58408 = cljs.core._nth.call(null,chunk__58359_58405,i__58361_58407);
cljs.compiler.emitln.call(null,"case ",test_58408,":");

var G__58409 = seq__58358_58404;
var G__58410 = chunk__58359_58405;
var G__58411 = count__58360_58406;
var G__58412 = (i__58361_58407 + (1));
seq__58358_58404 = G__58409;
chunk__58359_58405 = G__58410;
count__58360_58406 = G__58411;
i__58361_58407 = G__58412;
continue;
} else {
var temp__4657__auto___58413__$1 = cljs.core.seq.call(null,seq__58358_58404);
if(temp__4657__auto___58413__$1){
var seq__58358_58414__$1 = temp__4657__auto___58413__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58358_58414__$1)){
var c__7357__auto___58415 = cljs.core.chunk_first.call(null,seq__58358_58414__$1);
var G__58416 = cljs.core.chunk_rest.call(null,seq__58358_58414__$1);
var G__58417 = c__7357__auto___58415;
var G__58418 = cljs.core.count.call(null,c__7357__auto___58415);
var G__58419 = (0);
seq__58358_58404 = G__58416;
chunk__58359_58405 = G__58417;
count__58360_58406 = G__58418;
i__58361_58407 = G__58419;
continue;
} else {
var test_58420 = cljs.core.first.call(null,seq__58358_58414__$1);
cljs.compiler.emitln.call(null,"case ",test_58420,":");

var G__58421 = cljs.core.next.call(null,seq__58358_58414__$1);
var G__58422 = null;
var G__58423 = (0);
var G__58424 = (0);
seq__58358_58404 = G__58421;
chunk__58359_58405 = G__58422;
count__58360_58406 = G__58423;
i__58361_58407 = G__58424;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_58403);
} else {
cljs.compiler.emitln.call(null,then_58403);
}

cljs.compiler.emitln.call(null,"break;");

var G__58425 = cljs.core.next.call(null,seq__58344_58395__$1);
var G__58426 = null;
var G__58427 = (0);
var G__58428 = (0);
seq__58344_58362 = G__58425;
chunk__58345_58363 = G__58426;
count__58346_58364 = G__58427;
i__58347_58365 = G__58428;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__58429){
var map__58430 = p__58429;
var map__58430__$1 = ((((!((map__58430 == null)))?((((map__58430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58430):map__58430);
var throw$ = cljs.core.get.call(null,map__58430__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__58430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__58437 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__58437,(0),null);
var rstr = cljs.core.nth.call(null,vec__58437,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__58437,fstr,rstr,ret_t,axstr){
return (function (p1__58432_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__58432_SHARP_);
});})(idx,vec__58437,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__58440 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__58440),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__58440;
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
return (function (p1__58441_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__58441_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__58448 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__58449 = cljs.core.seq.call(null,vec__58448);
var first__58450 = cljs.core.first.call(null,seq__58449);
var seq__58449__$1 = cljs.core.next.call(null,seq__58449);
var p = first__58450;
var first__58450__$1 = cljs.core.first.call(null,seq__58449__$1);
var seq__58449__$2 = cljs.core.next.call(null,seq__58449__$1);
var ts = first__58450__$1;
var first__58450__$2 = cljs.core.first.call(null,seq__58449__$2);
var seq__58449__$3 = cljs.core.next.call(null,seq__58449__$2);
var n = first__58450__$2;
var xs = seq__58449__$3;
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
var vec__58451 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__58452 = cljs.core.seq.call(null,vec__58451);
var first__58453 = cljs.core.first.call(null,seq__58452);
var seq__58452__$1 = cljs.core.next.call(null,seq__58452);
var p = first__58453;
var first__58453__$1 = cljs.core.first.call(null,seq__58452__$1);
var seq__58452__$2 = cljs.core.next.call(null,seq__58452__$1);
var ts = first__58453__$1;
var xs = seq__58452__$2;
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
var args58455 = [];
var len__7651__auto___58490 = arguments.length;
var i__7652__auto___58491 = (0);
while(true){
if((i__7652__auto___58491 < len__7651__auto___58490)){
args58455.push((arguments[i__7652__auto___58491]));

var G__58492 = (i__7652__auto___58491 + (1));
i__7652__auto___58491 = G__58492;
continue;
} else {
}
break;
}

var G__58457 = args58455.length;
switch (G__58457) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58455.length)].join('')));

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
var vec__58479 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__58454_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__58454_SHARP_);
} else {
return p1__58454_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__58480 = cljs.core.seq.call(null,vec__58479);
var first__58481 = cljs.core.first.call(null,seq__58480);
var seq__58480__$1 = cljs.core.next.call(null,seq__58480);
var x = first__58481;
var ys = seq__58480__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__58482 = cljs.core.seq.call(null,ys);
var chunk__58483 = null;
var count__58484 = (0);
var i__58485 = (0);
while(true){
if((i__58485 < count__58484)){
var next_line = cljs.core._nth.call(null,chunk__58483,i__58485);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__58494 = seq__58482;
var G__58495 = chunk__58483;
var G__58496 = count__58484;
var G__58497 = (i__58485 + (1));
seq__58482 = G__58494;
chunk__58483 = G__58495;
count__58484 = G__58496;
i__58485 = G__58497;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58482);
if(temp__4657__auto__){
var seq__58482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58482__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__58482__$1);
var G__58498 = cljs.core.chunk_rest.call(null,seq__58482__$1);
var G__58499 = c__7357__auto__;
var G__58500 = cljs.core.count.call(null,c__7357__auto__);
var G__58501 = (0);
seq__58482 = G__58498;
chunk__58483 = G__58499;
count__58484 = G__58500;
i__58485 = G__58501;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__58482__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__58502 = cljs.core.next.call(null,seq__58482__$1);
var G__58503 = null;
var G__58504 = (0);
var G__58505 = (0);
seq__58482 = G__58502;
chunk__58483 = G__58503;
count__58484 = G__58504;
i__58485 = G__58505;
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

var seq__58486_58506 = cljs.core.seq.call(null,docs__$2);
var chunk__58487_58507 = null;
var count__58488_58508 = (0);
var i__58489_58509 = (0);
while(true){
if((i__58489_58509 < count__58488_58508)){
var e_58510 = cljs.core._nth.call(null,chunk__58487_58507,i__58489_58509);
if(cljs.core.truth_(e_58510)){
print_comment_lines.call(null,e_58510);
} else {
}

var G__58511 = seq__58486_58506;
var G__58512 = chunk__58487_58507;
var G__58513 = count__58488_58508;
var G__58514 = (i__58489_58509 + (1));
seq__58486_58506 = G__58511;
chunk__58487_58507 = G__58512;
count__58488_58508 = G__58513;
i__58489_58509 = G__58514;
continue;
} else {
var temp__4657__auto___58515 = cljs.core.seq.call(null,seq__58486_58506);
if(temp__4657__auto___58515){
var seq__58486_58516__$1 = temp__4657__auto___58515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58486_58516__$1)){
var c__7357__auto___58517 = cljs.core.chunk_first.call(null,seq__58486_58516__$1);
var G__58518 = cljs.core.chunk_rest.call(null,seq__58486_58516__$1);
var G__58519 = c__7357__auto___58517;
var G__58520 = cljs.core.count.call(null,c__7357__auto___58517);
var G__58521 = (0);
seq__58486_58506 = G__58518;
chunk__58487_58507 = G__58519;
count__58488_58508 = G__58520;
i__58489_58509 = G__58521;
continue;
} else {
var e_58522 = cljs.core.first.call(null,seq__58486_58516__$1);
if(cljs.core.truth_(e_58522)){
print_comment_lines.call(null,e_58522);
} else {
}

var G__58523 = cljs.core.next.call(null,seq__58486_58516__$1);
var G__58524 = null;
var G__58525 = (0);
var G__58526 = (0);
seq__58486_58506 = G__58523;
chunk__58487_58507 = G__58524;
count__58488_58508 = G__58525;
i__58489_58509 = G__58526;
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
return (function (p1__58528_SHARP_){
return goog.string.startsWith(p1__58528_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__58529){
var map__58530 = p__58529;
var map__58530__$1 = ((((!((map__58530 == null)))?((((map__58530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58530):map__58530);
var name = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__58532){
var map__58553 = p__58532;
var map__58553__$1 = ((((!((map__58553 == null)))?((((map__58553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58553):map__58553);
var name = cljs.core.get.call(null,map__58553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__58553__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__58553__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__58555_58573 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__58556_58574 = null;
var count__58557_58575 = (0);
var i__58558_58576 = (0);
while(true){
if((i__58558_58576 < count__58557_58575)){
var vec__58559_58577 = cljs.core._nth.call(null,chunk__58556_58574,i__58558_58576);
var i_58578 = cljs.core.nth.call(null,vec__58559_58577,(0),null);
var param_58579 = cljs.core.nth.call(null,vec__58559_58577,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_58579);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__58580 = seq__58555_58573;
var G__58581 = chunk__58556_58574;
var G__58582 = count__58557_58575;
var G__58583 = (i__58558_58576 + (1));
seq__58555_58573 = G__58580;
chunk__58556_58574 = G__58581;
count__58557_58575 = G__58582;
i__58558_58576 = G__58583;
continue;
} else {
var temp__4657__auto___58584 = cljs.core.seq.call(null,seq__58555_58573);
if(temp__4657__auto___58584){
var seq__58555_58585__$1 = temp__4657__auto___58584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58555_58585__$1)){
var c__7357__auto___58586 = cljs.core.chunk_first.call(null,seq__58555_58585__$1);
var G__58587 = cljs.core.chunk_rest.call(null,seq__58555_58585__$1);
var G__58588 = c__7357__auto___58586;
var G__58589 = cljs.core.count.call(null,c__7357__auto___58586);
var G__58590 = (0);
seq__58555_58573 = G__58587;
chunk__58556_58574 = G__58588;
count__58557_58575 = G__58589;
i__58558_58576 = G__58590;
continue;
} else {
var vec__58562_58591 = cljs.core.first.call(null,seq__58555_58585__$1);
var i_58592 = cljs.core.nth.call(null,vec__58562_58591,(0),null);
var param_58593 = cljs.core.nth.call(null,vec__58562_58591,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_58593);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__58594 = cljs.core.next.call(null,seq__58555_58585__$1);
var G__58595 = null;
var G__58596 = (0);
var G__58597 = (0);
seq__58555_58573 = G__58594;
chunk__58556_58574 = G__58595;
count__58557_58575 = G__58596;
i__58558_58576 = G__58597;
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

var seq__58565_58598 = cljs.core.seq.call(null,params);
var chunk__58566_58599 = null;
var count__58567_58600 = (0);
var i__58568_58601 = (0);
while(true){
if((i__58568_58601 < count__58567_58600)){
var param_58602 = cljs.core._nth.call(null,chunk__58566_58599,i__58568_58601);
cljs.compiler.emit.call(null,param_58602);

if(cljs.core._EQ_.call(null,param_58602,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58603 = seq__58565_58598;
var G__58604 = chunk__58566_58599;
var G__58605 = count__58567_58600;
var G__58606 = (i__58568_58601 + (1));
seq__58565_58598 = G__58603;
chunk__58566_58599 = G__58604;
count__58567_58600 = G__58605;
i__58568_58601 = G__58606;
continue;
} else {
var temp__4657__auto___58607 = cljs.core.seq.call(null,seq__58565_58598);
if(temp__4657__auto___58607){
var seq__58565_58608__$1 = temp__4657__auto___58607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58565_58608__$1)){
var c__7357__auto___58609 = cljs.core.chunk_first.call(null,seq__58565_58608__$1);
var G__58610 = cljs.core.chunk_rest.call(null,seq__58565_58608__$1);
var G__58611 = c__7357__auto___58609;
var G__58612 = cljs.core.count.call(null,c__7357__auto___58609);
var G__58613 = (0);
seq__58565_58598 = G__58610;
chunk__58566_58599 = G__58611;
count__58567_58600 = G__58612;
i__58568_58601 = G__58613;
continue;
} else {
var param_58614 = cljs.core.first.call(null,seq__58565_58608__$1);
cljs.compiler.emit.call(null,param_58614);

if(cljs.core._EQ_.call(null,param_58614,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58615 = cljs.core.next.call(null,seq__58565_58608__$1);
var G__58616 = null;
var G__58617 = (0);
var G__58618 = (0);
seq__58565_58598 = G__58615;
chunk__58566_58599 = G__58616;
count__58567_58600 = G__58617;
i__58568_58601 = G__58618;
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

var seq__58569_58619 = cljs.core.seq.call(null,params);
var chunk__58570_58620 = null;
var count__58571_58621 = (0);
var i__58572_58622 = (0);
while(true){
if((i__58572_58622 < count__58571_58621)){
var param_58623 = cljs.core._nth.call(null,chunk__58570_58620,i__58572_58622);
cljs.compiler.emit.call(null,param_58623);

if(cljs.core._EQ_.call(null,param_58623,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58624 = seq__58569_58619;
var G__58625 = chunk__58570_58620;
var G__58626 = count__58571_58621;
var G__58627 = (i__58572_58622 + (1));
seq__58569_58619 = G__58624;
chunk__58570_58620 = G__58625;
count__58571_58621 = G__58626;
i__58572_58622 = G__58627;
continue;
} else {
var temp__4657__auto___58628 = cljs.core.seq.call(null,seq__58569_58619);
if(temp__4657__auto___58628){
var seq__58569_58629__$1 = temp__4657__auto___58628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58569_58629__$1)){
var c__7357__auto___58630 = cljs.core.chunk_first.call(null,seq__58569_58629__$1);
var G__58631 = cljs.core.chunk_rest.call(null,seq__58569_58629__$1);
var G__58632 = c__7357__auto___58630;
var G__58633 = cljs.core.count.call(null,c__7357__auto___58630);
var G__58634 = (0);
seq__58569_58619 = G__58631;
chunk__58570_58620 = G__58632;
count__58571_58621 = G__58633;
i__58572_58622 = G__58634;
continue;
} else {
var param_58635 = cljs.core.first.call(null,seq__58569_58629__$1);
cljs.compiler.emit.call(null,param_58635);

if(cljs.core._EQ_.call(null,param_58635,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58636 = cljs.core.next.call(null,seq__58569_58629__$1);
var G__58637 = null;
var G__58638 = (0);
var G__58639 = (0);
seq__58569_58619 = G__58636;
chunk__58570_58620 = G__58637;
count__58571_58621 = G__58638;
i__58572_58622 = G__58639;
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
var seq__58644 = cljs.core.seq.call(null,params);
var chunk__58645 = null;
var count__58646 = (0);
var i__58647 = (0);
while(true){
if((i__58647 < count__58646)){
var param = cljs.core._nth.call(null,chunk__58645,i__58647);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58648 = seq__58644;
var G__58649 = chunk__58645;
var G__58650 = count__58646;
var G__58651 = (i__58647 + (1));
seq__58644 = G__58648;
chunk__58645 = G__58649;
count__58646 = G__58650;
i__58647 = G__58651;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58644);
if(temp__4657__auto__){
var seq__58644__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58644__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__58644__$1);
var G__58652 = cljs.core.chunk_rest.call(null,seq__58644__$1);
var G__58653 = c__7357__auto__;
var G__58654 = cljs.core.count.call(null,c__7357__auto__);
var G__58655 = (0);
seq__58644 = G__58652;
chunk__58645 = G__58653;
count__58646 = G__58654;
i__58647 = G__58655;
continue;
} else {
var param = cljs.core.first.call(null,seq__58644__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58656 = cljs.core.next.call(null,seq__58644__$1);
var G__58657 = null;
var G__58658 = (0);
var G__58659 = (0);
seq__58644 = G__58656;
chunk__58645 = G__58657;
count__58646 = G__58658;
i__58647 = G__58659;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__58660){
var map__58663 = p__58660;
var map__58663__$1 = ((((!((map__58663 == null)))?((((map__58663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58663):map__58663);
var type = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__58665){
var map__58676 = p__58665;
var map__58676__$1 = ((((!((map__58676 == null)))?((((map__58676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58676):map__58676);
var f = map__58676__$1;
var type = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__58676__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_58686__$1 = (function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_58687 = cljs.compiler.munge.call(null,name_58686__$1);
var delegate_name_58688 = [cljs.core.str(mname_58687),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_58688," = function (");

var seq__58678_58689 = cljs.core.seq.call(null,params);
var chunk__58679_58690 = null;
var count__58680_58691 = (0);
var i__58681_58692 = (0);
while(true){
if((i__58681_58692 < count__58680_58691)){
var param_58693 = cljs.core._nth.call(null,chunk__58679_58690,i__58681_58692);
cljs.compiler.emit.call(null,param_58693);

if(cljs.core._EQ_.call(null,param_58693,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58694 = seq__58678_58689;
var G__58695 = chunk__58679_58690;
var G__58696 = count__58680_58691;
var G__58697 = (i__58681_58692 + (1));
seq__58678_58689 = G__58694;
chunk__58679_58690 = G__58695;
count__58680_58691 = G__58696;
i__58681_58692 = G__58697;
continue;
} else {
var temp__4657__auto___58698 = cljs.core.seq.call(null,seq__58678_58689);
if(temp__4657__auto___58698){
var seq__58678_58699__$1 = temp__4657__auto___58698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58678_58699__$1)){
var c__7357__auto___58700 = cljs.core.chunk_first.call(null,seq__58678_58699__$1);
var G__58701 = cljs.core.chunk_rest.call(null,seq__58678_58699__$1);
var G__58702 = c__7357__auto___58700;
var G__58703 = cljs.core.count.call(null,c__7357__auto___58700);
var G__58704 = (0);
seq__58678_58689 = G__58701;
chunk__58679_58690 = G__58702;
count__58680_58691 = G__58703;
i__58681_58692 = G__58704;
continue;
} else {
var param_58705 = cljs.core.first.call(null,seq__58678_58699__$1);
cljs.compiler.emit.call(null,param_58705);

if(cljs.core._EQ_.call(null,param_58705,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58706 = cljs.core.next.call(null,seq__58678_58699__$1);
var G__58707 = null;
var G__58708 = (0);
var G__58709 = (0);
seq__58678_58689 = G__58706;
chunk__58679_58690 = G__58707;
count__58680_58691 = G__58708;
i__58681_58692 = G__58709;
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

cljs.compiler.emitln.call(null,"var ",mname_58687," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_58710 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_58710,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_58688,".call(this,");

var seq__58682_58711 = cljs.core.seq.call(null,params);
var chunk__58683_58712 = null;
var count__58684_58713 = (0);
var i__58685_58714 = (0);
while(true){
if((i__58685_58714 < count__58684_58713)){
var param_58715 = cljs.core._nth.call(null,chunk__58683_58712,i__58685_58714);
cljs.compiler.emit.call(null,param_58715);

if(cljs.core._EQ_.call(null,param_58715,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58716 = seq__58682_58711;
var G__58717 = chunk__58683_58712;
var G__58718 = count__58684_58713;
var G__58719 = (i__58685_58714 + (1));
seq__58682_58711 = G__58716;
chunk__58683_58712 = G__58717;
count__58684_58713 = G__58718;
i__58685_58714 = G__58719;
continue;
} else {
var temp__4657__auto___58720 = cljs.core.seq.call(null,seq__58682_58711);
if(temp__4657__auto___58720){
var seq__58682_58721__$1 = temp__4657__auto___58720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58682_58721__$1)){
var c__7357__auto___58722 = cljs.core.chunk_first.call(null,seq__58682_58721__$1);
var G__58723 = cljs.core.chunk_rest.call(null,seq__58682_58721__$1);
var G__58724 = c__7357__auto___58722;
var G__58725 = cljs.core.count.call(null,c__7357__auto___58722);
var G__58726 = (0);
seq__58682_58711 = G__58723;
chunk__58683_58712 = G__58724;
count__58684_58713 = G__58725;
i__58685_58714 = G__58726;
continue;
} else {
var param_58727 = cljs.core.first.call(null,seq__58682_58721__$1);
cljs.compiler.emit.call(null,param_58727);

if(cljs.core._EQ_.call(null,param_58727,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58728 = cljs.core.next.call(null,seq__58682_58721__$1);
var G__58729 = null;
var G__58730 = (0);
var G__58731 = (0);
seq__58682_58711 = G__58728;
chunk__58683_58712 = G__58729;
count__58684_58713 = G__58730;
i__58685_58714 = G__58731;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_58687,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_58687,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_58686__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_58687,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_58688,";");

cljs.compiler.emitln.call(null,"return ",mname_58687,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__58735){
var map__58736 = p__58735;
var map__58736__$1 = ((((!((map__58736 == null)))?((((map__58736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58736):map__58736);
var name = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__58736__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__58732_SHARP_){
var and__6531__auto__ = p1__58732_SHARP_;
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__58732_SHARP_));
} else {
return and__6531__auto__;
}
});})(map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_58771__$1 = (function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_58772 = cljs.compiler.munge.call(null,name_58771__$1);
var maxparams_58773 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_58774 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_58771__$1,mname_58772,maxparams_58773,loop_locals,map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_58772),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_58771__$1,mname_58772,maxparams_58773,loop_locals,map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_58775 = cljs.core.sort_by.call(null,((function (name_58771__$1,mname_58772,maxparams_58773,mmap_58774,loop_locals,map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__58733_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__58733_SHARP_)));
});})(name_58771__$1,mname_58772,maxparams_58773,mmap_58774,loop_locals,map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_58774));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_58772," = null;");

var seq__58738_58776 = cljs.core.seq.call(null,ms_58775);
var chunk__58739_58777 = null;
var count__58740_58778 = (0);
var i__58741_58779 = (0);
while(true){
if((i__58741_58779 < count__58740_58778)){
var vec__58742_58780 = cljs.core._nth.call(null,chunk__58739_58777,i__58741_58779);
var n_58781 = cljs.core.nth.call(null,vec__58742_58780,(0),null);
var meth_58782 = cljs.core.nth.call(null,vec__58742_58780,(1),null);
cljs.compiler.emits.call(null,"var ",n_58781," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58782))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_58782);
} else {
cljs.compiler.emit_fn_method.call(null,meth_58782);
}

cljs.compiler.emitln.call(null,";");

var G__58783 = seq__58738_58776;
var G__58784 = chunk__58739_58777;
var G__58785 = count__58740_58778;
var G__58786 = (i__58741_58779 + (1));
seq__58738_58776 = G__58783;
chunk__58739_58777 = G__58784;
count__58740_58778 = G__58785;
i__58741_58779 = G__58786;
continue;
} else {
var temp__4657__auto___58787 = cljs.core.seq.call(null,seq__58738_58776);
if(temp__4657__auto___58787){
var seq__58738_58788__$1 = temp__4657__auto___58787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58738_58788__$1)){
var c__7357__auto___58789 = cljs.core.chunk_first.call(null,seq__58738_58788__$1);
var G__58790 = cljs.core.chunk_rest.call(null,seq__58738_58788__$1);
var G__58791 = c__7357__auto___58789;
var G__58792 = cljs.core.count.call(null,c__7357__auto___58789);
var G__58793 = (0);
seq__58738_58776 = G__58790;
chunk__58739_58777 = G__58791;
count__58740_58778 = G__58792;
i__58741_58779 = G__58793;
continue;
} else {
var vec__58745_58794 = cljs.core.first.call(null,seq__58738_58788__$1);
var n_58795 = cljs.core.nth.call(null,vec__58745_58794,(0),null);
var meth_58796 = cljs.core.nth.call(null,vec__58745_58794,(1),null);
cljs.compiler.emits.call(null,"var ",n_58795," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58796))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_58796);
} else {
cljs.compiler.emit_fn_method.call(null,meth_58796);
}

cljs.compiler.emitln.call(null,";");

var G__58797 = cljs.core.next.call(null,seq__58738_58788__$1);
var G__58798 = null;
var G__58799 = (0);
var G__58800 = (0);
seq__58738_58776 = G__58797;
chunk__58739_58777 = G__58798;
count__58740_58778 = G__58799;
i__58741_58779 = G__58800;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_58772," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_58773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_58773)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_58773));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__58748_58801 = cljs.core.seq.call(null,ms_58775);
var chunk__58749_58802 = null;
var count__58750_58803 = (0);
var i__58751_58804 = (0);
while(true){
if((i__58751_58804 < count__58750_58803)){
var vec__58752_58805 = cljs.core._nth.call(null,chunk__58749_58802,i__58751_58804);
var n_58806 = cljs.core.nth.call(null,vec__58752_58805,(0),null);
var meth_58807 = cljs.core.nth.call(null,vec__58752_58805,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58807))){
cljs.compiler.emitln.call(null,"default:");

var restarg_58808 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_58808," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_58809 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_58808," = new cljs.core.IndexedSeq(",a_58809,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_58806,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_58773)),(((cljs.core.count.call(null,maxparams_58773) > (1)))?", ":null),restarg_58808,");");
} else {
var pcnt_58810 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58807));
cljs.compiler.emitln.call(null,"case ",pcnt_58810,":");

cljs.compiler.emitln.call(null,"return ",n_58806,".call(this",(((pcnt_58810 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_58810,maxparams_58773));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),",")),");");
}

var G__58811 = seq__58748_58801;
var G__58812 = chunk__58749_58802;
var G__58813 = count__58750_58803;
var G__58814 = (i__58751_58804 + (1));
seq__58748_58801 = G__58811;
chunk__58749_58802 = G__58812;
count__58750_58803 = G__58813;
i__58751_58804 = G__58814;
continue;
} else {
var temp__4657__auto___58815 = cljs.core.seq.call(null,seq__58748_58801);
if(temp__4657__auto___58815){
var seq__58748_58816__$1 = temp__4657__auto___58815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58748_58816__$1)){
var c__7357__auto___58817 = cljs.core.chunk_first.call(null,seq__58748_58816__$1);
var G__58818 = cljs.core.chunk_rest.call(null,seq__58748_58816__$1);
var G__58819 = c__7357__auto___58817;
var G__58820 = cljs.core.count.call(null,c__7357__auto___58817);
var G__58821 = (0);
seq__58748_58801 = G__58818;
chunk__58749_58802 = G__58819;
count__58750_58803 = G__58820;
i__58751_58804 = G__58821;
continue;
} else {
var vec__58755_58822 = cljs.core.first.call(null,seq__58748_58816__$1);
var n_58823 = cljs.core.nth.call(null,vec__58755_58822,(0),null);
var meth_58824 = cljs.core.nth.call(null,vec__58755_58822,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58824))){
cljs.compiler.emitln.call(null,"default:");

var restarg_58825 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_58825," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_58826 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_58825," = new cljs.core.IndexedSeq(",a_58826,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_58823,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_58773)),(((cljs.core.count.call(null,maxparams_58773) > (1)))?", ":null),restarg_58825,");");
} else {
var pcnt_58827 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58824));
cljs.compiler.emitln.call(null,"case ",pcnt_58827,":");

cljs.compiler.emitln.call(null,"return ",n_58823,".call(this",(((pcnt_58827 === (0)))?null:cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_58827,maxparams_58773));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),",")),");");
}

var G__58828 = cljs.core.next.call(null,seq__58748_58816__$1);
var G__58829 = null;
var G__58830 = (0);
var G__58831 = (0);
seq__58748_58801 = G__58828;
chunk__58749_58802 = G__58829;
count__58750_58803 = G__58830;
i__58751_58804 = G__58831;
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
cljs.compiler.emitln.call(null,mname_58772,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_58772,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_58771__$1,mname_58772,maxparams_58773,mmap_58774,ms_58775,loop_locals,map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__58734_SHARP_){
var vec__58758 = p1__58734_SHARP_;
var n = cljs.core.nth.call(null,vec__58758,(0),null);
var m = cljs.core.nth.call(null,vec__58758,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_58771__$1,mname_58772,maxparams_58773,mmap_58774,ms_58775,loop_locals,map__58736,map__58736__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_58775),".cljs$lang$applyTo;");
} else {
}

var seq__58761_58832 = cljs.core.seq.call(null,ms_58775);
var chunk__58762_58833 = null;
var count__58763_58834 = (0);
var i__58764_58835 = (0);
while(true){
if((i__58764_58835 < count__58763_58834)){
var vec__58765_58836 = cljs.core._nth.call(null,chunk__58762_58833,i__58764_58835);
var n_58837 = cljs.core.nth.call(null,vec__58765_58836,(0),null);
var meth_58838 = cljs.core.nth.call(null,vec__58765_58836,(1),null);
var c_58839 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58838));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58838))){
cljs.compiler.emitln.call(null,mname_58772,".cljs$core$IFn$_invoke$arity$variadic = ",n_58837,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_58772,".cljs$core$IFn$_invoke$arity$",c_58839," = ",n_58837,";");
}

var G__58840 = seq__58761_58832;
var G__58841 = chunk__58762_58833;
var G__58842 = count__58763_58834;
var G__58843 = (i__58764_58835 + (1));
seq__58761_58832 = G__58840;
chunk__58762_58833 = G__58841;
count__58763_58834 = G__58842;
i__58764_58835 = G__58843;
continue;
} else {
var temp__4657__auto___58844 = cljs.core.seq.call(null,seq__58761_58832);
if(temp__4657__auto___58844){
var seq__58761_58845__$1 = temp__4657__auto___58844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58761_58845__$1)){
var c__7357__auto___58846 = cljs.core.chunk_first.call(null,seq__58761_58845__$1);
var G__58847 = cljs.core.chunk_rest.call(null,seq__58761_58845__$1);
var G__58848 = c__7357__auto___58846;
var G__58849 = cljs.core.count.call(null,c__7357__auto___58846);
var G__58850 = (0);
seq__58761_58832 = G__58847;
chunk__58762_58833 = G__58848;
count__58763_58834 = G__58849;
i__58764_58835 = G__58850;
continue;
} else {
var vec__58768_58851 = cljs.core.first.call(null,seq__58761_58845__$1);
var n_58852 = cljs.core.nth.call(null,vec__58768_58851,(0),null);
var meth_58853 = cljs.core.nth.call(null,vec__58768_58851,(1),null);
var c_58854 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58853));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58853))){
cljs.compiler.emitln.call(null,mname_58772,".cljs$core$IFn$_invoke$arity$variadic = ",n_58852,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_58772,".cljs$core$IFn$_invoke$arity$",c_58854," = ",n_58852,";");
}

var G__58855 = cljs.core.next.call(null,seq__58761_58845__$1);
var G__58856 = null;
var G__58857 = (0);
var G__58858 = (0);
seq__58761_58832 = G__58855;
chunk__58762_58833 = G__58856;
count__58763_58834 = G__58857;
i__58764_58835 = G__58858;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_58772,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__58859){
var map__58860 = p__58859;
var map__58860__$1 = ((((!((map__58860 == null)))?((((map__58860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58860):map__58860);
var statements = cljs.core.get.call(null,map__58860__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__58860__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__58860__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__58862_58866 = cljs.core.seq.call(null,statements);
var chunk__58863_58867 = null;
var count__58864_58868 = (0);
var i__58865_58869 = (0);
while(true){
if((i__58865_58869 < count__58864_58868)){
var s_58870 = cljs.core._nth.call(null,chunk__58863_58867,i__58865_58869);
cljs.compiler.emitln.call(null,s_58870);

var G__58871 = seq__58862_58866;
var G__58872 = chunk__58863_58867;
var G__58873 = count__58864_58868;
var G__58874 = (i__58865_58869 + (1));
seq__58862_58866 = G__58871;
chunk__58863_58867 = G__58872;
count__58864_58868 = G__58873;
i__58865_58869 = G__58874;
continue;
} else {
var temp__4657__auto___58875 = cljs.core.seq.call(null,seq__58862_58866);
if(temp__4657__auto___58875){
var seq__58862_58876__$1 = temp__4657__auto___58875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58862_58876__$1)){
var c__7357__auto___58877 = cljs.core.chunk_first.call(null,seq__58862_58876__$1);
var G__58878 = cljs.core.chunk_rest.call(null,seq__58862_58876__$1);
var G__58879 = c__7357__auto___58877;
var G__58880 = cljs.core.count.call(null,c__7357__auto___58877);
var G__58881 = (0);
seq__58862_58866 = G__58878;
chunk__58863_58867 = G__58879;
count__58864_58868 = G__58880;
i__58865_58869 = G__58881;
continue;
} else {
var s_58882 = cljs.core.first.call(null,seq__58862_58876__$1);
cljs.compiler.emitln.call(null,s_58882);

var G__58883 = cljs.core.next.call(null,seq__58862_58876__$1);
var G__58884 = null;
var G__58885 = (0);
var G__58886 = (0);
seq__58862_58866 = G__58883;
chunk__58863_58867 = G__58884;
count__58864_58868 = G__58885;
i__58865_58869 = G__58886;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__58887){
var map__58888 = p__58887;
var map__58888__$1 = ((((!((map__58888 == null)))?((((map__58888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58888):map__58888);
var env = cljs.core.get.call(null,map__58888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__58888__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__58888__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__58888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__58888__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__58890,is_loop){
var map__58902 = p__58890;
var map__58902__$1 = ((((!((map__58902 == null)))?((((map__58902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58902):map__58902);
var bindings = cljs.core.get.call(null,map__58902__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__58902__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_58904_58913 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_58904_58913,context,map__58902,map__58902__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_58904_58913,context,map__58902,map__58902__$1,bindings,expr,env))
,bindings):null));

try{var seq__58905_58914 = cljs.core.seq.call(null,bindings);
var chunk__58906_58915 = null;
var count__58907_58916 = (0);
var i__58908_58917 = (0);
while(true){
if((i__58908_58917 < count__58907_58916)){
var map__58909_58918 = cljs.core._nth.call(null,chunk__58906_58915,i__58908_58917);
var map__58909_58919__$1 = ((((!((map__58909_58918 == null)))?((((map__58909_58918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58909_58918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58909_58918):map__58909_58918);
var binding_58920 = map__58909_58919__$1;
var init_58921 = cljs.core.get.call(null,map__58909_58919__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_58920);

cljs.compiler.emitln.call(null," = ",init_58921,";");

var G__58922 = seq__58905_58914;
var G__58923 = chunk__58906_58915;
var G__58924 = count__58907_58916;
var G__58925 = (i__58908_58917 + (1));
seq__58905_58914 = G__58922;
chunk__58906_58915 = G__58923;
count__58907_58916 = G__58924;
i__58908_58917 = G__58925;
continue;
} else {
var temp__4657__auto___58926 = cljs.core.seq.call(null,seq__58905_58914);
if(temp__4657__auto___58926){
var seq__58905_58927__$1 = temp__4657__auto___58926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58905_58927__$1)){
var c__7357__auto___58928 = cljs.core.chunk_first.call(null,seq__58905_58927__$1);
var G__58929 = cljs.core.chunk_rest.call(null,seq__58905_58927__$1);
var G__58930 = c__7357__auto___58928;
var G__58931 = cljs.core.count.call(null,c__7357__auto___58928);
var G__58932 = (0);
seq__58905_58914 = G__58929;
chunk__58906_58915 = G__58930;
count__58907_58916 = G__58931;
i__58908_58917 = G__58932;
continue;
} else {
var map__58911_58933 = cljs.core.first.call(null,seq__58905_58927__$1);
var map__58911_58934__$1 = ((((!((map__58911_58933 == null)))?((((map__58911_58933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58911_58933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58911_58933):map__58911_58933);
var binding_58935 = map__58911_58934__$1;
var init_58936 = cljs.core.get.call(null,map__58911_58934__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_58935);

cljs.compiler.emitln.call(null," = ",init_58936,";");

var G__58937 = cljs.core.next.call(null,seq__58905_58927__$1);
var G__58938 = null;
var G__58939 = (0);
var G__58940 = (0);
seq__58905_58914 = G__58937;
chunk__58906_58915 = G__58938;
count__58907_58916 = G__58939;
i__58908_58917 = G__58940;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_58904_58913;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__58941){
var map__58942 = p__58941;
var map__58942__$1 = ((((!((map__58942 == null)))?((((map__58942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58942):map__58942);
var frame = cljs.core.get.call(null,map__58942__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__58942__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__58942__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7461__auto___58944 = cljs.core.count.call(null,exprs);
var i_58945 = (0);
while(true){
if((i_58945 < n__7461__auto___58944)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_58945)," = ",exprs.call(null,i_58945),";");

var G__58946 = (i_58945 + (1));
i_58945 = G__58946;
continue;
} else {
}
break;
}

var n__7461__auto___58947 = cljs.core.count.call(null,exprs);
var i_58948 = (0);
while(true){
if((i_58948 < n__7461__auto___58947)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_58948))," = ",temps.call(null,i_58948),";");

var G__58949 = (i_58948 + (1));
i_58948 = G__58949;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__58950){
var map__58951 = p__58950;
var map__58951__$1 = ((((!((map__58951 == null)))?((((map__58951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58951):map__58951);
var bindings = cljs.core.get.call(null,map__58951__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__58951__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58951__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__58953_58961 = cljs.core.seq.call(null,bindings);
var chunk__58954_58962 = null;
var count__58955_58963 = (0);
var i__58956_58964 = (0);
while(true){
if((i__58956_58964 < count__58955_58963)){
var map__58957_58965 = cljs.core._nth.call(null,chunk__58954_58962,i__58956_58964);
var map__58957_58966__$1 = ((((!((map__58957_58965 == null)))?((((map__58957_58965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58957_58965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58957_58965):map__58957_58965);
var binding_58967 = map__58957_58966__$1;
var init_58968 = cljs.core.get.call(null,map__58957_58966__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_58967)," = ",init_58968,";");

var G__58969 = seq__58953_58961;
var G__58970 = chunk__58954_58962;
var G__58971 = count__58955_58963;
var G__58972 = (i__58956_58964 + (1));
seq__58953_58961 = G__58969;
chunk__58954_58962 = G__58970;
count__58955_58963 = G__58971;
i__58956_58964 = G__58972;
continue;
} else {
var temp__4657__auto___58973 = cljs.core.seq.call(null,seq__58953_58961);
if(temp__4657__auto___58973){
var seq__58953_58974__$1 = temp__4657__auto___58973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58953_58974__$1)){
var c__7357__auto___58975 = cljs.core.chunk_first.call(null,seq__58953_58974__$1);
var G__58976 = cljs.core.chunk_rest.call(null,seq__58953_58974__$1);
var G__58977 = c__7357__auto___58975;
var G__58978 = cljs.core.count.call(null,c__7357__auto___58975);
var G__58979 = (0);
seq__58953_58961 = G__58976;
chunk__58954_58962 = G__58977;
count__58955_58963 = G__58978;
i__58956_58964 = G__58979;
continue;
} else {
var map__58959_58980 = cljs.core.first.call(null,seq__58953_58974__$1);
var map__58959_58981__$1 = ((((!((map__58959_58980 == null)))?((((map__58959_58980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58959_58980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58959_58980):map__58959_58980);
var binding_58982 = map__58959_58981__$1;
var init_58983 = cljs.core.get.call(null,map__58959_58981__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_58982)," = ",init_58983,";");

var G__58984 = cljs.core.next.call(null,seq__58953_58974__$1);
var G__58985 = null;
var G__58986 = (0);
var G__58987 = (0);
seq__58953_58961 = G__58984;
chunk__58954_58962 = G__58985;
count__58955_58963 = G__58986;
i__58956_58964 = G__58987;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__58990){
var map__58991 = p__58990;
var map__58991__$1 = ((((!((map__58991 == null)))?((((map__58991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58991):map__58991);
var expr = map__58991__$1;
var f = cljs.core.get.call(null,map__58991__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__58991__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__58991__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__58993 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env){
return (function (p1__58988_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__58988_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env){
return (function (p1__58989_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__58989_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58991,map__58991__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__58993,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__58993,(1),null);
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_58996 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_58996,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_58997 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_58997,args)),(((mfa_58997 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_58997,args)),"], 0))");
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
var fprop_58998 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_58998," ? ",f__$1,fprop_58998,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__58999){
var map__59000 = p__58999;
var map__59000__$1 = ((((!((map__59000 == null)))?((((map__59000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59000):map__59000);
var ctor = cljs.core.get.call(null,map__59000__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__59000__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__59000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__59002){
var map__59003 = p__59002;
var map__59003__$1 = ((((!((map__59003 == null)))?((((map__59003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59003):map__59003);
var target = cljs.core.get.call(null,map__59003__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__59003__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__59003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
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

var seq__59009_59013 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__59010_59014 = null;
var count__59011_59015 = (0);
var i__59012_59016 = (0);
while(true){
if((i__59012_59016 < count__59011_59015)){
var lib_59017 = cljs.core._nth.call(null,chunk__59010_59014,i__59012_59016);
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_59017),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_59017),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_59017),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_59017),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_59017),"');");

}
}

var G__59018 = seq__59009_59013;
var G__59019 = chunk__59010_59014;
var G__59020 = count__59011_59015;
var G__59021 = (i__59012_59016 + (1));
seq__59009_59013 = G__59018;
chunk__59010_59014 = G__59019;
count__59011_59015 = G__59020;
i__59012_59016 = G__59021;
continue;
} else {
var temp__4657__auto___59022 = cljs.core.seq.call(null,seq__59009_59013);
if(temp__4657__auto___59022){
var seq__59009_59023__$1 = temp__4657__auto___59022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59009_59023__$1)){
var c__7357__auto___59024 = cljs.core.chunk_first.call(null,seq__59009_59023__$1);
var G__59025 = cljs.core.chunk_rest.call(null,seq__59009_59023__$1);
var G__59026 = c__7357__auto___59024;
var G__59027 = cljs.core.count.call(null,c__7357__auto___59024);
var G__59028 = (0);
seq__59009_59013 = G__59025;
chunk__59010_59014 = G__59026;
count__59011_59015 = G__59027;
i__59012_59016 = G__59028;
continue;
} else {
var lib_59029 = cljs.core.first.call(null,seq__59009_59023__$1);
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_59029),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_59029),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6543__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_59029),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_59029),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_59029),"');");

}
}

var G__59030 = cljs.core.next.call(null,seq__59009_59023__$1);
var G__59031 = null;
var G__59032 = (0);
var G__59033 = (0);
seq__59009_59013 = G__59030;
chunk__59010_59014 = G__59031;
count__59011_59015 = G__59032;
i__59012_59016 = G__59033;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__59034){
var map__59035 = p__59034;
var map__59035__$1 = ((((!((map__59035 == null)))?((((map__59035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59035):map__59035);
var name = cljs.core.get.call(null,map__59035__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__59035__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__59035__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__59035__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__59035__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__59035__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__59037){
var map__59038 = p__59037;
var map__59038__$1 = ((((!((map__59038 == null)))?((((map__59038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59038):map__59038);
var name = cljs.core.get.call(null,map__59038__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__59038__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__59038__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__59038__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__59038__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__59038__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__59040){
var map__59041 = p__59040;
var map__59041__$1 = ((((!((map__59041 == null)))?((((map__59041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59041):map__59041);
var t = cljs.core.get.call(null,map__59041__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__59041__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__59041__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__59041__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__59041__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__59043_59061 = cljs.core.seq.call(null,protocols);
var chunk__59044_59062 = null;
var count__59045_59063 = (0);
var i__59046_59064 = (0);
while(true){
if((i__59046_59064 < count__59045_59063)){
var protocol_59065 = cljs.core._nth.call(null,chunk__59044_59062,i__59046_59064);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_59065)].join('')),"}");

var G__59066 = seq__59043_59061;
var G__59067 = chunk__59044_59062;
var G__59068 = count__59045_59063;
var G__59069 = (i__59046_59064 + (1));
seq__59043_59061 = G__59066;
chunk__59044_59062 = G__59067;
count__59045_59063 = G__59068;
i__59046_59064 = G__59069;
continue;
} else {
var temp__4657__auto___59070 = cljs.core.seq.call(null,seq__59043_59061);
if(temp__4657__auto___59070){
var seq__59043_59071__$1 = temp__4657__auto___59070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59043_59071__$1)){
var c__7357__auto___59072 = cljs.core.chunk_first.call(null,seq__59043_59071__$1);
var G__59073 = cljs.core.chunk_rest.call(null,seq__59043_59071__$1);
var G__59074 = c__7357__auto___59072;
var G__59075 = cljs.core.count.call(null,c__7357__auto___59072);
var G__59076 = (0);
seq__59043_59061 = G__59073;
chunk__59044_59062 = G__59074;
count__59045_59063 = G__59075;
i__59046_59064 = G__59076;
continue;
} else {
var protocol_59077 = cljs.core.first.call(null,seq__59043_59071__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_59077)].join('')),"}");

var G__59078 = cljs.core.next.call(null,seq__59043_59071__$1);
var G__59079 = null;
var G__59080 = (0);
var G__59081 = (0);
seq__59043_59061 = G__59078;
chunk__59044_59062 = G__59079;
count__59045_59063 = G__59080;
i__59046_59064 = G__59081;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__59047_59082 = cljs.core.seq.call(null,fields__$1);
var chunk__59048_59083 = null;
var count__59049_59084 = (0);
var i__59050_59085 = (0);
while(true){
if((i__59050_59085 < count__59049_59084)){
var fld_59086 = cljs.core._nth.call(null,chunk__59048_59083,i__59050_59085);
cljs.compiler.emitln.call(null,"this.",fld_59086," = ",fld_59086,";");

var G__59087 = seq__59047_59082;
var G__59088 = chunk__59048_59083;
var G__59089 = count__59049_59084;
var G__59090 = (i__59050_59085 + (1));
seq__59047_59082 = G__59087;
chunk__59048_59083 = G__59088;
count__59049_59084 = G__59089;
i__59050_59085 = G__59090;
continue;
} else {
var temp__4657__auto___59091 = cljs.core.seq.call(null,seq__59047_59082);
if(temp__4657__auto___59091){
var seq__59047_59092__$1 = temp__4657__auto___59091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59047_59092__$1)){
var c__7357__auto___59093 = cljs.core.chunk_first.call(null,seq__59047_59092__$1);
var G__59094 = cljs.core.chunk_rest.call(null,seq__59047_59092__$1);
var G__59095 = c__7357__auto___59093;
var G__59096 = cljs.core.count.call(null,c__7357__auto___59093);
var G__59097 = (0);
seq__59047_59082 = G__59094;
chunk__59048_59083 = G__59095;
count__59049_59084 = G__59096;
i__59050_59085 = G__59097;
continue;
} else {
var fld_59098 = cljs.core.first.call(null,seq__59047_59092__$1);
cljs.compiler.emitln.call(null,"this.",fld_59098," = ",fld_59098,";");

var G__59099 = cljs.core.next.call(null,seq__59047_59092__$1);
var G__59100 = null;
var G__59101 = (0);
var G__59102 = (0);
seq__59047_59082 = G__59099;
chunk__59048_59083 = G__59100;
count__59049_59084 = G__59101;
i__59050_59085 = G__59102;
continue;
}
} else {
}
}
break;
}

var seq__59051_59103 = cljs.core.seq.call(null,pmasks);
var chunk__59052_59104 = null;
var count__59053_59105 = (0);
var i__59054_59106 = (0);
while(true){
if((i__59054_59106 < count__59053_59105)){
var vec__59055_59107 = cljs.core._nth.call(null,chunk__59052_59104,i__59054_59106);
var pno_59108 = cljs.core.nth.call(null,vec__59055_59107,(0),null);
var pmask_59109 = cljs.core.nth.call(null,vec__59055_59107,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_59108,"$ = ",pmask_59109,";");

var G__59110 = seq__59051_59103;
var G__59111 = chunk__59052_59104;
var G__59112 = count__59053_59105;
var G__59113 = (i__59054_59106 + (1));
seq__59051_59103 = G__59110;
chunk__59052_59104 = G__59111;
count__59053_59105 = G__59112;
i__59054_59106 = G__59113;
continue;
} else {
var temp__4657__auto___59114 = cljs.core.seq.call(null,seq__59051_59103);
if(temp__4657__auto___59114){
var seq__59051_59115__$1 = temp__4657__auto___59114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59051_59115__$1)){
var c__7357__auto___59116 = cljs.core.chunk_first.call(null,seq__59051_59115__$1);
var G__59117 = cljs.core.chunk_rest.call(null,seq__59051_59115__$1);
var G__59118 = c__7357__auto___59116;
var G__59119 = cljs.core.count.call(null,c__7357__auto___59116);
var G__59120 = (0);
seq__59051_59103 = G__59117;
chunk__59052_59104 = G__59118;
count__59053_59105 = G__59119;
i__59054_59106 = G__59120;
continue;
} else {
var vec__59058_59121 = cljs.core.first.call(null,seq__59051_59115__$1);
var pno_59122 = cljs.core.nth.call(null,vec__59058_59121,(0),null);
var pmask_59123 = cljs.core.nth.call(null,vec__59058_59121,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_59122,"$ = ",pmask_59123,";");

var G__59124 = cljs.core.next.call(null,seq__59051_59115__$1);
var G__59125 = null;
var G__59126 = (0);
var G__59127 = (0);
seq__59051_59103 = G__59124;
chunk__59052_59104 = G__59125;
count__59053_59105 = G__59126;
i__59054_59106 = G__59127;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__59128){
var map__59129 = p__59128;
var map__59129__$1 = ((((!((map__59129 == null)))?((((map__59129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59129):map__59129);
var t = cljs.core.get.call(null,map__59129__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__59129__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__59129__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__59129__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__59129__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__59131_59149 = cljs.core.seq.call(null,protocols);
var chunk__59132_59150 = null;
var count__59133_59151 = (0);
var i__59134_59152 = (0);
while(true){
if((i__59134_59152 < count__59133_59151)){
var protocol_59153 = cljs.core._nth.call(null,chunk__59132_59150,i__59134_59152);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_59153)].join('')),"}");

var G__59154 = seq__59131_59149;
var G__59155 = chunk__59132_59150;
var G__59156 = count__59133_59151;
var G__59157 = (i__59134_59152 + (1));
seq__59131_59149 = G__59154;
chunk__59132_59150 = G__59155;
count__59133_59151 = G__59156;
i__59134_59152 = G__59157;
continue;
} else {
var temp__4657__auto___59158 = cljs.core.seq.call(null,seq__59131_59149);
if(temp__4657__auto___59158){
var seq__59131_59159__$1 = temp__4657__auto___59158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59131_59159__$1)){
var c__7357__auto___59160 = cljs.core.chunk_first.call(null,seq__59131_59159__$1);
var G__59161 = cljs.core.chunk_rest.call(null,seq__59131_59159__$1);
var G__59162 = c__7357__auto___59160;
var G__59163 = cljs.core.count.call(null,c__7357__auto___59160);
var G__59164 = (0);
seq__59131_59149 = G__59161;
chunk__59132_59150 = G__59162;
count__59133_59151 = G__59163;
i__59134_59152 = G__59164;
continue;
} else {
var protocol_59165 = cljs.core.first.call(null,seq__59131_59159__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_59165)].join('')),"}");

var G__59166 = cljs.core.next.call(null,seq__59131_59159__$1);
var G__59167 = null;
var G__59168 = (0);
var G__59169 = (0);
seq__59131_59149 = G__59166;
chunk__59132_59150 = G__59167;
count__59133_59151 = G__59168;
i__59134_59152 = G__59169;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__59135_59170 = cljs.core.seq.call(null,fields__$1);
var chunk__59136_59171 = null;
var count__59137_59172 = (0);
var i__59138_59173 = (0);
while(true){
if((i__59138_59173 < count__59137_59172)){
var fld_59174 = cljs.core._nth.call(null,chunk__59136_59171,i__59138_59173);
cljs.compiler.emitln.call(null,"this.",fld_59174," = ",fld_59174,";");

var G__59175 = seq__59135_59170;
var G__59176 = chunk__59136_59171;
var G__59177 = count__59137_59172;
var G__59178 = (i__59138_59173 + (1));
seq__59135_59170 = G__59175;
chunk__59136_59171 = G__59176;
count__59137_59172 = G__59177;
i__59138_59173 = G__59178;
continue;
} else {
var temp__4657__auto___59179 = cljs.core.seq.call(null,seq__59135_59170);
if(temp__4657__auto___59179){
var seq__59135_59180__$1 = temp__4657__auto___59179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59135_59180__$1)){
var c__7357__auto___59181 = cljs.core.chunk_first.call(null,seq__59135_59180__$1);
var G__59182 = cljs.core.chunk_rest.call(null,seq__59135_59180__$1);
var G__59183 = c__7357__auto___59181;
var G__59184 = cljs.core.count.call(null,c__7357__auto___59181);
var G__59185 = (0);
seq__59135_59170 = G__59182;
chunk__59136_59171 = G__59183;
count__59137_59172 = G__59184;
i__59138_59173 = G__59185;
continue;
} else {
var fld_59186 = cljs.core.first.call(null,seq__59135_59180__$1);
cljs.compiler.emitln.call(null,"this.",fld_59186," = ",fld_59186,";");

var G__59187 = cljs.core.next.call(null,seq__59135_59180__$1);
var G__59188 = null;
var G__59189 = (0);
var G__59190 = (0);
seq__59135_59170 = G__59187;
chunk__59136_59171 = G__59188;
count__59137_59172 = G__59189;
i__59138_59173 = G__59190;
continue;
}
} else {
}
}
break;
}

var seq__59139_59191 = cljs.core.seq.call(null,pmasks);
var chunk__59140_59192 = null;
var count__59141_59193 = (0);
var i__59142_59194 = (0);
while(true){
if((i__59142_59194 < count__59141_59193)){
var vec__59143_59195 = cljs.core._nth.call(null,chunk__59140_59192,i__59142_59194);
var pno_59196 = cljs.core.nth.call(null,vec__59143_59195,(0),null);
var pmask_59197 = cljs.core.nth.call(null,vec__59143_59195,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_59196,"$ = ",pmask_59197,";");

var G__59198 = seq__59139_59191;
var G__59199 = chunk__59140_59192;
var G__59200 = count__59141_59193;
var G__59201 = (i__59142_59194 + (1));
seq__59139_59191 = G__59198;
chunk__59140_59192 = G__59199;
count__59141_59193 = G__59200;
i__59142_59194 = G__59201;
continue;
} else {
var temp__4657__auto___59202 = cljs.core.seq.call(null,seq__59139_59191);
if(temp__4657__auto___59202){
var seq__59139_59203__$1 = temp__4657__auto___59202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59139_59203__$1)){
var c__7357__auto___59204 = cljs.core.chunk_first.call(null,seq__59139_59203__$1);
var G__59205 = cljs.core.chunk_rest.call(null,seq__59139_59203__$1);
var G__59206 = c__7357__auto___59204;
var G__59207 = cljs.core.count.call(null,c__7357__auto___59204);
var G__59208 = (0);
seq__59139_59191 = G__59205;
chunk__59140_59192 = G__59206;
count__59141_59193 = G__59207;
i__59142_59194 = G__59208;
continue;
} else {
var vec__59146_59209 = cljs.core.first.call(null,seq__59139_59203__$1);
var pno_59210 = cljs.core.nth.call(null,vec__59146_59209,(0),null);
var pmask_59211 = cljs.core.nth.call(null,vec__59146_59209,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_59210,"$ = ",pmask_59211,";");

var G__59212 = cljs.core.next.call(null,seq__59139_59203__$1);
var G__59213 = null;
var G__59214 = (0);
var G__59215 = (0);
seq__59139_59191 = G__59212;
chunk__59140_59192 = G__59213;
count__59141_59193 = G__59214;
i__59142_59194 = G__59215;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__59216){
var map__59217 = p__59216;
var map__59217__$1 = ((((!((map__59217 == null)))?((((map__59217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59217):map__59217);
var target = cljs.core.get.call(null,map__59217__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__59217__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__59217__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__59217__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__59217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__59219){
var map__59220 = p__59219;
var map__59220__$1 = ((((!((map__59220 == null)))?((((map__59220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59220):map__59220);
var op = cljs.core.get.call(null,map__59220__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__59220__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__59220__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__59220__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__59220__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6531__auto__ = code;
if(cljs.core.truth_(and__6531__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6531__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__58104__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__58104__auto__))){
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
var seq__59234 = cljs.core.seq.call(null,table);
var chunk__59235 = null;
var count__59236 = (0);
var i__59237 = (0);
while(true){
if((i__59237 < count__59236)){
var vec__59238 = cljs.core._nth.call(null,chunk__59235,i__59237);
var sym = cljs.core.nth.call(null,vec__59238,(0),null);
var value = cljs.core.nth.call(null,vec__59238,(1),null);
var ns_59244 = cljs.core.namespace.call(null,sym);
var name_59245 = cljs.core.name.call(null,sym);
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

var G__59246 = seq__59234;
var G__59247 = chunk__59235;
var G__59248 = count__59236;
var G__59249 = (i__59237 + (1));
seq__59234 = G__59246;
chunk__59235 = G__59247;
count__59236 = G__59248;
i__59237 = G__59249;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59234);
if(temp__4657__auto__){
var seq__59234__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59234__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__59234__$1);
var G__59250 = cljs.core.chunk_rest.call(null,seq__59234__$1);
var G__59251 = c__7357__auto__;
var G__59252 = cljs.core.count.call(null,c__7357__auto__);
var G__59253 = (0);
seq__59234 = G__59250;
chunk__59235 = G__59251;
count__59236 = G__59252;
i__59237 = G__59253;
continue;
} else {
var vec__59241 = cljs.core.first.call(null,seq__59234__$1);
var sym = cljs.core.nth.call(null,vec__59241,(0),null);
var value = cljs.core.nth.call(null,vec__59241,(1),null);
var ns_59254 = cljs.core.namespace.call(null,sym);
var name_59255 = cljs.core.name.call(null,sym);
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

var G__59256 = cljs.core.next.call(null,seq__59234__$1);
var G__59257 = null;
var G__59258 = (0);
var G__59259 = (0);
seq__59234 = G__59256;
chunk__59235 = G__59257;
count__59236 = G__59258;
i__59237 = G__59259;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map