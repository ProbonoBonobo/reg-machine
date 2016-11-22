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
var args62273 = [];
var len__7651__auto___62279 = arguments.length;
var i__7652__auto___62280 = (0);
while(true){
if((i__7652__auto___62280 < len__7651__auto___62279)){
args62273.push((arguments[i__7652__auto___62280]));

var G__62281 = (i__7652__auto___62280 + (1));
i__7652__auto___62280 = G__62281;
continue;
} else {
}
break;
}

var G__62275 = args62273.length;
switch (G__62275) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62273.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async62276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62276 = (function (f,blockable,meta62277){
this.f = f;
this.blockable = blockable;
this.meta62277 = meta62277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62278,meta62277__$1){
var self__ = this;
var _62278__$1 = this;
return (new cljs.core.async.t_cljs$core$async62276(self__.f,self__.blockable,meta62277__$1));
});

cljs.core.async.t_cljs$core$async62276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62278){
var self__ = this;
var _62278__$1 = this;
return self__.meta62277;
});

cljs.core.async.t_cljs$core$async62276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async62276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async62276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async62276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62277","meta62277",-1931554033,null)], null);
});

cljs.core.async.t_cljs$core$async62276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62276";

cljs.core.async.t_cljs$core$async62276.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async62276");
});

cljs.core.async.__GT_t_cljs$core$async62276 = (function cljs$core$async$__GT_t_cljs$core$async62276(f__$1,blockable__$1,meta62277){
return (new cljs.core.async.t_cljs$core$async62276(f__$1,blockable__$1,meta62277));
});

}

return (new cljs.core.async.t_cljs$core$async62276(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args62285 = [];
var len__7651__auto___62288 = arguments.length;
var i__7652__auto___62289 = (0);
while(true){
if((i__7652__auto___62289 < len__7651__auto___62288)){
args62285.push((arguments[i__7652__auto___62289]));

var G__62290 = (i__7652__auto___62289 + (1));
i__7652__auto___62289 = G__62290;
continue;
} else {
}
break;
}

var G__62287 = args62285.length;
switch (G__62287) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62285.length)].join('')));

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
var args62292 = [];
var len__7651__auto___62295 = arguments.length;
var i__7652__auto___62296 = (0);
while(true){
if((i__7652__auto___62296 < len__7651__auto___62295)){
args62292.push((arguments[i__7652__auto___62296]));

var G__62297 = (i__7652__auto___62296 + (1));
i__7652__auto___62296 = G__62297;
continue;
} else {
}
break;
}

var G__62294 = args62292.length;
switch (G__62294) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62292.length)].join('')));

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
var args62299 = [];
var len__7651__auto___62302 = arguments.length;
var i__7652__auto___62303 = (0);
while(true){
if((i__7652__auto___62303 < len__7651__auto___62302)){
args62299.push((arguments[i__7652__auto___62303]));

var G__62304 = (i__7652__auto___62303 + (1));
i__7652__auto___62303 = G__62304;
continue;
} else {
}
break;
}

var G__62301 = args62299.length;
switch (G__62301) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62299.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_62306 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_62306);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_62306,ret){
return (function (){
return fn1.call(null,val_62306);
});})(val_62306,ret))
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
var args62307 = [];
var len__7651__auto___62310 = arguments.length;
var i__7652__auto___62311 = (0);
while(true){
if((i__7652__auto___62311 < len__7651__auto___62310)){
args62307.push((arguments[i__7652__auto___62311]));

var G__62312 = (i__7652__auto___62311 + (1));
i__7652__auto___62311 = G__62312;
continue;
} else {
}
break;
}

var G__62309 = args62307.length;
switch (G__62309) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62307.length)].join('')));

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
var n__7461__auto___62314 = n;
var x_62315 = (0);
while(true){
if((x_62315 < n__7461__auto___62314)){
(a[x_62315] = (0));

var G__62316 = (x_62315 + (1));
x_62315 = G__62316;
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

var G__62317 = (i + (1));
i = G__62317;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async62321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62321 = (function (flag,meta62322){
this.flag = flag;
this.meta62322 = meta62322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_62323,meta62322__$1){
var self__ = this;
var _62323__$1 = this;
return (new cljs.core.async.t_cljs$core$async62321(self__.flag,meta62322__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async62321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_62323){
var self__ = this;
var _62323__$1 = this;
return self__.meta62322;
});})(flag))
;

cljs.core.async.t_cljs$core$async62321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async62321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async62321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async62321.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62322","meta62322",-569094844,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async62321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62321";

cljs.core.async.t_cljs$core$async62321.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async62321");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async62321 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62321(flag__$1,meta62322){
return (new cljs.core.async.t_cljs$core$async62321(flag__$1,meta62322));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async62321(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async62327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62327 = (function (flag,cb,meta62328){
this.flag = flag;
this.cb = cb;
this.meta62328 = meta62328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62329,meta62328__$1){
var self__ = this;
var _62329__$1 = this;
return (new cljs.core.async.t_cljs$core$async62327(self__.flag,self__.cb,meta62328__$1));
});

cljs.core.async.t_cljs$core$async62327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62329){
var self__ = this;
var _62329__$1 = this;
return self__.meta62328;
});

cljs.core.async.t_cljs$core$async62327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async62327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async62327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async62327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62328","meta62328",-1613165733,null)], null);
});

cljs.core.async.t_cljs$core$async62327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62327";

cljs.core.async.t_cljs$core$async62327.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async62327");
});

cljs.core.async.__GT_t_cljs$core$async62327 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62327(flag__$1,cb__$1,meta62328){
return (new cljs.core.async.t_cljs$core$async62327(flag__$1,cb__$1,meta62328));
});

}

return (new cljs.core.async.t_cljs$core$async62327(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__62330_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62330_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62331_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62331_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6543__auto__ = wport;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return port;
}
})()], null));
} else {
var G__62332 = (i + (1));
i = G__62332;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6543__auto__ = ret;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6531__auto__;
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
var args__7658__auto__ = [];
var len__7651__auto___62338 = arguments.length;
var i__7652__auto___62339 = (0);
while(true){
if((i__7652__auto___62339 < len__7651__auto___62338)){
args__7658__auto__.push((arguments[i__7652__auto___62339]));

var G__62340 = (i__7652__auto___62339 + (1));
i__7652__auto___62339 = G__62340;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62335){
var map__62336 = p__62335;
var map__62336__$1 = ((((!((map__62336 == null)))?((((map__62336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62336):map__62336);
var opts = map__62336__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62333){
var G__62334 = cljs.core.first.call(null,seq62333);
var seq62333__$1 = cljs.core.next.call(null,seq62333);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62334,seq62333__$1);
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
var args62341 = [];
var len__7651__auto___62391 = arguments.length;
var i__7652__auto___62392 = (0);
while(true){
if((i__7652__auto___62392 < len__7651__auto___62391)){
args62341.push((arguments[i__7652__auto___62392]));

var G__62393 = (i__7652__auto___62392 + (1));
i__7652__auto___62392 = G__62393;
continue;
} else {
}
break;
}

var G__62343 = args62341.length;
switch (G__62343) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62341.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10513__auto___62395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___62395){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___62395){
return (function (state_62367){
var state_val_62368 = (state_62367[(1)]);
if((state_val_62368 === (7))){
var inst_62363 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62369_62396 = state_62367__$1;
(statearr_62369_62396[(2)] = inst_62363);

(statearr_62369_62396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (1))){
var state_62367__$1 = state_62367;
var statearr_62370_62397 = state_62367__$1;
(statearr_62370_62397[(2)] = null);

(statearr_62370_62397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (4))){
var inst_62346 = (state_62367[(7)]);
var inst_62346__$1 = (state_62367[(2)]);
var inst_62347 = (inst_62346__$1 == null);
var state_62367__$1 = (function (){var statearr_62371 = state_62367;
(statearr_62371[(7)] = inst_62346__$1);

return statearr_62371;
})();
if(cljs.core.truth_(inst_62347)){
var statearr_62372_62398 = state_62367__$1;
(statearr_62372_62398[(1)] = (5));

} else {
var statearr_62373_62399 = state_62367__$1;
(statearr_62373_62399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (13))){
var state_62367__$1 = state_62367;
var statearr_62374_62400 = state_62367__$1;
(statearr_62374_62400[(2)] = null);

(statearr_62374_62400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (6))){
var inst_62346 = (state_62367[(7)]);
var state_62367__$1 = state_62367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62367__$1,(11),to,inst_62346);
} else {
if((state_val_62368 === (3))){
var inst_62365 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62367__$1,inst_62365);
} else {
if((state_val_62368 === (12))){
var state_62367__$1 = state_62367;
var statearr_62375_62401 = state_62367__$1;
(statearr_62375_62401[(2)] = null);

(statearr_62375_62401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (2))){
var state_62367__$1 = state_62367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62367__$1,(4),from);
} else {
if((state_val_62368 === (11))){
var inst_62356 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
if(cljs.core.truth_(inst_62356)){
var statearr_62376_62402 = state_62367__$1;
(statearr_62376_62402[(1)] = (12));

} else {
var statearr_62377_62403 = state_62367__$1;
(statearr_62377_62403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (9))){
var state_62367__$1 = state_62367;
var statearr_62378_62404 = state_62367__$1;
(statearr_62378_62404[(2)] = null);

(statearr_62378_62404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (5))){
var state_62367__$1 = state_62367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62379_62405 = state_62367__$1;
(statearr_62379_62405[(1)] = (8));

} else {
var statearr_62380_62406 = state_62367__$1;
(statearr_62380_62406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (14))){
var inst_62361 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62381_62407 = state_62367__$1;
(statearr_62381_62407[(2)] = inst_62361);

(statearr_62381_62407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (10))){
var inst_62353 = (state_62367[(2)]);
var state_62367__$1 = state_62367;
var statearr_62382_62408 = state_62367__$1;
(statearr_62382_62408[(2)] = inst_62353);

(statearr_62382_62408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62368 === (8))){
var inst_62350 = cljs.core.async.close_BANG_.call(null,to);
var state_62367__$1 = state_62367;
var statearr_62383_62409 = state_62367__$1;
(statearr_62383_62409[(2)] = inst_62350);

(statearr_62383_62409[(1)] = (10));


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
});})(c__10513__auto___62395))
;
return ((function (switch__10492__auto__,c__10513__auto___62395){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_62387 = [null,null,null,null,null,null,null,null];
(statearr_62387[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_62387[(1)] = (1));

return statearr_62387;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_62367){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62388){if((e62388 instanceof Object)){
var ex__10496__auto__ = e62388;
var statearr_62389_62410 = state_62367;
(statearr_62389_62410[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62411 = state_62367;
state_62367 = G__62411;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_62367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_62367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___62395))
})();
var state__10515__auto__ = (function (){var statearr_62390 = f__10514__auto__.call(null);
(statearr_62390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___62395);

return statearr_62390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___62395))
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
return (function (p__62599){
var vec__62600 = p__62599;
var v = cljs.core.nth.call(null,vec__62600,(0),null);
var p = cljs.core.nth.call(null,vec__62600,(1),null);
var job = vec__62600;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10513__auto___62786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___62786,res,vec__62600,v,p,job,jobs,results){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___62786,res,vec__62600,v,p,job,jobs,results){
return (function (state_62607){
var state_val_62608 = (state_62607[(1)]);
if((state_val_62608 === (1))){
var state_62607__$1 = state_62607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62607__$1,(2),res,v);
} else {
if((state_val_62608 === (2))){
var inst_62604 = (state_62607[(2)]);
var inst_62605 = cljs.core.async.close_BANG_.call(null,res);
var state_62607__$1 = (function (){var statearr_62609 = state_62607;
(statearr_62609[(7)] = inst_62604);

return statearr_62609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62607__$1,inst_62605);
} else {
return null;
}
}
});})(c__10513__auto___62786,res,vec__62600,v,p,job,jobs,results))
;
return ((function (switch__10492__auto__,c__10513__auto___62786,res,vec__62600,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_62613 = [null,null,null,null,null,null,null,null];
(statearr_62613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_62613[(1)] = (1));

return statearr_62613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_62607){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62614){if((e62614 instanceof Object)){
var ex__10496__auto__ = e62614;
var statearr_62615_62787 = state_62607;
(statearr_62615_62787[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62788 = state_62607;
state_62607 = G__62788;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_62607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_62607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___62786,res,vec__62600,v,p,job,jobs,results))
})();
var state__10515__auto__ = (function (){var statearr_62616 = f__10514__auto__.call(null);
(statearr_62616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___62786);

return statearr_62616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___62786,res,vec__62600,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__62617){
var vec__62618 = p__62617;
var v = cljs.core.nth.call(null,vec__62618,(0),null);
var p = cljs.core.nth.call(null,vec__62618,(1),null);
var job = vec__62618;
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
var n__7461__auto___62789 = n;
var __62790 = (0);
while(true){
if((__62790 < n__7461__auto___62789)){
var G__62621_62791 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__62621_62791) {
case "compute":
var c__10513__auto___62793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62790,c__10513__auto___62793,G__62621_62791,n__7461__auto___62789,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (__62790,c__10513__auto___62793,G__62621_62791,n__7461__auto___62789,jobs,results,process,async){
return (function (state_62634){
var state_val_62635 = (state_62634[(1)]);
if((state_val_62635 === (1))){
var state_62634__$1 = state_62634;
var statearr_62636_62794 = state_62634__$1;
(statearr_62636_62794[(2)] = null);

(statearr_62636_62794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62635 === (2))){
var state_62634__$1 = state_62634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62634__$1,(4),jobs);
} else {
if((state_val_62635 === (3))){
var inst_62632 = (state_62634[(2)]);
var state_62634__$1 = state_62634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62634__$1,inst_62632);
} else {
if((state_val_62635 === (4))){
var inst_62624 = (state_62634[(2)]);
var inst_62625 = process.call(null,inst_62624);
var state_62634__$1 = state_62634;
if(cljs.core.truth_(inst_62625)){
var statearr_62637_62795 = state_62634__$1;
(statearr_62637_62795[(1)] = (5));

} else {
var statearr_62638_62796 = state_62634__$1;
(statearr_62638_62796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62635 === (5))){
var state_62634__$1 = state_62634;
var statearr_62639_62797 = state_62634__$1;
(statearr_62639_62797[(2)] = null);

(statearr_62639_62797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62635 === (6))){
var state_62634__$1 = state_62634;
var statearr_62640_62798 = state_62634__$1;
(statearr_62640_62798[(2)] = null);

(statearr_62640_62798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62635 === (7))){
var inst_62630 = (state_62634[(2)]);
var state_62634__$1 = state_62634;
var statearr_62641_62799 = state_62634__$1;
(statearr_62641_62799[(2)] = inst_62630);

(statearr_62641_62799[(1)] = (3));


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
});})(__62790,c__10513__auto___62793,G__62621_62791,n__7461__auto___62789,jobs,results,process,async))
;
return ((function (__62790,switch__10492__auto__,c__10513__auto___62793,G__62621_62791,n__7461__auto___62789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_62645 = [null,null,null,null,null,null,null];
(statearr_62645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_62645[(1)] = (1));

return statearr_62645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_62634){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62646){if((e62646 instanceof Object)){
var ex__10496__auto__ = e62646;
var statearr_62647_62800 = state_62634;
(statearr_62647_62800[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62801 = state_62634;
state_62634 = G__62801;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_62634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_62634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(__62790,switch__10492__auto__,c__10513__auto___62793,G__62621_62791,n__7461__auto___62789,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_62648 = f__10514__auto__.call(null);
(statearr_62648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___62793);

return statearr_62648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(__62790,c__10513__auto___62793,G__62621_62791,n__7461__auto___62789,jobs,results,process,async))
);


break;
case "async":
var c__10513__auto___62802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62790,c__10513__auto___62802,G__62621_62791,n__7461__auto___62789,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (__62790,c__10513__auto___62802,G__62621_62791,n__7461__auto___62789,jobs,results,process,async){
return (function (state_62661){
var state_val_62662 = (state_62661[(1)]);
if((state_val_62662 === (1))){
var state_62661__$1 = state_62661;
var statearr_62663_62803 = state_62661__$1;
(statearr_62663_62803[(2)] = null);

(statearr_62663_62803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62662 === (2))){
var state_62661__$1 = state_62661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62661__$1,(4),jobs);
} else {
if((state_val_62662 === (3))){
var inst_62659 = (state_62661[(2)]);
var state_62661__$1 = state_62661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62661__$1,inst_62659);
} else {
if((state_val_62662 === (4))){
var inst_62651 = (state_62661[(2)]);
var inst_62652 = async.call(null,inst_62651);
var state_62661__$1 = state_62661;
if(cljs.core.truth_(inst_62652)){
var statearr_62664_62804 = state_62661__$1;
(statearr_62664_62804[(1)] = (5));

} else {
var statearr_62665_62805 = state_62661__$1;
(statearr_62665_62805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62662 === (5))){
var state_62661__$1 = state_62661;
var statearr_62666_62806 = state_62661__$1;
(statearr_62666_62806[(2)] = null);

(statearr_62666_62806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62662 === (6))){
var state_62661__$1 = state_62661;
var statearr_62667_62807 = state_62661__$1;
(statearr_62667_62807[(2)] = null);

(statearr_62667_62807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62662 === (7))){
var inst_62657 = (state_62661[(2)]);
var state_62661__$1 = state_62661;
var statearr_62668_62808 = state_62661__$1;
(statearr_62668_62808[(2)] = inst_62657);

(statearr_62668_62808[(1)] = (3));


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
});})(__62790,c__10513__auto___62802,G__62621_62791,n__7461__auto___62789,jobs,results,process,async))
;
return ((function (__62790,switch__10492__auto__,c__10513__auto___62802,G__62621_62791,n__7461__auto___62789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_62672 = [null,null,null,null,null,null,null];
(statearr_62672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_62672[(1)] = (1));

return statearr_62672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_62661){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62673){if((e62673 instanceof Object)){
var ex__10496__auto__ = e62673;
var statearr_62674_62809 = state_62661;
(statearr_62674_62809[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62810 = state_62661;
state_62661 = G__62810;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_62661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_62661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(__62790,switch__10492__auto__,c__10513__auto___62802,G__62621_62791,n__7461__auto___62789,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_62675 = f__10514__auto__.call(null);
(statearr_62675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___62802);

return statearr_62675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(__62790,c__10513__auto___62802,G__62621_62791,n__7461__auto___62789,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__62811 = (__62790 + (1));
__62790 = G__62811;
continue;
} else {
}
break;
}

var c__10513__auto___62812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___62812,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___62812,jobs,results,process,async){
return (function (state_62697){
var state_val_62698 = (state_62697[(1)]);
if((state_val_62698 === (1))){
var state_62697__$1 = state_62697;
var statearr_62699_62813 = state_62697__$1;
(statearr_62699_62813[(2)] = null);

(statearr_62699_62813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62698 === (2))){
var state_62697__$1 = state_62697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62697__$1,(4),from);
} else {
if((state_val_62698 === (3))){
var inst_62695 = (state_62697[(2)]);
var state_62697__$1 = state_62697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62697__$1,inst_62695);
} else {
if((state_val_62698 === (4))){
var inst_62678 = (state_62697[(7)]);
var inst_62678__$1 = (state_62697[(2)]);
var inst_62679 = (inst_62678__$1 == null);
var state_62697__$1 = (function (){var statearr_62700 = state_62697;
(statearr_62700[(7)] = inst_62678__$1);

return statearr_62700;
})();
if(cljs.core.truth_(inst_62679)){
var statearr_62701_62814 = state_62697__$1;
(statearr_62701_62814[(1)] = (5));

} else {
var statearr_62702_62815 = state_62697__$1;
(statearr_62702_62815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62698 === (5))){
var inst_62681 = cljs.core.async.close_BANG_.call(null,jobs);
var state_62697__$1 = state_62697;
var statearr_62703_62816 = state_62697__$1;
(statearr_62703_62816[(2)] = inst_62681);

(statearr_62703_62816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62698 === (6))){
var inst_62683 = (state_62697[(8)]);
var inst_62678 = (state_62697[(7)]);
var inst_62683__$1 = cljs.core.async.chan.call(null,(1));
var inst_62684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62685 = [inst_62678,inst_62683__$1];
var inst_62686 = (new cljs.core.PersistentVector(null,2,(5),inst_62684,inst_62685,null));
var state_62697__$1 = (function (){var statearr_62704 = state_62697;
(statearr_62704[(8)] = inst_62683__$1);

return statearr_62704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62697__$1,(8),jobs,inst_62686);
} else {
if((state_val_62698 === (7))){
var inst_62693 = (state_62697[(2)]);
var state_62697__$1 = state_62697;
var statearr_62705_62817 = state_62697__$1;
(statearr_62705_62817[(2)] = inst_62693);

(statearr_62705_62817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62698 === (8))){
var inst_62683 = (state_62697[(8)]);
var inst_62688 = (state_62697[(2)]);
var state_62697__$1 = (function (){var statearr_62706 = state_62697;
(statearr_62706[(9)] = inst_62688);

return statearr_62706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62697__$1,(9),results,inst_62683);
} else {
if((state_val_62698 === (9))){
var inst_62690 = (state_62697[(2)]);
var state_62697__$1 = (function (){var statearr_62707 = state_62697;
(statearr_62707[(10)] = inst_62690);

return statearr_62707;
})();
var statearr_62708_62818 = state_62697__$1;
(statearr_62708_62818[(2)] = null);

(statearr_62708_62818[(1)] = (2));


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
});})(c__10513__auto___62812,jobs,results,process,async))
;
return ((function (switch__10492__auto__,c__10513__auto___62812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_62712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_62712[(1)] = (1));

return statearr_62712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_62697){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62713){if((e62713 instanceof Object)){
var ex__10496__auto__ = e62713;
var statearr_62714_62819 = state_62697;
(statearr_62714_62819[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62820 = state_62697;
state_62697 = G__62820;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_62697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_62697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___62812,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_62715 = f__10514__auto__.call(null);
(statearr_62715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___62812);

return statearr_62715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___62812,jobs,results,process,async))
);


var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__,jobs,results,process,async){
return (function (state_62753){
var state_val_62754 = (state_62753[(1)]);
if((state_val_62754 === (7))){
var inst_62749 = (state_62753[(2)]);
var state_62753__$1 = state_62753;
var statearr_62755_62821 = state_62753__$1;
(statearr_62755_62821[(2)] = inst_62749);

(statearr_62755_62821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (20))){
var state_62753__$1 = state_62753;
var statearr_62756_62822 = state_62753__$1;
(statearr_62756_62822[(2)] = null);

(statearr_62756_62822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (1))){
var state_62753__$1 = state_62753;
var statearr_62757_62823 = state_62753__$1;
(statearr_62757_62823[(2)] = null);

(statearr_62757_62823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (4))){
var inst_62718 = (state_62753[(7)]);
var inst_62718__$1 = (state_62753[(2)]);
var inst_62719 = (inst_62718__$1 == null);
var state_62753__$1 = (function (){var statearr_62758 = state_62753;
(statearr_62758[(7)] = inst_62718__$1);

return statearr_62758;
})();
if(cljs.core.truth_(inst_62719)){
var statearr_62759_62824 = state_62753__$1;
(statearr_62759_62824[(1)] = (5));

} else {
var statearr_62760_62825 = state_62753__$1;
(statearr_62760_62825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (15))){
var inst_62731 = (state_62753[(8)]);
var state_62753__$1 = state_62753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62753__$1,(18),to,inst_62731);
} else {
if((state_val_62754 === (21))){
var inst_62744 = (state_62753[(2)]);
var state_62753__$1 = state_62753;
var statearr_62761_62826 = state_62753__$1;
(statearr_62761_62826[(2)] = inst_62744);

(statearr_62761_62826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (13))){
var inst_62746 = (state_62753[(2)]);
var state_62753__$1 = (function (){var statearr_62762 = state_62753;
(statearr_62762[(9)] = inst_62746);

return statearr_62762;
})();
var statearr_62763_62827 = state_62753__$1;
(statearr_62763_62827[(2)] = null);

(statearr_62763_62827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (6))){
var inst_62718 = (state_62753[(7)]);
var state_62753__$1 = state_62753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62753__$1,(11),inst_62718);
} else {
if((state_val_62754 === (17))){
var inst_62739 = (state_62753[(2)]);
var state_62753__$1 = state_62753;
if(cljs.core.truth_(inst_62739)){
var statearr_62764_62828 = state_62753__$1;
(statearr_62764_62828[(1)] = (19));

} else {
var statearr_62765_62829 = state_62753__$1;
(statearr_62765_62829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (3))){
var inst_62751 = (state_62753[(2)]);
var state_62753__$1 = state_62753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62753__$1,inst_62751);
} else {
if((state_val_62754 === (12))){
var inst_62728 = (state_62753[(10)]);
var state_62753__$1 = state_62753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62753__$1,(14),inst_62728);
} else {
if((state_val_62754 === (2))){
var state_62753__$1 = state_62753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62753__$1,(4),results);
} else {
if((state_val_62754 === (19))){
var state_62753__$1 = state_62753;
var statearr_62766_62830 = state_62753__$1;
(statearr_62766_62830[(2)] = null);

(statearr_62766_62830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (11))){
var inst_62728 = (state_62753[(2)]);
var state_62753__$1 = (function (){var statearr_62767 = state_62753;
(statearr_62767[(10)] = inst_62728);

return statearr_62767;
})();
var statearr_62768_62831 = state_62753__$1;
(statearr_62768_62831[(2)] = null);

(statearr_62768_62831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (9))){
var state_62753__$1 = state_62753;
var statearr_62769_62832 = state_62753__$1;
(statearr_62769_62832[(2)] = null);

(statearr_62769_62832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (5))){
var state_62753__$1 = state_62753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62770_62833 = state_62753__$1;
(statearr_62770_62833[(1)] = (8));

} else {
var statearr_62771_62834 = state_62753__$1;
(statearr_62771_62834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (14))){
var inst_62733 = (state_62753[(11)]);
var inst_62731 = (state_62753[(8)]);
var inst_62731__$1 = (state_62753[(2)]);
var inst_62732 = (inst_62731__$1 == null);
var inst_62733__$1 = cljs.core.not.call(null,inst_62732);
var state_62753__$1 = (function (){var statearr_62772 = state_62753;
(statearr_62772[(11)] = inst_62733__$1);

(statearr_62772[(8)] = inst_62731__$1);

return statearr_62772;
})();
if(inst_62733__$1){
var statearr_62773_62835 = state_62753__$1;
(statearr_62773_62835[(1)] = (15));

} else {
var statearr_62774_62836 = state_62753__$1;
(statearr_62774_62836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (16))){
var inst_62733 = (state_62753[(11)]);
var state_62753__$1 = state_62753;
var statearr_62775_62837 = state_62753__$1;
(statearr_62775_62837[(2)] = inst_62733);

(statearr_62775_62837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (10))){
var inst_62725 = (state_62753[(2)]);
var state_62753__$1 = state_62753;
var statearr_62776_62838 = state_62753__$1;
(statearr_62776_62838[(2)] = inst_62725);

(statearr_62776_62838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (18))){
var inst_62736 = (state_62753[(2)]);
var state_62753__$1 = state_62753;
var statearr_62777_62839 = state_62753__$1;
(statearr_62777_62839[(2)] = inst_62736);

(statearr_62777_62839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62754 === (8))){
var inst_62722 = cljs.core.async.close_BANG_.call(null,to);
var state_62753__$1 = state_62753;
var statearr_62778_62840 = state_62753__$1;
(statearr_62778_62840[(2)] = inst_62722);

(statearr_62778_62840[(1)] = (10));


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
});})(c__10513__auto__,jobs,results,process,async))
;
return ((function (switch__10492__auto__,c__10513__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_62782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_62782[(1)] = (1));

return statearr_62782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_62753){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62783){if((e62783 instanceof Object)){
var ex__10496__auto__ = e62783;
var statearr_62784_62841 = state_62753;
(statearr_62784_62841[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62842 = state_62753;
state_62753 = G__62842;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_62753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_62753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_62785 = f__10514__auto__.call(null);
(statearr_62785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_62785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto__,jobs,results,process,async))
);

return c__10513__auto__;
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
var args62843 = [];
var len__7651__auto___62846 = arguments.length;
var i__7652__auto___62847 = (0);
while(true){
if((i__7652__auto___62847 < len__7651__auto___62846)){
args62843.push((arguments[i__7652__auto___62847]));

var G__62848 = (i__7652__auto___62847 + (1));
i__7652__auto___62847 = G__62848;
continue;
} else {
}
break;
}

var G__62845 = args62843.length;
switch (G__62845) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62843.length)].join('')));

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
var args62850 = [];
var len__7651__auto___62853 = arguments.length;
var i__7652__auto___62854 = (0);
while(true){
if((i__7652__auto___62854 < len__7651__auto___62853)){
args62850.push((arguments[i__7652__auto___62854]));

var G__62855 = (i__7652__auto___62854 + (1));
i__7652__auto___62854 = G__62855;
continue;
} else {
}
break;
}

var G__62852 = args62850.length;
switch (G__62852) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62850.length)].join('')));

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
var args62857 = [];
var len__7651__auto___62910 = arguments.length;
var i__7652__auto___62911 = (0);
while(true){
if((i__7652__auto___62911 < len__7651__auto___62910)){
args62857.push((arguments[i__7652__auto___62911]));

var G__62912 = (i__7652__auto___62911 + (1));
i__7652__auto___62911 = G__62912;
continue;
} else {
}
break;
}

var G__62859 = args62857.length;
switch (G__62859) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62857.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10513__auto___62914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___62914,tc,fc){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___62914,tc,fc){
return (function (state_62885){
var state_val_62886 = (state_62885[(1)]);
if((state_val_62886 === (7))){
var inst_62881 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
var statearr_62887_62915 = state_62885__$1;
(statearr_62887_62915[(2)] = inst_62881);

(statearr_62887_62915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (1))){
var state_62885__$1 = state_62885;
var statearr_62888_62916 = state_62885__$1;
(statearr_62888_62916[(2)] = null);

(statearr_62888_62916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (4))){
var inst_62862 = (state_62885[(7)]);
var inst_62862__$1 = (state_62885[(2)]);
var inst_62863 = (inst_62862__$1 == null);
var state_62885__$1 = (function (){var statearr_62889 = state_62885;
(statearr_62889[(7)] = inst_62862__$1);

return statearr_62889;
})();
if(cljs.core.truth_(inst_62863)){
var statearr_62890_62917 = state_62885__$1;
(statearr_62890_62917[(1)] = (5));

} else {
var statearr_62891_62918 = state_62885__$1;
(statearr_62891_62918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (13))){
var state_62885__$1 = state_62885;
var statearr_62892_62919 = state_62885__$1;
(statearr_62892_62919[(2)] = null);

(statearr_62892_62919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (6))){
var inst_62862 = (state_62885[(7)]);
var inst_62868 = p.call(null,inst_62862);
var state_62885__$1 = state_62885;
if(cljs.core.truth_(inst_62868)){
var statearr_62893_62920 = state_62885__$1;
(statearr_62893_62920[(1)] = (9));

} else {
var statearr_62894_62921 = state_62885__$1;
(statearr_62894_62921[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (3))){
var inst_62883 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62885__$1,inst_62883);
} else {
if((state_val_62886 === (12))){
var state_62885__$1 = state_62885;
var statearr_62895_62922 = state_62885__$1;
(statearr_62895_62922[(2)] = null);

(statearr_62895_62922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (2))){
var state_62885__$1 = state_62885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62885__$1,(4),ch);
} else {
if((state_val_62886 === (11))){
var inst_62862 = (state_62885[(7)]);
var inst_62872 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62885__$1,(8),inst_62872,inst_62862);
} else {
if((state_val_62886 === (9))){
var state_62885__$1 = state_62885;
var statearr_62896_62923 = state_62885__$1;
(statearr_62896_62923[(2)] = tc);

(statearr_62896_62923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (5))){
var inst_62865 = cljs.core.async.close_BANG_.call(null,tc);
var inst_62866 = cljs.core.async.close_BANG_.call(null,fc);
var state_62885__$1 = (function (){var statearr_62897 = state_62885;
(statearr_62897[(8)] = inst_62865);

return statearr_62897;
})();
var statearr_62898_62924 = state_62885__$1;
(statearr_62898_62924[(2)] = inst_62866);

(statearr_62898_62924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (14))){
var inst_62879 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
var statearr_62899_62925 = state_62885__$1;
(statearr_62899_62925[(2)] = inst_62879);

(statearr_62899_62925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (10))){
var state_62885__$1 = state_62885;
var statearr_62900_62926 = state_62885__$1;
(statearr_62900_62926[(2)] = fc);

(statearr_62900_62926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (8))){
var inst_62874 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
if(cljs.core.truth_(inst_62874)){
var statearr_62901_62927 = state_62885__$1;
(statearr_62901_62927[(1)] = (12));

} else {
var statearr_62902_62928 = state_62885__$1;
(statearr_62902_62928[(1)] = (13));

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
});})(c__10513__auto___62914,tc,fc))
;
return ((function (switch__10492__auto__,c__10513__auto___62914,tc,fc){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_62906 = [null,null,null,null,null,null,null,null,null];
(statearr_62906[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_62906[(1)] = (1));

return statearr_62906;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_62885){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e62907){if((e62907 instanceof Object)){
var ex__10496__auto__ = e62907;
var statearr_62908_62929 = state_62885;
(statearr_62908_62929[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62930 = state_62885;
state_62885 = G__62930;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_62885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_62885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___62914,tc,fc))
})();
var state__10515__auto__ = (function (){var statearr_62909 = f__10514__auto__.call(null);
(statearr_62909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___62914);

return statearr_62909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___62914,tc,fc))
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
var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__){
return (function (state_62994){
var state_val_62995 = (state_62994[(1)]);
if((state_val_62995 === (7))){
var inst_62990 = (state_62994[(2)]);
var state_62994__$1 = state_62994;
var statearr_62996_63017 = state_62994__$1;
(statearr_62996_63017[(2)] = inst_62990);

(statearr_62996_63017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (1))){
var inst_62974 = init;
var state_62994__$1 = (function (){var statearr_62997 = state_62994;
(statearr_62997[(7)] = inst_62974);

return statearr_62997;
})();
var statearr_62998_63018 = state_62994__$1;
(statearr_62998_63018[(2)] = null);

(statearr_62998_63018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (4))){
var inst_62977 = (state_62994[(8)]);
var inst_62977__$1 = (state_62994[(2)]);
var inst_62978 = (inst_62977__$1 == null);
var state_62994__$1 = (function (){var statearr_62999 = state_62994;
(statearr_62999[(8)] = inst_62977__$1);

return statearr_62999;
})();
if(cljs.core.truth_(inst_62978)){
var statearr_63000_63019 = state_62994__$1;
(statearr_63000_63019[(1)] = (5));

} else {
var statearr_63001_63020 = state_62994__$1;
(statearr_63001_63020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (6))){
var inst_62981 = (state_62994[(9)]);
var inst_62977 = (state_62994[(8)]);
var inst_62974 = (state_62994[(7)]);
var inst_62981__$1 = f.call(null,inst_62974,inst_62977);
var inst_62982 = cljs.core.reduced_QMARK_.call(null,inst_62981__$1);
var state_62994__$1 = (function (){var statearr_63002 = state_62994;
(statearr_63002[(9)] = inst_62981__$1);

return statearr_63002;
})();
if(inst_62982){
var statearr_63003_63021 = state_62994__$1;
(statearr_63003_63021[(1)] = (8));

} else {
var statearr_63004_63022 = state_62994__$1;
(statearr_63004_63022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (3))){
var inst_62992 = (state_62994[(2)]);
var state_62994__$1 = state_62994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62994__$1,inst_62992);
} else {
if((state_val_62995 === (2))){
var state_62994__$1 = state_62994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62994__$1,(4),ch);
} else {
if((state_val_62995 === (9))){
var inst_62981 = (state_62994[(9)]);
var inst_62974 = inst_62981;
var state_62994__$1 = (function (){var statearr_63005 = state_62994;
(statearr_63005[(7)] = inst_62974);

return statearr_63005;
})();
var statearr_63006_63023 = state_62994__$1;
(statearr_63006_63023[(2)] = null);

(statearr_63006_63023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (5))){
var inst_62974 = (state_62994[(7)]);
var state_62994__$1 = state_62994;
var statearr_63007_63024 = state_62994__$1;
(statearr_63007_63024[(2)] = inst_62974);

(statearr_63007_63024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (10))){
var inst_62988 = (state_62994[(2)]);
var state_62994__$1 = state_62994;
var statearr_63008_63025 = state_62994__$1;
(statearr_63008_63025[(2)] = inst_62988);

(statearr_63008_63025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62995 === (8))){
var inst_62981 = (state_62994[(9)]);
var inst_62984 = cljs.core.deref.call(null,inst_62981);
var state_62994__$1 = state_62994;
var statearr_63009_63026 = state_62994__$1;
(statearr_63009_63026[(2)] = inst_62984);

(statearr_63009_63026[(1)] = (10));


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
});})(c__10513__auto__))
;
return ((function (switch__10492__auto__,c__10513__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10493__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10493__auto____0 = (function (){
var statearr_63013 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63013[(0)] = cljs$core$async$reduce_$_state_machine__10493__auto__);

(statearr_63013[(1)] = (1));

return statearr_63013;
});
var cljs$core$async$reduce_$_state_machine__10493__auto____1 = (function (state_62994){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_62994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e63014){if((e63014 instanceof Object)){
var ex__10496__auto__ = e63014;
var statearr_63015_63027 = state_62994;
(statearr_63015_63027[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63028 = state_62994;
state_62994 = G__63028;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10493__auto__ = function(state_62994){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10493__auto____1.call(this,state_62994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10493__auto____0;
cljs$core$async$reduce_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10493__auto____1;
return cljs$core$async$reduce_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_63016 = f__10514__auto__.call(null);
(statearr_63016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_63016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto__))
);

return c__10513__auto__;
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
var args63029 = [];
var len__7651__auto___63081 = arguments.length;
var i__7652__auto___63082 = (0);
while(true){
if((i__7652__auto___63082 < len__7651__auto___63081)){
args63029.push((arguments[i__7652__auto___63082]));

var G__63083 = (i__7652__auto___63082 + (1));
i__7652__auto___63082 = G__63083;
continue;
} else {
}
break;
}

var G__63031 = args63029.length;
switch (G__63031) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63029.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__){
return (function (state_63056){
var state_val_63057 = (state_63056[(1)]);
if((state_val_63057 === (7))){
var inst_63038 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
var statearr_63058_63085 = state_63056__$1;
(statearr_63058_63085[(2)] = inst_63038);

(statearr_63058_63085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (1))){
var inst_63032 = cljs.core.seq.call(null,coll);
var inst_63033 = inst_63032;
var state_63056__$1 = (function (){var statearr_63059 = state_63056;
(statearr_63059[(7)] = inst_63033);

return statearr_63059;
})();
var statearr_63060_63086 = state_63056__$1;
(statearr_63060_63086[(2)] = null);

(statearr_63060_63086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (4))){
var inst_63033 = (state_63056[(7)]);
var inst_63036 = cljs.core.first.call(null,inst_63033);
var state_63056__$1 = state_63056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63056__$1,(7),ch,inst_63036);
} else {
if((state_val_63057 === (13))){
var inst_63050 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
var statearr_63061_63087 = state_63056__$1;
(statearr_63061_63087[(2)] = inst_63050);

(statearr_63061_63087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (6))){
var inst_63041 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
if(cljs.core.truth_(inst_63041)){
var statearr_63062_63088 = state_63056__$1;
(statearr_63062_63088[(1)] = (8));

} else {
var statearr_63063_63089 = state_63056__$1;
(statearr_63063_63089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (3))){
var inst_63054 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63056__$1,inst_63054);
} else {
if((state_val_63057 === (12))){
var state_63056__$1 = state_63056;
var statearr_63064_63090 = state_63056__$1;
(statearr_63064_63090[(2)] = null);

(statearr_63064_63090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (2))){
var inst_63033 = (state_63056[(7)]);
var state_63056__$1 = state_63056;
if(cljs.core.truth_(inst_63033)){
var statearr_63065_63091 = state_63056__$1;
(statearr_63065_63091[(1)] = (4));

} else {
var statearr_63066_63092 = state_63056__$1;
(statearr_63066_63092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (11))){
var inst_63047 = cljs.core.async.close_BANG_.call(null,ch);
var state_63056__$1 = state_63056;
var statearr_63067_63093 = state_63056__$1;
(statearr_63067_63093[(2)] = inst_63047);

(statearr_63067_63093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (9))){
var state_63056__$1 = state_63056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63068_63094 = state_63056__$1;
(statearr_63068_63094[(1)] = (11));

} else {
var statearr_63069_63095 = state_63056__$1;
(statearr_63069_63095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (5))){
var inst_63033 = (state_63056[(7)]);
var state_63056__$1 = state_63056;
var statearr_63070_63096 = state_63056__$1;
(statearr_63070_63096[(2)] = inst_63033);

(statearr_63070_63096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (10))){
var inst_63052 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
var statearr_63071_63097 = state_63056__$1;
(statearr_63071_63097[(2)] = inst_63052);

(statearr_63071_63097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (8))){
var inst_63033 = (state_63056[(7)]);
var inst_63043 = cljs.core.next.call(null,inst_63033);
var inst_63033__$1 = inst_63043;
var state_63056__$1 = (function (){var statearr_63072 = state_63056;
(statearr_63072[(7)] = inst_63033__$1);

return statearr_63072;
})();
var statearr_63073_63098 = state_63056__$1;
(statearr_63073_63098[(2)] = null);

(statearr_63073_63098[(1)] = (2));


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
});})(c__10513__auto__))
;
return ((function (switch__10492__auto__,c__10513__auto__){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_63077 = [null,null,null,null,null,null,null,null];
(statearr_63077[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_63077[(1)] = (1));

return statearr_63077;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_63056){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_63056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e63078){if((e63078 instanceof Object)){
var ex__10496__auto__ = e63078;
var statearr_63079_63099 = state_63056;
(statearr_63079_63099[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63100 = state_63056;
state_63056 = G__63100;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_63056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_63056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_63080 = f__10514__auto__.call(null);
(statearr_63080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_63080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto__))
);

return c__10513__auto__;
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
var x__7206__auto__ = (((_ == null))?null:_);
var m__7207__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,_);
} else {
var m__7207__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,_);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7207__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m);
} else {
var m__7207__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async63326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63326 = (function (ch,cs,meta63327){
this.ch = ch;
this.cs = cs;
this.meta63327 = meta63327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_63328,meta63327__$1){
var self__ = this;
var _63328__$1 = this;
return (new cljs.core.async.t_cljs$core$async63326(self__.ch,self__.cs,meta63327__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_63328){
var self__ = this;
var _63328__$1 = this;
return self__.meta63327;
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63327","meta63327",507935091,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async63326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63326";

cljs.core.async.t_cljs$core$async63326.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async63326");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async63326 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async63326(ch__$1,cs__$1,meta63327){
return (new cljs.core.async.t_cljs$core$async63326(ch__$1,cs__$1,meta63327));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async63326(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10513__auto___63551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___63551,cs,m,dchan,dctr,done){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___63551,cs,m,dchan,dctr,done){
return (function (state_63463){
var state_val_63464 = (state_63463[(1)]);
if((state_val_63464 === (7))){
var inst_63459 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63465_63552 = state_63463__$1;
(statearr_63465_63552[(2)] = inst_63459);

(statearr_63465_63552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (20))){
var inst_63362 = (state_63463[(7)]);
var inst_63374 = cljs.core.first.call(null,inst_63362);
var inst_63375 = cljs.core.nth.call(null,inst_63374,(0),null);
var inst_63376 = cljs.core.nth.call(null,inst_63374,(1),null);
var state_63463__$1 = (function (){var statearr_63466 = state_63463;
(statearr_63466[(8)] = inst_63375);

return statearr_63466;
})();
if(cljs.core.truth_(inst_63376)){
var statearr_63467_63553 = state_63463__$1;
(statearr_63467_63553[(1)] = (22));

} else {
var statearr_63468_63554 = state_63463__$1;
(statearr_63468_63554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (27))){
var inst_63411 = (state_63463[(9)]);
var inst_63406 = (state_63463[(10)]);
var inst_63331 = (state_63463[(11)]);
var inst_63404 = (state_63463[(12)]);
var inst_63411__$1 = cljs.core._nth.call(null,inst_63404,inst_63406);
var inst_63412 = cljs.core.async.put_BANG_.call(null,inst_63411__$1,inst_63331,done);
var state_63463__$1 = (function (){var statearr_63469 = state_63463;
(statearr_63469[(9)] = inst_63411__$1);

return statearr_63469;
})();
if(cljs.core.truth_(inst_63412)){
var statearr_63470_63555 = state_63463__$1;
(statearr_63470_63555[(1)] = (30));

} else {
var statearr_63471_63556 = state_63463__$1;
(statearr_63471_63556[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (1))){
var state_63463__$1 = state_63463;
var statearr_63472_63557 = state_63463__$1;
(statearr_63472_63557[(2)] = null);

(statearr_63472_63557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (24))){
var inst_63362 = (state_63463[(7)]);
var inst_63381 = (state_63463[(2)]);
var inst_63382 = cljs.core.next.call(null,inst_63362);
var inst_63340 = inst_63382;
var inst_63341 = null;
var inst_63342 = (0);
var inst_63343 = (0);
var state_63463__$1 = (function (){var statearr_63473 = state_63463;
(statearr_63473[(13)] = inst_63341);

(statearr_63473[(14)] = inst_63381);

(statearr_63473[(15)] = inst_63342);

(statearr_63473[(16)] = inst_63343);

(statearr_63473[(17)] = inst_63340);

return statearr_63473;
})();
var statearr_63474_63558 = state_63463__$1;
(statearr_63474_63558[(2)] = null);

(statearr_63474_63558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (39))){
var state_63463__$1 = state_63463;
var statearr_63478_63559 = state_63463__$1;
(statearr_63478_63559[(2)] = null);

(statearr_63478_63559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (4))){
var inst_63331 = (state_63463[(11)]);
var inst_63331__$1 = (state_63463[(2)]);
var inst_63332 = (inst_63331__$1 == null);
var state_63463__$1 = (function (){var statearr_63479 = state_63463;
(statearr_63479[(11)] = inst_63331__$1);

return statearr_63479;
})();
if(cljs.core.truth_(inst_63332)){
var statearr_63480_63560 = state_63463__$1;
(statearr_63480_63560[(1)] = (5));

} else {
var statearr_63481_63561 = state_63463__$1;
(statearr_63481_63561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (15))){
var inst_63341 = (state_63463[(13)]);
var inst_63342 = (state_63463[(15)]);
var inst_63343 = (state_63463[(16)]);
var inst_63340 = (state_63463[(17)]);
var inst_63358 = (state_63463[(2)]);
var inst_63359 = (inst_63343 + (1));
var tmp63475 = inst_63341;
var tmp63476 = inst_63342;
var tmp63477 = inst_63340;
var inst_63340__$1 = tmp63477;
var inst_63341__$1 = tmp63475;
var inst_63342__$1 = tmp63476;
var inst_63343__$1 = inst_63359;
var state_63463__$1 = (function (){var statearr_63482 = state_63463;
(statearr_63482[(13)] = inst_63341__$1);

(statearr_63482[(18)] = inst_63358);

(statearr_63482[(15)] = inst_63342__$1);

(statearr_63482[(16)] = inst_63343__$1);

(statearr_63482[(17)] = inst_63340__$1);

return statearr_63482;
})();
var statearr_63483_63562 = state_63463__$1;
(statearr_63483_63562[(2)] = null);

(statearr_63483_63562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (21))){
var inst_63385 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63487_63563 = state_63463__$1;
(statearr_63487_63563[(2)] = inst_63385);

(statearr_63487_63563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (31))){
var inst_63411 = (state_63463[(9)]);
var inst_63415 = done.call(null,null);
var inst_63416 = cljs.core.async.untap_STAR_.call(null,m,inst_63411);
var state_63463__$1 = (function (){var statearr_63488 = state_63463;
(statearr_63488[(19)] = inst_63415);

return statearr_63488;
})();
var statearr_63489_63564 = state_63463__$1;
(statearr_63489_63564[(2)] = inst_63416);

(statearr_63489_63564[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (32))){
var inst_63406 = (state_63463[(10)]);
var inst_63403 = (state_63463[(20)]);
var inst_63404 = (state_63463[(12)]);
var inst_63405 = (state_63463[(21)]);
var inst_63418 = (state_63463[(2)]);
var inst_63419 = (inst_63406 + (1));
var tmp63484 = inst_63403;
var tmp63485 = inst_63404;
var tmp63486 = inst_63405;
var inst_63403__$1 = tmp63484;
var inst_63404__$1 = tmp63485;
var inst_63405__$1 = tmp63486;
var inst_63406__$1 = inst_63419;
var state_63463__$1 = (function (){var statearr_63490 = state_63463;
(statearr_63490[(10)] = inst_63406__$1);

(statearr_63490[(22)] = inst_63418);

(statearr_63490[(20)] = inst_63403__$1);

(statearr_63490[(12)] = inst_63404__$1);

(statearr_63490[(21)] = inst_63405__$1);

return statearr_63490;
})();
var statearr_63491_63565 = state_63463__$1;
(statearr_63491_63565[(2)] = null);

(statearr_63491_63565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (40))){
var inst_63431 = (state_63463[(23)]);
var inst_63435 = done.call(null,null);
var inst_63436 = cljs.core.async.untap_STAR_.call(null,m,inst_63431);
var state_63463__$1 = (function (){var statearr_63492 = state_63463;
(statearr_63492[(24)] = inst_63435);

return statearr_63492;
})();
var statearr_63493_63566 = state_63463__$1;
(statearr_63493_63566[(2)] = inst_63436);

(statearr_63493_63566[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (33))){
var inst_63422 = (state_63463[(25)]);
var inst_63424 = cljs.core.chunked_seq_QMARK_.call(null,inst_63422);
var state_63463__$1 = state_63463;
if(inst_63424){
var statearr_63494_63567 = state_63463__$1;
(statearr_63494_63567[(1)] = (36));

} else {
var statearr_63495_63568 = state_63463__$1;
(statearr_63495_63568[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (13))){
var inst_63352 = (state_63463[(26)]);
var inst_63355 = cljs.core.async.close_BANG_.call(null,inst_63352);
var state_63463__$1 = state_63463;
var statearr_63496_63569 = state_63463__$1;
(statearr_63496_63569[(2)] = inst_63355);

(statearr_63496_63569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (22))){
var inst_63375 = (state_63463[(8)]);
var inst_63378 = cljs.core.async.close_BANG_.call(null,inst_63375);
var state_63463__$1 = state_63463;
var statearr_63497_63570 = state_63463__$1;
(statearr_63497_63570[(2)] = inst_63378);

(statearr_63497_63570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (36))){
var inst_63422 = (state_63463[(25)]);
var inst_63426 = cljs.core.chunk_first.call(null,inst_63422);
var inst_63427 = cljs.core.chunk_rest.call(null,inst_63422);
var inst_63428 = cljs.core.count.call(null,inst_63426);
var inst_63403 = inst_63427;
var inst_63404 = inst_63426;
var inst_63405 = inst_63428;
var inst_63406 = (0);
var state_63463__$1 = (function (){var statearr_63498 = state_63463;
(statearr_63498[(10)] = inst_63406);

(statearr_63498[(20)] = inst_63403);

(statearr_63498[(12)] = inst_63404);

(statearr_63498[(21)] = inst_63405);

return statearr_63498;
})();
var statearr_63499_63571 = state_63463__$1;
(statearr_63499_63571[(2)] = null);

(statearr_63499_63571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (41))){
var inst_63422 = (state_63463[(25)]);
var inst_63438 = (state_63463[(2)]);
var inst_63439 = cljs.core.next.call(null,inst_63422);
var inst_63403 = inst_63439;
var inst_63404 = null;
var inst_63405 = (0);
var inst_63406 = (0);
var state_63463__$1 = (function (){var statearr_63500 = state_63463;
(statearr_63500[(10)] = inst_63406);

(statearr_63500[(27)] = inst_63438);

(statearr_63500[(20)] = inst_63403);

(statearr_63500[(12)] = inst_63404);

(statearr_63500[(21)] = inst_63405);

return statearr_63500;
})();
var statearr_63501_63572 = state_63463__$1;
(statearr_63501_63572[(2)] = null);

(statearr_63501_63572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (43))){
var state_63463__$1 = state_63463;
var statearr_63502_63573 = state_63463__$1;
(statearr_63502_63573[(2)] = null);

(statearr_63502_63573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (29))){
var inst_63447 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63503_63574 = state_63463__$1;
(statearr_63503_63574[(2)] = inst_63447);

(statearr_63503_63574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (44))){
var inst_63456 = (state_63463[(2)]);
var state_63463__$1 = (function (){var statearr_63504 = state_63463;
(statearr_63504[(28)] = inst_63456);

return statearr_63504;
})();
var statearr_63505_63575 = state_63463__$1;
(statearr_63505_63575[(2)] = null);

(statearr_63505_63575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (6))){
var inst_63395 = (state_63463[(29)]);
var inst_63394 = cljs.core.deref.call(null,cs);
var inst_63395__$1 = cljs.core.keys.call(null,inst_63394);
var inst_63396 = cljs.core.count.call(null,inst_63395__$1);
var inst_63397 = cljs.core.reset_BANG_.call(null,dctr,inst_63396);
var inst_63402 = cljs.core.seq.call(null,inst_63395__$1);
var inst_63403 = inst_63402;
var inst_63404 = null;
var inst_63405 = (0);
var inst_63406 = (0);
var state_63463__$1 = (function (){var statearr_63506 = state_63463;
(statearr_63506[(10)] = inst_63406);

(statearr_63506[(20)] = inst_63403);

(statearr_63506[(12)] = inst_63404);

(statearr_63506[(21)] = inst_63405);

(statearr_63506[(29)] = inst_63395__$1);

(statearr_63506[(30)] = inst_63397);

return statearr_63506;
})();
var statearr_63507_63576 = state_63463__$1;
(statearr_63507_63576[(2)] = null);

(statearr_63507_63576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (28))){
var inst_63422 = (state_63463[(25)]);
var inst_63403 = (state_63463[(20)]);
var inst_63422__$1 = cljs.core.seq.call(null,inst_63403);
var state_63463__$1 = (function (){var statearr_63508 = state_63463;
(statearr_63508[(25)] = inst_63422__$1);

return statearr_63508;
})();
if(inst_63422__$1){
var statearr_63509_63577 = state_63463__$1;
(statearr_63509_63577[(1)] = (33));

} else {
var statearr_63510_63578 = state_63463__$1;
(statearr_63510_63578[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (25))){
var inst_63406 = (state_63463[(10)]);
var inst_63405 = (state_63463[(21)]);
var inst_63408 = (inst_63406 < inst_63405);
var inst_63409 = inst_63408;
var state_63463__$1 = state_63463;
if(cljs.core.truth_(inst_63409)){
var statearr_63511_63579 = state_63463__$1;
(statearr_63511_63579[(1)] = (27));

} else {
var statearr_63512_63580 = state_63463__$1;
(statearr_63512_63580[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (34))){
var state_63463__$1 = state_63463;
var statearr_63513_63581 = state_63463__$1;
(statearr_63513_63581[(2)] = null);

(statearr_63513_63581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (17))){
var state_63463__$1 = state_63463;
var statearr_63514_63582 = state_63463__$1;
(statearr_63514_63582[(2)] = null);

(statearr_63514_63582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (3))){
var inst_63461 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63463__$1,inst_63461);
} else {
if((state_val_63464 === (12))){
var inst_63390 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63515_63583 = state_63463__$1;
(statearr_63515_63583[(2)] = inst_63390);

(statearr_63515_63583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (2))){
var state_63463__$1 = state_63463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63463__$1,(4),ch);
} else {
if((state_val_63464 === (23))){
var state_63463__$1 = state_63463;
var statearr_63516_63584 = state_63463__$1;
(statearr_63516_63584[(2)] = null);

(statearr_63516_63584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (35))){
var inst_63445 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63517_63585 = state_63463__$1;
(statearr_63517_63585[(2)] = inst_63445);

(statearr_63517_63585[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (19))){
var inst_63362 = (state_63463[(7)]);
var inst_63366 = cljs.core.chunk_first.call(null,inst_63362);
var inst_63367 = cljs.core.chunk_rest.call(null,inst_63362);
var inst_63368 = cljs.core.count.call(null,inst_63366);
var inst_63340 = inst_63367;
var inst_63341 = inst_63366;
var inst_63342 = inst_63368;
var inst_63343 = (0);
var state_63463__$1 = (function (){var statearr_63518 = state_63463;
(statearr_63518[(13)] = inst_63341);

(statearr_63518[(15)] = inst_63342);

(statearr_63518[(16)] = inst_63343);

(statearr_63518[(17)] = inst_63340);

return statearr_63518;
})();
var statearr_63519_63586 = state_63463__$1;
(statearr_63519_63586[(2)] = null);

(statearr_63519_63586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (11))){
var inst_63340 = (state_63463[(17)]);
var inst_63362 = (state_63463[(7)]);
var inst_63362__$1 = cljs.core.seq.call(null,inst_63340);
var state_63463__$1 = (function (){var statearr_63520 = state_63463;
(statearr_63520[(7)] = inst_63362__$1);

return statearr_63520;
})();
if(inst_63362__$1){
var statearr_63521_63587 = state_63463__$1;
(statearr_63521_63587[(1)] = (16));

} else {
var statearr_63522_63588 = state_63463__$1;
(statearr_63522_63588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (9))){
var inst_63392 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63523_63589 = state_63463__$1;
(statearr_63523_63589[(2)] = inst_63392);

(statearr_63523_63589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (5))){
var inst_63338 = cljs.core.deref.call(null,cs);
var inst_63339 = cljs.core.seq.call(null,inst_63338);
var inst_63340 = inst_63339;
var inst_63341 = null;
var inst_63342 = (0);
var inst_63343 = (0);
var state_63463__$1 = (function (){var statearr_63524 = state_63463;
(statearr_63524[(13)] = inst_63341);

(statearr_63524[(15)] = inst_63342);

(statearr_63524[(16)] = inst_63343);

(statearr_63524[(17)] = inst_63340);

return statearr_63524;
})();
var statearr_63525_63590 = state_63463__$1;
(statearr_63525_63590[(2)] = null);

(statearr_63525_63590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (14))){
var state_63463__$1 = state_63463;
var statearr_63526_63591 = state_63463__$1;
(statearr_63526_63591[(2)] = null);

(statearr_63526_63591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (45))){
var inst_63453 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63527_63592 = state_63463__$1;
(statearr_63527_63592[(2)] = inst_63453);

(statearr_63527_63592[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (26))){
var inst_63395 = (state_63463[(29)]);
var inst_63449 = (state_63463[(2)]);
var inst_63450 = cljs.core.seq.call(null,inst_63395);
var state_63463__$1 = (function (){var statearr_63528 = state_63463;
(statearr_63528[(31)] = inst_63449);

return statearr_63528;
})();
if(inst_63450){
var statearr_63529_63593 = state_63463__$1;
(statearr_63529_63593[(1)] = (42));

} else {
var statearr_63530_63594 = state_63463__$1;
(statearr_63530_63594[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (16))){
var inst_63362 = (state_63463[(7)]);
var inst_63364 = cljs.core.chunked_seq_QMARK_.call(null,inst_63362);
var state_63463__$1 = state_63463;
if(inst_63364){
var statearr_63531_63595 = state_63463__$1;
(statearr_63531_63595[(1)] = (19));

} else {
var statearr_63532_63596 = state_63463__$1;
(statearr_63532_63596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (38))){
var inst_63442 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63533_63597 = state_63463__$1;
(statearr_63533_63597[(2)] = inst_63442);

(statearr_63533_63597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (30))){
var state_63463__$1 = state_63463;
var statearr_63534_63598 = state_63463__$1;
(statearr_63534_63598[(2)] = null);

(statearr_63534_63598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (10))){
var inst_63341 = (state_63463[(13)]);
var inst_63343 = (state_63463[(16)]);
var inst_63351 = cljs.core._nth.call(null,inst_63341,inst_63343);
var inst_63352 = cljs.core.nth.call(null,inst_63351,(0),null);
var inst_63353 = cljs.core.nth.call(null,inst_63351,(1),null);
var state_63463__$1 = (function (){var statearr_63535 = state_63463;
(statearr_63535[(26)] = inst_63352);

return statearr_63535;
})();
if(cljs.core.truth_(inst_63353)){
var statearr_63536_63599 = state_63463__$1;
(statearr_63536_63599[(1)] = (13));

} else {
var statearr_63537_63600 = state_63463__$1;
(statearr_63537_63600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (18))){
var inst_63388 = (state_63463[(2)]);
var state_63463__$1 = state_63463;
var statearr_63538_63601 = state_63463__$1;
(statearr_63538_63601[(2)] = inst_63388);

(statearr_63538_63601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (42))){
var state_63463__$1 = state_63463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63463__$1,(45),dchan);
} else {
if((state_val_63464 === (37))){
var inst_63422 = (state_63463[(25)]);
var inst_63331 = (state_63463[(11)]);
var inst_63431 = (state_63463[(23)]);
var inst_63431__$1 = cljs.core.first.call(null,inst_63422);
var inst_63432 = cljs.core.async.put_BANG_.call(null,inst_63431__$1,inst_63331,done);
var state_63463__$1 = (function (){var statearr_63539 = state_63463;
(statearr_63539[(23)] = inst_63431__$1);

return statearr_63539;
})();
if(cljs.core.truth_(inst_63432)){
var statearr_63540_63602 = state_63463__$1;
(statearr_63540_63602[(1)] = (39));

} else {
var statearr_63541_63603 = state_63463__$1;
(statearr_63541_63603[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63464 === (8))){
var inst_63342 = (state_63463[(15)]);
var inst_63343 = (state_63463[(16)]);
var inst_63345 = (inst_63343 < inst_63342);
var inst_63346 = inst_63345;
var state_63463__$1 = state_63463;
if(cljs.core.truth_(inst_63346)){
var statearr_63542_63604 = state_63463__$1;
(statearr_63542_63604[(1)] = (10));

} else {
var statearr_63543_63605 = state_63463__$1;
(statearr_63543_63605[(1)] = (11));

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
});})(c__10513__auto___63551,cs,m,dchan,dctr,done))
;
return ((function (switch__10492__auto__,c__10513__auto___63551,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10493__auto__ = null;
var cljs$core$async$mult_$_state_machine__10493__auto____0 = (function (){
var statearr_63547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63547[(0)] = cljs$core$async$mult_$_state_machine__10493__auto__);

(statearr_63547[(1)] = (1));

return statearr_63547;
});
var cljs$core$async$mult_$_state_machine__10493__auto____1 = (function (state_63463){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_63463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e63548){if((e63548 instanceof Object)){
var ex__10496__auto__ = e63548;
var statearr_63549_63606 = state_63463;
(statearr_63549_63606[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63607 = state_63463;
state_63463 = G__63607;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10493__auto__ = function(state_63463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10493__auto____1.call(this,state_63463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10493__auto____0;
cljs$core$async$mult_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10493__auto____1;
return cljs$core$async$mult_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___63551,cs,m,dchan,dctr,done))
})();
var state__10515__auto__ = (function (){var statearr_63550 = f__10514__auto__.call(null);
(statearr_63550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___63551);

return statearr_63550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___63551,cs,m,dchan,dctr,done))
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
var args63608 = [];
var len__7651__auto___63611 = arguments.length;
var i__7652__auto___63612 = (0);
while(true){
if((i__7652__auto___63612 < len__7651__auto___63611)){
args63608.push((arguments[i__7652__auto___63612]));

var G__63613 = (i__7652__auto___63612 + (1));
i__7652__auto___63612 = G__63613;
continue;
} else {
}
break;
}

var G__63610 = args63608.length;
switch (G__63610) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63608.length)].join('')));

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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,ch);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m);
} else {
var m__7207__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,state_map);
} else {
var m__7207__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,state_map);
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
var x__7206__auto__ = (((m == null))?null:m);
var m__7207__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,m,mode);
} else {
var m__7207__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___63625 = arguments.length;
var i__7652__auto___63626 = (0);
while(true){
if((i__7652__auto___63626 < len__7651__auto___63625)){
args__7658__auto__.push((arguments[i__7652__auto___63626]));

var G__63627 = (i__7652__auto___63626 + (1));
i__7652__auto___63626 = G__63627;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63619){
var map__63620 = p__63619;
var map__63620__$1 = ((((!((map__63620 == null)))?((((map__63620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63620):map__63620);
var opts = map__63620__$1;
var statearr_63622_63628 = state;
(statearr_63622_63628[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__63620,map__63620__$1,opts){
return (function (val){
var statearr_63623_63629 = state;
(statearr_63623_63629[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__63620,map__63620__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_63624_63630 = state;
(statearr_63624_63630[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63615){
var G__63616 = cljs.core.first.call(null,seq63615);
var seq63615__$1 = cljs.core.next.call(null,seq63615);
var G__63617 = cljs.core.first.call(null,seq63615__$1);
var seq63615__$2 = cljs.core.next.call(null,seq63615__$1);
var G__63618 = cljs.core.first.call(null,seq63615__$2);
var seq63615__$3 = cljs.core.next.call(null,seq63615__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63616,G__63617,G__63618,seq63615__$3);
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
if(typeof cljs.core.async.t_cljs$core$async63798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63798 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta63799){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta63799 = meta63799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63800,meta63799__$1){
var self__ = this;
var _63800__$1 = this;
return (new cljs.core.async.t_cljs$core$async63798(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta63799__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63800){
var self__ = this;
var _63800__$1 = this;
return self__.meta63799;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async63798.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta63799","meta63799",835673397,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63798";

cljs.core.async.t_cljs$core$async63798.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async63798");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async63798 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async63798(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta63799){
return (new cljs.core.async.t_cljs$core$async63798(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta63799));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async63798(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10513__auto___63965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___63965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___63965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_63902){
var state_val_63903 = (state_63902[(1)]);
if((state_val_63903 === (7))){
var inst_63817 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
var statearr_63904_63966 = state_63902__$1;
(statearr_63904_63966[(2)] = inst_63817);

(statearr_63904_63966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (20))){
var inst_63829 = (state_63902[(7)]);
var state_63902__$1 = state_63902;
var statearr_63905_63967 = state_63902__$1;
(statearr_63905_63967[(2)] = inst_63829);

(statearr_63905_63967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (27))){
var state_63902__$1 = state_63902;
var statearr_63906_63968 = state_63902__$1;
(statearr_63906_63968[(2)] = null);

(statearr_63906_63968[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (1))){
var inst_63804 = (state_63902[(8)]);
var inst_63804__$1 = calc_state.call(null);
var inst_63806 = (inst_63804__$1 == null);
var inst_63807 = cljs.core.not.call(null,inst_63806);
var state_63902__$1 = (function (){var statearr_63907 = state_63902;
(statearr_63907[(8)] = inst_63804__$1);

return statearr_63907;
})();
if(inst_63807){
var statearr_63908_63969 = state_63902__$1;
(statearr_63908_63969[(1)] = (2));

} else {
var statearr_63909_63970 = state_63902__$1;
(statearr_63909_63970[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (24))){
var inst_63862 = (state_63902[(9)]);
var inst_63876 = (state_63902[(10)]);
var inst_63853 = (state_63902[(11)]);
var inst_63876__$1 = inst_63853.call(null,inst_63862);
var state_63902__$1 = (function (){var statearr_63910 = state_63902;
(statearr_63910[(10)] = inst_63876__$1);

return statearr_63910;
})();
if(cljs.core.truth_(inst_63876__$1)){
var statearr_63911_63971 = state_63902__$1;
(statearr_63911_63971[(1)] = (29));

} else {
var statearr_63912_63972 = state_63902__$1;
(statearr_63912_63972[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (4))){
var inst_63820 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63820)){
var statearr_63913_63973 = state_63902__$1;
(statearr_63913_63973[(1)] = (8));

} else {
var statearr_63914_63974 = state_63902__$1;
(statearr_63914_63974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (15))){
var inst_63847 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63847)){
var statearr_63915_63975 = state_63902__$1;
(statearr_63915_63975[(1)] = (19));

} else {
var statearr_63916_63976 = state_63902__$1;
(statearr_63916_63976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (21))){
var inst_63852 = (state_63902[(12)]);
var inst_63852__$1 = (state_63902[(2)]);
var inst_63853 = cljs.core.get.call(null,inst_63852__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63854 = cljs.core.get.call(null,inst_63852__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63855 = cljs.core.get.call(null,inst_63852__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63902__$1 = (function (){var statearr_63917 = state_63902;
(statearr_63917[(13)] = inst_63854);

(statearr_63917[(12)] = inst_63852__$1);

(statearr_63917[(11)] = inst_63853);

return statearr_63917;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_63902__$1,(22),inst_63855);
} else {
if((state_val_63903 === (31))){
var inst_63884 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63884)){
var statearr_63918_63977 = state_63902__$1;
(statearr_63918_63977[(1)] = (32));

} else {
var statearr_63919_63978 = state_63902__$1;
(statearr_63919_63978[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (32))){
var inst_63861 = (state_63902[(14)]);
var state_63902__$1 = state_63902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63902__$1,(35),out,inst_63861);
} else {
if((state_val_63903 === (33))){
var inst_63852 = (state_63902[(12)]);
var inst_63829 = inst_63852;
var state_63902__$1 = (function (){var statearr_63920 = state_63902;
(statearr_63920[(7)] = inst_63829);

return statearr_63920;
})();
var statearr_63921_63979 = state_63902__$1;
(statearr_63921_63979[(2)] = null);

(statearr_63921_63979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (13))){
var inst_63829 = (state_63902[(7)]);
var inst_63836 = inst_63829.cljs$lang$protocol_mask$partition0$;
var inst_63837 = (inst_63836 & (64));
var inst_63838 = inst_63829.cljs$core$ISeq$;
var inst_63839 = (cljs.core.PROTOCOL_SENTINEL === inst_63838);
var inst_63840 = (inst_63837) || (inst_63839);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63840)){
var statearr_63922_63980 = state_63902__$1;
(statearr_63922_63980[(1)] = (16));

} else {
var statearr_63923_63981 = state_63902__$1;
(statearr_63923_63981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (22))){
var inst_63862 = (state_63902[(9)]);
var inst_63861 = (state_63902[(14)]);
var inst_63860 = (state_63902[(2)]);
var inst_63861__$1 = cljs.core.nth.call(null,inst_63860,(0),null);
var inst_63862__$1 = cljs.core.nth.call(null,inst_63860,(1),null);
var inst_63863 = (inst_63861__$1 == null);
var inst_63864 = cljs.core._EQ_.call(null,inst_63862__$1,change);
var inst_63865 = (inst_63863) || (inst_63864);
var state_63902__$1 = (function (){var statearr_63924 = state_63902;
(statearr_63924[(9)] = inst_63862__$1);

(statearr_63924[(14)] = inst_63861__$1);

return statearr_63924;
})();
if(cljs.core.truth_(inst_63865)){
var statearr_63925_63982 = state_63902__$1;
(statearr_63925_63982[(1)] = (23));

} else {
var statearr_63926_63983 = state_63902__$1;
(statearr_63926_63983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (36))){
var inst_63852 = (state_63902[(12)]);
var inst_63829 = inst_63852;
var state_63902__$1 = (function (){var statearr_63927 = state_63902;
(statearr_63927[(7)] = inst_63829);

return statearr_63927;
})();
var statearr_63928_63984 = state_63902__$1;
(statearr_63928_63984[(2)] = null);

(statearr_63928_63984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (29))){
var inst_63876 = (state_63902[(10)]);
var state_63902__$1 = state_63902;
var statearr_63929_63985 = state_63902__$1;
(statearr_63929_63985[(2)] = inst_63876);

(statearr_63929_63985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (6))){
var state_63902__$1 = state_63902;
var statearr_63930_63986 = state_63902__$1;
(statearr_63930_63986[(2)] = false);

(statearr_63930_63986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (28))){
var inst_63872 = (state_63902[(2)]);
var inst_63873 = calc_state.call(null);
var inst_63829 = inst_63873;
var state_63902__$1 = (function (){var statearr_63931 = state_63902;
(statearr_63931[(7)] = inst_63829);

(statearr_63931[(15)] = inst_63872);

return statearr_63931;
})();
var statearr_63932_63987 = state_63902__$1;
(statearr_63932_63987[(2)] = null);

(statearr_63932_63987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (25))){
var inst_63898 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
var statearr_63933_63988 = state_63902__$1;
(statearr_63933_63988[(2)] = inst_63898);

(statearr_63933_63988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (34))){
var inst_63896 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
var statearr_63934_63989 = state_63902__$1;
(statearr_63934_63989[(2)] = inst_63896);

(statearr_63934_63989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (17))){
var state_63902__$1 = state_63902;
var statearr_63935_63990 = state_63902__$1;
(statearr_63935_63990[(2)] = false);

(statearr_63935_63990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (3))){
var state_63902__$1 = state_63902;
var statearr_63936_63991 = state_63902__$1;
(statearr_63936_63991[(2)] = false);

(statearr_63936_63991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (12))){
var inst_63900 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63902__$1,inst_63900);
} else {
if((state_val_63903 === (2))){
var inst_63804 = (state_63902[(8)]);
var inst_63809 = inst_63804.cljs$lang$protocol_mask$partition0$;
var inst_63810 = (inst_63809 & (64));
var inst_63811 = inst_63804.cljs$core$ISeq$;
var inst_63812 = (cljs.core.PROTOCOL_SENTINEL === inst_63811);
var inst_63813 = (inst_63810) || (inst_63812);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63813)){
var statearr_63937_63992 = state_63902__$1;
(statearr_63937_63992[(1)] = (5));

} else {
var statearr_63938_63993 = state_63902__$1;
(statearr_63938_63993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (23))){
var inst_63861 = (state_63902[(14)]);
var inst_63867 = (inst_63861 == null);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63867)){
var statearr_63939_63994 = state_63902__$1;
(statearr_63939_63994[(1)] = (26));

} else {
var statearr_63940_63995 = state_63902__$1;
(statearr_63940_63995[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (35))){
var inst_63887 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
if(cljs.core.truth_(inst_63887)){
var statearr_63941_63996 = state_63902__$1;
(statearr_63941_63996[(1)] = (36));

} else {
var statearr_63942_63997 = state_63902__$1;
(statearr_63942_63997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (19))){
var inst_63829 = (state_63902[(7)]);
var inst_63849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63829);
var state_63902__$1 = state_63902;
var statearr_63943_63998 = state_63902__$1;
(statearr_63943_63998[(2)] = inst_63849);

(statearr_63943_63998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (11))){
var inst_63829 = (state_63902[(7)]);
var inst_63833 = (inst_63829 == null);
var inst_63834 = cljs.core.not.call(null,inst_63833);
var state_63902__$1 = state_63902;
if(inst_63834){
var statearr_63944_63999 = state_63902__$1;
(statearr_63944_63999[(1)] = (13));

} else {
var statearr_63945_64000 = state_63902__$1;
(statearr_63945_64000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (9))){
var inst_63804 = (state_63902[(8)]);
var state_63902__$1 = state_63902;
var statearr_63946_64001 = state_63902__$1;
(statearr_63946_64001[(2)] = inst_63804);

(statearr_63946_64001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (5))){
var state_63902__$1 = state_63902;
var statearr_63947_64002 = state_63902__$1;
(statearr_63947_64002[(2)] = true);

(statearr_63947_64002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (14))){
var state_63902__$1 = state_63902;
var statearr_63948_64003 = state_63902__$1;
(statearr_63948_64003[(2)] = false);

(statearr_63948_64003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (26))){
var inst_63862 = (state_63902[(9)]);
var inst_63869 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_63862);
var state_63902__$1 = state_63902;
var statearr_63949_64004 = state_63902__$1;
(statearr_63949_64004[(2)] = inst_63869);

(statearr_63949_64004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (16))){
var state_63902__$1 = state_63902;
var statearr_63950_64005 = state_63902__$1;
(statearr_63950_64005[(2)] = true);

(statearr_63950_64005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (38))){
var inst_63892 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
var statearr_63951_64006 = state_63902__$1;
(statearr_63951_64006[(2)] = inst_63892);

(statearr_63951_64006[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (30))){
var inst_63854 = (state_63902[(13)]);
var inst_63862 = (state_63902[(9)]);
var inst_63853 = (state_63902[(11)]);
var inst_63879 = cljs.core.empty_QMARK_.call(null,inst_63853);
var inst_63880 = inst_63854.call(null,inst_63862);
var inst_63881 = cljs.core.not.call(null,inst_63880);
var inst_63882 = (inst_63879) && (inst_63881);
var state_63902__$1 = state_63902;
var statearr_63952_64007 = state_63902__$1;
(statearr_63952_64007[(2)] = inst_63882);

(statearr_63952_64007[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (10))){
var inst_63804 = (state_63902[(8)]);
var inst_63825 = (state_63902[(2)]);
var inst_63826 = cljs.core.get.call(null,inst_63825,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63827 = cljs.core.get.call(null,inst_63825,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63828 = cljs.core.get.call(null,inst_63825,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63829 = inst_63804;
var state_63902__$1 = (function (){var statearr_63953 = state_63902;
(statearr_63953[(7)] = inst_63829);

(statearr_63953[(16)] = inst_63828);

(statearr_63953[(17)] = inst_63826);

(statearr_63953[(18)] = inst_63827);

return statearr_63953;
})();
var statearr_63954_64008 = state_63902__$1;
(statearr_63954_64008[(2)] = null);

(statearr_63954_64008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (18))){
var inst_63844 = (state_63902[(2)]);
var state_63902__$1 = state_63902;
var statearr_63955_64009 = state_63902__$1;
(statearr_63955_64009[(2)] = inst_63844);

(statearr_63955_64009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (37))){
var state_63902__$1 = state_63902;
var statearr_63956_64010 = state_63902__$1;
(statearr_63956_64010[(2)] = null);

(statearr_63956_64010[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63903 === (8))){
var inst_63804 = (state_63902[(8)]);
var inst_63822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63804);
var state_63902__$1 = state_63902;
var statearr_63957_64011 = state_63902__$1;
(statearr_63957_64011[(2)] = inst_63822);

(statearr_63957_64011[(1)] = (10));


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
});})(c__10513__auto___63965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10492__auto__,c__10513__auto___63965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10493__auto__ = null;
var cljs$core$async$mix_$_state_machine__10493__auto____0 = (function (){
var statearr_63961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63961[(0)] = cljs$core$async$mix_$_state_machine__10493__auto__);

(statearr_63961[(1)] = (1));

return statearr_63961;
});
var cljs$core$async$mix_$_state_machine__10493__auto____1 = (function (state_63902){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_63902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e63962){if((e63962 instanceof Object)){
var ex__10496__auto__ = e63962;
var statearr_63963_64012 = state_63902;
(statearr_63963_64012[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64013 = state_63902;
state_63902 = G__64013;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10493__auto__ = function(state_63902){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10493__auto____1.call(this,state_63902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10493__auto____0;
cljs$core$async$mix_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10493__auto____1;
return cljs$core$async$mix_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___63965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10515__auto__ = (function (){var statearr_63964 = f__10514__auto__.call(null);
(statearr_63964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___63965);

return statearr_63964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___63965,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7207__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v,ch);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args64014 = [];
var len__7651__auto___64017 = arguments.length;
var i__7652__auto___64018 = (0);
while(true){
if((i__7652__auto___64018 < len__7651__auto___64017)){
args64014.push((arguments[i__7652__auto___64018]));

var G__64019 = (i__7652__auto___64018 + (1));
i__7652__auto___64018 = G__64019;
continue;
} else {
}
break;
}

var G__64016 = args64014.length;
switch (G__64016) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64014.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p);
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
var x__7206__auto__ = (((p == null))?null:p);
var m__7207__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,p,v);
} else {
var m__7207__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,p,v);
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
var args64022 = [];
var len__7651__auto___64147 = arguments.length;
var i__7652__auto___64148 = (0);
while(true){
if((i__7652__auto___64148 < len__7651__auto___64147)){
args64022.push((arguments[i__7652__auto___64148]));

var G__64149 = (i__7652__auto___64148 + (1));
i__7652__auto___64148 = G__64149;
continue;
} else {
}
break;
}

var G__64024 = args64022.length;
switch (G__64024) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64022.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6543__auto__,mults){
return (function (p1__64021_SHARP_){
if(cljs.core.truth_(p1__64021_SHARP_.call(null,topic))){
return p1__64021_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__64021_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async64025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64025 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta64026){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta64026 = meta64026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_64027,meta64026__$1){
var self__ = this;
var _64027__$1 = this;
return (new cljs.core.async.t_cljs$core$async64025(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta64026__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_64027){
var self__ = this;
var _64027__$1 = this;
return self__.meta64026;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta64026","meta64026",1734654440,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async64025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64025";

cljs.core.async.t_cljs$core$async64025.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async64025");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async64025 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async64025(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64026){
return (new cljs.core.async.t_cljs$core$async64025(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64026));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async64025(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10513__auto___64151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64151,mults,ensure_mult,p){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64151,mults,ensure_mult,p){
return (function (state_64099){
var state_val_64100 = (state_64099[(1)]);
if((state_val_64100 === (7))){
var inst_64095 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
var statearr_64101_64152 = state_64099__$1;
(statearr_64101_64152[(2)] = inst_64095);

(statearr_64101_64152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (20))){
var state_64099__$1 = state_64099;
var statearr_64102_64153 = state_64099__$1;
(statearr_64102_64153[(2)] = null);

(statearr_64102_64153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (1))){
var state_64099__$1 = state_64099;
var statearr_64103_64154 = state_64099__$1;
(statearr_64103_64154[(2)] = null);

(statearr_64103_64154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (24))){
var inst_64078 = (state_64099[(7)]);
var inst_64087 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_64078);
var state_64099__$1 = state_64099;
var statearr_64104_64155 = state_64099__$1;
(statearr_64104_64155[(2)] = inst_64087);

(statearr_64104_64155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (4))){
var inst_64030 = (state_64099[(8)]);
var inst_64030__$1 = (state_64099[(2)]);
var inst_64031 = (inst_64030__$1 == null);
var state_64099__$1 = (function (){var statearr_64105 = state_64099;
(statearr_64105[(8)] = inst_64030__$1);

return statearr_64105;
})();
if(cljs.core.truth_(inst_64031)){
var statearr_64106_64156 = state_64099__$1;
(statearr_64106_64156[(1)] = (5));

} else {
var statearr_64107_64157 = state_64099__$1;
(statearr_64107_64157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (15))){
var inst_64072 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
var statearr_64108_64158 = state_64099__$1;
(statearr_64108_64158[(2)] = inst_64072);

(statearr_64108_64158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (21))){
var inst_64092 = (state_64099[(2)]);
var state_64099__$1 = (function (){var statearr_64109 = state_64099;
(statearr_64109[(9)] = inst_64092);

return statearr_64109;
})();
var statearr_64110_64159 = state_64099__$1;
(statearr_64110_64159[(2)] = null);

(statearr_64110_64159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (13))){
var inst_64054 = (state_64099[(10)]);
var inst_64056 = cljs.core.chunked_seq_QMARK_.call(null,inst_64054);
var state_64099__$1 = state_64099;
if(inst_64056){
var statearr_64111_64160 = state_64099__$1;
(statearr_64111_64160[(1)] = (16));

} else {
var statearr_64112_64161 = state_64099__$1;
(statearr_64112_64161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (22))){
var inst_64084 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
if(cljs.core.truth_(inst_64084)){
var statearr_64113_64162 = state_64099__$1;
(statearr_64113_64162[(1)] = (23));

} else {
var statearr_64114_64163 = state_64099__$1;
(statearr_64114_64163[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (6))){
var inst_64080 = (state_64099[(11)]);
var inst_64078 = (state_64099[(7)]);
var inst_64030 = (state_64099[(8)]);
var inst_64078__$1 = topic_fn.call(null,inst_64030);
var inst_64079 = cljs.core.deref.call(null,mults);
var inst_64080__$1 = cljs.core.get.call(null,inst_64079,inst_64078__$1);
var state_64099__$1 = (function (){var statearr_64115 = state_64099;
(statearr_64115[(11)] = inst_64080__$1);

(statearr_64115[(7)] = inst_64078__$1);

return statearr_64115;
})();
if(cljs.core.truth_(inst_64080__$1)){
var statearr_64116_64164 = state_64099__$1;
(statearr_64116_64164[(1)] = (19));

} else {
var statearr_64117_64165 = state_64099__$1;
(statearr_64117_64165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (25))){
var inst_64089 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
var statearr_64118_64166 = state_64099__$1;
(statearr_64118_64166[(2)] = inst_64089);

(statearr_64118_64166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (17))){
var inst_64054 = (state_64099[(10)]);
var inst_64063 = cljs.core.first.call(null,inst_64054);
var inst_64064 = cljs.core.async.muxch_STAR_.call(null,inst_64063);
var inst_64065 = cljs.core.async.close_BANG_.call(null,inst_64064);
var inst_64066 = cljs.core.next.call(null,inst_64054);
var inst_64040 = inst_64066;
var inst_64041 = null;
var inst_64042 = (0);
var inst_64043 = (0);
var state_64099__$1 = (function (){var statearr_64119 = state_64099;
(statearr_64119[(12)] = inst_64040);

(statearr_64119[(13)] = inst_64065);

(statearr_64119[(14)] = inst_64042);

(statearr_64119[(15)] = inst_64043);

(statearr_64119[(16)] = inst_64041);

return statearr_64119;
})();
var statearr_64120_64167 = state_64099__$1;
(statearr_64120_64167[(2)] = null);

(statearr_64120_64167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (3))){
var inst_64097 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64099__$1,inst_64097);
} else {
if((state_val_64100 === (12))){
var inst_64074 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
var statearr_64121_64168 = state_64099__$1;
(statearr_64121_64168[(2)] = inst_64074);

(statearr_64121_64168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (2))){
var state_64099__$1 = state_64099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64099__$1,(4),ch);
} else {
if((state_val_64100 === (23))){
var state_64099__$1 = state_64099;
var statearr_64122_64169 = state_64099__$1;
(statearr_64122_64169[(2)] = null);

(statearr_64122_64169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (19))){
var inst_64080 = (state_64099[(11)]);
var inst_64030 = (state_64099[(8)]);
var inst_64082 = cljs.core.async.muxch_STAR_.call(null,inst_64080);
var state_64099__$1 = state_64099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64099__$1,(22),inst_64082,inst_64030);
} else {
if((state_val_64100 === (11))){
var inst_64040 = (state_64099[(12)]);
var inst_64054 = (state_64099[(10)]);
var inst_64054__$1 = cljs.core.seq.call(null,inst_64040);
var state_64099__$1 = (function (){var statearr_64123 = state_64099;
(statearr_64123[(10)] = inst_64054__$1);

return statearr_64123;
})();
if(inst_64054__$1){
var statearr_64124_64170 = state_64099__$1;
(statearr_64124_64170[(1)] = (13));

} else {
var statearr_64125_64171 = state_64099__$1;
(statearr_64125_64171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (9))){
var inst_64076 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
var statearr_64126_64172 = state_64099__$1;
(statearr_64126_64172[(2)] = inst_64076);

(statearr_64126_64172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (5))){
var inst_64037 = cljs.core.deref.call(null,mults);
var inst_64038 = cljs.core.vals.call(null,inst_64037);
var inst_64039 = cljs.core.seq.call(null,inst_64038);
var inst_64040 = inst_64039;
var inst_64041 = null;
var inst_64042 = (0);
var inst_64043 = (0);
var state_64099__$1 = (function (){var statearr_64127 = state_64099;
(statearr_64127[(12)] = inst_64040);

(statearr_64127[(14)] = inst_64042);

(statearr_64127[(15)] = inst_64043);

(statearr_64127[(16)] = inst_64041);

return statearr_64127;
})();
var statearr_64128_64173 = state_64099__$1;
(statearr_64128_64173[(2)] = null);

(statearr_64128_64173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (14))){
var state_64099__$1 = state_64099;
var statearr_64132_64174 = state_64099__$1;
(statearr_64132_64174[(2)] = null);

(statearr_64132_64174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (16))){
var inst_64054 = (state_64099[(10)]);
var inst_64058 = cljs.core.chunk_first.call(null,inst_64054);
var inst_64059 = cljs.core.chunk_rest.call(null,inst_64054);
var inst_64060 = cljs.core.count.call(null,inst_64058);
var inst_64040 = inst_64059;
var inst_64041 = inst_64058;
var inst_64042 = inst_64060;
var inst_64043 = (0);
var state_64099__$1 = (function (){var statearr_64133 = state_64099;
(statearr_64133[(12)] = inst_64040);

(statearr_64133[(14)] = inst_64042);

(statearr_64133[(15)] = inst_64043);

(statearr_64133[(16)] = inst_64041);

return statearr_64133;
})();
var statearr_64134_64175 = state_64099__$1;
(statearr_64134_64175[(2)] = null);

(statearr_64134_64175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (10))){
var inst_64040 = (state_64099[(12)]);
var inst_64042 = (state_64099[(14)]);
var inst_64043 = (state_64099[(15)]);
var inst_64041 = (state_64099[(16)]);
var inst_64048 = cljs.core._nth.call(null,inst_64041,inst_64043);
var inst_64049 = cljs.core.async.muxch_STAR_.call(null,inst_64048);
var inst_64050 = cljs.core.async.close_BANG_.call(null,inst_64049);
var inst_64051 = (inst_64043 + (1));
var tmp64129 = inst_64040;
var tmp64130 = inst_64042;
var tmp64131 = inst_64041;
var inst_64040__$1 = tmp64129;
var inst_64041__$1 = tmp64131;
var inst_64042__$1 = tmp64130;
var inst_64043__$1 = inst_64051;
var state_64099__$1 = (function (){var statearr_64135 = state_64099;
(statearr_64135[(12)] = inst_64040__$1);

(statearr_64135[(14)] = inst_64042__$1);

(statearr_64135[(15)] = inst_64043__$1);

(statearr_64135[(17)] = inst_64050);

(statearr_64135[(16)] = inst_64041__$1);

return statearr_64135;
})();
var statearr_64136_64176 = state_64099__$1;
(statearr_64136_64176[(2)] = null);

(statearr_64136_64176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (18))){
var inst_64069 = (state_64099[(2)]);
var state_64099__$1 = state_64099;
var statearr_64137_64177 = state_64099__$1;
(statearr_64137_64177[(2)] = inst_64069);

(statearr_64137_64177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64100 === (8))){
var inst_64042 = (state_64099[(14)]);
var inst_64043 = (state_64099[(15)]);
var inst_64045 = (inst_64043 < inst_64042);
var inst_64046 = inst_64045;
var state_64099__$1 = state_64099;
if(cljs.core.truth_(inst_64046)){
var statearr_64138_64178 = state_64099__$1;
(statearr_64138_64178[(1)] = (10));

} else {
var statearr_64139_64179 = state_64099__$1;
(statearr_64139_64179[(1)] = (11));

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
});})(c__10513__auto___64151,mults,ensure_mult,p))
;
return ((function (switch__10492__auto__,c__10513__auto___64151,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64143[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64143[(1)] = (1));

return statearr_64143;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64099){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64144){if((e64144 instanceof Object)){
var ex__10496__auto__ = e64144;
var statearr_64145_64180 = state_64099;
(statearr_64145_64180[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64181 = state_64099;
state_64099 = G__64181;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64151,mults,ensure_mult,p))
})();
var state__10515__auto__ = (function (){var statearr_64146 = f__10514__auto__.call(null);
(statearr_64146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64151);

return statearr_64146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64151,mults,ensure_mult,p))
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
var args64182 = [];
var len__7651__auto___64185 = arguments.length;
var i__7652__auto___64186 = (0);
while(true){
if((i__7652__auto___64186 < len__7651__auto___64185)){
args64182.push((arguments[i__7652__auto___64186]));

var G__64187 = (i__7652__auto___64186 + (1));
i__7652__auto___64186 = G__64187;
continue;
} else {
}
break;
}

var G__64184 = args64182.length;
switch (G__64184) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64182.length)].join('')));

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
var args64189 = [];
var len__7651__auto___64192 = arguments.length;
var i__7652__auto___64193 = (0);
while(true){
if((i__7652__auto___64193 < len__7651__auto___64192)){
args64189.push((arguments[i__7652__auto___64193]));

var G__64194 = (i__7652__auto___64193 + (1));
i__7652__auto___64193 = G__64194;
continue;
} else {
}
break;
}

var G__64191 = args64189.length;
switch (G__64191) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64189.length)].join('')));

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
var args64196 = [];
var len__7651__auto___64267 = arguments.length;
var i__7652__auto___64268 = (0);
while(true){
if((i__7652__auto___64268 < len__7651__auto___64267)){
args64196.push((arguments[i__7652__auto___64268]));

var G__64269 = (i__7652__auto___64268 + (1));
i__7652__auto___64268 = G__64269;
continue;
} else {
}
break;
}

var G__64198 = args64196.length;
switch (G__64198) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64196.length)].join('')));

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
var c__10513__auto___64271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_64237){
var state_val_64238 = (state_64237[(1)]);
if((state_val_64238 === (7))){
var state_64237__$1 = state_64237;
var statearr_64239_64272 = state_64237__$1;
(statearr_64239_64272[(2)] = null);

(statearr_64239_64272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (1))){
var state_64237__$1 = state_64237;
var statearr_64240_64273 = state_64237__$1;
(statearr_64240_64273[(2)] = null);

(statearr_64240_64273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (4))){
var inst_64201 = (state_64237[(7)]);
var inst_64203 = (inst_64201 < cnt);
var state_64237__$1 = state_64237;
if(cljs.core.truth_(inst_64203)){
var statearr_64241_64274 = state_64237__$1;
(statearr_64241_64274[(1)] = (6));

} else {
var statearr_64242_64275 = state_64237__$1;
(statearr_64242_64275[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (15))){
var inst_64233 = (state_64237[(2)]);
var state_64237__$1 = state_64237;
var statearr_64243_64276 = state_64237__$1;
(statearr_64243_64276[(2)] = inst_64233);

(statearr_64243_64276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (13))){
var inst_64226 = cljs.core.async.close_BANG_.call(null,out);
var state_64237__$1 = state_64237;
var statearr_64244_64277 = state_64237__$1;
(statearr_64244_64277[(2)] = inst_64226);

(statearr_64244_64277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (6))){
var state_64237__$1 = state_64237;
var statearr_64245_64278 = state_64237__$1;
(statearr_64245_64278[(2)] = null);

(statearr_64245_64278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (3))){
var inst_64235 = (state_64237[(2)]);
var state_64237__$1 = state_64237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64237__$1,inst_64235);
} else {
if((state_val_64238 === (12))){
var inst_64223 = (state_64237[(8)]);
var inst_64223__$1 = (state_64237[(2)]);
var inst_64224 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_64223__$1);
var state_64237__$1 = (function (){var statearr_64246 = state_64237;
(statearr_64246[(8)] = inst_64223__$1);

return statearr_64246;
})();
if(cljs.core.truth_(inst_64224)){
var statearr_64247_64279 = state_64237__$1;
(statearr_64247_64279[(1)] = (13));

} else {
var statearr_64248_64280 = state_64237__$1;
(statearr_64248_64280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (2))){
var inst_64200 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_64201 = (0);
var state_64237__$1 = (function (){var statearr_64249 = state_64237;
(statearr_64249[(7)] = inst_64201);

(statearr_64249[(9)] = inst_64200);

return statearr_64249;
})();
var statearr_64250_64281 = state_64237__$1;
(statearr_64250_64281[(2)] = null);

(statearr_64250_64281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (11))){
var inst_64201 = (state_64237[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64237,(10),Object,null,(9));
var inst_64210 = chs__$1.call(null,inst_64201);
var inst_64211 = done.call(null,inst_64201);
var inst_64212 = cljs.core.async.take_BANG_.call(null,inst_64210,inst_64211);
var state_64237__$1 = state_64237;
var statearr_64251_64282 = state_64237__$1;
(statearr_64251_64282[(2)] = inst_64212);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64237__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (9))){
var inst_64201 = (state_64237[(7)]);
var inst_64214 = (state_64237[(2)]);
var inst_64215 = (inst_64201 + (1));
var inst_64201__$1 = inst_64215;
var state_64237__$1 = (function (){var statearr_64252 = state_64237;
(statearr_64252[(7)] = inst_64201__$1);

(statearr_64252[(10)] = inst_64214);

return statearr_64252;
})();
var statearr_64253_64283 = state_64237__$1;
(statearr_64253_64283[(2)] = null);

(statearr_64253_64283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (5))){
var inst_64221 = (state_64237[(2)]);
var state_64237__$1 = (function (){var statearr_64254 = state_64237;
(statearr_64254[(11)] = inst_64221);

return statearr_64254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64237__$1,(12),dchan);
} else {
if((state_val_64238 === (14))){
var inst_64223 = (state_64237[(8)]);
var inst_64228 = cljs.core.apply.call(null,f,inst_64223);
var state_64237__$1 = state_64237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64237__$1,(16),out,inst_64228);
} else {
if((state_val_64238 === (16))){
var inst_64230 = (state_64237[(2)]);
var state_64237__$1 = (function (){var statearr_64255 = state_64237;
(statearr_64255[(12)] = inst_64230);

return statearr_64255;
})();
var statearr_64256_64284 = state_64237__$1;
(statearr_64256_64284[(2)] = null);

(statearr_64256_64284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (10))){
var inst_64205 = (state_64237[(2)]);
var inst_64206 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_64237__$1 = (function (){var statearr_64257 = state_64237;
(statearr_64257[(13)] = inst_64205);

return statearr_64257;
})();
var statearr_64258_64285 = state_64237__$1;
(statearr_64258_64285[(2)] = inst_64206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64237__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64238 === (8))){
var inst_64219 = (state_64237[(2)]);
var state_64237__$1 = state_64237;
var statearr_64259_64286 = state_64237__$1;
(statearr_64259_64286[(2)] = inst_64219);

(statearr_64259_64286[(1)] = (5));


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
});})(c__10513__auto___64271,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10492__auto__,c__10513__auto___64271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64263[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64263[(1)] = (1));

return statearr_64263;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64237){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64264){if((e64264 instanceof Object)){
var ex__10496__auto__ = e64264;
var statearr_64265_64287 = state_64237;
(statearr_64265_64287[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64288 = state_64237;
state_64237 = G__64288;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64271,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10515__auto__ = (function (){var statearr_64266 = f__10514__auto__.call(null);
(statearr_64266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64271);

return statearr_64266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64271,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args64290 = [];
var len__7651__auto___64348 = arguments.length;
var i__7652__auto___64349 = (0);
while(true){
if((i__7652__auto___64349 < len__7651__auto___64348)){
args64290.push((arguments[i__7652__auto___64349]));

var G__64350 = (i__7652__auto___64349 + (1));
i__7652__auto___64349 = G__64350;
continue;
} else {
}
break;
}

var G__64292 = args64290.length;
switch (G__64292) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64290.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___64352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64352,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64352,out){
return (function (state_64324){
var state_val_64325 = (state_64324[(1)]);
if((state_val_64325 === (7))){
var inst_64303 = (state_64324[(7)]);
var inst_64304 = (state_64324[(8)]);
var inst_64303__$1 = (state_64324[(2)]);
var inst_64304__$1 = cljs.core.nth.call(null,inst_64303__$1,(0),null);
var inst_64305 = cljs.core.nth.call(null,inst_64303__$1,(1),null);
var inst_64306 = (inst_64304__$1 == null);
var state_64324__$1 = (function (){var statearr_64326 = state_64324;
(statearr_64326[(7)] = inst_64303__$1);

(statearr_64326[(9)] = inst_64305);

(statearr_64326[(8)] = inst_64304__$1);

return statearr_64326;
})();
if(cljs.core.truth_(inst_64306)){
var statearr_64327_64353 = state_64324__$1;
(statearr_64327_64353[(1)] = (8));

} else {
var statearr_64328_64354 = state_64324__$1;
(statearr_64328_64354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (1))){
var inst_64293 = cljs.core.vec.call(null,chs);
var inst_64294 = inst_64293;
var state_64324__$1 = (function (){var statearr_64329 = state_64324;
(statearr_64329[(10)] = inst_64294);

return statearr_64329;
})();
var statearr_64330_64355 = state_64324__$1;
(statearr_64330_64355[(2)] = null);

(statearr_64330_64355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (4))){
var inst_64294 = (state_64324[(10)]);
var state_64324__$1 = state_64324;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64324__$1,(7),inst_64294);
} else {
if((state_val_64325 === (6))){
var inst_64320 = (state_64324[(2)]);
var state_64324__$1 = state_64324;
var statearr_64331_64356 = state_64324__$1;
(statearr_64331_64356[(2)] = inst_64320);

(statearr_64331_64356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (3))){
var inst_64322 = (state_64324[(2)]);
var state_64324__$1 = state_64324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64324__$1,inst_64322);
} else {
if((state_val_64325 === (2))){
var inst_64294 = (state_64324[(10)]);
var inst_64296 = cljs.core.count.call(null,inst_64294);
var inst_64297 = (inst_64296 > (0));
var state_64324__$1 = state_64324;
if(cljs.core.truth_(inst_64297)){
var statearr_64333_64357 = state_64324__$1;
(statearr_64333_64357[(1)] = (4));

} else {
var statearr_64334_64358 = state_64324__$1;
(statearr_64334_64358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (11))){
var inst_64294 = (state_64324[(10)]);
var inst_64313 = (state_64324[(2)]);
var tmp64332 = inst_64294;
var inst_64294__$1 = tmp64332;
var state_64324__$1 = (function (){var statearr_64335 = state_64324;
(statearr_64335[(11)] = inst_64313);

(statearr_64335[(10)] = inst_64294__$1);

return statearr_64335;
})();
var statearr_64336_64359 = state_64324__$1;
(statearr_64336_64359[(2)] = null);

(statearr_64336_64359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (9))){
var inst_64304 = (state_64324[(8)]);
var state_64324__$1 = state_64324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64324__$1,(11),out,inst_64304);
} else {
if((state_val_64325 === (5))){
var inst_64318 = cljs.core.async.close_BANG_.call(null,out);
var state_64324__$1 = state_64324;
var statearr_64337_64360 = state_64324__$1;
(statearr_64337_64360[(2)] = inst_64318);

(statearr_64337_64360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (10))){
var inst_64316 = (state_64324[(2)]);
var state_64324__$1 = state_64324;
var statearr_64338_64361 = state_64324__$1;
(statearr_64338_64361[(2)] = inst_64316);

(statearr_64338_64361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64325 === (8))){
var inst_64294 = (state_64324[(10)]);
var inst_64303 = (state_64324[(7)]);
var inst_64305 = (state_64324[(9)]);
var inst_64304 = (state_64324[(8)]);
var inst_64308 = (function (){var cs = inst_64294;
var vec__64299 = inst_64303;
var v = inst_64304;
var c = inst_64305;
return ((function (cs,vec__64299,v,c,inst_64294,inst_64303,inst_64305,inst_64304,state_val_64325,c__10513__auto___64352,out){
return (function (p1__64289_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__64289_SHARP_);
});
;})(cs,vec__64299,v,c,inst_64294,inst_64303,inst_64305,inst_64304,state_val_64325,c__10513__auto___64352,out))
})();
var inst_64309 = cljs.core.filterv.call(null,inst_64308,inst_64294);
var inst_64294__$1 = inst_64309;
var state_64324__$1 = (function (){var statearr_64339 = state_64324;
(statearr_64339[(10)] = inst_64294__$1);

return statearr_64339;
})();
var statearr_64340_64362 = state_64324__$1;
(statearr_64340_64362[(2)] = null);

(statearr_64340_64362[(1)] = (2));


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
});})(c__10513__auto___64352,out))
;
return ((function (switch__10492__auto__,c__10513__auto___64352,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64344 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64344[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64344[(1)] = (1));

return statearr_64344;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64324){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64345){if((e64345 instanceof Object)){
var ex__10496__auto__ = e64345;
var statearr_64346_64363 = state_64324;
(statearr_64346_64363[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64364 = state_64324;
state_64324 = G__64364;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64352,out))
})();
var state__10515__auto__ = (function (){var statearr_64347 = f__10514__auto__.call(null);
(statearr_64347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64352);

return statearr_64347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64352,out))
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
var args64365 = [];
var len__7651__auto___64414 = arguments.length;
var i__7652__auto___64415 = (0);
while(true){
if((i__7652__auto___64415 < len__7651__auto___64414)){
args64365.push((arguments[i__7652__auto___64415]));

var G__64416 = (i__7652__auto___64415 + (1));
i__7652__auto___64415 = G__64416;
continue;
} else {
}
break;
}

var G__64367 = args64365.length;
switch (G__64367) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64365.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___64418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64418,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64418,out){
return (function (state_64391){
var state_val_64392 = (state_64391[(1)]);
if((state_val_64392 === (7))){
var inst_64373 = (state_64391[(7)]);
var inst_64373__$1 = (state_64391[(2)]);
var inst_64374 = (inst_64373__$1 == null);
var inst_64375 = cljs.core.not.call(null,inst_64374);
var state_64391__$1 = (function (){var statearr_64393 = state_64391;
(statearr_64393[(7)] = inst_64373__$1);

return statearr_64393;
})();
if(inst_64375){
var statearr_64394_64419 = state_64391__$1;
(statearr_64394_64419[(1)] = (8));

} else {
var statearr_64395_64420 = state_64391__$1;
(statearr_64395_64420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (1))){
var inst_64368 = (0);
var state_64391__$1 = (function (){var statearr_64396 = state_64391;
(statearr_64396[(8)] = inst_64368);

return statearr_64396;
})();
var statearr_64397_64421 = state_64391__$1;
(statearr_64397_64421[(2)] = null);

(statearr_64397_64421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (4))){
var state_64391__$1 = state_64391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64391__$1,(7),ch);
} else {
if((state_val_64392 === (6))){
var inst_64386 = (state_64391[(2)]);
var state_64391__$1 = state_64391;
var statearr_64398_64422 = state_64391__$1;
(statearr_64398_64422[(2)] = inst_64386);

(statearr_64398_64422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (3))){
var inst_64388 = (state_64391[(2)]);
var inst_64389 = cljs.core.async.close_BANG_.call(null,out);
var state_64391__$1 = (function (){var statearr_64399 = state_64391;
(statearr_64399[(9)] = inst_64388);

return statearr_64399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64391__$1,inst_64389);
} else {
if((state_val_64392 === (2))){
var inst_64368 = (state_64391[(8)]);
var inst_64370 = (inst_64368 < n);
var state_64391__$1 = state_64391;
if(cljs.core.truth_(inst_64370)){
var statearr_64400_64423 = state_64391__$1;
(statearr_64400_64423[(1)] = (4));

} else {
var statearr_64401_64424 = state_64391__$1;
(statearr_64401_64424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (11))){
var inst_64368 = (state_64391[(8)]);
var inst_64378 = (state_64391[(2)]);
var inst_64379 = (inst_64368 + (1));
var inst_64368__$1 = inst_64379;
var state_64391__$1 = (function (){var statearr_64402 = state_64391;
(statearr_64402[(8)] = inst_64368__$1);

(statearr_64402[(10)] = inst_64378);

return statearr_64402;
})();
var statearr_64403_64425 = state_64391__$1;
(statearr_64403_64425[(2)] = null);

(statearr_64403_64425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (9))){
var state_64391__$1 = state_64391;
var statearr_64404_64426 = state_64391__$1;
(statearr_64404_64426[(2)] = null);

(statearr_64404_64426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (5))){
var state_64391__$1 = state_64391;
var statearr_64405_64427 = state_64391__$1;
(statearr_64405_64427[(2)] = null);

(statearr_64405_64427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (10))){
var inst_64383 = (state_64391[(2)]);
var state_64391__$1 = state_64391;
var statearr_64406_64428 = state_64391__$1;
(statearr_64406_64428[(2)] = inst_64383);

(statearr_64406_64428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64392 === (8))){
var inst_64373 = (state_64391[(7)]);
var state_64391__$1 = state_64391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64391__$1,(11),out,inst_64373);
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
});})(c__10513__auto___64418,out))
;
return ((function (switch__10492__auto__,c__10513__auto___64418,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64410[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64410[(1)] = (1));

return statearr_64410;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64391){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64411){if((e64411 instanceof Object)){
var ex__10496__auto__ = e64411;
var statearr_64412_64429 = state_64391;
(statearr_64412_64429[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64430 = state_64391;
state_64391 = G__64430;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64418,out))
})();
var state__10515__auto__ = (function (){var statearr_64413 = f__10514__auto__.call(null);
(statearr_64413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64418);

return statearr_64413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64418,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async64438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64438 = (function (f,ch,meta64439){
this.f = f;
this.ch = ch;
this.meta64439 = meta64439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64440,meta64439__$1){
var self__ = this;
var _64440__$1 = this;
return (new cljs.core.async.t_cljs$core$async64438(self__.f,self__.ch,meta64439__$1));
});

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64440){
var self__ = this;
var _64440__$1 = this;
return self__.meta64439;
});

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async64441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64441 = (function (f,ch,meta64439,_,fn1,meta64442){
this.f = f;
this.ch = ch;
this.meta64439 = meta64439;
this._ = _;
this.fn1 = fn1;
this.meta64442 = meta64442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_64443,meta64442__$1){
var self__ = this;
var _64443__$1 = this;
return (new cljs.core.async.t_cljs$core$async64441(self__.f,self__.ch,self__.meta64439,self__._,self__.fn1,meta64442__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async64441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_64443){
var self__ = this;
var _64443__$1 = this;
return self__.meta64442;
});})(___$1))
;

cljs.core.async.t_cljs$core$async64441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async64441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async64441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__64431_SHARP_){
return f1.call(null,(((p1__64431_SHARP_ == null))?null:self__.f.call(null,p1__64431_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async64441.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64439","meta64439",-623823166,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64438","cljs.core.async/t_cljs$core$async64438",1672062674,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64442","meta64442",-1401187090,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async64441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64441";

cljs.core.async.t_cljs$core$async64441.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async64441");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async64441 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64441(f__$1,ch__$1,meta64439__$1,___$2,fn1__$1,meta64442){
return (new cljs.core.async.t_cljs$core$async64441(f__$1,ch__$1,meta64439__$1,___$2,fn1__$1,meta64442));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async64441(self__.f,self__.ch,self__.meta64439,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6531__auto__ = ret;
if(cljs.core.truth_(and__6531__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6531__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async64438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64439","meta64439",-623823166,null)], null);
});

cljs.core.async.t_cljs$core$async64438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64438";

cljs.core.async.t_cljs$core$async64438.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async64438");
});

cljs.core.async.__GT_t_cljs$core$async64438 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64438(f__$1,ch__$1,meta64439){
return (new cljs.core.async.t_cljs$core$async64438(f__$1,ch__$1,meta64439));
});

}

return (new cljs.core.async.t_cljs$core$async64438(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async64447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64447 = (function (f,ch,meta64448){
this.f = f;
this.ch = ch;
this.meta64448 = meta64448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64449,meta64448__$1){
var self__ = this;
var _64449__$1 = this;
return (new cljs.core.async.t_cljs$core$async64447(self__.f,self__.ch,meta64448__$1));
});

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64449){
var self__ = this;
var _64449__$1 = this;
return self__.meta64448;
});

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async64447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64448","meta64448",247078964,null)], null);
});

cljs.core.async.t_cljs$core$async64447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64447";

cljs.core.async.t_cljs$core$async64447.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async64447");
});

cljs.core.async.__GT_t_cljs$core$async64447 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64447(f__$1,ch__$1,meta64448){
return (new cljs.core.async.t_cljs$core$async64447(f__$1,ch__$1,meta64448));
});

}

return (new cljs.core.async.t_cljs$core$async64447(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async64453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64453 = (function (p,ch,meta64454){
this.p = p;
this.ch = ch;
this.meta64454 = meta64454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64455,meta64454__$1){
var self__ = this;
var _64455__$1 = this;
return (new cljs.core.async.t_cljs$core$async64453(self__.p,self__.ch,meta64454__$1));
});

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64455){
var self__ = this;
var _64455__$1 = this;
return self__.meta64454;
});

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async64453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async64453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64454","meta64454",548633322,null)], null);
});

cljs.core.async.t_cljs$core$async64453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64453";

cljs.core.async.t_cljs$core$async64453.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async64453");
});

cljs.core.async.__GT_t_cljs$core$async64453 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64453(p__$1,ch__$1,meta64454){
return (new cljs.core.async.t_cljs$core$async64453(p__$1,ch__$1,meta64454));
});

}

return (new cljs.core.async.t_cljs$core$async64453(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args64456 = [];
var len__7651__auto___64500 = arguments.length;
var i__7652__auto___64501 = (0);
while(true){
if((i__7652__auto___64501 < len__7651__auto___64500)){
args64456.push((arguments[i__7652__auto___64501]));

var G__64502 = (i__7652__auto___64501 + (1));
i__7652__auto___64501 = G__64502;
continue;
} else {
}
break;
}

var G__64458 = args64456.length;
switch (G__64458) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64456.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___64504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64504,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64504,out){
return (function (state_64479){
var state_val_64480 = (state_64479[(1)]);
if((state_val_64480 === (7))){
var inst_64475 = (state_64479[(2)]);
var state_64479__$1 = state_64479;
var statearr_64481_64505 = state_64479__$1;
(statearr_64481_64505[(2)] = inst_64475);

(statearr_64481_64505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (1))){
var state_64479__$1 = state_64479;
var statearr_64482_64506 = state_64479__$1;
(statearr_64482_64506[(2)] = null);

(statearr_64482_64506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (4))){
var inst_64461 = (state_64479[(7)]);
var inst_64461__$1 = (state_64479[(2)]);
var inst_64462 = (inst_64461__$1 == null);
var state_64479__$1 = (function (){var statearr_64483 = state_64479;
(statearr_64483[(7)] = inst_64461__$1);

return statearr_64483;
})();
if(cljs.core.truth_(inst_64462)){
var statearr_64484_64507 = state_64479__$1;
(statearr_64484_64507[(1)] = (5));

} else {
var statearr_64485_64508 = state_64479__$1;
(statearr_64485_64508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (6))){
var inst_64461 = (state_64479[(7)]);
var inst_64466 = p.call(null,inst_64461);
var state_64479__$1 = state_64479;
if(cljs.core.truth_(inst_64466)){
var statearr_64486_64509 = state_64479__$1;
(statearr_64486_64509[(1)] = (8));

} else {
var statearr_64487_64510 = state_64479__$1;
(statearr_64487_64510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (3))){
var inst_64477 = (state_64479[(2)]);
var state_64479__$1 = state_64479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64479__$1,inst_64477);
} else {
if((state_val_64480 === (2))){
var state_64479__$1 = state_64479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64479__$1,(4),ch);
} else {
if((state_val_64480 === (11))){
var inst_64469 = (state_64479[(2)]);
var state_64479__$1 = state_64479;
var statearr_64488_64511 = state_64479__$1;
(statearr_64488_64511[(2)] = inst_64469);

(statearr_64488_64511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (9))){
var state_64479__$1 = state_64479;
var statearr_64489_64512 = state_64479__$1;
(statearr_64489_64512[(2)] = null);

(statearr_64489_64512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (5))){
var inst_64464 = cljs.core.async.close_BANG_.call(null,out);
var state_64479__$1 = state_64479;
var statearr_64490_64513 = state_64479__$1;
(statearr_64490_64513[(2)] = inst_64464);

(statearr_64490_64513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (10))){
var inst_64472 = (state_64479[(2)]);
var state_64479__$1 = (function (){var statearr_64491 = state_64479;
(statearr_64491[(8)] = inst_64472);

return statearr_64491;
})();
var statearr_64492_64514 = state_64479__$1;
(statearr_64492_64514[(2)] = null);

(statearr_64492_64514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64480 === (8))){
var inst_64461 = (state_64479[(7)]);
var state_64479__$1 = state_64479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64479__$1,(11),out,inst_64461);
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
});})(c__10513__auto___64504,out))
;
return ((function (switch__10492__auto__,c__10513__auto___64504,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64496 = [null,null,null,null,null,null,null,null,null];
(statearr_64496[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64496[(1)] = (1));

return statearr_64496;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64479){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64497){if((e64497 instanceof Object)){
var ex__10496__auto__ = e64497;
var statearr_64498_64515 = state_64479;
(statearr_64498_64515[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64516 = state_64479;
state_64479 = G__64516;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64504,out))
})();
var state__10515__auto__ = (function (){var statearr_64499 = f__10514__auto__.call(null);
(statearr_64499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64504);

return statearr_64499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64504,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args64517 = [];
var len__7651__auto___64520 = arguments.length;
var i__7652__auto___64521 = (0);
while(true){
if((i__7652__auto___64521 < len__7651__auto___64520)){
args64517.push((arguments[i__7652__auto___64521]));

var G__64522 = (i__7652__auto___64521 + (1));
i__7652__auto___64521 = G__64522;
continue;
} else {
}
break;
}

var G__64519 = args64517.length;
switch (G__64519) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64517.length)].join('')));

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
var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__){
return (function (state_64689){
var state_val_64690 = (state_64689[(1)]);
if((state_val_64690 === (7))){
var inst_64685 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
var statearr_64691_64732 = state_64689__$1;
(statearr_64691_64732[(2)] = inst_64685);

(statearr_64691_64732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (20))){
var inst_64655 = (state_64689[(7)]);
var inst_64666 = (state_64689[(2)]);
var inst_64667 = cljs.core.next.call(null,inst_64655);
var inst_64641 = inst_64667;
var inst_64642 = null;
var inst_64643 = (0);
var inst_64644 = (0);
var state_64689__$1 = (function (){var statearr_64692 = state_64689;
(statearr_64692[(8)] = inst_64641);

(statearr_64692[(9)] = inst_64644);

(statearr_64692[(10)] = inst_64642);

(statearr_64692[(11)] = inst_64643);

(statearr_64692[(12)] = inst_64666);

return statearr_64692;
})();
var statearr_64693_64733 = state_64689__$1;
(statearr_64693_64733[(2)] = null);

(statearr_64693_64733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (1))){
var state_64689__$1 = state_64689;
var statearr_64694_64734 = state_64689__$1;
(statearr_64694_64734[(2)] = null);

(statearr_64694_64734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (4))){
var inst_64630 = (state_64689[(13)]);
var inst_64630__$1 = (state_64689[(2)]);
var inst_64631 = (inst_64630__$1 == null);
var state_64689__$1 = (function (){var statearr_64695 = state_64689;
(statearr_64695[(13)] = inst_64630__$1);

return statearr_64695;
})();
if(cljs.core.truth_(inst_64631)){
var statearr_64696_64735 = state_64689__$1;
(statearr_64696_64735[(1)] = (5));

} else {
var statearr_64697_64736 = state_64689__$1;
(statearr_64697_64736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (15))){
var state_64689__$1 = state_64689;
var statearr_64701_64737 = state_64689__$1;
(statearr_64701_64737[(2)] = null);

(statearr_64701_64737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (21))){
var state_64689__$1 = state_64689;
var statearr_64702_64738 = state_64689__$1;
(statearr_64702_64738[(2)] = null);

(statearr_64702_64738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (13))){
var inst_64641 = (state_64689[(8)]);
var inst_64644 = (state_64689[(9)]);
var inst_64642 = (state_64689[(10)]);
var inst_64643 = (state_64689[(11)]);
var inst_64651 = (state_64689[(2)]);
var inst_64652 = (inst_64644 + (1));
var tmp64698 = inst_64641;
var tmp64699 = inst_64642;
var tmp64700 = inst_64643;
var inst_64641__$1 = tmp64698;
var inst_64642__$1 = tmp64699;
var inst_64643__$1 = tmp64700;
var inst_64644__$1 = inst_64652;
var state_64689__$1 = (function (){var statearr_64703 = state_64689;
(statearr_64703[(8)] = inst_64641__$1);

(statearr_64703[(9)] = inst_64644__$1);

(statearr_64703[(10)] = inst_64642__$1);

(statearr_64703[(11)] = inst_64643__$1);

(statearr_64703[(14)] = inst_64651);

return statearr_64703;
})();
var statearr_64704_64739 = state_64689__$1;
(statearr_64704_64739[(2)] = null);

(statearr_64704_64739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (22))){
var state_64689__$1 = state_64689;
var statearr_64705_64740 = state_64689__$1;
(statearr_64705_64740[(2)] = null);

(statearr_64705_64740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (6))){
var inst_64630 = (state_64689[(13)]);
var inst_64639 = f.call(null,inst_64630);
var inst_64640 = cljs.core.seq.call(null,inst_64639);
var inst_64641 = inst_64640;
var inst_64642 = null;
var inst_64643 = (0);
var inst_64644 = (0);
var state_64689__$1 = (function (){var statearr_64706 = state_64689;
(statearr_64706[(8)] = inst_64641);

(statearr_64706[(9)] = inst_64644);

(statearr_64706[(10)] = inst_64642);

(statearr_64706[(11)] = inst_64643);

return statearr_64706;
})();
var statearr_64707_64741 = state_64689__$1;
(statearr_64707_64741[(2)] = null);

(statearr_64707_64741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (17))){
var inst_64655 = (state_64689[(7)]);
var inst_64659 = cljs.core.chunk_first.call(null,inst_64655);
var inst_64660 = cljs.core.chunk_rest.call(null,inst_64655);
var inst_64661 = cljs.core.count.call(null,inst_64659);
var inst_64641 = inst_64660;
var inst_64642 = inst_64659;
var inst_64643 = inst_64661;
var inst_64644 = (0);
var state_64689__$1 = (function (){var statearr_64708 = state_64689;
(statearr_64708[(8)] = inst_64641);

(statearr_64708[(9)] = inst_64644);

(statearr_64708[(10)] = inst_64642);

(statearr_64708[(11)] = inst_64643);

return statearr_64708;
})();
var statearr_64709_64742 = state_64689__$1;
(statearr_64709_64742[(2)] = null);

(statearr_64709_64742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (3))){
var inst_64687 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64689__$1,inst_64687);
} else {
if((state_val_64690 === (12))){
var inst_64675 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
var statearr_64710_64743 = state_64689__$1;
(statearr_64710_64743[(2)] = inst_64675);

(statearr_64710_64743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (2))){
var state_64689__$1 = state_64689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64689__$1,(4),in$);
} else {
if((state_val_64690 === (23))){
var inst_64683 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
var statearr_64711_64744 = state_64689__$1;
(statearr_64711_64744[(2)] = inst_64683);

(statearr_64711_64744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (19))){
var inst_64670 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
var statearr_64712_64745 = state_64689__$1;
(statearr_64712_64745[(2)] = inst_64670);

(statearr_64712_64745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (11))){
var inst_64641 = (state_64689[(8)]);
var inst_64655 = (state_64689[(7)]);
var inst_64655__$1 = cljs.core.seq.call(null,inst_64641);
var state_64689__$1 = (function (){var statearr_64713 = state_64689;
(statearr_64713[(7)] = inst_64655__$1);

return statearr_64713;
})();
if(inst_64655__$1){
var statearr_64714_64746 = state_64689__$1;
(statearr_64714_64746[(1)] = (14));

} else {
var statearr_64715_64747 = state_64689__$1;
(statearr_64715_64747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (9))){
var inst_64677 = (state_64689[(2)]);
var inst_64678 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_64689__$1 = (function (){var statearr_64716 = state_64689;
(statearr_64716[(15)] = inst_64677);

return statearr_64716;
})();
if(cljs.core.truth_(inst_64678)){
var statearr_64717_64748 = state_64689__$1;
(statearr_64717_64748[(1)] = (21));

} else {
var statearr_64718_64749 = state_64689__$1;
(statearr_64718_64749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (5))){
var inst_64633 = cljs.core.async.close_BANG_.call(null,out);
var state_64689__$1 = state_64689;
var statearr_64719_64750 = state_64689__$1;
(statearr_64719_64750[(2)] = inst_64633);

(statearr_64719_64750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (14))){
var inst_64655 = (state_64689[(7)]);
var inst_64657 = cljs.core.chunked_seq_QMARK_.call(null,inst_64655);
var state_64689__$1 = state_64689;
if(inst_64657){
var statearr_64720_64751 = state_64689__$1;
(statearr_64720_64751[(1)] = (17));

} else {
var statearr_64721_64752 = state_64689__$1;
(statearr_64721_64752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (16))){
var inst_64673 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
var statearr_64722_64753 = state_64689__$1;
(statearr_64722_64753[(2)] = inst_64673);

(statearr_64722_64753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (10))){
var inst_64644 = (state_64689[(9)]);
var inst_64642 = (state_64689[(10)]);
var inst_64649 = cljs.core._nth.call(null,inst_64642,inst_64644);
var state_64689__$1 = state_64689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64689__$1,(13),out,inst_64649);
} else {
if((state_val_64690 === (18))){
var inst_64655 = (state_64689[(7)]);
var inst_64664 = cljs.core.first.call(null,inst_64655);
var state_64689__$1 = state_64689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64689__$1,(20),out,inst_64664);
} else {
if((state_val_64690 === (8))){
var inst_64644 = (state_64689[(9)]);
var inst_64643 = (state_64689[(11)]);
var inst_64646 = (inst_64644 < inst_64643);
var inst_64647 = inst_64646;
var state_64689__$1 = state_64689;
if(cljs.core.truth_(inst_64647)){
var statearr_64723_64754 = state_64689__$1;
(statearr_64723_64754[(1)] = (10));

} else {
var statearr_64724_64755 = state_64689__$1;
(statearr_64724_64755[(1)] = (11));

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
});})(c__10513__auto__))
;
return ((function (switch__10492__auto__,c__10513__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_64728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__);

(statearr_64728[(1)] = (1));

return statearr_64728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1 = (function (state_64689){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64729){if((e64729 instanceof Object)){
var ex__10496__auto__ = e64729;
var statearr_64730_64756 = state_64689;
(statearr_64730_64756[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64757 = state_64689;
state_64689 = G__64757;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__ = function(state_64689){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1.call(this,state_64689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_64731 = f__10514__auto__.call(null);
(statearr_64731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_64731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto__))
);

return c__10513__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args64758 = [];
var len__7651__auto___64761 = arguments.length;
var i__7652__auto___64762 = (0);
while(true){
if((i__7652__auto___64762 < len__7651__auto___64761)){
args64758.push((arguments[i__7652__auto___64762]));

var G__64763 = (i__7652__auto___64762 + (1));
i__7652__auto___64762 = G__64763;
continue;
} else {
}
break;
}

var G__64760 = args64758.length;
switch (G__64760) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64758.length)].join('')));

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
var args64765 = [];
var len__7651__auto___64768 = arguments.length;
var i__7652__auto___64769 = (0);
while(true){
if((i__7652__auto___64769 < len__7651__auto___64768)){
args64765.push((arguments[i__7652__auto___64769]));

var G__64770 = (i__7652__auto___64769 + (1));
i__7652__auto___64769 = G__64770;
continue;
} else {
}
break;
}

var G__64767 = args64765.length;
switch (G__64767) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64765.length)].join('')));

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
var args64772 = [];
var len__7651__auto___64823 = arguments.length;
var i__7652__auto___64824 = (0);
while(true){
if((i__7652__auto___64824 < len__7651__auto___64823)){
args64772.push((arguments[i__7652__auto___64824]));

var G__64825 = (i__7652__auto___64824 + (1));
i__7652__auto___64824 = G__64825;
continue;
} else {
}
break;
}

var G__64774 = args64772.length;
switch (G__64774) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64772.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___64827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64827,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64827,out){
return (function (state_64798){
var state_val_64799 = (state_64798[(1)]);
if((state_val_64799 === (7))){
var inst_64793 = (state_64798[(2)]);
var state_64798__$1 = state_64798;
var statearr_64800_64828 = state_64798__$1;
(statearr_64800_64828[(2)] = inst_64793);

(statearr_64800_64828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (1))){
var inst_64775 = null;
var state_64798__$1 = (function (){var statearr_64801 = state_64798;
(statearr_64801[(7)] = inst_64775);

return statearr_64801;
})();
var statearr_64802_64829 = state_64798__$1;
(statearr_64802_64829[(2)] = null);

(statearr_64802_64829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (4))){
var inst_64778 = (state_64798[(8)]);
var inst_64778__$1 = (state_64798[(2)]);
var inst_64779 = (inst_64778__$1 == null);
var inst_64780 = cljs.core.not.call(null,inst_64779);
var state_64798__$1 = (function (){var statearr_64803 = state_64798;
(statearr_64803[(8)] = inst_64778__$1);

return statearr_64803;
})();
if(inst_64780){
var statearr_64804_64830 = state_64798__$1;
(statearr_64804_64830[(1)] = (5));

} else {
var statearr_64805_64831 = state_64798__$1;
(statearr_64805_64831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (6))){
var state_64798__$1 = state_64798;
var statearr_64806_64832 = state_64798__$1;
(statearr_64806_64832[(2)] = null);

(statearr_64806_64832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (3))){
var inst_64795 = (state_64798[(2)]);
var inst_64796 = cljs.core.async.close_BANG_.call(null,out);
var state_64798__$1 = (function (){var statearr_64807 = state_64798;
(statearr_64807[(9)] = inst_64795);

return statearr_64807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64798__$1,inst_64796);
} else {
if((state_val_64799 === (2))){
var state_64798__$1 = state_64798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64798__$1,(4),ch);
} else {
if((state_val_64799 === (11))){
var inst_64778 = (state_64798[(8)]);
var inst_64787 = (state_64798[(2)]);
var inst_64775 = inst_64778;
var state_64798__$1 = (function (){var statearr_64808 = state_64798;
(statearr_64808[(7)] = inst_64775);

(statearr_64808[(10)] = inst_64787);

return statearr_64808;
})();
var statearr_64809_64833 = state_64798__$1;
(statearr_64809_64833[(2)] = null);

(statearr_64809_64833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (9))){
var inst_64778 = (state_64798[(8)]);
var state_64798__$1 = state_64798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64798__$1,(11),out,inst_64778);
} else {
if((state_val_64799 === (5))){
var inst_64775 = (state_64798[(7)]);
var inst_64778 = (state_64798[(8)]);
var inst_64782 = cljs.core._EQ_.call(null,inst_64778,inst_64775);
var state_64798__$1 = state_64798;
if(inst_64782){
var statearr_64811_64834 = state_64798__$1;
(statearr_64811_64834[(1)] = (8));

} else {
var statearr_64812_64835 = state_64798__$1;
(statearr_64812_64835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (10))){
var inst_64790 = (state_64798[(2)]);
var state_64798__$1 = state_64798;
var statearr_64813_64836 = state_64798__$1;
(statearr_64813_64836[(2)] = inst_64790);

(statearr_64813_64836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64799 === (8))){
var inst_64775 = (state_64798[(7)]);
var tmp64810 = inst_64775;
var inst_64775__$1 = tmp64810;
var state_64798__$1 = (function (){var statearr_64814 = state_64798;
(statearr_64814[(7)] = inst_64775__$1);

return statearr_64814;
})();
var statearr_64815_64837 = state_64798__$1;
(statearr_64815_64837[(2)] = null);

(statearr_64815_64837[(1)] = (2));


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
});})(c__10513__auto___64827,out))
;
return ((function (switch__10492__auto__,c__10513__auto___64827,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64819[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64819[(1)] = (1));

return statearr_64819;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64798){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64820){if((e64820 instanceof Object)){
var ex__10496__auto__ = e64820;
var statearr_64821_64838 = state_64798;
(statearr_64821_64838[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64839 = state_64798;
state_64798 = G__64839;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64827,out))
})();
var state__10515__auto__ = (function (){var statearr_64822 = f__10514__auto__.call(null);
(statearr_64822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64827);

return statearr_64822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64827,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args64840 = [];
var len__7651__auto___64910 = arguments.length;
var i__7652__auto___64911 = (0);
while(true){
if((i__7652__auto___64911 < len__7651__auto___64910)){
args64840.push((arguments[i__7652__auto___64911]));

var G__64912 = (i__7652__auto___64911 + (1));
i__7652__auto___64911 = G__64912;
continue;
} else {
}
break;
}

var G__64842 = args64840.length;
switch (G__64842) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64840.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___64914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___64914,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___64914,out){
return (function (state_64880){
var state_val_64881 = (state_64880[(1)]);
if((state_val_64881 === (7))){
var inst_64876 = (state_64880[(2)]);
var state_64880__$1 = state_64880;
var statearr_64882_64915 = state_64880__$1;
(statearr_64882_64915[(2)] = inst_64876);

(statearr_64882_64915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (1))){
var inst_64843 = (new Array(n));
var inst_64844 = inst_64843;
var inst_64845 = (0);
var state_64880__$1 = (function (){var statearr_64883 = state_64880;
(statearr_64883[(7)] = inst_64845);

(statearr_64883[(8)] = inst_64844);

return statearr_64883;
})();
var statearr_64884_64916 = state_64880__$1;
(statearr_64884_64916[(2)] = null);

(statearr_64884_64916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (4))){
var inst_64848 = (state_64880[(9)]);
var inst_64848__$1 = (state_64880[(2)]);
var inst_64849 = (inst_64848__$1 == null);
var inst_64850 = cljs.core.not.call(null,inst_64849);
var state_64880__$1 = (function (){var statearr_64885 = state_64880;
(statearr_64885[(9)] = inst_64848__$1);

return statearr_64885;
})();
if(inst_64850){
var statearr_64886_64917 = state_64880__$1;
(statearr_64886_64917[(1)] = (5));

} else {
var statearr_64887_64918 = state_64880__$1;
(statearr_64887_64918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (15))){
var inst_64870 = (state_64880[(2)]);
var state_64880__$1 = state_64880;
var statearr_64888_64919 = state_64880__$1;
(statearr_64888_64919[(2)] = inst_64870);

(statearr_64888_64919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (13))){
var state_64880__$1 = state_64880;
var statearr_64889_64920 = state_64880__$1;
(statearr_64889_64920[(2)] = null);

(statearr_64889_64920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (6))){
var inst_64845 = (state_64880[(7)]);
var inst_64866 = (inst_64845 > (0));
var state_64880__$1 = state_64880;
if(cljs.core.truth_(inst_64866)){
var statearr_64890_64921 = state_64880__$1;
(statearr_64890_64921[(1)] = (12));

} else {
var statearr_64891_64922 = state_64880__$1;
(statearr_64891_64922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (3))){
var inst_64878 = (state_64880[(2)]);
var state_64880__$1 = state_64880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64880__$1,inst_64878);
} else {
if((state_val_64881 === (12))){
var inst_64844 = (state_64880[(8)]);
var inst_64868 = cljs.core.vec.call(null,inst_64844);
var state_64880__$1 = state_64880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64880__$1,(15),out,inst_64868);
} else {
if((state_val_64881 === (2))){
var state_64880__$1 = state_64880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64880__$1,(4),ch);
} else {
if((state_val_64881 === (11))){
var inst_64860 = (state_64880[(2)]);
var inst_64861 = (new Array(n));
var inst_64844 = inst_64861;
var inst_64845 = (0);
var state_64880__$1 = (function (){var statearr_64892 = state_64880;
(statearr_64892[(7)] = inst_64845);

(statearr_64892[(8)] = inst_64844);

(statearr_64892[(10)] = inst_64860);

return statearr_64892;
})();
var statearr_64893_64923 = state_64880__$1;
(statearr_64893_64923[(2)] = null);

(statearr_64893_64923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (9))){
var inst_64844 = (state_64880[(8)]);
var inst_64858 = cljs.core.vec.call(null,inst_64844);
var state_64880__$1 = state_64880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64880__$1,(11),out,inst_64858);
} else {
if((state_val_64881 === (5))){
var inst_64845 = (state_64880[(7)]);
var inst_64853 = (state_64880[(11)]);
var inst_64844 = (state_64880[(8)]);
var inst_64848 = (state_64880[(9)]);
var inst_64852 = (inst_64844[inst_64845] = inst_64848);
var inst_64853__$1 = (inst_64845 + (1));
var inst_64854 = (inst_64853__$1 < n);
var state_64880__$1 = (function (){var statearr_64894 = state_64880;
(statearr_64894[(11)] = inst_64853__$1);

(statearr_64894[(12)] = inst_64852);

return statearr_64894;
})();
if(cljs.core.truth_(inst_64854)){
var statearr_64895_64924 = state_64880__$1;
(statearr_64895_64924[(1)] = (8));

} else {
var statearr_64896_64925 = state_64880__$1;
(statearr_64896_64925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (14))){
var inst_64873 = (state_64880[(2)]);
var inst_64874 = cljs.core.async.close_BANG_.call(null,out);
var state_64880__$1 = (function (){var statearr_64898 = state_64880;
(statearr_64898[(13)] = inst_64873);

return statearr_64898;
})();
var statearr_64899_64926 = state_64880__$1;
(statearr_64899_64926[(2)] = inst_64874);

(statearr_64899_64926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (10))){
var inst_64864 = (state_64880[(2)]);
var state_64880__$1 = state_64880;
var statearr_64900_64927 = state_64880__$1;
(statearr_64900_64927[(2)] = inst_64864);

(statearr_64900_64927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64881 === (8))){
var inst_64853 = (state_64880[(11)]);
var inst_64844 = (state_64880[(8)]);
var tmp64897 = inst_64844;
var inst_64844__$1 = tmp64897;
var inst_64845 = inst_64853;
var state_64880__$1 = (function (){var statearr_64901 = state_64880;
(statearr_64901[(7)] = inst_64845);

(statearr_64901[(8)] = inst_64844__$1);

return statearr_64901;
})();
var statearr_64902_64928 = state_64880__$1;
(statearr_64902_64928[(2)] = null);

(statearr_64902_64928[(1)] = (2));


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
});})(c__10513__auto___64914,out))
;
return ((function (switch__10492__auto__,c__10513__auto___64914,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_64906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64906[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_64906[(1)] = (1));

return statearr_64906;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64880){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e64907){if((e64907 instanceof Object)){
var ex__10496__auto__ = e64907;
var statearr_64908_64929 = state_64880;
(statearr_64908_64929[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64930 = state_64880;
state_64880 = G__64930;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___64914,out))
})();
var state__10515__auto__ = (function (){var statearr_64909 = f__10514__auto__.call(null);
(statearr_64909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___64914);

return statearr_64909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___64914,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args64931 = [];
var len__7651__auto___65005 = arguments.length;
var i__7652__auto___65006 = (0);
while(true){
if((i__7652__auto___65006 < len__7651__auto___65005)){
args64931.push((arguments[i__7652__auto___65006]));

var G__65007 = (i__7652__auto___65006 + (1));
i__7652__auto___65006 = G__65007;
continue;
} else {
}
break;
}

var G__64933 = args64931.length;
switch (G__64933) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64931.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___65009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___65009,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___65009,out){
return (function (state_64975){
var state_val_64976 = (state_64975[(1)]);
if((state_val_64976 === (7))){
var inst_64971 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64977_65010 = state_64975__$1;
(statearr_64977_65010[(2)] = inst_64971);

(statearr_64977_65010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (1))){
var inst_64934 = [];
var inst_64935 = inst_64934;
var inst_64936 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64975__$1 = (function (){var statearr_64978 = state_64975;
(statearr_64978[(7)] = inst_64935);

(statearr_64978[(8)] = inst_64936);

return statearr_64978;
})();
var statearr_64979_65011 = state_64975__$1;
(statearr_64979_65011[(2)] = null);

(statearr_64979_65011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (4))){
var inst_64939 = (state_64975[(9)]);
var inst_64939__$1 = (state_64975[(2)]);
var inst_64940 = (inst_64939__$1 == null);
var inst_64941 = cljs.core.not.call(null,inst_64940);
var state_64975__$1 = (function (){var statearr_64980 = state_64975;
(statearr_64980[(9)] = inst_64939__$1);

return statearr_64980;
})();
if(inst_64941){
var statearr_64981_65012 = state_64975__$1;
(statearr_64981_65012[(1)] = (5));

} else {
var statearr_64982_65013 = state_64975__$1;
(statearr_64982_65013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (15))){
var inst_64965 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64983_65014 = state_64975__$1;
(statearr_64983_65014[(2)] = inst_64965);

(statearr_64983_65014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (13))){
var state_64975__$1 = state_64975;
var statearr_64984_65015 = state_64975__$1;
(statearr_64984_65015[(2)] = null);

(statearr_64984_65015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (6))){
var inst_64935 = (state_64975[(7)]);
var inst_64960 = inst_64935.length;
var inst_64961 = (inst_64960 > (0));
var state_64975__$1 = state_64975;
if(cljs.core.truth_(inst_64961)){
var statearr_64985_65016 = state_64975__$1;
(statearr_64985_65016[(1)] = (12));

} else {
var statearr_64986_65017 = state_64975__$1;
(statearr_64986_65017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (3))){
var inst_64973 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64975__$1,inst_64973);
} else {
if((state_val_64976 === (12))){
var inst_64935 = (state_64975[(7)]);
var inst_64963 = cljs.core.vec.call(null,inst_64935);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64975__$1,(15),out,inst_64963);
} else {
if((state_val_64976 === (2))){
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64975__$1,(4),ch);
} else {
if((state_val_64976 === (11))){
var inst_64943 = (state_64975[(10)]);
var inst_64939 = (state_64975[(9)]);
var inst_64953 = (state_64975[(2)]);
var inst_64954 = [];
var inst_64955 = inst_64954.push(inst_64939);
var inst_64935 = inst_64954;
var inst_64936 = inst_64943;
var state_64975__$1 = (function (){var statearr_64987 = state_64975;
(statearr_64987[(11)] = inst_64955);

(statearr_64987[(12)] = inst_64953);

(statearr_64987[(7)] = inst_64935);

(statearr_64987[(8)] = inst_64936);

return statearr_64987;
})();
var statearr_64988_65018 = state_64975__$1;
(statearr_64988_65018[(2)] = null);

(statearr_64988_65018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (9))){
var inst_64935 = (state_64975[(7)]);
var inst_64951 = cljs.core.vec.call(null,inst_64935);
var state_64975__$1 = state_64975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64975__$1,(11),out,inst_64951);
} else {
if((state_val_64976 === (5))){
var inst_64943 = (state_64975[(10)]);
var inst_64939 = (state_64975[(9)]);
var inst_64936 = (state_64975[(8)]);
var inst_64943__$1 = f.call(null,inst_64939);
var inst_64944 = cljs.core._EQ_.call(null,inst_64943__$1,inst_64936);
var inst_64945 = cljs.core.keyword_identical_QMARK_.call(null,inst_64936,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64946 = (inst_64944) || (inst_64945);
var state_64975__$1 = (function (){var statearr_64989 = state_64975;
(statearr_64989[(10)] = inst_64943__$1);

return statearr_64989;
})();
if(cljs.core.truth_(inst_64946)){
var statearr_64990_65019 = state_64975__$1;
(statearr_64990_65019[(1)] = (8));

} else {
var statearr_64991_65020 = state_64975__$1;
(statearr_64991_65020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (14))){
var inst_64968 = (state_64975[(2)]);
var inst_64969 = cljs.core.async.close_BANG_.call(null,out);
var state_64975__$1 = (function (){var statearr_64993 = state_64975;
(statearr_64993[(13)] = inst_64968);

return statearr_64993;
})();
var statearr_64994_65021 = state_64975__$1;
(statearr_64994_65021[(2)] = inst_64969);

(statearr_64994_65021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (10))){
var inst_64958 = (state_64975[(2)]);
var state_64975__$1 = state_64975;
var statearr_64995_65022 = state_64975__$1;
(statearr_64995_65022[(2)] = inst_64958);

(statearr_64995_65022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64976 === (8))){
var inst_64943 = (state_64975[(10)]);
var inst_64935 = (state_64975[(7)]);
var inst_64939 = (state_64975[(9)]);
var inst_64948 = inst_64935.push(inst_64939);
var tmp64992 = inst_64935;
var inst_64935__$1 = tmp64992;
var inst_64936 = inst_64943;
var state_64975__$1 = (function (){var statearr_64996 = state_64975;
(statearr_64996[(14)] = inst_64948);

(statearr_64996[(7)] = inst_64935__$1);

(statearr_64996[(8)] = inst_64936);

return statearr_64996;
})();
var statearr_64997_65023 = state_64975__$1;
(statearr_64997_65023[(2)] = null);

(statearr_64997_65023[(1)] = (2));


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
});})(c__10513__auto___65009,out))
;
return ((function (switch__10492__auto__,c__10513__auto___65009,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_65001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65001[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_65001[(1)] = (1));

return statearr_65001;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_64975){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_64975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e65002){if((e65002 instanceof Object)){
var ex__10496__auto__ = e65002;
var statearr_65003_65024 = state_64975;
(statearr_65003_65024[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65025 = state_64975;
state_64975 = G__65025;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_64975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_64975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___65009,out))
})();
var state__10515__auto__ = (function (){var statearr_65004 = f__10514__auto__.call(null);
(statearr_65004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___65009);

return statearr_65004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___65009,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479783841311