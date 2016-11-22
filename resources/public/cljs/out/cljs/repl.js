// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73580){
var map__73605 = p__73580;
var map__73605__$1 = ((((!((map__73605 == null)))?((((map__73605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73605):map__73605);
var m = map__73605__$1;
var n = cljs.core.get.call(null,map__73605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__73605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__73607_73629 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73608_73630 = null;
var count__73609_73631 = (0);
var i__73610_73632 = (0);
while(true){
if((i__73610_73632 < count__73609_73631)){
var f_73633 = cljs.core._nth.call(null,chunk__73608_73630,i__73610_73632);
cljs.core.println.call(null,"  ",f_73633);

var G__73634 = seq__73607_73629;
var G__73635 = chunk__73608_73630;
var G__73636 = count__73609_73631;
var G__73637 = (i__73610_73632 + (1));
seq__73607_73629 = G__73634;
chunk__73608_73630 = G__73635;
count__73609_73631 = G__73636;
i__73610_73632 = G__73637;
continue;
} else {
var temp__4657__auto___73638 = cljs.core.seq.call(null,seq__73607_73629);
if(temp__4657__auto___73638){
var seq__73607_73639__$1 = temp__4657__auto___73638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73607_73639__$1)){
var c__25713__auto___73640 = cljs.core.chunk_first.call(null,seq__73607_73639__$1);
var G__73641 = cljs.core.chunk_rest.call(null,seq__73607_73639__$1);
var G__73642 = c__25713__auto___73640;
var G__73643 = cljs.core.count.call(null,c__25713__auto___73640);
var G__73644 = (0);
seq__73607_73629 = G__73641;
chunk__73608_73630 = G__73642;
count__73609_73631 = G__73643;
i__73610_73632 = G__73644;
continue;
} else {
var f_73645 = cljs.core.first.call(null,seq__73607_73639__$1);
cljs.core.println.call(null,"  ",f_73645);

var G__73646 = cljs.core.next.call(null,seq__73607_73639__$1);
var G__73647 = null;
var G__73648 = (0);
var G__73649 = (0);
seq__73607_73629 = G__73646;
chunk__73608_73630 = G__73647;
count__73609_73631 = G__73648;
i__73610_73632 = G__73649;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73650 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_73650);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_73650)))?cljs.core.second.call(null,arglists_73650):arglists_73650));
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
var seq__73611_73651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73612_73652 = null;
var count__73613_73653 = (0);
var i__73614_73654 = (0);
while(true){
if((i__73614_73654 < count__73613_73653)){
var vec__73615_73655 = cljs.core._nth.call(null,chunk__73612_73652,i__73614_73654);
var name_73656 = cljs.core.nth.call(null,vec__73615_73655,(0),null);
var map__73618_73657 = cljs.core.nth.call(null,vec__73615_73655,(1),null);
var map__73618_73658__$1 = ((((!((map__73618_73657 == null)))?((((map__73618_73657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73618_73657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73618_73657):map__73618_73657);
var doc_73659 = cljs.core.get.call(null,map__73618_73658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73660 = cljs.core.get.call(null,map__73618_73658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73656);

cljs.core.println.call(null," ",arglists_73660);

if(cljs.core.truth_(doc_73659)){
cljs.core.println.call(null," ",doc_73659);
} else {
}

var G__73661 = seq__73611_73651;
var G__73662 = chunk__73612_73652;
var G__73663 = count__73613_73653;
var G__73664 = (i__73614_73654 + (1));
seq__73611_73651 = G__73661;
chunk__73612_73652 = G__73662;
count__73613_73653 = G__73663;
i__73614_73654 = G__73664;
continue;
} else {
var temp__4657__auto___73665 = cljs.core.seq.call(null,seq__73611_73651);
if(temp__4657__auto___73665){
var seq__73611_73666__$1 = temp__4657__auto___73665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73611_73666__$1)){
var c__25713__auto___73667 = cljs.core.chunk_first.call(null,seq__73611_73666__$1);
var G__73668 = cljs.core.chunk_rest.call(null,seq__73611_73666__$1);
var G__73669 = c__25713__auto___73667;
var G__73670 = cljs.core.count.call(null,c__25713__auto___73667);
var G__73671 = (0);
seq__73611_73651 = G__73668;
chunk__73612_73652 = G__73669;
count__73613_73653 = G__73670;
i__73614_73654 = G__73671;
continue;
} else {
var vec__73620_73672 = cljs.core.first.call(null,seq__73611_73666__$1);
var name_73673 = cljs.core.nth.call(null,vec__73620_73672,(0),null);
var map__73623_73674 = cljs.core.nth.call(null,vec__73620_73672,(1),null);
var map__73623_73675__$1 = ((((!((map__73623_73674 == null)))?((((map__73623_73674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73623_73674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73623_73674):map__73623_73674);
var doc_73676 = cljs.core.get.call(null,map__73623_73675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73677 = cljs.core.get.call(null,map__73623_73675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73673);

cljs.core.println.call(null," ",arglists_73677);

if(cljs.core.truth_(doc_73676)){
cljs.core.println.call(null," ",doc_73676);
} else {
}

var G__73678 = cljs.core.next.call(null,seq__73611_73666__$1);
var G__73679 = null;
var G__73680 = (0);
var G__73681 = (0);
seq__73611_73651 = G__73678;
chunk__73612_73652 = G__73679;
count__73613_73653 = G__73680;
i__73614_73654 = G__73681;
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

var seq__73625 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73626 = null;
var count__73627 = (0);
var i__73628 = (0);
while(true){
if((i__73628 < count__73627)){
var role = cljs.core._nth.call(null,chunk__73626,i__73628);
var temp__4657__auto___73682__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___73682__$1)){
var spec_73683 = temp__4657__auto___73682__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_73683));
} else {
}

var G__73684 = seq__73625;
var G__73685 = chunk__73626;
var G__73686 = count__73627;
var G__73687 = (i__73628 + (1));
seq__73625 = G__73684;
chunk__73626 = G__73685;
count__73627 = G__73686;
i__73628 = G__73687;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__73625);
if(temp__4657__auto____$1){
var seq__73625__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73625__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__73625__$1);
var G__73688 = cljs.core.chunk_rest.call(null,seq__73625__$1);
var G__73689 = c__25713__auto__;
var G__73690 = cljs.core.count.call(null,c__25713__auto__);
var G__73691 = (0);
seq__73625 = G__73688;
chunk__73626 = G__73689;
count__73627 = G__73690;
i__73628 = G__73691;
continue;
} else {
var role = cljs.core.first.call(null,seq__73625__$1);
var temp__4657__auto___73692__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___73692__$2)){
var spec_73693 = temp__4657__auto___73692__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_73693));
} else {
}

var G__73694 = cljs.core.next.call(null,seq__73625__$1);
var G__73695 = null;
var G__73696 = (0);
var G__73697 = (0);
seq__73625 = G__73694;
chunk__73626 = G__73695;
count__73627 = G__73696;
i__73628 = G__73697;
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

//# sourceMappingURL=repl.js.map?rel=1479784481315