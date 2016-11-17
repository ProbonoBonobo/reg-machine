// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32271){
var map__32296 = p__32271;
var map__32296__$1 = ((((!((map__32296 == null)))?((((map__32296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32296):map__32296);
var m = map__32296__$1;
var n = cljs.core.get.call(null,map__32296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32296__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32298_32320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32299_32321 = null;
var count__32300_32322 = (0);
var i__32301_32323 = (0);
while(true){
if((i__32301_32323 < count__32300_32322)){
var f_32324 = cljs.core._nth.call(null,chunk__32299_32321,i__32301_32323);
cljs.core.println.call(null,"  ",f_32324);

var G__32325 = seq__32298_32320;
var G__32326 = chunk__32299_32321;
var G__32327 = count__32300_32322;
var G__32328 = (i__32301_32323 + (1));
seq__32298_32320 = G__32325;
chunk__32299_32321 = G__32326;
count__32300_32322 = G__32327;
i__32301_32323 = G__32328;
continue;
} else {
var temp__4657__auto___32329 = cljs.core.seq.call(null,seq__32298_32320);
if(temp__4657__auto___32329){
var seq__32298_32330__$1 = temp__4657__auto___32329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32298_32330__$1)){
var c__25562__auto___32331 = cljs.core.chunk_first.call(null,seq__32298_32330__$1);
var G__32332 = cljs.core.chunk_rest.call(null,seq__32298_32330__$1);
var G__32333 = c__25562__auto___32331;
var G__32334 = cljs.core.count.call(null,c__25562__auto___32331);
var G__32335 = (0);
seq__32298_32320 = G__32332;
chunk__32299_32321 = G__32333;
count__32300_32322 = G__32334;
i__32301_32323 = G__32335;
continue;
} else {
var f_32336 = cljs.core.first.call(null,seq__32298_32330__$1);
cljs.core.println.call(null,"  ",f_32336);

var G__32337 = cljs.core.next.call(null,seq__32298_32330__$1);
var G__32338 = null;
var G__32339 = (0);
var G__32340 = (0);
seq__32298_32320 = G__32337;
chunk__32299_32321 = G__32338;
count__32300_32322 = G__32339;
i__32301_32323 = G__32340;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32341 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32341);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32341)))?cljs.core.second.call(null,arglists_32341):arglists_32341));
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
var seq__32302_32342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32303_32343 = null;
var count__32304_32344 = (0);
var i__32305_32345 = (0);
while(true){
if((i__32305_32345 < count__32304_32344)){
var vec__32306_32346 = cljs.core._nth.call(null,chunk__32303_32343,i__32305_32345);
var name_32347 = cljs.core.nth.call(null,vec__32306_32346,(0),null);
var map__32309_32348 = cljs.core.nth.call(null,vec__32306_32346,(1),null);
var map__32309_32349__$1 = ((((!((map__32309_32348 == null)))?((((map__32309_32348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32309_32348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32309_32348):map__32309_32348);
var doc_32350 = cljs.core.get.call(null,map__32309_32349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32351 = cljs.core.get.call(null,map__32309_32349__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32347);

cljs.core.println.call(null," ",arglists_32351);

if(cljs.core.truth_(doc_32350)){
cljs.core.println.call(null," ",doc_32350);
} else {
}

var G__32352 = seq__32302_32342;
var G__32353 = chunk__32303_32343;
var G__32354 = count__32304_32344;
var G__32355 = (i__32305_32345 + (1));
seq__32302_32342 = G__32352;
chunk__32303_32343 = G__32353;
count__32304_32344 = G__32354;
i__32305_32345 = G__32355;
continue;
} else {
var temp__4657__auto___32356 = cljs.core.seq.call(null,seq__32302_32342);
if(temp__4657__auto___32356){
var seq__32302_32357__$1 = temp__4657__auto___32356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32302_32357__$1)){
var c__25562__auto___32358 = cljs.core.chunk_first.call(null,seq__32302_32357__$1);
var G__32359 = cljs.core.chunk_rest.call(null,seq__32302_32357__$1);
var G__32360 = c__25562__auto___32358;
var G__32361 = cljs.core.count.call(null,c__25562__auto___32358);
var G__32362 = (0);
seq__32302_32342 = G__32359;
chunk__32303_32343 = G__32360;
count__32304_32344 = G__32361;
i__32305_32345 = G__32362;
continue;
} else {
var vec__32311_32363 = cljs.core.first.call(null,seq__32302_32357__$1);
var name_32364 = cljs.core.nth.call(null,vec__32311_32363,(0),null);
var map__32314_32365 = cljs.core.nth.call(null,vec__32311_32363,(1),null);
var map__32314_32366__$1 = ((((!((map__32314_32365 == null)))?((((map__32314_32365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32314_32365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32314_32365):map__32314_32365);
var doc_32367 = cljs.core.get.call(null,map__32314_32366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32368 = cljs.core.get.call(null,map__32314_32366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32364);

cljs.core.println.call(null," ",arglists_32368);

if(cljs.core.truth_(doc_32367)){
cljs.core.println.call(null," ",doc_32367);
} else {
}

var G__32369 = cljs.core.next.call(null,seq__32302_32357__$1);
var G__32370 = null;
var G__32371 = (0);
var G__32372 = (0);
seq__32302_32342 = G__32369;
chunk__32303_32343 = G__32370;
count__32304_32344 = G__32371;
i__32305_32345 = G__32372;
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

var seq__32316 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32317 = null;
var count__32318 = (0);
var i__32319 = (0);
while(true){
if((i__32319 < count__32318)){
var role = cljs.core._nth.call(null,chunk__32317,i__32319);
var temp__4657__auto___32373__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32373__$1)){
var spec_32374 = temp__4657__auto___32373__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32374));
} else {
}

var G__32375 = seq__32316;
var G__32376 = chunk__32317;
var G__32377 = count__32318;
var G__32378 = (i__32319 + (1));
seq__32316 = G__32375;
chunk__32317 = G__32376;
count__32318 = G__32377;
i__32319 = G__32378;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32316);
if(temp__4657__auto____$1){
var seq__32316__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32316__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__32316__$1);
var G__32379 = cljs.core.chunk_rest.call(null,seq__32316__$1);
var G__32380 = c__25562__auto__;
var G__32381 = cljs.core.count.call(null,c__25562__auto__);
var G__32382 = (0);
seq__32316 = G__32379;
chunk__32317 = G__32380;
count__32318 = G__32381;
i__32319 = G__32382;
continue;
} else {
var role = cljs.core.first.call(null,seq__32316__$1);
var temp__4657__auto___32383__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32383__$2)){
var spec_32384 = temp__4657__auto___32383__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32384));
} else {
}

var G__32385 = cljs.core.next.call(null,seq__32316__$1);
var G__32386 = null;
var G__32387 = (0);
var G__32388 = (0);
seq__32316 = G__32385;
chunk__32317 = G__32386;
count__32318 = G__32387;
i__32319 = G__32388;
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

//# sourceMappingURL=repl.js.map?rel=1479332385351