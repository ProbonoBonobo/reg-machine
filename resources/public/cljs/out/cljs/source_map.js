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
return cljs.core.reduce.call(null,(function (m,p__56677){
var vec__56678 = p__56677;
var i = cljs.core.nth.call(null,vec__56678,(0),null);
var v = cljs.core.nth.call(null,vec__56678,(1),null);
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
var vec__56684 = seg;
var gcol = cljs.core.nth.call(null,vec__56684,(0),null);
var source = cljs.core.nth.call(null,vec__56684,(1),null);
var line = cljs.core.nth.call(null,vec__56684,(2),null);
var col = cljs.core.nth.call(null,vec__56684,(3),null);
var name = cljs.core.nth.call(null,vec__56684,(4),null);
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
var vec__56693 = seg;
var gcol = cljs.core.nth.call(null,vec__56693,(0),null);
var source = cljs.core.nth.call(null,vec__56693,(1),null);
var line = cljs.core.nth.call(null,vec__56693,(2),null);
var col = cljs.core.nth.call(null,vec__56693,(3),null);
var name = cljs.core.nth.call(null,vec__56693,(4),null);
var vec__56696 = relseg;
var rgcol = cljs.core.nth.call(null,vec__56696,(0),null);
var rsource = cljs.core.nth.call(null,vec__56696,(1),null);
var rline = cljs.core.nth.call(null,vec__56696,(2),null);
var rcol = cljs.core.nth.call(null,vec__56696,(3),null);
var rname = cljs.core.nth.call(null,vec__56696,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__24899__auto__ = source;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__24899__auto__ = line;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__24899__auto__ = col;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__24899__auto__ = name;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
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
var map__56701 = segmap;
var map__56701__$1 = ((((!((map__56701 == null)))?((((map__56701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56701):map__56701);
var gcol = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__56701,map__56701__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__56701,map__56701__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__56701,map__56701__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__56701,map__56701__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__56701,map__56701__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__56701,map__56701__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args56703 = [];
var len__26007__auto___56709 = arguments.length;
var i__26008__auto___56710 = (0);
while(true){
if((i__26008__auto___56710 < len__26007__auto___56709)){
args56703.push((arguments[i__26008__auto___56710]));

var G__56711 = (i__26008__auto___56710 + (1));
i__26008__auto___56710 = G__56711;
continue;
} else {
}
break;
}

var G__56705 = args56703.length;
switch (G__56705) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56703.length)].join('')));

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
var vec__56706 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__56713 = cljs.core.next.call(null,segs__$1);
var G__56714 = nrelseg;
var G__56715 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__56713;
relseg__$1 = G__56714;
result__$1 = G__56715;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__56706,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__56706,(1),null);
var G__56716 = (gline + (1));
var G__56717 = cljs.core.next.call(null,lines__$1);
var G__56718 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__56719 = result__$1;
gline = G__56716;
lines__$1 = G__56717;
relseg = G__56718;
result = G__56719;
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
var map__56723 = segmap;
var map__56723__$1 = ((((!((map__56723 == null)))?((((map__56723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56723):map__56723);
var gcol = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__56723,map__56723__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__56723,map__56723__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__56720_SHARP_){
return cljs.core.conj.call(null,p1__56720_SHARP_,d__$1);
});})(map__56723,map__56723__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__56723,map__56723__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args56725 = [];
var len__26007__auto___56731 = arguments.length;
var i__26008__auto___56732 = (0);
while(true){
if((i__26008__auto___56732 < len__26007__auto___56731)){
args56725.push((arguments[i__26008__auto___56732]));

var G__56733 = (i__26008__auto___56732 + (1));
i__26008__auto___56732 = G__56733;
continue;
} else {
}
break;
}

var G__56727 = args56725.length;
switch (G__56727) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56725.length)].join('')));

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
var vec__56728 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__56735 = cljs.core.next.call(null,segs__$1);
var G__56736 = nrelseg;
var G__56737 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__56735;
relseg__$1 = G__56736;
result__$1 = G__56737;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__56728,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__56728,(1),null);
var G__56738 = (gline + (1));
var G__56739 = cljs.core.next.call(null,lines__$1);
var G__56740 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__56741 = result__$1;
gline = G__56738;
lines__$1 = G__56739;
relseg = G__56740;
result = G__56741;
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
return (function (p__56754){
var vec__56755 = p__56754;
var _ = cljs.core.nth.call(null,vec__56755,(0),null);
var source = cljs.core.nth.call(null,vec__56755,(1),null);
var line = cljs.core.nth.call(null,vec__56755,(2),null);
var col = cljs.core.nth.call(null,vec__56755,(3),null);
var name = cljs.core.nth.call(null,vec__56755,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__56758){
var vec__56759 = p__56758;
var gcol = cljs.core.nth.call(null,vec__56759,(0),null);
var sidx = cljs.core.nth.call(null,vec__56759,(1),null);
var line = cljs.core.nth.call(null,vec__56759,(2),null);
var col = cljs.core.nth.call(null,vec__56759,(3),null);
var name = cljs.core.nth.call(null,vec__56759,(4),null);
var seg = vec__56759;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__56759,gcol,sidx,line,col,name,seg,relseg){
return (function (p__56762){
var vec__56763 = p__56762;
var _ = cljs.core.nth.call(null,vec__56763,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__56763,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__56763,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__56763,(3),null);
var lname = cljs.core.nth.call(null,vec__56763,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24899__auto__ = name;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__56759,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__24899__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
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
var seq__56851 = cljs.core.seq.call(null,infos);
var chunk__56852 = null;
var count__56853 = (0);
var i__56854 = (0);
while(true){
if((i__56854 < count__56853)){
var info = cljs.core._nth.call(null,chunk__56852,i__56854);
var segv_56933 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_56934 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_56935 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_56934 > (lc_56935 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__56851,chunk__56852,count__56853,i__56854,segv_56933,gline_56934,lc_56935,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_56934 - (lc_56935 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_56933], null));
});})(seq__56851,chunk__56852,count__56853,i__56854,segv_56933,gline_56934,lc_56935,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__56851,chunk__56852,count__56853,i__56854,segv_56933,gline_56934,lc_56935,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_56934], null),cljs.core.conj,segv_56933);
});})(seq__56851,chunk__56852,count__56853,i__56854,segv_56933,gline_56934,lc_56935,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__56936 = seq__56851;
var G__56937 = chunk__56852;
var G__56938 = count__56853;
var G__56939 = (i__56854 + (1));
seq__56851 = G__56936;
chunk__56852 = G__56937;
count__56853 = G__56938;
i__56854 = G__56939;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56851);
if(temp__4657__auto__){
var seq__56851__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56851__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__56851__$1);
var G__56940 = cljs.core.chunk_rest.call(null,seq__56851__$1);
var G__56941 = c__25713__auto__;
var G__56942 = cljs.core.count.call(null,c__25713__auto__);
var G__56943 = (0);
seq__56851 = G__56940;
chunk__56852 = G__56941;
count__56853 = G__56942;
i__56854 = G__56943;
continue;
} else {
var info = cljs.core.first.call(null,seq__56851__$1);
var segv_56944 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_56945 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_56946 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_56945 > (lc_56946 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__56851,chunk__56852,count__56853,i__56854,segv_56944,gline_56945,lc_56946,info,seq__56851__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_56945 - (lc_56946 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_56944], null));
});})(seq__56851,chunk__56852,count__56853,i__56854,segv_56944,gline_56945,lc_56946,info,seq__56851__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__56851,chunk__56852,count__56853,i__56854,segv_56944,gline_56945,lc_56946,info,seq__56851__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_56945], null),cljs.core.conj,segv_56944);
});})(seq__56851,chunk__56852,count__56853,i__56854,segv_56944,gline_56945,lc_56946,info,seq__56851__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__56947 = cljs.core.next.call(null,seq__56851__$1);
var G__56948 = null;
var G__56949 = (0);
var G__56950 = (0);
seq__56851 = G__56947;
chunk__56852 = G__56948;
count__56853 = G__56949;
i__56854 = G__56950;
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
var seq__56855_56951 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__56856_56952 = null;
var count__56857_56953 = (0);
var i__56858_56954 = (0);
while(true){
if((i__56858_56954 < count__56857_56953)){
var vec__56859_56955 = cljs.core._nth.call(null,chunk__56856_56952,i__56858_56954);
var source_idx_56956 = cljs.core.nth.call(null,vec__56859_56955,(0),null);
var vec__56862_56957 = cljs.core.nth.call(null,vec__56859_56955,(1),null);
var __56958 = cljs.core.nth.call(null,vec__56862_56957,(0),null);
var lines_56959__$1 = cljs.core.nth.call(null,vec__56862_56957,(1),null);
var seq__56865_56960 = cljs.core.seq.call(null,lines_56959__$1);
var chunk__56866_56961 = null;
var count__56867_56962 = (0);
var i__56868_56963 = (0);
while(true){
if((i__56868_56963 < count__56867_56962)){
var vec__56869_56964 = cljs.core._nth.call(null,chunk__56866_56961,i__56868_56963);
var line_56965 = cljs.core.nth.call(null,vec__56869_56964,(0),null);
var cols_56966 = cljs.core.nth.call(null,vec__56869_56964,(1),null);
var seq__56872_56967 = cljs.core.seq.call(null,cols_56966);
var chunk__56873_56968 = null;
var count__56874_56969 = (0);
var i__56875_56970 = (0);
while(true){
if((i__56875_56970 < count__56874_56969)){
var vec__56876_56971 = cljs.core._nth.call(null,chunk__56873_56968,i__56875_56970);
var col_56972 = cljs.core.nth.call(null,vec__56876_56971,(0),null);
var infos_56973 = cljs.core.nth.call(null,vec__56876_56971,(1),null);
encode_cols.call(null,infos_56973,source_idx_56956,line_56965,col_56972);

var G__56974 = seq__56872_56967;
var G__56975 = chunk__56873_56968;
var G__56976 = count__56874_56969;
var G__56977 = (i__56875_56970 + (1));
seq__56872_56967 = G__56974;
chunk__56873_56968 = G__56975;
count__56874_56969 = G__56976;
i__56875_56970 = G__56977;
continue;
} else {
var temp__4657__auto___56978 = cljs.core.seq.call(null,seq__56872_56967);
if(temp__4657__auto___56978){
var seq__56872_56979__$1 = temp__4657__auto___56978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56872_56979__$1)){
var c__25713__auto___56980 = cljs.core.chunk_first.call(null,seq__56872_56979__$1);
var G__56981 = cljs.core.chunk_rest.call(null,seq__56872_56979__$1);
var G__56982 = c__25713__auto___56980;
var G__56983 = cljs.core.count.call(null,c__25713__auto___56980);
var G__56984 = (0);
seq__56872_56967 = G__56981;
chunk__56873_56968 = G__56982;
count__56874_56969 = G__56983;
i__56875_56970 = G__56984;
continue;
} else {
var vec__56879_56985 = cljs.core.first.call(null,seq__56872_56979__$1);
var col_56986 = cljs.core.nth.call(null,vec__56879_56985,(0),null);
var infos_56987 = cljs.core.nth.call(null,vec__56879_56985,(1),null);
encode_cols.call(null,infos_56987,source_idx_56956,line_56965,col_56986);

var G__56988 = cljs.core.next.call(null,seq__56872_56979__$1);
var G__56989 = null;
var G__56990 = (0);
var G__56991 = (0);
seq__56872_56967 = G__56988;
chunk__56873_56968 = G__56989;
count__56874_56969 = G__56990;
i__56875_56970 = G__56991;
continue;
}
} else {
}
}
break;
}

var G__56992 = seq__56865_56960;
var G__56993 = chunk__56866_56961;
var G__56994 = count__56867_56962;
var G__56995 = (i__56868_56963 + (1));
seq__56865_56960 = G__56992;
chunk__56866_56961 = G__56993;
count__56867_56962 = G__56994;
i__56868_56963 = G__56995;
continue;
} else {
var temp__4657__auto___56996 = cljs.core.seq.call(null,seq__56865_56960);
if(temp__4657__auto___56996){
var seq__56865_56997__$1 = temp__4657__auto___56996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56865_56997__$1)){
var c__25713__auto___56998 = cljs.core.chunk_first.call(null,seq__56865_56997__$1);
var G__56999 = cljs.core.chunk_rest.call(null,seq__56865_56997__$1);
var G__57000 = c__25713__auto___56998;
var G__57001 = cljs.core.count.call(null,c__25713__auto___56998);
var G__57002 = (0);
seq__56865_56960 = G__56999;
chunk__56866_56961 = G__57000;
count__56867_56962 = G__57001;
i__56868_56963 = G__57002;
continue;
} else {
var vec__56882_57003 = cljs.core.first.call(null,seq__56865_56997__$1);
var line_57004 = cljs.core.nth.call(null,vec__56882_57003,(0),null);
var cols_57005 = cljs.core.nth.call(null,vec__56882_57003,(1),null);
var seq__56885_57006 = cljs.core.seq.call(null,cols_57005);
var chunk__56886_57007 = null;
var count__56887_57008 = (0);
var i__56888_57009 = (0);
while(true){
if((i__56888_57009 < count__56887_57008)){
var vec__56889_57010 = cljs.core._nth.call(null,chunk__56886_57007,i__56888_57009);
var col_57011 = cljs.core.nth.call(null,vec__56889_57010,(0),null);
var infos_57012 = cljs.core.nth.call(null,vec__56889_57010,(1),null);
encode_cols.call(null,infos_57012,source_idx_56956,line_57004,col_57011);

var G__57013 = seq__56885_57006;
var G__57014 = chunk__56886_57007;
var G__57015 = count__56887_57008;
var G__57016 = (i__56888_57009 + (1));
seq__56885_57006 = G__57013;
chunk__56886_57007 = G__57014;
count__56887_57008 = G__57015;
i__56888_57009 = G__57016;
continue;
} else {
var temp__4657__auto___57017__$1 = cljs.core.seq.call(null,seq__56885_57006);
if(temp__4657__auto___57017__$1){
var seq__56885_57018__$1 = temp__4657__auto___57017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56885_57018__$1)){
var c__25713__auto___57019 = cljs.core.chunk_first.call(null,seq__56885_57018__$1);
var G__57020 = cljs.core.chunk_rest.call(null,seq__56885_57018__$1);
var G__57021 = c__25713__auto___57019;
var G__57022 = cljs.core.count.call(null,c__25713__auto___57019);
var G__57023 = (0);
seq__56885_57006 = G__57020;
chunk__56886_57007 = G__57021;
count__56887_57008 = G__57022;
i__56888_57009 = G__57023;
continue;
} else {
var vec__56892_57024 = cljs.core.first.call(null,seq__56885_57018__$1);
var col_57025 = cljs.core.nth.call(null,vec__56892_57024,(0),null);
var infos_57026 = cljs.core.nth.call(null,vec__56892_57024,(1),null);
encode_cols.call(null,infos_57026,source_idx_56956,line_57004,col_57025);

var G__57027 = cljs.core.next.call(null,seq__56885_57018__$1);
var G__57028 = null;
var G__57029 = (0);
var G__57030 = (0);
seq__56885_57006 = G__57027;
chunk__56886_57007 = G__57028;
count__56887_57008 = G__57029;
i__56888_57009 = G__57030;
continue;
}
} else {
}
}
break;
}

var G__57031 = cljs.core.next.call(null,seq__56865_56997__$1);
var G__57032 = null;
var G__57033 = (0);
var G__57034 = (0);
seq__56865_56960 = G__57031;
chunk__56866_56961 = G__57032;
count__56867_56962 = G__57033;
i__56868_56963 = G__57034;
continue;
}
} else {
}
}
break;
}

var G__57035 = seq__56855_56951;
var G__57036 = chunk__56856_56952;
var G__57037 = count__56857_56953;
var G__57038 = (i__56858_56954 + (1));
seq__56855_56951 = G__57035;
chunk__56856_56952 = G__57036;
count__56857_56953 = G__57037;
i__56858_56954 = G__57038;
continue;
} else {
var temp__4657__auto___57039 = cljs.core.seq.call(null,seq__56855_56951);
if(temp__4657__auto___57039){
var seq__56855_57040__$1 = temp__4657__auto___57039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56855_57040__$1)){
var c__25713__auto___57041 = cljs.core.chunk_first.call(null,seq__56855_57040__$1);
var G__57042 = cljs.core.chunk_rest.call(null,seq__56855_57040__$1);
var G__57043 = c__25713__auto___57041;
var G__57044 = cljs.core.count.call(null,c__25713__auto___57041);
var G__57045 = (0);
seq__56855_56951 = G__57042;
chunk__56856_56952 = G__57043;
count__56857_56953 = G__57044;
i__56858_56954 = G__57045;
continue;
} else {
var vec__56895_57046 = cljs.core.first.call(null,seq__56855_57040__$1);
var source_idx_57047 = cljs.core.nth.call(null,vec__56895_57046,(0),null);
var vec__56898_57048 = cljs.core.nth.call(null,vec__56895_57046,(1),null);
var __57049 = cljs.core.nth.call(null,vec__56898_57048,(0),null);
var lines_57050__$1 = cljs.core.nth.call(null,vec__56898_57048,(1),null);
var seq__56901_57051 = cljs.core.seq.call(null,lines_57050__$1);
var chunk__56902_57052 = null;
var count__56903_57053 = (0);
var i__56904_57054 = (0);
while(true){
if((i__56904_57054 < count__56903_57053)){
var vec__56905_57055 = cljs.core._nth.call(null,chunk__56902_57052,i__56904_57054);
var line_57056 = cljs.core.nth.call(null,vec__56905_57055,(0),null);
var cols_57057 = cljs.core.nth.call(null,vec__56905_57055,(1),null);
var seq__56908_57058 = cljs.core.seq.call(null,cols_57057);
var chunk__56909_57059 = null;
var count__56910_57060 = (0);
var i__56911_57061 = (0);
while(true){
if((i__56911_57061 < count__56910_57060)){
var vec__56912_57062 = cljs.core._nth.call(null,chunk__56909_57059,i__56911_57061);
var col_57063 = cljs.core.nth.call(null,vec__56912_57062,(0),null);
var infos_57064 = cljs.core.nth.call(null,vec__56912_57062,(1),null);
encode_cols.call(null,infos_57064,source_idx_57047,line_57056,col_57063);

var G__57065 = seq__56908_57058;
var G__57066 = chunk__56909_57059;
var G__57067 = count__56910_57060;
var G__57068 = (i__56911_57061 + (1));
seq__56908_57058 = G__57065;
chunk__56909_57059 = G__57066;
count__56910_57060 = G__57067;
i__56911_57061 = G__57068;
continue;
} else {
var temp__4657__auto___57069__$1 = cljs.core.seq.call(null,seq__56908_57058);
if(temp__4657__auto___57069__$1){
var seq__56908_57070__$1 = temp__4657__auto___57069__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56908_57070__$1)){
var c__25713__auto___57071 = cljs.core.chunk_first.call(null,seq__56908_57070__$1);
var G__57072 = cljs.core.chunk_rest.call(null,seq__56908_57070__$1);
var G__57073 = c__25713__auto___57071;
var G__57074 = cljs.core.count.call(null,c__25713__auto___57071);
var G__57075 = (0);
seq__56908_57058 = G__57072;
chunk__56909_57059 = G__57073;
count__56910_57060 = G__57074;
i__56911_57061 = G__57075;
continue;
} else {
var vec__56915_57076 = cljs.core.first.call(null,seq__56908_57070__$1);
var col_57077 = cljs.core.nth.call(null,vec__56915_57076,(0),null);
var infos_57078 = cljs.core.nth.call(null,vec__56915_57076,(1),null);
encode_cols.call(null,infos_57078,source_idx_57047,line_57056,col_57077);

var G__57079 = cljs.core.next.call(null,seq__56908_57070__$1);
var G__57080 = null;
var G__57081 = (0);
var G__57082 = (0);
seq__56908_57058 = G__57079;
chunk__56909_57059 = G__57080;
count__56910_57060 = G__57081;
i__56911_57061 = G__57082;
continue;
}
} else {
}
}
break;
}

var G__57083 = seq__56901_57051;
var G__57084 = chunk__56902_57052;
var G__57085 = count__56903_57053;
var G__57086 = (i__56904_57054 + (1));
seq__56901_57051 = G__57083;
chunk__56902_57052 = G__57084;
count__56903_57053 = G__57085;
i__56904_57054 = G__57086;
continue;
} else {
var temp__4657__auto___57087__$1 = cljs.core.seq.call(null,seq__56901_57051);
if(temp__4657__auto___57087__$1){
var seq__56901_57088__$1 = temp__4657__auto___57087__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56901_57088__$1)){
var c__25713__auto___57089 = cljs.core.chunk_first.call(null,seq__56901_57088__$1);
var G__57090 = cljs.core.chunk_rest.call(null,seq__56901_57088__$1);
var G__57091 = c__25713__auto___57089;
var G__57092 = cljs.core.count.call(null,c__25713__auto___57089);
var G__57093 = (0);
seq__56901_57051 = G__57090;
chunk__56902_57052 = G__57091;
count__56903_57053 = G__57092;
i__56904_57054 = G__57093;
continue;
} else {
var vec__56918_57094 = cljs.core.first.call(null,seq__56901_57088__$1);
var line_57095 = cljs.core.nth.call(null,vec__56918_57094,(0),null);
var cols_57096 = cljs.core.nth.call(null,vec__56918_57094,(1),null);
var seq__56921_57097 = cljs.core.seq.call(null,cols_57096);
var chunk__56922_57098 = null;
var count__56923_57099 = (0);
var i__56924_57100 = (0);
while(true){
if((i__56924_57100 < count__56923_57099)){
var vec__56925_57101 = cljs.core._nth.call(null,chunk__56922_57098,i__56924_57100);
var col_57102 = cljs.core.nth.call(null,vec__56925_57101,(0),null);
var infos_57103 = cljs.core.nth.call(null,vec__56925_57101,(1),null);
encode_cols.call(null,infos_57103,source_idx_57047,line_57095,col_57102);

var G__57104 = seq__56921_57097;
var G__57105 = chunk__56922_57098;
var G__57106 = count__56923_57099;
var G__57107 = (i__56924_57100 + (1));
seq__56921_57097 = G__57104;
chunk__56922_57098 = G__57105;
count__56923_57099 = G__57106;
i__56924_57100 = G__57107;
continue;
} else {
var temp__4657__auto___57108__$2 = cljs.core.seq.call(null,seq__56921_57097);
if(temp__4657__auto___57108__$2){
var seq__56921_57109__$1 = temp__4657__auto___57108__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56921_57109__$1)){
var c__25713__auto___57110 = cljs.core.chunk_first.call(null,seq__56921_57109__$1);
var G__57111 = cljs.core.chunk_rest.call(null,seq__56921_57109__$1);
var G__57112 = c__25713__auto___57110;
var G__57113 = cljs.core.count.call(null,c__25713__auto___57110);
var G__57114 = (0);
seq__56921_57097 = G__57111;
chunk__56922_57098 = G__57112;
count__56923_57099 = G__57113;
i__56924_57100 = G__57114;
continue;
} else {
var vec__56928_57115 = cljs.core.first.call(null,seq__56921_57109__$1);
var col_57116 = cljs.core.nth.call(null,vec__56928_57115,(0),null);
var infos_57117 = cljs.core.nth.call(null,vec__56928_57115,(1),null);
encode_cols.call(null,infos_57117,source_idx_57047,line_57095,col_57116);

var G__57118 = cljs.core.next.call(null,seq__56921_57109__$1);
var G__57119 = null;
var G__57120 = (0);
var G__57121 = (0);
seq__56921_57097 = G__57118;
chunk__56922_57098 = G__57119;
count__56923_57099 = G__57120;
i__56924_57100 = G__57121;
continue;
}
} else {
}
}
break;
}

var G__57122 = cljs.core.next.call(null,seq__56901_57088__$1);
var G__57123 = null;
var G__57124 = (0);
var G__57125 = (0);
seq__56901_57051 = G__57122;
chunk__56902_57052 = G__57123;
count__56903_57053 = G__57124;
i__56904_57054 = G__57125;
continue;
}
} else {
}
}
break;
}

var G__57126 = cljs.core.next.call(null,seq__56855_57040__$1);
var G__57127 = null;
var G__57128 = (0);
var G__57129 = (0);
seq__56855_56951 = G__57126;
chunk__56856_56952 = G__57127;
count__56857_56953 = G__57128;
i__56858_56954 = G__57129;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__56931 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__56766_SHARP_){
return [cljs.core.str(p1__56766_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__56767_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__56767_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__56768_SHARP_){
return clojure.string.join.call(null,",",p1__56768_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__56932 = G__56931;
goog.object.set(G__56932,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__56932;
} else {
return G__56931;
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
var vec__57139 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__57139,(0),null);
var col_map = cljs.core.nth.call(null,vec__57139,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__57142 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__57142,(0),null);
var infos = cljs.core.nth.call(null,vec__57142,(1),null);
var G__57148 = cljs.core.next.call(null,col_map_seq);
var G__57149 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__57142,col,infos,vec__57139,line,col_map){
return (function (v,p__57145){
var map__57146 = p__57145;
var map__57146__$1 = ((((!((map__57146 == null)))?((((map__57146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57146):map__57146);
var gline = cljs.core.get.call(null,map__57146__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__57146__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__57142,col,infos,vec__57139,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__57148;
new_cols = G__57149;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__57150 = cljs.core.next.call(null,line_map_seq);
var G__57151 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__57150;
new_lines = G__57151;
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
var seq__57214_57276 = cljs.core.seq.call(null,reverse_map);
var chunk__57215_57277 = null;
var count__57216_57278 = (0);
var i__57217_57279 = (0);
while(true){
if((i__57217_57279 < count__57216_57278)){
var vec__57218_57280 = cljs.core._nth.call(null,chunk__57215_57277,i__57217_57279);
var line_57281 = cljs.core.nth.call(null,vec__57218_57280,(0),null);
var columns_57282 = cljs.core.nth.call(null,vec__57218_57280,(1),null);
var seq__57221_57283 = cljs.core.seq.call(null,columns_57282);
var chunk__57222_57284 = null;
var count__57223_57285 = (0);
var i__57224_57286 = (0);
while(true){
if((i__57224_57286 < count__57223_57285)){
var vec__57225_57287 = cljs.core._nth.call(null,chunk__57222_57284,i__57224_57286);
var column_57288 = cljs.core.nth.call(null,vec__57225_57287,(0),null);
var column_info_57289 = cljs.core.nth.call(null,vec__57225_57287,(1),null);
var seq__57228_57290 = cljs.core.seq.call(null,column_info_57289);
var chunk__57229_57291 = null;
var count__57230_57292 = (0);
var i__57231_57293 = (0);
while(true){
if((i__57231_57293 < count__57230_57292)){
var map__57232_57294 = cljs.core._nth.call(null,chunk__57229_57291,i__57231_57293);
var map__57232_57295__$1 = ((((!((map__57232_57294 == null)))?((((map__57232_57294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57232_57294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57232_57294):map__57232_57294);
var gline_57296 = cljs.core.get.call(null,map__57232_57295__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57297 = cljs.core.get.call(null,map__57232_57295__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57298 = cljs.core.get.call(null,map__57232_57295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57296], null),cljs.core.fnil.call(null,((function (seq__57228_57290,chunk__57229_57291,count__57230_57292,i__57231_57293,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57232_57294,map__57232_57295__$1,gline_57296,gcol_57297,name_57298,vec__57225_57287,column_57288,column_info_57289,vec__57218_57280,line_57281,columns_57282,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57297], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57281,new cljs.core.Keyword(null,"col","col",-1959363084),column_57288,new cljs.core.Keyword(null,"name","name",1843675177),name_57298], null));
});})(seq__57228_57290,chunk__57229_57291,count__57230_57292,i__57231_57293,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57232_57294,map__57232_57295__$1,gline_57296,gcol_57297,name_57298,vec__57225_57287,column_57288,column_info_57289,vec__57218_57280,line_57281,columns_57282,inverted))
,cljs.core.sorted_map.call(null)));

var G__57299 = seq__57228_57290;
var G__57300 = chunk__57229_57291;
var G__57301 = count__57230_57292;
var G__57302 = (i__57231_57293 + (1));
seq__57228_57290 = G__57299;
chunk__57229_57291 = G__57300;
count__57230_57292 = G__57301;
i__57231_57293 = G__57302;
continue;
} else {
var temp__4657__auto___57303 = cljs.core.seq.call(null,seq__57228_57290);
if(temp__4657__auto___57303){
var seq__57228_57304__$1 = temp__4657__auto___57303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57228_57304__$1)){
var c__25713__auto___57305 = cljs.core.chunk_first.call(null,seq__57228_57304__$1);
var G__57306 = cljs.core.chunk_rest.call(null,seq__57228_57304__$1);
var G__57307 = c__25713__auto___57305;
var G__57308 = cljs.core.count.call(null,c__25713__auto___57305);
var G__57309 = (0);
seq__57228_57290 = G__57306;
chunk__57229_57291 = G__57307;
count__57230_57292 = G__57308;
i__57231_57293 = G__57309;
continue;
} else {
var map__57234_57310 = cljs.core.first.call(null,seq__57228_57304__$1);
var map__57234_57311__$1 = ((((!((map__57234_57310 == null)))?((((map__57234_57310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57234_57310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57234_57310):map__57234_57310);
var gline_57312 = cljs.core.get.call(null,map__57234_57311__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57313 = cljs.core.get.call(null,map__57234_57311__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57314 = cljs.core.get.call(null,map__57234_57311__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57312], null),cljs.core.fnil.call(null,((function (seq__57228_57290,chunk__57229_57291,count__57230_57292,i__57231_57293,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57234_57310,map__57234_57311__$1,gline_57312,gcol_57313,name_57314,seq__57228_57304__$1,temp__4657__auto___57303,vec__57225_57287,column_57288,column_info_57289,vec__57218_57280,line_57281,columns_57282,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57313], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57281,new cljs.core.Keyword(null,"col","col",-1959363084),column_57288,new cljs.core.Keyword(null,"name","name",1843675177),name_57314], null));
});})(seq__57228_57290,chunk__57229_57291,count__57230_57292,i__57231_57293,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57234_57310,map__57234_57311__$1,gline_57312,gcol_57313,name_57314,seq__57228_57304__$1,temp__4657__auto___57303,vec__57225_57287,column_57288,column_info_57289,vec__57218_57280,line_57281,columns_57282,inverted))
,cljs.core.sorted_map.call(null)));

var G__57315 = cljs.core.next.call(null,seq__57228_57304__$1);
var G__57316 = null;
var G__57317 = (0);
var G__57318 = (0);
seq__57228_57290 = G__57315;
chunk__57229_57291 = G__57316;
count__57230_57292 = G__57317;
i__57231_57293 = G__57318;
continue;
}
} else {
}
}
break;
}

var G__57319 = seq__57221_57283;
var G__57320 = chunk__57222_57284;
var G__57321 = count__57223_57285;
var G__57322 = (i__57224_57286 + (1));
seq__57221_57283 = G__57319;
chunk__57222_57284 = G__57320;
count__57223_57285 = G__57321;
i__57224_57286 = G__57322;
continue;
} else {
var temp__4657__auto___57323 = cljs.core.seq.call(null,seq__57221_57283);
if(temp__4657__auto___57323){
var seq__57221_57324__$1 = temp__4657__auto___57323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57221_57324__$1)){
var c__25713__auto___57325 = cljs.core.chunk_first.call(null,seq__57221_57324__$1);
var G__57326 = cljs.core.chunk_rest.call(null,seq__57221_57324__$1);
var G__57327 = c__25713__auto___57325;
var G__57328 = cljs.core.count.call(null,c__25713__auto___57325);
var G__57329 = (0);
seq__57221_57283 = G__57326;
chunk__57222_57284 = G__57327;
count__57223_57285 = G__57328;
i__57224_57286 = G__57329;
continue;
} else {
var vec__57236_57330 = cljs.core.first.call(null,seq__57221_57324__$1);
var column_57331 = cljs.core.nth.call(null,vec__57236_57330,(0),null);
var column_info_57332 = cljs.core.nth.call(null,vec__57236_57330,(1),null);
var seq__57239_57333 = cljs.core.seq.call(null,column_info_57332);
var chunk__57240_57334 = null;
var count__57241_57335 = (0);
var i__57242_57336 = (0);
while(true){
if((i__57242_57336 < count__57241_57335)){
var map__57243_57337 = cljs.core._nth.call(null,chunk__57240_57334,i__57242_57336);
var map__57243_57338__$1 = ((((!((map__57243_57337 == null)))?((((map__57243_57337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57243_57337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57243_57337):map__57243_57337);
var gline_57339 = cljs.core.get.call(null,map__57243_57338__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57340 = cljs.core.get.call(null,map__57243_57338__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57341 = cljs.core.get.call(null,map__57243_57338__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57339], null),cljs.core.fnil.call(null,((function (seq__57239_57333,chunk__57240_57334,count__57241_57335,i__57242_57336,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57243_57337,map__57243_57338__$1,gline_57339,gcol_57340,name_57341,vec__57236_57330,column_57331,column_info_57332,seq__57221_57324__$1,temp__4657__auto___57323,vec__57218_57280,line_57281,columns_57282,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57340], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57281,new cljs.core.Keyword(null,"col","col",-1959363084),column_57331,new cljs.core.Keyword(null,"name","name",1843675177),name_57341], null));
});})(seq__57239_57333,chunk__57240_57334,count__57241_57335,i__57242_57336,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57243_57337,map__57243_57338__$1,gline_57339,gcol_57340,name_57341,vec__57236_57330,column_57331,column_info_57332,seq__57221_57324__$1,temp__4657__auto___57323,vec__57218_57280,line_57281,columns_57282,inverted))
,cljs.core.sorted_map.call(null)));

var G__57342 = seq__57239_57333;
var G__57343 = chunk__57240_57334;
var G__57344 = count__57241_57335;
var G__57345 = (i__57242_57336 + (1));
seq__57239_57333 = G__57342;
chunk__57240_57334 = G__57343;
count__57241_57335 = G__57344;
i__57242_57336 = G__57345;
continue;
} else {
var temp__4657__auto___57346__$1 = cljs.core.seq.call(null,seq__57239_57333);
if(temp__4657__auto___57346__$1){
var seq__57239_57347__$1 = temp__4657__auto___57346__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57239_57347__$1)){
var c__25713__auto___57348 = cljs.core.chunk_first.call(null,seq__57239_57347__$1);
var G__57349 = cljs.core.chunk_rest.call(null,seq__57239_57347__$1);
var G__57350 = c__25713__auto___57348;
var G__57351 = cljs.core.count.call(null,c__25713__auto___57348);
var G__57352 = (0);
seq__57239_57333 = G__57349;
chunk__57240_57334 = G__57350;
count__57241_57335 = G__57351;
i__57242_57336 = G__57352;
continue;
} else {
var map__57245_57353 = cljs.core.first.call(null,seq__57239_57347__$1);
var map__57245_57354__$1 = ((((!((map__57245_57353 == null)))?((((map__57245_57353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57245_57353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57245_57353):map__57245_57353);
var gline_57355 = cljs.core.get.call(null,map__57245_57354__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57356 = cljs.core.get.call(null,map__57245_57354__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57357 = cljs.core.get.call(null,map__57245_57354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57355], null),cljs.core.fnil.call(null,((function (seq__57239_57333,chunk__57240_57334,count__57241_57335,i__57242_57336,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57245_57353,map__57245_57354__$1,gline_57355,gcol_57356,name_57357,seq__57239_57347__$1,temp__4657__auto___57346__$1,vec__57236_57330,column_57331,column_info_57332,seq__57221_57324__$1,temp__4657__auto___57323,vec__57218_57280,line_57281,columns_57282,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57356], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57281,new cljs.core.Keyword(null,"col","col",-1959363084),column_57331,new cljs.core.Keyword(null,"name","name",1843675177),name_57357], null));
});})(seq__57239_57333,chunk__57240_57334,count__57241_57335,i__57242_57336,seq__57221_57283,chunk__57222_57284,count__57223_57285,i__57224_57286,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57245_57353,map__57245_57354__$1,gline_57355,gcol_57356,name_57357,seq__57239_57347__$1,temp__4657__auto___57346__$1,vec__57236_57330,column_57331,column_info_57332,seq__57221_57324__$1,temp__4657__auto___57323,vec__57218_57280,line_57281,columns_57282,inverted))
,cljs.core.sorted_map.call(null)));

var G__57358 = cljs.core.next.call(null,seq__57239_57347__$1);
var G__57359 = null;
var G__57360 = (0);
var G__57361 = (0);
seq__57239_57333 = G__57358;
chunk__57240_57334 = G__57359;
count__57241_57335 = G__57360;
i__57242_57336 = G__57361;
continue;
}
} else {
}
}
break;
}

var G__57362 = cljs.core.next.call(null,seq__57221_57324__$1);
var G__57363 = null;
var G__57364 = (0);
var G__57365 = (0);
seq__57221_57283 = G__57362;
chunk__57222_57284 = G__57363;
count__57223_57285 = G__57364;
i__57224_57286 = G__57365;
continue;
}
} else {
}
}
break;
}

var G__57366 = seq__57214_57276;
var G__57367 = chunk__57215_57277;
var G__57368 = count__57216_57278;
var G__57369 = (i__57217_57279 + (1));
seq__57214_57276 = G__57366;
chunk__57215_57277 = G__57367;
count__57216_57278 = G__57368;
i__57217_57279 = G__57369;
continue;
} else {
var temp__4657__auto___57370 = cljs.core.seq.call(null,seq__57214_57276);
if(temp__4657__auto___57370){
var seq__57214_57371__$1 = temp__4657__auto___57370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57214_57371__$1)){
var c__25713__auto___57372 = cljs.core.chunk_first.call(null,seq__57214_57371__$1);
var G__57373 = cljs.core.chunk_rest.call(null,seq__57214_57371__$1);
var G__57374 = c__25713__auto___57372;
var G__57375 = cljs.core.count.call(null,c__25713__auto___57372);
var G__57376 = (0);
seq__57214_57276 = G__57373;
chunk__57215_57277 = G__57374;
count__57216_57278 = G__57375;
i__57217_57279 = G__57376;
continue;
} else {
var vec__57247_57377 = cljs.core.first.call(null,seq__57214_57371__$1);
var line_57378 = cljs.core.nth.call(null,vec__57247_57377,(0),null);
var columns_57379 = cljs.core.nth.call(null,vec__57247_57377,(1),null);
var seq__57250_57380 = cljs.core.seq.call(null,columns_57379);
var chunk__57251_57381 = null;
var count__57252_57382 = (0);
var i__57253_57383 = (0);
while(true){
if((i__57253_57383 < count__57252_57382)){
var vec__57254_57384 = cljs.core._nth.call(null,chunk__57251_57381,i__57253_57383);
var column_57385 = cljs.core.nth.call(null,vec__57254_57384,(0),null);
var column_info_57386 = cljs.core.nth.call(null,vec__57254_57384,(1),null);
var seq__57257_57387 = cljs.core.seq.call(null,column_info_57386);
var chunk__57258_57388 = null;
var count__57259_57389 = (0);
var i__57260_57390 = (0);
while(true){
if((i__57260_57390 < count__57259_57389)){
var map__57261_57391 = cljs.core._nth.call(null,chunk__57258_57388,i__57260_57390);
var map__57261_57392__$1 = ((((!((map__57261_57391 == null)))?((((map__57261_57391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57261_57391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57261_57391):map__57261_57391);
var gline_57393 = cljs.core.get.call(null,map__57261_57392__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57394 = cljs.core.get.call(null,map__57261_57392__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57395 = cljs.core.get.call(null,map__57261_57392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57393], null),cljs.core.fnil.call(null,((function (seq__57257_57387,chunk__57258_57388,count__57259_57389,i__57260_57390,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57261_57391,map__57261_57392__$1,gline_57393,gcol_57394,name_57395,vec__57254_57384,column_57385,column_info_57386,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57394], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57378,new cljs.core.Keyword(null,"col","col",-1959363084),column_57385,new cljs.core.Keyword(null,"name","name",1843675177),name_57395], null));
});})(seq__57257_57387,chunk__57258_57388,count__57259_57389,i__57260_57390,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57261_57391,map__57261_57392__$1,gline_57393,gcol_57394,name_57395,vec__57254_57384,column_57385,column_info_57386,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted))
,cljs.core.sorted_map.call(null)));

var G__57396 = seq__57257_57387;
var G__57397 = chunk__57258_57388;
var G__57398 = count__57259_57389;
var G__57399 = (i__57260_57390 + (1));
seq__57257_57387 = G__57396;
chunk__57258_57388 = G__57397;
count__57259_57389 = G__57398;
i__57260_57390 = G__57399;
continue;
} else {
var temp__4657__auto___57400__$1 = cljs.core.seq.call(null,seq__57257_57387);
if(temp__4657__auto___57400__$1){
var seq__57257_57401__$1 = temp__4657__auto___57400__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57257_57401__$1)){
var c__25713__auto___57402 = cljs.core.chunk_first.call(null,seq__57257_57401__$1);
var G__57403 = cljs.core.chunk_rest.call(null,seq__57257_57401__$1);
var G__57404 = c__25713__auto___57402;
var G__57405 = cljs.core.count.call(null,c__25713__auto___57402);
var G__57406 = (0);
seq__57257_57387 = G__57403;
chunk__57258_57388 = G__57404;
count__57259_57389 = G__57405;
i__57260_57390 = G__57406;
continue;
} else {
var map__57263_57407 = cljs.core.first.call(null,seq__57257_57401__$1);
var map__57263_57408__$1 = ((((!((map__57263_57407 == null)))?((((map__57263_57407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57263_57407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57263_57407):map__57263_57407);
var gline_57409 = cljs.core.get.call(null,map__57263_57408__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57410 = cljs.core.get.call(null,map__57263_57408__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57411 = cljs.core.get.call(null,map__57263_57408__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57409], null),cljs.core.fnil.call(null,((function (seq__57257_57387,chunk__57258_57388,count__57259_57389,i__57260_57390,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57263_57407,map__57263_57408__$1,gline_57409,gcol_57410,name_57411,seq__57257_57401__$1,temp__4657__auto___57400__$1,vec__57254_57384,column_57385,column_info_57386,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57410], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57378,new cljs.core.Keyword(null,"col","col",-1959363084),column_57385,new cljs.core.Keyword(null,"name","name",1843675177),name_57411], null));
});})(seq__57257_57387,chunk__57258_57388,count__57259_57389,i__57260_57390,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57263_57407,map__57263_57408__$1,gline_57409,gcol_57410,name_57411,seq__57257_57401__$1,temp__4657__auto___57400__$1,vec__57254_57384,column_57385,column_info_57386,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted))
,cljs.core.sorted_map.call(null)));

var G__57412 = cljs.core.next.call(null,seq__57257_57401__$1);
var G__57413 = null;
var G__57414 = (0);
var G__57415 = (0);
seq__57257_57387 = G__57412;
chunk__57258_57388 = G__57413;
count__57259_57389 = G__57414;
i__57260_57390 = G__57415;
continue;
}
} else {
}
}
break;
}

var G__57416 = seq__57250_57380;
var G__57417 = chunk__57251_57381;
var G__57418 = count__57252_57382;
var G__57419 = (i__57253_57383 + (1));
seq__57250_57380 = G__57416;
chunk__57251_57381 = G__57417;
count__57252_57382 = G__57418;
i__57253_57383 = G__57419;
continue;
} else {
var temp__4657__auto___57420__$1 = cljs.core.seq.call(null,seq__57250_57380);
if(temp__4657__auto___57420__$1){
var seq__57250_57421__$1 = temp__4657__auto___57420__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57250_57421__$1)){
var c__25713__auto___57422 = cljs.core.chunk_first.call(null,seq__57250_57421__$1);
var G__57423 = cljs.core.chunk_rest.call(null,seq__57250_57421__$1);
var G__57424 = c__25713__auto___57422;
var G__57425 = cljs.core.count.call(null,c__25713__auto___57422);
var G__57426 = (0);
seq__57250_57380 = G__57423;
chunk__57251_57381 = G__57424;
count__57252_57382 = G__57425;
i__57253_57383 = G__57426;
continue;
} else {
var vec__57265_57427 = cljs.core.first.call(null,seq__57250_57421__$1);
var column_57428 = cljs.core.nth.call(null,vec__57265_57427,(0),null);
var column_info_57429 = cljs.core.nth.call(null,vec__57265_57427,(1),null);
var seq__57268_57430 = cljs.core.seq.call(null,column_info_57429);
var chunk__57269_57431 = null;
var count__57270_57432 = (0);
var i__57271_57433 = (0);
while(true){
if((i__57271_57433 < count__57270_57432)){
var map__57272_57434 = cljs.core._nth.call(null,chunk__57269_57431,i__57271_57433);
var map__57272_57435__$1 = ((((!((map__57272_57434 == null)))?((((map__57272_57434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57272_57434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57272_57434):map__57272_57434);
var gline_57436 = cljs.core.get.call(null,map__57272_57435__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57437 = cljs.core.get.call(null,map__57272_57435__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57438 = cljs.core.get.call(null,map__57272_57435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57436], null),cljs.core.fnil.call(null,((function (seq__57268_57430,chunk__57269_57431,count__57270_57432,i__57271_57433,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57272_57434,map__57272_57435__$1,gline_57436,gcol_57437,name_57438,vec__57265_57427,column_57428,column_info_57429,seq__57250_57421__$1,temp__4657__auto___57420__$1,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57437], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57378,new cljs.core.Keyword(null,"col","col",-1959363084),column_57428,new cljs.core.Keyword(null,"name","name",1843675177),name_57438], null));
});})(seq__57268_57430,chunk__57269_57431,count__57270_57432,i__57271_57433,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57272_57434,map__57272_57435__$1,gline_57436,gcol_57437,name_57438,vec__57265_57427,column_57428,column_info_57429,seq__57250_57421__$1,temp__4657__auto___57420__$1,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted))
,cljs.core.sorted_map.call(null)));

var G__57439 = seq__57268_57430;
var G__57440 = chunk__57269_57431;
var G__57441 = count__57270_57432;
var G__57442 = (i__57271_57433 + (1));
seq__57268_57430 = G__57439;
chunk__57269_57431 = G__57440;
count__57270_57432 = G__57441;
i__57271_57433 = G__57442;
continue;
} else {
var temp__4657__auto___57443__$2 = cljs.core.seq.call(null,seq__57268_57430);
if(temp__4657__auto___57443__$2){
var seq__57268_57444__$1 = temp__4657__auto___57443__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57268_57444__$1)){
var c__25713__auto___57445 = cljs.core.chunk_first.call(null,seq__57268_57444__$1);
var G__57446 = cljs.core.chunk_rest.call(null,seq__57268_57444__$1);
var G__57447 = c__25713__auto___57445;
var G__57448 = cljs.core.count.call(null,c__25713__auto___57445);
var G__57449 = (0);
seq__57268_57430 = G__57446;
chunk__57269_57431 = G__57447;
count__57270_57432 = G__57448;
i__57271_57433 = G__57449;
continue;
} else {
var map__57274_57450 = cljs.core.first.call(null,seq__57268_57444__$1);
var map__57274_57451__$1 = ((((!((map__57274_57450 == null)))?((((map__57274_57450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57274_57450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57274_57450):map__57274_57450);
var gline_57452 = cljs.core.get.call(null,map__57274_57451__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_57453 = cljs.core.get.call(null,map__57274_57451__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_57454 = cljs.core.get.call(null,map__57274_57451__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_57452], null),cljs.core.fnil.call(null,((function (seq__57268_57430,chunk__57269_57431,count__57270_57432,i__57271_57433,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57274_57450,map__57274_57451__$1,gline_57452,gcol_57453,name_57454,seq__57268_57444__$1,temp__4657__auto___57443__$2,vec__57265_57427,column_57428,column_info_57429,seq__57250_57421__$1,temp__4657__auto___57420__$1,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_57453], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_57378,new cljs.core.Keyword(null,"col","col",-1959363084),column_57428,new cljs.core.Keyword(null,"name","name",1843675177),name_57454], null));
});})(seq__57268_57430,chunk__57269_57431,count__57270_57432,i__57271_57433,seq__57250_57380,chunk__57251_57381,count__57252_57382,i__57253_57383,seq__57214_57276,chunk__57215_57277,count__57216_57278,i__57217_57279,map__57274_57450,map__57274_57451__$1,gline_57452,gcol_57453,name_57454,seq__57268_57444__$1,temp__4657__auto___57443__$2,vec__57265_57427,column_57428,column_info_57429,seq__57250_57421__$1,temp__4657__auto___57420__$1,vec__57247_57377,line_57378,columns_57379,seq__57214_57371__$1,temp__4657__auto___57370,inverted))
,cljs.core.sorted_map.call(null)));

var G__57455 = cljs.core.next.call(null,seq__57268_57444__$1);
var G__57456 = null;
var G__57457 = (0);
var G__57458 = (0);
seq__57268_57430 = G__57455;
chunk__57269_57431 = G__57456;
count__57270_57432 = G__57457;
i__57271_57433 = G__57458;
continue;
}
} else {
}
}
break;
}

var G__57459 = cljs.core.next.call(null,seq__57250_57421__$1);
var G__57460 = null;
var G__57461 = (0);
var G__57462 = (0);
seq__57250_57380 = G__57459;
chunk__57251_57381 = G__57460;
count__57252_57382 = G__57461;
i__57253_57383 = G__57462;
continue;
}
} else {
}
}
break;
}

var G__57463 = cljs.core.next.call(null,seq__57214_57371__$1);
var G__57464 = null;
var G__57465 = (0);
var G__57466 = (0);
seq__57214_57276 = G__57463;
chunk__57215_57277 = G__57464;
count__57216_57278 = G__57465;
i__57217_57279 = G__57466;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1479783753896