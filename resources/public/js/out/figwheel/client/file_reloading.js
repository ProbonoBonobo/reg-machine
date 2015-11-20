// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__41152_SHARP_,p2__41153_SHARP_){
var and__19189__auto__ = p1__41152_SHARP_;
if(cljs.core.truth_(and__19189__auto__)){
return p2__41153_SHARP_;
} else {
return and__19189__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19201__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19201__auto__){
return or__19201__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__41155_SHARP_,p2__41154_SHARP_){
return [cljs.core.str(p2__41154_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__19201__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__19201__auto__){
return or__19201__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__19201__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__20114__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20118__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20118__auto__,method_table__20114__auto__,prefer_table__20115__auto__,method_cache__20116__auto__,cached_hierarchy__20117__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__41156){
var map__41157 = p__41156;
var map__41157__$1 = ((((!((map__41157 == null)))?((((map__41157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41157):map__41157);
var file = cljs.core.get.call(null,map__41157__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__41159){
var map__41160 = p__41159;
var map__41160__$1 = ((((!((map__41160 == null)))?((((map__41160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41160):map__41160);
var namespace = cljs.core.get.call(null,map__41160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__20114__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20118__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20118__auto__,method_table__20114__auto__,prefer_table__20115__auto__,method_cache__20116__auto__,cached_hierarchy__20117__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e41162){if((e41162 instanceof Error)){
var e = e41162;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41162;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args41163 = [];
var len__20259__auto___41166 = arguments.length;
var i__20260__auto___41167 = (0);
while(true){
if((i__20260__auto___41167 < len__20259__auto___41166)){
args41163.push((arguments[i__20260__auto___41167]));

var G__41168 = (i__20260__auto___41167 + (1));
i__20260__auto___41167 = G__41168;
continue;
} else {
}
break;
}

var G__41165 = args41163.length;
switch (G__41165) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41163.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41170,callback){
var map__41173 = p__41170;
var map__41173__$1 = ((((!((map__41173 == null)))?((((map__41173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41173):map__41173);
var file_msg = map__41173__$1;
var request_url = cljs.core.get.call(null,map__41173__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41173,map__41173__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41173,map__41173__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41175){
var map__41178 = p__41175;
var map__41178__$1 = ((((!((map__41178 == null)))?((((map__41178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41178):map__41178);
var file_msg = map__41178__$1;
var namespace = cljs.core.get.call(null,map__41178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__41178__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__19201__auto__ = meta_data;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__19189__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__19189__auto__){
var or__19201__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
var or__19201__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__19201__auto____$1)){
return or__19201__auto____$1;
} else {
var and__19189__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__19189__auto____$1){
var or__19201__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__19201__auto____$2){
return or__19201__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__19189__auto____$1;
}
}
}
} else {
return and__19189__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41180,callback){
var map__41183 = p__41180;
var map__41183__$1 = ((((!((map__41183 == null)))?((((map__41183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41183):map__41183);
var file_msg = map__41183__$1;
var request_url = cljs.core.get.call(null,map__41183__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28184__auto___41271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___41271,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___41271,out){
return (function (state_41253){
var state_val_41254 = (state_41253[(1)]);
if((state_val_41254 === (1))){
var inst_41231 = cljs.core.nth.call(null,files,(0),null);
var inst_41232 = cljs.core.nthnext.call(null,files,(1));
var inst_41233 = files;
var state_41253__$1 = (function (){var statearr_41255 = state_41253;
(statearr_41255[(7)] = inst_41231);

(statearr_41255[(8)] = inst_41232);

(statearr_41255[(9)] = inst_41233);

return statearr_41255;
})();
var statearr_41256_41272 = state_41253__$1;
(statearr_41256_41272[(2)] = null);

(statearr_41256_41272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41254 === (2))){
var inst_41236 = (state_41253[(10)]);
var inst_41233 = (state_41253[(9)]);
var inst_41236__$1 = cljs.core.nth.call(null,inst_41233,(0),null);
var inst_41237 = cljs.core.nthnext.call(null,inst_41233,(1));
var inst_41238 = (inst_41236__$1 == null);
var inst_41239 = cljs.core.not.call(null,inst_41238);
var state_41253__$1 = (function (){var statearr_41257 = state_41253;
(statearr_41257[(10)] = inst_41236__$1);

(statearr_41257[(11)] = inst_41237);

return statearr_41257;
})();
if(inst_41239){
var statearr_41258_41273 = state_41253__$1;
(statearr_41258_41273[(1)] = (4));

} else {
var statearr_41259_41274 = state_41253__$1;
(statearr_41259_41274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41254 === (3))){
var inst_41251 = (state_41253[(2)]);
var state_41253__$1 = state_41253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41253__$1,inst_41251);
} else {
if((state_val_41254 === (4))){
var inst_41236 = (state_41253[(10)]);
var inst_41241 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41236);
var state_41253__$1 = state_41253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41253__$1,(7),inst_41241);
} else {
if((state_val_41254 === (5))){
var inst_41247 = cljs.core.async.close_BANG_.call(null,out);
var state_41253__$1 = state_41253;
var statearr_41260_41275 = state_41253__$1;
(statearr_41260_41275[(2)] = inst_41247);

(statearr_41260_41275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41254 === (6))){
var inst_41249 = (state_41253[(2)]);
var state_41253__$1 = state_41253;
var statearr_41261_41276 = state_41253__$1;
(statearr_41261_41276[(2)] = inst_41249);

(statearr_41261_41276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41254 === (7))){
var inst_41237 = (state_41253[(11)]);
var inst_41243 = (state_41253[(2)]);
var inst_41244 = cljs.core.async.put_BANG_.call(null,out,inst_41243);
var inst_41233 = inst_41237;
var state_41253__$1 = (function (){var statearr_41262 = state_41253;
(statearr_41262[(12)] = inst_41244);

(statearr_41262[(9)] = inst_41233);

return statearr_41262;
})();
var statearr_41263_41277 = state_41253__$1;
(statearr_41263_41277[(2)] = null);

(statearr_41263_41277[(1)] = (2));


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
});})(c__28184__auto___41271,out))
;
return ((function (switch__28119__auto__,c__28184__auto___41271,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto____0 = (function (){
var statearr_41267 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41267[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto__);

(statearr_41267[(1)] = (1));

return statearr_41267;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto____1 = (function (state_41253){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_41253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e41268){if((e41268 instanceof Object)){
var ex__28123__auto__ = e41268;
var statearr_41269_41278 = state_41253;
(statearr_41269_41278[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41279 = state_41253;
state_41253 = G__41279;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto__ = function(state_41253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto____1.call(this,state_41253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___41271,out))
})();
var state__28186__auto__ = (function (){var statearr_41270 = f__28185__auto__.call(null);
(statearr_41270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___41271);

return statearr_41270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___41271,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__41280,p__41281){
var map__41286 = p__41280;
var map__41286__$1 = ((((!((map__41286 == null)))?((((map__41286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41286):map__41286);
var opts = map__41286__$1;
var url_rewriter = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__41287 = p__41281;
var map__41287__$1 = ((((!((map__41287 == null)))?((((map__41287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41287):map__41287);
var file_msg = map__41287__$1;
var file = cljs.core.get.call(null,map__41287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41290){
var map__41294 = p__41290;
var map__41294__$1 = ((((!((map__41294 == null)))?((((map__41294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41294):map__41294);
var eval_body__$1 = cljs.core.get.call(null,map__41294__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41294__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19189__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19189__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19189__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e41296){var e = e41296;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41301,p__41302){
var map__41529 = p__41301;
var map__41529__$1 = ((((!((map__41529 == null)))?((((map__41529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41529):map__41529);
var opts = map__41529__$1;
var before_jsload = cljs.core.get.call(null,map__41529__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41529__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__41529__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__41530 = p__41302;
var map__41530__$1 = ((((!((map__41530 == null)))?((((map__41530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41530):map__41530);
var msg = map__41530__$1;
var files = cljs.core.get.call(null,map__41530__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (state_41670){
var state_val_41671 = (state_41670[(1)]);
if((state_val_41671 === (7))){
var inst_41543 = (state_41670[(7)]);
var inst_41544 = (state_41670[(8)]);
var inst_41546 = (state_41670[(9)]);
var inst_41545 = (state_41670[(10)]);
var inst_41551 = cljs.core._nth.call(null,inst_41544,inst_41546);
var inst_41552 = figwheel.client.file_reloading.eval_body.call(null,inst_41551);
var inst_41553 = (inst_41546 + (1));
var tmp41672 = inst_41543;
var tmp41673 = inst_41544;
var tmp41674 = inst_41545;
var inst_41543__$1 = tmp41672;
var inst_41544__$1 = tmp41673;
var inst_41545__$1 = tmp41674;
var inst_41546__$1 = inst_41553;
var state_41670__$1 = (function (){var statearr_41675 = state_41670;
(statearr_41675[(7)] = inst_41543__$1);

(statearr_41675[(8)] = inst_41544__$1);

(statearr_41675[(9)] = inst_41546__$1);

(statearr_41675[(10)] = inst_41545__$1);

(statearr_41675[(11)] = inst_41552);

return statearr_41675;
})();
var statearr_41676_41755 = state_41670__$1;
(statearr_41676_41755[(2)] = null);

(statearr_41676_41755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (20))){
var inst_41592 = (state_41670[(12)]);
var inst_41589 = (state_41670[(13)]);
var inst_41595 = (state_41670[(14)]);
var inst_41588 = (state_41670[(15)]);
var inst_41593 = (state_41670[(16)]);
var inst_41598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41600 = (function (){var all_files = inst_41588;
var files_SINGLEQUOTE_ = inst_41589;
var res_SINGLEQUOTE_ = inst_41592;
var res = inst_41593;
var files_not_loaded = inst_41595;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41592,inst_41589,inst_41595,inst_41588,inst_41593,inst_41598,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (p__41599){
var map__41677 = p__41599;
var map__41677__$1 = ((((!((map__41677 == null)))?((((map__41677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41677):map__41677);
var namespace = cljs.core.get.call(null,map__41677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41592,inst_41589,inst_41595,inst_41588,inst_41593,inst_41598,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41601 = cljs.core.map.call(null,inst_41600,inst_41593);
var inst_41602 = cljs.core.pr_str.call(null,inst_41601);
var inst_41603 = figwheel.client.utils.log.call(null,inst_41602);
var inst_41604 = (function (){var all_files = inst_41588;
var files_SINGLEQUOTE_ = inst_41589;
var res_SINGLEQUOTE_ = inst_41592;
var res = inst_41593;
var files_not_loaded = inst_41595;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41592,inst_41589,inst_41595,inst_41588,inst_41593,inst_41598,inst_41600,inst_41601,inst_41602,inst_41603,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41592,inst_41589,inst_41595,inst_41588,inst_41593,inst_41598,inst_41600,inst_41601,inst_41602,inst_41603,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41605 = setTimeout(inst_41604,(10));
var state_41670__$1 = (function (){var statearr_41679 = state_41670;
(statearr_41679[(17)] = inst_41598);

(statearr_41679[(18)] = inst_41603);

return statearr_41679;
})();
var statearr_41680_41756 = state_41670__$1;
(statearr_41680_41756[(2)] = inst_41605);

(statearr_41680_41756[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (27))){
var state_41670__$1 = state_41670;
var statearr_41681_41757 = state_41670__$1;
(statearr_41681_41757[(2)] = false);

(statearr_41681_41757[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (1))){
var inst_41535 = (state_41670[(19)]);
var inst_41533 = before_jsload.call(null,files);
var inst_41534 = (function (){return ((function (inst_41535,inst_41533,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (p1__41297_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41297_SHARP_);
});
;})(inst_41535,inst_41533,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41535__$1 = cljs.core.filter.call(null,inst_41534,files);
var inst_41536 = cljs.core.not_empty.call(null,inst_41535__$1);
var state_41670__$1 = (function (){var statearr_41682 = state_41670;
(statearr_41682[(20)] = inst_41533);

(statearr_41682[(19)] = inst_41535__$1);

return statearr_41682;
})();
if(cljs.core.truth_(inst_41536)){
var statearr_41683_41758 = state_41670__$1;
(statearr_41683_41758[(1)] = (2));

} else {
var statearr_41684_41759 = state_41670__$1;
(statearr_41684_41759[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (24))){
var state_41670__$1 = state_41670;
var statearr_41685_41760 = state_41670__$1;
(statearr_41685_41760[(2)] = null);

(statearr_41685_41760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (39))){
var state_41670__$1 = state_41670;
var statearr_41686_41761 = state_41670__$1;
(statearr_41686_41761[(2)] = null);

(statearr_41686_41761[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (4))){
var inst_41580 = (state_41670[(2)]);
var inst_41581 = (function (){return ((function (inst_41580,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (p1__41298_SHARP_){
var and__19189__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41298_SHARP_);
if(cljs.core.truth_(and__19189__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41298_SHARP_));
} else {
return and__19189__auto__;
}
});
;})(inst_41580,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41582 = cljs.core.filter.call(null,inst_41581,files);
var state_41670__$1 = (function (){var statearr_41687 = state_41670;
(statearr_41687[(21)] = inst_41580);

(statearr_41687[(22)] = inst_41582);

return statearr_41687;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_41688_41762 = state_41670__$1;
(statearr_41688_41762[(1)] = (16));

} else {
var statearr_41689_41763 = state_41670__$1;
(statearr_41689_41763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (15))){
var inst_41570 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41690_41764 = state_41670__$1;
(statearr_41690_41764[(2)] = inst_41570);

(statearr_41690_41764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (21))){
var state_41670__$1 = state_41670;
var statearr_41691_41765 = state_41670__$1;
(statearr_41691_41765[(2)] = null);

(statearr_41691_41765[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (31))){
var inst_41627 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41692_41766 = state_41670__$1;
(statearr_41692_41766[(2)] = inst_41627);

(statearr_41692_41766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (32))){
var inst_41615 = (state_41670[(23)]);
var inst_41632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41615);
var state_41670__$1 = state_41670;
var statearr_41693_41767 = state_41670__$1;
(statearr_41693_41767[(2)] = inst_41632);

(statearr_41693_41767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (40))){
var inst_41638 = (state_41670[(24)]);
var inst_41656 = (state_41670[(2)]);
var inst_41657 = cljs.core.not_empty.call(null,inst_41638);
var state_41670__$1 = (function (){var statearr_41694 = state_41670;
(statearr_41694[(25)] = inst_41656);

return statearr_41694;
})();
if(cljs.core.truth_(inst_41657)){
var statearr_41695_41768 = state_41670__$1;
(statearr_41695_41768[(1)] = (41));

} else {
var statearr_41696_41769 = state_41670__$1;
(statearr_41696_41769[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (33))){
var inst_41615 = (state_41670[(23)]);
var state_41670__$1 = state_41670;
var statearr_41697_41770 = state_41670__$1;
(statearr_41697_41770[(2)] = inst_41615);

(statearr_41697_41770[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (13))){
var inst_41556 = (state_41670[(26)]);
var inst_41560 = cljs.core.chunk_first.call(null,inst_41556);
var inst_41561 = cljs.core.chunk_rest.call(null,inst_41556);
var inst_41562 = cljs.core.count.call(null,inst_41560);
var inst_41543 = inst_41561;
var inst_41544 = inst_41560;
var inst_41545 = inst_41562;
var inst_41546 = (0);
var state_41670__$1 = (function (){var statearr_41698 = state_41670;
(statearr_41698[(7)] = inst_41543);

(statearr_41698[(8)] = inst_41544);

(statearr_41698[(9)] = inst_41546);

(statearr_41698[(10)] = inst_41545);

return statearr_41698;
})();
var statearr_41699_41771 = state_41670__$1;
(statearr_41699_41771[(2)] = null);

(statearr_41699_41771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (22))){
var inst_41595 = (state_41670[(14)]);
var inst_41608 = (state_41670[(2)]);
var inst_41609 = cljs.core.not_empty.call(null,inst_41595);
var state_41670__$1 = (function (){var statearr_41700 = state_41670;
(statearr_41700[(27)] = inst_41608);

return statearr_41700;
})();
if(cljs.core.truth_(inst_41609)){
var statearr_41701_41772 = state_41670__$1;
(statearr_41701_41772[(1)] = (23));

} else {
var statearr_41702_41773 = state_41670__$1;
(statearr_41702_41773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (36))){
var state_41670__$1 = state_41670;
var statearr_41703_41774 = state_41670__$1;
(statearr_41703_41774[(2)] = null);

(statearr_41703_41774[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (41))){
var inst_41638 = (state_41670[(24)]);
var inst_41659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41638);
var inst_41660 = cljs.core.pr_str.call(null,inst_41659);
var inst_41661 = [cljs.core.str("not required: "),cljs.core.str(inst_41660)].join('');
var inst_41662 = figwheel.client.utils.log.call(null,inst_41661);
var state_41670__$1 = state_41670;
var statearr_41704_41775 = state_41670__$1;
(statearr_41704_41775[(2)] = inst_41662);

(statearr_41704_41775[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (43))){
var inst_41665 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41705_41776 = state_41670__$1;
(statearr_41705_41776[(2)] = inst_41665);

(statearr_41705_41776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (29))){
var state_41670__$1 = state_41670;
var statearr_41706_41777 = state_41670__$1;
(statearr_41706_41777[(2)] = true);

(statearr_41706_41777[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (6))){
var inst_41577 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41707_41778 = state_41670__$1;
(statearr_41707_41778[(2)] = inst_41577);

(statearr_41707_41778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (28))){
var inst_41630 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
if(cljs.core.truth_(inst_41630)){
var statearr_41708_41779 = state_41670__$1;
(statearr_41708_41779[(1)] = (32));

} else {
var statearr_41709_41780 = state_41670__$1;
(statearr_41709_41780[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (25))){
var inst_41668 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41670__$1,inst_41668);
} else {
if((state_val_41671 === (34))){
var inst_41636 = (state_41670[(28)]);
var inst_41635 = (state_41670[(2)]);
var inst_41636__$1 = cljs.core.get.call(null,inst_41635,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41637 = cljs.core.get.call(null,inst_41635,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_41638 = cljs.core.get.call(null,inst_41635,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41639 = cljs.core.not_empty.call(null,inst_41636__$1);
var state_41670__$1 = (function (){var statearr_41710 = state_41670;
(statearr_41710[(28)] = inst_41636__$1);

(statearr_41710[(29)] = inst_41637);

(statearr_41710[(24)] = inst_41638);

return statearr_41710;
})();
if(cljs.core.truth_(inst_41639)){
var statearr_41711_41781 = state_41670__$1;
(statearr_41711_41781[(1)] = (35));

} else {
var statearr_41712_41782 = state_41670__$1;
(statearr_41712_41782[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (17))){
var inst_41582 = (state_41670[(22)]);
var state_41670__$1 = state_41670;
var statearr_41713_41783 = state_41670__$1;
(statearr_41713_41783[(2)] = inst_41582);

(statearr_41713_41783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (3))){
var state_41670__$1 = state_41670;
var statearr_41714_41784 = state_41670__$1;
(statearr_41714_41784[(2)] = null);

(statearr_41714_41784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (12))){
var inst_41573 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41715_41785 = state_41670__$1;
(statearr_41715_41785[(2)] = inst_41573);

(statearr_41715_41785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (2))){
var inst_41535 = (state_41670[(19)]);
var inst_41542 = cljs.core.seq.call(null,inst_41535);
var inst_41543 = inst_41542;
var inst_41544 = null;
var inst_41545 = (0);
var inst_41546 = (0);
var state_41670__$1 = (function (){var statearr_41716 = state_41670;
(statearr_41716[(7)] = inst_41543);

(statearr_41716[(8)] = inst_41544);

(statearr_41716[(9)] = inst_41546);

(statearr_41716[(10)] = inst_41545);

return statearr_41716;
})();
var statearr_41717_41786 = state_41670__$1;
(statearr_41717_41786[(2)] = null);

(statearr_41717_41786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (23))){
var inst_41615 = (state_41670[(23)]);
var inst_41592 = (state_41670[(12)]);
var inst_41589 = (state_41670[(13)]);
var inst_41595 = (state_41670[(14)]);
var inst_41588 = (state_41670[(15)]);
var inst_41593 = (state_41670[(16)]);
var inst_41611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41614 = (function (){var all_files = inst_41588;
var files_SINGLEQUOTE_ = inst_41589;
var res_SINGLEQUOTE_ = inst_41592;
var res = inst_41593;
var files_not_loaded = inst_41595;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41615,inst_41592,inst_41589,inst_41595,inst_41588,inst_41593,inst_41611,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (p__41613){
var map__41718 = p__41613;
var map__41718__$1 = ((((!((map__41718 == null)))?((((map__41718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41718):map__41718);
var meta_data = cljs.core.get.call(null,map__41718__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41615,inst_41592,inst_41589,inst_41595,inst_41588,inst_41593,inst_41611,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41615__$1 = cljs.core.group_by.call(null,inst_41614,inst_41595);
var inst_41617 = (inst_41615__$1 == null);
var inst_41618 = cljs.core.not.call(null,inst_41617);
var state_41670__$1 = (function (){var statearr_41720 = state_41670;
(statearr_41720[(23)] = inst_41615__$1);

(statearr_41720[(30)] = inst_41611);

return statearr_41720;
})();
if(inst_41618){
var statearr_41721_41787 = state_41670__$1;
(statearr_41721_41787[(1)] = (26));

} else {
var statearr_41722_41788 = state_41670__$1;
(statearr_41722_41788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (35))){
var inst_41636 = (state_41670[(28)]);
var inst_41641 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41636);
var inst_41642 = cljs.core.pr_str.call(null,inst_41641);
var inst_41643 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41642)].join('');
var inst_41644 = figwheel.client.utils.log.call(null,inst_41643);
var state_41670__$1 = state_41670;
var statearr_41723_41789 = state_41670__$1;
(statearr_41723_41789[(2)] = inst_41644);

(statearr_41723_41789[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (19))){
var inst_41592 = (state_41670[(12)]);
var inst_41589 = (state_41670[(13)]);
var inst_41588 = (state_41670[(15)]);
var inst_41593 = (state_41670[(16)]);
var inst_41592__$1 = (state_41670[(2)]);
var inst_41593__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41592__$1);
var inst_41594 = (function (){var all_files = inst_41588;
var files_SINGLEQUOTE_ = inst_41589;
var res_SINGLEQUOTE_ = inst_41592__$1;
var res = inst_41593__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_41592,inst_41589,inst_41588,inst_41593,inst_41592__$1,inst_41593__$1,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (p1__41300_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41300_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_41592,inst_41589,inst_41588,inst_41593,inst_41592__$1,inst_41593__$1,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41595 = cljs.core.filter.call(null,inst_41594,inst_41592__$1);
var inst_41596 = cljs.core.not_empty.call(null,inst_41593__$1);
var state_41670__$1 = (function (){var statearr_41724 = state_41670;
(statearr_41724[(12)] = inst_41592__$1);

(statearr_41724[(14)] = inst_41595);

(statearr_41724[(16)] = inst_41593__$1);

return statearr_41724;
})();
if(cljs.core.truth_(inst_41596)){
var statearr_41725_41790 = state_41670__$1;
(statearr_41725_41790[(1)] = (20));

} else {
var statearr_41726_41791 = state_41670__$1;
(statearr_41726_41791[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (11))){
var state_41670__$1 = state_41670;
var statearr_41727_41792 = state_41670__$1;
(statearr_41727_41792[(2)] = null);

(statearr_41727_41792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (9))){
var inst_41575 = (state_41670[(2)]);
var state_41670__$1 = state_41670;
var statearr_41728_41793 = state_41670__$1;
(statearr_41728_41793[(2)] = inst_41575);

(statearr_41728_41793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (5))){
var inst_41546 = (state_41670[(9)]);
var inst_41545 = (state_41670[(10)]);
var inst_41548 = (inst_41546 < inst_41545);
var inst_41549 = inst_41548;
var state_41670__$1 = state_41670;
if(cljs.core.truth_(inst_41549)){
var statearr_41729_41794 = state_41670__$1;
(statearr_41729_41794[(1)] = (7));

} else {
var statearr_41730_41795 = state_41670__$1;
(statearr_41730_41795[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (14))){
var inst_41556 = (state_41670[(26)]);
var inst_41565 = cljs.core.first.call(null,inst_41556);
var inst_41566 = figwheel.client.file_reloading.eval_body.call(null,inst_41565);
var inst_41567 = cljs.core.next.call(null,inst_41556);
var inst_41543 = inst_41567;
var inst_41544 = null;
var inst_41545 = (0);
var inst_41546 = (0);
var state_41670__$1 = (function (){var statearr_41731 = state_41670;
(statearr_41731[(7)] = inst_41543);

(statearr_41731[(8)] = inst_41544);

(statearr_41731[(9)] = inst_41546);

(statearr_41731[(10)] = inst_41545);

(statearr_41731[(31)] = inst_41566);

return statearr_41731;
})();
var statearr_41732_41796 = state_41670__$1;
(statearr_41732_41796[(2)] = null);

(statearr_41732_41796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (26))){
var inst_41615 = (state_41670[(23)]);
var inst_41620 = inst_41615.cljs$lang$protocol_mask$partition0$;
var inst_41621 = (inst_41620 & (64));
var inst_41622 = inst_41615.cljs$core$ISeq$;
var inst_41623 = (inst_41621) || (inst_41622);
var state_41670__$1 = state_41670;
if(cljs.core.truth_(inst_41623)){
var statearr_41733_41797 = state_41670__$1;
(statearr_41733_41797[(1)] = (29));

} else {
var statearr_41734_41798 = state_41670__$1;
(statearr_41734_41798[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (16))){
var inst_41582 = (state_41670[(22)]);
var inst_41584 = (function (){var all_files = inst_41582;
return ((function (all_files,inst_41582,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function (p1__41299_SHARP_){
return cljs.core.update_in.call(null,p1__41299_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_41582,state_val_41671,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var inst_41585 = cljs.core.map.call(null,inst_41584,inst_41582);
var state_41670__$1 = state_41670;
var statearr_41735_41799 = state_41670__$1;
(statearr_41735_41799[(2)] = inst_41585);

(statearr_41735_41799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (38))){
var inst_41637 = (state_41670[(29)]);
var inst_41650 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41637);
var inst_41651 = cljs.core.pr_str.call(null,inst_41650);
var inst_41652 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_41651)].join('');
var inst_41653 = figwheel.client.utils.log.call(null,inst_41652);
var state_41670__$1 = state_41670;
var statearr_41736_41800 = state_41670__$1;
(statearr_41736_41800[(2)] = inst_41653);

(statearr_41736_41800[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (30))){
var state_41670__$1 = state_41670;
var statearr_41737_41801 = state_41670__$1;
(statearr_41737_41801[(2)] = false);

(statearr_41737_41801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (10))){
var inst_41556 = (state_41670[(26)]);
var inst_41558 = cljs.core.chunked_seq_QMARK_.call(null,inst_41556);
var state_41670__$1 = state_41670;
if(inst_41558){
var statearr_41738_41802 = state_41670__$1;
(statearr_41738_41802[(1)] = (13));

} else {
var statearr_41739_41803 = state_41670__$1;
(statearr_41739_41803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (18))){
var inst_41589 = (state_41670[(13)]);
var inst_41588 = (state_41670[(15)]);
var inst_41588__$1 = (state_41670[(2)]);
var inst_41589__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_41588__$1);
var inst_41590 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41589__$1);
var state_41670__$1 = (function (){var statearr_41740 = state_41670;
(statearr_41740[(13)] = inst_41589__$1);

(statearr_41740[(15)] = inst_41588__$1);

return statearr_41740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41670__$1,(19),inst_41590);
} else {
if((state_val_41671 === (42))){
var state_41670__$1 = state_41670;
var statearr_41741_41804 = state_41670__$1;
(statearr_41741_41804[(2)] = null);

(statearr_41741_41804[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (37))){
var inst_41637 = (state_41670[(29)]);
var inst_41647 = (state_41670[(2)]);
var inst_41648 = cljs.core.not_empty.call(null,inst_41637);
var state_41670__$1 = (function (){var statearr_41742 = state_41670;
(statearr_41742[(32)] = inst_41647);

return statearr_41742;
})();
if(cljs.core.truth_(inst_41648)){
var statearr_41743_41805 = state_41670__$1;
(statearr_41743_41805[(1)] = (38));

} else {
var statearr_41744_41806 = state_41670__$1;
(statearr_41744_41806[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41671 === (8))){
var inst_41543 = (state_41670[(7)]);
var inst_41556 = (state_41670[(26)]);
var inst_41556__$1 = cljs.core.seq.call(null,inst_41543);
var state_41670__$1 = (function (){var statearr_41745 = state_41670;
(statearr_41745[(26)] = inst_41556__$1);

return statearr_41745;
})();
if(inst_41556__$1){
var statearr_41746_41807 = state_41670__$1;
(statearr_41746_41807[(1)] = (10));

} else {
var statearr_41747_41808 = state_41670__$1;
(statearr_41747_41808[(1)] = (11));

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
});})(c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
;
return ((function (switch__28119__auto__,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto____0 = (function (){
var statearr_41751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41751[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto__);

(statearr_41751[(1)] = (1));

return statearr_41751;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto____1 = (function (state_41670){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_41670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e41752){if((e41752 instanceof Object)){
var ex__28123__auto__ = e41752;
var statearr_41753_41809 = state_41670;
(statearr_41753_41809[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41810 = state_41670;
state_41670 = G__41810;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto__ = function(state_41670){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto____1.call(this,state_41670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
})();
var state__28186__auto__ = (function (){var statearr_41754 = f__28185__auto__.call(null);
(statearr_41754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_41754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__,map__41529,map__41529__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41530,map__41530__$1,msg,files))
);

return c__28184__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41813,link){
var map__41816 = p__41813;
var map__41816__$1 = ((((!((map__41816 == null)))?((((map__41816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41816):map__41816);
var file = cljs.core.get.call(null,map__41816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__41816,map__41816__$1,file){
return (function (p1__41811_SHARP_,p2__41812_SHARP_){
if(cljs.core._EQ_.call(null,p1__41811_SHARP_,p2__41812_SHARP_)){
return p1__41811_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__41816,map__41816__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41822){
var map__41823 = p__41822;
var map__41823__$1 = ((((!((map__41823 == null)))?((((map__41823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41823):map__41823);
var match_length = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41823__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41818_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41818_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
var args41825 = [];
var len__20259__auto___41828 = arguments.length;
var i__20260__auto___41829 = (0);
while(true){
if((i__20260__auto___41829 < len__20259__auto___41828)){
args41825.push((arguments[i__20260__auto___41829]));

var G__41830 = (i__20260__auto___41829 + (1));
i__20260__auto___41829 = G__41830;
continue;
} else {
}
break;
}

var G__41827 = args41825.length;
switch (G__41827) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41825.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41832){
var map__41835 = p__41832;
var map__41835__$1 = ((((!((map__41835 == null)))?((((map__41835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41835):map__41835);
var f_data = map__41835__$1;
var file = cljs.core.get.call(null,map__41835__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__41835__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__19201__auto__ = request_url;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41837,files_msg){
var map__41860 = p__41837;
var map__41860__$1 = ((((!((map__41860 == null)))?((((map__41860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41860):map__41860);
var opts = map__41860__$1;
var on_cssload = cljs.core.get.call(null,map__41860__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41862_41882 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41863_41883 = null;
var count__41864_41884 = (0);
var i__41865_41885 = (0);
while(true){
if((i__41865_41885 < count__41864_41884)){
var f_41886 = cljs.core._nth.call(null,chunk__41863_41883,i__41865_41885);
figwheel.client.file_reloading.reload_css_file.call(null,f_41886);

var G__41887 = seq__41862_41882;
var G__41888 = chunk__41863_41883;
var G__41889 = count__41864_41884;
var G__41890 = (i__41865_41885 + (1));
seq__41862_41882 = G__41887;
chunk__41863_41883 = G__41888;
count__41864_41884 = G__41889;
i__41865_41885 = G__41890;
continue;
} else {
var temp__4425__auto___41891 = cljs.core.seq.call(null,seq__41862_41882);
if(temp__4425__auto___41891){
var seq__41862_41892__$1 = temp__4425__auto___41891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41862_41892__$1)){
var c__20004__auto___41893 = cljs.core.chunk_first.call(null,seq__41862_41892__$1);
var G__41894 = cljs.core.chunk_rest.call(null,seq__41862_41892__$1);
var G__41895 = c__20004__auto___41893;
var G__41896 = cljs.core.count.call(null,c__20004__auto___41893);
var G__41897 = (0);
seq__41862_41882 = G__41894;
chunk__41863_41883 = G__41895;
count__41864_41884 = G__41896;
i__41865_41885 = G__41897;
continue;
} else {
var f_41898 = cljs.core.first.call(null,seq__41862_41892__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41898);

var G__41899 = cljs.core.next.call(null,seq__41862_41892__$1);
var G__41900 = null;
var G__41901 = (0);
var G__41902 = (0);
seq__41862_41882 = G__41899;
chunk__41863_41883 = G__41900;
count__41864_41884 = G__41901;
i__41865_41885 = G__41902;
continue;
}
} else {
}
}
break;
}

var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__,map__41860,map__41860__$1,opts,on_cssload){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__,map__41860,map__41860__$1,opts,on_cssload){
return (function (state_41872){
var state_val_41873 = (state_41872[(1)]);
if((state_val_41873 === (1))){
var inst_41866 = cljs.core.async.timeout.call(null,(100));
var state_41872__$1 = state_41872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41872__$1,(2),inst_41866);
} else {
if((state_val_41873 === (2))){
var inst_41868 = (state_41872[(2)]);
var inst_41869 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_41870 = on_cssload.call(null,inst_41869);
var state_41872__$1 = (function (){var statearr_41874 = state_41872;
(statearr_41874[(7)] = inst_41868);

return statearr_41874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41872__$1,inst_41870);
} else {
return null;
}
}
});})(c__28184__auto__,map__41860,map__41860__$1,opts,on_cssload))
;
return ((function (switch__28119__auto__,c__28184__auto__,map__41860,map__41860__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto____0 = (function (){
var statearr_41878 = [null,null,null,null,null,null,null,null];
(statearr_41878[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto__);

(statearr_41878[(1)] = (1));

return statearr_41878;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto____1 = (function (state_41872){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_41872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e41879){if((e41879 instanceof Object)){
var ex__28123__auto__ = e41879;
var statearr_41880_41903 = state_41872;
(statearr_41880_41903[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41904 = state_41872;
state_41872 = G__41904;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto__ = function(state_41872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto____1.call(this,state_41872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__,map__41860,map__41860__$1,opts,on_cssload))
})();
var state__28186__auto__ = (function (){var statearr_41881 = f__28185__auto__.call(null);
(statearr_41881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_41881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__,map__41860,map__41860__$1,opts,on_cssload))
);

return c__28184__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444632663937