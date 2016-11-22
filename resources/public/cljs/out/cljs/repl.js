// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63660){
var map__63685 = p__63660;
var map__63685__$1 = ((((!((map__63685 == null)))?((((map__63685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63685):map__63685);
var m = map__63685__$1;
var n = cljs.core.get.call(null,map__63685__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__63685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__63687_63709 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63688_63710 = null;
var count__63689_63711 = (0);
var i__63690_63712 = (0);
while(true){
if((i__63690_63712 < count__63689_63711)){
var f_63713 = cljs.core._nth.call(null,chunk__63688_63710,i__63690_63712);
cljs.core.println.call(null,"  ",f_63713);

var G__63714 = seq__63687_63709;
var G__63715 = chunk__63688_63710;
var G__63716 = count__63689_63711;
var G__63717 = (i__63690_63712 + (1));
seq__63687_63709 = G__63714;
chunk__63688_63710 = G__63715;
count__63689_63711 = G__63716;
i__63690_63712 = G__63717;
continue;
} else {
var temp__4657__auto___63718 = cljs.core.seq.call(null,seq__63687_63709);
if(temp__4657__auto___63718){
var seq__63687_63719__$1 = temp__4657__auto___63718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63687_63719__$1)){
var c__25713__auto___63720 = cljs.core.chunk_first.call(null,seq__63687_63719__$1);
var G__63721 = cljs.core.chunk_rest.call(null,seq__63687_63719__$1);
var G__63722 = c__25713__auto___63720;
var G__63723 = cljs.core.count.call(null,c__25713__auto___63720);
var G__63724 = (0);
seq__63687_63709 = G__63721;
chunk__63688_63710 = G__63722;
count__63689_63711 = G__63723;
i__63690_63712 = G__63724;
continue;
} else {
var f_63725 = cljs.core.first.call(null,seq__63687_63719__$1);
cljs.core.println.call(null,"  ",f_63725);

var G__63726 = cljs.core.next.call(null,seq__63687_63719__$1);
var G__63727 = null;
var G__63728 = (0);
var G__63729 = (0);
seq__63687_63709 = G__63726;
chunk__63688_63710 = G__63727;
count__63689_63711 = G__63728;
i__63690_63712 = G__63729;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63730 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_63730);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_63730)))?cljs.core.second.call(null,arglists_63730):arglists_63730));
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
var seq__63691_63731 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63692_63732 = null;
var count__63693_63733 = (0);
var i__63694_63734 = (0);
while(true){
if((i__63694_63734 < count__63693_63733)){
var vec__63695_63735 = cljs.core._nth.call(null,chunk__63692_63732,i__63694_63734);
var name_63736 = cljs.core.nth.call(null,vec__63695_63735,(0),null);
var map__63698_63737 = cljs.core.nth.call(null,vec__63695_63735,(1),null);
var map__63698_63738__$1 = ((((!((map__63698_63737 == null)))?((((map__63698_63737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63698_63737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63698_63737):map__63698_63737);
var doc_63739 = cljs.core.get.call(null,map__63698_63738__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63740 = cljs.core.get.call(null,map__63698_63738__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_63736);

cljs.core.println.call(null," ",arglists_63740);

if(cljs.core.truth_(doc_63739)){
cljs.core.println.call(null," ",doc_63739);
} else {
}

var G__63741 = seq__63691_63731;
var G__63742 = chunk__63692_63732;
var G__63743 = count__63693_63733;
var G__63744 = (i__63694_63734 + (1));
seq__63691_63731 = G__63741;
chunk__63692_63732 = G__63742;
count__63693_63733 = G__63743;
i__63694_63734 = G__63744;
continue;
} else {
var temp__4657__auto___63745 = cljs.core.seq.call(null,seq__63691_63731);
if(temp__4657__auto___63745){
var seq__63691_63746__$1 = temp__4657__auto___63745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63691_63746__$1)){
var c__25713__auto___63747 = cljs.core.chunk_first.call(null,seq__63691_63746__$1);
var G__63748 = cljs.core.chunk_rest.call(null,seq__63691_63746__$1);
var G__63749 = c__25713__auto___63747;
var G__63750 = cljs.core.count.call(null,c__25713__auto___63747);
var G__63751 = (0);
seq__63691_63731 = G__63748;
chunk__63692_63732 = G__63749;
count__63693_63733 = G__63750;
i__63694_63734 = G__63751;
continue;
} else {
var vec__63700_63752 = cljs.core.first.call(null,seq__63691_63746__$1);
var name_63753 = cljs.core.nth.call(null,vec__63700_63752,(0),null);
var map__63703_63754 = cljs.core.nth.call(null,vec__63700_63752,(1),null);
var map__63703_63755__$1 = ((((!((map__63703_63754 == null)))?((((map__63703_63754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63703_63754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63703_63754):map__63703_63754);
var doc_63756 = cljs.core.get.call(null,map__63703_63755__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63757 = cljs.core.get.call(null,map__63703_63755__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_63753);

cljs.core.println.call(null," ",arglists_63757);

if(cljs.core.truth_(doc_63756)){
cljs.core.println.call(null," ",doc_63756);
} else {
}

var G__63758 = cljs.core.next.call(null,seq__63691_63746__$1);
var G__63759 = null;
var G__63760 = (0);
var G__63761 = (0);
seq__63691_63731 = G__63758;
chunk__63692_63732 = G__63759;
count__63693_63733 = G__63760;
i__63694_63734 = G__63761;
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

var seq__63705 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63706 = null;
var count__63707 = (0);
var i__63708 = (0);
while(true){
if((i__63708 < count__63707)){
var role = cljs.core._nth.call(null,chunk__63706,i__63708);
var temp__4657__auto___63762__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___63762__$1)){
var spec_63763 = temp__4657__auto___63762__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_63763));
} else {
}

var G__63764 = seq__63705;
var G__63765 = chunk__63706;
var G__63766 = count__63707;
var G__63767 = (i__63708 + (1));
seq__63705 = G__63764;
chunk__63706 = G__63765;
count__63707 = G__63766;
i__63708 = G__63767;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__63705);
if(temp__4657__auto____$1){
var seq__63705__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63705__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__63705__$1);
var G__63768 = cljs.core.chunk_rest.call(null,seq__63705__$1);
var G__63769 = c__25713__auto__;
var G__63770 = cljs.core.count.call(null,c__25713__auto__);
var G__63771 = (0);
seq__63705 = G__63768;
chunk__63706 = G__63769;
count__63707 = G__63770;
i__63708 = G__63771;
continue;
} else {
var role = cljs.core.first.call(null,seq__63705__$1);
var temp__4657__auto___63772__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___63772__$2)){
var spec_63773 = temp__4657__auto___63772__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_63773));
} else {
}

var G__63774 = cljs.core.next.call(null,seq__63705__$1);
var G__63775 = null;
var G__63776 = (0);
var G__63777 = (0);
seq__63705 = G__63774;
chunk__63706 = G__63775;
count__63707 = G__63776;
i__63708 = G__63777;
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

//# sourceMappingURL=repl.js.map?rel=1479783763545