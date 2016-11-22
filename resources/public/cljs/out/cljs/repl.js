// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52275){
var map__52300 = p__52275;
var map__52300__$1 = ((((!((map__52300 == null)))?((((map__52300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52300):map__52300);
var m = map__52300__$1;
var n = cljs.core.get.call(null,map__52300__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52302_52324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52303_52325 = null;
var count__52304_52326 = (0);
var i__52305_52327 = (0);
while(true){
if((i__52305_52327 < count__52304_52326)){
var f_52328 = cljs.core._nth.call(null,chunk__52303_52325,i__52305_52327);
cljs.core.println.call(null,"  ",f_52328);

var G__52329 = seq__52302_52324;
var G__52330 = chunk__52303_52325;
var G__52331 = count__52304_52326;
var G__52332 = (i__52305_52327 + (1));
seq__52302_52324 = G__52329;
chunk__52303_52325 = G__52330;
count__52304_52326 = G__52331;
i__52305_52327 = G__52332;
continue;
} else {
var temp__4657__auto___52333 = cljs.core.seq.call(null,seq__52302_52324);
if(temp__4657__auto___52333){
var seq__52302_52334__$1 = temp__4657__auto___52333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52302_52334__$1)){
var c__25713__auto___52335 = cljs.core.chunk_first.call(null,seq__52302_52334__$1);
var G__52336 = cljs.core.chunk_rest.call(null,seq__52302_52334__$1);
var G__52337 = c__25713__auto___52335;
var G__52338 = cljs.core.count.call(null,c__25713__auto___52335);
var G__52339 = (0);
seq__52302_52324 = G__52336;
chunk__52303_52325 = G__52337;
count__52304_52326 = G__52338;
i__52305_52327 = G__52339;
continue;
} else {
var f_52340 = cljs.core.first.call(null,seq__52302_52334__$1);
cljs.core.println.call(null,"  ",f_52340);

var G__52341 = cljs.core.next.call(null,seq__52302_52334__$1);
var G__52342 = null;
var G__52343 = (0);
var G__52344 = (0);
seq__52302_52324 = G__52341;
chunk__52303_52325 = G__52342;
count__52304_52326 = G__52343;
i__52305_52327 = G__52344;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52345 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24899__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52345);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52345)))?cljs.core.second.call(null,arglists_52345):arglists_52345));
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
var seq__52306_52346 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52307_52347 = null;
var count__52308_52348 = (0);
var i__52309_52349 = (0);
while(true){
if((i__52309_52349 < count__52308_52348)){
var vec__52310_52350 = cljs.core._nth.call(null,chunk__52307_52347,i__52309_52349);
var name_52351 = cljs.core.nth.call(null,vec__52310_52350,(0),null);
var map__52313_52352 = cljs.core.nth.call(null,vec__52310_52350,(1),null);
var map__52313_52353__$1 = ((((!((map__52313_52352 == null)))?((((map__52313_52352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52313_52352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52313_52352):map__52313_52352);
var doc_52354 = cljs.core.get.call(null,map__52313_52353__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52355 = cljs.core.get.call(null,map__52313_52353__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52351);

cljs.core.println.call(null," ",arglists_52355);

if(cljs.core.truth_(doc_52354)){
cljs.core.println.call(null," ",doc_52354);
} else {
}

var G__52356 = seq__52306_52346;
var G__52357 = chunk__52307_52347;
var G__52358 = count__52308_52348;
var G__52359 = (i__52309_52349 + (1));
seq__52306_52346 = G__52356;
chunk__52307_52347 = G__52357;
count__52308_52348 = G__52358;
i__52309_52349 = G__52359;
continue;
} else {
var temp__4657__auto___52360 = cljs.core.seq.call(null,seq__52306_52346);
if(temp__4657__auto___52360){
var seq__52306_52361__$1 = temp__4657__auto___52360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52306_52361__$1)){
var c__25713__auto___52362 = cljs.core.chunk_first.call(null,seq__52306_52361__$1);
var G__52363 = cljs.core.chunk_rest.call(null,seq__52306_52361__$1);
var G__52364 = c__25713__auto___52362;
var G__52365 = cljs.core.count.call(null,c__25713__auto___52362);
var G__52366 = (0);
seq__52306_52346 = G__52363;
chunk__52307_52347 = G__52364;
count__52308_52348 = G__52365;
i__52309_52349 = G__52366;
continue;
} else {
var vec__52315_52367 = cljs.core.first.call(null,seq__52306_52361__$1);
var name_52368 = cljs.core.nth.call(null,vec__52315_52367,(0),null);
var map__52318_52369 = cljs.core.nth.call(null,vec__52315_52367,(1),null);
var map__52318_52370__$1 = ((((!((map__52318_52369 == null)))?((((map__52318_52369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52318_52369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52318_52369):map__52318_52369);
var doc_52371 = cljs.core.get.call(null,map__52318_52370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52372 = cljs.core.get.call(null,map__52318_52370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52368);

cljs.core.println.call(null," ",arglists_52372);

if(cljs.core.truth_(doc_52371)){
cljs.core.println.call(null," ",doc_52371);
} else {
}

var G__52373 = cljs.core.next.call(null,seq__52306_52361__$1);
var G__52374 = null;
var G__52375 = (0);
var G__52376 = (0);
seq__52306_52346 = G__52373;
chunk__52307_52347 = G__52374;
count__52308_52348 = G__52375;
i__52309_52349 = G__52376;
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

var seq__52320 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52321 = null;
var count__52322 = (0);
var i__52323 = (0);
while(true){
if((i__52323 < count__52322)){
var role = cljs.core._nth.call(null,chunk__52321,i__52323);
var temp__4657__auto___52377__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52377__$1)){
var spec_52378 = temp__4657__auto___52377__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_52378));
} else {
}

var G__52379 = seq__52320;
var G__52380 = chunk__52321;
var G__52381 = count__52322;
var G__52382 = (i__52323 + (1));
seq__52320 = G__52379;
chunk__52321 = G__52380;
count__52322 = G__52381;
i__52323 = G__52382;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__52320);
if(temp__4657__auto____$1){
var seq__52320__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52320__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__52320__$1);
var G__52383 = cljs.core.chunk_rest.call(null,seq__52320__$1);
var G__52384 = c__25713__auto__;
var G__52385 = cljs.core.count.call(null,c__25713__auto__);
var G__52386 = (0);
seq__52320 = G__52383;
chunk__52321 = G__52384;
count__52322 = G__52385;
i__52323 = G__52386;
continue;
} else {
var role = cljs.core.first.call(null,seq__52320__$1);
var temp__4657__auto___52387__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52387__$2)){
var spec_52388 = temp__4657__auto___52387__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_52388));
} else {
}

var G__52389 = cljs.core.next.call(null,seq__52320__$1);
var G__52390 = null;
var G__52391 = (0);
var G__52392 = (0);
seq__52320 = G__52389;
chunk__52321 = G__52390;
count__52322 = G__52391;
i__52323 = G__52392;
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

//# sourceMappingURL=repl.js.map?rel=1479783421708