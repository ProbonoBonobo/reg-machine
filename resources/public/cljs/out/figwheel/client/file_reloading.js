// Compiled by ClojureScript 1.9.227 {}
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
var or__24751__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24751__auto__){
return or__24751__auto__;
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
var or__24751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29901_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29901_SHARP_));
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
var seq__29906 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29907 = null;
var count__29908 = (0);
var i__29909 = (0);
while(true){
if((i__29909 < count__29908)){
var n = cljs.core._nth.call(null,chunk__29907,i__29909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29910 = seq__29906;
var G__29911 = chunk__29907;
var G__29912 = count__29908;
var G__29913 = (i__29909 + (1));
seq__29906 = G__29910;
chunk__29907 = G__29911;
count__29908 = G__29912;
i__29909 = G__29913;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29906);
if(temp__4657__auto__){
var seq__29906__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29906__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__29906__$1);
var G__29914 = cljs.core.chunk_rest.call(null,seq__29906__$1);
var G__29915 = c__25562__auto__;
var G__29916 = cljs.core.count.call(null,c__25562__auto__);
var G__29917 = (0);
seq__29906 = G__29914;
chunk__29907 = G__29915;
count__29908 = G__29916;
i__29909 = G__29917;
continue;
} else {
var n = cljs.core.first.call(null,seq__29906__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29918 = cljs.core.next.call(null,seq__29906__$1);
var G__29919 = null;
var G__29920 = (0);
var G__29921 = (0);
seq__29906 = G__29918;
chunk__29907 = G__29919;
count__29908 = G__29920;
i__29909 = G__29921;
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

var seq__29972_29983 = cljs.core.seq.call(null,deps);
var chunk__29973_29984 = null;
var count__29974_29985 = (0);
var i__29975_29986 = (0);
while(true){
if((i__29975_29986 < count__29974_29985)){
var dep_29987 = cljs.core._nth.call(null,chunk__29973_29984,i__29975_29986);
topo_sort_helper_STAR_.call(null,dep_29987,(depth + (1)),state);

var G__29988 = seq__29972_29983;
var G__29989 = chunk__29973_29984;
var G__29990 = count__29974_29985;
var G__29991 = (i__29975_29986 + (1));
seq__29972_29983 = G__29988;
chunk__29973_29984 = G__29989;
count__29974_29985 = G__29990;
i__29975_29986 = G__29991;
continue;
} else {
var temp__4657__auto___29992 = cljs.core.seq.call(null,seq__29972_29983);
if(temp__4657__auto___29992){
var seq__29972_29993__$1 = temp__4657__auto___29992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29972_29993__$1)){
var c__25562__auto___29994 = cljs.core.chunk_first.call(null,seq__29972_29993__$1);
var G__29995 = cljs.core.chunk_rest.call(null,seq__29972_29993__$1);
var G__29996 = c__25562__auto___29994;
var G__29997 = cljs.core.count.call(null,c__25562__auto___29994);
var G__29998 = (0);
seq__29972_29983 = G__29995;
chunk__29973_29984 = G__29996;
count__29974_29985 = G__29997;
i__29975_29986 = G__29998;
continue;
} else {
var dep_29999 = cljs.core.first.call(null,seq__29972_29993__$1);
topo_sort_helper_STAR_.call(null,dep_29999,(depth + (1)),state);

var G__30000 = cljs.core.next.call(null,seq__29972_29993__$1);
var G__30001 = null;
var G__30002 = (0);
var G__30003 = (0);
seq__29972_29983 = G__30000;
chunk__29973_29984 = G__30001;
count__29974_29985 = G__30002;
i__29975_29986 = G__30003;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29976){
var vec__29980 = p__29976;
var seq__29981 = cljs.core.seq.call(null,vec__29980);
var first__29982 = cljs.core.first.call(null,seq__29981);
var seq__29981__$1 = cljs.core.next.call(null,seq__29981);
var x = first__29982;
var xs = seq__29981__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29980,seq__29981,first__29982,seq__29981__$1,x,xs,get_deps__$1){
return (function (p1__29922_SHARP_){
return clojure.set.difference.call(null,p1__29922_SHARP_,x);
});})(vec__29980,seq__29981,first__29982,seq__29981__$1,x,xs,get_deps__$1))
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
var seq__30016 = cljs.core.seq.call(null,provides);
var chunk__30017 = null;
var count__30018 = (0);
var i__30019 = (0);
while(true){
if((i__30019 < count__30018)){
var prov = cljs.core._nth.call(null,chunk__30017,i__30019);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30020_30028 = cljs.core.seq.call(null,requires);
var chunk__30021_30029 = null;
var count__30022_30030 = (0);
var i__30023_30031 = (0);
while(true){
if((i__30023_30031 < count__30022_30030)){
var req_30032 = cljs.core._nth.call(null,chunk__30021_30029,i__30023_30031);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30032,prov);

var G__30033 = seq__30020_30028;
var G__30034 = chunk__30021_30029;
var G__30035 = count__30022_30030;
var G__30036 = (i__30023_30031 + (1));
seq__30020_30028 = G__30033;
chunk__30021_30029 = G__30034;
count__30022_30030 = G__30035;
i__30023_30031 = G__30036;
continue;
} else {
var temp__4657__auto___30037 = cljs.core.seq.call(null,seq__30020_30028);
if(temp__4657__auto___30037){
var seq__30020_30038__$1 = temp__4657__auto___30037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30020_30038__$1)){
var c__25562__auto___30039 = cljs.core.chunk_first.call(null,seq__30020_30038__$1);
var G__30040 = cljs.core.chunk_rest.call(null,seq__30020_30038__$1);
var G__30041 = c__25562__auto___30039;
var G__30042 = cljs.core.count.call(null,c__25562__auto___30039);
var G__30043 = (0);
seq__30020_30028 = G__30040;
chunk__30021_30029 = G__30041;
count__30022_30030 = G__30042;
i__30023_30031 = G__30043;
continue;
} else {
var req_30044 = cljs.core.first.call(null,seq__30020_30038__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30044,prov);

var G__30045 = cljs.core.next.call(null,seq__30020_30038__$1);
var G__30046 = null;
var G__30047 = (0);
var G__30048 = (0);
seq__30020_30028 = G__30045;
chunk__30021_30029 = G__30046;
count__30022_30030 = G__30047;
i__30023_30031 = G__30048;
continue;
}
} else {
}
}
break;
}

var G__30049 = seq__30016;
var G__30050 = chunk__30017;
var G__30051 = count__30018;
var G__30052 = (i__30019 + (1));
seq__30016 = G__30049;
chunk__30017 = G__30050;
count__30018 = G__30051;
i__30019 = G__30052;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30016);
if(temp__4657__auto__){
var seq__30016__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30016__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__30016__$1);
var G__30053 = cljs.core.chunk_rest.call(null,seq__30016__$1);
var G__30054 = c__25562__auto__;
var G__30055 = cljs.core.count.call(null,c__25562__auto__);
var G__30056 = (0);
seq__30016 = G__30053;
chunk__30017 = G__30054;
count__30018 = G__30055;
i__30019 = G__30056;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30016__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30024_30057 = cljs.core.seq.call(null,requires);
var chunk__30025_30058 = null;
var count__30026_30059 = (0);
var i__30027_30060 = (0);
while(true){
if((i__30027_30060 < count__30026_30059)){
var req_30061 = cljs.core._nth.call(null,chunk__30025_30058,i__30027_30060);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30061,prov);

var G__30062 = seq__30024_30057;
var G__30063 = chunk__30025_30058;
var G__30064 = count__30026_30059;
var G__30065 = (i__30027_30060 + (1));
seq__30024_30057 = G__30062;
chunk__30025_30058 = G__30063;
count__30026_30059 = G__30064;
i__30027_30060 = G__30065;
continue;
} else {
var temp__4657__auto___30066__$1 = cljs.core.seq.call(null,seq__30024_30057);
if(temp__4657__auto___30066__$1){
var seq__30024_30067__$1 = temp__4657__auto___30066__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30024_30067__$1)){
var c__25562__auto___30068 = cljs.core.chunk_first.call(null,seq__30024_30067__$1);
var G__30069 = cljs.core.chunk_rest.call(null,seq__30024_30067__$1);
var G__30070 = c__25562__auto___30068;
var G__30071 = cljs.core.count.call(null,c__25562__auto___30068);
var G__30072 = (0);
seq__30024_30057 = G__30069;
chunk__30025_30058 = G__30070;
count__30026_30059 = G__30071;
i__30027_30060 = G__30072;
continue;
} else {
var req_30073 = cljs.core.first.call(null,seq__30024_30067__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30073,prov);

var G__30074 = cljs.core.next.call(null,seq__30024_30067__$1);
var G__30075 = null;
var G__30076 = (0);
var G__30077 = (0);
seq__30024_30057 = G__30074;
chunk__30025_30058 = G__30075;
count__30026_30059 = G__30076;
i__30027_30060 = G__30077;
continue;
}
} else {
}
}
break;
}

var G__30078 = cljs.core.next.call(null,seq__30016__$1);
var G__30079 = null;
var G__30080 = (0);
var G__30081 = (0);
seq__30016 = G__30078;
chunk__30017 = G__30079;
count__30018 = G__30080;
i__30019 = G__30081;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30086_30090 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30087_30091 = null;
var count__30088_30092 = (0);
var i__30089_30093 = (0);
while(true){
if((i__30089_30093 < count__30088_30092)){
var ns_30094 = cljs.core._nth.call(null,chunk__30087_30091,i__30089_30093);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30094);

var G__30095 = seq__30086_30090;
var G__30096 = chunk__30087_30091;
var G__30097 = count__30088_30092;
var G__30098 = (i__30089_30093 + (1));
seq__30086_30090 = G__30095;
chunk__30087_30091 = G__30096;
count__30088_30092 = G__30097;
i__30089_30093 = G__30098;
continue;
} else {
var temp__4657__auto___30099 = cljs.core.seq.call(null,seq__30086_30090);
if(temp__4657__auto___30099){
var seq__30086_30100__$1 = temp__4657__auto___30099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30086_30100__$1)){
var c__25562__auto___30101 = cljs.core.chunk_first.call(null,seq__30086_30100__$1);
var G__30102 = cljs.core.chunk_rest.call(null,seq__30086_30100__$1);
var G__30103 = c__25562__auto___30101;
var G__30104 = cljs.core.count.call(null,c__25562__auto___30101);
var G__30105 = (0);
seq__30086_30090 = G__30102;
chunk__30087_30091 = G__30103;
count__30088_30092 = G__30104;
i__30089_30093 = G__30105;
continue;
} else {
var ns_30106 = cljs.core.first.call(null,seq__30086_30100__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30106);

var G__30107 = cljs.core.next.call(null,seq__30086_30100__$1);
var G__30108 = null;
var G__30109 = (0);
var G__30110 = (0);
seq__30086_30090 = G__30107;
chunk__30087_30091 = G__30108;
count__30088_30092 = G__30109;
i__30089_30093 = G__30110;
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
goog.require_figwheel_backup_ = (function (){var or__24751__auto__ = goog.require__;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var G__30111__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30112__i = 0, G__30112__a = new Array(arguments.length -  0);
while (G__30112__i < G__30112__a.length) {G__30112__a[G__30112__i] = arguments[G__30112__i + 0]; ++G__30112__i;}
  args = new cljs.core.IndexedSeq(G__30112__a,0);
} 
return G__30111__delegate.call(this,args);};
G__30111.cljs$lang$maxFixedArity = 0;
G__30111.cljs$lang$applyTo = (function (arglist__30113){
var args = cljs.core.seq(arglist__30113);
return G__30111__delegate(args);
});
G__30111.cljs$core$IFn$_invoke$arity$variadic = G__30111__delegate;
return G__30111;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30115 = cljs.core._EQ_;
var expr__30116 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30115.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30116))){
var path_parts = ((function (pred__30115,expr__30116){
return (function (p1__30114_SHARP_){
return clojure.string.split.call(null,p1__30114_SHARP_,/[\/\\]/);
});})(pred__30115,expr__30116))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30115,expr__30116){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30118){if((e30118 instanceof Error)){
var e = e30118;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30118;

}
}})());
});
;})(path_parts,sep,root,pred__30115,expr__30116))
} else {
if(cljs.core.truth_(pred__30115.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30116))){
return ((function (pred__30115,expr__30116){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30115,expr__30116){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30115,expr__30116))
);

return deferred.addErrback(((function (deferred,pred__30115,expr__30116){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30115,expr__30116))
);
});
;})(pred__30115,expr__30116))
} else {
return ((function (pred__30115,expr__30116){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30115,expr__30116))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30119,callback){
var map__30122 = p__30119;
var map__30122__$1 = ((((!((map__30122 == null)))?((((map__30122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30122):map__30122);
var file_msg = map__30122__$1;
var request_url = cljs.core.get.call(null,map__30122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30122,map__30122__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30122,map__30122__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__){
return (function (state_30146){
var state_val_30147 = (state_30146[(1)]);
if((state_val_30147 === (7))){
var inst_30142 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30148_30168 = state_30146__$1;
(statearr_30148_30168[(2)] = inst_30142);

(statearr_30148_30168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (1))){
var state_30146__$1 = state_30146;
var statearr_30149_30169 = state_30146__$1;
(statearr_30149_30169[(2)] = null);

(statearr_30149_30169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (4))){
var inst_30126 = (state_30146[(7)]);
var inst_30126__$1 = (state_30146[(2)]);
var state_30146__$1 = (function (){var statearr_30150 = state_30146;
(statearr_30150[(7)] = inst_30126__$1);

return statearr_30150;
})();
if(cljs.core.truth_(inst_30126__$1)){
var statearr_30151_30170 = state_30146__$1;
(statearr_30151_30170[(1)] = (5));

} else {
var statearr_30152_30171 = state_30146__$1;
(statearr_30152_30171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (6))){
var state_30146__$1 = state_30146;
var statearr_30153_30172 = state_30146__$1;
(statearr_30153_30172[(2)] = null);

(statearr_30153_30172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (3))){
var inst_30144 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30146__$1,inst_30144);
} else {
if((state_val_30147 === (2))){
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30146__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30147 === (11))){
var inst_30138 = (state_30146[(2)]);
var state_30146__$1 = (function (){var statearr_30154 = state_30146;
(statearr_30154[(8)] = inst_30138);

return statearr_30154;
})();
var statearr_30155_30173 = state_30146__$1;
(statearr_30155_30173[(2)] = null);

(statearr_30155_30173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (9))){
var inst_30130 = (state_30146[(9)]);
var inst_30132 = (state_30146[(10)]);
var inst_30134 = inst_30132.call(null,inst_30130);
var state_30146__$1 = state_30146;
var statearr_30156_30174 = state_30146__$1;
(statearr_30156_30174[(2)] = inst_30134);

(statearr_30156_30174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (5))){
var inst_30126 = (state_30146[(7)]);
var inst_30128 = figwheel.client.file_reloading.blocking_load.call(null,inst_30126);
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30146__$1,(8),inst_30128);
} else {
if((state_val_30147 === (10))){
var inst_30130 = (state_30146[(9)]);
var inst_30136 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30130);
var state_30146__$1 = state_30146;
var statearr_30157_30175 = state_30146__$1;
(statearr_30157_30175[(2)] = inst_30136);

(statearr_30157_30175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (8))){
var inst_30126 = (state_30146[(7)]);
var inst_30132 = (state_30146[(10)]);
var inst_30130 = (state_30146[(2)]);
var inst_30131 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30132__$1 = cljs.core.get.call(null,inst_30131,inst_30126);
var state_30146__$1 = (function (){var statearr_30158 = state_30146;
(statearr_30158[(9)] = inst_30130);

(statearr_30158[(10)] = inst_30132__$1);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30132__$1)){
var statearr_30159_30176 = state_30146__$1;
(statearr_30159_30176[(1)] = (9));

} else {
var statearr_30160_30177 = state_30146__$1;
(statearr_30160_30177[(1)] = (10));

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
});})(c__26996__auto__))
;
return ((function (switch__26884__auto__,c__26996__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26885__auto__ = null;
var figwheel$client$file_reloading$state_machine__26885__auto____0 = (function (){
var statearr_30164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30164[(0)] = figwheel$client$file_reloading$state_machine__26885__auto__);

(statearr_30164[(1)] = (1));

return statearr_30164;
});
var figwheel$client$file_reloading$state_machine__26885__auto____1 = (function (state_30146){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_30146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e30165){if((e30165 instanceof Object)){
var ex__26888__auto__ = e30165;
var statearr_30166_30178 = state_30146;
(statearr_30166_30178[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30179 = state_30146;
state_30146 = G__30179;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26885__auto__ = function(state_30146){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26885__auto____1.call(this,state_30146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26885__auto____0;
figwheel$client$file_reloading$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26885__auto____1;
return figwheel$client$file_reloading$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__))
})();
var state__26998__auto__ = (function (){var statearr_30167 = f__26997__auto__.call(null);
(statearr_30167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_30167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__))
);

return c__26996__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30180,callback){
var map__30183 = p__30180;
var map__30183__$1 = ((((!((map__30183 == null)))?((((map__30183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30183):map__30183);
var file_msg = map__30183__$1;
var namespace = cljs.core.get.call(null,map__30183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30183,map__30183__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30183,map__30183__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30185){
var map__30188 = p__30185;
var map__30188__$1 = ((((!((map__30188 == null)))?((((map__30188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30188):map__30188);
var file_msg = map__30188__$1;
var namespace = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24739__auto__){
var or__24751__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24751__auto____$1)){
return or__24751__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24739__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30190,callback){
var map__30193 = p__30190;
var map__30193__$1 = ((((!((map__30193 == null)))?((((map__30193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30193):map__30193);
var file_msg = map__30193__$1;
var request_url = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26996__auto___30297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___30297,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___30297,out){
return (function (state_30279){
var state_val_30280 = (state_30279[(1)]);
if((state_val_30280 === (1))){
var inst_30253 = cljs.core.seq.call(null,files);
var inst_30254 = cljs.core.first.call(null,inst_30253);
var inst_30255 = cljs.core.next.call(null,inst_30253);
var inst_30256 = files;
var state_30279__$1 = (function (){var statearr_30281 = state_30279;
(statearr_30281[(7)] = inst_30255);

(statearr_30281[(8)] = inst_30256);

(statearr_30281[(9)] = inst_30254);

return statearr_30281;
})();
var statearr_30282_30298 = state_30279__$1;
(statearr_30282_30298[(2)] = null);

(statearr_30282_30298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (2))){
var inst_30262 = (state_30279[(10)]);
var inst_30256 = (state_30279[(8)]);
var inst_30261 = cljs.core.seq.call(null,inst_30256);
var inst_30262__$1 = cljs.core.first.call(null,inst_30261);
var inst_30263 = cljs.core.next.call(null,inst_30261);
var inst_30264 = (inst_30262__$1 == null);
var inst_30265 = cljs.core.not.call(null,inst_30264);
var state_30279__$1 = (function (){var statearr_30283 = state_30279;
(statearr_30283[(10)] = inst_30262__$1);

(statearr_30283[(11)] = inst_30263);

return statearr_30283;
})();
if(inst_30265){
var statearr_30284_30299 = state_30279__$1;
(statearr_30284_30299[(1)] = (4));

} else {
var statearr_30285_30300 = state_30279__$1;
(statearr_30285_30300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (3))){
var inst_30277 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30279__$1,inst_30277);
} else {
if((state_val_30280 === (4))){
var inst_30262 = (state_30279[(10)]);
var inst_30267 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30262);
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30279__$1,(7),inst_30267);
} else {
if((state_val_30280 === (5))){
var inst_30273 = cljs.core.async.close_BANG_.call(null,out);
var state_30279__$1 = state_30279;
var statearr_30286_30301 = state_30279__$1;
(statearr_30286_30301[(2)] = inst_30273);

(statearr_30286_30301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (6))){
var inst_30275 = (state_30279[(2)]);
var state_30279__$1 = state_30279;
var statearr_30287_30302 = state_30279__$1;
(statearr_30287_30302[(2)] = inst_30275);

(statearr_30287_30302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30280 === (7))){
var inst_30263 = (state_30279[(11)]);
var inst_30269 = (state_30279[(2)]);
var inst_30270 = cljs.core.async.put_BANG_.call(null,out,inst_30269);
var inst_30256 = inst_30263;
var state_30279__$1 = (function (){var statearr_30288 = state_30279;
(statearr_30288[(12)] = inst_30270);

(statearr_30288[(8)] = inst_30256);

return statearr_30288;
})();
var statearr_30289_30303 = state_30279__$1;
(statearr_30289_30303[(2)] = null);

(statearr_30289_30303[(1)] = (2));


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
});})(c__26996__auto___30297,out))
;
return ((function (switch__26884__auto__,c__26996__auto___30297,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto____0 = (function (){
var statearr_30293 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30293[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto__);

(statearr_30293[(1)] = (1));

return statearr_30293;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto____1 = (function (state_30279){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_30279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e30294){if((e30294 instanceof Object)){
var ex__26888__auto__ = e30294;
var statearr_30295_30304 = state_30279;
(statearr_30295_30304[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30305 = state_30279;
state_30279 = G__30305;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto__ = function(state_30279){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto____1.call(this,state_30279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___30297,out))
})();
var state__26998__auto__ = (function (){var statearr_30296 = f__26997__auto__.call(null);
(statearr_30296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___30297);

return statearr_30296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___30297,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30306,opts){
var map__30310 = p__30306;
var map__30310__$1 = ((((!((map__30310 == null)))?((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);
var eval_body__$1 = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24739__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24739__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24739__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30312){var e = e30312;
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
return (function (p1__30313_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30313_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30322){
var vec__30323 = p__30322;
var k = cljs.core.nth.call(null,vec__30323,(0),null);
var v = cljs.core.nth.call(null,vec__30323,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30326){
var vec__30327 = p__30326;
var k = cljs.core.nth.call(null,vec__30327,(0),null);
var v = cljs.core.nth.call(null,vec__30327,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30333,p__30334){
var map__30581 = p__30333;
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var opts = map__30581__$1;
var before_jsload = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30582 = p__30334;
var map__30582__$1 = ((((!((map__30582 == null)))?((((map__30582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30582):map__30582);
var msg = map__30582__$1;
var files = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30582__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (7))){
var inst_30598 = (state_30735[(7)]);
var inst_30596 = (state_30735[(8)]);
var inst_30597 = (state_30735[(9)]);
var inst_30599 = (state_30735[(10)]);
var inst_30604 = cljs.core._nth.call(null,inst_30597,inst_30599);
var inst_30605 = figwheel.client.file_reloading.eval_body.call(null,inst_30604,opts);
var inst_30606 = (inst_30599 + (1));
var tmp30737 = inst_30598;
var tmp30738 = inst_30596;
var tmp30739 = inst_30597;
var inst_30596__$1 = tmp30738;
var inst_30597__$1 = tmp30739;
var inst_30598__$1 = tmp30737;
var inst_30599__$1 = inst_30606;
var state_30735__$1 = (function (){var statearr_30740 = state_30735;
(statearr_30740[(11)] = inst_30605);

(statearr_30740[(7)] = inst_30598__$1);

(statearr_30740[(8)] = inst_30596__$1);

(statearr_30740[(9)] = inst_30597__$1);

(statearr_30740[(10)] = inst_30599__$1);

return statearr_30740;
})();
var statearr_30741_30827 = state_30735__$1;
(statearr_30741_30827[(2)] = null);

(statearr_30741_30827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (20))){
var inst_30639 = (state_30735[(12)]);
var inst_30647 = figwheel.client.file_reloading.sort_files.call(null,inst_30639);
var state_30735__$1 = state_30735;
var statearr_30742_30828 = state_30735__$1;
(statearr_30742_30828[(2)] = inst_30647);

(statearr_30742_30828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (27))){
var state_30735__$1 = state_30735;
var statearr_30743_30829 = state_30735__$1;
(statearr_30743_30829[(2)] = null);

(statearr_30743_30829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (1))){
var inst_30588 = (state_30735[(13)]);
var inst_30585 = before_jsload.call(null,files);
var inst_30586 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30587 = (function (){return ((function (inst_30588,inst_30585,inst_30586,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30330_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30330_SHARP_);
});
;})(inst_30588,inst_30585,inst_30586,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30588__$1 = cljs.core.filter.call(null,inst_30587,files);
var inst_30589 = cljs.core.not_empty.call(null,inst_30588__$1);
var state_30735__$1 = (function (){var statearr_30744 = state_30735;
(statearr_30744[(13)] = inst_30588__$1);

(statearr_30744[(14)] = inst_30586);

(statearr_30744[(15)] = inst_30585);

return statearr_30744;
})();
if(cljs.core.truth_(inst_30589)){
var statearr_30745_30830 = state_30735__$1;
(statearr_30745_30830[(1)] = (2));

} else {
var statearr_30746_30831 = state_30735__$1;
(statearr_30746_30831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (24))){
var state_30735__$1 = state_30735;
var statearr_30747_30832 = state_30735__$1;
(statearr_30747_30832[(2)] = null);

(statearr_30747_30832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (39))){
var inst_30689 = (state_30735[(16)]);
var state_30735__$1 = state_30735;
var statearr_30748_30833 = state_30735__$1;
(statearr_30748_30833[(2)] = inst_30689);

(statearr_30748_30833[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (46))){
var inst_30730 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30749_30834 = state_30735__$1;
(statearr_30749_30834[(2)] = inst_30730);

(statearr_30749_30834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (4))){
var inst_30633 = (state_30735[(2)]);
var inst_30634 = cljs.core.List.EMPTY;
var inst_30635 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30634);
var inst_30636 = (function (){return ((function (inst_30633,inst_30634,inst_30635,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30331_SHARP_){
var and__24739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30331_SHARP_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30331_SHARP_));
} else {
return and__24739__auto__;
}
});
;})(inst_30633,inst_30634,inst_30635,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30637 = cljs.core.filter.call(null,inst_30636,files);
var inst_30638 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30639 = cljs.core.concat.call(null,inst_30637,inst_30638);
var state_30735__$1 = (function (){var statearr_30750 = state_30735;
(statearr_30750[(17)] = inst_30633);

(statearr_30750[(12)] = inst_30639);

(statearr_30750[(18)] = inst_30635);

return statearr_30750;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30751_30835 = state_30735__$1;
(statearr_30751_30835[(1)] = (16));

} else {
var statearr_30752_30836 = state_30735__$1;
(statearr_30752_30836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (15))){
var inst_30623 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30753_30837 = state_30735__$1;
(statearr_30753_30837[(2)] = inst_30623);

(statearr_30753_30837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (21))){
var inst_30649 = (state_30735[(19)]);
var inst_30649__$1 = (state_30735[(2)]);
var inst_30650 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30649__$1);
var state_30735__$1 = (function (){var statearr_30754 = state_30735;
(statearr_30754[(19)] = inst_30649__$1);

return statearr_30754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30735__$1,(22),inst_30650);
} else {
if((state_val_30736 === (31))){
var inst_30733 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30735__$1,inst_30733);
} else {
if((state_val_30736 === (32))){
var inst_30689 = (state_30735[(16)]);
var inst_30694 = inst_30689.cljs$lang$protocol_mask$partition0$;
var inst_30695 = (inst_30694 & (64));
var inst_30696 = inst_30689.cljs$core$ISeq$;
var inst_30697 = (inst_30695) || (inst_30696);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30697)){
var statearr_30755_30838 = state_30735__$1;
(statearr_30755_30838[(1)] = (35));

} else {
var statearr_30756_30839 = state_30735__$1;
(statearr_30756_30839[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (40))){
var inst_30710 = (state_30735[(20)]);
var inst_30709 = (state_30735[(2)]);
var inst_30710__$1 = cljs.core.get.call(null,inst_30709,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30711 = cljs.core.get.call(null,inst_30709,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30712 = cljs.core.not_empty.call(null,inst_30710__$1);
var state_30735__$1 = (function (){var statearr_30757 = state_30735;
(statearr_30757[(21)] = inst_30711);

(statearr_30757[(20)] = inst_30710__$1);

return statearr_30757;
})();
if(cljs.core.truth_(inst_30712)){
var statearr_30758_30840 = state_30735__$1;
(statearr_30758_30840[(1)] = (41));

} else {
var statearr_30759_30841 = state_30735__$1;
(statearr_30759_30841[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (33))){
var state_30735__$1 = state_30735;
var statearr_30760_30842 = state_30735__$1;
(statearr_30760_30842[(2)] = false);

(statearr_30760_30842[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (13))){
var inst_30609 = (state_30735[(22)]);
var inst_30613 = cljs.core.chunk_first.call(null,inst_30609);
var inst_30614 = cljs.core.chunk_rest.call(null,inst_30609);
var inst_30615 = cljs.core.count.call(null,inst_30613);
var inst_30596 = inst_30614;
var inst_30597 = inst_30613;
var inst_30598 = inst_30615;
var inst_30599 = (0);
var state_30735__$1 = (function (){var statearr_30761 = state_30735;
(statearr_30761[(7)] = inst_30598);

(statearr_30761[(8)] = inst_30596);

(statearr_30761[(9)] = inst_30597);

(statearr_30761[(10)] = inst_30599);

return statearr_30761;
})();
var statearr_30762_30843 = state_30735__$1;
(statearr_30762_30843[(2)] = null);

(statearr_30762_30843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (22))){
var inst_30653 = (state_30735[(23)]);
var inst_30652 = (state_30735[(24)]);
var inst_30657 = (state_30735[(25)]);
var inst_30649 = (state_30735[(19)]);
var inst_30652__$1 = (state_30735[(2)]);
var inst_30653__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30652__$1);
var inst_30654 = (function (){var all_files = inst_30649;
var res_SINGLEQUOTE_ = inst_30652__$1;
var res = inst_30653__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30653,inst_30652,inst_30657,inst_30649,inst_30652__$1,inst_30653__$1,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30332_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30332_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30653,inst_30652,inst_30657,inst_30649,inst_30652__$1,inst_30653__$1,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30655 = cljs.core.filter.call(null,inst_30654,inst_30652__$1);
var inst_30656 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30657__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30656);
var inst_30658 = cljs.core.not_empty.call(null,inst_30657__$1);
var state_30735__$1 = (function (){var statearr_30763 = state_30735;
(statearr_30763[(23)] = inst_30653__$1);

(statearr_30763[(24)] = inst_30652__$1);

(statearr_30763[(25)] = inst_30657__$1);

(statearr_30763[(26)] = inst_30655);

return statearr_30763;
})();
if(cljs.core.truth_(inst_30658)){
var statearr_30764_30844 = state_30735__$1;
(statearr_30764_30844[(1)] = (23));

} else {
var statearr_30765_30845 = state_30735__$1;
(statearr_30765_30845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (36))){
var state_30735__$1 = state_30735;
var statearr_30766_30846 = state_30735__$1;
(statearr_30766_30846[(2)] = false);

(statearr_30766_30846[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (41))){
var inst_30710 = (state_30735[(20)]);
var inst_30714 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30715 = cljs.core.map.call(null,inst_30714,inst_30710);
var inst_30716 = cljs.core.pr_str.call(null,inst_30715);
var inst_30717 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30716)].join('');
var inst_30718 = figwheel.client.utils.log.call(null,inst_30717);
var state_30735__$1 = state_30735;
var statearr_30767_30847 = state_30735__$1;
(statearr_30767_30847[(2)] = inst_30718);

(statearr_30767_30847[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (43))){
var inst_30711 = (state_30735[(21)]);
var inst_30721 = (state_30735[(2)]);
var inst_30722 = cljs.core.not_empty.call(null,inst_30711);
var state_30735__$1 = (function (){var statearr_30768 = state_30735;
(statearr_30768[(27)] = inst_30721);

return statearr_30768;
})();
if(cljs.core.truth_(inst_30722)){
var statearr_30769_30848 = state_30735__$1;
(statearr_30769_30848[(1)] = (44));

} else {
var statearr_30770_30849 = state_30735__$1;
(statearr_30770_30849[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (29))){
var inst_30653 = (state_30735[(23)]);
var inst_30652 = (state_30735[(24)]);
var inst_30689 = (state_30735[(16)]);
var inst_30657 = (state_30735[(25)]);
var inst_30649 = (state_30735[(19)]);
var inst_30655 = (state_30735[(26)]);
var inst_30685 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30688 = (function (){var all_files = inst_30649;
var res_SINGLEQUOTE_ = inst_30652;
var res = inst_30653;
var files_not_loaded = inst_30655;
var dependencies_that_loaded = inst_30657;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30689,inst_30657,inst_30649,inst_30655,inst_30685,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30687){
var map__30771 = p__30687;
var map__30771__$1 = ((((!((map__30771 == null)))?((((map__30771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var namespace = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30689,inst_30657,inst_30649,inst_30655,inst_30685,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30689__$1 = cljs.core.group_by.call(null,inst_30688,inst_30655);
var inst_30691 = (inst_30689__$1 == null);
var inst_30692 = cljs.core.not.call(null,inst_30691);
var state_30735__$1 = (function (){var statearr_30773 = state_30735;
(statearr_30773[(28)] = inst_30685);

(statearr_30773[(16)] = inst_30689__$1);

return statearr_30773;
})();
if(inst_30692){
var statearr_30774_30850 = state_30735__$1;
(statearr_30774_30850[(1)] = (32));

} else {
var statearr_30775_30851 = state_30735__$1;
(statearr_30775_30851[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (44))){
var inst_30711 = (state_30735[(21)]);
var inst_30724 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30711);
var inst_30725 = cljs.core.pr_str.call(null,inst_30724);
var inst_30726 = [cljs.core.str("not required: "),cljs.core.str(inst_30725)].join('');
var inst_30727 = figwheel.client.utils.log.call(null,inst_30726);
var state_30735__$1 = state_30735;
var statearr_30776_30852 = state_30735__$1;
(statearr_30776_30852[(2)] = inst_30727);

(statearr_30776_30852[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (6))){
var inst_30630 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30777_30853 = state_30735__$1;
(statearr_30777_30853[(2)] = inst_30630);

(statearr_30777_30853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (28))){
var inst_30655 = (state_30735[(26)]);
var inst_30682 = (state_30735[(2)]);
var inst_30683 = cljs.core.not_empty.call(null,inst_30655);
var state_30735__$1 = (function (){var statearr_30778 = state_30735;
(statearr_30778[(29)] = inst_30682);

return statearr_30778;
})();
if(cljs.core.truth_(inst_30683)){
var statearr_30779_30854 = state_30735__$1;
(statearr_30779_30854[(1)] = (29));

} else {
var statearr_30780_30855 = state_30735__$1;
(statearr_30780_30855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (25))){
var inst_30653 = (state_30735[(23)]);
var inst_30669 = (state_30735[(2)]);
var inst_30670 = cljs.core.not_empty.call(null,inst_30653);
var state_30735__$1 = (function (){var statearr_30781 = state_30735;
(statearr_30781[(30)] = inst_30669);

return statearr_30781;
})();
if(cljs.core.truth_(inst_30670)){
var statearr_30782_30856 = state_30735__$1;
(statearr_30782_30856[(1)] = (26));

} else {
var statearr_30783_30857 = state_30735__$1;
(statearr_30783_30857[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (34))){
var inst_30704 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30704)){
var statearr_30784_30858 = state_30735__$1;
(statearr_30784_30858[(1)] = (38));

} else {
var statearr_30785_30859 = state_30735__$1;
(statearr_30785_30859[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (17))){
var state_30735__$1 = state_30735;
var statearr_30786_30860 = state_30735__$1;
(statearr_30786_30860[(2)] = recompile_dependents);

(statearr_30786_30860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (3))){
var state_30735__$1 = state_30735;
var statearr_30787_30861 = state_30735__$1;
(statearr_30787_30861[(2)] = null);

(statearr_30787_30861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (12))){
var inst_30626 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30788_30862 = state_30735__$1;
(statearr_30788_30862[(2)] = inst_30626);

(statearr_30788_30862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (2))){
var inst_30588 = (state_30735[(13)]);
var inst_30595 = cljs.core.seq.call(null,inst_30588);
var inst_30596 = inst_30595;
var inst_30597 = null;
var inst_30598 = (0);
var inst_30599 = (0);
var state_30735__$1 = (function (){var statearr_30789 = state_30735;
(statearr_30789[(7)] = inst_30598);

(statearr_30789[(8)] = inst_30596);

(statearr_30789[(9)] = inst_30597);

(statearr_30789[(10)] = inst_30599);

return statearr_30789;
})();
var statearr_30790_30863 = state_30735__$1;
(statearr_30790_30863[(2)] = null);

(statearr_30790_30863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (23))){
var inst_30653 = (state_30735[(23)]);
var inst_30652 = (state_30735[(24)]);
var inst_30657 = (state_30735[(25)]);
var inst_30649 = (state_30735[(19)]);
var inst_30655 = (state_30735[(26)]);
var inst_30660 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30662 = (function (){var all_files = inst_30649;
var res_SINGLEQUOTE_ = inst_30652;
var res = inst_30653;
var files_not_loaded = inst_30655;
var dependencies_that_loaded = inst_30657;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30657,inst_30649,inst_30655,inst_30660,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30661){
var map__30791 = p__30661;
var map__30791__$1 = ((((!((map__30791 == null)))?((((map__30791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var request_url = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30657,inst_30649,inst_30655,inst_30660,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30663 = cljs.core.reverse.call(null,inst_30657);
var inst_30664 = cljs.core.map.call(null,inst_30662,inst_30663);
var inst_30665 = cljs.core.pr_str.call(null,inst_30664);
var inst_30666 = figwheel.client.utils.log.call(null,inst_30665);
var state_30735__$1 = (function (){var statearr_30793 = state_30735;
(statearr_30793[(31)] = inst_30660);

return statearr_30793;
})();
var statearr_30794_30864 = state_30735__$1;
(statearr_30794_30864[(2)] = inst_30666);

(statearr_30794_30864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (35))){
var state_30735__$1 = state_30735;
var statearr_30795_30865 = state_30735__$1;
(statearr_30795_30865[(2)] = true);

(statearr_30795_30865[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (19))){
var inst_30639 = (state_30735[(12)]);
var inst_30645 = figwheel.client.file_reloading.expand_files.call(null,inst_30639);
var state_30735__$1 = state_30735;
var statearr_30796_30866 = state_30735__$1;
(statearr_30796_30866[(2)] = inst_30645);

(statearr_30796_30866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (11))){
var state_30735__$1 = state_30735;
var statearr_30797_30867 = state_30735__$1;
(statearr_30797_30867[(2)] = null);

(statearr_30797_30867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (9))){
var inst_30628 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30798_30868 = state_30735__$1;
(statearr_30798_30868[(2)] = inst_30628);

(statearr_30798_30868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (5))){
var inst_30598 = (state_30735[(7)]);
var inst_30599 = (state_30735[(10)]);
var inst_30601 = (inst_30599 < inst_30598);
var inst_30602 = inst_30601;
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30602)){
var statearr_30799_30869 = state_30735__$1;
(statearr_30799_30869[(1)] = (7));

} else {
var statearr_30800_30870 = state_30735__$1;
(statearr_30800_30870[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (14))){
var inst_30609 = (state_30735[(22)]);
var inst_30618 = cljs.core.first.call(null,inst_30609);
var inst_30619 = figwheel.client.file_reloading.eval_body.call(null,inst_30618,opts);
var inst_30620 = cljs.core.next.call(null,inst_30609);
var inst_30596 = inst_30620;
var inst_30597 = null;
var inst_30598 = (0);
var inst_30599 = (0);
var state_30735__$1 = (function (){var statearr_30801 = state_30735;
(statearr_30801[(32)] = inst_30619);

(statearr_30801[(7)] = inst_30598);

(statearr_30801[(8)] = inst_30596);

(statearr_30801[(9)] = inst_30597);

(statearr_30801[(10)] = inst_30599);

return statearr_30801;
})();
var statearr_30802_30871 = state_30735__$1;
(statearr_30802_30871[(2)] = null);

(statearr_30802_30871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (45))){
var state_30735__$1 = state_30735;
var statearr_30803_30872 = state_30735__$1;
(statearr_30803_30872[(2)] = null);

(statearr_30803_30872[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (26))){
var inst_30653 = (state_30735[(23)]);
var inst_30652 = (state_30735[(24)]);
var inst_30657 = (state_30735[(25)]);
var inst_30649 = (state_30735[(19)]);
var inst_30655 = (state_30735[(26)]);
var inst_30672 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30674 = (function (){var all_files = inst_30649;
var res_SINGLEQUOTE_ = inst_30652;
var res = inst_30653;
var files_not_loaded = inst_30655;
var dependencies_that_loaded = inst_30657;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30657,inst_30649,inst_30655,inst_30672,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30673){
var map__30804 = p__30673;
var map__30804__$1 = ((((!((map__30804 == null)))?((((map__30804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);
var namespace = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30657,inst_30649,inst_30655,inst_30672,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30675 = cljs.core.map.call(null,inst_30674,inst_30653);
var inst_30676 = cljs.core.pr_str.call(null,inst_30675);
var inst_30677 = figwheel.client.utils.log.call(null,inst_30676);
var inst_30678 = (function (){var all_files = inst_30649;
var res_SINGLEQUOTE_ = inst_30652;
var res = inst_30653;
var files_not_loaded = inst_30655;
var dependencies_that_loaded = inst_30657;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30657,inst_30649,inst_30655,inst_30672,inst_30674,inst_30675,inst_30676,inst_30677,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30653,inst_30652,inst_30657,inst_30649,inst_30655,inst_30672,inst_30674,inst_30675,inst_30676,inst_30677,state_val_30736,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30679 = setTimeout(inst_30678,(10));
var state_30735__$1 = (function (){var statearr_30806 = state_30735;
(statearr_30806[(33)] = inst_30677);

(statearr_30806[(34)] = inst_30672);

return statearr_30806;
})();
var statearr_30807_30873 = state_30735__$1;
(statearr_30807_30873[(2)] = inst_30679);

(statearr_30807_30873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (16))){
var state_30735__$1 = state_30735;
var statearr_30808_30874 = state_30735__$1;
(statearr_30808_30874[(2)] = reload_dependents);

(statearr_30808_30874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (38))){
var inst_30689 = (state_30735[(16)]);
var inst_30706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30689);
var state_30735__$1 = state_30735;
var statearr_30809_30875 = state_30735__$1;
(statearr_30809_30875[(2)] = inst_30706);

(statearr_30809_30875[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (30))){
var state_30735__$1 = state_30735;
var statearr_30810_30876 = state_30735__$1;
(statearr_30810_30876[(2)] = null);

(statearr_30810_30876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (10))){
var inst_30609 = (state_30735[(22)]);
var inst_30611 = cljs.core.chunked_seq_QMARK_.call(null,inst_30609);
var state_30735__$1 = state_30735;
if(inst_30611){
var statearr_30811_30877 = state_30735__$1;
(statearr_30811_30877[(1)] = (13));

} else {
var statearr_30812_30878 = state_30735__$1;
(statearr_30812_30878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (18))){
var inst_30643 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30643)){
var statearr_30813_30879 = state_30735__$1;
(statearr_30813_30879[(1)] = (19));

} else {
var statearr_30814_30880 = state_30735__$1;
(statearr_30814_30880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (42))){
var state_30735__$1 = state_30735;
var statearr_30815_30881 = state_30735__$1;
(statearr_30815_30881[(2)] = null);

(statearr_30815_30881[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (37))){
var inst_30701 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30816_30882 = state_30735__$1;
(statearr_30816_30882[(2)] = inst_30701);

(statearr_30816_30882[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (8))){
var inst_30596 = (state_30735[(8)]);
var inst_30609 = (state_30735[(22)]);
var inst_30609__$1 = cljs.core.seq.call(null,inst_30596);
var state_30735__$1 = (function (){var statearr_30817 = state_30735;
(statearr_30817[(22)] = inst_30609__$1);

return statearr_30817;
})();
if(inst_30609__$1){
var statearr_30818_30883 = state_30735__$1;
(statearr_30818_30883[(1)] = (10));

} else {
var statearr_30819_30884 = state_30735__$1;
(statearr_30819_30884[(1)] = (11));

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
});})(c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26884__auto__,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto____0 = (function (){
var statearr_30823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30823[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto__);

(statearr_30823[(1)] = (1));

return statearr_30823;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto____1 = (function (state_30735){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_30735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e30824){if((e30824 instanceof Object)){
var ex__26888__auto__ = e30824;
var statearr_30825_30885 = state_30735;
(statearr_30825_30885[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30886 = state_30735;
state_30735 = G__30886;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26998__auto__ = (function (){var statearr_30826 = f__26997__auto__.call(null);
(statearr_30826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__,map__30581,map__30581__$1,opts,before_jsload,on_jsload,reload_dependents,map__30582,map__30582__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26996__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30889,link){
var map__30892 = p__30889;
var map__30892__$1 = ((((!((map__30892 == null)))?((((map__30892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892):map__30892);
var file = cljs.core.get.call(null,map__30892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30892,map__30892__$1,file){
return (function (p1__30887_SHARP_,p2__30888_SHARP_){
if(cljs.core._EQ_.call(null,p1__30887_SHARP_,p2__30888_SHARP_)){
return p1__30887_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30892,map__30892__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30898){
var map__30899 = p__30898;
var map__30899__$1 = ((((!((map__30899 == null)))?((((map__30899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30899):map__30899);
var match_length = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30899__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30894_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30894_SHARP_);
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
var args30901 = [];
var len__25826__auto___30904 = arguments.length;
var i__25827__auto___30905 = (0);
while(true){
if((i__25827__auto___30905 < len__25826__auto___30904)){
args30901.push((arguments[i__25827__auto___30905]));

var G__30906 = (i__25827__auto___30905 + (1));
i__25827__auto___30905 = G__30906;
continue;
} else {
}
break;
}

var G__30903 = args30901.length;
switch (G__30903) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30901.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30908_SHARP_,p2__30909_SHARP_){
return cljs.core.assoc.call(null,p1__30908_SHARP_,cljs.core.get.call(null,p2__30909_SHARP_,key),p2__30909_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30910){
var map__30913 = p__30910;
var map__30913__$1 = ((((!((map__30913 == null)))?((((map__30913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30913):map__30913);
var f_data = map__30913__$1;
var file = cljs.core.get.call(null,map__30913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30915,p__30916){
var map__30925 = p__30915;
var map__30925__$1 = ((((!((map__30925 == null)))?((((map__30925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30925):map__30925);
var opts = map__30925__$1;
var on_cssload = cljs.core.get.call(null,map__30925__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30926 = p__30916;
var map__30926__$1 = ((((!((map__30926 == null)))?((((map__30926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30926):map__30926);
var files_msg = map__30926__$1;
var files = cljs.core.get.call(null,map__30926__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30929_30933 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30930_30934 = null;
var count__30931_30935 = (0);
var i__30932_30936 = (0);
while(true){
if((i__30932_30936 < count__30931_30935)){
var f_30937 = cljs.core._nth.call(null,chunk__30930_30934,i__30932_30936);
figwheel.client.file_reloading.reload_css_file.call(null,f_30937);

var G__30938 = seq__30929_30933;
var G__30939 = chunk__30930_30934;
var G__30940 = count__30931_30935;
var G__30941 = (i__30932_30936 + (1));
seq__30929_30933 = G__30938;
chunk__30930_30934 = G__30939;
count__30931_30935 = G__30940;
i__30932_30936 = G__30941;
continue;
} else {
var temp__4657__auto___30942 = cljs.core.seq.call(null,seq__30929_30933);
if(temp__4657__auto___30942){
var seq__30929_30943__$1 = temp__4657__auto___30942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30929_30943__$1)){
var c__25562__auto___30944 = cljs.core.chunk_first.call(null,seq__30929_30943__$1);
var G__30945 = cljs.core.chunk_rest.call(null,seq__30929_30943__$1);
var G__30946 = c__25562__auto___30944;
var G__30947 = cljs.core.count.call(null,c__25562__auto___30944);
var G__30948 = (0);
seq__30929_30933 = G__30945;
chunk__30930_30934 = G__30946;
count__30931_30935 = G__30947;
i__30932_30936 = G__30948;
continue;
} else {
var f_30949 = cljs.core.first.call(null,seq__30929_30943__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30949);

var G__30950 = cljs.core.next.call(null,seq__30929_30943__$1);
var G__30951 = null;
var G__30952 = (0);
var G__30953 = (0);
seq__30929_30933 = G__30950;
chunk__30930_30934 = G__30951;
count__30931_30935 = G__30952;
i__30932_30936 = G__30953;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30925,map__30925__$1,opts,on_cssload,map__30926,map__30926__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30925,map__30925__$1,opts,on_cssload,map__30926,map__30926__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479332382620