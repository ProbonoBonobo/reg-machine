// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50026){
var map__50051 = p__50026;
var map__50051__$1 = ((((!((map__50051 == null)))?((((map__50051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50051):map__50051);
var m = map__50051__$1;
var n = cljs.core.get.call(null,map__50051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50053_50075 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50054_50076 = null;
var count__50055_50077 = (0);
var i__50056_50078 = (0);
while(true){
if((i__50056_50078 < count__50055_50077)){
var f_50079 = cljs.core._nth.call(null,chunk__50054_50076,i__50056_50078);
cljs.core.println.call(null,"  ",f_50079);

var G__50080 = seq__50053_50075;
var G__50081 = chunk__50054_50076;
var G__50082 = count__50055_50077;
var G__50083 = (i__50056_50078 + (1));
seq__50053_50075 = G__50080;
chunk__50054_50076 = G__50081;
count__50055_50077 = G__50082;
i__50056_50078 = G__50083;
continue;
} else {
var temp__4657__auto___50084 = cljs.core.seq.call(null,seq__50053_50075);
if(temp__4657__auto___50084){
var seq__50053_50085__$1 = temp__4657__auto___50084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50053_50085__$1)){
var c__25562__auto___50086 = cljs.core.chunk_first.call(null,seq__50053_50085__$1);
var G__50087 = cljs.core.chunk_rest.call(null,seq__50053_50085__$1);
var G__50088 = c__25562__auto___50086;
var G__50089 = cljs.core.count.call(null,c__25562__auto___50086);
var G__50090 = (0);
seq__50053_50075 = G__50087;
chunk__50054_50076 = G__50088;
count__50055_50077 = G__50089;
i__50056_50078 = G__50090;
continue;
} else {
var f_50091 = cljs.core.first.call(null,seq__50053_50085__$1);
cljs.core.println.call(null,"  ",f_50091);

var G__50092 = cljs.core.next.call(null,seq__50053_50085__$1);
var G__50093 = null;
var G__50094 = (0);
var G__50095 = (0);
seq__50053_50075 = G__50092;
chunk__50054_50076 = G__50093;
count__50055_50077 = G__50094;
i__50056_50078 = G__50095;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50096 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50096);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50096)))?cljs.core.second.call(null,arglists_50096):arglists_50096));
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
var seq__50057_50097 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50058_50098 = null;
var count__50059_50099 = (0);
var i__50060_50100 = (0);
while(true){
if((i__50060_50100 < count__50059_50099)){
var vec__50061_50101 = cljs.core._nth.call(null,chunk__50058_50098,i__50060_50100);
var name_50102 = cljs.core.nth.call(null,vec__50061_50101,(0),null);
var map__50064_50103 = cljs.core.nth.call(null,vec__50061_50101,(1),null);
var map__50064_50104__$1 = ((((!((map__50064_50103 == null)))?((((map__50064_50103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50064_50103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50064_50103):map__50064_50103);
var doc_50105 = cljs.core.get.call(null,map__50064_50104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50106 = cljs.core.get.call(null,map__50064_50104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50102);

cljs.core.println.call(null," ",arglists_50106);

if(cljs.core.truth_(doc_50105)){
cljs.core.println.call(null," ",doc_50105);
} else {
}

var G__50107 = seq__50057_50097;
var G__50108 = chunk__50058_50098;
var G__50109 = count__50059_50099;
var G__50110 = (i__50060_50100 + (1));
seq__50057_50097 = G__50107;
chunk__50058_50098 = G__50108;
count__50059_50099 = G__50109;
i__50060_50100 = G__50110;
continue;
} else {
var temp__4657__auto___50111 = cljs.core.seq.call(null,seq__50057_50097);
if(temp__4657__auto___50111){
var seq__50057_50112__$1 = temp__4657__auto___50111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50057_50112__$1)){
var c__25562__auto___50113 = cljs.core.chunk_first.call(null,seq__50057_50112__$1);
var G__50114 = cljs.core.chunk_rest.call(null,seq__50057_50112__$1);
var G__50115 = c__25562__auto___50113;
var G__50116 = cljs.core.count.call(null,c__25562__auto___50113);
var G__50117 = (0);
seq__50057_50097 = G__50114;
chunk__50058_50098 = G__50115;
count__50059_50099 = G__50116;
i__50060_50100 = G__50117;
continue;
} else {
var vec__50066_50118 = cljs.core.first.call(null,seq__50057_50112__$1);
var name_50119 = cljs.core.nth.call(null,vec__50066_50118,(0),null);
var map__50069_50120 = cljs.core.nth.call(null,vec__50066_50118,(1),null);
var map__50069_50121__$1 = ((((!((map__50069_50120 == null)))?((((map__50069_50120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50069_50120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50069_50120):map__50069_50120);
var doc_50122 = cljs.core.get.call(null,map__50069_50121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50123 = cljs.core.get.call(null,map__50069_50121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50119);

cljs.core.println.call(null," ",arglists_50123);

if(cljs.core.truth_(doc_50122)){
cljs.core.println.call(null," ",doc_50122);
} else {
}

var G__50124 = cljs.core.next.call(null,seq__50057_50112__$1);
var G__50125 = null;
var G__50126 = (0);
var G__50127 = (0);
seq__50057_50097 = G__50124;
chunk__50058_50098 = G__50125;
count__50059_50099 = G__50126;
i__50060_50100 = G__50127;
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

var seq__50071 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50072 = null;
var count__50073 = (0);
var i__50074 = (0);
while(true){
if((i__50074 < count__50073)){
var role = cljs.core._nth.call(null,chunk__50072,i__50074);
var temp__4657__auto___50128__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50128__$1)){
var spec_50129 = temp__4657__auto___50128__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_50129));
} else {
}

var G__50130 = seq__50071;
var G__50131 = chunk__50072;
var G__50132 = count__50073;
var G__50133 = (i__50074 + (1));
seq__50071 = G__50130;
chunk__50072 = G__50131;
count__50073 = G__50132;
i__50074 = G__50133;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__50071);
if(temp__4657__auto____$1){
var seq__50071__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50071__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__50071__$1);
var G__50134 = cljs.core.chunk_rest.call(null,seq__50071__$1);
var G__50135 = c__25562__auto__;
var G__50136 = cljs.core.count.call(null,c__25562__auto__);
var G__50137 = (0);
seq__50071 = G__50134;
chunk__50072 = G__50135;
count__50073 = G__50136;
i__50074 = G__50137;
continue;
} else {
var role = cljs.core.first.call(null,seq__50071__$1);
var temp__4657__auto___50138__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50138__$2)){
var spec_50139 = temp__4657__auto___50138__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_50139));
} else {
}

var G__50140 = cljs.core.next.call(null,seq__50071__$1);
var G__50141 = null;
var G__50142 = (0);
var G__50143 = (0);
seq__50071 = G__50140;
chunk__50072 = G__50141;
count__50073 = G__50142;
i__50074 = G__50143;
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

//# sourceMappingURL=repl.js.map?rel=1477762295080