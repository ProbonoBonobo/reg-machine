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
var args45179 = [];
var len__25826__auto___45185 = arguments.length;
var i__25827__auto___45186 = (0);
while(true){
if((i__25827__auto___45186 < len__25826__auto___45185)){
args45179.push((arguments[i__25827__auto___45186]));

var G__45187 = (i__25827__auto___45186 + (1));
i__25827__auto___45186 = G__45187;
continue;
} else {
}
break;
}

var G__45181 = args45179.length;
switch (G__45181) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45179.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45182 = (function (f,blockable,meta45183){
this.f = f;
this.blockable = blockable;
this.meta45183 = meta45183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45184,meta45183__$1){
var self__ = this;
var _45184__$1 = this;
return (new cljs.core.async.t_cljs$core$async45182(self__.f,self__.blockable,meta45183__$1));
});

cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45184){
var self__ = this;
var _45184__$1 = this;
return self__.meta45183;
});

cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45183","meta45183",-1662055727,null)], null);
});

cljs.core.async.t_cljs$core$async45182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45182";

cljs.core.async.t_cljs$core$async45182.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async45182");
});

cljs.core.async.__GT_t_cljs$core$async45182 = (function cljs$core$async$__GT_t_cljs$core$async45182(f__$1,blockable__$1,meta45183){
return (new cljs.core.async.t_cljs$core$async45182(f__$1,blockable__$1,meta45183));
});

}

return (new cljs.core.async.t_cljs$core$async45182(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args45191 = [];
var len__25826__auto___45194 = arguments.length;
var i__25827__auto___45195 = (0);
while(true){
if((i__25827__auto___45195 < len__25826__auto___45194)){
args45191.push((arguments[i__25827__auto___45195]));

var G__45196 = (i__25827__auto___45195 + (1));
i__25827__auto___45195 = G__45196;
continue;
} else {
}
break;
}

var G__45193 = args45191.length;
switch (G__45193) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45191.length)].join('')));

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
var args45198 = [];
var len__25826__auto___45201 = arguments.length;
var i__25827__auto___45202 = (0);
while(true){
if((i__25827__auto___45202 < len__25826__auto___45201)){
args45198.push((arguments[i__25827__auto___45202]));

var G__45203 = (i__25827__auto___45202 + (1));
i__25827__auto___45202 = G__45203;
continue;
} else {
}
break;
}

var G__45200 = args45198.length;
switch (G__45200) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45198.length)].join('')));

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
var args45205 = [];
var len__25826__auto___45208 = arguments.length;
var i__25827__auto___45209 = (0);
while(true){
if((i__25827__auto___45209 < len__25826__auto___45208)){
args45205.push((arguments[i__25827__auto___45209]));

var G__45210 = (i__25827__auto___45209 + (1));
i__25827__auto___45209 = G__45210;
continue;
} else {
}
break;
}

var G__45207 = args45205.length;
switch (G__45207) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45205.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45212 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45212);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45212,ret){
return (function (){
return fn1.call(null,val_45212);
});})(val_45212,ret))
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
var args45213 = [];
var len__25826__auto___45216 = arguments.length;
var i__25827__auto___45217 = (0);
while(true){
if((i__25827__auto___45217 < len__25826__auto___45216)){
args45213.push((arguments[i__25827__auto___45217]));

var G__45218 = (i__25827__auto___45217 + (1));
i__25827__auto___45217 = G__45218;
continue;
} else {
}
break;
}

var G__45215 = args45213.length;
switch (G__45215) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45213.length)].join('')));

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
var n__25666__auto___45220 = n;
var x_45221 = (0);
while(true){
if((x_45221 < n__25666__auto___45220)){
(a[x_45221] = (0));

var G__45222 = (x_45221 + (1));
x_45221 = G__45222;
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

var G__45223 = (i + (1));
i = G__45223;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45227 = (function (alt_flag,flag,meta45228){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta45228 = meta45228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45229,meta45228__$1){
var self__ = this;
var _45229__$1 = this;
return (new cljs.core.async.t_cljs$core$async45227(self__.alt_flag,self__.flag,meta45228__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45229){
var self__ = this;
var _45229__$1 = this;
return self__.meta45228;
});})(flag))
;

cljs.core.async.t_cljs$core$async45227.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45227.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45228","meta45228",-1259681023,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45227";

cljs.core.async.t_cljs$core$async45227.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async45227");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45227 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45227(alt_flag__$1,flag__$1,meta45228){
return (new cljs.core.async.t_cljs$core$async45227(alt_flag__$1,flag__$1,meta45228));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45227(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45233 = (function (alt_handler,flag,cb,meta45234){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta45234 = meta45234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45235,meta45234__$1){
var self__ = this;
var _45235__$1 = this;
return (new cljs.core.async.t_cljs$core$async45233(self__.alt_handler,self__.flag,self__.cb,meta45234__$1));
});

cljs.core.async.t_cljs$core$async45233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45235){
var self__ = this;
var _45235__$1 = this;
return self__.meta45234;
});

cljs.core.async.t_cljs$core$async45233.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45234","meta45234",80300919,null)], null);
});

cljs.core.async.t_cljs$core$async45233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45233";

cljs.core.async.t_cljs$core$async45233.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async45233");
});

cljs.core.async.__GT_t_cljs$core$async45233 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45233(alt_handler__$1,flag__$1,cb__$1,meta45234){
return (new cljs.core.async.t_cljs$core$async45233(alt_handler__$1,flag__$1,cb__$1,meta45234));
});

}

return (new cljs.core.async.t_cljs$core$async45233(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45236_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45236_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45237_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45237_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24751__auto__ = wport;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45238 = (i + (1));
i = G__45238;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24751__auto__ = ret;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24739__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24739__auto__;
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
var args__25833__auto__ = [];
var len__25826__auto___45244 = arguments.length;
var i__25827__auto___45245 = (0);
while(true){
if((i__25827__auto___45245 < len__25826__auto___45244)){
args__25833__auto__.push((arguments[i__25827__auto___45245]));

var G__45246 = (i__25827__auto___45245 + (1));
i__25827__auto___45245 = G__45246;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45241){
var map__45242 = p__45241;
var map__45242__$1 = ((((!((map__45242 == null)))?((((map__45242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45242):map__45242);
var opts = map__45242__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45239){
var G__45240 = cljs.core.first.call(null,seq45239);
var seq45239__$1 = cljs.core.next.call(null,seq45239);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45240,seq45239__$1);
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
var args45247 = [];
var len__25826__auto___45297 = arguments.length;
var i__25827__auto___45298 = (0);
while(true){
if((i__25827__auto___45298 < len__25826__auto___45297)){
args45247.push((arguments[i__25827__auto___45298]));

var G__45299 = (i__25827__auto___45298 + (1));
i__25827__auto___45298 = G__45299;
continue;
} else {
}
break;
}

var G__45249 = args45247.length;
switch (G__45249) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45247.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27930__auto___45301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___45301){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___45301){
return (function (state_45273){
var state_val_45274 = (state_45273[(1)]);
if((state_val_45274 === (7))){
var inst_45269 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45275_45302 = state_45273__$1;
(statearr_45275_45302[(2)] = inst_45269);

(statearr_45275_45302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (1))){
var state_45273__$1 = state_45273;
var statearr_45276_45303 = state_45273__$1;
(statearr_45276_45303[(2)] = null);

(statearr_45276_45303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (4))){
var inst_45252 = (state_45273[(7)]);
var inst_45252__$1 = (state_45273[(2)]);
var inst_45253 = (inst_45252__$1 == null);
var state_45273__$1 = (function (){var statearr_45277 = state_45273;
(statearr_45277[(7)] = inst_45252__$1);

return statearr_45277;
})();
if(cljs.core.truth_(inst_45253)){
var statearr_45278_45304 = state_45273__$1;
(statearr_45278_45304[(1)] = (5));

} else {
var statearr_45279_45305 = state_45273__$1;
(statearr_45279_45305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (13))){
var state_45273__$1 = state_45273;
var statearr_45280_45306 = state_45273__$1;
(statearr_45280_45306[(2)] = null);

(statearr_45280_45306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (6))){
var inst_45252 = (state_45273[(7)]);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45273__$1,(11),to,inst_45252);
} else {
if((state_val_45274 === (3))){
var inst_45271 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45273__$1,inst_45271);
} else {
if((state_val_45274 === (12))){
var state_45273__$1 = state_45273;
var statearr_45281_45307 = state_45273__$1;
(statearr_45281_45307[(2)] = null);

(statearr_45281_45307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (2))){
var state_45273__$1 = state_45273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45273__$1,(4),from);
} else {
if((state_val_45274 === (11))){
var inst_45262 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
if(cljs.core.truth_(inst_45262)){
var statearr_45282_45308 = state_45273__$1;
(statearr_45282_45308[(1)] = (12));

} else {
var statearr_45283_45309 = state_45273__$1;
(statearr_45283_45309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (9))){
var state_45273__$1 = state_45273;
var statearr_45284_45310 = state_45273__$1;
(statearr_45284_45310[(2)] = null);

(statearr_45284_45310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (5))){
var state_45273__$1 = state_45273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45285_45311 = state_45273__$1;
(statearr_45285_45311[(1)] = (8));

} else {
var statearr_45286_45312 = state_45273__$1;
(statearr_45286_45312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (14))){
var inst_45267 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45287_45313 = state_45273__$1;
(statearr_45287_45313[(2)] = inst_45267);

(statearr_45287_45313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (10))){
var inst_45259 = (state_45273[(2)]);
var state_45273__$1 = state_45273;
var statearr_45288_45314 = state_45273__$1;
(statearr_45288_45314[(2)] = inst_45259);

(statearr_45288_45314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45274 === (8))){
var inst_45256 = cljs.core.async.close_BANG_.call(null,to);
var state_45273__$1 = state_45273;
var statearr_45289_45315 = state_45273__$1;
(statearr_45289_45315[(2)] = inst_45256);

(statearr_45289_45315[(1)] = (10));


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
});})(c__27930__auto___45301))
;
return ((function (switch__27865__auto__,c__27930__auto___45301){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_45293 = [null,null,null,null,null,null,null,null];
(statearr_45293[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_45293[(1)] = (1));

return statearr_45293;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_45273){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45294){if((e45294 instanceof Object)){
var ex__27869__auto__ = e45294;
var statearr_45295_45316 = state_45273;
(statearr_45295_45316[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45317 = state_45273;
state_45273 = G__45317;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_45273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_45273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___45301))
})();
var state__27932__auto__ = (function (){var statearr_45296 = f__27931__auto__.call(null);
(statearr_45296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___45301);

return statearr_45296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___45301))
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
return (function (p__45505){
var vec__45506 = p__45505;
var v = cljs.core.nth.call(null,vec__45506,(0),null);
var p = cljs.core.nth.call(null,vec__45506,(1),null);
var job = vec__45506;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27930__auto___45692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___45692,res,vec__45506,v,p,job,jobs,results){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___45692,res,vec__45506,v,p,job,jobs,results){
return (function (state_45513){
var state_val_45514 = (state_45513[(1)]);
if((state_val_45514 === (1))){
var state_45513__$1 = state_45513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45513__$1,(2),res,v);
} else {
if((state_val_45514 === (2))){
var inst_45510 = (state_45513[(2)]);
var inst_45511 = cljs.core.async.close_BANG_.call(null,res);
var state_45513__$1 = (function (){var statearr_45515 = state_45513;
(statearr_45515[(7)] = inst_45510);

return statearr_45515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45513__$1,inst_45511);
} else {
return null;
}
}
});})(c__27930__auto___45692,res,vec__45506,v,p,job,jobs,results))
;
return ((function (switch__27865__auto__,c__27930__auto___45692,res,vec__45506,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_45519 = [null,null,null,null,null,null,null,null];
(statearr_45519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_45519[(1)] = (1));

return statearr_45519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_45513){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45520){if((e45520 instanceof Object)){
var ex__27869__auto__ = e45520;
var statearr_45521_45693 = state_45513;
(statearr_45521_45693[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45694 = state_45513;
state_45513 = G__45694;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_45513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_45513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___45692,res,vec__45506,v,p,job,jobs,results))
})();
var state__27932__auto__ = (function (){var statearr_45522 = f__27931__auto__.call(null);
(statearr_45522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___45692);

return statearr_45522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___45692,res,vec__45506,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45523){
var vec__45524 = p__45523;
var v = cljs.core.nth.call(null,vec__45524,(0),null);
var p = cljs.core.nth.call(null,vec__45524,(1),null);
var job = vec__45524;
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
var n__25666__auto___45695 = n;
var __45696 = (0);
while(true){
if((__45696 < n__25666__auto___45695)){
var G__45527_45697 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45527_45697) {
case "compute":
var c__27930__auto___45699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45696,c__27930__auto___45699,G__45527_45697,n__25666__auto___45695,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (__45696,c__27930__auto___45699,G__45527_45697,n__25666__auto___45695,jobs,results,process,async){
return (function (state_45540){
var state_val_45541 = (state_45540[(1)]);
if((state_val_45541 === (1))){
var state_45540__$1 = state_45540;
var statearr_45542_45700 = state_45540__$1;
(statearr_45542_45700[(2)] = null);

(statearr_45542_45700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45541 === (2))){
var state_45540__$1 = state_45540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45540__$1,(4),jobs);
} else {
if((state_val_45541 === (3))){
var inst_45538 = (state_45540[(2)]);
var state_45540__$1 = state_45540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45540__$1,inst_45538);
} else {
if((state_val_45541 === (4))){
var inst_45530 = (state_45540[(2)]);
var inst_45531 = process.call(null,inst_45530);
var state_45540__$1 = state_45540;
if(cljs.core.truth_(inst_45531)){
var statearr_45543_45701 = state_45540__$1;
(statearr_45543_45701[(1)] = (5));

} else {
var statearr_45544_45702 = state_45540__$1;
(statearr_45544_45702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45541 === (5))){
var state_45540__$1 = state_45540;
var statearr_45545_45703 = state_45540__$1;
(statearr_45545_45703[(2)] = null);

(statearr_45545_45703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45541 === (6))){
var state_45540__$1 = state_45540;
var statearr_45546_45704 = state_45540__$1;
(statearr_45546_45704[(2)] = null);

(statearr_45546_45704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45541 === (7))){
var inst_45536 = (state_45540[(2)]);
var state_45540__$1 = state_45540;
var statearr_45547_45705 = state_45540__$1;
(statearr_45547_45705[(2)] = inst_45536);

(statearr_45547_45705[(1)] = (3));


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
});})(__45696,c__27930__auto___45699,G__45527_45697,n__25666__auto___45695,jobs,results,process,async))
;
return ((function (__45696,switch__27865__auto__,c__27930__auto___45699,G__45527_45697,n__25666__auto___45695,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_45551 = [null,null,null,null,null,null,null];
(statearr_45551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_45551[(1)] = (1));

return statearr_45551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_45540){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45552){if((e45552 instanceof Object)){
var ex__27869__auto__ = e45552;
var statearr_45553_45706 = state_45540;
(statearr_45553_45706[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45707 = state_45540;
state_45540 = G__45707;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_45540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_45540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(__45696,switch__27865__auto__,c__27930__auto___45699,G__45527_45697,n__25666__auto___45695,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_45554 = f__27931__auto__.call(null);
(statearr_45554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___45699);

return statearr_45554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(__45696,c__27930__auto___45699,G__45527_45697,n__25666__auto___45695,jobs,results,process,async))
);


break;
case "async":
var c__27930__auto___45708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45696,c__27930__auto___45708,G__45527_45697,n__25666__auto___45695,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (__45696,c__27930__auto___45708,G__45527_45697,n__25666__auto___45695,jobs,results,process,async){
return (function (state_45567){
var state_val_45568 = (state_45567[(1)]);
if((state_val_45568 === (1))){
var state_45567__$1 = state_45567;
var statearr_45569_45709 = state_45567__$1;
(statearr_45569_45709[(2)] = null);

(statearr_45569_45709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45568 === (2))){
var state_45567__$1 = state_45567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45567__$1,(4),jobs);
} else {
if((state_val_45568 === (3))){
var inst_45565 = (state_45567[(2)]);
var state_45567__$1 = state_45567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45567__$1,inst_45565);
} else {
if((state_val_45568 === (4))){
var inst_45557 = (state_45567[(2)]);
var inst_45558 = async.call(null,inst_45557);
var state_45567__$1 = state_45567;
if(cljs.core.truth_(inst_45558)){
var statearr_45570_45710 = state_45567__$1;
(statearr_45570_45710[(1)] = (5));

} else {
var statearr_45571_45711 = state_45567__$1;
(statearr_45571_45711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45568 === (5))){
var state_45567__$1 = state_45567;
var statearr_45572_45712 = state_45567__$1;
(statearr_45572_45712[(2)] = null);

(statearr_45572_45712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45568 === (6))){
var state_45567__$1 = state_45567;
var statearr_45573_45713 = state_45567__$1;
(statearr_45573_45713[(2)] = null);

(statearr_45573_45713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45568 === (7))){
var inst_45563 = (state_45567[(2)]);
var state_45567__$1 = state_45567;
var statearr_45574_45714 = state_45567__$1;
(statearr_45574_45714[(2)] = inst_45563);

(statearr_45574_45714[(1)] = (3));


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
});})(__45696,c__27930__auto___45708,G__45527_45697,n__25666__auto___45695,jobs,results,process,async))
;
return ((function (__45696,switch__27865__auto__,c__27930__auto___45708,G__45527_45697,n__25666__auto___45695,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_45578 = [null,null,null,null,null,null,null];
(statearr_45578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_45578[(1)] = (1));

return statearr_45578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_45567){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45579){if((e45579 instanceof Object)){
var ex__27869__auto__ = e45579;
var statearr_45580_45715 = state_45567;
(statearr_45580_45715[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45716 = state_45567;
state_45567 = G__45716;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_45567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_45567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(__45696,switch__27865__auto__,c__27930__auto___45708,G__45527_45697,n__25666__auto___45695,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_45581 = f__27931__auto__.call(null);
(statearr_45581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___45708);

return statearr_45581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(__45696,c__27930__auto___45708,G__45527_45697,n__25666__auto___45695,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45717 = (__45696 + (1));
__45696 = G__45717;
continue;
} else {
}
break;
}

var c__27930__auto___45718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___45718,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___45718,jobs,results,process,async){
return (function (state_45603){
var state_val_45604 = (state_45603[(1)]);
if((state_val_45604 === (1))){
var state_45603__$1 = state_45603;
var statearr_45605_45719 = state_45603__$1;
(statearr_45605_45719[(2)] = null);

(statearr_45605_45719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (2))){
var state_45603__$1 = state_45603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45603__$1,(4),from);
} else {
if((state_val_45604 === (3))){
var inst_45601 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45603__$1,inst_45601);
} else {
if((state_val_45604 === (4))){
var inst_45584 = (state_45603[(7)]);
var inst_45584__$1 = (state_45603[(2)]);
var inst_45585 = (inst_45584__$1 == null);
var state_45603__$1 = (function (){var statearr_45606 = state_45603;
(statearr_45606[(7)] = inst_45584__$1);

return statearr_45606;
})();
if(cljs.core.truth_(inst_45585)){
var statearr_45607_45720 = state_45603__$1;
(statearr_45607_45720[(1)] = (5));

} else {
var statearr_45608_45721 = state_45603__$1;
(statearr_45608_45721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (5))){
var inst_45587 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45603__$1 = state_45603;
var statearr_45609_45722 = state_45603__$1;
(statearr_45609_45722[(2)] = inst_45587);

(statearr_45609_45722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (6))){
var inst_45584 = (state_45603[(7)]);
var inst_45589 = (state_45603[(8)]);
var inst_45589__$1 = cljs.core.async.chan.call(null,(1));
var inst_45590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45591 = [inst_45584,inst_45589__$1];
var inst_45592 = (new cljs.core.PersistentVector(null,2,(5),inst_45590,inst_45591,null));
var state_45603__$1 = (function (){var statearr_45610 = state_45603;
(statearr_45610[(8)] = inst_45589__$1);

return statearr_45610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45603__$1,(8),jobs,inst_45592);
} else {
if((state_val_45604 === (7))){
var inst_45599 = (state_45603[(2)]);
var state_45603__$1 = state_45603;
var statearr_45611_45723 = state_45603__$1;
(statearr_45611_45723[(2)] = inst_45599);

(statearr_45611_45723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45604 === (8))){
var inst_45589 = (state_45603[(8)]);
var inst_45594 = (state_45603[(2)]);
var state_45603__$1 = (function (){var statearr_45612 = state_45603;
(statearr_45612[(9)] = inst_45594);

return statearr_45612;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45603__$1,(9),results,inst_45589);
} else {
if((state_val_45604 === (9))){
var inst_45596 = (state_45603[(2)]);
var state_45603__$1 = (function (){var statearr_45613 = state_45603;
(statearr_45613[(10)] = inst_45596);

return statearr_45613;
})();
var statearr_45614_45724 = state_45603__$1;
(statearr_45614_45724[(2)] = null);

(statearr_45614_45724[(1)] = (2));


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
});})(c__27930__auto___45718,jobs,results,process,async))
;
return ((function (switch__27865__auto__,c__27930__auto___45718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_45618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_45618[(1)] = (1));

return statearr_45618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_45603){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45619){if((e45619 instanceof Object)){
var ex__27869__auto__ = e45619;
var statearr_45620_45725 = state_45603;
(statearr_45620_45725[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45726 = state_45603;
state_45603 = G__45726;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_45603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_45603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___45718,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_45621 = f__27931__auto__.call(null);
(statearr_45621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___45718);

return statearr_45621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___45718,jobs,results,process,async))
);


var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__,jobs,results,process,async){
return (function (state_45659){
var state_val_45660 = (state_45659[(1)]);
if((state_val_45660 === (7))){
var inst_45655 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45661_45727 = state_45659__$1;
(statearr_45661_45727[(2)] = inst_45655);

(statearr_45661_45727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (20))){
var state_45659__$1 = state_45659;
var statearr_45662_45728 = state_45659__$1;
(statearr_45662_45728[(2)] = null);

(statearr_45662_45728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (1))){
var state_45659__$1 = state_45659;
var statearr_45663_45729 = state_45659__$1;
(statearr_45663_45729[(2)] = null);

(statearr_45663_45729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (4))){
var inst_45624 = (state_45659[(7)]);
var inst_45624__$1 = (state_45659[(2)]);
var inst_45625 = (inst_45624__$1 == null);
var state_45659__$1 = (function (){var statearr_45664 = state_45659;
(statearr_45664[(7)] = inst_45624__$1);

return statearr_45664;
})();
if(cljs.core.truth_(inst_45625)){
var statearr_45665_45730 = state_45659__$1;
(statearr_45665_45730[(1)] = (5));

} else {
var statearr_45666_45731 = state_45659__$1;
(statearr_45666_45731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (15))){
var inst_45637 = (state_45659[(8)]);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45659__$1,(18),to,inst_45637);
} else {
if((state_val_45660 === (21))){
var inst_45650 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45667_45732 = state_45659__$1;
(statearr_45667_45732[(2)] = inst_45650);

(statearr_45667_45732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (13))){
var inst_45652 = (state_45659[(2)]);
var state_45659__$1 = (function (){var statearr_45668 = state_45659;
(statearr_45668[(9)] = inst_45652);

return statearr_45668;
})();
var statearr_45669_45733 = state_45659__$1;
(statearr_45669_45733[(2)] = null);

(statearr_45669_45733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (6))){
var inst_45624 = (state_45659[(7)]);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45659__$1,(11),inst_45624);
} else {
if((state_val_45660 === (17))){
var inst_45645 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
if(cljs.core.truth_(inst_45645)){
var statearr_45670_45734 = state_45659__$1;
(statearr_45670_45734[(1)] = (19));

} else {
var statearr_45671_45735 = state_45659__$1;
(statearr_45671_45735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (3))){
var inst_45657 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45659__$1,inst_45657);
} else {
if((state_val_45660 === (12))){
var inst_45634 = (state_45659[(10)]);
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45659__$1,(14),inst_45634);
} else {
if((state_val_45660 === (2))){
var state_45659__$1 = state_45659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45659__$1,(4),results);
} else {
if((state_val_45660 === (19))){
var state_45659__$1 = state_45659;
var statearr_45672_45736 = state_45659__$1;
(statearr_45672_45736[(2)] = null);

(statearr_45672_45736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (11))){
var inst_45634 = (state_45659[(2)]);
var state_45659__$1 = (function (){var statearr_45673 = state_45659;
(statearr_45673[(10)] = inst_45634);

return statearr_45673;
})();
var statearr_45674_45737 = state_45659__$1;
(statearr_45674_45737[(2)] = null);

(statearr_45674_45737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (9))){
var state_45659__$1 = state_45659;
var statearr_45675_45738 = state_45659__$1;
(statearr_45675_45738[(2)] = null);

(statearr_45675_45738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (5))){
var state_45659__$1 = state_45659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45676_45739 = state_45659__$1;
(statearr_45676_45739[(1)] = (8));

} else {
var statearr_45677_45740 = state_45659__$1;
(statearr_45677_45740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (14))){
var inst_45637 = (state_45659[(8)]);
var inst_45639 = (state_45659[(11)]);
var inst_45637__$1 = (state_45659[(2)]);
var inst_45638 = (inst_45637__$1 == null);
var inst_45639__$1 = cljs.core.not.call(null,inst_45638);
var state_45659__$1 = (function (){var statearr_45678 = state_45659;
(statearr_45678[(8)] = inst_45637__$1);

(statearr_45678[(11)] = inst_45639__$1);

return statearr_45678;
})();
if(inst_45639__$1){
var statearr_45679_45741 = state_45659__$1;
(statearr_45679_45741[(1)] = (15));

} else {
var statearr_45680_45742 = state_45659__$1;
(statearr_45680_45742[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (16))){
var inst_45639 = (state_45659[(11)]);
var state_45659__$1 = state_45659;
var statearr_45681_45743 = state_45659__$1;
(statearr_45681_45743[(2)] = inst_45639);

(statearr_45681_45743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (10))){
var inst_45631 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45682_45744 = state_45659__$1;
(statearr_45682_45744[(2)] = inst_45631);

(statearr_45682_45744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (18))){
var inst_45642 = (state_45659[(2)]);
var state_45659__$1 = state_45659;
var statearr_45683_45745 = state_45659__$1;
(statearr_45683_45745[(2)] = inst_45642);

(statearr_45683_45745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45660 === (8))){
var inst_45628 = cljs.core.async.close_BANG_.call(null,to);
var state_45659__$1 = state_45659;
var statearr_45684_45746 = state_45659__$1;
(statearr_45684_45746[(2)] = inst_45628);

(statearr_45684_45746[(1)] = (10));


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
});})(c__27930__auto__,jobs,results,process,async))
;
return ((function (switch__27865__auto__,c__27930__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_45688 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_45688[(1)] = (1));

return statearr_45688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_45659){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45689){if((e45689 instanceof Object)){
var ex__27869__auto__ = e45689;
var statearr_45690_45747 = state_45659;
(statearr_45690_45747[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45748 = state_45659;
state_45659 = G__45748;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_45659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_45659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_45691 = f__27931__auto__.call(null);
(statearr_45691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_45691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__,jobs,results,process,async))
);

return c__27930__auto__;
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
var args45749 = [];
var len__25826__auto___45752 = arguments.length;
var i__25827__auto___45753 = (0);
while(true){
if((i__25827__auto___45753 < len__25826__auto___45752)){
args45749.push((arguments[i__25827__auto___45753]));

var G__45754 = (i__25827__auto___45753 + (1));
i__25827__auto___45753 = G__45754;
continue;
} else {
}
break;
}

var G__45751 = args45749.length;
switch (G__45751) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45749.length)].join('')));

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
var args45756 = [];
var len__25826__auto___45759 = arguments.length;
var i__25827__auto___45760 = (0);
while(true){
if((i__25827__auto___45760 < len__25826__auto___45759)){
args45756.push((arguments[i__25827__auto___45760]));

var G__45761 = (i__25827__auto___45760 + (1));
i__25827__auto___45760 = G__45761;
continue;
} else {
}
break;
}

var G__45758 = args45756.length;
switch (G__45758) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45756.length)].join('')));

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
var args45763 = [];
var len__25826__auto___45816 = arguments.length;
var i__25827__auto___45817 = (0);
while(true){
if((i__25827__auto___45817 < len__25826__auto___45816)){
args45763.push((arguments[i__25827__auto___45817]));

var G__45818 = (i__25827__auto___45817 + (1));
i__25827__auto___45817 = G__45818;
continue;
} else {
}
break;
}

var G__45765 = args45763.length;
switch (G__45765) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45763.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27930__auto___45820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___45820,tc,fc){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___45820,tc,fc){
return (function (state_45791){
var state_val_45792 = (state_45791[(1)]);
if((state_val_45792 === (7))){
var inst_45787 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
var statearr_45793_45821 = state_45791__$1;
(statearr_45793_45821[(2)] = inst_45787);

(statearr_45793_45821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (1))){
var state_45791__$1 = state_45791;
var statearr_45794_45822 = state_45791__$1;
(statearr_45794_45822[(2)] = null);

(statearr_45794_45822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (4))){
var inst_45768 = (state_45791[(7)]);
var inst_45768__$1 = (state_45791[(2)]);
var inst_45769 = (inst_45768__$1 == null);
var state_45791__$1 = (function (){var statearr_45795 = state_45791;
(statearr_45795[(7)] = inst_45768__$1);

return statearr_45795;
})();
if(cljs.core.truth_(inst_45769)){
var statearr_45796_45823 = state_45791__$1;
(statearr_45796_45823[(1)] = (5));

} else {
var statearr_45797_45824 = state_45791__$1;
(statearr_45797_45824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (13))){
var state_45791__$1 = state_45791;
var statearr_45798_45825 = state_45791__$1;
(statearr_45798_45825[(2)] = null);

(statearr_45798_45825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (6))){
var inst_45768 = (state_45791[(7)]);
var inst_45774 = p.call(null,inst_45768);
var state_45791__$1 = state_45791;
if(cljs.core.truth_(inst_45774)){
var statearr_45799_45826 = state_45791__$1;
(statearr_45799_45826[(1)] = (9));

} else {
var statearr_45800_45827 = state_45791__$1;
(statearr_45800_45827[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (3))){
var inst_45789 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45791__$1,inst_45789);
} else {
if((state_val_45792 === (12))){
var state_45791__$1 = state_45791;
var statearr_45801_45828 = state_45791__$1;
(statearr_45801_45828[(2)] = null);

(statearr_45801_45828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (2))){
var state_45791__$1 = state_45791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45791__$1,(4),ch);
} else {
if((state_val_45792 === (11))){
var inst_45768 = (state_45791[(7)]);
var inst_45778 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45791__$1,(8),inst_45778,inst_45768);
} else {
if((state_val_45792 === (9))){
var state_45791__$1 = state_45791;
var statearr_45802_45829 = state_45791__$1;
(statearr_45802_45829[(2)] = tc);

(statearr_45802_45829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (5))){
var inst_45771 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45772 = cljs.core.async.close_BANG_.call(null,fc);
var state_45791__$1 = (function (){var statearr_45803 = state_45791;
(statearr_45803[(8)] = inst_45771);

return statearr_45803;
})();
var statearr_45804_45830 = state_45791__$1;
(statearr_45804_45830[(2)] = inst_45772);

(statearr_45804_45830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (14))){
var inst_45785 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
var statearr_45805_45831 = state_45791__$1;
(statearr_45805_45831[(2)] = inst_45785);

(statearr_45805_45831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (10))){
var state_45791__$1 = state_45791;
var statearr_45806_45832 = state_45791__$1;
(statearr_45806_45832[(2)] = fc);

(statearr_45806_45832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45792 === (8))){
var inst_45780 = (state_45791[(2)]);
var state_45791__$1 = state_45791;
if(cljs.core.truth_(inst_45780)){
var statearr_45807_45833 = state_45791__$1;
(statearr_45807_45833[(1)] = (12));

} else {
var statearr_45808_45834 = state_45791__$1;
(statearr_45808_45834[(1)] = (13));

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
});})(c__27930__auto___45820,tc,fc))
;
return ((function (switch__27865__auto__,c__27930__auto___45820,tc,fc){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_45812 = [null,null,null,null,null,null,null,null,null];
(statearr_45812[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_45812[(1)] = (1));

return statearr_45812;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_45791){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45813){if((e45813 instanceof Object)){
var ex__27869__auto__ = e45813;
var statearr_45814_45835 = state_45791;
(statearr_45814_45835[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45836 = state_45791;
state_45791 = G__45836;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_45791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_45791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___45820,tc,fc))
})();
var state__27932__auto__ = (function (){var statearr_45815 = f__27931__auto__.call(null);
(statearr_45815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___45820);

return statearr_45815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___45820,tc,fc))
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
var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__){
return (function (state_45900){
var state_val_45901 = (state_45900[(1)]);
if((state_val_45901 === (7))){
var inst_45896 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45902_45923 = state_45900__$1;
(statearr_45902_45923[(2)] = inst_45896);

(statearr_45902_45923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (1))){
var inst_45880 = init;
var state_45900__$1 = (function (){var statearr_45903 = state_45900;
(statearr_45903[(7)] = inst_45880);

return statearr_45903;
})();
var statearr_45904_45924 = state_45900__$1;
(statearr_45904_45924[(2)] = null);

(statearr_45904_45924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (4))){
var inst_45883 = (state_45900[(8)]);
var inst_45883__$1 = (state_45900[(2)]);
var inst_45884 = (inst_45883__$1 == null);
var state_45900__$1 = (function (){var statearr_45905 = state_45900;
(statearr_45905[(8)] = inst_45883__$1);

return statearr_45905;
})();
if(cljs.core.truth_(inst_45884)){
var statearr_45906_45925 = state_45900__$1;
(statearr_45906_45925[(1)] = (5));

} else {
var statearr_45907_45926 = state_45900__$1;
(statearr_45907_45926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (6))){
var inst_45887 = (state_45900[(9)]);
var inst_45883 = (state_45900[(8)]);
var inst_45880 = (state_45900[(7)]);
var inst_45887__$1 = f.call(null,inst_45880,inst_45883);
var inst_45888 = cljs.core.reduced_QMARK_.call(null,inst_45887__$1);
var state_45900__$1 = (function (){var statearr_45908 = state_45900;
(statearr_45908[(9)] = inst_45887__$1);

return statearr_45908;
})();
if(inst_45888){
var statearr_45909_45927 = state_45900__$1;
(statearr_45909_45927[(1)] = (8));

} else {
var statearr_45910_45928 = state_45900__$1;
(statearr_45910_45928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (3))){
var inst_45898 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45900__$1,inst_45898);
} else {
if((state_val_45901 === (2))){
var state_45900__$1 = state_45900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45900__$1,(4),ch);
} else {
if((state_val_45901 === (9))){
var inst_45887 = (state_45900[(9)]);
var inst_45880 = inst_45887;
var state_45900__$1 = (function (){var statearr_45911 = state_45900;
(statearr_45911[(7)] = inst_45880);

return statearr_45911;
})();
var statearr_45912_45929 = state_45900__$1;
(statearr_45912_45929[(2)] = null);

(statearr_45912_45929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (5))){
var inst_45880 = (state_45900[(7)]);
var state_45900__$1 = state_45900;
var statearr_45913_45930 = state_45900__$1;
(statearr_45913_45930[(2)] = inst_45880);

(statearr_45913_45930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (10))){
var inst_45894 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45914_45931 = state_45900__$1;
(statearr_45914_45931[(2)] = inst_45894);

(statearr_45914_45931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (8))){
var inst_45887 = (state_45900[(9)]);
var inst_45890 = cljs.core.deref.call(null,inst_45887);
var state_45900__$1 = state_45900;
var statearr_45915_45932 = state_45900__$1;
(statearr_45915_45932[(2)] = inst_45890);

(statearr_45915_45932[(1)] = (10));


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
});})(c__27930__auto__))
;
return ((function (switch__27865__auto__,c__27930__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27866__auto____0 = (function (){
var statearr_45919 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45919[(0)] = cljs$core$async$reduce_$_state_machine__27866__auto__);

(statearr_45919[(1)] = (1));

return statearr_45919;
});
var cljs$core$async$reduce_$_state_machine__27866__auto____1 = (function (state_45900){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45920){if((e45920 instanceof Object)){
var ex__27869__auto__ = e45920;
var statearr_45921_45933 = state_45900;
(statearr_45921_45933[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45934 = state_45900;
state_45900 = G__45934;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27866__auto__ = function(state_45900){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27866__auto____1.call(this,state_45900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27866__auto____0;
cljs$core$async$reduce_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27866__auto____1;
return cljs$core$async$reduce_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_45922 = f__27931__auto__.call(null);
(statearr_45922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_45922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__))
);

return c__27930__auto__;
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
var args45935 = [];
var len__25826__auto___45987 = arguments.length;
var i__25827__auto___45988 = (0);
while(true){
if((i__25827__auto___45988 < len__25826__auto___45987)){
args45935.push((arguments[i__25827__auto___45988]));

var G__45989 = (i__25827__auto___45988 + (1));
i__25827__auto___45988 = G__45989;
continue;
} else {
}
break;
}

var G__45937 = args45935.length;
switch (G__45937) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45935.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__){
return (function (state_45962){
var state_val_45963 = (state_45962[(1)]);
if((state_val_45963 === (7))){
var inst_45944 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45964_45991 = state_45962__$1;
(statearr_45964_45991[(2)] = inst_45944);

(statearr_45964_45991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (1))){
var inst_45938 = cljs.core.seq.call(null,coll);
var inst_45939 = inst_45938;
var state_45962__$1 = (function (){var statearr_45965 = state_45962;
(statearr_45965[(7)] = inst_45939);

return statearr_45965;
})();
var statearr_45966_45992 = state_45962__$1;
(statearr_45966_45992[(2)] = null);

(statearr_45966_45992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (4))){
var inst_45939 = (state_45962[(7)]);
var inst_45942 = cljs.core.first.call(null,inst_45939);
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45962__$1,(7),ch,inst_45942);
} else {
if((state_val_45963 === (13))){
var inst_45956 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45967_45993 = state_45962__$1;
(statearr_45967_45993[(2)] = inst_45956);

(statearr_45967_45993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (6))){
var inst_45947 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
if(cljs.core.truth_(inst_45947)){
var statearr_45968_45994 = state_45962__$1;
(statearr_45968_45994[(1)] = (8));

} else {
var statearr_45969_45995 = state_45962__$1;
(statearr_45969_45995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (3))){
var inst_45960 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45962__$1,inst_45960);
} else {
if((state_val_45963 === (12))){
var state_45962__$1 = state_45962;
var statearr_45970_45996 = state_45962__$1;
(statearr_45970_45996[(2)] = null);

(statearr_45970_45996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (2))){
var inst_45939 = (state_45962[(7)]);
var state_45962__$1 = state_45962;
if(cljs.core.truth_(inst_45939)){
var statearr_45971_45997 = state_45962__$1;
(statearr_45971_45997[(1)] = (4));

} else {
var statearr_45972_45998 = state_45962__$1;
(statearr_45972_45998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (11))){
var inst_45953 = cljs.core.async.close_BANG_.call(null,ch);
var state_45962__$1 = state_45962;
var statearr_45973_45999 = state_45962__$1;
(statearr_45973_45999[(2)] = inst_45953);

(statearr_45973_45999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (9))){
var state_45962__$1 = state_45962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45974_46000 = state_45962__$1;
(statearr_45974_46000[(1)] = (11));

} else {
var statearr_45975_46001 = state_45962__$1;
(statearr_45975_46001[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (5))){
var inst_45939 = (state_45962[(7)]);
var state_45962__$1 = state_45962;
var statearr_45976_46002 = state_45962__$1;
(statearr_45976_46002[(2)] = inst_45939);

(statearr_45976_46002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (10))){
var inst_45958 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45977_46003 = state_45962__$1;
(statearr_45977_46003[(2)] = inst_45958);

(statearr_45977_46003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (8))){
var inst_45939 = (state_45962[(7)]);
var inst_45949 = cljs.core.next.call(null,inst_45939);
var inst_45939__$1 = inst_45949;
var state_45962__$1 = (function (){var statearr_45978 = state_45962;
(statearr_45978[(7)] = inst_45939__$1);

return statearr_45978;
})();
var statearr_45979_46004 = state_45962__$1;
(statearr_45979_46004[(2)] = null);

(statearr_45979_46004[(1)] = (2));


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
});})(c__27930__auto__))
;
return ((function (switch__27865__auto__,c__27930__auto__){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_45983 = [null,null,null,null,null,null,null,null];
(statearr_45983[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_45983[(1)] = (1));

return statearr_45983;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_45962){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_45962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e45984){if((e45984 instanceof Object)){
var ex__27869__auto__ = e45984;
var statearr_45985_46005 = state_45962;
(statearr_45985_46005[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46006 = state_45962;
state_45962 = G__46006;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_45962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_45962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_45986 = f__27931__auto__.call(null);
(statearr_45986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_45986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__))
);

return c__27930__auto__;
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
var x__25414__auto__ = (((_ == null))?null:_);
var m__25415__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,_);
} else {
var m__25415__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,_);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25415__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m);
} else {
var m__25415__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async46232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46232 = (function (mult,ch,cs,meta46233){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta46233 = meta46233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46234,meta46233__$1){
var self__ = this;
var _46234__$1 = this;
return (new cljs.core.async.t_cljs$core$async46232(self__.mult,self__.ch,self__.cs,meta46233__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46234){
var self__ = this;
var _46234__$1 = this;
return self__.meta46233;
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46233","meta46233",1083473568,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46232";

cljs.core.async.t_cljs$core$async46232.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async46232");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46232 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46232(mult__$1,ch__$1,cs__$1,meta46233){
return (new cljs.core.async.t_cljs$core$async46232(mult__$1,ch__$1,cs__$1,meta46233));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46232(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27930__auto___46457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___46457,cs,m,dchan,dctr,done){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___46457,cs,m,dchan,dctr,done){
return (function (state_46369){
var state_val_46370 = (state_46369[(1)]);
if((state_val_46370 === (7))){
var inst_46365 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46371_46458 = state_46369__$1;
(statearr_46371_46458[(2)] = inst_46365);

(statearr_46371_46458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (20))){
var inst_46268 = (state_46369[(7)]);
var inst_46280 = cljs.core.first.call(null,inst_46268);
var inst_46281 = cljs.core.nth.call(null,inst_46280,(0),null);
var inst_46282 = cljs.core.nth.call(null,inst_46280,(1),null);
var state_46369__$1 = (function (){var statearr_46372 = state_46369;
(statearr_46372[(8)] = inst_46281);

return statearr_46372;
})();
if(cljs.core.truth_(inst_46282)){
var statearr_46373_46459 = state_46369__$1;
(statearr_46373_46459[(1)] = (22));

} else {
var statearr_46374_46460 = state_46369__$1;
(statearr_46374_46460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (27))){
var inst_46312 = (state_46369[(9)]);
var inst_46317 = (state_46369[(10)]);
var inst_46310 = (state_46369[(11)]);
var inst_46237 = (state_46369[(12)]);
var inst_46317__$1 = cljs.core._nth.call(null,inst_46310,inst_46312);
var inst_46318 = cljs.core.async.put_BANG_.call(null,inst_46317__$1,inst_46237,done);
var state_46369__$1 = (function (){var statearr_46375 = state_46369;
(statearr_46375[(10)] = inst_46317__$1);

return statearr_46375;
})();
if(cljs.core.truth_(inst_46318)){
var statearr_46376_46461 = state_46369__$1;
(statearr_46376_46461[(1)] = (30));

} else {
var statearr_46377_46462 = state_46369__$1;
(statearr_46377_46462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (1))){
var state_46369__$1 = state_46369;
var statearr_46378_46463 = state_46369__$1;
(statearr_46378_46463[(2)] = null);

(statearr_46378_46463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (24))){
var inst_46268 = (state_46369[(7)]);
var inst_46287 = (state_46369[(2)]);
var inst_46288 = cljs.core.next.call(null,inst_46268);
var inst_46246 = inst_46288;
var inst_46247 = null;
var inst_46248 = (0);
var inst_46249 = (0);
var state_46369__$1 = (function (){var statearr_46379 = state_46369;
(statearr_46379[(13)] = inst_46249);

(statearr_46379[(14)] = inst_46248);

(statearr_46379[(15)] = inst_46247);

(statearr_46379[(16)] = inst_46246);

(statearr_46379[(17)] = inst_46287);

return statearr_46379;
})();
var statearr_46380_46464 = state_46369__$1;
(statearr_46380_46464[(2)] = null);

(statearr_46380_46464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (39))){
var state_46369__$1 = state_46369;
var statearr_46384_46465 = state_46369__$1;
(statearr_46384_46465[(2)] = null);

(statearr_46384_46465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (4))){
var inst_46237 = (state_46369[(12)]);
var inst_46237__$1 = (state_46369[(2)]);
var inst_46238 = (inst_46237__$1 == null);
var state_46369__$1 = (function (){var statearr_46385 = state_46369;
(statearr_46385[(12)] = inst_46237__$1);

return statearr_46385;
})();
if(cljs.core.truth_(inst_46238)){
var statearr_46386_46466 = state_46369__$1;
(statearr_46386_46466[(1)] = (5));

} else {
var statearr_46387_46467 = state_46369__$1;
(statearr_46387_46467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (15))){
var inst_46249 = (state_46369[(13)]);
var inst_46248 = (state_46369[(14)]);
var inst_46247 = (state_46369[(15)]);
var inst_46246 = (state_46369[(16)]);
var inst_46264 = (state_46369[(2)]);
var inst_46265 = (inst_46249 + (1));
var tmp46381 = inst_46248;
var tmp46382 = inst_46247;
var tmp46383 = inst_46246;
var inst_46246__$1 = tmp46383;
var inst_46247__$1 = tmp46382;
var inst_46248__$1 = tmp46381;
var inst_46249__$1 = inst_46265;
var state_46369__$1 = (function (){var statearr_46388 = state_46369;
(statearr_46388[(13)] = inst_46249__$1);

(statearr_46388[(14)] = inst_46248__$1);

(statearr_46388[(15)] = inst_46247__$1);

(statearr_46388[(16)] = inst_46246__$1);

(statearr_46388[(18)] = inst_46264);

return statearr_46388;
})();
var statearr_46389_46468 = state_46369__$1;
(statearr_46389_46468[(2)] = null);

(statearr_46389_46468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (21))){
var inst_46291 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46393_46469 = state_46369__$1;
(statearr_46393_46469[(2)] = inst_46291);

(statearr_46393_46469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (31))){
var inst_46317 = (state_46369[(10)]);
var inst_46321 = done.call(null,null);
var inst_46322 = cljs.core.async.untap_STAR_.call(null,m,inst_46317);
var state_46369__$1 = (function (){var statearr_46394 = state_46369;
(statearr_46394[(19)] = inst_46321);

return statearr_46394;
})();
var statearr_46395_46470 = state_46369__$1;
(statearr_46395_46470[(2)] = inst_46322);

(statearr_46395_46470[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (32))){
var inst_46312 = (state_46369[(9)]);
var inst_46311 = (state_46369[(20)]);
var inst_46309 = (state_46369[(21)]);
var inst_46310 = (state_46369[(11)]);
var inst_46324 = (state_46369[(2)]);
var inst_46325 = (inst_46312 + (1));
var tmp46390 = inst_46311;
var tmp46391 = inst_46309;
var tmp46392 = inst_46310;
var inst_46309__$1 = tmp46391;
var inst_46310__$1 = tmp46392;
var inst_46311__$1 = tmp46390;
var inst_46312__$1 = inst_46325;
var state_46369__$1 = (function (){var statearr_46396 = state_46369;
(statearr_46396[(9)] = inst_46312__$1);

(statearr_46396[(20)] = inst_46311__$1);

(statearr_46396[(21)] = inst_46309__$1);

(statearr_46396[(22)] = inst_46324);

(statearr_46396[(11)] = inst_46310__$1);

return statearr_46396;
})();
var statearr_46397_46471 = state_46369__$1;
(statearr_46397_46471[(2)] = null);

(statearr_46397_46471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (40))){
var inst_46337 = (state_46369[(23)]);
var inst_46341 = done.call(null,null);
var inst_46342 = cljs.core.async.untap_STAR_.call(null,m,inst_46337);
var state_46369__$1 = (function (){var statearr_46398 = state_46369;
(statearr_46398[(24)] = inst_46341);

return statearr_46398;
})();
var statearr_46399_46472 = state_46369__$1;
(statearr_46399_46472[(2)] = inst_46342);

(statearr_46399_46472[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (33))){
var inst_46328 = (state_46369[(25)]);
var inst_46330 = cljs.core.chunked_seq_QMARK_.call(null,inst_46328);
var state_46369__$1 = state_46369;
if(inst_46330){
var statearr_46400_46473 = state_46369__$1;
(statearr_46400_46473[(1)] = (36));

} else {
var statearr_46401_46474 = state_46369__$1;
(statearr_46401_46474[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (13))){
var inst_46258 = (state_46369[(26)]);
var inst_46261 = cljs.core.async.close_BANG_.call(null,inst_46258);
var state_46369__$1 = state_46369;
var statearr_46402_46475 = state_46369__$1;
(statearr_46402_46475[(2)] = inst_46261);

(statearr_46402_46475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (22))){
var inst_46281 = (state_46369[(8)]);
var inst_46284 = cljs.core.async.close_BANG_.call(null,inst_46281);
var state_46369__$1 = state_46369;
var statearr_46403_46476 = state_46369__$1;
(statearr_46403_46476[(2)] = inst_46284);

(statearr_46403_46476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (36))){
var inst_46328 = (state_46369[(25)]);
var inst_46332 = cljs.core.chunk_first.call(null,inst_46328);
var inst_46333 = cljs.core.chunk_rest.call(null,inst_46328);
var inst_46334 = cljs.core.count.call(null,inst_46332);
var inst_46309 = inst_46333;
var inst_46310 = inst_46332;
var inst_46311 = inst_46334;
var inst_46312 = (0);
var state_46369__$1 = (function (){var statearr_46404 = state_46369;
(statearr_46404[(9)] = inst_46312);

(statearr_46404[(20)] = inst_46311);

(statearr_46404[(21)] = inst_46309);

(statearr_46404[(11)] = inst_46310);

return statearr_46404;
})();
var statearr_46405_46477 = state_46369__$1;
(statearr_46405_46477[(2)] = null);

(statearr_46405_46477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (41))){
var inst_46328 = (state_46369[(25)]);
var inst_46344 = (state_46369[(2)]);
var inst_46345 = cljs.core.next.call(null,inst_46328);
var inst_46309 = inst_46345;
var inst_46310 = null;
var inst_46311 = (0);
var inst_46312 = (0);
var state_46369__$1 = (function (){var statearr_46406 = state_46369;
(statearr_46406[(9)] = inst_46312);

(statearr_46406[(20)] = inst_46311);

(statearr_46406[(21)] = inst_46309);

(statearr_46406[(11)] = inst_46310);

(statearr_46406[(27)] = inst_46344);

return statearr_46406;
})();
var statearr_46407_46478 = state_46369__$1;
(statearr_46407_46478[(2)] = null);

(statearr_46407_46478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (43))){
var state_46369__$1 = state_46369;
var statearr_46408_46479 = state_46369__$1;
(statearr_46408_46479[(2)] = null);

(statearr_46408_46479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (29))){
var inst_46353 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46409_46480 = state_46369__$1;
(statearr_46409_46480[(2)] = inst_46353);

(statearr_46409_46480[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (44))){
var inst_46362 = (state_46369[(2)]);
var state_46369__$1 = (function (){var statearr_46410 = state_46369;
(statearr_46410[(28)] = inst_46362);

return statearr_46410;
})();
var statearr_46411_46481 = state_46369__$1;
(statearr_46411_46481[(2)] = null);

(statearr_46411_46481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (6))){
var inst_46301 = (state_46369[(29)]);
var inst_46300 = cljs.core.deref.call(null,cs);
var inst_46301__$1 = cljs.core.keys.call(null,inst_46300);
var inst_46302 = cljs.core.count.call(null,inst_46301__$1);
var inst_46303 = cljs.core.reset_BANG_.call(null,dctr,inst_46302);
var inst_46308 = cljs.core.seq.call(null,inst_46301__$1);
var inst_46309 = inst_46308;
var inst_46310 = null;
var inst_46311 = (0);
var inst_46312 = (0);
var state_46369__$1 = (function (){var statearr_46412 = state_46369;
(statearr_46412[(9)] = inst_46312);

(statearr_46412[(30)] = inst_46303);

(statearr_46412[(20)] = inst_46311);

(statearr_46412[(21)] = inst_46309);

(statearr_46412[(29)] = inst_46301__$1);

(statearr_46412[(11)] = inst_46310);

return statearr_46412;
})();
var statearr_46413_46482 = state_46369__$1;
(statearr_46413_46482[(2)] = null);

(statearr_46413_46482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (28))){
var inst_46328 = (state_46369[(25)]);
var inst_46309 = (state_46369[(21)]);
var inst_46328__$1 = cljs.core.seq.call(null,inst_46309);
var state_46369__$1 = (function (){var statearr_46414 = state_46369;
(statearr_46414[(25)] = inst_46328__$1);

return statearr_46414;
})();
if(inst_46328__$1){
var statearr_46415_46483 = state_46369__$1;
(statearr_46415_46483[(1)] = (33));

} else {
var statearr_46416_46484 = state_46369__$1;
(statearr_46416_46484[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (25))){
var inst_46312 = (state_46369[(9)]);
var inst_46311 = (state_46369[(20)]);
var inst_46314 = (inst_46312 < inst_46311);
var inst_46315 = inst_46314;
var state_46369__$1 = state_46369;
if(cljs.core.truth_(inst_46315)){
var statearr_46417_46485 = state_46369__$1;
(statearr_46417_46485[(1)] = (27));

} else {
var statearr_46418_46486 = state_46369__$1;
(statearr_46418_46486[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (34))){
var state_46369__$1 = state_46369;
var statearr_46419_46487 = state_46369__$1;
(statearr_46419_46487[(2)] = null);

(statearr_46419_46487[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (17))){
var state_46369__$1 = state_46369;
var statearr_46420_46488 = state_46369__$1;
(statearr_46420_46488[(2)] = null);

(statearr_46420_46488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (3))){
var inst_46367 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46369__$1,inst_46367);
} else {
if((state_val_46370 === (12))){
var inst_46296 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46421_46489 = state_46369__$1;
(statearr_46421_46489[(2)] = inst_46296);

(statearr_46421_46489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (2))){
var state_46369__$1 = state_46369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46369__$1,(4),ch);
} else {
if((state_val_46370 === (23))){
var state_46369__$1 = state_46369;
var statearr_46422_46490 = state_46369__$1;
(statearr_46422_46490[(2)] = null);

(statearr_46422_46490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (35))){
var inst_46351 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46423_46491 = state_46369__$1;
(statearr_46423_46491[(2)] = inst_46351);

(statearr_46423_46491[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (19))){
var inst_46268 = (state_46369[(7)]);
var inst_46272 = cljs.core.chunk_first.call(null,inst_46268);
var inst_46273 = cljs.core.chunk_rest.call(null,inst_46268);
var inst_46274 = cljs.core.count.call(null,inst_46272);
var inst_46246 = inst_46273;
var inst_46247 = inst_46272;
var inst_46248 = inst_46274;
var inst_46249 = (0);
var state_46369__$1 = (function (){var statearr_46424 = state_46369;
(statearr_46424[(13)] = inst_46249);

(statearr_46424[(14)] = inst_46248);

(statearr_46424[(15)] = inst_46247);

(statearr_46424[(16)] = inst_46246);

return statearr_46424;
})();
var statearr_46425_46492 = state_46369__$1;
(statearr_46425_46492[(2)] = null);

(statearr_46425_46492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (11))){
var inst_46268 = (state_46369[(7)]);
var inst_46246 = (state_46369[(16)]);
var inst_46268__$1 = cljs.core.seq.call(null,inst_46246);
var state_46369__$1 = (function (){var statearr_46426 = state_46369;
(statearr_46426[(7)] = inst_46268__$1);

return statearr_46426;
})();
if(inst_46268__$1){
var statearr_46427_46493 = state_46369__$1;
(statearr_46427_46493[(1)] = (16));

} else {
var statearr_46428_46494 = state_46369__$1;
(statearr_46428_46494[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (9))){
var inst_46298 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46429_46495 = state_46369__$1;
(statearr_46429_46495[(2)] = inst_46298);

(statearr_46429_46495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (5))){
var inst_46244 = cljs.core.deref.call(null,cs);
var inst_46245 = cljs.core.seq.call(null,inst_46244);
var inst_46246 = inst_46245;
var inst_46247 = null;
var inst_46248 = (0);
var inst_46249 = (0);
var state_46369__$1 = (function (){var statearr_46430 = state_46369;
(statearr_46430[(13)] = inst_46249);

(statearr_46430[(14)] = inst_46248);

(statearr_46430[(15)] = inst_46247);

(statearr_46430[(16)] = inst_46246);

return statearr_46430;
})();
var statearr_46431_46496 = state_46369__$1;
(statearr_46431_46496[(2)] = null);

(statearr_46431_46496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (14))){
var state_46369__$1 = state_46369;
var statearr_46432_46497 = state_46369__$1;
(statearr_46432_46497[(2)] = null);

(statearr_46432_46497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (45))){
var inst_46359 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46433_46498 = state_46369__$1;
(statearr_46433_46498[(2)] = inst_46359);

(statearr_46433_46498[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (26))){
var inst_46301 = (state_46369[(29)]);
var inst_46355 = (state_46369[(2)]);
var inst_46356 = cljs.core.seq.call(null,inst_46301);
var state_46369__$1 = (function (){var statearr_46434 = state_46369;
(statearr_46434[(31)] = inst_46355);

return statearr_46434;
})();
if(inst_46356){
var statearr_46435_46499 = state_46369__$1;
(statearr_46435_46499[(1)] = (42));

} else {
var statearr_46436_46500 = state_46369__$1;
(statearr_46436_46500[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (16))){
var inst_46268 = (state_46369[(7)]);
var inst_46270 = cljs.core.chunked_seq_QMARK_.call(null,inst_46268);
var state_46369__$1 = state_46369;
if(inst_46270){
var statearr_46437_46501 = state_46369__$1;
(statearr_46437_46501[(1)] = (19));

} else {
var statearr_46438_46502 = state_46369__$1;
(statearr_46438_46502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (38))){
var inst_46348 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46439_46503 = state_46369__$1;
(statearr_46439_46503[(2)] = inst_46348);

(statearr_46439_46503[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (30))){
var state_46369__$1 = state_46369;
var statearr_46440_46504 = state_46369__$1;
(statearr_46440_46504[(2)] = null);

(statearr_46440_46504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (10))){
var inst_46249 = (state_46369[(13)]);
var inst_46247 = (state_46369[(15)]);
var inst_46257 = cljs.core._nth.call(null,inst_46247,inst_46249);
var inst_46258 = cljs.core.nth.call(null,inst_46257,(0),null);
var inst_46259 = cljs.core.nth.call(null,inst_46257,(1),null);
var state_46369__$1 = (function (){var statearr_46441 = state_46369;
(statearr_46441[(26)] = inst_46258);

return statearr_46441;
})();
if(cljs.core.truth_(inst_46259)){
var statearr_46442_46505 = state_46369__$1;
(statearr_46442_46505[(1)] = (13));

} else {
var statearr_46443_46506 = state_46369__$1;
(statearr_46443_46506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (18))){
var inst_46294 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46444_46507 = state_46369__$1;
(statearr_46444_46507[(2)] = inst_46294);

(statearr_46444_46507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (42))){
var state_46369__$1 = state_46369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46369__$1,(45),dchan);
} else {
if((state_val_46370 === (37))){
var inst_46328 = (state_46369[(25)]);
var inst_46337 = (state_46369[(23)]);
var inst_46237 = (state_46369[(12)]);
var inst_46337__$1 = cljs.core.first.call(null,inst_46328);
var inst_46338 = cljs.core.async.put_BANG_.call(null,inst_46337__$1,inst_46237,done);
var state_46369__$1 = (function (){var statearr_46445 = state_46369;
(statearr_46445[(23)] = inst_46337__$1);

return statearr_46445;
})();
if(cljs.core.truth_(inst_46338)){
var statearr_46446_46508 = state_46369__$1;
(statearr_46446_46508[(1)] = (39));

} else {
var statearr_46447_46509 = state_46369__$1;
(statearr_46447_46509[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (8))){
var inst_46249 = (state_46369[(13)]);
var inst_46248 = (state_46369[(14)]);
var inst_46251 = (inst_46249 < inst_46248);
var inst_46252 = inst_46251;
var state_46369__$1 = state_46369;
if(cljs.core.truth_(inst_46252)){
var statearr_46448_46510 = state_46369__$1;
(statearr_46448_46510[(1)] = (10));

} else {
var statearr_46449_46511 = state_46369__$1;
(statearr_46449_46511[(1)] = (11));

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
});})(c__27930__auto___46457,cs,m,dchan,dctr,done))
;
return ((function (switch__27865__auto__,c__27930__auto___46457,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27866__auto__ = null;
var cljs$core$async$mult_$_state_machine__27866__auto____0 = (function (){
var statearr_46453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46453[(0)] = cljs$core$async$mult_$_state_machine__27866__auto__);

(statearr_46453[(1)] = (1));

return statearr_46453;
});
var cljs$core$async$mult_$_state_machine__27866__auto____1 = (function (state_46369){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_46369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e46454){if((e46454 instanceof Object)){
var ex__27869__auto__ = e46454;
var statearr_46455_46512 = state_46369;
(statearr_46455_46512[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46513 = state_46369;
state_46369 = G__46513;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27866__auto__ = function(state_46369){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27866__auto____1.call(this,state_46369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27866__auto____0;
cljs$core$async$mult_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27866__auto____1;
return cljs$core$async$mult_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___46457,cs,m,dchan,dctr,done))
})();
var state__27932__auto__ = (function (){var statearr_46456 = f__27931__auto__.call(null);
(statearr_46456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___46457);

return statearr_46456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___46457,cs,m,dchan,dctr,done))
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
var args46514 = [];
var len__25826__auto___46517 = arguments.length;
var i__25827__auto___46518 = (0);
while(true){
if((i__25827__auto___46518 < len__25826__auto___46517)){
args46514.push((arguments[i__25827__auto___46518]));

var G__46519 = (i__25827__auto___46518 + (1));
i__25827__auto___46518 = G__46519;
continue;
} else {
}
break;
}

var G__46516 = args46514.length;
switch (G__46516) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46514.length)].join('')));

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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,ch);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m);
} else {
var m__25415__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,state_map);
} else {
var m__25415__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,state_map);
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
var x__25414__auto__ = (((m == null))?null:m);
var m__25415__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,m,mode);
} else {
var m__25415__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___46531 = arguments.length;
var i__25827__auto___46532 = (0);
while(true){
if((i__25827__auto___46532 < len__25826__auto___46531)){
args__25833__auto__.push((arguments[i__25827__auto___46532]));

var G__46533 = (i__25827__auto___46532 + (1));
i__25827__auto___46532 = G__46533;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46525){
var map__46526 = p__46525;
var map__46526__$1 = ((((!((map__46526 == null)))?((((map__46526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46526):map__46526);
var opts = map__46526__$1;
var statearr_46528_46534 = state;
(statearr_46528_46534[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46526,map__46526__$1,opts){
return (function (val){
var statearr_46529_46535 = state;
(statearr_46529_46535[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46526,map__46526__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46530_46536 = state;
(statearr_46530_46536[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46521){
var G__46522 = cljs.core.first.call(null,seq46521);
var seq46521__$1 = cljs.core.next.call(null,seq46521);
var G__46523 = cljs.core.first.call(null,seq46521__$1);
var seq46521__$2 = cljs.core.next.call(null,seq46521__$1);
var G__46524 = cljs.core.first.call(null,seq46521__$2);
var seq46521__$3 = cljs.core.next.call(null,seq46521__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46522,G__46523,G__46524,seq46521__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46702 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46703){
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
this.meta46703 = meta46703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46704,meta46703__$1){
var self__ = this;
var _46704__$1 = this;
return (new cljs.core.async.t_cljs$core$async46702(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46703__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46704){
var self__ = this;
var _46704__$1 = this;
return self__.meta46703;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46702.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46703","meta46703",1813838807,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46702";

cljs.core.async.t_cljs$core$async46702.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async46702");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46702 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46702(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46703){
return (new cljs.core.async.t_cljs$core$async46702(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46703));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46702(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27930__auto___46867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___46867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___46867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46804){
var state_val_46805 = (state_46804[(1)]);
if((state_val_46805 === (7))){
var inst_46720 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46806_46868 = state_46804__$1;
(statearr_46806_46868[(2)] = inst_46720);

(statearr_46806_46868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (20))){
var inst_46732 = (state_46804[(7)]);
var state_46804__$1 = state_46804;
var statearr_46807_46869 = state_46804__$1;
(statearr_46807_46869[(2)] = inst_46732);

(statearr_46807_46869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (27))){
var state_46804__$1 = state_46804;
var statearr_46808_46870 = state_46804__$1;
(statearr_46808_46870[(2)] = null);

(statearr_46808_46870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (1))){
var inst_46708 = (state_46804[(8)]);
var inst_46708__$1 = calc_state.call(null);
var inst_46710 = (inst_46708__$1 == null);
var inst_46711 = cljs.core.not.call(null,inst_46710);
var state_46804__$1 = (function (){var statearr_46809 = state_46804;
(statearr_46809[(8)] = inst_46708__$1);

return statearr_46809;
})();
if(inst_46711){
var statearr_46810_46871 = state_46804__$1;
(statearr_46810_46871[(1)] = (2));

} else {
var statearr_46811_46872 = state_46804__$1;
(statearr_46811_46872[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (24))){
var inst_46764 = (state_46804[(9)]);
var inst_46755 = (state_46804[(10)]);
var inst_46778 = (state_46804[(11)]);
var inst_46778__$1 = inst_46755.call(null,inst_46764);
var state_46804__$1 = (function (){var statearr_46812 = state_46804;
(statearr_46812[(11)] = inst_46778__$1);

return statearr_46812;
})();
if(cljs.core.truth_(inst_46778__$1)){
var statearr_46813_46873 = state_46804__$1;
(statearr_46813_46873[(1)] = (29));

} else {
var statearr_46814_46874 = state_46804__$1;
(statearr_46814_46874[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (4))){
var inst_46723 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46723)){
var statearr_46815_46875 = state_46804__$1;
(statearr_46815_46875[(1)] = (8));

} else {
var statearr_46816_46876 = state_46804__$1;
(statearr_46816_46876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (15))){
var inst_46749 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46749)){
var statearr_46817_46877 = state_46804__$1;
(statearr_46817_46877[(1)] = (19));

} else {
var statearr_46818_46878 = state_46804__$1;
(statearr_46818_46878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (21))){
var inst_46754 = (state_46804[(12)]);
var inst_46754__$1 = (state_46804[(2)]);
var inst_46755 = cljs.core.get.call(null,inst_46754__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46756 = cljs.core.get.call(null,inst_46754__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46757 = cljs.core.get.call(null,inst_46754__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46804__$1 = (function (){var statearr_46819 = state_46804;
(statearr_46819[(12)] = inst_46754__$1);

(statearr_46819[(10)] = inst_46755);

(statearr_46819[(13)] = inst_46756);

return statearr_46819;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46804__$1,(22),inst_46757);
} else {
if((state_val_46805 === (31))){
var inst_46786 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46786)){
var statearr_46820_46879 = state_46804__$1;
(statearr_46820_46879[(1)] = (32));

} else {
var statearr_46821_46880 = state_46804__$1;
(statearr_46821_46880[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (32))){
var inst_46763 = (state_46804[(14)]);
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46804__$1,(35),out,inst_46763);
} else {
if((state_val_46805 === (33))){
var inst_46754 = (state_46804[(12)]);
var inst_46732 = inst_46754;
var state_46804__$1 = (function (){var statearr_46822 = state_46804;
(statearr_46822[(7)] = inst_46732);

return statearr_46822;
})();
var statearr_46823_46881 = state_46804__$1;
(statearr_46823_46881[(2)] = null);

(statearr_46823_46881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (13))){
var inst_46732 = (state_46804[(7)]);
var inst_46739 = inst_46732.cljs$lang$protocol_mask$partition0$;
var inst_46740 = (inst_46739 & (64));
var inst_46741 = inst_46732.cljs$core$ISeq$;
var inst_46742 = (inst_46740) || (inst_46741);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46742)){
var statearr_46824_46882 = state_46804__$1;
(statearr_46824_46882[(1)] = (16));

} else {
var statearr_46825_46883 = state_46804__$1;
(statearr_46825_46883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (22))){
var inst_46764 = (state_46804[(9)]);
var inst_46763 = (state_46804[(14)]);
var inst_46762 = (state_46804[(2)]);
var inst_46763__$1 = cljs.core.nth.call(null,inst_46762,(0),null);
var inst_46764__$1 = cljs.core.nth.call(null,inst_46762,(1),null);
var inst_46765 = (inst_46763__$1 == null);
var inst_46766 = cljs.core._EQ_.call(null,inst_46764__$1,change);
var inst_46767 = (inst_46765) || (inst_46766);
var state_46804__$1 = (function (){var statearr_46826 = state_46804;
(statearr_46826[(9)] = inst_46764__$1);

(statearr_46826[(14)] = inst_46763__$1);

return statearr_46826;
})();
if(cljs.core.truth_(inst_46767)){
var statearr_46827_46884 = state_46804__$1;
(statearr_46827_46884[(1)] = (23));

} else {
var statearr_46828_46885 = state_46804__$1;
(statearr_46828_46885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (36))){
var inst_46754 = (state_46804[(12)]);
var inst_46732 = inst_46754;
var state_46804__$1 = (function (){var statearr_46829 = state_46804;
(statearr_46829[(7)] = inst_46732);

return statearr_46829;
})();
var statearr_46830_46886 = state_46804__$1;
(statearr_46830_46886[(2)] = null);

(statearr_46830_46886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (29))){
var inst_46778 = (state_46804[(11)]);
var state_46804__$1 = state_46804;
var statearr_46831_46887 = state_46804__$1;
(statearr_46831_46887[(2)] = inst_46778);

(statearr_46831_46887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (6))){
var state_46804__$1 = state_46804;
var statearr_46832_46888 = state_46804__$1;
(statearr_46832_46888[(2)] = false);

(statearr_46832_46888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (28))){
var inst_46774 = (state_46804[(2)]);
var inst_46775 = calc_state.call(null);
var inst_46732 = inst_46775;
var state_46804__$1 = (function (){var statearr_46833 = state_46804;
(statearr_46833[(7)] = inst_46732);

(statearr_46833[(15)] = inst_46774);

return statearr_46833;
})();
var statearr_46834_46889 = state_46804__$1;
(statearr_46834_46889[(2)] = null);

(statearr_46834_46889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (25))){
var inst_46800 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46835_46890 = state_46804__$1;
(statearr_46835_46890[(2)] = inst_46800);

(statearr_46835_46890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (34))){
var inst_46798 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46836_46891 = state_46804__$1;
(statearr_46836_46891[(2)] = inst_46798);

(statearr_46836_46891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (17))){
var state_46804__$1 = state_46804;
var statearr_46837_46892 = state_46804__$1;
(statearr_46837_46892[(2)] = false);

(statearr_46837_46892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (3))){
var state_46804__$1 = state_46804;
var statearr_46838_46893 = state_46804__$1;
(statearr_46838_46893[(2)] = false);

(statearr_46838_46893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (12))){
var inst_46802 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46804__$1,inst_46802);
} else {
if((state_val_46805 === (2))){
var inst_46708 = (state_46804[(8)]);
var inst_46713 = inst_46708.cljs$lang$protocol_mask$partition0$;
var inst_46714 = (inst_46713 & (64));
var inst_46715 = inst_46708.cljs$core$ISeq$;
var inst_46716 = (inst_46714) || (inst_46715);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46716)){
var statearr_46839_46894 = state_46804__$1;
(statearr_46839_46894[(1)] = (5));

} else {
var statearr_46840_46895 = state_46804__$1;
(statearr_46840_46895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (23))){
var inst_46763 = (state_46804[(14)]);
var inst_46769 = (inst_46763 == null);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46769)){
var statearr_46841_46896 = state_46804__$1;
(statearr_46841_46896[(1)] = (26));

} else {
var statearr_46842_46897 = state_46804__$1;
(statearr_46842_46897[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (35))){
var inst_46789 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46789)){
var statearr_46843_46898 = state_46804__$1;
(statearr_46843_46898[(1)] = (36));

} else {
var statearr_46844_46899 = state_46804__$1;
(statearr_46844_46899[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (19))){
var inst_46732 = (state_46804[(7)]);
var inst_46751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46732);
var state_46804__$1 = state_46804;
var statearr_46845_46900 = state_46804__$1;
(statearr_46845_46900[(2)] = inst_46751);

(statearr_46845_46900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (11))){
var inst_46732 = (state_46804[(7)]);
var inst_46736 = (inst_46732 == null);
var inst_46737 = cljs.core.not.call(null,inst_46736);
var state_46804__$1 = state_46804;
if(inst_46737){
var statearr_46846_46901 = state_46804__$1;
(statearr_46846_46901[(1)] = (13));

} else {
var statearr_46847_46902 = state_46804__$1;
(statearr_46847_46902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (9))){
var inst_46708 = (state_46804[(8)]);
var state_46804__$1 = state_46804;
var statearr_46848_46903 = state_46804__$1;
(statearr_46848_46903[(2)] = inst_46708);

(statearr_46848_46903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (5))){
var state_46804__$1 = state_46804;
var statearr_46849_46904 = state_46804__$1;
(statearr_46849_46904[(2)] = true);

(statearr_46849_46904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (14))){
var state_46804__$1 = state_46804;
var statearr_46850_46905 = state_46804__$1;
(statearr_46850_46905[(2)] = false);

(statearr_46850_46905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (26))){
var inst_46764 = (state_46804[(9)]);
var inst_46771 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46764);
var state_46804__$1 = state_46804;
var statearr_46851_46906 = state_46804__$1;
(statearr_46851_46906[(2)] = inst_46771);

(statearr_46851_46906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (16))){
var state_46804__$1 = state_46804;
var statearr_46852_46907 = state_46804__$1;
(statearr_46852_46907[(2)] = true);

(statearr_46852_46907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (38))){
var inst_46794 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46853_46908 = state_46804__$1;
(statearr_46853_46908[(2)] = inst_46794);

(statearr_46853_46908[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (30))){
var inst_46764 = (state_46804[(9)]);
var inst_46755 = (state_46804[(10)]);
var inst_46756 = (state_46804[(13)]);
var inst_46781 = cljs.core.empty_QMARK_.call(null,inst_46755);
var inst_46782 = inst_46756.call(null,inst_46764);
var inst_46783 = cljs.core.not.call(null,inst_46782);
var inst_46784 = (inst_46781) && (inst_46783);
var state_46804__$1 = state_46804;
var statearr_46854_46909 = state_46804__$1;
(statearr_46854_46909[(2)] = inst_46784);

(statearr_46854_46909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (10))){
var inst_46708 = (state_46804[(8)]);
var inst_46728 = (state_46804[(2)]);
var inst_46729 = cljs.core.get.call(null,inst_46728,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46730 = cljs.core.get.call(null,inst_46728,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46731 = cljs.core.get.call(null,inst_46728,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46732 = inst_46708;
var state_46804__$1 = (function (){var statearr_46855 = state_46804;
(statearr_46855[(7)] = inst_46732);

(statearr_46855[(16)] = inst_46731);

(statearr_46855[(17)] = inst_46730);

(statearr_46855[(18)] = inst_46729);

return statearr_46855;
})();
var statearr_46856_46910 = state_46804__$1;
(statearr_46856_46910[(2)] = null);

(statearr_46856_46910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (18))){
var inst_46746 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46857_46911 = state_46804__$1;
(statearr_46857_46911[(2)] = inst_46746);

(statearr_46857_46911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (37))){
var state_46804__$1 = state_46804;
var statearr_46858_46912 = state_46804__$1;
(statearr_46858_46912[(2)] = null);

(statearr_46858_46912[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46805 === (8))){
var inst_46708 = (state_46804[(8)]);
var inst_46725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46708);
var state_46804__$1 = state_46804;
var statearr_46859_46913 = state_46804__$1;
(statearr_46859_46913[(2)] = inst_46725);

(statearr_46859_46913[(1)] = (10));


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
});})(c__27930__auto___46867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27865__auto__,c__27930__auto___46867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27866__auto__ = null;
var cljs$core$async$mix_$_state_machine__27866__auto____0 = (function (){
var statearr_46863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46863[(0)] = cljs$core$async$mix_$_state_machine__27866__auto__);

(statearr_46863[(1)] = (1));

return statearr_46863;
});
var cljs$core$async$mix_$_state_machine__27866__auto____1 = (function (state_46804){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_46804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e46864){if((e46864 instanceof Object)){
var ex__27869__auto__ = e46864;
var statearr_46865_46914 = state_46804;
(statearr_46865_46914[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46915 = state_46804;
state_46804 = G__46915;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27866__auto__ = function(state_46804){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27866__auto____1.call(this,state_46804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27866__auto____0;
cljs$core$async$mix_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27866__auto____1;
return cljs$core$async$mix_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___46867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27932__auto__ = (function (){var statearr_46866 = f__27931__auto__.call(null);
(statearr_46866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___46867);

return statearr_46866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___46867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25415__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p,v,ch);
} else {
var m__25415__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46916 = [];
var len__25826__auto___46919 = arguments.length;
var i__25827__auto___46920 = (0);
while(true){
if((i__25827__auto___46920 < len__25826__auto___46919)){
args46916.push((arguments[i__25827__auto___46920]));

var G__46921 = (i__25827__auto___46920 + (1));
i__25827__auto___46920 = G__46921;
continue;
} else {
}
break;
}

var G__46918 = args46916.length;
switch (G__46918) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46916.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p);
} else {
var m__25415__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p);
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
var x__25414__auto__ = (((p == null))?null:p);
var m__25415__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25414__auto__)]);
if(!((m__25415__auto__ == null))){
return m__25415__auto__.call(null,p,v);
} else {
var m__25415__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25415__auto____$1 == null))){
return m__25415__auto____$1.call(null,p,v);
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
var args46924 = [];
var len__25826__auto___47049 = arguments.length;
var i__25827__auto___47050 = (0);
while(true){
if((i__25827__auto___47050 < len__25826__auto___47049)){
args46924.push((arguments[i__25827__auto___47050]));

var G__47051 = (i__25827__auto___47050 + (1));
i__25827__auto___47050 = G__47051;
continue;
} else {
}
break;
}

var G__46926 = args46924.length;
switch (G__46926) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46924.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24751__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24751__auto__,mults){
return (function (p1__46923_SHARP_){
if(cljs.core.truth_(p1__46923_SHARP_.call(null,topic))){
return p1__46923_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46923_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46927 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46928){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46928 = meta46928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46929,meta46928__$1){
var self__ = this;
var _46929__$1 = this;
return (new cljs.core.async.t_cljs$core$async46927(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46928__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46929){
var self__ = this;
var _46929__$1 = this;
return self__.meta46928;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46928","meta46928",-720120781,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46927";

cljs.core.async.t_cljs$core$async46927.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async46927");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46927 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46927(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46928){
return (new cljs.core.async.t_cljs$core$async46927(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46928));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46927(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27930__auto___47053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47053,mults,ensure_mult,p){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47053,mults,ensure_mult,p){
return (function (state_47001){
var state_val_47002 = (state_47001[(1)]);
if((state_val_47002 === (7))){
var inst_46997 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47003_47054 = state_47001__$1;
(statearr_47003_47054[(2)] = inst_46997);

(statearr_47003_47054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (20))){
var state_47001__$1 = state_47001;
var statearr_47004_47055 = state_47001__$1;
(statearr_47004_47055[(2)] = null);

(statearr_47004_47055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (1))){
var state_47001__$1 = state_47001;
var statearr_47005_47056 = state_47001__$1;
(statearr_47005_47056[(2)] = null);

(statearr_47005_47056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (24))){
var inst_46980 = (state_47001[(7)]);
var inst_46989 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46980);
var state_47001__$1 = state_47001;
var statearr_47006_47057 = state_47001__$1;
(statearr_47006_47057[(2)] = inst_46989);

(statearr_47006_47057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (4))){
var inst_46932 = (state_47001[(8)]);
var inst_46932__$1 = (state_47001[(2)]);
var inst_46933 = (inst_46932__$1 == null);
var state_47001__$1 = (function (){var statearr_47007 = state_47001;
(statearr_47007[(8)] = inst_46932__$1);

return statearr_47007;
})();
if(cljs.core.truth_(inst_46933)){
var statearr_47008_47058 = state_47001__$1;
(statearr_47008_47058[(1)] = (5));

} else {
var statearr_47009_47059 = state_47001__$1;
(statearr_47009_47059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (15))){
var inst_46974 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47010_47060 = state_47001__$1;
(statearr_47010_47060[(2)] = inst_46974);

(statearr_47010_47060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (21))){
var inst_46994 = (state_47001[(2)]);
var state_47001__$1 = (function (){var statearr_47011 = state_47001;
(statearr_47011[(9)] = inst_46994);

return statearr_47011;
})();
var statearr_47012_47061 = state_47001__$1;
(statearr_47012_47061[(2)] = null);

(statearr_47012_47061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (13))){
var inst_46956 = (state_47001[(10)]);
var inst_46958 = cljs.core.chunked_seq_QMARK_.call(null,inst_46956);
var state_47001__$1 = state_47001;
if(inst_46958){
var statearr_47013_47062 = state_47001__$1;
(statearr_47013_47062[(1)] = (16));

} else {
var statearr_47014_47063 = state_47001__$1;
(statearr_47014_47063[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (22))){
var inst_46986 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
if(cljs.core.truth_(inst_46986)){
var statearr_47015_47064 = state_47001__$1;
(statearr_47015_47064[(1)] = (23));

} else {
var statearr_47016_47065 = state_47001__$1;
(statearr_47016_47065[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (6))){
var inst_46982 = (state_47001[(11)]);
var inst_46980 = (state_47001[(7)]);
var inst_46932 = (state_47001[(8)]);
var inst_46980__$1 = topic_fn.call(null,inst_46932);
var inst_46981 = cljs.core.deref.call(null,mults);
var inst_46982__$1 = cljs.core.get.call(null,inst_46981,inst_46980__$1);
var state_47001__$1 = (function (){var statearr_47017 = state_47001;
(statearr_47017[(11)] = inst_46982__$1);

(statearr_47017[(7)] = inst_46980__$1);

return statearr_47017;
})();
if(cljs.core.truth_(inst_46982__$1)){
var statearr_47018_47066 = state_47001__$1;
(statearr_47018_47066[(1)] = (19));

} else {
var statearr_47019_47067 = state_47001__$1;
(statearr_47019_47067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (25))){
var inst_46991 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47020_47068 = state_47001__$1;
(statearr_47020_47068[(2)] = inst_46991);

(statearr_47020_47068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (17))){
var inst_46956 = (state_47001[(10)]);
var inst_46965 = cljs.core.first.call(null,inst_46956);
var inst_46966 = cljs.core.async.muxch_STAR_.call(null,inst_46965);
var inst_46967 = cljs.core.async.close_BANG_.call(null,inst_46966);
var inst_46968 = cljs.core.next.call(null,inst_46956);
var inst_46942 = inst_46968;
var inst_46943 = null;
var inst_46944 = (0);
var inst_46945 = (0);
var state_47001__$1 = (function (){var statearr_47021 = state_47001;
(statearr_47021[(12)] = inst_46945);

(statearr_47021[(13)] = inst_46944);

(statearr_47021[(14)] = inst_46942);

(statearr_47021[(15)] = inst_46967);

(statearr_47021[(16)] = inst_46943);

return statearr_47021;
})();
var statearr_47022_47069 = state_47001__$1;
(statearr_47022_47069[(2)] = null);

(statearr_47022_47069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (3))){
var inst_46999 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47001__$1,inst_46999);
} else {
if((state_val_47002 === (12))){
var inst_46976 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47023_47070 = state_47001__$1;
(statearr_47023_47070[(2)] = inst_46976);

(statearr_47023_47070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (2))){
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47001__$1,(4),ch);
} else {
if((state_val_47002 === (23))){
var state_47001__$1 = state_47001;
var statearr_47024_47071 = state_47001__$1;
(statearr_47024_47071[(2)] = null);

(statearr_47024_47071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (19))){
var inst_46982 = (state_47001[(11)]);
var inst_46932 = (state_47001[(8)]);
var inst_46984 = cljs.core.async.muxch_STAR_.call(null,inst_46982);
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47001__$1,(22),inst_46984,inst_46932);
} else {
if((state_val_47002 === (11))){
var inst_46942 = (state_47001[(14)]);
var inst_46956 = (state_47001[(10)]);
var inst_46956__$1 = cljs.core.seq.call(null,inst_46942);
var state_47001__$1 = (function (){var statearr_47025 = state_47001;
(statearr_47025[(10)] = inst_46956__$1);

return statearr_47025;
})();
if(inst_46956__$1){
var statearr_47026_47072 = state_47001__$1;
(statearr_47026_47072[(1)] = (13));

} else {
var statearr_47027_47073 = state_47001__$1;
(statearr_47027_47073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (9))){
var inst_46978 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47028_47074 = state_47001__$1;
(statearr_47028_47074[(2)] = inst_46978);

(statearr_47028_47074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (5))){
var inst_46939 = cljs.core.deref.call(null,mults);
var inst_46940 = cljs.core.vals.call(null,inst_46939);
var inst_46941 = cljs.core.seq.call(null,inst_46940);
var inst_46942 = inst_46941;
var inst_46943 = null;
var inst_46944 = (0);
var inst_46945 = (0);
var state_47001__$1 = (function (){var statearr_47029 = state_47001;
(statearr_47029[(12)] = inst_46945);

(statearr_47029[(13)] = inst_46944);

(statearr_47029[(14)] = inst_46942);

(statearr_47029[(16)] = inst_46943);

return statearr_47029;
})();
var statearr_47030_47075 = state_47001__$1;
(statearr_47030_47075[(2)] = null);

(statearr_47030_47075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (14))){
var state_47001__$1 = state_47001;
var statearr_47034_47076 = state_47001__$1;
(statearr_47034_47076[(2)] = null);

(statearr_47034_47076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (16))){
var inst_46956 = (state_47001[(10)]);
var inst_46960 = cljs.core.chunk_first.call(null,inst_46956);
var inst_46961 = cljs.core.chunk_rest.call(null,inst_46956);
var inst_46962 = cljs.core.count.call(null,inst_46960);
var inst_46942 = inst_46961;
var inst_46943 = inst_46960;
var inst_46944 = inst_46962;
var inst_46945 = (0);
var state_47001__$1 = (function (){var statearr_47035 = state_47001;
(statearr_47035[(12)] = inst_46945);

(statearr_47035[(13)] = inst_46944);

(statearr_47035[(14)] = inst_46942);

(statearr_47035[(16)] = inst_46943);

return statearr_47035;
})();
var statearr_47036_47077 = state_47001__$1;
(statearr_47036_47077[(2)] = null);

(statearr_47036_47077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (10))){
var inst_46945 = (state_47001[(12)]);
var inst_46944 = (state_47001[(13)]);
var inst_46942 = (state_47001[(14)]);
var inst_46943 = (state_47001[(16)]);
var inst_46950 = cljs.core._nth.call(null,inst_46943,inst_46945);
var inst_46951 = cljs.core.async.muxch_STAR_.call(null,inst_46950);
var inst_46952 = cljs.core.async.close_BANG_.call(null,inst_46951);
var inst_46953 = (inst_46945 + (1));
var tmp47031 = inst_46944;
var tmp47032 = inst_46942;
var tmp47033 = inst_46943;
var inst_46942__$1 = tmp47032;
var inst_46943__$1 = tmp47033;
var inst_46944__$1 = tmp47031;
var inst_46945__$1 = inst_46953;
var state_47001__$1 = (function (){var statearr_47037 = state_47001;
(statearr_47037[(12)] = inst_46945__$1);

(statearr_47037[(13)] = inst_46944__$1);

(statearr_47037[(14)] = inst_46942__$1);

(statearr_47037[(17)] = inst_46952);

(statearr_47037[(16)] = inst_46943__$1);

return statearr_47037;
})();
var statearr_47038_47078 = state_47001__$1;
(statearr_47038_47078[(2)] = null);

(statearr_47038_47078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (18))){
var inst_46971 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47039_47079 = state_47001__$1;
(statearr_47039_47079[(2)] = inst_46971);

(statearr_47039_47079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (8))){
var inst_46945 = (state_47001[(12)]);
var inst_46944 = (state_47001[(13)]);
var inst_46947 = (inst_46945 < inst_46944);
var inst_46948 = inst_46947;
var state_47001__$1 = state_47001;
if(cljs.core.truth_(inst_46948)){
var statearr_47040_47080 = state_47001__$1;
(statearr_47040_47080[(1)] = (10));

} else {
var statearr_47041_47081 = state_47001__$1;
(statearr_47041_47081[(1)] = (11));

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
});})(c__27930__auto___47053,mults,ensure_mult,p))
;
return ((function (switch__27865__auto__,c__27930__auto___47053,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47045[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47045[(1)] = (1));

return statearr_47045;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47001){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47046){if((e47046 instanceof Object)){
var ex__27869__auto__ = e47046;
var statearr_47047_47082 = state_47001;
(statearr_47047_47082[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47083 = state_47001;
state_47001 = G__47083;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47053,mults,ensure_mult,p))
})();
var state__27932__auto__ = (function (){var statearr_47048 = f__27931__auto__.call(null);
(statearr_47048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47053);

return statearr_47048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47053,mults,ensure_mult,p))
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
var args47084 = [];
var len__25826__auto___47087 = arguments.length;
var i__25827__auto___47088 = (0);
while(true){
if((i__25827__auto___47088 < len__25826__auto___47087)){
args47084.push((arguments[i__25827__auto___47088]));

var G__47089 = (i__25827__auto___47088 + (1));
i__25827__auto___47088 = G__47089;
continue;
} else {
}
break;
}

var G__47086 = args47084.length;
switch (G__47086) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47084.length)].join('')));

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
var args47091 = [];
var len__25826__auto___47094 = arguments.length;
var i__25827__auto___47095 = (0);
while(true){
if((i__25827__auto___47095 < len__25826__auto___47094)){
args47091.push((arguments[i__25827__auto___47095]));

var G__47096 = (i__25827__auto___47095 + (1));
i__25827__auto___47095 = G__47096;
continue;
} else {
}
break;
}

var G__47093 = args47091.length;
switch (G__47093) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47091.length)].join('')));

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
var args47098 = [];
var len__25826__auto___47169 = arguments.length;
var i__25827__auto___47170 = (0);
while(true){
if((i__25827__auto___47170 < len__25826__auto___47169)){
args47098.push((arguments[i__25827__auto___47170]));

var G__47171 = (i__25827__auto___47170 + (1));
i__25827__auto___47170 = G__47171;
continue;
} else {
}
break;
}

var G__47100 = args47098.length;
switch (G__47100) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47098.length)].join('')));

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
var c__27930__auto___47173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47139){
var state_val_47140 = (state_47139[(1)]);
if((state_val_47140 === (7))){
var state_47139__$1 = state_47139;
var statearr_47141_47174 = state_47139__$1;
(statearr_47141_47174[(2)] = null);

(statearr_47141_47174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (1))){
var state_47139__$1 = state_47139;
var statearr_47142_47175 = state_47139__$1;
(statearr_47142_47175[(2)] = null);

(statearr_47142_47175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (4))){
var inst_47103 = (state_47139[(7)]);
var inst_47105 = (inst_47103 < cnt);
var state_47139__$1 = state_47139;
if(cljs.core.truth_(inst_47105)){
var statearr_47143_47176 = state_47139__$1;
(statearr_47143_47176[(1)] = (6));

} else {
var statearr_47144_47177 = state_47139__$1;
(statearr_47144_47177[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (15))){
var inst_47135 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47145_47178 = state_47139__$1;
(statearr_47145_47178[(2)] = inst_47135);

(statearr_47145_47178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (13))){
var inst_47128 = cljs.core.async.close_BANG_.call(null,out);
var state_47139__$1 = state_47139;
var statearr_47146_47179 = state_47139__$1;
(statearr_47146_47179[(2)] = inst_47128);

(statearr_47146_47179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (6))){
var state_47139__$1 = state_47139;
var statearr_47147_47180 = state_47139__$1;
(statearr_47147_47180[(2)] = null);

(statearr_47147_47180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (3))){
var inst_47137 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47139__$1,inst_47137);
} else {
if((state_val_47140 === (12))){
var inst_47125 = (state_47139[(8)]);
var inst_47125__$1 = (state_47139[(2)]);
var inst_47126 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47125__$1);
var state_47139__$1 = (function (){var statearr_47148 = state_47139;
(statearr_47148[(8)] = inst_47125__$1);

return statearr_47148;
})();
if(cljs.core.truth_(inst_47126)){
var statearr_47149_47181 = state_47139__$1;
(statearr_47149_47181[(1)] = (13));

} else {
var statearr_47150_47182 = state_47139__$1;
(statearr_47150_47182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (2))){
var inst_47102 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47103 = (0);
var state_47139__$1 = (function (){var statearr_47151 = state_47139;
(statearr_47151[(9)] = inst_47102);

(statearr_47151[(7)] = inst_47103);

return statearr_47151;
})();
var statearr_47152_47183 = state_47139__$1;
(statearr_47152_47183[(2)] = null);

(statearr_47152_47183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (11))){
var inst_47103 = (state_47139[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47139,(10),Object,null,(9));
var inst_47112 = chs__$1.call(null,inst_47103);
var inst_47113 = done.call(null,inst_47103);
var inst_47114 = cljs.core.async.take_BANG_.call(null,inst_47112,inst_47113);
var state_47139__$1 = state_47139;
var statearr_47153_47184 = state_47139__$1;
(statearr_47153_47184[(2)] = inst_47114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47139__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (9))){
var inst_47103 = (state_47139[(7)]);
var inst_47116 = (state_47139[(2)]);
var inst_47117 = (inst_47103 + (1));
var inst_47103__$1 = inst_47117;
var state_47139__$1 = (function (){var statearr_47154 = state_47139;
(statearr_47154[(10)] = inst_47116);

(statearr_47154[(7)] = inst_47103__$1);

return statearr_47154;
})();
var statearr_47155_47185 = state_47139__$1;
(statearr_47155_47185[(2)] = null);

(statearr_47155_47185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (5))){
var inst_47123 = (state_47139[(2)]);
var state_47139__$1 = (function (){var statearr_47156 = state_47139;
(statearr_47156[(11)] = inst_47123);

return statearr_47156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47139__$1,(12),dchan);
} else {
if((state_val_47140 === (14))){
var inst_47125 = (state_47139[(8)]);
var inst_47130 = cljs.core.apply.call(null,f,inst_47125);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47139__$1,(16),out,inst_47130);
} else {
if((state_val_47140 === (16))){
var inst_47132 = (state_47139[(2)]);
var state_47139__$1 = (function (){var statearr_47157 = state_47139;
(statearr_47157[(12)] = inst_47132);

return statearr_47157;
})();
var statearr_47158_47186 = state_47139__$1;
(statearr_47158_47186[(2)] = null);

(statearr_47158_47186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (10))){
var inst_47107 = (state_47139[(2)]);
var inst_47108 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47139__$1 = (function (){var statearr_47159 = state_47139;
(statearr_47159[(13)] = inst_47107);

return statearr_47159;
})();
var statearr_47160_47187 = state_47139__$1;
(statearr_47160_47187[(2)] = inst_47108);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47139__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (8))){
var inst_47121 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47161_47188 = state_47139__$1;
(statearr_47161_47188[(2)] = inst_47121);

(statearr_47161_47188[(1)] = (5));


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
});})(c__27930__auto___47173,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27865__auto__,c__27930__auto___47173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47165[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47165[(1)] = (1));

return statearr_47165;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47139){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47166){if((e47166 instanceof Object)){
var ex__27869__auto__ = e47166;
var statearr_47167_47189 = state_47139;
(statearr_47167_47189[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47190 = state_47139;
state_47139 = G__47190;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47173,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27932__auto__ = (function (){var statearr_47168 = f__27931__auto__.call(null);
(statearr_47168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47173);

return statearr_47168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47173,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args47192 = [];
var len__25826__auto___47250 = arguments.length;
var i__25827__auto___47251 = (0);
while(true){
if((i__25827__auto___47251 < len__25826__auto___47250)){
args47192.push((arguments[i__25827__auto___47251]));

var G__47252 = (i__25827__auto___47251 + (1));
i__25827__auto___47251 = G__47252;
continue;
} else {
}
break;
}

var G__47194 = args47192.length;
switch (G__47194) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47192.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___47254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47254,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47254,out){
return (function (state_47226){
var state_val_47227 = (state_47226[(1)]);
if((state_val_47227 === (7))){
var inst_47205 = (state_47226[(7)]);
var inst_47206 = (state_47226[(8)]);
var inst_47205__$1 = (state_47226[(2)]);
var inst_47206__$1 = cljs.core.nth.call(null,inst_47205__$1,(0),null);
var inst_47207 = cljs.core.nth.call(null,inst_47205__$1,(1),null);
var inst_47208 = (inst_47206__$1 == null);
var state_47226__$1 = (function (){var statearr_47228 = state_47226;
(statearr_47228[(9)] = inst_47207);

(statearr_47228[(7)] = inst_47205__$1);

(statearr_47228[(8)] = inst_47206__$1);

return statearr_47228;
})();
if(cljs.core.truth_(inst_47208)){
var statearr_47229_47255 = state_47226__$1;
(statearr_47229_47255[(1)] = (8));

} else {
var statearr_47230_47256 = state_47226__$1;
(statearr_47230_47256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (1))){
var inst_47195 = cljs.core.vec.call(null,chs);
var inst_47196 = inst_47195;
var state_47226__$1 = (function (){var statearr_47231 = state_47226;
(statearr_47231[(10)] = inst_47196);

return statearr_47231;
})();
var statearr_47232_47257 = state_47226__$1;
(statearr_47232_47257[(2)] = null);

(statearr_47232_47257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (4))){
var inst_47196 = (state_47226[(10)]);
var state_47226__$1 = state_47226;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47226__$1,(7),inst_47196);
} else {
if((state_val_47227 === (6))){
var inst_47222 = (state_47226[(2)]);
var state_47226__$1 = state_47226;
var statearr_47233_47258 = state_47226__$1;
(statearr_47233_47258[(2)] = inst_47222);

(statearr_47233_47258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (3))){
var inst_47224 = (state_47226[(2)]);
var state_47226__$1 = state_47226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47226__$1,inst_47224);
} else {
if((state_val_47227 === (2))){
var inst_47196 = (state_47226[(10)]);
var inst_47198 = cljs.core.count.call(null,inst_47196);
var inst_47199 = (inst_47198 > (0));
var state_47226__$1 = state_47226;
if(cljs.core.truth_(inst_47199)){
var statearr_47235_47259 = state_47226__$1;
(statearr_47235_47259[(1)] = (4));

} else {
var statearr_47236_47260 = state_47226__$1;
(statearr_47236_47260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (11))){
var inst_47196 = (state_47226[(10)]);
var inst_47215 = (state_47226[(2)]);
var tmp47234 = inst_47196;
var inst_47196__$1 = tmp47234;
var state_47226__$1 = (function (){var statearr_47237 = state_47226;
(statearr_47237[(11)] = inst_47215);

(statearr_47237[(10)] = inst_47196__$1);

return statearr_47237;
})();
var statearr_47238_47261 = state_47226__$1;
(statearr_47238_47261[(2)] = null);

(statearr_47238_47261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (9))){
var inst_47206 = (state_47226[(8)]);
var state_47226__$1 = state_47226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47226__$1,(11),out,inst_47206);
} else {
if((state_val_47227 === (5))){
var inst_47220 = cljs.core.async.close_BANG_.call(null,out);
var state_47226__$1 = state_47226;
var statearr_47239_47262 = state_47226__$1;
(statearr_47239_47262[(2)] = inst_47220);

(statearr_47239_47262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (10))){
var inst_47218 = (state_47226[(2)]);
var state_47226__$1 = state_47226;
var statearr_47240_47263 = state_47226__$1;
(statearr_47240_47263[(2)] = inst_47218);

(statearr_47240_47263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47227 === (8))){
var inst_47207 = (state_47226[(9)]);
var inst_47205 = (state_47226[(7)]);
var inst_47196 = (state_47226[(10)]);
var inst_47206 = (state_47226[(8)]);
var inst_47210 = (function (){var cs = inst_47196;
var vec__47201 = inst_47205;
var v = inst_47206;
var c = inst_47207;
return ((function (cs,vec__47201,v,c,inst_47207,inst_47205,inst_47196,inst_47206,state_val_47227,c__27930__auto___47254,out){
return (function (p1__47191_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47191_SHARP_);
});
;})(cs,vec__47201,v,c,inst_47207,inst_47205,inst_47196,inst_47206,state_val_47227,c__27930__auto___47254,out))
})();
var inst_47211 = cljs.core.filterv.call(null,inst_47210,inst_47196);
var inst_47196__$1 = inst_47211;
var state_47226__$1 = (function (){var statearr_47241 = state_47226;
(statearr_47241[(10)] = inst_47196__$1);

return statearr_47241;
})();
var statearr_47242_47264 = state_47226__$1;
(statearr_47242_47264[(2)] = null);

(statearr_47242_47264[(1)] = (2));


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
});})(c__27930__auto___47254,out))
;
return ((function (switch__27865__auto__,c__27930__auto___47254,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47246 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47246[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47246[(1)] = (1));

return statearr_47246;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47226){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47247){if((e47247 instanceof Object)){
var ex__27869__auto__ = e47247;
var statearr_47248_47265 = state_47226;
(statearr_47248_47265[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47266 = state_47226;
state_47226 = G__47266;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47254,out))
})();
var state__27932__auto__ = (function (){var statearr_47249 = f__27931__auto__.call(null);
(statearr_47249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47254);

return statearr_47249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47254,out))
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
var args47267 = [];
var len__25826__auto___47316 = arguments.length;
var i__25827__auto___47317 = (0);
while(true){
if((i__25827__auto___47317 < len__25826__auto___47316)){
args47267.push((arguments[i__25827__auto___47317]));

var G__47318 = (i__25827__auto___47317 + (1));
i__25827__auto___47317 = G__47318;
continue;
} else {
}
break;
}

var G__47269 = args47267.length;
switch (G__47269) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47267.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___47320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47320,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47320,out){
return (function (state_47293){
var state_val_47294 = (state_47293[(1)]);
if((state_val_47294 === (7))){
var inst_47275 = (state_47293[(7)]);
var inst_47275__$1 = (state_47293[(2)]);
var inst_47276 = (inst_47275__$1 == null);
var inst_47277 = cljs.core.not.call(null,inst_47276);
var state_47293__$1 = (function (){var statearr_47295 = state_47293;
(statearr_47295[(7)] = inst_47275__$1);

return statearr_47295;
})();
if(inst_47277){
var statearr_47296_47321 = state_47293__$1;
(statearr_47296_47321[(1)] = (8));

} else {
var statearr_47297_47322 = state_47293__$1;
(statearr_47297_47322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (1))){
var inst_47270 = (0);
var state_47293__$1 = (function (){var statearr_47298 = state_47293;
(statearr_47298[(8)] = inst_47270);

return statearr_47298;
})();
var statearr_47299_47323 = state_47293__$1;
(statearr_47299_47323[(2)] = null);

(statearr_47299_47323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (4))){
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47293__$1,(7),ch);
} else {
if((state_val_47294 === (6))){
var inst_47288 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
var statearr_47300_47324 = state_47293__$1;
(statearr_47300_47324[(2)] = inst_47288);

(statearr_47300_47324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (3))){
var inst_47290 = (state_47293[(2)]);
var inst_47291 = cljs.core.async.close_BANG_.call(null,out);
var state_47293__$1 = (function (){var statearr_47301 = state_47293;
(statearr_47301[(9)] = inst_47290);

return statearr_47301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47293__$1,inst_47291);
} else {
if((state_val_47294 === (2))){
var inst_47270 = (state_47293[(8)]);
var inst_47272 = (inst_47270 < n);
var state_47293__$1 = state_47293;
if(cljs.core.truth_(inst_47272)){
var statearr_47302_47325 = state_47293__$1;
(statearr_47302_47325[(1)] = (4));

} else {
var statearr_47303_47326 = state_47293__$1;
(statearr_47303_47326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (11))){
var inst_47270 = (state_47293[(8)]);
var inst_47280 = (state_47293[(2)]);
var inst_47281 = (inst_47270 + (1));
var inst_47270__$1 = inst_47281;
var state_47293__$1 = (function (){var statearr_47304 = state_47293;
(statearr_47304[(10)] = inst_47280);

(statearr_47304[(8)] = inst_47270__$1);

return statearr_47304;
})();
var statearr_47305_47327 = state_47293__$1;
(statearr_47305_47327[(2)] = null);

(statearr_47305_47327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (9))){
var state_47293__$1 = state_47293;
var statearr_47306_47328 = state_47293__$1;
(statearr_47306_47328[(2)] = null);

(statearr_47306_47328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (5))){
var state_47293__$1 = state_47293;
var statearr_47307_47329 = state_47293__$1;
(statearr_47307_47329[(2)] = null);

(statearr_47307_47329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (10))){
var inst_47285 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
var statearr_47308_47330 = state_47293__$1;
(statearr_47308_47330[(2)] = inst_47285);

(statearr_47308_47330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (8))){
var inst_47275 = (state_47293[(7)]);
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47293__$1,(11),out,inst_47275);
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
});})(c__27930__auto___47320,out))
;
return ((function (switch__27865__auto__,c__27930__auto___47320,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47312[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47312[(1)] = (1));

return statearr_47312;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47293){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47313){if((e47313 instanceof Object)){
var ex__27869__auto__ = e47313;
var statearr_47314_47331 = state_47293;
(statearr_47314_47331[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47332 = state_47293;
state_47293 = G__47332;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47320,out))
})();
var state__27932__auto__ = (function (){var statearr_47315 = f__27931__auto__.call(null);
(statearr_47315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47320);

return statearr_47315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47320,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47340 = (function (map_LT_,f,ch,meta47341){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47341 = meta47341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47342,meta47341__$1){
var self__ = this;
var _47342__$1 = this;
return (new cljs.core.async.t_cljs$core$async47340(self__.map_LT_,self__.f,self__.ch,meta47341__$1));
});

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47342){
var self__ = this;
var _47342__$1 = this;
return self__.meta47341;
});

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47343 = (function (map_LT_,f,ch,meta47341,_,fn1,meta47344){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47341 = meta47341;
this._ = _;
this.fn1 = fn1;
this.meta47344 = meta47344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47345,meta47344__$1){
var self__ = this;
var _47345__$1 = this;
return (new cljs.core.async.t_cljs$core$async47343(self__.map_LT_,self__.f,self__.ch,self__.meta47341,self__._,self__.fn1,meta47344__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47345){
var self__ = this;
var _47345__$1 = this;
return self__.meta47344;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47343.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47333_SHARP_){
return f1.call(null,(((p1__47333_SHARP_ == null))?null:self__.f.call(null,p1__47333_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47343.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47341","meta47341",-804644825,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47340","cljs.core.async/t_cljs$core$async47340",-1561880987,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47344","meta47344",2119057532,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47343";

cljs.core.async.t_cljs$core$async47343.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async47343");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47343 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47343(map_LT___$1,f__$1,ch__$1,meta47341__$1,___$2,fn1__$1,meta47344){
return (new cljs.core.async.t_cljs$core$async47343(map_LT___$1,f__$1,ch__$1,meta47341__$1,___$2,fn1__$1,meta47344));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47343(self__.map_LT_,self__.f,self__.ch,self__.meta47341,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24739__auto__ = ret;
if(cljs.core.truth_(and__24739__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47341","meta47341",-804644825,null)], null);
});

cljs.core.async.t_cljs$core$async47340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47340";

cljs.core.async.t_cljs$core$async47340.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async47340");
});

cljs.core.async.__GT_t_cljs$core$async47340 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47340(map_LT___$1,f__$1,ch__$1,meta47341){
return (new cljs.core.async.t_cljs$core$async47340(map_LT___$1,f__$1,ch__$1,meta47341));
});

}

return (new cljs.core.async.t_cljs$core$async47340(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47349 = (function (map_GT_,f,ch,meta47350){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47350 = meta47350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47351,meta47350__$1){
var self__ = this;
var _47351__$1 = this;
return (new cljs.core.async.t_cljs$core$async47349(self__.map_GT_,self__.f,self__.ch,meta47350__$1));
});

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47351){
var self__ = this;
var _47351__$1 = this;
return self__.meta47350;
});

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47350","meta47350",-1148847697,null)], null);
});

cljs.core.async.t_cljs$core$async47349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47349";

cljs.core.async.t_cljs$core$async47349.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async47349");
});

cljs.core.async.__GT_t_cljs$core$async47349 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47349(map_GT___$1,f__$1,ch__$1,meta47350){
return (new cljs.core.async.t_cljs$core$async47349(map_GT___$1,f__$1,ch__$1,meta47350));
});

}

return (new cljs.core.async.t_cljs$core$async47349(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47355 = (function (filter_GT_,p,ch,meta47356){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47356 = meta47356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47357,meta47356__$1){
var self__ = this;
var _47357__$1 = this;
return (new cljs.core.async.t_cljs$core$async47355(self__.filter_GT_,self__.p,self__.ch,meta47356__$1));
});

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47357){
var self__ = this;
var _47357__$1 = this;
return self__.meta47356;
});

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47356","meta47356",-1825598976,null)], null);
});

cljs.core.async.t_cljs$core$async47355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47355";

cljs.core.async.t_cljs$core$async47355.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async47355");
});

cljs.core.async.__GT_t_cljs$core$async47355 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47355(filter_GT___$1,p__$1,ch__$1,meta47356){
return (new cljs.core.async.t_cljs$core$async47355(filter_GT___$1,p__$1,ch__$1,meta47356));
});

}

return (new cljs.core.async.t_cljs$core$async47355(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args47358 = [];
var len__25826__auto___47402 = arguments.length;
var i__25827__auto___47403 = (0);
while(true){
if((i__25827__auto___47403 < len__25826__auto___47402)){
args47358.push((arguments[i__25827__auto___47403]));

var G__47404 = (i__25827__auto___47403 + (1));
i__25827__auto___47403 = G__47404;
continue;
} else {
}
break;
}

var G__47360 = args47358.length;
switch (G__47360) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47358.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___47406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47406,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47406,out){
return (function (state_47381){
var state_val_47382 = (state_47381[(1)]);
if((state_val_47382 === (7))){
var inst_47377 = (state_47381[(2)]);
var state_47381__$1 = state_47381;
var statearr_47383_47407 = state_47381__$1;
(statearr_47383_47407[(2)] = inst_47377);

(statearr_47383_47407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (1))){
var state_47381__$1 = state_47381;
var statearr_47384_47408 = state_47381__$1;
(statearr_47384_47408[(2)] = null);

(statearr_47384_47408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (4))){
var inst_47363 = (state_47381[(7)]);
var inst_47363__$1 = (state_47381[(2)]);
var inst_47364 = (inst_47363__$1 == null);
var state_47381__$1 = (function (){var statearr_47385 = state_47381;
(statearr_47385[(7)] = inst_47363__$1);

return statearr_47385;
})();
if(cljs.core.truth_(inst_47364)){
var statearr_47386_47409 = state_47381__$1;
(statearr_47386_47409[(1)] = (5));

} else {
var statearr_47387_47410 = state_47381__$1;
(statearr_47387_47410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (6))){
var inst_47363 = (state_47381[(7)]);
var inst_47368 = p.call(null,inst_47363);
var state_47381__$1 = state_47381;
if(cljs.core.truth_(inst_47368)){
var statearr_47388_47411 = state_47381__$1;
(statearr_47388_47411[(1)] = (8));

} else {
var statearr_47389_47412 = state_47381__$1;
(statearr_47389_47412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (3))){
var inst_47379 = (state_47381[(2)]);
var state_47381__$1 = state_47381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47381__$1,inst_47379);
} else {
if((state_val_47382 === (2))){
var state_47381__$1 = state_47381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47381__$1,(4),ch);
} else {
if((state_val_47382 === (11))){
var inst_47371 = (state_47381[(2)]);
var state_47381__$1 = state_47381;
var statearr_47390_47413 = state_47381__$1;
(statearr_47390_47413[(2)] = inst_47371);

(statearr_47390_47413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (9))){
var state_47381__$1 = state_47381;
var statearr_47391_47414 = state_47381__$1;
(statearr_47391_47414[(2)] = null);

(statearr_47391_47414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (5))){
var inst_47366 = cljs.core.async.close_BANG_.call(null,out);
var state_47381__$1 = state_47381;
var statearr_47392_47415 = state_47381__$1;
(statearr_47392_47415[(2)] = inst_47366);

(statearr_47392_47415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (10))){
var inst_47374 = (state_47381[(2)]);
var state_47381__$1 = (function (){var statearr_47393 = state_47381;
(statearr_47393[(8)] = inst_47374);

return statearr_47393;
})();
var statearr_47394_47416 = state_47381__$1;
(statearr_47394_47416[(2)] = null);

(statearr_47394_47416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (8))){
var inst_47363 = (state_47381[(7)]);
var state_47381__$1 = state_47381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47381__$1,(11),out,inst_47363);
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
});})(c__27930__auto___47406,out))
;
return ((function (switch__27865__auto__,c__27930__auto___47406,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47398 = [null,null,null,null,null,null,null,null,null];
(statearr_47398[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47398[(1)] = (1));

return statearr_47398;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47381){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47399){if((e47399 instanceof Object)){
var ex__27869__auto__ = e47399;
var statearr_47400_47417 = state_47381;
(statearr_47400_47417[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47418 = state_47381;
state_47381 = G__47418;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47406,out))
})();
var state__27932__auto__ = (function (){var statearr_47401 = f__27931__auto__.call(null);
(statearr_47401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47406);

return statearr_47401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47406,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47419 = [];
var len__25826__auto___47422 = arguments.length;
var i__25827__auto___47423 = (0);
while(true){
if((i__25827__auto___47423 < len__25826__auto___47422)){
args47419.push((arguments[i__25827__auto___47423]));

var G__47424 = (i__25827__auto___47423 + (1));
i__25827__auto___47423 = G__47424;
continue;
} else {
}
break;
}

var G__47421 = args47419.length;
switch (G__47421) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47419.length)].join('')));

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
var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__){
return (function (state_47591){
var state_val_47592 = (state_47591[(1)]);
if((state_val_47592 === (7))){
var inst_47587 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47593_47634 = state_47591__$1;
(statearr_47593_47634[(2)] = inst_47587);

(statearr_47593_47634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (20))){
var inst_47557 = (state_47591[(7)]);
var inst_47568 = (state_47591[(2)]);
var inst_47569 = cljs.core.next.call(null,inst_47557);
var inst_47543 = inst_47569;
var inst_47544 = null;
var inst_47545 = (0);
var inst_47546 = (0);
var state_47591__$1 = (function (){var statearr_47594 = state_47591;
(statearr_47594[(8)] = inst_47545);

(statearr_47594[(9)] = inst_47544);

(statearr_47594[(10)] = inst_47543);

(statearr_47594[(11)] = inst_47546);

(statearr_47594[(12)] = inst_47568);

return statearr_47594;
})();
var statearr_47595_47635 = state_47591__$1;
(statearr_47595_47635[(2)] = null);

(statearr_47595_47635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (1))){
var state_47591__$1 = state_47591;
var statearr_47596_47636 = state_47591__$1;
(statearr_47596_47636[(2)] = null);

(statearr_47596_47636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (4))){
var inst_47532 = (state_47591[(13)]);
var inst_47532__$1 = (state_47591[(2)]);
var inst_47533 = (inst_47532__$1 == null);
var state_47591__$1 = (function (){var statearr_47597 = state_47591;
(statearr_47597[(13)] = inst_47532__$1);

return statearr_47597;
})();
if(cljs.core.truth_(inst_47533)){
var statearr_47598_47637 = state_47591__$1;
(statearr_47598_47637[(1)] = (5));

} else {
var statearr_47599_47638 = state_47591__$1;
(statearr_47599_47638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (15))){
var state_47591__$1 = state_47591;
var statearr_47603_47639 = state_47591__$1;
(statearr_47603_47639[(2)] = null);

(statearr_47603_47639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (21))){
var state_47591__$1 = state_47591;
var statearr_47604_47640 = state_47591__$1;
(statearr_47604_47640[(2)] = null);

(statearr_47604_47640[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (13))){
var inst_47545 = (state_47591[(8)]);
var inst_47544 = (state_47591[(9)]);
var inst_47543 = (state_47591[(10)]);
var inst_47546 = (state_47591[(11)]);
var inst_47553 = (state_47591[(2)]);
var inst_47554 = (inst_47546 + (1));
var tmp47600 = inst_47545;
var tmp47601 = inst_47544;
var tmp47602 = inst_47543;
var inst_47543__$1 = tmp47602;
var inst_47544__$1 = tmp47601;
var inst_47545__$1 = tmp47600;
var inst_47546__$1 = inst_47554;
var state_47591__$1 = (function (){var statearr_47605 = state_47591;
(statearr_47605[(8)] = inst_47545__$1);

(statearr_47605[(9)] = inst_47544__$1);

(statearr_47605[(14)] = inst_47553);

(statearr_47605[(10)] = inst_47543__$1);

(statearr_47605[(11)] = inst_47546__$1);

return statearr_47605;
})();
var statearr_47606_47641 = state_47591__$1;
(statearr_47606_47641[(2)] = null);

(statearr_47606_47641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (22))){
var state_47591__$1 = state_47591;
var statearr_47607_47642 = state_47591__$1;
(statearr_47607_47642[(2)] = null);

(statearr_47607_47642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (6))){
var inst_47532 = (state_47591[(13)]);
var inst_47541 = f.call(null,inst_47532);
var inst_47542 = cljs.core.seq.call(null,inst_47541);
var inst_47543 = inst_47542;
var inst_47544 = null;
var inst_47545 = (0);
var inst_47546 = (0);
var state_47591__$1 = (function (){var statearr_47608 = state_47591;
(statearr_47608[(8)] = inst_47545);

(statearr_47608[(9)] = inst_47544);

(statearr_47608[(10)] = inst_47543);

(statearr_47608[(11)] = inst_47546);

return statearr_47608;
})();
var statearr_47609_47643 = state_47591__$1;
(statearr_47609_47643[(2)] = null);

(statearr_47609_47643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (17))){
var inst_47557 = (state_47591[(7)]);
var inst_47561 = cljs.core.chunk_first.call(null,inst_47557);
var inst_47562 = cljs.core.chunk_rest.call(null,inst_47557);
var inst_47563 = cljs.core.count.call(null,inst_47561);
var inst_47543 = inst_47562;
var inst_47544 = inst_47561;
var inst_47545 = inst_47563;
var inst_47546 = (0);
var state_47591__$1 = (function (){var statearr_47610 = state_47591;
(statearr_47610[(8)] = inst_47545);

(statearr_47610[(9)] = inst_47544);

(statearr_47610[(10)] = inst_47543);

(statearr_47610[(11)] = inst_47546);

return statearr_47610;
})();
var statearr_47611_47644 = state_47591__$1;
(statearr_47611_47644[(2)] = null);

(statearr_47611_47644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (3))){
var inst_47589 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47591__$1,inst_47589);
} else {
if((state_val_47592 === (12))){
var inst_47577 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47612_47645 = state_47591__$1;
(statearr_47612_47645[(2)] = inst_47577);

(statearr_47612_47645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (2))){
var state_47591__$1 = state_47591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47591__$1,(4),in$);
} else {
if((state_val_47592 === (23))){
var inst_47585 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47613_47646 = state_47591__$1;
(statearr_47613_47646[(2)] = inst_47585);

(statearr_47613_47646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (19))){
var inst_47572 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47614_47647 = state_47591__$1;
(statearr_47614_47647[(2)] = inst_47572);

(statearr_47614_47647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (11))){
var inst_47557 = (state_47591[(7)]);
var inst_47543 = (state_47591[(10)]);
var inst_47557__$1 = cljs.core.seq.call(null,inst_47543);
var state_47591__$1 = (function (){var statearr_47615 = state_47591;
(statearr_47615[(7)] = inst_47557__$1);

return statearr_47615;
})();
if(inst_47557__$1){
var statearr_47616_47648 = state_47591__$1;
(statearr_47616_47648[(1)] = (14));

} else {
var statearr_47617_47649 = state_47591__$1;
(statearr_47617_47649[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (9))){
var inst_47579 = (state_47591[(2)]);
var inst_47580 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47591__$1 = (function (){var statearr_47618 = state_47591;
(statearr_47618[(15)] = inst_47579);

return statearr_47618;
})();
if(cljs.core.truth_(inst_47580)){
var statearr_47619_47650 = state_47591__$1;
(statearr_47619_47650[(1)] = (21));

} else {
var statearr_47620_47651 = state_47591__$1;
(statearr_47620_47651[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (5))){
var inst_47535 = cljs.core.async.close_BANG_.call(null,out);
var state_47591__$1 = state_47591;
var statearr_47621_47652 = state_47591__$1;
(statearr_47621_47652[(2)] = inst_47535);

(statearr_47621_47652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (14))){
var inst_47557 = (state_47591[(7)]);
var inst_47559 = cljs.core.chunked_seq_QMARK_.call(null,inst_47557);
var state_47591__$1 = state_47591;
if(inst_47559){
var statearr_47622_47653 = state_47591__$1;
(statearr_47622_47653[(1)] = (17));

} else {
var statearr_47623_47654 = state_47591__$1;
(statearr_47623_47654[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (16))){
var inst_47575 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47624_47655 = state_47591__$1;
(statearr_47624_47655[(2)] = inst_47575);

(statearr_47624_47655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (10))){
var inst_47544 = (state_47591[(9)]);
var inst_47546 = (state_47591[(11)]);
var inst_47551 = cljs.core._nth.call(null,inst_47544,inst_47546);
var state_47591__$1 = state_47591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47591__$1,(13),out,inst_47551);
} else {
if((state_val_47592 === (18))){
var inst_47557 = (state_47591[(7)]);
var inst_47566 = cljs.core.first.call(null,inst_47557);
var state_47591__$1 = state_47591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47591__$1,(20),out,inst_47566);
} else {
if((state_val_47592 === (8))){
var inst_47545 = (state_47591[(8)]);
var inst_47546 = (state_47591[(11)]);
var inst_47548 = (inst_47546 < inst_47545);
var inst_47549 = inst_47548;
var state_47591__$1 = state_47591;
if(cljs.core.truth_(inst_47549)){
var statearr_47625_47656 = state_47591__$1;
(statearr_47625_47656[(1)] = (10));

} else {
var statearr_47626_47657 = state_47591__$1;
(statearr_47626_47657[(1)] = (11));

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
});})(c__27930__auto__))
;
return ((function (switch__27865__auto__,c__27930__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_47630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__);

(statearr_47630[(1)] = (1));

return statearr_47630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____1 = (function (state_47591){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47631){if((e47631 instanceof Object)){
var ex__27869__auto__ = e47631;
var statearr_47632_47658 = state_47591;
(statearr_47632_47658[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47659 = state_47591;
state_47591 = G__47659;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__ = function(state_47591){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____1.call(this,state_47591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_47633 = f__27931__auto__.call(null);
(statearr_47633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_47633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__))
);

return c__27930__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47660 = [];
var len__25826__auto___47663 = arguments.length;
var i__25827__auto___47664 = (0);
while(true){
if((i__25827__auto___47664 < len__25826__auto___47663)){
args47660.push((arguments[i__25827__auto___47664]));

var G__47665 = (i__25827__auto___47664 + (1));
i__25827__auto___47664 = G__47665;
continue;
} else {
}
break;
}

var G__47662 = args47660.length;
switch (G__47662) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47660.length)].join('')));

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
var args47667 = [];
var len__25826__auto___47670 = arguments.length;
var i__25827__auto___47671 = (0);
while(true){
if((i__25827__auto___47671 < len__25826__auto___47670)){
args47667.push((arguments[i__25827__auto___47671]));

var G__47672 = (i__25827__auto___47671 + (1));
i__25827__auto___47671 = G__47672;
continue;
} else {
}
break;
}

var G__47669 = args47667.length;
switch (G__47669) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47667.length)].join('')));

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
var args47674 = [];
var len__25826__auto___47725 = arguments.length;
var i__25827__auto___47726 = (0);
while(true){
if((i__25827__auto___47726 < len__25826__auto___47725)){
args47674.push((arguments[i__25827__auto___47726]));

var G__47727 = (i__25827__auto___47726 + (1));
i__25827__auto___47726 = G__47727;
continue;
} else {
}
break;
}

var G__47676 = args47674.length;
switch (G__47676) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47674.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___47729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47729,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47729,out){
return (function (state_47700){
var state_val_47701 = (state_47700[(1)]);
if((state_val_47701 === (7))){
var inst_47695 = (state_47700[(2)]);
var state_47700__$1 = state_47700;
var statearr_47702_47730 = state_47700__$1;
(statearr_47702_47730[(2)] = inst_47695);

(statearr_47702_47730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (1))){
var inst_47677 = null;
var state_47700__$1 = (function (){var statearr_47703 = state_47700;
(statearr_47703[(7)] = inst_47677);

return statearr_47703;
})();
var statearr_47704_47731 = state_47700__$1;
(statearr_47704_47731[(2)] = null);

(statearr_47704_47731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (4))){
var inst_47680 = (state_47700[(8)]);
var inst_47680__$1 = (state_47700[(2)]);
var inst_47681 = (inst_47680__$1 == null);
var inst_47682 = cljs.core.not.call(null,inst_47681);
var state_47700__$1 = (function (){var statearr_47705 = state_47700;
(statearr_47705[(8)] = inst_47680__$1);

return statearr_47705;
})();
if(inst_47682){
var statearr_47706_47732 = state_47700__$1;
(statearr_47706_47732[(1)] = (5));

} else {
var statearr_47707_47733 = state_47700__$1;
(statearr_47707_47733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (6))){
var state_47700__$1 = state_47700;
var statearr_47708_47734 = state_47700__$1;
(statearr_47708_47734[(2)] = null);

(statearr_47708_47734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (3))){
var inst_47697 = (state_47700[(2)]);
var inst_47698 = cljs.core.async.close_BANG_.call(null,out);
var state_47700__$1 = (function (){var statearr_47709 = state_47700;
(statearr_47709[(9)] = inst_47697);

return statearr_47709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47700__$1,inst_47698);
} else {
if((state_val_47701 === (2))){
var state_47700__$1 = state_47700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47700__$1,(4),ch);
} else {
if((state_val_47701 === (11))){
var inst_47680 = (state_47700[(8)]);
var inst_47689 = (state_47700[(2)]);
var inst_47677 = inst_47680;
var state_47700__$1 = (function (){var statearr_47710 = state_47700;
(statearr_47710[(10)] = inst_47689);

(statearr_47710[(7)] = inst_47677);

return statearr_47710;
})();
var statearr_47711_47735 = state_47700__$1;
(statearr_47711_47735[(2)] = null);

(statearr_47711_47735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (9))){
var inst_47680 = (state_47700[(8)]);
var state_47700__$1 = state_47700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47700__$1,(11),out,inst_47680);
} else {
if((state_val_47701 === (5))){
var inst_47680 = (state_47700[(8)]);
var inst_47677 = (state_47700[(7)]);
var inst_47684 = cljs.core._EQ_.call(null,inst_47680,inst_47677);
var state_47700__$1 = state_47700;
if(inst_47684){
var statearr_47713_47736 = state_47700__$1;
(statearr_47713_47736[(1)] = (8));

} else {
var statearr_47714_47737 = state_47700__$1;
(statearr_47714_47737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (10))){
var inst_47692 = (state_47700[(2)]);
var state_47700__$1 = state_47700;
var statearr_47715_47738 = state_47700__$1;
(statearr_47715_47738[(2)] = inst_47692);

(statearr_47715_47738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47701 === (8))){
var inst_47677 = (state_47700[(7)]);
var tmp47712 = inst_47677;
var inst_47677__$1 = tmp47712;
var state_47700__$1 = (function (){var statearr_47716 = state_47700;
(statearr_47716[(7)] = inst_47677__$1);

return statearr_47716;
})();
var statearr_47717_47739 = state_47700__$1;
(statearr_47717_47739[(2)] = null);

(statearr_47717_47739[(1)] = (2));


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
});})(c__27930__auto___47729,out))
;
return ((function (switch__27865__auto__,c__27930__auto___47729,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47721[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47721[(1)] = (1));

return statearr_47721;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47700){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47722){if((e47722 instanceof Object)){
var ex__27869__auto__ = e47722;
var statearr_47723_47740 = state_47700;
(statearr_47723_47740[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47741 = state_47700;
state_47700 = G__47741;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47729,out))
})();
var state__27932__auto__ = (function (){var statearr_47724 = f__27931__auto__.call(null);
(statearr_47724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47729);

return statearr_47724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47729,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47742 = [];
var len__25826__auto___47812 = arguments.length;
var i__25827__auto___47813 = (0);
while(true){
if((i__25827__auto___47813 < len__25826__auto___47812)){
args47742.push((arguments[i__25827__auto___47813]));

var G__47814 = (i__25827__auto___47813 + (1));
i__25827__auto___47813 = G__47814;
continue;
} else {
}
break;
}

var G__47744 = args47742.length;
switch (G__47744) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47742.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___47816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47816,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47816,out){
return (function (state_47782){
var state_val_47783 = (state_47782[(1)]);
if((state_val_47783 === (7))){
var inst_47778 = (state_47782[(2)]);
var state_47782__$1 = state_47782;
var statearr_47784_47817 = state_47782__$1;
(statearr_47784_47817[(2)] = inst_47778);

(statearr_47784_47817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (1))){
var inst_47745 = (new Array(n));
var inst_47746 = inst_47745;
var inst_47747 = (0);
var state_47782__$1 = (function (){var statearr_47785 = state_47782;
(statearr_47785[(7)] = inst_47747);

(statearr_47785[(8)] = inst_47746);

return statearr_47785;
})();
var statearr_47786_47818 = state_47782__$1;
(statearr_47786_47818[(2)] = null);

(statearr_47786_47818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (4))){
var inst_47750 = (state_47782[(9)]);
var inst_47750__$1 = (state_47782[(2)]);
var inst_47751 = (inst_47750__$1 == null);
var inst_47752 = cljs.core.not.call(null,inst_47751);
var state_47782__$1 = (function (){var statearr_47787 = state_47782;
(statearr_47787[(9)] = inst_47750__$1);

return statearr_47787;
})();
if(inst_47752){
var statearr_47788_47819 = state_47782__$1;
(statearr_47788_47819[(1)] = (5));

} else {
var statearr_47789_47820 = state_47782__$1;
(statearr_47789_47820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (15))){
var inst_47772 = (state_47782[(2)]);
var state_47782__$1 = state_47782;
var statearr_47790_47821 = state_47782__$1;
(statearr_47790_47821[(2)] = inst_47772);

(statearr_47790_47821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (13))){
var state_47782__$1 = state_47782;
var statearr_47791_47822 = state_47782__$1;
(statearr_47791_47822[(2)] = null);

(statearr_47791_47822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (6))){
var inst_47747 = (state_47782[(7)]);
var inst_47768 = (inst_47747 > (0));
var state_47782__$1 = state_47782;
if(cljs.core.truth_(inst_47768)){
var statearr_47792_47823 = state_47782__$1;
(statearr_47792_47823[(1)] = (12));

} else {
var statearr_47793_47824 = state_47782__$1;
(statearr_47793_47824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (3))){
var inst_47780 = (state_47782[(2)]);
var state_47782__$1 = state_47782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47782__$1,inst_47780);
} else {
if((state_val_47783 === (12))){
var inst_47746 = (state_47782[(8)]);
var inst_47770 = cljs.core.vec.call(null,inst_47746);
var state_47782__$1 = state_47782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47782__$1,(15),out,inst_47770);
} else {
if((state_val_47783 === (2))){
var state_47782__$1 = state_47782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47782__$1,(4),ch);
} else {
if((state_val_47783 === (11))){
var inst_47762 = (state_47782[(2)]);
var inst_47763 = (new Array(n));
var inst_47746 = inst_47763;
var inst_47747 = (0);
var state_47782__$1 = (function (){var statearr_47794 = state_47782;
(statearr_47794[(7)] = inst_47747);

(statearr_47794[(8)] = inst_47746);

(statearr_47794[(10)] = inst_47762);

return statearr_47794;
})();
var statearr_47795_47825 = state_47782__$1;
(statearr_47795_47825[(2)] = null);

(statearr_47795_47825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (9))){
var inst_47746 = (state_47782[(8)]);
var inst_47760 = cljs.core.vec.call(null,inst_47746);
var state_47782__$1 = state_47782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47782__$1,(11),out,inst_47760);
} else {
if((state_val_47783 === (5))){
var inst_47750 = (state_47782[(9)]);
var inst_47747 = (state_47782[(7)]);
var inst_47746 = (state_47782[(8)]);
var inst_47755 = (state_47782[(11)]);
var inst_47754 = (inst_47746[inst_47747] = inst_47750);
var inst_47755__$1 = (inst_47747 + (1));
var inst_47756 = (inst_47755__$1 < n);
var state_47782__$1 = (function (){var statearr_47796 = state_47782;
(statearr_47796[(12)] = inst_47754);

(statearr_47796[(11)] = inst_47755__$1);

return statearr_47796;
})();
if(cljs.core.truth_(inst_47756)){
var statearr_47797_47826 = state_47782__$1;
(statearr_47797_47826[(1)] = (8));

} else {
var statearr_47798_47827 = state_47782__$1;
(statearr_47798_47827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (14))){
var inst_47775 = (state_47782[(2)]);
var inst_47776 = cljs.core.async.close_BANG_.call(null,out);
var state_47782__$1 = (function (){var statearr_47800 = state_47782;
(statearr_47800[(13)] = inst_47775);

return statearr_47800;
})();
var statearr_47801_47828 = state_47782__$1;
(statearr_47801_47828[(2)] = inst_47776);

(statearr_47801_47828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (10))){
var inst_47766 = (state_47782[(2)]);
var state_47782__$1 = state_47782;
var statearr_47802_47829 = state_47782__$1;
(statearr_47802_47829[(2)] = inst_47766);

(statearr_47802_47829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47783 === (8))){
var inst_47746 = (state_47782[(8)]);
var inst_47755 = (state_47782[(11)]);
var tmp47799 = inst_47746;
var inst_47746__$1 = tmp47799;
var inst_47747 = inst_47755;
var state_47782__$1 = (function (){var statearr_47803 = state_47782;
(statearr_47803[(7)] = inst_47747);

(statearr_47803[(8)] = inst_47746__$1);

return statearr_47803;
})();
var statearr_47804_47830 = state_47782__$1;
(statearr_47804_47830[(2)] = null);

(statearr_47804_47830[(1)] = (2));


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
});})(c__27930__auto___47816,out))
;
return ((function (switch__27865__auto__,c__27930__auto___47816,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47808[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47808[(1)] = (1));

return statearr_47808;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47782){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47809){if((e47809 instanceof Object)){
var ex__27869__auto__ = e47809;
var statearr_47810_47831 = state_47782;
(statearr_47810_47831[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47832 = state_47782;
state_47782 = G__47832;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47816,out))
})();
var state__27932__auto__ = (function (){var statearr_47811 = f__27931__auto__.call(null);
(statearr_47811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47816);

return statearr_47811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47816,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47833 = [];
var len__25826__auto___47907 = arguments.length;
var i__25827__auto___47908 = (0);
while(true){
if((i__25827__auto___47908 < len__25826__auto___47907)){
args47833.push((arguments[i__25827__auto___47908]));

var G__47909 = (i__25827__auto___47908 + (1));
i__25827__auto___47908 = G__47909;
continue;
} else {
}
break;
}

var G__47835 = args47833.length;
switch (G__47835) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47833.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___47911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___47911,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___47911,out){
return (function (state_47877){
var state_val_47878 = (state_47877[(1)]);
if((state_val_47878 === (7))){
var inst_47873 = (state_47877[(2)]);
var state_47877__$1 = state_47877;
var statearr_47879_47912 = state_47877__$1;
(statearr_47879_47912[(2)] = inst_47873);

(statearr_47879_47912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (1))){
var inst_47836 = [];
var inst_47837 = inst_47836;
var inst_47838 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47877__$1 = (function (){var statearr_47880 = state_47877;
(statearr_47880[(7)] = inst_47837);

(statearr_47880[(8)] = inst_47838);

return statearr_47880;
})();
var statearr_47881_47913 = state_47877__$1;
(statearr_47881_47913[(2)] = null);

(statearr_47881_47913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (4))){
var inst_47841 = (state_47877[(9)]);
var inst_47841__$1 = (state_47877[(2)]);
var inst_47842 = (inst_47841__$1 == null);
var inst_47843 = cljs.core.not.call(null,inst_47842);
var state_47877__$1 = (function (){var statearr_47882 = state_47877;
(statearr_47882[(9)] = inst_47841__$1);

return statearr_47882;
})();
if(inst_47843){
var statearr_47883_47914 = state_47877__$1;
(statearr_47883_47914[(1)] = (5));

} else {
var statearr_47884_47915 = state_47877__$1;
(statearr_47884_47915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (15))){
var inst_47867 = (state_47877[(2)]);
var state_47877__$1 = state_47877;
var statearr_47885_47916 = state_47877__$1;
(statearr_47885_47916[(2)] = inst_47867);

(statearr_47885_47916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (13))){
var state_47877__$1 = state_47877;
var statearr_47886_47917 = state_47877__$1;
(statearr_47886_47917[(2)] = null);

(statearr_47886_47917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (6))){
var inst_47837 = (state_47877[(7)]);
var inst_47862 = inst_47837.length;
var inst_47863 = (inst_47862 > (0));
var state_47877__$1 = state_47877;
if(cljs.core.truth_(inst_47863)){
var statearr_47887_47918 = state_47877__$1;
(statearr_47887_47918[(1)] = (12));

} else {
var statearr_47888_47919 = state_47877__$1;
(statearr_47888_47919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (3))){
var inst_47875 = (state_47877[(2)]);
var state_47877__$1 = state_47877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47877__$1,inst_47875);
} else {
if((state_val_47878 === (12))){
var inst_47837 = (state_47877[(7)]);
var inst_47865 = cljs.core.vec.call(null,inst_47837);
var state_47877__$1 = state_47877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47877__$1,(15),out,inst_47865);
} else {
if((state_val_47878 === (2))){
var state_47877__$1 = state_47877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47877__$1,(4),ch);
} else {
if((state_val_47878 === (11))){
var inst_47845 = (state_47877[(10)]);
var inst_47841 = (state_47877[(9)]);
var inst_47855 = (state_47877[(2)]);
var inst_47856 = [];
var inst_47857 = inst_47856.push(inst_47841);
var inst_47837 = inst_47856;
var inst_47838 = inst_47845;
var state_47877__$1 = (function (){var statearr_47889 = state_47877;
(statearr_47889[(11)] = inst_47855);

(statearr_47889[(7)] = inst_47837);

(statearr_47889[(12)] = inst_47857);

(statearr_47889[(8)] = inst_47838);

return statearr_47889;
})();
var statearr_47890_47920 = state_47877__$1;
(statearr_47890_47920[(2)] = null);

(statearr_47890_47920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (9))){
var inst_47837 = (state_47877[(7)]);
var inst_47853 = cljs.core.vec.call(null,inst_47837);
var state_47877__$1 = state_47877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47877__$1,(11),out,inst_47853);
} else {
if((state_val_47878 === (5))){
var inst_47845 = (state_47877[(10)]);
var inst_47841 = (state_47877[(9)]);
var inst_47838 = (state_47877[(8)]);
var inst_47845__$1 = f.call(null,inst_47841);
var inst_47846 = cljs.core._EQ_.call(null,inst_47845__$1,inst_47838);
var inst_47847 = cljs.core.keyword_identical_QMARK_.call(null,inst_47838,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47848 = (inst_47846) || (inst_47847);
var state_47877__$1 = (function (){var statearr_47891 = state_47877;
(statearr_47891[(10)] = inst_47845__$1);

return statearr_47891;
})();
if(cljs.core.truth_(inst_47848)){
var statearr_47892_47921 = state_47877__$1;
(statearr_47892_47921[(1)] = (8));

} else {
var statearr_47893_47922 = state_47877__$1;
(statearr_47893_47922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (14))){
var inst_47870 = (state_47877[(2)]);
var inst_47871 = cljs.core.async.close_BANG_.call(null,out);
var state_47877__$1 = (function (){var statearr_47895 = state_47877;
(statearr_47895[(13)] = inst_47870);

return statearr_47895;
})();
var statearr_47896_47923 = state_47877__$1;
(statearr_47896_47923[(2)] = inst_47871);

(statearr_47896_47923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (10))){
var inst_47860 = (state_47877[(2)]);
var state_47877__$1 = state_47877;
var statearr_47897_47924 = state_47877__$1;
(statearr_47897_47924[(2)] = inst_47860);

(statearr_47897_47924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (8))){
var inst_47845 = (state_47877[(10)]);
var inst_47841 = (state_47877[(9)]);
var inst_47837 = (state_47877[(7)]);
var inst_47850 = inst_47837.push(inst_47841);
var tmp47894 = inst_47837;
var inst_47837__$1 = tmp47894;
var inst_47838 = inst_47845;
var state_47877__$1 = (function (){var statearr_47898 = state_47877;
(statearr_47898[(14)] = inst_47850);

(statearr_47898[(7)] = inst_47837__$1);

(statearr_47898[(8)] = inst_47838);

return statearr_47898;
})();
var statearr_47899_47925 = state_47877__$1;
(statearr_47899_47925[(2)] = null);

(statearr_47899_47925[(1)] = (2));


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
});})(c__27930__auto___47911,out))
;
return ((function (switch__27865__auto__,c__27930__auto___47911,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_47903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47903[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_47903[(1)] = (1));

return statearr_47903;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_47877){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_47877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e47904){if((e47904 instanceof Object)){
var ex__27869__auto__ = e47904;
var statearr_47905_47926 = state_47877;
(statearr_47905_47926[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47927 = state_47877;
state_47877 = G__47927;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_47877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_47877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___47911,out))
})();
var state__27932__auto__ = (function (){var statearr_47906 = f__27931__auto__.call(null);
(statearr_47906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___47911);

return statearr_47906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___47911,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1477762291523