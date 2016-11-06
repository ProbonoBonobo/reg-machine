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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__59394_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__59394_SHARP_));
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
var seq__59399 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__59400 = null;
var count__59401 = (0);
var i__59402 = (0);
while(true){
if((i__59402 < count__59401)){
var n = cljs.core._nth.call(null,chunk__59400,i__59402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__59403 = seq__59399;
var G__59404 = chunk__59400;
var G__59405 = count__59401;
var G__59406 = (i__59402 + (1));
seq__59399 = G__59403;
chunk__59400 = G__59404;
count__59401 = G__59405;
i__59402 = G__59406;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59399);
if(temp__4657__auto__){
var seq__59399__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59399__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__59399__$1);
var G__59407 = cljs.core.chunk_rest.call(null,seq__59399__$1);
var G__59408 = c__25562__auto__;
var G__59409 = cljs.core.count.call(null,c__25562__auto__);
var G__59410 = (0);
seq__59399 = G__59407;
chunk__59400 = G__59408;
count__59401 = G__59409;
i__59402 = G__59410;
continue;
} else {
var n = cljs.core.first.call(null,seq__59399__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__59411 = cljs.core.next.call(null,seq__59399__$1);
var G__59412 = null;
var G__59413 = (0);
var G__59414 = (0);
seq__59399 = G__59411;
chunk__59400 = G__59412;
count__59401 = G__59413;
i__59402 = G__59414;
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

var seq__59465_59476 = cljs.core.seq.call(null,deps);
var chunk__59466_59477 = null;
var count__59467_59478 = (0);
var i__59468_59479 = (0);
while(true){
if((i__59468_59479 < count__59467_59478)){
var dep_59480 = cljs.core._nth.call(null,chunk__59466_59477,i__59468_59479);
topo_sort_helper_STAR_.call(null,dep_59480,(depth + (1)),state);

var G__59481 = seq__59465_59476;
var G__59482 = chunk__59466_59477;
var G__59483 = count__59467_59478;
var G__59484 = (i__59468_59479 + (1));
seq__59465_59476 = G__59481;
chunk__59466_59477 = G__59482;
count__59467_59478 = G__59483;
i__59468_59479 = G__59484;
continue;
} else {
var temp__4657__auto___59485 = cljs.core.seq.call(null,seq__59465_59476);
if(temp__4657__auto___59485){
var seq__59465_59486__$1 = temp__4657__auto___59485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59465_59486__$1)){
var c__25562__auto___59487 = cljs.core.chunk_first.call(null,seq__59465_59486__$1);
var G__59488 = cljs.core.chunk_rest.call(null,seq__59465_59486__$1);
var G__59489 = c__25562__auto___59487;
var G__59490 = cljs.core.count.call(null,c__25562__auto___59487);
var G__59491 = (0);
seq__59465_59476 = G__59488;
chunk__59466_59477 = G__59489;
count__59467_59478 = G__59490;
i__59468_59479 = G__59491;
continue;
} else {
var dep_59492 = cljs.core.first.call(null,seq__59465_59486__$1);
topo_sort_helper_STAR_.call(null,dep_59492,(depth + (1)),state);

var G__59493 = cljs.core.next.call(null,seq__59465_59486__$1);
var G__59494 = null;
var G__59495 = (0);
var G__59496 = (0);
seq__59465_59476 = G__59493;
chunk__59466_59477 = G__59494;
count__59467_59478 = G__59495;
i__59468_59479 = G__59496;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__59469){
var vec__59473 = p__59469;
var seq__59474 = cljs.core.seq.call(null,vec__59473);
var first__59475 = cljs.core.first.call(null,seq__59474);
var seq__59474__$1 = cljs.core.next.call(null,seq__59474);
var x = first__59475;
var xs = seq__59474__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__59473,seq__59474,first__59475,seq__59474__$1,x,xs,get_deps__$1){
return (function (p1__59415_SHARP_){
return clojure.set.difference.call(null,p1__59415_SHARP_,x);
});})(vec__59473,seq__59474,first__59475,seq__59474__$1,x,xs,get_deps__$1))
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
var seq__59509 = cljs.core.seq.call(null,provides);
var chunk__59510 = null;
var count__59511 = (0);
var i__59512 = (0);
while(true){
if((i__59512 < count__59511)){
var prov = cljs.core._nth.call(null,chunk__59510,i__59512);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59513_59521 = cljs.core.seq.call(null,requires);
var chunk__59514_59522 = null;
var count__59515_59523 = (0);
var i__59516_59524 = (0);
while(true){
if((i__59516_59524 < count__59515_59523)){
var req_59525 = cljs.core._nth.call(null,chunk__59514_59522,i__59516_59524);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59525,prov);

var G__59526 = seq__59513_59521;
var G__59527 = chunk__59514_59522;
var G__59528 = count__59515_59523;
var G__59529 = (i__59516_59524 + (1));
seq__59513_59521 = G__59526;
chunk__59514_59522 = G__59527;
count__59515_59523 = G__59528;
i__59516_59524 = G__59529;
continue;
} else {
var temp__4657__auto___59530 = cljs.core.seq.call(null,seq__59513_59521);
if(temp__4657__auto___59530){
var seq__59513_59531__$1 = temp__4657__auto___59530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59513_59531__$1)){
var c__25562__auto___59532 = cljs.core.chunk_first.call(null,seq__59513_59531__$1);
var G__59533 = cljs.core.chunk_rest.call(null,seq__59513_59531__$1);
var G__59534 = c__25562__auto___59532;
var G__59535 = cljs.core.count.call(null,c__25562__auto___59532);
var G__59536 = (0);
seq__59513_59521 = G__59533;
chunk__59514_59522 = G__59534;
count__59515_59523 = G__59535;
i__59516_59524 = G__59536;
continue;
} else {
var req_59537 = cljs.core.first.call(null,seq__59513_59531__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59537,prov);

var G__59538 = cljs.core.next.call(null,seq__59513_59531__$1);
var G__59539 = null;
var G__59540 = (0);
var G__59541 = (0);
seq__59513_59521 = G__59538;
chunk__59514_59522 = G__59539;
count__59515_59523 = G__59540;
i__59516_59524 = G__59541;
continue;
}
} else {
}
}
break;
}

var G__59542 = seq__59509;
var G__59543 = chunk__59510;
var G__59544 = count__59511;
var G__59545 = (i__59512 + (1));
seq__59509 = G__59542;
chunk__59510 = G__59543;
count__59511 = G__59544;
i__59512 = G__59545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59509);
if(temp__4657__auto__){
var seq__59509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59509__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__59509__$1);
var G__59546 = cljs.core.chunk_rest.call(null,seq__59509__$1);
var G__59547 = c__25562__auto__;
var G__59548 = cljs.core.count.call(null,c__25562__auto__);
var G__59549 = (0);
seq__59509 = G__59546;
chunk__59510 = G__59547;
count__59511 = G__59548;
i__59512 = G__59549;
continue;
} else {
var prov = cljs.core.first.call(null,seq__59509__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__59517_59550 = cljs.core.seq.call(null,requires);
var chunk__59518_59551 = null;
var count__59519_59552 = (0);
var i__59520_59553 = (0);
while(true){
if((i__59520_59553 < count__59519_59552)){
var req_59554 = cljs.core._nth.call(null,chunk__59518_59551,i__59520_59553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59554,prov);

var G__59555 = seq__59517_59550;
var G__59556 = chunk__59518_59551;
var G__59557 = count__59519_59552;
var G__59558 = (i__59520_59553 + (1));
seq__59517_59550 = G__59555;
chunk__59518_59551 = G__59556;
count__59519_59552 = G__59557;
i__59520_59553 = G__59558;
continue;
} else {
var temp__4657__auto___59559__$1 = cljs.core.seq.call(null,seq__59517_59550);
if(temp__4657__auto___59559__$1){
var seq__59517_59560__$1 = temp__4657__auto___59559__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59517_59560__$1)){
var c__25562__auto___59561 = cljs.core.chunk_first.call(null,seq__59517_59560__$1);
var G__59562 = cljs.core.chunk_rest.call(null,seq__59517_59560__$1);
var G__59563 = c__25562__auto___59561;
var G__59564 = cljs.core.count.call(null,c__25562__auto___59561);
var G__59565 = (0);
seq__59517_59550 = G__59562;
chunk__59518_59551 = G__59563;
count__59519_59552 = G__59564;
i__59520_59553 = G__59565;
continue;
} else {
var req_59566 = cljs.core.first.call(null,seq__59517_59560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_59566,prov);

var G__59567 = cljs.core.next.call(null,seq__59517_59560__$1);
var G__59568 = null;
var G__59569 = (0);
var G__59570 = (0);
seq__59517_59550 = G__59567;
chunk__59518_59551 = G__59568;
count__59519_59552 = G__59569;
i__59520_59553 = G__59570;
continue;
}
} else {
}
}
break;
}

var G__59571 = cljs.core.next.call(null,seq__59509__$1);
var G__59572 = null;
var G__59573 = (0);
var G__59574 = (0);
seq__59509 = G__59571;
chunk__59510 = G__59572;
count__59511 = G__59573;
i__59512 = G__59574;
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
var seq__59579_59583 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__59580_59584 = null;
var count__59581_59585 = (0);
var i__59582_59586 = (0);
while(true){
if((i__59582_59586 < count__59581_59585)){
var ns_59587 = cljs.core._nth.call(null,chunk__59580_59584,i__59582_59586);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59587);

var G__59588 = seq__59579_59583;
var G__59589 = chunk__59580_59584;
var G__59590 = count__59581_59585;
var G__59591 = (i__59582_59586 + (1));
seq__59579_59583 = G__59588;
chunk__59580_59584 = G__59589;
count__59581_59585 = G__59590;
i__59582_59586 = G__59591;
continue;
} else {
var temp__4657__auto___59592 = cljs.core.seq.call(null,seq__59579_59583);
if(temp__4657__auto___59592){
var seq__59579_59593__$1 = temp__4657__auto___59592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59579_59593__$1)){
var c__25562__auto___59594 = cljs.core.chunk_first.call(null,seq__59579_59593__$1);
var G__59595 = cljs.core.chunk_rest.call(null,seq__59579_59593__$1);
var G__59596 = c__25562__auto___59594;
var G__59597 = cljs.core.count.call(null,c__25562__auto___59594);
var G__59598 = (0);
seq__59579_59583 = G__59595;
chunk__59580_59584 = G__59596;
count__59581_59585 = G__59597;
i__59582_59586 = G__59598;
continue;
} else {
var ns_59599 = cljs.core.first.call(null,seq__59579_59593__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_59599);

var G__59600 = cljs.core.next.call(null,seq__59579_59593__$1);
var G__59601 = null;
var G__59602 = (0);
var G__59603 = (0);
seq__59579_59583 = G__59600;
chunk__59580_59584 = G__59601;
count__59581_59585 = G__59602;
i__59582_59586 = G__59603;
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
var G__59604__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__59604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59605__i = 0, G__59605__a = new Array(arguments.length -  0);
while (G__59605__i < G__59605__a.length) {G__59605__a[G__59605__i] = arguments[G__59605__i + 0]; ++G__59605__i;}
  args = new cljs.core.IndexedSeq(G__59605__a,0);
} 
return G__59604__delegate.call(this,args);};
G__59604.cljs$lang$maxFixedArity = 0;
G__59604.cljs$lang$applyTo = (function (arglist__59606){
var args = cljs.core.seq(arglist__59606);
return G__59604__delegate(args);
});
G__59604.cljs$core$IFn$_invoke$arity$variadic = G__59604__delegate;
return G__59604;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__59608 = cljs.core._EQ_;
var expr__59609 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__59608.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__59609))){
var path_parts = ((function (pred__59608,expr__59609){
return (function (p1__59607_SHARP_){
return clojure.string.split.call(null,p1__59607_SHARP_,/[\/\\]/);
});})(pred__59608,expr__59609))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__59608,expr__59609){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e59611){if((e59611 instanceof Error)){
var e = e59611;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e59611;

}
}})());
});
;})(path_parts,sep,root,pred__59608,expr__59609))
} else {
if(cljs.core.truth_(pred__59608.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__59609))){
return ((function (pred__59608,expr__59609){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__59608,expr__59609){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__59608,expr__59609))
);

return deferred.addErrback(((function (deferred,pred__59608,expr__59609){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__59608,expr__59609))
);
});
;})(pred__59608,expr__59609))
} else {
return ((function (pred__59608,expr__59609){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__59608,expr__59609))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__59612,callback){
var map__59615 = p__59612;
var map__59615__$1 = ((((!((map__59615 == null)))?((((map__59615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59615):map__59615);
var file_msg = map__59615__$1;
var request_url = cljs.core.get.call(null,map__59615__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__59615,map__59615__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__59615,map__59615__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__){
return (function (state_59639){
var state_val_59640 = (state_59639[(1)]);
if((state_val_59640 === (7))){
var inst_59635 = (state_59639[(2)]);
var state_59639__$1 = state_59639;
var statearr_59641_59661 = state_59639__$1;
(statearr_59641_59661[(2)] = inst_59635);

(statearr_59641_59661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (1))){
var state_59639__$1 = state_59639;
var statearr_59642_59662 = state_59639__$1;
(statearr_59642_59662[(2)] = null);

(statearr_59642_59662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (4))){
var inst_59619 = (state_59639[(7)]);
var inst_59619__$1 = (state_59639[(2)]);
var state_59639__$1 = (function (){var statearr_59643 = state_59639;
(statearr_59643[(7)] = inst_59619__$1);

return statearr_59643;
})();
if(cljs.core.truth_(inst_59619__$1)){
var statearr_59644_59663 = state_59639__$1;
(statearr_59644_59663[(1)] = (5));

} else {
var statearr_59645_59664 = state_59639__$1;
(statearr_59645_59664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (6))){
var state_59639__$1 = state_59639;
var statearr_59646_59665 = state_59639__$1;
(statearr_59646_59665[(2)] = null);

(statearr_59646_59665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (3))){
var inst_59637 = (state_59639[(2)]);
var state_59639__$1 = state_59639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59639__$1,inst_59637);
} else {
if((state_val_59640 === (2))){
var state_59639__$1 = state_59639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59639__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_59640 === (11))){
var inst_59631 = (state_59639[(2)]);
var state_59639__$1 = (function (){var statearr_59647 = state_59639;
(statearr_59647[(8)] = inst_59631);

return statearr_59647;
})();
var statearr_59648_59666 = state_59639__$1;
(statearr_59648_59666[(2)] = null);

(statearr_59648_59666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (9))){
var inst_59625 = (state_59639[(9)]);
var inst_59623 = (state_59639[(10)]);
var inst_59627 = inst_59625.call(null,inst_59623);
var state_59639__$1 = state_59639;
var statearr_59649_59667 = state_59639__$1;
(statearr_59649_59667[(2)] = inst_59627);

(statearr_59649_59667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (5))){
var inst_59619 = (state_59639[(7)]);
var inst_59621 = figwheel.client.file_reloading.blocking_load.call(null,inst_59619);
var state_59639__$1 = state_59639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59639__$1,(8),inst_59621);
} else {
if((state_val_59640 === (10))){
var inst_59623 = (state_59639[(10)]);
var inst_59629 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_59623);
var state_59639__$1 = state_59639;
var statearr_59650_59668 = state_59639__$1;
(statearr_59650_59668[(2)] = inst_59629);

(statearr_59650_59668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59640 === (8))){
var inst_59625 = (state_59639[(9)]);
var inst_59619 = (state_59639[(7)]);
var inst_59623 = (state_59639[(2)]);
var inst_59624 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_59625__$1 = cljs.core.get.call(null,inst_59624,inst_59619);
var state_59639__$1 = (function (){var statearr_59651 = state_59639;
(statearr_59651[(9)] = inst_59625__$1);

(statearr_59651[(10)] = inst_59623);

return statearr_59651;
})();
if(cljs.core.truth_(inst_59625__$1)){
var statearr_59652_59669 = state_59639__$1;
(statearr_59652_59669[(1)] = (9));

} else {
var statearr_59653_59670 = state_59639__$1;
(statearr_59653_59670[(1)] = (10));

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
});})(c__37979__auto__))
;
return ((function (switch__37867__auto__,c__37979__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37868__auto__ = null;
var figwheel$client$file_reloading$state_machine__37868__auto____0 = (function (){
var statearr_59657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59657[(0)] = figwheel$client$file_reloading$state_machine__37868__auto__);

(statearr_59657[(1)] = (1));

return statearr_59657;
});
var figwheel$client$file_reloading$state_machine__37868__auto____1 = (function (state_59639){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_59639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e59658){if((e59658 instanceof Object)){
var ex__37871__auto__ = e59658;
var statearr_59659_59671 = state_59639;
(statearr_59659_59671[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59672 = state_59639;
state_59639 = G__59672;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37868__auto__ = function(state_59639){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37868__auto____1.call(this,state_59639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37868__auto____0;
figwheel$client$file_reloading$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37868__auto____1;
return figwheel$client$file_reloading$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__))
})();
var state__37981__auto__ = (function (){var statearr_59660 = f__37980__auto__.call(null);
(statearr_59660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_59660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__))
);

return c__37979__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__59673,callback){
var map__59676 = p__59673;
var map__59676__$1 = ((((!((map__59676 == null)))?((((map__59676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59676):map__59676);
var file_msg = map__59676__$1;
var namespace = cljs.core.get.call(null,map__59676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__59676,map__59676__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__59676,map__59676__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__59678){
var map__59681 = p__59678;
var map__59681__$1 = ((((!((map__59681 == null)))?((((map__59681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59681):map__59681);
var file_msg = map__59681__$1;
var namespace = cljs.core.get.call(null,map__59681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__59683,callback){
var map__59686 = p__59683;
var map__59686__$1 = ((((!((map__59686 == null)))?((((map__59686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59686):map__59686);
var file_msg = map__59686__$1;
var request_url = cljs.core.get.call(null,map__59686__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__59686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37979__auto___59790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___59790,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___59790,out){
return (function (state_59772){
var state_val_59773 = (state_59772[(1)]);
if((state_val_59773 === (1))){
var inst_59746 = cljs.core.seq.call(null,files);
var inst_59747 = cljs.core.first.call(null,inst_59746);
var inst_59748 = cljs.core.next.call(null,inst_59746);
var inst_59749 = files;
var state_59772__$1 = (function (){var statearr_59774 = state_59772;
(statearr_59774[(7)] = inst_59749);

(statearr_59774[(8)] = inst_59747);

(statearr_59774[(9)] = inst_59748);

return statearr_59774;
})();
var statearr_59775_59791 = state_59772__$1;
(statearr_59775_59791[(2)] = null);

(statearr_59775_59791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59773 === (2))){
var inst_59749 = (state_59772[(7)]);
var inst_59755 = (state_59772[(10)]);
var inst_59754 = cljs.core.seq.call(null,inst_59749);
var inst_59755__$1 = cljs.core.first.call(null,inst_59754);
var inst_59756 = cljs.core.next.call(null,inst_59754);
var inst_59757 = (inst_59755__$1 == null);
var inst_59758 = cljs.core.not.call(null,inst_59757);
var state_59772__$1 = (function (){var statearr_59776 = state_59772;
(statearr_59776[(11)] = inst_59756);

(statearr_59776[(10)] = inst_59755__$1);

return statearr_59776;
})();
if(inst_59758){
var statearr_59777_59792 = state_59772__$1;
(statearr_59777_59792[(1)] = (4));

} else {
var statearr_59778_59793 = state_59772__$1;
(statearr_59778_59793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59773 === (3))){
var inst_59770 = (state_59772[(2)]);
var state_59772__$1 = state_59772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59772__$1,inst_59770);
} else {
if((state_val_59773 === (4))){
var inst_59755 = (state_59772[(10)]);
var inst_59760 = figwheel.client.file_reloading.reload_js_file.call(null,inst_59755);
var state_59772__$1 = state_59772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59772__$1,(7),inst_59760);
} else {
if((state_val_59773 === (5))){
var inst_59766 = cljs.core.async.close_BANG_.call(null,out);
var state_59772__$1 = state_59772;
var statearr_59779_59794 = state_59772__$1;
(statearr_59779_59794[(2)] = inst_59766);

(statearr_59779_59794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59773 === (6))){
var inst_59768 = (state_59772[(2)]);
var state_59772__$1 = state_59772;
var statearr_59780_59795 = state_59772__$1;
(statearr_59780_59795[(2)] = inst_59768);

(statearr_59780_59795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59773 === (7))){
var inst_59756 = (state_59772[(11)]);
var inst_59762 = (state_59772[(2)]);
var inst_59763 = cljs.core.async.put_BANG_.call(null,out,inst_59762);
var inst_59749 = inst_59756;
var state_59772__$1 = (function (){var statearr_59781 = state_59772;
(statearr_59781[(7)] = inst_59749);

(statearr_59781[(12)] = inst_59763);

return statearr_59781;
})();
var statearr_59782_59796 = state_59772__$1;
(statearr_59782_59796[(2)] = null);

(statearr_59782_59796[(1)] = (2));


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
});})(c__37979__auto___59790,out))
;
return ((function (switch__37867__auto__,c__37979__auto___59790,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto____0 = (function (){
var statearr_59786 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59786[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto__);

(statearr_59786[(1)] = (1));

return statearr_59786;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto____1 = (function (state_59772){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_59772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e59787){if((e59787 instanceof Object)){
var ex__37871__auto__ = e59787;
var statearr_59788_59797 = state_59772;
(statearr_59788_59797[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59798 = state_59772;
state_59772 = G__59798;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto__ = function(state_59772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto____1.call(this,state_59772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___59790,out))
})();
var state__37981__auto__ = (function (){var statearr_59789 = f__37980__auto__.call(null);
(statearr_59789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___59790);

return statearr_59789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___59790,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__59799,opts){
var map__59803 = p__59799;
var map__59803__$1 = ((((!((map__59803 == null)))?((((map__59803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59803):map__59803);
var eval_body__$1 = cljs.core.get.call(null,map__59803__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__59803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e59805){var e = e59805;
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
return (function (p1__59806_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__59806_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__59815){
var vec__59816 = p__59815;
var k = cljs.core.nth.call(null,vec__59816,(0),null);
var v = cljs.core.nth.call(null,vec__59816,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__59819){
var vec__59820 = p__59819;
var k = cljs.core.nth.call(null,vec__59820,(0),null);
var v = cljs.core.nth.call(null,vec__59820,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__59826,p__59827){
var map__60074 = p__59826;
var map__60074__$1 = ((((!((map__60074 == null)))?((((map__60074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60074):map__60074);
var opts = map__60074__$1;
var before_jsload = cljs.core.get.call(null,map__60074__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__60074__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__60074__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__60075 = p__59827;
var map__60075__$1 = ((((!((map__60075 == null)))?((((map__60075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60075):map__60075);
var msg = map__60075__$1;
var files = cljs.core.get.call(null,map__60075__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__60075__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__60075__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_60228){
var state_val_60229 = (state_60228[(1)]);
if((state_val_60229 === (7))){
var inst_60092 = (state_60228[(7)]);
var inst_60091 = (state_60228[(8)]);
var inst_60090 = (state_60228[(9)]);
var inst_60089 = (state_60228[(10)]);
var inst_60097 = cljs.core._nth.call(null,inst_60090,inst_60092);
var inst_60098 = figwheel.client.file_reloading.eval_body.call(null,inst_60097,opts);
var inst_60099 = (inst_60092 + (1));
var tmp60230 = inst_60091;
var tmp60231 = inst_60090;
var tmp60232 = inst_60089;
var inst_60089__$1 = tmp60232;
var inst_60090__$1 = tmp60231;
var inst_60091__$1 = tmp60230;
var inst_60092__$1 = inst_60099;
var state_60228__$1 = (function (){var statearr_60233 = state_60228;
(statearr_60233[(7)] = inst_60092__$1);

(statearr_60233[(8)] = inst_60091__$1);

(statearr_60233[(9)] = inst_60090__$1);

(statearr_60233[(10)] = inst_60089__$1);

(statearr_60233[(11)] = inst_60098);

return statearr_60233;
})();
var statearr_60234_60320 = state_60228__$1;
(statearr_60234_60320[(2)] = null);

(statearr_60234_60320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (20))){
var inst_60132 = (state_60228[(12)]);
var inst_60140 = figwheel.client.file_reloading.sort_files.call(null,inst_60132);
var state_60228__$1 = state_60228;
var statearr_60235_60321 = state_60228__$1;
(statearr_60235_60321[(2)] = inst_60140);

(statearr_60235_60321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (27))){
var state_60228__$1 = state_60228;
var statearr_60236_60322 = state_60228__$1;
(statearr_60236_60322[(2)] = null);

(statearr_60236_60322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (1))){
var inst_60081 = (state_60228[(13)]);
var inst_60078 = before_jsload.call(null,files);
var inst_60079 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_60080 = (function (){return ((function (inst_60081,inst_60078,inst_60079,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__59823_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__59823_SHARP_);
});
;})(inst_60081,inst_60078,inst_60079,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60081__$1 = cljs.core.filter.call(null,inst_60080,files);
var inst_60082 = cljs.core.not_empty.call(null,inst_60081__$1);
var state_60228__$1 = (function (){var statearr_60237 = state_60228;
(statearr_60237[(14)] = inst_60079);

(statearr_60237[(15)] = inst_60078);

(statearr_60237[(13)] = inst_60081__$1);

return statearr_60237;
})();
if(cljs.core.truth_(inst_60082)){
var statearr_60238_60323 = state_60228__$1;
(statearr_60238_60323[(1)] = (2));

} else {
var statearr_60239_60324 = state_60228__$1;
(statearr_60239_60324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (24))){
var state_60228__$1 = state_60228;
var statearr_60240_60325 = state_60228__$1;
(statearr_60240_60325[(2)] = null);

(statearr_60240_60325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (39))){
var inst_60182 = (state_60228[(16)]);
var state_60228__$1 = state_60228;
var statearr_60241_60326 = state_60228__$1;
(statearr_60241_60326[(2)] = inst_60182);

(statearr_60241_60326[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (46))){
var inst_60223 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
var statearr_60242_60327 = state_60228__$1;
(statearr_60242_60327[(2)] = inst_60223);

(statearr_60242_60327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (4))){
var inst_60126 = (state_60228[(2)]);
var inst_60127 = cljs.core.List.EMPTY;
var inst_60128 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_60127);
var inst_60129 = (function (){return ((function (inst_60126,inst_60127,inst_60128,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__59824_SHARP_){
var and__24739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__59824_SHARP_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__59824_SHARP_));
} else {
return and__24739__auto__;
}
});
;})(inst_60126,inst_60127,inst_60128,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60130 = cljs.core.filter.call(null,inst_60129,files);
var inst_60131 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_60132 = cljs.core.concat.call(null,inst_60130,inst_60131);
var state_60228__$1 = (function (){var statearr_60243 = state_60228;
(statearr_60243[(17)] = inst_60128);

(statearr_60243[(18)] = inst_60126);

(statearr_60243[(12)] = inst_60132);

return statearr_60243;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_60244_60328 = state_60228__$1;
(statearr_60244_60328[(1)] = (16));

} else {
var statearr_60245_60329 = state_60228__$1;
(statearr_60245_60329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (15))){
var inst_60116 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
var statearr_60246_60330 = state_60228__$1;
(statearr_60246_60330[(2)] = inst_60116);

(statearr_60246_60330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (21))){
var inst_60142 = (state_60228[(19)]);
var inst_60142__$1 = (state_60228[(2)]);
var inst_60143 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_60142__$1);
var state_60228__$1 = (function (){var statearr_60247 = state_60228;
(statearr_60247[(19)] = inst_60142__$1);

return statearr_60247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60228__$1,(22),inst_60143);
} else {
if((state_val_60229 === (31))){
var inst_60226 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60228__$1,inst_60226);
} else {
if((state_val_60229 === (32))){
var inst_60182 = (state_60228[(16)]);
var inst_60187 = inst_60182.cljs$lang$protocol_mask$partition0$;
var inst_60188 = (inst_60187 & (64));
var inst_60189 = inst_60182.cljs$core$ISeq$;
var inst_60190 = (inst_60188) || (inst_60189);
var state_60228__$1 = state_60228;
if(cljs.core.truth_(inst_60190)){
var statearr_60248_60331 = state_60228__$1;
(statearr_60248_60331[(1)] = (35));

} else {
var statearr_60249_60332 = state_60228__$1;
(statearr_60249_60332[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (40))){
var inst_60203 = (state_60228[(20)]);
var inst_60202 = (state_60228[(2)]);
var inst_60203__$1 = cljs.core.get.call(null,inst_60202,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_60204 = cljs.core.get.call(null,inst_60202,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_60205 = cljs.core.not_empty.call(null,inst_60203__$1);
var state_60228__$1 = (function (){var statearr_60250 = state_60228;
(statearr_60250[(21)] = inst_60204);

(statearr_60250[(20)] = inst_60203__$1);

return statearr_60250;
})();
if(cljs.core.truth_(inst_60205)){
var statearr_60251_60333 = state_60228__$1;
(statearr_60251_60333[(1)] = (41));

} else {
var statearr_60252_60334 = state_60228__$1;
(statearr_60252_60334[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (33))){
var state_60228__$1 = state_60228;
var statearr_60253_60335 = state_60228__$1;
(statearr_60253_60335[(2)] = false);

(statearr_60253_60335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (13))){
var inst_60102 = (state_60228[(22)]);
var inst_60106 = cljs.core.chunk_first.call(null,inst_60102);
var inst_60107 = cljs.core.chunk_rest.call(null,inst_60102);
var inst_60108 = cljs.core.count.call(null,inst_60106);
var inst_60089 = inst_60107;
var inst_60090 = inst_60106;
var inst_60091 = inst_60108;
var inst_60092 = (0);
var state_60228__$1 = (function (){var statearr_60254 = state_60228;
(statearr_60254[(7)] = inst_60092);

(statearr_60254[(8)] = inst_60091);

(statearr_60254[(9)] = inst_60090);

(statearr_60254[(10)] = inst_60089);

return statearr_60254;
})();
var statearr_60255_60336 = state_60228__$1;
(statearr_60255_60336[(2)] = null);

(statearr_60255_60336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (22))){
var inst_60145 = (state_60228[(23)]);
var inst_60150 = (state_60228[(24)]);
var inst_60142 = (state_60228[(19)]);
var inst_60146 = (state_60228[(25)]);
var inst_60145__$1 = (state_60228[(2)]);
var inst_60146__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60145__$1);
var inst_60147 = (function (){var all_files = inst_60142;
var res_SINGLEQUOTE_ = inst_60145__$1;
var res = inst_60146__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_60145,inst_60150,inst_60142,inst_60146,inst_60145__$1,inst_60146__$1,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__59825_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__59825_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_60145,inst_60150,inst_60142,inst_60146,inst_60145__$1,inst_60146__$1,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60148 = cljs.core.filter.call(null,inst_60147,inst_60145__$1);
var inst_60149 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_60150__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60149);
var inst_60151 = cljs.core.not_empty.call(null,inst_60150__$1);
var state_60228__$1 = (function (){var statearr_60256 = state_60228;
(statearr_60256[(23)] = inst_60145__$1);

(statearr_60256[(24)] = inst_60150__$1);

(statearr_60256[(26)] = inst_60148);

(statearr_60256[(25)] = inst_60146__$1);

return statearr_60256;
})();
if(cljs.core.truth_(inst_60151)){
var statearr_60257_60337 = state_60228__$1;
(statearr_60257_60337[(1)] = (23));

} else {
var statearr_60258_60338 = state_60228__$1;
(statearr_60258_60338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (36))){
var state_60228__$1 = state_60228;
var statearr_60259_60339 = state_60228__$1;
(statearr_60259_60339[(2)] = false);

(statearr_60259_60339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (41))){
var inst_60203 = (state_60228[(20)]);
var inst_60207 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_60208 = cljs.core.map.call(null,inst_60207,inst_60203);
var inst_60209 = cljs.core.pr_str.call(null,inst_60208);
var inst_60210 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_60209)].join('');
var inst_60211 = figwheel.client.utils.log.call(null,inst_60210);
var state_60228__$1 = state_60228;
var statearr_60260_60340 = state_60228__$1;
(statearr_60260_60340[(2)] = inst_60211);

(statearr_60260_60340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (43))){
var inst_60204 = (state_60228[(21)]);
var inst_60214 = (state_60228[(2)]);
var inst_60215 = cljs.core.not_empty.call(null,inst_60204);
var state_60228__$1 = (function (){var statearr_60261 = state_60228;
(statearr_60261[(27)] = inst_60214);

return statearr_60261;
})();
if(cljs.core.truth_(inst_60215)){
var statearr_60262_60341 = state_60228__$1;
(statearr_60262_60341[(1)] = (44));

} else {
var statearr_60263_60342 = state_60228__$1;
(statearr_60263_60342[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (29))){
var inst_60182 = (state_60228[(16)]);
var inst_60145 = (state_60228[(23)]);
var inst_60150 = (state_60228[(24)]);
var inst_60148 = (state_60228[(26)]);
var inst_60142 = (state_60228[(19)]);
var inst_60146 = (state_60228[(25)]);
var inst_60178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_60181 = (function (){var all_files = inst_60142;
var res_SINGLEQUOTE_ = inst_60145;
var res = inst_60146;
var files_not_loaded = inst_60148;
var dependencies_that_loaded = inst_60150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60182,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60178,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60180){
var map__60264 = p__60180;
var map__60264__$1 = ((((!((map__60264 == null)))?((((map__60264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60264):map__60264);
var namespace = cljs.core.get.call(null,map__60264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60182,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60178,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60182__$1 = cljs.core.group_by.call(null,inst_60181,inst_60148);
var inst_60184 = (inst_60182__$1 == null);
var inst_60185 = cljs.core.not.call(null,inst_60184);
var state_60228__$1 = (function (){var statearr_60266 = state_60228;
(statearr_60266[(16)] = inst_60182__$1);

(statearr_60266[(28)] = inst_60178);

return statearr_60266;
})();
if(inst_60185){
var statearr_60267_60343 = state_60228__$1;
(statearr_60267_60343[(1)] = (32));

} else {
var statearr_60268_60344 = state_60228__$1;
(statearr_60268_60344[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (44))){
var inst_60204 = (state_60228[(21)]);
var inst_60217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60204);
var inst_60218 = cljs.core.pr_str.call(null,inst_60217);
var inst_60219 = [cljs.core.str("not required: "),cljs.core.str(inst_60218)].join('');
var inst_60220 = figwheel.client.utils.log.call(null,inst_60219);
var state_60228__$1 = state_60228;
var statearr_60269_60345 = state_60228__$1;
(statearr_60269_60345[(2)] = inst_60220);

(statearr_60269_60345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (6))){
var inst_60123 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
var statearr_60270_60346 = state_60228__$1;
(statearr_60270_60346[(2)] = inst_60123);

(statearr_60270_60346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (28))){
var inst_60148 = (state_60228[(26)]);
var inst_60175 = (state_60228[(2)]);
var inst_60176 = cljs.core.not_empty.call(null,inst_60148);
var state_60228__$1 = (function (){var statearr_60271 = state_60228;
(statearr_60271[(29)] = inst_60175);

return statearr_60271;
})();
if(cljs.core.truth_(inst_60176)){
var statearr_60272_60347 = state_60228__$1;
(statearr_60272_60347[(1)] = (29));

} else {
var statearr_60273_60348 = state_60228__$1;
(statearr_60273_60348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (25))){
var inst_60146 = (state_60228[(25)]);
var inst_60162 = (state_60228[(2)]);
var inst_60163 = cljs.core.not_empty.call(null,inst_60146);
var state_60228__$1 = (function (){var statearr_60274 = state_60228;
(statearr_60274[(30)] = inst_60162);

return statearr_60274;
})();
if(cljs.core.truth_(inst_60163)){
var statearr_60275_60349 = state_60228__$1;
(statearr_60275_60349[(1)] = (26));

} else {
var statearr_60276_60350 = state_60228__$1;
(statearr_60276_60350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (34))){
var inst_60197 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
if(cljs.core.truth_(inst_60197)){
var statearr_60277_60351 = state_60228__$1;
(statearr_60277_60351[(1)] = (38));

} else {
var statearr_60278_60352 = state_60228__$1;
(statearr_60278_60352[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (17))){
var state_60228__$1 = state_60228;
var statearr_60279_60353 = state_60228__$1;
(statearr_60279_60353[(2)] = recompile_dependents);

(statearr_60279_60353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (3))){
var state_60228__$1 = state_60228;
var statearr_60280_60354 = state_60228__$1;
(statearr_60280_60354[(2)] = null);

(statearr_60280_60354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (12))){
var inst_60119 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
var statearr_60281_60355 = state_60228__$1;
(statearr_60281_60355[(2)] = inst_60119);

(statearr_60281_60355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (2))){
var inst_60081 = (state_60228[(13)]);
var inst_60088 = cljs.core.seq.call(null,inst_60081);
var inst_60089 = inst_60088;
var inst_60090 = null;
var inst_60091 = (0);
var inst_60092 = (0);
var state_60228__$1 = (function (){var statearr_60282 = state_60228;
(statearr_60282[(7)] = inst_60092);

(statearr_60282[(8)] = inst_60091);

(statearr_60282[(9)] = inst_60090);

(statearr_60282[(10)] = inst_60089);

return statearr_60282;
})();
var statearr_60283_60356 = state_60228__$1;
(statearr_60283_60356[(2)] = null);

(statearr_60283_60356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (23))){
var inst_60145 = (state_60228[(23)]);
var inst_60150 = (state_60228[(24)]);
var inst_60148 = (state_60228[(26)]);
var inst_60142 = (state_60228[(19)]);
var inst_60146 = (state_60228[(25)]);
var inst_60153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_60155 = (function (){var all_files = inst_60142;
var res_SINGLEQUOTE_ = inst_60145;
var res = inst_60146;
var files_not_loaded = inst_60148;
var dependencies_that_loaded = inst_60150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60153,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60154){
var map__60284 = p__60154;
var map__60284__$1 = ((((!((map__60284 == null)))?((((map__60284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60284):map__60284);
var request_url = cljs.core.get.call(null,map__60284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60153,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60156 = cljs.core.reverse.call(null,inst_60150);
var inst_60157 = cljs.core.map.call(null,inst_60155,inst_60156);
var inst_60158 = cljs.core.pr_str.call(null,inst_60157);
var inst_60159 = figwheel.client.utils.log.call(null,inst_60158);
var state_60228__$1 = (function (){var statearr_60286 = state_60228;
(statearr_60286[(31)] = inst_60153);

return statearr_60286;
})();
var statearr_60287_60357 = state_60228__$1;
(statearr_60287_60357[(2)] = inst_60159);

(statearr_60287_60357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (35))){
var state_60228__$1 = state_60228;
var statearr_60288_60358 = state_60228__$1;
(statearr_60288_60358[(2)] = true);

(statearr_60288_60358[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (19))){
var inst_60132 = (state_60228[(12)]);
var inst_60138 = figwheel.client.file_reloading.expand_files.call(null,inst_60132);
var state_60228__$1 = state_60228;
var statearr_60289_60359 = state_60228__$1;
(statearr_60289_60359[(2)] = inst_60138);

(statearr_60289_60359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (11))){
var state_60228__$1 = state_60228;
var statearr_60290_60360 = state_60228__$1;
(statearr_60290_60360[(2)] = null);

(statearr_60290_60360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (9))){
var inst_60121 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
var statearr_60291_60361 = state_60228__$1;
(statearr_60291_60361[(2)] = inst_60121);

(statearr_60291_60361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (5))){
var inst_60092 = (state_60228[(7)]);
var inst_60091 = (state_60228[(8)]);
var inst_60094 = (inst_60092 < inst_60091);
var inst_60095 = inst_60094;
var state_60228__$1 = state_60228;
if(cljs.core.truth_(inst_60095)){
var statearr_60292_60362 = state_60228__$1;
(statearr_60292_60362[(1)] = (7));

} else {
var statearr_60293_60363 = state_60228__$1;
(statearr_60293_60363[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (14))){
var inst_60102 = (state_60228[(22)]);
var inst_60111 = cljs.core.first.call(null,inst_60102);
var inst_60112 = figwheel.client.file_reloading.eval_body.call(null,inst_60111,opts);
var inst_60113 = cljs.core.next.call(null,inst_60102);
var inst_60089 = inst_60113;
var inst_60090 = null;
var inst_60091 = (0);
var inst_60092 = (0);
var state_60228__$1 = (function (){var statearr_60294 = state_60228;
(statearr_60294[(7)] = inst_60092);

(statearr_60294[(8)] = inst_60091);

(statearr_60294[(9)] = inst_60090);

(statearr_60294[(10)] = inst_60089);

(statearr_60294[(32)] = inst_60112);

return statearr_60294;
})();
var statearr_60295_60364 = state_60228__$1;
(statearr_60295_60364[(2)] = null);

(statearr_60295_60364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (45))){
var state_60228__$1 = state_60228;
var statearr_60296_60365 = state_60228__$1;
(statearr_60296_60365[(2)] = null);

(statearr_60296_60365[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (26))){
var inst_60145 = (state_60228[(23)]);
var inst_60150 = (state_60228[(24)]);
var inst_60148 = (state_60228[(26)]);
var inst_60142 = (state_60228[(19)]);
var inst_60146 = (state_60228[(25)]);
var inst_60165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_60167 = (function (){var all_files = inst_60142;
var res_SINGLEQUOTE_ = inst_60145;
var res = inst_60146;
var files_not_loaded = inst_60148;
var dependencies_that_loaded = inst_60150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60165,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60166){
var map__60297 = p__60166;
var map__60297__$1 = ((((!((map__60297 == null)))?((((map__60297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60297):map__60297);
var namespace = cljs.core.get.call(null,map__60297__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__60297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60165,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60168 = cljs.core.map.call(null,inst_60167,inst_60146);
var inst_60169 = cljs.core.pr_str.call(null,inst_60168);
var inst_60170 = figwheel.client.utils.log.call(null,inst_60169);
var inst_60171 = (function (){var all_files = inst_60142;
var res_SINGLEQUOTE_ = inst_60145;
var res = inst_60146;
var files_not_loaded = inst_60148;
var dependencies_that_loaded = inst_60150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60165,inst_60167,inst_60168,inst_60169,inst_60170,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60145,inst_60150,inst_60148,inst_60142,inst_60146,inst_60165,inst_60167,inst_60168,inst_60169,inst_60170,state_val_60229,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60172 = setTimeout(inst_60171,(10));
var state_60228__$1 = (function (){var statearr_60299 = state_60228;
(statearr_60299[(33)] = inst_60165);

(statearr_60299[(34)] = inst_60170);

return statearr_60299;
})();
var statearr_60300_60366 = state_60228__$1;
(statearr_60300_60366[(2)] = inst_60172);

(statearr_60300_60366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (16))){
var state_60228__$1 = state_60228;
var statearr_60301_60367 = state_60228__$1;
(statearr_60301_60367[(2)] = reload_dependents);

(statearr_60301_60367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (38))){
var inst_60182 = (state_60228[(16)]);
var inst_60199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60182);
var state_60228__$1 = state_60228;
var statearr_60302_60368 = state_60228__$1;
(statearr_60302_60368[(2)] = inst_60199);

(statearr_60302_60368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (30))){
var state_60228__$1 = state_60228;
var statearr_60303_60369 = state_60228__$1;
(statearr_60303_60369[(2)] = null);

(statearr_60303_60369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (10))){
var inst_60102 = (state_60228[(22)]);
var inst_60104 = cljs.core.chunked_seq_QMARK_.call(null,inst_60102);
var state_60228__$1 = state_60228;
if(inst_60104){
var statearr_60304_60370 = state_60228__$1;
(statearr_60304_60370[(1)] = (13));

} else {
var statearr_60305_60371 = state_60228__$1;
(statearr_60305_60371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (18))){
var inst_60136 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
if(cljs.core.truth_(inst_60136)){
var statearr_60306_60372 = state_60228__$1;
(statearr_60306_60372[(1)] = (19));

} else {
var statearr_60307_60373 = state_60228__$1;
(statearr_60307_60373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (42))){
var state_60228__$1 = state_60228;
var statearr_60308_60374 = state_60228__$1;
(statearr_60308_60374[(2)] = null);

(statearr_60308_60374[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (37))){
var inst_60194 = (state_60228[(2)]);
var state_60228__$1 = state_60228;
var statearr_60309_60375 = state_60228__$1;
(statearr_60309_60375[(2)] = inst_60194);

(statearr_60309_60375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60229 === (8))){
var inst_60089 = (state_60228[(10)]);
var inst_60102 = (state_60228[(22)]);
var inst_60102__$1 = cljs.core.seq.call(null,inst_60089);
var state_60228__$1 = (function (){var statearr_60310 = state_60228;
(statearr_60310[(22)] = inst_60102__$1);

return statearr_60310;
})();
if(inst_60102__$1){
var statearr_60311_60376 = state_60228__$1;
(statearr_60311_60376[(1)] = (10));

} else {
var statearr_60312_60377 = state_60228__$1;
(statearr_60312_60377[(1)] = (11));

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
});})(c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37867__auto__,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto____0 = (function (){
var statearr_60316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60316[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto__);

(statearr_60316[(1)] = (1));

return statearr_60316;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto____1 = (function (state_60228){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_60228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e60317){if((e60317 instanceof Object)){
var ex__37871__auto__ = e60317;
var statearr_60318_60378 = state_60228;
(statearr_60318_60378[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60379 = state_60228;
state_60228 = G__60379;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto__ = function(state_60228){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto____1.call(this,state_60228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37981__auto__ = (function (){var statearr_60319 = f__37980__auto__.call(null);
(statearr_60319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_60319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__,map__60074,map__60074__$1,opts,before_jsload,on_jsload,reload_dependents,map__60075,map__60075__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37979__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__60382,link){
var map__60385 = p__60382;
var map__60385__$1 = ((((!((map__60385 == null)))?((((map__60385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60385):map__60385);
var file = cljs.core.get.call(null,map__60385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__60385,map__60385__$1,file){
return (function (p1__60380_SHARP_,p2__60381_SHARP_){
if(cljs.core._EQ_.call(null,p1__60380_SHARP_,p2__60381_SHARP_)){
return p1__60380_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__60385,map__60385__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__60391){
var map__60392 = p__60391;
var map__60392__$1 = ((((!((map__60392 == null)))?((((map__60392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60392):map__60392);
var match_length = cljs.core.get.call(null,map__60392__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__60392__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__60387_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__60387_SHARP_);
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
var args60394 = [];
var len__25826__auto___60397 = arguments.length;
var i__25827__auto___60398 = (0);
while(true){
if((i__25827__auto___60398 < len__25826__auto___60397)){
args60394.push((arguments[i__25827__auto___60398]));

var G__60399 = (i__25827__auto___60398 + (1));
i__25827__auto___60398 = G__60399;
continue;
} else {
}
break;
}

var G__60396 = args60394.length;
switch (G__60396) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60394.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__60401_SHARP_,p2__60402_SHARP_){
return cljs.core.assoc.call(null,p1__60401_SHARP_,cljs.core.get.call(null,p2__60402_SHARP_,key),p2__60402_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__60403){
var map__60406 = p__60403;
var map__60406__$1 = ((((!((map__60406 == null)))?((((map__60406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60406):map__60406);
var f_data = map__60406__$1;
var file = cljs.core.get.call(null,map__60406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__60408,p__60409){
var map__60418 = p__60408;
var map__60418__$1 = ((((!((map__60418 == null)))?((((map__60418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60418):map__60418);
var opts = map__60418__$1;
var on_cssload = cljs.core.get.call(null,map__60418__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__60419 = p__60409;
var map__60419__$1 = ((((!((map__60419 == null)))?((((map__60419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60419):map__60419);
var files_msg = map__60419__$1;
var files = cljs.core.get.call(null,map__60419__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__60422_60426 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__60423_60427 = null;
var count__60424_60428 = (0);
var i__60425_60429 = (0);
while(true){
if((i__60425_60429 < count__60424_60428)){
var f_60430 = cljs.core._nth.call(null,chunk__60423_60427,i__60425_60429);
figwheel.client.file_reloading.reload_css_file.call(null,f_60430);

var G__60431 = seq__60422_60426;
var G__60432 = chunk__60423_60427;
var G__60433 = count__60424_60428;
var G__60434 = (i__60425_60429 + (1));
seq__60422_60426 = G__60431;
chunk__60423_60427 = G__60432;
count__60424_60428 = G__60433;
i__60425_60429 = G__60434;
continue;
} else {
var temp__4657__auto___60435 = cljs.core.seq.call(null,seq__60422_60426);
if(temp__4657__auto___60435){
var seq__60422_60436__$1 = temp__4657__auto___60435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60422_60436__$1)){
var c__25562__auto___60437 = cljs.core.chunk_first.call(null,seq__60422_60436__$1);
var G__60438 = cljs.core.chunk_rest.call(null,seq__60422_60436__$1);
var G__60439 = c__25562__auto___60437;
var G__60440 = cljs.core.count.call(null,c__25562__auto___60437);
var G__60441 = (0);
seq__60422_60426 = G__60438;
chunk__60423_60427 = G__60439;
count__60424_60428 = G__60440;
i__60425_60429 = G__60441;
continue;
} else {
var f_60442 = cljs.core.first.call(null,seq__60422_60436__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_60442);

var G__60443 = cljs.core.next.call(null,seq__60422_60436__$1);
var G__60444 = null;
var G__60445 = (0);
var G__60446 = (0);
seq__60422_60426 = G__60443;
chunk__60423_60427 = G__60444;
count__60424_60428 = G__60445;
i__60425_60429 = G__60446;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__60418,map__60418__$1,opts,on_cssload,map__60419,map__60419__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__60418,map__60418__$1,opts,on_cssload,map__60419,map__60419__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478399627724