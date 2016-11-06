// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61463){
var map__61488 = p__61463;
var map__61488__$1 = ((((!((map__61488 == null)))?((((map__61488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61488):map__61488);
var m = map__61488__$1;
var n = cljs.core.get.call(null,map__61488__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__61488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__61490_61512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61491_61513 = null;
var count__61492_61514 = (0);
var i__61493_61515 = (0);
while(true){
if((i__61493_61515 < count__61492_61514)){
var f_61516 = cljs.core._nth.call(null,chunk__61491_61513,i__61493_61515);
cljs.core.println.call(null,"  ",f_61516);

var G__61517 = seq__61490_61512;
var G__61518 = chunk__61491_61513;
var G__61519 = count__61492_61514;
var G__61520 = (i__61493_61515 + (1));
seq__61490_61512 = G__61517;
chunk__61491_61513 = G__61518;
count__61492_61514 = G__61519;
i__61493_61515 = G__61520;
continue;
} else {
var temp__4657__auto___61521 = cljs.core.seq.call(null,seq__61490_61512);
if(temp__4657__auto___61521){
var seq__61490_61522__$1 = temp__4657__auto___61521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61490_61522__$1)){
var c__25562__auto___61523 = cljs.core.chunk_first.call(null,seq__61490_61522__$1);
var G__61524 = cljs.core.chunk_rest.call(null,seq__61490_61522__$1);
var G__61525 = c__25562__auto___61523;
var G__61526 = cljs.core.count.call(null,c__25562__auto___61523);
var G__61527 = (0);
seq__61490_61512 = G__61524;
chunk__61491_61513 = G__61525;
count__61492_61514 = G__61526;
i__61493_61515 = G__61527;
continue;
} else {
var f_61528 = cljs.core.first.call(null,seq__61490_61522__$1);
cljs.core.println.call(null,"  ",f_61528);

var G__61529 = cljs.core.next.call(null,seq__61490_61522__$1);
var G__61530 = null;
var G__61531 = (0);
var G__61532 = (0);
seq__61490_61512 = G__61529;
chunk__61491_61513 = G__61530;
count__61492_61514 = G__61531;
i__61493_61515 = G__61532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61533 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_61533);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_61533)))?cljs.core.second.call(null,arglists_61533):arglists_61533));
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
var seq__61494_61534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61495_61535 = null;
var count__61496_61536 = (0);
var i__61497_61537 = (0);
while(true){
if((i__61497_61537 < count__61496_61536)){
var vec__61498_61538 = cljs.core._nth.call(null,chunk__61495_61535,i__61497_61537);
var name_61539 = cljs.core.nth.call(null,vec__61498_61538,(0),null);
var map__61501_61540 = cljs.core.nth.call(null,vec__61498_61538,(1),null);
var map__61501_61541__$1 = ((((!((map__61501_61540 == null)))?((((map__61501_61540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61501_61540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61501_61540):map__61501_61540);
var doc_61542 = cljs.core.get.call(null,map__61501_61541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61543 = cljs.core.get.call(null,map__61501_61541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61539);

cljs.core.println.call(null," ",arglists_61543);

if(cljs.core.truth_(doc_61542)){
cljs.core.println.call(null," ",doc_61542);
} else {
}

var G__61544 = seq__61494_61534;
var G__61545 = chunk__61495_61535;
var G__61546 = count__61496_61536;
var G__61547 = (i__61497_61537 + (1));
seq__61494_61534 = G__61544;
chunk__61495_61535 = G__61545;
count__61496_61536 = G__61546;
i__61497_61537 = G__61547;
continue;
} else {
var temp__4657__auto___61548 = cljs.core.seq.call(null,seq__61494_61534);
if(temp__4657__auto___61548){
var seq__61494_61549__$1 = temp__4657__auto___61548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61494_61549__$1)){
var c__25562__auto___61550 = cljs.core.chunk_first.call(null,seq__61494_61549__$1);
var G__61551 = cljs.core.chunk_rest.call(null,seq__61494_61549__$1);
var G__61552 = c__25562__auto___61550;
var G__61553 = cljs.core.count.call(null,c__25562__auto___61550);
var G__61554 = (0);
seq__61494_61534 = G__61551;
chunk__61495_61535 = G__61552;
count__61496_61536 = G__61553;
i__61497_61537 = G__61554;
continue;
} else {
var vec__61503_61555 = cljs.core.first.call(null,seq__61494_61549__$1);
var name_61556 = cljs.core.nth.call(null,vec__61503_61555,(0),null);
var map__61506_61557 = cljs.core.nth.call(null,vec__61503_61555,(1),null);
var map__61506_61558__$1 = ((((!((map__61506_61557 == null)))?((((map__61506_61557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61506_61557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61506_61557):map__61506_61557);
var doc_61559 = cljs.core.get.call(null,map__61506_61558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61560 = cljs.core.get.call(null,map__61506_61558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61556);

cljs.core.println.call(null," ",arglists_61560);

if(cljs.core.truth_(doc_61559)){
cljs.core.println.call(null," ",doc_61559);
} else {
}

var G__61561 = cljs.core.next.call(null,seq__61494_61549__$1);
var G__61562 = null;
var G__61563 = (0);
var G__61564 = (0);
seq__61494_61534 = G__61561;
chunk__61495_61535 = G__61562;
count__61496_61536 = G__61563;
i__61497_61537 = G__61564;
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

var seq__61508 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61509 = null;
var count__61510 = (0);
var i__61511 = (0);
while(true){
if((i__61511 < count__61510)){
var role = cljs.core._nth.call(null,chunk__61509,i__61511);
var temp__4657__auto___61565__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61565__$1)){
var spec_61566 = temp__4657__auto___61565__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_61566));
} else {
}

var G__61567 = seq__61508;
var G__61568 = chunk__61509;
var G__61569 = count__61510;
var G__61570 = (i__61511 + (1));
seq__61508 = G__61567;
chunk__61509 = G__61568;
count__61510 = G__61569;
i__61511 = G__61570;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__61508);
if(temp__4657__auto____$1){
var seq__61508__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61508__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__61508__$1);
var G__61571 = cljs.core.chunk_rest.call(null,seq__61508__$1);
var G__61572 = c__25562__auto__;
var G__61573 = cljs.core.count.call(null,c__25562__auto__);
var G__61574 = (0);
seq__61508 = G__61571;
chunk__61509 = G__61572;
count__61510 = G__61573;
i__61511 = G__61574;
continue;
} else {
var role = cljs.core.first.call(null,seq__61508__$1);
var temp__4657__auto___61575__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61575__$2)){
var spec_61576 = temp__4657__auto___61575__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_61576));
} else {
}

var G__61577 = cljs.core.next.call(null,seq__61508__$1);
var G__61578 = null;
var G__61579 = (0);
var G__61580 = (0);
seq__61508 = G__61577;
chunk__61509 = G__61578;
count__61510 = G__61579;
i__61511 = G__61580;
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

//# sourceMappingURL=repl.js.map?rel=1478399630474