// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__75823){
var map__75848 = p__75823;
var map__75848__$1 = ((((!((map__75848 == null)))?((((map__75848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75848):map__75848);
var m = map__75848__$1;
var n = cljs.core.get.call(null,map__75848__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__75848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__75850_75872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75851_75873 = null;
var count__75852_75874 = (0);
var i__75853_75875 = (0);
while(true){
if((i__75853_75875 < count__75852_75874)){
var f_75876 = cljs.core._nth.call(null,chunk__75851_75873,i__75853_75875);
cljs.core.println.call(null,"  ",f_75876);

var G__75877 = seq__75850_75872;
var G__75878 = chunk__75851_75873;
var G__75879 = count__75852_75874;
var G__75880 = (i__75853_75875 + (1));
seq__75850_75872 = G__75877;
chunk__75851_75873 = G__75878;
count__75852_75874 = G__75879;
i__75853_75875 = G__75880;
continue;
} else {
var temp__4657__auto___75881 = cljs.core.seq.call(null,seq__75850_75872);
if(temp__4657__auto___75881){
var seq__75850_75882__$1 = temp__4657__auto___75881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75850_75882__$1)){
var c__25562__auto___75883 = cljs.core.chunk_first.call(null,seq__75850_75882__$1);
var G__75884 = cljs.core.chunk_rest.call(null,seq__75850_75882__$1);
var G__75885 = c__25562__auto___75883;
var G__75886 = cljs.core.count.call(null,c__25562__auto___75883);
var G__75887 = (0);
seq__75850_75872 = G__75884;
chunk__75851_75873 = G__75885;
count__75852_75874 = G__75886;
i__75853_75875 = G__75887;
continue;
} else {
var f_75888 = cljs.core.first.call(null,seq__75850_75882__$1);
cljs.core.println.call(null,"  ",f_75888);

var G__75889 = cljs.core.next.call(null,seq__75850_75882__$1);
var G__75890 = null;
var G__75891 = (0);
var G__75892 = (0);
seq__75850_75872 = G__75889;
chunk__75851_75873 = G__75890;
count__75852_75874 = G__75891;
i__75853_75875 = G__75892;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_75893 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_75893);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_75893)))?cljs.core.second.call(null,arglists_75893):arglists_75893));
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
var seq__75854_75894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75855_75895 = null;
var count__75856_75896 = (0);
var i__75857_75897 = (0);
while(true){
if((i__75857_75897 < count__75856_75896)){
var vec__75858_75898 = cljs.core._nth.call(null,chunk__75855_75895,i__75857_75897);
var name_75899 = cljs.core.nth.call(null,vec__75858_75898,(0),null);
var map__75861_75900 = cljs.core.nth.call(null,vec__75858_75898,(1),null);
var map__75861_75901__$1 = ((((!((map__75861_75900 == null)))?((((map__75861_75900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75861_75900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75861_75900):map__75861_75900);
var doc_75902 = cljs.core.get.call(null,map__75861_75901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75903 = cljs.core.get.call(null,map__75861_75901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_75899);

cljs.core.println.call(null," ",arglists_75903);

if(cljs.core.truth_(doc_75902)){
cljs.core.println.call(null," ",doc_75902);
} else {
}

var G__75904 = seq__75854_75894;
var G__75905 = chunk__75855_75895;
var G__75906 = count__75856_75896;
var G__75907 = (i__75857_75897 + (1));
seq__75854_75894 = G__75904;
chunk__75855_75895 = G__75905;
count__75856_75896 = G__75906;
i__75857_75897 = G__75907;
continue;
} else {
var temp__4657__auto___75908 = cljs.core.seq.call(null,seq__75854_75894);
if(temp__4657__auto___75908){
var seq__75854_75909__$1 = temp__4657__auto___75908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75854_75909__$1)){
var c__25562__auto___75910 = cljs.core.chunk_first.call(null,seq__75854_75909__$1);
var G__75911 = cljs.core.chunk_rest.call(null,seq__75854_75909__$1);
var G__75912 = c__25562__auto___75910;
var G__75913 = cljs.core.count.call(null,c__25562__auto___75910);
var G__75914 = (0);
seq__75854_75894 = G__75911;
chunk__75855_75895 = G__75912;
count__75856_75896 = G__75913;
i__75857_75897 = G__75914;
continue;
} else {
var vec__75863_75915 = cljs.core.first.call(null,seq__75854_75909__$1);
var name_75916 = cljs.core.nth.call(null,vec__75863_75915,(0),null);
var map__75866_75917 = cljs.core.nth.call(null,vec__75863_75915,(1),null);
var map__75866_75918__$1 = ((((!((map__75866_75917 == null)))?((((map__75866_75917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75866_75917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75866_75917):map__75866_75917);
var doc_75919 = cljs.core.get.call(null,map__75866_75918__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75920 = cljs.core.get.call(null,map__75866_75918__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_75916);

cljs.core.println.call(null," ",arglists_75920);

if(cljs.core.truth_(doc_75919)){
cljs.core.println.call(null," ",doc_75919);
} else {
}

var G__75921 = cljs.core.next.call(null,seq__75854_75909__$1);
var G__75922 = null;
var G__75923 = (0);
var G__75924 = (0);
seq__75854_75894 = G__75921;
chunk__75855_75895 = G__75922;
count__75856_75896 = G__75923;
i__75857_75897 = G__75924;
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

var seq__75868 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__75869 = null;
var count__75870 = (0);
var i__75871 = (0);
while(true){
if((i__75871 < count__75870)){
var role = cljs.core._nth.call(null,chunk__75869,i__75871);
var temp__4657__auto___75925__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___75925__$1)){
var spec_75926 = temp__4657__auto___75925__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_75926));
} else {
}

var G__75927 = seq__75868;
var G__75928 = chunk__75869;
var G__75929 = count__75870;
var G__75930 = (i__75871 + (1));
seq__75868 = G__75927;
chunk__75869 = G__75928;
count__75870 = G__75929;
i__75871 = G__75930;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__75868);
if(temp__4657__auto____$1){
var seq__75868__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75868__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__75868__$1);
var G__75931 = cljs.core.chunk_rest.call(null,seq__75868__$1);
var G__75932 = c__25562__auto__;
var G__75933 = cljs.core.count.call(null,c__25562__auto__);
var G__75934 = (0);
seq__75868 = G__75931;
chunk__75869 = G__75932;
count__75870 = G__75933;
i__75871 = G__75934;
continue;
} else {
var role = cljs.core.first.call(null,seq__75868__$1);
var temp__4657__auto___75935__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___75935__$2)){
var spec_75936 = temp__4657__auto___75935__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_75936));
} else {
}

var G__75937 = cljs.core.next.call(null,seq__75868__$1);
var G__75938 = null;
var G__75939 = (0);
var G__75940 = (0);
seq__75868 = G__75937;
chunk__75869 = G__75938;
count__75870 = G__75939;
i__75871 = G__75940;
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

//# sourceMappingURL=repl.js.map?rel=1478402653256