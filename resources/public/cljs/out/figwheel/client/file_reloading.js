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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37058_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37058_SHARP_));
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
var seq__37063 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37064 = null;
var count__37065 = (0);
var i__37066 = (0);
while(true){
if((i__37066 < count__37065)){
var n = cljs.core._nth.call(null,chunk__37064,i__37066);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37067 = seq__37063;
var G__37068 = chunk__37064;
var G__37069 = count__37065;
var G__37070 = (i__37066 + (1));
seq__37063 = G__37067;
chunk__37064 = G__37068;
count__37065 = G__37069;
i__37066 = G__37070;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37063);
if(temp__4657__auto__){
var seq__37063__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37063__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__37063__$1);
var G__37071 = cljs.core.chunk_rest.call(null,seq__37063__$1);
var G__37072 = c__25562__auto__;
var G__37073 = cljs.core.count.call(null,c__25562__auto__);
var G__37074 = (0);
seq__37063 = G__37071;
chunk__37064 = G__37072;
count__37065 = G__37073;
i__37066 = G__37074;
continue;
} else {
var n = cljs.core.first.call(null,seq__37063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37075 = cljs.core.next.call(null,seq__37063__$1);
var G__37076 = null;
var G__37077 = (0);
var G__37078 = (0);
seq__37063 = G__37075;
chunk__37064 = G__37076;
count__37065 = G__37077;
i__37066 = G__37078;
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

var seq__37129_37140 = cljs.core.seq.call(null,deps);
var chunk__37130_37141 = null;
var count__37131_37142 = (0);
var i__37132_37143 = (0);
while(true){
if((i__37132_37143 < count__37131_37142)){
var dep_37144 = cljs.core._nth.call(null,chunk__37130_37141,i__37132_37143);
topo_sort_helper_STAR_.call(null,dep_37144,(depth + (1)),state);

var G__37145 = seq__37129_37140;
var G__37146 = chunk__37130_37141;
var G__37147 = count__37131_37142;
var G__37148 = (i__37132_37143 + (1));
seq__37129_37140 = G__37145;
chunk__37130_37141 = G__37146;
count__37131_37142 = G__37147;
i__37132_37143 = G__37148;
continue;
} else {
var temp__4657__auto___37149 = cljs.core.seq.call(null,seq__37129_37140);
if(temp__4657__auto___37149){
var seq__37129_37150__$1 = temp__4657__auto___37149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37129_37150__$1)){
var c__25562__auto___37151 = cljs.core.chunk_first.call(null,seq__37129_37150__$1);
var G__37152 = cljs.core.chunk_rest.call(null,seq__37129_37150__$1);
var G__37153 = c__25562__auto___37151;
var G__37154 = cljs.core.count.call(null,c__25562__auto___37151);
var G__37155 = (0);
seq__37129_37140 = G__37152;
chunk__37130_37141 = G__37153;
count__37131_37142 = G__37154;
i__37132_37143 = G__37155;
continue;
} else {
var dep_37156 = cljs.core.first.call(null,seq__37129_37150__$1);
topo_sort_helper_STAR_.call(null,dep_37156,(depth + (1)),state);

var G__37157 = cljs.core.next.call(null,seq__37129_37150__$1);
var G__37158 = null;
var G__37159 = (0);
var G__37160 = (0);
seq__37129_37140 = G__37157;
chunk__37130_37141 = G__37158;
count__37131_37142 = G__37159;
i__37132_37143 = G__37160;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37133){
var vec__37137 = p__37133;
var seq__37138 = cljs.core.seq.call(null,vec__37137);
var first__37139 = cljs.core.first.call(null,seq__37138);
var seq__37138__$1 = cljs.core.next.call(null,seq__37138);
var x = first__37139;
var xs = seq__37138__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37137,seq__37138,first__37139,seq__37138__$1,x,xs,get_deps__$1){
return (function (p1__37079_SHARP_){
return clojure.set.difference.call(null,p1__37079_SHARP_,x);
});})(vec__37137,seq__37138,first__37139,seq__37138__$1,x,xs,get_deps__$1))
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
var seq__37173 = cljs.core.seq.call(null,provides);
var chunk__37174 = null;
var count__37175 = (0);
var i__37176 = (0);
while(true){
if((i__37176 < count__37175)){
var prov = cljs.core._nth.call(null,chunk__37174,i__37176);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37177_37185 = cljs.core.seq.call(null,requires);
var chunk__37178_37186 = null;
var count__37179_37187 = (0);
var i__37180_37188 = (0);
while(true){
if((i__37180_37188 < count__37179_37187)){
var req_37189 = cljs.core._nth.call(null,chunk__37178_37186,i__37180_37188);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37189,prov);

var G__37190 = seq__37177_37185;
var G__37191 = chunk__37178_37186;
var G__37192 = count__37179_37187;
var G__37193 = (i__37180_37188 + (1));
seq__37177_37185 = G__37190;
chunk__37178_37186 = G__37191;
count__37179_37187 = G__37192;
i__37180_37188 = G__37193;
continue;
} else {
var temp__4657__auto___37194 = cljs.core.seq.call(null,seq__37177_37185);
if(temp__4657__auto___37194){
var seq__37177_37195__$1 = temp__4657__auto___37194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177_37195__$1)){
var c__25562__auto___37196 = cljs.core.chunk_first.call(null,seq__37177_37195__$1);
var G__37197 = cljs.core.chunk_rest.call(null,seq__37177_37195__$1);
var G__37198 = c__25562__auto___37196;
var G__37199 = cljs.core.count.call(null,c__25562__auto___37196);
var G__37200 = (0);
seq__37177_37185 = G__37197;
chunk__37178_37186 = G__37198;
count__37179_37187 = G__37199;
i__37180_37188 = G__37200;
continue;
} else {
var req_37201 = cljs.core.first.call(null,seq__37177_37195__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37201,prov);

var G__37202 = cljs.core.next.call(null,seq__37177_37195__$1);
var G__37203 = null;
var G__37204 = (0);
var G__37205 = (0);
seq__37177_37185 = G__37202;
chunk__37178_37186 = G__37203;
count__37179_37187 = G__37204;
i__37180_37188 = G__37205;
continue;
}
} else {
}
}
break;
}

var G__37206 = seq__37173;
var G__37207 = chunk__37174;
var G__37208 = count__37175;
var G__37209 = (i__37176 + (1));
seq__37173 = G__37206;
chunk__37174 = G__37207;
count__37175 = G__37208;
i__37176 = G__37209;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37173);
if(temp__4657__auto__){
var seq__37173__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37173__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__37173__$1);
var G__37210 = cljs.core.chunk_rest.call(null,seq__37173__$1);
var G__37211 = c__25562__auto__;
var G__37212 = cljs.core.count.call(null,c__25562__auto__);
var G__37213 = (0);
seq__37173 = G__37210;
chunk__37174 = G__37211;
count__37175 = G__37212;
i__37176 = G__37213;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37173__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37181_37214 = cljs.core.seq.call(null,requires);
var chunk__37182_37215 = null;
var count__37183_37216 = (0);
var i__37184_37217 = (0);
while(true){
if((i__37184_37217 < count__37183_37216)){
var req_37218 = cljs.core._nth.call(null,chunk__37182_37215,i__37184_37217);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37218,prov);

var G__37219 = seq__37181_37214;
var G__37220 = chunk__37182_37215;
var G__37221 = count__37183_37216;
var G__37222 = (i__37184_37217 + (1));
seq__37181_37214 = G__37219;
chunk__37182_37215 = G__37220;
count__37183_37216 = G__37221;
i__37184_37217 = G__37222;
continue;
} else {
var temp__4657__auto___37223__$1 = cljs.core.seq.call(null,seq__37181_37214);
if(temp__4657__auto___37223__$1){
var seq__37181_37224__$1 = temp__4657__auto___37223__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37181_37224__$1)){
var c__25562__auto___37225 = cljs.core.chunk_first.call(null,seq__37181_37224__$1);
var G__37226 = cljs.core.chunk_rest.call(null,seq__37181_37224__$1);
var G__37227 = c__25562__auto___37225;
var G__37228 = cljs.core.count.call(null,c__25562__auto___37225);
var G__37229 = (0);
seq__37181_37214 = G__37226;
chunk__37182_37215 = G__37227;
count__37183_37216 = G__37228;
i__37184_37217 = G__37229;
continue;
} else {
var req_37230 = cljs.core.first.call(null,seq__37181_37224__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37230,prov);

var G__37231 = cljs.core.next.call(null,seq__37181_37224__$1);
var G__37232 = null;
var G__37233 = (0);
var G__37234 = (0);
seq__37181_37214 = G__37231;
chunk__37182_37215 = G__37232;
count__37183_37216 = G__37233;
i__37184_37217 = G__37234;
continue;
}
} else {
}
}
break;
}

var G__37235 = cljs.core.next.call(null,seq__37173__$1);
var G__37236 = null;
var G__37237 = (0);
var G__37238 = (0);
seq__37173 = G__37235;
chunk__37174 = G__37236;
count__37175 = G__37237;
i__37176 = G__37238;
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
var seq__37243_37247 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37244_37248 = null;
var count__37245_37249 = (0);
var i__37246_37250 = (0);
while(true){
if((i__37246_37250 < count__37245_37249)){
var ns_37251 = cljs.core._nth.call(null,chunk__37244_37248,i__37246_37250);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37251);

var G__37252 = seq__37243_37247;
var G__37253 = chunk__37244_37248;
var G__37254 = count__37245_37249;
var G__37255 = (i__37246_37250 + (1));
seq__37243_37247 = G__37252;
chunk__37244_37248 = G__37253;
count__37245_37249 = G__37254;
i__37246_37250 = G__37255;
continue;
} else {
var temp__4657__auto___37256 = cljs.core.seq.call(null,seq__37243_37247);
if(temp__4657__auto___37256){
var seq__37243_37257__$1 = temp__4657__auto___37256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37243_37257__$1)){
var c__25562__auto___37258 = cljs.core.chunk_first.call(null,seq__37243_37257__$1);
var G__37259 = cljs.core.chunk_rest.call(null,seq__37243_37257__$1);
var G__37260 = c__25562__auto___37258;
var G__37261 = cljs.core.count.call(null,c__25562__auto___37258);
var G__37262 = (0);
seq__37243_37247 = G__37259;
chunk__37244_37248 = G__37260;
count__37245_37249 = G__37261;
i__37246_37250 = G__37262;
continue;
} else {
var ns_37263 = cljs.core.first.call(null,seq__37243_37257__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37263);

var G__37264 = cljs.core.next.call(null,seq__37243_37257__$1);
var G__37265 = null;
var G__37266 = (0);
var G__37267 = (0);
seq__37243_37247 = G__37264;
chunk__37244_37248 = G__37265;
count__37245_37249 = G__37266;
i__37246_37250 = G__37267;
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
var G__37268__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37269__i = 0, G__37269__a = new Array(arguments.length -  0);
while (G__37269__i < G__37269__a.length) {G__37269__a[G__37269__i] = arguments[G__37269__i + 0]; ++G__37269__i;}
  args = new cljs.core.IndexedSeq(G__37269__a,0);
} 
return G__37268__delegate.call(this,args);};
G__37268.cljs$lang$maxFixedArity = 0;
G__37268.cljs$lang$applyTo = (function (arglist__37270){
var args = cljs.core.seq(arglist__37270);
return G__37268__delegate(args);
});
G__37268.cljs$core$IFn$_invoke$arity$variadic = G__37268__delegate;
return G__37268;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37272 = cljs.core._EQ_;
var expr__37273 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37272.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37273))){
var path_parts = ((function (pred__37272,expr__37273){
return (function (p1__37271_SHARP_){
return clojure.string.split.call(null,p1__37271_SHARP_,/[\/\\]/);
});})(pred__37272,expr__37273))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__37272,expr__37273){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37275){if((e37275 instanceof Error)){
var e = e37275;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37275;

}
}})());
});
;})(path_parts,sep,root,pred__37272,expr__37273))
} else {
if(cljs.core.truth_(pred__37272.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37273))){
return ((function (pred__37272,expr__37273){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__37272,expr__37273){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__37272,expr__37273))
);

return deferred.addErrback(((function (deferred,pred__37272,expr__37273){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__37272,expr__37273))
);
});
;})(pred__37272,expr__37273))
} else {
return ((function (pred__37272,expr__37273){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37272,expr__37273))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37276,callback){
var map__37279 = p__37276;
var map__37279__$1 = ((((!((map__37279 == null)))?((((map__37279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37279):map__37279);
var file_msg = map__37279__$1;
var request_url = cljs.core.get.call(null,map__37279__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37279,map__37279__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37279,map__37279__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__){
return (function (state_37303){
var state_val_37304 = (state_37303[(1)]);
if((state_val_37304 === (7))){
var inst_37299 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37305_37325 = state_37303__$1;
(statearr_37305_37325[(2)] = inst_37299);

(statearr_37305_37325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (1))){
var state_37303__$1 = state_37303;
var statearr_37306_37326 = state_37303__$1;
(statearr_37306_37326[(2)] = null);

(statearr_37306_37326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (4))){
var inst_37283 = (state_37303[(7)]);
var inst_37283__$1 = (state_37303[(2)]);
var state_37303__$1 = (function (){var statearr_37307 = state_37303;
(statearr_37307[(7)] = inst_37283__$1);

return statearr_37307;
})();
if(cljs.core.truth_(inst_37283__$1)){
var statearr_37308_37327 = state_37303__$1;
(statearr_37308_37327[(1)] = (5));

} else {
var statearr_37309_37328 = state_37303__$1;
(statearr_37309_37328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (6))){
var state_37303__$1 = state_37303;
var statearr_37310_37329 = state_37303__$1;
(statearr_37310_37329[(2)] = null);

(statearr_37310_37329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (3))){
var inst_37301 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37303__$1,inst_37301);
} else {
if((state_val_37304 === (2))){
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37303__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37304 === (11))){
var inst_37295 = (state_37303[(2)]);
var state_37303__$1 = (function (){var statearr_37311 = state_37303;
(statearr_37311[(8)] = inst_37295);

return statearr_37311;
})();
var statearr_37312_37330 = state_37303__$1;
(statearr_37312_37330[(2)] = null);

(statearr_37312_37330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (9))){
var inst_37289 = (state_37303[(9)]);
var inst_37287 = (state_37303[(10)]);
var inst_37291 = inst_37289.call(null,inst_37287);
var state_37303__$1 = state_37303;
var statearr_37313_37331 = state_37303__$1;
(statearr_37313_37331[(2)] = inst_37291);

(statearr_37313_37331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (5))){
var inst_37283 = (state_37303[(7)]);
var inst_37285 = figwheel.client.file_reloading.blocking_load.call(null,inst_37283);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37303__$1,(8),inst_37285);
} else {
if((state_val_37304 === (10))){
var inst_37287 = (state_37303[(10)]);
var inst_37293 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37287);
var state_37303__$1 = state_37303;
var statearr_37314_37332 = state_37303__$1;
(statearr_37314_37332[(2)] = inst_37293);

(statearr_37314_37332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (8))){
var inst_37283 = (state_37303[(7)]);
var inst_37289 = (state_37303[(9)]);
var inst_37287 = (state_37303[(2)]);
var inst_37288 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37289__$1 = cljs.core.get.call(null,inst_37288,inst_37283);
var state_37303__$1 = (function (){var statearr_37315 = state_37303;
(statearr_37315[(9)] = inst_37289__$1);

(statearr_37315[(10)] = inst_37287);

return statearr_37315;
})();
if(cljs.core.truth_(inst_37289__$1)){
var statearr_37316_37333 = state_37303__$1;
(statearr_37316_37333[(1)] = (9));

} else {
var statearr_37317_37334 = state_37303__$1;
(statearr_37317_37334[(1)] = (10));

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
});})(c__34203__auto__))
;
return ((function (switch__34091__auto__,c__34203__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34092__auto__ = null;
var figwheel$client$file_reloading$state_machine__34092__auto____0 = (function (){
var statearr_37321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37321[(0)] = figwheel$client$file_reloading$state_machine__34092__auto__);

(statearr_37321[(1)] = (1));

return statearr_37321;
});
var figwheel$client$file_reloading$state_machine__34092__auto____1 = (function (state_37303){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_37303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e37322){if((e37322 instanceof Object)){
var ex__34095__auto__ = e37322;
var statearr_37323_37335 = state_37303;
(statearr_37323_37335[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37336 = state_37303;
state_37303 = G__37336;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34092__auto__ = function(state_37303){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34092__auto____1.call(this,state_37303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34092__auto____0;
figwheel$client$file_reloading$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34092__auto____1;
return figwheel$client$file_reloading$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__))
})();
var state__34205__auto__ = (function (){var statearr_37324 = f__34204__auto__.call(null);
(statearr_37324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_37324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__))
);

return c__34203__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37337,callback){
var map__37340 = p__37337;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37340):map__37340);
var file_msg = map__37340__$1;
var namespace = cljs.core.get.call(null,map__37340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37340,map__37340__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37340,map__37340__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37342){
var map__37345 = p__37342;
var map__37345__$1 = ((((!((map__37345 == null)))?((((map__37345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37345):map__37345);
var file_msg = map__37345__$1;
var namespace = cljs.core.get.call(null,map__37345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37347,callback){
var map__37350 = p__37347;
var map__37350__$1 = ((((!((map__37350 == null)))?((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37350):map__37350);
var file_msg = map__37350__$1;
var request_url = cljs.core.get.call(null,map__37350__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34203__auto___37454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___37454,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___37454,out){
return (function (state_37436){
var state_val_37437 = (state_37436[(1)]);
if((state_val_37437 === (1))){
var inst_37410 = cljs.core.seq.call(null,files);
var inst_37411 = cljs.core.first.call(null,inst_37410);
var inst_37412 = cljs.core.next.call(null,inst_37410);
var inst_37413 = files;
var state_37436__$1 = (function (){var statearr_37438 = state_37436;
(statearr_37438[(7)] = inst_37412);

(statearr_37438[(8)] = inst_37413);

(statearr_37438[(9)] = inst_37411);

return statearr_37438;
})();
var statearr_37439_37455 = state_37436__$1;
(statearr_37439_37455[(2)] = null);

(statearr_37439_37455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (2))){
var inst_37419 = (state_37436[(10)]);
var inst_37413 = (state_37436[(8)]);
var inst_37418 = cljs.core.seq.call(null,inst_37413);
var inst_37419__$1 = cljs.core.first.call(null,inst_37418);
var inst_37420 = cljs.core.next.call(null,inst_37418);
var inst_37421 = (inst_37419__$1 == null);
var inst_37422 = cljs.core.not.call(null,inst_37421);
var state_37436__$1 = (function (){var statearr_37440 = state_37436;
(statearr_37440[(10)] = inst_37419__$1);

(statearr_37440[(11)] = inst_37420);

return statearr_37440;
})();
if(inst_37422){
var statearr_37441_37456 = state_37436__$1;
(statearr_37441_37456[(1)] = (4));

} else {
var statearr_37442_37457 = state_37436__$1;
(statearr_37442_37457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (3))){
var inst_37434 = (state_37436[(2)]);
var state_37436__$1 = state_37436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37436__$1,inst_37434);
} else {
if((state_val_37437 === (4))){
var inst_37419 = (state_37436[(10)]);
var inst_37424 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37419);
var state_37436__$1 = state_37436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37436__$1,(7),inst_37424);
} else {
if((state_val_37437 === (5))){
var inst_37430 = cljs.core.async.close_BANG_.call(null,out);
var state_37436__$1 = state_37436;
var statearr_37443_37458 = state_37436__$1;
(statearr_37443_37458[(2)] = inst_37430);

(statearr_37443_37458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (6))){
var inst_37432 = (state_37436[(2)]);
var state_37436__$1 = state_37436;
var statearr_37444_37459 = state_37436__$1;
(statearr_37444_37459[(2)] = inst_37432);

(statearr_37444_37459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (7))){
var inst_37420 = (state_37436[(11)]);
var inst_37426 = (state_37436[(2)]);
var inst_37427 = cljs.core.async.put_BANG_.call(null,out,inst_37426);
var inst_37413 = inst_37420;
var state_37436__$1 = (function (){var statearr_37445 = state_37436;
(statearr_37445[(12)] = inst_37427);

(statearr_37445[(8)] = inst_37413);

return statearr_37445;
})();
var statearr_37446_37460 = state_37436__$1;
(statearr_37446_37460[(2)] = null);

(statearr_37446_37460[(1)] = (2));


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
});})(c__34203__auto___37454,out))
;
return ((function (switch__34091__auto__,c__34203__auto___37454,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto____0 = (function (){
var statearr_37450 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37450[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto__);

(statearr_37450[(1)] = (1));

return statearr_37450;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto____1 = (function (state_37436){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_37436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e37451){if((e37451 instanceof Object)){
var ex__34095__auto__ = e37451;
var statearr_37452_37461 = state_37436;
(statearr_37452_37461[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37462 = state_37436;
state_37436 = G__37462;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto__ = function(state_37436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto____1.call(this,state_37436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___37454,out))
})();
var state__34205__auto__ = (function (){var statearr_37453 = f__34204__auto__.call(null);
(statearr_37453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___37454);

return statearr_37453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___37454,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37463,opts){
var map__37467 = p__37463;
var map__37467__$1 = ((((!((map__37467 == null)))?((((map__37467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37467):map__37467);
var eval_body__$1 = cljs.core.get.call(null,map__37467__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37469){var e = e37469;
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
return (function (p1__37470_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37470_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37479){
var vec__37480 = p__37479;
var k = cljs.core.nth.call(null,vec__37480,(0),null);
var v = cljs.core.nth.call(null,vec__37480,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37483){
var vec__37484 = p__37483;
var k = cljs.core.nth.call(null,vec__37484,(0),null);
var v = cljs.core.nth.call(null,vec__37484,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37490,p__37491){
var map__37738 = p__37490;
var map__37738__$1 = ((((!((map__37738 == null)))?((((map__37738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37738):map__37738);
var opts = map__37738__$1;
var before_jsload = cljs.core.get.call(null,map__37738__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37738__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37738__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37739 = p__37491;
var map__37739__$1 = ((((!((map__37739 == null)))?((((map__37739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37739):map__37739);
var msg = map__37739__$1;
var files = cljs.core.get.call(null,map__37739__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37739__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37739__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37892){
var state_val_37893 = (state_37892[(1)]);
if((state_val_37893 === (7))){
var inst_37755 = (state_37892[(7)]);
var inst_37753 = (state_37892[(8)]);
var inst_37754 = (state_37892[(9)]);
var inst_37756 = (state_37892[(10)]);
var inst_37761 = cljs.core._nth.call(null,inst_37754,inst_37756);
var inst_37762 = figwheel.client.file_reloading.eval_body.call(null,inst_37761,opts);
var inst_37763 = (inst_37756 + (1));
var tmp37894 = inst_37755;
var tmp37895 = inst_37753;
var tmp37896 = inst_37754;
var inst_37753__$1 = tmp37895;
var inst_37754__$1 = tmp37896;
var inst_37755__$1 = tmp37894;
var inst_37756__$1 = inst_37763;
var state_37892__$1 = (function (){var statearr_37897 = state_37892;
(statearr_37897[(7)] = inst_37755__$1);

(statearr_37897[(11)] = inst_37762);

(statearr_37897[(8)] = inst_37753__$1);

(statearr_37897[(9)] = inst_37754__$1);

(statearr_37897[(10)] = inst_37756__$1);

return statearr_37897;
})();
var statearr_37898_37984 = state_37892__$1;
(statearr_37898_37984[(2)] = null);

(statearr_37898_37984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (20))){
var inst_37796 = (state_37892[(12)]);
var inst_37804 = figwheel.client.file_reloading.sort_files.call(null,inst_37796);
var state_37892__$1 = state_37892;
var statearr_37899_37985 = state_37892__$1;
(statearr_37899_37985[(2)] = inst_37804);

(statearr_37899_37985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (27))){
var state_37892__$1 = state_37892;
var statearr_37900_37986 = state_37892__$1;
(statearr_37900_37986[(2)] = null);

(statearr_37900_37986[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (1))){
var inst_37745 = (state_37892[(13)]);
var inst_37742 = before_jsload.call(null,files);
var inst_37743 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37744 = (function (){return ((function (inst_37745,inst_37742,inst_37743,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37487_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37487_SHARP_);
});
;})(inst_37745,inst_37742,inst_37743,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37745__$1 = cljs.core.filter.call(null,inst_37744,files);
var inst_37746 = cljs.core.not_empty.call(null,inst_37745__$1);
var state_37892__$1 = (function (){var statearr_37901 = state_37892;
(statearr_37901[(14)] = inst_37742);

(statearr_37901[(15)] = inst_37743);

(statearr_37901[(13)] = inst_37745__$1);

return statearr_37901;
})();
if(cljs.core.truth_(inst_37746)){
var statearr_37902_37987 = state_37892__$1;
(statearr_37902_37987[(1)] = (2));

} else {
var statearr_37903_37988 = state_37892__$1;
(statearr_37903_37988[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (24))){
var state_37892__$1 = state_37892;
var statearr_37904_37989 = state_37892__$1;
(statearr_37904_37989[(2)] = null);

(statearr_37904_37989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (39))){
var inst_37846 = (state_37892[(16)]);
var state_37892__$1 = state_37892;
var statearr_37905_37990 = state_37892__$1;
(statearr_37905_37990[(2)] = inst_37846);

(statearr_37905_37990[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (46))){
var inst_37887 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37906_37991 = state_37892__$1;
(statearr_37906_37991[(2)] = inst_37887);

(statearr_37906_37991[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (4))){
var inst_37790 = (state_37892[(2)]);
var inst_37791 = cljs.core.List.EMPTY;
var inst_37792 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37791);
var inst_37793 = (function (){return ((function (inst_37790,inst_37791,inst_37792,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37488_SHARP_){
var and__24739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37488_SHARP_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37488_SHARP_));
} else {
return and__24739__auto__;
}
});
;})(inst_37790,inst_37791,inst_37792,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37794 = cljs.core.filter.call(null,inst_37793,files);
var inst_37795 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37796 = cljs.core.concat.call(null,inst_37794,inst_37795);
var state_37892__$1 = (function (){var statearr_37907 = state_37892;
(statearr_37907[(17)] = inst_37790);

(statearr_37907[(12)] = inst_37796);

(statearr_37907[(18)] = inst_37792);

return statearr_37907;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37908_37992 = state_37892__$1;
(statearr_37908_37992[(1)] = (16));

} else {
var statearr_37909_37993 = state_37892__$1;
(statearr_37909_37993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (15))){
var inst_37780 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37910_37994 = state_37892__$1;
(statearr_37910_37994[(2)] = inst_37780);

(statearr_37910_37994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (21))){
var inst_37806 = (state_37892[(19)]);
var inst_37806__$1 = (state_37892[(2)]);
var inst_37807 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37806__$1);
var state_37892__$1 = (function (){var statearr_37911 = state_37892;
(statearr_37911[(19)] = inst_37806__$1);

return statearr_37911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(22),inst_37807);
} else {
if((state_val_37893 === (31))){
var inst_37890 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37892__$1,inst_37890);
} else {
if((state_val_37893 === (32))){
var inst_37846 = (state_37892[(16)]);
var inst_37851 = inst_37846.cljs$lang$protocol_mask$partition0$;
var inst_37852 = (inst_37851 & (64));
var inst_37853 = inst_37846.cljs$core$ISeq$;
var inst_37854 = (inst_37852) || (inst_37853);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37854)){
var statearr_37912_37995 = state_37892__$1;
(statearr_37912_37995[(1)] = (35));

} else {
var statearr_37913_37996 = state_37892__$1;
(statearr_37913_37996[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (40))){
var inst_37867 = (state_37892[(20)]);
var inst_37866 = (state_37892[(2)]);
var inst_37867__$1 = cljs.core.get.call(null,inst_37866,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37868 = cljs.core.get.call(null,inst_37866,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37869 = cljs.core.not_empty.call(null,inst_37867__$1);
var state_37892__$1 = (function (){var statearr_37914 = state_37892;
(statearr_37914[(20)] = inst_37867__$1);

(statearr_37914[(21)] = inst_37868);

return statearr_37914;
})();
if(cljs.core.truth_(inst_37869)){
var statearr_37915_37997 = state_37892__$1;
(statearr_37915_37997[(1)] = (41));

} else {
var statearr_37916_37998 = state_37892__$1;
(statearr_37916_37998[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (33))){
var state_37892__$1 = state_37892;
var statearr_37917_37999 = state_37892__$1;
(statearr_37917_37999[(2)] = false);

(statearr_37917_37999[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (13))){
var inst_37766 = (state_37892[(22)]);
var inst_37770 = cljs.core.chunk_first.call(null,inst_37766);
var inst_37771 = cljs.core.chunk_rest.call(null,inst_37766);
var inst_37772 = cljs.core.count.call(null,inst_37770);
var inst_37753 = inst_37771;
var inst_37754 = inst_37770;
var inst_37755 = inst_37772;
var inst_37756 = (0);
var state_37892__$1 = (function (){var statearr_37918 = state_37892;
(statearr_37918[(7)] = inst_37755);

(statearr_37918[(8)] = inst_37753);

(statearr_37918[(9)] = inst_37754);

(statearr_37918[(10)] = inst_37756);

return statearr_37918;
})();
var statearr_37919_38000 = state_37892__$1;
(statearr_37919_38000[(2)] = null);

(statearr_37919_38000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (22))){
var inst_37809 = (state_37892[(23)]);
var inst_37810 = (state_37892[(24)]);
var inst_37806 = (state_37892[(19)]);
var inst_37814 = (state_37892[(25)]);
var inst_37809__$1 = (state_37892[(2)]);
var inst_37810__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37809__$1);
var inst_37811 = (function (){var all_files = inst_37806;
var res_SINGLEQUOTE_ = inst_37809__$1;
var res = inst_37810__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37809,inst_37810,inst_37806,inst_37814,inst_37809__$1,inst_37810__$1,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37489_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37489_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37809,inst_37810,inst_37806,inst_37814,inst_37809__$1,inst_37810__$1,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37812 = cljs.core.filter.call(null,inst_37811,inst_37809__$1);
var inst_37813 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37814__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37813);
var inst_37815 = cljs.core.not_empty.call(null,inst_37814__$1);
var state_37892__$1 = (function (){var statearr_37920 = state_37892;
(statearr_37920[(23)] = inst_37809__$1);

(statearr_37920[(24)] = inst_37810__$1);

(statearr_37920[(26)] = inst_37812);

(statearr_37920[(25)] = inst_37814__$1);

return statearr_37920;
})();
if(cljs.core.truth_(inst_37815)){
var statearr_37921_38001 = state_37892__$1;
(statearr_37921_38001[(1)] = (23));

} else {
var statearr_37922_38002 = state_37892__$1;
(statearr_37922_38002[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (36))){
var state_37892__$1 = state_37892;
var statearr_37923_38003 = state_37892__$1;
(statearr_37923_38003[(2)] = false);

(statearr_37923_38003[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (41))){
var inst_37867 = (state_37892[(20)]);
var inst_37871 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37872 = cljs.core.map.call(null,inst_37871,inst_37867);
var inst_37873 = cljs.core.pr_str.call(null,inst_37872);
var inst_37874 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37873)].join('');
var inst_37875 = figwheel.client.utils.log.call(null,inst_37874);
var state_37892__$1 = state_37892;
var statearr_37924_38004 = state_37892__$1;
(statearr_37924_38004[(2)] = inst_37875);

(statearr_37924_38004[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (43))){
var inst_37868 = (state_37892[(21)]);
var inst_37878 = (state_37892[(2)]);
var inst_37879 = cljs.core.not_empty.call(null,inst_37868);
var state_37892__$1 = (function (){var statearr_37925 = state_37892;
(statearr_37925[(27)] = inst_37878);

return statearr_37925;
})();
if(cljs.core.truth_(inst_37879)){
var statearr_37926_38005 = state_37892__$1;
(statearr_37926_38005[(1)] = (44));

} else {
var statearr_37927_38006 = state_37892__$1;
(statearr_37927_38006[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (29))){
var inst_37809 = (state_37892[(23)]);
var inst_37810 = (state_37892[(24)]);
var inst_37846 = (state_37892[(16)]);
var inst_37812 = (state_37892[(26)]);
var inst_37806 = (state_37892[(19)]);
var inst_37814 = (state_37892[(25)]);
var inst_37842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37845 = (function (){var all_files = inst_37806;
var res_SINGLEQUOTE_ = inst_37809;
var res = inst_37810;
var files_not_loaded = inst_37812;
var dependencies_that_loaded = inst_37814;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37846,inst_37812,inst_37806,inst_37814,inst_37842,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37844){
var map__37928 = p__37844;
var map__37928__$1 = ((((!((map__37928 == null)))?((((map__37928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37928):map__37928);
var namespace = cljs.core.get.call(null,map__37928__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37846,inst_37812,inst_37806,inst_37814,inst_37842,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37846__$1 = cljs.core.group_by.call(null,inst_37845,inst_37812);
var inst_37848 = (inst_37846__$1 == null);
var inst_37849 = cljs.core.not.call(null,inst_37848);
var state_37892__$1 = (function (){var statearr_37930 = state_37892;
(statearr_37930[(28)] = inst_37842);

(statearr_37930[(16)] = inst_37846__$1);

return statearr_37930;
})();
if(inst_37849){
var statearr_37931_38007 = state_37892__$1;
(statearr_37931_38007[(1)] = (32));

} else {
var statearr_37932_38008 = state_37892__$1;
(statearr_37932_38008[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (44))){
var inst_37868 = (state_37892[(21)]);
var inst_37881 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37868);
var inst_37882 = cljs.core.pr_str.call(null,inst_37881);
var inst_37883 = [cljs.core.str("not required: "),cljs.core.str(inst_37882)].join('');
var inst_37884 = figwheel.client.utils.log.call(null,inst_37883);
var state_37892__$1 = state_37892;
var statearr_37933_38009 = state_37892__$1;
(statearr_37933_38009[(2)] = inst_37884);

(statearr_37933_38009[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (6))){
var inst_37787 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37934_38010 = state_37892__$1;
(statearr_37934_38010[(2)] = inst_37787);

(statearr_37934_38010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (28))){
var inst_37812 = (state_37892[(26)]);
var inst_37839 = (state_37892[(2)]);
var inst_37840 = cljs.core.not_empty.call(null,inst_37812);
var state_37892__$1 = (function (){var statearr_37935 = state_37892;
(statearr_37935[(29)] = inst_37839);

return statearr_37935;
})();
if(cljs.core.truth_(inst_37840)){
var statearr_37936_38011 = state_37892__$1;
(statearr_37936_38011[(1)] = (29));

} else {
var statearr_37937_38012 = state_37892__$1;
(statearr_37937_38012[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (25))){
var inst_37810 = (state_37892[(24)]);
var inst_37826 = (state_37892[(2)]);
var inst_37827 = cljs.core.not_empty.call(null,inst_37810);
var state_37892__$1 = (function (){var statearr_37938 = state_37892;
(statearr_37938[(30)] = inst_37826);

return statearr_37938;
})();
if(cljs.core.truth_(inst_37827)){
var statearr_37939_38013 = state_37892__$1;
(statearr_37939_38013[(1)] = (26));

} else {
var statearr_37940_38014 = state_37892__$1;
(statearr_37940_38014[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (34))){
var inst_37861 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37861)){
var statearr_37941_38015 = state_37892__$1;
(statearr_37941_38015[(1)] = (38));

} else {
var statearr_37942_38016 = state_37892__$1;
(statearr_37942_38016[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (17))){
var state_37892__$1 = state_37892;
var statearr_37943_38017 = state_37892__$1;
(statearr_37943_38017[(2)] = recompile_dependents);

(statearr_37943_38017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (3))){
var state_37892__$1 = state_37892;
var statearr_37944_38018 = state_37892__$1;
(statearr_37944_38018[(2)] = null);

(statearr_37944_38018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (12))){
var inst_37783 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37945_38019 = state_37892__$1;
(statearr_37945_38019[(2)] = inst_37783);

(statearr_37945_38019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (2))){
var inst_37745 = (state_37892[(13)]);
var inst_37752 = cljs.core.seq.call(null,inst_37745);
var inst_37753 = inst_37752;
var inst_37754 = null;
var inst_37755 = (0);
var inst_37756 = (0);
var state_37892__$1 = (function (){var statearr_37946 = state_37892;
(statearr_37946[(7)] = inst_37755);

(statearr_37946[(8)] = inst_37753);

(statearr_37946[(9)] = inst_37754);

(statearr_37946[(10)] = inst_37756);

return statearr_37946;
})();
var statearr_37947_38020 = state_37892__$1;
(statearr_37947_38020[(2)] = null);

(statearr_37947_38020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (23))){
var inst_37809 = (state_37892[(23)]);
var inst_37810 = (state_37892[(24)]);
var inst_37812 = (state_37892[(26)]);
var inst_37806 = (state_37892[(19)]);
var inst_37814 = (state_37892[(25)]);
var inst_37817 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37819 = (function (){var all_files = inst_37806;
var res_SINGLEQUOTE_ = inst_37809;
var res = inst_37810;
var files_not_loaded = inst_37812;
var dependencies_that_loaded = inst_37814;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37812,inst_37806,inst_37814,inst_37817,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37818){
var map__37948 = p__37818;
var map__37948__$1 = ((((!((map__37948 == null)))?((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37948):map__37948);
var request_url = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37812,inst_37806,inst_37814,inst_37817,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37820 = cljs.core.reverse.call(null,inst_37814);
var inst_37821 = cljs.core.map.call(null,inst_37819,inst_37820);
var inst_37822 = cljs.core.pr_str.call(null,inst_37821);
var inst_37823 = figwheel.client.utils.log.call(null,inst_37822);
var state_37892__$1 = (function (){var statearr_37950 = state_37892;
(statearr_37950[(31)] = inst_37817);

return statearr_37950;
})();
var statearr_37951_38021 = state_37892__$1;
(statearr_37951_38021[(2)] = inst_37823);

(statearr_37951_38021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (35))){
var state_37892__$1 = state_37892;
var statearr_37952_38022 = state_37892__$1;
(statearr_37952_38022[(2)] = true);

(statearr_37952_38022[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (19))){
var inst_37796 = (state_37892[(12)]);
var inst_37802 = figwheel.client.file_reloading.expand_files.call(null,inst_37796);
var state_37892__$1 = state_37892;
var statearr_37953_38023 = state_37892__$1;
(statearr_37953_38023[(2)] = inst_37802);

(statearr_37953_38023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (11))){
var state_37892__$1 = state_37892;
var statearr_37954_38024 = state_37892__$1;
(statearr_37954_38024[(2)] = null);

(statearr_37954_38024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (9))){
var inst_37785 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37955_38025 = state_37892__$1;
(statearr_37955_38025[(2)] = inst_37785);

(statearr_37955_38025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (5))){
var inst_37755 = (state_37892[(7)]);
var inst_37756 = (state_37892[(10)]);
var inst_37758 = (inst_37756 < inst_37755);
var inst_37759 = inst_37758;
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37759)){
var statearr_37956_38026 = state_37892__$1;
(statearr_37956_38026[(1)] = (7));

} else {
var statearr_37957_38027 = state_37892__$1;
(statearr_37957_38027[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (14))){
var inst_37766 = (state_37892[(22)]);
var inst_37775 = cljs.core.first.call(null,inst_37766);
var inst_37776 = figwheel.client.file_reloading.eval_body.call(null,inst_37775,opts);
var inst_37777 = cljs.core.next.call(null,inst_37766);
var inst_37753 = inst_37777;
var inst_37754 = null;
var inst_37755 = (0);
var inst_37756 = (0);
var state_37892__$1 = (function (){var statearr_37958 = state_37892;
(statearr_37958[(7)] = inst_37755);

(statearr_37958[(8)] = inst_37753);

(statearr_37958[(32)] = inst_37776);

(statearr_37958[(9)] = inst_37754);

(statearr_37958[(10)] = inst_37756);

return statearr_37958;
})();
var statearr_37959_38028 = state_37892__$1;
(statearr_37959_38028[(2)] = null);

(statearr_37959_38028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (45))){
var state_37892__$1 = state_37892;
var statearr_37960_38029 = state_37892__$1;
(statearr_37960_38029[(2)] = null);

(statearr_37960_38029[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (26))){
var inst_37809 = (state_37892[(23)]);
var inst_37810 = (state_37892[(24)]);
var inst_37812 = (state_37892[(26)]);
var inst_37806 = (state_37892[(19)]);
var inst_37814 = (state_37892[(25)]);
var inst_37829 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37831 = (function (){var all_files = inst_37806;
var res_SINGLEQUOTE_ = inst_37809;
var res = inst_37810;
var files_not_loaded = inst_37812;
var dependencies_that_loaded = inst_37814;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37812,inst_37806,inst_37814,inst_37829,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37830){
var map__37961 = p__37830;
var map__37961__$1 = ((((!((map__37961 == null)))?((((map__37961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37961):map__37961);
var namespace = cljs.core.get.call(null,map__37961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37812,inst_37806,inst_37814,inst_37829,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37832 = cljs.core.map.call(null,inst_37831,inst_37810);
var inst_37833 = cljs.core.pr_str.call(null,inst_37832);
var inst_37834 = figwheel.client.utils.log.call(null,inst_37833);
var inst_37835 = (function (){var all_files = inst_37806;
var res_SINGLEQUOTE_ = inst_37809;
var res = inst_37810;
var files_not_loaded = inst_37812;
var dependencies_that_loaded = inst_37814;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37812,inst_37806,inst_37814,inst_37829,inst_37831,inst_37832,inst_37833,inst_37834,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37809,inst_37810,inst_37812,inst_37806,inst_37814,inst_37829,inst_37831,inst_37832,inst_37833,inst_37834,state_val_37893,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37836 = setTimeout(inst_37835,(10));
var state_37892__$1 = (function (){var statearr_37963 = state_37892;
(statearr_37963[(33)] = inst_37834);

(statearr_37963[(34)] = inst_37829);

return statearr_37963;
})();
var statearr_37964_38030 = state_37892__$1;
(statearr_37964_38030[(2)] = inst_37836);

(statearr_37964_38030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (16))){
var state_37892__$1 = state_37892;
var statearr_37965_38031 = state_37892__$1;
(statearr_37965_38031[(2)] = reload_dependents);

(statearr_37965_38031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (38))){
var inst_37846 = (state_37892[(16)]);
var inst_37863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37846);
var state_37892__$1 = state_37892;
var statearr_37966_38032 = state_37892__$1;
(statearr_37966_38032[(2)] = inst_37863);

(statearr_37966_38032[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (30))){
var state_37892__$1 = state_37892;
var statearr_37967_38033 = state_37892__$1;
(statearr_37967_38033[(2)] = null);

(statearr_37967_38033[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (10))){
var inst_37766 = (state_37892[(22)]);
var inst_37768 = cljs.core.chunked_seq_QMARK_.call(null,inst_37766);
var state_37892__$1 = state_37892;
if(inst_37768){
var statearr_37968_38034 = state_37892__$1;
(statearr_37968_38034[(1)] = (13));

} else {
var statearr_37969_38035 = state_37892__$1;
(statearr_37969_38035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (18))){
var inst_37800 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37800)){
var statearr_37970_38036 = state_37892__$1;
(statearr_37970_38036[(1)] = (19));

} else {
var statearr_37971_38037 = state_37892__$1;
(statearr_37971_38037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (42))){
var state_37892__$1 = state_37892;
var statearr_37972_38038 = state_37892__$1;
(statearr_37972_38038[(2)] = null);

(statearr_37972_38038[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (37))){
var inst_37858 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37973_38039 = state_37892__$1;
(statearr_37973_38039[(2)] = inst_37858);

(statearr_37973_38039[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (8))){
var inst_37766 = (state_37892[(22)]);
var inst_37753 = (state_37892[(8)]);
var inst_37766__$1 = cljs.core.seq.call(null,inst_37753);
var state_37892__$1 = (function (){var statearr_37974 = state_37892;
(statearr_37974[(22)] = inst_37766__$1);

return statearr_37974;
})();
if(inst_37766__$1){
var statearr_37975_38040 = state_37892__$1;
(statearr_37975_38040[(1)] = (10));

} else {
var statearr_37976_38041 = state_37892__$1;
(statearr_37976_38041[(1)] = (11));

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
});})(c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34091__auto__,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto____0 = (function (){
var statearr_37980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37980[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto__);

(statearr_37980[(1)] = (1));

return statearr_37980;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto____1 = (function (state_37892){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_37892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e37981){if((e37981 instanceof Object)){
var ex__34095__auto__ = e37981;
var statearr_37982_38042 = state_37892;
(statearr_37982_38042[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38043 = state_37892;
state_37892 = G__38043;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto__ = function(state_37892){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto____1.call(this,state_37892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34205__auto__ = (function (){var statearr_37983 = f__34204__auto__.call(null);
(statearr_37983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_37983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__,map__37738,map__37738__$1,opts,before_jsload,on_jsload,reload_dependents,map__37739,map__37739__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34203__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38046,link){
var map__38049 = p__38046;
var map__38049__$1 = ((((!((map__38049 == null)))?((((map__38049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38049):map__38049);
var file = cljs.core.get.call(null,map__38049__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38049,map__38049__$1,file){
return (function (p1__38044_SHARP_,p2__38045_SHARP_){
if(cljs.core._EQ_.call(null,p1__38044_SHARP_,p2__38045_SHARP_)){
return p1__38044_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38049,map__38049__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38055){
var map__38056 = p__38055;
var map__38056__$1 = ((((!((map__38056 == null)))?((((map__38056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38056):map__38056);
var match_length = cljs.core.get.call(null,map__38056__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38056__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38051_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38051_SHARP_);
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
var args38058 = [];
var len__25826__auto___38061 = arguments.length;
var i__25827__auto___38062 = (0);
while(true){
if((i__25827__auto___38062 < len__25826__auto___38061)){
args38058.push((arguments[i__25827__auto___38062]));

var G__38063 = (i__25827__auto___38062 + (1));
i__25827__auto___38062 = G__38063;
continue;
} else {
}
break;
}

var G__38060 = args38058.length;
switch (G__38060) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38058.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38065_SHARP_,p2__38066_SHARP_){
return cljs.core.assoc.call(null,p1__38065_SHARP_,cljs.core.get.call(null,p2__38066_SHARP_,key),p2__38066_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__38067){
var map__38070 = p__38067;
var map__38070__$1 = ((((!((map__38070 == null)))?((((map__38070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38070):map__38070);
var f_data = map__38070__$1;
var file = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38072,p__38073){
var map__38082 = p__38072;
var map__38082__$1 = ((((!((map__38082 == null)))?((((map__38082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38082):map__38082);
var opts = map__38082__$1;
var on_cssload = cljs.core.get.call(null,map__38082__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38083 = p__38073;
var map__38083__$1 = ((((!((map__38083 == null)))?((((map__38083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38083):map__38083);
var files_msg = map__38083__$1;
var files = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__38086_38090 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__38087_38091 = null;
var count__38088_38092 = (0);
var i__38089_38093 = (0);
while(true){
if((i__38089_38093 < count__38088_38092)){
var f_38094 = cljs.core._nth.call(null,chunk__38087_38091,i__38089_38093);
figwheel.client.file_reloading.reload_css_file.call(null,f_38094);

var G__38095 = seq__38086_38090;
var G__38096 = chunk__38087_38091;
var G__38097 = count__38088_38092;
var G__38098 = (i__38089_38093 + (1));
seq__38086_38090 = G__38095;
chunk__38087_38091 = G__38096;
count__38088_38092 = G__38097;
i__38089_38093 = G__38098;
continue;
} else {
var temp__4657__auto___38099 = cljs.core.seq.call(null,seq__38086_38090);
if(temp__4657__auto___38099){
var seq__38086_38100__$1 = temp__4657__auto___38099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38086_38100__$1)){
var c__25562__auto___38101 = cljs.core.chunk_first.call(null,seq__38086_38100__$1);
var G__38102 = cljs.core.chunk_rest.call(null,seq__38086_38100__$1);
var G__38103 = c__25562__auto___38101;
var G__38104 = cljs.core.count.call(null,c__25562__auto___38101);
var G__38105 = (0);
seq__38086_38090 = G__38102;
chunk__38087_38091 = G__38103;
count__38088_38092 = G__38104;
i__38089_38093 = G__38105;
continue;
} else {
var f_38106 = cljs.core.first.call(null,seq__38086_38100__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38106);

var G__38107 = cljs.core.next.call(null,seq__38086_38100__$1);
var G__38108 = null;
var G__38109 = (0);
var G__38110 = (0);
seq__38086_38090 = G__38107;
chunk__38087_38091 = G__38108;
count__38088_38092 = G__38109;
i__38089_38093 = G__38110;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__38082,map__38082__$1,opts,on_cssload,map__38083,map__38083__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__38082,map__38082__$1,opts,on_cssload,map__38083,map__38083__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478445832076