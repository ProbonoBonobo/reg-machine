// Compiled by ClojureScript 1.9.227 {}
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
return cljs.core.reduce.call(null,(function (m,p__67390){
var vec__67391 = p__67390;
var i = cljs.core.nth.call(null,vec__67391,(0),null);
var v = cljs.core.nth.call(null,vec__67391,(1),null);
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
var vec__67397 = seg;
var gcol = cljs.core.nth.call(null,vec__67397,(0),null);
var source = cljs.core.nth.call(null,vec__67397,(1),null);
var line = cljs.core.nth.call(null,vec__67397,(2),null);
var col = cljs.core.nth.call(null,vec__67397,(3),null);
var name = cljs.core.nth.call(null,vec__67397,(4),null);
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
var vec__67406 = seg;
var gcol = cljs.core.nth.call(null,vec__67406,(0),null);
var source = cljs.core.nth.call(null,vec__67406,(1),null);
var line = cljs.core.nth.call(null,vec__67406,(2),null);
var col = cljs.core.nth.call(null,vec__67406,(3),null);
var name = cljs.core.nth.call(null,vec__67406,(4),null);
var vec__67409 = relseg;
var rgcol = cljs.core.nth.call(null,vec__67409,(0),null);
var rsource = cljs.core.nth.call(null,vec__67409,(1),null);
var rline = cljs.core.nth.call(null,vec__67409,(2),null);
var rcol = cljs.core.nth.call(null,vec__67409,(3),null);
var rname = cljs.core.nth.call(null,vec__67409,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__24751__auto__ = source;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__24751__auto__ = line;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__24751__auto__ = col;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var map__67414 = segmap;
var map__67414__$1 = ((((!((map__67414 == null)))?((((map__67414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67414):map__67414);
var gcol = cljs.core.get.call(null,map__67414__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__67414__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__67414__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__67414__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__67414__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__67414,map__67414__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__67414,map__67414__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__67414,map__67414__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__67414,map__67414__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__67414,map__67414__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__67414,map__67414__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args67416 = [];
var len__25826__auto___67422 = arguments.length;
var i__25827__auto___67423 = (0);
while(true){
if((i__25827__auto___67423 < len__25826__auto___67422)){
args67416.push((arguments[i__25827__auto___67423]));

var G__67424 = (i__25827__auto___67423 + (1));
i__25827__auto___67423 = G__67424;
continue;
} else {
}
break;
}

var G__67418 = args67416.length;
switch (G__67418) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67416.length)].join('')));

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
var vec__67419 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__67426 = cljs.core.next.call(null,segs__$1);
var G__67427 = nrelseg;
var G__67428 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__67426;
relseg__$1 = G__67427;
result__$1 = G__67428;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__67419,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__67419,(1),null);
var G__67429 = (gline + (1));
var G__67430 = cljs.core.next.call(null,lines__$1);
var G__67431 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__67432 = result__$1;
gline = G__67429;
lines__$1 = G__67430;
relseg = G__67431;
result = G__67432;
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
var map__67436 = segmap;
var map__67436__$1 = ((((!((map__67436 == null)))?((((map__67436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67436):map__67436);
var gcol = cljs.core.get.call(null,map__67436__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__67436__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__67436__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__67436__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__67436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__67436,map__67436__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__67436,map__67436__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__67433_SHARP_){
return cljs.core.conj.call(null,p1__67433_SHARP_,d__$1);
});})(map__67436,map__67436__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__67436,map__67436__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args67438 = [];
var len__25826__auto___67444 = arguments.length;
var i__25827__auto___67445 = (0);
while(true){
if((i__25827__auto___67445 < len__25826__auto___67444)){
args67438.push((arguments[i__25827__auto___67445]));

var G__67446 = (i__25827__auto___67445 + (1));
i__25827__auto___67445 = G__67446;
continue;
} else {
}
break;
}

var G__67440 = args67438.length;
switch (G__67440) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67438.length)].join('')));

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
var vec__67441 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__67448 = cljs.core.next.call(null,segs__$1);
var G__67449 = nrelseg;
var G__67450 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__67448;
relseg__$1 = G__67449;
result__$1 = G__67450;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__67441,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__67441,(1),null);
var G__67451 = (gline + (1));
var G__67452 = cljs.core.next.call(null,lines__$1);
var G__67453 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__67454 = result__$1;
gline = G__67451;
lines__$1 = G__67452;
relseg = G__67453;
result = G__67454;
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
return (function (p__67467){
var vec__67468 = p__67467;
var _ = cljs.core.nth.call(null,vec__67468,(0),null);
var source = cljs.core.nth.call(null,vec__67468,(1),null);
var line = cljs.core.nth.call(null,vec__67468,(2),null);
var col = cljs.core.nth.call(null,vec__67468,(3),null);
var name = cljs.core.nth.call(null,vec__67468,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__67471){
var vec__67472 = p__67471;
var gcol = cljs.core.nth.call(null,vec__67472,(0),null);
var sidx = cljs.core.nth.call(null,vec__67472,(1),null);
var line = cljs.core.nth.call(null,vec__67472,(2),null);
var col = cljs.core.nth.call(null,vec__67472,(3),null);
var name = cljs.core.nth.call(null,vec__67472,(4),null);
var seg = vec__67472;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__67472,gcol,sidx,line,col,name,seg,relseg){
return (function (p__67475){
var vec__67476 = p__67475;
var _ = cljs.core.nth.call(null,vec__67476,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__67476,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__67476,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__67476,(3),null);
var lname = cljs.core.nth.call(null,vec__67476,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__67472,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var seq__67564 = cljs.core.seq.call(null,infos);
var chunk__67565 = null;
var count__67566 = (0);
var i__67567 = (0);
while(true){
if((i__67567 < count__67566)){
var info = cljs.core._nth.call(null,chunk__67565,i__67567);
var segv_67646 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_67647 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_67648 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_67647 > (lc_67648 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__67564,chunk__67565,count__67566,i__67567,segv_67646,gline_67647,lc_67648,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_67647 - (lc_67648 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_67646], null));
});})(seq__67564,chunk__67565,count__67566,i__67567,segv_67646,gline_67647,lc_67648,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__67564,chunk__67565,count__67566,i__67567,segv_67646,gline_67647,lc_67648,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_67647], null),cljs.core.conj,segv_67646);
});})(seq__67564,chunk__67565,count__67566,i__67567,segv_67646,gline_67647,lc_67648,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__67649 = seq__67564;
var G__67650 = chunk__67565;
var G__67651 = count__67566;
var G__67652 = (i__67567 + (1));
seq__67564 = G__67649;
chunk__67565 = G__67650;
count__67566 = G__67651;
i__67567 = G__67652;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67564);
if(temp__4657__auto__){
var seq__67564__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67564__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__67564__$1);
var G__67653 = cljs.core.chunk_rest.call(null,seq__67564__$1);
var G__67654 = c__25562__auto__;
var G__67655 = cljs.core.count.call(null,c__25562__auto__);
var G__67656 = (0);
seq__67564 = G__67653;
chunk__67565 = G__67654;
count__67566 = G__67655;
i__67567 = G__67656;
continue;
} else {
var info = cljs.core.first.call(null,seq__67564__$1);
var segv_67657 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_67658 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_67659 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_67658 > (lc_67659 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__67564,chunk__67565,count__67566,i__67567,segv_67657,gline_67658,lc_67659,info,seq__67564__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_67658 - (lc_67659 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_67657], null));
});})(seq__67564,chunk__67565,count__67566,i__67567,segv_67657,gline_67658,lc_67659,info,seq__67564__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__67564,chunk__67565,count__67566,i__67567,segv_67657,gline_67658,lc_67659,info,seq__67564__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_67658], null),cljs.core.conj,segv_67657);
});})(seq__67564,chunk__67565,count__67566,i__67567,segv_67657,gline_67658,lc_67659,info,seq__67564__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__67660 = cljs.core.next.call(null,seq__67564__$1);
var G__67661 = null;
var G__67662 = (0);
var G__67663 = (0);
seq__67564 = G__67660;
chunk__67565 = G__67661;
count__67566 = G__67662;
i__67567 = G__67663;
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
var seq__67568_67664 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__67569_67665 = null;
var count__67570_67666 = (0);
var i__67571_67667 = (0);
while(true){
if((i__67571_67667 < count__67570_67666)){
var vec__67572_67668 = cljs.core._nth.call(null,chunk__67569_67665,i__67571_67667);
var source_idx_67669 = cljs.core.nth.call(null,vec__67572_67668,(0),null);
var vec__67575_67670 = cljs.core.nth.call(null,vec__67572_67668,(1),null);
var __67671 = cljs.core.nth.call(null,vec__67575_67670,(0),null);
var lines_67672__$1 = cljs.core.nth.call(null,vec__67575_67670,(1),null);
var seq__67578_67673 = cljs.core.seq.call(null,lines_67672__$1);
var chunk__67579_67674 = null;
var count__67580_67675 = (0);
var i__67581_67676 = (0);
while(true){
if((i__67581_67676 < count__67580_67675)){
var vec__67582_67677 = cljs.core._nth.call(null,chunk__67579_67674,i__67581_67676);
var line_67678 = cljs.core.nth.call(null,vec__67582_67677,(0),null);
var cols_67679 = cljs.core.nth.call(null,vec__67582_67677,(1),null);
var seq__67585_67680 = cljs.core.seq.call(null,cols_67679);
var chunk__67586_67681 = null;
var count__67587_67682 = (0);
var i__67588_67683 = (0);
while(true){
if((i__67588_67683 < count__67587_67682)){
var vec__67589_67684 = cljs.core._nth.call(null,chunk__67586_67681,i__67588_67683);
var col_67685 = cljs.core.nth.call(null,vec__67589_67684,(0),null);
var infos_67686 = cljs.core.nth.call(null,vec__67589_67684,(1),null);
encode_cols.call(null,infos_67686,source_idx_67669,line_67678,col_67685);

var G__67687 = seq__67585_67680;
var G__67688 = chunk__67586_67681;
var G__67689 = count__67587_67682;
var G__67690 = (i__67588_67683 + (1));
seq__67585_67680 = G__67687;
chunk__67586_67681 = G__67688;
count__67587_67682 = G__67689;
i__67588_67683 = G__67690;
continue;
} else {
var temp__4657__auto___67691 = cljs.core.seq.call(null,seq__67585_67680);
if(temp__4657__auto___67691){
var seq__67585_67692__$1 = temp__4657__auto___67691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67585_67692__$1)){
var c__25562__auto___67693 = cljs.core.chunk_first.call(null,seq__67585_67692__$1);
var G__67694 = cljs.core.chunk_rest.call(null,seq__67585_67692__$1);
var G__67695 = c__25562__auto___67693;
var G__67696 = cljs.core.count.call(null,c__25562__auto___67693);
var G__67697 = (0);
seq__67585_67680 = G__67694;
chunk__67586_67681 = G__67695;
count__67587_67682 = G__67696;
i__67588_67683 = G__67697;
continue;
} else {
var vec__67592_67698 = cljs.core.first.call(null,seq__67585_67692__$1);
var col_67699 = cljs.core.nth.call(null,vec__67592_67698,(0),null);
var infos_67700 = cljs.core.nth.call(null,vec__67592_67698,(1),null);
encode_cols.call(null,infos_67700,source_idx_67669,line_67678,col_67699);

var G__67701 = cljs.core.next.call(null,seq__67585_67692__$1);
var G__67702 = null;
var G__67703 = (0);
var G__67704 = (0);
seq__67585_67680 = G__67701;
chunk__67586_67681 = G__67702;
count__67587_67682 = G__67703;
i__67588_67683 = G__67704;
continue;
}
} else {
}
}
break;
}

var G__67705 = seq__67578_67673;
var G__67706 = chunk__67579_67674;
var G__67707 = count__67580_67675;
var G__67708 = (i__67581_67676 + (1));
seq__67578_67673 = G__67705;
chunk__67579_67674 = G__67706;
count__67580_67675 = G__67707;
i__67581_67676 = G__67708;
continue;
} else {
var temp__4657__auto___67709 = cljs.core.seq.call(null,seq__67578_67673);
if(temp__4657__auto___67709){
var seq__67578_67710__$1 = temp__4657__auto___67709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67578_67710__$1)){
var c__25562__auto___67711 = cljs.core.chunk_first.call(null,seq__67578_67710__$1);
var G__67712 = cljs.core.chunk_rest.call(null,seq__67578_67710__$1);
var G__67713 = c__25562__auto___67711;
var G__67714 = cljs.core.count.call(null,c__25562__auto___67711);
var G__67715 = (0);
seq__67578_67673 = G__67712;
chunk__67579_67674 = G__67713;
count__67580_67675 = G__67714;
i__67581_67676 = G__67715;
continue;
} else {
var vec__67595_67716 = cljs.core.first.call(null,seq__67578_67710__$1);
var line_67717 = cljs.core.nth.call(null,vec__67595_67716,(0),null);
var cols_67718 = cljs.core.nth.call(null,vec__67595_67716,(1),null);
var seq__67598_67719 = cljs.core.seq.call(null,cols_67718);
var chunk__67599_67720 = null;
var count__67600_67721 = (0);
var i__67601_67722 = (0);
while(true){
if((i__67601_67722 < count__67600_67721)){
var vec__67602_67723 = cljs.core._nth.call(null,chunk__67599_67720,i__67601_67722);
var col_67724 = cljs.core.nth.call(null,vec__67602_67723,(0),null);
var infos_67725 = cljs.core.nth.call(null,vec__67602_67723,(1),null);
encode_cols.call(null,infos_67725,source_idx_67669,line_67717,col_67724);

var G__67726 = seq__67598_67719;
var G__67727 = chunk__67599_67720;
var G__67728 = count__67600_67721;
var G__67729 = (i__67601_67722 + (1));
seq__67598_67719 = G__67726;
chunk__67599_67720 = G__67727;
count__67600_67721 = G__67728;
i__67601_67722 = G__67729;
continue;
} else {
var temp__4657__auto___67730__$1 = cljs.core.seq.call(null,seq__67598_67719);
if(temp__4657__auto___67730__$1){
var seq__67598_67731__$1 = temp__4657__auto___67730__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67598_67731__$1)){
var c__25562__auto___67732 = cljs.core.chunk_first.call(null,seq__67598_67731__$1);
var G__67733 = cljs.core.chunk_rest.call(null,seq__67598_67731__$1);
var G__67734 = c__25562__auto___67732;
var G__67735 = cljs.core.count.call(null,c__25562__auto___67732);
var G__67736 = (0);
seq__67598_67719 = G__67733;
chunk__67599_67720 = G__67734;
count__67600_67721 = G__67735;
i__67601_67722 = G__67736;
continue;
} else {
var vec__67605_67737 = cljs.core.first.call(null,seq__67598_67731__$1);
var col_67738 = cljs.core.nth.call(null,vec__67605_67737,(0),null);
var infos_67739 = cljs.core.nth.call(null,vec__67605_67737,(1),null);
encode_cols.call(null,infos_67739,source_idx_67669,line_67717,col_67738);

var G__67740 = cljs.core.next.call(null,seq__67598_67731__$1);
var G__67741 = null;
var G__67742 = (0);
var G__67743 = (0);
seq__67598_67719 = G__67740;
chunk__67599_67720 = G__67741;
count__67600_67721 = G__67742;
i__67601_67722 = G__67743;
continue;
}
} else {
}
}
break;
}

var G__67744 = cljs.core.next.call(null,seq__67578_67710__$1);
var G__67745 = null;
var G__67746 = (0);
var G__67747 = (0);
seq__67578_67673 = G__67744;
chunk__67579_67674 = G__67745;
count__67580_67675 = G__67746;
i__67581_67676 = G__67747;
continue;
}
} else {
}
}
break;
}

var G__67748 = seq__67568_67664;
var G__67749 = chunk__67569_67665;
var G__67750 = count__67570_67666;
var G__67751 = (i__67571_67667 + (1));
seq__67568_67664 = G__67748;
chunk__67569_67665 = G__67749;
count__67570_67666 = G__67750;
i__67571_67667 = G__67751;
continue;
} else {
var temp__4657__auto___67752 = cljs.core.seq.call(null,seq__67568_67664);
if(temp__4657__auto___67752){
var seq__67568_67753__$1 = temp__4657__auto___67752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67568_67753__$1)){
var c__25562__auto___67754 = cljs.core.chunk_first.call(null,seq__67568_67753__$1);
var G__67755 = cljs.core.chunk_rest.call(null,seq__67568_67753__$1);
var G__67756 = c__25562__auto___67754;
var G__67757 = cljs.core.count.call(null,c__25562__auto___67754);
var G__67758 = (0);
seq__67568_67664 = G__67755;
chunk__67569_67665 = G__67756;
count__67570_67666 = G__67757;
i__67571_67667 = G__67758;
continue;
} else {
var vec__67608_67759 = cljs.core.first.call(null,seq__67568_67753__$1);
var source_idx_67760 = cljs.core.nth.call(null,vec__67608_67759,(0),null);
var vec__67611_67761 = cljs.core.nth.call(null,vec__67608_67759,(1),null);
var __67762 = cljs.core.nth.call(null,vec__67611_67761,(0),null);
var lines_67763__$1 = cljs.core.nth.call(null,vec__67611_67761,(1),null);
var seq__67614_67764 = cljs.core.seq.call(null,lines_67763__$1);
var chunk__67615_67765 = null;
var count__67616_67766 = (0);
var i__67617_67767 = (0);
while(true){
if((i__67617_67767 < count__67616_67766)){
var vec__67618_67768 = cljs.core._nth.call(null,chunk__67615_67765,i__67617_67767);
var line_67769 = cljs.core.nth.call(null,vec__67618_67768,(0),null);
var cols_67770 = cljs.core.nth.call(null,vec__67618_67768,(1),null);
var seq__67621_67771 = cljs.core.seq.call(null,cols_67770);
var chunk__67622_67772 = null;
var count__67623_67773 = (0);
var i__67624_67774 = (0);
while(true){
if((i__67624_67774 < count__67623_67773)){
var vec__67625_67775 = cljs.core._nth.call(null,chunk__67622_67772,i__67624_67774);
var col_67776 = cljs.core.nth.call(null,vec__67625_67775,(0),null);
var infos_67777 = cljs.core.nth.call(null,vec__67625_67775,(1),null);
encode_cols.call(null,infos_67777,source_idx_67760,line_67769,col_67776);

var G__67778 = seq__67621_67771;
var G__67779 = chunk__67622_67772;
var G__67780 = count__67623_67773;
var G__67781 = (i__67624_67774 + (1));
seq__67621_67771 = G__67778;
chunk__67622_67772 = G__67779;
count__67623_67773 = G__67780;
i__67624_67774 = G__67781;
continue;
} else {
var temp__4657__auto___67782__$1 = cljs.core.seq.call(null,seq__67621_67771);
if(temp__4657__auto___67782__$1){
var seq__67621_67783__$1 = temp__4657__auto___67782__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67621_67783__$1)){
var c__25562__auto___67784 = cljs.core.chunk_first.call(null,seq__67621_67783__$1);
var G__67785 = cljs.core.chunk_rest.call(null,seq__67621_67783__$1);
var G__67786 = c__25562__auto___67784;
var G__67787 = cljs.core.count.call(null,c__25562__auto___67784);
var G__67788 = (0);
seq__67621_67771 = G__67785;
chunk__67622_67772 = G__67786;
count__67623_67773 = G__67787;
i__67624_67774 = G__67788;
continue;
} else {
var vec__67628_67789 = cljs.core.first.call(null,seq__67621_67783__$1);
var col_67790 = cljs.core.nth.call(null,vec__67628_67789,(0),null);
var infos_67791 = cljs.core.nth.call(null,vec__67628_67789,(1),null);
encode_cols.call(null,infos_67791,source_idx_67760,line_67769,col_67790);

var G__67792 = cljs.core.next.call(null,seq__67621_67783__$1);
var G__67793 = null;
var G__67794 = (0);
var G__67795 = (0);
seq__67621_67771 = G__67792;
chunk__67622_67772 = G__67793;
count__67623_67773 = G__67794;
i__67624_67774 = G__67795;
continue;
}
} else {
}
}
break;
}

var G__67796 = seq__67614_67764;
var G__67797 = chunk__67615_67765;
var G__67798 = count__67616_67766;
var G__67799 = (i__67617_67767 + (1));
seq__67614_67764 = G__67796;
chunk__67615_67765 = G__67797;
count__67616_67766 = G__67798;
i__67617_67767 = G__67799;
continue;
} else {
var temp__4657__auto___67800__$1 = cljs.core.seq.call(null,seq__67614_67764);
if(temp__4657__auto___67800__$1){
var seq__67614_67801__$1 = temp__4657__auto___67800__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67614_67801__$1)){
var c__25562__auto___67802 = cljs.core.chunk_first.call(null,seq__67614_67801__$1);
var G__67803 = cljs.core.chunk_rest.call(null,seq__67614_67801__$1);
var G__67804 = c__25562__auto___67802;
var G__67805 = cljs.core.count.call(null,c__25562__auto___67802);
var G__67806 = (0);
seq__67614_67764 = G__67803;
chunk__67615_67765 = G__67804;
count__67616_67766 = G__67805;
i__67617_67767 = G__67806;
continue;
} else {
var vec__67631_67807 = cljs.core.first.call(null,seq__67614_67801__$1);
var line_67808 = cljs.core.nth.call(null,vec__67631_67807,(0),null);
var cols_67809 = cljs.core.nth.call(null,vec__67631_67807,(1),null);
var seq__67634_67810 = cljs.core.seq.call(null,cols_67809);
var chunk__67635_67811 = null;
var count__67636_67812 = (0);
var i__67637_67813 = (0);
while(true){
if((i__67637_67813 < count__67636_67812)){
var vec__67638_67814 = cljs.core._nth.call(null,chunk__67635_67811,i__67637_67813);
var col_67815 = cljs.core.nth.call(null,vec__67638_67814,(0),null);
var infos_67816 = cljs.core.nth.call(null,vec__67638_67814,(1),null);
encode_cols.call(null,infos_67816,source_idx_67760,line_67808,col_67815);

var G__67817 = seq__67634_67810;
var G__67818 = chunk__67635_67811;
var G__67819 = count__67636_67812;
var G__67820 = (i__67637_67813 + (1));
seq__67634_67810 = G__67817;
chunk__67635_67811 = G__67818;
count__67636_67812 = G__67819;
i__67637_67813 = G__67820;
continue;
} else {
var temp__4657__auto___67821__$2 = cljs.core.seq.call(null,seq__67634_67810);
if(temp__4657__auto___67821__$2){
var seq__67634_67822__$1 = temp__4657__auto___67821__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67634_67822__$1)){
var c__25562__auto___67823 = cljs.core.chunk_first.call(null,seq__67634_67822__$1);
var G__67824 = cljs.core.chunk_rest.call(null,seq__67634_67822__$1);
var G__67825 = c__25562__auto___67823;
var G__67826 = cljs.core.count.call(null,c__25562__auto___67823);
var G__67827 = (0);
seq__67634_67810 = G__67824;
chunk__67635_67811 = G__67825;
count__67636_67812 = G__67826;
i__67637_67813 = G__67827;
continue;
} else {
var vec__67641_67828 = cljs.core.first.call(null,seq__67634_67822__$1);
var col_67829 = cljs.core.nth.call(null,vec__67641_67828,(0),null);
var infos_67830 = cljs.core.nth.call(null,vec__67641_67828,(1),null);
encode_cols.call(null,infos_67830,source_idx_67760,line_67808,col_67829);

var G__67831 = cljs.core.next.call(null,seq__67634_67822__$1);
var G__67832 = null;
var G__67833 = (0);
var G__67834 = (0);
seq__67634_67810 = G__67831;
chunk__67635_67811 = G__67832;
count__67636_67812 = G__67833;
i__67637_67813 = G__67834;
continue;
}
} else {
}
}
break;
}

var G__67835 = cljs.core.next.call(null,seq__67614_67801__$1);
var G__67836 = null;
var G__67837 = (0);
var G__67838 = (0);
seq__67614_67764 = G__67835;
chunk__67615_67765 = G__67836;
count__67616_67766 = G__67837;
i__67617_67767 = G__67838;
continue;
}
} else {
}
}
break;
}

var G__67839 = cljs.core.next.call(null,seq__67568_67753__$1);
var G__67840 = null;
var G__67841 = (0);
var G__67842 = (0);
seq__67568_67664 = G__67839;
chunk__67569_67665 = G__67840;
count__67570_67666 = G__67841;
i__67571_67667 = G__67842;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__67644 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__67479_SHARP_){
return [cljs.core.str(p1__67479_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__67480_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__67480_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__67481_SHARP_){
return clojure.string.join.call(null,",",p1__67481_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__67645 = G__67644;
goog.object.set(G__67645,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__67645;
} else {
return G__67644;
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
var vec__67852 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__67852,(0),null);
var col_map = cljs.core.nth.call(null,vec__67852,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__67855 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__67855,(0),null);
var infos = cljs.core.nth.call(null,vec__67855,(1),null);
var G__67861 = cljs.core.next.call(null,col_map_seq);
var G__67862 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__67855,col,infos,vec__67852,line,col_map){
return (function (v,p__67858){
var map__67859 = p__67858;
var map__67859__$1 = ((((!((map__67859 == null)))?((((map__67859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67859):map__67859);
var gline = cljs.core.get.call(null,map__67859__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__67859__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__67855,col,infos,vec__67852,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__67861;
new_cols = G__67862;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__67863 = cljs.core.next.call(null,line_map_seq);
var G__67864 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__67863;
new_lines = G__67864;
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
var seq__67927_67989 = cljs.core.seq.call(null,reverse_map);
var chunk__67928_67990 = null;
var count__67929_67991 = (0);
var i__67930_67992 = (0);
while(true){
if((i__67930_67992 < count__67929_67991)){
var vec__67931_67993 = cljs.core._nth.call(null,chunk__67928_67990,i__67930_67992);
var line_67994 = cljs.core.nth.call(null,vec__67931_67993,(0),null);
var columns_67995 = cljs.core.nth.call(null,vec__67931_67993,(1),null);
var seq__67934_67996 = cljs.core.seq.call(null,columns_67995);
var chunk__67935_67997 = null;
var count__67936_67998 = (0);
var i__67937_67999 = (0);
while(true){
if((i__67937_67999 < count__67936_67998)){
var vec__67938_68000 = cljs.core._nth.call(null,chunk__67935_67997,i__67937_67999);
var column_68001 = cljs.core.nth.call(null,vec__67938_68000,(0),null);
var column_info_68002 = cljs.core.nth.call(null,vec__67938_68000,(1),null);
var seq__67941_68003 = cljs.core.seq.call(null,column_info_68002);
var chunk__67942_68004 = null;
var count__67943_68005 = (0);
var i__67944_68006 = (0);
while(true){
if((i__67944_68006 < count__67943_68005)){
var map__67945_68007 = cljs.core._nth.call(null,chunk__67942_68004,i__67944_68006);
var map__67945_68008__$1 = ((((!((map__67945_68007 == null)))?((((map__67945_68007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67945_68007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67945_68007):map__67945_68007);
var gline_68009 = cljs.core.get.call(null,map__67945_68008__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68010 = cljs.core.get.call(null,map__67945_68008__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68011 = cljs.core.get.call(null,map__67945_68008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68009], null),cljs.core.fnil.call(null,((function (seq__67941_68003,chunk__67942_68004,count__67943_68005,i__67944_68006,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67945_68007,map__67945_68008__$1,gline_68009,gcol_68010,name_68011,vec__67938_68000,column_68001,column_info_68002,vec__67931_67993,line_67994,columns_67995,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68010], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_67994,new cljs.core.Keyword(null,"col","col",-1959363084),column_68001,new cljs.core.Keyword(null,"name","name",1843675177),name_68011], null));
});})(seq__67941_68003,chunk__67942_68004,count__67943_68005,i__67944_68006,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67945_68007,map__67945_68008__$1,gline_68009,gcol_68010,name_68011,vec__67938_68000,column_68001,column_info_68002,vec__67931_67993,line_67994,columns_67995,inverted))
,cljs.core.sorted_map.call(null)));

var G__68012 = seq__67941_68003;
var G__68013 = chunk__67942_68004;
var G__68014 = count__67943_68005;
var G__68015 = (i__67944_68006 + (1));
seq__67941_68003 = G__68012;
chunk__67942_68004 = G__68013;
count__67943_68005 = G__68014;
i__67944_68006 = G__68015;
continue;
} else {
var temp__4657__auto___68016 = cljs.core.seq.call(null,seq__67941_68003);
if(temp__4657__auto___68016){
var seq__67941_68017__$1 = temp__4657__auto___68016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67941_68017__$1)){
var c__25562__auto___68018 = cljs.core.chunk_first.call(null,seq__67941_68017__$1);
var G__68019 = cljs.core.chunk_rest.call(null,seq__67941_68017__$1);
var G__68020 = c__25562__auto___68018;
var G__68021 = cljs.core.count.call(null,c__25562__auto___68018);
var G__68022 = (0);
seq__67941_68003 = G__68019;
chunk__67942_68004 = G__68020;
count__67943_68005 = G__68021;
i__67944_68006 = G__68022;
continue;
} else {
var map__67947_68023 = cljs.core.first.call(null,seq__67941_68017__$1);
var map__67947_68024__$1 = ((((!((map__67947_68023 == null)))?((((map__67947_68023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67947_68023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67947_68023):map__67947_68023);
var gline_68025 = cljs.core.get.call(null,map__67947_68024__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68026 = cljs.core.get.call(null,map__67947_68024__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68027 = cljs.core.get.call(null,map__67947_68024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68025], null),cljs.core.fnil.call(null,((function (seq__67941_68003,chunk__67942_68004,count__67943_68005,i__67944_68006,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67947_68023,map__67947_68024__$1,gline_68025,gcol_68026,name_68027,seq__67941_68017__$1,temp__4657__auto___68016,vec__67938_68000,column_68001,column_info_68002,vec__67931_67993,line_67994,columns_67995,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68026], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_67994,new cljs.core.Keyword(null,"col","col",-1959363084),column_68001,new cljs.core.Keyword(null,"name","name",1843675177),name_68027], null));
});})(seq__67941_68003,chunk__67942_68004,count__67943_68005,i__67944_68006,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67947_68023,map__67947_68024__$1,gline_68025,gcol_68026,name_68027,seq__67941_68017__$1,temp__4657__auto___68016,vec__67938_68000,column_68001,column_info_68002,vec__67931_67993,line_67994,columns_67995,inverted))
,cljs.core.sorted_map.call(null)));

var G__68028 = cljs.core.next.call(null,seq__67941_68017__$1);
var G__68029 = null;
var G__68030 = (0);
var G__68031 = (0);
seq__67941_68003 = G__68028;
chunk__67942_68004 = G__68029;
count__67943_68005 = G__68030;
i__67944_68006 = G__68031;
continue;
}
} else {
}
}
break;
}

var G__68032 = seq__67934_67996;
var G__68033 = chunk__67935_67997;
var G__68034 = count__67936_67998;
var G__68035 = (i__67937_67999 + (1));
seq__67934_67996 = G__68032;
chunk__67935_67997 = G__68033;
count__67936_67998 = G__68034;
i__67937_67999 = G__68035;
continue;
} else {
var temp__4657__auto___68036 = cljs.core.seq.call(null,seq__67934_67996);
if(temp__4657__auto___68036){
var seq__67934_68037__$1 = temp__4657__auto___68036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67934_68037__$1)){
var c__25562__auto___68038 = cljs.core.chunk_first.call(null,seq__67934_68037__$1);
var G__68039 = cljs.core.chunk_rest.call(null,seq__67934_68037__$1);
var G__68040 = c__25562__auto___68038;
var G__68041 = cljs.core.count.call(null,c__25562__auto___68038);
var G__68042 = (0);
seq__67934_67996 = G__68039;
chunk__67935_67997 = G__68040;
count__67936_67998 = G__68041;
i__67937_67999 = G__68042;
continue;
} else {
var vec__67949_68043 = cljs.core.first.call(null,seq__67934_68037__$1);
var column_68044 = cljs.core.nth.call(null,vec__67949_68043,(0),null);
var column_info_68045 = cljs.core.nth.call(null,vec__67949_68043,(1),null);
var seq__67952_68046 = cljs.core.seq.call(null,column_info_68045);
var chunk__67953_68047 = null;
var count__67954_68048 = (0);
var i__67955_68049 = (0);
while(true){
if((i__67955_68049 < count__67954_68048)){
var map__67956_68050 = cljs.core._nth.call(null,chunk__67953_68047,i__67955_68049);
var map__67956_68051__$1 = ((((!((map__67956_68050 == null)))?((((map__67956_68050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67956_68050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67956_68050):map__67956_68050);
var gline_68052 = cljs.core.get.call(null,map__67956_68051__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68053 = cljs.core.get.call(null,map__67956_68051__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68054 = cljs.core.get.call(null,map__67956_68051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68052], null),cljs.core.fnil.call(null,((function (seq__67952_68046,chunk__67953_68047,count__67954_68048,i__67955_68049,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67956_68050,map__67956_68051__$1,gline_68052,gcol_68053,name_68054,vec__67949_68043,column_68044,column_info_68045,seq__67934_68037__$1,temp__4657__auto___68036,vec__67931_67993,line_67994,columns_67995,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68053], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_67994,new cljs.core.Keyword(null,"col","col",-1959363084),column_68044,new cljs.core.Keyword(null,"name","name",1843675177),name_68054], null));
});})(seq__67952_68046,chunk__67953_68047,count__67954_68048,i__67955_68049,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67956_68050,map__67956_68051__$1,gline_68052,gcol_68053,name_68054,vec__67949_68043,column_68044,column_info_68045,seq__67934_68037__$1,temp__4657__auto___68036,vec__67931_67993,line_67994,columns_67995,inverted))
,cljs.core.sorted_map.call(null)));

var G__68055 = seq__67952_68046;
var G__68056 = chunk__67953_68047;
var G__68057 = count__67954_68048;
var G__68058 = (i__67955_68049 + (1));
seq__67952_68046 = G__68055;
chunk__67953_68047 = G__68056;
count__67954_68048 = G__68057;
i__67955_68049 = G__68058;
continue;
} else {
var temp__4657__auto___68059__$1 = cljs.core.seq.call(null,seq__67952_68046);
if(temp__4657__auto___68059__$1){
var seq__67952_68060__$1 = temp__4657__auto___68059__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67952_68060__$1)){
var c__25562__auto___68061 = cljs.core.chunk_first.call(null,seq__67952_68060__$1);
var G__68062 = cljs.core.chunk_rest.call(null,seq__67952_68060__$1);
var G__68063 = c__25562__auto___68061;
var G__68064 = cljs.core.count.call(null,c__25562__auto___68061);
var G__68065 = (0);
seq__67952_68046 = G__68062;
chunk__67953_68047 = G__68063;
count__67954_68048 = G__68064;
i__67955_68049 = G__68065;
continue;
} else {
var map__67958_68066 = cljs.core.first.call(null,seq__67952_68060__$1);
var map__67958_68067__$1 = ((((!((map__67958_68066 == null)))?((((map__67958_68066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67958_68066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67958_68066):map__67958_68066);
var gline_68068 = cljs.core.get.call(null,map__67958_68067__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68069 = cljs.core.get.call(null,map__67958_68067__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68070 = cljs.core.get.call(null,map__67958_68067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68068], null),cljs.core.fnil.call(null,((function (seq__67952_68046,chunk__67953_68047,count__67954_68048,i__67955_68049,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67958_68066,map__67958_68067__$1,gline_68068,gcol_68069,name_68070,seq__67952_68060__$1,temp__4657__auto___68059__$1,vec__67949_68043,column_68044,column_info_68045,seq__67934_68037__$1,temp__4657__auto___68036,vec__67931_67993,line_67994,columns_67995,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68069], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_67994,new cljs.core.Keyword(null,"col","col",-1959363084),column_68044,new cljs.core.Keyword(null,"name","name",1843675177),name_68070], null));
});})(seq__67952_68046,chunk__67953_68047,count__67954_68048,i__67955_68049,seq__67934_67996,chunk__67935_67997,count__67936_67998,i__67937_67999,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67958_68066,map__67958_68067__$1,gline_68068,gcol_68069,name_68070,seq__67952_68060__$1,temp__4657__auto___68059__$1,vec__67949_68043,column_68044,column_info_68045,seq__67934_68037__$1,temp__4657__auto___68036,vec__67931_67993,line_67994,columns_67995,inverted))
,cljs.core.sorted_map.call(null)));

var G__68071 = cljs.core.next.call(null,seq__67952_68060__$1);
var G__68072 = null;
var G__68073 = (0);
var G__68074 = (0);
seq__67952_68046 = G__68071;
chunk__67953_68047 = G__68072;
count__67954_68048 = G__68073;
i__67955_68049 = G__68074;
continue;
}
} else {
}
}
break;
}

var G__68075 = cljs.core.next.call(null,seq__67934_68037__$1);
var G__68076 = null;
var G__68077 = (0);
var G__68078 = (0);
seq__67934_67996 = G__68075;
chunk__67935_67997 = G__68076;
count__67936_67998 = G__68077;
i__67937_67999 = G__68078;
continue;
}
} else {
}
}
break;
}

var G__68079 = seq__67927_67989;
var G__68080 = chunk__67928_67990;
var G__68081 = count__67929_67991;
var G__68082 = (i__67930_67992 + (1));
seq__67927_67989 = G__68079;
chunk__67928_67990 = G__68080;
count__67929_67991 = G__68081;
i__67930_67992 = G__68082;
continue;
} else {
var temp__4657__auto___68083 = cljs.core.seq.call(null,seq__67927_67989);
if(temp__4657__auto___68083){
var seq__67927_68084__$1 = temp__4657__auto___68083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67927_68084__$1)){
var c__25562__auto___68085 = cljs.core.chunk_first.call(null,seq__67927_68084__$1);
var G__68086 = cljs.core.chunk_rest.call(null,seq__67927_68084__$1);
var G__68087 = c__25562__auto___68085;
var G__68088 = cljs.core.count.call(null,c__25562__auto___68085);
var G__68089 = (0);
seq__67927_67989 = G__68086;
chunk__67928_67990 = G__68087;
count__67929_67991 = G__68088;
i__67930_67992 = G__68089;
continue;
} else {
var vec__67960_68090 = cljs.core.first.call(null,seq__67927_68084__$1);
var line_68091 = cljs.core.nth.call(null,vec__67960_68090,(0),null);
var columns_68092 = cljs.core.nth.call(null,vec__67960_68090,(1),null);
var seq__67963_68093 = cljs.core.seq.call(null,columns_68092);
var chunk__67964_68094 = null;
var count__67965_68095 = (0);
var i__67966_68096 = (0);
while(true){
if((i__67966_68096 < count__67965_68095)){
var vec__67967_68097 = cljs.core._nth.call(null,chunk__67964_68094,i__67966_68096);
var column_68098 = cljs.core.nth.call(null,vec__67967_68097,(0),null);
var column_info_68099 = cljs.core.nth.call(null,vec__67967_68097,(1),null);
var seq__67970_68100 = cljs.core.seq.call(null,column_info_68099);
var chunk__67971_68101 = null;
var count__67972_68102 = (0);
var i__67973_68103 = (0);
while(true){
if((i__67973_68103 < count__67972_68102)){
var map__67974_68104 = cljs.core._nth.call(null,chunk__67971_68101,i__67973_68103);
var map__67974_68105__$1 = ((((!((map__67974_68104 == null)))?((((map__67974_68104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67974_68104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67974_68104):map__67974_68104);
var gline_68106 = cljs.core.get.call(null,map__67974_68105__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68107 = cljs.core.get.call(null,map__67974_68105__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68108 = cljs.core.get.call(null,map__67974_68105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68106], null),cljs.core.fnil.call(null,((function (seq__67970_68100,chunk__67971_68101,count__67972_68102,i__67973_68103,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67974_68104,map__67974_68105__$1,gline_68106,gcol_68107,name_68108,vec__67967_68097,column_68098,column_info_68099,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68107], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68091,new cljs.core.Keyword(null,"col","col",-1959363084),column_68098,new cljs.core.Keyword(null,"name","name",1843675177),name_68108], null));
});})(seq__67970_68100,chunk__67971_68101,count__67972_68102,i__67973_68103,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67974_68104,map__67974_68105__$1,gline_68106,gcol_68107,name_68108,vec__67967_68097,column_68098,column_info_68099,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted))
,cljs.core.sorted_map.call(null)));

var G__68109 = seq__67970_68100;
var G__68110 = chunk__67971_68101;
var G__68111 = count__67972_68102;
var G__68112 = (i__67973_68103 + (1));
seq__67970_68100 = G__68109;
chunk__67971_68101 = G__68110;
count__67972_68102 = G__68111;
i__67973_68103 = G__68112;
continue;
} else {
var temp__4657__auto___68113__$1 = cljs.core.seq.call(null,seq__67970_68100);
if(temp__4657__auto___68113__$1){
var seq__67970_68114__$1 = temp__4657__auto___68113__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67970_68114__$1)){
var c__25562__auto___68115 = cljs.core.chunk_first.call(null,seq__67970_68114__$1);
var G__68116 = cljs.core.chunk_rest.call(null,seq__67970_68114__$1);
var G__68117 = c__25562__auto___68115;
var G__68118 = cljs.core.count.call(null,c__25562__auto___68115);
var G__68119 = (0);
seq__67970_68100 = G__68116;
chunk__67971_68101 = G__68117;
count__67972_68102 = G__68118;
i__67973_68103 = G__68119;
continue;
} else {
var map__67976_68120 = cljs.core.first.call(null,seq__67970_68114__$1);
var map__67976_68121__$1 = ((((!((map__67976_68120 == null)))?((((map__67976_68120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67976_68120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67976_68120):map__67976_68120);
var gline_68122 = cljs.core.get.call(null,map__67976_68121__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68123 = cljs.core.get.call(null,map__67976_68121__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68124 = cljs.core.get.call(null,map__67976_68121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68122], null),cljs.core.fnil.call(null,((function (seq__67970_68100,chunk__67971_68101,count__67972_68102,i__67973_68103,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67976_68120,map__67976_68121__$1,gline_68122,gcol_68123,name_68124,seq__67970_68114__$1,temp__4657__auto___68113__$1,vec__67967_68097,column_68098,column_info_68099,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68123], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68091,new cljs.core.Keyword(null,"col","col",-1959363084),column_68098,new cljs.core.Keyword(null,"name","name",1843675177),name_68124], null));
});})(seq__67970_68100,chunk__67971_68101,count__67972_68102,i__67973_68103,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67976_68120,map__67976_68121__$1,gline_68122,gcol_68123,name_68124,seq__67970_68114__$1,temp__4657__auto___68113__$1,vec__67967_68097,column_68098,column_info_68099,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted))
,cljs.core.sorted_map.call(null)));

var G__68125 = cljs.core.next.call(null,seq__67970_68114__$1);
var G__68126 = null;
var G__68127 = (0);
var G__68128 = (0);
seq__67970_68100 = G__68125;
chunk__67971_68101 = G__68126;
count__67972_68102 = G__68127;
i__67973_68103 = G__68128;
continue;
}
} else {
}
}
break;
}

var G__68129 = seq__67963_68093;
var G__68130 = chunk__67964_68094;
var G__68131 = count__67965_68095;
var G__68132 = (i__67966_68096 + (1));
seq__67963_68093 = G__68129;
chunk__67964_68094 = G__68130;
count__67965_68095 = G__68131;
i__67966_68096 = G__68132;
continue;
} else {
var temp__4657__auto___68133__$1 = cljs.core.seq.call(null,seq__67963_68093);
if(temp__4657__auto___68133__$1){
var seq__67963_68134__$1 = temp__4657__auto___68133__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67963_68134__$1)){
var c__25562__auto___68135 = cljs.core.chunk_first.call(null,seq__67963_68134__$1);
var G__68136 = cljs.core.chunk_rest.call(null,seq__67963_68134__$1);
var G__68137 = c__25562__auto___68135;
var G__68138 = cljs.core.count.call(null,c__25562__auto___68135);
var G__68139 = (0);
seq__67963_68093 = G__68136;
chunk__67964_68094 = G__68137;
count__67965_68095 = G__68138;
i__67966_68096 = G__68139;
continue;
} else {
var vec__67978_68140 = cljs.core.first.call(null,seq__67963_68134__$1);
var column_68141 = cljs.core.nth.call(null,vec__67978_68140,(0),null);
var column_info_68142 = cljs.core.nth.call(null,vec__67978_68140,(1),null);
var seq__67981_68143 = cljs.core.seq.call(null,column_info_68142);
var chunk__67982_68144 = null;
var count__67983_68145 = (0);
var i__67984_68146 = (0);
while(true){
if((i__67984_68146 < count__67983_68145)){
var map__67985_68147 = cljs.core._nth.call(null,chunk__67982_68144,i__67984_68146);
var map__67985_68148__$1 = ((((!((map__67985_68147 == null)))?((((map__67985_68147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67985_68147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67985_68147):map__67985_68147);
var gline_68149 = cljs.core.get.call(null,map__67985_68148__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68150 = cljs.core.get.call(null,map__67985_68148__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68151 = cljs.core.get.call(null,map__67985_68148__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68149], null),cljs.core.fnil.call(null,((function (seq__67981_68143,chunk__67982_68144,count__67983_68145,i__67984_68146,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67985_68147,map__67985_68148__$1,gline_68149,gcol_68150,name_68151,vec__67978_68140,column_68141,column_info_68142,seq__67963_68134__$1,temp__4657__auto___68133__$1,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68150], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68091,new cljs.core.Keyword(null,"col","col",-1959363084),column_68141,new cljs.core.Keyword(null,"name","name",1843675177),name_68151], null));
});})(seq__67981_68143,chunk__67982_68144,count__67983_68145,i__67984_68146,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67985_68147,map__67985_68148__$1,gline_68149,gcol_68150,name_68151,vec__67978_68140,column_68141,column_info_68142,seq__67963_68134__$1,temp__4657__auto___68133__$1,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted))
,cljs.core.sorted_map.call(null)));

var G__68152 = seq__67981_68143;
var G__68153 = chunk__67982_68144;
var G__68154 = count__67983_68145;
var G__68155 = (i__67984_68146 + (1));
seq__67981_68143 = G__68152;
chunk__67982_68144 = G__68153;
count__67983_68145 = G__68154;
i__67984_68146 = G__68155;
continue;
} else {
var temp__4657__auto___68156__$2 = cljs.core.seq.call(null,seq__67981_68143);
if(temp__4657__auto___68156__$2){
var seq__67981_68157__$1 = temp__4657__auto___68156__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67981_68157__$1)){
var c__25562__auto___68158 = cljs.core.chunk_first.call(null,seq__67981_68157__$1);
var G__68159 = cljs.core.chunk_rest.call(null,seq__67981_68157__$1);
var G__68160 = c__25562__auto___68158;
var G__68161 = cljs.core.count.call(null,c__25562__auto___68158);
var G__68162 = (0);
seq__67981_68143 = G__68159;
chunk__67982_68144 = G__68160;
count__67983_68145 = G__68161;
i__67984_68146 = G__68162;
continue;
} else {
var map__67987_68163 = cljs.core.first.call(null,seq__67981_68157__$1);
var map__67987_68164__$1 = ((((!((map__67987_68163 == null)))?((((map__67987_68163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67987_68163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67987_68163):map__67987_68163);
var gline_68165 = cljs.core.get.call(null,map__67987_68164__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68166 = cljs.core.get.call(null,map__67987_68164__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68167 = cljs.core.get.call(null,map__67987_68164__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68165], null),cljs.core.fnil.call(null,((function (seq__67981_68143,chunk__67982_68144,count__67983_68145,i__67984_68146,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67987_68163,map__67987_68164__$1,gline_68165,gcol_68166,name_68167,seq__67981_68157__$1,temp__4657__auto___68156__$2,vec__67978_68140,column_68141,column_info_68142,seq__67963_68134__$1,temp__4657__auto___68133__$1,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68166], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68091,new cljs.core.Keyword(null,"col","col",-1959363084),column_68141,new cljs.core.Keyword(null,"name","name",1843675177),name_68167], null));
});})(seq__67981_68143,chunk__67982_68144,count__67983_68145,i__67984_68146,seq__67963_68093,chunk__67964_68094,count__67965_68095,i__67966_68096,seq__67927_67989,chunk__67928_67990,count__67929_67991,i__67930_67992,map__67987_68163,map__67987_68164__$1,gline_68165,gcol_68166,name_68167,seq__67981_68157__$1,temp__4657__auto___68156__$2,vec__67978_68140,column_68141,column_info_68142,seq__67963_68134__$1,temp__4657__auto___68133__$1,vec__67960_68090,line_68091,columns_68092,seq__67927_68084__$1,temp__4657__auto___68083,inverted))
,cljs.core.sorted_map.call(null)));

var G__68168 = cljs.core.next.call(null,seq__67981_68157__$1);
var G__68169 = null;
var G__68170 = (0);
var G__68171 = (0);
seq__67981_68143 = G__68168;
chunk__67982_68144 = G__68169;
count__67983_68145 = G__68170;
i__67984_68146 = G__68171;
continue;
}
} else {
}
}
break;
}

var G__68172 = cljs.core.next.call(null,seq__67963_68134__$1);
var G__68173 = null;
var G__68174 = (0);
var G__68175 = (0);
seq__67963_68093 = G__68172;
chunk__67964_68094 = G__68173;
count__67965_68095 = G__68174;
i__67966_68096 = G__68175;
continue;
}
} else {
}
}
break;
}

var G__68176 = cljs.core.next.call(null,seq__67927_68084__$1);
var G__68177 = null;
var G__68178 = (0);
var G__68179 = (0);
seq__67927_67989 = G__68176;
chunk__67928_67990 = G__68177;
count__67929_67991 = G__68178;
i__67930_67992 = G__68179;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1478402641248