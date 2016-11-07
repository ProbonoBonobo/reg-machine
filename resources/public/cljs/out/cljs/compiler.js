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
var map__28532 = s;
var map__28532__$1 = ((((!((map__28532 == null)))?((((map__28532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28532):map__28532);
var name = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28535 = info;
var map__28536 = G__28535;
var map__28536__$1 = ((((!((map__28536 == null)))?((((map__28536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);
var shadow = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28535__$1 = G__28535;
while(true){
var d__$2 = d__$1;
var map__28538 = G__28535__$1;
var map__28538__$1 = ((((!((map__28538 == null)))?((((map__28538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28538):map__28538);
var shadow__$1 = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__28540 = (d__$2 + (1));
var G__28541 = shadow__$1;
d__$1 = G__28540;
G__28535__$1 = G__28541;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28542){
var map__28547 = p__28542;
var map__28547__$1 = ((((!((map__28547 == null)))?((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28547):map__28547);
var name_var = map__28547__$1;
var name = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__28549 = info;
var map__28549__$1 = ((((!((map__28549 == null)))?((((map__28549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);
var ns = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args28551 = [];
var len__25826__auto___28554 = arguments.length;
var i__25827__auto___28555 = (0);
while(true){
if((i__25827__auto___28555 < len__25826__auto___28554)){
args28551.push((arguments[i__25827__auto___28555]));

var G__28556 = (i__25827__auto___28555 + (1));
i__25827__auto___28555 = G__28556;
continue;
} else {
}
break;
}

var G__28553 = args28551.length;
switch (G__28553) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28551.length)].join('')));

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
var G__28559 = cp;
switch (G__28559) {
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
var seq__28565_28569 = cljs.core.seq.call(null,s);
var chunk__28566_28570 = null;
var count__28567_28571 = (0);
var i__28568_28572 = (0);
while(true){
if((i__28568_28572 < count__28567_28571)){
var c_28573 = cljs.core._nth.call(null,chunk__28566_28570,i__28568_28572);
sb.append(cljs.compiler.escape_char.call(null,c_28573));

var G__28574 = seq__28565_28569;
var G__28575 = chunk__28566_28570;
var G__28576 = count__28567_28571;
var G__28577 = (i__28568_28572 + (1));
seq__28565_28569 = G__28574;
chunk__28566_28570 = G__28575;
count__28567_28571 = G__28576;
i__28568_28572 = G__28577;
continue;
} else {
var temp__4657__auto___28578 = cljs.core.seq.call(null,seq__28565_28569);
if(temp__4657__auto___28578){
var seq__28565_28579__$1 = temp__4657__auto___28578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28565_28579__$1)){
var c__25562__auto___28580 = cljs.core.chunk_first.call(null,seq__28565_28579__$1);
var G__28581 = cljs.core.chunk_rest.call(null,seq__28565_28579__$1);
var G__28582 = c__25562__auto___28580;
var G__28583 = cljs.core.count.call(null,c__25562__auto___28580);
var G__28584 = (0);
seq__28565_28569 = G__28581;
chunk__28566_28570 = G__28582;
count__28567_28571 = G__28583;
i__28568_28572 = G__28584;
continue;
} else {
var c_28585 = cljs.core.first.call(null,seq__28565_28579__$1);
sb.append(cljs.compiler.escape_char.call(null,c_28585));

var G__28586 = cljs.core.next.call(null,seq__28565_28579__$1);
var G__28587 = null;
var G__28588 = (0);
var G__28589 = (0);
seq__28565_28569 = G__28586;
chunk__28566_28570 = G__28587;
count__28567_28571 = G__28588;
i__28568_28572 = G__28589;
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
var val__26681__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__26681__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28595_28600 = ast;
var map__28595_28601__$1 = ((((!((map__28595_28600 == null)))?((((map__28595_28600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28595_28600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28595_28600):map__28595_28600);
var env_28602 = cljs.core.get.call(null,map__28595_28601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_28602))){
var map__28597_28603 = env_28602;
var map__28597_28604__$1 = ((((!((map__28597_28603 == null)))?((((map__28597_28603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597_28603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597_28603):map__28597_28603);
var line_28605 = cljs.core.get.call(null,map__28597_28604__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28606 = cljs.core.get.call(null,map__28597_28604__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__28597_28603,map__28597_28604__$1,line_28605,column_28606,map__28595_28600,map__28595_28601__$1,env_28602,val__26681__auto__){
return (function (m){
var minfo = (function (){var G__28599 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__28599,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__28599;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_28605 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__28597_28603,map__28597_28604__$1,line_28605,column_28606,map__28595_28600,map__28595_28601__$1,env_28602,val__26681__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28606)?(column_28606 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__28597_28603,map__28597_28604__$1,line_28605,column_28606,map__28595_28600,map__28595_28601__$1,env_28602,val__26681__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__28597_28603,map__28597_28604__$1,line_28605,column_28606,map__28595_28600,map__28595_28601__$1,env_28602,val__26681__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__28597_28603,map__28597_28604__$1,line_28605,column_28606,map__28595_28600,map__28595_28601__$1,env_28602,val__26681__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__28597_28603,map__28597_28604__$1,line_28605,column_28606,map__28595_28600,map__28595_28601__$1,env_28602,val__26681__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__26681__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25833__auto__ = [];
var len__25826__auto___28613 = arguments.length;
var i__25827__auto___28614 = (0);
while(true){
if((i__25827__auto___28614 < len__25826__auto___28613)){
args__25833__auto__.push((arguments[i__25827__auto___28614]));

var G__28615 = (i__25827__auto___28614 + (1));
i__25827__auto___28614 = G__28615;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__28609_28616 = cljs.core.seq.call(null,xs);
var chunk__28610_28617 = null;
var count__28611_28618 = (0);
var i__28612_28619 = (0);
while(true){
if((i__28612_28619 < count__28611_28618)){
var x_28620 = cljs.core._nth.call(null,chunk__28610_28617,i__28612_28619);
if((x_28620 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28620)){
cljs.compiler.emit.call(null,x_28620);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28620)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28620);
} else {
if(goog.isFunction(x_28620)){
x_28620.call(null);
} else {
var s_28621 = cljs.core.print_str.call(null,x_28620);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28609_28616,chunk__28610_28617,count__28611_28618,i__28612_28619,s_28621,x_28620){
return (function (p1__28607_SHARP_){
return (p1__28607_SHARP_ + cljs.core.count.call(null,s_28621));
});})(seq__28609_28616,chunk__28610_28617,count__28611_28618,i__28612_28619,s_28621,x_28620))
);
}

cljs.core.print.call(null,s_28621);

}
}
}
}

var G__28622 = seq__28609_28616;
var G__28623 = chunk__28610_28617;
var G__28624 = count__28611_28618;
var G__28625 = (i__28612_28619 + (1));
seq__28609_28616 = G__28622;
chunk__28610_28617 = G__28623;
count__28611_28618 = G__28624;
i__28612_28619 = G__28625;
continue;
} else {
var temp__4657__auto___28626 = cljs.core.seq.call(null,seq__28609_28616);
if(temp__4657__auto___28626){
var seq__28609_28627__$1 = temp__4657__auto___28626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28609_28627__$1)){
var c__25562__auto___28628 = cljs.core.chunk_first.call(null,seq__28609_28627__$1);
var G__28629 = cljs.core.chunk_rest.call(null,seq__28609_28627__$1);
var G__28630 = c__25562__auto___28628;
var G__28631 = cljs.core.count.call(null,c__25562__auto___28628);
var G__28632 = (0);
seq__28609_28616 = G__28629;
chunk__28610_28617 = G__28630;
count__28611_28618 = G__28631;
i__28612_28619 = G__28632;
continue;
} else {
var x_28633 = cljs.core.first.call(null,seq__28609_28627__$1);
if((x_28633 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28633)){
cljs.compiler.emit.call(null,x_28633);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28633)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28633);
} else {
if(goog.isFunction(x_28633)){
x_28633.call(null);
} else {
var s_28634 = cljs.core.print_str.call(null,x_28633);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28609_28616,chunk__28610_28617,count__28611_28618,i__28612_28619,s_28634,x_28633,seq__28609_28627__$1,temp__4657__auto___28626){
return (function (p1__28607_SHARP_){
return (p1__28607_SHARP_ + cljs.core.count.call(null,s_28634));
});})(seq__28609_28616,chunk__28610_28617,count__28611_28618,i__28612_28619,s_28634,x_28633,seq__28609_28627__$1,temp__4657__auto___28626))
);
}

cljs.core.print.call(null,s_28634);

}
}
}
}

var G__28635 = cljs.core.next.call(null,seq__28609_28627__$1);
var G__28636 = null;
var G__28637 = (0);
var G__28638 = (0);
seq__28609_28616 = G__28635;
chunk__28610_28617 = G__28636;
count__28611_28618 = G__28637;
i__28612_28619 = G__28638;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq28608){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28608));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25833__auto__ = [];
var len__25826__auto___28643 = arguments.length;
var i__25827__auto___28644 = (0);
while(true){
if((i__25827__auto___28644 < len__25826__auto___28643)){
args__25833__auto__.push((arguments[i__25827__auto___28644]));

var G__28645 = (i__25827__auto___28644 + (1));
i__25827__auto___28644 = G__28645;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__28640){
var map__28641 = p__28640;
var map__28641__$1 = ((((!((map__28641 == null)))?((((map__28641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28641):map__28641);
var m = map__28641__$1;
var gen_line = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28639){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28639));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28648_28650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28649_28651 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28648_28650,_STAR_print_fn_STAR_28649_28651,sb__25737__auto__){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(_STAR_print_newline_STAR_28648_28650,_STAR_print_fn_STAR_28649_28651,sb__25737__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28649_28651;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28648_28650;
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
var vec__28652 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__28652,(0),null);
var flags = cljs.core.nth.call(null,vec__28652,(1),null);
var pattern = cljs.core.nth.call(null,vec__28652,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__28656){
var map__28657 = p__28656;
var map__28657__$1 = ((((!((map__28657 == null)))?((((map__28657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28657):map__28657);
var arg = map__28657__$1;
var info = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__28659 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__28659);
} else {
return G__28659;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__28660){
var map__28661 = p__28660;
var map__28661__$1 = ((((!((map__28661 == null)))?((((map__28661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);
var arg = map__28661__$1;
var env = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__28663 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28663__$1 = ((((!((map__28663 == null)))?((((map__28663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);
var name = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__28665){
var map__28666 = p__28665;
var map__28666__$1 = ((((!((map__28666 == null)))?((((map__28666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28666):map__28666);
var expr = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__28668_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28668_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__28669){
var map__28670 = p__28669;
var map__28670__$1 = ((((!((map__28670 == null)))?((((map__28670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28670):map__28670);
var env = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28672){
var map__28673 = p__28672;
var map__28673__$1 = ((((!((map__28673 == null)))?((((map__28673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28673):map__28673);
var items = cljs.core.get.call(null,map__28673__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__28675){
var map__28676 = p__28675;
var map__28676__$1 = ((((!((map__28676 == null)))?((((map__28676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28676):map__28676);
var items = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_28678 = cljs.core.count.call(null,items);
if((cnt_28678 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_28678,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__28679_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28679_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__28680){
var map__28681 = p__28680;
var map__28681__$1 = ((((!((map__28681 == null)))?((((map__28681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28681):map__28681);
var items = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__28683){
var map__28684 = p__28683;
var map__28684__$1 = ((((!((map__28684 == null)))?((((map__28684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);
var items = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___28702 = cljs.core.seq.call(null,items);
if(temp__4657__auto___28702){
var items_28703__$1 = temp__4657__auto___28702;
var vec__28686_28704 = items_28703__$1;
var seq__28687_28705 = cljs.core.seq.call(null,vec__28686_28704);
var first__28688_28706 = cljs.core.first.call(null,seq__28687_28705);
var seq__28687_28707__$1 = cljs.core.next.call(null,seq__28687_28705);
var vec__28689_28708 = first__28688_28706;
var k_28709 = cljs.core.nth.call(null,vec__28689_28708,(0),null);
var v_28710 = cljs.core.nth.call(null,vec__28689_28708,(1),null);
var r_28711 = seq__28687_28707__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_28709),"\": ",v_28710);

var seq__28692_28712 = cljs.core.seq.call(null,r_28711);
var chunk__28693_28713 = null;
var count__28694_28714 = (0);
var i__28695_28715 = (0);
while(true){
if((i__28695_28715 < count__28694_28714)){
var vec__28696_28716 = cljs.core._nth.call(null,chunk__28693_28713,i__28695_28715);
var k_28717__$1 = cljs.core.nth.call(null,vec__28696_28716,(0),null);
var v_28718__$1 = cljs.core.nth.call(null,vec__28696_28716,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28717__$1),"\": ",v_28718__$1);

var G__28719 = seq__28692_28712;
var G__28720 = chunk__28693_28713;
var G__28721 = count__28694_28714;
var G__28722 = (i__28695_28715 + (1));
seq__28692_28712 = G__28719;
chunk__28693_28713 = G__28720;
count__28694_28714 = G__28721;
i__28695_28715 = G__28722;
continue;
} else {
var temp__4657__auto___28723__$1 = cljs.core.seq.call(null,seq__28692_28712);
if(temp__4657__auto___28723__$1){
var seq__28692_28724__$1 = temp__4657__auto___28723__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28692_28724__$1)){
var c__25562__auto___28725 = cljs.core.chunk_first.call(null,seq__28692_28724__$1);
var G__28726 = cljs.core.chunk_rest.call(null,seq__28692_28724__$1);
var G__28727 = c__25562__auto___28725;
var G__28728 = cljs.core.count.call(null,c__25562__auto___28725);
var G__28729 = (0);
seq__28692_28712 = G__28726;
chunk__28693_28713 = G__28727;
count__28694_28714 = G__28728;
i__28695_28715 = G__28729;
continue;
} else {
var vec__28699_28730 = cljs.core.first.call(null,seq__28692_28724__$1);
var k_28731__$1 = cljs.core.nth.call(null,vec__28699_28730,(0),null);
var v_28732__$1 = cljs.core.nth.call(null,vec__28699_28730,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28731__$1),"\": ",v_28732__$1);

var G__28733 = cljs.core.next.call(null,seq__28692_28724__$1);
var G__28734 = null;
var G__28735 = (0);
var G__28736 = (0);
seq__28692_28712 = G__28733;
chunk__28693_28713 = G__28734;
count__28694_28714 = G__28735;
i__28695_28715 = G__28736;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__28737){
var map__28738 = p__28737;
var map__28738__$1 = ((((!((map__28738 == null)))?((((map__28738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28738):map__28738);
var form = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__28740){
var map__28743 = p__28740;
var map__28743__$1 = ((((!((map__28743 == null)))?((((map__28743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28743):map__28743);
var op = cljs.core.get.call(null,map__28743__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28743__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__28745){
var map__28748 = p__28745;
var map__28748__$1 = ((((!((map__28748 == null)))?((((map__28748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748):map__28748);
var op = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28750){
var map__28751 = p__28750;
var map__28751__$1 = ((((!((map__28751 == null)))?((((map__28751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);
var test = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__28753){
var map__28754 = p__28753;
var map__28754__$1 = ((((!((map__28754 == null)))?((((map__28754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);
var v = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__28756_28774 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__28757_28775 = null;
var count__28758_28776 = (0);
var i__28759_28777 = (0);
while(true){
if((i__28759_28777 < count__28758_28776)){
var vec__28760_28778 = cljs.core._nth.call(null,chunk__28757_28775,i__28759_28777);
var ts_28779 = cljs.core.nth.call(null,vec__28760_28778,(0),null);
var then_28780 = cljs.core.nth.call(null,vec__28760_28778,(1),null);
var seq__28763_28781 = cljs.core.seq.call(null,ts_28779);
var chunk__28764_28782 = null;
var count__28765_28783 = (0);
var i__28766_28784 = (0);
while(true){
if((i__28766_28784 < count__28765_28783)){
var test_28785 = cljs.core._nth.call(null,chunk__28764_28782,i__28766_28784);
cljs.compiler.emitln.call(null,"case ",test_28785,":");

var G__28786 = seq__28763_28781;
var G__28787 = chunk__28764_28782;
var G__28788 = count__28765_28783;
var G__28789 = (i__28766_28784 + (1));
seq__28763_28781 = G__28786;
chunk__28764_28782 = G__28787;
count__28765_28783 = G__28788;
i__28766_28784 = G__28789;
continue;
} else {
var temp__4657__auto___28790 = cljs.core.seq.call(null,seq__28763_28781);
if(temp__4657__auto___28790){
var seq__28763_28791__$1 = temp__4657__auto___28790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28763_28791__$1)){
var c__25562__auto___28792 = cljs.core.chunk_first.call(null,seq__28763_28791__$1);
var G__28793 = cljs.core.chunk_rest.call(null,seq__28763_28791__$1);
var G__28794 = c__25562__auto___28792;
var G__28795 = cljs.core.count.call(null,c__25562__auto___28792);
var G__28796 = (0);
seq__28763_28781 = G__28793;
chunk__28764_28782 = G__28794;
count__28765_28783 = G__28795;
i__28766_28784 = G__28796;
continue;
} else {
var test_28797 = cljs.core.first.call(null,seq__28763_28791__$1);
cljs.compiler.emitln.call(null,"case ",test_28797,":");

var G__28798 = cljs.core.next.call(null,seq__28763_28791__$1);
var G__28799 = null;
var G__28800 = (0);
var G__28801 = (0);
seq__28763_28781 = G__28798;
chunk__28764_28782 = G__28799;
count__28765_28783 = G__28800;
i__28766_28784 = G__28801;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28780);
} else {
cljs.compiler.emitln.call(null,then_28780);
}

cljs.compiler.emitln.call(null,"break;");

var G__28802 = seq__28756_28774;
var G__28803 = chunk__28757_28775;
var G__28804 = count__28758_28776;
var G__28805 = (i__28759_28777 + (1));
seq__28756_28774 = G__28802;
chunk__28757_28775 = G__28803;
count__28758_28776 = G__28804;
i__28759_28777 = G__28805;
continue;
} else {
var temp__4657__auto___28806 = cljs.core.seq.call(null,seq__28756_28774);
if(temp__4657__auto___28806){
var seq__28756_28807__$1 = temp__4657__auto___28806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28756_28807__$1)){
var c__25562__auto___28808 = cljs.core.chunk_first.call(null,seq__28756_28807__$1);
var G__28809 = cljs.core.chunk_rest.call(null,seq__28756_28807__$1);
var G__28810 = c__25562__auto___28808;
var G__28811 = cljs.core.count.call(null,c__25562__auto___28808);
var G__28812 = (0);
seq__28756_28774 = G__28809;
chunk__28757_28775 = G__28810;
count__28758_28776 = G__28811;
i__28759_28777 = G__28812;
continue;
} else {
var vec__28767_28813 = cljs.core.first.call(null,seq__28756_28807__$1);
var ts_28814 = cljs.core.nth.call(null,vec__28767_28813,(0),null);
var then_28815 = cljs.core.nth.call(null,vec__28767_28813,(1),null);
var seq__28770_28816 = cljs.core.seq.call(null,ts_28814);
var chunk__28771_28817 = null;
var count__28772_28818 = (0);
var i__28773_28819 = (0);
while(true){
if((i__28773_28819 < count__28772_28818)){
var test_28820 = cljs.core._nth.call(null,chunk__28771_28817,i__28773_28819);
cljs.compiler.emitln.call(null,"case ",test_28820,":");

var G__28821 = seq__28770_28816;
var G__28822 = chunk__28771_28817;
var G__28823 = count__28772_28818;
var G__28824 = (i__28773_28819 + (1));
seq__28770_28816 = G__28821;
chunk__28771_28817 = G__28822;
count__28772_28818 = G__28823;
i__28773_28819 = G__28824;
continue;
} else {
var temp__4657__auto___28825__$1 = cljs.core.seq.call(null,seq__28770_28816);
if(temp__4657__auto___28825__$1){
var seq__28770_28826__$1 = temp__4657__auto___28825__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28770_28826__$1)){
var c__25562__auto___28827 = cljs.core.chunk_first.call(null,seq__28770_28826__$1);
var G__28828 = cljs.core.chunk_rest.call(null,seq__28770_28826__$1);
var G__28829 = c__25562__auto___28827;
var G__28830 = cljs.core.count.call(null,c__25562__auto___28827);
var G__28831 = (0);
seq__28770_28816 = G__28828;
chunk__28771_28817 = G__28829;
count__28772_28818 = G__28830;
i__28773_28819 = G__28831;
continue;
} else {
var test_28832 = cljs.core.first.call(null,seq__28770_28826__$1);
cljs.compiler.emitln.call(null,"case ",test_28832,":");

var G__28833 = cljs.core.next.call(null,seq__28770_28826__$1);
var G__28834 = null;
var G__28835 = (0);
var G__28836 = (0);
seq__28770_28816 = G__28833;
chunk__28771_28817 = G__28834;
count__28772_28818 = G__28835;
i__28773_28819 = G__28836;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28815);
} else {
cljs.compiler.emitln.call(null,then_28815);
}

cljs.compiler.emitln.call(null,"break;");

var G__28837 = cljs.core.next.call(null,seq__28756_28807__$1);
var G__28838 = null;
var G__28839 = (0);
var G__28840 = (0);
seq__28756_28774 = G__28837;
chunk__28757_28775 = G__28838;
count__28758_28776 = G__28839;
i__28759_28777 = G__28840;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28841){
var map__28842 = p__28841;
var map__28842__$1 = ((((!((map__28842 == null)))?((((map__28842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28842):map__28842);
var throw$ = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__28842__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28849 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28849,(0),null);
var rstr = cljs.core.nth.call(null,vec__28849,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__28849,fstr,rstr,ret_t,axstr){
return (function (p1__28844_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__28844_SHARP_);
});})(idx,vec__28849,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28852 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__28852),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__28852;
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
return (function (p1__28853_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28853_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28860 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28861 = cljs.core.seq.call(null,vec__28860);
var first__28862 = cljs.core.first.call(null,seq__28861);
var seq__28861__$1 = cljs.core.next.call(null,seq__28861);
var p = first__28862;
var first__28862__$1 = cljs.core.first.call(null,seq__28861__$1);
var seq__28861__$2 = cljs.core.next.call(null,seq__28861__$1);
var ts = first__28862__$1;
var first__28862__$2 = cljs.core.first.call(null,seq__28861__$2);
var seq__28861__$3 = cljs.core.next.call(null,seq__28861__$2);
var n = first__28862__$2;
var xs = seq__28861__$3;
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
var vec__28863 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28864 = cljs.core.seq.call(null,vec__28863);
var first__28865 = cljs.core.first.call(null,seq__28864);
var seq__28864__$1 = cljs.core.next.call(null,seq__28864);
var p = first__28865;
var first__28865__$1 = cljs.core.first.call(null,seq__28864__$1);
var seq__28864__$2 = cljs.core.next.call(null,seq__28864__$1);
var ts = first__28865__$1;
var xs = seq__28864__$2;
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
var args28867 = [];
var len__25826__auto___28902 = arguments.length;
var i__25827__auto___28903 = (0);
while(true){
if((i__25827__auto___28903 < len__25826__auto___28902)){
args28867.push((arguments[i__25827__auto___28903]));

var G__28904 = (i__25827__auto___28903 + (1));
i__25827__auto___28903 = G__28904;
continue;
} else {
}
break;
}

var G__28869 = args28867.length;
switch (G__28869) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28867.length)].join('')));

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
var vec__28891 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__28866_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28866_SHARP_);
} else {
return p1__28866_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__28892 = cljs.core.seq.call(null,vec__28891);
var first__28893 = cljs.core.first.call(null,seq__28892);
var seq__28892__$1 = cljs.core.next.call(null,seq__28892);
var x = first__28893;
var ys = seq__28892__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28894 = cljs.core.seq.call(null,ys);
var chunk__28895 = null;
var count__28896 = (0);
var i__28897 = (0);
while(true){
if((i__28897 < count__28896)){
var next_line = cljs.core._nth.call(null,chunk__28895,i__28897);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__28906 = seq__28894;
var G__28907 = chunk__28895;
var G__28908 = count__28896;
var G__28909 = (i__28897 + (1));
seq__28894 = G__28906;
chunk__28895 = G__28907;
count__28896 = G__28908;
i__28897 = G__28909;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28894);
if(temp__4657__auto__){
var seq__28894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28894__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__28894__$1);
var G__28910 = cljs.core.chunk_rest.call(null,seq__28894__$1);
var G__28911 = c__25562__auto__;
var G__28912 = cljs.core.count.call(null,c__25562__auto__);
var G__28913 = (0);
seq__28894 = G__28910;
chunk__28895 = G__28911;
count__28896 = G__28912;
i__28897 = G__28913;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28894__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__28914 = cljs.core.next.call(null,seq__28894__$1);
var G__28915 = null;
var G__28916 = (0);
var G__28917 = (0);
seq__28894 = G__28914;
chunk__28895 = G__28915;
count__28896 = G__28916;
i__28897 = G__28917;
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

var seq__28898_28918 = cljs.core.seq.call(null,docs__$2);
var chunk__28899_28919 = null;
var count__28900_28920 = (0);
var i__28901_28921 = (0);
while(true){
if((i__28901_28921 < count__28900_28920)){
var e_28922 = cljs.core._nth.call(null,chunk__28899_28919,i__28901_28921);
if(cljs.core.truth_(e_28922)){
print_comment_lines.call(null,e_28922);
} else {
}

var G__28923 = seq__28898_28918;
var G__28924 = chunk__28899_28919;
var G__28925 = count__28900_28920;
var G__28926 = (i__28901_28921 + (1));
seq__28898_28918 = G__28923;
chunk__28899_28919 = G__28924;
count__28900_28920 = G__28925;
i__28901_28921 = G__28926;
continue;
} else {
var temp__4657__auto___28927 = cljs.core.seq.call(null,seq__28898_28918);
if(temp__4657__auto___28927){
var seq__28898_28928__$1 = temp__4657__auto___28927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28898_28928__$1)){
var c__25562__auto___28929 = cljs.core.chunk_first.call(null,seq__28898_28928__$1);
var G__28930 = cljs.core.chunk_rest.call(null,seq__28898_28928__$1);
var G__28931 = c__25562__auto___28929;
var G__28932 = cljs.core.count.call(null,c__25562__auto___28929);
var G__28933 = (0);
seq__28898_28918 = G__28930;
chunk__28899_28919 = G__28931;
count__28900_28920 = G__28932;
i__28901_28921 = G__28933;
continue;
} else {
var e_28934 = cljs.core.first.call(null,seq__28898_28928__$1);
if(cljs.core.truth_(e_28934)){
print_comment_lines.call(null,e_28934);
} else {
}

var G__28935 = cljs.core.next.call(null,seq__28898_28928__$1);
var G__28936 = null;
var G__28937 = (0);
var G__28938 = (0);
seq__28898_28918 = G__28935;
chunk__28899_28919 = G__28936;
count__28900_28920 = G__28937;
i__28901_28921 = G__28938;
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
return (function (p1__28940_SHARP_){
return goog.string.startsWith(p1__28940_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28941){
var map__28942 = p__28941;
var map__28942__$1 = ((((!((map__28942 == null)))?((((map__28942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28942):map__28942);
var name = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28944){
var map__28965 = p__28944;
var map__28965__$1 = ((((!((map__28965 == null)))?((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28965):map__28965);
var name = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28967_28985 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28968_28986 = null;
var count__28969_28987 = (0);
var i__28970_28988 = (0);
while(true){
if((i__28970_28988 < count__28969_28987)){
var vec__28971_28989 = cljs.core._nth.call(null,chunk__28968_28986,i__28970_28988);
var i_28990 = cljs.core.nth.call(null,vec__28971_28989,(0),null);
var param_28991 = cljs.core.nth.call(null,vec__28971_28989,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28991);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__28992 = seq__28967_28985;
var G__28993 = chunk__28968_28986;
var G__28994 = count__28969_28987;
var G__28995 = (i__28970_28988 + (1));
seq__28967_28985 = G__28992;
chunk__28968_28986 = G__28993;
count__28969_28987 = G__28994;
i__28970_28988 = G__28995;
continue;
} else {
var temp__4657__auto___28996 = cljs.core.seq.call(null,seq__28967_28985);
if(temp__4657__auto___28996){
var seq__28967_28997__$1 = temp__4657__auto___28996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28967_28997__$1)){
var c__25562__auto___28998 = cljs.core.chunk_first.call(null,seq__28967_28997__$1);
var G__28999 = cljs.core.chunk_rest.call(null,seq__28967_28997__$1);
var G__29000 = c__25562__auto___28998;
var G__29001 = cljs.core.count.call(null,c__25562__auto___28998);
var G__29002 = (0);
seq__28967_28985 = G__28999;
chunk__28968_28986 = G__29000;
count__28969_28987 = G__29001;
i__28970_28988 = G__29002;
continue;
} else {
var vec__28974_29003 = cljs.core.first.call(null,seq__28967_28997__$1);
var i_29004 = cljs.core.nth.call(null,vec__28974_29003,(0),null);
var param_29005 = cljs.core.nth.call(null,vec__28974_29003,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29005);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__29006 = cljs.core.next.call(null,seq__28967_28997__$1);
var G__29007 = null;
var G__29008 = (0);
var G__29009 = (0);
seq__28967_28985 = G__29006;
chunk__28968_28986 = G__29007;
count__28969_28987 = G__29008;
i__28970_28988 = G__29009;
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

var seq__28977_29010 = cljs.core.seq.call(null,params);
var chunk__28978_29011 = null;
var count__28979_29012 = (0);
var i__28980_29013 = (0);
while(true){
if((i__28980_29013 < count__28979_29012)){
var param_29014 = cljs.core._nth.call(null,chunk__28978_29011,i__28980_29013);
cljs.compiler.emit.call(null,param_29014);

if(cljs.core._EQ_.call(null,param_29014,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29015 = seq__28977_29010;
var G__29016 = chunk__28978_29011;
var G__29017 = count__28979_29012;
var G__29018 = (i__28980_29013 + (1));
seq__28977_29010 = G__29015;
chunk__28978_29011 = G__29016;
count__28979_29012 = G__29017;
i__28980_29013 = G__29018;
continue;
} else {
var temp__4657__auto___29019 = cljs.core.seq.call(null,seq__28977_29010);
if(temp__4657__auto___29019){
var seq__28977_29020__$1 = temp__4657__auto___29019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28977_29020__$1)){
var c__25562__auto___29021 = cljs.core.chunk_first.call(null,seq__28977_29020__$1);
var G__29022 = cljs.core.chunk_rest.call(null,seq__28977_29020__$1);
var G__29023 = c__25562__auto___29021;
var G__29024 = cljs.core.count.call(null,c__25562__auto___29021);
var G__29025 = (0);
seq__28977_29010 = G__29022;
chunk__28978_29011 = G__29023;
count__28979_29012 = G__29024;
i__28980_29013 = G__29025;
continue;
} else {
var param_29026 = cljs.core.first.call(null,seq__28977_29020__$1);
cljs.compiler.emit.call(null,param_29026);

if(cljs.core._EQ_.call(null,param_29026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29027 = cljs.core.next.call(null,seq__28977_29020__$1);
var G__29028 = null;
var G__29029 = (0);
var G__29030 = (0);
seq__28977_29010 = G__29027;
chunk__28978_29011 = G__29028;
count__28979_29012 = G__29029;
i__28980_29013 = G__29030;
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

var seq__28981_29031 = cljs.core.seq.call(null,params);
var chunk__28982_29032 = null;
var count__28983_29033 = (0);
var i__28984_29034 = (0);
while(true){
if((i__28984_29034 < count__28983_29033)){
var param_29035 = cljs.core._nth.call(null,chunk__28982_29032,i__28984_29034);
cljs.compiler.emit.call(null,param_29035);

if(cljs.core._EQ_.call(null,param_29035,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29036 = seq__28981_29031;
var G__29037 = chunk__28982_29032;
var G__29038 = count__28983_29033;
var G__29039 = (i__28984_29034 + (1));
seq__28981_29031 = G__29036;
chunk__28982_29032 = G__29037;
count__28983_29033 = G__29038;
i__28984_29034 = G__29039;
continue;
} else {
var temp__4657__auto___29040 = cljs.core.seq.call(null,seq__28981_29031);
if(temp__4657__auto___29040){
var seq__28981_29041__$1 = temp__4657__auto___29040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28981_29041__$1)){
var c__25562__auto___29042 = cljs.core.chunk_first.call(null,seq__28981_29041__$1);
var G__29043 = cljs.core.chunk_rest.call(null,seq__28981_29041__$1);
var G__29044 = c__25562__auto___29042;
var G__29045 = cljs.core.count.call(null,c__25562__auto___29042);
var G__29046 = (0);
seq__28981_29031 = G__29043;
chunk__28982_29032 = G__29044;
count__28983_29033 = G__29045;
i__28984_29034 = G__29046;
continue;
} else {
var param_29047 = cljs.core.first.call(null,seq__28981_29041__$1);
cljs.compiler.emit.call(null,param_29047);

if(cljs.core._EQ_.call(null,param_29047,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29048 = cljs.core.next.call(null,seq__28981_29041__$1);
var G__29049 = null;
var G__29050 = (0);
var G__29051 = (0);
seq__28981_29031 = G__29048;
chunk__28982_29032 = G__29049;
count__28983_29033 = G__29050;
i__28984_29034 = G__29051;
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
var seq__29056 = cljs.core.seq.call(null,params);
var chunk__29057 = null;
var count__29058 = (0);
var i__29059 = (0);
while(true){
if((i__29059 < count__29058)){
var param = cljs.core._nth.call(null,chunk__29057,i__29059);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29060 = seq__29056;
var G__29061 = chunk__29057;
var G__29062 = count__29058;
var G__29063 = (i__29059 + (1));
seq__29056 = G__29060;
chunk__29057 = G__29061;
count__29058 = G__29062;
i__29059 = G__29063;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29056);
if(temp__4657__auto__){
var seq__29056__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29056__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__29056__$1);
var G__29064 = cljs.core.chunk_rest.call(null,seq__29056__$1);
var G__29065 = c__25562__auto__;
var G__29066 = cljs.core.count.call(null,c__25562__auto__);
var G__29067 = (0);
seq__29056 = G__29064;
chunk__29057 = G__29065;
count__29058 = G__29066;
i__29059 = G__29067;
continue;
} else {
var param = cljs.core.first.call(null,seq__29056__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29068 = cljs.core.next.call(null,seq__29056__$1);
var G__29069 = null;
var G__29070 = (0);
var G__29071 = (0);
seq__29056 = G__29068;
chunk__29057 = G__29069;
count__29058 = G__29070;
i__29059 = G__29071;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29072){
var map__29075 = p__29072;
var map__29075__$1 = ((((!((map__29075 == null)))?((((map__29075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);
var type = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29077){
var map__29088 = p__29077;
var map__29088__$1 = ((((!((map__29088 == null)))?((((map__29088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var f = map__29088__$1;
var type = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_29098__$1 = (function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29099 = cljs.compiler.munge.call(null,name_29098__$1);
var delegate_name_29100 = [cljs.core.str(mname_29099),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_29100," = function (");

var seq__29090_29101 = cljs.core.seq.call(null,params);
var chunk__29091_29102 = null;
var count__29092_29103 = (0);
var i__29093_29104 = (0);
while(true){
if((i__29093_29104 < count__29092_29103)){
var param_29105 = cljs.core._nth.call(null,chunk__29091_29102,i__29093_29104);
cljs.compiler.emit.call(null,param_29105);

if(cljs.core._EQ_.call(null,param_29105,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29106 = seq__29090_29101;
var G__29107 = chunk__29091_29102;
var G__29108 = count__29092_29103;
var G__29109 = (i__29093_29104 + (1));
seq__29090_29101 = G__29106;
chunk__29091_29102 = G__29107;
count__29092_29103 = G__29108;
i__29093_29104 = G__29109;
continue;
} else {
var temp__4657__auto___29110 = cljs.core.seq.call(null,seq__29090_29101);
if(temp__4657__auto___29110){
var seq__29090_29111__$1 = temp__4657__auto___29110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29090_29111__$1)){
var c__25562__auto___29112 = cljs.core.chunk_first.call(null,seq__29090_29111__$1);
var G__29113 = cljs.core.chunk_rest.call(null,seq__29090_29111__$1);
var G__29114 = c__25562__auto___29112;
var G__29115 = cljs.core.count.call(null,c__25562__auto___29112);
var G__29116 = (0);
seq__29090_29101 = G__29113;
chunk__29091_29102 = G__29114;
count__29092_29103 = G__29115;
i__29093_29104 = G__29116;
continue;
} else {
var param_29117 = cljs.core.first.call(null,seq__29090_29111__$1);
cljs.compiler.emit.call(null,param_29117);

if(cljs.core._EQ_.call(null,param_29117,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29118 = cljs.core.next.call(null,seq__29090_29111__$1);
var G__29119 = null;
var G__29120 = (0);
var G__29121 = (0);
seq__29090_29101 = G__29118;
chunk__29091_29102 = G__29119;
count__29092_29103 = G__29120;
i__29093_29104 = G__29121;
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

cljs.compiler.emitln.call(null,"var ",mname_29099," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_29122 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_29122,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_29100,".call(this,");

var seq__29094_29123 = cljs.core.seq.call(null,params);
var chunk__29095_29124 = null;
var count__29096_29125 = (0);
var i__29097_29126 = (0);
while(true){
if((i__29097_29126 < count__29096_29125)){
var param_29127 = cljs.core._nth.call(null,chunk__29095_29124,i__29097_29126);
cljs.compiler.emit.call(null,param_29127);

if(cljs.core._EQ_.call(null,param_29127,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29128 = seq__29094_29123;
var G__29129 = chunk__29095_29124;
var G__29130 = count__29096_29125;
var G__29131 = (i__29097_29126 + (1));
seq__29094_29123 = G__29128;
chunk__29095_29124 = G__29129;
count__29096_29125 = G__29130;
i__29097_29126 = G__29131;
continue;
} else {
var temp__4657__auto___29132 = cljs.core.seq.call(null,seq__29094_29123);
if(temp__4657__auto___29132){
var seq__29094_29133__$1 = temp__4657__auto___29132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29094_29133__$1)){
var c__25562__auto___29134 = cljs.core.chunk_first.call(null,seq__29094_29133__$1);
var G__29135 = cljs.core.chunk_rest.call(null,seq__29094_29133__$1);
var G__29136 = c__25562__auto___29134;
var G__29137 = cljs.core.count.call(null,c__25562__auto___29134);
var G__29138 = (0);
seq__29094_29123 = G__29135;
chunk__29095_29124 = G__29136;
count__29096_29125 = G__29137;
i__29097_29126 = G__29138;
continue;
} else {
var param_29139 = cljs.core.first.call(null,seq__29094_29133__$1);
cljs.compiler.emit.call(null,param_29139);

if(cljs.core._EQ_.call(null,param_29139,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29140 = cljs.core.next.call(null,seq__29094_29133__$1);
var G__29141 = null;
var G__29142 = (0);
var G__29143 = (0);
seq__29094_29123 = G__29140;
chunk__29095_29124 = G__29141;
count__29096_29125 = G__29142;
i__29097_29126 = G__29143;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_29099,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_29099,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_29098__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_29099,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_29100,";");

cljs.compiler.emitln.call(null,"return ",mname_29099,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__29147){
var map__29148 = p__29147;
var map__29148__$1 = ((((!((map__29148 == null)))?((((map__29148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29148):map__29148);
var name = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29144_SHARP_){
var and__24739__auto__ = p1__29144_SHARP_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__29144_SHARP_));
} else {
return and__24739__auto__;
}
});})(map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_29183__$1 = (function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29184 = cljs.compiler.munge.call(null,name_29183__$1);
var maxparams_29185 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_29186 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_29183__$1,mname_29184,maxparams_29185,loop_locals,map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_29184),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_29183__$1,mname_29184,maxparams_29185,loop_locals,map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_29187 = cljs.core.sort_by.call(null,((function (name_29183__$1,mname_29184,maxparams_29185,mmap_29186,loop_locals,map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29145_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__29145_SHARP_)));
});})(name_29183__$1,mname_29184,maxparams_29185,mmap_29186,loop_locals,map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_29186));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_29184," = null;");

var seq__29150_29188 = cljs.core.seq.call(null,ms_29187);
var chunk__29151_29189 = null;
var count__29152_29190 = (0);
var i__29153_29191 = (0);
while(true){
if((i__29153_29191 < count__29152_29190)){
var vec__29154_29192 = cljs.core._nth.call(null,chunk__29151_29189,i__29153_29191);
var n_29193 = cljs.core.nth.call(null,vec__29154_29192,(0),null);
var meth_29194 = cljs.core.nth.call(null,vec__29154_29192,(1),null);
cljs.compiler.emits.call(null,"var ",n_29193," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29194))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29194);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29194);
}

cljs.compiler.emitln.call(null,";");

var G__29195 = seq__29150_29188;
var G__29196 = chunk__29151_29189;
var G__29197 = count__29152_29190;
var G__29198 = (i__29153_29191 + (1));
seq__29150_29188 = G__29195;
chunk__29151_29189 = G__29196;
count__29152_29190 = G__29197;
i__29153_29191 = G__29198;
continue;
} else {
var temp__4657__auto___29199 = cljs.core.seq.call(null,seq__29150_29188);
if(temp__4657__auto___29199){
var seq__29150_29200__$1 = temp__4657__auto___29199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29150_29200__$1)){
var c__25562__auto___29201 = cljs.core.chunk_first.call(null,seq__29150_29200__$1);
var G__29202 = cljs.core.chunk_rest.call(null,seq__29150_29200__$1);
var G__29203 = c__25562__auto___29201;
var G__29204 = cljs.core.count.call(null,c__25562__auto___29201);
var G__29205 = (0);
seq__29150_29188 = G__29202;
chunk__29151_29189 = G__29203;
count__29152_29190 = G__29204;
i__29153_29191 = G__29205;
continue;
} else {
var vec__29157_29206 = cljs.core.first.call(null,seq__29150_29200__$1);
var n_29207 = cljs.core.nth.call(null,vec__29157_29206,(0),null);
var meth_29208 = cljs.core.nth.call(null,vec__29157_29206,(1),null);
cljs.compiler.emits.call(null,"var ",n_29207," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29208))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29208);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29208);
}

cljs.compiler.emitln.call(null,";");

var G__29209 = cljs.core.next.call(null,seq__29150_29200__$1);
var G__29210 = null;
var G__29211 = (0);
var G__29212 = (0);
seq__29150_29188 = G__29209;
chunk__29151_29189 = G__29210;
count__29152_29190 = G__29211;
i__29153_29191 = G__29212;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_29184," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_29185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_29185)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_29185));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__29160_29213 = cljs.core.seq.call(null,ms_29187);
var chunk__29161_29214 = null;
var count__29162_29215 = (0);
var i__29163_29216 = (0);
while(true){
if((i__29163_29216 < count__29162_29215)){
var vec__29164_29217 = cljs.core._nth.call(null,chunk__29161_29214,i__29163_29216);
var n_29218 = cljs.core.nth.call(null,vec__29164_29217,(0),null);
var meth_29219 = cljs.core.nth.call(null,vec__29164_29217,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29219))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29220 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29220," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29221 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29220," = new cljs.core.IndexedSeq(",a_29221,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29218,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29185)),(((cljs.core.count.call(null,maxparams_29185) > (1)))?", ":null),restarg_29220,");");
} else {
var pcnt_29222 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29219));
cljs.compiler.emitln.call(null,"case ",pcnt_29222,":");

cljs.compiler.emitln.call(null,"return ",n_29218,".call(this",(((pcnt_29222 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29222,maxparams_29185));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),",")),");");
}

var G__29223 = seq__29160_29213;
var G__29224 = chunk__29161_29214;
var G__29225 = count__29162_29215;
var G__29226 = (i__29163_29216 + (1));
seq__29160_29213 = G__29223;
chunk__29161_29214 = G__29224;
count__29162_29215 = G__29225;
i__29163_29216 = G__29226;
continue;
} else {
var temp__4657__auto___29227 = cljs.core.seq.call(null,seq__29160_29213);
if(temp__4657__auto___29227){
var seq__29160_29228__$1 = temp__4657__auto___29227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29160_29228__$1)){
var c__25562__auto___29229 = cljs.core.chunk_first.call(null,seq__29160_29228__$1);
var G__29230 = cljs.core.chunk_rest.call(null,seq__29160_29228__$1);
var G__29231 = c__25562__auto___29229;
var G__29232 = cljs.core.count.call(null,c__25562__auto___29229);
var G__29233 = (0);
seq__29160_29213 = G__29230;
chunk__29161_29214 = G__29231;
count__29162_29215 = G__29232;
i__29163_29216 = G__29233;
continue;
} else {
var vec__29167_29234 = cljs.core.first.call(null,seq__29160_29228__$1);
var n_29235 = cljs.core.nth.call(null,vec__29167_29234,(0),null);
var meth_29236 = cljs.core.nth.call(null,vec__29167_29234,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29236))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29237 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29237," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29238 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29237," = new cljs.core.IndexedSeq(",a_29238,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29235,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29185)),(((cljs.core.count.call(null,maxparams_29185) > (1)))?", ":null),restarg_29237,");");
} else {
var pcnt_29239 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29236));
cljs.compiler.emitln.call(null,"case ",pcnt_29239,":");

cljs.compiler.emitln.call(null,"return ",n_29235,".call(this",(((pcnt_29239 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29239,maxparams_29185));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),",")),");");
}

var G__29240 = cljs.core.next.call(null,seq__29160_29228__$1);
var G__29241 = null;
var G__29242 = (0);
var G__29243 = (0);
seq__29160_29213 = G__29240;
chunk__29161_29214 = G__29241;
count__29162_29215 = G__29242;
i__29163_29216 = G__29243;
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
cljs.compiler.emitln.call(null,mname_29184,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_29184,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_29183__$1,mname_29184,maxparams_29185,mmap_29186,ms_29187,loop_locals,map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29146_SHARP_){
var vec__29170 = p1__29146_SHARP_;
var n = cljs.core.nth.call(null,vec__29170,(0),null);
var m = cljs.core.nth.call(null,vec__29170,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_29183__$1,mname_29184,maxparams_29185,mmap_29186,ms_29187,loop_locals,map__29148,map__29148__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_29187),".cljs$lang$applyTo;");
} else {
}

var seq__29173_29244 = cljs.core.seq.call(null,ms_29187);
var chunk__29174_29245 = null;
var count__29175_29246 = (0);
var i__29176_29247 = (0);
while(true){
if((i__29176_29247 < count__29175_29246)){
var vec__29177_29248 = cljs.core._nth.call(null,chunk__29174_29245,i__29176_29247);
var n_29249 = cljs.core.nth.call(null,vec__29177_29248,(0),null);
var meth_29250 = cljs.core.nth.call(null,vec__29177_29248,(1),null);
var c_29251 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29250));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29250))){
cljs.compiler.emitln.call(null,mname_29184,".cljs$core$IFn$_invoke$arity$variadic = ",n_29249,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29184,".cljs$core$IFn$_invoke$arity$",c_29251," = ",n_29249,";");
}

var G__29252 = seq__29173_29244;
var G__29253 = chunk__29174_29245;
var G__29254 = count__29175_29246;
var G__29255 = (i__29176_29247 + (1));
seq__29173_29244 = G__29252;
chunk__29174_29245 = G__29253;
count__29175_29246 = G__29254;
i__29176_29247 = G__29255;
continue;
} else {
var temp__4657__auto___29256 = cljs.core.seq.call(null,seq__29173_29244);
if(temp__4657__auto___29256){
var seq__29173_29257__$1 = temp__4657__auto___29256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29173_29257__$1)){
var c__25562__auto___29258 = cljs.core.chunk_first.call(null,seq__29173_29257__$1);
var G__29259 = cljs.core.chunk_rest.call(null,seq__29173_29257__$1);
var G__29260 = c__25562__auto___29258;
var G__29261 = cljs.core.count.call(null,c__25562__auto___29258);
var G__29262 = (0);
seq__29173_29244 = G__29259;
chunk__29174_29245 = G__29260;
count__29175_29246 = G__29261;
i__29176_29247 = G__29262;
continue;
} else {
var vec__29180_29263 = cljs.core.first.call(null,seq__29173_29257__$1);
var n_29264 = cljs.core.nth.call(null,vec__29180_29263,(0),null);
var meth_29265 = cljs.core.nth.call(null,vec__29180_29263,(1),null);
var c_29266 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29265));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29265))){
cljs.compiler.emitln.call(null,mname_29184,".cljs$core$IFn$_invoke$arity$variadic = ",n_29264,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29184,".cljs$core$IFn$_invoke$arity$",c_29266," = ",n_29264,";");
}

var G__29267 = cljs.core.next.call(null,seq__29173_29257__$1);
var G__29268 = null;
var G__29269 = (0);
var G__29270 = (0);
seq__29173_29244 = G__29267;
chunk__29174_29245 = G__29268;
count__29175_29246 = G__29269;
i__29176_29247 = G__29270;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_29184,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29271){
var map__29272 = p__29271;
var map__29272__$1 = ((((!((map__29272 == null)))?((((map__29272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29272):map__29272);
var statements = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29274_29278 = cljs.core.seq.call(null,statements);
var chunk__29275_29279 = null;
var count__29276_29280 = (0);
var i__29277_29281 = (0);
while(true){
if((i__29277_29281 < count__29276_29280)){
var s_29282 = cljs.core._nth.call(null,chunk__29275_29279,i__29277_29281);
cljs.compiler.emitln.call(null,s_29282);

var G__29283 = seq__29274_29278;
var G__29284 = chunk__29275_29279;
var G__29285 = count__29276_29280;
var G__29286 = (i__29277_29281 + (1));
seq__29274_29278 = G__29283;
chunk__29275_29279 = G__29284;
count__29276_29280 = G__29285;
i__29277_29281 = G__29286;
continue;
} else {
var temp__4657__auto___29287 = cljs.core.seq.call(null,seq__29274_29278);
if(temp__4657__auto___29287){
var seq__29274_29288__$1 = temp__4657__auto___29287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29274_29288__$1)){
var c__25562__auto___29289 = cljs.core.chunk_first.call(null,seq__29274_29288__$1);
var G__29290 = cljs.core.chunk_rest.call(null,seq__29274_29288__$1);
var G__29291 = c__25562__auto___29289;
var G__29292 = cljs.core.count.call(null,c__25562__auto___29289);
var G__29293 = (0);
seq__29274_29278 = G__29290;
chunk__29275_29279 = G__29291;
count__29276_29280 = G__29292;
i__29277_29281 = G__29293;
continue;
} else {
var s_29294 = cljs.core.first.call(null,seq__29274_29288__$1);
cljs.compiler.emitln.call(null,s_29294);

var G__29295 = cljs.core.next.call(null,seq__29274_29288__$1);
var G__29296 = null;
var G__29297 = (0);
var G__29298 = (0);
seq__29274_29278 = G__29295;
chunk__29275_29279 = G__29296;
count__29276_29280 = G__29297;
i__29277_29281 = G__29298;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29299){
var map__29300 = p__29299;
var map__29300__$1 = ((((!((map__29300 == null)))?((((map__29300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29300):map__29300);
var env = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29302,is_loop){
var map__29314 = p__29302;
var map__29314__$1 = ((((!((map__29314 == null)))?((((map__29314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29314):map__29314);
var bindings = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_29316_29325 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_29316_29325,context,map__29314,map__29314__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_29316_29325,context,map__29314,map__29314__$1,bindings,expr,env))
,bindings):null));

try{var seq__29317_29326 = cljs.core.seq.call(null,bindings);
var chunk__29318_29327 = null;
var count__29319_29328 = (0);
var i__29320_29329 = (0);
while(true){
if((i__29320_29329 < count__29319_29328)){
var map__29321_29330 = cljs.core._nth.call(null,chunk__29318_29327,i__29320_29329);
var map__29321_29331__$1 = ((((!((map__29321_29330 == null)))?((((map__29321_29330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29321_29330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29321_29330):map__29321_29330);
var binding_29332 = map__29321_29331__$1;
var init_29333 = cljs.core.get.call(null,map__29321_29331__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29332);

cljs.compiler.emitln.call(null," = ",init_29333,";");

var G__29334 = seq__29317_29326;
var G__29335 = chunk__29318_29327;
var G__29336 = count__29319_29328;
var G__29337 = (i__29320_29329 + (1));
seq__29317_29326 = G__29334;
chunk__29318_29327 = G__29335;
count__29319_29328 = G__29336;
i__29320_29329 = G__29337;
continue;
} else {
var temp__4657__auto___29338 = cljs.core.seq.call(null,seq__29317_29326);
if(temp__4657__auto___29338){
var seq__29317_29339__$1 = temp__4657__auto___29338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29317_29339__$1)){
var c__25562__auto___29340 = cljs.core.chunk_first.call(null,seq__29317_29339__$1);
var G__29341 = cljs.core.chunk_rest.call(null,seq__29317_29339__$1);
var G__29342 = c__25562__auto___29340;
var G__29343 = cljs.core.count.call(null,c__25562__auto___29340);
var G__29344 = (0);
seq__29317_29326 = G__29341;
chunk__29318_29327 = G__29342;
count__29319_29328 = G__29343;
i__29320_29329 = G__29344;
continue;
} else {
var map__29323_29345 = cljs.core.first.call(null,seq__29317_29339__$1);
var map__29323_29346__$1 = ((((!((map__29323_29345 == null)))?((((map__29323_29345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29323_29345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323_29345):map__29323_29345);
var binding_29347 = map__29323_29346__$1;
var init_29348 = cljs.core.get.call(null,map__29323_29346__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29347);

cljs.compiler.emitln.call(null," = ",init_29348,";");

var G__29349 = cljs.core.next.call(null,seq__29317_29339__$1);
var G__29350 = null;
var G__29351 = (0);
var G__29352 = (0);
seq__29317_29326 = G__29349;
chunk__29318_29327 = G__29350;
count__29319_29328 = G__29351;
i__29320_29329 = G__29352;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_29316_29325;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__29353){
var map__29354 = p__29353;
var map__29354__$1 = ((((!((map__29354 == null)))?((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354):map__29354);
var frame = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25666__auto___29356 = cljs.core.count.call(null,exprs);
var i_29357 = (0);
while(true){
if((i_29357 < n__25666__auto___29356)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_29357)," = ",exprs.call(null,i_29357),";");

var G__29358 = (i_29357 + (1));
i_29357 = G__29358;
continue;
} else {
}
break;
}

var n__25666__auto___29359 = cljs.core.count.call(null,exprs);
var i_29360 = (0);
while(true){
if((i_29360 < n__25666__auto___29359)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_29360))," = ",temps.call(null,i_29360),";");

var G__29361 = (i_29360 + (1));
i_29360 = G__29361;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__29362){
var map__29363 = p__29362;
var map__29363__$1 = ((((!((map__29363 == null)))?((((map__29363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29363):map__29363);
var bindings = cljs.core.get.call(null,map__29363__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29363__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__29365_29373 = cljs.core.seq.call(null,bindings);
var chunk__29366_29374 = null;
var count__29367_29375 = (0);
var i__29368_29376 = (0);
while(true){
if((i__29368_29376 < count__29367_29375)){
var map__29369_29377 = cljs.core._nth.call(null,chunk__29366_29374,i__29368_29376);
var map__29369_29378__$1 = ((((!((map__29369_29377 == null)))?((((map__29369_29377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29369_29377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29369_29377):map__29369_29377);
var binding_29379 = map__29369_29378__$1;
var init_29380 = cljs.core.get.call(null,map__29369_29378__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29379)," = ",init_29380,";");

var G__29381 = seq__29365_29373;
var G__29382 = chunk__29366_29374;
var G__29383 = count__29367_29375;
var G__29384 = (i__29368_29376 + (1));
seq__29365_29373 = G__29381;
chunk__29366_29374 = G__29382;
count__29367_29375 = G__29383;
i__29368_29376 = G__29384;
continue;
} else {
var temp__4657__auto___29385 = cljs.core.seq.call(null,seq__29365_29373);
if(temp__4657__auto___29385){
var seq__29365_29386__$1 = temp__4657__auto___29385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29365_29386__$1)){
var c__25562__auto___29387 = cljs.core.chunk_first.call(null,seq__29365_29386__$1);
var G__29388 = cljs.core.chunk_rest.call(null,seq__29365_29386__$1);
var G__29389 = c__25562__auto___29387;
var G__29390 = cljs.core.count.call(null,c__25562__auto___29387);
var G__29391 = (0);
seq__29365_29373 = G__29388;
chunk__29366_29374 = G__29389;
count__29367_29375 = G__29390;
i__29368_29376 = G__29391;
continue;
} else {
var map__29371_29392 = cljs.core.first.call(null,seq__29365_29386__$1);
var map__29371_29393__$1 = ((((!((map__29371_29392 == null)))?((((map__29371_29392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29371_29392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29371_29392):map__29371_29392);
var binding_29394 = map__29371_29393__$1;
var init_29395 = cljs.core.get.call(null,map__29371_29393__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29394)," = ",init_29395,";");

var G__29396 = cljs.core.next.call(null,seq__29365_29386__$1);
var G__29397 = null;
var G__29398 = (0);
var G__29399 = (0);
seq__29365_29373 = G__29396;
chunk__29366_29374 = G__29397;
count__29367_29375 = G__29398;
i__29368_29376 = G__29399;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__29402){
var map__29403 = p__29402;
var map__29403__$1 = ((((!((map__29403 == null)))?((((map__29403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29403):map__29403);
var expr = map__29403__$1;
var f = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__29405 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env){
return (function (p1__29400_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29400_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env){
return (function (p1__29401_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29401_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29403,map__29403__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__29405,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__29405,(1),null);
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29408 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_29408,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29409 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_29409,args)),(((mfa_29409 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_29409,args)),"], 0))");
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
var fprop_29410 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_29410," ? ",f__$1,fprop_29410,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__29411){
var map__29412 = p__29411;
var map__29412__$1 = ((((!((map__29412 == null)))?((((map__29412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29412):map__29412);
var ctor = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__29414){
var map__29415 = p__29414;
var map__29415__$1 = ((((!((map__29415 == null)))?((((map__29415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29415):map__29415);
var target = cljs.core.get.call(null,map__29415__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__29415__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__29415__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
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

var seq__29421_29425 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__29422_29426 = null;
var count__29423_29427 = (0);
var i__29424_29428 = (0);
while(true){
if((i__29424_29428 < count__29423_29427)){
var lib_29429 = cljs.core._nth.call(null,chunk__29422_29426,i__29424_29428);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29429),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29429),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29429),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29429),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29429),"');");

}
}

var G__29430 = seq__29421_29425;
var G__29431 = chunk__29422_29426;
var G__29432 = count__29423_29427;
var G__29433 = (i__29424_29428 + (1));
seq__29421_29425 = G__29430;
chunk__29422_29426 = G__29431;
count__29423_29427 = G__29432;
i__29424_29428 = G__29433;
continue;
} else {
var temp__4657__auto___29434 = cljs.core.seq.call(null,seq__29421_29425);
if(temp__4657__auto___29434){
var seq__29421_29435__$1 = temp__4657__auto___29434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29421_29435__$1)){
var c__25562__auto___29436 = cljs.core.chunk_first.call(null,seq__29421_29435__$1);
var G__29437 = cljs.core.chunk_rest.call(null,seq__29421_29435__$1);
var G__29438 = c__25562__auto___29436;
var G__29439 = cljs.core.count.call(null,c__25562__auto___29436);
var G__29440 = (0);
seq__29421_29425 = G__29437;
chunk__29422_29426 = G__29438;
count__29423_29427 = G__29439;
i__29424_29428 = G__29440;
continue;
} else {
var lib_29441 = cljs.core.first.call(null,seq__29421_29435__$1);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29441),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29441),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29441),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29441),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29441),"');");

}
}

var G__29442 = cljs.core.next.call(null,seq__29421_29435__$1);
var G__29443 = null;
var G__29444 = (0);
var G__29445 = (0);
seq__29421_29425 = G__29442;
chunk__29422_29426 = G__29443;
count__29423_29427 = G__29444;
i__29424_29428 = G__29445;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__29446){
var map__29447 = p__29446;
var map__29447__$1 = ((((!((map__29447 == null)))?((((map__29447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29447):map__29447);
var name = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__29449){
var map__29450 = p__29449;
var map__29450__$1 = ((((!((map__29450 == null)))?((((map__29450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29450):map__29450);
var t = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29450__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29452_29470 = cljs.core.seq.call(null,protocols);
var chunk__29453_29471 = null;
var count__29454_29472 = (0);
var i__29455_29473 = (0);
while(true){
if((i__29455_29473 < count__29454_29472)){
var protocol_29474 = cljs.core._nth.call(null,chunk__29453_29471,i__29455_29473);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29474)].join('')),"}");

var G__29475 = seq__29452_29470;
var G__29476 = chunk__29453_29471;
var G__29477 = count__29454_29472;
var G__29478 = (i__29455_29473 + (1));
seq__29452_29470 = G__29475;
chunk__29453_29471 = G__29476;
count__29454_29472 = G__29477;
i__29455_29473 = G__29478;
continue;
} else {
var temp__4657__auto___29479 = cljs.core.seq.call(null,seq__29452_29470);
if(temp__4657__auto___29479){
var seq__29452_29480__$1 = temp__4657__auto___29479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29452_29480__$1)){
var c__25562__auto___29481 = cljs.core.chunk_first.call(null,seq__29452_29480__$1);
var G__29482 = cljs.core.chunk_rest.call(null,seq__29452_29480__$1);
var G__29483 = c__25562__auto___29481;
var G__29484 = cljs.core.count.call(null,c__25562__auto___29481);
var G__29485 = (0);
seq__29452_29470 = G__29482;
chunk__29453_29471 = G__29483;
count__29454_29472 = G__29484;
i__29455_29473 = G__29485;
continue;
} else {
var protocol_29486 = cljs.core.first.call(null,seq__29452_29480__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29486)].join('')),"}");

var G__29487 = cljs.core.next.call(null,seq__29452_29480__$1);
var G__29488 = null;
var G__29489 = (0);
var G__29490 = (0);
seq__29452_29470 = G__29487;
chunk__29453_29471 = G__29488;
count__29454_29472 = G__29489;
i__29455_29473 = G__29490;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29456_29491 = cljs.core.seq.call(null,fields__$1);
var chunk__29457_29492 = null;
var count__29458_29493 = (0);
var i__29459_29494 = (0);
while(true){
if((i__29459_29494 < count__29458_29493)){
var fld_29495 = cljs.core._nth.call(null,chunk__29457_29492,i__29459_29494);
cljs.compiler.emitln.call(null,"this.",fld_29495," = ",fld_29495,";");

var G__29496 = seq__29456_29491;
var G__29497 = chunk__29457_29492;
var G__29498 = count__29458_29493;
var G__29499 = (i__29459_29494 + (1));
seq__29456_29491 = G__29496;
chunk__29457_29492 = G__29497;
count__29458_29493 = G__29498;
i__29459_29494 = G__29499;
continue;
} else {
var temp__4657__auto___29500 = cljs.core.seq.call(null,seq__29456_29491);
if(temp__4657__auto___29500){
var seq__29456_29501__$1 = temp__4657__auto___29500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29456_29501__$1)){
var c__25562__auto___29502 = cljs.core.chunk_first.call(null,seq__29456_29501__$1);
var G__29503 = cljs.core.chunk_rest.call(null,seq__29456_29501__$1);
var G__29504 = c__25562__auto___29502;
var G__29505 = cljs.core.count.call(null,c__25562__auto___29502);
var G__29506 = (0);
seq__29456_29491 = G__29503;
chunk__29457_29492 = G__29504;
count__29458_29493 = G__29505;
i__29459_29494 = G__29506;
continue;
} else {
var fld_29507 = cljs.core.first.call(null,seq__29456_29501__$1);
cljs.compiler.emitln.call(null,"this.",fld_29507," = ",fld_29507,";");

var G__29508 = cljs.core.next.call(null,seq__29456_29501__$1);
var G__29509 = null;
var G__29510 = (0);
var G__29511 = (0);
seq__29456_29491 = G__29508;
chunk__29457_29492 = G__29509;
count__29458_29493 = G__29510;
i__29459_29494 = G__29511;
continue;
}
} else {
}
}
break;
}

var seq__29460_29512 = cljs.core.seq.call(null,pmasks);
var chunk__29461_29513 = null;
var count__29462_29514 = (0);
var i__29463_29515 = (0);
while(true){
if((i__29463_29515 < count__29462_29514)){
var vec__29464_29516 = cljs.core._nth.call(null,chunk__29461_29513,i__29463_29515);
var pno_29517 = cljs.core.nth.call(null,vec__29464_29516,(0),null);
var pmask_29518 = cljs.core.nth.call(null,vec__29464_29516,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29517,"$ = ",pmask_29518,";");

var G__29519 = seq__29460_29512;
var G__29520 = chunk__29461_29513;
var G__29521 = count__29462_29514;
var G__29522 = (i__29463_29515 + (1));
seq__29460_29512 = G__29519;
chunk__29461_29513 = G__29520;
count__29462_29514 = G__29521;
i__29463_29515 = G__29522;
continue;
} else {
var temp__4657__auto___29523 = cljs.core.seq.call(null,seq__29460_29512);
if(temp__4657__auto___29523){
var seq__29460_29524__$1 = temp__4657__auto___29523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29460_29524__$1)){
var c__25562__auto___29525 = cljs.core.chunk_first.call(null,seq__29460_29524__$1);
var G__29526 = cljs.core.chunk_rest.call(null,seq__29460_29524__$1);
var G__29527 = c__25562__auto___29525;
var G__29528 = cljs.core.count.call(null,c__25562__auto___29525);
var G__29529 = (0);
seq__29460_29512 = G__29526;
chunk__29461_29513 = G__29527;
count__29462_29514 = G__29528;
i__29463_29515 = G__29529;
continue;
} else {
var vec__29467_29530 = cljs.core.first.call(null,seq__29460_29524__$1);
var pno_29531 = cljs.core.nth.call(null,vec__29467_29530,(0),null);
var pmask_29532 = cljs.core.nth.call(null,vec__29467_29530,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29531,"$ = ",pmask_29532,";");

var G__29533 = cljs.core.next.call(null,seq__29460_29524__$1);
var G__29534 = null;
var G__29535 = (0);
var G__29536 = (0);
seq__29460_29512 = G__29533;
chunk__29461_29513 = G__29534;
count__29462_29514 = G__29535;
i__29463_29515 = G__29536;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__29537){
var map__29538 = p__29537;
var map__29538__$1 = ((((!((map__29538 == null)))?((((map__29538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29538):map__29538);
var t = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29540_29558 = cljs.core.seq.call(null,protocols);
var chunk__29541_29559 = null;
var count__29542_29560 = (0);
var i__29543_29561 = (0);
while(true){
if((i__29543_29561 < count__29542_29560)){
var protocol_29562 = cljs.core._nth.call(null,chunk__29541_29559,i__29543_29561);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29562)].join('')),"}");

var G__29563 = seq__29540_29558;
var G__29564 = chunk__29541_29559;
var G__29565 = count__29542_29560;
var G__29566 = (i__29543_29561 + (1));
seq__29540_29558 = G__29563;
chunk__29541_29559 = G__29564;
count__29542_29560 = G__29565;
i__29543_29561 = G__29566;
continue;
} else {
var temp__4657__auto___29567 = cljs.core.seq.call(null,seq__29540_29558);
if(temp__4657__auto___29567){
var seq__29540_29568__$1 = temp__4657__auto___29567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29540_29568__$1)){
var c__25562__auto___29569 = cljs.core.chunk_first.call(null,seq__29540_29568__$1);
var G__29570 = cljs.core.chunk_rest.call(null,seq__29540_29568__$1);
var G__29571 = c__25562__auto___29569;
var G__29572 = cljs.core.count.call(null,c__25562__auto___29569);
var G__29573 = (0);
seq__29540_29558 = G__29570;
chunk__29541_29559 = G__29571;
count__29542_29560 = G__29572;
i__29543_29561 = G__29573;
continue;
} else {
var protocol_29574 = cljs.core.first.call(null,seq__29540_29568__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29574)].join('')),"}");

var G__29575 = cljs.core.next.call(null,seq__29540_29568__$1);
var G__29576 = null;
var G__29577 = (0);
var G__29578 = (0);
seq__29540_29558 = G__29575;
chunk__29541_29559 = G__29576;
count__29542_29560 = G__29577;
i__29543_29561 = G__29578;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29544_29579 = cljs.core.seq.call(null,fields__$1);
var chunk__29545_29580 = null;
var count__29546_29581 = (0);
var i__29547_29582 = (0);
while(true){
if((i__29547_29582 < count__29546_29581)){
var fld_29583 = cljs.core._nth.call(null,chunk__29545_29580,i__29547_29582);
cljs.compiler.emitln.call(null,"this.",fld_29583," = ",fld_29583,";");

var G__29584 = seq__29544_29579;
var G__29585 = chunk__29545_29580;
var G__29586 = count__29546_29581;
var G__29587 = (i__29547_29582 + (1));
seq__29544_29579 = G__29584;
chunk__29545_29580 = G__29585;
count__29546_29581 = G__29586;
i__29547_29582 = G__29587;
continue;
} else {
var temp__4657__auto___29588 = cljs.core.seq.call(null,seq__29544_29579);
if(temp__4657__auto___29588){
var seq__29544_29589__$1 = temp__4657__auto___29588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29544_29589__$1)){
var c__25562__auto___29590 = cljs.core.chunk_first.call(null,seq__29544_29589__$1);
var G__29591 = cljs.core.chunk_rest.call(null,seq__29544_29589__$1);
var G__29592 = c__25562__auto___29590;
var G__29593 = cljs.core.count.call(null,c__25562__auto___29590);
var G__29594 = (0);
seq__29544_29579 = G__29591;
chunk__29545_29580 = G__29592;
count__29546_29581 = G__29593;
i__29547_29582 = G__29594;
continue;
} else {
var fld_29595 = cljs.core.first.call(null,seq__29544_29589__$1);
cljs.compiler.emitln.call(null,"this.",fld_29595," = ",fld_29595,";");

var G__29596 = cljs.core.next.call(null,seq__29544_29589__$1);
var G__29597 = null;
var G__29598 = (0);
var G__29599 = (0);
seq__29544_29579 = G__29596;
chunk__29545_29580 = G__29597;
count__29546_29581 = G__29598;
i__29547_29582 = G__29599;
continue;
}
} else {
}
}
break;
}

var seq__29548_29600 = cljs.core.seq.call(null,pmasks);
var chunk__29549_29601 = null;
var count__29550_29602 = (0);
var i__29551_29603 = (0);
while(true){
if((i__29551_29603 < count__29550_29602)){
var vec__29552_29604 = cljs.core._nth.call(null,chunk__29549_29601,i__29551_29603);
var pno_29605 = cljs.core.nth.call(null,vec__29552_29604,(0),null);
var pmask_29606 = cljs.core.nth.call(null,vec__29552_29604,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29605,"$ = ",pmask_29606,";");

var G__29607 = seq__29548_29600;
var G__29608 = chunk__29549_29601;
var G__29609 = count__29550_29602;
var G__29610 = (i__29551_29603 + (1));
seq__29548_29600 = G__29607;
chunk__29549_29601 = G__29608;
count__29550_29602 = G__29609;
i__29551_29603 = G__29610;
continue;
} else {
var temp__4657__auto___29611 = cljs.core.seq.call(null,seq__29548_29600);
if(temp__4657__auto___29611){
var seq__29548_29612__$1 = temp__4657__auto___29611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29548_29612__$1)){
var c__25562__auto___29613 = cljs.core.chunk_first.call(null,seq__29548_29612__$1);
var G__29614 = cljs.core.chunk_rest.call(null,seq__29548_29612__$1);
var G__29615 = c__25562__auto___29613;
var G__29616 = cljs.core.count.call(null,c__25562__auto___29613);
var G__29617 = (0);
seq__29548_29600 = G__29614;
chunk__29549_29601 = G__29615;
count__29550_29602 = G__29616;
i__29551_29603 = G__29617;
continue;
} else {
var vec__29555_29618 = cljs.core.first.call(null,seq__29548_29612__$1);
var pno_29619 = cljs.core.nth.call(null,vec__29555_29618,(0),null);
var pmask_29620 = cljs.core.nth.call(null,vec__29555_29618,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29619,"$ = ",pmask_29620,";");

var G__29621 = cljs.core.next.call(null,seq__29548_29612__$1);
var G__29622 = null;
var G__29623 = (0);
var G__29624 = (0);
seq__29548_29600 = G__29621;
chunk__29549_29601 = G__29622;
count__29550_29602 = G__29623;
i__29551_29603 = G__29624;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__29625){
var map__29626 = p__29625;
var map__29626__$1 = ((((!((map__29626 == null)))?((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var target = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29628){
var map__29629 = p__29628;
var map__29629__$1 = ((((!((map__29629 == null)))?((((map__29629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29629):map__29629);
var op = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24739__auto__ = code;
if(cljs.core.truth_(and__24739__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24739__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__28516__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28516__auto__))){
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
var seq__29643 = cljs.core.seq.call(null,table);
var chunk__29644 = null;
var count__29645 = (0);
var i__29646 = (0);
while(true){
if((i__29646 < count__29645)){
var vec__29647 = cljs.core._nth.call(null,chunk__29644,i__29646);
var sym = cljs.core.nth.call(null,vec__29647,(0),null);
var value = cljs.core.nth.call(null,vec__29647,(1),null);
var ns_29653 = cljs.core.namespace.call(null,sym);
var name_29654 = cljs.core.name.call(null,sym);
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

var G__29655 = seq__29643;
var G__29656 = chunk__29644;
var G__29657 = count__29645;
var G__29658 = (i__29646 + (1));
seq__29643 = G__29655;
chunk__29644 = G__29656;
count__29645 = G__29657;
i__29646 = G__29658;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29643);
if(temp__4657__auto__){
var seq__29643__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29643__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__29643__$1);
var G__29659 = cljs.core.chunk_rest.call(null,seq__29643__$1);
var G__29660 = c__25562__auto__;
var G__29661 = cljs.core.count.call(null,c__25562__auto__);
var G__29662 = (0);
seq__29643 = G__29659;
chunk__29644 = G__29660;
count__29645 = G__29661;
i__29646 = G__29662;
continue;
} else {
var vec__29650 = cljs.core.first.call(null,seq__29643__$1);
var sym = cljs.core.nth.call(null,vec__29650,(0),null);
var value = cljs.core.nth.call(null,vec__29650,(1),null);
var ns_29663 = cljs.core.namespace.call(null,sym);
var name_29664 = cljs.core.name.call(null,sym);
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

var G__29665 = cljs.core.next.call(null,seq__29643__$1);
var G__29666 = null;
var G__29667 = (0);
var G__29668 = (0);
seq__29643 = G__29665;
chunk__29644 = G__29666;
count__29645 = G__29667;
i__29646 = G__29668;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1478445822418