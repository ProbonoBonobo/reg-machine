// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24899__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24899__auto__){
return or__24899__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24899__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__61589_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__61589_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__61594 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__61595 = null;
var count__61596 = (0);
var i__61597 = (0);
while(true){
if((i__61597 < count__61596)){
var n = cljs.core._nth.call(null,chunk__61595,i__61597);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__61598 = seq__61594;
var G__61599 = chunk__61595;
var G__61600 = count__61596;
var G__61601 = (i__61597 + (1));
seq__61594 = G__61598;
chunk__61595 = G__61599;
count__61596 = G__61600;
i__61597 = G__61601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61594);
if(temp__4657__auto__){
var seq__61594__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61594__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__61594__$1);
var G__61602 = cljs.core.chunk_rest.call(null,seq__61594__$1);
var G__61603 = c__25713__auto__;
var G__61604 = cljs.core.count.call(null,c__25713__auto__);
var G__61605 = (0);
seq__61594 = G__61602;
chunk__61595 = G__61603;
count__61596 = G__61604;
i__61597 = G__61605;
continue;
} else {
var n = cljs.core.first.call(null,seq__61594__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__61606 = cljs.core.next.call(null,seq__61594__$1);
var G__61607 = null;
var G__61608 = (0);
var G__61609 = (0);
seq__61594 = G__61606;
chunk__61595 = G__61607;
count__61596 = G__61608;
i__61597 = G__61609;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__61660_61671 = cljs.core.seq.call(null,deps);
var chunk__61661_61672 = null;
var count__61662_61673 = (0);
var i__61663_61674 = (0);
while(true){
if((i__61663_61674 < count__61662_61673)){
var dep_61675 = cljs.core._nth.call(null,chunk__61661_61672,i__61663_61674);
topo_sort_helper_STAR_.call(null,dep_61675,(depth + (1)),state);

var G__61676 = seq__61660_61671;
var G__61677 = chunk__61661_61672;
var G__61678 = count__61662_61673;
var G__61679 = (i__61663_61674 + (1));
seq__61660_61671 = G__61676;
chunk__61661_61672 = G__61677;
count__61662_61673 = G__61678;
i__61663_61674 = G__61679;
continue;
} else {
var temp__4657__auto___61680 = cljs.core.seq.call(null,seq__61660_61671);
if(temp__4657__auto___61680){
var seq__61660_61681__$1 = temp__4657__auto___61680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61660_61681__$1)){
var c__25713__auto___61682 = cljs.core.chunk_first.call(null,seq__61660_61681__$1);
var G__61683 = cljs.core.chunk_rest.call(null,seq__61660_61681__$1);
var G__61684 = c__25713__auto___61682;
var G__61685 = cljs.core.count.call(null,c__25713__auto___61682);
var G__61686 = (0);
seq__61660_61671 = G__61683;
chunk__61661_61672 = G__61684;
count__61662_61673 = G__61685;
i__61663_61674 = G__61686;
continue;
} else {
var dep_61687 = cljs.core.first.call(null,seq__61660_61681__$1);
topo_sort_helper_STAR_.call(null,dep_61687,(depth + (1)),state);

var G__61688 = cljs.core.next.call(null,seq__61660_61681__$1);
var G__61689 = null;
var G__61690 = (0);
var G__61691 = (0);
seq__61660_61671 = G__61688;
chunk__61661_61672 = G__61689;
count__61662_61673 = G__61690;
i__61663_61674 = G__61691;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__61664){
var vec__61668 = p__61664;
var seq__61669 = cljs.core.seq.call(null,vec__61668);
var first__61670 = cljs.core.first.call(null,seq__61669);
var seq__61669__$1 = cljs.core.next.call(null,seq__61669);
var x = first__61670;
var xs = seq__61669__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__61668,seq__61669,first__61670,seq__61669__$1,x,xs,get_deps__$1){
return (function (p1__61610_SHARP_){
return clojure.set.difference.call(null,p1__61610_SHARP_,x);
});})(vec__61668,seq__61669,first__61670,seq__61669__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__61704 = cljs.core.seq.call(null,provides);
var chunk__61705 = null;
var count__61706 = (0);
var i__61707 = (0);
while(true){
if((i__61707 < count__61706)){
var prov = cljs.core._nth.call(null,chunk__61705,i__61707);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__61708_61716 = cljs.core.seq.call(null,requires);
var chunk__61709_61717 = null;
var count__61710_61718 = (0);
var i__61711_61719 = (0);
while(true){
if((i__61711_61719 < count__61710_61718)){
var req_61720 = cljs.core._nth.call(null,chunk__61709_61717,i__61711_61719);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61720,prov);

var G__61721 = seq__61708_61716;
var G__61722 = chunk__61709_61717;
var G__61723 = count__61710_61718;
var G__61724 = (i__61711_61719 + (1));
seq__61708_61716 = G__61721;
chunk__61709_61717 = G__61722;
count__61710_61718 = G__61723;
i__61711_61719 = G__61724;
continue;
} else {
var temp__4657__auto___61725 = cljs.core.seq.call(null,seq__61708_61716);
if(temp__4657__auto___61725){
var seq__61708_61726__$1 = temp__4657__auto___61725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61708_61726__$1)){
var c__25713__auto___61727 = cljs.core.chunk_first.call(null,seq__61708_61726__$1);
var G__61728 = cljs.core.chunk_rest.call(null,seq__61708_61726__$1);
var G__61729 = c__25713__auto___61727;
var G__61730 = cljs.core.count.call(null,c__25713__auto___61727);
var G__61731 = (0);
seq__61708_61716 = G__61728;
chunk__61709_61717 = G__61729;
count__61710_61718 = G__61730;
i__61711_61719 = G__61731;
continue;
} else {
var req_61732 = cljs.core.first.call(null,seq__61708_61726__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61732,prov);

var G__61733 = cljs.core.next.call(null,seq__61708_61726__$1);
var G__61734 = null;
var G__61735 = (0);
var G__61736 = (0);
seq__61708_61716 = G__61733;
chunk__61709_61717 = G__61734;
count__61710_61718 = G__61735;
i__61711_61719 = G__61736;
continue;
}
} else {
}
}
break;
}

var G__61737 = seq__61704;
var G__61738 = chunk__61705;
var G__61739 = count__61706;
var G__61740 = (i__61707 + (1));
seq__61704 = G__61737;
chunk__61705 = G__61738;
count__61706 = G__61739;
i__61707 = G__61740;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61704);
if(temp__4657__auto__){
var seq__61704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61704__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__61704__$1);
var G__61741 = cljs.core.chunk_rest.call(null,seq__61704__$1);
var G__61742 = c__25713__auto__;
var G__61743 = cljs.core.count.call(null,c__25713__auto__);
var G__61744 = (0);
seq__61704 = G__61741;
chunk__61705 = G__61742;
count__61706 = G__61743;
i__61707 = G__61744;
continue;
} else {
var prov = cljs.core.first.call(null,seq__61704__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__61712_61745 = cljs.core.seq.call(null,requires);
var chunk__61713_61746 = null;
var count__61714_61747 = (0);
var i__61715_61748 = (0);
while(true){
if((i__61715_61748 < count__61714_61747)){
var req_61749 = cljs.core._nth.call(null,chunk__61713_61746,i__61715_61748);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61749,prov);

var G__61750 = seq__61712_61745;
var G__61751 = chunk__61713_61746;
var G__61752 = count__61714_61747;
var G__61753 = (i__61715_61748 + (1));
seq__61712_61745 = G__61750;
chunk__61713_61746 = G__61751;
count__61714_61747 = G__61752;
i__61715_61748 = G__61753;
continue;
} else {
var temp__4657__auto___61754__$1 = cljs.core.seq.call(null,seq__61712_61745);
if(temp__4657__auto___61754__$1){
var seq__61712_61755__$1 = temp__4657__auto___61754__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61712_61755__$1)){
var c__25713__auto___61756 = cljs.core.chunk_first.call(null,seq__61712_61755__$1);
var G__61757 = cljs.core.chunk_rest.call(null,seq__61712_61755__$1);
var G__61758 = c__25713__auto___61756;
var G__61759 = cljs.core.count.call(null,c__25713__auto___61756);
var G__61760 = (0);
seq__61712_61745 = G__61757;
chunk__61713_61746 = G__61758;
count__61714_61747 = G__61759;
i__61715_61748 = G__61760;
continue;
} else {
var req_61761 = cljs.core.first.call(null,seq__61712_61755__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61761,prov);

var G__61762 = cljs.core.next.call(null,seq__61712_61755__$1);
var G__61763 = null;
var G__61764 = (0);
var G__61765 = (0);
seq__61712_61745 = G__61762;
chunk__61713_61746 = G__61763;
count__61714_61747 = G__61764;
i__61715_61748 = G__61765;
continue;
}
} else {
}
}
break;
}

var G__61766 = cljs.core.next.call(null,seq__61704__$1);
var G__61767 = null;
var G__61768 = (0);
var G__61769 = (0);
seq__61704 = G__61766;
chunk__61705 = G__61767;
count__61706 = G__61768;
i__61707 = G__61769;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__61774_61778 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__61775_61779 = null;
var count__61776_61780 = (0);
var i__61777_61781 = (0);
while(true){
if((i__61777_61781 < count__61776_61780)){
var ns_61782 = cljs.core._nth.call(null,chunk__61775_61779,i__61777_61781);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_61782);

var G__61783 = seq__61774_61778;
var G__61784 = chunk__61775_61779;
var G__61785 = count__61776_61780;
var G__61786 = (i__61777_61781 + (1));
seq__61774_61778 = G__61783;
chunk__61775_61779 = G__61784;
count__61776_61780 = G__61785;
i__61777_61781 = G__61786;
continue;
} else {
var temp__4657__auto___61787 = cljs.core.seq.call(null,seq__61774_61778);
if(temp__4657__auto___61787){
var seq__61774_61788__$1 = temp__4657__auto___61787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61774_61788__$1)){
var c__25713__auto___61789 = cljs.core.chunk_first.call(null,seq__61774_61788__$1);
var G__61790 = cljs.core.chunk_rest.call(null,seq__61774_61788__$1);
var G__61791 = c__25713__auto___61789;
var G__61792 = cljs.core.count.call(null,c__25713__auto___61789);
var G__61793 = (0);
seq__61774_61778 = G__61790;
chunk__61775_61779 = G__61791;
count__61776_61780 = G__61792;
i__61777_61781 = G__61793;
continue;
} else {
var ns_61794 = cljs.core.first.call(null,seq__61774_61788__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_61794);

var G__61795 = cljs.core.next.call(null,seq__61774_61788__$1);
var G__61796 = null;
var G__61797 = (0);
var G__61798 = (0);
seq__61774_61778 = G__61795;
chunk__61775_61779 = G__61796;
count__61776_61780 = G__61797;
i__61777_61781 = G__61798;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24899__auto__ = goog.require__;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__61799__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__61799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61800__i = 0, G__61800__a = new Array(arguments.length -  0);
while (G__61800__i < G__61800__a.length) {G__61800__a[G__61800__i] = arguments[G__61800__i + 0]; ++G__61800__i;}
  args = new cljs.core.IndexedSeq(G__61800__a,0);
} 
return G__61799__delegate.call(this,args);};
G__61799.cljs$lang$maxFixedArity = 0;
G__61799.cljs$lang$applyTo = (function (arglist__61801){
var args = cljs.core.seq(arglist__61801);
return G__61799__delegate(args);
});
G__61799.cljs$core$IFn$_invoke$arity$variadic = G__61799__delegate;
return G__61799;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__61803 = cljs.core._EQ_;
var expr__61804 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__61803.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__61804))){
var path_parts = ((function (pred__61803,expr__61804){
return (function (p1__61802_SHARP_){
return clojure.string.split.call(null,p1__61802_SHARP_,/[\/\\]/);
});})(pred__61803,expr__61804))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__61803,expr__61804){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e61806){if((e61806 instanceof Error)){
var e = e61806;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e61806;

}
}})());
});
;})(path_parts,sep,root,pred__61803,expr__61804))
} else {
if(cljs.core.truth_(pred__61803.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__61804))){
return ((function (pred__61803,expr__61804){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__61803,expr__61804){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__61803,expr__61804))
);

return deferred.addErrback(((function (deferred,pred__61803,expr__61804){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__61803,expr__61804))
);
});
;})(pred__61803,expr__61804))
} else {
return ((function (pred__61803,expr__61804){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__61803,expr__61804))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__61807,callback){
var map__61810 = p__61807;
var map__61810__$1 = ((((!((map__61810 == null)))?((((map__61810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61810):map__61810);
var file_msg = map__61810__$1;
var request_url = cljs.core.get.call(null,map__61810__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__61810,map__61810__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__61810,map__61810__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__){
return (function (state_61834){
var state_val_61835 = (state_61834[(1)]);
if((state_val_61835 === (7))){
var inst_61830 = (state_61834[(2)]);
var state_61834__$1 = state_61834;
var statearr_61836_61856 = state_61834__$1;
(statearr_61836_61856[(2)] = inst_61830);

(statearr_61836_61856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (1))){
var state_61834__$1 = state_61834;
var statearr_61837_61857 = state_61834__$1;
(statearr_61837_61857[(2)] = null);

(statearr_61837_61857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (4))){
var inst_61814 = (state_61834[(7)]);
var inst_61814__$1 = (state_61834[(2)]);
var state_61834__$1 = (function (){var statearr_61838 = state_61834;
(statearr_61838[(7)] = inst_61814__$1);

return statearr_61838;
})();
if(cljs.core.truth_(inst_61814__$1)){
var statearr_61839_61858 = state_61834__$1;
(statearr_61839_61858[(1)] = (5));

} else {
var statearr_61840_61859 = state_61834__$1;
(statearr_61840_61859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (6))){
var state_61834__$1 = state_61834;
var statearr_61841_61860 = state_61834__$1;
(statearr_61841_61860[(2)] = null);

(statearr_61841_61860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (3))){
var inst_61832 = (state_61834[(2)]);
var state_61834__$1 = state_61834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61834__$1,inst_61832);
} else {
if((state_val_61835 === (2))){
var state_61834__$1 = state_61834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61834__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_61835 === (11))){
var inst_61826 = (state_61834[(2)]);
var state_61834__$1 = (function (){var statearr_61842 = state_61834;
(statearr_61842[(8)] = inst_61826);

return statearr_61842;
})();
var statearr_61843_61861 = state_61834__$1;
(statearr_61843_61861[(2)] = null);

(statearr_61843_61861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (9))){
var inst_61820 = (state_61834[(9)]);
var inst_61818 = (state_61834[(10)]);
var inst_61822 = inst_61820.call(null,inst_61818);
var state_61834__$1 = state_61834;
var statearr_61844_61862 = state_61834__$1;
(statearr_61844_61862[(2)] = inst_61822);

(statearr_61844_61862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (5))){
var inst_61814 = (state_61834[(7)]);
var inst_61816 = figwheel.client.file_reloading.blocking_load.call(null,inst_61814);
var state_61834__$1 = state_61834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61834__$1,(8),inst_61816);
} else {
if((state_val_61835 === (10))){
var inst_61818 = (state_61834[(10)]);
var inst_61824 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_61818);
var state_61834__$1 = state_61834;
var statearr_61845_61863 = state_61834__$1;
(statearr_61845_61863[(2)] = inst_61824);

(statearr_61845_61863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61835 === (8))){
var inst_61814 = (state_61834[(7)]);
var inst_61820 = (state_61834[(9)]);
var inst_61818 = (state_61834[(2)]);
var inst_61819 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_61820__$1 = cljs.core.get.call(null,inst_61819,inst_61814);
var state_61834__$1 = (function (){var statearr_61846 = state_61834;
(statearr_61846[(9)] = inst_61820__$1);

(statearr_61846[(10)] = inst_61818);

return statearr_61846;
})();
if(cljs.core.truth_(inst_61820__$1)){
var statearr_61847_61864 = state_61834__$1;
(statearr_61847_61864[(1)] = (9));

} else {
var statearr_61848_61865 = state_61834__$1;
(statearr_61848_61865[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28998__auto__))
;
return ((function (switch__28886__auto__,c__28998__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$state_machine__28887__auto____0 = (function (){
var statearr_61852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61852[(0)] = figwheel$client$file_reloading$state_machine__28887__auto__);

(statearr_61852[(1)] = (1));

return statearr_61852;
});
var figwheel$client$file_reloading$state_machine__28887__auto____1 = (function (state_61834){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61853){if((e61853 instanceof Object)){
var ex__28890__auto__ = e61853;
var statearr_61854_61866 = state_61834;
(statearr_61854_61866[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61867 = state_61834;
state_61834 = G__61867;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28887__auto__ = function(state_61834){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28887__auto____1.call(this,state_61834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28887__auto____0;
figwheel$client$file_reloading$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28887__auto____1;
return figwheel$client$file_reloading$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_61855 = f__28999__auto__.call(null);
(statearr_61855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_61855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__))
);

return c__28998__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__61868,callback){
var map__61871 = p__61868;
var map__61871__$1 = ((((!((map__61871 == null)))?((((map__61871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61871):map__61871);
var file_msg = map__61871__$1;
var namespace = cljs.core.get.call(null,map__61871__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__61871,map__61871__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__61871,map__61871__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__61873){
var map__61876 = p__61873;
var map__61876__$1 = ((((!((map__61876 == null)))?((((map__61876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61876):map__61876);
var file_msg = map__61876__$1;
var namespace = cljs.core.get.call(null,map__61876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24887__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24887__auto__){
var or__24899__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
var or__24899__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24899__auto____$1)){
return or__24899__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24887__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__61878,callback){
var map__61881 = p__61878;
var map__61881__$1 = ((((!((map__61881 == null)))?((((map__61881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61881):map__61881);
var file_msg = map__61881__$1;
var request_url = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__61881__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28998__auto___61985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___61985,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___61985,out){
return (function (state_61967){
var state_val_61968 = (state_61967[(1)]);
if((state_val_61968 === (1))){
var inst_61941 = cljs.core.seq.call(null,files);
var inst_61942 = cljs.core.first.call(null,inst_61941);
var inst_61943 = cljs.core.next.call(null,inst_61941);
var inst_61944 = files;
var state_61967__$1 = (function (){var statearr_61969 = state_61967;
(statearr_61969[(7)] = inst_61944);

(statearr_61969[(8)] = inst_61943);

(statearr_61969[(9)] = inst_61942);

return statearr_61969;
})();
var statearr_61970_61986 = state_61967__$1;
(statearr_61970_61986[(2)] = null);

(statearr_61970_61986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61968 === (2))){
var inst_61950 = (state_61967[(10)]);
var inst_61944 = (state_61967[(7)]);
var inst_61949 = cljs.core.seq.call(null,inst_61944);
var inst_61950__$1 = cljs.core.first.call(null,inst_61949);
var inst_61951 = cljs.core.next.call(null,inst_61949);
var inst_61952 = (inst_61950__$1 == null);
var inst_61953 = cljs.core.not.call(null,inst_61952);
var state_61967__$1 = (function (){var statearr_61971 = state_61967;
(statearr_61971[(10)] = inst_61950__$1);

(statearr_61971[(11)] = inst_61951);

return statearr_61971;
})();
if(inst_61953){
var statearr_61972_61987 = state_61967__$1;
(statearr_61972_61987[(1)] = (4));

} else {
var statearr_61973_61988 = state_61967__$1;
(statearr_61973_61988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61968 === (3))){
var inst_61965 = (state_61967[(2)]);
var state_61967__$1 = state_61967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61967__$1,inst_61965);
} else {
if((state_val_61968 === (4))){
var inst_61950 = (state_61967[(10)]);
var inst_61955 = figwheel.client.file_reloading.reload_js_file.call(null,inst_61950);
var state_61967__$1 = state_61967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61967__$1,(7),inst_61955);
} else {
if((state_val_61968 === (5))){
var inst_61961 = cljs.core.async.close_BANG_.call(null,out);
var state_61967__$1 = state_61967;
var statearr_61974_61989 = state_61967__$1;
(statearr_61974_61989[(2)] = inst_61961);

(statearr_61974_61989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61968 === (6))){
var inst_61963 = (state_61967[(2)]);
var state_61967__$1 = state_61967;
var statearr_61975_61990 = state_61967__$1;
(statearr_61975_61990[(2)] = inst_61963);

(statearr_61975_61990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61968 === (7))){
var inst_61951 = (state_61967[(11)]);
var inst_61957 = (state_61967[(2)]);
var inst_61958 = cljs.core.async.put_BANG_.call(null,out,inst_61957);
var inst_61944 = inst_61951;
var state_61967__$1 = (function (){var statearr_61976 = state_61967;
(statearr_61976[(7)] = inst_61944);

(statearr_61976[(12)] = inst_61958);

return statearr_61976;
})();
var statearr_61977_61991 = state_61967__$1;
(statearr_61977_61991[(2)] = null);

(statearr_61977_61991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28998__auto___61985,out))
;
return ((function (switch__28886__auto__,c__28998__auto___61985,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0 = (function (){
var statearr_61981 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61981[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__);

(statearr_61981[(1)] = (1));

return statearr_61981;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1 = (function (state_61967){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61982){if((e61982 instanceof Object)){
var ex__28890__auto__ = e61982;
var statearr_61983_61992 = state_61967;
(statearr_61983_61992[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61993 = state_61967;
state_61967 = G__61993;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__ = function(state_61967){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1.call(this,state_61967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___61985,out))
})();
var state__29000__auto__ = (function (){var statearr_61984 = f__28999__auto__.call(null);
(statearr_61984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___61985);

return statearr_61984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___61985,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__61994,opts){
var map__61998 = p__61994;
var map__61998__$1 = ((((!((map__61998 == null)))?((((map__61998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61998):map__61998);
var eval_body = cljs.core.get.call(null,map__61998__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__61998__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24887__auto__ = eval_body;
if(cljs.core.truth_(and__24887__auto__)){
return typeof eval_body === 'string';
} else {
return and__24887__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e62000){var e = e62000;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__62001_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__62001_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__62010){
var vec__62011 = p__62010;
var k = cljs.core.nth.call(null,vec__62011,(0),null);
var v = cljs.core.nth.call(null,vec__62011,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__62014){
var vec__62015 = p__62014;
var k = cljs.core.nth.call(null,vec__62015,(0),null);
var v = cljs.core.nth.call(null,vec__62015,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__62021,p__62022){
var map__62270 = p__62021;
var map__62270__$1 = ((((!((map__62270 == null)))?((((map__62270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62270):map__62270);
var opts = map__62270__$1;
var before_jsload = cljs.core.get.call(null,map__62270__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__62270__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__62270__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__62271 = p__62022;
var map__62271__$1 = ((((!((map__62271 == null)))?((((map__62271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62271):map__62271);
var msg = map__62271__$1;
var files = cljs.core.get.call(null,map__62271__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__62271__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__62271__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_62425){
var state_val_62426 = (state_62425[(1)]);
if((state_val_62426 === (7))){
var inst_62285 = (state_62425[(7)]);
var inst_62288 = (state_62425[(8)]);
var inst_62286 = (state_62425[(9)]);
var inst_62287 = (state_62425[(10)]);
var inst_62293 = cljs.core._nth.call(null,inst_62286,inst_62288);
var inst_62294 = figwheel.client.file_reloading.eval_body.call(null,inst_62293,opts);
var inst_62295 = (inst_62288 + (1));
var tmp62427 = inst_62285;
var tmp62428 = inst_62286;
var tmp62429 = inst_62287;
var inst_62285__$1 = tmp62427;
var inst_62286__$1 = tmp62428;
var inst_62287__$1 = tmp62429;
var inst_62288__$1 = inst_62295;
var state_62425__$1 = (function (){var statearr_62430 = state_62425;
(statearr_62430[(7)] = inst_62285__$1);

(statearr_62430[(11)] = inst_62294);

(statearr_62430[(8)] = inst_62288__$1);

(statearr_62430[(9)] = inst_62286__$1);

(statearr_62430[(10)] = inst_62287__$1);

return statearr_62430;
})();
var statearr_62431_62517 = state_62425__$1;
(statearr_62431_62517[(2)] = null);

(statearr_62431_62517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (20))){
var inst_62328 = (state_62425[(12)]);
var inst_62336 = figwheel.client.file_reloading.sort_files.call(null,inst_62328);
var state_62425__$1 = state_62425;
var statearr_62432_62518 = state_62425__$1;
(statearr_62432_62518[(2)] = inst_62336);

(statearr_62432_62518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (27))){
var state_62425__$1 = state_62425;
var statearr_62433_62519 = state_62425__$1;
(statearr_62433_62519[(2)] = null);

(statearr_62433_62519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (1))){
var inst_62277 = (state_62425[(13)]);
var inst_62274 = before_jsload.call(null,files);
var inst_62275 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_62276 = (function (){return ((function (inst_62277,inst_62274,inst_62275,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__62018_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__62018_SHARP_);
});
;})(inst_62277,inst_62274,inst_62275,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62277__$1 = cljs.core.filter.call(null,inst_62276,files);
var inst_62278 = cljs.core.not_empty.call(null,inst_62277__$1);
var state_62425__$1 = (function (){var statearr_62434 = state_62425;
(statearr_62434[(14)] = inst_62274);

(statearr_62434[(15)] = inst_62275);

(statearr_62434[(13)] = inst_62277__$1);

return statearr_62434;
})();
if(cljs.core.truth_(inst_62278)){
var statearr_62435_62520 = state_62425__$1;
(statearr_62435_62520[(1)] = (2));

} else {
var statearr_62436_62521 = state_62425__$1;
(statearr_62436_62521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (24))){
var state_62425__$1 = state_62425;
var statearr_62437_62522 = state_62425__$1;
(statearr_62437_62522[(2)] = null);

(statearr_62437_62522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (39))){
var inst_62378 = (state_62425[(16)]);
var state_62425__$1 = state_62425;
var statearr_62438_62523 = state_62425__$1;
(statearr_62438_62523[(2)] = inst_62378);

(statearr_62438_62523[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (46))){
var inst_62420 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
var statearr_62439_62524 = state_62425__$1;
(statearr_62439_62524[(2)] = inst_62420);

(statearr_62439_62524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (4))){
var inst_62322 = (state_62425[(2)]);
var inst_62323 = cljs.core.List.EMPTY;
var inst_62324 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_62323);
var inst_62325 = (function (){return ((function (inst_62322,inst_62323,inst_62324,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__62019_SHARP_){
var and__24887__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__62019_SHARP_);
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__62019_SHARP_));
} else {
return and__24887__auto__;
}
});
;})(inst_62322,inst_62323,inst_62324,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62326 = cljs.core.filter.call(null,inst_62325,files);
var inst_62327 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_62328 = cljs.core.concat.call(null,inst_62326,inst_62327);
var state_62425__$1 = (function (){var statearr_62440 = state_62425;
(statearr_62440[(17)] = inst_62324);

(statearr_62440[(12)] = inst_62328);

(statearr_62440[(18)] = inst_62322);

return statearr_62440;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_62441_62525 = state_62425__$1;
(statearr_62441_62525[(1)] = (16));

} else {
var statearr_62442_62526 = state_62425__$1;
(statearr_62442_62526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (15))){
var inst_62312 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
var statearr_62443_62527 = state_62425__$1;
(statearr_62443_62527[(2)] = inst_62312);

(statearr_62443_62527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (21))){
var inst_62338 = (state_62425[(19)]);
var inst_62338__$1 = (state_62425[(2)]);
var inst_62339 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_62338__$1);
var state_62425__$1 = (function (){var statearr_62444 = state_62425;
(statearr_62444[(19)] = inst_62338__$1);

return statearr_62444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62425__$1,(22),inst_62339);
} else {
if((state_val_62426 === (31))){
var inst_62423 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62425__$1,inst_62423);
} else {
if((state_val_62426 === (32))){
var inst_62378 = (state_62425[(16)]);
var inst_62383 = inst_62378.cljs$lang$protocol_mask$partition0$;
var inst_62384 = (inst_62383 & (64));
var inst_62385 = inst_62378.cljs$core$ISeq$;
var inst_62386 = (cljs.core.PROTOCOL_SENTINEL === inst_62385);
var inst_62387 = (inst_62384) || (inst_62386);
var state_62425__$1 = state_62425;
if(cljs.core.truth_(inst_62387)){
var statearr_62445_62528 = state_62425__$1;
(statearr_62445_62528[(1)] = (35));

} else {
var statearr_62446_62529 = state_62425__$1;
(statearr_62446_62529[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (40))){
var inst_62400 = (state_62425[(20)]);
var inst_62399 = (state_62425[(2)]);
var inst_62400__$1 = cljs.core.get.call(null,inst_62399,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_62401 = cljs.core.get.call(null,inst_62399,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_62402 = cljs.core.not_empty.call(null,inst_62400__$1);
var state_62425__$1 = (function (){var statearr_62447 = state_62425;
(statearr_62447[(20)] = inst_62400__$1);

(statearr_62447[(21)] = inst_62401);

return statearr_62447;
})();
if(cljs.core.truth_(inst_62402)){
var statearr_62448_62530 = state_62425__$1;
(statearr_62448_62530[(1)] = (41));

} else {
var statearr_62449_62531 = state_62425__$1;
(statearr_62449_62531[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (33))){
var state_62425__$1 = state_62425;
var statearr_62450_62532 = state_62425__$1;
(statearr_62450_62532[(2)] = false);

(statearr_62450_62532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (13))){
var inst_62298 = (state_62425[(22)]);
var inst_62302 = cljs.core.chunk_first.call(null,inst_62298);
var inst_62303 = cljs.core.chunk_rest.call(null,inst_62298);
var inst_62304 = cljs.core.count.call(null,inst_62302);
var inst_62285 = inst_62303;
var inst_62286 = inst_62302;
var inst_62287 = inst_62304;
var inst_62288 = (0);
var state_62425__$1 = (function (){var statearr_62451 = state_62425;
(statearr_62451[(7)] = inst_62285);

(statearr_62451[(8)] = inst_62288);

(statearr_62451[(9)] = inst_62286);

(statearr_62451[(10)] = inst_62287);

return statearr_62451;
})();
var statearr_62452_62533 = state_62425__$1;
(statearr_62452_62533[(2)] = null);

(statearr_62452_62533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (22))){
var inst_62341 = (state_62425[(23)]);
var inst_62338 = (state_62425[(19)]);
var inst_62342 = (state_62425[(24)]);
var inst_62346 = (state_62425[(25)]);
var inst_62341__$1 = (state_62425[(2)]);
var inst_62342__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_62341__$1);
var inst_62343 = (function (){var all_files = inst_62338;
var res_SINGLEQUOTE_ = inst_62341__$1;
var res = inst_62342__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_62341,inst_62338,inst_62342,inst_62346,inst_62341__$1,inst_62342__$1,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__62020_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__62020_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_62341,inst_62338,inst_62342,inst_62346,inst_62341__$1,inst_62342__$1,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62344 = cljs.core.filter.call(null,inst_62343,inst_62341__$1);
var inst_62345 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_62346__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_62345);
var inst_62347 = cljs.core.not_empty.call(null,inst_62346__$1);
var state_62425__$1 = (function (){var statearr_62453 = state_62425;
(statearr_62453[(23)] = inst_62341__$1);

(statearr_62453[(24)] = inst_62342__$1);

(statearr_62453[(25)] = inst_62346__$1);

(statearr_62453[(26)] = inst_62344);

return statearr_62453;
})();
if(cljs.core.truth_(inst_62347)){
var statearr_62454_62534 = state_62425__$1;
(statearr_62454_62534[(1)] = (23));

} else {
var statearr_62455_62535 = state_62425__$1;
(statearr_62455_62535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (36))){
var state_62425__$1 = state_62425;
var statearr_62456_62536 = state_62425__$1;
(statearr_62456_62536[(2)] = false);

(statearr_62456_62536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (41))){
var inst_62400 = (state_62425[(20)]);
var inst_62404 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_62405 = cljs.core.map.call(null,inst_62404,inst_62400);
var inst_62406 = cljs.core.pr_str.call(null,inst_62405);
var inst_62407 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_62406)].join('');
var inst_62408 = figwheel.client.utils.log.call(null,inst_62407);
var state_62425__$1 = state_62425;
var statearr_62457_62537 = state_62425__$1;
(statearr_62457_62537[(2)] = inst_62408);

(statearr_62457_62537[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (43))){
var inst_62401 = (state_62425[(21)]);
var inst_62411 = (state_62425[(2)]);
var inst_62412 = cljs.core.not_empty.call(null,inst_62401);
var state_62425__$1 = (function (){var statearr_62458 = state_62425;
(statearr_62458[(27)] = inst_62411);

return statearr_62458;
})();
if(cljs.core.truth_(inst_62412)){
var statearr_62459_62538 = state_62425__$1;
(statearr_62459_62538[(1)] = (44));

} else {
var statearr_62460_62539 = state_62425__$1;
(statearr_62460_62539[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (29))){
var inst_62341 = (state_62425[(23)]);
var inst_62338 = (state_62425[(19)]);
var inst_62342 = (state_62425[(24)]);
var inst_62378 = (state_62425[(16)]);
var inst_62346 = (state_62425[(25)]);
var inst_62344 = (state_62425[(26)]);
var inst_62374 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_62377 = (function (){var all_files = inst_62338;
var res_SINGLEQUOTE_ = inst_62341;
var res = inst_62342;
var files_not_loaded = inst_62344;
var dependencies_that_loaded = inst_62346;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62378,inst_62346,inst_62344,inst_62374,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__62376){
var map__62461 = p__62376;
var map__62461__$1 = ((((!((map__62461 == null)))?((((map__62461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62461):map__62461);
var namespace = cljs.core.get.call(null,map__62461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62378,inst_62346,inst_62344,inst_62374,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62378__$1 = cljs.core.group_by.call(null,inst_62377,inst_62344);
var inst_62380 = (inst_62378__$1 == null);
var inst_62381 = cljs.core.not.call(null,inst_62380);
var state_62425__$1 = (function (){var statearr_62463 = state_62425;
(statearr_62463[(16)] = inst_62378__$1);

(statearr_62463[(28)] = inst_62374);

return statearr_62463;
})();
if(inst_62381){
var statearr_62464_62540 = state_62425__$1;
(statearr_62464_62540[(1)] = (32));

} else {
var statearr_62465_62541 = state_62425__$1;
(statearr_62465_62541[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (44))){
var inst_62401 = (state_62425[(21)]);
var inst_62414 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_62401);
var inst_62415 = cljs.core.pr_str.call(null,inst_62414);
var inst_62416 = [cljs.core.str("not required: "),cljs.core.str(inst_62415)].join('');
var inst_62417 = figwheel.client.utils.log.call(null,inst_62416);
var state_62425__$1 = state_62425;
var statearr_62466_62542 = state_62425__$1;
(statearr_62466_62542[(2)] = inst_62417);

(statearr_62466_62542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (6))){
var inst_62319 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
var statearr_62467_62543 = state_62425__$1;
(statearr_62467_62543[(2)] = inst_62319);

(statearr_62467_62543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (28))){
var inst_62344 = (state_62425[(26)]);
var inst_62371 = (state_62425[(2)]);
var inst_62372 = cljs.core.not_empty.call(null,inst_62344);
var state_62425__$1 = (function (){var statearr_62468 = state_62425;
(statearr_62468[(29)] = inst_62371);

return statearr_62468;
})();
if(cljs.core.truth_(inst_62372)){
var statearr_62469_62544 = state_62425__$1;
(statearr_62469_62544[(1)] = (29));

} else {
var statearr_62470_62545 = state_62425__$1;
(statearr_62470_62545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (25))){
var inst_62342 = (state_62425[(24)]);
var inst_62358 = (state_62425[(2)]);
var inst_62359 = cljs.core.not_empty.call(null,inst_62342);
var state_62425__$1 = (function (){var statearr_62471 = state_62425;
(statearr_62471[(30)] = inst_62358);

return statearr_62471;
})();
if(cljs.core.truth_(inst_62359)){
var statearr_62472_62546 = state_62425__$1;
(statearr_62472_62546[(1)] = (26));

} else {
var statearr_62473_62547 = state_62425__$1;
(statearr_62473_62547[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (34))){
var inst_62394 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
if(cljs.core.truth_(inst_62394)){
var statearr_62474_62548 = state_62425__$1;
(statearr_62474_62548[(1)] = (38));

} else {
var statearr_62475_62549 = state_62425__$1;
(statearr_62475_62549[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (17))){
var state_62425__$1 = state_62425;
var statearr_62476_62550 = state_62425__$1;
(statearr_62476_62550[(2)] = recompile_dependents);

(statearr_62476_62550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (3))){
var state_62425__$1 = state_62425;
var statearr_62477_62551 = state_62425__$1;
(statearr_62477_62551[(2)] = null);

(statearr_62477_62551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (12))){
var inst_62315 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
var statearr_62478_62552 = state_62425__$1;
(statearr_62478_62552[(2)] = inst_62315);

(statearr_62478_62552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (2))){
var inst_62277 = (state_62425[(13)]);
var inst_62284 = cljs.core.seq.call(null,inst_62277);
var inst_62285 = inst_62284;
var inst_62286 = null;
var inst_62287 = (0);
var inst_62288 = (0);
var state_62425__$1 = (function (){var statearr_62479 = state_62425;
(statearr_62479[(7)] = inst_62285);

(statearr_62479[(8)] = inst_62288);

(statearr_62479[(9)] = inst_62286);

(statearr_62479[(10)] = inst_62287);

return statearr_62479;
})();
var statearr_62480_62553 = state_62425__$1;
(statearr_62480_62553[(2)] = null);

(statearr_62480_62553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (23))){
var inst_62341 = (state_62425[(23)]);
var inst_62338 = (state_62425[(19)]);
var inst_62342 = (state_62425[(24)]);
var inst_62346 = (state_62425[(25)]);
var inst_62344 = (state_62425[(26)]);
var inst_62349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_62351 = (function (){var all_files = inst_62338;
var res_SINGLEQUOTE_ = inst_62341;
var res = inst_62342;
var files_not_loaded = inst_62344;
var dependencies_that_loaded = inst_62346;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62346,inst_62344,inst_62349,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__62350){
var map__62481 = p__62350;
var map__62481__$1 = ((((!((map__62481 == null)))?((((map__62481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62481):map__62481);
var request_url = cljs.core.get.call(null,map__62481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62346,inst_62344,inst_62349,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62352 = cljs.core.reverse.call(null,inst_62346);
var inst_62353 = cljs.core.map.call(null,inst_62351,inst_62352);
var inst_62354 = cljs.core.pr_str.call(null,inst_62353);
var inst_62355 = figwheel.client.utils.log.call(null,inst_62354);
var state_62425__$1 = (function (){var statearr_62483 = state_62425;
(statearr_62483[(31)] = inst_62349);

return statearr_62483;
})();
var statearr_62484_62554 = state_62425__$1;
(statearr_62484_62554[(2)] = inst_62355);

(statearr_62484_62554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (35))){
var state_62425__$1 = state_62425;
var statearr_62485_62555 = state_62425__$1;
(statearr_62485_62555[(2)] = true);

(statearr_62485_62555[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (19))){
var inst_62328 = (state_62425[(12)]);
var inst_62334 = figwheel.client.file_reloading.expand_files.call(null,inst_62328);
var state_62425__$1 = state_62425;
var statearr_62486_62556 = state_62425__$1;
(statearr_62486_62556[(2)] = inst_62334);

(statearr_62486_62556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (11))){
var state_62425__$1 = state_62425;
var statearr_62487_62557 = state_62425__$1;
(statearr_62487_62557[(2)] = null);

(statearr_62487_62557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (9))){
var inst_62317 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
var statearr_62488_62558 = state_62425__$1;
(statearr_62488_62558[(2)] = inst_62317);

(statearr_62488_62558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (5))){
var inst_62288 = (state_62425[(8)]);
var inst_62287 = (state_62425[(10)]);
var inst_62290 = (inst_62288 < inst_62287);
var inst_62291 = inst_62290;
var state_62425__$1 = state_62425;
if(cljs.core.truth_(inst_62291)){
var statearr_62489_62559 = state_62425__$1;
(statearr_62489_62559[(1)] = (7));

} else {
var statearr_62490_62560 = state_62425__$1;
(statearr_62490_62560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (14))){
var inst_62298 = (state_62425[(22)]);
var inst_62307 = cljs.core.first.call(null,inst_62298);
var inst_62308 = figwheel.client.file_reloading.eval_body.call(null,inst_62307,opts);
var inst_62309 = cljs.core.next.call(null,inst_62298);
var inst_62285 = inst_62309;
var inst_62286 = null;
var inst_62287 = (0);
var inst_62288 = (0);
var state_62425__$1 = (function (){var statearr_62491 = state_62425;
(statearr_62491[(7)] = inst_62285);

(statearr_62491[(8)] = inst_62288);

(statearr_62491[(9)] = inst_62286);

(statearr_62491[(10)] = inst_62287);

(statearr_62491[(32)] = inst_62308);

return statearr_62491;
})();
var statearr_62492_62561 = state_62425__$1;
(statearr_62492_62561[(2)] = null);

(statearr_62492_62561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (45))){
var state_62425__$1 = state_62425;
var statearr_62493_62562 = state_62425__$1;
(statearr_62493_62562[(2)] = null);

(statearr_62493_62562[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (26))){
var inst_62341 = (state_62425[(23)]);
var inst_62338 = (state_62425[(19)]);
var inst_62342 = (state_62425[(24)]);
var inst_62346 = (state_62425[(25)]);
var inst_62344 = (state_62425[(26)]);
var inst_62361 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_62363 = (function (){var all_files = inst_62338;
var res_SINGLEQUOTE_ = inst_62341;
var res = inst_62342;
var files_not_loaded = inst_62344;
var dependencies_that_loaded = inst_62346;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62346,inst_62344,inst_62361,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__62362){
var map__62494 = p__62362;
var map__62494__$1 = ((((!((map__62494 == null)))?((((map__62494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62494):map__62494);
var namespace = cljs.core.get.call(null,map__62494__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__62494__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62346,inst_62344,inst_62361,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62364 = cljs.core.map.call(null,inst_62363,inst_62342);
var inst_62365 = cljs.core.pr_str.call(null,inst_62364);
var inst_62366 = figwheel.client.utils.log.call(null,inst_62365);
var inst_62367 = (function (){var all_files = inst_62338;
var res_SINGLEQUOTE_ = inst_62341;
var res = inst_62342;
var files_not_loaded = inst_62344;
var dependencies_that_loaded = inst_62346;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62346,inst_62344,inst_62361,inst_62363,inst_62364,inst_62365,inst_62366,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_62341,inst_62338,inst_62342,inst_62346,inst_62344,inst_62361,inst_62363,inst_62364,inst_62365,inst_62366,state_val_62426,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_62368 = setTimeout(inst_62367,(10));
var state_62425__$1 = (function (){var statearr_62496 = state_62425;
(statearr_62496[(33)] = inst_62361);

(statearr_62496[(34)] = inst_62366);

return statearr_62496;
})();
var statearr_62497_62563 = state_62425__$1;
(statearr_62497_62563[(2)] = inst_62368);

(statearr_62497_62563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (16))){
var state_62425__$1 = state_62425;
var statearr_62498_62564 = state_62425__$1;
(statearr_62498_62564[(2)] = reload_dependents);

(statearr_62498_62564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (38))){
var inst_62378 = (state_62425[(16)]);
var inst_62396 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62378);
var state_62425__$1 = state_62425;
var statearr_62499_62565 = state_62425__$1;
(statearr_62499_62565[(2)] = inst_62396);

(statearr_62499_62565[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (30))){
var state_62425__$1 = state_62425;
var statearr_62500_62566 = state_62425__$1;
(statearr_62500_62566[(2)] = null);

(statearr_62500_62566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (10))){
var inst_62298 = (state_62425[(22)]);
var inst_62300 = cljs.core.chunked_seq_QMARK_.call(null,inst_62298);
var state_62425__$1 = state_62425;
if(inst_62300){
var statearr_62501_62567 = state_62425__$1;
(statearr_62501_62567[(1)] = (13));

} else {
var statearr_62502_62568 = state_62425__$1;
(statearr_62502_62568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (18))){
var inst_62332 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
if(cljs.core.truth_(inst_62332)){
var statearr_62503_62569 = state_62425__$1;
(statearr_62503_62569[(1)] = (19));

} else {
var statearr_62504_62570 = state_62425__$1;
(statearr_62504_62570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (42))){
var state_62425__$1 = state_62425;
var statearr_62505_62571 = state_62425__$1;
(statearr_62505_62571[(2)] = null);

(statearr_62505_62571[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (37))){
var inst_62391 = (state_62425[(2)]);
var state_62425__$1 = state_62425;
var statearr_62506_62572 = state_62425__$1;
(statearr_62506_62572[(2)] = inst_62391);

(statearr_62506_62572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62426 === (8))){
var inst_62285 = (state_62425[(7)]);
var inst_62298 = (state_62425[(22)]);
var inst_62298__$1 = cljs.core.seq.call(null,inst_62285);
var state_62425__$1 = (function (){var statearr_62507 = state_62425;
(statearr_62507[(22)] = inst_62298__$1);

return statearr_62507;
})();
if(inst_62298__$1){
var statearr_62508_62573 = state_62425__$1;
(statearr_62508_62573[(1)] = (10));

} else {
var statearr_62509_62574 = state_62425__$1;
(statearr_62509_62574[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28886__auto__,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0 = (function (){
var statearr_62513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62513[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__);

(statearr_62513[(1)] = (1));

return statearr_62513;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1 = (function (state_62425){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_62425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e62514){if((e62514 instanceof Object)){
var ex__28890__auto__ = e62514;
var statearr_62515_62575 = state_62425;
(statearr_62515_62575[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62576 = state_62425;
state_62425 = G__62576;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__ = function(state_62425){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1.call(this,state_62425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29000__auto__ = (function (){var statearr_62516 = f__28999__auto__.call(null);
(statearr_62516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_62516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,map__62270,map__62270__$1,opts,before_jsload,on_jsload,reload_dependents,map__62271,map__62271__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28998__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__62579,link){
var map__62582 = p__62579;
var map__62582__$1 = ((((!((map__62582 == null)))?((((map__62582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62582):map__62582);
var file = cljs.core.get.call(null,map__62582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__62582,map__62582__$1,file){
return (function (p1__62577_SHARP_,p2__62578_SHARP_){
if(cljs.core._EQ_.call(null,p1__62577_SHARP_,p2__62578_SHARP_)){
return p1__62577_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__62582,map__62582__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__62588){
var map__62589 = p__62588;
var map__62589__$1 = ((((!((map__62589 == null)))?((((map__62589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62589):map__62589);
var match_length = cljs.core.get.call(null,map__62589__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__62589__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__62584_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__62584_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args62591 = [];
var len__26007__auto___62594 = arguments.length;
var i__26008__auto___62595 = (0);
while(true){
if((i__26008__auto___62595 < len__26007__auto___62594)){
args62591.push((arguments[i__26008__auto___62595]));

var G__62596 = (i__26008__auto___62595 + (1));
i__26008__auto___62595 = G__62596;
continue;
} else {
}
break;
}

var G__62593 = args62591.length;
switch (G__62593) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62591.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__62598_SHARP_,p2__62599_SHARP_){
return cljs.core.assoc.call(null,p1__62598_SHARP_,cljs.core.get.call(null,p2__62599_SHARP_,key),p2__62599_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__62600){
var map__62603 = p__62600;
var map__62603__$1 = ((((!((map__62603 == null)))?((((map__62603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62603):map__62603);
var f_data = map__62603__$1;
var file = cljs.core.get.call(null,map__62603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__62605,p__62606){
var map__62615 = p__62605;
var map__62615__$1 = ((((!((map__62615 == null)))?((((map__62615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62615):map__62615);
var opts = map__62615__$1;
var on_cssload = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__62616 = p__62606;
var map__62616__$1 = ((((!((map__62616 == null)))?((((map__62616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62616):map__62616);
var files_msg = map__62616__$1;
var files = cljs.core.get.call(null,map__62616__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__62619_62623 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__62620_62624 = null;
var count__62621_62625 = (0);
var i__62622_62626 = (0);
while(true){
if((i__62622_62626 < count__62621_62625)){
var f_62627 = cljs.core._nth.call(null,chunk__62620_62624,i__62622_62626);
figwheel.client.file_reloading.reload_css_file.call(null,f_62627);

var G__62628 = seq__62619_62623;
var G__62629 = chunk__62620_62624;
var G__62630 = count__62621_62625;
var G__62631 = (i__62622_62626 + (1));
seq__62619_62623 = G__62628;
chunk__62620_62624 = G__62629;
count__62621_62625 = G__62630;
i__62622_62626 = G__62631;
continue;
} else {
var temp__4657__auto___62632 = cljs.core.seq.call(null,seq__62619_62623);
if(temp__4657__auto___62632){
var seq__62619_62633__$1 = temp__4657__auto___62632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62619_62633__$1)){
var c__25713__auto___62634 = cljs.core.chunk_first.call(null,seq__62619_62633__$1);
var G__62635 = cljs.core.chunk_rest.call(null,seq__62619_62633__$1);
var G__62636 = c__25713__auto___62634;
var G__62637 = cljs.core.count.call(null,c__25713__auto___62634);
var G__62638 = (0);
seq__62619_62623 = G__62635;
chunk__62620_62624 = G__62636;
count__62621_62625 = G__62637;
i__62622_62626 = G__62638;
continue;
} else {
var f_62639 = cljs.core.first.call(null,seq__62619_62633__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_62639);

var G__62640 = cljs.core.next.call(null,seq__62619_62633__$1);
var G__62641 = null;
var G__62642 = (0);
var G__62643 = (0);
seq__62619_62623 = G__62640;
chunk__62620_62624 = G__62641;
count__62621_62625 = G__62642;
i__62622_62626 = G__62643;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__62615,map__62615__$1,opts,on_cssload,map__62616,map__62616__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__62615,map__62615__$1,opts,on_cssload,map__62616,map__62616__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479783760426