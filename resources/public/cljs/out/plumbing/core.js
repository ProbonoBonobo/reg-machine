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
var args44417 = [];
var len__25826__auto___44426 = arguments.length;
var i__25827__auto___44427 = (0);
while(true){
if((i__25827__auto___44427 < len__25826__auto___44426)){
args44417.push((arguments[i__25827__auto___44427]));

var G__44428 = (i__25827__auto___44427 + (1));
i__25827__auto___44427 = G__44428;
continue;
} else {
}
break;
}

var G__44425 = args44417.length;
switch (G__44425) {
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
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args44417.slice((5)),(0),null));
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

plumbing.core.update.cljs$lang$applyTo = (function (seq44418){
var G__44419 = cljs.core.first.call(null,seq44418);
var seq44418__$1 = cljs.core.next.call(null,seq44418);
var G__44420 = cljs.core.first.call(null,seq44418__$1);
var seq44418__$2 = cljs.core.next.call(null,seq44418__$1);
var G__44421 = cljs.core.first.call(null,seq44418__$2);
var seq44418__$3 = cljs.core.next.call(null,seq44418__$2);
var G__44422 = cljs.core.first.call(null,seq44418__$3);
var seq44418__$4 = cljs.core.next.call(null,seq44418__$3);
var G__44423 = cljs.core.first.call(null,seq44418__$4);
var seq44418__$5 = cljs.core.next.call(null,seq44418__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__44419,G__44420,G__44421,G__44422,G__44423,seq44418__$5);
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
var m_atom__42456__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__44442_44452 = cljs.core.seq.call(null,m);
var chunk__44443_44453 = null;
var count__44444_44454 = (0);
var i__44445_44455 = (0);
while(true){
if((i__44445_44455 < count__44444_44454)){
var vec__44446_44456 = cljs.core._nth.call(null,chunk__44443_44453,i__44445_44455);
var k_44457 = cljs.core.nth.call(null,vec__44446_44456,(0),null);
var v_44458 = cljs.core.nth.call(null,vec__44446_44456,(1),null);
var m44441_44459 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44441_44459,k_44457,f.call(null,v_44458)));

var G__44460 = seq__44442_44452;
var G__44461 = chunk__44443_44453;
var G__44462 = count__44444_44454;
var G__44463 = (i__44445_44455 + (1));
seq__44442_44452 = G__44460;
chunk__44443_44453 = G__44461;
count__44444_44454 = G__44462;
i__44445_44455 = G__44463;
continue;
} else {
var temp__4657__auto___44464 = cljs.core.seq.call(null,seq__44442_44452);
if(temp__4657__auto___44464){
var seq__44442_44465__$1 = temp__4657__auto___44464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44442_44465__$1)){
var c__25562__auto___44466 = cljs.core.chunk_first.call(null,seq__44442_44465__$1);
var G__44467 = cljs.core.chunk_rest.call(null,seq__44442_44465__$1);
var G__44468 = c__25562__auto___44466;
var G__44469 = cljs.core.count.call(null,c__25562__auto___44466);
var G__44470 = (0);
seq__44442_44452 = G__44467;
chunk__44443_44453 = G__44468;
count__44444_44454 = G__44469;
i__44445_44455 = G__44470;
continue;
} else {
var vec__44449_44471 = cljs.core.first.call(null,seq__44442_44465__$1);
var k_44472 = cljs.core.nth.call(null,vec__44449_44471,(0),null);
var v_44473 = cljs.core.nth.call(null,vec__44449_44471,(1),null);
var m44441_44474 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44441_44474,k_44472,f.call(null,v_44473)));

var G__44475 = cljs.core.next.call(null,seq__44442_44465__$1);
var G__44476 = null;
var G__44477 = (0);
var G__44478 = (0);
seq__44442_44452 = G__44475;
chunk__44443_44453 = G__44476;
count__44444_44454 = G__44477;
i__44445_44455 = G__44478;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__42456__auto__));

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
var m_atom__42456__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__44491_44501 = cljs.core.seq.call(null,m);
var chunk__44492_44502 = null;
var count__44493_44503 = (0);
var i__44494_44504 = (0);
while(true){
if((i__44494_44504 < count__44493_44503)){
var vec__44495_44505 = cljs.core._nth.call(null,chunk__44492_44502,i__44494_44504);
var k_44506 = cljs.core.nth.call(null,vec__44495_44505,(0),null);
var v_44507 = cljs.core.nth.call(null,vec__44495_44505,(1),null);
var m44490_44508 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44490_44508,f.call(null,k_44506),v_44507));

var G__44509 = seq__44491_44501;
var G__44510 = chunk__44492_44502;
var G__44511 = count__44493_44503;
var G__44512 = (i__44494_44504 + (1));
seq__44491_44501 = G__44509;
chunk__44492_44502 = G__44510;
count__44493_44503 = G__44511;
i__44494_44504 = G__44512;
continue;
} else {
var temp__4657__auto___44513 = cljs.core.seq.call(null,seq__44491_44501);
if(temp__4657__auto___44513){
var seq__44491_44514__$1 = temp__4657__auto___44513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44491_44514__$1)){
var c__25562__auto___44515 = cljs.core.chunk_first.call(null,seq__44491_44514__$1);
var G__44516 = cljs.core.chunk_rest.call(null,seq__44491_44514__$1);
var G__44517 = c__25562__auto___44515;
var G__44518 = cljs.core.count.call(null,c__25562__auto___44515);
var G__44519 = (0);
seq__44491_44501 = G__44516;
chunk__44492_44502 = G__44517;
count__44493_44503 = G__44518;
i__44494_44504 = G__44519;
continue;
} else {
var vec__44498_44520 = cljs.core.first.call(null,seq__44491_44514__$1);
var k_44521 = cljs.core.nth.call(null,vec__44498_44520,(0),null);
var v_44522 = cljs.core.nth.call(null,vec__44498_44520,(1),null);
var m44490_44523 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44490_44523,f.call(null,k_44521),v_44522));

var G__44524 = cljs.core.next.call(null,seq__44491_44514__$1);
var G__44525 = null;
var G__44526 = (0);
var G__44527 = (0);
seq__44491_44501 = G__44524;
chunk__44492_44502 = G__44525;
count__44493_44503 = G__44526;
i__44494_44504 = G__44527;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__42456__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__42456__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__44534_44538 = cljs.core.seq.call(null,ks);
var chunk__44535_44539 = null;
var count__44536_44540 = (0);
var i__44537_44541 = (0);
while(true){
if((i__44537_44541 < count__44536_44540)){
var k_44542 = cljs.core._nth.call(null,chunk__44535_44539,i__44537_44541);
var m44533_44543 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44533_44543,k_44542,f.call(null,k_44542)));

var G__44544 = seq__44534_44538;
var G__44545 = chunk__44535_44539;
var G__44546 = count__44536_44540;
var G__44547 = (i__44537_44541 + (1));
seq__44534_44538 = G__44544;
chunk__44535_44539 = G__44545;
count__44536_44540 = G__44546;
i__44537_44541 = G__44547;
continue;
} else {
var temp__4657__auto___44548 = cljs.core.seq.call(null,seq__44534_44538);
if(temp__4657__auto___44548){
var seq__44534_44549__$1 = temp__4657__auto___44548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44534_44549__$1)){
var c__25562__auto___44550 = cljs.core.chunk_first.call(null,seq__44534_44549__$1);
var G__44551 = cljs.core.chunk_rest.call(null,seq__44534_44549__$1);
var G__44552 = c__25562__auto___44550;
var G__44553 = cljs.core.count.call(null,c__25562__auto___44550);
var G__44554 = (0);
seq__44534_44538 = G__44551;
chunk__44535_44539 = G__44552;
count__44536_44540 = G__44553;
i__44537_44541 = G__44554;
continue;
} else {
var k_44555 = cljs.core.first.call(null,seq__44534_44549__$1);
var m44533_44556 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44533_44556,k_44555,f.call(null,k_44555)));

var G__44557 = cljs.core.next.call(null,seq__44534_44549__$1);
var G__44558 = null;
var G__44559 = (0);
var G__44560 = (0);
seq__44534_44538 = G__44557;
chunk__44535_44539 = G__44558;
count__44536_44540 = G__44559;
i__44537_44541 = G__44560;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__42456__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__42456__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__44567_44571 = cljs.core.seq.call(null,vs);
var chunk__44568_44572 = null;
var count__44569_44573 = (0);
var i__44570_44574 = (0);
while(true){
if((i__44570_44574 < count__44569_44573)){
var v_44575 = cljs.core._nth.call(null,chunk__44568_44572,i__44570_44574);
var m44566_44576 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44566_44576,f.call(null,v_44575),v_44575));

var G__44577 = seq__44567_44571;
var G__44578 = chunk__44568_44572;
var G__44579 = count__44569_44573;
var G__44580 = (i__44570_44574 + (1));
seq__44567_44571 = G__44577;
chunk__44568_44572 = G__44578;
count__44569_44573 = G__44579;
i__44570_44574 = G__44580;
continue;
} else {
var temp__4657__auto___44581 = cljs.core.seq.call(null,seq__44567_44571);
if(temp__4657__auto___44581){
var seq__44567_44582__$1 = temp__4657__auto___44581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44567_44582__$1)){
var c__25562__auto___44583 = cljs.core.chunk_first.call(null,seq__44567_44582__$1);
var G__44584 = cljs.core.chunk_rest.call(null,seq__44567_44582__$1);
var G__44585 = c__25562__auto___44583;
var G__44586 = cljs.core.count.call(null,c__25562__auto___44583);
var G__44587 = (0);
seq__44567_44571 = G__44584;
chunk__44568_44572 = G__44585;
count__44569_44573 = G__44586;
i__44570_44574 = G__44587;
continue;
} else {
var v_44588 = cljs.core.first.call(null,seq__44567_44582__$1);
var m44566_44589 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44566_44589,f.call(null,v_44588),v_44588));

var G__44590 = cljs.core.next.call(null,seq__44567_44582__$1);
var G__44591 = null;
var G__44592 = (0);
var G__44593 = (0);
seq__44567_44571 = G__44590;
chunk__44568_44572 = G__44591;
count__44569_44573 = G__44592;
i__44570_44574 = G__44593;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__42456__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__44594){
var vec__44598 = p__44594;
var seq__44599 = cljs.core.seq.call(null,vec__44598);
var first__44600 = cljs.core.first.call(null,seq__44599);
var seq__44599__$1 = cljs.core.next.call(null,seq__44599);
var k = first__44600;
var ks = seq__44599__$1;
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
var m_atom__42456__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__44613_44623 = cljs.core.seq.call(null,x);
var chunk__44614_44624 = null;
var count__44615_44625 = (0);
var i__44616_44626 = (0);
while(true){
if((i__44616_44626 < count__44615_44625)){
var vec__44617_44627 = cljs.core._nth.call(null,chunk__44614_44624,i__44616_44626);
var k_44628 = cljs.core.nth.call(null,vec__44617_44627,(0),null);
var v_44629 = cljs.core.nth.call(null,vec__44617_44627,(1),null);
var m44612_44630 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44612_44630,((typeof k_44628 === 'string')?cljs.core.keyword.call(null,k_44628):k_44628),plumbing$core$keywordize_map.call(null,v_44629)));

var G__44631 = seq__44613_44623;
var G__44632 = chunk__44614_44624;
var G__44633 = count__44615_44625;
var G__44634 = (i__44616_44626 + (1));
seq__44613_44623 = G__44631;
chunk__44614_44624 = G__44632;
count__44615_44625 = G__44633;
i__44616_44626 = G__44634;
continue;
} else {
var temp__4657__auto___44635 = cljs.core.seq.call(null,seq__44613_44623);
if(temp__4657__auto___44635){
var seq__44613_44636__$1 = temp__4657__auto___44635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44613_44636__$1)){
var c__25562__auto___44637 = cljs.core.chunk_first.call(null,seq__44613_44636__$1);
var G__44638 = cljs.core.chunk_rest.call(null,seq__44613_44636__$1);
var G__44639 = c__25562__auto___44637;
var G__44640 = cljs.core.count.call(null,c__25562__auto___44637);
var G__44641 = (0);
seq__44613_44623 = G__44638;
chunk__44614_44624 = G__44639;
count__44615_44625 = G__44640;
i__44616_44626 = G__44641;
continue;
} else {
var vec__44620_44642 = cljs.core.first.call(null,seq__44613_44636__$1);
var k_44643 = cljs.core.nth.call(null,vec__44620_44642,(0),null);
var v_44644 = cljs.core.nth.call(null,vec__44620_44642,(1),null);
var m44612_44645 = cljs.core.deref.call(null,m_atom__42456__auto__);
cljs.core.reset_BANG_.call(null,m_atom__42456__auto__,cljs.core.assoc_BANG_.call(null,m44612_44645,((typeof k_44643 === 'string')?cljs.core.keyword.call(null,k_44643):k_44643),plumbing$core$keywordize_map.call(null,v_44644)));

var G__44646 = cljs.core.next.call(null,seq__44613_44636__$1);
var G__44647 = null;
var G__44648 = (0);
var G__44649 = (0);
seq__44613_44623 = G__44646;
chunk__44614_44624 = G__44647;
count__44615_44625 = G__44648;
i__44616_44626 = G__44649;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__42456__auto__));
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
var pair__42537__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__42537__auto__);
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
var G__44650 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__44651 = cljs.core.next.call(null,ks);
m = G__44650;
ks = G__44651;
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
var len__25826__auto___44670 = arguments.length;
var i__25827__auto___44671 = (0);
while(true){
if((i__25827__auto___44671 < len__25826__auto___44670)){
args__25833__auto__.push((arguments[i__25827__auto___44671]));

var G__44672 = (i__25827__auto___44671 + (1));
i__25827__auto___44671 = G__44672;
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
})(),(function (){var iter__25531__auto__ = (function plumbing$core$iter__44654(s__44655){
return (new cljs.core.LazySeq(null,(function (){
var s__44655__$1 = s__44655;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44655__$1);
if(temp__4657__auto__){
var s__44655__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44655__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__44655__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__44657 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__44656 = (0);
while(true){
if((i__44656 < size__25530__auto__)){
var vec__44664 = cljs.core._nth.call(null,c__25529__auto__,i__44656);
var k = cljs.core.nth.call(null,vec__44664,(0),null);
var v = cljs.core.nth.call(null,vec__44664,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__44657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__44673 = (i__44656 + (1));
i__44656 = G__44673;
continue;
} else {
var G__44674 = (i__44656 + (1));
i__44656 = G__44674;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44657),plumbing$core$iter__44654.call(null,cljs.core.chunk_rest.call(null,s__44655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44657),null);
}
} else {
var vec__44667 = cljs.core.first.call(null,s__44655__$2);
var k = cljs.core.nth.call(null,vec__44667,(0),null);
var v = cljs.core.nth.call(null,vec__44667,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__44654.call(null,cljs.core.rest.call(null,s__44655__$2)));
} else {
var G__44675 = cljs.core.rest.call(null,s__44655__$2);
s__44655__$1 = G__44675;
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

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq44652){
var G__44653 = cljs.core.first.call(null,seq44652);
var seq44652__$1 = cljs.core.next.call(null,seq44652);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__44653,seq44652__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___44680 = arguments.length;
var i__25827__auto___44681 = (0);
while(true){
if((i__25827__auto___44681 < len__25826__auto___44680)){
args__25833__auto__.push((arguments[i__25827__auto___44681]));

var G__44682 = (i__25827__auto___44681 + (1));
i__25827__auto___44681 = G__44682;
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq44676){
var G__44677 = cljs.core.first.call(null,seq44676);
var seq44676__$1 = cljs.core.next.call(null,seq44676);
var G__44678 = cljs.core.first.call(null,seq44676__$1);
var seq44676__$2 = cljs.core.next.call(null,seq44676__$1);
var G__44679 = cljs.core.first.call(null,seq44676__$2);
var seq44676__$3 = cljs.core.next.call(null,seq44676__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__44677,G__44678,G__44679,seq44676__$3);
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
var args44683 = [];
var len__25826__auto___44686 = arguments.length;
var i__25827__auto___44687 = (0);
while(true){
if((i__25827__auto___44687 < len__25826__auto___44686)){
args44683.push((arguments[i__25827__auto___44687]));

var G__44688 = (i__25827__auto___44687 + (1));
i__25827__auto___44687 = G__44688;
continue;
} else {
}
break;
}

var G__44685 = args44683.length;
switch (G__44685) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44683.length)].join('')));

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
return (function plumbing$core$distinct_by_$_iter__44694(s__44695){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__44695__$1 = s__44695;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44695__$1);
if(temp__4657__auto__){
var s__44695__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44695__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__44695__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__44697 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__44696 = (0);
while(true){
if((i__44696 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__44696);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__44697,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__44698 = (i__44696 + (1));
i__44696 = G__44698;
continue;
} else {
var G__44699 = (i__44696 + (1));
i__44696 = G__44699;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44697),plumbing$core$distinct_by_$_iter__44694.call(null,cljs.core.chunk_rest.call(null,s__44695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44697),null);
}
} else {
var x = cljs.core.first.call(null,s__44695__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__44694.call(null,cljs.core.rest.call(null,s__44695__$2)));
} else {
var G__44700 = cljs.core.rest.call(null,s__44695__$2);
s__44695__$1 = G__44700;
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
var len__25826__auto___44702 = arguments.length;
var i__25827__auto___44703 = (0);
while(true){
if((i__25827__auto___44703 < len__25826__auto___44702)){
args__25833__auto__.push((arguments[i__25827__auto___44703]));

var G__44704 = (i__25827__auto___44703 + (1));
i__25827__auto___44703 = G__44704;
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq44701){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44701));
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
var args44705 = [];
var len__25826__auto___44711 = arguments.length;
var i__25827__auto___44712 = (0);
while(true){
if((i__25827__auto___44712 < len__25826__auto___44711)){
args44705.push((arguments[i__25827__auto___44712]));

var G__44713 = (i__25827__auto___44712 + (1));
i__25827__auto___44712 = G__44713;
continue;
} else {
}
break;
}

var G__44710 = args44705.length;
switch (G__44710) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args44705.slice((2)),(0),null));
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
var G__44715 = plumbing.core.conj_when.call(null,coll,x);
var G__44716 = cljs.core.first.call(null,xs);
var G__44717 = cljs.core.next.call(null,xs);
coll = G__44715;
x = G__44716;
xs = G__44717;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq44706){
var G__44707 = cljs.core.first.call(null,seq44706);
var seq44706__$1 = cljs.core.next.call(null,seq44706);
var G__44708 = cljs.core.first.call(null,seq44706__$1);
var seq44706__$2 = cljs.core.next.call(null,seq44706__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__44707,G__44708,seq44706__$2);
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
var args44719 = [];
var len__25826__auto___44725 = arguments.length;
var i__25827__auto___44726 = (0);
while(true){
if((i__25827__auto___44726 < len__25826__auto___44725)){
args44719.push((arguments[i__25827__auto___44726]));

var G__44727 = (i__25827__auto___44726 + (1));
i__25827__auto___44726 = G__44727;
continue;
} else {
}
break;
}

var G__44724 = args44719.length;
switch (G__44724) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args44719.slice((2)),(0),null));
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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__44718_SHARP_){
return cljs.core.apply.call(null,f,p1__44718_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq44720){
var G__44721 = cljs.core.first.call(null,seq44720);
var seq44720__$1 = cljs.core.next.call(null,seq44720);
var G__44722 = cljs.core.first.call(null,seq44720__$1);
var seq44720__$2 = cljs.core.next.call(null,seq44720__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44721,G__44722,seq44720__$2);
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
var args44729 = [];
var len__25826__auto___44735 = arguments.length;
var i__25827__auto___44736 = (0);
while(true){
if((i__25827__auto___44736 < len__25826__auto___44735)){
args44729.push((arguments[i__25827__auto___44736]));

var G__44737 = (i__25827__auto___44736 + (1));
i__25827__auto___44736 = G__44737;
continue;
} else {
}
break;
}

var G__44734 = args44729.length;
switch (G__44734) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args44729.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq44730){
var G__44731 = cljs.core.first.call(null,seq44730);
var seq44730__$1 = cljs.core.next.call(null,seq44730);
var G__44732 = cljs.core.first.call(null,seq44730__$1);
var seq44730__$2 = cljs.core.next.call(null,seq44730__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__44731,G__44732,seq44730__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1477762287826