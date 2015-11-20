// Compiled by ClojureScript 1.7.122 {}
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
var args34054 = [];
var len__20259__auto___34063 = arguments.length;
var i__20260__auto___34064 = (0);
while(true){
if((i__20260__auto___34064 < len__20259__auto___34063)){
args34054.push((arguments[i__20260__auto___34064]));

var G__34065 = (i__20260__auto___34064 + (1));
i__20260__auto___34064 = G__34065;
continue;
} else {
}
break;
}

var G__34062 = args34054.length;
switch (G__34062) {
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
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34054.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__20278__auto__);

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

plumbing.core.update.cljs$lang$applyTo = (function (seq34055){
var G__34056 = cljs.core.first.call(null,seq34055);
var seq34055__$1 = cljs.core.next.call(null,seq34055);
var G__34057 = cljs.core.first.call(null,seq34055__$1);
var seq34055__$2 = cljs.core.next.call(null,seq34055__$1);
var G__34058 = cljs.core.first.call(null,seq34055__$2);
var seq34055__$3 = cljs.core.next.call(null,seq34055__$2);
var G__34059 = cljs.core.first.call(null,seq34055__$3);
var seq34055__$4 = cljs.core.next.call(null,seq34055__$3);
var G__34060 = cljs.core.first.call(null,seq34055__$4);
var seq34055__$5 = cljs.core.next.call(null,seq34055__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__34056,G__34057,G__34058,G__34059,G__34060,seq34055__$5);
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
var m_atom__26824__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34075_34081 = cljs.core.seq.call(null,m);
var chunk__34076_34082 = null;
var count__34077_34083 = (0);
var i__34078_34084 = (0);
while(true){
if((i__34078_34084 < count__34077_34083)){
var vec__34079_34085 = cljs.core._nth.call(null,chunk__34076_34082,i__34078_34084);
var k_34086 = cljs.core.nth.call(null,vec__34079_34085,(0),null);
var v_34087 = cljs.core.nth.call(null,vec__34079_34085,(1),null);
var m34074_34088 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34074_34088,k_34086,f.call(null,v_34087)));

var G__34089 = seq__34075_34081;
var G__34090 = chunk__34076_34082;
var G__34091 = count__34077_34083;
var G__34092 = (i__34078_34084 + (1));
seq__34075_34081 = G__34089;
chunk__34076_34082 = G__34090;
count__34077_34083 = G__34091;
i__34078_34084 = G__34092;
continue;
} else {
var temp__4425__auto___34093 = cljs.core.seq.call(null,seq__34075_34081);
if(temp__4425__auto___34093){
var seq__34075_34094__$1 = temp__4425__auto___34093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34075_34094__$1)){
var c__20004__auto___34095 = cljs.core.chunk_first.call(null,seq__34075_34094__$1);
var G__34096 = cljs.core.chunk_rest.call(null,seq__34075_34094__$1);
var G__34097 = c__20004__auto___34095;
var G__34098 = cljs.core.count.call(null,c__20004__auto___34095);
var G__34099 = (0);
seq__34075_34081 = G__34096;
chunk__34076_34082 = G__34097;
count__34077_34083 = G__34098;
i__34078_34084 = G__34099;
continue;
} else {
var vec__34080_34100 = cljs.core.first.call(null,seq__34075_34094__$1);
var k_34101 = cljs.core.nth.call(null,vec__34080_34100,(0),null);
var v_34102 = cljs.core.nth.call(null,vec__34080_34100,(1),null);
var m34074_34103 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34074_34103,k_34101,f.call(null,v_34102)));

var G__34104 = cljs.core.next.call(null,seq__34075_34094__$1);
var G__34105 = null;
var G__34106 = (0);
var G__34107 = (0);
seq__34075_34081 = G__34104;
chunk__34076_34082 = G__34105;
count__34077_34083 = G__34106;
i__34078_34084 = G__34107;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__26824__auto__));

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
var m_atom__26824__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34116_34122 = cljs.core.seq.call(null,m);
var chunk__34117_34123 = null;
var count__34118_34124 = (0);
var i__34119_34125 = (0);
while(true){
if((i__34119_34125 < count__34118_34124)){
var vec__34120_34126 = cljs.core._nth.call(null,chunk__34117_34123,i__34119_34125);
var k_34127 = cljs.core.nth.call(null,vec__34120_34126,(0),null);
var v_34128 = cljs.core.nth.call(null,vec__34120_34126,(1),null);
var m34115_34129 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34115_34129,f.call(null,k_34127),v_34128));

var G__34130 = seq__34116_34122;
var G__34131 = chunk__34117_34123;
var G__34132 = count__34118_34124;
var G__34133 = (i__34119_34125 + (1));
seq__34116_34122 = G__34130;
chunk__34117_34123 = G__34131;
count__34118_34124 = G__34132;
i__34119_34125 = G__34133;
continue;
} else {
var temp__4425__auto___34134 = cljs.core.seq.call(null,seq__34116_34122);
if(temp__4425__auto___34134){
var seq__34116_34135__$1 = temp__4425__auto___34134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34116_34135__$1)){
var c__20004__auto___34136 = cljs.core.chunk_first.call(null,seq__34116_34135__$1);
var G__34137 = cljs.core.chunk_rest.call(null,seq__34116_34135__$1);
var G__34138 = c__20004__auto___34136;
var G__34139 = cljs.core.count.call(null,c__20004__auto___34136);
var G__34140 = (0);
seq__34116_34122 = G__34137;
chunk__34117_34123 = G__34138;
count__34118_34124 = G__34139;
i__34119_34125 = G__34140;
continue;
} else {
var vec__34121_34141 = cljs.core.first.call(null,seq__34116_34135__$1);
var k_34142 = cljs.core.nth.call(null,vec__34121_34141,(0),null);
var v_34143 = cljs.core.nth.call(null,vec__34121_34141,(1),null);
var m34115_34144 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34115_34144,f.call(null,k_34142),v_34143));

var G__34145 = cljs.core.next.call(null,seq__34116_34135__$1);
var G__34146 = null;
var G__34147 = (0);
var G__34148 = (0);
seq__34116_34122 = G__34145;
chunk__34117_34123 = G__34146;
count__34118_34124 = G__34147;
i__34119_34125 = G__34148;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__26824__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__26824__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34155_34159 = cljs.core.seq.call(null,ks);
var chunk__34156_34160 = null;
var count__34157_34161 = (0);
var i__34158_34162 = (0);
while(true){
if((i__34158_34162 < count__34157_34161)){
var k_34163 = cljs.core._nth.call(null,chunk__34156_34160,i__34158_34162);
var m34154_34164 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34154_34164,k_34163,f.call(null,k_34163)));

var G__34165 = seq__34155_34159;
var G__34166 = chunk__34156_34160;
var G__34167 = count__34157_34161;
var G__34168 = (i__34158_34162 + (1));
seq__34155_34159 = G__34165;
chunk__34156_34160 = G__34166;
count__34157_34161 = G__34167;
i__34158_34162 = G__34168;
continue;
} else {
var temp__4425__auto___34169 = cljs.core.seq.call(null,seq__34155_34159);
if(temp__4425__auto___34169){
var seq__34155_34170__$1 = temp__4425__auto___34169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34155_34170__$1)){
var c__20004__auto___34171 = cljs.core.chunk_first.call(null,seq__34155_34170__$1);
var G__34172 = cljs.core.chunk_rest.call(null,seq__34155_34170__$1);
var G__34173 = c__20004__auto___34171;
var G__34174 = cljs.core.count.call(null,c__20004__auto___34171);
var G__34175 = (0);
seq__34155_34159 = G__34172;
chunk__34156_34160 = G__34173;
count__34157_34161 = G__34174;
i__34158_34162 = G__34175;
continue;
} else {
var k_34176 = cljs.core.first.call(null,seq__34155_34170__$1);
var m34154_34177 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34154_34177,k_34176,f.call(null,k_34176)));

var G__34178 = cljs.core.next.call(null,seq__34155_34170__$1);
var G__34179 = null;
var G__34180 = (0);
var G__34181 = (0);
seq__34155_34159 = G__34178;
chunk__34156_34160 = G__34179;
count__34157_34161 = G__34180;
i__34158_34162 = G__34181;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__26824__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__26824__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34188_34192 = cljs.core.seq.call(null,vs);
var chunk__34189_34193 = null;
var count__34190_34194 = (0);
var i__34191_34195 = (0);
while(true){
if((i__34191_34195 < count__34190_34194)){
var v_34196 = cljs.core._nth.call(null,chunk__34189_34193,i__34191_34195);
var m34187_34197 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34187_34197,f.call(null,v_34196),v_34196));

var G__34198 = seq__34188_34192;
var G__34199 = chunk__34189_34193;
var G__34200 = count__34190_34194;
var G__34201 = (i__34191_34195 + (1));
seq__34188_34192 = G__34198;
chunk__34189_34193 = G__34199;
count__34190_34194 = G__34200;
i__34191_34195 = G__34201;
continue;
} else {
var temp__4425__auto___34202 = cljs.core.seq.call(null,seq__34188_34192);
if(temp__4425__auto___34202){
var seq__34188_34203__$1 = temp__4425__auto___34202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34188_34203__$1)){
var c__20004__auto___34204 = cljs.core.chunk_first.call(null,seq__34188_34203__$1);
var G__34205 = cljs.core.chunk_rest.call(null,seq__34188_34203__$1);
var G__34206 = c__20004__auto___34204;
var G__34207 = cljs.core.count.call(null,c__20004__auto___34204);
var G__34208 = (0);
seq__34188_34192 = G__34205;
chunk__34189_34193 = G__34206;
count__34190_34194 = G__34207;
i__34191_34195 = G__34208;
continue;
} else {
var v_34209 = cljs.core.first.call(null,seq__34188_34203__$1);
var m34187_34210 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34187_34210,f.call(null,v_34209),v_34209));

var G__34211 = cljs.core.next.call(null,seq__34188_34203__$1);
var G__34212 = null;
var G__34213 = (0);
var G__34214 = (0);
seq__34188_34192 = G__34211;
chunk__34189_34193 = G__34212;
count__34190_34194 = G__34213;
i__34191_34195 = G__34214;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__26824__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__34215){
var vec__34217 = p__34215;
var k = cljs.core.nth.call(null,vec__34217,(0),null);
var ks = cljs.core.nthnext.call(null,vec__34217,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__19189__auto__ = ks;
if(cljs.core.truth_(and__19189__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__19189__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
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
var m_atom__26824__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34226_34232 = cljs.core.seq.call(null,x);
var chunk__34227_34233 = null;
var count__34228_34234 = (0);
var i__34229_34235 = (0);
while(true){
if((i__34229_34235 < count__34228_34234)){
var vec__34230_34236 = cljs.core._nth.call(null,chunk__34227_34233,i__34229_34235);
var k_34237 = cljs.core.nth.call(null,vec__34230_34236,(0),null);
var v_34238 = cljs.core.nth.call(null,vec__34230_34236,(1),null);
var m34225_34239 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34225_34239,((typeof k_34237 === 'string')?cljs.core.keyword.call(null,k_34237):k_34237),plumbing$core$keywordize_map.call(null,v_34238)));

var G__34240 = seq__34226_34232;
var G__34241 = chunk__34227_34233;
var G__34242 = count__34228_34234;
var G__34243 = (i__34229_34235 + (1));
seq__34226_34232 = G__34240;
chunk__34227_34233 = G__34241;
count__34228_34234 = G__34242;
i__34229_34235 = G__34243;
continue;
} else {
var temp__4425__auto___34244 = cljs.core.seq.call(null,seq__34226_34232);
if(temp__4425__auto___34244){
var seq__34226_34245__$1 = temp__4425__auto___34244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34226_34245__$1)){
var c__20004__auto___34246 = cljs.core.chunk_first.call(null,seq__34226_34245__$1);
var G__34247 = cljs.core.chunk_rest.call(null,seq__34226_34245__$1);
var G__34248 = c__20004__auto___34246;
var G__34249 = cljs.core.count.call(null,c__20004__auto___34246);
var G__34250 = (0);
seq__34226_34232 = G__34247;
chunk__34227_34233 = G__34248;
count__34228_34234 = G__34249;
i__34229_34235 = G__34250;
continue;
} else {
var vec__34231_34251 = cljs.core.first.call(null,seq__34226_34245__$1);
var k_34252 = cljs.core.nth.call(null,vec__34231_34251,(0),null);
var v_34253 = cljs.core.nth.call(null,vec__34231_34251,(1),null);
var m34225_34254 = cljs.core.deref.call(null,m_atom__26824__auto__);
cljs.core.reset_BANG_.call(null,m_atom__26824__auto__,cljs.core.assoc_BANG_.call(null,m34225_34254,((typeof k_34252 === 'string')?cljs.core.keyword.call(null,k_34252):k_34252),plumbing$core$keywordize_map.call(null,v_34253)));

var G__34255 = cljs.core.next.call(null,seq__34226_34245__$1);
var G__34256 = null;
var G__34257 = (0);
var G__34258 = (0);
seq__34226_34232 = G__34255;
chunk__34227_34233 = G__34256;
count__34228_34234 = G__34257;
i__34229_34235 = G__34258;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__26824__auto__));
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
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__26905__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__26905__auto__);
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
var G__34259 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__34260 = cljs.core.next.call(null,ks);
m = G__34259;
ks = G__34260;
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
var args__20266__auto__ = [];
var len__20259__auto___34271 = arguments.length;
var i__20260__auto___34272 = (0);
while(true){
if((i__20260__auto___34272 < len__20259__auto___34271)){
args__20266__auto__.push((arguments[i__20260__auto___34272]));

var G__34273 = (i__20260__auto___34272 + (1));
i__20260__auto___34272 = G__34273;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__19201__auto__ = m;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__19973__auto__ = (function plumbing$core$iter__34263(s__34264){
return (new cljs.core.LazySeq(null,(function (){
var s__34264__$1 = s__34264;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34264__$1);
if(temp__4425__auto__){
var s__34264__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34264__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__34264__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__34266 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__34265 = (0);
while(true){
if((i__34265 < size__19972__auto__)){
var vec__34269 = cljs.core._nth.call(null,c__19971__auto__,i__34265);
var k = cljs.core.nth.call(null,vec__34269,(0),null);
var v = cljs.core.nth.call(null,vec__34269,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__34266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34274 = (i__34265 + (1));
i__34265 = G__34274;
continue;
} else {
var G__34275 = (i__34265 + (1));
i__34265 = G__34275;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34266),plumbing$core$iter__34263.call(null,cljs.core.chunk_rest.call(null,s__34264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34266),null);
}
} else {
var vec__34270 = cljs.core.first.call(null,s__34264__$2);
var k = cljs.core.nth.call(null,vec__34270,(0),null);
var v = cljs.core.nth.call(null,vec__34270,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__34263.call(null,cljs.core.rest.call(null,s__34264__$2)));
} else {
var G__34276 = cljs.core.rest.call(null,s__34264__$2);
s__34264__$1 = G__34276;
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
return iter__19973__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq34261){
var G__34262 = cljs.core.first.call(null,seq34261);
var seq34261__$1 = cljs.core.next.call(null,seq34261);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__34262,seq34261__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__20266__auto__ = [];
var len__20259__auto___34281 = arguments.length;
var i__20260__auto___34282 = (0);
while(true){
if((i__20260__auto___34282 < len__20259__auto___34281)){
args__20266__auto__.push((arguments[i__20260__auto___34282]));

var G__34283 = (i__20260__auto___34282 + (1));
i__20260__auto___34282 = G__34283;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((3) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20267__auto__);
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq34277){
var G__34278 = cljs.core.first.call(null,seq34277);
var seq34277__$1 = cljs.core.next.call(null,seq34277);
var G__34279 = cljs.core.first.call(null,seq34277__$1);
var seq34277__$2 = cljs.core.next.call(null,seq34277__$1);
var G__34280 = cljs.core.first.call(null,seq34277__$2);
var seq34277__$3 = cljs.core.next.call(null,seq34277__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__34278,G__34279,G__34280,seq34277__$3);
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
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
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
var args34284 = [];
var len__20259__auto___34287 = arguments.length;
var i__20260__auto___34288 = (0);
while(true){
if((i__20260__auto___34288 < len__20259__auto___34287)){
args34284.push((arguments[i__20260__auto___34288]));

var G__34289 = (i__20260__auto___34288 + (1));
i__20260__auto___34288 = G__34289;
continue;
} else {
}
break;
}

var G__34286 = args34284.length;
switch (G__34286) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34284.length)].join('')));

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
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
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
var iter__19973__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__34295(s__34296){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__34296__$1 = s__34296;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34296__$1);
if(temp__4425__auto__){
var s__34296__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34296__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__34296__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__34298 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__34297 = (0);
while(true){
if((i__34297 < size__19972__auto__)){
var x = cljs.core._nth.call(null,c__19971__auto__,i__34297);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__34298,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__34299 = (i__34297 + (1));
i__34297 = G__34299;
continue;
} else {
var G__34300 = (i__34297 + (1));
i__34297 = G__34300;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34298),plumbing$core$distinct_by_$_iter__34295.call(null,cljs.core.chunk_rest.call(null,s__34296__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34298),null);
}
} else {
var x = cljs.core.first.call(null,s__34296__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__34295.call(null,cljs.core.rest.call(null,s__34296__$2)));
} else {
var G__34301 = cljs.core.rest.call(null,s__34296__$2);
s__34296__$1 = G__34301;
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
return iter__19973__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__20266__auto__ = [];
var len__20259__auto___34303 = arguments.length;
var i__20260__auto___34304 = (0);
while(true){
if((i__20260__auto___34304 < len__20259__auto___34303)){
args__20266__auto__.push((arguments[i__20260__auto___34304]));

var G__34305 = (i__20260__auto___34304 + (1));
i__20260__auto___34304 = G__34305;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((0) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__20267__auto__);
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq34302){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34302));
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
var args34306 = [];
var len__20259__auto___34312 = arguments.length;
var i__20260__auto___34313 = (0);
while(true){
if((i__20260__auto___34313 < len__20259__auto___34312)){
args34306.push((arguments[i__20260__auto___34313]));

var G__34314 = (i__20260__auto___34313 + (1));
i__20260__auto___34313 = G__34314;
continue;
} else {
}
break;
}

var G__34311 = args34306.length;
switch (G__34311) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34306.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20278__auto__);

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
var G__34316 = plumbing.core.conj_when.call(null,coll,x);
var G__34317 = cljs.core.first.call(null,xs);
var G__34318 = cljs.core.next.call(null,xs);
coll = G__34316;
x = G__34317;
xs = G__34318;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq34307){
var G__34308 = cljs.core.first.call(null,seq34307);
var seq34307__$1 = cljs.core.next.call(null,seq34307);
var G__34309 = cljs.core.first.call(null,seq34307__$1);
var seq34307__$2 = cljs.core.next.call(null,seq34307__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__34308,G__34309,seq34307__$2);
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
var args34320 = [];
var len__20259__auto___34326 = arguments.length;
var i__20260__auto___34327 = (0);
while(true){
if((i__20260__auto___34327 < len__20259__auto___34326)){
args34320.push((arguments[i__20260__auto___34327]));

var G__34328 = (i__20260__auto___34327 + (1));
i__20260__auto___34327 = G__34328;
continue;
} else {
}
break;
}

var G__34325 = args34320.length;
switch (G__34325) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34320.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20278__auto__);

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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__34319_SHARP_){
return cljs.core.apply.call(null,f,p1__34319_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq34321){
var G__34322 = cljs.core.first.call(null,seq34321);
var seq34321__$1 = cljs.core.next.call(null,seq34321);
var G__34323 = cljs.core.first.call(null,seq34321__$1);
var seq34321__$2 = cljs.core.next.call(null,seq34321__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34322,G__34323,seq34321__$2);
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
var args34330 = [];
var len__20259__auto___34336 = arguments.length;
var i__20260__auto___34337 = (0);
while(true){
if((i__20260__auto___34337 < len__20259__auto___34336)){
args34330.push((arguments[i__20260__auto___34337]));

var G__34338 = (i__20260__auto___34337 + (1));
i__20260__auto___34337 = G__34338;
continue;
} else {
}
break;
}

var G__34335 = args34330.length;
switch (G__34335) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20278__auto__ = (new cljs.core.IndexedSeq(args34330.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20278__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq34331){
var G__34332 = cljs.core.first.call(null,seq34331);
var seq34331__$1 = cljs.core.next.call(null,seq34331);
var G__34333 = cljs.core.first.call(null,seq34331__$1);
var seq34331__$2 = cljs.core.next.call(null,seq34331__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__34332,G__34333,seq34331__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map?rel=1444632657353