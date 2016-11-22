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
var args30075 = [];
var len__7651__auto___30081 = arguments.length;
var i__7652__auto___30082 = (0);
while(true){
if((i__7652__auto___30082 < len__7651__auto___30081)){
args30075.push((arguments[i__7652__auto___30082]));

var G__30083 = (i__7652__auto___30082 + (1));
i__7652__auto___30082 = G__30083;
continue;
} else {
}
break;
}

var G__30077 = args30075.length;
switch (G__30077) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30075.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30078 = (function (f,blockable,meta30079){
this.f = f;
this.blockable = blockable;
this.meta30079 = meta30079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30080,meta30079__$1){
var self__ = this;
var _30080__$1 = this;
return (new cljs.core.async.t_cljs$core$async30078(self__.f,self__.blockable,meta30079__$1));
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30080){
var self__ = this;
var _30080__$1 = this;
return self__.meta30079;
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30079","meta30079",-1426063278,null)], null);
});

cljs.core.async.t_cljs$core$async30078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30078";

cljs.core.async.t_cljs$core$async30078.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async30078");
});

cljs.core.async.__GT_t_cljs$core$async30078 = (function cljs$core$async$__GT_t_cljs$core$async30078(f__$1,blockable__$1,meta30079){
return (new cljs.core.async.t_cljs$core$async30078(f__$1,blockable__$1,meta30079));
});

}

return (new cljs.core.async.t_cljs$core$async30078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30087 = [];
var len__7651__auto___30090 = arguments.length;
var i__7652__auto___30091 = (0);
while(true){
if((i__7652__auto___30091 < len__7651__auto___30090)){
args30087.push((arguments[i__7652__auto___30091]));

var G__30092 = (i__7652__auto___30091 + (1));
i__7652__auto___30091 = G__30092;
continue;
} else {
}
break;
}

var G__30089 = args30087.length;
switch (G__30089) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30087.length)].join('')));

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
var args30094 = [];
var len__7651__auto___30097 = arguments.length;
var i__7652__auto___30098 = (0);
while(true){
if((i__7652__auto___30098 < len__7651__auto___30097)){
args30094.push((arguments[i__7652__auto___30098]));

var G__30099 = (i__7652__auto___30098 + (1));
i__7652__auto___30098 = G__30099;
continue;
} else {
}
break;
}

var G__30096 = args30094.length;
switch (G__30096) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30094.length)].join('')));

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
var args30101 = [];
var len__7651__auto___30104 = arguments.length;
var i__7652__auto___30105 = (0);
while(true){
if((i__7652__auto___30105 < len__7651__auto___30104)){
args30101.push((arguments[i__7652__auto___30105]));

var G__30106 = (i__7652__auto___30105 + (1));
i__7652__auto___30105 = G__30106;
continue;
} else {
}
break;
}

var G__30103 = args30101.length;
switch (G__30103) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30101.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30108 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30108);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30108,ret){
return (function (){
return fn1.call(null,val_30108);
});})(val_30108,ret))
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
var args30109 = [];
var len__7651__auto___30112 = arguments.length;
var i__7652__auto___30113 = (0);
while(true){
if((i__7652__auto___30113 < len__7651__auto___30112)){
args30109.push((arguments[i__7652__auto___30113]));

var G__30114 = (i__7652__auto___30113 + (1));
i__7652__auto___30113 = G__30114;
continue;
} else {
}
break;
}

var G__30111 = args30109.length;
switch (G__30111) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30109.length)].join('')));

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
var n__7461__auto___30116 = n;
var x_30117 = (0);
while(true){
if((x_30117 < n__7461__auto___30116)){
(a[x_30117] = (0));

var G__30118 = (x_30117 + (1));
x_30117 = G__30118;
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

var G__30119 = (i + (1));
i = G__30119;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30123 = (function (flag,meta30124){
this.flag = flag;
this.meta30124 = meta30124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30125,meta30124__$1){
var self__ = this;
var _30125__$1 = this;
return (new cljs.core.async.t_cljs$core$async30123(self__.flag,meta30124__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30125){
var self__ = this;
var _30125__$1 = this;
return self__.meta30124;
});})(flag))
;

cljs.core.async.t_cljs$core$async30123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30123.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30124","meta30124",-1740089088,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30123";

cljs.core.async.t_cljs$core$async30123.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async30123");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30123 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30123(flag__$1,meta30124){
return (new cljs.core.async.t_cljs$core$async30123(flag__$1,meta30124));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30123(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30129 = (function (flag,cb,meta30130){
this.flag = flag;
this.cb = cb;
this.meta30130 = meta30130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30131,meta30130__$1){
var self__ = this;
var _30131__$1 = this;
return (new cljs.core.async.t_cljs$core$async30129(self__.flag,self__.cb,meta30130__$1));
});

cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30131){
var self__ = this;
var _30131__$1 = this;
return self__.meta30130;
});

cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30130","meta30130",1434330832,null)], null);
});

cljs.core.async.t_cljs$core$async30129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30129";

cljs.core.async.t_cljs$core$async30129.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async30129");
});

cljs.core.async.__GT_t_cljs$core$async30129 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30129(flag__$1,cb__$1,meta30130){
return (new cljs.core.async.t_cljs$core$async30129(flag__$1,cb__$1,meta30130));
});

}

return (new cljs.core.async.t_cljs$core$async30129(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30132_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30132_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30133_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30133_SHARP_,port], null));
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
var G__30134 = (i + (1));
i = G__30134;
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
var len__7651__auto___30140 = arguments.length;
var i__7652__auto___30141 = (0);
while(true){
if((i__7652__auto___30141 < len__7651__auto___30140)){
args__7658__auto__.push((arguments[i__7652__auto___30141]));

var G__30142 = (i__7652__auto___30141 + (1));
i__7652__auto___30141 = G__30142;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30137){
var map__30138 = p__30137;
var map__30138__$1 = ((((!((map__30138 == null)))?((((map__30138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30138):map__30138);
var opts = map__30138__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30135){
var G__30136 = cljs.core.first.call(null,seq30135);
var seq30135__$1 = cljs.core.next.call(null,seq30135);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30136,seq30135__$1);
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
var args30143 = [];
var len__7651__auto___30193 = arguments.length;
var i__7652__auto___30194 = (0);
while(true){
if((i__7652__auto___30194 < len__7651__auto___30193)){
args30143.push((arguments[i__7652__auto___30194]));

var G__30195 = (i__7652__auto___30194 + (1));
i__7652__auto___30194 = G__30195;
continue;
} else {
}
break;
}

var G__30145 = args30143.length;
switch (G__30145) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30143.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10513__auto___30197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___30197){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___30197){
return (function (state_30169){
var state_val_30170 = (state_30169[(1)]);
if((state_val_30170 === (7))){
var inst_30165 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30171_30198 = state_30169__$1;
(statearr_30171_30198[(2)] = inst_30165);

(statearr_30171_30198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (1))){
var state_30169__$1 = state_30169;
var statearr_30172_30199 = state_30169__$1;
(statearr_30172_30199[(2)] = null);

(statearr_30172_30199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (4))){
var inst_30148 = (state_30169[(7)]);
var inst_30148__$1 = (state_30169[(2)]);
var inst_30149 = (inst_30148__$1 == null);
var state_30169__$1 = (function (){var statearr_30173 = state_30169;
(statearr_30173[(7)] = inst_30148__$1);

return statearr_30173;
})();
if(cljs.core.truth_(inst_30149)){
var statearr_30174_30200 = state_30169__$1;
(statearr_30174_30200[(1)] = (5));

} else {
var statearr_30175_30201 = state_30169__$1;
(statearr_30175_30201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (13))){
var state_30169__$1 = state_30169;
var statearr_30176_30202 = state_30169__$1;
(statearr_30176_30202[(2)] = null);

(statearr_30176_30202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (6))){
var inst_30148 = (state_30169[(7)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(11),to,inst_30148);
} else {
if((state_val_30170 === (3))){
var inst_30167 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30169__$1,inst_30167);
} else {
if((state_val_30170 === (12))){
var state_30169__$1 = state_30169;
var statearr_30177_30203 = state_30169__$1;
(statearr_30177_30203[(2)] = null);

(statearr_30177_30203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (2))){
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(4),from);
} else {
if((state_val_30170 === (11))){
var inst_30158 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
if(cljs.core.truth_(inst_30158)){
var statearr_30178_30204 = state_30169__$1;
(statearr_30178_30204[(1)] = (12));

} else {
var statearr_30179_30205 = state_30169__$1;
(statearr_30179_30205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (9))){
var state_30169__$1 = state_30169;
var statearr_30180_30206 = state_30169__$1;
(statearr_30180_30206[(2)] = null);

(statearr_30180_30206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (5))){
var state_30169__$1 = state_30169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30181_30207 = state_30169__$1;
(statearr_30181_30207[(1)] = (8));

} else {
var statearr_30182_30208 = state_30169__$1;
(statearr_30182_30208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (14))){
var inst_30163 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30183_30209 = state_30169__$1;
(statearr_30183_30209[(2)] = inst_30163);

(statearr_30183_30209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (10))){
var inst_30155 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30184_30210 = state_30169__$1;
(statearr_30184_30210[(2)] = inst_30155);

(statearr_30184_30210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (8))){
var inst_30152 = cljs.core.async.close_BANG_.call(null,to);
var state_30169__$1 = state_30169;
var statearr_30185_30211 = state_30169__$1;
(statearr_30185_30211[(2)] = inst_30152);

(statearr_30185_30211[(1)] = (10));


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
});})(c__10513__auto___30197))
;
return ((function (switch__10492__auto__,c__10513__auto___30197){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_30189 = [null,null,null,null,null,null,null,null];
(statearr_30189[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_30189[(1)] = (1));

return statearr_30189;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_30169){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30190){if((e30190 instanceof Object)){
var ex__10496__auto__ = e30190;
var statearr_30191_30212 = state_30169;
(statearr_30191_30212[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30213 = state_30169;
state_30169 = G__30213;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_30169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_30169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___30197))
})();
var state__10515__auto__ = (function (){var statearr_30192 = f__10514__auto__.call(null);
(statearr_30192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___30197);

return statearr_30192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___30197))
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
return (function (p__30401){
var vec__30402 = p__30401;
var v = cljs.core.nth.call(null,vec__30402,(0),null);
var p = cljs.core.nth.call(null,vec__30402,(1),null);
var job = vec__30402;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10513__auto___30588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___30588,res,vec__30402,v,p,job,jobs,results){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___30588,res,vec__30402,v,p,job,jobs,results){
return (function (state_30409){
var state_val_30410 = (state_30409[(1)]);
if((state_val_30410 === (1))){
var state_30409__$1 = state_30409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30409__$1,(2),res,v);
} else {
if((state_val_30410 === (2))){
var inst_30406 = (state_30409[(2)]);
var inst_30407 = cljs.core.async.close_BANG_.call(null,res);
var state_30409__$1 = (function (){var statearr_30411 = state_30409;
(statearr_30411[(7)] = inst_30406);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30409__$1,inst_30407);
} else {
return null;
}
}
});})(c__10513__auto___30588,res,vec__30402,v,p,job,jobs,results))
;
return ((function (switch__10492__auto__,c__10513__auto___30588,res,vec__30402,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_30415 = [null,null,null,null,null,null,null,null];
(statearr_30415[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_30415[(1)] = (1));

return statearr_30415;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_30409){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30416){if((e30416 instanceof Object)){
var ex__10496__auto__ = e30416;
var statearr_30417_30589 = state_30409;
(statearr_30417_30589[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30590 = state_30409;
state_30409 = G__30590;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_30409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_30409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___30588,res,vec__30402,v,p,job,jobs,results))
})();
var state__10515__auto__ = (function (){var statearr_30418 = f__10514__auto__.call(null);
(statearr_30418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___30588);

return statearr_30418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___30588,res,vec__30402,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30419){
var vec__30420 = p__30419;
var v = cljs.core.nth.call(null,vec__30420,(0),null);
var p = cljs.core.nth.call(null,vec__30420,(1),null);
var job = vec__30420;
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
var n__7461__auto___30591 = n;
var __30592 = (0);
while(true){
if((__30592 < n__7461__auto___30591)){
var G__30423_30593 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30423_30593) {
case "compute":
var c__10513__auto___30595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30592,c__10513__auto___30595,G__30423_30593,n__7461__auto___30591,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (__30592,c__10513__auto___30595,G__30423_30593,n__7461__auto___30591,jobs,results,process,async){
return (function (state_30436){
var state_val_30437 = (state_30436[(1)]);
if((state_val_30437 === (1))){
var state_30436__$1 = state_30436;
var statearr_30438_30596 = state_30436__$1;
(statearr_30438_30596[(2)] = null);

(statearr_30438_30596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (2))){
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30436__$1,(4),jobs);
} else {
if((state_val_30437 === (3))){
var inst_30434 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30436__$1,inst_30434);
} else {
if((state_val_30437 === (4))){
var inst_30426 = (state_30436[(2)]);
var inst_30427 = process.call(null,inst_30426);
var state_30436__$1 = state_30436;
if(cljs.core.truth_(inst_30427)){
var statearr_30439_30597 = state_30436__$1;
(statearr_30439_30597[(1)] = (5));

} else {
var statearr_30440_30598 = state_30436__$1;
(statearr_30440_30598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (5))){
var state_30436__$1 = state_30436;
var statearr_30441_30599 = state_30436__$1;
(statearr_30441_30599[(2)] = null);

(statearr_30441_30599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (6))){
var state_30436__$1 = state_30436;
var statearr_30442_30600 = state_30436__$1;
(statearr_30442_30600[(2)] = null);

(statearr_30442_30600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (7))){
var inst_30432 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30443_30601 = state_30436__$1;
(statearr_30443_30601[(2)] = inst_30432);

(statearr_30443_30601[(1)] = (3));


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
});})(__30592,c__10513__auto___30595,G__30423_30593,n__7461__auto___30591,jobs,results,process,async))
;
return ((function (__30592,switch__10492__auto__,c__10513__auto___30595,G__30423_30593,n__7461__auto___30591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null];
(statearr_30447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_30436){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__10496__auto__ = e30448;
var statearr_30449_30602 = state_30436;
(statearr_30449_30602[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30603 = state_30436;
state_30436 = G__30603;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_30436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_30436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(__30592,switch__10492__auto__,c__10513__auto___30595,G__30423_30593,n__7461__auto___30591,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_30450 = f__10514__auto__.call(null);
(statearr_30450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___30595);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(__30592,c__10513__auto___30595,G__30423_30593,n__7461__auto___30591,jobs,results,process,async))
);


break;
case "async":
var c__10513__auto___30604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30592,c__10513__auto___30604,G__30423_30593,n__7461__auto___30591,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (__30592,c__10513__auto___30604,G__30423_30593,n__7461__auto___30591,jobs,results,process,async){
return (function (state_30463){
var state_val_30464 = (state_30463[(1)]);
if((state_val_30464 === (1))){
var state_30463__$1 = state_30463;
var statearr_30465_30605 = state_30463__$1;
(statearr_30465_30605[(2)] = null);

(statearr_30465_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (2))){
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(4),jobs);
} else {
if((state_val_30464 === (3))){
var inst_30461 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30463__$1,inst_30461);
} else {
if((state_val_30464 === (4))){
var inst_30453 = (state_30463[(2)]);
var inst_30454 = async.call(null,inst_30453);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30454)){
var statearr_30466_30606 = state_30463__$1;
(statearr_30466_30606[(1)] = (5));

} else {
var statearr_30467_30607 = state_30463__$1;
(statearr_30467_30607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (5))){
var state_30463__$1 = state_30463;
var statearr_30468_30608 = state_30463__$1;
(statearr_30468_30608[(2)] = null);

(statearr_30468_30608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (6))){
var state_30463__$1 = state_30463;
var statearr_30469_30609 = state_30463__$1;
(statearr_30469_30609[(2)] = null);

(statearr_30469_30609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (7))){
var inst_30459 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30470_30610 = state_30463__$1;
(statearr_30470_30610[(2)] = inst_30459);

(statearr_30470_30610[(1)] = (3));


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
});})(__30592,c__10513__auto___30604,G__30423_30593,n__7461__auto___30591,jobs,results,process,async))
;
return ((function (__30592,switch__10492__auto__,c__10513__auto___30604,G__30423_30593,n__7461__auto___30591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_30474 = [null,null,null,null,null,null,null];
(statearr_30474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_30474[(1)] = (1));

return statearr_30474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_30463){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30475){if((e30475 instanceof Object)){
var ex__10496__auto__ = e30475;
var statearr_30476_30611 = state_30463;
(statearr_30476_30611[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30612 = state_30463;
state_30463 = G__30612;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(__30592,switch__10492__auto__,c__10513__auto___30604,G__30423_30593,n__7461__auto___30591,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_30477 = f__10514__auto__.call(null);
(statearr_30477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___30604);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(__30592,c__10513__auto___30604,G__30423_30593,n__7461__auto___30591,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30613 = (__30592 + (1));
__30592 = G__30613;
continue;
} else {
}
break;
}

var c__10513__auto___30614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___30614,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___30614,jobs,results,process,async){
return (function (state_30499){
var state_val_30500 = (state_30499[(1)]);
if((state_val_30500 === (1))){
var state_30499__$1 = state_30499;
var statearr_30501_30615 = state_30499__$1;
(statearr_30501_30615[(2)] = null);

(statearr_30501_30615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (2))){
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(4),from);
} else {
if((state_val_30500 === (3))){
var inst_30497 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30499__$1,inst_30497);
} else {
if((state_val_30500 === (4))){
var inst_30480 = (state_30499[(7)]);
var inst_30480__$1 = (state_30499[(2)]);
var inst_30481 = (inst_30480__$1 == null);
var state_30499__$1 = (function (){var statearr_30502 = state_30499;
(statearr_30502[(7)] = inst_30480__$1);

return statearr_30502;
})();
if(cljs.core.truth_(inst_30481)){
var statearr_30503_30616 = state_30499__$1;
(statearr_30503_30616[(1)] = (5));

} else {
var statearr_30504_30617 = state_30499__$1;
(statearr_30504_30617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (5))){
var inst_30483 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30499__$1 = state_30499;
var statearr_30505_30618 = state_30499__$1;
(statearr_30505_30618[(2)] = inst_30483);

(statearr_30505_30618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (6))){
var inst_30485 = (state_30499[(8)]);
var inst_30480 = (state_30499[(7)]);
var inst_30485__$1 = cljs.core.async.chan.call(null,(1));
var inst_30486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30487 = [inst_30480,inst_30485__$1];
var inst_30488 = (new cljs.core.PersistentVector(null,2,(5),inst_30486,inst_30487,null));
var state_30499__$1 = (function (){var statearr_30506 = state_30499;
(statearr_30506[(8)] = inst_30485__$1);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30499__$1,(8),jobs,inst_30488);
} else {
if((state_val_30500 === (7))){
var inst_30495 = (state_30499[(2)]);
var state_30499__$1 = state_30499;
var statearr_30507_30619 = state_30499__$1;
(statearr_30507_30619[(2)] = inst_30495);

(statearr_30507_30619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30500 === (8))){
var inst_30485 = (state_30499[(8)]);
var inst_30490 = (state_30499[(2)]);
var state_30499__$1 = (function (){var statearr_30508 = state_30499;
(statearr_30508[(9)] = inst_30490);

return statearr_30508;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30499__$1,(9),results,inst_30485);
} else {
if((state_val_30500 === (9))){
var inst_30492 = (state_30499[(2)]);
var state_30499__$1 = (function (){var statearr_30509 = state_30499;
(statearr_30509[(10)] = inst_30492);

return statearr_30509;
})();
var statearr_30510_30620 = state_30499__$1;
(statearr_30510_30620[(2)] = null);

(statearr_30510_30620[(1)] = (2));


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
});})(c__10513__auto___30614,jobs,results,process,async))
;
return ((function (switch__10492__auto__,c__10513__auto___30614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0 = (function (){
var statearr_30514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_30514[(1)] = (1));

return statearr_30514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_30499){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30515){if((e30515 instanceof Object)){
var ex__10496__auto__ = e30515;
var statearr_30516_30621 = state_30499;
(statearr_30516_30621[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30622 = state_30499;
state_30499 = G__30622;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_30499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_30499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___30614,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_30517 = f__10514__auto__.call(null);
(statearr_30517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___30614);

return statearr_30517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___30614,jobs,results,process,async))
);


var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__,jobs,results,process,async){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__,jobs,results,process,async){
return (function (state_30555){
var state_val_30556 = (state_30555[(1)]);
if((state_val_30556 === (7))){
var inst_30551 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30557_30623 = state_30555__$1;
(statearr_30557_30623[(2)] = inst_30551);

(statearr_30557_30623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (20))){
var state_30555__$1 = state_30555;
var statearr_30558_30624 = state_30555__$1;
(statearr_30558_30624[(2)] = null);

(statearr_30558_30624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (1))){
var state_30555__$1 = state_30555;
var statearr_30559_30625 = state_30555__$1;
(statearr_30559_30625[(2)] = null);

(statearr_30559_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (4))){
var inst_30520 = (state_30555[(7)]);
var inst_30520__$1 = (state_30555[(2)]);
var inst_30521 = (inst_30520__$1 == null);
var state_30555__$1 = (function (){var statearr_30560 = state_30555;
(statearr_30560[(7)] = inst_30520__$1);

return statearr_30560;
})();
if(cljs.core.truth_(inst_30521)){
var statearr_30561_30626 = state_30555__$1;
(statearr_30561_30626[(1)] = (5));

} else {
var statearr_30562_30627 = state_30555__$1;
(statearr_30562_30627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (15))){
var inst_30533 = (state_30555[(8)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30555__$1,(18),to,inst_30533);
} else {
if((state_val_30556 === (21))){
var inst_30546 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30563_30628 = state_30555__$1;
(statearr_30563_30628[(2)] = inst_30546);

(statearr_30563_30628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (13))){
var inst_30548 = (state_30555[(2)]);
var state_30555__$1 = (function (){var statearr_30564 = state_30555;
(statearr_30564[(9)] = inst_30548);

return statearr_30564;
})();
var statearr_30565_30629 = state_30555__$1;
(statearr_30565_30629[(2)] = null);

(statearr_30565_30629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (6))){
var inst_30520 = (state_30555[(7)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(11),inst_30520);
} else {
if((state_val_30556 === (17))){
var inst_30541 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
if(cljs.core.truth_(inst_30541)){
var statearr_30566_30630 = state_30555__$1;
(statearr_30566_30630[(1)] = (19));

} else {
var statearr_30567_30631 = state_30555__$1;
(statearr_30567_30631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (3))){
var inst_30553 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30555__$1,inst_30553);
} else {
if((state_val_30556 === (12))){
var inst_30530 = (state_30555[(10)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(14),inst_30530);
} else {
if((state_val_30556 === (2))){
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(4),results);
} else {
if((state_val_30556 === (19))){
var state_30555__$1 = state_30555;
var statearr_30568_30632 = state_30555__$1;
(statearr_30568_30632[(2)] = null);

(statearr_30568_30632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (11))){
var inst_30530 = (state_30555[(2)]);
var state_30555__$1 = (function (){var statearr_30569 = state_30555;
(statearr_30569[(10)] = inst_30530);

return statearr_30569;
})();
var statearr_30570_30633 = state_30555__$1;
(statearr_30570_30633[(2)] = null);

(statearr_30570_30633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (9))){
var state_30555__$1 = state_30555;
var statearr_30571_30634 = state_30555__$1;
(statearr_30571_30634[(2)] = null);

(statearr_30571_30634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (5))){
var state_30555__$1 = state_30555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30572_30635 = state_30555__$1;
(statearr_30572_30635[(1)] = (8));

} else {
var statearr_30573_30636 = state_30555__$1;
(statearr_30573_30636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (14))){
var inst_30535 = (state_30555[(11)]);
var inst_30533 = (state_30555[(8)]);
var inst_30533__$1 = (state_30555[(2)]);
var inst_30534 = (inst_30533__$1 == null);
var inst_30535__$1 = cljs.core.not.call(null,inst_30534);
var state_30555__$1 = (function (){var statearr_30574 = state_30555;
(statearr_30574[(11)] = inst_30535__$1);

(statearr_30574[(8)] = inst_30533__$1);

return statearr_30574;
})();
if(inst_30535__$1){
var statearr_30575_30637 = state_30555__$1;
(statearr_30575_30637[(1)] = (15));

} else {
var statearr_30576_30638 = state_30555__$1;
(statearr_30576_30638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (16))){
var inst_30535 = (state_30555[(11)]);
var state_30555__$1 = state_30555;
var statearr_30577_30639 = state_30555__$1;
(statearr_30577_30639[(2)] = inst_30535);

(statearr_30577_30639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (10))){
var inst_30527 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30578_30640 = state_30555__$1;
(statearr_30578_30640[(2)] = inst_30527);

(statearr_30578_30640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (18))){
var inst_30538 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30579_30641 = state_30555__$1;
(statearr_30579_30641[(2)] = inst_30538);

(statearr_30579_30641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (8))){
var inst_30524 = cljs.core.async.close_BANG_.call(null,to);
var state_30555__$1 = state_30555;
var statearr_30580_30642 = state_30555__$1;
(statearr_30580_30642[(2)] = inst_30524);

(statearr_30580_30642[(1)] = (10));


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
var statearr_30584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__);

(statearr_30584[(1)] = (1));

return statearr_30584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1 = (function (state_30555){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30585){if((e30585 instanceof Object)){
var ex__10496__auto__ = e30585;
var statearr_30586_30643 = state_30555;
(statearr_30586_30643[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30644 = state_30555;
state_30555 = G__30644;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__ = function(state_30555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1.call(this,state_30555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__,jobs,results,process,async))
})();
var state__10515__auto__ = (function (){var statearr_30587 = f__10514__auto__.call(null);
(statearr_30587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_30587;
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
var args30645 = [];
var len__7651__auto___30648 = arguments.length;
var i__7652__auto___30649 = (0);
while(true){
if((i__7652__auto___30649 < len__7651__auto___30648)){
args30645.push((arguments[i__7652__auto___30649]));

var G__30650 = (i__7652__auto___30649 + (1));
i__7652__auto___30649 = G__30650;
continue;
} else {
}
break;
}

var G__30647 = args30645.length;
switch (G__30647) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30645.length)].join('')));

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
var args30652 = [];
var len__7651__auto___30655 = arguments.length;
var i__7652__auto___30656 = (0);
while(true){
if((i__7652__auto___30656 < len__7651__auto___30655)){
args30652.push((arguments[i__7652__auto___30656]));

var G__30657 = (i__7652__auto___30656 + (1));
i__7652__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var G__30654 = args30652.length;
switch (G__30654) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30652.length)].join('')));

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
var args30659 = [];
var len__7651__auto___30712 = arguments.length;
var i__7652__auto___30713 = (0);
while(true){
if((i__7652__auto___30713 < len__7651__auto___30712)){
args30659.push((arguments[i__7652__auto___30713]));

var G__30714 = (i__7652__auto___30713 + (1));
i__7652__auto___30713 = G__30714;
continue;
} else {
}
break;
}

var G__30661 = args30659.length;
switch (G__30661) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30659.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10513__auto___30716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___30716,tc,fc){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___30716,tc,fc){
return (function (state_30687){
var state_val_30688 = (state_30687[(1)]);
if((state_val_30688 === (7))){
var inst_30683 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30689_30717 = state_30687__$1;
(statearr_30689_30717[(2)] = inst_30683);

(statearr_30689_30717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (1))){
var state_30687__$1 = state_30687;
var statearr_30690_30718 = state_30687__$1;
(statearr_30690_30718[(2)] = null);

(statearr_30690_30718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (4))){
var inst_30664 = (state_30687[(7)]);
var inst_30664__$1 = (state_30687[(2)]);
var inst_30665 = (inst_30664__$1 == null);
var state_30687__$1 = (function (){var statearr_30691 = state_30687;
(statearr_30691[(7)] = inst_30664__$1);

return statearr_30691;
})();
if(cljs.core.truth_(inst_30665)){
var statearr_30692_30719 = state_30687__$1;
(statearr_30692_30719[(1)] = (5));

} else {
var statearr_30693_30720 = state_30687__$1;
(statearr_30693_30720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (13))){
var state_30687__$1 = state_30687;
var statearr_30694_30721 = state_30687__$1;
(statearr_30694_30721[(2)] = null);

(statearr_30694_30721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (6))){
var inst_30664 = (state_30687[(7)]);
var inst_30670 = p.call(null,inst_30664);
var state_30687__$1 = state_30687;
if(cljs.core.truth_(inst_30670)){
var statearr_30695_30722 = state_30687__$1;
(statearr_30695_30722[(1)] = (9));

} else {
var statearr_30696_30723 = state_30687__$1;
(statearr_30696_30723[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (3))){
var inst_30685 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30687__$1,inst_30685);
} else {
if((state_val_30688 === (12))){
var state_30687__$1 = state_30687;
var statearr_30697_30724 = state_30687__$1;
(statearr_30697_30724[(2)] = null);

(statearr_30697_30724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (2))){
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30687__$1,(4),ch);
} else {
if((state_val_30688 === (11))){
var inst_30664 = (state_30687[(7)]);
var inst_30674 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30687__$1,(8),inst_30674,inst_30664);
} else {
if((state_val_30688 === (9))){
var state_30687__$1 = state_30687;
var statearr_30698_30725 = state_30687__$1;
(statearr_30698_30725[(2)] = tc);

(statearr_30698_30725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (5))){
var inst_30667 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30668 = cljs.core.async.close_BANG_.call(null,fc);
var state_30687__$1 = (function (){var statearr_30699 = state_30687;
(statearr_30699[(8)] = inst_30667);

return statearr_30699;
})();
var statearr_30700_30726 = state_30687__$1;
(statearr_30700_30726[(2)] = inst_30668);

(statearr_30700_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (14))){
var inst_30681 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30701_30727 = state_30687__$1;
(statearr_30701_30727[(2)] = inst_30681);

(statearr_30701_30727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (10))){
var state_30687__$1 = state_30687;
var statearr_30702_30728 = state_30687__$1;
(statearr_30702_30728[(2)] = fc);

(statearr_30702_30728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (8))){
var inst_30676 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
if(cljs.core.truth_(inst_30676)){
var statearr_30703_30729 = state_30687__$1;
(statearr_30703_30729[(1)] = (12));

} else {
var statearr_30704_30730 = state_30687__$1;
(statearr_30704_30730[(1)] = (13));

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
});})(c__10513__auto___30716,tc,fc))
;
return ((function (switch__10492__auto__,c__10513__auto___30716,tc,fc){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_30708 = [null,null,null,null,null,null,null,null,null];
(statearr_30708[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_30708[(1)] = (1));

return statearr_30708;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_30687){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30709){if((e30709 instanceof Object)){
var ex__10496__auto__ = e30709;
var statearr_30710_30731 = state_30687;
(statearr_30710_30731[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30732 = state_30687;
state_30687 = G__30732;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_30687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_30687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___30716,tc,fc))
})();
var state__10515__auto__ = (function (){var statearr_30711 = f__10514__auto__.call(null);
(statearr_30711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___30716);

return statearr_30711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___30716,tc,fc))
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
return (function (state_30796){
var state_val_30797 = (state_30796[(1)]);
if((state_val_30797 === (7))){
var inst_30792 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30798_30819 = state_30796__$1;
(statearr_30798_30819[(2)] = inst_30792);

(statearr_30798_30819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (1))){
var inst_30776 = init;
var state_30796__$1 = (function (){var statearr_30799 = state_30796;
(statearr_30799[(7)] = inst_30776);

return statearr_30799;
})();
var statearr_30800_30820 = state_30796__$1;
(statearr_30800_30820[(2)] = null);

(statearr_30800_30820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (4))){
var inst_30779 = (state_30796[(8)]);
var inst_30779__$1 = (state_30796[(2)]);
var inst_30780 = (inst_30779__$1 == null);
var state_30796__$1 = (function (){var statearr_30801 = state_30796;
(statearr_30801[(8)] = inst_30779__$1);

return statearr_30801;
})();
if(cljs.core.truth_(inst_30780)){
var statearr_30802_30821 = state_30796__$1;
(statearr_30802_30821[(1)] = (5));

} else {
var statearr_30803_30822 = state_30796__$1;
(statearr_30803_30822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (6))){
var inst_30783 = (state_30796[(9)]);
var inst_30779 = (state_30796[(8)]);
var inst_30776 = (state_30796[(7)]);
var inst_30783__$1 = f.call(null,inst_30776,inst_30779);
var inst_30784 = cljs.core.reduced_QMARK_.call(null,inst_30783__$1);
var state_30796__$1 = (function (){var statearr_30804 = state_30796;
(statearr_30804[(9)] = inst_30783__$1);

return statearr_30804;
})();
if(inst_30784){
var statearr_30805_30823 = state_30796__$1;
(statearr_30805_30823[(1)] = (8));

} else {
var statearr_30806_30824 = state_30796__$1;
(statearr_30806_30824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (3))){
var inst_30794 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30796__$1,inst_30794);
} else {
if((state_val_30797 === (2))){
var state_30796__$1 = state_30796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30796__$1,(4),ch);
} else {
if((state_val_30797 === (9))){
var inst_30783 = (state_30796[(9)]);
var inst_30776 = inst_30783;
var state_30796__$1 = (function (){var statearr_30807 = state_30796;
(statearr_30807[(7)] = inst_30776);

return statearr_30807;
})();
var statearr_30808_30825 = state_30796__$1;
(statearr_30808_30825[(2)] = null);

(statearr_30808_30825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (5))){
var inst_30776 = (state_30796[(7)]);
var state_30796__$1 = state_30796;
var statearr_30809_30826 = state_30796__$1;
(statearr_30809_30826[(2)] = inst_30776);

(statearr_30809_30826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (10))){
var inst_30790 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30810_30827 = state_30796__$1;
(statearr_30810_30827[(2)] = inst_30790);

(statearr_30810_30827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30797 === (8))){
var inst_30783 = (state_30796[(9)]);
var inst_30786 = cljs.core.deref.call(null,inst_30783);
var state_30796__$1 = state_30796;
var statearr_30811_30828 = state_30796__$1;
(statearr_30811_30828[(2)] = inst_30786);

(statearr_30811_30828[(1)] = (10));


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
var statearr_30815 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30815[(0)] = cljs$core$async$reduce_$_state_machine__10493__auto__);

(statearr_30815[(1)] = (1));

return statearr_30815;
});
var cljs$core$async$reduce_$_state_machine__10493__auto____1 = (function (state_30796){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30816){if((e30816 instanceof Object)){
var ex__10496__auto__ = e30816;
var statearr_30817_30829 = state_30796;
(statearr_30817_30829[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30830 = state_30796;
state_30796 = G__30830;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10493__auto__ = function(state_30796){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10493__auto____1.call(this,state_30796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10493__auto____0;
cljs$core$async$reduce_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10493__auto____1;
return cljs$core$async$reduce_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_30818 = f__10514__auto__.call(null);
(statearr_30818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_30818;
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
var args30831 = [];
var len__7651__auto___30883 = arguments.length;
var i__7652__auto___30884 = (0);
while(true){
if((i__7652__auto___30884 < len__7651__auto___30883)){
args30831.push((arguments[i__7652__auto___30884]));

var G__30885 = (i__7652__auto___30884 + (1));
i__7652__auto___30884 = G__30885;
continue;
} else {
}
break;
}

var G__30833 = args30831.length;
switch (G__30833) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30831.length)].join('')));

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
return (function (state_30858){
var state_val_30859 = (state_30858[(1)]);
if((state_val_30859 === (7))){
var inst_30840 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
var statearr_30860_30887 = state_30858__$1;
(statearr_30860_30887[(2)] = inst_30840);

(statearr_30860_30887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (1))){
var inst_30834 = cljs.core.seq.call(null,coll);
var inst_30835 = inst_30834;
var state_30858__$1 = (function (){var statearr_30861 = state_30858;
(statearr_30861[(7)] = inst_30835);

return statearr_30861;
})();
var statearr_30862_30888 = state_30858__$1;
(statearr_30862_30888[(2)] = null);

(statearr_30862_30888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (4))){
var inst_30835 = (state_30858[(7)]);
var inst_30838 = cljs.core.first.call(null,inst_30835);
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30858__$1,(7),ch,inst_30838);
} else {
if((state_val_30859 === (13))){
var inst_30852 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
var statearr_30863_30889 = state_30858__$1;
(statearr_30863_30889[(2)] = inst_30852);

(statearr_30863_30889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (6))){
var inst_30843 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
if(cljs.core.truth_(inst_30843)){
var statearr_30864_30890 = state_30858__$1;
(statearr_30864_30890[(1)] = (8));

} else {
var statearr_30865_30891 = state_30858__$1;
(statearr_30865_30891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (3))){
var inst_30856 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30858__$1,inst_30856);
} else {
if((state_val_30859 === (12))){
var state_30858__$1 = state_30858;
var statearr_30866_30892 = state_30858__$1;
(statearr_30866_30892[(2)] = null);

(statearr_30866_30892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (2))){
var inst_30835 = (state_30858[(7)]);
var state_30858__$1 = state_30858;
if(cljs.core.truth_(inst_30835)){
var statearr_30867_30893 = state_30858__$1;
(statearr_30867_30893[(1)] = (4));

} else {
var statearr_30868_30894 = state_30858__$1;
(statearr_30868_30894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (11))){
var inst_30849 = cljs.core.async.close_BANG_.call(null,ch);
var state_30858__$1 = state_30858;
var statearr_30869_30895 = state_30858__$1;
(statearr_30869_30895[(2)] = inst_30849);

(statearr_30869_30895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (9))){
var state_30858__$1 = state_30858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30870_30896 = state_30858__$1;
(statearr_30870_30896[(1)] = (11));

} else {
var statearr_30871_30897 = state_30858__$1;
(statearr_30871_30897[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (5))){
var inst_30835 = (state_30858[(7)]);
var state_30858__$1 = state_30858;
var statearr_30872_30898 = state_30858__$1;
(statearr_30872_30898[(2)] = inst_30835);

(statearr_30872_30898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (10))){
var inst_30854 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
var statearr_30873_30899 = state_30858__$1;
(statearr_30873_30899[(2)] = inst_30854);

(statearr_30873_30899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (8))){
var inst_30835 = (state_30858[(7)]);
var inst_30845 = cljs.core.next.call(null,inst_30835);
var inst_30835__$1 = inst_30845;
var state_30858__$1 = (function (){var statearr_30874 = state_30858;
(statearr_30874[(7)] = inst_30835__$1);

return statearr_30874;
})();
var statearr_30875_30900 = state_30858__$1;
(statearr_30875_30900[(2)] = null);

(statearr_30875_30900[(1)] = (2));


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
var statearr_30879 = [null,null,null,null,null,null,null,null];
(statearr_30879[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_30879[(1)] = (1));

return statearr_30879;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_30858){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_30858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e30880){if((e30880 instanceof Object)){
var ex__10496__auto__ = e30880;
var statearr_30881_30901 = state_30858;
(statearr_30881_30901[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30902 = state_30858;
state_30858 = G__30902;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_30858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_30858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_30882 = f__10514__auto__.call(null);
(statearr_30882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_30882;
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
if(typeof cljs.core.async.t_cljs$core$async31128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31128 = (function (ch,cs,meta31129){
this.ch = ch;
this.cs = cs;
this.meta31129 = meta31129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31130,meta31129__$1){
var self__ = this;
var _31130__$1 = this;
return (new cljs.core.async.t_cljs$core$async31128(self__.ch,self__.cs,meta31129__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31130){
var self__ = this;
var _31130__$1 = this;
return self__.meta31129;
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31129","meta31129",1501844187,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31128";

cljs.core.async.t_cljs$core$async31128.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async31128");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31128 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31128(ch__$1,cs__$1,meta31129){
return (new cljs.core.async.t_cljs$core$async31128(ch__$1,cs__$1,meta31129));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31128(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10513__auto___31353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___31353,cs,m,dchan,dctr,done){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___31353,cs,m,dchan,dctr,done){
return (function (state_31265){
var state_val_31266 = (state_31265[(1)]);
if((state_val_31266 === (7))){
var inst_31261 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31267_31354 = state_31265__$1;
(statearr_31267_31354[(2)] = inst_31261);

(statearr_31267_31354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (20))){
var inst_31164 = (state_31265[(7)]);
var inst_31176 = cljs.core.first.call(null,inst_31164);
var inst_31177 = cljs.core.nth.call(null,inst_31176,(0),null);
var inst_31178 = cljs.core.nth.call(null,inst_31176,(1),null);
var state_31265__$1 = (function (){var statearr_31268 = state_31265;
(statearr_31268[(8)] = inst_31177);

return statearr_31268;
})();
if(cljs.core.truth_(inst_31178)){
var statearr_31269_31355 = state_31265__$1;
(statearr_31269_31355[(1)] = (22));

} else {
var statearr_31270_31356 = state_31265__$1;
(statearr_31270_31356[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (27))){
var inst_31213 = (state_31265[(9)]);
var inst_31133 = (state_31265[(10)]);
var inst_31208 = (state_31265[(11)]);
var inst_31206 = (state_31265[(12)]);
var inst_31213__$1 = cljs.core._nth.call(null,inst_31206,inst_31208);
var inst_31214 = cljs.core.async.put_BANG_.call(null,inst_31213__$1,inst_31133,done);
var state_31265__$1 = (function (){var statearr_31271 = state_31265;
(statearr_31271[(9)] = inst_31213__$1);

return statearr_31271;
})();
if(cljs.core.truth_(inst_31214)){
var statearr_31272_31357 = state_31265__$1;
(statearr_31272_31357[(1)] = (30));

} else {
var statearr_31273_31358 = state_31265__$1;
(statearr_31273_31358[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (1))){
var state_31265__$1 = state_31265;
var statearr_31274_31359 = state_31265__$1;
(statearr_31274_31359[(2)] = null);

(statearr_31274_31359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (24))){
var inst_31164 = (state_31265[(7)]);
var inst_31183 = (state_31265[(2)]);
var inst_31184 = cljs.core.next.call(null,inst_31164);
var inst_31142 = inst_31184;
var inst_31143 = null;
var inst_31144 = (0);
var inst_31145 = (0);
var state_31265__$1 = (function (){var statearr_31275 = state_31265;
(statearr_31275[(13)] = inst_31183);

(statearr_31275[(14)] = inst_31143);

(statearr_31275[(15)] = inst_31145);

(statearr_31275[(16)] = inst_31144);

(statearr_31275[(17)] = inst_31142);

return statearr_31275;
})();
var statearr_31276_31360 = state_31265__$1;
(statearr_31276_31360[(2)] = null);

(statearr_31276_31360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (39))){
var state_31265__$1 = state_31265;
var statearr_31280_31361 = state_31265__$1;
(statearr_31280_31361[(2)] = null);

(statearr_31280_31361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (4))){
var inst_31133 = (state_31265[(10)]);
var inst_31133__$1 = (state_31265[(2)]);
var inst_31134 = (inst_31133__$1 == null);
var state_31265__$1 = (function (){var statearr_31281 = state_31265;
(statearr_31281[(10)] = inst_31133__$1);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31134)){
var statearr_31282_31362 = state_31265__$1;
(statearr_31282_31362[(1)] = (5));

} else {
var statearr_31283_31363 = state_31265__$1;
(statearr_31283_31363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (15))){
var inst_31143 = (state_31265[(14)]);
var inst_31145 = (state_31265[(15)]);
var inst_31144 = (state_31265[(16)]);
var inst_31142 = (state_31265[(17)]);
var inst_31160 = (state_31265[(2)]);
var inst_31161 = (inst_31145 + (1));
var tmp31277 = inst_31143;
var tmp31278 = inst_31144;
var tmp31279 = inst_31142;
var inst_31142__$1 = tmp31279;
var inst_31143__$1 = tmp31277;
var inst_31144__$1 = tmp31278;
var inst_31145__$1 = inst_31161;
var state_31265__$1 = (function (){var statearr_31284 = state_31265;
(statearr_31284[(18)] = inst_31160);

(statearr_31284[(14)] = inst_31143__$1);

(statearr_31284[(15)] = inst_31145__$1);

(statearr_31284[(16)] = inst_31144__$1);

(statearr_31284[(17)] = inst_31142__$1);

return statearr_31284;
})();
var statearr_31285_31364 = state_31265__$1;
(statearr_31285_31364[(2)] = null);

(statearr_31285_31364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (21))){
var inst_31187 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31289_31365 = state_31265__$1;
(statearr_31289_31365[(2)] = inst_31187);

(statearr_31289_31365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (31))){
var inst_31213 = (state_31265[(9)]);
var inst_31217 = done.call(null,null);
var inst_31218 = cljs.core.async.untap_STAR_.call(null,m,inst_31213);
var state_31265__$1 = (function (){var statearr_31290 = state_31265;
(statearr_31290[(19)] = inst_31217);

return statearr_31290;
})();
var statearr_31291_31366 = state_31265__$1;
(statearr_31291_31366[(2)] = inst_31218);

(statearr_31291_31366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (32))){
var inst_31207 = (state_31265[(20)]);
var inst_31208 = (state_31265[(11)]);
var inst_31206 = (state_31265[(12)]);
var inst_31205 = (state_31265[(21)]);
var inst_31220 = (state_31265[(2)]);
var inst_31221 = (inst_31208 + (1));
var tmp31286 = inst_31207;
var tmp31287 = inst_31206;
var tmp31288 = inst_31205;
var inst_31205__$1 = tmp31288;
var inst_31206__$1 = tmp31287;
var inst_31207__$1 = tmp31286;
var inst_31208__$1 = inst_31221;
var state_31265__$1 = (function (){var statearr_31292 = state_31265;
(statearr_31292[(22)] = inst_31220);

(statearr_31292[(20)] = inst_31207__$1);

(statearr_31292[(11)] = inst_31208__$1);

(statearr_31292[(12)] = inst_31206__$1);

(statearr_31292[(21)] = inst_31205__$1);

return statearr_31292;
})();
var statearr_31293_31367 = state_31265__$1;
(statearr_31293_31367[(2)] = null);

(statearr_31293_31367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (40))){
var inst_31233 = (state_31265[(23)]);
var inst_31237 = done.call(null,null);
var inst_31238 = cljs.core.async.untap_STAR_.call(null,m,inst_31233);
var state_31265__$1 = (function (){var statearr_31294 = state_31265;
(statearr_31294[(24)] = inst_31237);

return statearr_31294;
})();
var statearr_31295_31368 = state_31265__$1;
(statearr_31295_31368[(2)] = inst_31238);

(statearr_31295_31368[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (33))){
var inst_31224 = (state_31265[(25)]);
var inst_31226 = cljs.core.chunked_seq_QMARK_.call(null,inst_31224);
var state_31265__$1 = state_31265;
if(inst_31226){
var statearr_31296_31369 = state_31265__$1;
(statearr_31296_31369[(1)] = (36));

} else {
var statearr_31297_31370 = state_31265__$1;
(statearr_31297_31370[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (13))){
var inst_31154 = (state_31265[(26)]);
var inst_31157 = cljs.core.async.close_BANG_.call(null,inst_31154);
var state_31265__$1 = state_31265;
var statearr_31298_31371 = state_31265__$1;
(statearr_31298_31371[(2)] = inst_31157);

(statearr_31298_31371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (22))){
var inst_31177 = (state_31265[(8)]);
var inst_31180 = cljs.core.async.close_BANG_.call(null,inst_31177);
var state_31265__$1 = state_31265;
var statearr_31299_31372 = state_31265__$1;
(statearr_31299_31372[(2)] = inst_31180);

(statearr_31299_31372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (36))){
var inst_31224 = (state_31265[(25)]);
var inst_31228 = cljs.core.chunk_first.call(null,inst_31224);
var inst_31229 = cljs.core.chunk_rest.call(null,inst_31224);
var inst_31230 = cljs.core.count.call(null,inst_31228);
var inst_31205 = inst_31229;
var inst_31206 = inst_31228;
var inst_31207 = inst_31230;
var inst_31208 = (0);
var state_31265__$1 = (function (){var statearr_31300 = state_31265;
(statearr_31300[(20)] = inst_31207);

(statearr_31300[(11)] = inst_31208);

(statearr_31300[(12)] = inst_31206);

(statearr_31300[(21)] = inst_31205);

return statearr_31300;
})();
var statearr_31301_31373 = state_31265__$1;
(statearr_31301_31373[(2)] = null);

(statearr_31301_31373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (41))){
var inst_31224 = (state_31265[(25)]);
var inst_31240 = (state_31265[(2)]);
var inst_31241 = cljs.core.next.call(null,inst_31224);
var inst_31205 = inst_31241;
var inst_31206 = null;
var inst_31207 = (0);
var inst_31208 = (0);
var state_31265__$1 = (function (){var statearr_31302 = state_31265;
(statearr_31302[(20)] = inst_31207);

(statearr_31302[(11)] = inst_31208);

(statearr_31302[(27)] = inst_31240);

(statearr_31302[(12)] = inst_31206);

(statearr_31302[(21)] = inst_31205);

return statearr_31302;
})();
var statearr_31303_31374 = state_31265__$1;
(statearr_31303_31374[(2)] = null);

(statearr_31303_31374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (43))){
var state_31265__$1 = state_31265;
var statearr_31304_31375 = state_31265__$1;
(statearr_31304_31375[(2)] = null);

(statearr_31304_31375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (29))){
var inst_31249 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31305_31376 = state_31265__$1;
(statearr_31305_31376[(2)] = inst_31249);

(statearr_31305_31376[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (44))){
var inst_31258 = (state_31265[(2)]);
var state_31265__$1 = (function (){var statearr_31306 = state_31265;
(statearr_31306[(28)] = inst_31258);

return statearr_31306;
})();
var statearr_31307_31377 = state_31265__$1;
(statearr_31307_31377[(2)] = null);

(statearr_31307_31377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (6))){
var inst_31197 = (state_31265[(29)]);
var inst_31196 = cljs.core.deref.call(null,cs);
var inst_31197__$1 = cljs.core.keys.call(null,inst_31196);
var inst_31198 = cljs.core.count.call(null,inst_31197__$1);
var inst_31199 = cljs.core.reset_BANG_.call(null,dctr,inst_31198);
var inst_31204 = cljs.core.seq.call(null,inst_31197__$1);
var inst_31205 = inst_31204;
var inst_31206 = null;
var inst_31207 = (0);
var inst_31208 = (0);
var state_31265__$1 = (function (){var statearr_31308 = state_31265;
(statearr_31308[(20)] = inst_31207);

(statearr_31308[(11)] = inst_31208);

(statearr_31308[(29)] = inst_31197__$1);

(statearr_31308[(12)] = inst_31206);

(statearr_31308[(30)] = inst_31199);

(statearr_31308[(21)] = inst_31205);

return statearr_31308;
})();
var statearr_31309_31378 = state_31265__$1;
(statearr_31309_31378[(2)] = null);

(statearr_31309_31378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (28))){
var inst_31224 = (state_31265[(25)]);
var inst_31205 = (state_31265[(21)]);
var inst_31224__$1 = cljs.core.seq.call(null,inst_31205);
var state_31265__$1 = (function (){var statearr_31310 = state_31265;
(statearr_31310[(25)] = inst_31224__$1);

return statearr_31310;
})();
if(inst_31224__$1){
var statearr_31311_31379 = state_31265__$1;
(statearr_31311_31379[(1)] = (33));

} else {
var statearr_31312_31380 = state_31265__$1;
(statearr_31312_31380[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (25))){
var inst_31207 = (state_31265[(20)]);
var inst_31208 = (state_31265[(11)]);
var inst_31210 = (inst_31208 < inst_31207);
var inst_31211 = inst_31210;
var state_31265__$1 = state_31265;
if(cljs.core.truth_(inst_31211)){
var statearr_31313_31381 = state_31265__$1;
(statearr_31313_31381[(1)] = (27));

} else {
var statearr_31314_31382 = state_31265__$1;
(statearr_31314_31382[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (34))){
var state_31265__$1 = state_31265;
var statearr_31315_31383 = state_31265__$1;
(statearr_31315_31383[(2)] = null);

(statearr_31315_31383[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (17))){
var state_31265__$1 = state_31265;
var statearr_31316_31384 = state_31265__$1;
(statearr_31316_31384[(2)] = null);

(statearr_31316_31384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (3))){
var inst_31263 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31265__$1,inst_31263);
} else {
if((state_val_31266 === (12))){
var inst_31192 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31317_31385 = state_31265__$1;
(statearr_31317_31385[(2)] = inst_31192);

(statearr_31317_31385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (2))){
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31265__$1,(4),ch);
} else {
if((state_val_31266 === (23))){
var state_31265__$1 = state_31265;
var statearr_31318_31386 = state_31265__$1;
(statearr_31318_31386[(2)] = null);

(statearr_31318_31386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (35))){
var inst_31247 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31319_31387 = state_31265__$1;
(statearr_31319_31387[(2)] = inst_31247);

(statearr_31319_31387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (19))){
var inst_31164 = (state_31265[(7)]);
var inst_31168 = cljs.core.chunk_first.call(null,inst_31164);
var inst_31169 = cljs.core.chunk_rest.call(null,inst_31164);
var inst_31170 = cljs.core.count.call(null,inst_31168);
var inst_31142 = inst_31169;
var inst_31143 = inst_31168;
var inst_31144 = inst_31170;
var inst_31145 = (0);
var state_31265__$1 = (function (){var statearr_31320 = state_31265;
(statearr_31320[(14)] = inst_31143);

(statearr_31320[(15)] = inst_31145);

(statearr_31320[(16)] = inst_31144);

(statearr_31320[(17)] = inst_31142);

return statearr_31320;
})();
var statearr_31321_31388 = state_31265__$1;
(statearr_31321_31388[(2)] = null);

(statearr_31321_31388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (11))){
var inst_31164 = (state_31265[(7)]);
var inst_31142 = (state_31265[(17)]);
var inst_31164__$1 = cljs.core.seq.call(null,inst_31142);
var state_31265__$1 = (function (){var statearr_31322 = state_31265;
(statearr_31322[(7)] = inst_31164__$1);

return statearr_31322;
})();
if(inst_31164__$1){
var statearr_31323_31389 = state_31265__$1;
(statearr_31323_31389[(1)] = (16));

} else {
var statearr_31324_31390 = state_31265__$1;
(statearr_31324_31390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (9))){
var inst_31194 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31325_31391 = state_31265__$1;
(statearr_31325_31391[(2)] = inst_31194);

(statearr_31325_31391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (5))){
var inst_31140 = cljs.core.deref.call(null,cs);
var inst_31141 = cljs.core.seq.call(null,inst_31140);
var inst_31142 = inst_31141;
var inst_31143 = null;
var inst_31144 = (0);
var inst_31145 = (0);
var state_31265__$1 = (function (){var statearr_31326 = state_31265;
(statearr_31326[(14)] = inst_31143);

(statearr_31326[(15)] = inst_31145);

(statearr_31326[(16)] = inst_31144);

(statearr_31326[(17)] = inst_31142);

return statearr_31326;
})();
var statearr_31327_31392 = state_31265__$1;
(statearr_31327_31392[(2)] = null);

(statearr_31327_31392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (14))){
var state_31265__$1 = state_31265;
var statearr_31328_31393 = state_31265__$1;
(statearr_31328_31393[(2)] = null);

(statearr_31328_31393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (45))){
var inst_31255 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31329_31394 = state_31265__$1;
(statearr_31329_31394[(2)] = inst_31255);

(statearr_31329_31394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (26))){
var inst_31197 = (state_31265[(29)]);
var inst_31251 = (state_31265[(2)]);
var inst_31252 = cljs.core.seq.call(null,inst_31197);
var state_31265__$1 = (function (){var statearr_31330 = state_31265;
(statearr_31330[(31)] = inst_31251);

return statearr_31330;
})();
if(inst_31252){
var statearr_31331_31395 = state_31265__$1;
(statearr_31331_31395[(1)] = (42));

} else {
var statearr_31332_31396 = state_31265__$1;
(statearr_31332_31396[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (16))){
var inst_31164 = (state_31265[(7)]);
var inst_31166 = cljs.core.chunked_seq_QMARK_.call(null,inst_31164);
var state_31265__$1 = state_31265;
if(inst_31166){
var statearr_31333_31397 = state_31265__$1;
(statearr_31333_31397[(1)] = (19));

} else {
var statearr_31334_31398 = state_31265__$1;
(statearr_31334_31398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (38))){
var inst_31244 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31335_31399 = state_31265__$1;
(statearr_31335_31399[(2)] = inst_31244);

(statearr_31335_31399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (30))){
var state_31265__$1 = state_31265;
var statearr_31336_31400 = state_31265__$1;
(statearr_31336_31400[(2)] = null);

(statearr_31336_31400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (10))){
var inst_31143 = (state_31265[(14)]);
var inst_31145 = (state_31265[(15)]);
var inst_31153 = cljs.core._nth.call(null,inst_31143,inst_31145);
var inst_31154 = cljs.core.nth.call(null,inst_31153,(0),null);
var inst_31155 = cljs.core.nth.call(null,inst_31153,(1),null);
var state_31265__$1 = (function (){var statearr_31337 = state_31265;
(statearr_31337[(26)] = inst_31154);

return statearr_31337;
})();
if(cljs.core.truth_(inst_31155)){
var statearr_31338_31401 = state_31265__$1;
(statearr_31338_31401[(1)] = (13));

} else {
var statearr_31339_31402 = state_31265__$1;
(statearr_31339_31402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (18))){
var inst_31190 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31340_31403 = state_31265__$1;
(statearr_31340_31403[(2)] = inst_31190);

(statearr_31340_31403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (42))){
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31265__$1,(45),dchan);
} else {
if((state_val_31266 === (37))){
var inst_31133 = (state_31265[(10)]);
var inst_31224 = (state_31265[(25)]);
var inst_31233 = (state_31265[(23)]);
var inst_31233__$1 = cljs.core.first.call(null,inst_31224);
var inst_31234 = cljs.core.async.put_BANG_.call(null,inst_31233__$1,inst_31133,done);
var state_31265__$1 = (function (){var statearr_31341 = state_31265;
(statearr_31341[(23)] = inst_31233__$1);

return statearr_31341;
})();
if(cljs.core.truth_(inst_31234)){
var statearr_31342_31404 = state_31265__$1;
(statearr_31342_31404[(1)] = (39));

} else {
var statearr_31343_31405 = state_31265__$1;
(statearr_31343_31405[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (8))){
var inst_31145 = (state_31265[(15)]);
var inst_31144 = (state_31265[(16)]);
var inst_31147 = (inst_31145 < inst_31144);
var inst_31148 = inst_31147;
var state_31265__$1 = state_31265;
if(cljs.core.truth_(inst_31148)){
var statearr_31344_31406 = state_31265__$1;
(statearr_31344_31406[(1)] = (10));

} else {
var statearr_31345_31407 = state_31265__$1;
(statearr_31345_31407[(1)] = (11));

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
});})(c__10513__auto___31353,cs,m,dchan,dctr,done))
;
return ((function (switch__10492__auto__,c__10513__auto___31353,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10493__auto__ = null;
var cljs$core$async$mult_$_state_machine__10493__auto____0 = (function (){
var statearr_31349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31349[(0)] = cljs$core$async$mult_$_state_machine__10493__auto__);

(statearr_31349[(1)] = (1));

return statearr_31349;
});
var cljs$core$async$mult_$_state_machine__10493__auto____1 = (function (state_31265){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_31265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e31350){if((e31350 instanceof Object)){
var ex__10496__auto__ = e31350;
var statearr_31351_31408 = state_31265;
(statearr_31351_31408[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31409 = state_31265;
state_31265 = G__31409;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10493__auto__ = function(state_31265){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10493__auto____1.call(this,state_31265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10493__auto____0;
cljs$core$async$mult_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10493__auto____1;
return cljs$core$async$mult_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___31353,cs,m,dchan,dctr,done))
})();
var state__10515__auto__ = (function (){var statearr_31352 = f__10514__auto__.call(null);
(statearr_31352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___31353);

return statearr_31352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___31353,cs,m,dchan,dctr,done))
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
var args31410 = [];
var len__7651__auto___31413 = arguments.length;
var i__7652__auto___31414 = (0);
while(true){
if((i__7652__auto___31414 < len__7651__auto___31413)){
args31410.push((arguments[i__7652__auto___31414]));

var G__31415 = (i__7652__auto___31414 + (1));
i__7652__auto___31414 = G__31415;
continue;
} else {
}
break;
}

var G__31412 = args31410.length;
switch (G__31412) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31410.length)].join('')));

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
var len__7651__auto___31427 = arguments.length;
var i__7652__auto___31428 = (0);
while(true){
if((i__7652__auto___31428 < len__7651__auto___31427)){
args__7658__auto__.push((arguments[i__7652__auto___31428]));

var G__31429 = (i__7652__auto___31428 + (1));
i__7652__auto___31428 = G__31429;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31421){
var map__31422 = p__31421;
var map__31422__$1 = ((((!((map__31422 == null)))?((((map__31422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var opts = map__31422__$1;
var statearr_31424_31430 = state;
(statearr_31424_31430[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31422,map__31422__$1,opts){
return (function (val){
var statearr_31425_31431 = state;
(statearr_31425_31431[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31422,map__31422__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31426_31432 = state;
(statearr_31426_31432[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31417){
var G__31418 = cljs.core.first.call(null,seq31417);
var seq31417__$1 = cljs.core.next.call(null,seq31417);
var G__31419 = cljs.core.first.call(null,seq31417__$1);
var seq31417__$2 = cljs.core.next.call(null,seq31417__$1);
var G__31420 = cljs.core.first.call(null,seq31417__$2);
var seq31417__$3 = cljs.core.next.call(null,seq31417__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31418,G__31419,G__31420,seq31417__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31600 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31601){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31601 = meta31601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31602,meta31601__$1){
var self__ = this;
var _31602__$1 = this;
return (new cljs.core.async.t_cljs$core$async31600(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31602){
var self__ = this;
var _31602__$1 = this;
return self__.meta31601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31600.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31601","meta31601",545596469,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31600";

cljs.core.async.t_cljs$core$async31600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async31600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31600(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31601){
return (new cljs.core.async.t_cljs$core$async31600(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31600(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10513__auto___31767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___31767,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___31767,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31704){
var state_val_31705 = (state_31704[(1)]);
if((state_val_31705 === (7))){
var inst_31619 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31706_31768 = state_31704__$1;
(statearr_31706_31768[(2)] = inst_31619);

(statearr_31706_31768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (20))){
var inst_31631 = (state_31704[(7)]);
var state_31704__$1 = state_31704;
var statearr_31707_31769 = state_31704__$1;
(statearr_31707_31769[(2)] = inst_31631);

(statearr_31707_31769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (27))){
var state_31704__$1 = state_31704;
var statearr_31708_31770 = state_31704__$1;
(statearr_31708_31770[(2)] = null);

(statearr_31708_31770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (1))){
var inst_31606 = (state_31704[(8)]);
var inst_31606__$1 = calc_state.call(null);
var inst_31608 = (inst_31606__$1 == null);
var inst_31609 = cljs.core.not.call(null,inst_31608);
var state_31704__$1 = (function (){var statearr_31709 = state_31704;
(statearr_31709[(8)] = inst_31606__$1);

return statearr_31709;
})();
if(inst_31609){
var statearr_31710_31771 = state_31704__$1;
(statearr_31710_31771[(1)] = (2));

} else {
var statearr_31711_31772 = state_31704__$1;
(statearr_31711_31772[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (24))){
var inst_31664 = (state_31704[(9)]);
var inst_31678 = (state_31704[(10)]);
var inst_31655 = (state_31704[(11)]);
var inst_31678__$1 = inst_31655.call(null,inst_31664);
var state_31704__$1 = (function (){var statearr_31712 = state_31704;
(statearr_31712[(10)] = inst_31678__$1);

return statearr_31712;
})();
if(cljs.core.truth_(inst_31678__$1)){
var statearr_31713_31773 = state_31704__$1;
(statearr_31713_31773[(1)] = (29));

} else {
var statearr_31714_31774 = state_31704__$1;
(statearr_31714_31774[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (4))){
var inst_31622 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31622)){
var statearr_31715_31775 = state_31704__$1;
(statearr_31715_31775[(1)] = (8));

} else {
var statearr_31716_31776 = state_31704__$1;
(statearr_31716_31776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (15))){
var inst_31649 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31649)){
var statearr_31717_31777 = state_31704__$1;
(statearr_31717_31777[(1)] = (19));

} else {
var statearr_31718_31778 = state_31704__$1;
(statearr_31718_31778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (21))){
var inst_31654 = (state_31704[(12)]);
var inst_31654__$1 = (state_31704[(2)]);
var inst_31655 = cljs.core.get.call(null,inst_31654__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31656 = cljs.core.get.call(null,inst_31654__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31657 = cljs.core.get.call(null,inst_31654__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31704__$1 = (function (){var statearr_31719 = state_31704;
(statearr_31719[(13)] = inst_31656);

(statearr_31719[(12)] = inst_31654__$1);

(statearr_31719[(11)] = inst_31655);

return statearr_31719;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31704__$1,(22),inst_31657);
} else {
if((state_val_31705 === (31))){
var inst_31686 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31686)){
var statearr_31720_31779 = state_31704__$1;
(statearr_31720_31779[(1)] = (32));

} else {
var statearr_31721_31780 = state_31704__$1;
(statearr_31721_31780[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (32))){
var inst_31663 = (state_31704[(14)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31704__$1,(35),out,inst_31663);
} else {
if((state_val_31705 === (33))){
var inst_31654 = (state_31704[(12)]);
var inst_31631 = inst_31654;
var state_31704__$1 = (function (){var statearr_31722 = state_31704;
(statearr_31722[(7)] = inst_31631);

return statearr_31722;
})();
var statearr_31723_31781 = state_31704__$1;
(statearr_31723_31781[(2)] = null);

(statearr_31723_31781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (13))){
var inst_31631 = (state_31704[(7)]);
var inst_31638 = inst_31631.cljs$lang$protocol_mask$partition0$;
var inst_31639 = (inst_31638 & (64));
var inst_31640 = inst_31631.cljs$core$ISeq$;
var inst_31641 = (cljs.core.PROTOCOL_SENTINEL === inst_31640);
var inst_31642 = (inst_31639) || (inst_31641);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31642)){
var statearr_31724_31782 = state_31704__$1;
(statearr_31724_31782[(1)] = (16));

} else {
var statearr_31725_31783 = state_31704__$1;
(statearr_31725_31783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (22))){
var inst_31664 = (state_31704[(9)]);
var inst_31663 = (state_31704[(14)]);
var inst_31662 = (state_31704[(2)]);
var inst_31663__$1 = cljs.core.nth.call(null,inst_31662,(0),null);
var inst_31664__$1 = cljs.core.nth.call(null,inst_31662,(1),null);
var inst_31665 = (inst_31663__$1 == null);
var inst_31666 = cljs.core._EQ_.call(null,inst_31664__$1,change);
var inst_31667 = (inst_31665) || (inst_31666);
var state_31704__$1 = (function (){var statearr_31726 = state_31704;
(statearr_31726[(9)] = inst_31664__$1);

(statearr_31726[(14)] = inst_31663__$1);

return statearr_31726;
})();
if(cljs.core.truth_(inst_31667)){
var statearr_31727_31784 = state_31704__$1;
(statearr_31727_31784[(1)] = (23));

} else {
var statearr_31728_31785 = state_31704__$1;
(statearr_31728_31785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (36))){
var inst_31654 = (state_31704[(12)]);
var inst_31631 = inst_31654;
var state_31704__$1 = (function (){var statearr_31729 = state_31704;
(statearr_31729[(7)] = inst_31631);

return statearr_31729;
})();
var statearr_31730_31786 = state_31704__$1;
(statearr_31730_31786[(2)] = null);

(statearr_31730_31786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (29))){
var inst_31678 = (state_31704[(10)]);
var state_31704__$1 = state_31704;
var statearr_31731_31787 = state_31704__$1;
(statearr_31731_31787[(2)] = inst_31678);

(statearr_31731_31787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (6))){
var state_31704__$1 = state_31704;
var statearr_31732_31788 = state_31704__$1;
(statearr_31732_31788[(2)] = false);

(statearr_31732_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (28))){
var inst_31674 = (state_31704[(2)]);
var inst_31675 = calc_state.call(null);
var inst_31631 = inst_31675;
var state_31704__$1 = (function (){var statearr_31733 = state_31704;
(statearr_31733[(15)] = inst_31674);

(statearr_31733[(7)] = inst_31631);

return statearr_31733;
})();
var statearr_31734_31789 = state_31704__$1;
(statearr_31734_31789[(2)] = null);

(statearr_31734_31789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (25))){
var inst_31700 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31735_31790 = state_31704__$1;
(statearr_31735_31790[(2)] = inst_31700);

(statearr_31735_31790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (34))){
var inst_31698 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31736_31791 = state_31704__$1;
(statearr_31736_31791[(2)] = inst_31698);

(statearr_31736_31791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (17))){
var state_31704__$1 = state_31704;
var statearr_31737_31792 = state_31704__$1;
(statearr_31737_31792[(2)] = false);

(statearr_31737_31792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (3))){
var state_31704__$1 = state_31704;
var statearr_31738_31793 = state_31704__$1;
(statearr_31738_31793[(2)] = false);

(statearr_31738_31793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (12))){
var inst_31702 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31704__$1,inst_31702);
} else {
if((state_val_31705 === (2))){
var inst_31606 = (state_31704[(8)]);
var inst_31611 = inst_31606.cljs$lang$protocol_mask$partition0$;
var inst_31612 = (inst_31611 & (64));
var inst_31613 = inst_31606.cljs$core$ISeq$;
var inst_31614 = (cljs.core.PROTOCOL_SENTINEL === inst_31613);
var inst_31615 = (inst_31612) || (inst_31614);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31615)){
var statearr_31739_31794 = state_31704__$1;
(statearr_31739_31794[(1)] = (5));

} else {
var statearr_31740_31795 = state_31704__$1;
(statearr_31740_31795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (23))){
var inst_31663 = (state_31704[(14)]);
var inst_31669 = (inst_31663 == null);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31669)){
var statearr_31741_31796 = state_31704__$1;
(statearr_31741_31796[(1)] = (26));

} else {
var statearr_31742_31797 = state_31704__$1;
(statearr_31742_31797[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (35))){
var inst_31689 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31689)){
var statearr_31743_31798 = state_31704__$1;
(statearr_31743_31798[(1)] = (36));

} else {
var statearr_31744_31799 = state_31704__$1;
(statearr_31744_31799[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (19))){
var inst_31631 = (state_31704[(7)]);
var inst_31651 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31631);
var state_31704__$1 = state_31704;
var statearr_31745_31800 = state_31704__$1;
(statearr_31745_31800[(2)] = inst_31651);

(statearr_31745_31800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (11))){
var inst_31631 = (state_31704[(7)]);
var inst_31635 = (inst_31631 == null);
var inst_31636 = cljs.core.not.call(null,inst_31635);
var state_31704__$1 = state_31704;
if(inst_31636){
var statearr_31746_31801 = state_31704__$1;
(statearr_31746_31801[(1)] = (13));

} else {
var statearr_31747_31802 = state_31704__$1;
(statearr_31747_31802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (9))){
var inst_31606 = (state_31704[(8)]);
var state_31704__$1 = state_31704;
var statearr_31748_31803 = state_31704__$1;
(statearr_31748_31803[(2)] = inst_31606);

(statearr_31748_31803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (5))){
var state_31704__$1 = state_31704;
var statearr_31749_31804 = state_31704__$1;
(statearr_31749_31804[(2)] = true);

(statearr_31749_31804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (14))){
var state_31704__$1 = state_31704;
var statearr_31750_31805 = state_31704__$1;
(statearr_31750_31805[(2)] = false);

(statearr_31750_31805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (26))){
var inst_31664 = (state_31704[(9)]);
var inst_31671 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31664);
var state_31704__$1 = state_31704;
var statearr_31751_31806 = state_31704__$1;
(statearr_31751_31806[(2)] = inst_31671);

(statearr_31751_31806[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (16))){
var state_31704__$1 = state_31704;
var statearr_31752_31807 = state_31704__$1;
(statearr_31752_31807[(2)] = true);

(statearr_31752_31807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (38))){
var inst_31694 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31753_31808 = state_31704__$1;
(statearr_31753_31808[(2)] = inst_31694);

(statearr_31753_31808[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (30))){
var inst_31664 = (state_31704[(9)]);
var inst_31656 = (state_31704[(13)]);
var inst_31655 = (state_31704[(11)]);
var inst_31681 = cljs.core.empty_QMARK_.call(null,inst_31655);
var inst_31682 = inst_31656.call(null,inst_31664);
var inst_31683 = cljs.core.not.call(null,inst_31682);
var inst_31684 = (inst_31681) && (inst_31683);
var state_31704__$1 = state_31704;
var statearr_31754_31809 = state_31704__$1;
(statearr_31754_31809[(2)] = inst_31684);

(statearr_31754_31809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (10))){
var inst_31606 = (state_31704[(8)]);
var inst_31627 = (state_31704[(2)]);
var inst_31628 = cljs.core.get.call(null,inst_31627,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31629 = cljs.core.get.call(null,inst_31627,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31630 = cljs.core.get.call(null,inst_31627,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31631 = inst_31606;
var state_31704__$1 = (function (){var statearr_31755 = state_31704;
(statearr_31755[(7)] = inst_31631);

(statearr_31755[(16)] = inst_31628);

(statearr_31755[(17)] = inst_31630);

(statearr_31755[(18)] = inst_31629);

return statearr_31755;
})();
var statearr_31756_31810 = state_31704__$1;
(statearr_31756_31810[(2)] = null);

(statearr_31756_31810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (18))){
var inst_31646 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31757_31811 = state_31704__$1;
(statearr_31757_31811[(2)] = inst_31646);

(statearr_31757_31811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (37))){
var state_31704__$1 = state_31704;
var statearr_31758_31812 = state_31704__$1;
(statearr_31758_31812[(2)] = null);

(statearr_31758_31812[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (8))){
var inst_31606 = (state_31704[(8)]);
var inst_31624 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31606);
var state_31704__$1 = state_31704;
var statearr_31759_31813 = state_31704__$1;
(statearr_31759_31813[(2)] = inst_31624);

(statearr_31759_31813[(1)] = (10));


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
});})(c__10513__auto___31767,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10492__auto__,c__10513__auto___31767,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10493__auto__ = null;
var cljs$core$async$mix_$_state_machine__10493__auto____0 = (function (){
var statearr_31763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31763[(0)] = cljs$core$async$mix_$_state_machine__10493__auto__);

(statearr_31763[(1)] = (1));

return statearr_31763;
});
var cljs$core$async$mix_$_state_machine__10493__auto____1 = (function (state_31704){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_31704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e31764){if((e31764 instanceof Object)){
var ex__10496__auto__ = e31764;
var statearr_31765_31814 = state_31704;
(statearr_31765_31814[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31815 = state_31704;
state_31704 = G__31815;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10493__auto__ = function(state_31704){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10493__auto____1.call(this,state_31704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10493__auto____0;
cljs$core$async$mix_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10493__auto____1;
return cljs$core$async$mix_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___31767,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10515__auto__ = (function (){var statearr_31766 = f__10514__auto__.call(null);
(statearr_31766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___31767);

return statearr_31766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___31767,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31816 = [];
var len__7651__auto___31819 = arguments.length;
var i__7652__auto___31820 = (0);
while(true){
if((i__7652__auto___31820 < len__7651__auto___31819)){
args31816.push((arguments[i__7652__auto___31820]));

var G__31821 = (i__7652__auto___31820 + (1));
i__7652__auto___31820 = G__31821;
continue;
} else {
}
break;
}

var G__31818 = args31816.length;
switch (G__31818) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31816.length)].join('')));

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
var args31824 = [];
var len__7651__auto___31949 = arguments.length;
var i__7652__auto___31950 = (0);
while(true){
if((i__7652__auto___31950 < len__7651__auto___31949)){
args31824.push((arguments[i__7652__auto___31950]));

var G__31951 = (i__7652__auto___31950 + (1));
i__7652__auto___31950 = G__31951;
continue;
} else {
}
break;
}

var G__31826 = args31824.length;
switch (G__31826) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31824.length)].join('')));

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
return (function (p1__31823_SHARP_){
if(cljs.core.truth_(p1__31823_SHARP_.call(null,topic))){
return p1__31823_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31823_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31828 = meta31828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31829,meta31828__$1){
var self__ = this;
var _31829__$1 = this;
return (new cljs.core.async.t_cljs$core$async31827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31828__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31829){
var self__ = this;
var _31829__$1 = this;
return self__.meta31828;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31828","meta31828",1655046407,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31827";

cljs.core.async.t_cljs$core$async31827.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async31827");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31827 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31828){
return (new cljs.core.async.t_cljs$core$async31827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31828));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10513__auto___31953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___31953,mults,ensure_mult,p){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___31953,mults,ensure_mult,p){
return (function (state_31901){
var state_val_31902 = (state_31901[(1)]);
if((state_val_31902 === (7))){
var inst_31897 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31903_31954 = state_31901__$1;
(statearr_31903_31954[(2)] = inst_31897);

(statearr_31903_31954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (20))){
var state_31901__$1 = state_31901;
var statearr_31904_31955 = state_31901__$1;
(statearr_31904_31955[(2)] = null);

(statearr_31904_31955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (1))){
var state_31901__$1 = state_31901;
var statearr_31905_31956 = state_31901__$1;
(statearr_31905_31956[(2)] = null);

(statearr_31905_31956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (24))){
var inst_31880 = (state_31901[(7)]);
var inst_31889 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31880);
var state_31901__$1 = state_31901;
var statearr_31906_31957 = state_31901__$1;
(statearr_31906_31957[(2)] = inst_31889);

(statearr_31906_31957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (4))){
var inst_31832 = (state_31901[(8)]);
var inst_31832__$1 = (state_31901[(2)]);
var inst_31833 = (inst_31832__$1 == null);
var state_31901__$1 = (function (){var statearr_31907 = state_31901;
(statearr_31907[(8)] = inst_31832__$1);

return statearr_31907;
})();
if(cljs.core.truth_(inst_31833)){
var statearr_31908_31958 = state_31901__$1;
(statearr_31908_31958[(1)] = (5));

} else {
var statearr_31909_31959 = state_31901__$1;
(statearr_31909_31959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (15))){
var inst_31874 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31910_31960 = state_31901__$1;
(statearr_31910_31960[(2)] = inst_31874);

(statearr_31910_31960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (21))){
var inst_31894 = (state_31901[(2)]);
var state_31901__$1 = (function (){var statearr_31911 = state_31901;
(statearr_31911[(9)] = inst_31894);

return statearr_31911;
})();
var statearr_31912_31961 = state_31901__$1;
(statearr_31912_31961[(2)] = null);

(statearr_31912_31961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (13))){
var inst_31856 = (state_31901[(10)]);
var inst_31858 = cljs.core.chunked_seq_QMARK_.call(null,inst_31856);
var state_31901__$1 = state_31901;
if(inst_31858){
var statearr_31913_31962 = state_31901__$1;
(statearr_31913_31962[(1)] = (16));

} else {
var statearr_31914_31963 = state_31901__$1;
(statearr_31914_31963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (22))){
var inst_31886 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
if(cljs.core.truth_(inst_31886)){
var statearr_31915_31964 = state_31901__$1;
(statearr_31915_31964[(1)] = (23));

} else {
var statearr_31916_31965 = state_31901__$1;
(statearr_31916_31965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (6))){
var inst_31880 = (state_31901[(7)]);
var inst_31832 = (state_31901[(8)]);
var inst_31882 = (state_31901[(11)]);
var inst_31880__$1 = topic_fn.call(null,inst_31832);
var inst_31881 = cljs.core.deref.call(null,mults);
var inst_31882__$1 = cljs.core.get.call(null,inst_31881,inst_31880__$1);
var state_31901__$1 = (function (){var statearr_31917 = state_31901;
(statearr_31917[(7)] = inst_31880__$1);

(statearr_31917[(11)] = inst_31882__$1);

return statearr_31917;
})();
if(cljs.core.truth_(inst_31882__$1)){
var statearr_31918_31966 = state_31901__$1;
(statearr_31918_31966[(1)] = (19));

} else {
var statearr_31919_31967 = state_31901__$1;
(statearr_31919_31967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (25))){
var inst_31891 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31920_31968 = state_31901__$1;
(statearr_31920_31968[(2)] = inst_31891);

(statearr_31920_31968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (17))){
var inst_31856 = (state_31901[(10)]);
var inst_31865 = cljs.core.first.call(null,inst_31856);
var inst_31866 = cljs.core.async.muxch_STAR_.call(null,inst_31865);
var inst_31867 = cljs.core.async.close_BANG_.call(null,inst_31866);
var inst_31868 = cljs.core.next.call(null,inst_31856);
var inst_31842 = inst_31868;
var inst_31843 = null;
var inst_31844 = (0);
var inst_31845 = (0);
var state_31901__$1 = (function (){var statearr_31921 = state_31901;
(statearr_31921[(12)] = inst_31842);

(statearr_31921[(13)] = inst_31844);

(statearr_31921[(14)] = inst_31845);

(statearr_31921[(15)] = inst_31867);

(statearr_31921[(16)] = inst_31843);

return statearr_31921;
})();
var statearr_31922_31969 = state_31901__$1;
(statearr_31922_31969[(2)] = null);

(statearr_31922_31969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (3))){
var inst_31899 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31901__$1,inst_31899);
} else {
if((state_val_31902 === (12))){
var inst_31876 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31923_31970 = state_31901__$1;
(statearr_31923_31970[(2)] = inst_31876);

(statearr_31923_31970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (2))){
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31901__$1,(4),ch);
} else {
if((state_val_31902 === (23))){
var state_31901__$1 = state_31901;
var statearr_31924_31971 = state_31901__$1;
(statearr_31924_31971[(2)] = null);

(statearr_31924_31971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (19))){
var inst_31832 = (state_31901[(8)]);
var inst_31882 = (state_31901[(11)]);
var inst_31884 = cljs.core.async.muxch_STAR_.call(null,inst_31882);
var state_31901__$1 = state_31901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31901__$1,(22),inst_31884,inst_31832);
} else {
if((state_val_31902 === (11))){
var inst_31856 = (state_31901[(10)]);
var inst_31842 = (state_31901[(12)]);
var inst_31856__$1 = cljs.core.seq.call(null,inst_31842);
var state_31901__$1 = (function (){var statearr_31925 = state_31901;
(statearr_31925[(10)] = inst_31856__$1);

return statearr_31925;
})();
if(inst_31856__$1){
var statearr_31926_31972 = state_31901__$1;
(statearr_31926_31972[(1)] = (13));

} else {
var statearr_31927_31973 = state_31901__$1;
(statearr_31927_31973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (9))){
var inst_31878 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31928_31974 = state_31901__$1;
(statearr_31928_31974[(2)] = inst_31878);

(statearr_31928_31974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (5))){
var inst_31839 = cljs.core.deref.call(null,mults);
var inst_31840 = cljs.core.vals.call(null,inst_31839);
var inst_31841 = cljs.core.seq.call(null,inst_31840);
var inst_31842 = inst_31841;
var inst_31843 = null;
var inst_31844 = (0);
var inst_31845 = (0);
var state_31901__$1 = (function (){var statearr_31929 = state_31901;
(statearr_31929[(12)] = inst_31842);

(statearr_31929[(13)] = inst_31844);

(statearr_31929[(14)] = inst_31845);

(statearr_31929[(16)] = inst_31843);

return statearr_31929;
})();
var statearr_31930_31975 = state_31901__$1;
(statearr_31930_31975[(2)] = null);

(statearr_31930_31975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (14))){
var state_31901__$1 = state_31901;
var statearr_31934_31976 = state_31901__$1;
(statearr_31934_31976[(2)] = null);

(statearr_31934_31976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (16))){
var inst_31856 = (state_31901[(10)]);
var inst_31860 = cljs.core.chunk_first.call(null,inst_31856);
var inst_31861 = cljs.core.chunk_rest.call(null,inst_31856);
var inst_31862 = cljs.core.count.call(null,inst_31860);
var inst_31842 = inst_31861;
var inst_31843 = inst_31860;
var inst_31844 = inst_31862;
var inst_31845 = (0);
var state_31901__$1 = (function (){var statearr_31935 = state_31901;
(statearr_31935[(12)] = inst_31842);

(statearr_31935[(13)] = inst_31844);

(statearr_31935[(14)] = inst_31845);

(statearr_31935[(16)] = inst_31843);

return statearr_31935;
})();
var statearr_31936_31977 = state_31901__$1;
(statearr_31936_31977[(2)] = null);

(statearr_31936_31977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (10))){
var inst_31842 = (state_31901[(12)]);
var inst_31844 = (state_31901[(13)]);
var inst_31845 = (state_31901[(14)]);
var inst_31843 = (state_31901[(16)]);
var inst_31850 = cljs.core._nth.call(null,inst_31843,inst_31845);
var inst_31851 = cljs.core.async.muxch_STAR_.call(null,inst_31850);
var inst_31852 = cljs.core.async.close_BANG_.call(null,inst_31851);
var inst_31853 = (inst_31845 + (1));
var tmp31931 = inst_31842;
var tmp31932 = inst_31844;
var tmp31933 = inst_31843;
var inst_31842__$1 = tmp31931;
var inst_31843__$1 = tmp31933;
var inst_31844__$1 = tmp31932;
var inst_31845__$1 = inst_31853;
var state_31901__$1 = (function (){var statearr_31937 = state_31901;
(statearr_31937[(12)] = inst_31842__$1);

(statearr_31937[(17)] = inst_31852);

(statearr_31937[(13)] = inst_31844__$1);

(statearr_31937[(14)] = inst_31845__$1);

(statearr_31937[(16)] = inst_31843__$1);

return statearr_31937;
})();
var statearr_31938_31978 = state_31901__$1;
(statearr_31938_31978[(2)] = null);

(statearr_31938_31978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (18))){
var inst_31871 = (state_31901[(2)]);
var state_31901__$1 = state_31901;
var statearr_31939_31979 = state_31901__$1;
(statearr_31939_31979[(2)] = inst_31871);

(statearr_31939_31979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31902 === (8))){
var inst_31844 = (state_31901[(13)]);
var inst_31845 = (state_31901[(14)]);
var inst_31847 = (inst_31845 < inst_31844);
var inst_31848 = inst_31847;
var state_31901__$1 = state_31901;
if(cljs.core.truth_(inst_31848)){
var statearr_31940_31980 = state_31901__$1;
(statearr_31940_31980[(1)] = (10));

} else {
var statearr_31941_31981 = state_31901__$1;
(statearr_31941_31981[(1)] = (11));

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
});})(c__10513__auto___31953,mults,ensure_mult,p))
;
return ((function (switch__10492__auto__,c__10513__auto___31953,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_31945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31945[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_31945[(1)] = (1));

return statearr_31945;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_31901){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_31901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e31946){if((e31946 instanceof Object)){
var ex__10496__auto__ = e31946;
var statearr_31947_31982 = state_31901;
(statearr_31947_31982[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31983 = state_31901;
state_31901 = G__31983;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_31901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_31901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___31953,mults,ensure_mult,p))
})();
var state__10515__auto__ = (function (){var statearr_31948 = f__10514__auto__.call(null);
(statearr_31948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___31953);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___31953,mults,ensure_mult,p))
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
var args31984 = [];
var len__7651__auto___31987 = arguments.length;
var i__7652__auto___31988 = (0);
while(true){
if((i__7652__auto___31988 < len__7651__auto___31987)){
args31984.push((arguments[i__7652__auto___31988]));

var G__31989 = (i__7652__auto___31988 + (1));
i__7652__auto___31988 = G__31989;
continue;
} else {
}
break;
}

var G__31986 = args31984.length;
switch (G__31986) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31984.length)].join('')));

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
var args31991 = [];
var len__7651__auto___31994 = arguments.length;
var i__7652__auto___31995 = (0);
while(true){
if((i__7652__auto___31995 < len__7651__auto___31994)){
args31991.push((arguments[i__7652__auto___31995]));

var G__31996 = (i__7652__auto___31995 + (1));
i__7652__auto___31995 = G__31996;
continue;
} else {
}
break;
}

var G__31993 = args31991.length;
switch (G__31993) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31991.length)].join('')));

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
var args31998 = [];
var len__7651__auto___32069 = arguments.length;
var i__7652__auto___32070 = (0);
while(true){
if((i__7652__auto___32070 < len__7651__auto___32069)){
args31998.push((arguments[i__7652__auto___32070]));

var G__32071 = (i__7652__auto___32070 + (1));
i__7652__auto___32070 = G__32071;
continue;
} else {
}
break;
}

var G__32000 = args31998.length;
switch (G__32000) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31998.length)].join('')));

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
var c__10513__auto___32073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32039){
var state_val_32040 = (state_32039[(1)]);
if((state_val_32040 === (7))){
var state_32039__$1 = state_32039;
var statearr_32041_32074 = state_32039__$1;
(statearr_32041_32074[(2)] = null);

(statearr_32041_32074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (1))){
var state_32039__$1 = state_32039;
var statearr_32042_32075 = state_32039__$1;
(statearr_32042_32075[(2)] = null);

(statearr_32042_32075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (4))){
var inst_32003 = (state_32039[(7)]);
var inst_32005 = (inst_32003 < cnt);
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_32005)){
var statearr_32043_32076 = state_32039__$1;
(statearr_32043_32076[(1)] = (6));

} else {
var statearr_32044_32077 = state_32039__$1;
(statearr_32044_32077[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (15))){
var inst_32035 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32045_32078 = state_32039__$1;
(statearr_32045_32078[(2)] = inst_32035);

(statearr_32045_32078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (13))){
var inst_32028 = cljs.core.async.close_BANG_.call(null,out);
var state_32039__$1 = state_32039;
var statearr_32046_32079 = state_32039__$1;
(statearr_32046_32079[(2)] = inst_32028);

(statearr_32046_32079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (6))){
var state_32039__$1 = state_32039;
var statearr_32047_32080 = state_32039__$1;
(statearr_32047_32080[(2)] = null);

(statearr_32047_32080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (3))){
var inst_32037 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32039__$1,inst_32037);
} else {
if((state_val_32040 === (12))){
var inst_32025 = (state_32039[(8)]);
var inst_32025__$1 = (state_32039[(2)]);
var inst_32026 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32025__$1);
var state_32039__$1 = (function (){var statearr_32048 = state_32039;
(statearr_32048[(8)] = inst_32025__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_32026)){
var statearr_32049_32081 = state_32039__$1;
(statearr_32049_32081[(1)] = (13));

} else {
var statearr_32050_32082 = state_32039__$1;
(statearr_32050_32082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (2))){
var inst_32002 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32003 = (0);
var state_32039__$1 = (function (){var statearr_32051 = state_32039;
(statearr_32051[(7)] = inst_32003);

(statearr_32051[(9)] = inst_32002);

return statearr_32051;
})();
var statearr_32052_32083 = state_32039__$1;
(statearr_32052_32083[(2)] = null);

(statearr_32052_32083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (11))){
var inst_32003 = (state_32039[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32039,(10),Object,null,(9));
var inst_32012 = chs__$1.call(null,inst_32003);
var inst_32013 = done.call(null,inst_32003);
var inst_32014 = cljs.core.async.take_BANG_.call(null,inst_32012,inst_32013);
var state_32039__$1 = state_32039;
var statearr_32053_32084 = state_32039__$1;
(statearr_32053_32084[(2)] = inst_32014);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (9))){
var inst_32003 = (state_32039[(7)]);
var inst_32016 = (state_32039[(2)]);
var inst_32017 = (inst_32003 + (1));
var inst_32003__$1 = inst_32017;
var state_32039__$1 = (function (){var statearr_32054 = state_32039;
(statearr_32054[(7)] = inst_32003__$1);

(statearr_32054[(10)] = inst_32016);

return statearr_32054;
})();
var statearr_32055_32085 = state_32039__$1;
(statearr_32055_32085[(2)] = null);

(statearr_32055_32085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (5))){
var inst_32023 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32056 = state_32039;
(statearr_32056[(11)] = inst_32023);

return statearr_32056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32039__$1,(12),dchan);
} else {
if((state_val_32040 === (14))){
var inst_32025 = (state_32039[(8)]);
var inst_32030 = cljs.core.apply.call(null,f,inst_32025);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32039__$1,(16),out,inst_32030);
} else {
if((state_val_32040 === (16))){
var inst_32032 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32057 = state_32039;
(statearr_32057[(12)] = inst_32032);

return statearr_32057;
})();
var statearr_32058_32086 = state_32039__$1;
(statearr_32058_32086[(2)] = null);

(statearr_32058_32086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (10))){
var inst_32007 = (state_32039[(2)]);
var inst_32008 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32039__$1 = (function (){var statearr_32059 = state_32039;
(statearr_32059[(13)] = inst_32007);

return statearr_32059;
})();
var statearr_32060_32087 = state_32039__$1;
(statearr_32060_32087[(2)] = inst_32008);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (8))){
var inst_32021 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32061_32088 = state_32039__$1;
(statearr_32061_32088[(2)] = inst_32021);

(statearr_32061_32088[(1)] = (5));


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
});})(c__10513__auto___32073,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10492__auto__,c__10513__auto___32073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32065[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32065[(1)] = (1));

return statearr_32065;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32039){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32066){if((e32066 instanceof Object)){
var ex__10496__auto__ = e32066;
var statearr_32067_32089 = state_32039;
(statearr_32067_32089[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32090 = state_32039;
state_32039 = G__32090;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32073,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10515__auto__ = (function (){var statearr_32068 = f__10514__auto__.call(null);
(statearr_32068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32073);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32073,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32092 = [];
var len__7651__auto___32150 = arguments.length;
var i__7652__auto___32151 = (0);
while(true){
if((i__7652__auto___32151 < len__7651__auto___32150)){
args32092.push((arguments[i__7652__auto___32151]));

var G__32152 = (i__7652__auto___32151 + (1));
i__7652__auto___32151 = G__32152;
continue;
} else {
}
break;
}

var G__32094 = args32092.length;
switch (G__32094) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32092.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___32154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32154,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32154,out){
return (function (state_32126){
var state_val_32127 = (state_32126[(1)]);
if((state_val_32127 === (7))){
var inst_32105 = (state_32126[(7)]);
var inst_32106 = (state_32126[(8)]);
var inst_32105__$1 = (state_32126[(2)]);
var inst_32106__$1 = cljs.core.nth.call(null,inst_32105__$1,(0),null);
var inst_32107 = cljs.core.nth.call(null,inst_32105__$1,(1),null);
var inst_32108 = (inst_32106__$1 == null);
var state_32126__$1 = (function (){var statearr_32128 = state_32126;
(statearr_32128[(7)] = inst_32105__$1);

(statearr_32128[(8)] = inst_32106__$1);

(statearr_32128[(9)] = inst_32107);

return statearr_32128;
})();
if(cljs.core.truth_(inst_32108)){
var statearr_32129_32155 = state_32126__$1;
(statearr_32129_32155[(1)] = (8));

} else {
var statearr_32130_32156 = state_32126__$1;
(statearr_32130_32156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (1))){
var inst_32095 = cljs.core.vec.call(null,chs);
var inst_32096 = inst_32095;
var state_32126__$1 = (function (){var statearr_32131 = state_32126;
(statearr_32131[(10)] = inst_32096);

return statearr_32131;
})();
var statearr_32132_32157 = state_32126__$1;
(statearr_32132_32157[(2)] = null);

(statearr_32132_32157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (4))){
var inst_32096 = (state_32126[(10)]);
var state_32126__$1 = state_32126;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32126__$1,(7),inst_32096);
} else {
if((state_val_32127 === (6))){
var inst_32122 = (state_32126[(2)]);
var state_32126__$1 = state_32126;
var statearr_32133_32158 = state_32126__$1;
(statearr_32133_32158[(2)] = inst_32122);

(statearr_32133_32158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (3))){
var inst_32124 = (state_32126[(2)]);
var state_32126__$1 = state_32126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32126__$1,inst_32124);
} else {
if((state_val_32127 === (2))){
var inst_32096 = (state_32126[(10)]);
var inst_32098 = cljs.core.count.call(null,inst_32096);
var inst_32099 = (inst_32098 > (0));
var state_32126__$1 = state_32126;
if(cljs.core.truth_(inst_32099)){
var statearr_32135_32159 = state_32126__$1;
(statearr_32135_32159[(1)] = (4));

} else {
var statearr_32136_32160 = state_32126__$1;
(statearr_32136_32160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (11))){
var inst_32096 = (state_32126[(10)]);
var inst_32115 = (state_32126[(2)]);
var tmp32134 = inst_32096;
var inst_32096__$1 = tmp32134;
var state_32126__$1 = (function (){var statearr_32137 = state_32126;
(statearr_32137[(10)] = inst_32096__$1);

(statearr_32137[(11)] = inst_32115);

return statearr_32137;
})();
var statearr_32138_32161 = state_32126__$1;
(statearr_32138_32161[(2)] = null);

(statearr_32138_32161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (9))){
var inst_32106 = (state_32126[(8)]);
var state_32126__$1 = state_32126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32126__$1,(11),out,inst_32106);
} else {
if((state_val_32127 === (5))){
var inst_32120 = cljs.core.async.close_BANG_.call(null,out);
var state_32126__$1 = state_32126;
var statearr_32139_32162 = state_32126__$1;
(statearr_32139_32162[(2)] = inst_32120);

(statearr_32139_32162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (10))){
var inst_32118 = (state_32126[(2)]);
var state_32126__$1 = state_32126;
var statearr_32140_32163 = state_32126__$1;
(statearr_32140_32163[(2)] = inst_32118);

(statearr_32140_32163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32127 === (8))){
var inst_32105 = (state_32126[(7)]);
var inst_32106 = (state_32126[(8)]);
var inst_32096 = (state_32126[(10)]);
var inst_32107 = (state_32126[(9)]);
var inst_32110 = (function (){var cs = inst_32096;
var vec__32101 = inst_32105;
var v = inst_32106;
var c = inst_32107;
return ((function (cs,vec__32101,v,c,inst_32105,inst_32106,inst_32096,inst_32107,state_val_32127,c__10513__auto___32154,out){
return (function (p1__32091_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32091_SHARP_);
});
;})(cs,vec__32101,v,c,inst_32105,inst_32106,inst_32096,inst_32107,state_val_32127,c__10513__auto___32154,out))
})();
var inst_32111 = cljs.core.filterv.call(null,inst_32110,inst_32096);
var inst_32096__$1 = inst_32111;
var state_32126__$1 = (function (){var statearr_32141 = state_32126;
(statearr_32141[(10)] = inst_32096__$1);

return statearr_32141;
})();
var statearr_32142_32164 = state_32126__$1;
(statearr_32142_32164[(2)] = null);

(statearr_32142_32164[(1)] = (2));


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
});})(c__10513__auto___32154,out))
;
return ((function (switch__10492__auto__,c__10513__auto___32154,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32146[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32146[(1)] = (1));

return statearr_32146;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32126){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32147){if((e32147 instanceof Object)){
var ex__10496__auto__ = e32147;
var statearr_32148_32165 = state_32126;
(statearr_32148_32165[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32166 = state_32126;
state_32126 = G__32166;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32154,out))
})();
var state__10515__auto__ = (function (){var statearr_32149 = f__10514__auto__.call(null);
(statearr_32149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32154);

return statearr_32149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32154,out))
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
var args32167 = [];
var len__7651__auto___32216 = arguments.length;
var i__7652__auto___32217 = (0);
while(true){
if((i__7652__auto___32217 < len__7651__auto___32216)){
args32167.push((arguments[i__7652__auto___32217]));

var G__32218 = (i__7652__auto___32217 + (1));
i__7652__auto___32217 = G__32218;
continue;
} else {
}
break;
}

var G__32169 = args32167.length;
switch (G__32169) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32167.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___32220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32220,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32220,out){
return (function (state_32193){
var state_val_32194 = (state_32193[(1)]);
if((state_val_32194 === (7))){
var inst_32175 = (state_32193[(7)]);
var inst_32175__$1 = (state_32193[(2)]);
var inst_32176 = (inst_32175__$1 == null);
var inst_32177 = cljs.core.not.call(null,inst_32176);
var state_32193__$1 = (function (){var statearr_32195 = state_32193;
(statearr_32195[(7)] = inst_32175__$1);

return statearr_32195;
})();
if(inst_32177){
var statearr_32196_32221 = state_32193__$1;
(statearr_32196_32221[(1)] = (8));

} else {
var statearr_32197_32222 = state_32193__$1;
(statearr_32197_32222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (1))){
var inst_32170 = (0);
var state_32193__$1 = (function (){var statearr_32198 = state_32193;
(statearr_32198[(8)] = inst_32170);

return statearr_32198;
})();
var statearr_32199_32223 = state_32193__$1;
(statearr_32199_32223[(2)] = null);

(statearr_32199_32223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (4))){
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32193__$1,(7),ch);
} else {
if((state_val_32194 === (6))){
var inst_32188 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32200_32224 = state_32193__$1;
(statearr_32200_32224[(2)] = inst_32188);

(statearr_32200_32224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (3))){
var inst_32190 = (state_32193[(2)]);
var inst_32191 = cljs.core.async.close_BANG_.call(null,out);
var state_32193__$1 = (function (){var statearr_32201 = state_32193;
(statearr_32201[(9)] = inst_32190);

return statearr_32201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32193__$1,inst_32191);
} else {
if((state_val_32194 === (2))){
var inst_32170 = (state_32193[(8)]);
var inst_32172 = (inst_32170 < n);
var state_32193__$1 = state_32193;
if(cljs.core.truth_(inst_32172)){
var statearr_32202_32225 = state_32193__$1;
(statearr_32202_32225[(1)] = (4));

} else {
var statearr_32203_32226 = state_32193__$1;
(statearr_32203_32226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (11))){
var inst_32170 = (state_32193[(8)]);
var inst_32180 = (state_32193[(2)]);
var inst_32181 = (inst_32170 + (1));
var inst_32170__$1 = inst_32181;
var state_32193__$1 = (function (){var statearr_32204 = state_32193;
(statearr_32204[(8)] = inst_32170__$1);

(statearr_32204[(10)] = inst_32180);

return statearr_32204;
})();
var statearr_32205_32227 = state_32193__$1;
(statearr_32205_32227[(2)] = null);

(statearr_32205_32227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (9))){
var state_32193__$1 = state_32193;
var statearr_32206_32228 = state_32193__$1;
(statearr_32206_32228[(2)] = null);

(statearr_32206_32228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (5))){
var state_32193__$1 = state_32193;
var statearr_32207_32229 = state_32193__$1;
(statearr_32207_32229[(2)] = null);

(statearr_32207_32229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (10))){
var inst_32185 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32208_32230 = state_32193__$1;
(statearr_32208_32230[(2)] = inst_32185);

(statearr_32208_32230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (8))){
var inst_32175 = (state_32193[(7)]);
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32193__$1,(11),out,inst_32175);
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
});})(c__10513__auto___32220,out))
;
return ((function (switch__10492__auto__,c__10513__auto___32220,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32212[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32212[(1)] = (1));

return statearr_32212;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32193){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32213){if((e32213 instanceof Object)){
var ex__10496__auto__ = e32213;
var statearr_32214_32231 = state_32193;
(statearr_32214_32231[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32232 = state_32193;
state_32193 = G__32232;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32220,out))
})();
var state__10515__auto__ = (function (){var statearr_32215 = f__10514__auto__.call(null);
(statearr_32215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32220);

return statearr_32215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32220,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32240 = (function (f,ch,meta32241){
this.f = f;
this.ch = ch;
this.meta32241 = meta32241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32242,meta32241__$1){
var self__ = this;
var _32242__$1 = this;
return (new cljs.core.async.t_cljs$core$async32240(self__.f,self__.ch,meta32241__$1));
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32242){
var self__ = this;
var _32242__$1 = this;
return self__.meta32241;
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32243 = (function (f,ch,meta32241,_,fn1,meta32244){
this.f = f;
this.ch = ch;
this.meta32241 = meta32241;
this._ = _;
this.fn1 = fn1;
this.meta32244 = meta32244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32245,meta32244__$1){
var self__ = this;
var _32245__$1 = this;
return (new cljs.core.async.t_cljs$core$async32243(self__.f,self__.ch,self__.meta32241,self__._,self__.fn1,meta32244__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32245){
var self__ = this;
var _32245__$1 = this;
return self__.meta32244;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32233_SHARP_){
return f1.call(null,(((p1__32233_SHARP_ == null))?null:self__.f.call(null,p1__32233_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32241","meta32241",1138622907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32240","cljs.core.async/t_cljs$core$async32240",1066467228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32244","meta32244",240623372,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32243";

cljs.core.async.t_cljs$core$async32243.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async32243");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32243 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32243(f__$1,ch__$1,meta32241__$1,___$2,fn1__$1,meta32244){
return (new cljs.core.async.t_cljs$core$async32243(f__$1,ch__$1,meta32241__$1,___$2,fn1__$1,meta32244));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32243(self__.f,self__.ch,self__.meta32241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32241","meta32241",1138622907,null)], null);
});

cljs.core.async.t_cljs$core$async32240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32240";

cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async32240");
});

cljs.core.async.__GT_t_cljs$core$async32240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32240(f__$1,ch__$1,meta32241){
return (new cljs.core.async.t_cljs$core$async32240(f__$1,ch__$1,meta32241));
});

}

return (new cljs.core.async.t_cljs$core$async32240(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32249 = (function (f,ch,meta32250){
this.f = f;
this.ch = ch;
this.meta32250 = meta32250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32251,meta32250__$1){
var self__ = this;
var _32251__$1 = this;
return (new cljs.core.async.t_cljs$core$async32249(self__.f,self__.ch,meta32250__$1));
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32251){
var self__ = this;
var _32251__$1 = this;
return self__.meta32250;
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32250","meta32250",-1353888277,null)], null);
});

cljs.core.async.t_cljs$core$async32249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32249";

cljs.core.async.t_cljs$core$async32249.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async32249");
});

cljs.core.async.__GT_t_cljs$core$async32249 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32249(f__$1,ch__$1,meta32250){
return (new cljs.core.async.t_cljs$core$async32249(f__$1,ch__$1,meta32250));
});

}

return (new cljs.core.async.t_cljs$core$async32249(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32255 = (function (p,ch,meta32256){
this.p = p;
this.ch = ch;
this.meta32256 = meta32256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32257,meta32256__$1){
var self__ = this;
var _32257__$1 = this;
return (new cljs.core.async.t_cljs$core$async32255(self__.p,self__.ch,meta32256__$1));
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32257){
var self__ = this;
var _32257__$1 = this;
return self__.meta32256;
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32256","meta32256",333220434,null)], null);
});

cljs.core.async.t_cljs$core$async32255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32255";

cljs.core.async.t_cljs$core$async32255.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async32255");
});

cljs.core.async.__GT_t_cljs$core$async32255 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32255(p__$1,ch__$1,meta32256){
return (new cljs.core.async.t_cljs$core$async32255(p__$1,ch__$1,meta32256));
});

}

return (new cljs.core.async.t_cljs$core$async32255(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32258 = [];
var len__7651__auto___32302 = arguments.length;
var i__7652__auto___32303 = (0);
while(true){
if((i__7652__auto___32303 < len__7651__auto___32302)){
args32258.push((arguments[i__7652__auto___32303]));

var G__32304 = (i__7652__auto___32303 + (1));
i__7652__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var G__32260 = args32258.length;
switch (G__32260) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32258.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___32306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32306,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32306,out){
return (function (state_32281){
var state_val_32282 = (state_32281[(1)]);
if((state_val_32282 === (7))){
var inst_32277 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32283_32307 = state_32281__$1;
(statearr_32283_32307[(2)] = inst_32277);

(statearr_32283_32307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (1))){
var state_32281__$1 = state_32281;
var statearr_32284_32308 = state_32281__$1;
(statearr_32284_32308[(2)] = null);

(statearr_32284_32308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (4))){
var inst_32263 = (state_32281[(7)]);
var inst_32263__$1 = (state_32281[(2)]);
var inst_32264 = (inst_32263__$1 == null);
var state_32281__$1 = (function (){var statearr_32285 = state_32281;
(statearr_32285[(7)] = inst_32263__$1);

return statearr_32285;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32286_32309 = state_32281__$1;
(statearr_32286_32309[(1)] = (5));

} else {
var statearr_32287_32310 = state_32281__$1;
(statearr_32287_32310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (6))){
var inst_32263 = (state_32281[(7)]);
var inst_32268 = p.call(null,inst_32263);
var state_32281__$1 = state_32281;
if(cljs.core.truth_(inst_32268)){
var statearr_32288_32311 = state_32281__$1;
(statearr_32288_32311[(1)] = (8));

} else {
var statearr_32289_32312 = state_32281__$1;
(statearr_32289_32312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (3))){
var inst_32279 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32281__$1,inst_32279);
} else {
if((state_val_32282 === (2))){
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32281__$1,(4),ch);
} else {
if((state_val_32282 === (11))){
var inst_32271 = (state_32281[(2)]);
var state_32281__$1 = state_32281;
var statearr_32290_32313 = state_32281__$1;
(statearr_32290_32313[(2)] = inst_32271);

(statearr_32290_32313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (9))){
var state_32281__$1 = state_32281;
var statearr_32291_32314 = state_32281__$1;
(statearr_32291_32314[(2)] = null);

(statearr_32291_32314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (5))){
var inst_32266 = cljs.core.async.close_BANG_.call(null,out);
var state_32281__$1 = state_32281;
var statearr_32292_32315 = state_32281__$1;
(statearr_32292_32315[(2)] = inst_32266);

(statearr_32292_32315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (10))){
var inst_32274 = (state_32281[(2)]);
var state_32281__$1 = (function (){var statearr_32293 = state_32281;
(statearr_32293[(8)] = inst_32274);

return statearr_32293;
})();
var statearr_32294_32316 = state_32281__$1;
(statearr_32294_32316[(2)] = null);

(statearr_32294_32316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32282 === (8))){
var inst_32263 = (state_32281[(7)]);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32281__$1,(11),out,inst_32263);
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
});})(c__10513__auto___32306,out))
;
return ((function (switch__10492__auto__,c__10513__auto___32306,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32298 = [null,null,null,null,null,null,null,null,null];
(statearr_32298[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32298[(1)] = (1));

return statearr_32298;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32281){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32299){if((e32299 instanceof Object)){
var ex__10496__auto__ = e32299;
var statearr_32300_32317 = state_32281;
(statearr_32300_32317[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32318 = state_32281;
state_32281 = G__32318;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32306,out))
})();
var state__10515__auto__ = (function (){var statearr_32301 = f__10514__auto__.call(null);
(statearr_32301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32306);

return statearr_32301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32306,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32319 = [];
var len__7651__auto___32322 = arguments.length;
var i__7652__auto___32323 = (0);
while(true){
if((i__7652__auto___32323 < len__7651__auto___32322)){
args32319.push((arguments[i__7652__auto___32323]));

var G__32324 = (i__7652__auto___32323 + (1));
i__7652__auto___32323 = G__32324;
continue;
} else {
}
break;
}

var G__32321 = args32319.length;
switch (G__32321) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32319.length)].join('')));

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
return (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (7))){
var inst_32487 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32493_32534 = state_32491__$1;
(statearr_32493_32534[(2)] = inst_32487);

(statearr_32493_32534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (20))){
var inst_32457 = (state_32491[(7)]);
var inst_32468 = (state_32491[(2)]);
var inst_32469 = cljs.core.next.call(null,inst_32457);
var inst_32443 = inst_32469;
var inst_32444 = null;
var inst_32445 = (0);
var inst_32446 = (0);
var state_32491__$1 = (function (){var statearr_32494 = state_32491;
(statearr_32494[(8)] = inst_32444);

(statearr_32494[(9)] = inst_32468);

(statearr_32494[(10)] = inst_32446);

(statearr_32494[(11)] = inst_32443);

(statearr_32494[(12)] = inst_32445);

return statearr_32494;
})();
var statearr_32495_32535 = state_32491__$1;
(statearr_32495_32535[(2)] = null);

(statearr_32495_32535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (1))){
var state_32491__$1 = state_32491;
var statearr_32496_32536 = state_32491__$1;
(statearr_32496_32536[(2)] = null);

(statearr_32496_32536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (4))){
var inst_32432 = (state_32491[(13)]);
var inst_32432__$1 = (state_32491[(2)]);
var inst_32433 = (inst_32432__$1 == null);
var state_32491__$1 = (function (){var statearr_32497 = state_32491;
(statearr_32497[(13)] = inst_32432__$1);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32433)){
var statearr_32498_32537 = state_32491__$1;
(statearr_32498_32537[(1)] = (5));

} else {
var statearr_32499_32538 = state_32491__$1;
(statearr_32499_32538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (15))){
var state_32491__$1 = state_32491;
var statearr_32503_32539 = state_32491__$1;
(statearr_32503_32539[(2)] = null);

(statearr_32503_32539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (21))){
var state_32491__$1 = state_32491;
var statearr_32504_32540 = state_32491__$1;
(statearr_32504_32540[(2)] = null);

(statearr_32504_32540[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (13))){
var inst_32444 = (state_32491[(8)]);
var inst_32446 = (state_32491[(10)]);
var inst_32443 = (state_32491[(11)]);
var inst_32445 = (state_32491[(12)]);
var inst_32453 = (state_32491[(2)]);
var inst_32454 = (inst_32446 + (1));
var tmp32500 = inst_32444;
var tmp32501 = inst_32443;
var tmp32502 = inst_32445;
var inst_32443__$1 = tmp32501;
var inst_32444__$1 = tmp32500;
var inst_32445__$1 = tmp32502;
var inst_32446__$1 = inst_32454;
var state_32491__$1 = (function (){var statearr_32505 = state_32491;
(statearr_32505[(8)] = inst_32444__$1);

(statearr_32505[(14)] = inst_32453);

(statearr_32505[(10)] = inst_32446__$1);

(statearr_32505[(11)] = inst_32443__$1);

(statearr_32505[(12)] = inst_32445__$1);

return statearr_32505;
})();
var statearr_32506_32541 = state_32491__$1;
(statearr_32506_32541[(2)] = null);

(statearr_32506_32541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (22))){
var state_32491__$1 = state_32491;
var statearr_32507_32542 = state_32491__$1;
(statearr_32507_32542[(2)] = null);

(statearr_32507_32542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var inst_32432 = (state_32491[(13)]);
var inst_32441 = f.call(null,inst_32432);
var inst_32442 = cljs.core.seq.call(null,inst_32441);
var inst_32443 = inst_32442;
var inst_32444 = null;
var inst_32445 = (0);
var inst_32446 = (0);
var state_32491__$1 = (function (){var statearr_32508 = state_32491;
(statearr_32508[(8)] = inst_32444);

(statearr_32508[(10)] = inst_32446);

(statearr_32508[(11)] = inst_32443);

(statearr_32508[(12)] = inst_32445);

return statearr_32508;
})();
var statearr_32509_32543 = state_32491__$1;
(statearr_32509_32543[(2)] = null);

(statearr_32509_32543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (17))){
var inst_32457 = (state_32491[(7)]);
var inst_32461 = cljs.core.chunk_first.call(null,inst_32457);
var inst_32462 = cljs.core.chunk_rest.call(null,inst_32457);
var inst_32463 = cljs.core.count.call(null,inst_32461);
var inst_32443 = inst_32462;
var inst_32444 = inst_32461;
var inst_32445 = inst_32463;
var inst_32446 = (0);
var state_32491__$1 = (function (){var statearr_32510 = state_32491;
(statearr_32510[(8)] = inst_32444);

(statearr_32510[(10)] = inst_32446);

(statearr_32510[(11)] = inst_32443);

(statearr_32510[(12)] = inst_32445);

return statearr_32510;
})();
var statearr_32511_32544 = state_32491__$1;
(statearr_32511_32544[(2)] = null);

(statearr_32511_32544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (3))){
var inst_32489 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (12))){
var inst_32477 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32512_32545 = state_32491__$1;
(statearr_32512_32545[(2)] = inst_32477);

(statearr_32512_32545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (2))){
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(4),in$);
} else {
if((state_val_32492 === (23))){
var inst_32485 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32513_32546 = state_32491__$1;
(statearr_32513_32546[(2)] = inst_32485);

(statearr_32513_32546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (19))){
var inst_32472 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32514_32547 = state_32491__$1;
(statearr_32514_32547[(2)] = inst_32472);

(statearr_32514_32547[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (11))){
var inst_32457 = (state_32491[(7)]);
var inst_32443 = (state_32491[(11)]);
var inst_32457__$1 = cljs.core.seq.call(null,inst_32443);
var state_32491__$1 = (function (){var statearr_32515 = state_32491;
(statearr_32515[(7)] = inst_32457__$1);

return statearr_32515;
})();
if(inst_32457__$1){
var statearr_32516_32548 = state_32491__$1;
(statearr_32516_32548[(1)] = (14));

} else {
var statearr_32517_32549 = state_32491__$1;
(statearr_32517_32549[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (9))){
var inst_32479 = (state_32491[(2)]);
var inst_32480 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32491__$1 = (function (){var statearr_32518 = state_32491;
(statearr_32518[(15)] = inst_32479);

return statearr_32518;
})();
if(cljs.core.truth_(inst_32480)){
var statearr_32519_32550 = state_32491__$1;
(statearr_32519_32550[(1)] = (21));

} else {
var statearr_32520_32551 = state_32491__$1;
(statearr_32520_32551[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (5))){
var inst_32435 = cljs.core.async.close_BANG_.call(null,out);
var state_32491__$1 = state_32491;
var statearr_32521_32552 = state_32491__$1;
(statearr_32521_32552[(2)] = inst_32435);

(statearr_32521_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (14))){
var inst_32457 = (state_32491[(7)]);
var inst_32459 = cljs.core.chunked_seq_QMARK_.call(null,inst_32457);
var state_32491__$1 = state_32491;
if(inst_32459){
var statearr_32522_32553 = state_32491__$1;
(statearr_32522_32553[(1)] = (17));

} else {
var statearr_32523_32554 = state_32491__$1;
(statearr_32523_32554[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (16))){
var inst_32475 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32524_32555 = state_32491__$1;
(statearr_32524_32555[(2)] = inst_32475);

(statearr_32524_32555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (10))){
var inst_32444 = (state_32491[(8)]);
var inst_32446 = (state_32491[(10)]);
var inst_32451 = cljs.core._nth.call(null,inst_32444,inst_32446);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(13),out,inst_32451);
} else {
if((state_val_32492 === (18))){
var inst_32457 = (state_32491[(7)]);
var inst_32466 = cljs.core.first.call(null,inst_32457);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(20),out,inst_32466);
} else {
if((state_val_32492 === (8))){
var inst_32446 = (state_32491[(10)]);
var inst_32445 = (state_32491[(12)]);
var inst_32448 = (inst_32446 < inst_32445);
var inst_32449 = inst_32448;
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32449)){
var statearr_32525_32556 = state_32491__$1;
(statearr_32525_32556[(1)] = (10));

} else {
var statearr_32526_32557 = state_32491__$1;
(statearr_32526_32557[(1)] = (11));

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
var statearr_32530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32530[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1 = (function (state_32491){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32531){if((e32531 instanceof Object)){
var ex__10496__auto__ = e32531;
var statearr_32532_32558 = state_32491;
(statearr_32532_32558[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32559 = state_32491;
state_32491 = G__32559;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10493__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_32533 = f__10514__auto__.call(null);
(statearr_32533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_32533;
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
var args32560 = [];
var len__7651__auto___32563 = arguments.length;
var i__7652__auto___32564 = (0);
while(true){
if((i__7652__auto___32564 < len__7651__auto___32563)){
args32560.push((arguments[i__7652__auto___32564]));

var G__32565 = (i__7652__auto___32564 + (1));
i__7652__auto___32564 = G__32565;
continue;
} else {
}
break;
}

var G__32562 = args32560.length;
switch (G__32562) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32560.length)].join('')));

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
var args32567 = [];
var len__7651__auto___32570 = arguments.length;
var i__7652__auto___32571 = (0);
while(true){
if((i__7652__auto___32571 < len__7651__auto___32570)){
args32567.push((arguments[i__7652__auto___32571]));

var G__32572 = (i__7652__auto___32571 + (1));
i__7652__auto___32571 = G__32572;
continue;
} else {
}
break;
}

var G__32569 = args32567.length;
switch (G__32569) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32567.length)].join('')));

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
var args32574 = [];
var len__7651__auto___32625 = arguments.length;
var i__7652__auto___32626 = (0);
while(true){
if((i__7652__auto___32626 < len__7651__auto___32625)){
args32574.push((arguments[i__7652__auto___32626]));

var G__32627 = (i__7652__auto___32626 + (1));
i__7652__auto___32626 = G__32627;
continue;
} else {
}
break;
}

var G__32576 = args32574.length;
switch (G__32576) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32574.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___32629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32629,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32629,out){
return (function (state_32600){
var state_val_32601 = (state_32600[(1)]);
if((state_val_32601 === (7))){
var inst_32595 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32602_32630 = state_32600__$1;
(statearr_32602_32630[(2)] = inst_32595);

(statearr_32602_32630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (1))){
var inst_32577 = null;
var state_32600__$1 = (function (){var statearr_32603 = state_32600;
(statearr_32603[(7)] = inst_32577);

return statearr_32603;
})();
var statearr_32604_32631 = state_32600__$1;
(statearr_32604_32631[(2)] = null);

(statearr_32604_32631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (4))){
var inst_32580 = (state_32600[(8)]);
var inst_32580__$1 = (state_32600[(2)]);
var inst_32581 = (inst_32580__$1 == null);
var inst_32582 = cljs.core.not.call(null,inst_32581);
var state_32600__$1 = (function (){var statearr_32605 = state_32600;
(statearr_32605[(8)] = inst_32580__$1);

return statearr_32605;
})();
if(inst_32582){
var statearr_32606_32632 = state_32600__$1;
(statearr_32606_32632[(1)] = (5));

} else {
var statearr_32607_32633 = state_32600__$1;
(statearr_32607_32633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (6))){
var state_32600__$1 = state_32600;
var statearr_32608_32634 = state_32600__$1;
(statearr_32608_32634[(2)] = null);

(statearr_32608_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (3))){
var inst_32597 = (state_32600[(2)]);
var inst_32598 = cljs.core.async.close_BANG_.call(null,out);
var state_32600__$1 = (function (){var statearr_32609 = state_32600;
(statearr_32609[(9)] = inst_32597);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32600__$1,inst_32598);
} else {
if((state_val_32601 === (2))){
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32600__$1,(4),ch);
} else {
if((state_val_32601 === (11))){
var inst_32580 = (state_32600[(8)]);
var inst_32589 = (state_32600[(2)]);
var inst_32577 = inst_32580;
var state_32600__$1 = (function (){var statearr_32610 = state_32600;
(statearr_32610[(10)] = inst_32589);

(statearr_32610[(7)] = inst_32577);

return statearr_32610;
})();
var statearr_32611_32635 = state_32600__$1;
(statearr_32611_32635[(2)] = null);

(statearr_32611_32635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (9))){
var inst_32580 = (state_32600[(8)]);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32600__$1,(11),out,inst_32580);
} else {
if((state_val_32601 === (5))){
var inst_32580 = (state_32600[(8)]);
var inst_32577 = (state_32600[(7)]);
var inst_32584 = cljs.core._EQ_.call(null,inst_32580,inst_32577);
var state_32600__$1 = state_32600;
if(inst_32584){
var statearr_32613_32636 = state_32600__$1;
(statearr_32613_32636[(1)] = (8));

} else {
var statearr_32614_32637 = state_32600__$1;
(statearr_32614_32637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (10))){
var inst_32592 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32615_32638 = state_32600__$1;
(statearr_32615_32638[(2)] = inst_32592);

(statearr_32615_32638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (8))){
var inst_32577 = (state_32600[(7)]);
var tmp32612 = inst_32577;
var inst_32577__$1 = tmp32612;
var state_32600__$1 = (function (){var statearr_32616 = state_32600;
(statearr_32616[(7)] = inst_32577__$1);

return statearr_32616;
})();
var statearr_32617_32639 = state_32600__$1;
(statearr_32617_32639[(2)] = null);

(statearr_32617_32639[(1)] = (2));


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
});})(c__10513__auto___32629,out))
;
return ((function (switch__10492__auto__,c__10513__auto___32629,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32621[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32621[(1)] = (1));

return statearr_32621;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32600){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32622){if((e32622 instanceof Object)){
var ex__10496__auto__ = e32622;
var statearr_32623_32640 = state_32600;
(statearr_32623_32640[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_32600;
state_32600 = G__32641;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32629,out))
})();
var state__10515__auto__ = (function (){var statearr_32624 = f__10514__auto__.call(null);
(statearr_32624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32629);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32629,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32642 = [];
var len__7651__auto___32712 = arguments.length;
var i__7652__auto___32713 = (0);
while(true){
if((i__7652__auto___32713 < len__7651__auto___32712)){
args32642.push((arguments[i__7652__auto___32713]));

var G__32714 = (i__7652__auto___32713 + (1));
i__7652__auto___32713 = G__32714;
continue;
} else {
}
break;
}

var G__32644 = args32642.length;
switch (G__32644) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32642.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___32716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32716,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32716,out){
return (function (state_32682){
var state_val_32683 = (state_32682[(1)]);
if((state_val_32683 === (7))){
var inst_32678 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32684_32717 = state_32682__$1;
(statearr_32684_32717[(2)] = inst_32678);

(statearr_32684_32717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (1))){
var inst_32645 = (new Array(n));
var inst_32646 = inst_32645;
var inst_32647 = (0);
var state_32682__$1 = (function (){var statearr_32685 = state_32682;
(statearr_32685[(7)] = inst_32647);

(statearr_32685[(8)] = inst_32646);

return statearr_32685;
})();
var statearr_32686_32718 = state_32682__$1;
(statearr_32686_32718[(2)] = null);

(statearr_32686_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (4))){
var inst_32650 = (state_32682[(9)]);
var inst_32650__$1 = (state_32682[(2)]);
var inst_32651 = (inst_32650__$1 == null);
var inst_32652 = cljs.core.not.call(null,inst_32651);
var state_32682__$1 = (function (){var statearr_32687 = state_32682;
(statearr_32687[(9)] = inst_32650__$1);

return statearr_32687;
})();
if(inst_32652){
var statearr_32688_32719 = state_32682__$1;
(statearr_32688_32719[(1)] = (5));

} else {
var statearr_32689_32720 = state_32682__$1;
(statearr_32689_32720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (15))){
var inst_32672 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32690_32721 = state_32682__$1;
(statearr_32690_32721[(2)] = inst_32672);

(statearr_32690_32721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (13))){
var state_32682__$1 = state_32682;
var statearr_32691_32722 = state_32682__$1;
(statearr_32691_32722[(2)] = null);

(statearr_32691_32722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (6))){
var inst_32647 = (state_32682[(7)]);
var inst_32668 = (inst_32647 > (0));
var state_32682__$1 = state_32682;
if(cljs.core.truth_(inst_32668)){
var statearr_32692_32723 = state_32682__$1;
(statearr_32692_32723[(1)] = (12));

} else {
var statearr_32693_32724 = state_32682__$1;
(statearr_32693_32724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (3))){
var inst_32680 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32682__$1,inst_32680);
} else {
if((state_val_32683 === (12))){
var inst_32646 = (state_32682[(8)]);
var inst_32670 = cljs.core.vec.call(null,inst_32646);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32682__$1,(15),out,inst_32670);
} else {
if((state_val_32683 === (2))){
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32682__$1,(4),ch);
} else {
if((state_val_32683 === (11))){
var inst_32662 = (state_32682[(2)]);
var inst_32663 = (new Array(n));
var inst_32646 = inst_32663;
var inst_32647 = (0);
var state_32682__$1 = (function (){var statearr_32694 = state_32682;
(statearr_32694[(7)] = inst_32647);

(statearr_32694[(8)] = inst_32646);

(statearr_32694[(10)] = inst_32662);

return statearr_32694;
})();
var statearr_32695_32725 = state_32682__$1;
(statearr_32695_32725[(2)] = null);

(statearr_32695_32725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (9))){
var inst_32646 = (state_32682[(8)]);
var inst_32660 = cljs.core.vec.call(null,inst_32646);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32682__$1,(11),out,inst_32660);
} else {
if((state_val_32683 === (5))){
var inst_32647 = (state_32682[(7)]);
var inst_32655 = (state_32682[(11)]);
var inst_32650 = (state_32682[(9)]);
var inst_32646 = (state_32682[(8)]);
var inst_32654 = (inst_32646[inst_32647] = inst_32650);
var inst_32655__$1 = (inst_32647 + (1));
var inst_32656 = (inst_32655__$1 < n);
var state_32682__$1 = (function (){var statearr_32696 = state_32682;
(statearr_32696[(11)] = inst_32655__$1);

(statearr_32696[(12)] = inst_32654);

return statearr_32696;
})();
if(cljs.core.truth_(inst_32656)){
var statearr_32697_32726 = state_32682__$1;
(statearr_32697_32726[(1)] = (8));

} else {
var statearr_32698_32727 = state_32682__$1;
(statearr_32698_32727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (14))){
var inst_32675 = (state_32682[(2)]);
var inst_32676 = cljs.core.async.close_BANG_.call(null,out);
var state_32682__$1 = (function (){var statearr_32700 = state_32682;
(statearr_32700[(13)] = inst_32675);

return statearr_32700;
})();
var statearr_32701_32728 = state_32682__$1;
(statearr_32701_32728[(2)] = inst_32676);

(statearr_32701_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (10))){
var inst_32666 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32702_32729 = state_32682__$1;
(statearr_32702_32729[(2)] = inst_32666);

(statearr_32702_32729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (8))){
var inst_32655 = (state_32682[(11)]);
var inst_32646 = (state_32682[(8)]);
var tmp32699 = inst_32646;
var inst_32646__$1 = tmp32699;
var inst_32647 = inst_32655;
var state_32682__$1 = (function (){var statearr_32703 = state_32682;
(statearr_32703[(7)] = inst_32647);

(statearr_32703[(8)] = inst_32646__$1);

return statearr_32703;
})();
var statearr_32704_32730 = state_32682__$1;
(statearr_32704_32730[(2)] = null);

(statearr_32704_32730[(1)] = (2));


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
});})(c__10513__auto___32716,out))
;
return ((function (switch__10492__auto__,c__10513__auto___32716,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32708[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32708[(1)] = (1));

return statearr_32708;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32682){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32709){if((e32709 instanceof Object)){
var ex__10496__auto__ = e32709;
var statearr_32710_32731 = state_32682;
(statearr_32710_32731[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32732 = state_32682;
state_32682 = G__32732;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32716,out))
})();
var state__10515__auto__ = (function (){var statearr_32711 = f__10514__auto__.call(null);
(statearr_32711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32716);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32716,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32733 = [];
var len__7651__auto___32807 = arguments.length;
var i__7652__auto___32808 = (0);
while(true){
if((i__7652__auto___32808 < len__7651__auto___32807)){
args32733.push((arguments[i__7652__auto___32808]));

var G__32809 = (i__7652__auto___32808 + (1));
i__7652__auto___32808 = G__32809;
continue;
} else {
}
break;
}

var G__32735 = args32733.length;
switch (G__32735) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32733.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10513__auto___32811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto___32811,out){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto___32811,out){
return (function (state_32777){
var state_val_32778 = (state_32777[(1)]);
if((state_val_32778 === (7))){
var inst_32773 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
var statearr_32779_32812 = state_32777__$1;
(statearr_32779_32812[(2)] = inst_32773);

(statearr_32779_32812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (1))){
var inst_32736 = [];
var inst_32737 = inst_32736;
var inst_32738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32777__$1 = (function (){var statearr_32780 = state_32777;
(statearr_32780[(7)] = inst_32737);

(statearr_32780[(8)] = inst_32738);

return statearr_32780;
})();
var statearr_32781_32813 = state_32777__$1;
(statearr_32781_32813[(2)] = null);

(statearr_32781_32813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (4))){
var inst_32741 = (state_32777[(9)]);
var inst_32741__$1 = (state_32777[(2)]);
var inst_32742 = (inst_32741__$1 == null);
var inst_32743 = cljs.core.not.call(null,inst_32742);
var state_32777__$1 = (function (){var statearr_32782 = state_32777;
(statearr_32782[(9)] = inst_32741__$1);

return statearr_32782;
})();
if(inst_32743){
var statearr_32783_32814 = state_32777__$1;
(statearr_32783_32814[(1)] = (5));

} else {
var statearr_32784_32815 = state_32777__$1;
(statearr_32784_32815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (15))){
var inst_32767 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
var statearr_32785_32816 = state_32777__$1;
(statearr_32785_32816[(2)] = inst_32767);

(statearr_32785_32816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (13))){
var state_32777__$1 = state_32777;
var statearr_32786_32817 = state_32777__$1;
(statearr_32786_32817[(2)] = null);

(statearr_32786_32817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (6))){
var inst_32737 = (state_32777[(7)]);
var inst_32762 = inst_32737.length;
var inst_32763 = (inst_32762 > (0));
var state_32777__$1 = state_32777;
if(cljs.core.truth_(inst_32763)){
var statearr_32787_32818 = state_32777__$1;
(statearr_32787_32818[(1)] = (12));

} else {
var statearr_32788_32819 = state_32777__$1;
(statearr_32788_32819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (3))){
var inst_32775 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32777__$1,inst_32775);
} else {
if((state_val_32778 === (12))){
var inst_32737 = (state_32777[(7)]);
var inst_32765 = cljs.core.vec.call(null,inst_32737);
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32777__$1,(15),out,inst_32765);
} else {
if((state_val_32778 === (2))){
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32777__$1,(4),ch);
} else {
if((state_val_32778 === (11))){
var inst_32741 = (state_32777[(9)]);
var inst_32745 = (state_32777[(10)]);
var inst_32755 = (state_32777[(2)]);
var inst_32756 = [];
var inst_32757 = inst_32756.push(inst_32741);
var inst_32737 = inst_32756;
var inst_32738 = inst_32745;
var state_32777__$1 = (function (){var statearr_32789 = state_32777;
(statearr_32789[(11)] = inst_32755);

(statearr_32789[(7)] = inst_32737);

(statearr_32789[(12)] = inst_32757);

(statearr_32789[(8)] = inst_32738);

return statearr_32789;
})();
var statearr_32790_32820 = state_32777__$1;
(statearr_32790_32820[(2)] = null);

(statearr_32790_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (9))){
var inst_32737 = (state_32777[(7)]);
var inst_32753 = cljs.core.vec.call(null,inst_32737);
var state_32777__$1 = state_32777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32777__$1,(11),out,inst_32753);
} else {
if((state_val_32778 === (5))){
var inst_32741 = (state_32777[(9)]);
var inst_32745 = (state_32777[(10)]);
var inst_32738 = (state_32777[(8)]);
var inst_32745__$1 = f.call(null,inst_32741);
var inst_32746 = cljs.core._EQ_.call(null,inst_32745__$1,inst_32738);
var inst_32747 = cljs.core.keyword_identical_QMARK_.call(null,inst_32738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32748 = (inst_32746) || (inst_32747);
var state_32777__$1 = (function (){var statearr_32791 = state_32777;
(statearr_32791[(10)] = inst_32745__$1);

return statearr_32791;
})();
if(cljs.core.truth_(inst_32748)){
var statearr_32792_32821 = state_32777__$1;
(statearr_32792_32821[(1)] = (8));

} else {
var statearr_32793_32822 = state_32777__$1;
(statearr_32793_32822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (14))){
var inst_32770 = (state_32777[(2)]);
var inst_32771 = cljs.core.async.close_BANG_.call(null,out);
var state_32777__$1 = (function (){var statearr_32795 = state_32777;
(statearr_32795[(13)] = inst_32770);

return statearr_32795;
})();
var statearr_32796_32823 = state_32777__$1;
(statearr_32796_32823[(2)] = inst_32771);

(statearr_32796_32823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (10))){
var inst_32760 = (state_32777[(2)]);
var state_32777__$1 = state_32777;
var statearr_32797_32824 = state_32777__$1;
(statearr_32797_32824[(2)] = inst_32760);

(statearr_32797_32824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32778 === (8))){
var inst_32737 = (state_32777[(7)]);
var inst_32741 = (state_32777[(9)]);
var inst_32745 = (state_32777[(10)]);
var inst_32750 = inst_32737.push(inst_32741);
var tmp32794 = inst_32737;
var inst_32737__$1 = tmp32794;
var inst_32738 = inst_32745;
var state_32777__$1 = (function (){var statearr_32798 = state_32777;
(statearr_32798[(14)] = inst_32750);

(statearr_32798[(7)] = inst_32737__$1);

(statearr_32798[(8)] = inst_32738);

return statearr_32798;
})();
var statearr_32799_32825 = state_32777__$1;
(statearr_32799_32825[(2)] = null);

(statearr_32799_32825[(1)] = (2));


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
});})(c__10513__auto___32811,out))
;
return ((function (switch__10492__auto__,c__10513__auto___32811,out){
return (function() {
var cljs$core$async$state_machine__10493__auto__ = null;
var cljs$core$async$state_machine__10493__auto____0 = (function (){
var statearr_32803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32803[(0)] = cljs$core$async$state_machine__10493__auto__);

(statearr_32803[(1)] = (1));

return statearr_32803;
});
var cljs$core$async$state_machine__10493__auto____1 = (function (state_32777){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_32777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e32804){if((e32804 instanceof Object)){
var ex__10496__auto__ = e32804;
var statearr_32805_32826 = state_32777;
(statearr_32805_32826[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32827 = state_32777;
state_32777 = G__32827;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
cljs$core$async$state_machine__10493__auto__ = function(state_32777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10493__auto____1.call(this,state_32777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10493__auto____0;
cljs$core$async$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10493__auto____1;
return cljs$core$async$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto___32811,out))
})();
var state__10515__auto__ = (function (){var statearr_32806 = f__10514__auto__.call(null);
(statearr_32806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto___32811);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto___32811,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map