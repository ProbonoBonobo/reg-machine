// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__57304){
var vec__57305 = p__57304;
var i = cljs.core.nth.call(null,vec__57305,(0),null);
var v = cljs.core.nth.call(null,vec__57305,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__57311 = seg;
var gcol = cljs.core.nth.call(null,vec__57311,(0),null);
var source = cljs.core.nth.call(null,vec__57311,(1),null);
var line = cljs.core.nth.call(null,vec__57311,(2),null);
var col = cljs.core.nth.call(null,vec__57311,(3),null);
var name = cljs.core.nth.call(null,vec__57311,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__57320 = seg;
var gcol = cljs.core.nth.call(null,vec__57320,(0),null);
var source = cljs.core.nth.call(null,vec__57320,(1),null);
var line = cljs.core.nth.call(null,vec__57320,(2),null);
var col = cljs.core.nth.call(null,vec__57320,(3),null);
var name = cljs.core.nth.call(null,vec__57320,(4),null);
var vec__57323 = relseg;
var rgcol = cljs.core.nth.call(null,vec__57323,(0),null);
var rsource = cljs.core.nth.call(null,vec__57323,(1),null);
var rline = cljs.core.nth.call(null,vec__57323,(2),null);
var rcol = cljs.core.nth.call(null,vec__57323,(3),null);
var rname = cljs.core.nth.call(null,vec__57323,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6543__auto__ = source;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6543__auto__ = line;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6543__auto__ = col;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__57328 = segmap;
var map__57328__$1 = ((((!((map__57328 == null)))?((((map__57328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57328):map__57328);
var gcol = cljs.core.get.call(null,map__57328__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__57328__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__57328__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__57328__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__57328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__57328,map__57328__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__57328,map__57328__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__57328,map__57328__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__57328,map__57328__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__57328,map__57328__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__57328,map__57328__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args57330 = [];
var len__7651__auto___57336 = arguments.length;
var i__7652__auto___57337 = (0);
while(true){
if((i__7652__auto___57337 < len__7651__auto___57336)){
args57330.push((arguments[i__7652__auto___57337]));

var G__57338 = (i__7652__auto___57337 + (1));
i__7652__auto___57337 = G__57338;
continue;
} else {
}
break;
}

var G__57332 = args57330.length;
switch (G__57332) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57330.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__57333 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__57340 = cljs.core.next.call(null,segs__$1);
var G__57341 = nrelseg;
var G__57342 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__57340;
relseg__$1 = G__57341;
result__$1 = G__57342;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__57333,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__57333,(1),null);
var G__57343 = (gline + (1));
var G__57344 = cljs.core.next.call(null,lines__$1);
var G__57345 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__57346 = result__$1;
gline = G__57343;
lines__$1 = G__57344;
relseg = G__57345;
result = G__57346;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__57350 = segmap;
var map__57350__$1 = ((((!((map__57350 == null)))?((((map__57350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57350):map__57350);
var gcol = cljs.core.get.call(null,map__57350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__57350__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__57350__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__57350__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__57350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__57350,map__57350__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__57350,map__57350__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__57347_SHARP_){
return cljs.core.conj.call(null,p1__57347_SHARP_,d__$1);
});})(map__57350,map__57350__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__57350,map__57350__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args57352 = [];
var len__7651__auto___57358 = arguments.length;
var i__7652__auto___57359 = (0);
while(true){
if((i__7652__auto___57359 < len__7651__auto___57358)){
args57352.push((arguments[i__7652__auto___57359]));

var G__57360 = (i__7652__auto___57359 + (1));
i__7652__auto___57359 = G__57360;
continue;
} else {
}
break;
}

var G__57354 = args57352.length;
switch (G__57354) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57352.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__57355 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__57362 = cljs.core.next.call(null,segs__$1);
var G__57363 = nrelseg;
var G__57364 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__57362;
relseg__$1 = G__57363;
result__$1 = G__57364;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__57355,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__57355,(1),null);
var G__57365 = (gline + (1));
var G__57366 = cljs.core.next.call(null,lines__$1);
var G__57367 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__57368 = result__$1;
gline = G__57365;
lines__$1 = G__57366;
relseg = G__57367;
result = G__57368;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__57381){
var vec__57382 = p__57381;
var _ = cljs.core.nth.call(null,vec__57382,(0),null);
var source = cljs.core.nth.call(null,vec__57382,(1),null);
var line = cljs.core.nth.call(null,vec__57382,(2),null);
var col = cljs.core.nth.call(null,vec__57382,(3),null);
var name = cljs.core.nth.call(null,vec__57382,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__57385){
var vec__57386 = p__57385;
var gcol = cljs.core.nth.call(null,vec__57386,(0),null);
var sidx = cljs.core.nth.call(null,vec__57386,(1),null);
var line = cljs.core.nth.call(null,vec__57386,(2),null);
var col = cljs.core.nth.call(null,vec__57386,(3),null);
var name = cljs.core.nth.call(null,vec__57386,(4),null);
var seg = vec__57386;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__57386,gcol,sidx,line,col,name,seg,relseg){
return (function (p__57389){
var vec__57390 = p__57389;
var _ = cljs.core.nth.call(null,vec__57390,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__57390,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__57390,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__57390,(3),null);
var lname = cljs.core.nth.call(null,vec__57390,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__57386,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__6543__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__57478 = cljs.core.seq.call(null,infos);
var chunk__57479 = null;
var count__57480 = (0);
var i__57481 = (0);
while(true){
if((i__57481 < count__57480)){
var info = cljs.core._nth.call(null,chunk__57479,i__57481);
var segv_57560 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_57561 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_57562 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_57561 > (lc_57562 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__57478,chunk__57479,count__57480,i__57481,segv_57560,gline_57561,lc_57562,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_57561 - (lc_57562 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_57560], null));
});})(seq__57478,chunk__57479,count__57480,i__57481,segv_57560,gline_57561,lc_57562,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__57478,chunk__57479,count__57480,i__57481,segv_57560,gline_57561,lc_57562,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57561], null),cljs.core.conj,segv_57560);
});})(seq__57478,chunk__57479,count__57480,i__57481,segv_57560,gline_57561,lc_57562,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__57563 = seq__57478;
var G__57564 = chunk__57479;
var G__57565 = count__57480;
var G__57566 = (i__57481 + (1));
seq__57478 = G__57563;
chunk__57479 = G__57564;
count__57480 = G__57565;
i__57481 = G__57566;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57478);
if(temp__4657__auto__){
var seq__57478__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57478__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__57478__$1);
var G__57567 = cljs.core.chunk_rest.call(null,seq__57478__$1);
var G__57568 = c__7357__auto__;
var G__57569 = cljs.core.count.call(null,c__7357__auto__);
var G__57570 = (0);
seq__57478 = G__57567;
chunk__57479 = G__57568;
count__57480 = G__57569;
i__57481 = G__57570;
continue;
} else {
var info = cljs.core.first.call(null,seq__57478__$1);
var segv_57571 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_57572 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_57573 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_57572 > (lc_57573 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__57478,chunk__57479,count__57480,i__57481,segv_57571,gline_57572,lc_57573,info,seq__57478__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_57572 - (lc_57573 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_57571], null));
});})(seq__57478,chunk__57479,count__57480,i__57481,segv_57571,gline_57572,lc_57573,info,seq__57478__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__57478,chunk__57479,count__57480,i__57481,segv_57571,gline_57572,lc_57573,info,seq__57478__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57572], null),cljs.core.conj,segv_57571);
});})(seq__57478,chunk__57479,count__57480,i__57481,segv_57571,gline_57572,lc_57573,info,seq__57478__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__57574 = cljs.core.next.call(null,seq__57478__$1);
var G__57575 = null;
var G__57576 = (0);
var G__57577 = (0);
seq__57478 = G__57574;
chunk__57479 = G__57575;
count__57480 = G__57576;
i__57481 = G__57577;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__57482_57578 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__57483_57579 = null;
var count__57484_57580 = (0);
var i__57485_57581 = (0);
while(true){
if((i__57485_57581 < count__57484_57580)){
var vec__57486_57582 = cljs.core._nth.call(null,chunk__57483_57579,i__57485_57581);
var source_idx_57583 = cljs.core.nth.call(null,vec__57486_57582,(0),null);
var vec__57489_57584 = cljs.core.nth.call(null,vec__57486_57582,(1),null);
var __57585 = cljs.core.nth.call(null,vec__57489_57584,(0),null);
var lines_57586__$1 = cljs.core.nth.call(null,vec__57489_57584,(1),null);
var seq__57492_57587 = cljs.core.seq.call(null,lines_57586__$1);
var chunk__57493_57588 = null;
var count__57494_57589 = (0);
var i__57495_57590 = (0);
while(true){
if((i__57495_57590 < count__57494_57589)){
var vec__57496_57591 = cljs.core._nth.call(null,chunk__57493_57588,i__57495_57590);
var line_57592 = cljs.core.nth.call(null,vec__57496_57591,(0),null);
var cols_57593 = cljs.core.nth.call(null,vec__57496_57591,(1),null);
var seq__57499_57594 = cljs.core.seq.call(null,cols_57593);
var chunk__57500_57595 = null;
var count__57501_57596 = (0);
var i__57502_57597 = (0);
while(true){
if((i__57502_57597 < count__57501_57596)){
var vec__57503_57598 = cljs.core._nth.call(null,chunk__57500_57595,i__57502_57597);
var col_57599 = cljs.core.nth.call(null,vec__57503_57598,(0),null);
var infos_57600 = cljs.core.nth.call(null,vec__57503_57598,(1),null);
encode_cols.call(null,infos_57600,source_idx_57583,line_57592,col_57599);

var G__57601 = seq__57499_57594;
var G__57602 = chunk__57500_57595;
var G__57603 = count__57501_57596;
var G__57604 = (i__57502_57597 + (1));
seq__57499_57594 = G__57601;
chunk__57500_57595 = G__57602;
count__57501_57596 = G__57603;
i__57502_57597 = G__57604;
continue;
} else {
var temp__4657__auto___57605 = cljs.core.seq.call(null,seq__57499_57594);
if(temp__4657__auto___57605){
var seq__57499_57606__$1 = temp__4657__auto___57605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57499_57606__$1)){
var c__7357__auto___57607 = cljs.core.chunk_first.call(null,seq__57499_57606__$1);
var G__57608 = cljs.core.chunk_rest.call(null,seq__57499_57606__$1);
var G__57609 = c__7357__auto___57607;
var G__57610 = cljs.core.count.call(null,c__7357__auto___57607);
var G__57611 = (0);
seq__57499_57594 = G__57608;
chunk__57500_57595 = G__57609;
count__57501_57596 = G__57610;
i__57502_57597 = G__57611;
continue;
} else {
var vec__57506_57612 = cljs.core.first.call(null,seq__57499_57606__$1);
var col_57613 = cljs.core.nth.call(null,vec__57506_57612,(0),null);
var infos_57614 = cljs.core.nth.call(null,vec__57506_57612,(1),null);
encode_cols.call(null,infos_57614,source_idx_57583,line_57592,col_57613);

var G__57615 = cljs.core.next.call(null,seq__57499_57606__$1);
var G__57616 = null;
var G__57617 = (0);
var G__57618 = (0);
seq__57499_57594 = G__57615;
chunk__57500_57595 = G__57616;
count__57501_57596 = G__57617;
i__57502_57597 = G__57618;
continue;
}
} else {
}
}
break;
}

var G__57619 = seq__57492_57587;
var G__57620 = chunk__57493_57588;
var G__57621 = count__57494_57589;
var G__57622 = (i__57495_57590 + (1));
seq__57492_57587 = G__57619;
chunk__57493_57588 = G__57620;
count__57494_57589 = G__57621;
i__57495_57590 = G__57622;
continue;
} else {
var temp__4657__auto___57623 = cljs.core.seq.call(null,seq__57492_57587);
if(temp__4657__auto___57623){
var seq__57492_57624__$1 = temp__4657__auto___57623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57492_57624__$1)){
var c__7357__auto___57625 = cljs.core.chunk_first.call(null,seq__57492_57624__$1);
var G__57626 = cljs.core.chunk_rest.call(null,seq__57492_57624__$1);
var G__57627 = c__7357__auto___57625;
var G__57628 = cljs.core.count.call(null,c__7357__auto___57625);
var G__57629 = (0);
seq__57492_57587 = G__57626;
chunk__57493_57588 = G__57627;
count__57494_57589 = G__57628;
i__57495_57590 = G__57629;
continue;
} else {
var vec__57509_57630 = cljs.core.first.call(null,seq__57492_57624__$1);
var line_57631 = cljs.core.nth.call(null,vec__57509_57630,(0),null);
var cols_57632 = cljs.core.nth.call(null,vec__57509_57630,(1),null);
var seq__57512_57633 = cljs.core.seq.call(null,cols_57632);
var chunk__57513_57634 = null;
var count__57514_57635 = (0);
var i__57515_57636 = (0);
while(true){
if((i__57515_57636 < count__57514_57635)){
var vec__57516_57637 = cljs.core._nth.call(null,chunk__57513_57634,i__57515_57636);
var col_57638 = cljs.core.nth.call(null,vec__57516_57637,(0),null);
var infos_57639 = cljs.core.nth.call(null,vec__57516_57637,(1),null);
encode_cols.call(null,infos_57639,source_idx_57583,line_57631,col_57638);

var G__57640 = seq__57512_57633;
var G__57641 = chunk__57513_57634;
var G__57642 = count__57514_57635;
var G__57643 = (i__57515_57636 + (1));
seq__57512_57633 = G__57640;
chunk__57513_57634 = G__57641;
count__57514_57635 = G__57642;
i__57515_57636 = G__57643;
continue;
} else {
var temp__4657__auto___57644__$1 = cljs.core.seq.call(null,seq__57512_57633);
if(temp__4657__auto___57644__$1){
var seq__57512_57645__$1 = temp__4657__auto___57644__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57512_57645__$1)){
var c__7357__auto___57646 = cljs.core.chunk_first.call(null,seq__57512_57645__$1);
var G__57647 = cljs.core.chunk_rest.call(null,seq__57512_57645__$1);
var G__57648 = c__7357__auto___57646;
var G__57649 = cljs.core.count.call(null,c__7357__auto___57646);
var G__57650 = (0);
seq__57512_57633 = G__57647;
chunk__57513_57634 = G__57648;
count__57514_57635 = G__57649;
i__57515_57636 = G__57650;
continue;
} else {
var vec__57519_57651 = cljs.core.first.call(null,seq__57512_57645__$1);
var col_57652 = cljs.core.nth.call(null,vec__57519_57651,(0),null);
var infos_57653 = cljs.core.nth.call(null,vec__57519_57651,(1),null);
encode_cols.call(null,infos_57653,source_idx_57583,line_57631,col_57652);

var G__57654 = cljs.core.next.call(null,seq__57512_57645__$1);
var G__57655 = null;
var G__57656 = (0);
var G__57657 = (0);
seq__57512_57633 = G__57654;
chunk__57513_57634 = G__57655;
count__57514_57635 = G__57656;
i__57515_57636 = G__57657;
continue;
}
} else {
}
}
break;
}

var G__57658 = cljs.core.next.call(null,seq__57492_57624__$1);
var G__57659 = null;
var G__57660 = (0);
var G__57661 = (0);
seq__57492_57587 = G__57658;
chunk__57493_57588 = G__57659;
count__57494_57589 = G__57660;
i__57495_57590 = G__57661;
continue;
}
} else {
}
}
break;
}

var G__57662 = seq__57482_57578;
var G__57663 = chunk__57483_57579;
var G__57664 = count__57484_57580;
var G__57665 = (i__57485_57581 + (1));
seq__57482_57578 = G__57662;
chunk__57483_57579 = G__57663;
count__57484_57580 = G__57664;
i__57485_57581 = G__57665;
continue;
} else {
var temp__4657__auto___57666 = cljs.core.seq.call(null,seq__57482_57578);
if(temp__4657__auto___57666){
var seq__57482_57667__$1 = temp__4657__auto___57666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57482_57667__$1)){
var c__7357__auto___57668 = cljs.core.chunk_first.call(null,seq__57482_57667__$1);
var G__57669 = cljs.core.chunk_rest.call(null,seq__57482_57667__$1);
var G__57670 = c__7357__auto___57668;
var G__57671 = cljs.core.count.call(null,c__7357__auto___57668);
var G__57672 = (0);
seq__57482_57578 = G__57669;
chunk__57483_57579 = G__57670;
count__57484_57580 = G__57671;
i__57485_57581 = G__57672;
continue;
} else {
var vec__57522_57673 = cljs.core.first.call(null,seq__57482_57667__$1);
var source_idx_57674 = cljs.core.nth.call(null,vec__57522_57673,(0),null);
var vec__57525_57675 = cljs.core.nth.call(null,vec__57522_57673,(1),null);
var __57676 = cljs.core.nth.call(null,vec__57525_57675,(0),null);
var lines_57677__$1 = cljs.core.nth.call(null,vec__57525_57675,(1),null);
var seq__57528_57678 = cljs.core.seq.call(null,lines_57677__$1);
var chunk__57529_57679 = null;
var count__57530_57680 = (0);
var i__57531_57681 = (0);
while(true){
if((i__57531_57681 < count__57530_57680)){
var vec__57532_57682 = cljs.core._nth.call(null,chunk__57529_57679,i__57531_57681);
var line_57683 = cljs.core.nth.call(null,vec__57532_57682,(0),null);
var cols_57684 = cljs.core.nth.call(null,vec__57532_57682,(1),null);
var seq__57535_57685 = cljs.core.seq.call(null,cols_57684);
var chunk__57536_57686 = null;
var count__57537_57687 = (0);
var i__57538_57688 = (0);
while(true){
if((i__57538_57688 < count__57537_57687)){
var vec__57539_57689 = cljs.core._nth.call(null,chunk__57536_57686,i__57538_57688);
var col_57690 = cljs.core.nth.call(null,vec__57539_57689,(0),null);
var infos_57691 = cljs.core.nth.call(null,vec__57539_57689,(1),null);
encode_cols.call(null,infos_57691,source_idx_57674,line_57683,col_57690);

var G__57692 = seq__57535_57685;
var G__57693 = chunk__57536_57686;
var G__57694 = count__57537_57687;
var G__57695 = (i__57538_57688 + (1));
seq__57535_57685 = G__57692;
chunk__57536_57686 = G__57693;
count__57537_57687 = G__57694;
i__57538_57688 = G__57695;
continue;
} else {
var temp__4657__auto___57696__$1 = cljs.core.seq.call(null,seq__57535_57685);
if(temp__4657__auto___57696__$1){
var seq__57535_57697__$1 = temp__4657__auto___57696__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57535_57697__$1)){
var c__7357__auto___57698 = cljs.core.chunk_first.call(null,seq__57535_57697__$1);
var G__57699 = cljs.core.chunk_rest.call(null,seq__57535_57697__$1);
var G__57700 = c__7357__auto___57698;
var G__57701 = cljs.core.count.call(null,c__7357__auto___57698);
var G__57702 = (0);
seq__57535_57685 = G__57699;
chunk__57536_57686 = G__57700;
count__57537_57687 = G__57701;
i__57538_57688 = G__57702;
continue;
} else {
var vec__57542_57703 = cljs.core.first.call(null,seq__57535_57697__$1);
var col_57704 = cljs.core.nth.call(null,vec__57542_57703,(0),null);
var infos_57705 = cljs.core.nth.call(null,vec__57542_57703,(1),null);
encode_cols.call(null,infos_57705,source_idx_57674,line_57683,col_57704);

var G__57706 = cljs.core.next.call(null,seq__57535_57697__$1);
var G__57707 = null;
var G__57708 = (0);
var G__57709 = (0);
seq__57535_57685 = G__57706;
chunk__57536_57686 = G__57707;
count__57537_57687 = G__57708;
i__57538_57688 = G__57709;
continue;
}
} else {
}
}
break;
}

var G__57710 = seq__57528_57678;
var G__57711 = chunk__57529_57679;
var G__57712 = count__57530_57680;
var G__57713 = (i__57531_57681 + (1));
seq__57528_57678 = G__57710;
chunk__57529_57679 = G__57711;
count__57530_57680 = G__57712;
i__57531_57681 = G__57713;
continue;
} else {
var temp__4657__auto___57714__$1 = cljs.core.seq.call(null,seq__57528_57678);
if(temp__4657__auto___57714__$1){
var seq__57528_57715__$1 = temp__4657__auto___57714__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57528_57715__$1)){
var c__7357__auto___57716 = cljs.core.chunk_first.call(null,seq__57528_57715__$1);
var G__57717 = cljs.core.chunk_rest.call(null,seq__57528_57715__$1);
var G__57718 = c__7357__auto___57716;
var G__57719 = cljs.core.count.call(null,c__7357__auto___57716);
var G__57720 = (0);
seq__57528_57678 = G__57717;
chunk__57529_57679 = G__57718;
count__57530_57680 = G__57719;
i__57531_57681 = G__57720;
continue;
} else {
var vec__57545_57721 = cljs.core.first.call(null,seq__57528_57715__$1);
var line_57722 = cljs.core.nth.call(null,vec__57545_57721,(0),null);
var cols_57723 = cljs.core.nth.call(null,vec__57545_57721,(1),null);
var seq__57548_57724 = cljs.core.seq.call(null,cols_57723);
var chunk__57549_57725 = null;
var count__57550_57726 = (0);
var i__57551_57727 = (0);
while(true){
if((i__57551_57727 < count__57550_57726)){
var vec__57552_57728 = cljs.core._nth.call(null,chunk__57549_57725,i__57551_57727);
var col_57729 = cljs.core.nth.call(null,vec__57552_57728,(0),null);
var infos_57730 = cljs.core.nth.call(null,vec__57552_57728,(1),null);
encode_cols.call(null,infos_57730,source_idx_57674,line_57722,col_57729);

var G__57731 = seq__57548_57724;
var G__57732 = chunk__57549_57725;
var G__57733 = count__57550_57726;
var G__57734 = (i__57551_57727 + (1));
seq__57548_57724 = G__57731;
chunk__57549_57725 = G__57732;
count__57550_57726 = G__57733;
i__57551_57727 = G__57734;
continue;
} else {
var temp__4657__auto___57735__$2 = cljs.core.seq.call(null,seq__57548_57724);
if(temp__4657__auto___57735__$2){
var seq__57548_57736__$1 = temp__4657__auto___57735__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57548_57736__$1)){
var c__7357__auto___57737 = cljs.core.chunk_first.call(null,seq__57548_57736__$1);
var G__57738 = cljs.core.chunk_rest.call(null,seq__57548_57736__$1);
var G__57739 = c__7357__auto___57737;
var G__57740 = cljs.core.count.call(null,c__7357__auto___57737);
var G__57741 = (0);
seq__57548_57724 = G__57738;
chunk__57549_57725 = G__57739;
count__57550_57726 = G__57740;
i__57551_57727 = G__57741;
continue;
} else {
var vec__57555_57742 = cljs.core.first.call(null,seq__57548_57736__$1);
var col_57743 = cljs.core.nth.call(null,vec__57555_57742,(0),null);
var infos_57744 = cljs.core.nth.call(null,vec__57555_57742,(1),null);
encode_cols.call(null,infos_57744,source_idx_57674,line_57722,col_57743);

var G__57745 = cljs.core.next.call(null,seq__57548_57736__$1);
var G__57746 = null;
var G__57747 = (0);
var G__57748 = (0);
seq__57548_57724 = G__57745;
chunk__57549_57725 = G__57746;
count__57550_57726 = G__57747;
i__57551_57727 = G__57748;
continue;
}
} else {
}
}
break;
}

var G__57749 = cljs.core.next.call(null,seq__57528_57715__$1);
var G__57750 = null;
var G__57751 = (0);
var G__57752 = (0);
seq__57528_57678 = G__57749;
chunk__57529_57679 = G__57750;
count__57530_57680 = G__57751;
i__57531_57681 = G__57752;
continue;
}
} else {
}
}
break;
}

var G__57753 = cljs.core.next.call(null,seq__57482_57667__$1);
var G__57754 = null;
var G__57755 = (0);
var G__57756 = (0);
seq__57482_57578 = G__57753;
chunk__57483_57579 = G__57754;
count__57484_57580 = G__57755;
i__57485_57581 = G__57756;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__57558 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__57393_SHARP_){
return [cljs.core.str(p1__57393_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__57394_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__57394_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__57395_SHARP_){
return clojure.string.join.call(null,",",p1__57395_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__57559 = G__57558;
goog.object.set(G__57559,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__57559;
} else {
return G__57558;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__57766 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__57766,(0),null);
var col_map = cljs.core.nth.call(null,vec__57766,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__57769 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__57769,(0),null);
var infos = cljs.core.nth.call(null,vec__57769,(1),null);
var G__57775 = cljs.core.next.call(null,col_map_seq);
var G__57776 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__57769,col,infos,vec__57766,line,col_map){
return (function (v,p__57772){
var map__57773 = p__57772;
var map__57773__$1 = ((((!((map__57773 == null)))?((((map__57773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57773):map__57773);
var gline = cljs.core.get.call(null,map__57773__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__57773__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__57769,col,infos,vec__57766,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__57775;
new_cols = G__57776;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__57777 = cljs.core.next.call(null,line_map_seq);
var G__57778 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__57777;
new_lines = G__57778;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__57841_57903 = cljs.core.seq.call(null,reverse_map);
var chunk__57842_57904 = null;
var count__57843_57905 = (0);
var i__57844_57906 = (0);
while(true){
if((i__57844_57906 < count__57843_57905)){
var vec__57845_57907 = cljs.core._nth.call(null,chunk__57842_57904,i__57844_57906);
var line_57908 = cljs.core.nth.call(null,vec__57845_57907,(0),null);
var columns_57909 = cljs.core.nth.call(null,vec__57845_57907,(1),null);
var seq__57848_57910 = cljs.core.seq.call(null,columns_57909);
var chunk__57849_57911 = null;
var count__57850_57912 = (0);
var i__57851_57913 = (0);
while(true){
if((i__57851_57913 < count__57850_57912)){
var vec__57852_57914 = cljs.core._nth.call(null,chunk__57849_57911,i__57851_57913);
var column_57915 = cljs.core.nth.call(null,vec__57852_57914,(0),null);
var column_info_57916 = cljs.core.nth.call(null,vec__57852_57914,(1),null);
var seq__57855_57917 = cljs.core.seq.call(null,column_info_57916);
var chunk__57856_57918 = null;
var count__57857_57919 = (0);
var i__57858_57920 = (0);
while(true){
if((i__57858_57920 < count__57857_57919)){
var map__57859_57921 = cljs.core._nth.call(null,chunk__57856_57918,i__57858_57920);
var map__57859_57922__$1 = ((((!((map__57859_57921 == null)))?((((map__57859_57921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57859_57921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57859_57921):map__57859_57921);
var gline_57923 = cljs.core.get.call(null,map__57859_57922__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57924 = cljs.core.get.call(null,map__57859_57922__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57925 = cljs.core.get.call(null,map__57859_57922__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57923], null),cljs.core.fnil.call(null,((function (seq__57855_57917,chunk__57856_57918,count__57857_57919,i__57858_57920,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57859_57921,map__57859_57922__$1,gline_57923,gcol_57924,name_57925,vec__57852_57914,column_57915,column_info_57916,vec__57845_57907,line_57908,columns_57909,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57924], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57908,new cljs.core.Keyword(null,"col","col",-1959363084),column_57915,new cljs.core.Keyword(null,"name","name",1843675177),name_57925], null));
});})(seq__57855_57917,chunk__57856_57918,count__57857_57919,i__57858_57920,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57859_57921,map__57859_57922__$1,gline_57923,gcol_57924,name_57925,vec__57852_57914,column_57915,column_info_57916,vec__57845_57907,line_57908,columns_57909,inverted))
,cljs.core.sorted_map.call(null)));

var G__57926 = seq__57855_57917;
var G__57927 = chunk__57856_57918;
var G__57928 = count__57857_57919;
var G__57929 = (i__57858_57920 + (1));
seq__57855_57917 = G__57926;
chunk__57856_57918 = G__57927;
count__57857_57919 = G__57928;
i__57858_57920 = G__57929;
continue;
} else {
var temp__4657__auto___57930 = cljs.core.seq.call(null,seq__57855_57917);
if(temp__4657__auto___57930){
var seq__57855_57931__$1 = temp__4657__auto___57930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57855_57931__$1)){
var c__7357__auto___57932 = cljs.core.chunk_first.call(null,seq__57855_57931__$1);
var G__57933 = cljs.core.chunk_rest.call(null,seq__57855_57931__$1);
var G__57934 = c__7357__auto___57932;
var G__57935 = cljs.core.count.call(null,c__7357__auto___57932);
var G__57936 = (0);
seq__57855_57917 = G__57933;
chunk__57856_57918 = G__57934;
count__57857_57919 = G__57935;
i__57858_57920 = G__57936;
continue;
} else {
var map__57861_57937 = cljs.core.first.call(null,seq__57855_57931__$1);
var map__57861_57938__$1 = ((((!((map__57861_57937 == null)))?((((map__57861_57937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57861_57937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57861_57937):map__57861_57937);
var gline_57939 = cljs.core.get.call(null,map__57861_57938__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57940 = cljs.core.get.call(null,map__57861_57938__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57941 = cljs.core.get.call(null,map__57861_57938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57939], null),cljs.core.fnil.call(null,((function (seq__57855_57917,chunk__57856_57918,count__57857_57919,i__57858_57920,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57861_57937,map__57861_57938__$1,gline_57939,gcol_57940,name_57941,seq__57855_57931__$1,temp__4657__auto___57930,vec__57852_57914,column_57915,column_info_57916,vec__57845_57907,line_57908,columns_57909,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57940], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57908,new cljs.core.Keyword(null,"col","col",-1959363084),column_57915,new cljs.core.Keyword(null,"name","name",1843675177),name_57941], null));
});})(seq__57855_57917,chunk__57856_57918,count__57857_57919,i__57858_57920,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57861_57937,map__57861_57938__$1,gline_57939,gcol_57940,name_57941,seq__57855_57931__$1,temp__4657__auto___57930,vec__57852_57914,column_57915,column_info_57916,vec__57845_57907,line_57908,columns_57909,inverted))
,cljs.core.sorted_map.call(null)));

var G__57942 = cljs.core.next.call(null,seq__57855_57931__$1);
var G__57943 = null;
var G__57944 = (0);
var G__57945 = (0);
seq__57855_57917 = G__57942;
chunk__57856_57918 = G__57943;
count__57857_57919 = G__57944;
i__57858_57920 = G__57945;
continue;
}
} else {
}
}
break;
}

var G__57946 = seq__57848_57910;
var G__57947 = chunk__57849_57911;
var G__57948 = count__57850_57912;
var G__57949 = (i__57851_57913 + (1));
seq__57848_57910 = G__57946;
chunk__57849_57911 = G__57947;
count__57850_57912 = G__57948;
i__57851_57913 = G__57949;
continue;
} else {
var temp__4657__auto___57950 = cljs.core.seq.call(null,seq__57848_57910);
if(temp__4657__auto___57950){
var seq__57848_57951__$1 = temp__4657__auto___57950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57848_57951__$1)){
var c__7357__auto___57952 = cljs.core.chunk_first.call(null,seq__57848_57951__$1);
var G__57953 = cljs.core.chunk_rest.call(null,seq__57848_57951__$1);
var G__57954 = c__7357__auto___57952;
var G__57955 = cljs.core.count.call(null,c__7357__auto___57952);
var G__57956 = (0);
seq__57848_57910 = G__57953;
chunk__57849_57911 = G__57954;
count__57850_57912 = G__57955;
i__57851_57913 = G__57956;
continue;
} else {
var vec__57863_57957 = cljs.core.first.call(null,seq__57848_57951__$1);
var column_57958 = cljs.core.nth.call(null,vec__57863_57957,(0),null);
var column_info_57959 = cljs.core.nth.call(null,vec__57863_57957,(1),null);
var seq__57866_57960 = cljs.core.seq.call(null,column_info_57959);
var chunk__57867_57961 = null;
var count__57868_57962 = (0);
var i__57869_57963 = (0);
while(true){
if((i__57869_57963 < count__57868_57962)){
var map__57870_57964 = cljs.core._nth.call(null,chunk__57867_57961,i__57869_57963);
var map__57870_57965__$1 = ((((!((map__57870_57964 == null)))?((((map__57870_57964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57870_57964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57870_57964):map__57870_57964);
var gline_57966 = cljs.core.get.call(null,map__57870_57965__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57967 = cljs.core.get.call(null,map__57870_57965__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57968 = cljs.core.get.call(null,map__57870_57965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57966], null),cljs.core.fnil.call(null,((function (seq__57866_57960,chunk__57867_57961,count__57868_57962,i__57869_57963,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57870_57964,map__57870_57965__$1,gline_57966,gcol_57967,name_57968,vec__57863_57957,column_57958,column_info_57959,seq__57848_57951__$1,temp__4657__auto___57950,vec__57845_57907,line_57908,columns_57909,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57967], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57908,new cljs.core.Keyword(null,"col","col",-1959363084),column_57958,new cljs.core.Keyword(null,"name","name",1843675177),name_57968], null));
});})(seq__57866_57960,chunk__57867_57961,count__57868_57962,i__57869_57963,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57870_57964,map__57870_57965__$1,gline_57966,gcol_57967,name_57968,vec__57863_57957,column_57958,column_info_57959,seq__57848_57951__$1,temp__4657__auto___57950,vec__57845_57907,line_57908,columns_57909,inverted))
,cljs.core.sorted_map.call(null)));

var G__57969 = seq__57866_57960;
var G__57970 = chunk__57867_57961;
var G__57971 = count__57868_57962;
var G__57972 = (i__57869_57963 + (1));
seq__57866_57960 = G__57969;
chunk__57867_57961 = G__57970;
count__57868_57962 = G__57971;
i__57869_57963 = G__57972;
continue;
} else {
var temp__4657__auto___57973__$1 = cljs.core.seq.call(null,seq__57866_57960);
if(temp__4657__auto___57973__$1){
var seq__57866_57974__$1 = temp__4657__auto___57973__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57866_57974__$1)){
var c__7357__auto___57975 = cljs.core.chunk_first.call(null,seq__57866_57974__$1);
var G__57976 = cljs.core.chunk_rest.call(null,seq__57866_57974__$1);
var G__57977 = c__7357__auto___57975;
var G__57978 = cljs.core.count.call(null,c__7357__auto___57975);
var G__57979 = (0);
seq__57866_57960 = G__57976;
chunk__57867_57961 = G__57977;
count__57868_57962 = G__57978;
i__57869_57963 = G__57979;
continue;
} else {
var map__57872_57980 = cljs.core.first.call(null,seq__57866_57974__$1);
var map__57872_57981__$1 = ((((!((map__57872_57980 == null)))?((((map__57872_57980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57872_57980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57872_57980):map__57872_57980);
var gline_57982 = cljs.core.get.call(null,map__57872_57981__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57983 = cljs.core.get.call(null,map__57872_57981__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57984 = cljs.core.get.call(null,map__57872_57981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57982], null),cljs.core.fnil.call(null,((function (seq__57866_57960,chunk__57867_57961,count__57868_57962,i__57869_57963,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57872_57980,map__57872_57981__$1,gline_57982,gcol_57983,name_57984,seq__57866_57974__$1,temp__4657__auto___57973__$1,vec__57863_57957,column_57958,column_info_57959,seq__57848_57951__$1,temp__4657__auto___57950,vec__57845_57907,line_57908,columns_57909,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57983], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57908,new cljs.core.Keyword(null,"col","col",-1959363084),column_57958,new cljs.core.Keyword(null,"name","name",1843675177),name_57984], null));
});})(seq__57866_57960,chunk__57867_57961,count__57868_57962,i__57869_57963,seq__57848_57910,chunk__57849_57911,count__57850_57912,i__57851_57913,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57872_57980,map__57872_57981__$1,gline_57982,gcol_57983,name_57984,seq__57866_57974__$1,temp__4657__auto___57973__$1,vec__57863_57957,column_57958,column_info_57959,seq__57848_57951__$1,temp__4657__auto___57950,vec__57845_57907,line_57908,columns_57909,inverted))
,cljs.core.sorted_map.call(null)));

var G__57985 = cljs.core.next.call(null,seq__57866_57974__$1);
var G__57986 = null;
var G__57987 = (0);
var G__57988 = (0);
seq__57866_57960 = G__57985;
chunk__57867_57961 = G__57986;
count__57868_57962 = G__57987;
i__57869_57963 = G__57988;
continue;
}
} else {
}
}
break;
}

var G__57989 = cljs.core.next.call(null,seq__57848_57951__$1);
var G__57990 = null;
var G__57991 = (0);
var G__57992 = (0);
seq__57848_57910 = G__57989;
chunk__57849_57911 = G__57990;
count__57850_57912 = G__57991;
i__57851_57913 = G__57992;
continue;
}
} else {
}
}
break;
}

var G__57993 = seq__57841_57903;
var G__57994 = chunk__57842_57904;
var G__57995 = count__57843_57905;
var G__57996 = (i__57844_57906 + (1));
seq__57841_57903 = G__57993;
chunk__57842_57904 = G__57994;
count__57843_57905 = G__57995;
i__57844_57906 = G__57996;
continue;
} else {
var temp__4657__auto___57997 = cljs.core.seq.call(null,seq__57841_57903);
if(temp__4657__auto___57997){
var seq__57841_57998__$1 = temp__4657__auto___57997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57841_57998__$1)){
var c__7357__auto___57999 = cljs.core.chunk_first.call(null,seq__57841_57998__$1);
var G__58000 = cljs.core.chunk_rest.call(null,seq__57841_57998__$1);
var G__58001 = c__7357__auto___57999;
var G__58002 = cljs.core.count.call(null,c__7357__auto___57999);
var G__58003 = (0);
seq__57841_57903 = G__58000;
chunk__57842_57904 = G__58001;
count__57843_57905 = G__58002;
i__57844_57906 = G__58003;
continue;
} else {
var vec__57874_58004 = cljs.core.first.call(null,seq__57841_57998__$1);
var line_58005 = cljs.core.nth.call(null,vec__57874_58004,(0),null);
var columns_58006 = cljs.core.nth.call(null,vec__57874_58004,(1),null);
var seq__57877_58007 = cljs.core.seq.call(null,columns_58006);
var chunk__57878_58008 = null;
var count__57879_58009 = (0);
var i__57880_58010 = (0);
while(true){
if((i__57880_58010 < count__57879_58009)){
var vec__57881_58011 = cljs.core._nth.call(null,chunk__57878_58008,i__57880_58010);
var column_58012 = cljs.core.nth.call(null,vec__57881_58011,(0),null);
var column_info_58013 = cljs.core.nth.call(null,vec__57881_58011,(1),null);
var seq__57884_58014 = cljs.core.seq.call(null,column_info_58013);
var chunk__57885_58015 = null;
var count__57886_58016 = (0);
var i__57887_58017 = (0);
while(true){
if((i__57887_58017 < count__57886_58016)){
var map__57888_58018 = cljs.core._nth.call(null,chunk__57885_58015,i__57887_58017);
var map__57888_58019__$1 = ((((!((map__57888_58018 == null)))?((((map__57888_58018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57888_58018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57888_58018):map__57888_58018);
var gline_58020 = cljs.core.get.call(null,map__57888_58019__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_58021 = cljs.core.get.call(null,map__57888_58019__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_58022 = cljs.core.get.call(null,map__57888_58019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_58020], null),cljs.core.fnil.call(null,((function (seq__57884_58014,chunk__57885_58015,count__57886_58016,i__57887_58017,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57888_58018,map__57888_58019__$1,gline_58020,gcol_58021,name_58022,vec__57881_58011,column_58012,column_info_58013,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_58021], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_58005,new cljs.core.Keyword(null,"col","col",-1959363084),column_58012,new cljs.core.Keyword(null,"name","name",1843675177),name_58022], null));
});})(seq__57884_58014,chunk__57885_58015,count__57886_58016,i__57887_58017,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57888_58018,map__57888_58019__$1,gline_58020,gcol_58021,name_58022,vec__57881_58011,column_58012,column_info_58013,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted))
,cljs.core.sorted_map.call(null)));

var G__58023 = seq__57884_58014;
var G__58024 = chunk__57885_58015;
var G__58025 = count__57886_58016;
var G__58026 = (i__57887_58017 + (1));
seq__57884_58014 = G__58023;
chunk__57885_58015 = G__58024;
count__57886_58016 = G__58025;
i__57887_58017 = G__58026;
continue;
} else {
var temp__4657__auto___58027__$1 = cljs.core.seq.call(null,seq__57884_58014);
if(temp__4657__auto___58027__$1){
var seq__57884_58028__$1 = temp__4657__auto___58027__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57884_58028__$1)){
var c__7357__auto___58029 = cljs.core.chunk_first.call(null,seq__57884_58028__$1);
var G__58030 = cljs.core.chunk_rest.call(null,seq__57884_58028__$1);
var G__58031 = c__7357__auto___58029;
var G__58032 = cljs.core.count.call(null,c__7357__auto___58029);
var G__58033 = (0);
seq__57884_58014 = G__58030;
chunk__57885_58015 = G__58031;
count__57886_58016 = G__58032;
i__57887_58017 = G__58033;
continue;
} else {
var map__57890_58034 = cljs.core.first.call(null,seq__57884_58028__$1);
var map__57890_58035__$1 = ((((!((map__57890_58034 == null)))?((((map__57890_58034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57890_58034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57890_58034):map__57890_58034);
var gline_58036 = cljs.core.get.call(null,map__57890_58035__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_58037 = cljs.core.get.call(null,map__57890_58035__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_58038 = cljs.core.get.call(null,map__57890_58035__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_58036], null),cljs.core.fnil.call(null,((function (seq__57884_58014,chunk__57885_58015,count__57886_58016,i__57887_58017,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57890_58034,map__57890_58035__$1,gline_58036,gcol_58037,name_58038,seq__57884_58028__$1,temp__4657__auto___58027__$1,vec__57881_58011,column_58012,column_info_58013,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_58037], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_58005,new cljs.core.Keyword(null,"col","col",-1959363084),column_58012,new cljs.core.Keyword(null,"name","name",1843675177),name_58038], null));
});})(seq__57884_58014,chunk__57885_58015,count__57886_58016,i__57887_58017,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57890_58034,map__57890_58035__$1,gline_58036,gcol_58037,name_58038,seq__57884_58028__$1,temp__4657__auto___58027__$1,vec__57881_58011,column_58012,column_info_58013,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted))
,cljs.core.sorted_map.call(null)));

var G__58039 = cljs.core.next.call(null,seq__57884_58028__$1);
var G__58040 = null;
var G__58041 = (0);
var G__58042 = (0);
seq__57884_58014 = G__58039;
chunk__57885_58015 = G__58040;
count__57886_58016 = G__58041;
i__57887_58017 = G__58042;
continue;
}
} else {
}
}
break;
}

var G__58043 = seq__57877_58007;
var G__58044 = chunk__57878_58008;
var G__58045 = count__57879_58009;
var G__58046 = (i__57880_58010 + (1));
seq__57877_58007 = G__58043;
chunk__57878_58008 = G__58044;
count__57879_58009 = G__58045;
i__57880_58010 = G__58046;
continue;
} else {
var temp__4657__auto___58047__$1 = cljs.core.seq.call(null,seq__57877_58007);
if(temp__4657__auto___58047__$1){
var seq__57877_58048__$1 = temp__4657__auto___58047__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57877_58048__$1)){
var c__7357__auto___58049 = cljs.core.chunk_first.call(null,seq__57877_58048__$1);
var G__58050 = cljs.core.chunk_rest.call(null,seq__57877_58048__$1);
var G__58051 = c__7357__auto___58049;
var G__58052 = cljs.core.count.call(null,c__7357__auto___58049);
var G__58053 = (0);
seq__57877_58007 = G__58050;
chunk__57878_58008 = G__58051;
count__57879_58009 = G__58052;
i__57880_58010 = G__58053;
continue;
} else {
var vec__57892_58054 = cljs.core.first.call(null,seq__57877_58048__$1);
var column_58055 = cljs.core.nth.call(null,vec__57892_58054,(0),null);
var column_info_58056 = cljs.core.nth.call(null,vec__57892_58054,(1),null);
var seq__57895_58057 = cljs.core.seq.call(null,column_info_58056);
var chunk__57896_58058 = null;
var count__57897_58059 = (0);
var i__57898_58060 = (0);
while(true){
if((i__57898_58060 < count__57897_58059)){
var map__57899_58061 = cljs.core._nth.call(null,chunk__57896_58058,i__57898_58060);
var map__57899_58062__$1 = ((((!((map__57899_58061 == null)))?((((map__57899_58061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57899_58061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57899_58061):map__57899_58061);
var gline_58063 = cljs.core.get.call(null,map__57899_58062__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_58064 = cljs.core.get.call(null,map__57899_58062__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_58065 = cljs.core.get.call(null,map__57899_58062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_58063], null),cljs.core.fnil.call(null,((function (seq__57895_58057,chunk__57896_58058,count__57897_58059,i__57898_58060,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57899_58061,map__57899_58062__$1,gline_58063,gcol_58064,name_58065,vec__57892_58054,column_58055,column_info_58056,seq__57877_58048__$1,temp__4657__auto___58047__$1,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_58064], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_58005,new cljs.core.Keyword(null,"col","col",-1959363084),column_58055,new cljs.core.Keyword(null,"name","name",1843675177),name_58065], null));
});})(seq__57895_58057,chunk__57896_58058,count__57897_58059,i__57898_58060,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57899_58061,map__57899_58062__$1,gline_58063,gcol_58064,name_58065,vec__57892_58054,column_58055,column_info_58056,seq__57877_58048__$1,temp__4657__auto___58047__$1,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted))
,cljs.core.sorted_map.call(null)));

var G__58066 = seq__57895_58057;
var G__58067 = chunk__57896_58058;
var G__58068 = count__57897_58059;
var G__58069 = (i__57898_58060 + (1));
seq__57895_58057 = G__58066;
chunk__57896_58058 = G__58067;
count__57897_58059 = G__58068;
i__57898_58060 = G__58069;
continue;
} else {
var temp__4657__auto___58070__$2 = cljs.core.seq.call(null,seq__57895_58057);
if(temp__4657__auto___58070__$2){
var seq__57895_58071__$1 = temp__4657__auto___58070__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57895_58071__$1)){
var c__7357__auto___58072 = cljs.core.chunk_first.call(null,seq__57895_58071__$1);
var G__58073 = cljs.core.chunk_rest.call(null,seq__57895_58071__$1);
var G__58074 = c__7357__auto___58072;
var G__58075 = cljs.core.count.call(null,c__7357__auto___58072);
var G__58076 = (0);
seq__57895_58057 = G__58073;
chunk__57896_58058 = G__58074;
count__57897_58059 = G__58075;
i__57898_58060 = G__58076;
continue;
} else {
var map__57901_58077 = cljs.core.first.call(null,seq__57895_58071__$1);
var map__57901_58078__$1 = ((((!((map__57901_58077 == null)))?((((map__57901_58077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57901_58077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57901_58077):map__57901_58077);
var gline_58079 = cljs.core.get.call(null,map__57901_58078__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_58080 = cljs.core.get.call(null,map__57901_58078__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_58081 = cljs.core.get.call(null,map__57901_58078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_58079], null),cljs.core.fnil.call(null,((function (seq__57895_58057,chunk__57896_58058,count__57897_58059,i__57898_58060,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57901_58077,map__57901_58078__$1,gline_58079,gcol_58080,name_58081,seq__57895_58071__$1,temp__4657__auto___58070__$2,vec__57892_58054,column_58055,column_info_58056,seq__57877_58048__$1,temp__4657__auto___58047__$1,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_58080], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_58005,new cljs.core.Keyword(null,"col","col",-1959363084),column_58055,new cljs.core.Keyword(null,"name","name",1843675177),name_58081], null));
});})(seq__57895_58057,chunk__57896_58058,count__57897_58059,i__57898_58060,seq__57877_58007,chunk__57878_58008,count__57879_58009,i__57880_58010,seq__57841_57903,chunk__57842_57904,count__57843_57905,i__57844_57906,map__57901_58077,map__57901_58078__$1,gline_58079,gcol_58080,name_58081,seq__57895_58071__$1,temp__4657__auto___58070__$2,vec__57892_58054,column_58055,column_info_58056,seq__57877_58048__$1,temp__4657__auto___58047__$1,vec__57874_58004,line_58005,columns_58006,seq__57841_57998__$1,temp__4657__auto___57997,inverted))
,cljs.core.sorted_map.call(null)));

var G__58082 = cljs.core.next.call(null,seq__57895_58071__$1);
var G__58083 = null;
var G__58084 = (0);
var G__58085 = (0);
seq__57895_58057 = G__58082;
chunk__57896_58058 = G__58083;
count__57897_58059 = G__58084;
i__57898_58060 = G__58085;
continue;
}
} else {
}
}
break;
}

var G__58086 = cljs.core.next.call(null,seq__57877_58048__$1);
var G__58087 = null;
var G__58088 = (0);
var G__58089 = (0);
seq__57877_58007 = G__58086;
chunk__57878_58008 = G__58087;
count__57879_58009 = G__58088;
i__57880_58010 = G__58089;
continue;
}
} else {
}
}
break;
}

var G__58090 = cljs.core.next.call(null,seq__57841_57998__$1);
var G__58091 = null;
var G__58092 = (0);
var G__58093 = (0);
seq__57841_57903 = G__58090;
chunk__57842_57904 = G__58091;
count__57843_57905 = G__58092;
i__57844_57906 = G__58093;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map