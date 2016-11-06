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
var map__53728 = s;
var map__53728__$1 = ((((!((map__53728 == null)))?((((map__53728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53728):map__53728);
var name = cljs.core.get.call(null,map__53728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__53728__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__53731 = info;
var map__53732 = G__53731;
var map__53732__$1 = ((((!((map__53732 == null)))?((((map__53732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53732):map__53732);
var shadow = cljs.core.get.call(null,map__53732__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__53731__$1 = G__53731;
while(true){
var d__$2 = d__$1;
var map__53734 = G__53731__$1;
var map__53734__$1 = ((((!((map__53734 == null)))?((((map__53734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53734):map__53734);
var shadow__$1 = cljs.core.get.call(null,map__53734__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__53736 = (d__$2 + (1));
var G__53737 = shadow__$1;
d__$1 = G__53736;
G__53731__$1 = G__53737;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__53738){
var map__53743 = p__53738;
var map__53743__$1 = ((((!((map__53743 == null)))?((((map__53743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53743):map__53743);
var name_var = map__53743__$1;
var name = cljs.core.get.call(null,map__53743__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__53743__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__53747 = info;
var map__53747__$1 = ((((!((map__53747 == null)))?((((map__53747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53747):map__53747);
var ns = cljs.core.get.call(null,map__53747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__53747__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args53750 = [];
var len__25826__auto___53753 = arguments.length;
var i__25827__auto___53754 = (0);
while(true){
if((i__25827__auto___53754 < len__25826__auto___53753)){
args53750.push((arguments[i__25827__auto___53754]));

var G__53756 = (i__25827__auto___53754 + (1));
i__25827__auto___53754 = G__53756;
continue;
} else {
}
break;
}

var G__53752 = args53750.length;
switch (G__53752) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53750.length)].join('')));

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
var G__53765 = cp;
switch (G__53765) {
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
var seq__53771_53775 = cljs.core.seq.call(null,s);
var chunk__53772_53776 = null;
var count__53773_53777 = (0);
var i__53774_53778 = (0);
while(true){
if((i__53774_53778 < count__53773_53777)){
var c_53779 = cljs.core._nth.call(null,chunk__53772_53776,i__53774_53778);
sb.append(cljs.compiler.escape_char.call(null,c_53779));

var G__53780 = seq__53771_53775;
var G__53781 = chunk__53772_53776;
var G__53782 = count__53773_53777;
var G__53783 = (i__53774_53778 + (1));
seq__53771_53775 = G__53780;
chunk__53772_53776 = G__53781;
count__53773_53777 = G__53782;
i__53774_53778 = G__53783;
continue;
} else {
var temp__4657__auto___53784 = cljs.core.seq.call(null,seq__53771_53775);
if(temp__4657__auto___53784){
var seq__53771_53785__$1 = temp__4657__auto___53784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53771_53785__$1)){
var c__25562__auto___53786 = cljs.core.chunk_first.call(null,seq__53771_53785__$1);
var G__53787 = cljs.core.chunk_rest.call(null,seq__53771_53785__$1);
var G__53788 = c__25562__auto___53786;
var G__53789 = cljs.core.count.call(null,c__25562__auto___53786);
var G__53790 = (0);
seq__53771_53775 = G__53787;
chunk__53772_53776 = G__53788;
count__53773_53777 = G__53789;
i__53774_53778 = G__53790;
continue;
} else {
var c_53791 = cljs.core.first.call(null,seq__53771_53785__$1);
sb.append(cljs.compiler.escape_char.call(null,c_53791));

var G__53792 = cljs.core.next.call(null,seq__53771_53785__$1);
var G__53793 = null;
var G__53794 = (0);
var G__53795 = (0);
seq__53771_53775 = G__53792;
chunk__53772_53776 = G__53793;
count__53773_53777 = G__53794;
i__53774_53778 = G__53795;
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
var val__47934__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__53833_53845 = ast;
var map__53833_53846__$1 = ((((!((map__53833_53845 == null)))?((((map__53833_53845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53833_53845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53833_53845):map__53833_53845);
var env_53847 = cljs.core.get.call(null,map__53833_53846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_53847))){
var map__53836_53849 = env_53847;
var map__53836_53850__$1 = ((((!((map__53836_53849 == null)))?((((map__53836_53849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53836_53849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53836_53849):map__53836_53849);
var line_53851 = cljs.core.get.call(null,map__53836_53850__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53852 = cljs.core.get.call(null,map__53836_53850__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__53836_53849,map__53836_53850__$1,line_53851,column_53852,map__53833_53845,map__53833_53846__$1,env_53847,val__47934__auto__){
return (function (m){
var minfo = (function (){var G__53840 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__53840,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__53840;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_53851 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__53836_53849,map__53836_53850__$1,line_53851,column_53852,map__53833_53845,map__53833_53846__$1,env_53847,val__47934__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_53852)?(column_53852 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__53836_53849,map__53836_53850__$1,line_53851,column_53852,map__53833_53845,map__53833_53846__$1,env_53847,val__47934__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__53836_53849,map__53836_53850__$1,line_53851,column_53852,map__53833_53845,map__53833_53846__$1,env_53847,val__47934__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__53836_53849,map__53836_53850__$1,line_53851,column_53852,map__53833_53845,map__53833_53846__$1,env_53847,val__47934__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__53836_53849,map__53836_53850__$1,line_53851,column_53852,map__53833_53845,map__53833_53846__$1,env_53847,val__47934__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__47934__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25833__auto__ = [];
var len__25826__auto___53899 = arguments.length;
var i__25827__auto___53900 = (0);
while(true){
if((i__25827__auto___53900 < len__25826__auto___53899)){
args__25833__auto__.push((arguments[i__25827__auto___53900]));

var G__53901 = (i__25827__auto___53900 + (1));
i__25827__auto___53900 = G__53901;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__53890_53902 = cljs.core.seq.call(null,xs);
var chunk__53891_53903 = null;
var count__53892_53904 = (0);
var i__53893_53905 = (0);
while(true){
if((i__53893_53905 < count__53892_53904)){
var x_53906 = cljs.core._nth.call(null,chunk__53891_53903,i__53893_53905);
if((x_53906 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_53906)){
cljs.compiler.emit.call(null,x_53906);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_53906)){
cljs.core.apply.call(null,cljs.compiler.emits,x_53906);
} else {
if(goog.isFunction(x_53906)){
x_53906.call(null);
} else {
var s_53907 = cljs.core.print_str.call(null,x_53906);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__53890_53902,chunk__53891_53903,count__53892_53904,i__53893_53905,s_53907,x_53906){
return (function (p1__53885_SHARP_){
return (p1__53885_SHARP_ + cljs.core.count.call(null,s_53907));
});})(seq__53890_53902,chunk__53891_53903,count__53892_53904,i__53893_53905,s_53907,x_53906))
);
}

cljs.core.print.call(null,s_53907);

}
}
}
}

var G__53908 = seq__53890_53902;
var G__53909 = chunk__53891_53903;
var G__53910 = count__53892_53904;
var G__53911 = (i__53893_53905 + (1));
seq__53890_53902 = G__53908;
chunk__53891_53903 = G__53909;
count__53892_53904 = G__53910;
i__53893_53905 = G__53911;
continue;
} else {
var temp__4657__auto___53912 = cljs.core.seq.call(null,seq__53890_53902);
if(temp__4657__auto___53912){
var seq__53890_53913__$1 = temp__4657__auto___53912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53890_53913__$1)){
var c__25562__auto___53914 = cljs.core.chunk_first.call(null,seq__53890_53913__$1);
var G__53915 = cljs.core.chunk_rest.call(null,seq__53890_53913__$1);
var G__53916 = c__25562__auto___53914;
var G__53917 = cljs.core.count.call(null,c__25562__auto___53914);
var G__53918 = (0);
seq__53890_53902 = G__53915;
chunk__53891_53903 = G__53916;
count__53892_53904 = G__53917;
i__53893_53905 = G__53918;
continue;
} else {
var x_53919 = cljs.core.first.call(null,seq__53890_53913__$1);
if((x_53919 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_53919)){
cljs.compiler.emit.call(null,x_53919);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_53919)){
cljs.core.apply.call(null,cljs.compiler.emits,x_53919);
} else {
if(goog.isFunction(x_53919)){
x_53919.call(null);
} else {
var s_53920 = cljs.core.print_str.call(null,x_53919);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__53890_53902,chunk__53891_53903,count__53892_53904,i__53893_53905,s_53920,x_53919,seq__53890_53913__$1,temp__4657__auto___53912){
return (function (p1__53885_SHARP_){
return (p1__53885_SHARP_ + cljs.core.count.call(null,s_53920));
});})(seq__53890_53902,chunk__53891_53903,count__53892_53904,i__53893_53905,s_53920,x_53919,seq__53890_53913__$1,temp__4657__auto___53912))
);
}

cljs.core.print.call(null,s_53920);

}
}
}
}

var G__53921 = cljs.core.next.call(null,seq__53890_53913__$1);
var G__53922 = null;
var G__53923 = (0);
var G__53924 = (0);
seq__53890_53902 = G__53921;
chunk__53891_53903 = G__53922;
count__53892_53904 = G__53923;
i__53893_53905 = G__53924;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq53886){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53886));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25833__auto__ = [];
var len__25826__auto___53929 = arguments.length;
var i__25827__auto___53930 = (0);
while(true){
if((i__25827__auto___53930 < len__25826__auto___53929)){
args__25833__auto__.push((arguments[i__25827__auto___53930]));

var G__53931 = (i__25827__auto___53930 + (1));
i__25827__auto___53930 = G__53931;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__53926){
var map__53927 = p__53926;
var map__53927__$1 = ((((!((map__53927 == null)))?((((map__53927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53927):map__53927);
var m = map__53927__$1;
var gen_line = cljs.core.get.call(null,map__53927__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq53925){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53925));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25737__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53936_53938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53937_53939 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53936_53938,_STAR_print_fn_STAR_53937_53939,sb__25737__auto__){
return (function (x__25738__auto__){
return sb__25737__auto__.append(x__25738__auto__);
});})(_STAR_print_newline_STAR_53936_53938,_STAR_print_fn_STAR_53937_53939,sb__25737__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53937_53939;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53936_53938;
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
var vec__53942 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__53942,(0),null);
var flags = cljs.core.nth.call(null,vec__53942,(1),null);
var pattern = cljs.core.nth.call(null,vec__53942,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__53949){
var map__53950 = p__53949;
var map__53950__$1 = ((((!((map__53950 == null)))?((((map__53950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53950):map__53950);
var arg = map__53950__$1;
var info = cljs.core.get.call(null,map__53950__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__53950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__53950__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__53953 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__53953);
} else {
return G__53953;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__53958){
var map__53959 = p__53958;
var map__53959__$1 = ((((!((map__53959 == null)))?((((map__53959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53959):map__53959);
var arg = map__53959__$1;
var env = cljs.core.get.call(null,map__53959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__53959__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__53959__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__53959__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__53961 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__53961__$1 = ((((!((map__53961 == null)))?((((map__53961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53961):map__53961);
var name = cljs.core.get.call(null,map__53961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__53963){
var map__53964 = p__53963;
var map__53964__$1 = ((((!((map__53964 == null)))?((((map__53964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53964):map__53964);
var expr = cljs.core.get.call(null,map__53964__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__53964__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__53964__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__53966_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__53966_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__53967){
var map__53968 = p__53967;
var map__53968__$1 = ((((!((map__53968 == null)))?((((map__53968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53968):map__53968);
var env = cljs.core.get.call(null,map__53968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__53968__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__53968__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__53970){
var map__53971 = p__53970;
var map__53971__$1 = ((((!((map__53971 == null)))?((((map__53971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53971):map__53971);
var items = cljs.core.get.call(null,map__53971__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__53971__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__53973){
var map__53974 = p__53973;
var map__53974__$1 = ((((!((map__53974 == null)))?((((map__53974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53974):map__53974);
var items = cljs.core.get.call(null,map__53974__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__53974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_53976 = cljs.core.count.call(null,items);
if((cnt_53976 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_53976,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__53977_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__53977_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__53978){
var map__53979 = p__53978;
var map__53979__$1 = ((((!((map__53979 == null)))?((((map__53979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53979):map__53979);
var items = cljs.core.get.call(null,map__53979__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__53979__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__53981){
var map__53982 = p__53981;
var map__53982__$1 = ((((!((map__53982 == null)))?((((map__53982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53982):map__53982);
var items = cljs.core.get.call(null,map__53982__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__53982__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__53982__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___54000 = cljs.core.seq.call(null,items);
if(temp__4657__auto___54000){
var items_54001__$1 = temp__4657__auto___54000;
var vec__53984_54002 = items_54001__$1;
var seq__53985_54003 = cljs.core.seq.call(null,vec__53984_54002);
var first__53986_54004 = cljs.core.first.call(null,seq__53985_54003);
var seq__53985_54005__$1 = cljs.core.next.call(null,seq__53985_54003);
var vec__53987_54006 = first__53986_54004;
var k_54007 = cljs.core.nth.call(null,vec__53987_54006,(0),null);
var v_54008 = cljs.core.nth.call(null,vec__53987_54006,(1),null);
var r_54009 = seq__53985_54005__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_54007),"\": ",v_54008);

var seq__53990_54010 = cljs.core.seq.call(null,r_54009);
var chunk__53991_54011 = null;
var count__53992_54012 = (0);
var i__53993_54013 = (0);
while(true){
if((i__53993_54013 < count__53992_54012)){
var vec__53994_54014 = cljs.core._nth.call(null,chunk__53991_54011,i__53993_54013);
var k_54015__$1 = cljs.core.nth.call(null,vec__53994_54014,(0),null);
var v_54016__$1 = cljs.core.nth.call(null,vec__53994_54014,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_54015__$1),"\": ",v_54016__$1);

var G__54017 = seq__53990_54010;
var G__54018 = chunk__53991_54011;
var G__54019 = count__53992_54012;
var G__54020 = (i__53993_54013 + (1));
seq__53990_54010 = G__54017;
chunk__53991_54011 = G__54018;
count__53992_54012 = G__54019;
i__53993_54013 = G__54020;
continue;
} else {
var temp__4657__auto___54021__$1 = cljs.core.seq.call(null,seq__53990_54010);
if(temp__4657__auto___54021__$1){
var seq__53990_54022__$1 = temp__4657__auto___54021__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53990_54022__$1)){
var c__25562__auto___54023 = cljs.core.chunk_first.call(null,seq__53990_54022__$1);
var G__54024 = cljs.core.chunk_rest.call(null,seq__53990_54022__$1);
var G__54025 = c__25562__auto___54023;
var G__54026 = cljs.core.count.call(null,c__25562__auto___54023);
var G__54027 = (0);
seq__53990_54010 = G__54024;
chunk__53991_54011 = G__54025;
count__53992_54012 = G__54026;
i__53993_54013 = G__54027;
continue;
} else {
var vec__53997_54028 = cljs.core.first.call(null,seq__53990_54022__$1);
var k_54029__$1 = cljs.core.nth.call(null,vec__53997_54028,(0),null);
var v_54030__$1 = cljs.core.nth.call(null,vec__53997_54028,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_54029__$1),"\": ",v_54030__$1);

var G__54031 = cljs.core.next.call(null,seq__53990_54022__$1);
var G__54032 = null;
var G__54033 = (0);
var G__54034 = (0);
seq__53990_54010 = G__54031;
chunk__53991_54011 = G__54032;
count__53992_54012 = G__54033;
i__53993_54013 = G__54034;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__54035){
var map__54036 = p__54035;
var map__54036__$1 = ((((!((map__54036 == null)))?((((map__54036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54036):map__54036);
var form = cljs.core.get.call(null,map__54036__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__54036__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__54038){
var map__54041 = p__54038;
var map__54041__$1 = ((((!((map__54041 == null)))?((((map__54041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54041):map__54041);
var op = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__54043){
var map__54046 = p__54043;
var map__54046__$1 = ((((!((map__54046 == null)))?((((map__54046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54046):map__54046);
var op = cljs.core.get.call(null,map__54046__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__54046__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__54048){
var map__54049 = p__54048;
var map__54049__$1 = ((((!((map__54049 == null)))?((((map__54049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54049):map__54049);
var test = cljs.core.get.call(null,map__54049__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__54049__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__54049__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__54049__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__54049__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__54051){
var map__54052 = p__54051;
var map__54052__$1 = ((((!((map__54052 == null)))?((((map__54052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54052):map__54052);
var v = cljs.core.get.call(null,map__54052__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__54052__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__54052__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__54052__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__54052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__54054_54072 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__54055_54073 = null;
var count__54056_54074 = (0);
var i__54057_54075 = (0);
while(true){
if((i__54057_54075 < count__54056_54074)){
var vec__54058_54076 = cljs.core._nth.call(null,chunk__54055_54073,i__54057_54075);
var ts_54077 = cljs.core.nth.call(null,vec__54058_54076,(0),null);
var then_54078 = cljs.core.nth.call(null,vec__54058_54076,(1),null);
var seq__54061_54079 = cljs.core.seq.call(null,ts_54077);
var chunk__54062_54080 = null;
var count__54063_54081 = (0);
var i__54064_54082 = (0);
while(true){
if((i__54064_54082 < count__54063_54081)){
var test_54083 = cljs.core._nth.call(null,chunk__54062_54080,i__54064_54082);
cljs.compiler.emitln.call(null,"case ",test_54083,":");

var G__54084 = seq__54061_54079;
var G__54085 = chunk__54062_54080;
var G__54086 = count__54063_54081;
var G__54087 = (i__54064_54082 + (1));
seq__54061_54079 = G__54084;
chunk__54062_54080 = G__54085;
count__54063_54081 = G__54086;
i__54064_54082 = G__54087;
continue;
} else {
var temp__4657__auto___54088 = cljs.core.seq.call(null,seq__54061_54079);
if(temp__4657__auto___54088){
var seq__54061_54089__$1 = temp__4657__auto___54088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54061_54089__$1)){
var c__25562__auto___54090 = cljs.core.chunk_first.call(null,seq__54061_54089__$1);
var G__54091 = cljs.core.chunk_rest.call(null,seq__54061_54089__$1);
var G__54092 = c__25562__auto___54090;
var G__54093 = cljs.core.count.call(null,c__25562__auto___54090);
var G__54094 = (0);
seq__54061_54079 = G__54091;
chunk__54062_54080 = G__54092;
count__54063_54081 = G__54093;
i__54064_54082 = G__54094;
continue;
} else {
var test_54095 = cljs.core.first.call(null,seq__54061_54089__$1);
cljs.compiler.emitln.call(null,"case ",test_54095,":");

var G__54096 = cljs.core.next.call(null,seq__54061_54089__$1);
var G__54097 = null;
var G__54098 = (0);
var G__54099 = (0);
seq__54061_54079 = G__54096;
chunk__54062_54080 = G__54097;
count__54063_54081 = G__54098;
i__54064_54082 = G__54099;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_54078);
} else {
cljs.compiler.emitln.call(null,then_54078);
}

cljs.compiler.emitln.call(null,"break;");

var G__54100 = seq__54054_54072;
var G__54101 = chunk__54055_54073;
var G__54102 = count__54056_54074;
var G__54103 = (i__54057_54075 + (1));
seq__54054_54072 = G__54100;
chunk__54055_54073 = G__54101;
count__54056_54074 = G__54102;
i__54057_54075 = G__54103;
continue;
} else {
var temp__4657__auto___54104 = cljs.core.seq.call(null,seq__54054_54072);
if(temp__4657__auto___54104){
var seq__54054_54105__$1 = temp__4657__auto___54104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54054_54105__$1)){
var c__25562__auto___54106 = cljs.core.chunk_first.call(null,seq__54054_54105__$1);
var G__54107 = cljs.core.chunk_rest.call(null,seq__54054_54105__$1);
var G__54108 = c__25562__auto___54106;
var G__54109 = cljs.core.count.call(null,c__25562__auto___54106);
var G__54110 = (0);
seq__54054_54072 = G__54107;
chunk__54055_54073 = G__54108;
count__54056_54074 = G__54109;
i__54057_54075 = G__54110;
continue;
} else {
var vec__54065_54111 = cljs.core.first.call(null,seq__54054_54105__$1);
var ts_54112 = cljs.core.nth.call(null,vec__54065_54111,(0),null);
var then_54113 = cljs.core.nth.call(null,vec__54065_54111,(1),null);
var seq__54068_54114 = cljs.core.seq.call(null,ts_54112);
var chunk__54069_54115 = null;
var count__54070_54116 = (0);
var i__54071_54117 = (0);
while(true){
if((i__54071_54117 < count__54070_54116)){
var test_54118 = cljs.core._nth.call(null,chunk__54069_54115,i__54071_54117);
cljs.compiler.emitln.call(null,"case ",test_54118,":");

var G__54119 = seq__54068_54114;
var G__54120 = chunk__54069_54115;
var G__54121 = count__54070_54116;
var G__54122 = (i__54071_54117 + (1));
seq__54068_54114 = G__54119;
chunk__54069_54115 = G__54120;
count__54070_54116 = G__54121;
i__54071_54117 = G__54122;
continue;
} else {
var temp__4657__auto___54123__$1 = cljs.core.seq.call(null,seq__54068_54114);
if(temp__4657__auto___54123__$1){
var seq__54068_54124__$1 = temp__4657__auto___54123__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54068_54124__$1)){
var c__25562__auto___54125 = cljs.core.chunk_first.call(null,seq__54068_54124__$1);
var G__54126 = cljs.core.chunk_rest.call(null,seq__54068_54124__$1);
var G__54127 = c__25562__auto___54125;
var G__54128 = cljs.core.count.call(null,c__25562__auto___54125);
var G__54129 = (0);
seq__54068_54114 = G__54126;
chunk__54069_54115 = G__54127;
count__54070_54116 = G__54128;
i__54071_54117 = G__54129;
continue;
} else {
var test_54130 = cljs.core.first.call(null,seq__54068_54124__$1);
cljs.compiler.emitln.call(null,"case ",test_54130,":");

var G__54131 = cljs.core.next.call(null,seq__54068_54124__$1);
var G__54132 = null;
var G__54133 = (0);
var G__54134 = (0);
seq__54068_54114 = G__54131;
chunk__54069_54115 = G__54132;
count__54070_54116 = G__54133;
i__54071_54117 = G__54134;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_54113);
} else {
cljs.compiler.emitln.call(null,then_54113);
}

cljs.compiler.emitln.call(null,"break;");

var G__54135 = cljs.core.next.call(null,seq__54054_54105__$1);
var G__54136 = null;
var G__54137 = (0);
var G__54138 = (0);
seq__54054_54072 = G__54135;
chunk__54055_54073 = G__54136;
count__54056_54074 = G__54137;
i__54057_54075 = G__54138;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__54139){
var map__54140 = p__54139;
var map__54140__$1 = ((((!((map__54140 == null)))?((((map__54140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54140):map__54140);
var throw$ = cljs.core.get.call(null,map__54140__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__54140__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__54147 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__54147,(0),null);
var rstr = cljs.core.nth.call(null,vec__54147,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__54147,fstr,rstr,ret_t,axstr){
return (function (p1__54142_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__54142_SHARP_);
});})(idx,vec__54147,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__54150 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__54150),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__54150;
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
return (function (p1__54151_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__54151_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__54158 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__54159 = cljs.core.seq.call(null,vec__54158);
var first__54160 = cljs.core.first.call(null,seq__54159);
var seq__54159__$1 = cljs.core.next.call(null,seq__54159);
var p = first__54160;
var first__54160__$1 = cljs.core.first.call(null,seq__54159__$1);
var seq__54159__$2 = cljs.core.next.call(null,seq__54159__$1);
var ts = first__54160__$1;
var first__54160__$2 = cljs.core.first.call(null,seq__54159__$2);
var seq__54159__$3 = cljs.core.next.call(null,seq__54159__$2);
var n = first__54160__$2;
var xs = seq__54159__$3;
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
var vec__54161 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__54162 = cljs.core.seq.call(null,vec__54161);
var first__54163 = cljs.core.first.call(null,seq__54162);
var seq__54162__$1 = cljs.core.next.call(null,seq__54162);
var p = first__54163;
var first__54163__$1 = cljs.core.first.call(null,seq__54162__$1);
var seq__54162__$2 = cljs.core.next.call(null,seq__54162__$1);
var ts = first__54163__$1;
var xs = seq__54162__$2;
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
var args54165 = [];
var len__25826__auto___54200 = arguments.length;
var i__25827__auto___54201 = (0);
while(true){
if((i__25827__auto___54201 < len__25826__auto___54200)){
args54165.push((arguments[i__25827__auto___54201]));

var G__54202 = (i__25827__auto___54201 + (1));
i__25827__auto___54201 = G__54202;
continue;
} else {
}
break;
}

var G__54167 = args54165.length;
switch (G__54167) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54165.length)].join('')));

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
var vec__54189 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__54164_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__54164_SHARP_);
} else {
return p1__54164_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__54190 = cljs.core.seq.call(null,vec__54189);
var first__54191 = cljs.core.first.call(null,seq__54190);
var seq__54190__$1 = cljs.core.next.call(null,seq__54190);
var x = first__54191;
var ys = seq__54190__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__54192 = cljs.core.seq.call(null,ys);
var chunk__54193 = null;
var count__54194 = (0);
var i__54195 = (0);
while(true){
if((i__54195 < count__54194)){
var next_line = cljs.core._nth.call(null,chunk__54193,i__54195);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__54204 = seq__54192;
var G__54205 = chunk__54193;
var G__54206 = count__54194;
var G__54207 = (i__54195 + (1));
seq__54192 = G__54204;
chunk__54193 = G__54205;
count__54194 = G__54206;
i__54195 = G__54207;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54192);
if(temp__4657__auto__){
var seq__54192__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54192__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__54192__$1);
var G__54208 = cljs.core.chunk_rest.call(null,seq__54192__$1);
var G__54209 = c__25562__auto__;
var G__54210 = cljs.core.count.call(null,c__25562__auto__);
var G__54211 = (0);
seq__54192 = G__54208;
chunk__54193 = G__54209;
count__54194 = G__54210;
i__54195 = G__54211;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__54192__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__54212 = cljs.core.next.call(null,seq__54192__$1);
var G__54213 = null;
var G__54214 = (0);
var G__54215 = (0);
seq__54192 = G__54212;
chunk__54193 = G__54213;
count__54194 = G__54214;
i__54195 = G__54215;
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

var seq__54196_54216 = cljs.core.seq.call(null,docs__$2);
var chunk__54197_54217 = null;
var count__54198_54218 = (0);
var i__54199_54219 = (0);
while(true){
if((i__54199_54219 < count__54198_54218)){
var e_54220 = cljs.core._nth.call(null,chunk__54197_54217,i__54199_54219);
if(cljs.core.truth_(e_54220)){
print_comment_lines.call(null,e_54220);
} else {
}

var G__54221 = seq__54196_54216;
var G__54222 = chunk__54197_54217;
var G__54223 = count__54198_54218;
var G__54224 = (i__54199_54219 + (1));
seq__54196_54216 = G__54221;
chunk__54197_54217 = G__54222;
count__54198_54218 = G__54223;
i__54199_54219 = G__54224;
continue;
} else {
var temp__4657__auto___54225 = cljs.core.seq.call(null,seq__54196_54216);
if(temp__4657__auto___54225){
var seq__54196_54226__$1 = temp__4657__auto___54225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54196_54226__$1)){
var c__25562__auto___54227 = cljs.core.chunk_first.call(null,seq__54196_54226__$1);
var G__54228 = cljs.core.chunk_rest.call(null,seq__54196_54226__$1);
var G__54229 = c__25562__auto___54227;
var G__54230 = cljs.core.count.call(null,c__25562__auto___54227);
var G__54231 = (0);
seq__54196_54216 = G__54228;
chunk__54197_54217 = G__54229;
count__54198_54218 = G__54230;
i__54199_54219 = G__54231;
continue;
} else {
var e_54232 = cljs.core.first.call(null,seq__54196_54226__$1);
if(cljs.core.truth_(e_54232)){
print_comment_lines.call(null,e_54232);
} else {
}

var G__54233 = cljs.core.next.call(null,seq__54196_54226__$1);
var G__54234 = null;
var G__54235 = (0);
var G__54236 = (0);
seq__54196_54216 = G__54233;
chunk__54197_54217 = G__54234;
count__54198_54218 = G__54235;
i__54199_54219 = G__54236;
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
return (function (p1__54238_SHARP_){
return goog.string.startsWith(p1__54238_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__54239){
var map__54240 = p__54239;
var map__54240__$1 = ((((!((map__54240 == null)))?((((map__54240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54240):map__54240);
var name = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__54240__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__54242){
var map__54263 = p__54242;
var map__54263__$1 = ((((!((map__54263 == null)))?((((map__54263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54263):map__54263);
var name = cljs.core.get.call(null,map__54263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__54263__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__54263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__54265_54283 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__54266_54284 = null;
var count__54267_54285 = (0);
var i__54268_54286 = (0);
while(true){
if((i__54268_54286 < count__54267_54285)){
var vec__54269_54287 = cljs.core._nth.call(null,chunk__54266_54284,i__54268_54286);
var i_54288 = cljs.core.nth.call(null,vec__54269_54287,(0),null);
var param_54289 = cljs.core.nth.call(null,vec__54269_54287,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_54289);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__54290 = seq__54265_54283;
var G__54291 = chunk__54266_54284;
var G__54292 = count__54267_54285;
var G__54293 = (i__54268_54286 + (1));
seq__54265_54283 = G__54290;
chunk__54266_54284 = G__54291;
count__54267_54285 = G__54292;
i__54268_54286 = G__54293;
continue;
} else {
var temp__4657__auto___54294 = cljs.core.seq.call(null,seq__54265_54283);
if(temp__4657__auto___54294){
var seq__54265_54295__$1 = temp__4657__auto___54294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54265_54295__$1)){
var c__25562__auto___54296 = cljs.core.chunk_first.call(null,seq__54265_54295__$1);
var G__54297 = cljs.core.chunk_rest.call(null,seq__54265_54295__$1);
var G__54298 = c__25562__auto___54296;
var G__54299 = cljs.core.count.call(null,c__25562__auto___54296);
var G__54300 = (0);
seq__54265_54283 = G__54297;
chunk__54266_54284 = G__54298;
count__54267_54285 = G__54299;
i__54268_54286 = G__54300;
continue;
} else {
var vec__54272_54301 = cljs.core.first.call(null,seq__54265_54295__$1);
var i_54302 = cljs.core.nth.call(null,vec__54272_54301,(0),null);
var param_54303 = cljs.core.nth.call(null,vec__54272_54301,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_54303);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__54304 = cljs.core.next.call(null,seq__54265_54295__$1);
var G__54305 = null;
var G__54306 = (0);
var G__54307 = (0);
seq__54265_54283 = G__54304;
chunk__54266_54284 = G__54305;
count__54267_54285 = G__54306;
i__54268_54286 = G__54307;
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

var seq__54275_54308 = cljs.core.seq.call(null,params);
var chunk__54276_54309 = null;
var count__54277_54310 = (0);
var i__54278_54311 = (0);
while(true){
if((i__54278_54311 < count__54277_54310)){
var param_54312 = cljs.core._nth.call(null,chunk__54276_54309,i__54278_54311);
cljs.compiler.emit.call(null,param_54312);

if(cljs.core._EQ_.call(null,param_54312,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54313 = seq__54275_54308;
var G__54314 = chunk__54276_54309;
var G__54315 = count__54277_54310;
var G__54316 = (i__54278_54311 + (1));
seq__54275_54308 = G__54313;
chunk__54276_54309 = G__54314;
count__54277_54310 = G__54315;
i__54278_54311 = G__54316;
continue;
} else {
var temp__4657__auto___54317 = cljs.core.seq.call(null,seq__54275_54308);
if(temp__4657__auto___54317){
var seq__54275_54318__$1 = temp__4657__auto___54317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54275_54318__$1)){
var c__25562__auto___54319 = cljs.core.chunk_first.call(null,seq__54275_54318__$1);
var G__54320 = cljs.core.chunk_rest.call(null,seq__54275_54318__$1);
var G__54321 = c__25562__auto___54319;
var G__54322 = cljs.core.count.call(null,c__25562__auto___54319);
var G__54323 = (0);
seq__54275_54308 = G__54320;
chunk__54276_54309 = G__54321;
count__54277_54310 = G__54322;
i__54278_54311 = G__54323;
continue;
} else {
var param_54324 = cljs.core.first.call(null,seq__54275_54318__$1);
cljs.compiler.emit.call(null,param_54324);

if(cljs.core._EQ_.call(null,param_54324,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54325 = cljs.core.next.call(null,seq__54275_54318__$1);
var G__54326 = null;
var G__54327 = (0);
var G__54328 = (0);
seq__54275_54308 = G__54325;
chunk__54276_54309 = G__54326;
count__54277_54310 = G__54327;
i__54278_54311 = G__54328;
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

var seq__54279_54329 = cljs.core.seq.call(null,params);
var chunk__54280_54330 = null;
var count__54281_54331 = (0);
var i__54282_54332 = (0);
while(true){
if((i__54282_54332 < count__54281_54331)){
var param_54333 = cljs.core._nth.call(null,chunk__54280_54330,i__54282_54332);
cljs.compiler.emit.call(null,param_54333);

if(cljs.core._EQ_.call(null,param_54333,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54334 = seq__54279_54329;
var G__54335 = chunk__54280_54330;
var G__54336 = count__54281_54331;
var G__54337 = (i__54282_54332 + (1));
seq__54279_54329 = G__54334;
chunk__54280_54330 = G__54335;
count__54281_54331 = G__54336;
i__54282_54332 = G__54337;
continue;
} else {
var temp__4657__auto___54338 = cljs.core.seq.call(null,seq__54279_54329);
if(temp__4657__auto___54338){
var seq__54279_54339__$1 = temp__4657__auto___54338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54279_54339__$1)){
var c__25562__auto___54340 = cljs.core.chunk_first.call(null,seq__54279_54339__$1);
var G__54341 = cljs.core.chunk_rest.call(null,seq__54279_54339__$1);
var G__54342 = c__25562__auto___54340;
var G__54343 = cljs.core.count.call(null,c__25562__auto___54340);
var G__54344 = (0);
seq__54279_54329 = G__54341;
chunk__54280_54330 = G__54342;
count__54281_54331 = G__54343;
i__54282_54332 = G__54344;
continue;
} else {
var param_54345 = cljs.core.first.call(null,seq__54279_54339__$1);
cljs.compiler.emit.call(null,param_54345);

if(cljs.core._EQ_.call(null,param_54345,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54346 = cljs.core.next.call(null,seq__54279_54339__$1);
var G__54347 = null;
var G__54348 = (0);
var G__54349 = (0);
seq__54279_54329 = G__54346;
chunk__54280_54330 = G__54347;
count__54281_54331 = G__54348;
i__54282_54332 = G__54349;
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
var seq__54354 = cljs.core.seq.call(null,params);
var chunk__54355 = null;
var count__54356 = (0);
var i__54357 = (0);
while(true){
if((i__54357 < count__54356)){
var param = cljs.core._nth.call(null,chunk__54355,i__54357);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54358 = seq__54354;
var G__54359 = chunk__54355;
var G__54360 = count__54356;
var G__54361 = (i__54357 + (1));
seq__54354 = G__54358;
chunk__54355 = G__54359;
count__54356 = G__54360;
i__54357 = G__54361;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54354);
if(temp__4657__auto__){
var seq__54354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54354__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__54354__$1);
var G__54362 = cljs.core.chunk_rest.call(null,seq__54354__$1);
var G__54363 = c__25562__auto__;
var G__54364 = cljs.core.count.call(null,c__25562__auto__);
var G__54365 = (0);
seq__54354 = G__54362;
chunk__54355 = G__54363;
count__54356 = G__54364;
i__54357 = G__54365;
continue;
} else {
var param = cljs.core.first.call(null,seq__54354__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54366 = cljs.core.next.call(null,seq__54354__$1);
var G__54367 = null;
var G__54368 = (0);
var G__54369 = (0);
seq__54354 = G__54366;
chunk__54355 = G__54367;
count__54356 = G__54368;
i__54357 = G__54369;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__54370){
var map__54373 = p__54370;
var map__54373__$1 = ((((!((map__54373 == null)))?((((map__54373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54373):map__54373);
var type = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__54373__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__54375){
var map__54386 = p__54375;
var map__54386__$1 = ((((!((map__54386 == null)))?((((map__54386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54386):map__54386);
var f = map__54386__$1;
var type = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__54386__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_54396__$1 = (function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_54397 = cljs.compiler.munge.call(null,name_54396__$1);
var delegate_name_54398 = [cljs.core.str(mname_54397),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_54398," = function (");

var seq__54388_54399 = cljs.core.seq.call(null,params);
var chunk__54389_54400 = null;
var count__54390_54401 = (0);
var i__54391_54402 = (0);
while(true){
if((i__54391_54402 < count__54390_54401)){
var param_54403 = cljs.core._nth.call(null,chunk__54389_54400,i__54391_54402);
cljs.compiler.emit.call(null,param_54403);

if(cljs.core._EQ_.call(null,param_54403,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54404 = seq__54388_54399;
var G__54405 = chunk__54389_54400;
var G__54406 = count__54390_54401;
var G__54407 = (i__54391_54402 + (1));
seq__54388_54399 = G__54404;
chunk__54389_54400 = G__54405;
count__54390_54401 = G__54406;
i__54391_54402 = G__54407;
continue;
} else {
var temp__4657__auto___54408 = cljs.core.seq.call(null,seq__54388_54399);
if(temp__4657__auto___54408){
var seq__54388_54409__$1 = temp__4657__auto___54408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54388_54409__$1)){
var c__25562__auto___54410 = cljs.core.chunk_first.call(null,seq__54388_54409__$1);
var G__54411 = cljs.core.chunk_rest.call(null,seq__54388_54409__$1);
var G__54412 = c__25562__auto___54410;
var G__54413 = cljs.core.count.call(null,c__25562__auto___54410);
var G__54414 = (0);
seq__54388_54399 = G__54411;
chunk__54389_54400 = G__54412;
count__54390_54401 = G__54413;
i__54391_54402 = G__54414;
continue;
} else {
var param_54415 = cljs.core.first.call(null,seq__54388_54409__$1);
cljs.compiler.emit.call(null,param_54415);

if(cljs.core._EQ_.call(null,param_54415,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54416 = cljs.core.next.call(null,seq__54388_54409__$1);
var G__54417 = null;
var G__54418 = (0);
var G__54419 = (0);
seq__54388_54399 = G__54416;
chunk__54389_54400 = G__54417;
count__54390_54401 = G__54418;
i__54391_54402 = G__54419;
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

cljs.compiler.emitln.call(null,"var ",mname_54397," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_54420 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_54420,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_54398,".call(this,");

var seq__54392_54421 = cljs.core.seq.call(null,params);
var chunk__54393_54422 = null;
var count__54394_54423 = (0);
var i__54395_54424 = (0);
while(true){
if((i__54395_54424 < count__54394_54423)){
var param_54425 = cljs.core._nth.call(null,chunk__54393_54422,i__54395_54424);
cljs.compiler.emit.call(null,param_54425);

if(cljs.core._EQ_.call(null,param_54425,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54426 = seq__54392_54421;
var G__54427 = chunk__54393_54422;
var G__54428 = count__54394_54423;
var G__54429 = (i__54395_54424 + (1));
seq__54392_54421 = G__54426;
chunk__54393_54422 = G__54427;
count__54394_54423 = G__54428;
i__54395_54424 = G__54429;
continue;
} else {
var temp__4657__auto___54430 = cljs.core.seq.call(null,seq__54392_54421);
if(temp__4657__auto___54430){
var seq__54392_54431__$1 = temp__4657__auto___54430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54392_54431__$1)){
var c__25562__auto___54432 = cljs.core.chunk_first.call(null,seq__54392_54431__$1);
var G__54433 = cljs.core.chunk_rest.call(null,seq__54392_54431__$1);
var G__54434 = c__25562__auto___54432;
var G__54435 = cljs.core.count.call(null,c__25562__auto___54432);
var G__54436 = (0);
seq__54392_54421 = G__54433;
chunk__54393_54422 = G__54434;
count__54394_54423 = G__54435;
i__54395_54424 = G__54436;
continue;
} else {
var param_54437 = cljs.core.first.call(null,seq__54392_54431__$1);
cljs.compiler.emit.call(null,param_54437);

if(cljs.core._EQ_.call(null,param_54437,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__54438 = cljs.core.next.call(null,seq__54392_54431__$1);
var G__54439 = null;
var G__54440 = (0);
var G__54441 = (0);
seq__54392_54421 = G__54438;
chunk__54393_54422 = G__54439;
count__54394_54423 = G__54440;
i__54395_54424 = G__54441;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_54397,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_54397,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_54396__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_54397,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_54398,";");

cljs.compiler.emitln.call(null,"return ",mname_54397,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__54445){
var map__54446 = p__54445;
var map__54446__$1 = ((((!((map__54446 == null)))?((((map__54446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54446):map__54446);
var name = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__54446__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__54442_SHARP_){
var and__24739__auto__ = p1__54442_SHARP_;
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__54442_SHARP_));
} else {
return and__24739__auto__;
}
});})(map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_54481__$1 = (function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_54482 = cljs.compiler.munge.call(null,name_54481__$1);
var maxparams_54483 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_54484 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_54481__$1,mname_54482,maxparams_54483,loop_locals,map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_54482),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_54481__$1,mname_54482,maxparams_54483,loop_locals,map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_54485 = cljs.core.sort_by.call(null,((function (name_54481__$1,mname_54482,maxparams_54483,mmap_54484,loop_locals,map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__54443_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__54443_SHARP_)));
});})(name_54481__$1,mname_54482,maxparams_54483,mmap_54484,loop_locals,map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_54484));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_54482," = null;");

var seq__54448_54486 = cljs.core.seq.call(null,ms_54485);
var chunk__54449_54487 = null;
var count__54450_54488 = (0);
var i__54451_54489 = (0);
while(true){
if((i__54451_54489 < count__54450_54488)){
var vec__54452_54490 = cljs.core._nth.call(null,chunk__54449_54487,i__54451_54489);
var n_54491 = cljs.core.nth.call(null,vec__54452_54490,(0),null);
var meth_54492 = cljs.core.nth.call(null,vec__54452_54490,(1),null);
cljs.compiler.emits.call(null,"var ",n_54491," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_54492))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_54492);
} else {
cljs.compiler.emit_fn_method.call(null,meth_54492);
}

cljs.compiler.emitln.call(null,";");

var G__54493 = seq__54448_54486;
var G__54494 = chunk__54449_54487;
var G__54495 = count__54450_54488;
var G__54496 = (i__54451_54489 + (1));
seq__54448_54486 = G__54493;
chunk__54449_54487 = G__54494;
count__54450_54488 = G__54495;
i__54451_54489 = G__54496;
continue;
} else {
var temp__4657__auto___54497 = cljs.core.seq.call(null,seq__54448_54486);
if(temp__4657__auto___54497){
var seq__54448_54498__$1 = temp__4657__auto___54497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54448_54498__$1)){
var c__25562__auto___54499 = cljs.core.chunk_first.call(null,seq__54448_54498__$1);
var G__54500 = cljs.core.chunk_rest.call(null,seq__54448_54498__$1);
var G__54501 = c__25562__auto___54499;
var G__54502 = cljs.core.count.call(null,c__25562__auto___54499);
var G__54503 = (0);
seq__54448_54486 = G__54500;
chunk__54449_54487 = G__54501;
count__54450_54488 = G__54502;
i__54451_54489 = G__54503;
continue;
} else {
var vec__54455_54504 = cljs.core.first.call(null,seq__54448_54498__$1);
var n_54505 = cljs.core.nth.call(null,vec__54455_54504,(0),null);
var meth_54506 = cljs.core.nth.call(null,vec__54455_54504,(1),null);
cljs.compiler.emits.call(null,"var ",n_54505," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_54506))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_54506);
} else {
cljs.compiler.emit_fn_method.call(null,meth_54506);
}

cljs.compiler.emitln.call(null,";");

var G__54507 = cljs.core.next.call(null,seq__54448_54498__$1);
var G__54508 = null;
var G__54509 = (0);
var G__54510 = (0);
seq__54448_54486 = G__54507;
chunk__54449_54487 = G__54508;
count__54450_54488 = G__54509;
i__54451_54489 = G__54510;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_54482," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_54483),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_54483)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_54483));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__54458_54511 = cljs.core.seq.call(null,ms_54485);
var chunk__54459_54512 = null;
var count__54460_54513 = (0);
var i__54461_54514 = (0);
while(true){
if((i__54461_54514 < count__54460_54513)){
var vec__54462_54515 = cljs.core._nth.call(null,chunk__54459_54512,i__54461_54514);
var n_54516 = cljs.core.nth.call(null,vec__54462_54515,(0),null);
var meth_54517 = cljs.core.nth.call(null,vec__54462_54515,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_54517))){
cljs.compiler.emitln.call(null,"default:");

var restarg_54518 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_54518," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_54519 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_54518," = new cljs.core.IndexedSeq(",a_54519,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_54516,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_54483)),(((cljs.core.count.call(null,maxparams_54483) > (1)))?", ":null),restarg_54518,");");
} else {
var pcnt_54520 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_54517));
cljs.compiler.emitln.call(null,"case ",pcnt_54520,":");

cljs.compiler.emitln.call(null,"return ",n_54516,".call(this",(((pcnt_54520 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_54520,maxparams_54483));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),",")),");");
}

var G__54521 = seq__54458_54511;
var G__54522 = chunk__54459_54512;
var G__54523 = count__54460_54513;
var G__54524 = (i__54461_54514 + (1));
seq__54458_54511 = G__54521;
chunk__54459_54512 = G__54522;
count__54460_54513 = G__54523;
i__54461_54514 = G__54524;
continue;
} else {
var temp__4657__auto___54525 = cljs.core.seq.call(null,seq__54458_54511);
if(temp__4657__auto___54525){
var seq__54458_54526__$1 = temp__4657__auto___54525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54458_54526__$1)){
var c__25562__auto___54527 = cljs.core.chunk_first.call(null,seq__54458_54526__$1);
var G__54528 = cljs.core.chunk_rest.call(null,seq__54458_54526__$1);
var G__54529 = c__25562__auto___54527;
var G__54530 = cljs.core.count.call(null,c__25562__auto___54527);
var G__54531 = (0);
seq__54458_54511 = G__54528;
chunk__54459_54512 = G__54529;
count__54460_54513 = G__54530;
i__54461_54514 = G__54531;
continue;
} else {
var vec__54465_54532 = cljs.core.first.call(null,seq__54458_54526__$1);
var n_54533 = cljs.core.nth.call(null,vec__54465_54532,(0),null);
var meth_54534 = cljs.core.nth.call(null,vec__54465_54532,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_54534))){
cljs.compiler.emitln.call(null,"default:");

var restarg_54535 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_54535," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_54536 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_54535," = new cljs.core.IndexedSeq(",a_54536,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_54533,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_54483)),(((cljs.core.count.call(null,maxparams_54483) > (1)))?", ":null),restarg_54535,");");
} else {
var pcnt_54537 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_54534));
cljs.compiler.emitln.call(null,"case ",pcnt_54537,":");

cljs.compiler.emitln.call(null,"return ",n_54533,".call(this",(((pcnt_54537 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_54537,maxparams_54483));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),",")),");");
}

var G__54538 = cljs.core.next.call(null,seq__54458_54526__$1);
var G__54539 = null;
var G__54540 = (0);
var G__54541 = (0);
seq__54458_54511 = G__54538;
chunk__54459_54512 = G__54539;
count__54460_54513 = G__54540;
i__54461_54514 = G__54541;
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
cljs.compiler.emitln.call(null,mname_54482,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_54482,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_54481__$1,mname_54482,maxparams_54483,mmap_54484,ms_54485,loop_locals,map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__54444_SHARP_){
var vec__54468 = p1__54444_SHARP_;
var n = cljs.core.nth.call(null,vec__54468,(0),null);
var m = cljs.core.nth.call(null,vec__54468,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_54481__$1,mname_54482,maxparams_54483,mmap_54484,ms_54485,loop_locals,map__54446,map__54446__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_54485),".cljs$lang$applyTo;");
} else {
}

var seq__54471_54542 = cljs.core.seq.call(null,ms_54485);
var chunk__54472_54543 = null;
var count__54473_54544 = (0);
var i__54474_54545 = (0);
while(true){
if((i__54474_54545 < count__54473_54544)){
var vec__54475_54546 = cljs.core._nth.call(null,chunk__54472_54543,i__54474_54545);
var n_54547 = cljs.core.nth.call(null,vec__54475_54546,(0),null);
var meth_54548 = cljs.core.nth.call(null,vec__54475_54546,(1),null);
var c_54549 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_54548));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_54548))){
cljs.compiler.emitln.call(null,mname_54482,".cljs$core$IFn$_invoke$arity$variadic = ",n_54547,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_54482,".cljs$core$IFn$_invoke$arity$",c_54549," = ",n_54547,";");
}

var G__54550 = seq__54471_54542;
var G__54551 = chunk__54472_54543;
var G__54552 = count__54473_54544;
var G__54553 = (i__54474_54545 + (1));
seq__54471_54542 = G__54550;
chunk__54472_54543 = G__54551;
count__54473_54544 = G__54552;
i__54474_54545 = G__54553;
continue;
} else {
var temp__4657__auto___54554 = cljs.core.seq.call(null,seq__54471_54542);
if(temp__4657__auto___54554){
var seq__54471_54555__$1 = temp__4657__auto___54554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54471_54555__$1)){
var c__25562__auto___54556 = cljs.core.chunk_first.call(null,seq__54471_54555__$1);
var G__54557 = cljs.core.chunk_rest.call(null,seq__54471_54555__$1);
var G__54558 = c__25562__auto___54556;
var G__54559 = cljs.core.count.call(null,c__25562__auto___54556);
var G__54560 = (0);
seq__54471_54542 = G__54557;
chunk__54472_54543 = G__54558;
count__54473_54544 = G__54559;
i__54474_54545 = G__54560;
continue;
} else {
var vec__54478_54561 = cljs.core.first.call(null,seq__54471_54555__$1);
var n_54562 = cljs.core.nth.call(null,vec__54478_54561,(0),null);
var meth_54563 = cljs.core.nth.call(null,vec__54478_54561,(1),null);
var c_54564 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_54563));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_54563))){
cljs.compiler.emitln.call(null,mname_54482,".cljs$core$IFn$_invoke$arity$variadic = ",n_54562,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_54482,".cljs$core$IFn$_invoke$arity$",c_54564," = ",n_54562,";");
}

var G__54565 = cljs.core.next.call(null,seq__54471_54555__$1);
var G__54566 = null;
var G__54567 = (0);
var G__54568 = (0);
seq__54471_54542 = G__54565;
chunk__54472_54543 = G__54566;
count__54473_54544 = G__54567;
i__54474_54545 = G__54568;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_54482,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__54569){
var map__54570 = p__54569;
var map__54570__$1 = ((((!((map__54570 == null)))?((((map__54570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54570):map__54570);
var statements = cljs.core.get.call(null,map__54570__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__54570__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__54570__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__54572_54576 = cljs.core.seq.call(null,statements);
var chunk__54573_54577 = null;
var count__54574_54578 = (0);
var i__54575_54579 = (0);
while(true){
if((i__54575_54579 < count__54574_54578)){
var s_54580 = cljs.core._nth.call(null,chunk__54573_54577,i__54575_54579);
cljs.compiler.emitln.call(null,s_54580);

var G__54581 = seq__54572_54576;
var G__54582 = chunk__54573_54577;
var G__54583 = count__54574_54578;
var G__54584 = (i__54575_54579 + (1));
seq__54572_54576 = G__54581;
chunk__54573_54577 = G__54582;
count__54574_54578 = G__54583;
i__54575_54579 = G__54584;
continue;
} else {
var temp__4657__auto___54585 = cljs.core.seq.call(null,seq__54572_54576);
if(temp__4657__auto___54585){
var seq__54572_54586__$1 = temp__4657__auto___54585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54572_54586__$1)){
var c__25562__auto___54587 = cljs.core.chunk_first.call(null,seq__54572_54586__$1);
var G__54588 = cljs.core.chunk_rest.call(null,seq__54572_54586__$1);
var G__54589 = c__25562__auto___54587;
var G__54590 = cljs.core.count.call(null,c__25562__auto___54587);
var G__54591 = (0);
seq__54572_54576 = G__54588;
chunk__54573_54577 = G__54589;
count__54574_54578 = G__54590;
i__54575_54579 = G__54591;
continue;
} else {
var s_54592 = cljs.core.first.call(null,seq__54572_54586__$1);
cljs.compiler.emitln.call(null,s_54592);

var G__54593 = cljs.core.next.call(null,seq__54572_54586__$1);
var G__54594 = null;
var G__54595 = (0);
var G__54596 = (0);
seq__54572_54576 = G__54593;
chunk__54573_54577 = G__54594;
count__54574_54578 = G__54595;
i__54575_54579 = G__54596;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__54597){
var map__54598 = p__54597;
var map__54598__$1 = ((((!((map__54598 == null)))?((((map__54598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54598):map__54598);
var env = cljs.core.get.call(null,map__54598__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__54598__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__54598__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__54598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__54598__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__54600,is_loop){
var map__54612 = p__54600;
var map__54612__$1 = ((((!((map__54612 == null)))?((((map__54612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54612):map__54612);
var bindings = cljs.core.get.call(null,map__54612__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__54612__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__54612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_54614_54623 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_54614_54623,context,map__54612,map__54612__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_54614_54623,context,map__54612,map__54612__$1,bindings,expr,env))
,bindings):null));

try{var seq__54615_54624 = cljs.core.seq.call(null,bindings);
var chunk__54616_54625 = null;
var count__54617_54626 = (0);
var i__54618_54627 = (0);
while(true){
if((i__54618_54627 < count__54617_54626)){
var map__54619_54628 = cljs.core._nth.call(null,chunk__54616_54625,i__54618_54627);
var map__54619_54629__$1 = ((((!((map__54619_54628 == null)))?((((map__54619_54628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54619_54628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54619_54628):map__54619_54628);
var binding_54630 = map__54619_54629__$1;
var init_54631 = cljs.core.get.call(null,map__54619_54629__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_54630);

cljs.compiler.emitln.call(null," = ",init_54631,";");

var G__54632 = seq__54615_54624;
var G__54633 = chunk__54616_54625;
var G__54634 = count__54617_54626;
var G__54635 = (i__54618_54627 + (1));
seq__54615_54624 = G__54632;
chunk__54616_54625 = G__54633;
count__54617_54626 = G__54634;
i__54618_54627 = G__54635;
continue;
} else {
var temp__4657__auto___54636 = cljs.core.seq.call(null,seq__54615_54624);
if(temp__4657__auto___54636){
var seq__54615_54637__$1 = temp__4657__auto___54636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54615_54637__$1)){
var c__25562__auto___54638 = cljs.core.chunk_first.call(null,seq__54615_54637__$1);
var G__54639 = cljs.core.chunk_rest.call(null,seq__54615_54637__$1);
var G__54640 = c__25562__auto___54638;
var G__54641 = cljs.core.count.call(null,c__25562__auto___54638);
var G__54642 = (0);
seq__54615_54624 = G__54639;
chunk__54616_54625 = G__54640;
count__54617_54626 = G__54641;
i__54618_54627 = G__54642;
continue;
} else {
var map__54621_54643 = cljs.core.first.call(null,seq__54615_54637__$1);
var map__54621_54644__$1 = ((((!((map__54621_54643 == null)))?((((map__54621_54643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54621_54643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54621_54643):map__54621_54643);
var binding_54645 = map__54621_54644__$1;
var init_54646 = cljs.core.get.call(null,map__54621_54644__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_54645);

cljs.compiler.emitln.call(null," = ",init_54646,";");

var G__54647 = cljs.core.next.call(null,seq__54615_54637__$1);
var G__54648 = null;
var G__54649 = (0);
var G__54650 = (0);
seq__54615_54624 = G__54647;
chunk__54616_54625 = G__54648;
count__54617_54626 = G__54649;
i__54618_54627 = G__54650;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_54614_54623;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__54651){
var map__54652 = p__54651;
var map__54652__$1 = ((((!((map__54652 == null)))?((((map__54652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54652):map__54652);
var frame = cljs.core.get.call(null,map__54652__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__54652__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__54652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25666__auto___54654 = cljs.core.count.call(null,exprs);
var i_54655 = (0);
while(true){
if((i_54655 < n__25666__auto___54654)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_54655)," = ",exprs.call(null,i_54655),";");

var G__54656 = (i_54655 + (1));
i_54655 = G__54656;
continue;
} else {
}
break;
}

var n__25666__auto___54657 = cljs.core.count.call(null,exprs);
var i_54658 = (0);
while(true){
if((i_54658 < n__25666__auto___54657)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_54658))," = ",temps.call(null,i_54658),";");

var G__54659 = (i_54658 + (1));
i_54658 = G__54659;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__54660){
var map__54661 = p__54660;
var map__54661__$1 = ((((!((map__54661 == null)))?((((map__54661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54661):map__54661);
var bindings = cljs.core.get.call(null,map__54661__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__54661__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__54661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__54663_54671 = cljs.core.seq.call(null,bindings);
var chunk__54664_54672 = null;
var count__54665_54673 = (0);
var i__54666_54674 = (0);
while(true){
if((i__54666_54674 < count__54665_54673)){
var map__54667_54675 = cljs.core._nth.call(null,chunk__54664_54672,i__54666_54674);
var map__54667_54676__$1 = ((((!((map__54667_54675 == null)))?((((map__54667_54675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54667_54675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54667_54675):map__54667_54675);
var binding_54677 = map__54667_54676__$1;
var init_54678 = cljs.core.get.call(null,map__54667_54676__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_54677)," = ",init_54678,";");

var G__54679 = seq__54663_54671;
var G__54680 = chunk__54664_54672;
var G__54681 = count__54665_54673;
var G__54682 = (i__54666_54674 + (1));
seq__54663_54671 = G__54679;
chunk__54664_54672 = G__54680;
count__54665_54673 = G__54681;
i__54666_54674 = G__54682;
continue;
} else {
var temp__4657__auto___54683 = cljs.core.seq.call(null,seq__54663_54671);
if(temp__4657__auto___54683){
var seq__54663_54684__$1 = temp__4657__auto___54683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54663_54684__$1)){
var c__25562__auto___54685 = cljs.core.chunk_first.call(null,seq__54663_54684__$1);
var G__54686 = cljs.core.chunk_rest.call(null,seq__54663_54684__$1);
var G__54687 = c__25562__auto___54685;
var G__54688 = cljs.core.count.call(null,c__25562__auto___54685);
var G__54689 = (0);
seq__54663_54671 = G__54686;
chunk__54664_54672 = G__54687;
count__54665_54673 = G__54688;
i__54666_54674 = G__54689;
continue;
} else {
var map__54669_54690 = cljs.core.first.call(null,seq__54663_54684__$1);
var map__54669_54691__$1 = ((((!((map__54669_54690 == null)))?((((map__54669_54690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54669_54690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54669_54690):map__54669_54690);
var binding_54692 = map__54669_54691__$1;
var init_54693 = cljs.core.get.call(null,map__54669_54691__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_54692)," = ",init_54693,";");

var G__54694 = cljs.core.next.call(null,seq__54663_54684__$1);
var G__54695 = null;
var G__54696 = (0);
var G__54697 = (0);
seq__54663_54671 = G__54694;
chunk__54664_54672 = G__54695;
count__54665_54673 = G__54696;
i__54666_54674 = G__54697;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__54700){
var map__54701 = p__54700;
var map__54701__$1 = ((((!((map__54701 == null)))?((((map__54701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54701):map__54701);
var expr = map__54701__$1;
var f = cljs.core.get.call(null,map__54701__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__54701__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__54701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__54703 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env){
return (function (p1__54698_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__54698_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env){
return (function (p1__54699_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__54699_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__54701,map__54701__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__54703,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__54703,(1),null);
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_54706 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_54706,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_54707 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_54707,args)),(((mfa_54707 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_54707,args)),"], 0))");
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
var fprop_54708 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_54708," ? ",f__$1,fprop_54708,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__54709){
var map__54710 = p__54709;
var map__54710__$1 = ((((!((map__54710 == null)))?((((map__54710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54710):map__54710);
var ctor = cljs.core.get.call(null,map__54710__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__54710__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__54710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__54712){
var map__54713 = p__54712;
var map__54713__$1 = ((((!((map__54713 == null)))?((((map__54713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54713):map__54713);
var target = cljs.core.get.call(null,map__54713__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__54713__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__54713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
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

var seq__54719_54723 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__54720_54724 = null;
var count__54721_54725 = (0);
var i__54722_54726 = (0);
while(true){
if((i__54722_54726 < count__54721_54725)){
var lib_54727 = cljs.core._nth.call(null,chunk__54720_54724,i__54722_54726);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_54727),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_54727),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_54727),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_54727),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_54727),"');");

}
}

var G__54728 = seq__54719_54723;
var G__54729 = chunk__54720_54724;
var G__54730 = count__54721_54725;
var G__54731 = (i__54722_54726 + (1));
seq__54719_54723 = G__54728;
chunk__54720_54724 = G__54729;
count__54721_54725 = G__54730;
i__54722_54726 = G__54731;
continue;
} else {
var temp__4657__auto___54732 = cljs.core.seq.call(null,seq__54719_54723);
if(temp__4657__auto___54732){
var seq__54719_54733__$1 = temp__4657__auto___54732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54719_54733__$1)){
var c__25562__auto___54734 = cljs.core.chunk_first.call(null,seq__54719_54733__$1);
var G__54735 = cljs.core.chunk_rest.call(null,seq__54719_54733__$1);
var G__54736 = c__25562__auto___54734;
var G__54737 = cljs.core.count.call(null,c__25562__auto___54734);
var G__54738 = (0);
seq__54719_54723 = G__54735;
chunk__54720_54724 = G__54736;
count__54721_54725 = G__54737;
i__54722_54726 = G__54738;
continue;
} else {
var lib_54739 = cljs.core.first.call(null,seq__54719_54733__$1);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_54739),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_54739),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_54739),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_54739),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_54739),"');");

}
}

var G__54740 = cljs.core.next.call(null,seq__54719_54733__$1);
var G__54741 = null;
var G__54742 = (0);
var G__54743 = (0);
seq__54719_54723 = G__54740;
chunk__54720_54724 = G__54741;
count__54721_54725 = G__54742;
i__54722_54726 = G__54743;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__54744){
var map__54745 = p__54744;
var map__54745__$1 = ((((!((map__54745 == null)))?((((map__54745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54745):map__54745);
var name = cljs.core.get.call(null,map__54745__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__54745__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__54745__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__54745__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__54745__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__54745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__54747){
var map__54748 = p__54747;
var map__54748__$1 = ((((!((map__54748 == null)))?((((map__54748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54748):map__54748);
var t = cljs.core.get.call(null,map__54748__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__54748__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__54748__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__54748__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__54748__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__54750_54768 = cljs.core.seq.call(null,protocols);
var chunk__54751_54769 = null;
var count__54752_54770 = (0);
var i__54753_54771 = (0);
while(true){
if((i__54753_54771 < count__54752_54770)){
var protocol_54772 = cljs.core._nth.call(null,chunk__54751_54769,i__54753_54771);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_54772)].join('')),"}");

var G__54773 = seq__54750_54768;
var G__54774 = chunk__54751_54769;
var G__54775 = count__54752_54770;
var G__54776 = (i__54753_54771 + (1));
seq__54750_54768 = G__54773;
chunk__54751_54769 = G__54774;
count__54752_54770 = G__54775;
i__54753_54771 = G__54776;
continue;
} else {
var temp__4657__auto___54777 = cljs.core.seq.call(null,seq__54750_54768);
if(temp__4657__auto___54777){
var seq__54750_54778__$1 = temp__4657__auto___54777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54750_54778__$1)){
var c__25562__auto___54779 = cljs.core.chunk_first.call(null,seq__54750_54778__$1);
var G__54780 = cljs.core.chunk_rest.call(null,seq__54750_54778__$1);
var G__54781 = c__25562__auto___54779;
var G__54782 = cljs.core.count.call(null,c__25562__auto___54779);
var G__54783 = (0);
seq__54750_54768 = G__54780;
chunk__54751_54769 = G__54781;
count__54752_54770 = G__54782;
i__54753_54771 = G__54783;
continue;
} else {
var protocol_54784 = cljs.core.first.call(null,seq__54750_54778__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_54784)].join('')),"}");

var G__54785 = cljs.core.next.call(null,seq__54750_54778__$1);
var G__54786 = null;
var G__54787 = (0);
var G__54788 = (0);
seq__54750_54768 = G__54785;
chunk__54751_54769 = G__54786;
count__54752_54770 = G__54787;
i__54753_54771 = G__54788;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__54754_54789 = cljs.core.seq.call(null,fields__$1);
var chunk__54755_54790 = null;
var count__54756_54791 = (0);
var i__54757_54792 = (0);
while(true){
if((i__54757_54792 < count__54756_54791)){
var fld_54793 = cljs.core._nth.call(null,chunk__54755_54790,i__54757_54792);
cljs.compiler.emitln.call(null,"this.",fld_54793," = ",fld_54793,";");

var G__54794 = seq__54754_54789;
var G__54795 = chunk__54755_54790;
var G__54796 = count__54756_54791;
var G__54797 = (i__54757_54792 + (1));
seq__54754_54789 = G__54794;
chunk__54755_54790 = G__54795;
count__54756_54791 = G__54796;
i__54757_54792 = G__54797;
continue;
} else {
var temp__4657__auto___54798 = cljs.core.seq.call(null,seq__54754_54789);
if(temp__4657__auto___54798){
var seq__54754_54799__$1 = temp__4657__auto___54798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54754_54799__$1)){
var c__25562__auto___54800 = cljs.core.chunk_first.call(null,seq__54754_54799__$1);
var G__54801 = cljs.core.chunk_rest.call(null,seq__54754_54799__$1);
var G__54802 = c__25562__auto___54800;
var G__54803 = cljs.core.count.call(null,c__25562__auto___54800);
var G__54804 = (0);
seq__54754_54789 = G__54801;
chunk__54755_54790 = G__54802;
count__54756_54791 = G__54803;
i__54757_54792 = G__54804;
continue;
} else {
var fld_54805 = cljs.core.first.call(null,seq__54754_54799__$1);
cljs.compiler.emitln.call(null,"this.",fld_54805," = ",fld_54805,";");

var G__54806 = cljs.core.next.call(null,seq__54754_54799__$1);
var G__54807 = null;
var G__54808 = (0);
var G__54809 = (0);
seq__54754_54789 = G__54806;
chunk__54755_54790 = G__54807;
count__54756_54791 = G__54808;
i__54757_54792 = G__54809;
continue;
}
} else {
}
}
break;
}

var seq__54758_54810 = cljs.core.seq.call(null,pmasks);
var chunk__54759_54811 = null;
var count__54760_54812 = (0);
var i__54761_54813 = (0);
while(true){
if((i__54761_54813 < count__54760_54812)){
var vec__54762_54814 = cljs.core._nth.call(null,chunk__54759_54811,i__54761_54813);
var pno_54815 = cljs.core.nth.call(null,vec__54762_54814,(0),null);
var pmask_54816 = cljs.core.nth.call(null,vec__54762_54814,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_54815,"$ = ",pmask_54816,";");

var G__54817 = seq__54758_54810;
var G__54818 = chunk__54759_54811;
var G__54819 = count__54760_54812;
var G__54820 = (i__54761_54813 + (1));
seq__54758_54810 = G__54817;
chunk__54759_54811 = G__54818;
count__54760_54812 = G__54819;
i__54761_54813 = G__54820;
continue;
} else {
var temp__4657__auto___54821 = cljs.core.seq.call(null,seq__54758_54810);
if(temp__4657__auto___54821){
var seq__54758_54822__$1 = temp__4657__auto___54821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54758_54822__$1)){
var c__25562__auto___54823 = cljs.core.chunk_first.call(null,seq__54758_54822__$1);
var G__54824 = cljs.core.chunk_rest.call(null,seq__54758_54822__$1);
var G__54825 = c__25562__auto___54823;
var G__54826 = cljs.core.count.call(null,c__25562__auto___54823);
var G__54827 = (0);
seq__54758_54810 = G__54824;
chunk__54759_54811 = G__54825;
count__54760_54812 = G__54826;
i__54761_54813 = G__54827;
continue;
} else {
var vec__54765_54828 = cljs.core.first.call(null,seq__54758_54822__$1);
var pno_54829 = cljs.core.nth.call(null,vec__54765_54828,(0),null);
var pmask_54830 = cljs.core.nth.call(null,vec__54765_54828,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_54829,"$ = ",pmask_54830,";");

var G__54831 = cljs.core.next.call(null,seq__54758_54822__$1);
var G__54832 = null;
var G__54833 = (0);
var G__54834 = (0);
seq__54758_54810 = G__54831;
chunk__54759_54811 = G__54832;
count__54760_54812 = G__54833;
i__54761_54813 = G__54834;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__54835){
var map__54836 = p__54835;
var map__54836__$1 = ((((!((map__54836 == null)))?((((map__54836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54836):map__54836);
var t = cljs.core.get.call(null,map__54836__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__54836__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__54836__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__54836__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__54836__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__54838_54856 = cljs.core.seq.call(null,protocols);
var chunk__54839_54857 = null;
var count__54840_54858 = (0);
var i__54841_54859 = (0);
while(true){
if((i__54841_54859 < count__54840_54858)){
var protocol_54860 = cljs.core._nth.call(null,chunk__54839_54857,i__54841_54859);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_54860)].join('')),"}");

var G__54861 = seq__54838_54856;
var G__54862 = chunk__54839_54857;
var G__54863 = count__54840_54858;
var G__54864 = (i__54841_54859 + (1));
seq__54838_54856 = G__54861;
chunk__54839_54857 = G__54862;
count__54840_54858 = G__54863;
i__54841_54859 = G__54864;
continue;
} else {
var temp__4657__auto___54865 = cljs.core.seq.call(null,seq__54838_54856);
if(temp__4657__auto___54865){
var seq__54838_54866__$1 = temp__4657__auto___54865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54838_54866__$1)){
var c__25562__auto___54867 = cljs.core.chunk_first.call(null,seq__54838_54866__$1);
var G__54868 = cljs.core.chunk_rest.call(null,seq__54838_54866__$1);
var G__54869 = c__25562__auto___54867;
var G__54870 = cljs.core.count.call(null,c__25562__auto___54867);
var G__54871 = (0);
seq__54838_54856 = G__54868;
chunk__54839_54857 = G__54869;
count__54840_54858 = G__54870;
i__54841_54859 = G__54871;
continue;
} else {
var protocol_54872 = cljs.core.first.call(null,seq__54838_54866__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_54872)].join('')),"}");

var G__54873 = cljs.core.next.call(null,seq__54838_54866__$1);
var G__54874 = null;
var G__54875 = (0);
var G__54876 = (0);
seq__54838_54856 = G__54873;
chunk__54839_54857 = G__54874;
count__54840_54858 = G__54875;
i__54841_54859 = G__54876;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__54842_54877 = cljs.core.seq.call(null,fields__$1);
var chunk__54843_54878 = null;
var count__54844_54879 = (0);
var i__54845_54880 = (0);
while(true){
if((i__54845_54880 < count__54844_54879)){
var fld_54881 = cljs.core._nth.call(null,chunk__54843_54878,i__54845_54880);
cljs.compiler.emitln.call(null,"this.",fld_54881," = ",fld_54881,";");

var G__54882 = seq__54842_54877;
var G__54883 = chunk__54843_54878;
var G__54884 = count__54844_54879;
var G__54885 = (i__54845_54880 + (1));
seq__54842_54877 = G__54882;
chunk__54843_54878 = G__54883;
count__54844_54879 = G__54884;
i__54845_54880 = G__54885;
continue;
} else {
var temp__4657__auto___54886 = cljs.core.seq.call(null,seq__54842_54877);
if(temp__4657__auto___54886){
var seq__54842_54887__$1 = temp__4657__auto___54886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54842_54887__$1)){
var c__25562__auto___54888 = cljs.core.chunk_first.call(null,seq__54842_54887__$1);
var G__54889 = cljs.core.chunk_rest.call(null,seq__54842_54887__$1);
var G__54890 = c__25562__auto___54888;
var G__54891 = cljs.core.count.call(null,c__25562__auto___54888);
var G__54892 = (0);
seq__54842_54877 = G__54889;
chunk__54843_54878 = G__54890;
count__54844_54879 = G__54891;
i__54845_54880 = G__54892;
continue;
} else {
var fld_54893 = cljs.core.first.call(null,seq__54842_54887__$1);
cljs.compiler.emitln.call(null,"this.",fld_54893," = ",fld_54893,";");

var G__54894 = cljs.core.next.call(null,seq__54842_54887__$1);
var G__54895 = null;
var G__54896 = (0);
var G__54897 = (0);
seq__54842_54877 = G__54894;
chunk__54843_54878 = G__54895;
count__54844_54879 = G__54896;
i__54845_54880 = G__54897;
continue;
}
} else {
}
}
break;
}

var seq__54846_54898 = cljs.core.seq.call(null,pmasks);
var chunk__54847_54899 = null;
var count__54848_54900 = (0);
var i__54849_54901 = (0);
while(true){
if((i__54849_54901 < count__54848_54900)){
var vec__54850_54902 = cljs.core._nth.call(null,chunk__54847_54899,i__54849_54901);
var pno_54903 = cljs.core.nth.call(null,vec__54850_54902,(0),null);
var pmask_54904 = cljs.core.nth.call(null,vec__54850_54902,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_54903,"$ = ",pmask_54904,";");

var G__54905 = seq__54846_54898;
var G__54906 = chunk__54847_54899;
var G__54907 = count__54848_54900;
var G__54908 = (i__54849_54901 + (1));
seq__54846_54898 = G__54905;
chunk__54847_54899 = G__54906;
count__54848_54900 = G__54907;
i__54849_54901 = G__54908;
continue;
} else {
var temp__4657__auto___54909 = cljs.core.seq.call(null,seq__54846_54898);
if(temp__4657__auto___54909){
var seq__54846_54910__$1 = temp__4657__auto___54909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54846_54910__$1)){
var c__25562__auto___54911 = cljs.core.chunk_first.call(null,seq__54846_54910__$1);
var G__54912 = cljs.core.chunk_rest.call(null,seq__54846_54910__$1);
var G__54913 = c__25562__auto___54911;
var G__54914 = cljs.core.count.call(null,c__25562__auto___54911);
var G__54915 = (0);
seq__54846_54898 = G__54912;
chunk__54847_54899 = G__54913;
count__54848_54900 = G__54914;
i__54849_54901 = G__54915;
continue;
} else {
var vec__54853_54916 = cljs.core.first.call(null,seq__54846_54910__$1);
var pno_54917 = cljs.core.nth.call(null,vec__54853_54916,(0),null);
var pmask_54918 = cljs.core.nth.call(null,vec__54853_54916,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_54917,"$ = ",pmask_54918,";");

var G__54919 = cljs.core.next.call(null,seq__54846_54910__$1);
var G__54920 = null;
var G__54921 = (0);
var G__54922 = (0);
seq__54846_54898 = G__54919;
chunk__54847_54899 = G__54920;
count__54848_54900 = G__54921;
i__54849_54901 = G__54922;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__54923){
var map__54924 = p__54923;
var map__54924__$1 = ((((!((map__54924 == null)))?((((map__54924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54924):map__54924);
var target = cljs.core.get.call(null,map__54924__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__54924__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__54924__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__54924__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__54924__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__54926){
var map__54927 = p__54926;
var map__54927__$1 = ((((!((map__54927 == null)))?((((map__54927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54927):map__54927);
var op = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24739__auto__ = code;
if(cljs.core.truth_(and__24739__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24739__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__49769__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__49769__auto__))){
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
var seq__54941 = cljs.core.seq.call(null,table);
var chunk__54942 = null;
var count__54943 = (0);
var i__54944 = (0);
while(true){
if((i__54944 < count__54943)){
var vec__54945 = cljs.core._nth.call(null,chunk__54942,i__54944);
var sym = cljs.core.nth.call(null,vec__54945,(0),null);
var value = cljs.core.nth.call(null,vec__54945,(1),null);
var ns_54951 = cljs.core.namespace.call(null,sym);
var name_54952 = cljs.core.name.call(null,sym);
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

var G__54953 = seq__54941;
var G__54954 = chunk__54942;
var G__54955 = count__54943;
var G__54956 = (i__54944 + (1));
seq__54941 = G__54953;
chunk__54942 = G__54954;
count__54943 = G__54955;
i__54944 = G__54956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54941);
if(temp__4657__auto__){
var seq__54941__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54941__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__54941__$1);
var G__54957 = cljs.core.chunk_rest.call(null,seq__54941__$1);
var G__54958 = c__25562__auto__;
var G__54959 = cljs.core.count.call(null,c__25562__auto__);
var G__54960 = (0);
seq__54941 = G__54957;
chunk__54942 = G__54958;
count__54943 = G__54959;
i__54944 = G__54960;
continue;
} else {
var vec__54948 = cljs.core.first.call(null,seq__54941__$1);
var sym = cljs.core.nth.call(null,vec__54948,(0),null);
var value = cljs.core.nth.call(null,vec__54948,(1),null);
var ns_54961 = cljs.core.namespace.call(null,sym);
var name_54962 = cljs.core.name.call(null,sym);
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

var G__54963 = cljs.core.next.call(null,seq__54941__$1);
var G__54964 = null;
var G__54965 = (0);
var G__54966 = (0);
seq__54941 = G__54963;
chunk__54942 = G__54964;
count__54943 = G__54965;
i__54944 = G__54966;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1478399619707