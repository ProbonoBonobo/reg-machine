// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__21810_21824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21811_21825 = null;
var count__21812_21826 = (0);
var i__21813_21827 = (0);
while(true){
if((i__21813_21827 < count__21812_21826)){
var f_21828 = cljs.core._nth.call(null,chunk__21811_21825,i__21813_21827);
cljs.core.println.call(null,"  ",f_21828);

var G__21829 = seq__21810_21824;
var G__21830 = chunk__21811_21825;
var G__21831 = count__21812_21826;
var G__21832 = (i__21813_21827 + (1));
seq__21810_21824 = G__21829;
chunk__21811_21825 = G__21830;
count__21812_21826 = G__21831;
i__21813_21827 = G__21832;
continue;
} else {
var temp__4425__auto___21833 = cljs.core.seq.call(null,seq__21810_21824);
if(temp__4425__auto___21833){
var seq__21810_21834__$1 = temp__4425__auto___21833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21810_21834__$1)){
var c__20492__auto___21835 = cljs.core.chunk_first.call(null,seq__21810_21834__$1);
var G__21836 = cljs.core.chunk_rest.call(null,seq__21810_21834__$1);
var G__21837 = c__20492__auto___21835;
var G__21838 = cljs.core.count.call(null,c__20492__auto___21835);
var G__21839 = (0);
seq__21810_21824 = G__21836;
chunk__21811_21825 = G__21837;
count__21812_21826 = G__21838;
i__21813_21827 = G__21839;
continue;
} else {
var f_21840 = cljs.core.first.call(null,seq__21810_21834__$1);
cljs.core.println.call(null,"  ",f_21840);

var G__21841 = cljs.core.next.call(null,seq__21810_21834__$1);
var G__21842 = null;
var G__21843 = (0);
var G__21844 = (0);
seq__21810_21824 = G__21841;
chunk__21811_21825 = G__21842;
count__21812_21826 = G__21843;
i__21813_21827 = G__21844;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21845 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19689__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19689__auto__)){
return or__19689__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21845);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21845)))?cljs.core.second.call(null,arglists_21845):arglists_21845));
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
var seq__21814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21815 = null;
var count__21816 = (0);
var i__21817 = (0);
while(true){
if((i__21817 < count__21816)){
var vec__21818 = cljs.core._nth.call(null,chunk__21815,i__21817);
var name = cljs.core.nth.call(null,vec__21818,(0),null);
var map__21819 = cljs.core.nth.call(null,vec__21818,(1),null);
var map__21819__$1 = ((((!((map__21819 == null)))?((((map__21819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21819):map__21819);
var doc = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21846 = seq__21814;
var G__21847 = chunk__21815;
var G__21848 = count__21816;
var G__21849 = (i__21817 + (1));
seq__21814 = G__21846;
chunk__21815 = G__21847;
count__21816 = G__21848;
i__21817 = G__21849;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21814);
if(temp__4425__auto__){
var seq__21814__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21814__$1)){
var c__20492__auto__ = cljs.core.chunk_first.call(null,seq__21814__$1);
var G__21850 = cljs.core.chunk_rest.call(null,seq__21814__$1);
var G__21851 = c__20492__auto__;
var G__21852 = cljs.core.count.call(null,c__20492__auto__);
var G__21853 = (0);
seq__21814 = G__21850;
chunk__21815 = G__21851;
count__21816 = G__21852;
i__21817 = G__21853;
continue;
} else {
var vec__21821 = cljs.core.first.call(null,seq__21814__$1);
var name = cljs.core.nth.call(null,vec__21821,(0),null);
var map__21822 = cljs.core.nth.call(null,vec__21821,(1),null);
var map__21822__$1 = ((((!((map__21822 == null)))?((((map__21822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21822):map__21822);
var doc = cljs.core.get.call(null,map__21822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21822__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21854 = cljs.core.next.call(null,seq__21814__$1);
var G__21855 = null;
var G__21856 = (0);
var G__21857 = (0);
seq__21814 = G__21854;
chunk__21815 = G__21855;
count__21816 = G__21856;
i__21817 = G__21857;
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
}
});

//# sourceMappingURL=repl.js.map