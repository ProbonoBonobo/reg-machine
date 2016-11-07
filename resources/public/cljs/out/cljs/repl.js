// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39410){
var map__39435 = p__39410;
var map__39435__$1 = ((((!((map__39435 == null)))?((((map__39435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39435):map__39435);
var m = map__39435__$1;
var n = cljs.core.get.call(null,map__39435__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39437_39459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39438_39460 = null;
var count__39439_39461 = (0);
var i__39440_39462 = (0);
while(true){
if((i__39440_39462 < count__39439_39461)){
var f_39463 = cljs.core._nth.call(null,chunk__39438_39460,i__39440_39462);
cljs.core.println.call(null,"  ",f_39463);

var G__39464 = seq__39437_39459;
var G__39465 = chunk__39438_39460;
var G__39466 = count__39439_39461;
var G__39467 = (i__39440_39462 + (1));
seq__39437_39459 = G__39464;
chunk__39438_39460 = G__39465;
count__39439_39461 = G__39466;
i__39440_39462 = G__39467;
continue;
} else {
var temp__4657__auto___39468 = cljs.core.seq.call(null,seq__39437_39459);
if(temp__4657__auto___39468){
var seq__39437_39469__$1 = temp__4657__auto___39468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39437_39469__$1)){
var c__25562__auto___39470 = cljs.core.chunk_first.call(null,seq__39437_39469__$1);
var G__39471 = cljs.core.chunk_rest.call(null,seq__39437_39469__$1);
var G__39472 = c__25562__auto___39470;
var G__39473 = cljs.core.count.call(null,c__25562__auto___39470);
var G__39474 = (0);
seq__39437_39459 = G__39471;
chunk__39438_39460 = G__39472;
count__39439_39461 = G__39473;
i__39440_39462 = G__39474;
continue;
} else {
var f_39475 = cljs.core.first.call(null,seq__39437_39469__$1);
cljs.core.println.call(null,"  ",f_39475);

var G__39476 = cljs.core.next.call(null,seq__39437_39469__$1);
var G__39477 = null;
var G__39478 = (0);
var G__39479 = (0);
seq__39437_39459 = G__39476;
chunk__39438_39460 = G__39477;
count__39439_39461 = G__39478;
i__39440_39462 = G__39479;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39480 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39480);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39480)))?cljs.core.second.call(null,arglists_39480):arglists_39480));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39441_39481 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39442_39482 = null;
var count__39443_39483 = (0);
var i__39444_39484 = (0);
while(true){
if((i__39444_39484 < count__39443_39483)){
var vec__39445_39485 = cljs.core._nth.call(null,chunk__39442_39482,i__39444_39484);
var name_39486 = cljs.core.nth.call(null,vec__39445_39485,(0),null);
var map__39448_39487 = cljs.core.nth.call(null,vec__39445_39485,(1),null);
var map__39448_39488__$1 = ((((!((map__39448_39487 == null)))?((((map__39448_39487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39448_39487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39448_39487):map__39448_39487);
var doc_39489 = cljs.core.get.call(null,map__39448_39488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39490 = cljs.core.get.call(null,map__39448_39488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39486);

cljs.core.println.call(null," ",arglists_39490);

if(cljs.core.truth_(doc_39489)){
cljs.core.println.call(null," ",doc_39489);
} else {
}

var G__39491 = seq__39441_39481;
var G__39492 = chunk__39442_39482;
var G__39493 = count__39443_39483;
var G__39494 = (i__39444_39484 + (1));
seq__39441_39481 = G__39491;
chunk__39442_39482 = G__39492;
count__39443_39483 = G__39493;
i__39444_39484 = G__39494;
continue;
} else {
var temp__4657__auto___39495 = cljs.core.seq.call(null,seq__39441_39481);
if(temp__4657__auto___39495){
var seq__39441_39496__$1 = temp__4657__auto___39495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39441_39496__$1)){
var c__25562__auto___39497 = cljs.core.chunk_first.call(null,seq__39441_39496__$1);
var G__39498 = cljs.core.chunk_rest.call(null,seq__39441_39496__$1);
var G__39499 = c__25562__auto___39497;
var G__39500 = cljs.core.count.call(null,c__25562__auto___39497);
var G__39501 = (0);
seq__39441_39481 = G__39498;
chunk__39442_39482 = G__39499;
count__39443_39483 = G__39500;
i__39444_39484 = G__39501;
continue;
} else {
var vec__39450_39502 = cljs.core.first.call(null,seq__39441_39496__$1);
var name_39503 = cljs.core.nth.call(null,vec__39450_39502,(0),null);
var map__39453_39504 = cljs.core.nth.call(null,vec__39450_39502,(1),null);
var map__39453_39505__$1 = ((((!((map__39453_39504 == null)))?((((map__39453_39504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39453_39504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39453_39504):map__39453_39504);
var doc_39506 = cljs.core.get.call(null,map__39453_39505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39507 = cljs.core.get.call(null,map__39453_39505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39503);

cljs.core.println.call(null," ",arglists_39507);

if(cljs.core.truth_(doc_39506)){
cljs.core.println.call(null," ",doc_39506);
} else {
}

var G__39508 = cljs.core.next.call(null,seq__39441_39496__$1);
var G__39509 = null;
var G__39510 = (0);
var G__39511 = (0);
seq__39441_39481 = G__39508;
chunk__39442_39482 = G__39509;
count__39443_39483 = G__39510;
i__39444_39484 = G__39511;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__39455 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39456 = null;
var count__39457 = (0);
var i__39458 = (0);
while(true){
if((i__39458 < count__39457)){
var role = cljs.core._nth.call(null,chunk__39456,i__39458);
var temp__4657__auto___39512__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39512__$1)){
var spec_39513 = temp__4657__auto___39512__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39513));
} else {
}

var G__39514 = seq__39455;
var G__39515 = chunk__39456;
var G__39516 = count__39457;
var G__39517 = (i__39458 + (1));
seq__39455 = G__39514;
chunk__39456 = G__39515;
count__39457 = G__39516;
i__39458 = G__39517;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39455);
if(temp__4657__auto____$1){
var seq__39455__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39455__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__39455__$1);
var G__39518 = cljs.core.chunk_rest.call(null,seq__39455__$1);
var G__39519 = c__25562__auto__;
var G__39520 = cljs.core.count.call(null,c__25562__auto__);
var G__39521 = (0);
seq__39455 = G__39518;
chunk__39456 = G__39519;
count__39457 = G__39520;
i__39458 = G__39521;
continue;
} else {
var role = cljs.core.first.call(null,seq__39455__$1);
var temp__4657__auto___39522__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39522__$2)){
var spec_39523 = temp__4657__auto___39522__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39523));
} else {
}

var G__39524 = cljs.core.next.call(null,seq__39455__$1);
var G__39525 = null;
var G__39526 = (0);
var G__39527 = (0);
seq__39455 = G__39524;
chunk__39456 = G__39525;
count__39457 = G__39526;
i__39458 = G__39527;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1478445835117