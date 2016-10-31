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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47957_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47957_SHARP_));
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
var seq__47962 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47963 = null;
var count__47964 = (0);
var i__47965 = (0);
while(true){
if((i__47965 < count__47964)){
var n = cljs.core._nth.call(null,chunk__47963,i__47965);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47966 = seq__47962;
var G__47967 = chunk__47963;
var G__47968 = count__47964;
var G__47969 = (i__47965 + (1));
seq__47962 = G__47966;
chunk__47963 = G__47967;
count__47964 = G__47968;
i__47965 = G__47969;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47962);
if(temp__4657__auto__){
var seq__47962__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47962__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__47962__$1);
var G__47970 = cljs.core.chunk_rest.call(null,seq__47962__$1);
var G__47971 = c__25562__auto__;
var G__47972 = cljs.core.count.call(null,c__25562__auto__);
var G__47973 = (0);
seq__47962 = G__47970;
chunk__47963 = G__47971;
count__47964 = G__47972;
i__47965 = G__47973;
continue;
} else {
var n = cljs.core.first.call(null,seq__47962__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47974 = cljs.core.next.call(null,seq__47962__$1);
var G__47975 = null;
var G__47976 = (0);
var G__47977 = (0);
seq__47962 = G__47974;
chunk__47963 = G__47975;
count__47964 = G__47976;
i__47965 = G__47977;
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

var seq__48028_48039 = cljs.core.seq.call(null,deps);
var chunk__48029_48040 = null;
var count__48030_48041 = (0);
var i__48031_48042 = (0);
while(true){
if((i__48031_48042 < count__48030_48041)){
var dep_48043 = cljs.core._nth.call(null,chunk__48029_48040,i__48031_48042);
topo_sort_helper_STAR_.call(null,dep_48043,(depth + (1)),state);

var G__48044 = seq__48028_48039;
var G__48045 = chunk__48029_48040;
var G__48046 = count__48030_48041;
var G__48047 = (i__48031_48042 + (1));
seq__48028_48039 = G__48044;
chunk__48029_48040 = G__48045;
count__48030_48041 = G__48046;
i__48031_48042 = G__48047;
continue;
} else {
var temp__4657__auto___48048 = cljs.core.seq.call(null,seq__48028_48039);
if(temp__4657__auto___48048){
var seq__48028_48049__$1 = temp__4657__auto___48048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48028_48049__$1)){
var c__25562__auto___48050 = cljs.core.chunk_first.call(null,seq__48028_48049__$1);
var G__48051 = cljs.core.chunk_rest.call(null,seq__48028_48049__$1);
var G__48052 = c__25562__auto___48050;
var G__48053 = cljs.core.count.call(null,c__25562__auto___48050);
var G__48054 = (0);
seq__48028_48039 = G__48051;
chunk__48029_48040 = G__48052;
count__48030_48041 = G__48053;
i__48031_48042 = G__48054;
continue;
} else {
var dep_48055 = cljs.core.first.call(null,seq__48028_48049__$1);
topo_sort_helper_STAR_.call(null,dep_48055,(depth + (1)),state);

var G__48056 = cljs.core.next.call(null,seq__48028_48049__$1);
var G__48057 = null;
var G__48058 = (0);
var G__48059 = (0);
seq__48028_48039 = G__48056;
chunk__48029_48040 = G__48057;
count__48030_48041 = G__48058;
i__48031_48042 = G__48059;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48032){
var vec__48036 = p__48032;
var seq__48037 = cljs.core.seq.call(null,vec__48036);
var first__48038 = cljs.core.first.call(null,seq__48037);
var seq__48037__$1 = cljs.core.next.call(null,seq__48037);
var x = first__48038;
var xs = seq__48037__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48036,seq__48037,first__48038,seq__48037__$1,x,xs,get_deps__$1){
return (function (p1__47978_SHARP_){
return clojure.set.difference.call(null,p1__47978_SHARP_,x);
});})(vec__48036,seq__48037,first__48038,seq__48037__$1,x,xs,get_deps__$1))
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
var seq__48072 = cljs.core.seq.call(null,provides);
var chunk__48073 = null;
var count__48074 = (0);
var i__48075 = (0);
while(true){
if((i__48075 < count__48074)){
var prov = cljs.core._nth.call(null,chunk__48073,i__48075);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48076_48084 = cljs.core.seq.call(null,requires);
var chunk__48077_48085 = null;
var count__48078_48086 = (0);
var i__48079_48087 = (0);
while(true){
if((i__48079_48087 < count__48078_48086)){
var req_48088 = cljs.core._nth.call(null,chunk__48077_48085,i__48079_48087);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48088,prov);

var G__48089 = seq__48076_48084;
var G__48090 = chunk__48077_48085;
var G__48091 = count__48078_48086;
var G__48092 = (i__48079_48087 + (1));
seq__48076_48084 = G__48089;
chunk__48077_48085 = G__48090;
count__48078_48086 = G__48091;
i__48079_48087 = G__48092;
continue;
} else {
var temp__4657__auto___48093 = cljs.core.seq.call(null,seq__48076_48084);
if(temp__4657__auto___48093){
var seq__48076_48094__$1 = temp__4657__auto___48093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48076_48094__$1)){
var c__25562__auto___48095 = cljs.core.chunk_first.call(null,seq__48076_48094__$1);
var G__48096 = cljs.core.chunk_rest.call(null,seq__48076_48094__$1);
var G__48097 = c__25562__auto___48095;
var G__48098 = cljs.core.count.call(null,c__25562__auto___48095);
var G__48099 = (0);
seq__48076_48084 = G__48096;
chunk__48077_48085 = G__48097;
count__48078_48086 = G__48098;
i__48079_48087 = G__48099;
continue;
} else {
var req_48100 = cljs.core.first.call(null,seq__48076_48094__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48100,prov);

var G__48101 = cljs.core.next.call(null,seq__48076_48094__$1);
var G__48102 = null;
var G__48103 = (0);
var G__48104 = (0);
seq__48076_48084 = G__48101;
chunk__48077_48085 = G__48102;
count__48078_48086 = G__48103;
i__48079_48087 = G__48104;
continue;
}
} else {
}
}
break;
}

var G__48105 = seq__48072;
var G__48106 = chunk__48073;
var G__48107 = count__48074;
var G__48108 = (i__48075 + (1));
seq__48072 = G__48105;
chunk__48073 = G__48106;
count__48074 = G__48107;
i__48075 = G__48108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48072);
if(temp__4657__auto__){
var seq__48072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48072__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__48072__$1);
var G__48109 = cljs.core.chunk_rest.call(null,seq__48072__$1);
var G__48110 = c__25562__auto__;
var G__48111 = cljs.core.count.call(null,c__25562__auto__);
var G__48112 = (0);
seq__48072 = G__48109;
chunk__48073 = G__48110;
count__48074 = G__48111;
i__48075 = G__48112;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48072__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48080_48113 = cljs.core.seq.call(null,requires);
var chunk__48081_48114 = null;
var count__48082_48115 = (0);
var i__48083_48116 = (0);
while(true){
if((i__48083_48116 < count__48082_48115)){
var req_48117 = cljs.core._nth.call(null,chunk__48081_48114,i__48083_48116);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48117,prov);

var G__48118 = seq__48080_48113;
var G__48119 = chunk__48081_48114;
var G__48120 = count__48082_48115;
var G__48121 = (i__48083_48116 + (1));
seq__48080_48113 = G__48118;
chunk__48081_48114 = G__48119;
count__48082_48115 = G__48120;
i__48083_48116 = G__48121;
continue;
} else {
var temp__4657__auto___48122__$1 = cljs.core.seq.call(null,seq__48080_48113);
if(temp__4657__auto___48122__$1){
var seq__48080_48123__$1 = temp__4657__auto___48122__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48080_48123__$1)){
var c__25562__auto___48124 = cljs.core.chunk_first.call(null,seq__48080_48123__$1);
var G__48125 = cljs.core.chunk_rest.call(null,seq__48080_48123__$1);
var G__48126 = c__25562__auto___48124;
var G__48127 = cljs.core.count.call(null,c__25562__auto___48124);
var G__48128 = (0);
seq__48080_48113 = G__48125;
chunk__48081_48114 = G__48126;
count__48082_48115 = G__48127;
i__48083_48116 = G__48128;
continue;
} else {
var req_48129 = cljs.core.first.call(null,seq__48080_48123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48129,prov);

var G__48130 = cljs.core.next.call(null,seq__48080_48123__$1);
var G__48131 = null;
var G__48132 = (0);
var G__48133 = (0);
seq__48080_48113 = G__48130;
chunk__48081_48114 = G__48131;
count__48082_48115 = G__48132;
i__48083_48116 = G__48133;
continue;
}
} else {
}
}
break;
}

var G__48134 = cljs.core.next.call(null,seq__48072__$1);
var G__48135 = null;
var G__48136 = (0);
var G__48137 = (0);
seq__48072 = G__48134;
chunk__48073 = G__48135;
count__48074 = G__48136;
i__48075 = G__48137;
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
var seq__48142_48146 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48143_48147 = null;
var count__48144_48148 = (0);
var i__48145_48149 = (0);
while(true){
if((i__48145_48149 < count__48144_48148)){
var ns_48150 = cljs.core._nth.call(null,chunk__48143_48147,i__48145_48149);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48150);

var G__48151 = seq__48142_48146;
var G__48152 = chunk__48143_48147;
var G__48153 = count__48144_48148;
var G__48154 = (i__48145_48149 + (1));
seq__48142_48146 = G__48151;
chunk__48143_48147 = G__48152;
count__48144_48148 = G__48153;
i__48145_48149 = G__48154;
continue;
} else {
var temp__4657__auto___48155 = cljs.core.seq.call(null,seq__48142_48146);
if(temp__4657__auto___48155){
var seq__48142_48156__$1 = temp__4657__auto___48155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48142_48156__$1)){
var c__25562__auto___48157 = cljs.core.chunk_first.call(null,seq__48142_48156__$1);
var G__48158 = cljs.core.chunk_rest.call(null,seq__48142_48156__$1);
var G__48159 = c__25562__auto___48157;
var G__48160 = cljs.core.count.call(null,c__25562__auto___48157);
var G__48161 = (0);
seq__48142_48146 = G__48158;
chunk__48143_48147 = G__48159;
count__48144_48148 = G__48160;
i__48145_48149 = G__48161;
continue;
} else {
var ns_48162 = cljs.core.first.call(null,seq__48142_48156__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48162);

var G__48163 = cljs.core.next.call(null,seq__48142_48156__$1);
var G__48164 = null;
var G__48165 = (0);
var G__48166 = (0);
seq__48142_48146 = G__48163;
chunk__48143_48147 = G__48164;
count__48144_48148 = G__48165;
i__48145_48149 = G__48166;
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
var G__48167__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48168__i = 0, G__48168__a = new Array(arguments.length -  0);
while (G__48168__i < G__48168__a.length) {G__48168__a[G__48168__i] = arguments[G__48168__i + 0]; ++G__48168__i;}
  args = new cljs.core.IndexedSeq(G__48168__a,0);
} 
return G__48167__delegate.call(this,args);};
G__48167.cljs$lang$maxFixedArity = 0;
G__48167.cljs$lang$applyTo = (function (arglist__48169){
var args = cljs.core.seq(arglist__48169);
return G__48167__delegate(args);
});
G__48167.cljs$core$IFn$_invoke$arity$variadic = G__48167__delegate;
return G__48167;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48171 = cljs.core._EQ_;
var expr__48172 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48171.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48172))){
var path_parts = ((function (pred__48171,expr__48172){
return (function (p1__48170_SHARP_){
return clojure.string.split.call(null,p1__48170_SHARP_,/[\/\\]/);
});})(pred__48171,expr__48172))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__48171,expr__48172){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48174){if((e48174 instanceof Error)){
var e = e48174;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48174;

}
}})());
});
;})(path_parts,sep,root,pred__48171,expr__48172))
} else {
if(cljs.core.truth_(pred__48171.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48172))){
return ((function (pred__48171,expr__48172){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__48171,expr__48172){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__48171,expr__48172))
);

return deferred.addErrback(((function (deferred,pred__48171,expr__48172){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__48171,expr__48172))
);
});
;})(pred__48171,expr__48172))
} else {
return ((function (pred__48171,expr__48172){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__48171,expr__48172))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48175,callback){
var map__48178 = p__48175;
var map__48178__$1 = ((((!((map__48178 == null)))?((((map__48178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48178):map__48178);
var file_msg = map__48178__$1;
var request_url = cljs.core.get.call(null,map__48178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__48178,map__48178__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__48178,map__48178__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__){
return (function (state_48202){
var state_val_48203 = (state_48202[(1)]);
if((state_val_48203 === (7))){
var inst_48198 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
var statearr_48204_48224 = state_48202__$1;
(statearr_48204_48224[(2)] = inst_48198);

(statearr_48204_48224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (1))){
var state_48202__$1 = state_48202;
var statearr_48205_48225 = state_48202__$1;
(statearr_48205_48225[(2)] = null);

(statearr_48205_48225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (4))){
var inst_48182 = (state_48202[(7)]);
var inst_48182__$1 = (state_48202[(2)]);
var state_48202__$1 = (function (){var statearr_48206 = state_48202;
(statearr_48206[(7)] = inst_48182__$1);

return statearr_48206;
})();
if(cljs.core.truth_(inst_48182__$1)){
var statearr_48207_48226 = state_48202__$1;
(statearr_48207_48226[(1)] = (5));

} else {
var statearr_48208_48227 = state_48202__$1;
(statearr_48208_48227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (6))){
var state_48202__$1 = state_48202;
var statearr_48209_48228 = state_48202__$1;
(statearr_48209_48228[(2)] = null);

(statearr_48209_48228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (3))){
var inst_48200 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48202__$1,inst_48200);
} else {
if((state_val_48203 === (2))){
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48202__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48203 === (11))){
var inst_48194 = (state_48202[(2)]);
var state_48202__$1 = (function (){var statearr_48210 = state_48202;
(statearr_48210[(8)] = inst_48194);

return statearr_48210;
})();
var statearr_48211_48229 = state_48202__$1;
(statearr_48211_48229[(2)] = null);

(statearr_48211_48229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (9))){
var inst_48186 = (state_48202[(9)]);
var inst_48188 = (state_48202[(10)]);
var inst_48190 = inst_48188.call(null,inst_48186);
var state_48202__$1 = state_48202;
var statearr_48212_48230 = state_48202__$1;
(statearr_48212_48230[(2)] = inst_48190);

(statearr_48212_48230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (5))){
var inst_48182 = (state_48202[(7)]);
var inst_48184 = figwheel.client.file_reloading.blocking_load.call(null,inst_48182);
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48202__$1,(8),inst_48184);
} else {
if((state_val_48203 === (10))){
var inst_48186 = (state_48202[(9)]);
var inst_48192 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48186);
var state_48202__$1 = state_48202;
var statearr_48213_48231 = state_48202__$1;
(statearr_48213_48231[(2)] = inst_48192);

(statearr_48213_48231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (8))){
var inst_48188 = (state_48202[(10)]);
var inst_48182 = (state_48202[(7)]);
var inst_48186 = (state_48202[(2)]);
var inst_48187 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48188__$1 = cljs.core.get.call(null,inst_48187,inst_48182);
var state_48202__$1 = (function (){var statearr_48214 = state_48202;
(statearr_48214[(9)] = inst_48186);

(statearr_48214[(10)] = inst_48188__$1);

return statearr_48214;
})();
if(cljs.core.truth_(inst_48188__$1)){
var statearr_48215_48232 = state_48202__$1;
(statearr_48215_48232[(1)] = (9));

} else {
var statearr_48216_48233 = state_48202__$1;
(statearr_48216_48233[(1)] = (10));

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
});})(c__27930__auto__))
;
return ((function (switch__27865__auto__,c__27930__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27866__auto__ = null;
var figwheel$client$file_reloading$state_machine__27866__auto____0 = (function (){
var statearr_48220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48220[(0)] = figwheel$client$file_reloading$state_machine__27866__auto__);

(statearr_48220[(1)] = (1));

return statearr_48220;
});
var figwheel$client$file_reloading$state_machine__27866__auto____1 = (function (state_48202){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_48202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e48221){if((e48221 instanceof Object)){
var ex__27869__auto__ = e48221;
var statearr_48222_48234 = state_48202;
(statearr_48222_48234[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48235 = state_48202;
state_48202 = G__48235;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27866__auto__ = function(state_48202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27866__auto____1.call(this,state_48202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27866__auto____0;
figwheel$client$file_reloading$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27866__auto____1;
return figwheel$client$file_reloading$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_48223 = f__27931__auto__.call(null);
(statearr_48223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_48223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__))
);

return c__27930__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48236,callback){
var map__48239 = p__48236;
var map__48239__$1 = ((((!((map__48239 == null)))?((((map__48239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48239):map__48239);
var file_msg = map__48239__$1;
var namespace = cljs.core.get.call(null,map__48239__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__48239,map__48239__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__48239,map__48239__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48241){
var map__48244 = p__48241;
var map__48244__$1 = ((((!((map__48244 == null)))?((((map__48244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48244):map__48244);
var file_msg = map__48244__$1;
var namespace = cljs.core.get.call(null,map__48244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48246,callback){
var map__48249 = p__48246;
var map__48249__$1 = ((((!((map__48249 == null)))?((((map__48249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48249):map__48249);
var file_msg = map__48249__$1;
var request_url = cljs.core.get.call(null,map__48249__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48249__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27930__auto___48353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___48353,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___48353,out){
return (function (state_48335){
var state_val_48336 = (state_48335[(1)]);
if((state_val_48336 === (1))){
var inst_48309 = cljs.core.seq.call(null,files);
var inst_48310 = cljs.core.first.call(null,inst_48309);
var inst_48311 = cljs.core.next.call(null,inst_48309);
var inst_48312 = files;
var state_48335__$1 = (function (){var statearr_48337 = state_48335;
(statearr_48337[(7)] = inst_48311);

(statearr_48337[(8)] = inst_48310);

(statearr_48337[(9)] = inst_48312);

return statearr_48337;
})();
var statearr_48338_48354 = state_48335__$1;
(statearr_48338_48354[(2)] = null);

(statearr_48338_48354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48336 === (2))){
var inst_48318 = (state_48335[(10)]);
var inst_48312 = (state_48335[(9)]);
var inst_48317 = cljs.core.seq.call(null,inst_48312);
var inst_48318__$1 = cljs.core.first.call(null,inst_48317);
var inst_48319 = cljs.core.next.call(null,inst_48317);
var inst_48320 = (inst_48318__$1 == null);
var inst_48321 = cljs.core.not.call(null,inst_48320);
var state_48335__$1 = (function (){var statearr_48339 = state_48335;
(statearr_48339[(10)] = inst_48318__$1);

(statearr_48339[(11)] = inst_48319);

return statearr_48339;
})();
if(inst_48321){
var statearr_48340_48355 = state_48335__$1;
(statearr_48340_48355[(1)] = (4));

} else {
var statearr_48341_48356 = state_48335__$1;
(statearr_48341_48356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48336 === (3))){
var inst_48333 = (state_48335[(2)]);
var state_48335__$1 = state_48335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48335__$1,inst_48333);
} else {
if((state_val_48336 === (4))){
var inst_48318 = (state_48335[(10)]);
var inst_48323 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48318);
var state_48335__$1 = state_48335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48335__$1,(7),inst_48323);
} else {
if((state_val_48336 === (5))){
var inst_48329 = cljs.core.async.close_BANG_.call(null,out);
var state_48335__$1 = state_48335;
var statearr_48342_48357 = state_48335__$1;
(statearr_48342_48357[(2)] = inst_48329);

(statearr_48342_48357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48336 === (6))){
var inst_48331 = (state_48335[(2)]);
var state_48335__$1 = state_48335;
var statearr_48343_48358 = state_48335__$1;
(statearr_48343_48358[(2)] = inst_48331);

(statearr_48343_48358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48336 === (7))){
var inst_48319 = (state_48335[(11)]);
var inst_48325 = (state_48335[(2)]);
var inst_48326 = cljs.core.async.put_BANG_.call(null,out,inst_48325);
var inst_48312 = inst_48319;
var state_48335__$1 = (function (){var statearr_48344 = state_48335;
(statearr_48344[(12)] = inst_48326);

(statearr_48344[(9)] = inst_48312);

return statearr_48344;
})();
var statearr_48345_48359 = state_48335__$1;
(statearr_48345_48359[(2)] = null);

(statearr_48345_48359[(1)] = (2));


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
});})(c__27930__auto___48353,out))
;
return ((function (switch__27865__auto__,c__27930__auto___48353,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____0 = (function (){
var statearr_48349 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48349[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__);

(statearr_48349[(1)] = (1));

return statearr_48349;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____1 = (function (state_48335){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_48335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e48350){if((e48350 instanceof Object)){
var ex__27869__auto__ = e48350;
var statearr_48351_48360 = state_48335;
(statearr_48351_48360[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48361 = state_48335;
state_48335 = G__48361;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__ = function(state_48335){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____1.call(this,state_48335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___48353,out))
})();
var state__27932__auto__ = (function (){var statearr_48352 = f__27931__auto__.call(null);
(statearr_48352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___48353);

return statearr_48352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___48353,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48362,opts){
var map__48366 = p__48362;
var map__48366__$1 = ((((!((map__48366 == null)))?((((map__48366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48366):map__48366);
var eval_body__$1 = cljs.core.get.call(null,map__48366__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e48368){var e = e48368;
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
return (function (p1__48369_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48369_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__48378){
var vec__48379 = p__48378;
var k = cljs.core.nth.call(null,vec__48379,(0),null);
var v = cljs.core.nth.call(null,vec__48379,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48382){
var vec__48383 = p__48382;
var k = cljs.core.nth.call(null,vec__48383,(0),null);
var v = cljs.core.nth.call(null,vec__48383,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48389,p__48390){
var map__48637 = p__48389;
var map__48637__$1 = ((((!((map__48637 == null)))?((((map__48637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48637):map__48637);
var opts = map__48637__$1;
var before_jsload = cljs.core.get.call(null,map__48637__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48637__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48637__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48638 = p__48390;
var map__48638__$1 = ((((!((map__48638 == null)))?((((map__48638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48638):map__48638);
var msg = map__48638__$1;
var files = cljs.core.get.call(null,map__48638__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48638__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48638__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48791){
var state_val_48792 = (state_48791[(1)]);
if((state_val_48792 === (7))){
var inst_48655 = (state_48791[(7)]);
var inst_48652 = (state_48791[(8)]);
var inst_48653 = (state_48791[(9)]);
var inst_48654 = (state_48791[(10)]);
var inst_48660 = cljs.core._nth.call(null,inst_48653,inst_48655);
var inst_48661 = figwheel.client.file_reloading.eval_body.call(null,inst_48660,opts);
var inst_48662 = (inst_48655 + (1));
var tmp48793 = inst_48652;
var tmp48794 = inst_48653;
var tmp48795 = inst_48654;
var inst_48652__$1 = tmp48793;
var inst_48653__$1 = tmp48794;
var inst_48654__$1 = tmp48795;
var inst_48655__$1 = inst_48662;
var state_48791__$1 = (function (){var statearr_48796 = state_48791;
(statearr_48796[(7)] = inst_48655__$1);

(statearr_48796[(11)] = inst_48661);

(statearr_48796[(8)] = inst_48652__$1);

(statearr_48796[(9)] = inst_48653__$1);

(statearr_48796[(10)] = inst_48654__$1);

return statearr_48796;
})();
var statearr_48797_48883 = state_48791__$1;
(statearr_48797_48883[(2)] = null);

(statearr_48797_48883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (20))){
var inst_48695 = (state_48791[(12)]);
var inst_48703 = figwheel.client.file_reloading.sort_files.call(null,inst_48695);
var state_48791__$1 = state_48791;
var statearr_48798_48884 = state_48791__$1;
(statearr_48798_48884[(2)] = inst_48703);

(statearr_48798_48884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (27))){
var state_48791__$1 = state_48791;
var statearr_48799_48885 = state_48791__$1;
(statearr_48799_48885[(2)] = null);

(statearr_48799_48885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (1))){
var inst_48644 = (state_48791[(13)]);
var inst_48641 = before_jsload.call(null,files);
var inst_48642 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48643 = (function (){return ((function (inst_48644,inst_48641,inst_48642,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48386_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48386_SHARP_);
});
;})(inst_48644,inst_48641,inst_48642,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48644__$1 = cljs.core.filter.call(null,inst_48643,files);
var inst_48645 = cljs.core.not_empty.call(null,inst_48644__$1);
var state_48791__$1 = (function (){var statearr_48800 = state_48791;
(statearr_48800[(14)] = inst_48642);

(statearr_48800[(13)] = inst_48644__$1);

(statearr_48800[(15)] = inst_48641);

return statearr_48800;
})();
if(cljs.core.truth_(inst_48645)){
var statearr_48801_48886 = state_48791__$1;
(statearr_48801_48886[(1)] = (2));

} else {
var statearr_48802_48887 = state_48791__$1;
(statearr_48802_48887[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (24))){
var state_48791__$1 = state_48791;
var statearr_48803_48888 = state_48791__$1;
(statearr_48803_48888[(2)] = null);

(statearr_48803_48888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (39))){
var inst_48745 = (state_48791[(16)]);
var state_48791__$1 = state_48791;
var statearr_48804_48889 = state_48791__$1;
(statearr_48804_48889[(2)] = inst_48745);

(statearr_48804_48889[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (46))){
var inst_48786 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48805_48890 = state_48791__$1;
(statearr_48805_48890[(2)] = inst_48786);

(statearr_48805_48890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (4))){
var inst_48689 = (state_48791[(2)]);
var inst_48690 = cljs.core.List.EMPTY;
var inst_48691 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48690);
var inst_48692 = (function (){return ((function (inst_48689,inst_48690,inst_48691,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48387_SHARP_){
var and__24739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48387_SHARP_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48387_SHARP_));
} else {
return and__24739__auto__;
}
});
;})(inst_48689,inst_48690,inst_48691,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48693 = cljs.core.filter.call(null,inst_48692,files);
var inst_48694 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48695 = cljs.core.concat.call(null,inst_48693,inst_48694);
var state_48791__$1 = (function (){var statearr_48806 = state_48791;
(statearr_48806[(17)] = inst_48689);

(statearr_48806[(18)] = inst_48691);

(statearr_48806[(12)] = inst_48695);

return statearr_48806;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48807_48891 = state_48791__$1;
(statearr_48807_48891[(1)] = (16));

} else {
var statearr_48808_48892 = state_48791__$1;
(statearr_48808_48892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (15))){
var inst_48679 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48809_48893 = state_48791__$1;
(statearr_48809_48893[(2)] = inst_48679);

(statearr_48809_48893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (21))){
var inst_48705 = (state_48791[(19)]);
var inst_48705__$1 = (state_48791[(2)]);
var inst_48706 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48705__$1);
var state_48791__$1 = (function (){var statearr_48810 = state_48791;
(statearr_48810[(19)] = inst_48705__$1);

return statearr_48810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48791__$1,(22),inst_48706);
} else {
if((state_val_48792 === (31))){
var inst_48789 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48791__$1,inst_48789);
} else {
if((state_val_48792 === (32))){
var inst_48745 = (state_48791[(16)]);
var inst_48750 = inst_48745.cljs$lang$protocol_mask$partition0$;
var inst_48751 = (inst_48750 & (64));
var inst_48752 = inst_48745.cljs$core$ISeq$;
var inst_48753 = (inst_48751) || (inst_48752);
var state_48791__$1 = state_48791;
if(cljs.core.truth_(inst_48753)){
var statearr_48811_48894 = state_48791__$1;
(statearr_48811_48894[(1)] = (35));

} else {
var statearr_48812_48895 = state_48791__$1;
(statearr_48812_48895[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (40))){
var inst_48766 = (state_48791[(20)]);
var inst_48765 = (state_48791[(2)]);
var inst_48766__$1 = cljs.core.get.call(null,inst_48765,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48767 = cljs.core.get.call(null,inst_48765,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48768 = cljs.core.not_empty.call(null,inst_48766__$1);
var state_48791__$1 = (function (){var statearr_48813 = state_48791;
(statearr_48813[(21)] = inst_48767);

(statearr_48813[(20)] = inst_48766__$1);

return statearr_48813;
})();
if(cljs.core.truth_(inst_48768)){
var statearr_48814_48896 = state_48791__$1;
(statearr_48814_48896[(1)] = (41));

} else {
var statearr_48815_48897 = state_48791__$1;
(statearr_48815_48897[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (33))){
var state_48791__$1 = state_48791;
var statearr_48816_48898 = state_48791__$1;
(statearr_48816_48898[(2)] = false);

(statearr_48816_48898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (13))){
var inst_48665 = (state_48791[(22)]);
var inst_48669 = cljs.core.chunk_first.call(null,inst_48665);
var inst_48670 = cljs.core.chunk_rest.call(null,inst_48665);
var inst_48671 = cljs.core.count.call(null,inst_48669);
var inst_48652 = inst_48670;
var inst_48653 = inst_48669;
var inst_48654 = inst_48671;
var inst_48655 = (0);
var state_48791__$1 = (function (){var statearr_48817 = state_48791;
(statearr_48817[(7)] = inst_48655);

(statearr_48817[(8)] = inst_48652);

(statearr_48817[(9)] = inst_48653);

(statearr_48817[(10)] = inst_48654);

return statearr_48817;
})();
var statearr_48818_48899 = state_48791__$1;
(statearr_48818_48899[(2)] = null);

(statearr_48818_48899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (22))){
var inst_48705 = (state_48791[(19)]);
var inst_48709 = (state_48791[(23)]);
var inst_48713 = (state_48791[(24)]);
var inst_48708 = (state_48791[(25)]);
var inst_48708__$1 = (state_48791[(2)]);
var inst_48709__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48708__$1);
var inst_48710 = (function (){var all_files = inst_48705;
var res_SINGLEQUOTE_ = inst_48708__$1;
var res = inst_48709__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48705,inst_48709,inst_48713,inst_48708,inst_48708__$1,inst_48709__$1,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48388_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48388_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48705,inst_48709,inst_48713,inst_48708,inst_48708__$1,inst_48709__$1,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48711 = cljs.core.filter.call(null,inst_48710,inst_48708__$1);
var inst_48712 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48713__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48712);
var inst_48714 = cljs.core.not_empty.call(null,inst_48713__$1);
var state_48791__$1 = (function (){var statearr_48819 = state_48791;
(statearr_48819[(26)] = inst_48711);

(statearr_48819[(23)] = inst_48709__$1);

(statearr_48819[(24)] = inst_48713__$1);

(statearr_48819[(25)] = inst_48708__$1);

return statearr_48819;
})();
if(cljs.core.truth_(inst_48714)){
var statearr_48820_48900 = state_48791__$1;
(statearr_48820_48900[(1)] = (23));

} else {
var statearr_48821_48901 = state_48791__$1;
(statearr_48821_48901[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (36))){
var state_48791__$1 = state_48791;
var statearr_48822_48902 = state_48791__$1;
(statearr_48822_48902[(2)] = false);

(statearr_48822_48902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (41))){
var inst_48766 = (state_48791[(20)]);
var inst_48770 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48771 = cljs.core.map.call(null,inst_48770,inst_48766);
var inst_48772 = cljs.core.pr_str.call(null,inst_48771);
var inst_48773 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48772)].join('');
var inst_48774 = figwheel.client.utils.log.call(null,inst_48773);
var state_48791__$1 = state_48791;
var statearr_48823_48903 = state_48791__$1;
(statearr_48823_48903[(2)] = inst_48774);

(statearr_48823_48903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (43))){
var inst_48767 = (state_48791[(21)]);
var inst_48777 = (state_48791[(2)]);
var inst_48778 = cljs.core.not_empty.call(null,inst_48767);
var state_48791__$1 = (function (){var statearr_48824 = state_48791;
(statearr_48824[(27)] = inst_48777);

return statearr_48824;
})();
if(cljs.core.truth_(inst_48778)){
var statearr_48825_48904 = state_48791__$1;
(statearr_48825_48904[(1)] = (44));

} else {
var statearr_48826_48905 = state_48791__$1;
(statearr_48826_48905[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (29))){
var inst_48711 = (state_48791[(26)]);
var inst_48745 = (state_48791[(16)]);
var inst_48705 = (state_48791[(19)]);
var inst_48709 = (state_48791[(23)]);
var inst_48713 = (state_48791[(24)]);
var inst_48708 = (state_48791[(25)]);
var inst_48741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48744 = (function (){var all_files = inst_48705;
var res_SINGLEQUOTE_ = inst_48708;
var res = inst_48709;
var files_not_loaded = inst_48711;
var dependencies_that_loaded = inst_48713;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48745,inst_48705,inst_48709,inst_48713,inst_48708,inst_48741,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48743){
var map__48827 = p__48743;
var map__48827__$1 = ((((!((map__48827 == null)))?((((map__48827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48827):map__48827);
var namespace = cljs.core.get.call(null,map__48827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48745,inst_48705,inst_48709,inst_48713,inst_48708,inst_48741,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48745__$1 = cljs.core.group_by.call(null,inst_48744,inst_48711);
var inst_48747 = (inst_48745__$1 == null);
var inst_48748 = cljs.core.not.call(null,inst_48747);
var state_48791__$1 = (function (){var statearr_48829 = state_48791;
(statearr_48829[(16)] = inst_48745__$1);

(statearr_48829[(28)] = inst_48741);

return statearr_48829;
})();
if(inst_48748){
var statearr_48830_48906 = state_48791__$1;
(statearr_48830_48906[(1)] = (32));

} else {
var statearr_48831_48907 = state_48791__$1;
(statearr_48831_48907[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (44))){
var inst_48767 = (state_48791[(21)]);
var inst_48780 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48767);
var inst_48781 = cljs.core.pr_str.call(null,inst_48780);
var inst_48782 = [cljs.core.str("not required: "),cljs.core.str(inst_48781)].join('');
var inst_48783 = figwheel.client.utils.log.call(null,inst_48782);
var state_48791__$1 = state_48791;
var statearr_48832_48908 = state_48791__$1;
(statearr_48832_48908[(2)] = inst_48783);

(statearr_48832_48908[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (6))){
var inst_48686 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48833_48909 = state_48791__$1;
(statearr_48833_48909[(2)] = inst_48686);

(statearr_48833_48909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (28))){
var inst_48711 = (state_48791[(26)]);
var inst_48738 = (state_48791[(2)]);
var inst_48739 = cljs.core.not_empty.call(null,inst_48711);
var state_48791__$1 = (function (){var statearr_48834 = state_48791;
(statearr_48834[(29)] = inst_48738);

return statearr_48834;
})();
if(cljs.core.truth_(inst_48739)){
var statearr_48835_48910 = state_48791__$1;
(statearr_48835_48910[(1)] = (29));

} else {
var statearr_48836_48911 = state_48791__$1;
(statearr_48836_48911[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (25))){
var inst_48709 = (state_48791[(23)]);
var inst_48725 = (state_48791[(2)]);
var inst_48726 = cljs.core.not_empty.call(null,inst_48709);
var state_48791__$1 = (function (){var statearr_48837 = state_48791;
(statearr_48837[(30)] = inst_48725);

return statearr_48837;
})();
if(cljs.core.truth_(inst_48726)){
var statearr_48838_48912 = state_48791__$1;
(statearr_48838_48912[(1)] = (26));

} else {
var statearr_48839_48913 = state_48791__$1;
(statearr_48839_48913[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (34))){
var inst_48760 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
if(cljs.core.truth_(inst_48760)){
var statearr_48840_48914 = state_48791__$1;
(statearr_48840_48914[(1)] = (38));

} else {
var statearr_48841_48915 = state_48791__$1;
(statearr_48841_48915[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (17))){
var state_48791__$1 = state_48791;
var statearr_48842_48916 = state_48791__$1;
(statearr_48842_48916[(2)] = recompile_dependents);

(statearr_48842_48916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (3))){
var state_48791__$1 = state_48791;
var statearr_48843_48917 = state_48791__$1;
(statearr_48843_48917[(2)] = null);

(statearr_48843_48917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (12))){
var inst_48682 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48844_48918 = state_48791__$1;
(statearr_48844_48918[(2)] = inst_48682);

(statearr_48844_48918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (2))){
var inst_48644 = (state_48791[(13)]);
var inst_48651 = cljs.core.seq.call(null,inst_48644);
var inst_48652 = inst_48651;
var inst_48653 = null;
var inst_48654 = (0);
var inst_48655 = (0);
var state_48791__$1 = (function (){var statearr_48845 = state_48791;
(statearr_48845[(7)] = inst_48655);

(statearr_48845[(8)] = inst_48652);

(statearr_48845[(9)] = inst_48653);

(statearr_48845[(10)] = inst_48654);

return statearr_48845;
})();
var statearr_48846_48919 = state_48791__$1;
(statearr_48846_48919[(2)] = null);

(statearr_48846_48919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (23))){
var inst_48711 = (state_48791[(26)]);
var inst_48705 = (state_48791[(19)]);
var inst_48709 = (state_48791[(23)]);
var inst_48713 = (state_48791[(24)]);
var inst_48708 = (state_48791[(25)]);
var inst_48716 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48718 = (function (){var all_files = inst_48705;
var res_SINGLEQUOTE_ = inst_48708;
var res = inst_48709;
var files_not_loaded = inst_48711;
var dependencies_that_loaded = inst_48713;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48705,inst_48709,inst_48713,inst_48708,inst_48716,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48717){
var map__48847 = p__48717;
var map__48847__$1 = ((((!((map__48847 == null)))?((((map__48847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48847):map__48847);
var request_url = cljs.core.get.call(null,map__48847__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48705,inst_48709,inst_48713,inst_48708,inst_48716,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48719 = cljs.core.reverse.call(null,inst_48713);
var inst_48720 = cljs.core.map.call(null,inst_48718,inst_48719);
var inst_48721 = cljs.core.pr_str.call(null,inst_48720);
var inst_48722 = figwheel.client.utils.log.call(null,inst_48721);
var state_48791__$1 = (function (){var statearr_48849 = state_48791;
(statearr_48849[(31)] = inst_48716);

return statearr_48849;
})();
var statearr_48850_48920 = state_48791__$1;
(statearr_48850_48920[(2)] = inst_48722);

(statearr_48850_48920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (35))){
var state_48791__$1 = state_48791;
var statearr_48851_48921 = state_48791__$1;
(statearr_48851_48921[(2)] = true);

(statearr_48851_48921[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (19))){
var inst_48695 = (state_48791[(12)]);
var inst_48701 = figwheel.client.file_reloading.expand_files.call(null,inst_48695);
var state_48791__$1 = state_48791;
var statearr_48852_48922 = state_48791__$1;
(statearr_48852_48922[(2)] = inst_48701);

(statearr_48852_48922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (11))){
var state_48791__$1 = state_48791;
var statearr_48853_48923 = state_48791__$1;
(statearr_48853_48923[(2)] = null);

(statearr_48853_48923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (9))){
var inst_48684 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48854_48924 = state_48791__$1;
(statearr_48854_48924[(2)] = inst_48684);

(statearr_48854_48924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (5))){
var inst_48655 = (state_48791[(7)]);
var inst_48654 = (state_48791[(10)]);
var inst_48657 = (inst_48655 < inst_48654);
var inst_48658 = inst_48657;
var state_48791__$1 = state_48791;
if(cljs.core.truth_(inst_48658)){
var statearr_48855_48925 = state_48791__$1;
(statearr_48855_48925[(1)] = (7));

} else {
var statearr_48856_48926 = state_48791__$1;
(statearr_48856_48926[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (14))){
var inst_48665 = (state_48791[(22)]);
var inst_48674 = cljs.core.first.call(null,inst_48665);
var inst_48675 = figwheel.client.file_reloading.eval_body.call(null,inst_48674,opts);
var inst_48676 = cljs.core.next.call(null,inst_48665);
var inst_48652 = inst_48676;
var inst_48653 = null;
var inst_48654 = (0);
var inst_48655 = (0);
var state_48791__$1 = (function (){var statearr_48857 = state_48791;
(statearr_48857[(7)] = inst_48655);

(statearr_48857[(8)] = inst_48652);

(statearr_48857[(9)] = inst_48653);

(statearr_48857[(10)] = inst_48654);

(statearr_48857[(32)] = inst_48675);

return statearr_48857;
})();
var statearr_48858_48927 = state_48791__$1;
(statearr_48858_48927[(2)] = null);

(statearr_48858_48927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (45))){
var state_48791__$1 = state_48791;
var statearr_48859_48928 = state_48791__$1;
(statearr_48859_48928[(2)] = null);

(statearr_48859_48928[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (26))){
var inst_48711 = (state_48791[(26)]);
var inst_48705 = (state_48791[(19)]);
var inst_48709 = (state_48791[(23)]);
var inst_48713 = (state_48791[(24)]);
var inst_48708 = (state_48791[(25)]);
var inst_48728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48730 = (function (){var all_files = inst_48705;
var res_SINGLEQUOTE_ = inst_48708;
var res = inst_48709;
var files_not_loaded = inst_48711;
var dependencies_that_loaded = inst_48713;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48705,inst_48709,inst_48713,inst_48708,inst_48728,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48729){
var map__48860 = p__48729;
var map__48860__$1 = ((((!((map__48860 == null)))?((((map__48860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48860):map__48860);
var namespace = cljs.core.get.call(null,map__48860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48705,inst_48709,inst_48713,inst_48708,inst_48728,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48731 = cljs.core.map.call(null,inst_48730,inst_48709);
var inst_48732 = cljs.core.pr_str.call(null,inst_48731);
var inst_48733 = figwheel.client.utils.log.call(null,inst_48732);
var inst_48734 = (function (){var all_files = inst_48705;
var res_SINGLEQUOTE_ = inst_48708;
var res = inst_48709;
var files_not_loaded = inst_48711;
var dependencies_that_loaded = inst_48713;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48705,inst_48709,inst_48713,inst_48708,inst_48728,inst_48730,inst_48731,inst_48732,inst_48733,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48711,inst_48705,inst_48709,inst_48713,inst_48708,inst_48728,inst_48730,inst_48731,inst_48732,inst_48733,state_val_48792,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48735 = setTimeout(inst_48734,(10));
var state_48791__$1 = (function (){var statearr_48862 = state_48791;
(statearr_48862[(33)] = inst_48728);

(statearr_48862[(34)] = inst_48733);

return statearr_48862;
})();
var statearr_48863_48929 = state_48791__$1;
(statearr_48863_48929[(2)] = inst_48735);

(statearr_48863_48929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (16))){
var state_48791__$1 = state_48791;
var statearr_48864_48930 = state_48791__$1;
(statearr_48864_48930[(2)] = reload_dependents);

(statearr_48864_48930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (38))){
var inst_48745 = (state_48791[(16)]);
var inst_48762 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48745);
var state_48791__$1 = state_48791;
var statearr_48865_48931 = state_48791__$1;
(statearr_48865_48931[(2)] = inst_48762);

(statearr_48865_48931[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (30))){
var state_48791__$1 = state_48791;
var statearr_48866_48932 = state_48791__$1;
(statearr_48866_48932[(2)] = null);

(statearr_48866_48932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (10))){
var inst_48665 = (state_48791[(22)]);
var inst_48667 = cljs.core.chunked_seq_QMARK_.call(null,inst_48665);
var state_48791__$1 = state_48791;
if(inst_48667){
var statearr_48867_48933 = state_48791__$1;
(statearr_48867_48933[(1)] = (13));

} else {
var statearr_48868_48934 = state_48791__$1;
(statearr_48868_48934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (18))){
var inst_48699 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
if(cljs.core.truth_(inst_48699)){
var statearr_48869_48935 = state_48791__$1;
(statearr_48869_48935[(1)] = (19));

} else {
var statearr_48870_48936 = state_48791__$1;
(statearr_48870_48936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (42))){
var state_48791__$1 = state_48791;
var statearr_48871_48937 = state_48791__$1;
(statearr_48871_48937[(2)] = null);

(statearr_48871_48937[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (37))){
var inst_48757 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48872_48938 = state_48791__$1;
(statearr_48872_48938[(2)] = inst_48757);

(statearr_48872_48938[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (8))){
var inst_48652 = (state_48791[(8)]);
var inst_48665 = (state_48791[(22)]);
var inst_48665__$1 = cljs.core.seq.call(null,inst_48652);
var state_48791__$1 = (function (){var statearr_48873 = state_48791;
(statearr_48873[(22)] = inst_48665__$1);

return statearr_48873;
})();
if(inst_48665__$1){
var statearr_48874_48939 = state_48791__$1;
(statearr_48874_48939[(1)] = (10));

} else {
var statearr_48875_48940 = state_48791__$1;
(statearr_48875_48940[(1)] = (11));

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
});})(c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27865__auto__,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____0 = (function (){
var statearr_48879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48879[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__);

(statearr_48879[(1)] = (1));

return statearr_48879;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____1 = (function (state_48791){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_48791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e48880){if((e48880 instanceof Object)){
var ex__27869__auto__ = e48880;
var statearr_48881_48941 = state_48791;
(statearr_48881_48941[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48942 = state_48791;
state_48791 = G__48942;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__ = function(state_48791){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____1.call(this,state_48791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27932__auto__ = (function (){var statearr_48882 = f__27931__auto__.call(null);
(statearr_48882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_48882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__,map__48637,map__48637__$1,opts,before_jsload,on_jsload,reload_dependents,map__48638,map__48638__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27930__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48945,link){
var map__48948 = p__48945;
var map__48948__$1 = ((((!((map__48948 == null)))?((((map__48948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48948):map__48948);
var file = cljs.core.get.call(null,map__48948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48948,map__48948__$1,file){
return (function (p1__48943_SHARP_,p2__48944_SHARP_){
if(cljs.core._EQ_.call(null,p1__48943_SHARP_,p2__48944_SHARP_)){
return p1__48943_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48948,map__48948__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48954){
var map__48955 = p__48954;
var map__48955__$1 = ((((!((map__48955 == null)))?((((map__48955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48955):map__48955);
var match_length = cljs.core.get.call(null,map__48955__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48955__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48950_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48950_SHARP_);
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
var args48957 = [];
var len__25826__auto___48960 = arguments.length;
var i__25827__auto___48961 = (0);
while(true){
if((i__25827__auto___48961 < len__25826__auto___48960)){
args48957.push((arguments[i__25827__auto___48961]));

var G__48962 = (i__25827__auto___48961 + (1));
i__25827__auto___48961 = G__48962;
continue;
} else {
}
break;
}

var G__48959 = args48957.length;
switch (G__48959) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48957.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48964_SHARP_,p2__48965_SHARP_){
return cljs.core.assoc.call(null,p1__48964_SHARP_,cljs.core.get.call(null,p2__48965_SHARP_,key),p2__48965_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48966){
var map__48969 = p__48966;
var map__48969__$1 = ((((!((map__48969 == null)))?((((map__48969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48969):map__48969);
var f_data = map__48969__$1;
var file = cljs.core.get.call(null,map__48969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48971,p__48972){
var map__48981 = p__48971;
var map__48981__$1 = ((((!((map__48981 == null)))?((((map__48981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48981):map__48981);
var opts = map__48981__$1;
var on_cssload = cljs.core.get.call(null,map__48981__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48982 = p__48972;
var map__48982__$1 = ((((!((map__48982 == null)))?((((map__48982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48982):map__48982);
var files_msg = map__48982__$1;
var files = cljs.core.get.call(null,map__48982__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48985_48989 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__48986_48990 = null;
var count__48987_48991 = (0);
var i__48988_48992 = (0);
while(true){
if((i__48988_48992 < count__48987_48991)){
var f_48993 = cljs.core._nth.call(null,chunk__48986_48990,i__48988_48992);
figwheel.client.file_reloading.reload_css_file.call(null,f_48993);

var G__48994 = seq__48985_48989;
var G__48995 = chunk__48986_48990;
var G__48996 = count__48987_48991;
var G__48997 = (i__48988_48992 + (1));
seq__48985_48989 = G__48994;
chunk__48986_48990 = G__48995;
count__48987_48991 = G__48996;
i__48988_48992 = G__48997;
continue;
} else {
var temp__4657__auto___48998 = cljs.core.seq.call(null,seq__48985_48989);
if(temp__4657__auto___48998){
var seq__48985_48999__$1 = temp__4657__auto___48998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48985_48999__$1)){
var c__25562__auto___49000 = cljs.core.chunk_first.call(null,seq__48985_48999__$1);
var G__49001 = cljs.core.chunk_rest.call(null,seq__48985_48999__$1);
var G__49002 = c__25562__auto___49000;
var G__49003 = cljs.core.count.call(null,c__25562__auto___49000);
var G__49004 = (0);
seq__48985_48989 = G__49001;
chunk__48986_48990 = G__49002;
count__48987_48991 = G__49003;
i__48988_48992 = G__49004;
continue;
} else {
var f_49005 = cljs.core.first.call(null,seq__48985_48999__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_49005);

var G__49006 = cljs.core.next.call(null,seq__48985_48999__$1);
var G__49007 = null;
var G__49008 = (0);
var G__49009 = (0);
seq__48985_48989 = G__49006;
chunk__48986_48990 = G__49007;
count__48987_48991 = G__49008;
i__48988_48992 = G__49009;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48981,map__48981__$1,opts,on_cssload,map__48982,map__48982__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__48981,map__48981__$1,opts,on_cssload,map__48982,map__48982__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1477762292524