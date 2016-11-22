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
return cljs.core.reduce.call(null,(function (m,p__60166){
var vec__60167 = p__60166;
var i = cljs.core.nth.call(null,vec__60167,(0),null);
var v = cljs.core.nth.call(null,vec__60167,(1),null);
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
var vec__60173 = seg;
var gcol = cljs.core.nth.call(null,vec__60173,(0),null);
var source = cljs.core.nth.call(null,vec__60173,(1),null);
var line = cljs.core.nth.call(null,vec__60173,(2),null);
var col = cljs.core.nth.call(null,vec__60173,(3),null);
var name = cljs.core.nth.call(null,vec__60173,(4),null);
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
var vec__60182 = seg;
var gcol = cljs.core.nth.call(null,vec__60182,(0),null);
var source = cljs.core.nth.call(null,vec__60182,(1),null);
var line = cljs.core.nth.call(null,vec__60182,(2),null);
var col = cljs.core.nth.call(null,vec__60182,(3),null);
var name = cljs.core.nth.call(null,vec__60182,(4),null);
var vec__60185 = relseg;
var rgcol = cljs.core.nth.call(null,vec__60185,(0),null);
var rsource = cljs.core.nth.call(null,vec__60185,(1),null);
var rline = cljs.core.nth.call(null,vec__60185,(2),null);
var rcol = cljs.core.nth.call(null,vec__60185,(3),null);
var rname = cljs.core.nth.call(null,vec__60185,(4),null);
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
var map__60190 = segmap;
var map__60190__$1 = ((((!((map__60190 == null)))?((((map__60190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60190):map__60190);
var gcol = cljs.core.get.call(null,map__60190__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__60190__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__60190__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__60190__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__60190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__60190,map__60190__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__60190,map__60190__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__60190,map__60190__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__60190,map__60190__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__60190,map__60190__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__60190,map__60190__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args60192 = [];
var len__7651__auto___60198 = arguments.length;
var i__7652__auto___60199 = (0);
while(true){
if((i__7652__auto___60199 < len__7651__auto___60198)){
args60192.push((arguments[i__7652__auto___60199]));

var G__60200 = (i__7652__auto___60199 + (1));
i__7652__auto___60199 = G__60200;
continue;
} else {
}
break;
}

var G__60194 = args60192.length;
switch (G__60194) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60192.length)].join('')));

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
var vec__60195 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__60202 = cljs.core.next.call(null,segs__$1);
var G__60203 = nrelseg;
var G__60204 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__60202;
relseg__$1 = G__60203;
result__$1 = G__60204;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__60195,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__60195,(1),null);
var G__60205 = (gline + (1));
var G__60206 = cljs.core.next.call(null,lines__$1);
var G__60207 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__60208 = result__$1;
gline = G__60205;
lines__$1 = G__60206;
relseg = G__60207;
result = G__60208;
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
var map__60212 = segmap;
var map__60212__$1 = ((((!((map__60212 == null)))?((((map__60212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60212):map__60212);
var gcol = cljs.core.get.call(null,map__60212__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__60212__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__60212__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__60212__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__60212__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__60212,map__60212__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__60212,map__60212__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__60209_SHARP_){
return cljs.core.conj.call(null,p1__60209_SHARP_,d__$1);
});})(map__60212,map__60212__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__60212,map__60212__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args60214 = [];
var len__7651__auto___60220 = arguments.length;
var i__7652__auto___60221 = (0);
while(true){
if((i__7652__auto___60221 < len__7651__auto___60220)){
args60214.push((arguments[i__7652__auto___60221]));

var G__60222 = (i__7652__auto___60221 + (1));
i__7652__auto___60221 = G__60222;
continue;
} else {
}
break;
}

var G__60216 = args60214.length;
switch (G__60216) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60214.length)].join('')));

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
var vec__60217 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__60224 = cljs.core.next.call(null,segs__$1);
var G__60225 = nrelseg;
var G__60226 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__60224;
relseg__$1 = G__60225;
result__$1 = G__60226;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__60217,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__60217,(1),null);
var G__60227 = (gline + (1));
var G__60228 = cljs.core.next.call(null,lines__$1);
var G__60229 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__60230 = result__$1;
gline = G__60227;
lines__$1 = G__60228;
relseg = G__60229;
result = G__60230;
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
return (function (p__60243){
var vec__60244 = p__60243;
var _ = cljs.core.nth.call(null,vec__60244,(0),null);
var source = cljs.core.nth.call(null,vec__60244,(1),null);
var line = cljs.core.nth.call(null,vec__60244,(2),null);
var col = cljs.core.nth.call(null,vec__60244,(3),null);
var name = cljs.core.nth.call(null,vec__60244,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__60247){
var vec__60248 = p__60247;
var gcol = cljs.core.nth.call(null,vec__60248,(0),null);
var sidx = cljs.core.nth.call(null,vec__60248,(1),null);
var line = cljs.core.nth.call(null,vec__60248,(2),null);
var col = cljs.core.nth.call(null,vec__60248,(3),null);
var name = cljs.core.nth.call(null,vec__60248,(4),null);
var seg = vec__60248;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__60248,gcol,sidx,line,col,name,seg,relseg){
return (function (p__60251){
var vec__60252 = p__60251;
var _ = cljs.core.nth.call(null,vec__60252,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__60252,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__60252,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__60252,(3),null);
var lname = cljs.core.nth.call(null,vec__60252,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6543__auto__ = name;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__60248,gcol,sidx,line,col,name,seg,relseg))
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
var seq__60340 = cljs.core.seq.call(null,infos);
var chunk__60341 = null;
var count__60342 = (0);
var i__60343 = (0);
while(true){
if((i__60343 < count__60342)){
var info = cljs.core._nth.call(null,chunk__60341,i__60343);
var segv_60422 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_60423 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_60424 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_60423 > (lc_60424 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__60340,chunk__60341,count__60342,i__60343,segv_60422,gline_60423,lc_60424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_60423 - (lc_60424 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_60422], null));
});})(seq__60340,chunk__60341,count__60342,i__60343,segv_60422,gline_60423,lc_60424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__60340,chunk__60341,count__60342,i__60343,segv_60422,gline_60423,lc_60424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60423], null),cljs.core.conj,segv_60422);
});})(seq__60340,chunk__60341,count__60342,i__60343,segv_60422,gline_60423,lc_60424,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__60425 = seq__60340;
var G__60426 = chunk__60341;
var G__60427 = count__60342;
var G__60428 = (i__60343 + (1));
seq__60340 = G__60425;
chunk__60341 = G__60426;
count__60342 = G__60427;
i__60343 = G__60428;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60340);
if(temp__4657__auto__){
var seq__60340__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60340__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__60340__$1);
var G__60429 = cljs.core.chunk_rest.call(null,seq__60340__$1);
var G__60430 = c__7357__auto__;
var G__60431 = cljs.core.count.call(null,c__7357__auto__);
var G__60432 = (0);
seq__60340 = G__60429;
chunk__60341 = G__60430;
count__60342 = G__60431;
i__60343 = G__60432;
continue;
} else {
var info = cljs.core.first.call(null,seq__60340__$1);
var segv_60433 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_60434 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_60435 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_60434 > (lc_60435 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__60340,chunk__60341,count__60342,i__60343,segv_60433,gline_60434,lc_60435,info,seq__60340__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_60434 - (lc_60435 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_60433], null));
});})(seq__60340,chunk__60341,count__60342,i__60343,segv_60433,gline_60434,lc_60435,info,seq__60340__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__60340,chunk__60341,count__60342,i__60343,segv_60433,gline_60434,lc_60435,info,seq__60340__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60434], null),cljs.core.conj,segv_60433);
});})(seq__60340,chunk__60341,count__60342,i__60343,segv_60433,gline_60434,lc_60435,info,seq__60340__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__60436 = cljs.core.next.call(null,seq__60340__$1);
var G__60437 = null;
var G__60438 = (0);
var G__60439 = (0);
seq__60340 = G__60436;
chunk__60341 = G__60437;
count__60342 = G__60438;
i__60343 = G__60439;
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
var seq__60344_60440 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__60345_60441 = null;
var count__60346_60442 = (0);
var i__60347_60443 = (0);
while(true){
if((i__60347_60443 < count__60346_60442)){
var vec__60348_60444 = cljs.core._nth.call(null,chunk__60345_60441,i__60347_60443);
var source_idx_60445 = cljs.core.nth.call(null,vec__60348_60444,(0),null);
var vec__60351_60446 = cljs.core.nth.call(null,vec__60348_60444,(1),null);
var __60447 = cljs.core.nth.call(null,vec__60351_60446,(0),null);
var lines_60448__$1 = cljs.core.nth.call(null,vec__60351_60446,(1),null);
var seq__60354_60449 = cljs.core.seq.call(null,lines_60448__$1);
var chunk__60355_60450 = null;
var count__60356_60451 = (0);
var i__60357_60452 = (0);
while(true){
if((i__60357_60452 < count__60356_60451)){
var vec__60358_60453 = cljs.core._nth.call(null,chunk__60355_60450,i__60357_60452);
var line_60454 = cljs.core.nth.call(null,vec__60358_60453,(0),null);
var cols_60455 = cljs.core.nth.call(null,vec__60358_60453,(1),null);
var seq__60361_60456 = cljs.core.seq.call(null,cols_60455);
var chunk__60362_60457 = null;
var count__60363_60458 = (0);
var i__60364_60459 = (0);
while(true){
if((i__60364_60459 < count__60363_60458)){
var vec__60365_60460 = cljs.core._nth.call(null,chunk__60362_60457,i__60364_60459);
var col_60461 = cljs.core.nth.call(null,vec__60365_60460,(0),null);
var infos_60462 = cljs.core.nth.call(null,vec__60365_60460,(1),null);
encode_cols.call(null,infos_60462,source_idx_60445,line_60454,col_60461);

var G__60463 = seq__60361_60456;
var G__60464 = chunk__60362_60457;
var G__60465 = count__60363_60458;
var G__60466 = (i__60364_60459 + (1));
seq__60361_60456 = G__60463;
chunk__60362_60457 = G__60464;
count__60363_60458 = G__60465;
i__60364_60459 = G__60466;
continue;
} else {
var temp__4657__auto___60467 = cljs.core.seq.call(null,seq__60361_60456);
if(temp__4657__auto___60467){
var seq__60361_60468__$1 = temp__4657__auto___60467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60361_60468__$1)){
var c__7357__auto___60469 = cljs.core.chunk_first.call(null,seq__60361_60468__$1);
var G__60470 = cljs.core.chunk_rest.call(null,seq__60361_60468__$1);
var G__60471 = c__7357__auto___60469;
var G__60472 = cljs.core.count.call(null,c__7357__auto___60469);
var G__60473 = (0);
seq__60361_60456 = G__60470;
chunk__60362_60457 = G__60471;
count__60363_60458 = G__60472;
i__60364_60459 = G__60473;
continue;
} else {
var vec__60368_60474 = cljs.core.first.call(null,seq__60361_60468__$1);
var col_60475 = cljs.core.nth.call(null,vec__60368_60474,(0),null);
var infos_60476 = cljs.core.nth.call(null,vec__60368_60474,(1),null);
encode_cols.call(null,infos_60476,source_idx_60445,line_60454,col_60475);

var G__60477 = cljs.core.next.call(null,seq__60361_60468__$1);
var G__60478 = null;
var G__60479 = (0);
var G__60480 = (0);
seq__60361_60456 = G__60477;
chunk__60362_60457 = G__60478;
count__60363_60458 = G__60479;
i__60364_60459 = G__60480;
continue;
}
} else {
}
}
break;
}

var G__60481 = seq__60354_60449;
var G__60482 = chunk__60355_60450;
var G__60483 = count__60356_60451;
var G__60484 = (i__60357_60452 + (1));
seq__60354_60449 = G__60481;
chunk__60355_60450 = G__60482;
count__60356_60451 = G__60483;
i__60357_60452 = G__60484;
continue;
} else {
var temp__4657__auto___60485 = cljs.core.seq.call(null,seq__60354_60449);
if(temp__4657__auto___60485){
var seq__60354_60486__$1 = temp__4657__auto___60485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60354_60486__$1)){
var c__7357__auto___60487 = cljs.core.chunk_first.call(null,seq__60354_60486__$1);
var G__60488 = cljs.core.chunk_rest.call(null,seq__60354_60486__$1);
var G__60489 = c__7357__auto___60487;
var G__60490 = cljs.core.count.call(null,c__7357__auto___60487);
var G__60491 = (0);
seq__60354_60449 = G__60488;
chunk__60355_60450 = G__60489;
count__60356_60451 = G__60490;
i__60357_60452 = G__60491;
continue;
} else {
var vec__60371_60492 = cljs.core.first.call(null,seq__60354_60486__$1);
var line_60493 = cljs.core.nth.call(null,vec__60371_60492,(0),null);
var cols_60494 = cljs.core.nth.call(null,vec__60371_60492,(1),null);
var seq__60374_60495 = cljs.core.seq.call(null,cols_60494);
var chunk__60375_60496 = null;
var count__60376_60497 = (0);
var i__60377_60498 = (0);
while(true){
if((i__60377_60498 < count__60376_60497)){
var vec__60378_60499 = cljs.core._nth.call(null,chunk__60375_60496,i__60377_60498);
var col_60500 = cljs.core.nth.call(null,vec__60378_60499,(0),null);
var infos_60501 = cljs.core.nth.call(null,vec__60378_60499,(1),null);
encode_cols.call(null,infos_60501,source_idx_60445,line_60493,col_60500);

var G__60502 = seq__60374_60495;
var G__60503 = chunk__60375_60496;
var G__60504 = count__60376_60497;
var G__60505 = (i__60377_60498 + (1));
seq__60374_60495 = G__60502;
chunk__60375_60496 = G__60503;
count__60376_60497 = G__60504;
i__60377_60498 = G__60505;
continue;
} else {
var temp__4657__auto___60506__$1 = cljs.core.seq.call(null,seq__60374_60495);
if(temp__4657__auto___60506__$1){
var seq__60374_60507__$1 = temp__4657__auto___60506__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60374_60507__$1)){
var c__7357__auto___60508 = cljs.core.chunk_first.call(null,seq__60374_60507__$1);
var G__60509 = cljs.core.chunk_rest.call(null,seq__60374_60507__$1);
var G__60510 = c__7357__auto___60508;
var G__60511 = cljs.core.count.call(null,c__7357__auto___60508);
var G__60512 = (0);
seq__60374_60495 = G__60509;
chunk__60375_60496 = G__60510;
count__60376_60497 = G__60511;
i__60377_60498 = G__60512;
continue;
} else {
var vec__60381_60513 = cljs.core.first.call(null,seq__60374_60507__$1);
var col_60514 = cljs.core.nth.call(null,vec__60381_60513,(0),null);
var infos_60515 = cljs.core.nth.call(null,vec__60381_60513,(1),null);
encode_cols.call(null,infos_60515,source_idx_60445,line_60493,col_60514);

var G__60516 = cljs.core.next.call(null,seq__60374_60507__$1);
var G__60517 = null;
var G__60518 = (0);
var G__60519 = (0);
seq__60374_60495 = G__60516;
chunk__60375_60496 = G__60517;
count__60376_60497 = G__60518;
i__60377_60498 = G__60519;
continue;
}
} else {
}
}
break;
}

var G__60520 = cljs.core.next.call(null,seq__60354_60486__$1);
var G__60521 = null;
var G__60522 = (0);
var G__60523 = (0);
seq__60354_60449 = G__60520;
chunk__60355_60450 = G__60521;
count__60356_60451 = G__60522;
i__60357_60452 = G__60523;
continue;
}
} else {
}
}
break;
}

var G__60524 = seq__60344_60440;
var G__60525 = chunk__60345_60441;
var G__60526 = count__60346_60442;
var G__60527 = (i__60347_60443 + (1));
seq__60344_60440 = G__60524;
chunk__60345_60441 = G__60525;
count__60346_60442 = G__60526;
i__60347_60443 = G__60527;
continue;
} else {
var temp__4657__auto___60528 = cljs.core.seq.call(null,seq__60344_60440);
if(temp__4657__auto___60528){
var seq__60344_60529__$1 = temp__4657__auto___60528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60344_60529__$1)){
var c__7357__auto___60530 = cljs.core.chunk_first.call(null,seq__60344_60529__$1);
var G__60531 = cljs.core.chunk_rest.call(null,seq__60344_60529__$1);
var G__60532 = c__7357__auto___60530;
var G__60533 = cljs.core.count.call(null,c__7357__auto___60530);
var G__60534 = (0);
seq__60344_60440 = G__60531;
chunk__60345_60441 = G__60532;
count__60346_60442 = G__60533;
i__60347_60443 = G__60534;
continue;
} else {
var vec__60384_60535 = cljs.core.first.call(null,seq__60344_60529__$1);
var source_idx_60536 = cljs.core.nth.call(null,vec__60384_60535,(0),null);
var vec__60387_60537 = cljs.core.nth.call(null,vec__60384_60535,(1),null);
var __60538 = cljs.core.nth.call(null,vec__60387_60537,(0),null);
var lines_60539__$1 = cljs.core.nth.call(null,vec__60387_60537,(1),null);
var seq__60390_60540 = cljs.core.seq.call(null,lines_60539__$1);
var chunk__60391_60541 = null;
var count__60392_60542 = (0);
var i__60393_60543 = (0);
while(true){
if((i__60393_60543 < count__60392_60542)){
var vec__60394_60544 = cljs.core._nth.call(null,chunk__60391_60541,i__60393_60543);
var line_60545 = cljs.core.nth.call(null,vec__60394_60544,(0),null);
var cols_60546 = cljs.core.nth.call(null,vec__60394_60544,(1),null);
var seq__60397_60547 = cljs.core.seq.call(null,cols_60546);
var chunk__60398_60548 = null;
var count__60399_60549 = (0);
var i__60400_60550 = (0);
while(true){
if((i__60400_60550 < count__60399_60549)){
var vec__60401_60551 = cljs.core._nth.call(null,chunk__60398_60548,i__60400_60550);
var col_60552 = cljs.core.nth.call(null,vec__60401_60551,(0),null);
var infos_60553 = cljs.core.nth.call(null,vec__60401_60551,(1),null);
encode_cols.call(null,infos_60553,source_idx_60536,line_60545,col_60552);

var G__60554 = seq__60397_60547;
var G__60555 = chunk__60398_60548;
var G__60556 = count__60399_60549;
var G__60557 = (i__60400_60550 + (1));
seq__60397_60547 = G__60554;
chunk__60398_60548 = G__60555;
count__60399_60549 = G__60556;
i__60400_60550 = G__60557;
continue;
} else {
var temp__4657__auto___60558__$1 = cljs.core.seq.call(null,seq__60397_60547);
if(temp__4657__auto___60558__$1){
var seq__60397_60559__$1 = temp__4657__auto___60558__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60397_60559__$1)){
var c__7357__auto___60560 = cljs.core.chunk_first.call(null,seq__60397_60559__$1);
var G__60561 = cljs.core.chunk_rest.call(null,seq__60397_60559__$1);
var G__60562 = c__7357__auto___60560;
var G__60563 = cljs.core.count.call(null,c__7357__auto___60560);
var G__60564 = (0);
seq__60397_60547 = G__60561;
chunk__60398_60548 = G__60562;
count__60399_60549 = G__60563;
i__60400_60550 = G__60564;
continue;
} else {
var vec__60404_60565 = cljs.core.first.call(null,seq__60397_60559__$1);
var col_60566 = cljs.core.nth.call(null,vec__60404_60565,(0),null);
var infos_60567 = cljs.core.nth.call(null,vec__60404_60565,(1),null);
encode_cols.call(null,infos_60567,source_idx_60536,line_60545,col_60566);

var G__60568 = cljs.core.next.call(null,seq__60397_60559__$1);
var G__60569 = null;
var G__60570 = (0);
var G__60571 = (0);
seq__60397_60547 = G__60568;
chunk__60398_60548 = G__60569;
count__60399_60549 = G__60570;
i__60400_60550 = G__60571;
continue;
}
} else {
}
}
break;
}

var G__60572 = seq__60390_60540;
var G__60573 = chunk__60391_60541;
var G__60574 = count__60392_60542;
var G__60575 = (i__60393_60543 + (1));
seq__60390_60540 = G__60572;
chunk__60391_60541 = G__60573;
count__60392_60542 = G__60574;
i__60393_60543 = G__60575;
continue;
} else {
var temp__4657__auto___60576__$1 = cljs.core.seq.call(null,seq__60390_60540);
if(temp__4657__auto___60576__$1){
var seq__60390_60577__$1 = temp__4657__auto___60576__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60390_60577__$1)){
var c__7357__auto___60578 = cljs.core.chunk_first.call(null,seq__60390_60577__$1);
var G__60579 = cljs.core.chunk_rest.call(null,seq__60390_60577__$1);
var G__60580 = c__7357__auto___60578;
var G__60581 = cljs.core.count.call(null,c__7357__auto___60578);
var G__60582 = (0);
seq__60390_60540 = G__60579;
chunk__60391_60541 = G__60580;
count__60392_60542 = G__60581;
i__60393_60543 = G__60582;
continue;
} else {
var vec__60407_60583 = cljs.core.first.call(null,seq__60390_60577__$1);
var line_60584 = cljs.core.nth.call(null,vec__60407_60583,(0),null);
var cols_60585 = cljs.core.nth.call(null,vec__60407_60583,(1),null);
var seq__60410_60586 = cljs.core.seq.call(null,cols_60585);
var chunk__60411_60587 = null;
var count__60412_60588 = (0);
var i__60413_60589 = (0);
while(true){
if((i__60413_60589 < count__60412_60588)){
var vec__60414_60590 = cljs.core._nth.call(null,chunk__60411_60587,i__60413_60589);
var col_60591 = cljs.core.nth.call(null,vec__60414_60590,(0),null);
var infos_60592 = cljs.core.nth.call(null,vec__60414_60590,(1),null);
encode_cols.call(null,infos_60592,source_idx_60536,line_60584,col_60591);

var G__60593 = seq__60410_60586;
var G__60594 = chunk__60411_60587;
var G__60595 = count__60412_60588;
var G__60596 = (i__60413_60589 + (1));
seq__60410_60586 = G__60593;
chunk__60411_60587 = G__60594;
count__60412_60588 = G__60595;
i__60413_60589 = G__60596;
continue;
} else {
var temp__4657__auto___60597__$2 = cljs.core.seq.call(null,seq__60410_60586);
if(temp__4657__auto___60597__$2){
var seq__60410_60598__$1 = temp__4657__auto___60597__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60410_60598__$1)){
var c__7357__auto___60599 = cljs.core.chunk_first.call(null,seq__60410_60598__$1);
var G__60600 = cljs.core.chunk_rest.call(null,seq__60410_60598__$1);
var G__60601 = c__7357__auto___60599;
var G__60602 = cljs.core.count.call(null,c__7357__auto___60599);
var G__60603 = (0);
seq__60410_60586 = G__60600;
chunk__60411_60587 = G__60601;
count__60412_60588 = G__60602;
i__60413_60589 = G__60603;
continue;
} else {
var vec__60417_60604 = cljs.core.first.call(null,seq__60410_60598__$1);
var col_60605 = cljs.core.nth.call(null,vec__60417_60604,(0),null);
var infos_60606 = cljs.core.nth.call(null,vec__60417_60604,(1),null);
encode_cols.call(null,infos_60606,source_idx_60536,line_60584,col_60605);

var G__60607 = cljs.core.next.call(null,seq__60410_60598__$1);
var G__60608 = null;
var G__60609 = (0);
var G__60610 = (0);
seq__60410_60586 = G__60607;
chunk__60411_60587 = G__60608;
count__60412_60588 = G__60609;
i__60413_60589 = G__60610;
continue;
}
} else {
}
}
break;
}

var G__60611 = cljs.core.next.call(null,seq__60390_60577__$1);
var G__60612 = null;
var G__60613 = (0);
var G__60614 = (0);
seq__60390_60540 = G__60611;
chunk__60391_60541 = G__60612;
count__60392_60542 = G__60613;
i__60393_60543 = G__60614;
continue;
}
} else {
}
}
break;
}

var G__60615 = cljs.core.next.call(null,seq__60344_60529__$1);
var G__60616 = null;
var G__60617 = (0);
var G__60618 = (0);
seq__60344_60440 = G__60615;
chunk__60345_60441 = G__60616;
count__60346_60442 = G__60617;
i__60347_60443 = G__60618;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__60420 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__60255_SHARP_){
return [cljs.core.str(p1__60255_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__60256_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__60256_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__60257_SHARP_){
return clojure.string.join.call(null,",",p1__60257_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__60421 = G__60420;
goog.object.set(G__60421,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__60421;
} else {
return G__60420;
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
var vec__60628 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__60628,(0),null);
var col_map = cljs.core.nth.call(null,vec__60628,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__60631 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__60631,(0),null);
var infos = cljs.core.nth.call(null,vec__60631,(1),null);
var G__60637 = cljs.core.next.call(null,col_map_seq);
var G__60638 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__60631,col,infos,vec__60628,line,col_map){
return (function (v,p__60634){
var map__60635 = p__60634;
var map__60635__$1 = ((((!((map__60635 == null)))?((((map__60635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60635):map__60635);
var gline = cljs.core.get.call(null,map__60635__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__60635__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__60631,col,infos,vec__60628,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__60637;
new_cols = G__60638;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__60639 = cljs.core.next.call(null,line_map_seq);
var G__60640 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__60639;
new_lines = G__60640;
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
var seq__60703_60765 = cljs.core.seq.call(null,reverse_map);
var chunk__60704_60766 = null;
var count__60705_60767 = (0);
var i__60706_60768 = (0);
while(true){
if((i__60706_60768 < count__60705_60767)){
var vec__60707_60769 = cljs.core._nth.call(null,chunk__60704_60766,i__60706_60768);
var line_60770 = cljs.core.nth.call(null,vec__60707_60769,(0),null);
var columns_60771 = cljs.core.nth.call(null,vec__60707_60769,(1),null);
var seq__60710_60772 = cljs.core.seq.call(null,columns_60771);
var chunk__60711_60773 = null;
var count__60712_60774 = (0);
var i__60713_60775 = (0);
while(true){
if((i__60713_60775 < count__60712_60774)){
var vec__60714_60776 = cljs.core._nth.call(null,chunk__60711_60773,i__60713_60775);
var column_60777 = cljs.core.nth.call(null,vec__60714_60776,(0),null);
var column_info_60778 = cljs.core.nth.call(null,vec__60714_60776,(1),null);
var seq__60717_60779 = cljs.core.seq.call(null,column_info_60778);
var chunk__60718_60780 = null;
var count__60719_60781 = (0);
var i__60720_60782 = (0);
while(true){
if((i__60720_60782 < count__60719_60781)){
var map__60721_60783 = cljs.core._nth.call(null,chunk__60718_60780,i__60720_60782);
var map__60721_60784__$1 = ((((!((map__60721_60783 == null)))?((((map__60721_60783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60721_60783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60721_60783):map__60721_60783);
var gline_60785 = cljs.core.get.call(null,map__60721_60784__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60786 = cljs.core.get.call(null,map__60721_60784__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60787 = cljs.core.get.call(null,map__60721_60784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60785], null),cljs.core.fnil.call(null,((function (seq__60717_60779,chunk__60718_60780,count__60719_60781,i__60720_60782,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60721_60783,map__60721_60784__$1,gline_60785,gcol_60786,name_60787,vec__60714_60776,column_60777,column_info_60778,vec__60707_60769,line_60770,columns_60771,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60786], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60770,new cljs.core.Keyword(null,"col","col",-1959363084),column_60777,new cljs.core.Keyword(null,"name","name",1843675177),name_60787], null));
});})(seq__60717_60779,chunk__60718_60780,count__60719_60781,i__60720_60782,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60721_60783,map__60721_60784__$1,gline_60785,gcol_60786,name_60787,vec__60714_60776,column_60777,column_info_60778,vec__60707_60769,line_60770,columns_60771,inverted))
,cljs.core.sorted_map.call(null)));

var G__60788 = seq__60717_60779;
var G__60789 = chunk__60718_60780;
var G__60790 = count__60719_60781;
var G__60791 = (i__60720_60782 + (1));
seq__60717_60779 = G__60788;
chunk__60718_60780 = G__60789;
count__60719_60781 = G__60790;
i__60720_60782 = G__60791;
continue;
} else {
var temp__4657__auto___60792 = cljs.core.seq.call(null,seq__60717_60779);
if(temp__4657__auto___60792){
var seq__60717_60793__$1 = temp__4657__auto___60792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60717_60793__$1)){
var c__7357__auto___60794 = cljs.core.chunk_first.call(null,seq__60717_60793__$1);
var G__60795 = cljs.core.chunk_rest.call(null,seq__60717_60793__$1);
var G__60796 = c__7357__auto___60794;
var G__60797 = cljs.core.count.call(null,c__7357__auto___60794);
var G__60798 = (0);
seq__60717_60779 = G__60795;
chunk__60718_60780 = G__60796;
count__60719_60781 = G__60797;
i__60720_60782 = G__60798;
continue;
} else {
var map__60723_60799 = cljs.core.first.call(null,seq__60717_60793__$1);
var map__60723_60800__$1 = ((((!((map__60723_60799 == null)))?((((map__60723_60799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60723_60799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60723_60799):map__60723_60799);
var gline_60801 = cljs.core.get.call(null,map__60723_60800__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60802 = cljs.core.get.call(null,map__60723_60800__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60803 = cljs.core.get.call(null,map__60723_60800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60801], null),cljs.core.fnil.call(null,((function (seq__60717_60779,chunk__60718_60780,count__60719_60781,i__60720_60782,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60723_60799,map__60723_60800__$1,gline_60801,gcol_60802,name_60803,seq__60717_60793__$1,temp__4657__auto___60792,vec__60714_60776,column_60777,column_info_60778,vec__60707_60769,line_60770,columns_60771,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60802], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60770,new cljs.core.Keyword(null,"col","col",-1959363084),column_60777,new cljs.core.Keyword(null,"name","name",1843675177),name_60803], null));
});})(seq__60717_60779,chunk__60718_60780,count__60719_60781,i__60720_60782,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60723_60799,map__60723_60800__$1,gline_60801,gcol_60802,name_60803,seq__60717_60793__$1,temp__4657__auto___60792,vec__60714_60776,column_60777,column_info_60778,vec__60707_60769,line_60770,columns_60771,inverted))
,cljs.core.sorted_map.call(null)));

var G__60804 = cljs.core.next.call(null,seq__60717_60793__$1);
var G__60805 = null;
var G__60806 = (0);
var G__60807 = (0);
seq__60717_60779 = G__60804;
chunk__60718_60780 = G__60805;
count__60719_60781 = G__60806;
i__60720_60782 = G__60807;
continue;
}
} else {
}
}
break;
}

var G__60808 = seq__60710_60772;
var G__60809 = chunk__60711_60773;
var G__60810 = count__60712_60774;
var G__60811 = (i__60713_60775 + (1));
seq__60710_60772 = G__60808;
chunk__60711_60773 = G__60809;
count__60712_60774 = G__60810;
i__60713_60775 = G__60811;
continue;
} else {
var temp__4657__auto___60812 = cljs.core.seq.call(null,seq__60710_60772);
if(temp__4657__auto___60812){
var seq__60710_60813__$1 = temp__4657__auto___60812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60710_60813__$1)){
var c__7357__auto___60814 = cljs.core.chunk_first.call(null,seq__60710_60813__$1);
var G__60815 = cljs.core.chunk_rest.call(null,seq__60710_60813__$1);
var G__60816 = c__7357__auto___60814;
var G__60817 = cljs.core.count.call(null,c__7357__auto___60814);
var G__60818 = (0);
seq__60710_60772 = G__60815;
chunk__60711_60773 = G__60816;
count__60712_60774 = G__60817;
i__60713_60775 = G__60818;
continue;
} else {
var vec__60725_60819 = cljs.core.first.call(null,seq__60710_60813__$1);
var column_60820 = cljs.core.nth.call(null,vec__60725_60819,(0),null);
var column_info_60821 = cljs.core.nth.call(null,vec__60725_60819,(1),null);
var seq__60728_60822 = cljs.core.seq.call(null,column_info_60821);
var chunk__60729_60823 = null;
var count__60730_60824 = (0);
var i__60731_60825 = (0);
while(true){
if((i__60731_60825 < count__60730_60824)){
var map__60732_60826 = cljs.core._nth.call(null,chunk__60729_60823,i__60731_60825);
var map__60732_60827__$1 = ((((!((map__60732_60826 == null)))?((((map__60732_60826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60732_60826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60732_60826):map__60732_60826);
var gline_60828 = cljs.core.get.call(null,map__60732_60827__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60829 = cljs.core.get.call(null,map__60732_60827__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60830 = cljs.core.get.call(null,map__60732_60827__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60828], null),cljs.core.fnil.call(null,((function (seq__60728_60822,chunk__60729_60823,count__60730_60824,i__60731_60825,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60732_60826,map__60732_60827__$1,gline_60828,gcol_60829,name_60830,vec__60725_60819,column_60820,column_info_60821,seq__60710_60813__$1,temp__4657__auto___60812,vec__60707_60769,line_60770,columns_60771,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60829], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60770,new cljs.core.Keyword(null,"col","col",-1959363084),column_60820,new cljs.core.Keyword(null,"name","name",1843675177),name_60830], null));
});})(seq__60728_60822,chunk__60729_60823,count__60730_60824,i__60731_60825,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60732_60826,map__60732_60827__$1,gline_60828,gcol_60829,name_60830,vec__60725_60819,column_60820,column_info_60821,seq__60710_60813__$1,temp__4657__auto___60812,vec__60707_60769,line_60770,columns_60771,inverted))
,cljs.core.sorted_map.call(null)));

var G__60831 = seq__60728_60822;
var G__60832 = chunk__60729_60823;
var G__60833 = count__60730_60824;
var G__60834 = (i__60731_60825 + (1));
seq__60728_60822 = G__60831;
chunk__60729_60823 = G__60832;
count__60730_60824 = G__60833;
i__60731_60825 = G__60834;
continue;
} else {
var temp__4657__auto___60835__$1 = cljs.core.seq.call(null,seq__60728_60822);
if(temp__4657__auto___60835__$1){
var seq__60728_60836__$1 = temp__4657__auto___60835__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60728_60836__$1)){
var c__7357__auto___60837 = cljs.core.chunk_first.call(null,seq__60728_60836__$1);
var G__60838 = cljs.core.chunk_rest.call(null,seq__60728_60836__$1);
var G__60839 = c__7357__auto___60837;
var G__60840 = cljs.core.count.call(null,c__7357__auto___60837);
var G__60841 = (0);
seq__60728_60822 = G__60838;
chunk__60729_60823 = G__60839;
count__60730_60824 = G__60840;
i__60731_60825 = G__60841;
continue;
} else {
var map__60734_60842 = cljs.core.first.call(null,seq__60728_60836__$1);
var map__60734_60843__$1 = ((((!((map__60734_60842 == null)))?((((map__60734_60842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60734_60842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60734_60842):map__60734_60842);
var gline_60844 = cljs.core.get.call(null,map__60734_60843__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60845 = cljs.core.get.call(null,map__60734_60843__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60846 = cljs.core.get.call(null,map__60734_60843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60844], null),cljs.core.fnil.call(null,((function (seq__60728_60822,chunk__60729_60823,count__60730_60824,i__60731_60825,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60734_60842,map__60734_60843__$1,gline_60844,gcol_60845,name_60846,seq__60728_60836__$1,temp__4657__auto___60835__$1,vec__60725_60819,column_60820,column_info_60821,seq__60710_60813__$1,temp__4657__auto___60812,vec__60707_60769,line_60770,columns_60771,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60845], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60770,new cljs.core.Keyword(null,"col","col",-1959363084),column_60820,new cljs.core.Keyword(null,"name","name",1843675177),name_60846], null));
});})(seq__60728_60822,chunk__60729_60823,count__60730_60824,i__60731_60825,seq__60710_60772,chunk__60711_60773,count__60712_60774,i__60713_60775,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60734_60842,map__60734_60843__$1,gline_60844,gcol_60845,name_60846,seq__60728_60836__$1,temp__4657__auto___60835__$1,vec__60725_60819,column_60820,column_info_60821,seq__60710_60813__$1,temp__4657__auto___60812,vec__60707_60769,line_60770,columns_60771,inverted))
,cljs.core.sorted_map.call(null)));

var G__60847 = cljs.core.next.call(null,seq__60728_60836__$1);
var G__60848 = null;
var G__60849 = (0);
var G__60850 = (0);
seq__60728_60822 = G__60847;
chunk__60729_60823 = G__60848;
count__60730_60824 = G__60849;
i__60731_60825 = G__60850;
continue;
}
} else {
}
}
break;
}

var G__60851 = cljs.core.next.call(null,seq__60710_60813__$1);
var G__60852 = null;
var G__60853 = (0);
var G__60854 = (0);
seq__60710_60772 = G__60851;
chunk__60711_60773 = G__60852;
count__60712_60774 = G__60853;
i__60713_60775 = G__60854;
continue;
}
} else {
}
}
break;
}

var G__60855 = seq__60703_60765;
var G__60856 = chunk__60704_60766;
var G__60857 = count__60705_60767;
var G__60858 = (i__60706_60768 + (1));
seq__60703_60765 = G__60855;
chunk__60704_60766 = G__60856;
count__60705_60767 = G__60857;
i__60706_60768 = G__60858;
continue;
} else {
var temp__4657__auto___60859 = cljs.core.seq.call(null,seq__60703_60765);
if(temp__4657__auto___60859){
var seq__60703_60860__$1 = temp__4657__auto___60859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60703_60860__$1)){
var c__7357__auto___60861 = cljs.core.chunk_first.call(null,seq__60703_60860__$1);
var G__60862 = cljs.core.chunk_rest.call(null,seq__60703_60860__$1);
var G__60863 = c__7357__auto___60861;
var G__60864 = cljs.core.count.call(null,c__7357__auto___60861);
var G__60865 = (0);
seq__60703_60765 = G__60862;
chunk__60704_60766 = G__60863;
count__60705_60767 = G__60864;
i__60706_60768 = G__60865;
continue;
} else {
var vec__60736_60866 = cljs.core.first.call(null,seq__60703_60860__$1);
var line_60867 = cljs.core.nth.call(null,vec__60736_60866,(0),null);
var columns_60868 = cljs.core.nth.call(null,vec__60736_60866,(1),null);
var seq__60739_60869 = cljs.core.seq.call(null,columns_60868);
var chunk__60740_60870 = null;
var count__60741_60871 = (0);
var i__60742_60872 = (0);
while(true){
if((i__60742_60872 < count__60741_60871)){
var vec__60743_60873 = cljs.core._nth.call(null,chunk__60740_60870,i__60742_60872);
var column_60874 = cljs.core.nth.call(null,vec__60743_60873,(0),null);
var column_info_60875 = cljs.core.nth.call(null,vec__60743_60873,(1),null);
var seq__60746_60876 = cljs.core.seq.call(null,column_info_60875);
var chunk__60747_60877 = null;
var count__60748_60878 = (0);
var i__60749_60879 = (0);
while(true){
if((i__60749_60879 < count__60748_60878)){
var map__60750_60880 = cljs.core._nth.call(null,chunk__60747_60877,i__60749_60879);
var map__60750_60881__$1 = ((((!((map__60750_60880 == null)))?((((map__60750_60880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750_60880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60750_60880):map__60750_60880);
var gline_60882 = cljs.core.get.call(null,map__60750_60881__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60883 = cljs.core.get.call(null,map__60750_60881__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60884 = cljs.core.get.call(null,map__60750_60881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60882], null),cljs.core.fnil.call(null,((function (seq__60746_60876,chunk__60747_60877,count__60748_60878,i__60749_60879,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60750_60880,map__60750_60881__$1,gline_60882,gcol_60883,name_60884,vec__60743_60873,column_60874,column_info_60875,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60883], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60867,new cljs.core.Keyword(null,"col","col",-1959363084),column_60874,new cljs.core.Keyword(null,"name","name",1843675177),name_60884], null));
});})(seq__60746_60876,chunk__60747_60877,count__60748_60878,i__60749_60879,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60750_60880,map__60750_60881__$1,gline_60882,gcol_60883,name_60884,vec__60743_60873,column_60874,column_info_60875,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted))
,cljs.core.sorted_map.call(null)));

var G__60885 = seq__60746_60876;
var G__60886 = chunk__60747_60877;
var G__60887 = count__60748_60878;
var G__60888 = (i__60749_60879 + (1));
seq__60746_60876 = G__60885;
chunk__60747_60877 = G__60886;
count__60748_60878 = G__60887;
i__60749_60879 = G__60888;
continue;
} else {
var temp__4657__auto___60889__$1 = cljs.core.seq.call(null,seq__60746_60876);
if(temp__4657__auto___60889__$1){
var seq__60746_60890__$1 = temp__4657__auto___60889__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60746_60890__$1)){
var c__7357__auto___60891 = cljs.core.chunk_first.call(null,seq__60746_60890__$1);
var G__60892 = cljs.core.chunk_rest.call(null,seq__60746_60890__$1);
var G__60893 = c__7357__auto___60891;
var G__60894 = cljs.core.count.call(null,c__7357__auto___60891);
var G__60895 = (0);
seq__60746_60876 = G__60892;
chunk__60747_60877 = G__60893;
count__60748_60878 = G__60894;
i__60749_60879 = G__60895;
continue;
} else {
var map__60752_60896 = cljs.core.first.call(null,seq__60746_60890__$1);
var map__60752_60897__$1 = ((((!((map__60752_60896 == null)))?((((map__60752_60896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60752_60896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60752_60896):map__60752_60896);
var gline_60898 = cljs.core.get.call(null,map__60752_60897__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60899 = cljs.core.get.call(null,map__60752_60897__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60900 = cljs.core.get.call(null,map__60752_60897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60898], null),cljs.core.fnil.call(null,((function (seq__60746_60876,chunk__60747_60877,count__60748_60878,i__60749_60879,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60752_60896,map__60752_60897__$1,gline_60898,gcol_60899,name_60900,seq__60746_60890__$1,temp__4657__auto___60889__$1,vec__60743_60873,column_60874,column_info_60875,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60899], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60867,new cljs.core.Keyword(null,"col","col",-1959363084),column_60874,new cljs.core.Keyword(null,"name","name",1843675177),name_60900], null));
});})(seq__60746_60876,chunk__60747_60877,count__60748_60878,i__60749_60879,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60752_60896,map__60752_60897__$1,gline_60898,gcol_60899,name_60900,seq__60746_60890__$1,temp__4657__auto___60889__$1,vec__60743_60873,column_60874,column_info_60875,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted))
,cljs.core.sorted_map.call(null)));

var G__60901 = cljs.core.next.call(null,seq__60746_60890__$1);
var G__60902 = null;
var G__60903 = (0);
var G__60904 = (0);
seq__60746_60876 = G__60901;
chunk__60747_60877 = G__60902;
count__60748_60878 = G__60903;
i__60749_60879 = G__60904;
continue;
}
} else {
}
}
break;
}

var G__60905 = seq__60739_60869;
var G__60906 = chunk__60740_60870;
var G__60907 = count__60741_60871;
var G__60908 = (i__60742_60872 + (1));
seq__60739_60869 = G__60905;
chunk__60740_60870 = G__60906;
count__60741_60871 = G__60907;
i__60742_60872 = G__60908;
continue;
} else {
var temp__4657__auto___60909__$1 = cljs.core.seq.call(null,seq__60739_60869);
if(temp__4657__auto___60909__$1){
var seq__60739_60910__$1 = temp__4657__auto___60909__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60739_60910__$1)){
var c__7357__auto___60911 = cljs.core.chunk_first.call(null,seq__60739_60910__$1);
var G__60912 = cljs.core.chunk_rest.call(null,seq__60739_60910__$1);
var G__60913 = c__7357__auto___60911;
var G__60914 = cljs.core.count.call(null,c__7357__auto___60911);
var G__60915 = (0);
seq__60739_60869 = G__60912;
chunk__60740_60870 = G__60913;
count__60741_60871 = G__60914;
i__60742_60872 = G__60915;
continue;
} else {
var vec__60754_60916 = cljs.core.first.call(null,seq__60739_60910__$1);
var column_60917 = cljs.core.nth.call(null,vec__60754_60916,(0),null);
var column_info_60918 = cljs.core.nth.call(null,vec__60754_60916,(1),null);
var seq__60757_60919 = cljs.core.seq.call(null,column_info_60918);
var chunk__60758_60920 = null;
var count__60759_60921 = (0);
var i__60760_60922 = (0);
while(true){
if((i__60760_60922 < count__60759_60921)){
var map__60761_60923 = cljs.core._nth.call(null,chunk__60758_60920,i__60760_60922);
var map__60761_60924__$1 = ((((!((map__60761_60923 == null)))?((((map__60761_60923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60761_60923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60761_60923):map__60761_60923);
var gline_60925 = cljs.core.get.call(null,map__60761_60924__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60926 = cljs.core.get.call(null,map__60761_60924__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60927 = cljs.core.get.call(null,map__60761_60924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60925], null),cljs.core.fnil.call(null,((function (seq__60757_60919,chunk__60758_60920,count__60759_60921,i__60760_60922,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60761_60923,map__60761_60924__$1,gline_60925,gcol_60926,name_60927,vec__60754_60916,column_60917,column_info_60918,seq__60739_60910__$1,temp__4657__auto___60909__$1,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60926], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60867,new cljs.core.Keyword(null,"col","col",-1959363084),column_60917,new cljs.core.Keyword(null,"name","name",1843675177),name_60927], null));
});})(seq__60757_60919,chunk__60758_60920,count__60759_60921,i__60760_60922,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60761_60923,map__60761_60924__$1,gline_60925,gcol_60926,name_60927,vec__60754_60916,column_60917,column_info_60918,seq__60739_60910__$1,temp__4657__auto___60909__$1,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted))
,cljs.core.sorted_map.call(null)));

var G__60928 = seq__60757_60919;
var G__60929 = chunk__60758_60920;
var G__60930 = count__60759_60921;
var G__60931 = (i__60760_60922 + (1));
seq__60757_60919 = G__60928;
chunk__60758_60920 = G__60929;
count__60759_60921 = G__60930;
i__60760_60922 = G__60931;
continue;
} else {
var temp__4657__auto___60932__$2 = cljs.core.seq.call(null,seq__60757_60919);
if(temp__4657__auto___60932__$2){
var seq__60757_60933__$1 = temp__4657__auto___60932__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60757_60933__$1)){
var c__7357__auto___60934 = cljs.core.chunk_first.call(null,seq__60757_60933__$1);
var G__60935 = cljs.core.chunk_rest.call(null,seq__60757_60933__$1);
var G__60936 = c__7357__auto___60934;
var G__60937 = cljs.core.count.call(null,c__7357__auto___60934);
var G__60938 = (0);
seq__60757_60919 = G__60935;
chunk__60758_60920 = G__60936;
count__60759_60921 = G__60937;
i__60760_60922 = G__60938;
continue;
} else {
var map__60763_60939 = cljs.core.first.call(null,seq__60757_60933__$1);
var map__60763_60940__$1 = ((((!((map__60763_60939 == null)))?((((map__60763_60939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60763_60939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60763_60939):map__60763_60939);
var gline_60941 = cljs.core.get.call(null,map__60763_60940__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_60942 = cljs.core.get.call(null,map__60763_60940__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_60943 = cljs.core.get.call(null,map__60763_60940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_60941], null),cljs.core.fnil.call(null,((function (seq__60757_60919,chunk__60758_60920,count__60759_60921,i__60760_60922,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60763_60939,map__60763_60940__$1,gline_60941,gcol_60942,name_60943,seq__60757_60933__$1,temp__4657__auto___60932__$2,vec__60754_60916,column_60917,column_info_60918,seq__60739_60910__$1,temp__4657__auto___60909__$1,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_60942], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_60867,new cljs.core.Keyword(null,"col","col",-1959363084),column_60917,new cljs.core.Keyword(null,"name","name",1843675177),name_60943], null));
});})(seq__60757_60919,chunk__60758_60920,count__60759_60921,i__60760_60922,seq__60739_60869,chunk__60740_60870,count__60741_60871,i__60742_60872,seq__60703_60765,chunk__60704_60766,count__60705_60767,i__60706_60768,map__60763_60939,map__60763_60940__$1,gline_60941,gcol_60942,name_60943,seq__60757_60933__$1,temp__4657__auto___60932__$2,vec__60754_60916,column_60917,column_info_60918,seq__60739_60910__$1,temp__4657__auto___60909__$1,vec__60736_60866,line_60867,columns_60868,seq__60703_60860__$1,temp__4657__auto___60859,inverted))
,cljs.core.sorted_map.call(null)));

var G__60944 = cljs.core.next.call(null,seq__60757_60933__$1);
var G__60945 = null;
var G__60946 = (0);
var G__60947 = (0);
seq__60757_60919 = G__60944;
chunk__60758_60920 = G__60945;
count__60759_60921 = G__60946;
i__60760_60922 = G__60947;
continue;
}
} else {
}
}
break;
}

var G__60948 = cljs.core.next.call(null,seq__60739_60910__$1);
var G__60949 = null;
var G__60950 = (0);
var G__60951 = (0);
seq__60739_60869 = G__60948;
chunk__60740_60870 = G__60949;
count__60741_60871 = G__60950;
i__60742_60872 = G__60951;
continue;
}
} else {
}
}
break;
}

var G__60952 = cljs.core.next.call(null,seq__60703_60860__$1);
var G__60953 = null;
var G__60954 = (0);
var G__60955 = (0);
seq__60703_60765 = G__60952;
chunk__60704_60766 = G__60953;
count__60705_60767 = G__60954;
i__60706_60768 = G__60955;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1479783835565