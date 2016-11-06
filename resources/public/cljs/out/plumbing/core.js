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
var args70287 = [];
var len__25826__auto___70296 = arguments.length;
var i__25827__auto___70297 = (0);
while(true){
if((i__25827__auto___70297 < len__25826__auto___70296)){
args70287.push((arguments[i__25827__auto___70297]));

var G__70298 = (i__25827__auto___70297 + (1));
i__25827__auto___70297 = G__70298;
continue;
} else {
}
break;
}

var G__70295 = args70287.length;
switch (G__70295) {
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
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args70287.slice((5)),(0),null));
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

plumbing.core.update.cljs$lang$applyTo = (function (seq70288){
var G__70289 = cljs.core.first.call(null,seq70288);
var seq70288__$1 = cljs.core.next.call(null,seq70288);
var G__70290 = cljs.core.first.call(null,seq70288__$1);
var seq70288__$2 = cljs.core.next.call(null,seq70288__$1);
var G__70291 = cljs.core.first.call(null,seq70288__$2);
var seq70288__$3 = cljs.core.next.call(null,seq70288__$2);
var G__70292 = cljs.core.first.call(null,seq70288__$3);
var seq70288__$4 = cljs.core.next.call(null,seq70288__$3);
var G__70293 = cljs.core.first.call(null,seq70288__$4);
var seq70288__$5 = cljs.core.next.call(null,seq70288__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__70289,G__70290,G__70291,G__70292,G__70293,seq70288__$5);
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
var m_atom__44781__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__70312_70322 = cljs.core.seq.call(null,m);
var chunk__70313_70323 = null;
var count__70314_70324 = (0);
var i__70315_70325 = (0);
while(true){
if((i__70315_70325 < count__70314_70324)){
var vec__70316_70326 = cljs.core._nth.call(null,chunk__70313_70323,i__70315_70325);
var k_70327 = cljs.core.nth.call(null,vec__70316_70326,(0),null);
var v_70328 = cljs.core.nth.call(null,vec__70316_70326,(1),null);
var m70311_70329 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70311_70329,k_70327,f.call(null,v_70328)));

var G__70330 = seq__70312_70322;
var G__70331 = chunk__70313_70323;
var G__70332 = count__70314_70324;
var G__70333 = (i__70315_70325 + (1));
seq__70312_70322 = G__70330;
chunk__70313_70323 = G__70331;
count__70314_70324 = G__70332;
i__70315_70325 = G__70333;
continue;
} else {
var temp__4657__auto___70334 = cljs.core.seq.call(null,seq__70312_70322);
if(temp__4657__auto___70334){
var seq__70312_70335__$1 = temp__4657__auto___70334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70312_70335__$1)){
var c__25562__auto___70336 = cljs.core.chunk_first.call(null,seq__70312_70335__$1);
var G__70337 = cljs.core.chunk_rest.call(null,seq__70312_70335__$1);
var G__70338 = c__25562__auto___70336;
var G__70339 = cljs.core.count.call(null,c__25562__auto___70336);
var G__70340 = (0);
seq__70312_70322 = G__70337;
chunk__70313_70323 = G__70338;
count__70314_70324 = G__70339;
i__70315_70325 = G__70340;
continue;
} else {
var vec__70319_70341 = cljs.core.first.call(null,seq__70312_70335__$1);
var k_70342 = cljs.core.nth.call(null,vec__70319_70341,(0),null);
var v_70343 = cljs.core.nth.call(null,vec__70319_70341,(1),null);
var m70311_70344 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70311_70344,k_70342,f.call(null,v_70343)));

var G__70345 = cljs.core.next.call(null,seq__70312_70335__$1);
var G__70346 = null;
var G__70347 = (0);
var G__70348 = (0);
seq__70312_70322 = G__70345;
chunk__70313_70323 = G__70346;
count__70314_70324 = G__70347;
i__70315_70325 = G__70348;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__44781__auto__));

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
var m_atom__44781__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__70361_70371 = cljs.core.seq.call(null,m);
var chunk__70362_70372 = null;
var count__70363_70373 = (0);
var i__70364_70374 = (0);
while(true){
if((i__70364_70374 < count__70363_70373)){
var vec__70365_70375 = cljs.core._nth.call(null,chunk__70362_70372,i__70364_70374);
var k_70376 = cljs.core.nth.call(null,vec__70365_70375,(0),null);
var v_70377 = cljs.core.nth.call(null,vec__70365_70375,(1),null);
var m70360_70378 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70360_70378,f.call(null,k_70376),v_70377));

var G__70379 = seq__70361_70371;
var G__70380 = chunk__70362_70372;
var G__70381 = count__70363_70373;
var G__70382 = (i__70364_70374 + (1));
seq__70361_70371 = G__70379;
chunk__70362_70372 = G__70380;
count__70363_70373 = G__70381;
i__70364_70374 = G__70382;
continue;
} else {
var temp__4657__auto___70383 = cljs.core.seq.call(null,seq__70361_70371);
if(temp__4657__auto___70383){
var seq__70361_70384__$1 = temp__4657__auto___70383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70361_70384__$1)){
var c__25562__auto___70385 = cljs.core.chunk_first.call(null,seq__70361_70384__$1);
var G__70386 = cljs.core.chunk_rest.call(null,seq__70361_70384__$1);
var G__70387 = c__25562__auto___70385;
var G__70388 = cljs.core.count.call(null,c__25562__auto___70385);
var G__70389 = (0);
seq__70361_70371 = G__70386;
chunk__70362_70372 = G__70387;
count__70363_70373 = G__70388;
i__70364_70374 = G__70389;
continue;
} else {
var vec__70368_70390 = cljs.core.first.call(null,seq__70361_70384__$1);
var k_70391 = cljs.core.nth.call(null,vec__70368_70390,(0),null);
var v_70392 = cljs.core.nth.call(null,vec__70368_70390,(1),null);
var m70360_70393 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70360_70393,f.call(null,k_70391),v_70392));

var G__70394 = cljs.core.next.call(null,seq__70361_70384__$1);
var G__70395 = null;
var G__70396 = (0);
var G__70397 = (0);
seq__70361_70371 = G__70394;
chunk__70362_70372 = G__70395;
count__70363_70373 = G__70396;
i__70364_70374 = G__70397;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__44781__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__44781__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__70404_70408 = cljs.core.seq.call(null,ks);
var chunk__70405_70409 = null;
var count__70406_70410 = (0);
var i__70407_70411 = (0);
while(true){
if((i__70407_70411 < count__70406_70410)){
var k_70412 = cljs.core._nth.call(null,chunk__70405_70409,i__70407_70411);
var m70403_70413 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70403_70413,k_70412,f.call(null,k_70412)));

var G__70414 = seq__70404_70408;
var G__70415 = chunk__70405_70409;
var G__70416 = count__70406_70410;
var G__70417 = (i__70407_70411 + (1));
seq__70404_70408 = G__70414;
chunk__70405_70409 = G__70415;
count__70406_70410 = G__70416;
i__70407_70411 = G__70417;
continue;
} else {
var temp__4657__auto___70418 = cljs.core.seq.call(null,seq__70404_70408);
if(temp__4657__auto___70418){
var seq__70404_70419__$1 = temp__4657__auto___70418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70404_70419__$1)){
var c__25562__auto___70420 = cljs.core.chunk_first.call(null,seq__70404_70419__$1);
var G__70421 = cljs.core.chunk_rest.call(null,seq__70404_70419__$1);
var G__70422 = c__25562__auto___70420;
var G__70423 = cljs.core.count.call(null,c__25562__auto___70420);
var G__70424 = (0);
seq__70404_70408 = G__70421;
chunk__70405_70409 = G__70422;
count__70406_70410 = G__70423;
i__70407_70411 = G__70424;
continue;
} else {
var k_70425 = cljs.core.first.call(null,seq__70404_70419__$1);
var m70403_70426 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70403_70426,k_70425,f.call(null,k_70425)));

var G__70427 = cljs.core.next.call(null,seq__70404_70419__$1);
var G__70428 = null;
var G__70429 = (0);
var G__70430 = (0);
seq__70404_70408 = G__70427;
chunk__70405_70409 = G__70428;
count__70406_70410 = G__70429;
i__70407_70411 = G__70430;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__44781__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__44781__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__70437_70441 = cljs.core.seq.call(null,vs);
var chunk__70438_70442 = null;
var count__70439_70443 = (0);
var i__70440_70444 = (0);
while(true){
if((i__70440_70444 < count__70439_70443)){
var v_70445 = cljs.core._nth.call(null,chunk__70438_70442,i__70440_70444);
var m70436_70446 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70436_70446,f.call(null,v_70445),v_70445));

var G__70447 = seq__70437_70441;
var G__70448 = chunk__70438_70442;
var G__70449 = count__70439_70443;
var G__70450 = (i__70440_70444 + (1));
seq__70437_70441 = G__70447;
chunk__70438_70442 = G__70448;
count__70439_70443 = G__70449;
i__70440_70444 = G__70450;
continue;
} else {
var temp__4657__auto___70451 = cljs.core.seq.call(null,seq__70437_70441);
if(temp__4657__auto___70451){
var seq__70437_70452__$1 = temp__4657__auto___70451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70437_70452__$1)){
var c__25562__auto___70453 = cljs.core.chunk_first.call(null,seq__70437_70452__$1);
var G__70454 = cljs.core.chunk_rest.call(null,seq__70437_70452__$1);
var G__70455 = c__25562__auto___70453;
var G__70456 = cljs.core.count.call(null,c__25562__auto___70453);
var G__70457 = (0);
seq__70437_70441 = G__70454;
chunk__70438_70442 = G__70455;
count__70439_70443 = G__70456;
i__70440_70444 = G__70457;
continue;
} else {
var v_70458 = cljs.core.first.call(null,seq__70437_70452__$1);
var m70436_70459 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70436_70459,f.call(null,v_70458),v_70458));

var G__70460 = cljs.core.next.call(null,seq__70437_70452__$1);
var G__70461 = null;
var G__70462 = (0);
var G__70463 = (0);
seq__70437_70441 = G__70460;
chunk__70438_70442 = G__70461;
count__70439_70443 = G__70462;
i__70440_70444 = G__70463;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__44781__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__70464){
var vec__70468 = p__70464;
var seq__70469 = cljs.core.seq.call(null,vec__70468);
var first__70470 = cljs.core.first.call(null,seq__70469);
var seq__70469__$1 = cljs.core.next.call(null,seq__70469);
var k = first__70470;
var ks = seq__70469__$1;
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
var m_atom__44781__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__70483_70493 = cljs.core.seq.call(null,x);
var chunk__70484_70494 = null;
var count__70485_70495 = (0);
var i__70486_70496 = (0);
while(true){
if((i__70486_70496 < count__70485_70495)){
var vec__70487_70497 = cljs.core._nth.call(null,chunk__70484_70494,i__70486_70496);
var k_70498 = cljs.core.nth.call(null,vec__70487_70497,(0),null);
var v_70499 = cljs.core.nth.call(null,vec__70487_70497,(1),null);
var m70482_70500 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70482_70500,((typeof k_70498 === 'string')?cljs.core.keyword.call(null,k_70498):k_70498),plumbing$core$keywordize_map.call(null,v_70499)));

var G__70501 = seq__70483_70493;
var G__70502 = chunk__70484_70494;
var G__70503 = count__70485_70495;
var G__70504 = (i__70486_70496 + (1));
seq__70483_70493 = G__70501;
chunk__70484_70494 = G__70502;
count__70485_70495 = G__70503;
i__70486_70496 = G__70504;
continue;
} else {
var temp__4657__auto___70505 = cljs.core.seq.call(null,seq__70483_70493);
if(temp__4657__auto___70505){
var seq__70483_70506__$1 = temp__4657__auto___70505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70483_70506__$1)){
var c__25562__auto___70507 = cljs.core.chunk_first.call(null,seq__70483_70506__$1);
var G__70508 = cljs.core.chunk_rest.call(null,seq__70483_70506__$1);
var G__70509 = c__25562__auto___70507;
var G__70510 = cljs.core.count.call(null,c__25562__auto___70507);
var G__70511 = (0);
seq__70483_70493 = G__70508;
chunk__70484_70494 = G__70509;
count__70485_70495 = G__70510;
i__70486_70496 = G__70511;
continue;
} else {
var vec__70490_70512 = cljs.core.first.call(null,seq__70483_70506__$1);
var k_70513 = cljs.core.nth.call(null,vec__70490_70512,(0),null);
var v_70514 = cljs.core.nth.call(null,vec__70490_70512,(1),null);
var m70482_70515 = cljs.core.deref.call(null,m_atom__44781__auto__);
cljs.core.reset_BANG_.call(null,m_atom__44781__auto__,cljs.core.assoc_BANG_.call(null,m70482_70515,((typeof k_70513 === 'string')?cljs.core.keyword.call(null,k_70513):k_70513),plumbing$core$keywordize_map.call(null,v_70514)));

var G__70516 = cljs.core.next.call(null,seq__70483_70506__$1);
var G__70517 = null;
var G__70518 = (0);
var G__70519 = (0);
seq__70483_70493 = G__70516;
chunk__70484_70494 = G__70517;
count__70485_70495 = G__70518;
i__70486_70496 = G__70519;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__44781__auto__));
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
var pair__44862__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__44862__auto__);
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
var G__70520 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__70521 = cljs.core.next.call(null,ks);
m = G__70520;
ks = G__70521;
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
var len__25826__auto___70540 = arguments.length;
var i__25827__auto___70541 = (0);
while(true){
if((i__25827__auto___70541 < len__25826__auto___70540)){
args__25833__auto__.push((arguments[i__25827__auto___70541]));

var G__70542 = (i__25827__auto___70541 + (1));
i__25827__auto___70541 = G__70542;
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
})(),(function (){var iter__25531__auto__ = (function plumbing$core$iter__70524(s__70525){
return (new cljs.core.LazySeq(null,(function (){
var s__70525__$1 = s__70525;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70525__$1);
if(temp__4657__auto__){
var s__70525__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70525__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__70525__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__70527 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__70526 = (0);
while(true){
if((i__70526 < size__25530__auto__)){
var vec__70534 = cljs.core._nth.call(null,c__25529__auto__,i__70526);
var k = cljs.core.nth.call(null,vec__70534,(0),null);
var v = cljs.core.nth.call(null,vec__70534,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__70527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__70543 = (i__70526 + (1));
i__70526 = G__70543;
continue;
} else {
var G__70544 = (i__70526 + (1));
i__70526 = G__70544;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70527),plumbing$core$iter__70524.call(null,cljs.core.chunk_rest.call(null,s__70525__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70527),null);
}
} else {
var vec__70537 = cljs.core.first.call(null,s__70525__$2);
var k = cljs.core.nth.call(null,vec__70537,(0),null);
var v = cljs.core.nth.call(null,vec__70537,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__70524.call(null,cljs.core.rest.call(null,s__70525__$2)));
} else {
var G__70545 = cljs.core.rest.call(null,s__70525__$2);
s__70525__$1 = G__70545;
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

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq70522){
var G__70523 = cljs.core.first.call(null,seq70522);
var seq70522__$1 = cljs.core.next.call(null,seq70522);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__70523,seq70522__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___70550 = arguments.length;
var i__25827__auto___70551 = (0);
while(true){
if((i__25827__auto___70551 < len__25826__auto___70550)){
args__25833__auto__.push((arguments[i__25827__auto___70551]));

var G__70552 = (i__25827__auto___70551 + (1));
i__25827__auto___70551 = G__70552;
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq70546){
var G__70547 = cljs.core.first.call(null,seq70546);
var seq70546__$1 = cljs.core.next.call(null,seq70546);
var G__70548 = cljs.core.first.call(null,seq70546__$1);
var seq70546__$2 = cljs.core.next.call(null,seq70546__$1);
var G__70549 = cljs.core.first.call(null,seq70546__$2);
var seq70546__$3 = cljs.core.next.call(null,seq70546__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__70547,G__70548,G__70549,seq70546__$3);
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
var args70553 = [];
var len__25826__auto___70556 = arguments.length;
var i__25827__auto___70557 = (0);
while(true){
if((i__25827__auto___70557 < len__25826__auto___70556)){
args70553.push((arguments[i__25827__auto___70557]));

var G__70558 = (i__25827__auto___70557 + (1));
i__25827__auto___70557 = G__70558;
continue;
} else {
}
break;
}

var G__70555 = args70553.length;
switch (G__70555) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70553.length)].join('')));

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
return (function plumbing$core$distinct_by_$_iter__70564(s__70565){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__70565__$1 = s__70565;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70565__$1);
if(temp__4657__auto__){
var s__70565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70565__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__70565__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__70567 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__70566 = (0);
while(true){
if((i__70566 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__70566);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__70567,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__70568 = (i__70566 + (1));
i__70566 = G__70568;
continue;
} else {
var G__70569 = (i__70566 + (1));
i__70566 = G__70569;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70567),plumbing$core$distinct_by_$_iter__70564.call(null,cljs.core.chunk_rest.call(null,s__70565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70567),null);
}
} else {
var x = cljs.core.first.call(null,s__70565__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__70564.call(null,cljs.core.rest.call(null,s__70565__$2)));
} else {
var G__70570 = cljs.core.rest.call(null,s__70565__$2);
s__70565__$1 = G__70570;
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
var len__25826__auto___70572 = arguments.length;
var i__25827__auto___70573 = (0);
while(true){
if((i__25827__auto___70573 < len__25826__auto___70572)){
args__25833__auto__.push((arguments[i__25827__auto___70573]));

var G__70574 = (i__25827__auto___70573 + (1));
i__25827__auto___70573 = G__70574;
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq70571){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70571));
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
var args70575 = [];
var len__25826__auto___70581 = arguments.length;
var i__25827__auto___70582 = (0);
while(true){
if((i__25827__auto___70582 < len__25826__auto___70581)){
args70575.push((arguments[i__25827__auto___70582]));

var G__70583 = (i__25827__auto___70582 + (1));
i__25827__auto___70582 = G__70583;
continue;
} else {
}
break;
}

var G__70580 = args70575.length;
switch (G__70580) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args70575.slice((2)),(0),null));
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
var G__70585 = plumbing.core.conj_when.call(null,coll,x);
var G__70586 = cljs.core.first.call(null,xs);
var G__70587 = cljs.core.next.call(null,xs);
coll = G__70585;
x = G__70586;
xs = G__70587;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq70576){
var G__70577 = cljs.core.first.call(null,seq70576);
var seq70576__$1 = cljs.core.next.call(null,seq70576);
var G__70578 = cljs.core.first.call(null,seq70576__$1);
var seq70576__$2 = cljs.core.next.call(null,seq70576__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__70577,G__70578,seq70576__$2);
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
var args70589 = [];
var len__25826__auto___70595 = arguments.length;
var i__25827__auto___70596 = (0);
while(true){
if((i__25827__auto___70596 < len__25826__auto___70595)){
args70589.push((arguments[i__25827__auto___70596]));

var G__70597 = (i__25827__auto___70596 + (1));
i__25827__auto___70596 = G__70597;
continue;
} else {
}
break;
}

var G__70594 = args70589.length;
switch (G__70594) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args70589.slice((2)),(0),null));
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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__70588_SHARP_){
return cljs.core.apply.call(null,f,p1__70588_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq70590){
var G__70591 = cljs.core.first.call(null,seq70590);
var seq70590__$1 = cljs.core.next.call(null,seq70590);
var G__70592 = cljs.core.first.call(null,seq70590__$1);
var seq70590__$2 = cljs.core.next.call(null,seq70590__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70591,G__70592,seq70590__$2);
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
var args70599 = [];
var len__25826__auto___70605 = arguments.length;
var i__25827__auto___70606 = (0);
while(true){
if((i__25827__auto___70606 < len__25826__auto___70605)){
args70599.push((arguments[i__25827__auto___70606]));

var G__70607 = (i__25827__auto___70606 + (1));
i__25827__auto___70606 = G__70607;
continue;
} else {
}
break;
}

var G__70604 = args70599.length;
switch (G__70604) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args70599.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq70600){
var G__70601 = cljs.core.first.call(null,seq70600);
var seq70600__$1 = cljs.core.next.call(null,seq70600);
var G__70602 = cljs.core.first.call(null,seq70600__$1);
var seq70600__$2 = cljs.core.next.call(null,seq70600__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__70601,G__70602,seq70600__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1478402645587