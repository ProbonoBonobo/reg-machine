// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async36958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36958 = (function (fn_handler,f,meta36959){
this.fn_handler = fn_handler;
this.f = f;
this.meta36959 = meta36959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36960,meta36959__$1){
var self__ = this;
var _36960__$1 = this;
return (new cljs.core.async.t_cljs$core$async36958(self__.fn_handler,self__.f,meta36959__$1));
});

cljs.core.async.t_cljs$core$async36958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36960){
var self__ = this;
var _36960__$1 = this;
return self__.meta36959;
});

cljs.core.async.t_cljs$core$async36958.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta36959","meta36959",-1212672560,null)], null);
});

cljs.core.async.t_cljs$core$async36958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36958";

cljs.core.async.t_cljs$core$async36958.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async36958");
});

cljs.core.async.__GT_t_cljs$core$async36958 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async36958(fn_handler__$1,f__$1,meta36959){
return (new cljs.core.async.t_cljs$core$async36958(fn_handler__$1,f__$1,meta36959));
});

}

return (new cljs.core.async.t_cljs$core$async36958(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args36963 = [];
var len__20259__auto___36966 = arguments.length;
var i__20260__auto___36967 = (0);
while(true){
if((i__20260__auto___36967 < len__20259__auto___36966)){
args36963.push((arguments[i__20260__auto___36967]));

var G__36968 = (i__20260__auto___36967 + (1));
i__20260__auto___36967 = G__36968;
continue;
} else {
}
break;
}

var G__36965 = args36963.length;
switch (G__36965) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36963.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args36970 = [];
var len__20259__auto___36973 = arguments.length;
var i__20260__auto___36974 = (0);
while(true){
if((i__20260__auto___36974 < len__20259__auto___36973)){
args36970.push((arguments[i__20260__auto___36974]));

var G__36975 = (i__20260__auto___36974 + (1));
i__20260__auto___36974 = G__36975;
continue;
} else {
}
break;
}

var G__36972 = args36970.length;
switch (G__36972) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36970.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36977 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36977);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36977,ret){
return (function (){
return fn1.call(null,val_36977);
});})(val_36977,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args36978 = [];
var len__20259__auto___36981 = arguments.length;
var i__20260__auto___36982 = (0);
while(true){
if((i__20260__auto___36982 < len__20259__auto___36981)){
args36978.push((arguments[i__20260__auto___36982]));

var G__36983 = (i__20260__auto___36982 + (1));
i__20260__auto___36982 = G__36983;
continue;
} else {
}
break;
}

var G__36980 = args36978.length;
switch (G__36980) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36978.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20104__auto___36985 = n;
var x_36986 = (0);
while(true){
if((x_36986 < n__20104__auto___36985)){
(a[x_36986] = (0));

var G__36987 = (x_36986 + (1));
x_36986 = G__36987;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36988 = (i + (1));
i = G__36988;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36992 = (function (alt_flag,flag,meta36993){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36993 = meta36993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36994,meta36993__$1){
var self__ = this;
var _36994__$1 = this;
return (new cljs.core.async.t_cljs$core$async36992(self__.alt_flag,self__.flag,meta36993__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36994){
var self__ = this;
var _36994__$1 = this;
return self__.meta36993;
});})(flag))
;

cljs.core.async.t_cljs$core$async36992.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36992.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36993","meta36993",-183193947,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36992";

cljs.core.async.t_cljs$core$async36992.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async36992");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36992 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36992(alt_flag__$1,flag__$1,meta36993){
return (new cljs.core.async.t_cljs$core$async36992(alt_flag__$1,flag__$1,meta36993));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36992(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36998 = (function (alt_handler,flag,cb,meta36999){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36999 = meta36999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37000,meta36999__$1){
var self__ = this;
var _37000__$1 = this;
return (new cljs.core.async.t_cljs$core$async36998(self__.alt_handler,self__.flag,self__.cb,meta36999__$1));
});

cljs.core.async.t_cljs$core$async36998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37000){
var self__ = this;
var _37000__$1 = this;
return self__.meta36999;
});

cljs.core.async.t_cljs$core$async36998.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36999","meta36999",1025868868,null)], null);
});

cljs.core.async.t_cljs$core$async36998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36998";

cljs.core.async.t_cljs$core$async36998.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async36998");
});

cljs.core.async.__GT_t_cljs$core$async36998 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36998(alt_handler__$1,flag__$1,cb__$1,meta36999){
return (new cljs.core.async.t_cljs$core$async36998(alt_handler__$1,flag__$1,cb__$1,meta36999));
});

}

return (new cljs.core.async.t_cljs$core$async36998(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37001_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37001_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37002_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37002_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19201__auto__ = wport;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37003 = (i + (1));
i = G__37003;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19201__auto__ = ret;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19189__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19189__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19189__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___37009 = arguments.length;
var i__20260__auto___37010 = (0);
while(true){
if((i__20260__auto___37010 < len__20259__auto___37009)){
args__20266__auto__.push((arguments[i__20260__auto___37010]));

var G__37011 = (i__20260__auto___37010 + (1));
i__20260__auto___37010 = G__37011;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37006){
var map__37007 = p__37006;
var map__37007__$1 = ((((!((map__37007 == null)))?((((map__37007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37007):map__37007);
var opts = map__37007__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37004){
var G__37005 = cljs.core.first.call(null,seq37004);
var seq37004__$1 = cljs.core.next.call(null,seq37004);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37005,seq37004__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37012 = [];
var len__20259__auto___37062 = arguments.length;
var i__20260__auto___37063 = (0);
while(true){
if((i__20260__auto___37063 < len__20259__auto___37062)){
args37012.push((arguments[i__20260__auto___37063]));

var G__37064 = (i__20260__auto___37063 + (1));
i__20260__auto___37063 = G__37064;
continue;
} else {
}
break;
}

var G__37014 = args37012.length;
switch (G__37014) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37012.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28184__auto___37066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___37066){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___37066){
return (function (state_37038){
var state_val_37039 = (state_37038[(1)]);
if((state_val_37039 === (7))){
var inst_37034 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37040_37067 = state_37038__$1;
(statearr_37040_37067[(2)] = inst_37034);

(statearr_37040_37067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (1))){
var state_37038__$1 = state_37038;
var statearr_37041_37068 = state_37038__$1;
(statearr_37041_37068[(2)] = null);

(statearr_37041_37068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (4))){
var inst_37017 = (state_37038[(7)]);
var inst_37017__$1 = (state_37038[(2)]);
var inst_37018 = (inst_37017__$1 == null);
var state_37038__$1 = (function (){var statearr_37042 = state_37038;
(statearr_37042[(7)] = inst_37017__$1);

return statearr_37042;
})();
if(cljs.core.truth_(inst_37018)){
var statearr_37043_37069 = state_37038__$1;
(statearr_37043_37069[(1)] = (5));

} else {
var statearr_37044_37070 = state_37038__$1;
(statearr_37044_37070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (13))){
var state_37038__$1 = state_37038;
var statearr_37045_37071 = state_37038__$1;
(statearr_37045_37071[(2)] = null);

(statearr_37045_37071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (6))){
var inst_37017 = (state_37038[(7)]);
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37038__$1,(11),to,inst_37017);
} else {
if((state_val_37039 === (3))){
var inst_37036 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37038__$1,inst_37036);
} else {
if((state_val_37039 === (12))){
var state_37038__$1 = state_37038;
var statearr_37046_37072 = state_37038__$1;
(statearr_37046_37072[(2)] = null);

(statearr_37046_37072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (2))){
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37038__$1,(4),from);
} else {
if((state_val_37039 === (11))){
var inst_37027 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
if(cljs.core.truth_(inst_37027)){
var statearr_37047_37073 = state_37038__$1;
(statearr_37047_37073[(1)] = (12));

} else {
var statearr_37048_37074 = state_37038__$1;
(statearr_37048_37074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (9))){
var state_37038__$1 = state_37038;
var statearr_37049_37075 = state_37038__$1;
(statearr_37049_37075[(2)] = null);

(statearr_37049_37075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (5))){
var state_37038__$1 = state_37038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37050_37076 = state_37038__$1;
(statearr_37050_37076[(1)] = (8));

} else {
var statearr_37051_37077 = state_37038__$1;
(statearr_37051_37077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (14))){
var inst_37032 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37052_37078 = state_37038__$1;
(statearr_37052_37078[(2)] = inst_37032);

(statearr_37052_37078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (10))){
var inst_37024 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37053_37079 = state_37038__$1;
(statearr_37053_37079[(2)] = inst_37024);

(statearr_37053_37079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (8))){
var inst_37021 = cljs.core.async.close_BANG_.call(null,to);
var state_37038__$1 = state_37038;
var statearr_37054_37080 = state_37038__$1;
(statearr_37054_37080[(2)] = inst_37021);

(statearr_37054_37080[(1)] = (10));


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
});})(c__28184__auto___37066))
;
return ((function (switch__28119__auto__,c__28184__auto___37066){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_37058 = [null,null,null,null,null,null,null,null];
(statearr_37058[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_37058[(1)] = (1));

return statearr_37058;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_37038){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37059){if((e37059 instanceof Object)){
var ex__28123__auto__ = e37059;
var statearr_37060_37081 = state_37038;
(statearr_37060_37081[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_37038;
state_37038 = G__37082;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_37038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_37038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___37066))
})();
var state__28186__auto__ = (function (){var statearr_37061 = f__28185__auto__.call(null);
(statearr_37061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___37066);

return statearr_37061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___37066))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37266){
var vec__37267 = p__37266;
var v = cljs.core.nth.call(null,vec__37267,(0),null);
var p = cljs.core.nth.call(null,vec__37267,(1),null);
var job = vec__37267;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28184__auto___37449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___37449,res,vec__37267,v,p,job,jobs,results){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___37449,res,vec__37267,v,p,job,jobs,results){
return (function (state_37272){
var state_val_37273 = (state_37272[(1)]);
if((state_val_37273 === (1))){
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37272__$1,(2),res,v);
} else {
if((state_val_37273 === (2))){
var inst_37269 = (state_37272[(2)]);
var inst_37270 = cljs.core.async.close_BANG_.call(null,res);
var state_37272__$1 = (function (){var statearr_37274 = state_37272;
(statearr_37274[(7)] = inst_37269);

return statearr_37274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37272__$1,inst_37270);
} else {
return null;
}
}
});})(c__28184__auto___37449,res,vec__37267,v,p,job,jobs,results))
;
return ((function (switch__28119__auto__,c__28184__auto___37449,res,vec__37267,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0 = (function (){
var statearr_37278 = [null,null,null,null,null,null,null,null];
(statearr_37278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__);

(statearr_37278[(1)] = (1));

return statearr_37278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1 = (function (state_37272){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37279){if((e37279 instanceof Object)){
var ex__28123__auto__ = e37279;
var statearr_37280_37450 = state_37272;
(statearr_37280_37450[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37451 = state_37272;
state_37272 = G__37451;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = function(state_37272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1.call(this,state_37272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___37449,res,vec__37267,v,p,job,jobs,results))
})();
var state__28186__auto__ = (function (){var statearr_37281 = f__28185__auto__.call(null);
(statearr_37281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___37449);

return statearr_37281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___37449,res,vec__37267,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37282){
var vec__37283 = p__37282;
var v = cljs.core.nth.call(null,vec__37283,(0),null);
var p = cljs.core.nth.call(null,vec__37283,(1),null);
var job = vec__37283;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20104__auto___37452 = n;
var __37453 = (0);
while(true){
if((__37453 < n__20104__auto___37452)){
var G__37284_37454 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37284_37454) {
case "compute":
var c__28184__auto___37456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37453,c__28184__auto___37456,G__37284_37454,n__20104__auto___37452,jobs,results,process,async){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (__37453,c__28184__auto___37456,G__37284_37454,n__20104__auto___37452,jobs,results,process,async){
return (function (state_37297){
var state_val_37298 = (state_37297[(1)]);
if((state_val_37298 === (1))){
var state_37297__$1 = state_37297;
var statearr_37299_37457 = state_37297__$1;
(statearr_37299_37457[(2)] = null);

(statearr_37299_37457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37298 === (2))){
var state_37297__$1 = state_37297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37297__$1,(4),jobs);
} else {
if((state_val_37298 === (3))){
var inst_37295 = (state_37297[(2)]);
var state_37297__$1 = state_37297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37297__$1,inst_37295);
} else {
if((state_val_37298 === (4))){
var inst_37287 = (state_37297[(2)]);
var inst_37288 = process.call(null,inst_37287);
var state_37297__$1 = state_37297;
if(cljs.core.truth_(inst_37288)){
var statearr_37300_37458 = state_37297__$1;
(statearr_37300_37458[(1)] = (5));

} else {
var statearr_37301_37459 = state_37297__$1;
(statearr_37301_37459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37298 === (5))){
var state_37297__$1 = state_37297;
var statearr_37302_37460 = state_37297__$1;
(statearr_37302_37460[(2)] = null);

(statearr_37302_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37298 === (6))){
var state_37297__$1 = state_37297;
var statearr_37303_37461 = state_37297__$1;
(statearr_37303_37461[(2)] = null);

(statearr_37303_37461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37298 === (7))){
var inst_37293 = (state_37297[(2)]);
var state_37297__$1 = state_37297;
var statearr_37304_37462 = state_37297__$1;
(statearr_37304_37462[(2)] = inst_37293);

(statearr_37304_37462[(1)] = (3));


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
});})(__37453,c__28184__auto___37456,G__37284_37454,n__20104__auto___37452,jobs,results,process,async))
;
return ((function (__37453,switch__28119__auto__,c__28184__auto___37456,G__37284_37454,n__20104__auto___37452,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0 = (function (){
var statearr_37308 = [null,null,null,null,null,null,null];
(statearr_37308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__);

(statearr_37308[(1)] = (1));

return statearr_37308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1 = (function (state_37297){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37309){if((e37309 instanceof Object)){
var ex__28123__auto__ = e37309;
var statearr_37310_37463 = state_37297;
(statearr_37310_37463[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37464 = state_37297;
state_37297 = G__37464;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = function(state_37297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1.call(this,state_37297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__;
})()
;})(__37453,switch__28119__auto__,c__28184__auto___37456,G__37284_37454,n__20104__auto___37452,jobs,results,process,async))
})();
var state__28186__auto__ = (function (){var statearr_37311 = f__28185__auto__.call(null);
(statearr_37311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___37456);

return statearr_37311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(__37453,c__28184__auto___37456,G__37284_37454,n__20104__auto___37452,jobs,results,process,async))
);


break;
case "async":
var c__28184__auto___37465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37453,c__28184__auto___37465,G__37284_37454,n__20104__auto___37452,jobs,results,process,async){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (__37453,c__28184__auto___37465,G__37284_37454,n__20104__auto___37452,jobs,results,process,async){
return (function (state_37324){
var state_val_37325 = (state_37324[(1)]);
if((state_val_37325 === (1))){
var state_37324__$1 = state_37324;
var statearr_37326_37466 = state_37324__$1;
(statearr_37326_37466[(2)] = null);

(statearr_37326_37466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (2))){
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37324__$1,(4),jobs);
} else {
if((state_val_37325 === (3))){
var inst_37322 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37324__$1,inst_37322);
} else {
if((state_val_37325 === (4))){
var inst_37314 = (state_37324[(2)]);
var inst_37315 = async.call(null,inst_37314);
var state_37324__$1 = state_37324;
if(cljs.core.truth_(inst_37315)){
var statearr_37327_37467 = state_37324__$1;
(statearr_37327_37467[(1)] = (5));

} else {
var statearr_37328_37468 = state_37324__$1;
(statearr_37328_37468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (5))){
var state_37324__$1 = state_37324;
var statearr_37329_37469 = state_37324__$1;
(statearr_37329_37469[(2)] = null);

(statearr_37329_37469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (6))){
var state_37324__$1 = state_37324;
var statearr_37330_37470 = state_37324__$1;
(statearr_37330_37470[(2)] = null);

(statearr_37330_37470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37325 === (7))){
var inst_37320 = (state_37324[(2)]);
var state_37324__$1 = state_37324;
var statearr_37331_37471 = state_37324__$1;
(statearr_37331_37471[(2)] = inst_37320);

(statearr_37331_37471[(1)] = (3));


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
});})(__37453,c__28184__auto___37465,G__37284_37454,n__20104__auto___37452,jobs,results,process,async))
;
return ((function (__37453,switch__28119__auto__,c__28184__auto___37465,G__37284_37454,n__20104__auto___37452,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0 = (function (){
var statearr_37335 = [null,null,null,null,null,null,null];
(statearr_37335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__);

(statearr_37335[(1)] = (1));

return statearr_37335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1 = (function (state_37324){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37336){if((e37336 instanceof Object)){
var ex__28123__auto__ = e37336;
var statearr_37337_37472 = state_37324;
(statearr_37337_37472[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37473 = state_37324;
state_37324 = G__37473;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = function(state_37324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1.call(this,state_37324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__;
})()
;})(__37453,switch__28119__auto__,c__28184__auto___37465,G__37284_37454,n__20104__auto___37452,jobs,results,process,async))
})();
var state__28186__auto__ = (function (){var statearr_37338 = f__28185__auto__.call(null);
(statearr_37338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___37465);

return statearr_37338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(__37453,c__28184__auto___37465,G__37284_37454,n__20104__auto___37452,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37474 = (__37453 + (1));
__37453 = G__37474;
continue;
} else {
}
break;
}

var c__28184__auto___37475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___37475,jobs,results,process,async){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___37475,jobs,results,process,async){
return (function (state_37360){
var state_val_37361 = (state_37360[(1)]);
if((state_val_37361 === (1))){
var state_37360__$1 = state_37360;
var statearr_37362_37476 = state_37360__$1;
(statearr_37362_37476[(2)] = null);

(statearr_37362_37476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37361 === (2))){
var state_37360__$1 = state_37360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37360__$1,(4),from);
} else {
if((state_val_37361 === (3))){
var inst_37358 = (state_37360[(2)]);
var state_37360__$1 = state_37360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37360__$1,inst_37358);
} else {
if((state_val_37361 === (4))){
var inst_37341 = (state_37360[(7)]);
var inst_37341__$1 = (state_37360[(2)]);
var inst_37342 = (inst_37341__$1 == null);
var state_37360__$1 = (function (){var statearr_37363 = state_37360;
(statearr_37363[(7)] = inst_37341__$1);

return statearr_37363;
})();
if(cljs.core.truth_(inst_37342)){
var statearr_37364_37477 = state_37360__$1;
(statearr_37364_37477[(1)] = (5));

} else {
var statearr_37365_37478 = state_37360__$1;
(statearr_37365_37478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37361 === (5))){
var inst_37344 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37360__$1 = state_37360;
var statearr_37366_37479 = state_37360__$1;
(statearr_37366_37479[(2)] = inst_37344);

(statearr_37366_37479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37361 === (6))){
var inst_37346 = (state_37360[(8)]);
var inst_37341 = (state_37360[(7)]);
var inst_37346__$1 = cljs.core.async.chan.call(null,(1));
var inst_37347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37348 = [inst_37341,inst_37346__$1];
var inst_37349 = (new cljs.core.PersistentVector(null,2,(5),inst_37347,inst_37348,null));
var state_37360__$1 = (function (){var statearr_37367 = state_37360;
(statearr_37367[(8)] = inst_37346__$1);

return statearr_37367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37360__$1,(8),jobs,inst_37349);
} else {
if((state_val_37361 === (7))){
var inst_37356 = (state_37360[(2)]);
var state_37360__$1 = state_37360;
var statearr_37368_37480 = state_37360__$1;
(statearr_37368_37480[(2)] = inst_37356);

(statearr_37368_37480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37361 === (8))){
var inst_37346 = (state_37360[(8)]);
var inst_37351 = (state_37360[(2)]);
var state_37360__$1 = (function (){var statearr_37369 = state_37360;
(statearr_37369[(9)] = inst_37351);

return statearr_37369;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37360__$1,(9),results,inst_37346);
} else {
if((state_val_37361 === (9))){
var inst_37353 = (state_37360[(2)]);
var state_37360__$1 = (function (){var statearr_37370 = state_37360;
(statearr_37370[(10)] = inst_37353);

return statearr_37370;
})();
var statearr_37371_37481 = state_37360__$1;
(statearr_37371_37481[(2)] = null);

(statearr_37371_37481[(1)] = (2));


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
});})(c__28184__auto___37475,jobs,results,process,async))
;
return ((function (switch__28119__auto__,c__28184__auto___37475,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0 = (function (){
var statearr_37375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__);

(statearr_37375[(1)] = (1));

return statearr_37375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1 = (function (state_37360){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37376){if((e37376 instanceof Object)){
var ex__28123__auto__ = e37376;
var statearr_37377_37482 = state_37360;
(statearr_37377_37482[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37483 = state_37360;
state_37360 = G__37483;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = function(state_37360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1.call(this,state_37360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___37475,jobs,results,process,async))
})();
var state__28186__auto__ = (function (){var statearr_37378 = f__28185__auto__.call(null);
(statearr_37378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___37475);

return statearr_37378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___37475,jobs,results,process,async))
);


var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__,jobs,results,process,async){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__,jobs,results,process,async){
return (function (state_37416){
var state_val_37417 = (state_37416[(1)]);
if((state_val_37417 === (7))){
var inst_37412 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37418_37484 = state_37416__$1;
(statearr_37418_37484[(2)] = inst_37412);

(statearr_37418_37484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (20))){
var state_37416__$1 = state_37416;
var statearr_37419_37485 = state_37416__$1;
(statearr_37419_37485[(2)] = null);

(statearr_37419_37485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (1))){
var state_37416__$1 = state_37416;
var statearr_37420_37486 = state_37416__$1;
(statearr_37420_37486[(2)] = null);

(statearr_37420_37486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (4))){
var inst_37381 = (state_37416[(7)]);
var inst_37381__$1 = (state_37416[(2)]);
var inst_37382 = (inst_37381__$1 == null);
var state_37416__$1 = (function (){var statearr_37421 = state_37416;
(statearr_37421[(7)] = inst_37381__$1);

return statearr_37421;
})();
if(cljs.core.truth_(inst_37382)){
var statearr_37422_37487 = state_37416__$1;
(statearr_37422_37487[(1)] = (5));

} else {
var statearr_37423_37488 = state_37416__$1;
(statearr_37423_37488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (15))){
var inst_37394 = (state_37416[(8)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37416__$1,(18),to,inst_37394);
} else {
if((state_val_37417 === (21))){
var inst_37407 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37424_37489 = state_37416__$1;
(statearr_37424_37489[(2)] = inst_37407);

(statearr_37424_37489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (13))){
var inst_37409 = (state_37416[(2)]);
var state_37416__$1 = (function (){var statearr_37425 = state_37416;
(statearr_37425[(9)] = inst_37409);

return statearr_37425;
})();
var statearr_37426_37490 = state_37416__$1;
(statearr_37426_37490[(2)] = null);

(statearr_37426_37490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (6))){
var inst_37381 = (state_37416[(7)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37416__$1,(11),inst_37381);
} else {
if((state_val_37417 === (17))){
var inst_37402 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37402)){
var statearr_37427_37491 = state_37416__$1;
(statearr_37427_37491[(1)] = (19));

} else {
var statearr_37428_37492 = state_37416__$1;
(statearr_37428_37492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (3))){
var inst_37414 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37416__$1,inst_37414);
} else {
if((state_val_37417 === (12))){
var inst_37391 = (state_37416[(10)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37416__$1,(14),inst_37391);
} else {
if((state_val_37417 === (2))){
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37416__$1,(4),results);
} else {
if((state_val_37417 === (19))){
var state_37416__$1 = state_37416;
var statearr_37429_37493 = state_37416__$1;
(statearr_37429_37493[(2)] = null);

(statearr_37429_37493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (11))){
var inst_37391 = (state_37416[(2)]);
var state_37416__$1 = (function (){var statearr_37430 = state_37416;
(statearr_37430[(10)] = inst_37391);

return statearr_37430;
})();
var statearr_37431_37494 = state_37416__$1;
(statearr_37431_37494[(2)] = null);

(statearr_37431_37494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (9))){
var state_37416__$1 = state_37416;
var statearr_37432_37495 = state_37416__$1;
(statearr_37432_37495[(2)] = null);

(statearr_37432_37495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (5))){
var state_37416__$1 = state_37416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37433_37496 = state_37416__$1;
(statearr_37433_37496[(1)] = (8));

} else {
var statearr_37434_37497 = state_37416__$1;
(statearr_37434_37497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (14))){
var inst_37394 = (state_37416[(8)]);
var inst_37396 = (state_37416[(11)]);
var inst_37394__$1 = (state_37416[(2)]);
var inst_37395 = (inst_37394__$1 == null);
var inst_37396__$1 = cljs.core.not.call(null,inst_37395);
var state_37416__$1 = (function (){var statearr_37435 = state_37416;
(statearr_37435[(8)] = inst_37394__$1);

(statearr_37435[(11)] = inst_37396__$1);

return statearr_37435;
})();
if(inst_37396__$1){
var statearr_37436_37498 = state_37416__$1;
(statearr_37436_37498[(1)] = (15));

} else {
var statearr_37437_37499 = state_37416__$1;
(statearr_37437_37499[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (16))){
var inst_37396 = (state_37416[(11)]);
var state_37416__$1 = state_37416;
var statearr_37438_37500 = state_37416__$1;
(statearr_37438_37500[(2)] = inst_37396);

(statearr_37438_37500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (10))){
var inst_37388 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37439_37501 = state_37416__$1;
(statearr_37439_37501[(2)] = inst_37388);

(statearr_37439_37501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (18))){
var inst_37399 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37440_37502 = state_37416__$1;
(statearr_37440_37502[(2)] = inst_37399);

(statearr_37440_37502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (8))){
var inst_37385 = cljs.core.async.close_BANG_.call(null,to);
var state_37416__$1 = state_37416;
var statearr_37441_37503 = state_37416__$1;
(statearr_37441_37503[(2)] = inst_37385);

(statearr_37441_37503[(1)] = (10));


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
});})(c__28184__auto__,jobs,results,process,async))
;
return ((function (switch__28119__auto__,c__28184__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0 = (function (){
var statearr_37445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__);

(statearr_37445[(1)] = (1));

return statearr_37445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1 = (function (state_37416){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37446){if((e37446 instanceof Object)){
var ex__28123__auto__ = e37446;
var statearr_37447_37504 = state_37416;
(statearr_37447_37504[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37505 = state_37416;
state_37416 = G__37505;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__ = function(state_37416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1.call(this,state_37416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28120__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__,jobs,results,process,async))
})();
var state__28186__auto__ = (function (){var statearr_37448 = f__28185__auto__.call(null);
(statearr_37448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_37448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__,jobs,results,process,async))
);

return c__28184__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args37506 = [];
var len__20259__auto___37509 = arguments.length;
var i__20260__auto___37510 = (0);
while(true){
if((i__20260__auto___37510 < len__20259__auto___37509)){
args37506.push((arguments[i__20260__auto___37510]));

var G__37511 = (i__20260__auto___37510 + (1));
i__20260__auto___37510 = G__37511;
continue;
} else {
}
break;
}

var G__37508 = args37506.length;
switch (G__37508) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37506.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args37513 = [];
var len__20259__auto___37516 = arguments.length;
var i__20260__auto___37517 = (0);
while(true){
if((i__20260__auto___37517 < len__20259__auto___37516)){
args37513.push((arguments[i__20260__auto___37517]));

var G__37518 = (i__20260__auto___37517 + (1));
i__20260__auto___37517 = G__37518;
continue;
} else {
}
break;
}

var G__37515 = args37513.length;
switch (G__37515) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37513.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args37520 = [];
var len__20259__auto___37573 = arguments.length;
var i__20260__auto___37574 = (0);
while(true){
if((i__20260__auto___37574 < len__20259__auto___37573)){
args37520.push((arguments[i__20260__auto___37574]));

var G__37575 = (i__20260__auto___37574 + (1));
i__20260__auto___37574 = G__37575;
continue;
} else {
}
break;
}

var G__37522 = args37520.length;
switch (G__37522) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37520.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28184__auto___37577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___37577,tc,fc){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___37577,tc,fc){
return (function (state_37548){
var state_val_37549 = (state_37548[(1)]);
if((state_val_37549 === (7))){
var inst_37544 = (state_37548[(2)]);
var state_37548__$1 = state_37548;
var statearr_37550_37578 = state_37548__$1;
(statearr_37550_37578[(2)] = inst_37544);

(statearr_37550_37578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (1))){
var state_37548__$1 = state_37548;
var statearr_37551_37579 = state_37548__$1;
(statearr_37551_37579[(2)] = null);

(statearr_37551_37579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (4))){
var inst_37525 = (state_37548[(7)]);
var inst_37525__$1 = (state_37548[(2)]);
var inst_37526 = (inst_37525__$1 == null);
var state_37548__$1 = (function (){var statearr_37552 = state_37548;
(statearr_37552[(7)] = inst_37525__$1);

return statearr_37552;
})();
if(cljs.core.truth_(inst_37526)){
var statearr_37553_37580 = state_37548__$1;
(statearr_37553_37580[(1)] = (5));

} else {
var statearr_37554_37581 = state_37548__$1;
(statearr_37554_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (13))){
var state_37548__$1 = state_37548;
var statearr_37555_37582 = state_37548__$1;
(statearr_37555_37582[(2)] = null);

(statearr_37555_37582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (6))){
var inst_37525 = (state_37548[(7)]);
var inst_37531 = p.call(null,inst_37525);
var state_37548__$1 = state_37548;
if(cljs.core.truth_(inst_37531)){
var statearr_37556_37583 = state_37548__$1;
(statearr_37556_37583[(1)] = (9));

} else {
var statearr_37557_37584 = state_37548__$1;
(statearr_37557_37584[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (3))){
var inst_37546 = (state_37548[(2)]);
var state_37548__$1 = state_37548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37548__$1,inst_37546);
} else {
if((state_val_37549 === (12))){
var state_37548__$1 = state_37548;
var statearr_37558_37585 = state_37548__$1;
(statearr_37558_37585[(2)] = null);

(statearr_37558_37585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (2))){
var state_37548__$1 = state_37548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37548__$1,(4),ch);
} else {
if((state_val_37549 === (11))){
var inst_37525 = (state_37548[(7)]);
var inst_37535 = (state_37548[(2)]);
var state_37548__$1 = state_37548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37548__$1,(8),inst_37535,inst_37525);
} else {
if((state_val_37549 === (9))){
var state_37548__$1 = state_37548;
var statearr_37559_37586 = state_37548__$1;
(statearr_37559_37586[(2)] = tc);

(statearr_37559_37586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (5))){
var inst_37528 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37529 = cljs.core.async.close_BANG_.call(null,fc);
var state_37548__$1 = (function (){var statearr_37560 = state_37548;
(statearr_37560[(8)] = inst_37528);

return statearr_37560;
})();
var statearr_37561_37587 = state_37548__$1;
(statearr_37561_37587[(2)] = inst_37529);

(statearr_37561_37587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (14))){
var inst_37542 = (state_37548[(2)]);
var state_37548__$1 = state_37548;
var statearr_37562_37588 = state_37548__$1;
(statearr_37562_37588[(2)] = inst_37542);

(statearr_37562_37588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (10))){
var state_37548__$1 = state_37548;
var statearr_37563_37589 = state_37548__$1;
(statearr_37563_37589[(2)] = fc);

(statearr_37563_37589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37549 === (8))){
var inst_37537 = (state_37548[(2)]);
var state_37548__$1 = state_37548;
if(cljs.core.truth_(inst_37537)){
var statearr_37564_37590 = state_37548__$1;
(statearr_37564_37590[(1)] = (12));

} else {
var statearr_37565_37591 = state_37548__$1;
(statearr_37565_37591[(1)] = (13));

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
});})(c__28184__auto___37577,tc,fc))
;
return ((function (switch__28119__auto__,c__28184__auto___37577,tc,fc){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_37569 = [null,null,null,null,null,null,null,null,null];
(statearr_37569[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_37569[(1)] = (1));

return statearr_37569;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_37548){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37570){if((e37570 instanceof Object)){
var ex__28123__auto__ = e37570;
var statearr_37571_37592 = state_37548;
(statearr_37571_37592[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37593 = state_37548;
state_37548 = G__37593;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_37548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_37548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___37577,tc,fc))
})();
var state__28186__auto__ = (function (){var statearr_37572 = f__28185__auto__.call(null);
(statearr_37572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___37577);

return statearr_37572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___37577,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_37640){
var state_val_37641 = (state_37640[(1)]);
if((state_val_37641 === (1))){
var inst_37626 = init;
var state_37640__$1 = (function (){var statearr_37642 = state_37640;
(statearr_37642[(7)] = inst_37626);

return statearr_37642;
})();
var statearr_37643_37658 = state_37640__$1;
(statearr_37643_37658[(2)] = null);

(statearr_37643_37658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (2))){
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37640__$1,(4),ch);
} else {
if((state_val_37641 === (3))){
var inst_37638 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37640__$1,inst_37638);
} else {
if((state_val_37641 === (4))){
var inst_37629 = (state_37640[(8)]);
var inst_37629__$1 = (state_37640[(2)]);
var inst_37630 = (inst_37629__$1 == null);
var state_37640__$1 = (function (){var statearr_37644 = state_37640;
(statearr_37644[(8)] = inst_37629__$1);

return statearr_37644;
})();
if(cljs.core.truth_(inst_37630)){
var statearr_37645_37659 = state_37640__$1;
(statearr_37645_37659[(1)] = (5));

} else {
var statearr_37646_37660 = state_37640__$1;
(statearr_37646_37660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (5))){
var inst_37626 = (state_37640[(7)]);
var state_37640__$1 = state_37640;
var statearr_37647_37661 = state_37640__$1;
(statearr_37647_37661[(2)] = inst_37626);

(statearr_37647_37661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (6))){
var inst_37629 = (state_37640[(8)]);
var inst_37626 = (state_37640[(7)]);
var inst_37633 = f.call(null,inst_37626,inst_37629);
var inst_37626__$1 = inst_37633;
var state_37640__$1 = (function (){var statearr_37648 = state_37640;
(statearr_37648[(7)] = inst_37626__$1);

return statearr_37648;
})();
var statearr_37649_37662 = state_37640__$1;
(statearr_37649_37662[(2)] = null);

(statearr_37649_37662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37641 === (7))){
var inst_37636 = (state_37640[(2)]);
var state_37640__$1 = state_37640;
var statearr_37650_37663 = state_37640__$1;
(statearr_37650_37663[(2)] = inst_37636);

(statearr_37650_37663[(1)] = (3));


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
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28120__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28120__auto____0 = (function (){
var statearr_37654 = [null,null,null,null,null,null,null,null,null];
(statearr_37654[(0)] = cljs$core$async$reduce_$_state_machine__28120__auto__);

(statearr_37654[(1)] = (1));

return statearr_37654;
});
var cljs$core$async$reduce_$_state_machine__28120__auto____1 = (function (state_37640){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37655){if((e37655 instanceof Object)){
var ex__28123__auto__ = e37655;
var statearr_37656_37664 = state_37640;
(statearr_37656_37664[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37665 = state_37640;
state_37640 = G__37665;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28120__auto__ = function(state_37640){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28120__auto____1.call(this,state_37640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28120__auto____0;
cljs$core$async$reduce_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28120__auto____1;
return cljs$core$async$reduce_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_37657 = f__28185__auto__.call(null);
(statearr_37657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_37657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args37666 = [];
var len__20259__auto___37718 = arguments.length;
var i__20260__auto___37719 = (0);
while(true){
if((i__20260__auto___37719 < len__20259__auto___37718)){
args37666.push((arguments[i__20260__auto___37719]));

var G__37720 = (i__20260__auto___37719 + (1));
i__20260__auto___37719 = G__37720;
continue;
} else {
}
break;
}

var G__37668 = args37666.length;
switch (G__37668) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37666.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_37693){
var state_val_37694 = (state_37693[(1)]);
if((state_val_37694 === (7))){
var inst_37675 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37695_37722 = state_37693__$1;
(statearr_37695_37722[(2)] = inst_37675);

(statearr_37695_37722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (1))){
var inst_37669 = cljs.core.seq.call(null,coll);
var inst_37670 = inst_37669;
var state_37693__$1 = (function (){var statearr_37696 = state_37693;
(statearr_37696[(7)] = inst_37670);

return statearr_37696;
})();
var statearr_37697_37723 = state_37693__$1;
(statearr_37697_37723[(2)] = null);

(statearr_37697_37723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (4))){
var inst_37670 = (state_37693[(7)]);
var inst_37673 = cljs.core.first.call(null,inst_37670);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37693__$1,(7),ch,inst_37673);
} else {
if((state_val_37694 === (13))){
var inst_37687 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37698_37724 = state_37693__$1;
(statearr_37698_37724[(2)] = inst_37687);

(statearr_37698_37724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (6))){
var inst_37678 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37678)){
var statearr_37699_37725 = state_37693__$1;
(statearr_37699_37725[(1)] = (8));

} else {
var statearr_37700_37726 = state_37693__$1;
(statearr_37700_37726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (3))){
var inst_37691 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37693__$1,inst_37691);
} else {
if((state_val_37694 === (12))){
var state_37693__$1 = state_37693;
var statearr_37701_37727 = state_37693__$1;
(statearr_37701_37727[(2)] = null);

(statearr_37701_37727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (2))){
var inst_37670 = (state_37693[(7)]);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37670)){
var statearr_37702_37728 = state_37693__$1;
(statearr_37702_37728[(1)] = (4));

} else {
var statearr_37703_37729 = state_37693__$1;
(statearr_37703_37729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (11))){
var inst_37684 = cljs.core.async.close_BANG_.call(null,ch);
var state_37693__$1 = state_37693;
var statearr_37704_37730 = state_37693__$1;
(statearr_37704_37730[(2)] = inst_37684);

(statearr_37704_37730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (9))){
var state_37693__$1 = state_37693;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37705_37731 = state_37693__$1;
(statearr_37705_37731[(1)] = (11));

} else {
var statearr_37706_37732 = state_37693__$1;
(statearr_37706_37732[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (5))){
var inst_37670 = (state_37693[(7)]);
var state_37693__$1 = state_37693;
var statearr_37707_37733 = state_37693__$1;
(statearr_37707_37733[(2)] = inst_37670);

(statearr_37707_37733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (10))){
var inst_37689 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37708_37734 = state_37693__$1;
(statearr_37708_37734[(2)] = inst_37689);

(statearr_37708_37734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (8))){
var inst_37670 = (state_37693[(7)]);
var inst_37680 = cljs.core.next.call(null,inst_37670);
var inst_37670__$1 = inst_37680;
var state_37693__$1 = (function (){var statearr_37709 = state_37693;
(statearr_37709[(7)] = inst_37670__$1);

return statearr_37709;
})();
var statearr_37710_37735 = state_37693__$1;
(statearr_37710_37735[(2)] = null);

(statearr_37710_37735[(1)] = (2));


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
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_37714 = [null,null,null,null,null,null,null,null];
(statearr_37714[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_37714[(1)] = (1));

return statearr_37714;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_37693){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_37693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e37715){if((e37715 instanceof Object)){
var ex__28123__auto__ = e37715;
var statearr_37716_37736 = state_37693;
(statearr_37716_37736[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37737 = state_37693;
state_37693 = G__37737;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_37693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_37693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_37717 = f__28185__auto__.call(null);
(statearr_37717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_37717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19856__auto__ = (((_ == null))?null:_);
var m__19857__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,_);
} else {
var m__19857__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19857__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m,ch);
} else {
var m__19857__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m);
} else {
var m__19857__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37959 = (function (mult,ch,cs,meta37960){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37960 = meta37960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37961,meta37960__$1){
var self__ = this;
var _37961__$1 = this;
return (new cljs.core.async.t_cljs$core$async37959(self__.mult,self__.ch,self__.cs,meta37960__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37961){
var self__ = this;
var _37961__$1 = this;
return self__.meta37960;
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37960","meta37960",993674472,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37959";

cljs.core.async.t_cljs$core$async37959.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async37959");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37959 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37959(mult__$1,ch__$1,cs__$1,meta37960){
return (new cljs.core.async.t_cljs$core$async37959(mult__$1,ch__$1,cs__$1,meta37960));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37959(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28184__auto___38180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___38180,cs,m,dchan,dctr,done){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___38180,cs,m,dchan,dctr,done){
return (function (state_38092){
var state_val_38093 = (state_38092[(1)]);
if((state_val_38093 === (7))){
var inst_38088 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38094_38181 = state_38092__$1;
(statearr_38094_38181[(2)] = inst_38088);

(statearr_38094_38181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (20))){
var inst_37993 = (state_38092[(7)]);
var inst_38003 = cljs.core.first.call(null,inst_37993);
var inst_38004 = cljs.core.nth.call(null,inst_38003,(0),null);
var inst_38005 = cljs.core.nth.call(null,inst_38003,(1),null);
var state_38092__$1 = (function (){var statearr_38095 = state_38092;
(statearr_38095[(8)] = inst_38004);

return statearr_38095;
})();
if(cljs.core.truth_(inst_38005)){
var statearr_38096_38182 = state_38092__$1;
(statearr_38096_38182[(1)] = (22));

} else {
var statearr_38097_38183 = state_38092__$1;
(statearr_38097_38183[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (27))){
var inst_37964 = (state_38092[(9)]);
var inst_38040 = (state_38092[(10)]);
var inst_38033 = (state_38092[(11)]);
var inst_38035 = (state_38092[(12)]);
var inst_38040__$1 = cljs.core._nth.call(null,inst_38033,inst_38035);
var inst_38041 = cljs.core.async.put_BANG_.call(null,inst_38040__$1,inst_37964,done);
var state_38092__$1 = (function (){var statearr_38098 = state_38092;
(statearr_38098[(10)] = inst_38040__$1);

return statearr_38098;
})();
if(cljs.core.truth_(inst_38041)){
var statearr_38099_38184 = state_38092__$1;
(statearr_38099_38184[(1)] = (30));

} else {
var statearr_38100_38185 = state_38092__$1;
(statearr_38100_38185[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (1))){
var state_38092__$1 = state_38092;
var statearr_38101_38186 = state_38092__$1;
(statearr_38101_38186[(2)] = null);

(statearr_38101_38186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (24))){
var inst_37993 = (state_38092[(7)]);
var inst_38010 = (state_38092[(2)]);
var inst_38011 = cljs.core.next.call(null,inst_37993);
var inst_37973 = inst_38011;
var inst_37974 = null;
var inst_37975 = (0);
var inst_37976 = (0);
var state_38092__$1 = (function (){var statearr_38102 = state_38092;
(statearr_38102[(13)] = inst_37975);

(statearr_38102[(14)] = inst_37974);

(statearr_38102[(15)] = inst_38010);

(statearr_38102[(16)] = inst_37976);

(statearr_38102[(17)] = inst_37973);

return statearr_38102;
})();
var statearr_38103_38187 = state_38092__$1;
(statearr_38103_38187[(2)] = null);

(statearr_38103_38187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (39))){
var state_38092__$1 = state_38092;
var statearr_38107_38188 = state_38092__$1;
(statearr_38107_38188[(2)] = null);

(statearr_38107_38188[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (4))){
var inst_37964 = (state_38092[(9)]);
var inst_37964__$1 = (state_38092[(2)]);
var inst_37965 = (inst_37964__$1 == null);
var state_38092__$1 = (function (){var statearr_38108 = state_38092;
(statearr_38108[(9)] = inst_37964__$1);

return statearr_38108;
})();
if(cljs.core.truth_(inst_37965)){
var statearr_38109_38189 = state_38092__$1;
(statearr_38109_38189[(1)] = (5));

} else {
var statearr_38110_38190 = state_38092__$1;
(statearr_38110_38190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (15))){
var inst_37975 = (state_38092[(13)]);
var inst_37974 = (state_38092[(14)]);
var inst_37976 = (state_38092[(16)]);
var inst_37973 = (state_38092[(17)]);
var inst_37989 = (state_38092[(2)]);
var inst_37990 = (inst_37976 + (1));
var tmp38104 = inst_37975;
var tmp38105 = inst_37974;
var tmp38106 = inst_37973;
var inst_37973__$1 = tmp38106;
var inst_37974__$1 = tmp38105;
var inst_37975__$1 = tmp38104;
var inst_37976__$1 = inst_37990;
var state_38092__$1 = (function (){var statearr_38111 = state_38092;
(statearr_38111[(13)] = inst_37975__$1);

(statearr_38111[(14)] = inst_37974__$1);

(statearr_38111[(16)] = inst_37976__$1);

(statearr_38111[(17)] = inst_37973__$1);

(statearr_38111[(18)] = inst_37989);

return statearr_38111;
})();
var statearr_38112_38191 = state_38092__$1;
(statearr_38112_38191[(2)] = null);

(statearr_38112_38191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (21))){
var inst_38014 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38116_38192 = state_38092__$1;
(statearr_38116_38192[(2)] = inst_38014);

(statearr_38116_38192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (31))){
var inst_38040 = (state_38092[(10)]);
var inst_38044 = done.call(null,null);
var inst_38045 = cljs.core.async.untap_STAR_.call(null,m,inst_38040);
var state_38092__$1 = (function (){var statearr_38117 = state_38092;
(statearr_38117[(19)] = inst_38044);

return statearr_38117;
})();
var statearr_38118_38193 = state_38092__$1;
(statearr_38118_38193[(2)] = inst_38045);

(statearr_38118_38193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (32))){
var inst_38032 = (state_38092[(20)]);
var inst_38033 = (state_38092[(11)]);
var inst_38034 = (state_38092[(21)]);
var inst_38035 = (state_38092[(12)]);
var inst_38047 = (state_38092[(2)]);
var inst_38048 = (inst_38035 + (1));
var tmp38113 = inst_38032;
var tmp38114 = inst_38033;
var tmp38115 = inst_38034;
var inst_38032__$1 = tmp38113;
var inst_38033__$1 = tmp38114;
var inst_38034__$1 = tmp38115;
var inst_38035__$1 = inst_38048;
var state_38092__$1 = (function (){var statearr_38119 = state_38092;
(statearr_38119[(22)] = inst_38047);

(statearr_38119[(20)] = inst_38032__$1);

(statearr_38119[(11)] = inst_38033__$1);

(statearr_38119[(21)] = inst_38034__$1);

(statearr_38119[(12)] = inst_38035__$1);

return statearr_38119;
})();
var statearr_38120_38194 = state_38092__$1;
(statearr_38120_38194[(2)] = null);

(statearr_38120_38194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (40))){
var inst_38060 = (state_38092[(23)]);
var inst_38064 = done.call(null,null);
var inst_38065 = cljs.core.async.untap_STAR_.call(null,m,inst_38060);
var state_38092__$1 = (function (){var statearr_38121 = state_38092;
(statearr_38121[(24)] = inst_38064);

return statearr_38121;
})();
var statearr_38122_38195 = state_38092__$1;
(statearr_38122_38195[(2)] = inst_38065);

(statearr_38122_38195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (33))){
var inst_38051 = (state_38092[(25)]);
var inst_38053 = cljs.core.chunked_seq_QMARK_.call(null,inst_38051);
var state_38092__$1 = state_38092;
if(inst_38053){
var statearr_38123_38196 = state_38092__$1;
(statearr_38123_38196[(1)] = (36));

} else {
var statearr_38124_38197 = state_38092__$1;
(statearr_38124_38197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (13))){
var inst_37983 = (state_38092[(26)]);
var inst_37986 = cljs.core.async.close_BANG_.call(null,inst_37983);
var state_38092__$1 = state_38092;
var statearr_38125_38198 = state_38092__$1;
(statearr_38125_38198[(2)] = inst_37986);

(statearr_38125_38198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (22))){
var inst_38004 = (state_38092[(8)]);
var inst_38007 = cljs.core.async.close_BANG_.call(null,inst_38004);
var state_38092__$1 = state_38092;
var statearr_38126_38199 = state_38092__$1;
(statearr_38126_38199[(2)] = inst_38007);

(statearr_38126_38199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (36))){
var inst_38051 = (state_38092[(25)]);
var inst_38055 = cljs.core.chunk_first.call(null,inst_38051);
var inst_38056 = cljs.core.chunk_rest.call(null,inst_38051);
var inst_38057 = cljs.core.count.call(null,inst_38055);
var inst_38032 = inst_38056;
var inst_38033 = inst_38055;
var inst_38034 = inst_38057;
var inst_38035 = (0);
var state_38092__$1 = (function (){var statearr_38127 = state_38092;
(statearr_38127[(20)] = inst_38032);

(statearr_38127[(11)] = inst_38033);

(statearr_38127[(21)] = inst_38034);

(statearr_38127[(12)] = inst_38035);

return statearr_38127;
})();
var statearr_38128_38200 = state_38092__$1;
(statearr_38128_38200[(2)] = null);

(statearr_38128_38200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (41))){
var inst_38051 = (state_38092[(25)]);
var inst_38067 = (state_38092[(2)]);
var inst_38068 = cljs.core.next.call(null,inst_38051);
var inst_38032 = inst_38068;
var inst_38033 = null;
var inst_38034 = (0);
var inst_38035 = (0);
var state_38092__$1 = (function (){var statearr_38129 = state_38092;
(statearr_38129[(27)] = inst_38067);

(statearr_38129[(20)] = inst_38032);

(statearr_38129[(11)] = inst_38033);

(statearr_38129[(21)] = inst_38034);

(statearr_38129[(12)] = inst_38035);

return statearr_38129;
})();
var statearr_38130_38201 = state_38092__$1;
(statearr_38130_38201[(2)] = null);

(statearr_38130_38201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (43))){
var state_38092__$1 = state_38092;
var statearr_38131_38202 = state_38092__$1;
(statearr_38131_38202[(2)] = null);

(statearr_38131_38202[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (29))){
var inst_38076 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38132_38203 = state_38092__$1;
(statearr_38132_38203[(2)] = inst_38076);

(statearr_38132_38203[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (44))){
var inst_38085 = (state_38092[(2)]);
var state_38092__$1 = (function (){var statearr_38133 = state_38092;
(statearr_38133[(28)] = inst_38085);

return statearr_38133;
})();
var statearr_38134_38204 = state_38092__$1;
(statearr_38134_38204[(2)] = null);

(statearr_38134_38204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (6))){
var inst_38024 = (state_38092[(29)]);
var inst_38023 = cljs.core.deref.call(null,cs);
var inst_38024__$1 = cljs.core.keys.call(null,inst_38023);
var inst_38025 = cljs.core.count.call(null,inst_38024__$1);
var inst_38026 = cljs.core.reset_BANG_.call(null,dctr,inst_38025);
var inst_38031 = cljs.core.seq.call(null,inst_38024__$1);
var inst_38032 = inst_38031;
var inst_38033 = null;
var inst_38034 = (0);
var inst_38035 = (0);
var state_38092__$1 = (function (){var statearr_38135 = state_38092;
(statearr_38135[(30)] = inst_38026);

(statearr_38135[(20)] = inst_38032);

(statearr_38135[(11)] = inst_38033);

(statearr_38135[(21)] = inst_38034);

(statearr_38135[(29)] = inst_38024__$1);

(statearr_38135[(12)] = inst_38035);

return statearr_38135;
})();
var statearr_38136_38205 = state_38092__$1;
(statearr_38136_38205[(2)] = null);

(statearr_38136_38205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (28))){
var inst_38032 = (state_38092[(20)]);
var inst_38051 = (state_38092[(25)]);
var inst_38051__$1 = cljs.core.seq.call(null,inst_38032);
var state_38092__$1 = (function (){var statearr_38137 = state_38092;
(statearr_38137[(25)] = inst_38051__$1);

return statearr_38137;
})();
if(inst_38051__$1){
var statearr_38138_38206 = state_38092__$1;
(statearr_38138_38206[(1)] = (33));

} else {
var statearr_38139_38207 = state_38092__$1;
(statearr_38139_38207[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (25))){
var inst_38034 = (state_38092[(21)]);
var inst_38035 = (state_38092[(12)]);
var inst_38037 = (inst_38035 < inst_38034);
var inst_38038 = inst_38037;
var state_38092__$1 = state_38092;
if(cljs.core.truth_(inst_38038)){
var statearr_38140_38208 = state_38092__$1;
(statearr_38140_38208[(1)] = (27));

} else {
var statearr_38141_38209 = state_38092__$1;
(statearr_38141_38209[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (34))){
var state_38092__$1 = state_38092;
var statearr_38142_38210 = state_38092__$1;
(statearr_38142_38210[(2)] = null);

(statearr_38142_38210[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (17))){
var state_38092__$1 = state_38092;
var statearr_38143_38211 = state_38092__$1;
(statearr_38143_38211[(2)] = null);

(statearr_38143_38211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (3))){
var inst_38090 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38092__$1,inst_38090);
} else {
if((state_val_38093 === (12))){
var inst_38019 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38144_38212 = state_38092__$1;
(statearr_38144_38212[(2)] = inst_38019);

(statearr_38144_38212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (2))){
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38092__$1,(4),ch);
} else {
if((state_val_38093 === (23))){
var state_38092__$1 = state_38092;
var statearr_38145_38213 = state_38092__$1;
(statearr_38145_38213[(2)] = null);

(statearr_38145_38213[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (35))){
var inst_38074 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38146_38214 = state_38092__$1;
(statearr_38146_38214[(2)] = inst_38074);

(statearr_38146_38214[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (19))){
var inst_37993 = (state_38092[(7)]);
var inst_37997 = cljs.core.chunk_first.call(null,inst_37993);
var inst_37998 = cljs.core.chunk_rest.call(null,inst_37993);
var inst_37999 = cljs.core.count.call(null,inst_37997);
var inst_37973 = inst_37998;
var inst_37974 = inst_37997;
var inst_37975 = inst_37999;
var inst_37976 = (0);
var state_38092__$1 = (function (){var statearr_38147 = state_38092;
(statearr_38147[(13)] = inst_37975);

(statearr_38147[(14)] = inst_37974);

(statearr_38147[(16)] = inst_37976);

(statearr_38147[(17)] = inst_37973);

return statearr_38147;
})();
var statearr_38148_38215 = state_38092__$1;
(statearr_38148_38215[(2)] = null);

(statearr_38148_38215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (11))){
var inst_37993 = (state_38092[(7)]);
var inst_37973 = (state_38092[(17)]);
var inst_37993__$1 = cljs.core.seq.call(null,inst_37973);
var state_38092__$1 = (function (){var statearr_38149 = state_38092;
(statearr_38149[(7)] = inst_37993__$1);

return statearr_38149;
})();
if(inst_37993__$1){
var statearr_38150_38216 = state_38092__$1;
(statearr_38150_38216[(1)] = (16));

} else {
var statearr_38151_38217 = state_38092__$1;
(statearr_38151_38217[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (9))){
var inst_38021 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38152_38218 = state_38092__$1;
(statearr_38152_38218[(2)] = inst_38021);

(statearr_38152_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (5))){
var inst_37971 = cljs.core.deref.call(null,cs);
var inst_37972 = cljs.core.seq.call(null,inst_37971);
var inst_37973 = inst_37972;
var inst_37974 = null;
var inst_37975 = (0);
var inst_37976 = (0);
var state_38092__$1 = (function (){var statearr_38153 = state_38092;
(statearr_38153[(13)] = inst_37975);

(statearr_38153[(14)] = inst_37974);

(statearr_38153[(16)] = inst_37976);

(statearr_38153[(17)] = inst_37973);

return statearr_38153;
})();
var statearr_38154_38219 = state_38092__$1;
(statearr_38154_38219[(2)] = null);

(statearr_38154_38219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (14))){
var state_38092__$1 = state_38092;
var statearr_38155_38220 = state_38092__$1;
(statearr_38155_38220[(2)] = null);

(statearr_38155_38220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (45))){
var inst_38082 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38156_38221 = state_38092__$1;
(statearr_38156_38221[(2)] = inst_38082);

(statearr_38156_38221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (26))){
var inst_38024 = (state_38092[(29)]);
var inst_38078 = (state_38092[(2)]);
var inst_38079 = cljs.core.seq.call(null,inst_38024);
var state_38092__$1 = (function (){var statearr_38157 = state_38092;
(statearr_38157[(31)] = inst_38078);

return statearr_38157;
})();
if(inst_38079){
var statearr_38158_38222 = state_38092__$1;
(statearr_38158_38222[(1)] = (42));

} else {
var statearr_38159_38223 = state_38092__$1;
(statearr_38159_38223[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (16))){
var inst_37993 = (state_38092[(7)]);
var inst_37995 = cljs.core.chunked_seq_QMARK_.call(null,inst_37993);
var state_38092__$1 = state_38092;
if(inst_37995){
var statearr_38160_38224 = state_38092__$1;
(statearr_38160_38224[(1)] = (19));

} else {
var statearr_38161_38225 = state_38092__$1;
(statearr_38161_38225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (38))){
var inst_38071 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38162_38226 = state_38092__$1;
(statearr_38162_38226[(2)] = inst_38071);

(statearr_38162_38226[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (30))){
var state_38092__$1 = state_38092;
var statearr_38163_38227 = state_38092__$1;
(statearr_38163_38227[(2)] = null);

(statearr_38163_38227[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (10))){
var inst_37974 = (state_38092[(14)]);
var inst_37976 = (state_38092[(16)]);
var inst_37982 = cljs.core._nth.call(null,inst_37974,inst_37976);
var inst_37983 = cljs.core.nth.call(null,inst_37982,(0),null);
var inst_37984 = cljs.core.nth.call(null,inst_37982,(1),null);
var state_38092__$1 = (function (){var statearr_38164 = state_38092;
(statearr_38164[(26)] = inst_37983);

return statearr_38164;
})();
if(cljs.core.truth_(inst_37984)){
var statearr_38165_38228 = state_38092__$1;
(statearr_38165_38228[(1)] = (13));

} else {
var statearr_38166_38229 = state_38092__$1;
(statearr_38166_38229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (18))){
var inst_38017 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38167_38230 = state_38092__$1;
(statearr_38167_38230[(2)] = inst_38017);

(statearr_38167_38230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (42))){
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38092__$1,(45),dchan);
} else {
if((state_val_38093 === (37))){
var inst_37964 = (state_38092[(9)]);
var inst_38060 = (state_38092[(23)]);
var inst_38051 = (state_38092[(25)]);
var inst_38060__$1 = cljs.core.first.call(null,inst_38051);
var inst_38061 = cljs.core.async.put_BANG_.call(null,inst_38060__$1,inst_37964,done);
var state_38092__$1 = (function (){var statearr_38168 = state_38092;
(statearr_38168[(23)] = inst_38060__$1);

return statearr_38168;
})();
if(cljs.core.truth_(inst_38061)){
var statearr_38169_38231 = state_38092__$1;
(statearr_38169_38231[(1)] = (39));

} else {
var statearr_38170_38232 = state_38092__$1;
(statearr_38170_38232[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (8))){
var inst_37975 = (state_38092[(13)]);
var inst_37976 = (state_38092[(16)]);
var inst_37978 = (inst_37976 < inst_37975);
var inst_37979 = inst_37978;
var state_38092__$1 = state_38092;
if(cljs.core.truth_(inst_37979)){
var statearr_38171_38233 = state_38092__$1;
(statearr_38171_38233[(1)] = (10));

} else {
var statearr_38172_38234 = state_38092__$1;
(statearr_38172_38234[(1)] = (11));

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
});})(c__28184__auto___38180,cs,m,dchan,dctr,done))
;
return ((function (switch__28119__auto__,c__28184__auto___38180,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28120__auto__ = null;
var cljs$core$async$mult_$_state_machine__28120__auto____0 = (function (){
var statearr_38176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38176[(0)] = cljs$core$async$mult_$_state_machine__28120__auto__);

(statearr_38176[(1)] = (1));

return statearr_38176;
});
var cljs$core$async$mult_$_state_machine__28120__auto____1 = (function (state_38092){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_38092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e38177){if((e38177 instanceof Object)){
var ex__28123__auto__ = e38177;
var statearr_38178_38235 = state_38092;
(statearr_38178_38235[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38236 = state_38092;
state_38092 = G__38236;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28120__auto__ = function(state_38092){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28120__auto____1.call(this,state_38092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28120__auto____0;
cljs$core$async$mult_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28120__auto____1;
return cljs$core$async$mult_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___38180,cs,m,dchan,dctr,done))
})();
var state__28186__auto__ = (function (){var statearr_38179 = f__28185__auto__.call(null);
(statearr_38179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___38180);

return statearr_38179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___38180,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38237 = [];
var len__20259__auto___38240 = arguments.length;
var i__20260__auto___38241 = (0);
while(true){
if((i__20260__auto___38241 < len__20259__auto___38240)){
args38237.push((arguments[i__20260__auto___38241]));

var G__38242 = (i__20260__auto___38241 + (1));
i__20260__auto___38241 = G__38242;
continue;
} else {
}
break;
}

var G__38239 = args38237.length;
switch (G__38239) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38237.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m,ch);
} else {
var m__19857__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m,ch);
} else {
var m__19857__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m);
} else {
var m__19857__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m,state_map);
} else {
var m__19857__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19856__auto__ = (((m == null))?null:m);
var m__19857__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,m,mode);
} else {
var m__19857__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___38254 = arguments.length;
var i__20260__auto___38255 = (0);
while(true){
if((i__20260__auto___38255 < len__20259__auto___38254)){
args__20266__auto__.push((arguments[i__20260__auto___38255]));

var G__38256 = (i__20260__auto___38255 + (1));
i__20260__auto___38255 = G__38256;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((3) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20267__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38248){
var map__38249 = p__38248;
var map__38249__$1 = ((((!((map__38249 == null)))?((((map__38249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38249):map__38249);
var opts = map__38249__$1;
var statearr_38251_38257 = state;
(statearr_38251_38257[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__38249,map__38249__$1,opts){
return (function (val){
var statearr_38252_38258 = state;
(statearr_38252_38258[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38249,map__38249__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_38253_38259 = state;
(statearr_38253_38259[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38244){
var G__38245 = cljs.core.first.call(null,seq38244);
var seq38244__$1 = cljs.core.next.call(null,seq38244);
var G__38246 = cljs.core.first.call(null,seq38244__$1);
var seq38244__$2 = cljs.core.next.call(null,seq38244__$1);
var G__38247 = cljs.core.first.call(null,seq38244__$2);
var seq38244__$3 = cljs.core.next.call(null,seq38244__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38245,G__38246,G__38247,seq38244__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38423 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38424){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38424 = meta38424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38425,meta38424__$1){
var self__ = this;
var _38425__$1 = this;
return (new cljs.core.async.t_cljs$core$async38423(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38424__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38425){
var self__ = this;
var _38425__$1 = this;
return self__.meta38424;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38424","meta38424",-1751399081,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38423";

cljs.core.async.t_cljs$core$async38423.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async38423");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38423 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38423(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38424){
return (new cljs.core.async.t_cljs$core$async38423(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38424));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38423(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28184__auto___38586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___38586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___38586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38523){
var state_val_38524 = (state_38523[(1)]);
if((state_val_38524 === (7))){
var inst_38441 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
var statearr_38525_38587 = state_38523__$1;
(statearr_38525_38587[(2)] = inst_38441);

(statearr_38525_38587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (20))){
var inst_38453 = (state_38523[(7)]);
var state_38523__$1 = state_38523;
var statearr_38526_38588 = state_38523__$1;
(statearr_38526_38588[(2)] = inst_38453);

(statearr_38526_38588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (27))){
var state_38523__$1 = state_38523;
var statearr_38527_38589 = state_38523__$1;
(statearr_38527_38589[(2)] = null);

(statearr_38527_38589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (1))){
var inst_38429 = (state_38523[(8)]);
var inst_38429__$1 = calc_state.call(null);
var inst_38431 = (inst_38429__$1 == null);
var inst_38432 = cljs.core.not.call(null,inst_38431);
var state_38523__$1 = (function (){var statearr_38528 = state_38523;
(statearr_38528[(8)] = inst_38429__$1);

return statearr_38528;
})();
if(inst_38432){
var statearr_38529_38590 = state_38523__$1;
(statearr_38529_38590[(1)] = (2));

} else {
var statearr_38530_38591 = state_38523__$1;
(statearr_38530_38591[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (24))){
var inst_38476 = (state_38523[(9)]);
var inst_38483 = (state_38523[(10)]);
var inst_38497 = (state_38523[(11)]);
var inst_38497__$1 = inst_38476.call(null,inst_38483);
var state_38523__$1 = (function (){var statearr_38531 = state_38523;
(statearr_38531[(11)] = inst_38497__$1);

return statearr_38531;
})();
if(cljs.core.truth_(inst_38497__$1)){
var statearr_38532_38592 = state_38523__$1;
(statearr_38532_38592[(1)] = (29));

} else {
var statearr_38533_38593 = state_38523__$1;
(statearr_38533_38593[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (4))){
var inst_38444 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38444)){
var statearr_38534_38594 = state_38523__$1;
(statearr_38534_38594[(1)] = (8));

} else {
var statearr_38535_38595 = state_38523__$1;
(statearr_38535_38595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (15))){
var inst_38470 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38470)){
var statearr_38536_38596 = state_38523__$1;
(statearr_38536_38596[(1)] = (19));

} else {
var statearr_38537_38597 = state_38523__$1;
(statearr_38537_38597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (21))){
var inst_38475 = (state_38523[(12)]);
var inst_38475__$1 = (state_38523[(2)]);
var inst_38476 = cljs.core.get.call(null,inst_38475__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38477 = cljs.core.get.call(null,inst_38475__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38478 = cljs.core.get.call(null,inst_38475__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38523__$1 = (function (){var statearr_38538 = state_38523;
(statearr_38538[(9)] = inst_38476);

(statearr_38538[(13)] = inst_38477);

(statearr_38538[(12)] = inst_38475__$1);

return statearr_38538;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38523__$1,(22),inst_38478);
} else {
if((state_val_38524 === (31))){
var inst_38505 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38505)){
var statearr_38539_38598 = state_38523__$1;
(statearr_38539_38598[(1)] = (32));

} else {
var statearr_38540_38599 = state_38523__$1;
(statearr_38540_38599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (32))){
var inst_38482 = (state_38523[(14)]);
var state_38523__$1 = state_38523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38523__$1,(35),out,inst_38482);
} else {
if((state_val_38524 === (33))){
var inst_38475 = (state_38523[(12)]);
var inst_38453 = inst_38475;
var state_38523__$1 = (function (){var statearr_38541 = state_38523;
(statearr_38541[(7)] = inst_38453);

return statearr_38541;
})();
var statearr_38542_38600 = state_38523__$1;
(statearr_38542_38600[(2)] = null);

(statearr_38542_38600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (13))){
var inst_38453 = (state_38523[(7)]);
var inst_38460 = inst_38453.cljs$lang$protocol_mask$partition0$;
var inst_38461 = (inst_38460 & (64));
var inst_38462 = inst_38453.cljs$core$ISeq$;
var inst_38463 = (inst_38461) || (inst_38462);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38463)){
var statearr_38543_38601 = state_38523__$1;
(statearr_38543_38601[(1)] = (16));

} else {
var statearr_38544_38602 = state_38523__$1;
(statearr_38544_38602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (22))){
var inst_38483 = (state_38523[(10)]);
var inst_38482 = (state_38523[(14)]);
var inst_38481 = (state_38523[(2)]);
var inst_38482__$1 = cljs.core.nth.call(null,inst_38481,(0),null);
var inst_38483__$1 = cljs.core.nth.call(null,inst_38481,(1),null);
var inst_38484 = (inst_38482__$1 == null);
var inst_38485 = cljs.core._EQ_.call(null,inst_38483__$1,change);
var inst_38486 = (inst_38484) || (inst_38485);
var state_38523__$1 = (function (){var statearr_38545 = state_38523;
(statearr_38545[(10)] = inst_38483__$1);

(statearr_38545[(14)] = inst_38482__$1);

return statearr_38545;
})();
if(cljs.core.truth_(inst_38486)){
var statearr_38546_38603 = state_38523__$1;
(statearr_38546_38603[(1)] = (23));

} else {
var statearr_38547_38604 = state_38523__$1;
(statearr_38547_38604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (36))){
var inst_38475 = (state_38523[(12)]);
var inst_38453 = inst_38475;
var state_38523__$1 = (function (){var statearr_38548 = state_38523;
(statearr_38548[(7)] = inst_38453);

return statearr_38548;
})();
var statearr_38549_38605 = state_38523__$1;
(statearr_38549_38605[(2)] = null);

(statearr_38549_38605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (29))){
var inst_38497 = (state_38523[(11)]);
var state_38523__$1 = state_38523;
var statearr_38550_38606 = state_38523__$1;
(statearr_38550_38606[(2)] = inst_38497);

(statearr_38550_38606[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (6))){
var state_38523__$1 = state_38523;
var statearr_38551_38607 = state_38523__$1;
(statearr_38551_38607[(2)] = false);

(statearr_38551_38607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (28))){
var inst_38493 = (state_38523[(2)]);
var inst_38494 = calc_state.call(null);
var inst_38453 = inst_38494;
var state_38523__$1 = (function (){var statearr_38552 = state_38523;
(statearr_38552[(7)] = inst_38453);

(statearr_38552[(15)] = inst_38493);

return statearr_38552;
})();
var statearr_38553_38608 = state_38523__$1;
(statearr_38553_38608[(2)] = null);

(statearr_38553_38608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (25))){
var inst_38519 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
var statearr_38554_38609 = state_38523__$1;
(statearr_38554_38609[(2)] = inst_38519);

(statearr_38554_38609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (34))){
var inst_38517 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
var statearr_38555_38610 = state_38523__$1;
(statearr_38555_38610[(2)] = inst_38517);

(statearr_38555_38610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (17))){
var state_38523__$1 = state_38523;
var statearr_38556_38611 = state_38523__$1;
(statearr_38556_38611[(2)] = false);

(statearr_38556_38611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (3))){
var state_38523__$1 = state_38523;
var statearr_38557_38612 = state_38523__$1;
(statearr_38557_38612[(2)] = false);

(statearr_38557_38612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (12))){
var inst_38521 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38523__$1,inst_38521);
} else {
if((state_val_38524 === (2))){
var inst_38429 = (state_38523[(8)]);
var inst_38434 = inst_38429.cljs$lang$protocol_mask$partition0$;
var inst_38435 = (inst_38434 & (64));
var inst_38436 = inst_38429.cljs$core$ISeq$;
var inst_38437 = (inst_38435) || (inst_38436);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38437)){
var statearr_38558_38613 = state_38523__$1;
(statearr_38558_38613[(1)] = (5));

} else {
var statearr_38559_38614 = state_38523__$1;
(statearr_38559_38614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (23))){
var inst_38482 = (state_38523[(14)]);
var inst_38488 = (inst_38482 == null);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38488)){
var statearr_38560_38615 = state_38523__$1;
(statearr_38560_38615[(1)] = (26));

} else {
var statearr_38561_38616 = state_38523__$1;
(statearr_38561_38616[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (35))){
var inst_38508 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
if(cljs.core.truth_(inst_38508)){
var statearr_38562_38617 = state_38523__$1;
(statearr_38562_38617[(1)] = (36));

} else {
var statearr_38563_38618 = state_38523__$1;
(statearr_38563_38618[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (19))){
var inst_38453 = (state_38523[(7)]);
var inst_38472 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38453);
var state_38523__$1 = state_38523;
var statearr_38564_38619 = state_38523__$1;
(statearr_38564_38619[(2)] = inst_38472);

(statearr_38564_38619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (11))){
var inst_38453 = (state_38523[(7)]);
var inst_38457 = (inst_38453 == null);
var inst_38458 = cljs.core.not.call(null,inst_38457);
var state_38523__$1 = state_38523;
if(inst_38458){
var statearr_38565_38620 = state_38523__$1;
(statearr_38565_38620[(1)] = (13));

} else {
var statearr_38566_38621 = state_38523__$1;
(statearr_38566_38621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (9))){
var inst_38429 = (state_38523[(8)]);
var state_38523__$1 = state_38523;
var statearr_38567_38622 = state_38523__$1;
(statearr_38567_38622[(2)] = inst_38429);

(statearr_38567_38622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (5))){
var state_38523__$1 = state_38523;
var statearr_38568_38623 = state_38523__$1;
(statearr_38568_38623[(2)] = true);

(statearr_38568_38623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (14))){
var state_38523__$1 = state_38523;
var statearr_38569_38624 = state_38523__$1;
(statearr_38569_38624[(2)] = false);

(statearr_38569_38624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (26))){
var inst_38483 = (state_38523[(10)]);
var inst_38490 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38483);
var state_38523__$1 = state_38523;
var statearr_38570_38625 = state_38523__$1;
(statearr_38570_38625[(2)] = inst_38490);

(statearr_38570_38625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (16))){
var state_38523__$1 = state_38523;
var statearr_38571_38626 = state_38523__$1;
(statearr_38571_38626[(2)] = true);

(statearr_38571_38626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (38))){
var inst_38513 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
var statearr_38572_38627 = state_38523__$1;
(statearr_38572_38627[(2)] = inst_38513);

(statearr_38572_38627[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (30))){
var inst_38476 = (state_38523[(9)]);
var inst_38483 = (state_38523[(10)]);
var inst_38477 = (state_38523[(13)]);
var inst_38500 = cljs.core.empty_QMARK_.call(null,inst_38476);
var inst_38501 = inst_38477.call(null,inst_38483);
var inst_38502 = cljs.core.not.call(null,inst_38501);
var inst_38503 = (inst_38500) && (inst_38502);
var state_38523__$1 = state_38523;
var statearr_38573_38628 = state_38523__$1;
(statearr_38573_38628[(2)] = inst_38503);

(statearr_38573_38628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (10))){
var inst_38429 = (state_38523[(8)]);
var inst_38449 = (state_38523[(2)]);
var inst_38450 = cljs.core.get.call(null,inst_38449,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38451 = cljs.core.get.call(null,inst_38449,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38452 = cljs.core.get.call(null,inst_38449,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38453 = inst_38429;
var state_38523__$1 = (function (){var statearr_38574 = state_38523;
(statearr_38574[(16)] = inst_38452);

(statearr_38574[(7)] = inst_38453);

(statearr_38574[(17)] = inst_38451);

(statearr_38574[(18)] = inst_38450);

return statearr_38574;
})();
var statearr_38575_38629 = state_38523__$1;
(statearr_38575_38629[(2)] = null);

(statearr_38575_38629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (18))){
var inst_38467 = (state_38523[(2)]);
var state_38523__$1 = state_38523;
var statearr_38576_38630 = state_38523__$1;
(statearr_38576_38630[(2)] = inst_38467);

(statearr_38576_38630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (37))){
var state_38523__$1 = state_38523;
var statearr_38577_38631 = state_38523__$1;
(statearr_38577_38631[(2)] = null);

(statearr_38577_38631[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38524 === (8))){
var inst_38429 = (state_38523[(8)]);
var inst_38446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38429);
var state_38523__$1 = state_38523;
var statearr_38578_38632 = state_38523__$1;
(statearr_38578_38632[(2)] = inst_38446);

(statearr_38578_38632[(1)] = (10));


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
});})(c__28184__auto___38586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28119__auto__,c__28184__auto___38586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28120__auto__ = null;
var cljs$core$async$mix_$_state_machine__28120__auto____0 = (function (){
var statearr_38582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38582[(0)] = cljs$core$async$mix_$_state_machine__28120__auto__);

(statearr_38582[(1)] = (1));

return statearr_38582;
});
var cljs$core$async$mix_$_state_machine__28120__auto____1 = (function (state_38523){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_38523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e38583){if((e38583 instanceof Object)){
var ex__28123__auto__ = e38583;
var statearr_38584_38633 = state_38523;
(statearr_38584_38633[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38634 = state_38523;
state_38523 = G__38634;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28120__auto__ = function(state_38523){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28120__auto____1.call(this,state_38523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28120__auto____0;
cljs$core$async$mix_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28120__auto____1;
return cljs$core$async$mix_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___38586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28186__auto__ = (function (){var statearr_38585 = f__28185__auto__.call(null);
(statearr_38585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___38586);

return statearr_38585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___38586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19856__auto__ = (((p == null))?null:p);
var m__19857__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19857__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19856__auto__ = (((p == null))?null:p);
var m__19857__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,p,v,ch);
} else {
var m__19857__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38635 = [];
var len__20259__auto___38638 = arguments.length;
var i__20260__auto___38639 = (0);
while(true){
if((i__20260__auto___38639 < len__20259__auto___38638)){
args38635.push((arguments[i__20260__auto___38639]));

var G__38640 = (i__20260__auto___38639 + (1));
i__20260__auto___38639 = G__38640;
continue;
} else {
}
break;
}

var G__38637 = args38635.length;
switch (G__38637) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38635.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19856__auto__ = (((p == null))?null:p);
var m__19857__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,p);
} else {
var m__19857__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19856__auto__ = (((p == null))?null:p);
var m__19857__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,p,v);
} else {
var m__19857__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args38643 = [];
var len__20259__auto___38768 = arguments.length;
var i__20260__auto___38769 = (0);
while(true){
if((i__20260__auto___38769 < len__20259__auto___38768)){
args38643.push((arguments[i__20260__auto___38769]));

var G__38770 = (i__20260__auto___38769 + (1));
i__20260__auto___38769 = G__38770;
continue;
} else {
}
break;
}

var G__38645 = args38643.length;
switch (G__38645) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38643.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19201__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19201__auto__,mults){
return (function (p1__38642_SHARP_){
if(cljs.core.truth_(p1__38642_SHARP_.call(null,topic))){
return p1__38642_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38642_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19201__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38646 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38647){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38647 = meta38647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38648,meta38647__$1){
var self__ = this;
var _38648__$1 = this;
return (new cljs.core.async.t_cljs$core$async38646(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38647__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38648){
var self__ = this;
var _38648__$1 = this;
return self__.meta38647;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38647","meta38647",1563305107,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38646";

cljs.core.async.t_cljs$core$async38646.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async38646");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38646 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38646(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38647){
return (new cljs.core.async.t_cljs$core$async38646(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38647));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38646(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28184__auto___38772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___38772,mults,ensure_mult,p){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___38772,mults,ensure_mult,p){
return (function (state_38720){
var state_val_38721 = (state_38720[(1)]);
if((state_val_38721 === (7))){
var inst_38716 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38722_38773 = state_38720__$1;
(statearr_38722_38773[(2)] = inst_38716);

(statearr_38722_38773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (20))){
var state_38720__$1 = state_38720;
var statearr_38723_38774 = state_38720__$1;
(statearr_38723_38774[(2)] = null);

(statearr_38723_38774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (1))){
var state_38720__$1 = state_38720;
var statearr_38724_38775 = state_38720__$1;
(statearr_38724_38775[(2)] = null);

(statearr_38724_38775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (24))){
var inst_38699 = (state_38720[(7)]);
var inst_38708 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38699);
var state_38720__$1 = state_38720;
var statearr_38725_38776 = state_38720__$1;
(statearr_38725_38776[(2)] = inst_38708);

(statearr_38725_38776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (4))){
var inst_38651 = (state_38720[(8)]);
var inst_38651__$1 = (state_38720[(2)]);
var inst_38652 = (inst_38651__$1 == null);
var state_38720__$1 = (function (){var statearr_38726 = state_38720;
(statearr_38726[(8)] = inst_38651__$1);

return statearr_38726;
})();
if(cljs.core.truth_(inst_38652)){
var statearr_38727_38777 = state_38720__$1;
(statearr_38727_38777[(1)] = (5));

} else {
var statearr_38728_38778 = state_38720__$1;
(statearr_38728_38778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (15))){
var inst_38693 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38729_38779 = state_38720__$1;
(statearr_38729_38779[(2)] = inst_38693);

(statearr_38729_38779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (21))){
var inst_38713 = (state_38720[(2)]);
var state_38720__$1 = (function (){var statearr_38730 = state_38720;
(statearr_38730[(9)] = inst_38713);

return statearr_38730;
})();
var statearr_38731_38780 = state_38720__$1;
(statearr_38731_38780[(2)] = null);

(statearr_38731_38780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (13))){
var inst_38675 = (state_38720[(10)]);
var inst_38677 = cljs.core.chunked_seq_QMARK_.call(null,inst_38675);
var state_38720__$1 = state_38720;
if(inst_38677){
var statearr_38732_38781 = state_38720__$1;
(statearr_38732_38781[(1)] = (16));

} else {
var statearr_38733_38782 = state_38720__$1;
(statearr_38733_38782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (22))){
var inst_38705 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
if(cljs.core.truth_(inst_38705)){
var statearr_38734_38783 = state_38720__$1;
(statearr_38734_38783[(1)] = (23));

} else {
var statearr_38735_38784 = state_38720__$1;
(statearr_38735_38784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (6))){
var inst_38699 = (state_38720[(7)]);
var inst_38651 = (state_38720[(8)]);
var inst_38701 = (state_38720[(11)]);
var inst_38699__$1 = topic_fn.call(null,inst_38651);
var inst_38700 = cljs.core.deref.call(null,mults);
var inst_38701__$1 = cljs.core.get.call(null,inst_38700,inst_38699__$1);
var state_38720__$1 = (function (){var statearr_38736 = state_38720;
(statearr_38736[(7)] = inst_38699__$1);

(statearr_38736[(11)] = inst_38701__$1);

return statearr_38736;
})();
if(cljs.core.truth_(inst_38701__$1)){
var statearr_38737_38785 = state_38720__$1;
(statearr_38737_38785[(1)] = (19));

} else {
var statearr_38738_38786 = state_38720__$1;
(statearr_38738_38786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (25))){
var inst_38710 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38739_38787 = state_38720__$1;
(statearr_38739_38787[(2)] = inst_38710);

(statearr_38739_38787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (17))){
var inst_38675 = (state_38720[(10)]);
var inst_38684 = cljs.core.first.call(null,inst_38675);
var inst_38685 = cljs.core.async.muxch_STAR_.call(null,inst_38684);
var inst_38686 = cljs.core.async.close_BANG_.call(null,inst_38685);
var inst_38687 = cljs.core.next.call(null,inst_38675);
var inst_38661 = inst_38687;
var inst_38662 = null;
var inst_38663 = (0);
var inst_38664 = (0);
var state_38720__$1 = (function (){var statearr_38740 = state_38720;
(statearr_38740[(12)] = inst_38662);

(statearr_38740[(13)] = inst_38661);

(statearr_38740[(14)] = inst_38663);

(statearr_38740[(15)] = inst_38686);

(statearr_38740[(16)] = inst_38664);

return statearr_38740;
})();
var statearr_38741_38788 = state_38720__$1;
(statearr_38741_38788[(2)] = null);

(statearr_38741_38788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (3))){
var inst_38718 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38720__$1,inst_38718);
} else {
if((state_val_38721 === (12))){
var inst_38695 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38742_38789 = state_38720__$1;
(statearr_38742_38789[(2)] = inst_38695);

(statearr_38742_38789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (2))){
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38720__$1,(4),ch);
} else {
if((state_val_38721 === (23))){
var state_38720__$1 = state_38720;
var statearr_38743_38790 = state_38720__$1;
(statearr_38743_38790[(2)] = null);

(statearr_38743_38790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (19))){
var inst_38651 = (state_38720[(8)]);
var inst_38701 = (state_38720[(11)]);
var inst_38703 = cljs.core.async.muxch_STAR_.call(null,inst_38701);
var state_38720__$1 = state_38720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38720__$1,(22),inst_38703,inst_38651);
} else {
if((state_val_38721 === (11))){
var inst_38661 = (state_38720[(13)]);
var inst_38675 = (state_38720[(10)]);
var inst_38675__$1 = cljs.core.seq.call(null,inst_38661);
var state_38720__$1 = (function (){var statearr_38744 = state_38720;
(statearr_38744[(10)] = inst_38675__$1);

return statearr_38744;
})();
if(inst_38675__$1){
var statearr_38745_38791 = state_38720__$1;
(statearr_38745_38791[(1)] = (13));

} else {
var statearr_38746_38792 = state_38720__$1;
(statearr_38746_38792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (9))){
var inst_38697 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38747_38793 = state_38720__$1;
(statearr_38747_38793[(2)] = inst_38697);

(statearr_38747_38793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (5))){
var inst_38658 = cljs.core.deref.call(null,mults);
var inst_38659 = cljs.core.vals.call(null,inst_38658);
var inst_38660 = cljs.core.seq.call(null,inst_38659);
var inst_38661 = inst_38660;
var inst_38662 = null;
var inst_38663 = (0);
var inst_38664 = (0);
var state_38720__$1 = (function (){var statearr_38748 = state_38720;
(statearr_38748[(12)] = inst_38662);

(statearr_38748[(13)] = inst_38661);

(statearr_38748[(14)] = inst_38663);

(statearr_38748[(16)] = inst_38664);

return statearr_38748;
})();
var statearr_38749_38794 = state_38720__$1;
(statearr_38749_38794[(2)] = null);

(statearr_38749_38794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (14))){
var state_38720__$1 = state_38720;
var statearr_38753_38795 = state_38720__$1;
(statearr_38753_38795[(2)] = null);

(statearr_38753_38795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (16))){
var inst_38675 = (state_38720[(10)]);
var inst_38679 = cljs.core.chunk_first.call(null,inst_38675);
var inst_38680 = cljs.core.chunk_rest.call(null,inst_38675);
var inst_38681 = cljs.core.count.call(null,inst_38679);
var inst_38661 = inst_38680;
var inst_38662 = inst_38679;
var inst_38663 = inst_38681;
var inst_38664 = (0);
var state_38720__$1 = (function (){var statearr_38754 = state_38720;
(statearr_38754[(12)] = inst_38662);

(statearr_38754[(13)] = inst_38661);

(statearr_38754[(14)] = inst_38663);

(statearr_38754[(16)] = inst_38664);

return statearr_38754;
})();
var statearr_38755_38796 = state_38720__$1;
(statearr_38755_38796[(2)] = null);

(statearr_38755_38796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (10))){
var inst_38662 = (state_38720[(12)]);
var inst_38661 = (state_38720[(13)]);
var inst_38663 = (state_38720[(14)]);
var inst_38664 = (state_38720[(16)]);
var inst_38669 = cljs.core._nth.call(null,inst_38662,inst_38664);
var inst_38670 = cljs.core.async.muxch_STAR_.call(null,inst_38669);
var inst_38671 = cljs.core.async.close_BANG_.call(null,inst_38670);
var inst_38672 = (inst_38664 + (1));
var tmp38750 = inst_38662;
var tmp38751 = inst_38661;
var tmp38752 = inst_38663;
var inst_38661__$1 = tmp38751;
var inst_38662__$1 = tmp38750;
var inst_38663__$1 = tmp38752;
var inst_38664__$1 = inst_38672;
var state_38720__$1 = (function (){var statearr_38756 = state_38720;
(statearr_38756[(17)] = inst_38671);

(statearr_38756[(12)] = inst_38662__$1);

(statearr_38756[(13)] = inst_38661__$1);

(statearr_38756[(14)] = inst_38663__$1);

(statearr_38756[(16)] = inst_38664__$1);

return statearr_38756;
})();
var statearr_38757_38797 = state_38720__$1;
(statearr_38757_38797[(2)] = null);

(statearr_38757_38797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (18))){
var inst_38690 = (state_38720[(2)]);
var state_38720__$1 = state_38720;
var statearr_38758_38798 = state_38720__$1;
(statearr_38758_38798[(2)] = inst_38690);

(statearr_38758_38798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38721 === (8))){
var inst_38663 = (state_38720[(14)]);
var inst_38664 = (state_38720[(16)]);
var inst_38666 = (inst_38664 < inst_38663);
var inst_38667 = inst_38666;
var state_38720__$1 = state_38720;
if(cljs.core.truth_(inst_38667)){
var statearr_38759_38799 = state_38720__$1;
(statearr_38759_38799[(1)] = (10));

} else {
var statearr_38760_38800 = state_38720__$1;
(statearr_38760_38800[(1)] = (11));

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
});})(c__28184__auto___38772,mults,ensure_mult,p))
;
return ((function (switch__28119__auto__,c__28184__auto___38772,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_38764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38764[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_38764[(1)] = (1));

return statearr_38764;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_38720){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_38720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e38765){if((e38765 instanceof Object)){
var ex__28123__auto__ = e38765;
var statearr_38766_38801 = state_38720;
(statearr_38766_38801[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38802 = state_38720;
state_38720 = G__38802;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_38720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_38720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___38772,mults,ensure_mult,p))
})();
var state__28186__auto__ = (function (){var statearr_38767 = f__28185__auto__.call(null);
(statearr_38767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___38772);

return statearr_38767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___38772,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args38803 = [];
var len__20259__auto___38806 = arguments.length;
var i__20260__auto___38807 = (0);
while(true){
if((i__20260__auto___38807 < len__20259__auto___38806)){
args38803.push((arguments[i__20260__auto___38807]));

var G__38808 = (i__20260__auto___38807 + (1));
i__20260__auto___38807 = G__38808;
continue;
} else {
}
break;
}

var G__38805 = args38803.length;
switch (G__38805) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38803.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args38810 = [];
var len__20259__auto___38813 = arguments.length;
var i__20260__auto___38814 = (0);
while(true){
if((i__20260__auto___38814 < len__20259__auto___38813)){
args38810.push((arguments[i__20260__auto___38814]));

var G__38815 = (i__20260__auto___38814 + (1));
i__20260__auto___38814 = G__38815;
continue;
} else {
}
break;
}

var G__38812 = args38810.length;
switch (G__38812) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38810.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args38817 = [];
var len__20259__auto___38888 = arguments.length;
var i__20260__auto___38889 = (0);
while(true){
if((i__20260__auto___38889 < len__20259__auto___38888)){
args38817.push((arguments[i__20260__auto___38889]));

var G__38890 = (i__20260__auto___38889 + (1));
i__20260__auto___38889 = G__38890;
continue;
} else {
}
break;
}

var G__38819 = args38817.length;
switch (G__38819) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38817.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28184__auto___38892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___38892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___38892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38858){
var state_val_38859 = (state_38858[(1)]);
if((state_val_38859 === (7))){
var state_38858__$1 = state_38858;
var statearr_38860_38893 = state_38858__$1;
(statearr_38860_38893[(2)] = null);

(statearr_38860_38893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (1))){
var state_38858__$1 = state_38858;
var statearr_38861_38894 = state_38858__$1;
(statearr_38861_38894[(2)] = null);

(statearr_38861_38894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (4))){
var inst_38822 = (state_38858[(7)]);
var inst_38824 = (inst_38822 < cnt);
var state_38858__$1 = state_38858;
if(cljs.core.truth_(inst_38824)){
var statearr_38862_38895 = state_38858__$1;
(statearr_38862_38895[(1)] = (6));

} else {
var statearr_38863_38896 = state_38858__$1;
(statearr_38863_38896[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (15))){
var inst_38854 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38864_38897 = state_38858__$1;
(statearr_38864_38897[(2)] = inst_38854);

(statearr_38864_38897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (13))){
var inst_38847 = cljs.core.async.close_BANG_.call(null,out);
var state_38858__$1 = state_38858;
var statearr_38865_38898 = state_38858__$1;
(statearr_38865_38898[(2)] = inst_38847);

(statearr_38865_38898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (6))){
var state_38858__$1 = state_38858;
var statearr_38866_38899 = state_38858__$1;
(statearr_38866_38899[(2)] = null);

(statearr_38866_38899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (3))){
var inst_38856 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38858__$1,inst_38856);
} else {
if((state_val_38859 === (12))){
var inst_38844 = (state_38858[(8)]);
var inst_38844__$1 = (state_38858[(2)]);
var inst_38845 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38844__$1);
var state_38858__$1 = (function (){var statearr_38867 = state_38858;
(statearr_38867[(8)] = inst_38844__$1);

return statearr_38867;
})();
if(cljs.core.truth_(inst_38845)){
var statearr_38868_38900 = state_38858__$1;
(statearr_38868_38900[(1)] = (13));

} else {
var statearr_38869_38901 = state_38858__$1;
(statearr_38869_38901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (2))){
var inst_38821 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38822 = (0);
var state_38858__$1 = (function (){var statearr_38870 = state_38858;
(statearr_38870[(7)] = inst_38822);

(statearr_38870[(9)] = inst_38821);

return statearr_38870;
})();
var statearr_38871_38902 = state_38858__$1;
(statearr_38871_38902[(2)] = null);

(statearr_38871_38902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (11))){
var inst_38822 = (state_38858[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38858,(10),Object,null,(9));
var inst_38831 = chs__$1.call(null,inst_38822);
var inst_38832 = done.call(null,inst_38822);
var inst_38833 = cljs.core.async.take_BANG_.call(null,inst_38831,inst_38832);
var state_38858__$1 = state_38858;
var statearr_38872_38903 = state_38858__$1;
(statearr_38872_38903[(2)] = inst_38833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (9))){
var inst_38822 = (state_38858[(7)]);
var inst_38835 = (state_38858[(2)]);
var inst_38836 = (inst_38822 + (1));
var inst_38822__$1 = inst_38836;
var state_38858__$1 = (function (){var statearr_38873 = state_38858;
(statearr_38873[(7)] = inst_38822__$1);

(statearr_38873[(10)] = inst_38835);

return statearr_38873;
})();
var statearr_38874_38904 = state_38858__$1;
(statearr_38874_38904[(2)] = null);

(statearr_38874_38904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (5))){
var inst_38842 = (state_38858[(2)]);
var state_38858__$1 = (function (){var statearr_38875 = state_38858;
(statearr_38875[(11)] = inst_38842);

return statearr_38875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38858__$1,(12),dchan);
} else {
if((state_val_38859 === (14))){
var inst_38844 = (state_38858[(8)]);
var inst_38849 = cljs.core.apply.call(null,f,inst_38844);
var state_38858__$1 = state_38858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38858__$1,(16),out,inst_38849);
} else {
if((state_val_38859 === (16))){
var inst_38851 = (state_38858[(2)]);
var state_38858__$1 = (function (){var statearr_38876 = state_38858;
(statearr_38876[(12)] = inst_38851);

return statearr_38876;
})();
var statearr_38877_38905 = state_38858__$1;
(statearr_38877_38905[(2)] = null);

(statearr_38877_38905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (10))){
var inst_38826 = (state_38858[(2)]);
var inst_38827 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38858__$1 = (function (){var statearr_38878 = state_38858;
(statearr_38878[(13)] = inst_38826);

return statearr_38878;
})();
var statearr_38879_38906 = state_38858__$1;
(statearr_38879_38906[(2)] = inst_38827);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (8))){
var inst_38840 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38880_38907 = state_38858__$1;
(statearr_38880_38907[(2)] = inst_38840);

(statearr_38880_38907[(1)] = (5));


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
});})(c__28184__auto___38892,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28119__auto__,c__28184__auto___38892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_38884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38884[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_38884[(1)] = (1));

return statearr_38884;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_38858){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_38858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e38885){if((e38885 instanceof Object)){
var ex__28123__auto__ = e38885;
var statearr_38886_38908 = state_38858;
(statearr_38886_38908[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38909 = state_38858;
state_38858 = G__38909;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_38858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_38858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___38892,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28186__auto__ = (function (){var statearr_38887 = f__28185__auto__.call(null);
(statearr_38887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___38892);

return statearr_38887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___38892,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args38911 = [];
var len__20259__auto___38967 = arguments.length;
var i__20260__auto___38968 = (0);
while(true){
if((i__20260__auto___38968 < len__20259__auto___38967)){
args38911.push((arguments[i__20260__auto___38968]));

var G__38969 = (i__20260__auto___38968 + (1));
i__20260__auto___38968 = G__38969;
continue;
} else {
}
break;
}

var G__38913 = args38911.length;
switch (G__38913) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38911.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28184__auto___38971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___38971,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___38971,out){
return (function (state_38943){
var state_val_38944 = (state_38943[(1)]);
if((state_val_38944 === (7))){
var inst_38922 = (state_38943[(7)]);
var inst_38923 = (state_38943[(8)]);
var inst_38922__$1 = (state_38943[(2)]);
var inst_38923__$1 = cljs.core.nth.call(null,inst_38922__$1,(0),null);
var inst_38924 = cljs.core.nth.call(null,inst_38922__$1,(1),null);
var inst_38925 = (inst_38923__$1 == null);
var state_38943__$1 = (function (){var statearr_38945 = state_38943;
(statearr_38945[(7)] = inst_38922__$1);

(statearr_38945[(8)] = inst_38923__$1);

(statearr_38945[(9)] = inst_38924);

return statearr_38945;
})();
if(cljs.core.truth_(inst_38925)){
var statearr_38946_38972 = state_38943__$1;
(statearr_38946_38972[(1)] = (8));

} else {
var statearr_38947_38973 = state_38943__$1;
(statearr_38947_38973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (1))){
var inst_38914 = cljs.core.vec.call(null,chs);
var inst_38915 = inst_38914;
var state_38943__$1 = (function (){var statearr_38948 = state_38943;
(statearr_38948[(10)] = inst_38915);

return statearr_38948;
})();
var statearr_38949_38974 = state_38943__$1;
(statearr_38949_38974[(2)] = null);

(statearr_38949_38974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (4))){
var inst_38915 = (state_38943[(10)]);
var state_38943__$1 = state_38943;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38943__$1,(7),inst_38915);
} else {
if((state_val_38944 === (6))){
var inst_38939 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
var statearr_38950_38975 = state_38943__$1;
(statearr_38950_38975[(2)] = inst_38939);

(statearr_38950_38975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (3))){
var inst_38941 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38943__$1,inst_38941);
} else {
if((state_val_38944 === (2))){
var inst_38915 = (state_38943[(10)]);
var inst_38917 = cljs.core.count.call(null,inst_38915);
var inst_38918 = (inst_38917 > (0));
var state_38943__$1 = state_38943;
if(cljs.core.truth_(inst_38918)){
var statearr_38952_38976 = state_38943__$1;
(statearr_38952_38976[(1)] = (4));

} else {
var statearr_38953_38977 = state_38943__$1;
(statearr_38953_38977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (11))){
var inst_38915 = (state_38943[(10)]);
var inst_38932 = (state_38943[(2)]);
var tmp38951 = inst_38915;
var inst_38915__$1 = tmp38951;
var state_38943__$1 = (function (){var statearr_38954 = state_38943;
(statearr_38954[(10)] = inst_38915__$1);

(statearr_38954[(11)] = inst_38932);

return statearr_38954;
})();
var statearr_38955_38978 = state_38943__$1;
(statearr_38955_38978[(2)] = null);

(statearr_38955_38978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (9))){
var inst_38923 = (state_38943[(8)]);
var state_38943__$1 = state_38943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38943__$1,(11),out,inst_38923);
} else {
if((state_val_38944 === (5))){
var inst_38937 = cljs.core.async.close_BANG_.call(null,out);
var state_38943__$1 = state_38943;
var statearr_38956_38979 = state_38943__$1;
(statearr_38956_38979[(2)] = inst_38937);

(statearr_38956_38979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (10))){
var inst_38935 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
var statearr_38957_38980 = state_38943__$1;
(statearr_38957_38980[(2)] = inst_38935);

(statearr_38957_38980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (8))){
var inst_38915 = (state_38943[(10)]);
var inst_38922 = (state_38943[(7)]);
var inst_38923 = (state_38943[(8)]);
var inst_38924 = (state_38943[(9)]);
var inst_38927 = (function (){var cs = inst_38915;
var vec__38920 = inst_38922;
var v = inst_38923;
var c = inst_38924;
return ((function (cs,vec__38920,v,c,inst_38915,inst_38922,inst_38923,inst_38924,state_val_38944,c__28184__auto___38971,out){
return (function (p1__38910_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38910_SHARP_);
});
;})(cs,vec__38920,v,c,inst_38915,inst_38922,inst_38923,inst_38924,state_val_38944,c__28184__auto___38971,out))
})();
var inst_38928 = cljs.core.filterv.call(null,inst_38927,inst_38915);
var inst_38915__$1 = inst_38928;
var state_38943__$1 = (function (){var statearr_38958 = state_38943;
(statearr_38958[(10)] = inst_38915__$1);

return statearr_38958;
})();
var statearr_38959_38981 = state_38943__$1;
(statearr_38959_38981[(2)] = null);

(statearr_38959_38981[(1)] = (2));


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
});})(c__28184__auto___38971,out))
;
return ((function (switch__28119__auto__,c__28184__auto___38971,out){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_38963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38963[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_38963[(1)] = (1));

return statearr_38963;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_38943){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_38943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e38964){if((e38964 instanceof Object)){
var ex__28123__auto__ = e38964;
var statearr_38965_38982 = state_38943;
(statearr_38965_38982[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38943;
state_38943 = G__38983;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_38943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_38943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___38971,out))
})();
var state__28186__auto__ = (function (){var statearr_38966 = f__28185__auto__.call(null);
(statearr_38966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___38971);

return statearr_38966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___38971,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args38984 = [];
var len__20259__auto___39033 = arguments.length;
var i__20260__auto___39034 = (0);
while(true){
if((i__20260__auto___39034 < len__20259__auto___39033)){
args38984.push((arguments[i__20260__auto___39034]));

var G__39035 = (i__20260__auto___39034 + (1));
i__20260__auto___39034 = G__39035;
continue;
} else {
}
break;
}

var G__38986 = args38984.length;
switch (G__38986) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38984.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28184__auto___39037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___39037,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___39037,out){
return (function (state_39010){
var state_val_39011 = (state_39010[(1)]);
if((state_val_39011 === (7))){
var inst_38992 = (state_39010[(7)]);
var inst_38992__$1 = (state_39010[(2)]);
var inst_38993 = (inst_38992__$1 == null);
var inst_38994 = cljs.core.not.call(null,inst_38993);
var state_39010__$1 = (function (){var statearr_39012 = state_39010;
(statearr_39012[(7)] = inst_38992__$1);

return statearr_39012;
})();
if(inst_38994){
var statearr_39013_39038 = state_39010__$1;
(statearr_39013_39038[(1)] = (8));

} else {
var statearr_39014_39039 = state_39010__$1;
(statearr_39014_39039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (1))){
var inst_38987 = (0);
var state_39010__$1 = (function (){var statearr_39015 = state_39010;
(statearr_39015[(8)] = inst_38987);

return statearr_39015;
})();
var statearr_39016_39040 = state_39010__$1;
(statearr_39016_39040[(2)] = null);

(statearr_39016_39040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (4))){
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39010__$1,(7),ch);
} else {
if((state_val_39011 === (6))){
var inst_39005 = (state_39010[(2)]);
var state_39010__$1 = state_39010;
var statearr_39017_39041 = state_39010__$1;
(statearr_39017_39041[(2)] = inst_39005);

(statearr_39017_39041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (3))){
var inst_39007 = (state_39010[(2)]);
var inst_39008 = cljs.core.async.close_BANG_.call(null,out);
var state_39010__$1 = (function (){var statearr_39018 = state_39010;
(statearr_39018[(9)] = inst_39007);

return statearr_39018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39010__$1,inst_39008);
} else {
if((state_val_39011 === (2))){
var inst_38987 = (state_39010[(8)]);
var inst_38989 = (inst_38987 < n);
var state_39010__$1 = state_39010;
if(cljs.core.truth_(inst_38989)){
var statearr_39019_39042 = state_39010__$1;
(statearr_39019_39042[(1)] = (4));

} else {
var statearr_39020_39043 = state_39010__$1;
(statearr_39020_39043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (11))){
var inst_38987 = (state_39010[(8)]);
var inst_38997 = (state_39010[(2)]);
var inst_38998 = (inst_38987 + (1));
var inst_38987__$1 = inst_38998;
var state_39010__$1 = (function (){var statearr_39021 = state_39010;
(statearr_39021[(8)] = inst_38987__$1);

(statearr_39021[(10)] = inst_38997);

return statearr_39021;
})();
var statearr_39022_39044 = state_39010__$1;
(statearr_39022_39044[(2)] = null);

(statearr_39022_39044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (9))){
var state_39010__$1 = state_39010;
var statearr_39023_39045 = state_39010__$1;
(statearr_39023_39045[(2)] = null);

(statearr_39023_39045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (5))){
var state_39010__$1 = state_39010;
var statearr_39024_39046 = state_39010__$1;
(statearr_39024_39046[(2)] = null);

(statearr_39024_39046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (10))){
var inst_39002 = (state_39010[(2)]);
var state_39010__$1 = state_39010;
var statearr_39025_39047 = state_39010__$1;
(statearr_39025_39047[(2)] = inst_39002);

(statearr_39025_39047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (8))){
var inst_38992 = (state_39010[(7)]);
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39010__$1,(11),out,inst_38992);
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
});})(c__28184__auto___39037,out))
;
return ((function (switch__28119__auto__,c__28184__auto___39037,out){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_39029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39029[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_39029[(1)] = (1));

return statearr_39029;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_39010){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_39010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e39030){if((e39030 instanceof Object)){
var ex__28123__auto__ = e39030;
var statearr_39031_39048 = state_39010;
(statearr_39031_39048[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39049 = state_39010;
state_39010 = G__39049;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_39010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_39010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___39037,out))
})();
var state__28186__auto__ = (function (){var statearr_39032 = f__28185__auto__.call(null);
(statearr_39032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___39037);

return statearr_39032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___39037,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39057 = (function (map_LT_,f,ch,meta39058){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39058 = meta39058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39059,meta39058__$1){
var self__ = this;
var _39059__$1 = this;
return (new cljs.core.async.t_cljs$core$async39057(self__.map_LT_,self__.f,self__.ch,meta39058__$1));
});

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39059){
var self__ = this;
var _39059__$1 = this;
return self__.meta39058;
});

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39060 = (function (map_LT_,f,ch,meta39058,_,fn1,meta39061){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39058 = meta39058;
this._ = _;
this.fn1 = fn1;
this.meta39061 = meta39061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39062,meta39061__$1){
var self__ = this;
var _39062__$1 = this;
return (new cljs.core.async.t_cljs$core$async39060(self__.map_LT_,self__.f,self__.ch,self__.meta39058,self__._,self__.fn1,meta39061__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39062){
var self__ = this;
var _39062__$1 = this;
return self__.meta39061;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39050_SHARP_){
return f1.call(null,(((p1__39050_SHARP_ == null))?null:self__.f.call(null,p1__39050_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39060.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39058","meta39058",-159933408,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39057","cljs.core.async/t_cljs$core$async39057",-1846630747,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39061","meta39061",1362181792,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39060";

cljs.core.async.t_cljs$core$async39060.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async39060");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39060 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39060(map_LT___$1,f__$1,ch__$1,meta39058__$1,___$2,fn1__$1,meta39061){
return (new cljs.core.async.t_cljs$core$async39060(map_LT___$1,f__$1,ch__$1,meta39058__$1,___$2,fn1__$1,meta39061));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39060(self__.map_LT_,self__.f,self__.ch,self__.meta39058,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19189__auto__ = ret;
if(cljs.core.truth_(and__19189__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19189__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39058","meta39058",-159933408,null)], null);
});

cljs.core.async.t_cljs$core$async39057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39057";

cljs.core.async.t_cljs$core$async39057.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async39057");
});

cljs.core.async.__GT_t_cljs$core$async39057 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39057(map_LT___$1,f__$1,ch__$1,meta39058){
return (new cljs.core.async.t_cljs$core$async39057(map_LT___$1,f__$1,ch__$1,meta39058));
});

}

return (new cljs.core.async.t_cljs$core$async39057(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39066 = (function (map_GT_,f,ch,meta39067){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39067 = meta39067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39068,meta39067__$1){
var self__ = this;
var _39068__$1 = this;
return (new cljs.core.async.t_cljs$core$async39066(self__.map_GT_,self__.f,self__.ch,meta39067__$1));
});

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39068){
var self__ = this;
var _39068__$1 = this;
return self__.meta39067;
});

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39067","meta39067",2057772277,null)], null);
});

cljs.core.async.t_cljs$core$async39066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39066";

cljs.core.async.t_cljs$core$async39066.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async39066");
});

cljs.core.async.__GT_t_cljs$core$async39066 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39066(map_GT___$1,f__$1,ch__$1,meta39067){
return (new cljs.core.async.t_cljs$core$async39066(map_GT___$1,f__$1,ch__$1,meta39067));
});

}

return (new cljs.core.async.t_cljs$core$async39066(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39072 = (function (filter_GT_,p,ch,meta39073){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39073 = meta39073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39074,meta39073__$1){
var self__ = this;
var _39074__$1 = this;
return (new cljs.core.async.t_cljs$core$async39072(self__.filter_GT_,self__.p,self__.ch,meta39073__$1));
});

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39074){
var self__ = this;
var _39074__$1 = this;
return self__.meta39073;
});

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39073","meta39073",522098618,null)], null);
});

cljs.core.async.t_cljs$core$async39072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39072";

cljs.core.async.t_cljs$core$async39072.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"cljs.core.async/t_cljs$core$async39072");
});

cljs.core.async.__GT_t_cljs$core$async39072 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39072(filter_GT___$1,p__$1,ch__$1,meta39073){
return (new cljs.core.async.t_cljs$core$async39072(filter_GT___$1,p__$1,ch__$1,meta39073));
});

}

return (new cljs.core.async.t_cljs$core$async39072(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39075 = [];
var len__20259__auto___39119 = arguments.length;
var i__20260__auto___39120 = (0);
while(true){
if((i__20260__auto___39120 < len__20259__auto___39119)){
args39075.push((arguments[i__20260__auto___39120]));

var G__39121 = (i__20260__auto___39120 + (1));
i__20260__auto___39120 = G__39121;
continue;
} else {
}
break;
}

var G__39077 = args39075.length;
switch (G__39077) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39075.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28184__auto___39123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___39123,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___39123,out){
return (function (state_39098){
var state_val_39099 = (state_39098[(1)]);
if((state_val_39099 === (7))){
var inst_39094 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
var statearr_39100_39124 = state_39098__$1;
(statearr_39100_39124[(2)] = inst_39094);

(statearr_39100_39124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (1))){
var state_39098__$1 = state_39098;
var statearr_39101_39125 = state_39098__$1;
(statearr_39101_39125[(2)] = null);

(statearr_39101_39125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (4))){
var inst_39080 = (state_39098[(7)]);
var inst_39080__$1 = (state_39098[(2)]);
var inst_39081 = (inst_39080__$1 == null);
var state_39098__$1 = (function (){var statearr_39102 = state_39098;
(statearr_39102[(7)] = inst_39080__$1);

return statearr_39102;
})();
if(cljs.core.truth_(inst_39081)){
var statearr_39103_39126 = state_39098__$1;
(statearr_39103_39126[(1)] = (5));

} else {
var statearr_39104_39127 = state_39098__$1;
(statearr_39104_39127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (6))){
var inst_39080 = (state_39098[(7)]);
var inst_39085 = p.call(null,inst_39080);
var state_39098__$1 = state_39098;
if(cljs.core.truth_(inst_39085)){
var statearr_39105_39128 = state_39098__$1;
(statearr_39105_39128[(1)] = (8));

} else {
var statearr_39106_39129 = state_39098__$1;
(statearr_39106_39129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (3))){
var inst_39096 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39098__$1,inst_39096);
} else {
if((state_val_39099 === (2))){
var state_39098__$1 = state_39098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39098__$1,(4),ch);
} else {
if((state_val_39099 === (11))){
var inst_39088 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
var statearr_39107_39130 = state_39098__$1;
(statearr_39107_39130[(2)] = inst_39088);

(statearr_39107_39130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (9))){
var state_39098__$1 = state_39098;
var statearr_39108_39131 = state_39098__$1;
(statearr_39108_39131[(2)] = null);

(statearr_39108_39131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (5))){
var inst_39083 = cljs.core.async.close_BANG_.call(null,out);
var state_39098__$1 = state_39098;
var statearr_39109_39132 = state_39098__$1;
(statearr_39109_39132[(2)] = inst_39083);

(statearr_39109_39132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (10))){
var inst_39091 = (state_39098[(2)]);
var state_39098__$1 = (function (){var statearr_39110 = state_39098;
(statearr_39110[(8)] = inst_39091);

return statearr_39110;
})();
var statearr_39111_39133 = state_39098__$1;
(statearr_39111_39133[(2)] = null);

(statearr_39111_39133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (8))){
var inst_39080 = (state_39098[(7)]);
var state_39098__$1 = state_39098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39098__$1,(11),out,inst_39080);
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
});})(c__28184__auto___39123,out))
;
return ((function (switch__28119__auto__,c__28184__auto___39123,out){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_39115 = [null,null,null,null,null,null,null,null,null];
(statearr_39115[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_39115[(1)] = (1));

return statearr_39115;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_39098){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_39098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e39116){if((e39116 instanceof Object)){
var ex__28123__auto__ = e39116;
var statearr_39117_39134 = state_39098;
(statearr_39117_39134[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39135 = state_39098;
state_39098 = G__39135;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_39098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_39098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___39123,out))
})();
var state__28186__auto__ = (function (){var statearr_39118 = f__28185__auto__.call(null);
(statearr_39118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___39123);

return statearr_39118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___39123,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39136 = [];
var len__20259__auto___39139 = arguments.length;
var i__20260__auto___39140 = (0);
while(true){
if((i__20260__auto___39140 < len__20259__auto___39139)){
args39136.push((arguments[i__20260__auto___39140]));

var G__39141 = (i__20260__auto___39140 + (1));
i__20260__auto___39140 = G__39141;
continue;
} else {
}
break;
}

var G__39138 = args39136.length;
switch (G__39138) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39136.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_39308){
var state_val_39309 = (state_39308[(1)]);
if((state_val_39309 === (7))){
var inst_39304 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39310_39351 = state_39308__$1;
(statearr_39310_39351[(2)] = inst_39304);

(statearr_39310_39351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (20))){
var inst_39274 = (state_39308[(7)]);
var inst_39285 = (state_39308[(2)]);
var inst_39286 = cljs.core.next.call(null,inst_39274);
var inst_39260 = inst_39286;
var inst_39261 = null;
var inst_39262 = (0);
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39311 = state_39308;
(statearr_39311[(8)] = inst_39260);

(statearr_39311[(9)] = inst_39285);

(statearr_39311[(10)] = inst_39263);

(statearr_39311[(11)] = inst_39262);

(statearr_39311[(12)] = inst_39261);

return statearr_39311;
})();
var statearr_39312_39352 = state_39308__$1;
(statearr_39312_39352[(2)] = null);

(statearr_39312_39352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (1))){
var state_39308__$1 = state_39308;
var statearr_39313_39353 = state_39308__$1;
(statearr_39313_39353[(2)] = null);

(statearr_39313_39353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (4))){
var inst_39249 = (state_39308[(13)]);
var inst_39249__$1 = (state_39308[(2)]);
var inst_39250 = (inst_39249__$1 == null);
var state_39308__$1 = (function (){var statearr_39314 = state_39308;
(statearr_39314[(13)] = inst_39249__$1);

return statearr_39314;
})();
if(cljs.core.truth_(inst_39250)){
var statearr_39315_39354 = state_39308__$1;
(statearr_39315_39354[(1)] = (5));

} else {
var statearr_39316_39355 = state_39308__$1;
(statearr_39316_39355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (15))){
var state_39308__$1 = state_39308;
var statearr_39320_39356 = state_39308__$1;
(statearr_39320_39356[(2)] = null);

(statearr_39320_39356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (21))){
var state_39308__$1 = state_39308;
var statearr_39321_39357 = state_39308__$1;
(statearr_39321_39357[(2)] = null);

(statearr_39321_39357[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (13))){
var inst_39260 = (state_39308[(8)]);
var inst_39263 = (state_39308[(10)]);
var inst_39262 = (state_39308[(11)]);
var inst_39261 = (state_39308[(12)]);
var inst_39270 = (state_39308[(2)]);
var inst_39271 = (inst_39263 + (1));
var tmp39317 = inst_39260;
var tmp39318 = inst_39262;
var tmp39319 = inst_39261;
var inst_39260__$1 = tmp39317;
var inst_39261__$1 = tmp39319;
var inst_39262__$1 = tmp39318;
var inst_39263__$1 = inst_39271;
var state_39308__$1 = (function (){var statearr_39322 = state_39308;
(statearr_39322[(8)] = inst_39260__$1);

(statearr_39322[(14)] = inst_39270);

(statearr_39322[(10)] = inst_39263__$1);

(statearr_39322[(11)] = inst_39262__$1);

(statearr_39322[(12)] = inst_39261__$1);

return statearr_39322;
})();
var statearr_39323_39358 = state_39308__$1;
(statearr_39323_39358[(2)] = null);

(statearr_39323_39358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (22))){
var state_39308__$1 = state_39308;
var statearr_39324_39359 = state_39308__$1;
(statearr_39324_39359[(2)] = null);

(statearr_39324_39359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (6))){
var inst_39249 = (state_39308[(13)]);
var inst_39258 = f.call(null,inst_39249);
var inst_39259 = cljs.core.seq.call(null,inst_39258);
var inst_39260 = inst_39259;
var inst_39261 = null;
var inst_39262 = (0);
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39325 = state_39308;
(statearr_39325[(8)] = inst_39260);

(statearr_39325[(10)] = inst_39263);

(statearr_39325[(11)] = inst_39262);

(statearr_39325[(12)] = inst_39261);

return statearr_39325;
})();
var statearr_39326_39360 = state_39308__$1;
(statearr_39326_39360[(2)] = null);

(statearr_39326_39360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (17))){
var inst_39274 = (state_39308[(7)]);
var inst_39278 = cljs.core.chunk_first.call(null,inst_39274);
var inst_39279 = cljs.core.chunk_rest.call(null,inst_39274);
var inst_39280 = cljs.core.count.call(null,inst_39278);
var inst_39260 = inst_39279;
var inst_39261 = inst_39278;
var inst_39262 = inst_39280;
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39327 = state_39308;
(statearr_39327[(8)] = inst_39260);

(statearr_39327[(10)] = inst_39263);

(statearr_39327[(11)] = inst_39262);

(statearr_39327[(12)] = inst_39261);

return statearr_39327;
})();
var statearr_39328_39361 = state_39308__$1;
(statearr_39328_39361[(2)] = null);

(statearr_39328_39361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (3))){
var inst_39306 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39308__$1,inst_39306);
} else {
if((state_val_39309 === (12))){
var inst_39294 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39329_39362 = state_39308__$1;
(statearr_39329_39362[(2)] = inst_39294);

(statearr_39329_39362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (2))){
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39308__$1,(4),in$);
} else {
if((state_val_39309 === (23))){
var inst_39302 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39330_39363 = state_39308__$1;
(statearr_39330_39363[(2)] = inst_39302);

(statearr_39330_39363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (19))){
var inst_39289 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39331_39364 = state_39308__$1;
(statearr_39331_39364[(2)] = inst_39289);

(statearr_39331_39364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (11))){
var inst_39260 = (state_39308[(8)]);
var inst_39274 = (state_39308[(7)]);
var inst_39274__$1 = cljs.core.seq.call(null,inst_39260);
var state_39308__$1 = (function (){var statearr_39332 = state_39308;
(statearr_39332[(7)] = inst_39274__$1);

return statearr_39332;
})();
if(inst_39274__$1){
var statearr_39333_39365 = state_39308__$1;
(statearr_39333_39365[(1)] = (14));

} else {
var statearr_39334_39366 = state_39308__$1;
(statearr_39334_39366[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (9))){
var inst_39296 = (state_39308[(2)]);
var inst_39297 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39308__$1 = (function (){var statearr_39335 = state_39308;
(statearr_39335[(15)] = inst_39296);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39297)){
var statearr_39336_39367 = state_39308__$1;
(statearr_39336_39367[(1)] = (21));

} else {
var statearr_39337_39368 = state_39308__$1;
(statearr_39337_39368[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (5))){
var inst_39252 = cljs.core.async.close_BANG_.call(null,out);
var state_39308__$1 = state_39308;
var statearr_39338_39369 = state_39308__$1;
(statearr_39338_39369[(2)] = inst_39252);

(statearr_39338_39369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (14))){
var inst_39274 = (state_39308[(7)]);
var inst_39276 = cljs.core.chunked_seq_QMARK_.call(null,inst_39274);
var state_39308__$1 = state_39308;
if(inst_39276){
var statearr_39339_39370 = state_39308__$1;
(statearr_39339_39370[(1)] = (17));

} else {
var statearr_39340_39371 = state_39308__$1;
(statearr_39340_39371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (16))){
var inst_39292 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39341_39372 = state_39308__$1;
(statearr_39341_39372[(2)] = inst_39292);

(statearr_39341_39372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (10))){
var inst_39263 = (state_39308[(10)]);
var inst_39261 = (state_39308[(12)]);
var inst_39268 = cljs.core._nth.call(null,inst_39261,inst_39263);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39308__$1,(13),out,inst_39268);
} else {
if((state_val_39309 === (18))){
var inst_39274 = (state_39308[(7)]);
var inst_39283 = cljs.core.first.call(null,inst_39274);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39308__$1,(20),out,inst_39283);
} else {
if((state_val_39309 === (8))){
var inst_39263 = (state_39308[(10)]);
var inst_39262 = (state_39308[(11)]);
var inst_39265 = (inst_39263 < inst_39262);
var inst_39266 = inst_39265;
var state_39308__$1 = state_39308;
if(cljs.core.truth_(inst_39266)){
var statearr_39342_39373 = state_39308__$1;
(statearr_39342_39373[(1)] = (10));

} else {
var statearr_39343_39374 = state_39308__$1;
(statearr_39343_39374[(1)] = (11));

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
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28120__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28120__auto____0 = (function (){
var statearr_39347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39347[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28120__auto__);

(statearr_39347[(1)] = (1));

return statearr_39347;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28120__auto____1 = (function (state_39308){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_39308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e39348){if((e39348 instanceof Object)){
var ex__28123__auto__ = e39348;
var statearr_39349_39375 = state_39308;
(statearr_39349_39375[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39376 = state_39308;
state_39308 = G__39376;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28120__auto__ = function(state_39308){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28120__auto____1.call(this,state_39308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28120__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28120__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_39350 = f__28185__auto__.call(null);
(statearr_39350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_39350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39377 = [];
var len__20259__auto___39380 = arguments.length;
var i__20260__auto___39381 = (0);
while(true){
if((i__20260__auto___39381 < len__20259__auto___39380)){
args39377.push((arguments[i__20260__auto___39381]));

var G__39382 = (i__20260__auto___39381 + (1));
i__20260__auto___39381 = G__39382;
continue;
} else {
}
break;
}

var G__39379 = args39377.length;
switch (G__39379) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39377.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39384 = [];
var len__20259__auto___39387 = arguments.length;
var i__20260__auto___39388 = (0);
while(true){
if((i__20260__auto___39388 < len__20259__auto___39387)){
args39384.push((arguments[i__20260__auto___39388]));

var G__39389 = (i__20260__auto___39388 + (1));
i__20260__auto___39388 = G__39389;
continue;
} else {
}
break;
}

var G__39386 = args39384.length;
switch (G__39386) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39384.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39391 = [];
var len__20259__auto___39442 = arguments.length;
var i__20260__auto___39443 = (0);
while(true){
if((i__20260__auto___39443 < len__20259__auto___39442)){
args39391.push((arguments[i__20260__auto___39443]));

var G__39444 = (i__20260__auto___39443 + (1));
i__20260__auto___39443 = G__39444;
continue;
} else {
}
break;
}

var G__39393 = args39391.length;
switch (G__39393) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39391.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28184__auto___39446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___39446,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___39446,out){
return (function (state_39417){
var state_val_39418 = (state_39417[(1)]);
if((state_val_39418 === (7))){
var inst_39412 = (state_39417[(2)]);
var state_39417__$1 = state_39417;
var statearr_39419_39447 = state_39417__$1;
(statearr_39419_39447[(2)] = inst_39412);

(statearr_39419_39447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (1))){
var inst_39394 = null;
var state_39417__$1 = (function (){var statearr_39420 = state_39417;
(statearr_39420[(7)] = inst_39394);

return statearr_39420;
})();
var statearr_39421_39448 = state_39417__$1;
(statearr_39421_39448[(2)] = null);

(statearr_39421_39448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (4))){
var inst_39397 = (state_39417[(8)]);
var inst_39397__$1 = (state_39417[(2)]);
var inst_39398 = (inst_39397__$1 == null);
var inst_39399 = cljs.core.not.call(null,inst_39398);
var state_39417__$1 = (function (){var statearr_39422 = state_39417;
(statearr_39422[(8)] = inst_39397__$1);

return statearr_39422;
})();
if(inst_39399){
var statearr_39423_39449 = state_39417__$1;
(statearr_39423_39449[(1)] = (5));

} else {
var statearr_39424_39450 = state_39417__$1;
(statearr_39424_39450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (6))){
var state_39417__$1 = state_39417;
var statearr_39425_39451 = state_39417__$1;
(statearr_39425_39451[(2)] = null);

(statearr_39425_39451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (3))){
var inst_39414 = (state_39417[(2)]);
var inst_39415 = cljs.core.async.close_BANG_.call(null,out);
var state_39417__$1 = (function (){var statearr_39426 = state_39417;
(statearr_39426[(9)] = inst_39414);

return statearr_39426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39417__$1,inst_39415);
} else {
if((state_val_39418 === (2))){
var state_39417__$1 = state_39417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39417__$1,(4),ch);
} else {
if((state_val_39418 === (11))){
var inst_39397 = (state_39417[(8)]);
var inst_39406 = (state_39417[(2)]);
var inst_39394 = inst_39397;
var state_39417__$1 = (function (){var statearr_39427 = state_39417;
(statearr_39427[(7)] = inst_39394);

(statearr_39427[(10)] = inst_39406);

return statearr_39427;
})();
var statearr_39428_39452 = state_39417__$1;
(statearr_39428_39452[(2)] = null);

(statearr_39428_39452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (9))){
var inst_39397 = (state_39417[(8)]);
var state_39417__$1 = state_39417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39417__$1,(11),out,inst_39397);
} else {
if((state_val_39418 === (5))){
var inst_39394 = (state_39417[(7)]);
var inst_39397 = (state_39417[(8)]);
var inst_39401 = cljs.core._EQ_.call(null,inst_39397,inst_39394);
var state_39417__$1 = state_39417;
if(inst_39401){
var statearr_39430_39453 = state_39417__$1;
(statearr_39430_39453[(1)] = (8));

} else {
var statearr_39431_39454 = state_39417__$1;
(statearr_39431_39454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (10))){
var inst_39409 = (state_39417[(2)]);
var state_39417__$1 = state_39417;
var statearr_39432_39455 = state_39417__$1;
(statearr_39432_39455[(2)] = inst_39409);

(statearr_39432_39455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (8))){
var inst_39394 = (state_39417[(7)]);
var tmp39429 = inst_39394;
var inst_39394__$1 = tmp39429;
var state_39417__$1 = (function (){var statearr_39433 = state_39417;
(statearr_39433[(7)] = inst_39394__$1);

return statearr_39433;
})();
var statearr_39434_39456 = state_39417__$1;
(statearr_39434_39456[(2)] = null);

(statearr_39434_39456[(1)] = (2));


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
});})(c__28184__auto___39446,out))
;
return ((function (switch__28119__auto__,c__28184__auto___39446,out){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_39438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39438[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_39438[(1)] = (1));

return statearr_39438;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_39417){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_39417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e39439){if((e39439 instanceof Object)){
var ex__28123__auto__ = e39439;
var statearr_39440_39457 = state_39417;
(statearr_39440_39457[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39458 = state_39417;
state_39417 = G__39458;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_39417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_39417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___39446,out))
})();
var state__28186__auto__ = (function (){var statearr_39441 = f__28185__auto__.call(null);
(statearr_39441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___39446);

return statearr_39441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___39446,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39459 = [];
var len__20259__auto___39529 = arguments.length;
var i__20260__auto___39530 = (0);
while(true){
if((i__20260__auto___39530 < len__20259__auto___39529)){
args39459.push((arguments[i__20260__auto___39530]));

var G__39531 = (i__20260__auto___39530 + (1));
i__20260__auto___39530 = G__39531;
continue;
} else {
}
break;
}

var G__39461 = args39459.length;
switch (G__39461) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39459.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28184__auto___39533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___39533,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___39533,out){
return (function (state_39499){
var state_val_39500 = (state_39499[(1)]);
if((state_val_39500 === (7))){
var inst_39495 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39501_39534 = state_39499__$1;
(statearr_39501_39534[(2)] = inst_39495);

(statearr_39501_39534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (1))){
var inst_39462 = (new Array(n));
var inst_39463 = inst_39462;
var inst_39464 = (0);
var state_39499__$1 = (function (){var statearr_39502 = state_39499;
(statearr_39502[(7)] = inst_39463);

(statearr_39502[(8)] = inst_39464);

return statearr_39502;
})();
var statearr_39503_39535 = state_39499__$1;
(statearr_39503_39535[(2)] = null);

(statearr_39503_39535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (4))){
var inst_39467 = (state_39499[(9)]);
var inst_39467__$1 = (state_39499[(2)]);
var inst_39468 = (inst_39467__$1 == null);
var inst_39469 = cljs.core.not.call(null,inst_39468);
var state_39499__$1 = (function (){var statearr_39504 = state_39499;
(statearr_39504[(9)] = inst_39467__$1);

return statearr_39504;
})();
if(inst_39469){
var statearr_39505_39536 = state_39499__$1;
(statearr_39505_39536[(1)] = (5));

} else {
var statearr_39506_39537 = state_39499__$1;
(statearr_39506_39537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (15))){
var inst_39489 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39507_39538 = state_39499__$1;
(statearr_39507_39538[(2)] = inst_39489);

(statearr_39507_39538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (13))){
var state_39499__$1 = state_39499;
var statearr_39508_39539 = state_39499__$1;
(statearr_39508_39539[(2)] = null);

(statearr_39508_39539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (6))){
var inst_39464 = (state_39499[(8)]);
var inst_39485 = (inst_39464 > (0));
var state_39499__$1 = state_39499;
if(cljs.core.truth_(inst_39485)){
var statearr_39509_39540 = state_39499__$1;
(statearr_39509_39540[(1)] = (12));

} else {
var statearr_39510_39541 = state_39499__$1;
(statearr_39510_39541[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (3))){
var inst_39497 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39499__$1,inst_39497);
} else {
if((state_val_39500 === (12))){
var inst_39463 = (state_39499[(7)]);
var inst_39487 = cljs.core.vec.call(null,inst_39463);
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39499__$1,(15),out,inst_39487);
} else {
if((state_val_39500 === (2))){
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39499__$1,(4),ch);
} else {
if((state_val_39500 === (11))){
var inst_39479 = (state_39499[(2)]);
var inst_39480 = (new Array(n));
var inst_39463 = inst_39480;
var inst_39464 = (0);
var state_39499__$1 = (function (){var statearr_39511 = state_39499;
(statearr_39511[(10)] = inst_39479);

(statearr_39511[(7)] = inst_39463);

(statearr_39511[(8)] = inst_39464);

return statearr_39511;
})();
var statearr_39512_39542 = state_39499__$1;
(statearr_39512_39542[(2)] = null);

(statearr_39512_39542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (9))){
var inst_39463 = (state_39499[(7)]);
var inst_39477 = cljs.core.vec.call(null,inst_39463);
var state_39499__$1 = state_39499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39499__$1,(11),out,inst_39477);
} else {
if((state_val_39500 === (5))){
var inst_39463 = (state_39499[(7)]);
var inst_39467 = (state_39499[(9)]);
var inst_39472 = (state_39499[(11)]);
var inst_39464 = (state_39499[(8)]);
var inst_39471 = (inst_39463[inst_39464] = inst_39467);
var inst_39472__$1 = (inst_39464 + (1));
var inst_39473 = (inst_39472__$1 < n);
var state_39499__$1 = (function (){var statearr_39513 = state_39499;
(statearr_39513[(12)] = inst_39471);

(statearr_39513[(11)] = inst_39472__$1);

return statearr_39513;
})();
if(cljs.core.truth_(inst_39473)){
var statearr_39514_39543 = state_39499__$1;
(statearr_39514_39543[(1)] = (8));

} else {
var statearr_39515_39544 = state_39499__$1;
(statearr_39515_39544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (14))){
var inst_39492 = (state_39499[(2)]);
var inst_39493 = cljs.core.async.close_BANG_.call(null,out);
var state_39499__$1 = (function (){var statearr_39517 = state_39499;
(statearr_39517[(13)] = inst_39492);

return statearr_39517;
})();
var statearr_39518_39545 = state_39499__$1;
(statearr_39518_39545[(2)] = inst_39493);

(statearr_39518_39545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (10))){
var inst_39483 = (state_39499[(2)]);
var state_39499__$1 = state_39499;
var statearr_39519_39546 = state_39499__$1;
(statearr_39519_39546[(2)] = inst_39483);

(statearr_39519_39546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39500 === (8))){
var inst_39463 = (state_39499[(7)]);
var inst_39472 = (state_39499[(11)]);
var tmp39516 = inst_39463;
var inst_39463__$1 = tmp39516;
var inst_39464 = inst_39472;
var state_39499__$1 = (function (){var statearr_39520 = state_39499;
(statearr_39520[(7)] = inst_39463__$1);

(statearr_39520[(8)] = inst_39464);

return statearr_39520;
})();
var statearr_39521_39547 = state_39499__$1;
(statearr_39521_39547[(2)] = null);

(statearr_39521_39547[(1)] = (2));


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
});})(c__28184__auto___39533,out))
;
return ((function (switch__28119__auto__,c__28184__auto___39533,out){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_39525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39525[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_39525[(1)] = (1));

return statearr_39525;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_39499){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_39499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e39526){if((e39526 instanceof Object)){
var ex__28123__auto__ = e39526;
var statearr_39527_39548 = state_39499;
(statearr_39527_39548[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39549 = state_39499;
state_39499 = G__39549;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_39499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_39499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___39533,out))
})();
var state__28186__auto__ = (function (){var statearr_39528 = f__28185__auto__.call(null);
(statearr_39528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___39533);

return statearr_39528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___39533,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39550 = [];
var len__20259__auto___39624 = arguments.length;
var i__20260__auto___39625 = (0);
while(true){
if((i__20260__auto___39625 < len__20259__auto___39624)){
args39550.push((arguments[i__20260__auto___39625]));

var G__39626 = (i__20260__auto___39625 + (1));
i__20260__auto___39625 = G__39626;
continue;
} else {
}
break;
}

var G__39552 = args39550.length;
switch (G__39552) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39550.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28184__auto___39628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___39628,out){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___39628,out){
return (function (state_39594){
var state_val_39595 = (state_39594[(1)]);
if((state_val_39595 === (7))){
var inst_39590 = (state_39594[(2)]);
var state_39594__$1 = state_39594;
var statearr_39596_39629 = state_39594__$1;
(statearr_39596_39629[(2)] = inst_39590);

(statearr_39596_39629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (1))){
var inst_39553 = [];
var inst_39554 = inst_39553;
var inst_39555 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39594__$1 = (function (){var statearr_39597 = state_39594;
(statearr_39597[(7)] = inst_39555);

(statearr_39597[(8)] = inst_39554);

return statearr_39597;
})();
var statearr_39598_39630 = state_39594__$1;
(statearr_39598_39630[(2)] = null);

(statearr_39598_39630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (4))){
var inst_39558 = (state_39594[(9)]);
var inst_39558__$1 = (state_39594[(2)]);
var inst_39559 = (inst_39558__$1 == null);
var inst_39560 = cljs.core.not.call(null,inst_39559);
var state_39594__$1 = (function (){var statearr_39599 = state_39594;
(statearr_39599[(9)] = inst_39558__$1);

return statearr_39599;
})();
if(inst_39560){
var statearr_39600_39631 = state_39594__$1;
(statearr_39600_39631[(1)] = (5));

} else {
var statearr_39601_39632 = state_39594__$1;
(statearr_39601_39632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (15))){
var inst_39584 = (state_39594[(2)]);
var state_39594__$1 = state_39594;
var statearr_39602_39633 = state_39594__$1;
(statearr_39602_39633[(2)] = inst_39584);

(statearr_39602_39633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (13))){
var state_39594__$1 = state_39594;
var statearr_39603_39634 = state_39594__$1;
(statearr_39603_39634[(2)] = null);

(statearr_39603_39634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (6))){
var inst_39554 = (state_39594[(8)]);
var inst_39579 = inst_39554.length;
var inst_39580 = (inst_39579 > (0));
var state_39594__$1 = state_39594;
if(cljs.core.truth_(inst_39580)){
var statearr_39604_39635 = state_39594__$1;
(statearr_39604_39635[(1)] = (12));

} else {
var statearr_39605_39636 = state_39594__$1;
(statearr_39605_39636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (3))){
var inst_39592 = (state_39594[(2)]);
var state_39594__$1 = state_39594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39594__$1,inst_39592);
} else {
if((state_val_39595 === (12))){
var inst_39554 = (state_39594[(8)]);
var inst_39582 = cljs.core.vec.call(null,inst_39554);
var state_39594__$1 = state_39594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39594__$1,(15),out,inst_39582);
} else {
if((state_val_39595 === (2))){
var state_39594__$1 = state_39594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39594__$1,(4),ch);
} else {
if((state_val_39595 === (11))){
var inst_39562 = (state_39594[(10)]);
var inst_39558 = (state_39594[(9)]);
var inst_39572 = (state_39594[(2)]);
var inst_39573 = [];
var inst_39574 = inst_39573.push(inst_39558);
var inst_39554 = inst_39573;
var inst_39555 = inst_39562;
var state_39594__$1 = (function (){var statearr_39606 = state_39594;
(statearr_39606[(11)] = inst_39572);

(statearr_39606[(7)] = inst_39555);

(statearr_39606[(12)] = inst_39574);

(statearr_39606[(8)] = inst_39554);

return statearr_39606;
})();
var statearr_39607_39637 = state_39594__$1;
(statearr_39607_39637[(2)] = null);

(statearr_39607_39637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (9))){
var inst_39554 = (state_39594[(8)]);
var inst_39570 = cljs.core.vec.call(null,inst_39554);
var state_39594__$1 = state_39594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39594__$1,(11),out,inst_39570);
} else {
if((state_val_39595 === (5))){
var inst_39555 = (state_39594[(7)]);
var inst_39562 = (state_39594[(10)]);
var inst_39558 = (state_39594[(9)]);
var inst_39562__$1 = f.call(null,inst_39558);
var inst_39563 = cljs.core._EQ_.call(null,inst_39562__$1,inst_39555);
var inst_39564 = cljs.core.keyword_identical_QMARK_.call(null,inst_39555,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39565 = (inst_39563) || (inst_39564);
var state_39594__$1 = (function (){var statearr_39608 = state_39594;
(statearr_39608[(10)] = inst_39562__$1);

return statearr_39608;
})();
if(cljs.core.truth_(inst_39565)){
var statearr_39609_39638 = state_39594__$1;
(statearr_39609_39638[(1)] = (8));

} else {
var statearr_39610_39639 = state_39594__$1;
(statearr_39610_39639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (14))){
var inst_39587 = (state_39594[(2)]);
var inst_39588 = cljs.core.async.close_BANG_.call(null,out);
var state_39594__$1 = (function (){var statearr_39612 = state_39594;
(statearr_39612[(13)] = inst_39587);

return statearr_39612;
})();
var statearr_39613_39640 = state_39594__$1;
(statearr_39613_39640[(2)] = inst_39588);

(statearr_39613_39640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (10))){
var inst_39577 = (state_39594[(2)]);
var state_39594__$1 = state_39594;
var statearr_39614_39641 = state_39594__$1;
(statearr_39614_39641[(2)] = inst_39577);

(statearr_39614_39641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39595 === (8))){
var inst_39554 = (state_39594[(8)]);
var inst_39562 = (state_39594[(10)]);
var inst_39558 = (state_39594[(9)]);
var inst_39567 = inst_39554.push(inst_39558);
var tmp39611 = inst_39554;
var inst_39554__$1 = tmp39611;
var inst_39555 = inst_39562;
var state_39594__$1 = (function (){var statearr_39615 = state_39594;
(statearr_39615[(14)] = inst_39567);

(statearr_39615[(7)] = inst_39555);

(statearr_39615[(8)] = inst_39554__$1);

return statearr_39615;
})();
var statearr_39616_39642 = state_39594__$1;
(statearr_39616_39642[(2)] = null);

(statearr_39616_39642[(1)] = (2));


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
});})(c__28184__auto___39628,out))
;
return ((function (switch__28119__auto__,c__28184__auto___39628,out){
return (function() {
var cljs$core$async$state_machine__28120__auto__ = null;
var cljs$core$async$state_machine__28120__auto____0 = (function (){
var statearr_39620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39620[(0)] = cljs$core$async$state_machine__28120__auto__);

(statearr_39620[(1)] = (1));

return statearr_39620;
});
var cljs$core$async$state_machine__28120__auto____1 = (function (state_39594){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_39594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e39621){if((e39621 instanceof Object)){
var ex__28123__auto__ = e39621;
var statearr_39622_39643 = state_39594;
(statearr_39622_39643[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39644 = state_39594;
state_39594 = G__39644;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
cljs$core$async$state_machine__28120__auto__ = function(state_39594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28120__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28120__auto____1.call(this,state_39594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28120__auto____0;
cljs$core$async$state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28120__auto____1;
return cljs$core$async$state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___39628,out))
})();
var state__28186__auto__ = (function (){var statearr_39623 = f__28185__auto__.call(null);
(statearr_39623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___39628);

return statearr_39623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___39628,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444632662084