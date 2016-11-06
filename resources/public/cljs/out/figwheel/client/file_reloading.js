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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__73754_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__73754_SHARP_));
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
var seq__73759 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__73760 = null;
var count__73761 = (0);
var i__73762 = (0);
while(true){
if((i__73762 < count__73761)){
var n = cljs.core._nth.call(null,chunk__73760,i__73762);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__73763 = seq__73759;
var G__73764 = chunk__73760;
var G__73765 = count__73761;
var G__73766 = (i__73762 + (1));
seq__73759 = G__73763;
chunk__73760 = G__73764;
count__73761 = G__73765;
i__73762 = G__73766;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__73759);
if(temp__4657__auto__){
var seq__73759__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73759__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__73759__$1);
var G__73767 = cljs.core.chunk_rest.call(null,seq__73759__$1);
var G__73768 = c__25562__auto__;
var G__73769 = cljs.core.count.call(null,c__25562__auto__);
var G__73770 = (0);
seq__73759 = G__73767;
chunk__73760 = G__73768;
count__73761 = G__73769;
i__73762 = G__73770;
continue;
} else {
var n = cljs.core.first.call(null,seq__73759__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__73771 = cljs.core.next.call(null,seq__73759__$1);
var G__73772 = null;
var G__73773 = (0);
var G__73774 = (0);
seq__73759 = G__73771;
chunk__73760 = G__73772;
count__73761 = G__73773;
i__73762 = G__73774;
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

var seq__73825_73836 = cljs.core.seq.call(null,deps);
var chunk__73826_73837 = null;
var count__73827_73838 = (0);
var i__73828_73839 = (0);
while(true){
if((i__73828_73839 < count__73827_73838)){
var dep_73840 = cljs.core._nth.call(null,chunk__73826_73837,i__73828_73839);
topo_sort_helper_STAR_.call(null,dep_73840,(depth + (1)),state);

var G__73841 = seq__73825_73836;
var G__73842 = chunk__73826_73837;
var G__73843 = count__73827_73838;
var G__73844 = (i__73828_73839 + (1));
seq__73825_73836 = G__73841;
chunk__73826_73837 = G__73842;
count__73827_73838 = G__73843;
i__73828_73839 = G__73844;
continue;
} else {
var temp__4657__auto___73845 = cljs.core.seq.call(null,seq__73825_73836);
if(temp__4657__auto___73845){
var seq__73825_73846__$1 = temp__4657__auto___73845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73825_73846__$1)){
var c__25562__auto___73847 = cljs.core.chunk_first.call(null,seq__73825_73846__$1);
var G__73848 = cljs.core.chunk_rest.call(null,seq__73825_73846__$1);
var G__73849 = c__25562__auto___73847;
var G__73850 = cljs.core.count.call(null,c__25562__auto___73847);
var G__73851 = (0);
seq__73825_73836 = G__73848;
chunk__73826_73837 = G__73849;
count__73827_73838 = G__73850;
i__73828_73839 = G__73851;
continue;
} else {
var dep_73852 = cljs.core.first.call(null,seq__73825_73846__$1);
topo_sort_helper_STAR_.call(null,dep_73852,(depth + (1)),state);

var G__73853 = cljs.core.next.call(null,seq__73825_73846__$1);
var G__73854 = null;
var G__73855 = (0);
var G__73856 = (0);
seq__73825_73836 = G__73853;
chunk__73826_73837 = G__73854;
count__73827_73838 = G__73855;
i__73828_73839 = G__73856;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__73829){
var vec__73833 = p__73829;
var seq__73834 = cljs.core.seq.call(null,vec__73833);
var first__73835 = cljs.core.first.call(null,seq__73834);
var seq__73834__$1 = cljs.core.next.call(null,seq__73834);
var x = first__73835;
var xs = seq__73834__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__73833,seq__73834,first__73835,seq__73834__$1,x,xs,get_deps__$1){
return (function (p1__73775_SHARP_){
return clojure.set.difference.call(null,p1__73775_SHARP_,x);
});})(vec__73833,seq__73834,first__73835,seq__73834__$1,x,xs,get_deps__$1))
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
var seq__73869 = cljs.core.seq.call(null,provides);
var chunk__73870 = null;
var count__73871 = (0);
var i__73872 = (0);
while(true){
if((i__73872 < count__73871)){
var prov = cljs.core._nth.call(null,chunk__73870,i__73872);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__73873_73881 = cljs.core.seq.call(null,requires);
var chunk__73874_73882 = null;
var count__73875_73883 = (0);
var i__73876_73884 = (0);
while(true){
if((i__73876_73884 < count__73875_73883)){
var req_73885 = cljs.core._nth.call(null,chunk__73874_73882,i__73876_73884);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73885,prov);

var G__73886 = seq__73873_73881;
var G__73887 = chunk__73874_73882;
var G__73888 = count__73875_73883;
var G__73889 = (i__73876_73884 + (1));
seq__73873_73881 = G__73886;
chunk__73874_73882 = G__73887;
count__73875_73883 = G__73888;
i__73876_73884 = G__73889;
continue;
} else {
var temp__4657__auto___73890 = cljs.core.seq.call(null,seq__73873_73881);
if(temp__4657__auto___73890){
var seq__73873_73891__$1 = temp__4657__auto___73890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73873_73891__$1)){
var c__25562__auto___73892 = cljs.core.chunk_first.call(null,seq__73873_73891__$1);
var G__73893 = cljs.core.chunk_rest.call(null,seq__73873_73891__$1);
var G__73894 = c__25562__auto___73892;
var G__73895 = cljs.core.count.call(null,c__25562__auto___73892);
var G__73896 = (0);
seq__73873_73881 = G__73893;
chunk__73874_73882 = G__73894;
count__73875_73883 = G__73895;
i__73876_73884 = G__73896;
continue;
} else {
var req_73897 = cljs.core.first.call(null,seq__73873_73891__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73897,prov);

var G__73898 = cljs.core.next.call(null,seq__73873_73891__$1);
var G__73899 = null;
var G__73900 = (0);
var G__73901 = (0);
seq__73873_73881 = G__73898;
chunk__73874_73882 = G__73899;
count__73875_73883 = G__73900;
i__73876_73884 = G__73901;
continue;
}
} else {
}
}
break;
}

var G__73902 = seq__73869;
var G__73903 = chunk__73870;
var G__73904 = count__73871;
var G__73905 = (i__73872 + (1));
seq__73869 = G__73902;
chunk__73870 = G__73903;
count__73871 = G__73904;
i__73872 = G__73905;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__73869);
if(temp__4657__auto__){
var seq__73869__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73869__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__73869__$1);
var G__73906 = cljs.core.chunk_rest.call(null,seq__73869__$1);
var G__73907 = c__25562__auto__;
var G__73908 = cljs.core.count.call(null,c__25562__auto__);
var G__73909 = (0);
seq__73869 = G__73906;
chunk__73870 = G__73907;
count__73871 = G__73908;
i__73872 = G__73909;
continue;
} else {
var prov = cljs.core.first.call(null,seq__73869__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__73877_73910 = cljs.core.seq.call(null,requires);
var chunk__73878_73911 = null;
var count__73879_73912 = (0);
var i__73880_73913 = (0);
while(true){
if((i__73880_73913 < count__73879_73912)){
var req_73914 = cljs.core._nth.call(null,chunk__73878_73911,i__73880_73913);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73914,prov);

var G__73915 = seq__73877_73910;
var G__73916 = chunk__73878_73911;
var G__73917 = count__73879_73912;
var G__73918 = (i__73880_73913 + (1));
seq__73877_73910 = G__73915;
chunk__73878_73911 = G__73916;
count__73879_73912 = G__73917;
i__73880_73913 = G__73918;
continue;
} else {
var temp__4657__auto___73919__$1 = cljs.core.seq.call(null,seq__73877_73910);
if(temp__4657__auto___73919__$1){
var seq__73877_73920__$1 = temp__4657__auto___73919__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73877_73920__$1)){
var c__25562__auto___73921 = cljs.core.chunk_first.call(null,seq__73877_73920__$1);
var G__73922 = cljs.core.chunk_rest.call(null,seq__73877_73920__$1);
var G__73923 = c__25562__auto___73921;
var G__73924 = cljs.core.count.call(null,c__25562__auto___73921);
var G__73925 = (0);
seq__73877_73910 = G__73922;
chunk__73878_73911 = G__73923;
count__73879_73912 = G__73924;
i__73880_73913 = G__73925;
continue;
} else {
var req_73926 = cljs.core.first.call(null,seq__73877_73920__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73926,prov);

var G__73927 = cljs.core.next.call(null,seq__73877_73920__$1);
var G__73928 = null;
var G__73929 = (0);
var G__73930 = (0);
seq__73877_73910 = G__73927;
chunk__73878_73911 = G__73928;
count__73879_73912 = G__73929;
i__73880_73913 = G__73930;
continue;
}
} else {
}
}
break;
}

var G__73931 = cljs.core.next.call(null,seq__73869__$1);
var G__73932 = null;
var G__73933 = (0);
var G__73934 = (0);
seq__73869 = G__73931;
chunk__73870 = G__73932;
count__73871 = G__73933;
i__73872 = G__73934;
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
var seq__73939_73943 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__73940_73944 = null;
var count__73941_73945 = (0);
var i__73942_73946 = (0);
while(true){
if((i__73942_73946 < count__73941_73945)){
var ns_73947 = cljs.core._nth.call(null,chunk__73940_73944,i__73942_73946);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_73947);

var G__73948 = seq__73939_73943;
var G__73949 = chunk__73940_73944;
var G__73950 = count__73941_73945;
var G__73951 = (i__73942_73946 + (1));
seq__73939_73943 = G__73948;
chunk__73940_73944 = G__73949;
count__73941_73945 = G__73950;
i__73942_73946 = G__73951;
continue;
} else {
var temp__4657__auto___73952 = cljs.core.seq.call(null,seq__73939_73943);
if(temp__4657__auto___73952){
var seq__73939_73953__$1 = temp__4657__auto___73952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73939_73953__$1)){
var c__25562__auto___73954 = cljs.core.chunk_first.call(null,seq__73939_73953__$1);
var G__73955 = cljs.core.chunk_rest.call(null,seq__73939_73953__$1);
var G__73956 = c__25562__auto___73954;
var G__73957 = cljs.core.count.call(null,c__25562__auto___73954);
var G__73958 = (0);
seq__73939_73943 = G__73955;
chunk__73940_73944 = G__73956;
count__73941_73945 = G__73957;
i__73942_73946 = G__73958;
continue;
} else {
var ns_73959 = cljs.core.first.call(null,seq__73939_73953__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_73959);

var G__73960 = cljs.core.next.call(null,seq__73939_73953__$1);
var G__73961 = null;
var G__73962 = (0);
var G__73963 = (0);
seq__73939_73943 = G__73960;
chunk__73940_73944 = G__73961;
count__73941_73945 = G__73962;
i__73942_73946 = G__73963;
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
var G__73964__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__73964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73965__i = 0, G__73965__a = new Array(arguments.length -  0);
while (G__73965__i < G__73965__a.length) {G__73965__a[G__73965__i] = arguments[G__73965__i + 0]; ++G__73965__i;}
  args = new cljs.core.IndexedSeq(G__73965__a,0);
} 
return G__73964__delegate.call(this,args);};
G__73964.cljs$lang$maxFixedArity = 0;
G__73964.cljs$lang$applyTo = (function (arglist__73966){
var args = cljs.core.seq(arglist__73966);
return G__73964__delegate(args);
});
G__73964.cljs$core$IFn$_invoke$arity$variadic = G__73964__delegate;
return G__73964;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__73968 = cljs.core._EQ_;
var expr__73969 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__73968.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__73969))){
var path_parts = ((function (pred__73968,expr__73969){
return (function (p1__73967_SHARP_){
return clojure.string.split.call(null,p1__73967_SHARP_,/[\/\\]/);
});})(pred__73968,expr__73969))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__73968,expr__73969){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e73971){if((e73971 instanceof Error)){
var e = e73971;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e73971;

}
}})());
});
;})(path_parts,sep,root,pred__73968,expr__73969))
} else {
if(cljs.core.truth_(pred__73968.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__73969))){
return ((function (pred__73968,expr__73969){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__73968,expr__73969){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__73968,expr__73969))
);

return deferred.addErrback(((function (deferred,pred__73968,expr__73969){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__73968,expr__73969))
);
});
;})(pred__73968,expr__73969))
} else {
return ((function (pred__73968,expr__73969){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__73968,expr__73969))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__73972,callback){
var map__73975 = p__73972;
var map__73975__$1 = ((((!((map__73975 == null)))?((((map__73975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73975):map__73975);
var file_msg = map__73975__$1;
var request_url = cljs.core.get.call(null,map__73975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__73975,map__73975__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__73975,map__73975__$1,file_msg,request_url))
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
return (function (state_73999){
var state_val_74000 = (state_73999[(1)]);
if((state_val_74000 === (7))){
var inst_73995 = (state_73999[(2)]);
var state_73999__$1 = state_73999;
var statearr_74001_74021 = state_73999__$1;
(statearr_74001_74021[(2)] = inst_73995);

(statearr_74001_74021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (1))){
var state_73999__$1 = state_73999;
var statearr_74002_74022 = state_73999__$1;
(statearr_74002_74022[(2)] = null);

(statearr_74002_74022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (4))){
var inst_73979 = (state_73999[(7)]);
var inst_73979__$1 = (state_73999[(2)]);
var state_73999__$1 = (function (){var statearr_74003 = state_73999;
(statearr_74003[(7)] = inst_73979__$1);

return statearr_74003;
})();
if(cljs.core.truth_(inst_73979__$1)){
var statearr_74004_74023 = state_73999__$1;
(statearr_74004_74023[(1)] = (5));

} else {
var statearr_74005_74024 = state_73999__$1;
(statearr_74005_74024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (6))){
var state_73999__$1 = state_73999;
var statearr_74006_74025 = state_73999__$1;
(statearr_74006_74025[(2)] = null);

(statearr_74006_74025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (3))){
var inst_73997 = (state_73999[(2)]);
var state_73999__$1 = state_73999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73999__$1,inst_73997);
} else {
if((state_val_74000 === (2))){
var state_73999__$1 = state_73999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73999__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_74000 === (11))){
var inst_73991 = (state_73999[(2)]);
var state_73999__$1 = (function (){var statearr_74007 = state_73999;
(statearr_74007[(8)] = inst_73991);

return statearr_74007;
})();
var statearr_74008_74026 = state_73999__$1;
(statearr_74008_74026[(2)] = null);

(statearr_74008_74026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (9))){
var inst_73985 = (state_73999[(9)]);
var inst_73983 = (state_73999[(10)]);
var inst_73987 = inst_73985.call(null,inst_73983);
var state_73999__$1 = state_73999;
var statearr_74009_74027 = state_73999__$1;
(statearr_74009_74027[(2)] = inst_73987);

(statearr_74009_74027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (5))){
var inst_73979 = (state_73999[(7)]);
var inst_73981 = figwheel.client.file_reloading.blocking_load.call(null,inst_73979);
var state_73999__$1 = state_73999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73999__$1,(8),inst_73981);
} else {
if((state_val_74000 === (10))){
var inst_73983 = (state_73999[(10)]);
var inst_73989 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_73983);
var state_73999__$1 = state_73999;
var statearr_74010_74028 = state_73999__$1;
(statearr_74010_74028[(2)] = inst_73989);

(statearr_74010_74028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74000 === (8))){
var inst_73985 = (state_73999[(9)]);
var inst_73979 = (state_73999[(7)]);
var inst_73983 = (state_73999[(2)]);
var inst_73984 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_73985__$1 = cljs.core.get.call(null,inst_73984,inst_73979);
var state_73999__$1 = (function (){var statearr_74011 = state_73999;
(statearr_74011[(9)] = inst_73985__$1);

(statearr_74011[(10)] = inst_73983);

return statearr_74011;
})();
if(cljs.core.truth_(inst_73985__$1)){
var statearr_74012_74029 = state_73999__$1;
(statearr_74012_74029[(1)] = (9));

} else {
var statearr_74013_74030 = state_73999__$1;
(statearr_74013_74030[(1)] = (10));

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
var statearr_74017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74017[(0)] = figwheel$client$file_reloading$state_machine__27866__auto__);

(statearr_74017[(1)] = (1));

return statearr_74017;
});
var figwheel$client$file_reloading$state_machine__27866__auto____1 = (function (state_73999){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e74018){if((e74018 instanceof Object)){
var ex__27869__auto__ = e74018;
var statearr_74019_74031 = state_73999;
(statearr_74019_74031[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74032 = state_73999;
state_73999 = G__74032;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27866__auto__ = function(state_73999){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27866__auto____1.call(this,state_73999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27866__auto____0;
figwheel$client$file_reloading$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27866__auto____1;
return figwheel$client$file_reloading$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_74020 = f__27931__auto__.call(null);
(statearr_74020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_74020;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__74033,callback){
var map__74036 = p__74033;
var map__74036__$1 = ((((!((map__74036 == null)))?((((map__74036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74036):map__74036);
var file_msg = map__74036__$1;
var namespace = cljs.core.get.call(null,map__74036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__74036,map__74036__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__74036,map__74036__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__74038){
var map__74041 = p__74038;
var map__74041__$1 = ((((!((map__74041 == null)))?((((map__74041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74041):map__74041);
var file_msg = map__74041__$1;
var namespace = cljs.core.get.call(null,map__74041__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__74043,callback){
var map__74046 = p__74043;
var map__74046__$1 = ((((!((map__74046 == null)))?((((map__74046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74046):map__74046);
var file_msg = map__74046__$1;
var request_url = cljs.core.get.call(null,map__74046__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__74046__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27930__auto___74150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___74150,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___74150,out){
return (function (state_74132){
var state_val_74133 = (state_74132[(1)]);
if((state_val_74133 === (1))){
var inst_74106 = cljs.core.seq.call(null,files);
var inst_74107 = cljs.core.first.call(null,inst_74106);
var inst_74108 = cljs.core.next.call(null,inst_74106);
var inst_74109 = files;
var state_74132__$1 = (function (){var statearr_74134 = state_74132;
(statearr_74134[(7)] = inst_74108);

(statearr_74134[(8)] = inst_74107);

(statearr_74134[(9)] = inst_74109);

return statearr_74134;
})();
var statearr_74135_74151 = state_74132__$1;
(statearr_74135_74151[(2)] = null);

(statearr_74135_74151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74133 === (2))){
var inst_74109 = (state_74132[(9)]);
var inst_74115 = (state_74132[(10)]);
var inst_74114 = cljs.core.seq.call(null,inst_74109);
var inst_74115__$1 = cljs.core.first.call(null,inst_74114);
var inst_74116 = cljs.core.next.call(null,inst_74114);
var inst_74117 = (inst_74115__$1 == null);
var inst_74118 = cljs.core.not.call(null,inst_74117);
var state_74132__$1 = (function (){var statearr_74136 = state_74132;
(statearr_74136[(11)] = inst_74116);

(statearr_74136[(10)] = inst_74115__$1);

return statearr_74136;
})();
if(inst_74118){
var statearr_74137_74152 = state_74132__$1;
(statearr_74137_74152[(1)] = (4));

} else {
var statearr_74138_74153 = state_74132__$1;
(statearr_74138_74153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74133 === (3))){
var inst_74130 = (state_74132[(2)]);
var state_74132__$1 = state_74132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74132__$1,inst_74130);
} else {
if((state_val_74133 === (4))){
var inst_74115 = (state_74132[(10)]);
var inst_74120 = figwheel.client.file_reloading.reload_js_file.call(null,inst_74115);
var state_74132__$1 = state_74132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74132__$1,(7),inst_74120);
} else {
if((state_val_74133 === (5))){
var inst_74126 = cljs.core.async.close_BANG_.call(null,out);
var state_74132__$1 = state_74132;
var statearr_74139_74154 = state_74132__$1;
(statearr_74139_74154[(2)] = inst_74126);

(statearr_74139_74154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74133 === (6))){
var inst_74128 = (state_74132[(2)]);
var state_74132__$1 = state_74132;
var statearr_74140_74155 = state_74132__$1;
(statearr_74140_74155[(2)] = inst_74128);

(statearr_74140_74155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74133 === (7))){
var inst_74116 = (state_74132[(11)]);
var inst_74122 = (state_74132[(2)]);
var inst_74123 = cljs.core.async.put_BANG_.call(null,out,inst_74122);
var inst_74109 = inst_74116;
var state_74132__$1 = (function (){var statearr_74141 = state_74132;
(statearr_74141[(12)] = inst_74123);

(statearr_74141[(9)] = inst_74109);

return statearr_74141;
})();
var statearr_74142_74156 = state_74132__$1;
(statearr_74142_74156[(2)] = null);

(statearr_74142_74156[(1)] = (2));


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
});})(c__27930__auto___74150,out))
;
return ((function (switch__27865__auto__,c__27930__auto___74150,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____0 = (function (){
var statearr_74146 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74146[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__);

(statearr_74146[(1)] = (1));

return statearr_74146;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____1 = (function (state_74132){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_74132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e74147){if((e74147 instanceof Object)){
var ex__27869__auto__ = e74147;
var statearr_74148_74157 = state_74132;
(statearr_74148_74157[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74158 = state_74132;
state_74132 = G__74158;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__ = function(state_74132){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____1.call(this,state_74132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___74150,out))
})();
var state__27932__auto__ = (function (){var statearr_74149 = f__27931__auto__.call(null);
(statearr_74149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___74150);

return statearr_74149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___74150,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__74159,opts){
var map__74163 = p__74159;
var map__74163__$1 = ((((!((map__74163 == null)))?((((map__74163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74163):map__74163);
var eval_body__$1 = cljs.core.get.call(null,map__74163__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__74163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e74165){var e = e74165;
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
return (function (p1__74166_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__74166_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__74175){
var vec__74176 = p__74175;
var k = cljs.core.nth.call(null,vec__74176,(0),null);
var v = cljs.core.nth.call(null,vec__74176,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__74179){
var vec__74180 = p__74179;
var k = cljs.core.nth.call(null,vec__74180,(0),null);
var v = cljs.core.nth.call(null,vec__74180,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__74186,p__74187){
var map__74434 = p__74186;
var map__74434__$1 = ((((!((map__74434 == null)))?((((map__74434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74434):map__74434);
var opts = map__74434__$1;
var before_jsload = cljs.core.get.call(null,map__74434__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__74434__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__74434__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__74435 = p__74187;
var map__74435__$1 = ((((!((map__74435 == null)))?((((map__74435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74435):map__74435);
var msg = map__74435__$1;
var files = cljs.core.get.call(null,map__74435__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__74435__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__74435__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_74588){
var state_val_74589 = (state_74588[(1)]);
if((state_val_74589 === (7))){
var inst_74451 = (state_74588[(7)]);
var inst_74449 = (state_74588[(8)]);
var inst_74452 = (state_74588[(9)]);
var inst_74450 = (state_74588[(10)]);
var inst_74457 = cljs.core._nth.call(null,inst_74450,inst_74452);
var inst_74458 = figwheel.client.file_reloading.eval_body.call(null,inst_74457,opts);
var inst_74459 = (inst_74452 + (1));
var tmp74590 = inst_74451;
var tmp74591 = inst_74449;
var tmp74592 = inst_74450;
var inst_74449__$1 = tmp74591;
var inst_74450__$1 = tmp74592;
var inst_74451__$1 = tmp74590;
var inst_74452__$1 = inst_74459;
var state_74588__$1 = (function (){var statearr_74593 = state_74588;
(statearr_74593[(11)] = inst_74458);

(statearr_74593[(7)] = inst_74451__$1);

(statearr_74593[(8)] = inst_74449__$1);

(statearr_74593[(9)] = inst_74452__$1);

(statearr_74593[(10)] = inst_74450__$1);

return statearr_74593;
})();
var statearr_74594_74680 = state_74588__$1;
(statearr_74594_74680[(2)] = null);

(statearr_74594_74680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (20))){
var inst_74492 = (state_74588[(12)]);
var inst_74500 = figwheel.client.file_reloading.sort_files.call(null,inst_74492);
var state_74588__$1 = state_74588;
var statearr_74595_74681 = state_74588__$1;
(statearr_74595_74681[(2)] = inst_74500);

(statearr_74595_74681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (27))){
var state_74588__$1 = state_74588;
var statearr_74596_74682 = state_74588__$1;
(statearr_74596_74682[(2)] = null);

(statearr_74596_74682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (1))){
var inst_74441 = (state_74588[(13)]);
var inst_74438 = before_jsload.call(null,files);
var inst_74439 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_74440 = (function (){return ((function (inst_74441,inst_74438,inst_74439,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__74183_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__74183_SHARP_);
});
;})(inst_74441,inst_74438,inst_74439,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74441__$1 = cljs.core.filter.call(null,inst_74440,files);
var inst_74442 = cljs.core.not_empty.call(null,inst_74441__$1);
var state_74588__$1 = (function (){var statearr_74597 = state_74588;
(statearr_74597[(14)] = inst_74438);

(statearr_74597[(13)] = inst_74441__$1);

(statearr_74597[(15)] = inst_74439);

return statearr_74597;
})();
if(cljs.core.truth_(inst_74442)){
var statearr_74598_74683 = state_74588__$1;
(statearr_74598_74683[(1)] = (2));

} else {
var statearr_74599_74684 = state_74588__$1;
(statearr_74599_74684[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (24))){
var state_74588__$1 = state_74588;
var statearr_74600_74685 = state_74588__$1;
(statearr_74600_74685[(2)] = null);

(statearr_74600_74685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (39))){
var inst_74542 = (state_74588[(16)]);
var state_74588__$1 = state_74588;
var statearr_74601_74686 = state_74588__$1;
(statearr_74601_74686[(2)] = inst_74542);

(statearr_74601_74686[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (46))){
var inst_74583 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
var statearr_74602_74687 = state_74588__$1;
(statearr_74602_74687[(2)] = inst_74583);

(statearr_74602_74687[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (4))){
var inst_74486 = (state_74588[(2)]);
var inst_74487 = cljs.core.List.EMPTY;
var inst_74488 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_74487);
var inst_74489 = (function (){return ((function (inst_74486,inst_74487,inst_74488,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__74184_SHARP_){
var and__24739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__74184_SHARP_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__74184_SHARP_));
} else {
return and__24739__auto__;
}
});
;})(inst_74486,inst_74487,inst_74488,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74490 = cljs.core.filter.call(null,inst_74489,files);
var inst_74491 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_74492 = cljs.core.concat.call(null,inst_74490,inst_74491);
var state_74588__$1 = (function (){var statearr_74603 = state_74588;
(statearr_74603[(17)] = inst_74486);

(statearr_74603[(18)] = inst_74488);

(statearr_74603[(12)] = inst_74492);

return statearr_74603;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_74604_74688 = state_74588__$1;
(statearr_74604_74688[(1)] = (16));

} else {
var statearr_74605_74689 = state_74588__$1;
(statearr_74605_74689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (15))){
var inst_74476 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
var statearr_74606_74690 = state_74588__$1;
(statearr_74606_74690[(2)] = inst_74476);

(statearr_74606_74690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (21))){
var inst_74502 = (state_74588[(19)]);
var inst_74502__$1 = (state_74588[(2)]);
var inst_74503 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_74502__$1);
var state_74588__$1 = (function (){var statearr_74607 = state_74588;
(statearr_74607[(19)] = inst_74502__$1);

return statearr_74607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74588__$1,(22),inst_74503);
} else {
if((state_val_74589 === (31))){
var inst_74586 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74588__$1,inst_74586);
} else {
if((state_val_74589 === (32))){
var inst_74542 = (state_74588[(16)]);
var inst_74547 = inst_74542.cljs$lang$protocol_mask$partition0$;
var inst_74548 = (inst_74547 & (64));
var inst_74549 = inst_74542.cljs$core$ISeq$;
var inst_74550 = (inst_74548) || (inst_74549);
var state_74588__$1 = state_74588;
if(cljs.core.truth_(inst_74550)){
var statearr_74608_74691 = state_74588__$1;
(statearr_74608_74691[(1)] = (35));

} else {
var statearr_74609_74692 = state_74588__$1;
(statearr_74609_74692[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (40))){
var inst_74563 = (state_74588[(20)]);
var inst_74562 = (state_74588[(2)]);
var inst_74563__$1 = cljs.core.get.call(null,inst_74562,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_74564 = cljs.core.get.call(null,inst_74562,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_74565 = cljs.core.not_empty.call(null,inst_74563__$1);
var state_74588__$1 = (function (){var statearr_74610 = state_74588;
(statearr_74610[(20)] = inst_74563__$1);

(statearr_74610[(21)] = inst_74564);

return statearr_74610;
})();
if(cljs.core.truth_(inst_74565)){
var statearr_74611_74693 = state_74588__$1;
(statearr_74611_74693[(1)] = (41));

} else {
var statearr_74612_74694 = state_74588__$1;
(statearr_74612_74694[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (33))){
var state_74588__$1 = state_74588;
var statearr_74613_74695 = state_74588__$1;
(statearr_74613_74695[(2)] = false);

(statearr_74613_74695[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (13))){
var inst_74462 = (state_74588[(22)]);
var inst_74466 = cljs.core.chunk_first.call(null,inst_74462);
var inst_74467 = cljs.core.chunk_rest.call(null,inst_74462);
var inst_74468 = cljs.core.count.call(null,inst_74466);
var inst_74449 = inst_74467;
var inst_74450 = inst_74466;
var inst_74451 = inst_74468;
var inst_74452 = (0);
var state_74588__$1 = (function (){var statearr_74614 = state_74588;
(statearr_74614[(7)] = inst_74451);

(statearr_74614[(8)] = inst_74449);

(statearr_74614[(9)] = inst_74452);

(statearr_74614[(10)] = inst_74450);

return statearr_74614;
})();
var statearr_74615_74696 = state_74588__$1;
(statearr_74615_74696[(2)] = null);

(statearr_74615_74696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (22))){
var inst_74502 = (state_74588[(19)]);
var inst_74506 = (state_74588[(23)]);
var inst_74510 = (state_74588[(24)]);
var inst_74505 = (state_74588[(25)]);
var inst_74505__$1 = (state_74588[(2)]);
var inst_74506__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_74505__$1);
var inst_74507 = (function (){var all_files = inst_74502;
var res_SINGLEQUOTE_ = inst_74505__$1;
var res = inst_74506__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_74502,inst_74506,inst_74510,inst_74505,inst_74505__$1,inst_74506__$1,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__74185_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__74185_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_74502,inst_74506,inst_74510,inst_74505,inst_74505__$1,inst_74506__$1,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74508 = cljs.core.filter.call(null,inst_74507,inst_74505__$1);
var inst_74509 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_74510__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_74509);
var inst_74511 = cljs.core.not_empty.call(null,inst_74510__$1);
var state_74588__$1 = (function (){var statearr_74616 = state_74588;
(statearr_74616[(26)] = inst_74508);

(statearr_74616[(23)] = inst_74506__$1);

(statearr_74616[(24)] = inst_74510__$1);

(statearr_74616[(25)] = inst_74505__$1);

return statearr_74616;
})();
if(cljs.core.truth_(inst_74511)){
var statearr_74617_74697 = state_74588__$1;
(statearr_74617_74697[(1)] = (23));

} else {
var statearr_74618_74698 = state_74588__$1;
(statearr_74618_74698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (36))){
var state_74588__$1 = state_74588;
var statearr_74619_74699 = state_74588__$1;
(statearr_74619_74699[(2)] = false);

(statearr_74619_74699[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (41))){
var inst_74563 = (state_74588[(20)]);
var inst_74567 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_74568 = cljs.core.map.call(null,inst_74567,inst_74563);
var inst_74569 = cljs.core.pr_str.call(null,inst_74568);
var inst_74570 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_74569)].join('');
var inst_74571 = figwheel.client.utils.log.call(null,inst_74570);
var state_74588__$1 = state_74588;
var statearr_74620_74700 = state_74588__$1;
(statearr_74620_74700[(2)] = inst_74571);

(statearr_74620_74700[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (43))){
var inst_74564 = (state_74588[(21)]);
var inst_74574 = (state_74588[(2)]);
var inst_74575 = cljs.core.not_empty.call(null,inst_74564);
var state_74588__$1 = (function (){var statearr_74621 = state_74588;
(statearr_74621[(27)] = inst_74574);

return statearr_74621;
})();
if(cljs.core.truth_(inst_74575)){
var statearr_74622_74701 = state_74588__$1;
(statearr_74622_74701[(1)] = (44));

} else {
var statearr_74623_74702 = state_74588__$1;
(statearr_74623_74702[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (29))){
var inst_74542 = (state_74588[(16)]);
var inst_74508 = (state_74588[(26)]);
var inst_74502 = (state_74588[(19)]);
var inst_74506 = (state_74588[(23)]);
var inst_74510 = (state_74588[(24)]);
var inst_74505 = (state_74588[(25)]);
var inst_74538 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_74541 = (function (){var all_files = inst_74502;
var res_SINGLEQUOTE_ = inst_74505;
var res = inst_74506;
var files_not_loaded = inst_74508;
var dependencies_that_loaded = inst_74510;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74542,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74538,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__74540){
var map__74624 = p__74540;
var map__74624__$1 = ((((!((map__74624 == null)))?((((map__74624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74624):map__74624);
var namespace = cljs.core.get.call(null,map__74624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74542,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74538,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74542__$1 = cljs.core.group_by.call(null,inst_74541,inst_74508);
var inst_74544 = (inst_74542__$1 == null);
var inst_74545 = cljs.core.not.call(null,inst_74544);
var state_74588__$1 = (function (){var statearr_74626 = state_74588;
(statearr_74626[(16)] = inst_74542__$1);

(statearr_74626[(28)] = inst_74538);

return statearr_74626;
})();
if(inst_74545){
var statearr_74627_74703 = state_74588__$1;
(statearr_74627_74703[(1)] = (32));

} else {
var statearr_74628_74704 = state_74588__$1;
(statearr_74628_74704[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (44))){
var inst_74564 = (state_74588[(21)]);
var inst_74577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_74564);
var inst_74578 = cljs.core.pr_str.call(null,inst_74577);
var inst_74579 = [cljs.core.str("not required: "),cljs.core.str(inst_74578)].join('');
var inst_74580 = figwheel.client.utils.log.call(null,inst_74579);
var state_74588__$1 = state_74588;
var statearr_74629_74705 = state_74588__$1;
(statearr_74629_74705[(2)] = inst_74580);

(statearr_74629_74705[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (6))){
var inst_74483 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
var statearr_74630_74706 = state_74588__$1;
(statearr_74630_74706[(2)] = inst_74483);

(statearr_74630_74706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (28))){
var inst_74508 = (state_74588[(26)]);
var inst_74535 = (state_74588[(2)]);
var inst_74536 = cljs.core.not_empty.call(null,inst_74508);
var state_74588__$1 = (function (){var statearr_74631 = state_74588;
(statearr_74631[(29)] = inst_74535);

return statearr_74631;
})();
if(cljs.core.truth_(inst_74536)){
var statearr_74632_74707 = state_74588__$1;
(statearr_74632_74707[(1)] = (29));

} else {
var statearr_74633_74708 = state_74588__$1;
(statearr_74633_74708[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (25))){
var inst_74506 = (state_74588[(23)]);
var inst_74522 = (state_74588[(2)]);
var inst_74523 = cljs.core.not_empty.call(null,inst_74506);
var state_74588__$1 = (function (){var statearr_74634 = state_74588;
(statearr_74634[(30)] = inst_74522);

return statearr_74634;
})();
if(cljs.core.truth_(inst_74523)){
var statearr_74635_74709 = state_74588__$1;
(statearr_74635_74709[(1)] = (26));

} else {
var statearr_74636_74710 = state_74588__$1;
(statearr_74636_74710[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (34))){
var inst_74557 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
if(cljs.core.truth_(inst_74557)){
var statearr_74637_74711 = state_74588__$1;
(statearr_74637_74711[(1)] = (38));

} else {
var statearr_74638_74712 = state_74588__$1;
(statearr_74638_74712[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (17))){
var state_74588__$1 = state_74588;
var statearr_74639_74713 = state_74588__$1;
(statearr_74639_74713[(2)] = recompile_dependents);

(statearr_74639_74713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (3))){
var state_74588__$1 = state_74588;
var statearr_74640_74714 = state_74588__$1;
(statearr_74640_74714[(2)] = null);

(statearr_74640_74714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (12))){
var inst_74479 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
var statearr_74641_74715 = state_74588__$1;
(statearr_74641_74715[(2)] = inst_74479);

(statearr_74641_74715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (2))){
var inst_74441 = (state_74588[(13)]);
var inst_74448 = cljs.core.seq.call(null,inst_74441);
var inst_74449 = inst_74448;
var inst_74450 = null;
var inst_74451 = (0);
var inst_74452 = (0);
var state_74588__$1 = (function (){var statearr_74642 = state_74588;
(statearr_74642[(7)] = inst_74451);

(statearr_74642[(8)] = inst_74449);

(statearr_74642[(9)] = inst_74452);

(statearr_74642[(10)] = inst_74450);

return statearr_74642;
})();
var statearr_74643_74716 = state_74588__$1;
(statearr_74643_74716[(2)] = null);

(statearr_74643_74716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (23))){
var inst_74508 = (state_74588[(26)]);
var inst_74502 = (state_74588[(19)]);
var inst_74506 = (state_74588[(23)]);
var inst_74510 = (state_74588[(24)]);
var inst_74505 = (state_74588[(25)]);
var inst_74513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_74515 = (function (){var all_files = inst_74502;
var res_SINGLEQUOTE_ = inst_74505;
var res = inst_74506;
var files_not_loaded = inst_74508;
var dependencies_that_loaded = inst_74510;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74513,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__74514){
var map__74644 = p__74514;
var map__74644__$1 = ((((!((map__74644 == null)))?((((map__74644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74644):map__74644);
var request_url = cljs.core.get.call(null,map__74644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74513,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74516 = cljs.core.reverse.call(null,inst_74510);
var inst_74517 = cljs.core.map.call(null,inst_74515,inst_74516);
var inst_74518 = cljs.core.pr_str.call(null,inst_74517);
var inst_74519 = figwheel.client.utils.log.call(null,inst_74518);
var state_74588__$1 = (function (){var statearr_74646 = state_74588;
(statearr_74646[(31)] = inst_74513);

return statearr_74646;
})();
var statearr_74647_74717 = state_74588__$1;
(statearr_74647_74717[(2)] = inst_74519);

(statearr_74647_74717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (35))){
var state_74588__$1 = state_74588;
var statearr_74648_74718 = state_74588__$1;
(statearr_74648_74718[(2)] = true);

(statearr_74648_74718[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (19))){
var inst_74492 = (state_74588[(12)]);
var inst_74498 = figwheel.client.file_reloading.expand_files.call(null,inst_74492);
var state_74588__$1 = state_74588;
var statearr_74649_74719 = state_74588__$1;
(statearr_74649_74719[(2)] = inst_74498);

(statearr_74649_74719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (11))){
var state_74588__$1 = state_74588;
var statearr_74650_74720 = state_74588__$1;
(statearr_74650_74720[(2)] = null);

(statearr_74650_74720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (9))){
var inst_74481 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
var statearr_74651_74721 = state_74588__$1;
(statearr_74651_74721[(2)] = inst_74481);

(statearr_74651_74721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (5))){
var inst_74451 = (state_74588[(7)]);
var inst_74452 = (state_74588[(9)]);
var inst_74454 = (inst_74452 < inst_74451);
var inst_74455 = inst_74454;
var state_74588__$1 = state_74588;
if(cljs.core.truth_(inst_74455)){
var statearr_74652_74722 = state_74588__$1;
(statearr_74652_74722[(1)] = (7));

} else {
var statearr_74653_74723 = state_74588__$1;
(statearr_74653_74723[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (14))){
var inst_74462 = (state_74588[(22)]);
var inst_74471 = cljs.core.first.call(null,inst_74462);
var inst_74472 = figwheel.client.file_reloading.eval_body.call(null,inst_74471,opts);
var inst_74473 = cljs.core.next.call(null,inst_74462);
var inst_74449 = inst_74473;
var inst_74450 = null;
var inst_74451 = (0);
var inst_74452 = (0);
var state_74588__$1 = (function (){var statearr_74654 = state_74588;
(statearr_74654[(7)] = inst_74451);

(statearr_74654[(32)] = inst_74472);

(statearr_74654[(8)] = inst_74449);

(statearr_74654[(9)] = inst_74452);

(statearr_74654[(10)] = inst_74450);

return statearr_74654;
})();
var statearr_74655_74724 = state_74588__$1;
(statearr_74655_74724[(2)] = null);

(statearr_74655_74724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (45))){
var state_74588__$1 = state_74588;
var statearr_74656_74725 = state_74588__$1;
(statearr_74656_74725[(2)] = null);

(statearr_74656_74725[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (26))){
var inst_74508 = (state_74588[(26)]);
var inst_74502 = (state_74588[(19)]);
var inst_74506 = (state_74588[(23)]);
var inst_74510 = (state_74588[(24)]);
var inst_74505 = (state_74588[(25)]);
var inst_74525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_74527 = (function (){var all_files = inst_74502;
var res_SINGLEQUOTE_ = inst_74505;
var res = inst_74506;
var files_not_loaded = inst_74508;
var dependencies_that_loaded = inst_74510;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74525,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__74526){
var map__74657 = p__74526;
var map__74657__$1 = ((((!((map__74657 == null)))?((((map__74657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74657):map__74657);
var namespace = cljs.core.get.call(null,map__74657__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__74657__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74525,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74528 = cljs.core.map.call(null,inst_74527,inst_74506);
var inst_74529 = cljs.core.pr_str.call(null,inst_74528);
var inst_74530 = figwheel.client.utils.log.call(null,inst_74529);
var inst_74531 = (function (){var all_files = inst_74502;
var res_SINGLEQUOTE_ = inst_74505;
var res = inst_74506;
var files_not_loaded = inst_74508;
var dependencies_that_loaded = inst_74510;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74525,inst_74527,inst_74528,inst_74529,inst_74530,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74508,inst_74502,inst_74506,inst_74510,inst_74505,inst_74525,inst_74527,inst_74528,inst_74529,inst_74530,state_val_74589,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74532 = setTimeout(inst_74531,(10));
var state_74588__$1 = (function (){var statearr_74659 = state_74588;
(statearr_74659[(33)] = inst_74525);

(statearr_74659[(34)] = inst_74530);

return statearr_74659;
})();
var statearr_74660_74726 = state_74588__$1;
(statearr_74660_74726[(2)] = inst_74532);

(statearr_74660_74726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (16))){
var state_74588__$1 = state_74588;
var statearr_74661_74727 = state_74588__$1;
(statearr_74661_74727[(2)] = reload_dependents);

(statearr_74661_74727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (38))){
var inst_74542 = (state_74588[(16)]);
var inst_74559 = cljs.core.apply.call(null,cljs.core.hash_map,inst_74542);
var state_74588__$1 = state_74588;
var statearr_74662_74728 = state_74588__$1;
(statearr_74662_74728[(2)] = inst_74559);

(statearr_74662_74728[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (30))){
var state_74588__$1 = state_74588;
var statearr_74663_74729 = state_74588__$1;
(statearr_74663_74729[(2)] = null);

(statearr_74663_74729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (10))){
var inst_74462 = (state_74588[(22)]);
var inst_74464 = cljs.core.chunked_seq_QMARK_.call(null,inst_74462);
var state_74588__$1 = state_74588;
if(inst_74464){
var statearr_74664_74730 = state_74588__$1;
(statearr_74664_74730[(1)] = (13));

} else {
var statearr_74665_74731 = state_74588__$1;
(statearr_74665_74731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (18))){
var inst_74496 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
if(cljs.core.truth_(inst_74496)){
var statearr_74666_74732 = state_74588__$1;
(statearr_74666_74732[(1)] = (19));

} else {
var statearr_74667_74733 = state_74588__$1;
(statearr_74667_74733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (42))){
var state_74588__$1 = state_74588;
var statearr_74668_74734 = state_74588__$1;
(statearr_74668_74734[(2)] = null);

(statearr_74668_74734[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (37))){
var inst_74554 = (state_74588[(2)]);
var state_74588__$1 = state_74588;
var statearr_74669_74735 = state_74588__$1;
(statearr_74669_74735[(2)] = inst_74554);

(statearr_74669_74735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74589 === (8))){
var inst_74449 = (state_74588[(8)]);
var inst_74462 = (state_74588[(22)]);
var inst_74462__$1 = cljs.core.seq.call(null,inst_74449);
var state_74588__$1 = (function (){var statearr_74670 = state_74588;
(statearr_74670[(22)] = inst_74462__$1);

return statearr_74670;
})();
if(inst_74462__$1){
var statearr_74671_74736 = state_74588__$1;
(statearr_74671_74736[(1)] = (10));

} else {
var statearr_74672_74737 = state_74588__$1;
(statearr_74672_74737[(1)] = (11));

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
});})(c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27865__auto__,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____0 = (function (){
var statearr_74676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74676[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__);

(statearr_74676[(1)] = (1));

return statearr_74676;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____1 = (function (state_74588){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_74588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e74677){if((e74677 instanceof Object)){
var ex__27869__auto__ = e74677;
var statearr_74678_74738 = state_74588;
(statearr_74678_74738[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74739 = state_74588;
state_74588 = G__74739;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__ = function(state_74588){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____1.call(this,state_74588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27932__auto__ = (function (){var statearr_74679 = f__27931__auto__.call(null);
(statearr_74679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_74679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__,map__74434,map__74434__$1,opts,before_jsload,on_jsload,reload_dependents,map__74435,map__74435__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27930__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__74742,link){
var map__74745 = p__74742;
var map__74745__$1 = ((((!((map__74745 == null)))?((((map__74745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74745):map__74745);
var file = cljs.core.get.call(null,map__74745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__74745,map__74745__$1,file){
return (function (p1__74740_SHARP_,p2__74741_SHARP_){
if(cljs.core._EQ_.call(null,p1__74740_SHARP_,p2__74741_SHARP_)){
return p1__74740_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__74745,map__74745__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__74751){
var map__74752 = p__74751;
var map__74752__$1 = ((((!((map__74752 == null)))?((((map__74752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74752):map__74752);
var match_length = cljs.core.get.call(null,map__74752__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__74752__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__74747_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__74747_SHARP_);
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
var args74754 = [];
var len__25826__auto___74757 = arguments.length;
var i__25827__auto___74758 = (0);
while(true){
if((i__25827__auto___74758 < len__25826__auto___74757)){
args74754.push((arguments[i__25827__auto___74758]));

var G__74759 = (i__25827__auto___74758 + (1));
i__25827__auto___74758 = G__74759;
continue;
} else {
}
break;
}

var G__74756 = args74754.length;
switch (G__74756) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74754.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__74761_SHARP_,p2__74762_SHARP_){
return cljs.core.assoc.call(null,p1__74761_SHARP_,cljs.core.get.call(null,p2__74762_SHARP_,key),p2__74762_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__74763){
var map__74766 = p__74763;
var map__74766__$1 = ((((!((map__74766 == null)))?((((map__74766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74766):map__74766);
var f_data = map__74766__$1;
var file = cljs.core.get.call(null,map__74766__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__74768,p__74769){
var map__74778 = p__74768;
var map__74778__$1 = ((((!((map__74778 == null)))?((((map__74778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74778):map__74778);
var opts = map__74778__$1;
var on_cssload = cljs.core.get.call(null,map__74778__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__74779 = p__74769;
var map__74779__$1 = ((((!((map__74779 == null)))?((((map__74779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74779):map__74779);
var files_msg = map__74779__$1;
var files = cljs.core.get.call(null,map__74779__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__74782_74786 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__74783_74787 = null;
var count__74784_74788 = (0);
var i__74785_74789 = (0);
while(true){
if((i__74785_74789 < count__74784_74788)){
var f_74790 = cljs.core._nth.call(null,chunk__74783_74787,i__74785_74789);
figwheel.client.file_reloading.reload_css_file.call(null,f_74790);

var G__74791 = seq__74782_74786;
var G__74792 = chunk__74783_74787;
var G__74793 = count__74784_74788;
var G__74794 = (i__74785_74789 + (1));
seq__74782_74786 = G__74791;
chunk__74783_74787 = G__74792;
count__74784_74788 = G__74793;
i__74785_74789 = G__74794;
continue;
} else {
var temp__4657__auto___74795 = cljs.core.seq.call(null,seq__74782_74786);
if(temp__4657__auto___74795){
var seq__74782_74796__$1 = temp__4657__auto___74795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74782_74796__$1)){
var c__25562__auto___74797 = cljs.core.chunk_first.call(null,seq__74782_74796__$1);
var G__74798 = cljs.core.chunk_rest.call(null,seq__74782_74796__$1);
var G__74799 = c__25562__auto___74797;
var G__74800 = cljs.core.count.call(null,c__25562__auto___74797);
var G__74801 = (0);
seq__74782_74786 = G__74798;
chunk__74783_74787 = G__74799;
count__74784_74788 = G__74800;
i__74785_74789 = G__74801;
continue;
} else {
var f_74802 = cljs.core.first.call(null,seq__74782_74796__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_74802);

var G__74803 = cljs.core.next.call(null,seq__74782_74796__$1);
var G__74804 = null;
var G__74805 = (0);
var G__74806 = (0);
seq__74782_74786 = G__74803;
chunk__74783_74787 = G__74804;
count__74784_74788 = G__74805;
i__74785_74789 = G__74806;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__74778,map__74778__$1,opts,on_cssload,map__74779,map__74779__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__74778,map__74778__$1,opts,on_cssload,map__74779,map__74779__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478402650506