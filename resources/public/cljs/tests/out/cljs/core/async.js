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
var args39875 = [];
var len__7651__auto___39881 = arguments.length;
var i__7652__auto___39882 = (0);
while(true){
if((i__7652__auto___39882 < len__7651__auto___39881)){
args39875.push((arguments[i__7652__auto___39882]));

var G__39883 = (i__7652__auto___39882 + (1));
i__7652__auto___39882 = G__39883;
continue;
} else {
}
break;
}

var G__39877 = args39875.length;
switch (G__39877) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39875.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39878 = (function (f,blockable,meta39879){
this.f = f;
this.blockable = blockable;
this.meta39879 = meta39879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39880,meta39879__$1){
var self__ = this;
var _39880__$1 = this;
return (new cljs.core.async.t_cljs$core$async39878(self__.f,self__.blockable,meta39879__$1));
});

cljs.core.async.t_cljs$core$async39878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39880){
var self__ = this;
var _39880__$1 = this;
return self__.meta39879;
});

cljs.core.async.t_cljs$core$async39878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39879","meta39879",544237210,null)], null);
});

cljs.core.async.t_cljs$core$async39878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39878";

cljs.core.async.t_cljs$core$async39878.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async39878");
});

cljs.core.async.__GT_t_cljs$core$async39878 = (function cljs$core$async$__GT_t_cljs$core$async39878(f__$1,blockable__$1,meta39879){
return (new cljs.core.async.t_cljs$core$async39878(f__$1,blockable__$1,meta39879));
});

}

return (new cljs.core.async.t_cljs$core$async39878(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args39887 = [];
var len__7651__auto___39890 = arguments.length;
var i__7652__auto___39891 = (0);
while(true){
if((i__7652__auto___39891 < len__7651__auto___39890)){
args39887.push((arguments[i__7652__auto___39891]));

var G__39892 = (i__7652__auto___39891 + (1));
i__7652__auto___39891 = G__39892;
continue;
} else {
}
break;
}

var G__39889 = args39887.length;
switch (G__39889) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39887.length)].join('')));

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
var args39894 = [];
var len__7651__auto___39897 = arguments.length;
var i__7652__auto___39898 = (0);
while(true){
if((i__7652__auto___39898 < len__7651__auto___39897)){
args39894.push((arguments[i__7652__auto___39898]));

var G__39899 = (i__7652__auto___39898 + (1));
i__7652__auto___39898 = G__39899;
continue;
} else {
}
break;
}

var G__39896 = args39894.length;
switch (G__39896) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39894.length)].join('')));

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
var args39901 = [];
var len__7651__auto___39904 = arguments.length;
var i__7652__auto___39905 = (0);
while(true){
if((i__7652__auto___39905 < len__7651__auto___39904)){
args39901.push((arguments[i__7652__auto___39905]));

var G__39906 = (i__7652__auto___39905 + (1));
i__7652__auto___39905 = G__39906;
continue;
} else {
}
break;
}

var G__39903 = args39901.length;
switch (G__39903) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39901.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39908 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39908);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39908,ret){
return (function (){
return fn1.call(null,val_39908);
});})(val_39908,ret))
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
var args39909 = [];
var len__7651__auto___39912 = arguments.length;
var i__7652__auto___39913 = (0);
while(true){
if((i__7652__auto___39913 < len__7651__auto___39912)){
args39909.push((arguments[i__7652__auto___39913]));

var G__39914 = (i__7652__auto___39913 + (1));
i__7652__auto___39913 = G__39914;
continue;
} else {
}
break;
}

var G__39911 = args39909.length;
switch (G__39911) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39909.length)].join('')));

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
var n__7461__auto___39916 = n;
var x_39917 = (0);
while(true){
if((x_39917 < n__7461__auto___39916)){
(a[x_39917] = (0));

var G__39918 = (x_39917 + (1));
x_39917 = G__39918;
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

var G__39919 = (i + (1));
i = G__39919;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39923 = (function (flag,meta39924){
this.flag = flag;
this.meta39924 = meta39924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39925,meta39924__$1){
var self__ = this;
var _39925__$1 = this;
return (new cljs.core.async.t_cljs$core$async39923(self__.flag,meta39924__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39925){
var self__ = this;
var _39925__$1 = this;
return self__.meta39924;
});})(flag))
;

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39923.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39924","meta39924",-862191095,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39923";

cljs.core.async.t_cljs$core$async39923.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async39923");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39923 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39923(flag__$1,meta39924){
return (new cljs.core.async.t_cljs$core$async39923(flag__$1,meta39924));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39923(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39929 = (function (flag,cb,meta39930){
this.flag = flag;
this.cb = cb;
this.meta39930 = meta39930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39931,meta39930__$1){
var self__ = this;
var _39931__$1 = this;
return (new cljs.core.async.t_cljs$core$async39929(self__.flag,self__.cb,meta39930__$1));
});

cljs.core.async.t_cljs$core$async39929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39931){
var self__ = this;
var _39931__$1 = this;
return self__.meta39930;
});

cljs.core.async.t_cljs$core$async39929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39930","meta39930",337785232,null)], null);
});

cljs.core.async.t_cljs$core$async39929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39929";

cljs.core.async.t_cljs$core$async39929.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async39929");
});

cljs.core.async.__GT_t_cljs$core$async39929 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39929(flag__$1,cb__$1,meta39930){
return (new cljs.core.async.t_cljs$core$async39929(flag__$1,cb__$1,meta39930));
});

}

return (new cljs.core.async.t_cljs$core$async39929(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39932_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39932_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39933_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39933_SHARP_,port], null));
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
var G__39934 = (i + (1));
i = G__39934;
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
var len__7651__auto___39940 = arguments.length;
var i__7652__auto___39941 = (0);
while(true){
if((i__7652__auto___39941 < len__7651__auto___39940)){
args__7658__auto__.push((arguments[i__7652__auto___39941]));

var G__39942 = (i__7652__auto___39941 + (1));
i__7652__auto___39941 = G__39942;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39937){
var map__39938 = p__39937;
var map__39938__$1 = ((((!((map__39938 == null)))?((((map__39938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39938):map__39938);
var opts = map__39938__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39935){
var G__39936 = cljs.core.first.call(null,seq39935);
var seq39935__$1 = cljs.core.next.call(null,seq39935);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39936,seq39935__$1);
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
var args39943 = [];
var len__7651__auto___39993 = arguments.length;
var i__7652__auto___39994 = (0);
while(true){
if((i__7652__auto___39994 < len__7651__auto___39993)){
args39943.push((arguments[i__7652__auto___39994]));

var G__39995 = (i__7652__auto___39994 + (1));
i__7652__auto___39994 = G__39995;
continue;
} else {
}
break;
}

var G__39945 = args39943.length;
switch (G__39945) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39943.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10513__auto___39997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___39997){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___39997){
return (function (state_39969){
var state_val_39970 = (state_39969[(1)]);
if((state_val_39970 === (7))){
var inst_39965 = (state_39969[(2)]);
var state_39969__$1 = state_39969;
var statearr_39971_39998 = state_39969__$1;
(statearr_39971_39998[(2)] = inst_39965);

(statearr_39971_39998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (1))){
var state_39969__$1 = state_39969;
var statearr_39972_39999 = state_39969__$1;
(statearr_39972_39999[(2)] = null);

(statearr_39972_39999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (4))){
var inst_39948 = (state_39969[(7)]);
var inst_39948__$1 = (state_39969[(2)]);
var inst_39949 = (inst_39948__$1 == null);
var state_39969__$1 = (function (){var statearr_39973 = state_39969;
(statearr_39973[(7)] = inst_39948__$1);

return statearr_39973;
})();
if(cljs.core.truth_(inst_39949)){
var statearr_39974_40000 = state_39969__$1;
(statearr_39974_40000[(1)] = (5));

} else {
var statearr_39975_40001 = state_39969__$1;
(statearr_39975_40001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (13))){
var state_39969__$1 = state_39969;
var statearr_39976_40002 = state_39969__$1;
(statearr_39976_40002[(2)] = null);

(statearr_39976_40002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (6))){
var inst_39948 = (state_39969[(7)]);
var state_39969__$1 = state_39969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39969__$1,(11),to,inst_39948);
} else {
if((state_val_39970 === (3))){
var inst_39967 = (state_39969[(2)]);
var state_39969__$1 = state_39969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39969__$1,inst_39967);
} else {
if((state_val_39970 === (12))){
var state_39969__$1 = state_39969;
var statearr_39977_40003 = state_39969__$1;
(statearr_39977_40003[(2)] = null);

(statearr_39977_40003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (2))){
var state_39969__$1 = state_39969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39969__$1,(4),from);
} else {
if((state_val_39970 === (11))){
var inst_39958 = (state_39969[(2)]);
var state_39969__$1 = state_39969;
if(cljs.core.truth_(inst_39958)){
var statearr_39978_40004 = state_39969__$1;
(statearr_39978_40004[(1)] = (12));

} else {
var statearr_39979_40005 = state_39969__$1;
(statearr_39979_40005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (9))){
var state_39969__$1 = state_39969;
var statearr_39980_40006 = state_39969__$1;
(statearr_39980_40006[(2)] = null);

(statearr_39980_40006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (5))){
var state_39969__$1 = state_39969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39981_40007 = state_39969__$1;
(statearr_39981_40007[(1)] = (8));

} else {
var statearr_39982_40008 = state_39969__$1;
(statearr_39982_40008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (14))){
var inst_39963 = (state_39969[(2)]);
var state_39969__$1 = state_39969;
var statearr_39983_40009 = state_39969__$1;
(statearr_39983_40009[(2)] = inst_39963);

(statearr_39983_40009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (10))){
var inst_39955 = (state_39969[(2)]);
var state_39969__$1 = state_39969;
var statearr_39984_40010 = state_39969__$1;
(statearr_39984_40010[(2)] = inst_39955);

(statearr_39984_40010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39970 === (8))){
var inst_39952 = cljs.core.async.close_BANG_.call(null,to);
var state_39969__$1 = state_39969;
var statearr_39985_40011 = state_39969__$1;
(statearr_39985_40011[(2)] = inst_39952);

(statearr_39985_40011[(1)] = (10));


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
});})(c__10513__auto___39997))
;
return ((function (switch__10492__auto__,c__10513__auto___39997){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_39989 = [null,null,null,null,null,null,null,null];
(statearr_39989[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_39989[(1)] = (1));

return statearr_39989;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_39969){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_39969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e39990){if((e39990 instanceof Object)){
var ex__10496__auto__ = e39990;
var statearr_39991_40012 = state_39969;
(statearr_39991_40012[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40013 = state_39969;
state_39969 = G__40013;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_39969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_39969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___39997))
})();
var state__10515__auto__ = (function (){var statearr_39992 = f__10514__auto__.call(null);
(statearr_39992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___39997);

return statearr_39992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___39997))
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
return (function (p__40201){
var vec__40202 = p__40201;
var v = cljs.core.nth.call(null,vec__40202,(0),null);
var p = cljs.core.nth.call(null,vec__40202,(1),null);
var job = vec__40202;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10513__auto___40388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___40388,res,vec__40202,v,p,job,jobs,results){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___40388,res,vec__40202,v,p,job,jobs,results){
return (function (state_40209){
var state_val_40210 = (state_40209[(1)]);
if((state_val_40210 === (1))){
var state_40209__$1 = state_40209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40209__$1,(2),res,v);
} else {
if((state_val_40210 === (2))){
var inst_40206 = (state_40209[(2)]);
var inst_40207 = cljs.core.async.close_BANG_.call(null,res);
var state_40209__$1 = (function (){var statearr_40211 = state_40209;
(statearr_40211[(7)] = inst_40206);

return statearr_40211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40209__$1,inst_40207);
} else {
return null;
}
}
});})(c__10513__auto___40388,res,vec__40202,v,p,job,jobs,results))
;
return ((function (switch__10492__auto__,c__10513__auto___40388,res,vec__40202,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_40215 = [null,null,null,null,null,null,null,null];
(statearr_40215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_40215[(1)] = (1));

return statearr_40215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_40209){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40216){if((e40216 instanceof Object)){
var ex__10496__auto__ = e40216;
var statearr_40217_40389 = state_40209;
(statearr_40217_40389[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40390 = state_40209;
state_40209 = G__40390;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_40209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_40209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___40388,res,vec__40202,v,p,job,jobs,results))
})();
var state__10515__auto__ = (function (){var statearr_40218 = f__10514__auto__.call(null);
(statearr_40218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___40388);

return statearr_40218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___40388,res,vec__40202,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40219){
var vec__40220 = p__40219;
var v = cljs.core.nth.call(null,vec__40220,(0),null);
var p = cljs.core.nth.call(null,vec__40220,(1),null);
var job = vec__40220;
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
var n__7461__auto___40391 = n;
var __40392 = (0);
while(true){
if((__40392 < n__7461__auto___40391)){
var G__40223_40393 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40223_40393) {
case "compute":
var c__10513__auto___40395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40392,c__10513__auto___40395,G__40223_40393,n__7461__auto___40391,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (__40392,c__10513__auto___40395,G__40223_40393,n__7461__auto___40391,jobs,results,process,async){
return (function (state_40236){
var state_val_40237 = (state_40236[(1)]);
if((state_val_40237 === (1))){
var state_40236__$1 = state_40236;
var statearr_40238_40396 = state_40236__$1;
(statearr_40238_40396[(2)] = null);

(statearr_40238_40396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40237 === (2))){
var state_40236__$1 = state_40236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40236__$1,(4),jobs);
} else {
if((state_val_40237 === (3))){
var inst_40234 = (state_40236[(2)]);
var state_40236__$1 = state_40236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40236__$1,inst_40234);
} else {
if((state_val_40237 === (4))){
var inst_40226 = (state_40236[(2)]);
var inst_40227 = process.call(null,inst_40226);
var state_40236__$1 = state_40236;
if(cljs.core.truth_(inst_40227)){
var statearr_40239_40397 = state_40236__$1;
(statearr_40239_40397[(1)] = (5));

} else {
var statearr_40240_40398 = state_40236__$1;
(statearr_40240_40398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40237 === (5))){
var state_40236__$1 = state_40236;
var statearr_40241_40399 = state_40236__$1;
(statearr_40241_40399[(2)] = null);

(statearr_40241_40399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40237 === (6))){
var state_40236__$1 = state_40236;
var statearr_40242_40400 = state_40236__$1;
(statearr_40242_40400[(2)] = null);

(statearr_40242_40400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40237 === (7))){
var inst_40232 = (state_40236[(2)]);
var state_40236__$1 = state_40236;
var statearr_40243_40401 = state_40236__$1;
(statearr_40243_40401[(2)] = inst_40232);

(statearr_40243_40401[(1)] = (3));


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
});})(__40392,c__10513__auto___40395,G__40223_40393,n__7461__auto___40391,jobs,results,process,async))
;
return ((function (__40392,switch__10492__auto__,c__10513__auto___40395,G__40223_40393,n__7461__auto___40391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_40247 = [null,null,null,null,null,null,null];
(statearr_40247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_40247[(1)] = (1));

return statearr_40247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_40236){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40248){if((e40248 instanceof Object)){
var ex__10496__auto__ = e40248;
var statearr_40249_40402 = state_40236;
(statearr_40249_40402[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40403 = state_40236;
state_40236 = G__40403;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_40236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_40236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(__40392,switch__10492__auto__,c__10513__auto___40395,G__40223_40393,n__7461__auto___40391,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_40250 = f__10514__auto__.call(null);
(statearr_40250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___40395);

return statearr_40250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(__40392,c__10513__auto___40395,G__40223_40393,n__7461__auto___40391,jobs,results,process,async))
);


break;
case "async":
var c__10513__auto___40404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40392,c__10513__auto___40404,G__40223_40393,n__7461__auto___40391,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (__40392,c__10513__auto___40404,G__40223_40393,n__7461__auto___40391,jobs,results,process,async){
return (function (state_40263){
var state_val_40264 = (state_40263[(1)]);
if((state_val_40264 === (1))){
var state_40263__$1 = state_40263;
var statearr_40265_40405 = state_40263__$1;
(statearr_40265_40405[(2)] = null);

(statearr_40265_40405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40264 === (2))){
var state_40263__$1 = state_40263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40263__$1,(4),jobs);
} else {
if((state_val_40264 === (3))){
var inst_40261 = (state_40263[(2)]);
var state_40263__$1 = state_40263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40263__$1,inst_40261);
} else {
if((state_val_40264 === (4))){
var inst_40253 = (state_40263[(2)]);
var inst_40254 = async.call(null,inst_40253);
var state_40263__$1 = state_40263;
if(cljs.core.truth_(inst_40254)){
var statearr_40266_40406 = state_40263__$1;
(statearr_40266_40406[(1)] = (5));

} else {
var statearr_40267_40407 = state_40263__$1;
(statearr_40267_40407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40264 === (5))){
var state_40263__$1 = state_40263;
var statearr_40268_40408 = state_40263__$1;
(statearr_40268_40408[(2)] = null);

(statearr_40268_40408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40264 === (6))){
var state_40263__$1 = state_40263;
var statearr_40269_40409 = state_40263__$1;
(statearr_40269_40409[(2)] = null);

(statearr_40269_40409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40264 === (7))){
var inst_40259 = (state_40263[(2)]);
var state_40263__$1 = state_40263;
var statearr_40270_40410 = state_40263__$1;
(statearr_40270_40410[(2)] = inst_40259);

(statearr_40270_40410[(1)] = (3));


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
});})(__40392,c__10513__auto___40404,G__40223_40393,n__7461__auto___40391,jobs,results,process,async))
;
return ((function (__40392,switch__10492__auto__,c__10513__auto___40404,G__40223_40393,n__7461__auto___40391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_40274 = [null,null,null,null,null,null,null];
(statearr_40274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_40274[(1)] = (1));

return statearr_40274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_40263){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40275){if((e40275 instanceof Object)){
var ex__10496__auto__ = e40275;
var statearr_40276_40411 = state_40263;
(statearr_40276_40411[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40412 = state_40263;
state_40263 = G__40412;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_40263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_40263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(__40392,switch__10492__auto__,c__10513__auto___40404,G__40223_40393,n__7461__auto___40391,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_40277 = f__10514__auto__.call(null);
(statearr_40277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___40404);

return statearr_40277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(__40392,c__10513__auto___40404,G__40223_40393,n__7461__auto___40391,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40413 = (__40392 + (1));
__40392 = G__40413;
continue;
} else {
}
break;
}

var c__10513__auto___40414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___40414,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___40414,jobs,results,process,async){
return (function (state_40299){
var state_val_40300 = (state_40299[(1)]);
if((state_val_40300 === (1))){
var state_40299__$1 = state_40299;
var statearr_40301_40415 = state_40299__$1;
(statearr_40301_40415[(2)] = null);

(statearr_40301_40415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (2))){
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40299__$1,(4),from);
} else {
if((state_val_40300 === (3))){
var inst_40297 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40299__$1,inst_40297);
} else {
if((state_val_40300 === (4))){
var inst_40280 = (state_40299[(7)]);
var inst_40280__$1 = (state_40299[(2)]);
var inst_40281 = (inst_40280__$1 == null);
var state_40299__$1 = (function (){var statearr_40302 = state_40299;
(statearr_40302[(7)] = inst_40280__$1);

return statearr_40302;
})();
if(cljs.core.truth_(inst_40281)){
var statearr_40303_40416 = state_40299__$1;
(statearr_40303_40416[(1)] = (5));

} else {
var statearr_40304_40417 = state_40299__$1;
(statearr_40304_40417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (5))){
var inst_40283 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40299__$1 = state_40299;
var statearr_40305_40418 = state_40299__$1;
(statearr_40305_40418[(2)] = inst_40283);

(statearr_40305_40418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (6))){
var inst_40285 = (state_40299[(8)]);
var inst_40280 = (state_40299[(7)]);
var inst_40285__$1 = cljs.core.async.chan.call(null,(1));
var inst_40286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40287 = [inst_40280,inst_40285__$1];
var inst_40288 = (new cljs.core.PersistentVector(null,2,(5),inst_40286,inst_40287,null));
var state_40299__$1 = (function (){var statearr_40306 = state_40299;
(statearr_40306[(8)] = inst_40285__$1);

return statearr_40306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40299__$1,(8),jobs,inst_40288);
} else {
if((state_val_40300 === (7))){
var inst_40295 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
var statearr_40307_40419 = state_40299__$1;
(statearr_40307_40419[(2)] = inst_40295);

(statearr_40307_40419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (8))){
var inst_40285 = (state_40299[(8)]);
var inst_40290 = (state_40299[(2)]);
var state_40299__$1 = (function (){var statearr_40308 = state_40299;
(statearr_40308[(9)] = inst_40290);

return statearr_40308;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40299__$1,(9),results,inst_40285);
} else {
if((state_val_40300 === (9))){
var inst_40292 = (state_40299[(2)]);
var state_40299__$1 = (function (){var statearr_40309 = state_40299;
(statearr_40309[(10)] = inst_40292);

return statearr_40309;
})();
var statearr_40310_40420 = state_40299__$1;
(statearr_40310_40420[(2)] = null);

(statearr_40310_40420[(1)] = (2));


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
});})(c__10513__auto___40414,jobs,results,process,async))
;
return ((function (switch__10492__auto__,c__10513__auto___40414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_40314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_40314[(1)] = (1));

return statearr_40314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_40299){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40315){if((e40315 instanceof Object)){
var ex__10496__auto__ = e40315;
var statearr_40316_40421 = state_40299;
(statearr_40316_40421[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40422 = state_40299;
state_40299 = G__40422;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_40299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_40299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___40414,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_40317 = f__10514__auto__.call(null);
(statearr_40317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___40414);

return statearr_40317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___40414,jobs,results,process,async))
);


var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__,jobs,results,process,async){
return (function (state_40355){
var state_val_40356 = (state_40355[(1)]);
if((state_val_40356 === (7))){
var inst_40351 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
var statearr_40357_40423 = state_40355__$1;
(statearr_40357_40423[(2)] = inst_40351);

(statearr_40357_40423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (20))){
var state_40355__$1 = state_40355;
var statearr_40358_40424 = state_40355__$1;
(statearr_40358_40424[(2)] = null);

(statearr_40358_40424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (1))){
var state_40355__$1 = state_40355;
var statearr_40359_40425 = state_40355__$1;
(statearr_40359_40425[(2)] = null);

(statearr_40359_40425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (4))){
var inst_40320 = (state_40355[(7)]);
var inst_40320__$1 = (state_40355[(2)]);
var inst_40321 = (inst_40320__$1 == null);
var state_40355__$1 = (function (){var statearr_40360 = state_40355;
(statearr_40360[(7)] = inst_40320__$1);

return statearr_40360;
})();
if(cljs.core.truth_(inst_40321)){
var statearr_40361_40426 = state_40355__$1;
(statearr_40361_40426[(1)] = (5));

} else {
var statearr_40362_40427 = state_40355__$1;
(statearr_40362_40427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (15))){
var inst_40333 = (state_40355[(8)]);
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40355__$1,(18),to,inst_40333);
} else {
if((state_val_40356 === (21))){
var inst_40346 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
var statearr_40363_40428 = state_40355__$1;
(statearr_40363_40428[(2)] = inst_40346);

(statearr_40363_40428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (13))){
var inst_40348 = (state_40355[(2)]);
var state_40355__$1 = (function (){var statearr_40364 = state_40355;
(statearr_40364[(9)] = inst_40348);

return statearr_40364;
})();
var statearr_40365_40429 = state_40355__$1;
(statearr_40365_40429[(2)] = null);

(statearr_40365_40429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (6))){
var inst_40320 = (state_40355[(7)]);
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40355__$1,(11),inst_40320);
} else {
if((state_val_40356 === (17))){
var inst_40341 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
if(cljs.core.truth_(inst_40341)){
var statearr_40366_40430 = state_40355__$1;
(statearr_40366_40430[(1)] = (19));

} else {
var statearr_40367_40431 = state_40355__$1;
(statearr_40367_40431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (3))){
var inst_40353 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40355__$1,inst_40353);
} else {
if((state_val_40356 === (12))){
var inst_40330 = (state_40355[(10)]);
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40355__$1,(14),inst_40330);
} else {
if((state_val_40356 === (2))){
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40355__$1,(4),results);
} else {
if((state_val_40356 === (19))){
var state_40355__$1 = state_40355;
var statearr_40368_40432 = state_40355__$1;
(statearr_40368_40432[(2)] = null);

(statearr_40368_40432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (11))){
var inst_40330 = (state_40355[(2)]);
var state_40355__$1 = (function (){var statearr_40369 = state_40355;
(statearr_40369[(10)] = inst_40330);

return statearr_40369;
})();
var statearr_40370_40433 = state_40355__$1;
(statearr_40370_40433[(2)] = null);

(statearr_40370_40433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (9))){
var state_40355__$1 = state_40355;
var statearr_40371_40434 = state_40355__$1;
(statearr_40371_40434[(2)] = null);

(statearr_40371_40434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (5))){
var state_40355__$1 = state_40355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40372_40435 = state_40355__$1;
(statearr_40372_40435[(1)] = (8));

} else {
var statearr_40373_40436 = state_40355__$1;
(statearr_40373_40436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (14))){
var inst_40333 = (state_40355[(8)]);
var inst_40335 = (state_40355[(11)]);
var inst_40333__$1 = (state_40355[(2)]);
var inst_40334 = (inst_40333__$1 == null);
var inst_40335__$1 = cljs.core.not.call(null,inst_40334);
var state_40355__$1 = (function (){var statearr_40374 = state_40355;
(statearr_40374[(8)] = inst_40333__$1);

(statearr_40374[(11)] = inst_40335__$1);

return statearr_40374;
})();
if(inst_40335__$1){
var statearr_40375_40437 = state_40355__$1;
(statearr_40375_40437[(1)] = (15));

} else {
var statearr_40376_40438 = state_40355__$1;
(statearr_40376_40438[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (16))){
var inst_40335 = (state_40355[(11)]);
var state_40355__$1 = state_40355;
var statearr_40377_40439 = state_40355__$1;
(statearr_40377_40439[(2)] = inst_40335);

(statearr_40377_40439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (10))){
var inst_40327 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
var statearr_40378_40440 = state_40355__$1;
(statearr_40378_40440[(2)] = inst_40327);

(statearr_40378_40440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (18))){
var inst_40338 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
var statearr_40379_40441 = state_40355__$1;
(statearr_40379_40441[(2)] = inst_40338);

(statearr_40379_40441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (8))){
var inst_40324 = cljs.core.async.close_BANG_.call(null,to);
var state_40355__$1 = state_40355;
var statearr_40380_40442 = state_40355__$1;
(statearr_40380_40442[(2)] = inst_40324);

(statearr_40380_40442[(1)] = (10));


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
var statearr_40384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_40384[(1)] = (1));

return statearr_40384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_40355){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40385){if((e40385 instanceof Object)){
var ex__10496__auto__ = e40385;
var statearr_40386_40443 = state_40355;
(statearr_40386_40443[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40444 = state_40355;
state_40355 = G__40444;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_40355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_40355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_40387 = f__10514__auto__.call(null);
(statearr_40387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_40387;
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
var args40445 = [];
var len__7651__auto___40448 = arguments.length;
var i__7652__auto___40449 = (0);
while(true){
if((i__7652__auto___40449 < len__7651__auto___40448)){
args40445.push((arguments[i__7652__auto___40449]));

var G__40450 = (i__7652__auto___40449 + (1));
i__7652__auto___40449 = G__40450;
continue;
} else {
}
break;
}

var G__40447 = args40445.length;
switch (G__40447) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40445.length)].join('')));

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
var args40452 = [];
var len__7651__auto___40455 = arguments.length;
var i__7652__auto___40456 = (0);
while(true){
if((i__7652__auto___40456 < len__7651__auto___40455)){
args40452.push((arguments[i__7652__auto___40456]));

var G__40457 = (i__7652__auto___40456 + (1));
i__7652__auto___40456 = G__40457;
continue;
} else {
}
break;
}

var G__40454 = args40452.length;
switch (G__40454) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40452.length)].join('')));

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
var args40459 = [];
var len__7651__auto___40512 = arguments.length;
var i__7652__auto___40513 = (0);
while(true){
if((i__7652__auto___40513 < len__7651__auto___40512)){
args40459.push((arguments[i__7652__auto___40513]));

var G__40514 = (i__7652__auto___40513 + (1));
i__7652__auto___40513 = G__40514;
continue;
} else {
}
break;
}

var G__40461 = args40459.length;
switch (G__40461) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40459.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10513__auto___40516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___40516,tc,fc){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___40516,tc,fc){
return (function (state_40487){
var state_val_40488 = (state_40487[(1)]);
if((state_val_40488 === (7))){
var inst_40483 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
var statearr_40489_40517 = state_40487__$1;
(statearr_40489_40517[(2)] = inst_40483);

(statearr_40489_40517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (1))){
var state_40487__$1 = state_40487;
var statearr_40490_40518 = state_40487__$1;
(statearr_40490_40518[(2)] = null);

(statearr_40490_40518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (4))){
var inst_40464 = (state_40487[(7)]);
var inst_40464__$1 = (state_40487[(2)]);
var inst_40465 = (inst_40464__$1 == null);
var state_40487__$1 = (function (){var statearr_40491 = state_40487;
(statearr_40491[(7)] = inst_40464__$1);

return statearr_40491;
})();
if(cljs.core.truth_(inst_40465)){
var statearr_40492_40519 = state_40487__$1;
(statearr_40492_40519[(1)] = (5));

} else {
var statearr_40493_40520 = state_40487__$1;
(statearr_40493_40520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (13))){
var state_40487__$1 = state_40487;
var statearr_40494_40521 = state_40487__$1;
(statearr_40494_40521[(2)] = null);

(statearr_40494_40521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (6))){
var inst_40464 = (state_40487[(7)]);
var inst_40470 = p.call(null,inst_40464);
var state_40487__$1 = state_40487;
if(cljs.core.truth_(inst_40470)){
var statearr_40495_40522 = state_40487__$1;
(statearr_40495_40522[(1)] = (9));

} else {
var statearr_40496_40523 = state_40487__$1;
(statearr_40496_40523[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (3))){
var inst_40485 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40487__$1,inst_40485);
} else {
if((state_val_40488 === (12))){
var state_40487__$1 = state_40487;
var statearr_40497_40524 = state_40487__$1;
(statearr_40497_40524[(2)] = null);

(statearr_40497_40524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (2))){
var state_40487__$1 = state_40487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40487__$1,(4),ch);
} else {
if((state_val_40488 === (11))){
var inst_40464 = (state_40487[(7)]);
var inst_40474 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40487__$1,(8),inst_40474,inst_40464);
} else {
if((state_val_40488 === (9))){
var state_40487__$1 = state_40487;
var statearr_40498_40525 = state_40487__$1;
(statearr_40498_40525[(2)] = tc);

(statearr_40498_40525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (5))){
var inst_40467 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40468 = cljs.core.async.close_BANG_.call(null,fc);
var state_40487__$1 = (function (){var statearr_40499 = state_40487;
(statearr_40499[(8)] = inst_40467);

return statearr_40499;
})();
var statearr_40500_40526 = state_40487__$1;
(statearr_40500_40526[(2)] = inst_40468);

(statearr_40500_40526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (14))){
var inst_40481 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
var statearr_40501_40527 = state_40487__$1;
(statearr_40501_40527[(2)] = inst_40481);

(statearr_40501_40527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (10))){
var state_40487__$1 = state_40487;
var statearr_40502_40528 = state_40487__$1;
(statearr_40502_40528[(2)] = fc);

(statearr_40502_40528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (8))){
var inst_40476 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
if(cljs.core.truth_(inst_40476)){
var statearr_40503_40529 = state_40487__$1;
(statearr_40503_40529[(1)] = (12));

} else {
var statearr_40504_40530 = state_40487__$1;
(statearr_40504_40530[(1)] = (13));

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
});})(c__10513__auto___40516,tc,fc))
;
return ((function (switch__10492__auto__,c__10513__auto___40516,tc,fc){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_40508 = [null,null,null,null,null,null,null,null,null];
(statearr_40508[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_40508[(1)] = (1));

return statearr_40508;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_40487){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40509){if((e40509 instanceof Object)){
var ex__10496__auto__ = e40509;
var statearr_40510_40531 = state_40487;
(statearr_40510_40531[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40532 = state_40487;
state_40487 = G__40532;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_40487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_40487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___40516,tc,fc))
})();
var state__10515__auto__ = (function (){var statearr_40511 = f__10514__auto__.call(null);
(statearr_40511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___40516);

return statearr_40511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___40516,tc,fc))
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
return (function (state_40596){
var state_val_40597 = (state_40596[(1)]);
if((state_val_40597 === (7))){
var inst_40592 = (state_40596[(2)]);
var state_40596__$1 = state_40596;
var statearr_40598_40619 = state_40596__$1;
(statearr_40598_40619[(2)] = inst_40592);

(statearr_40598_40619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (1))){
var inst_40576 = init;
var state_40596__$1 = (function (){var statearr_40599 = state_40596;
(statearr_40599[(7)] = inst_40576);

return statearr_40599;
})();
var statearr_40600_40620 = state_40596__$1;
(statearr_40600_40620[(2)] = null);

(statearr_40600_40620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (4))){
var inst_40579 = (state_40596[(8)]);
var inst_40579__$1 = (state_40596[(2)]);
var inst_40580 = (inst_40579__$1 == null);
var state_40596__$1 = (function (){var statearr_40601 = state_40596;
(statearr_40601[(8)] = inst_40579__$1);

return statearr_40601;
})();
if(cljs.core.truth_(inst_40580)){
var statearr_40602_40621 = state_40596__$1;
(statearr_40602_40621[(1)] = (5));

} else {
var statearr_40603_40622 = state_40596__$1;
(statearr_40603_40622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (6))){
var inst_40576 = (state_40596[(7)]);
var inst_40583 = (state_40596[(9)]);
var inst_40579 = (state_40596[(8)]);
var inst_40583__$1 = f.call(null,inst_40576,inst_40579);
var inst_40584 = cljs.core.reduced_QMARK_.call(null,inst_40583__$1);
var state_40596__$1 = (function (){var statearr_40604 = state_40596;
(statearr_40604[(9)] = inst_40583__$1);

return statearr_40604;
})();
if(inst_40584){
var statearr_40605_40623 = state_40596__$1;
(statearr_40605_40623[(1)] = (8));

} else {
var statearr_40606_40624 = state_40596__$1;
(statearr_40606_40624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (3))){
var inst_40594 = (state_40596[(2)]);
var state_40596__$1 = state_40596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40596__$1,inst_40594);
} else {
if((state_val_40597 === (2))){
var state_40596__$1 = state_40596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40596__$1,(4),ch);
} else {
if((state_val_40597 === (9))){
var inst_40583 = (state_40596[(9)]);
var inst_40576 = inst_40583;
var state_40596__$1 = (function (){var statearr_40607 = state_40596;
(statearr_40607[(7)] = inst_40576);

return statearr_40607;
})();
var statearr_40608_40625 = state_40596__$1;
(statearr_40608_40625[(2)] = null);

(statearr_40608_40625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (5))){
var inst_40576 = (state_40596[(7)]);
var state_40596__$1 = state_40596;
var statearr_40609_40626 = state_40596__$1;
(statearr_40609_40626[(2)] = inst_40576);

(statearr_40609_40626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (10))){
var inst_40590 = (state_40596[(2)]);
var state_40596__$1 = state_40596;
var statearr_40610_40627 = state_40596__$1;
(statearr_40610_40627[(2)] = inst_40590);

(statearr_40610_40627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40597 === (8))){
var inst_40583 = (state_40596[(9)]);
var inst_40586 = cljs.core.deref.call(null,inst_40583);
var state_40596__$1 = state_40596;
var statearr_40611_40628 = state_40596__$1;
(statearr_40611_40628[(2)] = inst_40586);

(statearr_40611_40628[(1)] = (10));


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
var statearr_40615 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40615[(0)] = cljs$core$async$reduce_$_state_machine__10493__auto__);

(statearr_40615[(1)] = (1));

return statearr_40615;
});
var cljs$core$async$reduce_$_state_machine__10493__auto____1 = (function (state_40596){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40616){if((e40616 instanceof Object)){
var ex__10496__auto__ = e40616;
var statearr_40617_40629 = state_40596;
(statearr_40617_40629[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40630 = state_40596;
state_40596 = G__40630;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10493__auto__ = function(state_40596){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10493__auto____1.call(this,state_40596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10493__auto____0;
cljs$core$async$reduce_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10493__auto____1;
return cljs$core$async$reduce_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_40618 = f__10514__auto__.call(null);
(statearr_40618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_40618;
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
var args40631 = [];
var len__7651__auto___40683 = arguments.length;
var i__7652__auto___40684 = (0);
while(true){
if((i__7652__auto___40684 < len__7651__auto___40683)){
args40631.push((arguments[i__7652__auto___40684]));

var G__40685 = (i__7652__auto___40684 + (1));
i__7652__auto___40684 = G__40685;
continue;
} else {
}
break;
}

var G__40633 = args40631.length;
switch (G__40633) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40631.length)].join('')));

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
return (function (state_40658){
var state_val_40659 = (state_40658[(1)]);
if((state_val_40659 === (7))){
var inst_40640 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40660_40687 = state_40658__$1;
(statearr_40660_40687[(2)] = inst_40640);

(statearr_40660_40687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (1))){
var inst_40634 = cljs.core.seq.call(null,coll);
var inst_40635 = inst_40634;
var state_40658__$1 = (function (){var statearr_40661 = state_40658;
(statearr_40661[(7)] = inst_40635);

return statearr_40661;
})();
var statearr_40662_40688 = state_40658__$1;
(statearr_40662_40688[(2)] = null);

(statearr_40662_40688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (4))){
var inst_40635 = (state_40658[(7)]);
var inst_40638 = cljs.core.first.call(null,inst_40635);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40658__$1,(7),ch,inst_40638);
} else {
if((state_val_40659 === (13))){
var inst_40652 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40663_40689 = state_40658__$1;
(statearr_40663_40689[(2)] = inst_40652);

(statearr_40663_40689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (6))){
var inst_40643 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40643)){
var statearr_40664_40690 = state_40658__$1;
(statearr_40664_40690[(1)] = (8));

} else {
var statearr_40665_40691 = state_40658__$1;
(statearr_40665_40691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (3))){
var inst_40656 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40658__$1,inst_40656);
} else {
if((state_val_40659 === (12))){
var state_40658__$1 = state_40658;
var statearr_40666_40692 = state_40658__$1;
(statearr_40666_40692[(2)] = null);

(statearr_40666_40692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (2))){
var inst_40635 = (state_40658[(7)]);
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40635)){
var statearr_40667_40693 = state_40658__$1;
(statearr_40667_40693[(1)] = (4));

} else {
var statearr_40668_40694 = state_40658__$1;
(statearr_40668_40694[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (11))){
var inst_40649 = cljs.core.async.close_BANG_.call(null,ch);
var state_40658__$1 = state_40658;
var statearr_40669_40695 = state_40658__$1;
(statearr_40669_40695[(2)] = inst_40649);

(statearr_40669_40695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (9))){
var state_40658__$1 = state_40658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40670_40696 = state_40658__$1;
(statearr_40670_40696[(1)] = (11));

} else {
var statearr_40671_40697 = state_40658__$1;
(statearr_40671_40697[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (5))){
var inst_40635 = (state_40658[(7)]);
var state_40658__$1 = state_40658;
var statearr_40672_40698 = state_40658__$1;
(statearr_40672_40698[(2)] = inst_40635);

(statearr_40672_40698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (10))){
var inst_40654 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40673_40699 = state_40658__$1;
(statearr_40673_40699[(2)] = inst_40654);

(statearr_40673_40699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (8))){
var inst_40635 = (state_40658[(7)]);
var inst_40645 = cljs.core.next.call(null,inst_40635);
var inst_40635__$1 = inst_40645;
var state_40658__$1 = (function (){var statearr_40674 = state_40658;
(statearr_40674[(7)] = inst_40635__$1);

return statearr_40674;
})();
var statearr_40675_40700 = state_40658__$1;
(statearr_40675_40700[(2)] = null);

(statearr_40675_40700[(1)] = (2));


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
var statearr_40679 = [null,null,null,null,null,null,null,null];
(statearr_40679[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_40679[(1)] = (1));

return statearr_40679;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_40658){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_40658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e40680){if((e40680 instanceof Object)){
var ex__10496__auto__ = e40680;
var statearr_40681_40701 = state_40658;
(statearr_40681_40701[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40702 = state_40658;
state_40658 = G__40702;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_40658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_40658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_40682 = f__10514__auto__.call(null);
(statearr_40682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_40682;
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
if(typeof cljs.core.async.t_cljs$core$async40928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40928 = (function (ch,cs,meta40929){
this.ch = ch;
this.cs = cs;
this.meta40929 = meta40929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40930,meta40929__$1){
var self__ = this;
var _40930__$1 = this;
return (new cljs.core.async.t_cljs$core$async40928(self__.ch,self__.cs,meta40929__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40930){
var self__ = this;
var _40930__$1 = this;
return self__.meta40929;
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40929","meta40929",-1777028939,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40928";

cljs.core.async.t_cljs$core$async40928.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async40928");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40928 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40928(ch__$1,cs__$1,meta40929){
return (new cljs.core.async.t_cljs$core$async40928(ch__$1,cs__$1,meta40929));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40928(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10513__auto___41153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___41153,cs,m,dchan,dctr,done){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___41153,cs,m,dchan,dctr,done){
return (function (state_41065){
var state_val_41066 = (state_41065[(1)]);
if((state_val_41066 === (7))){
var inst_41061 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41067_41154 = state_41065__$1;
(statearr_41067_41154[(2)] = inst_41061);

(statearr_41067_41154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (20))){
var inst_40964 = (state_41065[(7)]);
var inst_40976 = cljs.core.first.call(null,inst_40964);
var inst_40977 = cljs.core.nth.call(null,inst_40976,(0),null);
var inst_40978 = cljs.core.nth.call(null,inst_40976,(1),null);
var state_41065__$1 = (function (){var statearr_41068 = state_41065;
(statearr_41068[(8)] = inst_40977);

return statearr_41068;
})();
if(cljs.core.truth_(inst_40978)){
var statearr_41069_41155 = state_41065__$1;
(statearr_41069_41155[(1)] = (22));

} else {
var statearr_41070_41156 = state_41065__$1;
(statearr_41070_41156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (27))){
var inst_40933 = (state_41065[(9)]);
var inst_41006 = (state_41065[(10)]);
var inst_41013 = (state_41065[(11)]);
var inst_41008 = (state_41065[(12)]);
var inst_41013__$1 = cljs.core._nth.call(null,inst_41006,inst_41008);
var inst_41014 = cljs.core.async.put_BANG_.call(null,inst_41013__$1,inst_40933,done);
var state_41065__$1 = (function (){var statearr_41071 = state_41065;
(statearr_41071[(11)] = inst_41013__$1);

return statearr_41071;
})();
if(cljs.core.truth_(inst_41014)){
var statearr_41072_41157 = state_41065__$1;
(statearr_41072_41157[(1)] = (30));

} else {
var statearr_41073_41158 = state_41065__$1;
(statearr_41073_41158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (1))){
var state_41065__$1 = state_41065;
var statearr_41074_41159 = state_41065__$1;
(statearr_41074_41159[(2)] = null);

(statearr_41074_41159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (24))){
var inst_40964 = (state_41065[(7)]);
var inst_40983 = (state_41065[(2)]);
var inst_40984 = cljs.core.next.call(null,inst_40964);
var inst_40942 = inst_40984;
var inst_40943 = null;
var inst_40944 = (0);
var inst_40945 = (0);
var state_41065__$1 = (function (){var statearr_41075 = state_41065;
(statearr_41075[(13)] = inst_40945);

(statearr_41075[(14)] = inst_40944);

(statearr_41075[(15)] = inst_40983);

(statearr_41075[(16)] = inst_40942);

(statearr_41075[(17)] = inst_40943);

return statearr_41075;
})();
var statearr_41076_41160 = state_41065__$1;
(statearr_41076_41160[(2)] = null);

(statearr_41076_41160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (39))){
var state_41065__$1 = state_41065;
var statearr_41080_41161 = state_41065__$1;
(statearr_41080_41161[(2)] = null);

(statearr_41080_41161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (4))){
var inst_40933 = (state_41065[(9)]);
var inst_40933__$1 = (state_41065[(2)]);
var inst_40934 = (inst_40933__$1 == null);
var state_41065__$1 = (function (){var statearr_41081 = state_41065;
(statearr_41081[(9)] = inst_40933__$1);

return statearr_41081;
})();
if(cljs.core.truth_(inst_40934)){
var statearr_41082_41162 = state_41065__$1;
(statearr_41082_41162[(1)] = (5));

} else {
var statearr_41083_41163 = state_41065__$1;
(statearr_41083_41163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (15))){
var inst_40945 = (state_41065[(13)]);
var inst_40944 = (state_41065[(14)]);
var inst_40942 = (state_41065[(16)]);
var inst_40943 = (state_41065[(17)]);
var inst_40960 = (state_41065[(2)]);
var inst_40961 = (inst_40945 + (1));
var tmp41077 = inst_40944;
var tmp41078 = inst_40942;
var tmp41079 = inst_40943;
var inst_40942__$1 = tmp41078;
var inst_40943__$1 = tmp41079;
var inst_40944__$1 = tmp41077;
var inst_40945__$1 = inst_40961;
var state_41065__$1 = (function (){var statearr_41084 = state_41065;
(statearr_41084[(13)] = inst_40945__$1);

(statearr_41084[(18)] = inst_40960);

(statearr_41084[(14)] = inst_40944__$1);

(statearr_41084[(16)] = inst_40942__$1);

(statearr_41084[(17)] = inst_40943__$1);

return statearr_41084;
})();
var statearr_41085_41164 = state_41065__$1;
(statearr_41085_41164[(2)] = null);

(statearr_41085_41164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (21))){
var inst_40987 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41089_41165 = state_41065__$1;
(statearr_41089_41165[(2)] = inst_40987);

(statearr_41089_41165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (31))){
var inst_41013 = (state_41065[(11)]);
var inst_41017 = done.call(null,null);
var inst_41018 = cljs.core.async.untap_STAR_.call(null,m,inst_41013);
var state_41065__$1 = (function (){var statearr_41090 = state_41065;
(statearr_41090[(19)] = inst_41017);

return statearr_41090;
})();
var statearr_41091_41166 = state_41065__$1;
(statearr_41091_41166[(2)] = inst_41018);

(statearr_41091_41166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (32))){
var inst_41005 = (state_41065[(20)]);
var inst_41007 = (state_41065[(21)]);
var inst_41006 = (state_41065[(10)]);
var inst_41008 = (state_41065[(12)]);
var inst_41020 = (state_41065[(2)]);
var inst_41021 = (inst_41008 + (1));
var tmp41086 = inst_41005;
var tmp41087 = inst_41007;
var tmp41088 = inst_41006;
var inst_41005__$1 = tmp41086;
var inst_41006__$1 = tmp41088;
var inst_41007__$1 = tmp41087;
var inst_41008__$1 = inst_41021;
var state_41065__$1 = (function (){var statearr_41092 = state_41065;
(statearr_41092[(20)] = inst_41005__$1);

(statearr_41092[(21)] = inst_41007__$1);

(statearr_41092[(10)] = inst_41006__$1);

(statearr_41092[(12)] = inst_41008__$1);

(statearr_41092[(22)] = inst_41020);

return statearr_41092;
})();
var statearr_41093_41167 = state_41065__$1;
(statearr_41093_41167[(2)] = null);

(statearr_41093_41167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (40))){
var inst_41033 = (state_41065[(23)]);
var inst_41037 = done.call(null,null);
var inst_41038 = cljs.core.async.untap_STAR_.call(null,m,inst_41033);
var state_41065__$1 = (function (){var statearr_41094 = state_41065;
(statearr_41094[(24)] = inst_41037);

return statearr_41094;
})();
var statearr_41095_41168 = state_41065__$1;
(statearr_41095_41168[(2)] = inst_41038);

(statearr_41095_41168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (33))){
var inst_41024 = (state_41065[(25)]);
var inst_41026 = cljs.core.chunked_seq_QMARK_.call(null,inst_41024);
var state_41065__$1 = state_41065;
if(inst_41026){
var statearr_41096_41169 = state_41065__$1;
(statearr_41096_41169[(1)] = (36));

} else {
var statearr_41097_41170 = state_41065__$1;
(statearr_41097_41170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (13))){
var inst_40954 = (state_41065[(26)]);
var inst_40957 = cljs.core.async.close_BANG_.call(null,inst_40954);
var state_41065__$1 = state_41065;
var statearr_41098_41171 = state_41065__$1;
(statearr_41098_41171[(2)] = inst_40957);

(statearr_41098_41171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (22))){
var inst_40977 = (state_41065[(8)]);
var inst_40980 = cljs.core.async.close_BANG_.call(null,inst_40977);
var state_41065__$1 = state_41065;
var statearr_41099_41172 = state_41065__$1;
(statearr_41099_41172[(2)] = inst_40980);

(statearr_41099_41172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (36))){
var inst_41024 = (state_41065[(25)]);
var inst_41028 = cljs.core.chunk_first.call(null,inst_41024);
var inst_41029 = cljs.core.chunk_rest.call(null,inst_41024);
var inst_41030 = cljs.core.count.call(null,inst_41028);
var inst_41005 = inst_41029;
var inst_41006 = inst_41028;
var inst_41007 = inst_41030;
var inst_41008 = (0);
var state_41065__$1 = (function (){var statearr_41100 = state_41065;
(statearr_41100[(20)] = inst_41005);

(statearr_41100[(21)] = inst_41007);

(statearr_41100[(10)] = inst_41006);

(statearr_41100[(12)] = inst_41008);

return statearr_41100;
})();
var statearr_41101_41173 = state_41065__$1;
(statearr_41101_41173[(2)] = null);

(statearr_41101_41173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (41))){
var inst_41024 = (state_41065[(25)]);
var inst_41040 = (state_41065[(2)]);
var inst_41041 = cljs.core.next.call(null,inst_41024);
var inst_41005 = inst_41041;
var inst_41006 = null;
var inst_41007 = (0);
var inst_41008 = (0);
var state_41065__$1 = (function (){var statearr_41102 = state_41065;
(statearr_41102[(20)] = inst_41005);

(statearr_41102[(21)] = inst_41007);

(statearr_41102[(27)] = inst_41040);

(statearr_41102[(10)] = inst_41006);

(statearr_41102[(12)] = inst_41008);

return statearr_41102;
})();
var statearr_41103_41174 = state_41065__$1;
(statearr_41103_41174[(2)] = null);

(statearr_41103_41174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (43))){
var state_41065__$1 = state_41065;
var statearr_41104_41175 = state_41065__$1;
(statearr_41104_41175[(2)] = null);

(statearr_41104_41175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (29))){
var inst_41049 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41105_41176 = state_41065__$1;
(statearr_41105_41176[(2)] = inst_41049);

(statearr_41105_41176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (44))){
var inst_41058 = (state_41065[(2)]);
var state_41065__$1 = (function (){var statearr_41106 = state_41065;
(statearr_41106[(28)] = inst_41058);

return statearr_41106;
})();
var statearr_41107_41177 = state_41065__$1;
(statearr_41107_41177[(2)] = null);

(statearr_41107_41177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (6))){
var inst_40997 = (state_41065[(29)]);
var inst_40996 = cljs.core.deref.call(null,cs);
var inst_40997__$1 = cljs.core.keys.call(null,inst_40996);
var inst_40998 = cljs.core.count.call(null,inst_40997__$1);
var inst_40999 = cljs.core.reset_BANG_.call(null,dctr,inst_40998);
var inst_41004 = cljs.core.seq.call(null,inst_40997__$1);
var inst_41005 = inst_41004;
var inst_41006 = null;
var inst_41007 = (0);
var inst_41008 = (0);
var state_41065__$1 = (function (){var statearr_41108 = state_41065;
(statearr_41108[(29)] = inst_40997__$1);

(statearr_41108[(20)] = inst_41005);

(statearr_41108[(30)] = inst_40999);

(statearr_41108[(21)] = inst_41007);

(statearr_41108[(10)] = inst_41006);

(statearr_41108[(12)] = inst_41008);

return statearr_41108;
})();
var statearr_41109_41178 = state_41065__$1;
(statearr_41109_41178[(2)] = null);

(statearr_41109_41178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (28))){
var inst_41005 = (state_41065[(20)]);
var inst_41024 = (state_41065[(25)]);
var inst_41024__$1 = cljs.core.seq.call(null,inst_41005);
var state_41065__$1 = (function (){var statearr_41110 = state_41065;
(statearr_41110[(25)] = inst_41024__$1);

return statearr_41110;
})();
if(inst_41024__$1){
var statearr_41111_41179 = state_41065__$1;
(statearr_41111_41179[(1)] = (33));

} else {
var statearr_41112_41180 = state_41065__$1;
(statearr_41112_41180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (25))){
var inst_41007 = (state_41065[(21)]);
var inst_41008 = (state_41065[(12)]);
var inst_41010 = (inst_41008 < inst_41007);
var inst_41011 = inst_41010;
var state_41065__$1 = state_41065;
if(cljs.core.truth_(inst_41011)){
var statearr_41113_41181 = state_41065__$1;
(statearr_41113_41181[(1)] = (27));

} else {
var statearr_41114_41182 = state_41065__$1;
(statearr_41114_41182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (34))){
var state_41065__$1 = state_41065;
var statearr_41115_41183 = state_41065__$1;
(statearr_41115_41183[(2)] = null);

(statearr_41115_41183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (17))){
var state_41065__$1 = state_41065;
var statearr_41116_41184 = state_41065__$1;
(statearr_41116_41184[(2)] = null);

(statearr_41116_41184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (3))){
var inst_41063 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41065__$1,inst_41063);
} else {
if((state_val_41066 === (12))){
var inst_40992 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41117_41185 = state_41065__$1;
(statearr_41117_41185[(2)] = inst_40992);

(statearr_41117_41185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (2))){
var state_41065__$1 = state_41065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41065__$1,(4),ch);
} else {
if((state_val_41066 === (23))){
var state_41065__$1 = state_41065;
var statearr_41118_41186 = state_41065__$1;
(statearr_41118_41186[(2)] = null);

(statearr_41118_41186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (35))){
var inst_41047 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41119_41187 = state_41065__$1;
(statearr_41119_41187[(2)] = inst_41047);

(statearr_41119_41187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (19))){
var inst_40964 = (state_41065[(7)]);
var inst_40968 = cljs.core.chunk_first.call(null,inst_40964);
var inst_40969 = cljs.core.chunk_rest.call(null,inst_40964);
var inst_40970 = cljs.core.count.call(null,inst_40968);
var inst_40942 = inst_40969;
var inst_40943 = inst_40968;
var inst_40944 = inst_40970;
var inst_40945 = (0);
var state_41065__$1 = (function (){var statearr_41120 = state_41065;
(statearr_41120[(13)] = inst_40945);

(statearr_41120[(14)] = inst_40944);

(statearr_41120[(16)] = inst_40942);

(statearr_41120[(17)] = inst_40943);

return statearr_41120;
})();
var statearr_41121_41188 = state_41065__$1;
(statearr_41121_41188[(2)] = null);

(statearr_41121_41188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (11))){
var inst_40942 = (state_41065[(16)]);
var inst_40964 = (state_41065[(7)]);
var inst_40964__$1 = cljs.core.seq.call(null,inst_40942);
var state_41065__$1 = (function (){var statearr_41122 = state_41065;
(statearr_41122[(7)] = inst_40964__$1);

return statearr_41122;
})();
if(inst_40964__$1){
var statearr_41123_41189 = state_41065__$1;
(statearr_41123_41189[(1)] = (16));

} else {
var statearr_41124_41190 = state_41065__$1;
(statearr_41124_41190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (9))){
var inst_40994 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41125_41191 = state_41065__$1;
(statearr_41125_41191[(2)] = inst_40994);

(statearr_41125_41191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (5))){
var inst_40940 = cljs.core.deref.call(null,cs);
var inst_40941 = cljs.core.seq.call(null,inst_40940);
var inst_40942 = inst_40941;
var inst_40943 = null;
var inst_40944 = (0);
var inst_40945 = (0);
var state_41065__$1 = (function (){var statearr_41126 = state_41065;
(statearr_41126[(13)] = inst_40945);

(statearr_41126[(14)] = inst_40944);

(statearr_41126[(16)] = inst_40942);

(statearr_41126[(17)] = inst_40943);

return statearr_41126;
})();
var statearr_41127_41192 = state_41065__$1;
(statearr_41127_41192[(2)] = null);

(statearr_41127_41192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (14))){
var state_41065__$1 = state_41065;
var statearr_41128_41193 = state_41065__$1;
(statearr_41128_41193[(2)] = null);

(statearr_41128_41193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (45))){
var inst_41055 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41129_41194 = state_41065__$1;
(statearr_41129_41194[(2)] = inst_41055);

(statearr_41129_41194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (26))){
var inst_40997 = (state_41065[(29)]);
var inst_41051 = (state_41065[(2)]);
var inst_41052 = cljs.core.seq.call(null,inst_40997);
var state_41065__$1 = (function (){var statearr_41130 = state_41065;
(statearr_41130[(31)] = inst_41051);

return statearr_41130;
})();
if(inst_41052){
var statearr_41131_41195 = state_41065__$1;
(statearr_41131_41195[(1)] = (42));

} else {
var statearr_41132_41196 = state_41065__$1;
(statearr_41132_41196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (16))){
var inst_40964 = (state_41065[(7)]);
var inst_40966 = cljs.core.chunked_seq_QMARK_.call(null,inst_40964);
var state_41065__$1 = state_41065;
if(inst_40966){
var statearr_41133_41197 = state_41065__$1;
(statearr_41133_41197[(1)] = (19));

} else {
var statearr_41134_41198 = state_41065__$1;
(statearr_41134_41198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (38))){
var inst_41044 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41135_41199 = state_41065__$1;
(statearr_41135_41199[(2)] = inst_41044);

(statearr_41135_41199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (30))){
var state_41065__$1 = state_41065;
var statearr_41136_41200 = state_41065__$1;
(statearr_41136_41200[(2)] = null);

(statearr_41136_41200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (10))){
var inst_40945 = (state_41065[(13)]);
var inst_40943 = (state_41065[(17)]);
var inst_40953 = cljs.core._nth.call(null,inst_40943,inst_40945);
var inst_40954 = cljs.core.nth.call(null,inst_40953,(0),null);
var inst_40955 = cljs.core.nth.call(null,inst_40953,(1),null);
var state_41065__$1 = (function (){var statearr_41137 = state_41065;
(statearr_41137[(26)] = inst_40954);

return statearr_41137;
})();
if(cljs.core.truth_(inst_40955)){
var statearr_41138_41201 = state_41065__$1;
(statearr_41138_41201[(1)] = (13));

} else {
var statearr_41139_41202 = state_41065__$1;
(statearr_41139_41202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (18))){
var inst_40990 = (state_41065[(2)]);
var state_41065__$1 = state_41065;
var statearr_41140_41203 = state_41065__$1;
(statearr_41140_41203[(2)] = inst_40990);

(statearr_41140_41203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (42))){
var state_41065__$1 = state_41065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41065__$1,(45),dchan);
} else {
if((state_val_41066 === (37))){
var inst_41033 = (state_41065[(23)]);
var inst_40933 = (state_41065[(9)]);
var inst_41024 = (state_41065[(25)]);
var inst_41033__$1 = cljs.core.first.call(null,inst_41024);
var inst_41034 = cljs.core.async.put_BANG_.call(null,inst_41033__$1,inst_40933,done);
var state_41065__$1 = (function (){var statearr_41141 = state_41065;
(statearr_41141[(23)] = inst_41033__$1);

return statearr_41141;
})();
if(cljs.core.truth_(inst_41034)){
var statearr_41142_41204 = state_41065__$1;
(statearr_41142_41204[(1)] = (39));

} else {
var statearr_41143_41205 = state_41065__$1;
(statearr_41143_41205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41066 === (8))){
var inst_40945 = (state_41065[(13)]);
var inst_40944 = (state_41065[(14)]);
var inst_40947 = (inst_40945 < inst_40944);
var inst_40948 = inst_40947;
var state_41065__$1 = state_41065;
if(cljs.core.truth_(inst_40948)){
var statearr_41144_41206 = state_41065__$1;
(statearr_41144_41206[(1)] = (10));

} else {
var statearr_41145_41207 = state_41065__$1;
(statearr_41145_41207[(1)] = (11));

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
});})(c__10513__auto___41153,cs,m,dchan,dctr,done))
;
return ((function (switch__10492__auto__,c__10513__auto___41153,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10493__auto__ = null;
var cljs$core$async$mult_$_state_machine__10493__auto____0 = (function (){
var statearr_41149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41149[(0)] = cljs$core$async$mult_$_state_machine__10493__auto__);

(statearr_41149[(1)] = (1));

return statearr_41149;
});
var cljs$core$async$mult_$_state_machine__10493__auto____1 = (function (state_41065){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_41065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e41150){if((e41150 instanceof Object)){
var ex__10496__auto__ = e41150;
var statearr_41151_41208 = state_41065;
(statearr_41151_41208[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41209 = state_41065;
state_41065 = G__41209;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10493__auto__ = function(state_41065){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10493__auto____1.call(this,state_41065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10493__auto____0;
cljs$core$async$mult_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10493__auto____1;
return cljs$core$async$mult_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___41153,cs,m,dchan,dctr,done))
})();
var state__10515__auto__ = (function (){var statearr_41152 = f__10514__auto__.call(null);
(statearr_41152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___41153);

return statearr_41152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___41153,cs,m,dchan,dctr,done))
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
var args41210 = [];
var len__7651__auto___41213 = arguments.length;
var i__7652__auto___41214 = (0);
while(true){
if((i__7652__auto___41214 < len__7651__auto___41213)){
args41210.push((arguments[i__7652__auto___41214]));

var G__41215 = (i__7652__auto___41214 + (1));
i__7652__auto___41214 = G__41215;
continue;
} else {
}
break;
}

var G__41212 = args41210.length;
switch (G__41212) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41210.length)].join('')));

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
var len__7651__auto___41227 = arguments.length;
var i__7652__auto___41228 = (0);
while(true){
if((i__7652__auto___41228 < len__7651__auto___41227)){
args__7658__auto__.push((arguments[i__7652__auto___41228]));

var G__41229 = (i__7652__auto___41228 + (1));
i__7652__auto___41228 = G__41229;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41221){
var map__41222 = p__41221;
var map__41222__$1 = ((((!((map__41222 == null)))?((((map__41222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41222):map__41222);
var opts = map__41222__$1;
var statearr_41224_41230 = state;
(statearr_41224_41230[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__41222,map__41222__$1,opts){
return (function (val){
var statearr_41225_41231 = state;
(statearr_41225_41231[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41222,map__41222__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_41226_41232 = state;
(statearr_41226_41232[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41217){
var G__41218 = cljs.core.first.call(null,seq41217);
var seq41217__$1 = cljs.core.next.call(null,seq41217);
var G__41219 = cljs.core.first.call(null,seq41217__$1);
var seq41217__$2 = cljs.core.next.call(null,seq41217__$1);
var G__41220 = cljs.core.first.call(null,seq41217__$2);
var seq41217__$3 = cljs.core.next.call(null,seq41217__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41218,G__41219,G__41220,seq41217__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41400 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41401){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41401 = meta41401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41402,meta41401__$1){
var self__ = this;
var _41402__$1 = this;
return (new cljs.core.async.t_cljs$core$async41400(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41401__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41402){
var self__ = this;
var _41402__$1 = this;
return self__.meta41401;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41400.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41401","meta41401",1276449241,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41400.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41400";

cljs.core.async.t_cljs$core$async41400.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async41400");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41400 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41400(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41401){
return (new cljs.core.async.t_cljs$core$async41400(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41401));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41400(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10513__auto___41567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___41567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___41567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41504){
var state_val_41505 = (state_41504[(1)]);
if((state_val_41505 === (7))){
var inst_41419 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
var statearr_41506_41568 = state_41504__$1;
(statearr_41506_41568[(2)] = inst_41419);

(statearr_41506_41568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (20))){
var inst_41431 = (state_41504[(7)]);
var state_41504__$1 = state_41504;
var statearr_41507_41569 = state_41504__$1;
(statearr_41507_41569[(2)] = inst_41431);

(statearr_41507_41569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (27))){
var state_41504__$1 = state_41504;
var statearr_41508_41570 = state_41504__$1;
(statearr_41508_41570[(2)] = null);

(statearr_41508_41570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (1))){
var inst_41406 = (state_41504[(8)]);
var inst_41406__$1 = calc_state.call(null);
var inst_41408 = (inst_41406__$1 == null);
var inst_41409 = cljs.core.not.call(null,inst_41408);
var state_41504__$1 = (function (){var statearr_41509 = state_41504;
(statearr_41509[(8)] = inst_41406__$1);

return statearr_41509;
})();
if(inst_41409){
var statearr_41510_41571 = state_41504__$1;
(statearr_41510_41571[(1)] = (2));

} else {
var statearr_41511_41572 = state_41504__$1;
(statearr_41511_41572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (24))){
var inst_41464 = (state_41504[(9)]);
var inst_41478 = (state_41504[(10)]);
var inst_41455 = (state_41504[(11)]);
var inst_41478__$1 = inst_41455.call(null,inst_41464);
var state_41504__$1 = (function (){var statearr_41512 = state_41504;
(statearr_41512[(10)] = inst_41478__$1);

return statearr_41512;
})();
if(cljs.core.truth_(inst_41478__$1)){
var statearr_41513_41573 = state_41504__$1;
(statearr_41513_41573[(1)] = (29));

} else {
var statearr_41514_41574 = state_41504__$1;
(statearr_41514_41574[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (4))){
var inst_41422 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41422)){
var statearr_41515_41575 = state_41504__$1;
(statearr_41515_41575[(1)] = (8));

} else {
var statearr_41516_41576 = state_41504__$1;
(statearr_41516_41576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (15))){
var inst_41449 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41449)){
var statearr_41517_41577 = state_41504__$1;
(statearr_41517_41577[(1)] = (19));

} else {
var statearr_41518_41578 = state_41504__$1;
(statearr_41518_41578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (21))){
var inst_41454 = (state_41504[(12)]);
var inst_41454__$1 = (state_41504[(2)]);
var inst_41455 = cljs.core.get.call(null,inst_41454__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41456 = cljs.core.get.call(null,inst_41454__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41457 = cljs.core.get.call(null,inst_41454__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41504__$1 = (function (){var statearr_41519 = state_41504;
(statearr_41519[(13)] = inst_41456);

(statearr_41519[(12)] = inst_41454__$1);

(statearr_41519[(11)] = inst_41455);

return statearr_41519;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41504__$1,(22),inst_41457);
} else {
if((state_val_41505 === (31))){
var inst_41486 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41486)){
var statearr_41520_41579 = state_41504__$1;
(statearr_41520_41579[(1)] = (32));

} else {
var statearr_41521_41580 = state_41504__$1;
(statearr_41521_41580[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (32))){
var inst_41463 = (state_41504[(14)]);
var state_41504__$1 = state_41504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41504__$1,(35),out,inst_41463);
} else {
if((state_val_41505 === (33))){
var inst_41454 = (state_41504[(12)]);
var inst_41431 = inst_41454;
var state_41504__$1 = (function (){var statearr_41522 = state_41504;
(statearr_41522[(7)] = inst_41431);

return statearr_41522;
})();
var statearr_41523_41581 = state_41504__$1;
(statearr_41523_41581[(2)] = null);

(statearr_41523_41581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (13))){
var inst_41431 = (state_41504[(7)]);
var inst_41438 = inst_41431.cljs$lang$protocol_mask$partition0$;
var inst_41439 = (inst_41438 & (64));
var inst_41440 = inst_41431.cljs$core$ISeq$;
var inst_41441 = (cljs.core.PROTOCOL_SENTINEL === inst_41440);
var inst_41442 = (inst_41439) || (inst_41441);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41442)){
var statearr_41524_41582 = state_41504__$1;
(statearr_41524_41582[(1)] = (16));

} else {
var statearr_41525_41583 = state_41504__$1;
(statearr_41525_41583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (22))){
var inst_41463 = (state_41504[(14)]);
var inst_41464 = (state_41504[(9)]);
var inst_41462 = (state_41504[(2)]);
var inst_41463__$1 = cljs.core.nth.call(null,inst_41462,(0),null);
var inst_41464__$1 = cljs.core.nth.call(null,inst_41462,(1),null);
var inst_41465 = (inst_41463__$1 == null);
var inst_41466 = cljs.core._EQ_.call(null,inst_41464__$1,change);
var inst_41467 = (inst_41465) || (inst_41466);
var state_41504__$1 = (function (){var statearr_41526 = state_41504;
(statearr_41526[(14)] = inst_41463__$1);

(statearr_41526[(9)] = inst_41464__$1);

return statearr_41526;
})();
if(cljs.core.truth_(inst_41467)){
var statearr_41527_41584 = state_41504__$1;
(statearr_41527_41584[(1)] = (23));

} else {
var statearr_41528_41585 = state_41504__$1;
(statearr_41528_41585[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (36))){
var inst_41454 = (state_41504[(12)]);
var inst_41431 = inst_41454;
var state_41504__$1 = (function (){var statearr_41529 = state_41504;
(statearr_41529[(7)] = inst_41431);

return statearr_41529;
})();
var statearr_41530_41586 = state_41504__$1;
(statearr_41530_41586[(2)] = null);

(statearr_41530_41586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (29))){
var inst_41478 = (state_41504[(10)]);
var state_41504__$1 = state_41504;
var statearr_41531_41587 = state_41504__$1;
(statearr_41531_41587[(2)] = inst_41478);

(statearr_41531_41587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (6))){
var state_41504__$1 = state_41504;
var statearr_41532_41588 = state_41504__$1;
(statearr_41532_41588[(2)] = false);

(statearr_41532_41588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (28))){
var inst_41474 = (state_41504[(2)]);
var inst_41475 = calc_state.call(null);
var inst_41431 = inst_41475;
var state_41504__$1 = (function (){var statearr_41533 = state_41504;
(statearr_41533[(7)] = inst_41431);

(statearr_41533[(15)] = inst_41474);

return statearr_41533;
})();
var statearr_41534_41589 = state_41504__$1;
(statearr_41534_41589[(2)] = null);

(statearr_41534_41589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (25))){
var inst_41500 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
var statearr_41535_41590 = state_41504__$1;
(statearr_41535_41590[(2)] = inst_41500);

(statearr_41535_41590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (34))){
var inst_41498 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
var statearr_41536_41591 = state_41504__$1;
(statearr_41536_41591[(2)] = inst_41498);

(statearr_41536_41591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (17))){
var state_41504__$1 = state_41504;
var statearr_41537_41592 = state_41504__$1;
(statearr_41537_41592[(2)] = false);

(statearr_41537_41592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (3))){
var state_41504__$1 = state_41504;
var statearr_41538_41593 = state_41504__$1;
(statearr_41538_41593[(2)] = false);

(statearr_41538_41593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (12))){
var inst_41502 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41504__$1,inst_41502);
} else {
if((state_val_41505 === (2))){
var inst_41406 = (state_41504[(8)]);
var inst_41411 = inst_41406.cljs$lang$protocol_mask$partition0$;
var inst_41412 = (inst_41411 & (64));
var inst_41413 = inst_41406.cljs$core$ISeq$;
var inst_41414 = (cljs.core.PROTOCOL_SENTINEL === inst_41413);
var inst_41415 = (inst_41412) || (inst_41414);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41415)){
var statearr_41539_41594 = state_41504__$1;
(statearr_41539_41594[(1)] = (5));

} else {
var statearr_41540_41595 = state_41504__$1;
(statearr_41540_41595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (23))){
var inst_41463 = (state_41504[(14)]);
var inst_41469 = (inst_41463 == null);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41469)){
var statearr_41541_41596 = state_41504__$1;
(statearr_41541_41596[(1)] = (26));

} else {
var statearr_41542_41597 = state_41504__$1;
(statearr_41542_41597[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (35))){
var inst_41489 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
if(cljs.core.truth_(inst_41489)){
var statearr_41543_41598 = state_41504__$1;
(statearr_41543_41598[(1)] = (36));

} else {
var statearr_41544_41599 = state_41504__$1;
(statearr_41544_41599[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (19))){
var inst_41431 = (state_41504[(7)]);
var inst_41451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41431);
var state_41504__$1 = state_41504;
var statearr_41545_41600 = state_41504__$1;
(statearr_41545_41600[(2)] = inst_41451);

(statearr_41545_41600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (11))){
var inst_41431 = (state_41504[(7)]);
var inst_41435 = (inst_41431 == null);
var inst_41436 = cljs.core.not.call(null,inst_41435);
var state_41504__$1 = state_41504;
if(inst_41436){
var statearr_41546_41601 = state_41504__$1;
(statearr_41546_41601[(1)] = (13));

} else {
var statearr_41547_41602 = state_41504__$1;
(statearr_41547_41602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (9))){
var inst_41406 = (state_41504[(8)]);
var state_41504__$1 = state_41504;
var statearr_41548_41603 = state_41504__$1;
(statearr_41548_41603[(2)] = inst_41406);

(statearr_41548_41603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (5))){
var state_41504__$1 = state_41504;
var statearr_41549_41604 = state_41504__$1;
(statearr_41549_41604[(2)] = true);

(statearr_41549_41604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (14))){
var state_41504__$1 = state_41504;
var statearr_41550_41605 = state_41504__$1;
(statearr_41550_41605[(2)] = false);

(statearr_41550_41605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (26))){
var inst_41464 = (state_41504[(9)]);
var inst_41471 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41464);
var state_41504__$1 = state_41504;
var statearr_41551_41606 = state_41504__$1;
(statearr_41551_41606[(2)] = inst_41471);

(statearr_41551_41606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (16))){
var state_41504__$1 = state_41504;
var statearr_41552_41607 = state_41504__$1;
(statearr_41552_41607[(2)] = true);

(statearr_41552_41607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (38))){
var inst_41494 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
var statearr_41553_41608 = state_41504__$1;
(statearr_41553_41608[(2)] = inst_41494);

(statearr_41553_41608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (30))){
var inst_41456 = (state_41504[(13)]);
var inst_41464 = (state_41504[(9)]);
var inst_41455 = (state_41504[(11)]);
var inst_41481 = cljs.core.empty_QMARK_.call(null,inst_41455);
var inst_41482 = inst_41456.call(null,inst_41464);
var inst_41483 = cljs.core.not.call(null,inst_41482);
var inst_41484 = (inst_41481) && (inst_41483);
var state_41504__$1 = state_41504;
var statearr_41554_41609 = state_41504__$1;
(statearr_41554_41609[(2)] = inst_41484);

(statearr_41554_41609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (10))){
var inst_41406 = (state_41504[(8)]);
var inst_41427 = (state_41504[(2)]);
var inst_41428 = cljs.core.get.call(null,inst_41427,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41429 = cljs.core.get.call(null,inst_41427,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41430 = cljs.core.get.call(null,inst_41427,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41431 = inst_41406;
var state_41504__$1 = (function (){var statearr_41555 = state_41504;
(statearr_41555[(16)] = inst_41429);

(statearr_41555[(17)] = inst_41428);

(statearr_41555[(7)] = inst_41431);

(statearr_41555[(18)] = inst_41430);

return statearr_41555;
})();
var statearr_41556_41610 = state_41504__$1;
(statearr_41556_41610[(2)] = null);

(statearr_41556_41610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (18))){
var inst_41446 = (state_41504[(2)]);
var state_41504__$1 = state_41504;
var statearr_41557_41611 = state_41504__$1;
(statearr_41557_41611[(2)] = inst_41446);

(statearr_41557_41611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (37))){
var state_41504__$1 = state_41504;
var statearr_41558_41612 = state_41504__$1;
(statearr_41558_41612[(2)] = null);

(statearr_41558_41612[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41505 === (8))){
var inst_41406 = (state_41504[(8)]);
var inst_41424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41406);
var state_41504__$1 = state_41504;
var statearr_41559_41613 = state_41504__$1;
(statearr_41559_41613[(2)] = inst_41424);

(statearr_41559_41613[(1)] = (10));


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
});})(c__10513__auto___41567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10492__auto__,c__10513__auto___41567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10493__auto__ = null;
var cljs$core$async$mix_$_state_machine__10493__auto____0 = (function (){
var statearr_41563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41563[(0)] = cljs$core$async$mix_$_state_machine__10493__auto__);

(statearr_41563[(1)] = (1));

return statearr_41563;
});
var cljs$core$async$mix_$_state_machine__10493__auto____1 = (function (state_41504){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_41504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e41564){if((e41564 instanceof Object)){
var ex__10496__auto__ = e41564;
var statearr_41565_41614 = state_41504;
(statearr_41565_41614[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41615 = state_41504;
state_41504 = G__41615;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10493__auto__ = function(state_41504){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10493__auto____1.call(this,state_41504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10493__auto____0;
cljs$core$async$mix_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10493__auto____1;
return cljs$core$async$mix_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___41567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10515__auto__ = (function (){var statearr_41566 = f__10514__auto__.call(null);
(statearr_41566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___41567);

return statearr_41566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___41567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args41616 = [];
var len__7651__auto___41619 = arguments.length;
var i__7652__auto___41620 = (0);
while(true){
if((i__7652__auto___41620 < len__7651__auto___41619)){
args41616.push((arguments[i__7652__auto___41620]));

var G__41621 = (i__7652__auto___41620 + (1));
i__7652__auto___41620 = G__41621;
continue;
} else {
}
break;
}

var G__41618 = args41616.length;
switch (G__41618) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41616.length)].join('')));

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
var args41624 = [];
var len__7651__auto___41749 = arguments.length;
var i__7652__auto___41750 = (0);
while(true){
if((i__7652__auto___41750 < len__7651__auto___41749)){
args41624.push((arguments[i__7652__auto___41750]));

var G__41751 = (i__7652__auto___41750 + (1));
i__7652__auto___41750 = G__41751;
continue;
} else {
}
break;
}

var G__41626 = args41624.length;
switch (G__41626) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41624.length)].join('')));

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
return (function (p1__41623_SHARP_){
if(cljs.core.truth_(p1__41623_SHARP_.call(null,topic))){
return p1__41623_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41623_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41627 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41628){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41628 = meta41628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41629,meta41628__$1){
var self__ = this;
var _41629__$1 = this;
return (new cljs.core.async.t_cljs$core$async41627(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41628__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41629){
var self__ = this;
var _41629__$1 = this;
return self__.meta41628;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41628","meta41628",458777303,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41627";

cljs.core.async.t_cljs$core$async41627.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async41627");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41627 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41627(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41628){
return (new cljs.core.async.t_cljs$core$async41627(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41628));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41627(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10513__auto___41753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___41753,mults,ensure_mult,p){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___41753,mults,ensure_mult,p){
return (function (state_41701){
var state_val_41702 = (state_41701[(1)]);
if((state_val_41702 === (7))){
var inst_41697 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
var statearr_41703_41754 = state_41701__$1;
(statearr_41703_41754[(2)] = inst_41697);

(statearr_41703_41754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (20))){
var state_41701__$1 = state_41701;
var statearr_41704_41755 = state_41701__$1;
(statearr_41704_41755[(2)] = null);

(statearr_41704_41755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (1))){
var state_41701__$1 = state_41701;
var statearr_41705_41756 = state_41701__$1;
(statearr_41705_41756[(2)] = null);

(statearr_41705_41756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (24))){
var inst_41680 = (state_41701[(7)]);
var inst_41689 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41680);
var state_41701__$1 = state_41701;
var statearr_41706_41757 = state_41701__$1;
(statearr_41706_41757[(2)] = inst_41689);

(statearr_41706_41757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (4))){
var inst_41632 = (state_41701[(8)]);
var inst_41632__$1 = (state_41701[(2)]);
var inst_41633 = (inst_41632__$1 == null);
var state_41701__$1 = (function (){var statearr_41707 = state_41701;
(statearr_41707[(8)] = inst_41632__$1);

return statearr_41707;
})();
if(cljs.core.truth_(inst_41633)){
var statearr_41708_41758 = state_41701__$1;
(statearr_41708_41758[(1)] = (5));

} else {
var statearr_41709_41759 = state_41701__$1;
(statearr_41709_41759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (15))){
var inst_41674 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
var statearr_41710_41760 = state_41701__$1;
(statearr_41710_41760[(2)] = inst_41674);

(statearr_41710_41760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (21))){
var inst_41694 = (state_41701[(2)]);
var state_41701__$1 = (function (){var statearr_41711 = state_41701;
(statearr_41711[(9)] = inst_41694);

return statearr_41711;
})();
var statearr_41712_41761 = state_41701__$1;
(statearr_41712_41761[(2)] = null);

(statearr_41712_41761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (13))){
var inst_41656 = (state_41701[(10)]);
var inst_41658 = cljs.core.chunked_seq_QMARK_.call(null,inst_41656);
var state_41701__$1 = state_41701;
if(inst_41658){
var statearr_41713_41762 = state_41701__$1;
(statearr_41713_41762[(1)] = (16));

} else {
var statearr_41714_41763 = state_41701__$1;
(statearr_41714_41763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (22))){
var inst_41686 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
if(cljs.core.truth_(inst_41686)){
var statearr_41715_41764 = state_41701__$1;
(statearr_41715_41764[(1)] = (23));

} else {
var statearr_41716_41765 = state_41701__$1;
(statearr_41716_41765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (6))){
var inst_41682 = (state_41701[(11)]);
var inst_41680 = (state_41701[(7)]);
var inst_41632 = (state_41701[(8)]);
var inst_41680__$1 = topic_fn.call(null,inst_41632);
var inst_41681 = cljs.core.deref.call(null,mults);
var inst_41682__$1 = cljs.core.get.call(null,inst_41681,inst_41680__$1);
var state_41701__$1 = (function (){var statearr_41717 = state_41701;
(statearr_41717[(11)] = inst_41682__$1);

(statearr_41717[(7)] = inst_41680__$1);

return statearr_41717;
})();
if(cljs.core.truth_(inst_41682__$1)){
var statearr_41718_41766 = state_41701__$1;
(statearr_41718_41766[(1)] = (19));

} else {
var statearr_41719_41767 = state_41701__$1;
(statearr_41719_41767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (25))){
var inst_41691 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
var statearr_41720_41768 = state_41701__$1;
(statearr_41720_41768[(2)] = inst_41691);

(statearr_41720_41768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (17))){
var inst_41656 = (state_41701[(10)]);
var inst_41665 = cljs.core.first.call(null,inst_41656);
var inst_41666 = cljs.core.async.muxch_STAR_.call(null,inst_41665);
var inst_41667 = cljs.core.async.close_BANG_.call(null,inst_41666);
var inst_41668 = cljs.core.next.call(null,inst_41656);
var inst_41642 = inst_41668;
var inst_41643 = null;
var inst_41644 = (0);
var inst_41645 = (0);
var state_41701__$1 = (function (){var statearr_41721 = state_41701;
(statearr_41721[(12)] = inst_41645);

(statearr_41721[(13)] = inst_41644);

(statearr_41721[(14)] = inst_41643);

(statearr_41721[(15)] = inst_41642);

(statearr_41721[(16)] = inst_41667);

return statearr_41721;
})();
var statearr_41722_41769 = state_41701__$1;
(statearr_41722_41769[(2)] = null);

(statearr_41722_41769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (3))){
var inst_41699 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41701__$1,inst_41699);
} else {
if((state_val_41702 === (12))){
var inst_41676 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
var statearr_41723_41770 = state_41701__$1;
(statearr_41723_41770[(2)] = inst_41676);

(statearr_41723_41770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (2))){
var state_41701__$1 = state_41701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41701__$1,(4),ch);
} else {
if((state_val_41702 === (23))){
var state_41701__$1 = state_41701;
var statearr_41724_41771 = state_41701__$1;
(statearr_41724_41771[(2)] = null);

(statearr_41724_41771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (19))){
var inst_41682 = (state_41701[(11)]);
var inst_41632 = (state_41701[(8)]);
var inst_41684 = cljs.core.async.muxch_STAR_.call(null,inst_41682);
var state_41701__$1 = state_41701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41701__$1,(22),inst_41684,inst_41632);
} else {
if((state_val_41702 === (11))){
var inst_41642 = (state_41701[(15)]);
var inst_41656 = (state_41701[(10)]);
var inst_41656__$1 = cljs.core.seq.call(null,inst_41642);
var state_41701__$1 = (function (){var statearr_41725 = state_41701;
(statearr_41725[(10)] = inst_41656__$1);

return statearr_41725;
})();
if(inst_41656__$1){
var statearr_41726_41772 = state_41701__$1;
(statearr_41726_41772[(1)] = (13));

} else {
var statearr_41727_41773 = state_41701__$1;
(statearr_41727_41773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (9))){
var inst_41678 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
var statearr_41728_41774 = state_41701__$1;
(statearr_41728_41774[(2)] = inst_41678);

(statearr_41728_41774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (5))){
var inst_41639 = cljs.core.deref.call(null,mults);
var inst_41640 = cljs.core.vals.call(null,inst_41639);
var inst_41641 = cljs.core.seq.call(null,inst_41640);
var inst_41642 = inst_41641;
var inst_41643 = null;
var inst_41644 = (0);
var inst_41645 = (0);
var state_41701__$1 = (function (){var statearr_41729 = state_41701;
(statearr_41729[(12)] = inst_41645);

(statearr_41729[(13)] = inst_41644);

(statearr_41729[(14)] = inst_41643);

(statearr_41729[(15)] = inst_41642);

return statearr_41729;
})();
var statearr_41730_41775 = state_41701__$1;
(statearr_41730_41775[(2)] = null);

(statearr_41730_41775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (14))){
var state_41701__$1 = state_41701;
var statearr_41734_41776 = state_41701__$1;
(statearr_41734_41776[(2)] = null);

(statearr_41734_41776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (16))){
var inst_41656 = (state_41701[(10)]);
var inst_41660 = cljs.core.chunk_first.call(null,inst_41656);
var inst_41661 = cljs.core.chunk_rest.call(null,inst_41656);
var inst_41662 = cljs.core.count.call(null,inst_41660);
var inst_41642 = inst_41661;
var inst_41643 = inst_41660;
var inst_41644 = inst_41662;
var inst_41645 = (0);
var state_41701__$1 = (function (){var statearr_41735 = state_41701;
(statearr_41735[(12)] = inst_41645);

(statearr_41735[(13)] = inst_41644);

(statearr_41735[(14)] = inst_41643);

(statearr_41735[(15)] = inst_41642);

return statearr_41735;
})();
var statearr_41736_41777 = state_41701__$1;
(statearr_41736_41777[(2)] = null);

(statearr_41736_41777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (10))){
var inst_41645 = (state_41701[(12)]);
var inst_41644 = (state_41701[(13)]);
var inst_41643 = (state_41701[(14)]);
var inst_41642 = (state_41701[(15)]);
var inst_41650 = cljs.core._nth.call(null,inst_41643,inst_41645);
var inst_41651 = cljs.core.async.muxch_STAR_.call(null,inst_41650);
var inst_41652 = cljs.core.async.close_BANG_.call(null,inst_41651);
var inst_41653 = (inst_41645 + (1));
var tmp41731 = inst_41644;
var tmp41732 = inst_41643;
var tmp41733 = inst_41642;
var inst_41642__$1 = tmp41733;
var inst_41643__$1 = tmp41732;
var inst_41644__$1 = tmp41731;
var inst_41645__$1 = inst_41653;
var state_41701__$1 = (function (){var statearr_41737 = state_41701;
(statearr_41737[(12)] = inst_41645__$1);

(statearr_41737[(17)] = inst_41652);

(statearr_41737[(13)] = inst_41644__$1);

(statearr_41737[(14)] = inst_41643__$1);

(statearr_41737[(15)] = inst_41642__$1);

return statearr_41737;
})();
var statearr_41738_41778 = state_41701__$1;
(statearr_41738_41778[(2)] = null);

(statearr_41738_41778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (18))){
var inst_41671 = (state_41701[(2)]);
var state_41701__$1 = state_41701;
var statearr_41739_41779 = state_41701__$1;
(statearr_41739_41779[(2)] = inst_41671);

(statearr_41739_41779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41702 === (8))){
var inst_41645 = (state_41701[(12)]);
var inst_41644 = (state_41701[(13)]);
var inst_41647 = (inst_41645 < inst_41644);
var inst_41648 = inst_41647;
var state_41701__$1 = state_41701;
if(cljs.core.truth_(inst_41648)){
var statearr_41740_41780 = state_41701__$1;
(statearr_41740_41780[(1)] = (10));

} else {
var statearr_41741_41781 = state_41701__$1;
(statearr_41741_41781[(1)] = (11));

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
});})(c__10513__auto___41753,mults,ensure_mult,p))
;
return ((function (switch__10492__auto__,c__10513__auto___41753,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_41745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41745[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_41745[(1)] = (1));

return statearr_41745;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_41701){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_41701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e41746){if((e41746 instanceof Object)){
var ex__10496__auto__ = e41746;
var statearr_41747_41782 = state_41701;
(statearr_41747_41782[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41783 = state_41701;
state_41701 = G__41783;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_41701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_41701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___41753,mults,ensure_mult,p))
})();
var state__10515__auto__ = (function (){var statearr_41748 = f__10514__auto__.call(null);
(statearr_41748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___41753);

return statearr_41748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___41753,mults,ensure_mult,p))
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
var args41784 = [];
var len__7651__auto___41787 = arguments.length;
var i__7652__auto___41788 = (0);
while(true){
if((i__7652__auto___41788 < len__7651__auto___41787)){
args41784.push((arguments[i__7652__auto___41788]));

var G__41789 = (i__7652__auto___41788 + (1));
i__7652__auto___41788 = G__41789;
continue;
} else {
}
break;
}

var G__41786 = args41784.length;
switch (G__41786) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41784.length)].join('')));

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
var args41791 = [];
var len__7651__auto___41794 = arguments.length;
var i__7652__auto___41795 = (0);
while(true){
if((i__7652__auto___41795 < len__7651__auto___41794)){
args41791.push((arguments[i__7652__auto___41795]));

var G__41796 = (i__7652__auto___41795 + (1));
i__7652__auto___41795 = G__41796;
continue;
} else {
}
break;
}

var G__41793 = args41791.length;
switch (G__41793) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41791.length)].join('')));

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
var args41798 = [];
var len__7651__auto___41869 = arguments.length;
var i__7652__auto___41870 = (0);
while(true){
if((i__7652__auto___41870 < len__7651__auto___41869)){
args41798.push((arguments[i__7652__auto___41870]));

var G__41871 = (i__7652__auto___41870 + (1));
i__7652__auto___41870 = G__41871;
continue;
} else {
}
break;
}

var G__41800 = args41798.length;
switch (G__41800) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41798.length)].join('')));

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
var c__10513__auto___41873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___41873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___41873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41839){
var state_val_41840 = (state_41839[(1)]);
if((state_val_41840 === (7))){
var state_41839__$1 = state_41839;
var statearr_41841_41874 = state_41839__$1;
(statearr_41841_41874[(2)] = null);

(statearr_41841_41874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (1))){
var state_41839__$1 = state_41839;
var statearr_41842_41875 = state_41839__$1;
(statearr_41842_41875[(2)] = null);

(statearr_41842_41875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (4))){
var inst_41803 = (state_41839[(7)]);
var inst_41805 = (inst_41803 < cnt);
var state_41839__$1 = state_41839;
if(cljs.core.truth_(inst_41805)){
var statearr_41843_41876 = state_41839__$1;
(statearr_41843_41876[(1)] = (6));

} else {
var statearr_41844_41877 = state_41839__$1;
(statearr_41844_41877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (15))){
var inst_41835 = (state_41839[(2)]);
var state_41839__$1 = state_41839;
var statearr_41845_41878 = state_41839__$1;
(statearr_41845_41878[(2)] = inst_41835);

(statearr_41845_41878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (13))){
var inst_41828 = cljs.core.async.close_BANG_.call(null,out);
var state_41839__$1 = state_41839;
var statearr_41846_41879 = state_41839__$1;
(statearr_41846_41879[(2)] = inst_41828);

(statearr_41846_41879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (6))){
var state_41839__$1 = state_41839;
var statearr_41847_41880 = state_41839__$1;
(statearr_41847_41880[(2)] = null);

(statearr_41847_41880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (3))){
var inst_41837 = (state_41839[(2)]);
var state_41839__$1 = state_41839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41839__$1,inst_41837);
} else {
if((state_val_41840 === (12))){
var inst_41825 = (state_41839[(8)]);
var inst_41825__$1 = (state_41839[(2)]);
var inst_41826 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41825__$1);
var state_41839__$1 = (function (){var statearr_41848 = state_41839;
(statearr_41848[(8)] = inst_41825__$1);

return statearr_41848;
})();
if(cljs.core.truth_(inst_41826)){
var statearr_41849_41881 = state_41839__$1;
(statearr_41849_41881[(1)] = (13));

} else {
var statearr_41850_41882 = state_41839__$1;
(statearr_41850_41882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (2))){
var inst_41802 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41803 = (0);
var state_41839__$1 = (function (){var statearr_41851 = state_41839;
(statearr_41851[(9)] = inst_41802);

(statearr_41851[(7)] = inst_41803);

return statearr_41851;
})();
var statearr_41852_41883 = state_41839__$1;
(statearr_41852_41883[(2)] = null);

(statearr_41852_41883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (11))){
var inst_41803 = (state_41839[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41839,(10),Object,null,(9));
var inst_41812 = chs__$1.call(null,inst_41803);
var inst_41813 = done.call(null,inst_41803);
var inst_41814 = cljs.core.async.take_BANG_.call(null,inst_41812,inst_41813);
var state_41839__$1 = state_41839;
var statearr_41853_41884 = state_41839__$1;
(statearr_41853_41884[(2)] = inst_41814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (9))){
var inst_41803 = (state_41839[(7)]);
var inst_41816 = (state_41839[(2)]);
var inst_41817 = (inst_41803 + (1));
var inst_41803__$1 = inst_41817;
var state_41839__$1 = (function (){var statearr_41854 = state_41839;
(statearr_41854[(7)] = inst_41803__$1);

(statearr_41854[(10)] = inst_41816);

return statearr_41854;
})();
var statearr_41855_41885 = state_41839__$1;
(statearr_41855_41885[(2)] = null);

(statearr_41855_41885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (5))){
var inst_41823 = (state_41839[(2)]);
var state_41839__$1 = (function (){var statearr_41856 = state_41839;
(statearr_41856[(11)] = inst_41823);

return statearr_41856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41839__$1,(12),dchan);
} else {
if((state_val_41840 === (14))){
var inst_41825 = (state_41839[(8)]);
var inst_41830 = cljs.core.apply.call(null,f,inst_41825);
var state_41839__$1 = state_41839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41839__$1,(16),out,inst_41830);
} else {
if((state_val_41840 === (16))){
var inst_41832 = (state_41839[(2)]);
var state_41839__$1 = (function (){var statearr_41857 = state_41839;
(statearr_41857[(12)] = inst_41832);

return statearr_41857;
})();
var statearr_41858_41886 = state_41839__$1;
(statearr_41858_41886[(2)] = null);

(statearr_41858_41886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (10))){
var inst_41807 = (state_41839[(2)]);
var inst_41808 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41839__$1 = (function (){var statearr_41859 = state_41839;
(statearr_41859[(13)] = inst_41807);

return statearr_41859;
})();
var statearr_41860_41887 = state_41839__$1;
(statearr_41860_41887[(2)] = inst_41808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41840 === (8))){
var inst_41821 = (state_41839[(2)]);
var state_41839__$1 = state_41839;
var statearr_41861_41888 = state_41839__$1;
(statearr_41861_41888[(2)] = inst_41821);

(statearr_41861_41888[(1)] = (5));


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
});})(c__10513__auto___41873,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10492__auto__,c__10513__auto___41873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_41865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41865[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_41865[(1)] = (1));

return statearr_41865;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_41839){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_41839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e41866){if((e41866 instanceof Object)){
var ex__10496__auto__ = e41866;
var statearr_41867_41889 = state_41839;
(statearr_41867_41889[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41890 = state_41839;
state_41839 = G__41890;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_41839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_41839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___41873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10515__auto__ = (function (){var statearr_41868 = f__10514__auto__.call(null);
(statearr_41868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___41873);

return statearr_41868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___41873,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args41892 = [];
var len__7651__auto___41950 = arguments.length;
var i__7652__auto___41951 = (0);
while(true){
if((i__7652__auto___41951 < len__7651__auto___41950)){
args41892.push((arguments[i__7652__auto___41951]));

var G__41952 = (i__7652__auto___41951 + (1));
i__7652__auto___41951 = G__41952;
continue;
} else {
}
break;
}

var G__41894 = args41892.length;
switch (G__41894) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41892.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___41954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___41954,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___41954,out){
return (function (state_41926){
var state_val_41927 = (state_41926[(1)]);
if((state_val_41927 === (7))){
var inst_41906 = (state_41926[(7)]);
var inst_41905 = (state_41926[(8)]);
var inst_41905__$1 = (state_41926[(2)]);
var inst_41906__$1 = cljs.core.nth.call(null,inst_41905__$1,(0),null);
var inst_41907 = cljs.core.nth.call(null,inst_41905__$1,(1),null);
var inst_41908 = (inst_41906__$1 == null);
var state_41926__$1 = (function (){var statearr_41928 = state_41926;
(statearr_41928[(7)] = inst_41906__$1);

(statearr_41928[(9)] = inst_41907);

(statearr_41928[(8)] = inst_41905__$1);

return statearr_41928;
})();
if(cljs.core.truth_(inst_41908)){
var statearr_41929_41955 = state_41926__$1;
(statearr_41929_41955[(1)] = (8));

} else {
var statearr_41930_41956 = state_41926__$1;
(statearr_41930_41956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (1))){
var inst_41895 = cljs.core.vec.call(null,chs);
var inst_41896 = inst_41895;
var state_41926__$1 = (function (){var statearr_41931 = state_41926;
(statearr_41931[(10)] = inst_41896);

return statearr_41931;
})();
var statearr_41932_41957 = state_41926__$1;
(statearr_41932_41957[(2)] = null);

(statearr_41932_41957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (4))){
var inst_41896 = (state_41926[(10)]);
var state_41926__$1 = state_41926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41926__$1,(7),inst_41896);
} else {
if((state_val_41927 === (6))){
var inst_41922 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41933_41958 = state_41926__$1;
(statearr_41933_41958[(2)] = inst_41922);

(statearr_41933_41958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (3))){
var inst_41924 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41926__$1,inst_41924);
} else {
if((state_val_41927 === (2))){
var inst_41896 = (state_41926[(10)]);
var inst_41898 = cljs.core.count.call(null,inst_41896);
var inst_41899 = (inst_41898 > (0));
var state_41926__$1 = state_41926;
if(cljs.core.truth_(inst_41899)){
var statearr_41935_41959 = state_41926__$1;
(statearr_41935_41959[(1)] = (4));

} else {
var statearr_41936_41960 = state_41926__$1;
(statearr_41936_41960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (11))){
var inst_41896 = (state_41926[(10)]);
var inst_41915 = (state_41926[(2)]);
var tmp41934 = inst_41896;
var inst_41896__$1 = tmp41934;
var state_41926__$1 = (function (){var statearr_41937 = state_41926;
(statearr_41937[(11)] = inst_41915);

(statearr_41937[(10)] = inst_41896__$1);

return statearr_41937;
})();
var statearr_41938_41961 = state_41926__$1;
(statearr_41938_41961[(2)] = null);

(statearr_41938_41961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (9))){
var inst_41906 = (state_41926[(7)]);
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41926__$1,(11),out,inst_41906);
} else {
if((state_val_41927 === (5))){
var inst_41920 = cljs.core.async.close_BANG_.call(null,out);
var state_41926__$1 = state_41926;
var statearr_41939_41962 = state_41926__$1;
(statearr_41939_41962[(2)] = inst_41920);

(statearr_41939_41962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (10))){
var inst_41918 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41940_41963 = state_41926__$1;
(statearr_41940_41963[(2)] = inst_41918);

(statearr_41940_41963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (8))){
var inst_41906 = (state_41926[(7)]);
var inst_41896 = (state_41926[(10)]);
var inst_41907 = (state_41926[(9)]);
var inst_41905 = (state_41926[(8)]);
var inst_41910 = (function (){var cs = inst_41896;
var vec__41901 = inst_41905;
var v = inst_41906;
var c = inst_41907;
return ((function (cs,vec__41901,v,c,inst_41906,inst_41896,inst_41907,inst_41905,state_val_41927,c__10513__auto___41954,out){
return (function (p1__41891_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41891_SHARP_);
});
;})(cs,vec__41901,v,c,inst_41906,inst_41896,inst_41907,inst_41905,state_val_41927,c__10513__auto___41954,out))
})();
var inst_41911 = cljs.core.filterv.call(null,inst_41910,inst_41896);
var inst_41896__$1 = inst_41911;
var state_41926__$1 = (function (){var statearr_41941 = state_41926;
(statearr_41941[(10)] = inst_41896__$1);

return statearr_41941;
})();
var statearr_41942_41964 = state_41926__$1;
(statearr_41942_41964[(2)] = null);

(statearr_41942_41964[(1)] = (2));


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
});})(c__10513__auto___41954,out))
;
return ((function (switch__10492__auto__,c__10513__auto___41954,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_41946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41946[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_41946[(1)] = (1));

return statearr_41946;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_41926){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_41926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e41947){if((e41947 instanceof Object)){
var ex__10496__auto__ = e41947;
var statearr_41948_41965 = state_41926;
(statearr_41948_41965[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41966 = state_41926;
state_41926 = G__41966;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_41926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_41926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___41954,out))
})();
var state__10515__auto__ = (function (){var statearr_41949 = f__10514__auto__.call(null);
(statearr_41949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___41954);

return statearr_41949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___41954,out))
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
var args41967 = [];
var len__7651__auto___42016 = arguments.length;
var i__7652__auto___42017 = (0);
while(true){
if((i__7652__auto___42017 < len__7651__auto___42016)){
args41967.push((arguments[i__7652__auto___42017]));

var G__42018 = (i__7652__auto___42017 + (1));
i__7652__auto___42017 = G__42018;
continue;
} else {
}
break;
}

var G__41969 = args41967.length;
switch (G__41969) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41967.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___42020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___42020,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___42020,out){
return (function (state_41993){
var state_val_41994 = (state_41993[(1)]);
if((state_val_41994 === (7))){
var inst_41975 = (state_41993[(7)]);
var inst_41975__$1 = (state_41993[(2)]);
var inst_41976 = (inst_41975__$1 == null);
var inst_41977 = cljs.core.not.call(null,inst_41976);
var state_41993__$1 = (function (){var statearr_41995 = state_41993;
(statearr_41995[(7)] = inst_41975__$1);

return statearr_41995;
})();
if(inst_41977){
var statearr_41996_42021 = state_41993__$1;
(statearr_41996_42021[(1)] = (8));

} else {
var statearr_41997_42022 = state_41993__$1;
(statearr_41997_42022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (1))){
var inst_41970 = (0);
var state_41993__$1 = (function (){var statearr_41998 = state_41993;
(statearr_41998[(8)] = inst_41970);

return statearr_41998;
})();
var statearr_41999_42023 = state_41993__$1;
(statearr_41999_42023[(2)] = null);

(statearr_41999_42023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (4))){
var state_41993__$1 = state_41993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41993__$1,(7),ch);
} else {
if((state_val_41994 === (6))){
var inst_41988 = (state_41993[(2)]);
var state_41993__$1 = state_41993;
var statearr_42000_42024 = state_41993__$1;
(statearr_42000_42024[(2)] = inst_41988);

(statearr_42000_42024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (3))){
var inst_41990 = (state_41993[(2)]);
var inst_41991 = cljs.core.async.close_BANG_.call(null,out);
var state_41993__$1 = (function (){var statearr_42001 = state_41993;
(statearr_42001[(9)] = inst_41990);

return statearr_42001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41993__$1,inst_41991);
} else {
if((state_val_41994 === (2))){
var inst_41970 = (state_41993[(8)]);
var inst_41972 = (inst_41970 < n);
var state_41993__$1 = state_41993;
if(cljs.core.truth_(inst_41972)){
var statearr_42002_42025 = state_41993__$1;
(statearr_42002_42025[(1)] = (4));

} else {
var statearr_42003_42026 = state_41993__$1;
(statearr_42003_42026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (11))){
var inst_41970 = (state_41993[(8)]);
var inst_41980 = (state_41993[(2)]);
var inst_41981 = (inst_41970 + (1));
var inst_41970__$1 = inst_41981;
var state_41993__$1 = (function (){var statearr_42004 = state_41993;
(statearr_42004[(10)] = inst_41980);

(statearr_42004[(8)] = inst_41970__$1);

return statearr_42004;
})();
var statearr_42005_42027 = state_41993__$1;
(statearr_42005_42027[(2)] = null);

(statearr_42005_42027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (9))){
var state_41993__$1 = state_41993;
var statearr_42006_42028 = state_41993__$1;
(statearr_42006_42028[(2)] = null);

(statearr_42006_42028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (5))){
var state_41993__$1 = state_41993;
var statearr_42007_42029 = state_41993__$1;
(statearr_42007_42029[(2)] = null);

(statearr_42007_42029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (10))){
var inst_41985 = (state_41993[(2)]);
var state_41993__$1 = state_41993;
var statearr_42008_42030 = state_41993__$1;
(statearr_42008_42030[(2)] = inst_41985);

(statearr_42008_42030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41994 === (8))){
var inst_41975 = (state_41993[(7)]);
var state_41993__$1 = state_41993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41993__$1,(11),out,inst_41975);
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
});})(c__10513__auto___42020,out))
;
return ((function (switch__10492__auto__,c__10513__auto___42020,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_42012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42012[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_42012[(1)] = (1));

return statearr_42012;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_41993){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_41993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e42013){if((e42013 instanceof Object)){
var ex__10496__auto__ = e42013;
var statearr_42014_42031 = state_41993;
(statearr_42014_42031[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42032 = state_41993;
state_41993 = G__42032;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_41993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_41993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___42020,out))
})();
var state__10515__auto__ = (function (){var statearr_42015 = f__10514__auto__.call(null);
(statearr_42015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___42020);

return statearr_42015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___42020,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42040 = (function (f,ch,meta42041){
this.f = f;
this.ch = ch;
this.meta42041 = meta42041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42042,meta42041__$1){
var self__ = this;
var _42042__$1 = this;
return (new cljs.core.async.t_cljs$core$async42040(self__.f,self__.ch,meta42041__$1));
});

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42042){
var self__ = this;
var _42042__$1 = this;
return self__.meta42041;
});

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42043 = (function (f,ch,meta42041,_,fn1,meta42044){
this.f = f;
this.ch = ch;
this.meta42041 = meta42041;
this._ = _;
this.fn1 = fn1;
this.meta42044 = meta42044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42045,meta42044__$1){
var self__ = this;
var _42045__$1 = this;
return (new cljs.core.async.t_cljs$core$async42043(self__.f,self__.ch,self__.meta42041,self__._,self__.fn1,meta42044__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42045){
var self__ = this;
var _42045__$1 = this;
return self__.meta42044;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42043.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42033_SHARP_){
return f1.call(null,(((p1__42033_SHARP_ == null))?null:self__.f.call(null,p1__42033_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42043.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42041","meta42041",-115145019,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42040","cljs.core.async/t_cljs$core$async42040",849697423,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42044","meta42044",1200176998,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42043";

cljs.core.async.t_cljs$core$async42043.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async42043");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42043 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42043(f__$1,ch__$1,meta42041__$1,___$2,fn1__$1,meta42044){
return (new cljs.core.async.t_cljs$core$async42043(f__$1,ch__$1,meta42041__$1,___$2,fn1__$1,meta42044));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42043(self__.f,self__.ch,self__.meta42041,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42041","meta42041",-115145019,null)], null);
});

cljs.core.async.t_cljs$core$async42040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42040";

cljs.core.async.t_cljs$core$async42040.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async42040");
});

cljs.core.async.__GT_t_cljs$core$async42040 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42040(f__$1,ch__$1,meta42041){
return (new cljs.core.async.t_cljs$core$async42040(f__$1,ch__$1,meta42041));
});

}

return (new cljs.core.async.t_cljs$core$async42040(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42049 = (function (f,ch,meta42050){
this.f = f;
this.ch = ch;
this.meta42050 = meta42050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42051,meta42050__$1){
var self__ = this;
var _42051__$1 = this;
return (new cljs.core.async.t_cljs$core$async42049(self__.f,self__.ch,meta42050__$1));
});

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42051){
var self__ = this;
var _42051__$1 = this;
return self__.meta42050;
});

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42050","meta42050",660507047,null)], null);
});

cljs.core.async.t_cljs$core$async42049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42049";

cljs.core.async.t_cljs$core$async42049.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async42049");
});

cljs.core.async.__GT_t_cljs$core$async42049 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42049(f__$1,ch__$1,meta42050){
return (new cljs.core.async.t_cljs$core$async42049(f__$1,ch__$1,meta42050));
});

}

return (new cljs.core.async.t_cljs$core$async42049(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42055 = (function (p,ch,meta42056){
this.p = p;
this.ch = ch;
this.meta42056 = meta42056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42057,meta42056__$1){
var self__ = this;
var _42057__$1 = this;
return (new cljs.core.async.t_cljs$core$async42055(self__.p,self__.ch,meta42056__$1));
});

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42057){
var self__ = this;
var _42057__$1 = this;
return self__.meta42056;
});

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42056","meta42056",-1190902122,null)], null);
});

cljs.core.async.t_cljs$core$async42055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42055";

cljs.core.async.t_cljs$core$async42055.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async42055");
});

cljs.core.async.__GT_t_cljs$core$async42055 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42055(p__$1,ch__$1,meta42056){
return (new cljs.core.async.t_cljs$core$async42055(p__$1,ch__$1,meta42056));
});

}

return (new cljs.core.async.t_cljs$core$async42055(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42058 = [];
var len__7651__auto___42102 = arguments.length;
var i__7652__auto___42103 = (0);
while(true){
if((i__7652__auto___42103 < len__7651__auto___42102)){
args42058.push((arguments[i__7652__auto___42103]));

var G__42104 = (i__7652__auto___42103 + (1));
i__7652__auto___42103 = G__42104;
continue;
} else {
}
break;
}

var G__42060 = args42058.length;
switch (G__42060) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42058.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___42106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___42106,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___42106,out){
return (function (state_42081){
var state_val_42082 = (state_42081[(1)]);
if((state_val_42082 === (7))){
var inst_42077 = (state_42081[(2)]);
var state_42081__$1 = state_42081;
var statearr_42083_42107 = state_42081__$1;
(statearr_42083_42107[(2)] = inst_42077);

(statearr_42083_42107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (1))){
var state_42081__$1 = state_42081;
var statearr_42084_42108 = state_42081__$1;
(statearr_42084_42108[(2)] = null);

(statearr_42084_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (4))){
var inst_42063 = (state_42081[(7)]);
var inst_42063__$1 = (state_42081[(2)]);
var inst_42064 = (inst_42063__$1 == null);
var state_42081__$1 = (function (){var statearr_42085 = state_42081;
(statearr_42085[(7)] = inst_42063__$1);

return statearr_42085;
})();
if(cljs.core.truth_(inst_42064)){
var statearr_42086_42109 = state_42081__$1;
(statearr_42086_42109[(1)] = (5));

} else {
var statearr_42087_42110 = state_42081__$1;
(statearr_42087_42110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (6))){
var inst_42063 = (state_42081[(7)]);
var inst_42068 = p.call(null,inst_42063);
var state_42081__$1 = state_42081;
if(cljs.core.truth_(inst_42068)){
var statearr_42088_42111 = state_42081__$1;
(statearr_42088_42111[(1)] = (8));

} else {
var statearr_42089_42112 = state_42081__$1;
(statearr_42089_42112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (3))){
var inst_42079 = (state_42081[(2)]);
var state_42081__$1 = state_42081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42081__$1,inst_42079);
} else {
if((state_val_42082 === (2))){
var state_42081__$1 = state_42081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42081__$1,(4),ch);
} else {
if((state_val_42082 === (11))){
var inst_42071 = (state_42081[(2)]);
var state_42081__$1 = state_42081;
var statearr_42090_42113 = state_42081__$1;
(statearr_42090_42113[(2)] = inst_42071);

(statearr_42090_42113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (9))){
var state_42081__$1 = state_42081;
var statearr_42091_42114 = state_42081__$1;
(statearr_42091_42114[(2)] = null);

(statearr_42091_42114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (5))){
var inst_42066 = cljs.core.async.close_BANG_.call(null,out);
var state_42081__$1 = state_42081;
var statearr_42092_42115 = state_42081__$1;
(statearr_42092_42115[(2)] = inst_42066);

(statearr_42092_42115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (10))){
var inst_42074 = (state_42081[(2)]);
var state_42081__$1 = (function (){var statearr_42093 = state_42081;
(statearr_42093[(8)] = inst_42074);

return statearr_42093;
})();
var statearr_42094_42116 = state_42081__$1;
(statearr_42094_42116[(2)] = null);

(statearr_42094_42116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42082 === (8))){
var inst_42063 = (state_42081[(7)]);
var state_42081__$1 = state_42081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42081__$1,(11),out,inst_42063);
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
});})(c__10513__auto___42106,out))
;
return ((function (switch__10492__auto__,c__10513__auto___42106,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_42098 = [null,null,null,null,null,null,null,null,null];
(statearr_42098[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_42098[(1)] = (1));

return statearr_42098;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_42081){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_42081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e42099){if((e42099 instanceof Object)){
var ex__10496__auto__ = e42099;
var statearr_42100_42117 = state_42081;
(statearr_42100_42117[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42118 = state_42081;
state_42081 = G__42118;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_42081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_42081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___42106,out))
})();
var state__10515__auto__ = (function (){var statearr_42101 = f__10514__auto__.call(null);
(statearr_42101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___42106);

return statearr_42101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___42106,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42119 = [];
var len__7651__auto___42122 = arguments.length;
var i__7652__auto___42123 = (0);
while(true){
if((i__7652__auto___42123 < len__7651__auto___42122)){
args42119.push((arguments[i__7652__auto___42123]));

var G__42124 = (i__7652__auto___42123 + (1));
i__7652__auto___42123 = G__42124;
continue;
} else {
}
break;
}

var G__42121 = args42119.length;
switch (G__42121) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42119.length)].join('')));

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
return (function (state_42291){
var state_val_42292 = (state_42291[(1)]);
if((state_val_42292 === (7))){
var inst_42287 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42293_42334 = state_42291__$1;
(statearr_42293_42334[(2)] = inst_42287);

(statearr_42293_42334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (20))){
var inst_42257 = (state_42291[(7)]);
var inst_42268 = (state_42291[(2)]);
var inst_42269 = cljs.core.next.call(null,inst_42257);
var inst_42243 = inst_42269;
var inst_42244 = null;
var inst_42245 = (0);
var inst_42246 = (0);
var state_42291__$1 = (function (){var statearr_42294 = state_42291;
(statearr_42294[(8)] = inst_42244);

(statearr_42294[(9)] = inst_42246);

(statearr_42294[(10)] = inst_42243);

(statearr_42294[(11)] = inst_42245);

(statearr_42294[(12)] = inst_42268);

return statearr_42294;
})();
var statearr_42295_42335 = state_42291__$1;
(statearr_42295_42335[(2)] = null);

(statearr_42295_42335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (1))){
var state_42291__$1 = state_42291;
var statearr_42296_42336 = state_42291__$1;
(statearr_42296_42336[(2)] = null);

(statearr_42296_42336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (4))){
var inst_42232 = (state_42291[(13)]);
var inst_42232__$1 = (state_42291[(2)]);
var inst_42233 = (inst_42232__$1 == null);
var state_42291__$1 = (function (){var statearr_42297 = state_42291;
(statearr_42297[(13)] = inst_42232__$1);

return statearr_42297;
})();
if(cljs.core.truth_(inst_42233)){
var statearr_42298_42337 = state_42291__$1;
(statearr_42298_42337[(1)] = (5));

} else {
var statearr_42299_42338 = state_42291__$1;
(statearr_42299_42338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (15))){
var state_42291__$1 = state_42291;
var statearr_42303_42339 = state_42291__$1;
(statearr_42303_42339[(2)] = null);

(statearr_42303_42339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (21))){
var state_42291__$1 = state_42291;
var statearr_42304_42340 = state_42291__$1;
(statearr_42304_42340[(2)] = null);

(statearr_42304_42340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (13))){
var inst_42244 = (state_42291[(8)]);
var inst_42246 = (state_42291[(9)]);
var inst_42243 = (state_42291[(10)]);
var inst_42245 = (state_42291[(11)]);
var inst_42253 = (state_42291[(2)]);
var inst_42254 = (inst_42246 + (1));
var tmp42300 = inst_42244;
var tmp42301 = inst_42243;
var tmp42302 = inst_42245;
var inst_42243__$1 = tmp42301;
var inst_42244__$1 = tmp42300;
var inst_42245__$1 = tmp42302;
var inst_42246__$1 = inst_42254;
var state_42291__$1 = (function (){var statearr_42305 = state_42291;
(statearr_42305[(8)] = inst_42244__$1);

(statearr_42305[(9)] = inst_42246__$1);

(statearr_42305[(14)] = inst_42253);

(statearr_42305[(10)] = inst_42243__$1);

(statearr_42305[(11)] = inst_42245__$1);

return statearr_42305;
})();
var statearr_42306_42341 = state_42291__$1;
(statearr_42306_42341[(2)] = null);

(statearr_42306_42341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (22))){
var state_42291__$1 = state_42291;
var statearr_42307_42342 = state_42291__$1;
(statearr_42307_42342[(2)] = null);

(statearr_42307_42342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (6))){
var inst_42232 = (state_42291[(13)]);
var inst_42241 = f.call(null,inst_42232);
var inst_42242 = cljs.core.seq.call(null,inst_42241);
var inst_42243 = inst_42242;
var inst_42244 = null;
var inst_42245 = (0);
var inst_42246 = (0);
var state_42291__$1 = (function (){var statearr_42308 = state_42291;
(statearr_42308[(8)] = inst_42244);

(statearr_42308[(9)] = inst_42246);

(statearr_42308[(10)] = inst_42243);

(statearr_42308[(11)] = inst_42245);

return statearr_42308;
})();
var statearr_42309_42343 = state_42291__$1;
(statearr_42309_42343[(2)] = null);

(statearr_42309_42343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (17))){
var inst_42257 = (state_42291[(7)]);
var inst_42261 = cljs.core.chunk_first.call(null,inst_42257);
var inst_42262 = cljs.core.chunk_rest.call(null,inst_42257);
var inst_42263 = cljs.core.count.call(null,inst_42261);
var inst_42243 = inst_42262;
var inst_42244 = inst_42261;
var inst_42245 = inst_42263;
var inst_42246 = (0);
var state_42291__$1 = (function (){var statearr_42310 = state_42291;
(statearr_42310[(8)] = inst_42244);

(statearr_42310[(9)] = inst_42246);

(statearr_42310[(10)] = inst_42243);

(statearr_42310[(11)] = inst_42245);

return statearr_42310;
})();
var statearr_42311_42344 = state_42291__$1;
(statearr_42311_42344[(2)] = null);

(statearr_42311_42344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (3))){
var inst_42289 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42291__$1,inst_42289);
} else {
if((state_val_42292 === (12))){
var inst_42277 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42312_42345 = state_42291__$1;
(statearr_42312_42345[(2)] = inst_42277);

(statearr_42312_42345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (2))){
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42291__$1,(4),in$);
} else {
if((state_val_42292 === (23))){
var inst_42285 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42313_42346 = state_42291__$1;
(statearr_42313_42346[(2)] = inst_42285);

(statearr_42313_42346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (19))){
var inst_42272 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42314_42347 = state_42291__$1;
(statearr_42314_42347[(2)] = inst_42272);

(statearr_42314_42347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (11))){
var inst_42257 = (state_42291[(7)]);
var inst_42243 = (state_42291[(10)]);
var inst_42257__$1 = cljs.core.seq.call(null,inst_42243);
var state_42291__$1 = (function (){var statearr_42315 = state_42291;
(statearr_42315[(7)] = inst_42257__$1);

return statearr_42315;
})();
if(inst_42257__$1){
var statearr_42316_42348 = state_42291__$1;
(statearr_42316_42348[(1)] = (14));

} else {
var statearr_42317_42349 = state_42291__$1;
(statearr_42317_42349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (9))){
var inst_42279 = (state_42291[(2)]);
var inst_42280 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42291__$1 = (function (){var statearr_42318 = state_42291;
(statearr_42318[(15)] = inst_42279);

return statearr_42318;
})();
if(cljs.core.truth_(inst_42280)){
var statearr_42319_42350 = state_42291__$1;
(statearr_42319_42350[(1)] = (21));

} else {
var statearr_42320_42351 = state_42291__$1;
(statearr_42320_42351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (5))){
var inst_42235 = cljs.core.async.close_BANG_.call(null,out);
var state_42291__$1 = state_42291;
var statearr_42321_42352 = state_42291__$1;
(statearr_42321_42352[(2)] = inst_42235);

(statearr_42321_42352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (14))){
var inst_42257 = (state_42291[(7)]);
var inst_42259 = cljs.core.chunked_seq_QMARK_.call(null,inst_42257);
var state_42291__$1 = state_42291;
if(inst_42259){
var statearr_42322_42353 = state_42291__$1;
(statearr_42322_42353[(1)] = (17));

} else {
var statearr_42323_42354 = state_42291__$1;
(statearr_42323_42354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (16))){
var inst_42275 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42324_42355 = state_42291__$1;
(statearr_42324_42355[(2)] = inst_42275);

(statearr_42324_42355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (10))){
var inst_42244 = (state_42291[(8)]);
var inst_42246 = (state_42291[(9)]);
var inst_42251 = cljs.core._nth.call(null,inst_42244,inst_42246);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42291__$1,(13),out,inst_42251);
} else {
if((state_val_42292 === (18))){
var inst_42257 = (state_42291[(7)]);
var inst_42266 = cljs.core.first.call(null,inst_42257);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42291__$1,(20),out,inst_42266);
} else {
if((state_val_42292 === (8))){
var inst_42246 = (state_42291[(9)]);
var inst_42245 = (state_42291[(11)]);
var inst_42248 = (inst_42246 < inst_42245);
var inst_42249 = inst_42248;
var state_42291__$1 = state_42291;
if(cljs.core.truth_(inst_42249)){
var statearr_42325_42356 = state_42291__$1;
(statearr_42325_42356[(1)] = (10));

} else {
var statearr_42326_42357 = state_42291__$1;
(statearr_42326_42357[(1)] = (11));

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
var statearr_42330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42330[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__);

(statearr_42330[(1)] = (1));

return statearr_42330;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1 = (function (state_42291){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_42291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e42331){if((e42331 instanceof Object)){
var ex__10496__auto__ = e42331;
var statearr_42332_42358 = state_42291;
(statearr_42332_42358[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42359 = state_42291;
state_42291 = G__42359;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__ = function(state_42291){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1.call(this,state_42291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_42333 = f__10514__auto__.call(null);
(statearr_42333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_42333;
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
var args42360 = [];
var len__7651__auto___42363 = arguments.length;
var i__7652__auto___42364 = (0);
while(true){
if((i__7652__auto___42364 < len__7651__auto___42363)){
args42360.push((arguments[i__7652__auto___42364]));

var G__42365 = (i__7652__auto___42364 + (1));
i__7652__auto___42364 = G__42365;
continue;
} else {
}
break;
}

var G__42362 = args42360.length;
switch (G__42362) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42360.length)].join('')));

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
var args42367 = [];
var len__7651__auto___42370 = arguments.length;
var i__7652__auto___42371 = (0);
while(true){
if((i__7652__auto___42371 < len__7651__auto___42370)){
args42367.push((arguments[i__7652__auto___42371]));

var G__42372 = (i__7652__auto___42371 + (1));
i__7652__auto___42371 = G__42372;
continue;
} else {
}
break;
}

var G__42369 = args42367.length;
switch (G__42369) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42367.length)].join('')));

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
var args42374 = [];
var len__7651__auto___42425 = arguments.length;
var i__7652__auto___42426 = (0);
while(true){
if((i__7652__auto___42426 < len__7651__auto___42425)){
args42374.push((arguments[i__7652__auto___42426]));

var G__42427 = (i__7652__auto___42426 + (1));
i__7652__auto___42426 = G__42427;
continue;
} else {
}
break;
}

var G__42376 = args42374.length;
switch (G__42376) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42374.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___42429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___42429,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___42429,out){
return (function (state_42400){
var state_val_42401 = (state_42400[(1)]);
if((state_val_42401 === (7))){
var inst_42395 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42402_42430 = state_42400__$1;
(statearr_42402_42430[(2)] = inst_42395);

(statearr_42402_42430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (1))){
var inst_42377 = null;
var state_42400__$1 = (function (){var statearr_42403 = state_42400;
(statearr_42403[(7)] = inst_42377);

return statearr_42403;
})();
var statearr_42404_42431 = state_42400__$1;
(statearr_42404_42431[(2)] = null);

(statearr_42404_42431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (4))){
var inst_42380 = (state_42400[(8)]);
var inst_42380__$1 = (state_42400[(2)]);
var inst_42381 = (inst_42380__$1 == null);
var inst_42382 = cljs.core.not.call(null,inst_42381);
var state_42400__$1 = (function (){var statearr_42405 = state_42400;
(statearr_42405[(8)] = inst_42380__$1);

return statearr_42405;
})();
if(inst_42382){
var statearr_42406_42432 = state_42400__$1;
(statearr_42406_42432[(1)] = (5));

} else {
var statearr_42407_42433 = state_42400__$1;
(statearr_42407_42433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (6))){
var state_42400__$1 = state_42400;
var statearr_42408_42434 = state_42400__$1;
(statearr_42408_42434[(2)] = null);

(statearr_42408_42434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (3))){
var inst_42397 = (state_42400[(2)]);
var inst_42398 = cljs.core.async.close_BANG_.call(null,out);
var state_42400__$1 = (function (){var statearr_42409 = state_42400;
(statearr_42409[(9)] = inst_42397);

return statearr_42409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42400__$1,inst_42398);
} else {
if((state_val_42401 === (2))){
var state_42400__$1 = state_42400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42400__$1,(4),ch);
} else {
if((state_val_42401 === (11))){
var inst_42380 = (state_42400[(8)]);
var inst_42389 = (state_42400[(2)]);
var inst_42377 = inst_42380;
var state_42400__$1 = (function (){var statearr_42410 = state_42400;
(statearr_42410[(10)] = inst_42389);

(statearr_42410[(7)] = inst_42377);

return statearr_42410;
})();
var statearr_42411_42435 = state_42400__$1;
(statearr_42411_42435[(2)] = null);

(statearr_42411_42435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (9))){
var inst_42380 = (state_42400[(8)]);
var state_42400__$1 = state_42400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42400__$1,(11),out,inst_42380);
} else {
if((state_val_42401 === (5))){
var inst_42380 = (state_42400[(8)]);
var inst_42377 = (state_42400[(7)]);
var inst_42384 = cljs.core._EQ_.call(null,inst_42380,inst_42377);
var state_42400__$1 = state_42400;
if(inst_42384){
var statearr_42413_42436 = state_42400__$1;
(statearr_42413_42436[(1)] = (8));

} else {
var statearr_42414_42437 = state_42400__$1;
(statearr_42414_42437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (10))){
var inst_42392 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42415_42438 = state_42400__$1;
(statearr_42415_42438[(2)] = inst_42392);

(statearr_42415_42438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (8))){
var inst_42377 = (state_42400[(7)]);
var tmp42412 = inst_42377;
var inst_42377__$1 = tmp42412;
var state_42400__$1 = (function (){var statearr_42416 = state_42400;
(statearr_42416[(7)] = inst_42377__$1);

return statearr_42416;
})();
var statearr_42417_42439 = state_42400__$1;
(statearr_42417_42439[(2)] = null);

(statearr_42417_42439[(1)] = (2));


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
});})(c__10513__auto___42429,out))
;
return ((function (switch__10492__auto__,c__10513__auto___42429,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_42421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42421[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_42421[(1)] = (1));

return statearr_42421;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_42400){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_42400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e42422){if((e42422 instanceof Object)){
var ex__10496__auto__ = e42422;
var statearr_42423_42440 = state_42400;
(statearr_42423_42440[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42441 = state_42400;
state_42400 = G__42441;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_42400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_42400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___42429,out))
})();
var state__10515__auto__ = (function (){var statearr_42424 = f__10514__auto__.call(null);
(statearr_42424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___42429);

return statearr_42424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___42429,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42442 = [];
var len__7651__auto___42512 = arguments.length;
var i__7652__auto___42513 = (0);
while(true){
if((i__7652__auto___42513 < len__7651__auto___42512)){
args42442.push((arguments[i__7652__auto___42513]));

var G__42514 = (i__7652__auto___42513 + (1));
i__7652__auto___42513 = G__42514;
continue;
} else {
}
break;
}

var G__42444 = args42442.length;
switch (G__42444) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42442.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___42516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___42516,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___42516,out){
return (function (state_42482){
var state_val_42483 = (state_42482[(1)]);
if((state_val_42483 === (7))){
var inst_42478 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42484_42517 = state_42482__$1;
(statearr_42484_42517[(2)] = inst_42478);

(statearr_42484_42517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (1))){
var inst_42445 = (new Array(n));
var inst_42446 = inst_42445;
var inst_42447 = (0);
var state_42482__$1 = (function (){var statearr_42485 = state_42482;
(statearr_42485[(7)] = inst_42447);

(statearr_42485[(8)] = inst_42446);

return statearr_42485;
})();
var statearr_42486_42518 = state_42482__$1;
(statearr_42486_42518[(2)] = null);

(statearr_42486_42518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (4))){
var inst_42450 = (state_42482[(9)]);
var inst_42450__$1 = (state_42482[(2)]);
var inst_42451 = (inst_42450__$1 == null);
var inst_42452 = cljs.core.not.call(null,inst_42451);
var state_42482__$1 = (function (){var statearr_42487 = state_42482;
(statearr_42487[(9)] = inst_42450__$1);

return statearr_42487;
})();
if(inst_42452){
var statearr_42488_42519 = state_42482__$1;
(statearr_42488_42519[(1)] = (5));

} else {
var statearr_42489_42520 = state_42482__$1;
(statearr_42489_42520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (15))){
var inst_42472 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42490_42521 = state_42482__$1;
(statearr_42490_42521[(2)] = inst_42472);

(statearr_42490_42521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (13))){
var state_42482__$1 = state_42482;
var statearr_42491_42522 = state_42482__$1;
(statearr_42491_42522[(2)] = null);

(statearr_42491_42522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (6))){
var inst_42447 = (state_42482[(7)]);
var inst_42468 = (inst_42447 > (0));
var state_42482__$1 = state_42482;
if(cljs.core.truth_(inst_42468)){
var statearr_42492_42523 = state_42482__$1;
(statearr_42492_42523[(1)] = (12));

} else {
var statearr_42493_42524 = state_42482__$1;
(statearr_42493_42524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (3))){
var inst_42480 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42482__$1,inst_42480);
} else {
if((state_val_42483 === (12))){
var inst_42446 = (state_42482[(8)]);
var inst_42470 = cljs.core.vec.call(null,inst_42446);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42482__$1,(15),out,inst_42470);
} else {
if((state_val_42483 === (2))){
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42482__$1,(4),ch);
} else {
if((state_val_42483 === (11))){
var inst_42462 = (state_42482[(2)]);
var inst_42463 = (new Array(n));
var inst_42446 = inst_42463;
var inst_42447 = (0);
var state_42482__$1 = (function (){var statearr_42494 = state_42482;
(statearr_42494[(7)] = inst_42447);

(statearr_42494[(8)] = inst_42446);

(statearr_42494[(10)] = inst_42462);

return statearr_42494;
})();
var statearr_42495_42525 = state_42482__$1;
(statearr_42495_42525[(2)] = null);

(statearr_42495_42525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (9))){
var inst_42446 = (state_42482[(8)]);
var inst_42460 = cljs.core.vec.call(null,inst_42446);
var state_42482__$1 = state_42482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42482__$1,(11),out,inst_42460);
} else {
if((state_val_42483 === (5))){
var inst_42455 = (state_42482[(11)]);
var inst_42450 = (state_42482[(9)]);
var inst_42447 = (state_42482[(7)]);
var inst_42446 = (state_42482[(8)]);
var inst_42454 = (inst_42446[inst_42447] = inst_42450);
var inst_42455__$1 = (inst_42447 + (1));
var inst_42456 = (inst_42455__$1 < n);
var state_42482__$1 = (function (){var statearr_42496 = state_42482;
(statearr_42496[(12)] = inst_42454);

(statearr_42496[(11)] = inst_42455__$1);

return statearr_42496;
})();
if(cljs.core.truth_(inst_42456)){
var statearr_42497_42526 = state_42482__$1;
(statearr_42497_42526[(1)] = (8));

} else {
var statearr_42498_42527 = state_42482__$1;
(statearr_42498_42527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (14))){
var inst_42475 = (state_42482[(2)]);
var inst_42476 = cljs.core.async.close_BANG_.call(null,out);
var state_42482__$1 = (function (){var statearr_42500 = state_42482;
(statearr_42500[(13)] = inst_42475);

return statearr_42500;
})();
var statearr_42501_42528 = state_42482__$1;
(statearr_42501_42528[(2)] = inst_42476);

(statearr_42501_42528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (10))){
var inst_42466 = (state_42482[(2)]);
var state_42482__$1 = state_42482;
var statearr_42502_42529 = state_42482__$1;
(statearr_42502_42529[(2)] = inst_42466);

(statearr_42502_42529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42483 === (8))){
var inst_42455 = (state_42482[(11)]);
var inst_42446 = (state_42482[(8)]);
var tmp42499 = inst_42446;
var inst_42446__$1 = tmp42499;
var inst_42447 = inst_42455;
var state_42482__$1 = (function (){var statearr_42503 = state_42482;
(statearr_42503[(7)] = inst_42447);

(statearr_42503[(8)] = inst_42446__$1);

return statearr_42503;
})();
var statearr_42504_42530 = state_42482__$1;
(statearr_42504_42530[(2)] = null);

(statearr_42504_42530[(1)] = (2));


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
});})(c__10513__auto___42516,out))
;
return ((function (switch__10492__auto__,c__10513__auto___42516,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_42508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42508[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_42508[(1)] = (1));

return statearr_42508;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_42482){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_42482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e42509){if((e42509 instanceof Object)){
var ex__10496__auto__ = e42509;
var statearr_42510_42531 = state_42482;
(statearr_42510_42531[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42532 = state_42482;
state_42482 = G__42532;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_42482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_42482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___42516,out))
})();
var state__10515__auto__ = (function (){var statearr_42511 = f__10514__auto__.call(null);
(statearr_42511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___42516);

return statearr_42511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___42516,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42533 = [];
var len__7651__auto___42607 = arguments.length;
var i__7652__auto___42608 = (0);
while(true){
if((i__7652__auto___42608 < len__7651__auto___42607)){
args42533.push((arguments[i__7652__auto___42608]));

var G__42609 = (i__7652__auto___42608 + (1));
i__7652__auto___42608 = G__42609;
continue;
} else {
}
break;
}

var G__42535 = args42533.length;
switch (G__42535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42533.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___42611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___42611,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___42611,out){
return (function (state_42577){
var state_val_42578 = (state_42577[(1)]);
if((state_val_42578 === (7))){
var inst_42573 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42579_42612 = state_42577__$1;
(statearr_42579_42612[(2)] = inst_42573);

(statearr_42579_42612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (1))){
var inst_42536 = [];
var inst_42537 = inst_42536;
var inst_42538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42577__$1 = (function (){var statearr_42580 = state_42577;
(statearr_42580[(7)] = inst_42537);

(statearr_42580[(8)] = inst_42538);

return statearr_42580;
})();
var statearr_42581_42613 = state_42577__$1;
(statearr_42581_42613[(2)] = null);

(statearr_42581_42613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (4))){
var inst_42541 = (state_42577[(9)]);
var inst_42541__$1 = (state_42577[(2)]);
var inst_42542 = (inst_42541__$1 == null);
var inst_42543 = cljs.core.not.call(null,inst_42542);
var state_42577__$1 = (function (){var statearr_42582 = state_42577;
(statearr_42582[(9)] = inst_42541__$1);

return statearr_42582;
})();
if(inst_42543){
var statearr_42583_42614 = state_42577__$1;
(statearr_42583_42614[(1)] = (5));

} else {
var statearr_42584_42615 = state_42577__$1;
(statearr_42584_42615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (15))){
var inst_42567 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42585_42616 = state_42577__$1;
(statearr_42585_42616[(2)] = inst_42567);

(statearr_42585_42616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (13))){
var state_42577__$1 = state_42577;
var statearr_42586_42617 = state_42577__$1;
(statearr_42586_42617[(2)] = null);

(statearr_42586_42617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (6))){
var inst_42537 = (state_42577[(7)]);
var inst_42562 = inst_42537.length;
var inst_42563 = (inst_42562 > (0));
var state_42577__$1 = state_42577;
if(cljs.core.truth_(inst_42563)){
var statearr_42587_42618 = state_42577__$1;
(statearr_42587_42618[(1)] = (12));

} else {
var statearr_42588_42619 = state_42577__$1;
(statearr_42588_42619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (3))){
var inst_42575 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42577__$1,inst_42575);
} else {
if((state_val_42578 === (12))){
var inst_42537 = (state_42577[(7)]);
var inst_42565 = cljs.core.vec.call(null,inst_42537);
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42577__$1,(15),out,inst_42565);
} else {
if((state_val_42578 === (2))){
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42577__$1,(4),ch);
} else {
if((state_val_42578 === (11))){
var inst_42545 = (state_42577[(10)]);
var inst_42541 = (state_42577[(9)]);
var inst_42555 = (state_42577[(2)]);
var inst_42556 = [];
var inst_42557 = inst_42556.push(inst_42541);
var inst_42537 = inst_42556;
var inst_42538 = inst_42545;
var state_42577__$1 = (function (){var statearr_42589 = state_42577;
(statearr_42589[(11)] = inst_42555);

(statearr_42589[(7)] = inst_42537);

(statearr_42589[(12)] = inst_42557);

(statearr_42589[(8)] = inst_42538);

return statearr_42589;
})();
var statearr_42590_42620 = state_42577__$1;
(statearr_42590_42620[(2)] = null);

(statearr_42590_42620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (9))){
var inst_42537 = (state_42577[(7)]);
var inst_42553 = cljs.core.vec.call(null,inst_42537);
var state_42577__$1 = state_42577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42577__$1,(11),out,inst_42553);
} else {
if((state_val_42578 === (5))){
var inst_42545 = (state_42577[(10)]);
var inst_42538 = (state_42577[(8)]);
var inst_42541 = (state_42577[(9)]);
var inst_42545__$1 = f.call(null,inst_42541);
var inst_42546 = cljs.core._EQ_.call(null,inst_42545__$1,inst_42538);
var inst_42547 = cljs.core.keyword_identical_QMARK_.call(null,inst_42538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42548 = (inst_42546) || (inst_42547);
var state_42577__$1 = (function (){var statearr_42591 = state_42577;
(statearr_42591[(10)] = inst_42545__$1);

return statearr_42591;
})();
if(cljs.core.truth_(inst_42548)){
var statearr_42592_42621 = state_42577__$1;
(statearr_42592_42621[(1)] = (8));

} else {
var statearr_42593_42622 = state_42577__$1;
(statearr_42593_42622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (14))){
var inst_42570 = (state_42577[(2)]);
var inst_42571 = cljs.core.async.close_BANG_.call(null,out);
var state_42577__$1 = (function (){var statearr_42595 = state_42577;
(statearr_42595[(13)] = inst_42570);

return statearr_42595;
})();
var statearr_42596_42623 = state_42577__$1;
(statearr_42596_42623[(2)] = inst_42571);

(statearr_42596_42623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (10))){
var inst_42560 = (state_42577[(2)]);
var state_42577__$1 = state_42577;
var statearr_42597_42624 = state_42577__$1;
(statearr_42597_42624[(2)] = inst_42560);

(statearr_42597_42624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42578 === (8))){
var inst_42545 = (state_42577[(10)]);
var inst_42537 = (state_42577[(7)]);
var inst_42541 = (state_42577[(9)]);
var inst_42550 = inst_42537.push(inst_42541);
var tmp42594 = inst_42537;
var inst_42537__$1 = tmp42594;
var inst_42538 = inst_42545;
var state_42577__$1 = (function (){var statearr_42598 = state_42577;
(statearr_42598[(7)] = inst_42537__$1);

(statearr_42598[(14)] = inst_42550);

(statearr_42598[(8)] = inst_42538);

return statearr_42598;
})();
var statearr_42599_42625 = state_42577__$1;
(statearr_42599_42625[(2)] = null);

(statearr_42599_42625[(1)] = (2));


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
});})(c__10513__auto___42611,out))
;
return ((function (switch__10492__auto__,c__10513__auto___42611,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_42603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42603[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_42603[(1)] = (1));

return statearr_42603;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_42577){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_42577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e42604){if((e42604 instanceof Object)){
var ex__10496__auto__ = e42604;
var statearr_42605_42626 = state_42577;
(statearr_42605_42626[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42627 = state_42577;
state_42577 = G__42627;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_42577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_42577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___42611,out))
})();
var state__10515__auto__ = (function (){var statearr_42606 = f__10514__auto__.call(null);
(statearr_42606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___42611);

return statearr_42606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___42611,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479783229986