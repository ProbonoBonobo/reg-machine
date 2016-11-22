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
var map__57493 = s;
var map__57493__$1 = ((((!((map__57493 == null)))?((((map__57493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57493):map__57493);
var name = cljs.core.get.call(null,map__57493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__57493__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__57496 = info;
var map__57497 = G__57496;
var map__57497__$1 = ((((!((map__57497 == null)))?((((map__57497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57497):map__57497);
var shadow = cljs.core.get.call(null,map__57497__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__57496__$1 = G__57496;
while(true){
var d__$2 = d__$1;
var map__57499 = G__57496__$1;
var map__57499__$1 = ((((!((map__57499 == null)))?((((map__57499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57499):map__57499);
var shadow__$1 = cljs.core.get.call(null,map__57499__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__57501 = (d__$2 + (1));
var G__57502 = shadow__$1;
d__$1 = G__57501;
G__57496__$1 = G__57502;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__57503){
var map__57508 = p__57503;
var map__57508__$1 = ((((!((map__57508 == null)))?((((map__57508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57508):map__57508);
var name_var = map__57508__$1;
var name = cljs.core.get.call(null,map__57508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__57508__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__57510 = info;
var map__57510__$1 = ((((!((map__57510 == null)))?((((map__57510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57510):map__57510);
var ns = cljs.core.get.call(null,map__57510__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__57510__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args57512 = [];
var len__26007__auto___57515 = arguments.length;
var i__26008__auto___57516 = (0);
while(true){
if((i__26008__auto___57516 < len__26007__auto___57515)){
args57512.push((arguments[i__26008__auto___57516]));

var G__57517 = (i__26008__auto___57516 + (1));
i__26008__auto___57516 = G__57517;
continue;
} else {
}
break;
}

var G__57514 = args57512.length;
switch (G__57514) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57512.length)].join('')));

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
var G__57520 = cp;
switch (G__57520) {
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
var seq__57526_57530 = cljs.core.seq.call(null,s);
var chunk__57527_57531 = null;
var count__57528_57532 = (0);
var i__57529_57533 = (0);
while(true){
if((i__57529_57533 < count__57528_57532)){
var c_57534 = cljs.core._nth.call(null,chunk__57527_57531,i__57529_57533);
sb.append(cljs.compiler.escape_char.call(null,c_57534));

var G__57535 = seq__57526_57530;
var G__57536 = chunk__57527_57531;
var G__57537 = count__57528_57532;
var G__57538 = (i__57529_57533 + (1));
seq__57526_57530 = G__57535;
chunk__57527_57531 = G__57536;
count__57528_57532 = G__57537;
i__57529_57533 = G__57538;
continue;
} else {
var temp__4657__auto___57539 = cljs.core.seq.call(null,seq__57526_57530);
if(temp__4657__auto___57539){
var seq__57526_57540__$1 = temp__4657__auto___57539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57526_57540__$1)){
var c__25713__auto___57541 = cljs.core.chunk_first.call(null,seq__57526_57540__$1);
var G__57542 = cljs.core.chunk_rest.call(null,seq__57526_57540__$1);
var G__57543 = c__25713__auto___57541;
var G__57544 = cljs.core.count.call(null,c__25713__auto___57541);
var G__57545 = (0);
seq__57526_57530 = G__57542;
chunk__57527_57531 = G__57543;
count__57528_57532 = G__57544;
i__57529_57533 = G__57545;
continue;
} else {
var c_57546 = cljs.core.first.call(null,seq__57526_57540__$1);
sb.append(cljs.compiler.escape_char.call(null,c_57546));

var G__57547 = cljs.core.next.call(null,seq__57526_57540__$1);
var G__57548 = null;
var G__57549 = (0);
var G__57550 = (0);
seq__57526_57530 = G__57547;
chunk__57527_57531 = G__57548;
count__57528_57532 = G__57549;
i__57529_57533 = G__57550;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__25827__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25828__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25829__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25830__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25831__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25831__auto__,method_table__25827__auto__,prefer_table__25828__auto__,method_cache__25829__auto__,cached_hierarchy__25830__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__55605__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__55605__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__57556_57561 = ast;
var map__57556_57562__$1 = ((((!((map__57556_57561 == null)))?((((map__57556_57561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57556_57561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57556_57561):map__57556_57561);
var env_57563 = cljs.core.get.call(null,map__57556_57562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_57563))){
var map__57558_57564 = env_57563;
var map__57558_57565__$1 = ((((!((map__57558_57564 == null)))?((((map__57558_57564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57558_57564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57558_57564):map__57558_57564);
var line_57566 = cljs.core.get.call(null,map__57558_57565__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57567 = cljs.core.get.call(null,map__57558_57565__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__57558_57564,map__57558_57565__$1,line_57566,column_57567,map__57556_57561,map__57556_57562__$1,env_57563,val__55605__auto__){
return (function (m){
var minfo = (function (){var G__57560 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__57560,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__57560;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_57566 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__57558_57564,map__57558_57565__$1,line_57566,column_57567,map__57556_57561,map__57556_57562__$1,env_57563,val__55605__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_57567)?(column_57567 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__57558_57564,map__57558_57565__$1,line_57566,column_57567,map__57556_57561,map__57556_57562__$1,env_57563,val__55605__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__57558_57564,map__57558_57565__$1,line_57566,column_57567,map__57556_57561,map__57556_57562__$1,env_57563,val__55605__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__57558_57564,map__57558_57565__$1,line_57566,column_57567,map__57556_57561,map__57556_57562__$1,env_57563,val__55605__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__57558_57564,map__57558_57565__$1,line_57566,column_57567,map__57556_57561,map__57556_57562__$1,env_57563,val__55605__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__55605__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__26014__auto__ = [];
var len__26007__auto___57574 = arguments.length;
var i__26008__auto___57575 = (0);
while(true){
if((i__26008__auto___57575 < len__26007__auto___57574)){
args__26014__auto__.push((arguments[i__26008__auto___57575]));

var G__57576 = (i__26008__auto___57575 + (1));
i__26008__auto___57575 = G__57576;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__57570_57577 = cljs.core.seq.call(null,xs);
var chunk__57571_57578 = null;
var count__57572_57579 = (0);
var i__57573_57580 = (0);
while(true){
if((i__57573_57580 < count__57572_57579)){
var x_57581 = cljs.core._nth.call(null,chunk__57571_57578,i__57573_57580);
if((x_57581 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_57581)){
cljs.compiler.emit.call(null,x_57581);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_57581)){
cljs.core.apply.call(null,cljs.compiler.emits,x_57581);
} else {
if(goog.isFunction(x_57581)){
x_57581.call(null);
} else {
var s_57582 = cljs.core.print_str.call(null,x_57581);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__57570_57577,chunk__57571_57578,count__57572_57579,i__57573_57580,s_57582,x_57581){
return (function (p1__57568_SHARP_){
return (p1__57568_SHARP_ + cljs.core.count.call(null,s_57582));
});})(seq__57570_57577,chunk__57571_57578,count__57572_57579,i__57573_57580,s_57582,x_57581))
);
}

cljs.core.print.call(null,s_57582);

}
}
}
}

var G__57583 = seq__57570_57577;
var G__57584 = chunk__57571_57578;
var G__57585 = count__57572_57579;
var G__57586 = (i__57573_57580 + (1));
seq__57570_57577 = G__57583;
chunk__57571_57578 = G__57584;
count__57572_57579 = G__57585;
i__57573_57580 = G__57586;
continue;
} else {
var temp__4657__auto___57587 = cljs.core.seq.call(null,seq__57570_57577);
if(temp__4657__auto___57587){
var seq__57570_57588__$1 = temp__4657__auto___57587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57570_57588__$1)){
var c__25713__auto___57589 = cljs.core.chunk_first.call(null,seq__57570_57588__$1);
var G__57590 = cljs.core.chunk_rest.call(null,seq__57570_57588__$1);
var G__57591 = c__25713__auto___57589;
var G__57592 = cljs.core.count.call(null,c__25713__auto___57589);
var G__57593 = (0);
seq__57570_57577 = G__57590;
chunk__57571_57578 = G__57591;
count__57572_57579 = G__57592;
i__57573_57580 = G__57593;
continue;
} else {
var x_57594 = cljs.core.first.call(null,seq__57570_57588__$1);
if((x_57594 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_57594)){
cljs.compiler.emit.call(null,x_57594);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_57594)){
cljs.core.apply.call(null,cljs.compiler.emits,x_57594);
} else {
if(goog.isFunction(x_57594)){
x_57594.call(null);
} else {
var s_57595 = cljs.core.print_str.call(null,x_57594);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__57570_57577,chunk__57571_57578,count__57572_57579,i__57573_57580,s_57595,x_57594,seq__57570_57588__$1,temp__4657__auto___57587){
return (function (p1__57568_SHARP_){
return (p1__57568_SHARP_ + cljs.core.count.call(null,s_57595));
});})(seq__57570_57577,chunk__57571_57578,count__57572_57579,i__57573_57580,s_57595,x_57594,seq__57570_57588__$1,temp__4657__auto___57587))
);
}

cljs.core.print.call(null,s_57595);

}
}
}
}

var G__57596 = cljs.core.next.call(null,seq__57570_57588__$1);
var G__57597 = null;
var G__57598 = (0);
var G__57599 = (0);
seq__57570_57577 = G__57596;
chunk__57571_57578 = G__57597;
count__57572_57579 = G__57598;
i__57573_57580 = G__57599;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq57569){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57569));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__26014__auto__ = [];
var len__26007__auto___57604 = arguments.length;
var i__26008__auto___57605 = (0);
while(true){
if((i__26008__auto___57605 < len__26007__auto___57604)){
args__26014__auto__.push((arguments[i__26008__auto___57605]));

var G__57606 = (i__26008__auto___57605 + (1));
i__26008__auto___57605 = G__57606;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__57601){
var map__57602 = p__57601;
var map__57602__$1 = ((((!((map__57602 == null)))?((((map__57602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57602):map__57602);
var m = map__57602__$1;
var gen_line = cljs.core.get.call(null,map__57602__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq57600){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57600));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25888__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57609_57611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57610_57612 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57609_57611,_STAR_print_fn_STAR_57610_57612,sb__25888__auto__){
return (function (x__25889__auto__){
return sb__25888__auto__.append(x__25889__auto__);
});})(_STAR_print_newline_STAR_57609_57611,_STAR_print_fn_STAR_57610_57612,sb__25888__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57610_57612;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57609_57611;
}
return [cljs.core.str(sb__25888__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25827__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25828__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25829__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25830__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25831__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25831__auto__,method_table__25827__auto__,prefer_table__25828__auto__,method_cache__25829__auto__,cached_hierarchy__25830__auto__));
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
var vec__57613 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__57613,(0),null);
var flags = cljs.core.nth.call(null,vec__57613,(1),null);
var pattern = cljs.core.nth.call(null,vec__57613,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__57617){
var map__57618 = p__57617;
var map__57618__$1 = ((((!((map__57618 == null)))?((((map__57618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57618):map__57618);
var arg = map__57618__$1;
var info = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__24899__auto__ = js_module_name;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
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
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__57620 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__57620);
} else {
return G__57620;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__57621){
var map__57622 = p__57621;
var map__57622__$1 = ((((!((map__57622 == null)))?((((map__57622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57622):map__57622);
var arg = map__57622__$1;
var env = cljs.core.get.call(null,map__57622__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__57622__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__57622__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__57622__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__57624 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__57624__$1 = ((((!((map__57624 == null)))?((((map__57624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57624):map__57624);
var name = cljs.core.get.call(null,map__57624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__57626){
var map__57627 = p__57626;
var map__57627__$1 = ((((!((map__57627 == null)))?((((map__57627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57627):map__57627);
var expr = cljs.core.get.call(null,map__57627__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__57627__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__57627__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__57629_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__57629_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__57630){
var map__57631 = p__57630;
var map__57631__$1 = ((((!((map__57631 == null)))?((((map__57631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57631):map__57631);
var env = cljs.core.get.call(null,map__57631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__57631__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__57631__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__57633){
var map__57634 = p__57633;
var map__57634__$1 = ((((!((map__57634 == null)))?((((map__57634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57634):map__57634);
var items = cljs.core.get.call(null,map__57634__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__57634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__57636){
var map__57637 = p__57636;
var map__57637__$1 = ((((!((map__57637 == null)))?((((map__57637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57637):map__57637);
var items = cljs.core.get.call(null,map__57637__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__57637__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_57639 = cljs.core.count.call(null,items);
if((cnt_57639 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_57639,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__57640_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__57640_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__57641){
var map__57642 = p__57641;
var map__57642__$1 = ((((!((map__57642 == null)))?((((map__57642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57642):map__57642);
var items = cljs.core.get.call(null,map__57642__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__57642__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__57644){
var map__57645 = p__57644;
var map__57645__$1 = ((((!((map__57645 == null)))?((((map__57645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57645):map__57645);
var items = cljs.core.get.call(null,map__57645__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__57645__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__57645__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___57663 = cljs.core.seq.call(null,items);
if(temp__4657__auto___57663){
var items_57664__$1 = temp__4657__auto___57663;
var vec__57647_57665 = items_57664__$1;
var seq__57648_57666 = cljs.core.seq.call(null,vec__57647_57665);
var first__57649_57667 = cljs.core.first.call(null,seq__57648_57666);
var seq__57648_57668__$1 = cljs.core.next.call(null,seq__57648_57666);
var vec__57650_57669 = first__57649_57667;
var k_57670 = cljs.core.nth.call(null,vec__57650_57669,(0),null);
var v_57671 = cljs.core.nth.call(null,vec__57650_57669,(1),null);
var r_57672 = seq__57648_57668__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_57670),"\": ",v_57671);

var seq__57653_57673 = cljs.core.seq.call(null,r_57672);
var chunk__57654_57674 = null;
var count__57655_57675 = (0);
var i__57656_57676 = (0);
while(true){
if((i__57656_57676 < count__57655_57675)){
var vec__57657_57677 = cljs.core._nth.call(null,chunk__57654_57674,i__57656_57676);
var k_57678__$1 = cljs.core.nth.call(null,vec__57657_57677,(0),null);
var v_57679__$1 = cljs.core.nth.call(null,vec__57657_57677,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_57678__$1),"\": ",v_57679__$1);

var G__57680 = seq__57653_57673;
var G__57681 = chunk__57654_57674;
var G__57682 = count__57655_57675;
var G__57683 = (i__57656_57676 + (1));
seq__57653_57673 = G__57680;
chunk__57654_57674 = G__57681;
count__57655_57675 = G__57682;
i__57656_57676 = G__57683;
continue;
} else {
var temp__4657__auto___57684__$1 = cljs.core.seq.call(null,seq__57653_57673);
if(temp__4657__auto___57684__$1){
var seq__57653_57685__$1 = temp__4657__auto___57684__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57653_57685__$1)){
var c__25713__auto___57686 = cljs.core.chunk_first.call(null,seq__57653_57685__$1);
var G__57687 = cljs.core.chunk_rest.call(null,seq__57653_57685__$1);
var G__57688 = c__25713__auto___57686;
var G__57689 = cljs.core.count.call(null,c__25713__auto___57686);
var G__57690 = (0);
seq__57653_57673 = G__57687;
chunk__57654_57674 = G__57688;
count__57655_57675 = G__57689;
i__57656_57676 = G__57690;
continue;
} else {
var vec__57660_57691 = cljs.core.first.call(null,seq__57653_57685__$1);
var k_57692__$1 = cljs.core.nth.call(null,vec__57660_57691,(0),null);
var v_57693__$1 = cljs.core.nth.call(null,vec__57660_57691,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_57692__$1),"\": ",v_57693__$1);

var G__57694 = cljs.core.next.call(null,seq__57653_57685__$1);
var G__57695 = null;
var G__57696 = (0);
var G__57697 = (0);
seq__57653_57673 = G__57694;
chunk__57654_57674 = G__57695;
count__57655_57675 = G__57696;
i__57656_57676 = G__57697;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__57698){
var map__57699 = p__57698;
var map__57699__$1 = ((((!((map__57699 == null)))?((((map__57699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57699):map__57699);
var form = cljs.core.get.call(null,map__57699__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__57699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__57701){
var map__57704 = p__57701;
var map__57704__$1 = ((((!((map__57704 == null)))?((((map__57704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57704):map__57704);
var op = cljs.core.get.call(null,map__57704__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__57704__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__24887__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__24887__auto__){
var and__24887__auto____$1 = form;
if(cljs.core.truth_(and__24887__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__24887__auto____$1;
}
} else {
return and__24887__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__57706){
var map__57709 = p__57706;
var map__57709__$1 = ((((!((map__57709 == null)))?((((map__57709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57709):map__57709);
var op = cljs.core.get.call(null,map__57709__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__57709__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__24899__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__57711){
var map__57712 = p__57711;
var map__57712__$1 = ((((!((map__57712 == null)))?((((map__57712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57712):map__57712);
var test = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__57712__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__24899__auto__ = unchecked;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__57714){
var map__57715 = p__57714;
var map__57715__$1 = ((((!((map__57715 == null)))?((((map__57715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57715):map__57715);
var v = cljs.core.get.call(null,map__57715__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__57715__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__57715__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__57715__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__57715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__57717_57735 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__57718_57736 = null;
var count__57719_57737 = (0);
var i__57720_57738 = (0);
while(true){
if((i__57720_57738 < count__57719_57737)){
var vec__57721_57739 = cljs.core._nth.call(null,chunk__57718_57736,i__57720_57738);
var ts_57740 = cljs.core.nth.call(null,vec__57721_57739,(0),null);
var then_57741 = cljs.core.nth.call(null,vec__57721_57739,(1),null);
var seq__57724_57742 = cljs.core.seq.call(null,ts_57740);
var chunk__57725_57743 = null;
var count__57726_57744 = (0);
var i__57727_57745 = (0);
while(true){
if((i__57727_57745 < count__57726_57744)){
var test_57746 = cljs.core._nth.call(null,chunk__57725_57743,i__57727_57745);
cljs.compiler.emitln.call(null,"case ",test_57746,":");

var G__57747 = seq__57724_57742;
var G__57748 = chunk__57725_57743;
var G__57749 = count__57726_57744;
var G__57750 = (i__57727_57745 + (1));
seq__57724_57742 = G__57747;
chunk__57725_57743 = G__57748;
count__57726_57744 = G__57749;
i__57727_57745 = G__57750;
continue;
} else {
var temp__4657__auto___57751 = cljs.core.seq.call(null,seq__57724_57742);
if(temp__4657__auto___57751){
var seq__57724_57752__$1 = temp__4657__auto___57751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57724_57752__$1)){
var c__25713__auto___57753 = cljs.core.chunk_first.call(null,seq__57724_57752__$1);
var G__57754 = cljs.core.chunk_rest.call(null,seq__57724_57752__$1);
var G__57755 = c__25713__auto___57753;
var G__57756 = cljs.core.count.call(null,c__25713__auto___57753);
var G__57757 = (0);
seq__57724_57742 = G__57754;
chunk__57725_57743 = G__57755;
count__57726_57744 = G__57756;
i__57727_57745 = G__57757;
continue;
} else {
var test_57758 = cljs.core.first.call(null,seq__57724_57752__$1);
cljs.compiler.emitln.call(null,"case ",test_57758,":");

var G__57759 = cljs.core.next.call(null,seq__57724_57752__$1);
var G__57760 = null;
var G__57761 = (0);
var G__57762 = (0);
seq__57724_57742 = G__57759;
chunk__57725_57743 = G__57760;
count__57726_57744 = G__57761;
i__57727_57745 = G__57762;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_57741);
} else {
cljs.compiler.emitln.call(null,then_57741);
}

cljs.compiler.emitln.call(null,"break;");

var G__57763 = seq__57717_57735;
var G__57764 = chunk__57718_57736;
var G__57765 = count__57719_57737;
var G__57766 = (i__57720_57738 + (1));
seq__57717_57735 = G__57763;
chunk__57718_57736 = G__57764;
count__57719_57737 = G__57765;
i__57720_57738 = G__57766;
continue;
} else {
var temp__4657__auto___57767 = cljs.core.seq.call(null,seq__57717_57735);
if(temp__4657__auto___57767){
var seq__57717_57768__$1 = temp__4657__auto___57767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57717_57768__$1)){
var c__25713__auto___57769 = cljs.core.chunk_first.call(null,seq__57717_57768__$1);
var G__57770 = cljs.core.chunk_rest.call(null,seq__57717_57768__$1);
var G__57771 = c__25713__auto___57769;
var G__57772 = cljs.core.count.call(null,c__25713__auto___57769);
var G__57773 = (0);
seq__57717_57735 = G__57770;
chunk__57718_57736 = G__57771;
count__57719_57737 = G__57772;
i__57720_57738 = G__57773;
continue;
} else {
var vec__57728_57774 = cljs.core.first.call(null,seq__57717_57768__$1);
var ts_57775 = cljs.core.nth.call(null,vec__57728_57774,(0),null);
var then_57776 = cljs.core.nth.call(null,vec__57728_57774,(1),null);
var seq__57731_57777 = cljs.core.seq.call(null,ts_57775);
var chunk__57732_57778 = null;
var count__57733_57779 = (0);
var i__57734_57780 = (0);
while(true){
if((i__57734_57780 < count__57733_57779)){
var test_57781 = cljs.core._nth.call(null,chunk__57732_57778,i__57734_57780);
cljs.compiler.emitln.call(null,"case ",test_57781,":");

var G__57782 = seq__57731_57777;
var G__57783 = chunk__57732_57778;
var G__57784 = count__57733_57779;
var G__57785 = (i__57734_57780 + (1));
seq__57731_57777 = G__57782;
chunk__57732_57778 = G__57783;
count__57733_57779 = G__57784;
i__57734_57780 = G__57785;
continue;
} else {
var temp__4657__auto___57786__$1 = cljs.core.seq.call(null,seq__57731_57777);
if(temp__4657__auto___57786__$1){
var seq__57731_57787__$1 = temp__4657__auto___57786__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57731_57787__$1)){
var c__25713__auto___57788 = cljs.core.chunk_first.call(null,seq__57731_57787__$1);
var G__57789 = cljs.core.chunk_rest.call(null,seq__57731_57787__$1);
var G__57790 = c__25713__auto___57788;
var G__57791 = cljs.core.count.call(null,c__25713__auto___57788);
var G__57792 = (0);
seq__57731_57777 = G__57789;
chunk__57732_57778 = G__57790;
count__57733_57779 = G__57791;
i__57734_57780 = G__57792;
continue;
} else {
var test_57793 = cljs.core.first.call(null,seq__57731_57787__$1);
cljs.compiler.emitln.call(null,"case ",test_57793,":");

var G__57794 = cljs.core.next.call(null,seq__57731_57787__$1);
var G__57795 = null;
var G__57796 = (0);
var G__57797 = (0);
seq__57731_57777 = G__57794;
chunk__57732_57778 = G__57795;
count__57733_57779 = G__57796;
i__57734_57780 = G__57797;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_57776);
} else {
cljs.compiler.emitln.call(null,then_57776);
}

cljs.compiler.emitln.call(null,"break;");

var G__57798 = cljs.core.next.call(null,seq__57717_57768__$1);
var G__57799 = null;
var G__57800 = (0);
var G__57801 = (0);
seq__57717_57735 = G__57798;
chunk__57718_57736 = G__57799;
count__57719_57737 = G__57800;
i__57720_57738 = G__57801;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__57802){
var map__57803 = p__57802;
var map__57803__$1 = ((((!((map__57803 == null)))?((((map__57803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57803):map__57803);
var throw$ = cljs.core.get.call(null,map__57803__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__57803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__57810 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__57810,(0),null);
var rstr = cljs.core.nth.call(null,vec__57810,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__57810,fstr,rstr,ret_t,axstr){
return (function (p1__57805_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__57805_SHARP_);
});})(idx,vec__57810,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__57813 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__57813),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__57813;
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
return (function (p1__57814_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__57814_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__57821 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__57822 = cljs.core.seq.call(null,vec__57821);
var first__57823 = cljs.core.first.call(null,seq__57822);
var seq__57822__$1 = cljs.core.next.call(null,seq__57822);
var p = first__57823;
var first__57823__$1 = cljs.core.first.call(null,seq__57822__$1);
var seq__57822__$2 = cljs.core.next.call(null,seq__57822__$1);
var ts = first__57823__$1;
var first__57823__$2 = cljs.core.first.call(null,seq__57822__$2);
var seq__57822__$3 = cljs.core.next.call(null,seq__57822__$2);
var n = first__57823__$2;
var xs = seq__57822__$3;
if(cljs.core.truth_((function (){var and__24887__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__24887__auto__){
var and__24887__auto____$1 = ts;
if(cljs.core.truth_(and__24887__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24887__auto____$1;
}
} else {
return and__24887__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__57824 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__57825 = cljs.core.seq.call(null,vec__57824);
var first__57826 = cljs.core.first.call(null,seq__57825);
var seq__57825__$1 = cljs.core.next.call(null,seq__57825);
var p = first__57826;
var first__57826__$1 = cljs.core.first.call(null,seq__57825__$1);
var seq__57825__$2 = cljs.core.next.call(null,seq__57825__$1);
var ts = first__57826__$1;
var xs = seq__57825__$2;
if(cljs.core.truth_((function (){var and__24887__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__24887__auto__){
var and__24887__auto____$1 = ts;
if(cljs.core.truth_(and__24887__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24887__auto____$1;
}
} else {
return and__24887__auto__;
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
var args57828 = [];
var len__26007__auto___57863 = arguments.length;
var i__26008__auto___57864 = (0);
while(true){
if((i__26008__auto___57864 < len__26007__auto___57863)){
args57828.push((arguments[i__26008__auto___57864]));

var G__57865 = (i__26008__auto___57864 + (1));
i__26008__auto___57864 = G__57865;
continue;
} else {
}
break;
}

var G__57830 = args57828.length;
switch (G__57830) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57828.length)].join('')));

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
var vec__57852 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__57827_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__57827_SHARP_);
} else {
return p1__57827_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__57853 = cljs.core.seq.call(null,vec__57852);
var first__57854 = cljs.core.first.call(null,seq__57853);
var seq__57853__$1 = cljs.core.next.call(null,seq__57853);
var x = first__57854;
var ys = seq__57853__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__57855 = cljs.core.seq.call(null,ys);
var chunk__57856 = null;
var count__57857 = (0);
var i__57858 = (0);
while(true){
if((i__57858 < count__57857)){
var next_line = cljs.core._nth.call(null,chunk__57856,i__57858);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__57867 = seq__57855;
var G__57868 = chunk__57856;
var G__57869 = count__57857;
var G__57870 = (i__57858 + (1));
seq__57855 = G__57867;
chunk__57856 = G__57868;
count__57857 = G__57869;
i__57858 = G__57870;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57855);
if(temp__4657__auto__){
var seq__57855__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57855__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__57855__$1);
var G__57871 = cljs.core.chunk_rest.call(null,seq__57855__$1);
var G__57872 = c__25713__auto__;
var G__57873 = cljs.core.count.call(null,c__25713__auto__);
var G__57874 = (0);
seq__57855 = G__57871;
chunk__57856 = G__57872;
count__57857 = G__57873;
i__57858 = G__57874;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__57855__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__57875 = cljs.core.next.call(null,seq__57855__$1);
var G__57876 = null;
var G__57877 = (0);
var G__57878 = (0);
seq__57855 = G__57875;
chunk__57856 = G__57876;
count__57857 = G__57877;
i__57858 = G__57878;
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

var seq__57859_57879 = cljs.core.seq.call(null,docs__$2);
var chunk__57860_57880 = null;
var count__57861_57881 = (0);
var i__57862_57882 = (0);
while(true){
if((i__57862_57882 < count__57861_57881)){
var e_57883 = cljs.core._nth.call(null,chunk__57860_57880,i__57862_57882);
if(cljs.core.truth_(e_57883)){
print_comment_lines.call(null,e_57883);
} else {
}

var G__57884 = seq__57859_57879;
var G__57885 = chunk__57860_57880;
var G__57886 = count__57861_57881;
var G__57887 = (i__57862_57882 + (1));
seq__57859_57879 = G__57884;
chunk__57860_57880 = G__57885;
count__57861_57881 = G__57886;
i__57862_57882 = G__57887;
continue;
} else {
var temp__4657__auto___57888 = cljs.core.seq.call(null,seq__57859_57879);
if(temp__4657__auto___57888){
var seq__57859_57889__$1 = temp__4657__auto___57888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57859_57889__$1)){
var c__25713__auto___57890 = cljs.core.chunk_first.call(null,seq__57859_57889__$1);
var G__57891 = cljs.core.chunk_rest.call(null,seq__57859_57889__$1);
var G__57892 = c__25713__auto___57890;
var G__57893 = cljs.core.count.call(null,c__25713__auto___57890);
var G__57894 = (0);
seq__57859_57879 = G__57891;
chunk__57860_57880 = G__57892;
count__57861_57881 = G__57893;
i__57862_57882 = G__57894;
continue;
} else {
var e_57895 = cljs.core.first.call(null,seq__57859_57889__$1);
if(cljs.core.truth_(e_57895)){
print_comment_lines.call(null,e_57895);
} else {
}

var G__57896 = cljs.core.next.call(null,seq__57859_57889__$1);
var G__57897 = null;
var G__57898 = (0);
var G__57899 = (0);
seq__57859_57879 = G__57896;
chunk__57860_57880 = G__57897;
count__57861_57881 = G__57898;
i__57862_57882 = G__57899;
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
var and__24887__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__57901_SHARP_){
return goog.string.startsWith(p1__57901_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__24887__auto__)){
var and__24887__auto____$1 = opts;
if(cljs.core.truth_(and__24887__auto____$1)){
var and__24887__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__24887__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__24887__auto____$2;
}
} else {
return and__24887__auto____$1;
}
} else {
return and__24887__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__57902){
var map__57903 = p__57902;
var map__57903__$1 = ((((!((map__57903 == null)))?((((map__57903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57903):map__57903);
var name = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__57903__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__24899__auto__ = init;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
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

if(cljs.core.truth_((function (){var and__24887__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__24887__auto__)){
return test;
} else {
return and__24887__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__57905){
var map__57926 = p__57905;
var map__57926__$1 = ((((!((map__57926 == null)))?((((map__57926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57926):map__57926);
var name = cljs.core.get.call(null,map__57926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__57926__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__57926__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__57928_57946 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__57929_57947 = null;
var count__57930_57948 = (0);
var i__57931_57949 = (0);
while(true){
if((i__57931_57949 < count__57930_57948)){
var vec__57932_57950 = cljs.core._nth.call(null,chunk__57929_57947,i__57931_57949);
var i_57951 = cljs.core.nth.call(null,vec__57932_57950,(0),null);
var param_57952 = cljs.core.nth.call(null,vec__57932_57950,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_57952);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__57953 = seq__57928_57946;
var G__57954 = chunk__57929_57947;
var G__57955 = count__57930_57948;
var G__57956 = (i__57931_57949 + (1));
seq__57928_57946 = G__57953;
chunk__57929_57947 = G__57954;
count__57930_57948 = G__57955;
i__57931_57949 = G__57956;
continue;
} else {
var temp__4657__auto___57957 = cljs.core.seq.call(null,seq__57928_57946);
if(temp__4657__auto___57957){
var seq__57928_57958__$1 = temp__4657__auto___57957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57928_57958__$1)){
var c__25713__auto___57959 = cljs.core.chunk_first.call(null,seq__57928_57958__$1);
var G__57960 = cljs.core.chunk_rest.call(null,seq__57928_57958__$1);
var G__57961 = c__25713__auto___57959;
var G__57962 = cljs.core.count.call(null,c__25713__auto___57959);
var G__57963 = (0);
seq__57928_57946 = G__57960;
chunk__57929_57947 = G__57961;
count__57930_57948 = G__57962;
i__57931_57949 = G__57963;
continue;
} else {
var vec__57935_57964 = cljs.core.first.call(null,seq__57928_57958__$1);
var i_57965 = cljs.core.nth.call(null,vec__57935_57964,(0),null);
var param_57966 = cljs.core.nth.call(null,vec__57935_57964,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_57966);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__57967 = cljs.core.next.call(null,seq__57928_57958__$1);
var G__57968 = null;
var G__57969 = (0);
var G__57970 = (0);
seq__57928_57946 = G__57967;
chunk__57929_57947 = G__57968;
count__57930_57948 = G__57969;
i__57931_57949 = G__57970;
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

var seq__57938_57971 = cljs.core.seq.call(null,params);
var chunk__57939_57972 = null;
var count__57940_57973 = (0);
var i__57941_57974 = (0);
while(true){
if((i__57941_57974 < count__57940_57973)){
var param_57975 = cljs.core._nth.call(null,chunk__57939_57972,i__57941_57974);
cljs.compiler.emit.call(null,param_57975);

if(cljs.core._EQ_.call(null,param_57975,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__57976 = seq__57938_57971;
var G__57977 = chunk__57939_57972;
var G__57978 = count__57940_57973;
var G__57979 = (i__57941_57974 + (1));
seq__57938_57971 = G__57976;
chunk__57939_57972 = G__57977;
count__57940_57973 = G__57978;
i__57941_57974 = G__57979;
continue;
} else {
var temp__4657__auto___57980 = cljs.core.seq.call(null,seq__57938_57971);
if(temp__4657__auto___57980){
var seq__57938_57981__$1 = temp__4657__auto___57980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57938_57981__$1)){
var c__25713__auto___57982 = cljs.core.chunk_first.call(null,seq__57938_57981__$1);
var G__57983 = cljs.core.chunk_rest.call(null,seq__57938_57981__$1);
var G__57984 = c__25713__auto___57982;
var G__57985 = cljs.core.count.call(null,c__25713__auto___57982);
var G__57986 = (0);
seq__57938_57971 = G__57983;
chunk__57939_57972 = G__57984;
count__57940_57973 = G__57985;
i__57941_57974 = G__57986;
continue;
} else {
var param_57987 = cljs.core.first.call(null,seq__57938_57981__$1);
cljs.compiler.emit.call(null,param_57987);

if(cljs.core._EQ_.call(null,param_57987,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__57988 = cljs.core.next.call(null,seq__57938_57981__$1);
var G__57989 = null;
var G__57990 = (0);
var G__57991 = (0);
seq__57938_57971 = G__57988;
chunk__57939_57972 = G__57989;
count__57940_57973 = G__57990;
i__57941_57974 = G__57991;
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

var seq__57942_57992 = cljs.core.seq.call(null,params);
var chunk__57943_57993 = null;
var count__57944_57994 = (0);
var i__57945_57995 = (0);
while(true){
if((i__57945_57995 < count__57944_57994)){
var param_57996 = cljs.core._nth.call(null,chunk__57943_57993,i__57945_57995);
cljs.compiler.emit.call(null,param_57996);

if(cljs.core._EQ_.call(null,param_57996,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__57997 = seq__57942_57992;
var G__57998 = chunk__57943_57993;
var G__57999 = count__57944_57994;
var G__58000 = (i__57945_57995 + (1));
seq__57942_57992 = G__57997;
chunk__57943_57993 = G__57998;
count__57944_57994 = G__57999;
i__57945_57995 = G__58000;
continue;
} else {
var temp__4657__auto___58001 = cljs.core.seq.call(null,seq__57942_57992);
if(temp__4657__auto___58001){
var seq__57942_58002__$1 = temp__4657__auto___58001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57942_58002__$1)){
var c__25713__auto___58003 = cljs.core.chunk_first.call(null,seq__57942_58002__$1);
var G__58004 = cljs.core.chunk_rest.call(null,seq__57942_58002__$1);
var G__58005 = c__25713__auto___58003;
var G__58006 = cljs.core.count.call(null,c__25713__auto___58003);
var G__58007 = (0);
seq__57942_57992 = G__58004;
chunk__57943_57993 = G__58005;
count__57944_57994 = G__58006;
i__57945_57995 = G__58007;
continue;
} else {
var param_58008 = cljs.core.first.call(null,seq__57942_58002__$1);
cljs.compiler.emit.call(null,param_58008);

if(cljs.core._EQ_.call(null,param_58008,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58009 = cljs.core.next.call(null,seq__57942_58002__$1);
var G__58010 = null;
var G__58011 = (0);
var G__58012 = (0);
seq__57942_57992 = G__58009;
chunk__57943_57993 = G__58010;
count__57944_57994 = G__58011;
i__57945_57995 = G__58012;
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
var seq__58017 = cljs.core.seq.call(null,params);
var chunk__58018 = null;
var count__58019 = (0);
var i__58020 = (0);
while(true){
if((i__58020 < count__58019)){
var param = cljs.core._nth.call(null,chunk__58018,i__58020);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58021 = seq__58017;
var G__58022 = chunk__58018;
var G__58023 = count__58019;
var G__58024 = (i__58020 + (1));
seq__58017 = G__58021;
chunk__58018 = G__58022;
count__58019 = G__58023;
i__58020 = G__58024;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58017);
if(temp__4657__auto__){
var seq__58017__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58017__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__58017__$1);
var G__58025 = cljs.core.chunk_rest.call(null,seq__58017__$1);
var G__58026 = c__25713__auto__;
var G__58027 = cljs.core.count.call(null,c__25713__auto__);
var G__58028 = (0);
seq__58017 = G__58025;
chunk__58018 = G__58026;
count__58019 = G__58027;
i__58020 = G__58028;
continue;
} else {
var param = cljs.core.first.call(null,seq__58017__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58029 = cljs.core.next.call(null,seq__58017__$1);
var G__58030 = null;
var G__58031 = (0);
var G__58032 = (0);
seq__58017 = G__58029;
chunk__58018 = G__58030;
count__58019 = G__58031;
i__58020 = G__58032;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__58033){
var map__58036 = p__58033;
var map__58036__$1 = ((((!((map__58036 == null)))?((((map__58036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58036):map__58036);
var type = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__58036__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__58038){
var map__58049 = p__58038;
var map__58049__$1 = ((((!((map__58049 == null)))?((((map__58049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58049):map__58049);
var f = map__58049__$1;
var type = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__58049__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_58059__$1 = (function (){var or__24899__auto__ = name;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_58060 = cljs.compiler.munge.call(null,name_58059__$1);
var delegate_name_58061 = [cljs.core.str(mname_58060),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_58061," = function (");

var seq__58051_58062 = cljs.core.seq.call(null,params);
var chunk__58052_58063 = null;
var count__58053_58064 = (0);
var i__58054_58065 = (0);
while(true){
if((i__58054_58065 < count__58053_58064)){
var param_58066 = cljs.core._nth.call(null,chunk__58052_58063,i__58054_58065);
cljs.compiler.emit.call(null,param_58066);

if(cljs.core._EQ_.call(null,param_58066,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58067 = seq__58051_58062;
var G__58068 = chunk__58052_58063;
var G__58069 = count__58053_58064;
var G__58070 = (i__58054_58065 + (1));
seq__58051_58062 = G__58067;
chunk__58052_58063 = G__58068;
count__58053_58064 = G__58069;
i__58054_58065 = G__58070;
continue;
} else {
var temp__4657__auto___58071 = cljs.core.seq.call(null,seq__58051_58062);
if(temp__4657__auto___58071){
var seq__58051_58072__$1 = temp__4657__auto___58071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58051_58072__$1)){
var c__25713__auto___58073 = cljs.core.chunk_first.call(null,seq__58051_58072__$1);
var G__58074 = cljs.core.chunk_rest.call(null,seq__58051_58072__$1);
var G__58075 = c__25713__auto___58073;
var G__58076 = cljs.core.count.call(null,c__25713__auto___58073);
var G__58077 = (0);
seq__58051_58062 = G__58074;
chunk__58052_58063 = G__58075;
count__58053_58064 = G__58076;
i__58054_58065 = G__58077;
continue;
} else {
var param_58078 = cljs.core.first.call(null,seq__58051_58072__$1);
cljs.compiler.emit.call(null,param_58078);

if(cljs.core._EQ_.call(null,param_58078,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58079 = cljs.core.next.call(null,seq__58051_58072__$1);
var G__58080 = null;
var G__58081 = (0);
var G__58082 = (0);
seq__58051_58062 = G__58079;
chunk__58052_58063 = G__58080;
count__58053_58064 = G__58081;
i__58054_58065 = G__58082;
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

cljs.compiler.emitln.call(null,"var ",mname_58060," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_58083 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_58083,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_58061,".call(this,");

var seq__58055_58084 = cljs.core.seq.call(null,params);
var chunk__58056_58085 = null;
var count__58057_58086 = (0);
var i__58058_58087 = (0);
while(true){
if((i__58058_58087 < count__58057_58086)){
var param_58088 = cljs.core._nth.call(null,chunk__58056_58085,i__58058_58087);
cljs.compiler.emit.call(null,param_58088);

if(cljs.core._EQ_.call(null,param_58088,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58089 = seq__58055_58084;
var G__58090 = chunk__58056_58085;
var G__58091 = count__58057_58086;
var G__58092 = (i__58058_58087 + (1));
seq__58055_58084 = G__58089;
chunk__58056_58085 = G__58090;
count__58057_58086 = G__58091;
i__58058_58087 = G__58092;
continue;
} else {
var temp__4657__auto___58093 = cljs.core.seq.call(null,seq__58055_58084);
if(temp__4657__auto___58093){
var seq__58055_58094__$1 = temp__4657__auto___58093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58055_58094__$1)){
var c__25713__auto___58095 = cljs.core.chunk_first.call(null,seq__58055_58094__$1);
var G__58096 = cljs.core.chunk_rest.call(null,seq__58055_58094__$1);
var G__58097 = c__25713__auto___58095;
var G__58098 = cljs.core.count.call(null,c__25713__auto___58095);
var G__58099 = (0);
seq__58055_58084 = G__58096;
chunk__58056_58085 = G__58097;
count__58057_58086 = G__58098;
i__58058_58087 = G__58099;
continue;
} else {
var param_58100 = cljs.core.first.call(null,seq__58055_58094__$1);
cljs.compiler.emit.call(null,param_58100);

if(cljs.core._EQ_.call(null,param_58100,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__58101 = cljs.core.next.call(null,seq__58055_58094__$1);
var G__58102 = null;
var G__58103 = (0);
var G__58104 = (0);
seq__58055_58084 = G__58101;
chunk__58056_58085 = G__58102;
count__58057_58086 = G__58103;
i__58058_58087 = G__58104;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_58060,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_58060,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_58059__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_58060,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_58061,";");

cljs.compiler.emitln.call(null,"return ",mname_58060,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__58108){
var map__58109 = p__58108;
var map__58109__$1 = ((((!((map__58109 == null)))?((((map__58109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58109):map__58109);
var name = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__58105_SHARP_){
var and__24887__auto__ = p1__58105_SHARP_;
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__58105_SHARP_));
} else {
return and__24887__auto__;
}
});})(map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_58144__$1 = (function (){var or__24899__auto__ = name;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_58145 = cljs.compiler.munge.call(null,name_58144__$1);
var maxparams_58146 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_58147 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_58144__$1,mname_58145,maxparams_58146,loop_locals,map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_58145),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_58144__$1,mname_58145,maxparams_58146,loop_locals,map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_58148 = cljs.core.sort_by.call(null,((function (name_58144__$1,mname_58145,maxparams_58146,mmap_58147,loop_locals,map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__58106_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__58106_SHARP_)));
});})(name_58144__$1,mname_58145,maxparams_58146,mmap_58147,loop_locals,map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_58147));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_58145," = null;");

var seq__58111_58149 = cljs.core.seq.call(null,ms_58148);
var chunk__58112_58150 = null;
var count__58113_58151 = (0);
var i__58114_58152 = (0);
while(true){
if((i__58114_58152 < count__58113_58151)){
var vec__58115_58153 = cljs.core._nth.call(null,chunk__58112_58150,i__58114_58152);
var n_58154 = cljs.core.nth.call(null,vec__58115_58153,(0),null);
var meth_58155 = cljs.core.nth.call(null,vec__58115_58153,(1),null);
cljs.compiler.emits.call(null,"var ",n_58154," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58155))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_58155);
} else {
cljs.compiler.emit_fn_method.call(null,meth_58155);
}

cljs.compiler.emitln.call(null,";");

var G__58156 = seq__58111_58149;
var G__58157 = chunk__58112_58150;
var G__58158 = count__58113_58151;
var G__58159 = (i__58114_58152 + (1));
seq__58111_58149 = G__58156;
chunk__58112_58150 = G__58157;
count__58113_58151 = G__58158;
i__58114_58152 = G__58159;
continue;
} else {
var temp__4657__auto___58160 = cljs.core.seq.call(null,seq__58111_58149);
if(temp__4657__auto___58160){
var seq__58111_58161__$1 = temp__4657__auto___58160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58111_58161__$1)){
var c__25713__auto___58162 = cljs.core.chunk_first.call(null,seq__58111_58161__$1);
var G__58163 = cljs.core.chunk_rest.call(null,seq__58111_58161__$1);
var G__58164 = c__25713__auto___58162;
var G__58165 = cljs.core.count.call(null,c__25713__auto___58162);
var G__58166 = (0);
seq__58111_58149 = G__58163;
chunk__58112_58150 = G__58164;
count__58113_58151 = G__58165;
i__58114_58152 = G__58166;
continue;
} else {
var vec__58118_58167 = cljs.core.first.call(null,seq__58111_58161__$1);
var n_58168 = cljs.core.nth.call(null,vec__58118_58167,(0),null);
var meth_58169 = cljs.core.nth.call(null,vec__58118_58167,(1),null);
cljs.compiler.emits.call(null,"var ",n_58168," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58169))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_58169);
} else {
cljs.compiler.emit_fn_method.call(null,meth_58169);
}

cljs.compiler.emitln.call(null,";");

var G__58170 = cljs.core.next.call(null,seq__58111_58161__$1);
var G__58171 = null;
var G__58172 = (0);
var G__58173 = (0);
seq__58111_58149 = G__58170;
chunk__58112_58150 = G__58171;
count__58113_58151 = G__58172;
i__58114_58152 = G__58173;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_58145," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_58146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_58146)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_58146));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__58121_58174 = cljs.core.seq.call(null,ms_58148);
var chunk__58122_58175 = null;
var count__58123_58176 = (0);
var i__58124_58177 = (0);
while(true){
if((i__58124_58177 < count__58123_58176)){
var vec__58125_58178 = cljs.core._nth.call(null,chunk__58122_58175,i__58124_58177);
var n_58179 = cljs.core.nth.call(null,vec__58125_58178,(0),null);
var meth_58180 = cljs.core.nth.call(null,vec__58125_58178,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58180))){
cljs.compiler.emitln.call(null,"default:");

var restarg_58181 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_58181," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_58182 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_58181," = new cljs.core.IndexedSeq(",a_58182,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_58179,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_58146)),(((cljs.core.count.call(null,maxparams_58146) > (1)))?", ":null),restarg_58181,");");
} else {
var pcnt_58183 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58180));
cljs.compiler.emitln.call(null,"case ",pcnt_58183,":");

cljs.compiler.emitln.call(null,"return ",n_58179,".call(this",(((pcnt_58183 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25736__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_58183,maxparams_58146));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25736__auto__);
})(),",")),");");
}

var G__58184 = seq__58121_58174;
var G__58185 = chunk__58122_58175;
var G__58186 = count__58123_58176;
var G__58187 = (i__58124_58177 + (1));
seq__58121_58174 = G__58184;
chunk__58122_58175 = G__58185;
count__58123_58176 = G__58186;
i__58124_58177 = G__58187;
continue;
} else {
var temp__4657__auto___58188 = cljs.core.seq.call(null,seq__58121_58174);
if(temp__4657__auto___58188){
var seq__58121_58189__$1 = temp__4657__auto___58188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58121_58189__$1)){
var c__25713__auto___58190 = cljs.core.chunk_first.call(null,seq__58121_58189__$1);
var G__58191 = cljs.core.chunk_rest.call(null,seq__58121_58189__$1);
var G__58192 = c__25713__auto___58190;
var G__58193 = cljs.core.count.call(null,c__25713__auto___58190);
var G__58194 = (0);
seq__58121_58174 = G__58191;
chunk__58122_58175 = G__58192;
count__58123_58176 = G__58193;
i__58124_58177 = G__58194;
continue;
} else {
var vec__58128_58195 = cljs.core.first.call(null,seq__58121_58189__$1);
var n_58196 = cljs.core.nth.call(null,vec__58128_58195,(0),null);
var meth_58197 = cljs.core.nth.call(null,vec__58128_58195,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58197))){
cljs.compiler.emitln.call(null,"default:");

var restarg_58198 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_58198," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_58199 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_58198," = new cljs.core.IndexedSeq(",a_58199,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_58196,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_58146)),(((cljs.core.count.call(null,maxparams_58146) > (1)))?", ":null),restarg_58198,");");
} else {
var pcnt_58200 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58197));
cljs.compiler.emitln.call(null,"case ",pcnt_58200,":");

cljs.compiler.emitln.call(null,"return ",n_58196,".call(this",(((pcnt_58200 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25736__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_58200,maxparams_58146));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25736__auto__);
})(),",")),");");
}

var G__58201 = cljs.core.next.call(null,seq__58121_58189__$1);
var G__58202 = null;
var G__58203 = (0);
var G__58204 = (0);
seq__58121_58174 = G__58201;
chunk__58122_58175 = G__58202;
count__58123_58176 = G__58203;
i__58124_58177 = G__58204;
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
cljs.compiler.emitln.call(null,mname_58145,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_58145,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_58144__$1,mname_58145,maxparams_58146,mmap_58147,ms_58148,loop_locals,map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__58107_SHARP_){
var vec__58131 = p1__58107_SHARP_;
var n = cljs.core.nth.call(null,vec__58131,(0),null);
var m = cljs.core.nth.call(null,vec__58131,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_58144__$1,mname_58145,maxparams_58146,mmap_58147,ms_58148,loop_locals,map__58109,map__58109__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_58148),".cljs$lang$applyTo;");
} else {
}

var seq__58134_58205 = cljs.core.seq.call(null,ms_58148);
var chunk__58135_58206 = null;
var count__58136_58207 = (0);
var i__58137_58208 = (0);
while(true){
if((i__58137_58208 < count__58136_58207)){
var vec__58138_58209 = cljs.core._nth.call(null,chunk__58135_58206,i__58137_58208);
var n_58210 = cljs.core.nth.call(null,vec__58138_58209,(0),null);
var meth_58211 = cljs.core.nth.call(null,vec__58138_58209,(1),null);
var c_58212 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58211));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58211))){
cljs.compiler.emitln.call(null,mname_58145,".cljs$core$IFn$_invoke$arity$variadic = ",n_58210,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_58145,".cljs$core$IFn$_invoke$arity$",c_58212," = ",n_58210,";");
}

var G__58213 = seq__58134_58205;
var G__58214 = chunk__58135_58206;
var G__58215 = count__58136_58207;
var G__58216 = (i__58137_58208 + (1));
seq__58134_58205 = G__58213;
chunk__58135_58206 = G__58214;
count__58136_58207 = G__58215;
i__58137_58208 = G__58216;
continue;
} else {
var temp__4657__auto___58217 = cljs.core.seq.call(null,seq__58134_58205);
if(temp__4657__auto___58217){
var seq__58134_58218__$1 = temp__4657__auto___58217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58134_58218__$1)){
var c__25713__auto___58219 = cljs.core.chunk_first.call(null,seq__58134_58218__$1);
var G__58220 = cljs.core.chunk_rest.call(null,seq__58134_58218__$1);
var G__58221 = c__25713__auto___58219;
var G__58222 = cljs.core.count.call(null,c__25713__auto___58219);
var G__58223 = (0);
seq__58134_58205 = G__58220;
chunk__58135_58206 = G__58221;
count__58136_58207 = G__58222;
i__58137_58208 = G__58223;
continue;
} else {
var vec__58141_58224 = cljs.core.first.call(null,seq__58134_58218__$1);
var n_58225 = cljs.core.nth.call(null,vec__58141_58224,(0),null);
var meth_58226 = cljs.core.nth.call(null,vec__58141_58224,(1),null);
var c_58227 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_58226));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_58226))){
cljs.compiler.emitln.call(null,mname_58145,".cljs$core$IFn$_invoke$arity$variadic = ",n_58225,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_58145,".cljs$core$IFn$_invoke$arity$",c_58227," = ",n_58225,";");
}

var G__58228 = cljs.core.next.call(null,seq__58134_58218__$1);
var G__58229 = null;
var G__58230 = (0);
var G__58231 = (0);
seq__58134_58205 = G__58228;
chunk__58135_58206 = G__58229;
count__58136_58207 = G__58230;
i__58137_58208 = G__58231;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_58145,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__58232){
var map__58233 = p__58232;
var map__58233__$1 = ((((!((map__58233 == null)))?((((map__58233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58233):map__58233);
var statements = cljs.core.get.call(null,map__58233__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__58233__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__58233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__24887__auto__ = statements;
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24887__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__58235_58239 = cljs.core.seq.call(null,statements);
var chunk__58236_58240 = null;
var count__58237_58241 = (0);
var i__58238_58242 = (0);
while(true){
if((i__58238_58242 < count__58237_58241)){
var s_58243 = cljs.core._nth.call(null,chunk__58236_58240,i__58238_58242);
cljs.compiler.emitln.call(null,s_58243);

var G__58244 = seq__58235_58239;
var G__58245 = chunk__58236_58240;
var G__58246 = count__58237_58241;
var G__58247 = (i__58238_58242 + (1));
seq__58235_58239 = G__58244;
chunk__58236_58240 = G__58245;
count__58237_58241 = G__58246;
i__58238_58242 = G__58247;
continue;
} else {
var temp__4657__auto___58248 = cljs.core.seq.call(null,seq__58235_58239);
if(temp__4657__auto___58248){
var seq__58235_58249__$1 = temp__4657__auto___58248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58235_58249__$1)){
var c__25713__auto___58250 = cljs.core.chunk_first.call(null,seq__58235_58249__$1);
var G__58251 = cljs.core.chunk_rest.call(null,seq__58235_58249__$1);
var G__58252 = c__25713__auto___58250;
var G__58253 = cljs.core.count.call(null,c__25713__auto___58250);
var G__58254 = (0);
seq__58235_58239 = G__58251;
chunk__58236_58240 = G__58252;
count__58237_58241 = G__58253;
i__58238_58242 = G__58254;
continue;
} else {
var s_58255 = cljs.core.first.call(null,seq__58235_58249__$1);
cljs.compiler.emitln.call(null,s_58255);

var G__58256 = cljs.core.next.call(null,seq__58235_58249__$1);
var G__58257 = null;
var G__58258 = (0);
var G__58259 = (0);
seq__58235_58239 = G__58256;
chunk__58236_58240 = G__58257;
count__58237_58241 = G__58258;
i__58238_58242 = G__58259;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__24887__auto__ = statements;
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24887__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__58260){
var map__58261 = p__58260;
var map__58261__$1 = ((((!((map__58261 == null)))?((((map__58261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58261):map__58261);
var env = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__58261__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__24899__auto__ = name;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__58263,is_loop){
var map__58275 = p__58263;
var map__58275__$1 = ((((!((map__58275 == null)))?((((map__58275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58275):map__58275);
var bindings = cljs.core.get.call(null,map__58275__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__58275__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_58277_58286 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_58277_58286,context,map__58275,map__58275__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_58277_58286,context,map__58275,map__58275__$1,bindings,expr,env))
,bindings):null));

try{var seq__58278_58287 = cljs.core.seq.call(null,bindings);
var chunk__58279_58288 = null;
var count__58280_58289 = (0);
var i__58281_58290 = (0);
while(true){
if((i__58281_58290 < count__58280_58289)){
var map__58282_58291 = cljs.core._nth.call(null,chunk__58279_58288,i__58281_58290);
var map__58282_58292__$1 = ((((!((map__58282_58291 == null)))?((((map__58282_58291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58282_58291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58282_58291):map__58282_58291);
var binding_58293 = map__58282_58292__$1;
var init_58294 = cljs.core.get.call(null,map__58282_58292__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_58293);

cljs.compiler.emitln.call(null," = ",init_58294,";");

var G__58295 = seq__58278_58287;
var G__58296 = chunk__58279_58288;
var G__58297 = count__58280_58289;
var G__58298 = (i__58281_58290 + (1));
seq__58278_58287 = G__58295;
chunk__58279_58288 = G__58296;
count__58280_58289 = G__58297;
i__58281_58290 = G__58298;
continue;
} else {
var temp__4657__auto___58299 = cljs.core.seq.call(null,seq__58278_58287);
if(temp__4657__auto___58299){
var seq__58278_58300__$1 = temp__4657__auto___58299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58278_58300__$1)){
var c__25713__auto___58301 = cljs.core.chunk_first.call(null,seq__58278_58300__$1);
var G__58302 = cljs.core.chunk_rest.call(null,seq__58278_58300__$1);
var G__58303 = c__25713__auto___58301;
var G__58304 = cljs.core.count.call(null,c__25713__auto___58301);
var G__58305 = (0);
seq__58278_58287 = G__58302;
chunk__58279_58288 = G__58303;
count__58280_58289 = G__58304;
i__58281_58290 = G__58305;
continue;
} else {
var map__58284_58306 = cljs.core.first.call(null,seq__58278_58300__$1);
var map__58284_58307__$1 = ((((!((map__58284_58306 == null)))?((((map__58284_58306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284_58306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58284_58306):map__58284_58306);
var binding_58308 = map__58284_58307__$1;
var init_58309 = cljs.core.get.call(null,map__58284_58307__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_58308);

cljs.compiler.emitln.call(null," = ",init_58309,";");

var G__58310 = cljs.core.next.call(null,seq__58278_58300__$1);
var G__58311 = null;
var G__58312 = (0);
var G__58313 = (0);
seq__58278_58287 = G__58310;
chunk__58279_58288 = G__58311;
count__58280_58289 = G__58312;
i__58281_58290 = G__58313;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_58277_58286;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__58314){
var map__58315 = p__58314;
var map__58315__$1 = ((((!((map__58315 == null)))?((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58315):map__58315);
var frame = cljs.core.get.call(null,map__58315__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__58315__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__58315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25817__auto___58317 = cljs.core.count.call(null,exprs);
var i_58318 = (0);
while(true){
if((i_58318 < n__25817__auto___58317)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_58318)," = ",exprs.call(null,i_58318),";");

var G__58319 = (i_58318 + (1));
i_58318 = G__58319;
continue;
} else {
}
break;
}

var n__25817__auto___58320 = cljs.core.count.call(null,exprs);
var i_58321 = (0);
while(true){
if((i_58321 < n__25817__auto___58320)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_58321))," = ",temps.call(null,i_58321),";");

var G__58322 = (i_58321 + (1));
i_58321 = G__58322;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__58323){
var map__58324 = p__58323;
var map__58324__$1 = ((((!((map__58324 == null)))?((((map__58324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58324):map__58324);
var bindings = cljs.core.get.call(null,map__58324__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__58324__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__58324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__58326_58334 = cljs.core.seq.call(null,bindings);
var chunk__58327_58335 = null;
var count__58328_58336 = (0);
var i__58329_58337 = (0);
while(true){
if((i__58329_58337 < count__58328_58336)){
var map__58330_58338 = cljs.core._nth.call(null,chunk__58327_58335,i__58329_58337);
var map__58330_58339__$1 = ((((!((map__58330_58338 == null)))?((((map__58330_58338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58330_58338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58330_58338):map__58330_58338);
var binding_58340 = map__58330_58339__$1;
var init_58341 = cljs.core.get.call(null,map__58330_58339__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_58340)," = ",init_58341,";");

var G__58342 = seq__58326_58334;
var G__58343 = chunk__58327_58335;
var G__58344 = count__58328_58336;
var G__58345 = (i__58329_58337 + (1));
seq__58326_58334 = G__58342;
chunk__58327_58335 = G__58343;
count__58328_58336 = G__58344;
i__58329_58337 = G__58345;
continue;
} else {
var temp__4657__auto___58346 = cljs.core.seq.call(null,seq__58326_58334);
if(temp__4657__auto___58346){
var seq__58326_58347__$1 = temp__4657__auto___58346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58326_58347__$1)){
var c__25713__auto___58348 = cljs.core.chunk_first.call(null,seq__58326_58347__$1);
var G__58349 = cljs.core.chunk_rest.call(null,seq__58326_58347__$1);
var G__58350 = c__25713__auto___58348;
var G__58351 = cljs.core.count.call(null,c__25713__auto___58348);
var G__58352 = (0);
seq__58326_58334 = G__58349;
chunk__58327_58335 = G__58350;
count__58328_58336 = G__58351;
i__58329_58337 = G__58352;
continue;
} else {
var map__58332_58353 = cljs.core.first.call(null,seq__58326_58347__$1);
var map__58332_58354__$1 = ((((!((map__58332_58353 == null)))?((((map__58332_58353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58332_58353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58332_58353):map__58332_58353);
var binding_58355 = map__58332_58354__$1;
var init_58356 = cljs.core.get.call(null,map__58332_58354__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_58355)," = ",init_58356,";");

var G__58357 = cljs.core.next.call(null,seq__58326_58347__$1);
var G__58358 = null;
var G__58359 = (0);
var G__58360 = (0);
seq__58326_58334 = G__58357;
chunk__58327_58335 = G__58358;
count__58328_58336 = G__58359;
i__58329_58337 = G__58360;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__58363){
var map__58364 = p__58363;
var map__58364__$1 = ((((!((map__58364 == null)))?((((map__58364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58364):map__58364);
var expr = map__58364__$1;
var f = cljs.core.get.call(null,map__58364__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__58364__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__58364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__24887__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24887__auto__)){
var and__24887__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__24887__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__24887__auto____$1;
}
} else {
return and__24887__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__24887__auto__ = protocol;
if(cljs.core.truth_(and__24887__auto__)){
var and__24887__auto____$1 = tag;
if(cljs.core.truth_(and__24887__auto____$1)){
var or__24899__auto__ = (function (){var and__24887__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24887__auto____$2)){
var and__24887__auto____$3 = protocol;
if(cljs.core.truth_(and__24887__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__24887__auto____$3;
}
} else {
return and__24887__auto____$2;
}
})();
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
var and__24887__auto____$2 = (function (){var or__24899__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__24899__auto____$1)){
return or__24899__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__24887__auto____$2)){
var or__24899__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__24899__auto____$1){
return or__24899__auto____$1;
} else {
var and__24887__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__24887__auto____$3){
var and__24887__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__24887__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__24887__auto____$4;
}
} else {
return and__24887__auto____$3;
}
}
} else {
return and__24887__auto____$2;
}
}
} else {
return and__24887__auto____$1;
}
} else {
return and__24887__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__24899__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__24899__auto__){
return or__24899__auto__;
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
var vec__58366 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__24887__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__24887__auto__)){
return (arity > mfa);
} else {
return and__24887__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env){
return (function (p1__58361_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__58361_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env){
return (function (p1__58362_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__58362_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__58364,map__58364__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__58366,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__58366,(1),null);
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_58369 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_58369,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_58370 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_58370,args)),(((mfa_58370 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_58370,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__24899__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
var or__24899__auto____$1 = js_QMARK_;
if(or__24899__auto____$1){
return or__24899__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__24887__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__24887__auto__;
}
})())){
var fprop_58371 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_58371," ? ",f__$1,fprop_58371,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__58372){
var map__58373 = p__58372;
var map__58373__$1 = ((((!((map__58373 == null)))?((((map__58373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58373):map__58373);
var ctor = cljs.core.get.call(null,map__58373__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__58373__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__58373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__58375){
var map__58376 = p__58375;
var map__58376__$1 = ((((!((map__58376 == null)))?((((map__58376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58376):map__58376);
var target = cljs.core.get.call(null,map__58376__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__58376__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__58376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
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

var seq__58382_58386 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__58383_58387 = null;
var count__58384_58388 = (0);
var i__58385_58389 = (0);
while(true){
if((i__58385_58389 < count__58384_58388)){
var lib_58390 = cljs.core._nth.call(null,chunk__58383_58387,i__58385_58389);
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_58390),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_58390),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_58390),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_58390),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_58390),"');");

}
}

var G__58391 = seq__58382_58386;
var G__58392 = chunk__58383_58387;
var G__58393 = count__58384_58388;
var G__58394 = (i__58385_58389 + (1));
seq__58382_58386 = G__58391;
chunk__58383_58387 = G__58392;
count__58384_58388 = G__58393;
i__58385_58389 = G__58394;
continue;
} else {
var temp__4657__auto___58395 = cljs.core.seq.call(null,seq__58382_58386);
if(temp__4657__auto___58395){
var seq__58382_58396__$1 = temp__4657__auto___58395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58382_58396__$1)){
var c__25713__auto___58397 = cljs.core.chunk_first.call(null,seq__58382_58396__$1);
var G__58398 = cljs.core.chunk_rest.call(null,seq__58382_58396__$1);
var G__58399 = c__25713__auto___58397;
var G__58400 = cljs.core.count.call(null,c__25713__auto___58397);
var G__58401 = (0);
seq__58382_58386 = G__58398;
chunk__58383_58387 = G__58399;
count__58384_58388 = G__58400;
i__58385_58389 = G__58401;
continue;
} else {
var lib_58402 = cljs.core.first.call(null,seq__58382_58396__$1);
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_58402),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_58402),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_58402),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_58402),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_58402),"');");

}
}

var G__58403 = cljs.core.next.call(null,seq__58382_58396__$1);
var G__58404 = null;
var G__58405 = (0);
var G__58406 = (0);
seq__58382_58386 = G__58403;
chunk__58383_58387 = G__58404;
count__58384_58388 = G__58405;
i__58385_58389 = G__58406;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__58407){
var map__58408 = p__58407;
var map__58408__$1 = ((((!((map__58408 == null)))?((((map__58408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58408):map__58408);
var name = cljs.core.get.call(null,map__58408__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__58408__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__58408__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__58408__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__58408__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__58408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__58410){
var map__58411 = p__58410;
var map__58411__$1 = ((((!((map__58411 == null)))?((((map__58411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58411):map__58411);
var name = cljs.core.get.call(null,map__58411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__58411__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__58411__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__58411__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__58411__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__58411__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__58413){
var map__58414 = p__58413;
var map__58414__$1 = ((((!((map__58414 == null)))?((((map__58414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58414):map__58414);
var t = cljs.core.get.call(null,map__58414__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__58414__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__58414__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__58414__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__58414__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__58416_58434 = cljs.core.seq.call(null,protocols);
var chunk__58417_58435 = null;
var count__58418_58436 = (0);
var i__58419_58437 = (0);
while(true){
if((i__58419_58437 < count__58418_58436)){
var protocol_58438 = cljs.core._nth.call(null,chunk__58417_58435,i__58419_58437);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_58438)].join('')),"}");

var G__58439 = seq__58416_58434;
var G__58440 = chunk__58417_58435;
var G__58441 = count__58418_58436;
var G__58442 = (i__58419_58437 + (1));
seq__58416_58434 = G__58439;
chunk__58417_58435 = G__58440;
count__58418_58436 = G__58441;
i__58419_58437 = G__58442;
continue;
} else {
var temp__4657__auto___58443 = cljs.core.seq.call(null,seq__58416_58434);
if(temp__4657__auto___58443){
var seq__58416_58444__$1 = temp__4657__auto___58443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58416_58444__$1)){
var c__25713__auto___58445 = cljs.core.chunk_first.call(null,seq__58416_58444__$1);
var G__58446 = cljs.core.chunk_rest.call(null,seq__58416_58444__$1);
var G__58447 = c__25713__auto___58445;
var G__58448 = cljs.core.count.call(null,c__25713__auto___58445);
var G__58449 = (0);
seq__58416_58434 = G__58446;
chunk__58417_58435 = G__58447;
count__58418_58436 = G__58448;
i__58419_58437 = G__58449;
continue;
} else {
var protocol_58450 = cljs.core.first.call(null,seq__58416_58444__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_58450)].join('')),"}");

var G__58451 = cljs.core.next.call(null,seq__58416_58444__$1);
var G__58452 = null;
var G__58453 = (0);
var G__58454 = (0);
seq__58416_58434 = G__58451;
chunk__58417_58435 = G__58452;
count__58418_58436 = G__58453;
i__58419_58437 = G__58454;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__58420_58455 = cljs.core.seq.call(null,fields__$1);
var chunk__58421_58456 = null;
var count__58422_58457 = (0);
var i__58423_58458 = (0);
while(true){
if((i__58423_58458 < count__58422_58457)){
var fld_58459 = cljs.core._nth.call(null,chunk__58421_58456,i__58423_58458);
cljs.compiler.emitln.call(null,"this.",fld_58459," = ",fld_58459,";");

var G__58460 = seq__58420_58455;
var G__58461 = chunk__58421_58456;
var G__58462 = count__58422_58457;
var G__58463 = (i__58423_58458 + (1));
seq__58420_58455 = G__58460;
chunk__58421_58456 = G__58461;
count__58422_58457 = G__58462;
i__58423_58458 = G__58463;
continue;
} else {
var temp__4657__auto___58464 = cljs.core.seq.call(null,seq__58420_58455);
if(temp__4657__auto___58464){
var seq__58420_58465__$1 = temp__4657__auto___58464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58420_58465__$1)){
var c__25713__auto___58466 = cljs.core.chunk_first.call(null,seq__58420_58465__$1);
var G__58467 = cljs.core.chunk_rest.call(null,seq__58420_58465__$1);
var G__58468 = c__25713__auto___58466;
var G__58469 = cljs.core.count.call(null,c__25713__auto___58466);
var G__58470 = (0);
seq__58420_58455 = G__58467;
chunk__58421_58456 = G__58468;
count__58422_58457 = G__58469;
i__58423_58458 = G__58470;
continue;
} else {
var fld_58471 = cljs.core.first.call(null,seq__58420_58465__$1);
cljs.compiler.emitln.call(null,"this.",fld_58471," = ",fld_58471,";");

var G__58472 = cljs.core.next.call(null,seq__58420_58465__$1);
var G__58473 = null;
var G__58474 = (0);
var G__58475 = (0);
seq__58420_58455 = G__58472;
chunk__58421_58456 = G__58473;
count__58422_58457 = G__58474;
i__58423_58458 = G__58475;
continue;
}
} else {
}
}
break;
}

var seq__58424_58476 = cljs.core.seq.call(null,pmasks);
var chunk__58425_58477 = null;
var count__58426_58478 = (0);
var i__58427_58479 = (0);
while(true){
if((i__58427_58479 < count__58426_58478)){
var vec__58428_58480 = cljs.core._nth.call(null,chunk__58425_58477,i__58427_58479);
var pno_58481 = cljs.core.nth.call(null,vec__58428_58480,(0),null);
var pmask_58482 = cljs.core.nth.call(null,vec__58428_58480,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_58481,"$ = ",pmask_58482,";");

var G__58483 = seq__58424_58476;
var G__58484 = chunk__58425_58477;
var G__58485 = count__58426_58478;
var G__58486 = (i__58427_58479 + (1));
seq__58424_58476 = G__58483;
chunk__58425_58477 = G__58484;
count__58426_58478 = G__58485;
i__58427_58479 = G__58486;
continue;
} else {
var temp__4657__auto___58487 = cljs.core.seq.call(null,seq__58424_58476);
if(temp__4657__auto___58487){
var seq__58424_58488__$1 = temp__4657__auto___58487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58424_58488__$1)){
var c__25713__auto___58489 = cljs.core.chunk_first.call(null,seq__58424_58488__$1);
var G__58490 = cljs.core.chunk_rest.call(null,seq__58424_58488__$1);
var G__58491 = c__25713__auto___58489;
var G__58492 = cljs.core.count.call(null,c__25713__auto___58489);
var G__58493 = (0);
seq__58424_58476 = G__58490;
chunk__58425_58477 = G__58491;
count__58426_58478 = G__58492;
i__58427_58479 = G__58493;
continue;
} else {
var vec__58431_58494 = cljs.core.first.call(null,seq__58424_58488__$1);
var pno_58495 = cljs.core.nth.call(null,vec__58431_58494,(0),null);
var pmask_58496 = cljs.core.nth.call(null,vec__58431_58494,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_58495,"$ = ",pmask_58496,";");

var G__58497 = cljs.core.next.call(null,seq__58424_58488__$1);
var G__58498 = null;
var G__58499 = (0);
var G__58500 = (0);
seq__58424_58476 = G__58497;
chunk__58425_58477 = G__58498;
count__58426_58478 = G__58499;
i__58427_58479 = G__58500;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__58501){
var map__58502 = p__58501;
var map__58502__$1 = ((((!((map__58502 == null)))?((((map__58502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58502):map__58502);
var t = cljs.core.get.call(null,map__58502__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__58502__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__58502__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__58502__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__58502__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__58504_58522 = cljs.core.seq.call(null,protocols);
var chunk__58505_58523 = null;
var count__58506_58524 = (0);
var i__58507_58525 = (0);
while(true){
if((i__58507_58525 < count__58506_58524)){
var protocol_58526 = cljs.core._nth.call(null,chunk__58505_58523,i__58507_58525);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_58526)].join('')),"}");

var G__58527 = seq__58504_58522;
var G__58528 = chunk__58505_58523;
var G__58529 = count__58506_58524;
var G__58530 = (i__58507_58525 + (1));
seq__58504_58522 = G__58527;
chunk__58505_58523 = G__58528;
count__58506_58524 = G__58529;
i__58507_58525 = G__58530;
continue;
} else {
var temp__4657__auto___58531 = cljs.core.seq.call(null,seq__58504_58522);
if(temp__4657__auto___58531){
var seq__58504_58532__$1 = temp__4657__auto___58531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58504_58532__$1)){
var c__25713__auto___58533 = cljs.core.chunk_first.call(null,seq__58504_58532__$1);
var G__58534 = cljs.core.chunk_rest.call(null,seq__58504_58532__$1);
var G__58535 = c__25713__auto___58533;
var G__58536 = cljs.core.count.call(null,c__25713__auto___58533);
var G__58537 = (0);
seq__58504_58522 = G__58534;
chunk__58505_58523 = G__58535;
count__58506_58524 = G__58536;
i__58507_58525 = G__58537;
continue;
} else {
var protocol_58538 = cljs.core.first.call(null,seq__58504_58532__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_58538)].join('')),"}");

var G__58539 = cljs.core.next.call(null,seq__58504_58532__$1);
var G__58540 = null;
var G__58541 = (0);
var G__58542 = (0);
seq__58504_58522 = G__58539;
chunk__58505_58523 = G__58540;
count__58506_58524 = G__58541;
i__58507_58525 = G__58542;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__58508_58543 = cljs.core.seq.call(null,fields__$1);
var chunk__58509_58544 = null;
var count__58510_58545 = (0);
var i__58511_58546 = (0);
while(true){
if((i__58511_58546 < count__58510_58545)){
var fld_58547 = cljs.core._nth.call(null,chunk__58509_58544,i__58511_58546);
cljs.compiler.emitln.call(null,"this.",fld_58547," = ",fld_58547,";");

var G__58548 = seq__58508_58543;
var G__58549 = chunk__58509_58544;
var G__58550 = count__58510_58545;
var G__58551 = (i__58511_58546 + (1));
seq__58508_58543 = G__58548;
chunk__58509_58544 = G__58549;
count__58510_58545 = G__58550;
i__58511_58546 = G__58551;
continue;
} else {
var temp__4657__auto___58552 = cljs.core.seq.call(null,seq__58508_58543);
if(temp__4657__auto___58552){
var seq__58508_58553__$1 = temp__4657__auto___58552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58508_58553__$1)){
var c__25713__auto___58554 = cljs.core.chunk_first.call(null,seq__58508_58553__$1);
var G__58555 = cljs.core.chunk_rest.call(null,seq__58508_58553__$1);
var G__58556 = c__25713__auto___58554;
var G__58557 = cljs.core.count.call(null,c__25713__auto___58554);
var G__58558 = (0);
seq__58508_58543 = G__58555;
chunk__58509_58544 = G__58556;
count__58510_58545 = G__58557;
i__58511_58546 = G__58558;
continue;
} else {
var fld_58559 = cljs.core.first.call(null,seq__58508_58553__$1);
cljs.compiler.emitln.call(null,"this.",fld_58559," = ",fld_58559,";");

var G__58560 = cljs.core.next.call(null,seq__58508_58553__$1);
var G__58561 = null;
var G__58562 = (0);
var G__58563 = (0);
seq__58508_58543 = G__58560;
chunk__58509_58544 = G__58561;
count__58510_58545 = G__58562;
i__58511_58546 = G__58563;
continue;
}
} else {
}
}
break;
}

var seq__58512_58564 = cljs.core.seq.call(null,pmasks);
var chunk__58513_58565 = null;
var count__58514_58566 = (0);
var i__58515_58567 = (0);
while(true){
if((i__58515_58567 < count__58514_58566)){
var vec__58516_58568 = cljs.core._nth.call(null,chunk__58513_58565,i__58515_58567);
var pno_58569 = cljs.core.nth.call(null,vec__58516_58568,(0),null);
var pmask_58570 = cljs.core.nth.call(null,vec__58516_58568,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_58569,"$ = ",pmask_58570,";");

var G__58571 = seq__58512_58564;
var G__58572 = chunk__58513_58565;
var G__58573 = count__58514_58566;
var G__58574 = (i__58515_58567 + (1));
seq__58512_58564 = G__58571;
chunk__58513_58565 = G__58572;
count__58514_58566 = G__58573;
i__58515_58567 = G__58574;
continue;
} else {
var temp__4657__auto___58575 = cljs.core.seq.call(null,seq__58512_58564);
if(temp__4657__auto___58575){
var seq__58512_58576__$1 = temp__4657__auto___58575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58512_58576__$1)){
var c__25713__auto___58577 = cljs.core.chunk_first.call(null,seq__58512_58576__$1);
var G__58578 = cljs.core.chunk_rest.call(null,seq__58512_58576__$1);
var G__58579 = c__25713__auto___58577;
var G__58580 = cljs.core.count.call(null,c__25713__auto___58577);
var G__58581 = (0);
seq__58512_58564 = G__58578;
chunk__58513_58565 = G__58579;
count__58514_58566 = G__58580;
i__58515_58567 = G__58581;
continue;
} else {
var vec__58519_58582 = cljs.core.first.call(null,seq__58512_58576__$1);
var pno_58583 = cljs.core.nth.call(null,vec__58519_58582,(0),null);
var pmask_58584 = cljs.core.nth.call(null,vec__58519_58582,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_58583,"$ = ",pmask_58584,";");

var G__58585 = cljs.core.next.call(null,seq__58512_58576__$1);
var G__58586 = null;
var G__58587 = (0);
var G__58588 = (0);
seq__58512_58564 = G__58585;
chunk__58513_58565 = G__58586;
count__58514_58566 = G__58587;
i__58515_58567 = G__58588;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__58589){
var map__58590 = p__58589;
var map__58590__$1 = ((((!((map__58590 == null)))?((((map__58590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58590):map__58590);
var target = cljs.core.get.call(null,map__58590__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__58590__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__58590__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__58590__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__58590__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__58592){
var map__58593 = p__58592;
var map__58593__$1 = ((((!((map__58593 == null)))?((((map__58593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58593):map__58593);
var op = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24887__auto__ = code;
if(cljs.core.truth_(and__24887__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24887__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__57477__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__57477__auto__))){
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
var seq__58607 = cljs.core.seq.call(null,table);
var chunk__58608 = null;
var count__58609 = (0);
var i__58610 = (0);
while(true){
if((i__58610 < count__58609)){
var vec__58611 = cljs.core._nth.call(null,chunk__58608,i__58610);
var sym = cljs.core.nth.call(null,vec__58611,(0),null);
var value = cljs.core.nth.call(null,vec__58611,(1),null);
var ns_58617 = cljs.core.namespace.call(null,sym);
var name_58618 = cljs.core.name.call(null,sym);
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

var G__58619 = seq__58607;
var G__58620 = chunk__58608;
var G__58621 = count__58609;
var G__58622 = (i__58610 + (1));
seq__58607 = G__58619;
chunk__58608 = G__58620;
count__58609 = G__58621;
i__58610 = G__58622;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58607);
if(temp__4657__auto__){
var seq__58607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58607__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__58607__$1);
var G__58623 = cljs.core.chunk_rest.call(null,seq__58607__$1);
var G__58624 = c__25713__auto__;
var G__58625 = cljs.core.count.call(null,c__25713__auto__);
var G__58626 = (0);
seq__58607 = G__58623;
chunk__58608 = G__58624;
count__58609 = G__58625;
i__58610 = G__58626;
continue;
} else {
var vec__58614 = cljs.core.first.call(null,seq__58607__$1);
var sym = cljs.core.nth.call(null,vec__58614,(0),null);
var value = cljs.core.nth.call(null,vec__58614,(1),null);
var ns_58627 = cljs.core.namespace.call(null,sym);
var name_58628 = cljs.core.name.call(null,sym);
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

var G__58629 = cljs.core.next.call(null,seq__58607__$1);
var G__58630 = null;
var G__58631 = (0);
var G__58632 = (0);
seq__58607 = G__58629;
chunk__58608 = G__58630;
count__58609 = G__58631;
i__58610 = G__58632;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1479783755608