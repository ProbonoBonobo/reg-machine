// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.core');
goog.require('schema.core');
/**
 * Returns an atom-like object for reading and writing Om component
 * state.
 * 
 * Note: Behavior may exactly not match atoms when deref'ing
 * immediately following a reset!/swap! because Om processes state
 * changes asynchronously in separate render phases.
 */
om_tools.core.state_proxy = (function om_tools$core$state_proxy(owner){
if(cljs.core.truth_(owner)){
var get_state = (function (){
return om.core.get_state.call(null,owner);
});
if(typeof om_tools.core.t_om_tools$core82983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
om_tools.core.t_om_tools$core82983 = (function (state_proxy,owner,get_state,meta82984){
this.state_proxy = state_proxy;
this.owner = owner;
this.get_state = get_state;
this.meta82984 = meta82984;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 98304;
})
om_tools.core.t_om_tools$core82983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (get_state){
return (function (_82985,meta82984__$1){
var self__ = this;
var _82985__$1 = this;
return (new om_tools.core.t_om_tools$core82983(self__.state_proxy,self__.owner,self__.get_state,meta82984__$1));
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (get_state){
return (function (_82985){
var self__ = this;
var _82985__$1 = this;
return self__.meta82984;
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (get_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.get_state.call(null);
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (get_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,v);
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (get_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null)));
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (get_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x));
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (get_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x,y));
});})(get_state))
;

om_tools.core.t_om_tools$core82983.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (get_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,cljs.core.apply.call(null,f,self__.get_state.call(null),x,y,more));
});})(get_state))
;

om_tools.core.t_om_tools$core82983.getBasis = ((function (get_state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state-proxy","state-proxy",1999831324,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an atom-like object for reading and writing Om component\n   state.\n\n   Note: Behavior may exactly not match atoms when deref'ing\n   immediately following a reset!/swap! because Om processes state\n   changes asynchronously in separate render phases."], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),new cljs.core.Symbol(null,"meta82984","meta82984",1561883754,null)], null);
});})(get_state))
;

om_tools.core.t_om_tools$core82983.cljs$lang$type = true;

om_tools.core.t_om_tools$core82983.cljs$lang$ctorStr = "om-tools.core/t_om_tools$core82983";

om_tools.core.t_om_tools$core82983.cljs$lang$ctorPrWriter = ((function (get_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-tools.core/t_om_tools$core82983");
});})(get_state))
;

om_tools.core.__GT_t_om_tools$core82983 = ((function (get_state){
return (function om_tools$core$state_proxy_$___GT_t_om_tools$core82983(state_proxy__$1,owner__$1,get_state__$1,meta82984){
return (new om_tools.core.t_om_tools$core82983(state_proxy__$1,owner__$1,get_state__$1,meta82984));
});})(get_state))
;

}

return (new om_tools.core.t_om_tools$core82983(om_tools$core$state_proxy,owner,get_state,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
/**
 * Calls om.core/set-state! when current value not= to v and returns
 * updated owner, otherwise nil.
 * Used to prevent no-op updates from entering render queue
 */
om_tools.core.set_state_QMARK__BANG_ = (function om_tools$core$set_state_QMARK__BANG_(var_args){
var args82986 = [];
var len__25826__auto___82989 = arguments.length;
var i__25827__auto___82990 = (0);
while(true){
if((i__25827__auto___82990 < len__25826__auto___82989)){
args82986.push((arguments[i__25827__auto___82990]));

var G__82991 = (i__25827__auto___82990 + (1));
i__25827__auto___82990 = G__82991;
continue;
} else {
}
break;
}

var G__82988 = args82986.length;
switch (G__82988) {
case 2:
return om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82986.length)].join('')));

}
});

om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,v);
}
});

om_tools.core.set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner,korks))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,korks,v);
}
});

om_tools.core.set_state_QMARK__BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1478402677562