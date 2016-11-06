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
return cljs.core.reduce.call(null,(function (m,p__52684){
var vec__52685 = p__52684;
var i = cljs.core.nth.call(null,vec__52685,(0),null);
var v = cljs.core.nth.call(null,vec__52685,(1),null);
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
var vec__52691 = seg;
var gcol = cljs.core.nth.call(null,vec__52691,(0),null);
var source = cljs.core.nth.call(null,vec__52691,(1),null);
var line = cljs.core.nth.call(null,vec__52691,(2),null);
var col = cljs.core.nth.call(null,vec__52691,(3),null);
var name = cljs.core.nth.call(null,vec__52691,(4),null);
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
var vec__52700 = seg;
var gcol = cljs.core.nth.call(null,vec__52700,(0),null);
var source = cljs.core.nth.call(null,vec__52700,(1),null);
var line = cljs.core.nth.call(null,vec__52700,(2),null);
var col = cljs.core.nth.call(null,vec__52700,(3),null);
var name = cljs.core.nth.call(null,vec__52700,(4),null);
var vec__52703 = relseg;
var rgcol = cljs.core.nth.call(null,vec__52703,(0),null);
var rsource = cljs.core.nth.call(null,vec__52703,(1),null);
var rline = cljs.core.nth.call(null,vec__52703,(2),null);
var rcol = cljs.core.nth.call(null,vec__52703,(3),null);
var rname = cljs.core.nth.call(null,vec__52703,(4),null);
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
var map__52708 = segmap;
var map__52708__$1 = ((((!((map__52708 == null)))?((((map__52708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52708):map__52708);
var gcol = cljs.core.get.call(null,map__52708__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__52708__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__52708__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__52708__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__52708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__52708,map__52708__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__52708,map__52708__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__52708,map__52708__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__52708,map__52708__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__52708,map__52708__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__52708,map__52708__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args52718 = [];
var len__25826__auto___52724 = arguments.length;
var i__25827__auto___52725 = (0);
while(true){
if((i__25827__auto___52725 < len__25826__auto___52724)){
args52718.push((arguments[i__25827__auto___52725]));

var G__52726 = (i__25827__auto___52725 + (1));
i__25827__auto___52725 = G__52726;
continue;
} else {
}
break;
}

var G__52720 = args52718.length;
switch (G__52720) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52718.length)].join('')));

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
var vec__52721 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__52731 = cljs.core.next.call(null,segs__$1);
var G__52732 = nrelseg;
var G__52733 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__52731;
relseg__$1 = G__52732;
result__$1 = G__52733;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__52721,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__52721,(1),null);
var G__52736 = (gline + (1));
var G__52737 = cljs.core.next.call(null,lines__$1);
var G__52738 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__52739 = result__$1;
gline = G__52736;
lines__$1 = G__52737;
relseg = G__52738;
result = G__52739;
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
var map__52744 = segmap;
var map__52744__$1 = ((((!((map__52744 == null)))?((((map__52744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52744):map__52744);
var gcol = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__52744,map__52744__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__52744,map__52744__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__52740_SHARP_){
return cljs.core.conj.call(null,p1__52740_SHARP_,d__$1);
});})(map__52744,map__52744__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__52744,map__52744__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args52749 = [];
var len__25826__auto___52755 = arguments.length;
var i__25827__auto___52756 = (0);
while(true){
if((i__25827__auto___52756 < len__25826__auto___52755)){
args52749.push((arguments[i__25827__auto___52756]));

var G__52757 = (i__25827__auto___52756 + (1));
i__25827__auto___52756 = G__52757;
continue;
} else {
}
break;
}

var G__52751 = args52749.length;
switch (G__52751) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52749.length)].join('')));

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
var vec__52752 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__52759 = cljs.core.next.call(null,segs__$1);
var G__52760 = nrelseg;
var G__52761 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__52759;
relseg__$1 = G__52760;
result__$1 = G__52761;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__52752,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__52752,(1),null);
var G__52762 = (gline + (1));
var G__52763 = cljs.core.next.call(null,lines__$1);
var G__52764 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__52765 = result__$1;
gline = G__52762;
lines__$1 = G__52763;
relseg = G__52764;
result = G__52765;
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
return (function (p__52781){
var vec__52782 = p__52781;
var _ = cljs.core.nth.call(null,vec__52782,(0),null);
var source = cljs.core.nth.call(null,vec__52782,(1),null);
var line = cljs.core.nth.call(null,vec__52782,(2),null);
var col = cljs.core.nth.call(null,vec__52782,(3),null);
var name = cljs.core.nth.call(null,vec__52782,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__52785){
var vec__52786 = p__52785;
var gcol = cljs.core.nth.call(null,vec__52786,(0),null);
var sidx = cljs.core.nth.call(null,vec__52786,(1),null);
var line = cljs.core.nth.call(null,vec__52786,(2),null);
var col = cljs.core.nth.call(null,vec__52786,(3),null);
var name = cljs.core.nth.call(null,vec__52786,(4),null);
var seg = vec__52786;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__52786,gcol,sidx,line,col,name,seg,relseg){
return (function (p__52790){
var vec__52791 = p__52790;
var _ = cljs.core.nth.call(null,vec__52791,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__52791,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__52791,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__52791,(3),null);
var lname = cljs.core.nth.call(null,vec__52791,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__52786,gcol,sidx,line,col,name,seg,relseg))
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
var seq__52890 = cljs.core.seq.call(null,infos);
var chunk__52891 = null;
var count__52892 = (0);
var i__52893 = (0);
while(true){
if((i__52893 < count__52892)){
var info = cljs.core._nth.call(null,chunk__52891,i__52893);
var segv_52982 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_52983 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_52984 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_52983 > (lc_52984 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__52890,chunk__52891,count__52892,i__52893,segv_52982,gline_52983,lc_52984,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_52983 - (lc_52984 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_52982], null));
});})(seq__52890,chunk__52891,count__52892,i__52893,segv_52982,gline_52983,lc_52984,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__52890,chunk__52891,count__52892,i__52893,segv_52982,gline_52983,lc_52984,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52983], null),cljs.core.conj,segv_52982);
});})(seq__52890,chunk__52891,count__52892,i__52893,segv_52982,gline_52983,lc_52984,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__52985 = seq__52890;
var G__52986 = chunk__52891;
var G__52987 = count__52892;
var G__52988 = (i__52893 + (1));
seq__52890 = G__52985;
chunk__52891 = G__52986;
count__52892 = G__52987;
i__52893 = G__52988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52890);
if(temp__4657__auto__){
var seq__52890__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52890__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__52890__$1);
var G__52989 = cljs.core.chunk_rest.call(null,seq__52890__$1);
var G__52990 = c__25562__auto__;
var G__52991 = cljs.core.count.call(null,c__25562__auto__);
var G__52992 = (0);
seq__52890 = G__52989;
chunk__52891 = G__52990;
count__52892 = G__52991;
i__52893 = G__52992;
continue;
} else {
var info = cljs.core.first.call(null,seq__52890__$1);
var segv_52993 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_52994 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_52995 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_52994 > (lc_52995 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__52890,chunk__52891,count__52892,i__52893,segv_52993,gline_52994,lc_52995,info,seq__52890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_52994 - (lc_52995 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_52993], null));
});})(seq__52890,chunk__52891,count__52892,i__52893,segv_52993,gline_52994,lc_52995,info,seq__52890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__52890,chunk__52891,count__52892,i__52893,segv_52993,gline_52994,lc_52995,info,seq__52890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52994], null),cljs.core.conj,segv_52993);
});})(seq__52890,chunk__52891,count__52892,i__52893,segv_52993,gline_52994,lc_52995,info,seq__52890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__52999 = cljs.core.next.call(null,seq__52890__$1);
var G__53000 = null;
var G__53001 = (0);
var G__53002 = (0);
seq__52890 = G__52999;
chunk__52891 = G__53000;
count__52892 = G__53001;
i__52893 = G__53002;
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
var seq__52894_53004 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__52895_53005 = null;
var count__52896_53006 = (0);
var i__52897_53007 = (0);
while(true){
if((i__52897_53007 < count__52896_53006)){
var vec__52898_53009 = cljs.core._nth.call(null,chunk__52895_53005,i__52897_53007);
var source_idx_53010 = cljs.core.nth.call(null,vec__52898_53009,(0),null);
var vec__52901_53011 = cljs.core.nth.call(null,vec__52898_53009,(1),null);
var __53012 = cljs.core.nth.call(null,vec__52901_53011,(0),null);
var lines_53013__$1 = cljs.core.nth.call(null,vec__52901_53011,(1),null);
var seq__52904_53017 = cljs.core.seq.call(null,lines_53013__$1);
var chunk__52905_53018 = null;
var count__52906_53019 = (0);
var i__52907_53020 = (0);
while(true){
if((i__52907_53020 < count__52906_53019)){
var vec__52908_53023 = cljs.core._nth.call(null,chunk__52905_53018,i__52907_53020);
var line_53024 = cljs.core.nth.call(null,vec__52908_53023,(0),null);
var cols_53025 = cljs.core.nth.call(null,vec__52908_53023,(1),null);
var seq__52911_53026 = cljs.core.seq.call(null,cols_53025);
var chunk__52912_53027 = null;
var count__52913_53028 = (0);
var i__52914_53029 = (0);
while(true){
if((i__52914_53029 < count__52913_53028)){
var vec__52915_53031 = cljs.core._nth.call(null,chunk__52912_53027,i__52914_53029);
var col_53032 = cljs.core.nth.call(null,vec__52915_53031,(0),null);
var infos_53033 = cljs.core.nth.call(null,vec__52915_53031,(1),null);
encode_cols.call(null,infos_53033,source_idx_53010,line_53024,col_53032);

var G__53036 = seq__52911_53026;
var G__53037 = chunk__52912_53027;
var G__53038 = count__52913_53028;
var G__53039 = (i__52914_53029 + (1));
seq__52911_53026 = G__53036;
chunk__52912_53027 = G__53037;
count__52913_53028 = G__53038;
i__52914_53029 = G__53039;
continue;
} else {
var temp__4657__auto___53041 = cljs.core.seq.call(null,seq__52911_53026);
if(temp__4657__auto___53041){
var seq__52911_53043__$1 = temp__4657__auto___53041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52911_53043__$1)){
var c__25562__auto___53045 = cljs.core.chunk_first.call(null,seq__52911_53043__$1);
var G__53046 = cljs.core.chunk_rest.call(null,seq__52911_53043__$1);
var G__53047 = c__25562__auto___53045;
var G__53048 = cljs.core.count.call(null,c__25562__auto___53045);
var G__53049 = (0);
seq__52911_53026 = G__53046;
chunk__52912_53027 = G__53047;
count__52913_53028 = G__53048;
i__52914_53029 = G__53049;
continue;
} else {
var vec__52918_53050 = cljs.core.first.call(null,seq__52911_53043__$1);
var col_53051 = cljs.core.nth.call(null,vec__52918_53050,(0),null);
var infos_53052 = cljs.core.nth.call(null,vec__52918_53050,(1),null);
encode_cols.call(null,infos_53052,source_idx_53010,line_53024,col_53051);

var G__53055 = cljs.core.next.call(null,seq__52911_53043__$1);
var G__53056 = null;
var G__53057 = (0);
var G__53058 = (0);
seq__52911_53026 = G__53055;
chunk__52912_53027 = G__53056;
count__52913_53028 = G__53057;
i__52914_53029 = G__53058;
continue;
}
} else {
}
}
break;
}

var G__53060 = seq__52904_53017;
var G__53061 = chunk__52905_53018;
var G__53062 = count__52906_53019;
var G__53063 = (i__52907_53020 + (1));
seq__52904_53017 = G__53060;
chunk__52905_53018 = G__53061;
count__52906_53019 = G__53062;
i__52907_53020 = G__53063;
continue;
} else {
var temp__4657__auto___53065 = cljs.core.seq.call(null,seq__52904_53017);
if(temp__4657__auto___53065){
var seq__52904_53067__$1 = temp__4657__auto___53065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52904_53067__$1)){
var c__25562__auto___53069 = cljs.core.chunk_first.call(null,seq__52904_53067__$1);
var G__53070 = cljs.core.chunk_rest.call(null,seq__52904_53067__$1);
var G__53071 = c__25562__auto___53069;
var G__53072 = cljs.core.count.call(null,c__25562__auto___53069);
var G__53073 = (0);
seq__52904_53017 = G__53070;
chunk__52905_53018 = G__53071;
count__52906_53019 = G__53072;
i__52907_53020 = G__53073;
continue;
} else {
var vec__52921_53074 = cljs.core.first.call(null,seq__52904_53067__$1);
var line_53075 = cljs.core.nth.call(null,vec__52921_53074,(0),null);
var cols_53076 = cljs.core.nth.call(null,vec__52921_53074,(1),null);
var seq__52924_53078 = cljs.core.seq.call(null,cols_53076);
var chunk__52925_53079 = null;
var count__52926_53080 = (0);
var i__52927_53081 = (0);
while(true){
if((i__52927_53081 < count__52926_53080)){
var vec__52928_53084 = cljs.core._nth.call(null,chunk__52925_53079,i__52927_53081);
var col_53085 = cljs.core.nth.call(null,vec__52928_53084,(0),null);
var infos_53086 = cljs.core.nth.call(null,vec__52928_53084,(1),null);
encode_cols.call(null,infos_53086,source_idx_53010,line_53075,col_53085);

var G__53089 = seq__52924_53078;
var G__53090 = chunk__52925_53079;
var G__53091 = count__52926_53080;
var G__53092 = (i__52927_53081 + (1));
seq__52924_53078 = G__53089;
chunk__52925_53079 = G__53090;
count__52926_53080 = G__53091;
i__52927_53081 = G__53092;
continue;
} else {
var temp__4657__auto___53094__$1 = cljs.core.seq.call(null,seq__52924_53078);
if(temp__4657__auto___53094__$1){
var seq__52924_53095__$1 = temp__4657__auto___53094__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52924_53095__$1)){
var c__25562__auto___53096 = cljs.core.chunk_first.call(null,seq__52924_53095__$1);
var G__53097 = cljs.core.chunk_rest.call(null,seq__52924_53095__$1);
var G__53098 = c__25562__auto___53096;
var G__53099 = cljs.core.count.call(null,c__25562__auto___53096);
var G__53100 = (0);
seq__52924_53078 = G__53097;
chunk__52925_53079 = G__53098;
count__52926_53080 = G__53099;
i__52927_53081 = G__53100;
continue;
} else {
var vec__52931_53103 = cljs.core.first.call(null,seq__52924_53095__$1);
var col_53104 = cljs.core.nth.call(null,vec__52931_53103,(0),null);
var infos_53105 = cljs.core.nth.call(null,vec__52931_53103,(1),null);
encode_cols.call(null,infos_53105,source_idx_53010,line_53075,col_53104);

var G__53108 = cljs.core.next.call(null,seq__52924_53095__$1);
var G__53109 = null;
var G__53110 = (0);
var G__53111 = (0);
seq__52924_53078 = G__53108;
chunk__52925_53079 = G__53109;
count__52926_53080 = G__53110;
i__52927_53081 = G__53111;
continue;
}
} else {
}
}
break;
}

var G__53112 = cljs.core.next.call(null,seq__52904_53067__$1);
var G__53113 = null;
var G__53114 = (0);
var G__53115 = (0);
seq__52904_53017 = G__53112;
chunk__52905_53018 = G__53113;
count__52906_53019 = G__53114;
i__52907_53020 = G__53115;
continue;
}
} else {
}
}
break;
}

var G__53116 = seq__52894_53004;
var G__53117 = chunk__52895_53005;
var G__53118 = count__52896_53006;
var G__53119 = (i__52897_53007 + (1));
seq__52894_53004 = G__53116;
chunk__52895_53005 = G__53117;
count__52896_53006 = G__53118;
i__52897_53007 = G__53119;
continue;
} else {
var temp__4657__auto___53120 = cljs.core.seq.call(null,seq__52894_53004);
if(temp__4657__auto___53120){
var seq__52894_53121__$1 = temp__4657__auto___53120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52894_53121__$1)){
var c__25562__auto___53124 = cljs.core.chunk_first.call(null,seq__52894_53121__$1);
var G__53125 = cljs.core.chunk_rest.call(null,seq__52894_53121__$1);
var G__53126 = c__25562__auto___53124;
var G__53127 = cljs.core.count.call(null,c__25562__auto___53124);
var G__53128 = (0);
seq__52894_53004 = G__53125;
chunk__52895_53005 = G__53126;
count__52896_53006 = G__53127;
i__52897_53007 = G__53128;
continue;
} else {
var vec__52934_53130 = cljs.core.first.call(null,seq__52894_53121__$1);
var source_idx_53131 = cljs.core.nth.call(null,vec__52934_53130,(0),null);
var vec__52937_53132 = cljs.core.nth.call(null,vec__52934_53130,(1),null);
var __53133 = cljs.core.nth.call(null,vec__52937_53132,(0),null);
var lines_53134__$1 = cljs.core.nth.call(null,vec__52937_53132,(1),null);
var seq__52940_53136 = cljs.core.seq.call(null,lines_53134__$1);
var chunk__52941_53137 = null;
var count__52942_53138 = (0);
var i__52943_53139 = (0);
while(true){
if((i__52943_53139 < count__52942_53138)){
var vec__52944_53140 = cljs.core._nth.call(null,chunk__52941_53137,i__52943_53139);
var line_53141 = cljs.core.nth.call(null,vec__52944_53140,(0),null);
var cols_53142 = cljs.core.nth.call(null,vec__52944_53140,(1),null);
var seq__52947_53143 = cljs.core.seq.call(null,cols_53142);
var chunk__52948_53144 = null;
var count__52949_53145 = (0);
var i__52950_53146 = (0);
while(true){
if((i__52950_53146 < count__52949_53145)){
var vec__52951_53147 = cljs.core._nth.call(null,chunk__52948_53144,i__52950_53146);
var col_53148 = cljs.core.nth.call(null,vec__52951_53147,(0),null);
var infos_53149 = cljs.core.nth.call(null,vec__52951_53147,(1),null);
encode_cols.call(null,infos_53149,source_idx_53131,line_53141,col_53148);

var G__53150 = seq__52947_53143;
var G__53151 = chunk__52948_53144;
var G__53152 = count__52949_53145;
var G__53153 = (i__52950_53146 + (1));
seq__52947_53143 = G__53150;
chunk__52948_53144 = G__53151;
count__52949_53145 = G__53152;
i__52950_53146 = G__53153;
continue;
} else {
var temp__4657__auto___53154__$1 = cljs.core.seq.call(null,seq__52947_53143);
if(temp__4657__auto___53154__$1){
var seq__52947_53155__$1 = temp__4657__auto___53154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52947_53155__$1)){
var c__25562__auto___53156 = cljs.core.chunk_first.call(null,seq__52947_53155__$1);
var G__53157 = cljs.core.chunk_rest.call(null,seq__52947_53155__$1);
var G__53158 = c__25562__auto___53156;
var G__53159 = cljs.core.count.call(null,c__25562__auto___53156);
var G__53160 = (0);
seq__52947_53143 = G__53157;
chunk__52948_53144 = G__53158;
count__52949_53145 = G__53159;
i__52950_53146 = G__53160;
continue;
} else {
var vec__52954_53161 = cljs.core.first.call(null,seq__52947_53155__$1);
var col_53162 = cljs.core.nth.call(null,vec__52954_53161,(0),null);
var infos_53163 = cljs.core.nth.call(null,vec__52954_53161,(1),null);
encode_cols.call(null,infos_53163,source_idx_53131,line_53141,col_53162);

var G__53164 = cljs.core.next.call(null,seq__52947_53155__$1);
var G__53165 = null;
var G__53166 = (0);
var G__53167 = (0);
seq__52947_53143 = G__53164;
chunk__52948_53144 = G__53165;
count__52949_53145 = G__53166;
i__52950_53146 = G__53167;
continue;
}
} else {
}
}
break;
}

var G__53168 = seq__52940_53136;
var G__53169 = chunk__52941_53137;
var G__53170 = count__52942_53138;
var G__53171 = (i__52943_53139 + (1));
seq__52940_53136 = G__53168;
chunk__52941_53137 = G__53169;
count__52942_53138 = G__53170;
i__52943_53139 = G__53171;
continue;
} else {
var temp__4657__auto___53172__$1 = cljs.core.seq.call(null,seq__52940_53136);
if(temp__4657__auto___53172__$1){
var seq__52940_53173__$1 = temp__4657__auto___53172__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52940_53173__$1)){
var c__25562__auto___53174 = cljs.core.chunk_first.call(null,seq__52940_53173__$1);
var G__53175 = cljs.core.chunk_rest.call(null,seq__52940_53173__$1);
var G__53176 = c__25562__auto___53174;
var G__53177 = cljs.core.count.call(null,c__25562__auto___53174);
var G__53178 = (0);
seq__52940_53136 = G__53175;
chunk__52941_53137 = G__53176;
count__52942_53138 = G__53177;
i__52943_53139 = G__53178;
continue;
} else {
var vec__52957_53179 = cljs.core.first.call(null,seq__52940_53173__$1);
var line_53180 = cljs.core.nth.call(null,vec__52957_53179,(0),null);
var cols_53181 = cljs.core.nth.call(null,vec__52957_53179,(1),null);
var seq__52960_53182 = cljs.core.seq.call(null,cols_53181);
var chunk__52961_53183 = null;
var count__52962_53184 = (0);
var i__52963_53185 = (0);
while(true){
if((i__52963_53185 < count__52962_53184)){
var vec__52964_53186 = cljs.core._nth.call(null,chunk__52961_53183,i__52963_53185);
var col_53187 = cljs.core.nth.call(null,vec__52964_53186,(0),null);
var infos_53188 = cljs.core.nth.call(null,vec__52964_53186,(1),null);
encode_cols.call(null,infos_53188,source_idx_53131,line_53180,col_53187);

var G__53189 = seq__52960_53182;
var G__53190 = chunk__52961_53183;
var G__53191 = count__52962_53184;
var G__53192 = (i__52963_53185 + (1));
seq__52960_53182 = G__53189;
chunk__52961_53183 = G__53190;
count__52962_53184 = G__53191;
i__52963_53185 = G__53192;
continue;
} else {
var temp__4657__auto___53193__$2 = cljs.core.seq.call(null,seq__52960_53182);
if(temp__4657__auto___53193__$2){
var seq__52960_53194__$1 = temp__4657__auto___53193__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52960_53194__$1)){
var c__25562__auto___53195 = cljs.core.chunk_first.call(null,seq__52960_53194__$1);
var G__53196 = cljs.core.chunk_rest.call(null,seq__52960_53194__$1);
var G__53197 = c__25562__auto___53195;
var G__53198 = cljs.core.count.call(null,c__25562__auto___53195);
var G__53199 = (0);
seq__52960_53182 = G__53196;
chunk__52961_53183 = G__53197;
count__52962_53184 = G__53198;
i__52963_53185 = G__53199;
continue;
} else {
var vec__52967_53200 = cljs.core.first.call(null,seq__52960_53194__$1);
var col_53201 = cljs.core.nth.call(null,vec__52967_53200,(0),null);
var infos_53202 = cljs.core.nth.call(null,vec__52967_53200,(1),null);
encode_cols.call(null,infos_53202,source_idx_53131,line_53180,col_53201);

var G__53203 = cljs.core.next.call(null,seq__52960_53194__$1);
var G__53204 = null;
var G__53205 = (0);
var G__53206 = (0);
seq__52960_53182 = G__53203;
chunk__52961_53183 = G__53204;
count__52962_53184 = G__53205;
i__52963_53185 = G__53206;
continue;
}
} else {
}
}
break;
}

var G__53207 = cljs.core.next.call(null,seq__52940_53173__$1);
var G__53208 = null;
var G__53209 = (0);
var G__53210 = (0);
seq__52940_53136 = G__53207;
chunk__52941_53137 = G__53208;
count__52942_53138 = G__53209;
i__52943_53139 = G__53210;
continue;
}
} else {
}
}
break;
}

var G__53211 = cljs.core.next.call(null,seq__52894_53121__$1);
var G__53212 = null;
var G__53213 = (0);
var G__53214 = (0);
seq__52894_53004 = G__53211;
chunk__52895_53005 = G__53212;
count__52896_53006 = G__53213;
i__52897_53007 = G__53214;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__52970 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__52805_SHARP_){
return [cljs.core.str(p1__52805_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__52806_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__52806_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__52807_SHARP_){
return clojure.string.join.call(null,",",p1__52807_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__52971 = G__52970;
goog.object.set(G__52971,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__52971;
} else {
return G__52970;
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
var vec__53224 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__53224,(0),null);
var col_map = cljs.core.nth.call(null,vec__53224,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__53227 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__53227,(0),null);
var infos = cljs.core.nth.call(null,vec__53227,(1),null);
var G__53233 = cljs.core.next.call(null,col_map_seq);
var G__53234 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__53227,col,infos,vec__53224,line,col_map){
return (function (v,p__53230){
var map__53231 = p__53230;
var map__53231__$1 = ((((!((map__53231 == null)))?((((map__53231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53231):map__53231);
var gline = cljs.core.get.call(null,map__53231__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__53231__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__53227,col,infos,vec__53224,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__53233;
new_cols = G__53234;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__53235 = cljs.core.next.call(null,line_map_seq);
var G__53236 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__53235;
new_lines = G__53236;
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
var seq__53344_53419 = cljs.core.seq.call(null,reverse_map);
var chunk__53345_53420 = null;
var count__53346_53421 = (0);
var i__53347_53422 = (0);
while(true){
if((i__53347_53422 < count__53346_53421)){
var vec__53348_53423 = cljs.core._nth.call(null,chunk__53345_53420,i__53347_53422);
var line_53424 = cljs.core.nth.call(null,vec__53348_53423,(0),null);
var columns_53425 = cljs.core.nth.call(null,vec__53348_53423,(1),null);
var seq__53351_53426 = cljs.core.seq.call(null,columns_53425);
var chunk__53352_53427 = null;
var count__53353_53428 = (0);
var i__53354_53429 = (0);
while(true){
if((i__53354_53429 < count__53353_53428)){
var vec__53355_53430 = cljs.core._nth.call(null,chunk__53352_53427,i__53354_53429);
var column_53431 = cljs.core.nth.call(null,vec__53355_53430,(0),null);
var column_info_53432 = cljs.core.nth.call(null,vec__53355_53430,(1),null);
var seq__53368_53433 = cljs.core.seq.call(null,column_info_53432);
var chunk__53369_53434 = null;
var count__53370_53435 = (0);
var i__53371_53436 = (0);
while(true){
if((i__53371_53436 < count__53370_53435)){
var map__53372_53437 = cljs.core._nth.call(null,chunk__53369_53434,i__53371_53436);
var map__53372_53438__$1 = ((((!((map__53372_53437 == null)))?((((map__53372_53437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53372_53437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53372_53437):map__53372_53437);
var gline_53439 = cljs.core.get.call(null,map__53372_53438__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53440 = cljs.core.get.call(null,map__53372_53438__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53441 = cljs.core.get.call(null,map__53372_53438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53439], null),cljs.core.fnil.call(null,((function (seq__53368_53433,chunk__53369_53434,count__53370_53435,i__53371_53436,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53372_53437,map__53372_53438__$1,gline_53439,gcol_53440,name_53441,vec__53355_53430,column_53431,column_info_53432,vec__53348_53423,line_53424,columns_53425,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53440], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53424,new cljs.core.Keyword(null,"col","col",-1959363084),column_53431,new cljs.core.Keyword(null,"name","name",1843675177),name_53441], null));
});})(seq__53368_53433,chunk__53369_53434,count__53370_53435,i__53371_53436,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53372_53437,map__53372_53438__$1,gline_53439,gcol_53440,name_53441,vec__53355_53430,column_53431,column_info_53432,vec__53348_53423,line_53424,columns_53425,inverted))
,cljs.core.sorted_map.call(null)));

var G__53442 = seq__53368_53433;
var G__53443 = chunk__53369_53434;
var G__53444 = count__53370_53435;
var G__53445 = (i__53371_53436 + (1));
seq__53368_53433 = G__53442;
chunk__53369_53434 = G__53443;
count__53370_53435 = G__53444;
i__53371_53436 = G__53445;
continue;
} else {
var temp__4657__auto___53446 = cljs.core.seq.call(null,seq__53368_53433);
if(temp__4657__auto___53446){
var seq__53368_53447__$1 = temp__4657__auto___53446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53368_53447__$1)){
var c__25562__auto___53448 = cljs.core.chunk_first.call(null,seq__53368_53447__$1);
var G__53449 = cljs.core.chunk_rest.call(null,seq__53368_53447__$1);
var G__53450 = c__25562__auto___53448;
var G__53451 = cljs.core.count.call(null,c__25562__auto___53448);
var G__53452 = (0);
seq__53368_53433 = G__53449;
chunk__53369_53434 = G__53450;
count__53370_53435 = G__53451;
i__53371_53436 = G__53452;
continue;
} else {
var map__53376_53453 = cljs.core.first.call(null,seq__53368_53447__$1);
var map__53376_53454__$1 = ((((!((map__53376_53453 == null)))?((((map__53376_53453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53376_53453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53376_53453):map__53376_53453);
var gline_53455 = cljs.core.get.call(null,map__53376_53454__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53456 = cljs.core.get.call(null,map__53376_53454__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53457 = cljs.core.get.call(null,map__53376_53454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53455], null),cljs.core.fnil.call(null,((function (seq__53368_53433,chunk__53369_53434,count__53370_53435,i__53371_53436,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53376_53453,map__53376_53454__$1,gline_53455,gcol_53456,name_53457,seq__53368_53447__$1,temp__4657__auto___53446,vec__53355_53430,column_53431,column_info_53432,vec__53348_53423,line_53424,columns_53425,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53456], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53424,new cljs.core.Keyword(null,"col","col",-1959363084),column_53431,new cljs.core.Keyword(null,"name","name",1843675177),name_53457], null));
});})(seq__53368_53433,chunk__53369_53434,count__53370_53435,i__53371_53436,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53376_53453,map__53376_53454__$1,gline_53455,gcol_53456,name_53457,seq__53368_53447__$1,temp__4657__auto___53446,vec__53355_53430,column_53431,column_info_53432,vec__53348_53423,line_53424,columns_53425,inverted))
,cljs.core.sorted_map.call(null)));

var G__53460 = cljs.core.next.call(null,seq__53368_53447__$1);
var G__53461 = null;
var G__53462 = (0);
var G__53463 = (0);
seq__53368_53433 = G__53460;
chunk__53369_53434 = G__53461;
count__53370_53435 = G__53462;
i__53371_53436 = G__53463;
continue;
}
} else {
}
}
break;
}

var G__53465 = seq__53351_53426;
var G__53466 = chunk__53352_53427;
var G__53467 = count__53353_53428;
var G__53468 = (i__53354_53429 + (1));
seq__53351_53426 = G__53465;
chunk__53352_53427 = G__53466;
count__53353_53428 = G__53467;
i__53354_53429 = G__53468;
continue;
} else {
var temp__4657__auto___53470 = cljs.core.seq.call(null,seq__53351_53426);
if(temp__4657__auto___53470){
var seq__53351_53471__$1 = temp__4657__auto___53470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53351_53471__$1)){
var c__25562__auto___53472 = cljs.core.chunk_first.call(null,seq__53351_53471__$1);
var G__53473 = cljs.core.chunk_rest.call(null,seq__53351_53471__$1);
var G__53474 = c__25562__auto___53472;
var G__53475 = cljs.core.count.call(null,c__25562__auto___53472);
var G__53476 = (0);
seq__53351_53426 = G__53473;
chunk__53352_53427 = G__53474;
count__53353_53428 = G__53475;
i__53354_53429 = G__53476;
continue;
} else {
var vec__53379_53478 = cljs.core.first.call(null,seq__53351_53471__$1);
var column_53479 = cljs.core.nth.call(null,vec__53379_53478,(0),null);
var column_info_53480 = cljs.core.nth.call(null,vec__53379_53478,(1),null);
var seq__53382_53481 = cljs.core.seq.call(null,column_info_53480);
var chunk__53383_53482 = null;
var count__53384_53483 = (0);
var i__53385_53484 = (0);
while(true){
if((i__53385_53484 < count__53384_53483)){
var map__53386_53485 = cljs.core._nth.call(null,chunk__53383_53482,i__53385_53484);
var map__53386_53486__$1 = ((((!((map__53386_53485 == null)))?((((map__53386_53485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53386_53485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53386_53485):map__53386_53485);
var gline_53487 = cljs.core.get.call(null,map__53386_53486__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53488 = cljs.core.get.call(null,map__53386_53486__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53489 = cljs.core.get.call(null,map__53386_53486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53487], null),cljs.core.fnil.call(null,((function (seq__53382_53481,chunk__53383_53482,count__53384_53483,i__53385_53484,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53386_53485,map__53386_53486__$1,gline_53487,gcol_53488,name_53489,vec__53379_53478,column_53479,column_info_53480,seq__53351_53471__$1,temp__4657__auto___53470,vec__53348_53423,line_53424,columns_53425,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53488], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53424,new cljs.core.Keyword(null,"col","col",-1959363084),column_53479,new cljs.core.Keyword(null,"name","name",1843675177),name_53489], null));
});})(seq__53382_53481,chunk__53383_53482,count__53384_53483,i__53385_53484,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53386_53485,map__53386_53486__$1,gline_53487,gcol_53488,name_53489,vec__53379_53478,column_53479,column_info_53480,seq__53351_53471__$1,temp__4657__auto___53470,vec__53348_53423,line_53424,columns_53425,inverted))
,cljs.core.sorted_map.call(null)));

var G__53494 = seq__53382_53481;
var G__53495 = chunk__53383_53482;
var G__53496 = count__53384_53483;
var G__53497 = (i__53385_53484 + (1));
seq__53382_53481 = G__53494;
chunk__53383_53482 = G__53495;
count__53384_53483 = G__53496;
i__53385_53484 = G__53497;
continue;
} else {
var temp__4657__auto___53498__$1 = cljs.core.seq.call(null,seq__53382_53481);
if(temp__4657__auto___53498__$1){
var seq__53382_53499__$1 = temp__4657__auto___53498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53382_53499__$1)){
var c__25562__auto___53500 = cljs.core.chunk_first.call(null,seq__53382_53499__$1);
var G__53501 = cljs.core.chunk_rest.call(null,seq__53382_53499__$1);
var G__53502 = c__25562__auto___53500;
var G__53503 = cljs.core.count.call(null,c__25562__auto___53500);
var G__53504 = (0);
seq__53382_53481 = G__53501;
chunk__53383_53482 = G__53502;
count__53384_53483 = G__53503;
i__53385_53484 = G__53504;
continue;
} else {
var map__53388_53505 = cljs.core.first.call(null,seq__53382_53499__$1);
var map__53388_53506__$1 = ((((!((map__53388_53505 == null)))?((((map__53388_53505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53388_53505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53388_53505):map__53388_53505);
var gline_53507 = cljs.core.get.call(null,map__53388_53506__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53508 = cljs.core.get.call(null,map__53388_53506__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53509 = cljs.core.get.call(null,map__53388_53506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53507], null),cljs.core.fnil.call(null,((function (seq__53382_53481,chunk__53383_53482,count__53384_53483,i__53385_53484,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53388_53505,map__53388_53506__$1,gline_53507,gcol_53508,name_53509,seq__53382_53499__$1,temp__4657__auto___53498__$1,vec__53379_53478,column_53479,column_info_53480,seq__53351_53471__$1,temp__4657__auto___53470,vec__53348_53423,line_53424,columns_53425,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53508], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53424,new cljs.core.Keyword(null,"col","col",-1959363084),column_53479,new cljs.core.Keyword(null,"name","name",1843675177),name_53509], null));
});})(seq__53382_53481,chunk__53383_53482,count__53384_53483,i__53385_53484,seq__53351_53426,chunk__53352_53427,count__53353_53428,i__53354_53429,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53388_53505,map__53388_53506__$1,gline_53507,gcol_53508,name_53509,seq__53382_53499__$1,temp__4657__auto___53498__$1,vec__53379_53478,column_53479,column_info_53480,seq__53351_53471__$1,temp__4657__auto___53470,vec__53348_53423,line_53424,columns_53425,inverted))
,cljs.core.sorted_map.call(null)));

var G__53510 = cljs.core.next.call(null,seq__53382_53499__$1);
var G__53511 = null;
var G__53512 = (0);
var G__53513 = (0);
seq__53382_53481 = G__53510;
chunk__53383_53482 = G__53511;
count__53384_53483 = G__53512;
i__53385_53484 = G__53513;
continue;
}
} else {
}
}
break;
}

var G__53514 = cljs.core.next.call(null,seq__53351_53471__$1);
var G__53515 = null;
var G__53516 = (0);
var G__53517 = (0);
seq__53351_53426 = G__53514;
chunk__53352_53427 = G__53515;
count__53353_53428 = G__53516;
i__53354_53429 = G__53517;
continue;
}
} else {
}
}
break;
}

var G__53518 = seq__53344_53419;
var G__53519 = chunk__53345_53420;
var G__53520 = count__53346_53421;
var G__53521 = (i__53347_53422 + (1));
seq__53344_53419 = G__53518;
chunk__53345_53420 = G__53519;
count__53346_53421 = G__53520;
i__53347_53422 = G__53521;
continue;
} else {
var temp__4657__auto___53522 = cljs.core.seq.call(null,seq__53344_53419);
if(temp__4657__auto___53522){
var seq__53344_53523__$1 = temp__4657__auto___53522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53344_53523__$1)){
var c__25562__auto___53524 = cljs.core.chunk_first.call(null,seq__53344_53523__$1);
var G__53525 = cljs.core.chunk_rest.call(null,seq__53344_53523__$1);
var G__53526 = c__25562__auto___53524;
var G__53527 = cljs.core.count.call(null,c__25562__auto___53524);
var G__53528 = (0);
seq__53344_53419 = G__53525;
chunk__53345_53420 = G__53526;
count__53346_53421 = G__53527;
i__53347_53422 = G__53528;
continue;
} else {
var vec__53390_53529 = cljs.core.first.call(null,seq__53344_53523__$1);
var line_53530 = cljs.core.nth.call(null,vec__53390_53529,(0),null);
var columns_53531 = cljs.core.nth.call(null,vec__53390_53529,(1),null);
var seq__53393_53532 = cljs.core.seq.call(null,columns_53531);
var chunk__53394_53533 = null;
var count__53395_53534 = (0);
var i__53396_53535 = (0);
while(true){
if((i__53396_53535 < count__53395_53534)){
var vec__53397_53536 = cljs.core._nth.call(null,chunk__53394_53533,i__53396_53535);
var column_53537 = cljs.core.nth.call(null,vec__53397_53536,(0),null);
var column_info_53538 = cljs.core.nth.call(null,vec__53397_53536,(1),null);
var seq__53400_53549 = cljs.core.seq.call(null,column_info_53538);
var chunk__53401_53550 = null;
var count__53402_53551 = (0);
var i__53403_53552 = (0);
while(true){
if((i__53403_53552 < count__53402_53551)){
var map__53404_53553 = cljs.core._nth.call(null,chunk__53401_53550,i__53403_53552);
var map__53404_53554__$1 = ((((!((map__53404_53553 == null)))?((((map__53404_53553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53404_53553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53404_53553):map__53404_53553);
var gline_53555 = cljs.core.get.call(null,map__53404_53554__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53556 = cljs.core.get.call(null,map__53404_53554__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53557 = cljs.core.get.call(null,map__53404_53554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53555], null),cljs.core.fnil.call(null,((function (seq__53400_53549,chunk__53401_53550,count__53402_53551,i__53403_53552,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53404_53553,map__53404_53554__$1,gline_53555,gcol_53556,name_53557,vec__53397_53536,column_53537,column_info_53538,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53556], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53530,new cljs.core.Keyword(null,"col","col",-1959363084),column_53537,new cljs.core.Keyword(null,"name","name",1843675177),name_53557], null));
});})(seq__53400_53549,chunk__53401_53550,count__53402_53551,i__53403_53552,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53404_53553,map__53404_53554__$1,gline_53555,gcol_53556,name_53557,vec__53397_53536,column_53537,column_info_53538,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted))
,cljs.core.sorted_map.call(null)));

var G__53574 = seq__53400_53549;
var G__53575 = chunk__53401_53550;
var G__53576 = count__53402_53551;
var G__53577 = (i__53403_53552 + (1));
seq__53400_53549 = G__53574;
chunk__53401_53550 = G__53575;
count__53402_53551 = G__53576;
i__53403_53552 = G__53577;
continue;
} else {
var temp__4657__auto___53578__$1 = cljs.core.seq.call(null,seq__53400_53549);
if(temp__4657__auto___53578__$1){
var seq__53400_53581__$1 = temp__4657__auto___53578__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53400_53581__$1)){
var c__25562__auto___53582 = cljs.core.chunk_first.call(null,seq__53400_53581__$1);
var G__53583 = cljs.core.chunk_rest.call(null,seq__53400_53581__$1);
var G__53584 = c__25562__auto___53582;
var G__53585 = cljs.core.count.call(null,c__25562__auto___53582);
var G__53586 = (0);
seq__53400_53549 = G__53583;
chunk__53401_53550 = G__53584;
count__53402_53551 = G__53585;
i__53403_53552 = G__53586;
continue;
} else {
var map__53406_53587 = cljs.core.first.call(null,seq__53400_53581__$1);
var map__53406_53588__$1 = ((((!((map__53406_53587 == null)))?((((map__53406_53587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53406_53587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53406_53587):map__53406_53587);
var gline_53589 = cljs.core.get.call(null,map__53406_53588__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53590 = cljs.core.get.call(null,map__53406_53588__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53591 = cljs.core.get.call(null,map__53406_53588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53589], null),cljs.core.fnil.call(null,((function (seq__53400_53549,chunk__53401_53550,count__53402_53551,i__53403_53552,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53406_53587,map__53406_53588__$1,gline_53589,gcol_53590,name_53591,seq__53400_53581__$1,temp__4657__auto___53578__$1,vec__53397_53536,column_53537,column_info_53538,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53590], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53530,new cljs.core.Keyword(null,"col","col",-1959363084),column_53537,new cljs.core.Keyword(null,"name","name",1843675177),name_53591], null));
});})(seq__53400_53549,chunk__53401_53550,count__53402_53551,i__53403_53552,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53406_53587,map__53406_53588__$1,gline_53589,gcol_53590,name_53591,seq__53400_53581__$1,temp__4657__auto___53578__$1,vec__53397_53536,column_53537,column_info_53538,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted))
,cljs.core.sorted_map.call(null)));

var G__53592 = cljs.core.next.call(null,seq__53400_53581__$1);
var G__53593 = null;
var G__53594 = (0);
var G__53595 = (0);
seq__53400_53549 = G__53592;
chunk__53401_53550 = G__53593;
count__53402_53551 = G__53594;
i__53403_53552 = G__53595;
continue;
}
} else {
}
}
break;
}

var G__53596 = seq__53393_53532;
var G__53597 = chunk__53394_53533;
var G__53598 = count__53395_53534;
var G__53599 = (i__53396_53535 + (1));
seq__53393_53532 = G__53596;
chunk__53394_53533 = G__53597;
count__53395_53534 = G__53598;
i__53396_53535 = G__53599;
continue;
} else {
var temp__4657__auto___53600__$1 = cljs.core.seq.call(null,seq__53393_53532);
if(temp__4657__auto___53600__$1){
var seq__53393_53601__$1 = temp__4657__auto___53600__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53393_53601__$1)){
var c__25562__auto___53602 = cljs.core.chunk_first.call(null,seq__53393_53601__$1);
var G__53603 = cljs.core.chunk_rest.call(null,seq__53393_53601__$1);
var G__53604 = c__25562__auto___53602;
var G__53605 = cljs.core.count.call(null,c__25562__auto___53602);
var G__53606 = (0);
seq__53393_53532 = G__53603;
chunk__53394_53533 = G__53604;
count__53395_53534 = G__53605;
i__53396_53535 = G__53606;
continue;
} else {
var vec__53408_53607 = cljs.core.first.call(null,seq__53393_53601__$1);
var column_53608 = cljs.core.nth.call(null,vec__53408_53607,(0),null);
var column_info_53609 = cljs.core.nth.call(null,vec__53408_53607,(1),null);
var seq__53411_53610 = cljs.core.seq.call(null,column_info_53609);
var chunk__53412_53611 = null;
var count__53413_53612 = (0);
var i__53414_53613 = (0);
while(true){
if((i__53414_53613 < count__53413_53612)){
var map__53415_53614 = cljs.core._nth.call(null,chunk__53412_53611,i__53414_53613);
var map__53415_53615__$1 = ((((!((map__53415_53614 == null)))?((((map__53415_53614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53415_53614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53415_53614):map__53415_53614);
var gline_53616 = cljs.core.get.call(null,map__53415_53615__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53617 = cljs.core.get.call(null,map__53415_53615__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53618 = cljs.core.get.call(null,map__53415_53615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53616], null),cljs.core.fnil.call(null,((function (seq__53411_53610,chunk__53412_53611,count__53413_53612,i__53414_53613,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53415_53614,map__53415_53615__$1,gline_53616,gcol_53617,name_53618,vec__53408_53607,column_53608,column_info_53609,seq__53393_53601__$1,temp__4657__auto___53600__$1,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53617], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53530,new cljs.core.Keyword(null,"col","col",-1959363084),column_53608,new cljs.core.Keyword(null,"name","name",1843675177),name_53618], null));
});})(seq__53411_53610,chunk__53412_53611,count__53413_53612,i__53414_53613,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53415_53614,map__53415_53615__$1,gline_53616,gcol_53617,name_53618,vec__53408_53607,column_53608,column_info_53609,seq__53393_53601__$1,temp__4657__auto___53600__$1,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted))
,cljs.core.sorted_map.call(null)));

var G__53619 = seq__53411_53610;
var G__53620 = chunk__53412_53611;
var G__53621 = count__53413_53612;
var G__53622 = (i__53414_53613 + (1));
seq__53411_53610 = G__53619;
chunk__53412_53611 = G__53620;
count__53413_53612 = G__53621;
i__53414_53613 = G__53622;
continue;
} else {
var temp__4657__auto___53623__$2 = cljs.core.seq.call(null,seq__53411_53610);
if(temp__4657__auto___53623__$2){
var seq__53411_53624__$1 = temp__4657__auto___53623__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53411_53624__$1)){
var c__25562__auto___53625 = cljs.core.chunk_first.call(null,seq__53411_53624__$1);
var G__53626 = cljs.core.chunk_rest.call(null,seq__53411_53624__$1);
var G__53627 = c__25562__auto___53625;
var G__53628 = cljs.core.count.call(null,c__25562__auto___53625);
var G__53629 = (0);
seq__53411_53610 = G__53626;
chunk__53412_53611 = G__53627;
count__53413_53612 = G__53628;
i__53414_53613 = G__53629;
continue;
} else {
var map__53417_53630 = cljs.core.first.call(null,seq__53411_53624__$1);
var map__53417_53631__$1 = ((((!((map__53417_53630 == null)))?((((map__53417_53630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53417_53630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53417_53630):map__53417_53630);
var gline_53632 = cljs.core.get.call(null,map__53417_53631__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_53633 = cljs.core.get.call(null,map__53417_53631__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_53634 = cljs.core.get.call(null,map__53417_53631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_53632], null),cljs.core.fnil.call(null,((function (seq__53411_53610,chunk__53412_53611,count__53413_53612,i__53414_53613,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53417_53630,map__53417_53631__$1,gline_53632,gcol_53633,name_53634,seq__53411_53624__$1,temp__4657__auto___53623__$2,vec__53408_53607,column_53608,column_info_53609,seq__53393_53601__$1,temp__4657__auto___53600__$1,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_53633], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_53530,new cljs.core.Keyword(null,"col","col",-1959363084),column_53608,new cljs.core.Keyword(null,"name","name",1843675177),name_53634], null));
});})(seq__53411_53610,chunk__53412_53611,count__53413_53612,i__53414_53613,seq__53393_53532,chunk__53394_53533,count__53395_53534,i__53396_53535,seq__53344_53419,chunk__53345_53420,count__53346_53421,i__53347_53422,map__53417_53630,map__53417_53631__$1,gline_53632,gcol_53633,name_53634,seq__53411_53624__$1,temp__4657__auto___53623__$2,vec__53408_53607,column_53608,column_info_53609,seq__53393_53601__$1,temp__4657__auto___53600__$1,vec__53390_53529,line_53530,columns_53531,seq__53344_53523__$1,temp__4657__auto___53522,inverted))
,cljs.core.sorted_map.call(null)));

var G__53637 = cljs.core.next.call(null,seq__53411_53624__$1);
var G__53638 = null;
var G__53639 = (0);
var G__53640 = (0);
seq__53411_53610 = G__53637;
chunk__53412_53611 = G__53638;
count__53413_53612 = G__53639;
i__53414_53613 = G__53640;
continue;
}
} else {
}
}
break;
}

var G__53641 = cljs.core.next.call(null,seq__53393_53601__$1);
var G__53642 = null;
var G__53643 = (0);
var G__53644 = (0);
seq__53393_53532 = G__53641;
chunk__53394_53533 = G__53642;
count__53395_53534 = G__53643;
i__53396_53535 = G__53644;
continue;
}
} else {
}
}
break;
}

var G__53645 = cljs.core.next.call(null,seq__53344_53523__$1);
var G__53646 = null;
var G__53647 = (0);
var G__53648 = (0);
seq__53344_53419 = G__53645;
chunk__53345_53420 = G__53646;
count__53346_53421 = G__53647;
i__53347_53422 = G__53648;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1478399618504