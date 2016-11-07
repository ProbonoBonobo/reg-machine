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
return cljs.core.reduce.call(null,(function (m,p__27716){
var vec__27717 = p__27716;
var i = cljs.core.nth.call(null,vec__27717,(0),null);
var v = cljs.core.nth.call(null,vec__27717,(1),null);
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
var vec__27723 = seg;
var gcol = cljs.core.nth.call(null,vec__27723,(0),null);
var source = cljs.core.nth.call(null,vec__27723,(1),null);
var line = cljs.core.nth.call(null,vec__27723,(2),null);
var col = cljs.core.nth.call(null,vec__27723,(3),null);
var name = cljs.core.nth.call(null,vec__27723,(4),null);
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
var vec__27732 = seg;
var gcol = cljs.core.nth.call(null,vec__27732,(0),null);
var source = cljs.core.nth.call(null,vec__27732,(1),null);
var line = cljs.core.nth.call(null,vec__27732,(2),null);
var col = cljs.core.nth.call(null,vec__27732,(3),null);
var name = cljs.core.nth.call(null,vec__27732,(4),null);
var vec__27735 = relseg;
var rgcol = cljs.core.nth.call(null,vec__27735,(0),null);
var rsource = cljs.core.nth.call(null,vec__27735,(1),null);
var rline = cljs.core.nth.call(null,vec__27735,(2),null);
var rcol = cljs.core.nth.call(null,vec__27735,(3),null);
var rname = cljs.core.nth.call(null,vec__27735,(4),null);
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
var map__27740 = segmap;
var map__27740__$1 = ((((!((map__27740 == null)))?((((map__27740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27740):map__27740);
var gcol = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__27740,map__27740__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__27740,map__27740__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__27740,map__27740__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__27740,map__27740__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__27740,map__27740__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__27740,map__27740__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args27742 = [];
var len__25826__auto___27748 = arguments.length;
var i__25827__auto___27749 = (0);
while(true){
if((i__25827__auto___27749 < len__25826__auto___27748)){
args27742.push((arguments[i__25827__auto___27749]));

var G__27750 = (i__25827__auto___27749 + (1));
i__25827__auto___27749 = G__27750;
continue;
} else {
}
break;
}

var G__27744 = args27742.length;
switch (G__27744) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27742.length)].join('')));

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
var vec__27745 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27752 = cljs.core.next.call(null,segs__$1);
var G__27753 = nrelseg;
var G__27754 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27752;
relseg__$1 = G__27753;
result__$1 = G__27754;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27745,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27745,(1),null);
var G__27755 = (gline + (1));
var G__27756 = cljs.core.next.call(null,lines__$1);
var G__27757 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27758 = result__$1;
gline = G__27755;
lines__$1 = G__27756;
relseg = G__27757;
result = G__27758;
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
var map__27762 = segmap;
var map__27762__$1 = ((((!((map__27762 == null)))?((((map__27762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27762):map__27762);
var gcol = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__27762,map__27762__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__27762,map__27762__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__27759_SHARP_){
return cljs.core.conj.call(null,p1__27759_SHARP_,d__$1);
});})(map__27762,map__27762__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__27762,map__27762__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args27764 = [];
var len__25826__auto___27770 = arguments.length;
var i__25827__auto___27771 = (0);
while(true){
if((i__25827__auto___27771 < len__25826__auto___27770)){
args27764.push((arguments[i__25827__auto___27771]));

var G__27772 = (i__25827__auto___27771 + (1));
i__25827__auto___27771 = G__27772;
continue;
} else {
}
break;
}

var G__27766 = args27764.length;
switch (G__27766) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27764.length)].join('')));

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
var vec__27767 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27774 = cljs.core.next.call(null,segs__$1);
var G__27775 = nrelseg;
var G__27776 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27774;
relseg__$1 = G__27775;
result__$1 = G__27776;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27767,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27767,(1),null);
var G__27777 = (gline + (1));
var G__27778 = cljs.core.next.call(null,lines__$1);
var G__27779 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27780 = result__$1;
gline = G__27777;
lines__$1 = G__27778;
relseg = G__27779;
result = G__27780;
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
return (function (p__27793){
var vec__27794 = p__27793;
var _ = cljs.core.nth.call(null,vec__27794,(0),null);
var source = cljs.core.nth.call(null,vec__27794,(1),null);
var line = cljs.core.nth.call(null,vec__27794,(2),null);
var col = cljs.core.nth.call(null,vec__27794,(3),null);
var name = cljs.core.nth.call(null,vec__27794,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__27797){
var vec__27798 = p__27797;
var gcol = cljs.core.nth.call(null,vec__27798,(0),null);
var sidx = cljs.core.nth.call(null,vec__27798,(1),null);
var line = cljs.core.nth.call(null,vec__27798,(2),null);
var col = cljs.core.nth.call(null,vec__27798,(3),null);
var name = cljs.core.nth.call(null,vec__27798,(4),null);
var seg = vec__27798;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__27798,gcol,sidx,line,col,name,seg,relseg){
return (function (p__27801){
var vec__27802 = p__27801;
var _ = cljs.core.nth.call(null,vec__27802,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27802,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__27802,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__27802,(3),null);
var lname = cljs.core.nth.call(null,vec__27802,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24751__auto__ = name;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__27798,gcol,sidx,line,col,name,seg,relseg))
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
var seq__27890 = cljs.core.seq.call(null,infos);
var chunk__27891 = null;
var count__27892 = (0);
var i__27893 = (0);
while(true){
if((i__27893 < count__27892)){
var info = cljs.core._nth.call(null,chunk__27891,i__27893);
var segv_27972 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27973 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27974 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27973 > (lc_27974 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27890,chunk__27891,count__27892,i__27893,segv_27972,gline_27973,lc_27974,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27973 - (lc_27974 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27972], null));
});})(seq__27890,chunk__27891,count__27892,i__27893,segv_27972,gline_27973,lc_27974,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27890,chunk__27891,count__27892,i__27893,segv_27972,gline_27973,lc_27974,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27973], null),cljs.core.conj,segv_27972);
});})(seq__27890,chunk__27891,count__27892,i__27893,segv_27972,gline_27973,lc_27974,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__27975 = seq__27890;
var G__27976 = chunk__27891;
var G__27977 = count__27892;
var G__27978 = (i__27893 + (1));
seq__27890 = G__27975;
chunk__27891 = G__27976;
count__27892 = G__27977;
i__27893 = G__27978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27890);
if(temp__4657__auto__){
var seq__27890__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27890__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__27890__$1);
var G__27979 = cljs.core.chunk_rest.call(null,seq__27890__$1);
var G__27980 = c__25562__auto__;
var G__27981 = cljs.core.count.call(null,c__25562__auto__);
var G__27982 = (0);
seq__27890 = G__27979;
chunk__27891 = G__27980;
count__27892 = G__27981;
i__27893 = G__27982;
continue;
} else {
var info = cljs.core.first.call(null,seq__27890__$1);
var segv_27983 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27984 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27985 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27984 > (lc_27985 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27890,chunk__27891,count__27892,i__27893,segv_27983,gline_27984,lc_27985,info,seq__27890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27984 - (lc_27985 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27983], null));
});})(seq__27890,chunk__27891,count__27892,i__27893,segv_27983,gline_27984,lc_27985,info,seq__27890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27890,chunk__27891,count__27892,i__27893,segv_27983,gline_27984,lc_27985,info,seq__27890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27984], null),cljs.core.conj,segv_27983);
});})(seq__27890,chunk__27891,count__27892,i__27893,segv_27983,gline_27984,lc_27985,info,seq__27890__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__27986 = cljs.core.next.call(null,seq__27890__$1);
var G__27987 = null;
var G__27988 = (0);
var G__27989 = (0);
seq__27890 = G__27986;
chunk__27891 = G__27987;
count__27892 = G__27988;
i__27893 = G__27989;
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
var seq__27894_27990 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27895_27991 = null;
var count__27896_27992 = (0);
var i__27897_27993 = (0);
while(true){
if((i__27897_27993 < count__27896_27992)){
var vec__27898_27994 = cljs.core._nth.call(null,chunk__27895_27991,i__27897_27993);
var source_idx_27995 = cljs.core.nth.call(null,vec__27898_27994,(0),null);
var vec__27901_27996 = cljs.core.nth.call(null,vec__27898_27994,(1),null);
var __27997 = cljs.core.nth.call(null,vec__27901_27996,(0),null);
var lines_27998__$1 = cljs.core.nth.call(null,vec__27901_27996,(1),null);
var seq__27904_27999 = cljs.core.seq.call(null,lines_27998__$1);
var chunk__27905_28000 = null;
var count__27906_28001 = (0);
var i__27907_28002 = (0);
while(true){
if((i__27907_28002 < count__27906_28001)){
var vec__27908_28003 = cljs.core._nth.call(null,chunk__27905_28000,i__27907_28002);
var line_28004 = cljs.core.nth.call(null,vec__27908_28003,(0),null);
var cols_28005 = cljs.core.nth.call(null,vec__27908_28003,(1),null);
var seq__27911_28006 = cljs.core.seq.call(null,cols_28005);
var chunk__27912_28007 = null;
var count__27913_28008 = (0);
var i__27914_28009 = (0);
while(true){
if((i__27914_28009 < count__27913_28008)){
var vec__27915_28010 = cljs.core._nth.call(null,chunk__27912_28007,i__27914_28009);
var col_28011 = cljs.core.nth.call(null,vec__27915_28010,(0),null);
var infos_28012 = cljs.core.nth.call(null,vec__27915_28010,(1),null);
encode_cols.call(null,infos_28012,source_idx_27995,line_28004,col_28011);

var G__28013 = seq__27911_28006;
var G__28014 = chunk__27912_28007;
var G__28015 = count__27913_28008;
var G__28016 = (i__27914_28009 + (1));
seq__27911_28006 = G__28013;
chunk__27912_28007 = G__28014;
count__27913_28008 = G__28015;
i__27914_28009 = G__28016;
continue;
} else {
var temp__4657__auto___28017 = cljs.core.seq.call(null,seq__27911_28006);
if(temp__4657__auto___28017){
var seq__27911_28018__$1 = temp__4657__auto___28017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27911_28018__$1)){
var c__25562__auto___28019 = cljs.core.chunk_first.call(null,seq__27911_28018__$1);
var G__28020 = cljs.core.chunk_rest.call(null,seq__27911_28018__$1);
var G__28021 = c__25562__auto___28019;
var G__28022 = cljs.core.count.call(null,c__25562__auto___28019);
var G__28023 = (0);
seq__27911_28006 = G__28020;
chunk__27912_28007 = G__28021;
count__27913_28008 = G__28022;
i__27914_28009 = G__28023;
continue;
} else {
var vec__27918_28024 = cljs.core.first.call(null,seq__27911_28018__$1);
var col_28025 = cljs.core.nth.call(null,vec__27918_28024,(0),null);
var infos_28026 = cljs.core.nth.call(null,vec__27918_28024,(1),null);
encode_cols.call(null,infos_28026,source_idx_27995,line_28004,col_28025);

var G__28027 = cljs.core.next.call(null,seq__27911_28018__$1);
var G__28028 = null;
var G__28029 = (0);
var G__28030 = (0);
seq__27911_28006 = G__28027;
chunk__27912_28007 = G__28028;
count__27913_28008 = G__28029;
i__27914_28009 = G__28030;
continue;
}
} else {
}
}
break;
}

var G__28031 = seq__27904_27999;
var G__28032 = chunk__27905_28000;
var G__28033 = count__27906_28001;
var G__28034 = (i__27907_28002 + (1));
seq__27904_27999 = G__28031;
chunk__27905_28000 = G__28032;
count__27906_28001 = G__28033;
i__27907_28002 = G__28034;
continue;
} else {
var temp__4657__auto___28035 = cljs.core.seq.call(null,seq__27904_27999);
if(temp__4657__auto___28035){
var seq__27904_28036__$1 = temp__4657__auto___28035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27904_28036__$1)){
var c__25562__auto___28037 = cljs.core.chunk_first.call(null,seq__27904_28036__$1);
var G__28038 = cljs.core.chunk_rest.call(null,seq__27904_28036__$1);
var G__28039 = c__25562__auto___28037;
var G__28040 = cljs.core.count.call(null,c__25562__auto___28037);
var G__28041 = (0);
seq__27904_27999 = G__28038;
chunk__27905_28000 = G__28039;
count__27906_28001 = G__28040;
i__27907_28002 = G__28041;
continue;
} else {
var vec__27921_28042 = cljs.core.first.call(null,seq__27904_28036__$1);
var line_28043 = cljs.core.nth.call(null,vec__27921_28042,(0),null);
var cols_28044 = cljs.core.nth.call(null,vec__27921_28042,(1),null);
var seq__27924_28045 = cljs.core.seq.call(null,cols_28044);
var chunk__27925_28046 = null;
var count__27926_28047 = (0);
var i__27927_28048 = (0);
while(true){
if((i__27927_28048 < count__27926_28047)){
var vec__27928_28049 = cljs.core._nth.call(null,chunk__27925_28046,i__27927_28048);
var col_28050 = cljs.core.nth.call(null,vec__27928_28049,(0),null);
var infos_28051 = cljs.core.nth.call(null,vec__27928_28049,(1),null);
encode_cols.call(null,infos_28051,source_idx_27995,line_28043,col_28050);

var G__28052 = seq__27924_28045;
var G__28053 = chunk__27925_28046;
var G__28054 = count__27926_28047;
var G__28055 = (i__27927_28048 + (1));
seq__27924_28045 = G__28052;
chunk__27925_28046 = G__28053;
count__27926_28047 = G__28054;
i__27927_28048 = G__28055;
continue;
} else {
var temp__4657__auto___28056__$1 = cljs.core.seq.call(null,seq__27924_28045);
if(temp__4657__auto___28056__$1){
var seq__27924_28057__$1 = temp__4657__auto___28056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27924_28057__$1)){
var c__25562__auto___28058 = cljs.core.chunk_first.call(null,seq__27924_28057__$1);
var G__28059 = cljs.core.chunk_rest.call(null,seq__27924_28057__$1);
var G__28060 = c__25562__auto___28058;
var G__28061 = cljs.core.count.call(null,c__25562__auto___28058);
var G__28062 = (0);
seq__27924_28045 = G__28059;
chunk__27925_28046 = G__28060;
count__27926_28047 = G__28061;
i__27927_28048 = G__28062;
continue;
} else {
var vec__27931_28063 = cljs.core.first.call(null,seq__27924_28057__$1);
var col_28064 = cljs.core.nth.call(null,vec__27931_28063,(0),null);
var infos_28065 = cljs.core.nth.call(null,vec__27931_28063,(1),null);
encode_cols.call(null,infos_28065,source_idx_27995,line_28043,col_28064);

var G__28066 = cljs.core.next.call(null,seq__27924_28057__$1);
var G__28067 = null;
var G__28068 = (0);
var G__28069 = (0);
seq__27924_28045 = G__28066;
chunk__27925_28046 = G__28067;
count__27926_28047 = G__28068;
i__27927_28048 = G__28069;
continue;
}
} else {
}
}
break;
}

var G__28070 = cljs.core.next.call(null,seq__27904_28036__$1);
var G__28071 = null;
var G__28072 = (0);
var G__28073 = (0);
seq__27904_27999 = G__28070;
chunk__27905_28000 = G__28071;
count__27906_28001 = G__28072;
i__27907_28002 = G__28073;
continue;
}
} else {
}
}
break;
}

var G__28074 = seq__27894_27990;
var G__28075 = chunk__27895_27991;
var G__28076 = count__27896_27992;
var G__28077 = (i__27897_27993 + (1));
seq__27894_27990 = G__28074;
chunk__27895_27991 = G__28075;
count__27896_27992 = G__28076;
i__27897_27993 = G__28077;
continue;
} else {
var temp__4657__auto___28078 = cljs.core.seq.call(null,seq__27894_27990);
if(temp__4657__auto___28078){
var seq__27894_28079__$1 = temp__4657__auto___28078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27894_28079__$1)){
var c__25562__auto___28080 = cljs.core.chunk_first.call(null,seq__27894_28079__$1);
var G__28081 = cljs.core.chunk_rest.call(null,seq__27894_28079__$1);
var G__28082 = c__25562__auto___28080;
var G__28083 = cljs.core.count.call(null,c__25562__auto___28080);
var G__28084 = (0);
seq__27894_27990 = G__28081;
chunk__27895_27991 = G__28082;
count__27896_27992 = G__28083;
i__27897_27993 = G__28084;
continue;
} else {
var vec__27934_28085 = cljs.core.first.call(null,seq__27894_28079__$1);
var source_idx_28086 = cljs.core.nth.call(null,vec__27934_28085,(0),null);
var vec__27937_28087 = cljs.core.nth.call(null,vec__27934_28085,(1),null);
var __28088 = cljs.core.nth.call(null,vec__27937_28087,(0),null);
var lines_28089__$1 = cljs.core.nth.call(null,vec__27937_28087,(1),null);
var seq__27940_28090 = cljs.core.seq.call(null,lines_28089__$1);
var chunk__27941_28091 = null;
var count__27942_28092 = (0);
var i__27943_28093 = (0);
while(true){
if((i__27943_28093 < count__27942_28092)){
var vec__27944_28094 = cljs.core._nth.call(null,chunk__27941_28091,i__27943_28093);
var line_28095 = cljs.core.nth.call(null,vec__27944_28094,(0),null);
var cols_28096 = cljs.core.nth.call(null,vec__27944_28094,(1),null);
var seq__27947_28097 = cljs.core.seq.call(null,cols_28096);
var chunk__27948_28098 = null;
var count__27949_28099 = (0);
var i__27950_28100 = (0);
while(true){
if((i__27950_28100 < count__27949_28099)){
var vec__27951_28101 = cljs.core._nth.call(null,chunk__27948_28098,i__27950_28100);
var col_28102 = cljs.core.nth.call(null,vec__27951_28101,(0),null);
var infos_28103 = cljs.core.nth.call(null,vec__27951_28101,(1),null);
encode_cols.call(null,infos_28103,source_idx_28086,line_28095,col_28102);

var G__28104 = seq__27947_28097;
var G__28105 = chunk__27948_28098;
var G__28106 = count__27949_28099;
var G__28107 = (i__27950_28100 + (1));
seq__27947_28097 = G__28104;
chunk__27948_28098 = G__28105;
count__27949_28099 = G__28106;
i__27950_28100 = G__28107;
continue;
} else {
var temp__4657__auto___28108__$1 = cljs.core.seq.call(null,seq__27947_28097);
if(temp__4657__auto___28108__$1){
var seq__27947_28109__$1 = temp__4657__auto___28108__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27947_28109__$1)){
var c__25562__auto___28110 = cljs.core.chunk_first.call(null,seq__27947_28109__$1);
var G__28111 = cljs.core.chunk_rest.call(null,seq__27947_28109__$1);
var G__28112 = c__25562__auto___28110;
var G__28113 = cljs.core.count.call(null,c__25562__auto___28110);
var G__28114 = (0);
seq__27947_28097 = G__28111;
chunk__27948_28098 = G__28112;
count__27949_28099 = G__28113;
i__27950_28100 = G__28114;
continue;
} else {
var vec__27954_28115 = cljs.core.first.call(null,seq__27947_28109__$1);
var col_28116 = cljs.core.nth.call(null,vec__27954_28115,(0),null);
var infos_28117 = cljs.core.nth.call(null,vec__27954_28115,(1),null);
encode_cols.call(null,infos_28117,source_idx_28086,line_28095,col_28116);

var G__28118 = cljs.core.next.call(null,seq__27947_28109__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__27947_28097 = G__28118;
chunk__27948_28098 = G__28119;
count__27949_28099 = G__28120;
i__27950_28100 = G__28121;
continue;
}
} else {
}
}
break;
}

var G__28122 = seq__27940_28090;
var G__28123 = chunk__27941_28091;
var G__28124 = count__27942_28092;
var G__28125 = (i__27943_28093 + (1));
seq__27940_28090 = G__28122;
chunk__27941_28091 = G__28123;
count__27942_28092 = G__28124;
i__27943_28093 = G__28125;
continue;
} else {
var temp__4657__auto___28126__$1 = cljs.core.seq.call(null,seq__27940_28090);
if(temp__4657__auto___28126__$1){
var seq__27940_28127__$1 = temp__4657__auto___28126__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27940_28127__$1)){
var c__25562__auto___28128 = cljs.core.chunk_first.call(null,seq__27940_28127__$1);
var G__28129 = cljs.core.chunk_rest.call(null,seq__27940_28127__$1);
var G__28130 = c__25562__auto___28128;
var G__28131 = cljs.core.count.call(null,c__25562__auto___28128);
var G__28132 = (0);
seq__27940_28090 = G__28129;
chunk__27941_28091 = G__28130;
count__27942_28092 = G__28131;
i__27943_28093 = G__28132;
continue;
} else {
var vec__27957_28133 = cljs.core.first.call(null,seq__27940_28127__$1);
var line_28134 = cljs.core.nth.call(null,vec__27957_28133,(0),null);
var cols_28135 = cljs.core.nth.call(null,vec__27957_28133,(1),null);
var seq__27960_28136 = cljs.core.seq.call(null,cols_28135);
var chunk__27961_28137 = null;
var count__27962_28138 = (0);
var i__27963_28139 = (0);
while(true){
if((i__27963_28139 < count__27962_28138)){
var vec__27964_28140 = cljs.core._nth.call(null,chunk__27961_28137,i__27963_28139);
var col_28141 = cljs.core.nth.call(null,vec__27964_28140,(0),null);
var infos_28142 = cljs.core.nth.call(null,vec__27964_28140,(1),null);
encode_cols.call(null,infos_28142,source_idx_28086,line_28134,col_28141);

var G__28143 = seq__27960_28136;
var G__28144 = chunk__27961_28137;
var G__28145 = count__27962_28138;
var G__28146 = (i__27963_28139 + (1));
seq__27960_28136 = G__28143;
chunk__27961_28137 = G__28144;
count__27962_28138 = G__28145;
i__27963_28139 = G__28146;
continue;
} else {
var temp__4657__auto___28147__$2 = cljs.core.seq.call(null,seq__27960_28136);
if(temp__4657__auto___28147__$2){
var seq__27960_28148__$1 = temp__4657__auto___28147__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27960_28148__$1)){
var c__25562__auto___28149 = cljs.core.chunk_first.call(null,seq__27960_28148__$1);
var G__28150 = cljs.core.chunk_rest.call(null,seq__27960_28148__$1);
var G__28151 = c__25562__auto___28149;
var G__28152 = cljs.core.count.call(null,c__25562__auto___28149);
var G__28153 = (0);
seq__27960_28136 = G__28150;
chunk__27961_28137 = G__28151;
count__27962_28138 = G__28152;
i__27963_28139 = G__28153;
continue;
} else {
var vec__27967_28154 = cljs.core.first.call(null,seq__27960_28148__$1);
var col_28155 = cljs.core.nth.call(null,vec__27967_28154,(0),null);
var infos_28156 = cljs.core.nth.call(null,vec__27967_28154,(1),null);
encode_cols.call(null,infos_28156,source_idx_28086,line_28134,col_28155);

var G__28157 = cljs.core.next.call(null,seq__27960_28148__$1);
var G__28158 = null;
var G__28159 = (0);
var G__28160 = (0);
seq__27960_28136 = G__28157;
chunk__27961_28137 = G__28158;
count__27962_28138 = G__28159;
i__27963_28139 = G__28160;
continue;
}
} else {
}
}
break;
}

var G__28161 = cljs.core.next.call(null,seq__27940_28127__$1);
var G__28162 = null;
var G__28163 = (0);
var G__28164 = (0);
seq__27940_28090 = G__28161;
chunk__27941_28091 = G__28162;
count__27942_28092 = G__28163;
i__27943_28093 = G__28164;
continue;
}
} else {
}
}
break;
}

var G__28165 = cljs.core.next.call(null,seq__27894_28079__$1);
var G__28166 = null;
var G__28167 = (0);
var G__28168 = (0);
seq__27894_27990 = G__28165;
chunk__27895_27991 = G__28166;
count__27896_27992 = G__28167;
i__27897_27993 = G__28168;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27970 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27805_SHARP_){
return [cljs.core.str(p1__27805_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27806_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__27806_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27807_SHARP_){
return clojure.string.join.call(null,",",p1__27807_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__27971 = G__27970;
goog.object.set(G__27971,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27971;
} else {
return G__27970;
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
var vec__28178 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28178,(0),null);
var col_map = cljs.core.nth.call(null,vec__28178,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28181 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28181,(0),null);
var infos = cljs.core.nth.call(null,vec__28181,(1),null);
var G__28187 = cljs.core.next.call(null,col_map_seq);
var G__28188 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28181,col,infos,vec__28178,line,col_map){
return (function (v,p__28184){
var map__28185 = p__28184;
var map__28185__$1 = ((((!((map__28185 == null)))?((((map__28185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28185):map__28185);
var gline = cljs.core.get.call(null,map__28185__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28185__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28181,col,infos,vec__28178,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28187;
new_cols = G__28188;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28189 = cljs.core.next.call(null,line_map_seq);
var G__28190 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28189;
new_lines = G__28190;
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
var seq__28253_28315 = cljs.core.seq.call(null,reverse_map);
var chunk__28254_28316 = null;
var count__28255_28317 = (0);
var i__28256_28318 = (0);
while(true){
if((i__28256_28318 < count__28255_28317)){
var vec__28257_28319 = cljs.core._nth.call(null,chunk__28254_28316,i__28256_28318);
var line_28320 = cljs.core.nth.call(null,vec__28257_28319,(0),null);
var columns_28321 = cljs.core.nth.call(null,vec__28257_28319,(1),null);
var seq__28260_28322 = cljs.core.seq.call(null,columns_28321);
var chunk__28261_28323 = null;
var count__28262_28324 = (0);
var i__28263_28325 = (0);
while(true){
if((i__28263_28325 < count__28262_28324)){
var vec__28264_28326 = cljs.core._nth.call(null,chunk__28261_28323,i__28263_28325);
var column_28327 = cljs.core.nth.call(null,vec__28264_28326,(0),null);
var column_info_28328 = cljs.core.nth.call(null,vec__28264_28326,(1),null);
var seq__28267_28329 = cljs.core.seq.call(null,column_info_28328);
var chunk__28268_28330 = null;
var count__28269_28331 = (0);
var i__28270_28332 = (0);
while(true){
if((i__28270_28332 < count__28269_28331)){
var map__28271_28333 = cljs.core._nth.call(null,chunk__28268_28330,i__28270_28332);
var map__28271_28334__$1 = ((((!((map__28271_28333 == null)))?((((map__28271_28333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28271_28333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28271_28333):map__28271_28333);
var gline_28335 = cljs.core.get.call(null,map__28271_28334__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28336 = cljs.core.get.call(null,map__28271_28334__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28337 = cljs.core.get.call(null,map__28271_28334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28335], null),cljs.core.fnil.call(null,((function (seq__28267_28329,chunk__28268_28330,count__28269_28331,i__28270_28332,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28271_28333,map__28271_28334__$1,gline_28335,gcol_28336,name_28337,vec__28264_28326,column_28327,column_info_28328,vec__28257_28319,line_28320,columns_28321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28336], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28320,new cljs.core.Keyword(null,"col","col",-1959363084),column_28327,new cljs.core.Keyword(null,"name","name",1843675177),name_28337], null));
});})(seq__28267_28329,chunk__28268_28330,count__28269_28331,i__28270_28332,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28271_28333,map__28271_28334__$1,gline_28335,gcol_28336,name_28337,vec__28264_28326,column_28327,column_info_28328,vec__28257_28319,line_28320,columns_28321,inverted))
,cljs.core.sorted_map.call(null)));

var G__28338 = seq__28267_28329;
var G__28339 = chunk__28268_28330;
var G__28340 = count__28269_28331;
var G__28341 = (i__28270_28332 + (1));
seq__28267_28329 = G__28338;
chunk__28268_28330 = G__28339;
count__28269_28331 = G__28340;
i__28270_28332 = G__28341;
continue;
} else {
var temp__4657__auto___28342 = cljs.core.seq.call(null,seq__28267_28329);
if(temp__4657__auto___28342){
var seq__28267_28343__$1 = temp__4657__auto___28342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28267_28343__$1)){
var c__25562__auto___28344 = cljs.core.chunk_first.call(null,seq__28267_28343__$1);
var G__28345 = cljs.core.chunk_rest.call(null,seq__28267_28343__$1);
var G__28346 = c__25562__auto___28344;
var G__28347 = cljs.core.count.call(null,c__25562__auto___28344);
var G__28348 = (0);
seq__28267_28329 = G__28345;
chunk__28268_28330 = G__28346;
count__28269_28331 = G__28347;
i__28270_28332 = G__28348;
continue;
} else {
var map__28273_28349 = cljs.core.first.call(null,seq__28267_28343__$1);
var map__28273_28350__$1 = ((((!((map__28273_28349 == null)))?((((map__28273_28349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28273_28349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28273_28349):map__28273_28349);
var gline_28351 = cljs.core.get.call(null,map__28273_28350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28352 = cljs.core.get.call(null,map__28273_28350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28353 = cljs.core.get.call(null,map__28273_28350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28351], null),cljs.core.fnil.call(null,((function (seq__28267_28329,chunk__28268_28330,count__28269_28331,i__28270_28332,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28273_28349,map__28273_28350__$1,gline_28351,gcol_28352,name_28353,seq__28267_28343__$1,temp__4657__auto___28342,vec__28264_28326,column_28327,column_info_28328,vec__28257_28319,line_28320,columns_28321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28352], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28320,new cljs.core.Keyword(null,"col","col",-1959363084),column_28327,new cljs.core.Keyword(null,"name","name",1843675177),name_28353], null));
});})(seq__28267_28329,chunk__28268_28330,count__28269_28331,i__28270_28332,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28273_28349,map__28273_28350__$1,gline_28351,gcol_28352,name_28353,seq__28267_28343__$1,temp__4657__auto___28342,vec__28264_28326,column_28327,column_info_28328,vec__28257_28319,line_28320,columns_28321,inverted))
,cljs.core.sorted_map.call(null)));

var G__28354 = cljs.core.next.call(null,seq__28267_28343__$1);
var G__28355 = null;
var G__28356 = (0);
var G__28357 = (0);
seq__28267_28329 = G__28354;
chunk__28268_28330 = G__28355;
count__28269_28331 = G__28356;
i__28270_28332 = G__28357;
continue;
}
} else {
}
}
break;
}

var G__28358 = seq__28260_28322;
var G__28359 = chunk__28261_28323;
var G__28360 = count__28262_28324;
var G__28361 = (i__28263_28325 + (1));
seq__28260_28322 = G__28358;
chunk__28261_28323 = G__28359;
count__28262_28324 = G__28360;
i__28263_28325 = G__28361;
continue;
} else {
var temp__4657__auto___28362 = cljs.core.seq.call(null,seq__28260_28322);
if(temp__4657__auto___28362){
var seq__28260_28363__$1 = temp__4657__auto___28362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28260_28363__$1)){
var c__25562__auto___28364 = cljs.core.chunk_first.call(null,seq__28260_28363__$1);
var G__28365 = cljs.core.chunk_rest.call(null,seq__28260_28363__$1);
var G__28366 = c__25562__auto___28364;
var G__28367 = cljs.core.count.call(null,c__25562__auto___28364);
var G__28368 = (0);
seq__28260_28322 = G__28365;
chunk__28261_28323 = G__28366;
count__28262_28324 = G__28367;
i__28263_28325 = G__28368;
continue;
} else {
var vec__28275_28369 = cljs.core.first.call(null,seq__28260_28363__$1);
var column_28370 = cljs.core.nth.call(null,vec__28275_28369,(0),null);
var column_info_28371 = cljs.core.nth.call(null,vec__28275_28369,(1),null);
var seq__28278_28372 = cljs.core.seq.call(null,column_info_28371);
var chunk__28279_28373 = null;
var count__28280_28374 = (0);
var i__28281_28375 = (0);
while(true){
if((i__28281_28375 < count__28280_28374)){
var map__28282_28376 = cljs.core._nth.call(null,chunk__28279_28373,i__28281_28375);
var map__28282_28377__$1 = ((((!((map__28282_28376 == null)))?((((map__28282_28376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28282_28376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28282_28376):map__28282_28376);
var gline_28378 = cljs.core.get.call(null,map__28282_28377__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28379 = cljs.core.get.call(null,map__28282_28377__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28380 = cljs.core.get.call(null,map__28282_28377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28378], null),cljs.core.fnil.call(null,((function (seq__28278_28372,chunk__28279_28373,count__28280_28374,i__28281_28375,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28282_28376,map__28282_28377__$1,gline_28378,gcol_28379,name_28380,vec__28275_28369,column_28370,column_info_28371,seq__28260_28363__$1,temp__4657__auto___28362,vec__28257_28319,line_28320,columns_28321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28379], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28320,new cljs.core.Keyword(null,"col","col",-1959363084),column_28370,new cljs.core.Keyword(null,"name","name",1843675177),name_28380], null));
});})(seq__28278_28372,chunk__28279_28373,count__28280_28374,i__28281_28375,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28282_28376,map__28282_28377__$1,gline_28378,gcol_28379,name_28380,vec__28275_28369,column_28370,column_info_28371,seq__28260_28363__$1,temp__4657__auto___28362,vec__28257_28319,line_28320,columns_28321,inverted))
,cljs.core.sorted_map.call(null)));

var G__28381 = seq__28278_28372;
var G__28382 = chunk__28279_28373;
var G__28383 = count__28280_28374;
var G__28384 = (i__28281_28375 + (1));
seq__28278_28372 = G__28381;
chunk__28279_28373 = G__28382;
count__28280_28374 = G__28383;
i__28281_28375 = G__28384;
continue;
} else {
var temp__4657__auto___28385__$1 = cljs.core.seq.call(null,seq__28278_28372);
if(temp__4657__auto___28385__$1){
var seq__28278_28386__$1 = temp__4657__auto___28385__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28278_28386__$1)){
var c__25562__auto___28387 = cljs.core.chunk_first.call(null,seq__28278_28386__$1);
var G__28388 = cljs.core.chunk_rest.call(null,seq__28278_28386__$1);
var G__28389 = c__25562__auto___28387;
var G__28390 = cljs.core.count.call(null,c__25562__auto___28387);
var G__28391 = (0);
seq__28278_28372 = G__28388;
chunk__28279_28373 = G__28389;
count__28280_28374 = G__28390;
i__28281_28375 = G__28391;
continue;
} else {
var map__28284_28392 = cljs.core.first.call(null,seq__28278_28386__$1);
var map__28284_28393__$1 = ((((!((map__28284_28392 == null)))?((((map__28284_28392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28284_28392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28284_28392):map__28284_28392);
var gline_28394 = cljs.core.get.call(null,map__28284_28393__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28395 = cljs.core.get.call(null,map__28284_28393__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28396 = cljs.core.get.call(null,map__28284_28393__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28394], null),cljs.core.fnil.call(null,((function (seq__28278_28372,chunk__28279_28373,count__28280_28374,i__28281_28375,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28284_28392,map__28284_28393__$1,gline_28394,gcol_28395,name_28396,seq__28278_28386__$1,temp__4657__auto___28385__$1,vec__28275_28369,column_28370,column_info_28371,seq__28260_28363__$1,temp__4657__auto___28362,vec__28257_28319,line_28320,columns_28321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28395], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28320,new cljs.core.Keyword(null,"col","col",-1959363084),column_28370,new cljs.core.Keyword(null,"name","name",1843675177),name_28396], null));
});})(seq__28278_28372,chunk__28279_28373,count__28280_28374,i__28281_28375,seq__28260_28322,chunk__28261_28323,count__28262_28324,i__28263_28325,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28284_28392,map__28284_28393__$1,gline_28394,gcol_28395,name_28396,seq__28278_28386__$1,temp__4657__auto___28385__$1,vec__28275_28369,column_28370,column_info_28371,seq__28260_28363__$1,temp__4657__auto___28362,vec__28257_28319,line_28320,columns_28321,inverted))
,cljs.core.sorted_map.call(null)));

var G__28397 = cljs.core.next.call(null,seq__28278_28386__$1);
var G__28398 = null;
var G__28399 = (0);
var G__28400 = (0);
seq__28278_28372 = G__28397;
chunk__28279_28373 = G__28398;
count__28280_28374 = G__28399;
i__28281_28375 = G__28400;
continue;
}
} else {
}
}
break;
}

var G__28401 = cljs.core.next.call(null,seq__28260_28363__$1);
var G__28402 = null;
var G__28403 = (0);
var G__28404 = (0);
seq__28260_28322 = G__28401;
chunk__28261_28323 = G__28402;
count__28262_28324 = G__28403;
i__28263_28325 = G__28404;
continue;
}
} else {
}
}
break;
}

var G__28405 = seq__28253_28315;
var G__28406 = chunk__28254_28316;
var G__28407 = count__28255_28317;
var G__28408 = (i__28256_28318 + (1));
seq__28253_28315 = G__28405;
chunk__28254_28316 = G__28406;
count__28255_28317 = G__28407;
i__28256_28318 = G__28408;
continue;
} else {
var temp__4657__auto___28409 = cljs.core.seq.call(null,seq__28253_28315);
if(temp__4657__auto___28409){
var seq__28253_28410__$1 = temp__4657__auto___28409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28253_28410__$1)){
var c__25562__auto___28411 = cljs.core.chunk_first.call(null,seq__28253_28410__$1);
var G__28412 = cljs.core.chunk_rest.call(null,seq__28253_28410__$1);
var G__28413 = c__25562__auto___28411;
var G__28414 = cljs.core.count.call(null,c__25562__auto___28411);
var G__28415 = (0);
seq__28253_28315 = G__28412;
chunk__28254_28316 = G__28413;
count__28255_28317 = G__28414;
i__28256_28318 = G__28415;
continue;
} else {
var vec__28286_28416 = cljs.core.first.call(null,seq__28253_28410__$1);
var line_28417 = cljs.core.nth.call(null,vec__28286_28416,(0),null);
var columns_28418 = cljs.core.nth.call(null,vec__28286_28416,(1),null);
var seq__28289_28419 = cljs.core.seq.call(null,columns_28418);
var chunk__28290_28420 = null;
var count__28291_28421 = (0);
var i__28292_28422 = (0);
while(true){
if((i__28292_28422 < count__28291_28421)){
var vec__28293_28423 = cljs.core._nth.call(null,chunk__28290_28420,i__28292_28422);
var column_28424 = cljs.core.nth.call(null,vec__28293_28423,(0),null);
var column_info_28425 = cljs.core.nth.call(null,vec__28293_28423,(1),null);
var seq__28296_28426 = cljs.core.seq.call(null,column_info_28425);
var chunk__28297_28427 = null;
var count__28298_28428 = (0);
var i__28299_28429 = (0);
while(true){
if((i__28299_28429 < count__28298_28428)){
var map__28300_28430 = cljs.core._nth.call(null,chunk__28297_28427,i__28299_28429);
var map__28300_28431__$1 = ((((!((map__28300_28430 == null)))?((((map__28300_28430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28300_28430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28300_28430):map__28300_28430);
var gline_28432 = cljs.core.get.call(null,map__28300_28431__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28433 = cljs.core.get.call(null,map__28300_28431__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28434 = cljs.core.get.call(null,map__28300_28431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28432], null),cljs.core.fnil.call(null,((function (seq__28296_28426,chunk__28297_28427,count__28298_28428,i__28299_28429,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28300_28430,map__28300_28431__$1,gline_28432,gcol_28433,name_28434,vec__28293_28423,column_28424,column_info_28425,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28433], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28417,new cljs.core.Keyword(null,"col","col",-1959363084),column_28424,new cljs.core.Keyword(null,"name","name",1843675177),name_28434], null));
});})(seq__28296_28426,chunk__28297_28427,count__28298_28428,i__28299_28429,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28300_28430,map__28300_28431__$1,gline_28432,gcol_28433,name_28434,vec__28293_28423,column_28424,column_info_28425,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted))
,cljs.core.sorted_map.call(null)));

var G__28435 = seq__28296_28426;
var G__28436 = chunk__28297_28427;
var G__28437 = count__28298_28428;
var G__28438 = (i__28299_28429 + (1));
seq__28296_28426 = G__28435;
chunk__28297_28427 = G__28436;
count__28298_28428 = G__28437;
i__28299_28429 = G__28438;
continue;
} else {
var temp__4657__auto___28439__$1 = cljs.core.seq.call(null,seq__28296_28426);
if(temp__4657__auto___28439__$1){
var seq__28296_28440__$1 = temp__4657__auto___28439__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28296_28440__$1)){
var c__25562__auto___28441 = cljs.core.chunk_first.call(null,seq__28296_28440__$1);
var G__28442 = cljs.core.chunk_rest.call(null,seq__28296_28440__$1);
var G__28443 = c__25562__auto___28441;
var G__28444 = cljs.core.count.call(null,c__25562__auto___28441);
var G__28445 = (0);
seq__28296_28426 = G__28442;
chunk__28297_28427 = G__28443;
count__28298_28428 = G__28444;
i__28299_28429 = G__28445;
continue;
} else {
var map__28302_28446 = cljs.core.first.call(null,seq__28296_28440__$1);
var map__28302_28447__$1 = ((((!((map__28302_28446 == null)))?((((map__28302_28446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302_28446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302_28446):map__28302_28446);
var gline_28448 = cljs.core.get.call(null,map__28302_28447__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28449 = cljs.core.get.call(null,map__28302_28447__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28450 = cljs.core.get.call(null,map__28302_28447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28448], null),cljs.core.fnil.call(null,((function (seq__28296_28426,chunk__28297_28427,count__28298_28428,i__28299_28429,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28302_28446,map__28302_28447__$1,gline_28448,gcol_28449,name_28450,seq__28296_28440__$1,temp__4657__auto___28439__$1,vec__28293_28423,column_28424,column_info_28425,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28449], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28417,new cljs.core.Keyword(null,"col","col",-1959363084),column_28424,new cljs.core.Keyword(null,"name","name",1843675177),name_28450], null));
});})(seq__28296_28426,chunk__28297_28427,count__28298_28428,i__28299_28429,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28302_28446,map__28302_28447__$1,gline_28448,gcol_28449,name_28450,seq__28296_28440__$1,temp__4657__auto___28439__$1,vec__28293_28423,column_28424,column_info_28425,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted))
,cljs.core.sorted_map.call(null)));

var G__28451 = cljs.core.next.call(null,seq__28296_28440__$1);
var G__28452 = null;
var G__28453 = (0);
var G__28454 = (0);
seq__28296_28426 = G__28451;
chunk__28297_28427 = G__28452;
count__28298_28428 = G__28453;
i__28299_28429 = G__28454;
continue;
}
} else {
}
}
break;
}

var G__28455 = seq__28289_28419;
var G__28456 = chunk__28290_28420;
var G__28457 = count__28291_28421;
var G__28458 = (i__28292_28422 + (1));
seq__28289_28419 = G__28455;
chunk__28290_28420 = G__28456;
count__28291_28421 = G__28457;
i__28292_28422 = G__28458;
continue;
} else {
var temp__4657__auto___28459__$1 = cljs.core.seq.call(null,seq__28289_28419);
if(temp__4657__auto___28459__$1){
var seq__28289_28460__$1 = temp__4657__auto___28459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28289_28460__$1)){
var c__25562__auto___28461 = cljs.core.chunk_first.call(null,seq__28289_28460__$1);
var G__28462 = cljs.core.chunk_rest.call(null,seq__28289_28460__$1);
var G__28463 = c__25562__auto___28461;
var G__28464 = cljs.core.count.call(null,c__25562__auto___28461);
var G__28465 = (0);
seq__28289_28419 = G__28462;
chunk__28290_28420 = G__28463;
count__28291_28421 = G__28464;
i__28292_28422 = G__28465;
continue;
} else {
var vec__28304_28466 = cljs.core.first.call(null,seq__28289_28460__$1);
var column_28467 = cljs.core.nth.call(null,vec__28304_28466,(0),null);
var column_info_28468 = cljs.core.nth.call(null,vec__28304_28466,(1),null);
var seq__28307_28469 = cljs.core.seq.call(null,column_info_28468);
var chunk__28308_28470 = null;
var count__28309_28471 = (0);
var i__28310_28472 = (0);
while(true){
if((i__28310_28472 < count__28309_28471)){
var map__28311_28473 = cljs.core._nth.call(null,chunk__28308_28470,i__28310_28472);
var map__28311_28474__$1 = ((((!((map__28311_28473 == null)))?((((map__28311_28473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28311_28473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311_28473):map__28311_28473);
var gline_28475 = cljs.core.get.call(null,map__28311_28474__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28476 = cljs.core.get.call(null,map__28311_28474__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28477 = cljs.core.get.call(null,map__28311_28474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28475], null),cljs.core.fnil.call(null,((function (seq__28307_28469,chunk__28308_28470,count__28309_28471,i__28310_28472,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28311_28473,map__28311_28474__$1,gline_28475,gcol_28476,name_28477,vec__28304_28466,column_28467,column_info_28468,seq__28289_28460__$1,temp__4657__auto___28459__$1,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28476], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28417,new cljs.core.Keyword(null,"col","col",-1959363084),column_28467,new cljs.core.Keyword(null,"name","name",1843675177),name_28477], null));
});})(seq__28307_28469,chunk__28308_28470,count__28309_28471,i__28310_28472,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28311_28473,map__28311_28474__$1,gline_28475,gcol_28476,name_28477,vec__28304_28466,column_28467,column_info_28468,seq__28289_28460__$1,temp__4657__auto___28459__$1,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted))
,cljs.core.sorted_map.call(null)));

var G__28478 = seq__28307_28469;
var G__28479 = chunk__28308_28470;
var G__28480 = count__28309_28471;
var G__28481 = (i__28310_28472 + (1));
seq__28307_28469 = G__28478;
chunk__28308_28470 = G__28479;
count__28309_28471 = G__28480;
i__28310_28472 = G__28481;
continue;
} else {
var temp__4657__auto___28482__$2 = cljs.core.seq.call(null,seq__28307_28469);
if(temp__4657__auto___28482__$2){
var seq__28307_28483__$1 = temp__4657__auto___28482__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28307_28483__$1)){
var c__25562__auto___28484 = cljs.core.chunk_first.call(null,seq__28307_28483__$1);
var G__28485 = cljs.core.chunk_rest.call(null,seq__28307_28483__$1);
var G__28486 = c__25562__auto___28484;
var G__28487 = cljs.core.count.call(null,c__25562__auto___28484);
var G__28488 = (0);
seq__28307_28469 = G__28485;
chunk__28308_28470 = G__28486;
count__28309_28471 = G__28487;
i__28310_28472 = G__28488;
continue;
} else {
var map__28313_28489 = cljs.core.first.call(null,seq__28307_28483__$1);
var map__28313_28490__$1 = ((((!((map__28313_28489 == null)))?((((map__28313_28489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28313_28489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313_28489):map__28313_28489);
var gline_28491 = cljs.core.get.call(null,map__28313_28490__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28492 = cljs.core.get.call(null,map__28313_28490__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28493 = cljs.core.get.call(null,map__28313_28490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28491], null),cljs.core.fnil.call(null,((function (seq__28307_28469,chunk__28308_28470,count__28309_28471,i__28310_28472,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28313_28489,map__28313_28490__$1,gline_28491,gcol_28492,name_28493,seq__28307_28483__$1,temp__4657__auto___28482__$2,vec__28304_28466,column_28467,column_info_28468,seq__28289_28460__$1,temp__4657__auto___28459__$1,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28492], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28417,new cljs.core.Keyword(null,"col","col",-1959363084),column_28467,new cljs.core.Keyword(null,"name","name",1843675177),name_28493], null));
});})(seq__28307_28469,chunk__28308_28470,count__28309_28471,i__28310_28472,seq__28289_28419,chunk__28290_28420,count__28291_28421,i__28292_28422,seq__28253_28315,chunk__28254_28316,count__28255_28317,i__28256_28318,map__28313_28489,map__28313_28490__$1,gline_28491,gcol_28492,name_28493,seq__28307_28483__$1,temp__4657__auto___28482__$2,vec__28304_28466,column_28467,column_info_28468,seq__28289_28460__$1,temp__4657__auto___28459__$1,vec__28286_28416,line_28417,columns_28418,seq__28253_28410__$1,temp__4657__auto___28409,inverted))
,cljs.core.sorted_map.call(null)));

var G__28494 = cljs.core.next.call(null,seq__28307_28483__$1);
var G__28495 = null;
var G__28496 = (0);
var G__28497 = (0);
seq__28307_28469 = G__28494;
chunk__28308_28470 = G__28495;
count__28309_28471 = G__28496;
i__28310_28472 = G__28497;
continue;
}
} else {
}
}
break;
}

var G__28498 = cljs.core.next.call(null,seq__28289_28460__$1);
var G__28499 = null;
var G__28500 = (0);
var G__28501 = (0);
seq__28289_28419 = G__28498;
chunk__28290_28420 = G__28499;
count__28291_28421 = G__28500;
i__28292_28422 = G__28501;
continue;
}
} else {
}
}
break;
}

var G__28502 = cljs.core.next.call(null,seq__28253_28410__$1);
var G__28503 = null;
var G__28504 = (0);
var G__28505 = (0);
seq__28253_28315 = G__28502;
chunk__28254_28316 = G__28503;
count__28255_28317 = G__28504;
i__28256_28318 = G__28505;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1478445821136