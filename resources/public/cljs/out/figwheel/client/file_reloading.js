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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__71491_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__71491_SHARP_));
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
var seq__71496 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__71497 = null;
var count__71498 = (0);
var i__71499 = (0);
while(true){
if((i__71499 < count__71498)){
var n = cljs.core._nth.call(null,chunk__71497,i__71499);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__71500 = seq__71496;
var G__71501 = chunk__71497;
var G__71502 = count__71498;
var G__71503 = (i__71499 + (1));
seq__71496 = G__71500;
chunk__71497 = G__71501;
count__71498 = G__71502;
i__71499 = G__71503;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__71496);
if(temp__4657__auto__){
var seq__71496__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71496__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__71496__$1);
var G__71504 = cljs.core.chunk_rest.call(null,seq__71496__$1);
var G__71505 = c__25713__auto__;
var G__71506 = cljs.core.count.call(null,c__25713__auto__);
var G__71507 = (0);
seq__71496 = G__71504;
chunk__71497 = G__71505;
count__71498 = G__71506;
i__71499 = G__71507;
continue;
} else {
var n = cljs.core.first.call(null,seq__71496__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__71508 = cljs.core.next.call(null,seq__71496__$1);
var G__71509 = null;
var G__71510 = (0);
var G__71511 = (0);
seq__71496 = G__71508;
chunk__71497 = G__71509;
count__71498 = G__71510;
i__71499 = G__71511;
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

var seq__71562_71573 = cljs.core.seq.call(null,deps);
var chunk__71563_71574 = null;
var count__71564_71575 = (0);
var i__71565_71576 = (0);
while(true){
if((i__71565_71576 < count__71564_71575)){
var dep_71577 = cljs.core._nth.call(null,chunk__71563_71574,i__71565_71576);
topo_sort_helper_STAR_.call(null,dep_71577,(depth + (1)),state);

var G__71578 = seq__71562_71573;
var G__71579 = chunk__71563_71574;
var G__71580 = count__71564_71575;
var G__71581 = (i__71565_71576 + (1));
seq__71562_71573 = G__71578;
chunk__71563_71574 = G__71579;
count__71564_71575 = G__71580;
i__71565_71576 = G__71581;
continue;
} else {
var temp__4657__auto___71582 = cljs.core.seq.call(null,seq__71562_71573);
if(temp__4657__auto___71582){
var seq__71562_71583__$1 = temp__4657__auto___71582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71562_71583__$1)){
var c__25713__auto___71584 = cljs.core.chunk_first.call(null,seq__71562_71583__$1);
var G__71585 = cljs.core.chunk_rest.call(null,seq__71562_71583__$1);
var G__71586 = c__25713__auto___71584;
var G__71587 = cljs.core.count.call(null,c__25713__auto___71584);
var G__71588 = (0);
seq__71562_71573 = G__71585;
chunk__71563_71574 = G__71586;
count__71564_71575 = G__71587;
i__71565_71576 = G__71588;
continue;
} else {
var dep_71589 = cljs.core.first.call(null,seq__71562_71583__$1);
topo_sort_helper_STAR_.call(null,dep_71589,(depth + (1)),state);

var G__71590 = cljs.core.next.call(null,seq__71562_71583__$1);
var G__71591 = null;
var G__71592 = (0);
var G__71593 = (0);
seq__71562_71573 = G__71590;
chunk__71563_71574 = G__71591;
count__71564_71575 = G__71592;
i__71565_71576 = G__71593;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__71566){
var vec__71570 = p__71566;
var seq__71571 = cljs.core.seq.call(null,vec__71570);
var first__71572 = cljs.core.first.call(null,seq__71571);
var seq__71571__$1 = cljs.core.next.call(null,seq__71571);
var x = first__71572;
var xs = seq__71571__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__71570,seq__71571,first__71572,seq__71571__$1,x,xs,get_deps__$1){
return (function (p1__71512_SHARP_){
return clojure.set.difference.call(null,p1__71512_SHARP_,x);
});})(vec__71570,seq__71571,first__71572,seq__71571__$1,x,xs,get_deps__$1))
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
var seq__71606 = cljs.core.seq.call(null,provides);
var chunk__71607 = null;
var count__71608 = (0);
var i__71609 = (0);
while(true){
if((i__71609 < count__71608)){
var prov = cljs.core._nth.call(null,chunk__71607,i__71609);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71610_71618 = cljs.core.seq.call(null,requires);
var chunk__71611_71619 = null;
var count__71612_71620 = (0);
var i__71613_71621 = (0);
while(true){
if((i__71613_71621 < count__71612_71620)){
var req_71622 = cljs.core._nth.call(null,chunk__71611_71619,i__71613_71621);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71622,prov);

var G__71623 = seq__71610_71618;
var G__71624 = chunk__71611_71619;
var G__71625 = count__71612_71620;
var G__71626 = (i__71613_71621 + (1));
seq__71610_71618 = G__71623;
chunk__71611_71619 = G__71624;
count__71612_71620 = G__71625;
i__71613_71621 = G__71626;
continue;
} else {
var temp__4657__auto___71627 = cljs.core.seq.call(null,seq__71610_71618);
if(temp__4657__auto___71627){
var seq__71610_71628__$1 = temp__4657__auto___71627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71610_71628__$1)){
var c__25713__auto___71629 = cljs.core.chunk_first.call(null,seq__71610_71628__$1);
var G__71630 = cljs.core.chunk_rest.call(null,seq__71610_71628__$1);
var G__71631 = c__25713__auto___71629;
var G__71632 = cljs.core.count.call(null,c__25713__auto___71629);
var G__71633 = (0);
seq__71610_71618 = G__71630;
chunk__71611_71619 = G__71631;
count__71612_71620 = G__71632;
i__71613_71621 = G__71633;
continue;
} else {
var req_71634 = cljs.core.first.call(null,seq__71610_71628__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71634,prov);

var G__71635 = cljs.core.next.call(null,seq__71610_71628__$1);
var G__71636 = null;
var G__71637 = (0);
var G__71638 = (0);
seq__71610_71618 = G__71635;
chunk__71611_71619 = G__71636;
count__71612_71620 = G__71637;
i__71613_71621 = G__71638;
continue;
}
} else {
}
}
break;
}

var G__71639 = seq__71606;
var G__71640 = chunk__71607;
var G__71641 = count__71608;
var G__71642 = (i__71609 + (1));
seq__71606 = G__71639;
chunk__71607 = G__71640;
count__71608 = G__71641;
i__71609 = G__71642;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__71606);
if(temp__4657__auto__){
var seq__71606__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71606__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__71606__$1);
var G__71643 = cljs.core.chunk_rest.call(null,seq__71606__$1);
var G__71644 = c__25713__auto__;
var G__71645 = cljs.core.count.call(null,c__25713__auto__);
var G__71646 = (0);
seq__71606 = G__71643;
chunk__71607 = G__71644;
count__71608 = G__71645;
i__71609 = G__71646;
continue;
} else {
var prov = cljs.core.first.call(null,seq__71606__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71614_71647 = cljs.core.seq.call(null,requires);
var chunk__71615_71648 = null;
var count__71616_71649 = (0);
var i__71617_71650 = (0);
while(true){
if((i__71617_71650 < count__71616_71649)){
var req_71651 = cljs.core._nth.call(null,chunk__71615_71648,i__71617_71650);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71651,prov);

var G__71652 = seq__71614_71647;
var G__71653 = chunk__71615_71648;
var G__71654 = count__71616_71649;
var G__71655 = (i__71617_71650 + (1));
seq__71614_71647 = G__71652;
chunk__71615_71648 = G__71653;
count__71616_71649 = G__71654;
i__71617_71650 = G__71655;
continue;
} else {
var temp__4657__auto___71656__$1 = cljs.core.seq.call(null,seq__71614_71647);
if(temp__4657__auto___71656__$1){
var seq__71614_71657__$1 = temp__4657__auto___71656__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71614_71657__$1)){
var c__25713__auto___71658 = cljs.core.chunk_first.call(null,seq__71614_71657__$1);
var G__71659 = cljs.core.chunk_rest.call(null,seq__71614_71657__$1);
var G__71660 = c__25713__auto___71658;
var G__71661 = cljs.core.count.call(null,c__25713__auto___71658);
var G__71662 = (0);
seq__71614_71647 = G__71659;
chunk__71615_71648 = G__71660;
count__71616_71649 = G__71661;
i__71617_71650 = G__71662;
continue;
} else {
var req_71663 = cljs.core.first.call(null,seq__71614_71657__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71663,prov);

var G__71664 = cljs.core.next.call(null,seq__71614_71657__$1);
var G__71665 = null;
var G__71666 = (0);
var G__71667 = (0);
seq__71614_71647 = G__71664;
chunk__71615_71648 = G__71665;
count__71616_71649 = G__71666;
i__71617_71650 = G__71667;
continue;
}
} else {
}
}
break;
}

var G__71668 = cljs.core.next.call(null,seq__71606__$1);
var G__71669 = null;
var G__71670 = (0);
var G__71671 = (0);
seq__71606 = G__71668;
chunk__71607 = G__71669;
count__71608 = G__71670;
i__71609 = G__71671;
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
var seq__71676_71680 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__71677_71681 = null;
var count__71678_71682 = (0);
var i__71679_71683 = (0);
while(true){
if((i__71679_71683 < count__71678_71682)){
var ns_71684 = cljs.core._nth.call(null,chunk__71677_71681,i__71679_71683);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71684);

var G__71685 = seq__71676_71680;
var G__71686 = chunk__71677_71681;
var G__71687 = count__71678_71682;
var G__71688 = (i__71679_71683 + (1));
seq__71676_71680 = G__71685;
chunk__71677_71681 = G__71686;
count__71678_71682 = G__71687;
i__71679_71683 = G__71688;
continue;
} else {
var temp__4657__auto___71689 = cljs.core.seq.call(null,seq__71676_71680);
if(temp__4657__auto___71689){
var seq__71676_71690__$1 = temp__4657__auto___71689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71676_71690__$1)){
var c__25713__auto___71691 = cljs.core.chunk_first.call(null,seq__71676_71690__$1);
var G__71692 = cljs.core.chunk_rest.call(null,seq__71676_71690__$1);
var G__71693 = c__25713__auto___71691;
var G__71694 = cljs.core.count.call(null,c__25713__auto___71691);
var G__71695 = (0);
seq__71676_71680 = G__71692;
chunk__71677_71681 = G__71693;
count__71678_71682 = G__71694;
i__71679_71683 = G__71695;
continue;
} else {
var ns_71696 = cljs.core.first.call(null,seq__71676_71690__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71696);

var G__71697 = cljs.core.next.call(null,seq__71676_71690__$1);
var G__71698 = null;
var G__71699 = (0);
var G__71700 = (0);
seq__71676_71680 = G__71697;
chunk__71677_71681 = G__71698;
count__71678_71682 = G__71699;
i__71679_71683 = G__71700;
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
var G__71701__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__71701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71702__i = 0, G__71702__a = new Array(arguments.length -  0);
while (G__71702__i < G__71702__a.length) {G__71702__a[G__71702__i] = arguments[G__71702__i + 0]; ++G__71702__i;}
  args = new cljs.core.IndexedSeq(G__71702__a,0);
} 
return G__71701__delegate.call(this,args);};
G__71701.cljs$lang$maxFixedArity = 0;
G__71701.cljs$lang$applyTo = (function (arglist__71703){
var args = cljs.core.seq(arglist__71703);
return G__71701__delegate(args);
});
G__71701.cljs$core$IFn$_invoke$arity$variadic = G__71701__delegate;
return G__71701;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__71705 = cljs.core._EQ_;
var expr__71706 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__71705.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__71706))){
var path_parts = ((function (pred__71705,expr__71706){
return (function (p1__71704_SHARP_){
return clojure.string.split.call(null,p1__71704_SHARP_,/[\/\\]/);
});})(pred__71705,expr__71706))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__71705,expr__71706){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e71708){if((e71708 instanceof Error)){
var e = e71708;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e71708;

}
}})());
});
;})(path_parts,sep,root,pred__71705,expr__71706))
} else {
if(cljs.core.truth_(pred__71705.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__71706))){
return ((function (pred__71705,expr__71706){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__71705,expr__71706){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__71705,expr__71706))
);

return deferred.addErrback(((function (deferred,pred__71705,expr__71706){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__71705,expr__71706))
);
});
;})(pred__71705,expr__71706))
} else {
return ((function (pred__71705,expr__71706){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__71705,expr__71706))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__71709,callback){
var map__71712 = p__71709;
var map__71712__$1 = ((((!((map__71712 == null)))?((((map__71712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71712):map__71712);
var file_msg = map__71712__$1;
var request_url = cljs.core.get.call(null,map__71712__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__71712,map__71712__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__71712,map__71712__$1,file_msg,request_url))
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
return (function (state_71736){
var state_val_71737 = (state_71736[(1)]);
if((state_val_71737 === (7))){
var inst_71732 = (state_71736[(2)]);
var state_71736__$1 = state_71736;
var statearr_71738_71758 = state_71736__$1;
(statearr_71738_71758[(2)] = inst_71732);

(statearr_71738_71758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (1))){
var state_71736__$1 = state_71736;
var statearr_71739_71759 = state_71736__$1;
(statearr_71739_71759[(2)] = null);

(statearr_71739_71759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (4))){
var inst_71716 = (state_71736[(7)]);
var inst_71716__$1 = (state_71736[(2)]);
var state_71736__$1 = (function (){var statearr_71740 = state_71736;
(statearr_71740[(7)] = inst_71716__$1);

return statearr_71740;
})();
if(cljs.core.truth_(inst_71716__$1)){
var statearr_71741_71760 = state_71736__$1;
(statearr_71741_71760[(1)] = (5));

} else {
var statearr_71742_71761 = state_71736__$1;
(statearr_71742_71761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (6))){
var state_71736__$1 = state_71736;
var statearr_71743_71762 = state_71736__$1;
(statearr_71743_71762[(2)] = null);

(statearr_71743_71762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (3))){
var inst_71734 = (state_71736[(2)]);
var state_71736__$1 = state_71736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71736__$1,inst_71734);
} else {
if((state_val_71737 === (2))){
var state_71736__$1 = state_71736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71736__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_71737 === (11))){
var inst_71728 = (state_71736[(2)]);
var state_71736__$1 = (function (){var statearr_71744 = state_71736;
(statearr_71744[(8)] = inst_71728);

return statearr_71744;
})();
var statearr_71745_71763 = state_71736__$1;
(statearr_71745_71763[(2)] = null);

(statearr_71745_71763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (9))){
var inst_71722 = (state_71736[(9)]);
var inst_71720 = (state_71736[(10)]);
var inst_71724 = inst_71722.call(null,inst_71720);
var state_71736__$1 = state_71736;
var statearr_71746_71764 = state_71736__$1;
(statearr_71746_71764[(2)] = inst_71724);

(statearr_71746_71764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (5))){
var inst_71716 = (state_71736[(7)]);
var inst_71718 = figwheel.client.file_reloading.blocking_load.call(null,inst_71716);
var state_71736__$1 = state_71736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71736__$1,(8),inst_71718);
} else {
if((state_val_71737 === (10))){
var inst_71720 = (state_71736[(10)]);
var inst_71726 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_71720);
var state_71736__$1 = state_71736;
var statearr_71747_71765 = state_71736__$1;
(statearr_71747_71765[(2)] = inst_71726);

(statearr_71747_71765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71737 === (8))){
var inst_71722 = (state_71736[(9)]);
var inst_71716 = (state_71736[(7)]);
var inst_71720 = (state_71736[(2)]);
var inst_71721 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_71722__$1 = cljs.core.get.call(null,inst_71721,inst_71716);
var state_71736__$1 = (function (){var statearr_71748 = state_71736;
(statearr_71748[(9)] = inst_71722__$1);

(statearr_71748[(10)] = inst_71720);

return statearr_71748;
})();
if(cljs.core.truth_(inst_71722__$1)){
var statearr_71749_71766 = state_71736__$1;
(statearr_71749_71766[(1)] = (9));

} else {
var statearr_71750_71767 = state_71736__$1;
(statearr_71750_71767[(1)] = (10));

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
var statearr_71754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71754[(0)] = figwheel$client$file_reloading$state_machine__28887__auto__);

(statearr_71754[(1)] = (1));

return statearr_71754;
});
var figwheel$client$file_reloading$state_machine__28887__auto____1 = (function (state_71736){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_71736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e71755){if((e71755 instanceof Object)){
var ex__28890__auto__ = e71755;
var statearr_71756_71768 = state_71736;
(statearr_71756_71768[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71769 = state_71736;
state_71736 = G__71769;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28887__auto__ = function(state_71736){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28887__auto____1.call(this,state_71736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28887__auto____0;
figwheel$client$file_reloading$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28887__auto____1;
return figwheel$client$file_reloading$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_71757 = f__28999__auto__.call(null);
(statearr_71757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_71757;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__71770,callback){
var map__71773 = p__71770;
var map__71773__$1 = ((((!((map__71773 == null)))?((((map__71773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71773):map__71773);
var file_msg = map__71773__$1;
var namespace = cljs.core.get.call(null,map__71773__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__71773,map__71773__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__71773,map__71773__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__71775){
var map__71778 = p__71775;
var map__71778__$1 = ((((!((map__71778 == null)))?((((map__71778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71778):map__71778);
var file_msg = map__71778__$1;
var namespace = cljs.core.get.call(null,map__71778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__71780,callback){
var map__71783 = p__71780;
var map__71783__$1 = ((((!((map__71783 == null)))?((((map__71783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71783):map__71783);
var file_msg = map__71783__$1;
var request_url = cljs.core.get.call(null,map__71783__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__71783__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28998__auto___71887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___71887,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___71887,out){
return (function (state_71869){
var state_val_71870 = (state_71869[(1)]);
if((state_val_71870 === (1))){
var inst_71843 = cljs.core.seq.call(null,files);
var inst_71844 = cljs.core.first.call(null,inst_71843);
var inst_71845 = cljs.core.next.call(null,inst_71843);
var inst_71846 = files;
var state_71869__$1 = (function (){var statearr_71871 = state_71869;
(statearr_71871[(7)] = inst_71845);

(statearr_71871[(8)] = inst_71846);

(statearr_71871[(9)] = inst_71844);

return statearr_71871;
})();
var statearr_71872_71888 = state_71869__$1;
(statearr_71872_71888[(2)] = null);

(statearr_71872_71888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71870 === (2))){
var inst_71846 = (state_71869[(8)]);
var inst_71852 = (state_71869[(10)]);
var inst_71851 = cljs.core.seq.call(null,inst_71846);
var inst_71852__$1 = cljs.core.first.call(null,inst_71851);
var inst_71853 = cljs.core.next.call(null,inst_71851);
var inst_71854 = (inst_71852__$1 == null);
var inst_71855 = cljs.core.not.call(null,inst_71854);
var state_71869__$1 = (function (){var statearr_71873 = state_71869;
(statearr_71873[(11)] = inst_71853);

(statearr_71873[(10)] = inst_71852__$1);

return statearr_71873;
})();
if(inst_71855){
var statearr_71874_71889 = state_71869__$1;
(statearr_71874_71889[(1)] = (4));

} else {
var statearr_71875_71890 = state_71869__$1;
(statearr_71875_71890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71870 === (3))){
var inst_71867 = (state_71869[(2)]);
var state_71869__$1 = state_71869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71869__$1,inst_71867);
} else {
if((state_val_71870 === (4))){
var inst_71852 = (state_71869[(10)]);
var inst_71857 = figwheel.client.file_reloading.reload_js_file.call(null,inst_71852);
var state_71869__$1 = state_71869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71869__$1,(7),inst_71857);
} else {
if((state_val_71870 === (5))){
var inst_71863 = cljs.core.async.close_BANG_.call(null,out);
var state_71869__$1 = state_71869;
var statearr_71876_71891 = state_71869__$1;
(statearr_71876_71891[(2)] = inst_71863);

(statearr_71876_71891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71870 === (6))){
var inst_71865 = (state_71869[(2)]);
var state_71869__$1 = state_71869;
var statearr_71877_71892 = state_71869__$1;
(statearr_71877_71892[(2)] = inst_71865);

(statearr_71877_71892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71870 === (7))){
var inst_71853 = (state_71869[(11)]);
var inst_71859 = (state_71869[(2)]);
var inst_71860 = cljs.core.async.put_BANG_.call(null,out,inst_71859);
var inst_71846 = inst_71853;
var state_71869__$1 = (function (){var statearr_71878 = state_71869;
(statearr_71878[(12)] = inst_71860);

(statearr_71878[(8)] = inst_71846);

return statearr_71878;
})();
var statearr_71879_71893 = state_71869__$1;
(statearr_71879_71893[(2)] = null);

(statearr_71879_71893[(1)] = (2));


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
});})(c__28998__auto___71887,out))
;
return ((function (switch__28886__auto__,c__28998__auto___71887,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0 = (function (){
var statearr_71883 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71883[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__);

(statearr_71883[(1)] = (1));

return statearr_71883;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1 = (function (state_71869){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_71869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e71884){if((e71884 instanceof Object)){
var ex__28890__auto__ = e71884;
var statearr_71885_71894 = state_71869;
(statearr_71885_71894[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71895 = state_71869;
state_71869 = G__71895;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__ = function(state_71869){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1.call(this,state_71869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___71887,out))
})();
var state__29000__auto__ = (function (){var statearr_71886 = f__28999__auto__.call(null);
(statearr_71886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___71887);

return statearr_71886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___71887,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__71896,opts){
var map__71900 = p__71896;
var map__71900__$1 = ((((!((map__71900 == null)))?((((map__71900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71900):map__71900);
var eval_body = cljs.core.get.call(null,map__71900__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__71900__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e71902){var e = e71902;
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
return (function (p1__71903_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71903_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__71912){
var vec__71913 = p__71912;
var k = cljs.core.nth.call(null,vec__71913,(0),null);
var v = cljs.core.nth.call(null,vec__71913,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__71916){
var vec__71917 = p__71916;
var k = cljs.core.nth.call(null,vec__71917,(0),null);
var v = cljs.core.nth.call(null,vec__71917,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__71923,p__71924){
var map__72172 = p__71923;
var map__72172__$1 = ((((!((map__72172 == null)))?((((map__72172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72172):map__72172);
var opts = map__72172__$1;
var before_jsload = cljs.core.get.call(null,map__72172__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__72172__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__72172__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__72173 = p__71924;
var map__72173__$1 = ((((!((map__72173 == null)))?((((map__72173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72173):map__72173);
var msg = map__72173__$1;
var files = cljs.core.get.call(null,map__72173__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__72173__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__72173__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_72327){
var state_val_72328 = (state_72327[(1)]);
if((state_val_72328 === (7))){
var inst_72187 = (state_72327[(7)]);
var inst_72188 = (state_72327[(8)]);
var inst_72190 = (state_72327[(9)]);
var inst_72189 = (state_72327[(10)]);
var inst_72195 = cljs.core._nth.call(null,inst_72188,inst_72190);
var inst_72196 = figwheel.client.file_reloading.eval_body.call(null,inst_72195,opts);
var inst_72197 = (inst_72190 + (1));
var tmp72329 = inst_72187;
var tmp72330 = inst_72188;
var tmp72331 = inst_72189;
var inst_72187__$1 = tmp72329;
var inst_72188__$1 = tmp72330;
var inst_72189__$1 = tmp72331;
var inst_72190__$1 = inst_72197;
var state_72327__$1 = (function (){var statearr_72332 = state_72327;
(statearr_72332[(7)] = inst_72187__$1);

(statearr_72332[(8)] = inst_72188__$1);

(statearr_72332[(9)] = inst_72190__$1);

(statearr_72332[(11)] = inst_72196);

(statearr_72332[(10)] = inst_72189__$1);

return statearr_72332;
})();
var statearr_72333_72419 = state_72327__$1;
(statearr_72333_72419[(2)] = null);

(statearr_72333_72419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (20))){
var inst_72230 = (state_72327[(12)]);
var inst_72238 = figwheel.client.file_reloading.sort_files.call(null,inst_72230);
var state_72327__$1 = state_72327;
var statearr_72334_72420 = state_72327__$1;
(statearr_72334_72420[(2)] = inst_72238);

(statearr_72334_72420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (27))){
var state_72327__$1 = state_72327;
var statearr_72335_72421 = state_72327__$1;
(statearr_72335_72421[(2)] = null);

(statearr_72335_72421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (1))){
var inst_72179 = (state_72327[(13)]);
var inst_72176 = before_jsload.call(null,files);
var inst_72177 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_72178 = (function (){return ((function (inst_72179,inst_72176,inst_72177,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71920_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71920_SHARP_);
});
;})(inst_72179,inst_72176,inst_72177,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72179__$1 = cljs.core.filter.call(null,inst_72178,files);
var inst_72180 = cljs.core.not_empty.call(null,inst_72179__$1);
var state_72327__$1 = (function (){var statearr_72336 = state_72327;
(statearr_72336[(14)] = inst_72176);

(statearr_72336[(13)] = inst_72179__$1);

(statearr_72336[(15)] = inst_72177);

return statearr_72336;
})();
if(cljs.core.truth_(inst_72180)){
var statearr_72337_72422 = state_72327__$1;
(statearr_72337_72422[(1)] = (2));

} else {
var statearr_72338_72423 = state_72327__$1;
(statearr_72338_72423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (24))){
var state_72327__$1 = state_72327;
var statearr_72339_72424 = state_72327__$1;
(statearr_72339_72424[(2)] = null);

(statearr_72339_72424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (39))){
var inst_72280 = (state_72327[(16)]);
var state_72327__$1 = state_72327;
var statearr_72340_72425 = state_72327__$1;
(statearr_72340_72425[(2)] = inst_72280);

(statearr_72340_72425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (46))){
var inst_72322 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
var statearr_72341_72426 = state_72327__$1;
(statearr_72341_72426[(2)] = inst_72322);

(statearr_72341_72426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (4))){
var inst_72224 = (state_72327[(2)]);
var inst_72225 = cljs.core.List.EMPTY;
var inst_72226 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_72225);
var inst_72227 = (function (){return ((function (inst_72224,inst_72225,inst_72226,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71921_SHARP_){
var and__24887__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71921_SHARP_);
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71921_SHARP_));
} else {
return and__24887__auto__;
}
});
;})(inst_72224,inst_72225,inst_72226,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72228 = cljs.core.filter.call(null,inst_72227,files);
var inst_72229 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_72230 = cljs.core.concat.call(null,inst_72228,inst_72229);
var state_72327__$1 = (function (){var statearr_72342 = state_72327;
(statearr_72342[(17)] = inst_72226);

(statearr_72342[(18)] = inst_72224);

(statearr_72342[(12)] = inst_72230);

return statearr_72342;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_72343_72427 = state_72327__$1;
(statearr_72343_72427[(1)] = (16));

} else {
var statearr_72344_72428 = state_72327__$1;
(statearr_72344_72428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (15))){
var inst_72214 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
var statearr_72345_72429 = state_72327__$1;
(statearr_72345_72429[(2)] = inst_72214);

(statearr_72345_72429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (21))){
var inst_72240 = (state_72327[(19)]);
var inst_72240__$1 = (state_72327[(2)]);
var inst_72241 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_72240__$1);
var state_72327__$1 = (function (){var statearr_72346 = state_72327;
(statearr_72346[(19)] = inst_72240__$1);

return statearr_72346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72327__$1,(22),inst_72241);
} else {
if((state_val_72328 === (31))){
var inst_72325 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72327__$1,inst_72325);
} else {
if((state_val_72328 === (32))){
var inst_72280 = (state_72327[(16)]);
var inst_72285 = inst_72280.cljs$lang$protocol_mask$partition0$;
var inst_72286 = (inst_72285 & (64));
var inst_72287 = inst_72280.cljs$core$ISeq$;
var inst_72288 = (cljs.core.PROTOCOL_SENTINEL === inst_72287);
var inst_72289 = (inst_72286) || (inst_72288);
var state_72327__$1 = state_72327;
if(cljs.core.truth_(inst_72289)){
var statearr_72347_72430 = state_72327__$1;
(statearr_72347_72430[(1)] = (35));

} else {
var statearr_72348_72431 = state_72327__$1;
(statearr_72348_72431[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (40))){
var inst_72302 = (state_72327[(20)]);
var inst_72301 = (state_72327[(2)]);
var inst_72302__$1 = cljs.core.get.call(null,inst_72301,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_72303 = cljs.core.get.call(null,inst_72301,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_72304 = cljs.core.not_empty.call(null,inst_72302__$1);
var state_72327__$1 = (function (){var statearr_72349 = state_72327;
(statearr_72349[(20)] = inst_72302__$1);

(statearr_72349[(21)] = inst_72303);

return statearr_72349;
})();
if(cljs.core.truth_(inst_72304)){
var statearr_72350_72432 = state_72327__$1;
(statearr_72350_72432[(1)] = (41));

} else {
var statearr_72351_72433 = state_72327__$1;
(statearr_72351_72433[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (33))){
var state_72327__$1 = state_72327;
var statearr_72352_72434 = state_72327__$1;
(statearr_72352_72434[(2)] = false);

(statearr_72352_72434[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (13))){
var inst_72200 = (state_72327[(22)]);
var inst_72204 = cljs.core.chunk_first.call(null,inst_72200);
var inst_72205 = cljs.core.chunk_rest.call(null,inst_72200);
var inst_72206 = cljs.core.count.call(null,inst_72204);
var inst_72187 = inst_72205;
var inst_72188 = inst_72204;
var inst_72189 = inst_72206;
var inst_72190 = (0);
var state_72327__$1 = (function (){var statearr_72353 = state_72327;
(statearr_72353[(7)] = inst_72187);

(statearr_72353[(8)] = inst_72188);

(statearr_72353[(9)] = inst_72190);

(statearr_72353[(10)] = inst_72189);

return statearr_72353;
})();
var statearr_72354_72435 = state_72327__$1;
(statearr_72354_72435[(2)] = null);

(statearr_72354_72435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (22))){
var inst_72244 = (state_72327[(23)]);
var inst_72243 = (state_72327[(24)]);
var inst_72248 = (state_72327[(25)]);
var inst_72240 = (state_72327[(19)]);
var inst_72243__$1 = (state_72327[(2)]);
var inst_72244__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72243__$1);
var inst_72245 = (function (){var all_files = inst_72240;
var res_SINGLEQUOTE_ = inst_72243__$1;
var res = inst_72244__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_72244,inst_72243,inst_72248,inst_72240,inst_72243__$1,inst_72244__$1,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71922_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__71922_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_72244,inst_72243,inst_72248,inst_72240,inst_72243__$1,inst_72244__$1,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72246 = cljs.core.filter.call(null,inst_72245,inst_72243__$1);
var inst_72247 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_72248__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_72247);
var inst_72249 = cljs.core.not_empty.call(null,inst_72248__$1);
var state_72327__$1 = (function (){var statearr_72355 = state_72327;
(statearr_72355[(23)] = inst_72244__$1);

(statearr_72355[(24)] = inst_72243__$1);

(statearr_72355[(26)] = inst_72246);

(statearr_72355[(25)] = inst_72248__$1);

return statearr_72355;
})();
if(cljs.core.truth_(inst_72249)){
var statearr_72356_72436 = state_72327__$1;
(statearr_72356_72436[(1)] = (23));

} else {
var statearr_72357_72437 = state_72327__$1;
(statearr_72357_72437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (36))){
var state_72327__$1 = state_72327;
var statearr_72358_72438 = state_72327__$1;
(statearr_72358_72438[(2)] = false);

(statearr_72358_72438[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (41))){
var inst_72302 = (state_72327[(20)]);
var inst_72306 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_72307 = cljs.core.map.call(null,inst_72306,inst_72302);
var inst_72308 = cljs.core.pr_str.call(null,inst_72307);
var inst_72309 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_72308)].join('');
var inst_72310 = figwheel.client.utils.log.call(null,inst_72309);
var state_72327__$1 = state_72327;
var statearr_72359_72439 = state_72327__$1;
(statearr_72359_72439[(2)] = inst_72310);

(statearr_72359_72439[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (43))){
var inst_72303 = (state_72327[(21)]);
var inst_72313 = (state_72327[(2)]);
var inst_72314 = cljs.core.not_empty.call(null,inst_72303);
var state_72327__$1 = (function (){var statearr_72360 = state_72327;
(statearr_72360[(27)] = inst_72313);

return statearr_72360;
})();
if(cljs.core.truth_(inst_72314)){
var statearr_72361_72440 = state_72327__$1;
(statearr_72361_72440[(1)] = (44));

} else {
var statearr_72362_72441 = state_72327__$1;
(statearr_72362_72441[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (29))){
var inst_72244 = (state_72327[(23)]);
var inst_72243 = (state_72327[(24)]);
var inst_72246 = (state_72327[(26)]);
var inst_72248 = (state_72327[(25)]);
var inst_72280 = (state_72327[(16)]);
var inst_72240 = (state_72327[(19)]);
var inst_72276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_72279 = (function (){var all_files = inst_72240;
var res_SINGLEQUOTE_ = inst_72243;
var res = inst_72244;
var files_not_loaded = inst_72246;
var dependencies_that_loaded = inst_72248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72280,inst_72240,inst_72276,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72278){
var map__72363 = p__72278;
var map__72363__$1 = ((((!((map__72363 == null)))?((((map__72363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72363):map__72363);
var namespace = cljs.core.get.call(null,map__72363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72280,inst_72240,inst_72276,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72280__$1 = cljs.core.group_by.call(null,inst_72279,inst_72246);
var inst_72282 = (inst_72280__$1 == null);
var inst_72283 = cljs.core.not.call(null,inst_72282);
var state_72327__$1 = (function (){var statearr_72365 = state_72327;
(statearr_72365[(16)] = inst_72280__$1);

(statearr_72365[(28)] = inst_72276);

return statearr_72365;
})();
if(inst_72283){
var statearr_72366_72442 = state_72327__$1;
(statearr_72366_72442[(1)] = (32));

} else {
var statearr_72367_72443 = state_72327__$1;
(statearr_72367_72443[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (44))){
var inst_72303 = (state_72327[(21)]);
var inst_72316 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_72303);
var inst_72317 = cljs.core.pr_str.call(null,inst_72316);
var inst_72318 = [cljs.core.str("not required: "),cljs.core.str(inst_72317)].join('');
var inst_72319 = figwheel.client.utils.log.call(null,inst_72318);
var state_72327__$1 = state_72327;
var statearr_72368_72444 = state_72327__$1;
(statearr_72368_72444[(2)] = inst_72319);

(statearr_72368_72444[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (6))){
var inst_72221 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
var statearr_72369_72445 = state_72327__$1;
(statearr_72369_72445[(2)] = inst_72221);

(statearr_72369_72445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (28))){
var inst_72246 = (state_72327[(26)]);
var inst_72273 = (state_72327[(2)]);
var inst_72274 = cljs.core.not_empty.call(null,inst_72246);
var state_72327__$1 = (function (){var statearr_72370 = state_72327;
(statearr_72370[(29)] = inst_72273);

return statearr_72370;
})();
if(cljs.core.truth_(inst_72274)){
var statearr_72371_72446 = state_72327__$1;
(statearr_72371_72446[(1)] = (29));

} else {
var statearr_72372_72447 = state_72327__$1;
(statearr_72372_72447[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (25))){
var inst_72244 = (state_72327[(23)]);
var inst_72260 = (state_72327[(2)]);
var inst_72261 = cljs.core.not_empty.call(null,inst_72244);
var state_72327__$1 = (function (){var statearr_72373 = state_72327;
(statearr_72373[(30)] = inst_72260);

return statearr_72373;
})();
if(cljs.core.truth_(inst_72261)){
var statearr_72374_72448 = state_72327__$1;
(statearr_72374_72448[(1)] = (26));

} else {
var statearr_72375_72449 = state_72327__$1;
(statearr_72375_72449[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (34))){
var inst_72296 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
if(cljs.core.truth_(inst_72296)){
var statearr_72376_72450 = state_72327__$1;
(statearr_72376_72450[(1)] = (38));

} else {
var statearr_72377_72451 = state_72327__$1;
(statearr_72377_72451[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (17))){
var state_72327__$1 = state_72327;
var statearr_72378_72452 = state_72327__$1;
(statearr_72378_72452[(2)] = recompile_dependents);

(statearr_72378_72452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (3))){
var state_72327__$1 = state_72327;
var statearr_72379_72453 = state_72327__$1;
(statearr_72379_72453[(2)] = null);

(statearr_72379_72453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (12))){
var inst_72217 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
var statearr_72380_72454 = state_72327__$1;
(statearr_72380_72454[(2)] = inst_72217);

(statearr_72380_72454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (2))){
var inst_72179 = (state_72327[(13)]);
var inst_72186 = cljs.core.seq.call(null,inst_72179);
var inst_72187 = inst_72186;
var inst_72188 = null;
var inst_72189 = (0);
var inst_72190 = (0);
var state_72327__$1 = (function (){var statearr_72381 = state_72327;
(statearr_72381[(7)] = inst_72187);

(statearr_72381[(8)] = inst_72188);

(statearr_72381[(9)] = inst_72190);

(statearr_72381[(10)] = inst_72189);

return statearr_72381;
})();
var statearr_72382_72455 = state_72327__$1;
(statearr_72382_72455[(2)] = null);

(statearr_72382_72455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (23))){
var inst_72244 = (state_72327[(23)]);
var inst_72243 = (state_72327[(24)]);
var inst_72246 = (state_72327[(26)]);
var inst_72248 = (state_72327[(25)]);
var inst_72240 = (state_72327[(19)]);
var inst_72251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_72253 = (function (){var all_files = inst_72240;
var res_SINGLEQUOTE_ = inst_72243;
var res = inst_72244;
var files_not_loaded = inst_72246;
var dependencies_that_loaded = inst_72248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72240,inst_72251,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72252){
var map__72383 = p__72252;
var map__72383__$1 = ((((!((map__72383 == null)))?((((map__72383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72383):map__72383);
var request_url = cljs.core.get.call(null,map__72383__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72240,inst_72251,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72254 = cljs.core.reverse.call(null,inst_72248);
var inst_72255 = cljs.core.map.call(null,inst_72253,inst_72254);
var inst_72256 = cljs.core.pr_str.call(null,inst_72255);
var inst_72257 = figwheel.client.utils.log.call(null,inst_72256);
var state_72327__$1 = (function (){var statearr_72385 = state_72327;
(statearr_72385[(31)] = inst_72251);

return statearr_72385;
})();
var statearr_72386_72456 = state_72327__$1;
(statearr_72386_72456[(2)] = inst_72257);

(statearr_72386_72456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (35))){
var state_72327__$1 = state_72327;
var statearr_72387_72457 = state_72327__$1;
(statearr_72387_72457[(2)] = true);

(statearr_72387_72457[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (19))){
var inst_72230 = (state_72327[(12)]);
var inst_72236 = figwheel.client.file_reloading.expand_files.call(null,inst_72230);
var state_72327__$1 = state_72327;
var statearr_72388_72458 = state_72327__$1;
(statearr_72388_72458[(2)] = inst_72236);

(statearr_72388_72458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (11))){
var state_72327__$1 = state_72327;
var statearr_72389_72459 = state_72327__$1;
(statearr_72389_72459[(2)] = null);

(statearr_72389_72459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (9))){
var inst_72219 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
var statearr_72390_72460 = state_72327__$1;
(statearr_72390_72460[(2)] = inst_72219);

(statearr_72390_72460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (5))){
var inst_72190 = (state_72327[(9)]);
var inst_72189 = (state_72327[(10)]);
var inst_72192 = (inst_72190 < inst_72189);
var inst_72193 = inst_72192;
var state_72327__$1 = state_72327;
if(cljs.core.truth_(inst_72193)){
var statearr_72391_72461 = state_72327__$1;
(statearr_72391_72461[(1)] = (7));

} else {
var statearr_72392_72462 = state_72327__$1;
(statearr_72392_72462[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (14))){
var inst_72200 = (state_72327[(22)]);
var inst_72209 = cljs.core.first.call(null,inst_72200);
var inst_72210 = figwheel.client.file_reloading.eval_body.call(null,inst_72209,opts);
var inst_72211 = cljs.core.next.call(null,inst_72200);
var inst_72187 = inst_72211;
var inst_72188 = null;
var inst_72189 = (0);
var inst_72190 = (0);
var state_72327__$1 = (function (){var statearr_72393 = state_72327;
(statearr_72393[(7)] = inst_72187);

(statearr_72393[(8)] = inst_72188);

(statearr_72393[(9)] = inst_72190);

(statearr_72393[(10)] = inst_72189);

(statearr_72393[(32)] = inst_72210);

return statearr_72393;
})();
var statearr_72394_72463 = state_72327__$1;
(statearr_72394_72463[(2)] = null);

(statearr_72394_72463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (45))){
var state_72327__$1 = state_72327;
var statearr_72395_72464 = state_72327__$1;
(statearr_72395_72464[(2)] = null);

(statearr_72395_72464[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (26))){
var inst_72244 = (state_72327[(23)]);
var inst_72243 = (state_72327[(24)]);
var inst_72246 = (state_72327[(26)]);
var inst_72248 = (state_72327[(25)]);
var inst_72240 = (state_72327[(19)]);
var inst_72263 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_72265 = (function (){var all_files = inst_72240;
var res_SINGLEQUOTE_ = inst_72243;
var res = inst_72244;
var files_not_loaded = inst_72246;
var dependencies_that_loaded = inst_72248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72240,inst_72263,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__72264){
var map__72396 = p__72264;
var map__72396__$1 = ((((!((map__72396 == null)))?((((map__72396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72396):map__72396);
var namespace = cljs.core.get.call(null,map__72396__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__72396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72240,inst_72263,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72266 = cljs.core.map.call(null,inst_72265,inst_72244);
var inst_72267 = cljs.core.pr_str.call(null,inst_72266);
var inst_72268 = figwheel.client.utils.log.call(null,inst_72267);
var inst_72269 = (function (){var all_files = inst_72240;
var res_SINGLEQUOTE_ = inst_72243;
var res = inst_72244;
var files_not_loaded = inst_72246;
var dependencies_that_loaded = inst_72248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72240,inst_72263,inst_72265,inst_72266,inst_72267,inst_72268,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_72244,inst_72243,inst_72246,inst_72248,inst_72240,inst_72263,inst_72265,inst_72266,inst_72267,inst_72268,state_val_72328,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_72270 = setTimeout(inst_72269,(10));
var state_72327__$1 = (function (){var statearr_72398 = state_72327;
(statearr_72398[(33)] = inst_72263);

(statearr_72398[(34)] = inst_72268);

return statearr_72398;
})();
var statearr_72399_72465 = state_72327__$1;
(statearr_72399_72465[(2)] = inst_72270);

(statearr_72399_72465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (16))){
var state_72327__$1 = state_72327;
var statearr_72400_72466 = state_72327__$1;
(statearr_72400_72466[(2)] = reload_dependents);

(statearr_72400_72466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (38))){
var inst_72280 = (state_72327[(16)]);
var inst_72298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72280);
var state_72327__$1 = state_72327;
var statearr_72401_72467 = state_72327__$1;
(statearr_72401_72467[(2)] = inst_72298);

(statearr_72401_72467[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (30))){
var state_72327__$1 = state_72327;
var statearr_72402_72468 = state_72327__$1;
(statearr_72402_72468[(2)] = null);

(statearr_72402_72468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (10))){
var inst_72200 = (state_72327[(22)]);
var inst_72202 = cljs.core.chunked_seq_QMARK_.call(null,inst_72200);
var state_72327__$1 = state_72327;
if(inst_72202){
var statearr_72403_72469 = state_72327__$1;
(statearr_72403_72469[(1)] = (13));

} else {
var statearr_72404_72470 = state_72327__$1;
(statearr_72404_72470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (18))){
var inst_72234 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
if(cljs.core.truth_(inst_72234)){
var statearr_72405_72471 = state_72327__$1;
(statearr_72405_72471[(1)] = (19));

} else {
var statearr_72406_72472 = state_72327__$1;
(statearr_72406_72472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (42))){
var state_72327__$1 = state_72327;
var statearr_72407_72473 = state_72327__$1;
(statearr_72407_72473[(2)] = null);

(statearr_72407_72473[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (37))){
var inst_72293 = (state_72327[(2)]);
var state_72327__$1 = state_72327;
var statearr_72408_72474 = state_72327__$1;
(statearr_72408_72474[(2)] = inst_72293);

(statearr_72408_72474[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72328 === (8))){
var inst_72187 = (state_72327[(7)]);
var inst_72200 = (state_72327[(22)]);
var inst_72200__$1 = cljs.core.seq.call(null,inst_72187);
var state_72327__$1 = (function (){var statearr_72409 = state_72327;
(statearr_72409[(22)] = inst_72200__$1);

return statearr_72409;
})();
if(inst_72200__$1){
var statearr_72410_72475 = state_72327__$1;
(statearr_72410_72475[(1)] = (10));

} else {
var statearr_72411_72476 = state_72327__$1;
(statearr_72411_72476[(1)] = (11));

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
});})(c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28886__auto__,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0 = (function (){
var statearr_72415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72415[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__);

(statearr_72415[(1)] = (1));

return statearr_72415;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1 = (function (state_72327){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_72327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e72416){if((e72416 instanceof Object)){
var ex__28890__auto__ = e72416;
var statearr_72417_72477 = state_72327;
(statearr_72417_72477[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72478 = state_72327;
state_72327 = G__72478;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__ = function(state_72327){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1.call(this,state_72327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29000__auto__ = (function (){var statearr_72418 = f__28999__auto__.call(null);
(statearr_72418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_72418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,map__72172,map__72172__$1,opts,before_jsload,on_jsload,reload_dependents,map__72173,map__72173__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28998__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__72481,link){
var map__72484 = p__72481;
var map__72484__$1 = ((((!((map__72484 == null)))?((((map__72484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72484):map__72484);
var file = cljs.core.get.call(null,map__72484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__72484,map__72484__$1,file){
return (function (p1__72479_SHARP_,p2__72480_SHARP_){
if(cljs.core._EQ_.call(null,p1__72479_SHARP_,p2__72480_SHARP_)){
return p1__72479_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__72484,map__72484__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__72490){
var map__72491 = p__72490;
var map__72491__$1 = ((((!((map__72491 == null)))?((((map__72491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72491):map__72491);
var match_length = cljs.core.get.call(null,map__72491__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__72491__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__72486_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__72486_SHARP_);
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
var args72493 = [];
var len__26007__auto___72496 = arguments.length;
var i__26008__auto___72497 = (0);
while(true){
if((i__26008__auto___72497 < len__26007__auto___72496)){
args72493.push((arguments[i__26008__auto___72497]));

var G__72498 = (i__26008__auto___72497 + (1));
i__26008__auto___72497 = G__72498;
continue;
} else {
}
break;
}

var G__72495 = args72493.length;
switch (G__72495) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72493.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__72500_SHARP_,p2__72501_SHARP_){
return cljs.core.assoc.call(null,p1__72500_SHARP_,cljs.core.get.call(null,p2__72501_SHARP_,key),p2__72501_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__72502){
var map__72505 = p__72502;
var map__72505__$1 = ((((!((map__72505 == null)))?((((map__72505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72505):map__72505);
var f_data = map__72505__$1;
var file = cljs.core.get.call(null,map__72505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__72507,p__72508){
var map__72517 = p__72507;
var map__72517__$1 = ((((!((map__72517 == null)))?((((map__72517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72517):map__72517);
var opts = map__72517__$1;
var on_cssload = cljs.core.get.call(null,map__72517__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__72518 = p__72508;
var map__72518__$1 = ((((!((map__72518 == null)))?((((map__72518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72518):map__72518);
var files_msg = map__72518__$1;
var files = cljs.core.get.call(null,map__72518__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__72521_72525 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__72522_72526 = null;
var count__72523_72527 = (0);
var i__72524_72528 = (0);
while(true){
if((i__72524_72528 < count__72523_72527)){
var f_72529 = cljs.core._nth.call(null,chunk__72522_72526,i__72524_72528);
figwheel.client.file_reloading.reload_css_file.call(null,f_72529);

var G__72530 = seq__72521_72525;
var G__72531 = chunk__72522_72526;
var G__72532 = count__72523_72527;
var G__72533 = (i__72524_72528 + (1));
seq__72521_72525 = G__72530;
chunk__72522_72526 = G__72531;
count__72523_72527 = G__72532;
i__72524_72528 = G__72533;
continue;
} else {
var temp__4657__auto___72534 = cljs.core.seq.call(null,seq__72521_72525);
if(temp__4657__auto___72534){
var seq__72521_72535__$1 = temp__4657__auto___72534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72521_72535__$1)){
var c__25713__auto___72536 = cljs.core.chunk_first.call(null,seq__72521_72535__$1);
var G__72537 = cljs.core.chunk_rest.call(null,seq__72521_72535__$1);
var G__72538 = c__25713__auto___72536;
var G__72539 = cljs.core.count.call(null,c__25713__auto___72536);
var G__72540 = (0);
seq__72521_72525 = G__72537;
chunk__72522_72526 = G__72538;
count__72523_72527 = G__72539;
i__72524_72528 = G__72540;
continue;
} else {
var f_72541 = cljs.core.first.call(null,seq__72521_72535__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_72541);

var G__72542 = cljs.core.next.call(null,seq__72521_72535__$1);
var G__72543 = null;
var G__72544 = (0);
var G__72545 = (0);
seq__72521_72525 = G__72542;
chunk__72522_72526 = G__72543;
count__72523_72527 = G__72544;
i__72524_72528 = G__72545;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__72517,map__72517__$1,opts,on_cssload,map__72518,map__72518__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__72517,map__72517__$1,opts,on_cssload,map__72518,map__72518__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479784478337