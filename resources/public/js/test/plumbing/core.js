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
var args26128 = [];
var len__5619__auto___26137 = arguments.length;
var i__5620__auto___26138 = (0);
while(true){
if((i__5620__auto___26138 < len__5619__auto___26137)){
args26128.push((arguments[i__5620__auto___26138]));

var G__26139 = (i__5620__auto___26138 + (1));
i__5620__auto___26138 = G__26139;
continue;
} else {
}
break;
}

var G__26136 = args26128.length;
switch (G__26136) {
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
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args26128.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5638__auto__);

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

plumbing.core.update.cljs$lang$applyTo = (function (seq26129){
var G__26130 = cljs.core.first.call(null,seq26129);
var seq26129__$1 = cljs.core.next.call(null,seq26129);
var G__26131 = cljs.core.first.call(null,seq26129__$1);
var seq26129__$2 = cljs.core.next.call(null,seq26129__$1);
var G__26132 = cljs.core.first.call(null,seq26129__$2);
var seq26129__$3 = cljs.core.next.call(null,seq26129__$2);
var G__26133 = cljs.core.first.call(null,seq26129__$3);
var seq26129__$4 = cljs.core.next.call(null,seq26129__$3);
var G__26134 = cljs.core.first.call(null,seq26129__$4);
var seq26129__$5 = cljs.core.next.call(null,seq26129__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__26130,G__26131,G__26132,G__26133,G__26134,seq26129__$5);
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
var m_atom__14001__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26149_26155 = cljs.core.seq.call(null,m);
var chunk__26150_26156 = null;
var count__26151_26157 = (0);
var i__26152_26158 = (0);
while(true){
if((i__26152_26158 < count__26151_26157)){
var vec__26153_26159 = cljs.core._nth.call(null,chunk__26150_26156,i__26152_26158);
var k_26160 = cljs.core.nth.call(null,vec__26153_26159,(0),null);
var v_26161 = cljs.core.nth.call(null,vec__26153_26159,(1),null);
var m26148_26162 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26148_26162,k_26160,f.call(null,v_26161)));

var G__26163 = seq__26149_26155;
var G__26164 = chunk__26150_26156;
var G__26165 = count__26151_26157;
var G__26166 = (i__26152_26158 + (1));
seq__26149_26155 = G__26163;
chunk__26150_26156 = G__26164;
count__26151_26157 = G__26165;
i__26152_26158 = G__26166;
continue;
} else {
var temp__4425__auto___26167 = cljs.core.seq.call(null,seq__26149_26155);
if(temp__4425__auto___26167){
var seq__26149_26168__$1 = temp__4425__auto___26167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26149_26168__$1)){
var c__5364__auto___26169 = cljs.core.chunk_first.call(null,seq__26149_26168__$1);
var G__26170 = cljs.core.chunk_rest.call(null,seq__26149_26168__$1);
var G__26171 = c__5364__auto___26169;
var G__26172 = cljs.core.count.call(null,c__5364__auto___26169);
var G__26173 = (0);
seq__26149_26155 = G__26170;
chunk__26150_26156 = G__26171;
count__26151_26157 = G__26172;
i__26152_26158 = G__26173;
continue;
} else {
var vec__26154_26174 = cljs.core.first.call(null,seq__26149_26168__$1);
var k_26175 = cljs.core.nth.call(null,vec__26154_26174,(0),null);
var v_26176 = cljs.core.nth.call(null,vec__26154_26174,(1),null);
var m26148_26177 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26148_26177,k_26175,f.call(null,v_26176)));

var G__26178 = cljs.core.next.call(null,seq__26149_26168__$1);
var G__26179 = null;
var G__26180 = (0);
var G__26181 = (0);
seq__26149_26155 = G__26178;
chunk__26150_26156 = G__26179;
count__26151_26157 = G__26180;
i__26152_26158 = G__26181;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14001__auto__));

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
var m_atom__14001__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26190_26196 = cljs.core.seq.call(null,m);
var chunk__26191_26197 = null;
var count__26192_26198 = (0);
var i__26193_26199 = (0);
while(true){
if((i__26193_26199 < count__26192_26198)){
var vec__26194_26200 = cljs.core._nth.call(null,chunk__26191_26197,i__26193_26199);
var k_26201 = cljs.core.nth.call(null,vec__26194_26200,(0),null);
var v_26202 = cljs.core.nth.call(null,vec__26194_26200,(1),null);
var m26189_26203 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26189_26203,f.call(null,k_26201),v_26202));

var G__26204 = seq__26190_26196;
var G__26205 = chunk__26191_26197;
var G__26206 = count__26192_26198;
var G__26207 = (i__26193_26199 + (1));
seq__26190_26196 = G__26204;
chunk__26191_26197 = G__26205;
count__26192_26198 = G__26206;
i__26193_26199 = G__26207;
continue;
} else {
var temp__4425__auto___26208 = cljs.core.seq.call(null,seq__26190_26196);
if(temp__4425__auto___26208){
var seq__26190_26209__$1 = temp__4425__auto___26208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26190_26209__$1)){
var c__5364__auto___26210 = cljs.core.chunk_first.call(null,seq__26190_26209__$1);
var G__26211 = cljs.core.chunk_rest.call(null,seq__26190_26209__$1);
var G__26212 = c__5364__auto___26210;
var G__26213 = cljs.core.count.call(null,c__5364__auto___26210);
var G__26214 = (0);
seq__26190_26196 = G__26211;
chunk__26191_26197 = G__26212;
count__26192_26198 = G__26213;
i__26193_26199 = G__26214;
continue;
} else {
var vec__26195_26215 = cljs.core.first.call(null,seq__26190_26209__$1);
var k_26216 = cljs.core.nth.call(null,vec__26195_26215,(0),null);
var v_26217 = cljs.core.nth.call(null,vec__26195_26215,(1),null);
var m26189_26218 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26189_26218,f.call(null,k_26216),v_26217));

var G__26219 = cljs.core.next.call(null,seq__26190_26209__$1);
var G__26220 = null;
var G__26221 = (0);
var G__26222 = (0);
seq__26190_26196 = G__26219;
chunk__26191_26197 = G__26220;
count__26192_26198 = G__26221;
i__26193_26199 = G__26222;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14001__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__14001__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26229_26233 = cljs.core.seq.call(null,ks);
var chunk__26230_26234 = null;
var count__26231_26235 = (0);
var i__26232_26236 = (0);
while(true){
if((i__26232_26236 < count__26231_26235)){
var k_26237 = cljs.core._nth.call(null,chunk__26230_26234,i__26232_26236);
var m26228_26238 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26228_26238,k_26237,f.call(null,k_26237)));

var G__26239 = seq__26229_26233;
var G__26240 = chunk__26230_26234;
var G__26241 = count__26231_26235;
var G__26242 = (i__26232_26236 + (1));
seq__26229_26233 = G__26239;
chunk__26230_26234 = G__26240;
count__26231_26235 = G__26241;
i__26232_26236 = G__26242;
continue;
} else {
var temp__4425__auto___26243 = cljs.core.seq.call(null,seq__26229_26233);
if(temp__4425__auto___26243){
var seq__26229_26244__$1 = temp__4425__auto___26243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26229_26244__$1)){
var c__5364__auto___26245 = cljs.core.chunk_first.call(null,seq__26229_26244__$1);
var G__26246 = cljs.core.chunk_rest.call(null,seq__26229_26244__$1);
var G__26247 = c__5364__auto___26245;
var G__26248 = cljs.core.count.call(null,c__5364__auto___26245);
var G__26249 = (0);
seq__26229_26233 = G__26246;
chunk__26230_26234 = G__26247;
count__26231_26235 = G__26248;
i__26232_26236 = G__26249;
continue;
} else {
var k_26250 = cljs.core.first.call(null,seq__26229_26244__$1);
var m26228_26251 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26228_26251,k_26250,f.call(null,k_26250)));

var G__26252 = cljs.core.next.call(null,seq__26229_26244__$1);
var G__26253 = null;
var G__26254 = (0);
var G__26255 = (0);
seq__26229_26233 = G__26252;
chunk__26230_26234 = G__26253;
count__26231_26235 = G__26254;
i__26232_26236 = G__26255;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14001__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__14001__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26262_26266 = cljs.core.seq.call(null,vs);
var chunk__26263_26267 = null;
var count__26264_26268 = (0);
var i__26265_26269 = (0);
while(true){
if((i__26265_26269 < count__26264_26268)){
var v_26270 = cljs.core._nth.call(null,chunk__26263_26267,i__26265_26269);
var m26261_26271 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26261_26271,f.call(null,v_26270),v_26270));

var G__26272 = seq__26262_26266;
var G__26273 = chunk__26263_26267;
var G__26274 = count__26264_26268;
var G__26275 = (i__26265_26269 + (1));
seq__26262_26266 = G__26272;
chunk__26263_26267 = G__26273;
count__26264_26268 = G__26274;
i__26265_26269 = G__26275;
continue;
} else {
var temp__4425__auto___26276 = cljs.core.seq.call(null,seq__26262_26266);
if(temp__4425__auto___26276){
var seq__26262_26277__$1 = temp__4425__auto___26276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26262_26277__$1)){
var c__5364__auto___26278 = cljs.core.chunk_first.call(null,seq__26262_26277__$1);
var G__26279 = cljs.core.chunk_rest.call(null,seq__26262_26277__$1);
var G__26280 = c__5364__auto___26278;
var G__26281 = cljs.core.count.call(null,c__5364__auto___26278);
var G__26282 = (0);
seq__26262_26266 = G__26279;
chunk__26263_26267 = G__26280;
count__26264_26268 = G__26281;
i__26265_26269 = G__26282;
continue;
} else {
var v_26283 = cljs.core.first.call(null,seq__26262_26277__$1);
var m26261_26284 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26261_26284,f.call(null,v_26283),v_26283));

var G__26285 = cljs.core.next.call(null,seq__26262_26277__$1);
var G__26286 = null;
var G__26287 = (0);
var G__26288 = (0);
seq__26262_26266 = G__26285;
chunk__26263_26267 = G__26286;
count__26264_26268 = G__26287;
i__26265_26269 = G__26288;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14001__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__26289){
var vec__26291 = p__26289;
var k = cljs.core.nth.call(null,vec__26291,(0),null);
var ks = cljs.core.nthnext.call(null,vec__26291,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__4549__auto__ = ks;
if(cljs.core.truth_(and__4549__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__4549__auto__;
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
var m_atom__14001__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26300_26306 = cljs.core.seq.call(null,x);
var chunk__26301_26307 = null;
var count__26302_26308 = (0);
var i__26303_26309 = (0);
while(true){
if((i__26303_26309 < count__26302_26308)){
var vec__26304_26310 = cljs.core._nth.call(null,chunk__26301_26307,i__26303_26309);
var k_26311 = cljs.core.nth.call(null,vec__26304_26310,(0),null);
var v_26312 = cljs.core.nth.call(null,vec__26304_26310,(1),null);
var m26299_26313 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26299_26313,((typeof k_26311 === 'string')?cljs.core.keyword.call(null,k_26311):k_26311),plumbing$core$keywordize_map.call(null,v_26312)));

var G__26314 = seq__26300_26306;
var G__26315 = chunk__26301_26307;
var G__26316 = count__26302_26308;
var G__26317 = (i__26303_26309 + (1));
seq__26300_26306 = G__26314;
chunk__26301_26307 = G__26315;
count__26302_26308 = G__26316;
i__26303_26309 = G__26317;
continue;
} else {
var temp__4425__auto___26318 = cljs.core.seq.call(null,seq__26300_26306);
if(temp__4425__auto___26318){
var seq__26300_26319__$1 = temp__4425__auto___26318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26300_26319__$1)){
var c__5364__auto___26320 = cljs.core.chunk_first.call(null,seq__26300_26319__$1);
var G__26321 = cljs.core.chunk_rest.call(null,seq__26300_26319__$1);
var G__26322 = c__5364__auto___26320;
var G__26323 = cljs.core.count.call(null,c__5364__auto___26320);
var G__26324 = (0);
seq__26300_26306 = G__26321;
chunk__26301_26307 = G__26322;
count__26302_26308 = G__26323;
i__26303_26309 = G__26324;
continue;
} else {
var vec__26305_26325 = cljs.core.first.call(null,seq__26300_26319__$1);
var k_26326 = cljs.core.nth.call(null,vec__26305_26325,(0),null);
var v_26327 = cljs.core.nth.call(null,vec__26305_26325,(1),null);
var m26299_26328 = cljs.core.deref.call(null,m_atom__14001__auto__);
cljs.core.reset_BANG_.call(null,m_atom__14001__auto__,cljs.core.assoc_BANG_.call(null,m26299_26328,((typeof k_26326 === 'string')?cljs.core.keyword.call(null,k_26326):k_26326),plumbing$core$keywordize_map.call(null,v_26327)));

var G__26329 = cljs.core.next.call(null,seq__26300_26319__$1);
var G__26330 = null;
var G__26331 = (0);
var G__26332 = (0);
seq__26300_26306 = G__26329;
chunk__26301_26307 = G__26330;
count__26302_26308 = G__26331;
i__26303_26309 = G__26332;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14001__auto__));
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
var pair__14082__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__14082__auto__);
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
var G__26333 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__26334 = cljs.core.next.call(null,ks);
m = G__26333;
ks = G__26334;
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
var args__5626__auto__ = [];
var len__5619__auto___26345 = arguments.length;
var i__5620__auto___26346 = (0);
while(true){
if((i__5620__auto___26346 < len__5619__auto___26345)){
args__5626__auto__.push((arguments[i__5620__auto___26346]));

var G__26347 = (i__5620__auto___26346 + (1));
i__5620__auto___26346 = G__26347;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4561__auto__ = m;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5333__auto__ = (function plumbing$core$iter__26337(s__26338){
return (new cljs.core.LazySeq(null,(function (){
var s__26338__$1 = s__26338;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26338__$1);
if(temp__4425__auto__){
var s__26338__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26338__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__26338__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__26340 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__26339 = (0);
while(true){
if((i__26339 < size__5332__auto__)){
var vec__26343 = cljs.core._nth.call(null,c__5331__auto__,i__26339);
var k = cljs.core.nth.call(null,vec__26343,(0),null);
var v = cljs.core.nth.call(null,vec__26343,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__26340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26348 = (i__26339 + (1));
i__26339 = G__26348;
continue;
} else {
var G__26349 = (i__26339 + (1));
i__26339 = G__26349;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26340),plumbing$core$iter__26337.call(null,cljs.core.chunk_rest.call(null,s__26338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26340),null);
}
} else {
var vec__26344 = cljs.core.first.call(null,s__26338__$2);
var k = cljs.core.nth.call(null,vec__26344,(0),null);
var v = cljs.core.nth.call(null,vec__26344,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__26337.call(null,cljs.core.rest.call(null,s__26338__$2)));
} else {
var G__26350 = cljs.core.rest.call(null,s__26338__$2);
s__26338__$1 = G__26350;
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
return iter__5333__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq26335){
var G__26336 = cljs.core.first.call(null,seq26335);
var seq26335__$1 = cljs.core.next.call(null,seq26335);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__26336,seq26335__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__5626__auto__ = [];
var len__5619__auto___26355 = arguments.length;
var i__5620__auto___26356 = (0);
while(true){
if((i__5620__auto___26356 < len__5619__auto___26355)){
args__5626__auto__.push((arguments[i__5620__auto___26356]));

var G__26357 = (i__5620__auto___26356 + (1));
i__5620__auto___26356 = G__26357;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq26351){
var G__26352 = cljs.core.first.call(null,seq26351);
var seq26351__$1 = cljs.core.next.call(null,seq26351);
var G__26353 = cljs.core.first.call(null,seq26351__$1);
var seq26351__$2 = cljs.core.next.call(null,seq26351__$1);
var G__26354 = cljs.core.first.call(null,seq26351__$2);
var seq26351__$3 = cljs.core.next.call(null,seq26351__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__26352,G__26353,G__26354,seq26351__$3);
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
var args26358 = [];
var len__5619__auto___26361 = arguments.length;
var i__5620__auto___26362 = (0);
while(true){
if((i__5620__auto___26362 < len__5619__auto___26361)){
args26358.push((arguments[i__5620__auto___26362]));

var G__26363 = (i__5620__auto___26362 + (1));
i__5620__auto___26362 = G__26363;
continue;
} else {
}
break;
}

var G__26360 = args26358.length;
switch (G__26360) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26358.length)].join('')));

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
var iter__5333__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__26369(s__26370){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__26370__$1 = s__26370;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26370__$1);
if(temp__4425__auto__){
var s__26370__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26370__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__26370__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__26372 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__26371 = (0);
while(true){
if((i__26371 < size__5332__auto__)){
var x = cljs.core._nth.call(null,c__5331__auto__,i__26371);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__26372,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__26373 = (i__26371 + (1));
i__26371 = G__26373;
continue;
} else {
var G__26374 = (i__26371 + (1));
i__26371 = G__26374;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26372),plumbing$core$distinct_by_$_iter__26369.call(null,cljs.core.chunk_rest.call(null,s__26370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26372),null);
}
} else {
var x = cljs.core.first.call(null,s__26370__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__26369.call(null,cljs.core.rest.call(null,s__26370__$2)));
} else {
var G__26375 = cljs.core.rest.call(null,s__26370__$2);
s__26370__$1 = G__26375;
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
return iter__5333__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__5626__auto__ = [];
var len__5619__auto___26377 = arguments.length;
var i__5620__auto___26378 = (0);
while(true){
if((i__5620__auto___26378 < len__5619__auto___26377)){
args__5626__auto__.push((arguments[i__5620__auto___26378]));

var G__26379 = (i__5620__auto___26378 + (1));
i__5620__auto___26378 = G__26379;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((0) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5627__auto__);
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq26376){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26376));
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
var args26380 = [];
var len__5619__auto___26386 = arguments.length;
var i__5620__auto___26387 = (0);
while(true){
if((i__5620__auto___26387 < len__5619__auto___26386)){
args26380.push((arguments[i__5620__auto___26387]));

var G__26388 = (i__5620__auto___26387 + (1));
i__5620__auto___26387 = G__26388;
continue;
} else {
}
break;
}

var G__26385 = args26380.length;
switch (G__26385) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args26380.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5638__auto__);

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
var G__26390 = plumbing.core.conj_when.call(null,coll,x);
var G__26391 = cljs.core.first.call(null,xs);
var G__26392 = cljs.core.next.call(null,xs);
coll = G__26390;
x = G__26391;
xs = G__26392;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq26381){
var G__26382 = cljs.core.first.call(null,seq26381);
var seq26381__$1 = cljs.core.next.call(null,seq26381);
var G__26383 = cljs.core.first.call(null,seq26381__$1);
var seq26381__$2 = cljs.core.next.call(null,seq26381__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__26382,G__26383,seq26381__$2);
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
var args26394 = [];
var len__5619__auto___26400 = arguments.length;
var i__5620__auto___26401 = (0);
while(true){
if((i__5620__auto___26401 < len__5619__auto___26400)){
args26394.push((arguments[i__5620__auto___26401]));

var G__26402 = (i__5620__auto___26401 + (1));
i__5620__auto___26401 = G__26402;
continue;
} else {
}
break;
}

var G__26399 = args26394.length;
switch (G__26399) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args26394.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5638__auto__);

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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__26393_SHARP_){
return cljs.core.apply.call(null,f,p1__26393_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq26395){
var G__26396 = cljs.core.first.call(null,seq26395);
var seq26395__$1 = cljs.core.next.call(null,seq26395);
var G__26397 = cljs.core.first.call(null,seq26395__$1);
var seq26395__$2 = cljs.core.next.call(null,seq26395__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26396,G__26397,seq26395__$2);
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
var args26404 = [];
var len__5619__auto___26410 = arguments.length;
var i__5620__auto___26411 = (0);
while(true){
if((i__5620__auto___26411 < len__5619__auto___26410)){
args26404.push((arguments[i__5620__auto___26411]));

var G__26412 = (i__5620__auto___26411 + (1));
i__5620__auto___26411 = G__26412;
continue;
} else {
}
break;
}

var G__26409 = args26404.length;
switch (G__26409) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5638__auto__ = (new cljs.core.IndexedSeq(args26404.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5638__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq26405){
var G__26406 = cljs.core.first.call(null,seq26405);
var seq26405__$1 = cljs.core.next.call(null,seq26405);
var G__26407 = cljs.core.first.call(null,seq26405__$1);
var seq26405__$2 = cljs.core.next.call(null,seq26405__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__26406,G__26407,seq26405__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);
