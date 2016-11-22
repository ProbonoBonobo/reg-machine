// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args47374 = [];
var len__26007__auto___47380 = arguments.length;
var i__26008__auto___47381 = (0);
while(true){
if((i__26008__auto___47381 < len__26007__auto___47380)){
args47374.push((arguments[i__26008__auto___47381]));

var G__47382 = (i__26008__auto___47381 + (1));
i__26008__auto___47381 = G__47382;
continue;
} else {
}
break;
}

var G__47376 = args47374.length;
switch (G__47376) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47374.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47377 = (function (f,blockable,meta47378){
this.f = f;
this.blockable = blockable;
this.meta47378 = meta47378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47379,meta47378__$1){
var self__ = this;
var _47379__$1 = this;
return (new cljs.core.async.t_cljs$core$async47377(self__.f,self__.blockable,meta47378__$1));
});

cljs.core.async.t_cljs$core$async47377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47379){
var self__ = this;
var _47379__$1 = this;
return self__.meta47378;
});

cljs.core.async.t_cljs$core$async47377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47378","meta47378",59522589,null)], null);
});

cljs.core.async.t_cljs$core$async47377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47377";

cljs.core.async.t_cljs$core$async47377.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async47377");
});

cljs.core.async.__GT_t_cljs$core$async47377 = (function cljs$core$async$__GT_t_cljs$core$async47377(f__$1,blockable__$1,meta47378){
return (new cljs.core.async.t_cljs$core$async47377(f__$1,blockable__$1,meta47378));
});

}

return (new cljs.core.async.t_cljs$core$async47377(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args47386 = [];
var len__26007__auto___47389 = arguments.length;
var i__26008__auto___47390 = (0);
while(true){
if((i__26008__auto___47390 < len__26007__auto___47389)){
args47386.push((arguments[i__26008__auto___47390]));

var G__47391 = (i__26008__auto___47390 + (1));
i__26008__auto___47390 = G__47391;
continue;
} else {
}
break;
}

var G__47388 = args47386.length;
switch (G__47388) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47386.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args47393 = [];
var len__26007__auto___47396 = arguments.length;
var i__26008__auto___47397 = (0);
while(true){
if((i__26008__auto___47397 < len__26007__auto___47396)){
args47393.push((arguments[i__26008__auto___47397]));

var G__47398 = (i__26008__auto___47397 + (1));
i__26008__auto___47397 = G__47398;
continue;
} else {
}
break;
}

var G__47395 = args47393.length;
switch (G__47395) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47393.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var args47400 = [];
var len__26007__auto___47403 = arguments.length;
var i__26008__auto___47404 = (0);
while(true){
if((i__26008__auto___47404 < len__26007__auto___47403)){
args47400.push((arguments[i__26008__auto___47404]));

var G__47405 = (i__26008__auto___47404 + (1));
i__26008__auto___47404 = G__47405;
continue;
} else {
}
break;
}

var G__47402 = args47400.length;
switch (G__47402) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47400.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47407 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47407);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47407,ret){
return (function (){
return fn1.call(null,val_47407);
});})(val_47407,ret))
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
var args47408 = [];
var len__26007__auto___47411 = arguments.length;
var i__26008__auto___47412 = (0);
while(true){
if((i__26008__auto___47412 < len__26007__auto___47411)){
args47408.push((arguments[i__26008__auto___47412]));

var G__47413 = (i__26008__auto___47412 + (1));
i__26008__auto___47412 = G__47413;
continue;
} else {
}
break;
}

var G__47410 = args47408.length;
switch (G__47410) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47408.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25817__auto___47415 = n;
var x_47416 = (0);
while(true){
if((x_47416 < n__25817__auto___47415)){
(a[x_47416] = (0));

var G__47417 = (x_47416 + (1));
x_47416 = G__47417;
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

var G__47418 = (i + (1));
i = G__47418;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47422 = (function (flag,meta47423){
this.flag = flag;
this.meta47423 = meta47423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47424,meta47423__$1){
var self__ = this;
var _47424__$1 = this;
return (new cljs.core.async.t_cljs$core$async47422(self__.flag,meta47423__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47424){
var self__ = this;
var _47424__$1 = this;
return self__.meta47423;
});})(flag))
;

cljs.core.async.t_cljs$core$async47422.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47422.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47422.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47423","meta47423",926475528,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47422";

cljs.core.async.t_cljs$core$async47422.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async47422");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47422 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47422(flag__$1,meta47423){
return (new cljs.core.async.t_cljs$core$async47422(flag__$1,meta47423));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47422(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47428 = (function (flag,cb,meta47429){
this.flag = flag;
this.cb = cb;
this.meta47429 = meta47429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47430,meta47429__$1){
var self__ = this;
var _47430__$1 = this;
return (new cljs.core.async.t_cljs$core$async47428(self__.flag,self__.cb,meta47429__$1));
});

cljs.core.async.t_cljs$core$async47428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47430){
var self__ = this;
var _47430__$1 = this;
return self__.meta47429;
});

cljs.core.async.t_cljs$core$async47428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47429","meta47429",305295097,null)], null);
});

cljs.core.async.t_cljs$core$async47428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47428";

cljs.core.async.t_cljs$core$async47428.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async47428");
});

cljs.core.async.__GT_t_cljs$core$async47428 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47428(flag__$1,cb__$1,meta47429){
return (new cljs.core.async.t_cljs$core$async47428(flag__$1,cb__$1,meta47429));
});

}

return (new cljs.core.async.t_cljs$core$async47428(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47431_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47431_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47432_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47432_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24899__auto__ = wport;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47433 = (i + (1));
i = G__47433;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24899__auto__ = ret;
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24887__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24887__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24887__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__26014__auto__ = [];
var len__26007__auto___47439 = arguments.length;
var i__26008__auto___47440 = (0);
while(true){
if((i__26008__auto___47440 < len__26007__auto___47439)){
args__26014__auto__.push((arguments[i__26008__auto___47440]));

var G__47441 = (i__26008__auto___47440 + (1));
i__26008__auto___47440 = G__47441;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((1) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26015__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47436){
var map__47437 = p__47436;
var map__47437__$1 = ((((!((map__47437 == null)))?((((map__47437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47437):map__47437);
var opts = map__47437__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47434){
var G__47435 = cljs.core.first.call(null,seq47434);
var seq47434__$1 = cljs.core.next.call(null,seq47434);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47435,seq47434__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args47442 = [];
var len__26007__auto___47492 = arguments.length;
var i__26008__auto___47493 = (0);
while(true){
if((i__26008__auto___47493 < len__26007__auto___47492)){
args47442.push((arguments[i__26008__auto___47493]));

var G__47494 = (i__26008__auto___47493 + (1));
i__26008__auto___47493 = G__47494;
continue;
} else {
}
break;
}

var G__47444 = args47442.length;
switch (G__47444) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47442.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28998__auto___47496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___47496){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___47496){
return (function (state_47468){
var state_val_47469 = (state_47468[(1)]);
if((state_val_47469 === (7))){
var inst_47464 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47470_47497 = state_47468__$1;
(statearr_47470_47497[(2)] = inst_47464);

(statearr_47470_47497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (1))){
var state_47468__$1 = state_47468;
var statearr_47471_47498 = state_47468__$1;
(statearr_47471_47498[(2)] = null);

(statearr_47471_47498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (4))){
var inst_47447 = (state_47468[(7)]);
var inst_47447__$1 = (state_47468[(2)]);
var inst_47448 = (inst_47447__$1 == null);
var state_47468__$1 = (function (){var statearr_47472 = state_47468;
(statearr_47472[(7)] = inst_47447__$1);

return statearr_47472;
})();
if(cljs.core.truth_(inst_47448)){
var statearr_47473_47499 = state_47468__$1;
(statearr_47473_47499[(1)] = (5));

} else {
var statearr_47474_47500 = state_47468__$1;
(statearr_47474_47500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (13))){
var state_47468__$1 = state_47468;
var statearr_47475_47501 = state_47468__$1;
(statearr_47475_47501[(2)] = null);

(statearr_47475_47501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (6))){
var inst_47447 = (state_47468[(7)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47468__$1,(11),to,inst_47447);
} else {
if((state_val_47469 === (3))){
var inst_47466 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47468__$1,inst_47466);
} else {
if((state_val_47469 === (12))){
var state_47468__$1 = state_47468;
var statearr_47476_47502 = state_47468__$1;
(statearr_47476_47502[(2)] = null);

(statearr_47476_47502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (2))){
var state_47468__$1 = state_47468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47468__$1,(4),from);
} else {
if((state_val_47469 === (11))){
var inst_47457 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
if(cljs.core.truth_(inst_47457)){
var statearr_47477_47503 = state_47468__$1;
(statearr_47477_47503[(1)] = (12));

} else {
var statearr_47478_47504 = state_47468__$1;
(statearr_47478_47504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (9))){
var state_47468__$1 = state_47468;
var statearr_47479_47505 = state_47468__$1;
(statearr_47479_47505[(2)] = null);

(statearr_47479_47505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (5))){
var state_47468__$1 = state_47468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47480_47506 = state_47468__$1;
(statearr_47480_47506[(1)] = (8));

} else {
var statearr_47481_47507 = state_47468__$1;
(statearr_47481_47507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (14))){
var inst_47462 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47482_47508 = state_47468__$1;
(statearr_47482_47508[(2)] = inst_47462);

(statearr_47482_47508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (10))){
var inst_47454 = (state_47468[(2)]);
var state_47468__$1 = state_47468;
var statearr_47483_47509 = state_47468__$1;
(statearr_47483_47509[(2)] = inst_47454);

(statearr_47483_47509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47469 === (8))){
var inst_47451 = cljs.core.async.close_BANG_.call(null,to);
var state_47468__$1 = state_47468;
var statearr_47484_47510 = state_47468__$1;
(statearr_47484_47510[(2)] = inst_47451);

(statearr_47484_47510[(1)] = (10));


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
});})(c__28998__auto___47496))
;
return ((function (switch__28886__auto__,c__28998__auto___47496){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_47488 = [null,null,null,null,null,null,null,null];
(statearr_47488[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_47488[(1)] = (1));

return statearr_47488;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_47468){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e47489){if((e47489 instanceof Object)){
var ex__28890__auto__ = e47489;
var statearr_47490_47511 = state_47468;
(statearr_47490_47511[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47512 = state_47468;
state_47468 = G__47512;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_47468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_47468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___47496))
})();
var state__29000__auto__ = (function (){var statearr_47491 = f__28999__auto__.call(null);
(statearr_47491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___47496);

return statearr_47491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___47496))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47700){
var vec__47701 = p__47700;
var v = cljs.core.nth.call(null,vec__47701,(0),null);
var p = cljs.core.nth.call(null,vec__47701,(1),null);
var job = vec__47701;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28998__auto___47887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___47887,res,vec__47701,v,p,job,jobs,results){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___47887,res,vec__47701,v,p,job,jobs,results){
return (function (state_47708){
var state_val_47709 = (state_47708[(1)]);
if((state_val_47709 === (1))){
var state_47708__$1 = state_47708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47708__$1,(2),res,v);
} else {
if((state_val_47709 === (2))){
var inst_47705 = (state_47708[(2)]);
var inst_47706 = cljs.core.async.close_BANG_.call(null,res);
var state_47708__$1 = (function (){var statearr_47710 = state_47708;
(statearr_47710[(7)] = inst_47705);

return statearr_47710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47708__$1,inst_47706);
} else {
return null;
}
}
});})(c__28998__auto___47887,res,vec__47701,v,p,job,jobs,results))
;
return ((function (switch__28886__auto__,c__28998__auto___47887,res,vec__47701,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_47714 = [null,null,null,null,null,null,null,null];
(statearr_47714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_47714[(1)] = (1));

return statearr_47714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_47708){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e47715){if((e47715 instanceof Object)){
var ex__28890__auto__ = e47715;
var statearr_47716_47888 = state_47708;
(statearr_47716_47888[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47889 = state_47708;
state_47708 = G__47889;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_47708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_47708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___47887,res,vec__47701,v,p,job,jobs,results))
})();
var state__29000__auto__ = (function (){var statearr_47717 = f__28999__auto__.call(null);
(statearr_47717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___47887);

return statearr_47717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___47887,res,vec__47701,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47718){
var vec__47719 = p__47718;
var v = cljs.core.nth.call(null,vec__47719,(0),null);
var p = cljs.core.nth.call(null,vec__47719,(1),null);
var job = vec__47719;
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
var n__25817__auto___47890 = n;
var __47891 = (0);
while(true){
if((__47891 < n__25817__auto___47890)){
var G__47722_47892 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47722_47892) {
case "compute":
var c__28998__auto___47894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47891,c__28998__auto___47894,G__47722_47892,n__25817__auto___47890,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (__47891,c__28998__auto___47894,G__47722_47892,n__25817__auto___47890,jobs,results,process,async){
return (function (state_47735){
var state_val_47736 = (state_47735[(1)]);
if((state_val_47736 === (1))){
var state_47735__$1 = state_47735;
var statearr_47737_47895 = state_47735__$1;
(statearr_47737_47895[(2)] = null);

(statearr_47737_47895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (2))){
var state_47735__$1 = state_47735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47735__$1,(4),jobs);
} else {
if((state_val_47736 === (3))){
var inst_47733 = (state_47735[(2)]);
var state_47735__$1 = state_47735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47735__$1,inst_47733);
} else {
if((state_val_47736 === (4))){
var inst_47725 = (state_47735[(2)]);
var inst_47726 = process.call(null,inst_47725);
var state_47735__$1 = state_47735;
if(cljs.core.truth_(inst_47726)){
var statearr_47738_47896 = state_47735__$1;
(statearr_47738_47896[(1)] = (5));

} else {
var statearr_47739_47897 = state_47735__$1;
(statearr_47739_47897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (5))){
var state_47735__$1 = state_47735;
var statearr_47740_47898 = state_47735__$1;
(statearr_47740_47898[(2)] = null);

(statearr_47740_47898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (6))){
var state_47735__$1 = state_47735;
var statearr_47741_47899 = state_47735__$1;
(statearr_47741_47899[(2)] = null);

(statearr_47741_47899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (7))){
var inst_47731 = (state_47735[(2)]);
var state_47735__$1 = state_47735;
var statearr_47742_47900 = state_47735__$1;
(statearr_47742_47900[(2)] = inst_47731);

(statearr_47742_47900[(1)] = (3));


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
});})(__47891,c__28998__auto___47894,G__47722_47892,n__25817__auto___47890,jobs,results,process,async))
;
return ((function (__47891,switch__28886__auto__,c__28998__auto___47894,G__47722_47892,n__25817__auto___47890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_47746 = [null,null,null,null,null,null,null];
(statearr_47746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_47746[(1)] = (1));

return statearr_47746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_47735){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e47747){if((e47747 instanceof Object)){
var ex__28890__auto__ = e47747;
var statearr_47748_47901 = state_47735;
(statearr_47748_47901[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47902 = state_47735;
state_47735 = G__47902;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_47735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_47735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(__47891,switch__28886__auto__,c__28998__auto___47894,G__47722_47892,n__25817__auto___47890,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_47749 = f__28999__auto__.call(null);
(statearr_47749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___47894);

return statearr_47749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(__47891,c__28998__auto___47894,G__47722_47892,n__25817__auto___47890,jobs,results,process,async))
);


break;
case "async":
var c__28998__auto___47903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47891,c__28998__auto___47903,G__47722_47892,n__25817__auto___47890,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (__47891,c__28998__auto___47903,G__47722_47892,n__25817__auto___47890,jobs,results,process,async){
return (function (state_47762){
var state_val_47763 = (state_47762[(1)]);
if((state_val_47763 === (1))){
var state_47762__$1 = state_47762;
var statearr_47764_47904 = state_47762__$1;
(statearr_47764_47904[(2)] = null);

(statearr_47764_47904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47763 === (2))){
var state_47762__$1 = state_47762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47762__$1,(4),jobs);
} else {
if((state_val_47763 === (3))){
var inst_47760 = (state_47762[(2)]);
var state_47762__$1 = state_47762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47762__$1,inst_47760);
} else {
if((state_val_47763 === (4))){
var inst_47752 = (state_47762[(2)]);
var inst_47753 = async.call(null,inst_47752);
var state_47762__$1 = state_47762;
if(cljs.core.truth_(inst_47753)){
var statearr_47765_47905 = state_47762__$1;
(statearr_47765_47905[(1)] = (5));

} else {
var statearr_47766_47906 = state_47762__$1;
(statearr_47766_47906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47763 === (5))){
var state_47762__$1 = state_47762;
var statearr_47767_47907 = state_47762__$1;
(statearr_47767_47907[(2)] = null);

(statearr_47767_47907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47763 === (6))){
var state_47762__$1 = state_47762;
var statearr_47768_47908 = state_47762__$1;
(statearr_47768_47908[(2)] = null);

(statearr_47768_47908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47763 === (7))){
var inst_47758 = (state_47762[(2)]);
var state_47762__$1 = state_47762;
var statearr_47769_47909 = state_47762__$1;
(statearr_47769_47909[(2)] = inst_47758);

(statearr_47769_47909[(1)] = (3));


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
});})(__47891,c__28998__auto___47903,G__47722_47892,n__25817__auto___47890,jobs,results,process,async))
;
return ((function (__47891,switch__28886__auto__,c__28998__auto___47903,G__47722_47892,n__25817__auto___47890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_47773 = [null,null,null,null,null,null,null];
(statearr_47773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_47773[(1)] = (1));

return statearr_47773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_47762){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e47774){if((e47774 instanceof Object)){
var ex__28890__auto__ = e47774;
var statearr_47775_47910 = state_47762;
(statearr_47775_47910[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47911 = state_47762;
state_47762 = G__47911;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_47762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_47762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(__47891,switch__28886__auto__,c__28998__auto___47903,G__47722_47892,n__25817__auto___47890,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_47776 = f__28999__auto__.call(null);
(statearr_47776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___47903);

return statearr_47776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(__47891,c__28998__auto___47903,G__47722_47892,n__25817__auto___47890,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__47912 = (__47891 + (1));
__47891 = G__47912;
continue;
} else {
}
break;
}

var c__28998__auto___47913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___47913,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___47913,jobs,results,process,async){
return (function (state_47798){
var state_val_47799 = (state_47798[(1)]);
if((state_val_47799 === (1))){
var state_47798__$1 = state_47798;
var statearr_47800_47914 = state_47798__$1;
(statearr_47800_47914[(2)] = null);

(statearr_47800_47914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47799 === (2))){
var state_47798__$1 = state_47798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47798__$1,(4),from);
} else {
if((state_val_47799 === (3))){
var inst_47796 = (state_47798[(2)]);
var state_47798__$1 = state_47798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47798__$1,inst_47796);
} else {
if((state_val_47799 === (4))){
var inst_47779 = (state_47798[(7)]);
var inst_47779__$1 = (state_47798[(2)]);
var inst_47780 = (inst_47779__$1 == null);
var state_47798__$1 = (function (){var statearr_47801 = state_47798;
(statearr_47801[(7)] = inst_47779__$1);

return statearr_47801;
})();
if(cljs.core.truth_(inst_47780)){
var statearr_47802_47915 = state_47798__$1;
(statearr_47802_47915[(1)] = (5));

} else {
var statearr_47803_47916 = state_47798__$1;
(statearr_47803_47916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47799 === (5))){
var inst_47782 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47798__$1 = state_47798;
var statearr_47804_47917 = state_47798__$1;
(statearr_47804_47917[(2)] = inst_47782);

(statearr_47804_47917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47799 === (6))){
var inst_47784 = (state_47798[(8)]);
var inst_47779 = (state_47798[(7)]);
var inst_47784__$1 = cljs.core.async.chan.call(null,(1));
var inst_47785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47786 = [inst_47779,inst_47784__$1];
var inst_47787 = (new cljs.core.PersistentVector(null,2,(5),inst_47785,inst_47786,null));
var state_47798__$1 = (function (){var statearr_47805 = state_47798;
(statearr_47805[(8)] = inst_47784__$1);

return statearr_47805;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47798__$1,(8),jobs,inst_47787);
} else {
if((state_val_47799 === (7))){
var inst_47794 = (state_47798[(2)]);
var state_47798__$1 = state_47798;
var statearr_47806_47918 = state_47798__$1;
(statearr_47806_47918[(2)] = inst_47794);

(statearr_47806_47918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47799 === (8))){
var inst_47784 = (state_47798[(8)]);
var inst_47789 = (state_47798[(2)]);
var state_47798__$1 = (function (){var statearr_47807 = state_47798;
(statearr_47807[(9)] = inst_47789);

return statearr_47807;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47798__$1,(9),results,inst_47784);
} else {
if((state_val_47799 === (9))){
var inst_47791 = (state_47798[(2)]);
var state_47798__$1 = (function (){var statearr_47808 = state_47798;
(statearr_47808[(10)] = inst_47791);

return statearr_47808;
})();
var statearr_47809_47919 = state_47798__$1;
(statearr_47809_47919[(2)] = null);

(statearr_47809_47919[(1)] = (2));


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
});})(c__28998__auto___47913,jobs,results,process,async))
;
return ((function (switch__28886__auto__,c__28998__auto___47913,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_47813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_47813[(1)] = (1));

return statearr_47813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_47798){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e47814){if((e47814 instanceof Object)){
var ex__28890__auto__ = e47814;
var statearr_47815_47920 = state_47798;
(statearr_47815_47920[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47921 = state_47798;
state_47798 = G__47921;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_47798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_47798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___47913,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_47816 = f__28999__auto__.call(null);
(statearr_47816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___47913);

return statearr_47816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___47913,jobs,results,process,async))
);


var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,jobs,results,process,async){
return (function (state_47854){
var state_val_47855 = (state_47854[(1)]);
if((state_val_47855 === (7))){
var inst_47850 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
var statearr_47856_47922 = state_47854__$1;
(statearr_47856_47922[(2)] = inst_47850);

(statearr_47856_47922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (20))){
var state_47854__$1 = state_47854;
var statearr_47857_47923 = state_47854__$1;
(statearr_47857_47923[(2)] = null);

(statearr_47857_47923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (1))){
var state_47854__$1 = state_47854;
var statearr_47858_47924 = state_47854__$1;
(statearr_47858_47924[(2)] = null);

(statearr_47858_47924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (4))){
var inst_47819 = (state_47854[(7)]);
var inst_47819__$1 = (state_47854[(2)]);
var inst_47820 = (inst_47819__$1 == null);
var state_47854__$1 = (function (){var statearr_47859 = state_47854;
(statearr_47859[(7)] = inst_47819__$1);

return statearr_47859;
})();
if(cljs.core.truth_(inst_47820)){
var statearr_47860_47925 = state_47854__$1;
(statearr_47860_47925[(1)] = (5));

} else {
var statearr_47861_47926 = state_47854__$1;
(statearr_47861_47926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (15))){
var inst_47832 = (state_47854[(8)]);
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47854__$1,(18),to,inst_47832);
} else {
if((state_val_47855 === (21))){
var inst_47845 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
var statearr_47862_47927 = state_47854__$1;
(statearr_47862_47927[(2)] = inst_47845);

(statearr_47862_47927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (13))){
var inst_47847 = (state_47854[(2)]);
var state_47854__$1 = (function (){var statearr_47863 = state_47854;
(statearr_47863[(9)] = inst_47847);

return statearr_47863;
})();
var statearr_47864_47928 = state_47854__$1;
(statearr_47864_47928[(2)] = null);

(statearr_47864_47928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (6))){
var inst_47819 = (state_47854[(7)]);
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47854__$1,(11),inst_47819);
} else {
if((state_val_47855 === (17))){
var inst_47840 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
if(cljs.core.truth_(inst_47840)){
var statearr_47865_47929 = state_47854__$1;
(statearr_47865_47929[(1)] = (19));

} else {
var statearr_47866_47930 = state_47854__$1;
(statearr_47866_47930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (3))){
var inst_47852 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47854__$1,inst_47852);
} else {
if((state_val_47855 === (12))){
var inst_47829 = (state_47854[(10)]);
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47854__$1,(14),inst_47829);
} else {
if((state_val_47855 === (2))){
var state_47854__$1 = state_47854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47854__$1,(4),results);
} else {
if((state_val_47855 === (19))){
var state_47854__$1 = state_47854;
var statearr_47867_47931 = state_47854__$1;
(statearr_47867_47931[(2)] = null);

(statearr_47867_47931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (11))){
var inst_47829 = (state_47854[(2)]);
var state_47854__$1 = (function (){var statearr_47868 = state_47854;
(statearr_47868[(10)] = inst_47829);

return statearr_47868;
})();
var statearr_47869_47932 = state_47854__$1;
(statearr_47869_47932[(2)] = null);

(statearr_47869_47932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (9))){
var state_47854__$1 = state_47854;
var statearr_47870_47933 = state_47854__$1;
(statearr_47870_47933[(2)] = null);

(statearr_47870_47933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (5))){
var state_47854__$1 = state_47854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47871_47934 = state_47854__$1;
(statearr_47871_47934[(1)] = (8));

} else {
var statearr_47872_47935 = state_47854__$1;
(statearr_47872_47935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (14))){
var inst_47834 = (state_47854[(11)]);
var inst_47832 = (state_47854[(8)]);
var inst_47832__$1 = (state_47854[(2)]);
var inst_47833 = (inst_47832__$1 == null);
var inst_47834__$1 = cljs.core.not.call(null,inst_47833);
var state_47854__$1 = (function (){var statearr_47873 = state_47854;
(statearr_47873[(11)] = inst_47834__$1);

(statearr_47873[(8)] = inst_47832__$1);

return statearr_47873;
})();
if(inst_47834__$1){
var statearr_47874_47936 = state_47854__$1;
(statearr_47874_47936[(1)] = (15));

} else {
var statearr_47875_47937 = state_47854__$1;
(statearr_47875_47937[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (16))){
var inst_47834 = (state_47854[(11)]);
var state_47854__$1 = state_47854;
var statearr_47876_47938 = state_47854__$1;
(statearr_47876_47938[(2)] = inst_47834);

(statearr_47876_47938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (10))){
var inst_47826 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
var statearr_47877_47939 = state_47854__$1;
(statearr_47877_47939[(2)] = inst_47826);

(statearr_47877_47939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (18))){
var inst_47837 = (state_47854[(2)]);
var state_47854__$1 = state_47854;
var statearr_47878_47940 = state_47854__$1;
(statearr_47878_47940[(2)] = inst_47837);

(statearr_47878_47940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47855 === (8))){
var inst_47823 = cljs.core.async.close_BANG_.call(null,to);
var state_47854__$1 = state_47854;
var statearr_47879_47941 = state_47854__$1;
(statearr_47879_47941[(2)] = inst_47823);

(statearr_47879_47941[(1)] = (10));


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
});})(c__28998__auto__,jobs,results,process,async))
;
return ((function (switch__28886__auto__,c__28998__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_47883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_47883[(1)] = (1));

return statearr_47883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_47854){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e47884){if((e47884 instanceof Object)){
var ex__28890__auto__ = e47884;
var statearr_47885_47942 = state_47854;
(statearr_47885_47942[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47943 = state_47854;
state_47854 = G__47943;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_47854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_47854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_47886 = f__28999__auto__.call(null);
(statearr_47886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_47886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,jobs,results,process,async))
);

return c__28998__auto__;
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
var args47944 = [];
var len__26007__auto___47947 = arguments.length;
var i__26008__auto___47948 = (0);
while(true){
if((i__26008__auto___47948 < len__26007__auto___47947)){
args47944.push((arguments[i__26008__auto___47948]));

var G__47949 = (i__26008__auto___47948 + (1));
i__26008__auto___47948 = G__47949;
continue;
} else {
}
break;
}

var G__47946 = args47944.length;
switch (G__47946) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47944.length)].join('')));

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
var args47951 = [];
var len__26007__auto___47954 = arguments.length;
var i__26008__auto___47955 = (0);
while(true){
if((i__26008__auto___47955 < len__26007__auto___47954)){
args47951.push((arguments[i__26008__auto___47955]));

var G__47956 = (i__26008__auto___47955 + (1));
i__26008__auto___47955 = G__47956;
continue;
} else {
}
break;
}

var G__47953 = args47951.length;
switch (G__47953) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47951.length)].join('')));

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
var args47958 = [];
var len__26007__auto___48011 = arguments.length;
var i__26008__auto___48012 = (0);
while(true){
if((i__26008__auto___48012 < len__26007__auto___48011)){
args47958.push((arguments[i__26008__auto___48012]));

var G__48013 = (i__26008__auto___48012 + (1));
i__26008__auto___48012 = G__48013;
continue;
} else {
}
break;
}

var G__47960 = args47958.length;
switch (G__47960) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47958.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28998__auto___48015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___48015,tc,fc){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___48015,tc,fc){
return (function (state_47986){
var state_val_47987 = (state_47986[(1)]);
if((state_val_47987 === (7))){
var inst_47982 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
var statearr_47988_48016 = state_47986__$1;
(statearr_47988_48016[(2)] = inst_47982);

(statearr_47988_48016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (1))){
var state_47986__$1 = state_47986;
var statearr_47989_48017 = state_47986__$1;
(statearr_47989_48017[(2)] = null);

(statearr_47989_48017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (4))){
var inst_47963 = (state_47986[(7)]);
var inst_47963__$1 = (state_47986[(2)]);
var inst_47964 = (inst_47963__$1 == null);
var state_47986__$1 = (function (){var statearr_47990 = state_47986;
(statearr_47990[(7)] = inst_47963__$1);

return statearr_47990;
})();
if(cljs.core.truth_(inst_47964)){
var statearr_47991_48018 = state_47986__$1;
(statearr_47991_48018[(1)] = (5));

} else {
var statearr_47992_48019 = state_47986__$1;
(statearr_47992_48019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (13))){
var state_47986__$1 = state_47986;
var statearr_47993_48020 = state_47986__$1;
(statearr_47993_48020[(2)] = null);

(statearr_47993_48020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (6))){
var inst_47963 = (state_47986[(7)]);
var inst_47969 = p.call(null,inst_47963);
var state_47986__$1 = state_47986;
if(cljs.core.truth_(inst_47969)){
var statearr_47994_48021 = state_47986__$1;
(statearr_47994_48021[(1)] = (9));

} else {
var statearr_47995_48022 = state_47986__$1;
(statearr_47995_48022[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (3))){
var inst_47984 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47986__$1,inst_47984);
} else {
if((state_val_47987 === (12))){
var state_47986__$1 = state_47986;
var statearr_47996_48023 = state_47986__$1;
(statearr_47996_48023[(2)] = null);

(statearr_47996_48023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (2))){
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47986__$1,(4),ch);
} else {
if((state_val_47987 === (11))){
var inst_47963 = (state_47986[(7)]);
var inst_47973 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47986__$1,(8),inst_47973,inst_47963);
} else {
if((state_val_47987 === (9))){
var state_47986__$1 = state_47986;
var statearr_47997_48024 = state_47986__$1;
(statearr_47997_48024[(2)] = tc);

(statearr_47997_48024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (5))){
var inst_47966 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47967 = cljs.core.async.close_BANG_.call(null,fc);
var state_47986__$1 = (function (){var statearr_47998 = state_47986;
(statearr_47998[(8)] = inst_47966);

return statearr_47998;
})();
var statearr_47999_48025 = state_47986__$1;
(statearr_47999_48025[(2)] = inst_47967);

(statearr_47999_48025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (14))){
var inst_47980 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
var statearr_48000_48026 = state_47986__$1;
(statearr_48000_48026[(2)] = inst_47980);

(statearr_48000_48026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (10))){
var state_47986__$1 = state_47986;
var statearr_48001_48027 = state_47986__$1;
(statearr_48001_48027[(2)] = fc);

(statearr_48001_48027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (8))){
var inst_47975 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
if(cljs.core.truth_(inst_47975)){
var statearr_48002_48028 = state_47986__$1;
(statearr_48002_48028[(1)] = (12));

} else {
var statearr_48003_48029 = state_47986__$1;
(statearr_48003_48029[(1)] = (13));

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
});})(c__28998__auto___48015,tc,fc))
;
return ((function (switch__28886__auto__,c__28998__auto___48015,tc,fc){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_48007 = [null,null,null,null,null,null,null,null,null];
(statearr_48007[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_48007[(1)] = (1));

return statearr_48007;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_47986){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_47986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e48008){if((e48008 instanceof Object)){
var ex__28890__auto__ = e48008;
var statearr_48009_48030 = state_47986;
(statearr_48009_48030[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48031 = state_47986;
state_47986 = G__48031;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_47986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_47986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___48015,tc,fc))
})();
var state__29000__auto__ = (function (){var statearr_48010 = f__28999__auto__.call(null);
(statearr_48010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___48015);

return statearr_48010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___48015,tc,fc))
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
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__){
return (function (state_48095){
var state_val_48096 = (state_48095[(1)]);
if((state_val_48096 === (7))){
var inst_48091 = (state_48095[(2)]);
var state_48095__$1 = state_48095;
var statearr_48097_48118 = state_48095__$1;
(statearr_48097_48118[(2)] = inst_48091);

(statearr_48097_48118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (1))){
var inst_48075 = init;
var state_48095__$1 = (function (){var statearr_48098 = state_48095;
(statearr_48098[(7)] = inst_48075);

return statearr_48098;
})();
var statearr_48099_48119 = state_48095__$1;
(statearr_48099_48119[(2)] = null);

(statearr_48099_48119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (4))){
var inst_48078 = (state_48095[(8)]);
var inst_48078__$1 = (state_48095[(2)]);
var inst_48079 = (inst_48078__$1 == null);
var state_48095__$1 = (function (){var statearr_48100 = state_48095;
(statearr_48100[(8)] = inst_48078__$1);

return statearr_48100;
})();
if(cljs.core.truth_(inst_48079)){
var statearr_48101_48120 = state_48095__$1;
(statearr_48101_48120[(1)] = (5));

} else {
var statearr_48102_48121 = state_48095__$1;
(statearr_48102_48121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (6))){
var inst_48078 = (state_48095[(8)]);
var inst_48075 = (state_48095[(7)]);
var inst_48082 = (state_48095[(9)]);
var inst_48082__$1 = f.call(null,inst_48075,inst_48078);
var inst_48083 = cljs.core.reduced_QMARK_.call(null,inst_48082__$1);
var state_48095__$1 = (function (){var statearr_48103 = state_48095;
(statearr_48103[(9)] = inst_48082__$1);

return statearr_48103;
})();
if(inst_48083){
var statearr_48104_48122 = state_48095__$1;
(statearr_48104_48122[(1)] = (8));

} else {
var statearr_48105_48123 = state_48095__$1;
(statearr_48105_48123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (3))){
var inst_48093 = (state_48095[(2)]);
var state_48095__$1 = state_48095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48095__$1,inst_48093);
} else {
if((state_val_48096 === (2))){
var state_48095__$1 = state_48095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48095__$1,(4),ch);
} else {
if((state_val_48096 === (9))){
var inst_48082 = (state_48095[(9)]);
var inst_48075 = inst_48082;
var state_48095__$1 = (function (){var statearr_48106 = state_48095;
(statearr_48106[(7)] = inst_48075);

return statearr_48106;
})();
var statearr_48107_48124 = state_48095__$1;
(statearr_48107_48124[(2)] = null);

(statearr_48107_48124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (5))){
var inst_48075 = (state_48095[(7)]);
var state_48095__$1 = state_48095;
var statearr_48108_48125 = state_48095__$1;
(statearr_48108_48125[(2)] = inst_48075);

(statearr_48108_48125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (10))){
var inst_48089 = (state_48095[(2)]);
var state_48095__$1 = state_48095;
var statearr_48109_48126 = state_48095__$1;
(statearr_48109_48126[(2)] = inst_48089);

(statearr_48109_48126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48096 === (8))){
var inst_48082 = (state_48095[(9)]);
var inst_48085 = cljs.core.deref.call(null,inst_48082);
var state_48095__$1 = state_48095;
var statearr_48110_48127 = state_48095__$1;
(statearr_48110_48127[(2)] = inst_48085);

(statearr_48110_48127[(1)] = (10));


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
});})(c__28998__auto__))
;
return ((function (switch__28886__auto__,c__28998__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28887__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28887__auto____0 = (function (){
var statearr_48114 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48114[(0)] = cljs$core$async$reduce_$_state_machine__28887__auto__);

(statearr_48114[(1)] = (1));

return statearr_48114;
});
var cljs$core$async$reduce_$_state_machine__28887__auto____1 = (function (state_48095){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_48095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e48115){if((e48115 instanceof Object)){
var ex__28890__auto__ = e48115;
var statearr_48116_48128 = state_48095;
(statearr_48116_48128[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48129 = state_48095;
state_48095 = G__48129;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28887__auto__ = function(state_48095){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28887__auto____1.call(this,state_48095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28887__auto____0;
cljs$core$async$reduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28887__auto____1;
return cljs$core$async$reduce_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_48117 = f__28999__auto__.call(null);
(statearr_48117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_48117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__))
);

return c__28998__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,f__$1){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,f__$1){
return (function (state_48149){
var state_val_48150 = (state_48149[(1)]);
if((state_val_48150 === (1))){
var inst_48144 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48149__$1,(2),inst_48144);
} else {
if((state_val_48150 === (2))){
var inst_48146 = (state_48149[(2)]);
var inst_48147 = f__$1.call(null,inst_48146);
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48149__$1,inst_48147);
} else {
return null;
}
}
});})(c__28998__auto__,f__$1))
;
return ((function (switch__28886__auto__,c__28998__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28887__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28887__auto____0 = (function (){
var statearr_48154 = [null,null,null,null,null,null,null];
(statearr_48154[(0)] = cljs$core$async$transduce_$_state_machine__28887__auto__);

(statearr_48154[(1)] = (1));

return statearr_48154;
});
var cljs$core$async$transduce_$_state_machine__28887__auto____1 = (function (state_48149){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_48149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e48155){if((e48155 instanceof Object)){
var ex__28890__auto__ = e48155;
var statearr_48156_48158 = state_48149;
(statearr_48156_48158[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48159 = state_48149;
state_48149 = G__48159;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28887__auto__ = function(state_48149){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28887__auto____1.call(this,state_48149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28887__auto____0;
cljs$core$async$transduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28887__auto____1;
return cljs$core$async$transduce_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,f__$1))
})();
var state__29000__auto__ = (function (){var statearr_48157 = f__28999__auto__.call(null);
(statearr_48157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_48157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,f__$1))
);

return c__28998__auto__;
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
var args48160 = [];
var len__26007__auto___48212 = arguments.length;
var i__26008__auto___48213 = (0);
while(true){
if((i__26008__auto___48213 < len__26007__auto___48212)){
args48160.push((arguments[i__26008__auto___48213]));

var G__48214 = (i__26008__auto___48213 + (1));
i__26008__auto___48213 = G__48214;
continue;
} else {
}
break;
}

var G__48162 = args48160.length;
switch (G__48162) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48160.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__){
return (function (state_48187){
var state_val_48188 = (state_48187[(1)]);
if((state_val_48188 === (7))){
var inst_48169 = (state_48187[(2)]);
var state_48187__$1 = state_48187;
var statearr_48189_48216 = state_48187__$1;
(statearr_48189_48216[(2)] = inst_48169);

(statearr_48189_48216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (1))){
var inst_48163 = cljs.core.seq.call(null,coll);
var inst_48164 = inst_48163;
var state_48187__$1 = (function (){var statearr_48190 = state_48187;
(statearr_48190[(7)] = inst_48164);

return statearr_48190;
})();
var statearr_48191_48217 = state_48187__$1;
(statearr_48191_48217[(2)] = null);

(statearr_48191_48217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (4))){
var inst_48164 = (state_48187[(7)]);
var inst_48167 = cljs.core.first.call(null,inst_48164);
var state_48187__$1 = state_48187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48187__$1,(7),ch,inst_48167);
} else {
if((state_val_48188 === (13))){
var inst_48181 = (state_48187[(2)]);
var state_48187__$1 = state_48187;
var statearr_48192_48218 = state_48187__$1;
(statearr_48192_48218[(2)] = inst_48181);

(statearr_48192_48218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (6))){
var inst_48172 = (state_48187[(2)]);
var state_48187__$1 = state_48187;
if(cljs.core.truth_(inst_48172)){
var statearr_48193_48219 = state_48187__$1;
(statearr_48193_48219[(1)] = (8));

} else {
var statearr_48194_48220 = state_48187__$1;
(statearr_48194_48220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (3))){
var inst_48185 = (state_48187[(2)]);
var state_48187__$1 = state_48187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48187__$1,inst_48185);
} else {
if((state_val_48188 === (12))){
var state_48187__$1 = state_48187;
var statearr_48195_48221 = state_48187__$1;
(statearr_48195_48221[(2)] = null);

(statearr_48195_48221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (2))){
var inst_48164 = (state_48187[(7)]);
var state_48187__$1 = state_48187;
if(cljs.core.truth_(inst_48164)){
var statearr_48196_48222 = state_48187__$1;
(statearr_48196_48222[(1)] = (4));

} else {
var statearr_48197_48223 = state_48187__$1;
(statearr_48197_48223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (11))){
var inst_48178 = cljs.core.async.close_BANG_.call(null,ch);
var state_48187__$1 = state_48187;
var statearr_48198_48224 = state_48187__$1;
(statearr_48198_48224[(2)] = inst_48178);

(statearr_48198_48224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (9))){
var state_48187__$1 = state_48187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48199_48225 = state_48187__$1;
(statearr_48199_48225[(1)] = (11));

} else {
var statearr_48200_48226 = state_48187__$1;
(statearr_48200_48226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (5))){
var inst_48164 = (state_48187[(7)]);
var state_48187__$1 = state_48187;
var statearr_48201_48227 = state_48187__$1;
(statearr_48201_48227[(2)] = inst_48164);

(statearr_48201_48227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (10))){
var inst_48183 = (state_48187[(2)]);
var state_48187__$1 = state_48187;
var statearr_48202_48228 = state_48187__$1;
(statearr_48202_48228[(2)] = inst_48183);

(statearr_48202_48228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48188 === (8))){
var inst_48164 = (state_48187[(7)]);
var inst_48174 = cljs.core.next.call(null,inst_48164);
var inst_48164__$1 = inst_48174;
var state_48187__$1 = (function (){var statearr_48203 = state_48187;
(statearr_48203[(7)] = inst_48164__$1);

return statearr_48203;
})();
var statearr_48204_48229 = state_48187__$1;
(statearr_48204_48229[(2)] = null);

(statearr_48204_48229[(1)] = (2));


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
});})(c__28998__auto__))
;
return ((function (switch__28886__auto__,c__28998__auto__){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_48208 = [null,null,null,null,null,null,null,null];
(statearr_48208[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_48208[(1)] = (1));

return statearr_48208;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_48187){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_48187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e48209){if((e48209 instanceof Object)){
var ex__28890__auto__ = e48209;
var statearr_48210_48230 = state_48187;
(statearr_48210_48230[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48231 = state_48187;
state_48187 = G__48231;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_48187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_48187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_48211 = f__28999__auto__.call(null);
(statearr_48211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_48211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__))
);

return c__28998__auto__;
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
var x__25562__auto__ = (((_ == null))?null:_);
var m__25563__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,_);
} else {
var m__25563__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,_);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25563__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m,ch);
} else {
var m__25563__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m,ch);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m);
} else {
var m__25563__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48457 = (function (ch,cs,meta48458){
this.ch = ch;
this.cs = cs;
this.meta48458 = meta48458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48459,meta48458__$1){
var self__ = this;
var _48459__$1 = this;
return (new cljs.core.async.t_cljs$core$async48457(self__.ch,self__.cs,meta48458__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48459){
var self__ = this;
var _48459__$1 = this;
return self__.meta48458;
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48458","meta48458",-1777206905,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48457";

cljs.core.async.t_cljs$core$async48457.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async48457");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48457 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48457(ch__$1,cs__$1,meta48458){
return (new cljs.core.async.t_cljs$core$async48457(ch__$1,cs__$1,meta48458));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48457(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28998__auto___48682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___48682,cs,m,dchan,dctr,done){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___48682,cs,m,dchan,dctr,done){
return (function (state_48594){
var state_val_48595 = (state_48594[(1)]);
if((state_val_48595 === (7))){
var inst_48590 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48596_48683 = state_48594__$1;
(statearr_48596_48683[(2)] = inst_48590);

(statearr_48596_48683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (20))){
var inst_48493 = (state_48594[(7)]);
var inst_48505 = cljs.core.first.call(null,inst_48493);
var inst_48506 = cljs.core.nth.call(null,inst_48505,(0),null);
var inst_48507 = cljs.core.nth.call(null,inst_48505,(1),null);
var state_48594__$1 = (function (){var statearr_48597 = state_48594;
(statearr_48597[(8)] = inst_48506);

return statearr_48597;
})();
if(cljs.core.truth_(inst_48507)){
var statearr_48598_48684 = state_48594__$1;
(statearr_48598_48684[(1)] = (22));

} else {
var statearr_48599_48685 = state_48594__$1;
(statearr_48599_48685[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (27))){
var inst_48537 = (state_48594[(9)]);
var inst_48542 = (state_48594[(10)]);
var inst_48462 = (state_48594[(11)]);
var inst_48535 = (state_48594[(12)]);
var inst_48542__$1 = cljs.core._nth.call(null,inst_48535,inst_48537);
var inst_48543 = cljs.core.async.put_BANG_.call(null,inst_48542__$1,inst_48462,done);
var state_48594__$1 = (function (){var statearr_48600 = state_48594;
(statearr_48600[(10)] = inst_48542__$1);

return statearr_48600;
})();
if(cljs.core.truth_(inst_48543)){
var statearr_48601_48686 = state_48594__$1;
(statearr_48601_48686[(1)] = (30));

} else {
var statearr_48602_48687 = state_48594__$1;
(statearr_48602_48687[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (1))){
var state_48594__$1 = state_48594;
var statearr_48603_48688 = state_48594__$1;
(statearr_48603_48688[(2)] = null);

(statearr_48603_48688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (24))){
var inst_48493 = (state_48594[(7)]);
var inst_48512 = (state_48594[(2)]);
var inst_48513 = cljs.core.next.call(null,inst_48493);
var inst_48471 = inst_48513;
var inst_48472 = null;
var inst_48473 = (0);
var inst_48474 = (0);
var state_48594__$1 = (function (){var statearr_48604 = state_48594;
(statearr_48604[(13)] = inst_48472);

(statearr_48604[(14)] = inst_48471);

(statearr_48604[(15)] = inst_48474);

(statearr_48604[(16)] = inst_48512);

(statearr_48604[(17)] = inst_48473);

return statearr_48604;
})();
var statearr_48605_48689 = state_48594__$1;
(statearr_48605_48689[(2)] = null);

(statearr_48605_48689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (39))){
var state_48594__$1 = state_48594;
var statearr_48609_48690 = state_48594__$1;
(statearr_48609_48690[(2)] = null);

(statearr_48609_48690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (4))){
var inst_48462 = (state_48594[(11)]);
var inst_48462__$1 = (state_48594[(2)]);
var inst_48463 = (inst_48462__$1 == null);
var state_48594__$1 = (function (){var statearr_48610 = state_48594;
(statearr_48610[(11)] = inst_48462__$1);

return statearr_48610;
})();
if(cljs.core.truth_(inst_48463)){
var statearr_48611_48691 = state_48594__$1;
(statearr_48611_48691[(1)] = (5));

} else {
var statearr_48612_48692 = state_48594__$1;
(statearr_48612_48692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (15))){
var inst_48472 = (state_48594[(13)]);
var inst_48471 = (state_48594[(14)]);
var inst_48474 = (state_48594[(15)]);
var inst_48473 = (state_48594[(17)]);
var inst_48489 = (state_48594[(2)]);
var inst_48490 = (inst_48474 + (1));
var tmp48606 = inst_48472;
var tmp48607 = inst_48471;
var tmp48608 = inst_48473;
var inst_48471__$1 = tmp48607;
var inst_48472__$1 = tmp48606;
var inst_48473__$1 = tmp48608;
var inst_48474__$1 = inst_48490;
var state_48594__$1 = (function (){var statearr_48613 = state_48594;
(statearr_48613[(18)] = inst_48489);

(statearr_48613[(13)] = inst_48472__$1);

(statearr_48613[(14)] = inst_48471__$1);

(statearr_48613[(15)] = inst_48474__$1);

(statearr_48613[(17)] = inst_48473__$1);

return statearr_48613;
})();
var statearr_48614_48693 = state_48594__$1;
(statearr_48614_48693[(2)] = null);

(statearr_48614_48693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (21))){
var inst_48516 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48618_48694 = state_48594__$1;
(statearr_48618_48694[(2)] = inst_48516);

(statearr_48618_48694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (31))){
var inst_48542 = (state_48594[(10)]);
var inst_48546 = done.call(null,null);
var inst_48547 = cljs.core.async.untap_STAR_.call(null,m,inst_48542);
var state_48594__$1 = (function (){var statearr_48619 = state_48594;
(statearr_48619[(19)] = inst_48546);

return statearr_48619;
})();
var statearr_48620_48695 = state_48594__$1;
(statearr_48620_48695[(2)] = inst_48547);

(statearr_48620_48695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (32))){
var inst_48537 = (state_48594[(9)]);
var inst_48535 = (state_48594[(12)]);
var inst_48536 = (state_48594[(20)]);
var inst_48534 = (state_48594[(21)]);
var inst_48549 = (state_48594[(2)]);
var inst_48550 = (inst_48537 + (1));
var tmp48615 = inst_48535;
var tmp48616 = inst_48536;
var tmp48617 = inst_48534;
var inst_48534__$1 = tmp48617;
var inst_48535__$1 = tmp48615;
var inst_48536__$1 = tmp48616;
var inst_48537__$1 = inst_48550;
var state_48594__$1 = (function (){var statearr_48621 = state_48594;
(statearr_48621[(9)] = inst_48537__$1);

(statearr_48621[(12)] = inst_48535__$1);

(statearr_48621[(22)] = inst_48549);

(statearr_48621[(20)] = inst_48536__$1);

(statearr_48621[(21)] = inst_48534__$1);

return statearr_48621;
})();
var statearr_48622_48696 = state_48594__$1;
(statearr_48622_48696[(2)] = null);

(statearr_48622_48696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (40))){
var inst_48562 = (state_48594[(23)]);
var inst_48566 = done.call(null,null);
var inst_48567 = cljs.core.async.untap_STAR_.call(null,m,inst_48562);
var state_48594__$1 = (function (){var statearr_48623 = state_48594;
(statearr_48623[(24)] = inst_48566);

return statearr_48623;
})();
var statearr_48624_48697 = state_48594__$1;
(statearr_48624_48697[(2)] = inst_48567);

(statearr_48624_48697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (33))){
var inst_48553 = (state_48594[(25)]);
var inst_48555 = cljs.core.chunked_seq_QMARK_.call(null,inst_48553);
var state_48594__$1 = state_48594;
if(inst_48555){
var statearr_48625_48698 = state_48594__$1;
(statearr_48625_48698[(1)] = (36));

} else {
var statearr_48626_48699 = state_48594__$1;
(statearr_48626_48699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (13))){
var inst_48483 = (state_48594[(26)]);
var inst_48486 = cljs.core.async.close_BANG_.call(null,inst_48483);
var state_48594__$1 = state_48594;
var statearr_48627_48700 = state_48594__$1;
(statearr_48627_48700[(2)] = inst_48486);

(statearr_48627_48700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (22))){
var inst_48506 = (state_48594[(8)]);
var inst_48509 = cljs.core.async.close_BANG_.call(null,inst_48506);
var state_48594__$1 = state_48594;
var statearr_48628_48701 = state_48594__$1;
(statearr_48628_48701[(2)] = inst_48509);

(statearr_48628_48701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (36))){
var inst_48553 = (state_48594[(25)]);
var inst_48557 = cljs.core.chunk_first.call(null,inst_48553);
var inst_48558 = cljs.core.chunk_rest.call(null,inst_48553);
var inst_48559 = cljs.core.count.call(null,inst_48557);
var inst_48534 = inst_48558;
var inst_48535 = inst_48557;
var inst_48536 = inst_48559;
var inst_48537 = (0);
var state_48594__$1 = (function (){var statearr_48629 = state_48594;
(statearr_48629[(9)] = inst_48537);

(statearr_48629[(12)] = inst_48535);

(statearr_48629[(20)] = inst_48536);

(statearr_48629[(21)] = inst_48534);

return statearr_48629;
})();
var statearr_48630_48702 = state_48594__$1;
(statearr_48630_48702[(2)] = null);

(statearr_48630_48702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (41))){
var inst_48553 = (state_48594[(25)]);
var inst_48569 = (state_48594[(2)]);
var inst_48570 = cljs.core.next.call(null,inst_48553);
var inst_48534 = inst_48570;
var inst_48535 = null;
var inst_48536 = (0);
var inst_48537 = (0);
var state_48594__$1 = (function (){var statearr_48631 = state_48594;
(statearr_48631[(27)] = inst_48569);

(statearr_48631[(9)] = inst_48537);

(statearr_48631[(12)] = inst_48535);

(statearr_48631[(20)] = inst_48536);

(statearr_48631[(21)] = inst_48534);

return statearr_48631;
})();
var statearr_48632_48703 = state_48594__$1;
(statearr_48632_48703[(2)] = null);

(statearr_48632_48703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (43))){
var state_48594__$1 = state_48594;
var statearr_48633_48704 = state_48594__$1;
(statearr_48633_48704[(2)] = null);

(statearr_48633_48704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (29))){
var inst_48578 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48634_48705 = state_48594__$1;
(statearr_48634_48705[(2)] = inst_48578);

(statearr_48634_48705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (44))){
var inst_48587 = (state_48594[(2)]);
var state_48594__$1 = (function (){var statearr_48635 = state_48594;
(statearr_48635[(28)] = inst_48587);

return statearr_48635;
})();
var statearr_48636_48706 = state_48594__$1;
(statearr_48636_48706[(2)] = null);

(statearr_48636_48706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (6))){
var inst_48526 = (state_48594[(29)]);
var inst_48525 = cljs.core.deref.call(null,cs);
var inst_48526__$1 = cljs.core.keys.call(null,inst_48525);
var inst_48527 = cljs.core.count.call(null,inst_48526__$1);
var inst_48528 = cljs.core.reset_BANG_.call(null,dctr,inst_48527);
var inst_48533 = cljs.core.seq.call(null,inst_48526__$1);
var inst_48534 = inst_48533;
var inst_48535 = null;
var inst_48536 = (0);
var inst_48537 = (0);
var state_48594__$1 = (function (){var statearr_48637 = state_48594;
(statearr_48637[(30)] = inst_48528);

(statearr_48637[(29)] = inst_48526__$1);

(statearr_48637[(9)] = inst_48537);

(statearr_48637[(12)] = inst_48535);

(statearr_48637[(20)] = inst_48536);

(statearr_48637[(21)] = inst_48534);

return statearr_48637;
})();
var statearr_48638_48707 = state_48594__$1;
(statearr_48638_48707[(2)] = null);

(statearr_48638_48707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (28))){
var inst_48553 = (state_48594[(25)]);
var inst_48534 = (state_48594[(21)]);
var inst_48553__$1 = cljs.core.seq.call(null,inst_48534);
var state_48594__$1 = (function (){var statearr_48639 = state_48594;
(statearr_48639[(25)] = inst_48553__$1);

return statearr_48639;
})();
if(inst_48553__$1){
var statearr_48640_48708 = state_48594__$1;
(statearr_48640_48708[(1)] = (33));

} else {
var statearr_48641_48709 = state_48594__$1;
(statearr_48641_48709[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (25))){
var inst_48537 = (state_48594[(9)]);
var inst_48536 = (state_48594[(20)]);
var inst_48539 = (inst_48537 < inst_48536);
var inst_48540 = inst_48539;
var state_48594__$1 = state_48594;
if(cljs.core.truth_(inst_48540)){
var statearr_48642_48710 = state_48594__$1;
(statearr_48642_48710[(1)] = (27));

} else {
var statearr_48643_48711 = state_48594__$1;
(statearr_48643_48711[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (34))){
var state_48594__$1 = state_48594;
var statearr_48644_48712 = state_48594__$1;
(statearr_48644_48712[(2)] = null);

(statearr_48644_48712[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (17))){
var state_48594__$1 = state_48594;
var statearr_48645_48713 = state_48594__$1;
(statearr_48645_48713[(2)] = null);

(statearr_48645_48713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (3))){
var inst_48592 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48594__$1,inst_48592);
} else {
if((state_val_48595 === (12))){
var inst_48521 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48646_48714 = state_48594__$1;
(statearr_48646_48714[(2)] = inst_48521);

(statearr_48646_48714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (2))){
var state_48594__$1 = state_48594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48594__$1,(4),ch);
} else {
if((state_val_48595 === (23))){
var state_48594__$1 = state_48594;
var statearr_48647_48715 = state_48594__$1;
(statearr_48647_48715[(2)] = null);

(statearr_48647_48715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (35))){
var inst_48576 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48648_48716 = state_48594__$1;
(statearr_48648_48716[(2)] = inst_48576);

(statearr_48648_48716[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (19))){
var inst_48493 = (state_48594[(7)]);
var inst_48497 = cljs.core.chunk_first.call(null,inst_48493);
var inst_48498 = cljs.core.chunk_rest.call(null,inst_48493);
var inst_48499 = cljs.core.count.call(null,inst_48497);
var inst_48471 = inst_48498;
var inst_48472 = inst_48497;
var inst_48473 = inst_48499;
var inst_48474 = (0);
var state_48594__$1 = (function (){var statearr_48649 = state_48594;
(statearr_48649[(13)] = inst_48472);

(statearr_48649[(14)] = inst_48471);

(statearr_48649[(15)] = inst_48474);

(statearr_48649[(17)] = inst_48473);

return statearr_48649;
})();
var statearr_48650_48717 = state_48594__$1;
(statearr_48650_48717[(2)] = null);

(statearr_48650_48717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (11))){
var inst_48471 = (state_48594[(14)]);
var inst_48493 = (state_48594[(7)]);
var inst_48493__$1 = cljs.core.seq.call(null,inst_48471);
var state_48594__$1 = (function (){var statearr_48651 = state_48594;
(statearr_48651[(7)] = inst_48493__$1);

return statearr_48651;
})();
if(inst_48493__$1){
var statearr_48652_48718 = state_48594__$1;
(statearr_48652_48718[(1)] = (16));

} else {
var statearr_48653_48719 = state_48594__$1;
(statearr_48653_48719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (9))){
var inst_48523 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48654_48720 = state_48594__$1;
(statearr_48654_48720[(2)] = inst_48523);

(statearr_48654_48720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (5))){
var inst_48469 = cljs.core.deref.call(null,cs);
var inst_48470 = cljs.core.seq.call(null,inst_48469);
var inst_48471 = inst_48470;
var inst_48472 = null;
var inst_48473 = (0);
var inst_48474 = (0);
var state_48594__$1 = (function (){var statearr_48655 = state_48594;
(statearr_48655[(13)] = inst_48472);

(statearr_48655[(14)] = inst_48471);

(statearr_48655[(15)] = inst_48474);

(statearr_48655[(17)] = inst_48473);

return statearr_48655;
})();
var statearr_48656_48721 = state_48594__$1;
(statearr_48656_48721[(2)] = null);

(statearr_48656_48721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (14))){
var state_48594__$1 = state_48594;
var statearr_48657_48722 = state_48594__$1;
(statearr_48657_48722[(2)] = null);

(statearr_48657_48722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (45))){
var inst_48584 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48658_48723 = state_48594__$1;
(statearr_48658_48723[(2)] = inst_48584);

(statearr_48658_48723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (26))){
var inst_48526 = (state_48594[(29)]);
var inst_48580 = (state_48594[(2)]);
var inst_48581 = cljs.core.seq.call(null,inst_48526);
var state_48594__$1 = (function (){var statearr_48659 = state_48594;
(statearr_48659[(31)] = inst_48580);

return statearr_48659;
})();
if(inst_48581){
var statearr_48660_48724 = state_48594__$1;
(statearr_48660_48724[(1)] = (42));

} else {
var statearr_48661_48725 = state_48594__$1;
(statearr_48661_48725[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (16))){
var inst_48493 = (state_48594[(7)]);
var inst_48495 = cljs.core.chunked_seq_QMARK_.call(null,inst_48493);
var state_48594__$1 = state_48594;
if(inst_48495){
var statearr_48662_48726 = state_48594__$1;
(statearr_48662_48726[(1)] = (19));

} else {
var statearr_48663_48727 = state_48594__$1;
(statearr_48663_48727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (38))){
var inst_48573 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48664_48728 = state_48594__$1;
(statearr_48664_48728[(2)] = inst_48573);

(statearr_48664_48728[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (30))){
var state_48594__$1 = state_48594;
var statearr_48665_48729 = state_48594__$1;
(statearr_48665_48729[(2)] = null);

(statearr_48665_48729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (10))){
var inst_48472 = (state_48594[(13)]);
var inst_48474 = (state_48594[(15)]);
var inst_48482 = cljs.core._nth.call(null,inst_48472,inst_48474);
var inst_48483 = cljs.core.nth.call(null,inst_48482,(0),null);
var inst_48484 = cljs.core.nth.call(null,inst_48482,(1),null);
var state_48594__$1 = (function (){var statearr_48666 = state_48594;
(statearr_48666[(26)] = inst_48483);

return statearr_48666;
})();
if(cljs.core.truth_(inst_48484)){
var statearr_48667_48730 = state_48594__$1;
(statearr_48667_48730[(1)] = (13));

} else {
var statearr_48668_48731 = state_48594__$1;
(statearr_48668_48731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (18))){
var inst_48519 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48669_48732 = state_48594__$1;
(statearr_48669_48732[(2)] = inst_48519);

(statearr_48669_48732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (42))){
var state_48594__$1 = state_48594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48594__$1,(45),dchan);
} else {
if((state_val_48595 === (37))){
var inst_48462 = (state_48594[(11)]);
var inst_48553 = (state_48594[(25)]);
var inst_48562 = (state_48594[(23)]);
var inst_48562__$1 = cljs.core.first.call(null,inst_48553);
var inst_48563 = cljs.core.async.put_BANG_.call(null,inst_48562__$1,inst_48462,done);
var state_48594__$1 = (function (){var statearr_48670 = state_48594;
(statearr_48670[(23)] = inst_48562__$1);

return statearr_48670;
})();
if(cljs.core.truth_(inst_48563)){
var statearr_48671_48733 = state_48594__$1;
(statearr_48671_48733[(1)] = (39));

} else {
var statearr_48672_48734 = state_48594__$1;
(statearr_48672_48734[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (8))){
var inst_48474 = (state_48594[(15)]);
var inst_48473 = (state_48594[(17)]);
var inst_48476 = (inst_48474 < inst_48473);
var inst_48477 = inst_48476;
var state_48594__$1 = state_48594;
if(cljs.core.truth_(inst_48477)){
var statearr_48673_48735 = state_48594__$1;
(statearr_48673_48735[(1)] = (10));

} else {
var statearr_48674_48736 = state_48594__$1;
(statearr_48674_48736[(1)] = (11));

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
});})(c__28998__auto___48682,cs,m,dchan,dctr,done))
;
return ((function (switch__28886__auto__,c__28998__auto___48682,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28887__auto__ = null;
var cljs$core$async$mult_$_state_machine__28887__auto____0 = (function (){
var statearr_48678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48678[(0)] = cljs$core$async$mult_$_state_machine__28887__auto__);

(statearr_48678[(1)] = (1));

return statearr_48678;
});
var cljs$core$async$mult_$_state_machine__28887__auto____1 = (function (state_48594){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_48594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e48679){if((e48679 instanceof Object)){
var ex__28890__auto__ = e48679;
var statearr_48680_48737 = state_48594;
(statearr_48680_48737[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48738 = state_48594;
state_48594 = G__48738;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28887__auto__ = function(state_48594){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28887__auto____1.call(this,state_48594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28887__auto____0;
cljs$core$async$mult_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28887__auto____1;
return cljs$core$async$mult_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___48682,cs,m,dchan,dctr,done))
})();
var state__29000__auto__ = (function (){var statearr_48681 = f__28999__auto__.call(null);
(statearr_48681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___48682);

return statearr_48681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___48682,cs,m,dchan,dctr,done))
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
var args48739 = [];
var len__26007__auto___48742 = arguments.length;
var i__26008__auto___48743 = (0);
while(true){
if((i__26008__auto___48743 < len__26007__auto___48742)){
args48739.push((arguments[i__26008__auto___48743]));

var G__48744 = (i__26008__auto___48743 + (1));
i__26008__auto___48743 = G__48744;
continue;
} else {
}
break;
}

var G__48741 = args48739.length;
switch (G__48741) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48739.length)].join('')));

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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m,ch);
} else {
var m__25563__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m,ch);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m,ch);
} else {
var m__25563__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m,ch);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m);
} else {
var m__25563__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m,state_map);
} else {
var m__25563__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m,state_map);
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
var x__25562__auto__ = (((m == null))?null:m);
var m__25563__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,m,mode);
} else {
var m__25563__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26014__auto__ = [];
var len__26007__auto___48756 = arguments.length;
var i__26008__auto___48757 = (0);
while(true){
if((i__26008__auto___48757 < len__26007__auto___48756)){
args__26014__auto__.push((arguments[i__26008__auto___48757]));

var G__48758 = (i__26008__auto___48757 + (1));
i__26008__auto___48757 = G__48758;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((3) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26015__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48750){
var map__48751 = p__48750;
var map__48751__$1 = ((((!((map__48751 == null)))?((((map__48751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48751):map__48751);
var opts = map__48751__$1;
var statearr_48753_48759 = state;
(statearr_48753_48759[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48751,map__48751__$1,opts){
return (function (val){
var statearr_48754_48760 = state;
(statearr_48754_48760[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48751,map__48751__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48755_48761 = state;
(statearr_48755_48761[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48746){
var G__48747 = cljs.core.first.call(null,seq48746);
var seq48746__$1 = cljs.core.next.call(null,seq48746);
var G__48748 = cljs.core.first.call(null,seq48746__$1);
var seq48746__$2 = cljs.core.next.call(null,seq48746__$1);
var G__48749 = cljs.core.first.call(null,seq48746__$2);
var seq48746__$3 = cljs.core.next.call(null,seq48746__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48747,G__48748,G__48749,seq48746__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48929 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48930){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48930 = meta48930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48931,meta48930__$1){
var self__ = this;
var _48931__$1 = this;
return (new cljs.core.async.t_cljs$core$async48929(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48930__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48931){
var self__ = this;
var _48931__$1 = this;
return self__.meta48930;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48930","meta48930",856239210,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48929";

cljs.core.async.t_cljs$core$async48929.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async48929");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48929 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48929(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48930){
return (new cljs.core.async.t_cljs$core$async48929(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48930));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48929(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28998__auto___49096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49033){
var state_val_49034 = (state_49033[(1)]);
if((state_val_49034 === (7))){
var inst_48948 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
var statearr_49035_49097 = state_49033__$1;
(statearr_49035_49097[(2)] = inst_48948);

(statearr_49035_49097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (20))){
var inst_48960 = (state_49033[(7)]);
var state_49033__$1 = state_49033;
var statearr_49036_49098 = state_49033__$1;
(statearr_49036_49098[(2)] = inst_48960);

(statearr_49036_49098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (27))){
var state_49033__$1 = state_49033;
var statearr_49037_49099 = state_49033__$1;
(statearr_49037_49099[(2)] = null);

(statearr_49037_49099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (1))){
var inst_48935 = (state_49033[(8)]);
var inst_48935__$1 = calc_state.call(null);
var inst_48937 = (inst_48935__$1 == null);
var inst_48938 = cljs.core.not.call(null,inst_48937);
var state_49033__$1 = (function (){var statearr_49038 = state_49033;
(statearr_49038[(8)] = inst_48935__$1);

return statearr_49038;
})();
if(inst_48938){
var statearr_49039_49100 = state_49033__$1;
(statearr_49039_49100[(1)] = (2));

} else {
var statearr_49040_49101 = state_49033__$1;
(statearr_49040_49101[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (24))){
var inst_49007 = (state_49033[(9)]);
var inst_48984 = (state_49033[(10)]);
var inst_48993 = (state_49033[(11)]);
var inst_49007__$1 = inst_48984.call(null,inst_48993);
var state_49033__$1 = (function (){var statearr_49041 = state_49033;
(statearr_49041[(9)] = inst_49007__$1);

return statearr_49041;
})();
if(cljs.core.truth_(inst_49007__$1)){
var statearr_49042_49102 = state_49033__$1;
(statearr_49042_49102[(1)] = (29));

} else {
var statearr_49043_49103 = state_49033__$1;
(statearr_49043_49103[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (4))){
var inst_48951 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_48951)){
var statearr_49044_49104 = state_49033__$1;
(statearr_49044_49104[(1)] = (8));

} else {
var statearr_49045_49105 = state_49033__$1;
(statearr_49045_49105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (15))){
var inst_48978 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_48978)){
var statearr_49046_49106 = state_49033__$1;
(statearr_49046_49106[(1)] = (19));

} else {
var statearr_49047_49107 = state_49033__$1;
(statearr_49047_49107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (21))){
var inst_48983 = (state_49033[(12)]);
var inst_48983__$1 = (state_49033[(2)]);
var inst_48984 = cljs.core.get.call(null,inst_48983__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48985 = cljs.core.get.call(null,inst_48983__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48986 = cljs.core.get.call(null,inst_48983__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49033__$1 = (function (){var statearr_49048 = state_49033;
(statearr_49048[(10)] = inst_48984);

(statearr_49048[(13)] = inst_48985);

(statearr_49048[(12)] = inst_48983__$1);

return statearr_49048;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49033__$1,(22),inst_48986);
} else {
if((state_val_49034 === (31))){
var inst_49015 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_49015)){
var statearr_49049_49108 = state_49033__$1;
(statearr_49049_49108[(1)] = (32));

} else {
var statearr_49050_49109 = state_49033__$1;
(statearr_49050_49109[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (32))){
var inst_48992 = (state_49033[(14)]);
var state_49033__$1 = state_49033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49033__$1,(35),out,inst_48992);
} else {
if((state_val_49034 === (33))){
var inst_48983 = (state_49033[(12)]);
var inst_48960 = inst_48983;
var state_49033__$1 = (function (){var statearr_49051 = state_49033;
(statearr_49051[(7)] = inst_48960);

return statearr_49051;
})();
var statearr_49052_49110 = state_49033__$1;
(statearr_49052_49110[(2)] = null);

(statearr_49052_49110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (13))){
var inst_48960 = (state_49033[(7)]);
var inst_48967 = inst_48960.cljs$lang$protocol_mask$partition0$;
var inst_48968 = (inst_48967 & (64));
var inst_48969 = inst_48960.cljs$core$ISeq$;
var inst_48970 = (cljs.core.PROTOCOL_SENTINEL === inst_48969);
var inst_48971 = (inst_48968) || (inst_48970);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_48971)){
var statearr_49053_49111 = state_49033__$1;
(statearr_49053_49111[(1)] = (16));

} else {
var statearr_49054_49112 = state_49033__$1;
(statearr_49054_49112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (22))){
var inst_48993 = (state_49033[(11)]);
var inst_48992 = (state_49033[(14)]);
var inst_48991 = (state_49033[(2)]);
var inst_48992__$1 = cljs.core.nth.call(null,inst_48991,(0),null);
var inst_48993__$1 = cljs.core.nth.call(null,inst_48991,(1),null);
var inst_48994 = (inst_48992__$1 == null);
var inst_48995 = cljs.core._EQ_.call(null,inst_48993__$1,change);
var inst_48996 = (inst_48994) || (inst_48995);
var state_49033__$1 = (function (){var statearr_49055 = state_49033;
(statearr_49055[(11)] = inst_48993__$1);

(statearr_49055[(14)] = inst_48992__$1);

return statearr_49055;
})();
if(cljs.core.truth_(inst_48996)){
var statearr_49056_49113 = state_49033__$1;
(statearr_49056_49113[(1)] = (23));

} else {
var statearr_49057_49114 = state_49033__$1;
(statearr_49057_49114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (36))){
var inst_48983 = (state_49033[(12)]);
var inst_48960 = inst_48983;
var state_49033__$1 = (function (){var statearr_49058 = state_49033;
(statearr_49058[(7)] = inst_48960);

return statearr_49058;
})();
var statearr_49059_49115 = state_49033__$1;
(statearr_49059_49115[(2)] = null);

(statearr_49059_49115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (29))){
var inst_49007 = (state_49033[(9)]);
var state_49033__$1 = state_49033;
var statearr_49060_49116 = state_49033__$1;
(statearr_49060_49116[(2)] = inst_49007);

(statearr_49060_49116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (6))){
var state_49033__$1 = state_49033;
var statearr_49061_49117 = state_49033__$1;
(statearr_49061_49117[(2)] = false);

(statearr_49061_49117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (28))){
var inst_49003 = (state_49033[(2)]);
var inst_49004 = calc_state.call(null);
var inst_48960 = inst_49004;
var state_49033__$1 = (function (){var statearr_49062 = state_49033;
(statearr_49062[(7)] = inst_48960);

(statearr_49062[(15)] = inst_49003);

return statearr_49062;
})();
var statearr_49063_49118 = state_49033__$1;
(statearr_49063_49118[(2)] = null);

(statearr_49063_49118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (25))){
var inst_49029 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
var statearr_49064_49119 = state_49033__$1;
(statearr_49064_49119[(2)] = inst_49029);

(statearr_49064_49119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (34))){
var inst_49027 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
var statearr_49065_49120 = state_49033__$1;
(statearr_49065_49120[(2)] = inst_49027);

(statearr_49065_49120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (17))){
var state_49033__$1 = state_49033;
var statearr_49066_49121 = state_49033__$1;
(statearr_49066_49121[(2)] = false);

(statearr_49066_49121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (3))){
var state_49033__$1 = state_49033;
var statearr_49067_49122 = state_49033__$1;
(statearr_49067_49122[(2)] = false);

(statearr_49067_49122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (12))){
var inst_49031 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49033__$1,inst_49031);
} else {
if((state_val_49034 === (2))){
var inst_48935 = (state_49033[(8)]);
var inst_48940 = inst_48935.cljs$lang$protocol_mask$partition0$;
var inst_48941 = (inst_48940 & (64));
var inst_48942 = inst_48935.cljs$core$ISeq$;
var inst_48943 = (cljs.core.PROTOCOL_SENTINEL === inst_48942);
var inst_48944 = (inst_48941) || (inst_48943);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_48944)){
var statearr_49068_49123 = state_49033__$1;
(statearr_49068_49123[(1)] = (5));

} else {
var statearr_49069_49124 = state_49033__$1;
(statearr_49069_49124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (23))){
var inst_48992 = (state_49033[(14)]);
var inst_48998 = (inst_48992 == null);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_48998)){
var statearr_49070_49125 = state_49033__$1;
(statearr_49070_49125[(1)] = (26));

} else {
var statearr_49071_49126 = state_49033__$1;
(statearr_49071_49126[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (35))){
var inst_49018 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
if(cljs.core.truth_(inst_49018)){
var statearr_49072_49127 = state_49033__$1;
(statearr_49072_49127[(1)] = (36));

} else {
var statearr_49073_49128 = state_49033__$1;
(statearr_49073_49128[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (19))){
var inst_48960 = (state_49033[(7)]);
var inst_48980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48960);
var state_49033__$1 = state_49033;
var statearr_49074_49129 = state_49033__$1;
(statearr_49074_49129[(2)] = inst_48980);

(statearr_49074_49129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (11))){
var inst_48960 = (state_49033[(7)]);
var inst_48964 = (inst_48960 == null);
var inst_48965 = cljs.core.not.call(null,inst_48964);
var state_49033__$1 = state_49033;
if(inst_48965){
var statearr_49075_49130 = state_49033__$1;
(statearr_49075_49130[(1)] = (13));

} else {
var statearr_49076_49131 = state_49033__$1;
(statearr_49076_49131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (9))){
var inst_48935 = (state_49033[(8)]);
var state_49033__$1 = state_49033;
var statearr_49077_49132 = state_49033__$1;
(statearr_49077_49132[(2)] = inst_48935);

(statearr_49077_49132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (5))){
var state_49033__$1 = state_49033;
var statearr_49078_49133 = state_49033__$1;
(statearr_49078_49133[(2)] = true);

(statearr_49078_49133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (14))){
var state_49033__$1 = state_49033;
var statearr_49079_49134 = state_49033__$1;
(statearr_49079_49134[(2)] = false);

(statearr_49079_49134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (26))){
var inst_48993 = (state_49033[(11)]);
var inst_49000 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48993);
var state_49033__$1 = state_49033;
var statearr_49080_49135 = state_49033__$1;
(statearr_49080_49135[(2)] = inst_49000);

(statearr_49080_49135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (16))){
var state_49033__$1 = state_49033;
var statearr_49081_49136 = state_49033__$1;
(statearr_49081_49136[(2)] = true);

(statearr_49081_49136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (38))){
var inst_49023 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
var statearr_49082_49137 = state_49033__$1;
(statearr_49082_49137[(2)] = inst_49023);

(statearr_49082_49137[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (30))){
var inst_48984 = (state_49033[(10)]);
var inst_48985 = (state_49033[(13)]);
var inst_48993 = (state_49033[(11)]);
var inst_49010 = cljs.core.empty_QMARK_.call(null,inst_48984);
var inst_49011 = inst_48985.call(null,inst_48993);
var inst_49012 = cljs.core.not.call(null,inst_49011);
var inst_49013 = (inst_49010) && (inst_49012);
var state_49033__$1 = state_49033;
var statearr_49083_49138 = state_49033__$1;
(statearr_49083_49138[(2)] = inst_49013);

(statearr_49083_49138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (10))){
var inst_48935 = (state_49033[(8)]);
var inst_48956 = (state_49033[(2)]);
var inst_48957 = cljs.core.get.call(null,inst_48956,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48958 = cljs.core.get.call(null,inst_48956,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48959 = cljs.core.get.call(null,inst_48956,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48960 = inst_48935;
var state_49033__$1 = (function (){var statearr_49084 = state_49033;
(statearr_49084[(16)] = inst_48958);

(statearr_49084[(7)] = inst_48960);

(statearr_49084[(17)] = inst_48959);

(statearr_49084[(18)] = inst_48957);

return statearr_49084;
})();
var statearr_49085_49139 = state_49033__$1;
(statearr_49085_49139[(2)] = null);

(statearr_49085_49139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (18))){
var inst_48975 = (state_49033[(2)]);
var state_49033__$1 = state_49033;
var statearr_49086_49140 = state_49033__$1;
(statearr_49086_49140[(2)] = inst_48975);

(statearr_49086_49140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (37))){
var state_49033__$1 = state_49033;
var statearr_49087_49141 = state_49033__$1;
(statearr_49087_49141[(2)] = null);

(statearr_49087_49141[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49034 === (8))){
var inst_48935 = (state_49033[(8)]);
var inst_48953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48935);
var state_49033__$1 = state_49033;
var statearr_49088_49142 = state_49033__$1;
(statearr_49088_49142[(2)] = inst_48953);

(statearr_49088_49142[(1)] = (10));


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
});})(c__28998__auto___49096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28886__auto__,c__28998__auto___49096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28887__auto__ = null;
var cljs$core$async$mix_$_state_machine__28887__auto____0 = (function (){
var statearr_49092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49092[(0)] = cljs$core$async$mix_$_state_machine__28887__auto__);

(statearr_49092[(1)] = (1));

return statearr_49092;
});
var cljs$core$async$mix_$_state_machine__28887__auto____1 = (function (state_49033){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49093){if((e49093 instanceof Object)){
var ex__28890__auto__ = e49093;
var statearr_49094_49143 = state_49033;
(statearr_49094_49143[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49144 = state_49033;
state_49033 = G__49144;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28887__auto__ = function(state_49033){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28887__auto____1.call(this,state_49033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28887__auto____0;
cljs$core$async$mix_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28887__auto____1;
return cljs$core$async$mix_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29000__auto__ = (function (){var statearr_49095 = f__28999__auto__.call(null);
(statearr_49095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49096);

return statearr_49095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25562__auto__ = (((p == null))?null:p);
var m__25563__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25563__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25562__auto__ = (((p == null))?null:p);
var m__25563__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,p,v,ch);
} else {
var m__25563__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args49145 = [];
var len__26007__auto___49148 = arguments.length;
var i__26008__auto___49149 = (0);
while(true){
if((i__26008__auto___49149 < len__26007__auto___49148)){
args49145.push((arguments[i__26008__auto___49149]));

var G__49150 = (i__26008__auto___49149 + (1));
i__26008__auto___49149 = G__49150;
continue;
} else {
}
break;
}

var G__49147 = args49145.length;
switch (G__49147) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49145.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25562__auto__ = (((p == null))?null:p);
var m__25563__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,p);
} else {
var m__25563__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,p);
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
var x__25562__auto__ = (((p == null))?null:p);
var m__25563__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(!((m__25563__auto__ == null))){
return m__25563__auto__.call(null,p,v);
} else {
var m__25563__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25563__auto____$1 == null))){
return m__25563__auto____$1.call(null,p,v);
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
var args49153 = [];
var len__26007__auto___49278 = arguments.length;
var i__26008__auto___49279 = (0);
while(true){
if((i__26008__auto___49279 < len__26007__auto___49278)){
args49153.push((arguments[i__26008__auto___49279]));

var G__49280 = (i__26008__auto___49279 + (1));
i__26008__auto___49279 = G__49280;
continue;
} else {
}
break;
}

var G__49155 = args49153.length;
switch (G__49155) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49153.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24899__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24899__auto__,mults){
return (function (p1__49152_SHARP_){
if(cljs.core.truth_(p1__49152_SHARP_.call(null,topic))){
return p1__49152_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49152_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24899__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49156 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49157){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49157 = meta49157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49158,meta49157__$1){
var self__ = this;
var _49158__$1 = this;
return (new cljs.core.async.t_cljs$core$async49156(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49157__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49158){
var self__ = this;
var _49158__$1 = this;
return self__.meta49157;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49157","meta49157",685497320,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49156";

cljs.core.async.t_cljs$core$async49156.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async49156");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49156 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49156(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49157){
return (new cljs.core.async.t_cljs$core$async49156(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49157));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49156(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28998__auto___49282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49282,mults,ensure_mult,p){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49282,mults,ensure_mult,p){
return (function (state_49230){
var state_val_49231 = (state_49230[(1)]);
if((state_val_49231 === (7))){
var inst_49226 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49232_49283 = state_49230__$1;
(statearr_49232_49283[(2)] = inst_49226);

(statearr_49232_49283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (20))){
var state_49230__$1 = state_49230;
var statearr_49233_49284 = state_49230__$1;
(statearr_49233_49284[(2)] = null);

(statearr_49233_49284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (1))){
var state_49230__$1 = state_49230;
var statearr_49234_49285 = state_49230__$1;
(statearr_49234_49285[(2)] = null);

(statearr_49234_49285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (24))){
var inst_49209 = (state_49230[(7)]);
var inst_49218 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49209);
var state_49230__$1 = state_49230;
var statearr_49235_49286 = state_49230__$1;
(statearr_49235_49286[(2)] = inst_49218);

(statearr_49235_49286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (4))){
var inst_49161 = (state_49230[(8)]);
var inst_49161__$1 = (state_49230[(2)]);
var inst_49162 = (inst_49161__$1 == null);
var state_49230__$1 = (function (){var statearr_49236 = state_49230;
(statearr_49236[(8)] = inst_49161__$1);

return statearr_49236;
})();
if(cljs.core.truth_(inst_49162)){
var statearr_49237_49287 = state_49230__$1;
(statearr_49237_49287[(1)] = (5));

} else {
var statearr_49238_49288 = state_49230__$1;
(statearr_49238_49288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (15))){
var inst_49203 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49239_49289 = state_49230__$1;
(statearr_49239_49289[(2)] = inst_49203);

(statearr_49239_49289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (21))){
var inst_49223 = (state_49230[(2)]);
var state_49230__$1 = (function (){var statearr_49240 = state_49230;
(statearr_49240[(9)] = inst_49223);

return statearr_49240;
})();
var statearr_49241_49290 = state_49230__$1;
(statearr_49241_49290[(2)] = null);

(statearr_49241_49290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (13))){
var inst_49185 = (state_49230[(10)]);
var inst_49187 = cljs.core.chunked_seq_QMARK_.call(null,inst_49185);
var state_49230__$1 = state_49230;
if(inst_49187){
var statearr_49242_49291 = state_49230__$1;
(statearr_49242_49291[(1)] = (16));

} else {
var statearr_49243_49292 = state_49230__$1;
(statearr_49243_49292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (22))){
var inst_49215 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
if(cljs.core.truth_(inst_49215)){
var statearr_49244_49293 = state_49230__$1;
(statearr_49244_49293[(1)] = (23));

} else {
var statearr_49245_49294 = state_49230__$1;
(statearr_49245_49294[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (6))){
var inst_49211 = (state_49230[(11)]);
var inst_49209 = (state_49230[(7)]);
var inst_49161 = (state_49230[(8)]);
var inst_49209__$1 = topic_fn.call(null,inst_49161);
var inst_49210 = cljs.core.deref.call(null,mults);
var inst_49211__$1 = cljs.core.get.call(null,inst_49210,inst_49209__$1);
var state_49230__$1 = (function (){var statearr_49246 = state_49230;
(statearr_49246[(11)] = inst_49211__$1);

(statearr_49246[(7)] = inst_49209__$1);

return statearr_49246;
})();
if(cljs.core.truth_(inst_49211__$1)){
var statearr_49247_49295 = state_49230__$1;
(statearr_49247_49295[(1)] = (19));

} else {
var statearr_49248_49296 = state_49230__$1;
(statearr_49248_49296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (25))){
var inst_49220 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49249_49297 = state_49230__$1;
(statearr_49249_49297[(2)] = inst_49220);

(statearr_49249_49297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (17))){
var inst_49185 = (state_49230[(10)]);
var inst_49194 = cljs.core.first.call(null,inst_49185);
var inst_49195 = cljs.core.async.muxch_STAR_.call(null,inst_49194);
var inst_49196 = cljs.core.async.close_BANG_.call(null,inst_49195);
var inst_49197 = cljs.core.next.call(null,inst_49185);
var inst_49171 = inst_49197;
var inst_49172 = null;
var inst_49173 = (0);
var inst_49174 = (0);
var state_49230__$1 = (function (){var statearr_49250 = state_49230;
(statearr_49250[(12)] = inst_49172);

(statearr_49250[(13)] = inst_49171);

(statearr_49250[(14)] = inst_49173);

(statearr_49250[(15)] = inst_49196);

(statearr_49250[(16)] = inst_49174);

return statearr_49250;
})();
var statearr_49251_49298 = state_49230__$1;
(statearr_49251_49298[(2)] = null);

(statearr_49251_49298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (3))){
var inst_49228 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49230__$1,inst_49228);
} else {
if((state_val_49231 === (12))){
var inst_49205 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49252_49299 = state_49230__$1;
(statearr_49252_49299[(2)] = inst_49205);

(statearr_49252_49299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (2))){
var state_49230__$1 = state_49230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49230__$1,(4),ch);
} else {
if((state_val_49231 === (23))){
var state_49230__$1 = state_49230;
var statearr_49253_49300 = state_49230__$1;
(statearr_49253_49300[(2)] = null);

(statearr_49253_49300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (19))){
var inst_49211 = (state_49230[(11)]);
var inst_49161 = (state_49230[(8)]);
var inst_49213 = cljs.core.async.muxch_STAR_.call(null,inst_49211);
var state_49230__$1 = state_49230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49230__$1,(22),inst_49213,inst_49161);
} else {
if((state_val_49231 === (11))){
var inst_49185 = (state_49230[(10)]);
var inst_49171 = (state_49230[(13)]);
var inst_49185__$1 = cljs.core.seq.call(null,inst_49171);
var state_49230__$1 = (function (){var statearr_49254 = state_49230;
(statearr_49254[(10)] = inst_49185__$1);

return statearr_49254;
})();
if(inst_49185__$1){
var statearr_49255_49301 = state_49230__$1;
(statearr_49255_49301[(1)] = (13));

} else {
var statearr_49256_49302 = state_49230__$1;
(statearr_49256_49302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (9))){
var inst_49207 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49257_49303 = state_49230__$1;
(statearr_49257_49303[(2)] = inst_49207);

(statearr_49257_49303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (5))){
var inst_49168 = cljs.core.deref.call(null,mults);
var inst_49169 = cljs.core.vals.call(null,inst_49168);
var inst_49170 = cljs.core.seq.call(null,inst_49169);
var inst_49171 = inst_49170;
var inst_49172 = null;
var inst_49173 = (0);
var inst_49174 = (0);
var state_49230__$1 = (function (){var statearr_49258 = state_49230;
(statearr_49258[(12)] = inst_49172);

(statearr_49258[(13)] = inst_49171);

(statearr_49258[(14)] = inst_49173);

(statearr_49258[(16)] = inst_49174);

return statearr_49258;
})();
var statearr_49259_49304 = state_49230__$1;
(statearr_49259_49304[(2)] = null);

(statearr_49259_49304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (14))){
var state_49230__$1 = state_49230;
var statearr_49263_49305 = state_49230__$1;
(statearr_49263_49305[(2)] = null);

(statearr_49263_49305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (16))){
var inst_49185 = (state_49230[(10)]);
var inst_49189 = cljs.core.chunk_first.call(null,inst_49185);
var inst_49190 = cljs.core.chunk_rest.call(null,inst_49185);
var inst_49191 = cljs.core.count.call(null,inst_49189);
var inst_49171 = inst_49190;
var inst_49172 = inst_49189;
var inst_49173 = inst_49191;
var inst_49174 = (0);
var state_49230__$1 = (function (){var statearr_49264 = state_49230;
(statearr_49264[(12)] = inst_49172);

(statearr_49264[(13)] = inst_49171);

(statearr_49264[(14)] = inst_49173);

(statearr_49264[(16)] = inst_49174);

return statearr_49264;
})();
var statearr_49265_49306 = state_49230__$1;
(statearr_49265_49306[(2)] = null);

(statearr_49265_49306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (10))){
var inst_49172 = (state_49230[(12)]);
var inst_49171 = (state_49230[(13)]);
var inst_49173 = (state_49230[(14)]);
var inst_49174 = (state_49230[(16)]);
var inst_49179 = cljs.core._nth.call(null,inst_49172,inst_49174);
var inst_49180 = cljs.core.async.muxch_STAR_.call(null,inst_49179);
var inst_49181 = cljs.core.async.close_BANG_.call(null,inst_49180);
var inst_49182 = (inst_49174 + (1));
var tmp49260 = inst_49172;
var tmp49261 = inst_49171;
var tmp49262 = inst_49173;
var inst_49171__$1 = tmp49261;
var inst_49172__$1 = tmp49260;
var inst_49173__$1 = tmp49262;
var inst_49174__$1 = inst_49182;
var state_49230__$1 = (function (){var statearr_49266 = state_49230;
(statearr_49266[(17)] = inst_49181);

(statearr_49266[(12)] = inst_49172__$1);

(statearr_49266[(13)] = inst_49171__$1);

(statearr_49266[(14)] = inst_49173__$1);

(statearr_49266[(16)] = inst_49174__$1);

return statearr_49266;
})();
var statearr_49267_49307 = state_49230__$1;
(statearr_49267_49307[(2)] = null);

(statearr_49267_49307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (18))){
var inst_49200 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49268_49308 = state_49230__$1;
(statearr_49268_49308[(2)] = inst_49200);

(statearr_49268_49308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (8))){
var inst_49173 = (state_49230[(14)]);
var inst_49174 = (state_49230[(16)]);
var inst_49176 = (inst_49174 < inst_49173);
var inst_49177 = inst_49176;
var state_49230__$1 = state_49230;
if(cljs.core.truth_(inst_49177)){
var statearr_49269_49309 = state_49230__$1;
(statearr_49269_49309[(1)] = (10));

} else {
var statearr_49270_49310 = state_49230__$1;
(statearr_49270_49310[(1)] = (11));

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
});})(c__28998__auto___49282,mults,ensure_mult,p))
;
return ((function (switch__28886__auto__,c__28998__auto___49282,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_49274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49274[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_49274[(1)] = (1));

return statearr_49274;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_49230){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49275){if((e49275 instanceof Object)){
var ex__28890__auto__ = e49275;
var statearr_49276_49311 = state_49230;
(statearr_49276_49311[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49312 = state_49230;
state_49230 = G__49312;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_49230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_49230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49282,mults,ensure_mult,p))
})();
var state__29000__auto__ = (function (){var statearr_49277 = f__28999__auto__.call(null);
(statearr_49277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49282);

return statearr_49277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49282,mults,ensure_mult,p))
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
var args49313 = [];
var len__26007__auto___49316 = arguments.length;
var i__26008__auto___49317 = (0);
while(true){
if((i__26008__auto___49317 < len__26007__auto___49316)){
args49313.push((arguments[i__26008__auto___49317]));

var G__49318 = (i__26008__auto___49317 + (1));
i__26008__auto___49317 = G__49318;
continue;
} else {
}
break;
}

var G__49315 = args49313.length;
switch (G__49315) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49313.length)].join('')));

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
var args49320 = [];
var len__26007__auto___49323 = arguments.length;
var i__26008__auto___49324 = (0);
while(true){
if((i__26008__auto___49324 < len__26007__auto___49323)){
args49320.push((arguments[i__26008__auto___49324]));

var G__49325 = (i__26008__auto___49324 + (1));
i__26008__auto___49324 = G__49325;
continue;
} else {
}
break;
}

var G__49322 = args49320.length;
switch (G__49322) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49320.length)].join('')));

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
var args49327 = [];
var len__26007__auto___49398 = arguments.length;
var i__26008__auto___49399 = (0);
while(true){
if((i__26008__auto___49399 < len__26007__auto___49398)){
args49327.push((arguments[i__26008__auto___49399]));

var G__49400 = (i__26008__auto___49399 + (1));
i__26008__auto___49399 = G__49400;
continue;
} else {
}
break;
}

var G__49329 = args49327.length;
switch (G__49329) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49327.length)].join('')));

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
var c__28998__auto___49402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49368){
var state_val_49369 = (state_49368[(1)]);
if((state_val_49369 === (7))){
var state_49368__$1 = state_49368;
var statearr_49370_49403 = state_49368__$1;
(statearr_49370_49403[(2)] = null);

(statearr_49370_49403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (1))){
var state_49368__$1 = state_49368;
var statearr_49371_49404 = state_49368__$1;
(statearr_49371_49404[(2)] = null);

(statearr_49371_49404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (4))){
var inst_49332 = (state_49368[(7)]);
var inst_49334 = (inst_49332 < cnt);
var state_49368__$1 = state_49368;
if(cljs.core.truth_(inst_49334)){
var statearr_49372_49405 = state_49368__$1;
(statearr_49372_49405[(1)] = (6));

} else {
var statearr_49373_49406 = state_49368__$1;
(statearr_49373_49406[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (15))){
var inst_49364 = (state_49368[(2)]);
var state_49368__$1 = state_49368;
var statearr_49374_49407 = state_49368__$1;
(statearr_49374_49407[(2)] = inst_49364);

(statearr_49374_49407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (13))){
var inst_49357 = cljs.core.async.close_BANG_.call(null,out);
var state_49368__$1 = state_49368;
var statearr_49375_49408 = state_49368__$1;
(statearr_49375_49408[(2)] = inst_49357);

(statearr_49375_49408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (6))){
var state_49368__$1 = state_49368;
var statearr_49376_49409 = state_49368__$1;
(statearr_49376_49409[(2)] = null);

(statearr_49376_49409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (3))){
var inst_49366 = (state_49368[(2)]);
var state_49368__$1 = state_49368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49368__$1,inst_49366);
} else {
if((state_val_49369 === (12))){
var inst_49354 = (state_49368[(8)]);
var inst_49354__$1 = (state_49368[(2)]);
var inst_49355 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49354__$1);
var state_49368__$1 = (function (){var statearr_49377 = state_49368;
(statearr_49377[(8)] = inst_49354__$1);

return statearr_49377;
})();
if(cljs.core.truth_(inst_49355)){
var statearr_49378_49410 = state_49368__$1;
(statearr_49378_49410[(1)] = (13));

} else {
var statearr_49379_49411 = state_49368__$1;
(statearr_49379_49411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (2))){
var inst_49331 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49332 = (0);
var state_49368__$1 = (function (){var statearr_49380 = state_49368;
(statearr_49380[(9)] = inst_49331);

(statearr_49380[(7)] = inst_49332);

return statearr_49380;
})();
var statearr_49381_49412 = state_49368__$1;
(statearr_49381_49412[(2)] = null);

(statearr_49381_49412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (11))){
var inst_49332 = (state_49368[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49368,(10),Object,null,(9));
var inst_49341 = chs__$1.call(null,inst_49332);
var inst_49342 = done.call(null,inst_49332);
var inst_49343 = cljs.core.async.take_BANG_.call(null,inst_49341,inst_49342);
var state_49368__$1 = state_49368;
var statearr_49382_49413 = state_49368__$1;
(statearr_49382_49413[(2)] = inst_49343);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49368__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (9))){
var inst_49332 = (state_49368[(7)]);
var inst_49345 = (state_49368[(2)]);
var inst_49346 = (inst_49332 + (1));
var inst_49332__$1 = inst_49346;
var state_49368__$1 = (function (){var statearr_49383 = state_49368;
(statearr_49383[(10)] = inst_49345);

(statearr_49383[(7)] = inst_49332__$1);

return statearr_49383;
})();
var statearr_49384_49414 = state_49368__$1;
(statearr_49384_49414[(2)] = null);

(statearr_49384_49414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (5))){
var inst_49352 = (state_49368[(2)]);
var state_49368__$1 = (function (){var statearr_49385 = state_49368;
(statearr_49385[(11)] = inst_49352);

return statearr_49385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49368__$1,(12),dchan);
} else {
if((state_val_49369 === (14))){
var inst_49354 = (state_49368[(8)]);
var inst_49359 = cljs.core.apply.call(null,f,inst_49354);
var state_49368__$1 = state_49368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49368__$1,(16),out,inst_49359);
} else {
if((state_val_49369 === (16))){
var inst_49361 = (state_49368[(2)]);
var state_49368__$1 = (function (){var statearr_49386 = state_49368;
(statearr_49386[(12)] = inst_49361);

return statearr_49386;
})();
var statearr_49387_49415 = state_49368__$1;
(statearr_49387_49415[(2)] = null);

(statearr_49387_49415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (10))){
var inst_49336 = (state_49368[(2)]);
var inst_49337 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49368__$1 = (function (){var statearr_49388 = state_49368;
(statearr_49388[(13)] = inst_49336);

return statearr_49388;
})();
var statearr_49389_49416 = state_49368__$1;
(statearr_49389_49416[(2)] = inst_49337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49368__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49369 === (8))){
var inst_49350 = (state_49368[(2)]);
var state_49368__$1 = state_49368;
var statearr_49390_49417 = state_49368__$1;
(statearr_49390_49417[(2)] = inst_49350);

(statearr_49390_49417[(1)] = (5));


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
});})(c__28998__auto___49402,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28886__auto__,c__28998__auto___49402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_49394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49394[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_49394[(1)] = (1));

return statearr_49394;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_49368){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49395){if((e49395 instanceof Object)){
var ex__28890__auto__ = e49395;
var statearr_49396_49418 = state_49368;
(statearr_49396_49418[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49419 = state_49368;
state_49368 = G__49419;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_49368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_49368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49402,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29000__auto__ = (function (){var statearr_49397 = f__28999__auto__.call(null);
(statearr_49397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49402);

return statearr_49397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49402,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args49421 = [];
var len__26007__auto___49479 = arguments.length;
var i__26008__auto___49480 = (0);
while(true){
if((i__26008__auto___49480 < len__26007__auto___49479)){
args49421.push((arguments[i__26008__auto___49480]));

var G__49481 = (i__26008__auto___49480 + (1));
i__26008__auto___49480 = G__49481;
continue;
} else {
}
break;
}

var G__49423 = args49421.length;
switch (G__49423) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49421.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___49483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49483,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49483,out){
return (function (state_49455){
var state_val_49456 = (state_49455[(1)]);
if((state_val_49456 === (7))){
var inst_49434 = (state_49455[(7)]);
var inst_49435 = (state_49455[(8)]);
var inst_49434__$1 = (state_49455[(2)]);
var inst_49435__$1 = cljs.core.nth.call(null,inst_49434__$1,(0),null);
var inst_49436 = cljs.core.nth.call(null,inst_49434__$1,(1),null);
var inst_49437 = (inst_49435__$1 == null);
var state_49455__$1 = (function (){var statearr_49457 = state_49455;
(statearr_49457[(9)] = inst_49436);

(statearr_49457[(7)] = inst_49434__$1);

(statearr_49457[(8)] = inst_49435__$1);

return statearr_49457;
})();
if(cljs.core.truth_(inst_49437)){
var statearr_49458_49484 = state_49455__$1;
(statearr_49458_49484[(1)] = (8));

} else {
var statearr_49459_49485 = state_49455__$1;
(statearr_49459_49485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (1))){
var inst_49424 = cljs.core.vec.call(null,chs);
var inst_49425 = inst_49424;
var state_49455__$1 = (function (){var statearr_49460 = state_49455;
(statearr_49460[(10)] = inst_49425);

return statearr_49460;
})();
var statearr_49461_49486 = state_49455__$1;
(statearr_49461_49486[(2)] = null);

(statearr_49461_49486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (4))){
var inst_49425 = (state_49455[(10)]);
var state_49455__$1 = state_49455;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49455__$1,(7),inst_49425);
} else {
if((state_val_49456 === (6))){
var inst_49451 = (state_49455[(2)]);
var state_49455__$1 = state_49455;
var statearr_49462_49487 = state_49455__$1;
(statearr_49462_49487[(2)] = inst_49451);

(statearr_49462_49487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (3))){
var inst_49453 = (state_49455[(2)]);
var state_49455__$1 = state_49455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49455__$1,inst_49453);
} else {
if((state_val_49456 === (2))){
var inst_49425 = (state_49455[(10)]);
var inst_49427 = cljs.core.count.call(null,inst_49425);
var inst_49428 = (inst_49427 > (0));
var state_49455__$1 = state_49455;
if(cljs.core.truth_(inst_49428)){
var statearr_49464_49488 = state_49455__$1;
(statearr_49464_49488[(1)] = (4));

} else {
var statearr_49465_49489 = state_49455__$1;
(statearr_49465_49489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (11))){
var inst_49425 = (state_49455[(10)]);
var inst_49444 = (state_49455[(2)]);
var tmp49463 = inst_49425;
var inst_49425__$1 = tmp49463;
var state_49455__$1 = (function (){var statearr_49466 = state_49455;
(statearr_49466[(11)] = inst_49444);

(statearr_49466[(10)] = inst_49425__$1);

return statearr_49466;
})();
var statearr_49467_49490 = state_49455__$1;
(statearr_49467_49490[(2)] = null);

(statearr_49467_49490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (9))){
var inst_49435 = (state_49455[(8)]);
var state_49455__$1 = state_49455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49455__$1,(11),out,inst_49435);
} else {
if((state_val_49456 === (5))){
var inst_49449 = cljs.core.async.close_BANG_.call(null,out);
var state_49455__$1 = state_49455;
var statearr_49468_49491 = state_49455__$1;
(statearr_49468_49491[(2)] = inst_49449);

(statearr_49468_49491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (10))){
var inst_49447 = (state_49455[(2)]);
var state_49455__$1 = state_49455;
var statearr_49469_49492 = state_49455__$1;
(statearr_49469_49492[(2)] = inst_49447);

(statearr_49469_49492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49456 === (8))){
var inst_49436 = (state_49455[(9)]);
var inst_49425 = (state_49455[(10)]);
var inst_49434 = (state_49455[(7)]);
var inst_49435 = (state_49455[(8)]);
var inst_49439 = (function (){var cs = inst_49425;
var vec__49430 = inst_49434;
var v = inst_49435;
var c = inst_49436;
return ((function (cs,vec__49430,v,c,inst_49436,inst_49425,inst_49434,inst_49435,state_val_49456,c__28998__auto___49483,out){
return (function (p1__49420_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49420_SHARP_);
});
;})(cs,vec__49430,v,c,inst_49436,inst_49425,inst_49434,inst_49435,state_val_49456,c__28998__auto___49483,out))
})();
var inst_49440 = cljs.core.filterv.call(null,inst_49439,inst_49425);
var inst_49425__$1 = inst_49440;
var state_49455__$1 = (function (){var statearr_49470 = state_49455;
(statearr_49470[(10)] = inst_49425__$1);

return statearr_49470;
})();
var statearr_49471_49493 = state_49455__$1;
(statearr_49471_49493[(2)] = null);

(statearr_49471_49493[(1)] = (2));


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
});})(c__28998__auto___49483,out))
;
return ((function (switch__28886__auto__,c__28998__auto___49483,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_49475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49475[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_49475[(1)] = (1));

return statearr_49475;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_49455){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49476){if((e49476 instanceof Object)){
var ex__28890__auto__ = e49476;
var statearr_49477_49494 = state_49455;
(statearr_49477_49494[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49495 = state_49455;
state_49455 = G__49495;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_49455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_49455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49483,out))
})();
var state__29000__auto__ = (function (){var statearr_49478 = f__28999__auto__.call(null);
(statearr_49478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49483);

return statearr_49478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49483,out))
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
var args49496 = [];
var len__26007__auto___49545 = arguments.length;
var i__26008__auto___49546 = (0);
while(true){
if((i__26008__auto___49546 < len__26007__auto___49545)){
args49496.push((arguments[i__26008__auto___49546]));

var G__49547 = (i__26008__auto___49546 + (1));
i__26008__auto___49546 = G__49547;
continue;
} else {
}
break;
}

var G__49498 = args49496.length;
switch (G__49498) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49496.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___49549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49549,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49549,out){
return (function (state_49522){
var state_val_49523 = (state_49522[(1)]);
if((state_val_49523 === (7))){
var inst_49504 = (state_49522[(7)]);
var inst_49504__$1 = (state_49522[(2)]);
var inst_49505 = (inst_49504__$1 == null);
var inst_49506 = cljs.core.not.call(null,inst_49505);
var state_49522__$1 = (function (){var statearr_49524 = state_49522;
(statearr_49524[(7)] = inst_49504__$1);

return statearr_49524;
})();
if(inst_49506){
var statearr_49525_49550 = state_49522__$1;
(statearr_49525_49550[(1)] = (8));

} else {
var statearr_49526_49551 = state_49522__$1;
(statearr_49526_49551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (1))){
var inst_49499 = (0);
var state_49522__$1 = (function (){var statearr_49527 = state_49522;
(statearr_49527[(8)] = inst_49499);

return statearr_49527;
})();
var statearr_49528_49552 = state_49522__$1;
(statearr_49528_49552[(2)] = null);

(statearr_49528_49552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (4))){
var state_49522__$1 = state_49522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49522__$1,(7),ch);
} else {
if((state_val_49523 === (6))){
var inst_49517 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49529_49553 = state_49522__$1;
(statearr_49529_49553[(2)] = inst_49517);

(statearr_49529_49553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (3))){
var inst_49519 = (state_49522[(2)]);
var inst_49520 = cljs.core.async.close_BANG_.call(null,out);
var state_49522__$1 = (function (){var statearr_49530 = state_49522;
(statearr_49530[(9)] = inst_49519);

return statearr_49530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49522__$1,inst_49520);
} else {
if((state_val_49523 === (2))){
var inst_49499 = (state_49522[(8)]);
var inst_49501 = (inst_49499 < n);
var state_49522__$1 = state_49522;
if(cljs.core.truth_(inst_49501)){
var statearr_49531_49554 = state_49522__$1;
(statearr_49531_49554[(1)] = (4));

} else {
var statearr_49532_49555 = state_49522__$1;
(statearr_49532_49555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (11))){
var inst_49499 = (state_49522[(8)]);
var inst_49509 = (state_49522[(2)]);
var inst_49510 = (inst_49499 + (1));
var inst_49499__$1 = inst_49510;
var state_49522__$1 = (function (){var statearr_49533 = state_49522;
(statearr_49533[(10)] = inst_49509);

(statearr_49533[(8)] = inst_49499__$1);

return statearr_49533;
})();
var statearr_49534_49556 = state_49522__$1;
(statearr_49534_49556[(2)] = null);

(statearr_49534_49556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (9))){
var state_49522__$1 = state_49522;
var statearr_49535_49557 = state_49522__$1;
(statearr_49535_49557[(2)] = null);

(statearr_49535_49557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (5))){
var state_49522__$1 = state_49522;
var statearr_49536_49558 = state_49522__$1;
(statearr_49536_49558[(2)] = null);

(statearr_49536_49558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (10))){
var inst_49514 = (state_49522[(2)]);
var state_49522__$1 = state_49522;
var statearr_49537_49559 = state_49522__$1;
(statearr_49537_49559[(2)] = inst_49514);

(statearr_49537_49559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49523 === (8))){
var inst_49504 = (state_49522[(7)]);
var state_49522__$1 = state_49522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49522__$1,(11),out,inst_49504);
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
});})(c__28998__auto___49549,out))
;
return ((function (switch__28886__auto__,c__28998__auto___49549,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_49541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49541[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_49541[(1)] = (1));

return statearr_49541;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_49522){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49542){if((e49542 instanceof Object)){
var ex__28890__auto__ = e49542;
var statearr_49543_49560 = state_49522;
(statearr_49543_49560[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49561 = state_49522;
state_49522 = G__49561;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_49522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_49522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49549,out))
})();
var state__29000__auto__ = (function (){var statearr_49544 = f__28999__auto__.call(null);
(statearr_49544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49549);

return statearr_49544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49549,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49569 = (function (f,ch,meta49570){
this.f = f;
this.ch = ch;
this.meta49570 = meta49570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49571,meta49570__$1){
var self__ = this;
var _49571__$1 = this;
return (new cljs.core.async.t_cljs$core$async49569(self__.f,self__.ch,meta49570__$1));
});

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49571){
var self__ = this;
var _49571__$1 = this;
return self__.meta49570;
});

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49572 = (function (f,ch,meta49570,_,fn1,meta49573){
this.f = f;
this.ch = ch;
this.meta49570 = meta49570;
this._ = _;
this.fn1 = fn1;
this.meta49573 = meta49573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49574,meta49573__$1){
var self__ = this;
var _49574__$1 = this;
return (new cljs.core.async.t_cljs$core$async49572(self__.f,self__.ch,self__.meta49570,self__._,self__.fn1,meta49573__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49574){
var self__ = this;
var _49574__$1 = this;
return self__.meta49573;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49562_SHARP_){
return f1.call(null,(((p1__49562_SHARP_ == null))?null:self__.f.call(null,p1__49562_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49572.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49570","meta49570",-726790173,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49569","cljs.core.async/t_cljs$core$async49569",1585548278,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49573","meta49573",-755996108,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49572";

cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async49572");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49572 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49572(f__$1,ch__$1,meta49570__$1,___$2,fn1__$1,meta49573){
return (new cljs.core.async.t_cljs$core$async49572(f__$1,ch__$1,meta49570__$1,___$2,fn1__$1,meta49573));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49572(self__.f,self__.ch,self__.meta49570,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24887__auto__ = ret;
if(cljs.core.truth_(and__24887__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24887__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49570","meta49570",-726790173,null)], null);
});

cljs.core.async.t_cljs$core$async49569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49569";

cljs.core.async.t_cljs$core$async49569.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async49569");
});

cljs.core.async.__GT_t_cljs$core$async49569 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49569(f__$1,ch__$1,meta49570){
return (new cljs.core.async.t_cljs$core$async49569(f__$1,ch__$1,meta49570));
});

}

return (new cljs.core.async.t_cljs$core$async49569(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49578 = (function (f,ch,meta49579){
this.f = f;
this.ch = ch;
this.meta49579 = meta49579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49580,meta49579__$1){
var self__ = this;
var _49580__$1 = this;
return (new cljs.core.async.t_cljs$core$async49578(self__.f,self__.ch,meta49579__$1));
});

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49580){
var self__ = this;
var _49580__$1 = this;
return self__.meta49579;
});

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49579","meta49579",-143216620,null)], null);
});

cljs.core.async.t_cljs$core$async49578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49578";

cljs.core.async.t_cljs$core$async49578.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async49578");
});

cljs.core.async.__GT_t_cljs$core$async49578 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49578(f__$1,ch__$1,meta49579){
return (new cljs.core.async.t_cljs$core$async49578(f__$1,ch__$1,meta49579));
});

}

return (new cljs.core.async.t_cljs$core$async49578(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49584 = (function (p,ch,meta49585){
this.p = p;
this.ch = ch;
this.meta49585 = meta49585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49586,meta49585__$1){
var self__ = this;
var _49586__$1 = this;
return (new cljs.core.async.t_cljs$core$async49584(self__.p,self__.ch,meta49585__$1));
});

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49586){
var self__ = this;
var _49586__$1 = this;
return self__.meta49585;
});

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49585","meta49585",-1008638570,null)], null);
});

cljs.core.async.t_cljs$core$async49584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49584";

cljs.core.async.t_cljs$core$async49584.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async49584");
});

cljs.core.async.__GT_t_cljs$core$async49584 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49584(p__$1,ch__$1,meta49585){
return (new cljs.core.async.t_cljs$core$async49584(p__$1,ch__$1,meta49585));
});

}

return (new cljs.core.async.t_cljs$core$async49584(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args49587 = [];
var len__26007__auto___49631 = arguments.length;
var i__26008__auto___49632 = (0);
while(true){
if((i__26008__auto___49632 < len__26007__auto___49631)){
args49587.push((arguments[i__26008__auto___49632]));

var G__49633 = (i__26008__auto___49632 + (1));
i__26008__auto___49632 = G__49633;
continue;
} else {
}
break;
}

var G__49589 = args49587.length;
switch (G__49589) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49587.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___49635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49635,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49635,out){
return (function (state_49610){
var state_val_49611 = (state_49610[(1)]);
if((state_val_49611 === (7))){
var inst_49606 = (state_49610[(2)]);
var state_49610__$1 = state_49610;
var statearr_49612_49636 = state_49610__$1;
(statearr_49612_49636[(2)] = inst_49606);

(statearr_49612_49636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (1))){
var state_49610__$1 = state_49610;
var statearr_49613_49637 = state_49610__$1;
(statearr_49613_49637[(2)] = null);

(statearr_49613_49637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (4))){
var inst_49592 = (state_49610[(7)]);
var inst_49592__$1 = (state_49610[(2)]);
var inst_49593 = (inst_49592__$1 == null);
var state_49610__$1 = (function (){var statearr_49614 = state_49610;
(statearr_49614[(7)] = inst_49592__$1);

return statearr_49614;
})();
if(cljs.core.truth_(inst_49593)){
var statearr_49615_49638 = state_49610__$1;
(statearr_49615_49638[(1)] = (5));

} else {
var statearr_49616_49639 = state_49610__$1;
(statearr_49616_49639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (6))){
var inst_49592 = (state_49610[(7)]);
var inst_49597 = p.call(null,inst_49592);
var state_49610__$1 = state_49610;
if(cljs.core.truth_(inst_49597)){
var statearr_49617_49640 = state_49610__$1;
(statearr_49617_49640[(1)] = (8));

} else {
var statearr_49618_49641 = state_49610__$1;
(statearr_49618_49641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (3))){
var inst_49608 = (state_49610[(2)]);
var state_49610__$1 = state_49610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49610__$1,inst_49608);
} else {
if((state_val_49611 === (2))){
var state_49610__$1 = state_49610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49610__$1,(4),ch);
} else {
if((state_val_49611 === (11))){
var inst_49600 = (state_49610[(2)]);
var state_49610__$1 = state_49610;
var statearr_49619_49642 = state_49610__$1;
(statearr_49619_49642[(2)] = inst_49600);

(statearr_49619_49642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (9))){
var state_49610__$1 = state_49610;
var statearr_49620_49643 = state_49610__$1;
(statearr_49620_49643[(2)] = null);

(statearr_49620_49643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (5))){
var inst_49595 = cljs.core.async.close_BANG_.call(null,out);
var state_49610__$1 = state_49610;
var statearr_49621_49644 = state_49610__$1;
(statearr_49621_49644[(2)] = inst_49595);

(statearr_49621_49644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (10))){
var inst_49603 = (state_49610[(2)]);
var state_49610__$1 = (function (){var statearr_49622 = state_49610;
(statearr_49622[(8)] = inst_49603);

return statearr_49622;
})();
var statearr_49623_49645 = state_49610__$1;
(statearr_49623_49645[(2)] = null);

(statearr_49623_49645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49611 === (8))){
var inst_49592 = (state_49610[(7)]);
var state_49610__$1 = state_49610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49610__$1,(11),out,inst_49592);
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
});})(c__28998__auto___49635,out))
;
return ((function (switch__28886__auto__,c__28998__auto___49635,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_49627 = [null,null,null,null,null,null,null,null,null];
(statearr_49627[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_49627[(1)] = (1));

return statearr_49627;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_49610){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49628){if((e49628 instanceof Object)){
var ex__28890__auto__ = e49628;
var statearr_49629_49646 = state_49610;
(statearr_49629_49646[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49647 = state_49610;
state_49610 = G__49647;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_49610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_49610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49635,out))
})();
var state__29000__auto__ = (function (){var statearr_49630 = f__28999__auto__.call(null);
(statearr_49630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49635);

return statearr_49630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49635,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49648 = [];
var len__26007__auto___49651 = arguments.length;
var i__26008__auto___49652 = (0);
while(true){
if((i__26008__auto___49652 < len__26007__auto___49651)){
args49648.push((arguments[i__26008__auto___49652]));

var G__49653 = (i__26008__auto___49652 + (1));
i__26008__auto___49652 = G__49653;
continue;
} else {
}
break;
}

var G__49650 = args49648.length;
switch (G__49650) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49648.length)].join('')));

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
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__){
return (function (state_49820){
var state_val_49821 = (state_49820[(1)]);
if((state_val_49821 === (7))){
var inst_49816 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49822_49863 = state_49820__$1;
(statearr_49822_49863[(2)] = inst_49816);

(statearr_49822_49863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (20))){
var inst_49786 = (state_49820[(7)]);
var inst_49797 = (state_49820[(2)]);
var inst_49798 = cljs.core.next.call(null,inst_49786);
var inst_49772 = inst_49798;
var inst_49773 = null;
var inst_49774 = (0);
var inst_49775 = (0);
var state_49820__$1 = (function (){var statearr_49823 = state_49820;
(statearr_49823[(8)] = inst_49775);

(statearr_49823[(9)] = inst_49797);

(statearr_49823[(10)] = inst_49772);

(statearr_49823[(11)] = inst_49773);

(statearr_49823[(12)] = inst_49774);

return statearr_49823;
})();
var statearr_49824_49864 = state_49820__$1;
(statearr_49824_49864[(2)] = null);

(statearr_49824_49864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (1))){
var state_49820__$1 = state_49820;
var statearr_49825_49865 = state_49820__$1;
(statearr_49825_49865[(2)] = null);

(statearr_49825_49865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (4))){
var inst_49761 = (state_49820[(13)]);
var inst_49761__$1 = (state_49820[(2)]);
var inst_49762 = (inst_49761__$1 == null);
var state_49820__$1 = (function (){var statearr_49826 = state_49820;
(statearr_49826[(13)] = inst_49761__$1);

return statearr_49826;
})();
if(cljs.core.truth_(inst_49762)){
var statearr_49827_49866 = state_49820__$1;
(statearr_49827_49866[(1)] = (5));

} else {
var statearr_49828_49867 = state_49820__$1;
(statearr_49828_49867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (15))){
var state_49820__$1 = state_49820;
var statearr_49832_49868 = state_49820__$1;
(statearr_49832_49868[(2)] = null);

(statearr_49832_49868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (21))){
var state_49820__$1 = state_49820;
var statearr_49833_49869 = state_49820__$1;
(statearr_49833_49869[(2)] = null);

(statearr_49833_49869[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (13))){
var inst_49775 = (state_49820[(8)]);
var inst_49772 = (state_49820[(10)]);
var inst_49773 = (state_49820[(11)]);
var inst_49774 = (state_49820[(12)]);
var inst_49782 = (state_49820[(2)]);
var inst_49783 = (inst_49775 + (1));
var tmp49829 = inst_49772;
var tmp49830 = inst_49773;
var tmp49831 = inst_49774;
var inst_49772__$1 = tmp49829;
var inst_49773__$1 = tmp49830;
var inst_49774__$1 = tmp49831;
var inst_49775__$1 = inst_49783;
var state_49820__$1 = (function (){var statearr_49834 = state_49820;
(statearr_49834[(14)] = inst_49782);

(statearr_49834[(8)] = inst_49775__$1);

(statearr_49834[(10)] = inst_49772__$1);

(statearr_49834[(11)] = inst_49773__$1);

(statearr_49834[(12)] = inst_49774__$1);

return statearr_49834;
})();
var statearr_49835_49870 = state_49820__$1;
(statearr_49835_49870[(2)] = null);

(statearr_49835_49870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (22))){
var state_49820__$1 = state_49820;
var statearr_49836_49871 = state_49820__$1;
(statearr_49836_49871[(2)] = null);

(statearr_49836_49871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (6))){
var inst_49761 = (state_49820[(13)]);
var inst_49770 = f.call(null,inst_49761);
var inst_49771 = cljs.core.seq.call(null,inst_49770);
var inst_49772 = inst_49771;
var inst_49773 = null;
var inst_49774 = (0);
var inst_49775 = (0);
var state_49820__$1 = (function (){var statearr_49837 = state_49820;
(statearr_49837[(8)] = inst_49775);

(statearr_49837[(10)] = inst_49772);

(statearr_49837[(11)] = inst_49773);

(statearr_49837[(12)] = inst_49774);

return statearr_49837;
})();
var statearr_49838_49872 = state_49820__$1;
(statearr_49838_49872[(2)] = null);

(statearr_49838_49872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (17))){
var inst_49786 = (state_49820[(7)]);
var inst_49790 = cljs.core.chunk_first.call(null,inst_49786);
var inst_49791 = cljs.core.chunk_rest.call(null,inst_49786);
var inst_49792 = cljs.core.count.call(null,inst_49790);
var inst_49772 = inst_49791;
var inst_49773 = inst_49790;
var inst_49774 = inst_49792;
var inst_49775 = (0);
var state_49820__$1 = (function (){var statearr_49839 = state_49820;
(statearr_49839[(8)] = inst_49775);

(statearr_49839[(10)] = inst_49772);

(statearr_49839[(11)] = inst_49773);

(statearr_49839[(12)] = inst_49774);

return statearr_49839;
})();
var statearr_49840_49873 = state_49820__$1;
(statearr_49840_49873[(2)] = null);

(statearr_49840_49873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (3))){
var inst_49818 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49820__$1,inst_49818);
} else {
if((state_val_49821 === (12))){
var inst_49806 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49841_49874 = state_49820__$1;
(statearr_49841_49874[(2)] = inst_49806);

(statearr_49841_49874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (2))){
var state_49820__$1 = state_49820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49820__$1,(4),in$);
} else {
if((state_val_49821 === (23))){
var inst_49814 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49842_49875 = state_49820__$1;
(statearr_49842_49875[(2)] = inst_49814);

(statearr_49842_49875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (19))){
var inst_49801 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49843_49876 = state_49820__$1;
(statearr_49843_49876[(2)] = inst_49801);

(statearr_49843_49876[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (11))){
var inst_49772 = (state_49820[(10)]);
var inst_49786 = (state_49820[(7)]);
var inst_49786__$1 = cljs.core.seq.call(null,inst_49772);
var state_49820__$1 = (function (){var statearr_49844 = state_49820;
(statearr_49844[(7)] = inst_49786__$1);

return statearr_49844;
})();
if(inst_49786__$1){
var statearr_49845_49877 = state_49820__$1;
(statearr_49845_49877[(1)] = (14));

} else {
var statearr_49846_49878 = state_49820__$1;
(statearr_49846_49878[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (9))){
var inst_49808 = (state_49820[(2)]);
var inst_49809 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49820__$1 = (function (){var statearr_49847 = state_49820;
(statearr_49847[(15)] = inst_49808);

return statearr_49847;
})();
if(cljs.core.truth_(inst_49809)){
var statearr_49848_49879 = state_49820__$1;
(statearr_49848_49879[(1)] = (21));

} else {
var statearr_49849_49880 = state_49820__$1;
(statearr_49849_49880[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (5))){
var inst_49764 = cljs.core.async.close_BANG_.call(null,out);
var state_49820__$1 = state_49820;
var statearr_49850_49881 = state_49820__$1;
(statearr_49850_49881[(2)] = inst_49764);

(statearr_49850_49881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (14))){
var inst_49786 = (state_49820[(7)]);
var inst_49788 = cljs.core.chunked_seq_QMARK_.call(null,inst_49786);
var state_49820__$1 = state_49820;
if(inst_49788){
var statearr_49851_49882 = state_49820__$1;
(statearr_49851_49882[(1)] = (17));

} else {
var statearr_49852_49883 = state_49820__$1;
(statearr_49852_49883[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (16))){
var inst_49804 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49853_49884 = state_49820__$1;
(statearr_49853_49884[(2)] = inst_49804);

(statearr_49853_49884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (10))){
var inst_49775 = (state_49820[(8)]);
var inst_49773 = (state_49820[(11)]);
var inst_49780 = cljs.core._nth.call(null,inst_49773,inst_49775);
var state_49820__$1 = state_49820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49820__$1,(13),out,inst_49780);
} else {
if((state_val_49821 === (18))){
var inst_49786 = (state_49820[(7)]);
var inst_49795 = cljs.core.first.call(null,inst_49786);
var state_49820__$1 = state_49820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49820__$1,(20),out,inst_49795);
} else {
if((state_val_49821 === (8))){
var inst_49775 = (state_49820[(8)]);
var inst_49774 = (state_49820[(12)]);
var inst_49777 = (inst_49775 < inst_49774);
var inst_49778 = inst_49777;
var state_49820__$1 = state_49820;
if(cljs.core.truth_(inst_49778)){
var statearr_49854_49885 = state_49820__$1;
(statearr_49854_49885[(1)] = (10));

} else {
var statearr_49855_49886 = state_49820__$1;
(statearr_49855_49886[(1)] = (11));

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
});})(c__28998__auto__))
;
return ((function (switch__28886__auto__,c__28998__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_49859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49859[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__);

(statearr_49859[(1)] = (1));

return statearr_49859;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1 = (function (state_49820){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49860){if((e49860 instanceof Object)){
var ex__28890__auto__ = e49860;
var statearr_49861_49887 = state_49820;
(statearr_49861_49887[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49888 = state_49820;
state_49820 = G__49888;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__ = function(state_49820){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1.call(this,state_49820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_49862 = f__28999__auto__.call(null);
(statearr_49862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_49862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__))
);

return c__28998__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args49889 = [];
var len__26007__auto___49892 = arguments.length;
var i__26008__auto___49893 = (0);
while(true){
if((i__26008__auto___49893 < len__26007__auto___49892)){
args49889.push((arguments[i__26008__auto___49893]));

var G__49894 = (i__26008__auto___49893 + (1));
i__26008__auto___49893 = G__49894;
continue;
} else {
}
break;
}

var G__49891 = args49889.length;
switch (G__49891) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49889.length)].join('')));

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
var args49896 = [];
var len__26007__auto___49899 = arguments.length;
var i__26008__auto___49900 = (0);
while(true){
if((i__26008__auto___49900 < len__26007__auto___49899)){
args49896.push((arguments[i__26008__auto___49900]));

var G__49901 = (i__26008__auto___49900 + (1));
i__26008__auto___49900 = G__49901;
continue;
} else {
}
break;
}

var G__49898 = args49896.length;
switch (G__49898) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49896.length)].join('')));

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
var args49903 = [];
var len__26007__auto___49954 = arguments.length;
var i__26008__auto___49955 = (0);
while(true){
if((i__26008__auto___49955 < len__26007__auto___49954)){
args49903.push((arguments[i__26008__auto___49955]));

var G__49956 = (i__26008__auto___49955 + (1));
i__26008__auto___49955 = G__49956;
continue;
} else {
}
break;
}

var G__49905 = args49903.length;
switch (G__49905) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49903.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___49958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___49958,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___49958,out){
return (function (state_49929){
var state_val_49930 = (state_49929[(1)]);
if((state_val_49930 === (7))){
var inst_49924 = (state_49929[(2)]);
var state_49929__$1 = state_49929;
var statearr_49931_49959 = state_49929__$1;
(statearr_49931_49959[(2)] = inst_49924);

(statearr_49931_49959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (1))){
var inst_49906 = null;
var state_49929__$1 = (function (){var statearr_49932 = state_49929;
(statearr_49932[(7)] = inst_49906);

return statearr_49932;
})();
var statearr_49933_49960 = state_49929__$1;
(statearr_49933_49960[(2)] = null);

(statearr_49933_49960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (4))){
var inst_49909 = (state_49929[(8)]);
var inst_49909__$1 = (state_49929[(2)]);
var inst_49910 = (inst_49909__$1 == null);
var inst_49911 = cljs.core.not.call(null,inst_49910);
var state_49929__$1 = (function (){var statearr_49934 = state_49929;
(statearr_49934[(8)] = inst_49909__$1);

return statearr_49934;
})();
if(inst_49911){
var statearr_49935_49961 = state_49929__$1;
(statearr_49935_49961[(1)] = (5));

} else {
var statearr_49936_49962 = state_49929__$1;
(statearr_49936_49962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (6))){
var state_49929__$1 = state_49929;
var statearr_49937_49963 = state_49929__$1;
(statearr_49937_49963[(2)] = null);

(statearr_49937_49963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (3))){
var inst_49926 = (state_49929[(2)]);
var inst_49927 = cljs.core.async.close_BANG_.call(null,out);
var state_49929__$1 = (function (){var statearr_49938 = state_49929;
(statearr_49938[(9)] = inst_49926);

return statearr_49938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49929__$1,inst_49927);
} else {
if((state_val_49930 === (2))){
var state_49929__$1 = state_49929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49929__$1,(4),ch);
} else {
if((state_val_49930 === (11))){
var inst_49909 = (state_49929[(8)]);
var inst_49918 = (state_49929[(2)]);
var inst_49906 = inst_49909;
var state_49929__$1 = (function (){var statearr_49939 = state_49929;
(statearr_49939[(10)] = inst_49918);

(statearr_49939[(7)] = inst_49906);

return statearr_49939;
})();
var statearr_49940_49964 = state_49929__$1;
(statearr_49940_49964[(2)] = null);

(statearr_49940_49964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (9))){
var inst_49909 = (state_49929[(8)]);
var state_49929__$1 = state_49929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49929__$1,(11),out,inst_49909);
} else {
if((state_val_49930 === (5))){
var inst_49906 = (state_49929[(7)]);
var inst_49909 = (state_49929[(8)]);
var inst_49913 = cljs.core._EQ_.call(null,inst_49909,inst_49906);
var state_49929__$1 = state_49929;
if(inst_49913){
var statearr_49942_49965 = state_49929__$1;
(statearr_49942_49965[(1)] = (8));

} else {
var statearr_49943_49966 = state_49929__$1;
(statearr_49943_49966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (10))){
var inst_49921 = (state_49929[(2)]);
var state_49929__$1 = state_49929;
var statearr_49944_49967 = state_49929__$1;
(statearr_49944_49967[(2)] = inst_49921);

(statearr_49944_49967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49930 === (8))){
var inst_49906 = (state_49929[(7)]);
var tmp49941 = inst_49906;
var inst_49906__$1 = tmp49941;
var state_49929__$1 = (function (){var statearr_49945 = state_49929;
(statearr_49945[(7)] = inst_49906__$1);

return statearr_49945;
})();
var statearr_49946_49968 = state_49929__$1;
(statearr_49946_49968[(2)] = null);

(statearr_49946_49968[(1)] = (2));


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
});})(c__28998__auto___49958,out))
;
return ((function (switch__28886__auto__,c__28998__auto___49958,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_49950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49950[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_49950[(1)] = (1));

return statearr_49950;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_49929){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_49929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e49951){if((e49951 instanceof Object)){
var ex__28890__auto__ = e49951;
var statearr_49952_49969 = state_49929;
(statearr_49952_49969[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49970 = state_49929;
state_49929 = G__49970;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_49929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_49929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___49958,out))
})();
var state__29000__auto__ = (function (){var statearr_49953 = f__28999__auto__.call(null);
(statearr_49953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___49958);

return statearr_49953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___49958,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49971 = [];
var len__26007__auto___50041 = arguments.length;
var i__26008__auto___50042 = (0);
while(true){
if((i__26008__auto___50042 < len__26007__auto___50041)){
args49971.push((arguments[i__26008__auto___50042]));

var G__50043 = (i__26008__auto___50042 + (1));
i__26008__auto___50042 = G__50043;
continue;
} else {
}
break;
}

var G__49973 = args49971.length;
switch (G__49973) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49971.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___50045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___50045,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___50045,out){
return (function (state_50011){
var state_val_50012 = (state_50011[(1)]);
if((state_val_50012 === (7))){
var inst_50007 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
var statearr_50013_50046 = state_50011__$1;
(statearr_50013_50046[(2)] = inst_50007);

(statearr_50013_50046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (1))){
var inst_49974 = (new Array(n));
var inst_49975 = inst_49974;
var inst_49976 = (0);
var state_50011__$1 = (function (){var statearr_50014 = state_50011;
(statearr_50014[(7)] = inst_49976);

(statearr_50014[(8)] = inst_49975);

return statearr_50014;
})();
var statearr_50015_50047 = state_50011__$1;
(statearr_50015_50047[(2)] = null);

(statearr_50015_50047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (4))){
var inst_49979 = (state_50011[(9)]);
var inst_49979__$1 = (state_50011[(2)]);
var inst_49980 = (inst_49979__$1 == null);
var inst_49981 = cljs.core.not.call(null,inst_49980);
var state_50011__$1 = (function (){var statearr_50016 = state_50011;
(statearr_50016[(9)] = inst_49979__$1);

return statearr_50016;
})();
if(inst_49981){
var statearr_50017_50048 = state_50011__$1;
(statearr_50017_50048[(1)] = (5));

} else {
var statearr_50018_50049 = state_50011__$1;
(statearr_50018_50049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (15))){
var inst_50001 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
var statearr_50019_50050 = state_50011__$1;
(statearr_50019_50050[(2)] = inst_50001);

(statearr_50019_50050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (13))){
var state_50011__$1 = state_50011;
var statearr_50020_50051 = state_50011__$1;
(statearr_50020_50051[(2)] = null);

(statearr_50020_50051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (6))){
var inst_49976 = (state_50011[(7)]);
var inst_49997 = (inst_49976 > (0));
var state_50011__$1 = state_50011;
if(cljs.core.truth_(inst_49997)){
var statearr_50021_50052 = state_50011__$1;
(statearr_50021_50052[(1)] = (12));

} else {
var statearr_50022_50053 = state_50011__$1;
(statearr_50022_50053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (3))){
var inst_50009 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50011__$1,inst_50009);
} else {
if((state_val_50012 === (12))){
var inst_49975 = (state_50011[(8)]);
var inst_49999 = cljs.core.vec.call(null,inst_49975);
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50011__$1,(15),out,inst_49999);
} else {
if((state_val_50012 === (2))){
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50011__$1,(4),ch);
} else {
if((state_val_50012 === (11))){
var inst_49991 = (state_50011[(2)]);
var inst_49992 = (new Array(n));
var inst_49975 = inst_49992;
var inst_49976 = (0);
var state_50011__$1 = (function (){var statearr_50023 = state_50011;
(statearr_50023[(7)] = inst_49976);

(statearr_50023[(10)] = inst_49991);

(statearr_50023[(8)] = inst_49975);

return statearr_50023;
})();
var statearr_50024_50054 = state_50011__$1;
(statearr_50024_50054[(2)] = null);

(statearr_50024_50054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (9))){
var inst_49975 = (state_50011[(8)]);
var inst_49989 = cljs.core.vec.call(null,inst_49975);
var state_50011__$1 = state_50011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50011__$1,(11),out,inst_49989);
} else {
if((state_val_50012 === (5))){
var inst_49976 = (state_50011[(7)]);
var inst_49984 = (state_50011[(11)]);
var inst_49975 = (state_50011[(8)]);
var inst_49979 = (state_50011[(9)]);
var inst_49983 = (inst_49975[inst_49976] = inst_49979);
var inst_49984__$1 = (inst_49976 + (1));
var inst_49985 = (inst_49984__$1 < n);
var state_50011__$1 = (function (){var statearr_50025 = state_50011;
(statearr_50025[(11)] = inst_49984__$1);

(statearr_50025[(12)] = inst_49983);

return statearr_50025;
})();
if(cljs.core.truth_(inst_49985)){
var statearr_50026_50055 = state_50011__$1;
(statearr_50026_50055[(1)] = (8));

} else {
var statearr_50027_50056 = state_50011__$1;
(statearr_50027_50056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (14))){
var inst_50004 = (state_50011[(2)]);
var inst_50005 = cljs.core.async.close_BANG_.call(null,out);
var state_50011__$1 = (function (){var statearr_50029 = state_50011;
(statearr_50029[(13)] = inst_50004);

return statearr_50029;
})();
var statearr_50030_50057 = state_50011__$1;
(statearr_50030_50057[(2)] = inst_50005);

(statearr_50030_50057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (10))){
var inst_49995 = (state_50011[(2)]);
var state_50011__$1 = state_50011;
var statearr_50031_50058 = state_50011__$1;
(statearr_50031_50058[(2)] = inst_49995);

(statearr_50031_50058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50012 === (8))){
var inst_49984 = (state_50011[(11)]);
var inst_49975 = (state_50011[(8)]);
var tmp50028 = inst_49975;
var inst_49975__$1 = tmp50028;
var inst_49976 = inst_49984;
var state_50011__$1 = (function (){var statearr_50032 = state_50011;
(statearr_50032[(7)] = inst_49976);

(statearr_50032[(8)] = inst_49975__$1);

return statearr_50032;
})();
var statearr_50033_50059 = state_50011__$1;
(statearr_50033_50059[(2)] = null);

(statearr_50033_50059[(1)] = (2));


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
});})(c__28998__auto___50045,out))
;
return ((function (switch__28886__auto__,c__28998__auto___50045,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_50037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50037[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_50037[(1)] = (1));

return statearr_50037;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_50011){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_50011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e50038){if((e50038 instanceof Object)){
var ex__28890__auto__ = e50038;
var statearr_50039_50060 = state_50011;
(statearr_50039_50060[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50061 = state_50011;
state_50011 = G__50061;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_50011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_50011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___50045,out))
})();
var state__29000__auto__ = (function (){var statearr_50040 = f__28999__auto__.call(null);
(statearr_50040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___50045);

return statearr_50040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___50045,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50062 = [];
var len__26007__auto___50136 = arguments.length;
var i__26008__auto___50137 = (0);
while(true){
if((i__26008__auto___50137 < len__26007__auto___50136)){
args50062.push((arguments[i__26008__auto___50137]));

var G__50138 = (i__26008__auto___50137 + (1));
i__26008__auto___50137 = G__50138;
continue;
} else {
}
break;
}

var G__50064 = args50062.length;
switch (G__50064) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50062.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___50140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___50140,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___50140,out){
return (function (state_50106){
var state_val_50107 = (state_50106[(1)]);
if((state_val_50107 === (7))){
var inst_50102 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50108_50141 = state_50106__$1;
(statearr_50108_50141[(2)] = inst_50102);

(statearr_50108_50141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (1))){
var inst_50065 = [];
var inst_50066 = inst_50065;
var inst_50067 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50106__$1 = (function (){var statearr_50109 = state_50106;
(statearr_50109[(7)] = inst_50066);

(statearr_50109[(8)] = inst_50067);

return statearr_50109;
})();
var statearr_50110_50142 = state_50106__$1;
(statearr_50110_50142[(2)] = null);

(statearr_50110_50142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (4))){
var inst_50070 = (state_50106[(9)]);
var inst_50070__$1 = (state_50106[(2)]);
var inst_50071 = (inst_50070__$1 == null);
var inst_50072 = cljs.core.not.call(null,inst_50071);
var state_50106__$1 = (function (){var statearr_50111 = state_50106;
(statearr_50111[(9)] = inst_50070__$1);

return statearr_50111;
})();
if(inst_50072){
var statearr_50112_50143 = state_50106__$1;
(statearr_50112_50143[(1)] = (5));

} else {
var statearr_50113_50144 = state_50106__$1;
(statearr_50113_50144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (15))){
var inst_50096 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50114_50145 = state_50106__$1;
(statearr_50114_50145[(2)] = inst_50096);

(statearr_50114_50145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (13))){
var state_50106__$1 = state_50106;
var statearr_50115_50146 = state_50106__$1;
(statearr_50115_50146[(2)] = null);

(statearr_50115_50146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (6))){
var inst_50066 = (state_50106[(7)]);
var inst_50091 = inst_50066.length;
var inst_50092 = (inst_50091 > (0));
var state_50106__$1 = state_50106;
if(cljs.core.truth_(inst_50092)){
var statearr_50116_50147 = state_50106__$1;
(statearr_50116_50147[(1)] = (12));

} else {
var statearr_50117_50148 = state_50106__$1;
(statearr_50117_50148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (3))){
var inst_50104 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50106__$1,inst_50104);
} else {
if((state_val_50107 === (12))){
var inst_50066 = (state_50106[(7)]);
var inst_50094 = cljs.core.vec.call(null,inst_50066);
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50106__$1,(15),out,inst_50094);
} else {
if((state_val_50107 === (2))){
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50106__$1,(4),ch);
} else {
if((state_val_50107 === (11))){
var inst_50070 = (state_50106[(9)]);
var inst_50074 = (state_50106[(10)]);
var inst_50084 = (state_50106[(2)]);
var inst_50085 = [];
var inst_50086 = inst_50085.push(inst_50070);
var inst_50066 = inst_50085;
var inst_50067 = inst_50074;
var state_50106__$1 = (function (){var statearr_50118 = state_50106;
(statearr_50118[(11)] = inst_50084);

(statearr_50118[(7)] = inst_50066);

(statearr_50118[(8)] = inst_50067);

(statearr_50118[(12)] = inst_50086);

return statearr_50118;
})();
var statearr_50119_50149 = state_50106__$1;
(statearr_50119_50149[(2)] = null);

(statearr_50119_50149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (9))){
var inst_50066 = (state_50106[(7)]);
var inst_50082 = cljs.core.vec.call(null,inst_50066);
var state_50106__$1 = state_50106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50106__$1,(11),out,inst_50082);
} else {
if((state_val_50107 === (5))){
var inst_50070 = (state_50106[(9)]);
var inst_50074 = (state_50106[(10)]);
var inst_50067 = (state_50106[(8)]);
var inst_50074__$1 = f.call(null,inst_50070);
var inst_50075 = cljs.core._EQ_.call(null,inst_50074__$1,inst_50067);
var inst_50076 = cljs.core.keyword_identical_QMARK_.call(null,inst_50067,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50077 = (inst_50075) || (inst_50076);
var state_50106__$1 = (function (){var statearr_50120 = state_50106;
(statearr_50120[(10)] = inst_50074__$1);

return statearr_50120;
})();
if(cljs.core.truth_(inst_50077)){
var statearr_50121_50150 = state_50106__$1;
(statearr_50121_50150[(1)] = (8));

} else {
var statearr_50122_50151 = state_50106__$1;
(statearr_50122_50151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (14))){
var inst_50099 = (state_50106[(2)]);
var inst_50100 = cljs.core.async.close_BANG_.call(null,out);
var state_50106__$1 = (function (){var statearr_50124 = state_50106;
(statearr_50124[(13)] = inst_50099);

return statearr_50124;
})();
var statearr_50125_50152 = state_50106__$1;
(statearr_50125_50152[(2)] = inst_50100);

(statearr_50125_50152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (10))){
var inst_50089 = (state_50106[(2)]);
var state_50106__$1 = state_50106;
var statearr_50126_50153 = state_50106__$1;
(statearr_50126_50153[(2)] = inst_50089);

(statearr_50126_50153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50107 === (8))){
var inst_50070 = (state_50106[(9)]);
var inst_50074 = (state_50106[(10)]);
var inst_50066 = (state_50106[(7)]);
var inst_50079 = inst_50066.push(inst_50070);
var tmp50123 = inst_50066;
var inst_50066__$1 = tmp50123;
var inst_50067 = inst_50074;
var state_50106__$1 = (function (){var statearr_50127 = state_50106;
(statearr_50127[(7)] = inst_50066__$1);

(statearr_50127[(14)] = inst_50079);

(statearr_50127[(8)] = inst_50067);

return statearr_50127;
})();
var statearr_50128_50154 = state_50106__$1;
(statearr_50128_50154[(2)] = null);

(statearr_50128_50154[(1)] = (2));


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
});})(c__28998__auto___50140,out))
;
return ((function (switch__28886__auto__,c__28998__auto___50140,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_50132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50132[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_50132[(1)] = (1));

return statearr_50132;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_50106){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_50106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e50133){if((e50133 instanceof Object)){
var ex__28890__auto__ = e50133;
var statearr_50134_50155 = state_50106;
(statearr_50134_50155[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50156 = state_50106;
state_50106 = G__50156;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_50106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_50106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___50140,out))
})();
var state__29000__auto__ = (function (){var statearr_50135 = f__28999__auto__.call(null);
(statearr_50135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___50140);

return statearr_50135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___50140,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479783417915