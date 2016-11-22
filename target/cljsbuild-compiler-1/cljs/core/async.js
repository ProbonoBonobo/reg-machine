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
var args59427 = [];
var len__7651__auto___59433 = arguments.length;
var i__7652__auto___59434 = (0);
while(true){
if((i__7652__auto___59434 < len__7651__auto___59433)){
args59427.push((arguments[i__7652__auto___59434]));

var G__59435 = (i__7652__auto___59434 + (1));
i__7652__auto___59434 = G__59435;
continue;
} else {
}
break;
}

var G__59429 = args59427.length;
switch (G__59429) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59427.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async59430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59430 = (function (f,blockable,meta59431){
this.f = f;
this.blockable = blockable;
this.meta59431 = meta59431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59432,meta59431__$1){
var self__ = this;
var _59432__$1 = this;
return (new cljs.core.async.t_cljs$core$async59430(self__.f,self__.blockable,meta59431__$1));
});

cljs.core.async.t_cljs$core$async59430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59432){
var self__ = this;
var _59432__$1 = this;
return self__.meta59431;
});

cljs.core.async.t_cljs$core$async59430.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async59430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async59430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async59430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59431","meta59431",-1714507239,null)], null);
});

cljs.core.async.t_cljs$core$async59430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59430";

cljs.core.async.t_cljs$core$async59430.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async59430");
});

cljs.core.async.__GT_t_cljs$core$async59430 = (function cljs$core$async$__GT_t_cljs$core$async59430(f__$1,blockable__$1,meta59431){
return (new cljs.core.async.t_cljs$core$async59430(f__$1,blockable__$1,meta59431));
});

}

return (new cljs.core.async.t_cljs$core$async59430(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args59439 = [];
var len__7651__auto___59442 = arguments.length;
var i__7652__auto___59443 = (0);
while(true){
if((i__7652__auto___59443 < len__7651__auto___59442)){
args59439.push((arguments[i__7652__auto___59443]));

var G__59444 = (i__7652__auto___59443 + (1));
i__7652__auto___59443 = G__59444;
continue;
} else {
}
break;
}

var G__59441 = args59439.length;
switch (G__59441) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59439.length)].join('')));

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
var args59446 = [];
var len__7651__auto___59449 = arguments.length;
var i__7652__auto___59450 = (0);
while(true){
if((i__7652__auto___59450 < len__7651__auto___59449)){
args59446.push((arguments[i__7652__auto___59450]));

var G__59451 = (i__7652__auto___59450 + (1));
i__7652__auto___59450 = G__59451;
continue;
} else {
}
break;
}

var G__59448 = args59446.length;
switch (G__59448) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59446.length)].join('')));

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
var args59453 = [];
var len__7651__auto___59456 = arguments.length;
var i__7652__auto___59457 = (0);
while(true){
if((i__7652__auto___59457 < len__7651__auto___59456)){
args59453.push((arguments[i__7652__auto___59457]));

var G__59458 = (i__7652__auto___59457 + (1));
i__7652__auto___59457 = G__59458;
continue;
} else {
}
break;
}

var G__59455 = args59453.length;
switch (G__59455) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59453.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_59460 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_59460);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_59460,ret){
return (function (){
return fn1.call(null,val_59460);
});})(val_59460,ret))
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
var args59461 = [];
var len__7651__auto___59464 = arguments.length;
var i__7652__auto___59465 = (0);
while(true){
if((i__7652__auto___59465 < len__7651__auto___59464)){
args59461.push((arguments[i__7652__auto___59465]));

var G__59466 = (i__7652__auto___59465 + (1));
i__7652__auto___59465 = G__59466;
continue;
} else {
}
break;
}

var G__59463 = args59461.length;
switch (G__59463) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59461.length)].join('')));

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
var n__7461__auto___59468 = n;
var x_59469 = (0);
while(true){
if((x_59469 < n__7461__auto___59468)){
(a[x_59469] = (0));

var G__59470 = (x_59469 + (1));
x_59469 = G__59470;
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

var G__59471 = (i + (1));
i = G__59471;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async59475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59475 = (function (flag,meta59476){
this.flag = flag;
this.meta59476 = meta59476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_59477,meta59476__$1){
var self__ = this;
var _59477__$1 = this;
return (new cljs.core.async.t_cljs$core$async59475(self__.flag,meta59476__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async59475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_59477){
var self__ = this;
var _59477__$1 = this;
return self__.meta59476;
});})(flag))
;

cljs.core.async.t_cljs$core$async59475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async59475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async59475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async59475.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59476","meta59476",-254829169,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async59475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59475";

cljs.core.async.t_cljs$core$async59475.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async59475");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async59475 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59475(flag__$1,meta59476){
return (new cljs.core.async.t_cljs$core$async59475(flag__$1,meta59476));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async59475(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async59481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59481 = (function (flag,cb,meta59482){
this.flag = flag;
this.cb = cb;
this.meta59482 = meta59482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59483,meta59482__$1){
var self__ = this;
var _59483__$1 = this;
return (new cljs.core.async.t_cljs$core$async59481(self__.flag,self__.cb,meta59482__$1));
});

cljs.core.async.t_cljs$core$async59481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59483){
var self__ = this;
var _59483__$1 = this;
return self__.meta59482;
});

cljs.core.async.t_cljs$core$async59481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async59481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async59481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async59481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59482","meta59482",-31499725,null)], null);
});

cljs.core.async.t_cljs$core$async59481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59481";

cljs.core.async.t_cljs$core$async59481.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async59481");
});

cljs.core.async.__GT_t_cljs$core$async59481 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59481(flag__$1,cb__$1,meta59482){
return (new cljs.core.async.t_cljs$core$async59481(flag__$1,cb__$1,meta59482));
});

}

return (new cljs.core.async.t_cljs$core$async59481(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__59484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59484_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59485_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59485_SHARP_,port], null));
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
var G__59486 = (i + (1));
i = G__59486;
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
var len__7651__auto___59492 = arguments.length;
var i__7652__auto___59493 = (0);
while(true){
if((i__7652__auto___59493 < len__7651__auto___59492)){
args__7658__auto__.push((arguments[i__7652__auto___59493]));

var G__59494 = (i__7652__auto___59493 + (1));
i__7652__auto___59493 = G__59494;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59489){
var map__59490 = p__59489;
var map__59490__$1 = ((((!((map__59490 == null)))?((((map__59490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59490):map__59490);
var opts = map__59490__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59487){
var G__59488 = cljs.core.first.call(null,seq59487);
var seq59487__$1 = cljs.core.next.call(null,seq59487);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59488,seq59487__$1);
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
var args59495 = [];
var len__7651__auto___59545 = arguments.length;
var i__7652__auto___59546 = (0);
while(true){
if((i__7652__auto___59546 < len__7651__auto___59545)){
args59495.push((arguments[i__7652__auto___59546]));

var G__59547 = (i__7652__auto___59546 + (1));
i__7652__auto___59546 = G__59547;
continue;
} else {
}
break;
}

var G__59497 = args59495.length;
switch (G__59497) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59495.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11085__auto___59549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___59549){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___59549){
return (function (state_59521){
var state_val_59522 = (state_59521[(1)]);
if((state_val_59522 === (7))){
var inst_59517 = (state_59521[(2)]);
var state_59521__$1 = state_59521;
var statearr_59523_59550 = state_59521__$1;
(statearr_59523_59550[(2)] = inst_59517);

(statearr_59523_59550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (1))){
var state_59521__$1 = state_59521;
var statearr_59524_59551 = state_59521__$1;
(statearr_59524_59551[(2)] = null);

(statearr_59524_59551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (4))){
var inst_59500 = (state_59521[(7)]);
var inst_59500__$1 = (state_59521[(2)]);
var inst_59501 = (inst_59500__$1 == null);
var state_59521__$1 = (function (){var statearr_59525 = state_59521;
(statearr_59525[(7)] = inst_59500__$1);

return statearr_59525;
})();
if(cljs.core.truth_(inst_59501)){
var statearr_59526_59552 = state_59521__$1;
(statearr_59526_59552[(1)] = (5));

} else {
var statearr_59527_59553 = state_59521__$1;
(statearr_59527_59553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (13))){
var state_59521__$1 = state_59521;
var statearr_59528_59554 = state_59521__$1;
(statearr_59528_59554[(2)] = null);

(statearr_59528_59554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (6))){
var inst_59500 = (state_59521[(7)]);
var state_59521__$1 = state_59521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59521__$1,(11),to,inst_59500);
} else {
if((state_val_59522 === (3))){
var inst_59519 = (state_59521[(2)]);
var state_59521__$1 = state_59521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59521__$1,inst_59519);
} else {
if((state_val_59522 === (12))){
var state_59521__$1 = state_59521;
var statearr_59529_59555 = state_59521__$1;
(statearr_59529_59555[(2)] = null);

(statearr_59529_59555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (2))){
var state_59521__$1 = state_59521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59521__$1,(4),from);
} else {
if((state_val_59522 === (11))){
var inst_59510 = (state_59521[(2)]);
var state_59521__$1 = state_59521;
if(cljs.core.truth_(inst_59510)){
var statearr_59530_59556 = state_59521__$1;
(statearr_59530_59556[(1)] = (12));

} else {
var statearr_59531_59557 = state_59521__$1;
(statearr_59531_59557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (9))){
var state_59521__$1 = state_59521;
var statearr_59532_59558 = state_59521__$1;
(statearr_59532_59558[(2)] = null);

(statearr_59532_59558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (5))){
var state_59521__$1 = state_59521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59533_59559 = state_59521__$1;
(statearr_59533_59559[(1)] = (8));

} else {
var statearr_59534_59560 = state_59521__$1;
(statearr_59534_59560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (14))){
var inst_59515 = (state_59521[(2)]);
var state_59521__$1 = state_59521;
var statearr_59535_59561 = state_59521__$1;
(statearr_59535_59561[(2)] = inst_59515);

(statearr_59535_59561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (10))){
var inst_59507 = (state_59521[(2)]);
var state_59521__$1 = state_59521;
var statearr_59536_59562 = state_59521__$1;
(statearr_59536_59562[(2)] = inst_59507);

(statearr_59536_59562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59522 === (8))){
var inst_59504 = cljs.core.async.close_BANG_.call(null,to);
var state_59521__$1 = state_59521;
var statearr_59537_59563 = state_59521__$1;
(statearr_59537_59563[(2)] = inst_59504);

(statearr_59537_59563[(1)] = (10));


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
});})(c__11085__auto___59549))
;
return ((function (switch__10973__auto__,c__11085__auto___59549){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_59541 = [null,null,null,null,null,null,null,null];
(statearr_59541[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_59541[(1)] = (1));

return statearr_59541;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_59521){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_59521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e59542){if((e59542 instanceof Object)){
var ex__10977__auto__ = e59542;
var statearr_59543_59564 = state_59521;
(statearr_59543_59564[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59565 = state_59521;
state_59521 = G__59565;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_59521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_59521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___59549))
})();
var state__11087__auto__ = (function (){var statearr_59544 = f__11086__auto__.call(null);
(statearr_59544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___59549);

return statearr_59544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___59549))
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
return (function (p__59753){
var vec__59754 = p__59753;
var v = cljs.core.nth.call(null,vec__59754,(0),null);
var p = cljs.core.nth.call(null,vec__59754,(1),null);
var job = vec__59754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11085__auto___59940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___59940,res,vec__59754,v,p,job,jobs,results){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___59940,res,vec__59754,v,p,job,jobs,results){
return (function (state_59761){
var state_val_59762 = (state_59761[(1)]);
if((state_val_59762 === (1))){
var state_59761__$1 = state_59761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59761__$1,(2),res,v);
} else {
if((state_val_59762 === (2))){
var inst_59758 = (state_59761[(2)]);
var inst_59759 = cljs.core.async.close_BANG_.call(null,res);
var state_59761__$1 = (function (){var statearr_59763 = state_59761;
(statearr_59763[(7)] = inst_59758);

return statearr_59763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59761__$1,inst_59759);
} else {
return null;
}
}
});})(c__11085__auto___59940,res,vec__59754,v,p,job,jobs,results))
;
return ((function (switch__10973__auto__,c__11085__auto___59940,res,vec__59754,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0 = (function (){
var statearr_59767 = [null,null,null,null,null,null,null,null];
(statearr_59767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__);

(statearr_59767[(1)] = (1));

return statearr_59767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1 = (function (state_59761){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_59761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e59768){if((e59768 instanceof Object)){
var ex__10977__auto__ = e59768;
var statearr_59769_59941 = state_59761;
(statearr_59769_59941[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59942 = state_59761;
state_59761 = G__59942;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = function(state_59761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1.call(this,state_59761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___59940,res,vec__59754,v,p,job,jobs,results))
})();
var state__11087__auto__ = (function (){var statearr_59770 = f__11086__auto__.call(null);
(statearr_59770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___59940);

return statearr_59770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___59940,res,vec__59754,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__59771){
var vec__59772 = p__59771;
var v = cljs.core.nth.call(null,vec__59772,(0),null);
var p = cljs.core.nth.call(null,vec__59772,(1),null);
var job = vec__59772;
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
var n__7461__auto___59943 = n;
var __59944 = (0);
while(true){
if((__59944 < n__7461__auto___59943)){
var G__59775_59945 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__59775_59945) {
case "compute":
var c__11085__auto___59947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59944,c__11085__auto___59947,G__59775_59945,n__7461__auto___59943,jobs,results,process,async){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (__59944,c__11085__auto___59947,G__59775_59945,n__7461__auto___59943,jobs,results,process,async){
return (function (state_59788){
var state_val_59789 = (state_59788[(1)]);
if((state_val_59789 === (1))){
var state_59788__$1 = state_59788;
var statearr_59790_59948 = state_59788__$1;
(statearr_59790_59948[(2)] = null);

(statearr_59790_59948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (2))){
var state_59788__$1 = state_59788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59788__$1,(4),jobs);
} else {
if((state_val_59789 === (3))){
var inst_59786 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59788__$1,inst_59786);
} else {
if((state_val_59789 === (4))){
var inst_59778 = (state_59788[(2)]);
var inst_59779 = process.call(null,inst_59778);
var state_59788__$1 = state_59788;
if(cljs.core.truth_(inst_59779)){
var statearr_59791_59949 = state_59788__$1;
(statearr_59791_59949[(1)] = (5));

} else {
var statearr_59792_59950 = state_59788__$1;
(statearr_59792_59950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (5))){
var state_59788__$1 = state_59788;
var statearr_59793_59951 = state_59788__$1;
(statearr_59793_59951[(2)] = null);

(statearr_59793_59951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (6))){
var state_59788__$1 = state_59788;
var statearr_59794_59952 = state_59788__$1;
(statearr_59794_59952[(2)] = null);

(statearr_59794_59952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (7))){
var inst_59784 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
var statearr_59795_59953 = state_59788__$1;
(statearr_59795_59953[(2)] = inst_59784);

(statearr_59795_59953[(1)] = (3));


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
});})(__59944,c__11085__auto___59947,G__59775_59945,n__7461__auto___59943,jobs,results,process,async))
;
return ((function (__59944,switch__10973__auto__,c__11085__auto___59947,G__59775_59945,n__7461__auto___59943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0 = (function (){
var statearr_59799 = [null,null,null,null,null,null,null];
(statearr_59799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__);

(statearr_59799[(1)] = (1));

return statearr_59799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1 = (function (state_59788){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_59788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e59800){if((e59800 instanceof Object)){
var ex__10977__auto__ = e59800;
var statearr_59801_59954 = state_59788;
(statearr_59801_59954[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59955 = state_59788;
state_59788 = G__59955;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = function(state_59788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1.call(this,state_59788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__;
})()
;})(__59944,switch__10973__auto__,c__11085__auto___59947,G__59775_59945,n__7461__auto___59943,jobs,results,process,async))
})();
var state__11087__auto__ = (function (){var statearr_59802 = f__11086__auto__.call(null);
(statearr_59802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___59947);

return statearr_59802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(__59944,c__11085__auto___59947,G__59775_59945,n__7461__auto___59943,jobs,results,process,async))
);


break;
case "async":
var c__11085__auto___59956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59944,c__11085__auto___59956,G__59775_59945,n__7461__auto___59943,jobs,results,process,async){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (__59944,c__11085__auto___59956,G__59775_59945,n__7461__auto___59943,jobs,results,process,async){
return (function (state_59815){
var state_val_59816 = (state_59815[(1)]);
if((state_val_59816 === (1))){
var state_59815__$1 = state_59815;
var statearr_59817_59957 = state_59815__$1;
(statearr_59817_59957[(2)] = null);

(statearr_59817_59957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59816 === (2))){
var state_59815__$1 = state_59815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59815__$1,(4),jobs);
} else {
if((state_val_59816 === (3))){
var inst_59813 = (state_59815[(2)]);
var state_59815__$1 = state_59815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59815__$1,inst_59813);
} else {
if((state_val_59816 === (4))){
var inst_59805 = (state_59815[(2)]);
var inst_59806 = async.call(null,inst_59805);
var state_59815__$1 = state_59815;
if(cljs.core.truth_(inst_59806)){
var statearr_59818_59958 = state_59815__$1;
(statearr_59818_59958[(1)] = (5));

} else {
var statearr_59819_59959 = state_59815__$1;
(statearr_59819_59959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59816 === (5))){
var state_59815__$1 = state_59815;
var statearr_59820_59960 = state_59815__$1;
(statearr_59820_59960[(2)] = null);

(statearr_59820_59960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59816 === (6))){
var state_59815__$1 = state_59815;
var statearr_59821_59961 = state_59815__$1;
(statearr_59821_59961[(2)] = null);

(statearr_59821_59961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59816 === (7))){
var inst_59811 = (state_59815[(2)]);
var state_59815__$1 = state_59815;
var statearr_59822_59962 = state_59815__$1;
(statearr_59822_59962[(2)] = inst_59811);

(statearr_59822_59962[(1)] = (3));


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
});})(__59944,c__11085__auto___59956,G__59775_59945,n__7461__auto___59943,jobs,results,process,async))
;
return ((function (__59944,switch__10973__auto__,c__11085__auto___59956,G__59775_59945,n__7461__auto___59943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0 = (function (){
var statearr_59826 = [null,null,null,null,null,null,null];
(statearr_59826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__);

(statearr_59826[(1)] = (1));

return statearr_59826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1 = (function (state_59815){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_59815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e59827){if((e59827 instanceof Object)){
var ex__10977__auto__ = e59827;
var statearr_59828_59963 = state_59815;
(statearr_59828_59963[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59964 = state_59815;
state_59815 = G__59964;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = function(state_59815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1.call(this,state_59815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__;
})()
;})(__59944,switch__10973__auto__,c__11085__auto___59956,G__59775_59945,n__7461__auto___59943,jobs,results,process,async))
})();
var state__11087__auto__ = (function (){var statearr_59829 = f__11086__auto__.call(null);
(statearr_59829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___59956);

return statearr_59829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(__59944,c__11085__auto___59956,G__59775_59945,n__7461__auto___59943,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__59965 = (__59944 + (1));
__59944 = G__59965;
continue;
} else {
}
break;
}

var c__11085__auto___59966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___59966,jobs,results,process,async){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___59966,jobs,results,process,async){
return (function (state_59851){
var state_val_59852 = (state_59851[(1)]);
if((state_val_59852 === (1))){
var state_59851__$1 = state_59851;
var statearr_59853_59967 = state_59851__$1;
(statearr_59853_59967[(2)] = null);

(statearr_59853_59967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (2))){
var state_59851__$1 = state_59851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59851__$1,(4),from);
} else {
if((state_val_59852 === (3))){
var inst_59849 = (state_59851[(2)]);
var state_59851__$1 = state_59851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59851__$1,inst_59849);
} else {
if((state_val_59852 === (4))){
var inst_59832 = (state_59851[(7)]);
var inst_59832__$1 = (state_59851[(2)]);
var inst_59833 = (inst_59832__$1 == null);
var state_59851__$1 = (function (){var statearr_59854 = state_59851;
(statearr_59854[(7)] = inst_59832__$1);

return statearr_59854;
})();
if(cljs.core.truth_(inst_59833)){
var statearr_59855_59968 = state_59851__$1;
(statearr_59855_59968[(1)] = (5));

} else {
var statearr_59856_59969 = state_59851__$1;
(statearr_59856_59969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (5))){
var inst_59835 = cljs.core.async.close_BANG_.call(null,jobs);
var state_59851__$1 = state_59851;
var statearr_59857_59970 = state_59851__$1;
(statearr_59857_59970[(2)] = inst_59835);

(statearr_59857_59970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (6))){
var inst_59832 = (state_59851[(7)]);
var inst_59837 = (state_59851[(8)]);
var inst_59837__$1 = cljs.core.async.chan.call(null,(1));
var inst_59838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59839 = [inst_59832,inst_59837__$1];
var inst_59840 = (new cljs.core.PersistentVector(null,2,(5),inst_59838,inst_59839,null));
var state_59851__$1 = (function (){var statearr_59858 = state_59851;
(statearr_59858[(8)] = inst_59837__$1);

return statearr_59858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59851__$1,(8),jobs,inst_59840);
} else {
if((state_val_59852 === (7))){
var inst_59847 = (state_59851[(2)]);
var state_59851__$1 = state_59851;
var statearr_59859_59971 = state_59851__$1;
(statearr_59859_59971[(2)] = inst_59847);

(statearr_59859_59971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (8))){
var inst_59837 = (state_59851[(8)]);
var inst_59842 = (state_59851[(2)]);
var state_59851__$1 = (function (){var statearr_59860 = state_59851;
(statearr_59860[(9)] = inst_59842);

return statearr_59860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59851__$1,(9),results,inst_59837);
} else {
if((state_val_59852 === (9))){
var inst_59844 = (state_59851[(2)]);
var state_59851__$1 = (function (){var statearr_59861 = state_59851;
(statearr_59861[(10)] = inst_59844);

return statearr_59861;
})();
var statearr_59862_59972 = state_59851__$1;
(statearr_59862_59972[(2)] = null);

(statearr_59862_59972[(1)] = (2));


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
});})(c__11085__auto___59966,jobs,results,process,async))
;
return ((function (switch__10973__auto__,c__11085__auto___59966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0 = (function (){
var statearr_59866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__);

(statearr_59866[(1)] = (1));

return statearr_59866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1 = (function (state_59851){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_59851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e59867){if((e59867 instanceof Object)){
var ex__10977__auto__ = e59867;
var statearr_59868_59973 = state_59851;
(statearr_59868_59973[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59974 = state_59851;
state_59851 = G__59974;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = function(state_59851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1.call(this,state_59851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___59966,jobs,results,process,async))
})();
var state__11087__auto__ = (function (){var statearr_59869 = f__11086__auto__.call(null);
(statearr_59869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___59966);

return statearr_59869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___59966,jobs,results,process,async))
);


var c__11085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto__,jobs,results,process,async){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto__,jobs,results,process,async){
return (function (state_59907){
var state_val_59908 = (state_59907[(1)]);
if((state_val_59908 === (7))){
var inst_59903 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
var statearr_59909_59975 = state_59907__$1;
(statearr_59909_59975[(2)] = inst_59903);

(statearr_59909_59975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (20))){
var state_59907__$1 = state_59907;
var statearr_59910_59976 = state_59907__$1;
(statearr_59910_59976[(2)] = null);

(statearr_59910_59976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (1))){
var state_59907__$1 = state_59907;
var statearr_59911_59977 = state_59907__$1;
(statearr_59911_59977[(2)] = null);

(statearr_59911_59977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (4))){
var inst_59872 = (state_59907[(7)]);
var inst_59872__$1 = (state_59907[(2)]);
var inst_59873 = (inst_59872__$1 == null);
var state_59907__$1 = (function (){var statearr_59912 = state_59907;
(statearr_59912[(7)] = inst_59872__$1);

return statearr_59912;
})();
if(cljs.core.truth_(inst_59873)){
var statearr_59913_59978 = state_59907__$1;
(statearr_59913_59978[(1)] = (5));

} else {
var statearr_59914_59979 = state_59907__$1;
(statearr_59914_59979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (15))){
var inst_59885 = (state_59907[(8)]);
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59907__$1,(18),to,inst_59885);
} else {
if((state_val_59908 === (21))){
var inst_59898 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
var statearr_59915_59980 = state_59907__$1;
(statearr_59915_59980[(2)] = inst_59898);

(statearr_59915_59980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (13))){
var inst_59900 = (state_59907[(2)]);
var state_59907__$1 = (function (){var statearr_59916 = state_59907;
(statearr_59916[(9)] = inst_59900);

return statearr_59916;
})();
var statearr_59917_59981 = state_59907__$1;
(statearr_59917_59981[(2)] = null);

(statearr_59917_59981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (6))){
var inst_59872 = (state_59907[(7)]);
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59907__$1,(11),inst_59872);
} else {
if((state_val_59908 === (17))){
var inst_59893 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
if(cljs.core.truth_(inst_59893)){
var statearr_59918_59982 = state_59907__$1;
(statearr_59918_59982[(1)] = (19));

} else {
var statearr_59919_59983 = state_59907__$1;
(statearr_59919_59983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (3))){
var inst_59905 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59907__$1,inst_59905);
} else {
if((state_val_59908 === (12))){
var inst_59882 = (state_59907[(10)]);
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59907__$1,(14),inst_59882);
} else {
if((state_val_59908 === (2))){
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59907__$1,(4),results);
} else {
if((state_val_59908 === (19))){
var state_59907__$1 = state_59907;
var statearr_59920_59984 = state_59907__$1;
(statearr_59920_59984[(2)] = null);

(statearr_59920_59984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (11))){
var inst_59882 = (state_59907[(2)]);
var state_59907__$1 = (function (){var statearr_59921 = state_59907;
(statearr_59921[(10)] = inst_59882);

return statearr_59921;
})();
var statearr_59922_59985 = state_59907__$1;
(statearr_59922_59985[(2)] = null);

(statearr_59922_59985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (9))){
var state_59907__$1 = state_59907;
var statearr_59923_59986 = state_59907__$1;
(statearr_59923_59986[(2)] = null);

(statearr_59923_59986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (5))){
var state_59907__$1 = state_59907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59924_59987 = state_59907__$1;
(statearr_59924_59987[(1)] = (8));

} else {
var statearr_59925_59988 = state_59907__$1;
(statearr_59925_59988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (14))){
var inst_59887 = (state_59907[(11)]);
var inst_59885 = (state_59907[(8)]);
var inst_59885__$1 = (state_59907[(2)]);
var inst_59886 = (inst_59885__$1 == null);
var inst_59887__$1 = cljs.core.not.call(null,inst_59886);
var state_59907__$1 = (function (){var statearr_59926 = state_59907;
(statearr_59926[(11)] = inst_59887__$1);

(statearr_59926[(8)] = inst_59885__$1);

return statearr_59926;
})();
if(inst_59887__$1){
var statearr_59927_59989 = state_59907__$1;
(statearr_59927_59989[(1)] = (15));

} else {
var statearr_59928_59990 = state_59907__$1;
(statearr_59928_59990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (16))){
var inst_59887 = (state_59907[(11)]);
var state_59907__$1 = state_59907;
var statearr_59929_59991 = state_59907__$1;
(statearr_59929_59991[(2)] = inst_59887);

(statearr_59929_59991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (10))){
var inst_59879 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
var statearr_59930_59992 = state_59907__$1;
(statearr_59930_59992[(2)] = inst_59879);

(statearr_59930_59992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (18))){
var inst_59890 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
var statearr_59931_59993 = state_59907__$1;
(statearr_59931_59993[(2)] = inst_59890);

(statearr_59931_59993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (8))){
var inst_59876 = cljs.core.async.close_BANG_.call(null,to);
var state_59907__$1 = state_59907;
var statearr_59932_59994 = state_59907__$1;
(statearr_59932_59994[(2)] = inst_59876);

(statearr_59932_59994[(1)] = (10));


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
});})(c__11085__auto__,jobs,results,process,async))
;
return ((function (switch__10973__auto__,c__11085__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0 = (function (){
var statearr_59936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__);

(statearr_59936[(1)] = (1));

return statearr_59936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1 = (function (state_59907){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_59907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e59937){if((e59937 instanceof Object)){
var ex__10977__auto__ = e59937;
var statearr_59938_59995 = state_59907;
(statearr_59938_59995[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59996 = state_59907;
state_59907 = G__59996;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__ = function(state_59907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1.call(this,state_59907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto__,jobs,results,process,async))
})();
var state__11087__auto__ = (function (){var statearr_59939 = f__11086__auto__.call(null);
(statearr_59939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto__);

return statearr_59939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto__,jobs,results,process,async))
);

return c__11085__auto__;
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
var args59997 = [];
var len__7651__auto___60000 = arguments.length;
var i__7652__auto___60001 = (0);
while(true){
if((i__7652__auto___60001 < len__7651__auto___60000)){
args59997.push((arguments[i__7652__auto___60001]));

var G__60002 = (i__7652__auto___60001 + (1));
i__7652__auto___60001 = G__60002;
continue;
} else {
}
break;
}

var G__59999 = args59997.length;
switch (G__59999) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59997.length)].join('')));

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
var args60004 = [];
var len__7651__auto___60007 = arguments.length;
var i__7652__auto___60008 = (0);
while(true){
if((i__7652__auto___60008 < len__7651__auto___60007)){
args60004.push((arguments[i__7652__auto___60008]));

var G__60009 = (i__7652__auto___60008 + (1));
i__7652__auto___60008 = G__60009;
continue;
} else {
}
break;
}

var G__60006 = args60004.length;
switch (G__60006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60004.length)].join('')));

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
var args60011 = [];
var len__7651__auto___60064 = arguments.length;
var i__7652__auto___60065 = (0);
while(true){
if((i__7652__auto___60065 < len__7651__auto___60064)){
args60011.push((arguments[i__7652__auto___60065]));

var G__60066 = (i__7652__auto___60065 + (1));
i__7652__auto___60065 = G__60066;
continue;
} else {
}
break;
}

var G__60013 = args60011.length;
switch (G__60013) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60011.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11085__auto___60068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___60068,tc,fc){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___60068,tc,fc){
return (function (state_60039){
var state_val_60040 = (state_60039[(1)]);
if((state_val_60040 === (7))){
var inst_60035 = (state_60039[(2)]);
var state_60039__$1 = state_60039;
var statearr_60041_60069 = state_60039__$1;
(statearr_60041_60069[(2)] = inst_60035);

(statearr_60041_60069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (1))){
var state_60039__$1 = state_60039;
var statearr_60042_60070 = state_60039__$1;
(statearr_60042_60070[(2)] = null);

(statearr_60042_60070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (4))){
var inst_60016 = (state_60039[(7)]);
var inst_60016__$1 = (state_60039[(2)]);
var inst_60017 = (inst_60016__$1 == null);
var state_60039__$1 = (function (){var statearr_60043 = state_60039;
(statearr_60043[(7)] = inst_60016__$1);

return statearr_60043;
})();
if(cljs.core.truth_(inst_60017)){
var statearr_60044_60071 = state_60039__$1;
(statearr_60044_60071[(1)] = (5));

} else {
var statearr_60045_60072 = state_60039__$1;
(statearr_60045_60072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (13))){
var state_60039__$1 = state_60039;
var statearr_60046_60073 = state_60039__$1;
(statearr_60046_60073[(2)] = null);

(statearr_60046_60073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (6))){
var inst_60016 = (state_60039[(7)]);
var inst_60022 = p.call(null,inst_60016);
var state_60039__$1 = state_60039;
if(cljs.core.truth_(inst_60022)){
var statearr_60047_60074 = state_60039__$1;
(statearr_60047_60074[(1)] = (9));

} else {
var statearr_60048_60075 = state_60039__$1;
(statearr_60048_60075[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (3))){
var inst_60037 = (state_60039[(2)]);
var state_60039__$1 = state_60039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60039__$1,inst_60037);
} else {
if((state_val_60040 === (12))){
var state_60039__$1 = state_60039;
var statearr_60049_60076 = state_60039__$1;
(statearr_60049_60076[(2)] = null);

(statearr_60049_60076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (2))){
var state_60039__$1 = state_60039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60039__$1,(4),ch);
} else {
if((state_val_60040 === (11))){
var inst_60016 = (state_60039[(7)]);
var inst_60026 = (state_60039[(2)]);
var state_60039__$1 = state_60039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60039__$1,(8),inst_60026,inst_60016);
} else {
if((state_val_60040 === (9))){
var state_60039__$1 = state_60039;
var statearr_60050_60077 = state_60039__$1;
(statearr_60050_60077[(2)] = tc);

(statearr_60050_60077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (5))){
var inst_60019 = cljs.core.async.close_BANG_.call(null,tc);
var inst_60020 = cljs.core.async.close_BANG_.call(null,fc);
var state_60039__$1 = (function (){var statearr_60051 = state_60039;
(statearr_60051[(8)] = inst_60019);

return statearr_60051;
})();
var statearr_60052_60078 = state_60039__$1;
(statearr_60052_60078[(2)] = inst_60020);

(statearr_60052_60078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (14))){
var inst_60033 = (state_60039[(2)]);
var state_60039__$1 = state_60039;
var statearr_60053_60079 = state_60039__$1;
(statearr_60053_60079[(2)] = inst_60033);

(statearr_60053_60079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (10))){
var state_60039__$1 = state_60039;
var statearr_60054_60080 = state_60039__$1;
(statearr_60054_60080[(2)] = fc);

(statearr_60054_60080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60040 === (8))){
var inst_60028 = (state_60039[(2)]);
var state_60039__$1 = state_60039;
if(cljs.core.truth_(inst_60028)){
var statearr_60055_60081 = state_60039__$1;
(statearr_60055_60081[(1)] = (12));

} else {
var statearr_60056_60082 = state_60039__$1;
(statearr_60056_60082[(1)] = (13));

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
});})(c__11085__auto___60068,tc,fc))
;
return ((function (switch__10973__auto__,c__11085__auto___60068,tc,fc){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_60060 = [null,null,null,null,null,null,null,null,null];
(statearr_60060[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_60060[(1)] = (1));

return statearr_60060;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_60039){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_60039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e60061){if((e60061 instanceof Object)){
var ex__10977__auto__ = e60061;
var statearr_60062_60083 = state_60039;
(statearr_60062_60083[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60084 = state_60039;
state_60039 = G__60084;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_60039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_60039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___60068,tc,fc))
})();
var state__11087__auto__ = (function (){var statearr_60063 = f__11086__auto__.call(null);
(statearr_60063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___60068);

return statearr_60063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___60068,tc,fc))
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
var c__11085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto__){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto__){
return (function (state_60148){
var state_val_60149 = (state_60148[(1)]);
if((state_val_60149 === (7))){
var inst_60144 = (state_60148[(2)]);
var state_60148__$1 = state_60148;
var statearr_60150_60171 = state_60148__$1;
(statearr_60150_60171[(2)] = inst_60144);

(statearr_60150_60171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (1))){
var inst_60128 = init;
var state_60148__$1 = (function (){var statearr_60151 = state_60148;
(statearr_60151[(7)] = inst_60128);

return statearr_60151;
})();
var statearr_60152_60172 = state_60148__$1;
(statearr_60152_60172[(2)] = null);

(statearr_60152_60172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (4))){
var inst_60131 = (state_60148[(8)]);
var inst_60131__$1 = (state_60148[(2)]);
var inst_60132 = (inst_60131__$1 == null);
var state_60148__$1 = (function (){var statearr_60153 = state_60148;
(statearr_60153[(8)] = inst_60131__$1);

return statearr_60153;
})();
if(cljs.core.truth_(inst_60132)){
var statearr_60154_60173 = state_60148__$1;
(statearr_60154_60173[(1)] = (5));

} else {
var statearr_60155_60174 = state_60148__$1;
(statearr_60155_60174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (6))){
var inst_60135 = (state_60148[(9)]);
var inst_60128 = (state_60148[(7)]);
var inst_60131 = (state_60148[(8)]);
var inst_60135__$1 = f.call(null,inst_60128,inst_60131);
var inst_60136 = cljs.core.reduced_QMARK_.call(null,inst_60135__$1);
var state_60148__$1 = (function (){var statearr_60156 = state_60148;
(statearr_60156[(9)] = inst_60135__$1);

return statearr_60156;
})();
if(inst_60136){
var statearr_60157_60175 = state_60148__$1;
(statearr_60157_60175[(1)] = (8));

} else {
var statearr_60158_60176 = state_60148__$1;
(statearr_60158_60176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (3))){
var inst_60146 = (state_60148[(2)]);
var state_60148__$1 = state_60148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60148__$1,inst_60146);
} else {
if((state_val_60149 === (2))){
var state_60148__$1 = state_60148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60148__$1,(4),ch);
} else {
if((state_val_60149 === (9))){
var inst_60135 = (state_60148[(9)]);
var inst_60128 = inst_60135;
var state_60148__$1 = (function (){var statearr_60159 = state_60148;
(statearr_60159[(7)] = inst_60128);

return statearr_60159;
})();
var statearr_60160_60177 = state_60148__$1;
(statearr_60160_60177[(2)] = null);

(statearr_60160_60177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (5))){
var inst_60128 = (state_60148[(7)]);
var state_60148__$1 = state_60148;
var statearr_60161_60178 = state_60148__$1;
(statearr_60161_60178[(2)] = inst_60128);

(statearr_60161_60178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (10))){
var inst_60142 = (state_60148[(2)]);
var state_60148__$1 = state_60148;
var statearr_60162_60179 = state_60148__$1;
(statearr_60162_60179[(2)] = inst_60142);

(statearr_60162_60179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60149 === (8))){
var inst_60135 = (state_60148[(9)]);
var inst_60138 = cljs.core.deref.call(null,inst_60135);
var state_60148__$1 = state_60148;
var statearr_60163_60180 = state_60148__$1;
(statearr_60163_60180[(2)] = inst_60138);

(statearr_60163_60180[(1)] = (10));


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
});})(c__11085__auto__))
;
return ((function (switch__10973__auto__,c__11085__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10974__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10974__auto____0 = (function (){
var statearr_60167 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60167[(0)] = cljs$core$async$reduce_$_state_machine__10974__auto__);

(statearr_60167[(1)] = (1));

return statearr_60167;
});
var cljs$core$async$reduce_$_state_machine__10974__auto____1 = (function (state_60148){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_60148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e60168){if((e60168 instanceof Object)){
var ex__10977__auto__ = e60168;
var statearr_60169_60181 = state_60148;
(statearr_60169_60181[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60182 = state_60148;
state_60148 = G__60182;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10974__auto__ = function(state_60148){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10974__auto____1.call(this,state_60148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10974__auto____0;
cljs$core$async$reduce_$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10974__auto____1;
return cljs$core$async$reduce_$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto__))
})();
var state__11087__auto__ = (function (){var statearr_60170 = f__11086__auto__.call(null);
(statearr_60170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto__);

return statearr_60170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto__))
);

return c__11085__auto__;
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
var args60183 = [];
var len__7651__auto___60235 = arguments.length;
var i__7652__auto___60236 = (0);
while(true){
if((i__7652__auto___60236 < len__7651__auto___60235)){
args60183.push((arguments[i__7652__auto___60236]));

var G__60237 = (i__7652__auto___60236 + (1));
i__7652__auto___60236 = G__60237;
continue;
} else {
}
break;
}

var G__60185 = args60183.length;
switch (G__60185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60183.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto__){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto__){
return (function (state_60210){
var state_val_60211 = (state_60210[(1)]);
if((state_val_60211 === (7))){
var inst_60192 = (state_60210[(2)]);
var state_60210__$1 = state_60210;
var statearr_60212_60239 = state_60210__$1;
(statearr_60212_60239[(2)] = inst_60192);

(statearr_60212_60239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (1))){
var inst_60186 = cljs.core.seq.call(null,coll);
var inst_60187 = inst_60186;
var state_60210__$1 = (function (){var statearr_60213 = state_60210;
(statearr_60213[(7)] = inst_60187);

return statearr_60213;
})();
var statearr_60214_60240 = state_60210__$1;
(statearr_60214_60240[(2)] = null);

(statearr_60214_60240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (4))){
var inst_60187 = (state_60210[(7)]);
var inst_60190 = cljs.core.first.call(null,inst_60187);
var state_60210__$1 = state_60210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60210__$1,(7),ch,inst_60190);
} else {
if((state_val_60211 === (13))){
var inst_60204 = (state_60210[(2)]);
var state_60210__$1 = state_60210;
var statearr_60215_60241 = state_60210__$1;
(statearr_60215_60241[(2)] = inst_60204);

(statearr_60215_60241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (6))){
var inst_60195 = (state_60210[(2)]);
var state_60210__$1 = state_60210;
if(cljs.core.truth_(inst_60195)){
var statearr_60216_60242 = state_60210__$1;
(statearr_60216_60242[(1)] = (8));

} else {
var statearr_60217_60243 = state_60210__$1;
(statearr_60217_60243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (3))){
var inst_60208 = (state_60210[(2)]);
var state_60210__$1 = state_60210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60210__$1,inst_60208);
} else {
if((state_val_60211 === (12))){
var state_60210__$1 = state_60210;
var statearr_60218_60244 = state_60210__$1;
(statearr_60218_60244[(2)] = null);

(statearr_60218_60244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (2))){
var inst_60187 = (state_60210[(7)]);
var state_60210__$1 = state_60210;
if(cljs.core.truth_(inst_60187)){
var statearr_60219_60245 = state_60210__$1;
(statearr_60219_60245[(1)] = (4));

} else {
var statearr_60220_60246 = state_60210__$1;
(statearr_60220_60246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (11))){
var inst_60201 = cljs.core.async.close_BANG_.call(null,ch);
var state_60210__$1 = state_60210;
var statearr_60221_60247 = state_60210__$1;
(statearr_60221_60247[(2)] = inst_60201);

(statearr_60221_60247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (9))){
var state_60210__$1 = state_60210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60222_60248 = state_60210__$1;
(statearr_60222_60248[(1)] = (11));

} else {
var statearr_60223_60249 = state_60210__$1;
(statearr_60223_60249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (5))){
var inst_60187 = (state_60210[(7)]);
var state_60210__$1 = state_60210;
var statearr_60224_60250 = state_60210__$1;
(statearr_60224_60250[(2)] = inst_60187);

(statearr_60224_60250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (10))){
var inst_60206 = (state_60210[(2)]);
var state_60210__$1 = state_60210;
var statearr_60225_60251 = state_60210__$1;
(statearr_60225_60251[(2)] = inst_60206);

(statearr_60225_60251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60211 === (8))){
var inst_60187 = (state_60210[(7)]);
var inst_60197 = cljs.core.next.call(null,inst_60187);
var inst_60187__$1 = inst_60197;
var state_60210__$1 = (function (){var statearr_60226 = state_60210;
(statearr_60226[(7)] = inst_60187__$1);

return statearr_60226;
})();
var statearr_60227_60252 = state_60210__$1;
(statearr_60227_60252[(2)] = null);

(statearr_60227_60252[(1)] = (2));


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
});})(c__11085__auto__))
;
return ((function (switch__10973__auto__,c__11085__auto__){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_60231 = [null,null,null,null,null,null,null,null];
(statearr_60231[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_60231[(1)] = (1));

return statearr_60231;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_60210){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_60210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e60232){if((e60232 instanceof Object)){
var ex__10977__auto__ = e60232;
var statearr_60233_60253 = state_60210;
(statearr_60233_60253[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60254 = state_60210;
state_60210 = G__60254;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_60210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_60210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto__))
})();
var state__11087__auto__ = (function (){var statearr_60234 = f__11086__auto__.call(null);
(statearr_60234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto__);

return statearr_60234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto__))
);

return c__11085__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async60480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60480 = (function (ch,cs,meta60481){
this.ch = ch;
this.cs = cs;
this.meta60481 = meta60481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60482,meta60481__$1){
var self__ = this;
var _60482__$1 = this;
return (new cljs.core.async.t_cljs$core$async60480(self__.ch,self__.cs,meta60481__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60482){
var self__ = this;
var _60482__$1 = this;
return self__.meta60481;
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60481","meta60481",1320301284,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60480";

cljs.core.async.t_cljs$core$async60480.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async60480");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async60480 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60480(ch__$1,cs__$1,meta60481){
return (new cljs.core.async.t_cljs$core$async60480(ch__$1,cs__$1,meta60481));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60480(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11085__auto___60705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___60705,cs,m,dchan,dctr,done){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___60705,cs,m,dchan,dctr,done){
return (function (state_60617){
var state_val_60618 = (state_60617[(1)]);
if((state_val_60618 === (7))){
var inst_60613 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60619_60706 = state_60617__$1;
(statearr_60619_60706[(2)] = inst_60613);

(statearr_60619_60706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (20))){
var inst_60516 = (state_60617[(7)]);
var inst_60528 = cljs.core.first.call(null,inst_60516);
var inst_60529 = cljs.core.nth.call(null,inst_60528,(0),null);
var inst_60530 = cljs.core.nth.call(null,inst_60528,(1),null);
var state_60617__$1 = (function (){var statearr_60620 = state_60617;
(statearr_60620[(8)] = inst_60529);

return statearr_60620;
})();
if(cljs.core.truth_(inst_60530)){
var statearr_60621_60707 = state_60617__$1;
(statearr_60621_60707[(1)] = (22));

} else {
var statearr_60622_60708 = state_60617__$1;
(statearr_60622_60708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (27))){
var inst_60485 = (state_60617[(9)]);
var inst_60558 = (state_60617[(10)]);
var inst_60565 = (state_60617[(11)]);
var inst_60560 = (state_60617[(12)]);
var inst_60565__$1 = cljs.core._nth.call(null,inst_60558,inst_60560);
var inst_60566 = cljs.core.async.put_BANG_.call(null,inst_60565__$1,inst_60485,done);
var state_60617__$1 = (function (){var statearr_60623 = state_60617;
(statearr_60623[(11)] = inst_60565__$1);

return statearr_60623;
})();
if(cljs.core.truth_(inst_60566)){
var statearr_60624_60709 = state_60617__$1;
(statearr_60624_60709[(1)] = (30));

} else {
var statearr_60625_60710 = state_60617__$1;
(statearr_60625_60710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (1))){
var state_60617__$1 = state_60617;
var statearr_60626_60711 = state_60617__$1;
(statearr_60626_60711[(2)] = null);

(statearr_60626_60711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (24))){
var inst_60516 = (state_60617[(7)]);
var inst_60535 = (state_60617[(2)]);
var inst_60536 = cljs.core.next.call(null,inst_60516);
var inst_60494 = inst_60536;
var inst_60495 = null;
var inst_60496 = (0);
var inst_60497 = (0);
var state_60617__$1 = (function (){var statearr_60627 = state_60617;
(statearr_60627[(13)] = inst_60535);

(statearr_60627[(14)] = inst_60496);

(statearr_60627[(15)] = inst_60497);

(statearr_60627[(16)] = inst_60495);

(statearr_60627[(17)] = inst_60494);

return statearr_60627;
})();
var statearr_60628_60712 = state_60617__$1;
(statearr_60628_60712[(2)] = null);

(statearr_60628_60712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (39))){
var state_60617__$1 = state_60617;
var statearr_60632_60713 = state_60617__$1;
(statearr_60632_60713[(2)] = null);

(statearr_60632_60713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (4))){
var inst_60485 = (state_60617[(9)]);
var inst_60485__$1 = (state_60617[(2)]);
var inst_60486 = (inst_60485__$1 == null);
var state_60617__$1 = (function (){var statearr_60633 = state_60617;
(statearr_60633[(9)] = inst_60485__$1);

return statearr_60633;
})();
if(cljs.core.truth_(inst_60486)){
var statearr_60634_60714 = state_60617__$1;
(statearr_60634_60714[(1)] = (5));

} else {
var statearr_60635_60715 = state_60617__$1;
(statearr_60635_60715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (15))){
var inst_60496 = (state_60617[(14)]);
var inst_60497 = (state_60617[(15)]);
var inst_60495 = (state_60617[(16)]);
var inst_60494 = (state_60617[(17)]);
var inst_60512 = (state_60617[(2)]);
var inst_60513 = (inst_60497 + (1));
var tmp60629 = inst_60496;
var tmp60630 = inst_60495;
var tmp60631 = inst_60494;
var inst_60494__$1 = tmp60631;
var inst_60495__$1 = tmp60630;
var inst_60496__$1 = tmp60629;
var inst_60497__$1 = inst_60513;
var state_60617__$1 = (function (){var statearr_60636 = state_60617;
(statearr_60636[(18)] = inst_60512);

(statearr_60636[(14)] = inst_60496__$1);

(statearr_60636[(15)] = inst_60497__$1);

(statearr_60636[(16)] = inst_60495__$1);

(statearr_60636[(17)] = inst_60494__$1);

return statearr_60636;
})();
var statearr_60637_60716 = state_60617__$1;
(statearr_60637_60716[(2)] = null);

(statearr_60637_60716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (21))){
var inst_60539 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60641_60717 = state_60617__$1;
(statearr_60641_60717[(2)] = inst_60539);

(statearr_60641_60717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (31))){
var inst_60565 = (state_60617[(11)]);
var inst_60569 = done.call(null,null);
var inst_60570 = cljs.core.async.untap_STAR_.call(null,m,inst_60565);
var state_60617__$1 = (function (){var statearr_60642 = state_60617;
(statearr_60642[(19)] = inst_60569);

return statearr_60642;
})();
var statearr_60643_60718 = state_60617__$1;
(statearr_60643_60718[(2)] = inst_60570);

(statearr_60643_60718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (32))){
var inst_60559 = (state_60617[(20)]);
var inst_60558 = (state_60617[(10)]);
var inst_60557 = (state_60617[(21)]);
var inst_60560 = (state_60617[(12)]);
var inst_60572 = (state_60617[(2)]);
var inst_60573 = (inst_60560 + (1));
var tmp60638 = inst_60559;
var tmp60639 = inst_60558;
var tmp60640 = inst_60557;
var inst_60557__$1 = tmp60640;
var inst_60558__$1 = tmp60639;
var inst_60559__$1 = tmp60638;
var inst_60560__$1 = inst_60573;
var state_60617__$1 = (function (){var statearr_60644 = state_60617;
(statearr_60644[(20)] = inst_60559__$1);

(statearr_60644[(22)] = inst_60572);

(statearr_60644[(10)] = inst_60558__$1);

(statearr_60644[(21)] = inst_60557__$1);

(statearr_60644[(12)] = inst_60560__$1);

return statearr_60644;
})();
var statearr_60645_60719 = state_60617__$1;
(statearr_60645_60719[(2)] = null);

(statearr_60645_60719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (40))){
var inst_60585 = (state_60617[(23)]);
var inst_60589 = done.call(null,null);
var inst_60590 = cljs.core.async.untap_STAR_.call(null,m,inst_60585);
var state_60617__$1 = (function (){var statearr_60646 = state_60617;
(statearr_60646[(24)] = inst_60589);

return statearr_60646;
})();
var statearr_60647_60720 = state_60617__$1;
(statearr_60647_60720[(2)] = inst_60590);

(statearr_60647_60720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (33))){
var inst_60576 = (state_60617[(25)]);
var inst_60578 = cljs.core.chunked_seq_QMARK_.call(null,inst_60576);
var state_60617__$1 = state_60617;
if(inst_60578){
var statearr_60648_60721 = state_60617__$1;
(statearr_60648_60721[(1)] = (36));

} else {
var statearr_60649_60722 = state_60617__$1;
(statearr_60649_60722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (13))){
var inst_60506 = (state_60617[(26)]);
var inst_60509 = cljs.core.async.close_BANG_.call(null,inst_60506);
var state_60617__$1 = state_60617;
var statearr_60650_60723 = state_60617__$1;
(statearr_60650_60723[(2)] = inst_60509);

(statearr_60650_60723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (22))){
var inst_60529 = (state_60617[(8)]);
var inst_60532 = cljs.core.async.close_BANG_.call(null,inst_60529);
var state_60617__$1 = state_60617;
var statearr_60651_60724 = state_60617__$1;
(statearr_60651_60724[(2)] = inst_60532);

(statearr_60651_60724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (36))){
var inst_60576 = (state_60617[(25)]);
var inst_60580 = cljs.core.chunk_first.call(null,inst_60576);
var inst_60581 = cljs.core.chunk_rest.call(null,inst_60576);
var inst_60582 = cljs.core.count.call(null,inst_60580);
var inst_60557 = inst_60581;
var inst_60558 = inst_60580;
var inst_60559 = inst_60582;
var inst_60560 = (0);
var state_60617__$1 = (function (){var statearr_60652 = state_60617;
(statearr_60652[(20)] = inst_60559);

(statearr_60652[(10)] = inst_60558);

(statearr_60652[(21)] = inst_60557);

(statearr_60652[(12)] = inst_60560);

return statearr_60652;
})();
var statearr_60653_60725 = state_60617__$1;
(statearr_60653_60725[(2)] = null);

(statearr_60653_60725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (41))){
var inst_60576 = (state_60617[(25)]);
var inst_60592 = (state_60617[(2)]);
var inst_60593 = cljs.core.next.call(null,inst_60576);
var inst_60557 = inst_60593;
var inst_60558 = null;
var inst_60559 = (0);
var inst_60560 = (0);
var state_60617__$1 = (function (){var statearr_60654 = state_60617;
(statearr_60654[(20)] = inst_60559);

(statearr_60654[(10)] = inst_60558);

(statearr_60654[(27)] = inst_60592);

(statearr_60654[(21)] = inst_60557);

(statearr_60654[(12)] = inst_60560);

return statearr_60654;
})();
var statearr_60655_60726 = state_60617__$1;
(statearr_60655_60726[(2)] = null);

(statearr_60655_60726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (43))){
var state_60617__$1 = state_60617;
var statearr_60656_60727 = state_60617__$1;
(statearr_60656_60727[(2)] = null);

(statearr_60656_60727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (29))){
var inst_60601 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60657_60728 = state_60617__$1;
(statearr_60657_60728[(2)] = inst_60601);

(statearr_60657_60728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (44))){
var inst_60610 = (state_60617[(2)]);
var state_60617__$1 = (function (){var statearr_60658 = state_60617;
(statearr_60658[(28)] = inst_60610);

return statearr_60658;
})();
var statearr_60659_60729 = state_60617__$1;
(statearr_60659_60729[(2)] = null);

(statearr_60659_60729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (6))){
var inst_60549 = (state_60617[(29)]);
var inst_60548 = cljs.core.deref.call(null,cs);
var inst_60549__$1 = cljs.core.keys.call(null,inst_60548);
var inst_60550 = cljs.core.count.call(null,inst_60549__$1);
var inst_60551 = cljs.core.reset_BANG_.call(null,dctr,inst_60550);
var inst_60556 = cljs.core.seq.call(null,inst_60549__$1);
var inst_60557 = inst_60556;
var inst_60558 = null;
var inst_60559 = (0);
var inst_60560 = (0);
var state_60617__$1 = (function (){var statearr_60660 = state_60617;
(statearr_60660[(20)] = inst_60559);

(statearr_60660[(30)] = inst_60551);

(statearr_60660[(10)] = inst_60558);

(statearr_60660[(21)] = inst_60557);

(statearr_60660[(29)] = inst_60549__$1);

(statearr_60660[(12)] = inst_60560);

return statearr_60660;
})();
var statearr_60661_60730 = state_60617__$1;
(statearr_60661_60730[(2)] = null);

(statearr_60661_60730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (28))){
var inst_60576 = (state_60617[(25)]);
var inst_60557 = (state_60617[(21)]);
var inst_60576__$1 = cljs.core.seq.call(null,inst_60557);
var state_60617__$1 = (function (){var statearr_60662 = state_60617;
(statearr_60662[(25)] = inst_60576__$1);

return statearr_60662;
})();
if(inst_60576__$1){
var statearr_60663_60731 = state_60617__$1;
(statearr_60663_60731[(1)] = (33));

} else {
var statearr_60664_60732 = state_60617__$1;
(statearr_60664_60732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (25))){
var inst_60559 = (state_60617[(20)]);
var inst_60560 = (state_60617[(12)]);
var inst_60562 = (inst_60560 < inst_60559);
var inst_60563 = inst_60562;
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60563)){
var statearr_60665_60733 = state_60617__$1;
(statearr_60665_60733[(1)] = (27));

} else {
var statearr_60666_60734 = state_60617__$1;
(statearr_60666_60734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (34))){
var state_60617__$1 = state_60617;
var statearr_60667_60735 = state_60617__$1;
(statearr_60667_60735[(2)] = null);

(statearr_60667_60735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (17))){
var state_60617__$1 = state_60617;
var statearr_60668_60736 = state_60617__$1;
(statearr_60668_60736[(2)] = null);

(statearr_60668_60736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (3))){
var inst_60615 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60617__$1,inst_60615);
} else {
if((state_val_60618 === (12))){
var inst_60544 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60669_60737 = state_60617__$1;
(statearr_60669_60737[(2)] = inst_60544);

(statearr_60669_60737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (2))){
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(4),ch);
} else {
if((state_val_60618 === (23))){
var state_60617__$1 = state_60617;
var statearr_60670_60738 = state_60617__$1;
(statearr_60670_60738[(2)] = null);

(statearr_60670_60738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (35))){
var inst_60599 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60671_60739 = state_60617__$1;
(statearr_60671_60739[(2)] = inst_60599);

(statearr_60671_60739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (19))){
var inst_60516 = (state_60617[(7)]);
var inst_60520 = cljs.core.chunk_first.call(null,inst_60516);
var inst_60521 = cljs.core.chunk_rest.call(null,inst_60516);
var inst_60522 = cljs.core.count.call(null,inst_60520);
var inst_60494 = inst_60521;
var inst_60495 = inst_60520;
var inst_60496 = inst_60522;
var inst_60497 = (0);
var state_60617__$1 = (function (){var statearr_60672 = state_60617;
(statearr_60672[(14)] = inst_60496);

(statearr_60672[(15)] = inst_60497);

(statearr_60672[(16)] = inst_60495);

(statearr_60672[(17)] = inst_60494);

return statearr_60672;
})();
var statearr_60673_60740 = state_60617__$1;
(statearr_60673_60740[(2)] = null);

(statearr_60673_60740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (11))){
var inst_60494 = (state_60617[(17)]);
var inst_60516 = (state_60617[(7)]);
var inst_60516__$1 = cljs.core.seq.call(null,inst_60494);
var state_60617__$1 = (function (){var statearr_60674 = state_60617;
(statearr_60674[(7)] = inst_60516__$1);

return statearr_60674;
})();
if(inst_60516__$1){
var statearr_60675_60741 = state_60617__$1;
(statearr_60675_60741[(1)] = (16));

} else {
var statearr_60676_60742 = state_60617__$1;
(statearr_60676_60742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (9))){
var inst_60546 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60677_60743 = state_60617__$1;
(statearr_60677_60743[(2)] = inst_60546);

(statearr_60677_60743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (5))){
var inst_60492 = cljs.core.deref.call(null,cs);
var inst_60493 = cljs.core.seq.call(null,inst_60492);
var inst_60494 = inst_60493;
var inst_60495 = null;
var inst_60496 = (0);
var inst_60497 = (0);
var state_60617__$1 = (function (){var statearr_60678 = state_60617;
(statearr_60678[(14)] = inst_60496);

(statearr_60678[(15)] = inst_60497);

(statearr_60678[(16)] = inst_60495);

(statearr_60678[(17)] = inst_60494);

return statearr_60678;
})();
var statearr_60679_60744 = state_60617__$1;
(statearr_60679_60744[(2)] = null);

(statearr_60679_60744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (14))){
var state_60617__$1 = state_60617;
var statearr_60680_60745 = state_60617__$1;
(statearr_60680_60745[(2)] = null);

(statearr_60680_60745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (45))){
var inst_60607 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60681_60746 = state_60617__$1;
(statearr_60681_60746[(2)] = inst_60607);

(statearr_60681_60746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (26))){
var inst_60549 = (state_60617[(29)]);
var inst_60603 = (state_60617[(2)]);
var inst_60604 = cljs.core.seq.call(null,inst_60549);
var state_60617__$1 = (function (){var statearr_60682 = state_60617;
(statearr_60682[(31)] = inst_60603);

return statearr_60682;
})();
if(inst_60604){
var statearr_60683_60747 = state_60617__$1;
(statearr_60683_60747[(1)] = (42));

} else {
var statearr_60684_60748 = state_60617__$1;
(statearr_60684_60748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (16))){
var inst_60516 = (state_60617[(7)]);
var inst_60518 = cljs.core.chunked_seq_QMARK_.call(null,inst_60516);
var state_60617__$1 = state_60617;
if(inst_60518){
var statearr_60685_60749 = state_60617__$1;
(statearr_60685_60749[(1)] = (19));

} else {
var statearr_60686_60750 = state_60617__$1;
(statearr_60686_60750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (38))){
var inst_60596 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60687_60751 = state_60617__$1;
(statearr_60687_60751[(2)] = inst_60596);

(statearr_60687_60751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (30))){
var state_60617__$1 = state_60617;
var statearr_60688_60752 = state_60617__$1;
(statearr_60688_60752[(2)] = null);

(statearr_60688_60752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (10))){
var inst_60497 = (state_60617[(15)]);
var inst_60495 = (state_60617[(16)]);
var inst_60505 = cljs.core._nth.call(null,inst_60495,inst_60497);
var inst_60506 = cljs.core.nth.call(null,inst_60505,(0),null);
var inst_60507 = cljs.core.nth.call(null,inst_60505,(1),null);
var state_60617__$1 = (function (){var statearr_60689 = state_60617;
(statearr_60689[(26)] = inst_60506);

return statearr_60689;
})();
if(cljs.core.truth_(inst_60507)){
var statearr_60690_60753 = state_60617__$1;
(statearr_60690_60753[(1)] = (13));

} else {
var statearr_60691_60754 = state_60617__$1;
(statearr_60691_60754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (18))){
var inst_60542 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60692_60755 = state_60617__$1;
(statearr_60692_60755[(2)] = inst_60542);

(statearr_60692_60755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (42))){
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(45),dchan);
} else {
if((state_val_60618 === (37))){
var inst_60485 = (state_60617[(9)]);
var inst_60576 = (state_60617[(25)]);
var inst_60585 = (state_60617[(23)]);
var inst_60585__$1 = cljs.core.first.call(null,inst_60576);
var inst_60586 = cljs.core.async.put_BANG_.call(null,inst_60585__$1,inst_60485,done);
var state_60617__$1 = (function (){var statearr_60693 = state_60617;
(statearr_60693[(23)] = inst_60585__$1);

return statearr_60693;
})();
if(cljs.core.truth_(inst_60586)){
var statearr_60694_60756 = state_60617__$1;
(statearr_60694_60756[(1)] = (39));

} else {
var statearr_60695_60757 = state_60617__$1;
(statearr_60695_60757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (8))){
var inst_60496 = (state_60617[(14)]);
var inst_60497 = (state_60617[(15)]);
var inst_60499 = (inst_60497 < inst_60496);
var inst_60500 = inst_60499;
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60500)){
var statearr_60696_60758 = state_60617__$1;
(statearr_60696_60758[(1)] = (10));

} else {
var statearr_60697_60759 = state_60617__$1;
(statearr_60697_60759[(1)] = (11));

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
});})(c__11085__auto___60705,cs,m,dchan,dctr,done))
;
return ((function (switch__10973__auto__,c__11085__auto___60705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10974__auto__ = null;
var cljs$core$async$mult_$_state_machine__10974__auto____0 = (function (){
var statearr_60701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60701[(0)] = cljs$core$async$mult_$_state_machine__10974__auto__);

(statearr_60701[(1)] = (1));

return statearr_60701;
});
var cljs$core$async$mult_$_state_machine__10974__auto____1 = (function (state_60617){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_60617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e60702){if((e60702 instanceof Object)){
var ex__10977__auto__ = e60702;
var statearr_60703_60760 = state_60617;
(statearr_60703_60760[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60761 = state_60617;
state_60617 = G__60761;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10974__auto__ = function(state_60617){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10974__auto____1.call(this,state_60617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10974__auto____0;
cljs$core$async$mult_$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10974__auto____1;
return cljs$core$async$mult_$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___60705,cs,m,dchan,dctr,done))
})();
var state__11087__auto__ = (function (){var statearr_60704 = f__11086__auto__.call(null);
(statearr_60704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___60705);

return statearr_60704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___60705,cs,m,dchan,dctr,done))
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
var args60762 = [];
var len__7651__auto___60765 = arguments.length;
var i__7652__auto___60766 = (0);
while(true){
if((i__7652__auto___60766 < len__7651__auto___60765)){
args60762.push((arguments[i__7652__auto___60766]));

var G__60767 = (i__7652__auto___60766 + (1));
i__7652__auto___60766 = G__60767;
continue;
} else {
}
break;
}

var G__60764 = args60762.length;
switch (G__60764) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60762.length)].join('')));

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
var len__7651__auto___60779 = arguments.length;
var i__7652__auto___60780 = (0);
while(true){
if((i__7652__auto___60780 < len__7651__auto___60779)){
args__7658__auto__.push((arguments[i__7652__auto___60780]));

var G__60781 = (i__7652__auto___60780 + (1));
i__7652__auto___60780 = G__60781;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60773){
var map__60774 = p__60773;
var map__60774__$1 = ((((!((map__60774 == null)))?((((map__60774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60774):map__60774);
var opts = map__60774__$1;
var statearr_60776_60782 = state;
(statearr_60776_60782[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__60774,map__60774__$1,opts){
return (function (val){
var statearr_60777_60783 = state;
(statearr_60777_60783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__60774,map__60774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_60778_60784 = state;
(statearr_60778_60784[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60769){
var G__60770 = cljs.core.first.call(null,seq60769);
var seq60769__$1 = cljs.core.next.call(null,seq60769);
var G__60771 = cljs.core.first.call(null,seq60769__$1);
var seq60769__$2 = cljs.core.next.call(null,seq60769__$1);
var G__60772 = cljs.core.first.call(null,seq60769__$2);
var seq60769__$3 = cljs.core.next.call(null,seq60769__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60770,G__60771,G__60772,seq60769__$3);
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
if(typeof cljs.core.async.t_cljs$core$async60952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60952 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta60953){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta60953 = meta60953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60954,meta60953__$1){
var self__ = this;
var _60954__$1 = this;
return (new cljs.core.async.t_cljs$core$async60952(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta60953__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60954){
var self__ = this;
var _60954__$1 = this;
return self__.meta60953;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async60952.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta60953","meta60953",-252613204,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60952";

cljs.core.async.t_cljs$core$async60952.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async60952");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async60952 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async60952(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta60953){
return (new cljs.core.async.t_cljs$core$async60952(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta60953));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async60952(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11085__auto___61119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_61056){
var state_val_61057 = (state_61056[(1)]);
if((state_val_61057 === (7))){
var inst_60971 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
var statearr_61058_61120 = state_61056__$1;
(statearr_61058_61120[(2)] = inst_60971);

(statearr_61058_61120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (20))){
var inst_60983 = (state_61056[(7)]);
var state_61056__$1 = state_61056;
var statearr_61059_61121 = state_61056__$1;
(statearr_61059_61121[(2)] = inst_60983);

(statearr_61059_61121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (27))){
var state_61056__$1 = state_61056;
var statearr_61060_61122 = state_61056__$1;
(statearr_61060_61122[(2)] = null);

(statearr_61060_61122[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (1))){
var inst_60958 = (state_61056[(8)]);
var inst_60958__$1 = calc_state.call(null);
var inst_60960 = (inst_60958__$1 == null);
var inst_60961 = cljs.core.not.call(null,inst_60960);
var state_61056__$1 = (function (){var statearr_61061 = state_61056;
(statearr_61061[(8)] = inst_60958__$1);

return statearr_61061;
})();
if(inst_60961){
var statearr_61062_61123 = state_61056__$1;
(statearr_61062_61123[(1)] = (2));

} else {
var statearr_61063_61124 = state_61056__$1;
(statearr_61063_61124[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (24))){
var inst_61007 = (state_61056[(9)]);
var inst_61016 = (state_61056[(10)]);
var inst_61030 = (state_61056[(11)]);
var inst_61030__$1 = inst_61007.call(null,inst_61016);
var state_61056__$1 = (function (){var statearr_61064 = state_61056;
(statearr_61064[(11)] = inst_61030__$1);

return statearr_61064;
})();
if(cljs.core.truth_(inst_61030__$1)){
var statearr_61065_61125 = state_61056__$1;
(statearr_61065_61125[(1)] = (29));

} else {
var statearr_61066_61126 = state_61056__$1;
(statearr_61066_61126[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (4))){
var inst_60974 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_60974)){
var statearr_61067_61127 = state_61056__$1;
(statearr_61067_61127[(1)] = (8));

} else {
var statearr_61068_61128 = state_61056__$1;
(statearr_61068_61128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (15))){
var inst_61001 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_61001)){
var statearr_61069_61129 = state_61056__$1;
(statearr_61069_61129[(1)] = (19));

} else {
var statearr_61070_61130 = state_61056__$1;
(statearr_61070_61130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (21))){
var inst_61006 = (state_61056[(12)]);
var inst_61006__$1 = (state_61056[(2)]);
var inst_61007 = cljs.core.get.call(null,inst_61006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61008 = cljs.core.get.call(null,inst_61006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61009 = cljs.core.get.call(null,inst_61006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61056__$1 = (function (){var statearr_61071 = state_61056;
(statearr_61071[(9)] = inst_61007);

(statearr_61071[(13)] = inst_61008);

(statearr_61071[(12)] = inst_61006__$1);

return statearr_61071;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_61056__$1,(22),inst_61009);
} else {
if((state_val_61057 === (31))){
var inst_61038 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_61038)){
var statearr_61072_61131 = state_61056__$1;
(statearr_61072_61131[(1)] = (32));

} else {
var statearr_61073_61132 = state_61056__$1;
(statearr_61073_61132[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (32))){
var inst_61015 = (state_61056[(14)]);
var state_61056__$1 = state_61056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61056__$1,(35),out,inst_61015);
} else {
if((state_val_61057 === (33))){
var inst_61006 = (state_61056[(12)]);
var inst_60983 = inst_61006;
var state_61056__$1 = (function (){var statearr_61074 = state_61056;
(statearr_61074[(7)] = inst_60983);

return statearr_61074;
})();
var statearr_61075_61133 = state_61056__$1;
(statearr_61075_61133[(2)] = null);

(statearr_61075_61133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (13))){
var inst_60983 = (state_61056[(7)]);
var inst_60990 = inst_60983.cljs$lang$protocol_mask$partition0$;
var inst_60991 = (inst_60990 & (64));
var inst_60992 = inst_60983.cljs$core$ISeq$;
var inst_60993 = (cljs.core.PROTOCOL_SENTINEL === inst_60992);
var inst_60994 = (inst_60991) || (inst_60993);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_60994)){
var statearr_61076_61134 = state_61056__$1;
(statearr_61076_61134[(1)] = (16));

} else {
var statearr_61077_61135 = state_61056__$1;
(statearr_61077_61135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (22))){
var inst_61016 = (state_61056[(10)]);
var inst_61015 = (state_61056[(14)]);
var inst_61014 = (state_61056[(2)]);
var inst_61015__$1 = cljs.core.nth.call(null,inst_61014,(0),null);
var inst_61016__$1 = cljs.core.nth.call(null,inst_61014,(1),null);
var inst_61017 = (inst_61015__$1 == null);
var inst_61018 = cljs.core._EQ_.call(null,inst_61016__$1,change);
var inst_61019 = (inst_61017) || (inst_61018);
var state_61056__$1 = (function (){var statearr_61078 = state_61056;
(statearr_61078[(10)] = inst_61016__$1);

(statearr_61078[(14)] = inst_61015__$1);

return statearr_61078;
})();
if(cljs.core.truth_(inst_61019)){
var statearr_61079_61136 = state_61056__$1;
(statearr_61079_61136[(1)] = (23));

} else {
var statearr_61080_61137 = state_61056__$1;
(statearr_61080_61137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (36))){
var inst_61006 = (state_61056[(12)]);
var inst_60983 = inst_61006;
var state_61056__$1 = (function (){var statearr_61081 = state_61056;
(statearr_61081[(7)] = inst_60983);

return statearr_61081;
})();
var statearr_61082_61138 = state_61056__$1;
(statearr_61082_61138[(2)] = null);

(statearr_61082_61138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (29))){
var inst_61030 = (state_61056[(11)]);
var state_61056__$1 = state_61056;
var statearr_61083_61139 = state_61056__$1;
(statearr_61083_61139[(2)] = inst_61030);

(statearr_61083_61139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (6))){
var state_61056__$1 = state_61056;
var statearr_61084_61140 = state_61056__$1;
(statearr_61084_61140[(2)] = false);

(statearr_61084_61140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (28))){
var inst_61026 = (state_61056[(2)]);
var inst_61027 = calc_state.call(null);
var inst_60983 = inst_61027;
var state_61056__$1 = (function (){var statearr_61085 = state_61056;
(statearr_61085[(15)] = inst_61026);

(statearr_61085[(7)] = inst_60983);

return statearr_61085;
})();
var statearr_61086_61141 = state_61056__$1;
(statearr_61086_61141[(2)] = null);

(statearr_61086_61141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (25))){
var inst_61052 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
var statearr_61087_61142 = state_61056__$1;
(statearr_61087_61142[(2)] = inst_61052);

(statearr_61087_61142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (34))){
var inst_61050 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
var statearr_61088_61143 = state_61056__$1;
(statearr_61088_61143[(2)] = inst_61050);

(statearr_61088_61143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (17))){
var state_61056__$1 = state_61056;
var statearr_61089_61144 = state_61056__$1;
(statearr_61089_61144[(2)] = false);

(statearr_61089_61144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (3))){
var state_61056__$1 = state_61056;
var statearr_61090_61145 = state_61056__$1;
(statearr_61090_61145[(2)] = false);

(statearr_61090_61145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (12))){
var inst_61054 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61056__$1,inst_61054);
} else {
if((state_val_61057 === (2))){
var inst_60958 = (state_61056[(8)]);
var inst_60963 = inst_60958.cljs$lang$protocol_mask$partition0$;
var inst_60964 = (inst_60963 & (64));
var inst_60965 = inst_60958.cljs$core$ISeq$;
var inst_60966 = (cljs.core.PROTOCOL_SENTINEL === inst_60965);
var inst_60967 = (inst_60964) || (inst_60966);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_60967)){
var statearr_61091_61146 = state_61056__$1;
(statearr_61091_61146[(1)] = (5));

} else {
var statearr_61092_61147 = state_61056__$1;
(statearr_61092_61147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (23))){
var inst_61015 = (state_61056[(14)]);
var inst_61021 = (inst_61015 == null);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_61021)){
var statearr_61093_61148 = state_61056__$1;
(statearr_61093_61148[(1)] = (26));

} else {
var statearr_61094_61149 = state_61056__$1;
(statearr_61094_61149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (35))){
var inst_61041 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
if(cljs.core.truth_(inst_61041)){
var statearr_61095_61150 = state_61056__$1;
(statearr_61095_61150[(1)] = (36));

} else {
var statearr_61096_61151 = state_61056__$1;
(statearr_61096_61151[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (19))){
var inst_60983 = (state_61056[(7)]);
var inst_61003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60983);
var state_61056__$1 = state_61056;
var statearr_61097_61152 = state_61056__$1;
(statearr_61097_61152[(2)] = inst_61003);

(statearr_61097_61152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (11))){
var inst_60983 = (state_61056[(7)]);
var inst_60987 = (inst_60983 == null);
var inst_60988 = cljs.core.not.call(null,inst_60987);
var state_61056__$1 = state_61056;
if(inst_60988){
var statearr_61098_61153 = state_61056__$1;
(statearr_61098_61153[(1)] = (13));

} else {
var statearr_61099_61154 = state_61056__$1;
(statearr_61099_61154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (9))){
var inst_60958 = (state_61056[(8)]);
var state_61056__$1 = state_61056;
var statearr_61100_61155 = state_61056__$1;
(statearr_61100_61155[(2)] = inst_60958);

(statearr_61100_61155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (5))){
var state_61056__$1 = state_61056;
var statearr_61101_61156 = state_61056__$1;
(statearr_61101_61156[(2)] = true);

(statearr_61101_61156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (14))){
var state_61056__$1 = state_61056;
var statearr_61102_61157 = state_61056__$1;
(statearr_61102_61157[(2)] = false);

(statearr_61102_61157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (26))){
var inst_61016 = (state_61056[(10)]);
var inst_61023 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_61016);
var state_61056__$1 = state_61056;
var statearr_61103_61158 = state_61056__$1;
(statearr_61103_61158[(2)] = inst_61023);

(statearr_61103_61158[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (16))){
var state_61056__$1 = state_61056;
var statearr_61104_61159 = state_61056__$1;
(statearr_61104_61159[(2)] = true);

(statearr_61104_61159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (38))){
var inst_61046 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
var statearr_61105_61160 = state_61056__$1;
(statearr_61105_61160[(2)] = inst_61046);

(statearr_61105_61160[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (30))){
var inst_61007 = (state_61056[(9)]);
var inst_61008 = (state_61056[(13)]);
var inst_61016 = (state_61056[(10)]);
var inst_61033 = cljs.core.empty_QMARK_.call(null,inst_61007);
var inst_61034 = inst_61008.call(null,inst_61016);
var inst_61035 = cljs.core.not.call(null,inst_61034);
var inst_61036 = (inst_61033) && (inst_61035);
var state_61056__$1 = state_61056;
var statearr_61106_61161 = state_61056__$1;
(statearr_61106_61161[(2)] = inst_61036);

(statearr_61106_61161[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (10))){
var inst_60958 = (state_61056[(8)]);
var inst_60979 = (state_61056[(2)]);
var inst_60980 = cljs.core.get.call(null,inst_60979,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60981 = cljs.core.get.call(null,inst_60979,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60982 = cljs.core.get.call(null,inst_60979,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60983 = inst_60958;
var state_61056__$1 = (function (){var statearr_61107 = state_61056;
(statearr_61107[(16)] = inst_60982);

(statearr_61107[(17)] = inst_60981);

(statearr_61107[(7)] = inst_60983);

(statearr_61107[(18)] = inst_60980);

return statearr_61107;
})();
var statearr_61108_61162 = state_61056__$1;
(statearr_61108_61162[(2)] = null);

(statearr_61108_61162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (18))){
var inst_60998 = (state_61056[(2)]);
var state_61056__$1 = state_61056;
var statearr_61109_61163 = state_61056__$1;
(statearr_61109_61163[(2)] = inst_60998);

(statearr_61109_61163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (37))){
var state_61056__$1 = state_61056;
var statearr_61110_61164 = state_61056__$1;
(statearr_61110_61164[(2)] = null);

(statearr_61110_61164[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61057 === (8))){
var inst_60958 = (state_61056[(8)]);
var inst_60976 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60958);
var state_61056__$1 = state_61056;
var statearr_61111_61165 = state_61056__$1;
(statearr_61111_61165[(2)] = inst_60976);

(statearr_61111_61165[(1)] = (10));


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
});})(c__11085__auto___61119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10973__auto__,c__11085__auto___61119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10974__auto__ = null;
var cljs$core$async$mix_$_state_machine__10974__auto____0 = (function (){
var statearr_61115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61115[(0)] = cljs$core$async$mix_$_state_machine__10974__auto__);

(statearr_61115[(1)] = (1));

return statearr_61115;
});
var cljs$core$async$mix_$_state_machine__10974__auto____1 = (function (state_61056){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61116){if((e61116 instanceof Object)){
var ex__10977__auto__ = e61116;
var statearr_61117_61166 = state_61056;
(statearr_61117_61166[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61167 = state_61056;
state_61056 = G__61167;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10974__auto__ = function(state_61056){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10974__auto____1.call(this,state_61056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10974__auto____0;
cljs$core$async$mix_$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10974__auto____1;
return cljs$core$async$mix_$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11087__auto__ = (function (){var statearr_61118 = f__11086__auto__.call(null);
(statearr_61118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61119);

return statearr_61118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args61168 = [];
var len__7651__auto___61171 = arguments.length;
var i__7652__auto___61172 = (0);
while(true){
if((i__7652__auto___61172 < len__7651__auto___61171)){
args61168.push((arguments[i__7652__auto___61172]));

var G__61173 = (i__7652__auto___61172 + (1));
i__7652__auto___61172 = G__61173;
continue;
} else {
}
break;
}

var G__61170 = args61168.length;
switch (G__61170) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61168.length)].join('')));

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
var args61176 = [];
var len__7651__auto___61301 = arguments.length;
var i__7652__auto___61302 = (0);
while(true){
if((i__7652__auto___61302 < len__7651__auto___61301)){
args61176.push((arguments[i__7652__auto___61302]));

var G__61303 = (i__7652__auto___61302 + (1));
i__7652__auto___61302 = G__61303;
continue;
} else {
}
break;
}

var G__61178 = args61176.length;
switch (G__61178) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61176.length)].join('')));

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
return (function (p1__61175_SHARP_){
if(cljs.core.truth_(p1__61175_SHARP_.call(null,topic))){
return p1__61175_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__61175_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6543__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async61179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61179 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61180){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61180 = meta61180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61181,meta61180__$1){
var self__ = this;
var _61181__$1 = this;
return (new cljs.core.async.t_cljs$core$async61179(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61180__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61181){
var self__ = this;
var _61181__$1 = this;
return self__.meta61180;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61180","meta61180",-2087953360,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61179";

cljs.core.async.t_cljs$core$async61179.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async61179");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async61179 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61179(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61180){
return (new cljs.core.async.t_cljs$core$async61179(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61180));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61179(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11085__auto___61305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61305,mults,ensure_mult,p){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61305,mults,ensure_mult,p){
return (function (state_61253){
var state_val_61254 = (state_61253[(1)]);
if((state_val_61254 === (7))){
var inst_61249 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
var statearr_61255_61306 = state_61253__$1;
(statearr_61255_61306[(2)] = inst_61249);

(statearr_61255_61306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (20))){
var state_61253__$1 = state_61253;
var statearr_61256_61307 = state_61253__$1;
(statearr_61256_61307[(2)] = null);

(statearr_61256_61307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (1))){
var state_61253__$1 = state_61253;
var statearr_61257_61308 = state_61253__$1;
(statearr_61257_61308[(2)] = null);

(statearr_61257_61308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (24))){
var inst_61232 = (state_61253[(7)]);
var inst_61241 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_61232);
var state_61253__$1 = state_61253;
var statearr_61258_61309 = state_61253__$1;
(statearr_61258_61309[(2)] = inst_61241);

(statearr_61258_61309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (4))){
var inst_61184 = (state_61253[(8)]);
var inst_61184__$1 = (state_61253[(2)]);
var inst_61185 = (inst_61184__$1 == null);
var state_61253__$1 = (function (){var statearr_61259 = state_61253;
(statearr_61259[(8)] = inst_61184__$1);

return statearr_61259;
})();
if(cljs.core.truth_(inst_61185)){
var statearr_61260_61310 = state_61253__$1;
(statearr_61260_61310[(1)] = (5));

} else {
var statearr_61261_61311 = state_61253__$1;
(statearr_61261_61311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (15))){
var inst_61226 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
var statearr_61262_61312 = state_61253__$1;
(statearr_61262_61312[(2)] = inst_61226);

(statearr_61262_61312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (21))){
var inst_61246 = (state_61253[(2)]);
var state_61253__$1 = (function (){var statearr_61263 = state_61253;
(statearr_61263[(9)] = inst_61246);

return statearr_61263;
})();
var statearr_61264_61313 = state_61253__$1;
(statearr_61264_61313[(2)] = null);

(statearr_61264_61313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (13))){
var inst_61208 = (state_61253[(10)]);
var inst_61210 = cljs.core.chunked_seq_QMARK_.call(null,inst_61208);
var state_61253__$1 = state_61253;
if(inst_61210){
var statearr_61265_61314 = state_61253__$1;
(statearr_61265_61314[(1)] = (16));

} else {
var statearr_61266_61315 = state_61253__$1;
(statearr_61266_61315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (22))){
var inst_61238 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
if(cljs.core.truth_(inst_61238)){
var statearr_61267_61316 = state_61253__$1;
(statearr_61267_61316[(1)] = (23));

} else {
var statearr_61268_61317 = state_61253__$1;
(statearr_61268_61317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (6))){
var inst_61234 = (state_61253[(11)]);
var inst_61184 = (state_61253[(8)]);
var inst_61232 = (state_61253[(7)]);
var inst_61232__$1 = topic_fn.call(null,inst_61184);
var inst_61233 = cljs.core.deref.call(null,mults);
var inst_61234__$1 = cljs.core.get.call(null,inst_61233,inst_61232__$1);
var state_61253__$1 = (function (){var statearr_61269 = state_61253;
(statearr_61269[(11)] = inst_61234__$1);

(statearr_61269[(7)] = inst_61232__$1);

return statearr_61269;
})();
if(cljs.core.truth_(inst_61234__$1)){
var statearr_61270_61318 = state_61253__$1;
(statearr_61270_61318[(1)] = (19));

} else {
var statearr_61271_61319 = state_61253__$1;
(statearr_61271_61319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (25))){
var inst_61243 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
var statearr_61272_61320 = state_61253__$1;
(statearr_61272_61320[(2)] = inst_61243);

(statearr_61272_61320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (17))){
var inst_61208 = (state_61253[(10)]);
var inst_61217 = cljs.core.first.call(null,inst_61208);
var inst_61218 = cljs.core.async.muxch_STAR_.call(null,inst_61217);
var inst_61219 = cljs.core.async.close_BANG_.call(null,inst_61218);
var inst_61220 = cljs.core.next.call(null,inst_61208);
var inst_61194 = inst_61220;
var inst_61195 = null;
var inst_61196 = (0);
var inst_61197 = (0);
var state_61253__$1 = (function (){var statearr_61273 = state_61253;
(statearr_61273[(12)] = inst_61219);

(statearr_61273[(13)] = inst_61197);

(statearr_61273[(14)] = inst_61194);

(statearr_61273[(15)] = inst_61196);

(statearr_61273[(16)] = inst_61195);

return statearr_61273;
})();
var statearr_61274_61321 = state_61253__$1;
(statearr_61274_61321[(2)] = null);

(statearr_61274_61321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (3))){
var inst_61251 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61253__$1,inst_61251);
} else {
if((state_val_61254 === (12))){
var inst_61228 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
var statearr_61275_61322 = state_61253__$1;
(statearr_61275_61322[(2)] = inst_61228);

(statearr_61275_61322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (2))){
var state_61253__$1 = state_61253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61253__$1,(4),ch);
} else {
if((state_val_61254 === (23))){
var state_61253__$1 = state_61253;
var statearr_61276_61323 = state_61253__$1;
(statearr_61276_61323[(2)] = null);

(statearr_61276_61323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (19))){
var inst_61234 = (state_61253[(11)]);
var inst_61184 = (state_61253[(8)]);
var inst_61236 = cljs.core.async.muxch_STAR_.call(null,inst_61234);
var state_61253__$1 = state_61253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61253__$1,(22),inst_61236,inst_61184);
} else {
if((state_val_61254 === (11))){
var inst_61208 = (state_61253[(10)]);
var inst_61194 = (state_61253[(14)]);
var inst_61208__$1 = cljs.core.seq.call(null,inst_61194);
var state_61253__$1 = (function (){var statearr_61277 = state_61253;
(statearr_61277[(10)] = inst_61208__$1);

return statearr_61277;
})();
if(inst_61208__$1){
var statearr_61278_61324 = state_61253__$1;
(statearr_61278_61324[(1)] = (13));

} else {
var statearr_61279_61325 = state_61253__$1;
(statearr_61279_61325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (9))){
var inst_61230 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
var statearr_61280_61326 = state_61253__$1;
(statearr_61280_61326[(2)] = inst_61230);

(statearr_61280_61326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (5))){
var inst_61191 = cljs.core.deref.call(null,mults);
var inst_61192 = cljs.core.vals.call(null,inst_61191);
var inst_61193 = cljs.core.seq.call(null,inst_61192);
var inst_61194 = inst_61193;
var inst_61195 = null;
var inst_61196 = (0);
var inst_61197 = (0);
var state_61253__$1 = (function (){var statearr_61281 = state_61253;
(statearr_61281[(13)] = inst_61197);

(statearr_61281[(14)] = inst_61194);

(statearr_61281[(15)] = inst_61196);

(statearr_61281[(16)] = inst_61195);

return statearr_61281;
})();
var statearr_61282_61327 = state_61253__$1;
(statearr_61282_61327[(2)] = null);

(statearr_61282_61327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (14))){
var state_61253__$1 = state_61253;
var statearr_61286_61328 = state_61253__$1;
(statearr_61286_61328[(2)] = null);

(statearr_61286_61328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (16))){
var inst_61208 = (state_61253[(10)]);
var inst_61212 = cljs.core.chunk_first.call(null,inst_61208);
var inst_61213 = cljs.core.chunk_rest.call(null,inst_61208);
var inst_61214 = cljs.core.count.call(null,inst_61212);
var inst_61194 = inst_61213;
var inst_61195 = inst_61212;
var inst_61196 = inst_61214;
var inst_61197 = (0);
var state_61253__$1 = (function (){var statearr_61287 = state_61253;
(statearr_61287[(13)] = inst_61197);

(statearr_61287[(14)] = inst_61194);

(statearr_61287[(15)] = inst_61196);

(statearr_61287[(16)] = inst_61195);

return statearr_61287;
})();
var statearr_61288_61329 = state_61253__$1;
(statearr_61288_61329[(2)] = null);

(statearr_61288_61329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (10))){
var inst_61197 = (state_61253[(13)]);
var inst_61194 = (state_61253[(14)]);
var inst_61196 = (state_61253[(15)]);
var inst_61195 = (state_61253[(16)]);
var inst_61202 = cljs.core._nth.call(null,inst_61195,inst_61197);
var inst_61203 = cljs.core.async.muxch_STAR_.call(null,inst_61202);
var inst_61204 = cljs.core.async.close_BANG_.call(null,inst_61203);
var inst_61205 = (inst_61197 + (1));
var tmp61283 = inst_61194;
var tmp61284 = inst_61196;
var tmp61285 = inst_61195;
var inst_61194__$1 = tmp61283;
var inst_61195__$1 = tmp61285;
var inst_61196__$1 = tmp61284;
var inst_61197__$1 = inst_61205;
var state_61253__$1 = (function (){var statearr_61289 = state_61253;
(statearr_61289[(13)] = inst_61197__$1);

(statearr_61289[(14)] = inst_61194__$1);

(statearr_61289[(15)] = inst_61196__$1);

(statearr_61289[(16)] = inst_61195__$1);

(statearr_61289[(17)] = inst_61204);

return statearr_61289;
})();
var statearr_61290_61330 = state_61253__$1;
(statearr_61290_61330[(2)] = null);

(statearr_61290_61330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (18))){
var inst_61223 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
var statearr_61291_61331 = state_61253__$1;
(statearr_61291_61331[(2)] = inst_61223);

(statearr_61291_61331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61254 === (8))){
var inst_61197 = (state_61253[(13)]);
var inst_61196 = (state_61253[(15)]);
var inst_61199 = (inst_61197 < inst_61196);
var inst_61200 = inst_61199;
var state_61253__$1 = state_61253;
if(cljs.core.truth_(inst_61200)){
var statearr_61292_61332 = state_61253__$1;
(statearr_61292_61332[(1)] = (10));

} else {
var statearr_61293_61333 = state_61253__$1;
(statearr_61293_61333[(1)] = (11));

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
});})(c__11085__auto___61305,mults,ensure_mult,p))
;
return ((function (switch__10973__auto__,c__11085__auto___61305,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_61297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61297[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_61297[(1)] = (1));

return statearr_61297;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_61253){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61298){if((e61298 instanceof Object)){
var ex__10977__auto__ = e61298;
var statearr_61299_61334 = state_61253;
(statearr_61299_61334[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61335 = state_61253;
state_61253 = G__61335;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_61253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_61253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61305,mults,ensure_mult,p))
})();
var state__11087__auto__ = (function (){var statearr_61300 = f__11086__auto__.call(null);
(statearr_61300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61305);

return statearr_61300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61305,mults,ensure_mult,p))
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
var args61336 = [];
var len__7651__auto___61339 = arguments.length;
var i__7652__auto___61340 = (0);
while(true){
if((i__7652__auto___61340 < len__7651__auto___61339)){
args61336.push((arguments[i__7652__auto___61340]));

var G__61341 = (i__7652__auto___61340 + (1));
i__7652__auto___61340 = G__61341;
continue;
} else {
}
break;
}

var G__61338 = args61336.length;
switch (G__61338) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61336.length)].join('')));

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
var args61343 = [];
var len__7651__auto___61346 = arguments.length;
var i__7652__auto___61347 = (0);
while(true){
if((i__7652__auto___61347 < len__7651__auto___61346)){
args61343.push((arguments[i__7652__auto___61347]));

var G__61348 = (i__7652__auto___61347 + (1));
i__7652__auto___61347 = G__61348;
continue;
} else {
}
break;
}

var G__61345 = args61343.length;
switch (G__61345) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61343.length)].join('')));

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
var args61350 = [];
var len__7651__auto___61421 = arguments.length;
var i__7652__auto___61422 = (0);
while(true){
if((i__7652__auto___61422 < len__7651__auto___61421)){
args61350.push((arguments[i__7652__auto___61422]));

var G__61423 = (i__7652__auto___61422 + (1));
i__7652__auto___61422 = G__61423;
continue;
} else {
}
break;
}

var G__61352 = args61350.length;
switch (G__61352) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61350.length)].join('')));

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
var c__11085__auto___61425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61391){
var state_val_61392 = (state_61391[(1)]);
if((state_val_61392 === (7))){
var state_61391__$1 = state_61391;
var statearr_61393_61426 = state_61391__$1;
(statearr_61393_61426[(2)] = null);

(statearr_61393_61426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (1))){
var state_61391__$1 = state_61391;
var statearr_61394_61427 = state_61391__$1;
(statearr_61394_61427[(2)] = null);

(statearr_61394_61427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (4))){
var inst_61355 = (state_61391[(7)]);
var inst_61357 = (inst_61355 < cnt);
var state_61391__$1 = state_61391;
if(cljs.core.truth_(inst_61357)){
var statearr_61395_61428 = state_61391__$1;
(statearr_61395_61428[(1)] = (6));

} else {
var statearr_61396_61429 = state_61391__$1;
(statearr_61396_61429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (15))){
var inst_61387 = (state_61391[(2)]);
var state_61391__$1 = state_61391;
var statearr_61397_61430 = state_61391__$1;
(statearr_61397_61430[(2)] = inst_61387);

(statearr_61397_61430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (13))){
var inst_61380 = cljs.core.async.close_BANG_.call(null,out);
var state_61391__$1 = state_61391;
var statearr_61398_61431 = state_61391__$1;
(statearr_61398_61431[(2)] = inst_61380);

(statearr_61398_61431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (6))){
var state_61391__$1 = state_61391;
var statearr_61399_61432 = state_61391__$1;
(statearr_61399_61432[(2)] = null);

(statearr_61399_61432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (3))){
var inst_61389 = (state_61391[(2)]);
var state_61391__$1 = state_61391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61391__$1,inst_61389);
} else {
if((state_val_61392 === (12))){
var inst_61377 = (state_61391[(8)]);
var inst_61377__$1 = (state_61391[(2)]);
var inst_61378 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_61377__$1);
var state_61391__$1 = (function (){var statearr_61400 = state_61391;
(statearr_61400[(8)] = inst_61377__$1);

return statearr_61400;
})();
if(cljs.core.truth_(inst_61378)){
var statearr_61401_61433 = state_61391__$1;
(statearr_61401_61433[(1)] = (13));

} else {
var statearr_61402_61434 = state_61391__$1;
(statearr_61402_61434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (2))){
var inst_61354 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_61355 = (0);
var state_61391__$1 = (function (){var statearr_61403 = state_61391;
(statearr_61403[(7)] = inst_61355);

(statearr_61403[(9)] = inst_61354);

return statearr_61403;
})();
var statearr_61404_61435 = state_61391__$1;
(statearr_61404_61435[(2)] = null);

(statearr_61404_61435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (11))){
var inst_61355 = (state_61391[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61391,(10),Object,null,(9));
var inst_61364 = chs__$1.call(null,inst_61355);
var inst_61365 = done.call(null,inst_61355);
var inst_61366 = cljs.core.async.take_BANG_.call(null,inst_61364,inst_61365);
var state_61391__$1 = state_61391;
var statearr_61405_61436 = state_61391__$1;
(statearr_61405_61436[(2)] = inst_61366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (9))){
var inst_61355 = (state_61391[(7)]);
var inst_61368 = (state_61391[(2)]);
var inst_61369 = (inst_61355 + (1));
var inst_61355__$1 = inst_61369;
var state_61391__$1 = (function (){var statearr_61406 = state_61391;
(statearr_61406[(7)] = inst_61355__$1);

(statearr_61406[(10)] = inst_61368);

return statearr_61406;
})();
var statearr_61407_61437 = state_61391__$1;
(statearr_61407_61437[(2)] = null);

(statearr_61407_61437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (5))){
var inst_61375 = (state_61391[(2)]);
var state_61391__$1 = (function (){var statearr_61408 = state_61391;
(statearr_61408[(11)] = inst_61375);

return statearr_61408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61391__$1,(12),dchan);
} else {
if((state_val_61392 === (14))){
var inst_61377 = (state_61391[(8)]);
var inst_61382 = cljs.core.apply.call(null,f,inst_61377);
var state_61391__$1 = state_61391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61391__$1,(16),out,inst_61382);
} else {
if((state_val_61392 === (16))){
var inst_61384 = (state_61391[(2)]);
var state_61391__$1 = (function (){var statearr_61409 = state_61391;
(statearr_61409[(12)] = inst_61384);

return statearr_61409;
})();
var statearr_61410_61438 = state_61391__$1;
(statearr_61410_61438[(2)] = null);

(statearr_61410_61438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (10))){
var inst_61359 = (state_61391[(2)]);
var inst_61360 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_61391__$1 = (function (){var statearr_61411 = state_61391;
(statearr_61411[(13)] = inst_61359);

return statearr_61411;
})();
var statearr_61412_61439 = state_61391__$1;
(statearr_61412_61439[(2)] = inst_61360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (8))){
var inst_61373 = (state_61391[(2)]);
var state_61391__$1 = state_61391;
var statearr_61413_61440 = state_61391__$1;
(statearr_61413_61440[(2)] = inst_61373);

(statearr_61413_61440[(1)] = (5));


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
});})(c__11085__auto___61425,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10973__auto__,c__11085__auto___61425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_61417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61417[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_61417[(1)] = (1));

return statearr_61417;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_61391){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61418){if((e61418 instanceof Object)){
var ex__10977__auto__ = e61418;
var statearr_61419_61441 = state_61391;
(statearr_61419_61441[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61442 = state_61391;
state_61391 = G__61442;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_61391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_61391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61425,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11087__auto__ = (function (){var statearr_61420 = f__11086__auto__.call(null);
(statearr_61420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61425);

return statearr_61420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61425,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args61444 = [];
var len__7651__auto___61502 = arguments.length;
var i__7652__auto___61503 = (0);
while(true){
if((i__7652__auto___61503 < len__7651__auto___61502)){
args61444.push((arguments[i__7652__auto___61503]));

var G__61504 = (i__7652__auto___61503 + (1));
i__7652__auto___61503 = G__61504;
continue;
} else {
}
break;
}

var G__61446 = args61444.length;
switch (G__61446) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61444.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11085__auto___61506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61506,out){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61506,out){
return (function (state_61478){
var state_val_61479 = (state_61478[(1)]);
if((state_val_61479 === (7))){
var inst_61457 = (state_61478[(7)]);
var inst_61458 = (state_61478[(8)]);
var inst_61457__$1 = (state_61478[(2)]);
var inst_61458__$1 = cljs.core.nth.call(null,inst_61457__$1,(0),null);
var inst_61459 = cljs.core.nth.call(null,inst_61457__$1,(1),null);
var inst_61460 = (inst_61458__$1 == null);
var state_61478__$1 = (function (){var statearr_61480 = state_61478;
(statearr_61480[(7)] = inst_61457__$1);

(statearr_61480[(9)] = inst_61459);

(statearr_61480[(8)] = inst_61458__$1);

return statearr_61480;
})();
if(cljs.core.truth_(inst_61460)){
var statearr_61481_61507 = state_61478__$1;
(statearr_61481_61507[(1)] = (8));

} else {
var statearr_61482_61508 = state_61478__$1;
(statearr_61482_61508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (1))){
var inst_61447 = cljs.core.vec.call(null,chs);
var inst_61448 = inst_61447;
var state_61478__$1 = (function (){var statearr_61483 = state_61478;
(statearr_61483[(10)] = inst_61448);

return statearr_61483;
})();
var statearr_61484_61509 = state_61478__$1;
(statearr_61484_61509[(2)] = null);

(statearr_61484_61509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (4))){
var inst_61448 = (state_61478[(10)]);
var state_61478__$1 = state_61478;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61478__$1,(7),inst_61448);
} else {
if((state_val_61479 === (6))){
var inst_61474 = (state_61478[(2)]);
var state_61478__$1 = state_61478;
var statearr_61485_61510 = state_61478__$1;
(statearr_61485_61510[(2)] = inst_61474);

(statearr_61485_61510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (3))){
var inst_61476 = (state_61478[(2)]);
var state_61478__$1 = state_61478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61478__$1,inst_61476);
} else {
if((state_val_61479 === (2))){
var inst_61448 = (state_61478[(10)]);
var inst_61450 = cljs.core.count.call(null,inst_61448);
var inst_61451 = (inst_61450 > (0));
var state_61478__$1 = state_61478;
if(cljs.core.truth_(inst_61451)){
var statearr_61487_61511 = state_61478__$1;
(statearr_61487_61511[(1)] = (4));

} else {
var statearr_61488_61512 = state_61478__$1;
(statearr_61488_61512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (11))){
var inst_61448 = (state_61478[(10)]);
var inst_61467 = (state_61478[(2)]);
var tmp61486 = inst_61448;
var inst_61448__$1 = tmp61486;
var state_61478__$1 = (function (){var statearr_61489 = state_61478;
(statearr_61489[(10)] = inst_61448__$1);

(statearr_61489[(11)] = inst_61467);

return statearr_61489;
})();
var statearr_61490_61513 = state_61478__$1;
(statearr_61490_61513[(2)] = null);

(statearr_61490_61513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (9))){
var inst_61458 = (state_61478[(8)]);
var state_61478__$1 = state_61478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61478__$1,(11),out,inst_61458);
} else {
if((state_val_61479 === (5))){
var inst_61472 = cljs.core.async.close_BANG_.call(null,out);
var state_61478__$1 = state_61478;
var statearr_61491_61514 = state_61478__$1;
(statearr_61491_61514[(2)] = inst_61472);

(statearr_61491_61514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (10))){
var inst_61470 = (state_61478[(2)]);
var state_61478__$1 = state_61478;
var statearr_61492_61515 = state_61478__$1;
(statearr_61492_61515[(2)] = inst_61470);

(statearr_61492_61515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61479 === (8))){
var inst_61448 = (state_61478[(10)]);
var inst_61457 = (state_61478[(7)]);
var inst_61459 = (state_61478[(9)]);
var inst_61458 = (state_61478[(8)]);
var inst_61462 = (function (){var cs = inst_61448;
var vec__61453 = inst_61457;
var v = inst_61458;
var c = inst_61459;
return ((function (cs,vec__61453,v,c,inst_61448,inst_61457,inst_61459,inst_61458,state_val_61479,c__11085__auto___61506,out){
return (function (p1__61443_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__61443_SHARP_);
});
;})(cs,vec__61453,v,c,inst_61448,inst_61457,inst_61459,inst_61458,state_val_61479,c__11085__auto___61506,out))
})();
var inst_61463 = cljs.core.filterv.call(null,inst_61462,inst_61448);
var inst_61448__$1 = inst_61463;
var state_61478__$1 = (function (){var statearr_61493 = state_61478;
(statearr_61493[(10)] = inst_61448__$1);

return statearr_61493;
})();
var statearr_61494_61516 = state_61478__$1;
(statearr_61494_61516[(2)] = null);

(statearr_61494_61516[(1)] = (2));


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
});})(c__11085__auto___61506,out))
;
return ((function (switch__10973__auto__,c__11085__auto___61506,out){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_61498 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61498[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_61498[(1)] = (1));

return statearr_61498;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_61478){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61499){if((e61499 instanceof Object)){
var ex__10977__auto__ = e61499;
var statearr_61500_61517 = state_61478;
(statearr_61500_61517[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61518 = state_61478;
state_61478 = G__61518;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_61478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_61478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61506,out))
})();
var state__11087__auto__ = (function (){var statearr_61501 = f__11086__auto__.call(null);
(statearr_61501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61506);

return statearr_61501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61506,out))
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
var args61519 = [];
var len__7651__auto___61568 = arguments.length;
var i__7652__auto___61569 = (0);
while(true){
if((i__7652__auto___61569 < len__7651__auto___61568)){
args61519.push((arguments[i__7652__auto___61569]));

var G__61570 = (i__7652__auto___61569 + (1));
i__7652__auto___61569 = G__61570;
continue;
} else {
}
break;
}

var G__61521 = args61519.length;
switch (G__61521) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61519.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11085__auto___61572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61572,out){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61572,out){
return (function (state_61545){
var state_val_61546 = (state_61545[(1)]);
if((state_val_61546 === (7))){
var inst_61527 = (state_61545[(7)]);
var inst_61527__$1 = (state_61545[(2)]);
var inst_61528 = (inst_61527__$1 == null);
var inst_61529 = cljs.core.not.call(null,inst_61528);
var state_61545__$1 = (function (){var statearr_61547 = state_61545;
(statearr_61547[(7)] = inst_61527__$1);

return statearr_61547;
})();
if(inst_61529){
var statearr_61548_61573 = state_61545__$1;
(statearr_61548_61573[(1)] = (8));

} else {
var statearr_61549_61574 = state_61545__$1;
(statearr_61549_61574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (1))){
var inst_61522 = (0);
var state_61545__$1 = (function (){var statearr_61550 = state_61545;
(statearr_61550[(8)] = inst_61522);

return statearr_61550;
})();
var statearr_61551_61575 = state_61545__$1;
(statearr_61551_61575[(2)] = null);

(statearr_61551_61575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (4))){
var state_61545__$1 = state_61545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61545__$1,(7),ch);
} else {
if((state_val_61546 === (6))){
var inst_61540 = (state_61545[(2)]);
var state_61545__$1 = state_61545;
var statearr_61552_61576 = state_61545__$1;
(statearr_61552_61576[(2)] = inst_61540);

(statearr_61552_61576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (3))){
var inst_61542 = (state_61545[(2)]);
var inst_61543 = cljs.core.async.close_BANG_.call(null,out);
var state_61545__$1 = (function (){var statearr_61553 = state_61545;
(statearr_61553[(9)] = inst_61542);

return statearr_61553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61545__$1,inst_61543);
} else {
if((state_val_61546 === (2))){
var inst_61522 = (state_61545[(8)]);
var inst_61524 = (inst_61522 < n);
var state_61545__$1 = state_61545;
if(cljs.core.truth_(inst_61524)){
var statearr_61554_61577 = state_61545__$1;
(statearr_61554_61577[(1)] = (4));

} else {
var statearr_61555_61578 = state_61545__$1;
(statearr_61555_61578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (11))){
var inst_61522 = (state_61545[(8)]);
var inst_61532 = (state_61545[(2)]);
var inst_61533 = (inst_61522 + (1));
var inst_61522__$1 = inst_61533;
var state_61545__$1 = (function (){var statearr_61556 = state_61545;
(statearr_61556[(10)] = inst_61532);

(statearr_61556[(8)] = inst_61522__$1);

return statearr_61556;
})();
var statearr_61557_61579 = state_61545__$1;
(statearr_61557_61579[(2)] = null);

(statearr_61557_61579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (9))){
var state_61545__$1 = state_61545;
var statearr_61558_61580 = state_61545__$1;
(statearr_61558_61580[(2)] = null);

(statearr_61558_61580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (5))){
var state_61545__$1 = state_61545;
var statearr_61559_61581 = state_61545__$1;
(statearr_61559_61581[(2)] = null);

(statearr_61559_61581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (10))){
var inst_61537 = (state_61545[(2)]);
var state_61545__$1 = state_61545;
var statearr_61560_61582 = state_61545__$1;
(statearr_61560_61582[(2)] = inst_61537);

(statearr_61560_61582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (8))){
var inst_61527 = (state_61545[(7)]);
var state_61545__$1 = state_61545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61545__$1,(11),out,inst_61527);
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
});})(c__11085__auto___61572,out))
;
return ((function (switch__10973__auto__,c__11085__auto___61572,out){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_61564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61564[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_61564[(1)] = (1));

return statearr_61564;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_61545){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61565){if((e61565 instanceof Object)){
var ex__10977__auto__ = e61565;
var statearr_61566_61583 = state_61545;
(statearr_61566_61583[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61584 = state_61545;
state_61545 = G__61584;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_61545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_61545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61572,out))
})();
var state__11087__auto__ = (function (){var statearr_61567 = f__11086__auto__.call(null);
(statearr_61567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61572);

return statearr_61567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61572,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61592 = (function (f,ch,meta61593){
this.f = f;
this.ch = ch;
this.meta61593 = meta61593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61594,meta61593__$1){
var self__ = this;
var _61594__$1 = this;
return (new cljs.core.async.t_cljs$core$async61592(self__.f,self__.ch,meta61593__$1));
});

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61594){
var self__ = this;
var _61594__$1 = this;
return self__.meta61593;
});

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async61595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61595 = (function (f,ch,meta61593,_,fn1,meta61596){
this.f = f;
this.ch = ch;
this.meta61593 = meta61593;
this._ = _;
this.fn1 = fn1;
this.meta61596 = meta61596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61597,meta61596__$1){
var self__ = this;
var _61597__$1 = this;
return (new cljs.core.async.t_cljs$core$async61595(self__.f,self__.ch,self__.meta61593,self__._,self__.fn1,meta61596__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async61595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61597){
var self__ = this;
var _61597__$1 = this;
return self__.meta61596;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61585_SHARP_){
return f1.call(null,(((p1__61585_SHARP_ == null))?null:self__.f.call(null,p1__61585_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61595.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61593","meta61593",1276870776,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61592","cljs.core.async/t_cljs$core$async61592",-1623715861,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61596","meta61596",-649649756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61595";

cljs.core.async.t_cljs$core$async61595.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async61595");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async61595 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61595(f__$1,ch__$1,meta61593__$1,___$2,fn1__$1,meta61596){
return (new cljs.core.async.t_cljs$core$async61595(f__$1,ch__$1,meta61593__$1,___$2,fn1__$1,meta61596));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61595(self__.f,self__.ch,self__.meta61593,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61593","meta61593",1276870776,null)], null);
});

cljs.core.async.t_cljs$core$async61592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61592";

cljs.core.async.t_cljs$core$async61592.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async61592");
});

cljs.core.async.__GT_t_cljs$core$async61592 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61592(f__$1,ch__$1,meta61593){
return (new cljs.core.async.t_cljs$core$async61592(f__$1,ch__$1,meta61593));
});

}

return (new cljs.core.async.t_cljs$core$async61592(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61601 = (function (f,ch,meta61602){
this.f = f;
this.ch = ch;
this.meta61602 = meta61602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61603,meta61602__$1){
var self__ = this;
var _61603__$1 = this;
return (new cljs.core.async.t_cljs$core$async61601(self__.f,self__.ch,meta61602__$1));
});

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61603){
var self__ = this;
var _61603__$1 = this;
return self__.meta61602;
});

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async61601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61602","meta61602",472389877,null)], null);
});

cljs.core.async.t_cljs$core$async61601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61601";

cljs.core.async.t_cljs$core$async61601.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async61601");
});

cljs.core.async.__GT_t_cljs$core$async61601 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61601(f__$1,ch__$1,meta61602){
return (new cljs.core.async.t_cljs$core$async61601(f__$1,ch__$1,meta61602));
});

}

return (new cljs.core.async.t_cljs$core$async61601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async61607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61607 = (function (p,ch,meta61608){
this.p = p;
this.ch = ch;
this.meta61608 = meta61608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61609,meta61608__$1){
var self__ = this;
var _61609__$1 = this;
return (new cljs.core.async.t_cljs$core$async61607(self__.p,self__.ch,meta61608__$1));
});

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61609){
var self__ = this;
var _61609__$1 = this;
return self__.meta61608;
});

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61608","meta61608",969474768,null)], null);
});

cljs.core.async.t_cljs$core$async61607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61607";

cljs.core.async.t_cljs$core$async61607.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"cljs.core.async/t_cljs$core$async61607");
});

cljs.core.async.__GT_t_cljs$core$async61607 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61607(p__$1,ch__$1,meta61608){
return (new cljs.core.async.t_cljs$core$async61607(p__$1,ch__$1,meta61608));
});

}

return (new cljs.core.async.t_cljs$core$async61607(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args61610 = [];
var len__7651__auto___61654 = arguments.length;
var i__7652__auto___61655 = (0);
while(true){
if((i__7652__auto___61655 < len__7651__auto___61654)){
args61610.push((arguments[i__7652__auto___61655]));

var G__61656 = (i__7652__auto___61655 + (1));
i__7652__auto___61655 = G__61656;
continue;
} else {
}
break;
}

var G__61612 = args61610.length;
switch (G__61612) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61610.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11085__auto___61658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61658,out){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61658,out){
return (function (state_61633){
var state_val_61634 = (state_61633[(1)]);
if((state_val_61634 === (7))){
var inst_61629 = (state_61633[(2)]);
var state_61633__$1 = state_61633;
var statearr_61635_61659 = state_61633__$1;
(statearr_61635_61659[(2)] = inst_61629);

(statearr_61635_61659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (1))){
var state_61633__$1 = state_61633;
var statearr_61636_61660 = state_61633__$1;
(statearr_61636_61660[(2)] = null);

(statearr_61636_61660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (4))){
var inst_61615 = (state_61633[(7)]);
var inst_61615__$1 = (state_61633[(2)]);
var inst_61616 = (inst_61615__$1 == null);
var state_61633__$1 = (function (){var statearr_61637 = state_61633;
(statearr_61637[(7)] = inst_61615__$1);

return statearr_61637;
})();
if(cljs.core.truth_(inst_61616)){
var statearr_61638_61661 = state_61633__$1;
(statearr_61638_61661[(1)] = (5));

} else {
var statearr_61639_61662 = state_61633__$1;
(statearr_61639_61662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (6))){
var inst_61615 = (state_61633[(7)]);
var inst_61620 = p.call(null,inst_61615);
var state_61633__$1 = state_61633;
if(cljs.core.truth_(inst_61620)){
var statearr_61640_61663 = state_61633__$1;
(statearr_61640_61663[(1)] = (8));

} else {
var statearr_61641_61664 = state_61633__$1;
(statearr_61641_61664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (3))){
var inst_61631 = (state_61633[(2)]);
var state_61633__$1 = state_61633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61633__$1,inst_61631);
} else {
if((state_val_61634 === (2))){
var state_61633__$1 = state_61633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61633__$1,(4),ch);
} else {
if((state_val_61634 === (11))){
var inst_61623 = (state_61633[(2)]);
var state_61633__$1 = state_61633;
var statearr_61642_61665 = state_61633__$1;
(statearr_61642_61665[(2)] = inst_61623);

(statearr_61642_61665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (9))){
var state_61633__$1 = state_61633;
var statearr_61643_61666 = state_61633__$1;
(statearr_61643_61666[(2)] = null);

(statearr_61643_61666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (5))){
var inst_61618 = cljs.core.async.close_BANG_.call(null,out);
var state_61633__$1 = state_61633;
var statearr_61644_61667 = state_61633__$1;
(statearr_61644_61667[(2)] = inst_61618);

(statearr_61644_61667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (10))){
var inst_61626 = (state_61633[(2)]);
var state_61633__$1 = (function (){var statearr_61645 = state_61633;
(statearr_61645[(8)] = inst_61626);

return statearr_61645;
})();
var statearr_61646_61668 = state_61633__$1;
(statearr_61646_61668[(2)] = null);

(statearr_61646_61668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61634 === (8))){
var inst_61615 = (state_61633[(7)]);
var state_61633__$1 = state_61633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61633__$1,(11),out,inst_61615);
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
});})(c__11085__auto___61658,out))
;
return ((function (switch__10973__auto__,c__11085__auto___61658,out){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_61650 = [null,null,null,null,null,null,null,null,null];
(statearr_61650[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_61650[(1)] = (1));

return statearr_61650;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_61633){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61651){if((e61651 instanceof Object)){
var ex__10977__auto__ = e61651;
var statearr_61652_61669 = state_61633;
(statearr_61652_61669[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61670 = state_61633;
state_61633 = G__61670;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_61633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_61633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61658,out))
})();
var state__11087__auto__ = (function (){var statearr_61653 = f__11086__auto__.call(null);
(statearr_61653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61658);

return statearr_61653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61658,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args61671 = [];
var len__7651__auto___61674 = arguments.length;
var i__7652__auto___61675 = (0);
while(true){
if((i__7652__auto___61675 < len__7651__auto___61674)){
args61671.push((arguments[i__7652__auto___61675]));

var G__61676 = (i__7652__auto___61675 + (1));
i__7652__auto___61675 = G__61676;
continue;
} else {
}
break;
}

var G__61673 = args61671.length;
switch (G__61673) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61671.length)].join('')));

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
var c__11085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto__){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto__){
return (function (state_61843){
var state_val_61844 = (state_61843[(1)]);
if((state_val_61844 === (7))){
var inst_61839 = (state_61843[(2)]);
var state_61843__$1 = state_61843;
var statearr_61845_61886 = state_61843__$1;
(statearr_61845_61886[(2)] = inst_61839);

(statearr_61845_61886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (20))){
var inst_61809 = (state_61843[(7)]);
var inst_61820 = (state_61843[(2)]);
var inst_61821 = cljs.core.next.call(null,inst_61809);
var inst_61795 = inst_61821;
var inst_61796 = null;
var inst_61797 = (0);
var inst_61798 = (0);
var state_61843__$1 = (function (){var statearr_61846 = state_61843;
(statearr_61846[(8)] = inst_61795);

(statearr_61846[(9)] = inst_61820);

(statearr_61846[(10)] = inst_61798);

(statearr_61846[(11)] = inst_61797);

(statearr_61846[(12)] = inst_61796);

return statearr_61846;
})();
var statearr_61847_61887 = state_61843__$1;
(statearr_61847_61887[(2)] = null);

(statearr_61847_61887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (1))){
var state_61843__$1 = state_61843;
var statearr_61848_61888 = state_61843__$1;
(statearr_61848_61888[(2)] = null);

(statearr_61848_61888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (4))){
var inst_61784 = (state_61843[(13)]);
var inst_61784__$1 = (state_61843[(2)]);
var inst_61785 = (inst_61784__$1 == null);
var state_61843__$1 = (function (){var statearr_61849 = state_61843;
(statearr_61849[(13)] = inst_61784__$1);

return statearr_61849;
})();
if(cljs.core.truth_(inst_61785)){
var statearr_61850_61889 = state_61843__$1;
(statearr_61850_61889[(1)] = (5));

} else {
var statearr_61851_61890 = state_61843__$1;
(statearr_61851_61890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (15))){
var state_61843__$1 = state_61843;
var statearr_61855_61891 = state_61843__$1;
(statearr_61855_61891[(2)] = null);

(statearr_61855_61891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (21))){
var state_61843__$1 = state_61843;
var statearr_61856_61892 = state_61843__$1;
(statearr_61856_61892[(2)] = null);

(statearr_61856_61892[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (13))){
var inst_61795 = (state_61843[(8)]);
var inst_61798 = (state_61843[(10)]);
var inst_61797 = (state_61843[(11)]);
var inst_61796 = (state_61843[(12)]);
var inst_61805 = (state_61843[(2)]);
var inst_61806 = (inst_61798 + (1));
var tmp61852 = inst_61795;
var tmp61853 = inst_61797;
var tmp61854 = inst_61796;
var inst_61795__$1 = tmp61852;
var inst_61796__$1 = tmp61854;
var inst_61797__$1 = tmp61853;
var inst_61798__$1 = inst_61806;
var state_61843__$1 = (function (){var statearr_61857 = state_61843;
(statearr_61857[(8)] = inst_61795__$1);

(statearr_61857[(10)] = inst_61798__$1);

(statearr_61857[(11)] = inst_61797__$1);

(statearr_61857[(14)] = inst_61805);

(statearr_61857[(12)] = inst_61796__$1);

return statearr_61857;
})();
var statearr_61858_61893 = state_61843__$1;
(statearr_61858_61893[(2)] = null);

(statearr_61858_61893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (22))){
var state_61843__$1 = state_61843;
var statearr_61859_61894 = state_61843__$1;
(statearr_61859_61894[(2)] = null);

(statearr_61859_61894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (6))){
var inst_61784 = (state_61843[(13)]);
var inst_61793 = f.call(null,inst_61784);
var inst_61794 = cljs.core.seq.call(null,inst_61793);
var inst_61795 = inst_61794;
var inst_61796 = null;
var inst_61797 = (0);
var inst_61798 = (0);
var state_61843__$1 = (function (){var statearr_61860 = state_61843;
(statearr_61860[(8)] = inst_61795);

(statearr_61860[(10)] = inst_61798);

(statearr_61860[(11)] = inst_61797);

(statearr_61860[(12)] = inst_61796);

return statearr_61860;
})();
var statearr_61861_61895 = state_61843__$1;
(statearr_61861_61895[(2)] = null);

(statearr_61861_61895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (17))){
var inst_61809 = (state_61843[(7)]);
var inst_61813 = cljs.core.chunk_first.call(null,inst_61809);
var inst_61814 = cljs.core.chunk_rest.call(null,inst_61809);
var inst_61815 = cljs.core.count.call(null,inst_61813);
var inst_61795 = inst_61814;
var inst_61796 = inst_61813;
var inst_61797 = inst_61815;
var inst_61798 = (0);
var state_61843__$1 = (function (){var statearr_61862 = state_61843;
(statearr_61862[(8)] = inst_61795);

(statearr_61862[(10)] = inst_61798);

(statearr_61862[(11)] = inst_61797);

(statearr_61862[(12)] = inst_61796);

return statearr_61862;
})();
var statearr_61863_61896 = state_61843__$1;
(statearr_61863_61896[(2)] = null);

(statearr_61863_61896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (3))){
var inst_61841 = (state_61843[(2)]);
var state_61843__$1 = state_61843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61843__$1,inst_61841);
} else {
if((state_val_61844 === (12))){
var inst_61829 = (state_61843[(2)]);
var state_61843__$1 = state_61843;
var statearr_61864_61897 = state_61843__$1;
(statearr_61864_61897[(2)] = inst_61829);

(statearr_61864_61897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (2))){
var state_61843__$1 = state_61843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61843__$1,(4),in$);
} else {
if((state_val_61844 === (23))){
var inst_61837 = (state_61843[(2)]);
var state_61843__$1 = state_61843;
var statearr_61865_61898 = state_61843__$1;
(statearr_61865_61898[(2)] = inst_61837);

(statearr_61865_61898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (19))){
var inst_61824 = (state_61843[(2)]);
var state_61843__$1 = state_61843;
var statearr_61866_61899 = state_61843__$1;
(statearr_61866_61899[(2)] = inst_61824);

(statearr_61866_61899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (11))){
var inst_61795 = (state_61843[(8)]);
var inst_61809 = (state_61843[(7)]);
var inst_61809__$1 = cljs.core.seq.call(null,inst_61795);
var state_61843__$1 = (function (){var statearr_61867 = state_61843;
(statearr_61867[(7)] = inst_61809__$1);

return statearr_61867;
})();
if(inst_61809__$1){
var statearr_61868_61900 = state_61843__$1;
(statearr_61868_61900[(1)] = (14));

} else {
var statearr_61869_61901 = state_61843__$1;
(statearr_61869_61901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (9))){
var inst_61831 = (state_61843[(2)]);
var inst_61832 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_61843__$1 = (function (){var statearr_61870 = state_61843;
(statearr_61870[(15)] = inst_61831);

return statearr_61870;
})();
if(cljs.core.truth_(inst_61832)){
var statearr_61871_61902 = state_61843__$1;
(statearr_61871_61902[(1)] = (21));

} else {
var statearr_61872_61903 = state_61843__$1;
(statearr_61872_61903[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (5))){
var inst_61787 = cljs.core.async.close_BANG_.call(null,out);
var state_61843__$1 = state_61843;
var statearr_61873_61904 = state_61843__$1;
(statearr_61873_61904[(2)] = inst_61787);

(statearr_61873_61904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (14))){
var inst_61809 = (state_61843[(7)]);
var inst_61811 = cljs.core.chunked_seq_QMARK_.call(null,inst_61809);
var state_61843__$1 = state_61843;
if(inst_61811){
var statearr_61874_61905 = state_61843__$1;
(statearr_61874_61905[(1)] = (17));

} else {
var statearr_61875_61906 = state_61843__$1;
(statearr_61875_61906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (16))){
var inst_61827 = (state_61843[(2)]);
var state_61843__$1 = state_61843;
var statearr_61876_61907 = state_61843__$1;
(statearr_61876_61907[(2)] = inst_61827);

(statearr_61876_61907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61844 === (10))){
var inst_61798 = (state_61843[(10)]);
var inst_61796 = (state_61843[(12)]);
var inst_61803 = cljs.core._nth.call(null,inst_61796,inst_61798);
var state_61843__$1 = state_61843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61843__$1,(13),out,inst_61803);
} else {
if((state_val_61844 === (18))){
var inst_61809 = (state_61843[(7)]);
var inst_61818 = cljs.core.first.call(null,inst_61809);
var state_61843__$1 = state_61843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61843__$1,(20),out,inst_61818);
} else {
if((state_val_61844 === (8))){
var inst_61798 = (state_61843[(10)]);
var inst_61797 = (state_61843[(11)]);
var inst_61800 = (inst_61798 < inst_61797);
var inst_61801 = inst_61800;
var state_61843__$1 = state_61843;
if(cljs.core.truth_(inst_61801)){
var statearr_61877_61908 = state_61843__$1;
(statearr_61877_61908[(1)] = (10));

} else {
var statearr_61878_61909 = state_61843__$1;
(statearr_61878_61909[(1)] = (11));

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
});})(c__11085__auto__))
;
return ((function (switch__10973__auto__,c__11085__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10974__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10974__auto____0 = (function (){
var statearr_61882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61882[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10974__auto__);

(statearr_61882[(1)] = (1));

return statearr_61882;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10974__auto____1 = (function (state_61843){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61883){if((e61883 instanceof Object)){
var ex__10977__auto__ = e61883;
var statearr_61884_61910 = state_61843;
(statearr_61884_61910[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61911 = state_61843;
state_61843 = G__61911;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10974__auto__ = function(state_61843){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10974__auto____1.call(this,state_61843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10974__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10974__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto__))
})();
var state__11087__auto__ = (function (){var statearr_61885 = f__11086__auto__.call(null);
(statearr_61885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto__);

return statearr_61885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto__))
);

return c__11085__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args61912 = [];
var len__7651__auto___61915 = arguments.length;
var i__7652__auto___61916 = (0);
while(true){
if((i__7652__auto___61916 < len__7651__auto___61915)){
args61912.push((arguments[i__7652__auto___61916]));

var G__61917 = (i__7652__auto___61916 + (1));
i__7652__auto___61916 = G__61917;
continue;
} else {
}
break;
}

var G__61914 = args61912.length;
switch (G__61914) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61912.length)].join('')));

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
var args61919 = [];
var len__7651__auto___61922 = arguments.length;
var i__7652__auto___61923 = (0);
while(true){
if((i__7652__auto___61923 < len__7651__auto___61922)){
args61919.push((arguments[i__7652__auto___61923]));

var G__61924 = (i__7652__auto___61923 + (1));
i__7652__auto___61923 = G__61924;
continue;
} else {
}
break;
}

var G__61921 = args61919.length;
switch (G__61921) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61919.length)].join('')));

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
var args61926 = [];
var len__7651__auto___61977 = arguments.length;
var i__7652__auto___61978 = (0);
while(true){
if((i__7652__auto___61978 < len__7651__auto___61977)){
args61926.push((arguments[i__7652__auto___61978]));

var G__61979 = (i__7652__auto___61978 + (1));
i__7652__auto___61978 = G__61979;
continue;
} else {
}
break;
}

var G__61928 = args61926.length;
switch (G__61928) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61926.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11085__auto___61981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___61981,out){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___61981,out){
return (function (state_61952){
var state_val_61953 = (state_61952[(1)]);
if((state_val_61953 === (7))){
var inst_61947 = (state_61952[(2)]);
var state_61952__$1 = state_61952;
var statearr_61954_61982 = state_61952__$1;
(statearr_61954_61982[(2)] = inst_61947);

(statearr_61954_61982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (1))){
var inst_61929 = null;
var state_61952__$1 = (function (){var statearr_61955 = state_61952;
(statearr_61955[(7)] = inst_61929);

return statearr_61955;
})();
var statearr_61956_61983 = state_61952__$1;
(statearr_61956_61983[(2)] = null);

(statearr_61956_61983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (4))){
var inst_61932 = (state_61952[(8)]);
var inst_61932__$1 = (state_61952[(2)]);
var inst_61933 = (inst_61932__$1 == null);
var inst_61934 = cljs.core.not.call(null,inst_61933);
var state_61952__$1 = (function (){var statearr_61957 = state_61952;
(statearr_61957[(8)] = inst_61932__$1);

return statearr_61957;
})();
if(inst_61934){
var statearr_61958_61984 = state_61952__$1;
(statearr_61958_61984[(1)] = (5));

} else {
var statearr_61959_61985 = state_61952__$1;
(statearr_61959_61985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (6))){
var state_61952__$1 = state_61952;
var statearr_61960_61986 = state_61952__$1;
(statearr_61960_61986[(2)] = null);

(statearr_61960_61986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (3))){
var inst_61949 = (state_61952[(2)]);
var inst_61950 = cljs.core.async.close_BANG_.call(null,out);
var state_61952__$1 = (function (){var statearr_61961 = state_61952;
(statearr_61961[(9)] = inst_61949);

return statearr_61961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61952__$1,inst_61950);
} else {
if((state_val_61953 === (2))){
var state_61952__$1 = state_61952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61952__$1,(4),ch);
} else {
if((state_val_61953 === (11))){
var inst_61932 = (state_61952[(8)]);
var inst_61941 = (state_61952[(2)]);
var inst_61929 = inst_61932;
var state_61952__$1 = (function (){var statearr_61962 = state_61952;
(statearr_61962[(7)] = inst_61929);

(statearr_61962[(10)] = inst_61941);

return statearr_61962;
})();
var statearr_61963_61987 = state_61952__$1;
(statearr_61963_61987[(2)] = null);

(statearr_61963_61987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (9))){
var inst_61932 = (state_61952[(8)]);
var state_61952__$1 = state_61952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61952__$1,(11),out,inst_61932);
} else {
if((state_val_61953 === (5))){
var inst_61929 = (state_61952[(7)]);
var inst_61932 = (state_61952[(8)]);
var inst_61936 = cljs.core._EQ_.call(null,inst_61932,inst_61929);
var state_61952__$1 = state_61952;
if(inst_61936){
var statearr_61965_61988 = state_61952__$1;
(statearr_61965_61988[(1)] = (8));

} else {
var statearr_61966_61989 = state_61952__$1;
(statearr_61966_61989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (10))){
var inst_61944 = (state_61952[(2)]);
var state_61952__$1 = state_61952;
var statearr_61967_61990 = state_61952__$1;
(statearr_61967_61990[(2)] = inst_61944);

(statearr_61967_61990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61953 === (8))){
var inst_61929 = (state_61952[(7)]);
var tmp61964 = inst_61929;
var inst_61929__$1 = tmp61964;
var state_61952__$1 = (function (){var statearr_61968 = state_61952;
(statearr_61968[(7)] = inst_61929__$1);

return statearr_61968;
})();
var statearr_61969_61991 = state_61952__$1;
(statearr_61969_61991[(2)] = null);

(statearr_61969_61991[(1)] = (2));


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
});})(c__11085__auto___61981,out))
;
return ((function (switch__10973__auto__,c__11085__auto___61981,out){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_61973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61973[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_61973[(1)] = (1));

return statearr_61973;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_61952){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_61952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e61974){if((e61974 instanceof Object)){
var ex__10977__auto__ = e61974;
var statearr_61975_61992 = state_61952;
(statearr_61975_61992[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61993 = state_61952;
state_61952 = G__61993;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_61952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_61952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___61981,out))
})();
var state__11087__auto__ = (function (){var statearr_61976 = f__11086__auto__.call(null);
(statearr_61976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___61981);

return statearr_61976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___61981,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args61994 = [];
var len__7651__auto___62064 = arguments.length;
var i__7652__auto___62065 = (0);
while(true){
if((i__7652__auto___62065 < len__7651__auto___62064)){
args61994.push((arguments[i__7652__auto___62065]));

var G__62066 = (i__7652__auto___62065 + (1));
i__7652__auto___62065 = G__62066;
continue;
} else {
}
break;
}

var G__61996 = args61994.length;
switch (G__61996) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61994.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11085__auto___62068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___62068,out){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___62068,out){
return (function (state_62034){
var state_val_62035 = (state_62034[(1)]);
if((state_val_62035 === (7))){
var inst_62030 = (state_62034[(2)]);
var state_62034__$1 = state_62034;
var statearr_62036_62069 = state_62034__$1;
(statearr_62036_62069[(2)] = inst_62030);

(statearr_62036_62069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (1))){
var inst_61997 = (new Array(n));
var inst_61998 = inst_61997;
var inst_61999 = (0);
var state_62034__$1 = (function (){var statearr_62037 = state_62034;
(statearr_62037[(7)] = inst_61998);

(statearr_62037[(8)] = inst_61999);

return statearr_62037;
})();
var statearr_62038_62070 = state_62034__$1;
(statearr_62038_62070[(2)] = null);

(statearr_62038_62070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (4))){
var inst_62002 = (state_62034[(9)]);
var inst_62002__$1 = (state_62034[(2)]);
var inst_62003 = (inst_62002__$1 == null);
var inst_62004 = cljs.core.not.call(null,inst_62003);
var state_62034__$1 = (function (){var statearr_62039 = state_62034;
(statearr_62039[(9)] = inst_62002__$1);

return statearr_62039;
})();
if(inst_62004){
var statearr_62040_62071 = state_62034__$1;
(statearr_62040_62071[(1)] = (5));

} else {
var statearr_62041_62072 = state_62034__$1;
(statearr_62041_62072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (15))){
var inst_62024 = (state_62034[(2)]);
var state_62034__$1 = state_62034;
var statearr_62042_62073 = state_62034__$1;
(statearr_62042_62073[(2)] = inst_62024);

(statearr_62042_62073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (13))){
var state_62034__$1 = state_62034;
var statearr_62043_62074 = state_62034__$1;
(statearr_62043_62074[(2)] = null);

(statearr_62043_62074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (6))){
var inst_61999 = (state_62034[(8)]);
var inst_62020 = (inst_61999 > (0));
var state_62034__$1 = state_62034;
if(cljs.core.truth_(inst_62020)){
var statearr_62044_62075 = state_62034__$1;
(statearr_62044_62075[(1)] = (12));

} else {
var statearr_62045_62076 = state_62034__$1;
(statearr_62045_62076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (3))){
var inst_62032 = (state_62034[(2)]);
var state_62034__$1 = state_62034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62034__$1,inst_62032);
} else {
if((state_val_62035 === (12))){
var inst_61998 = (state_62034[(7)]);
var inst_62022 = cljs.core.vec.call(null,inst_61998);
var state_62034__$1 = state_62034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62034__$1,(15),out,inst_62022);
} else {
if((state_val_62035 === (2))){
var state_62034__$1 = state_62034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62034__$1,(4),ch);
} else {
if((state_val_62035 === (11))){
var inst_62014 = (state_62034[(2)]);
var inst_62015 = (new Array(n));
var inst_61998 = inst_62015;
var inst_61999 = (0);
var state_62034__$1 = (function (){var statearr_62046 = state_62034;
(statearr_62046[(7)] = inst_61998);

(statearr_62046[(8)] = inst_61999);

(statearr_62046[(10)] = inst_62014);

return statearr_62046;
})();
var statearr_62047_62077 = state_62034__$1;
(statearr_62047_62077[(2)] = null);

(statearr_62047_62077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (9))){
var inst_61998 = (state_62034[(7)]);
var inst_62012 = cljs.core.vec.call(null,inst_61998);
var state_62034__$1 = state_62034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62034__$1,(11),out,inst_62012);
} else {
if((state_val_62035 === (5))){
var inst_61998 = (state_62034[(7)]);
var inst_62007 = (state_62034[(11)]);
var inst_62002 = (state_62034[(9)]);
var inst_61999 = (state_62034[(8)]);
var inst_62006 = (inst_61998[inst_61999] = inst_62002);
var inst_62007__$1 = (inst_61999 + (1));
var inst_62008 = (inst_62007__$1 < n);
var state_62034__$1 = (function (){var statearr_62048 = state_62034;
(statearr_62048[(11)] = inst_62007__$1);

(statearr_62048[(12)] = inst_62006);

return statearr_62048;
})();
if(cljs.core.truth_(inst_62008)){
var statearr_62049_62078 = state_62034__$1;
(statearr_62049_62078[(1)] = (8));

} else {
var statearr_62050_62079 = state_62034__$1;
(statearr_62050_62079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (14))){
var inst_62027 = (state_62034[(2)]);
var inst_62028 = cljs.core.async.close_BANG_.call(null,out);
var state_62034__$1 = (function (){var statearr_62052 = state_62034;
(statearr_62052[(13)] = inst_62027);

return statearr_62052;
})();
var statearr_62053_62080 = state_62034__$1;
(statearr_62053_62080[(2)] = inst_62028);

(statearr_62053_62080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (10))){
var inst_62018 = (state_62034[(2)]);
var state_62034__$1 = state_62034;
var statearr_62054_62081 = state_62034__$1;
(statearr_62054_62081[(2)] = inst_62018);

(statearr_62054_62081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62035 === (8))){
var inst_61998 = (state_62034[(7)]);
var inst_62007 = (state_62034[(11)]);
var tmp62051 = inst_61998;
var inst_61998__$1 = tmp62051;
var inst_61999 = inst_62007;
var state_62034__$1 = (function (){var statearr_62055 = state_62034;
(statearr_62055[(7)] = inst_61998__$1);

(statearr_62055[(8)] = inst_61999);

return statearr_62055;
})();
var statearr_62056_62082 = state_62034__$1;
(statearr_62056_62082[(2)] = null);

(statearr_62056_62082[(1)] = (2));


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
});})(c__11085__auto___62068,out))
;
return ((function (switch__10973__auto__,c__11085__auto___62068,out){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_62060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62060[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_62060[(1)] = (1));

return statearr_62060;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_62034){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_62034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e62061){if((e62061 instanceof Object)){
var ex__10977__auto__ = e62061;
var statearr_62062_62083 = state_62034;
(statearr_62062_62083[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62084 = state_62034;
state_62034 = G__62084;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_62034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_62034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___62068,out))
})();
var state__11087__auto__ = (function (){var statearr_62063 = f__11086__auto__.call(null);
(statearr_62063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___62068);

return statearr_62063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___62068,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args62085 = [];
var len__7651__auto___62159 = arguments.length;
var i__7652__auto___62160 = (0);
while(true){
if((i__7652__auto___62160 < len__7651__auto___62159)){
args62085.push((arguments[i__7652__auto___62160]));

var G__62161 = (i__7652__auto___62160 + (1));
i__7652__auto___62160 = G__62161;
continue;
} else {
}
break;
}

var G__62087 = args62085.length;
switch (G__62087) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62085.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11085__auto___62163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11085__auto___62163,out){
return (function (){
var f__11086__auto__ = (function (){var switch__10973__auto__ = ((function (c__11085__auto___62163,out){
return (function (state_62129){
var state_val_62130 = (state_62129[(1)]);
if((state_val_62130 === (7))){
var inst_62125 = (state_62129[(2)]);
var state_62129__$1 = state_62129;
var statearr_62131_62164 = state_62129__$1;
(statearr_62131_62164[(2)] = inst_62125);

(statearr_62131_62164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (1))){
var inst_62088 = [];
var inst_62089 = inst_62088;
var inst_62090 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62129__$1 = (function (){var statearr_62132 = state_62129;
(statearr_62132[(7)] = inst_62090);

(statearr_62132[(8)] = inst_62089);

return statearr_62132;
})();
var statearr_62133_62165 = state_62129__$1;
(statearr_62133_62165[(2)] = null);

(statearr_62133_62165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (4))){
var inst_62093 = (state_62129[(9)]);
var inst_62093__$1 = (state_62129[(2)]);
var inst_62094 = (inst_62093__$1 == null);
var inst_62095 = cljs.core.not.call(null,inst_62094);
var state_62129__$1 = (function (){var statearr_62134 = state_62129;
(statearr_62134[(9)] = inst_62093__$1);

return statearr_62134;
})();
if(inst_62095){
var statearr_62135_62166 = state_62129__$1;
(statearr_62135_62166[(1)] = (5));

} else {
var statearr_62136_62167 = state_62129__$1;
(statearr_62136_62167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (15))){
var inst_62119 = (state_62129[(2)]);
var state_62129__$1 = state_62129;
var statearr_62137_62168 = state_62129__$1;
(statearr_62137_62168[(2)] = inst_62119);

(statearr_62137_62168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (13))){
var state_62129__$1 = state_62129;
var statearr_62138_62169 = state_62129__$1;
(statearr_62138_62169[(2)] = null);

(statearr_62138_62169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (6))){
var inst_62089 = (state_62129[(8)]);
var inst_62114 = inst_62089.length;
var inst_62115 = (inst_62114 > (0));
var state_62129__$1 = state_62129;
if(cljs.core.truth_(inst_62115)){
var statearr_62139_62170 = state_62129__$1;
(statearr_62139_62170[(1)] = (12));

} else {
var statearr_62140_62171 = state_62129__$1;
(statearr_62140_62171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (3))){
var inst_62127 = (state_62129[(2)]);
var state_62129__$1 = state_62129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62129__$1,inst_62127);
} else {
if((state_val_62130 === (12))){
var inst_62089 = (state_62129[(8)]);
var inst_62117 = cljs.core.vec.call(null,inst_62089);
var state_62129__$1 = state_62129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62129__$1,(15),out,inst_62117);
} else {
if((state_val_62130 === (2))){
var state_62129__$1 = state_62129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62129__$1,(4),ch);
} else {
if((state_val_62130 === (11))){
var inst_62093 = (state_62129[(9)]);
var inst_62097 = (state_62129[(10)]);
var inst_62107 = (state_62129[(2)]);
var inst_62108 = [];
var inst_62109 = inst_62108.push(inst_62093);
var inst_62089 = inst_62108;
var inst_62090 = inst_62097;
var state_62129__$1 = (function (){var statearr_62141 = state_62129;
(statearr_62141[(11)] = inst_62109);

(statearr_62141[(7)] = inst_62090);

(statearr_62141[(12)] = inst_62107);

(statearr_62141[(8)] = inst_62089);

return statearr_62141;
})();
var statearr_62142_62172 = state_62129__$1;
(statearr_62142_62172[(2)] = null);

(statearr_62142_62172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (9))){
var inst_62089 = (state_62129[(8)]);
var inst_62105 = cljs.core.vec.call(null,inst_62089);
var state_62129__$1 = state_62129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62129__$1,(11),out,inst_62105);
} else {
if((state_val_62130 === (5))){
var inst_62093 = (state_62129[(9)]);
var inst_62090 = (state_62129[(7)]);
var inst_62097 = (state_62129[(10)]);
var inst_62097__$1 = f.call(null,inst_62093);
var inst_62098 = cljs.core._EQ_.call(null,inst_62097__$1,inst_62090);
var inst_62099 = cljs.core.keyword_identical_QMARK_.call(null,inst_62090,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62100 = (inst_62098) || (inst_62099);
var state_62129__$1 = (function (){var statearr_62143 = state_62129;
(statearr_62143[(10)] = inst_62097__$1);

return statearr_62143;
})();
if(cljs.core.truth_(inst_62100)){
var statearr_62144_62173 = state_62129__$1;
(statearr_62144_62173[(1)] = (8));

} else {
var statearr_62145_62174 = state_62129__$1;
(statearr_62145_62174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (14))){
var inst_62122 = (state_62129[(2)]);
var inst_62123 = cljs.core.async.close_BANG_.call(null,out);
var state_62129__$1 = (function (){var statearr_62147 = state_62129;
(statearr_62147[(13)] = inst_62122);

return statearr_62147;
})();
var statearr_62148_62175 = state_62129__$1;
(statearr_62148_62175[(2)] = inst_62123);

(statearr_62148_62175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (10))){
var inst_62112 = (state_62129[(2)]);
var state_62129__$1 = state_62129;
var statearr_62149_62176 = state_62129__$1;
(statearr_62149_62176[(2)] = inst_62112);

(statearr_62149_62176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62130 === (8))){
var inst_62093 = (state_62129[(9)]);
var inst_62089 = (state_62129[(8)]);
var inst_62097 = (state_62129[(10)]);
var inst_62102 = inst_62089.push(inst_62093);
var tmp62146 = inst_62089;
var inst_62089__$1 = tmp62146;
var inst_62090 = inst_62097;
var state_62129__$1 = (function (){var statearr_62150 = state_62129;
(statearr_62150[(7)] = inst_62090);

(statearr_62150[(14)] = inst_62102);

(statearr_62150[(8)] = inst_62089__$1);

return statearr_62150;
})();
var statearr_62151_62177 = state_62129__$1;
(statearr_62151_62177[(2)] = null);

(statearr_62151_62177[(1)] = (2));


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
});})(c__11085__auto___62163,out))
;
return ((function (switch__10973__auto__,c__11085__auto___62163,out){
return (function() {
var cljs$core$async$state_machine__10974__auto__ = null;
var cljs$core$async$state_machine__10974__auto____0 = (function (){
var statearr_62155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62155[(0)] = cljs$core$async$state_machine__10974__auto__);

(statearr_62155[(1)] = (1));

return statearr_62155;
});
var cljs$core$async$state_machine__10974__auto____1 = (function (state_62129){
while(true){
var ret_value__10975__auto__ = (function (){try{while(true){
var result__10976__auto__ = switch__10973__auto__.call(null,state_62129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10976__auto__;
}
break;
}
}catch (e62156){if((e62156 instanceof Object)){
var ex__10977__auto__ = e62156;
var statearr_62157_62178 = state_62129;
(statearr_62157_62178[(5)] = ex__10977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62179 = state_62129;
state_62129 = G__62179;
continue;
} else {
return ret_value__10975__auto__;
}
break;
}
});
cljs$core$async$state_machine__10974__auto__ = function(state_62129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10974__auto____1.call(this,state_62129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10974__auto____0;
cljs$core$async$state_machine__10974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10974__auto____1;
return cljs$core$async$state_machine__10974__auto__;
})()
;})(switch__10973__auto__,c__11085__auto___62163,out))
})();
var state__11087__auto__ = (function (){var statearr_62158 = f__11086__auto__.call(null);
(statearr_62158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11085__auto___62163);

return statearr_62158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11087__auto__);
});})(c__11085__auto___62163,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map