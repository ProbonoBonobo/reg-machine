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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50186_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50186_SHARP_));
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
var seq__50191 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50192 = null;
var count__50193 = (0);
var i__50194 = (0);
while(true){
if((i__50194 < count__50193)){
var n = cljs.core._nth.call(null,chunk__50192,i__50194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50195 = seq__50191;
var G__50196 = chunk__50192;
var G__50197 = count__50193;
var G__50198 = (i__50194 + (1));
seq__50191 = G__50195;
chunk__50192 = G__50196;
count__50193 = G__50197;
i__50194 = G__50198;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50191);
if(temp__4657__auto__){
var seq__50191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50191__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__50191__$1);
var G__50199 = cljs.core.chunk_rest.call(null,seq__50191__$1);
var G__50200 = c__25713__auto__;
var G__50201 = cljs.core.count.call(null,c__25713__auto__);
var G__50202 = (0);
seq__50191 = G__50199;
chunk__50192 = G__50200;
count__50193 = G__50201;
i__50194 = G__50202;
continue;
} else {
var n = cljs.core.first.call(null,seq__50191__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50203 = cljs.core.next.call(null,seq__50191__$1);
var G__50204 = null;
var G__50205 = (0);
var G__50206 = (0);
seq__50191 = G__50203;
chunk__50192 = G__50204;
count__50193 = G__50205;
i__50194 = G__50206;
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

var seq__50257_50268 = cljs.core.seq.call(null,deps);
var chunk__50258_50269 = null;
var count__50259_50270 = (0);
var i__50260_50271 = (0);
while(true){
if((i__50260_50271 < count__50259_50270)){
var dep_50272 = cljs.core._nth.call(null,chunk__50258_50269,i__50260_50271);
topo_sort_helper_STAR_.call(null,dep_50272,(depth + (1)),state);

var G__50273 = seq__50257_50268;
var G__50274 = chunk__50258_50269;
var G__50275 = count__50259_50270;
var G__50276 = (i__50260_50271 + (1));
seq__50257_50268 = G__50273;
chunk__50258_50269 = G__50274;
count__50259_50270 = G__50275;
i__50260_50271 = G__50276;
continue;
} else {
var temp__4657__auto___50277 = cljs.core.seq.call(null,seq__50257_50268);
if(temp__4657__auto___50277){
var seq__50257_50278__$1 = temp__4657__auto___50277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50257_50278__$1)){
var c__25713__auto___50279 = cljs.core.chunk_first.call(null,seq__50257_50278__$1);
var G__50280 = cljs.core.chunk_rest.call(null,seq__50257_50278__$1);
var G__50281 = c__25713__auto___50279;
var G__50282 = cljs.core.count.call(null,c__25713__auto___50279);
var G__50283 = (0);
seq__50257_50268 = G__50280;
chunk__50258_50269 = G__50281;
count__50259_50270 = G__50282;
i__50260_50271 = G__50283;
continue;
} else {
var dep_50284 = cljs.core.first.call(null,seq__50257_50278__$1);
topo_sort_helper_STAR_.call(null,dep_50284,(depth + (1)),state);

var G__50285 = cljs.core.next.call(null,seq__50257_50278__$1);
var G__50286 = null;
var G__50287 = (0);
var G__50288 = (0);
seq__50257_50268 = G__50285;
chunk__50258_50269 = G__50286;
count__50259_50270 = G__50287;
i__50260_50271 = G__50288;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50261){
var vec__50265 = p__50261;
var seq__50266 = cljs.core.seq.call(null,vec__50265);
var first__50267 = cljs.core.first.call(null,seq__50266);
var seq__50266__$1 = cljs.core.next.call(null,seq__50266);
var x = first__50267;
var xs = seq__50266__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50265,seq__50266,first__50267,seq__50266__$1,x,xs,get_deps__$1){
return (function (p1__50207_SHARP_){
return clojure.set.difference.call(null,p1__50207_SHARP_,x);
});})(vec__50265,seq__50266,first__50267,seq__50266__$1,x,xs,get_deps__$1))
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
var seq__50301 = cljs.core.seq.call(null,provides);
var chunk__50302 = null;
var count__50303 = (0);
var i__50304 = (0);
while(true){
if((i__50304 < count__50303)){
var prov = cljs.core._nth.call(null,chunk__50302,i__50304);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50305_50313 = cljs.core.seq.call(null,requires);
var chunk__50306_50314 = null;
var count__50307_50315 = (0);
var i__50308_50316 = (0);
while(true){
if((i__50308_50316 < count__50307_50315)){
var req_50317 = cljs.core._nth.call(null,chunk__50306_50314,i__50308_50316);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50317,prov);

var G__50318 = seq__50305_50313;
var G__50319 = chunk__50306_50314;
var G__50320 = count__50307_50315;
var G__50321 = (i__50308_50316 + (1));
seq__50305_50313 = G__50318;
chunk__50306_50314 = G__50319;
count__50307_50315 = G__50320;
i__50308_50316 = G__50321;
continue;
} else {
var temp__4657__auto___50322 = cljs.core.seq.call(null,seq__50305_50313);
if(temp__4657__auto___50322){
var seq__50305_50323__$1 = temp__4657__auto___50322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50305_50323__$1)){
var c__25713__auto___50324 = cljs.core.chunk_first.call(null,seq__50305_50323__$1);
var G__50325 = cljs.core.chunk_rest.call(null,seq__50305_50323__$1);
var G__50326 = c__25713__auto___50324;
var G__50327 = cljs.core.count.call(null,c__25713__auto___50324);
var G__50328 = (0);
seq__50305_50313 = G__50325;
chunk__50306_50314 = G__50326;
count__50307_50315 = G__50327;
i__50308_50316 = G__50328;
continue;
} else {
var req_50329 = cljs.core.first.call(null,seq__50305_50323__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50329,prov);

var G__50330 = cljs.core.next.call(null,seq__50305_50323__$1);
var G__50331 = null;
var G__50332 = (0);
var G__50333 = (0);
seq__50305_50313 = G__50330;
chunk__50306_50314 = G__50331;
count__50307_50315 = G__50332;
i__50308_50316 = G__50333;
continue;
}
} else {
}
}
break;
}

var G__50334 = seq__50301;
var G__50335 = chunk__50302;
var G__50336 = count__50303;
var G__50337 = (i__50304 + (1));
seq__50301 = G__50334;
chunk__50302 = G__50335;
count__50303 = G__50336;
i__50304 = G__50337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50301);
if(temp__4657__auto__){
var seq__50301__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50301__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__50301__$1);
var G__50338 = cljs.core.chunk_rest.call(null,seq__50301__$1);
var G__50339 = c__25713__auto__;
var G__50340 = cljs.core.count.call(null,c__25713__auto__);
var G__50341 = (0);
seq__50301 = G__50338;
chunk__50302 = G__50339;
count__50303 = G__50340;
i__50304 = G__50341;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50301__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50309_50342 = cljs.core.seq.call(null,requires);
var chunk__50310_50343 = null;
var count__50311_50344 = (0);
var i__50312_50345 = (0);
while(true){
if((i__50312_50345 < count__50311_50344)){
var req_50346 = cljs.core._nth.call(null,chunk__50310_50343,i__50312_50345);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50346,prov);

var G__50347 = seq__50309_50342;
var G__50348 = chunk__50310_50343;
var G__50349 = count__50311_50344;
var G__50350 = (i__50312_50345 + (1));
seq__50309_50342 = G__50347;
chunk__50310_50343 = G__50348;
count__50311_50344 = G__50349;
i__50312_50345 = G__50350;
continue;
} else {
var temp__4657__auto___50351__$1 = cljs.core.seq.call(null,seq__50309_50342);
if(temp__4657__auto___50351__$1){
var seq__50309_50352__$1 = temp__4657__auto___50351__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50309_50352__$1)){
var c__25713__auto___50353 = cljs.core.chunk_first.call(null,seq__50309_50352__$1);
var G__50354 = cljs.core.chunk_rest.call(null,seq__50309_50352__$1);
var G__50355 = c__25713__auto___50353;
var G__50356 = cljs.core.count.call(null,c__25713__auto___50353);
var G__50357 = (0);
seq__50309_50342 = G__50354;
chunk__50310_50343 = G__50355;
count__50311_50344 = G__50356;
i__50312_50345 = G__50357;
continue;
} else {
var req_50358 = cljs.core.first.call(null,seq__50309_50352__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50358,prov);

var G__50359 = cljs.core.next.call(null,seq__50309_50352__$1);
var G__50360 = null;
var G__50361 = (0);
var G__50362 = (0);
seq__50309_50342 = G__50359;
chunk__50310_50343 = G__50360;
count__50311_50344 = G__50361;
i__50312_50345 = G__50362;
continue;
}
} else {
}
}
break;
}

var G__50363 = cljs.core.next.call(null,seq__50301__$1);
var G__50364 = null;
var G__50365 = (0);
var G__50366 = (0);
seq__50301 = G__50363;
chunk__50302 = G__50364;
count__50303 = G__50365;
i__50304 = G__50366;
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
var seq__50371_50375 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50372_50376 = null;
var count__50373_50377 = (0);
var i__50374_50378 = (0);
while(true){
if((i__50374_50378 < count__50373_50377)){
var ns_50379 = cljs.core._nth.call(null,chunk__50372_50376,i__50374_50378);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50379);

var G__50380 = seq__50371_50375;
var G__50381 = chunk__50372_50376;
var G__50382 = count__50373_50377;
var G__50383 = (i__50374_50378 + (1));
seq__50371_50375 = G__50380;
chunk__50372_50376 = G__50381;
count__50373_50377 = G__50382;
i__50374_50378 = G__50383;
continue;
} else {
var temp__4657__auto___50384 = cljs.core.seq.call(null,seq__50371_50375);
if(temp__4657__auto___50384){
var seq__50371_50385__$1 = temp__4657__auto___50384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50371_50385__$1)){
var c__25713__auto___50386 = cljs.core.chunk_first.call(null,seq__50371_50385__$1);
var G__50387 = cljs.core.chunk_rest.call(null,seq__50371_50385__$1);
var G__50388 = c__25713__auto___50386;
var G__50389 = cljs.core.count.call(null,c__25713__auto___50386);
var G__50390 = (0);
seq__50371_50375 = G__50387;
chunk__50372_50376 = G__50388;
count__50373_50377 = G__50389;
i__50374_50378 = G__50390;
continue;
} else {
var ns_50391 = cljs.core.first.call(null,seq__50371_50385__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50391);

var G__50392 = cljs.core.next.call(null,seq__50371_50385__$1);
var G__50393 = null;
var G__50394 = (0);
var G__50395 = (0);
seq__50371_50375 = G__50392;
chunk__50372_50376 = G__50393;
count__50373_50377 = G__50394;
i__50374_50378 = G__50395;
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
var G__50396__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50397__i = 0, G__50397__a = new Array(arguments.length -  0);
while (G__50397__i < G__50397__a.length) {G__50397__a[G__50397__i] = arguments[G__50397__i + 0]; ++G__50397__i;}
  args = new cljs.core.IndexedSeq(G__50397__a,0);
} 
return G__50396__delegate.call(this,args);};
G__50396.cljs$lang$maxFixedArity = 0;
G__50396.cljs$lang$applyTo = (function (arglist__50398){
var args = cljs.core.seq(arglist__50398);
return G__50396__delegate(args);
});
G__50396.cljs$core$IFn$_invoke$arity$variadic = G__50396__delegate;
return G__50396;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50400 = cljs.core._EQ_;
var expr__50401 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50400.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50401))){
var path_parts = ((function (pred__50400,expr__50401){
return (function (p1__50399_SHARP_){
return clojure.string.split.call(null,p1__50399_SHARP_,/[\/\\]/);
});})(pred__50400,expr__50401))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__50400,expr__50401){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50403){if((e50403 instanceof Error)){
var e = e50403;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50403;

}
}})());
});
;})(path_parts,sep,root,pred__50400,expr__50401))
} else {
if(cljs.core.truth_(pred__50400.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50401))){
return ((function (pred__50400,expr__50401){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__50400,expr__50401){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__50400,expr__50401))
);

return deferred.addErrback(((function (deferred,pred__50400,expr__50401){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__50400,expr__50401))
);
});
;})(pred__50400,expr__50401))
} else {
return ((function (pred__50400,expr__50401){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50400,expr__50401))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50404,callback){
var map__50407 = p__50404;
var map__50407__$1 = ((((!((map__50407 == null)))?((((map__50407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50407):map__50407);
var file_msg = map__50407__$1;
var request_url = cljs.core.get.call(null,map__50407__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50407,map__50407__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50407,map__50407__$1,file_msg,request_url))
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
return (function (state_50431){
var state_val_50432 = (state_50431[(1)]);
if((state_val_50432 === (7))){
var inst_50427 = (state_50431[(2)]);
var state_50431__$1 = state_50431;
var statearr_50433_50453 = state_50431__$1;
(statearr_50433_50453[(2)] = inst_50427);

(statearr_50433_50453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (1))){
var state_50431__$1 = state_50431;
var statearr_50434_50454 = state_50431__$1;
(statearr_50434_50454[(2)] = null);

(statearr_50434_50454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (4))){
var inst_50411 = (state_50431[(7)]);
var inst_50411__$1 = (state_50431[(2)]);
var state_50431__$1 = (function (){var statearr_50435 = state_50431;
(statearr_50435[(7)] = inst_50411__$1);

return statearr_50435;
})();
if(cljs.core.truth_(inst_50411__$1)){
var statearr_50436_50455 = state_50431__$1;
(statearr_50436_50455[(1)] = (5));

} else {
var statearr_50437_50456 = state_50431__$1;
(statearr_50437_50456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (6))){
var state_50431__$1 = state_50431;
var statearr_50438_50457 = state_50431__$1;
(statearr_50438_50457[(2)] = null);

(statearr_50438_50457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (3))){
var inst_50429 = (state_50431[(2)]);
var state_50431__$1 = state_50431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50431__$1,inst_50429);
} else {
if((state_val_50432 === (2))){
var state_50431__$1 = state_50431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50431__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50432 === (11))){
var inst_50423 = (state_50431[(2)]);
var state_50431__$1 = (function (){var statearr_50439 = state_50431;
(statearr_50439[(8)] = inst_50423);

return statearr_50439;
})();
var statearr_50440_50458 = state_50431__$1;
(statearr_50440_50458[(2)] = null);

(statearr_50440_50458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (9))){
var inst_50415 = (state_50431[(9)]);
var inst_50417 = (state_50431[(10)]);
var inst_50419 = inst_50417.call(null,inst_50415);
var state_50431__$1 = state_50431;
var statearr_50441_50459 = state_50431__$1;
(statearr_50441_50459[(2)] = inst_50419);

(statearr_50441_50459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (5))){
var inst_50411 = (state_50431[(7)]);
var inst_50413 = figwheel.client.file_reloading.blocking_load.call(null,inst_50411);
var state_50431__$1 = state_50431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50431__$1,(8),inst_50413);
} else {
if((state_val_50432 === (10))){
var inst_50415 = (state_50431[(9)]);
var inst_50421 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50415);
var state_50431__$1 = state_50431;
var statearr_50442_50460 = state_50431__$1;
(statearr_50442_50460[(2)] = inst_50421);

(statearr_50442_50460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50432 === (8))){
var inst_50417 = (state_50431[(10)]);
var inst_50411 = (state_50431[(7)]);
var inst_50415 = (state_50431[(2)]);
var inst_50416 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50417__$1 = cljs.core.get.call(null,inst_50416,inst_50411);
var state_50431__$1 = (function (){var statearr_50443 = state_50431;
(statearr_50443[(9)] = inst_50415);

(statearr_50443[(10)] = inst_50417__$1);

return statearr_50443;
})();
if(cljs.core.truth_(inst_50417__$1)){
var statearr_50444_50461 = state_50431__$1;
(statearr_50444_50461[(1)] = (9));

} else {
var statearr_50445_50462 = state_50431__$1;
(statearr_50445_50462[(1)] = (10));

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
var statearr_50449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50449[(0)] = figwheel$client$file_reloading$state_machine__28887__auto__);

(statearr_50449[(1)] = (1));

return statearr_50449;
});
var figwheel$client$file_reloading$state_machine__28887__auto____1 = (function (state_50431){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_50431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e50450){if((e50450 instanceof Object)){
var ex__28890__auto__ = e50450;
var statearr_50451_50463 = state_50431;
(statearr_50451_50463[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50464 = state_50431;
state_50431 = G__50464;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28887__auto__ = function(state_50431){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28887__auto____1.call(this,state_50431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28887__auto____0;
figwheel$client$file_reloading$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28887__auto____1;
return figwheel$client$file_reloading$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_50452 = f__28999__auto__.call(null);
(statearr_50452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_50452;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50465,callback){
var map__50468 = p__50465;
var map__50468__$1 = ((((!((map__50468 == null)))?((((map__50468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50468):map__50468);
var file_msg = map__50468__$1;
var namespace = cljs.core.get.call(null,map__50468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50468,map__50468__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50468,map__50468__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50470){
var map__50473 = p__50470;
var map__50473__$1 = ((((!((map__50473 == null)))?((((map__50473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50473):map__50473);
var file_msg = map__50473__$1;
var namespace = cljs.core.get.call(null,map__50473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50475,callback){
var map__50478 = p__50475;
var map__50478__$1 = ((((!((map__50478 == null)))?((((map__50478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50478):map__50478);
var file_msg = map__50478__$1;
var request_url = cljs.core.get.call(null,map__50478__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28998__auto___50582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___50582,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___50582,out){
return (function (state_50564){
var state_val_50565 = (state_50564[(1)]);
if((state_val_50565 === (1))){
var inst_50538 = cljs.core.seq.call(null,files);
var inst_50539 = cljs.core.first.call(null,inst_50538);
var inst_50540 = cljs.core.next.call(null,inst_50538);
var inst_50541 = files;
var state_50564__$1 = (function (){var statearr_50566 = state_50564;
(statearr_50566[(7)] = inst_50541);

(statearr_50566[(8)] = inst_50540);

(statearr_50566[(9)] = inst_50539);

return statearr_50566;
})();
var statearr_50567_50583 = state_50564__$1;
(statearr_50567_50583[(2)] = null);

(statearr_50567_50583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (2))){
var inst_50541 = (state_50564[(7)]);
var inst_50547 = (state_50564[(10)]);
var inst_50546 = cljs.core.seq.call(null,inst_50541);
var inst_50547__$1 = cljs.core.first.call(null,inst_50546);
var inst_50548 = cljs.core.next.call(null,inst_50546);
var inst_50549 = (inst_50547__$1 == null);
var inst_50550 = cljs.core.not.call(null,inst_50549);
var state_50564__$1 = (function (){var statearr_50568 = state_50564;
(statearr_50568[(11)] = inst_50548);

(statearr_50568[(10)] = inst_50547__$1);

return statearr_50568;
})();
if(inst_50550){
var statearr_50569_50584 = state_50564__$1;
(statearr_50569_50584[(1)] = (4));

} else {
var statearr_50570_50585 = state_50564__$1;
(statearr_50570_50585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (3))){
var inst_50562 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50564__$1,inst_50562);
} else {
if((state_val_50565 === (4))){
var inst_50547 = (state_50564[(10)]);
var inst_50552 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50547);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50564__$1,(7),inst_50552);
} else {
if((state_val_50565 === (5))){
var inst_50558 = cljs.core.async.close_BANG_.call(null,out);
var state_50564__$1 = state_50564;
var statearr_50571_50586 = state_50564__$1;
(statearr_50571_50586[(2)] = inst_50558);

(statearr_50571_50586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (6))){
var inst_50560 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50572_50587 = state_50564__$1;
(statearr_50572_50587[(2)] = inst_50560);

(statearr_50572_50587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (7))){
var inst_50548 = (state_50564[(11)]);
var inst_50554 = (state_50564[(2)]);
var inst_50555 = cljs.core.async.put_BANG_.call(null,out,inst_50554);
var inst_50541 = inst_50548;
var state_50564__$1 = (function (){var statearr_50573 = state_50564;
(statearr_50573[(7)] = inst_50541);

(statearr_50573[(12)] = inst_50555);

return statearr_50573;
})();
var statearr_50574_50588 = state_50564__$1;
(statearr_50574_50588[(2)] = null);

(statearr_50574_50588[(1)] = (2));


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
});})(c__28998__auto___50582,out))
;
return ((function (switch__28886__auto__,c__28998__auto___50582,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0 = (function (){
var statearr_50578 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50578[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__);

(statearr_50578[(1)] = (1));

return statearr_50578;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1 = (function (state_50564){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_50564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e50579){if((e50579 instanceof Object)){
var ex__28890__auto__ = e50579;
var statearr_50580_50589 = state_50564;
(statearr_50580_50589[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50590 = state_50564;
state_50564 = G__50590;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__ = function(state_50564){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1.call(this,state_50564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___50582,out))
})();
var state__29000__auto__ = (function (){var statearr_50581 = f__28999__auto__.call(null);
(statearr_50581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___50582);

return statearr_50581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___50582,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50591,opts){
var map__50595 = p__50591;
var map__50595__$1 = ((((!((map__50595 == null)))?((((map__50595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50595):map__50595);
var eval_body = cljs.core.get.call(null,map__50595__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e50597){var e = e50597;
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
return (function (p1__50598_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50598_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__50607){
var vec__50608 = p__50607;
var k = cljs.core.nth.call(null,vec__50608,(0),null);
var v = cljs.core.nth.call(null,vec__50608,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50611){
var vec__50612 = p__50611;
var k = cljs.core.nth.call(null,vec__50612,(0),null);
var v = cljs.core.nth.call(null,vec__50612,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50618,p__50619){
var map__50867 = p__50618;
var map__50867__$1 = ((((!((map__50867 == null)))?((((map__50867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50867):map__50867);
var opts = map__50867__$1;
var before_jsload = cljs.core.get.call(null,map__50867__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50867__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50867__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50868 = p__50619;
var map__50868__$1 = ((((!((map__50868 == null)))?((((map__50868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50868):map__50868);
var msg = map__50868__$1;
var files = cljs.core.get.call(null,map__50868__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50868__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50868__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_51022){
var state_val_51023 = (state_51022[(1)]);
if((state_val_51023 === (7))){
var inst_50882 = (state_51022[(7)]);
var inst_50883 = (state_51022[(8)]);
var inst_50885 = (state_51022[(9)]);
var inst_50884 = (state_51022[(10)]);
var inst_50890 = cljs.core._nth.call(null,inst_50883,inst_50885);
var inst_50891 = figwheel.client.file_reloading.eval_body.call(null,inst_50890,opts);
var inst_50892 = (inst_50885 + (1));
var tmp51024 = inst_50882;
var tmp51025 = inst_50883;
var tmp51026 = inst_50884;
var inst_50882__$1 = tmp51024;
var inst_50883__$1 = tmp51025;
var inst_50884__$1 = tmp51026;
var inst_50885__$1 = inst_50892;
var state_51022__$1 = (function (){var statearr_51027 = state_51022;
(statearr_51027[(7)] = inst_50882__$1);

(statearr_51027[(11)] = inst_50891);

(statearr_51027[(8)] = inst_50883__$1);

(statearr_51027[(9)] = inst_50885__$1);

(statearr_51027[(10)] = inst_50884__$1);

return statearr_51027;
})();
var statearr_51028_51114 = state_51022__$1;
(statearr_51028_51114[(2)] = null);

(statearr_51028_51114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (20))){
var inst_50925 = (state_51022[(12)]);
var inst_50933 = figwheel.client.file_reloading.sort_files.call(null,inst_50925);
var state_51022__$1 = state_51022;
var statearr_51029_51115 = state_51022__$1;
(statearr_51029_51115[(2)] = inst_50933);

(statearr_51029_51115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (27))){
var state_51022__$1 = state_51022;
var statearr_51030_51116 = state_51022__$1;
(statearr_51030_51116[(2)] = null);

(statearr_51030_51116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (1))){
var inst_50874 = (state_51022[(13)]);
var inst_50871 = before_jsload.call(null,files);
var inst_50872 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50873 = (function (){return ((function (inst_50874,inst_50871,inst_50872,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50615_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50615_SHARP_);
});
;})(inst_50874,inst_50871,inst_50872,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50874__$1 = cljs.core.filter.call(null,inst_50873,files);
var inst_50875 = cljs.core.not_empty.call(null,inst_50874__$1);
var state_51022__$1 = (function (){var statearr_51031 = state_51022;
(statearr_51031[(14)] = inst_50872);

(statearr_51031[(13)] = inst_50874__$1);

(statearr_51031[(15)] = inst_50871);

return statearr_51031;
})();
if(cljs.core.truth_(inst_50875)){
var statearr_51032_51117 = state_51022__$1;
(statearr_51032_51117[(1)] = (2));

} else {
var statearr_51033_51118 = state_51022__$1;
(statearr_51033_51118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (24))){
var state_51022__$1 = state_51022;
var statearr_51034_51119 = state_51022__$1;
(statearr_51034_51119[(2)] = null);

(statearr_51034_51119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (39))){
var inst_50975 = (state_51022[(16)]);
var state_51022__$1 = state_51022;
var statearr_51035_51120 = state_51022__$1;
(statearr_51035_51120[(2)] = inst_50975);

(statearr_51035_51120[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (46))){
var inst_51017 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51036_51121 = state_51022__$1;
(statearr_51036_51121[(2)] = inst_51017);

(statearr_51036_51121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (4))){
var inst_50919 = (state_51022[(2)]);
var inst_50920 = cljs.core.List.EMPTY;
var inst_50921 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50920);
var inst_50922 = (function (){return ((function (inst_50919,inst_50920,inst_50921,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50616_SHARP_){
var and__24887__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50616_SHARP_);
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50616_SHARP_));
} else {
return and__24887__auto__;
}
});
;})(inst_50919,inst_50920,inst_50921,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50923 = cljs.core.filter.call(null,inst_50922,files);
var inst_50924 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50925 = cljs.core.concat.call(null,inst_50923,inst_50924);
var state_51022__$1 = (function (){var statearr_51037 = state_51022;
(statearr_51037[(12)] = inst_50925);

(statearr_51037[(17)] = inst_50921);

(statearr_51037[(18)] = inst_50919);

return statearr_51037;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_51038_51122 = state_51022__$1;
(statearr_51038_51122[(1)] = (16));

} else {
var statearr_51039_51123 = state_51022__$1;
(statearr_51039_51123[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (15))){
var inst_50909 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51040_51124 = state_51022__$1;
(statearr_51040_51124[(2)] = inst_50909);

(statearr_51040_51124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (21))){
var inst_50935 = (state_51022[(19)]);
var inst_50935__$1 = (state_51022[(2)]);
var inst_50936 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50935__$1);
var state_51022__$1 = (function (){var statearr_51041 = state_51022;
(statearr_51041[(19)] = inst_50935__$1);

return statearr_51041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51022__$1,(22),inst_50936);
} else {
if((state_val_51023 === (31))){
var inst_51020 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51022__$1,inst_51020);
} else {
if((state_val_51023 === (32))){
var inst_50975 = (state_51022[(16)]);
var inst_50980 = inst_50975.cljs$lang$protocol_mask$partition0$;
var inst_50981 = (inst_50980 & (64));
var inst_50982 = inst_50975.cljs$core$ISeq$;
var inst_50983 = (cljs.core.PROTOCOL_SENTINEL === inst_50982);
var inst_50984 = (inst_50981) || (inst_50983);
var state_51022__$1 = state_51022;
if(cljs.core.truth_(inst_50984)){
var statearr_51042_51125 = state_51022__$1;
(statearr_51042_51125[(1)] = (35));

} else {
var statearr_51043_51126 = state_51022__$1;
(statearr_51043_51126[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (40))){
var inst_50997 = (state_51022[(20)]);
var inst_50996 = (state_51022[(2)]);
var inst_50997__$1 = cljs.core.get.call(null,inst_50996,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50998 = cljs.core.get.call(null,inst_50996,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50999 = cljs.core.not_empty.call(null,inst_50997__$1);
var state_51022__$1 = (function (){var statearr_51044 = state_51022;
(statearr_51044[(20)] = inst_50997__$1);

(statearr_51044[(21)] = inst_50998);

return statearr_51044;
})();
if(cljs.core.truth_(inst_50999)){
var statearr_51045_51127 = state_51022__$1;
(statearr_51045_51127[(1)] = (41));

} else {
var statearr_51046_51128 = state_51022__$1;
(statearr_51046_51128[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (33))){
var state_51022__$1 = state_51022;
var statearr_51047_51129 = state_51022__$1;
(statearr_51047_51129[(2)] = false);

(statearr_51047_51129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (13))){
var inst_50895 = (state_51022[(22)]);
var inst_50899 = cljs.core.chunk_first.call(null,inst_50895);
var inst_50900 = cljs.core.chunk_rest.call(null,inst_50895);
var inst_50901 = cljs.core.count.call(null,inst_50899);
var inst_50882 = inst_50900;
var inst_50883 = inst_50899;
var inst_50884 = inst_50901;
var inst_50885 = (0);
var state_51022__$1 = (function (){var statearr_51048 = state_51022;
(statearr_51048[(7)] = inst_50882);

(statearr_51048[(8)] = inst_50883);

(statearr_51048[(9)] = inst_50885);

(statearr_51048[(10)] = inst_50884);

return statearr_51048;
})();
var statearr_51049_51130 = state_51022__$1;
(statearr_51049_51130[(2)] = null);

(statearr_51049_51130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (22))){
var inst_50939 = (state_51022[(23)]);
var inst_50938 = (state_51022[(24)]);
var inst_50935 = (state_51022[(19)]);
var inst_50943 = (state_51022[(25)]);
var inst_50938__$1 = (state_51022[(2)]);
var inst_50939__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50938__$1);
var inst_50940 = (function (){var all_files = inst_50935;
var res_SINGLEQUOTE_ = inst_50938__$1;
var res = inst_50939__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50939,inst_50938,inst_50935,inst_50943,inst_50938__$1,inst_50939__$1,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50617_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50617_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50939,inst_50938,inst_50935,inst_50943,inst_50938__$1,inst_50939__$1,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50941 = cljs.core.filter.call(null,inst_50940,inst_50938__$1);
var inst_50942 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50943__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50942);
var inst_50944 = cljs.core.not_empty.call(null,inst_50943__$1);
var state_51022__$1 = (function (){var statearr_51050 = state_51022;
(statearr_51050[(26)] = inst_50941);

(statearr_51050[(23)] = inst_50939__$1);

(statearr_51050[(24)] = inst_50938__$1);

(statearr_51050[(25)] = inst_50943__$1);

return statearr_51050;
})();
if(cljs.core.truth_(inst_50944)){
var statearr_51051_51131 = state_51022__$1;
(statearr_51051_51131[(1)] = (23));

} else {
var statearr_51052_51132 = state_51022__$1;
(statearr_51052_51132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (36))){
var state_51022__$1 = state_51022;
var statearr_51053_51133 = state_51022__$1;
(statearr_51053_51133[(2)] = false);

(statearr_51053_51133[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (41))){
var inst_50997 = (state_51022[(20)]);
var inst_51001 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_51002 = cljs.core.map.call(null,inst_51001,inst_50997);
var inst_51003 = cljs.core.pr_str.call(null,inst_51002);
var inst_51004 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_51003)].join('');
var inst_51005 = figwheel.client.utils.log.call(null,inst_51004);
var state_51022__$1 = state_51022;
var statearr_51054_51134 = state_51022__$1;
(statearr_51054_51134[(2)] = inst_51005);

(statearr_51054_51134[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (43))){
var inst_50998 = (state_51022[(21)]);
var inst_51008 = (state_51022[(2)]);
var inst_51009 = cljs.core.not_empty.call(null,inst_50998);
var state_51022__$1 = (function (){var statearr_51055 = state_51022;
(statearr_51055[(27)] = inst_51008);

return statearr_51055;
})();
if(cljs.core.truth_(inst_51009)){
var statearr_51056_51135 = state_51022__$1;
(statearr_51056_51135[(1)] = (44));

} else {
var statearr_51057_51136 = state_51022__$1;
(statearr_51057_51136[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (29))){
var inst_50941 = (state_51022[(26)]);
var inst_50939 = (state_51022[(23)]);
var inst_50938 = (state_51022[(24)]);
var inst_50975 = (state_51022[(16)]);
var inst_50935 = (state_51022[(19)]);
var inst_50943 = (state_51022[(25)]);
var inst_50971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50974 = (function (){var all_files = inst_50935;
var res_SINGLEQUOTE_ = inst_50938;
var res = inst_50939;
var files_not_loaded = inst_50941;
var dependencies_that_loaded = inst_50943;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50975,inst_50935,inst_50943,inst_50971,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50973){
var map__51058 = p__50973;
var map__51058__$1 = ((((!((map__51058 == null)))?((((map__51058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51058):map__51058);
var namespace = cljs.core.get.call(null,map__51058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50975,inst_50935,inst_50943,inst_50971,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50975__$1 = cljs.core.group_by.call(null,inst_50974,inst_50941);
var inst_50977 = (inst_50975__$1 == null);
var inst_50978 = cljs.core.not.call(null,inst_50977);
var state_51022__$1 = (function (){var statearr_51060 = state_51022;
(statearr_51060[(28)] = inst_50971);

(statearr_51060[(16)] = inst_50975__$1);

return statearr_51060;
})();
if(inst_50978){
var statearr_51061_51137 = state_51022__$1;
(statearr_51061_51137[(1)] = (32));

} else {
var statearr_51062_51138 = state_51022__$1;
(statearr_51062_51138[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (44))){
var inst_50998 = (state_51022[(21)]);
var inst_51011 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50998);
var inst_51012 = cljs.core.pr_str.call(null,inst_51011);
var inst_51013 = [cljs.core.str("not required: "),cljs.core.str(inst_51012)].join('');
var inst_51014 = figwheel.client.utils.log.call(null,inst_51013);
var state_51022__$1 = state_51022;
var statearr_51063_51139 = state_51022__$1;
(statearr_51063_51139[(2)] = inst_51014);

(statearr_51063_51139[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (6))){
var inst_50916 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51064_51140 = state_51022__$1;
(statearr_51064_51140[(2)] = inst_50916);

(statearr_51064_51140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (28))){
var inst_50941 = (state_51022[(26)]);
var inst_50968 = (state_51022[(2)]);
var inst_50969 = cljs.core.not_empty.call(null,inst_50941);
var state_51022__$1 = (function (){var statearr_51065 = state_51022;
(statearr_51065[(29)] = inst_50968);

return statearr_51065;
})();
if(cljs.core.truth_(inst_50969)){
var statearr_51066_51141 = state_51022__$1;
(statearr_51066_51141[(1)] = (29));

} else {
var statearr_51067_51142 = state_51022__$1;
(statearr_51067_51142[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (25))){
var inst_50939 = (state_51022[(23)]);
var inst_50955 = (state_51022[(2)]);
var inst_50956 = cljs.core.not_empty.call(null,inst_50939);
var state_51022__$1 = (function (){var statearr_51068 = state_51022;
(statearr_51068[(30)] = inst_50955);

return statearr_51068;
})();
if(cljs.core.truth_(inst_50956)){
var statearr_51069_51143 = state_51022__$1;
(statearr_51069_51143[(1)] = (26));

} else {
var statearr_51070_51144 = state_51022__$1;
(statearr_51070_51144[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (34))){
var inst_50991 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
if(cljs.core.truth_(inst_50991)){
var statearr_51071_51145 = state_51022__$1;
(statearr_51071_51145[(1)] = (38));

} else {
var statearr_51072_51146 = state_51022__$1;
(statearr_51072_51146[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (17))){
var state_51022__$1 = state_51022;
var statearr_51073_51147 = state_51022__$1;
(statearr_51073_51147[(2)] = recompile_dependents);

(statearr_51073_51147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (3))){
var state_51022__$1 = state_51022;
var statearr_51074_51148 = state_51022__$1;
(statearr_51074_51148[(2)] = null);

(statearr_51074_51148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (12))){
var inst_50912 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51075_51149 = state_51022__$1;
(statearr_51075_51149[(2)] = inst_50912);

(statearr_51075_51149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (2))){
var inst_50874 = (state_51022[(13)]);
var inst_50881 = cljs.core.seq.call(null,inst_50874);
var inst_50882 = inst_50881;
var inst_50883 = null;
var inst_50884 = (0);
var inst_50885 = (0);
var state_51022__$1 = (function (){var statearr_51076 = state_51022;
(statearr_51076[(7)] = inst_50882);

(statearr_51076[(8)] = inst_50883);

(statearr_51076[(9)] = inst_50885);

(statearr_51076[(10)] = inst_50884);

return statearr_51076;
})();
var statearr_51077_51150 = state_51022__$1;
(statearr_51077_51150[(2)] = null);

(statearr_51077_51150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (23))){
var inst_50941 = (state_51022[(26)]);
var inst_50939 = (state_51022[(23)]);
var inst_50938 = (state_51022[(24)]);
var inst_50935 = (state_51022[(19)]);
var inst_50943 = (state_51022[(25)]);
var inst_50946 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50948 = (function (){var all_files = inst_50935;
var res_SINGLEQUOTE_ = inst_50938;
var res = inst_50939;
var files_not_loaded = inst_50941;
var dependencies_that_loaded = inst_50943;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50935,inst_50943,inst_50946,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50947){
var map__51078 = p__50947;
var map__51078__$1 = ((((!((map__51078 == null)))?((((map__51078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51078):map__51078);
var request_url = cljs.core.get.call(null,map__51078__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50935,inst_50943,inst_50946,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50949 = cljs.core.reverse.call(null,inst_50943);
var inst_50950 = cljs.core.map.call(null,inst_50948,inst_50949);
var inst_50951 = cljs.core.pr_str.call(null,inst_50950);
var inst_50952 = figwheel.client.utils.log.call(null,inst_50951);
var state_51022__$1 = (function (){var statearr_51080 = state_51022;
(statearr_51080[(31)] = inst_50946);

return statearr_51080;
})();
var statearr_51081_51151 = state_51022__$1;
(statearr_51081_51151[(2)] = inst_50952);

(statearr_51081_51151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (35))){
var state_51022__$1 = state_51022;
var statearr_51082_51152 = state_51022__$1;
(statearr_51082_51152[(2)] = true);

(statearr_51082_51152[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (19))){
var inst_50925 = (state_51022[(12)]);
var inst_50931 = figwheel.client.file_reloading.expand_files.call(null,inst_50925);
var state_51022__$1 = state_51022;
var statearr_51083_51153 = state_51022__$1;
(statearr_51083_51153[(2)] = inst_50931);

(statearr_51083_51153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (11))){
var state_51022__$1 = state_51022;
var statearr_51084_51154 = state_51022__$1;
(statearr_51084_51154[(2)] = null);

(statearr_51084_51154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (9))){
var inst_50914 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51085_51155 = state_51022__$1;
(statearr_51085_51155[(2)] = inst_50914);

(statearr_51085_51155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (5))){
var inst_50885 = (state_51022[(9)]);
var inst_50884 = (state_51022[(10)]);
var inst_50887 = (inst_50885 < inst_50884);
var inst_50888 = inst_50887;
var state_51022__$1 = state_51022;
if(cljs.core.truth_(inst_50888)){
var statearr_51086_51156 = state_51022__$1;
(statearr_51086_51156[(1)] = (7));

} else {
var statearr_51087_51157 = state_51022__$1;
(statearr_51087_51157[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (14))){
var inst_50895 = (state_51022[(22)]);
var inst_50904 = cljs.core.first.call(null,inst_50895);
var inst_50905 = figwheel.client.file_reloading.eval_body.call(null,inst_50904,opts);
var inst_50906 = cljs.core.next.call(null,inst_50895);
var inst_50882 = inst_50906;
var inst_50883 = null;
var inst_50884 = (0);
var inst_50885 = (0);
var state_51022__$1 = (function (){var statearr_51088 = state_51022;
(statearr_51088[(7)] = inst_50882);

(statearr_51088[(32)] = inst_50905);

(statearr_51088[(8)] = inst_50883);

(statearr_51088[(9)] = inst_50885);

(statearr_51088[(10)] = inst_50884);

return statearr_51088;
})();
var statearr_51089_51158 = state_51022__$1;
(statearr_51089_51158[(2)] = null);

(statearr_51089_51158[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (45))){
var state_51022__$1 = state_51022;
var statearr_51090_51159 = state_51022__$1;
(statearr_51090_51159[(2)] = null);

(statearr_51090_51159[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (26))){
var inst_50941 = (state_51022[(26)]);
var inst_50939 = (state_51022[(23)]);
var inst_50938 = (state_51022[(24)]);
var inst_50935 = (state_51022[(19)]);
var inst_50943 = (state_51022[(25)]);
var inst_50958 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50960 = (function (){var all_files = inst_50935;
var res_SINGLEQUOTE_ = inst_50938;
var res = inst_50939;
var files_not_loaded = inst_50941;
var dependencies_that_loaded = inst_50943;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50935,inst_50943,inst_50958,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50959){
var map__51091 = p__50959;
var map__51091__$1 = ((((!((map__51091 == null)))?((((map__51091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51091):map__51091);
var namespace = cljs.core.get.call(null,map__51091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50935,inst_50943,inst_50958,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50961 = cljs.core.map.call(null,inst_50960,inst_50939);
var inst_50962 = cljs.core.pr_str.call(null,inst_50961);
var inst_50963 = figwheel.client.utils.log.call(null,inst_50962);
var inst_50964 = (function (){var all_files = inst_50935;
var res_SINGLEQUOTE_ = inst_50938;
var res = inst_50939;
var files_not_loaded = inst_50941;
var dependencies_that_loaded = inst_50943;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50935,inst_50943,inst_50958,inst_50960,inst_50961,inst_50962,inst_50963,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50941,inst_50939,inst_50938,inst_50935,inst_50943,inst_50958,inst_50960,inst_50961,inst_50962,inst_50963,state_val_51023,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50965 = setTimeout(inst_50964,(10));
var state_51022__$1 = (function (){var statearr_51093 = state_51022;
(statearr_51093[(33)] = inst_50958);

(statearr_51093[(34)] = inst_50963);

return statearr_51093;
})();
var statearr_51094_51160 = state_51022__$1;
(statearr_51094_51160[(2)] = inst_50965);

(statearr_51094_51160[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (16))){
var state_51022__$1 = state_51022;
var statearr_51095_51161 = state_51022__$1;
(statearr_51095_51161[(2)] = reload_dependents);

(statearr_51095_51161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (38))){
var inst_50975 = (state_51022[(16)]);
var inst_50993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50975);
var state_51022__$1 = state_51022;
var statearr_51096_51162 = state_51022__$1;
(statearr_51096_51162[(2)] = inst_50993);

(statearr_51096_51162[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (30))){
var state_51022__$1 = state_51022;
var statearr_51097_51163 = state_51022__$1;
(statearr_51097_51163[(2)] = null);

(statearr_51097_51163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (10))){
var inst_50895 = (state_51022[(22)]);
var inst_50897 = cljs.core.chunked_seq_QMARK_.call(null,inst_50895);
var state_51022__$1 = state_51022;
if(inst_50897){
var statearr_51098_51164 = state_51022__$1;
(statearr_51098_51164[(1)] = (13));

} else {
var statearr_51099_51165 = state_51022__$1;
(statearr_51099_51165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (18))){
var inst_50929 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
if(cljs.core.truth_(inst_50929)){
var statearr_51100_51166 = state_51022__$1;
(statearr_51100_51166[(1)] = (19));

} else {
var statearr_51101_51167 = state_51022__$1;
(statearr_51101_51167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (42))){
var state_51022__$1 = state_51022;
var statearr_51102_51168 = state_51022__$1;
(statearr_51102_51168[(2)] = null);

(statearr_51102_51168[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (37))){
var inst_50988 = (state_51022[(2)]);
var state_51022__$1 = state_51022;
var statearr_51103_51169 = state_51022__$1;
(statearr_51103_51169[(2)] = inst_50988);

(statearr_51103_51169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51023 === (8))){
var inst_50882 = (state_51022[(7)]);
var inst_50895 = (state_51022[(22)]);
var inst_50895__$1 = cljs.core.seq.call(null,inst_50882);
var state_51022__$1 = (function (){var statearr_51104 = state_51022;
(statearr_51104[(22)] = inst_50895__$1);

return statearr_51104;
})();
if(inst_50895__$1){
var statearr_51105_51170 = state_51022__$1;
(statearr_51105_51170[(1)] = (10));

} else {
var statearr_51106_51171 = state_51022__$1;
(statearr_51106_51171[(1)] = (11));

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
});})(c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28886__auto__,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0 = (function (){
var statearr_51110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51110[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__);

(statearr_51110[(1)] = (1));

return statearr_51110;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1 = (function (state_51022){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_51022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e51111){if((e51111 instanceof Object)){
var ex__28890__auto__ = e51111;
var statearr_51112_51172 = state_51022;
(statearr_51112_51172[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51173 = state_51022;
state_51022 = G__51173;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__ = function(state_51022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1.call(this,state_51022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29000__auto__ = (function (){var statearr_51113 = f__28999__auto__.call(null);
(statearr_51113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_51113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,map__50867,map__50867__$1,opts,before_jsload,on_jsload,reload_dependents,map__50868,map__50868__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28998__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51176,link){
var map__51179 = p__51176;
var map__51179__$1 = ((((!((map__51179 == null)))?((((map__51179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51179):map__51179);
var file = cljs.core.get.call(null,map__51179__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__51179,map__51179__$1,file){
return (function (p1__51174_SHARP_,p2__51175_SHARP_){
if(cljs.core._EQ_.call(null,p1__51174_SHARP_,p2__51175_SHARP_)){
return p1__51174_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__51179,map__51179__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51185){
var map__51186 = p__51185;
var map__51186__$1 = ((((!((map__51186 == null)))?((((map__51186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51186):map__51186);
var match_length = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51181_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51181_SHARP_);
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
var args51188 = [];
var len__26007__auto___51191 = arguments.length;
var i__26008__auto___51192 = (0);
while(true){
if((i__26008__auto___51192 < len__26007__auto___51191)){
args51188.push((arguments[i__26008__auto___51192]));

var G__51193 = (i__26008__auto___51192 + (1));
i__26008__auto___51192 = G__51193;
continue;
} else {
}
break;
}

var G__51190 = args51188.length;
switch (G__51190) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51188.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51195_SHARP_,p2__51196_SHARP_){
return cljs.core.assoc.call(null,p1__51195_SHARP_,cljs.core.get.call(null,p2__51196_SHARP_,key),p2__51196_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__51197){
var map__51200 = p__51197;
var map__51200__$1 = ((((!((map__51200 == null)))?((((map__51200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51200):map__51200);
var f_data = map__51200__$1;
var file = cljs.core.get.call(null,map__51200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__51202,p__51203){
var map__51212 = p__51202;
var map__51212__$1 = ((((!((map__51212 == null)))?((((map__51212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51212):map__51212);
var opts = map__51212__$1;
var on_cssload = cljs.core.get.call(null,map__51212__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__51213 = p__51203;
var map__51213__$1 = ((((!((map__51213 == null)))?((((map__51213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51213):map__51213);
var files_msg = map__51213__$1;
var files = cljs.core.get.call(null,map__51213__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__51216_51220 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__51217_51221 = null;
var count__51218_51222 = (0);
var i__51219_51223 = (0);
while(true){
if((i__51219_51223 < count__51218_51222)){
var f_51224 = cljs.core._nth.call(null,chunk__51217_51221,i__51219_51223);
figwheel.client.file_reloading.reload_css_file.call(null,f_51224);

var G__51225 = seq__51216_51220;
var G__51226 = chunk__51217_51221;
var G__51227 = count__51218_51222;
var G__51228 = (i__51219_51223 + (1));
seq__51216_51220 = G__51225;
chunk__51217_51221 = G__51226;
count__51218_51222 = G__51227;
i__51219_51223 = G__51228;
continue;
} else {
var temp__4657__auto___51229 = cljs.core.seq.call(null,seq__51216_51220);
if(temp__4657__auto___51229){
var seq__51216_51230__$1 = temp__4657__auto___51229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51216_51230__$1)){
var c__25713__auto___51231 = cljs.core.chunk_first.call(null,seq__51216_51230__$1);
var G__51232 = cljs.core.chunk_rest.call(null,seq__51216_51230__$1);
var G__51233 = c__25713__auto___51231;
var G__51234 = cljs.core.count.call(null,c__25713__auto___51231);
var G__51235 = (0);
seq__51216_51220 = G__51232;
chunk__51217_51221 = G__51233;
count__51218_51222 = G__51234;
i__51219_51223 = G__51235;
continue;
} else {
var f_51236 = cljs.core.first.call(null,seq__51216_51230__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_51236);

var G__51237 = cljs.core.next.call(null,seq__51216_51230__$1);
var G__51238 = null;
var G__51239 = (0);
var G__51240 = (0);
seq__51216_51220 = G__51237;
chunk__51217_51221 = G__51238;
count__51218_51222 = G__51239;
i__51219_51223 = G__51240;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__51212,map__51212__$1,opts,on_cssload,map__51213,map__51213__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__51212,map__51212__$1,opts,on_cssload,map__51213,map__51213__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479783418938