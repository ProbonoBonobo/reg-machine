// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args55927 = [];
var len__25826__auto___55936 = arguments.length;
var i__25827__auto___55937 = (0);
while(true){
if((i__25827__auto___55937 < len__25826__auto___55936)){
args55927.push((arguments[i__25827__auto___55937]));

var G__55938 = (i__25827__auto___55937 + (1));
i__25827__auto___55937 = G__55938;
continue;
} else {
}
break;
}

var G__55935 = args55927.length;
switch (G__55935) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args55927.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25845__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq55928){
var G__55929 = cljs.core.first.call(null,seq55928);
var seq55928__$1 = cljs.core.next.call(null,seq55928);
var G__55930 = cljs.core.first.call(null,seq55928__$1);
var seq55928__$2 = cljs.core.next.call(null,seq55928__$1);
var G__55931 = cljs.core.first.call(null,seq55928__$2);
var seq55928__$3 = cljs.core.next.call(null,seq55928__$2);
var G__55932 = cljs.core.first.call(null,seq55928__$3);
var seq55928__$4 = cljs.core.next.call(null,seq55928__$3);
var G__55933 = cljs.core.first.call(null,seq55928__$4);
var seq55928__$5 = cljs.core.next.call(null,seq55928__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__55929,G__55930,G__55931,G__55932,G__55933,seq55928__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__36338__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__55952_55962 = cljs.core.seq.call(null,m);
var chunk__55953_55963 = null;
var count__55954_55964 = (0);
var i__55955_55965 = (0);
while(true){
if((i__55955_55965 < count__55954_55964)){
var vec__55956_55966 = cljs.core._nth.call(null,chunk__55953_55963,i__55955_55965);
var k_55967 = cljs.core.nth.call(null,vec__55956_55966,(0),null);
var v_55968 = cljs.core.nth.call(null,vec__55956_55966,(1),null);
var m55951_55969 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m55951_55969,k_55967,f.call(null,v_55968)));

var G__55970 = seq__55952_55962;
var G__55971 = chunk__55953_55963;
var G__55972 = count__55954_55964;
var G__55973 = (i__55955_55965 + (1));
seq__55952_55962 = G__55970;
chunk__55953_55963 = G__55971;
count__55954_55964 = G__55972;
i__55955_55965 = G__55973;
continue;
} else {
var temp__4657__auto___55974 = cljs.core.seq.call(null,seq__55952_55962);
if(temp__4657__auto___55974){
var seq__55952_55975__$1 = temp__4657__auto___55974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55952_55975__$1)){
var c__25562__auto___55976 = cljs.core.chunk_first.call(null,seq__55952_55975__$1);
var G__55977 = cljs.core.chunk_rest.call(null,seq__55952_55975__$1);
var G__55978 = c__25562__auto___55976;
var G__55979 = cljs.core.count.call(null,c__25562__auto___55976);
var G__55980 = (0);
seq__55952_55962 = G__55977;
chunk__55953_55963 = G__55978;
count__55954_55964 = G__55979;
i__55955_55965 = G__55980;
continue;
} else {
var vec__55959_55981 = cljs.core.first.call(null,seq__55952_55975__$1);
var k_55982 = cljs.core.nth.call(null,vec__55959_55981,(0),null);
var v_55983 = cljs.core.nth.call(null,vec__55959_55981,(1),null);
var m55951_55984 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m55951_55984,k_55982,f.call(null,v_55983)));

var G__55985 = cljs.core.next.call(null,seq__55952_55975__$1);
var G__55986 = null;
var G__55987 = (0);
var G__55988 = (0);
seq__55952_55962 = G__55985;
chunk__55953_55963 = G__55986;
count__55954_55964 = G__55987;
i__55955_55965 = G__55988;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__36338__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__36338__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__56001_56011 = cljs.core.seq.call(null,m);
var chunk__56002_56012 = null;
var count__56003_56013 = (0);
var i__56004_56014 = (0);
while(true){
if((i__56004_56014 < count__56003_56013)){
var vec__56005_56015 = cljs.core._nth.call(null,chunk__56002_56012,i__56004_56014);
var k_56016 = cljs.core.nth.call(null,vec__56005_56015,(0),null);
var v_56017 = cljs.core.nth.call(null,vec__56005_56015,(1),null);
var m56000_56018 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56000_56018,f.call(null,k_56016),v_56017));

var G__56019 = seq__56001_56011;
var G__56020 = chunk__56002_56012;
var G__56021 = count__56003_56013;
var G__56022 = (i__56004_56014 + (1));
seq__56001_56011 = G__56019;
chunk__56002_56012 = G__56020;
count__56003_56013 = G__56021;
i__56004_56014 = G__56022;
continue;
} else {
var temp__4657__auto___56023 = cljs.core.seq.call(null,seq__56001_56011);
if(temp__4657__auto___56023){
var seq__56001_56024__$1 = temp__4657__auto___56023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56001_56024__$1)){
var c__25562__auto___56025 = cljs.core.chunk_first.call(null,seq__56001_56024__$1);
var G__56026 = cljs.core.chunk_rest.call(null,seq__56001_56024__$1);
var G__56027 = c__25562__auto___56025;
var G__56028 = cljs.core.count.call(null,c__25562__auto___56025);
var G__56029 = (0);
seq__56001_56011 = G__56026;
chunk__56002_56012 = G__56027;
count__56003_56013 = G__56028;
i__56004_56014 = G__56029;
continue;
} else {
var vec__56008_56030 = cljs.core.first.call(null,seq__56001_56024__$1);
var k_56031 = cljs.core.nth.call(null,vec__56008_56030,(0),null);
var v_56032 = cljs.core.nth.call(null,vec__56008_56030,(1),null);
var m56000_56033 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56000_56033,f.call(null,k_56031),v_56032));

var G__56034 = cljs.core.next.call(null,seq__56001_56024__$1);
var G__56035 = null;
var G__56036 = (0);
var G__56037 = (0);
seq__56001_56011 = G__56034;
chunk__56002_56012 = G__56035;
count__56003_56013 = G__56036;
i__56004_56014 = G__56037;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__36338__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__36338__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__56044_56048 = cljs.core.seq.call(null,ks);
var chunk__56045_56049 = null;
var count__56046_56050 = (0);
var i__56047_56051 = (0);
while(true){
if((i__56047_56051 < count__56046_56050)){
var k_56052 = cljs.core._nth.call(null,chunk__56045_56049,i__56047_56051);
var m56043_56053 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56043_56053,k_56052,f.call(null,k_56052)));

var G__56054 = seq__56044_56048;
var G__56055 = chunk__56045_56049;
var G__56056 = count__56046_56050;
var G__56057 = (i__56047_56051 + (1));
seq__56044_56048 = G__56054;
chunk__56045_56049 = G__56055;
count__56046_56050 = G__56056;
i__56047_56051 = G__56057;
continue;
} else {
var temp__4657__auto___56058 = cljs.core.seq.call(null,seq__56044_56048);
if(temp__4657__auto___56058){
var seq__56044_56059__$1 = temp__4657__auto___56058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56044_56059__$1)){
var c__25562__auto___56060 = cljs.core.chunk_first.call(null,seq__56044_56059__$1);
var G__56061 = cljs.core.chunk_rest.call(null,seq__56044_56059__$1);
var G__56062 = c__25562__auto___56060;
var G__56063 = cljs.core.count.call(null,c__25562__auto___56060);
var G__56064 = (0);
seq__56044_56048 = G__56061;
chunk__56045_56049 = G__56062;
count__56046_56050 = G__56063;
i__56047_56051 = G__56064;
continue;
} else {
var k_56065 = cljs.core.first.call(null,seq__56044_56059__$1);
var m56043_56066 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56043_56066,k_56065,f.call(null,k_56065)));

var G__56067 = cljs.core.next.call(null,seq__56044_56059__$1);
var G__56068 = null;
var G__56069 = (0);
var G__56070 = (0);
seq__56044_56048 = G__56067;
chunk__56045_56049 = G__56068;
count__56046_56050 = G__56069;
i__56047_56051 = G__56070;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__36338__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__36338__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__56077_56081 = cljs.core.seq.call(null,vs);
var chunk__56078_56082 = null;
var count__56079_56083 = (0);
var i__56080_56084 = (0);
while(true){
if((i__56080_56084 < count__56079_56083)){
var v_56085 = cljs.core._nth.call(null,chunk__56078_56082,i__56080_56084);
var m56076_56086 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56076_56086,f.call(null,v_56085),v_56085));

var G__56087 = seq__56077_56081;
var G__56088 = chunk__56078_56082;
var G__56089 = count__56079_56083;
var G__56090 = (i__56080_56084 + (1));
seq__56077_56081 = G__56087;
chunk__56078_56082 = G__56088;
count__56079_56083 = G__56089;
i__56080_56084 = G__56090;
continue;
} else {
var temp__4657__auto___56091 = cljs.core.seq.call(null,seq__56077_56081);
if(temp__4657__auto___56091){
var seq__56077_56092__$1 = temp__4657__auto___56091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56077_56092__$1)){
var c__25562__auto___56093 = cljs.core.chunk_first.call(null,seq__56077_56092__$1);
var G__56094 = cljs.core.chunk_rest.call(null,seq__56077_56092__$1);
var G__56095 = c__25562__auto___56093;
var G__56096 = cljs.core.count.call(null,c__25562__auto___56093);
var G__56097 = (0);
seq__56077_56081 = G__56094;
chunk__56078_56082 = G__56095;
count__56079_56083 = G__56096;
i__56080_56084 = G__56097;
continue;
} else {
var v_56098 = cljs.core.first.call(null,seq__56077_56092__$1);
var m56076_56099 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56076_56099,f.call(null,v_56098),v_56098));

var G__56100 = cljs.core.next.call(null,seq__56077_56092__$1);
var G__56101 = null;
var G__56102 = (0);
var G__56103 = (0);
seq__56077_56081 = G__56100;
chunk__56078_56082 = G__56101;
count__56079_56083 = G__56102;
i__56080_56084 = G__56103;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__36338__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__56104){
var vec__56108 = p__56104;
var seq__56109 = cljs.core.seq.call(null,vec__56108);
var first__56110 = cljs.core.first.call(null,seq__56109);
var seq__56109__$1 = cljs.core.next.call(null,seq__56109);
var k = first__56110;
var ks = seq__56109__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__24739__auto__ = ks;
if(and__24739__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__36338__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__56123_56133 = cljs.core.seq.call(null,x);
var chunk__56124_56134 = null;
var count__56125_56135 = (0);
var i__56126_56136 = (0);
while(true){
if((i__56126_56136 < count__56125_56135)){
var vec__56127_56137 = cljs.core._nth.call(null,chunk__56124_56134,i__56126_56136);
var k_56138 = cljs.core.nth.call(null,vec__56127_56137,(0),null);
var v_56139 = cljs.core.nth.call(null,vec__56127_56137,(1),null);
var m56122_56140 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56122_56140,((typeof k_56138 === 'string')?cljs.core.keyword.call(null,k_56138):k_56138),plumbing$core$keywordize_map.call(null,v_56139)));

var G__56141 = seq__56123_56133;
var G__56142 = chunk__56124_56134;
var G__56143 = count__56125_56135;
var G__56144 = (i__56126_56136 + (1));
seq__56123_56133 = G__56141;
chunk__56124_56134 = G__56142;
count__56125_56135 = G__56143;
i__56126_56136 = G__56144;
continue;
} else {
var temp__4657__auto___56145 = cljs.core.seq.call(null,seq__56123_56133);
if(temp__4657__auto___56145){
var seq__56123_56146__$1 = temp__4657__auto___56145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56123_56146__$1)){
var c__25562__auto___56147 = cljs.core.chunk_first.call(null,seq__56123_56146__$1);
var G__56148 = cljs.core.chunk_rest.call(null,seq__56123_56146__$1);
var G__56149 = c__25562__auto___56147;
var G__56150 = cljs.core.count.call(null,c__25562__auto___56147);
var G__56151 = (0);
seq__56123_56133 = G__56148;
chunk__56124_56134 = G__56149;
count__56125_56135 = G__56150;
i__56126_56136 = G__56151;
continue;
} else {
var vec__56130_56152 = cljs.core.first.call(null,seq__56123_56146__$1);
var k_56153 = cljs.core.nth.call(null,vec__56130_56152,(0),null);
var v_56154 = cljs.core.nth.call(null,vec__56130_56152,(1),null);
var m56122_56155 = cljs.core.deref.call(null,m_atom__36338__auto__);
cljs.core.reset_BANG_.call(null,m_atom__36338__auto__,cljs.core.assoc_BANG_.call(null,m56122_56155,((typeof k_56153 === 'string')?cljs.core.keyword.call(null,k_56153):k_56153),plumbing$core$keywordize_map.call(null,v_56154)));

var G__56156 = cljs.core.next.call(null,seq__56123_56146__$1);
var G__56157 = null;
var G__56158 = (0);
var G__56159 = (0);
seq__56123_56133 = G__56156;
chunk__56124_56134 = G__56157;
count__56125_56135 = G__56158;
i__56126_56136 = G__56159;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__36338__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__36419__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__36419__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__56160 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__56161 = cljs.core.next.call(null,ks);
m = G__56160;
ks = G__56161;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___56180 = arguments.length;
var i__25827__auto___56181 = (0);
while(true){
if((i__25827__auto___56181 < len__25826__auto___56180)){
args__25833__auto__.push((arguments[i__25827__auto___56181]));

var G__56182 = (i__25827__auto___56181 + (1));
i__25827__auto___56181 = G__56182;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__24751__auto__ = m;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__25531__auto__ = (function plumbing$core$iter__56164(s__56165){
return (new cljs.core.LazySeq(null,(function (){
var s__56165__$1 = s__56165;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56165__$1);
if(temp__4657__auto__){
var s__56165__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56165__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__56165__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__56167 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__56166 = (0);
while(true){
if((i__56166 < size__25530__auto__)){
var vec__56174 = cljs.core._nth.call(null,c__25529__auto__,i__56166);
var k = cljs.core.nth.call(null,vec__56174,(0),null);
var v = cljs.core.nth.call(null,vec__56174,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__56167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__56183 = (i__56166 + (1));
i__56166 = G__56183;
continue;
} else {
var G__56184 = (i__56166 + (1));
i__56166 = G__56184;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56167),plumbing$core$iter__56164.call(null,cljs.core.chunk_rest.call(null,s__56165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56167),null);
}
} else {
var vec__56177 = cljs.core.first.call(null,s__56165__$2);
var k = cljs.core.nth.call(null,vec__56177,(0),null);
var v = cljs.core.nth.call(null,vec__56177,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__56164.call(null,cljs.core.rest.call(null,s__56165__$2)));
} else {
var G__56185 = cljs.core.rest.call(null,s__56165__$2);
s__56165__$1 = G__56185;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq56162){
var G__56163 = cljs.core.first.call(null,seq56162);
var seq56162__$1 = cljs.core.next.call(null,seq56162);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__56163,seq56162__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___56190 = arguments.length;
var i__25827__auto___56191 = (0);
while(true){
if((i__25827__auto___56191 < len__25826__auto___56190)){
args__25833__auto__.push((arguments[i__25827__auto___56191]));

var G__56192 = (i__25827__auto___56191 + (1));
i__25827__auto___56191 = G__56192;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq56186){
var G__56187 = cljs.core.first.call(null,seq56186);
var seq56186__$1 = cljs.core.next.call(null,seq56186);
var G__56188 = cljs.core.first.call(null,seq56186__$1);
var seq56186__$2 = cljs.core.next.call(null,seq56186__$1);
var G__56189 = cljs.core.first.call(null,seq56186__$2);
var seq56186__$3 = cljs.core.next.call(null,seq56186__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__56187,G__56188,G__56189,seq56186__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next.call(null,s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args56193 = [];
var len__25826__auto___56196 = arguments.length;
var i__25827__auto___56197 = (0);
while(true){
if((i__25827__auto___56197 < len__25826__auto___56196)){
args56193.push((arguments[i__25827__auto___56197]));

var G__56198 = (i__25827__auto___56197 + (1));
i__25827__auto___56197 = G__56198;
continue;
} else {
}
break;
}

var G__56195 = args56193.length;
switch (G__56195) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56193.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq.call(null,xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__25531__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__56204(s__56205){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__56205__$1 = s__56205;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56205__$1);
if(temp__4657__auto__){
var s__56205__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56205__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__56205__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__56207 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__56206 = (0);
while(true){
if((i__56206 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__56206);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__56207,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__56208 = (i__56206 + (1));
i__56206 = G__56208;
continue;
} else {
var G__56209 = (i__56206 + (1));
i__56206 = G__56209;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56207),plumbing$core$distinct_by_$_iter__56204.call(null,cljs.core.chunk_rest.call(null,s__56205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56207),null);
}
} else {
var x = cljs.core.first.call(null,s__56205__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__56204.call(null,cljs.core.rest.call(null,s__56205__$2)));
} else {
var G__56210 = cljs.core.rest.call(null,s__56205__$2);
s__56205__$1 = G__56210;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__25531__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__25833__auto__ = [];
var len__25826__auto___56212 = arguments.length;
var i__25827__auto___56213 = (0);
while(true){
if((i__25827__auto___56213 < len__25826__auto___56212)){
args__25833__auto__.push((arguments[i__25827__auto___56213]));

var G__56214 = (i__25827__auto___56213 + (1));
i__25827__auto___56213 = G__56214;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq56211){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56211));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args56215 = [];
var len__25826__auto___56221 = arguments.length;
var i__25827__auto___56222 = (0);
while(true){
if((i__25827__auto___56222 < len__25826__auto___56221)){
args56215.push((arguments[i__25827__auto___56222]));

var G__56223 = (i__25827__auto___56222 + (1));
i__25827__auto___56222 = G__56223;
continue;
} else {
}
break;
}

var G__56220 = args56215.length;
switch (G__56220) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args56215.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__56225 = plumbing.core.conj_when.call(null,coll,x);
var G__56226 = cljs.core.first.call(null,xs);
var G__56227 = cljs.core.next.call(null,xs);
coll = G__56225;
x = G__56226;
xs = G__56227;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq56216){
var G__56217 = cljs.core.first.call(null,seq56216);
var seq56216__$1 = cljs.core.next.call(null,seq56216);
var G__56218 = cljs.core.first.call(null,seq56216__$1);
var seq56216__$2 = cljs.core.next.call(null,seq56216__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__56217,G__56218,seq56216__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args56229 = [];
var len__25826__auto___56235 = arguments.length;
var i__25827__auto___56236 = (0);
while(true){
if((i__25827__auto___56236 < len__25826__auto___56235)){
args56229.push((arguments[i__25827__auto___56236]));

var G__56237 = (i__25827__auto___56236 + (1));
i__25827__auto___56236 = G__56237;
continue;
} else {
}
break;
}

var G__56234 = args56229.length;
switch (G__56234) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args56229.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__56228_SHARP_){
return cljs.core.apply.call(null,f,p1__56228_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq56230){
var G__56231 = cljs.core.first.call(null,seq56230);
var seq56230__$1 = cljs.core.next.call(null,seq56230);
var G__56232 = cljs.core.first.call(null,seq56230__$1);
var seq56230__$2 = cljs.core.next.call(null,seq56230__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56231,G__56232,seq56230__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args56239 = [];
var len__25826__auto___56245 = arguments.length;
var i__25827__auto___56246 = (0);
while(true){
if((i__25827__auto___56246 < len__25826__auto___56245)){
args56239.push((arguments[i__25827__auto___56246]));

var G__56247 = (i__25827__auto___56246 + (1));
i__25827__auto___56246 = G__56247;
continue;
} else {
}
break;
}

var G__56244 = args56239.length;
switch (G__56244) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args56239.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq56240){
var G__56241 = cljs.core.first.call(null,seq56240);
var seq56240__$1 = cljs.core.next.call(null,seq56240);
var G__56242 = cljs.core.first.call(null,seq56240__$1);
var seq56240__$2 = cljs.core.next.call(null,seq56240__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__56241,G__56242,seq56240__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1478399622876