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
var args27041 = [];
var len__25826__auto___27047 = arguments.length;
var i__25827__auto___27048 = (0);
while(true){
if((i__25827__auto___27048 < len__25826__auto___27047)){
args27041.push((arguments[i__25827__auto___27048]));

var G__27049 = (i__25827__auto___27048 + (1));
i__25827__auto___27048 = G__27049;
continue;
} else {
}
break;
}

var G__27043 = args27041.length;
switch (G__27043) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27041.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27044 = (function (f,blockable,meta27045){
this.f = f;
this.blockable = blockable;
this.meta27045 = meta27045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27046,meta27045__$1){
var self__ = this;
var _27046__$1 = this;
return (new cljs.core.async.t_cljs$core$async27044(self__.f,self__.blockable,meta27045__$1));
});

cljs.core.async.t_cljs$core$async27044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27046){
var self__ = this;
var _27046__$1 = this;
return self__.meta27045;
});

cljs.core.async.t_cljs$core$async27044.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27045","meta27045",-1734424248,null)], null);
});

cljs.core.async.t_cljs$core$async27044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27044";

cljs.core.async.t_cljs$core$async27044.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async27044");
});

cljs.core.async.__GT_t_cljs$core$async27044 = (function cljs$core$async$__GT_t_cljs$core$async27044(f__$1,blockable__$1,meta27045){
return (new cljs.core.async.t_cljs$core$async27044(f__$1,blockable__$1,meta27045));
});

}

return (new cljs.core.async.t_cljs$core$async27044(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27053 = [];
var len__25826__auto___27056 = arguments.length;
var i__25827__auto___27057 = (0);
while(true){
if((i__25827__auto___27057 < len__25826__auto___27056)){
args27053.push((arguments[i__25827__auto___27057]));

var G__27058 = (i__25827__auto___27057 + (1));
i__25827__auto___27057 = G__27058;
continue;
} else {
}
break;
}

var G__27055 = args27053.length;
switch (G__27055) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27053.length)].join('')));

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
var args27060 = [];
var len__25826__auto___27063 = arguments.length;
var i__25827__auto___27064 = (0);
while(true){
if((i__25827__auto___27064 < len__25826__auto___27063)){
args27060.push((arguments[i__25827__auto___27064]));

var G__27065 = (i__25827__auto___27064 + (1));
i__25827__auto___27064 = G__27065;
continue;
} else {
}
break;
}

var G__27062 = args27060.length;
switch (G__27062) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27060.length)].join('')));

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
var args27067 = [];
var len__25826__auto___27070 = arguments.length;
var i__25827__auto___27071 = (0);
while(true){
if((i__25827__auto___27071 < len__25826__auto___27070)){
args27067.push((arguments[i__25827__auto___27071]));

var G__27072 = (i__25827__auto___27071 + (1));
i__25827__auto___27071 = G__27072;
continue;
} else {
}
break;
}

var G__27069 = args27067.length;
switch (G__27069) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27067.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27074 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27074);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27074,ret){
return (function (){
return fn1.call(null,val_27074);
});})(val_27074,ret))
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
var args27075 = [];
var len__25826__auto___27078 = arguments.length;
var i__25827__auto___27079 = (0);
while(true){
if((i__25827__auto___27079 < len__25826__auto___27078)){
args27075.push((arguments[i__25827__auto___27079]));

var G__27080 = (i__25827__auto___27079 + (1));
i__25827__auto___27079 = G__27080;
continue;
} else {
}
break;
}

var G__27077 = args27075.length;
switch (G__27077) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27075.length)].join('')));

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
var n__25666__auto___27082 = n;
var x_27083 = (0);
while(true){
if((x_27083 < n__25666__auto___27082)){
(a[x_27083] = (0));

var G__27084 = (x_27083 + (1));
x_27083 = G__27084;
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

var G__27085 = (i + (1));
i = G__27085;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27089 = (function (alt_flag,flag,meta27090){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27090 = meta27090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27091,meta27090__$1){
var self__ = this;
var _27091__$1 = this;
return (new cljs.core.async.t_cljs$core$async27089(self__.alt_flag,self__.flag,meta27090__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27091){
var self__ = this;
var _27091__$1 = this;
return self__.meta27090;
});})(flag))
;

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27089.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27090","meta27090",-2058694666,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27089";

cljs.core.async.t_cljs$core$async27089.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async27089");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27089 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27089(alt_flag__$1,flag__$1,meta27090){
return (new cljs.core.async.t_cljs$core$async27089(alt_flag__$1,flag__$1,meta27090));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27089(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27095 = (function (alt_handler,flag,cb,meta27096){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27096 = meta27096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27097,meta27096__$1){
var self__ = this;
var _27097__$1 = this;
return (new cljs.core.async.t_cljs$core$async27095(self__.alt_handler,self__.flag,self__.cb,meta27096__$1));
});

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27097){
var self__ = this;
var _27097__$1 = this;
return self__.meta27096;
});

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27096","meta27096",-1283599147,null)], null);
});

cljs.core.async.t_cljs$core$async27095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27095";

cljs.core.async.t_cljs$core$async27095.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async27095");
});

cljs.core.async.__GT_t_cljs$core$async27095 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27095(alt_handler__$1,flag__$1,cb__$1,meta27096){
return (new cljs.core.async.t_cljs$core$async27095(alt_handler__$1,flag__$1,cb__$1,meta27096));
});

}

return (new cljs.core.async.t_cljs$core$async27095(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27098_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27098_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27099_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27099_SHARP_,port], null));
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
var G__27100 = (i + (1));
i = G__27100;
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
var len__25826__auto___27106 = arguments.length;
var i__25827__auto___27107 = (0);
while(true){
if((i__25827__auto___27107 < len__25826__auto___27106)){
args__25833__auto__.push((arguments[i__25827__auto___27107]));

var G__27108 = (i__25827__auto___27107 + (1));
i__25827__auto___27107 = G__27108;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27103){
var map__27104 = p__27103;
var map__27104__$1 = ((((!((map__27104 == null)))?((((map__27104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27104):map__27104);
var opts = map__27104__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27101){
var G__27102 = cljs.core.first.call(null,seq27101);
var seq27101__$1 = cljs.core.next.call(null,seq27101);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27102,seq27101__$1);
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
var args27109 = [];
var len__25826__auto___27159 = arguments.length;
var i__25827__auto___27160 = (0);
while(true){
if((i__25827__auto___27160 < len__25826__auto___27159)){
args27109.push((arguments[i__25827__auto___27160]));

var G__27161 = (i__25827__auto___27160 + (1));
i__25827__auto___27160 = G__27161;
continue;
} else {
}
break;
}

var G__27111 = args27109.length;
switch (G__27111) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27109.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26996__auto___27163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___27163){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___27163){
return (function (state_27135){
var state_val_27136 = (state_27135[(1)]);
if((state_val_27136 === (7))){
var inst_27131 = (state_27135[(2)]);
var state_27135__$1 = state_27135;
var statearr_27137_27164 = state_27135__$1;
(statearr_27137_27164[(2)] = inst_27131);

(statearr_27137_27164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (1))){
var state_27135__$1 = state_27135;
var statearr_27138_27165 = state_27135__$1;
(statearr_27138_27165[(2)] = null);

(statearr_27138_27165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (4))){
var inst_27114 = (state_27135[(7)]);
var inst_27114__$1 = (state_27135[(2)]);
var inst_27115 = (inst_27114__$1 == null);
var state_27135__$1 = (function (){var statearr_27139 = state_27135;
(statearr_27139[(7)] = inst_27114__$1);

return statearr_27139;
})();
if(cljs.core.truth_(inst_27115)){
var statearr_27140_27166 = state_27135__$1;
(statearr_27140_27166[(1)] = (5));

} else {
var statearr_27141_27167 = state_27135__$1;
(statearr_27141_27167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (13))){
var state_27135__$1 = state_27135;
var statearr_27142_27168 = state_27135__$1;
(statearr_27142_27168[(2)] = null);

(statearr_27142_27168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (6))){
var inst_27114 = (state_27135[(7)]);
var state_27135__$1 = state_27135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27135__$1,(11),to,inst_27114);
} else {
if((state_val_27136 === (3))){
var inst_27133 = (state_27135[(2)]);
var state_27135__$1 = state_27135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27135__$1,inst_27133);
} else {
if((state_val_27136 === (12))){
var state_27135__$1 = state_27135;
var statearr_27143_27169 = state_27135__$1;
(statearr_27143_27169[(2)] = null);

(statearr_27143_27169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (2))){
var state_27135__$1 = state_27135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27135__$1,(4),from);
} else {
if((state_val_27136 === (11))){
var inst_27124 = (state_27135[(2)]);
var state_27135__$1 = state_27135;
if(cljs.core.truth_(inst_27124)){
var statearr_27144_27170 = state_27135__$1;
(statearr_27144_27170[(1)] = (12));

} else {
var statearr_27145_27171 = state_27135__$1;
(statearr_27145_27171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (9))){
var state_27135__$1 = state_27135;
var statearr_27146_27172 = state_27135__$1;
(statearr_27146_27172[(2)] = null);

(statearr_27146_27172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (5))){
var state_27135__$1 = state_27135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27147_27173 = state_27135__$1;
(statearr_27147_27173[(1)] = (8));

} else {
var statearr_27148_27174 = state_27135__$1;
(statearr_27148_27174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (14))){
var inst_27129 = (state_27135[(2)]);
var state_27135__$1 = state_27135;
var statearr_27149_27175 = state_27135__$1;
(statearr_27149_27175[(2)] = inst_27129);

(statearr_27149_27175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (10))){
var inst_27121 = (state_27135[(2)]);
var state_27135__$1 = state_27135;
var statearr_27150_27176 = state_27135__$1;
(statearr_27150_27176[(2)] = inst_27121);

(statearr_27150_27176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27136 === (8))){
var inst_27118 = cljs.core.async.close_BANG_.call(null,to);
var state_27135__$1 = state_27135;
var statearr_27151_27177 = state_27135__$1;
(statearr_27151_27177[(2)] = inst_27118);

(statearr_27151_27177[(1)] = (10));


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
});})(c__26996__auto___27163))
;
return ((function (switch__26884__auto__,c__26996__auto___27163){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_27155 = [null,null,null,null,null,null,null,null];
(statearr_27155[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_27155[(1)] = (1));

return statearr_27155;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_27135){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27156){if((e27156 instanceof Object)){
var ex__26888__auto__ = e27156;
var statearr_27157_27178 = state_27135;
(statearr_27157_27178[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27179 = state_27135;
state_27135 = G__27179;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_27135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_27135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___27163))
})();
var state__26998__auto__ = (function (){var statearr_27158 = f__26997__auto__.call(null);
(statearr_27158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___27163);

return statearr_27158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___27163))
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
return (function (p__27367){
var vec__27368 = p__27367;
var v = cljs.core.nth.call(null,vec__27368,(0),null);
var p = cljs.core.nth.call(null,vec__27368,(1),null);
var job = vec__27368;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26996__auto___27554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___27554,res,vec__27368,v,p,job,jobs,results){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___27554,res,vec__27368,v,p,job,jobs,results){
return (function (state_27375){
var state_val_27376 = (state_27375[(1)]);
if((state_val_27376 === (1))){
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27375__$1,(2),res,v);
} else {
if((state_val_27376 === (2))){
var inst_27372 = (state_27375[(2)]);
var inst_27373 = cljs.core.async.close_BANG_.call(null,res);
var state_27375__$1 = (function (){var statearr_27377 = state_27375;
(statearr_27377[(7)] = inst_27372);

return statearr_27377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27375__$1,inst_27373);
} else {
return null;
}
}
});})(c__26996__auto___27554,res,vec__27368,v,p,job,jobs,results))
;
return ((function (switch__26884__auto__,c__26996__auto___27554,res,vec__27368,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0 = (function (){
var statearr_27381 = [null,null,null,null,null,null,null,null];
(statearr_27381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__);

(statearr_27381[(1)] = (1));

return statearr_27381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1 = (function (state_27375){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27382){if((e27382 instanceof Object)){
var ex__26888__auto__ = e27382;
var statearr_27383_27555 = state_27375;
(statearr_27383_27555[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27556 = state_27375;
state_27375 = G__27556;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = function(state_27375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1.call(this,state_27375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___27554,res,vec__27368,v,p,job,jobs,results))
})();
var state__26998__auto__ = (function (){var statearr_27384 = f__26997__auto__.call(null);
(statearr_27384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___27554);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___27554,res,vec__27368,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27385){
var vec__27386 = p__27385;
var v = cljs.core.nth.call(null,vec__27386,(0),null);
var p = cljs.core.nth.call(null,vec__27386,(1),null);
var job = vec__27386;
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
var n__25666__auto___27557 = n;
var __27558 = (0);
while(true){
if((__27558 < n__25666__auto___27557)){
var G__27389_27559 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27389_27559) {
case "compute":
var c__26996__auto___27561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27558,c__26996__auto___27561,G__27389_27559,n__25666__auto___27557,jobs,results,process,async){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (__27558,c__26996__auto___27561,G__27389_27559,n__25666__auto___27557,jobs,results,process,async){
return (function (state_27402){
var state_val_27403 = (state_27402[(1)]);
if((state_val_27403 === (1))){
var state_27402__$1 = state_27402;
var statearr_27404_27562 = state_27402__$1;
(statearr_27404_27562[(2)] = null);

(statearr_27404_27562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (2))){
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27402__$1,(4),jobs);
} else {
if((state_val_27403 === (3))){
var inst_27400 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else {
if((state_val_27403 === (4))){
var inst_27392 = (state_27402[(2)]);
var inst_27393 = process.call(null,inst_27392);
var state_27402__$1 = state_27402;
if(cljs.core.truth_(inst_27393)){
var statearr_27405_27563 = state_27402__$1;
(statearr_27405_27563[(1)] = (5));

} else {
var statearr_27406_27564 = state_27402__$1;
(statearr_27406_27564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (5))){
var state_27402__$1 = state_27402;
var statearr_27407_27565 = state_27402__$1;
(statearr_27407_27565[(2)] = null);

(statearr_27407_27565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (6))){
var state_27402__$1 = state_27402;
var statearr_27408_27566 = state_27402__$1;
(statearr_27408_27566[(2)] = null);

(statearr_27408_27566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (7))){
var inst_27398 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27409_27567 = state_27402__$1;
(statearr_27409_27567[(2)] = inst_27398);

(statearr_27409_27567[(1)] = (3));


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
});})(__27558,c__26996__auto___27561,G__27389_27559,n__25666__auto___27557,jobs,results,process,async))
;
return ((function (__27558,switch__26884__auto__,c__26996__auto___27561,G__27389_27559,n__25666__auto___27557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0 = (function (){
var statearr_27413 = [null,null,null,null,null,null,null];
(statearr_27413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__);

(statearr_27413[(1)] = (1));

return statearr_27413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1 = (function (state_27402){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27414){if((e27414 instanceof Object)){
var ex__26888__auto__ = e27414;
var statearr_27415_27568 = state_27402;
(statearr_27415_27568[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27569 = state_27402;
state_27402 = G__27569;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__;
})()
;})(__27558,switch__26884__auto__,c__26996__auto___27561,G__27389_27559,n__25666__auto___27557,jobs,results,process,async))
})();
var state__26998__auto__ = (function (){var statearr_27416 = f__26997__auto__.call(null);
(statearr_27416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___27561);

return statearr_27416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(__27558,c__26996__auto___27561,G__27389_27559,n__25666__auto___27557,jobs,results,process,async))
);


break;
case "async":
var c__26996__auto___27570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27558,c__26996__auto___27570,G__27389_27559,n__25666__auto___27557,jobs,results,process,async){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (__27558,c__26996__auto___27570,G__27389_27559,n__25666__auto___27557,jobs,results,process,async){
return (function (state_27429){
var state_val_27430 = (state_27429[(1)]);
if((state_val_27430 === (1))){
var state_27429__$1 = state_27429;
var statearr_27431_27571 = state_27429__$1;
(statearr_27431_27571[(2)] = null);

(statearr_27431_27571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (2))){
var state_27429__$1 = state_27429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27429__$1,(4),jobs);
} else {
if((state_val_27430 === (3))){
var inst_27427 = (state_27429[(2)]);
var state_27429__$1 = state_27429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27429__$1,inst_27427);
} else {
if((state_val_27430 === (4))){
var inst_27419 = (state_27429[(2)]);
var inst_27420 = async.call(null,inst_27419);
var state_27429__$1 = state_27429;
if(cljs.core.truth_(inst_27420)){
var statearr_27432_27572 = state_27429__$1;
(statearr_27432_27572[(1)] = (5));

} else {
var statearr_27433_27573 = state_27429__$1;
(statearr_27433_27573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (5))){
var state_27429__$1 = state_27429;
var statearr_27434_27574 = state_27429__$1;
(statearr_27434_27574[(2)] = null);

(statearr_27434_27574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (6))){
var state_27429__$1 = state_27429;
var statearr_27435_27575 = state_27429__$1;
(statearr_27435_27575[(2)] = null);

(statearr_27435_27575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (7))){
var inst_27425 = (state_27429[(2)]);
var state_27429__$1 = state_27429;
var statearr_27436_27576 = state_27429__$1;
(statearr_27436_27576[(2)] = inst_27425);

(statearr_27436_27576[(1)] = (3));


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
});})(__27558,c__26996__auto___27570,G__27389_27559,n__25666__auto___27557,jobs,results,process,async))
;
return ((function (__27558,switch__26884__auto__,c__26996__auto___27570,G__27389_27559,n__25666__auto___27557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0 = (function (){
var statearr_27440 = [null,null,null,null,null,null,null];
(statearr_27440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__);

(statearr_27440[(1)] = (1));

return statearr_27440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1 = (function (state_27429){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27441){if((e27441 instanceof Object)){
var ex__26888__auto__ = e27441;
var statearr_27442_27577 = state_27429;
(statearr_27442_27577[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27578 = state_27429;
state_27429 = G__27578;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = function(state_27429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1.call(this,state_27429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__;
})()
;})(__27558,switch__26884__auto__,c__26996__auto___27570,G__27389_27559,n__25666__auto___27557,jobs,results,process,async))
})();
var state__26998__auto__ = (function (){var statearr_27443 = f__26997__auto__.call(null);
(statearr_27443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___27570);

return statearr_27443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(__27558,c__26996__auto___27570,G__27389_27559,n__25666__auto___27557,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27579 = (__27558 + (1));
__27558 = G__27579;
continue;
} else {
}
break;
}

var c__26996__auto___27580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___27580,jobs,results,process,async){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___27580,jobs,results,process,async){
return (function (state_27465){
var state_val_27466 = (state_27465[(1)]);
if((state_val_27466 === (1))){
var state_27465__$1 = state_27465;
var statearr_27467_27581 = state_27465__$1;
(statearr_27467_27581[(2)] = null);

(statearr_27467_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (2))){
var state_27465__$1 = state_27465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27465__$1,(4),from);
} else {
if((state_val_27466 === (3))){
var inst_27463 = (state_27465[(2)]);
var state_27465__$1 = state_27465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27465__$1,inst_27463);
} else {
if((state_val_27466 === (4))){
var inst_27446 = (state_27465[(7)]);
var inst_27446__$1 = (state_27465[(2)]);
var inst_27447 = (inst_27446__$1 == null);
var state_27465__$1 = (function (){var statearr_27468 = state_27465;
(statearr_27468[(7)] = inst_27446__$1);

return statearr_27468;
})();
if(cljs.core.truth_(inst_27447)){
var statearr_27469_27582 = state_27465__$1;
(statearr_27469_27582[(1)] = (5));

} else {
var statearr_27470_27583 = state_27465__$1;
(statearr_27470_27583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (5))){
var inst_27449 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27465__$1 = state_27465;
var statearr_27471_27584 = state_27465__$1;
(statearr_27471_27584[(2)] = inst_27449);

(statearr_27471_27584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (6))){
var inst_27446 = (state_27465[(7)]);
var inst_27451 = (state_27465[(8)]);
var inst_27451__$1 = cljs.core.async.chan.call(null,(1));
var inst_27452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27453 = [inst_27446,inst_27451__$1];
var inst_27454 = (new cljs.core.PersistentVector(null,2,(5),inst_27452,inst_27453,null));
var state_27465__$1 = (function (){var statearr_27472 = state_27465;
(statearr_27472[(8)] = inst_27451__$1);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27465__$1,(8),jobs,inst_27454);
} else {
if((state_val_27466 === (7))){
var inst_27461 = (state_27465[(2)]);
var state_27465__$1 = state_27465;
var statearr_27473_27585 = state_27465__$1;
(statearr_27473_27585[(2)] = inst_27461);

(statearr_27473_27585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (8))){
var inst_27451 = (state_27465[(8)]);
var inst_27456 = (state_27465[(2)]);
var state_27465__$1 = (function (){var statearr_27474 = state_27465;
(statearr_27474[(9)] = inst_27456);

return statearr_27474;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27465__$1,(9),results,inst_27451);
} else {
if((state_val_27466 === (9))){
var inst_27458 = (state_27465[(2)]);
var state_27465__$1 = (function (){var statearr_27475 = state_27465;
(statearr_27475[(10)] = inst_27458);

return statearr_27475;
})();
var statearr_27476_27586 = state_27465__$1;
(statearr_27476_27586[(2)] = null);

(statearr_27476_27586[(1)] = (2));


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
});})(c__26996__auto___27580,jobs,results,process,async))
;
return ((function (switch__26884__auto__,c__26996__auto___27580,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0 = (function (){
var statearr_27480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__);

(statearr_27480[(1)] = (1));

return statearr_27480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1 = (function (state_27465){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27481){if((e27481 instanceof Object)){
var ex__26888__auto__ = e27481;
var statearr_27482_27587 = state_27465;
(statearr_27482_27587[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27588 = state_27465;
state_27465 = G__27588;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = function(state_27465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1.call(this,state_27465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___27580,jobs,results,process,async))
})();
var state__26998__auto__ = (function (){var statearr_27483 = f__26997__auto__.call(null);
(statearr_27483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___27580);

return statearr_27483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___27580,jobs,results,process,async))
);


var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__,jobs,results,process,async){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__,jobs,results,process,async){
return (function (state_27521){
var state_val_27522 = (state_27521[(1)]);
if((state_val_27522 === (7))){
var inst_27517 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27523_27589 = state_27521__$1;
(statearr_27523_27589[(2)] = inst_27517);

(statearr_27523_27589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (20))){
var state_27521__$1 = state_27521;
var statearr_27524_27590 = state_27521__$1;
(statearr_27524_27590[(2)] = null);

(statearr_27524_27590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (1))){
var state_27521__$1 = state_27521;
var statearr_27525_27591 = state_27521__$1;
(statearr_27525_27591[(2)] = null);

(statearr_27525_27591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (4))){
var inst_27486 = (state_27521[(7)]);
var inst_27486__$1 = (state_27521[(2)]);
var inst_27487 = (inst_27486__$1 == null);
var state_27521__$1 = (function (){var statearr_27526 = state_27521;
(statearr_27526[(7)] = inst_27486__$1);

return statearr_27526;
})();
if(cljs.core.truth_(inst_27487)){
var statearr_27527_27592 = state_27521__$1;
(statearr_27527_27592[(1)] = (5));

} else {
var statearr_27528_27593 = state_27521__$1;
(statearr_27528_27593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (15))){
var inst_27499 = (state_27521[(8)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27521__$1,(18),to,inst_27499);
} else {
if((state_val_27522 === (21))){
var inst_27512 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27529_27594 = state_27521__$1;
(statearr_27529_27594[(2)] = inst_27512);

(statearr_27529_27594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (13))){
var inst_27514 = (state_27521[(2)]);
var state_27521__$1 = (function (){var statearr_27530 = state_27521;
(statearr_27530[(9)] = inst_27514);

return statearr_27530;
})();
var statearr_27531_27595 = state_27521__$1;
(statearr_27531_27595[(2)] = null);

(statearr_27531_27595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (6))){
var inst_27486 = (state_27521[(7)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27521__$1,(11),inst_27486);
} else {
if((state_val_27522 === (17))){
var inst_27507 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
if(cljs.core.truth_(inst_27507)){
var statearr_27532_27596 = state_27521__$1;
(statearr_27532_27596[(1)] = (19));

} else {
var statearr_27533_27597 = state_27521__$1;
(statearr_27533_27597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (3))){
var inst_27519 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27521__$1,inst_27519);
} else {
if((state_val_27522 === (12))){
var inst_27496 = (state_27521[(10)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27521__$1,(14),inst_27496);
} else {
if((state_val_27522 === (2))){
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27521__$1,(4),results);
} else {
if((state_val_27522 === (19))){
var state_27521__$1 = state_27521;
var statearr_27534_27598 = state_27521__$1;
(statearr_27534_27598[(2)] = null);

(statearr_27534_27598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (11))){
var inst_27496 = (state_27521[(2)]);
var state_27521__$1 = (function (){var statearr_27535 = state_27521;
(statearr_27535[(10)] = inst_27496);

return statearr_27535;
})();
var statearr_27536_27599 = state_27521__$1;
(statearr_27536_27599[(2)] = null);

(statearr_27536_27599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (9))){
var state_27521__$1 = state_27521;
var statearr_27537_27600 = state_27521__$1;
(statearr_27537_27600[(2)] = null);

(statearr_27537_27600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (5))){
var state_27521__$1 = state_27521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27538_27601 = state_27521__$1;
(statearr_27538_27601[(1)] = (8));

} else {
var statearr_27539_27602 = state_27521__$1;
(statearr_27539_27602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (14))){
var inst_27501 = (state_27521[(11)]);
var inst_27499 = (state_27521[(8)]);
var inst_27499__$1 = (state_27521[(2)]);
var inst_27500 = (inst_27499__$1 == null);
var inst_27501__$1 = cljs.core.not.call(null,inst_27500);
var state_27521__$1 = (function (){var statearr_27540 = state_27521;
(statearr_27540[(11)] = inst_27501__$1);

(statearr_27540[(8)] = inst_27499__$1);

return statearr_27540;
})();
if(inst_27501__$1){
var statearr_27541_27603 = state_27521__$1;
(statearr_27541_27603[(1)] = (15));

} else {
var statearr_27542_27604 = state_27521__$1;
(statearr_27542_27604[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (16))){
var inst_27501 = (state_27521[(11)]);
var state_27521__$1 = state_27521;
var statearr_27543_27605 = state_27521__$1;
(statearr_27543_27605[(2)] = inst_27501);

(statearr_27543_27605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (10))){
var inst_27493 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27544_27606 = state_27521__$1;
(statearr_27544_27606[(2)] = inst_27493);

(statearr_27544_27606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (18))){
var inst_27504 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27545_27607 = state_27521__$1;
(statearr_27545_27607[(2)] = inst_27504);

(statearr_27545_27607[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (8))){
var inst_27490 = cljs.core.async.close_BANG_.call(null,to);
var state_27521__$1 = state_27521;
var statearr_27546_27608 = state_27521__$1;
(statearr_27546_27608[(2)] = inst_27490);

(statearr_27546_27608[(1)] = (10));


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
});})(c__26996__auto__,jobs,results,process,async))
;
return ((function (switch__26884__auto__,c__26996__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0 = (function (){
var statearr_27550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__);

(statearr_27550[(1)] = (1));

return statearr_27550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1 = (function (state_27521){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27551){if((e27551 instanceof Object)){
var ex__26888__auto__ = e27551;
var statearr_27552_27609 = state_27521;
(statearr_27552_27609[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27610 = state_27521;
state_27521 = G__27610;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__ = function(state_27521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1.call(this,state_27521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26885__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__,jobs,results,process,async))
})();
var state__26998__auto__ = (function (){var statearr_27553 = f__26997__auto__.call(null);
(statearr_27553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_27553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__,jobs,results,process,async))
);

return c__26996__auto__;
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
var args27611 = [];
var len__25826__auto___27614 = arguments.length;
var i__25827__auto___27615 = (0);
while(true){
if((i__25827__auto___27615 < len__25826__auto___27614)){
args27611.push((arguments[i__25827__auto___27615]));

var G__27616 = (i__25827__auto___27615 + (1));
i__25827__auto___27615 = G__27616;
continue;
} else {
}
break;
}

var G__27613 = args27611.length;
switch (G__27613) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27611.length)].join('')));

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
var args27618 = [];
var len__25826__auto___27621 = arguments.length;
var i__25827__auto___27622 = (0);
while(true){
if((i__25827__auto___27622 < len__25826__auto___27621)){
args27618.push((arguments[i__25827__auto___27622]));

var G__27623 = (i__25827__auto___27622 + (1));
i__25827__auto___27622 = G__27623;
continue;
} else {
}
break;
}

var G__27620 = args27618.length;
switch (G__27620) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27618.length)].join('')));

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
var args27625 = [];
var len__25826__auto___27678 = arguments.length;
var i__25827__auto___27679 = (0);
while(true){
if((i__25827__auto___27679 < len__25826__auto___27678)){
args27625.push((arguments[i__25827__auto___27679]));

var G__27680 = (i__25827__auto___27679 + (1));
i__25827__auto___27679 = G__27680;
continue;
} else {
}
break;
}

var G__27627 = args27625.length;
switch (G__27627) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27625.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26996__auto___27682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___27682,tc,fc){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___27682,tc,fc){
return (function (state_27653){
var state_val_27654 = (state_27653[(1)]);
if((state_val_27654 === (7))){
var inst_27649 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27655_27683 = state_27653__$1;
(statearr_27655_27683[(2)] = inst_27649);

(statearr_27655_27683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (1))){
var state_27653__$1 = state_27653;
var statearr_27656_27684 = state_27653__$1;
(statearr_27656_27684[(2)] = null);

(statearr_27656_27684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (4))){
var inst_27630 = (state_27653[(7)]);
var inst_27630__$1 = (state_27653[(2)]);
var inst_27631 = (inst_27630__$1 == null);
var state_27653__$1 = (function (){var statearr_27657 = state_27653;
(statearr_27657[(7)] = inst_27630__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27631)){
var statearr_27658_27685 = state_27653__$1;
(statearr_27658_27685[(1)] = (5));

} else {
var statearr_27659_27686 = state_27653__$1;
(statearr_27659_27686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (13))){
var state_27653__$1 = state_27653;
var statearr_27660_27687 = state_27653__$1;
(statearr_27660_27687[(2)] = null);

(statearr_27660_27687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (6))){
var inst_27630 = (state_27653[(7)]);
var inst_27636 = p.call(null,inst_27630);
var state_27653__$1 = state_27653;
if(cljs.core.truth_(inst_27636)){
var statearr_27661_27688 = state_27653__$1;
(statearr_27661_27688[(1)] = (9));

} else {
var statearr_27662_27689 = state_27653__$1;
(statearr_27662_27689[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (3))){
var inst_27651 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else {
if((state_val_27654 === (12))){
var state_27653__$1 = state_27653;
var statearr_27663_27690 = state_27653__$1;
(statearr_27663_27690[(2)] = null);

(statearr_27663_27690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (2))){
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(4),ch);
} else {
if((state_val_27654 === (11))){
var inst_27630 = (state_27653[(7)]);
var inst_27640 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27653__$1,(8),inst_27640,inst_27630);
} else {
if((state_val_27654 === (9))){
var state_27653__$1 = state_27653;
var statearr_27664_27691 = state_27653__$1;
(statearr_27664_27691[(2)] = tc);

(statearr_27664_27691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (5))){
var inst_27633 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27634 = cljs.core.async.close_BANG_.call(null,fc);
var state_27653__$1 = (function (){var statearr_27665 = state_27653;
(statearr_27665[(8)] = inst_27633);

return statearr_27665;
})();
var statearr_27666_27692 = state_27653__$1;
(statearr_27666_27692[(2)] = inst_27634);

(statearr_27666_27692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (14))){
var inst_27647 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27667_27693 = state_27653__$1;
(statearr_27667_27693[(2)] = inst_27647);

(statearr_27667_27693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (10))){
var state_27653__$1 = state_27653;
var statearr_27668_27694 = state_27653__$1;
(statearr_27668_27694[(2)] = fc);

(statearr_27668_27694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (8))){
var inst_27642 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
if(cljs.core.truth_(inst_27642)){
var statearr_27669_27695 = state_27653__$1;
(statearr_27669_27695[(1)] = (12));

} else {
var statearr_27670_27696 = state_27653__$1;
(statearr_27670_27696[(1)] = (13));

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
});})(c__26996__auto___27682,tc,fc))
;
return ((function (switch__26884__auto__,c__26996__auto___27682,tc,fc){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_27674 = [null,null,null,null,null,null,null,null,null];
(statearr_27674[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_27674[(1)] = (1));

return statearr_27674;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_27653){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27675){if((e27675 instanceof Object)){
var ex__26888__auto__ = e27675;
var statearr_27676_27697 = state_27653;
(statearr_27676_27697[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27698 = state_27653;
state_27653 = G__27698;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___27682,tc,fc))
})();
var state__26998__auto__ = (function (){var statearr_27677 = f__26997__auto__.call(null);
(statearr_27677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___27682);

return statearr_27677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___27682,tc,fc))
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
var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__){
return (function (state_27762){
var state_val_27763 = (state_27762[(1)]);
if((state_val_27763 === (7))){
var inst_27758 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
var statearr_27764_27785 = state_27762__$1;
(statearr_27764_27785[(2)] = inst_27758);

(statearr_27764_27785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (1))){
var inst_27742 = init;
var state_27762__$1 = (function (){var statearr_27765 = state_27762;
(statearr_27765[(7)] = inst_27742);

return statearr_27765;
})();
var statearr_27766_27786 = state_27762__$1;
(statearr_27766_27786[(2)] = null);

(statearr_27766_27786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (4))){
var inst_27745 = (state_27762[(8)]);
var inst_27745__$1 = (state_27762[(2)]);
var inst_27746 = (inst_27745__$1 == null);
var state_27762__$1 = (function (){var statearr_27767 = state_27762;
(statearr_27767[(8)] = inst_27745__$1);

return statearr_27767;
})();
if(cljs.core.truth_(inst_27746)){
var statearr_27768_27787 = state_27762__$1;
(statearr_27768_27787[(1)] = (5));

} else {
var statearr_27769_27788 = state_27762__$1;
(statearr_27769_27788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (6))){
var inst_27745 = (state_27762[(8)]);
var inst_27742 = (state_27762[(7)]);
var inst_27749 = (state_27762[(9)]);
var inst_27749__$1 = f.call(null,inst_27742,inst_27745);
var inst_27750 = cljs.core.reduced_QMARK_.call(null,inst_27749__$1);
var state_27762__$1 = (function (){var statearr_27770 = state_27762;
(statearr_27770[(9)] = inst_27749__$1);

return statearr_27770;
})();
if(inst_27750){
var statearr_27771_27789 = state_27762__$1;
(statearr_27771_27789[(1)] = (8));

} else {
var statearr_27772_27790 = state_27762__$1;
(statearr_27772_27790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (3))){
var inst_27760 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27762__$1,inst_27760);
} else {
if((state_val_27763 === (2))){
var state_27762__$1 = state_27762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27762__$1,(4),ch);
} else {
if((state_val_27763 === (9))){
var inst_27749 = (state_27762[(9)]);
var inst_27742 = inst_27749;
var state_27762__$1 = (function (){var statearr_27773 = state_27762;
(statearr_27773[(7)] = inst_27742);

return statearr_27773;
})();
var statearr_27774_27791 = state_27762__$1;
(statearr_27774_27791[(2)] = null);

(statearr_27774_27791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (5))){
var inst_27742 = (state_27762[(7)]);
var state_27762__$1 = state_27762;
var statearr_27775_27792 = state_27762__$1;
(statearr_27775_27792[(2)] = inst_27742);

(statearr_27775_27792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (10))){
var inst_27756 = (state_27762[(2)]);
var state_27762__$1 = state_27762;
var statearr_27776_27793 = state_27762__$1;
(statearr_27776_27793[(2)] = inst_27756);

(statearr_27776_27793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27763 === (8))){
var inst_27749 = (state_27762[(9)]);
var inst_27752 = cljs.core.deref.call(null,inst_27749);
var state_27762__$1 = state_27762;
var statearr_27777_27794 = state_27762__$1;
(statearr_27777_27794[(2)] = inst_27752);

(statearr_27777_27794[(1)] = (10));


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
});})(c__26996__auto__))
;
return ((function (switch__26884__auto__,c__26996__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26885__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26885__auto____0 = (function (){
var statearr_27781 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27781[(0)] = cljs$core$async$reduce_$_state_machine__26885__auto__);

(statearr_27781[(1)] = (1));

return statearr_27781;
});
var cljs$core$async$reduce_$_state_machine__26885__auto____1 = (function (state_27762){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27782){if((e27782 instanceof Object)){
var ex__26888__auto__ = e27782;
var statearr_27783_27795 = state_27762;
(statearr_27783_27795[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27796 = state_27762;
state_27762 = G__27796;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26885__auto__ = function(state_27762){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26885__auto____1.call(this,state_27762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26885__auto____0;
cljs$core$async$reduce_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26885__auto____1;
return cljs$core$async$reduce_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__))
})();
var state__26998__auto__ = (function (){var statearr_27784 = f__26997__auto__.call(null);
(statearr_27784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_27784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__))
);

return c__26996__auto__;
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
var args27797 = [];
var len__25826__auto___27849 = arguments.length;
var i__25827__auto___27850 = (0);
while(true){
if((i__25827__auto___27850 < len__25826__auto___27849)){
args27797.push((arguments[i__25827__auto___27850]));

var G__27851 = (i__25827__auto___27850 + (1));
i__25827__auto___27850 = G__27851;
continue;
} else {
}
break;
}

var G__27799 = args27797.length;
switch (G__27799) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27797.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__){
return (function (state_27824){
var state_val_27825 = (state_27824[(1)]);
if((state_val_27825 === (7))){
var inst_27806 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27826_27853 = state_27824__$1;
(statearr_27826_27853[(2)] = inst_27806);

(statearr_27826_27853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (1))){
var inst_27800 = cljs.core.seq.call(null,coll);
var inst_27801 = inst_27800;
var state_27824__$1 = (function (){var statearr_27827 = state_27824;
(statearr_27827[(7)] = inst_27801);

return statearr_27827;
})();
var statearr_27828_27854 = state_27824__$1;
(statearr_27828_27854[(2)] = null);

(statearr_27828_27854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (4))){
var inst_27801 = (state_27824[(7)]);
var inst_27804 = cljs.core.first.call(null,inst_27801);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27824__$1,(7),ch,inst_27804);
} else {
if((state_val_27825 === (13))){
var inst_27818 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27829_27855 = state_27824__$1;
(statearr_27829_27855[(2)] = inst_27818);

(statearr_27829_27855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (6))){
var inst_27809 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
if(cljs.core.truth_(inst_27809)){
var statearr_27830_27856 = state_27824__$1;
(statearr_27830_27856[(1)] = (8));

} else {
var statearr_27831_27857 = state_27824__$1;
(statearr_27831_27857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (3))){
var inst_27822 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27824__$1,inst_27822);
} else {
if((state_val_27825 === (12))){
var state_27824__$1 = state_27824;
var statearr_27832_27858 = state_27824__$1;
(statearr_27832_27858[(2)] = null);

(statearr_27832_27858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (2))){
var inst_27801 = (state_27824[(7)]);
var state_27824__$1 = state_27824;
if(cljs.core.truth_(inst_27801)){
var statearr_27833_27859 = state_27824__$1;
(statearr_27833_27859[(1)] = (4));

} else {
var statearr_27834_27860 = state_27824__$1;
(statearr_27834_27860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (11))){
var inst_27815 = cljs.core.async.close_BANG_.call(null,ch);
var state_27824__$1 = state_27824;
var statearr_27835_27861 = state_27824__$1;
(statearr_27835_27861[(2)] = inst_27815);

(statearr_27835_27861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (9))){
var state_27824__$1 = state_27824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27836_27862 = state_27824__$1;
(statearr_27836_27862[(1)] = (11));

} else {
var statearr_27837_27863 = state_27824__$1;
(statearr_27837_27863[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (5))){
var inst_27801 = (state_27824[(7)]);
var state_27824__$1 = state_27824;
var statearr_27838_27864 = state_27824__$1;
(statearr_27838_27864[(2)] = inst_27801);

(statearr_27838_27864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (10))){
var inst_27820 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27839_27865 = state_27824__$1;
(statearr_27839_27865[(2)] = inst_27820);

(statearr_27839_27865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (8))){
var inst_27801 = (state_27824[(7)]);
var inst_27811 = cljs.core.next.call(null,inst_27801);
var inst_27801__$1 = inst_27811;
var state_27824__$1 = (function (){var statearr_27840 = state_27824;
(statearr_27840[(7)] = inst_27801__$1);

return statearr_27840;
})();
var statearr_27841_27866 = state_27824__$1;
(statearr_27841_27866[(2)] = null);

(statearr_27841_27866[(1)] = (2));


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
});})(c__26996__auto__))
;
return ((function (switch__26884__auto__,c__26996__auto__){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_27845 = [null,null,null,null,null,null,null,null];
(statearr_27845[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_27845[(1)] = (1));

return statearr_27845;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_27824){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_27824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e27846){if((e27846 instanceof Object)){
var ex__26888__auto__ = e27846;
var statearr_27847_27867 = state_27824;
(statearr_27847_27867[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27868 = state_27824;
state_27824 = G__27868;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_27824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_27824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__))
})();
var state__26998__auto__ = (function (){var statearr_27848 = f__26997__auto__.call(null);
(statearr_27848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_27848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__))
);

return c__26996__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28094 = (function (mult,ch,cs,meta28095){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28095 = meta28095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28096,meta28095__$1){
var self__ = this;
var _28096__$1 = this;
return (new cljs.core.async.t_cljs$core$async28094(self__.mult,self__.ch,self__.cs,meta28095__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28096){
var self__ = this;
var _28096__$1 = this;
return self__.meta28095;
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28095","meta28095",-1264971464,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28094";

cljs.core.async.t_cljs$core$async28094.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async28094");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28094 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28094(mult__$1,ch__$1,cs__$1,meta28095){
return (new cljs.core.async.t_cljs$core$async28094(mult__$1,ch__$1,cs__$1,meta28095));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28094(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26996__auto___28319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___28319,cs,m,dchan,dctr,done){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___28319,cs,m,dchan,dctr,done){
return (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (7))){
var inst_28227 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28233_28320 = state_28231__$1;
(statearr_28233_28320[(2)] = inst_28227);

(statearr_28233_28320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (20))){
var inst_28130 = (state_28231[(7)]);
var inst_28142 = cljs.core.first.call(null,inst_28130);
var inst_28143 = cljs.core.nth.call(null,inst_28142,(0),null);
var inst_28144 = cljs.core.nth.call(null,inst_28142,(1),null);
var state_28231__$1 = (function (){var statearr_28234 = state_28231;
(statearr_28234[(8)] = inst_28143);

return statearr_28234;
})();
if(cljs.core.truth_(inst_28144)){
var statearr_28235_28321 = state_28231__$1;
(statearr_28235_28321[(1)] = (22));

} else {
var statearr_28236_28322 = state_28231__$1;
(statearr_28236_28322[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (27))){
var inst_28099 = (state_28231[(9)]);
var inst_28179 = (state_28231[(10)]);
var inst_28172 = (state_28231[(11)]);
var inst_28174 = (state_28231[(12)]);
var inst_28179__$1 = cljs.core._nth.call(null,inst_28172,inst_28174);
var inst_28180 = cljs.core.async.put_BANG_.call(null,inst_28179__$1,inst_28099,done);
var state_28231__$1 = (function (){var statearr_28237 = state_28231;
(statearr_28237[(10)] = inst_28179__$1);

return statearr_28237;
})();
if(cljs.core.truth_(inst_28180)){
var statearr_28238_28323 = state_28231__$1;
(statearr_28238_28323[(1)] = (30));

} else {
var statearr_28239_28324 = state_28231__$1;
(statearr_28239_28324[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (1))){
var state_28231__$1 = state_28231;
var statearr_28240_28325 = state_28231__$1;
(statearr_28240_28325[(2)] = null);

(statearr_28240_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (24))){
var inst_28130 = (state_28231[(7)]);
var inst_28149 = (state_28231[(2)]);
var inst_28150 = cljs.core.next.call(null,inst_28130);
var inst_28108 = inst_28150;
var inst_28109 = null;
var inst_28110 = (0);
var inst_28111 = (0);
var state_28231__$1 = (function (){var statearr_28241 = state_28231;
(statearr_28241[(13)] = inst_28111);

(statearr_28241[(14)] = inst_28110);

(statearr_28241[(15)] = inst_28149);

(statearr_28241[(16)] = inst_28108);

(statearr_28241[(17)] = inst_28109);

return statearr_28241;
})();
var statearr_28242_28326 = state_28231__$1;
(statearr_28242_28326[(2)] = null);

(statearr_28242_28326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (39))){
var state_28231__$1 = state_28231;
var statearr_28246_28327 = state_28231__$1;
(statearr_28246_28327[(2)] = null);

(statearr_28246_28327[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (4))){
var inst_28099 = (state_28231[(9)]);
var inst_28099__$1 = (state_28231[(2)]);
var inst_28100 = (inst_28099__$1 == null);
var state_28231__$1 = (function (){var statearr_28247 = state_28231;
(statearr_28247[(9)] = inst_28099__$1);

return statearr_28247;
})();
if(cljs.core.truth_(inst_28100)){
var statearr_28248_28328 = state_28231__$1;
(statearr_28248_28328[(1)] = (5));

} else {
var statearr_28249_28329 = state_28231__$1;
(statearr_28249_28329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (15))){
var inst_28111 = (state_28231[(13)]);
var inst_28110 = (state_28231[(14)]);
var inst_28108 = (state_28231[(16)]);
var inst_28109 = (state_28231[(17)]);
var inst_28126 = (state_28231[(2)]);
var inst_28127 = (inst_28111 + (1));
var tmp28243 = inst_28110;
var tmp28244 = inst_28108;
var tmp28245 = inst_28109;
var inst_28108__$1 = tmp28244;
var inst_28109__$1 = tmp28245;
var inst_28110__$1 = tmp28243;
var inst_28111__$1 = inst_28127;
var state_28231__$1 = (function (){var statearr_28250 = state_28231;
(statearr_28250[(13)] = inst_28111__$1);

(statearr_28250[(14)] = inst_28110__$1);

(statearr_28250[(18)] = inst_28126);

(statearr_28250[(16)] = inst_28108__$1);

(statearr_28250[(17)] = inst_28109__$1);

return statearr_28250;
})();
var statearr_28251_28330 = state_28231__$1;
(statearr_28251_28330[(2)] = null);

(statearr_28251_28330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (21))){
var inst_28153 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28255_28331 = state_28231__$1;
(statearr_28255_28331[(2)] = inst_28153);

(statearr_28255_28331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (31))){
var inst_28179 = (state_28231[(10)]);
var inst_28183 = done.call(null,null);
var inst_28184 = cljs.core.async.untap_STAR_.call(null,m,inst_28179);
var state_28231__$1 = (function (){var statearr_28256 = state_28231;
(statearr_28256[(19)] = inst_28183);

return statearr_28256;
})();
var statearr_28257_28332 = state_28231__$1;
(statearr_28257_28332[(2)] = inst_28184);

(statearr_28257_28332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (32))){
var inst_28173 = (state_28231[(20)]);
var inst_28172 = (state_28231[(11)]);
var inst_28174 = (state_28231[(12)]);
var inst_28171 = (state_28231[(21)]);
var inst_28186 = (state_28231[(2)]);
var inst_28187 = (inst_28174 + (1));
var tmp28252 = inst_28173;
var tmp28253 = inst_28172;
var tmp28254 = inst_28171;
var inst_28171__$1 = tmp28254;
var inst_28172__$1 = tmp28253;
var inst_28173__$1 = tmp28252;
var inst_28174__$1 = inst_28187;
var state_28231__$1 = (function (){var statearr_28258 = state_28231;
(statearr_28258[(22)] = inst_28186);

(statearr_28258[(20)] = inst_28173__$1);

(statearr_28258[(11)] = inst_28172__$1);

(statearr_28258[(12)] = inst_28174__$1);

(statearr_28258[(21)] = inst_28171__$1);

return statearr_28258;
})();
var statearr_28259_28333 = state_28231__$1;
(statearr_28259_28333[(2)] = null);

(statearr_28259_28333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (40))){
var inst_28199 = (state_28231[(23)]);
var inst_28203 = done.call(null,null);
var inst_28204 = cljs.core.async.untap_STAR_.call(null,m,inst_28199);
var state_28231__$1 = (function (){var statearr_28260 = state_28231;
(statearr_28260[(24)] = inst_28203);

return statearr_28260;
})();
var statearr_28261_28334 = state_28231__$1;
(statearr_28261_28334[(2)] = inst_28204);

(statearr_28261_28334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (33))){
var inst_28190 = (state_28231[(25)]);
var inst_28192 = cljs.core.chunked_seq_QMARK_.call(null,inst_28190);
var state_28231__$1 = state_28231;
if(inst_28192){
var statearr_28262_28335 = state_28231__$1;
(statearr_28262_28335[(1)] = (36));

} else {
var statearr_28263_28336 = state_28231__$1;
(statearr_28263_28336[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (13))){
var inst_28120 = (state_28231[(26)]);
var inst_28123 = cljs.core.async.close_BANG_.call(null,inst_28120);
var state_28231__$1 = state_28231;
var statearr_28264_28337 = state_28231__$1;
(statearr_28264_28337[(2)] = inst_28123);

(statearr_28264_28337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (22))){
var inst_28143 = (state_28231[(8)]);
var inst_28146 = cljs.core.async.close_BANG_.call(null,inst_28143);
var state_28231__$1 = state_28231;
var statearr_28265_28338 = state_28231__$1;
(statearr_28265_28338[(2)] = inst_28146);

(statearr_28265_28338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (36))){
var inst_28190 = (state_28231[(25)]);
var inst_28194 = cljs.core.chunk_first.call(null,inst_28190);
var inst_28195 = cljs.core.chunk_rest.call(null,inst_28190);
var inst_28196 = cljs.core.count.call(null,inst_28194);
var inst_28171 = inst_28195;
var inst_28172 = inst_28194;
var inst_28173 = inst_28196;
var inst_28174 = (0);
var state_28231__$1 = (function (){var statearr_28266 = state_28231;
(statearr_28266[(20)] = inst_28173);

(statearr_28266[(11)] = inst_28172);

(statearr_28266[(12)] = inst_28174);

(statearr_28266[(21)] = inst_28171);

return statearr_28266;
})();
var statearr_28267_28339 = state_28231__$1;
(statearr_28267_28339[(2)] = null);

(statearr_28267_28339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (41))){
var inst_28190 = (state_28231[(25)]);
var inst_28206 = (state_28231[(2)]);
var inst_28207 = cljs.core.next.call(null,inst_28190);
var inst_28171 = inst_28207;
var inst_28172 = null;
var inst_28173 = (0);
var inst_28174 = (0);
var state_28231__$1 = (function (){var statearr_28268 = state_28231;
(statearr_28268[(27)] = inst_28206);

(statearr_28268[(20)] = inst_28173);

(statearr_28268[(11)] = inst_28172);

(statearr_28268[(12)] = inst_28174);

(statearr_28268[(21)] = inst_28171);

return statearr_28268;
})();
var statearr_28269_28340 = state_28231__$1;
(statearr_28269_28340[(2)] = null);

(statearr_28269_28340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (43))){
var state_28231__$1 = state_28231;
var statearr_28270_28341 = state_28231__$1;
(statearr_28270_28341[(2)] = null);

(statearr_28270_28341[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (29))){
var inst_28215 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28271_28342 = state_28231__$1;
(statearr_28271_28342[(2)] = inst_28215);

(statearr_28271_28342[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (44))){
var inst_28224 = (state_28231[(2)]);
var state_28231__$1 = (function (){var statearr_28272 = state_28231;
(statearr_28272[(28)] = inst_28224);

return statearr_28272;
})();
var statearr_28273_28343 = state_28231__$1;
(statearr_28273_28343[(2)] = null);

(statearr_28273_28343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var inst_28163 = (state_28231[(29)]);
var inst_28162 = cljs.core.deref.call(null,cs);
var inst_28163__$1 = cljs.core.keys.call(null,inst_28162);
var inst_28164 = cljs.core.count.call(null,inst_28163__$1);
var inst_28165 = cljs.core.reset_BANG_.call(null,dctr,inst_28164);
var inst_28170 = cljs.core.seq.call(null,inst_28163__$1);
var inst_28171 = inst_28170;
var inst_28172 = null;
var inst_28173 = (0);
var inst_28174 = (0);
var state_28231__$1 = (function (){var statearr_28274 = state_28231;
(statearr_28274[(29)] = inst_28163__$1);

(statearr_28274[(30)] = inst_28165);

(statearr_28274[(20)] = inst_28173);

(statearr_28274[(11)] = inst_28172);

(statearr_28274[(12)] = inst_28174);

(statearr_28274[(21)] = inst_28171);

return statearr_28274;
})();
var statearr_28275_28344 = state_28231__$1;
(statearr_28275_28344[(2)] = null);

(statearr_28275_28344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (28))){
var inst_28190 = (state_28231[(25)]);
var inst_28171 = (state_28231[(21)]);
var inst_28190__$1 = cljs.core.seq.call(null,inst_28171);
var state_28231__$1 = (function (){var statearr_28276 = state_28231;
(statearr_28276[(25)] = inst_28190__$1);

return statearr_28276;
})();
if(inst_28190__$1){
var statearr_28277_28345 = state_28231__$1;
(statearr_28277_28345[(1)] = (33));

} else {
var statearr_28278_28346 = state_28231__$1;
(statearr_28278_28346[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (25))){
var inst_28173 = (state_28231[(20)]);
var inst_28174 = (state_28231[(12)]);
var inst_28176 = (inst_28174 < inst_28173);
var inst_28177 = inst_28176;
var state_28231__$1 = state_28231;
if(cljs.core.truth_(inst_28177)){
var statearr_28279_28347 = state_28231__$1;
(statearr_28279_28347[(1)] = (27));

} else {
var statearr_28280_28348 = state_28231__$1;
(statearr_28280_28348[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (34))){
var state_28231__$1 = state_28231;
var statearr_28281_28349 = state_28231__$1;
(statearr_28281_28349[(2)] = null);

(statearr_28281_28349[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (17))){
var state_28231__$1 = state_28231;
var statearr_28282_28350 = state_28231__$1;
(statearr_28282_28350[(2)] = null);

(statearr_28282_28350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (3))){
var inst_28229 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (12))){
var inst_28158 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28283_28351 = state_28231__$1;
(statearr_28283_28351[(2)] = inst_28158);

(statearr_28283_28351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (2))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),ch);
} else {
if((state_val_28232 === (23))){
var state_28231__$1 = state_28231;
var statearr_28284_28352 = state_28231__$1;
(statearr_28284_28352[(2)] = null);

(statearr_28284_28352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (35))){
var inst_28213 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28285_28353 = state_28231__$1;
(statearr_28285_28353[(2)] = inst_28213);

(statearr_28285_28353[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (19))){
var inst_28130 = (state_28231[(7)]);
var inst_28134 = cljs.core.chunk_first.call(null,inst_28130);
var inst_28135 = cljs.core.chunk_rest.call(null,inst_28130);
var inst_28136 = cljs.core.count.call(null,inst_28134);
var inst_28108 = inst_28135;
var inst_28109 = inst_28134;
var inst_28110 = inst_28136;
var inst_28111 = (0);
var state_28231__$1 = (function (){var statearr_28286 = state_28231;
(statearr_28286[(13)] = inst_28111);

(statearr_28286[(14)] = inst_28110);

(statearr_28286[(16)] = inst_28108);

(statearr_28286[(17)] = inst_28109);

return statearr_28286;
})();
var statearr_28287_28354 = state_28231__$1;
(statearr_28287_28354[(2)] = null);

(statearr_28287_28354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (11))){
var inst_28130 = (state_28231[(7)]);
var inst_28108 = (state_28231[(16)]);
var inst_28130__$1 = cljs.core.seq.call(null,inst_28108);
var state_28231__$1 = (function (){var statearr_28288 = state_28231;
(statearr_28288[(7)] = inst_28130__$1);

return statearr_28288;
})();
if(inst_28130__$1){
var statearr_28289_28355 = state_28231__$1;
(statearr_28289_28355[(1)] = (16));

} else {
var statearr_28290_28356 = state_28231__$1;
(statearr_28290_28356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (9))){
var inst_28160 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28291_28357 = state_28231__$1;
(statearr_28291_28357[(2)] = inst_28160);

(statearr_28291_28357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (5))){
var inst_28106 = cljs.core.deref.call(null,cs);
var inst_28107 = cljs.core.seq.call(null,inst_28106);
var inst_28108 = inst_28107;
var inst_28109 = null;
var inst_28110 = (0);
var inst_28111 = (0);
var state_28231__$1 = (function (){var statearr_28292 = state_28231;
(statearr_28292[(13)] = inst_28111);

(statearr_28292[(14)] = inst_28110);

(statearr_28292[(16)] = inst_28108);

(statearr_28292[(17)] = inst_28109);

return statearr_28292;
})();
var statearr_28293_28358 = state_28231__$1;
(statearr_28293_28358[(2)] = null);

(statearr_28293_28358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (14))){
var state_28231__$1 = state_28231;
var statearr_28294_28359 = state_28231__$1;
(statearr_28294_28359[(2)] = null);

(statearr_28294_28359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (45))){
var inst_28221 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28295_28360 = state_28231__$1;
(statearr_28295_28360[(2)] = inst_28221);

(statearr_28295_28360[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (26))){
var inst_28163 = (state_28231[(29)]);
var inst_28217 = (state_28231[(2)]);
var inst_28218 = cljs.core.seq.call(null,inst_28163);
var state_28231__$1 = (function (){var statearr_28296 = state_28231;
(statearr_28296[(31)] = inst_28217);

return statearr_28296;
})();
if(inst_28218){
var statearr_28297_28361 = state_28231__$1;
(statearr_28297_28361[(1)] = (42));

} else {
var statearr_28298_28362 = state_28231__$1;
(statearr_28298_28362[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (16))){
var inst_28130 = (state_28231[(7)]);
var inst_28132 = cljs.core.chunked_seq_QMARK_.call(null,inst_28130);
var state_28231__$1 = state_28231;
if(inst_28132){
var statearr_28299_28363 = state_28231__$1;
(statearr_28299_28363[(1)] = (19));

} else {
var statearr_28300_28364 = state_28231__$1;
(statearr_28300_28364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (38))){
var inst_28210 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28301_28365 = state_28231__$1;
(statearr_28301_28365[(2)] = inst_28210);

(statearr_28301_28365[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (30))){
var state_28231__$1 = state_28231;
var statearr_28302_28366 = state_28231__$1;
(statearr_28302_28366[(2)] = null);

(statearr_28302_28366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (10))){
var inst_28111 = (state_28231[(13)]);
var inst_28109 = (state_28231[(17)]);
var inst_28119 = cljs.core._nth.call(null,inst_28109,inst_28111);
var inst_28120 = cljs.core.nth.call(null,inst_28119,(0),null);
var inst_28121 = cljs.core.nth.call(null,inst_28119,(1),null);
var state_28231__$1 = (function (){var statearr_28303 = state_28231;
(statearr_28303[(26)] = inst_28120);

return statearr_28303;
})();
if(cljs.core.truth_(inst_28121)){
var statearr_28304_28367 = state_28231__$1;
(statearr_28304_28367[(1)] = (13));

} else {
var statearr_28305_28368 = state_28231__$1;
(statearr_28305_28368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (18))){
var inst_28156 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28306_28369 = state_28231__$1;
(statearr_28306_28369[(2)] = inst_28156);

(statearr_28306_28369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (42))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(45),dchan);
} else {
if((state_val_28232 === (37))){
var inst_28099 = (state_28231[(9)]);
var inst_28199 = (state_28231[(23)]);
var inst_28190 = (state_28231[(25)]);
var inst_28199__$1 = cljs.core.first.call(null,inst_28190);
var inst_28200 = cljs.core.async.put_BANG_.call(null,inst_28199__$1,inst_28099,done);
var state_28231__$1 = (function (){var statearr_28307 = state_28231;
(statearr_28307[(23)] = inst_28199__$1);

return statearr_28307;
})();
if(cljs.core.truth_(inst_28200)){
var statearr_28308_28370 = state_28231__$1;
(statearr_28308_28370[(1)] = (39));

} else {
var statearr_28309_28371 = state_28231__$1;
(statearr_28309_28371[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (8))){
var inst_28111 = (state_28231[(13)]);
var inst_28110 = (state_28231[(14)]);
var inst_28113 = (inst_28111 < inst_28110);
var inst_28114 = inst_28113;
var state_28231__$1 = state_28231;
if(cljs.core.truth_(inst_28114)){
var statearr_28310_28372 = state_28231__$1;
(statearr_28310_28372[(1)] = (10));

} else {
var statearr_28311_28373 = state_28231__$1;
(statearr_28311_28373[(1)] = (11));

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
});})(c__26996__auto___28319,cs,m,dchan,dctr,done))
;
return ((function (switch__26884__auto__,c__26996__auto___28319,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26885__auto__ = null;
var cljs$core$async$mult_$_state_machine__26885__auto____0 = (function (){
var statearr_28315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28315[(0)] = cljs$core$async$mult_$_state_machine__26885__auto__);

(statearr_28315[(1)] = (1));

return statearr_28315;
});
var cljs$core$async$mult_$_state_machine__26885__auto____1 = (function (state_28231){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e28316){if((e28316 instanceof Object)){
var ex__26888__auto__ = e28316;
var statearr_28317_28374 = state_28231;
(statearr_28317_28374[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28375 = state_28231;
state_28231 = G__28375;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26885__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26885__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26885__auto____0;
cljs$core$async$mult_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26885__auto____1;
return cljs$core$async$mult_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___28319,cs,m,dchan,dctr,done))
})();
var state__26998__auto__ = (function (){var statearr_28318 = f__26997__auto__.call(null);
(statearr_28318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___28319);

return statearr_28318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___28319,cs,m,dchan,dctr,done))
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
var args28376 = [];
var len__25826__auto___28379 = arguments.length;
var i__25827__auto___28380 = (0);
while(true){
if((i__25827__auto___28380 < len__25826__auto___28379)){
args28376.push((arguments[i__25827__auto___28380]));

var G__28381 = (i__25827__auto___28380 + (1));
i__25827__auto___28380 = G__28381;
continue;
} else {
}
break;
}

var G__28378 = args28376.length;
switch (G__28378) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28376.length)].join('')));

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
var len__25826__auto___28393 = arguments.length;
var i__25827__auto___28394 = (0);
while(true){
if((i__25827__auto___28394 < len__25826__auto___28393)){
args__25833__auto__.push((arguments[i__25827__auto___28394]));

var G__28395 = (i__25827__auto___28394 + (1));
i__25827__auto___28394 = G__28395;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28387){
var map__28388 = p__28387;
var map__28388__$1 = ((((!((map__28388 == null)))?((((map__28388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var opts = map__28388__$1;
var statearr_28390_28396 = state;
(statearr_28390_28396[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28388,map__28388__$1,opts){
return (function (val){
var statearr_28391_28397 = state;
(statearr_28391_28397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28388,map__28388__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28392_28398 = state;
(statearr_28392_28398[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28383){
var G__28384 = cljs.core.first.call(null,seq28383);
var seq28383__$1 = cljs.core.next.call(null,seq28383);
var G__28385 = cljs.core.first.call(null,seq28383__$1);
var seq28383__$2 = cljs.core.next.call(null,seq28383__$1);
var G__28386 = cljs.core.first.call(null,seq28383__$2);
var seq28383__$3 = cljs.core.next.call(null,seq28383__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28384,G__28385,G__28386,seq28383__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28564 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28565){
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
this.meta28565 = meta28565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28566,meta28565__$1){
var self__ = this;
var _28566__$1 = this;
return (new cljs.core.async.t_cljs$core$async28564(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28565__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28566){
var self__ = this;
var _28566__$1 = this;
return self__.meta28565;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28564.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28565","meta28565",-1550310335,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28564";

cljs.core.async.t_cljs$core$async28564.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async28564");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28564 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28564(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28565){
return (new cljs.core.async.t_cljs$core$async28564(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28565));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28564(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26996__auto___28729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___28729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___28729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28666){
var state_val_28667 = (state_28666[(1)]);
if((state_val_28667 === (7))){
var inst_28582 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28668_28730 = state_28666__$1;
(statearr_28668_28730[(2)] = inst_28582);

(statearr_28668_28730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (20))){
var inst_28594 = (state_28666[(7)]);
var state_28666__$1 = state_28666;
var statearr_28669_28731 = state_28666__$1;
(statearr_28669_28731[(2)] = inst_28594);

(statearr_28669_28731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (27))){
var state_28666__$1 = state_28666;
var statearr_28670_28732 = state_28666__$1;
(statearr_28670_28732[(2)] = null);

(statearr_28670_28732[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (1))){
var inst_28570 = (state_28666[(8)]);
var inst_28570__$1 = calc_state.call(null);
var inst_28572 = (inst_28570__$1 == null);
var inst_28573 = cljs.core.not.call(null,inst_28572);
var state_28666__$1 = (function (){var statearr_28671 = state_28666;
(statearr_28671[(8)] = inst_28570__$1);

return statearr_28671;
})();
if(inst_28573){
var statearr_28672_28733 = state_28666__$1;
(statearr_28672_28733[(1)] = (2));

} else {
var statearr_28673_28734 = state_28666__$1;
(statearr_28673_28734[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (24))){
var inst_28640 = (state_28666[(9)]);
var inst_28626 = (state_28666[(10)]);
var inst_28617 = (state_28666[(11)]);
var inst_28640__$1 = inst_28617.call(null,inst_28626);
var state_28666__$1 = (function (){var statearr_28674 = state_28666;
(statearr_28674[(9)] = inst_28640__$1);

return statearr_28674;
})();
if(cljs.core.truth_(inst_28640__$1)){
var statearr_28675_28735 = state_28666__$1;
(statearr_28675_28735[(1)] = (29));

} else {
var statearr_28676_28736 = state_28666__$1;
(statearr_28676_28736[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (4))){
var inst_28585 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28585)){
var statearr_28677_28737 = state_28666__$1;
(statearr_28677_28737[(1)] = (8));

} else {
var statearr_28678_28738 = state_28666__$1;
(statearr_28678_28738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (15))){
var inst_28611 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28611)){
var statearr_28679_28739 = state_28666__$1;
(statearr_28679_28739[(1)] = (19));

} else {
var statearr_28680_28740 = state_28666__$1;
(statearr_28680_28740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (21))){
var inst_28616 = (state_28666[(12)]);
var inst_28616__$1 = (state_28666[(2)]);
var inst_28617 = cljs.core.get.call(null,inst_28616__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28618 = cljs.core.get.call(null,inst_28616__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28619 = cljs.core.get.call(null,inst_28616__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28666__$1 = (function (){var statearr_28681 = state_28666;
(statearr_28681[(12)] = inst_28616__$1);

(statearr_28681[(11)] = inst_28617);

(statearr_28681[(13)] = inst_28618);

return statearr_28681;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28666__$1,(22),inst_28619);
} else {
if((state_val_28667 === (31))){
var inst_28648 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28648)){
var statearr_28682_28741 = state_28666__$1;
(statearr_28682_28741[(1)] = (32));

} else {
var statearr_28683_28742 = state_28666__$1;
(statearr_28683_28742[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (32))){
var inst_28625 = (state_28666[(14)]);
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28666__$1,(35),out,inst_28625);
} else {
if((state_val_28667 === (33))){
var inst_28616 = (state_28666[(12)]);
var inst_28594 = inst_28616;
var state_28666__$1 = (function (){var statearr_28684 = state_28666;
(statearr_28684[(7)] = inst_28594);

return statearr_28684;
})();
var statearr_28685_28743 = state_28666__$1;
(statearr_28685_28743[(2)] = null);

(statearr_28685_28743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (13))){
var inst_28594 = (state_28666[(7)]);
var inst_28601 = inst_28594.cljs$lang$protocol_mask$partition0$;
var inst_28602 = (inst_28601 & (64));
var inst_28603 = inst_28594.cljs$core$ISeq$;
var inst_28604 = (inst_28602) || (inst_28603);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28604)){
var statearr_28686_28744 = state_28666__$1;
(statearr_28686_28744[(1)] = (16));

} else {
var statearr_28687_28745 = state_28666__$1;
(statearr_28687_28745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (22))){
var inst_28626 = (state_28666[(10)]);
var inst_28625 = (state_28666[(14)]);
var inst_28624 = (state_28666[(2)]);
var inst_28625__$1 = cljs.core.nth.call(null,inst_28624,(0),null);
var inst_28626__$1 = cljs.core.nth.call(null,inst_28624,(1),null);
var inst_28627 = (inst_28625__$1 == null);
var inst_28628 = cljs.core._EQ_.call(null,inst_28626__$1,change);
var inst_28629 = (inst_28627) || (inst_28628);
var state_28666__$1 = (function (){var statearr_28688 = state_28666;
(statearr_28688[(10)] = inst_28626__$1);

(statearr_28688[(14)] = inst_28625__$1);

return statearr_28688;
})();
if(cljs.core.truth_(inst_28629)){
var statearr_28689_28746 = state_28666__$1;
(statearr_28689_28746[(1)] = (23));

} else {
var statearr_28690_28747 = state_28666__$1;
(statearr_28690_28747[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (36))){
var inst_28616 = (state_28666[(12)]);
var inst_28594 = inst_28616;
var state_28666__$1 = (function (){var statearr_28691 = state_28666;
(statearr_28691[(7)] = inst_28594);

return statearr_28691;
})();
var statearr_28692_28748 = state_28666__$1;
(statearr_28692_28748[(2)] = null);

(statearr_28692_28748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (29))){
var inst_28640 = (state_28666[(9)]);
var state_28666__$1 = state_28666;
var statearr_28693_28749 = state_28666__$1;
(statearr_28693_28749[(2)] = inst_28640);

(statearr_28693_28749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (6))){
var state_28666__$1 = state_28666;
var statearr_28694_28750 = state_28666__$1;
(statearr_28694_28750[(2)] = false);

(statearr_28694_28750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (28))){
var inst_28636 = (state_28666[(2)]);
var inst_28637 = calc_state.call(null);
var inst_28594 = inst_28637;
var state_28666__$1 = (function (){var statearr_28695 = state_28666;
(statearr_28695[(15)] = inst_28636);

(statearr_28695[(7)] = inst_28594);

return statearr_28695;
})();
var statearr_28696_28751 = state_28666__$1;
(statearr_28696_28751[(2)] = null);

(statearr_28696_28751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (25))){
var inst_28662 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28697_28752 = state_28666__$1;
(statearr_28697_28752[(2)] = inst_28662);

(statearr_28697_28752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (34))){
var inst_28660 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28698_28753 = state_28666__$1;
(statearr_28698_28753[(2)] = inst_28660);

(statearr_28698_28753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (17))){
var state_28666__$1 = state_28666;
var statearr_28699_28754 = state_28666__$1;
(statearr_28699_28754[(2)] = false);

(statearr_28699_28754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (3))){
var state_28666__$1 = state_28666;
var statearr_28700_28755 = state_28666__$1;
(statearr_28700_28755[(2)] = false);

(statearr_28700_28755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (12))){
var inst_28664 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28666__$1,inst_28664);
} else {
if((state_val_28667 === (2))){
var inst_28570 = (state_28666[(8)]);
var inst_28575 = inst_28570.cljs$lang$protocol_mask$partition0$;
var inst_28576 = (inst_28575 & (64));
var inst_28577 = inst_28570.cljs$core$ISeq$;
var inst_28578 = (inst_28576) || (inst_28577);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28578)){
var statearr_28701_28756 = state_28666__$1;
(statearr_28701_28756[(1)] = (5));

} else {
var statearr_28702_28757 = state_28666__$1;
(statearr_28702_28757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (23))){
var inst_28625 = (state_28666[(14)]);
var inst_28631 = (inst_28625 == null);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28631)){
var statearr_28703_28758 = state_28666__$1;
(statearr_28703_28758[(1)] = (26));

} else {
var statearr_28704_28759 = state_28666__$1;
(statearr_28704_28759[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (35))){
var inst_28651 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
if(cljs.core.truth_(inst_28651)){
var statearr_28705_28760 = state_28666__$1;
(statearr_28705_28760[(1)] = (36));

} else {
var statearr_28706_28761 = state_28666__$1;
(statearr_28706_28761[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (19))){
var inst_28594 = (state_28666[(7)]);
var inst_28613 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28594);
var state_28666__$1 = state_28666;
var statearr_28707_28762 = state_28666__$1;
(statearr_28707_28762[(2)] = inst_28613);

(statearr_28707_28762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (11))){
var inst_28594 = (state_28666[(7)]);
var inst_28598 = (inst_28594 == null);
var inst_28599 = cljs.core.not.call(null,inst_28598);
var state_28666__$1 = state_28666;
if(inst_28599){
var statearr_28708_28763 = state_28666__$1;
(statearr_28708_28763[(1)] = (13));

} else {
var statearr_28709_28764 = state_28666__$1;
(statearr_28709_28764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (9))){
var inst_28570 = (state_28666[(8)]);
var state_28666__$1 = state_28666;
var statearr_28710_28765 = state_28666__$1;
(statearr_28710_28765[(2)] = inst_28570);

(statearr_28710_28765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (5))){
var state_28666__$1 = state_28666;
var statearr_28711_28766 = state_28666__$1;
(statearr_28711_28766[(2)] = true);

(statearr_28711_28766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (14))){
var state_28666__$1 = state_28666;
var statearr_28712_28767 = state_28666__$1;
(statearr_28712_28767[(2)] = false);

(statearr_28712_28767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (26))){
var inst_28626 = (state_28666[(10)]);
var inst_28633 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28626);
var state_28666__$1 = state_28666;
var statearr_28713_28768 = state_28666__$1;
(statearr_28713_28768[(2)] = inst_28633);

(statearr_28713_28768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (16))){
var state_28666__$1 = state_28666;
var statearr_28714_28769 = state_28666__$1;
(statearr_28714_28769[(2)] = true);

(statearr_28714_28769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (38))){
var inst_28656 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28715_28770 = state_28666__$1;
(statearr_28715_28770[(2)] = inst_28656);

(statearr_28715_28770[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (30))){
var inst_28626 = (state_28666[(10)]);
var inst_28617 = (state_28666[(11)]);
var inst_28618 = (state_28666[(13)]);
var inst_28643 = cljs.core.empty_QMARK_.call(null,inst_28617);
var inst_28644 = inst_28618.call(null,inst_28626);
var inst_28645 = cljs.core.not.call(null,inst_28644);
var inst_28646 = (inst_28643) && (inst_28645);
var state_28666__$1 = state_28666;
var statearr_28716_28771 = state_28666__$1;
(statearr_28716_28771[(2)] = inst_28646);

(statearr_28716_28771[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (10))){
var inst_28570 = (state_28666[(8)]);
var inst_28590 = (state_28666[(2)]);
var inst_28591 = cljs.core.get.call(null,inst_28590,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28592 = cljs.core.get.call(null,inst_28590,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28593 = cljs.core.get.call(null,inst_28590,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28594 = inst_28570;
var state_28666__$1 = (function (){var statearr_28717 = state_28666;
(statearr_28717[(16)] = inst_28592);

(statearr_28717[(17)] = inst_28591);

(statearr_28717[(18)] = inst_28593);

(statearr_28717[(7)] = inst_28594);

return statearr_28717;
})();
var statearr_28718_28772 = state_28666__$1;
(statearr_28718_28772[(2)] = null);

(statearr_28718_28772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (18))){
var inst_28608 = (state_28666[(2)]);
var state_28666__$1 = state_28666;
var statearr_28719_28773 = state_28666__$1;
(statearr_28719_28773[(2)] = inst_28608);

(statearr_28719_28773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (37))){
var state_28666__$1 = state_28666;
var statearr_28720_28774 = state_28666__$1;
(statearr_28720_28774[(2)] = null);

(statearr_28720_28774[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28667 === (8))){
var inst_28570 = (state_28666[(8)]);
var inst_28587 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28570);
var state_28666__$1 = state_28666;
var statearr_28721_28775 = state_28666__$1;
(statearr_28721_28775[(2)] = inst_28587);

(statearr_28721_28775[(1)] = (10));


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
});})(c__26996__auto___28729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26884__auto__,c__26996__auto___28729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26885__auto__ = null;
var cljs$core$async$mix_$_state_machine__26885__auto____0 = (function (){
var statearr_28725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28725[(0)] = cljs$core$async$mix_$_state_machine__26885__auto__);

(statearr_28725[(1)] = (1));

return statearr_28725;
});
var cljs$core$async$mix_$_state_machine__26885__auto____1 = (function (state_28666){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_28666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e28726){if((e28726 instanceof Object)){
var ex__26888__auto__ = e28726;
var statearr_28727_28776 = state_28666;
(statearr_28727_28776[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28777 = state_28666;
state_28666 = G__28777;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26885__auto__ = function(state_28666){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26885__auto____1.call(this,state_28666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26885__auto____0;
cljs$core$async$mix_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26885__auto____1;
return cljs$core$async$mix_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___28729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26998__auto__ = (function (){var statearr_28728 = f__26997__auto__.call(null);
(statearr_28728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___28729);

return statearr_28728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___28729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28778 = [];
var len__25826__auto___28781 = arguments.length;
var i__25827__auto___28782 = (0);
while(true){
if((i__25827__auto___28782 < len__25826__auto___28781)){
args28778.push((arguments[i__25827__auto___28782]));

var G__28783 = (i__25827__auto___28782 + (1));
i__25827__auto___28782 = G__28783;
continue;
} else {
}
break;
}

var G__28780 = args28778.length;
switch (G__28780) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28778.length)].join('')));

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
var args28786 = [];
var len__25826__auto___28911 = arguments.length;
var i__25827__auto___28912 = (0);
while(true){
if((i__25827__auto___28912 < len__25826__auto___28911)){
args28786.push((arguments[i__25827__auto___28912]));

var G__28913 = (i__25827__auto___28912 + (1));
i__25827__auto___28912 = G__28913;
continue;
} else {
}
break;
}

var G__28788 = args28786.length;
switch (G__28788) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28786.length)].join('')));

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
return (function (p1__28785_SHARP_){
if(cljs.core.truth_(p1__28785_SHARP_.call(null,topic))){
return p1__28785_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28785_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28789 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28790){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28790 = meta28790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28791,meta28790__$1){
var self__ = this;
var _28791__$1 = this;
return (new cljs.core.async.t_cljs$core$async28789(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28790__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28791){
var self__ = this;
var _28791__$1 = this;
return self__.meta28790;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28790","meta28790",1606958999,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28789";

cljs.core.async.t_cljs$core$async28789.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async28789");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28789 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28790){
return (new cljs.core.async.t_cljs$core$async28789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28790));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28789(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26996__auto___28915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___28915,mults,ensure_mult,p){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___28915,mults,ensure_mult,p){
return (function (state_28863){
var state_val_28864 = (state_28863[(1)]);
if((state_val_28864 === (7))){
var inst_28859 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28865_28916 = state_28863__$1;
(statearr_28865_28916[(2)] = inst_28859);

(statearr_28865_28916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (20))){
var state_28863__$1 = state_28863;
var statearr_28866_28917 = state_28863__$1;
(statearr_28866_28917[(2)] = null);

(statearr_28866_28917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (1))){
var state_28863__$1 = state_28863;
var statearr_28867_28918 = state_28863__$1;
(statearr_28867_28918[(2)] = null);

(statearr_28867_28918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (24))){
var inst_28842 = (state_28863[(7)]);
var inst_28851 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28842);
var state_28863__$1 = state_28863;
var statearr_28868_28919 = state_28863__$1;
(statearr_28868_28919[(2)] = inst_28851);

(statearr_28868_28919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (4))){
var inst_28794 = (state_28863[(8)]);
var inst_28794__$1 = (state_28863[(2)]);
var inst_28795 = (inst_28794__$1 == null);
var state_28863__$1 = (function (){var statearr_28869 = state_28863;
(statearr_28869[(8)] = inst_28794__$1);

return statearr_28869;
})();
if(cljs.core.truth_(inst_28795)){
var statearr_28870_28920 = state_28863__$1;
(statearr_28870_28920[(1)] = (5));

} else {
var statearr_28871_28921 = state_28863__$1;
(statearr_28871_28921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (15))){
var inst_28836 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28872_28922 = state_28863__$1;
(statearr_28872_28922[(2)] = inst_28836);

(statearr_28872_28922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (21))){
var inst_28856 = (state_28863[(2)]);
var state_28863__$1 = (function (){var statearr_28873 = state_28863;
(statearr_28873[(9)] = inst_28856);

return statearr_28873;
})();
var statearr_28874_28923 = state_28863__$1;
(statearr_28874_28923[(2)] = null);

(statearr_28874_28923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (13))){
var inst_28818 = (state_28863[(10)]);
var inst_28820 = cljs.core.chunked_seq_QMARK_.call(null,inst_28818);
var state_28863__$1 = state_28863;
if(inst_28820){
var statearr_28875_28924 = state_28863__$1;
(statearr_28875_28924[(1)] = (16));

} else {
var statearr_28876_28925 = state_28863__$1;
(statearr_28876_28925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (22))){
var inst_28848 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
if(cljs.core.truth_(inst_28848)){
var statearr_28877_28926 = state_28863__$1;
(statearr_28877_28926[(1)] = (23));

} else {
var statearr_28878_28927 = state_28863__$1;
(statearr_28878_28927[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (6))){
var inst_28844 = (state_28863[(11)]);
var inst_28842 = (state_28863[(7)]);
var inst_28794 = (state_28863[(8)]);
var inst_28842__$1 = topic_fn.call(null,inst_28794);
var inst_28843 = cljs.core.deref.call(null,mults);
var inst_28844__$1 = cljs.core.get.call(null,inst_28843,inst_28842__$1);
var state_28863__$1 = (function (){var statearr_28879 = state_28863;
(statearr_28879[(11)] = inst_28844__$1);

(statearr_28879[(7)] = inst_28842__$1);

return statearr_28879;
})();
if(cljs.core.truth_(inst_28844__$1)){
var statearr_28880_28928 = state_28863__$1;
(statearr_28880_28928[(1)] = (19));

} else {
var statearr_28881_28929 = state_28863__$1;
(statearr_28881_28929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (25))){
var inst_28853 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28882_28930 = state_28863__$1;
(statearr_28882_28930[(2)] = inst_28853);

(statearr_28882_28930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (17))){
var inst_28818 = (state_28863[(10)]);
var inst_28827 = cljs.core.first.call(null,inst_28818);
var inst_28828 = cljs.core.async.muxch_STAR_.call(null,inst_28827);
var inst_28829 = cljs.core.async.close_BANG_.call(null,inst_28828);
var inst_28830 = cljs.core.next.call(null,inst_28818);
var inst_28804 = inst_28830;
var inst_28805 = null;
var inst_28806 = (0);
var inst_28807 = (0);
var state_28863__$1 = (function (){var statearr_28883 = state_28863;
(statearr_28883[(12)] = inst_28804);

(statearr_28883[(13)] = inst_28805);

(statearr_28883[(14)] = inst_28829);

(statearr_28883[(15)] = inst_28807);

(statearr_28883[(16)] = inst_28806);

return statearr_28883;
})();
var statearr_28884_28931 = state_28863__$1;
(statearr_28884_28931[(2)] = null);

(statearr_28884_28931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (3))){
var inst_28861 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28863__$1,inst_28861);
} else {
if((state_val_28864 === (12))){
var inst_28838 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28885_28932 = state_28863__$1;
(statearr_28885_28932[(2)] = inst_28838);

(statearr_28885_28932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (2))){
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28863__$1,(4),ch);
} else {
if((state_val_28864 === (23))){
var state_28863__$1 = state_28863;
var statearr_28886_28933 = state_28863__$1;
(statearr_28886_28933[(2)] = null);

(statearr_28886_28933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (19))){
var inst_28844 = (state_28863[(11)]);
var inst_28794 = (state_28863[(8)]);
var inst_28846 = cljs.core.async.muxch_STAR_.call(null,inst_28844);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28863__$1,(22),inst_28846,inst_28794);
} else {
if((state_val_28864 === (11))){
var inst_28804 = (state_28863[(12)]);
var inst_28818 = (state_28863[(10)]);
var inst_28818__$1 = cljs.core.seq.call(null,inst_28804);
var state_28863__$1 = (function (){var statearr_28887 = state_28863;
(statearr_28887[(10)] = inst_28818__$1);

return statearr_28887;
})();
if(inst_28818__$1){
var statearr_28888_28934 = state_28863__$1;
(statearr_28888_28934[(1)] = (13));

} else {
var statearr_28889_28935 = state_28863__$1;
(statearr_28889_28935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (9))){
var inst_28840 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28890_28936 = state_28863__$1;
(statearr_28890_28936[(2)] = inst_28840);

(statearr_28890_28936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (5))){
var inst_28801 = cljs.core.deref.call(null,mults);
var inst_28802 = cljs.core.vals.call(null,inst_28801);
var inst_28803 = cljs.core.seq.call(null,inst_28802);
var inst_28804 = inst_28803;
var inst_28805 = null;
var inst_28806 = (0);
var inst_28807 = (0);
var state_28863__$1 = (function (){var statearr_28891 = state_28863;
(statearr_28891[(12)] = inst_28804);

(statearr_28891[(13)] = inst_28805);

(statearr_28891[(15)] = inst_28807);

(statearr_28891[(16)] = inst_28806);

return statearr_28891;
})();
var statearr_28892_28937 = state_28863__$1;
(statearr_28892_28937[(2)] = null);

(statearr_28892_28937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (14))){
var state_28863__$1 = state_28863;
var statearr_28896_28938 = state_28863__$1;
(statearr_28896_28938[(2)] = null);

(statearr_28896_28938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (16))){
var inst_28818 = (state_28863[(10)]);
var inst_28822 = cljs.core.chunk_first.call(null,inst_28818);
var inst_28823 = cljs.core.chunk_rest.call(null,inst_28818);
var inst_28824 = cljs.core.count.call(null,inst_28822);
var inst_28804 = inst_28823;
var inst_28805 = inst_28822;
var inst_28806 = inst_28824;
var inst_28807 = (0);
var state_28863__$1 = (function (){var statearr_28897 = state_28863;
(statearr_28897[(12)] = inst_28804);

(statearr_28897[(13)] = inst_28805);

(statearr_28897[(15)] = inst_28807);

(statearr_28897[(16)] = inst_28806);

return statearr_28897;
})();
var statearr_28898_28939 = state_28863__$1;
(statearr_28898_28939[(2)] = null);

(statearr_28898_28939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (10))){
var inst_28804 = (state_28863[(12)]);
var inst_28805 = (state_28863[(13)]);
var inst_28807 = (state_28863[(15)]);
var inst_28806 = (state_28863[(16)]);
var inst_28812 = cljs.core._nth.call(null,inst_28805,inst_28807);
var inst_28813 = cljs.core.async.muxch_STAR_.call(null,inst_28812);
var inst_28814 = cljs.core.async.close_BANG_.call(null,inst_28813);
var inst_28815 = (inst_28807 + (1));
var tmp28893 = inst_28804;
var tmp28894 = inst_28805;
var tmp28895 = inst_28806;
var inst_28804__$1 = tmp28893;
var inst_28805__$1 = tmp28894;
var inst_28806__$1 = tmp28895;
var inst_28807__$1 = inst_28815;
var state_28863__$1 = (function (){var statearr_28899 = state_28863;
(statearr_28899[(12)] = inst_28804__$1);

(statearr_28899[(13)] = inst_28805__$1);

(statearr_28899[(17)] = inst_28814);

(statearr_28899[(15)] = inst_28807__$1);

(statearr_28899[(16)] = inst_28806__$1);

return statearr_28899;
})();
var statearr_28900_28940 = state_28863__$1;
(statearr_28900_28940[(2)] = null);

(statearr_28900_28940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (18))){
var inst_28833 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28901_28941 = state_28863__$1;
(statearr_28901_28941[(2)] = inst_28833);

(statearr_28901_28941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (8))){
var inst_28807 = (state_28863[(15)]);
var inst_28806 = (state_28863[(16)]);
var inst_28809 = (inst_28807 < inst_28806);
var inst_28810 = inst_28809;
var state_28863__$1 = state_28863;
if(cljs.core.truth_(inst_28810)){
var statearr_28902_28942 = state_28863__$1;
(statearr_28902_28942[(1)] = (10));

} else {
var statearr_28903_28943 = state_28863__$1;
(statearr_28903_28943[(1)] = (11));

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
});})(c__26996__auto___28915,mults,ensure_mult,p))
;
return ((function (switch__26884__auto__,c__26996__auto___28915,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_28907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28907[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_28907[(1)] = (1));

return statearr_28907;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_28863){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_28863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e28908){if((e28908 instanceof Object)){
var ex__26888__auto__ = e28908;
var statearr_28909_28944 = state_28863;
(statearr_28909_28944[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28945 = state_28863;
state_28863 = G__28945;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_28863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_28863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___28915,mults,ensure_mult,p))
})();
var state__26998__auto__ = (function (){var statearr_28910 = f__26997__auto__.call(null);
(statearr_28910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___28915);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___28915,mults,ensure_mult,p))
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
var args28946 = [];
var len__25826__auto___28949 = arguments.length;
var i__25827__auto___28950 = (0);
while(true){
if((i__25827__auto___28950 < len__25826__auto___28949)){
args28946.push((arguments[i__25827__auto___28950]));

var G__28951 = (i__25827__auto___28950 + (1));
i__25827__auto___28950 = G__28951;
continue;
} else {
}
break;
}

var G__28948 = args28946.length;
switch (G__28948) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28946.length)].join('')));

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
var args28953 = [];
var len__25826__auto___28956 = arguments.length;
var i__25827__auto___28957 = (0);
while(true){
if((i__25827__auto___28957 < len__25826__auto___28956)){
args28953.push((arguments[i__25827__auto___28957]));

var G__28958 = (i__25827__auto___28957 + (1));
i__25827__auto___28957 = G__28958;
continue;
} else {
}
break;
}

var G__28955 = args28953.length;
switch (G__28955) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28953.length)].join('')));

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
var args28960 = [];
var len__25826__auto___29031 = arguments.length;
var i__25827__auto___29032 = (0);
while(true){
if((i__25827__auto___29032 < len__25826__auto___29031)){
args28960.push((arguments[i__25827__auto___29032]));

var G__29033 = (i__25827__auto___29032 + (1));
i__25827__auto___29032 = G__29033;
continue;
} else {
}
break;
}

var G__28962 = args28960.length;
switch (G__28962) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28960.length)].join('')));

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
var c__26996__auto___29035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29001){
var state_val_29002 = (state_29001[(1)]);
if((state_val_29002 === (7))){
var state_29001__$1 = state_29001;
var statearr_29003_29036 = state_29001__$1;
(statearr_29003_29036[(2)] = null);

(statearr_29003_29036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (1))){
var state_29001__$1 = state_29001;
var statearr_29004_29037 = state_29001__$1;
(statearr_29004_29037[(2)] = null);

(statearr_29004_29037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (4))){
var inst_28965 = (state_29001[(7)]);
var inst_28967 = (inst_28965 < cnt);
var state_29001__$1 = state_29001;
if(cljs.core.truth_(inst_28967)){
var statearr_29005_29038 = state_29001__$1;
(statearr_29005_29038[(1)] = (6));

} else {
var statearr_29006_29039 = state_29001__$1;
(statearr_29006_29039[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (15))){
var inst_28997 = (state_29001[(2)]);
var state_29001__$1 = state_29001;
var statearr_29007_29040 = state_29001__$1;
(statearr_29007_29040[(2)] = inst_28997);

(statearr_29007_29040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (13))){
var inst_28990 = cljs.core.async.close_BANG_.call(null,out);
var state_29001__$1 = state_29001;
var statearr_29008_29041 = state_29001__$1;
(statearr_29008_29041[(2)] = inst_28990);

(statearr_29008_29041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (6))){
var state_29001__$1 = state_29001;
var statearr_29009_29042 = state_29001__$1;
(statearr_29009_29042[(2)] = null);

(statearr_29009_29042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (3))){
var inst_28999 = (state_29001[(2)]);
var state_29001__$1 = state_29001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29001__$1,inst_28999);
} else {
if((state_val_29002 === (12))){
var inst_28987 = (state_29001[(8)]);
var inst_28987__$1 = (state_29001[(2)]);
var inst_28988 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28987__$1);
var state_29001__$1 = (function (){var statearr_29010 = state_29001;
(statearr_29010[(8)] = inst_28987__$1);

return statearr_29010;
})();
if(cljs.core.truth_(inst_28988)){
var statearr_29011_29043 = state_29001__$1;
(statearr_29011_29043[(1)] = (13));

} else {
var statearr_29012_29044 = state_29001__$1;
(statearr_29012_29044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (2))){
var inst_28964 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28965 = (0);
var state_29001__$1 = (function (){var statearr_29013 = state_29001;
(statearr_29013[(9)] = inst_28964);

(statearr_29013[(7)] = inst_28965);

return statearr_29013;
})();
var statearr_29014_29045 = state_29001__$1;
(statearr_29014_29045[(2)] = null);

(statearr_29014_29045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (11))){
var inst_28965 = (state_29001[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29001,(10),Object,null,(9));
var inst_28974 = chs__$1.call(null,inst_28965);
var inst_28975 = done.call(null,inst_28965);
var inst_28976 = cljs.core.async.take_BANG_.call(null,inst_28974,inst_28975);
var state_29001__$1 = state_29001;
var statearr_29015_29046 = state_29001__$1;
(statearr_29015_29046[(2)] = inst_28976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29001__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (9))){
var inst_28965 = (state_29001[(7)]);
var inst_28978 = (state_29001[(2)]);
var inst_28979 = (inst_28965 + (1));
var inst_28965__$1 = inst_28979;
var state_29001__$1 = (function (){var statearr_29016 = state_29001;
(statearr_29016[(10)] = inst_28978);

(statearr_29016[(7)] = inst_28965__$1);

return statearr_29016;
})();
var statearr_29017_29047 = state_29001__$1;
(statearr_29017_29047[(2)] = null);

(statearr_29017_29047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (5))){
var inst_28985 = (state_29001[(2)]);
var state_29001__$1 = (function (){var statearr_29018 = state_29001;
(statearr_29018[(11)] = inst_28985);

return statearr_29018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29001__$1,(12),dchan);
} else {
if((state_val_29002 === (14))){
var inst_28987 = (state_29001[(8)]);
var inst_28992 = cljs.core.apply.call(null,f,inst_28987);
var state_29001__$1 = state_29001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29001__$1,(16),out,inst_28992);
} else {
if((state_val_29002 === (16))){
var inst_28994 = (state_29001[(2)]);
var state_29001__$1 = (function (){var statearr_29019 = state_29001;
(statearr_29019[(12)] = inst_28994);

return statearr_29019;
})();
var statearr_29020_29048 = state_29001__$1;
(statearr_29020_29048[(2)] = null);

(statearr_29020_29048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (10))){
var inst_28969 = (state_29001[(2)]);
var inst_28970 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29001__$1 = (function (){var statearr_29021 = state_29001;
(statearr_29021[(13)] = inst_28969);

return statearr_29021;
})();
var statearr_29022_29049 = state_29001__$1;
(statearr_29022_29049[(2)] = inst_28970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29001__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29002 === (8))){
var inst_28983 = (state_29001[(2)]);
var state_29001__$1 = state_29001;
var statearr_29023_29050 = state_29001__$1;
(statearr_29023_29050[(2)] = inst_28983);

(statearr_29023_29050[(1)] = (5));


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
});})(c__26996__auto___29035,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26884__auto__,c__26996__auto___29035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29027[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29027[(1)] = (1));

return statearr_29027;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29001){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29028){if((e29028 instanceof Object)){
var ex__26888__auto__ = e29028;
var statearr_29029_29051 = state_29001;
(statearr_29029_29051[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29052 = state_29001;
state_29001 = G__29052;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29035,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26998__auto__ = (function (){var statearr_29030 = f__26997__auto__.call(null);
(statearr_29030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29035);

return statearr_29030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29035,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29054 = [];
var len__25826__auto___29112 = arguments.length;
var i__25827__auto___29113 = (0);
while(true){
if((i__25827__auto___29113 < len__25826__auto___29112)){
args29054.push((arguments[i__25827__auto___29113]));

var G__29114 = (i__25827__auto___29113 + (1));
i__25827__auto___29113 = G__29114;
continue;
} else {
}
break;
}

var G__29056 = args29054.length;
switch (G__29056) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29054.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26996__auto___29116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29116,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29116,out){
return (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (7))){
var inst_29067 = (state_29088[(7)]);
var inst_29068 = (state_29088[(8)]);
var inst_29067__$1 = (state_29088[(2)]);
var inst_29068__$1 = cljs.core.nth.call(null,inst_29067__$1,(0),null);
var inst_29069 = cljs.core.nth.call(null,inst_29067__$1,(1),null);
var inst_29070 = (inst_29068__$1 == null);
var state_29088__$1 = (function (){var statearr_29090 = state_29088;
(statearr_29090[(7)] = inst_29067__$1);

(statearr_29090[(8)] = inst_29068__$1);

(statearr_29090[(9)] = inst_29069);

return statearr_29090;
})();
if(cljs.core.truth_(inst_29070)){
var statearr_29091_29117 = state_29088__$1;
(statearr_29091_29117[(1)] = (8));

} else {
var statearr_29092_29118 = state_29088__$1;
(statearr_29092_29118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (1))){
var inst_29057 = cljs.core.vec.call(null,chs);
var inst_29058 = inst_29057;
var state_29088__$1 = (function (){var statearr_29093 = state_29088;
(statearr_29093[(10)] = inst_29058);

return statearr_29093;
})();
var statearr_29094_29119 = state_29088__$1;
(statearr_29094_29119[(2)] = null);

(statearr_29094_29119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (4))){
var inst_29058 = (state_29088[(10)]);
var state_29088__$1 = state_29088;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29088__$1,(7),inst_29058);
} else {
if((state_val_29089 === (6))){
var inst_29084 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29095_29120 = state_29088__$1;
(statearr_29095_29120[(2)] = inst_29084);

(statearr_29095_29120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (3))){
var inst_29086 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29088__$1,inst_29086);
} else {
if((state_val_29089 === (2))){
var inst_29058 = (state_29088[(10)]);
var inst_29060 = cljs.core.count.call(null,inst_29058);
var inst_29061 = (inst_29060 > (0));
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29061)){
var statearr_29097_29121 = state_29088__$1;
(statearr_29097_29121[(1)] = (4));

} else {
var statearr_29098_29122 = state_29088__$1;
(statearr_29098_29122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (11))){
var inst_29058 = (state_29088[(10)]);
var inst_29077 = (state_29088[(2)]);
var tmp29096 = inst_29058;
var inst_29058__$1 = tmp29096;
var state_29088__$1 = (function (){var statearr_29099 = state_29088;
(statearr_29099[(10)] = inst_29058__$1);

(statearr_29099[(11)] = inst_29077);

return statearr_29099;
})();
var statearr_29100_29123 = state_29088__$1;
(statearr_29100_29123[(2)] = null);

(statearr_29100_29123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (9))){
var inst_29068 = (state_29088[(8)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29088__$1,(11),out,inst_29068);
} else {
if((state_val_29089 === (5))){
var inst_29082 = cljs.core.async.close_BANG_.call(null,out);
var state_29088__$1 = state_29088;
var statearr_29101_29124 = state_29088__$1;
(statearr_29101_29124[(2)] = inst_29082);

(statearr_29101_29124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (10))){
var inst_29080 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29102_29125 = state_29088__$1;
(statearr_29102_29125[(2)] = inst_29080);

(statearr_29102_29125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (8))){
var inst_29067 = (state_29088[(7)]);
var inst_29068 = (state_29088[(8)]);
var inst_29069 = (state_29088[(9)]);
var inst_29058 = (state_29088[(10)]);
var inst_29072 = (function (){var cs = inst_29058;
var vec__29063 = inst_29067;
var v = inst_29068;
var c = inst_29069;
return ((function (cs,vec__29063,v,c,inst_29067,inst_29068,inst_29069,inst_29058,state_val_29089,c__26996__auto___29116,out){
return (function (p1__29053_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29053_SHARP_);
});
;})(cs,vec__29063,v,c,inst_29067,inst_29068,inst_29069,inst_29058,state_val_29089,c__26996__auto___29116,out))
})();
var inst_29073 = cljs.core.filterv.call(null,inst_29072,inst_29058);
var inst_29058__$1 = inst_29073;
var state_29088__$1 = (function (){var statearr_29103 = state_29088;
(statearr_29103[(10)] = inst_29058__$1);

return statearr_29103;
})();
var statearr_29104_29126 = state_29088__$1;
(statearr_29104_29126[(2)] = null);

(statearr_29104_29126[(1)] = (2));


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
});})(c__26996__auto___29116,out))
;
return ((function (switch__26884__auto__,c__26996__auto___29116,out){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29108 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29108[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29108[(1)] = (1));

return statearr_29108;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29088){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29109){if((e29109 instanceof Object)){
var ex__26888__auto__ = e29109;
var statearr_29110_29127 = state_29088;
(statearr_29110_29127[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29128 = state_29088;
state_29088 = G__29128;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29116,out))
})();
var state__26998__auto__ = (function (){var statearr_29111 = f__26997__auto__.call(null);
(statearr_29111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29116);

return statearr_29111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29116,out))
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
var args29129 = [];
var len__25826__auto___29178 = arguments.length;
var i__25827__auto___29179 = (0);
while(true){
if((i__25827__auto___29179 < len__25826__auto___29178)){
args29129.push((arguments[i__25827__auto___29179]));

var G__29180 = (i__25827__auto___29179 + (1));
i__25827__auto___29179 = G__29180;
continue;
} else {
}
break;
}

var G__29131 = args29129.length;
switch (G__29131) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29129.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26996__auto___29182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29182,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29182,out){
return (function (state_29155){
var state_val_29156 = (state_29155[(1)]);
if((state_val_29156 === (7))){
var inst_29137 = (state_29155[(7)]);
var inst_29137__$1 = (state_29155[(2)]);
var inst_29138 = (inst_29137__$1 == null);
var inst_29139 = cljs.core.not.call(null,inst_29138);
var state_29155__$1 = (function (){var statearr_29157 = state_29155;
(statearr_29157[(7)] = inst_29137__$1);

return statearr_29157;
})();
if(inst_29139){
var statearr_29158_29183 = state_29155__$1;
(statearr_29158_29183[(1)] = (8));

} else {
var statearr_29159_29184 = state_29155__$1;
(statearr_29159_29184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (1))){
var inst_29132 = (0);
var state_29155__$1 = (function (){var statearr_29160 = state_29155;
(statearr_29160[(8)] = inst_29132);

return statearr_29160;
})();
var statearr_29161_29185 = state_29155__$1;
(statearr_29161_29185[(2)] = null);

(statearr_29161_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (4))){
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29155__$1,(7),ch);
} else {
if((state_val_29156 === (6))){
var inst_29150 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29162_29186 = state_29155__$1;
(statearr_29162_29186[(2)] = inst_29150);

(statearr_29162_29186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (3))){
var inst_29152 = (state_29155[(2)]);
var inst_29153 = cljs.core.async.close_BANG_.call(null,out);
var state_29155__$1 = (function (){var statearr_29163 = state_29155;
(statearr_29163[(9)] = inst_29152);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29155__$1,inst_29153);
} else {
if((state_val_29156 === (2))){
var inst_29132 = (state_29155[(8)]);
var inst_29134 = (inst_29132 < n);
var state_29155__$1 = state_29155;
if(cljs.core.truth_(inst_29134)){
var statearr_29164_29187 = state_29155__$1;
(statearr_29164_29187[(1)] = (4));

} else {
var statearr_29165_29188 = state_29155__$1;
(statearr_29165_29188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (11))){
var inst_29132 = (state_29155[(8)]);
var inst_29142 = (state_29155[(2)]);
var inst_29143 = (inst_29132 + (1));
var inst_29132__$1 = inst_29143;
var state_29155__$1 = (function (){var statearr_29166 = state_29155;
(statearr_29166[(8)] = inst_29132__$1);

(statearr_29166[(10)] = inst_29142);

return statearr_29166;
})();
var statearr_29167_29189 = state_29155__$1;
(statearr_29167_29189[(2)] = null);

(statearr_29167_29189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (9))){
var state_29155__$1 = state_29155;
var statearr_29168_29190 = state_29155__$1;
(statearr_29168_29190[(2)] = null);

(statearr_29168_29190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (5))){
var state_29155__$1 = state_29155;
var statearr_29169_29191 = state_29155__$1;
(statearr_29169_29191[(2)] = null);

(statearr_29169_29191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (10))){
var inst_29147 = (state_29155[(2)]);
var state_29155__$1 = state_29155;
var statearr_29170_29192 = state_29155__$1;
(statearr_29170_29192[(2)] = inst_29147);

(statearr_29170_29192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29156 === (8))){
var inst_29137 = (state_29155[(7)]);
var state_29155__$1 = state_29155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29155__$1,(11),out,inst_29137);
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
});})(c__26996__auto___29182,out))
;
return ((function (switch__26884__auto__,c__26996__auto___29182,out){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29174[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29174[(1)] = (1));

return statearr_29174;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29155){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29175){if((e29175 instanceof Object)){
var ex__26888__auto__ = e29175;
var statearr_29176_29193 = state_29155;
(statearr_29176_29193[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_29155;
state_29155 = G__29194;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29182,out))
})();
var state__26998__auto__ = (function (){var statearr_29177 = f__26997__auto__.call(null);
(statearr_29177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29182);

return statearr_29177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29182,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29202 = (function (map_LT_,f,ch,meta29203){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29203 = meta29203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29204,meta29203__$1){
var self__ = this;
var _29204__$1 = this;
return (new cljs.core.async.t_cljs$core$async29202(self__.map_LT_,self__.f,self__.ch,meta29203__$1));
});

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29204){
var self__ = this;
var _29204__$1 = this;
return self__.meta29203;
});

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29205 = (function (map_LT_,f,ch,meta29203,_,fn1,meta29206){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29203 = meta29203;
this._ = _;
this.fn1 = fn1;
this.meta29206 = meta29206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29207,meta29206__$1){
var self__ = this;
var _29207__$1 = this;
return (new cljs.core.async.t_cljs$core$async29205(self__.map_LT_,self__.f,self__.ch,self__.meta29203,self__._,self__.fn1,meta29206__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29207){
var self__ = this;
var _29207__$1 = this;
return self__.meta29206;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29195_SHARP_){
return f1.call(null,(((p1__29195_SHARP_ == null))?null:self__.f.call(null,p1__29195_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29205.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29203","meta29203",-1094993056,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29202","cljs.core.async/t_cljs$core$async29202",120554133,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29206","meta29206",830950690,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29205";

cljs.core.async.t_cljs$core$async29205.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29205");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29205 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29205(map_LT___$1,f__$1,ch__$1,meta29203__$1,___$2,fn1__$1,meta29206){
return (new cljs.core.async.t_cljs$core$async29205(map_LT___$1,f__$1,ch__$1,meta29203__$1,___$2,fn1__$1,meta29206));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29205(self__.map_LT_,self__.f,self__.ch,self__.meta29203,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29203","meta29203",-1094993056,null)], null);
});

cljs.core.async.t_cljs$core$async29202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29202";

cljs.core.async.t_cljs$core$async29202.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29202");
});

cljs.core.async.__GT_t_cljs$core$async29202 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29202(map_LT___$1,f__$1,ch__$1,meta29203){
return (new cljs.core.async.t_cljs$core$async29202(map_LT___$1,f__$1,ch__$1,meta29203));
});

}

return (new cljs.core.async.t_cljs$core$async29202(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29211 = (function (map_GT_,f,ch,meta29212){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29212 = meta29212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29213,meta29212__$1){
var self__ = this;
var _29213__$1 = this;
return (new cljs.core.async.t_cljs$core$async29211(self__.map_GT_,self__.f,self__.ch,meta29212__$1));
});

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29213){
var self__ = this;
var _29213__$1 = this;
return self__.meta29212;
});

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29212","meta29212",1626422768,null)], null);
});

cljs.core.async.t_cljs$core$async29211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29211";

cljs.core.async.t_cljs$core$async29211.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29211");
});

cljs.core.async.__GT_t_cljs$core$async29211 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29211(map_GT___$1,f__$1,ch__$1,meta29212){
return (new cljs.core.async.t_cljs$core$async29211(map_GT___$1,f__$1,ch__$1,meta29212));
});

}

return (new cljs.core.async.t_cljs$core$async29211(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29217 = (function (filter_GT_,p,ch,meta29218){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29218 = meta29218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29219,meta29218__$1){
var self__ = this;
var _29219__$1 = this;
return (new cljs.core.async.t_cljs$core$async29217(self__.filter_GT_,self__.p,self__.ch,meta29218__$1));
});

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29219){
var self__ = this;
var _29219__$1 = this;
return self__.meta29218;
});

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29218","meta29218",-806694915,null)], null);
});

cljs.core.async.t_cljs$core$async29217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29217";

cljs.core.async.t_cljs$core$async29217.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async29217");
});

cljs.core.async.__GT_t_cljs$core$async29217 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29217(filter_GT___$1,p__$1,ch__$1,meta29218){
return (new cljs.core.async.t_cljs$core$async29217(filter_GT___$1,p__$1,ch__$1,meta29218));
});

}

return (new cljs.core.async.t_cljs$core$async29217(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29220 = [];
var len__25826__auto___29264 = arguments.length;
var i__25827__auto___29265 = (0);
while(true){
if((i__25827__auto___29265 < len__25826__auto___29264)){
args29220.push((arguments[i__25827__auto___29265]));

var G__29266 = (i__25827__auto___29265 + (1));
i__25827__auto___29265 = G__29266;
continue;
} else {
}
break;
}

var G__29222 = args29220.length;
switch (G__29222) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29220.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26996__auto___29268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29268,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29268,out){
return (function (state_29243){
var state_val_29244 = (state_29243[(1)]);
if((state_val_29244 === (7))){
var inst_29239 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29245_29269 = state_29243__$1;
(statearr_29245_29269[(2)] = inst_29239);

(statearr_29245_29269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (1))){
var state_29243__$1 = state_29243;
var statearr_29246_29270 = state_29243__$1;
(statearr_29246_29270[(2)] = null);

(statearr_29246_29270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (4))){
var inst_29225 = (state_29243[(7)]);
var inst_29225__$1 = (state_29243[(2)]);
var inst_29226 = (inst_29225__$1 == null);
var state_29243__$1 = (function (){var statearr_29247 = state_29243;
(statearr_29247[(7)] = inst_29225__$1);

return statearr_29247;
})();
if(cljs.core.truth_(inst_29226)){
var statearr_29248_29271 = state_29243__$1;
(statearr_29248_29271[(1)] = (5));

} else {
var statearr_29249_29272 = state_29243__$1;
(statearr_29249_29272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (6))){
var inst_29225 = (state_29243[(7)]);
var inst_29230 = p.call(null,inst_29225);
var state_29243__$1 = state_29243;
if(cljs.core.truth_(inst_29230)){
var statearr_29250_29273 = state_29243__$1;
(statearr_29250_29273[(1)] = (8));

} else {
var statearr_29251_29274 = state_29243__$1;
(statearr_29251_29274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (3))){
var inst_29241 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29243__$1,inst_29241);
} else {
if((state_val_29244 === (2))){
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29243__$1,(4),ch);
} else {
if((state_val_29244 === (11))){
var inst_29233 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29252_29275 = state_29243__$1;
(statearr_29252_29275[(2)] = inst_29233);

(statearr_29252_29275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (9))){
var state_29243__$1 = state_29243;
var statearr_29253_29276 = state_29243__$1;
(statearr_29253_29276[(2)] = null);

(statearr_29253_29276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (5))){
var inst_29228 = cljs.core.async.close_BANG_.call(null,out);
var state_29243__$1 = state_29243;
var statearr_29254_29277 = state_29243__$1;
(statearr_29254_29277[(2)] = inst_29228);

(statearr_29254_29277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (10))){
var inst_29236 = (state_29243[(2)]);
var state_29243__$1 = (function (){var statearr_29255 = state_29243;
(statearr_29255[(8)] = inst_29236);

return statearr_29255;
})();
var statearr_29256_29278 = state_29243__$1;
(statearr_29256_29278[(2)] = null);

(statearr_29256_29278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (8))){
var inst_29225 = (state_29243[(7)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29243__$1,(11),out,inst_29225);
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
});})(c__26996__auto___29268,out))
;
return ((function (switch__26884__auto__,c__26996__auto___29268,out){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29260 = [null,null,null,null,null,null,null,null,null];
(statearr_29260[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29260[(1)] = (1));

return statearr_29260;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29243){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29261){if((e29261 instanceof Object)){
var ex__26888__auto__ = e29261;
var statearr_29262_29279 = state_29243;
(statearr_29262_29279[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29280 = state_29243;
state_29243 = G__29280;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29268,out))
})();
var state__26998__auto__ = (function (){var statearr_29263 = f__26997__auto__.call(null);
(statearr_29263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29268);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29268,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29281 = [];
var len__25826__auto___29284 = arguments.length;
var i__25827__auto___29285 = (0);
while(true){
if((i__25827__auto___29285 < len__25826__auto___29284)){
args29281.push((arguments[i__25827__auto___29285]));

var G__29286 = (i__25827__auto___29285 + (1));
i__25827__auto___29285 = G__29286;
continue;
} else {
}
break;
}

var G__29283 = args29281.length;
switch (G__29283) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29281.length)].join('')));

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
var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__){
return (function (state_29453){
var state_val_29454 = (state_29453[(1)]);
if((state_val_29454 === (7))){
var inst_29449 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29455_29496 = state_29453__$1;
(statearr_29455_29496[(2)] = inst_29449);

(statearr_29455_29496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (20))){
var inst_29419 = (state_29453[(7)]);
var inst_29430 = (state_29453[(2)]);
var inst_29431 = cljs.core.next.call(null,inst_29419);
var inst_29405 = inst_29431;
var inst_29406 = null;
var inst_29407 = (0);
var inst_29408 = (0);
var state_29453__$1 = (function (){var statearr_29456 = state_29453;
(statearr_29456[(8)] = inst_29407);

(statearr_29456[(9)] = inst_29408);

(statearr_29456[(10)] = inst_29430);

(statearr_29456[(11)] = inst_29406);

(statearr_29456[(12)] = inst_29405);

return statearr_29456;
})();
var statearr_29457_29497 = state_29453__$1;
(statearr_29457_29497[(2)] = null);

(statearr_29457_29497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (1))){
var state_29453__$1 = state_29453;
var statearr_29458_29498 = state_29453__$1;
(statearr_29458_29498[(2)] = null);

(statearr_29458_29498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (4))){
var inst_29394 = (state_29453[(13)]);
var inst_29394__$1 = (state_29453[(2)]);
var inst_29395 = (inst_29394__$1 == null);
var state_29453__$1 = (function (){var statearr_29459 = state_29453;
(statearr_29459[(13)] = inst_29394__$1);

return statearr_29459;
})();
if(cljs.core.truth_(inst_29395)){
var statearr_29460_29499 = state_29453__$1;
(statearr_29460_29499[(1)] = (5));

} else {
var statearr_29461_29500 = state_29453__$1;
(statearr_29461_29500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (15))){
var state_29453__$1 = state_29453;
var statearr_29465_29501 = state_29453__$1;
(statearr_29465_29501[(2)] = null);

(statearr_29465_29501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (21))){
var state_29453__$1 = state_29453;
var statearr_29466_29502 = state_29453__$1;
(statearr_29466_29502[(2)] = null);

(statearr_29466_29502[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (13))){
var inst_29407 = (state_29453[(8)]);
var inst_29408 = (state_29453[(9)]);
var inst_29406 = (state_29453[(11)]);
var inst_29405 = (state_29453[(12)]);
var inst_29415 = (state_29453[(2)]);
var inst_29416 = (inst_29408 + (1));
var tmp29462 = inst_29407;
var tmp29463 = inst_29406;
var tmp29464 = inst_29405;
var inst_29405__$1 = tmp29464;
var inst_29406__$1 = tmp29463;
var inst_29407__$1 = tmp29462;
var inst_29408__$1 = inst_29416;
var state_29453__$1 = (function (){var statearr_29467 = state_29453;
(statearr_29467[(8)] = inst_29407__$1);

(statearr_29467[(9)] = inst_29408__$1);

(statearr_29467[(11)] = inst_29406__$1);

(statearr_29467[(12)] = inst_29405__$1);

(statearr_29467[(14)] = inst_29415);

return statearr_29467;
})();
var statearr_29468_29503 = state_29453__$1;
(statearr_29468_29503[(2)] = null);

(statearr_29468_29503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (22))){
var state_29453__$1 = state_29453;
var statearr_29469_29504 = state_29453__$1;
(statearr_29469_29504[(2)] = null);

(statearr_29469_29504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (6))){
var inst_29394 = (state_29453[(13)]);
var inst_29403 = f.call(null,inst_29394);
var inst_29404 = cljs.core.seq.call(null,inst_29403);
var inst_29405 = inst_29404;
var inst_29406 = null;
var inst_29407 = (0);
var inst_29408 = (0);
var state_29453__$1 = (function (){var statearr_29470 = state_29453;
(statearr_29470[(8)] = inst_29407);

(statearr_29470[(9)] = inst_29408);

(statearr_29470[(11)] = inst_29406);

(statearr_29470[(12)] = inst_29405);

return statearr_29470;
})();
var statearr_29471_29505 = state_29453__$1;
(statearr_29471_29505[(2)] = null);

(statearr_29471_29505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (17))){
var inst_29419 = (state_29453[(7)]);
var inst_29423 = cljs.core.chunk_first.call(null,inst_29419);
var inst_29424 = cljs.core.chunk_rest.call(null,inst_29419);
var inst_29425 = cljs.core.count.call(null,inst_29423);
var inst_29405 = inst_29424;
var inst_29406 = inst_29423;
var inst_29407 = inst_29425;
var inst_29408 = (0);
var state_29453__$1 = (function (){var statearr_29472 = state_29453;
(statearr_29472[(8)] = inst_29407);

(statearr_29472[(9)] = inst_29408);

(statearr_29472[(11)] = inst_29406);

(statearr_29472[(12)] = inst_29405);

return statearr_29472;
})();
var statearr_29473_29506 = state_29453__$1;
(statearr_29473_29506[(2)] = null);

(statearr_29473_29506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (3))){
var inst_29451 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29453__$1,inst_29451);
} else {
if((state_val_29454 === (12))){
var inst_29439 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29474_29507 = state_29453__$1;
(statearr_29474_29507[(2)] = inst_29439);

(statearr_29474_29507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (2))){
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29453__$1,(4),in$);
} else {
if((state_val_29454 === (23))){
var inst_29447 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29475_29508 = state_29453__$1;
(statearr_29475_29508[(2)] = inst_29447);

(statearr_29475_29508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (19))){
var inst_29434 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29476_29509 = state_29453__$1;
(statearr_29476_29509[(2)] = inst_29434);

(statearr_29476_29509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (11))){
var inst_29419 = (state_29453[(7)]);
var inst_29405 = (state_29453[(12)]);
var inst_29419__$1 = cljs.core.seq.call(null,inst_29405);
var state_29453__$1 = (function (){var statearr_29477 = state_29453;
(statearr_29477[(7)] = inst_29419__$1);

return statearr_29477;
})();
if(inst_29419__$1){
var statearr_29478_29510 = state_29453__$1;
(statearr_29478_29510[(1)] = (14));

} else {
var statearr_29479_29511 = state_29453__$1;
(statearr_29479_29511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (9))){
var inst_29441 = (state_29453[(2)]);
var inst_29442 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29453__$1 = (function (){var statearr_29480 = state_29453;
(statearr_29480[(15)] = inst_29441);

return statearr_29480;
})();
if(cljs.core.truth_(inst_29442)){
var statearr_29481_29512 = state_29453__$1;
(statearr_29481_29512[(1)] = (21));

} else {
var statearr_29482_29513 = state_29453__$1;
(statearr_29482_29513[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (5))){
var inst_29397 = cljs.core.async.close_BANG_.call(null,out);
var state_29453__$1 = state_29453;
var statearr_29483_29514 = state_29453__$1;
(statearr_29483_29514[(2)] = inst_29397);

(statearr_29483_29514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (14))){
var inst_29419 = (state_29453[(7)]);
var inst_29421 = cljs.core.chunked_seq_QMARK_.call(null,inst_29419);
var state_29453__$1 = state_29453;
if(inst_29421){
var statearr_29484_29515 = state_29453__$1;
(statearr_29484_29515[(1)] = (17));

} else {
var statearr_29485_29516 = state_29453__$1;
(statearr_29485_29516[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (16))){
var inst_29437 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29486_29517 = state_29453__$1;
(statearr_29486_29517[(2)] = inst_29437);

(statearr_29486_29517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (10))){
var inst_29408 = (state_29453[(9)]);
var inst_29406 = (state_29453[(11)]);
var inst_29413 = cljs.core._nth.call(null,inst_29406,inst_29408);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29453__$1,(13),out,inst_29413);
} else {
if((state_val_29454 === (18))){
var inst_29419 = (state_29453[(7)]);
var inst_29428 = cljs.core.first.call(null,inst_29419);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29453__$1,(20),out,inst_29428);
} else {
if((state_val_29454 === (8))){
var inst_29407 = (state_29453[(8)]);
var inst_29408 = (state_29453[(9)]);
var inst_29410 = (inst_29408 < inst_29407);
var inst_29411 = inst_29410;
var state_29453__$1 = state_29453;
if(cljs.core.truth_(inst_29411)){
var statearr_29487_29518 = state_29453__$1;
(statearr_29487_29518[(1)] = (10));

} else {
var statearr_29488_29519 = state_29453__$1;
(statearr_29488_29519[(1)] = (11));

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
});})(c__26996__auto__))
;
return ((function (switch__26884__auto__,c__26996__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26885__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26885__auto____0 = (function (){
var statearr_29492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29492[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26885__auto__);

(statearr_29492[(1)] = (1));

return statearr_29492;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26885__auto____1 = (function (state_29453){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29493){if((e29493 instanceof Object)){
var ex__26888__auto__ = e29493;
var statearr_29494_29521 = state_29453;
(statearr_29494_29521[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29522 = state_29453;
state_29453 = G__29522;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26885__auto__ = function(state_29453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26885__auto____1.call(this,state_29453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26885__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26885__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__))
})();
var state__26998__auto__ = (function (){var statearr_29495 = f__26997__auto__.call(null);
(statearr_29495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_29495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__))
);

return c__26996__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29523 = [];
var len__25826__auto___29526 = arguments.length;
var i__25827__auto___29527 = (0);
while(true){
if((i__25827__auto___29527 < len__25826__auto___29526)){
args29523.push((arguments[i__25827__auto___29527]));

var G__29528 = (i__25827__auto___29527 + (1));
i__25827__auto___29527 = G__29528;
continue;
} else {
}
break;
}

var G__29525 = args29523.length;
switch (G__29525) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29523.length)].join('')));

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
var args29530 = [];
var len__25826__auto___29533 = arguments.length;
var i__25827__auto___29534 = (0);
while(true){
if((i__25827__auto___29534 < len__25826__auto___29533)){
args29530.push((arguments[i__25827__auto___29534]));

var G__29535 = (i__25827__auto___29534 + (1));
i__25827__auto___29534 = G__29535;
continue;
} else {
}
break;
}

var G__29532 = args29530.length;
switch (G__29532) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29530.length)].join('')));

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
var args29537 = [];
var len__25826__auto___29588 = arguments.length;
var i__25827__auto___29589 = (0);
while(true){
if((i__25827__auto___29589 < len__25826__auto___29588)){
args29537.push((arguments[i__25827__auto___29589]));

var G__29590 = (i__25827__auto___29589 + (1));
i__25827__auto___29589 = G__29590;
continue;
} else {
}
break;
}

var G__29539 = args29537.length;
switch (G__29539) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29537.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26996__auto___29592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29592,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29592,out){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (7))){
var inst_29558 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29565_29593 = state_29563__$1;
(statearr_29565_29593[(2)] = inst_29558);

(statearr_29565_29593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (1))){
var inst_29540 = null;
var state_29563__$1 = (function (){var statearr_29566 = state_29563;
(statearr_29566[(7)] = inst_29540);

return statearr_29566;
})();
var statearr_29567_29594 = state_29563__$1;
(statearr_29567_29594[(2)] = null);

(statearr_29567_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (4))){
var inst_29543 = (state_29563[(8)]);
var inst_29543__$1 = (state_29563[(2)]);
var inst_29544 = (inst_29543__$1 == null);
var inst_29545 = cljs.core.not.call(null,inst_29544);
var state_29563__$1 = (function (){var statearr_29568 = state_29563;
(statearr_29568[(8)] = inst_29543__$1);

return statearr_29568;
})();
if(inst_29545){
var statearr_29569_29595 = state_29563__$1;
(statearr_29569_29595[(1)] = (5));

} else {
var statearr_29570_29596 = state_29563__$1;
(statearr_29570_29596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (6))){
var state_29563__$1 = state_29563;
var statearr_29571_29597 = state_29563__$1;
(statearr_29571_29597[(2)] = null);

(statearr_29571_29597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (3))){
var inst_29560 = (state_29563[(2)]);
var inst_29561 = cljs.core.async.close_BANG_.call(null,out);
var state_29563__$1 = (function (){var statearr_29572 = state_29563;
(statearr_29572[(9)] = inst_29560);

return statearr_29572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (2))){
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(4),ch);
} else {
if((state_val_29564 === (11))){
var inst_29543 = (state_29563[(8)]);
var inst_29552 = (state_29563[(2)]);
var inst_29540 = inst_29543;
var state_29563__$1 = (function (){var statearr_29573 = state_29563;
(statearr_29573[(10)] = inst_29552);

(statearr_29573[(7)] = inst_29540);

return statearr_29573;
})();
var statearr_29574_29598 = state_29563__$1;
(statearr_29574_29598[(2)] = null);

(statearr_29574_29598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (9))){
var inst_29543 = (state_29563[(8)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29563__$1,(11),out,inst_29543);
} else {
if((state_val_29564 === (5))){
var inst_29543 = (state_29563[(8)]);
var inst_29540 = (state_29563[(7)]);
var inst_29547 = cljs.core._EQ_.call(null,inst_29543,inst_29540);
var state_29563__$1 = state_29563;
if(inst_29547){
var statearr_29576_29599 = state_29563__$1;
(statearr_29576_29599[(1)] = (8));

} else {
var statearr_29577_29600 = state_29563__$1;
(statearr_29577_29600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (10))){
var inst_29555 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29578_29601 = state_29563__$1;
(statearr_29578_29601[(2)] = inst_29555);

(statearr_29578_29601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29540 = (state_29563[(7)]);
var tmp29575 = inst_29540;
var inst_29540__$1 = tmp29575;
var state_29563__$1 = (function (){var statearr_29579 = state_29563;
(statearr_29579[(7)] = inst_29540__$1);

return statearr_29579;
})();
var statearr_29580_29602 = state_29563__$1;
(statearr_29580_29602[(2)] = null);

(statearr_29580_29602[(1)] = (2));


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
});})(c__26996__auto___29592,out))
;
return ((function (switch__26884__auto__,c__26996__auto___29592,out){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29584[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29563){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__26888__auto__ = e29585;
var statearr_29586_29603 = state_29563;
(statearr_29586_29603[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29604 = state_29563;
state_29563 = G__29604;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29592,out))
})();
var state__26998__auto__ = (function (){var statearr_29587 = f__26997__auto__.call(null);
(statearr_29587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29592);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29592,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29605 = [];
var len__25826__auto___29675 = arguments.length;
var i__25827__auto___29676 = (0);
while(true){
if((i__25827__auto___29676 < len__25826__auto___29675)){
args29605.push((arguments[i__25827__auto___29676]));

var G__29677 = (i__25827__auto___29676 + (1));
i__25827__auto___29676 = G__29677;
continue;
} else {
}
break;
}

var G__29607 = args29605.length;
switch (G__29607) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29605.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26996__auto___29679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29679,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29679,out){
return (function (state_29645){
var state_val_29646 = (state_29645[(1)]);
if((state_val_29646 === (7))){
var inst_29641 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29647_29680 = state_29645__$1;
(statearr_29647_29680[(2)] = inst_29641);

(statearr_29647_29680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (1))){
var inst_29608 = (new Array(n));
var inst_29609 = inst_29608;
var inst_29610 = (0);
var state_29645__$1 = (function (){var statearr_29648 = state_29645;
(statearr_29648[(7)] = inst_29609);

(statearr_29648[(8)] = inst_29610);

return statearr_29648;
})();
var statearr_29649_29681 = state_29645__$1;
(statearr_29649_29681[(2)] = null);

(statearr_29649_29681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (4))){
var inst_29613 = (state_29645[(9)]);
var inst_29613__$1 = (state_29645[(2)]);
var inst_29614 = (inst_29613__$1 == null);
var inst_29615 = cljs.core.not.call(null,inst_29614);
var state_29645__$1 = (function (){var statearr_29650 = state_29645;
(statearr_29650[(9)] = inst_29613__$1);

return statearr_29650;
})();
if(inst_29615){
var statearr_29651_29682 = state_29645__$1;
(statearr_29651_29682[(1)] = (5));

} else {
var statearr_29652_29683 = state_29645__$1;
(statearr_29652_29683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (15))){
var inst_29635 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29653_29684 = state_29645__$1;
(statearr_29653_29684[(2)] = inst_29635);

(statearr_29653_29684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (13))){
var state_29645__$1 = state_29645;
var statearr_29654_29685 = state_29645__$1;
(statearr_29654_29685[(2)] = null);

(statearr_29654_29685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (6))){
var inst_29610 = (state_29645[(8)]);
var inst_29631 = (inst_29610 > (0));
var state_29645__$1 = state_29645;
if(cljs.core.truth_(inst_29631)){
var statearr_29655_29686 = state_29645__$1;
(statearr_29655_29686[(1)] = (12));

} else {
var statearr_29656_29687 = state_29645__$1;
(statearr_29656_29687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (3))){
var inst_29643 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29645__$1,inst_29643);
} else {
if((state_val_29646 === (12))){
var inst_29609 = (state_29645[(7)]);
var inst_29633 = cljs.core.vec.call(null,inst_29609);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29645__$1,(15),out,inst_29633);
} else {
if((state_val_29646 === (2))){
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29645__$1,(4),ch);
} else {
if((state_val_29646 === (11))){
var inst_29625 = (state_29645[(2)]);
var inst_29626 = (new Array(n));
var inst_29609 = inst_29626;
var inst_29610 = (0);
var state_29645__$1 = (function (){var statearr_29657 = state_29645;
(statearr_29657[(7)] = inst_29609);

(statearr_29657[(10)] = inst_29625);

(statearr_29657[(8)] = inst_29610);

return statearr_29657;
})();
var statearr_29658_29688 = state_29645__$1;
(statearr_29658_29688[(2)] = null);

(statearr_29658_29688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (9))){
var inst_29609 = (state_29645[(7)]);
var inst_29623 = cljs.core.vec.call(null,inst_29609);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29645__$1,(11),out,inst_29623);
} else {
if((state_val_29646 === (5))){
var inst_29613 = (state_29645[(9)]);
var inst_29609 = (state_29645[(7)]);
var inst_29618 = (state_29645[(11)]);
var inst_29610 = (state_29645[(8)]);
var inst_29617 = (inst_29609[inst_29610] = inst_29613);
var inst_29618__$1 = (inst_29610 + (1));
var inst_29619 = (inst_29618__$1 < n);
var state_29645__$1 = (function (){var statearr_29659 = state_29645;
(statearr_29659[(12)] = inst_29617);

(statearr_29659[(11)] = inst_29618__$1);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29619)){
var statearr_29660_29689 = state_29645__$1;
(statearr_29660_29689[(1)] = (8));

} else {
var statearr_29661_29690 = state_29645__$1;
(statearr_29661_29690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (14))){
var inst_29638 = (state_29645[(2)]);
var inst_29639 = cljs.core.async.close_BANG_.call(null,out);
var state_29645__$1 = (function (){var statearr_29663 = state_29645;
(statearr_29663[(13)] = inst_29638);

return statearr_29663;
})();
var statearr_29664_29691 = state_29645__$1;
(statearr_29664_29691[(2)] = inst_29639);

(statearr_29664_29691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (10))){
var inst_29629 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29665_29692 = state_29645__$1;
(statearr_29665_29692[(2)] = inst_29629);

(statearr_29665_29692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (8))){
var inst_29609 = (state_29645[(7)]);
var inst_29618 = (state_29645[(11)]);
var tmp29662 = inst_29609;
var inst_29609__$1 = tmp29662;
var inst_29610 = inst_29618;
var state_29645__$1 = (function (){var statearr_29666 = state_29645;
(statearr_29666[(7)] = inst_29609__$1);

(statearr_29666[(8)] = inst_29610);

return statearr_29666;
})();
var statearr_29667_29693 = state_29645__$1;
(statearr_29667_29693[(2)] = null);

(statearr_29667_29693[(1)] = (2));


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
});})(c__26996__auto___29679,out))
;
return ((function (switch__26884__auto__,c__26996__auto___29679,out){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29671[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29645){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29672){if((e29672 instanceof Object)){
var ex__26888__auto__ = e29672;
var statearr_29673_29694 = state_29645;
(statearr_29673_29694[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29695 = state_29645;
state_29645 = G__29695;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29679,out))
})();
var state__26998__auto__ = (function (){var statearr_29674 = f__26997__auto__.call(null);
(statearr_29674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29679);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29679,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29696 = [];
var len__25826__auto___29770 = arguments.length;
var i__25827__auto___29771 = (0);
while(true){
if((i__25827__auto___29771 < len__25826__auto___29770)){
args29696.push((arguments[i__25827__auto___29771]));

var G__29772 = (i__25827__auto___29771 + (1));
i__25827__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var G__29698 = args29696.length;
switch (G__29698) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29696.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26996__auto___29774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___29774,out){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___29774,out){
return (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (7))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29742_29775 = state_29740__$1;
(statearr_29742_29775[(2)] = inst_29736);

(statearr_29742_29775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (1))){
var inst_29699 = [];
var inst_29700 = inst_29699;
var inst_29701 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29740__$1 = (function (){var statearr_29743 = state_29740;
(statearr_29743[(7)] = inst_29701);

(statearr_29743[(8)] = inst_29700);

return statearr_29743;
})();
var statearr_29744_29776 = state_29740__$1;
(statearr_29744_29776[(2)] = null);

(statearr_29744_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (4))){
var inst_29704 = (state_29740[(9)]);
var inst_29704__$1 = (state_29740[(2)]);
var inst_29705 = (inst_29704__$1 == null);
var inst_29706 = cljs.core.not.call(null,inst_29705);
var state_29740__$1 = (function (){var statearr_29745 = state_29740;
(statearr_29745[(9)] = inst_29704__$1);

return statearr_29745;
})();
if(inst_29706){
var statearr_29746_29777 = state_29740__$1;
(statearr_29746_29777[(1)] = (5));

} else {
var statearr_29747_29778 = state_29740__$1;
(statearr_29747_29778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (15))){
var inst_29730 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29748_29779 = state_29740__$1;
(statearr_29748_29779[(2)] = inst_29730);

(statearr_29748_29779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (13))){
var state_29740__$1 = state_29740;
var statearr_29749_29780 = state_29740__$1;
(statearr_29749_29780[(2)] = null);

(statearr_29749_29780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29700 = (state_29740[(8)]);
var inst_29725 = inst_29700.length;
var inst_29726 = (inst_29725 > (0));
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29726)){
var statearr_29750_29781 = state_29740__$1;
(statearr_29750_29781[(1)] = (12));

} else {
var statearr_29751_29782 = state_29740__$1;
(statearr_29751_29782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (12))){
var inst_29700 = (state_29740[(8)]);
var inst_29728 = cljs.core.vec.call(null,inst_29700);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(15),out,inst_29728);
} else {
if((state_val_29741 === (2))){
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(4),ch);
} else {
if((state_val_29741 === (11))){
var inst_29708 = (state_29740[(10)]);
var inst_29704 = (state_29740[(9)]);
var inst_29718 = (state_29740[(2)]);
var inst_29719 = [];
var inst_29720 = inst_29719.push(inst_29704);
var inst_29700 = inst_29719;
var inst_29701 = inst_29708;
var state_29740__$1 = (function (){var statearr_29752 = state_29740;
(statearr_29752[(11)] = inst_29718);

(statearr_29752[(7)] = inst_29701);

(statearr_29752[(12)] = inst_29720);

(statearr_29752[(8)] = inst_29700);

return statearr_29752;
})();
var statearr_29753_29783 = state_29740__$1;
(statearr_29753_29783[(2)] = null);

(statearr_29753_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (9))){
var inst_29700 = (state_29740[(8)]);
var inst_29716 = cljs.core.vec.call(null,inst_29700);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(11),out,inst_29716);
} else {
if((state_val_29741 === (5))){
var inst_29708 = (state_29740[(10)]);
var inst_29701 = (state_29740[(7)]);
var inst_29704 = (state_29740[(9)]);
var inst_29708__$1 = f.call(null,inst_29704);
var inst_29709 = cljs.core._EQ_.call(null,inst_29708__$1,inst_29701);
var inst_29710 = cljs.core.keyword_identical_QMARK_.call(null,inst_29701,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29711 = (inst_29709) || (inst_29710);
var state_29740__$1 = (function (){var statearr_29754 = state_29740;
(statearr_29754[(10)] = inst_29708__$1);

return statearr_29754;
})();
if(cljs.core.truth_(inst_29711)){
var statearr_29755_29784 = state_29740__$1;
(statearr_29755_29784[(1)] = (8));

} else {
var statearr_29756_29785 = state_29740__$1;
(statearr_29756_29785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (14))){
var inst_29733 = (state_29740[(2)]);
var inst_29734 = cljs.core.async.close_BANG_.call(null,out);
var state_29740__$1 = (function (){var statearr_29758 = state_29740;
(statearr_29758[(13)] = inst_29733);

return statearr_29758;
})();
var statearr_29759_29786 = state_29740__$1;
(statearr_29759_29786[(2)] = inst_29734);

(statearr_29759_29786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (10))){
var inst_29723 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29760_29787 = state_29740__$1;
(statearr_29760_29787[(2)] = inst_29723);

(statearr_29760_29787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (8))){
var inst_29708 = (state_29740[(10)]);
var inst_29704 = (state_29740[(9)]);
var inst_29700 = (state_29740[(8)]);
var inst_29713 = inst_29700.push(inst_29704);
var tmp29757 = inst_29700;
var inst_29700__$1 = tmp29757;
var inst_29701 = inst_29708;
var state_29740__$1 = (function (){var statearr_29761 = state_29740;
(statearr_29761[(14)] = inst_29713);

(statearr_29761[(7)] = inst_29701);

(statearr_29761[(8)] = inst_29700__$1);

return statearr_29761;
})();
var statearr_29762_29788 = state_29740__$1;
(statearr_29762_29788[(2)] = null);

(statearr_29762_29788[(1)] = (2));


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
});})(c__26996__auto___29774,out))
;
return ((function (switch__26884__auto__,c__26996__auto___29774,out){
return (function() {
var cljs$core$async$state_machine__26885__auto__ = null;
var cljs$core$async$state_machine__26885__auto____0 = (function (){
var statearr_29766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29766[(0)] = cljs$core$async$state_machine__26885__auto__);

(statearr_29766[(1)] = (1));

return statearr_29766;
});
var cljs$core$async$state_machine__26885__auto____1 = (function (state_29740){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_29740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e29767){if((e29767 instanceof Object)){
var ex__26888__auto__ = e29767;
var statearr_29768_29789 = state_29740;
(statearr_29768_29789[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29790 = state_29740;
state_29740 = G__29790;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
cljs$core$async$state_machine__26885__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26885__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26885__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26885__auto____0;
cljs$core$async$state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26885__auto____1;
return cljs$core$async$state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___29774,out))
})();
var state__26998__auto__ = (function (){var statearr_29769 = f__26997__auto__.call(null);
(statearr_29769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___29774);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___29774,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479332381365