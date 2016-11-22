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
var args58777 = [];
var len__26007__auto___58783 = arguments.length;
var i__26008__auto___58784 = (0);
while(true){
if((i__26008__auto___58784 < len__26007__auto___58783)){
args58777.push((arguments[i__26008__auto___58784]));

var G__58785 = (i__26008__auto___58784 + (1));
i__26008__auto___58784 = G__58785;
continue;
} else {
}
break;
}

var G__58779 = args58777.length;
switch (G__58779) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58777.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async58780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58780 = (function (f,blockable,meta58781){
this.f = f;
this.blockable = blockable;
this.meta58781 = meta58781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58782,meta58781__$1){
var self__ = this;
var _58782__$1 = this;
return (new cljs.core.async.t_cljs$core$async58780(self__.f,self__.blockable,meta58781__$1));
});

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58782){
var self__ = this;
var _58782__$1 = this;
return self__.meta58781;
});

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async58780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58781","meta58781",-820451778,null)], null);
});

cljs.core.async.t_cljs$core$async58780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58780";

cljs.core.async.t_cljs$core$async58780.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async58780");
});

cljs.core.async.__GT_t_cljs$core$async58780 = (function cljs$core$async$__GT_t_cljs$core$async58780(f__$1,blockable__$1,meta58781){
return (new cljs.core.async.t_cljs$core$async58780(f__$1,blockable__$1,meta58781));
});

}

return (new cljs.core.async.t_cljs$core$async58780(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args58789 = [];
var len__26007__auto___58792 = arguments.length;
var i__26008__auto___58793 = (0);
while(true){
if((i__26008__auto___58793 < len__26007__auto___58792)){
args58789.push((arguments[i__26008__auto___58793]));

var G__58794 = (i__26008__auto___58793 + (1));
i__26008__auto___58793 = G__58794;
continue;
} else {
}
break;
}

var G__58791 = args58789.length;
switch (G__58791) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58789.length)].join('')));

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
var args58796 = [];
var len__26007__auto___58799 = arguments.length;
var i__26008__auto___58800 = (0);
while(true){
if((i__26008__auto___58800 < len__26007__auto___58799)){
args58796.push((arguments[i__26008__auto___58800]));

var G__58801 = (i__26008__auto___58800 + (1));
i__26008__auto___58800 = G__58801;
continue;
} else {
}
break;
}

var G__58798 = args58796.length;
switch (G__58798) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58796.length)].join('')));

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
var args58803 = [];
var len__26007__auto___58806 = arguments.length;
var i__26008__auto___58807 = (0);
while(true){
if((i__26008__auto___58807 < len__26007__auto___58806)){
args58803.push((arguments[i__26008__auto___58807]));

var G__58808 = (i__26008__auto___58807 + (1));
i__26008__auto___58807 = G__58808;
continue;
} else {
}
break;
}

var G__58805 = args58803.length;
switch (G__58805) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58803.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_58810 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_58810);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_58810,ret){
return (function (){
return fn1.call(null,val_58810);
});})(val_58810,ret))
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
var args58811 = [];
var len__26007__auto___58814 = arguments.length;
var i__26008__auto___58815 = (0);
while(true){
if((i__26008__auto___58815 < len__26007__auto___58814)){
args58811.push((arguments[i__26008__auto___58815]));

var G__58816 = (i__26008__auto___58815 + (1));
i__26008__auto___58815 = G__58816;
continue;
} else {
}
break;
}

var G__58813 = args58811.length;
switch (G__58813) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58811.length)].join('')));

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
var n__25817__auto___58818 = n;
var x_58819 = (0);
while(true){
if((x_58819 < n__25817__auto___58818)){
(a[x_58819] = (0));

var G__58820 = (x_58819 + (1));
x_58819 = G__58820;
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

var G__58821 = (i + (1));
i = G__58821;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async58825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58825 = (function (flag,meta58826){
this.flag = flag;
this.meta58826 = meta58826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_58827,meta58826__$1){
var self__ = this;
var _58827__$1 = this;
return (new cljs.core.async.t_cljs$core$async58825(self__.flag,meta58826__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async58825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_58827){
var self__ = this;
var _58827__$1 = this;
return self__.meta58826;
});})(flag))
;

cljs.core.async.t_cljs$core$async58825.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async58825.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58825.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58826","meta58826",-621646857,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async58825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58825";

cljs.core.async.t_cljs$core$async58825.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async58825");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async58825 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58825(flag__$1,meta58826){
return (new cljs.core.async.t_cljs$core$async58825(flag__$1,meta58826));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async58825(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async58831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58831 = (function (flag,cb,meta58832){
this.flag = flag;
this.cb = cb;
this.meta58832 = meta58832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58833,meta58832__$1){
var self__ = this;
var _58833__$1 = this;
return (new cljs.core.async.t_cljs$core$async58831(self__.flag,self__.cb,meta58832__$1));
});

cljs.core.async.t_cljs$core$async58831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58833){
var self__ = this;
var _58833__$1 = this;
return self__.meta58832;
});

cljs.core.async.t_cljs$core$async58831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async58831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async58831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58832","meta58832",844275200,null)], null);
});

cljs.core.async.t_cljs$core$async58831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58831";

cljs.core.async.t_cljs$core$async58831.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async58831");
});

cljs.core.async.__GT_t_cljs$core$async58831 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58831(flag__$1,cb__$1,meta58832){
return (new cljs.core.async.t_cljs$core$async58831(flag__$1,cb__$1,meta58832));
});

}

return (new cljs.core.async.t_cljs$core$async58831(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58834_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58834_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58835_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58835_SHARP_,port], null));
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
var G__58836 = (i + (1));
i = G__58836;
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
var len__26007__auto___58842 = arguments.length;
var i__26008__auto___58843 = (0);
while(true){
if((i__26008__auto___58843 < len__26007__auto___58842)){
args__26014__auto__.push((arguments[i__26008__auto___58843]));

var G__58844 = (i__26008__auto___58843 + (1));
i__26008__auto___58843 = G__58844;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((1) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26015__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58839){
var map__58840 = p__58839;
var map__58840__$1 = ((((!((map__58840 == null)))?((((map__58840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58840):map__58840);
var opts = map__58840__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58837){
var G__58838 = cljs.core.first.call(null,seq58837);
var seq58837__$1 = cljs.core.next.call(null,seq58837);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58838,seq58837__$1);
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
var args58845 = [];
var len__26007__auto___58895 = arguments.length;
var i__26008__auto___58896 = (0);
while(true){
if((i__26008__auto___58896 < len__26007__auto___58895)){
args58845.push((arguments[i__26008__auto___58896]));

var G__58897 = (i__26008__auto___58896 + (1));
i__26008__auto___58896 = G__58897;
continue;
} else {
}
break;
}

var G__58847 = args58845.length;
switch (G__58847) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58845.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28998__auto___58899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___58899){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___58899){
return (function (state_58871){
var state_val_58872 = (state_58871[(1)]);
if((state_val_58872 === (7))){
var inst_58867 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58873_58900 = state_58871__$1;
(statearr_58873_58900[(2)] = inst_58867);

(statearr_58873_58900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (1))){
var state_58871__$1 = state_58871;
var statearr_58874_58901 = state_58871__$1;
(statearr_58874_58901[(2)] = null);

(statearr_58874_58901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (4))){
var inst_58850 = (state_58871[(7)]);
var inst_58850__$1 = (state_58871[(2)]);
var inst_58851 = (inst_58850__$1 == null);
var state_58871__$1 = (function (){var statearr_58875 = state_58871;
(statearr_58875[(7)] = inst_58850__$1);

return statearr_58875;
})();
if(cljs.core.truth_(inst_58851)){
var statearr_58876_58902 = state_58871__$1;
(statearr_58876_58902[(1)] = (5));

} else {
var statearr_58877_58903 = state_58871__$1;
(statearr_58877_58903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (13))){
var state_58871__$1 = state_58871;
var statearr_58878_58904 = state_58871__$1;
(statearr_58878_58904[(2)] = null);

(statearr_58878_58904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (6))){
var inst_58850 = (state_58871[(7)]);
var state_58871__$1 = state_58871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58871__$1,(11),to,inst_58850);
} else {
if((state_val_58872 === (3))){
var inst_58869 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58871__$1,inst_58869);
} else {
if((state_val_58872 === (12))){
var state_58871__$1 = state_58871;
var statearr_58879_58905 = state_58871__$1;
(statearr_58879_58905[(2)] = null);

(statearr_58879_58905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (2))){
var state_58871__$1 = state_58871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58871__$1,(4),from);
} else {
if((state_val_58872 === (11))){
var inst_58860 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
if(cljs.core.truth_(inst_58860)){
var statearr_58880_58906 = state_58871__$1;
(statearr_58880_58906[(1)] = (12));

} else {
var statearr_58881_58907 = state_58871__$1;
(statearr_58881_58907[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (9))){
var state_58871__$1 = state_58871;
var statearr_58882_58908 = state_58871__$1;
(statearr_58882_58908[(2)] = null);

(statearr_58882_58908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (5))){
var state_58871__$1 = state_58871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58883_58909 = state_58871__$1;
(statearr_58883_58909[(1)] = (8));

} else {
var statearr_58884_58910 = state_58871__$1;
(statearr_58884_58910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (14))){
var inst_58865 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58885_58911 = state_58871__$1;
(statearr_58885_58911[(2)] = inst_58865);

(statearr_58885_58911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (10))){
var inst_58857 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58886_58912 = state_58871__$1;
(statearr_58886_58912[(2)] = inst_58857);

(statearr_58886_58912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58872 === (8))){
var inst_58854 = cljs.core.async.close_BANG_.call(null,to);
var state_58871__$1 = state_58871;
var statearr_58887_58913 = state_58871__$1;
(statearr_58887_58913[(2)] = inst_58854);

(statearr_58887_58913[(1)] = (10));


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
});})(c__28998__auto___58899))
;
return ((function (switch__28886__auto__,c__28998__auto___58899){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_58891 = [null,null,null,null,null,null,null,null];
(statearr_58891[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_58891[(1)] = (1));

return statearr_58891;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_58871){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_58871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e58892){if((e58892 instanceof Object)){
var ex__28890__auto__ = e58892;
var statearr_58893_58914 = state_58871;
(statearr_58893_58914[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58915 = state_58871;
state_58871 = G__58915;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_58871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_58871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___58899))
})();
var state__29000__auto__ = (function (){var statearr_58894 = f__28999__auto__.call(null);
(statearr_58894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___58899);

return statearr_58894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___58899))
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
return (function (p__59103){
var vec__59104 = p__59103;
var v = cljs.core.nth.call(null,vec__59104,(0),null);
var p = cljs.core.nth.call(null,vec__59104,(1),null);
var job = vec__59104;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28998__auto___59290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___59290,res,vec__59104,v,p,job,jobs,results){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___59290,res,vec__59104,v,p,job,jobs,results){
return (function (state_59111){
var state_val_59112 = (state_59111[(1)]);
if((state_val_59112 === (1))){
var state_59111__$1 = state_59111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59111__$1,(2),res,v);
} else {
if((state_val_59112 === (2))){
var inst_59108 = (state_59111[(2)]);
var inst_59109 = cljs.core.async.close_BANG_.call(null,res);
var state_59111__$1 = (function (){var statearr_59113 = state_59111;
(statearr_59113[(7)] = inst_59108);

return statearr_59113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59111__$1,inst_59109);
} else {
return null;
}
}
});})(c__28998__auto___59290,res,vec__59104,v,p,job,jobs,results))
;
return ((function (switch__28886__auto__,c__28998__auto___59290,res,vec__59104,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_59117 = [null,null,null,null,null,null,null,null];
(statearr_59117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_59117[(1)] = (1));

return statearr_59117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_59111){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59118){if((e59118 instanceof Object)){
var ex__28890__auto__ = e59118;
var statearr_59119_59291 = state_59111;
(statearr_59119_59291[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59292 = state_59111;
state_59111 = G__59292;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_59111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_59111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___59290,res,vec__59104,v,p,job,jobs,results))
})();
var state__29000__auto__ = (function (){var statearr_59120 = f__28999__auto__.call(null);
(statearr_59120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___59290);

return statearr_59120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___59290,res,vec__59104,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__59121){
var vec__59122 = p__59121;
var v = cljs.core.nth.call(null,vec__59122,(0),null);
var p = cljs.core.nth.call(null,vec__59122,(1),null);
var job = vec__59122;
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
var n__25817__auto___59293 = n;
var __59294 = (0);
while(true){
if((__59294 < n__25817__auto___59293)){
var G__59125_59295 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__59125_59295) {
case "compute":
var c__28998__auto___59297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59294,c__28998__auto___59297,G__59125_59295,n__25817__auto___59293,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (__59294,c__28998__auto___59297,G__59125_59295,n__25817__auto___59293,jobs,results,process,async){
return (function (state_59138){
var state_val_59139 = (state_59138[(1)]);
if((state_val_59139 === (1))){
var state_59138__$1 = state_59138;
var statearr_59140_59298 = state_59138__$1;
(statearr_59140_59298[(2)] = null);

(statearr_59140_59298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59139 === (2))){
var state_59138__$1 = state_59138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59138__$1,(4),jobs);
} else {
if((state_val_59139 === (3))){
var inst_59136 = (state_59138[(2)]);
var state_59138__$1 = state_59138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59138__$1,inst_59136);
} else {
if((state_val_59139 === (4))){
var inst_59128 = (state_59138[(2)]);
var inst_59129 = process.call(null,inst_59128);
var state_59138__$1 = state_59138;
if(cljs.core.truth_(inst_59129)){
var statearr_59141_59299 = state_59138__$1;
(statearr_59141_59299[(1)] = (5));

} else {
var statearr_59142_59300 = state_59138__$1;
(statearr_59142_59300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59139 === (5))){
var state_59138__$1 = state_59138;
var statearr_59143_59301 = state_59138__$1;
(statearr_59143_59301[(2)] = null);

(statearr_59143_59301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59139 === (6))){
var state_59138__$1 = state_59138;
var statearr_59144_59302 = state_59138__$1;
(statearr_59144_59302[(2)] = null);

(statearr_59144_59302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59139 === (7))){
var inst_59134 = (state_59138[(2)]);
var state_59138__$1 = state_59138;
var statearr_59145_59303 = state_59138__$1;
(statearr_59145_59303[(2)] = inst_59134);

(statearr_59145_59303[(1)] = (3));


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
});})(__59294,c__28998__auto___59297,G__59125_59295,n__25817__auto___59293,jobs,results,process,async))
;
return ((function (__59294,switch__28886__auto__,c__28998__auto___59297,G__59125_59295,n__25817__auto___59293,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_59149 = [null,null,null,null,null,null,null];
(statearr_59149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_59149[(1)] = (1));

return statearr_59149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_59138){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59150){if((e59150 instanceof Object)){
var ex__28890__auto__ = e59150;
var statearr_59151_59304 = state_59138;
(statearr_59151_59304[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59305 = state_59138;
state_59138 = G__59305;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_59138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_59138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(__59294,switch__28886__auto__,c__28998__auto___59297,G__59125_59295,n__25817__auto___59293,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_59152 = f__28999__auto__.call(null);
(statearr_59152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___59297);

return statearr_59152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(__59294,c__28998__auto___59297,G__59125_59295,n__25817__auto___59293,jobs,results,process,async))
);


break;
case "async":
var c__28998__auto___59306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59294,c__28998__auto___59306,G__59125_59295,n__25817__auto___59293,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (__59294,c__28998__auto___59306,G__59125_59295,n__25817__auto___59293,jobs,results,process,async){
return (function (state_59165){
var state_val_59166 = (state_59165[(1)]);
if((state_val_59166 === (1))){
var state_59165__$1 = state_59165;
var statearr_59167_59307 = state_59165__$1;
(statearr_59167_59307[(2)] = null);

(statearr_59167_59307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59166 === (2))){
var state_59165__$1 = state_59165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59165__$1,(4),jobs);
} else {
if((state_val_59166 === (3))){
var inst_59163 = (state_59165[(2)]);
var state_59165__$1 = state_59165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59165__$1,inst_59163);
} else {
if((state_val_59166 === (4))){
var inst_59155 = (state_59165[(2)]);
var inst_59156 = async.call(null,inst_59155);
var state_59165__$1 = state_59165;
if(cljs.core.truth_(inst_59156)){
var statearr_59168_59308 = state_59165__$1;
(statearr_59168_59308[(1)] = (5));

} else {
var statearr_59169_59309 = state_59165__$1;
(statearr_59169_59309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59166 === (5))){
var state_59165__$1 = state_59165;
var statearr_59170_59310 = state_59165__$1;
(statearr_59170_59310[(2)] = null);

(statearr_59170_59310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59166 === (6))){
var state_59165__$1 = state_59165;
var statearr_59171_59311 = state_59165__$1;
(statearr_59171_59311[(2)] = null);

(statearr_59171_59311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59166 === (7))){
var inst_59161 = (state_59165[(2)]);
var state_59165__$1 = state_59165;
var statearr_59172_59312 = state_59165__$1;
(statearr_59172_59312[(2)] = inst_59161);

(statearr_59172_59312[(1)] = (3));


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
});})(__59294,c__28998__auto___59306,G__59125_59295,n__25817__auto___59293,jobs,results,process,async))
;
return ((function (__59294,switch__28886__auto__,c__28998__auto___59306,G__59125_59295,n__25817__auto___59293,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_59176 = [null,null,null,null,null,null,null];
(statearr_59176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_59176[(1)] = (1));

return statearr_59176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_59165){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59177){if((e59177 instanceof Object)){
var ex__28890__auto__ = e59177;
var statearr_59178_59313 = state_59165;
(statearr_59178_59313[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59314 = state_59165;
state_59165 = G__59314;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_59165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_59165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(__59294,switch__28886__auto__,c__28998__auto___59306,G__59125_59295,n__25817__auto___59293,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_59179 = f__28999__auto__.call(null);
(statearr_59179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___59306);

return statearr_59179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(__59294,c__28998__auto___59306,G__59125_59295,n__25817__auto___59293,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__59315 = (__59294 + (1));
__59294 = G__59315;
continue;
} else {
}
break;
}

var c__28998__auto___59316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___59316,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___59316,jobs,results,process,async){
return (function (state_59201){
var state_val_59202 = (state_59201[(1)]);
if((state_val_59202 === (1))){
var state_59201__$1 = state_59201;
var statearr_59203_59317 = state_59201__$1;
(statearr_59203_59317[(2)] = null);

(statearr_59203_59317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (2))){
var state_59201__$1 = state_59201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59201__$1,(4),from);
} else {
if((state_val_59202 === (3))){
var inst_59199 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59201__$1,inst_59199);
} else {
if((state_val_59202 === (4))){
var inst_59182 = (state_59201[(7)]);
var inst_59182__$1 = (state_59201[(2)]);
var inst_59183 = (inst_59182__$1 == null);
var state_59201__$1 = (function (){var statearr_59204 = state_59201;
(statearr_59204[(7)] = inst_59182__$1);

return statearr_59204;
})();
if(cljs.core.truth_(inst_59183)){
var statearr_59205_59318 = state_59201__$1;
(statearr_59205_59318[(1)] = (5));

} else {
var statearr_59206_59319 = state_59201__$1;
(statearr_59206_59319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (5))){
var inst_59185 = cljs.core.async.close_BANG_.call(null,jobs);
var state_59201__$1 = state_59201;
var statearr_59207_59320 = state_59201__$1;
(statearr_59207_59320[(2)] = inst_59185);

(statearr_59207_59320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (6))){
var inst_59187 = (state_59201[(8)]);
var inst_59182 = (state_59201[(7)]);
var inst_59187__$1 = cljs.core.async.chan.call(null,(1));
var inst_59188 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59189 = [inst_59182,inst_59187__$1];
var inst_59190 = (new cljs.core.PersistentVector(null,2,(5),inst_59188,inst_59189,null));
var state_59201__$1 = (function (){var statearr_59208 = state_59201;
(statearr_59208[(8)] = inst_59187__$1);

return statearr_59208;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59201__$1,(8),jobs,inst_59190);
} else {
if((state_val_59202 === (7))){
var inst_59197 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59209_59321 = state_59201__$1;
(statearr_59209_59321[(2)] = inst_59197);

(statearr_59209_59321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (8))){
var inst_59187 = (state_59201[(8)]);
var inst_59192 = (state_59201[(2)]);
var state_59201__$1 = (function (){var statearr_59210 = state_59201;
(statearr_59210[(9)] = inst_59192);

return statearr_59210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59201__$1,(9),results,inst_59187);
} else {
if((state_val_59202 === (9))){
var inst_59194 = (state_59201[(2)]);
var state_59201__$1 = (function (){var statearr_59211 = state_59201;
(statearr_59211[(10)] = inst_59194);

return statearr_59211;
})();
var statearr_59212_59322 = state_59201__$1;
(statearr_59212_59322[(2)] = null);

(statearr_59212_59322[(1)] = (2));


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
});})(c__28998__auto___59316,jobs,results,process,async))
;
return ((function (switch__28886__auto__,c__28998__auto___59316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_59216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_59216[(1)] = (1));

return statearr_59216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_59201){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59217){if((e59217 instanceof Object)){
var ex__28890__auto__ = e59217;
var statearr_59218_59323 = state_59201;
(statearr_59218_59323[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59324 = state_59201;
state_59201 = G__59324;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_59201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_59201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___59316,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_59219 = f__28999__auto__.call(null);
(statearr_59219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___59316);

return statearr_59219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___59316,jobs,results,process,async))
);


var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,jobs,results,process,async){
return (function (state_59257){
var state_val_59258 = (state_59257[(1)]);
if((state_val_59258 === (7))){
var inst_59253 = (state_59257[(2)]);
var state_59257__$1 = state_59257;
var statearr_59259_59325 = state_59257__$1;
(statearr_59259_59325[(2)] = inst_59253);

(statearr_59259_59325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (20))){
var state_59257__$1 = state_59257;
var statearr_59260_59326 = state_59257__$1;
(statearr_59260_59326[(2)] = null);

(statearr_59260_59326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (1))){
var state_59257__$1 = state_59257;
var statearr_59261_59327 = state_59257__$1;
(statearr_59261_59327[(2)] = null);

(statearr_59261_59327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (4))){
var inst_59222 = (state_59257[(7)]);
var inst_59222__$1 = (state_59257[(2)]);
var inst_59223 = (inst_59222__$1 == null);
var state_59257__$1 = (function (){var statearr_59262 = state_59257;
(statearr_59262[(7)] = inst_59222__$1);

return statearr_59262;
})();
if(cljs.core.truth_(inst_59223)){
var statearr_59263_59328 = state_59257__$1;
(statearr_59263_59328[(1)] = (5));

} else {
var statearr_59264_59329 = state_59257__$1;
(statearr_59264_59329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (15))){
var inst_59235 = (state_59257[(8)]);
var state_59257__$1 = state_59257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59257__$1,(18),to,inst_59235);
} else {
if((state_val_59258 === (21))){
var inst_59248 = (state_59257[(2)]);
var state_59257__$1 = state_59257;
var statearr_59265_59330 = state_59257__$1;
(statearr_59265_59330[(2)] = inst_59248);

(statearr_59265_59330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (13))){
var inst_59250 = (state_59257[(2)]);
var state_59257__$1 = (function (){var statearr_59266 = state_59257;
(statearr_59266[(9)] = inst_59250);

return statearr_59266;
})();
var statearr_59267_59331 = state_59257__$1;
(statearr_59267_59331[(2)] = null);

(statearr_59267_59331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (6))){
var inst_59222 = (state_59257[(7)]);
var state_59257__$1 = state_59257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59257__$1,(11),inst_59222);
} else {
if((state_val_59258 === (17))){
var inst_59243 = (state_59257[(2)]);
var state_59257__$1 = state_59257;
if(cljs.core.truth_(inst_59243)){
var statearr_59268_59332 = state_59257__$1;
(statearr_59268_59332[(1)] = (19));

} else {
var statearr_59269_59333 = state_59257__$1;
(statearr_59269_59333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (3))){
var inst_59255 = (state_59257[(2)]);
var state_59257__$1 = state_59257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59257__$1,inst_59255);
} else {
if((state_val_59258 === (12))){
var inst_59232 = (state_59257[(10)]);
var state_59257__$1 = state_59257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59257__$1,(14),inst_59232);
} else {
if((state_val_59258 === (2))){
var state_59257__$1 = state_59257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59257__$1,(4),results);
} else {
if((state_val_59258 === (19))){
var state_59257__$1 = state_59257;
var statearr_59270_59334 = state_59257__$1;
(statearr_59270_59334[(2)] = null);

(statearr_59270_59334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (11))){
var inst_59232 = (state_59257[(2)]);
var state_59257__$1 = (function (){var statearr_59271 = state_59257;
(statearr_59271[(10)] = inst_59232);

return statearr_59271;
})();
var statearr_59272_59335 = state_59257__$1;
(statearr_59272_59335[(2)] = null);

(statearr_59272_59335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (9))){
var state_59257__$1 = state_59257;
var statearr_59273_59336 = state_59257__$1;
(statearr_59273_59336[(2)] = null);

(statearr_59273_59336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (5))){
var state_59257__$1 = state_59257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59274_59337 = state_59257__$1;
(statearr_59274_59337[(1)] = (8));

} else {
var statearr_59275_59338 = state_59257__$1;
(statearr_59275_59338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (14))){
var inst_59235 = (state_59257[(8)]);
var inst_59237 = (state_59257[(11)]);
var inst_59235__$1 = (state_59257[(2)]);
var inst_59236 = (inst_59235__$1 == null);
var inst_59237__$1 = cljs.core.not.call(null,inst_59236);
var state_59257__$1 = (function (){var statearr_59276 = state_59257;
(statearr_59276[(8)] = inst_59235__$1);

(statearr_59276[(11)] = inst_59237__$1);

return statearr_59276;
})();
if(inst_59237__$1){
var statearr_59277_59339 = state_59257__$1;
(statearr_59277_59339[(1)] = (15));

} else {
var statearr_59278_59340 = state_59257__$1;
(statearr_59278_59340[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (16))){
var inst_59237 = (state_59257[(11)]);
var state_59257__$1 = state_59257;
var statearr_59279_59341 = state_59257__$1;
(statearr_59279_59341[(2)] = inst_59237);

(statearr_59279_59341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (10))){
var inst_59229 = (state_59257[(2)]);
var state_59257__$1 = state_59257;
var statearr_59280_59342 = state_59257__$1;
(statearr_59280_59342[(2)] = inst_59229);

(statearr_59280_59342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (18))){
var inst_59240 = (state_59257[(2)]);
var state_59257__$1 = state_59257;
var statearr_59281_59343 = state_59257__$1;
(statearr_59281_59343[(2)] = inst_59240);

(statearr_59281_59343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59258 === (8))){
var inst_59226 = cljs.core.async.close_BANG_.call(null,to);
var state_59257__$1 = state_59257;
var statearr_59282_59344 = state_59257__$1;
(statearr_59282_59344[(2)] = inst_59226);

(statearr_59282_59344[(1)] = (10));


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
var statearr_59286 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_59286[(1)] = (1));

return statearr_59286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_59257){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59287){if((e59287 instanceof Object)){
var ex__28890__auto__ = e59287;
var statearr_59288_59345 = state_59257;
(statearr_59288_59345[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59346 = state_59257;
state_59257 = G__59346;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_59257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_59257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_59289 = f__28999__auto__.call(null);
(statearr_59289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_59289;
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
var args59347 = [];
var len__26007__auto___59350 = arguments.length;
var i__26008__auto___59351 = (0);
while(true){
if((i__26008__auto___59351 < len__26007__auto___59350)){
args59347.push((arguments[i__26008__auto___59351]));

var G__59352 = (i__26008__auto___59351 + (1));
i__26008__auto___59351 = G__59352;
continue;
} else {
}
break;
}

var G__59349 = args59347.length;
switch (G__59349) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59347.length)].join('')));

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
var args59354 = [];
var len__26007__auto___59357 = arguments.length;
var i__26008__auto___59358 = (0);
while(true){
if((i__26008__auto___59358 < len__26007__auto___59357)){
args59354.push((arguments[i__26008__auto___59358]));

var G__59359 = (i__26008__auto___59358 + (1));
i__26008__auto___59358 = G__59359;
continue;
} else {
}
break;
}

var G__59356 = args59354.length;
switch (G__59356) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59354.length)].join('')));

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
var args59361 = [];
var len__26007__auto___59414 = arguments.length;
var i__26008__auto___59415 = (0);
while(true){
if((i__26008__auto___59415 < len__26007__auto___59414)){
args59361.push((arguments[i__26008__auto___59415]));

var G__59416 = (i__26008__auto___59415 + (1));
i__26008__auto___59415 = G__59416;
continue;
} else {
}
break;
}

var G__59363 = args59361.length;
switch (G__59363) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59361.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28998__auto___59418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___59418,tc,fc){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___59418,tc,fc){
return (function (state_59389){
var state_val_59390 = (state_59389[(1)]);
if((state_val_59390 === (7))){
var inst_59385 = (state_59389[(2)]);
var state_59389__$1 = state_59389;
var statearr_59391_59419 = state_59389__$1;
(statearr_59391_59419[(2)] = inst_59385);

(statearr_59391_59419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (1))){
var state_59389__$1 = state_59389;
var statearr_59392_59420 = state_59389__$1;
(statearr_59392_59420[(2)] = null);

(statearr_59392_59420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (4))){
var inst_59366 = (state_59389[(7)]);
var inst_59366__$1 = (state_59389[(2)]);
var inst_59367 = (inst_59366__$1 == null);
var state_59389__$1 = (function (){var statearr_59393 = state_59389;
(statearr_59393[(7)] = inst_59366__$1);

return statearr_59393;
})();
if(cljs.core.truth_(inst_59367)){
var statearr_59394_59421 = state_59389__$1;
(statearr_59394_59421[(1)] = (5));

} else {
var statearr_59395_59422 = state_59389__$1;
(statearr_59395_59422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (13))){
var state_59389__$1 = state_59389;
var statearr_59396_59423 = state_59389__$1;
(statearr_59396_59423[(2)] = null);

(statearr_59396_59423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (6))){
var inst_59366 = (state_59389[(7)]);
var inst_59372 = p.call(null,inst_59366);
var state_59389__$1 = state_59389;
if(cljs.core.truth_(inst_59372)){
var statearr_59397_59424 = state_59389__$1;
(statearr_59397_59424[(1)] = (9));

} else {
var statearr_59398_59425 = state_59389__$1;
(statearr_59398_59425[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (3))){
var inst_59387 = (state_59389[(2)]);
var state_59389__$1 = state_59389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59389__$1,inst_59387);
} else {
if((state_val_59390 === (12))){
var state_59389__$1 = state_59389;
var statearr_59399_59426 = state_59389__$1;
(statearr_59399_59426[(2)] = null);

(statearr_59399_59426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (2))){
var state_59389__$1 = state_59389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59389__$1,(4),ch);
} else {
if((state_val_59390 === (11))){
var inst_59366 = (state_59389[(7)]);
var inst_59376 = (state_59389[(2)]);
var state_59389__$1 = state_59389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59389__$1,(8),inst_59376,inst_59366);
} else {
if((state_val_59390 === (9))){
var state_59389__$1 = state_59389;
var statearr_59400_59427 = state_59389__$1;
(statearr_59400_59427[(2)] = tc);

(statearr_59400_59427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (5))){
var inst_59369 = cljs.core.async.close_BANG_.call(null,tc);
var inst_59370 = cljs.core.async.close_BANG_.call(null,fc);
var state_59389__$1 = (function (){var statearr_59401 = state_59389;
(statearr_59401[(8)] = inst_59369);

return statearr_59401;
})();
var statearr_59402_59428 = state_59389__$1;
(statearr_59402_59428[(2)] = inst_59370);

(statearr_59402_59428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (14))){
var inst_59383 = (state_59389[(2)]);
var state_59389__$1 = state_59389;
var statearr_59403_59429 = state_59389__$1;
(statearr_59403_59429[(2)] = inst_59383);

(statearr_59403_59429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (10))){
var state_59389__$1 = state_59389;
var statearr_59404_59430 = state_59389__$1;
(statearr_59404_59430[(2)] = fc);

(statearr_59404_59430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59390 === (8))){
var inst_59378 = (state_59389[(2)]);
var state_59389__$1 = state_59389;
if(cljs.core.truth_(inst_59378)){
var statearr_59405_59431 = state_59389__$1;
(statearr_59405_59431[(1)] = (12));

} else {
var statearr_59406_59432 = state_59389__$1;
(statearr_59406_59432[(1)] = (13));

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
});})(c__28998__auto___59418,tc,fc))
;
return ((function (switch__28886__auto__,c__28998__auto___59418,tc,fc){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_59410 = [null,null,null,null,null,null,null,null,null];
(statearr_59410[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_59410[(1)] = (1));

return statearr_59410;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_59389){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59411){if((e59411 instanceof Object)){
var ex__28890__auto__ = e59411;
var statearr_59412_59433 = state_59389;
(statearr_59412_59433[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59434 = state_59389;
state_59389 = G__59434;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_59389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_59389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___59418,tc,fc))
})();
var state__29000__auto__ = (function (){var statearr_59413 = f__28999__auto__.call(null);
(statearr_59413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___59418);

return statearr_59413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___59418,tc,fc))
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
return (function (state_59498){
var state_val_59499 = (state_59498[(1)]);
if((state_val_59499 === (7))){
var inst_59494 = (state_59498[(2)]);
var state_59498__$1 = state_59498;
var statearr_59500_59521 = state_59498__$1;
(statearr_59500_59521[(2)] = inst_59494);

(statearr_59500_59521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (1))){
var inst_59478 = init;
var state_59498__$1 = (function (){var statearr_59501 = state_59498;
(statearr_59501[(7)] = inst_59478);

return statearr_59501;
})();
var statearr_59502_59522 = state_59498__$1;
(statearr_59502_59522[(2)] = null);

(statearr_59502_59522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (4))){
var inst_59481 = (state_59498[(8)]);
var inst_59481__$1 = (state_59498[(2)]);
var inst_59482 = (inst_59481__$1 == null);
var state_59498__$1 = (function (){var statearr_59503 = state_59498;
(statearr_59503[(8)] = inst_59481__$1);

return statearr_59503;
})();
if(cljs.core.truth_(inst_59482)){
var statearr_59504_59523 = state_59498__$1;
(statearr_59504_59523[(1)] = (5));

} else {
var statearr_59505_59524 = state_59498__$1;
(statearr_59505_59524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (6))){
var inst_59481 = (state_59498[(8)]);
var inst_59485 = (state_59498[(9)]);
var inst_59478 = (state_59498[(7)]);
var inst_59485__$1 = f.call(null,inst_59478,inst_59481);
var inst_59486 = cljs.core.reduced_QMARK_.call(null,inst_59485__$1);
var state_59498__$1 = (function (){var statearr_59506 = state_59498;
(statearr_59506[(9)] = inst_59485__$1);

return statearr_59506;
})();
if(inst_59486){
var statearr_59507_59525 = state_59498__$1;
(statearr_59507_59525[(1)] = (8));

} else {
var statearr_59508_59526 = state_59498__$1;
(statearr_59508_59526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (3))){
var inst_59496 = (state_59498[(2)]);
var state_59498__$1 = state_59498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59498__$1,inst_59496);
} else {
if((state_val_59499 === (2))){
var state_59498__$1 = state_59498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59498__$1,(4),ch);
} else {
if((state_val_59499 === (9))){
var inst_59485 = (state_59498[(9)]);
var inst_59478 = inst_59485;
var state_59498__$1 = (function (){var statearr_59509 = state_59498;
(statearr_59509[(7)] = inst_59478);

return statearr_59509;
})();
var statearr_59510_59527 = state_59498__$1;
(statearr_59510_59527[(2)] = null);

(statearr_59510_59527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (5))){
var inst_59478 = (state_59498[(7)]);
var state_59498__$1 = state_59498;
var statearr_59511_59528 = state_59498__$1;
(statearr_59511_59528[(2)] = inst_59478);

(statearr_59511_59528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (10))){
var inst_59492 = (state_59498[(2)]);
var state_59498__$1 = state_59498;
var statearr_59512_59529 = state_59498__$1;
(statearr_59512_59529[(2)] = inst_59492);

(statearr_59512_59529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59499 === (8))){
var inst_59485 = (state_59498[(9)]);
var inst_59488 = cljs.core.deref.call(null,inst_59485);
var state_59498__$1 = state_59498;
var statearr_59513_59530 = state_59498__$1;
(statearr_59513_59530[(2)] = inst_59488);

(statearr_59513_59530[(1)] = (10));


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
var statearr_59517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59517[(0)] = cljs$core$async$reduce_$_state_machine__28887__auto__);

(statearr_59517[(1)] = (1));

return statearr_59517;
});
var cljs$core$async$reduce_$_state_machine__28887__auto____1 = (function (state_59498){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59518){if((e59518 instanceof Object)){
var ex__28890__auto__ = e59518;
var statearr_59519_59531 = state_59498;
(statearr_59519_59531[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59532 = state_59498;
state_59498 = G__59532;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28887__auto__ = function(state_59498){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28887__auto____1.call(this,state_59498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28887__auto____0;
cljs$core$async$reduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28887__auto____1;
return cljs$core$async$reduce_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_59520 = f__28999__auto__.call(null);
(statearr_59520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_59520;
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
return (function (state_59552){
var state_val_59553 = (state_59552[(1)]);
if((state_val_59553 === (1))){
var inst_59547 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_59552__$1 = state_59552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59552__$1,(2),inst_59547);
} else {
if((state_val_59553 === (2))){
var inst_59549 = (state_59552[(2)]);
var inst_59550 = f__$1.call(null,inst_59549);
var state_59552__$1 = state_59552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59552__$1,inst_59550);
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
var statearr_59557 = [null,null,null,null,null,null,null];
(statearr_59557[(0)] = cljs$core$async$transduce_$_state_machine__28887__auto__);

(statearr_59557[(1)] = (1));

return statearr_59557;
});
var cljs$core$async$transduce_$_state_machine__28887__auto____1 = (function (state_59552){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59558){if((e59558 instanceof Object)){
var ex__28890__auto__ = e59558;
var statearr_59559_59561 = state_59552;
(statearr_59559_59561[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59562 = state_59552;
state_59552 = G__59562;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28887__auto__ = function(state_59552){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28887__auto____1.call(this,state_59552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28887__auto____0;
cljs$core$async$transduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28887__auto____1;
return cljs$core$async$transduce_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,f__$1))
})();
var state__29000__auto__ = (function (){var statearr_59560 = f__28999__auto__.call(null);
(statearr_59560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_59560;
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
var args59563 = [];
var len__26007__auto___59615 = arguments.length;
var i__26008__auto___59616 = (0);
while(true){
if((i__26008__auto___59616 < len__26007__auto___59615)){
args59563.push((arguments[i__26008__auto___59616]));

var G__59617 = (i__26008__auto___59616 + (1));
i__26008__auto___59616 = G__59617;
continue;
} else {
}
break;
}

var G__59565 = args59563.length;
switch (G__59565) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59563.length)].join('')));

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
return (function (state_59590){
var state_val_59591 = (state_59590[(1)]);
if((state_val_59591 === (7))){
var inst_59572 = (state_59590[(2)]);
var state_59590__$1 = state_59590;
var statearr_59592_59619 = state_59590__$1;
(statearr_59592_59619[(2)] = inst_59572);

(statearr_59592_59619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (1))){
var inst_59566 = cljs.core.seq.call(null,coll);
var inst_59567 = inst_59566;
var state_59590__$1 = (function (){var statearr_59593 = state_59590;
(statearr_59593[(7)] = inst_59567);

return statearr_59593;
})();
var statearr_59594_59620 = state_59590__$1;
(statearr_59594_59620[(2)] = null);

(statearr_59594_59620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (4))){
var inst_59567 = (state_59590[(7)]);
var inst_59570 = cljs.core.first.call(null,inst_59567);
var state_59590__$1 = state_59590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59590__$1,(7),ch,inst_59570);
} else {
if((state_val_59591 === (13))){
var inst_59584 = (state_59590[(2)]);
var state_59590__$1 = state_59590;
var statearr_59595_59621 = state_59590__$1;
(statearr_59595_59621[(2)] = inst_59584);

(statearr_59595_59621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (6))){
var inst_59575 = (state_59590[(2)]);
var state_59590__$1 = state_59590;
if(cljs.core.truth_(inst_59575)){
var statearr_59596_59622 = state_59590__$1;
(statearr_59596_59622[(1)] = (8));

} else {
var statearr_59597_59623 = state_59590__$1;
(statearr_59597_59623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (3))){
var inst_59588 = (state_59590[(2)]);
var state_59590__$1 = state_59590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59590__$1,inst_59588);
} else {
if((state_val_59591 === (12))){
var state_59590__$1 = state_59590;
var statearr_59598_59624 = state_59590__$1;
(statearr_59598_59624[(2)] = null);

(statearr_59598_59624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (2))){
var inst_59567 = (state_59590[(7)]);
var state_59590__$1 = state_59590;
if(cljs.core.truth_(inst_59567)){
var statearr_59599_59625 = state_59590__$1;
(statearr_59599_59625[(1)] = (4));

} else {
var statearr_59600_59626 = state_59590__$1;
(statearr_59600_59626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (11))){
var inst_59581 = cljs.core.async.close_BANG_.call(null,ch);
var state_59590__$1 = state_59590;
var statearr_59601_59627 = state_59590__$1;
(statearr_59601_59627[(2)] = inst_59581);

(statearr_59601_59627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (9))){
var state_59590__$1 = state_59590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59602_59628 = state_59590__$1;
(statearr_59602_59628[(1)] = (11));

} else {
var statearr_59603_59629 = state_59590__$1;
(statearr_59603_59629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (5))){
var inst_59567 = (state_59590[(7)]);
var state_59590__$1 = state_59590;
var statearr_59604_59630 = state_59590__$1;
(statearr_59604_59630[(2)] = inst_59567);

(statearr_59604_59630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (10))){
var inst_59586 = (state_59590[(2)]);
var state_59590__$1 = state_59590;
var statearr_59605_59631 = state_59590__$1;
(statearr_59605_59631[(2)] = inst_59586);

(statearr_59605_59631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59591 === (8))){
var inst_59567 = (state_59590[(7)]);
var inst_59577 = cljs.core.next.call(null,inst_59567);
var inst_59567__$1 = inst_59577;
var state_59590__$1 = (function (){var statearr_59606 = state_59590;
(statearr_59606[(7)] = inst_59567__$1);

return statearr_59606;
})();
var statearr_59607_59632 = state_59590__$1;
(statearr_59607_59632[(2)] = null);

(statearr_59607_59632[(1)] = (2));


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
var statearr_59611 = [null,null,null,null,null,null,null,null];
(statearr_59611[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_59611[(1)] = (1));

return statearr_59611;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_59590){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e59612){if((e59612 instanceof Object)){
var ex__28890__auto__ = e59612;
var statearr_59613_59633 = state_59590;
(statearr_59613_59633[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59634 = state_59590;
state_59590 = G__59634;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_59590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_59590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_59614 = f__28999__auto__.call(null);
(statearr_59614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_59614;
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
if(typeof cljs.core.async.t_cljs$core$async59860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59860 = (function (ch,cs,meta59861){
this.ch = ch;
this.cs = cs;
this.meta59861 = meta59861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_59862,meta59861__$1){
var self__ = this;
var _59862__$1 = this;
return (new cljs.core.async.t_cljs$core$async59860(self__.ch,self__.cs,meta59861__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_59862){
var self__ = this;
var _59862__$1 = this;
return self__.meta59861;
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59861","meta59861",-629773751,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async59860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59860";

cljs.core.async.t_cljs$core$async59860.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async59860");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async59860 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async59860(ch__$1,cs__$1,meta59861){
return (new cljs.core.async.t_cljs$core$async59860(ch__$1,cs__$1,meta59861));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async59860(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28998__auto___60085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___60085,cs,m,dchan,dctr,done){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___60085,cs,m,dchan,dctr,done){
return (function (state_59997){
var state_val_59998 = (state_59997[(1)]);
if((state_val_59998 === (7))){
var inst_59993 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_59999_60086 = state_59997__$1;
(statearr_59999_60086[(2)] = inst_59993);

(statearr_59999_60086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (20))){
var inst_59896 = (state_59997[(7)]);
var inst_59908 = cljs.core.first.call(null,inst_59896);
var inst_59909 = cljs.core.nth.call(null,inst_59908,(0),null);
var inst_59910 = cljs.core.nth.call(null,inst_59908,(1),null);
var state_59997__$1 = (function (){var statearr_60000 = state_59997;
(statearr_60000[(8)] = inst_59909);

return statearr_60000;
})();
if(cljs.core.truth_(inst_59910)){
var statearr_60001_60087 = state_59997__$1;
(statearr_60001_60087[(1)] = (22));

} else {
var statearr_60002_60088 = state_59997__$1;
(statearr_60002_60088[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (27))){
var inst_59938 = (state_59997[(9)]);
var inst_59940 = (state_59997[(10)]);
var inst_59945 = (state_59997[(11)]);
var inst_59865 = (state_59997[(12)]);
var inst_59945__$1 = cljs.core._nth.call(null,inst_59938,inst_59940);
var inst_59946 = cljs.core.async.put_BANG_.call(null,inst_59945__$1,inst_59865,done);
var state_59997__$1 = (function (){var statearr_60003 = state_59997;
(statearr_60003[(11)] = inst_59945__$1);

return statearr_60003;
})();
if(cljs.core.truth_(inst_59946)){
var statearr_60004_60089 = state_59997__$1;
(statearr_60004_60089[(1)] = (30));

} else {
var statearr_60005_60090 = state_59997__$1;
(statearr_60005_60090[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (1))){
var state_59997__$1 = state_59997;
var statearr_60006_60091 = state_59997__$1;
(statearr_60006_60091[(2)] = null);

(statearr_60006_60091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (24))){
var inst_59896 = (state_59997[(7)]);
var inst_59915 = (state_59997[(2)]);
var inst_59916 = cljs.core.next.call(null,inst_59896);
var inst_59874 = inst_59916;
var inst_59875 = null;
var inst_59876 = (0);
var inst_59877 = (0);
var state_59997__$1 = (function (){var statearr_60007 = state_59997;
(statearr_60007[(13)] = inst_59877);

(statearr_60007[(14)] = inst_59915);

(statearr_60007[(15)] = inst_59876);

(statearr_60007[(16)] = inst_59875);

(statearr_60007[(17)] = inst_59874);

return statearr_60007;
})();
var statearr_60008_60092 = state_59997__$1;
(statearr_60008_60092[(2)] = null);

(statearr_60008_60092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (39))){
var state_59997__$1 = state_59997;
var statearr_60012_60093 = state_59997__$1;
(statearr_60012_60093[(2)] = null);

(statearr_60012_60093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (4))){
var inst_59865 = (state_59997[(12)]);
var inst_59865__$1 = (state_59997[(2)]);
var inst_59866 = (inst_59865__$1 == null);
var state_59997__$1 = (function (){var statearr_60013 = state_59997;
(statearr_60013[(12)] = inst_59865__$1);

return statearr_60013;
})();
if(cljs.core.truth_(inst_59866)){
var statearr_60014_60094 = state_59997__$1;
(statearr_60014_60094[(1)] = (5));

} else {
var statearr_60015_60095 = state_59997__$1;
(statearr_60015_60095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (15))){
var inst_59877 = (state_59997[(13)]);
var inst_59876 = (state_59997[(15)]);
var inst_59875 = (state_59997[(16)]);
var inst_59874 = (state_59997[(17)]);
var inst_59892 = (state_59997[(2)]);
var inst_59893 = (inst_59877 + (1));
var tmp60009 = inst_59876;
var tmp60010 = inst_59875;
var tmp60011 = inst_59874;
var inst_59874__$1 = tmp60011;
var inst_59875__$1 = tmp60010;
var inst_59876__$1 = tmp60009;
var inst_59877__$1 = inst_59893;
var state_59997__$1 = (function (){var statearr_60016 = state_59997;
(statearr_60016[(13)] = inst_59877__$1);

(statearr_60016[(18)] = inst_59892);

(statearr_60016[(15)] = inst_59876__$1);

(statearr_60016[(16)] = inst_59875__$1);

(statearr_60016[(17)] = inst_59874__$1);

return statearr_60016;
})();
var statearr_60017_60096 = state_59997__$1;
(statearr_60017_60096[(2)] = null);

(statearr_60017_60096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (21))){
var inst_59919 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60021_60097 = state_59997__$1;
(statearr_60021_60097[(2)] = inst_59919);

(statearr_60021_60097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (31))){
var inst_59945 = (state_59997[(11)]);
var inst_59949 = done.call(null,null);
var inst_59950 = cljs.core.async.untap_STAR_.call(null,m,inst_59945);
var state_59997__$1 = (function (){var statearr_60022 = state_59997;
(statearr_60022[(19)] = inst_59949);

return statearr_60022;
})();
var statearr_60023_60098 = state_59997__$1;
(statearr_60023_60098[(2)] = inst_59950);

(statearr_60023_60098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (32))){
var inst_59938 = (state_59997[(9)]);
var inst_59940 = (state_59997[(10)]);
var inst_59939 = (state_59997[(20)]);
var inst_59937 = (state_59997[(21)]);
var inst_59952 = (state_59997[(2)]);
var inst_59953 = (inst_59940 + (1));
var tmp60018 = inst_59938;
var tmp60019 = inst_59939;
var tmp60020 = inst_59937;
var inst_59937__$1 = tmp60020;
var inst_59938__$1 = tmp60018;
var inst_59939__$1 = tmp60019;
var inst_59940__$1 = inst_59953;
var state_59997__$1 = (function (){var statearr_60024 = state_59997;
(statearr_60024[(9)] = inst_59938__$1);

(statearr_60024[(10)] = inst_59940__$1);

(statearr_60024[(20)] = inst_59939__$1);

(statearr_60024[(21)] = inst_59937__$1);

(statearr_60024[(22)] = inst_59952);

return statearr_60024;
})();
var statearr_60025_60099 = state_59997__$1;
(statearr_60025_60099[(2)] = null);

(statearr_60025_60099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (40))){
var inst_59965 = (state_59997[(23)]);
var inst_59969 = done.call(null,null);
var inst_59970 = cljs.core.async.untap_STAR_.call(null,m,inst_59965);
var state_59997__$1 = (function (){var statearr_60026 = state_59997;
(statearr_60026[(24)] = inst_59969);

return statearr_60026;
})();
var statearr_60027_60100 = state_59997__$1;
(statearr_60027_60100[(2)] = inst_59970);

(statearr_60027_60100[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (33))){
var inst_59956 = (state_59997[(25)]);
var inst_59958 = cljs.core.chunked_seq_QMARK_.call(null,inst_59956);
var state_59997__$1 = state_59997;
if(inst_59958){
var statearr_60028_60101 = state_59997__$1;
(statearr_60028_60101[(1)] = (36));

} else {
var statearr_60029_60102 = state_59997__$1;
(statearr_60029_60102[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (13))){
var inst_59886 = (state_59997[(26)]);
var inst_59889 = cljs.core.async.close_BANG_.call(null,inst_59886);
var state_59997__$1 = state_59997;
var statearr_60030_60103 = state_59997__$1;
(statearr_60030_60103[(2)] = inst_59889);

(statearr_60030_60103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (22))){
var inst_59909 = (state_59997[(8)]);
var inst_59912 = cljs.core.async.close_BANG_.call(null,inst_59909);
var state_59997__$1 = state_59997;
var statearr_60031_60104 = state_59997__$1;
(statearr_60031_60104[(2)] = inst_59912);

(statearr_60031_60104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (36))){
var inst_59956 = (state_59997[(25)]);
var inst_59960 = cljs.core.chunk_first.call(null,inst_59956);
var inst_59961 = cljs.core.chunk_rest.call(null,inst_59956);
var inst_59962 = cljs.core.count.call(null,inst_59960);
var inst_59937 = inst_59961;
var inst_59938 = inst_59960;
var inst_59939 = inst_59962;
var inst_59940 = (0);
var state_59997__$1 = (function (){var statearr_60032 = state_59997;
(statearr_60032[(9)] = inst_59938);

(statearr_60032[(10)] = inst_59940);

(statearr_60032[(20)] = inst_59939);

(statearr_60032[(21)] = inst_59937);

return statearr_60032;
})();
var statearr_60033_60105 = state_59997__$1;
(statearr_60033_60105[(2)] = null);

(statearr_60033_60105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (41))){
var inst_59956 = (state_59997[(25)]);
var inst_59972 = (state_59997[(2)]);
var inst_59973 = cljs.core.next.call(null,inst_59956);
var inst_59937 = inst_59973;
var inst_59938 = null;
var inst_59939 = (0);
var inst_59940 = (0);
var state_59997__$1 = (function (){var statearr_60034 = state_59997;
(statearr_60034[(9)] = inst_59938);

(statearr_60034[(10)] = inst_59940);

(statearr_60034[(20)] = inst_59939);

(statearr_60034[(21)] = inst_59937);

(statearr_60034[(27)] = inst_59972);

return statearr_60034;
})();
var statearr_60035_60106 = state_59997__$1;
(statearr_60035_60106[(2)] = null);

(statearr_60035_60106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (43))){
var state_59997__$1 = state_59997;
var statearr_60036_60107 = state_59997__$1;
(statearr_60036_60107[(2)] = null);

(statearr_60036_60107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (29))){
var inst_59981 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60037_60108 = state_59997__$1;
(statearr_60037_60108[(2)] = inst_59981);

(statearr_60037_60108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (44))){
var inst_59990 = (state_59997[(2)]);
var state_59997__$1 = (function (){var statearr_60038 = state_59997;
(statearr_60038[(28)] = inst_59990);

return statearr_60038;
})();
var statearr_60039_60109 = state_59997__$1;
(statearr_60039_60109[(2)] = null);

(statearr_60039_60109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (6))){
var inst_59929 = (state_59997[(29)]);
var inst_59928 = cljs.core.deref.call(null,cs);
var inst_59929__$1 = cljs.core.keys.call(null,inst_59928);
var inst_59930 = cljs.core.count.call(null,inst_59929__$1);
var inst_59931 = cljs.core.reset_BANG_.call(null,dctr,inst_59930);
var inst_59936 = cljs.core.seq.call(null,inst_59929__$1);
var inst_59937 = inst_59936;
var inst_59938 = null;
var inst_59939 = (0);
var inst_59940 = (0);
var state_59997__$1 = (function (){var statearr_60040 = state_59997;
(statearr_60040[(29)] = inst_59929__$1);

(statearr_60040[(9)] = inst_59938);

(statearr_60040[(10)] = inst_59940);

(statearr_60040[(20)] = inst_59939);

(statearr_60040[(21)] = inst_59937);

(statearr_60040[(30)] = inst_59931);

return statearr_60040;
})();
var statearr_60041_60110 = state_59997__$1;
(statearr_60041_60110[(2)] = null);

(statearr_60041_60110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (28))){
var inst_59956 = (state_59997[(25)]);
var inst_59937 = (state_59997[(21)]);
var inst_59956__$1 = cljs.core.seq.call(null,inst_59937);
var state_59997__$1 = (function (){var statearr_60042 = state_59997;
(statearr_60042[(25)] = inst_59956__$1);

return statearr_60042;
})();
if(inst_59956__$1){
var statearr_60043_60111 = state_59997__$1;
(statearr_60043_60111[(1)] = (33));

} else {
var statearr_60044_60112 = state_59997__$1;
(statearr_60044_60112[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (25))){
var inst_59940 = (state_59997[(10)]);
var inst_59939 = (state_59997[(20)]);
var inst_59942 = (inst_59940 < inst_59939);
var inst_59943 = inst_59942;
var state_59997__$1 = state_59997;
if(cljs.core.truth_(inst_59943)){
var statearr_60045_60113 = state_59997__$1;
(statearr_60045_60113[(1)] = (27));

} else {
var statearr_60046_60114 = state_59997__$1;
(statearr_60046_60114[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (34))){
var state_59997__$1 = state_59997;
var statearr_60047_60115 = state_59997__$1;
(statearr_60047_60115[(2)] = null);

(statearr_60047_60115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (17))){
var state_59997__$1 = state_59997;
var statearr_60048_60116 = state_59997__$1;
(statearr_60048_60116[(2)] = null);

(statearr_60048_60116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (3))){
var inst_59995 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59997__$1,inst_59995);
} else {
if((state_val_59998 === (12))){
var inst_59924 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60049_60117 = state_59997__$1;
(statearr_60049_60117[(2)] = inst_59924);

(statearr_60049_60117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (2))){
var state_59997__$1 = state_59997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59997__$1,(4),ch);
} else {
if((state_val_59998 === (23))){
var state_59997__$1 = state_59997;
var statearr_60050_60118 = state_59997__$1;
(statearr_60050_60118[(2)] = null);

(statearr_60050_60118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (35))){
var inst_59979 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60051_60119 = state_59997__$1;
(statearr_60051_60119[(2)] = inst_59979);

(statearr_60051_60119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (19))){
var inst_59896 = (state_59997[(7)]);
var inst_59900 = cljs.core.chunk_first.call(null,inst_59896);
var inst_59901 = cljs.core.chunk_rest.call(null,inst_59896);
var inst_59902 = cljs.core.count.call(null,inst_59900);
var inst_59874 = inst_59901;
var inst_59875 = inst_59900;
var inst_59876 = inst_59902;
var inst_59877 = (0);
var state_59997__$1 = (function (){var statearr_60052 = state_59997;
(statearr_60052[(13)] = inst_59877);

(statearr_60052[(15)] = inst_59876);

(statearr_60052[(16)] = inst_59875);

(statearr_60052[(17)] = inst_59874);

return statearr_60052;
})();
var statearr_60053_60120 = state_59997__$1;
(statearr_60053_60120[(2)] = null);

(statearr_60053_60120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (11))){
var inst_59896 = (state_59997[(7)]);
var inst_59874 = (state_59997[(17)]);
var inst_59896__$1 = cljs.core.seq.call(null,inst_59874);
var state_59997__$1 = (function (){var statearr_60054 = state_59997;
(statearr_60054[(7)] = inst_59896__$1);

return statearr_60054;
})();
if(inst_59896__$1){
var statearr_60055_60121 = state_59997__$1;
(statearr_60055_60121[(1)] = (16));

} else {
var statearr_60056_60122 = state_59997__$1;
(statearr_60056_60122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (9))){
var inst_59926 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60057_60123 = state_59997__$1;
(statearr_60057_60123[(2)] = inst_59926);

(statearr_60057_60123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (5))){
var inst_59872 = cljs.core.deref.call(null,cs);
var inst_59873 = cljs.core.seq.call(null,inst_59872);
var inst_59874 = inst_59873;
var inst_59875 = null;
var inst_59876 = (0);
var inst_59877 = (0);
var state_59997__$1 = (function (){var statearr_60058 = state_59997;
(statearr_60058[(13)] = inst_59877);

(statearr_60058[(15)] = inst_59876);

(statearr_60058[(16)] = inst_59875);

(statearr_60058[(17)] = inst_59874);

return statearr_60058;
})();
var statearr_60059_60124 = state_59997__$1;
(statearr_60059_60124[(2)] = null);

(statearr_60059_60124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (14))){
var state_59997__$1 = state_59997;
var statearr_60060_60125 = state_59997__$1;
(statearr_60060_60125[(2)] = null);

(statearr_60060_60125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (45))){
var inst_59987 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60061_60126 = state_59997__$1;
(statearr_60061_60126[(2)] = inst_59987);

(statearr_60061_60126[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (26))){
var inst_59929 = (state_59997[(29)]);
var inst_59983 = (state_59997[(2)]);
var inst_59984 = cljs.core.seq.call(null,inst_59929);
var state_59997__$1 = (function (){var statearr_60062 = state_59997;
(statearr_60062[(31)] = inst_59983);

return statearr_60062;
})();
if(inst_59984){
var statearr_60063_60127 = state_59997__$1;
(statearr_60063_60127[(1)] = (42));

} else {
var statearr_60064_60128 = state_59997__$1;
(statearr_60064_60128[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (16))){
var inst_59896 = (state_59997[(7)]);
var inst_59898 = cljs.core.chunked_seq_QMARK_.call(null,inst_59896);
var state_59997__$1 = state_59997;
if(inst_59898){
var statearr_60065_60129 = state_59997__$1;
(statearr_60065_60129[(1)] = (19));

} else {
var statearr_60066_60130 = state_59997__$1;
(statearr_60066_60130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (38))){
var inst_59976 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60067_60131 = state_59997__$1;
(statearr_60067_60131[(2)] = inst_59976);

(statearr_60067_60131[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (30))){
var state_59997__$1 = state_59997;
var statearr_60068_60132 = state_59997__$1;
(statearr_60068_60132[(2)] = null);

(statearr_60068_60132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (10))){
var inst_59877 = (state_59997[(13)]);
var inst_59875 = (state_59997[(16)]);
var inst_59885 = cljs.core._nth.call(null,inst_59875,inst_59877);
var inst_59886 = cljs.core.nth.call(null,inst_59885,(0),null);
var inst_59887 = cljs.core.nth.call(null,inst_59885,(1),null);
var state_59997__$1 = (function (){var statearr_60069 = state_59997;
(statearr_60069[(26)] = inst_59886);

return statearr_60069;
})();
if(cljs.core.truth_(inst_59887)){
var statearr_60070_60133 = state_59997__$1;
(statearr_60070_60133[(1)] = (13));

} else {
var statearr_60071_60134 = state_59997__$1;
(statearr_60071_60134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (18))){
var inst_59922 = (state_59997[(2)]);
var state_59997__$1 = state_59997;
var statearr_60072_60135 = state_59997__$1;
(statearr_60072_60135[(2)] = inst_59922);

(statearr_60072_60135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (42))){
var state_59997__$1 = state_59997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59997__$1,(45),dchan);
} else {
if((state_val_59998 === (37))){
var inst_59956 = (state_59997[(25)]);
var inst_59965 = (state_59997[(23)]);
var inst_59865 = (state_59997[(12)]);
var inst_59965__$1 = cljs.core.first.call(null,inst_59956);
var inst_59966 = cljs.core.async.put_BANG_.call(null,inst_59965__$1,inst_59865,done);
var state_59997__$1 = (function (){var statearr_60073 = state_59997;
(statearr_60073[(23)] = inst_59965__$1);

return statearr_60073;
})();
if(cljs.core.truth_(inst_59966)){
var statearr_60074_60136 = state_59997__$1;
(statearr_60074_60136[(1)] = (39));

} else {
var statearr_60075_60137 = state_59997__$1;
(statearr_60075_60137[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59998 === (8))){
var inst_59877 = (state_59997[(13)]);
var inst_59876 = (state_59997[(15)]);
var inst_59879 = (inst_59877 < inst_59876);
var inst_59880 = inst_59879;
var state_59997__$1 = state_59997;
if(cljs.core.truth_(inst_59880)){
var statearr_60076_60138 = state_59997__$1;
(statearr_60076_60138[(1)] = (10));

} else {
var statearr_60077_60139 = state_59997__$1;
(statearr_60077_60139[(1)] = (11));

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
});})(c__28998__auto___60085,cs,m,dchan,dctr,done))
;
return ((function (switch__28886__auto__,c__28998__auto___60085,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28887__auto__ = null;
var cljs$core$async$mult_$_state_machine__28887__auto____0 = (function (){
var statearr_60081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60081[(0)] = cljs$core$async$mult_$_state_machine__28887__auto__);

(statearr_60081[(1)] = (1));

return statearr_60081;
});
var cljs$core$async$mult_$_state_machine__28887__auto____1 = (function (state_59997){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_59997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e60082){if((e60082 instanceof Object)){
var ex__28890__auto__ = e60082;
var statearr_60083_60140 = state_59997;
(statearr_60083_60140[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60141 = state_59997;
state_59997 = G__60141;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28887__auto__ = function(state_59997){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28887__auto____1.call(this,state_59997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28887__auto____0;
cljs$core$async$mult_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28887__auto____1;
return cljs$core$async$mult_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___60085,cs,m,dchan,dctr,done))
})();
var state__29000__auto__ = (function (){var statearr_60084 = f__28999__auto__.call(null);
(statearr_60084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___60085);

return statearr_60084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___60085,cs,m,dchan,dctr,done))
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
var args60142 = [];
var len__26007__auto___60145 = arguments.length;
var i__26008__auto___60146 = (0);
while(true){
if((i__26008__auto___60146 < len__26007__auto___60145)){
args60142.push((arguments[i__26008__auto___60146]));

var G__60147 = (i__26008__auto___60146 + (1));
i__26008__auto___60146 = G__60147;
continue;
} else {
}
break;
}

var G__60144 = args60142.length;
switch (G__60144) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60142.length)].join('')));

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
var len__26007__auto___60159 = arguments.length;
var i__26008__auto___60160 = (0);
while(true){
if((i__26008__auto___60160 < len__26007__auto___60159)){
args__26014__auto__.push((arguments[i__26008__auto___60160]));

var G__60161 = (i__26008__auto___60160 + (1));
i__26008__auto___60160 = G__60161;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((3) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26015__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60153){
var map__60154 = p__60153;
var map__60154__$1 = ((((!((map__60154 == null)))?((((map__60154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60154):map__60154);
var opts = map__60154__$1;
var statearr_60156_60162 = state;
(statearr_60156_60162[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__60154,map__60154__$1,opts){
return (function (val){
var statearr_60157_60163 = state;
(statearr_60157_60163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__60154,map__60154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_60158_60164 = state;
(statearr_60158_60164[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60149){
var G__60150 = cljs.core.first.call(null,seq60149);
var seq60149__$1 = cljs.core.next.call(null,seq60149);
var G__60151 = cljs.core.first.call(null,seq60149__$1);
var seq60149__$2 = cljs.core.next.call(null,seq60149__$1);
var G__60152 = cljs.core.first.call(null,seq60149__$2);
var seq60149__$3 = cljs.core.next.call(null,seq60149__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60150,G__60151,G__60152,seq60149__$3);
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
if(typeof cljs.core.async.t_cljs$core$async60332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60332 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta60333){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta60333 = meta60333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60334,meta60333__$1){
var self__ = this;
var _60334__$1 = this;
return (new cljs.core.async.t_cljs$core$async60332(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta60333__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60334){
var self__ = this;
var _60334__$1 = this;
return self__.meta60333;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async60332.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta60333","meta60333",751929629,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60332";

cljs.core.async.t_cljs$core$async60332.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async60332");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async60332 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async60332(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta60333){
return (new cljs.core.async.t_cljs$core$async60332(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta60333));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async60332(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28998__auto___60499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___60499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___60499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_60436){
var state_val_60437 = (state_60436[(1)]);
if((state_val_60437 === (7))){
var inst_60351 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
var statearr_60438_60500 = state_60436__$1;
(statearr_60438_60500[(2)] = inst_60351);

(statearr_60438_60500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (20))){
var inst_60363 = (state_60436[(7)]);
var state_60436__$1 = state_60436;
var statearr_60439_60501 = state_60436__$1;
(statearr_60439_60501[(2)] = inst_60363);

(statearr_60439_60501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (27))){
var state_60436__$1 = state_60436;
var statearr_60440_60502 = state_60436__$1;
(statearr_60440_60502[(2)] = null);

(statearr_60440_60502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (1))){
var inst_60338 = (state_60436[(8)]);
var inst_60338__$1 = calc_state.call(null);
var inst_60340 = (inst_60338__$1 == null);
var inst_60341 = cljs.core.not.call(null,inst_60340);
var state_60436__$1 = (function (){var statearr_60441 = state_60436;
(statearr_60441[(8)] = inst_60338__$1);

return statearr_60441;
})();
if(inst_60341){
var statearr_60442_60503 = state_60436__$1;
(statearr_60442_60503[(1)] = (2));

} else {
var statearr_60443_60504 = state_60436__$1;
(statearr_60443_60504[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (24))){
var inst_60410 = (state_60436[(9)]);
var inst_60396 = (state_60436[(10)]);
var inst_60387 = (state_60436[(11)]);
var inst_60410__$1 = inst_60387.call(null,inst_60396);
var state_60436__$1 = (function (){var statearr_60444 = state_60436;
(statearr_60444[(9)] = inst_60410__$1);

return statearr_60444;
})();
if(cljs.core.truth_(inst_60410__$1)){
var statearr_60445_60505 = state_60436__$1;
(statearr_60445_60505[(1)] = (29));

} else {
var statearr_60446_60506 = state_60436__$1;
(statearr_60446_60506[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (4))){
var inst_60354 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60354)){
var statearr_60447_60507 = state_60436__$1;
(statearr_60447_60507[(1)] = (8));

} else {
var statearr_60448_60508 = state_60436__$1;
(statearr_60448_60508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (15))){
var inst_60381 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60381)){
var statearr_60449_60509 = state_60436__$1;
(statearr_60449_60509[(1)] = (19));

} else {
var statearr_60450_60510 = state_60436__$1;
(statearr_60450_60510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (21))){
var inst_60386 = (state_60436[(12)]);
var inst_60386__$1 = (state_60436[(2)]);
var inst_60387 = cljs.core.get.call(null,inst_60386__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60388 = cljs.core.get.call(null,inst_60386__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60389 = cljs.core.get.call(null,inst_60386__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60436__$1 = (function (){var statearr_60451 = state_60436;
(statearr_60451[(11)] = inst_60387);

(statearr_60451[(12)] = inst_60386__$1);

(statearr_60451[(13)] = inst_60388);

return statearr_60451;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60436__$1,(22),inst_60389);
} else {
if((state_val_60437 === (31))){
var inst_60418 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60418)){
var statearr_60452_60511 = state_60436__$1;
(statearr_60452_60511[(1)] = (32));

} else {
var statearr_60453_60512 = state_60436__$1;
(statearr_60453_60512[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (32))){
var inst_60395 = (state_60436[(14)]);
var state_60436__$1 = state_60436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60436__$1,(35),out,inst_60395);
} else {
if((state_val_60437 === (33))){
var inst_60386 = (state_60436[(12)]);
var inst_60363 = inst_60386;
var state_60436__$1 = (function (){var statearr_60454 = state_60436;
(statearr_60454[(7)] = inst_60363);

return statearr_60454;
})();
var statearr_60455_60513 = state_60436__$1;
(statearr_60455_60513[(2)] = null);

(statearr_60455_60513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (13))){
var inst_60363 = (state_60436[(7)]);
var inst_60370 = inst_60363.cljs$lang$protocol_mask$partition0$;
var inst_60371 = (inst_60370 & (64));
var inst_60372 = inst_60363.cljs$core$ISeq$;
var inst_60373 = (cljs.core.PROTOCOL_SENTINEL === inst_60372);
var inst_60374 = (inst_60371) || (inst_60373);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60374)){
var statearr_60456_60514 = state_60436__$1;
(statearr_60456_60514[(1)] = (16));

} else {
var statearr_60457_60515 = state_60436__$1;
(statearr_60457_60515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (22))){
var inst_60395 = (state_60436[(14)]);
var inst_60396 = (state_60436[(10)]);
var inst_60394 = (state_60436[(2)]);
var inst_60395__$1 = cljs.core.nth.call(null,inst_60394,(0),null);
var inst_60396__$1 = cljs.core.nth.call(null,inst_60394,(1),null);
var inst_60397 = (inst_60395__$1 == null);
var inst_60398 = cljs.core._EQ_.call(null,inst_60396__$1,change);
var inst_60399 = (inst_60397) || (inst_60398);
var state_60436__$1 = (function (){var statearr_60458 = state_60436;
(statearr_60458[(14)] = inst_60395__$1);

(statearr_60458[(10)] = inst_60396__$1);

return statearr_60458;
})();
if(cljs.core.truth_(inst_60399)){
var statearr_60459_60516 = state_60436__$1;
(statearr_60459_60516[(1)] = (23));

} else {
var statearr_60460_60517 = state_60436__$1;
(statearr_60460_60517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (36))){
var inst_60386 = (state_60436[(12)]);
var inst_60363 = inst_60386;
var state_60436__$1 = (function (){var statearr_60461 = state_60436;
(statearr_60461[(7)] = inst_60363);

return statearr_60461;
})();
var statearr_60462_60518 = state_60436__$1;
(statearr_60462_60518[(2)] = null);

(statearr_60462_60518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (29))){
var inst_60410 = (state_60436[(9)]);
var state_60436__$1 = state_60436;
var statearr_60463_60519 = state_60436__$1;
(statearr_60463_60519[(2)] = inst_60410);

(statearr_60463_60519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (6))){
var state_60436__$1 = state_60436;
var statearr_60464_60520 = state_60436__$1;
(statearr_60464_60520[(2)] = false);

(statearr_60464_60520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (28))){
var inst_60406 = (state_60436[(2)]);
var inst_60407 = calc_state.call(null);
var inst_60363 = inst_60407;
var state_60436__$1 = (function (){var statearr_60465 = state_60436;
(statearr_60465[(7)] = inst_60363);

(statearr_60465[(15)] = inst_60406);

return statearr_60465;
})();
var statearr_60466_60521 = state_60436__$1;
(statearr_60466_60521[(2)] = null);

(statearr_60466_60521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (25))){
var inst_60432 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
var statearr_60467_60522 = state_60436__$1;
(statearr_60467_60522[(2)] = inst_60432);

(statearr_60467_60522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (34))){
var inst_60430 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
var statearr_60468_60523 = state_60436__$1;
(statearr_60468_60523[(2)] = inst_60430);

(statearr_60468_60523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (17))){
var state_60436__$1 = state_60436;
var statearr_60469_60524 = state_60436__$1;
(statearr_60469_60524[(2)] = false);

(statearr_60469_60524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (3))){
var state_60436__$1 = state_60436;
var statearr_60470_60525 = state_60436__$1;
(statearr_60470_60525[(2)] = false);

(statearr_60470_60525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (12))){
var inst_60434 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60436__$1,inst_60434);
} else {
if((state_val_60437 === (2))){
var inst_60338 = (state_60436[(8)]);
var inst_60343 = inst_60338.cljs$lang$protocol_mask$partition0$;
var inst_60344 = (inst_60343 & (64));
var inst_60345 = inst_60338.cljs$core$ISeq$;
var inst_60346 = (cljs.core.PROTOCOL_SENTINEL === inst_60345);
var inst_60347 = (inst_60344) || (inst_60346);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60347)){
var statearr_60471_60526 = state_60436__$1;
(statearr_60471_60526[(1)] = (5));

} else {
var statearr_60472_60527 = state_60436__$1;
(statearr_60472_60527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (23))){
var inst_60395 = (state_60436[(14)]);
var inst_60401 = (inst_60395 == null);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60401)){
var statearr_60473_60528 = state_60436__$1;
(statearr_60473_60528[(1)] = (26));

} else {
var statearr_60474_60529 = state_60436__$1;
(statearr_60474_60529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (35))){
var inst_60421 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
if(cljs.core.truth_(inst_60421)){
var statearr_60475_60530 = state_60436__$1;
(statearr_60475_60530[(1)] = (36));

} else {
var statearr_60476_60531 = state_60436__$1;
(statearr_60476_60531[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (19))){
var inst_60363 = (state_60436[(7)]);
var inst_60383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60363);
var state_60436__$1 = state_60436;
var statearr_60477_60532 = state_60436__$1;
(statearr_60477_60532[(2)] = inst_60383);

(statearr_60477_60532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (11))){
var inst_60363 = (state_60436[(7)]);
var inst_60367 = (inst_60363 == null);
var inst_60368 = cljs.core.not.call(null,inst_60367);
var state_60436__$1 = state_60436;
if(inst_60368){
var statearr_60478_60533 = state_60436__$1;
(statearr_60478_60533[(1)] = (13));

} else {
var statearr_60479_60534 = state_60436__$1;
(statearr_60479_60534[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (9))){
var inst_60338 = (state_60436[(8)]);
var state_60436__$1 = state_60436;
var statearr_60480_60535 = state_60436__$1;
(statearr_60480_60535[(2)] = inst_60338);

(statearr_60480_60535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (5))){
var state_60436__$1 = state_60436;
var statearr_60481_60536 = state_60436__$1;
(statearr_60481_60536[(2)] = true);

(statearr_60481_60536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (14))){
var state_60436__$1 = state_60436;
var statearr_60482_60537 = state_60436__$1;
(statearr_60482_60537[(2)] = false);

(statearr_60482_60537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (26))){
var inst_60396 = (state_60436[(10)]);
var inst_60403 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_60396);
var state_60436__$1 = state_60436;
var statearr_60483_60538 = state_60436__$1;
(statearr_60483_60538[(2)] = inst_60403);

(statearr_60483_60538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (16))){
var state_60436__$1 = state_60436;
var statearr_60484_60539 = state_60436__$1;
(statearr_60484_60539[(2)] = true);

(statearr_60484_60539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (38))){
var inst_60426 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
var statearr_60485_60540 = state_60436__$1;
(statearr_60485_60540[(2)] = inst_60426);

(statearr_60485_60540[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (30))){
var inst_60396 = (state_60436[(10)]);
var inst_60387 = (state_60436[(11)]);
var inst_60388 = (state_60436[(13)]);
var inst_60413 = cljs.core.empty_QMARK_.call(null,inst_60387);
var inst_60414 = inst_60388.call(null,inst_60396);
var inst_60415 = cljs.core.not.call(null,inst_60414);
var inst_60416 = (inst_60413) && (inst_60415);
var state_60436__$1 = state_60436;
var statearr_60486_60541 = state_60436__$1;
(statearr_60486_60541[(2)] = inst_60416);

(statearr_60486_60541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (10))){
var inst_60338 = (state_60436[(8)]);
var inst_60359 = (state_60436[(2)]);
var inst_60360 = cljs.core.get.call(null,inst_60359,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60361 = cljs.core.get.call(null,inst_60359,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60362 = cljs.core.get.call(null,inst_60359,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60363 = inst_60338;
var state_60436__$1 = (function (){var statearr_60487 = state_60436;
(statearr_60487[(7)] = inst_60363);

(statearr_60487[(16)] = inst_60362);

(statearr_60487[(17)] = inst_60361);

(statearr_60487[(18)] = inst_60360);

return statearr_60487;
})();
var statearr_60488_60542 = state_60436__$1;
(statearr_60488_60542[(2)] = null);

(statearr_60488_60542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (18))){
var inst_60378 = (state_60436[(2)]);
var state_60436__$1 = state_60436;
var statearr_60489_60543 = state_60436__$1;
(statearr_60489_60543[(2)] = inst_60378);

(statearr_60489_60543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (37))){
var state_60436__$1 = state_60436;
var statearr_60490_60544 = state_60436__$1;
(statearr_60490_60544[(2)] = null);

(statearr_60490_60544[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60437 === (8))){
var inst_60338 = (state_60436[(8)]);
var inst_60356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60338);
var state_60436__$1 = state_60436;
var statearr_60491_60545 = state_60436__$1;
(statearr_60491_60545[(2)] = inst_60356);

(statearr_60491_60545[(1)] = (10));


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
});})(c__28998__auto___60499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28886__auto__,c__28998__auto___60499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28887__auto__ = null;
var cljs$core$async$mix_$_state_machine__28887__auto____0 = (function (){
var statearr_60495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60495[(0)] = cljs$core$async$mix_$_state_machine__28887__auto__);

(statearr_60495[(1)] = (1));

return statearr_60495;
});
var cljs$core$async$mix_$_state_machine__28887__auto____1 = (function (state_60436){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_60436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e60496){if((e60496 instanceof Object)){
var ex__28890__auto__ = e60496;
var statearr_60497_60546 = state_60436;
(statearr_60497_60546[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60547 = state_60436;
state_60436 = G__60547;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28887__auto__ = function(state_60436){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28887__auto____1.call(this,state_60436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28887__auto____0;
cljs$core$async$mix_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28887__auto____1;
return cljs$core$async$mix_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___60499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29000__auto__ = (function (){var statearr_60498 = f__28999__auto__.call(null);
(statearr_60498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___60499);

return statearr_60498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___60499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args60548 = [];
var len__26007__auto___60551 = arguments.length;
var i__26008__auto___60552 = (0);
while(true){
if((i__26008__auto___60552 < len__26007__auto___60551)){
args60548.push((arguments[i__26008__auto___60552]));

var G__60553 = (i__26008__auto___60552 + (1));
i__26008__auto___60552 = G__60553;
continue;
} else {
}
break;
}

var G__60550 = args60548.length;
switch (G__60550) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60548.length)].join('')));

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
var args60556 = [];
var len__26007__auto___60681 = arguments.length;
var i__26008__auto___60682 = (0);
while(true){
if((i__26008__auto___60682 < len__26007__auto___60681)){
args60556.push((arguments[i__26008__auto___60682]));

var G__60683 = (i__26008__auto___60682 + (1));
i__26008__auto___60682 = G__60683;
continue;
} else {
}
break;
}

var G__60558 = args60556.length;
switch (G__60558) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60556.length)].join('')));

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
return (function (p1__60555_SHARP_){
if(cljs.core.truth_(p1__60555_SHARP_.call(null,topic))){
return p1__60555_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__60555_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24899__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async60559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60559 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60560){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60560 = meta60560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_60561,meta60560__$1){
var self__ = this;
var _60561__$1 = this;
return (new cljs.core.async.t_cljs$core$async60559(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60560__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_60561){
var self__ = this;
var _60561__$1 = this;
return self__.meta60560;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60560","meta60560",1192718828,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async60559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60559";

cljs.core.async.t_cljs$core$async60559.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async60559");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async60559 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async60559(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60560){
return (new cljs.core.async.t_cljs$core$async60559(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60560));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async60559(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28998__auto___60685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___60685,mults,ensure_mult,p){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___60685,mults,ensure_mult,p){
return (function (state_60633){
var state_val_60634 = (state_60633[(1)]);
if((state_val_60634 === (7))){
var inst_60629 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
var statearr_60635_60686 = state_60633__$1;
(statearr_60635_60686[(2)] = inst_60629);

(statearr_60635_60686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (20))){
var state_60633__$1 = state_60633;
var statearr_60636_60687 = state_60633__$1;
(statearr_60636_60687[(2)] = null);

(statearr_60636_60687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (1))){
var state_60633__$1 = state_60633;
var statearr_60637_60688 = state_60633__$1;
(statearr_60637_60688[(2)] = null);

(statearr_60637_60688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (24))){
var inst_60612 = (state_60633[(7)]);
var inst_60621 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_60612);
var state_60633__$1 = state_60633;
var statearr_60638_60689 = state_60633__$1;
(statearr_60638_60689[(2)] = inst_60621);

(statearr_60638_60689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (4))){
var inst_60564 = (state_60633[(8)]);
var inst_60564__$1 = (state_60633[(2)]);
var inst_60565 = (inst_60564__$1 == null);
var state_60633__$1 = (function (){var statearr_60639 = state_60633;
(statearr_60639[(8)] = inst_60564__$1);

return statearr_60639;
})();
if(cljs.core.truth_(inst_60565)){
var statearr_60640_60690 = state_60633__$1;
(statearr_60640_60690[(1)] = (5));

} else {
var statearr_60641_60691 = state_60633__$1;
(statearr_60641_60691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (15))){
var inst_60606 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
var statearr_60642_60692 = state_60633__$1;
(statearr_60642_60692[(2)] = inst_60606);

(statearr_60642_60692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (21))){
var inst_60626 = (state_60633[(2)]);
var state_60633__$1 = (function (){var statearr_60643 = state_60633;
(statearr_60643[(9)] = inst_60626);

return statearr_60643;
})();
var statearr_60644_60693 = state_60633__$1;
(statearr_60644_60693[(2)] = null);

(statearr_60644_60693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (13))){
var inst_60588 = (state_60633[(10)]);
var inst_60590 = cljs.core.chunked_seq_QMARK_.call(null,inst_60588);
var state_60633__$1 = state_60633;
if(inst_60590){
var statearr_60645_60694 = state_60633__$1;
(statearr_60645_60694[(1)] = (16));

} else {
var statearr_60646_60695 = state_60633__$1;
(statearr_60646_60695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (22))){
var inst_60618 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
if(cljs.core.truth_(inst_60618)){
var statearr_60647_60696 = state_60633__$1;
(statearr_60647_60696[(1)] = (23));

} else {
var statearr_60648_60697 = state_60633__$1;
(statearr_60648_60697[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (6))){
var inst_60614 = (state_60633[(11)]);
var inst_60612 = (state_60633[(7)]);
var inst_60564 = (state_60633[(8)]);
var inst_60612__$1 = topic_fn.call(null,inst_60564);
var inst_60613 = cljs.core.deref.call(null,mults);
var inst_60614__$1 = cljs.core.get.call(null,inst_60613,inst_60612__$1);
var state_60633__$1 = (function (){var statearr_60649 = state_60633;
(statearr_60649[(11)] = inst_60614__$1);

(statearr_60649[(7)] = inst_60612__$1);

return statearr_60649;
})();
if(cljs.core.truth_(inst_60614__$1)){
var statearr_60650_60698 = state_60633__$1;
(statearr_60650_60698[(1)] = (19));

} else {
var statearr_60651_60699 = state_60633__$1;
(statearr_60651_60699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (25))){
var inst_60623 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
var statearr_60652_60700 = state_60633__$1;
(statearr_60652_60700[(2)] = inst_60623);

(statearr_60652_60700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (17))){
var inst_60588 = (state_60633[(10)]);
var inst_60597 = cljs.core.first.call(null,inst_60588);
var inst_60598 = cljs.core.async.muxch_STAR_.call(null,inst_60597);
var inst_60599 = cljs.core.async.close_BANG_.call(null,inst_60598);
var inst_60600 = cljs.core.next.call(null,inst_60588);
var inst_60574 = inst_60600;
var inst_60575 = null;
var inst_60576 = (0);
var inst_60577 = (0);
var state_60633__$1 = (function (){var statearr_60653 = state_60633;
(statearr_60653[(12)] = inst_60577);

(statearr_60653[(13)] = inst_60575);

(statearr_60653[(14)] = inst_60576);

(statearr_60653[(15)] = inst_60599);

(statearr_60653[(16)] = inst_60574);

return statearr_60653;
})();
var statearr_60654_60701 = state_60633__$1;
(statearr_60654_60701[(2)] = null);

(statearr_60654_60701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (3))){
var inst_60631 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60633__$1,inst_60631);
} else {
if((state_val_60634 === (12))){
var inst_60608 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
var statearr_60655_60702 = state_60633__$1;
(statearr_60655_60702[(2)] = inst_60608);

(statearr_60655_60702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (2))){
var state_60633__$1 = state_60633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60633__$1,(4),ch);
} else {
if((state_val_60634 === (23))){
var state_60633__$1 = state_60633;
var statearr_60656_60703 = state_60633__$1;
(statearr_60656_60703[(2)] = null);

(statearr_60656_60703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (19))){
var inst_60614 = (state_60633[(11)]);
var inst_60564 = (state_60633[(8)]);
var inst_60616 = cljs.core.async.muxch_STAR_.call(null,inst_60614);
var state_60633__$1 = state_60633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60633__$1,(22),inst_60616,inst_60564);
} else {
if((state_val_60634 === (11))){
var inst_60588 = (state_60633[(10)]);
var inst_60574 = (state_60633[(16)]);
var inst_60588__$1 = cljs.core.seq.call(null,inst_60574);
var state_60633__$1 = (function (){var statearr_60657 = state_60633;
(statearr_60657[(10)] = inst_60588__$1);

return statearr_60657;
})();
if(inst_60588__$1){
var statearr_60658_60704 = state_60633__$1;
(statearr_60658_60704[(1)] = (13));

} else {
var statearr_60659_60705 = state_60633__$1;
(statearr_60659_60705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (9))){
var inst_60610 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
var statearr_60660_60706 = state_60633__$1;
(statearr_60660_60706[(2)] = inst_60610);

(statearr_60660_60706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (5))){
var inst_60571 = cljs.core.deref.call(null,mults);
var inst_60572 = cljs.core.vals.call(null,inst_60571);
var inst_60573 = cljs.core.seq.call(null,inst_60572);
var inst_60574 = inst_60573;
var inst_60575 = null;
var inst_60576 = (0);
var inst_60577 = (0);
var state_60633__$1 = (function (){var statearr_60661 = state_60633;
(statearr_60661[(12)] = inst_60577);

(statearr_60661[(13)] = inst_60575);

(statearr_60661[(14)] = inst_60576);

(statearr_60661[(16)] = inst_60574);

return statearr_60661;
})();
var statearr_60662_60707 = state_60633__$1;
(statearr_60662_60707[(2)] = null);

(statearr_60662_60707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (14))){
var state_60633__$1 = state_60633;
var statearr_60666_60708 = state_60633__$1;
(statearr_60666_60708[(2)] = null);

(statearr_60666_60708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (16))){
var inst_60588 = (state_60633[(10)]);
var inst_60592 = cljs.core.chunk_first.call(null,inst_60588);
var inst_60593 = cljs.core.chunk_rest.call(null,inst_60588);
var inst_60594 = cljs.core.count.call(null,inst_60592);
var inst_60574 = inst_60593;
var inst_60575 = inst_60592;
var inst_60576 = inst_60594;
var inst_60577 = (0);
var state_60633__$1 = (function (){var statearr_60667 = state_60633;
(statearr_60667[(12)] = inst_60577);

(statearr_60667[(13)] = inst_60575);

(statearr_60667[(14)] = inst_60576);

(statearr_60667[(16)] = inst_60574);

return statearr_60667;
})();
var statearr_60668_60709 = state_60633__$1;
(statearr_60668_60709[(2)] = null);

(statearr_60668_60709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (10))){
var inst_60577 = (state_60633[(12)]);
var inst_60575 = (state_60633[(13)]);
var inst_60576 = (state_60633[(14)]);
var inst_60574 = (state_60633[(16)]);
var inst_60582 = cljs.core._nth.call(null,inst_60575,inst_60577);
var inst_60583 = cljs.core.async.muxch_STAR_.call(null,inst_60582);
var inst_60584 = cljs.core.async.close_BANG_.call(null,inst_60583);
var inst_60585 = (inst_60577 + (1));
var tmp60663 = inst_60575;
var tmp60664 = inst_60576;
var tmp60665 = inst_60574;
var inst_60574__$1 = tmp60665;
var inst_60575__$1 = tmp60663;
var inst_60576__$1 = tmp60664;
var inst_60577__$1 = inst_60585;
var state_60633__$1 = (function (){var statearr_60669 = state_60633;
(statearr_60669[(12)] = inst_60577__$1);

(statearr_60669[(13)] = inst_60575__$1);

(statearr_60669[(14)] = inst_60576__$1);

(statearr_60669[(17)] = inst_60584);

(statearr_60669[(16)] = inst_60574__$1);

return statearr_60669;
})();
var statearr_60670_60710 = state_60633__$1;
(statearr_60670_60710[(2)] = null);

(statearr_60670_60710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (18))){
var inst_60603 = (state_60633[(2)]);
var state_60633__$1 = state_60633;
var statearr_60671_60711 = state_60633__$1;
(statearr_60671_60711[(2)] = inst_60603);

(statearr_60671_60711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60634 === (8))){
var inst_60577 = (state_60633[(12)]);
var inst_60576 = (state_60633[(14)]);
var inst_60579 = (inst_60577 < inst_60576);
var inst_60580 = inst_60579;
var state_60633__$1 = state_60633;
if(cljs.core.truth_(inst_60580)){
var statearr_60672_60712 = state_60633__$1;
(statearr_60672_60712[(1)] = (10));

} else {
var statearr_60673_60713 = state_60633__$1;
(statearr_60673_60713[(1)] = (11));

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
});})(c__28998__auto___60685,mults,ensure_mult,p))
;
return ((function (switch__28886__auto__,c__28998__auto___60685,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_60677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60677[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_60677[(1)] = (1));

return statearr_60677;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_60633){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_60633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e60678){if((e60678 instanceof Object)){
var ex__28890__auto__ = e60678;
var statearr_60679_60714 = state_60633;
(statearr_60679_60714[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60715 = state_60633;
state_60633 = G__60715;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_60633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_60633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___60685,mults,ensure_mult,p))
})();
var state__29000__auto__ = (function (){var statearr_60680 = f__28999__auto__.call(null);
(statearr_60680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___60685);

return statearr_60680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___60685,mults,ensure_mult,p))
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
var args60716 = [];
var len__26007__auto___60719 = arguments.length;
var i__26008__auto___60720 = (0);
while(true){
if((i__26008__auto___60720 < len__26007__auto___60719)){
args60716.push((arguments[i__26008__auto___60720]));

var G__60721 = (i__26008__auto___60720 + (1));
i__26008__auto___60720 = G__60721;
continue;
} else {
}
break;
}

var G__60718 = args60716.length;
switch (G__60718) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60716.length)].join('')));

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
var args60723 = [];
var len__26007__auto___60726 = arguments.length;
var i__26008__auto___60727 = (0);
while(true){
if((i__26008__auto___60727 < len__26007__auto___60726)){
args60723.push((arguments[i__26008__auto___60727]));

var G__60728 = (i__26008__auto___60727 + (1));
i__26008__auto___60727 = G__60728;
continue;
} else {
}
break;
}

var G__60725 = args60723.length;
switch (G__60725) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60723.length)].join('')));

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
var args60730 = [];
var len__26007__auto___60801 = arguments.length;
var i__26008__auto___60802 = (0);
while(true){
if((i__26008__auto___60802 < len__26007__auto___60801)){
args60730.push((arguments[i__26008__auto___60802]));

var G__60803 = (i__26008__auto___60802 + (1));
i__26008__auto___60802 = G__60803;
continue;
} else {
}
break;
}

var G__60732 = args60730.length;
switch (G__60732) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60730.length)].join('')));

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
var c__28998__auto___60805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___60805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___60805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_60771){
var state_val_60772 = (state_60771[(1)]);
if((state_val_60772 === (7))){
var state_60771__$1 = state_60771;
var statearr_60773_60806 = state_60771__$1;
(statearr_60773_60806[(2)] = null);

(statearr_60773_60806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (1))){
var state_60771__$1 = state_60771;
var statearr_60774_60807 = state_60771__$1;
(statearr_60774_60807[(2)] = null);

(statearr_60774_60807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (4))){
var inst_60735 = (state_60771[(7)]);
var inst_60737 = (inst_60735 < cnt);
var state_60771__$1 = state_60771;
if(cljs.core.truth_(inst_60737)){
var statearr_60775_60808 = state_60771__$1;
(statearr_60775_60808[(1)] = (6));

} else {
var statearr_60776_60809 = state_60771__$1;
(statearr_60776_60809[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (15))){
var inst_60767 = (state_60771[(2)]);
var state_60771__$1 = state_60771;
var statearr_60777_60810 = state_60771__$1;
(statearr_60777_60810[(2)] = inst_60767);

(statearr_60777_60810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (13))){
var inst_60760 = cljs.core.async.close_BANG_.call(null,out);
var state_60771__$1 = state_60771;
var statearr_60778_60811 = state_60771__$1;
(statearr_60778_60811[(2)] = inst_60760);

(statearr_60778_60811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (6))){
var state_60771__$1 = state_60771;
var statearr_60779_60812 = state_60771__$1;
(statearr_60779_60812[(2)] = null);

(statearr_60779_60812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (3))){
var inst_60769 = (state_60771[(2)]);
var state_60771__$1 = state_60771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60771__$1,inst_60769);
} else {
if((state_val_60772 === (12))){
var inst_60757 = (state_60771[(8)]);
var inst_60757__$1 = (state_60771[(2)]);
var inst_60758 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_60757__$1);
var state_60771__$1 = (function (){var statearr_60780 = state_60771;
(statearr_60780[(8)] = inst_60757__$1);

return statearr_60780;
})();
if(cljs.core.truth_(inst_60758)){
var statearr_60781_60813 = state_60771__$1;
(statearr_60781_60813[(1)] = (13));

} else {
var statearr_60782_60814 = state_60771__$1;
(statearr_60782_60814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (2))){
var inst_60734 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_60735 = (0);
var state_60771__$1 = (function (){var statearr_60783 = state_60771;
(statearr_60783[(7)] = inst_60735);

(statearr_60783[(9)] = inst_60734);

return statearr_60783;
})();
var statearr_60784_60815 = state_60771__$1;
(statearr_60784_60815[(2)] = null);

(statearr_60784_60815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (11))){
var inst_60735 = (state_60771[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60771,(10),Object,null,(9));
var inst_60744 = chs__$1.call(null,inst_60735);
var inst_60745 = done.call(null,inst_60735);
var inst_60746 = cljs.core.async.take_BANG_.call(null,inst_60744,inst_60745);
var state_60771__$1 = state_60771;
var statearr_60785_60816 = state_60771__$1;
(statearr_60785_60816[(2)] = inst_60746);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60771__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (9))){
var inst_60735 = (state_60771[(7)]);
var inst_60748 = (state_60771[(2)]);
var inst_60749 = (inst_60735 + (1));
var inst_60735__$1 = inst_60749;
var state_60771__$1 = (function (){var statearr_60786 = state_60771;
(statearr_60786[(7)] = inst_60735__$1);

(statearr_60786[(10)] = inst_60748);

return statearr_60786;
})();
var statearr_60787_60817 = state_60771__$1;
(statearr_60787_60817[(2)] = null);

(statearr_60787_60817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (5))){
var inst_60755 = (state_60771[(2)]);
var state_60771__$1 = (function (){var statearr_60788 = state_60771;
(statearr_60788[(11)] = inst_60755);

return statearr_60788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60771__$1,(12),dchan);
} else {
if((state_val_60772 === (14))){
var inst_60757 = (state_60771[(8)]);
var inst_60762 = cljs.core.apply.call(null,f,inst_60757);
var state_60771__$1 = state_60771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60771__$1,(16),out,inst_60762);
} else {
if((state_val_60772 === (16))){
var inst_60764 = (state_60771[(2)]);
var state_60771__$1 = (function (){var statearr_60789 = state_60771;
(statearr_60789[(12)] = inst_60764);

return statearr_60789;
})();
var statearr_60790_60818 = state_60771__$1;
(statearr_60790_60818[(2)] = null);

(statearr_60790_60818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (10))){
var inst_60739 = (state_60771[(2)]);
var inst_60740 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_60771__$1 = (function (){var statearr_60791 = state_60771;
(statearr_60791[(13)] = inst_60739);

return statearr_60791;
})();
var statearr_60792_60819 = state_60771__$1;
(statearr_60792_60819[(2)] = inst_60740);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60771__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60772 === (8))){
var inst_60753 = (state_60771[(2)]);
var state_60771__$1 = state_60771;
var statearr_60793_60820 = state_60771__$1;
(statearr_60793_60820[(2)] = inst_60753);

(statearr_60793_60820[(1)] = (5));


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
});})(c__28998__auto___60805,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28886__auto__,c__28998__auto___60805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_60797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60797[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_60797[(1)] = (1));

return statearr_60797;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_60771){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_60771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e60798){if((e60798 instanceof Object)){
var ex__28890__auto__ = e60798;
var statearr_60799_60821 = state_60771;
(statearr_60799_60821[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60822 = state_60771;
state_60771 = G__60822;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_60771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_60771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___60805,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29000__auto__ = (function (){var statearr_60800 = f__28999__auto__.call(null);
(statearr_60800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___60805);

return statearr_60800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___60805,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args60824 = [];
var len__26007__auto___60882 = arguments.length;
var i__26008__auto___60883 = (0);
while(true){
if((i__26008__auto___60883 < len__26007__auto___60882)){
args60824.push((arguments[i__26008__auto___60883]));

var G__60884 = (i__26008__auto___60883 + (1));
i__26008__auto___60883 = G__60884;
continue;
} else {
}
break;
}

var G__60826 = args60824.length;
switch (G__60826) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60824.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___60886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___60886,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___60886,out){
return (function (state_60858){
var state_val_60859 = (state_60858[(1)]);
if((state_val_60859 === (7))){
var inst_60838 = (state_60858[(7)]);
var inst_60837 = (state_60858[(8)]);
var inst_60837__$1 = (state_60858[(2)]);
var inst_60838__$1 = cljs.core.nth.call(null,inst_60837__$1,(0),null);
var inst_60839 = cljs.core.nth.call(null,inst_60837__$1,(1),null);
var inst_60840 = (inst_60838__$1 == null);
var state_60858__$1 = (function (){var statearr_60860 = state_60858;
(statearr_60860[(7)] = inst_60838__$1);

(statearr_60860[(9)] = inst_60839);

(statearr_60860[(8)] = inst_60837__$1);

return statearr_60860;
})();
if(cljs.core.truth_(inst_60840)){
var statearr_60861_60887 = state_60858__$1;
(statearr_60861_60887[(1)] = (8));

} else {
var statearr_60862_60888 = state_60858__$1;
(statearr_60862_60888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (1))){
var inst_60827 = cljs.core.vec.call(null,chs);
var inst_60828 = inst_60827;
var state_60858__$1 = (function (){var statearr_60863 = state_60858;
(statearr_60863[(10)] = inst_60828);

return statearr_60863;
})();
var statearr_60864_60889 = state_60858__$1;
(statearr_60864_60889[(2)] = null);

(statearr_60864_60889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (4))){
var inst_60828 = (state_60858[(10)]);
var state_60858__$1 = state_60858;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60858__$1,(7),inst_60828);
} else {
if((state_val_60859 === (6))){
var inst_60854 = (state_60858[(2)]);
var state_60858__$1 = state_60858;
var statearr_60865_60890 = state_60858__$1;
(statearr_60865_60890[(2)] = inst_60854);

(statearr_60865_60890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (3))){
var inst_60856 = (state_60858[(2)]);
var state_60858__$1 = state_60858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60858__$1,inst_60856);
} else {
if((state_val_60859 === (2))){
var inst_60828 = (state_60858[(10)]);
var inst_60830 = cljs.core.count.call(null,inst_60828);
var inst_60831 = (inst_60830 > (0));
var state_60858__$1 = state_60858;
if(cljs.core.truth_(inst_60831)){
var statearr_60867_60891 = state_60858__$1;
(statearr_60867_60891[(1)] = (4));

} else {
var statearr_60868_60892 = state_60858__$1;
(statearr_60868_60892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (11))){
var inst_60828 = (state_60858[(10)]);
var inst_60847 = (state_60858[(2)]);
var tmp60866 = inst_60828;
var inst_60828__$1 = tmp60866;
var state_60858__$1 = (function (){var statearr_60869 = state_60858;
(statearr_60869[(11)] = inst_60847);

(statearr_60869[(10)] = inst_60828__$1);

return statearr_60869;
})();
var statearr_60870_60893 = state_60858__$1;
(statearr_60870_60893[(2)] = null);

(statearr_60870_60893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (9))){
var inst_60838 = (state_60858[(7)]);
var state_60858__$1 = state_60858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60858__$1,(11),out,inst_60838);
} else {
if((state_val_60859 === (5))){
var inst_60852 = cljs.core.async.close_BANG_.call(null,out);
var state_60858__$1 = state_60858;
var statearr_60871_60894 = state_60858__$1;
(statearr_60871_60894[(2)] = inst_60852);

(statearr_60871_60894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (10))){
var inst_60850 = (state_60858[(2)]);
var state_60858__$1 = state_60858;
var statearr_60872_60895 = state_60858__$1;
(statearr_60872_60895[(2)] = inst_60850);

(statearr_60872_60895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60859 === (8))){
var inst_60838 = (state_60858[(7)]);
var inst_60839 = (state_60858[(9)]);
var inst_60837 = (state_60858[(8)]);
var inst_60828 = (state_60858[(10)]);
var inst_60842 = (function (){var cs = inst_60828;
var vec__60833 = inst_60837;
var v = inst_60838;
var c = inst_60839;
return ((function (cs,vec__60833,v,c,inst_60838,inst_60839,inst_60837,inst_60828,state_val_60859,c__28998__auto___60886,out){
return (function (p1__60823_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__60823_SHARP_);
});
;})(cs,vec__60833,v,c,inst_60838,inst_60839,inst_60837,inst_60828,state_val_60859,c__28998__auto___60886,out))
})();
var inst_60843 = cljs.core.filterv.call(null,inst_60842,inst_60828);
var inst_60828__$1 = inst_60843;
var state_60858__$1 = (function (){var statearr_60873 = state_60858;
(statearr_60873[(10)] = inst_60828__$1);

return statearr_60873;
})();
var statearr_60874_60896 = state_60858__$1;
(statearr_60874_60896[(2)] = null);

(statearr_60874_60896[(1)] = (2));


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
});})(c__28998__auto___60886,out))
;
return ((function (switch__28886__auto__,c__28998__auto___60886,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_60878 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60878[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_60878[(1)] = (1));

return statearr_60878;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_60858){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_60858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e60879){if((e60879 instanceof Object)){
var ex__28890__auto__ = e60879;
var statearr_60880_60897 = state_60858;
(statearr_60880_60897[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60898 = state_60858;
state_60858 = G__60898;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_60858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_60858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___60886,out))
})();
var state__29000__auto__ = (function (){var statearr_60881 = f__28999__auto__.call(null);
(statearr_60881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___60886);

return statearr_60881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___60886,out))
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
var args60899 = [];
var len__26007__auto___60948 = arguments.length;
var i__26008__auto___60949 = (0);
while(true){
if((i__26008__auto___60949 < len__26007__auto___60948)){
args60899.push((arguments[i__26008__auto___60949]));

var G__60950 = (i__26008__auto___60949 + (1));
i__26008__auto___60949 = G__60950;
continue;
} else {
}
break;
}

var G__60901 = args60899.length;
switch (G__60901) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60899.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___60952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___60952,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___60952,out){
return (function (state_60925){
var state_val_60926 = (state_60925[(1)]);
if((state_val_60926 === (7))){
var inst_60907 = (state_60925[(7)]);
var inst_60907__$1 = (state_60925[(2)]);
var inst_60908 = (inst_60907__$1 == null);
var inst_60909 = cljs.core.not.call(null,inst_60908);
var state_60925__$1 = (function (){var statearr_60927 = state_60925;
(statearr_60927[(7)] = inst_60907__$1);

return statearr_60927;
})();
if(inst_60909){
var statearr_60928_60953 = state_60925__$1;
(statearr_60928_60953[(1)] = (8));

} else {
var statearr_60929_60954 = state_60925__$1;
(statearr_60929_60954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (1))){
var inst_60902 = (0);
var state_60925__$1 = (function (){var statearr_60930 = state_60925;
(statearr_60930[(8)] = inst_60902);

return statearr_60930;
})();
var statearr_60931_60955 = state_60925__$1;
(statearr_60931_60955[(2)] = null);

(statearr_60931_60955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (4))){
var state_60925__$1 = state_60925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60925__$1,(7),ch);
} else {
if((state_val_60926 === (6))){
var inst_60920 = (state_60925[(2)]);
var state_60925__$1 = state_60925;
var statearr_60932_60956 = state_60925__$1;
(statearr_60932_60956[(2)] = inst_60920);

(statearr_60932_60956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (3))){
var inst_60922 = (state_60925[(2)]);
var inst_60923 = cljs.core.async.close_BANG_.call(null,out);
var state_60925__$1 = (function (){var statearr_60933 = state_60925;
(statearr_60933[(9)] = inst_60922);

return statearr_60933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60925__$1,inst_60923);
} else {
if((state_val_60926 === (2))){
var inst_60902 = (state_60925[(8)]);
var inst_60904 = (inst_60902 < n);
var state_60925__$1 = state_60925;
if(cljs.core.truth_(inst_60904)){
var statearr_60934_60957 = state_60925__$1;
(statearr_60934_60957[(1)] = (4));

} else {
var statearr_60935_60958 = state_60925__$1;
(statearr_60935_60958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (11))){
var inst_60902 = (state_60925[(8)]);
var inst_60912 = (state_60925[(2)]);
var inst_60913 = (inst_60902 + (1));
var inst_60902__$1 = inst_60913;
var state_60925__$1 = (function (){var statearr_60936 = state_60925;
(statearr_60936[(10)] = inst_60912);

(statearr_60936[(8)] = inst_60902__$1);

return statearr_60936;
})();
var statearr_60937_60959 = state_60925__$1;
(statearr_60937_60959[(2)] = null);

(statearr_60937_60959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (9))){
var state_60925__$1 = state_60925;
var statearr_60938_60960 = state_60925__$1;
(statearr_60938_60960[(2)] = null);

(statearr_60938_60960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (5))){
var state_60925__$1 = state_60925;
var statearr_60939_60961 = state_60925__$1;
(statearr_60939_60961[(2)] = null);

(statearr_60939_60961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (10))){
var inst_60917 = (state_60925[(2)]);
var state_60925__$1 = state_60925;
var statearr_60940_60962 = state_60925__$1;
(statearr_60940_60962[(2)] = inst_60917);

(statearr_60940_60962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60926 === (8))){
var inst_60907 = (state_60925[(7)]);
var state_60925__$1 = state_60925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60925__$1,(11),out,inst_60907);
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
});})(c__28998__auto___60952,out))
;
return ((function (switch__28886__auto__,c__28998__auto___60952,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_60944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60944[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_60944[(1)] = (1));

return statearr_60944;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_60925){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_60925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e60945){if((e60945 instanceof Object)){
var ex__28890__auto__ = e60945;
var statearr_60946_60963 = state_60925;
(statearr_60946_60963[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60964 = state_60925;
state_60925 = G__60964;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_60925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_60925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___60952,out))
})();
var state__29000__auto__ = (function (){var statearr_60947 = f__28999__auto__.call(null);
(statearr_60947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___60952);

return statearr_60947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___60952,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async60972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60972 = (function (f,ch,meta60973){
this.f = f;
this.ch = ch;
this.meta60973 = meta60973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60974,meta60973__$1){
var self__ = this;
var _60974__$1 = this;
return (new cljs.core.async.t_cljs$core$async60972(self__.f,self__.ch,meta60973__$1));
});

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60974){
var self__ = this;
var _60974__$1 = this;
return self__.meta60973;
});

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async60975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60975 = (function (f,ch,meta60973,_,fn1,meta60976){
this.f = f;
this.ch = ch;
this.meta60973 = meta60973;
this._ = _;
this.fn1 = fn1;
this.meta60976 = meta60976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_60977,meta60976__$1){
var self__ = this;
var _60977__$1 = this;
return (new cljs.core.async.t_cljs$core$async60975(self__.f,self__.ch,self__.meta60973,self__._,self__.fn1,meta60976__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async60975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_60977){
var self__ = this;
var _60977__$1 = this;
return self__.meta60976;
});})(___$1))
;

cljs.core.async.t_cljs$core$async60975.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async60975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async60975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__60965_SHARP_){
return f1.call(null,(((p1__60965_SHARP_ == null))?null:self__.f.call(null,p1__60965_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async60975.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60973","meta60973",-1718493051,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60972","cljs.core.async/t_cljs$core$async60972",1309251623,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60976","meta60976",1362314215,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async60975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60975";

cljs.core.async.t_cljs$core$async60975.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async60975");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async60975 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60975(f__$1,ch__$1,meta60973__$1,___$2,fn1__$1,meta60976){
return (new cljs.core.async.t_cljs$core$async60975(f__$1,ch__$1,meta60973__$1,___$2,fn1__$1,meta60976));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async60975(self__.f,self__.ch,self__.meta60973,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async60972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60973","meta60973",-1718493051,null)], null);
});

cljs.core.async.t_cljs$core$async60972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60972";

cljs.core.async.t_cljs$core$async60972.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async60972");
});

cljs.core.async.__GT_t_cljs$core$async60972 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60972(f__$1,ch__$1,meta60973){
return (new cljs.core.async.t_cljs$core$async60972(f__$1,ch__$1,meta60973));
});

}

return (new cljs.core.async.t_cljs$core$async60972(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async60981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60981 = (function (f,ch,meta60982){
this.f = f;
this.ch = ch;
this.meta60982 = meta60982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60983,meta60982__$1){
var self__ = this;
var _60983__$1 = this;
return (new cljs.core.async.t_cljs$core$async60981(self__.f,self__.ch,meta60982__$1));
});

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60983){
var self__ = this;
var _60983__$1 = this;
return self__.meta60982;
});

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async60981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60982","meta60982",1917989701,null)], null);
});

cljs.core.async.t_cljs$core$async60981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60981";

cljs.core.async.t_cljs$core$async60981.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async60981");
});

cljs.core.async.__GT_t_cljs$core$async60981 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60981(f__$1,ch__$1,meta60982){
return (new cljs.core.async.t_cljs$core$async60981(f__$1,ch__$1,meta60982));
});

}

return (new cljs.core.async.t_cljs$core$async60981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async60987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60987 = (function (p,ch,meta60988){
this.p = p;
this.ch = ch;
this.meta60988 = meta60988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60989,meta60988__$1){
var self__ = this;
var _60989__$1 = this;
return (new cljs.core.async.t_cljs$core$async60987(self__.p,self__.ch,meta60988__$1));
});

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60989){
var self__ = this;
var _60989__$1 = this;
return self__.meta60988;
});

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async60987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60988","meta60988",-52749079,null)], null);
});

cljs.core.async.t_cljs$core$async60987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60987";

cljs.core.async.t_cljs$core$async60987.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async60987");
});

cljs.core.async.__GT_t_cljs$core$async60987 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60987(p__$1,ch__$1,meta60988){
return (new cljs.core.async.t_cljs$core$async60987(p__$1,ch__$1,meta60988));
});

}

return (new cljs.core.async.t_cljs$core$async60987(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args60990 = [];
var len__26007__auto___61034 = arguments.length;
var i__26008__auto___61035 = (0);
while(true){
if((i__26008__auto___61035 < len__26007__auto___61034)){
args60990.push((arguments[i__26008__auto___61035]));

var G__61036 = (i__26008__auto___61035 + (1));
i__26008__auto___61035 = G__61036;
continue;
} else {
}
break;
}

var G__60992 = args60990.length;
switch (G__60992) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60990.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___61038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___61038,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___61038,out){
return (function (state_61013){
var state_val_61014 = (state_61013[(1)]);
if((state_val_61014 === (7))){
var inst_61009 = (state_61013[(2)]);
var state_61013__$1 = state_61013;
var statearr_61015_61039 = state_61013__$1;
(statearr_61015_61039[(2)] = inst_61009);

(statearr_61015_61039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (1))){
var state_61013__$1 = state_61013;
var statearr_61016_61040 = state_61013__$1;
(statearr_61016_61040[(2)] = null);

(statearr_61016_61040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (4))){
var inst_60995 = (state_61013[(7)]);
var inst_60995__$1 = (state_61013[(2)]);
var inst_60996 = (inst_60995__$1 == null);
var state_61013__$1 = (function (){var statearr_61017 = state_61013;
(statearr_61017[(7)] = inst_60995__$1);

return statearr_61017;
})();
if(cljs.core.truth_(inst_60996)){
var statearr_61018_61041 = state_61013__$1;
(statearr_61018_61041[(1)] = (5));

} else {
var statearr_61019_61042 = state_61013__$1;
(statearr_61019_61042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (6))){
var inst_60995 = (state_61013[(7)]);
var inst_61000 = p.call(null,inst_60995);
var state_61013__$1 = state_61013;
if(cljs.core.truth_(inst_61000)){
var statearr_61020_61043 = state_61013__$1;
(statearr_61020_61043[(1)] = (8));

} else {
var statearr_61021_61044 = state_61013__$1;
(statearr_61021_61044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (3))){
var inst_61011 = (state_61013[(2)]);
var state_61013__$1 = state_61013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61013__$1,inst_61011);
} else {
if((state_val_61014 === (2))){
var state_61013__$1 = state_61013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61013__$1,(4),ch);
} else {
if((state_val_61014 === (11))){
var inst_61003 = (state_61013[(2)]);
var state_61013__$1 = state_61013;
var statearr_61022_61045 = state_61013__$1;
(statearr_61022_61045[(2)] = inst_61003);

(statearr_61022_61045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (9))){
var state_61013__$1 = state_61013;
var statearr_61023_61046 = state_61013__$1;
(statearr_61023_61046[(2)] = null);

(statearr_61023_61046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (5))){
var inst_60998 = cljs.core.async.close_BANG_.call(null,out);
var state_61013__$1 = state_61013;
var statearr_61024_61047 = state_61013__$1;
(statearr_61024_61047[(2)] = inst_60998);

(statearr_61024_61047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (10))){
var inst_61006 = (state_61013[(2)]);
var state_61013__$1 = (function (){var statearr_61025 = state_61013;
(statearr_61025[(8)] = inst_61006);

return statearr_61025;
})();
var statearr_61026_61048 = state_61013__$1;
(statearr_61026_61048[(2)] = null);

(statearr_61026_61048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (8))){
var inst_60995 = (state_61013[(7)]);
var state_61013__$1 = state_61013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61013__$1,(11),out,inst_60995);
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
});})(c__28998__auto___61038,out))
;
return ((function (switch__28886__auto__,c__28998__auto___61038,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_61030 = [null,null,null,null,null,null,null,null,null];
(statearr_61030[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_61030[(1)] = (1));

return statearr_61030;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_61013){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61031){if((e61031 instanceof Object)){
var ex__28890__auto__ = e61031;
var statearr_61032_61049 = state_61013;
(statearr_61032_61049[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61050 = state_61013;
state_61013 = G__61050;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_61013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_61013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___61038,out))
})();
var state__29000__auto__ = (function (){var statearr_61033 = f__28999__auto__.call(null);
(statearr_61033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___61038);

return statearr_61033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___61038,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args61051 = [];
var len__26007__auto___61054 = arguments.length;
var i__26008__auto___61055 = (0);
while(true){
if((i__26008__auto___61055 < len__26007__auto___61054)){
args61051.push((arguments[i__26008__auto___61055]));

var G__61056 = (i__26008__auto___61055 + (1));
i__26008__auto___61055 = G__61056;
continue;
} else {
}
break;
}

var G__61053 = args61051.length;
switch (G__61053) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61051.length)].join('')));

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
return (function (state_61223){
var state_val_61224 = (state_61223[(1)]);
if((state_val_61224 === (7))){
var inst_61219 = (state_61223[(2)]);
var state_61223__$1 = state_61223;
var statearr_61225_61266 = state_61223__$1;
(statearr_61225_61266[(2)] = inst_61219);

(statearr_61225_61266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (20))){
var inst_61189 = (state_61223[(7)]);
var inst_61200 = (state_61223[(2)]);
var inst_61201 = cljs.core.next.call(null,inst_61189);
var inst_61175 = inst_61201;
var inst_61176 = null;
var inst_61177 = (0);
var inst_61178 = (0);
var state_61223__$1 = (function (){var statearr_61226 = state_61223;
(statearr_61226[(8)] = inst_61177);

(statearr_61226[(9)] = inst_61200);

(statearr_61226[(10)] = inst_61175);

(statearr_61226[(11)] = inst_61176);

(statearr_61226[(12)] = inst_61178);

return statearr_61226;
})();
var statearr_61227_61267 = state_61223__$1;
(statearr_61227_61267[(2)] = null);

(statearr_61227_61267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (1))){
var state_61223__$1 = state_61223;
var statearr_61228_61268 = state_61223__$1;
(statearr_61228_61268[(2)] = null);

(statearr_61228_61268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (4))){
var inst_61164 = (state_61223[(13)]);
var inst_61164__$1 = (state_61223[(2)]);
var inst_61165 = (inst_61164__$1 == null);
var state_61223__$1 = (function (){var statearr_61229 = state_61223;
(statearr_61229[(13)] = inst_61164__$1);

return statearr_61229;
})();
if(cljs.core.truth_(inst_61165)){
var statearr_61230_61269 = state_61223__$1;
(statearr_61230_61269[(1)] = (5));

} else {
var statearr_61231_61270 = state_61223__$1;
(statearr_61231_61270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (15))){
var state_61223__$1 = state_61223;
var statearr_61235_61271 = state_61223__$1;
(statearr_61235_61271[(2)] = null);

(statearr_61235_61271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (21))){
var state_61223__$1 = state_61223;
var statearr_61236_61272 = state_61223__$1;
(statearr_61236_61272[(2)] = null);

(statearr_61236_61272[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (13))){
var inst_61177 = (state_61223[(8)]);
var inst_61175 = (state_61223[(10)]);
var inst_61176 = (state_61223[(11)]);
var inst_61178 = (state_61223[(12)]);
var inst_61185 = (state_61223[(2)]);
var inst_61186 = (inst_61178 + (1));
var tmp61232 = inst_61177;
var tmp61233 = inst_61175;
var tmp61234 = inst_61176;
var inst_61175__$1 = tmp61233;
var inst_61176__$1 = tmp61234;
var inst_61177__$1 = tmp61232;
var inst_61178__$1 = inst_61186;
var state_61223__$1 = (function (){var statearr_61237 = state_61223;
(statearr_61237[(14)] = inst_61185);

(statearr_61237[(8)] = inst_61177__$1);

(statearr_61237[(10)] = inst_61175__$1);

(statearr_61237[(11)] = inst_61176__$1);

(statearr_61237[(12)] = inst_61178__$1);

return statearr_61237;
})();
var statearr_61238_61273 = state_61223__$1;
(statearr_61238_61273[(2)] = null);

(statearr_61238_61273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (22))){
var state_61223__$1 = state_61223;
var statearr_61239_61274 = state_61223__$1;
(statearr_61239_61274[(2)] = null);

(statearr_61239_61274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (6))){
var inst_61164 = (state_61223[(13)]);
var inst_61173 = f.call(null,inst_61164);
var inst_61174 = cljs.core.seq.call(null,inst_61173);
var inst_61175 = inst_61174;
var inst_61176 = null;
var inst_61177 = (0);
var inst_61178 = (0);
var state_61223__$1 = (function (){var statearr_61240 = state_61223;
(statearr_61240[(8)] = inst_61177);

(statearr_61240[(10)] = inst_61175);

(statearr_61240[(11)] = inst_61176);

(statearr_61240[(12)] = inst_61178);

return statearr_61240;
})();
var statearr_61241_61275 = state_61223__$1;
(statearr_61241_61275[(2)] = null);

(statearr_61241_61275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (17))){
var inst_61189 = (state_61223[(7)]);
var inst_61193 = cljs.core.chunk_first.call(null,inst_61189);
var inst_61194 = cljs.core.chunk_rest.call(null,inst_61189);
var inst_61195 = cljs.core.count.call(null,inst_61193);
var inst_61175 = inst_61194;
var inst_61176 = inst_61193;
var inst_61177 = inst_61195;
var inst_61178 = (0);
var state_61223__$1 = (function (){var statearr_61242 = state_61223;
(statearr_61242[(8)] = inst_61177);

(statearr_61242[(10)] = inst_61175);

(statearr_61242[(11)] = inst_61176);

(statearr_61242[(12)] = inst_61178);

return statearr_61242;
})();
var statearr_61243_61276 = state_61223__$1;
(statearr_61243_61276[(2)] = null);

(statearr_61243_61276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (3))){
var inst_61221 = (state_61223[(2)]);
var state_61223__$1 = state_61223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61223__$1,inst_61221);
} else {
if((state_val_61224 === (12))){
var inst_61209 = (state_61223[(2)]);
var state_61223__$1 = state_61223;
var statearr_61244_61277 = state_61223__$1;
(statearr_61244_61277[(2)] = inst_61209);

(statearr_61244_61277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (2))){
var state_61223__$1 = state_61223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61223__$1,(4),in$);
} else {
if((state_val_61224 === (23))){
var inst_61217 = (state_61223[(2)]);
var state_61223__$1 = state_61223;
var statearr_61245_61278 = state_61223__$1;
(statearr_61245_61278[(2)] = inst_61217);

(statearr_61245_61278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (19))){
var inst_61204 = (state_61223[(2)]);
var state_61223__$1 = state_61223;
var statearr_61246_61279 = state_61223__$1;
(statearr_61246_61279[(2)] = inst_61204);

(statearr_61246_61279[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (11))){
var inst_61189 = (state_61223[(7)]);
var inst_61175 = (state_61223[(10)]);
var inst_61189__$1 = cljs.core.seq.call(null,inst_61175);
var state_61223__$1 = (function (){var statearr_61247 = state_61223;
(statearr_61247[(7)] = inst_61189__$1);

return statearr_61247;
})();
if(inst_61189__$1){
var statearr_61248_61280 = state_61223__$1;
(statearr_61248_61280[(1)] = (14));

} else {
var statearr_61249_61281 = state_61223__$1;
(statearr_61249_61281[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (9))){
var inst_61211 = (state_61223[(2)]);
var inst_61212 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_61223__$1 = (function (){var statearr_61250 = state_61223;
(statearr_61250[(15)] = inst_61211);

return statearr_61250;
})();
if(cljs.core.truth_(inst_61212)){
var statearr_61251_61282 = state_61223__$1;
(statearr_61251_61282[(1)] = (21));

} else {
var statearr_61252_61283 = state_61223__$1;
(statearr_61252_61283[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (5))){
var inst_61167 = cljs.core.async.close_BANG_.call(null,out);
var state_61223__$1 = state_61223;
var statearr_61253_61284 = state_61223__$1;
(statearr_61253_61284[(2)] = inst_61167);

(statearr_61253_61284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (14))){
var inst_61189 = (state_61223[(7)]);
var inst_61191 = cljs.core.chunked_seq_QMARK_.call(null,inst_61189);
var state_61223__$1 = state_61223;
if(inst_61191){
var statearr_61254_61285 = state_61223__$1;
(statearr_61254_61285[(1)] = (17));

} else {
var statearr_61255_61286 = state_61223__$1;
(statearr_61255_61286[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (16))){
var inst_61207 = (state_61223[(2)]);
var state_61223__$1 = state_61223;
var statearr_61256_61287 = state_61223__$1;
(statearr_61256_61287[(2)] = inst_61207);

(statearr_61256_61287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61224 === (10))){
var inst_61176 = (state_61223[(11)]);
var inst_61178 = (state_61223[(12)]);
var inst_61183 = cljs.core._nth.call(null,inst_61176,inst_61178);
var state_61223__$1 = state_61223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61223__$1,(13),out,inst_61183);
} else {
if((state_val_61224 === (18))){
var inst_61189 = (state_61223[(7)]);
var inst_61198 = cljs.core.first.call(null,inst_61189);
var state_61223__$1 = state_61223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61223__$1,(20),out,inst_61198);
} else {
if((state_val_61224 === (8))){
var inst_61177 = (state_61223[(8)]);
var inst_61178 = (state_61223[(12)]);
var inst_61180 = (inst_61178 < inst_61177);
var inst_61181 = inst_61180;
var state_61223__$1 = state_61223;
if(cljs.core.truth_(inst_61181)){
var statearr_61257_61288 = state_61223__$1;
(statearr_61257_61288[(1)] = (10));

} else {
var statearr_61258_61289 = state_61223__$1;
(statearr_61258_61289[(1)] = (11));

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
var statearr_61262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61262[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__);

(statearr_61262[(1)] = (1));

return statearr_61262;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1 = (function (state_61223){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61263){if((e61263 instanceof Object)){
var ex__28890__auto__ = e61263;
var statearr_61264_61290 = state_61223;
(statearr_61264_61290[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61291 = state_61223;
state_61223 = G__61291;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__ = function(state_61223){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1.call(this,state_61223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_61265 = f__28999__auto__.call(null);
(statearr_61265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_61265;
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
var args61292 = [];
var len__26007__auto___61295 = arguments.length;
var i__26008__auto___61296 = (0);
while(true){
if((i__26008__auto___61296 < len__26007__auto___61295)){
args61292.push((arguments[i__26008__auto___61296]));

var G__61297 = (i__26008__auto___61296 + (1));
i__26008__auto___61296 = G__61297;
continue;
} else {
}
break;
}

var G__61294 = args61292.length;
switch (G__61294) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61292.length)].join('')));

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
var args61299 = [];
var len__26007__auto___61302 = arguments.length;
var i__26008__auto___61303 = (0);
while(true){
if((i__26008__auto___61303 < len__26007__auto___61302)){
args61299.push((arguments[i__26008__auto___61303]));

var G__61304 = (i__26008__auto___61303 + (1));
i__26008__auto___61303 = G__61304;
continue;
} else {
}
break;
}

var G__61301 = args61299.length;
switch (G__61301) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61299.length)].join('')));

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
var args61306 = [];
var len__26007__auto___61357 = arguments.length;
var i__26008__auto___61358 = (0);
while(true){
if((i__26008__auto___61358 < len__26007__auto___61357)){
args61306.push((arguments[i__26008__auto___61358]));

var G__61359 = (i__26008__auto___61358 + (1));
i__26008__auto___61358 = G__61359;
continue;
} else {
}
break;
}

var G__61308 = args61306.length;
switch (G__61308) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61306.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___61361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___61361,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___61361,out){
return (function (state_61332){
var state_val_61333 = (state_61332[(1)]);
if((state_val_61333 === (7))){
var inst_61327 = (state_61332[(2)]);
var state_61332__$1 = state_61332;
var statearr_61334_61362 = state_61332__$1;
(statearr_61334_61362[(2)] = inst_61327);

(statearr_61334_61362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (1))){
var inst_61309 = null;
var state_61332__$1 = (function (){var statearr_61335 = state_61332;
(statearr_61335[(7)] = inst_61309);

return statearr_61335;
})();
var statearr_61336_61363 = state_61332__$1;
(statearr_61336_61363[(2)] = null);

(statearr_61336_61363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (4))){
var inst_61312 = (state_61332[(8)]);
var inst_61312__$1 = (state_61332[(2)]);
var inst_61313 = (inst_61312__$1 == null);
var inst_61314 = cljs.core.not.call(null,inst_61313);
var state_61332__$1 = (function (){var statearr_61337 = state_61332;
(statearr_61337[(8)] = inst_61312__$1);

return statearr_61337;
})();
if(inst_61314){
var statearr_61338_61364 = state_61332__$1;
(statearr_61338_61364[(1)] = (5));

} else {
var statearr_61339_61365 = state_61332__$1;
(statearr_61339_61365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (6))){
var state_61332__$1 = state_61332;
var statearr_61340_61366 = state_61332__$1;
(statearr_61340_61366[(2)] = null);

(statearr_61340_61366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (3))){
var inst_61329 = (state_61332[(2)]);
var inst_61330 = cljs.core.async.close_BANG_.call(null,out);
var state_61332__$1 = (function (){var statearr_61341 = state_61332;
(statearr_61341[(9)] = inst_61329);

return statearr_61341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61332__$1,inst_61330);
} else {
if((state_val_61333 === (2))){
var state_61332__$1 = state_61332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61332__$1,(4),ch);
} else {
if((state_val_61333 === (11))){
var inst_61312 = (state_61332[(8)]);
var inst_61321 = (state_61332[(2)]);
var inst_61309 = inst_61312;
var state_61332__$1 = (function (){var statearr_61342 = state_61332;
(statearr_61342[(10)] = inst_61321);

(statearr_61342[(7)] = inst_61309);

return statearr_61342;
})();
var statearr_61343_61367 = state_61332__$1;
(statearr_61343_61367[(2)] = null);

(statearr_61343_61367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (9))){
var inst_61312 = (state_61332[(8)]);
var state_61332__$1 = state_61332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61332__$1,(11),out,inst_61312);
} else {
if((state_val_61333 === (5))){
var inst_61309 = (state_61332[(7)]);
var inst_61312 = (state_61332[(8)]);
var inst_61316 = cljs.core._EQ_.call(null,inst_61312,inst_61309);
var state_61332__$1 = state_61332;
if(inst_61316){
var statearr_61345_61368 = state_61332__$1;
(statearr_61345_61368[(1)] = (8));

} else {
var statearr_61346_61369 = state_61332__$1;
(statearr_61346_61369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (10))){
var inst_61324 = (state_61332[(2)]);
var state_61332__$1 = state_61332;
var statearr_61347_61370 = state_61332__$1;
(statearr_61347_61370[(2)] = inst_61324);

(statearr_61347_61370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61333 === (8))){
var inst_61309 = (state_61332[(7)]);
var tmp61344 = inst_61309;
var inst_61309__$1 = tmp61344;
var state_61332__$1 = (function (){var statearr_61348 = state_61332;
(statearr_61348[(7)] = inst_61309__$1);

return statearr_61348;
})();
var statearr_61349_61371 = state_61332__$1;
(statearr_61349_61371[(2)] = null);

(statearr_61349_61371[(1)] = (2));


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
});})(c__28998__auto___61361,out))
;
return ((function (switch__28886__auto__,c__28998__auto___61361,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_61353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61353[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_61353[(1)] = (1));

return statearr_61353;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_61332){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61354){if((e61354 instanceof Object)){
var ex__28890__auto__ = e61354;
var statearr_61355_61372 = state_61332;
(statearr_61355_61372[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61373 = state_61332;
state_61332 = G__61373;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_61332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_61332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___61361,out))
})();
var state__29000__auto__ = (function (){var statearr_61356 = f__28999__auto__.call(null);
(statearr_61356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___61361);

return statearr_61356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___61361,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args61374 = [];
var len__26007__auto___61444 = arguments.length;
var i__26008__auto___61445 = (0);
while(true){
if((i__26008__auto___61445 < len__26007__auto___61444)){
args61374.push((arguments[i__26008__auto___61445]));

var G__61446 = (i__26008__auto___61445 + (1));
i__26008__auto___61445 = G__61446;
continue;
} else {
}
break;
}

var G__61376 = args61374.length;
switch (G__61376) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61374.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___61448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___61448,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___61448,out){
return (function (state_61414){
var state_val_61415 = (state_61414[(1)]);
if((state_val_61415 === (7))){
var inst_61410 = (state_61414[(2)]);
var state_61414__$1 = state_61414;
var statearr_61416_61449 = state_61414__$1;
(statearr_61416_61449[(2)] = inst_61410);

(statearr_61416_61449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (1))){
var inst_61377 = (new Array(n));
var inst_61378 = inst_61377;
var inst_61379 = (0);
var state_61414__$1 = (function (){var statearr_61417 = state_61414;
(statearr_61417[(7)] = inst_61379);

(statearr_61417[(8)] = inst_61378);

return statearr_61417;
})();
var statearr_61418_61450 = state_61414__$1;
(statearr_61418_61450[(2)] = null);

(statearr_61418_61450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (4))){
var inst_61382 = (state_61414[(9)]);
var inst_61382__$1 = (state_61414[(2)]);
var inst_61383 = (inst_61382__$1 == null);
var inst_61384 = cljs.core.not.call(null,inst_61383);
var state_61414__$1 = (function (){var statearr_61419 = state_61414;
(statearr_61419[(9)] = inst_61382__$1);

return statearr_61419;
})();
if(inst_61384){
var statearr_61420_61451 = state_61414__$1;
(statearr_61420_61451[(1)] = (5));

} else {
var statearr_61421_61452 = state_61414__$1;
(statearr_61421_61452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (15))){
var inst_61404 = (state_61414[(2)]);
var state_61414__$1 = state_61414;
var statearr_61422_61453 = state_61414__$1;
(statearr_61422_61453[(2)] = inst_61404);

(statearr_61422_61453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (13))){
var state_61414__$1 = state_61414;
var statearr_61423_61454 = state_61414__$1;
(statearr_61423_61454[(2)] = null);

(statearr_61423_61454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (6))){
var inst_61379 = (state_61414[(7)]);
var inst_61400 = (inst_61379 > (0));
var state_61414__$1 = state_61414;
if(cljs.core.truth_(inst_61400)){
var statearr_61424_61455 = state_61414__$1;
(statearr_61424_61455[(1)] = (12));

} else {
var statearr_61425_61456 = state_61414__$1;
(statearr_61425_61456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (3))){
var inst_61412 = (state_61414[(2)]);
var state_61414__$1 = state_61414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61414__$1,inst_61412);
} else {
if((state_val_61415 === (12))){
var inst_61378 = (state_61414[(8)]);
var inst_61402 = cljs.core.vec.call(null,inst_61378);
var state_61414__$1 = state_61414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61414__$1,(15),out,inst_61402);
} else {
if((state_val_61415 === (2))){
var state_61414__$1 = state_61414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61414__$1,(4),ch);
} else {
if((state_val_61415 === (11))){
var inst_61394 = (state_61414[(2)]);
var inst_61395 = (new Array(n));
var inst_61378 = inst_61395;
var inst_61379 = (0);
var state_61414__$1 = (function (){var statearr_61426 = state_61414;
(statearr_61426[(7)] = inst_61379);

(statearr_61426[(8)] = inst_61378);

(statearr_61426[(10)] = inst_61394);

return statearr_61426;
})();
var statearr_61427_61457 = state_61414__$1;
(statearr_61427_61457[(2)] = null);

(statearr_61427_61457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (9))){
var inst_61378 = (state_61414[(8)]);
var inst_61392 = cljs.core.vec.call(null,inst_61378);
var state_61414__$1 = state_61414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61414__$1,(11),out,inst_61392);
} else {
if((state_val_61415 === (5))){
var inst_61379 = (state_61414[(7)]);
var inst_61378 = (state_61414[(8)]);
var inst_61382 = (state_61414[(9)]);
var inst_61387 = (state_61414[(11)]);
var inst_61386 = (inst_61378[inst_61379] = inst_61382);
var inst_61387__$1 = (inst_61379 + (1));
var inst_61388 = (inst_61387__$1 < n);
var state_61414__$1 = (function (){var statearr_61428 = state_61414;
(statearr_61428[(12)] = inst_61386);

(statearr_61428[(11)] = inst_61387__$1);

return statearr_61428;
})();
if(cljs.core.truth_(inst_61388)){
var statearr_61429_61458 = state_61414__$1;
(statearr_61429_61458[(1)] = (8));

} else {
var statearr_61430_61459 = state_61414__$1;
(statearr_61430_61459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (14))){
var inst_61407 = (state_61414[(2)]);
var inst_61408 = cljs.core.async.close_BANG_.call(null,out);
var state_61414__$1 = (function (){var statearr_61432 = state_61414;
(statearr_61432[(13)] = inst_61407);

return statearr_61432;
})();
var statearr_61433_61460 = state_61414__$1;
(statearr_61433_61460[(2)] = inst_61408);

(statearr_61433_61460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (10))){
var inst_61398 = (state_61414[(2)]);
var state_61414__$1 = state_61414;
var statearr_61434_61461 = state_61414__$1;
(statearr_61434_61461[(2)] = inst_61398);

(statearr_61434_61461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61415 === (8))){
var inst_61378 = (state_61414[(8)]);
var inst_61387 = (state_61414[(11)]);
var tmp61431 = inst_61378;
var inst_61378__$1 = tmp61431;
var inst_61379 = inst_61387;
var state_61414__$1 = (function (){var statearr_61435 = state_61414;
(statearr_61435[(7)] = inst_61379);

(statearr_61435[(8)] = inst_61378__$1);

return statearr_61435;
})();
var statearr_61436_61462 = state_61414__$1;
(statearr_61436_61462[(2)] = null);

(statearr_61436_61462[(1)] = (2));


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
});})(c__28998__auto___61448,out))
;
return ((function (switch__28886__auto__,c__28998__auto___61448,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_61440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61440[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_61440[(1)] = (1));

return statearr_61440;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_61414){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61441){if((e61441 instanceof Object)){
var ex__28890__auto__ = e61441;
var statearr_61442_61463 = state_61414;
(statearr_61442_61463[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61464 = state_61414;
state_61414 = G__61464;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_61414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_61414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___61448,out))
})();
var state__29000__auto__ = (function (){var statearr_61443 = f__28999__auto__.call(null);
(statearr_61443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___61448);

return statearr_61443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___61448,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args61465 = [];
var len__26007__auto___61539 = arguments.length;
var i__26008__auto___61540 = (0);
while(true){
if((i__26008__auto___61540 < len__26007__auto___61539)){
args61465.push((arguments[i__26008__auto___61540]));

var G__61541 = (i__26008__auto___61540 + (1));
i__26008__auto___61540 = G__61541;
continue;
} else {
}
break;
}

var G__61467 = args61465.length;
switch (G__61467) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61465.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___61543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___61543,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___61543,out){
return (function (state_61509){
var state_val_61510 = (state_61509[(1)]);
if((state_val_61510 === (7))){
var inst_61505 = (state_61509[(2)]);
var state_61509__$1 = state_61509;
var statearr_61511_61544 = state_61509__$1;
(statearr_61511_61544[(2)] = inst_61505);

(statearr_61511_61544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (1))){
var inst_61468 = [];
var inst_61469 = inst_61468;
var inst_61470 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_61509__$1 = (function (){var statearr_61512 = state_61509;
(statearr_61512[(7)] = inst_61470);

(statearr_61512[(8)] = inst_61469);

return statearr_61512;
})();
var statearr_61513_61545 = state_61509__$1;
(statearr_61513_61545[(2)] = null);

(statearr_61513_61545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (4))){
var inst_61473 = (state_61509[(9)]);
var inst_61473__$1 = (state_61509[(2)]);
var inst_61474 = (inst_61473__$1 == null);
var inst_61475 = cljs.core.not.call(null,inst_61474);
var state_61509__$1 = (function (){var statearr_61514 = state_61509;
(statearr_61514[(9)] = inst_61473__$1);

return statearr_61514;
})();
if(inst_61475){
var statearr_61515_61546 = state_61509__$1;
(statearr_61515_61546[(1)] = (5));

} else {
var statearr_61516_61547 = state_61509__$1;
(statearr_61516_61547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (15))){
var inst_61499 = (state_61509[(2)]);
var state_61509__$1 = state_61509;
var statearr_61517_61548 = state_61509__$1;
(statearr_61517_61548[(2)] = inst_61499);

(statearr_61517_61548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (13))){
var state_61509__$1 = state_61509;
var statearr_61518_61549 = state_61509__$1;
(statearr_61518_61549[(2)] = null);

(statearr_61518_61549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (6))){
var inst_61469 = (state_61509[(8)]);
var inst_61494 = inst_61469.length;
var inst_61495 = (inst_61494 > (0));
var state_61509__$1 = state_61509;
if(cljs.core.truth_(inst_61495)){
var statearr_61519_61550 = state_61509__$1;
(statearr_61519_61550[(1)] = (12));

} else {
var statearr_61520_61551 = state_61509__$1;
(statearr_61520_61551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (3))){
var inst_61507 = (state_61509[(2)]);
var state_61509__$1 = state_61509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61509__$1,inst_61507);
} else {
if((state_val_61510 === (12))){
var inst_61469 = (state_61509[(8)]);
var inst_61497 = cljs.core.vec.call(null,inst_61469);
var state_61509__$1 = state_61509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61509__$1,(15),out,inst_61497);
} else {
if((state_val_61510 === (2))){
var state_61509__$1 = state_61509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61509__$1,(4),ch);
} else {
if((state_val_61510 === (11))){
var inst_61473 = (state_61509[(9)]);
var inst_61477 = (state_61509[(10)]);
var inst_61487 = (state_61509[(2)]);
var inst_61488 = [];
var inst_61489 = inst_61488.push(inst_61473);
var inst_61469 = inst_61488;
var inst_61470 = inst_61477;
var state_61509__$1 = (function (){var statearr_61521 = state_61509;
(statearr_61521[(11)] = inst_61489);

(statearr_61521[(7)] = inst_61470);

(statearr_61521[(8)] = inst_61469);

(statearr_61521[(12)] = inst_61487);

return statearr_61521;
})();
var statearr_61522_61552 = state_61509__$1;
(statearr_61522_61552[(2)] = null);

(statearr_61522_61552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (9))){
var inst_61469 = (state_61509[(8)]);
var inst_61485 = cljs.core.vec.call(null,inst_61469);
var state_61509__$1 = state_61509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61509__$1,(11),out,inst_61485);
} else {
if((state_val_61510 === (5))){
var inst_61473 = (state_61509[(9)]);
var inst_61477 = (state_61509[(10)]);
var inst_61470 = (state_61509[(7)]);
var inst_61477__$1 = f.call(null,inst_61473);
var inst_61478 = cljs.core._EQ_.call(null,inst_61477__$1,inst_61470);
var inst_61479 = cljs.core.keyword_identical_QMARK_.call(null,inst_61470,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_61480 = (inst_61478) || (inst_61479);
var state_61509__$1 = (function (){var statearr_61523 = state_61509;
(statearr_61523[(10)] = inst_61477__$1);

return statearr_61523;
})();
if(cljs.core.truth_(inst_61480)){
var statearr_61524_61553 = state_61509__$1;
(statearr_61524_61553[(1)] = (8));

} else {
var statearr_61525_61554 = state_61509__$1;
(statearr_61525_61554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (14))){
var inst_61502 = (state_61509[(2)]);
var inst_61503 = cljs.core.async.close_BANG_.call(null,out);
var state_61509__$1 = (function (){var statearr_61527 = state_61509;
(statearr_61527[(13)] = inst_61502);

return statearr_61527;
})();
var statearr_61528_61555 = state_61509__$1;
(statearr_61528_61555[(2)] = inst_61503);

(statearr_61528_61555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (10))){
var inst_61492 = (state_61509[(2)]);
var state_61509__$1 = state_61509;
var statearr_61529_61556 = state_61509__$1;
(statearr_61529_61556[(2)] = inst_61492);

(statearr_61529_61556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61510 === (8))){
var inst_61473 = (state_61509[(9)]);
var inst_61477 = (state_61509[(10)]);
var inst_61469 = (state_61509[(8)]);
var inst_61482 = inst_61469.push(inst_61473);
var tmp61526 = inst_61469;
var inst_61469__$1 = tmp61526;
var inst_61470 = inst_61477;
var state_61509__$1 = (function (){var statearr_61530 = state_61509;
(statearr_61530[(14)] = inst_61482);

(statearr_61530[(7)] = inst_61470);

(statearr_61530[(8)] = inst_61469__$1);

return statearr_61530;
})();
var statearr_61531_61557 = state_61509__$1;
(statearr_61531_61557[(2)] = null);

(statearr_61531_61557[(1)] = (2));


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
});})(c__28998__auto___61543,out))
;
return ((function (switch__28886__auto__,c__28998__auto___61543,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_61535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61535[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_61535[(1)] = (1));

return statearr_61535;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_61509){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_61509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e61536){if((e61536 instanceof Object)){
var ex__28890__auto__ = e61536;
var statearr_61537_61558 = state_61509;
(statearr_61537_61558[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61559 = state_61509;
state_61509 = G__61559;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_61509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_61509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___61543,out))
})();
var state__29000__auto__ = (function (){var statearr_61538 = f__28999__auto__.call(null);
(statearr_61538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___61543);

return statearr_61538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___61543,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479783759207