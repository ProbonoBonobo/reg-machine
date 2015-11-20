// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !(((goog["nodeGlobalRequire"]) == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args41140 = [];
var len__20259__auto___41146 = arguments.length;
var i__20260__auto___41147 = (0);
while(true){
if((i__20260__auto___41147 < len__20259__auto___41146)){
args41140.push((arguments[i__20260__auto___41147]));

var G__41148 = (i__20260__auto___41147 + (1));
i__20260__auto___41147 = G__41148;
continue;
} else {
}
break;
}

var G__41142 = args41140.length;
switch (G__41142) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41140.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__41143 = cljs.core._EQ_;
var expr__41144 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__41143.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__41144))){
return ((function (pred__41143,expr__41144){
return (function (p1__41136_SHARP_){
return console.warn(p1__41136_SHARP_);
});
;})(pred__41143,expr__41144))
} else {
if(cljs.core.truth_(pred__41143.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__41144))){
return ((function (pred__41143,expr__41144){
return (function (p1__41137_SHARP_){
return console.debug(p1__41137_SHARP_);
});
;})(pred__41143,expr__41144))
} else {
if(cljs.core.truth_(pred__41143.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__41144))){
return ((function (pred__41143,expr__41144){
return (function (p1__41138_SHARP_){
return console.error(p1__41138_SHARP_);
});
;})(pred__41143,expr__41144))
} else {
return ((function (pred__41143,expr__41144){
return (function (p1__41139_SHARP_){
return console.log(p1__41139_SHARP_);
});
;})(pred__41143,expr__41144))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1444632663630