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
var args70976 = [];
var len__25826__auto___70982 = arguments.length;
var i__25827__auto___70983 = (0);
while(true){
if((i__25827__auto___70983 < len__25826__auto___70982)){
args70976.push((arguments[i__25827__auto___70983]));

var G__70984 = (i__25827__auto___70983 + (1));
i__25827__auto___70983 = G__70984;
continue;
} else {
}
break;
}

var G__70978 = args70976.length;
switch (G__70978) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70976.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async70979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70979 = (function (f,blockable,meta70980){
this.f = f;
this.blockable = blockable;
this.meta70980 = meta70980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70981,meta70980__$1){
var self__ = this;
var _70981__$1 = this;
return (new cljs.core.async.t_cljs$core$async70979(self__.f,self__.blockable,meta70980__$1));
});

cljs.core.async.t_cljs$core$async70979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70981){
var self__ = this;
var _70981__$1 = this;
return self__.meta70980;
});

cljs.core.async.t_cljs$core$async70979.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async70979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async70979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async70979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async70979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta70980","meta70980",1508475464,null)], null);
});

cljs.core.async.t_cljs$core$async70979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70979";

cljs.core.async.t_cljs$core$async70979.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async70979");
});

cljs.core.async.__GT_t_cljs$core$async70979 = (function cljs$core$async$__GT_t_cljs$core$async70979(f__$1,blockable__$1,meta70980){
return (new cljs.core.async.t_cljs$core$async70979(f__$1,blockable__$1,meta70980));
});

}

return (new cljs.core.async.t_cljs$core$async70979(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args70988 = [];
var len__25826__auto___70991 = arguments.length;
var i__25827__auto___70992 = (0);
while(true){
if((i__25827__auto___70992 < len__25826__auto___70991)){
args70988.push((arguments[i__25827__auto___70992]));

var G__70993 = (i__25827__auto___70992 + (1));
i__25827__auto___70992 = G__70993;
continue;
} else {
}
break;
}

var G__70990 = args70988.length;
switch (G__70990) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70988.length)].join('')));

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
var args70995 = [];
var len__25826__auto___70998 = arguments.length;
var i__25827__auto___70999 = (0);
while(true){
if((i__25827__auto___70999 < len__25826__auto___70998)){
args70995.push((arguments[i__25827__auto___70999]));

var G__71000 = (i__25827__auto___70999 + (1));
i__25827__auto___70999 = G__71000;
continue;
} else {
}
break;
}

var G__70997 = args70995.length;
switch (G__70997) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70995.length)].join('')));

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
var args71002 = [];
var len__25826__auto___71005 = arguments.length;
var i__25827__auto___71006 = (0);
while(true){
if((i__25827__auto___71006 < len__25826__auto___71005)){
args71002.push((arguments[i__25827__auto___71006]));

var G__71007 = (i__25827__auto___71006 + (1));
i__25827__auto___71006 = G__71007;
continue;
} else {
}
break;
}

var G__71004 = args71002.length;
switch (G__71004) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71002.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_71009 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_71009);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_71009,ret){
return (function (){
return fn1.call(null,val_71009);
});})(val_71009,ret))
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
var args71010 = [];
var len__25826__auto___71013 = arguments.length;
var i__25827__auto___71014 = (0);
while(true){
if((i__25827__auto___71014 < len__25826__auto___71013)){
args71010.push((arguments[i__25827__auto___71014]));

var G__71015 = (i__25827__auto___71014 + (1));
i__25827__auto___71014 = G__71015;
continue;
} else {
}
break;
}

var G__71012 = args71010.length;
switch (G__71012) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71010.length)].join('')));

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
var n__25666__auto___71017 = n;
var x_71018 = (0);
while(true){
if((x_71018 < n__25666__auto___71017)){
(a[x_71018] = (0));

var G__71019 = (x_71018 + (1));
x_71018 = G__71019;
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

var G__71020 = (i + (1));
i = G__71020;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async71024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71024 = (function (alt_flag,flag,meta71025){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta71025 = meta71025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async71024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_71026,meta71025__$1){
var self__ = this;
var _71026__$1 = this;
return (new cljs.core.async.t_cljs$core$async71024(self__.alt_flag,self__.flag,meta71025__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async71024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_71026){
var self__ = this;
var _71026__$1 = this;
return self__.meta71025;
});})(flag))
;

cljs.core.async.t_cljs$core$async71024.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async71024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async71024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async71024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async71024.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta71025","meta71025",-816168982,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async71024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71024";

cljs.core.async.t_cljs$core$async71024.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async71024");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async71024 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async71024(alt_flag__$1,flag__$1,meta71025){
return (new cljs.core.async.t_cljs$core$async71024(alt_flag__$1,flag__$1,meta71025));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async71024(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async71030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71030 = (function (alt_handler,flag,cb,meta71031){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta71031 = meta71031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async71030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71032,meta71031__$1){
var self__ = this;
var _71032__$1 = this;
return (new cljs.core.async.t_cljs$core$async71030(self__.alt_handler,self__.flag,self__.cb,meta71031__$1));
});

cljs.core.async.t_cljs$core$async71030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71032){
var self__ = this;
var _71032__$1 = this;
return self__.meta71031;
});

cljs.core.async.t_cljs$core$async71030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async71030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async71030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async71030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async71030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta71031","meta71031",-883026408,null)], null);
});

cljs.core.async.t_cljs$core$async71030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async71030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71030";

cljs.core.async.t_cljs$core$async71030.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async71030");
});

cljs.core.async.__GT_t_cljs$core$async71030 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async71030(alt_handler__$1,flag__$1,cb__$1,meta71031){
return (new cljs.core.async.t_cljs$core$async71030(alt_handler__$1,flag__$1,cb__$1,meta71031));
});

}

return (new cljs.core.async.t_cljs$core$async71030(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__71033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71033_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71034_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71034_SHARP_,port], null));
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
var G__71035 = (i + (1));
i = G__71035;
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
var len__25826__auto___71041 = arguments.length;
var i__25827__auto___71042 = (0);
while(true){
if((i__25827__auto___71042 < len__25826__auto___71041)){
args__25833__auto__.push((arguments[i__25827__auto___71042]));

var G__71043 = (i__25827__auto___71042 + (1));
i__25827__auto___71042 = G__71043;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__71038){
var map__71039 = p__71038;
var map__71039__$1 = ((((!((map__71039 == null)))?((((map__71039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71039):map__71039);
var opts = map__71039__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq71036){
var G__71037 = cljs.core.first.call(null,seq71036);
var seq71036__$1 = cljs.core.next.call(null,seq71036);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__71037,seq71036__$1);
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
var args71044 = [];
var len__25826__auto___71094 = arguments.length;
var i__25827__auto___71095 = (0);
while(true){
if((i__25827__auto___71095 < len__25826__auto___71094)){
args71044.push((arguments[i__25827__auto___71095]));

var G__71096 = (i__25827__auto___71095 + (1));
i__25827__auto___71095 = G__71096;
continue;
} else {
}
break;
}

var G__71046 = args71044.length;
switch (G__71046) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71044.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27930__auto___71098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___71098){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___71098){
return (function (state_71070){
var state_val_71071 = (state_71070[(1)]);
if((state_val_71071 === (7))){
var inst_71066 = (state_71070[(2)]);
var state_71070__$1 = state_71070;
var statearr_71072_71099 = state_71070__$1;
(statearr_71072_71099[(2)] = inst_71066);

(statearr_71072_71099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (1))){
var state_71070__$1 = state_71070;
var statearr_71073_71100 = state_71070__$1;
(statearr_71073_71100[(2)] = null);

(statearr_71073_71100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (4))){
var inst_71049 = (state_71070[(7)]);
var inst_71049__$1 = (state_71070[(2)]);
var inst_71050 = (inst_71049__$1 == null);
var state_71070__$1 = (function (){var statearr_71074 = state_71070;
(statearr_71074[(7)] = inst_71049__$1);

return statearr_71074;
})();
if(cljs.core.truth_(inst_71050)){
var statearr_71075_71101 = state_71070__$1;
(statearr_71075_71101[(1)] = (5));

} else {
var statearr_71076_71102 = state_71070__$1;
(statearr_71076_71102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (13))){
var state_71070__$1 = state_71070;
var statearr_71077_71103 = state_71070__$1;
(statearr_71077_71103[(2)] = null);

(statearr_71077_71103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (6))){
var inst_71049 = (state_71070[(7)]);
var state_71070__$1 = state_71070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71070__$1,(11),to,inst_71049);
} else {
if((state_val_71071 === (3))){
var inst_71068 = (state_71070[(2)]);
var state_71070__$1 = state_71070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71070__$1,inst_71068);
} else {
if((state_val_71071 === (12))){
var state_71070__$1 = state_71070;
var statearr_71078_71104 = state_71070__$1;
(statearr_71078_71104[(2)] = null);

(statearr_71078_71104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (2))){
var state_71070__$1 = state_71070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71070__$1,(4),from);
} else {
if((state_val_71071 === (11))){
var inst_71059 = (state_71070[(2)]);
var state_71070__$1 = state_71070;
if(cljs.core.truth_(inst_71059)){
var statearr_71079_71105 = state_71070__$1;
(statearr_71079_71105[(1)] = (12));

} else {
var statearr_71080_71106 = state_71070__$1;
(statearr_71080_71106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (9))){
var state_71070__$1 = state_71070;
var statearr_71081_71107 = state_71070__$1;
(statearr_71081_71107[(2)] = null);

(statearr_71081_71107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (5))){
var state_71070__$1 = state_71070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71082_71108 = state_71070__$1;
(statearr_71082_71108[(1)] = (8));

} else {
var statearr_71083_71109 = state_71070__$1;
(statearr_71083_71109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (14))){
var inst_71064 = (state_71070[(2)]);
var state_71070__$1 = state_71070;
var statearr_71084_71110 = state_71070__$1;
(statearr_71084_71110[(2)] = inst_71064);

(statearr_71084_71110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (10))){
var inst_71056 = (state_71070[(2)]);
var state_71070__$1 = state_71070;
var statearr_71085_71111 = state_71070__$1;
(statearr_71085_71111[(2)] = inst_71056);

(statearr_71085_71111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71071 === (8))){
var inst_71053 = cljs.core.async.close_BANG_.call(null,to);
var state_71070__$1 = state_71070;
var statearr_71086_71112 = state_71070__$1;
(statearr_71086_71112[(2)] = inst_71053);

(statearr_71086_71112[(1)] = (10));


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
});})(c__27930__auto___71098))
;
return ((function (switch__27865__auto__,c__27930__auto___71098){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_71090 = [null,null,null,null,null,null,null,null];
(statearr_71090[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_71090[(1)] = (1));

return statearr_71090;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_71070){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71091){if((e71091 instanceof Object)){
var ex__27869__auto__ = e71091;
var statearr_71092_71113 = state_71070;
(statearr_71092_71113[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71114 = state_71070;
state_71070 = G__71114;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_71070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_71070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___71098))
})();
var state__27932__auto__ = (function (){var statearr_71093 = f__27931__auto__.call(null);
(statearr_71093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___71098);

return statearr_71093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___71098))
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
return (function (p__71302){
var vec__71303 = p__71302;
var v = cljs.core.nth.call(null,vec__71303,(0),null);
var p = cljs.core.nth.call(null,vec__71303,(1),null);
var job = vec__71303;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27930__auto___71489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___71489,res,vec__71303,v,p,job,jobs,results){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___71489,res,vec__71303,v,p,job,jobs,results){
return (function (state_71310){
var state_val_71311 = (state_71310[(1)]);
if((state_val_71311 === (1))){
var state_71310__$1 = state_71310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71310__$1,(2),res,v);
} else {
if((state_val_71311 === (2))){
var inst_71307 = (state_71310[(2)]);
var inst_71308 = cljs.core.async.close_BANG_.call(null,res);
var state_71310__$1 = (function (){var statearr_71312 = state_71310;
(statearr_71312[(7)] = inst_71307);

return statearr_71312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71310__$1,inst_71308);
} else {
return null;
}
}
});})(c__27930__auto___71489,res,vec__71303,v,p,job,jobs,results))
;
return ((function (switch__27865__auto__,c__27930__auto___71489,res,vec__71303,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_71316 = [null,null,null,null,null,null,null,null];
(statearr_71316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_71316[(1)] = (1));

return statearr_71316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_71310){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71317){if((e71317 instanceof Object)){
var ex__27869__auto__ = e71317;
var statearr_71318_71490 = state_71310;
(statearr_71318_71490[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71491 = state_71310;
state_71310 = G__71491;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_71310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_71310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___71489,res,vec__71303,v,p,job,jobs,results))
})();
var state__27932__auto__ = (function (){var statearr_71319 = f__27931__auto__.call(null);
(statearr_71319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___71489);

return statearr_71319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___71489,res,vec__71303,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__71320){
var vec__71321 = p__71320;
var v = cljs.core.nth.call(null,vec__71321,(0),null);
var p = cljs.core.nth.call(null,vec__71321,(1),null);
var job = vec__71321;
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
var n__25666__auto___71492 = n;
var __71493 = (0);
while(true){
if((__71493 < n__25666__auto___71492)){
var G__71324_71494 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__71324_71494) {
case "compute":
var c__27930__auto___71496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__71493,c__27930__auto___71496,G__71324_71494,n__25666__auto___71492,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (__71493,c__27930__auto___71496,G__71324_71494,n__25666__auto___71492,jobs,results,process,async){
return (function (state_71337){
var state_val_71338 = (state_71337[(1)]);
if((state_val_71338 === (1))){
var state_71337__$1 = state_71337;
var statearr_71339_71497 = state_71337__$1;
(statearr_71339_71497[(2)] = null);

(statearr_71339_71497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71338 === (2))){
var state_71337__$1 = state_71337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71337__$1,(4),jobs);
} else {
if((state_val_71338 === (3))){
var inst_71335 = (state_71337[(2)]);
var state_71337__$1 = state_71337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71337__$1,inst_71335);
} else {
if((state_val_71338 === (4))){
var inst_71327 = (state_71337[(2)]);
var inst_71328 = process.call(null,inst_71327);
var state_71337__$1 = state_71337;
if(cljs.core.truth_(inst_71328)){
var statearr_71340_71498 = state_71337__$1;
(statearr_71340_71498[(1)] = (5));

} else {
var statearr_71341_71499 = state_71337__$1;
(statearr_71341_71499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71338 === (5))){
var state_71337__$1 = state_71337;
var statearr_71342_71500 = state_71337__$1;
(statearr_71342_71500[(2)] = null);

(statearr_71342_71500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71338 === (6))){
var state_71337__$1 = state_71337;
var statearr_71343_71501 = state_71337__$1;
(statearr_71343_71501[(2)] = null);

(statearr_71343_71501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71338 === (7))){
var inst_71333 = (state_71337[(2)]);
var state_71337__$1 = state_71337;
var statearr_71344_71502 = state_71337__$1;
(statearr_71344_71502[(2)] = inst_71333);

(statearr_71344_71502[(1)] = (3));


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
});})(__71493,c__27930__auto___71496,G__71324_71494,n__25666__auto___71492,jobs,results,process,async))
;
return ((function (__71493,switch__27865__auto__,c__27930__auto___71496,G__71324_71494,n__25666__auto___71492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_71348 = [null,null,null,null,null,null,null];
(statearr_71348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_71348[(1)] = (1));

return statearr_71348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_71337){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71349){if((e71349 instanceof Object)){
var ex__27869__auto__ = e71349;
var statearr_71350_71503 = state_71337;
(statearr_71350_71503[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71504 = state_71337;
state_71337 = G__71504;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_71337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_71337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(__71493,switch__27865__auto__,c__27930__auto___71496,G__71324_71494,n__25666__auto___71492,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_71351 = f__27931__auto__.call(null);
(statearr_71351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___71496);

return statearr_71351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(__71493,c__27930__auto___71496,G__71324_71494,n__25666__auto___71492,jobs,results,process,async))
);


break;
case "async":
var c__27930__auto___71505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__71493,c__27930__auto___71505,G__71324_71494,n__25666__auto___71492,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (__71493,c__27930__auto___71505,G__71324_71494,n__25666__auto___71492,jobs,results,process,async){
return (function (state_71364){
var state_val_71365 = (state_71364[(1)]);
if((state_val_71365 === (1))){
var state_71364__$1 = state_71364;
var statearr_71366_71506 = state_71364__$1;
(statearr_71366_71506[(2)] = null);

(statearr_71366_71506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71365 === (2))){
var state_71364__$1 = state_71364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71364__$1,(4),jobs);
} else {
if((state_val_71365 === (3))){
var inst_71362 = (state_71364[(2)]);
var state_71364__$1 = state_71364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71364__$1,inst_71362);
} else {
if((state_val_71365 === (4))){
var inst_71354 = (state_71364[(2)]);
var inst_71355 = async.call(null,inst_71354);
var state_71364__$1 = state_71364;
if(cljs.core.truth_(inst_71355)){
var statearr_71367_71507 = state_71364__$1;
(statearr_71367_71507[(1)] = (5));

} else {
var statearr_71368_71508 = state_71364__$1;
(statearr_71368_71508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71365 === (5))){
var state_71364__$1 = state_71364;
var statearr_71369_71509 = state_71364__$1;
(statearr_71369_71509[(2)] = null);

(statearr_71369_71509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71365 === (6))){
var state_71364__$1 = state_71364;
var statearr_71370_71510 = state_71364__$1;
(statearr_71370_71510[(2)] = null);

(statearr_71370_71510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71365 === (7))){
var inst_71360 = (state_71364[(2)]);
var state_71364__$1 = state_71364;
var statearr_71371_71511 = state_71364__$1;
(statearr_71371_71511[(2)] = inst_71360);

(statearr_71371_71511[(1)] = (3));


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
});})(__71493,c__27930__auto___71505,G__71324_71494,n__25666__auto___71492,jobs,results,process,async))
;
return ((function (__71493,switch__27865__auto__,c__27930__auto___71505,G__71324_71494,n__25666__auto___71492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_71375 = [null,null,null,null,null,null,null];
(statearr_71375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_71375[(1)] = (1));

return statearr_71375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_71364){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71376){if((e71376 instanceof Object)){
var ex__27869__auto__ = e71376;
var statearr_71377_71512 = state_71364;
(statearr_71377_71512[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71513 = state_71364;
state_71364 = G__71513;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_71364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_71364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(__71493,switch__27865__auto__,c__27930__auto___71505,G__71324_71494,n__25666__auto___71492,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_71378 = f__27931__auto__.call(null);
(statearr_71378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___71505);

return statearr_71378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(__71493,c__27930__auto___71505,G__71324_71494,n__25666__auto___71492,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__71514 = (__71493 + (1));
__71493 = G__71514;
continue;
} else {
}
break;
}

var c__27930__auto___71515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___71515,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___71515,jobs,results,process,async){
return (function (state_71400){
var state_val_71401 = (state_71400[(1)]);
if((state_val_71401 === (1))){
var state_71400__$1 = state_71400;
var statearr_71402_71516 = state_71400__$1;
(statearr_71402_71516[(2)] = null);

(statearr_71402_71516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71401 === (2))){
var state_71400__$1 = state_71400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71400__$1,(4),from);
} else {
if((state_val_71401 === (3))){
var inst_71398 = (state_71400[(2)]);
var state_71400__$1 = state_71400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71400__$1,inst_71398);
} else {
if((state_val_71401 === (4))){
var inst_71381 = (state_71400[(7)]);
var inst_71381__$1 = (state_71400[(2)]);
var inst_71382 = (inst_71381__$1 == null);
var state_71400__$1 = (function (){var statearr_71403 = state_71400;
(statearr_71403[(7)] = inst_71381__$1);

return statearr_71403;
})();
if(cljs.core.truth_(inst_71382)){
var statearr_71404_71517 = state_71400__$1;
(statearr_71404_71517[(1)] = (5));

} else {
var statearr_71405_71518 = state_71400__$1;
(statearr_71405_71518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71401 === (5))){
var inst_71384 = cljs.core.async.close_BANG_.call(null,jobs);
var state_71400__$1 = state_71400;
var statearr_71406_71519 = state_71400__$1;
(statearr_71406_71519[(2)] = inst_71384);

(statearr_71406_71519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71401 === (6))){
var inst_71386 = (state_71400[(8)]);
var inst_71381 = (state_71400[(7)]);
var inst_71386__$1 = cljs.core.async.chan.call(null,(1));
var inst_71387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71388 = [inst_71381,inst_71386__$1];
var inst_71389 = (new cljs.core.PersistentVector(null,2,(5),inst_71387,inst_71388,null));
var state_71400__$1 = (function (){var statearr_71407 = state_71400;
(statearr_71407[(8)] = inst_71386__$1);

return statearr_71407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71400__$1,(8),jobs,inst_71389);
} else {
if((state_val_71401 === (7))){
var inst_71396 = (state_71400[(2)]);
var state_71400__$1 = state_71400;
var statearr_71408_71520 = state_71400__$1;
(statearr_71408_71520[(2)] = inst_71396);

(statearr_71408_71520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71401 === (8))){
var inst_71386 = (state_71400[(8)]);
var inst_71391 = (state_71400[(2)]);
var state_71400__$1 = (function (){var statearr_71409 = state_71400;
(statearr_71409[(9)] = inst_71391);

return statearr_71409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71400__$1,(9),results,inst_71386);
} else {
if((state_val_71401 === (9))){
var inst_71393 = (state_71400[(2)]);
var state_71400__$1 = (function (){var statearr_71410 = state_71400;
(statearr_71410[(10)] = inst_71393);

return statearr_71410;
})();
var statearr_71411_71521 = state_71400__$1;
(statearr_71411_71521[(2)] = null);

(statearr_71411_71521[(1)] = (2));


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
});})(c__27930__auto___71515,jobs,results,process,async))
;
return ((function (switch__27865__auto__,c__27930__auto___71515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0 = (function (){
var statearr_71415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71415[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_71415[(1)] = (1));

return statearr_71415;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_71400){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71416){if((e71416 instanceof Object)){
var ex__27869__auto__ = e71416;
var statearr_71417_71522 = state_71400;
(statearr_71417_71522[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71523 = state_71400;
state_71400 = G__71523;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_71400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_71400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___71515,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_71418 = f__27931__auto__.call(null);
(statearr_71418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___71515);

return statearr_71418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___71515,jobs,results,process,async))
);


var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__,jobs,results,process,async){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__,jobs,results,process,async){
return (function (state_71456){
var state_val_71457 = (state_71456[(1)]);
if((state_val_71457 === (7))){
var inst_71452 = (state_71456[(2)]);
var state_71456__$1 = state_71456;
var statearr_71458_71524 = state_71456__$1;
(statearr_71458_71524[(2)] = inst_71452);

(statearr_71458_71524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (20))){
var state_71456__$1 = state_71456;
var statearr_71459_71525 = state_71456__$1;
(statearr_71459_71525[(2)] = null);

(statearr_71459_71525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (1))){
var state_71456__$1 = state_71456;
var statearr_71460_71526 = state_71456__$1;
(statearr_71460_71526[(2)] = null);

(statearr_71460_71526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (4))){
var inst_71421 = (state_71456[(7)]);
var inst_71421__$1 = (state_71456[(2)]);
var inst_71422 = (inst_71421__$1 == null);
var state_71456__$1 = (function (){var statearr_71461 = state_71456;
(statearr_71461[(7)] = inst_71421__$1);

return statearr_71461;
})();
if(cljs.core.truth_(inst_71422)){
var statearr_71462_71527 = state_71456__$1;
(statearr_71462_71527[(1)] = (5));

} else {
var statearr_71463_71528 = state_71456__$1;
(statearr_71463_71528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (15))){
var inst_71434 = (state_71456[(8)]);
var state_71456__$1 = state_71456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71456__$1,(18),to,inst_71434);
} else {
if((state_val_71457 === (21))){
var inst_71447 = (state_71456[(2)]);
var state_71456__$1 = state_71456;
var statearr_71464_71529 = state_71456__$1;
(statearr_71464_71529[(2)] = inst_71447);

(statearr_71464_71529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (13))){
var inst_71449 = (state_71456[(2)]);
var state_71456__$1 = (function (){var statearr_71465 = state_71456;
(statearr_71465[(9)] = inst_71449);

return statearr_71465;
})();
var statearr_71466_71530 = state_71456__$1;
(statearr_71466_71530[(2)] = null);

(statearr_71466_71530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (6))){
var inst_71421 = (state_71456[(7)]);
var state_71456__$1 = state_71456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71456__$1,(11),inst_71421);
} else {
if((state_val_71457 === (17))){
var inst_71442 = (state_71456[(2)]);
var state_71456__$1 = state_71456;
if(cljs.core.truth_(inst_71442)){
var statearr_71467_71531 = state_71456__$1;
(statearr_71467_71531[(1)] = (19));

} else {
var statearr_71468_71532 = state_71456__$1;
(statearr_71468_71532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (3))){
var inst_71454 = (state_71456[(2)]);
var state_71456__$1 = state_71456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71456__$1,inst_71454);
} else {
if((state_val_71457 === (12))){
var inst_71431 = (state_71456[(10)]);
var state_71456__$1 = state_71456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71456__$1,(14),inst_71431);
} else {
if((state_val_71457 === (2))){
var state_71456__$1 = state_71456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71456__$1,(4),results);
} else {
if((state_val_71457 === (19))){
var state_71456__$1 = state_71456;
var statearr_71469_71533 = state_71456__$1;
(statearr_71469_71533[(2)] = null);

(statearr_71469_71533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (11))){
var inst_71431 = (state_71456[(2)]);
var state_71456__$1 = (function (){var statearr_71470 = state_71456;
(statearr_71470[(10)] = inst_71431);

return statearr_71470;
})();
var statearr_71471_71534 = state_71456__$1;
(statearr_71471_71534[(2)] = null);

(statearr_71471_71534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (9))){
var state_71456__$1 = state_71456;
var statearr_71472_71535 = state_71456__$1;
(statearr_71472_71535[(2)] = null);

(statearr_71472_71535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (5))){
var state_71456__$1 = state_71456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71473_71536 = state_71456__$1;
(statearr_71473_71536[(1)] = (8));

} else {
var statearr_71474_71537 = state_71456__$1;
(statearr_71474_71537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (14))){
var inst_71436 = (state_71456[(11)]);
var inst_71434 = (state_71456[(8)]);
var inst_71434__$1 = (state_71456[(2)]);
var inst_71435 = (inst_71434__$1 == null);
var inst_71436__$1 = cljs.core.not.call(null,inst_71435);
var state_71456__$1 = (function (){var statearr_71475 = state_71456;
(statearr_71475[(11)] = inst_71436__$1);

(statearr_71475[(8)] = inst_71434__$1);

return statearr_71475;
})();
if(inst_71436__$1){
var statearr_71476_71538 = state_71456__$1;
(statearr_71476_71538[(1)] = (15));

} else {
var statearr_71477_71539 = state_71456__$1;
(statearr_71477_71539[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (16))){
var inst_71436 = (state_71456[(11)]);
var state_71456__$1 = state_71456;
var statearr_71478_71540 = state_71456__$1;
(statearr_71478_71540[(2)] = inst_71436);

(statearr_71478_71540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (10))){
var inst_71428 = (state_71456[(2)]);
var state_71456__$1 = state_71456;
var statearr_71479_71541 = state_71456__$1;
(statearr_71479_71541[(2)] = inst_71428);

(statearr_71479_71541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (18))){
var inst_71439 = (state_71456[(2)]);
var state_71456__$1 = state_71456;
var statearr_71480_71542 = state_71456__$1;
(statearr_71480_71542[(2)] = inst_71439);

(statearr_71480_71542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71457 === (8))){
var inst_71425 = cljs.core.async.close_BANG_.call(null,to);
var state_71456__$1 = state_71456;
var statearr_71481_71543 = state_71456__$1;
(statearr_71481_71543[(2)] = inst_71425);

(statearr_71481_71543[(1)] = (10));


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
var statearr_71485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__);

(statearr_71485[(1)] = (1));

return statearr_71485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1 = (function (state_71456){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71486){if((e71486 instanceof Object)){
var ex__27869__auto__ = e71486;
var statearr_71487_71544 = state_71456;
(statearr_71487_71544[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71545 = state_71456;
state_71456 = G__71545;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__ = function(state_71456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1.call(this,state_71456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,jobs,results,process,async))
})();
var state__27932__auto__ = (function (){var statearr_71488 = f__27931__auto__.call(null);
(statearr_71488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_71488;
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
var args71546 = [];
var len__25826__auto___71549 = arguments.length;
var i__25827__auto___71550 = (0);
while(true){
if((i__25827__auto___71550 < len__25826__auto___71549)){
args71546.push((arguments[i__25827__auto___71550]));

var G__71551 = (i__25827__auto___71550 + (1));
i__25827__auto___71550 = G__71551;
continue;
} else {
}
break;
}

var G__71548 = args71546.length;
switch (G__71548) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71546.length)].join('')));

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
var args71553 = [];
var len__25826__auto___71556 = arguments.length;
var i__25827__auto___71557 = (0);
while(true){
if((i__25827__auto___71557 < len__25826__auto___71556)){
args71553.push((arguments[i__25827__auto___71557]));

var G__71558 = (i__25827__auto___71557 + (1));
i__25827__auto___71557 = G__71558;
continue;
} else {
}
break;
}

var G__71555 = args71553.length;
switch (G__71555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71553.length)].join('')));

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
var args71560 = [];
var len__25826__auto___71613 = arguments.length;
var i__25827__auto___71614 = (0);
while(true){
if((i__25827__auto___71614 < len__25826__auto___71613)){
args71560.push((arguments[i__25827__auto___71614]));

var G__71615 = (i__25827__auto___71614 + (1));
i__25827__auto___71614 = G__71615;
continue;
} else {
}
break;
}

var G__71562 = args71560.length;
switch (G__71562) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71560.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27930__auto___71617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___71617,tc,fc){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___71617,tc,fc){
return (function (state_71588){
var state_val_71589 = (state_71588[(1)]);
if((state_val_71589 === (7))){
var inst_71584 = (state_71588[(2)]);
var state_71588__$1 = state_71588;
var statearr_71590_71618 = state_71588__$1;
(statearr_71590_71618[(2)] = inst_71584);

(statearr_71590_71618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (1))){
var state_71588__$1 = state_71588;
var statearr_71591_71619 = state_71588__$1;
(statearr_71591_71619[(2)] = null);

(statearr_71591_71619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (4))){
var inst_71565 = (state_71588[(7)]);
var inst_71565__$1 = (state_71588[(2)]);
var inst_71566 = (inst_71565__$1 == null);
var state_71588__$1 = (function (){var statearr_71592 = state_71588;
(statearr_71592[(7)] = inst_71565__$1);

return statearr_71592;
})();
if(cljs.core.truth_(inst_71566)){
var statearr_71593_71620 = state_71588__$1;
(statearr_71593_71620[(1)] = (5));

} else {
var statearr_71594_71621 = state_71588__$1;
(statearr_71594_71621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (13))){
var state_71588__$1 = state_71588;
var statearr_71595_71622 = state_71588__$1;
(statearr_71595_71622[(2)] = null);

(statearr_71595_71622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (6))){
var inst_71565 = (state_71588[(7)]);
var inst_71571 = p.call(null,inst_71565);
var state_71588__$1 = state_71588;
if(cljs.core.truth_(inst_71571)){
var statearr_71596_71623 = state_71588__$1;
(statearr_71596_71623[(1)] = (9));

} else {
var statearr_71597_71624 = state_71588__$1;
(statearr_71597_71624[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (3))){
var inst_71586 = (state_71588[(2)]);
var state_71588__$1 = state_71588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71588__$1,inst_71586);
} else {
if((state_val_71589 === (12))){
var state_71588__$1 = state_71588;
var statearr_71598_71625 = state_71588__$1;
(statearr_71598_71625[(2)] = null);

(statearr_71598_71625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (2))){
var state_71588__$1 = state_71588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71588__$1,(4),ch);
} else {
if((state_val_71589 === (11))){
var inst_71565 = (state_71588[(7)]);
var inst_71575 = (state_71588[(2)]);
var state_71588__$1 = state_71588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71588__$1,(8),inst_71575,inst_71565);
} else {
if((state_val_71589 === (9))){
var state_71588__$1 = state_71588;
var statearr_71599_71626 = state_71588__$1;
(statearr_71599_71626[(2)] = tc);

(statearr_71599_71626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (5))){
var inst_71568 = cljs.core.async.close_BANG_.call(null,tc);
var inst_71569 = cljs.core.async.close_BANG_.call(null,fc);
var state_71588__$1 = (function (){var statearr_71600 = state_71588;
(statearr_71600[(8)] = inst_71568);

return statearr_71600;
})();
var statearr_71601_71627 = state_71588__$1;
(statearr_71601_71627[(2)] = inst_71569);

(statearr_71601_71627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (14))){
var inst_71582 = (state_71588[(2)]);
var state_71588__$1 = state_71588;
var statearr_71602_71628 = state_71588__$1;
(statearr_71602_71628[(2)] = inst_71582);

(statearr_71602_71628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (10))){
var state_71588__$1 = state_71588;
var statearr_71603_71629 = state_71588__$1;
(statearr_71603_71629[(2)] = fc);

(statearr_71603_71629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71589 === (8))){
var inst_71577 = (state_71588[(2)]);
var state_71588__$1 = state_71588;
if(cljs.core.truth_(inst_71577)){
var statearr_71604_71630 = state_71588__$1;
(statearr_71604_71630[(1)] = (12));

} else {
var statearr_71605_71631 = state_71588__$1;
(statearr_71605_71631[(1)] = (13));

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
});})(c__27930__auto___71617,tc,fc))
;
return ((function (switch__27865__auto__,c__27930__auto___71617,tc,fc){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_71609 = [null,null,null,null,null,null,null,null,null];
(statearr_71609[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_71609[(1)] = (1));

return statearr_71609;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_71588){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71610){if((e71610 instanceof Object)){
var ex__27869__auto__ = e71610;
var statearr_71611_71632 = state_71588;
(statearr_71611_71632[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71633 = state_71588;
state_71588 = G__71633;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_71588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_71588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___71617,tc,fc))
})();
var state__27932__auto__ = (function (){var statearr_71612 = f__27931__auto__.call(null);
(statearr_71612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___71617);

return statearr_71612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___71617,tc,fc))
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
return (function (state_71697){
var state_val_71698 = (state_71697[(1)]);
if((state_val_71698 === (7))){
var inst_71693 = (state_71697[(2)]);
var state_71697__$1 = state_71697;
var statearr_71699_71720 = state_71697__$1;
(statearr_71699_71720[(2)] = inst_71693);

(statearr_71699_71720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (1))){
var inst_71677 = init;
var state_71697__$1 = (function (){var statearr_71700 = state_71697;
(statearr_71700[(7)] = inst_71677);

return statearr_71700;
})();
var statearr_71701_71721 = state_71697__$1;
(statearr_71701_71721[(2)] = null);

(statearr_71701_71721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (4))){
var inst_71680 = (state_71697[(8)]);
var inst_71680__$1 = (state_71697[(2)]);
var inst_71681 = (inst_71680__$1 == null);
var state_71697__$1 = (function (){var statearr_71702 = state_71697;
(statearr_71702[(8)] = inst_71680__$1);

return statearr_71702;
})();
if(cljs.core.truth_(inst_71681)){
var statearr_71703_71722 = state_71697__$1;
(statearr_71703_71722[(1)] = (5));

} else {
var statearr_71704_71723 = state_71697__$1;
(statearr_71704_71723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (6))){
var inst_71684 = (state_71697[(9)]);
var inst_71680 = (state_71697[(8)]);
var inst_71677 = (state_71697[(7)]);
var inst_71684__$1 = f.call(null,inst_71677,inst_71680);
var inst_71685 = cljs.core.reduced_QMARK_.call(null,inst_71684__$1);
var state_71697__$1 = (function (){var statearr_71705 = state_71697;
(statearr_71705[(9)] = inst_71684__$1);

return statearr_71705;
})();
if(inst_71685){
var statearr_71706_71724 = state_71697__$1;
(statearr_71706_71724[(1)] = (8));

} else {
var statearr_71707_71725 = state_71697__$1;
(statearr_71707_71725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (3))){
var inst_71695 = (state_71697[(2)]);
var state_71697__$1 = state_71697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71697__$1,inst_71695);
} else {
if((state_val_71698 === (2))){
var state_71697__$1 = state_71697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71697__$1,(4),ch);
} else {
if((state_val_71698 === (9))){
var inst_71684 = (state_71697[(9)]);
var inst_71677 = inst_71684;
var state_71697__$1 = (function (){var statearr_71708 = state_71697;
(statearr_71708[(7)] = inst_71677);

return statearr_71708;
})();
var statearr_71709_71726 = state_71697__$1;
(statearr_71709_71726[(2)] = null);

(statearr_71709_71726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (5))){
var inst_71677 = (state_71697[(7)]);
var state_71697__$1 = state_71697;
var statearr_71710_71727 = state_71697__$1;
(statearr_71710_71727[(2)] = inst_71677);

(statearr_71710_71727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (10))){
var inst_71691 = (state_71697[(2)]);
var state_71697__$1 = state_71697;
var statearr_71711_71728 = state_71697__$1;
(statearr_71711_71728[(2)] = inst_71691);

(statearr_71711_71728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71698 === (8))){
var inst_71684 = (state_71697[(9)]);
var inst_71687 = cljs.core.deref.call(null,inst_71684);
var state_71697__$1 = state_71697;
var statearr_71712_71729 = state_71697__$1;
(statearr_71712_71729[(2)] = inst_71687);

(statearr_71712_71729[(1)] = (10));


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
var statearr_71716 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71716[(0)] = cljs$core$async$reduce_$_state_machine__27866__auto__);

(statearr_71716[(1)] = (1));

return statearr_71716;
});
var cljs$core$async$reduce_$_state_machine__27866__auto____1 = (function (state_71697){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71717){if((e71717 instanceof Object)){
var ex__27869__auto__ = e71717;
var statearr_71718_71730 = state_71697;
(statearr_71718_71730[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71731 = state_71697;
state_71697 = G__71731;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27866__auto__ = function(state_71697){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27866__auto____1.call(this,state_71697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27866__auto____0;
cljs$core$async$reduce_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27866__auto____1;
return cljs$core$async$reduce_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_71719 = f__27931__auto__.call(null);
(statearr_71719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_71719;
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
var args71732 = [];
var len__25826__auto___71784 = arguments.length;
var i__25827__auto___71785 = (0);
while(true){
if((i__25827__auto___71785 < len__25826__auto___71784)){
args71732.push((arguments[i__25827__auto___71785]));

var G__71786 = (i__25827__auto___71785 + (1));
i__25827__auto___71785 = G__71786;
continue;
} else {
}
break;
}

var G__71734 = args71732.length;
switch (G__71734) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71732.length)].join('')));

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
return (function (state_71759){
var state_val_71760 = (state_71759[(1)]);
if((state_val_71760 === (7))){
var inst_71741 = (state_71759[(2)]);
var state_71759__$1 = state_71759;
var statearr_71761_71788 = state_71759__$1;
(statearr_71761_71788[(2)] = inst_71741);

(statearr_71761_71788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (1))){
var inst_71735 = cljs.core.seq.call(null,coll);
var inst_71736 = inst_71735;
var state_71759__$1 = (function (){var statearr_71762 = state_71759;
(statearr_71762[(7)] = inst_71736);

return statearr_71762;
})();
var statearr_71763_71789 = state_71759__$1;
(statearr_71763_71789[(2)] = null);

(statearr_71763_71789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (4))){
var inst_71736 = (state_71759[(7)]);
var inst_71739 = cljs.core.first.call(null,inst_71736);
var state_71759__$1 = state_71759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71759__$1,(7),ch,inst_71739);
} else {
if((state_val_71760 === (13))){
var inst_71753 = (state_71759[(2)]);
var state_71759__$1 = state_71759;
var statearr_71764_71790 = state_71759__$1;
(statearr_71764_71790[(2)] = inst_71753);

(statearr_71764_71790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (6))){
var inst_71744 = (state_71759[(2)]);
var state_71759__$1 = state_71759;
if(cljs.core.truth_(inst_71744)){
var statearr_71765_71791 = state_71759__$1;
(statearr_71765_71791[(1)] = (8));

} else {
var statearr_71766_71792 = state_71759__$1;
(statearr_71766_71792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (3))){
var inst_71757 = (state_71759[(2)]);
var state_71759__$1 = state_71759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71759__$1,inst_71757);
} else {
if((state_val_71760 === (12))){
var state_71759__$1 = state_71759;
var statearr_71767_71793 = state_71759__$1;
(statearr_71767_71793[(2)] = null);

(statearr_71767_71793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (2))){
var inst_71736 = (state_71759[(7)]);
var state_71759__$1 = state_71759;
if(cljs.core.truth_(inst_71736)){
var statearr_71768_71794 = state_71759__$1;
(statearr_71768_71794[(1)] = (4));

} else {
var statearr_71769_71795 = state_71759__$1;
(statearr_71769_71795[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (11))){
var inst_71750 = cljs.core.async.close_BANG_.call(null,ch);
var state_71759__$1 = state_71759;
var statearr_71770_71796 = state_71759__$1;
(statearr_71770_71796[(2)] = inst_71750);

(statearr_71770_71796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (9))){
var state_71759__$1 = state_71759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71771_71797 = state_71759__$1;
(statearr_71771_71797[(1)] = (11));

} else {
var statearr_71772_71798 = state_71759__$1;
(statearr_71772_71798[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (5))){
var inst_71736 = (state_71759[(7)]);
var state_71759__$1 = state_71759;
var statearr_71773_71799 = state_71759__$1;
(statearr_71773_71799[(2)] = inst_71736);

(statearr_71773_71799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (10))){
var inst_71755 = (state_71759[(2)]);
var state_71759__$1 = state_71759;
var statearr_71774_71800 = state_71759__$1;
(statearr_71774_71800[(2)] = inst_71755);

(statearr_71774_71800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71760 === (8))){
var inst_71736 = (state_71759[(7)]);
var inst_71746 = cljs.core.next.call(null,inst_71736);
var inst_71736__$1 = inst_71746;
var state_71759__$1 = (function (){var statearr_71775 = state_71759;
(statearr_71775[(7)] = inst_71736__$1);

return statearr_71775;
})();
var statearr_71776_71801 = state_71759__$1;
(statearr_71776_71801[(2)] = null);

(statearr_71776_71801[(1)] = (2));


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
var statearr_71780 = [null,null,null,null,null,null,null,null];
(statearr_71780[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_71780[(1)] = (1));

return statearr_71780;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_71759){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_71759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e71781){if((e71781 instanceof Object)){
var ex__27869__auto__ = e71781;
var statearr_71782_71802 = state_71759;
(statearr_71782_71802[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71803 = state_71759;
state_71759 = G__71803;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_71759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_71759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_71783 = f__27931__auto__.call(null);
(statearr_71783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_71783;
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
if(typeof cljs.core.async.t_cljs$core$async72029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72029 = (function (mult,ch,cs,meta72030){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta72030 = meta72030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_72031,meta72030__$1){
var self__ = this;
var _72031__$1 = this;
return (new cljs.core.async.t_cljs$core$async72029(self__.mult,self__.ch,self__.cs,meta72030__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_72031){
var self__ = this;
var _72031__$1 = this;
return self__.meta72030;
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta72030","meta72030",-333639584,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async72029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async72029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72029";

cljs.core.async.t_cljs$core$async72029.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async72029");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async72029 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async72029(mult__$1,ch__$1,cs__$1,meta72030){
return (new cljs.core.async.t_cljs$core$async72029(mult__$1,ch__$1,cs__$1,meta72030));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async72029(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27930__auto___72254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___72254,cs,m,dchan,dctr,done){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___72254,cs,m,dchan,dctr,done){
return (function (state_72166){
var state_val_72167 = (state_72166[(1)]);
if((state_val_72167 === (7))){
var inst_72162 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72168_72255 = state_72166__$1;
(statearr_72168_72255[(2)] = inst_72162);

(statearr_72168_72255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (20))){
var inst_72065 = (state_72166[(7)]);
var inst_72077 = cljs.core.first.call(null,inst_72065);
var inst_72078 = cljs.core.nth.call(null,inst_72077,(0),null);
var inst_72079 = cljs.core.nth.call(null,inst_72077,(1),null);
var state_72166__$1 = (function (){var statearr_72169 = state_72166;
(statearr_72169[(8)] = inst_72078);

return statearr_72169;
})();
if(cljs.core.truth_(inst_72079)){
var statearr_72170_72256 = state_72166__$1;
(statearr_72170_72256[(1)] = (22));

} else {
var statearr_72171_72257 = state_72166__$1;
(statearr_72171_72257[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (27))){
var inst_72114 = (state_72166[(9)]);
var inst_72034 = (state_72166[(10)]);
var inst_72107 = (state_72166[(11)]);
var inst_72109 = (state_72166[(12)]);
var inst_72114__$1 = cljs.core._nth.call(null,inst_72107,inst_72109);
var inst_72115 = cljs.core.async.put_BANG_.call(null,inst_72114__$1,inst_72034,done);
var state_72166__$1 = (function (){var statearr_72172 = state_72166;
(statearr_72172[(9)] = inst_72114__$1);

return statearr_72172;
})();
if(cljs.core.truth_(inst_72115)){
var statearr_72173_72258 = state_72166__$1;
(statearr_72173_72258[(1)] = (30));

} else {
var statearr_72174_72259 = state_72166__$1;
(statearr_72174_72259[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (1))){
var state_72166__$1 = state_72166;
var statearr_72175_72260 = state_72166__$1;
(statearr_72175_72260[(2)] = null);

(statearr_72175_72260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (24))){
var inst_72065 = (state_72166[(7)]);
var inst_72084 = (state_72166[(2)]);
var inst_72085 = cljs.core.next.call(null,inst_72065);
var inst_72043 = inst_72085;
var inst_72044 = null;
var inst_72045 = (0);
var inst_72046 = (0);
var state_72166__$1 = (function (){var statearr_72176 = state_72166;
(statearr_72176[(13)] = inst_72044);

(statearr_72176[(14)] = inst_72043);

(statearr_72176[(15)] = inst_72046);

(statearr_72176[(16)] = inst_72084);

(statearr_72176[(17)] = inst_72045);

return statearr_72176;
})();
var statearr_72177_72261 = state_72166__$1;
(statearr_72177_72261[(2)] = null);

(statearr_72177_72261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (39))){
var state_72166__$1 = state_72166;
var statearr_72181_72262 = state_72166__$1;
(statearr_72181_72262[(2)] = null);

(statearr_72181_72262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (4))){
var inst_72034 = (state_72166[(10)]);
var inst_72034__$1 = (state_72166[(2)]);
var inst_72035 = (inst_72034__$1 == null);
var state_72166__$1 = (function (){var statearr_72182 = state_72166;
(statearr_72182[(10)] = inst_72034__$1);

return statearr_72182;
})();
if(cljs.core.truth_(inst_72035)){
var statearr_72183_72263 = state_72166__$1;
(statearr_72183_72263[(1)] = (5));

} else {
var statearr_72184_72264 = state_72166__$1;
(statearr_72184_72264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (15))){
var inst_72044 = (state_72166[(13)]);
var inst_72043 = (state_72166[(14)]);
var inst_72046 = (state_72166[(15)]);
var inst_72045 = (state_72166[(17)]);
var inst_72061 = (state_72166[(2)]);
var inst_72062 = (inst_72046 + (1));
var tmp72178 = inst_72044;
var tmp72179 = inst_72043;
var tmp72180 = inst_72045;
var inst_72043__$1 = tmp72179;
var inst_72044__$1 = tmp72178;
var inst_72045__$1 = tmp72180;
var inst_72046__$1 = inst_72062;
var state_72166__$1 = (function (){var statearr_72185 = state_72166;
(statearr_72185[(13)] = inst_72044__$1);

(statearr_72185[(14)] = inst_72043__$1);

(statearr_72185[(15)] = inst_72046__$1);

(statearr_72185[(18)] = inst_72061);

(statearr_72185[(17)] = inst_72045__$1);

return statearr_72185;
})();
var statearr_72186_72265 = state_72166__$1;
(statearr_72186_72265[(2)] = null);

(statearr_72186_72265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (21))){
var inst_72088 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72190_72266 = state_72166__$1;
(statearr_72190_72266[(2)] = inst_72088);

(statearr_72190_72266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (31))){
var inst_72114 = (state_72166[(9)]);
var inst_72118 = done.call(null,null);
var inst_72119 = cljs.core.async.untap_STAR_.call(null,m,inst_72114);
var state_72166__$1 = (function (){var statearr_72191 = state_72166;
(statearr_72191[(19)] = inst_72118);

return statearr_72191;
})();
var statearr_72192_72267 = state_72166__$1;
(statearr_72192_72267[(2)] = inst_72119);

(statearr_72192_72267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (32))){
var inst_72108 = (state_72166[(20)]);
var inst_72106 = (state_72166[(21)]);
var inst_72107 = (state_72166[(11)]);
var inst_72109 = (state_72166[(12)]);
var inst_72121 = (state_72166[(2)]);
var inst_72122 = (inst_72109 + (1));
var tmp72187 = inst_72108;
var tmp72188 = inst_72106;
var tmp72189 = inst_72107;
var inst_72106__$1 = tmp72188;
var inst_72107__$1 = tmp72189;
var inst_72108__$1 = tmp72187;
var inst_72109__$1 = inst_72122;
var state_72166__$1 = (function (){var statearr_72193 = state_72166;
(statearr_72193[(20)] = inst_72108__$1);

(statearr_72193[(21)] = inst_72106__$1);

(statearr_72193[(22)] = inst_72121);

(statearr_72193[(11)] = inst_72107__$1);

(statearr_72193[(12)] = inst_72109__$1);

return statearr_72193;
})();
var statearr_72194_72268 = state_72166__$1;
(statearr_72194_72268[(2)] = null);

(statearr_72194_72268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (40))){
var inst_72134 = (state_72166[(23)]);
var inst_72138 = done.call(null,null);
var inst_72139 = cljs.core.async.untap_STAR_.call(null,m,inst_72134);
var state_72166__$1 = (function (){var statearr_72195 = state_72166;
(statearr_72195[(24)] = inst_72138);

return statearr_72195;
})();
var statearr_72196_72269 = state_72166__$1;
(statearr_72196_72269[(2)] = inst_72139);

(statearr_72196_72269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (33))){
var inst_72125 = (state_72166[(25)]);
var inst_72127 = cljs.core.chunked_seq_QMARK_.call(null,inst_72125);
var state_72166__$1 = state_72166;
if(inst_72127){
var statearr_72197_72270 = state_72166__$1;
(statearr_72197_72270[(1)] = (36));

} else {
var statearr_72198_72271 = state_72166__$1;
(statearr_72198_72271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (13))){
var inst_72055 = (state_72166[(26)]);
var inst_72058 = cljs.core.async.close_BANG_.call(null,inst_72055);
var state_72166__$1 = state_72166;
var statearr_72199_72272 = state_72166__$1;
(statearr_72199_72272[(2)] = inst_72058);

(statearr_72199_72272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (22))){
var inst_72078 = (state_72166[(8)]);
var inst_72081 = cljs.core.async.close_BANG_.call(null,inst_72078);
var state_72166__$1 = state_72166;
var statearr_72200_72273 = state_72166__$1;
(statearr_72200_72273[(2)] = inst_72081);

(statearr_72200_72273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (36))){
var inst_72125 = (state_72166[(25)]);
var inst_72129 = cljs.core.chunk_first.call(null,inst_72125);
var inst_72130 = cljs.core.chunk_rest.call(null,inst_72125);
var inst_72131 = cljs.core.count.call(null,inst_72129);
var inst_72106 = inst_72130;
var inst_72107 = inst_72129;
var inst_72108 = inst_72131;
var inst_72109 = (0);
var state_72166__$1 = (function (){var statearr_72201 = state_72166;
(statearr_72201[(20)] = inst_72108);

(statearr_72201[(21)] = inst_72106);

(statearr_72201[(11)] = inst_72107);

(statearr_72201[(12)] = inst_72109);

return statearr_72201;
})();
var statearr_72202_72274 = state_72166__$1;
(statearr_72202_72274[(2)] = null);

(statearr_72202_72274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (41))){
var inst_72125 = (state_72166[(25)]);
var inst_72141 = (state_72166[(2)]);
var inst_72142 = cljs.core.next.call(null,inst_72125);
var inst_72106 = inst_72142;
var inst_72107 = null;
var inst_72108 = (0);
var inst_72109 = (0);
var state_72166__$1 = (function (){var statearr_72203 = state_72166;
(statearr_72203[(20)] = inst_72108);

(statearr_72203[(21)] = inst_72106);

(statearr_72203[(27)] = inst_72141);

(statearr_72203[(11)] = inst_72107);

(statearr_72203[(12)] = inst_72109);

return statearr_72203;
})();
var statearr_72204_72275 = state_72166__$1;
(statearr_72204_72275[(2)] = null);

(statearr_72204_72275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (43))){
var state_72166__$1 = state_72166;
var statearr_72205_72276 = state_72166__$1;
(statearr_72205_72276[(2)] = null);

(statearr_72205_72276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (29))){
var inst_72150 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72206_72277 = state_72166__$1;
(statearr_72206_72277[(2)] = inst_72150);

(statearr_72206_72277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (44))){
var inst_72159 = (state_72166[(2)]);
var state_72166__$1 = (function (){var statearr_72207 = state_72166;
(statearr_72207[(28)] = inst_72159);

return statearr_72207;
})();
var statearr_72208_72278 = state_72166__$1;
(statearr_72208_72278[(2)] = null);

(statearr_72208_72278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (6))){
var inst_72098 = (state_72166[(29)]);
var inst_72097 = cljs.core.deref.call(null,cs);
var inst_72098__$1 = cljs.core.keys.call(null,inst_72097);
var inst_72099 = cljs.core.count.call(null,inst_72098__$1);
var inst_72100 = cljs.core.reset_BANG_.call(null,dctr,inst_72099);
var inst_72105 = cljs.core.seq.call(null,inst_72098__$1);
var inst_72106 = inst_72105;
var inst_72107 = null;
var inst_72108 = (0);
var inst_72109 = (0);
var state_72166__$1 = (function (){var statearr_72209 = state_72166;
(statearr_72209[(20)] = inst_72108);

(statearr_72209[(21)] = inst_72106);

(statearr_72209[(29)] = inst_72098__$1);

(statearr_72209[(11)] = inst_72107);

(statearr_72209[(12)] = inst_72109);

(statearr_72209[(30)] = inst_72100);

return statearr_72209;
})();
var statearr_72210_72279 = state_72166__$1;
(statearr_72210_72279[(2)] = null);

(statearr_72210_72279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (28))){
var inst_72106 = (state_72166[(21)]);
var inst_72125 = (state_72166[(25)]);
var inst_72125__$1 = cljs.core.seq.call(null,inst_72106);
var state_72166__$1 = (function (){var statearr_72211 = state_72166;
(statearr_72211[(25)] = inst_72125__$1);

return statearr_72211;
})();
if(inst_72125__$1){
var statearr_72212_72280 = state_72166__$1;
(statearr_72212_72280[(1)] = (33));

} else {
var statearr_72213_72281 = state_72166__$1;
(statearr_72213_72281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (25))){
var inst_72108 = (state_72166[(20)]);
var inst_72109 = (state_72166[(12)]);
var inst_72111 = (inst_72109 < inst_72108);
var inst_72112 = inst_72111;
var state_72166__$1 = state_72166;
if(cljs.core.truth_(inst_72112)){
var statearr_72214_72282 = state_72166__$1;
(statearr_72214_72282[(1)] = (27));

} else {
var statearr_72215_72283 = state_72166__$1;
(statearr_72215_72283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (34))){
var state_72166__$1 = state_72166;
var statearr_72216_72284 = state_72166__$1;
(statearr_72216_72284[(2)] = null);

(statearr_72216_72284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (17))){
var state_72166__$1 = state_72166;
var statearr_72217_72285 = state_72166__$1;
(statearr_72217_72285[(2)] = null);

(statearr_72217_72285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (3))){
var inst_72164 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72166__$1,inst_72164);
} else {
if((state_val_72167 === (12))){
var inst_72093 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72218_72286 = state_72166__$1;
(statearr_72218_72286[(2)] = inst_72093);

(statearr_72218_72286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (2))){
var state_72166__$1 = state_72166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72166__$1,(4),ch);
} else {
if((state_val_72167 === (23))){
var state_72166__$1 = state_72166;
var statearr_72219_72287 = state_72166__$1;
(statearr_72219_72287[(2)] = null);

(statearr_72219_72287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (35))){
var inst_72148 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72220_72288 = state_72166__$1;
(statearr_72220_72288[(2)] = inst_72148);

(statearr_72220_72288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (19))){
var inst_72065 = (state_72166[(7)]);
var inst_72069 = cljs.core.chunk_first.call(null,inst_72065);
var inst_72070 = cljs.core.chunk_rest.call(null,inst_72065);
var inst_72071 = cljs.core.count.call(null,inst_72069);
var inst_72043 = inst_72070;
var inst_72044 = inst_72069;
var inst_72045 = inst_72071;
var inst_72046 = (0);
var state_72166__$1 = (function (){var statearr_72221 = state_72166;
(statearr_72221[(13)] = inst_72044);

(statearr_72221[(14)] = inst_72043);

(statearr_72221[(15)] = inst_72046);

(statearr_72221[(17)] = inst_72045);

return statearr_72221;
})();
var statearr_72222_72289 = state_72166__$1;
(statearr_72222_72289[(2)] = null);

(statearr_72222_72289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (11))){
var inst_72043 = (state_72166[(14)]);
var inst_72065 = (state_72166[(7)]);
var inst_72065__$1 = cljs.core.seq.call(null,inst_72043);
var state_72166__$1 = (function (){var statearr_72223 = state_72166;
(statearr_72223[(7)] = inst_72065__$1);

return statearr_72223;
})();
if(inst_72065__$1){
var statearr_72224_72290 = state_72166__$1;
(statearr_72224_72290[(1)] = (16));

} else {
var statearr_72225_72291 = state_72166__$1;
(statearr_72225_72291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (9))){
var inst_72095 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72226_72292 = state_72166__$1;
(statearr_72226_72292[(2)] = inst_72095);

(statearr_72226_72292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (5))){
var inst_72041 = cljs.core.deref.call(null,cs);
var inst_72042 = cljs.core.seq.call(null,inst_72041);
var inst_72043 = inst_72042;
var inst_72044 = null;
var inst_72045 = (0);
var inst_72046 = (0);
var state_72166__$1 = (function (){var statearr_72227 = state_72166;
(statearr_72227[(13)] = inst_72044);

(statearr_72227[(14)] = inst_72043);

(statearr_72227[(15)] = inst_72046);

(statearr_72227[(17)] = inst_72045);

return statearr_72227;
})();
var statearr_72228_72293 = state_72166__$1;
(statearr_72228_72293[(2)] = null);

(statearr_72228_72293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (14))){
var state_72166__$1 = state_72166;
var statearr_72229_72294 = state_72166__$1;
(statearr_72229_72294[(2)] = null);

(statearr_72229_72294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (45))){
var inst_72156 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72230_72295 = state_72166__$1;
(statearr_72230_72295[(2)] = inst_72156);

(statearr_72230_72295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (26))){
var inst_72098 = (state_72166[(29)]);
var inst_72152 = (state_72166[(2)]);
var inst_72153 = cljs.core.seq.call(null,inst_72098);
var state_72166__$1 = (function (){var statearr_72231 = state_72166;
(statearr_72231[(31)] = inst_72152);

return statearr_72231;
})();
if(inst_72153){
var statearr_72232_72296 = state_72166__$1;
(statearr_72232_72296[(1)] = (42));

} else {
var statearr_72233_72297 = state_72166__$1;
(statearr_72233_72297[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (16))){
var inst_72065 = (state_72166[(7)]);
var inst_72067 = cljs.core.chunked_seq_QMARK_.call(null,inst_72065);
var state_72166__$1 = state_72166;
if(inst_72067){
var statearr_72234_72298 = state_72166__$1;
(statearr_72234_72298[(1)] = (19));

} else {
var statearr_72235_72299 = state_72166__$1;
(statearr_72235_72299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (38))){
var inst_72145 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72236_72300 = state_72166__$1;
(statearr_72236_72300[(2)] = inst_72145);

(statearr_72236_72300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (30))){
var state_72166__$1 = state_72166;
var statearr_72237_72301 = state_72166__$1;
(statearr_72237_72301[(2)] = null);

(statearr_72237_72301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (10))){
var inst_72044 = (state_72166[(13)]);
var inst_72046 = (state_72166[(15)]);
var inst_72054 = cljs.core._nth.call(null,inst_72044,inst_72046);
var inst_72055 = cljs.core.nth.call(null,inst_72054,(0),null);
var inst_72056 = cljs.core.nth.call(null,inst_72054,(1),null);
var state_72166__$1 = (function (){var statearr_72238 = state_72166;
(statearr_72238[(26)] = inst_72055);

return statearr_72238;
})();
if(cljs.core.truth_(inst_72056)){
var statearr_72239_72302 = state_72166__$1;
(statearr_72239_72302[(1)] = (13));

} else {
var statearr_72240_72303 = state_72166__$1;
(statearr_72240_72303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (18))){
var inst_72091 = (state_72166[(2)]);
var state_72166__$1 = state_72166;
var statearr_72241_72304 = state_72166__$1;
(statearr_72241_72304[(2)] = inst_72091);

(statearr_72241_72304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (42))){
var state_72166__$1 = state_72166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72166__$1,(45),dchan);
} else {
if((state_val_72167 === (37))){
var inst_72125 = (state_72166[(25)]);
var inst_72034 = (state_72166[(10)]);
var inst_72134 = (state_72166[(23)]);
var inst_72134__$1 = cljs.core.first.call(null,inst_72125);
var inst_72135 = cljs.core.async.put_BANG_.call(null,inst_72134__$1,inst_72034,done);
var state_72166__$1 = (function (){var statearr_72242 = state_72166;
(statearr_72242[(23)] = inst_72134__$1);

return statearr_72242;
})();
if(cljs.core.truth_(inst_72135)){
var statearr_72243_72305 = state_72166__$1;
(statearr_72243_72305[(1)] = (39));

} else {
var statearr_72244_72306 = state_72166__$1;
(statearr_72244_72306[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72167 === (8))){
var inst_72046 = (state_72166[(15)]);
var inst_72045 = (state_72166[(17)]);
var inst_72048 = (inst_72046 < inst_72045);
var inst_72049 = inst_72048;
var state_72166__$1 = state_72166;
if(cljs.core.truth_(inst_72049)){
var statearr_72245_72307 = state_72166__$1;
(statearr_72245_72307[(1)] = (10));

} else {
var statearr_72246_72308 = state_72166__$1;
(statearr_72246_72308[(1)] = (11));

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
});})(c__27930__auto___72254,cs,m,dchan,dctr,done))
;
return ((function (switch__27865__auto__,c__27930__auto___72254,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27866__auto__ = null;
var cljs$core$async$mult_$_state_machine__27866__auto____0 = (function (){
var statearr_72250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72250[(0)] = cljs$core$async$mult_$_state_machine__27866__auto__);

(statearr_72250[(1)] = (1));

return statearr_72250;
});
var cljs$core$async$mult_$_state_machine__27866__auto____1 = (function (state_72166){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_72166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e72251){if((e72251 instanceof Object)){
var ex__27869__auto__ = e72251;
var statearr_72252_72309 = state_72166;
(statearr_72252_72309[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72310 = state_72166;
state_72166 = G__72310;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27866__auto__ = function(state_72166){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27866__auto____1.call(this,state_72166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27866__auto____0;
cljs$core$async$mult_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27866__auto____1;
return cljs$core$async$mult_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___72254,cs,m,dchan,dctr,done))
})();
var state__27932__auto__ = (function (){var statearr_72253 = f__27931__auto__.call(null);
(statearr_72253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___72254);

return statearr_72253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___72254,cs,m,dchan,dctr,done))
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
var args72311 = [];
var len__25826__auto___72314 = arguments.length;
var i__25827__auto___72315 = (0);
while(true){
if((i__25827__auto___72315 < len__25826__auto___72314)){
args72311.push((arguments[i__25827__auto___72315]));

var G__72316 = (i__25827__auto___72315 + (1));
i__25827__auto___72315 = G__72316;
continue;
} else {
}
break;
}

var G__72313 = args72311.length;
switch (G__72313) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72311.length)].join('')));

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
var len__25826__auto___72328 = arguments.length;
var i__25827__auto___72329 = (0);
while(true){
if((i__25827__auto___72329 < len__25826__auto___72328)){
args__25833__auto__.push((arguments[i__25827__auto___72329]));

var G__72330 = (i__25827__auto___72329 + (1));
i__25827__auto___72329 = G__72330;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__72322){
var map__72323 = p__72322;
var map__72323__$1 = ((((!((map__72323 == null)))?((((map__72323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72323):map__72323);
var opts = map__72323__$1;
var statearr_72325_72331 = state;
(statearr_72325_72331[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__72323,map__72323__$1,opts){
return (function (val){
var statearr_72326_72332 = state;
(statearr_72326_72332[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__72323,map__72323__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_72327_72333 = state;
(statearr_72327_72333[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq72318){
var G__72319 = cljs.core.first.call(null,seq72318);
var seq72318__$1 = cljs.core.next.call(null,seq72318);
var G__72320 = cljs.core.first.call(null,seq72318__$1);
var seq72318__$2 = cljs.core.next.call(null,seq72318__$1);
var G__72321 = cljs.core.first.call(null,seq72318__$2);
var seq72318__$3 = cljs.core.next.call(null,seq72318__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__72319,G__72320,G__72321,seq72318__$3);
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
if(typeof cljs.core.async.t_cljs$core$async72499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72499 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta72500){
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
this.meta72500 = meta72500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_72501,meta72500__$1){
var self__ = this;
var _72501__$1 = this;
return (new cljs.core.async.t_cljs$core$async72499(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta72500__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_72501){
var self__ = this;
var _72501__$1 = this;
return self__.meta72500;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async72499.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta72500","meta72500",250231701,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async72499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async72499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72499";

cljs.core.async.t_cljs$core$async72499.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async72499");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async72499 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async72499(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72500){
return (new cljs.core.async.t_cljs$core$async72499(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72500));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async72499(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27930__auto___72664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___72664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___72664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_72601){
var state_val_72602 = (state_72601[(1)]);
if((state_val_72602 === (7))){
var inst_72517 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
var statearr_72603_72665 = state_72601__$1;
(statearr_72603_72665[(2)] = inst_72517);

(statearr_72603_72665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (20))){
var inst_72529 = (state_72601[(7)]);
var state_72601__$1 = state_72601;
var statearr_72604_72666 = state_72601__$1;
(statearr_72604_72666[(2)] = inst_72529);

(statearr_72604_72666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (27))){
var state_72601__$1 = state_72601;
var statearr_72605_72667 = state_72601__$1;
(statearr_72605_72667[(2)] = null);

(statearr_72605_72667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (1))){
var inst_72505 = (state_72601[(8)]);
var inst_72505__$1 = calc_state.call(null);
var inst_72507 = (inst_72505__$1 == null);
var inst_72508 = cljs.core.not.call(null,inst_72507);
var state_72601__$1 = (function (){var statearr_72606 = state_72601;
(statearr_72606[(8)] = inst_72505__$1);

return statearr_72606;
})();
if(inst_72508){
var statearr_72607_72668 = state_72601__$1;
(statearr_72607_72668[(1)] = (2));

} else {
var statearr_72608_72669 = state_72601__$1;
(statearr_72608_72669[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (24))){
var inst_72561 = (state_72601[(9)]);
var inst_72575 = (state_72601[(10)]);
var inst_72552 = (state_72601[(11)]);
var inst_72575__$1 = inst_72552.call(null,inst_72561);
var state_72601__$1 = (function (){var statearr_72609 = state_72601;
(statearr_72609[(10)] = inst_72575__$1);

return statearr_72609;
})();
if(cljs.core.truth_(inst_72575__$1)){
var statearr_72610_72670 = state_72601__$1;
(statearr_72610_72670[(1)] = (29));

} else {
var statearr_72611_72671 = state_72601__$1;
(statearr_72611_72671[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (4))){
var inst_72520 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72520)){
var statearr_72612_72672 = state_72601__$1;
(statearr_72612_72672[(1)] = (8));

} else {
var statearr_72613_72673 = state_72601__$1;
(statearr_72613_72673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (15))){
var inst_72546 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72546)){
var statearr_72614_72674 = state_72601__$1;
(statearr_72614_72674[(1)] = (19));

} else {
var statearr_72615_72675 = state_72601__$1;
(statearr_72615_72675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (21))){
var inst_72551 = (state_72601[(12)]);
var inst_72551__$1 = (state_72601[(2)]);
var inst_72552 = cljs.core.get.call(null,inst_72551__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72553 = cljs.core.get.call(null,inst_72551__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72554 = cljs.core.get.call(null,inst_72551__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_72601__$1 = (function (){var statearr_72616 = state_72601;
(statearr_72616[(13)] = inst_72553);

(statearr_72616[(12)] = inst_72551__$1);

(statearr_72616[(11)] = inst_72552);

return statearr_72616;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_72601__$1,(22),inst_72554);
} else {
if((state_val_72602 === (31))){
var inst_72583 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72583)){
var statearr_72617_72676 = state_72601__$1;
(statearr_72617_72676[(1)] = (32));

} else {
var statearr_72618_72677 = state_72601__$1;
(statearr_72618_72677[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (32))){
var inst_72560 = (state_72601[(14)]);
var state_72601__$1 = state_72601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72601__$1,(35),out,inst_72560);
} else {
if((state_val_72602 === (33))){
var inst_72551 = (state_72601[(12)]);
var inst_72529 = inst_72551;
var state_72601__$1 = (function (){var statearr_72619 = state_72601;
(statearr_72619[(7)] = inst_72529);

return statearr_72619;
})();
var statearr_72620_72678 = state_72601__$1;
(statearr_72620_72678[(2)] = null);

(statearr_72620_72678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (13))){
var inst_72529 = (state_72601[(7)]);
var inst_72536 = inst_72529.cljs$lang$protocol_mask$partition0$;
var inst_72537 = (inst_72536 & (64));
var inst_72538 = inst_72529.cljs$core$ISeq$;
var inst_72539 = (inst_72537) || (inst_72538);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72539)){
var statearr_72621_72679 = state_72601__$1;
(statearr_72621_72679[(1)] = (16));

} else {
var statearr_72622_72680 = state_72601__$1;
(statearr_72622_72680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (22))){
var inst_72561 = (state_72601[(9)]);
var inst_72560 = (state_72601[(14)]);
var inst_72559 = (state_72601[(2)]);
var inst_72560__$1 = cljs.core.nth.call(null,inst_72559,(0),null);
var inst_72561__$1 = cljs.core.nth.call(null,inst_72559,(1),null);
var inst_72562 = (inst_72560__$1 == null);
var inst_72563 = cljs.core._EQ_.call(null,inst_72561__$1,change);
var inst_72564 = (inst_72562) || (inst_72563);
var state_72601__$1 = (function (){var statearr_72623 = state_72601;
(statearr_72623[(9)] = inst_72561__$1);

(statearr_72623[(14)] = inst_72560__$1);

return statearr_72623;
})();
if(cljs.core.truth_(inst_72564)){
var statearr_72624_72681 = state_72601__$1;
(statearr_72624_72681[(1)] = (23));

} else {
var statearr_72625_72682 = state_72601__$1;
(statearr_72625_72682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (36))){
var inst_72551 = (state_72601[(12)]);
var inst_72529 = inst_72551;
var state_72601__$1 = (function (){var statearr_72626 = state_72601;
(statearr_72626[(7)] = inst_72529);

return statearr_72626;
})();
var statearr_72627_72683 = state_72601__$1;
(statearr_72627_72683[(2)] = null);

(statearr_72627_72683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (29))){
var inst_72575 = (state_72601[(10)]);
var state_72601__$1 = state_72601;
var statearr_72628_72684 = state_72601__$1;
(statearr_72628_72684[(2)] = inst_72575);

(statearr_72628_72684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (6))){
var state_72601__$1 = state_72601;
var statearr_72629_72685 = state_72601__$1;
(statearr_72629_72685[(2)] = false);

(statearr_72629_72685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (28))){
var inst_72571 = (state_72601[(2)]);
var inst_72572 = calc_state.call(null);
var inst_72529 = inst_72572;
var state_72601__$1 = (function (){var statearr_72630 = state_72601;
(statearr_72630[(7)] = inst_72529);

(statearr_72630[(15)] = inst_72571);

return statearr_72630;
})();
var statearr_72631_72686 = state_72601__$1;
(statearr_72631_72686[(2)] = null);

(statearr_72631_72686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (25))){
var inst_72597 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
var statearr_72632_72687 = state_72601__$1;
(statearr_72632_72687[(2)] = inst_72597);

(statearr_72632_72687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (34))){
var inst_72595 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
var statearr_72633_72688 = state_72601__$1;
(statearr_72633_72688[(2)] = inst_72595);

(statearr_72633_72688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (17))){
var state_72601__$1 = state_72601;
var statearr_72634_72689 = state_72601__$1;
(statearr_72634_72689[(2)] = false);

(statearr_72634_72689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (3))){
var state_72601__$1 = state_72601;
var statearr_72635_72690 = state_72601__$1;
(statearr_72635_72690[(2)] = false);

(statearr_72635_72690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (12))){
var inst_72599 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72601__$1,inst_72599);
} else {
if((state_val_72602 === (2))){
var inst_72505 = (state_72601[(8)]);
var inst_72510 = inst_72505.cljs$lang$protocol_mask$partition0$;
var inst_72511 = (inst_72510 & (64));
var inst_72512 = inst_72505.cljs$core$ISeq$;
var inst_72513 = (inst_72511) || (inst_72512);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72513)){
var statearr_72636_72691 = state_72601__$1;
(statearr_72636_72691[(1)] = (5));

} else {
var statearr_72637_72692 = state_72601__$1;
(statearr_72637_72692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (23))){
var inst_72560 = (state_72601[(14)]);
var inst_72566 = (inst_72560 == null);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72566)){
var statearr_72638_72693 = state_72601__$1;
(statearr_72638_72693[(1)] = (26));

} else {
var statearr_72639_72694 = state_72601__$1;
(statearr_72639_72694[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (35))){
var inst_72586 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
if(cljs.core.truth_(inst_72586)){
var statearr_72640_72695 = state_72601__$1;
(statearr_72640_72695[(1)] = (36));

} else {
var statearr_72641_72696 = state_72601__$1;
(statearr_72641_72696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (19))){
var inst_72529 = (state_72601[(7)]);
var inst_72548 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72529);
var state_72601__$1 = state_72601;
var statearr_72642_72697 = state_72601__$1;
(statearr_72642_72697[(2)] = inst_72548);

(statearr_72642_72697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (11))){
var inst_72529 = (state_72601[(7)]);
var inst_72533 = (inst_72529 == null);
var inst_72534 = cljs.core.not.call(null,inst_72533);
var state_72601__$1 = state_72601;
if(inst_72534){
var statearr_72643_72698 = state_72601__$1;
(statearr_72643_72698[(1)] = (13));

} else {
var statearr_72644_72699 = state_72601__$1;
(statearr_72644_72699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (9))){
var inst_72505 = (state_72601[(8)]);
var state_72601__$1 = state_72601;
var statearr_72645_72700 = state_72601__$1;
(statearr_72645_72700[(2)] = inst_72505);

(statearr_72645_72700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (5))){
var state_72601__$1 = state_72601;
var statearr_72646_72701 = state_72601__$1;
(statearr_72646_72701[(2)] = true);

(statearr_72646_72701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (14))){
var state_72601__$1 = state_72601;
var statearr_72647_72702 = state_72601__$1;
(statearr_72647_72702[(2)] = false);

(statearr_72647_72702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (26))){
var inst_72561 = (state_72601[(9)]);
var inst_72568 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_72561);
var state_72601__$1 = state_72601;
var statearr_72648_72703 = state_72601__$1;
(statearr_72648_72703[(2)] = inst_72568);

(statearr_72648_72703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (16))){
var state_72601__$1 = state_72601;
var statearr_72649_72704 = state_72601__$1;
(statearr_72649_72704[(2)] = true);

(statearr_72649_72704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (38))){
var inst_72591 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
var statearr_72650_72705 = state_72601__$1;
(statearr_72650_72705[(2)] = inst_72591);

(statearr_72650_72705[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (30))){
var inst_72561 = (state_72601[(9)]);
var inst_72553 = (state_72601[(13)]);
var inst_72552 = (state_72601[(11)]);
var inst_72578 = cljs.core.empty_QMARK_.call(null,inst_72552);
var inst_72579 = inst_72553.call(null,inst_72561);
var inst_72580 = cljs.core.not.call(null,inst_72579);
var inst_72581 = (inst_72578) && (inst_72580);
var state_72601__$1 = state_72601;
var statearr_72651_72706 = state_72601__$1;
(statearr_72651_72706[(2)] = inst_72581);

(statearr_72651_72706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (10))){
var inst_72505 = (state_72601[(8)]);
var inst_72525 = (state_72601[(2)]);
var inst_72526 = cljs.core.get.call(null,inst_72525,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72527 = cljs.core.get.call(null,inst_72525,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72528 = cljs.core.get.call(null,inst_72525,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_72529 = inst_72505;
var state_72601__$1 = (function (){var statearr_72652 = state_72601;
(statearr_72652[(16)] = inst_72527);

(statearr_72652[(17)] = inst_72528);

(statearr_72652[(7)] = inst_72529);

(statearr_72652[(18)] = inst_72526);

return statearr_72652;
})();
var statearr_72653_72707 = state_72601__$1;
(statearr_72653_72707[(2)] = null);

(statearr_72653_72707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (18))){
var inst_72543 = (state_72601[(2)]);
var state_72601__$1 = state_72601;
var statearr_72654_72708 = state_72601__$1;
(statearr_72654_72708[(2)] = inst_72543);

(statearr_72654_72708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (37))){
var state_72601__$1 = state_72601;
var statearr_72655_72709 = state_72601__$1;
(statearr_72655_72709[(2)] = null);

(statearr_72655_72709[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72602 === (8))){
var inst_72505 = (state_72601[(8)]);
var inst_72522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_72505);
var state_72601__$1 = state_72601;
var statearr_72656_72710 = state_72601__$1;
(statearr_72656_72710[(2)] = inst_72522);

(statearr_72656_72710[(1)] = (10));


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
});})(c__27930__auto___72664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27865__auto__,c__27930__auto___72664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27866__auto__ = null;
var cljs$core$async$mix_$_state_machine__27866__auto____0 = (function (){
var statearr_72660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72660[(0)] = cljs$core$async$mix_$_state_machine__27866__auto__);

(statearr_72660[(1)] = (1));

return statearr_72660;
});
var cljs$core$async$mix_$_state_machine__27866__auto____1 = (function (state_72601){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_72601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e72661){if((e72661 instanceof Object)){
var ex__27869__auto__ = e72661;
var statearr_72662_72711 = state_72601;
(statearr_72662_72711[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72712 = state_72601;
state_72601 = G__72712;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27866__auto__ = function(state_72601){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27866__auto____1.call(this,state_72601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27866__auto____0;
cljs$core$async$mix_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27866__auto____1;
return cljs$core$async$mix_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___72664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27932__auto__ = (function (){var statearr_72663 = f__27931__auto__.call(null);
(statearr_72663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___72664);

return statearr_72663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___72664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args72713 = [];
var len__25826__auto___72716 = arguments.length;
var i__25827__auto___72717 = (0);
while(true){
if((i__25827__auto___72717 < len__25826__auto___72716)){
args72713.push((arguments[i__25827__auto___72717]));

var G__72718 = (i__25827__auto___72717 + (1));
i__25827__auto___72717 = G__72718;
continue;
} else {
}
break;
}

var G__72715 = args72713.length;
switch (G__72715) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72713.length)].join('')));

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
var args72721 = [];
var len__25826__auto___72846 = arguments.length;
var i__25827__auto___72847 = (0);
while(true){
if((i__25827__auto___72847 < len__25826__auto___72846)){
args72721.push((arguments[i__25827__auto___72847]));

var G__72848 = (i__25827__auto___72847 + (1));
i__25827__auto___72847 = G__72848;
continue;
} else {
}
break;
}

var G__72723 = args72721.length;
switch (G__72723) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72721.length)].join('')));

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
return (function (p1__72720_SHARP_){
if(cljs.core.truth_(p1__72720_SHARP_.call(null,topic))){
return p1__72720_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__72720_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async72724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72724 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta72725){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta72725 = meta72725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_72726,meta72725__$1){
var self__ = this;
var _72726__$1 = this;
return (new cljs.core.async.t_cljs$core$async72724(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta72725__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_72726){
var self__ = this;
var _72726__$1 = this;
return self__.meta72725;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta72725","meta72725",-1406297926,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async72724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async72724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72724";

cljs.core.async.t_cljs$core$async72724.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async72724");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async72724 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async72724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72725){
return (new cljs.core.async.t_cljs$core$async72724(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72725));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async72724(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27930__auto___72850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___72850,mults,ensure_mult,p){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___72850,mults,ensure_mult,p){
return (function (state_72798){
var state_val_72799 = (state_72798[(1)]);
if((state_val_72799 === (7))){
var inst_72794 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
var statearr_72800_72851 = state_72798__$1;
(statearr_72800_72851[(2)] = inst_72794);

(statearr_72800_72851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (20))){
var state_72798__$1 = state_72798;
var statearr_72801_72852 = state_72798__$1;
(statearr_72801_72852[(2)] = null);

(statearr_72801_72852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (1))){
var state_72798__$1 = state_72798;
var statearr_72802_72853 = state_72798__$1;
(statearr_72802_72853[(2)] = null);

(statearr_72802_72853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (24))){
var inst_72777 = (state_72798[(7)]);
var inst_72786 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_72777);
var state_72798__$1 = state_72798;
var statearr_72803_72854 = state_72798__$1;
(statearr_72803_72854[(2)] = inst_72786);

(statearr_72803_72854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (4))){
var inst_72729 = (state_72798[(8)]);
var inst_72729__$1 = (state_72798[(2)]);
var inst_72730 = (inst_72729__$1 == null);
var state_72798__$1 = (function (){var statearr_72804 = state_72798;
(statearr_72804[(8)] = inst_72729__$1);

return statearr_72804;
})();
if(cljs.core.truth_(inst_72730)){
var statearr_72805_72855 = state_72798__$1;
(statearr_72805_72855[(1)] = (5));

} else {
var statearr_72806_72856 = state_72798__$1;
(statearr_72806_72856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (15))){
var inst_72771 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
var statearr_72807_72857 = state_72798__$1;
(statearr_72807_72857[(2)] = inst_72771);

(statearr_72807_72857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (21))){
var inst_72791 = (state_72798[(2)]);
var state_72798__$1 = (function (){var statearr_72808 = state_72798;
(statearr_72808[(9)] = inst_72791);

return statearr_72808;
})();
var statearr_72809_72858 = state_72798__$1;
(statearr_72809_72858[(2)] = null);

(statearr_72809_72858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (13))){
var inst_72753 = (state_72798[(10)]);
var inst_72755 = cljs.core.chunked_seq_QMARK_.call(null,inst_72753);
var state_72798__$1 = state_72798;
if(inst_72755){
var statearr_72810_72859 = state_72798__$1;
(statearr_72810_72859[(1)] = (16));

} else {
var statearr_72811_72860 = state_72798__$1;
(statearr_72811_72860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (22))){
var inst_72783 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
if(cljs.core.truth_(inst_72783)){
var statearr_72812_72861 = state_72798__$1;
(statearr_72812_72861[(1)] = (23));

} else {
var statearr_72813_72862 = state_72798__$1;
(statearr_72813_72862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (6))){
var inst_72777 = (state_72798[(7)]);
var inst_72729 = (state_72798[(8)]);
var inst_72779 = (state_72798[(11)]);
var inst_72777__$1 = topic_fn.call(null,inst_72729);
var inst_72778 = cljs.core.deref.call(null,mults);
var inst_72779__$1 = cljs.core.get.call(null,inst_72778,inst_72777__$1);
var state_72798__$1 = (function (){var statearr_72814 = state_72798;
(statearr_72814[(7)] = inst_72777__$1);

(statearr_72814[(11)] = inst_72779__$1);

return statearr_72814;
})();
if(cljs.core.truth_(inst_72779__$1)){
var statearr_72815_72863 = state_72798__$1;
(statearr_72815_72863[(1)] = (19));

} else {
var statearr_72816_72864 = state_72798__$1;
(statearr_72816_72864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (25))){
var inst_72788 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
var statearr_72817_72865 = state_72798__$1;
(statearr_72817_72865[(2)] = inst_72788);

(statearr_72817_72865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (17))){
var inst_72753 = (state_72798[(10)]);
var inst_72762 = cljs.core.first.call(null,inst_72753);
var inst_72763 = cljs.core.async.muxch_STAR_.call(null,inst_72762);
var inst_72764 = cljs.core.async.close_BANG_.call(null,inst_72763);
var inst_72765 = cljs.core.next.call(null,inst_72753);
var inst_72739 = inst_72765;
var inst_72740 = null;
var inst_72741 = (0);
var inst_72742 = (0);
var state_72798__$1 = (function (){var statearr_72818 = state_72798;
(statearr_72818[(12)] = inst_72764);

(statearr_72818[(13)] = inst_72739);

(statearr_72818[(14)] = inst_72742);

(statearr_72818[(15)] = inst_72740);

(statearr_72818[(16)] = inst_72741);

return statearr_72818;
})();
var statearr_72819_72866 = state_72798__$1;
(statearr_72819_72866[(2)] = null);

(statearr_72819_72866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (3))){
var inst_72796 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72798__$1,inst_72796);
} else {
if((state_val_72799 === (12))){
var inst_72773 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
var statearr_72820_72867 = state_72798__$1;
(statearr_72820_72867[(2)] = inst_72773);

(statearr_72820_72867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (2))){
var state_72798__$1 = state_72798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72798__$1,(4),ch);
} else {
if((state_val_72799 === (23))){
var state_72798__$1 = state_72798;
var statearr_72821_72868 = state_72798__$1;
(statearr_72821_72868[(2)] = null);

(statearr_72821_72868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (19))){
var inst_72729 = (state_72798[(8)]);
var inst_72779 = (state_72798[(11)]);
var inst_72781 = cljs.core.async.muxch_STAR_.call(null,inst_72779);
var state_72798__$1 = state_72798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72798__$1,(22),inst_72781,inst_72729);
} else {
if((state_val_72799 === (11))){
var inst_72753 = (state_72798[(10)]);
var inst_72739 = (state_72798[(13)]);
var inst_72753__$1 = cljs.core.seq.call(null,inst_72739);
var state_72798__$1 = (function (){var statearr_72822 = state_72798;
(statearr_72822[(10)] = inst_72753__$1);

return statearr_72822;
})();
if(inst_72753__$1){
var statearr_72823_72869 = state_72798__$1;
(statearr_72823_72869[(1)] = (13));

} else {
var statearr_72824_72870 = state_72798__$1;
(statearr_72824_72870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (9))){
var inst_72775 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
var statearr_72825_72871 = state_72798__$1;
(statearr_72825_72871[(2)] = inst_72775);

(statearr_72825_72871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (5))){
var inst_72736 = cljs.core.deref.call(null,mults);
var inst_72737 = cljs.core.vals.call(null,inst_72736);
var inst_72738 = cljs.core.seq.call(null,inst_72737);
var inst_72739 = inst_72738;
var inst_72740 = null;
var inst_72741 = (0);
var inst_72742 = (0);
var state_72798__$1 = (function (){var statearr_72826 = state_72798;
(statearr_72826[(13)] = inst_72739);

(statearr_72826[(14)] = inst_72742);

(statearr_72826[(15)] = inst_72740);

(statearr_72826[(16)] = inst_72741);

return statearr_72826;
})();
var statearr_72827_72872 = state_72798__$1;
(statearr_72827_72872[(2)] = null);

(statearr_72827_72872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (14))){
var state_72798__$1 = state_72798;
var statearr_72831_72873 = state_72798__$1;
(statearr_72831_72873[(2)] = null);

(statearr_72831_72873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (16))){
var inst_72753 = (state_72798[(10)]);
var inst_72757 = cljs.core.chunk_first.call(null,inst_72753);
var inst_72758 = cljs.core.chunk_rest.call(null,inst_72753);
var inst_72759 = cljs.core.count.call(null,inst_72757);
var inst_72739 = inst_72758;
var inst_72740 = inst_72757;
var inst_72741 = inst_72759;
var inst_72742 = (0);
var state_72798__$1 = (function (){var statearr_72832 = state_72798;
(statearr_72832[(13)] = inst_72739);

(statearr_72832[(14)] = inst_72742);

(statearr_72832[(15)] = inst_72740);

(statearr_72832[(16)] = inst_72741);

return statearr_72832;
})();
var statearr_72833_72874 = state_72798__$1;
(statearr_72833_72874[(2)] = null);

(statearr_72833_72874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (10))){
var inst_72739 = (state_72798[(13)]);
var inst_72742 = (state_72798[(14)]);
var inst_72740 = (state_72798[(15)]);
var inst_72741 = (state_72798[(16)]);
var inst_72747 = cljs.core._nth.call(null,inst_72740,inst_72742);
var inst_72748 = cljs.core.async.muxch_STAR_.call(null,inst_72747);
var inst_72749 = cljs.core.async.close_BANG_.call(null,inst_72748);
var inst_72750 = (inst_72742 + (1));
var tmp72828 = inst_72739;
var tmp72829 = inst_72740;
var tmp72830 = inst_72741;
var inst_72739__$1 = tmp72828;
var inst_72740__$1 = tmp72829;
var inst_72741__$1 = tmp72830;
var inst_72742__$1 = inst_72750;
var state_72798__$1 = (function (){var statearr_72834 = state_72798;
(statearr_72834[(17)] = inst_72749);

(statearr_72834[(13)] = inst_72739__$1);

(statearr_72834[(14)] = inst_72742__$1);

(statearr_72834[(15)] = inst_72740__$1);

(statearr_72834[(16)] = inst_72741__$1);

return statearr_72834;
})();
var statearr_72835_72875 = state_72798__$1;
(statearr_72835_72875[(2)] = null);

(statearr_72835_72875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (18))){
var inst_72768 = (state_72798[(2)]);
var state_72798__$1 = state_72798;
var statearr_72836_72876 = state_72798__$1;
(statearr_72836_72876[(2)] = inst_72768);

(statearr_72836_72876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72799 === (8))){
var inst_72742 = (state_72798[(14)]);
var inst_72741 = (state_72798[(16)]);
var inst_72744 = (inst_72742 < inst_72741);
var inst_72745 = inst_72744;
var state_72798__$1 = state_72798;
if(cljs.core.truth_(inst_72745)){
var statearr_72837_72877 = state_72798__$1;
(statearr_72837_72877[(1)] = (10));

} else {
var statearr_72838_72878 = state_72798__$1;
(statearr_72838_72878[(1)] = (11));

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
});})(c__27930__auto___72850,mults,ensure_mult,p))
;
return ((function (switch__27865__auto__,c__27930__auto___72850,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_72842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72842[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_72842[(1)] = (1));

return statearr_72842;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_72798){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_72798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e72843){if((e72843 instanceof Object)){
var ex__27869__auto__ = e72843;
var statearr_72844_72879 = state_72798;
(statearr_72844_72879[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72880 = state_72798;
state_72798 = G__72880;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_72798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_72798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___72850,mults,ensure_mult,p))
})();
var state__27932__auto__ = (function (){var statearr_72845 = f__27931__auto__.call(null);
(statearr_72845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___72850);

return statearr_72845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___72850,mults,ensure_mult,p))
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
var args72881 = [];
var len__25826__auto___72884 = arguments.length;
var i__25827__auto___72885 = (0);
while(true){
if((i__25827__auto___72885 < len__25826__auto___72884)){
args72881.push((arguments[i__25827__auto___72885]));

var G__72886 = (i__25827__auto___72885 + (1));
i__25827__auto___72885 = G__72886;
continue;
} else {
}
break;
}

var G__72883 = args72881.length;
switch (G__72883) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72881.length)].join('')));

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
var args72888 = [];
var len__25826__auto___72891 = arguments.length;
var i__25827__auto___72892 = (0);
while(true){
if((i__25827__auto___72892 < len__25826__auto___72891)){
args72888.push((arguments[i__25827__auto___72892]));

var G__72893 = (i__25827__auto___72892 + (1));
i__25827__auto___72892 = G__72893;
continue;
} else {
}
break;
}

var G__72890 = args72888.length;
switch (G__72890) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72888.length)].join('')));

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
var args72895 = [];
var len__25826__auto___72966 = arguments.length;
var i__25827__auto___72967 = (0);
while(true){
if((i__25827__auto___72967 < len__25826__auto___72966)){
args72895.push((arguments[i__25827__auto___72967]));

var G__72968 = (i__25827__auto___72967 + (1));
i__25827__auto___72967 = G__72968;
continue;
} else {
}
break;
}

var G__72897 = args72895.length;
switch (G__72897) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72895.length)].join('')));

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
var c__27930__auto___72970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___72970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___72970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_72936){
var state_val_72937 = (state_72936[(1)]);
if((state_val_72937 === (7))){
var state_72936__$1 = state_72936;
var statearr_72938_72971 = state_72936__$1;
(statearr_72938_72971[(2)] = null);

(statearr_72938_72971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (1))){
var state_72936__$1 = state_72936;
var statearr_72939_72972 = state_72936__$1;
(statearr_72939_72972[(2)] = null);

(statearr_72939_72972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (4))){
var inst_72900 = (state_72936[(7)]);
var inst_72902 = (inst_72900 < cnt);
var state_72936__$1 = state_72936;
if(cljs.core.truth_(inst_72902)){
var statearr_72940_72973 = state_72936__$1;
(statearr_72940_72973[(1)] = (6));

} else {
var statearr_72941_72974 = state_72936__$1;
(statearr_72941_72974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (15))){
var inst_72932 = (state_72936[(2)]);
var state_72936__$1 = state_72936;
var statearr_72942_72975 = state_72936__$1;
(statearr_72942_72975[(2)] = inst_72932);

(statearr_72942_72975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (13))){
var inst_72925 = cljs.core.async.close_BANG_.call(null,out);
var state_72936__$1 = state_72936;
var statearr_72943_72976 = state_72936__$1;
(statearr_72943_72976[(2)] = inst_72925);

(statearr_72943_72976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (6))){
var state_72936__$1 = state_72936;
var statearr_72944_72977 = state_72936__$1;
(statearr_72944_72977[(2)] = null);

(statearr_72944_72977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (3))){
var inst_72934 = (state_72936[(2)]);
var state_72936__$1 = state_72936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72936__$1,inst_72934);
} else {
if((state_val_72937 === (12))){
var inst_72922 = (state_72936[(8)]);
var inst_72922__$1 = (state_72936[(2)]);
var inst_72923 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_72922__$1);
var state_72936__$1 = (function (){var statearr_72945 = state_72936;
(statearr_72945[(8)] = inst_72922__$1);

return statearr_72945;
})();
if(cljs.core.truth_(inst_72923)){
var statearr_72946_72978 = state_72936__$1;
(statearr_72946_72978[(1)] = (13));

} else {
var statearr_72947_72979 = state_72936__$1;
(statearr_72947_72979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (2))){
var inst_72899 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_72900 = (0);
var state_72936__$1 = (function (){var statearr_72948 = state_72936;
(statearr_72948[(7)] = inst_72900);

(statearr_72948[(9)] = inst_72899);

return statearr_72948;
})();
var statearr_72949_72980 = state_72936__$1;
(statearr_72949_72980[(2)] = null);

(statearr_72949_72980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (11))){
var inst_72900 = (state_72936[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_72936,(10),Object,null,(9));
var inst_72909 = chs__$1.call(null,inst_72900);
var inst_72910 = done.call(null,inst_72900);
var inst_72911 = cljs.core.async.take_BANG_.call(null,inst_72909,inst_72910);
var state_72936__$1 = state_72936;
var statearr_72950_72981 = state_72936__$1;
(statearr_72950_72981[(2)] = inst_72911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (9))){
var inst_72900 = (state_72936[(7)]);
var inst_72913 = (state_72936[(2)]);
var inst_72914 = (inst_72900 + (1));
var inst_72900__$1 = inst_72914;
var state_72936__$1 = (function (){var statearr_72951 = state_72936;
(statearr_72951[(10)] = inst_72913);

(statearr_72951[(7)] = inst_72900__$1);

return statearr_72951;
})();
var statearr_72952_72982 = state_72936__$1;
(statearr_72952_72982[(2)] = null);

(statearr_72952_72982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (5))){
var inst_72920 = (state_72936[(2)]);
var state_72936__$1 = (function (){var statearr_72953 = state_72936;
(statearr_72953[(11)] = inst_72920);

return statearr_72953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72936__$1,(12),dchan);
} else {
if((state_val_72937 === (14))){
var inst_72922 = (state_72936[(8)]);
var inst_72927 = cljs.core.apply.call(null,f,inst_72922);
var state_72936__$1 = state_72936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_72936__$1,(16),out,inst_72927);
} else {
if((state_val_72937 === (16))){
var inst_72929 = (state_72936[(2)]);
var state_72936__$1 = (function (){var statearr_72954 = state_72936;
(statearr_72954[(12)] = inst_72929);

return statearr_72954;
})();
var statearr_72955_72983 = state_72936__$1;
(statearr_72955_72983[(2)] = null);

(statearr_72955_72983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (10))){
var inst_72904 = (state_72936[(2)]);
var inst_72905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_72936__$1 = (function (){var statearr_72956 = state_72936;
(statearr_72956[(13)] = inst_72904);

return statearr_72956;
})();
var statearr_72957_72984 = state_72936__$1;
(statearr_72957_72984[(2)] = inst_72905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72937 === (8))){
var inst_72918 = (state_72936[(2)]);
var state_72936__$1 = state_72936;
var statearr_72958_72985 = state_72936__$1;
(statearr_72958_72985[(2)] = inst_72918);

(statearr_72958_72985[(1)] = (5));


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
});})(c__27930__auto___72970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27865__auto__,c__27930__auto___72970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_72962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72962[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_72962[(1)] = (1));

return statearr_72962;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_72936){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_72936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e72963){if((e72963 instanceof Object)){
var ex__27869__auto__ = e72963;
var statearr_72964_72986 = state_72936;
(statearr_72964_72986[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72987 = state_72936;
state_72936 = G__72987;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_72936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_72936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___72970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27932__auto__ = (function (){var statearr_72965 = f__27931__auto__.call(null);
(statearr_72965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___72970);

return statearr_72965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___72970,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args72989 = [];
var len__25826__auto___73047 = arguments.length;
var i__25827__auto___73048 = (0);
while(true){
if((i__25827__auto___73048 < len__25826__auto___73047)){
args72989.push((arguments[i__25827__auto___73048]));

var G__73049 = (i__25827__auto___73048 + (1));
i__25827__auto___73048 = G__73049;
continue;
} else {
}
break;
}

var G__72991 = args72989.length;
switch (G__72991) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72989.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___73051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___73051,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___73051,out){
return (function (state_73023){
var state_val_73024 = (state_73023[(1)]);
if((state_val_73024 === (7))){
var inst_73003 = (state_73023[(7)]);
var inst_73002 = (state_73023[(8)]);
var inst_73002__$1 = (state_73023[(2)]);
var inst_73003__$1 = cljs.core.nth.call(null,inst_73002__$1,(0),null);
var inst_73004 = cljs.core.nth.call(null,inst_73002__$1,(1),null);
var inst_73005 = (inst_73003__$1 == null);
var state_73023__$1 = (function (){var statearr_73025 = state_73023;
(statearr_73025[(7)] = inst_73003__$1);

(statearr_73025[(8)] = inst_73002__$1);

(statearr_73025[(9)] = inst_73004);

return statearr_73025;
})();
if(cljs.core.truth_(inst_73005)){
var statearr_73026_73052 = state_73023__$1;
(statearr_73026_73052[(1)] = (8));

} else {
var statearr_73027_73053 = state_73023__$1;
(statearr_73027_73053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (1))){
var inst_72992 = cljs.core.vec.call(null,chs);
var inst_72993 = inst_72992;
var state_73023__$1 = (function (){var statearr_73028 = state_73023;
(statearr_73028[(10)] = inst_72993);

return statearr_73028;
})();
var statearr_73029_73054 = state_73023__$1;
(statearr_73029_73054[(2)] = null);

(statearr_73029_73054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (4))){
var inst_72993 = (state_73023[(10)]);
var state_73023__$1 = state_73023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_73023__$1,(7),inst_72993);
} else {
if((state_val_73024 === (6))){
var inst_73019 = (state_73023[(2)]);
var state_73023__$1 = state_73023;
var statearr_73030_73055 = state_73023__$1;
(statearr_73030_73055[(2)] = inst_73019);

(statearr_73030_73055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (3))){
var inst_73021 = (state_73023[(2)]);
var state_73023__$1 = state_73023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73023__$1,inst_73021);
} else {
if((state_val_73024 === (2))){
var inst_72993 = (state_73023[(10)]);
var inst_72995 = cljs.core.count.call(null,inst_72993);
var inst_72996 = (inst_72995 > (0));
var state_73023__$1 = state_73023;
if(cljs.core.truth_(inst_72996)){
var statearr_73032_73056 = state_73023__$1;
(statearr_73032_73056[(1)] = (4));

} else {
var statearr_73033_73057 = state_73023__$1;
(statearr_73033_73057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (11))){
var inst_72993 = (state_73023[(10)]);
var inst_73012 = (state_73023[(2)]);
var tmp73031 = inst_72993;
var inst_72993__$1 = tmp73031;
var state_73023__$1 = (function (){var statearr_73034 = state_73023;
(statearr_73034[(11)] = inst_73012);

(statearr_73034[(10)] = inst_72993__$1);

return statearr_73034;
})();
var statearr_73035_73058 = state_73023__$1;
(statearr_73035_73058[(2)] = null);

(statearr_73035_73058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (9))){
var inst_73003 = (state_73023[(7)]);
var state_73023__$1 = state_73023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73023__$1,(11),out,inst_73003);
} else {
if((state_val_73024 === (5))){
var inst_73017 = cljs.core.async.close_BANG_.call(null,out);
var state_73023__$1 = state_73023;
var statearr_73036_73059 = state_73023__$1;
(statearr_73036_73059[(2)] = inst_73017);

(statearr_73036_73059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (10))){
var inst_73015 = (state_73023[(2)]);
var state_73023__$1 = state_73023;
var statearr_73037_73060 = state_73023__$1;
(statearr_73037_73060[(2)] = inst_73015);

(statearr_73037_73060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73024 === (8))){
var inst_73003 = (state_73023[(7)]);
var inst_73002 = (state_73023[(8)]);
var inst_73004 = (state_73023[(9)]);
var inst_72993 = (state_73023[(10)]);
var inst_73007 = (function (){var cs = inst_72993;
var vec__72998 = inst_73002;
var v = inst_73003;
var c = inst_73004;
return ((function (cs,vec__72998,v,c,inst_73003,inst_73002,inst_73004,inst_72993,state_val_73024,c__27930__auto___73051,out){
return (function (p1__72988_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__72988_SHARP_);
});
;})(cs,vec__72998,v,c,inst_73003,inst_73002,inst_73004,inst_72993,state_val_73024,c__27930__auto___73051,out))
})();
var inst_73008 = cljs.core.filterv.call(null,inst_73007,inst_72993);
var inst_72993__$1 = inst_73008;
var state_73023__$1 = (function (){var statearr_73038 = state_73023;
(statearr_73038[(10)] = inst_72993__$1);

return statearr_73038;
})();
var statearr_73039_73061 = state_73023__$1;
(statearr_73039_73061[(2)] = null);

(statearr_73039_73061[(1)] = (2));


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
});})(c__27930__auto___73051,out))
;
return ((function (switch__27865__auto__,c__27930__auto___73051,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_73043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73043[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_73043[(1)] = (1));

return statearr_73043;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_73023){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73044){if((e73044 instanceof Object)){
var ex__27869__auto__ = e73044;
var statearr_73045_73062 = state_73023;
(statearr_73045_73062[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73063 = state_73023;
state_73023 = G__73063;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_73023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_73023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___73051,out))
})();
var state__27932__auto__ = (function (){var statearr_73046 = f__27931__auto__.call(null);
(statearr_73046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___73051);

return statearr_73046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___73051,out))
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
var args73064 = [];
var len__25826__auto___73113 = arguments.length;
var i__25827__auto___73114 = (0);
while(true){
if((i__25827__auto___73114 < len__25826__auto___73113)){
args73064.push((arguments[i__25827__auto___73114]));

var G__73115 = (i__25827__auto___73114 + (1));
i__25827__auto___73114 = G__73115;
continue;
} else {
}
break;
}

var G__73066 = args73064.length;
switch (G__73066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73064.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___73117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___73117,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___73117,out){
return (function (state_73090){
var state_val_73091 = (state_73090[(1)]);
if((state_val_73091 === (7))){
var inst_73072 = (state_73090[(7)]);
var inst_73072__$1 = (state_73090[(2)]);
var inst_73073 = (inst_73072__$1 == null);
var inst_73074 = cljs.core.not.call(null,inst_73073);
var state_73090__$1 = (function (){var statearr_73092 = state_73090;
(statearr_73092[(7)] = inst_73072__$1);

return statearr_73092;
})();
if(inst_73074){
var statearr_73093_73118 = state_73090__$1;
(statearr_73093_73118[(1)] = (8));

} else {
var statearr_73094_73119 = state_73090__$1;
(statearr_73094_73119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (1))){
var inst_73067 = (0);
var state_73090__$1 = (function (){var statearr_73095 = state_73090;
(statearr_73095[(8)] = inst_73067);

return statearr_73095;
})();
var statearr_73096_73120 = state_73090__$1;
(statearr_73096_73120[(2)] = null);

(statearr_73096_73120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (4))){
var state_73090__$1 = state_73090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73090__$1,(7),ch);
} else {
if((state_val_73091 === (6))){
var inst_73085 = (state_73090[(2)]);
var state_73090__$1 = state_73090;
var statearr_73097_73121 = state_73090__$1;
(statearr_73097_73121[(2)] = inst_73085);

(statearr_73097_73121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (3))){
var inst_73087 = (state_73090[(2)]);
var inst_73088 = cljs.core.async.close_BANG_.call(null,out);
var state_73090__$1 = (function (){var statearr_73098 = state_73090;
(statearr_73098[(9)] = inst_73087);

return statearr_73098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73090__$1,inst_73088);
} else {
if((state_val_73091 === (2))){
var inst_73067 = (state_73090[(8)]);
var inst_73069 = (inst_73067 < n);
var state_73090__$1 = state_73090;
if(cljs.core.truth_(inst_73069)){
var statearr_73099_73122 = state_73090__$1;
(statearr_73099_73122[(1)] = (4));

} else {
var statearr_73100_73123 = state_73090__$1;
(statearr_73100_73123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (11))){
var inst_73067 = (state_73090[(8)]);
var inst_73077 = (state_73090[(2)]);
var inst_73078 = (inst_73067 + (1));
var inst_73067__$1 = inst_73078;
var state_73090__$1 = (function (){var statearr_73101 = state_73090;
(statearr_73101[(8)] = inst_73067__$1);

(statearr_73101[(10)] = inst_73077);

return statearr_73101;
})();
var statearr_73102_73124 = state_73090__$1;
(statearr_73102_73124[(2)] = null);

(statearr_73102_73124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (9))){
var state_73090__$1 = state_73090;
var statearr_73103_73125 = state_73090__$1;
(statearr_73103_73125[(2)] = null);

(statearr_73103_73125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (5))){
var state_73090__$1 = state_73090;
var statearr_73104_73126 = state_73090__$1;
(statearr_73104_73126[(2)] = null);

(statearr_73104_73126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (10))){
var inst_73082 = (state_73090[(2)]);
var state_73090__$1 = state_73090;
var statearr_73105_73127 = state_73090__$1;
(statearr_73105_73127[(2)] = inst_73082);

(statearr_73105_73127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73091 === (8))){
var inst_73072 = (state_73090[(7)]);
var state_73090__$1 = state_73090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73090__$1,(11),out,inst_73072);
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
});})(c__27930__auto___73117,out))
;
return ((function (switch__27865__auto__,c__27930__auto___73117,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_73109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73109[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_73109[(1)] = (1));

return statearr_73109;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_73090){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73110){if((e73110 instanceof Object)){
var ex__27869__auto__ = e73110;
var statearr_73111_73128 = state_73090;
(statearr_73111_73128[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73129 = state_73090;
state_73090 = G__73129;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_73090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_73090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___73117,out))
})();
var state__27932__auto__ = (function (){var statearr_73112 = f__27931__auto__.call(null);
(statearr_73112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___73117);

return statearr_73112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___73117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async73137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73137 = (function (map_LT_,f,ch,meta73138){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta73138 = meta73138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73139,meta73138__$1){
var self__ = this;
var _73139__$1 = this;
return (new cljs.core.async.t_cljs$core$async73137(self__.map_LT_,self__.f,self__.ch,meta73138__$1));
});

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73139){
var self__ = this;
var _73139__$1 = this;
return self__.meta73138;
});

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async73140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73140 = (function (map_LT_,f,ch,meta73138,_,fn1,meta73141){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta73138 = meta73138;
this._ = _;
this.fn1 = fn1;
this.meta73141 = meta73141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async73140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_73142,meta73141__$1){
var self__ = this;
var _73142__$1 = this;
return (new cljs.core.async.t_cljs$core$async73140(self__.map_LT_,self__.f,self__.ch,self__.meta73138,self__._,self__.fn1,meta73141__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async73140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_73142){
var self__ = this;
var _73142__$1 = this;
return self__.meta73141;
});})(___$1))
;

cljs.core.async.t_cljs$core$async73140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async73140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async73140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async73140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__73130_SHARP_){
return f1.call(null,(((p1__73130_SHARP_ == null))?null:self__.f.call(null,p1__73130_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async73140.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73138","meta73138",-2045607703,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async73137","cljs.core.async/t_cljs$core$async73137",1460181111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta73141","meta73141",-1901499783,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async73140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73140";

cljs.core.async.t_cljs$core$async73140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async73140");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async73140 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async73140(map_LT___$1,f__$1,ch__$1,meta73138__$1,___$2,fn1__$1,meta73141){
return (new cljs.core.async.t_cljs$core$async73140(map_LT___$1,f__$1,ch__$1,meta73138__$1,___$2,fn1__$1,meta73141));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async73140(self__.map_LT_,self__.f,self__.ch,self__.meta73138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async73137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async73137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73138","meta73138",-2045607703,null)], null);
});

cljs.core.async.t_cljs$core$async73137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73137";

cljs.core.async.t_cljs$core$async73137.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async73137");
});

cljs.core.async.__GT_t_cljs$core$async73137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async73137(map_LT___$1,f__$1,ch__$1,meta73138){
return (new cljs.core.async.t_cljs$core$async73137(map_LT___$1,f__$1,ch__$1,meta73138));
});

}

return (new cljs.core.async.t_cljs$core$async73137(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async73146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73146 = (function (map_GT_,f,ch,meta73147){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta73147 = meta73147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73148,meta73147__$1){
var self__ = this;
var _73148__$1 = this;
return (new cljs.core.async.t_cljs$core$async73146(self__.map_GT_,self__.f,self__.ch,meta73147__$1));
});

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73148){
var self__ = this;
var _73148__$1 = this;
return self__.meta73147;
});

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async73146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async73146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73147","meta73147",1699863697,null)], null);
});

cljs.core.async.t_cljs$core$async73146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73146";

cljs.core.async.t_cljs$core$async73146.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async73146");
});

cljs.core.async.__GT_t_cljs$core$async73146 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async73146(map_GT___$1,f__$1,ch__$1,meta73147){
return (new cljs.core.async.t_cljs$core$async73146(map_GT___$1,f__$1,ch__$1,meta73147));
});

}

return (new cljs.core.async.t_cljs$core$async73146(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async73152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73152 = (function (filter_GT_,p,ch,meta73153){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta73153 = meta73153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73154,meta73153__$1){
var self__ = this;
var _73154__$1 = this;
return (new cljs.core.async.t_cljs$core$async73152(self__.filter_GT_,self__.p,self__.ch,meta73153__$1));
});

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73154){
var self__ = this;
var _73154__$1 = this;
return self__.meta73153;
});

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async73152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async73152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73153","meta73153",-153067715,null)], null);
});

cljs.core.async.t_cljs$core$async73152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async73152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73152";

cljs.core.async.t_cljs$core$async73152.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async73152");
});

cljs.core.async.__GT_t_cljs$core$async73152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async73152(filter_GT___$1,p__$1,ch__$1,meta73153){
return (new cljs.core.async.t_cljs$core$async73152(filter_GT___$1,p__$1,ch__$1,meta73153));
});

}

return (new cljs.core.async.t_cljs$core$async73152(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args73155 = [];
var len__25826__auto___73199 = arguments.length;
var i__25827__auto___73200 = (0);
while(true){
if((i__25827__auto___73200 < len__25826__auto___73199)){
args73155.push((arguments[i__25827__auto___73200]));

var G__73201 = (i__25827__auto___73200 + (1));
i__25827__auto___73200 = G__73201;
continue;
} else {
}
break;
}

var G__73157 = args73155.length;
switch (G__73157) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73155.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___73203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___73203,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___73203,out){
return (function (state_73178){
var state_val_73179 = (state_73178[(1)]);
if((state_val_73179 === (7))){
var inst_73174 = (state_73178[(2)]);
var state_73178__$1 = state_73178;
var statearr_73180_73204 = state_73178__$1;
(statearr_73180_73204[(2)] = inst_73174);

(statearr_73180_73204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (1))){
var state_73178__$1 = state_73178;
var statearr_73181_73205 = state_73178__$1;
(statearr_73181_73205[(2)] = null);

(statearr_73181_73205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (4))){
var inst_73160 = (state_73178[(7)]);
var inst_73160__$1 = (state_73178[(2)]);
var inst_73161 = (inst_73160__$1 == null);
var state_73178__$1 = (function (){var statearr_73182 = state_73178;
(statearr_73182[(7)] = inst_73160__$1);

return statearr_73182;
})();
if(cljs.core.truth_(inst_73161)){
var statearr_73183_73206 = state_73178__$1;
(statearr_73183_73206[(1)] = (5));

} else {
var statearr_73184_73207 = state_73178__$1;
(statearr_73184_73207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (6))){
var inst_73160 = (state_73178[(7)]);
var inst_73165 = p.call(null,inst_73160);
var state_73178__$1 = state_73178;
if(cljs.core.truth_(inst_73165)){
var statearr_73185_73208 = state_73178__$1;
(statearr_73185_73208[(1)] = (8));

} else {
var statearr_73186_73209 = state_73178__$1;
(statearr_73186_73209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (3))){
var inst_73176 = (state_73178[(2)]);
var state_73178__$1 = state_73178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73178__$1,inst_73176);
} else {
if((state_val_73179 === (2))){
var state_73178__$1 = state_73178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73178__$1,(4),ch);
} else {
if((state_val_73179 === (11))){
var inst_73168 = (state_73178[(2)]);
var state_73178__$1 = state_73178;
var statearr_73187_73210 = state_73178__$1;
(statearr_73187_73210[(2)] = inst_73168);

(statearr_73187_73210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (9))){
var state_73178__$1 = state_73178;
var statearr_73188_73211 = state_73178__$1;
(statearr_73188_73211[(2)] = null);

(statearr_73188_73211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (5))){
var inst_73163 = cljs.core.async.close_BANG_.call(null,out);
var state_73178__$1 = state_73178;
var statearr_73189_73212 = state_73178__$1;
(statearr_73189_73212[(2)] = inst_73163);

(statearr_73189_73212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (10))){
var inst_73171 = (state_73178[(2)]);
var state_73178__$1 = (function (){var statearr_73190 = state_73178;
(statearr_73190[(8)] = inst_73171);

return statearr_73190;
})();
var statearr_73191_73213 = state_73178__$1;
(statearr_73191_73213[(2)] = null);

(statearr_73191_73213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73179 === (8))){
var inst_73160 = (state_73178[(7)]);
var state_73178__$1 = state_73178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73178__$1,(11),out,inst_73160);
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
});})(c__27930__auto___73203,out))
;
return ((function (switch__27865__auto__,c__27930__auto___73203,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_73195 = [null,null,null,null,null,null,null,null,null];
(statearr_73195[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_73195[(1)] = (1));

return statearr_73195;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_73178){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73196){if((e73196 instanceof Object)){
var ex__27869__auto__ = e73196;
var statearr_73197_73214 = state_73178;
(statearr_73197_73214[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73215 = state_73178;
state_73178 = G__73215;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_73178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_73178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___73203,out))
})();
var state__27932__auto__ = (function (){var statearr_73198 = f__27931__auto__.call(null);
(statearr_73198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___73203);

return statearr_73198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___73203,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args73216 = [];
var len__25826__auto___73219 = arguments.length;
var i__25827__auto___73220 = (0);
while(true){
if((i__25827__auto___73220 < len__25826__auto___73219)){
args73216.push((arguments[i__25827__auto___73220]));

var G__73221 = (i__25827__auto___73220 + (1));
i__25827__auto___73220 = G__73221;
continue;
} else {
}
break;
}

var G__73218 = args73216.length;
switch (G__73218) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73216.length)].join('')));

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
return (function (state_73388){
var state_val_73389 = (state_73388[(1)]);
if((state_val_73389 === (7))){
var inst_73384 = (state_73388[(2)]);
var state_73388__$1 = state_73388;
var statearr_73390_73431 = state_73388__$1;
(statearr_73390_73431[(2)] = inst_73384);

(statearr_73390_73431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (20))){
var inst_73354 = (state_73388[(7)]);
var inst_73365 = (state_73388[(2)]);
var inst_73366 = cljs.core.next.call(null,inst_73354);
var inst_73340 = inst_73366;
var inst_73341 = null;
var inst_73342 = (0);
var inst_73343 = (0);
var state_73388__$1 = (function (){var statearr_73391 = state_73388;
(statearr_73391[(8)] = inst_73340);

(statearr_73391[(9)] = inst_73342);

(statearr_73391[(10)] = inst_73365);

(statearr_73391[(11)] = inst_73343);

(statearr_73391[(12)] = inst_73341);

return statearr_73391;
})();
var statearr_73392_73432 = state_73388__$1;
(statearr_73392_73432[(2)] = null);

(statearr_73392_73432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (1))){
var state_73388__$1 = state_73388;
var statearr_73393_73433 = state_73388__$1;
(statearr_73393_73433[(2)] = null);

(statearr_73393_73433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (4))){
var inst_73329 = (state_73388[(13)]);
var inst_73329__$1 = (state_73388[(2)]);
var inst_73330 = (inst_73329__$1 == null);
var state_73388__$1 = (function (){var statearr_73394 = state_73388;
(statearr_73394[(13)] = inst_73329__$1);

return statearr_73394;
})();
if(cljs.core.truth_(inst_73330)){
var statearr_73395_73434 = state_73388__$1;
(statearr_73395_73434[(1)] = (5));

} else {
var statearr_73396_73435 = state_73388__$1;
(statearr_73396_73435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (15))){
var state_73388__$1 = state_73388;
var statearr_73400_73436 = state_73388__$1;
(statearr_73400_73436[(2)] = null);

(statearr_73400_73436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (21))){
var state_73388__$1 = state_73388;
var statearr_73401_73437 = state_73388__$1;
(statearr_73401_73437[(2)] = null);

(statearr_73401_73437[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (13))){
var inst_73340 = (state_73388[(8)]);
var inst_73342 = (state_73388[(9)]);
var inst_73343 = (state_73388[(11)]);
var inst_73341 = (state_73388[(12)]);
var inst_73350 = (state_73388[(2)]);
var inst_73351 = (inst_73343 + (1));
var tmp73397 = inst_73340;
var tmp73398 = inst_73342;
var tmp73399 = inst_73341;
var inst_73340__$1 = tmp73397;
var inst_73341__$1 = tmp73399;
var inst_73342__$1 = tmp73398;
var inst_73343__$1 = inst_73351;
var state_73388__$1 = (function (){var statearr_73402 = state_73388;
(statearr_73402[(8)] = inst_73340__$1);

(statearr_73402[(9)] = inst_73342__$1);

(statearr_73402[(14)] = inst_73350);

(statearr_73402[(11)] = inst_73343__$1);

(statearr_73402[(12)] = inst_73341__$1);

return statearr_73402;
})();
var statearr_73403_73438 = state_73388__$1;
(statearr_73403_73438[(2)] = null);

(statearr_73403_73438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (22))){
var state_73388__$1 = state_73388;
var statearr_73404_73439 = state_73388__$1;
(statearr_73404_73439[(2)] = null);

(statearr_73404_73439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (6))){
var inst_73329 = (state_73388[(13)]);
var inst_73338 = f.call(null,inst_73329);
var inst_73339 = cljs.core.seq.call(null,inst_73338);
var inst_73340 = inst_73339;
var inst_73341 = null;
var inst_73342 = (0);
var inst_73343 = (0);
var state_73388__$1 = (function (){var statearr_73405 = state_73388;
(statearr_73405[(8)] = inst_73340);

(statearr_73405[(9)] = inst_73342);

(statearr_73405[(11)] = inst_73343);

(statearr_73405[(12)] = inst_73341);

return statearr_73405;
})();
var statearr_73406_73440 = state_73388__$1;
(statearr_73406_73440[(2)] = null);

(statearr_73406_73440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (17))){
var inst_73354 = (state_73388[(7)]);
var inst_73358 = cljs.core.chunk_first.call(null,inst_73354);
var inst_73359 = cljs.core.chunk_rest.call(null,inst_73354);
var inst_73360 = cljs.core.count.call(null,inst_73358);
var inst_73340 = inst_73359;
var inst_73341 = inst_73358;
var inst_73342 = inst_73360;
var inst_73343 = (0);
var state_73388__$1 = (function (){var statearr_73407 = state_73388;
(statearr_73407[(8)] = inst_73340);

(statearr_73407[(9)] = inst_73342);

(statearr_73407[(11)] = inst_73343);

(statearr_73407[(12)] = inst_73341);

return statearr_73407;
})();
var statearr_73408_73441 = state_73388__$1;
(statearr_73408_73441[(2)] = null);

(statearr_73408_73441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (3))){
var inst_73386 = (state_73388[(2)]);
var state_73388__$1 = state_73388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73388__$1,inst_73386);
} else {
if((state_val_73389 === (12))){
var inst_73374 = (state_73388[(2)]);
var state_73388__$1 = state_73388;
var statearr_73409_73442 = state_73388__$1;
(statearr_73409_73442[(2)] = inst_73374);

(statearr_73409_73442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (2))){
var state_73388__$1 = state_73388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73388__$1,(4),in$);
} else {
if((state_val_73389 === (23))){
var inst_73382 = (state_73388[(2)]);
var state_73388__$1 = state_73388;
var statearr_73410_73443 = state_73388__$1;
(statearr_73410_73443[(2)] = inst_73382);

(statearr_73410_73443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (19))){
var inst_73369 = (state_73388[(2)]);
var state_73388__$1 = state_73388;
var statearr_73411_73444 = state_73388__$1;
(statearr_73411_73444[(2)] = inst_73369);

(statearr_73411_73444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (11))){
var inst_73340 = (state_73388[(8)]);
var inst_73354 = (state_73388[(7)]);
var inst_73354__$1 = cljs.core.seq.call(null,inst_73340);
var state_73388__$1 = (function (){var statearr_73412 = state_73388;
(statearr_73412[(7)] = inst_73354__$1);

return statearr_73412;
})();
if(inst_73354__$1){
var statearr_73413_73445 = state_73388__$1;
(statearr_73413_73445[(1)] = (14));

} else {
var statearr_73414_73446 = state_73388__$1;
(statearr_73414_73446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (9))){
var inst_73376 = (state_73388[(2)]);
var inst_73377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_73388__$1 = (function (){var statearr_73415 = state_73388;
(statearr_73415[(15)] = inst_73376);

return statearr_73415;
})();
if(cljs.core.truth_(inst_73377)){
var statearr_73416_73447 = state_73388__$1;
(statearr_73416_73447[(1)] = (21));

} else {
var statearr_73417_73448 = state_73388__$1;
(statearr_73417_73448[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (5))){
var inst_73332 = cljs.core.async.close_BANG_.call(null,out);
var state_73388__$1 = state_73388;
var statearr_73418_73449 = state_73388__$1;
(statearr_73418_73449[(2)] = inst_73332);

(statearr_73418_73449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (14))){
var inst_73354 = (state_73388[(7)]);
var inst_73356 = cljs.core.chunked_seq_QMARK_.call(null,inst_73354);
var state_73388__$1 = state_73388;
if(inst_73356){
var statearr_73419_73450 = state_73388__$1;
(statearr_73419_73450[(1)] = (17));

} else {
var statearr_73420_73451 = state_73388__$1;
(statearr_73420_73451[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (16))){
var inst_73372 = (state_73388[(2)]);
var state_73388__$1 = state_73388;
var statearr_73421_73452 = state_73388__$1;
(statearr_73421_73452[(2)] = inst_73372);

(statearr_73421_73452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73389 === (10))){
var inst_73343 = (state_73388[(11)]);
var inst_73341 = (state_73388[(12)]);
var inst_73348 = cljs.core._nth.call(null,inst_73341,inst_73343);
var state_73388__$1 = state_73388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73388__$1,(13),out,inst_73348);
} else {
if((state_val_73389 === (18))){
var inst_73354 = (state_73388[(7)]);
var inst_73363 = cljs.core.first.call(null,inst_73354);
var state_73388__$1 = state_73388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73388__$1,(20),out,inst_73363);
} else {
if((state_val_73389 === (8))){
var inst_73342 = (state_73388[(9)]);
var inst_73343 = (state_73388[(11)]);
var inst_73345 = (inst_73343 < inst_73342);
var inst_73346 = inst_73345;
var state_73388__$1 = state_73388;
if(cljs.core.truth_(inst_73346)){
var statearr_73422_73453 = state_73388__$1;
(statearr_73422_73453[(1)] = (10));

} else {
var statearr_73423_73454 = state_73388__$1;
(statearr_73423_73454[(1)] = (11));

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
var statearr_73427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__);

(statearr_73427[(1)] = (1));

return statearr_73427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____1 = (function (state_73388){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73428){if((e73428 instanceof Object)){
var ex__27869__auto__ = e73428;
var statearr_73429_73455 = state_73388;
(statearr_73429_73455[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73456 = state_73388;
state_73388 = G__73456;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__ = function(state_73388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____1.call(this,state_73388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_73430 = f__27931__auto__.call(null);
(statearr_73430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_73430;
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
var args73457 = [];
var len__25826__auto___73460 = arguments.length;
var i__25827__auto___73461 = (0);
while(true){
if((i__25827__auto___73461 < len__25826__auto___73460)){
args73457.push((arguments[i__25827__auto___73461]));

var G__73462 = (i__25827__auto___73461 + (1));
i__25827__auto___73461 = G__73462;
continue;
} else {
}
break;
}

var G__73459 = args73457.length;
switch (G__73459) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73457.length)].join('')));

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
var args73464 = [];
var len__25826__auto___73467 = arguments.length;
var i__25827__auto___73468 = (0);
while(true){
if((i__25827__auto___73468 < len__25826__auto___73467)){
args73464.push((arguments[i__25827__auto___73468]));

var G__73469 = (i__25827__auto___73468 + (1));
i__25827__auto___73468 = G__73469;
continue;
} else {
}
break;
}

var G__73466 = args73464.length;
switch (G__73466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73464.length)].join('')));

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
var args73471 = [];
var len__25826__auto___73522 = arguments.length;
var i__25827__auto___73523 = (0);
while(true){
if((i__25827__auto___73523 < len__25826__auto___73522)){
args73471.push((arguments[i__25827__auto___73523]));

var G__73524 = (i__25827__auto___73523 + (1));
i__25827__auto___73523 = G__73524;
continue;
} else {
}
break;
}

var G__73473 = args73471.length;
switch (G__73473) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73471.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___73526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___73526,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___73526,out){
return (function (state_73497){
var state_val_73498 = (state_73497[(1)]);
if((state_val_73498 === (7))){
var inst_73492 = (state_73497[(2)]);
var state_73497__$1 = state_73497;
var statearr_73499_73527 = state_73497__$1;
(statearr_73499_73527[(2)] = inst_73492);

(statearr_73499_73527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (1))){
var inst_73474 = null;
var state_73497__$1 = (function (){var statearr_73500 = state_73497;
(statearr_73500[(7)] = inst_73474);

return statearr_73500;
})();
var statearr_73501_73528 = state_73497__$1;
(statearr_73501_73528[(2)] = null);

(statearr_73501_73528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (4))){
var inst_73477 = (state_73497[(8)]);
var inst_73477__$1 = (state_73497[(2)]);
var inst_73478 = (inst_73477__$1 == null);
var inst_73479 = cljs.core.not.call(null,inst_73478);
var state_73497__$1 = (function (){var statearr_73502 = state_73497;
(statearr_73502[(8)] = inst_73477__$1);

return statearr_73502;
})();
if(inst_73479){
var statearr_73503_73529 = state_73497__$1;
(statearr_73503_73529[(1)] = (5));

} else {
var statearr_73504_73530 = state_73497__$1;
(statearr_73504_73530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (6))){
var state_73497__$1 = state_73497;
var statearr_73505_73531 = state_73497__$1;
(statearr_73505_73531[(2)] = null);

(statearr_73505_73531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (3))){
var inst_73494 = (state_73497[(2)]);
var inst_73495 = cljs.core.async.close_BANG_.call(null,out);
var state_73497__$1 = (function (){var statearr_73506 = state_73497;
(statearr_73506[(9)] = inst_73494);

return statearr_73506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73497__$1,inst_73495);
} else {
if((state_val_73498 === (2))){
var state_73497__$1 = state_73497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73497__$1,(4),ch);
} else {
if((state_val_73498 === (11))){
var inst_73477 = (state_73497[(8)]);
var inst_73486 = (state_73497[(2)]);
var inst_73474 = inst_73477;
var state_73497__$1 = (function (){var statearr_73507 = state_73497;
(statearr_73507[(7)] = inst_73474);

(statearr_73507[(10)] = inst_73486);

return statearr_73507;
})();
var statearr_73508_73532 = state_73497__$1;
(statearr_73508_73532[(2)] = null);

(statearr_73508_73532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (9))){
var inst_73477 = (state_73497[(8)]);
var state_73497__$1 = state_73497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73497__$1,(11),out,inst_73477);
} else {
if((state_val_73498 === (5))){
var inst_73477 = (state_73497[(8)]);
var inst_73474 = (state_73497[(7)]);
var inst_73481 = cljs.core._EQ_.call(null,inst_73477,inst_73474);
var state_73497__$1 = state_73497;
if(inst_73481){
var statearr_73510_73533 = state_73497__$1;
(statearr_73510_73533[(1)] = (8));

} else {
var statearr_73511_73534 = state_73497__$1;
(statearr_73511_73534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (10))){
var inst_73489 = (state_73497[(2)]);
var state_73497__$1 = state_73497;
var statearr_73512_73535 = state_73497__$1;
(statearr_73512_73535[(2)] = inst_73489);

(statearr_73512_73535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73498 === (8))){
var inst_73474 = (state_73497[(7)]);
var tmp73509 = inst_73474;
var inst_73474__$1 = tmp73509;
var state_73497__$1 = (function (){var statearr_73513 = state_73497;
(statearr_73513[(7)] = inst_73474__$1);

return statearr_73513;
})();
var statearr_73514_73536 = state_73497__$1;
(statearr_73514_73536[(2)] = null);

(statearr_73514_73536[(1)] = (2));


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
});})(c__27930__auto___73526,out))
;
return ((function (switch__27865__auto__,c__27930__auto___73526,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_73518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73518[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_73518[(1)] = (1));

return statearr_73518;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_73497){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73519){if((e73519 instanceof Object)){
var ex__27869__auto__ = e73519;
var statearr_73520_73537 = state_73497;
(statearr_73520_73537[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73538 = state_73497;
state_73497 = G__73538;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_73497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_73497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___73526,out))
})();
var state__27932__auto__ = (function (){var statearr_73521 = f__27931__auto__.call(null);
(statearr_73521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___73526);

return statearr_73521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___73526,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args73539 = [];
var len__25826__auto___73609 = arguments.length;
var i__25827__auto___73610 = (0);
while(true){
if((i__25827__auto___73610 < len__25826__auto___73609)){
args73539.push((arguments[i__25827__auto___73610]));

var G__73611 = (i__25827__auto___73610 + (1));
i__25827__auto___73610 = G__73611;
continue;
} else {
}
break;
}

var G__73541 = args73539.length;
switch (G__73541) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73539.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___73613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___73613,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___73613,out){
return (function (state_73579){
var state_val_73580 = (state_73579[(1)]);
if((state_val_73580 === (7))){
var inst_73575 = (state_73579[(2)]);
var state_73579__$1 = state_73579;
var statearr_73581_73614 = state_73579__$1;
(statearr_73581_73614[(2)] = inst_73575);

(statearr_73581_73614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (1))){
var inst_73542 = (new Array(n));
var inst_73543 = inst_73542;
var inst_73544 = (0);
var state_73579__$1 = (function (){var statearr_73582 = state_73579;
(statearr_73582[(7)] = inst_73544);

(statearr_73582[(8)] = inst_73543);

return statearr_73582;
})();
var statearr_73583_73615 = state_73579__$1;
(statearr_73583_73615[(2)] = null);

(statearr_73583_73615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (4))){
var inst_73547 = (state_73579[(9)]);
var inst_73547__$1 = (state_73579[(2)]);
var inst_73548 = (inst_73547__$1 == null);
var inst_73549 = cljs.core.not.call(null,inst_73548);
var state_73579__$1 = (function (){var statearr_73584 = state_73579;
(statearr_73584[(9)] = inst_73547__$1);

return statearr_73584;
})();
if(inst_73549){
var statearr_73585_73616 = state_73579__$1;
(statearr_73585_73616[(1)] = (5));

} else {
var statearr_73586_73617 = state_73579__$1;
(statearr_73586_73617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (15))){
var inst_73569 = (state_73579[(2)]);
var state_73579__$1 = state_73579;
var statearr_73587_73618 = state_73579__$1;
(statearr_73587_73618[(2)] = inst_73569);

(statearr_73587_73618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (13))){
var state_73579__$1 = state_73579;
var statearr_73588_73619 = state_73579__$1;
(statearr_73588_73619[(2)] = null);

(statearr_73588_73619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (6))){
var inst_73544 = (state_73579[(7)]);
var inst_73565 = (inst_73544 > (0));
var state_73579__$1 = state_73579;
if(cljs.core.truth_(inst_73565)){
var statearr_73589_73620 = state_73579__$1;
(statearr_73589_73620[(1)] = (12));

} else {
var statearr_73590_73621 = state_73579__$1;
(statearr_73590_73621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (3))){
var inst_73577 = (state_73579[(2)]);
var state_73579__$1 = state_73579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73579__$1,inst_73577);
} else {
if((state_val_73580 === (12))){
var inst_73543 = (state_73579[(8)]);
var inst_73567 = cljs.core.vec.call(null,inst_73543);
var state_73579__$1 = state_73579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73579__$1,(15),out,inst_73567);
} else {
if((state_val_73580 === (2))){
var state_73579__$1 = state_73579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73579__$1,(4),ch);
} else {
if((state_val_73580 === (11))){
var inst_73559 = (state_73579[(2)]);
var inst_73560 = (new Array(n));
var inst_73543 = inst_73560;
var inst_73544 = (0);
var state_73579__$1 = (function (){var statearr_73591 = state_73579;
(statearr_73591[(7)] = inst_73544);

(statearr_73591[(10)] = inst_73559);

(statearr_73591[(8)] = inst_73543);

return statearr_73591;
})();
var statearr_73592_73622 = state_73579__$1;
(statearr_73592_73622[(2)] = null);

(statearr_73592_73622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (9))){
var inst_73543 = (state_73579[(8)]);
var inst_73557 = cljs.core.vec.call(null,inst_73543);
var state_73579__$1 = state_73579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73579__$1,(11),out,inst_73557);
} else {
if((state_val_73580 === (5))){
var inst_73544 = (state_73579[(7)]);
var inst_73552 = (state_73579[(11)]);
var inst_73543 = (state_73579[(8)]);
var inst_73547 = (state_73579[(9)]);
var inst_73551 = (inst_73543[inst_73544] = inst_73547);
var inst_73552__$1 = (inst_73544 + (1));
var inst_73553 = (inst_73552__$1 < n);
var state_73579__$1 = (function (){var statearr_73593 = state_73579;
(statearr_73593[(11)] = inst_73552__$1);

(statearr_73593[(12)] = inst_73551);

return statearr_73593;
})();
if(cljs.core.truth_(inst_73553)){
var statearr_73594_73623 = state_73579__$1;
(statearr_73594_73623[(1)] = (8));

} else {
var statearr_73595_73624 = state_73579__$1;
(statearr_73595_73624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (14))){
var inst_73572 = (state_73579[(2)]);
var inst_73573 = cljs.core.async.close_BANG_.call(null,out);
var state_73579__$1 = (function (){var statearr_73597 = state_73579;
(statearr_73597[(13)] = inst_73572);

return statearr_73597;
})();
var statearr_73598_73625 = state_73579__$1;
(statearr_73598_73625[(2)] = inst_73573);

(statearr_73598_73625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (10))){
var inst_73563 = (state_73579[(2)]);
var state_73579__$1 = state_73579;
var statearr_73599_73626 = state_73579__$1;
(statearr_73599_73626[(2)] = inst_73563);

(statearr_73599_73626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73580 === (8))){
var inst_73552 = (state_73579[(11)]);
var inst_73543 = (state_73579[(8)]);
var tmp73596 = inst_73543;
var inst_73543__$1 = tmp73596;
var inst_73544 = inst_73552;
var state_73579__$1 = (function (){var statearr_73600 = state_73579;
(statearr_73600[(7)] = inst_73544);

(statearr_73600[(8)] = inst_73543__$1);

return statearr_73600;
})();
var statearr_73601_73627 = state_73579__$1;
(statearr_73601_73627[(2)] = null);

(statearr_73601_73627[(1)] = (2));


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
});})(c__27930__auto___73613,out))
;
return ((function (switch__27865__auto__,c__27930__auto___73613,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_73605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73605[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_73605[(1)] = (1));

return statearr_73605;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_73579){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73606){if((e73606 instanceof Object)){
var ex__27869__auto__ = e73606;
var statearr_73607_73628 = state_73579;
(statearr_73607_73628[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73629 = state_73579;
state_73579 = G__73629;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_73579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_73579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___73613,out))
})();
var state__27932__auto__ = (function (){var statearr_73608 = f__27931__auto__.call(null);
(statearr_73608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___73613);

return statearr_73608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___73613,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args73630 = [];
var len__25826__auto___73704 = arguments.length;
var i__25827__auto___73705 = (0);
while(true){
if((i__25827__auto___73705 < len__25826__auto___73704)){
args73630.push((arguments[i__25827__auto___73705]));

var G__73706 = (i__25827__auto___73705 + (1));
i__25827__auto___73705 = G__73706;
continue;
} else {
}
break;
}

var G__73632 = args73630.length;
switch (G__73632) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73630.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27930__auto___73708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___73708,out){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___73708,out){
return (function (state_73674){
var state_val_73675 = (state_73674[(1)]);
if((state_val_73675 === (7))){
var inst_73670 = (state_73674[(2)]);
var state_73674__$1 = state_73674;
var statearr_73676_73709 = state_73674__$1;
(statearr_73676_73709[(2)] = inst_73670);

(statearr_73676_73709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (1))){
var inst_73633 = [];
var inst_73634 = inst_73633;
var inst_73635 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_73674__$1 = (function (){var statearr_73677 = state_73674;
(statearr_73677[(7)] = inst_73634);

(statearr_73677[(8)] = inst_73635);

return statearr_73677;
})();
var statearr_73678_73710 = state_73674__$1;
(statearr_73678_73710[(2)] = null);

(statearr_73678_73710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (4))){
var inst_73638 = (state_73674[(9)]);
var inst_73638__$1 = (state_73674[(2)]);
var inst_73639 = (inst_73638__$1 == null);
var inst_73640 = cljs.core.not.call(null,inst_73639);
var state_73674__$1 = (function (){var statearr_73679 = state_73674;
(statearr_73679[(9)] = inst_73638__$1);

return statearr_73679;
})();
if(inst_73640){
var statearr_73680_73711 = state_73674__$1;
(statearr_73680_73711[(1)] = (5));

} else {
var statearr_73681_73712 = state_73674__$1;
(statearr_73681_73712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (15))){
var inst_73664 = (state_73674[(2)]);
var state_73674__$1 = state_73674;
var statearr_73682_73713 = state_73674__$1;
(statearr_73682_73713[(2)] = inst_73664);

(statearr_73682_73713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (13))){
var state_73674__$1 = state_73674;
var statearr_73683_73714 = state_73674__$1;
(statearr_73683_73714[(2)] = null);

(statearr_73683_73714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (6))){
var inst_73634 = (state_73674[(7)]);
var inst_73659 = inst_73634.length;
var inst_73660 = (inst_73659 > (0));
var state_73674__$1 = state_73674;
if(cljs.core.truth_(inst_73660)){
var statearr_73684_73715 = state_73674__$1;
(statearr_73684_73715[(1)] = (12));

} else {
var statearr_73685_73716 = state_73674__$1;
(statearr_73685_73716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (3))){
var inst_73672 = (state_73674[(2)]);
var state_73674__$1 = state_73674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73674__$1,inst_73672);
} else {
if((state_val_73675 === (12))){
var inst_73634 = (state_73674[(7)]);
var inst_73662 = cljs.core.vec.call(null,inst_73634);
var state_73674__$1 = state_73674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73674__$1,(15),out,inst_73662);
} else {
if((state_val_73675 === (2))){
var state_73674__$1 = state_73674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73674__$1,(4),ch);
} else {
if((state_val_73675 === (11))){
var inst_73638 = (state_73674[(9)]);
var inst_73642 = (state_73674[(10)]);
var inst_73652 = (state_73674[(2)]);
var inst_73653 = [];
var inst_73654 = inst_73653.push(inst_73638);
var inst_73634 = inst_73653;
var inst_73635 = inst_73642;
var state_73674__$1 = (function (){var statearr_73686 = state_73674;
(statearr_73686[(11)] = inst_73654);

(statearr_73686[(7)] = inst_73634);

(statearr_73686[(8)] = inst_73635);

(statearr_73686[(12)] = inst_73652);

return statearr_73686;
})();
var statearr_73687_73717 = state_73674__$1;
(statearr_73687_73717[(2)] = null);

(statearr_73687_73717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (9))){
var inst_73634 = (state_73674[(7)]);
var inst_73650 = cljs.core.vec.call(null,inst_73634);
var state_73674__$1 = state_73674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_73674__$1,(11),out,inst_73650);
} else {
if((state_val_73675 === (5))){
var inst_73638 = (state_73674[(9)]);
var inst_73642 = (state_73674[(10)]);
var inst_73635 = (state_73674[(8)]);
var inst_73642__$1 = f.call(null,inst_73638);
var inst_73643 = cljs.core._EQ_.call(null,inst_73642__$1,inst_73635);
var inst_73644 = cljs.core.keyword_identical_QMARK_.call(null,inst_73635,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_73645 = (inst_73643) || (inst_73644);
var state_73674__$1 = (function (){var statearr_73688 = state_73674;
(statearr_73688[(10)] = inst_73642__$1);

return statearr_73688;
})();
if(cljs.core.truth_(inst_73645)){
var statearr_73689_73718 = state_73674__$1;
(statearr_73689_73718[(1)] = (8));

} else {
var statearr_73690_73719 = state_73674__$1;
(statearr_73690_73719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (14))){
var inst_73667 = (state_73674[(2)]);
var inst_73668 = cljs.core.async.close_BANG_.call(null,out);
var state_73674__$1 = (function (){var statearr_73692 = state_73674;
(statearr_73692[(13)] = inst_73667);

return statearr_73692;
})();
var statearr_73693_73720 = state_73674__$1;
(statearr_73693_73720[(2)] = inst_73668);

(statearr_73693_73720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (10))){
var inst_73657 = (state_73674[(2)]);
var state_73674__$1 = state_73674;
var statearr_73694_73721 = state_73674__$1;
(statearr_73694_73721[(2)] = inst_73657);

(statearr_73694_73721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73675 === (8))){
var inst_73638 = (state_73674[(9)]);
var inst_73642 = (state_73674[(10)]);
var inst_73634 = (state_73674[(7)]);
var inst_73647 = inst_73634.push(inst_73638);
var tmp73691 = inst_73634;
var inst_73634__$1 = tmp73691;
var inst_73635 = inst_73642;
var state_73674__$1 = (function (){var statearr_73695 = state_73674;
(statearr_73695[(14)] = inst_73647);

(statearr_73695[(7)] = inst_73634__$1);

(statearr_73695[(8)] = inst_73635);

return statearr_73695;
})();
var statearr_73696_73722 = state_73674__$1;
(statearr_73696_73722[(2)] = null);

(statearr_73696_73722[(1)] = (2));


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
});})(c__27930__auto___73708,out))
;
return ((function (switch__27865__auto__,c__27930__auto___73708,out){
return (function() {
var cljs$core$async$state_machine__27866__auto__ = null;
var cljs$core$async$state_machine__27866__auto____0 = (function (){
var statearr_73700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73700[(0)] = cljs$core$async$state_machine__27866__auto__);

(statearr_73700[(1)] = (1));

return statearr_73700;
});
var cljs$core$async$state_machine__27866__auto____1 = (function (state_73674){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_73674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e73701){if((e73701 instanceof Object)){
var ex__27869__auto__ = e73701;
var statearr_73702_73723 = state_73674;
(statearr_73702_73723[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73724 = state_73674;
state_73674 = G__73724;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
cljs$core$async$state_machine__27866__auto__ = function(state_73674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27866__auto____1.call(this,state_73674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27866__auto____0;
cljs$core$async$state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27866__auto____1;
return cljs$core$async$state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___73708,out))
})();
var state__27932__auto__ = (function (){var statearr_73703 = f__27931__auto__.call(null);
(statearr_73703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___73708);

return statearr_73703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___73708,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1478402649384