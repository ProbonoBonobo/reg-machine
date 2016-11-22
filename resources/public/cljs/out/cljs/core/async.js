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
var args68679 = [];
var len__26007__auto___68685 = arguments.length;
var i__26008__auto___68686 = (0);
while(true){
if((i__26008__auto___68686 < len__26007__auto___68685)){
args68679.push((arguments[i__26008__auto___68686]));

var G__68687 = (i__26008__auto___68686 + (1));
i__26008__auto___68686 = G__68687;
continue;
} else {
}
break;
}

var G__68681 = args68679.length;
switch (G__68681) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68679.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async68682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68682 = (function (f,blockable,meta68683){
this.f = f;
this.blockable = blockable;
this.meta68683 = meta68683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68684,meta68683__$1){
var self__ = this;
var _68684__$1 = this;
return (new cljs.core.async.t_cljs$core$async68682(self__.f,self__.blockable,meta68683__$1));
});

cljs.core.async.t_cljs$core$async68682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68684){
var self__ = this;
var _68684__$1 = this;
return self__.meta68683;
});

cljs.core.async.t_cljs$core$async68682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async68682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async68682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68683","meta68683",1440431407,null)], null);
});

cljs.core.async.t_cljs$core$async68682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68682";

cljs.core.async.t_cljs$core$async68682.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async68682");
});

cljs.core.async.__GT_t_cljs$core$async68682 = (function cljs$core$async$__GT_t_cljs$core$async68682(f__$1,blockable__$1,meta68683){
return (new cljs.core.async.t_cljs$core$async68682(f__$1,blockable__$1,meta68683));
});

}

return (new cljs.core.async.t_cljs$core$async68682(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args68691 = [];
var len__26007__auto___68694 = arguments.length;
var i__26008__auto___68695 = (0);
while(true){
if((i__26008__auto___68695 < len__26007__auto___68694)){
args68691.push((arguments[i__26008__auto___68695]));

var G__68696 = (i__26008__auto___68695 + (1));
i__26008__auto___68695 = G__68696;
continue;
} else {
}
break;
}

var G__68693 = args68691.length;
switch (G__68693) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68691.length)].join('')));

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
var args68698 = [];
var len__26007__auto___68701 = arguments.length;
var i__26008__auto___68702 = (0);
while(true){
if((i__26008__auto___68702 < len__26007__auto___68701)){
args68698.push((arguments[i__26008__auto___68702]));

var G__68703 = (i__26008__auto___68702 + (1));
i__26008__auto___68702 = G__68703;
continue;
} else {
}
break;
}

var G__68700 = args68698.length;
switch (G__68700) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68698.length)].join('')));

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
var args68705 = [];
var len__26007__auto___68708 = arguments.length;
var i__26008__auto___68709 = (0);
while(true){
if((i__26008__auto___68709 < len__26007__auto___68708)){
args68705.push((arguments[i__26008__auto___68709]));

var G__68710 = (i__26008__auto___68709 + (1));
i__26008__auto___68709 = G__68710;
continue;
} else {
}
break;
}

var G__68707 = args68705.length;
switch (G__68707) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68705.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_68712 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_68712);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_68712,ret){
return (function (){
return fn1.call(null,val_68712);
});})(val_68712,ret))
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
var args68713 = [];
var len__26007__auto___68716 = arguments.length;
var i__26008__auto___68717 = (0);
while(true){
if((i__26008__auto___68717 < len__26007__auto___68716)){
args68713.push((arguments[i__26008__auto___68717]));

var G__68718 = (i__26008__auto___68717 + (1));
i__26008__auto___68717 = G__68718;
continue;
} else {
}
break;
}

var G__68715 = args68713.length;
switch (G__68715) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68713.length)].join('')));

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
var n__25817__auto___68720 = n;
var x_68721 = (0);
while(true){
if((x_68721 < n__25817__auto___68720)){
(a[x_68721] = (0));

var G__68722 = (x_68721 + (1));
x_68721 = G__68722;
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

var G__68723 = (i + (1));
i = G__68723;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async68727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68727 = (function (flag,meta68728){
this.flag = flag;
this.meta68728 = meta68728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_68729,meta68728__$1){
var self__ = this;
var _68729__$1 = this;
return (new cljs.core.async.t_cljs$core$async68727(self__.flag,meta68728__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async68727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_68729){
var self__ = this;
var _68729__$1 = this;
return self__.meta68728;
});})(flag))
;

cljs.core.async.t_cljs$core$async68727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async68727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68727.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68728","meta68728",-971574777,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async68727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68727";

cljs.core.async.t_cljs$core$async68727.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async68727");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async68727 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async68727(flag__$1,meta68728){
return (new cljs.core.async.t_cljs$core$async68727(flag__$1,meta68728));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async68727(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async68733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68733 = (function (flag,cb,meta68734){
this.flag = flag;
this.cb = cb;
this.meta68734 = meta68734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68735,meta68734__$1){
var self__ = this;
var _68735__$1 = this;
return (new cljs.core.async.t_cljs$core$async68733(self__.flag,self__.cb,meta68734__$1));
});

cljs.core.async.t_cljs$core$async68733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68735){
var self__ = this;
var _68735__$1 = this;
return self__.meta68734;
});

cljs.core.async.t_cljs$core$async68733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async68733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async68733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68734","meta68734",-890518888,null)], null);
});

cljs.core.async.t_cljs$core$async68733.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68733";

cljs.core.async.t_cljs$core$async68733.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async68733");
});

cljs.core.async.__GT_t_cljs$core$async68733 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async68733(flag__$1,cb__$1,meta68734){
return (new cljs.core.async.t_cljs$core$async68733(flag__$1,cb__$1,meta68734));
});

}

return (new cljs.core.async.t_cljs$core$async68733(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__68736_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68736_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68737_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68737_SHARP_,port], null));
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
var G__68738 = (i + (1));
i = G__68738;
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
var len__26007__auto___68744 = arguments.length;
var i__26008__auto___68745 = (0);
while(true){
if((i__26008__auto___68745 < len__26007__auto___68744)){
args__26014__auto__.push((arguments[i__26008__auto___68745]));

var G__68746 = (i__26008__auto___68745 + (1));
i__26008__auto___68745 = G__68746;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((1) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26015__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68741){
var map__68742 = p__68741;
var map__68742__$1 = ((((!((map__68742 == null)))?((((map__68742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68742):map__68742);
var opts = map__68742__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68739){
var G__68740 = cljs.core.first.call(null,seq68739);
var seq68739__$1 = cljs.core.next.call(null,seq68739);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68740,seq68739__$1);
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
var args68747 = [];
var len__26007__auto___68797 = arguments.length;
var i__26008__auto___68798 = (0);
while(true){
if((i__26008__auto___68798 < len__26007__auto___68797)){
args68747.push((arguments[i__26008__auto___68798]));

var G__68799 = (i__26008__auto___68798 + (1));
i__26008__auto___68798 = G__68799;
continue;
} else {
}
break;
}

var G__68749 = args68747.length;
switch (G__68749) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68747.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28998__auto___68801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___68801){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___68801){
return (function (state_68773){
var state_val_68774 = (state_68773[(1)]);
if((state_val_68774 === (7))){
var inst_68769 = (state_68773[(2)]);
var state_68773__$1 = state_68773;
var statearr_68775_68802 = state_68773__$1;
(statearr_68775_68802[(2)] = inst_68769);

(statearr_68775_68802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (1))){
var state_68773__$1 = state_68773;
var statearr_68776_68803 = state_68773__$1;
(statearr_68776_68803[(2)] = null);

(statearr_68776_68803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (4))){
var inst_68752 = (state_68773[(7)]);
var inst_68752__$1 = (state_68773[(2)]);
var inst_68753 = (inst_68752__$1 == null);
var state_68773__$1 = (function (){var statearr_68777 = state_68773;
(statearr_68777[(7)] = inst_68752__$1);

return statearr_68777;
})();
if(cljs.core.truth_(inst_68753)){
var statearr_68778_68804 = state_68773__$1;
(statearr_68778_68804[(1)] = (5));

} else {
var statearr_68779_68805 = state_68773__$1;
(statearr_68779_68805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (13))){
var state_68773__$1 = state_68773;
var statearr_68780_68806 = state_68773__$1;
(statearr_68780_68806[(2)] = null);

(statearr_68780_68806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (6))){
var inst_68752 = (state_68773[(7)]);
var state_68773__$1 = state_68773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68773__$1,(11),to,inst_68752);
} else {
if((state_val_68774 === (3))){
var inst_68771 = (state_68773[(2)]);
var state_68773__$1 = state_68773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68773__$1,inst_68771);
} else {
if((state_val_68774 === (12))){
var state_68773__$1 = state_68773;
var statearr_68781_68807 = state_68773__$1;
(statearr_68781_68807[(2)] = null);

(statearr_68781_68807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (2))){
var state_68773__$1 = state_68773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68773__$1,(4),from);
} else {
if((state_val_68774 === (11))){
var inst_68762 = (state_68773[(2)]);
var state_68773__$1 = state_68773;
if(cljs.core.truth_(inst_68762)){
var statearr_68782_68808 = state_68773__$1;
(statearr_68782_68808[(1)] = (12));

} else {
var statearr_68783_68809 = state_68773__$1;
(statearr_68783_68809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (9))){
var state_68773__$1 = state_68773;
var statearr_68784_68810 = state_68773__$1;
(statearr_68784_68810[(2)] = null);

(statearr_68784_68810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (5))){
var state_68773__$1 = state_68773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68785_68811 = state_68773__$1;
(statearr_68785_68811[(1)] = (8));

} else {
var statearr_68786_68812 = state_68773__$1;
(statearr_68786_68812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (14))){
var inst_68767 = (state_68773[(2)]);
var state_68773__$1 = state_68773;
var statearr_68787_68813 = state_68773__$1;
(statearr_68787_68813[(2)] = inst_68767);

(statearr_68787_68813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (10))){
var inst_68759 = (state_68773[(2)]);
var state_68773__$1 = state_68773;
var statearr_68788_68814 = state_68773__$1;
(statearr_68788_68814[(2)] = inst_68759);

(statearr_68788_68814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68774 === (8))){
var inst_68756 = cljs.core.async.close_BANG_.call(null,to);
var state_68773__$1 = state_68773;
var statearr_68789_68815 = state_68773__$1;
(statearr_68789_68815[(2)] = inst_68756);

(statearr_68789_68815[(1)] = (10));


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
});})(c__28998__auto___68801))
;
return ((function (switch__28886__auto__,c__28998__auto___68801){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_68793 = [null,null,null,null,null,null,null,null];
(statearr_68793[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_68793[(1)] = (1));

return statearr_68793;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_68773){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_68773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e68794){if((e68794 instanceof Object)){
var ex__28890__auto__ = e68794;
var statearr_68795_68816 = state_68773;
(statearr_68795_68816[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68817 = state_68773;
state_68773 = G__68817;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_68773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_68773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___68801))
})();
var state__29000__auto__ = (function (){var statearr_68796 = f__28999__auto__.call(null);
(statearr_68796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___68801);

return statearr_68796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___68801))
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
return (function (p__69005){
var vec__69006 = p__69005;
var v = cljs.core.nth.call(null,vec__69006,(0),null);
var p = cljs.core.nth.call(null,vec__69006,(1),null);
var job = vec__69006;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28998__auto___69192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___69192,res,vec__69006,v,p,job,jobs,results){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___69192,res,vec__69006,v,p,job,jobs,results){
return (function (state_69013){
var state_val_69014 = (state_69013[(1)]);
if((state_val_69014 === (1))){
var state_69013__$1 = state_69013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69013__$1,(2),res,v);
} else {
if((state_val_69014 === (2))){
var inst_69010 = (state_69013[(2)]);
var inst_69011 = cljs.core.async.close_BANG_.call(null,res);
var state_69013__$1 = (function (){var statearr_69015 = state_69013;
(statearr_69015[(7)] = inst_69010);

return statearr_69015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69013__$1,inst_69011);
} else {
return null;
}
}
});})(c__28998__auto___69192,res,vec__69006,v,p,job,jobs,results))
;
return ((function (switch__28886__auto__,c__28998__auto___69192,res,vec__69006,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_69019 = [null,null,null,null,null,null,null,null];
(statearr_69019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_69019[(1)] = (1));

return statearr_69019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_69013){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69020){if((e69020 instanceof Object)){
var ex__28890__auto__ = e69020;
var statearr_69021_69193 = state_69013;
(statearr_69021_69193[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69194 = state_69013;
state_69013 = G__69194;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_69013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_69013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___69192,res,vec__69006,v,p,job,jobs,results))
})();
var state__29000__auto__ = (function (){var statearr_69022 = f__28999__auto__.call(null);
(statearr_69022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___69192);

return statearr_69022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___69192,res,vec__69006,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__69023){
var vec__69024 = p__69023;
var v = cljs.core.nth.call(null,vec__69024,(0),null);
var p = cljs.core.nth.call(null,vec__69024,(1),null);
var job = vec__69024;
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
var n__25817__auto___69195 = n;
var __69196 = (0);
while(true){
if((__69196 < n__25817__auto___69195)){
var G__69027_69197 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__69027_69197) {
case "compute":
var c__28998__auto___69199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69196,c__28998__auto___69199,G__69027_69197,n__25817__auto___69195,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (__69196,c__28998__auto___69199,G__69027_69197,n__25817__auto___69195,jobs,results,process,async){
return (function (state_69040){
var state_val_69041 = (state_69040[(1)]);
if((state_val_69041 === (1))){
var state_69040__$1 = state_69040;
var statearr_69042_69200 = state_69040__$1;
(statearr_69042_69200[(2)] = null);

(statearr_69042_69200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69041 === (2))){
var state_69040__$1 = state_69040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69040__$1,(4),jobs);
} else {
if((state_val_69041 === (3))){
var inst_69038 = (state_69040[(2)]);
var state_69040__$1 = state_69040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69040__$1,inst_69038);
} else {
if((state_val_69041 === (4))){
var inst_69030 = (state_69040[(2)]);
var inst_69031 = process.call(null,inst_69030);
var state_69040__$1 = state_69040;
if(cljs.core.truth_(inst_69031)){
var statearr_69043_69201 = state_69040__$1;
(statearr_69043_69201[(1)] = (5));

} else {
var statearr_69044_69202 = state_69040__$1;
(statearr_69044_69202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69041 === (5))){
var state_69040__$1 = state_69040;
var statearr_69045_69203 = state_69040__$1;
(statearr_69045_69203[(2)] = null);

(statearr_69045_69203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69041 === (6))){
var state_69040__$1 = state_69040;
var statearr_69046_69204 = state_69040__$1;
(statearr_69046_69204[(2)] = null);

(statearr_69046_69204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69041 === (7))){
var inst_69036 = (state_69040[(2)]);
var state_69040__$1 = state_69040;
var statearr_69047_69205 = state_69040__$1;
(statearr_69047_69205[(2)] = inst_69036);

(statearr_69047_69205[(1)] = (3));


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
});})(__69196,c__28998__auto___69199,G__69027_69197,n__25817__auto___69195,jobs,results,process,async))
;
return ((function (__69196,switch__28886__auto__,c__28998__auto___69199,G__69027_69197,n__25817__auto___69195,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_69051 = [null,null,null,null,null,null,null];
(statearr_69051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_69051[(1)] = (1));

return statearr_69051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_69040){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69052){if((e69052 instanceof Object)){
var ex__28890__auto__ = e69052;
var statearr_69053_69206 = state_69040;
(statearr_69053_69206[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69207 = state_69040;
state_69040 = G__69207;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_69040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_69040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(__69196,switch__28886__auto__,c__28998__auto___69199,G__69027_69197,n__25817__auto___69195,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_69054 = f__28999__auto__.call(null);
(statearr_69054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___69199);

return statearr_69054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(__69196,c__28998__auto___69199,G__69027_69197,n__25817__auto___69195,jobs,results,process,async))
);


break;
case "async":
var c__28998__auto___69208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69196,c__28998__auto___69208,G__69027_69197,n__25817__auto___69195,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (__69196,c__28998__auto___69208,G__69027_69197,n__25817__auto___69195,jobs,results,process,async){
return (function (state_69067){
var state_val_69068 = (state_69067[(1)]);
if((state_val_69068 === (1))){
var state_69067__$1 = state_69067;
var statearr_69069_69209 = state_69067__$1;
(statearr_69069_69209[(2)] = null);

(statearr_69069_69209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69068 === (2))){
var state_69067__$1 = state_69067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69067__$1,(4),jobs);
} else {
if((state_val_69068 === (3))){
var inst_69065 = (state_69067[(2)]);
var state_69067__$1 = state_69067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69067__$1,inst_69065);
} else {
if((state_val_69068 === (4))){
var inst_69057 = (state_69067[(2)]);
var inst_69058 = async.call(null,inst_69057);
var state_69067__$1 = state_69067;
if(cljs.core.truth_(inst_69058)){
var statearr_69070_69210 = state_69067__$1;
(statearr_69070_69210[(1)] = (5));

} else {
var statearr_69071_69211 = state_69067__$1;
(statearr_69071_69211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69068 === (5))){
var state_69067__$1 = state_69067;
var statearr_69072_69212 = state_69067__$1;
(statearr_69072_69212[(2)] = null);

(statearr_69072_69212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69068 === (6))){
var state_69067__$1 = state_69067;
var statearr_69073_69213 = state_69067__$1;
(statearr_69073_69213[(2)] = null);

(statearr_69073_69213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69068 === (7))){
var inst_69063 = (state_69067[(2)]);
var state_69067__$1 = state_69067;
var statearr_69074_69214 = state_69067__$1;
(statearr_69074_69214[(2)] = inst_69063);

(statearr_69074_69214[(1)] = (3));


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
});})(__69196,c__28998__auto___69208,G__69027_69197,n__25817__auto___69195,jobs,results,process,async))
;
return ((function (__69196,switch__28886__auto__,c__28998__auto___69208,G__69027_69197,n__25817__auto___69195,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_69078 = [null,null,null,null,null,null,null];
(statearr_69078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_69078[(1)] = (1));

return statearr_69078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_69067){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69079){if((e69079 instanceof Object)){
var ex__28890__auto__ = e69079;
var statearr_69080_69215 = state_69067;
(statearr_69080_69215[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69216 = state_69067;
state_69067 = G__69216;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_69067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_69067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(__69196,switch__28886__auto__,c__28998__auto___69208,G__69027_69197,n__25817__auto___69195,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_69081 = f__28999__auto__.call(null);
(statearr_69081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___69208);

return statearr_69081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(__69196,c__28998__auto___69208,G__69027_69197,n__25817__auto___69195,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__69217 = (__69196 + (1));
__69196 = G__69217;
continue;
} else {
}
break;
}

var c__28998__auto___69218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___69218,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___69218,jobs,results,process,async){
return (function (state_69103){
var state_val_69104 = (state_69103[(1)]);
if((state_val_69104 === (1))){
var state_69103__$1 = state_69103;
var statearr_69105_69219 = state_69103__$1;
(statearr_69105_69219[(2)] = null);

(statearr_69105_69219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69104 === (2))){
var state_69103__$1 = state_69103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69103__$1,(4),from);
} else {
if((state_val_69104 === (3))){
var inst_69101 = (state_69103[(2)]);
var state_69103__$1 = state_69103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69103__$1,inst_69101);
} else {
if((state_val_69104 === (4))){
var inst_69084 = (state_69103[(7)]);
var inst_69084__$1 = (state_69103[(2)]);
var inst_69085 = (inst_69084__$1 == null);
var state_69103__$1 = (function (){var statearr_69106 = state_69103;
(statearr_69106[(7)] = inst_69084__$1);

return statearr_69106;
})();
if(cljs.core.truth_(inst_69085)){
var statearr_69107_69220 = state_69103__$1;
(statearr_69107_69220[(1)] = (5));

} else {
var statearr_69108_69221 = state_69103__$1;
(statearr_69108_69221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69104 === (5))){
var inst_69087 = cljs.core.async.close_BANG_.call(null,jobs);
var state_69103__$1 = state_69103;
var statearr_69109_69222 = state_69103__$1;
(statearr_69109_69222[(2)] = inst_69087);

(statearr_69109_69222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69104 === (6))){
var inst_69089 = (state_69103[(8)]);
var inst_69084 = (state_69103[(7)]);
var inst_69089__$1 = cljs.core.async.chan.call(null,(1));
var inst_69090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69091 = [inst_69084,inst_69089__$1];
var inst_69092 = (new cljs.core.PersistentVector(null,2,(5),inst_69090,inst_69091,null));
var state_69103__$1 = (function (){var statearr_69110 = state_69103;
(statearr_69110[(8)] = inst_69089__$1);

return statearr_69110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69103__$1,(8),jobs,inst_69092);
} else {
if((state_val_69104 === (7))){
var inst_69099 = (state_69103[(2)]);
var state_69103__$1 = state_69103;
var statearr_69111_69223 = state_69103__$1;
(statearr_69111_69223[(2)] = inst_69099);

(statearr_69111_69223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69104 === (8))){
var inst_69089 = (state_69103[(8)]);
var inst_69094 = (state_69103[(2)]);
var state_69103__$1 = (function (){var statearr_69112 = state_69103;
(statearr_69112[(9)] = inst_69094);

return statearr_69112;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69103__$1,(9),results,inst_69089);
} else {
if((state_val_69104 === (9))){
var inst_69096 = (state_69103[(2)]);
var state_69103__$1 = (function (){var statearr_69113 = state_69103;
(statearr_69113[(10)] = inst_69096);

return statearr_69113;
})();
var statearr_69114_69224 = state_69103__$1;
(statearr_69114_69224[(2)] = null);

(statearr_69114_69224[(1)] = (2));


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
});})(c__28998__auto___69218,jobs,results,process,async))
;
return ((function (switch__28886__auto__,c__28998__auto___69218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0 = (function (){
var statearr_69118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_69118[(1)] = (1));

return statearr_69118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_69103){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69119){if((e69119 instanceof Object)){
var ex__28890__auto__ = e69119;
var statearr_69120_69225 = state_69103;
(statearr_69120_69225[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69226 = state_69103;
state_69103 = G__69226;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_69103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_69103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___69218,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_69121 = f__28999__auto__.call(null);
(statearr_69121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___69218);

return statearr_69121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___69218,jobs,results,process,async))
);


var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,jobs,results,process,async){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,jobs,results,process,async){
return (function (state_69159){
var state_val_69160 = (state_69159[(1)]);
if((state_val_69160 === (7))){
var inst_69155 = (state_69159[(2)]);
var state_69159__$1 = state_69159;
var statearr_69161_69227 = state_69159__$1;
(statearr_69161_69227[(2)] = inst_69155);

(statearr_69161_69227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (20))){
var state_69159__$1 = state_69159;
var statearr_69162_69228 = state_69159__$1;
(statearr_69162_69228[(2)] = null);

(statearr_69162_69228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (1))){
var state_69159__$1 = state_69159;
var statearr_69163_69229 = state_69159__$1;
(statearr_69163_69229[(2)] = null);

(statearr_69163_69229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (4))){
var inst_69124 = (state_69159[(7)]);
var inst_69124__$1 = (state_69159[(2)]);
var inst_69125 = (inst_69124__$1 == null);
var state_69159__$1 = (function (){var statearr_69164 = state_69159;
(statearr_69164[(7)] = inst_69124__$1);

return statearr_69164;
})();
if(cljs.core.truth_(inst_69125)){
var statearr_69165_69230 = state_69159__$1;
(statearr_69165_69230[(1)] = (5));

} else {
var statearr_69166_69231 = state_69159__$1;
(statearr_69166_69231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (15))){
var inst_69137 = (state_69159[(8)]);
var state_69159__$1 = state_69159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69159__$1,(18),to,inst_69137);
} else {
if((state_val_69160 === (21))){
var inst_69150 = (state_69159[(2)]);
var state_69159__$1 = state_69159;
var statearr_69167_69232 = state_69159__$1;
(statearr_69167_69232[(2)] = inst_69150);

(statearr_69167_69232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (13))){
var inst_69152 = (state_69159[(2)]);
var state_69159__$1 = (function (){var statearr_69168 = state_69159;
(statearr_69168[(9)] = inst_69152);

return statearr_69168;
})();
var statearr_69169_69233 = state_69159__$1;
(statearr_69169_69233[(2)] = null);

(statearr_69169_69233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (6))){
var inst_69124 = (state_69159[(7)]);
var state_69159__$1 = state_69159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69159__$1,(11),inst_69124);
} else {
if((state_val_69160 === (17))){
var inst_69145 = (state_69159[(2)]);
var state_69159__$1 = state_69159;
if(cljs.core.truth_(inst_69145)){
var statearr_69170_69234 = state_69159__$1;
(statearr_69170_69234[(1)] = (19));

} else {
var statearr_69171_69235 = state_69159__$1;
(statearr_69171_69235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (3))){
var inst_69157 = (state_69159[(2)]);
var state_69159__$1 = state_69159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69159__$1,inst_69157);
} else {
if((state_val_69160 === (12))){
var inst_69134 = (state_69159[(10)]);
var state_69159__$1 = state_69159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69159__$1,(14),inst_69134);
} else {
if((state_val_69160 === (2))){
var state_69159__$1 = state_69159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69159__$1,(4),results);
} else {
if((state_val_69160 === (19))){
var state_69159__$1 = state_69159;
var statearr_69172_69236 = state_69159__$1;
(statearr_69172_69236[(2)] = null);

(statearr_69172_69236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (11))){
var inst_69134 = (state_69159[(2)]);
var state_69159__$1 = (function (){var statearr_69173 = state_69159;
(statearr_69173[(10)] = inst_69134);

return statearr_69173;
})();
var statearr_69174_69237 = state_69159__$1;
(statearr_69174_69237[(2)] = null);

(statearr_69174_69237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (9))){
var state_69159__$1 = state_69159;
var statearr_69175_69238 = state_69159__$1;
(statearr_69175_69238[(2)] = null);

(statearr_69175_69238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (5))){
var state_69159__$1 = state_69159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69176_69239 = state_69159__$1;
(statearr_69176_69239[(1)] = (8));

} else {
var statearr_69177_69240 = state_69159__$1;
(statearr_69177_69240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (14))){
var inst_69139 = (state_69159[(11)]);
var inst_69137 = (state_69159[(8)]);
var inst_69137__$1 = (state_69159[(2)]);
var inst_69138 = (inst_69137__$1 == null);
var inst_69139__$1 = cljs.core.not.call(null,inst_69138);
var state_69159__$1 = (function (){var statearr_69178 = state_69159;
(statearr_69178[(11)] = inst_69139__$1);

(statearr_69178[(8)] = inst_69137__$1);

return statearr_69178;
})();
if(inst_69139__$1){
var statearr_69179_69241 = state_69159__$1;
(statearr_69179_69241[(1)] = (15));

} else {
var statearr_69180_69242 = state_69159__$1;
(statearr_69180_69242[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (16))){
var inst_69139 = (state_69159[(11)]);
var state_69159__$1 = state_69159;
var statearr_69181_69243 = state_69159__$1;
(statearr_69181_69243[(2)] = inst_69139);

(statearr_69181_69243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (10))){
var inst_69131 = (state_69159[(2)]);
var state_69159__$1 = state_69159;
var statearr_69182_69244 = state_69159__$1;
(statearr_69182_69244[(2)] = inst_69131);

(statearr_69182_69244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (18))){
var inst_69142 = (state_69159[(2)]);
var state_69159__$1 = state_69159;
var statearr_69183_69245 = state_69159__$1;
(statearr_69183_69245[(2)] = inst_69142);

(statearr_69183_69245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69160 === (8))){
var inst_69128 = cljs.core.async.close_BANG_.call(null,to);
var state_69159__$1 = state_69159;
var statearr_69184_69246 = state_69159__$1;
(statearr_69184_69246[(2)] = inst_69128);

(statearr_69184_69246[(1)] = (10));


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
var statearr_69188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__);

(statearr_69188[(1)] = (1));

return statearr_69188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1 = (function (state_69159){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69189){if((e69189 instanceof Object)){
var ex__28890__auto__ = e69189;
var statearr_69190_69247 = state_69159;
(statearr_69190_69247[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69248 = state_69159;
state_69159 = G__69248;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__ = function(state_69159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1.call(this,state_69159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,jobs,results,process,async))
})();
var state__29000__auto__ = (function (){var statearr_69191 = f__28999__auto__.call(null);
(statearr_69191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_69191;
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
var args69249 = [];
var len__26007__auto___69252 = arguments.length;
var i__26008__auto___69253 = (0);
while(true){
if((i__26008__auto___69253 < len__26007__auto___69252)){
args69249.push((arguments[i__26008__auto___69253]));

var G__69254 = (i__26008__auto___69253 + (1));
i__26008__auto___69253 = G__69254;
continue;
} else {
}
break;
}

var G__69251 = args69249.length;
switch (G__69251) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69249.length)].join('')));

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
var args69256 = [];
var len__26007__auto___69259 = arguments.length;
var i__26008__auto___69260 = (0);
while(true){
if((i__26008__auto___69260 < len__26007__auto___69259)){
args69256.push((arguments[i__26008__auto___69260]));

var G__69261 = (i__26008__auto___69260 + (1));
i__26008__auto___69260 = G__69261;
continue;
} else {
}
break;
}

var G__69258 = args69256.length;
switch (G__69258) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69256.length)].join('')));

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
var args69263 = [];
var len__26007__auto___69316 = arguments.length;
var i__26008__auto___69317 = (0);
while(true){
if((i__26008__auto___69317 < len__26007__auto___69316)){
args69263.push((arguments[i__26008__auto___69317]));

var G__69318 = (i__26008__auto___69317 + (1));
i__26008__auto___69317 = G__69318;
continue;
} else {
}
break;
}

var G__69265 = args69263.length;
switch (G__69265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69263.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28998__auto___69320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___69320,tc,fc){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___69320,tc,fc){
return (function (state_69291){
var state_val_69292 = (state_69291[(1)]);
if((state_val_69292 === (7))){
var inst_69287 = (state_69291[(2)]);
var state_69291__$1 = state_69291;
var statearr_69293_69321 = state_69291__$1;
(statearr_69293_69321[(2)] = inst_69287);

(statearr_69293_69321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (1))){
var state_69291__$1 = state_69291;
var statearr_69294_69322 = state_69291__$1;
(statearr_69294_69322[(2)] = null);

(statearr_69294_69322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (4))){
var inst_69268 = (state_69291[(7)]);
var inst_69268__$1 = (state_69291[(2)]);
var inst_69269 = (inst_69268__$1 == null);
var state_69291__$1 = (function (){var statearr_69295 = state_69291;
(statearr_69295[(7)] = inst_69268__$1);

return statearr_69295;
})();
if(cljs.core.truth_(inst_69269)){
var statearr_69296_69323 = state_69291__$1;
(statearr_69296_69323[(1)] = (5));

} else {
var statearr_69297_69324 = state_69291__$1;
(statearr_69297_69324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (13))){
var state_69291__$1 = state_69291;
var statearr_69298_69325 = state_69291__$1;
(statearr_69298_69325[(2)] = null);

(statearr_69298_69325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (6))){
var inst_69268 = (state_69291[(7)]);
var inst_69274 = p.call(null,inst_69268);
var state_69291__$1 = state_69291;
if(cljs.core.truth_(inst_69274)){
var statearr_69299_69326 = state_69291__$1;
(statearr_69299_69326[(1)] = (9));

} else {
var statearr_69300_69327 = state_69291__$1;
(statearr_69300_69327[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (3))){
var inst_69289 = (state_69291[(2)]);
var state_69291__$1 = state_69291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69291__$1,inst_69289);
} else {
if((state_val_69292 === (12))){
var state_69291__$1 = state_69291;
var statearr_69301_69328 = state_69291__$1;
(statearr_69301_69328[(2)] = null);

(statearr_69301_69328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (2))){
var state_69291__$1 = state_69291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69291__$1,(4),ch);
} else {
if((state_val_69292 === (11))){
var inst_69268 = (state_69291[(7)]);
var inst_69278 = (state_69291[(2)]);
var state_69291__$1 = state_69291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69291__$1,(8),inst_69278,inst_69268);
} else {
if((state_val_69292 === (9))){
var state_69291__$1 = state_69291;
var statearr_69302_69329 = state_69291__$1;
(statearr_69302_69329[(2)] = tc);

(statearr_69302_69329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (5))){
var inst_69271 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69272 = cljs.core.async.close_BANG_.call(null,fc);
var state_69291__$1 = (function (){var statearr_69303 = state_69291;
(statearr_69303[(8)] = inst_69271);

return statearr_69303;
})();
var statearr_69304_69330 = state_69291__$1;
(statearr_69304_69330[(2)] = inst_69272);

(statearr_69304_69330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (14))){
var inst_69285 = (state_69291[(2)]);
var state_69291__$1 = state_69291;
var statearr_69305_69331 = state_69291__$1;
(statearr_69305_69331[(2)] = inst_69285);

(statearr_69305_69331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (10))){
var state_69291__$1 = state_69291;
var statearr_69306_69332 = state_69291__$1;
(statearr_69306_69332[(2)] = fc);

(statearr_69306_69332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69292 === (8))){
var inst_69280 = (state_69291[(2)]);
var state_69291__$1 = state_69291;
if(cljs.core.truth_(inst_69280)){
var statearr_69307_69333 = state_69291__$1;
(statearr_69307_69333[(1)] = (12));

} else {
var statearr_69308_69334 = state_69291__$1;
(statearr_69308_69334[(1)] = (13));

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
});})(c__28998__auto___69320,tc,fc))
;
return ((function (switch__28886__auto__,c__28998__auto___69320,tc,fc){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_69312 = [null,null,null,null,null,null,null,null,null];
(statearr_69312[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_69312[(1)] = (1));

return statearr_69312;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_69291){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69313){if((e69313 instanceof Object)){
var ex__28890__auto__ = e69313;
var statearr_69314_69335 = state_69291;
(statearr_69314_69335[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69336 = state_69291;
state_69291 = G__69336;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_69291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_69291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___69320,tc,fc))
})();
var state__29000__auto__ = (function (){var statearr_69315 = f__28999__auto__.call(null);
(statearr_69315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___69320);

return statearr_69315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___69320,tc,fc))
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
return (function (state_69400){
var state_val_69401 = (state_69400[(1)]);
if((state_val_69401 === (7))){
var inst_69396 = (state_69400[(2)]);
var state_69400__$1 = state_69400;
var statearr_69402_69423 = state_69400__$1;
(statearr_69402_69423[(2)] = inst_69396);

(statearr_69402_69423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (1))){
var inst_69380 = init;
var state_69400__$1 = (function (){var statearr_69403 = state_69400;
(statearr_69403[(7)] = inst_69380);

return statearr_69403;
})();
var statearr_69404_69424 = state_69400__$1;
(statearr_69404_69424[(2)] = null);

(statearr_69404_69424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (4))){
var inst_69383 = (state_69400[(8)]);
var inst_69383__$1 = (state_69400[(2)]);
var inst_69384 = (inst_69383__$1 == null);
var state_69400__$1 = (function (){var statearr_69405 = state_69400;
(statearr_69405[(8)] = inst_69383__$1);

return statearr_69405;
})();
if(cljs.core.truth_(inst_69384)){
var statearr_69406_69425 = state_69400__$1;
(statearr_69406_69425[(1)] = (5));

} else {
var statearr_69407_69426 = state_69400__$1;
(statearr_69407_69426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (6))){
var inst_69380 = (state_69400[(7)]);
var inst_69387 = (state_69400[(9)]);
var inst_69383 = (state_69400[(8)]);
var inst_69387__$1 = f.call(null,inst_69380,inst_69383);
var inst_69388 = cljs.core.reduced_QMARK_.call(null,inst_69387__$1);
var state_69400__$1 = (function (){var statearr_69408 = state_69400;
(statearr_69408[(9)] = inst_69387__$1);

return statearr_69408;
})();
if(inst_69388){
var statearr_69409_69427 = state_69400__$1;
(statearr_69409_69427[(1)] = (8));

} else {
var statearr_69410_69428 = state_69400__$1;
(statearr_69410_69428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (3))){
var inst_69398 = (state_69400[(2)]);
var state_69400__$1 = state_69400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69400__$1,inst_69398);
} else {
if((state_val_69401 === (2))){
var state_69400__$1 = state_69400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69400__$1,(4),ch);
} else {
if((state_val_69401 === (9))){
var inst_69387 = (state_69400[(9)]);
var inst_69380 = inst_69387;
var state_69400__$1 = (function (){var statearr_69411 = state_69400;
(statearr_69411[(7)] = inst_69380);

return statearr_69411;
})();
var statearr_69412_69429 = state_69400__$1;
(statearr_69412_69429[(2)] = null);

(statearr_69412_69429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (5))){
var inst_69380 = (state_69400[(7)]);
var state_69400__$1 = state_69400;
var statearr_69413_69430 = state_69400__$1;
(statearr_69413_69430[(2)] = inst_69380);

(statearr_69413_69430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (10))){
var inst_69394 = (state_69400[(2)]);
var state_69400__$1 = state_69400;
var statearr_69414_69431 = state_69400__$1;
(statearr_69414_69431[(2)] = inst_69394);

(statearr_69414_69431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69401 === (8))){
var inst_69387 = (state_69400[(9)]);
var inst_69390 = cljs.core.deref.call(null,inst_69387);
var state_69400__$1 = state_69400;
var statearr_69415_69432 = state_69400__$1;
(statearr_69415_69432[(2)] = inst_69390);

(statearr_69415_69432[(1)] = (10));


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
var statearr_69419 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69419[(0)] = cljs$core$async$reduce_$_state_machine__28887__auto__);

(statearr_69419[(1)] = (1));

return statearr_69419;
});
var cljs$core$async$reduce_$_state_machine__28887__auto____1 = (function (state_69400){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69420){if((e69420 instanceof Object)){
var ex__28890__auto__ = e69420;
var statearr_69421_69433 = state_69400;
(statearr_69421_69433[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69434 = state_69400;
state_69400 = G__69434;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28887__auto__ = function(state_69400){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28887__auto____1.call(this,state_69400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28887__auto____0;
cljs$core$async$reduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28887__auto____1;
return cljs$core$async$reduce_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_69422 = f__28999__auto__.call(null);
(statearr_69422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_69422;
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
return (function (state_69454){
var state_val_69455 = (state_69454[(1)]);
if((state_val_69455 === (1))){
var inst_69449 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_69454__$1 = state_69454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69454__$1,(2),inst_69449);
} else {
if((state_val_69455 === (2))){
var inst_69451 = (state_69454[(2)]);
var inst_69452 = f__$1.call(null,inst_69451);
var state_69454__$1 = state_69454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69454__$1,inst_69452);
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
var statearr_69459 = [null,null,null,null,null,null,null];
(statearr_69459[(0)] = cljs$core$async$transduce_$_state_machine__28887__auto__);

(statearr_69459[(1)] = (1));

return statearr_69459;
});
var cljs$core$async$transduce_$_state_machine__28887__auto____1 = (function (state_69454){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69460){if((e69460 instanceof Object)){
var ex__28890__auto__ = e69460;
var statearr_69461_69463 = state_69454;
(statearr_69461_69463[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69464 = state_69454;
state_69454 = G__69464;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28887__auto__ = function(state_69454){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28887__auto____1.call(this,state_69454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28887__auto____0;
cljs$core$async$transduce_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28887__auto____1;
return cljs$core$async$transduce_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,f__$1))
})();
var state__29000__auto__ = (function (){var statearr_69462 = f__28999__auto__.call(null);
(statearr_69462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_69462;
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
var args69465 = [];
var len__26007__auto___69517 = arguments.length;
var i__26008__auto___69518 = (0);
while(true){
if((i__26008__auto___69518 < len__26007__auto___69517)){
args69465.push((arguments[i__26008__auto___69518]));

var G__69519 = (i__26008__auto___69518 + (1));
i__26008__auto___69518 = G__69519;
continue;
} else {
}
break;
}

var G__69467 = args69465.length;
switch (G__69467) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69465.length)].join('')));

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
return (function (state_69492){
var state_val_69493 = (state_69492[(1)]);
if((state_val_69493 === (7))){
var inst_69474 = (state_69492[(2)]);
var state_69492__$1 = state_69492;
var statearr_69494_69521 = state_69492__$1;
(statearr_69494_69521[(2)] = inst_69474);

(statearr_69494_69521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (1))){
var inst_69468 = cljs.core.seq.call(null,coll);
var inst_69469 = inst_69468;
var state_69492__$1 = (function (){var statearr_69495 = state_69492;
(statearr_69495[(7)] = inst_69469);

return statearr_69495;
})();
var statearr_69496_69522 = state_69492__$1;
(statearr_69496_69522[(2)] = null);

(statearr_69496_69522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (4))){
var inst_69469 = (state_69492[(7)]);
var inst_69472 = cljs.core.first.call(null,inst_69469);
var state_69492__$1 = state_69492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69492__$1,(7),ch,inst_69472);
} else {
if((state_val_69493 === (13))){
var inst_69486 = (state_69492[(2)]);
var state_69492__$1 = state_69492;
var statearr_69497_69523 = state_69492__$1;
(statearr_69497_69523[(2)] = inst_69486);

(statearr_69497_69523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (6))){
var inst_69477 = (state_69492[(2)]);
var state_69492__$1 = state_69492;
if(cljs.core.truth_(inst_69477)){
var statearr_69498_69524 = state_69492__$1;
(statearr_69498_69524[(1)] = (8));

} else {
var statearr_69499_69525 = state_69492__$1;
(statearr_69499_69525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (3))){
var inst_69490 = (state_69492[(2)]);
var state_69492__$1 = state_69492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69492__$1,inst_69490);
} else {
if((state_val_69493 === (12))){
var state_69492__$1 = state_69492;
var statearr_69500_69526 = state_69492__$1;
(statearr_69500_69526[(2)] = null);

(statearr_69500_69526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (2))){
var inst_69469 = (state_69492[(7)]);
var state_69492__$1 = state_69492;
if(cljs.core.truth_(inst_69469)){
var statearr_69501_69527 = state_69492__$1;
(statearr_69501_69527[(1)] = (4));

} else {
var statearr_69502_69528 = state_69492__$1;
(statearr_69502_69528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (11))){
var inst_69483 = cljs.core.async.close_BANG_.call(null,ch);
var state_69492__$1 = state_69492;
var statearr_69503_69529 = state_69492__$1;
(statearr_69503_69529[(2)] = inst_69483);

(statearr_69503_69529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (9))){
var state_69492__$1 = state_69492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69504_69530 = state_69492__$1;
(statearr_69504_69530[(1)] = (11));

} else {
var statearr_69505_69531 = state_69492__$1;
(statearr_69505_69531[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (5))){
var inst_69469 = (state_69492[(7)]);
var state_69492__$1 = state_69492;
var statearr_69506_69532 = state_69492__$1;
(statearr_69506_69532[(2)] = inst_69469);

(statearr_69506_69532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (10))){
var inst_69488 = (state_69492[(2)]);
var state_69492__$1 = state_69492;
var statearr_69507_69533 = state_69492__$1;
(statearr_69507_69533[(2)] = inst_69488);

(statearr_69507_69533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69493 === (8))){
var inst_69469 = (state_69492[(7)]);
var inst_69479 = cljs.core.next.call(null,inst_69469);
var inst_69469__$1 = inst_69479;
var state_69492__$1 = (function (){var statearr_69508 = state_69492;
(statearr_69508[(7)] = inst_69469__$1);

return statearr_69508;
})();
var statearr_69509_69534 = state_69492__$1;
(statearr_69509_69534[(2)] = null);

(statearr_69509_69534[(1)] = (2));


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
var statearr_69513 = [null,null,null,null,null,null,null,null];
(statearr_69513[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_69513[(1)] = (1));

return statearr_69513;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_69492){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69514){if((e69514 instanceof Object)){
var ex__28890__auto__ = e69514;
var statearr_69515_69535 = state_69492;
(statearr_69515_69535[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69536 = state_69492;
state_69492 = G__69536;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_69492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_69492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_69516 = f__28999__auto__.call(null);
(statearr_69516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_69516;
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
if(typeof cljs.core.async.t_cljs$core$async69762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69762 = (function (ch,cs,meta69763){
this.ch = ch;
this.cs = cs;
this.meta69763 = meta69763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69764,meta69763__$1){
var self__ = this;
var _69764__$1 = this;
return (new cljs.core.async.t_cljs$core$async69762(self__.ch,self__.cs,meta69763__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69764){
var self__ = this;
var _69764__$1 = this;
return self__.meta69763;
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69763","meta69763",1660123376,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async69762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69762";

cljs.core.async.t_cljs$core$async69762.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async69762");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async69762 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async69762(ch__$1,cs__$1,meta69763){
return (new cljs.core.async.t_cljs$core$async69762(ch__$1,cs__$1,meta69763));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async69762(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28998__auto___69987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___69987,cs,m,dchan,dctr,done){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___69987,cs,m,dchan,dctr,done){
return (function (state_69899){
var state_val_69900 = (state_69899[(1)]);
if((state_val_69900 === (7))){
var inst_69895 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69901_69988 = state_69899__$1;
(statearr_69901_69988[(2)] = inst_69895);

(statearr_69901_69988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (20))){
var inst_69798 = (state_69899[(7)]);
var inst_69810 = cljs.core.first.call(null,inst_69798);
var inst_69811 = cljs.core.nth.call(null,inst_69810,(0),null);
var inst_69812 = cljs.core.nth.call(null,inst_69810,(1),null);
var state_69899__$1 = (function (){var statearr_69902 = state_69899;
(statearr_69902[(8)] = inst_69811);

return statearr_69902;
})();
if(cljs.core.truth_(inst_69812)){
var statearr_69903_69989 = state_69899__$1;
(statearr_69903_69989[(1)] = (22));

} else {
var statearr_69904_69990 = state_69899__$1;
(statearr_69904_69990[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (27))){
var inst_69847 = (state_69899[(9)]);
var inst_69767 = (state_69899[(10)]);
var inst_69842 = (state_69899[(11)]);
var inst_69840 = (state_69899[(12)]);
var inst_69847__$1 = cljs.core._nth.call(null,inst_69840,inst_69842);
var inst_69848 = cljs.core.async.put_BANG_.call(null,inst_69847__$1,inst_69767,done);
var state_69899__$1 = (function (){var statearr_69905 = state_69899;
(statearr_69905[(9)] = inst_69847__$1);

return statearr_69905;
})();
if(cljs.core.truth_(inst_69848)){
var statearr_69906_69991 = state_69899__$1;
(statearr_69906_69991[(1)] = (30));

} else {
var statearr_69907_69992 = state_69899__$1;
(statearr_69907_69992[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (1))){
var state_69899__$1 = state_69899;
var statearr_69908_69993 = state_69899__$1;
(statearr_69908_69993[(2)] = null);

(statearr_69908_69993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (24))){
var inst_69798 = (state_69899[(7)]);
var inst_69817 = (state_69899[(2)]);
var inst_69818 = cljs.core.next.call(null,inst_69798);
var inst_69776 = inst_69818;
var inst_69777 = null;
var inst_69778 = (0);
var inst_69779 = (0);
var state_69899__$1 = (function (){var statearr_69909 = state_69899;
(statearr_69909[(13)] = inst_69778);

(statearr_69909[(14)] = inst_69776);

(statearr_69909[(15)] = inst_69779);

(statearr_69909[(16)] = inst_69777);

(statearr_69909[(17)] = inst_69817);

return statearr_69909;
})();
var statearr_69910_69994 = state_69899__$1;
(statearr_69910_69994[(2)] = null);

(statearr_69910_69994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (39))){
var state_69899__$1 = state_69899;
var statearr_69914_69995 = state_69899__$1;
(statearr_69914_69995[(2)] = null);

(statearr_69914_69995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (4))){
var inst_69767 = (state_69899[(10)]);
var inst_69767__$1 = (state_69899[(2)]);
var inst_69768 = (inst_69767__$1 == null);
var state_69899__$1 = (function (){var statearr_69915 = state_69899;
(statearr_69915[(10)] = inst_69767__$1);

return statearr_69915;
})();
if(cljs.core.truth_(inst_69768)){
var statearr_69916_69996 = state_69899__$1;
(statearr_69916_69996[(1)] = (5));

} else {
var statearr_69917_69997 = state_69899__$1;
(statearr_69917_69997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (15))){
var inst_69778 = (state_69899[(13)]);
var inst_69776 = (state_69899[(14)]);
var inst_69779 = (state_69899[(15)]);
var inst_69777 = (state_69899[(16)]);
var inst_69794 = (state_69899[(2)]);
var inst_69795 = (inst_69779 + (1));
var tmp69911 = inst_69778;
var tmp69912 = inst_69776;
var tmp69913 = inst_69777;
var inst_69776__$1 = tmp69912;
var inst_69777__$1 = tmp69913;
var inst_69778__$1 = tmp69911;
var inst_69779__$1 = inst_69795;
var state_69899__$1 = (function (){var statearr_69918 = state_69899;
(statearr_69918[(13)] = inst_69778__$1);

(statearr_69918[(14)] = inst_69776__$1);

(statearr_69918[(15)] = inst_69779__$1);

(statearr_69918[(16)] = inst_69777__$1);

(statearr_69918[(18)] = inst_69794);

return statearr_69918;
})();
var statearr_69919_69998 = state_69899__$1;
(statearr_69919_69998[(2)] = null);

(statearr_69919_69998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (21))){
var inst_69821 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69923_69999 = state_69899__$1;
(statearr_69923_69999[(2)] = inst_69821);

(statearr_69923_69999[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (31))){
var inst_69847 = (state_69899[(9)]);
var inst_69851 = done.call(null,null);
var inst_69852 = cljs.core.async.untap_STAR_.call(null,m,inst_69847);
var state_69899__$1 = (function (){var statearr_69924 = state_69899;
(statearr_69924[(19)] = inst_69851);

return statearr_69924;
})();
var statearr_69925_70000 = state_69899__$1;
(statearr_69925_70000[(2)] = inst_69852);

(statearr_69925_70000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (32))){
var inst_69842 = (state_69899[(11)]);
var inst_69841 = (state_69899[(20)]);
var inst_69840 = (state_69899[(12)]);
var inst_69839 = (state_69899[(21)]);
var inst_69854 = (state_69899[(2)]);
var inst_69855 = (inst_69842 + (1));
var tmp69920 = inst_69841;
var tmp69921 = inst_69840;
var tmp69922 = inst_69839;
var inst_69839__$1 = tmp69922;
var inst_69840__$1 = tmp69921;
var inst_69841__$1 = tmp69920;
var inst_69842__$1 = inst_69855;
var state_69899__$1 = (function (){var statearr_69926 = state_69899;
(statearr_69926[(22)] = inst_69854);

(statearr_69926[(11)] = inst_69842__$1);

(statearr_69926[(20)] = inst_69841__$1);

(statearr_69926[(12)] = inst_69840__$1);

(statearr_69926[(21)] = inst_69839__$1);

return statearr_69926;
})();
var statearr_69927_70001 = state_69899__$1;
(statearr_69927_70001[(2)] = null);

(statearr_69927_70001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (40))){
var inst_69867 = (state_69899[(23)]);
var inst_69871 = done.call(null,null);
var inst_69872 = cljs.core.async.untap_STAR_.call(null,m,inst_69867);
var state_69899__$1 = (function (){var statearr_69928 = state_69899;
(statearr_69928[(24)] = inst_69871);

return statearr_69928;
})();
var statearr_69929_70002 = state_69899__$1;
(statearr_69929_70002[(2)] = inst_69872);

(statearr_69929_70002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (33))){
var inst_69858 = (state_69899[(25)]);
var inst_69860 = cljs.core.chunked_seq_QMARK_.call(null,inst_69858);
var state_69899__$1 = state_69899;
if(inst_69860){
var statearr_69930_70003 = state_69899__$1;
(statearr_69930_70003[(1)] = (36));

} else {
var statearr_69931_70004 = state_69899__$1;
(statearr_69931_70004[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (13))){
var inst_69788 = (state_69899[(26)]);
var inst_69791 = cljs.core.async.close_BANG_.call(null,inst_69788);
var state_69899__$1 = state_69899;
var statearr_69932_70005 = state_69899__$1;
(statearr_69932_70005[(2)] = inst_69791);

(statearr_69932_70005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (22))){
var inst_69811 = (state_69899[(8)]);
var inst_69814 = cljs.core.async.close_BANG_.call(null,inst_69811);
var state_69899__$1 = state_69899;
var statearr_69933_70006 = state_69899__$1;
(statearr_69933_70006[(2)] = inst_69814);

(statearr_69933_70006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (36))){
var inst_69858 = (state_69899[(25)]);
var inst_69862 = cljs.core.chunk_first.call(null,inst_69858);
var inst_69863 = cljs.core.chunk_rest.call(null,inst_69858);
var inst_69864 = cljs.core.count.call(null,inst_69862);
var inst_69839 = inst_69863;
var inst_69840 = inst_69862;
var inst_69841 = inst_69864;
var inst_69842 = (0);
var state_69899__$1 = (function (){var statearr_69934 = state_69899;
(statearr_69934[(11)] = inst_69842);

(statearr_69934[(20)] = inst_69841);

(statearr_69934[(12)] = inst_69840);

(statearr_69934[(21)] = inst_69839);

return statearr_69934;
})();
var statearr_69935_70007 = state_69899__$1;
(statearr_69935_70007[(2)] = null);

(statearr_69935_70007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (41))){
var inst_69858 = (state_69899[(25)]);
var inst_69874 = (state_69899[(2)]);
var inst_69875 = cljs.core.next.call(null,inst_69858);
var inst_69839 = inst_69875;
var inst_69840 = null;
var inst_69841 = (0);
var inst_69842 = (0);
var state_69899__$1 = (function (){var statearr_69936 = state_69899;
(statearr_69936[(27)] = inst_69874);

(statearr_69936[(11)] = inst_69842);

(statearr_69936[(20)] = inst_69841);

(statearr_69936[(12)] = inst_69840);

(statearr_69936[(21)] = inst_69839);

return statearr_69936;
})();
var statearr_69937_70008 = state_69899__$1;
(statearr_69937_70008[(2)] = null);

(statearr_69937_70008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (43))){
var state_69899__$1 = state_69899;
var statearr_69938_70009 = state_69899__$1;
(statearr_69938_70009[(2)] = null);

(statearr_69938_70009[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (29))){
var inst_69883 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69939_70010 = state_69899__$1;
(statearr_69939_70010[(2)] = inst_69883);

(statearr_69939_70010[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (44))){
var inst_69892 = (state_69899[(2)]);
var state_69899__$1 = (function (){var statearr_69940 = state_69899;
(statearr_69940[(28)] = inst_69892);

return statearr_69940;
})();
var statearr_69941_70011 = state_69899__$1;
(statearr_69941_70011[(2)] = null);

(statearr_69941_70011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (6))){
var inst_69831 = (state_69899[(29)]);
var inst_69830 = cljs.core.deref.call(null,cs);
var inst_69831__$1 = cljs.core.keys.call(null,inst_69830);
var inst_69832 = cljs.core.count.call(null,inst_69831__$1);
var inst_69833 = cljs.core.reset_BANG_.call(null,dctr,inst_69832);
var inst_69838 = cljs.core.seq.call(null,inst_69831__$1);
var inst_69839 = inst_69838;
var inst_69840 = null;
var inst_69841 = (0);
var inst_69842 = (0);
var state_69899__$1 = (function (){var statearr_69942 = state_69899;
(statearr_69942[(29)] = inst_69831__$1);

(statearr_69942[(11)] = inst_69842);

(statearr_69942[(20)] = inst_69841);

(statearr_69942[(30)] = inst_69833);

(statearr_69942[(12)] = inst_69840);

(statearr_69942[(21)] = inst_69839);

return statearr_69942;
})();
var statearr_69943_70012 = state_69899__$1;
(statearr_69943_70012[(2)] = null);

(statearr_69943_70012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (28))){
var inst_69858 = (state_69899[(25)]);
var inst_69839 = (state_69899[(21)]);
var inst_69858__$1 = cljs.core.seq.call(null,inst_69839);
var state_69899__$1 = (function (){var statearr_69944 = state_69899;
(statearr_69944[(25)] = inst_69858__$1);

return statearr_69944;
})();
if(inst_69858__$1){
var statearr_69945_70013 = state_69899__$1;
(statearr_69945_70013[(1)] = (33));

} else {
var statearr_69946_70014 = state_69899__$1;
(statearr_69946_70014[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (25))){
var inst_69842 = (state_69899[(11)]);
var inst_69841 = (state_69899[(20)]);
var inst_69844 = (inst_69842 < inst_69841);
var inst_69845 = inst_69844;
var state_69899__$1 = state_69899;
if(cljs.core.truth_(inst_69845)){
var statearr_69947_70015 = state_69899__$1;
(statearr_69947_70015[(1)] = (27));

} else {
var statearr_69948_70016 = state_69899__$1;
(statearr_69948_70016[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (34))){
var state_69899__$1 = state_69899;
var statearr_69949_70017 = state_69899__$1;
(statearr_69949_70017[(2)] = null);

(statearr_69949_70017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (17))){
var state_69899__$1 = state_69899;
var statearr_69950_70018 = state_69899__$1;
(statearr_69950_70018[(2)] = null);

(statearr_69950_70018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (3))){
var inst_69897 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69899__$1,inst_69897);
} else {
if((state_val_69900 === (12))){
var inst_69826 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69951_70019 = state_69899__$1;
(statearr_69951_70019[(2)] = inst_69826);

(statearr_69951_70019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (2))){
var state_69899__$1 = state_69899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69899__$1,(4),ch);
} else {
if((state_val_69900 === (23))){
var state_69899__$1 = state_69899;
var statearr_69952_70020 = state_69899__$1;
(statearr_69952_70020[(2)] = null);

(statearr_69952_70020[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (35))){
var inst_69881 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69953_70021 = state_69899__$1;
(statearr_69953_70021[(2)] = inst_69881);

(statearr_69953_70021[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (19))){
var inst_69798 = (state_69899[(7)]);
var inst_69802 = cljs.core.chunk_first.call(null,inst_69798);
var inst_69803 = cljs.core.chunk_rest.call(null,inst_69798);
var inst_69804 = cljs.core.count.call(null,inst_69802);
var inst_69776 = inst_69803;
var inst_69777 = inst_69802;
var inst_69778 = inst_69804;
var inst_69779 = (0);
var state_69899__$1 = (function (){var statearr_69954 = state_69899;
(statearr_69954[(13)] = inst_69778);

(statearr_69954[(14)] = inst_69776);

(statearr_69954[(15)] = inst_69779);

(statearr_69954[(16)] = inst_69777);

return statearr_69954;
})();
var statearr_69955_70022 = state_69899__$1;
(statearr_69955_70022[(2)] = null);

(statearr_69955_70022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (11))){
var inst_69776 = (state_69899[(14)]);
var inst_69798 = (state_69899[(7)]);
var inst_69798__$1 = cljs.core.seq.call(null,inst_69776);
var state_69899__$1 = (function (){var statearr_69956 = state_69899;
(statearr_69956[(7)] = inst_69798__$1);

return statearr_69956;
})();
if(inst_69798__$1){
var statearr_69957_70023 = state_69899__$1;
(statearr_69957_70023[(1)] = (16));

} else {
var statearr_69958_70024 = state_69899__$1;
(statearr_69958_70024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (9))){
var inst_69828 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69959_70025 = state_69899__$1;
(statearr_69959_70025[(2)] = inst_69828);

(statearr_69959_70025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (5))){
var inst_69774 = cljs.core.deref.call(null,cs);
var inst_69775 = cljs.core.seq.call(null,inst_69774);
var inst_69776 = inst_69775;
var inst_69777 = null;
var inst_69778 = (0);
var inst_69779 = (0);
var state_69899__$1 = (function (){var statearr_69960 = state_69899;
(statearr_69960[(13)] = inst_69778);

(statearr_69960[(14)] = inst_69776);

(statearr_69960[(15)] = inst_69779);

(statearr_69960[(16)] = inst_69777);

return statearr_69960;
})();
var statearr_69961_70026 = state_69899__$1;
(statearr_69961_70026[(2)] = null);

(statearr_69961_70026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (14))){
var state_69899__$1 = state_69899;
var statearr_69962_70027 = state_69899__$1;
(statearr_69962_70027[(2)] = null);

(statearr_69962_70027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (45))){
var inst_69889 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69963_70028 = state_69899__$1;
(statearr_69963_70028[(2)] = inst_69889);

(statearr_69963_70028[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (26))){
var inst_69831 = (state_69899[(29)]);
var inst_69885 = (state_69899[(2)]);
var inst_69886 = cljs.core.seq.call(null,inst_69831);
var state_69899__$1 = (function (){var statearr_69964 = state_69899;
(statearr_69964[(31)] = inst_69885);

return statearr_69964;
})();
if(inst_69886){
var statearr_69965_70029 = state_69899__$1;
(statearr_69965_70029[(1)] = (42));

} else {
var statearr_69966_70030 = state_69899__$1;
(statearr_69966_70030[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (16))){
var inst_69798 = (state_69899[(7)]);
var inst_69800 = cljs.core.chunked_seq_QMARK_.call(null,inst_69798);
var state_69899__$1 = state_69899;
if(inst_69800){
var statearr_69967_70031 = state_69899__$1;
(statearr_69967_70031[(1)] = (19));

} else {
var statearr_69968_70032 = state_69899__$1;
(statearr_69968_70032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (38))){
var inst_69878 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69969_70033 = state_69899__$1;
(statearr_69969_70033[(2)] = inst_69878);

(statearr_69969_70033[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (30))){
var state_69899__$1 = state_69899;
var statearr_69970_70034 = state_69899__$1;
(statearr_69970_70034[(2)] = null);

(statearr_69970_70034[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (10))){
var inst_69779 = (state_69899[(15)]);
var inst_69777 = (state_69899[(16)]);
var inst_69787 = cljs.core._nth.call(null,inst_69777,inst_69779);
var inst_69788 = cljs.core.nth.call(null,inst_69787,(0),null);
var inst_69789 = cljs.core.nth.call(null,inst_69787,(1),null);
var state_69899__$1 = (function (){var statearr_69971 = state_69899;
(statearr_69971[(26)] = inst_69788);

return statearr_69971;
})();
if(cljs.core.truth_(inst_69789)){
var statearr_69972_70035 = state_69899__$1;
(statearr_69972_70035[(1)] = (13));

} else {
var statearr_69973_70036 = state_69899__$1;
(statearr_69973_70036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (18))){
var inst_69824 = (state_69899[(2)]);
var state_69899__$1 = state_69899;
var statearr_69974_70037 = state_69899__$1;
(statearr_69974_70037[(2)] = inst_69824);

(statearr_69974_70037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (42))){
var state_69899__$1 = state_69899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69899__$1,(45),dchan);
} else {
if((state_val_69900 === (37))){
var inst_69858 = (state_69899[(25)]);
var inst_69867 = (state_69899[(23)]);
var inst_69767 = (state_69899[(10)]);
var inst_69867__$1 = cljs.core.first.call(null,inst_69858);
var inst_69868 = cljs.core.async.put_BANG_.call(null,inst_69867__$1,inst_69767,done);
var state_69899__$1 = (function (){var statearr_69975 = state_69899;
(statearr_69975[(23)] = inst_69867__$1);

return statearr_69975;
})();
if(cljs.core.truth_(inst_69868)){
var statearr_69976_70038 = state_69899__$1;
(statearr_69976_70038[(1)] = (39));

} else {
var statearr_69977_70039 = state_69899__$1;
(statearr_69977_70039[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69900 === (8))){
var inst_69778 = (state_69899[(13)]);
var inst_69779 = (state_69899[(15)]);
var inst_69781 = (inst_69779 < inst_69778);
var inst_69782 = inst_69781;
var state_69899__$1 = state_69899;
if(cljs.core.truth_(inst_69782)){
var statearr_69978_70040 = state_69899__$1;
(statearr_69978_70040[(1)] = (10));

} else {
var statearr_69979_70041 = state_69899__$1;
(statearr_69979_70041[(1)] = (11));

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
});})(c__28998__auto___69987,cs,m,dchan,dctr,done))
;
return ((function (switch__28886__auto__,c__28998__auto___69987,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28887__auto__ = null;
var cljs$core$async$mult_$_state_machine__28887__auto____0 = (function (){
var statearr_69983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69983[(0)] = cljs$core$async$mult_$_state_machine__28887__auto__);

(statearr_69983[(1)] = (1));

return statearr_69983;
});
var cljs$core$async$mult_$_state_machine__28887__auto____1 = (function (state_69899){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_69899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e69984){if((e69984 instanceof Object)){
var ex__28890__auto__ = e69984;
var statearr_69985_70042 = state_69899;
(statearr_69985_70042[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70043 = state_69899;
state_69899 = G__70043;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28887__auto__ = function(state_69899){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28887__auto____1.call(this,state_69899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28887__auto____0;
cljs$core$async$mult_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28887__auto____1;
return cljs$core$async$mult_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___69987,cs,m,dchan,dctr,done))
})();
var state__29000__auto__ = (function (){var statearr_69986 = f__28999__auto__.call(null);
(statearr_69986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___69987);

return statearr_69986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___69987,cs,m,dchan,dctr,done))
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
var args70044 = [];
var len__26007__auto___70047 = arguments.length;
var i__26008__auto___70048 = (0);
while(true){
if((i__26008__auto___70048 < len__26007__auto___70047)){
args70044.push((arguments[i__26008__auto___70048]));

var G__70049 = (i__26008__auto___70048 + (1));
i__26008__auto___70048 = G__70049;
continue;
} else {
}
break;
}

var G__70046 = args70044.length;
switch (G__70046) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70044.length)].join('')));

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
var len__26007__auto___70061 = arguments.length;
var i__26008__auto___70062 = (0);
while(true){
if((i__26008__auto___70062 < len__26007__auto___70061)){
args__26014__auto__.push((arguments[i__26008__auto___70062]));

var G__70063 = (i__26008__auto___70062 + (1));
i__26008__auto___70062 = G__70063;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((3) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26015__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70055){
var map__70056 = p__70055;
var map__70056__$1 = ((((!((map__70056 == null)))?((((map__70056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70056):map__70056);
var opts = map__70056__$1;
var statearr_70058_70064 = state;
(statearr_70058_70064[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__70056,map__70056__$1,opts){
return (function (val){
var statearr_70059_70065 = state;
(statearr_70059_70065[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__70056,map__70056__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_70060_70066 = state;
(statearr_70060_70066[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70051){
var G__70052 = cljs.core.first.call(null,seq70051);
var seq70051__$1 = cljs.core.next.call(null,seq70051);
var G__70053 = cljs.core.first.call(null,seq70051__$1);
var seq70051__$2 = cljs.core.next.call(null,seq70051__$1);
var G__70054 = cljs.core.first.call(null,seq70051__$2);
var seq70051__$3 = cljs.core.next.call(null,seq70051__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70052,G__70053,G__70054,seq70051__$3);
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
if(typeof cljs.core.async.t_cljs$core$async70234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70234 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta70235){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta70235 = meta70235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70236,meta70235__$1){
var self__ = this;
var _70236__$1 = this;
return (new cljs.core.async.t_cljs$core$async70234(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta70235__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70236){
var self__ = this;
var _70236__$1 = this;
return self__.meta70235;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async70234.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta70235","meta70235",-1985882850,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70234";

cljs.core.async.t_cljs$core$async70234.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async70234");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async70234 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async70234(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta70235){
return (new cljs.core.async.t_cljs$core$async70234(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta70235));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async70234(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28998__auto___70401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___70401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___70401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_70338){
var state_val_70339 = (state_70338[(1)]);
if((state_val_70339 === (7))){
var inst_70253 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70340_70402 = state_70338__$1;
(statearr_70340_70402[(2)] = inst_70253);

(statearr_70340_70402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (20))){
var inst_70265 = (state_70338[(7)]);
var state_70338__$1 = state_70338;
var statearr_70341_70403 = state_70338__$1;
(statearr_70341_70403[(2)] = inst_70265);

(statearr_70341_70403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (27))){
var state_70338__$1 = state_70338;
var statearr_70342_70404 = state_70338__$1;
(statearr_70342_70404[(2)] = null);

(statearr_70342_70404[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (1))){
var inst_70240 = (state_70338[(8)]);
var inst_70240__$1 = calc_state.call(null);
var inst_70242 = (inst_70240__$1 == null);
var inst_70243 = cljs.core.not.call(null,inst_70242);
var state_70338__$1 = (function (){var statearr_70343 = state_70338;
(statearr_70343[(8)] = inst_70240__$1);

return statearr_70343;
})();
if(inst_70243){
var statearr_70344_70405 = state_70338__$1;
(statearr_70344_70405[(1)] = (2));

} else {
var statearr_70345_70406 = state_70338__$1;
(statearr_70345_70406[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (24))){
var inst_70298 = (state_70338[(9)]);
var inst_70289 = (state_70338[(10)]);
var inst_70312 = (state_70338[(11)]);
var inst_70312__$1 = inst_70289.call(null,inst_70298);
var state_70338__$1 = (function (){var statearr_70346 = state_70338;
(statearr_70346[(11)] = inst_70312__$1);

return statearr_70346;
})();
if(cljs.core.truth_(inst_70312__$1)){
var statearr_70347_70407 = state_70338__$1;
(statearr_70347_70407[(1)] = (29));

} else {
var statearr_70348_70408 = state_70338__$1;
(statearr_70348_70408[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (4))){
var inst_70256 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70256)){
var statearr_70349_70409 = state_70338__$1;
(statearr_70349_70409[(1)] = (8));

} else {
var statearr_70350_70410 = state_70338__$1;
(statearr_70350_70410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (15))){
var inst_70283 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70283)){
var statearr_70351_70411 = state_70338__$1;
(statearr_70351_70411[(1)] = (19));

} else {
var statearr_70352_70412 = state_70338__$1;
(statearr_70352_70412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (21))){
var inst_70288 = (state_70338[(12)]);
var inst_70288__$1 = (state_70338[(2)]);
var inst_70289 = cljs.core.get.call(null,inst_70288__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70290 = cljs.core.get.call(null,inst_70288__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70291 = cljs.core.get.call(null,inst_70288__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70338__$1 = (function (){var statearr_70353 = state_70338;
(statearr_70353[(10)] = inst_70289);

(statearr_70353[(12)] = inst_70288__$1);

(statearr_70353[(13)] = inst_70290);

return statearr_70353;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70338__$1,(22),inst_70291);
} else {
if((state_val_70339 === (31))){
var inst_70320 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70320)){
var statearr_70354_70413 = state_70338__$1;
(statearr_70354_70413[(1)] = (32));

} else {
var statearr_70355_70414 = state_70338__$1;
(statearr_70355_70414[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (32))){
var inst_70297 = (state_70338[(14)]);
var state_70338__$1 = state_70338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70338__$1,(35),out,inst_70297);
} else {
if((state_val_70339 === (33))){
var inst_70288 = (state_70338[(12)]);
var inst_70265 = inst_70288;
var state_70338__$1 = (function (){var statearr_70356 = state_70338;
(statearr_70356[(7)] = inst_70265);

return statearr_70356;
})();
var statearr_70357_70415 = state_70338__$1;
(statearr_70357_70415[(2)] = null);

(statearr_70357_70415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (13))){
var inst_70265 = (state_70338[(7)]);
var inst_70272 = inst_70265.cljs$lang$protocol_mask$partition0$;
var inst_70273 = (inst_70272 & (64));
var inst_70274 = inst_70265.cljs$core$ISeq$;
var inst_70275 = (cljs.core.PROTOCOL_SENTINEL === inst_70274);
var inst_70276 = (inst_70273) || (inst_70275);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70276)){
var statearr_70358_70416 = state_70338__$1;
(statearr_70358_70416[(1)] = (16));

} else {
var statearr_70359_70417 = state_70338__$1;
(statearr_70359_70417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (22))){
var inst_70297 = (state_70338[(14)]);
var inst_70298 = (state_70338[(9)]);
var inst_70296 = (state_70338[(2)]);
var inst_70297__$1 = cljs.core.nth.call(null,inst_70296,(0),null);
var inst_70298__$1 = cljs.core.nth.call(null,inst_70296,(1),null);
var inst_70299 = (inst_70297__$1 == null);
var inst_70300 = cljs.core._EQ_.call(null,inst_70298__$1,change);
var inst_70301 = (inst_70299) || (inst_70300);
var state_70338__$1 = (function (){var statearr_70360 = state_70338;
(statearr_70360[(14)] = inst_70297__$1);

(statearr_70360[(9)] = inst_70298__$1);

return statearr_70360;
})();
if(cljs.core.truth_(inst_70301)){
var statearr_70361_70418 = state_70338__$1;
(statearr_70361_70418[(1)] = (23));

} else {
var statearr_70362_70419 = state_70338__$1;
(statearr_70362_70419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (36))){
var inst_70288 = (state_70338[(12)]);
var inst_70265 = inst_70288;
var state_70338__$1 = (function (){var statearr_70363 = state_70338;
(statearr_70363[(7)] = inst_70265);

return statearr_70363;
})();
var statearr_70364_70420 = state_70338__$1;
(statearr_70364_70420[(2)] = null);

(statearr_70364_70420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (29))){
var inst_70312 = (state_70338[(11)]);
var state_70338__$1 = state_70338;
var statearr_70365_70421 = state_70338__$1;
(statearr_70365_70421[(2)] = inst_70312);

(statearr_70365_70421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (6))){
var state_70338__$1 = state_70338;
var statearr_70366_70422 = state_70338__$1;
(statearr_70366_70422[(2)] = false);

(statearr_70366_70422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (28))){
var inst_70308 = (state_70338[(2)]);
var inst_70309 = calc_state.call(null);
var inst_70265 = inst_70309;
var state_70338__$1 = (function (){var statearr_70367 = state_70338;
(statearr_70367[(7)] = inst_70265);

(statearr_70367[(15)] = inst_70308);

return statearr_70367;
})();
var statearr_70368_70423 = state_70338__$1;
(statearr_70368_70423[(2)] = null);

(statearr_70368_70423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (25))){
var inst_70334 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70369_70424 = state_70338__$1;
(statearr_70369_70424[(2)] = inst_70334);

(statearr_70369_70424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (34))){
var inst_70332 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70370_70425 = state_70338__$1;
(statearr_70370_70425[(2)] = inst_70332);

(statearr_70370_70425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (17))){
var state_70338__$1 = state_70338;
var statearr_70371_70426 = state_70338__$1;
(statearr_70371_70426[(2)] = false);

(statearr_70371_70426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (3))){
var state_70338__$1 = state_70338;
var statearr_70372_70427 = state_70338__$1;
(statearr_70372_70427[(2)] = false);

(statearr_70372_70427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (12))){
var inst_70336 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70338__$1,inst_70336);
} else {
if((state_val_70339 === (2))){
var inst_70240 = (state_70338[(8)]);
var inst_70245 = inst_70240.cljs$lang$protocol_mask$partition0$;
var inst_70246 = (inst_70245 & (64));
var inst_70247 = inst_70240.cljs$core$ISeq$;
var inst_70248 = (cljs.core.PROTOCOL_SENTINEL === inst_70247);
var inst_70249 = (inst_70246) || (inst_70248);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70249)){
var statearr_70373_70428 = state_70338__$1;
(statearr_70373_70428[(1)] = (5));

} else {
var statearr_70374_70429 = state_70338__$1;
(statearr_70374_70429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (23))){
var inst_70297 = (state_70338[(14)]);
var inst_70303 = (inst_70297 == null);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70303)){
var statearr_70375_70430 = state_70338__$1;
(statearr_70375_70430[(1)] = (26));

} else {
var statearr_70376_70431 = state_70338__$1;
(statearr_70376_70431[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (35))){
var inst_70323 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70323)){
var statearr_70377_70432 = state_70338__$1;
(statearr_70377_70432[(1)] = (36));

} else {
var statearr_70378_70433 = state_70338__$1;
(statearr_70378_70433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (19))){
var inst_70265 = (state_70338[(7)]);
var inst_70285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70265);
var state_70338__$1 = state_70338;
var statearr_70379_70434 = state_70338__$1;
(statearr_70379_70434[(2)] = inst_70285);

(statearr_70379_70434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (11))){
var inst_70265 = (state_70338[(7)]);
var inst_70269 = (inst_70265 == null);
var inst_70270 = cljs.core.not.call(null,inst_70269);
var state_70338__$1 = state_70338;
if(inst_70270){
var statearr_70380_70435 = state_70338__$1;
(statearr_70380_70435[(1)] = (13));

} else {
var statearr_70381_70436 = state_70338__$1;
(statearr_70381_70436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (9))){
var inst_70240 = (state_70338[(8)]);
var state_70338__$1 = state_70338;
var statearr_70382_70437 = state_70338__$1;
(statearr_70382_70437[(2)] = inst_70240);

(statearr_70382_70437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (5))){
var state_70338__$1 = state_70338;
var statearr_70383_70438 = state_70338__$1;
(statearr_70383_70438[(2)] = true);

(statearr_70383_70438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (14))){
var state_70338__$1 = state_70338;
var statearr_70384_70439 = state_70338__$1;
(statearr_70384_70439[(2)] = false);

(statearr_70384_70439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (26))){
var inst_70298 = (state_70338[(9)]);
var inst_70305 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_70298);
var state_70338__$1 = state_70338;
var statearr_70385_70440 = state_70338__$1;
(statearr_70385_70440[(2)] = inst_70305);

(statearr_70385_70440[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (16))){
var state_70338__$1 = state_70338;
var statearr_70386_70441 = state_70338__$1;
(statearr_70386_70441[(2)] = true);

(statearr_70386_70441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (38))){
var inst_70328 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70387_70442 = state_70338__$1;
(statearr_70387_70442[(2)] = inst_70328);

(statearr_70387_70442[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (30))){
var inst_70298 = (state_70338[(9)]);
var inst_70289 = (state_70338[(10)]);
var inst_70290 = (state_70338[(13)]);
var inst_70315 = cljs.core.empty_QMARK_.call(null,inst_70289);
var inst_70316 = inst_70290.call(null,inst_70298);
var inst_70317 = cljs.core.not.call(null,inst_70316);
var inst_70318 = (inst_70315) && (inst_70317);
var state_70338__$1 = state_70338;
var statearr_70388_70443 = state_70338__$1;
(statearr_70388_70443[(2)] = inst_70318);

(statearr_70388_70443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (10))){
var inst_70240 = (state_70338[(8)]);
var inst_70261 = (state_70338[(2)]);
var inst_70262 = cljs.core.get.call(null,inst_70261,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70263 = cljs.core.get.call(null,inst_70261,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70264 = cljs.core.get.call(null,inst_70261,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70265 = inst_70240;
var state_70338__$1 = (function (){var statearr_70389 = state_70338;
(statearr_70389[(16)] = inst_70264);

(statearr_70389[(17)] = inst_70263);

(statearr_70389[(7)] = inst_70265);

(statearr_70389[(18)] = inst_70262);

return statearr_70389;
})();
var statearr_70390_70444 = state_70338__$1;
(statearr_70390_70444[(2)] = null);

(statearr_70390_70444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (18))){
var inst_70280 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70391_70445 = state_70338__$1;
(statearr_70391_70445[(2)] = inst_70280);

(statearr_70391_70445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (37))){
var state_70338__$1 = state_70338;
var statearr_70392_70446 = state_70338__$1;
(statearr_70392_70446[(2)] = null);

(statearr_70392_70446[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (8))){
var inst_70240 = (state_70338[(8)]);
var inst_70258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70240);
var state_70338__$1 = state_70338;
var statearr_70393_70447 = state_70338__$1;
(statearr_70393_70447[(2)] = inst_70258);

(statearr_70393_70447[(1)] = (10));


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
});})(c__28998__auto___70401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28886__auto__,c__28998__auto___70401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28887__auto__ = null;
var cljs$core$async$mix_$_state_machine__28887__auto____0 = (function (){
var statearr_70397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70397[(0)] = cljs$core$async$mix_$_state_machine__28887__auto__);

(statearr_70397[(1)] = (1));

return statearr_70397;
});
var cljs$core$async$mix_$_state_machine__28887__auto____1 = (function (state_70338){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_70338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e70398){if((e70398 instanceof Object)){
var ex__28890__auto__ = e70398;
var statearr_70399_70448 = state_70338;
(statearr_70399_70448[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70449 = state_70338;
state_70338 = G__70449;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28887__auto__ = function(state_70338){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28887__auto____1.call(this,state_70338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28887__auto____0;
cljs$core$async$mix_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28887__auto____1;
return cljs$core$async$mix_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___70401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29000__auto__ = (function (){var statearr_70400 = f__28999__auto__.call(null);
(statearr_70400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___70401);

return statearr_70400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___70401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args70450 = [];
var len__26007__auto___70453 = arguments.length;
var i__26008__auto___70454 = (0);
while(true){
if((i__26008__auto___70454 < len__26007__auto___70453)){
args70450.push((arguments[i__26008__auto___70454]));

var G__70455 = (i__26008__auto___70454 + (1));
i__26008__auto___70454 = G__70455;
continue;
} else {
}
break;
}

var G__70452 = args70450.length;
switch (G__70452) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70450.length)].join('')));

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
var args70458 = [];
var len__26007__auto___70583 = arguments.length;
var i__26008__auto___70584 = (0);
while(true){
if((i__26008__auto___70584 < len__26007__auto___70583)){
args70458.push((arguments[i__26008__auto___70584]));

var G__70585 = (i__26008__auto___70584 + (1));
i__26008__auto___70584 = G__70585;
continue;
} else {
}
break;
}

var G__70460 = args70458.length;
switch (G__70460) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70458.length)].join('')));

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
return (function (p1__70457_SHARP_){
if(cljs.core.truth_(p1__70457_SHARP_.call(null,topic))){
return p1__70457_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70457_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24899__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async70461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70461 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70462){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70462 = meta70462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70463,meta70462__$1){
var self__ = this;
var _70463__$1 = this;
return (new cljs.core.async.t_cljs$core$async70461(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70462__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70463){
var self__ = this;
var _70463__$1 = this;
return self__.meta70462;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70462","meta70462",-1850591892,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70461";

cljs.core.async.t_cljs$core$async70461.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async70461");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async70461 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async70461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70462){
return (new cljs.core.async.t_cljs$core$async70461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70462));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async70461(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28998__auto___70587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___70587,mults,ensure_mult,p){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___70587,mults,ensure_mult,p){
return (function (state_70535){
var state_val_70536 = (state_70535[(1)]);
if((state_val_70536 === (7))){
var inst_70531 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70537_70588 = state_70535__$1;
(statearr_70537_70588[(2)] = inst_70531);

(statearr_70537_70588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (20))){
var state_70535__$1 = state_70535;
var statearr_70538_70589 = state_70535__$1;
(statearr_70538_70589[(2)] = null);

(statearr_70538_70589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (1))){
var state_70535__$1 = state_70535;
var statearr_70539_70590 = state_70535__$1;
(statearr_70539_70590[(2)] = null);

(statearr_70539_70590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (24))){
var inst_70514 = (state_70535[(7)]);
var inst_70523 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_70514);
var state_70535__$1 = state_70535;
var statearr_70540_70591 = state_70535__$1;
(statearr_70540_70591[(2)] = inst_70523);

(statearr_70540_70591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (4))){
var inst_70466 = (state_70535[(8)]);
var inst_70466__$1 = (state_70535[(2)]);
var inst_70467 = (inst_70466__$1 == null);
var state_70535__$1 = (function (){var statearr_70541 = state_70535;
(statearr_70541[(8)] = inst_70466__$1);

return statearr_70541;
})();
if(cljs.core.truth_(inst_70467)){
var statearr_70542_70592 = state_70535__$1;
(statearr_70542_70592[(1)] = (5));

} else {
var statearr_70543_70593 = state_70535__$1;
(statearr_70543_70593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (15))){
var inst_70508 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70544_70594 = state_70535__$1;
(statearr_70544_70594[(2)] = inst_70508);

(statearr_70544_70594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (21))){
var inst_70528 = (state_70535[(2)]);
var state_70535__$1 = (function (){var statearr_70545 = state_70535;
(statearr_70545[(9)] = inst_70528);

return statearr_70545;
})();
var statearr_70546_70595 = state_70535__$1;
(statearr_70546_70595[(2)] = null);

(statearr_70546_70595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (13))){
var inst_70490 = (state_70535[(10)]);
var inst_70492 = cljs.core.chunked_seq_QMARK_.call(null,inst_70490);
var state_70535__$1 = state_70535;
if(inst_70492){
var statearr_70547_70596 = state_70535__$1;
(statearr_70547_70596[(1)] = (16));

} else {
var statearr_70548_70597 = state_70535__$1;
(statearr_70548_70597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (22))){
var inst_70520 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
if(cljs.core.truth_(inst_70520)){
var statearr_70549_70598 = state_70535__$1;
(statearr_70549_70598[(1)] = (23));

} else {
var statearr_70550_70599 = state_70535__$1;
(statearr_70550_70599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (6))){
var inst_70466 = (state_70535[(8)]);
var inst_70516 = (state_70535[(11)]);
var inst_70514 = (state_70535[(7)]);
var inst_70514__$1 = topic_fn.call(null,inst_70466);
var inst_70515 = cljs.core.deref.call(null,mults);
var inst_70516__$1 = cljs.core.get.call(null,inst_70515,inst_70514__$1);
var state_70535__$1 = (function (){var statearr_70551 = state_70535;
(statearr_70551[(11)] = inst_70516__$1);

(statearr_70551[(7)] = inst_70514__$1);

return statearr_70551;
})();
if(cljs.core.truth_(inst_70516__$1)){
var statearr_70552_70600 = state_70535__$1;
(statearr_70552_70600[(1)] = (19));

} else {
var statearr_70553_70601 = state_70535__$1;
(statearr_70553_70601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (25))){
var inst_70525 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70554_70602 = state_70535__$1;
(statearr_70554_70602[(2)] = inst_70525);

(statearr_70554_70602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (17))){
var inst_70490 = (state_70535[(10)]);
var inst_70499 = cljs.core.first.call(null,inst_70490);
var inst_70500 = cljs.core.async.muxch_STAR_.call(null,inst_70499);
var inst_70501 = cljs.core.async.close_BANG_.call(null,inst_70500);
var inst_70502 = cljs.core.next.call(null,inst_70490);
var inst_70476 = inst_70502;
var inst_70477 = null;
var inst_70478 = (0);
var inst_70479 = (0);
var state_70535__$1 = (function (){var statearr_70555 = state_70535;
(statearr_70555[(12)] = inst_70479);

(statearr_70555[(13)] = inst_70476);

(statearr_70555[(14)] = inst_70478);

(statearr_70555[(15)] = inst_70477);

(statearr_70555[(16)] = inst_70501);

return statearr_70555;
})();
var statearr_70556_70603 = state_70535__$1;
(statearr_70556_70603[(2)] = null);

(statearr_70556_70603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (3))){
var inst_70533 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70535__$1,inst_70533);
} else {
if((state_val_70536 === (12))){
var inst_70510 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70557_70604 = state_70535__$1;
(statearr_70557_70604[(2)] = inst_70510);

(statearr_70557_70604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (2))){
var state_70535__$1 = state_70535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70535__$1,(4),ch);
} else {
if((state_val_70536 === (23))){
var state_70535__$1 = state_70535;
var statearr_70558_70605 = state_70535__$1;
(statearr_70558_70605[(2)] = null);

(statearr_70558_70605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (19))){
var inst_70466 = (state_70535[(8)]);
var inst_70516 = (state_70535[(11)]);
var inst_70518 = cljs.core.async.muxch_STAR_.call(null,inst_70516);
var state_70535__$1 = state_70535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70535__$1,(22),inst_70518,inst_70466);
} else {
if((state_val_70536 === (11))){
var inst_70476 = (state_70535[(13)]);
var inst_70490 = (state_70535[(10)]);
var inst_70490__$1 = cljs.core.seq.call(null,inst_70476);
var state_70535__$1 = (function (){var statearr_70559 = state_70535;
(statearr_70559[(10)] = inst_70490__$1);

return statearr_70559;
})();
if(inst_70490__$1){
var statearr_70560_70606 = state_70535__$1;
(statearr_70560_70606[(1)] = (13));

} else {
var statearr_70561_70607 = state_70535__$1;
(statearr_70561_70607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (9))){
var inst_70512 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70562_70608 = state_70535__$1;
(statearr_70562_70608[(2)] = inst_70512);

(statearr_70562_70608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (5))){
var inst_70473 = cljs.core.deref.call(null,mults);
var inst_70474 = cljs.core.vals.call(null,inst_70473);
var inst_70475 = cljs.core.seq.call(null,inst_70474);
var inst_70476 = inst_70475;
var inst_70477 = null;
var inst_70478 = (0);
var inst_70479 = (0);
var state_70535__$1 = (function (){var statearr_70563 = state_70535;
(statearr_70563[(12)] = inst_70479);

(statearr_70563[(13)] = inst_70476);

(statearr_70563[(14)] = inst_70478);

(statearr_70563[(15)] = inst_70477);

return statearr_70563;
})();
var statearr_70564_70609 = state_70535__$1;
(statearr_70564_70609[(2)] = null);

(statearr_70564_70609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (14))){
var state_70535__$1 = state_70535;
var statearr_70568_70610 = state_70535__$1;
(statearr_70568_70610[(2)] = null);

(statearr_70568_70610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (16))){
var inst_70490 = (state_70535[(10)]);
var inst_70494 = cljs.core.chunk_first.call(null,inst_70490);
var inst_70495 = cljs.core.chunk_rest.call(null,inst_70490);
var inst_70496 = cljs.core.count.call(null,inst_70494);
var inst_70476 = inst_70495;
var inst_70477 = inst_70494;
var inst_70478 = inst_70496;
var inst_70479 = (0);
var state_70535__$1 = (function (){var statearr_70569 = state_70535;
(statearr_70569[(12)] = inst_70479);

(statearr_70569[(13)] = inst_70476);

(statearr_70569[(14)] = inst_70478);

(statearr_70569[(15)] = inst_70477);

return statearr_70569;
})();
var statearr_70570_70611 = state_70535__$1;
(statearr_70570_70611[(2)] = null);

(statearr_70570_70611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (10))){
var inst_70479 = (state_70535[(12)]);
var inst_70476 = (state_70535[(13)]);
var inst_70478 = (state_70535[(14)]);
var inst_70477 = (state_70535[(15)]);
var inst_70484 = cljs.core._nth.call(null,inst_70477,inst_70479);
var inst_70485 = cljs.core.async.muxch_STAR_.call(null,inst_70484);
var inst_70486 = cljs.core.async.close_BANG_.call(null,inst_70485);
var inst_70487 = (inst_70479 + (1));
var tmp70565 = inst_70476;
var tmp70566 = inst_70478;
var tmp70567 = inst_70477;
var inst_70476__$1 = tmp70565;
var inst_70477__$1 = tmp70567;
var inst_70478__$1 = tmp70566;
var inst_70479__$1 = inst_70487;
var state_70535__$1 = (function (){var statearr_70571 = state_70535;
(statearr_70571[(12)] = inst_70479__$1);

(statearr_70571[(13)] = inst_70476__$1);

(statearr_70571[(14)] = inst_70478__$1);

(statearr_70571[(17)] = inst_70486);

(statearr_70571[(15)] = inst_70477__$1);

return statearr_70571;
})();
var statearr_70572_70612 = state_70535__$1;
(statearr_70572_70612[(2)] = null);

(statearr_70572_70612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (18))){
var inst_70505 = (state_70535[(2)]);
var state_70535__$1 = state_70535;
var statearr_70573_70613 = state_70535__$1;
(statearr_70573_70613[(2)] = inst_70505);

(statearr_70573_70613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70536 === (8))){
var inst_70479 = (state_70535[(12)]);
var inst_70478 = (state_70535[(14)]);
var inst_70481 = (inst_70479 < inst_70478);
var inst_70482 = inst_70481;
var state_70535__$1 = state_70535;
if(cljs.core.truth_(inst_70482)){
var statearr_70574_70614 = state_70535__$1;
(statearr_70574_70614[(1)] = (10));

} else {
var statearr_70575_70615 = state_70535__$1;
(statearr_70575_70615[(1)] = (11));

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
});})(c__28998__auto___70587,mults,ensure_mult,p))
;
return ((function (switch__28886__auto__,c__28998__auto___70587,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_70579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70579[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_70579[(1)] = (1));

return statearr_70579;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_70535){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_70535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e70580){if((e70580 instanceof Object)){
var ex__28890__auto__ = e70580;
var statearr_70581_70616 = state_70535;
(statearr_70581_70616[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70617 = state_70535;
state_70535 = G__70617;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_70535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_70535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___70587,mults,ensure_mult,p))
})();
var state__29000__auto__ = (function (){var statearr_70582 = f__28999__auto__.call(null);
(statearr_70582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___70587);

return statearr_70582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___70587,mults,ensure_mult,p))
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
var args70618 = [];
var len__26007__auto___70621 = arguments.length;
var i__26008__auto___70622 = (0);
while(true){
if((i__26008__auto___70622 < len__26007__auto___70621)){
args70618.push((arguments[i__26008__auto___70622]));

var G__70623 = (i__26008__auto___70622 + (1));
i__26008__auto___70622 = G__70623;
continue;
} else {
}
break;
}

var G__70620 = args70618.length;
switch (G__70620) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70618.length)].join('')));

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
var args70625 = [];
var len__26007__auto___70628 = arguments.length;
var i__26008__auto___70629 = (0);
while(true){
if((i__26008__auto___70629 < len__26007__auto___70628)){
args70625.push((arguments[i__26008__auto___70629]));

var G__70630 = (i__26008__auto___70629 + (1));
i__26008__auto___70629 = G__70630;
continue;
} else {
}
break;
}

var G__70627 = args70625.length;
switch (G__70627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70625.length)].join('')));

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
var args70632 = [];
var len__26007__auto___70703 = arguments.length;
var i__26008__auto___70704 = (0);
while(true){
if((i__26008__auto___70704 < len__26007__auto___70703)){
args70632.push((arguments[i__26008__auto___70704]));

var G__70705 = (i__26008__auto___70704 + (1));
i__26008__auto___70704 = G__70705;
continue;
} else {
}
break;
}

var G__70634 = args70632.length;
switch (G__70634) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70632.length)].join('')));

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
var c__28998__auto___70707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___70707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___70707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_70673){
var state_val_70674 = (state_70673[(1)]);
if((state_val_70674 === (7))){
var state_70673__$1 = state_70673;
var statearr_70675_70708 = state_70673__$1;
(statearr_70675_70708[(2)] = null);

(statearr_70675_70708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (1))){
var state_70673__$1 = state_70673;
var statearr_70676_70709 = state_70673__$1;
(statearr_70676_70709[(2)] = null);

(statearr_70676_70709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (4))){
var inst_70637 = (state_70673[(7)]);
var inst_70639 = (inst_70637 < cnt);
var state_70673__$1 = state_70673;
if(cljs.core.truth_(inst_70639)){
var statearr_70677_70710 = state_70673__$1;
(statearr_70677_70710[(1)] = (6));

} else {
var statearr_70678_70711 = state_70673__$1;
(statearr_70678_70711[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (15))){
var inst_70669 = (state_70673[(2)]);
var state_70673__$1 = state_70673;
var statearr_70679_70712 = state_70673__$1;
(statearr_70679_70712[(2)] = inst_70669);

(statearr_70679_70712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (13))){
var inst_70662 = cljs.core.async.close_BANG_.call(null,out);
var state_70673__$1 = state_70673;
var statearr_70680_70713 = state_70673__$1;
(statearr_70680_70713[(2)] = inst_70662);

(statearr_70680_70713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (6))){
var state_70673__$1 = state_70673;
var statearr_70681_70714 = state_70673__$1;
(statearr_70681_70714[(2)] = null);

(statearr_70681_70714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (3))){
var inst_70671 = (state_70673[(2)]);
var state_70673__$1 = state_70673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70673__$1,inst_70671);
} else {
if((state_val_70674 === (12))){
var inst_70659 = (state_70673[(8)]);
var inst_70659__$1 = (state_70673[(2)]);
var inst_70660 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_70659__$1);
var state_70673__$1 = (function (){var statearr_70682 = state_70673;
(statearr_70682[(8)] = inst_70659__$1);

return statearr_70682;
})();
if(cljs.core.truth_(inst_70660)){
var statearr_70683_70715 = state_70673__$1;
(statearr_70683_70715[(1)] = (13));

} else {
var statearr_70684_70716 = state_70673__$1;
(statearr_70684_70716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (2))){
var inst_70636 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_70637 = (0);
var state_70673__$1 = (function (){var statearr_70685 = state_70673;
(statearr_70685[(9)] = inst_70636);

(statearr_70685[(7)] = inst_70637);

return statearr_70685;
})();
var statearr_70686_70717 = state_70673__$1;
(statearr_70686_70717[(2)] = null);

(statearr_70686_70717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (11))){
var inst_70637 = (state_70673[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70673,(10),Object,null,(9));
var inst_70646 = chs__$1.call(null,inst_70637);
var inst_70647 = done.call(null,inst_70637);
var inst_70648 = cljs.core.async.take_BANG_.call(null,inst_70646,inst_70647);
var state_70673__$1 = state_70673;
var statearr_70687_70718 = state_70673__$1;
(statearr_70687_70718[(2)] = inst_70648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (9))){
var inst_70637 = (state_70673[(7)]);
var inst_70650 = (state_70673[(2)]);
var inst_70651 = (inst_70637 + (1));
var inst_70637__$1 = inst_70651;
var state_70673__$1 = (function (){var statearr_70688 = state_70673;
(statearr_70688[(10)] = inst_70650);

(statearr_70688[(7)] = inst_70637__$1);

return statearr_70688;
})();
var statearr_70689_70719 = state_70673__$1;
(statearr_70689_70719[(2)] = null);

(statearr_70689_70719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (5))){
var inst_70657 = (state_70673[(2)]);
var state_70673__$1 = (function (){var statearr_70690 = state_70673;
(statearr_70690[(11)] = inst_70657);

return statearr_70690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70673__$1,(12),dchan);
} else {
if((state_val_70674 === (14))){
var inst_70659 = (state_70673[(8)]);
var inst_70664 = cljs.core.apply.call(null,f,inst_70659);
var state_70673__$1 = state_70673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70673__$1,(16),out,inst_70664);
} else {
if((state_val_70674 === (16))){
var inst_70666 = (state_70673[(2)]);
var state_70673__$1 = (function (){var statearr_70691 = state_70673;
(statearr_70691[(12)] = inst_70666);

return statearr_70691;
})();
var statearr_70692_70720 = state_70673__$1;
(statearr_70692_70720[(2)] = null);

(statearr_70692_70720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (10))){
var inst_70641 = (state_70673[(2)]);
var inst_70642 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_70673__$1 = (function (){var statearr_70693 = state_70673;
(statearr_70693[(13)] = inst_70641);

return statearr_70693;
})();
var statearr_70694_70721 = state_70673__$1;
(statearr_70694_70721[(2)] = inst_70642);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70674 === (8))){
var inst_70655 = (state_70673[(2)]);
var state_70673__$1 = state_70673;
var statearr_70695_70722 = state_70673__$1;
(statearr_70695_70722[(2)] = inst_70655);

(statearr_70695_70722[(1)] = (5));


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
});})(c__28998__auto___70707,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28886__auto__,c__28998__auto___70707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_70699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70699[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_70699[(1)] = (1));

return statearr_70699;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_70673){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_70673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e70700){if((e70700 instanceof Object)){
var ex__28890__auto__ = e70700;
var statearr_70701_70723 = state_70673;
(statearr_70701_70723[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70724 = state_70673;
state_70673 = G__70724;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_70673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_70673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___70707,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29000__auto__ = (function (){var statearr_70702 = f__28999__auto__.call(null);
(statearr_70702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___70707);

return statearr_70702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___70707,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args70726 = [];
var len__26007__auto___70784 = arguments.length;
var i__26008__auto___70785 = (0);
while(true){
if((i__26008__auto___70785 < len__26007__auto___70784)){
args70726.push((arguments[i__26008__auto___70785]));

var G__70786 = (i__26008__auto___70785 + (1));
i__26008__auto___70785 = G__70786;
continue;
} else {
}
break;
}

var G__70728 = args70726.length;
switch (G__70728) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70726.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___70788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___70788,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___70788,out){
return (function (state_70760){
var state_val_70761 = (state_70760[(1)]);
if((state_val_70761 === (7))){
var inst_70740 = (state_70760[(7)]);
var inst_70739 = (state_70760[(8)]);
var inst_70739__$1 = (state_70760[(2)]);
var inst_70740__$1 = cljs.core.nth.call(null,inst_70739__$1,(0),null);
var inst_70741 = cljs.core.nth.call(null,inst_70739__$1,(1),null);
var inst_70742 = (inst_70740__$1 == null);
var state_70760__$1 = (function (){var statearr_70762 = state_70760;
(statearr_70762[(7)] = inst_70740__$1);

(statearr_70762[(8)] = inst_70739__$1);

(statearr_70762[(9)] = inst_70741);

return statearr_70762;
})();
if(cljs.core.truth_(inst_70742)){
var statearr_70763_70789 = state_70760__$1;
(statearr_70763_70789[(1)] = (8));

} else {
var statearr_70764_70790 = state_70760__$1;
(statearr_70764_70790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (1))){
var inst_70729 = cljs.core.vec.call(null,chs);
var inst_70730 = inst_70729;
var state_70760__$1 = (function (){var statearr_70765 = state_70760;
(statearr_70765[(10)] = inst_70730);

return statearr_70765;
})();
var statearr_70766_70791 = state_70760__$1;
(statearr_70766_70791[(2)] = null);

(statearr_70766_70791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (4))){
var inst_70730 = (state_70760[(10)]);
var state_70760__$1 = state_70760;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70760__$1,(7),inst_70730);
} else {
if((state_val_70761 === (6))){
var inst_70756 = (state_70760[(2)]);
var state_70760__$1 = state_70760;
var statearr_70767_70792 = state_70760__$1;
(statearr_70767_70792[(2)] = inst_70756);

(statearr_70767_70792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (3))){
var inst_70758 = (state_70760[(2)]);
var state_70760__$1 = state_70760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70760__$1,inst_70758);
} else {
if((state_val_70761 === (2))){
var inst_70730 = (state_70760[(10)]);
var inst_70732 = cljs.core.count.call(null,inst_70730);
var inst_70733 = (inst_70732 > (0));
var state_70760__$1 = state_70760;
if(cljs.core.truth_(inst_70733)){
var statearr_70769_70793 = state_70760__$1;
(statearr_70769_70793[(1)] = (4));

} else {
var statearr_70770_70794 = state_70760__$1;
(statearr_70770_70794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (11))){
var inst_70730 = (state_70760[(10)]);
var inst_70749 = (state_70760[(2)]);
var tmp70768 = inst_70730;
var inst_70730__$1 = tmp70768;
var state_70760__$1 = (function (){var statearr_70771 = state_70760;
(statearr_70771[(11)] = inst_70749);

(statearr_70771[(10)] = inst_70730__$1);

return statearr_70771;
})();
var statearr_70772_70795 = state_70760__$1;
(statearr_70772_70795[(2)] = null);

(statearr_70772_70795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (9))){
var inst_70740 = (state_70760[(7)]);
var state_70760__$1 = state_70760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70760__$1,(11),out,inst_70740);
} else {
if((state_val_70761 === (5))){
var inst_70754 = cljs.core.async.close_BANG_.call(null,out);
var state_70760__$1 = state_70760;
var statearr_70773_70796 = state_70760__$1;
(statearr_70773_70796[(2)] = inst_70754);

(statearr_70773_70796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (10))){
var inst_70752 = (state_70760[(2)]);
var state_70760__$1 = state_70760;
var statearr_70774_70797 = state_70760__$1;
(statearr_70774_70797[(2)] = inst_70752);

(statearr_70774_70797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70761 === (8))){
var inst_70740 = (state_70760[(7)]);
var inst_70730 = (state_70760[(10)]);
var inst_70739 = (state_70760[(8)]);
var inst_70741 = (state_70760[(9)]);
var inst_70744 = (function (){var cs = inst_70730;
var vec__70735 = inst_70739;
var v = inst_70740;
var c = inst_70741;
return ((function (cs,vec__70735,v,c,inst_70740,inst_70730,inst_70739,inst_70741,state_val_70761,c__28998__auto___70788,out){
return (function (p1__70725_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__70725_SHARP_);
});
;})(cs,vec__70735,v,c,inst_70740,inst_70730,inst_70739,inst_70741,state_val_70761,c__28998__auto___70788,out))
})();
var inst_70745 = cljs.core.filterv.call(null,inst_70744,inst_70730);
var inst_70730__$1 = inst_70745;
var state_70760__$1 = (function (){var statearr_70775 = state_70760;
(statearr_70775[(10)] = inst_70730__$1);

return statearr_70775;
})();
var statearr_70776_70798 = state_70760__$1;
(statearr_70776_70798[(2)] = null);

(statearr_70776_70798[(1)] = (2));


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
});})(c__28998__auto___70788,out))
;
return ((function (switch__28886__auto__,c__28998__auto___70788,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_70780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70780[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_70780[(1)] = (1));

return statearr_70780;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_70760){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_70760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e70781){if((e70781 instanceof Object)){
var ex__28890__auto__ = e70781;
var statearr_70782_70799 = state_70760;
(statearr_70782_70799[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70800 = state_70760;
state_70760 = G__70800;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_70760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_70760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___70788,out))
})();
var state__29000__auto__ = (function (){var statearr_70783 = f__28999__auto__.call(null);
(statearr_70783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___70788);

return statearr_70783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___70788,out))
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
var args70801 = [];
var len__26007__auto___70850 = arguments.length;
var i__26008__auto___70851 = (0);
while(true){
if((i__26008__auto___70851 < len__26007__auto___70850)){
args70801.push((arguments[i__26008__auto___70851]));

var G__70852 = (i__26008__auto___70851 + (1));
i__26008__auto___70851 = G__70852;
continue;
} else {
}
break;
}

var G__70803 = args70801.length;
switch (G__70803) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70801.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___70854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___70854,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___70854,out){
return (function (state_70827){
var state_val_70828 = (state_70827[(1)]);
if((state_val_70828 === (7))){
var inst_70809 = (state_70827[(7)]);
var inst_70809__$1 = (state_70827[(2)]);
var inst_70810 = (inst_70809__$1 == null);
var inst_70811 = cljs.core.not.call(null,inst_70810);
var state_70827__$1 = (function (){var statearr_70829 = state_70827;
(statearr_70829[(7)] = inst_70809__$1);

return statearr_70829;
})();
if(inst_70811){
var statearr_70830_70855 = state_70827__$1;
(statearr_70830_70855[(1)] = (8));

} else {
var statearr_70831_70856 = state_70827__$1;
(statearr_70831_70856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (1))){
var inst_70804 = (0);
var state_70827__$1 = (function (){var statearr_70832 = state_70827;
(statearr_70832[(8)] = inst_70804);

return statearr_70832;
})();
var statearr_70833_70857 = state_70827__$1;
(statearr_70833_70857[(2)] = null);

(statearr_70833_70857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (4))){
var state_70827__$1 = state_70827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70827__$1,(7),ch);
} else {
if((state_val_70828 === (6))){
var inst_70822 = (state_70827[(2)]);
var state_70827__$1 = state_70827;
var statearr_70834_70858 = state_70827__$1;
(statearr_70834_70858[(2)] = inst_70822);

(statearr_70834_70858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (3))){
var inst_70824 = (state_70827[(2)]);
var inst_70825 = cljs.core.async.close_BANG_.call(null,out);
var state_70827__$1 = (function (){var statearr_70835 = state_70827;
(statearr_70835[(9)] = inst_70824);

return statearr_70835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70827__$1,inst_70825);
} else {
if((state_val_70828 === (2))){
var inst_70804 = (state_70827[(8)]);
var inst_70806 = (inst_70804 < n);
var state_70827__$1 = state_70827;
if(cljs.core.truth_(inst_70806)){
var statearr_70836_70859 = state_70827__$1;
(statearr_70836_70859[(1)] = (4));

} else {
var statearr_70837_70860 = state_70827__$1;
(statearr_70837_70860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (11))){
var inst_70804 = (state_70827[(8)]);
var inst_70814 = (state_70827[(2)]);
var inst_70815 = (inst_70804 + (1));
var inst_70804__$1 = inst_70815;
var state_70827__$1 = (function (){var statearr_70838 = state_70827;
(statearr_70838[(8)] = inst_70804__$1);

(statearr_70838[(10)] = inst_70814);

return statearr_70838;
})();
var statearr_70839_70861 = state_70827__$1;
(statearr_70839_70861[(2)] = null);

(statearr_70839_70861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (9))){
var state_70827__$1 = state_70827;
var statearr_70840_70862 = state_70827__$1;
(statearr_70840_70862[(2)] = null);

(statearr_70840_70862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (5))){
var state_70827__$1 = state_70827;
var statearr_70841_70863 = state_70827__$1;
(statearr_70841_70863[(2)] = null);

(statearr_70841_70863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (10))){
var inst_70819 = (state_70827[(2)]);
var state_70827__$1 = state_70827;
var statearr_70842_70864 = state_70827__$1;
(statearr_70842_70864[(2)] = inst_70819);

(statearr_70842_70864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70828 === (8))){
var inst_70809 = (state_70827[(7)]);
var state_70827__$1 = state_70827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70827__$1,(11),out,inst_70809);
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
});})(c__28998__auto___70854,out))
;
return ((function (switch__28886__auto__,c__28998__auto___70854,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_70846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70846[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_70846[(1)] = (1));

return statearr_70846;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_70827){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_70827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e70847){if((e70847 instanceof Object)){
var ex__28890__auto__ = e70847;
var statearr_70848_70865 = state_70827;
(statearr_70848_70865[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70866 = state_70827;
state_70827 = G__70866;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_70827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_70827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___70854,out))
})();
var state__29000__auto__ = (function (){var statearr_70849 = f__28999__auto__.call(null);
(statearr_70849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___70854);

return statearr_70849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___70854,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70874 = (function (f,ch,meta70875){
this.f = f;
this.ch = ch;
this.meta70875 = meta70875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70876,meta70875__$1){
var self__ = this;
var _70876__$1 = this;
return (new cljs.core.async.t_cljs$core$async70874(self__.f,self__.ch,meta70875__$1));
});

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70876){
var self__ = this;
var _70876__$1 = this;
return self__.meta70875;
});

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async70877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70877 = (function (f,ch,meta70875,_,fn1,meta70878){
this.f = f;
this.ch = ch;
this.meta70875 = meta70875;
this._ = _;
this.fn1 = fn1;
this.meta70878 = meta70878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_70879,meta70878__$1){
var self__ = this;
var _70879__$1 = this;
return (new cljs.core.async.t_cljs$core$async70877(self__.f,self__.ch,self__.meta70875,self__._,self__.fn1,meta70878__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async70877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_70879){
var self__ = this;
var _70879__$1 = this;
return self__.meta70878;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70877.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__70867_SHARP_){
return f1.call(null,(((p1__70867_SHARP_ == null))?null:self__.f.call(null,p1__70867_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async70877.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70875","meta70875",452918603,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70874","cljs.core.async/t_cljs$core$async70874",463356929,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70878","meta70878",-2057333772,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70877";

cljs.core.async.t_cljs$core$async70877.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async70877");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async70877 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70877(f__$1,ch__$1,meta70875__$1,___$2,fn1__$1,meta70878){
return (new cljs.core.async.t_cljs$core$async70877(f__$1,ch__$1,meta70875__$1,___$2,fn1__$1,meta70878));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async70877(self__.f,self__.ch,self__.meta70875,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async70874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70875","meta70875",452918603,null)], null);
});

cljs.core.async.t_cljs$core$async70874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70874";

cljs.core.async.t_cljs$core$async70874.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async70874");
});

cljs.core.async.__GT_t_cljs$core$async70874 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70874(f__$1,ch__$1,meta70875){
return (new cljs.core.async.t_cljs$core$async70874(f__$1,ch__$1,meta70875));
});

}

return (new cljs.core.async.t_cljs$core$async70874(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70883 = (function (f,ch,meta70884){
this.f = f;
this.ch = ch;
this.meta70884 = meta70884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70885,meta70884__$1){
var self__ = this;
var _70885__$1 = this;
return (new cljs.core.async.t_cljs$core$async70883(self__.f,self__.ch,meta70884__$1));
});

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70885){
var self__ = this;
var _70885__$1 = this;
return self__.meta70884;
});

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async70883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70884","meta70884",-1262082260,null)], null);
});

cljs.core.async.t_cljs$core$async70883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70883";

cljs.core.async.t_cljs$core$async70883.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async70883");
});

cljs.core.async.__GT_t_cljs$core$async70883 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70883(f__$1,ch__$1,meta70884){
return (new cljs.core.async.t_cljs$core$async70883(f__$1,ch__$1,meta70884));
});

}

return (new cljs.core.async.t_cljs$core$async70883(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async70889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70889 = (function (p,ch,meta70890){
this.p = p;
this.ch = ch;
this.meta70890 = meta70890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70891,meta70890__$1){
var self__ = this;
var _70891__$1 = this;
return (new cljs.core.async.t_cljs$core$async70889(self__.p,self__.ch,meta70890__$1));
});

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70891){
var self__ = this;
var _70891__$1 = this;
return self__.meta70890;
});

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async70889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async70889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70890","meta70890",-1892375990,null)], null);
});

cljs.core.async.t_cljs$core$async70889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70889";

cljs.core.async.t_cljs$core$async70889.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t_cljs$core$async70889");
});

cljs.core.async.__GT_t_cljs$core$async70889 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70889(p__$1,ch__$1,meta70890){
return (new cljs.core.async.t_cljs$core$async70889(p__$1,ch__$1,meta70890));
});

}

return (new cljs.core.async.t_cljs$core$async70889(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args70892 = [];
var len__26007__auto___70936 = arguments.length;
var i__26008__auto___70937 = (0);
while(true){
if((i__26008__auto___70937 < len__26007__auto___70936)){
args70892.push((arguments[i__26008__auto___70937]));

var G__70938 = (i__26008__auto___70937 + (1));
i__26008__auto___70937 = G__70938;
continue;
} else {
}
break;
}

var G__70894 = args70892.length;
switch (G__70894) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70892.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___70940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___70940,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___70940,out){
return (function (state_70915){
var state_val_70916 = (state_70915[(1)]);
if((state_val_70916 === (7))){
var inst_70911 = (state_70915[(2)]);
var state_70915__$1 = state_70915;
var statearr_70917_70941 = state_70915__$1;
(statearr_70917_70941[(2)] = inst_70911);

(statearr_70917_70941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (1))){
var state_70915__$1 = state_70915;
var statearr_70918_70942 = state_70915__$1;
(statearr_70918_70942[(2)] = null);

(statearr_70918_70942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (4))){
var inst_70897 = (state_70915[(7)]);
var inst_70897__$1 = (state_70915[(2)]);
var inst_70898 = (inst_70897__$1 == null);
var state_70915__$1 = (function (){var statearr_70919 = state_70915;
(statearr_70919[(7)] = inst_70897__$1);

return statearr_70919;
})();
if(cljs.core.truth_(inst_70898)){
var statearr_70920_70943 = state_70915__$1;
(statearr_70920_70943[(1)] = (5));

} else {
var statearr_70921_70944 = state_70915__$1;
(statearr_70921_70944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (6))){
var inst_70897 = (state_70915[(7)]);
var inst_70902 = p.call(null,inst_70897);
var state_70915__$1 = state_70915;
if(cljs.core.truth_(inst_70902)){
var statearr_70922_70945 = state_70915__$1;
(statearr_70922_70945[(1)] = (8));

} else {
var statearr_70923_70946 = state_70915__$1;
(statearr_70923_70946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (3))){
var inst_70913 = (state_70915[(2)]);
var state_70915__$1 = state_70915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70915__$1,inst_70913);
} else {
if((state_val_70916 === (2))){
var state_70915__$1 = state_70915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70915__$1,(4),ch);
} else {
if((state_val_70916 === (11))){
var inst_70905 = (state_70915[(2)]);
var state_70915__$1 = state_70915;
var statearr_70924_70947 = state_70915__$1;
(statearr_70924_70947[(2)] = inst_70905);

(statearr_70924_70947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (9))){
var state_70915__$1 = state_70915;
var statearr_70925_70948 = state_70915__$1;
(statearr_70925_70948[(2)] = null);

(statearr_70925_70948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (5))){
var inst_70900 = cljs.core.async.close_BANG_.call(null,out);
var state_70915__$1 = state_70915;
var statearr_70926_70949 = state_70915__$1;
(statearr_70926_70949[(2)] = inst_70900);

(statearr_70926_70949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (10))){
var inst_70908 = (state_70915[(2)]);
var state_70915__$1 = (function (){var statearr_70927 = state_70915;
(statearr_70927[(8)] = inst_70908);

return statearr_70927;
})();
var statearr_70928_70950 = state_70915__$1;
(statearr_70928_70950[(2)] = null);

(statearr_70928_70950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70916 === (8))){
var inst_70897 = (state_70915[(7)]);
var state_70915__$1 = state_70915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70915__$1,(11),out,inst_70897);
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
});})(c__28998__auto___70940,out))
;
return ((function (switch__28886__auto__,c__28998__auto___70940,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_70932 = [null,null,null,null,null,null,null,null,null];
(statearr_70932[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_70932[(1)] = (1));

return statearr_70932;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_70915){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_70915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e70933){if((e70933 instanceof Object)){
var ex__28890__auto__ = e70933;
var statearr_70934_70951 = state_70915;
(statearr_70934_70951[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70952 = state_70915;
state_70915 = G__70952;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_70915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_70915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___70940,out))
})();
var state__29000__auto__ = (function (){var statearr_70935 = f__28999__auto__.call(null);
(statearr_70935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___70940);

return statearr_70935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___70940,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args70953 = [];
var len__26007__auto___70956 = arguments.length;
var i__26008__auto___70957 = (0);
while(true){
if((i__26008__auto___70957 < len__26007__auto___70956)){
args70953.push((arguments[i__26008__auto___70957]));

var G__70958 = (i__26008__auto___70957 + (1));
i__26008__auto___70957 = G__70958;
continue;
} else {
}
break;
}

var G__70955 = args70953.length;
switch (G__70955) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70953.length)].join('')));

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
return (function (state_71125){
var state_val_71126 = (state_71125[(1)]);
if((state_val_71126 === (7))){
var inst_71121 = (state_71125[(2)]);
var state_71125__$1 = state_71125;
var statearr_71127_71168 = state_71125__$1;
(statearr_71127_71168[(2)] = inst_71121);

(statearr_71127_71168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (20))){
var inst_71091 = (state_71125[(7)]);
var inst_71102 = (state_71125[(2)]);
var inst_71103 = cljs.core.next.call(null,inst_71091);
var inst_71077 = inst_71103;
var inst_71078 = null;
var inst_71079 = (0);
var inst_71080 = (0);
var state_71125__$1 = (function (){var statearr_71128 = state_71125;
(statearr_71128[(8)] = inst_71080);

(statearr_71128[(9)] = inst_71102);

(statearr_71128[(10)] = inst_71079);

(statearr_71128[(11)] = inst_71077);

(statearr_71128[(12)] = inst_71078);

return statearr_71128;
})();
var statearr_71129_71169 = state_71125__$1;
(statearr_71129_71169[(2)] = null);

(statearr_71129_71169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (1))){
var state_71125__$1 = state_71125;
var statearr_71130_71170 = state_71125__$1;
(statearr_71130_71170[(2)] = null);

(statearr_71130_71170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (4))){
var inst_71066 = (state_71125[(13)]);
var inst_71066__$1 = (state_71125[(2)]);
var inst_71067 = (inst_71066__$1 == null);
var state_71125__$1 = (function (){var statearr_71131 = state_71125;
(statearr_71131[(13)] = inst_71066__$1);

return statearr_71131;
})();
if(cljs.core.truth_(inst_71067)){
var statearr_71132_71171 = state_71125__$1;
(statearr_71132_71171[(1)] = (5));

} else {
var statearr_71133_71172 = state_71125__$1;
(statearr_71133_71172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (15))){
var state_71125__$1 = state_71125;
var statearr_71137_71173 = state_71125__$1;
(statearr_71137_71173[(2)] = null);

(statearr_71137_71173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (21))){
var state_71125__$1 = state_71125;
var statearr_71138_71174 = state_71125__$1;
(statearr_71138_71174[(2)] = null);

(statearr_71138_71174[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (13))){
var inst_71080 = (state_71125[(8)]);
var inst_71079 = (state_71125[(10)]);
var inst_71077 = (state_71125[(11)]);
var inst_71078 = (state_71125[(12)]);
var inst_71087 = (state_71125[(2)]);
var inst_71088 = (inst_71080 + (1));
var tmp71134 = inst_71079;
var tmp71135 = inst_71077;
var tmp71136 = inst_71078;
var inst_71077__$1 = tmp71135;
var inst_71078__$1 = tmp71136;
var inst_71079__$1 = tmp71134;
var inst_71080__$1 = inst_71088;
var state_71125__$1 = (function (){var statearr_71139 = state_71125;
(statearr_71139[(8)] = inst_71080__$1);

(statearr_71139[(14)] = inst_71087);

(statearr_71139[(10)] = inst_71079__$1);

(statearr_71139[(11)] = inst_71077__$1);

(statearr_71139[(12)] = inst_71078__$1);

return statearr_71139;
})();
var statearr_71140_71175 = state_71125__$1;
(statearr_71140_71175[(2)] = null);

(statearr_71140_71175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (22))){
var state_71125__$1 = state_71125;
var statearr_71141_71176 = state_71125__$1;
(statearr_71141_71176[(2)] = null);

(statearr_71141_71176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (6))){
var inst_71066 = (state_71125[(13)]);
var inst_71075 = f.call(null,inst_71066);
var inst_71076 = cljs.core.seq.call(null,inst_71075);
var inst_71077 = inst_71076;
var inst_71078 = null;
var inst_71079 = (0);
var inst_71080 = (0);
var state_71125__$1 = (function (){var statearr_71142 = state_71125;
(statearr_71142[(8)] = inst_71080);

(statearr_71142[(10)] = inst_71079);

(statearr_71142[(11)] = inst_71077);

(statearr_71142[(12)] = inst_71078);

return statearr_71142;
})();
var statearr_71143_71177 = state_71125__$1;
(statearr_71143_71177[(2)] = null);

(statearr_71143_71177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (17))){
var inst_71091 = (state_71125[(7)]);
var inst_71095 = cljs.core.chunk_first.call(null,inst_71091);
var inst_71096 = cljs.core.chunk_rest.call(null,inst_71091);
var inst_71097 = cljs.core.count.call(null,inst_71095);
var inst_71077 = inst_71096;
var inst_71078 = inst_71095;
var inst_71079 = inst_71097;
var inst_71080 = (0);
var state_71125__$1 = (function (){var statearr_71144 = state_71125;
(statearr_71144[(8)] = inst_71080);

(statearr_71144[(10)] = inst_71079);

(statearr_71144[(11)] = inst_71077);

(statearr_71144[(12)] = inst_71078);

return statearr_71144;
})();
var statearr_71145_71178 = state_71125__$1;
(statearr_71145_71178[(2)] = null);

(statearr_71145_71178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (3))){
var inst_71123 = (state_71125[(2)]);
var state_71125__$1 = state_71125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71125__$1,inst_71123);
} else {
if((state_val_71126 === (12))){
var inst_71111 = (state_71125[(2)]);
var state_71125__$1 = state_71125;
var statearr_71146_71179 = state_71125__$1;
(statearr_71146_71179[(2)] = inst_71111);

(statearr_71146_71179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (2))){
var state_71125__$1 = state_71125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71125__$1,(4),in$);
} else {
if((state_val_71126 === (23))){
var inst_71119 = (state_71125[(2)]);
var state_71125__$1 = state_71125;
var statearr_71147_71180 = state_71125__$1;
(statearr_71147_71180[(2)] = inst_71119);

(statearr_71147_71180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (19))){
var inst_71106 = (state_71125[(2)]);
var state_71125__$1 = state_71125;
var statearr_71148_71181 = state_71125__$1;
(statearr_71148_71181[(2)] = inst_71106);

(statearr_71148_71181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (11))){
var inst_71091 = (state_71125[(7)]);
var inst_71077 = (state_71125[(11)]);
var inst_71091__$1 = cljs.core.seq.call(null,inst_71077);
var state_71125__$1 = (function (){var statearr_71149 = state_71125;
(statearr_71149[(7)] = inst_71091__$1);

return statearr_71149;
})();
if(inst_71091__$1){
var statearr_71150_71182 = state_71125__$1;
(statearr_71150_71182[(1)] = (14));

} else {
var statearr_71151_71183 = state_71125__$1;
(statearr_71151_71183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (9))){
var inst_71113 = (state_71125[(2)]);
var inst_71114 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_71125__$1 = (function (){var statearr_71152 = state_71125;
(statearr_71152[(15)] = inst_71113);

return statearr_71152;
})();
if(cljs.core.truth_(inst_71114)){
var statearr_71153_71184 = state_71125__$1;
(statearr_71153_71184[(1)] = (21));

} else {
var statearr_71154_71185 = state_71125__$1;
(statearr_71154_71185[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (5))){
var inst_71069 = cljs.core.async.close_BANG_.call(null,out);
var state_71125__$1 = state_71125;
var statearr_71155_71186 = state_71125__$1;
(statearr_71155_71186[(2)] = inst_71069);

(statearr_71155_71186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (14))){
var inst_71091 = (state_71125[(7)]);
var inst_71093 = cljs.core.chunked_seq_QMARK_.call(null,inst_71091);
var state_71125__$1 = state_71125;
if(inst_71093){
var statearr_71156_71187 = state_71125__$1;
(statearr_71156_71187[(1)] = (17));

} else {
var statearr_71157_71188 = state_71125__$1;
(statearr_71157_71188[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (16))){
var inst_71109 = (state_71125[(2)]);
var state_71125__$1 = state_71125;
var statearr_71158_71189 = state_71125__$1;
(statearr_71158_71189[(2)] = inst_71109);

(statearr_71158_71189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71126 === (10))){
var inst_71080 = (state_71125[(8)]);
var inst_71078 = (state_71125[(12)]);
var inst_71085 = cljs.core._nth.call(null,inst_71078,inst_71080);
var state_71125__$1 = state_71125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71125__$1,(13),out,inst_71085);
} else {
if((state_val_71126 === (18))){
var inst_71091 = (state_71125[(7)]);
var inst_71100 = cljs.core.first.call(null,inst_71091);
var state_71125__$1 = state_71125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71125__$1,(20),out,inst_71100);
} else {
if((state_val_71126 === (8))){
var inst_71080 = (state_71125[(8)]);
var inst_71079 = (state_71125[(10)]);
var inst_71082 = (inst_71080 < inst_71079);
var inst_71083 = inst_71082;
var state_71125__$1 = state_71125;
if(cljs.core.truth_(inst_71083)){
var statearr_71159_71190 = state_71125__$1;
(statearr_71159_71190[(1)] = (10));

} else {
var statearr_71160_71191 = state_71125__$1;
(statearr_71160_71191[(1)] = (11));

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
var statearr_71164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71164[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__);

(statearr_71164[(1)] = (1));

return statearr_71164;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1 = (function (state_71125){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_71125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e71165){if((e71165 instanceof Object)){
var ex__28890__auto__ = e71165;
var statearr_71166_71192 = state_71125;
(statearr_71166_71192[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71193 = state_71125;
state_71125 = G__71193;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__ = function(state_71125){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1.call(this,state_71125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28887__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_71167 = f__28999__auto__.call(null);
(statearr_71167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_71167;
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
var args71194 = [];
var len__26007__auto___71197 = arguments.length;
var i__26008__auto___71198 = (0);
while(true){
if((i__26008__auto___71198 < len__26007__auto___71197)){
args71194.push((arguments[i__26008__auto___71198]));

var G__71199 = (i__26008__auto___71198 + (1));
i__26008__auto___71198 = G__71199;
continue;
} else {
}
break;
}

var G__71196 = args71194.length;
switch (G__71196) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71194.length)].join('')));

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
var args71201 = [];
var len__26007__auto___71204 = arguments.length;
var i__26008__auto___71205 = (0);
while(true){
if((i__26008__auto___71205 < len__26007__auto___71204)){
args71201.push((arguments[i__26008__auto___71205]));

var G__71206 = (i__26008__auto___71205 + (1));
i__26008__auto___71205 = G__71206;
continue;
} else {
}
break;
}

var G__71203 = args71201.length;
switch (G__71203) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71201.length)].join('')));

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
var args71208 = [];
var len__26007__auto___71259 = arguments.length;
var i__26008__auto___71260 = (0);
while(true){
if((i__26008__auto___71260 < len__26007__auto___71259)){
args71208.push((arguments[i__26008__auto___71260]));

var G__71261 = (i__26008__auto___71260 + (1));
i__26008__auto___71260 = G__71261;
continue;
} else {
}
break;
}

var G__71210 = args71208.length;
switch (G__71210) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71208.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___71263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___71263,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___71263,out){
return (function (state_71234){
var state_val_71235 = (state_71234[(1)]);
if((state_val_71235 === (7))){
var inst_71229 = (state_71234[(2)]);
var state_71234__$1 = state_71234;
var statearr_71236_71264 = state_71234__$1;
(statearr_71236_71264[(2)] = inst_71229);

(statearr_71236_71264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (1))){
var inst_71211 = null;
var state_71234__$1 = (function (){var statearr_71237 = state_71234;
(statearr_71237[(7)] = inst_71211);

return statearr_71237;
})();
var statearr_71238_71265 = state_71234__$1;
(statearr_71238_71265[(2)] = null);

(statearr_71238_71265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (4))){
var inst_71214 = (state_71234[(8)]);
var inst_71214__$1 = (state_71234[(2)]);
var inst_71215 = (inst_71214__$1 == null);
var inst_71216 = cljs.core.not.call(null,inst_71215);
var state_71234__$1 = (function (){var statearr_71239 = state_71234;
(statearr_71239[(8)] = inst_71214__$1);

return statearr_71239;
})();
if(inst_71216){
var statearr_71240_71266 = state_71234__$1;
(statearr_71240_71266[(1)] = (5));

} else {
var statearr_71241_71267 = state_71234__$1;
(statearr_71241_71267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (6))){
var state_71234__$1 = state_71234;
var statearr_71242_71268 = state_71234__$1;
(statearr_71242_71268[(2)] = null);

(statearr_71242_71268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (3))){
var inst_71231 = (state_71234[(2)]);
var inst_71232 = cljs.core.async.close_BANG_.call(null,out);
var state_71234__$1 = (function (){var statearr_71243 = state_71234;
(statearr_71243[(9)] = inst_71231);

return statearr_71243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71234__$1,inst_71232);
} else {
if((state_val_71235 === (2))){
var state_71234__$1 = state_71234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71234__$1,(4),ch);
} else {
if((state_val_71235 === (11))){
var inst_71214 = (state_71234[(8)]);
var inst_71223 = (state_71234[(2)]);
var inst_71211 = inst_71214;
var state_71234__$1 = (function (){var statearr_71244 = state_71234;
(statearr_71244[(10)] = inst_71223);

(statearr_71244[(7)] = inst_71211);

return statearr_71244;
})();
var statearr_71245_71269 = state_71234__$1;
(statearr_71245_71269[(2)] = null);

(statearr_71245_71269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (9))){
var inst_71214 = (state_71234[(8)]);
var state_71234__$1 = state_71234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71234__$1,(11),out,inst_71214);
} else {
if((state_val_71235 === (5))){
var inst_71214 = (state_71234[(8)]);
var inst_71211 = (state_71234[(7)]);
var inst_71218 = cljs.core._EQ_.call(null,inst_71214,inst_71211);
var state_71234__$1 = state_71234;
if(inst_71218){
var statearr_71247_71270 = state_71234__$1;
(statearr_71247_71270[(1)] = (8));

} else {
var statearr_71248_71271 = state_71234__$1;
(statearr_71248_71271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (10))){
var inst_71226 = (state_71234[(2)]);
var state_71234__$1 = state_71234;
var statearr_71249_71272 = state_71234__$1;
(statearr_71249_71272[(2)] = inst_71226);

(statearr_71249_71272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71235 === (8))){
var inst_71211 = (state_71234[(7)]);
var tmp71246 = inst_71211;
var inst_71211__$1 = tmp71246;
var state_71234__$1 = (function (){var statearr_71250 = state_71234;
(statearr_71250[(7)] = inst_71211__$1);

return statearr_71250;
})();
var statearr_71251_71273 = state_71234__$1;
(statearr_71251_71273[(2)] = null);

(statearr_71251_71273[(1)] = (2));


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
});})(c__28998__auto___71263,out))
;
return ((function (switch__28886__auto__,c__28998__auto___71263,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_71255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71255[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_71255[(1)] = (1));

return statearr_71255;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_71234){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_71234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e71256){if((e71256 instanceof Object)){
var ex__28890__auto__ = e71256;
var statearr_71257_71274 = state_71234;
(statearr_71257_71274[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71275 = state_71234;
state_71234 = G__71275;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_71234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_71234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___71263,out))
})();
var state__29000__auto__ = (function (){var statearr_71258 = f__28999__auto__.call(null);
(statearr_71258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___71263);

return statearr_71258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___71263,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args71276 = [];
var len__26007__auto___71346 = arguments.length;
var i__26008__auto___71347 = (0);
while(true){
if((i__26008__auto___71347 < len__26007__auto___71346)){
args71276.push((arguments[i__26008__auto___71347]));

var G__71348 = (i__26008__auto___71347 + (1));
i__26008__auto___71347 = G__71348;
continue;
} else {
}
break;
}

var G__71278 = args71276.length;
switch (G__71278) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71276.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___71350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___71350,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___71350,out){
return (function (state_71316){
var state_val_71317 = (state_71316[(1)]);
if((state_val_71317 === (7))){
var inst_71312 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
var statearr_71318_71351 = state_71316__$1;
(statearr_71318_71351[(2)] = inst_71312);

(statearr_71318_71351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (1))){
var inst_71279 = (new Array(n));
var inst_71280 = inst_71279;
var inst_71281 = (0);
var state_71316__$1 = (function (){var statearr_71319 = state_71316;
(statearr_71319[(7)] = inst_71281);

(statearr_71319[(8)] = inst_71280);

return statearr_71319;
})();
var statearr_71320_71352 = state_71316__$1;
(statearr_71320_71352[(2)] = null);

(statearr_71320_71352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (4))){
var inst_71284 = (state_71316[(9)]);
var inst_71284__$1 = (state_71316[(2)]);
var inst_71285 = (inst_71284__$1 == null);
var inst_71286 = cljs.core.not.call(null,inst_71285);
var state_71316__$1 = (function (){var statearr_71321 = state_71316;
(statearr_71321[(9)] = inst_71284__$1);

return statearr_71321;
})();
if(inst_71286){
var statearr_71322_71353 = state_71316__$1;
(statearr_71322_71353[(1)] = (5));

} else {
var statearr_71323_71354 = state_71316__$1;
(statearr_71323_71354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (15))){
var inst_71306 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
var statearr_71324_71355 = state_71316__$1;
(statearr_71324_71355[(2)] = inst_71306);

(statearr_71324_71355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (13))){
var state_71316__$1 = state_71316;
var statearr_71325_71356 = state_71316__$1;
(statearr_71325_71356[(2)] = null);

(statearr_71325_71356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (6))){
var inst_71281 = (state_71316[(7)]);
var inst_71302 = (inst_71281 > (0));
var state_71316__$1 = state_71316;
if(cljs.core.truth_(inst_71302)){
var statearr_71326_71357 = state_71316__$1;
(statearr_71326_71357[(1)] = (12));

} else {
var statearr_71327_71358 = state_71316__$1;
(statearr_71327_71358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (3))){
var inst_71314 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71316__$1,inst_71314);
} else {
if((state_val_71317 === (12))){
var inst_71280 = (state_71316[(8)]);
var inst_71304 = cljs.core.vec.call(null,inst_71280);
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71316__$1,(15),out,inst_71304);
} else {
if((state_val_71317 === (2))){
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71316__$1,(4),ch);
} else {
if((state_val_71317 === (11))){
var inst_71296 = (state_71316[(2)]);
var inst_71297 = (new Array(n));
var inst_71280 = inst_71297;
var inst_71281 = (0);
var state_71316__$1 = (function (){var statearr_71328 = state_71316;
(statearr_71328[(7)] = inst_71281);

(statearr_71328[(10)] = inst_71296);

(statearr_71328[(8)] = inst_71280);

return statearr_71328;
})();
var statearr_71329_71359 = state_71316__$1;
(statearr_71329_71359[(2)] = null);

(statearr_71329_71359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (9))){
var inst_71280 = (state_71316[(8)]);
var inst_71294 = cljs.core.vec.call(null,inst_71280);
var state_71316__$1 = state_71316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71316__$1,(11),out,inst_71294);
} else {
if((state_val_71317 === (5))){
var inst_71281 = (state_71316[(7)]);
var inst_71284 = (state_71316[(9)]);
var inst_71289 = (state_71316[(11)]);
var inst_71280 = (state_71316[(8)]);
var inst_71288 = (inst_71280[inst_71281] = inst_71284);
var inst_71289__$1 = (inst_71281 + (1));
var inst_71290 = (inst_71289__$1 < n);
var state_71316__$1 = (function (){var statearr_71330 = state_71316;
(statearr_71330[(12)] = inst_71288);

(statearr_71330[(11)] = inst_71289__$1);

return statearr_71330;
})();
if(cljs.core.truth_(inst_71290)){
var statearr_71331_71360 = state_71316__$1;
(statearr_71331_71360[(1)] = (8));

} else {
var statearr_71332_71361 = state_71316__$1;
(statearr_71332_71361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (14))){
var inst_71309 = (state_71316[(2)]);
var inst_71310 = cljs.core.async.close_BANG_.call(null,out);
var state_71316__$1 = (function (){var statearr_71334 = state_71316;
(statearr_71334[(13)] = inst_71309);

return statearr_71334;
})();
var statearr_71335_71362 = state_71316__$1;
(statearr_71335_71362[(2)] = inst_71310);

(statearr_71335_71362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (10))){
var inst_71300 = (state_71316[(2)]);
var state_71316__$1 = state_71316;
var statearr_71336_71363 = state_71316__$1;
(statearr_71336_71363[(2)] = inst_71300);

(statearr_71336_71363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71317 === (8))){
var inst_71289 = (state_71316[(11)]);
var inst_71280 = (state_71316[(8)]);
var tmp71333 = inst_71280;
var inst_71280__$1 = tmp71333;
var inst_71281 = inst_71289;
var state_71316__$1 = (function (){var statearr_71337 = state_71316;
(statearr_71337[(7)] = inst_71281);

(statearr_71337[(8)] = inst_71280__$1);

return statearr_71337;
})();
var statearr_71338_71364 = state_71316__$1;
(statearr_71338_71364[(2)] = null);

(statearr_71338_71364[(1)] = (2));


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
});})(c__28998__auto___71350,out))
;
return ((function (switch__28886__auto__,c__28998__auto___71350,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_71342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71342[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_71342[(1)] = (1));

return statearr_71342;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_71316){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_71316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e71343){if((e71343 instanceof Object)){
var ex__28890__auto__ = e71343;
var statearr_71344_71365 = state_71316;
(statearr_71344_71365[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71366 = state_71316;
state_71316 = G__71366;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_71316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_71316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___71350,out))
})();
var state__29000__auto__ = (function (){var statearr_71345 = f__28999__auto__.call(null);
(statearr_71345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___71350);

return statearr_71345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___71350,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args71367 = [];
var len__26007__auto___71441 = arguments.length;
var i__26008__auto___71442 = (0);
while(true){
if((i__26008__auto___71442 < len__26007__auto___71441)){
args71367.push((arguments[i__26008__auto___71442]));

var G__71443 = (i__26008__auto___71442 + (1));
i__26008__auto___71442 = G__71443;
continue;
} else {
}
break;
}

var G__71369 = args71367.length;
switch (G__71369) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71367.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28998__auto___71445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___71445,out){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___71445,out){
return (function (state_71411){
var state_val_71412 = (state_71411[(1)]);
if((state_val_71412 === (7))){
var inst_71407 = (state_71411[(2)]);
var state_71411__$1 = state_71411;
var statearr_71413_71446 = state_71411__$1;
(statearr_71413_71446[(2)] = inst_71407);

(statearr_71413_71446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (1))){
var inst_71370 = [];
var inst_71371 = inst_71370;
var inst_71372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71411__$1 = (function (){var statearr_71414 = state_71411;
(statearr_71414[(7)] = inst_71371);

(statearr_71414[(8)] = inst_71372);

return statearr_71414;
})();
var statearr_71415_71447 = state_71411__$1;
(statearr_71415_71447[(2)] = null);

(statearr_71415_71447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (4))){
var inst_71375 = (state_71411[(9)]);
var inst_71375__$1 = (state_71411[(2)]);
var inst_71376 = (inst_71375__$1 == null);
var inst_71377 = cljs.core.not.call(null,inst_71376);
var state_71411__$1 = (function (){var statearr_71416 = state_71411;
(statearr_71416[(9)] = inst_71375__$1);

return statearr_71416;
})();
if(inst_71377){
var statearr_71417_71448 = state_71411__$1;
(statearr_71417_71448[(1)] = (5));

} else {
var statearr_71418_71449 = state_71411__$1;
(statearr_71418_71449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (15))){
var inst_71401 = (state_71411[(2)]);
var state_71411__$1 = state_71411;
var statearr_71419_71450 = state_71411__$1;
(statearr_71419_71450[(2)] = inst_71401);

(statearr_71419_71450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (13))){
var state_71411__$1 = state_71411;
var statearr_71420_71451 = state_71411__$1;
(statearr_71420_71451[(2)] = null);

(statearr_71420_71451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (6))){
var inst_71371 = (state_71411[(7)]);
var inst_71396 = inst_71371.length;
var inst_71397 = (inst_71396 > (0));
var state_71411__$1 = state_71411;
if(cljs.core.truth_(inst_71397)){
var statearr_71421_71452 = state_71411__$1;
(statearr_71421_71452[(1)] = (12));

} else {
var statearr_71422_71453 = state_71411__$1;
(statearr_71422_71453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (3))){
var inst_71409 = (state_71411[(2)]);
var state_71411__$1 = state_71411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71411__$1,inst_71409);
} else {
if((state_val_71412 === (12))){
var inst_71371 = (state_71411[(7)]);
var inst_71399 = cljs.core.vec.call(null,inst_71371);
var state_71411__$1 = state_71411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71411__$1,(15),out,inst_71399);
} else {
if((state_val_71412 === (2))){
var state_71411__$1 = state_71411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71411__$1,(4),ch);
} else {
if((state_val_71412 === (11))){
var inst_71379 = (state_71411[(10)]);
var inst_71375 = (state_71411[(9)]);
var inst_71389 = (state_71411[(2)]);
var inst_71390 = [];
var inst_71391 = inst_71390.push(inst_71375);
var inst_71371 = inst_71390;
var inst_71372 = inst_71379;
var state_71411__$1 = (function (){var statearr_71423 = state_71411;
(statearr_71423[(11)] = inst_71389);

(statearr_71423[(12)] = inst_71391);

(statearr_71423[(7)] = inst_71371);

(statearr_71423[(8)] = inst_71372);

return statearr_71423;
})();
var statearr_71424_71454 = state_71411__$1;
(statearr_71424_71454[(2)] = null);

(statearr_71424_71454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (9))){
var inst_71371 = (state_71411[(7)]);
var inst_71387 = cljs.core.vec.call(null,inst_71371);
var state_71411__$1 = state_71411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71411__$1,(11),out,inst_71387);
} else {
if((state_val_71412 === (5))){
var inst_71379 = (state_71411[(10)]);
var inst_71372 = (state_71411[(8)]);
var inst_71375 = (state_71411[(9)]);
var inst_71379__$1 = f.call(null,inst_71375);
var inst_71380 = cljs.core._EQ_.call(null,inst_71379__$1,inst_71372);
var inst_71381 = cljs.core.keyword_identical_QMARK_.call(null,inst_71372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71382 = (inst_71380) || (inst_71381);
var state_71411__$1 = (function (){var statearr_71425 = state_71411;
(statearr_71425[(10)] = inst_71379__$1);

return statearr_71425;
})();
if(cljs.core.truth_(inst_71382)){
var statearr_71426_71455 = state_71411__$1;
(statearr_71426_71455[(1)] = (8));

} else {
var statearr_71427_71456 = state_71411__$1;
(statearr_71427_71456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (14))){
var inst_71404 = (state_71411[(2)]);
var inst_71405 = cljs.core.async.close_BANG_.call(null,out);
var state_71411__$1 = (function (){var statearr_71429 = state_71411;
(statearr_71429[(13)] = inst_71404);

return statearr_71429;
})();
var statearr_71430_71457 = state_71411__$1;
(statearr_71430_71457[(2)] = inst_71405);

(statearr_71430_71457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (10))){
var inst_71394 = (state_71411[(2)]);
var state_71411__$1 = state_71411;
var statearr_71431_71458 = state_71411__$1;
(statearr_71431_71458[(2)] = inst_71394);

(statearr_71431_71458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71412 === (8))){
var inst_71371 = (state_71411[(7)]);
var inst_71379 = (state_71411[(10)]);
var inst_71375 = (state_71411[(9)]);
var inst_71384 = inst_71371.push(inst_71375);
var tmp71428 = inst_71371;
var inst_71371__$1 = tmp71428;
var inst_71372 = inst_71379;
var state_71411__$1 = (function (){var statearr_71432 = state_71411;
(statearr_71432[(7)] = inst_71371__$1);

(statearr_71432[(8)] = inst_71372);

(statearr_71432[(14)] = inst_71384);

return statearr_71432;
})();
var statearr_71433_71459 = state_71411__$1;
(statearr_71433_71459[(2)] = null);

(statearr_71433_71459[(1)] = (2));


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
});})(c__28998__auto___71445,out))
;
return ((function (switch__28886__auto__,c__28998__auto___71445,out){
return (function() {
var cljs$core$async$state_machine__28887__auto__ = null;
var cljs$core$async$state_machine__28887__auto____0 = (function (){
var statearr_71437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71437[(0)] = cljs$core$async$state_machine__28887__auto__);

(statearr_71437[(1)] = (1));

return statearr_71437;
});
var cljs$core$async$state_machine__28887__auto____1 = (function (state_71411){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_71411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e71438){if((e71438 instanceof Object)){
var ex__28890__auto__ = e71438;
var statearr_71439_71460 = state_71411;
(statearr_71439_71460[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71461 = state_71411;
state_71411 = G__71461;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
cljs$core$async$state_machine__28887__auto__ = function(state_71411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28887__auto____1.call(this,state_71411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28887__auto____0;
cljs$core$async$state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28887__auto____1;
return cljs$core$async$state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___71445,out))
})();
var state__29000__auto__ = (function (){var statearr_71440 = f__28999__auto__.call(null);
(statearr_71440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___71445);

return statearr_71440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___71445,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479784477224