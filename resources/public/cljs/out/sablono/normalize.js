// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Normalize `class` into a set of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$){
if((class$ == null)){
return null;
} else {
if(cljs.core.list_QMARK_.call(null,class$)){
if((cljs.core.first.call(null,class$) instanceof cljs.core.Symbol)){
return cljs.core.PersistentHashSet.fromArray([class$], true);
} else {
return cljs.core.set.call(null,cljs.core.map.call(null,sablono.normalize.class_name,class$));
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return cljs.core.PersistentHashSet.fromArray([class$], true);
} else {
if(typeof class$ === 'string'){
return cljs.core.PersistentHashSet.fromArray([class$], true);
} else {
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.PersistentHashSet.fromArray([sablono.normalize.class_name.call(null,class$)], true);
} else {
if(((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$))) && (cljs.core.every_QMARK_.call(null,(function (p1__55591_SHARP_){
return ((p1__55591_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__55591_SHARP_ === 'string');
}),class$))){
return cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.map.call(null,sablono.normalize.class_name,class$));
} else {
if((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$))){
return cljs.core.set.call(null,cljs.core.map.call(null,sablono.normalize.class_name,class$));
} else {
return class$;

}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__55593 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.call(null,G__55593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__55593;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__7658__auto__ = [];
var len__7651__auto___55597 = arguments.length;
var i__7652__auto___55598 = (0);
while(true){
if((i__7652__auto___55598 < len__7651__auto___55597)){
args__7658__auto__.push((arguments[i__7652__auto___55598]));

var G__55599 = (i__7652__auto___55598 + (1));
i__7652__auto___55598 = G__55599;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,sablono.normalize.attributes,maps);
var classes = cljs.core.map.call(null,((function (maps__$1){
return (function (p1__55594_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,p1__55594_SHARP_);
});})(maps__$1))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1));
var classes__$1 = cljs.core.apply.call(null,clojure.set.union,classes);
var G__55596 = cljs.core.apply.call(null,cljs.core.merge,maps__$1);
if(!(cljs.core.empty_QMARK_.call(null,classes__$1))){
return cljs.core.assoc.call(null,G__55596,new cljs.core.Keyword(null,"class","class",-2030961996),classes__$1);
} else {
return G__55596;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq55595){
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55595));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__55605 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__55605,(0),null);
var names = cljs.core.nth.call(null,vec__55605,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first.call(null,cljs.core.map.call(null,sablono.normalize.strip_css,cljs.core.filter.call(null,((function (matches,vec__55605,tag_name,names){
return (function (p1__55600_SHARP_){
return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__55600_SHARP_));
});})(matches,vec__55605,tag_name,names))
,names))),cljs.core.vec.call(null,cljs.core.map.call(null,sablono.normalize.strip_css,cljs.core.filter.call(null,((function (matches,vec__55605,tag_name,names){
return (function (p1__55601_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__55601_SHARP_));
});})(matches,vec__55605,tag_name,names))
,names)))], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1)))){
var x__$1 = cljs.core.first.call(null,x);
if(typeof x__$1 === 'string'){
var x__7380__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
} else {
if(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x__$1))){
var x__7380__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
} else {
if(cljs.core.sequential_QMARK_.call(null,x__$1)){
return cljs.core.seq.call(null,x__$1);
} else {
return x__$1;

}
}
}
} else {
return x;
}
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__55608){
var vec__55615 = p__55608;
var seq__55616 = cljs.core.seq.call(null,vec__55615);
var first__55617 = cljs.core.first.call(null,seq__55616);
var seq__55616__$1 = cljs.core.next.call(null,seq__55616);
var tag = first__55617;
var content = seq__55616__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.call(null,[cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
} else {
}

var vec__55618 = sablono.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__55618,(0),null);
var id = cljs.core.nth.call(null,vec__55618,(1),null);
var class$ = cljs.core.nth.call(null,vec__55618,(2),null);
var tag_attrs = sablono.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.call(null,tag_attrs,map_attrs),sablono.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes.call(null,tag_attrs),sablono.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map?rel=1479783821451