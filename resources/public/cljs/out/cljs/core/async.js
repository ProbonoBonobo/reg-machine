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
var args34248 = [];
var len__25826__auto___34254 = arguments.length;
var i__25827__auto___34255 = (0);
while(true){
if((i__25827__auto___34255 < len__25826__auto___34254)){
args34248.push((arguments[i__25827__auto___34255]));

var G__34256 = (i__25827__auto___34255 + (1));
i__25827__auto___34255 = G__34256;
continue;
} else {
}
break;
}

var G__34250 = args34248.length;
switch (G__34250) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34248.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34251 = (function (f,blockable,meta34252){
this.f = f;
this.blockable = blockable;
this.meta34252 = meta34252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34253,meta34252__$1){
var self__ = this;
var _34253__$1 = this;
return (new cljs.core.async.t_cljs$core$async34251(self__.f,self__.blockable,meta34252__$1));
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34253){
var self__ = this;
var _34253__$1 = this;
return self__.meta34252;
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34252","meta34252",334368649,null)], null);
});

cljs.core.async.t_cljs$core$async34251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34251";

cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async34251");
});

cljs.core.async.__GT_t_cljs$core$async34251 = (function cljs$core$async$__GT_t_cljs$core$async34251(f__$1,blockable__$1,meta34252){
return (new cljs.core.async.t_cljs$core$async34251(f__$1,blockable__$1,meta34252));
});

}

return (new cljs.core.async.t_cljs$core$async34251(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args34260 = [];
var len__25826__auto___34263 = arguments.length;
var i__25827__auto___34264 = (0);
while(true){
if((i__25827__auto___34264 < len__25826__auto___34263)){
args34260.push((arguments[i__25827__auto___34264]));

var G__34265 = (i__25827__auto___34264 + (1));
i__25827__auto___34264 = G__34265;
continue;
} else {
}
break;
}

var G__34262 = args34260.length;
switch (G__34262) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34260.length)].join('')));

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
var args34267 = [];
var len__25826__auto___34270 = arguments.length;
var i__25827__auto___34271 = (0);
while(true){
if((i__25827__auto___34271 < len__25826__auto___34270)){
args34267.push((arguments[i__25827__auto___34271]));

var G__34272 = (i__25827__auto___34271 + (1));
i__25827__auto___34271 = G__34272;
continue;
} else {
}
break;
}

var G__34269 = args34267.length;
switch (G__34269) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34267.length)].join('')));

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
var args34274 = [];
var len__25826__auto___34277 = arguments.length;
var i__25827__auto___34278 = (0);
while(true){
if((i__25827__auto___34278 < len__25826__auto___34277)){
args34274.push((arguments[i__25827__auto___34278]));

var G__34279 = (i__25827__auto___34278 + (1));
i__25827__auto___34278 = G__34279;
continue;
} else {
}
break;
}

var G__34276 = args34274.length;
switch (G__34276) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34274.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34281 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34281);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34281,ret){
return (function (){
return fn1.call(null,val_34281);
});})(val_34281,ret))
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
var args34282 = [];
var len__25826__auto___34285 = arguments.length;
var i__25827__auto___34286 = (0);
while(true){
if((i__25827__auto___34286 < len__25826__auto___34285)){
args34282.push((arguments[i__25827__auto___34286]));

var G__34287 = (i__25827__auto___34286 + (1));
i__25827__auto___34286 = G__34287;
continue;
} else {
}
break;
}

var G__34284 = args34282.length;
switch (G__34284) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34282.length)].join('')));

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
var n__25666__auto___34289 = n;
var x_34290 = (0);
while(true){
if((x_34290 < n__25666__auto___34289)){
(a[x_34290] = (0));

var G__34291 = (x_34290 + (1));
x_34290 = G__34291;
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

var G__34292 = (i + (1));
i = G__34292;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34296 = (function (alt_flag,flag,meta34297){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34297 = meta34297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34298,meta34297__$1){
var self__ = this;
var _34298__$1 = this;
return (new cljs.core.async.t_cljs$core$async34296(self__.alt_flag,self__.flag,meta34297__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34298){
var self__ = this;
var _34298__$1 = this;
return self__.meta34297;
});})(flag))
;

cljs.core.async.t_cljs$core$async34296.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34296.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34297","meta34297",246519142,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34296";

cljs.core.async.t_cljs$core$async34296.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async34296");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34296 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34296(alt_flag__$1,flag__$1,meta34297){
return (new cljs.core.async.t_cljs$core$async34296(alt_flag__$1,flag__$1,meta34297));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34296(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34302 = (function (alt_handler,flag,cb,meta34303){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34303 = meta34303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34304,meta34303__$1){
var self__ = this;
var _34304__$1 = this;
return (new cljs.core.async.t_cljs$core$async34302(self__.alt_handler,self__.flag,self__.cb,meta34303__$1));
});

cljs.core.async.t_cljs$core$async34302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34304){
var self__ = this;
var _34304__$1 = this;
return self__.meta34303;
});

cljs.core.async.t_cljs$core$async34302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34303","meta34303",1869445249,null)], null);
});

cljs.core.async.t_cljs$core$async34302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34302";

cljs.core.async.t_cljs$core$async34302.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async34302");
});

cljs.core.async.__GT_t_cljs$core$async34302 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34302(alt_handler__$1,flag__$1,cb__$1,meta34303){
return (new cljs.core.async.t_cljs$core$async34302(alt_handler__$1,flag__$1,cb__$1,meta34303));
});

}

return (new cljs.core.async.t_cljs$core$async34302(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34305_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34305_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34306_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34306_SHARP_,port], null));
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
var G__34307 = (i + (1));
i = G__34307;
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
var len__25826__auto___34313 = arguments.length;
var i__25827__auto___34314 = (0);
while(true){
if((i__25827__auto___34314 < len__25826__auto___34313)){
args__25833__auto__.push((arguments[i__25827__auto___34314]));

var G__34315 = (i__25827__auto___34314 + (1));
i__25827__auto___34314 = G__34315;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34310){
var map__34311 = p__34310;
var map__34311__$1 = ((((!((map__34311 == null)))?((((map__34311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34311):map__34311);
var opts = map__34311__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34308){
var G__34309 = cljs.core.first.call(null,seq34308);
var seq34308__$1 = cljs.core.next.call(null,seq34308);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34309,seq34308__$1);
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
var args34316 = [];
var len__25826__auto___34366 = arguments.length;
var i__25827__auto___34367 = (0);
while(true){
if((i__25827__auto___34367 < len__25826__auto___34366)){
args34316.push((arguments[i__25827__auto___34367]));

var G__34368 = (i__25827__auto___34367 + (1));
i__25827__auto___34367 = G__34368;
continue;
} else {
}
break;
}

var G__34318 = args34316.length;
switch (G__34318) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34316.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34203__auto___34370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___34370){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___34370){
return (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34338 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34344_34371 = state_34342__$1;
(statearr_34344_34371[(2)] = inst_34338);

(statearr_34344_34371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var state_34342__$1 = state_34342;
var statearr_34345_34372 = state_34342__$1;
(statearr_34345_34372[(2)] = null);

(statearr_34345_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34321 = (state_34342[(7)]);
var inst_34321__$1 = (state_34342[(2)]);
var inst_34322 = (inst_34321__$1 == null);
var state_34342__$1 = (function (){var statearr_34346 = state_34342;
(statearr_34346[(7)] = inst_34321__$1);

return statearr_34346;
})();
if(cljs.core.truth_(inst_34322)){
var statearr_34347_34373 = state_34342__$1;
(statearr_34347_34373[(1)] = (5));

} else {
var statearr_34348_34374 = state_34342__$1;
(statearr_34348_34374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (13))){
var state_34342__$1 = state_34342;
var statearr_34349_34375 = state_34342__$1;
(statearr_34349_34375[(2)] = null);

(statearr_34349_34375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var inst_34321 = (state_34342[(7)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34342__$1,(11),to,inst_34321);
} else {
if((state_val_34343 === (3))){
var inst_34340 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34342__$1,inst_34340);
} else {
if((state_val_34343 === (12))){
var state_34342__$1 = state_34342;
var statearr_34350_34376 = state_34342__$1;
(statearr_34350_34376[(2)] = null);

(statearr_34350_34376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34342__$1,(4),from);
} else {
if((state_val_34343 === (11))){
var inst_34331 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
if(cljs.core.truth_(inst_34331)){
var statearr_34351_34377 = state_34342__$1;
(statearr_34351_34377[(1)] = (12));

} else {
var statearr_34352_34378 = state_34342__$1;
(statearr_34352_34378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (9))){
var state_34342__$1 = state_34342;
var statearr_34353_34379 = state_34342__$1;
(statearr_34353_34379[(2)] = null);

(statearr_34353_34379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (5))){
var state_34342__$1 = state_34342;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34354_34380 = state_34342__$1;
(statearr_34354_34380[(1)] = (8));

} else {
var statearr_34355_34381 = state_34342__$1;
(statearr_34355_34381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (14))){
var inst_34336 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34356_34382 = state_34342__$1;
(statearr_34356_34382[(2)] = inst_34336);

(statearr_34356_34382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var inst_34328 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34357_34383 = state_34342__$1;
(statearr_34357_34383[(2)] = inst_34328);

(statearr_34357_34383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34325 = cljs.core.async.close_BANG_.call(null,to);
var state_34342__$1 = state_34342;
var statearr_34358_34384 = state_34342__$1;
(statearr_34358_34384[(2)] = inst_34325);

(statearr_34358_34384[(1)] = (10));


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
});})(c__34203__auto___34370))
;
return ((function (switch__34091__auto__,c__34203__auto___34370){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_34362 = [null,null,null,null,null,null,null,null];
(statearr_34362[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_34362[(1)] = (1));

return statearr_34362;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_34342){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34363){if((e34363 instanceof Object)){
var ex__34095__auto__ = e34363;
var statearr_34364_34385 = state_34342;
(statearr_34364_34385[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34386 = state_34342;
state_34342 = G__34386;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___34370))
})();
var state__34205__auto__ = (function (){var statearr_34365 = f__34204__auto__.call(null);
(statearr_34365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___34370);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___34370))
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
return (function (p__34574){
var vec__34575 = p__34574;
var v = cljs.core.nth.call(null,vec__34575,(0),null);
var p = cljs.core.nth.call(null,vec__34575,(1),null);
var job = vec__34575;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34203__auto___34761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___34761,res,vec__34575,v,p,job,jobs,results){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___34761,res,vec__34575,v,p,job,jobs,results){
return (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (1))){
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34582__$1,(2),res,v);
} else {
if((state_val_34583 === (2))){
var inst_34579 = (state_34582[(2)]);
var inst_34580 = cljs.core.async.close_BANG_.call(null,res);
var state_34582__$1 = (function (){var statearr_34584 = state_34582;
(statearr_34584[(7)] = inst_34579);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34582__$1,inst_34580);
} else {
return null;
}
}
});})(c__34203__auto___34761,res,vec__34575,v,p,job,jobs,results))
;
return ((function (switch__34091__auto__,c__34203__auto___34761,res,vec__34575,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0 = (function (){
var statearr_34588 = [null,null,null,null,null,null,null,null];
(statearr_34588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__);

(statearr_34588[(1)] = (1));

return statearr_34588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1 = (function (state_34582){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34589){if((e34589 instanceof Object)){
var ex__34095__auto__ = e34589;
var statearr_34590_34762 = state_34582;
(statearr_34590_34762[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34763 = state_34582;
state_34582 = G__34763;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___34761,res,vec__34575,v,p,job,jobs,results))
})();
var state__34205__auto__ = (function (){var statearr_34591 = f__34204__auto__.call(null);
(statearr_34591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___34761);

return statearr_34591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___34761,res,vec__34575,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34592){
var vec__34593 = p__34592;
var v = cljs.core.nth.call(null,vec__34593,(0),null);
var p = cljs.core.nth.call(null,vec__34593,(1),null);
var job = vec__34593;
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
var n__25666__auto___34764 = n;
var __34765 = (0);
while(true){
if((__34765 < n__25666__auto___34764)){
var G__34596_34766 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34596_34766) {
case "compute":
var c__34203__auto___34768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34765,c__34203__auto___34768,G__34596_34766,n__25666__auto___34764,jobs,results,process,async){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (__34765,c__34203__auto___34768,G__34596_34766,n__25666__auto___34764,jobs,results,process,async){
return (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34611_34769 = state_34609__$1;
(statearr_34611_34769[(2)] = null);

(statearr_34611_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (2))){
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34609__$1,(4),jobs);
} else {
if((state_val_34610 === (3))){
var inst_34607 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34609__$1,inst_34607);
} else {
if((state_val_34610 === (4))){
var inst_34599 = (state_34609[(2)]);
var inst_34600 = process.call(null,inst_34599);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34600)){
var statearr_34612_34770 = state_34609__$1;
(statearr_34612_34770[(1)] = (5));

} else {
var statearr_34613_34771 = state_34609__$1;
(statearr_34613_34771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
var statearr_34614_34772 = state_34609__$1;
(statearr_34614_34772[(2)] = null);

(statearr_34614_34772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var state_34609__$1 = state_34609;
var statearr_34615_34773 = state_34609__$1;
(statearr_34615_34773[(2)] = null);

(statearr_34615_34773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34616_34774 = state_34609__$1;
(statearr_34616_34774[(2)] = inst_34605);

(statearr_34616_34774[(1)] = (3));


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
});})(__34765,c__34203__auto___34768,G__34596_34766,n__25666__auto___34764,jobs,results,process,async))
;
return ((function (__34765,switch__34091__auto__,c__34203__auto___34768,G__34596_34766,n__25666__auto___34764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null];
(statearr_34620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1 = (function (state_34609){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34621){if((e34621 instanceof Object)){
var ex__34095__auto__ = e34621;
var statearr_34622_34775 = state_34609;
(statearr_34622_34775[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34776 = state_34609;
state_34609 = G__34776;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = function(state_34609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1.call(this,state_34609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__;
})()
;})(__34765,switch__34091__auto__,c__34203__auto___34768,G__34596_34766,n__25666__auto___34764,jobs,results,process,async))
})();
var state__34205__auto__ = (function (){var statearr_34623 = f__34204__auto__.call(null);
(statearr_34623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___34768);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(__34765,c__34203__auto___34768,G__34596_34766,n__25666__auto___34764,jobs,results,process,async))
);


break;
case "async":
var c__34203__auto___34777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34765,c__34203__auto___34777,G__34596_34766,n__25666__auto___34764,jobs,results,process,async){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (__34765,c__34203__auto___34777,G__34596_34766,n__25666__auto___34764,jobs,results,process,async){
return (function (state_34636){
var state_val_34637 = (state_34636[(1)]);
if((state_val_34637 === (1))){
var state_34636__$1 = state_34636;
var statearr_34638_34778 = state_34636__$1;
(statearr_34638_34778[(2)] = null);

(statearr_34638_34778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (2))){
var state_34636__$1 = state_34636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34636__$1,(4),jobs);
} else {
if((state_val_34637 === (3))){
var inst_34634 = (state_34636[(2)]);
var state_34636__$1 = state_34636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34636__$1,inst_34634);
} else {
if((state_val_34637 === (4))){
var inst_34626 = (state_34636[(2)]);
var inst_34627 = async.call(null,inst_34626);
var state_34636__$1 = state_34636;
if(cljs.core.truth_(inst_34627)){
var statearr_34639_34779 = state_34636__$1;
(statearr_34639_34779[(1)] = (5));

} else {
var statearr_34640_34780 = state_34636__$1;
(statearr_34640_34780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (5))){
var state_34636__$1 = state_34636;
var statearr_34641_34781 = state_34636__$1;
(statearr_34641_34781[(2)] = null);

(statearr_34641_34781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (6))){
var state_34636__$1 = state_34636;
var statearr_34642_34782 = state_34636__$1;
(statearr_34642_34782[(2)] = null);

(statearr_34642_34782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (7))){
var inst_34632 = (state_34636[(2)]);
var state_34636__$1 = state_34636;
var statearr_34643_34783 = state_34636__$1;
(statearr_34643_34783[(2)] = inst_34632);

(statearr_34643_34783[(1)] = (3));


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
});})(__34765,c__34203__auto___34777,G__34596_34766,n__25666__auto___34764,jobs,results,process,async))
;
return ((function (__34765,switch__34091__auto__,c__34203__auto___34777,G__34596_34766,n__25666__auto___34764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null];
(statearr_34647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1 = (function (state_34636){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34648){if((e34648 instanceof Object)){
var ex__34095__auto__ = e34648;
var statearr_34649_34784 = state_34636;
(statearr_34649_34784[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34785 = state_34636;
state_34636 = G__34785;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = function(state_34636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1.call(this,state_34636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__;
})()
;})(__34765,switch__34091__auto__,c__34203__auto___34777,G__34596_34766,n__25666__auto___34764,jobs,results,process,async))
})();
var state__34205__auto__ = (function (){var statearr_34650 = f__34204__auto__.call(null);
(statearr_34650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___34777);

return statearr_34650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(__34765,c__34203__auto___34777,G__34596_34766,n__25666__auto___34764,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34786 = (__34765 + (1));
__34765 = G__34786;
continue;
} else {
}
break;
}

var c__34203__auto___34787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___34787,jobs,results,process,async){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___34787,jobs,results,process,async){
return (function (state_34672){
var state_val_34673 = (state_34672[(1)]);
if((state_val_34673 === (1))){
var state_34672__$1 = state_34672;
var statearr_34674_34788 = state_34672__$1;
(statearr_34674_34788[(2)] = null);

(statearr_34674_34788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (2))){
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34672__$1,(4),from);
} else {
if((state_val_34673 === (3))){
var inst_34670 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34672__$1,inst_34670);
} else {
if((state_val_34673 === (4))){
var inst_34653 = (state_34672[(7)]);
var inst_34653__$1 = (state_34672[(2)]);
var inst_34654 = (inst_34653__$1 == null);
var state_34672__$1 = (function (){var statearr_34675 = state_34672;
(statearr_34675[(7)] = inst_34653__$1);

return statearr_34675;
})();
if(cljs.core.truth_(inst_34654)){
var statearr_34676_34789 = state_34672__$1;
(statearr_34676_34789[(1)] = (5));

} else {
var statearr_34677_34790 = state_34672__$1;
(statearr_34677_34790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (5))){
var inst_34656 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34672__$1 = state_34672;
var statearr_34678_34791 = state_34672__$1;
(statearr_34678_34791[(2)] = inst_34656);

(statearr_34678_34791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (6))){
var inst_34658 = (state_34672[(8)]);
var inst_34653 = (state_34672[(7)]);
var inst_34658__$1 = cljs.core.async.chan.call(null,(1));
var inst_34659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34660 = [inst_34653,inst_34658__$1];
var inst_34661 = (new cljs.core.PersistentVector(null,2,(5),inst_34659,inst_34660,null));
var state_34672__$1 = (function (){var statearr_34679 = state_34672;
(statearr_34679[(8)] = inst_34658__$1);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34672__$1,(8),jobs,inst_34661);
} else {
if((state_val_34673 === (7))){
var inst_34668 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
var statearr_34680_34792 = state_34672__$1;
(statearr_34680_34792[(2)] = inst_34668);

(statearr_34680_34792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (8))){
var inst_34658 = (state_34672[(8)]);
var inst_34663 = (state_34672[(2)]);
var state_34672__$1 = (function (){var statearr_34681 = state_34672;
(statearr_34681[(9)] = inst_34663);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34672__$1,(9),results,inst_34658);
} else {
if((state_val_34673 === (9))){
var inst_34665 = (state_34672[(2)]);
var state_34672__$1 = (function (){var statearr_34682 = state_34672;
(statearr_34682[(10)] = inst_34665);

return statearr_34682;
})();
var statearr_34683_34793 = state_34672__$1;
(statearr_34683_34793[(2)] = null);

(statearr_34683_34793[(1)] = (2));


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
});})(c__34203__auto___34787,jobs,results,process,async))
;
return ((function (switch__34091__auto__,c__34203__auto___34787,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0 = (function (){
var statearr_34687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__);

(statearr_34687[(1)] = (1));

return statearr_34687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1 = (function (state_34672){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34688){if((e34688 instanceof Object)){
var ex__34095__auto__ = e34688;
var statearr_34689_34794 = state_34672;
(statearr_34689_34794[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34795 = state_34672;
state_34672 = G__34795;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = function(state_34672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1.call(this,state_34672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___34787,jobs,results,process,async))
})();
var state__34205__auto__ = (function (){var statearr_34690 = f__34204__auto__.call(null);
(statearr_34690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___34787);

return statearr_34690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___34787,jobs,results,process,async))
);


var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__,jobs,results,process,async){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__,jobs,results,process,async){
return (function (state_34728){
var state_val_34729 = (state_34728[(1)]);
if((state_val_34729 === (7))){
var inst_34724 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34730_34796 = state_34728__$1;
(statearr_34730_34796[(2)] = inst_34724);

(statearr_34730_34796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (20))){
var state_34728__$1 = state_34728;
var statearr_34731_34797 = state_34728__$1;
(statearr_34731_34797[(2)] = null);

(statearr_34731_34797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (1))){
var state_34728__$1 = state_34728;
var statearr_34732_34798 = state_34728__$1;
(statearr_34732_34798[(2)] = null);

(statearr_34732_34798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (4))){
var inst_34693 = (state_34728[(7)]);
var inst_34693__$1 = (state_34728[(2)]);
var inst_34694 = (inst_34693__$1 == null);
var state_34728__$1 = (function (){var statearr_34733 = state_34728;
(statearr_34733[(7)] = inst_34693__$1);

return statearr_34733;
})();
if(cljs.core.truth_(inst_34694)){
var statearr_34734_34799 = state_34728__$1;
(statearr_34734_34799[(1)] = (5));

} else {
var statearr_34735_34800 = state_34728__$1;
(statearr_34735_34800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (15))){
var inst_34706 = (state_34728[(8)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34728__$1,(18),to,inst_34706);
} else {
if((state_val_34729 === (21))){
var inst_34719 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34736_34801 = state_34728__$1;
(statearr_34736_34801[(2)] = inst_34719);

(statearr_34736_34801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (13))){
var inst_34721 = (state_34728[(2)]);
var state_34728__$1 = (function (){var statearr_34737 = state_34728;
(statearr_34737[(9)] = inst_34721);

return statearr_34737;
})();
var statearr_34738_34802 = state_34728__$1;
(statearr_34738_34802[(2)] = null);

(statearr_34738_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (6))){
var inst_34693 = (state_34728[(7)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34728__$1,(11),inst_34693);
} else {
if((state_val_34729 === (17))){
var inst_34714 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
if(cljs.core.truth_(inst_34714)){
var statearr_34739_34803 = state_34728__$1;
(statearr_34739_34803[(1)] = (19));

} else {
var statearr_34740_34804 = state_34728__$1;
(statearr_34740_34804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (3))){
var inst_34726 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34728__$1,inst_34726);
} else {
if((state_val_34729 === (12))){
var inst_34703 = (state_34728[(10)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34728__$1,(14),inst_34703);
} else {
if((state_val_34729 === (2))){
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34728__$1,(4),results);
} else {
if((state_val_34729 === (19))){
var state_34728__$1 = state_34728;
var statearr_34741_34805 = state_34728__$1;
(statearr_34741_34805[(2)] = null);

(statearr_34741_34805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (11))){
var inst_34703 = (state_34728[(2)]);
var state_34728__$1 = (function (){var statearr_34742 = state_34728;
(statearr_34742[(10)] = inst_34703);

return statearr_34742;
})();
var statearr_34743_34806 = state_34728__$1;
(statearr_34743_34806[(2)] = null);

(statearr_34743_34806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (9))){
var state_34728__$1 = state_34728;
var statearr_34744_34807 = state_34728__$1;
(statearr_34744_34807[(2)] = null);

(statearr_34744_34807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (5))){
var state_34728__$1 = state_34728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34745_34808 = state_34728__$1;
(statearr_34745_34808[(1)] = (8));

} else {
var statearr_34746_34809 = state_34728__$1;
(statearr_34746_34809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (14))){
var inst_34706 = (state_34728[(8)]);
var inst_34708 = (state_34728[(11)]);
var inst_34706__$1 = (state_34728[(2)]);
var inst_34707 = (inst_34706__$1 == null);
var inst_34708__$1 = cljs.core.not.call(null,inst_34707);
var state_34728__$1 = (function (){var statearr_34747 = state_34728;
(statearr_34747[(8)] = inst_34706__$1);

(statearr_34747[(11)] = inst_34708__$1);

return statearr_34747;
})();
if(inst_34708__$1){
var statearr_34748_34810 = state_34728__$1;
(statearr_34748_34810[(1)] = (15));

} else {
var statearr_34749_34811 = state_34728__$1;
(statearr_34749_34811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (16))){
var inst_34708 = (state_34728[(11)]);
var state_34728__$1 = state_34728;
var statearr_34750_34812 = state_34728__$1;
(statearr_34750_34812[(2)] = inst_34708);

(statearr_34750_34812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (10))){
var inst_34700 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34751_34813 = state_34728__$1;
(statearr_34751_34813[(2)] = inst_34700);

(statearr_34751_34813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (18))){
var inst_34711 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34752_34814 = state_34728__$1;
(statearr_34752_34814[(2)] = inst_34711);

(statearr_34752_34814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (8))){
var inst_34697 = cljs.core.async.close_BANG_.call(null,to);
var state_34728__$1 = state_34728;
var statearr_34753_34815 = state_34728__$1;
(statearr_34753_34815[(2)] = inst_34697);

(statearr_34753_34815[(1)] = (10));


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
});})(c__34203__auto__,jobs,results,process,async))
;
return ((function (switch__34091__auto__,c__34203__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0 = (function (){
var statearr_34757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__);

(statearr_34757[(1)] = (1));

return statearr_34757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1 = (function (state_34728){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34758){if((e34758 instanceof Object)){
var ex__34095__auto__ = e34758;
var statearr_34759_34816 = state_34728;
(statearr_34759_34816[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34817 = state_34728;
state_34728 = G__34817;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__ = function(state_34728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1.call(this,state_34728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__,jobs,results,process,async))
})();
var state__34205__auto__ = (function (){var statearr_34760 = f__34204__auto__.call(null);
(statearr_34760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_34760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__,jobs,results,process,async))
);

return c__34203__auto__;
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
var args34818 = [];
var len__25826__auto___34821 = arguments.length;
var i__25827__auto___34822 = (0);
while(true){
if((i__25827__auto___34822 < len__25826__auto___34821)){
args34818.push((arguments[i__25827__auto___34822]));

var G__34823 = (i__25827__auto___34822 + (1));
i__25827__auto___34822 = G__34823;
continue;
} else {
}
break;
}

var G__34820 = args34818.length;
switch (G__34820) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34818.length)].join('')));

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
var args34825 = [];
var len__25826__auto___34828 = arguments.length;
var i__25827__auto___34829 = (0);
while(true){
if((i__25827__auto___34829 < len__25826__auto___34828)){
args34825.push((arguments[i__25827__auto___34829]));

var G__34830 = (i__25827__auto___34829 + (1));
i__25827__auto___34829 = G__34830;
continue;
} else {
}
break;
}

var G__34827 = args34825.length;
switch (G__34827) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34825.length)].join('')));

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
var args34832 = [];
var len__25826__auto___34885 = arguments.length;
var i__25827__auto___34886 = (0);
while(true){
if((i__25827__auto___34886 < len__25826__auto___34885)){
args34832.push((arguments[i__25827__auto___34886]));

var G__34887 = (i__25827__auto___34886 + (1));
i__25827__auto___34886 = G__34887;
continue;
} else {
}
break;
}

var G__34834 = args34832.length;
switch (G__34834) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34832.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34203__auto___34889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___34889,tc,fc){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___34889,tc,fc){
return (function (state_34860){
var state_val_34861 = (state_34860[(1)]);
if((state_val_34861 === (7))){
var inst_34856 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34862_34890 = state_34860__$1;
(statearr_34862_34890[(2)] = inst_34856);

(statearr_34862_34890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (1))){
var state_34860__$1 = state_34860;
var statearr_34863_34891 = state_34860__$1;
(statearr_34863_34891[(2)] = null);

(statearr_34863_34891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (4))){
var inst_34837 = (state_34860[(7)]);
var inst_34837__$1 = (state_34860[(2)]);
var inst_34838 = (inst_34837__$1 == null);
var state_34860__$1 = (function (){var statearr_34864 = state_34860;
(statearr_34864[(7)] = inst_34837__$1);

return statearr_34864;
})();
if(cljs.core.truth_(inst_34838)){
var statearr_34865_34892 = state_34860__$1;
(statearr_34865_34892[(1)] = (5));

} else {
var statearr_34866_34893 = state_34860__$1;
(statearr_34866_34893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (13))){
var state_34860__$1 = state_34860;
var statearr_34867_34894 = state_34860__$1;
(statearr_34867_34894[(2)] = null);

(statearr_34867_34894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (6))){
var inst_34837 = (state_34860[(7)]);
var inst_34843 = p.call(null,inst_34837);
var state_34860__$1 = state_34860;
if(cljs.core.truth_(inst_34843)){
var statearr_34868_34895 = state_34860__$1;
(statearr_34868_34895[(1)] = (9));

} else {
var statearr_34869_34896 = state_34860__$1;
(statearr_34869_34896[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (3))){
var inst_34858 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34860__$1,inst_34858);
} else {
if((state_val_34861 === (12))){
var state_34860__$1 = state_34860;
var statearr_34870_34897 = state_34860__$1;
(statearr_34870_34897[(2)] = null);

(statearr_34870_34897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (2))){
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34860__$1,(4),ch);
} else {
if((state_val_34861 === (11))){
var inst_34837 = (state_34860[(7)]);
var inst_34847 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34860__$1,(8),inst_34847,inst_34837);
} else {
if((state_val_34861 === (9))){
var state_34860__$1 = state_34860;
var statearr_34871_34898 = state_34860__$1;
(statearr_34871_34898[(2)] = tc);

(statearr_34871_34898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (5))){
var inst_34840 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34841 = cljs.core.async.close_BANG_.call(null,fc);
var state_34860__$1 = (function (){var statearr_34872 = state_34860;
(statearr_34872[(8)] = inst_34840);

return statearr_34872;
})();
var statearr_34873_34899 = state_34860__$1;
(statearr_34873_34899[(2)] = inst_34841);

(statearr_34873_34899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (14))){
var inst_34854 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34874_34900 = state_34860__$1;
(statearr_34874_34900[(2)] = inst_34854);

(statearr_34874_34900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (10))){
var state_34860__$1 = state_34860;
var statearr_34875_34901 = state_34860__$1;
(statearr_34875_34901[(2)] = fc);

(statearr_34875_34901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (8))){
var inst_34849 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
if(cljs.core.truth_(inst_34849)){
var statearr_34876_34902 = state_34860__$1;
(statearr_34876_34902[(1)] = (12));

} else {
var statearr_34877_34903 = state_34860__$1;
(statearr_34877_34903[(1)] = (13));

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
});})(c__34203__auto___34889,tc,fc))
;
return ((function (switch__34091__auto__,c__34203__auto___34889,tc,fc){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_34881 = [null,null,null,null,null,null,null,null,null];
(statearr_34881[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_34881[(1)] = (1));

return statearr_34881;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_34860){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34882){if((e34882 instanceof Object)){
var ex__34095__auto__ = e34882;
var statearr_34883_34904 = state_34860;
(statearr_34883_34904[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34905 = state_34860;
state_34860 = G__34905;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_34860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_34860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___34889,tc,fc))
})();
var state__34205__auto__ = (function (){var statearr_34884 = f__34204__auto__.call(null);
(statearr_34884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___34889);

return statearr_34884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___34889,tc,fc))
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
var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__){
return (function (state_34969){
var state_val_34970 = (state_34969[(1)]);
if((state_val_34970 === (7))){
var inst_34965 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34971_34992 = state_34969__$1;
(statearr_34971_34992[(2)] = inst_34965);

(statearr_34971_34992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (1))){
var inst_34949 = init;
var state_34969__$1 = (function (){var statearr_34972 = state_34969;
(statearr_34972[(7)] = inst_34949);

return statearr_34972;
})();
var statearr_34973_34993 = state_34969__$1;
(statearr_34973_34993[(2)] = null);

(statearr_34973_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (4))){
var inst_34952 = (state_34969[(8)]);
var inst_34952__$1 = (state_34969[(2)]);
var inst_34953 = (inst_34952__$1 == null);
var state_34969__$1 = (function (){var statearr_34974 = state_34969;
(statearr_34974[(8)] = inst_34952__$1);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_34975_34994 = state_34969__$1;
(statearr_34975_34994[(1)] = (5));

} else {
var statearr_34976_34995 = state_34969__$1;
(statearr_34976_34995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (6))){
var inst_34952 = (state_34969[(8)]);
var inst_34956 = (state_34969[(9)]);
var inst_34949 = (state_34969[(7)]);
var inst_34956__$1 = f.call(null,inst_34949,inst_34952);
var inst_34957 = cljs.core.reduced_QMARK_.call(null,inst_34956__$1);
var state_34969__$1 = (function (){var statearr_34977 = state_34969;
(statearr_34977[(9)] = inst_34956__$1);

return statearr_34977;
})();
if(inst_34957){
var statearr_34978_34996 = state_34969__$1;
(statearr_34978_34996[(1)] = (8));

} else {
var statearr_34979_34997 = state_34969__$1;
(statearr_34979_34997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (3))){
var inst_34967 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34969__$1,inst_34967);
} else {
if((state_val_34970 === (2))){
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34969__$1,(4),ch);
} else {
if((state_val_34970 === (9))){
var inst_34956 = (state_34969[(9)]);
var inst_34949 = inst_34956;
var state_34969__$1 = (function (){var statearr_34980 = state_34969;
(statearr_34980[(7)] = inst_34949);

return statearr_34980;
})();
var statearr_34981_34998 = state_34969__$1;
(statearr_34981_34998[(2)] = null);

(statearr_34981_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (5))){
var inst_34949 = (state_34969[(7)]);
var state_34969__$1 = state_34969;
var statearr_34982_34999 = state_34969__$1;
(statearr_34982_34999[(2)] = inst_34949);

(statearr_34982_34999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (10))){
var inst_34963 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
var statearr_34983_35000 = state_34969__$1;
(statearr_34983_35000[(2)] = inst_34963);

(statearr_34983_35000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (8))){
var inst_34956 = (state_34969[(9)]);
var inst_34959 = cljs.core.deref.call(null,inst_34956);
var state_34969__$1 = state_34969;
var statearr_34984_35001 = state_34969__$1;
(statearr_34984_35001[(2)] = inst_34959);

(statearr_34984_35001[(1)] = (10));


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
});})(c__34203__auto__))
;
return ((function (switch__34091__auto__,c__34203__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34092__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34092__auto____0 = (function (){
var statearr_34988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34988[(0)] = cljs$core$async$reduce_$_state_machine__34092__auto__);

(statearr_34988[(1)] = (1));

return statearr_34988;
});
var cljs$core$async$reduce_$_state_machine__34092__auto____1 = (function (state_34969){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_34969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e34989){if((e34989 instanceof Object)){
var ex__34095__auto__ = e34989;
var statearr_34990_35002 = state_34969;
(statearr_34990_35002[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35003 = state_34969;
state_34969 = G__35003;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34092__auto__ = function(state_34969){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34092__auto____1.call(this,state_34969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34092__auto____0;
cljs$core$async$reduce_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34092__auto____1;
return cljs$core$async$reduce_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__))
})();
var state__34205__auto__ = (function (){var statearr_34991 = f__34204__auto__.call(null);
(statearr_34991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_34991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__))
);

return c__34203__auto__;
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
var args35004 = [];
var len__25826__auto___35056 = arguments.length;
var i__25827__auto___35057 = (0);
while(true){
if((i__25827__auto___35057 < len__25826__auto___35056)){
args35004.push((arguments[i__25827__auto___35057]));

var G__35058 = (i__25827__auto___35057 + (1));
i__25827__auto___35057 = G__35058;
continue;
} else {
}
break;
}

var G__35006 = args35004.length;
switch (G__35006) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35004.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__){
return (function (state_35031){
var state_val_35032 = (state_35031[(1)]);
if((state_val_35032 === (7))){
var inst_35013 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35033_35060 = state_35031__$1;
(statearr_35033_35060[(2)] = inst_35013);

(statearr_35033_35060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (1))){
var inst_35007 = cljs.core.seq.call(null,coll);
var inst_35008 = inst_35007;
var state_35031__$1 = (function (){var statearr_35034 = state_35031;
(statearr_35034[(7)] = inst_35008);

return statearr_35034;
})();
var statearr_35035_35061 = state_35031__$1;
(statearr_35035_35061[(2)] = null);

(statearr_35035_35061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (4))){
var inst_35008 = (state_35031[(7)]);
var inst_35011 = cljs.core.first.call(null,inst_35008);
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35031__$1,(7),ch,inst_35011);
} else {
if((state_val_35032 === (13))){
var inst_35025 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35036_35062 = state_35031__$1;
(statearr_35036_35062[(2)] = inst_35025);

(statearr_35036_35062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (6))){
var inst_35016 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
if(cljs.core.truth_(inst_35016)){
var statearr_35037_35063 = state_35031__$1;
(statearr_35037_35063[(1)] = (8));

} else {
var statearr_35038_35064 = state_35031__$1;
(statearr_35038_35064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (3))){
var inst_35029 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35031__$1,inst_35029);
} else {
if((state_val_35032 === (12))){
var state_35031__$1 = state_35031;
var statearr_35039_35065 = state_35031__$1;
(statearr_35039_35065[(2)] = null);

(statearr_35039_35065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (2))){
var inst_35008 = (state_35031[(7)]);
var state_35031__$1 = state_35031;
if(cljs.core.truth_(inst_35008)){
var statearr_35040_35066 = state_35031__$1;
(statearr_35040_35066[(1)] = (4));

} else {
var statearr_35041_35067 = state_35031__$1;
(statearr_35041_35067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (11))){
var inst_35022 = cljs.core.async.close_BANG_.call(null,ch);
var state_35031__$1 = state_35031;
var statearr_35042_35068 = state_35031__$1;
(statearr_35042_35068[(2)] = inst_35022);

(statearr_35042_35068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (9))){
var state_35031__$1 = state_35031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35043_35069 = state_35031__$1;
(statearr_35043_35069[(1)] = (11));

} else {
var statearr_35044_35070 = state_35031__$1;
(statearr_35044_35070[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (5))){
var inst_35008 = (state_35031[(7)]);
var state_35031__$1 = state_35031;
var statearr_35045_35071 = state_35031__$1;
(statearr_35045_35071[(2)] = inst_35008);

(statearr_35045_35071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (10))){
var inst_35027 = (state_35031[(2)]);
var state_35031__$1 = state_35031;
var statearr_35046_35072 = state_35031__$1;
(statearr_35046_35072[(2)] = inst_35027);

(statearr_35046_35072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35032 === (8))){
var inst_35008 = (state_35031[(7)]);
var inst_35018 = cljs.core.next.call(null,inst_35008);
var inst_35008__$1 = inst_35018;
var state_35031__$1 = (function (){var statearr_35047 = state_35031;
(statearr_35047[(7)] = inst_35008__$1);

return statearr_35047;
})();
var statearr_35048_35073 = state_35031__$1;
(statearr_35048_35073[(2)] = null);

(statearr_35048_35073[(1)] = (2));


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
});})(c__34203__auto__))
;
return ((function (switch__34091__auto__,c__34203__auto__){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_35031){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_35031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__34095__auto__ = e35053;
var statearr_35054_35074 = state_35031;
(statearr_35054_35074[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35075 = state_35031;
state_35031 = G__35075;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_35031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_35031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__))
})();
var state__34205__auto__ = (function (){var statearr_35055 = f__34204__auto__.call(null);
(statearr_35055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__))
);

return c__34203__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35301 = (function (mult,ch,cs,meta35302){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35302 = meta35302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35303,meta35302__$1){
var self__ = this;
var _35303__$1 = this;
return (new cljs.core.async.t_cljs$core$async35301(self__.mult,self__.ch,self__.cs,meta35302__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35303){
var self__ = this;
var _35303__$1 = this;
return self__.meta35302;
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35302","meta35302",1099996486,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35301";

cljs.core.async.t_cljs$core$async35301.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async35301");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35301 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35301(mult__$1,ch__$1,cs__$1,meta35302){
return (new cljs.core.async.t_cljs$core$async35301(mult__$1,ch__$1,cs__$1,meta35302));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35301(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34203__auto___35526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___35526,cs,m,dchan,dctr,done){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___35526,cs,m,dchan,dctr,done){
return (function (state_35438){
var state_val_35439 = (state_35438[(1)]);
if((state_val_35439 === (7))){
var inst_35434 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35440_35527 = state_35438__$1;
(statearr_35440_35527[(2)] = inst_35434);

(statearr_35440_35527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (20))){
var inst_35337 = (state_35438[(7)]);
var inst_35349 = cljs.core.first.call(null,inst_35337);
var inst_35350 = cljs.core.nth.call(null,inst_35349,(0),null);
var inst_35351 = cljs.core.nth.call(null,inst_35349,(1),null);
var state_35438__$1 = (function (){var statearr_35441 = state_35438;
(statearr_35441[(8)] = inst_35350);

return statearr_35441;
})();
if(cljs.core.truth_(inst_35351)){
var statearr_35442_35528 = state_35438__$1;
(statearr_35442_35528[(1)] = (22));

} else {
var statearr_35443_35529 = state_35438__$1;
(statearr_35443_35529[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (27))){
var inst_35306 = (state_35438[(9)]);
var inst_35379 = (state_35438[(10)]);
var inst_35381 = (state_35438[(11)]);
var inst_35386 = (state_35438[(12)]);
var inst_35386__$1 = cljs.core._nth.call(null,inst_35379,inst_35381);
var inst_35387 = cljs.core.async.put_BANG_.call(null,inst_35386__$1,inst_35306,done);
var state_35438__$1 = (function (){var statearr_35444 = state_35438;
(statearr_35444[(12)] = inst_35386__$1);

return statearr_35444;
})();
if(cljs.core.truth_(inst_35387)){
var statearr_35445_35530 = state_35438__$1;
(statearr_35445_35530[(1)] = (30));

} else {
var statearr_35446_35531 = state_35438__$1;
(statearr_35446_35531[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (1))){
var state_35438__$1 = state_35438;
var statearr_35447_35532 = state_35438__$1;
(statearr_35447_35532[(2)] = null);

(statearr_35447_35532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (24))){
var inst_35337 = (state_35438[(7)]);
var inst_35356 = (state_35438[(2)]);
var inst_35357 = cljs.core.next.call(null,inst_35337);
var inst_35315 = inst_35357;
var inst_35316 = null;
var inst_35317 = (0);
var inst_35318 = (0);
var state_35438__$1 = (function (){var statearr_35448 = state_35438;
(statearr_35448[(13)] = inst_35317);

(statearr_35448[(14)] = inst_35356);

(statearr_35448[(15)] = inst_35318);

(statearr_35448[(16)] = inst_35316);

(statearr_35448[(17)] = inst_35315);

return statearr_35448;
})();
var statearr_35449_35533 = state_35438__$1;
(statearr_35449_35533[(2)] = null);

(statearr_35449_35533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (39))){
var state_35438__$1 = state_35438;
var statearr_35453_35534 = state_35438__$1;
(statearr_35453_35534[(2)] = null);

(statearr_35453_35534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (4))){
var inst_35306 = (state_35438[(9)]);
var inst_35306__$1 = (state_35438[(2)]);
var inst_35307 = (inst_35306__$1 == null);
var state_35438__$1 = (function (){var statearr_35454 = state_35438;
(statearr_35454[(9)] = inst_35306__$1);

return statearr_35454;
})();
if(cljs.core.truth_(inst_35307)){
var statearr_35455_35535 = state_35438__$1;
(statearr_35455_35535[(1)] = (5));

} else {
var statearr_35456_35536 = state_35438__$1;
(statearr_35456_35536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (15))){
var inst_35317 = (state_35438[(13)]);
var inst_35318 = (state_35438[(15)]);
var inst_35316 = (state_35438[(16)]);
var inst_35315 = (state_35438[(17)]);
var inst_35333 = (state_35438[(2)]);
var inst_35334 = (inst_35318 + (1));
var tmp35450 = inst_35317;
var tmp35451 = inst_35316;
var tmp35452 = inst_35315;
var inst_35315__$1 = tmp35452;
var inst_35316__$1 = tmp35451;
var inst_35317__$1 = tmp35450;
var inst_35318__$1 = inst_35334;
var state_35438__$1 = (function (){var statearr_35457 = state_35438;
(statearr_35457[(13)] = inst_35317__$1);

(statearr_35457[(18)] = inst_35333);

(statearr_35457[(15)] = inst_35318__$1);

(statearr_35457[(16)] = inst_35316__$1);

(statearr_35457[(17)] = inst_35315__$1);

return statearr_35457;
})();
var statearr_35458_35537 = state_35438__$1;
(statearr_35458_35537[(2)] = null);

(statearr_35458_35537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (21))){
var inst_35360 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35462_35538 = state_35438__$1;
(statearr_35462_35538[(2)] = inst_35360);

(statearr_35462_35538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (31))){
var inst_35386 = (state_35438[(12)]);
var inst_35390 = done.call(null,null);
var inst_35391 = cljs.core.async.untap_STAR_.call(null,m,inst_35386);
var state_35438__$1 = (function (){var statearr_35463 = state_35438;
(statearr_35463[(19)] = inst_35390);

return statearr_35463;
})();
var statearr_35464_35539 = state_35438__$1;
(statearr_35464_35539[(2)] = inst_35391);

(statearr_35464_35539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (32))){
var inst_35379 = (state_35438[(10)]);
var inst_35378 = (state_35438[(20)]);
var inst_35381 = (state_35438[(11)]);
var inst_35380 = (state_35438[(21)]);
var inst_35393 = (state_35438[(2)]);
var inst_35394 = (inst_35381 + (1));
var tmp35459 = inst_35379;
var tmp35460 = inst_35378;
var tmp35461 = inst_35380;
var inst_35378__$1 = tmp35460;
var inst_35379__$1 = tmp35459;
var inst_35380__$1 = tmp35461;
var inst_35381__$1 = inst_35394;
var state_35438__$1 = (function (){var statearr_35465 = state_35438;
(statearr_35465[(10)] = inst_35379__$1);

(statearr_35465[(20)] = inst_35378__$1);

(statearr_35465[(11)] = inst_35381__$1);

(statearr_35465[(22)] = inst_35393);

(statearr_35465[(21)] = inst_35380__$1);

return statearr_35465;
})();
var statearr_35466_35540 = state_35438__$1;
(statearr_35466_35540[(2)] = null);

(statearr_35466_35540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (40))){
var inst_35406 = (state_35438[(23)]);
var inst_35410 = done.call(null,null);
var inst_35411 = cljs.core.async.untap_STAR_.call(null,m,inst_35406);
var state_35438__$1 = (function (){var statearr_35467 = state_35438;
(statearr_35467[(24)] = inst_35410);

return statearr_35467;
})();
var statearr_35468_35541 = state_35438__$1;
(statearr_35468_35541[(2)] = inst_35411);

(statearr_35468_35541[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (33))){
var inst_35397 = (state_35438[(25)]);
var inst_35399 = cljs.core.chunked_seq_QMARK_.call(null,inst_35397);
var state_35438__$1 = state_35438;
if(inst_35399){
var statearr_35469_35542 = state_35438__$1;
(statearr_35469_35542[(1)] = (36));

} else {
var statearr_35470_35543 = state_35438__$1;
(statearr_35470_35543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (13))){
var inst_35327 = (state_35438[(26)]);
var inst_35330 = cljs.core.async.close_BANG_.call(null,inst_35327);
var state_35438__$1 = state_35438;
var statearr_35471_35544 = state_35438__$1;
(statearr_35471_35544[(2)] = inst_35330);

(statearr_35471_35544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (22))){
var inst_35350 = (state_35438[(8)]);
var inst_35353 = cljs.core.async.close_BANG_.call(null,inst_35350);
var state_35438__$1 = state_35438;
var statearr_35472_35545 = state_35438__$1;
(statearr_35472_35545[(2)] = inst_35353);

(statearr_35472_35545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (36))){
var inst_35397 = (state_35438[(25)]);
var inst_35401 = cljs.core.chunk_first.call(null,inst_35397);
var inst_35402 = cljs.core.chunk_rest.call(null,inst_35397);
var inst_35403 = cljs.core.count.call(null,inst_35401);
var inst_35378 = inst_35402;
var inst_35379 = inst_35401;
var inst_35380 = inst_35403;
var inst_35381 = (0);
var state_35438__$1 = (function (){var statearr_35473 = state_35438;
(statearr_35473[(10)] = inst_35379);

(statearr_35473[(20)] = inst_35378);

(statearr_35473[(11)] = inst_35381);

(statearr_35473[(21)] = inst_35380);

return statearr_35473;
})();
var statearr_35474_35546 = state_35438__$1;
(statearr_35474_35546[(2)] = null);

(statearr_35474_35546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (41))){
var inst_35397 = (state_35438[(25)]);
var inst_35413 = (state_35438[(2)]);
var inst_35414 = cljs.core.next.call(null,inst_35397);
var inst_35378 = inst_35414;
var inst_35379 = null;
var inst_35380 = (0);
var inst_35381 = (0);
var state_35438__$1 = (function (){var statearr_35475 = state_35438;
(statearr_35475[(27)] = inst_35413);

(statearr_35475[(10)] = inst_35379);

(statearr_35475[(20)] = inst_35378);

(statearr_35475[(11)] = inst_35381);

(statearr_35475[(21)] = inst_35380);

return statearr_35475;
})();
var statearr_35476_35547 = state_35438__$1;
(statearr_35476_35547[(2)] = null);

(statearr_35476_35547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (43))){
var state_35438__$1 = state_35438;
var statearr_35477_35548 = state_35438__$1;
(statearr_35477_35548[(2)] = null);

(statearr_35477_35548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (29))){
var inst_35422 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35478_35549 = state_35438__$1;
(statearr_35478_35549[(2)] = inst_35422);

(statearr_35478_35549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (44))){
var inst_35431 = (state_35438[(2)]);
var state_35438__$1 = (function (){var statearr_35479 = state_35438;
(statearr_35479[(28)] = inst_35431);

return statearr_35479;
})();
var statearr_35480_35550 = state_35438__$1;
(statearr_35480_35550[(2)] = null);

(statearr_35480_35550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (6))){
var inst_35370 = (state_35438[(29)]);
var inst_35369 = cljs.core.deref.call(null,cs);
var inst_35370__$1 = cljs.core.keys.call(null,inst_35369);
var inst_35371 = cljs.core.count.call(null,inst_35370__$1);
var inst_35372 = cljs.core.reset_BANG_.call(null,dctr,inst_35371);
var inst_35377 = cljs.core.seq.call(null,inst_35370__$1);
var inst_35378 = inst_35377;
var inst_35379 = null;
var inst_35380 = (0);
var inst_35381 = (0);
var state_35438__$1 = (function (){var statearr_35481 = state_35438;
(statearr_35481[(29)] = inst_35370__$1);

(statearr_35481[(10)] = inst_35379);

(statearr_35481[(20)] = inst_35378);

(statearr_35481[(11)] = inst_35381);

(statearr_35481[(30)] = inst_35372);

(statearr_35481[(21)] = inst_35380);

return statearr_35481;
})();
var statearr_35482_35551 = state_35438__$1;
(statearr_35482_35551[(2)] = null);

(statearr_35482_35551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (28))){
var inst_35378 = (state_35438[(20)]);
var inst_35397 = (state_35438[(25)]);
var inst_35397__$1 = cljs.core.seq.call(null,inst_35378);
var state_35438__$1 = (function (){var statearr_35483 = state_35438;
(statearr_35483[(25)] = inst_35397__$1);

return statearr_35483;
})();
if(inst_35397__$1){
var statearr_35484_35552 = state_35438__$1;
(statearr_35484_35552[(1)] = (33));

} else {
var statearr_35485_35553 = state_35438__$1;
(statearr_35485_35553[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (25))){
var inst_35381 = (state_35438[(11)]);
var inst_35380 = (state_35438[(21)]);
var inst_35383 = (inst_35381 < inst_35380);
var inst_35384 = inst_35383;
var state_35438__$1 = state_35438;
if(cljs.core.truth_(inst_35384)){
var statearr_35486_35554 = state_35438__$1;
(statearr_35486_35554[(1)] = (27));

} else {
var statearr_35487_35555 = state_35438__$1;
(statearr_35487_35555[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (34))){
var state_35438__$1 = state_35438;
var statearr_35488_35556 = state_35438__$1;
(statearr_35488_35556[(2)] = null);

(statearr_35488_35556[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (17))){
var state_35438__$1 = state_35438;
var statearr_35489_35557 = state_35438__$1;
(statearr_35489_35557[(2)] = null);

(statearr_35489_35557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (3))){
var inst_35436 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35438__$1,inst_35436);
} else {
if((state_val_35439 === (12))){
var inst_35365 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35490_35558 = state_35438__$1;
(statearr_35490_35558[(2)] = inst_35365);

(statearr_35490_35558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (2))){
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35438__$1,(4),ch);
} else {
if((state_val_35439 === (23))){
var state_35438__$1 = state_35438;
var statearr_35491_35559 = state_35438__$1;
(statearr_35491_35559[(2)] = null);

(statearr_35491_35559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (35))){
var inst_35420 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35492_35560 = state_35438__$1;
(statearr_35492_35560[(2)] = inst_35420);

(statearr_35492_35560[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (19))){
var inst_35337 = (state_35438[(7)]);
var inst_35341 = cljs.core.chunk_first.call(null,inst_35337);
var inst_35342 = cljs.core.chunk_rest.call(null,inst_35337);
var inst_35343 = cljs.core.count.call(null,inst_35341);
var inst_35315 = inst_35342;
var inst_35316 = inst_35341;
var inst_35317 = inst_35343;
var inst_35318 = (0);
var state_35438__$1 = (function (){var statearr_35493 = state_35438;
(statearr_35493[(13)] = inst_35317);

(statearr_35493[(15)] = inst_35318);

(statearr_35493[(16)] = inst_35316);

(statearr_35493[(17)] = inst_35315);

return statearr_35493;
})();
var statearr_35494_35561 = state_35438__$1;
(statearr_35494_35561[(2)] = null);

(statearr_35494_35561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (11))){
var inst_35337 = (state_35438[(7)]);
var inst_35315 = (state_35438[(17)]);
var inst_35337__$1 = cljs.core.seq.call(null,inst_35315);
var state_35438__$1 = (function (){var statearr_35495 = state_35438;
(statearr_35495[(7)] = inst_35337__$1);

return statearr_35495;
})();
if(inst_35337__$1){
var statearr_35496_35562 = state_35438__$1;
(statearr_35496_35562[(1)] = (16));

} else {
var statearr_35497_35563 = state_35438__$1;
(statearr_35497_35563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (9))){
var inst_35367 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35498_35564 = state_35438__$1;
(statearr_35498_35564[(2)] = inst_35367);

(statearr_35498_35564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (5))){
var inst_35313 = cljs.core.deref.call(null,cs);
var inst_35314 = cljs.core.seq.call(null,inst_35313);
var inst_35315 = inst_35314;
var inst_35316 = null;
var inst_35317 = (0);
var inst_35318 = (0);
var state_35438__$1 = (function (){var statearr_35499 = state_35438;
(statearr_35499[(13)] = inst_35317);

(statearr_35499[(15)] = inst_35318);

(statearr_35499[(16)] = inst_35316);

(statearr_35499[(17)] = inst_35315);

return statearr_35499;
})();
var statearr_35500_35565 = state_35438__$1;
(statearr_35500_35565[(2)] = null);

(statearr_35500_35565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (14))){
var state_35438__$1 = state_35438;
var statearr_35501_35566 = state_35438__$1;
(statearr_35501_35566[(2)] = null);

(statearr_35501_35566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (45))){
var inst_35428 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35502_35567 = state_35438__$1;
(statearr_35502_35567[(2)] = inst_35428);

(statearr_35502_35567[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (26))){
var inst_35370 = (state_35438[(29)]);
var inst_35424 = (state_35438[(2)]);
var inst_35425 = cljs.core.seq.call(null,inst_35370);
var state_35438__$1 = (function (){var statearr_35503 = state_35438;
(statearr_35503[(31)] = inst_35424);

return statearr_35503;
})();
if(inst_35425){
var statearr_35504_35568 = state_35438__$1;
(statearr_35504_35568[(1)] = (42));

} else {
var statearr_35505_35569 = state_35438__$1;
(statearr_35505_35569[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (16))){
var inst_35337 = (state_35438[(7)]);
var inst_35339 = cljs.core.chunked_seq_QMARK_.call(null,inst_35337);
var state_35438__$1 = state_35438;
if(inst_35339){
var statearr_35506_35570 = state_35438__$1;
(statearr_35506_35570[(1)] = (19));

} else {
var statearr_35507_35571 = state_35438__$1;
(statearr_35507_35571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (38))){
var inst_35417 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35508_35572 = state_35438__$1;
(statearr_35508_35572[(2)] = inst_35417);

(statearr_35508_35572[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (30))){
var state_35438__$1 = state_35438;
var statearr_35509_35573 = state_35438__$1;
(statearr_35509_35573[(2)] = null);

(statearr_35509_35573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (10))){
var inst_35318 = (state_35438[(15)]);
var inst_35316 = (state_35438[(16)]);
var inst_35326 = cljs.core._nth.call(null,inst_35316,inst_35318);
var inst_35327 = cljs.core.nth.call(null,inst_35326,(0),null);
var inst_35328 = cljs.core.nth.call(null,inst_35326,(1),null);
var state_35438__$1 = (function (){var statearr_35510 = state_35438;
(statearr_35510[(26)] = inst_35327);

return statearr_35510;
})();
if(cljs.core.truth_(inst_35328)){
var statearr_35511_35574 = state_35438__$1;
(statearr_35511_35574[(1)] = (13));

} else {
var statearr_35512_35575 = state_35438__$1;
(statearr_35512_35575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (18))){
var inst_35363 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35513_35576 = state_35438__$1;
(statearr_35513_35576[(2)] = inst_35363);

(statearr_35513_35576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (42))){
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35438__$1,(45),dchan);
} else {
if((state_val_35439 === (37))){
var inst_35306 = (state_35438[(9)]);
var inst_35397 = (state_35438[(25)]);
var inst_35406 = (state_35438[(23)]);
var inst_35406__$1 = cljs.core.first.call(null,inst_35397);
var inst_35407 = cljs.core.async.put_BANG_.call(null,inst_35406__$1,inst_35306,done);
var state_35438__$1 = (function (){var statearr_35514 = state_35438;
(statearr_35514[(23)] = inst_35406__$1);

return statearr_35514;
})();
if(cljs.core.truth_(inst_35407)){
var statearr_35515_35577 = state_35438__$1;
(statearr_35515_35577[(1)] = (39));

} else {
var statearr_35516_35578 = state_35438__$1;
(statearr_35516_35578[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (8))){
var inst_35317 = (state_35438[(13)]);
var inst_35318 = (state_35438[(15)]);
var inst_35320 = (inst_35318 < inst_35317);
var inst_35321 = inst_35320;
var state_35438__$1 = state_35438;
if(cljs.core.truth_(inst_35321)){
var statearr_35517_35579 = state_35438__$1;
(statearr_35517_35579[(1)] = (10));

} else {
var statearr_35518_35580 = state_35438__$1;
(statearr_35518_35580[(1)] = (11));

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
});})(c__34203__auto___35526,cs,m,dchan,dctr,done))
;
return ((function (switch__34091__auto__,c__34203__auto___35526,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34092__auto__ = null;
var cljs$core$async$mult_$_state_machine__34092__auto____0 = (function (){
var statearr_35522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35522[(0)] = cljs$core$async$mult_$_state_machine__34092__auto__);

(statearr_35522[(1)] = (1));

return statearr_35522;
});
var cljs$core$async$mult_$_state_machine__34092__auto____1 = (function (state_35438){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_35438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e35523){if((e35523 instanceof Object)){
var ex__34095__auto__ = e35523;
var statearr_35524_35581 = state_35438;
(statearr_35524_35581[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35582 = state_35438;
state_35438 = G__35582;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34092__auto__ = function(state_35438){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34092__auto____1.call(this,state_35438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34092__auto____0;
cljs$core$async$mult_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34092__auto____1;
return cljs$core$async$mult_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___35526,cs,m,dchan,dctr,done))
})();
var state__34205__auto__ = (function (){var statearr_35525 = f__34204__auto__.call(null);
(statearr_35525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___35526);

return statearr_35525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___35526,cs,m,dchan,dctr,done))
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
var args35583 = [];
var len__25826__auto___35586 = arguments.length;
var i__25827__auto___35587 = (0);
while(true){
if((i__25827__auto___35587 < len__25826__auto___35586)){
args35583.push((arguments[i__25827__auto___35587]));

var G__35588 = (i__25827__auto___35587 + (1));
i__25827__auto___35587 = G__35588;
continue;
} else {
}
break;
}

var G__35585 = args35583.length;
switch (G__35585) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35583.length)].join('')));

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
var len__25826__auto___35600 = arguments.length;
var i__25827__auto___35601 = (0);
while(true){
if((i__25827__auto___35601 < len__25826__auto___35600)){
args__25833__auto__.push((arguments[i__25827__auto___35601]));

var G__35602 = (i__25827__auto___35601 + (1));
i__25827__auto___35601 = G__35602;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35594){
var map__35595 = p__35594;
var map__35595__$1 = ((((!((map__35595 == null)))?((((map__35595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35595):map__35595);
var opts = map__35595__$1;
var statearr_35597_35603 = state;
(statearr_35597_35603[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35595,map__35595__$1,opts){
return (function (val){
var statearr_35598_35604 = state;
(statearr_35598_35604[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35595,map__35595__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35599_35605 = state;
(statearr_35599_35605[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35590){
var G__35591 = cljs.core.first.call(null,seq35590);
var seq35590__$1 = cljs.core.next.call(null,seq35590);
var G__35592 = cljs.core.first.call(null,seq35590__$1);
var seq35590__$2 = cljs.core.next.call(null,seq35590__$1);
var G__35593 = cljs.core.first.call(null,seq35590__$2);
var seq35590__$3 = cljs.core.next.call(null,seq35590__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35591,G__35592,G__35593,seq35590__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35771 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35772){
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
this.meta35772 = meta35772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35773,meta35772__$1){
var self__ = this;
var _35773__$1 = this;
return (new cljs.core.async.t_cljs$core$async35771(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35772__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35773){
var self__ = this;
var _35773__$1 = this;
return self__.meta35772;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35771.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35772","meta35772",1874376481,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35771";

cljs.core.async.t_cljs$core$async35771.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async35771");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35771 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35771(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35772){
return (new cljs.core.async.t_cljs$core$async35771(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35772));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35771(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34203__auto___35936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___35936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___35936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35873){
var state_val_35874 = (state_35873[(1)]);
if((state_val_35874 === (7))){
var inst_35789 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35875_35937 = state_35873__$1;
(statearr_35875_35937[(2)] = inst_35789);

(statearr_35875_35937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (20))){
var inst_35801 = (state_35873[(7)]);
var state_35873__$1 = state_35873;
var statearr_35876_35938 = state_35873__$1;
(statearr_35876_35938[(2)] = inst_35801);

(statearr_35876_35938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (27))){
var state_35873__$1 = state_35873;
var statearr_35877_35939 = state_35873__$1;
(statearr_35877_35939[(2)] = null);

(statearr_35877_35939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (1))){
var inst_35777 = (state_35873[(8)]);
var inst_35777__$1 = calc_state.call(null);
var inst_35779 = (inst_35777__$1 == null);
var inst_35780 = cljs.core.not.call(null,inst_35779);
var state_35873__$1 = (function (){var statearr_35878 = state_35873;
(statearr_35878[(8)] = inst_35777__$1);

return statearr_35878;
})();
if(inst_35780){
var statearr_35879_35940 = state_35873__$1;
(statearr_35879_35940[(1)] = (2));

} else {
var statearr_35880_35941 = state_35873__$1;
(statearr_35880_35941[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (24))){
var inst_35847 = (state_35873[(9)]);
var inst_35833 = (state_35873[(10)]);
var inst_35824 = (state_35873[(11)]);
var inst_35847__$1 = inst_35824.call(null,inst_35833);
var state_35873__$1 = (function (){var statearr_35881 = state_35873;
(statearr_35881[(9)] = inst_35847__$1);

return statearr_35881;
})();
if(cljs.core.truth_(inst_35847__$1)){
var statearr_35882_35942 = state_35873__$1;
(statearr_35882_35942[(1)] = (29));

} else {
var statearr_35883_35943 = state_35873__$1;
(statearr_35883_35943[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (4))){
var inst_35792 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35792)){
var statearr_35884_35944 = state_35873__$1;
(statearr_35884_35944[(1)] = (8));

} else {
var statearr_35885_35945 = state_35873__$1;
(statearr_35885_35945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (15))){
var inst_35818 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35818)){
var statearr_35886_35946 = state_35873__$1;
(statearr_35886_35946[(1)] = (19));

} else {
var statearr_35887_35947 = state_35873__$1;
(statearr_35887_35947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (21))){
var inst_35823 = (state_35873[(12)]);
var inst_35823__$1 = (state_35873[(2)]);
var inst_35824 = cljs.core.get.call(null,inst_35823__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35825 = cljs.core.get.call(null,inst_35823__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35826 = cljs.core.get.call(null,inst_35823__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35873__$1 = (function (){var statearr_35888 = state_35873;
(statearr_35888[(12)] = inst_35823__$1);

(statearr_35888[(13)] = inst_35825);

(statearr_35888[(11)] = inst_35824);

return statearr_35888;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35873__$1,(22),inst_35826);
} else {
if((state_val_35874 === (31))){
var inst_35855 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35855)){
var statearr_35889_35948 = state_35873__$1;
(statearr_35889_35948[(1)] = (32));

} else {
var statearr_35890_35949 = state_35873__$1;
(statearr_35890_35949[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (32))){
var inst_35832 = (state_35873[(14)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35873__$1,(35),out,inst_35832);
} else {
if((state_val_35874 === (33))){
var inst_35823 = (state_35873[(12)]);
var inst_35801 = inst_35823;
var state_35873__$1 = (function (){var statearr_35891 = state_35873;
(statearr_35891[(7)] = inst_35801);

return statearr_35891;
})();
var statearr_35892_35950 = state_35873__$1;
(statearr_35892_35950[(2)] = null);

(statearr_35892_35950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (13))){
var inst_35801 = (state_35873[(7)]);
var inst_35808 = inst_35801.cljs$lang$protocol_mask$partition0$;
var inst_35809 = (inst_35808 & (64));
var inst_35810 = inst_35801.cljs$core$ISeq$;
var inst_35811 = (inst_35809) || (inst_35810);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35811)){
var statearr_35893_35951 = state_35873__$1;
(statearr_35893_35951[(1)] = (16));

} else {
var statearr_35894_35952 = state_35873__$1;
(statearr_35894_35952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (22))){
var inst_35833 = (state_35873[(10)]);
var inst_35832 = (state_35873[(14)]);
var inst_35831 = (state_35873[(2)]);
var inst_35832__$1 = cljs.core.nth.call(null,inst_35831,(0),null);
var inst_35833__$1 = cljs.core.nth.call(null,inst_35831,(1),null);
var inst_35834 = (inst_35832__$1 == null);
var inst_35835 = cljs.core._EQ_.call(null,inst_35833__$1,change);
var inst_35836 = (inst_35834) || (inst_35835);
var state_35873__$1 = (function (){var statearr_35895 = state_35873;
(statearr_35895[(10)] = inst_35833__$1);

(statearr_35895[(14)] = inst_35832__$1);

return statearr_35895;
})();
if(cljs.core.truth_(inst_35836)){
var statearr_35896_35953 = state_35873__$1;
(statearr_35896_35953[(1)] = (23));

} else {
var statearr_35897_35954 = state_35873__$1;
(statearr_35897_35954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (36))){
var inst_35823 = (state_35873[(12)]);
var inst_35801 = inst_35823;
var state_35873__$1 = (function (){var statearr_35898 = state_35873;
(statearr_35898[(7)] = inst_35801);

return statearr_35898;
})();
var statearr_35899_35955 = state_35873__$1;
(statearr_35899_35955[(2)] = null);

(statearr_35899_35955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (29))){
var inst_35847 = (state_35873[(9)]);
var state_35873__$1 = state_35873;
var statearr_35900_35956 = state_35873__$1;
(statearr_35900_35956[(2)] = inst_35847);

(statearr_35900_35956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (6))){
var state_35873__$1 = state_35873;
var statearr_35901_35957 = state_35873__$1;
(statearr_35901_35957[(2)] = false);

(statearr_35901_35957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (28))){
var inst_35843 = (state_35873[(2)]);
var inst_35844 = calc_state.call(null);
var inst_35801 = inst_35844;
var state_35873__$1 = (function (){var statearr_35902 = state_35873;
(statearr_35902[(7)] = inst_35801);

(statearr_35902[(15)] = inst_35843);

return statearr_35902;
})();
var statearr_35903_35958 = state_35873__$1;
(statearr_35903_35958[(2)] = null);

(statearr_35903_35958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (25))){
var inst_35869 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35904_35959 = state_35873__$1;
(statearr_35904_35959[(2)] = inst_35869);

(statearr_35904_35959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (34))){
var inst_35867 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35905_35960 = state_35873__$1;
(statearr_35905_35960[(2)] = inst_35867);

(statearr_35905_35960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (17))){
var state_35873__$1 = state_35873;
var statearr_35906_35961 = state_35873__$1;
(statearr_35906_35961[(2)] = false);

(statearr_35906_35961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (3))){
var state_35873__$1 = state_35873;
var statearr_35907_35962 = state_35873__$1;
(statearr_35907_35962[(2)] = false);

(statearr_35907_35962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (12))){
var inst_35871 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35873__$1,inst_35871);
} else {
if((state_val_35874 === (2))){
var inst_35777 = (state_35873[(8)]);
var inst_35782 = inst_35777.cljs$lang$protocol_mask$partition0$;
var inst_35783 = (inst_35782 & (64));
var inst_35784 = inst_35777.cljs$core$ISeq$;
var inst_35785 = (inst_35783) || (inst_35784);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35785)){
var statearr_35908_35963 = state_35873__$1;
(statearr_35908_35963[(1)] = (5));

} else {
var statearr_35909_35964 = state_35873__$1;
(statearr_35909_35964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (23))){
var inst_35832 = (state_35873[(14)]);
var inst_35838 = (inst_35832 == null);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35838)){
var statearr_35910_35965 = state_35873__$1;
(statearr_35910_35965[(1)] = (26));

} else {
var statearr_35911_35966 = state_35873__$1;
(statearr_35911_35966[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (35))){
var inst_35858 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35858)){
var statearr_35912_35967 = state_35873__$1;
(statearr_35912_35967[(1)] = (36));

} else {
var statearr_35913_35968 = state_35873__$1;
(statearr_35913_35968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (19))){
var inst_35801 = (state_35873[(7)]);
var inst_35820 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35801);
var state_35873__$1 = state_35873;
var statearr_35914_35969 = state_35873__$1;
(statearr_35914_35969[(2)] = inst_35820);

(statearr_35914_35969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (11))){
var inst_35801 = (state_35873[(7)]);
var inst_35805 = (inst_35801 == null);
var inst_35806 = cljs.core.not.call(null,inst_35805);
var state_35873__$1 = state_35873;
if(inst_35806){
var statearr_35915_35970 = state_35873__$1;
(statearr_35915_35970[(1)] = (13));

} else {
var statearr_35916_35971 = state_35873__$1;
(statearr_35916_35971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (9))){
var inst_35777 = (state_35873[(8)]);
var state_35873__$1 = state_35873;
var statearr_35917_35972 = state_35873__$1;
(statearr_35917_35972[(2)] = inst_35777);

(statearr_35917_35972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (5))){
var state_35873__$1 = state_35873;
var statearr_35918_35973 = state_35873__$1;
(statearr_35918_35973[(2)] = true);

(statearr_35918_35973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (14))){
var state_35873__$1 = state_35873;
var statearr_35919_35974 = state_35873__$1;
(statearr_35919_35974[(2)] = false);

(statearr_35919_35974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (26))){
var inst_35833 = (state_35873[(10)]);
var inst_35840 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35833);
var state_35873__$1 = state_35873;
var statearr_35920_35975 = state_35873__$1;
(statearr_35920_35975[(2)] = inst_35840);

(statearr_35920_35975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (16))){
var state_35873__$1 = state_35873;
var statearr_35921_35976 = state_35873__$1;
(statearr_35921_35976[(2)] = true);

(statearr_35921_35976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (38))){
var inst_35863 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35922_35977 = state_35873__$1;
(statearr_35922_35977[(2)] = inst_35863);

(statearr_35922_35977[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (30))){
var inst_35825 = (state_35873[(13)]);
var inst_35833 = (state_35873[(10)]);
var inst_35824 = (state_35873[(11)]);
var inst_35850 = cljs.core.empty_QMARK_.call(null,inst_35824);
var inst_35851 = inst_35825.call(null,inst_35833);
var inst_35852 = cljs.core.not.call(null,inst_35851);
var inst_35853 = (inst_35850) && (inst_35852);
var state_35873__$1 = state_35873;
var statearr_35923_35978 = state_35873__$1;
(statearr_35923_35978[(2)] = inst_35853);

(statearr_35923_35978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (10))){
var inst_35777 = (state_35873[(8)]);
var inst_35797 = (state_35873[(2)]);
var inst_35798 = cljs.core.get.call(null,inst_35797,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35799 = cljs.core.get.call(null,inst_35797,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35800 = cljs.core.get.call(null,inst_35797,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35801 = inst_35777;
var state_35873__$1 = (function (){var statearr_35924 = state_35873;
(statearr_35924[(7)] = inst_35801);

(statearr_35924[(16)] = inst_35798);

(statearr_35924[(17)] = inst_35800);

(statearr_35924[(18)] = inst_35799);

return statearr_35924;
})();
var statearr_35925_35979 = state_35873__$1;
(statearr_35925_35979[(2)] = null);

(statearr_35925_35979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (18))){
var inst_35815 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35926_35980 = state_35873__$1;
(statearr_35926_35980[(2)] = inst_35815);

(statearr_35926_35980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (37))){
var state_35873__$1 = state_35873;
var statearr_35927_35981 = state_35873__$1;
(statearr_35927_35981[(2)] = null);

(statearr_35927_35981[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (8))){
var inst_35777 = (state_35873[(8)]);
var inst_35794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35777);
var state_35873__$1 = state_35873;
var statearr_35928_35982 = state_35873__$1;
(statearr_35928_35982[(2)] = inst_35794);

(statearr_35928_35982[(1)] = (10));


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
});})(c__34203__auto___35936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34091__auto__,c__34203__auto___35936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34092__auto__ = null;
var cljs$core$async$mix_$_state_machine__34092__auto____0 = (function (){
var statearr_35932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35932[(0)] = cljs$core$async$mix_$_state_machine__34092__auto__);

(statearr_35932[(1)] = (1));

return statearr_35932;
});
var cljs$core$async$mix_$_state_machine__34092__auto____1 = (function (state_35873){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_35873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e35933){if((e35933 instanceof Object)){
var ex__34095__auto__ = e35933;
var statearr_35934_35983 = state_35873;
(statearr_35934_35983[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35984 = state_35873;
state_35873 = G__35984;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34092__auto__ = function(state_35873){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34092__auto____1.call(this,state_35873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34092__auto____0;
cljs$core$async$mix_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34092__auto____1;
return cljs$core$async$mix_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___35936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34205__auto__ = (function (){var statearr_35935 = f__34204__auto__.call(null);
(statearr_35935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___35936);

return statearr_35935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___35936,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args35985 = [];
var len__25826__auto___35988 = arguments.length;
var i__25827__auto___35989 = (0);
while(true){
if((i__25827__auto___35989 < len__25826__auto___35988)){
args35985.push((arguments[i__25827__auto___35989]));

var G__35990 = (i__25827__auto___35989 + (1));
i__25827__auto___35989 = G__35990;
continue;
} else {
}
break;
}

var G__35987 = args35985.length;
switch (G__35987) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35985.length)].join('')));

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
var args35993 = [];
var len__25826__auto___36118 = arguments.length;
var i__25827__auto___36119 = (0);
while(true){
if((i__25827__auto___36119 < len__25826__auto___36118)){
args35993.push((arguments[i__25827__auto___36119]));

var G__36120 = (i__25827__auto___36119 + (1));
i__25827__auto___36119 = G__36120;
continue;
} else {
}
break;
}

var G__35995 = args35993.length;
switch (G__35995) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35993.length)].join('')));

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
return (function (p1__35992_SHARP_){
if(cljs.core.truth_(p1__35992_SHARP_.call(null,topic))){
return p1__35992_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35992_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35996 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35997){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35997 = meta35997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35998,meta35997__$1){
var self__ = this;
var _35998__$1 = this;
return (new cljs.core.async.t_cljs$core$async35996(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35997__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35998){
var self__ = this;
var _35998__$1 = this;
return self__.meta35997;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35997","meta35997",-1338987560,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35996";

cljs.core.async.t_cljs$core$async35996.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async35996");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35996 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35997){
return (new cljs.core.async.t_cljs$core$async35996(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35997));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35996(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34203__auto___36122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36122,mults,ensure_mult,p){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36122,mults,ensure_mult,p){
return (function (state_36070){
var state_val_36071 = (state_36070[(1)]);
if((state_val_36071 === (7))){
var inst_36066 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36072_36123 = state_36070__$1;
(statearr_36072_36123[(2)] = inst_36066);

(statearr_36072_36123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (20))){
var state_36070__$1 = state_36070;
var statearr_36073_36124 = state_36070__$1;
(statearr_36073_36124[(2)] = null);

(statearr_36073_36124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (1))){
var state_36070__$1 = state_36070;
var statearr_36074_36125 = state_36070__$1;
(statearr_36074_36125[(2)] = null);

(statearr_36074_36125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (24))){
var inst_36049 = (state_36070[(7)]);
var inst_36058 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36049);
var state_36070__$1 = state_36070;
var statearr_36075_36126 = state_36070__$1;
(statearr_36075_36126[(2)] = inst_36058);

(statearr_36075_36126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (4))){
var inst_36001 = (state_36070[(8)]);
var inst_36001__$1 = (state_36070[(2)]);
var inst_36002 = (inst_36001__$1 == null);
var state_36070__$1 = (function (){var statearr_36076 = state_36070;
(statearr_36076[(8)] = inst_36001__$1);

return statearr_36076;
})();
if(cljs.core.truth_(inst_36002)){
var statearr_36077_36127 = state_36070__$1;
(statearr_36077_36127[(1)] = (5));

} else {
var statearr_36078_36128 = state_36070__$1;
(statearr_36078_36128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (15))){
var inst_36043 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36079_36129 = state_36070__$1;
(statearr_36079_36129[(2)] = inst_36043);

(statearr_36079_36129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (21))){
var inst_36063 = (state_36070[(2)]);
var state_36070__$1 = (function (){var statearr_36080 = state_36070;
(statearr_36080[(9)] = inst_36063);

return statearr_36080;
})();
var statearr_36081_36130 = state_36070__$1;
(statearr_36081_36130[(2)] = null);

(statearr_36081_36130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (13))){
var inst_36025 = (state_36070[(10)]);
var inst_36027 = cljs.core.chunked_seq_QMARK_.call(null,inst_36025);
var state_36070__$1 = state_36070;
if(inst_36027){
var statearr_36082_36131 = state_36070__$1;
(statearr_36082_36131[(1)] = (16));

} else {
var statearr_36083_36132 = state_36070__$1;
(statearr_36083_36132[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (22))){
var inst_36055 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
if(cljs.core.truth_(inst_36055)){
var statearr_36084_36133 = state_36070__$1;
(statearr_36084_36133[(1)] = (23));

} else {
var statearr_36085_36134 = state_36070__$1;
(statearr_36085_36134[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (6))){
var inst_36049 = (state_36070[(7)]);
var inst_36001 = (state_36070[(8)]);
var inst_36051 = (state_36070[(11)]);
var inst_36049__$1 = topic_fn.call(null,inst_36001);
var inst_36050 = cljs.core.deref.call(null,mults);
var inst_36051__$1 = cljs.core.get.call(null,inst_36050,inst_36049__$1);
var state_36070__$1 = (function (){var statearr_36086 = state_36070;
(statearr_36086[(7)] = inst_36049__$1);

(statearr_36086[(11)] = inst_36051__$1);

return statearr_36086;
})();
if(cljs.core.truth_(inst_36051__$1)){
var statearr_36087_36135 = state_36070__$1;
(statearr_36087_36135[(1)] = (19));

} else {
var statearr_36088_36136 = state_36070__$1;
(statearr_36088_36136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (25))){
var inst_36060 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36089_36137 = state_36070__$1;
(statearr_36089_36137[(2)] = inst_36060);

(statearr_36089_36137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (17))){
var inst_36025 = (state_36070[(10)]);
var inst_36034 = cljs.core.first.call(null,inst_36025);
var inst_36035 = cljs.core.async.muxch_STAR_.call(null,inst_36034);
var inst_36036 = cljs.core.async.close_BANG_.call(null,inst_36035);
var inst_36037 = cljs.core.next.call(null,inst_36025);
var inst_36011 = inst_36037;
var inst_36012 = null;
var inst_36013 = (0);
var inst_36014 = (0);
var state_36070__$1 = (function (){var statearr_36090 = state_36070;
(statearr_36090[(12)] = inst_36012);

(statearr_36090[(13)] = inst_36036);

(statearr_36090[(14)] = inst_36013);

(statearr_36090[(15)] = inst_36014);

(statearr_36090[(16)] = inst_36011);

return statearr_36090;
})();
var statearr_36091_36138 = state_36070__$1;
(statearr_36091_36138[(2)] = null);

(statearr_36091_36138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (3))){
var inst_36068 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36070__$1,inst_36068);
} else {
if((state_val_36071 === (12))){
var inst_36045 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36092_36139 = state_36070__$1;
(statearr_36092_36139[(2)] = inst_36045);

(statearr_36092_36139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (2))){
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36070__$1,(4),ch);
} else {
if((state_val_36071 === (23))){
var state_36070__$1 = state_36070;
var statearr_36093_36140 = state_36070__$1;
(statearr_36093_36140[(2)] = null);

(statearr_36093_36140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (19))){
var inst_36001 = (state_36070[(8)]);
var inst_36051 = (state_36070[(11)]);
var inst_36053 = cljs.core.async.muxch_STAR_.call(null,inst_36051);
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36070__$1,(22),inst_36053,inst_36001);
} else {
if((state_val_36071 === (11))){
var inst_36025 = (state_36070[(10)]);
var inst_36011 = (state_36070[(16)]);
var inst_36025__$1 = cljs.core.seq.call(null,inst_36011);
var state_36070__$1 = (function (){var statearr_36094 = state_36070;
(statearr_36094[(10)] = inst_36025__$1);

return statearr_36094;
})();
if(inst_36025__$1){
var statearr_36095_36141 = state_36070__$1;
(statearr_36095_36141[(1)] = (13));

} else {
var statearr_36096_36142 = state_36070__$1;
(statearr_36096_36142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (9))){
var inst_36047 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36097_36143 = state_36070__$1;
(statearr_36097_36143[(2)] = inst_36047);

(statearr_36097_36143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (5))){
var inst_36008 = cljs.core.deref.call(null,mults);
var inst_36009 = cljs.core.vals.call(null,inst_36008);
var inst_36010 = cljs.core.seq.call(null,inst_36009);
var inst_36011 = inst_36010;
var inst_36012 = null;
var inst_36013 = (0);
var inst_36014 = (0);
var state_36070__$1 = (function (){var statearr_36098 = state_36070;
(statearr_36098[(12)] = inst_36012);

(statearr_36098[(14)] = inst_36013);

(statearr_36098[(15)] = inst_36014);

(statearr_36098[(16)] = inst_36011);

return statearr_36098;
})();
var statearr_36099_36144 = state_36070__$1;
(statearr_36099_36144[(2)] = null);

(statearr_36099_36144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (14))){
var state_36070__$1 = state_36070;
var statearr_36103_36145 = state_36070__$1;
(statearr_36103_36145[(2)] = null);

(statearr_36103_36145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (16))){
var inst_36025 = (state_36070[(10)]);
var inst_36029 = cljs.core.chunk_first.call(null,inst_36025);
var inst_36030 = cljs.core.chunk_rest.call(null,inst_36025);
var inst_36031 = cljs.core.count.call(null,inst_36029);
var inst_36011 = inst_36030;
var inst_36012 = inst_36029;
var inst_36013 = inst_36031;
var inst_36014 = (0);
var state_36070__$1 = (function (){var statearr_36104 = state_36070;
(statearr_36104[(12)] = inst_36012);

(statearr_36104[(14)] = inst_36013);

(statearr_36104[(15)] = inst_36014);

(statearr_36104[(16)] = inst_36011);

return statearr_36104;
})();
var statearr_36105_36146 = state_36070__$1;
(statearr_36105_36146[(2)] = null);

(statearr_36105_36146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (10))){
var inst_36012 = (state_36070[(12)]);
var inst_36013 = (state_36070[(14)]);
var inst_36014 = (state_36070[(15)]);
var inst_36011 = (state_36070[(16)]);
var inst_36019 = cljs.core._nth.call(null,inst_36012,inst_36014);
var inst_36020 = cljs.core.async.muxch_STAR_.call(null,inst_36019);
var inst_36021 = cljs.core.async.close_BANG_.call(null,inst_36020);
var inst_36022 = (inst_36014 + (1));
var tmp36100 = inst_36012;
var tmp36101 = inst_36013;
var tmp36102 = inst_36011;
var inst_36011__$1 = tmp36102;
var inst_36012__$1 = tmp36100;
var inst_36013__$1 = tmp36101;
var inst_36014__$1 = inst_36022;
var state_36070__$1 = (function (){var statearr_36106 = state_36070;
(statearr_36106[(12)] = inst_36012__$1);

(statearr_36106[(14)] = inst_36013__$1);

(statearr_36106[(17)] = inst_36021);

(statearr_36106[(15)] = inst_36014__$1);

(statearr_36106[(16)] = inst_36011__$1);

return statearr_36106;
})();
var statearr_36107_36147 = state_36070__$1;
(statearr_36107_36147[(2)] = null);

(statearr_36107_36147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (18))){
var inst_36040 = (state_36070[(2)]);
var state_36070__$1 = state_36070;
var statearr_36108_36148 = state_36070__$1;
(statearr_36108_36148[(2)] = inst_36040);

(statearr_36108_36148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36071 === (8))){
var inst_36013 = (state_36070[(14)]);
var inst_36014 = (state_36070[(15)]);
var inst_36016 = (inst_36014 < inst_36013);
var inst_36017 = inst_36016;
var state_36070__$1 = state_36070;
if(cljs.core.truth_(inst_36017)){
var statearr_36109_36149 = state_36070__$1;
(statearr_36109_36149[(1)] = (10));

} else {
var statearr_36110_36150 = state_36070__$1;
(statearr_36110_36150[(1)] = (11));

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
});})(c__34203__auto___36122,mults,ensure_mult,p))
;
return ((function (switch__34091__auto__,c__34203__auto___36122,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36114[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36114[(1)] = (1));

return statearr_36114;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36070){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36115){if((e36115 instanceof Object)){
var ex__34095__auto__ = e36115;
var statearr_36116_36151 = state_36070;
(statearr_36116_36151[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36152 = state_36070;
state_36070 = G__36152;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36122,mults,ensure_mult,p))
})();
var state__34205__auto__ = (function (){var statearr_36117 = f__34204__auto__.call(null);
(statearr_36117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36122);

return statearr_36117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36122,mults,ensure_mult,p))
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
var args36153 = [];
var len__25826__auto___36156 = arguments.length;
var i__25827__auto___36157 = (0);
while(true){
if((i__25827__auto___36157 < len__25826__auto___36156)){
args36153.push((arguments[i__25827__auto___36157]));

var G__36158 = (i__25827__auto___36157 + (1));
i__25827__auto___36157 = G__36158;
continue;
} else {
}
break;
}

var G__36155 = args36153.length;
switch (G__36155) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36153.length)].join('')));

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
var args36160 = [];
var len__25826__auto___36163 = arguments.length;
var i__25827__auto___36164 = (0);
while(true){
if((i__25827__auto___36164 < len__25826__auto___36163)){
args36160.push((arguments[i__25827__auto___36164]));

var G__36165 = (i__25827__auto___36164 + (1));
i__25827__auto___36164 = G__36165;
continue;
} else {
}
break;
}

var G__36162 = args36160.length;
switch (G__36162) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36160.length)].join('')));

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
var args36167 = [];
var len__25826__auto___36238 = arguments.length;
var i__25827__auto___36239 = (0);
while(true){
if((i__25827__auto___36239 < len__25826__auto___36238)){
args36167.push((arguments[i__25827__auto___36239]));

var G__36240 = (i__25827__auto___36239 + (1));
i__25827__auto___36239 = G__36240;
continue;
} else {
}
break;
}

var G__36169 = args36167.length;
switch (G__36169) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36167.length)].join('')));

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
var c__34203__auto___36242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36208){
var state_val_36209 = (state_36208[(1)]);
if((state_val_36209 === (7))){
var state_36208__$1 = state_36208;
var statearr_36210_36243 = state_36208__$1;
(statearr_36210_36243[(2)] = null);

(statearr_36210_36243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (1))){
var state_36208__$1 = state_36208;
var statearr_36211_36244 = state_36208__$1;
(statearr_36211_36244[(2)] = null);

(statearr_36211_36244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (4))){
var inst_36172 = (state_36208[(7)]);
var inst_36174 = (inst_36172 < cnt);
var state_36208__$1 = state_36208;
if(cljs.core.truth_(inst_36174)){
var statearr_36212_36245 = state_36208__$1;
(statearr_36212_36245[(1)] = (6));

} else {
var statearr_36213_36246 = state_36208__$1;
(statearr_36213_36246[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (15))){
var inst_36204 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36214_36247 = state_36208__$1;
(statearr_36214_36247[(2)] = inst_36204);

(statearr_36214_36247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (13))){
var inst_36197 = cljs.core.async.close_BANG_.call(null,out);
var state_36208__$1 = state_36208;
var statearr_36215_36248 = state_36208__$1;
(statearr_36215_36248[(2)] = inst_36197);

(statearr_36215_36248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (6))){
var state_36208__$1 = state_36208;
var statearr_36216_36249 = state_36208__$1;
(statearr_36216_36249[(2)] = null);

(statearr_36216_36249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (3))){
var inst_36206 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36208__$1,inst_36206);
} else {
if((state_val_36209 === (12))){
var inst_36194 = (state_36208[(8)]);
var inst_36194__$1 = (state_36208[(2)]);
var inst_36195 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36194__$1);
var state_36208__$1 = (function (){var statearr_36217 = state_36208;
(statearr_36217[(8)] = inst_36194__$1);

return statearr_36217;
})();
if(cljs.core.truth_(inst_36195)){
var statearr_36218_36250 = state_36208__$1;
(statearr_36218_36250[(1)] = (13));

} else {
var statearr_36219_36251 = state_36208__$1;
(statearr_36219_36251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (2))){
var inst_36171 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36172 = (0);
var state_36208__$1 = (function (){var statearr_36220 = state_36208;
(statearr_36220[(7)] = inst_36172);

(statearr_36220[(9)] = inst_36171);

return statearr_36220;
})();
var statearr_36221_36252 = state_36208__$1;
(statearr_36221_36252[(2)] = null);

(statearr_36221_36252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (11))){
var inst_36172 = (state_36208[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36208,(10),Object,null,(9));
var inst_36181 = chs__$1.call(null,inst_36172);
var inst_36182 = done.call(null,inst_36172);
var inst_36183 = cljs.core.async.take_BANG_.call(null,inst_36181,inst_36182);
var state_36208__$1 = state_36208;
var statearr_36222_36253 = state_36208__$1;
(statearr_36222_36253[(2)] = inst_36183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (9))){
var inst_36172 = (state_36208[(7)]);
var inst_36185 = (state_36208[(2)]);
var inst_36186 = (inst_36172 + (1));
var inst_36172__$1 = inst_36186;
var state_36208__$1 = (function (){var statearr_36223 = state_36208;
(statearr_36223[(10)] = inst_36185);

(statearr_36223[(7)] = inst_36172__$1);

return statearr_36223;
})();
var statearr_36224_36254 = state_36208__$1;
(statearr_36224_36254[(2)] = null);

(statearr_36224_36254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (5))){
var inst_36192 = (state_36208[(2)]);
var state_36208__$1 = (function (){var statearr_36225 = state_36208;
(statearr_36225[(11)] = inst_36192);

return statearr_36225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36208__$1,(12),dchan);
} else {
if((state_val_36209 === (14))){
var inst_36194 = (state_36208[(8)]);
var inst_36199 = cljs.core.apply.call(null,f,inst_36194);
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36208__$1,(16),out,inst_36199);
} else {
if((state_val_36209 === (16))){
var inst_36201 = (state_36208[(2)]);
var state_36208__$1 = (function (){var statearr_36226 = state_36208;
(statearr_36226[(12)] = inst_36201);

return statearr_36226;
})();
var statearr_36227_36255 = state_36208__$1;
(statearr_36227_36255[(2)] = null);

(statearr_36227_36255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (10))){
var inst_36176 = (state_36208[(2)]);
var inst_36177 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36208__$1 = (function (){var statearr_36228 = state_36208;
(statearr_36228[(13)] = inst_36176);

return statearr_36228;
})();
var statearr_36229_36256 = state_36208__$1;
(statearr_36229_36256[(2)] = inst_36177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (8))){
var inst_36190 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36230_36257 = state_36208__$1;
(statearr_36230_36257[(2)] = inst_36190);

(statearr_36230_36257[(1)] = (5));


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
});})(c__34203__auto___36242,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34091__auto__,c__34203__auto___36242,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36234[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36234[(1)] = (1));

return statearr_36234;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36208){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36235){if((e36235 instanceof Object)){
var ex__34095__auto__ = e36235;
var statearr_36236_36258 = state_36208;
(statearr_36236_36258[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36259 = state_36208;
state_36208 = G__36259;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36242,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34205__auto__ = (function (){var statearr_36237 = f__34204__auto__.call(null);
(statearr_36237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36242);

return statearr_36237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36242,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36261 = [];
var len__25826__auto___36319 = arguments.length;
var i__25827__auto___36320 = (0);
while(true){
if((i__25827__auto___36320 < len__25826__auto___36319)){
args36261.push((arguments[i__25827__auto___36320]));

var G__36321 = (i__25827__auto___36320 + (1));
i__25827__auto___36320 = G__36321;
continue;
} else {
}
break;
}

var G__36263 = args36261.length;
switch (G__36263) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36261.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34203__auto___36323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36323,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36323,out){
return (function (state_36295){
var state_val_36296 = (state_36295[(1)]);
if((state_val_36296 === (7))){
var inst_36275 = (state_36295[(7)]);
var inst_36274 = (state_36295[(8)]);
var inst_36274__$1 = (state_36295[(2)]);
var inst_36275__$1 = cljs.core.nth.call(null,inst_36274__$1,(0),null);
var inst_36276 = cljs.core.nth.call(null,inst_36274__$1,(1),null);
var inst_36277 = (inst_36275__$1 == null);
var state_36295__$1 = (function (){var statearr_36297 = state_36295;
(statearr_36297[(7)] = inst_36275__$1);

(statearr_36297[(8)] = inst_36274__$1);

(statearr_36297[(9)] = inst_36276);

return statearr_36297;
})();
if(cljs.core.truth_(inst_36277)){
var statearr_36298_36324 = state_36295__$1;
(statearr_36298_36324[(1)] = (8));

} else {
var statearr_36299_36325 = state_36295__$1;
(statearr_36299_36325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (1))){
var inst_36264 = cljs.core.vec.call(null,chs);
var inst_36265 = inst_36264;
var state_36295__$1 = (function (){var statearr_36300 = state_36295;
(statearr_36300[(10)] = inst_36265);

return statearr_36300;
})();
var statearr_36301_36326 = state_36295__$1;
(statearr_36301_36326[(2)] = null);

(statearr_36301_36326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (4))){
var inst_36265 = (state_36295[(10)]);
var state_36295__$1 = state_36295;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36295__$1,(7),inst_36265);
} else {
if((state_val_36296 === (6))){
var inst_36291 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36302_36327 = state_36295__$1;
(statearr_36302_36327[(2)] = inst_36291);

(statearr_36302_36327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (3))){
var inst_36293 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36295__$1,inst_36293);
} else {
if((state_val_36296 === (2))){
var inst_36265 = (state_36295[(10)]);
var inst_36267 = cljs.core.count.call(null,inst_36265);
var inst_36268 = (inst_36267 > (0));
var state_36295__$1 = state_36295;
if(cljs.core.truth_(inst_36268)){
var statearr_36304_36328 = state_36295__$1;
(statearr_36304_36328[(1)] = (4));

} else {
var statearr_36305_36329 = state_36295__$1;
(statearr_36305_36329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (11))){
var inst_36265 = (state_36295[(10)]);
var inst_36284 = (state_36295[(2)]);
var tmp36303 = inst_36265;
var inst_36265__$1 = tmp36303;
var state_36295__$1 = (function (){var statearr_36306 = state_36295;
(statearr_36306[(11)] = inst_36284);

(statearr_36306[(10)] = inst_36265__$1);

return statearr_36306;
})();
var statearr_36307_36330 = state_36295__$1;
(statearr_36307_36330[(2)] = null);

(statearr_36307_36330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (9))){
var inst_36275 = (state_36295[(7)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36295__$1,(11),out,inst_36275);
} else {
if((state_val_36296 === (5))){
var inst_36289 = cljs.core.async.close_BANG_.call(null,out);
var state_36295__$1 = state_36295;
var statearr_36308_36331 = state_36295__$1;
(statearr_36308_36331[(2)] = inst_36289);

(statearr_36308_36331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (10))){
var inst_36287 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36309_36332 = state_36295__$1;
(statearr_36309_36332[(2)] = inst_36287);

(statearr_36309_36332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (8))){
var inst_36275 = (state_36295[(7)]);
var inst_36274 = (state_36295[(8)]);
var inst_36276 = (state_36295[(9)]);
var inst_36265 = (state_36295[(10)]);
var inst_36279 = (function (){var cs = inst_36265;
var vec__36270 = inst_36274;
var v = inst_36275;
var c = inst_36276;
return ((function (cs,vec__36270,v,c,inst_36275,inst_36274,inst_36276,inst_36265,state_val_36296,c__34203__auto___36323,out){
return (function (p1__36260_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36260_SHARP_);
});
;})(cs,vec__36270,v,c,inst_36275,inst_36274,inst_36276,inst_36265,state_val_36296,c__34203__auto___36323,out))
})();
var inst_36280 = cljs.core.filterv.call(null,inst_36279,inst_36265);
var inst_36265__$1 = inst_36280;
var state_36295__$1 = (function (){var statearr_36310 = state_36295;
(statearr_36310[(10)] = inst_36265__$1);

return statearr_36310;
})();
var statearr_36311_36333 = state_36295__$1;
(statearr_36311_36333[(2)] = null);

(statearr_36311_36333[(1)] = (2));


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
});})(c__34203__auto___36323,out))
;
return ((function (switch__34091__auto__,c__34203__auto___36323,out){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36315[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36315[(1)] = (1));

return statearr_36315;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36295){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36316){if((e36316 instanceof Object)){
var ex__34095__auto__ = e36316;
var statearr_36317_36334 = state_36295;
(statearr_36317_36334[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36335 = state_36295;
state_36295 = G__36335;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36323,out))
})();
var state__34205__auto__ = (function (){var statearr_36318 = f__34204__auto__.call(null);
(statearr_36318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36323);

return statearr_36318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36323,out))
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
var args36336 = [];
var len__25826__auto___36385 = arguments.length;
var i__25827__auto___36386 = (0);
while(true){
if((i__25827__auto___36386 < len__25826__auto___36385)){
args36336.push((arguments[i__25827__auto___36386]));

var G__36387 = (i__25827__auto___36386 + (1));
i__25827__auto___36386 = G__36387;
continue;
} else {
}
break;
}

var G__36338 = args36336.length;
switch (G__36338) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36336.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34203__auto___36389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36389,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36389,out){
return (function (state_36362){
var state_val_36363 = (state_36362[(1)]);
if((state_val_36363 === (7))){
var inst_36344 = (state_36362[(7)]);
var inst_36344__$1 = (state_36362[(2)]);
var inst_36345 = (inst_36344__$1 == null);
var inst_36346 = cljs.core.not.call(null,inst_36345);
var state_36362__$1 = (function (){var statearr_36364 = state_36362;
(statearr_36364[(7)] = inst_36344__$1);

return statearr_36364;
})();
if(inst_36346){
var statearr_36365_36390 = state_36362__$1;
(statearr_36365_36390[(1)] = (8));

} else {
var statearr_36366_36391 = state_36362__$1;
(statearr_36366_36391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (1))){
var inst_36339 = (0);
var state_36362__$1 = (function (){var statearr_36367 = state_36362;
(statearr_36367[(8)] = inst_36339);

return statearr_36367;
})();
var statearr_36368_36392 = state_36362__$1;
(statearr_36368_36392[(2)] = null);

(statearr_36368_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (4))){
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36362__$1,(7),ch);
} else {
if((state_val_36363 === (6))){
var inst_36357 = (state_36362[(2)]);
var state_36362__$1 = state_36362;
var statearr_36369_36393 = state_36362__$1;
(statearr_36369_36393[(2)] = inst_36357);

(statearr_36369_36393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (3))){
var inst_36359 = (state_36362[(2)]);
var inst_36360 = cljs.core.async.close_BANG_.call(null,out);
var state_36362__$1 = (function (){var statearr_36370 = state_36362;
(statearr_36370[(9)] = inst_36359);

return statearr_36370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36362__$1,inst_36360);
} else {
if((state_val_36363 === (2))){
var inst_36339 = (state_36362[(8)]);
var inst_36341 = (inst_36339 < n);
var state_36362__$1 = state_36362;
if(cljs.core.truth_(inst_36341)){
var statearr_36371_36394 = state_36362__$1;
(statearr_36371_36394[(1)] = (4));

} else {
var statearr_36372_36395 = state_36362__$1;
(statearr_36372_36395[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (11))){
var inst_36339 = (state_36362[(8)]);
var inst_36349 = (state_36362[(2)]);
var inst_36350 = (inst_36339 + (1));
var inst_36339__$1 = inst_36350;
var state_36362__$1 = (function (){var statearr_36373 = state_36362;
(statearr_36373[(8)] = inst_36339__$1);

(statearr_36373[(10)] = inst_36349);

return statearr_36373;
})();
var statearr_36374_36396 = state_36362__$1;
(statearr_36374_36396[(2)] = null);

(statearr_36374_36396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (9))){
var state_36362__$1 = state_36362;
var statearr_36375_36397 = state_36362__$1;
(statearr_36375_36397[(2)] = null);

(statearr_36375_36397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (5))){
var state_36362__$1 = state_36362;
var statearr_36376_36398 = state_36362__$1;
(statearr_36376_36398[(2)] = null);

(statearr_36376_36398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (10))){
var inst_36354 = (state_36362[(2)]);
var state_36362__$1 = state_36362;
var statearr_36377_36399 = state_36362__$1;
(statearr_36377_36399[(2)] = inst_36354);

(statearr_36377_36399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (8))){
var inst_36344 = (state_36362[(7)]);
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36362__$1,(11),out,inst_36344);
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
});})(c__34203__auto___36389,out))
;
return ((function (switch__34091__auto__,c__34203__auto___36389,out){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36381[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36381[(1)] = (1));

return statearr_36381;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36362){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36382){if((e36382 instanceof Object)){
var ex__34095__auto__ = e36382;
var statearr_36383_36400 = state_36362;
(statearr_36383_36400[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36401 = state_36362;
state_36362 = G__36401;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36389,out))
})();
var state__34205__auto__ = (function (){var statearr_36384 = f__34204__auto__.call(null);
(statearr_36384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36389);

return statearr_36384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36389,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36409 = (function (map_LT_,f,ch,meta36410){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36410 = meta36410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36411,meta36410__$1){
var self__ = this;
var _36411__$1 = this;
return (new cljs.core.async.t_cljs$core$async36409(self__.map_LT_,self__.f,self__.ch,meta36410__$1));
});

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36411){
var self__ = this;
var _36411__$1 = this;
return self__.meta36410;
});

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36412 = (function (map_LT_,f,ch,meta36410,_,fn1,meta36413){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36410 = meta36410;
this._ = _;
this.fn1 = fn1;
this.meta36413 = meta36413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36414,meta36413__$1){
var self__ = this;
var _36414__$1 = this;
return (new cljs.core.async.t_cljs$core$async36412(self__.map_LT_,self__.f,self__.ch,self__.meta36410,self__._,self__.fn1,meta36413__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36414){
var self__ = this;
var _36414__$1 = this;
return self__.meta36413;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36402_SHARP_){
return f1.call(null,(((p1__36402_SHARP_ == null))?null:self__.f.call(null,p1__36402_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36412.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36410","meta36410",2039412966,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36409","cljs.core.async/t_cljs$core$async36409",-323138983,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36413","meta36413",-208761549,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36412";

cljs.core.async.t_cljs$core$async36412.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async36412");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36412 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36412(map_LT___$1,f__$1,ch__$1,meta36410__$1,___$2,fn1__$1,meta36413){
return (new cljs.core.async.t_cljs$core$async36412(map_LT___$1,f__$1,ch__$1,meta36410__$1,___$2,fn1__$1,meta36413));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36412(self__.map_LT_,self__.f,self__.ch,self__.meta36410,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36410","meta36410",2039412966,null)], null);
});

cljs.core.async.t_cljs$core$async36409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36409";

cljs.core.async.t_cljs$core$async36409.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async36409");
});

cljs.core.async.__GT_t_cljs$core$async36409 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36409(map_LT___$1,f__$1,ch__$1,meta36410){
return (new cljs.core.async.t_cljs$core$async36409(map_LT___$1,f__$1,ch__$1,meta36410));
});

}

return (new cljs.core.async.t_cljs$core$async36409(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36418 = (function (map_GT_,f,ch,meta36419){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36419 = meta36419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36420,meta36419__$1){
var self__ = this;
var _36420__$1 = this;
return (new cljs.core.async.t_cljs$core$async36418(self__.map_GT_,self__.f,self__.ch,meta36419__$1));
});

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36420){
var self__ = this;
var _36420__$1 = this;
return self__.meta36419;
});

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36419","meta36419",1849312038,null)], null);
});

cljs.core.async.t_cljs$core$async36418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36418";

cljs.core.async.t_cljs$core$async36418.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async36418");
});

cljs.core.async.__GT_t_cljs$core$async36418 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36418(map_GT___$1,f__$1,ch__$1,meta36419){
return (new cljs.core.async.t_cljs$core$async36418(map_GT___$1,f__$1,ch__$1,meta36419));
});

}

return (new cljs.core.async.t_cljs$core$async36418(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36424 = (function (filter_GT_,p,ch,meta36425){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36425 = meta36425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36426,meta36425__$1){
var self__ = this;
var _36426__$1 = this;
return (new cljs.core.async.t_cljs$core$async36424(self__.filter_GT_,self__.p,self__.ch,meta36425__$1));
});

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36426){
var self__ = this;
var _36426__$1 = this;
return self__.meta36425;
});

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36425","meta36425",812910852,null)], null);
});

cljs.core.async.t_cljs$core$async36424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36424";

cljs.core.async.t_cljs$core$async36424.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async36424");
});

cljs.core.async.__GT_t_cljs$core$async36424 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36424(filter_GT___$1,p__$1,ch__$1,meta36425){
return (new cljs.core.async.t_cljs$core$async36424(filter_GT___$1,p__$1,ch__$1,meta36425));
});

}

return (new cljs.core.async.t_cljs$core$async36424(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36427 = [];
var len__25826__auto___36471 = arguments.length;
var i__25827__auto___36472 = (0);
while(true){
if((i__25827__auto___36472 < len__25826__auto___36471)){
args36427.push((arguments[i__25827__auto___36472]));

var G__36473 = (i__25827__auto___36472 + (1));
i__25827__auto___36472 = G__36473;
continue;
} else {
}
break;
}

var G__36429 = args36427.length;
switch (G__36429) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36427.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34203__auto___36475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36475,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36475,out){
return (function (state_36450){
var state_val_36451 = (state_36450[(1)]);
if((state_val_36451 === (7))){
var inst_36446 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
var statearr_36452_36476 = state_36450__$1;
(statearr_36452_36476[(2)] = inst_36446);

(statearr_36452_36476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (1))){
var state_36450__$1 = state_36450;
var statearr_36453_36477 = state_36450__$1;
(statearr_36453_36477[(2)] = null);

(statearr_36453_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (4))){
var inst_36432 = (state_36450[(7)]);
var inst_36432__$1 = (state_36450[(2)]);
var inst_36433 = (inst_36432__$1 == null);
var state_36450__$1 = (function (){var statearr_36454 = state_36450;
(statearr_36454[(7)] = inst_36432__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36433)){
var statearr_36455_36478 = state_36450__$1;
(statearr_36455_36478[(1)] = (5));

} else {
var statearr_36456_36479 = state_36450__$1;
(statearr_36456_36479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (6))){
var inst_36432 = (state_36450[(7)]);
var inst_36437 = p.call(null,inst_36432);
var state_36450__$1 = state_36450;
if(cljs.core.truth_(inst_36437)){
var statearr_36457_36480 = state_36450__$1;
(statearr_36457_36480[(1)] = (8));

} else {
var statearr_36458_36481 = state_36450__$1;
(statearr_36458_36481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (3))){
var inst_36448 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36450__$1,inst_36448);
} else {
if((state_val_36451 === (2))){
var state_36450__$1 = state_36450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36450__$1,(4),ch);
} else {
if((state_val_36451 === (11))){
var inst_36440 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
var statearr_36459_36482 = state_36450__$1;
(statearr_36459_36482[(2)] = inst_36440);

(statearr_36459_36482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (9))){
var state_36450__$1 = state_36450;
var statearr_36460_36483 = state_36450__$1;
(statearr_36460_36483[(2)] = null);

(statearr_36460_36483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (5))){
var inst_36435 = cljs.core.async.close_BANG_.call(null,out);
var state_36450__$1 = state_36450;
var statearr_36461_36484 = state_36450__$1;
(statearr_36461_36484[(2)] = inst_36435);

(statearr_36461_36484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (10))){
var inst_36443 = (state_36450[(2)]);
var state_36450__$1 = (function (){var statearr_36462 = state_36450;
(statearr_36462[(8)] = inst_36443);

return statearr_36462;
})();
var statearr_36463_36485 = state_36450__$1;
(statearr_36463_36485[(2)] = null);

(statearr_36463_36485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (8))){
var inst_36432 = (state_36450[(7)]);
var state_36450__$1 = state_36450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36450__$1,(11),out,inst_36432);
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
});})(c__34203__auto___36475,out))
;
return ((function (switch__34091__auto__,c__34203__auto___36475,out){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36467 = [null,null,null,null,null,null,null,null,null];
(statearr_36467[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36467[(1)] = (1));

return statearr_36467;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36450){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36468){if((e36468 instanceof Object)){
var ex__34095__auto__ = e36468;
var statearr_36469_36486 = state_36450;
(statearr_36469_36486[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36487 = state_36450;
state_36450 = G__36487;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36475,out))
})();
var state__34205__auto__ = (function (){var statearr_36470 = f__34204__auto__.call(null);
(statearr_36470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36475);

return statearr_36470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36475,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36488 = [];
var len__25826__auto___36491 = arguments.length;
var i__25827__auto___36492 = (0);
while(true){
if((i__25827__auto___36492 < len__25826__auto___36491)){
args36488.push((arguments[i__25827__auto___36492]));

var G__36493 = (i__25827__auto___36492 + (1));
i__25827__auto___36492 = G__36493;
continue;
} else {
}
break;
}

var G__36490 = args36488.length;
switch (G__36490) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36488.length)].join('')));

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
var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__){
return (function (state_36660){
var state_val_36661 = (state_36660[(1)]);
if((state_val_36661 === (7))){
var inst_36656 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36662_36703 = state_36660__$1;
(statearr_36662_36703[(2)] = inst_36656);

(statearr_36662_36703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (20))){
var inst_36626 = (state_36660[(7)]);
var inst_36637 = (state_36660[(2)]);
var inst_36638 = cljs.core.next.call(null,inst_36626);
var inst_36612 = inst_36638;
var inst_36613 = null;
var inst_36614 = (0);
var inst_36615 = (0);
var state_36660__$1 = (function (){var statearr_36663 = state_36660;
(statearr_36663[(8)] = inst_36612);

(statearr_36663[(9)] = inst_36613);

(statearr_36663[(10)] = inst_36615);

(statearr_36663[(11)] = inst_36614);

(statearr_36663[(12)] = inst_36637);

return statearr_36663;
})();
var statearr_36664_36704 = state_36660__$1;
(statearr_36664_36704[(2)] = null);

(statearr_36664_36704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (1))){
var state_36660__$1 = state_36660;
var statearr_36665_36705 = state_36660__$1;
(statearr_36665_36705[(2)] = null);

(statearr_36665_36705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (4))){
var inst_36601 = (state_36660[(13)]);
var inst_36601__$1 = (state_36660[(2)]);
var inst_36602 = (inst_36601__$1 == null);
var state_36660__$1 = (function (){var statearr_36666 = state_36660;
(statearr_36666[(13)] = inst_36601__$1);

return statearr_36666;
})();
if(cljs.core.truth_(inst_36602)){
var statearr_36667_36706 = state_36660__$1;
(statearr_36667_36706[(1)] = (5));

} else {
var statearr_36668_36707 = state_36660__$1;
(statearr_36668_36707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (15))){
var state_36660__$1 = state_36660;
var statearr_36672_36708 = state_36660__$1;
(statearr_36672_36708[(2)] = null);

(statearr_36672_36708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (21))){
var state_36660__$1 = state_36660;
var statearr_36673_36709 = state_36660__$1;
(statearr_36673_36709[(2)] = null);

(statearr_36673_36709[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (13))){
var inst_36612 = (state_36660[(8)]);
var inst_36613 = (state_36660[(9)]);
var inst_36615 = (state_36660[(10)]);
var inst_36614 = (state_36660[(11)]);
var inst_36622 = (state_36660[(2)]);
var inst_36623 = (inst_36615 + (1));
var tmp36669 = inst_36612;
var tmp36670 = inst_36613;
var tmp36671 = inst_36614;
var inst_36612__$1 = tmp36669;
var inst_36613__$1 = tmp36670;
var inst_36614__$1 = tmp36671;
var inst_36615__$1 = inst_36623;
var state_36660__$1 = (function (){var statearr_36674 = state_36660;
(statearr_36674[(14)] = inst_36622);

(statearr_36674[(8)] = inst_36612__$1);

(statearr_36674[(9)] = inst_36613__$1);

(statearr_36674[(10)] = inst_36615__$1);

(statearr_36674[(11)] = inst_36614__$1);

return statearr_36674;
})();
var statearr_36675_36710 = state_36660__$1;
(statearr_36675_36710[(2)] = null);

(statearr_36675_36710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (22))){
var state_36660__$1 = state_36660;
var statearr_36676_36711 = state_36660__$1;
(statearr_36676_36711[(2)] = null);

(statearr_36676_36711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (6))){
var inst_36601 = (state_36660[(13)]);
var inst_36610 = f.call(null,inst_36601);
var inst_36611 = cljs.core.seq.call(null,inst_36610);
var inst_36612 = inst_36611;
var inst_36613 = null;
var inst_36614 = (0);
var inst_36615 = (0);
var state_36660__$1 = (function (){var statearr_36677 = state_36660;
(statearr_36677[(8)] = inst_36612);

(statearr_36677[(9)] = inst_36613);

(statearr_36677[(10)] = inst_36615);

(statearr_36677[(11)] = inst_36614);

return statearr_36677;
})();
var statearr_36678_36712 = state_36660__$1;
(statearr_36678_36712[(2)] = null);

(statearr_36678_36712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (17))){
var inst_36626 = (state_36660[(7)]);
var inst_36630 = cljs.core.chunk_first.call(null,inst_36626);
var inst_36631 = cljs.core.chunk_rest.call(null,inst_36626);
var inst_36632 = cljs.core.count.call(null,inst_36630);
var inst_36612 = inst_36631;
var inst_36613 = inst_36630;
var inst_36614 = inst_36632;
var inst_36615 = (0);
var state_36660__$1 = (function (){var statearr_36679 = state_36660;
(statearr_36679[(8)] = inst_36612);

(statearr_36679[(9)] = inst_36613);

(statearr_36679[(10)] = inst_36615);

(statearr_36679[(11)] = inst_36614);

return statearr_36679;
})();
var statearr_36680_36713 = state_36660__$1;
(statearr_36680_36713[(2)] = null);

(statearr_36680_36713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (3))){
var inst_36658 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36660__$1,inst_36658);
} else {
if((state_val_36661 === (12))){
var inst_36646 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36681_36714 = state_36660__$1;
(statearr_36681_36714[(2)] = inst_36646);

(statearr_36681_36714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (2))){
var state_36660__$1 = state_36660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36660__$1,(4),in$);
} else {
if((state_val_36661 === (23))){
var inst_36654 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36682_36715 = state_36660__$1;
(statearr_36682_36715[(2)] = inst_36654);

(statearr_36682_36715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (19))){
var inst_36641 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36683_36716 = state_36660__$1;
(statearr_36683_36716[(2)] = inst_36641);

(statearr_36683_36716[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (11))){
var inst_36612 = (state_36660[(8)]);
var inst_36626 = (state_36660[(7)]);
var inst_36626__$1 = cljs.core.seq.call(null,inst_36612);
var state_36660__$1 = (function (){var statearr_36684 = state_36660;
(statearr_36684[(7)] = inst_36626__$1);

return statearr_36684;
})();
if(inst_36626__$1){
var statearr_36685_36717 = state_36660__$1;
(statearr_36685_36717[(1)] = (14));

} else {
var statearr_36686_36718 = state_36660__$1;
(statearr_36686_36718[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (9))){
var inst_36648 = (state_36660[(2)]);
var inst_36649 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36660__$1 = (function (){var statearr_36687 = state_36660;
(statearr_36687[(15)] = inst_36648);

return statearr_36687;
})();
if(cljs.core.truth_(inst_36649)){
var statearr_36688_36719 = state_36660__$1;
(statearr_36688_36719[(1)] = (21));

} else {
var statearr_36689_36720 = state_36660__$1;
(statearr_36689_36720[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (5))){
var inst_36604 = cljs.core.async.close_BANG_.call(null,out);
var state_36660__$1 = state_36660;
var statearr_36690_36721 = state_36660__$1;
(statearr_36690_36721[(2)] = inst_36604);

(statearr_36690_36721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (14))){
var inst_36626 = (state_36660[(7)]);
var inst_36628 = cljs.core.chunked_seq_QMARK_.call(null,inst_36626);
var state_36660__$1 = state_36660;
if(inst_36628){
var statearr_36691_36722 = state_36660__$1;
(statearr_36691_36722[(1)] = (17));

} else {
var statearr_36692_36723 = state_36660__$1;
(statearr_36692_36723[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (16))){
var inst_36644 = (state_36660[(2)]);
var state_36660__$1 = state_36660;
var statearr_36693_36724 = state_36660__$1;
(statearr_36693_36724[(2)] = inst_36644);

(statearr_36693_36724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36661 === (10))){
var inst_36613 = (state_36660[(9)]);
var inst_36615 = (state_36660[(10)]);
var inst_36620 = cljs.core._nth.call(null,inst_36613,inst_36615);
var state_36660__$1 = state_36660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36660__$1,(13),out,inst_36620);
} else {
if((state_val_36661 === (18))){
var inst_36626 = (state_36660[(7)]);
var inst_36635 = cljs.core.first.call(null,inst_36626);
var state_36660__$1 = state_36660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36660__$1,(20),out,inst_36635);
} else {
if((state_val_36661 === (8))){
var inst_36615 = (state_36660[(10)]);
var inst_36614 = (state_36660[(11)]);
var inst_36617 = (inst_36615 < inst_36614);
var inst_36618 = inst_36617;
var state_36660__$1 = state_36660;
if(cljs.core.truth_(inst_36618)){
var statearr_36694_36725 = state_36660__$1;
(statearr_36694_36725[(1)] = (10));

} else {
var statearr_36695_36726 = state_36660__$1;
(statearr_36695_36726[(1)] = (11));

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
});})(c__34203__auto__))
;
return ((function (switch__34091__auto__,c__34203__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34092__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34092__auto____0 = (function (){
var statearr_36699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36699[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34092__auto__);

(statearr_36699[(1)] = (1));

return statearr_36699;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34092__auto____1 = (function (state_36660){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36700){if((e36700 instanceof Object)){
var ex__34095__auto__ = e36700;
var statearr_36701_36727 = state_36660;
(statearr_36701_36727[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36728 = state_36660;
state_36660 = G__36728;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34092__auto__ = function(state_36660){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34092__auto____1.call(this,state_36660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34092__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34092__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__))
})();
var state__34205__auto__ = (function (){var statearr_36702 = f__34204__auto__.call(null);
(statearr_36702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_36702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__))
);

return c__34203__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36729 = [];
var len__25826__auto___36732 = arguments.length;
var i__25827__auto___36733 = (0);
while(true){
if((i__25827__auto___36733 < len__25826__auto___36732)){
args36729.push((arguments[i__25827__auto___36733]));

var G__36734 = (i__25827__auto___36733 + (1));
i__25827__auto___36733 = G__36734;
continue;
} else {
}
break;
}

var G__36731 = args36729.length;
switch (G__36731) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36729.length)].join('')));

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
var args36736 = [];
var len__25826__auto___36739 = arguments.length;
var i__25827__auto___36740 = (0);
while(true){
if((i__25827__auto___36740 < len__25826__auto___36739)){
args36736.push((arguments[i__25827__auto___36740]));

var G__36741 = (i__25827__auto___36740 + (1));
i__25827__auto___36740 = G__36741;
continue;
} else {
}
break;
}

var G__36738 = args36736.length;
switch (G__36738) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36736.length)].join('')));

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
var args36743 = [];
var len__25826__auto___36794 = arguments.length;
var i__25827__auto___36795 = (0);
while(true){
if((i__25827__auto___36795 < len__25826__auto___36794)){
args36743.push((arguments[i__25827__auto___36795]));

var G__36796 = (i__25827__auto___36795 + (1));
i__25827__auto___36795 = G__36796;
continue;
} else {
}
break;
}

var G__36745 = args36743.length;
switch (G__36745) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36743.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34203__auto___36798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36798,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36798,out){
return (function (state_36769){
var state_val_36770 = (state_36769[(1)]);
if((state_val_36770 === (7))){
var inst_36764 = (state_36769[(2)]);
var state_36769__$1 = state_36769;
var statearr_36771_36799 = state_36769__$1;
(statearr_36771_36799[(2)] = inst_36764);

(statearr_36771_36799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (1))){
var inst_36746 = null;
var state_36769__$1 = (function (){var statearr_36772 = state_36769;
(statearr_36772[(7)] = inst_36746);

return statearr_36772;
})();
var statearr_36773_36800 = state_36769__$1;
(statearr_36773_36800[(2)] = null);

(statearr_36773_36800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (4))){
var inst_36749 = (state_36769[(8)]);
var inst_36749__$1 = (state_36769[(2)]);
var inst_36750 = (inst_36749__$1 == null);
var inst_36751 = cljs.core.not.call(null,inst_36750);
var state_36769__$1 = (function (){var statearr_36774 = state_36769;
(statearr_36774[(8)] = inst_36749__$1);

return statearr_36774;
})();
if(inst_36751){
var statearr_36775_36801 = state_36769__$1;
(statearr_36775_36801[(1)] = (5));

} else {
var statearr_36776_36802 = state_36769__$1;
(statearr_36776_36802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (6))){
var state_36769__$1 = state_36769;
var statearr_36777_36803 = state_36769__$1;
(statearr_36777_36803[(2)] = null);

(statearr_36777_36803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (3))){
var inst_36766 = (state_36769[(2)]);
var inst_36767 = cljs.core.async.close_BANG_.call(null,out);
var state_36769__$1 = (function (){var statearr_36778 = state_36769;
(statearr_36778[(9)] = inst_36766);

return statearr_36778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36769__$1,inst_36767);
} else {
if((state_val_36770 === (2))){
var state_36769__$1 = state_36769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36769__$1,(4),ch);
} else {
if((state_val_36770 === (11))){
var inst_36749 = (state_36769[(8)]);
var inst_36758 = (state_36769[(2)]);
var inst_36746 = inst_36749;
var state_36769__$1 = (function (){var statearr_36779 = state_36769;
(statearr_36779[(10)] = inst_36758);

(statearr_36779[(7)] = inst_36746);

return statearr_36779;
})();
var statearr_36780_36804 = state_36769__$1;
(statearr_36780_36804[(2)] = null);

(statearr_36780_36804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (9))){
var inst_36749 = (state_36769[(8)]);
var state_36769__$1 = state_36769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36769__$1,(11),out,inst_36749);
} else {
if((state_val_36770 === (5))){
var inst_36749 = (state_36769[(8)]);
var inst_36746 = (state_36769[(7)]);
var inst_36753 = cljs.core._EQ_.call(null,inst_36749,inst_36746);
var state_36769__$1 = state_36769;
if(inst_36753){
var statearr_36782_36805 = state_36769__$1;
(statearr_36782_36805[(1)] = (8));

} else {
var statearr_36783_36806 = state_36769__$1;
(statearr_36783_36806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (10))){
var inst_36761 = (state_36769[(2)]);
var state_36769__$1 = state_36769;
var statearr_36784_36807 = state_36769__$1;
(statearr_36784_36807[(2)] = inst_36761);

(statearr_36784_36807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36770 === (8))){
var inst_36746 = (state_36769[(7)]);
var tmp36781 = inst_36746;
var inst_36746__$1 = tmp36781;
var state_36769__$1 = (function (){var statearr_36785 = state_36769;
(statearr_36785[(7)] = inst_36746__$1);

return statearr_36785;
})();
var statearr_36786_36808 = state_36769__$1;
(statearr_36786_36808[(2)] = null);

(statearr_36786_36808[(1)] = (2));


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
});})(c__34203__auto___36798,out))
;
return ((function (switch__34091__auto__,c__34203__auto___36798,out){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36790[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36790[(1)] = (1));

return statearr_36790;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36769){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36791){if((e36791 instanceof Object)){
var ex__34095__auto__ = e36791;
var statearr_36792_36809 = state_36769;
(statearr_36792_36809[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36810 = state_36769;
state_36769 = G__36810;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36798,out))
})();
var state__34205__auto__ = (function (){var statearr_36793 = f__34204__auto__.call(null);
(statearr_36793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36798);

return statearr_36793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36798,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36811 = [];
var len__25826__auto___36881 = arguments.length;
var i__25827__auto___36882 = (0);
while(true){
if((i__25827__auto___36882 < len__25826__auto___36881)){
args36811.push((arguments[i__25827__auto___36882]));

var G__36883 = (i__25827__auto___36882 + (1));
i__25827__auto___36882 = G__36883;
continue;
} else {
}
break;
}

var G__36813 = args36811.length;
switch (G__36813) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36811.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34203__auto___36885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36885,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36885,out){
return (function (state_36851){
var state_val_36852 = (state_36851[(1)]);
if((state_val_36852 === (7))){
var inst_36847 = (state_36851[(2)]);
var state_36851__$1 = state_36851;
var statearr_36853_36886 = state_36851__$1;
(statearr_36853_36886[(2)] = inst_36847);

(statearr_36853_36886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (1))){
var inst_36814 = (new Array(n));
var inst_36815 = inst_36814;
var inst_36816 = (0);
var state_36851__$1 = (function (){var statearr_36854 = state_36851;
(statearr_36854[(7)] = inst_36815);

(statearr_36854[(8)] = inst_36816);

return statearr_36854;
})();
var statearr_36855_36887 = state_36851__$1;
(statearr_36855_36887[(2)] = null);

(statearr_36855_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (4))){
var inst_36819 = (state_36851[(9)]);
var inst_36819__$1 = (state_36851[(2)]);
var inst_36820 = (inst_36819__$1 == null);
var inst_36821 = cljs.core.not.call(null,inst_36820);
var state_36851__$1 = (function (){var statearr_36856 = state_36851;
(statearr_36856[(9)] = inst_36819__$1);

return statearr_36856;
})();
if(inst_36821){
var statearr_36857_36888 = state_36851__$1;
(statearr_36857_36888[(1)] = (5));

} else {
var statearr_36858_36889 = state_36851__$1;
(statearr_36858_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (15))){
var inst_36841 = (state_36851[(2)]);
var state_36851__$1 = state_36851;
var statearr_36859_36890 = state_36851__$1;
(statearr_36859_36890[(2)] = inst_36841);

(statearr_36859_36890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (13))){
var state_36851__$1 = state_36851;
var statearr_36860_36891 = state_36851__$1;
(statearr_36860_36891[(2)] = null);

(statearr_36860_36891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (6))){
var inst_36816 = (state_36851[(8)]);
var inst_36837 = (inst_36816 > (0));
var state_36851__$1 = state_36851;
if(cljs.core.truth_(inst_36837)){
var statearr_36861_36892 = state_36851__$1;
(statearr_36861_36892[(1)] = (12));

} else {
var statearr_36862_36893 = state_36851__$1;
(statearr_36862_36893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (3))){
var inst_36849 = (state_36851[(2)]);
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36851__$1,inst_36849);
} else {
if((state_val_36852 === (12))){
var inst_36815 = (state_36851[(7)]);
var inst_36839 = cljs.core.vec.call(null,inst_36815);
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36851__$1,(15),out,inst_36839);
} else {
if((state_val_36852 === (2))){
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36851__$1,(4),ch);
} else {
if((state_val_36852 === (11))){
var inst_36831 = (state_36851[(2)]);
var inst_36832 = (new Array(n));
var inst_36815 = inst_36832;
var inst_36816 = (0);
var state_36851__$1 = (function (){var statearr_36863 = state_36851;
(statearr_36863[(7)] = inst_36815);

(statearr_36863[(8)] = inst_36816);

(statearr_36863[(10)] = inst_36831);

return statearr_36863;
})();
var statearr_36864_36894 = state_36851__$1;
(statearr_36864_36894[(2)] = null);

(statearr_36864_36894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (9))){
var inst_36815 = (state_36851[(7)]);
var inst_36829 = cljs.core.vec.call(null,inst_36815);
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36851__$1,(11),out,inst_36829);
} else {
if((state_val_36852 === (5))){
var inst_36824 = (state_36851[(11)]);
var inst_36815 = (state_36851[(7)]);
var inst_36816 = (state_36851[(8)]);
var inst_36819 = (state_36851[(9)]);
var inst_36823 = (inst_36815[inst_36816] = inst_36819);
var inst_36824__$1 = (inst_36816 + (1));
var inst_36825 = (inst_36824__$1 < n);
var state_36851__$1 = (function (){var statearr_36865 = state_36851;
(statearr_36865[(11)] = inst_36824__$1);

(statearr_36865[(12)] = inst_36823);

return statearr_36865;
})();
if(cljs.core.truth_(inst_36825)){
var statearr_36866_36895 = state_36851__$1;
(statearr_36866_36895[(1)] = (8));

} else {
var statearr_36867_36896 = state_36851__$1;
(statearr_36867_36896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (14))){
var inst_36844 = (state_36851[(2)]);
var inst_36845 = cljs.core.async.close_BANG_.call(null,out);
var state_36851__$1 = (function (){var statearr_36869 = state_36851;
(statearr_36869[(13)] = inst_36844);

return statearr_36869;
})();
var statearr_36870_36897 = state_36851__$1;
(statearr_36870_36897[(2)] = inst_36845);

(statearr_36870_36897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (10))){
var inst_36835 = (state_36851[(2)]);
var state_36851__$1 = state_36851;
var statearr_36871_36898 = state_36851__$1;
(statearr_36871_36898[(2)] = inst_36835);

(statearr_36871_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (8))){
var inst_36824 = (state_36851[(11)]);
var inst_36815 = (state_36851[(7)]);
var tmp36868 = inst_36815;
var inst_36815__$1 = tmp36868;
var inst_36816 = inst_36824;
var state_36851__$1 = (function (){var statearr_36872 = state_36851;
(statearr_36872[(7)] = inst_36815__$1);

(statearr_36872[(8)] = inst_36816);

return statearr_36872;
})();
var statearr_36873_36899 = state_36851__$1;
(statearr_36873_36899[(2)] = null);

(statearr_36873_36899[(1)] = (2));


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
});})(c__34203__auto___36885,out))
;
return ((function (switch__34091__auto__,c__34203__auto___36885,out){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36877[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36877[(1)] = (1));

return statearr_36877;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36851){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36878){if((e36878 instanceof Object)){
var ex__34095__auto__ = e36878;
var statearr_36879_36900 = state_36851;
(statearr_36879_36900[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36901 = state_36851;
state_36851 = G__36901;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36885,out))
})();
var state__34205__auto__ = (function (){var statearr_36880 = f__34204__auto__.call(null);
(statearr_36880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36885);

return statearr_36880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36885,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36902 = [];
var len__25826__auto___36976 = arguments.length;
var i__25827__auto___36977 = (0);
while(true){
if((i__25827__auto___36977 < len__25826__auto___36976)){
args36902.push((arguments[i__25827__auto___36977]));

var G__36978 = (i__25827__auto___36977 + (1));
i__25827__auto___36977 = G__36978;
continue;
} else {
}
break;
}

var G__36904 = args36902.length;
switch (G__36904) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36902.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34203__auto___36980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___36980,out){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___36980,out){
return (function (state_36946){
var state_val_36947 = (state_36946[(1)]);
if((state_val_36947 === (7))){
var inst_36942 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
var statearr_36948_36981 = state_36946__$1;
(statearr_36948_36981[(2)] = inst_36942);

(statearr_36948_36981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (1))){
var inst_36905 = [];
var inst_36906 = inst_36905;
var inst_36907 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36946__$1 = (function (){var statearr_36949 = state_36946;
(statearr_36949[(7)] = inst_36906);

(statearr_36949[(8)] = inst_36907);

return statearr_36949;
})();
var statearr_36950_36982 = state_36946__$1;
(statearr_36950_36982[(2)] = null);

(statearr_36950_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (4))){
var inst_36910 = (state_36946[(9)]);
var inst_36910__$1 = (state_36946[(2)]);
var inst_36911 = (inst_36910__$1 == null);
var inst_36912 = cljs.core.not.call(null,inst_36911);
var state_36946__$1 = (function (){var statearr_36951 = state_36946;
(statearr_36951[(9)] = inst_36910__$1);

return statearr_36951;
})();
if(inst_36912){
var statearr_36952_36983 = state_36946__$1;
(statearr_36952_36983[(1)] = (5));

} else {
var statearr_36953_36984 = state_36946__$1;
(statearr_36953_36984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (15))){
var inst_36936 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
var statearr_36954_36985 = state_36946__$1;
(statearr_36954_36985[(2)] = inst_36936);

(statearr_36954_36985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (13))){
var state_36946__$1 = state_36946;
var statearr_36955_36986 = state_36946__$1;
(statearr_36955_36986[(2)] = null);

(statearr_36955_36986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (6))){
var inst_36906 = (state_36946[(7)]);
var inst_36931 = inst_36906.length;
var inst_36932 = (inst_36931 > (0));
var state_36946__$1 = state_36946;
if(cljs.core.truth_(inst_36932)){
var statearr_36956_36987 = state_36946__$1;
(statearr_36956_36987[(1)] = (12));

} else {
var statearr_36957_36988 = state_36946__$1;
(statearr_36957_36988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (3))){
var inst_36944 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36946__$1,inst_36944);
} else {
if((state_val_36947 === (12))){
var inst_36906 = (state_36946[(7)]);
var inst_36934 = cljs.core.vec.call(null,inst_36906);
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36946__$1,(15),out,inst_36934);
} else {
if((state_val_36947 === (2))){
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36946__$1,(4),ch);
} else {
if((state_val_36947 === (11))){
var inst_36910 = (state_36946[(9)]);
var inst_36914 = (state_36946[(10)]);
var inst_36924 = (state_36946[(2)]);
var inst_36925 = [];
var inst_36926 = inst_36925.push(inst_36910);
var inst_36906 = inst_36925;
var inst_36907 = inst_36914;
var state_36946__$1 = (function (){var statearr_36958 = state_36946;
(statearr_36958[(7)] = inst_36906);

(statearr_36958[(11)] = inst_36924);

(statearr_36958[(8)] = inst_36907);

(statearr_36958[(12)] = inst_36926);

return statearr_36958;
})();
var statearr_36959_36989 = state_36946__$1;
(statearr_36959_36989[(2)] = null);

(statearr_36959_36989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (9))){
var inst_36906 = (state_36946[(7)]);
var inst_36922 = cljs.core.vec.call(null,inst_36906);
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36946__$1,(11),out,inst_36922);
} else {
if((state_val_36947 === (5))){
var inst_36910 = (state_36946[(9)]);
var inst_36914 = (state_36946[(10)]);
var inst_36907 = (state_36946[(8)]);
var inst_36914__$1 = f.call(null,inst_36910);
var inst_36915 = cljs.core._EQ_.call(null,inst_36914__$1,inst_36907);
var inst_36916 = cljs.core.keyword_identical_QMARK_.call(null,inst_36907,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36917 = (inst_36915) || (inst_36916);
var state_36946__$1 = (function (){var statearr_36960 = state_36946;
(statearr_36960[(10)] = inst_36914__$1);

return statearr_36960;
})();
if(cljs.core.truth_(inst_36917)){
var statearr_36961_36990 = state_36946__$1;
(statearr_36961_36990[(1)] = (8));

} else {
var statearr_36962_36991 = state_36946__$1;
(statearr_36962_36991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (14))){
var inst_36939 = (state_36946[(2)]);
var inst_36940 = cljs.core.async.close_BANG_.call(null,out);
var state_36946__$1 = (function (){var statearr_36964 = state_36946;
(statearr_36964[(13)] = inst_36939);

return statearr_36964;
})();
var statearr_36965_36992 = state_36946__$1;
(statearr_36965_36992[(2)] = inst_36940);

(statearr_36965_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (10))){
var inst_36929 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
var statearr_36966_36993 = state_36946__$1;
(statearr_36966_36993[(2)] = inst_36929);

(statearr_36966_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (8))){
var inst_36910 = (state_36946[(9)]);
var inst_36914 = (state_36946[(10)]);
var inst_36906 = (state_36946[(7)]);
var inst_36919 = inst_36906.push(inst_36910);
var tmp36963 = inst_36906;
var inst_36906__$1 = tmp36963;
var inst_36907 = inst_36914;
var state_36946__$1 = (function (){var statearr_36967 = state_36946;
(statearr_36967[(14)] = inst_36919);

(statearr_36967[(7)] = inst_36906__$1);

(statearr_36967[(8)] = inst_36907);

return statearr_36967;
})();
var statearr_36968_36994 = state_36946__$1;
(statearr_36968_36994[(2)] = null);

(statearr_36968_36994[(1)] = (2));


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
});})(c__34203__auto___36980,out))
;
return ((function (switch__34091__auto__,c__34203__auto___36980,out){
return (function() {
var cljs$core$async$state_machine__34092__auto__ = null;
var cljs$core$async$state_machine__34092__auto____0 = (function (){
var statearr_36972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36972[(0)] = cljs$core$async$state_machine__34092__auto__);

(statearr_36972[(1)] = (1));

return statearr_36972;
});
var cljs$core$async$state_machine__34092__auto____1 = (function (state_36946){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_36946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e36973){if((e36973 instanceof Object)){
var ex__34095__auto__ = e36973;
var statearr_36974_36995 = state_36946;
(statearr_36974_36995[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36996 = state_36946;
state_36946 = G__36996;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
cljs$core$async$state_machine__34092__auto__ = function(state_36946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34092__auto____1.call(this,state_36946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34092__auto____0;
cljs$core$async$state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34092__auto____1;
return cljs$core$async$state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___36980,out))
})();
var state__34205__auto__ = (function (){var statearr_36975 = f__34204__auto__.call(null);
(statearr_36975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___36980);

return statearr_36975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___36980,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1478445830948