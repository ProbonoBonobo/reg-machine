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
var seq__41086_41100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41087_41101 = null;
var count__41088_41102 = (0);
var i__41089_41103 = (0);
while(true){
if((i__41089_41103 < count__41088_41102)){
var f_41104 = cljs.core._nth.call(null,chunk__41087_41101,i__41089_41103);
cljs.core.println.call(null,"  ",f_41104);

var G__41105 = seq__41086_41100;
var G__41106 = chunk__41087_41101;
var G__41107 = count__41088_41102;
var G__41108 = (i__41089_41103 + (1));
seq__41086_41100 = G__41105;
chunk__41087_41101 = G__41106;
count__41088_41102 = G__41107;
i__41089_41103 = G__41108;
continue;
} else {
var temp__4425__auto___41109 = cljs.core.seq.call(null,seq__41086_41100);
if(temp__4425__auto___41109){
var seq__41086_41110__$1 = temp__4425__auto___41109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41086_41110__$1)){
var c__20004__auto___41111 = cljs.core.chunk_first.call(null,seq__41086_41110__$1);
var G__41112 = cljs.core.chunk_rest.call(null,seq__41086_41110__$1);
var G__41113 = c__20004__auto___41111;
var G__41114 = cljs.core.count.call(null,c__20004__auto___41111);
var G__41115 = (0);
seq__41086_41100 = G__41112;
chunk__41087_41101 = G__41113;
count__41088_41102 = G__41114;
i__41089_41103 = G__41115;
continue;
} else {
var f_41116 = cljs.core.first.call(null,seq__41086_41110__$1);
cljs.core.println.call(null,"  ",f_41116);

var G__41117 = cljs.core.next.call(null,seq__41086_41110__$1);
var G__41118 = null;
var G__41119 = (0);
var G__41120 = (0);
seq__41086_41100 = G__41117;
chunk__41087_41101 = G__41118;
count__41088_41102 = G__41119;
i__41089_41103 = G__41120;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41121 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19201__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41121);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41121)))?cljs.core.second.call(null,arglists_41121):arglists_41121));
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
var seq__41090 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41091 = null;
var count__41092 = (0);
var i__41093 = (0);
while(true){
if((i__41093 < count__41092)){
var vec__41094 = cljs.core._nth.call(null,chunk__41091,i__41093);
var name = cljs.core.nth.call(null,vec__41094,(0),null);
var map__41095 = cljs.core.nth.call(null,vec__41094,(1),null);
var map__41095__$1 = ((((!((map__41095 == null)))?((((map__41095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41095):map__41095);
var doc = cljs.core.get.call(null,map__41095__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41095__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41122 = seq__41090;
var G__41123 = chunk__41091;
var G__41124 = count__41092;
var G__41125 = (i__41093 + (1));
seq__41090 = G__41122;
chunk__41091 = G__41123;
count__41092 = G__41124;
i__41093 = G__41125;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41090);
if(temp__4425__auto__){
var seq__41090__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41090__$1)){
var c__20004__auto__ = cljs.core.chunk_first.call(null,seq__41090__$1);
var G__41126 = cljs.core.chunk_rest.call(null,seq__41090__$1);
var G__41127 = c__20004__auto__;
var G__41128 = cljs.core.count.call(null,c__20004__auto__);
var G__41129 = (0);
seq__41090 = G__41126;
chunk__41091 = G__41127;
count__41092 = G__41128;
i__41093 = G__41129;
continue;
} else {
var vec__41097 = cljs.core.first.call(null,seq__41090__$1);
var name = cljs.core.nth.call(null,vec__41097,(0),null);
var map__41098 = cljs.core.nth.call(null,vec__41097,(1),null);
var map__41098__$1 = ((((!((map__41098 == null)))?((((map__41098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41098):map__41098);
var doc = cljs.core.get.call(null,map__41098__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41098__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41130 = cljs.core.next.call(null,seq__41090__$1);
var G__41131 = null;
var G__41132 = (0);
var G__41133 = (0);
seq__41090 = G__41130;
chunk__41091 = G__41131;
count__41092 = G__41132;
i__41093 = G__41133;
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

//# sourceMappingURL=repl.js.map?rel=1444632663610