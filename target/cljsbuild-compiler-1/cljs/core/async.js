// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25422 = [];
var len__7479__auto___25428 = arguments.length;
var i__7480__auto___25429 = (0);
while(true){
if((i__7480__auto___25429 < len__7479__auto___25428)){
args25422.push((arguments[i__7480__auto___25429]));

var G__25430 = (i__7480__auto___25429 + (1));
i__7480__auto___25429 = G__25430;
continue;
} else {
}
break;
}

var G__25424 = args25422.length;
switch (G__25424) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25422.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25425 = (function (f,blockable,meta25426){
this.f = f;
this.blockable = blockable;
this.meta25426 = meta25426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25427,meta25426__$1){
var self__ = this;
var _25427__$1 = this;
return (new cljs.core.async.t_cljs$core$async25425(self__.f,self__.blockable,meta25426__$1));
});

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25427){
var self__ = this;
var _25427__$1 = this;
return self__.meta25426;
});

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25426","meta25426",1006578345,null)], null);
});

cljs.core.async.t_cljs$core$async25425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25425";

cljs.core.async.t_cljs$core$async25425.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async25425");
});

cljs.core.async.__GT_t_cljs$core$async25425 = (function cljs$core$async$__GT_t_cljs$core$async25425(f__$1,blockable__$1,meta25426){
return (new cljs.core.async.t_cljs$core$async25425(f__$1,blockable__$1,meta25426));
});

}

return (new cljs.core.async.t_cljs$core$async25425(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args25434 = [];
var len__7479__auto___25437 = arguments.length;
var i__7480__auto___25438 = (0);
while(true){
if((i__7480__auto___25438 < len__7479__auto___25437)){
args25434.push((arguments[i__7480__auto___25438]));

var G__25439 = (i__7480__auto___25438 + (1));
i__7480__auto___25438 = G__25439;
continue;
} else {
}
break;
}

var G__25436 = args25434.length;
switch (G__25436) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25434.length)].join('')));

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
var args25441 = [];
var len__7479__auto___25444 = arguments.length;
var i__7480__auto___25445 = (0);
while(true){
if((i__7480__auto___25445 < len__7479__auto___25444)){
args25441.push((arguments[i__7480__auto___25445]));

var G__25446 = (i__7480__auto___25445 + (1));
i__7480__auto___25445 = G__25446;
continue;
} else {
}
break;
}

var G__25443 = args25441.length;
switch (G__25443) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25441.length)].join('')));

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
var args25448 = [];
var len__7479__auto___25451 = arguments.length;
var i__7480__auto___25452 = (0);
while(true){
if((i__7480__auto___25452 < len__7479__auto___25451)){
args25448.push((arguments[i__7480__auto___25452]));

var G__25453 = (i__7480__auto___25452 + (1));
i__7480__auto___25452 = G__25453;
continue;
} else {
}
break;
}

var G__25450 = args25448.length;
switch (G__25450) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25448.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25455 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25455);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25455,ret){
return (function (){
return fn1.call(null,val_25455);
});})(val_25455,ret))
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
var args25456 = [];
var len__7479__auto___25459 = arguments.length;
var i__7480__auto___25460 = (0);
while(true){
if((i__7480__auto___25460 < len__7479__auto___25459)){
args25456.push((arguments[i__7480__auto___25460]));

var G__25461 = (i__7480__auto___25460 + (1));
i__7480__auto___25460 = G__25461;
continue;
} else {
}
break;
}

var G__25458 = args25456.length;
switch (G__25458) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25456.length)].join('')));

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
var n__7319__auto___25463 = n;
var x_25464 = (0);
while(true){
if((x_25464 < n__7319__auto___25463)){
(a[x_25464] = (0));

var G__25465 = (x_25464 + (1));
x_25464 = G__25465;
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

var G__25466 = (i + (1));
i = G__25466;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25470 = (function (alt_flag,flag,meta25471){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25471 = meta25471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25472,meta25471__$1){
var self__ = this;
var _25472__$1 = this;
return (new cljs.core.async.t_cljs$core$async25470(self__.alt_flag,self__.flag,meta25471__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25472){
var self__ = this;
var _25472__$1 = this;
return self__.meta25471;
});})(flag))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25470.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25471","meta25471",-1540967246,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25470";

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async25470");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25470 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25470(alt_flag__$1,flag__$1,meta25471){
return (new cljs.core.async.t_cljs$core$async25470(alt_flag__$1,flag__$1,meta25471));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25470(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25476 = (function (alt_handler,flag,cb,meta25477){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25477 = meta25477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25478,meta25477__$1){
var self__ = this;
var _25478__$1 = this;
return (new cljs.core.async.t_cljs$core$async25476(self__.alt_handler,self__.flag,self__.cb,meta25477__$1));
});

cljs.core.async.t_cljs$core$async25476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25478){
var self__ = this;
var _25478__$1 = this;
return self__.meta25477;
});

cljs.core.async.t_cljs$core$async25476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25477","meta25477",1893011921,null)], null);
});

cljs.core.async.t_cljs$core$async25476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25476";

cljs.core.async.t_cljs$core$async25476.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async25476");
});

cljs.core.async.__GT_t_cljs$core$async25476 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25476(alt_handler__$1,flag__$1,cb__$1,meta25477){
return (new cljs.core.async.t_cljs$core$async25476(alt_handler__$1,flag__$1,cb__$1,meta25477));
});

}

return (new cljs.core.async.t_cljs$core$async25476(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25479_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25479_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25480_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25480_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6404__auto__ = wport;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25481 = (i + (1));
i = G__25481;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6404__auto__ = ret;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6392__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6392__auto__;
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
var args__7486__auto__ = [];
var len__7479__auto___25487 = arguments.length;
var i__7480__auto___25488 = (0);
while(true){
if((i__7480__auto___25488 < len__7479__auto___25487)){
args__7486__auto__.push((arguments[i__7480__auto___25488]));

var G__25489 = (i__7480__auto___25488 + (1));
i__7480__auto___25488 = G__25489;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25484){
var map__25485 = p__25484;
var map__25485__$1 = ((((!((map__25485 == null)))?((((map__25485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25485):map__25485);
var opts = map__25485__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25482){
var G__25483 = cljs.core.first.call(null,seq25482);
var seq25482__$1 = cljs.core.next.call(null,seq25482);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25483,seq25482__$1);
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
var args25490 = [];
var len__7479__auto___25540 = arguments.length;
var i__7480__auto___25541 = (0);
while(true){
if((i__7480__auto___25541 < len__7479__auto___25540)){
args25490.push((arguments[i__7480__auto___25541]));

var G__25542 = (i__7480__auto___25541 + (1));
i__7480__auto___25541 = G__25542;
continue;
} else {
}
break;
}

var G__25492 = args25490.length;
switch (G__25492) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25490.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18136__auto___25544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___25544){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___25544){
return (function (state_25516){
var state_val_25517 = (state_25516[(1)]);
if((state_val_25517 === (7))){
var inst_25512 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25518_25545 = state_25516__$1;
(statearr_25518_25545[(2)] = inst_25512);

(statearr_25518_25545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (1))){
var state_25516__$1 = state_25516;
var statearr_25519_25546 = state_25516__$1;
(statearr_25519_25546[(2)] = null);

(statearr_25519_25546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (4))){
var inst_25495 = (state_25516[(7)]);
var inst_25495__$1 = (state_25516[(2)]);
var inst_25496 = (inst_25495__$1 == null);
var state_25516__$1 = (function (){var statearr_25520 = state_25516;
(statearr_25520[(7)] = inst_25495__$1);

return statearr_25520;
})();
if(cljs.core.truth_(inst_25496)){
var statearr_25521_25547 = state_25516__$1;
(statearr_25521_25547[(1)] = (5));

} else {
var statearr_25522_25548 = state_25516__$1;
(statearr_25522_25548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (13))){
var state_25516__$1 = state_25516;
var statearr_25523_25549 = state_25516__$1;
(statearr_25523_25549[(2)] = null);

(statearr_25523_25549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (6))){
var inst_25495 = (state_25516[(7)]);
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25516__$1,(11),to,inst_25495);
} else {
if((state_val_25517 === (3))){
var inst_25514 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25516__$1,inst_25514);
} else {
if((state_val_25517 === (12))){
var state_25516__$1 = state_25516;
var statearr_25524_25550 = state_25516__$1;
(statearr_25524_25550[(2)] = null);

(statearr_25524_25550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (2))){
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25516__$1,(4),from);
} else {
if((state_val_25517 === (11))){
var inst_25505 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
if(cljs.core.truth_(inst_25505)){
var statearr_25525_25551 = state_25516__$1;
(statearr_25525_25551[(1)] = (12));

} else {
var statearr_25526_25552 = state_25516__$1;
(statearr_25526_25552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (9))){
var state_25516__$1 = state_25516;
var statearr_25527_25553 = state_25516__$1;
(statearr_25527_25553[(2)] = null);

(statearr_25527_25553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (5))){
var state_25516__$1 = state_25516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25528_25554 = state_25516__$1;
(statearr_25528_25554[(1)] = (8));

} else {
var statearr_25529_25555 = state_25516__$1;
(statearr_25529_25555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (14))){
var inst_25510 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25530_25556 = state_25516__$1;
(statearr_25530_25556[(2)] = inst_25510);

(statearr_25530_25556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (10))){
var inst_25502 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25531_25557 = state_25516__$1;
(statearr_25531_25557[(2)] = inst_25502);

(statearr_25531_25557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (8))){
var inst_25499 = cljs.core.async.close_BANG_.call(null,to);
var state_25516__$1 = state_25516;
var statearr_25532_25558 = state_25516__$1;
(statearr_25532_25558[(2)] = inst_25499);

(statearr_25532_25558[(1)] = (10));


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
});})(c__18136__auto___25544))
;
return ((function (switch__18024__auto__,c__18136__auto___25544){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_25536 = [null,null,null,null,null,null,null,null];
(statearr_25536[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_25536[(1)] = (1));

return statearr_25536;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_25516){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_25516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e25537){if((e25537 instanceof Object)){
var ex__18028__auto__ = e25537;
var statearr_25538_25559 = state_25516;
(statearr_25538_25559[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25560 = state_25516;
state_25516 = G__25560;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_25516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_25516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___25544))
})();
var state__18138__auto__ = (function (){var statearr_25539 = f__18137__auto__.call(null);
(statearr_25539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___25544);

return statearr_25539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___25544))
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
return (function (p__25748){
var vec__25749 = p__25748;
var v = cljs.core.nth.call(null,vec__25749,(0),null);
var p = cljs.core.nth.call(null,vec__25749,(1),null);
var job = vec__25749;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18136__auto___25935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___25935,res,vec__25749,v,p,job,jobs,results){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___25935,res,vec__25749,v,p,job,jobs,results){
return (function (state_25756){
var state_val_25757 = (state_25756[(1)]);
if((state_val_25757 === (1))){
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25756__$1,(2),res,v);
} else {
if((state_val_25757 === (2))){
var inst_25753 = (state_25756[(2)]);
var inst_25754 = cljs.core.async.close_BANG_.call(null,res);
var state_25756__$1 = (function (){var statearr_25758 = state_25756;
(statearr_25758[(7)] = inst_25753);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25756__$1,inst_25754);
} else {
return null;
}
}
});})(c__18136__auto___25935,res,vec__25749,v,p,job,jobs,results))
;
return ((function (switch__18024__auto__,c__18136__auto___25935,res,vec__25749,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0 = (function (){
var statearr_25762 = [null,null,null,null,null,null,null,null];
(statearr_25762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__);

(statearr_25762[(1)] = (1));

return statearr_25762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1 = (function (state_25756){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_25756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e25763){if((e25763 instanceof Object)){
var ex__18028__auto__ = e25763;
var statearr_25764_25936 = state_25756;
(statearr_25764_25936[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25937 = state_25756;
state_25756 = G__25937;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = function(state_25756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1.call(this,state_25756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___25935,res,vec__25749,v,p,job,jobs,results))
})();
var state__18138__auto__ = (function (){var statearr_25765 = f__18137__auto__.call(null);
(statearr_25765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___25935);

return statearr_25765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___25935,res,vec__25749,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25766){
var vec__25767 = p__25766;
var v = cljs.core.nth.call(null,vec__25767,(0),null);
var p = cljs.core.nth.call(null,vec__25767,(1),null);
var job = vec__25767;
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
var n__7319__auto___25938 = n;
var __25939 = (0);
while(true){
if((__25939 < n__7319__auto___25938)){
var G__25770_25940 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25770_25940) {
case "compute":
var c__18136__auto___25942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25939,c__18136__auto___25942,G__25770_25940,n__7319__auto___25938,jobs,results,process,async){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (__25939,c__18136__auto___25942,G__25770_25940,n__7319__auto___25938,jobs,results,process,async){
return (function (state_25783){
var state_val_25784 = (state_25783[(1)]);
if((state_val_25784 === (1))){
var state_25783__$1 = state_25783;
var statearr_25785_25943 = state_25783__$1;
(statearr_25785_25943[(2)] = null);

(statearr_25785_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (2))){
var state_25783__$1 = state_25783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25783__$1,(4),jobs);
} else {
if((state_val_25784 === (3))){
var inst_25781 = (state_25783[(2)]);
var state_25783__$1 = state_25783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25783__$1,inst_25781);
} else {
if((state_val_25784 === (4))){
var inst_25773 = (state_25783[(2)]);
var inst_25774 = process.call(null,inst_25773);
var state_25783__$1 = state_25783;
if(cljs.core.truth_(inst_25774)){
var statearr_25786_25944 = state_25783__$1;
(statearr_25786_25944[(1)] = (5));

} else {
var statearr_25787_25945 = state_25783__$1;
(statearr_25787_25945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (5))){
var state_25783__$1 = state_25783;
var statearr_25788_25946 = state_25783__$1;
(statearr_25788_25946[(2)] = null);

(statearr_25788_25946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (6))){
var state_25783__$1 = state_25783;
var statearr_25789_25947 = state_25783__$1;
(statearr_25789_25947[(2)] = null);

(statearr_25789_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25784 === (7))){
var inst_25779 = (state_25783[(2)]);
var state_25783__$1 = state_25783;
var statearr_25790_25948 = state_25783__$1;
(statearr_25790_25948[(2)] = inst_25779);

(statearr_25790_25948[(1)] = (3));


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
});})(__25939,c__18136__auto___25942,G__25770_25940,n__7319__auto___25938,jobs,results,process,async))
;
return ((function (__25939,switch__18024__auto__,c__18136__auto___25942,G__25770_25940,n__7319__auto___25938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0 = (function (){
var statearr_25794 = [null,null,null,null,null,null,null];
(statearr_25794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__);

(statearr_25794[(1)] = (1));

return statearr_25794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1 = (function (state_25783){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_25783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e25795){if((e25795 instanceof Object)){
var ex__18028__auto__ = e25795;
var statearr_25796_25949 = state_25783;
(statearr_25796_25949[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25950 = state_25783;
state_25783 = G__25950;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = function(state_25783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1.call(this,state_25783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__;
})()
;})(__25939,switch__18024__auto__,c__18136__auto___25942,G__25770_25940,n__7319__auto___25938,jobs,results,process,async))
})();
var state__18138__auto__ = (function (){var statearr_25797 = f__18137__auto__.call(null);
(statearr_25797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___25942);

return statearr_25797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(__25939,c__18136__auto___25942,G__25770_25940,n__7319__auto___25938,jobs,results,process,async))
);


break;
case "async":
var c__18136__auto___25951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25939,c__18136__auto___25951,G__25770_25940,n__7319__auto___25938,jobs,results,process,async){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (__25939,c__18136__auto___25951,G__25770_25940,n__7319__auto___25938,jobs,results,process,async){
return (function (state_25810){
var state_val_25811 = (state_25810[(1)]);
if((state_val_25811 === (1))){
var state_25810__$1 = state_25810;
var statearr_25812_25952 = state_25810__$1;
(statearr_25812_25952[(2)] = null);

(statearr_25812_25952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (2))){
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25810__$1,(4),jobs);
} else {
if((state_val_25811 === (3))){
var inst_25808 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25810__$1,inst_25808);
} else {
if((state_val_25811 === (4))){
var inst_25800 = (state_25810[(2)]);
var inst_25801 = async.call(null,inst_25800);
var state_25810__$1 = state_25810;
if(cljs.core.truth_(inst_25801)){
var statearr_25813_25953 = state_25810__$1;
(statearr_25813_25953[(1)] = (5));

} else {
var statearr_25814_25954 = state_25810__$1;
(statearr_25814_25954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (5))){
var state_25810__$1 = state_25810;
var statearr_25815_25955 = state_25810__$1;
(statearr_25815_25955[(2)] = null);

(statearr_25815_25955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (6))){
var state_25810__$1 = state_25810;
var statearr_25816_25956 = state_25810__$1;
(statearr_25816_25956[(2)] = null);

(statearr_25816_25956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (7))){
var inst_25806 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25817_25957 = state_25810__$1;
(statearr_25817_25957[(2)] = inst_25806);

(statearr_25817_25957[(1)] = (3));


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
});})(__25939,c__18136__auto___25951,G__25770_25940,n__7319__auto___25938,jobs,results,process,async))
;
return ((function (__25939,switch__18024__auto__,c__18136__auto___25951,G__25770_25940,n__7319__auto___25938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0 = (function (){
var statearr_25821 = [null,null,null,null,null,null,null];
(statearr_25821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__);

(statearr_25821[(1)] = (1));

return statearr_25821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1 = (function (state_25810){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_25810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e25822){if((e25822 instanceof Object)){
var ex__18028__auto__ = e25822;
var statearr_25823_25958 = state_25810;
(statearr_25823_25958[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25959 = state_25810;
state_25810 = G__25959;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = function(state_25810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1.call(this,state_25810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__;
})()
;})(__25939,switch__18024__auto__,c__18136__auto___25951,G__25770_25940,n__7319__auto___25938,jobs,results,process,async))
})();
var state__18138__auto__ = (function (){var statearr_25824 = f__18137__auto__.call(null);
(statearr_25824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___25951);

return statearr_25824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(__25939,c__18136__auto___25951,G__25770_25940,n__7319__auto___25938,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25960 = (__25939 + (1));
__25939 = G__25960;
continue;
} else {
}
break;
}

var c__18136__auto___25961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___25961,jobs,results,process,async){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___25961,jobs,results,process,async){
return (function (state_25846){
var state_val_25847 = (state_25846[(1)]);
if((state_val_25847 === (1))){
var state_25846__$1 = state_25846;
var statearr_25848_25962 = state_25846__$1;
(statearr_25848_25962[(2)] = null);

(statearr_25848_25962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25847 === (2))){
var state_25846__$1 = state_25846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25846__$1,(4),from);
} else {
if((state_val_25847 === (3))){
var inst_25844 = (state_25846[(2)]);
var state_25846__$1 = state_25846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25846__$1,inst_25844);
} else {
if((state_val_25847 === (4))){
var inst_25827 = (state_25846[(7)]);
var inst_25827__$1 = (state_25846[(2)]);
var inst_25828 = (inst_25827__$1 == null);
var state_25846__$1 = (function (){var statearr_25849 = state_25846;
(statearr_25849[(7)] = inst_25827__$1);

return statearr_25849;
})();
if(cljs.core.truth_(inst_25828)){
var statearr_25850_25963 = state_25846__$1;
(statearr_25850_25963[(1)] = (5));

} else {
var statearr_25851_25964 = state_25846__$1;
(statearr_25851_25964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25847 === (5))){
var inst_25830 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25846__$1 = state_25846;
var statearr_25852_25965 = state_25846__$1;
(statearr_25852_25965[(2)] = inst_25830);

(statearr_25852_25965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25847 === (6))){
var inst_25832 = (state_25846[(8)]);
var inst_25827 = (state_25846[(7)]);
var inst_25832__$1 = cljs.core.async.chan.call(null,(1));
var inst_25833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25834 = [inst_25827,inst_25832__$1];
var inst_25835 = (new cljs.core.PersistentVector(null,2,(5),inst_25833,inst_25834,null));
var state_25846__$1 = (function (){var statearr_25853 = state_25846;
(statearr_25853[(8)] = inst_25832__$1);

return statearr_25853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25846__$1,(8),jobs,inst_25835);
} else {
if((state_val_25847 === (7))){
var inst_25842 = (state_25846[(2)]);
var state_25846__$1 = state_25846;
var statearr_25854_25966 = state_25846__$1;
(statearr_25854_25966[(2)] = inst_25842);

(statearr_25854_25966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25847 === (8))){
var inst_25832 = (state_25846[(8)]);
var inst_25837 = (state_25846[(2)]);
var state_25846__$1 = (function (){var statearr_25855 = state_25846;
(statearr_25855[(9)] = inst_25837);

return statearr_25855;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25846__$1,(9),results,inst_25832);
} else {
if((state_val_25847 === (9))){
var inst_25839 = (state_25846[(2)]);
var state_25846__$1 = (function (){var statearr_25856 = state_25846;
(statearr_25856[(10)] = inst_25839);

return statearr_25856;
})();
var statearr_25857_25967 = state_25846__$1;
(statearr_25857_25967[(2)] = null);

(statearr_25857_25967[(1)] = (2));


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
});})(c__18136__auto___25961,jobs,results,process,async))
;
return ((function (switch__18024__auto__,c__18136__auto___25961,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0 = (function (){
var statearr_25861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__);

(statearr_25861[(1)] = (1));

return statearr_25861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1 = (function (state_25846){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_25846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e25862){if((e25862 instanceof Object)){
var ex__18028__auto__ = e25862;
var statearr_25863_25968 = state_25846;
(statearr_25863_25968[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25969 = state_25846;
state_25846 = G__25969;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = function(state_25846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1.call(this,state_25846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___25961,jobs,results,process,async))
})();
var state__18138__auto__ = (function (){var statearr_25864 = f__18137__auto__.call(null);
(statearr_25864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___25961);

return statearr_25864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___25961,jobs,results,process,async))
);


var c__18136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto__,jobs,results,process,async){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto__,jobs,results,process,async){
return (function (state_25902){
var state_val_25903 = (state_25902[(1)]);
if((state_val_25903 === (7))){
var inst_25898 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25904_25970 = state_25902__$1;
(statearr_25904_25970[(2)] = inst_25898);

(statearr_25904_25970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (20))){
var state_25902__$1 = state_25902;
var statearr_25905_25971 = state_25902__$1;
(statearr_25905_25971[(2)] = null);

(statearr_25905_25971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (1))){
var state_25902__$1 = state_25902;
var statearr_25906_25972 = state_25902__$1;
(statearr_25906_25972[(2)] = null);

(statearr_25906_25972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (4))){
var inst_25867 = (state_25902[(7)]);
var inst_25867__$1 = (state_25902[(2)]);
var inst_25868 = (inst_25867__$1 == null);
var state_25902__$1 = (function (){var statearr_25907 = state_25902;
(statearr_25907[(7)] = inst_25867__$1);

return statearr_25907;
})();
if(cljs.core.truth_(inst_25868)){
var statearr_25908_25973 = state_25902__$1;
(statearr_25908_25973[(1)] = (5));

} else {
var statearr_25909_25974 = state_25902__$1;
(statearr_25909_25974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (15))){
var inst_25880 = (state_25902[(8)]);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25902__$1,(18),to,inst_25880);
} else {
if((state_val_25903 === (21))){
var inst_25893 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25910_25975 = state_25902__$1;
(statearr_25910_25975[(2)] = inst_25893);

(statearr_25910_25975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (13))){
var inst_25895 = (state_25902[(2)]);
var state_25902__$1 = (function (){var statearr_25911 = state_25902;
(statearr_25911[(9)] = inst_25895);

return statearr_25911;
})();
var statearr_25912_25976 = state_25902__$1;
(statearr_25912_25976[(2)] = null);

(statearr_25912_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (6))){
var inst_25867 = (state_25902[(7)]);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25902__$1,(11),inst_25867);
} else {
if((state_val_25903 === (17))){
var inst_25888 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
if(cljs.core.truth_(inst_25888)){
var statearr_25913_25977 = state_25902__$1;
(statearr_25913_25977[(1)] = (19));

} else {
var statearr_25914_25978 = state_25902__$1;
(statearr_25914_25978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (3))){
var inst_25900 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25902__$1,inst_25900);
} else {
if((state_val_25903 === (12))){
var inst_25877 = (state_25902[(10)]);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25902__$1,(14),inst_25877);
} else {
if((state_val_25903 === (2))){
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25902__$1,(4),results);
} else {
if((state_val_25903 === (19))){
var state_25902__$1 = state_25902;
var statearr_25915_25979 = state_25902__$1;
(statearr_25915_25979[(2)] = null);

(statearr_25915_25979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (11))){
var inst_25877 = (state_25902[(2)]);
var state_25902__$1 = (function (){var statearr_25916 = state_25902;
(statearr_25916[(10)] = inst_25877);

return statearr_25916;
})();
var statearr_25917_25980 = state_25902__$1;
(statearr_25917_25980[(2)] = null);

(statearr_25917_25980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (9))){
var state_25902__$1 = state_25902;
var statearr_25918_25981 = state_25902__$1;
(statearr_25918_25981[(2)] = null);

(statearr_25918_25981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (5))){
var state_25902__$1 = state_25902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25919_25982 = state_25902__$1;
(statearr_25919_25982[(1)] = (8));

} else {
var statearr_25920_25983 = state_25902__$1;
(statearr_25920_25983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (14))){
var inst_25880 = (state_25902[(8)]);
var inst_25882 = (state_25902[(11)]);
var inst_25880__$1 = (state_25902[(2)]);
var inst_25881 = (inst_25880__$1 == null);
var inst_25882__$1 = cljs.core.not.call(null,inst_25881);
var state_25902__$1 = (function (){var statearr_25921 = state_25902;
(statearr_25921[(8)] = inst_25880__$1);

(statearr_25921[(11)] = inst_25882__$1);

return statearr_25921;
})();
if(inst_25882__$1){
var statearr_25922_25984 = state_25902__$1;
(statearr_25922_25984[(1)] = (15));

} else {
var statearr_25923_25985 = state_25902__$1;
(statearr_25923_25985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (16))){
var inst_25882 = (state_25902[(11)]);
var state_25902__$1 = state_25902;
var statearr_25924_25986 = state_25902__$1;
(statearr_25924_25986[(2)] = inst_25882);

(statearr_25924_25986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (10))){
var inst_25874 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25925_25987 = state_25902__$1;
(statearr_25925_25987[(2)] = inst_25874);

(statearr_25925_25987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (18))){
var inst_25885 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25926_25988 = state_25902__$1;
(statearr_25926_25988[(2)] = inst_25885);

(statearr_25926_25988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (8))){
var inst_25871 = cljs.core.async.close_BANG_.call(null,to);
var state_25902__$1 = state_25902;
var statearr_25927_25989 = state_25902__$1;
(statearr_25927_25989[(2)] = inst_25871);

(statearr_25927_25989[(1)] = (10));


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
});})(c__18136__auto__,jobs,results,process,async))
;
return ((function (switch__18024__auto__,c__18136__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0 = (function (){
var statearr_25931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__);

(statearr_25931[(1)] = (1));

return statearr_25931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1 = (function (state_25902){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_25902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e25932){if((e25932 instanceof Object)){
var ex__18028__auto__ = e25932;
var statearr_25933_25990 = state_25902;
(statearr_25933_25990[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25991 = state_25902;
state_25902 = G__25991;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__ = function(state_25902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1.call(this,state_25902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto__,jobs,results,process,async))
})();
var state__18138__auto__ = (function (){var statearr_25934 = f__18137__auto__.call(null);
(statearr_25934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto__);

return statearr_25934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto__,jobs,results,process,async))
);

return c__18136__auto__;
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
var args25992 = [];
var len__7479__auto___25995 = arguments.length;
var i__7480__auto___25996 = (0);
while(true){
if((i__7480__auto___25996 < len__7479__auto___25995)){
args25992.push((arguments[i__7480__auto___25996]));

var G__25997 = (i__7480__auto___25996 + (1));
i__7480__auto___25996 = G__25997;
continue;
} else {
}
break;
}

var G__25994 = args25992.length;
switch (G__25994) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25992.length)].join('')));

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
var args25999 = [];
var len__7479__auto___26002 = arguments.length;
var i__7480__auto___26003 = (0);
while(true){
if((i__7480__auto___26003 < len__7479__auto___26002)){
args25999.push((arguments[i__7480__auto___26003]));

var G__26004 = (i__7480__auto___26003 + (1));
i__7480__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var G__26001 = args25999.length;
switch (G__26001) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25999.length)].join('')));

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
var args26006 = [];
var len__7479__auto___26059 = arguments.length;
var i__7480__auto___26060 = (0);
while(true){
if((i__7480__auto___26060 < len__7479__auto___26059)){
args26006.push((arguments[i__7480__auto___26060]));

var G__26061 = (i__7480__auto___26060 + (1));
i__7480__auto___26060 = G__26061;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18136__auto___26063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___26063,tc,fc){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___26063,tc,fc){
return (function (state_26034){
var state_val_26035 = (state_26034[(1)]);
if((state_val_26035 === (7))){
var inst_26030 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26036_26064 = state_26034__$1;
(statearr_26036_26064[(2)] = inst_26030);

(statearr_26036_26064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (1))){
var state_26034__$1 = state_26034;
var statearr_26037_26065 = state_26034__$1;
(statearr_26037_26065[(2)] = null);

(statearr_26037_26065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (4))){
var inst_26011 = (state_26034[(7)]);
var inst_26011__$1 = (state_26034[(2)]);
var inst_26012 = (inst_26011__$1 == null);
var state_26034__$1 = (function (){var statearr_26038 = state_26034;
(statearr_26038[(7)] = inst_26011__$1);

return statearr_26038;
})();
if(cljs.core.truth_(inst_26012)){
var statearr_26039_26066 = state_26034__$1;
(statearr_26039_26066[(1)] = (5));

} else {
var statearr_26040_26067 = state_26034__$1;
(statearr_26040_26067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (13))){
var state_26034__$1 = state_26034;
var statearr_26041_26068 = state_26034__$1;
(statearr_26041_26068[(2)] = null);

(statearr_26041_26068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (6))){
var inst_26011 = (state_26034[(7)]);
var inst_26017 = p.call(null,inst_26011);
var state_26034__$1 = state_26034;
if(cljs.core.truth_(inst_26017)){
var statearr_26042_26069 = state_26034__$1;
(statearr_26042_26069[(1)] = (9));

} else {
var statearr_26043_26070 = state_26034__$1;
(statearr_26043_26070[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (3))){
var inst_26032 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26034__$1,inst_26032);
} else {
if((state_val_26035 === (12))){
var state_26034__$1 = state_26034;
var statearr_26044_26071 = state_26034__$1;
(statearr_26044_26071[(2)] = null);

(statearr_26044_26071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (2))){
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26034__$1,(4),ch);
} else {
if((state_val_26035 === (11))){
var inst_26011 = (state_26034[(7)]);
var inst_26021 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26034__$1,(8),inst_26021,inst_26011);
} else {
if((state_val_26035 === (9))){
var state_26034__$1 = state_26034;
var statearr_26045_26072 = state_26034__$1;
(statearr_26045_26072[(2)] = tc);

(statearr_26045_26072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (5))){
var inst_26014 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26015 = cljs.core.async.close_BANG_.call(null,fc);
var state_26034__$1 = (function (){var statearr_26046 = state_26034;
(statearr_26046[(8)] = inst_26014);

return statearr_26046;
})();
var statearr_26047_26073 = state_26034__$1;
(statearr_26047_26073[(2)] = inst_26015);

(statearr_26047_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (14))){
var inst_26028 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26048_26074 = state_26034__$1;
(statearr_26048_26074[(2)] = inst_26028);

(statearr_26048_26074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (10))){
var state_26034__$1 = state_26034;
var statearr_26049_26075 = state_26034__$1;
(statearr_26049_26075[(2)] = fc);

(statearr_26049_26075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (8))){
var inst_26023 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
if(cljs.core.truth_(inst_26023)){
var statearr_26050_26076 = state_26034__$1;
(statearr_26050_26076[(1)] = (12));

} else {
var statearr_26051_26077 = state_26034__$1;
(statearr_26051_26077[(1)] = (13));

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
});})(c__18136__auto___26063,tc,fc))
;
return ((function (switch__18024__auto__,c__18136__auto___26063,tc,fc){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_26055 = [null,null,null,null,null,null,null,null,null];
(statearr_26055[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_26055[(1)] = (1));

return statearr_26055;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_26034){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_26034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e26056){if((e26056 instanceof Object)){
var ex__18028__auto__ = e26056;
var statearr_26057_26078 = state_26034;
(statearr_26057_26078[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26079 = state_26034;
state_26034 = G__26079;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_26034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_26034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___26063,tc,fc))
})();
var state__18138__auto__ = (function (){var statearr_26058 = f__18137__auto__.call(null);
(statearr_26058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___26063);

return statearr_26058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___26063,tc,fc))
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
var c__18136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto__){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto__){
return (function (state_26143){
var state_val_26144 = (state_26143[(1)]);
if((state_val_26144 === (7))){
var inst_26139 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26145_26166 = state_26143__$1;
(statearr_26145_26166[(2)] = inst_26139);

(statearr_26145_26166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (1))){
var inst_26123 = init;
var state_26143__$1 = (function (){var statearr_26146 = state_26143;
(statearr_26146[(7)] = inst_26123);

return statearr_26146;
})();
var statearr_26147_26167 = state_26143__$1;
(statearr_26147_26167[(2)] = null);

(statearr_26147_26167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (4))){
var inst_26126 = (state_26143[(8)]);
var inst_26126__$1 = (state_26143[(2)]);
var inst_26127 = (inst_26126__$1 == null);
var state_26143__$1 = (function (){var statearr_26148 = state_26143;
(statearr_26148[(8)] = inst_26126__$1);

return statearr_26148;
})();
if(cljs.core.truth_(inst_26127)){
var statearr_26149_26168 = state_26143__$1;
(statearr_26149_26168[(1)] = (5));

} else {
var statearr_26150_26169 = state_26143__$1;
(statearr_26150_26169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (6))){
var inst_26126 = (state_26143[(8)]);
var inst_26123 = (state_26143[(7)]);
var inst_26130 = (state_26143[(9)]);
var inst_26130__$1 = f.call(null,inst_26123,inst_26126);
var inst_26131 = cljs.core.reduced_QMARK_.call(null,inst_26130__$1);
var state_26143__$1 = (function (){var statearr_26151 = state_26143;
(statearr_26151[(9)] = inst_26130__$1);

return statearr_26151;
})();
if(inst_26131){
var statearr_26152_26170 = state_26143__$1;
(statearr_26152_26170[(1)] = (8));

} else {
var statearr_26153_26171 = state_26143__$1;
(statearr_26153_26171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (3))){
var inst_26141 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26143__$1,inst_26141);
} else {
if((state_val_26144 === (2))){
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(4),ch);
} else {
if((state_val_26144 === (9))){
var inst_26130 = (state_26143[(9)]);
var inst_26123 = inst_26130;
var state_26143__$1 = (function (){var statearr_26154 = state_26143;
(statearr_26154[(7)] = inst_26123);

return statearr_26154;
})();
var statearr_26155_26172 = state_26143__$1;
(statearr_26155_26172[(2)] = null);

(statearr_26155_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (5))){
var inst_26123 = (state_26143[(7)]);
var state_26143__$1 = state_26143;
var statearr_26156_26173 = state_26143__$1;
(statearr_26156_26173[(2)] = inst_26123);

(statearr_26156_26173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (10))){
var inst_26137 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26157_26174 = state_26143__$1;
(statearr_26157_26174[(2)] = inst_26137);

(statearr_26157_26174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (8))){
var inst_26130 = (state_26143[(9)]);
var inst_26133 = cljs.core.deref.call(null,inst_26130);
var state_26143__$1 = state_26143;
var statearr_26158_26175 = state_26143__$1;
(statearr_26158_26175[(2)] = inst_26133);

(statearr_26158_26175[(1)] = (10));


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
});})(c__18136__auto__))
;
return ((function (switch__18024__auto__,c__18136__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18025__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18025__auto____0 = (function (){
var statearr_26162 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26162[(0)] = cljs$core$async$reduce_$_state_machine__18025__auto__);

(statearr_26162[(1)] = (1));

return statearr_26162;
});
var cljs$core$async$reduce_$_state_machine__18025__auto____1 = (function (state_26143){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_26143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object)){
var ex__18028__auto__ = e26163;
var statearr_26164_26176 = state_26143;
(statearr_26164_26176[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26177 = state_26143;
state_26143 = G__26177;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18025__auto__ = function(state_26143){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18025__auto____1.call(this,state_26143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18025__auto____0;
cljs$core$async$reduce_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18025__auto____1;
return cljs$core$async$reduce_$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto__))
})();
var state__18138__auto__ = (function (){var statearr_26165 = f__18137__auto__.call(null);
(statearr_26165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto__);

return statearr_26165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto__))
);

return c__18136__auto__;
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
var args26178 = [];
var len__7479__auto___26230 = arguments.length;
var i__7480__auto___26231 = (0);
while(true){
if((i__7480__auto___26231 < len__7479__auto___26230)){
args26178.push((arguments[i__7480__auto___26231]));

var G__26232 = (i__7480__auto___26231 + (1));
i__7480__auto___26231 = G__26232;
continue;
} else {
}
break;
}

var G__26180 = args26178.length;
switch (G__26180) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26178.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto__){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto__){
return (function (state_26205){
var state_val_26206 = (state_26205[(1)]);
if((state_val_26206 === (7))){
var inst_26187 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26207_26234 = state_26205__$1;
(statearr_26207_26234[(2)] = inst_26187);

(statearr_26207_26234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (1))){
var inst_26181 = cljs.core.seq.call(null,coll);
var inst_26182 = inst_26181;
var state_26205__$1 = (function (){var statearr_26208 = state_26205;
(statearr_26208[(7)] = inst_26182);

return statearr_26208;
})();
var statearr_26209_26235 = state_26205__$1;
(statearr_26209_26235[(2)] = null);

(statearr_26209_26235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (4))){
var inst_26182 = (state_26205[(7)]);
var inst_26185 = cljs.core.first.call(null,inst_26182);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26205__$1,(7),ch,inst_26185);
} else {
if((state_val_26206 === (13))){
var inst_26199 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26210_26236 = state_26205__$1;
(statearr_26210_26236[(2)] = inst_26199);

(statearr_26210_26236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (6))){
var inst_26190 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
if(cljs.core.truth_(inst_26190)){
var statearr_26211_26237 = state_26205__$1;
(statearr_26211_26237[(1)] = (8));

} else {
var statearr_26212_26238 = state_26205__$1;
(statearr_26212_26238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (3))){
var inst_26203 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26205__$1,inst_26203);
} else {
if((state_val_26206 === (12))){
var state_26205__$1 = state_26205;
var statearr_26213_26239 = state_26205__$1;
(statearr_26213_26239[(2)] = null);

(statearr_26213_26239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (2))){
var inst_26182 = (state_26205[(7)]);
var state_26205__$1 = state_26205;
if(cljs.core.truth_(inst_26182)){
var statearr_26214_26240 = state_26205__$1;
(statearr_26214_26240[(1)] = (4));

} else {
var statearr_26215_26241 = state_26205__$1;
(statearr_26215_26241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (11))){
var inst_26196 = cljs.core.async.close_BANG_.call(null,ch);
var state_26205__$1 = state_26205;
var statearr_26216_26242 = state_26205__$1;
(statearr_26216_26242[(2)] = inst_26196);

(statearr_26216_26242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (9))){
var state_26205__$1 = state_26205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26217_26243 = state_26205__$1;
(statearr_26217_26243[(1)] = (11));

} else {
var statearr_26218_26244 = state_26205__$1;
(statearr_26218_26244[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (5))){
var inst_26182 = (state_26205[(7)]);
var state_26205__$1 = state_26205;
var statearr_26219_26245 = state_26205__$1;
(statearr_26219_26245[(2)] = inst_26182);

(statearr_26219_26245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (10))){
var inst_26201 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26220_26246 = state_26205__$1;
(statearr_26220_26246[(2)] = inst_26201);

(statearr_26220_26246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (8))){
var inst_26182 = (state_26205[(7)]);
var inst_26192 = cljs.core.next.call(null,inst_26182);
var inst_26182__$1 = inst_26192;
var state_26205__$1 = (function (){var statearr_26221 = state_26205;
(statearr_26221[(7)] = inst_26182__$1);

return statearr_26221;
})();
var statearr_26222_26247 = state_26205__$1;
(statearr_26222_26247[(2)] = null);

(statearr_26222_26247[(1)] = (2));


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
});})(c__18136__auto__))
;
return ((function (switch__18024__auto__,c__18136__auto__){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_26226 = [null,null,null,null,null,null,null,null];
(statearr_26226[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_26226[(1)] = (1));

return statearr_26226;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_26205){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_26205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e26227){if((e26227 instanceof Object)){
var ex__18028__auto__ = e26227;
var statearr_26228_26248 = state_26205;
(statearr_26228_26248[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26249 = state_26205;
state_26205 = G__26249;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_26205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_26205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto__))
})();
var state__18138__auto__ = (function (){var statearr_26229 = f__18137__auto__.call(null);
(statearr_26229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto__);

return statearr_26229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto__))
);

return c__18136__auto__;
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
var x__7067__auto__ = (((_ == null))?null:_);
var m__7068__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,_);
} else {
var m__7068__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,_);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7068__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m);
} else {
var m__7068__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26475 = (function (mult,ch,cs,meta26476){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26476 = meta26476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26477,meta26476__$1){
var self__ = this;
var _26477__$1 = this;
return (new cljs.core.async.t_cljs$core$async26475(self__.mult,self__.ch,self__.cs,meta26476__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26477){
var self__ = this;
var _26477__$1 = this;
return self__.meta26476;
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26476","meta26476",-1361506077,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26475";

cljs.core.async.t_cljs$core$async26475.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async26475");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26475 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26475(mult__$1,ch__$1,cs__$1,meta26476){
return (new cljs.core.async.t_cljs$core$async26475(mult__$1,ch__$1,cs__$1,meta26476));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26475(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18136__auto___26700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___26700,cs,m,dchan,dctr,done){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___26700,cs,m,dchan,dctr,done){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26614_26701 = state_26612__$1;
(statearr_26614_26701[(2)] = inst_26608);

(statearr_26614_26701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (20))){
var inst_26511 = (state_26612[(7)]);
var inst_26523 = cljs.core.first.call(null,inst_26511);
var inst_26524 = cljs.core.nth.call(null,inst_26523,(0),null);
var inst_26525 = cljs.core.nth.call(null,inst_26523,(1),null);
var state_26612__$1 = (function (){var statearr_26615 = state_26612;
(statearr_26615[(8)] = inst_26524);

return statearr_26615;
})();
if(cljs.core.truth_(inst_26525)){
var statearr_26616_26702 = state_26612__$1;
(statearr_26616_26702[(1)] = (22));

} else {
var statearr_26617_26703 = state_26612__$1;
(statearr_26617_26703[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (27))){
var inst_26560 = (state_26612[(9)]);
var inst_26553 = (state_26612[(10)]);
var inst_26480 = (state_26612[(11)]);
var inst_26555 = (state_26612[(12)]);
var inst_26560__$1 = cljs.core._nth.call(null,inst_26553,inst_26555);
var inst_26561 = cljs.core.async.put_BANG_.call(null,inst_26560__$1,inst_26480,done);
var state_26612__$1 = (function (){var statearr_26618 = state_26612;
(statearr_26618[(9)] = inst_26560__$1);

return statearr_26618;
})();
if(cljs.core.truth_(inst_26561)){
var statearr_26619_26704 = state_26612__$1;
(statearr_26619_26704[(1)] = (30));

} else {
var statearr_26620_26705 = state_26612__$1;
(statearr_26620_26705[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26621_26706 = state_26612__$1;
(statearr_26621_26706[(2)] = null);

(statearr_26621_26706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (24))){
var inst_26511 = (state_26612[(7)]);
var inst_26530 = (state_26612[(2)]);
var inst_26531 = cljs.core.next.call(null,inst_26511);
var inst_26489 = inst_26531;
var inst_26490 = null;
var inst_26491 = (0);
var inst_26492 = (0);
var state_26612__$1 = (function (){var statearr_26622 = state_26612;
(statearr_26622[(13)] = inst_26492);

(statearr_26622[(14)] = inst_26491);

(statearr_26622[(15)] = inst_26490);

(statearr_26622[(16)] = inst_26530);

(statearr_26622[(17)] = inst_26489);

return statearr_26622;
})();
var statearr_26623_26707 = state_26612__$1;
(statearr_26623_26707[(2)] = null);

(statearr_26623_26707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (39))){
var state_26612__$1 = state_26612;
var statearr_26627_26708 = state_26612__$1;
(statearr_26627_26708[(2)] = null);

(statearr_26627_26708[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26480 = (state_26612[(11)]);
var inst_26480__$1 = (state_26612[(2)]);
var inst_26481 = (inst_26480__$1 == null);
var state_26612__$1 = (function (){var statearr_26628 = state_26612;
(statearr_26628[(11)] = inst_26480__$1);

return statearr_26628;
})();
if(cljs.core.truth_(inst_26481)){
var statearr_26629_26709 = state_26612__$1;
(statearr_26629_26709[(1)] = (5));

} else {
var statearr_26630_26710 = state_26612__$1;
(statearr_26630_26710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (15))){
var inst_26492 = (state_26612[(13)]);
var inst_26491 = (state_26612[(14)]);
var inst_26490 = (state_26612[(15)]);
var inst_26489 = (state_26612[(17)]);
var inst_26507 = (state_26612[(2)]);
var inst_26508 = (inst_26492 + (1));
var tmp26624 = inst_26491;
var tmp26625 = inst_26490;
var tmp26626 = inst_26489;
var inst_26489__$1 = tmp26626;
var inst_26490__$1 = tmp26625;
var inst_26491__$1 = tmp26624;
var inst_26492__$1 = inst_26508;
var state_26612__$1 = (function (){var statearr_26631 = state_26612;
(statearr_26631[(13)] = inst_26492__$1);

(statearr_26631[(18)] = inst_26507);

(statearr_26631[(14)] = inst_26491__$1);

(statearr_26631[(15)] = inst_26490__$1);

(statearr_26631[(17)] = inst_26489__$1);

return statearr_26631;
})();
var statearr_26632_26711 = state_26612__$1;
(statearr_26632_26711[(2)] = null);

(statearr_26632_26711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (21))){
var inst_26534 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26636_26712 = state_26612__$1;
(statearr_26636_26712[(2)] = inst_26534);

(statearr_26636_26712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (31))){
var inst_26560 = (state_26612[(9)]);
var inst_26564 = done.call(null,null);
var inst_26565 = cljs.core.async.untap_STAR_.call(null,m,inst_26560);
var state_26612__$1 = (function (){var statearr_26637 = state_26612;
(statearr_26637[(19)] = inst_26564);

return statearr_26637;
})();
var statearr_26638_26713 = state_26612__$1;
(statearr_26638_26713[(2)] = inst_26565);

(statearr_26638_26713[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (32))){
var inst_26553 = (state_26612[(10)]);
var inst_26554 = (state_26612[(20)]);
var inst_26555 = (state_26612[(12)]);
var inst_26552 = (state_26612[(21)]);
var inst_26567 = (state_26612[(2)]);
var inst_26568 = (inst_26555 + (1));
var tmp26633 = inst_26553;
var tmp26634 = inst_26554;
var tmp26635 = inst_26552;
var inst_26552__$1 = tmp26635;
var inst_26553__$1 = tmp26633;
var inst_26554__$1 = tmp26634;
var inst_26555__$1 = inst_26568;
var state_26612__$1 = (function (){var statearr_26639 = state_26612;
(statearr_26639[(22)] = inst_26567);

(statearr_26639[(10)] = inst_26553__$1);

(statearr_26639[(20)] = inst_26554__$1);

(statearr_26639[(12)] = inst_26555__$1);

(statearr_26639[(21)] = inst_26552__$1);

return statearr_26639;
})();
var statearr_26640_26714 = state_26612__$1;
(statearr_26640_26714[(2)] = null);

(statearr_26640_26714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (40))){
var inst_26580 = (state_26612[(23)]);
var inst_26584 = done.call(null,null);
var inst_26585 = cljs.core.async.untap_STAR_.call(null,m,inst_26580);
var state_26612__$1 = (function (){var statearr_26641 = state_26612;
(statearr_26641[(24)] = inst_26584);

return statearr_26641;
})();
var statearr_26642_26715 = state_26612__$1;
(statearr_26642_26715[(2)] = inst_26585);

(statearr_26642_26715[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (33))){
var inst_26571 = (state_26612[(25)]);
var inst_26573 = cljs.core.chunked_seq_QMARK_.call(null,inst_26571);
var state_26612__$1 = state_26612;
if(inst_26573){
var statearr_26643_26716 = state_26612__$1;
(statearr_26643_26716[(1)] = (36));

} else {
var statearr_26644_26717 = state_26612__$1;
(statearr_26644_26717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (13))){
var inst_26501 = (state_26612[(26)]);
var inst_26504 = cljs.core.async.close_BANG_.call(null,inst_26501);
var state_26612__$1 = state_26612;
var statearr_26645_26718 = state_26612__$1;
(statearr_26645_26718[(2)] = inst_26504);

(statearr_26645_26718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (22))){
var inst_26524 = (state_26612[(8)]);
var inst_26527 = cljs.core.async.close_BANG_.call(null,inst_26524);
var state_26612__$1 = state_26612;
var statearr_26646_26719 = state_26612__$1;
(statearr_26646_26719[(2)] = inst_26527);

(statearr_26646_26719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (36))){
var inst_26571 = (state_26612[(25)]);
var inst_26575 = cljs.core.chunk_first.call(null,inst_26571);
var inst_26576 = cljs.core.chunk_rest.call(null,inst_26571);
var inst_26577 = cljs.core.count.call(null,inst_26575);
var inst_26552 = inst_26576;
var inst_26553 = inst_26575;
var inst_26554 = inst_26577;
var inst_26555 = (0);
var state_26612__$1 = (function (){var statearr_26647 = state_26612;
(statearr_26647[(10)] = inst_26553);

(statearr_26647[(20)] = inst_26554);

(statearr_26647[(12)] = inst_26555);

(statearr_26647[(21)] = inst_26552);

return statearr_26647;
})();
var statearr_26648_26720 = state_26612__$1;
(statearr_26648_26720[(2)] = null);

(statearr_26648_26720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (41))){
var inst_26571 = (state_26612[(25)]);
var inst_26587 = (state_26612[(2)]);
var inst_26588 = cljs.core.next.call(null,inst_26571);
var inst_26552 = inst_26588;
var inst_26553 = null;
var inst_26554 = (0);
var inst_26555 = (0);
var state_26612__$1 = (function (){var statearr_26649 = state_26612;
(statearr_26649[(27)] = inst_26587);

(statearr_26649[(10)] = inst_26553);

(statearr_26649[(20)] = inst_26554);

(statearr_26649[(12)] = inst_26555);

(statearr_26649[(21)] = inst_26552);

return statearr_26649;
})();
var statearr_26650_26721 = state_26612__$1;
(statearr_26650_26721[(2)] = null);

(statearr_26650_26721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (43))){
var state_26612__$1 = state_26612;
var statearr_26651_26722 = state_26612__$1;
(statearr_26651_26722[(2)] = null);

(statearr_26651_26722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (29))){
var inst_26596 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26652_26723 = state_26612__$1;
(statearr_26652_26723[(2)] = inst_26596);

(statearr_26652_26723[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (44))){
var inst_26605 = (state_26612[(2)]);
var state_26612__$1 = (function (){var statearr_26653 = state_26612;
(statearr_26653[(28)] = inst_26605);

return statearr_26653;
})();
var statearr_26654_26724 = state_26612__$1;
(statearr_26654_26724[(2)] = null);

(statearr_26654_26724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26544 = (state_26612[(29)]);
var inst_26543 = cljs.core.deref.call(null,cs);
var inst_26544__$1 = cljs.core.keys.call(null,inst_26543);
var inst_26545 = cljs.core.count.call(null,inst_26544__$1);
var inst_26546 = cljs.core.reset_BANG_.call(null,dctr,inst_26545);
var inst_26551 = cljs.core.seq.call(null,inst_26544__$1);
var inst_26552 = inst_26551;
var inst_26553 = null;
var inst_26554 = (0);
var inst_26555 = (0);
var state_26612__$1 = (function (){var statearr_26655 = state_26612;
(statearr_26655[(29)] = inst_26544__$1);

(statearr_26655[(10)] = inst_26553);

(statearr_26655[(20)] = inst_26554);

(statearr_26655[(12)] = inst_26555);

(statearr_26655[(21)] = inst_26552);

(statearr_26655[(30)] = inst_26546);

return statearr_26655;
})();
var statearr_26656_26725 = state_26612__$1;
(statearr_26656_26725[(2)] = null);

(statearr_26656_26725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (28))){
var inst_26571 = (state_26612[(25)]);
var inst_26552 = (state_26612[(21)]);
var inst_26571__$1 = cljs.core.seq.call(null,inst_26552);
var state_26612__$1 = (function (){var statearr_26657 = state_26612;
(statearr_26657[(25)] = inst_26571__$1);

return statearr_26657;
})();
if(inst_26571__$1){
var statearr_26658_26726 = state_26612__$1;
(statearr_26658_26726[(1)] = (33));

} else {
var statearr_26659_26727 = state_26612__$1;
(statearr_26659_26727[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (25))){
var inst_26554 = (state_26612[(20)]);
var inst_26555 = (state_26612[(12)]);
var inst_26557 = (inst_26555 < inst_26554);
var inst_26558 = inst_26557;
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26558)){
var statearr_26660_26728 = state_26612__$1;
(statearr_26660_26728[(1)] = (27));

} else {
var statearr_26661_26729 = state_26612__$1;
(statearr_26661_26729[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (34))){
var state_26612__$1 = state_26612;
var statearr_26662_26730 = state_26612__$1;
(statearr_26662_26730[(2)] = null);

(statearr_26662_26730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (17))){
var state_26612__$1 = state_26612;
var statearr_26663_26731 = state_26612__$1;
(statearr_26663_26731[(2)] = null);

(statearr_26663_26731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (12))){
var inst_26539 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26664_26732 = state_26612__$1;
(statearr_26664_26732[(2)] = inst_26539);

(statearr_26664_26732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(4),ch);
} else {
if((state_val_26613 === (23))){
var state_26612__$1 = state_26612;
var statearr_26665_26733 = state_26612__$1;
(statearr_26665_26733[(2)] = null);

(statearr_26665_26733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (35))){
var inst_26594 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26666_26734 = state_26612__$1;
(statearr_26666_26734[(2)] = inst_26594);

(statearr_26666_26734[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (19))){
var inst_26511 = (state_26612[(7)]);
var inst_26515 = cljs.core.chunk_first.call(null,inst_26511);
var inst_26516 = cljs.core.chunk_rest.call(null,inst_26511);
var inst_26517 = cljs.core.count.call(null,inst_26515);
var inst_26489 = inst_26516;
var inst_26490 = inst_26515;
var inst_26491 = inst_26517;
var inst_26492 = (0);
var state_26612__$1 = (function (){var statearr_26667 = state_26612;
(statearr_26667[(13)] = inst_26492);

(statearr_26667[(14)] = inst_26491);

(statearr_26667[(15)] = inst_26490);

(statearr_26667[(17)] = inst_26489);

return statearr_26667;
})();
var statearr_26668_26735 = state_26612__$1;
(statearr_26668_26735[(2)] = null);

(statearr_26668_26735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (11))){
var inst_26511 = (state_26612[(7)]);
var inst_26489 = (state_26612[(17)]);
var inst_26511__$1 = cljs.core.seq.call(null,inst_26489);
var state_26612__$1 = (function (){var statearr_26669 = state_26612;
(statearr_26669[(7)] = inst_26511__$1);

return statearr_26669;
})();
if(inst_26511__$1){
var statearr_26670_26736 = state_26612__$1;
(statearr_26670_26736[(1)] = (16));

} else {
var statearr_26671_26737 = state_26612__$1;
(statearr_26671_26737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (9))){
var inst_26541 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26672_26738 = state_26612__$1;
(statearr_26672_26738[(2)] = inst_26541);

(statearr_26672_26738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26487 = cljs.core.deref.call(null,cs);
var inst_26488 = cljs.core.seq.call(null,inst_26487);
var inst_26489 = inst_26488;
var inst_26490 = null;
var inst_26491 = (0);
var inst_26492 = (0);
var state_26612__$1 = (function (){var statearr_26673 = state_26612;
(statearr_26673[(13)] = inst_26492);

(statearr_26673[(14)] = inst_26491);

(statearr_26673[(15)] = inst_26490);

(statearr_26673[(17)] = inst_26489);

return statearr_26673;
})();
var statearr_26674_26739 = state_26612__$1;
(statearr_26674_26739[(2)] = null);

(statearr_26674_26739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (14))){
var state_26612__$1 = state_26612;
var statearr_26675_26740 = state_26612__$1;
(statearr_26675_26740[(2)] = null);

(statearr_26675_26740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (45))){
var inst_26602 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26676_26741 = state_26612__$1;
(statearr_26676_26741[(2)] = inst_26602);

(statearr_26676_26741[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (26))){
var inst_26544 = (state_26612[(29)]);
var inst_26598 = (state_26612[(2)]);
var inst_26599 = cljs.core.seq.call(null,inst_26544);
var state_26612__$1 = (function (){var statearr_26677 = state_26612;
(statearr_26677[(31)] = inst_26598);

return statearr_26677;
})();
if(inst_26599){
var statearr_26678_26742 = state_26612__$1;
(statearr_26678_26742[(1)] = (42));

} else {
var statearr_26679_26743 = state_26612__$1;
(statearr_26679_26743[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (16))){
var inst_26511 = (state_26612[(7)]);
var inst_26513 = cljs.core.chunked_seq_QMARK_.call(null,inst_26511);
var state_26612__$1 = state_26612;
if(inst_26513){
var statearr_26680_26744 = state_26612__$1;
(statearr_26680_26744[(1)] = (19));

} else {
var statearr_26681_26745 = state_26612__$1;
(statearr_26681_26745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (38))){
var inst_26591 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26682_26746 = state_26612__$1;
(statearr_26682_26746[(2)] = inst_26591);

(statearr_26682_26746[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (30))){
var state_26612__$1 = state_26612;
var statearr_26683_26747 = state_26612__$1;
(statearr_26683_26747[(2)] = null);

(statearr_26683_26747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (10))){
var inst_26492 = (state_26612[(13)]);
var inst_26490 = (state_26612[(15)]);
var inst_26500 = cljs.core._nth.call(null,inst_26490,inst_26492);
var inst_26501 = cljs.core.nth.call(null,inst_26500,(0),null);
var inst_26502 = cljs.core.nth.call(null,inst_26500,(1),null);
var state_26612__$1 = (function (){var statearr_26684 = state_26612;
(statearr_26684[(26)] = inst_26501);

return statearr_26684;
})();
if(cljs.core.truth_(inst_26502)){
var statearr_26685_26748 = state_26612__$1;
(statearr_26685_26748[(1)] = (13));

} else {
var statearr_26686_26749 = state_26612__$1;
(statearr_26686_26749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (18))){
var inst_26537 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26687_26750 = state_26612__$1;
(statearr_26687_26750[(2)] = inst_26537);

(statearr_26687_26750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (42))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(45),dchan);
} else {
if((state_val_26613 === (37))){
var inst_26580 = (state_26612[(23)]);
var inst_26571 = (state_26612[(25)]);
var inst_26480 = (state_26612[(11)]);
var inst_26580__$1 = cljs.core.first.call(null,inst_26571);
var inst_26581 = cljs.core.async.put_BANG_.call(null,inst_26580__$1,inst_26480,done);
var state_26612__$1 = (function (){var statearr_26688 = state_26612;
(statearr_26688[(23)] = inst_26580__$1);

return statearr_26688;
})();
if(cljs.core.truth_(inst_26581)){
var statearr_26689_26751 = state_26612__$1;
(statearr_26689_26751[(1)] = (39));

} else {
var statearr_26690_26752 = state_26612__$1;
(statearr_26690_26752[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (8))){
var inst_26492 = (state_26612[(13)]);
var inst_26491 = (state_26612[(14)]);
var inst_26494 = (inst_26492 < inst_26491);
var inst_26495 = inst_26494;
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26495)){
var statearr_26691_26753 = state_26612__$1;
(statearr_26691_26753[(1)] = (10));

} else {
var statearr_26692_26754 = state_26612__$1;
(statearr_26692_26754[(1)] = (11));

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
});})(c__18136__auto___26700,cs,m,dchan,dctr,done))
;
return ((function (switch__18024__auto__,c__18136__auto___26700,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18025__auto__ = null;
var cljs$core$async$mult_$_state_machine__18025__auto____0 = (function (){
var statearr_26696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26696[(0)] = cljs$core$async$mult_$_state_machine__18025__auto__);

(statearr_26696[(1)] = (1));

return statearr_26696;
});
var cljs$core$async$mult_$_state_machine__18025__auto____1 = (function (state_26612){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e26697){if((e26697 instanceof Object)){
var ex__18028__auto__ = e26697;
var statearr_26698_26755 = state_26612;
(statearr_26698_26755[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26756 = state_26612;
state_26612 = G__26756;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18025__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18025__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18025__auto____0;
cljs$core$async$mult_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18025__auto____1;
return cljs$core$async$mult_$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___26700,cs,m,dchan,dctr,done))
})();
var state__18138__auto__ = (function (){var statearr_26699 = f__18137__auto__.call(null);
(statearr_26699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___26700);

return statearr_26699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___26700,cs,m,dchan,dctr,done))
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
var args26757 = [];
var len__7479__auto___26760 = arguments.length;
var i__7480__auto___26761 = (0);
while(true){
if((i__7480__auto___26761 < len__7479__auto___26760)){
args26757.push((arguments[i__7480__auto___26761]));

var G__26762 = (i__7480__auto___26761 + (1));
i__7480__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var G__26759 = args26757.length;
switch (G__26759) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26757.length)].join('')));

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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,ch);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m);
} else {
var m__7068__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,state_map);
} else {
var m__7068__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,state_map);
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
var x__7067__auto__ = (((m == null))?null:m);
var m__7068__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,m,mode);
} else {
var m__7068__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___26774 = arguments.length;
var i__7480__auto___26775 = (0);
while(true){
if((i__7480__auto___26775 < len__7479__auto___26774)){
args__7486__auto__.push((arguments[i__7480__auto___26775]));

var G__26776 = (i__7480__auto___26775 + (1));
i__7480__auto___26775 = G__26776;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26768){
var map__26769 = p__26768;
var map__26769__$1 = ((((!((map__26769 == null)))?((((map__26769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26769):map__26769);
var opts = map__26769__$1;
var statearr_26771_26777 = state;
(statearr_26771_26777[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26769,map__26769__$1,opts){
return (function (val){
var statearr_26772_26778 = state;
(statearr_26772_26778[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26769,map__26769__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26773_26779 = state;
(statearr_26773_26779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26764){
var G__26765 = cljs.core.first.call(null,seq26764);
var seq26764__$1 = cljs.core.next.call(null,seq26764);
var G__26766 = cljs.core.first.call(null,seq26764__$1);
var seq26764__$2 = cljs.core.next.call(null,seq26764__$1);
var G__26767 = cljs.core.first.call(null,seq26764__$2);
var seq26764__$3 = cljs.core.next.call(null,seq26764__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26765,G__26766,G__26767,seq26764__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26945 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26946){
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
this.meta26946 = meta26946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26947,meta26946__$1){
var self__ = this;
var _26947__$1 = this;
return (new cljs.core.async.t_cljs$core$async26945(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26947){
var self__ = this;
var _26947__$1 = this;
return self__.meta26946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26945.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26946","meta26946",-1189715973,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26945";

cljs.core.async.t_cljs$core$async26945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async26945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26946){
return (new cljs.core.async.t_cljs$core$async26945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26945(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18136__auto___27110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27047){
var state_val_27048 = (state_27047[(1)]);
if((state_val_27048 === (7))){
var inst_26963 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27049_27111 = state_27047__$1;
(statearr_27049_27111[(2)] = inst_26963);

(statearr_27049_27111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (20))){
var inst_26975 = (state_27047[(7)]);
var state_27047__$1 = state_27047;
var statearr_27050_27112 = state_27047__$1;
(statearr_27050_27112[(2)] = inst_26975);

(statearr_27050_27112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (27))){
var state_27047__$1 = state_27047;
var statearr_27051_27113 = state_27047__$1;
(statearr_27051_27113[(2)] = null);

(statearr_27051_27113[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (1))){
var inst_26951 = (state_27047[(8)]);
var inst_26951__$1 = calc_state.call(null);
var inst_26953 = (inst_26951__$1 == null);
var inst_26954 = cljs.core.not.call(null,inst_26953);
var state_27047__$1 = (function (){var statearr_27052 = state_27047;
(statearr_27052[(8)] = inst_26951__$1);

return statearr_27052;
})();
if(inst_26954){
var statearr_27053_27114 = state_27047__$1;
(statearr_27053_27114[(1)] = (2));

} else {
var statearr_27054_27115 = state_27047__$1;
(statearr_27054_27115[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (24))){
var inst_26998 = (state_27047[(9)]);
var inst_27021 = (state_27047[(10)]);
var inst_27007 = (state_27047[(11)]);
var inst_27021__$1 = inst_26998.call(null,inst_27007);
var state_27047__$1 = (function (){var statearr_27055 = state_27047;
(statearr_27055[(10)] = inst_27021__$1);

return statearr_27055;
})();
if(cljs.core.truth_(inst_27021__$1)){
var statearr_27056_27116 = state_27047__$1;
(statearr_27056_27116[(1)] = (29));

} else {
var statearr_27057_27117 = state_27047__$1;
(statearr_27057_27117[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (4))){
var inst_26966 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_26966)){
var statearr_27058_27118 = state_27047__$1;
(statearr_27058_27118[(1)] = (8));

} else {
var statearr_27059_27119 = state_27047__$1;
(statearr_27059_27119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (15))){
var inst_26992 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_26992)){
var statearr_27060_27120 = state_27047__$1;
(statearr_27060_27120[(1)] = (19));

} else {
var statearr_27061_27121 = state_27047__$1;
(statearr_27061_27121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (21))){
var inst_26997 = (state_27047[(12)]);
var inst_26997__$1 = (state_27047[(2)]);
var inst_26998 = cljs.core.get.call(null,inst_26997__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26999 = cljs.core.get.call(null,inst_26997__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27000 = cljs.core.get.call(null,inst_26997__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27047__$1 = (function (){var statearr_27062 = state_27047;
(statearr_27062[(9)] = inst_26998);

(statearr_27062[(12)] = inst_26997__$1);

(statearr_27062[(13)] = inst_26999);

return statearr_27062;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27047__$1,(22),inst_27000);
} else {
if((state_val_27048 === (31))){
var inst_27029 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_27029)){
var statearr_27063_27122 = state_27047__$1;
(statearr_27063_27122[(1)] = (32));

} else {
var statearr_27064_27123 = state_27047__$1;
(statearr_27064_27123[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (32))){
var inst_27006 = (state_27047[(14)]);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27047__$1,(35),out,inst_27006);
} else {
if((state_val_27048 === (33))){
var inst_26997 = (state_27047[(12)]);
var inst_26975 = inst_26997;
var state_27047__$1 = (function (){var statearr_27065 = state_27047;
(statearr_27065[(7)] = inst_26975);

return statearr_27065;
})();
var statearr_27066_27124 = state_27047__$1;
(statearr_27066_27124[(2)] = null);

(statearr_27066_27124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (13))){
var inst_26975 = (state_27047[(7)]);
var inst_26982 = inst_26975.cljs$lang$protocol_mask$partition0$;
var inst_26983 = (inst_26982 & (64));
var inst_26984 = inst_26975.cljs$core$ISeq$;
var inst_26985 = (inst_26983) || (inst_26984);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_26985)){
var statearr_27067_27125 = state_27047__$1;
(statearr_27067_27125[(1)] = (16));

} else {
var statearr_27068_27126 = state_27047__$1;
(statearr_27068_27126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (22))){
var inst_27006 = (state_27047[(14)]);
var inst_27007 = (state_27047[(11)]);
var inst_27005 = (state_27047[(2)]);
var inst_27006__$1 = cljs.core.nth.call(null,inst_27005,(0),null);
var inst_27007__$1 = cljs.core.nth.call(null,inst_27005,(1),null);
var inst_27008 = (inst_27006__$1 == null);
var inst_27009 = cljs.core._EQ_.call(null,inst_27007__$1,change);
var inst_27010 = (inst_27008) || (inst_27009);
var state_27047__$1 = (function (){var statearr_27069 = state_27047;
(statearr_27069[(14)] = inst_27006__$1);

(statearr_27069[(11)] = inst_27007__$1);

return statearr_27069;
})();
if(cljs.core.truth_(inst_27010)){
var statearr_27070_27127 = state_27047__$1;
(statearr_27070_27127[(1)] = (23));

} else {
var statearr_27071_27128 = state_27047__$1;
(statearr_27071_27128[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (36))){
var inst_26997 = (state_27047[(12)]);
var inst_26975 = inst_26997;
var state_27047__$1 = (function (){var statearr_27072 = state_27047;
(statearr_27072[(7)] = inst_26975);

return statearr_27072;
})();
var statearr_27073_27129 = state_27047__$1;
(statearr_27073_27129[(2)] = null);

(statearr_27073_27129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (29))){
var inst_27021 = (state_27047[(10)]);
var state_27047__$1 = state_27047;
var statearr_27074_27130 = state_27047__$1;
(statearr_27074_27130[(2)] = inst_27021);

(statearr_27074_27130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (6))){
var state_27047__$1 = state_27047;
var statearr_27075_27131 = state_27047__$1;
(statearr_27075_27131[(2)] = false);

(statearr_27075_27131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (28))){
var inst_27017 = (state_27047[(2)]);
var inst_27018 = calc_state.call(null);
var inst_26975 = inst_27018;
var state_27047__$1 = (function (){var statearr_27076 = state_27047;
(statearr_27076[(7)] = inst_26975);

(statearr_27076[(15)] = inst_27017);

return statearr_27076;
})();
var statearr_27077_27132 = state_27047__$1;
(statearr_27077_27132[(2)] = null);

(statearr_27077_27132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (25))){
var inst_27043 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27078_27133 = state_27047__$1;
(statearr_27078_27133[(2)] = inst_27043);

(statearr_27078_27133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (34))){
var inst_27041 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27079_27134 = state_27047__$1;
(statearr_27079_27134[(2)] = inst_27041);

(statearr_27079_27134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (17))){
var state_27047__$1 = state_27047;
var statearr_27080_27135 = state_27047__$1;
(statearr_27080_27135[(2)] = false);

(statearr_27080_27135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (3))){
var state_27047__$1 = state_27047;
var statearr_27081_27136 = state_27047__$1;
(statearr_27081_27136[(2)] = false);

(statearr_27081_27136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (12))){
var inst_27045 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27047__$1,inst_27045);
} else {
if((state_val_27048 === (2))){
var inst_26951 = (state_27047[(8)]);
var inst_26956 = inst_26951.cljs$lang$protocol_mask$partition0$;
var inst_26957 = (inst_26956 & (64));
var inst_26958 = inst_26951.cljs$core$ISeq$;
var inst_26959 = (inst_26957) || (inst_26958);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_26959)){
var statearr_27082_27137 = state_27047__$1;
(statearr_27082_27137[(1)] = (5));

} else {
var statearr_27083_27138 = state_27047__$1;
(statearr_27083_27138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (23))){
var inst_27006 = (state_27047[(14)]);
var inst_27012 = (inst_27006 == null);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_27012)){
var statearr_27084_27139 = state_27047__$1;
(statearr_27084_27139[(1)] = (26));

} else {
var statearr_27085_27140 = state_27047__$1;
(statearr_27085_27140[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (35))){
var inst_27032 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_27032)){
var statearr_27086_27141 = state_27047__$1;
(statearr_27086_27141[(1)] = (36));

} else {
var statearr_27087_27142 = state_27047__$1;
(statearr_27087_27142[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (19))){
var inst_26975 = (state_27047[(7)]);
var inst_26994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26975);
var state_27047__$1 = state_27047;
var statearr_27088_27143 = state_27047__$1;
(statearr_27088_27143[(2)] = inst_26994);

(statearr_27088_27143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (11))){
var inst_26975 = (state_27047[(7)]);
var inst_26979 = (inst_26975 == null);
var inst_26980 = cljs.core.not.call(null,inst_26979);
var state_27047__$1 = state_27047;
if(inst_26980){
var statearr_27089_27144 = state_27047__$1;
(statearr_27089_27144[(1)] = (13));

} else {
var statearr_27090_27145 = state_27047__$1;
(statearr_27090_27145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (9))){
var inst_26951 = (state_27047[(8)]);
var state_27047__$1 = state_27047;
var statearr_27091_27146 = state_27047__$1;
(statearr_27091_27146[(2)] = inst_26951);

(statearr_27091_27146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (5))){
var state_27047__$1 = state_27047;
var statearr_27092_27147 = state_27047__$1;
(statearr_27092_27147[(2)] = true);

(statearr_27092_27147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (14))){
var state_27047__$1 = state_27047;
var statearr_27093_27148 = state_27047__$1;
(statearr_27093_27148[(2)] = false);

(statearr_27093_27148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (26))){
var inst_27007 = (state_27047[(11)]);
var inst_27014 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27007);
var state_27047__$1 = state_27047;
var statearr_27094_27149 = state_27047__$1;
(statearr_27094_27149[(2)] = inst_27014);

(statearr_27094_27149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (16))){
var state_27047__$1 = state_27047;
var statearr_27095_27150 = state_27047__$1;
(statearr_27095_27150[(2)] = true);

(statearr_27095_27150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (38))){
var inst_27037 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27096_27151 = state_27047__$1;
(statearr_27096_27151[(2)] = inst_27037);

(statearr_27096_27151[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (30))){
var inst_26998 = (state_27047[(9)]);
var inst_26999 = (state_27047[(13)]);
var inst_27007 = (state_27047[(11)]);
var inst_27024 = cljs.core.empty_QMARK_.call(null,inst_26998);
var inst_27025 = inst_26999.call(null,inst_27007);
var inst_27026 = cljs.core.not.call(null,inst_27025);
var inst_27027 = (inst_27024) && (inst_27026);
var state_27047__$1 = state_27047;
var statearr_27097_27152 = state_27047__$1;
(statearr_27097_27152[(2)] = inst_27027);

(statearr_27097_27152[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (10))){
var inst_26951 = (state_27047[(8)]);
var inst_26971 = (state_27047[(2)]);
var inst_26972 = cljs.core.get.call(null,inst_26971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26973 = cljs.core.get.call(null,inst_26971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26974 = cljs.core.get.call(null,inst_26971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26975 = inst_26951;
var state_27047__$1 = (function (){var statearr_27098 = state_27047;
(statearr_27098[(16)] = inst_26974);

(statearr_27098[(7)] = inst_26975);

(statearr_27098[(17)] = inst_26973);

(statearr_27098[(18)] = inst_26972);

return statearr_27098;
})();
var statearr_27099_27153 = state_27047__$1;
(statearr_27099_27153[(2)] = null);

(statearr_27099_27153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (18))){
var inst_26989 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27100_27154 = state_27047__$1;
(statearr_27100_27154[(2)] = inst_26989);

(statearr_27100_27154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (37))){
var state_27047__$1 = state_27047;
var statearr_27101_27155 = state_27047__$1;
(statearr_27101_27155[(2)] = null);

(statearr_27101_27155[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (8))){
var inst_26951 = (state_27047[(8)]);
var inst_26968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26951);
var state_27047__$1 = state_27047;
var statearr_27102_27156 = state_27047__$1;
(statearr_27102_27156[(2)] = inst_26968);

(statearr_27102_27156[(1)] = (10));


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
});})(c__18136__auto___27110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18024__auto__,c__18136__auto___27110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18025__auto__ = null;
var cljs$core$async$mix_$_state_machine__18025__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = cljs$core$async$mix_$_state_machine__18025__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var cljs$core$async$mix_$_state_machine__18025__auto____1 = (function (state_27047){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__18028__auto__ = e27107;
var statearr_27108_27157 = state_27047;
(statearr_27108_27157[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27158 = state_27047;
state_27047 = G__27158;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18025__auto__ = function(state_27047){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18025__auto____1.call(this,state_27047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18025__auto____0;
cljs$core$async$mix_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18025__auto____1;
return cljs$core$async$mix_$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18138__auto__ = (function (){var statearr_27109 = f__18137__auto__.call(null);
(statearr_27109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27110);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27110,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7068__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p,v,ch);
} else {
var m__7068__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27159 = [];
var len__7479__auto___27162 = arguments.length;
var i__7480__auto___27163 = (0);
while(true){
if((i__7480__auto___27163 < len__7479__auto___27162)){
args27159.push((arguments[i__7480__auto___27163]));

var G__27164 = (i__7480__auto___27163 + (1));
i__7480__auto___27163 = G__27164;
continue;
} else {
}
break;
}

var G__27161 = args27159.length;
switch (G__27161) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27159.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p);
} else {
var m__7068__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p);
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
var x__7067__auto__ = (((p == null))?null:p);
var m__7068__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,p,v);
} else {
var m__7068__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,p,v);
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
var args27167 = [];
var len__7479__auto___27292 = arguments.length;
var i__7480__auto___27293 = (0);
while(true){
if((i__7480__auto___27293 < len__7479__auto___27292)){
args27167.push((arguments[i__7480__auto___27293]));

var G__27294 = (i__7480__auto___27293 + (1));
i__7480__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var G__27169 = args27167.length;
switch (G__27169) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27167.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6404__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6404__auto__,mults){
return (function (p1__27166_SHARP_){
if(cljs.core.truth_(p1__27166_SHARP_.call(null,topic))){
return p1__27166_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27166_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6404__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27170 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27171){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27171 = meta27171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27172,meta27171__$1){
var self__ = this;
var _27172__$1 = this;
return (new cljs.core.async.t_cljs$core$async27170(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27171__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27172){
var self__ = this;
var _27172__$1 = this;
return self__.meta27171;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27171","meta27171",-639213786,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27170";

cljs.core.async.t_cljs$core$async27170.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async27170");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27170 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27170(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27171){
return (new cljs.core.async.t_cljs$core$async27170(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27171));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27170(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18136__auto___27296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27296,mults,ensure_mult,p){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27296,mults,ensure_mult,p){
return (function (state_27244){
var state_val_27245 = (state_27244[(1)]);
if((state_val_27245 === (7))){
var inst_27240 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27246_27297 = state_27244__$1;
(statearr_27246_27297[(2)] = inst_27240);

(statearr_27246_27297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (20))){
var state_27244__$1 = state_27244;
var statearr_27247_27298 = state_27244__$1;
(statearr_27247_27298[(2)] = null);

(statearr_27247_27298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (1))){
var state_27244__$1 = state_27244;
var statearr_27248_27299 = state_27244__$1;
(statearr_27248_27299[(2)] = null);

(statearr_27248_27299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (24))){
var inst_27223 = (state_27244[(7)]);
var inst_27232 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27223);
var state_27244__$1 = state_27244;
var statearr_27249_27300 = state_27244__$1;
(statearr_27249_27300[(2)] = inst_27232);

(statearr_27249_27300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (4))){
var inst_27175 = (state_27244[(8)]);
var inst_27175__$1 = (state_27244[(2)]);
var inst_27176 = (inst_27175__$1 == null);
var state_27244__$1 = (function (){var statearr_27250 = state_27244;
(statearr_27250[(8)] = inst_27175__$1);

return statearr_27250;
})();
if(cljs.core.truth_(inst_27176)){
var statearr_27251_27301 = state_27244__$1;
(statearr_27251_27301[(1)] = (5));

} else {
var statearr_27252_27302 = state_27244__$1;
(statearr_27252_27302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (15))){
var inst_27217 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27253_27303 = state_27244__$1;
(statearr_27253_27303[(2)] = inst_27217);

(statearr_27253_27303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (21))){
var inst_27237 = (state_27244[(2)]);
var state_27244__$1 = (function (){var statearr_27254 = state_27244;
(statearr_27254[(9)] = inst_27237);

return statearr_27254;
})();
var statearr_27255_27304 = state_27244__$1;
(statearr_27255_27304[(2)] = null);

(statearr_27255_27304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (13))){
var inst_27199 = (state_27244[(10)]);
var inst_27201 = cljs.core.chunked_seq_QMARK_.call(null,inst_27199);
var state_27244__$1 = state_27244;
if(inst_27201){
var statearr_27256_27305 = state_27244__$1;
(statearr_27256_27305[(1)] = (16));

} else {
var statearr_27257_27306 = state_27244__$1;
(statearr_27257_27306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (22))){
var inst_27229 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
if(cljs.core.truth_(inst_27229)){
var statearr_27258_27307 = state_27244__$1;
(statearr_27258_27307[(1)] = (23));

} else {
var statearr_27259_27308 = state_27244__$1;
(statearr_27259_27308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (6))){
var inst_27175 = (state_27244[(8)]);
var inst_27223 = (state_27244[(7)]);
var inst_27225 = (state_27244[(11)]);
var inst_27223__$1 = topic_fn.call(null,inst_27175);
var inst_27224 = cljs.core.deref.call(null,mults);
var inst_27225__$1 = cljs.core.get.call(null,inst_27224,inst_27223__$1);
var state_27244__$1 = (function (){var statearr_27260 = state_27244;
(statearr_27260[(7)] = inst_27223__$1);

(statearr_27260[(11)] = inst_27225__$1);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27225__$1)){
var statearr_27261_27309 = state_27244__$1;
(statearr_27261_27309[(1)] = (19));

} else {
var statearr_27262_27310 = state_27244__$1;
(statearr_27262_27310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (25))){
var inst_27234 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27263_27311 = state_27244__$1;
(statearr_27263_27311[(2)] = inst_27234);

(statearr_27263_27311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (17))){
var inst_27199 = (state_27244[(10)]);
var inst_27208 = cljs.core.first.call(null,inst_27199);
var inst_27209 = cljs.core.async.muxch_STAR_.call(null,inst_27208);
var inst_27210 = cljs.core.async.close_BANG_.call(null,inst_27209);
var inst_27211 = cljs.core.next.call(null,inst_27199);
var inst_27185 = inst_27211;
var inst_27186 = null;
var inst_27187 = (0);
var inst_27188 = (0);
var state_27244__$1 = (function (){var statearr_27264 = state_27244;
(statearr_27264[(12)] = inst_27185);

(statearr_27264[(13)] = inst_27188);

(statearr_27264[(14)] = inst_27187);

(statearr_27264[(15)] = inst_27186);

(statearr_27264[(16)] = inst_27210);

return statearr_27264;
})();
var statearr_27265_27312 = state_27244__$1;
(statearr_27265_27312[(2)] = null);

(statearr_27265_27312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (3))){
var inst_27242 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27244__$1,inst_27242);
} else {
if((state_val_27245 === (12))){
var inst_27219 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27266_27313 = state_27244__$1;
(statearr_27266_27313[(2)] = inst_27219);

(statearr_27266_27313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (2))){
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27244__$1,(4),ch);
} else {
if((state_val_27245 === (23))){
var state_27244__$1 = state_27244;
var statearr_27267_27314 = state_27244__$1;
(statearr_27267_27314[(2)] = null);

(statearr_27267_27314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (19))){
var inst_27175 = (state_27244[(8)]);
var inst_27225 = (state_27244[(11)]);
var inst_27227 = cljs.core.async.muxch_STAR_.call(null,inst_27225);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27244__$1,(22),inst_27227,inst_27175);
} else {
if((state_val_27245 === (11))){
var inst_27199 = (state_27244[(10)]);
var inst_27185 = (state_27244[(12)]);
var inst_27199__$1 = cljs.core.seq.call(null,inst_27185);
var state_27244__$1 = (function (){var statearr_27268 = state_27244;
(statearr_27268[(10)] = inst_27199__$1);

return statearr_27268;
})();
if(inst_27199__$1){
var statearr_27269_27315 = state_27244__$1;
(statearr_27269_27315[(1)] = (13));

} else {
var statearr_27270_27316 = state_27244__$1;
(statearr_27270_27316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (9))){
var inst_27221 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27271_27317 = state_27244__$1;
(statearr_27271_27317[(2)] = inst_27221);

(statearr_27271_27317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (5))){
var inst_27182 = cljs.core.deref.call(null,mults);
var inst_27183 = cljs.core.vals.call(null,inst_27182);
var inst_27184 = cljs.core.seq.call(null,inst_27183);
var inst_27185 = inst_27184;
var inst_27186 = null;
var inst_27187 = (0);
var inst_27188 = (0);
var state_27244__$1 = (function (){var statearr_27272 = state_27244;
(statearr_27272[(12)] = inst_27185);

(statearr_27272[(13)] = inst_27188);

(statearr_27272[(14)] = inst_27187);

(statearr_27272[(15)] = inst_27186);

return statearr_27272;
})();
var statearr_27273_27318 = state_27244__$1;
(statearr_27273_27318[(2)] = null);

(statearr_27273_27318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (14))){
var state_27244__$1 = state_27244;
var statearr_27277_27319 = state_27244__$1;
(statearr_27277_27319[(2)] = null);

(statearr_27277_27319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (16))){
var inst_27199 = (state_27244[(10)]);
var inst_27203 = cljs.core.chunk_first.call(null,inst_27199);
var inst_27204 = cljs.core.chunk_rest.call(null,inst_27199);
var inst_27205 = cljs.core.count.call(null,inst_27203);
var inst_27185 = inst_27204;
var inst_27186 = inst_27203;
var inst_27187 = inst_27205;
var inst_27188 = (0);
var state_27244__$1 = (function (){var statearr_27278 = state_27244;
(statearr_27278[(12)] = inst_27185);

(statearr_27278[(13)] = inst_27188);

(statearr_27278[(14)] = inst_27187);

(statearr_27278[(15)] = inst_27186);

return statearr_27278;
})();
var statearr_27279_27320 = state_27244__$1;
(statearr_27279_27320[(2)] = null);

(statearr_27279_27320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (10))){
var inst_27185 = (state_27244[(12)]);
var inst_27188 = (state_27244[(13)]);
var inst_27187 = (state_27244[(14)]);
var inst_27186 = (state_27244[(15)]);
var inst_27193 = cljs.core._nth.call(null,inst_27186,inst_27188);
var inst_27194 = cljs.core.async.muxch_STAR_.call(null,inst_27193);
var inst_27195 = cljs.core.async.close_BANG_.call(null,inst_27194);
var inst_27196 = (inst_27188 + (1));
var tmp27274 = inst_27185;
var tmp27275 = inst_27187;
var tmp27276 = inst_27186;
var inst_27185__$1 = tmp27274;
var inst_27186__$1 = tmp27276;
var inst_27187__$1 = tmp27275;
var inst_27188__$1 = inst_27196;
var state_27244__$1 = (function (){var statearr_27280 = state_27244;
(statearr_27280[(17)] = inst_27195);

(statearr_27280[(12)] = inst_27185__$1);

(statearr_27280[(13)] = inst_27188__$1);

(statearr_27280[(14)] = inst_27187__$1);

(statearr_27280[(15)] = inst_27186__$1);

return statearr_27280;
})();
var statearr_27281_27321 = state_27244__$1;
(statearr_27281_27321[(2)] = null);

(statearr_27281_27321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (18))){
var inst_27214 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27282_27322 = state_27244__$1;
(statearr_27282_27322[(2)] = inst_27214);

(statearr_27282_27322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (8))){
var inst_27188 = (state_27244[(13)]);
var inst_27187 = (state_27244[(14)]);
var inst_27190 = (inst_27188 < inst_27187);
var inst_27191 = inst_27190;
var state_27244__$1 = state_27244;
if(cljs.core.truth_(inst_27191)){
var statearr_27283_27323 = state_27244__$1;
(statearr_27283_27323[(1)] = (10));

} else {
var statearr_27284_27324 = state_27244__$1;
(statearr_27284_27324[(1)] = (11));

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
});})(c__18136__auto___27296,mults,ensure_mult,p))
;
return ((function (switch__18024__auto__,c__18136__auto___27296,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_27288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27288[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_27288[(1)] = (1));

return statearr_27288;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_27244){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27289){if((e27289 instanceof Object)){
var ex__18028__auto__ = e27289;
var statearr_27290_27325 = state_27244;
(statearr_27290_27325[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27326 = state_27244;
state_27244 = G__27326;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_27244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_27244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27296,mults,ensure_mult,p))
})();
var state__18138__auto__ = (function (){var statearr_27291 = f__18137__auto__.call(null);
(statearr_27291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27296);

return statearr_27291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27296,mults,ensure_mult,p))
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
var args27327 = [];
var len__7479__auto___27330 = arguments.length;
var i__7480__auto___27331 = (0);
while(true){
if((i__7480__auto___27331 < len__7479__auto___27330)){
args27327.push((arguments[i__7480__auto___27331]));

var G__27332 = (i__7480__auto___27331 + (1));
i__7480__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var G__27329 = args27327.length;
switch (G__27329) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27327.length)].join('')));

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
var args27334 = [];
var len__7479__auto___27337 = arguments.length;
var i__7480__auto___27338 = (0);
while(true){
if((i__7480__auto___27338 < len__7479__auto___27337)){
args27334.push((arguments[i__7480__auto___27338]));

var G__27339 = (i__7480__auto___27338 + (1));
i__7480__auto___27338 = G__27339;
continue;
} else {
}
break;
}

var G__27336 = args27334.length;
switch (G__27336) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27334.length)].join('')));

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
var args27341 = [];
var len__7479__auto___27412 = arguments.length;
var i__7480__auto___27413 = (0);
while(true){
if((i__7480__auto___27413 < len__7479__auto___27412)){
args27341.push((arguments[i__7480__auto___27413]));

var G__27414 = (i__7480__auto___27413 + (1));
i__7480__auto___27413 = G__27414;
continue;
} else {
}
break;
}

var G__27343 = args27341.length;
switch (G__27343) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27341.length)].join('')));

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
var c__18136__auto___27416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27416,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27416,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27382){
var state_val_27383 = (state_27382[(1)]);
if((state_val_27383 === (7))){
var state_27382__$1 = state_27382;
var statearr_27384_27417 = state_27382__$1;
(statearr_27384_27417[(2)] = null);

(statearr_27384_27417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (1))){
var state_27382__$1 = state_27382;
var statearr_27385_27418 = state_27382__$1;
(statearr_27385_27418[(2)] = null);

(statearr_27385_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (4))){
var inst_27346 = (state_27382[(7)]);
var inst_27348 = (inst_27346 < cnt);
var state_27382__$1 = state_27382;
if(cljs.core.truth_(inst_27348)){
var statearr_27386_27419 = state_27382__$1;
(statearr_27386_27419[(1)] = (6));

} else {
var statearr_27387_27420 = state_27382__$1;
(statearr_27387_27420[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (15))){
var inst_27378 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27388_27421 = state_27382__$1;
(statearr_27388_27421[(2)] = inst_27378);

(statearr_27388_27421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (13))){
var inst_27371 = cljs.core.async.close_BANG_.call(null,out);
var state_27382__$1 = state_27382;
var statearr_27389_27422 = state_27382__$1;
(statearr_27389_27422[(2)] = inst_27371);

(statearr_27389_27422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (6))){
var state_27382__$1 = state_27382;
var statearr_27390_27423 = state_27382__$1;
(statearr_27390_27423[(2)] = null);

(statearr_27390_27423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (3))){
var inst_27380 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27382__$1,inst_27380);
} else {
if((state_val_27383 === (12))){
var inst_27368 = (state_27382[(8)]);
var inst_27368__$1 = (state_27382[(2)]);
var inst_27369 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27368__$1);
var state_27382__$1 = (function (){var statearr_27391 = state_27382;
(statearr_27391[(8)] = inst_27368__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27369)){
var statearr_27392_27424 = state_27382__$1;
(statearr_27392_27424[(1)] = (13));

} else {
var statearr_27393_27425 = state_27382__$1;
(statearr_27393_27425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (2))){
var inst_27345 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27346 = (0);
var state_27382__$1 = (function (){var statearr_27394 = state_27382;
(statearr_27394[(7)] = inst_27346);

(statearr_27394[(9)] = inst_27345);

return statearr_27394;
})();
var statearr_27395_27426 = state_27382__$1;
(statearr_27395_27426[(2)] = null);

(statearr_27395_27426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (11))){
var inst_27346 = (state_27382[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27382,(10),Object,null,(9));
var inst_27355 = chs__$1.call(null,inst_27346);
var inst_27356 = done.call(null,inst_27346);
var inst_27357 = cljs.core.async.take_BANG_.call(null,inst_27355,inst_27356);
var state_27382__$1 = state_27382;
var statearr_27396_27427 = state_27382__$1;
(statearr_27396_27427[(2)] = inst_27357);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27382__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (9))){
var inst_27346 = (state_27382[(7)]);
var inst_27359 = (state_27382[(2)]);
var inst_27360 = (inst_27346 + (1));
var inst_27346__$1 = inst_27360;
var state_27382__$1 = (function (){var statearr_27397 = state_27382;
(statearr_27397[(7)] = inst_27346__$1);

(statearr_27397[(10)] = inst_27359);

return statearr_27397;
})();
var statearr_27398_27428 = state_27382__$1;
(statearr_27398_27428[(2)] = null);

(statearr_27398_27428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (5))){
var inst_27366 = (state_27382[(2)]);
var state_27382__$1 = (function (){var statearr_27399 = state_27382;
(statearr_27399[(11)] = inst_27366);

return statearr_27399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27382__$1,(12),dchan);
} else {
if((state_val_27383 === (14))){
var inst_27368 = (state_27382[(8)]);
var inst_27373 = cljs.core.apply.call(null,f,inst_27368);
var state_27382__$1 = state_27382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27382__$1,(16),out,inst_27373);
} else {
if((state_val_27383 === (16))){
var inst_27375 = (state_27382[(2)]);
var state_27382__$1 = (function (){var statearr_27400 = state_27382;
(statearr_27400[(12)] = inst_27375);

return statearr_27400;
})();
var statearr_27401_27429 = state_27382__$1;
(statearr_27401_27429[(2)] = null);

(statearr_27401_27429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (10))){
var inst_27350 = (state_27382[(2)]);
var inst_27351 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27382__$1 = (function (){var statearr_27402 = state_27382;
(statearr_27402[(13)] = inst_27350);

return statearr_27402;
})();
var statearr_27403_27430 = state_27382__$1;
(statearr_27403_27430[(2)] = inst_27351);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27382__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27383 === (8))){
var inst_27364 = (state_27382[(2)]);
var state_27382__$1 = state_27382;
var statearr_27404_27431 = state_27382__$1;
(statearr_27404_27431[(2)] = inst_27364);

(statearr_27404_27431[(1)] = (5));


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
});})(c__18136__auto___27416,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18024__auto__,c__18136__auto___27416,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27408[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_27382){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__18028__auto__ = e27409;
var statearr_27410_27432 = state_27382;
(statearr_27410_27432[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27433 = state_27382;
state_27382 = G__27433;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_27382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_27382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27416,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18138__auto__ = (function (){var statearr_27411 = f__18137__auto__.call(null);
(statearr_27411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27416);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27416,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27435 = [];
var len__7479__auto___27493 = arguments.length;
var i__7480__auto___27494 = (0);
while(true){
if((i__7480__auto___27494 < len__7479__auto___27493)){
args27435.push((arguments[i__7480__auto___27494]));

var G__27495 = (i__7480__auto___27494 + (1));
i__7480__auto___27494 = G__27495;
continue;
} else {
}
break;
}

var G__27437 = args27435.length;
switch (G__27437) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27435.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18136__auto___27497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27497,out){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27497,out){
return (function (state_27469){
var state_val_27470 = (state_27469[(1)]);
if((state_val_27470 === (7))){
var inst_27449 = (state_27469[(7)]);
var inst_27448 = (state_27469[(8)]);
var inst_27448__$1 = (state_27469[(2)]);
var inst_27449__$1 = cljs.core.nth.call(null,inst_27448__$1,(0),null);
var inst_27450 = cljs.core.nth.call(null,inst_27448__$1,(1),null);
var inst_27451 = (inst_27449__$1 == null);
var state_27469__$1 = (function (){var statearr_27471 = state_27469;
(statearr_27471[(7)] = inst_27449__$1);

(statearr_27471[(9)] = inst_27450);

(statearr_27471[(8)] = inst_27448__$1);

return statearr_27471;
})();
if(cljs.core.truth_(inst_27451)){
var statearr_27472_27498 = state_27469__$1;
(statearr_27472_27498[(1)] = (8));

} else {
var statearr_27473_27499 = state_27469__$1;
(statearr_27473_27499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (1))){
var inst_27438 = cljs.core.vec.call(null,chs);
var inst_27439 = inst_27438;
var state_27469__$1 = (function (){var statearr_27474 = state_27469;
(statearr_27474[(10)] = inst_27439);

return statearr_27474;
})();
var statearr_27475_27500 = state_27469__$1;
(statearr_27475_27500[(2)] = null);

(statearr_27475_27500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (4))){
var inst_27439 = (state_27469[(10)]);
var state_27469__$1 = state_27469;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27469__$1,(7),inst_27439);
} else {
if((state_val_27470 === (6))){
var inst_27465 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27476_27501 = state_27469__$1;
(statearr_27476_27501[(2)] = inst_27465);

(statearr_27476_27501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (3))){
var inst_27467 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27469__$1,inst_27467);
} else {
if((state_val_27470 === (2))){
var inst_27439 = (state_27469[(10)]);
var inst_27441 = cljs.core.count.call(null,inst_27439);
var inst_27442 = (inst_27441 > (0));
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27442)){
var statearr_27478_27502 = state_27469__$1;
(statearr_27478_27502[(1)] = (4));

} else {
var statearr_27479_27503 = state_27469__$1;
(statearr_27479_27503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (11))){
var inst_27439 = (state_27469[(10)]);
var inst_27458 = (state_27469[(2)]);
var tmp27477 = inst_27439;
var inst_27439__$1 = tmp27477;
var state_27469__$1 = (function (){var statearr_27480 = state_27469;
(statearr_27480[(11)] = inst_27458);

(statearr_27480[(10)] = inst_27439__$1);

return statearr_27480;
})();
var statearr_27481_27504 = state_27469__$1;
(statearr_27481_27504[(2)] = null);

(statearr_27481_27504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (9))){
var inst_27449 = (state_27469[(7)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27469__$1,(11),out,inst_27449);
} else {
if((state_val_27470 === (5))){
var inst_27463 = cljs.core.async.close_BANG_.call(null,out);
var state_27469__$1 = state_27469;
var statearr_27482_27505 = state_27469__$1;
(statearr_27482_27505[(2)] = inst_27463);

(statearr_27482_27505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (10))){
var inst_27461 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27483_27506 = state_27469__$1;
(statearr_27483_27506[(2)] = inst_27461);

(statearr_27483_27506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (8))){
var inst_27449 = (state_27469[(7)]);
var inst_27450 = (state_27469[(9)]);
var inst_27448 = (state_27469[(8)]);
var inst_27439 = (state_27469[(10)]);
var inst_27453 = (function (){var cs = inst_27439;
var vec__27444 = inst_27448;
var v = inst_27449;
var c = inst_27450;
return ((function (cs,vec__27444,v,c,inst_27449,inst_27450,inst_27448,inst_27439,state_val_27470,c__18136__auto___27497,out){
return (function (p1__27434_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27434_SHARP_);
});
;})(cs,vec__27444,v,c,inst_27449,inst_27450,inst_27448,inst_27439,state_val_27470,c__18136__auto___27497,out))
})();
var inst_27454 = cljs.core.filterv.call(null,inst_27453,inst_27439);
var inst_27439__$1 = inst_27454;
var state_27469__$1 = (function (){var statearr_27484 = state_27469;
(statearr_27484[(10)] = inst_27439__$1);

return statearr_27484;
})();
var statearr_27485_27507 = state_27469__$1;
(statearr_27485_27507[(2)] = null);

(statearr_27485_27507[(1)] = (2));


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
});})(c__18136__auto___27497,out))
;
return ((function (switch__18024__auto__,c__18136__auto___27497,out){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_27469){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__18028__auto__ = e27490;
var statearr_27491_27508 = state_27469;
(statearr_27491_27508[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27509 = state_27469;
state_27469 = G__27509;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27497,out))
})();
var state__18138__auto__ = (function (){var statearr_27492 = f__18137__auto__.call(null);
(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27497);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27497,out))
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
var args27510 = [];
var len__7479__auto___27559 = arguments.length;
var i__7480__auto___27560 = (0);
while(true){
if((i__7480__auto___27560 < len__7479__auto___27559)){
args27510.push((arguments[i__7480__auto___27560]));

var G__27561 = (i__7480__auto___27560 + (1));
i__7480__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var G__27512 = args27510.length;
switch (G__27512) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27510.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18136__auto___27563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27563,out){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27563,out){
return (function (state_27536){
var state_val_27537 = (state_27536[(1)]);
if((state_val_27537 === (7))){
var inst_27518 = (state_27536[(7)]);
var inst_27518__$1 = (state_27536[(2)]);
var inst_27519 = (inst_27518__$1 == null);
var inst_27520 = cljs.core.not.call(null,inst_27519);
var state_27536__$1 = (function (){var statearr_27538 = state_27536;
(statearr_27538[(7)] = inst_27518__$1);

return statearr_27538;
})();
if(inst_27520){
var statearr_27539_27564 = state_27536__$1;
(statearr_27539_27564[(1)] = (8));

} else {
var statearr_27540_27565 = state_27536__$1;
(statearr_27540_27565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (1))){
var inst_27513 = (0);
var state_27536__$1 = (function (){var statearr_27541 = state_27536;
(statearr_27541[(8)] = inst_27513);

return statearr_27541;
})();
var statearr_27542_27566 = state_27536__$1;
(statearr_27542_27566[(2)] = null);

(statearr_27542_27566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (4))){
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(7),ch);
} else {
if((state_val_27537 === (6))){
var inst_27531 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27543_27567 = state_27536__$1;
(statearr_27543_27567[(2)] = inst_27531);

(statearr_27543_27567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (3))){
var inst_27533 = (state_27536[(2)]);
var inst_27534 = cljs.core.async.close_BANG_.call(null,out);
var state_27536__$1 = (function (){var statearr_27544 = state_27536;
(statearr_27544[(9)] = inst_27533);

return statearr_27544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27536__$1,inst_27534);
} else {
if((state_val_27537 === (2))){
var inst_27513 = (state_27536[(8)]);
var inst_27515 = (inst_27513 < n);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27515)){
var statearr_27545_27568 = state_27536__$1;
(statearr_27545_27568[(1)] = (4));

} else {
var statearr_27546_27569 = state_27536__$1;
(statearr_27546_27569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (11))){
var inst_27513 = (state_27536[(8)]);
var inst_27523 = (state_27536[(2)]);
var inst_27524 = (inst_27513 + (1));
var inst_27513__$1 = inst_27524;
var state_27536__$1 = (function (){var statearr_27547 = state_27536;
(statearr_27547[(10)] = inst_27523);

(statearr_27547[(8)] = inst_27513__$1);

return statearr_27547;
})();
var statearr_27548_27570 = state_27536__$1;
(statearr_27548_27570[(2)] = null);

(statearr_27548_27570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (9))){
var state_27536__$1 = state_27536;
var statearr_27549_27571 = state_27536__$1;
(statearr_27549_27571[(2)] = null);

(statearr_27549_27571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (5))){
var state_27536__$1 = state_27536;
var statearr_27550_27572 = state_27536__$1;
(statearr_27550_27572[(2)] = null);

(statearr_27550_27572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (10))){
var inst_27528 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27551_27573 = state_27536__$1;
(statearr_27551_27573[(2)] = inst_27528);

(statearr_27551_27573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (8))){
var inst_27518 = (state_27536[(7)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27536__$1,(11),out,inst_27518);
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
});})(c__18136__auto___27563,out))
;
return ((function (switch__18024__auto__,c__18136__auto___27563,out){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_27555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27555[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_27555[(1)] = (1));

return statearr_27555;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_27536){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27556){if((e27556 instanceof Object)){
var ex__18028__auto__ = e27556;
var statearr_27557_27574 = state_27536;
(statearr_27557_27574[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27575 = state_27536;
state_27536 = G__27575;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_27536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_27536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27563,out))
})();
var state__18138__auto__ = (function (){var statearr_27558 = f__18137__auto__.call(null);
(statearr_27558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27563);

return statearr_27558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27563,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27583 = (function (map_LT_,f,ch,meta27584){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27584 = meta27584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27585,meta27584__$1){
var self__ = this;
var _27585__$1 = this;
return (new cljs.core.async.t_cljs$core$async27583(self__.map_LT_,self__.f,self__.ch,meta27584__$1));
});

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27585){
var self__ = this;
var _27585__$1 = this;
return self__.meta27584;
});

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27586 = (function (map_LT_,f,ch,meta27584,_,fn1,meta27587){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27584 = meta27584;
this._ = _;
this.fn1 = fn1;
this.meta27587 = meta27587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27588,meta27587__$1){
var self__ = this;
var _27588__$1 = this;
return (new cljs.core.async.t_cljs$core$async27586(self__.map_LT_,self__.f,self__.ch,self__.meta27584,self__._,self__.fn1,meta27587__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27588){
var self__ = this;
var _27588__$1 = this;
return self__.meta27587;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27586.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27576_SHARP_){
return f1.call(null,(((p1__27576_SHARP_ == null))?null:self__.f.call(null,p1__27576_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27586.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27584","meta27584",-465156089,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27583","cljs.core.async/t_cljs$core$async27583",-656330810,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27587","meta27587",-81875349,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27586";

cljs.core.async.t_cljs$core$async27586.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async27586");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27586 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27586(map_LT___$1,f__$1,ch__$1,meta27584__$1,___$2,fn1__$1,meta27587){
return (new cljs.core.async.t_cljs$core$async27586(map_LT___$1,f__$1,ch__$1,meta27584__$1,___$2,fn1__$1,meta27587));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27586(self__.map_LT_,self__.f,self__.ch,self__.meta27584,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6392__auto__ = ret;
if(cljs.core.truth_(and__6392__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27584","meta27584",-465156089,null)], null);
});

cljs.core.async.t_cljs$core$async27583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27583";

cljs.core.async.t_cljs$core$async27583.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async27583");
});

cljs.core.async.__GT_t_cljs$core$async27583 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27583(map_LT___$1,f__$1,ch__$1,meta27584){
return (new cljs.core.async.t_cljs$core$async27583(map_LT___$1,f__$1,ch__$1,meta27584));
});

}

return (new cljs.core.async.t_cljs$core$async27583(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27592 = (function (map_GT_,f,ch,meta27593){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27593 = meta27593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27594,meta27593__$1){
var self__ = this;
var _27594__$1 = this;
return (new cljs.core.async.t_cljs$core$async27592(self__.map_GT_,self__.f,self__.ch,meta27593__$1));
});

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27594){
var self__ = this;
var _27594__$1 = this;
return self__.meta27593;
});

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27593","meta27593",-1707564039,null)], null);
});

cljs.core.async.t_cljs$core$async27592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27592";

cljs.core.async.t_cljs$core$async27592.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async27592");
});

cljs.core.async.__GT_t_cljs$core$async27592 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27592(map_GT___$1,f__$1,ch__$1,meta27593){
return (new cljs.core.async.t_cljs$core$async27592(map_GT___$1,f__$1,ch__$1,meta27593));
});

}

return (new cljs.core.async.t_cljs$core$async27592(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27598 = (function (filter_GT_,p,ch,meta27599){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27599 = meta27599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27600,meta27599__$1){
var self__ = this;
var _27600__$1 = this;
return (new cljs.core.async.t_cljs$core$async27598(self__.filter_GT_,self__.p,self__.ch,meta27599__$1));
});

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27600){
var self__ = this;
var _27600__$1 = this;
return self__.meta27599;
});

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27599","meta27599",986791341,null)], null);
});

cljs.core.async.t_cljs$core$async27598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27598";

cljs.core.async.t_cljs$core$async27598.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"cljs.core.async/t_cljs$core$async27598");
});

cljs.core.async.__GT_t_cljs$core$async27598 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27598(filter_GT___$1,p__$1,ch__$1,meta27599){
return (new cljs.core.async.t_cljs$core$async27598(filter_GT___$1,p__$1,ch__$1,meta27599));
});

}

return (new cljs.core.async.t_cljs$core$async27598(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27601 = [];
var len__7479__auto___27645 = arguments.length;
var i__7480__auto___27646 = (0);
while(true){
if((i__7480__auto___27646 < len__7479__auto___27645)){
args27601.push((arguments[i__7480__auto___27646]));

var G__27647 = (i__7480__auto___27646 + (1));
i__7480__auto___27646 = G__27647;
continue;
} else {
}
break;
}

var G__27603 = args27601.length;
switch (G__27603) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27601.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18136__auto___27649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27649,out){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27649,out){
return (function (state_27624){
var state_val_27625 = (state_27624[(1)]);
if((state_val_27625 === (7))){
var inst_27620 = (state_27624[(2)]);
var state_27624__$1 = state_27624;
var statearr_27626_27650 = state_27624__$1;
(statearr_27626_27650[(2)] = inst_27620);

(statearr_27626_27650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (1))){
var state_27624__$1 = state_27624;
var statearr_27627_27651 = state_27624__$1;
(statearr_27627_27651[(2)] = null);

(statearr_27627_27651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (4))){
var inst_27606 = (state_27624[(7)]);
var inst_27606__$1 = (state_27624[(2)]);
var inst_27607 = (inst_27606__$1 == null);
var state_27624__$1 = (function (){var statearr_27628 = state_27624;
(statearr_27628[(7)] = inst_27606__$1);

return statearr_27628;
})();
if(cljs.core.truth_(inst_27607)){
var statearr_27629_27652 = state_27624__$1;
(statearr_27629_27652[(1)] = (5));

} else {
var statearr_27630_27653 = state_27624__$1;
(statearr_27630_27653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (6))){
var inst_27606 = (state_27624[(7)]);
var inst_27611 = p.call(null,inst_27606);
var state_27624__$1 = state_27624;
if(cljs.core.truth_(inst_27611)){
var statearr_27631_27654 = state_27624__$1;
(statearr_27631_27654[(1)] = (8));

} else {
var statearr_27632_27655 = state_27624__$1;
(statearr_27632_27655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (3))){
var inst_27622 = (state_27624[(2)]);
var state_27624__$1 = state_27624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27624__$1,inst_27622);
} else {
if((state_val_27625 === (2))){
var state_27624__$1 = state_27624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27624__$1,(4),ch);
} else {
if((state_val_27625 === (11))){
var inst_27614 = (state_27624[(2)]);
var state_27624__$1 = state_27624;
var statearr_27633_27656 = state_27624__$1;
(statearr_27633_27656[(2)] = inst_27614);

(statearr_27633_27656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (9))){
var state_27624__$1 = state_27624;
var statearr_27634_27657 = state_27624__$1;
(statearr_27634_27657[(2)] = null);

(statearr_27634_27657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (5))){
var inst_27609 = cljs.core.async.close_BANG_.call(null,out);
var state_27624__$1 = state_27624;
var statearr_27635_27658 = state_27624__$1;
(statearr_27635_27658[(2)] = inst_27609);

(statearr_27635_27658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (10))){
var inst_27617 = (state_27624[(2)]);
var state_27624__$1 = (function (){var statearr_27636 = state_27624;
(statearr_27636[(8)] = inst_27617);

return statearr_27636;
})();
var statearr_27637_27659 = state_27624__$1;
(statearr_27637_27659[(2)] = null);

(statearr_27637_27659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27625 === (8))){
var inst_27606 = (state_27624[(7)]);
var state_27624__$1 = state_27624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27624__$1,(11),out,inst_27606);
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
});})(c__18136__auto___27649,out))
;
return ((function (switch__18024__auto__,c__18136__auto___27649,out){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_27641 = [null,null,null,null,null,null,null,null,null];
(statearr_27641[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_27641[(1)] = (1));

return statearr_27641;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_27624){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27642){if((e27642 instanceof Object)){
var ex__18028__auto__ = e27642;
var statearr_27643_27660 = state_27624;
(statearr_27643_27660[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27661 = state_27624;
state_27624 = G__27661;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_27624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_27624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27649,out))
})();
var state__18138__auto__ = (function (){var statearr_27644 = f__18137__auto__.call(null);
(statearr_27644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27649);

return statearr_27644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27649,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27662 = [];
var len__7479__auto___27665 = arguments.length;
var i__7480__auto___27666 = (0);
while(true){
if((i__7480__auto___27666 < len__7479__auto___27665)){
args27662.push((arguments[i__7480__auto___27666]));

var G__27667 = (i__7480__auto___27666 + (1));
i__7480__auto___27666 = G__27667;
continue;
} else {
}
break;
}

var G__27664 = args27662.length;
switch (G__27664) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27662.length)].join('')));

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
var c__18136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto__){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto__){
return (function (state_27834){
var state_val_27835 = (state_27834[(1)]);
if((state_val_27835 === (7))){
var inst_27830 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27836_27877 = state_27834__$1;
(statearr_27836_27877[(2)] = inst_27830);

(statearr_27836_27877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (20))){
var inst_27800 = (state_27834[(7)]);
var inst_27811 = (state_27834[(2)]);
var inst_27812 = cljs.core.next.call(null,inst_27800);
var inst_27786 = inst_27812;
var inst_27787 = null;
var inst_27788 = (0);
var inst_27789 = (0);
var state_27834__$1 = (function (){var statearr_27837 = state_27834;
(statearr_27837[(8)] = inst_27811);

(statearr_27837[(9)] = inst_27786);

(statearr_27837[(10)] = inst_27787);

(statearr_27837[(11)] = inst_27788);

(statearr_27837[(12)] = inst_27789);

return statearr_27837;
})();
var statearr_27838_27878 = state_27834__$1;
(statearr_27838_27878[(2)] = null);

(statearr_27838_27878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (1))){
var state_27834__$1 = state_27834;
var statearr_27839_27879 = state_27834__$1;
(statearr_27839_27879[(2)] = null);

(statearr_27839_27879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (4))){
var inst_27775 = (state_27834[(13)]);
var inst_27775__$1 = (state_27834[(2)]);
var inst_27776 = (inst_27775__$1 == null);
var state_27834__$1 = (function (){var statearr_27840 = state_27834;
(statearr_27840[(13)] = inst_27775__$1);

return statearr_27840;
})();
if(cljs.core.truth_(inst_27776)){
var statearr_27841_27880 = state_27834__$1;
(statearr_27841_27880[(1)] = (5));

} else {
var statearr_27842_27881 = state_27834__$1;
(statearr_27842_27881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (15))){
var state_27834__$1 = state_27834;
var statearr_27846_27882 = state_27834__$1;
(statearr_27846_27882[(2)] = null);

(statearr_27846_27882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (21))){
var state_27834__$1 = state_27834;
var statearr_27847_27883 = state_27834__$1;
(statearr_27847_27883[(2)] = null);

(statearr_27847_27883[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (13))){
var inst_27786 = (state_27834[(9)]);
var inst_27787 = (state_27834[(10)]);
var inst_27788 = (state_27834[(11)]);
var inst_27789 = (state_27834[(12)]);
var inst_27796 = (state_27834[(2)]);
var inst_27797 = (inst_27789 + (1));
var tmp27843 = inst_27786;
var tmp27844 = inst_27787;
var tmp27845 = inst_27788;
var inst_27786__$1 = tmp27843;
var inst_27787__$1 = tmp27844;
var inst_27788__$1 = tmp27845;
var inst_27789__$1 = inst_27797;
var state_27834__$1 = (function (){var statearr_27848 = state_27834;
(statearr_27848[(9)] = inst_27786__$1);

(statearr_27848[(10)] = inst_27787__$1);

(statearr_27848[(11)] = inst_27788__$1);

(statearr_27848[(12)] = inst_27789__$1);

(statearr_27848[(14)] = inst_27796);

return statearr_27848;
})();
var statearr_27849_27884 = state_27834__$1;
(statearr_27849_27884[(2)] = null);

(statearr_27849_27884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (22))){
var state_27834__$1 = state_27834;
var statearr_27850_27885 = state_27834__$1;
(statearr_27850_27885[(2)] = null);

(statearr_27850_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (6))){
var inst_27775 = (state_27834[(13)]);
var inst_27784 = f.call(null,inst_27775);
var inst_27785 = cljs.core.seq.call(null,inst_27784);
var inst_27786 = inst_27785;
var inst_27787 = null;
var inst_27788 = (0);
var inst_27789 = (0);
var state_27834__$1 = (function (){var statearr_27851 = state_27834;
(statearr_27851[(9)] = inst_27786);

(statearr_27851[(10)] = inst_27787);

(statearr_27851[(11)] = inst_27788);

(statearr_27851[(12)] = inst_27789);

return statearr_27851;
})();
var statearr_27852_27886 = state_27834__$1;
(statearr_27852_27886[(2)] = null);

(statearr_27852_27886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (17))){
var inst_27800 = (state_27834[(7)]);
var inst_27804 = cljs.core.chunk_first.call(null,inst_27800);
var inst_27805 = cljs.core.chunk_rest.call(null,inst_27800);
var inst_27806 = cljs.core.count.call(null,inst_27804);
var inst_27786 = inst_27805;
var inst_27787 = inst_27804;
var inst_27788 = inst_27806;
var inst_27789 = (0);
var state_27834__$1 = (function (){var statearr_27853 = state_27834;
(statearr_27853[(9)] = inst_27786);

(statearr_27853[(10)] = inst_27787);

(statearr_27853[(11)] = inst_27788);

(statearr_27853[(12)] = inst_27789);

return statearr_27853;
})();
var statearr_27854_27887 = state_27834__$1;
(statearr_27854_27887[(2)] = null);

(statearr_27854_27887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (3))){
var inst_27832 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27834__$1,inst_27832);
} else {
if((state_val_27835 === (12))){
var inst_27820 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27855_27888 = state_27834__$1;
(statearr_27855_27888[(2)] = inst_27820);

(statearr_27855_27888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (2))){
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27834__$1,(4),in$);
} else {
if((state_val_27835 === (23))){
var inst_27828 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27856_27889 = state_27834__$1;
(statearr_27856_27889[(2)] = inst_27828);

(statearr_27856_27889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (19))){
var inst_27815 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27857_27890 = state_27834__$1;
(statearr_27857_27890[(2)] = inst_27815);

(statearr_27857_27890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (11))){
var inst_27786 = (state_27834[(9)]);
var inst_27800 = (state_27834[(7)]);
var inst_27800__$1 = cljs.core.seq.call(null,inst_27786);
var state_27834__$1 = (function (){var statearr_27858 = state_27834;
(statearr_27858[(7)] = inst_27800__$1);

return statearr_27858;
})();
if(inst_27800__$1){
var statearr_27859_27891 = state_27834__$1;
(statearr_27859_27891[(1)] = (14));

} else {
var statearr_27860_27892 = state_27834__$1;
(statearr_27860_27892[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (9))){
var inst_27822 = (state_27834[(2)]);
var inst_27823 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27834__$1 = (function (){var statearr_27861 = state_27834;
(statearr_27861[(15)] = inst_27822);

return statearr_27861;
})();
if(cljs.core.truth_(inst_27823)){
var statearr_27862_27893 = state_27834__$1;
(statearr_27862_27893[(1)] = (21));

} else {
var statearr_27863_27894 = state_27834__$1;
(statearr_27863_27894[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (5))){
var inst_27778 = cljs.core.async.close_BANG_.call(null,out);
var state_27834__$1 = state_27834;
var statearr_27864_27895 = state_27834__$1;
(statearr_27864_27895[(2)] = inst_27778);

(statearr_27864_27895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (14))){
var inst_27800 = (state_27834[(7)]);
var inst_27802 = cljs.core.chunked_seq_QMARK_.call(null,inst_27800);
var state_27834__$1 = state_27834;
if(inst_27802){
var statearr_27865_27896 = state_27834__$1;
(statearr_27865_27896[(1)] = (17));

} else {
var statearr_27866_27897 = state_27834__$1;
(statearr_27866_27897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (16))){
var inst_27818 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27867_27898 = state_27834__$1;
(statearr_27867_27898[(2)] = inst_27818);

(statearr_27867_27898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (10))){
var inst_27787 = (state_27834[(10)]);
var inst_27789 = (state_27834[(12)]);
var inst_27794 = cljs.core._nth.call(null,inst_27787,inst_27789);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27834__$1,(13),out,inst_27794);
} else {
if((state_val_27835 === (18))){
var inst_27800 = (state_27834[(7)]);
var inst_27809 = cljs.core.first.call(null,inst_27800);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27834__$1,(20),out,inst_27809);
} else {
if((state_val_27835 === (8))){
var inst_27788 = (state_27834[(11)]);
var inst_27789 = (state_27834[(12)]);
var inst_27791 = (inst_27789 < inst_27788);
var inst_27792 = inst_27791;
var state_27834__$1 = state_27834;
if(cljs.core.truth_(inst_27792)){
var statearr_27868_27899 = state_27834__$1;
(statearr_27868_27899[(1)] = (10));

} else {
var statearr_27869_27900 = state_27834__$1;
(statearr_27869_27900[(1)] = (11));

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
});})(c__18136__auto__))
;
return ((function (switch__18024__auto__,c__18136__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18025__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18025__auto____0 = (function (){
var statearr_27873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27873[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18025__auto__);

(statearr_27873[(1)] = (1));

return statearr_27873;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18025__auto____1 = (function (state_27834){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27874){if((e27874 instanceof Object)){
var ex__18028__auto__ = e27874;
var statearr_27875_27901 = state_27834;
(statearr_27875_27901[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27902 = state_27834;
state_27834 = G__27902;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18025__auto__ = function(state_27834){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18025__auto____1.call(this,state_27834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18025__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18025__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto__))
})();
var state__18138__auto__ = (function (){var statearr_27876 = f__18137__auto__.call(null);
(statearr_27876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto__);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto__))
);

return c__18136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27903 = [];
var len__7479__auto___27906 = arguments.length;
var i__7480__auto___27907 = (0);
while(true){
if((i__7480__auto___27907 < len__7479__auto___27906)){
args27903.push((arguments[i__7480__auto___27907]));

var G__27908 = (i__7480__auto___27907 + (1));
i__7480__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var G__27905 = args27903.length;
switch (G__27905) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27903.length)].join('')));

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
var args27910 = [];
var len__7479__auto___27913 = arguments.length;
var i__7480__auto___27914 = (0);
while(true){
if((i__7480__auto___27914 < len__7479__auto___27913)){
args27910.push((arguments[i__7480__auto___27914]));

var G__27915 = (i__7480__auto___27914 + (1));
i__7480__auto___27914 = G__27915;
continue;
} else {
}
break;
}

var G__27912 = args27910.length;
switch (G__27912) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27910.length)].join('')));

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
var args27917 = [];
var len__7479__auto___27968 = arguments.length;
var i__7480__auto___27969 = (0);
while(true){
if((i__7480__auto___27969 < len__7479__auto___27968)){
args27917.push((arguments[i__7480__auto___27969]));

var G__27970 = (i__7480__auto___27969 + (1));
i__7480__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var G__27919 = args27917.length;
switch (G__27919) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27917.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18136__auto___27972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___27972,out){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___27972,out){
return (function (state_27943){
var state_val_27944 = (state_27943[(1)]);
if((state_val_27944 === (7))){
var inst_27938 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27945_27973 = state_27943__$1;
(statearr_27945_27973[(2)] = inst_27938);

(statearr_27945_27973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (1))){
var inst_27920 = null;
var state_27943__$1 = (function (){var statearr_27946 = state_27943;
(statearr_27946[(7)] = inst_27920);

return statearr_27946;
})();
var statearr_27947_27974 = state_27943__$1;
(statearr_27947_27974[(2)] = null);

(statearr_27947_27974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (4))){
var inst_27923 = (state_27943[(8)]);
var inst_27923__$1 = (state_27943[(2)]);
var inst_27924 = (inst_27923__$1 == null);
var inst_27925 = cljs.core.not.call(null,inst_27924);
var state_27943__$1 = (function (){var statearr_27948 = state_27943;
(statearr_27948[(8)] = inst_27923__$1);

return statearr_27948;
})();
if(inst_27925){
var statearr_27949_27975 = state_27943__$1;
(statearr_27949_27975[(1)] = (5));

} else {
var statearr_27950_27976 = state_27943__$1;
(statearr_27950_27976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (6))){
var state_27943__$1 = state_27943;
var statearr_27951_27977 = state_27943__$1;
(statearr_27951_27977[(2)] = null);

(statearr_27951_27977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (3))){
var inst_27940 = (state_27943[(2)]);
var inst_27941 = cljs.core.async.close_BANG_.call(null,out);
var state_27943__$1 = (function (){var statearr_27952 = state_27943;
(statearr_27952[(9)] = inst_27940);

return statearr_27952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27943__$1,inst_27941);
} else {
if((state_val_27944 === (2))){
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27943__$1,(4),ch);
} else {
if((state_val_27944 === (11))){
var inst_27923 = (state_27943[(8)]);
var inst_27932 = (state_27943[(2)]);
var inst_27920 = inst_27923;
var state_27943__$1 = (function (){var statearr_27953 = state_27943;
(statearr_27953[(10)] = inst_27932);

(statearr_27953[(7)] = inst_27920);

return statearr_27953;
})();
var statearr_27954_27978 = state_27943__$1;
(statearr_27954_27978[(2)] = null);

(statearr_27954_27978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (9))){
var inst_27923 = (state_27943[(8)]);
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27943__$1,(11),out,inst_27923);
} else {
if((state_val_27944 === (5))){
var inst_27923 = (state_27943[(8)]);
var inst_27920 = (state_27943[(7)]);
var inst_27927 = cljs.core._EQ_.call(null,inst_27923,inst_27920);
var state_27943__$1 = state_27943;
if(inst_27927){
var statearr_27956_27979 = state_27943__$1;
(statearr_27956_27979[(1)] = (8));

} else {
var statearr_27957_27980 = state_27943__$1;
(statearr_27957_27980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (10))){
var inst_27935 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27958_27981 = state_27943__$1;
(statearr_27958_27981[(2)] = inst_27935);

(statearr_27958_27981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (8))){
var inst_27920 = (state_27943[(7)]);
var tmp27955 = inst_27920;
var inst_27920__$1 = tmp27955;
var state_27943__$1 = (function (){var statearr_27959 = state_27943;
(statearr_27959[(7)] = inst_27920__$1);

return statearr_27959;
})();
var statearr_27960_27982 = state_27943__$1;
(statearr_27960_27982[(2)] = null);

(statearr_27960_27982[(1)] = (2));


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
});})(c__18136__auto___27972,out))
;
return ((function (switch__18024__auto__,c__18136__auto___27972,out){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_27964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27964[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_27964[(1)] = (1));

return statearr_27964;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_27943){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_27943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e27965){if((e27965 instanceof Object)){
var ex__18028__auto__ = e27965;
var statearr_27966_27983 = state_27943;
(statearr_27966_27983[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27984 = state_27943;
state_27943 = G__27984;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_27943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_27943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___27972,out))
})();
var state__18138__auto__ = (function (){var statearr_27967 = f__18137__auto__.call(null);
(statearr_27967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___27972);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___27972,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27985 = [];
var len__7479__auto___28055 = arguments.length;
var i__7480__auto___28056 = (0);
while(true){
if((i__7480__auto___28056 < len__7479__auto___28055)){
args27985.push((arguments[i__7480__auto___28056]));

var G__28057 = (i__7480__auto___28056 + (1));
i__7480__auto___28056 = G__28057;
continue;
} else {
}
break;
}

var G__27987 = args27985.length;
switch (G__27987) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27985.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18136__auto___28059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___28059,out){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___28059,out){
return (function (state_28025){
var state_val_28026 = (state_28025[(1)]);
if((state_val_28026 === (7))){
var inst_28021 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28027_28060 = state_28025__$1;
(statearr_28027_28060[(2)] = inst_28021);

(statearr_28027_28060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (1))){
var inst_27988 = (new Array(n));
var inst_27989 = inst_27988;
var inst_27990 = (0);
var state_28025__$1 = (function (){var statearr_28028 = state_28025;
(statearr_28028[(7)] = inst_27989);

(statearr_28028[(8)] = inst_27990);

return statearr_28028;
})();
var statearr_28029_28061 = state_28025__$1;
(statearr_28029_28061[(2)] = null);

(statearr_28029_28061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (4))){
var inst_27993 = (state_28025[(9)]);
var inst_27993__$1 = (state_28025[(2)]);
var inst_27994 = (inst_27993__$1 == null);
var inst_27995 = cljs.core.not.call(null,inst_27994);
var state_28025__$1 = (function (){var statearr_28030 = state_28025;
(statearr_28030[(9)] = inst_27993__$1);

return statearr_28030;
})();
if(inst_27995){
var statearr_28031_28062 = state_28025__$1;
(statearr_28031_28062[(1)] = (5));

} else {
var statearr_28032_28063 = state_28025__$1;
(statearr_28032_28063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (15))){
var inst_28015 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28033_28064 = state_28025__$1;
(statearr_28033_28064[(2)] = inst_28015);

(statearr_28033_28064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (13))){
var state_28025__$1 = state_28025;
var statearr_28034_28065 = state_28025__$1;
(statearr_28034_28065[(2)] = null);

(statearr_28034_28065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (6))){
var inst_27990 = (state_28025[(8)]);
var inst_28011 = (inst_27990 > (0));
var state_28025__$1 = state_28025;
if(cljs.core.truth_(inst_28011)){
var statearr_28035_28066 = state_28025__$1;
(statearr_28035_28066[(1)] = (12));

} else {
var statearr_28036_28067 = state_28025__$1;
(statearr_28036_28067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (3))){
var inst_28023 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28025__$1,inst_28023);
} else {
if((state_val_28026 === (12))){
var inst_27989 = (state_28025[(7)]);
var inst_28013 = cljs.core.vec.call(null,inst_27989);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28025__$1,(15),out,inst_28013);
} else {
if((state_val_28026 === (2))){
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28025__$1,(4),ch);
} else {
if((state_val_28026 === (11))){
var inst_28005 = (state_28025[(2)]);
var inst_28006 = (new Array(n));
var inst_27989 = inst_28006;
var inst_27990 = (0);
var state_28025__$1 = (function (){var statearr_28037 = state_28025;
(statearr_28037[(7)] = inst_27989);

(statearr_28037[(8)] = inst_27990);

(statearr_28037[(10)] = inst_28005);

return statearr_28037;
})();
var statearr_28038_28068 = state_28025__$1;
(statearr_28038_28068[(2)] = null);

(statearr_28038_28068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (9))){
var inst_27989 = (state_28025[(7)]);
var inst_28003 = cljs.core.vec.call(null,inst_27989);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28025__$1,(11),out,inst_28003);
} else {
if((state_val_28026 === (5))){
var inst_27989 = (state_28025[(7)]);
var inst_27998 = (state_28025[(11)]);
var inst_27993 = (state_28025[(9)]);
var inst_27990 = (state_28025[(8)]);
var inst_27997 = (inst_27989[inst_27990] = inst_27993);
var inst_27998__$1 = (inst_27990 + (1));
var inst_27999 = (inst_27998__$1 < n);
var state_28025__$1 = (function (){var statearr_28039 = state_28025;
(statearr_28039[(11)] = inst_27998__$1);

(statearr_28039[(12)] = inst_27997);

return statearr_28039;
})();
if(cljs.core.truth_(inst_27999)){
var statearr_28040_28069 = state_28025__$1;
(statearr_28040_28069[(1)] = (8));

} else {
var statearr_28041_28070 = state_28025__$1;
(statearr_28041_28070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (14))){
var inst_28018 = (state_28025[(2)]);
var inst_28019 = cljs.core.async.close_BANG_.call(null,out);
var state_28025__$1 = (function (){var statearr_28043 = state_28025;
(statearr_28043[(13)] = inst_28018);

return statearr_28043;
})();
var statearr_28044_28071 = state_28025__$1;
(statearr_28044_28071[(2)] = inst_28019);

(statearr_28044_28071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (10))){
var inst_28009 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28045_28072 = state_28025__$1;
(statearr_28045_28072[(2)] = inst_28009);

(statearr_28045_28072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (8))){
var inst_27989 = (state_28025[(7)]);
var inst_27998 = (state_28025[(11)]);
var tmp28042 = inst_27989;
var inst_27989__$1 = tmp28042;
var inst_27990 = inst_27998;
var state_28025__$1 = (function (){var statearr_28046 = state_28025;
(statearr_28046[(7)] = inst_27989__$1);

(statearr_28046[(8)] = inst_27990);

return statearr_28046;
})();
var statearr_28047_28073 = state_28025__$1;
(statearr_28047_28073[(2)] = null);

(statearr_28047_28073[(1)] = (2));


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
});})(c__18136__auto___28059,out))
;
return ((function (switch__18024__auto__,c__18136__auto___28059,out){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_28051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28051[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_28051[(1)] = (1));

return statearr_28051;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_28025){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_28025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e28052){if((e28052 instanceof Object)){
var ex__18028__auto__ = e28052;
var statearr_28053_28074 = state_28025;
(statearr_28053_28074[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28075 = state_28025;
state_28025 = G__28075;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_28025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_28025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___28059,out))
})();
var state__18138__auto__ = (function (){var statearr_28054 = f__18137__auto__.call(null);
(statearr_28054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___28059);

return statearr_28054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___28059,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28076 = [];
var len__7479__auto___28150 = arguments.length;
var i__7480__auto___28151 = (0);
while(true){
if((i__7480__auto___28151 < len__7479__auto___28150)){
args28076.push((arguments[i__7480__auto___28151]));

var G__28152 = (i__7480__auto___28151 + (1));
i__7480__auto___28151 = G__28152;
continue;
} else {
}
break;
}

var G__28078 = args28076.length;
switch (G__28078) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28076.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18136__auto___28154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto___28154,out){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto___28154,out){
return (function (state_28120){
var state_val_28121 = (state_28120[(1)]);
if((state_val_28121 === (7))){
var inst_28116 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28122_28155 = state_28120__$1;
(statearr_28122_28155[(2)] = inst_28116);

(statearr_28122_28155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (1))){
var inst_28079 = [];
var inst_28080 = inst_28079;
var inst_28081 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28120__$1 = (function (){var statearr_28123 = state_28120;
(statearr_28123[(7)] = inst_28080);

(statearr_28123[(8)] = inst_28081);

return statearr_28123;
})();
var statearr_28124_28156 = state_28120__$1;
(statearr_28124_28156[(2)] = null);

(statearr_28124_28156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (4))){
var inst_28084 = (state_28120[(9)]);
var inst_28084__$1 = (state_28120[(2)]);
var inst_28085 = (inst_28084__$1 == null);
var inst_28086 = cljs.core.not.call(null,inst_28085);
var state_28120__$1 = (function (){var statearr_28125 = state_28120;
(statearr_28125[(9)] = inst_28084__$1);

return statearr_28125;
})();
if(inst_28086){
var statearr_28126_28157 = state_28120__$1;
(statearr_28126_28157[(1)] = (5));

} else {
var statearr_28127_28158 = state_28120__$1;
(statearr_28127_28158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (15))){
var inst_28110 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28128_28159 = state_28120__$1;
(statearr_28128_28159[(2)] = inst_28110);

(statearr_28128_28159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (13))){
var state_28120__$1 = state_28120;
var statearr_28129_28160 = state_28120__$1;
(statearr_28129_28160[(2)] = null);

(statearr_28129_28160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (6))){
var inst_28080 = (state_28120[(7)]);
var inst_28105 = inst_28080.length;
var inst_28106 = (inst_28105 > (0));
var state_28120__$1 = state_28120;
if(cljs.core.truth_(inst_28106)){
var statearr_28130_28161 = state_28120__$1;
(statearr_28130_28161[(1)] = (12));

} else {
var statearr_28131_28162 = state_28120__$1;
(statearr_28131_28162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (3))){
var inst_28118 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28120__$1,inst_28118);
} else {
if((state_val_28121 === (12))){
var inst_28080 = (state_28120[(7)]);
var inst_28108 = cljs.core.vec.call(null,inst_28080);
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28120__$1,(15),out,inst_28108);
} else {
if((state_val_28121 === (2))){
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28120__$1,(4),ch);
} else {
if((state_val_28121 === (11))){
var inst_28088 = (state_28120[(10)]);
var inst_28084 = (state_28120[(9)]);
var inst_28098 = (state_28120[(2)]);
var inst_28099 = [];
var inst_28100 = inst_28099.push(inst_28084);
var inst_28080 = inst_28099;
var inst_28081 = inst_28088;
var state_28120__$1 = (function (){var statearr_28132 = state_28120;
(statearr_28132[(7)] = inst_28080);

(statearr_28132[(8)] = inst_28081);

(statearr_28132[(11)] = inst_28098);

(statearr_28132[(12)] = inst_28100);

return statearr_28132;
})();
var statearr_28133_28163 = state_28120__$1;
(statearr_28133_28163[(2)] = null);

(statearr_28133_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (9))){
var inst_28080 = (state_28120[(7)]);
var inst_28096 = cljs.core.vec.call(null,inst_28080);
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28120__$1,(11),out,inst_28096);
} else {
if((state_val_28121 === (5))){
var inst_28088 = (state_28120[(10)]);
var inst_28084 = (state_28120[(9)]);
var inst_28081 = (state_28120[(8)]);
var inst_28088__$1 = f.call(null,inst_28084);
var inst_28089 = cljs.core._EQ_.call(null,inst_28088__$1,inst_28081);
var inst_28090 = cljs.core.keyword_identical_QMARK_.call(null,inst_28081,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28091 = (inst_28089) || (inst_28090);
var state_28120__$1 = (function (){var statearr_28134 = state_28120;
(statearr_28134[(10)] = inst_28088__$1);

return statearr_28134;
})();
if(cljs.core.truth_(inst_28091)){
var statearr_28135_28164 = state_28120__$1;
(statearr_28135_28164[(1)] = (8));

} else {
var statearr_28136_28165 = state_28120__$1;
(statearr_28136_28165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (14))){
var inst_28113 = (state_28120[(2)]);
var inst_28114 = cljs.core.async.close_BANG_.call(null,out);
var state_28120__$1 = (function (){var statearr_28138 = state_28120;
(statearr_28138[(13)] = inst_28113);

return statearr_28138;
})();
var statearr_28139_28166 = state_28120__$1;
(statearr_28139_28166[(2)] = inst_28114);

(statearr_28139_28166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (10))){
var inst_28103 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28140_28167 = state_28120__$1;
(statearr_28140_28167[(2)] = inst_28103);

(statearr_28140_28167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (8))){
var inst_28080 = (state_28120[(7)]);
var inst_28088 = (state_28120[(10)]);
var inst_28084 = (state_28120[(9)]);
var inst_28093 = inst_28080.push(inst_28084);
var tmp28137 = inst_28080;
var inst_28080__$1 = tmp28137;
var inst_28081 = inst_28088;
var state_28120__$1 = (function (){var statearr_28141 = state_28120;
(statearr_28141[(7)] = inst_28080__$1);

(statearr_28141[(8)] = inst_28081);

(statearr_28141[(14)] = inst_28093);

return statearr_28141;
})();
var statearr_28142_28168 = state_28120__$1;
(statearr_28142_28168[(2)] = null);

(statearr_28142_28168[(1)] = (2));


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
});})(c__18136__auto___28154,out))
;
return ((function (switch__18024__auto__,c__18136__auto___28154,out){
return (function() {
var cljs$core$async$state_machine__18025__auto__ = null;
var cljs$core$async$state_machine__18025__auto____0 = (function (){
var statearr_28146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28146[(0)] = cljs$core$async$state_machine__18025__auto__);

(statearr_28146[(1)] = (1));

return statearr_28146;
});
var cljs$core$async$state_machine__18025__auto____1 = (function (state_28120){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_28120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e28147){if((e28147 instanceof Object)){
var ex__18028__auto__ = e28147;
var statearr_28148_28169 = state_28120;
(statearr_28148_28169[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28170 = state_28120;
state_28120 = G__28170;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
cljs$core$async$state_machine__18025__auto__ = function(state_28120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18025__auto____1.call(this,state_28120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18025__auto____0;
cljs$core$async$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18025__auto____1;
return cljs$core$async$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto___28154,out))
})();
var state__18138__auto__ = (function (){var statearr_28149 = f__18137__auto__.call(null);
(statearr_28149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto___28154);

return statearr_28149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto___28154,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map