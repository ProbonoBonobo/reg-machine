// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async22965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22965 = (function (fn_handler,f,meta22966){
this.fn_handler = fn_handler;
this.f = f;
this.meta22966 = meta22966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22967,meta22966__$1){
var self__ = this;
var _22967__$1 = this;
return (new cljs.core.async.t_cljs$core$async22965(self__.fn_handler,self__.f,meta22966__$1));
});

cljs.core.async.t_cljs$core$async22965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22967){
var self__ = this;
var _22967__$1 = this;
return self__.meta22966;
});

cljs.core.async.t_cljs$core$async22965.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22966","meta22966",634155010,null)], null);
});

cljs.core.async.t_cljs$core$async22965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22965";

cljs.core.async.t_cljs$core$async22965.cljs$lang$ctorPrWriter = (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async22965");
});

cljs.core.async.__GT_t_cljs$core$async22965 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22965(fn_handler__$1,f__$1,meta22966){
return (new cljs.core.async.t_cljs$core$async22965(fn_handler__$1,f__$1,meta22966));
});

}

return (new cljs.core.async.t_cljs$core$async22965(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args22970 = [];
var len__20747__auto___22973 = arguments.length;
var i__20748__auto___22974 = (0);
while(true){
if((i__20748__auto___22974 < len__20747__auto___22973)){
args22970.push((arguments[i__20748__auto___22974]));

var G__22975 = (i__20748__auto___22974 + (1));
i__20748__auto___22974 = G__22975;
continue;
} else {
}
break;
}

var G__22972 = args22970.length;
switch (G__22972) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22970.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
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
var args22977 = [];
var len__20747__auto___22980 = arguments.length;
var i__20748__auto___22981 = (0);
while(true){
if((i__20748__auto___22981 < len__20747__auto___22980)){
args22977.push((arguments[i__20748__auto___22981]));

var G__22982 = (i__20748__auto___22981 + (1));
i__20748__auto___22981 = G__22982;
continue;
} else {
}
break;
}

var G__22979 = args22977.length;
switch (G__22979) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22977.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22984 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22984);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22984,ret){
return (function (){
return fn1.call(null,val_22984);
});})(val_22984,ret))
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
var args22985 = [];
var len__20747__auto___22988 = arguments.length;
var i__20748__auto___22989 = (0);
while(true){
if((i__20748__auto___22989 < len__20747__auto___22988)){
args22985.push((arguments[i__20748__auto___22989]));

var G__22990 = (i__20748__auto___22989 + (1));
i__20748__auto___22989 = G__22990;
continue;
} else {
}
break;
}

var G__22987 = args22985.length;
switch (G__22987) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22985.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__20592__auto___22992 = n;
var x_22993 = (0);
while(true){
if((x_22993 < n__20592__auto___22992)){
(a[x_22993] = (0));

var G__22994 = (x_22993 + (1));
x_22993 = G__22994;
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

var G__22995 = (i + (1));
i = G__22995;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22999 = (function (alt_flag,flag,meta23000){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23000 = meta23000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23001,meta23000__$1){
var self__ = this;
var _23001__$1 = this;
return (new cljs.core.async.t_cljs$core$async22999(self__.alt_flag,self__.flag,meta23000__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23001){
var self__ = this;
var _23001__$1 = this;
return self__.meta23000;
});})(flag))
;

cljs.core.async.t_cljs$core$async22999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22999.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23000","meta23000",430271573,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22999";

cljs.core.async.t_cljs$core$async22999.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async22999");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22999 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22999(alt_flag__$1,flag__$1,meta23000){
return (new cljs.core.async.t_cljs$core$async22999(alt_flag__$1,flag__$1,meta23000));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22999(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23005 = (function (alt_handler,flag,cb,meta23006){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23006 = meta23006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23007,meta23006__$1){
var self__ = this;
var _23007__$1 = this;
return (new cljs.core.async.t_cljs$core$async23005(self__.alt_handler,self__.flag,self__.cb,meta23006__$1));
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23007){
var self__ = this;
var _23007__$1 = this;
return self__.meta23006;
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23006","meta23006",346848565,null)], null);
});

cljs.core.async.t_cljs$core$async23005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23005";

cljs.core.async.t_cljs$core$async23005.cljs$lang$ctorPrWriter = (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async23005");
});

cljs.core.async.__GT_t_cljs$core$async23005 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23005(alt_handler__$1,flag__$1,cb__$1,meta23006){
return (new cljs.core.async.t_cljs$core$async23005(alt_handler__$1,flag__$1,cb__$1,meta23006));
});

}

return (new cljs.core.async.t_cljs$core$async23005(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23008_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23008_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23009_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19689__auto__ = wport;
if(cljs.core.truth_(or__19689__auto__)){
return or__19689__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23010 = (i + (1));
i = G__23010;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19689__auto__ = ret;
if(cljs.core.truth_(or__19689__auto__)){
return or__19689__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19677__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19677__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19677__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__20754__auto__ = [];
var len__20747__auto___23016 = arguments.length;
var i__20748__auto___23017 = (0);
while(true){
if((i__20748__auto___23017 < len__20747__auto___23016)){
args__20754__auto__.push((arguments[i__20748__auto___23017]));

var G__23018 = (i__20748__auto___23017 + (1));
i__20748__auto___23017 = G__23018;
continue;
} else {
}
break;
}

var argseq__20755__auto__ = ((((1) < args__20754__auto__.length))?(new cljs.core.IndexedSeq(args__20754__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20755__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23013){
var map__23014 = p__23013;
var map__23014__$1 = ((((!((map__23014 == null)))?((((map__23014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23014):map__23014);
var opts = map__23014__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23011){
var G__23012 = cljs.core.first.call(null,seq23011);
var seq23011__$1 = cljs.core.next.call(null,seq23011);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23012,seq23011__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23019 = [];
var len__20747__auto___23069 = arguments.length;
var i__20748__auto___23070 = (0);
while(true){
if((i__20748__auto___23070 < len__20747__auto___23069)){
args23019.push((arguments[i__20748__auto___23070]));

var G__23071 = (i__20748__auto___23070 + (1));
i__20748__auto___23070 = G__23071;
continue;
} else {
}
break;
}

var G__23021 = args23019.length;
switch (G__23021) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23019.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22917__auto___23073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___23073){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___23073){
return (function (state_23045){
var state_val_23046 = (state_23045[(1)]);
if((state_val_23046 === (7))){
var inst_23041 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
var statearr_23047_23074 = state_23045__$1;
(statearr_23047_23074[(2)] = inst_23041);

(statearr_23047_23074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (1))){
var state_23045__$1 = state_23045;
var statearr_23048_23075 = state_23045__$1;
(statearr_23048_23075[(2)] = null);

(statearr_23048_23075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (4))){
var inst_23024 = (state_23045[(7)]);
var inst_23024__$1 = (state_23045[(2)]);
var inst_23025 = (inst_23024__$1 == null);
var state_23045__$1 = (function (){var statearr_23049 = state_23045;
(statearr_23049[(7)] = inst_23024__$1);

return statearr_23049;
})();
if(cljs.core.truth_(inst_23025)){
var statearr_23050_23076 = state_23045__$1;
(statearr_23050_23076[(1)] = (5));

} else {
var statearr_23051_23077 = state_23045__$1;
(statearr_23051_23077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (13))){
var state_23045__$1 = state_23045;
var statearr_23052_23078 = state_23045__$1;
(statearr_23052_23078[(2)] = null);

(statearr_23052_23078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (6))){
var inst_23024 = (state_23045[(7)]);
var state_23045__$1 = state_23045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23045__$1,(11),to,inst_23024);
} else {
if((state_val_23046 === (3))){
var inst_23043 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23045__$1,inst_23043);
} else {
if((state_val_23046 === (12))){
var state_23045__$1 = state_23045;
var statearr_23053_23079 = state_23045__$1;
(statearr_23053_23079[(2)] = null);

(statearr_23053_23079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (2))){
var state_23045__$1 = state_23045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23045__$1,(4),from);
} else {
if((state_val_23046 === (11))){
var inst_23034 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
if(cljs.core.truth_(inst_23034)){
var statearr_23054_23080 = state_23045__$1;
(statearr_23054_23080[(1)] = (12));

} else {
var statearr_23055_23081 = state_23045__$1;
(statearr_23055_23081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (9))){
var state_23045__$1 = state_23045;
var statearr_23056_23082 = state_23045__$1;
(statearr_23056_23082[(2)] = null);

(statearr_23056_23082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (5))){
var state_23045__$1 = state_23045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23057_23083 = state_23045__$1;
(statearr_23057_23083[(1)] = (8));

} else {
var statearr_23058_23084 = state_23045__$1;
(statearr_23058_23084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (14))){
var inst_23039 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
var statearr_23059_23085 = state_23045__$1;
(statearr_23059_23085[(2)] = inst_23039);

(statearr_23059_23085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (10))){
var inst_23031 = (state_23045[(2)]);
var state_23045__$1 = state_23045;
var statearr_23060_23086 = state_23045__$1;
(statearr_23060_23086[(2)] = inst_23031);

(statearr_23060_23086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23046 === (8))){
var inst_23028 = cljs.core.async.close_BANG_.call(null,to);
var state_23045__$1 = state_23045;
var statearr_23061_23087 = state_23045__$1;
(statearr_23061_23087[(2)] = inst_23028);

(statearr_23061_23087[(1)] = (10));


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
});})(c__22917__auto___23073))
;
return ((function (switch__22805__auto__,c__22917__auto___23073){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_23065 = [null,null,null,null,null,null,null,null];
(statearr_23065[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_23065[(1)] = (1));

return statearr_23065;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_23045){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23066){if((e23066 instanceof Object)){
var ex__22809__auto__ = e23066;
var statearr_23067_23088 = state_23045;
(statearr_23067_23088[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23089 = state_23045;
state_23045 = G__23089;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_23045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_23045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___23073))
})();
var state__22919__auto__ = (function (){var statearr_23068 = f__22918__auto__.call(null);
(statearr_23068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___23073);

return statearr_23068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___23073))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23273){
var vec__23274 = p__23273;
var v = cljs.core.nth.call(null,vec__23274,(0),null);
var p = cljs.core.nth.call(null,vec__23274,(1),null);
var job = vec__23274;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22917__auto___23456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___23456,res,vec__23274,v,p,job,jobs,results){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___23456,res,vec__23274,v,p,job,jobs,results){
return (function (state_23279){
var state_val_23280 = (state_23279[(1)]);
if((state_val_23280 === (1))){
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23279__$1,(2),res,v);
} else {
if((state_val_23280 === (2))){
var inst_23276 = (state_23279[(2)]);
var inst_23277 = cljs.core.async.close_BANG_.call(null,res);
var state_23279__$1 = (function (){var statearr_23281 = state_23279;
(statearr_23281[(7)] = inst_23276);

return statearr_23281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23279__$1,inst_23277);
} else {
return null;
}
}
});})(c__22917__auto___23456,res,vec__23274,v,p,job,jobs,results))
;
return ((function (switch__22805__auto__,c__22917__auto___23456,res,vec__23274,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0 = (function (){
var statearr_23285 = [null,null,null,null,null,null,null,null];
(statearr_23285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__);

(statearr_23285[(1)] = (1));

return statearr_23285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1 = (function (state_23279){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23286){if((e23286 instanceof Object)){
var ex__22809__auto__ = e23286;
var statearr_23287_23457 = state_23279;
(statearr_23287_23457[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23458 = state_23279;
state_23279 = G__23458;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = function(state_23279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1.call(this,state_23279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___23456,res,vec__23274,v,p,job,jobs,results))
})();
var state__22919__auto__ = (function (){var statearr_23288 = f__22918__auto__.call(null);
(statearr_23288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___23456);

return statearr_23288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___23456,res,vec__23274,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23289){
var vec__23290 = p__23289;
var v = cljs.core.nth.call(null,vec__23290,(0),null);
var p = cljs.core.nth.call(null,vec__23290,(1),null);
var job = vec__23290;
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
var n__20592__auto___23459 = n;
var __23460 = (0);
while(true){
if((__23460 < n__20592__auto___23459)){
var G__23291_23461 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23291_23461) {
case "compute":
var c__22917__auto___23463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23460,c__22917__auto___23463,G__23291_23461,n__20592__auto___23459,jobs,results,process,async){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (__23460,c__22917__auto___23463,G__23291_23461,n__20592__auto___23459,jobs,results,process,async){
return (function (state_23304){
var state_val_23305 = (state_23304[(1)]);
if((state_val_23305 === (1))){
var state_23304__$1 = state_23304;
var statearr_23306_23464 = state_23304__$1;
(statearr_23306_23464[(2)] = null);

(statearr_23306_23464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (2))){
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23304__$1,(4),jobs);
} else {
if((state_val_23305 === (3))){
var inst_23302 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23304__$1,inst_23302);
} else {
if((state_val_23305 === (4))){
var inst_23294 = (state_23304[(2)]);
var inst_23295 = process.call(null,inst_23294);
var state_23304__$1 = state_23304;
if(cljs.core.truth_(inst_23295)){
var statearr_23307_23465 = state_23304__$1;
(statearr_23307_23465[(1)] = (5));

} else {
var statearr_23308_23466 = state_23304__$1;
(statearr_23308_23466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (5))){
var state_23304__$1 = state_23304;
var statearr_23309_23467 = state_23304__$1;
(statearr_23309_23467[(2)] = null);

(statearr_23309_23467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (6))){
var state_23304__$1 = state_23304;
var statearr_23310_23468 = state_23304__$1;
(statearr_23310_23468[(2)] = null);

(statearr_23310_23468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23305 === (7))){
var inst_23300 = (state_23304[(2)]);
var state_23304__$1 = state_23304;
var statearr_23311_23469 = state_23304__$1;
(statearr_23311_23469[(2)] = inst_23300);

(statearr_23311_23469[(1)] = (3));


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
});})(__23460,c__22917__auto___23463,G__23291_23461,n__20592__auto___23459,jobs,results,process,async))
;
return ((function (__23460,switch__22805__auto__,c__22917__auto___23463,G__23291_23461,n__20592__auto___23459,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0 = (function (){
var statearr_23315 = [null,null,null,null,null,null,null];
(statearr_23315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__);

(statearr_23315[(1)] = (1));

return statearr_23315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1 = (function (state_23304){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23316){if((e23316 instanceof Object)){
var ex__22809__auto__ = e23316;
var statearr_23317_23470 = state_23304;
(statearr_23317_23470[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23471 = state_23304;
state_23304 = G__23471;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = function(state_23304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1.call(this,state_23304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__;
})()
;})(__23460,switch__22805__auto__,c__22917__auto___23463,G__23291_23461,n__20592__auto___23459,jobs,results,process,async))
})();
var state__22919__auto__ = (function (){var statearr_23318 = f__22918__auto__.call(null);
(statearr_23318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___23463);

return statearr_23318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(__23460,c__22917__auto___23463,G__23291_23461,n__20592__auto___23459,jobs,results,process,async))
);


break;
case "async":
var c__22917__auto___23472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23460,c__22917__auto___23472,G__23291_23461,n__20592__auto___23459,jobs,results,process,async){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (__23460,c__22917__auto___23472,G__23291_23461,n__20592__auto___23459,jobs,results,process,async){
return (function (state_23331){
var state_val_23332 = (state_23331[(1)]);
if((state_val_23332 === (1))){
var state_23331__$1 = state_23331;
var statearr_23333_23473 = state_23331__$1;
(statearr_23333_23473[(2)] = null);

(statearr_23333_23473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (2))){
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23331__$1,(4),jobs);
} else {
if((state_val_23332 === (3))){
var inst_23329 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23331__$1,inst_23329);
} else {
if((state_val_23332 === (4))){
var inst_23321 = (state_23331[(2)]);
var inst_23322 = async.call(null,inst_23321);
var state_23331__$1 = state_23331;
if(cljs.core.truth_(inst_23322)){
var statearr_23334_23474 = state_23331__$1;
(statearr_23334_23474[(1)] = (5));

} else {
var statearr_23335_23475 = state_23331__$1;
(statearr_23335_23475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (5))){
var state_23331__$1 = state_23331;
var statearr_23336_23476 = state_23331__$1;
(statearr_23336_23476[(2)] = null);

(statearr_23336_23476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (6))){
var state_23331__$1 = state_23331;
var statearr_23337_23477 = state_23331__$1;
(statearr_23337_23477[(2)] = null);

(statearr_23337_23477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (7))){
var inst_23327 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
var statearr_23338_23478 = state_23331__$1;
(statearr_23338_23478[(2)] = inst_23327);

(statearr_23338_23478[(1)] = (3));


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
});})(__23460,c__22917__auto___23472,G__23291_23461,n__20592__auto___23459,jobs,results,process,async))
;
return ((function (__23460,switch__22805__auto__,c__22917__auto___23472,G__23291_23461,n__20592__auto___23459,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0 = (function (){
var statearr_23342 = [null,null,null,null,null,null,null];
(statearr_23342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__);

(statearr_23342[(1)] = (1));

return statearr_23342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1 = (function (state_23331){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23343){if((e23343 instanceof Object)){
var ex__22809__auto__ = e23343;
var statearr_23344_23479 = state_23331;
(statearr_23344_23479[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23480 = state_23331;
state_23331 = G__23480;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = function(state_23331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1.call(this,state_23331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__;
})()
;})(__23460,switch__22805__auto__,c__22917__auto___23472,G__23291_23461,n__20592__auto___23459,jobs,results,process,async))
})();
var state__22919__auto__ = (function (){var statearr_23345 = f__22918__auto__.call(null);
(statearr_23345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___23472);

return statearr_23345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(__23460,c__22917__auto___23472,G__23291_23461,n__20592__auto___23459,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23481 = (__23460 + (1));
__23460 = G__23481;
continue;
} else {
}
break;
}

var c__22917__auto___23482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___23482,jobs,results,process,async){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___23482,jobs,results,process,async){
return (function (state_23367){
var state_val_23368 = (state_23367[(1)]);
if((state_val_23368 === (1))){
var state_23367__$1 = state_23367;
var statearr_23369_23483 = state_23367__$1;
(statearr_23369_23483[(2)] = null);

(statearr_23369_23483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23368 === (2))){
var state_23367__$1 = state_23367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23367__$1,(4),from);
} else {
if((state_val_23368 === (3))){
var inst_23365 = (state_23367[(2)]);
var state_23367__$1 = state_23367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23367__$1,inst_23365);
} else {
if((state_val_23368 === (4))){
var inst_23348 = (state_23367[(7)]);
var inst_23348__$1 = (state_23367[(2)]);
var inst_23349 = (inst_23348__$1 == null);
var state_23367__$1 = (function (){var statearr_23370 = state_23367;
(statearr_23370[(7)] = inst_23348__$1);

return statearr_23370;
})();
if(cljs.core.truth_(inst_23349)){
var statearr_23371_23484 = state_23367__$1;
(statearr_23371_23484[(1)] = (5));

} else {
var statearr_23372_23485 = state_23367__$1;
(statearr_23372_23485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23368 === (5))){
var inst_23351 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23367__$1 = state_23367;
var statearr_23373_23486 = state_23367__$1;
(statearr_23373_23486[(2)] = inst_23351);

(statearr_23373_23486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23368 === (6))){
var inst_23348 = (state_23367[(7)]);
var inst_23353 = (state_23367[(8)]);
var inst_23353__$1 = cljs.core.async.chan.call(null,(1));
var inst_23354 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23355 = [inst_23348,inst_23353__$1];
var inst_23356 = (new cljs.core.PersistentVector(null,2,(5),inst_23354,inst_23355,null));
var state_23367__$1 = (function (){var statearr_23374 = state_23367;
(statearr_23374[(8)] = inst_23353__$1);

return statearr_23374;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23367__$1,(8),jobs,inst_23356);
} else {
if((state_val_23368 === (7))){
var inst_23363 = (state_23367[(2)]);
var state_23367__$1 = state_23367;
var statearr_23375_23487 = state_23367__$1;
(statearr_23375_23487[(2)] = inst_23363);

(statearr_23375_23487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23368 === (8))){
var inst_23353 = (state_23367[(8)]);
var inst_23358 = (state_23367[(2)]);
var state_23367__$1 = (function (){var statearr_23376 = state_23367;
(statearr_23376[(9)] = inst_23358);

return statearr_23376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23367__$1,(9),results,inst_23353);
} else {
if((state_val_23368 === (9))){
var inst_23360 = (state_23367[(2)]);
var state_23367__$1 = (function (){var statearr_23377 = state_23367;
(statearr_23377[(10)] = inst_23360);

return statearr_23377;
})();
var statearr_23378_23488 = state_23367__$1;
(statearr_23378_23488[(2)] = null);

(statearr_23378_23488[(1)] = (2));


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
});})(c__22917__auto___23482,jobs,results,process,async))
;
return ((function (switch__22805__auto__,c__22917__auto___23482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0 = (function (){
var statearr_23382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__);

(statearr_23382[(1)] = (1));

return statearr_23382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1 = (function (state_23367){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23383){if((e23383 instanceof Object)){
var ex__22809__auto__ = e23383;
var statearr_23384_23489 = state_23367;
(statearr_23384_23489[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23490 = state_23367;
state_23367 = G__23490;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = function(state_23367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1.call(this,state_23367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___23482,jobs,results,process,async))
})();
var state__22919__auto__ = (function (){var statearr_23385 = f__22918__auto__.call(null);
(statearr_23385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___23482);

return statearr_23385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___23482,jobs,results,process,async))
);


var c__22917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto__,jobs,results,process,async){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto__,jobs,results,process,async){
return (function (state_23423){
var state_val_23424 = (state_23423[(1)]);
if((state_val_23424 === (7))){
var inst_23419 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23425_23491 = state_23423__$1;
(statearr_23425_23491[(2)] = inst_23419);

(statearr_23425_23491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (20))){
var state_23423__$1 = state_23423;
var statearr_23426_23492 = state_23423__$1;
(statearr_23426_23492[(2)] = null);

(statearr_23426_23492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (1))){
var state_23423__$1 = state_23423;
var statearr_23427_23493 = state_23423__$1;
(statearr_23427_23493[(2)] = null);

(statearr_23427_23493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (4))){
var inst_23388 = (state_23423[(7)]);
var inst_23388__$1 = (state_23423[(2)]);
var inst_23389 = (inst_23388__$1 == null);
var state_23423__$1 = (function (){var statearr_23428 = state_23423;
(statearr_23428[(7)] = inst_23388__$1);

return statearr_23428;
})();
if(cljs.core.truth_(inst_23389)){
var statearr_23429_23494 = state_23423__$1;
(statearr_23429_23494[(1)] = (5));

} else {
var statearr_23430_23495 = state_23423__$1;
(statearr_23430_23495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (15))){
var inst_23401 = (state_23423[(8)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23423__$1,(18),to,inst_23401);
} else {
if((state_val_23424 === (21))){
var inst_23414 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23431_23496 = state_23423__$1;
(statearr_23431_23496[(2)] = inst_23414);

(statearr_23431_23496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (13))){
var inst_23416 = (state_23423[(2)]);
var state_23423__$1 = (function (){var statearr_23432 = state_23423;
(statearr_23432[(9)] = inst_23416);

return statearr_23432;
})();
var statearr_23433_23497 = state_23423__$1;
(statearr_23433_23497[(2)] = null);

(statearr_23433_23497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (6))){
var inst_23388 = (state_23423[(7)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(11),inst_23388);
} else {
if((state_val_23424 === (17))){
var inst_23409 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
if(cljs.core.truth_(inst_23409)){
var statearr_23434_23498 = state_23423__$1;
(statearr_23434_23498[(1)] = (19));

} else {
var statearr_23435_23499 = state_23423__$1;
(statearr_23435_23499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (3))){
var inst_23421 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23423__$1,inst_23421);
} else {
if((state_val_23424 === (12))){
var inst_23398 = (state_23423[(10)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(14),inst_23398);
} else {
if((state_val_23424 === (2))){
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(4),results);
} else {
if((state_val_23424 === (19))){
var state_23423__$1 = state_23423;
var statearr_23436_23500 = state_23423__$1;
(statearr_23436_23500[(2)] = null);

(statearr_23436_23500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (11))){
var inst_23398 = (state_23423[(2)]);
var state_23423__$1 = (function (){var statearr_23437 = state_23423;
(statearr_23437[(10)] = inst_23398);

return statearr_23437;
})();
var statearr_23438_23501 = state_23423__$1;
(statearr_23438_23501[(2)] = null);

(statearr_23438_23501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (9))){
var state_23423__$1 = state_23423;
var statearr_23439_23502 = state_23423__$1;
(statearr_23439_23502[(2)] = null);

(statearr_23439_23502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (5))){
var state_23423__$1 = state_23423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23440_23503 = state_23423__$1;
(statearr_23440_23503[(1)] = (8));

} else {
var statearr_23441_23504 = state_23423__$1;
(statearr_23441_23504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (14))){
var inst_23401 = (state_23423[(8)]);
var inst_23403 = (state_23423[(11)]);
var inst_23401__$1 = (state_23423[(2)]);
var inst_23402 = (inst_23401__$1 == null);
var inst_23403__$1 = cljs.core.not.call(null,inst_23402);
var state_23423__$1 = (function (){var statearr_23442 = state_23423;
(statearr_23442[(8)] = inst_23401__$1);

(statearr_23442[(11)] = inst_23403__$1);

return statearr_23442;
})();
if(inst_23403__$1){
var statearr_23443_23505 = state_23423__$1;
(statearr_23443_23505[(1)] = (15));

} else {
var statearr_23444_23506 = state_23423__$1;
(statearr_23444_23506[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (16))){
var inst_23403 = (state_23423[(11)]);
var state_23423__$1 = state_23423;
var statearr_23445_23507 = state_23423__$1;
(statearr_23445_23507[(2)] = inst_23403);

(statearr_23445_23507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (10))){
var inst_23395 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23446_23508 = state_23423__$1;
(statearr_23446_23508[(2)] = inst_23395);

(statearr_23446_23508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (18))){
var inst_23406 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23447_23509 = state_23423__$1;
(statearr_23447_23509[(2)] = inst_23406);

(statearr_23447_23509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (8))){
var inst_23392 = cljs.core.async.close_BANG_.call(null,to);
var state_23423__$1 = state_23423;
var statearr_23448_23510 = state_23423__$1;
(statearr_23448_23510[(2)] = inst_23392);

(statearr_23448_23510[(1)] = (10));


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
});})(c__22917__auto__,jobs,results,process,async))
;
return ((function (switch__22805__auto__,c__22917__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0 = (function (){
var statearr_23452 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__);

(statearr_23452[(1)] = (1));

return statearr_23452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1 = (function (state_23423){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23453){if((e23453 instanceof Object)){
var ex__22809__auto__ = e23453;
var statearr_23454_23511 = state_23423;
(statearr_23454_23511[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23512 = state_23423;
state_23423 = G__23512;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__ = function(state_23423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1.call(this,state_23423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22806__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto__,jobs,results,process,async))
})();
var state__22919__auto__ = (function (){var statearr_23455 = f__22918__auto__.call(null);
(statearr_23455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto__);

return statearr_23455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto__,jobs,results,process,async))
);

return c__22917__auto__;
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
var args23513 = [];
var len__20747__auto___23516 = arguments.length;
var i__20748__auto___23517 = (0);
while(true){
if((i__20748__auto___23517 < len__20747__auto___23516)){
args23513.push((arguments[i__20748__auto___23517]));

var G__23518 = (i__20748__auto___23517 + (1));
i__20748__auto___23517 = G__23518;
continue;
} else {
}
break;
}

var G__23515 = args23513.length;
switch (G__23515) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23513.length)].join('')));

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
var args23520 = [];
var len__20747__auto___23523 = arguments.length;
var i__20748__auto___23524 = (0);
while(true){
if((i__20748__auto___23524 < len__20747__auto___23523)){
args23520.push((arguments[i__20748__auto___23524]));

var G__23525 = (i__20748__auto___23524 + (1));
i__20748__auto___23524 = G__23525;
continue;
} else {
}
break;
}

var G__23522 = args23520.length;
switch (G__23522) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23520.length)].join('')));

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
var args23527 = [];
var len__20747__auto___23580 = arguments.length;
var i__20748__auto___23581 = (0);
while(true){
if((i__20748__auto___23581 < len__20747__auto___23580)){
args23527.push((arguments[i__20748__auto___23581]));

var G__23582 = (i__20748__auto___23581 + (1));
i__20748__auto___23581 = G__23582;
continue;
} else {
}
break;
}

var G__23529 = args23527.length;
switch (G__23529) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23527.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22917__auto___23584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___23584,tc,fc){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___23584,tc,fc){
return (function (state_23555){
var state_val_23556 = (state_23555[(1)]);
if((state_val_23556 === (7))){
var inst_23551 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
var statearr_23557_23585 = state_23555__$1;
(statearr_23557_23585[(2)] = inst_23551);

(statearr_23557_23585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (1))){
var state_23555__$1 = state_23555;
var statearr_23558_23586 = state_23555__$1;
(statearr_23558_23586[(2)] = null);

(statearr_23558_23586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (4))){
var inst_23532 = (state_23555[(7)]);
var inst_23532__$1 = (state_23555[(2)]);
var inst_23533 = (inst_23532__$1 == null);
var state_23555__$1 = (function (){var statearr_23559 = state_23555;
(statearr_23559[(7)] = inst_23532__$1);

return statearr_23559;
})();
if(cljs.core.truth_(inst_23533)){
var statearr_23560_23587 = state_23555__$1;
(statearr_23560_23587[(1)] = (5));

} else {
var statearr_23561_23588 = state_23555__$1;
(statearr_23561_23588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (13))){
var state_23555__$1 = state_23555;
var statearr_23562_23589 = state_23555__$1;
(statearr_23562_23589[(2)] = null);

(statearr_23562_23589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (6))){
var inst_23532 = (state_23555[(7)]);
var inst_23538 = p.call(null,inst_23532);
var state_23555__$1 = state_23555;
if(cljs.core.truth_(inst_23538)){
var statearr_23563_23590 = state_23555__$1;
(statearr_23563_23590[(1)] = (9));

} else {
var statearr_23564_23591 = state_23555__$1;
(statearr_23564_23591[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (3))){
var inst_23553 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23555__$1,inst_23553);
} else {
if((state_val_23556 === (12))){
var state_23555__$1 = state_23555;
var statearr_23565_23592 = state_23555__$1;
(statearr_23565_23592[(2)] = null);

(statearr_23565_23592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (2))){
var state_23555__$1 = state_23555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23555__$1,(4),ch);
} else {
if((state_val_23556 === (11))){
var inst_23532 = (state_23555[(7)]);
var inst_23542 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23555__$1,(8),inst_23542,inst_23532);
} else {
if((state_val_23556 === (9))){
var state_23555__$1 = state_23555;
var statearr_23566_23593 = state_23555__$1;
(statearr_23566_23593[(2)] = tc);

(statearr_23566_23593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (5))){
var inst_23535 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23536 = cljs.core.async.close_BANG_.call(null,fc);
var state_23555__$1 = (function (){var statearr_23567 = state_23555;
(statearr_23567[(8)] = inst_23535);

return statearr_23567;
})();
var statearr_23568_23594 = state_23555__$1;
(statearr_23568_23594[(2)] = inst_23536);

(statearr_23568_23594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (14))){
var inst_23549 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
var statearr_23569_23595 = state_23555__$1;
(statearr_23569_23595[(2)] = inst_23549);

(statearr_23569_23595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (10))){
var state_23555__$1 = state_23555;
var statearr_23570_23596 = state_23555__$1;
(statearr_23570_23596[(2)] = fc);

(statearr_23570_23596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23556 === (8))){
var inst_23544 = (state_23555[(2)]);
var state_23555__$1 = state_23555;
if(cljs.core.truth_(inst_23544)){
var statearr_23571_23597 = state_23555__$1;
(statearr_23571_23597[(1)] = (12));

} else {
var statearr_23572_23598 = state_23555__$1;
(statearr_23572_23598[(1)] = (13));

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
});})(c__22917__auto___23584,tc,fc))
;
return ((function (switch__22805__auto__,c__22917__auto___23584,tc,fc){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_23576 = [null,null,null,null,null,null,null,null,null];
(statearr_23576[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_23576[(1)] = (1));

return statearr_23576;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_23555){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23577){if((e23577 instanceof Object)){
var ex__22809__auto__ = e23577;
var statearr_23578_23599 = state_23555;
(statearr_23578_23599[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23600 = state_23555;
state_23555 = G__23600;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_23555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_23555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___23584,tc,fc))
})();
var state__22919__auto__ = (function (){var statearr_23579 = f__22918__auto__.call(null);
(statearr_23579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___23584);

return statearr_23579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___23584,tc,fc))
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
var c__22917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto__){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto__){
return (function (state_23647){
var state_val_23648 = (state_23647[(1)]);
if((state_val_23648 === (1))){
var inst_23633 = init;
var state_23647__$1 = (function (){var statearr_23649 = state_23647;
(statearr_23649[(7)] = inst_23633);

return statearr_23649;
})();
var statearr_23650_23665 = state_23647__$1;
(statearr_23650_23665[(2)] = null);

(statearr_23650_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (2))){
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23647__$1,(4),ch);
} else {
if((state_val_23648 === (3))){
var inst_23645 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23647__$1,inst_23645);
} else {
if((state_val_23648 === (4))){
var inst_23636 = (state_23647[(8)]);
var inst_23636__$1 = (state_23647[(2)]);
var inst_23637 = (inst_23636__$1 == null);
var state_23647__$1 = (function (){var statearr_23651 = state_23647;
(statearr_23651[(8)] = inst_23636__$1);

return statearr_23651;
})();
if(cljs.core.truth_(inst_23637)){
var statearr_23652_23666 = state_23647__$1;
(statearr_23652_23666[(1)] = (5));

} else {
var statearr_23653_23667 = state_23647__$1;
(statearr_23653_23667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (5))){
var inst_23633 = (state_23647[(7)]);
var state_23647__$1 = state_23647;
var statearr_23654_23668 = state_23647__$1;
(statearr_23654_23668[(2)] = inst_23633);

(statearr_23654_23668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (6))){
var inst_23633 = (state_23647[(7)]);
var inst_23636 = (state_23647[(8)]);
var inst_23640 = f.call(null,inst_23633,inst_23636);
var inst_23633__$1 = inst_23640;
var state_23647__$1 = (function (){var statearr_23655 = state_23647;
(statearr_23655[(7)] = inst_23633__$1);

return statearr_23655;
})();
var statearr_23656_23669 = state_23647__$1;
(statearr_23656_23669[(2)] = null);

(statearr_23656_23669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23648 === (7))){
var inst_23643 = (state_23647[(2)]);
var state_23647__$1 = state_23647;
var statearr_23657_23670 = state_23647__$1;
(statearr_23657_23670[(2)] = inst_23643);

(statearr_23657_23670[(1)] = (3));


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
});})(c__22917__auto__))
;
return ((function (switch__22805__auto__,c__22917__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22806__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22806__auto____0 = (function (){
var statearr_23661 = [null,null,null,null,null,null,null,null,null];
(statearr_23661[(0)] = cljs$core$async$reduce_$_state_machine__22806__auto__);

(statearr_23661[(1)] = (1));

return statearr_23661;
});
var cljs$core$async$reduce_$_state_machine__22806__auto____1 = (function (state_23647){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23662){if((e23662 instanceof Object)){
var ex__22809__auto__ = e23662;
var statearr_23663_23671 = state_23647;
(statearr_23663_23671[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23672 = state_23647;
state_23647 = G__23672;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22806__auto__ = function(state_23647){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22806__auto____1.call(this,state_23647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22806__auto____0;
cljs$core$async$reduce_$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22806__auto____1;
return cljs$core$async$reduce_$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto__))
})();
var state__22919__auto__ = (function (){var statearr_23664 = f__22918__auto__.call(null);
(statearr_23664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto__);

return statearr_23664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto__))
);

return c__22917__auto__;
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
var args23673 = [];
var len__20747__auto___23725 = arguments.length;
var i__20748__auto___23726 = (0);
while(true){
if((i__20748__auto___23726 < len__20747__auto___23725)){
args23673.push((arguments[i__20748__auto___23726]));

var G__23727 = (i__20748__auto___23726 + (1));
i__20748__auto___23726 = G__23727;
continue;
} else {
}
break;
}

var G__23675 = args23673.length;
switch (G__23675) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23673.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto__){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto__){
return (function (state_23700){
var state_val_23701 = (state_23700[(1)]);
if((state_val_23701 === (7))){
var inst_23682 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
var statearr_23702_23729 = state_23700__$1;
(statearr_23702_23729[(2)] = inst_23682);

(statearr_23702_23729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (1))){
var inst_23676 = cljs.core.seq.call(null,coll);
var inst_23677 = inst_23676;
var state_23700__$1 = (function (){var statearr_23703 = state_23700;
(statearr_23703[(7)] = inst_23677);

return statearr_23703;
})();
var statearr_23704_23730 = state_23700__$1;
(statearr_23704_23730[(2)] = null);

(statearr_23704_23730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (4))){
var inst_23677 = (state_23700[(7)]);
var inst_23680 = cljs.core.first.call(null,inst_23677);
var state_23700__$1 = state_23700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23700__$1,(7),ch,inst_23680);
} else {
if((state_val_23701 === (13))){
var inst_23694 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
var statearr_23705_23731 = state_23700__$1;
(statearr_23705_23731[(2)] = inst_23694);

(statearr_23705_23731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (6))){
var inst_23685 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
if(cljs.core.truth_(inst_23685)){
var statearr_23706_23732 = state_23700__$1;
(statearr_23706_23732[(1)] = (8));

} else {
var statearr_23707_23733 = state_23700__$1;
(statearr_23707_23733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (3))){
var inst_23698 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23700__$1,inst_23698);
} else {
if((state_val_23701 === (12))){
var state_23700__$1 = state_23700;
var statearr_23708_23734 = state_23700__$1;
(statearr_23708_23734[(2)] = null);

(statearr_23708_23734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (2))){
var inst_23677 = (state_23700[(7)]);
var state_23700__$1 = state_23700;
if(cljs.core.truth_(inst_23677)){
var statearr_23709_23735 = state_23700__$1;
(statearr_23709_23735[(1)] = (4));

} else {
var statearr_23710_23736 = state_23700__$1;
(statearr_23710_23736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (11))){
var inst_23691 = cljs.core.async.close_BANG_.call(null,ch);
var state_23700__$1 = state_23700;
var statearr_23711_23737 = state_23700__$1;
(statearr_23711_23737[(2)] = inst_23691);

(statearr_23711_23737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (9))){
var state_23700__$1 = state_23700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23712_23738 = state_23700__$1;
(statearr_23712_23738[(1)] = (11));

} else {
var statearr_23713_23739 = state_23700__$1;
(statearr_23713_23739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (5))){
var inst_23677 = (state_23700[(7)]);
var state_23700__$1 = state_23700;
var statearr_23714_23740 = state_23700__$1;
(statearr_23714_23740[(2)] = inst_23677);

(statearr_23714_23740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (10))){
var inst_23696 = (state_23700[(2)]);
var state_23700__$1 = state_23700;
var statearr_23715_23741 = state_23700__$1;
(statearr_23715_23741[(2)] = inst_23696);

(statearr_23715_23741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23701 === (8))){
var inst_23677 = (state_23700[(7)]);
var inst_23687 = cljs.core.next.call(null,inst_23677);
var inst_23677__$1 = inst_23687;
var state_23700__$1 = (function (){var statearr_23716 = state_23700;
(statearr_23716[(7)] = inst_23677__$1);

return statearr_23716;
})();
var statearr_23717_23742 = state_23700__$1;
(statearr_23717_23742[(2)] = null);

(statearr_23717_23742[(1)] = (2));


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
});})(c__22917__auto__))
;
return ((function (switch__22805__auto__,c__22917__auto__){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_23721 = [null,null,null,null,null,null,null,null];
(statearr_23721[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_23721[(1)] = (1));

return statearr_23721;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_23700){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_23700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e23722){if((e23722 instanceof Object)){
var ex__22809__auto__ = e23722;
var statearr_23723_23743 = state_23700;
(statearr_23723_23743[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23744 = state_23700;
state_23700 = G__23744;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_23700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_23700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto__))
})();
var state__22919__auto__ = (function (){var statearr_23724 = f__22918__auto__.call(null);
(statearr_23724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto__);

return statearr_23724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto__))
);

return c__22917__auto__;
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
var x__20344__auto__ = (((_ == null))?null:_);
var m__20345__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,_);
} else {
var m__20345__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,_);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20345__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m,ch);
} else {
var m__20345__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m,ch);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m);
} else {
var m__20345__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23966 = (function (mult,ch,cs,meta23967){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23967 = meta23967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23968,meta23967__$1){
var self__ = this;
var _23968__$1 = this;
return (new cljs.core.async.t_cljs$core$async23966(self__.mult,self__.ch,self__.cs,meta23967__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23968){
var self__ = this;
var _23968__$1 = this;
return self__.meta23967;
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23967","meta23967",1042944856,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23966";

cljs.core.async.t_cljs$core$async23966.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async23966");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23966 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23966(mult__$1,ch__$1,cs__$1,meta23967){
return (new cljs.core.async.t_cljs$core$async23966(mult__$1,ch__$1,cs__$1,meta23967));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23966(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22917__auto___24187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___24187,cs,m,dchan,dctr,done){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___24187,cs,m,dchan,dctr,done){
return (function (state_24099){
var state_val_24100 = (state_24099[(1)]);
if((state_val_24100 === (7))){
var inst_24095 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24101_24188 = state_24099__$1;
(statearr_24101_24188[(2)] = inst_24095);

(statearr_24101_24188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (20))){
var inst_24000 = (state_24099[(7)]);
var inst_24010 = cljs.core.first.call(null,inst_24000);
var inst_24011 = cljs.core.nth.call(null,inst_24010,(0),null);
var inst_24012 = cljs.core.nth.call(null,inst_24010,(1),null);
var state_24099__$1 = (function (){var statearr_24102 = state_24099;
(statearr_24102[(8)] = inst_24011);

return statearr_24102;
})();
if(cljs.core.truth_(inst_24012)){
var statearr_24103_24189 = state_24099__$1;
(statearr_24103_24189[(1)] = (22));

} else {
var statearr_24104_24190 = state_24099__$1;
(statearr_24104_24190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (27))){
var inst_24040 = (state_24099[(9)]);
var inst_24047 = (state_24099[(10)]);
var inst_23971 = (state_24099[(11)]);
var inst_24042 = (state_24099[(12)]);
var inst_24047__$1 = cljs.core._nth.call(null,inst_24040,inst_24042);
var inst_24048 = cljs.core.async.put_BANG_.call(null,inst_24047__$1,inst_23971,done);
var state_24099__$1 = (function (){var statearr_24105 = state_24099;
(statearr_24105[(10)] = inst_24047__$1);

return statearr_24105;
})();
if(cljs.core.truth_(inst_24048)){
var statearr_24106_24191 = state_24099__$1;
(statearr_24106_24191[(1)] = (30));

} else {
var statearr_24107_24192 = state_24099__$1;
(statearr_24107_24192[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (1))){
var state_24099__$1 = state_24099;
var statearr_24108_24193 = state_24099__$1;
(statearr_24108_24193[(2)] = null);

(statearr_24108_24193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (24))){
var inst_24000 = (state_24099[(7)]);
var inst_24017 = (state_24099[(2)]);
var inst_24018 = cljs.core.next.call(null,inst_24000);
var inst_23980 = inst_24018;
var inst_23981 = null;
var inst_23982 = (0);
var inst_23983 = (0);
var state_24099__$1 = (function (){var statearr_24109 = state_24099;
(statearr_24109[(13)] = inst_24017);

(statearr_24109[(14)] = inst_23982);

(statearr_24109[(15)] = inst_23980);

(statearr_24109[(16)] = inst_23983);

(statearr_24109[(17)] = inst_23981);

return statearr_24109;
})();
var statearr_24110_24194 = state_24099__$1;
(statearr_24110_24194[(2)] = null);

(statearr_24110_24194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (39))){
var state_24099__$1 = state_24099;
var statearr_24114_24195 = state_24099__$1;
(statearr_24114_24195[(2)] = null);

(statearr_24114_24195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (4))){
var inst_23971 = (state_24099[(11)]);
var inst_23971__$1 = (state_24099[(2)]);
var inst_23972 = (inst_23971__$1 == null);
var state_24099__$1 = (function (){var statearr_24115 = state_24099;
(statearr_24115[(11)] = inst_23971__$1);

return statearr_24115;
})();
if(cljs.core.truth_(inst_23972)){
var statearr_24116_24196 = state_24099__$1;
(statearr_24116_24196[(1)] = (5));

} else {
var statearr_24117_24197 = state_24099__$1;
(statearr_24117_24197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (15))){
var inst_23982 = (state_24099[(14)]);
var inst_23980 = (state_24099[(15)]);
var inst_23983 = (state_24099[(16)]);
var inst_23981 = (state_24099[(17)]);
var inst_23996 = (state_24099[(2)]);
var inst_23997 = (inst_23983 + (1));
var tmp24111 = inst_23982;
var tmp24112 = inst_23980;
var tmp24113 = inst_23981;
var inst_23980__$1 = tmp24112;
var inst_23981__$1 = tmp24113;
var inst_23982__$1 = tmp24111;
var inst_23983__$1 = inst_23997;
var state_24099__$1 = (function (){var statearr_24118 = state_24099;
(statearr_24118[(14)] = inst_23982__$1);

(statearr_24118[(15)] = inst_23980__$1);

(statearr_24118[(18)] = inst_23996);

(statearr_24118[(16)] = inst_23983__$1);

(statearr_24118[(17)] = inst_23981__$1);

return statearr_24118;
})();
var statearr_24119_24198 = state_24099__$1;
(statearr_24119_24198[(2)] = null);

(statearr_24119_24198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (21))){
var inst_24021 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24123_24199 = state_24099__$1;
(statearr_24123_24199[(2)] = inst_24021);

(statearr_24123_24199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (31))){
var inst_24047 = (state_24099[(10)]);
var inst_24051 = done.call(null,null);
var inst_24052 = cljs.core.async.untap_STAR_.call(null,m,inst_24047);
var state_24099__$1 = (function (){var statearr_24124 = state_24099;
(statearr_24124[(19)] = inst_24051);

return statearr_24124;
})();
var statearr_24125_24200 = state_24099__$1;
(statearr_24125_24200[(2)] = inst_24052);

(statearr_24125_24200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (32))){
var inst_24040 = (state_24099[(9)]);
var inst_24041 = (state_24099[(20)]);
var inst_24039 = (state_24099[(21)]);
var inst_24042 = (state_24099[(12)]);
var inst_24054 = (state_24099[(2)]);
var inst_24055 = (inst_24042 + (1));
var tmp24120 = inst_24040;
var tmp24121 = inst_24041;
var tmp24122 = inst_24039;
var inst_24039__$1 = tmp24122;
var inst_24040__$1 = tmp24120;
var inst_24041__$1 = tmp24121;
var inst_24042__$1 = inst_24055;
var state_24099__$1 = (function (){var statearr_24126 = state_24099;
(statearr_24126[(9)] = inst_24040__$1);

(statearr_24126[(20)] = inst_24041__$1);

(statearr_24126[(21)] = inst_24039__$1);

(statearr_24126[(12)] = inst_24042__$1);

(statearr_24126[(22)] = inst_24054);

return statearr_24126;
})();
var statearr_24127_24201 = state_24099__$1;
(statearr_24127_24201[(2)] = null);

(statearr_24127_24201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (40))){
var inst_24067 = (state_24099[(23)]);
var inst_24071 = done.call(null,null);
var inst_24072 = cljs.core.async.untap_STAR_.call(null,m,inst_24067);
var state_24099__$1 = (function (){var statearr_24128 = state_24099;
(statearr_24128[(24)] = inst_24071);

return statearr_24128;
})();
var statearr_24129_24202 = state_24099__$1;
(statearr_24129_24202[(2)] = inst_24072);

(statearr_24129_24202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (33))){
var inst_24058 = (state_24099[(25)]);
var inst_24060 = cljs.core.chunked_seq_QMARK_.call(null,inst_24058);
var state_24099__$1 = state_24099;
if(inst_24060){
var statearr_24130_24203 = state_24099__$1;
(statearr_24130_24203[(1)] = (36));

} else {
var statearr_24131_24204 = state_24099__$1;
(statearr_24131_24204[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (13))){
var inst_23990 = (state_24099[(26)]);
var inst_23993 = cljs.core.async.close_BANG_.call(null,inst_23990);
var state_24099__$1 = state_24099;
var statearr_24132_24205 = state_24099__$1;
(statearr_24132_24205[(2)] = inst_23993);

(statearr_24132_24205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (22))){
var inst_24011 = (state_24099[(8)]);
var inst_24014 = cljs.core.async.close_BANG_.call(null,inst_24011);
var state_24099__$1 = state_24099;
var statearr_24133_24206 = state_24099__$1;
(statearr_24133_24206[(2)] = inst_24014);

(statearr_24133_24206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (36))){
var inst_24058 = (state_24099[(25)]);
var inst_24062 = cljs.core.chunk_first.call(null,inst_24058);
var inst_24063 = cljs.core.chunk_rest.call(null,inst_24058);
var inst_24064 = cljs.core.count.call(null,inst_24062);
var inst_24039 = inst_24063;
var inst_24040 = inst_24062;
var inst_24041 = inst_24064;
var inst_24042 = (0);
var state_24099__$1 = (function (){var statearr_24134 = state_24099;
(statearr_24134[(9)] = inst_24040);

(statearr_24134[(20)] = inst_24041);

(statearr_24134[(21)] = inst_24039);

(statearr_24134[(12)] = inst_24042);

return statearr_24134;
})();
var statearr_24135_24207 = state_24099__$1;
(statearr_24135_24207[(2)] = null);

(statearr_24135_24207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (41))){
var inst_24058 = (state_24099[(25)]);
var inst_24074 = (state_24099[(2)]);
var inst_24075 = cljs.core.next.call(null,inst_24058);
var inst_24039 = inst_24075;
var inst_24040 = null;
var inst_24041 = (0);
var inst_24042 = (0);
var state_24099__$1 = (function (){var statearr_24136 = state_24099;
(statearr_24136[(9)] = inst_24040);

(statearr_24136[(27)] = inst_24074);

(statearr_24136[(20)] = inst_24041);

(statearr_24136[(21)] = inst_24039);

(statearr_24136[(12)] = inst_24042);

return statearr_24136;
})();
var statearr_24137_24208 = state_24099__$1;
(statearr_24137_24208[(2)] = null);

(statearr_24137_24208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (43))){
var state_24099__$1 = state_24099;
var statearr_24138_24209 = state_24099__$1;
(statearr_24138_24209[(2)] = null);

(statearr_24138_24209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (29))){
var inst_24083 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24139_24210 = state_24099__$1;
(statearr_24139_24210[(2)] = inst_24083);

(statearr_24139_24210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (44))){
var inst_24092 = (state_24099[(2)]);
var state_24099__$1 = (function (){var statearr_24140 = state_24099;
(statearr_24140[(28)] = inst_24092);

return statearr_24140;
})();
var statearr_24141_24211 = state_24099__$1;
(statearr_24141_24211[(2)] = null);

(statearr_24141_24211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (6))){
var inst_24031 = (state_24099[(29)]);
var inst_24030 = cljs.core.deref.call(null,cs);
var inst_24031__$1 = cljs.core.keys.call(null,inst_24030);
var inst_24032 = cljs.core.count.call(null,inst_24031__$1);
var inst_24033 = cljs.core.reset_BANG_.call(null,dctr,inst_24032);
var inst_24038 = cljs.core.seq.call(null,inst_24031__$1);
var inst_24039 = inst_24038;
var inst_24040 = null;
var inst_24041 = (0);
var inst_24042 = (0);
var state_24099__$1 = (function (){var statearr_24142 = state_24099;
(statearr_24142[(29)] = inst_24031__$1);

(statearr_24142[(9)] = inst_24040);

(statearr_24142[(30)] = inst_24033);

(statearr_24142[(20)] = inst_24041);

(statearr_24142[(21)] = inst_24039);

(statearr_24142[(12)] = inst_24042);

return statearr_24142;
})();
var statearr_24143_24212 = state_24099__$1;
(statearr_24143_24212[(2)] = null);

(statearr_24143_24212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (28))){
var inst_24058 = (state_24099[(25)]);
var inst_24039 = (state_24099[(21)]);
var inst_24058__$1 = cljs.core.seq.call(null,inst_24039);
var state_24099__$1 = (function (){var statearr_24144 = state_24099;
(statearr_24144[(25)] = inst_24058__$1);

return statearr_24144;
})();
if(inst_24058__$1){
var statearr_24145_24213 = state_24099__$1;
(statearr_24145_24213[(1)] = (33));

} else {
var statearr_24146_24214 = state_24099__$1;
(statearr_24146_24214[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (25))){
var inst_24041 = (state_24099[(20)]);
var inst_24042 = (state_24099[(12)]);
var inst_24044 = (inst_24042 < inst_24041);
var inst_24045 = inst_24044;
var state_24099__$1 = state_24099;
if(cljs.core.truth_(inst_24045)){
var statearr_24147_24215 = state_24099__$1;
(statearr_24147_24215[(1)] = (27));

} else {
var statearr_24148_24216 = state_24099__$1;
(statearr_24148_24216[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (34))){
var state_24099__$1 = state_24099;
var statearr_24149_24217 = state_24099__$1;
(statearr_24149_24217[(2)] = null);

(statearr_24149_24217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (17))){
var state_24099__$1 = state_24099;
var statearr_24150_24218 = state_24099__$1;
(statearr_24150_24218[(2)] = null);

(statearr_24150_24218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (3))){
var inst_24097 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24099__$1,inst_24097);
} else {
if((state_val_24100 === (12))){
var inst_24026 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24151_24219 = state_24099__$1;
(statearr_24151_24219[(2)] = inst_24026);

(statearr_24151_24219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (2))){
var state_24099__$1 = state_24099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24099__$1,(4),ch);
} else {
if((state_val_24100 === (23))){
var state_24099__$1 = state_24099;
var statearr_24152_24220 = state_24099__$1;
(statearr_24152_24220[(2)] = null);

(statearr_24152_24220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (35))){
var inst_24081 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24153_24221 = state_24099__$1;
(statearr_24153_24221[(2)] = inst_24081);

(statearr_24153_24221[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (19))){
var inst_24000 = (state_24099[(7)]);
var inst_24004 = cljs.core.chunk_first.call(null,inst_24000);
var inst_24005 = cljs.core.chunk_rest.call(null,inst_24000);
var inst_24006 = cljs.core.count.call(null,inst_24004);
var inst_23980 = inst_24005;
var inst_23981 = inst_24004;
var inst_23982 = inst_24006;
var inst_23983 = (0);
var state_24099__$1 = (function (){var statearr_24154 = state_24099;
(statearr_24154[(14)] = inst_23982);

(statearr_24154[(15)] = inst_23980);

(statearr_24154[(16)] = inst_23983);

(statearr_24154[(17)] = inst_23981);

return statearr_24154;
})();
var statearr_24155_24222 = state_24099__$1;
(statearr_24155_24222[(2)] = null);

(statearr_24155_24222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (11))){
var inst_23980 = (state_24099[(15)]);
var inst_24000 = (state_24099[(7)]);
var inst_24000__$1 = cljs.core.seq.call(null,inst_23980);
var state_24099__$1 = (function (){var statearr_24156 = state_24099;
(statearr_24156[(7)] = inst_24000__$1);

return statearr_24156;
})();
if(inst_24000__$1){
var statearr_24157_24223 = state_24099__$1;
(statearr_24157_24223[(1)] = (16));

} else {
var statearr_24158_24224 = state_24099__$1;
(statearr_24158_24224[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (9))){
var inst_24028 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24159_24225 = state_24099__$1;
(statearr_24159_24225[(2)] = inst_24028);

(statearr_24159_24225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (5))){
var inst_23978 = cljs.core.deref.call(null,cs);
var inst_23979 = cljs.core.seq.call(null,inst_23978);
var inst_23980 = inst_23979;
var inst_23981 = null;
var inst_23982 = (0);
var inst_23983 = (0);
var state_24099__$1 = (function (){var statearr_24160 = state_24099;
(statearr_24160[(14)] = inst_23982);

(statearr_24160[(15)] = inst_23980);

(statearr_24160[(16)] = inst_23983);

(statearr_24160[(17)] = inst_23981);

return statearr_24160;
})();
var statearr_24161_24226 = state_24099__$1;
(statearr_24161_24226[(2)] = null);

(statearr_24161_24226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (14))){
var state_24099__$1 = state_24099;
var statearr_24162_24227 = state_24099__$1;
(statearr_24162_24227[(2)] = null);

(statearr_24162_24227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (45))){
var inst_24089 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24163_24228 = state_24099__$1;
(statearr_24163_24228[(2)] = inst_24089);

(statearr_24163_24228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (26))){
var inst_24031 = (state_24099[(29)]);
var inst_24085 = (state_24099[(2)]);
var inst_24086 = cljs.core.seq.call(null,inst_24031);
var state_24099__$1 = (function (){var statearr_24164 = state_24099;
(statearr_24164[(31)] = inst_24085);

return statearr_24164;
})();
if(inst_24086){
var statearr_24165_24229 = state_24099__$1;
(statearr_24165_24229[(1)] = (42));

} else {
var statearr_24166_24230 = state_24099__$1;
(statearr_24166_24230[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (16))){
var inst_24000 = (state_24099[(7)]);
var inst_24002 = cljs.core.chunked_seq_QMARK_.call(null,inst_24000);
var state_24099__$1 = state_24099;
if(inst_24002){
var statearr_24167_24231 = state_24099__$1;
(statearr_24167_24231[(1)] = (19));

} else {
var statearr_24168_24232 = state_24099__$1;
(statearr_24168_24232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (38))){
var inst_24078 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24169_24233 = state_24099__$1;
(statearr_24169_24233[(2)] = inst_24078);

(statearr_24169_24233[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (30))){
var state_24099__$1 = state_24099;
var statearr_24170_24234 = state_24099__$1;
(statearr_24170_24234[(2)] = null);

(statearr_24170_24234[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (10))){
var inst_23983 = (state_24099[(16)]);
var inst_23981 = (state_24099[(17)]);
var inst_23989 = cljs.core._nth.call(null,inst_23981,inst_23983);
var inst_23990 = cljs.core.nth.call(null,inst_23989,(0),null);
var inst_23991 = cljs.core.nth.call(null,inst_23989,(1),null);
var state_24099__$1 = (function (){var statearr_24171 = state_24099;
(statearr_24171[(26)] = inst_23990);

return statearr_24171;
})();
if(cljs.core.truth_(inst_23991)){
var statearr_24172_24235 = state_24099__$1;
(statearr_24172_24235[(1)] = (13));

} else {
var statearr_24173_24236 = state_24099__$1;
(statearr_24173_24236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (18))){
var inst_24024 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
var statearr_24174_24237 = state_24099__$1;
(statearr_24174_24237[(2)] = inst_24024);

(statearr_24174_24237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (42))){
var state_24099__$1 = state_24099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24099__$1,(45),dchan);
} else {
if((state_val_24100 === (37))){
var inst_24058 = (state_24099[(25)]);
var inst_24067 = (state_24099[(23)]);
var inst_23971 = (state_24099[(11)]);
var inst_24067__$1 = cljs.core.first.call(null,inst_24058);
var inst_24068 = cljs.core.async.put_BANG_.call(null,inst_24067__$1,inst_23971,done);
var state_24099__$1 = (function (){var statearr_24175 = state_24099;
(statearr_24175[(23)] = inst_24067__$1);

return statearr_24175;
})();
if(cljs.core.truth_(inst_24068)){
var statearr_24176_24238 = state_24099__$1;
(statearr_24176_24238[(1)] = (39));

} else {
var statearr_24177_24239 = state_24099__$1;
(statearr_24177_24239[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24100 === (8))){
var inst_23982 = (state_24099[(14)]);
var inst_23983 = (state_24099[(16)]);
var inst_23985 = (inst_23983 < inst_23982);
var inst_23986 = inst_23985;
var state_24099__$1 = state_24099;
if(cljs.core.truth_(inst_23986)){
var statearr_24178_24240 = state_24099__$1;
(statearr_24178_24240[(1)] = (10));

} else {
var statearr_24179_24241 = state_24099__$1;
(statearr_24179_24241[(1)] = (11));

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
});})(c__22917__auto___24187,cs,m,dchan,dctr,done))
;
return ((function (switch__22805__auto__,c__22917__auto___24187,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22806__auto__ = null;
var cljs$core$async$mult_$_state_machine__22806__auto____0 = (function (){
var statearr_24183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24183[(0)] = cljs$core$async$mult_$_state_machine__22806__auto__);

(statearr_24183[(1)] = (1));

return statearr_24183;
});
var cljs$core$async$mult_$_state_machine__22806__auto____1 = (function (state_24099){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_24099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e24184){if((e24184 instanceof Object)){
var ex__22809__auto__ = e24184;
var statearr_24185_24242 = state_24099;
(statearr_24185_24242[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24243 = state_24099;
state_24099 = G__24243;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22806__auto__ = function(state_24099){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22806__auto____1.call(this,state_24099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22806__auto____0;
cljs$core$async$mult_$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22806__auto____1;
return cljs$core$async$mult_$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___24187,cs,m,dchan,dctr,done))
})();
var state__22919__auto__ = (function (){var statearr_24186 = f__22918__auto__.call(null);
(statearr_24186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___24187);

return statearr_24186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___24187,cs,m,dchan,dctr,done))
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
var args24244 = [];
var len__20747__auto___24247 = arguments.length;
var i__20748__auto___24248 = (0);
while(true){
if((i__20748__auto___24248 < len__20747__auto___24247)){
args24244.push((arguments[i__20748__auto___24248]));

var G__24249 = (i__20748__auto___24248 + (1));
i__20748__auto___24248 = G__24249;
continue;
} else {
}
break;
}

var G__24246 = args24244.length;
switch (G__24246) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24244.length)].join('')));

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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m,ch);
} else {
var m__20345__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m,ch);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m,ch);
} else {
var m__20345__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m,ch);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m);
} else {
var m__20345__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m,state_map);
} else {
var m__20345__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m,state_map);
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
var x__20344__auto__ = (((m == null))?null:m);
var m__20345__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,m,mode);
} else {
var m__20345__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20754__auto__ = [];
var len__20747__auto___24261 = arguments.length;
var i__20748__auto___24262 = (0);
while(true){
if((i__20748__auto___24262 < len__20747__auto___24261)){
args__20754__auto__.push((arguments[i__20748__auto___24262]));

var G__24263 = (i__20748__auto___24262 + (1));
i__20748__auto___24262 = G__24263;
continue;
} else {
}
break;
}

var argseq__20755__auto__ = ((((3) < args__20754__auto__.length))?(new cljs.core.IndexedSeq(args__20754__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20755__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24255){
var map__24256 = p__24255;
var map__24256__$1 = ((((!((map__24256 == null)))?((((map__24256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24256):map__24256);
var opts = map__24256__$1;
var statearr_24258_24264 = state;
(statearr_24258_24264[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24256,map__24256__$1,opts){
return (function (val){
var statearr_24259_24265 = state;
(statearr_24259_24265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24256,map__24256__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24260_24266 = state;
(statearr_24260_24266[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24251){
var G__24252 = cljs.core.first.call(null,seq24251);
var seq24251__$1 = cljs.core.next.call(null,seq24251);
var G__24253 = cljs.core.first.call(null,seq24251__$1);
var seq24251__$2 = cljs.core.next.call(null,seq24251__$1);
var G__24254 = cljs.core.first.call(null,seq24251__$2);
var seq24251__$3 = cljs.core.next.call(null,seq24251__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24252,G__24253,G__24254,seq24251__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24430 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24431){
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
this.meta24431 = meta24431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24432,meta24431__$1){
var self__ = this;
var _24432__$1 = this;
return (new cljs.core.async.t_cljs$core$async24430(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24431__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24432){
var self__ = this;
var _24432__$1 = this;
return self__.meta24431;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24431","meta24431",881012514,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24430";

cljs.core.async.t_cljs$core$async24430.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async24430");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24430 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24430(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24431){
return (new cljs.core.async.t_cljs$core$async24430(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24431));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24430(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22917__auto___24593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___24593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___24593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24530){
var state_val_24531 = (state_24530[(1)]);
if((state_val_24531 === (7))){
var inst_24448 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
var statearr_24532_24594 = state_24530__$1;
(statearr_24532_24594[(2)] = inst_24448);

(statearr_24532_24594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (20))){
var inst_24460 = (state_24530[(7)]);
var state_24530__$1 = state_24530;
var statearr_24533_24595 = state_24530__$1;
(statearr_24533_24595[(2)] = inst_24460);

(statearr_24533_24595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (27))){
var state_24530__$1 = state_24530;
var statearr_24534_24596 = state_24530__$1;
(statearr_24534_24596[(2)] = null);

(statearr_24534_24596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (1))){
var inst_24436 = (state_24530[(8)]);
var inst_24436__$1 = calc_state.call(null);
var inst_24438 = (inst_24436__$1 == null);
var inst_24439 = cljs.core.not.call(null,inst_24438);
var state_24530__$1 = (function (){var statearr_24535 = state_24530;
(statearr_24535[(8)] = inst_24436__$1);

return statearr_24535;
})();
if(inst_24439){
var statearr_24536_24597 = state_24530__$1;
(statearr_24536_24597[(1)] = (2));

} else {
var statearr_24537_24598 = state_24530__$1;
(statearr_24537_24598[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (24))){
var inst_24483 = (state_24530[(9)]);
var inst_24504 = (state_24530[(10)]);
var inst_24490 = (state_24530[(11)]);
var inst_24504__$1 = inst_24483.call(null,inst_24490);
var state_24530__$1 = (function (){var statearr_24538 = state_24530;
(statearr_24538[(10)] = inst_24504__$1);

return statearr_24538;
})();
if(cljs.core.truth_(inst_24504__$1)){
var statearr_24539_24599 = state_24530__$1;
(statearr_24539_24599[(1)] = (29));

} else {
var statearr_24540_24600 = state_24530__$1;
(statearr_24540_24600[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (4))){
var inst_24451 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24451)){
var statearr_24541_24601 = state_24530__$1;
(statearr_24541_24601[(1)] = (8));

} else {
var statearr_24542_24602 = state_24530__$1;
(statearr_24542_24602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (15))){
var inst_24477 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24477)){
var statearr_24543_24603 = state_24530__$1;
(statearr_24543_24603[(1)] = (19));

} else {
var statearr_24544_24604 = state_24530__$1;
(statearr_24544_24604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (21))){
var inst_24482 = (state_24530[(12)]);
var inst_24482__$1 = (state_24530[(2)]);
var inst_24483 = cljs.core.get.call(null,inst_24482__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24484 = cljs.core.get.call(null,inst_24482__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24485 = cljs.core.get.call(null,inst_24482__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24530__$1 = (function (){var statearr_24545 = state_24530;
(statearr_24545[(13)] = inst_24484);

(statearr_24545[(9)] = inst_24483);

(statearr_24545[(12)] = inst_24482__$1);

return statearr_24545;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24530__$1,(22),inst_24485);
} else {
if((state_val_24531 === (31))){
var inst_24512 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24512)){
var statearr_24546_24605 = state_24530__$1;
(statearr_24546_24605[(1)] = (32));

} else {
var statearr_24547_24606 = state_24530__$1;
(statearr_24547_24606[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (32))){
var inst_24489 = (state_24530[(14)]);
var state_24530__$1 = state_24530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24530__$1,(35),out,inst_24489);
} else {
if((state_val_24531 === (33))){
var inst_24482 = (state_24530[(12)]);
var inst_24460 = inst_24482;
var state_24530__$1 = (function (){var statearr_24548 = state_24530;
(statearr_24548[(7)] = inst_24460);

return statearr_24548;
})();
var statearr_24549_24607 = state_24530__$1;
(statearr_24549_24607[(2)] = null);

(statearr_24549_24607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (13))){
var inst_24460 = (state_24530[(7)]);
var inst_24467 = inst_24460.cljs$lang$protocol_mask$partition0$;
var inst_24468 = (inst_24467 & (64));
var inst_24469 = inst_24460.cljs$core$ISeq$;
var inst_24470 = (inst_24468) || (inst_24469);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24470)){
var statearr_24550_24608 = state_24530__$1;
(statearr_24550_24608[(1)] = (16));

} else {
var statearr_24551_24609 = state_24530__$1;
(statearr_24551_24609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (22))){
var inst_24490 = (state_24530[(11)]);
var inst_24489 = (state_24530[(14)]);
var inst_24488 = (state_24530[(2)]);
var inst_24489__$1 = cljs.core.nth.call(null,inst_24488,(0),null);
var inst_24490__$1 = cljs.core.nth.call(null,inst_24488,(1),null);
var inst_24491 = (inst_24489__$1 == null);
var inst_24492 = cljs.core._EQ_.call(null,inst_24490__$1,change);
var inst_24493 = (inst_24491) || (inst_24492);
var state_24530__$1 = (function (){var statearr_24552 = state_24530;
(statearr_24552[(11)] = inst_24490__$1);

(statearr_24552[(14)] = inst_24489__$1);

return statearr_24552;
})();
if(cljs.core.truth_(inst_24493)){
var statearr_24553_24610 = state_24530__$1;
(statearr_24553_24610[(1)] = (23));

} else {
var statearr_24554_24611 = state_24530__$1;
(statearr_24554_24611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (36))){
var inst_24482 = (state_24530[(12)]);
var inst_24460 = inst_24482;
var state_24530__$1 = (function (){var statearr_24555 = state_24530;
(statearr_24555[(7)] = inst_24460);

return statearr_24555;
})();
var statearr_24556_24612 = state_24530__$1;
(statearr_24556_24612[(2)] = null);

(statearr_24556_24612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (29))){
var inst_24504 = (state_24530[(10)]);
var state_24530__$1 = state_24530;
var statearr_24557_24613 = state_24530__$1;
(statearr_24557_24613[(2)] = inst_24504);

(statearr_24557_24613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (6))){
var state_24530__$1 = state_24530;
var statearr_24558_24614 = state_24530__$1;
(statearr_24558_24614[(2)] = false);

(statearr_24558_24614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (28))){
var inst_24500 = (state_24530[(2)]);
var inst_24501 = calc_state.call(null);
var inst_24460 = inst_24501;
var state_24530__$1 = (function (){var statearr_24559 = state_24530;
(statearr_24559[(15)] = inst_24500);

(statearr_24559[(7)] = inst_24460);

return statearr_24559;
})();
var statearr_24560_24615 = state_24530__$1;
(statearr_24560_24615[(2)] = null);

(statearr_24560_24615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (25))){
var inst_24526 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
var statearr_24561_24616 = state_24530__$1;
(statearr_24561_24616[(2)] = inst_24526);

(statearr_24561_24616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (34))){
var inst_24524 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
var statearr_24562_24617 = state_24530__$1;
(statearr_24562_24617[(2)] = inst_24524);

(statearr_24562_24617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (17))){
var state_24530__$1 = state_24530;
var statearr_24563_24618 = state_24530__$1;
(statearr_24563_24618[(2)] = false);

(statearr_24563_24618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (3))){
var state_24530__$1 = state_24530;
var statearr_24564_24619 = state_24530__$1;
(statearr_24564_24619[(2)] = false);

(statearr_24564_24619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (12))){
var inst_24528 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24530__$1,inst_24528);
} else {
if((state_val_24531 === (2))){
var inst_24436 = (state_24530[(8)]);
var inst_24441 = inst_24436.cljs$lang$protocol_mask$partition0$;
var inst_24442 = (inst_24441 & (64));
var inst_24443 = inst_24436.cljs$core$ISeq$;
var inst_24444 = (inst_24442) || (inst_24443);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24444)){
var statearr_24565_24620 = state_24530__$1;
(statearr_24565_24620[(1)] = (5));

} else {
var statearr_24566_24621 = state_24530__$1;
(statearr_24566_24621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (23))){
var inst_24489 = (state_24530[(14)]);
var inst_24495 = (inst_24489 == null);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24495)){
var statearr_24567_24622 = state_24530__$1;
(statearr_24567_24622[(1)] = (26));

} else {
var statearr_24568_24623 = state_24530__$1;
(statearr_24568_24623[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (35))){
var inst_24515 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
if(cljs.core.truth_(inst_24515)){
var statearr_24569_24624 = state_24530__$1;
(statearr_24569_24624[(1)] = (36));

} else {
var statearr_24570_24625 = state_24530__$1;
(statearr_24570_24625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (19))){
var inst_24460 = (state_24530[(7)]);
var inst_24479 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24460);
var state_24530__$1 = state_24530;
var statearr_24571_24626 = state_24530__$1;
(statearr_24571_24626[(2)] = inst_24479);

(statearr_24571_24626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (11))){
var inst_24460 = (state_24530[(7)]);
var inst_24464 = (inst_24460 == null);
var inst_24465 = cljs.core.not.call(null,inst_24464);
var state_24530__$1 = state_24530;
if(inst_24465){
var statearr_24572_24627 = state_24530__$1;
(statearr_24572_24627[(1)] = (13));

} else {
var statearr_24573_24628 = state_24530__$1;
(statearr_24573_24628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (9))){
var inst_24436 = (state_24530[(8)]);
var state_24530__$1 = state_24530;
var statearr_24574_24629 = state_24530__$1;
(statearr_24574_24629[(2)] = inst_24436);

(statearr_24574_24629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (5))){
var state_24530__$1 = state_24530;
var statearr_24575_24630 = state_24530__$1;
(statearr_24575_24630[(2)] = true);

(statearr_24575_24630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (14))){
var state_24530__$1 = state_24530;
var statearr_24576_24631 = state_24530__$1;
(statearr_24576_24631[(2)] = false);

(statearr_24576_24631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (26))){
var inst_24490 = (state_24530[(11)]);
var inst_24497 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24490);
var state_24530__$1 = state_24530;
var statearr_24577_24632 = state_24530__$1;
(statearr_24577_24632[(2)] = inst_24497);

(statearr_24577_24632[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (16))){
var state_24530__$1 = state_24530;
var statearr_24578_24633 = state_24530__$1;
(statearr_24578_24633[(2)] = true);

(statearr_24578_24633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (38))){
var inst_24520 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
var statearr_24579_24634 = state_24530__$1;
(statearr_24579_24634[(2)] = inst_24520);

(statearr_24579_24634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (30))){
var inst_24484 = (state_24530[(13)]);
var inst_24483 = (state_24530[(9)]);
var inst_24490 = (state_24530[(11)]);
var inst_24507 = cljs.core.empty_QMARK_.call(null,inst_24483);
var inst_24508 = inst_24484.call(null,inst_24490);
var inst_24509 = cljs.core.not.call(null,inst_24508);
var inst_24510 = (inst_24507) && (inst_24509);
var state_24530__$1 = state_24530;
var statearr_24580_24635 = state_24530__$1;
(statearr_24580_24635[(2)] = inst_24510);

(statearr_24580_24635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (10))){
var inst_24436 = (state_24530[(8)]);
var inst_24456 = (state_24530[(2)]);
var inst_24457 = cljs.core.get.call(null,inst_24456,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24458 = cljs.core.get.call(null,inst_24456,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24459 = cljs.core.get.call(null,inst_24456,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24460 = inst_24436;
var state_24530__$1 = (function (){var statearr_24581 = state_24530;
(statearr_24581[(16)] = inst_24457);

(statearr_24581[(17)] = inst_24459);

(statearr_24581[(18)] = inst_24458);

(statearr_24581[(7)] = inst_24460);

return statearr_24581;
})();
var statearr_24582_24636 = state_24530__$1;
(statearr_24582_24636[(2)] = null);

(statearr_24582_24636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (18))){
var inst_24474 = (state_24530[(2)]);
var state_24530__$1 = state_24530;
var statearr_24583_24637 = state_24530__$1;
(statearr_24583_24637[(2)] = inst_24474);

(statearr_24583_24637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (37))){
var state_24530__$1 = state_24530;
var statearr_24584_24638 = state_24530__$1;
(statearr_24584_24638[(2)] = null);

(statearr_24584_24638[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24531 === (8))){
var inst_24436 = (state_24530[(8)]);
var inst_24453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24436);
var state_24530__$1 = state_24530;
var statearr_24585_24639 = state_24530__$1;
(statearr_24585_24639[(2)] = inst_24453);

(statearr_24585_24639[(1)] = (10));


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
});})(c__22917__auto___24593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22805__auto__,c__22917__auto___24593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22806__auto__ = null;
var cljs$core$async$mix_$_state_machine__22806__auto____0 = (function (){
var statearr_24589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24589[(0)] = cljs$core$async$mix_$_state_machine__22806__auto__);

(statearr_24589[(1)] = (1));

return statearr_24589;
});
var cljs$core$async$mix_$_state_machine__22806__auto____1 = (function (state_24530){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_24530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e24590){if((e24590 instanceof Object)){
var ex__22809__auto__ = e24590;
var statearr_24591_24640 = state_24530;
(statearr_24591_24640[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24641 = state_24530;
state_24530 = G__24641;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22806__auto__ = function(state_24530){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22806__auto____1.call(this,state_24530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22806__auto____0;
cljs$core$async$mix_$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22806__auto____1;
return cljs$core$async$mix_$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___24593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22919__auto__ = (function (){var statearr_24592 = f__22918__auto__.call(null);
(statearr_24592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___24593);

return statearr_24592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___24593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20344__auto__ = (((p == null))?null:p);
var m__20345__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20345__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20344__auto__ = (((p == null))?null:p);
var m__20345__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,p,v,ch);
} else {
var m__20345__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24642 = [];
var len__20747__auto___24645 = arguments.length;
var i__20748__auto___24646 = (0);
while(true){
if((i__20748__auto___24646 < len__20747__auto___24645)){
args24642.push((arguments[i__20748__auto___24646]));

var G__24647 = (i__20748__auto___24646 + (1));
i__20748__auto___24646 = G__24647;
continue;
} else {
}
break;
}

var G__24644 = args24642.length;
switch (G__24644) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24642.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20344__auto__ = (((p == null))?null:p);
var m__20345__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,p);
} else {
var m__20345__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,p);
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
var x__20344__auto__ = (((p == null))?null:p);
var m__20345__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20344__auto__)]);
if(!((m__20345__auto__ == null))){
return m__20345__auto__.call(null,p,v);
} else {
var m__20345__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20345__auto____$1 == null))){
return m__20345__auto____$1.call(null,p,v);
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
var args24650 = [];
var len__20747__auto___24775 = arguments.length;
var i__20748__auto___24776 = (0);
while(true){
if((i__20748__auto___24776 < len__20747__auto___24775)){
args24650.push((arguments[i__20748__auto___24776]));

var G__24777 = (i__20748__auto___24776 + (1));
i__20748__auto___24776 = G__24777;
continue;
} else {
}
break;
}

var G__24652 = args24650.length;
switch (G__24652) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24650.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19689__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19689__auto__)){
return or__19689__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19689__auto__,mults){
return (function (p1__24649_SHARP_){
if(cljs.core.truth_(p1__24649_SHARP_.call(null,topic))){
return p1__24649_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24649_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19689__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24653 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24654){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24654 = meta24654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24655,meta24654__$1){
var self__ = this;
var _24655__$1 = this;
return (new cljs.core.async.t_cljs$core$async24653(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24654__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24655){
var self__ = this;
var _24655__$1 = this;
return self__.meta24654;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24654","meta24654",-1640547551,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24653";

cljs.core.async.t_cljs$core$async24653.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async24653");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24653 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24653(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24654){
return (new cljs.core.async.t_cljs$core$async24653(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24654));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24653(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22917__auto___24779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___24779,mults,ensure_mult,p){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___24779,mults,ensure_mult,p){
return (function (state_24727){
var state_val_24728 = (state_24727[(1)]);
if((state_val_24728 === (7))){
var inst_24723 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
var statearr_24729_24780 = state_24727__$1;
(statearr_24729_24780[(2)] = inst_24723);

(statearr_24729_24780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (20))){
var state_24727__$1 = state_24727;
var statearr_24730_24781 = state_24727__$1;
(statearr_24730_24781[(2)] = null);

(statearr_24730_24781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (1))){
var state_24727__$1 = state_24727;
var statearr_24731_24782 = state_24727__$1;
(statearr_24731_24782[(2)] = null);

(statearr_24731_24782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (24))){
var inst_24706 = (state_24727[(7)]);
var inst_24715 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24706);
var state_24727__$1 = state_24727;
var statearr_24732_24783 = state_24727__$1;
(statearr_24732_24783[(2)] = inst_24715);

(statearr_24732_24783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (4))){
var inst_24658 = (state_24727[(8)]);
var inst_24658__$1 = (state_24727[(2)]);
var inst_24659 = (inst_24658__$1 == null);
var state_24727__$1 = (function (){var statearr_24733 = state_24727;
(statearr_24733[(8)] = inst_24658__$1);

return statearr_24733;
})();
if(cljs.core.truth_(inst_24659)){
var statearr_24734_24784 = state_24727__$1;
(statearr_24734_24784[(1)] = (5));

} else {
var statearr_24735_24785 = state_24727__$1;
(statearr_24735_24785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (15))){
var inst_24700 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
var statearr_24736_24786 = state_24727__$1;
(statearr_24736_24786[(2)] = inst_24700);

(statearr_24736_24786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (21))){
var inst_24720 = (state_24727[(2)]);
var state_24727__$1 = (function (){var statearr_24737 = state_24727;
(statearr_24737[(9)] = inst_24720);

return statearr_24737;
})();
var statearr_24738_24787 = state_24727__$1;
(statearr_24738_24787[(2)] = null);

(statearr_24738_24787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (13))){
var inst_24682 = (state_24727[(10)]);
var inst_24684 = cljs.core.chunked_seq_QMARK_.call(null,inst_24682);
var state_24727__$1 = state_24727;
if(inst_24684){
var statearr_24739_24788 = state_24727__$1;
(statearr_24739_24788[(1)] = (16));

} else {
var statearr_24740_24789 = state_24727__$1;
(statearr_24740_24789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (22))){
var inst_24712 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
if(cljs.core.truth_(inst_24712)){
var statearr_24741_24790 = state_24727__$1;
(statearr_24741_24790[(1)] = (23));

} else {
var statearr_24742_24791 = state_24727__$1;
(statearr_24742_24791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (6))){
var inst_24708 = (state_24727[(11)]);
var inst_24706 = (state_24727[(7)]);
var inst_24658 = (state_24727[(8)]);
var inst_24706__$1 = topic_fn.call(null,inst_24658);
var inst_24707 = cljs.core.deref.call(null,mults);
var inst_24708__$1 = cljs.core.get.call(null,inst_24707,inst_24706__$1);
var state_24727__$1 = (function (){var statearr_24743 = state_24727;
(statearr_24743[(11)] = inst_24708__$1);

(statearr_24743[(7)] = inst_24706__$1);

return statearr_24743;
})();
if(cljs.core.truth_(inst_24708__$1)){
var statearr_24744_24792 = state_24727__$1;
(statearr_24744_24792[(1)] = (19));

} else {
var statearr_24745_24793 = state_24727__$1;
(statearr_24745_24793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (25))){
var inst_24717 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
var statearr_24746_24794 = state_24727__$1;
(statearr_24746_24794[(2)] = inst_24717);

(statearr_24746_24794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (17))){
var inst_24682 = (state_24727[(10)]);
var inst_24691 = cljs.core.first.call(null,inst_24682);
var inst_24692 = cljs.core.async.muxch_STAR_.call(null,inst_24691);
var inst_24693 = cljs.core.async.close_BANG_.call(null,inst_24692);
var inst_24694 = cljs.core.next.call(null,inst_24682);
var inst_24668 = inst_24694;
var inst_24669 = null;
var inst_24670 = (0);
var inst_24671 = (0);
var state_24727__$1 = (function (){var statearr_24747 = state_24727;
(statearr_24747[(12)] = inst_24693);

(statearr_24747[(13)] = inst_24671);

(statearr_24747[(14)] = inst_24670);

(statearr_24747[(15)] = inst_24668);

(statearr_24747[(16)] = inst_24669);

return statearr_24747;
})();
var statearr_24748_24795 = state_24727__$1;
(statearr_24748_24795[(2)] = null);

(statearr_24748_24795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (3))){
var inst_24725 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24727__$1,inst_24725);
} else {
if((state_val_24728 === (12))){
var inst_24702 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
var statearr_24749_24796 = state_24727__$1;
(statearr_24749_24796[(2)] = inst_24702);

(statearr_24749_24796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (2))){
var state_24727__$1 = state_24727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24727__$1,(4),ch);
} else {
if((state_val_24728 === (23))){
var state_24727__$1 = state_24727;
var statearr_24750_24797 = state_24727__$1;
(statearr_24750_24797[(2)] = null);

(statearr_24750_24797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (19))){
var inst_24708 = (state_24727[(11)]);
var inst_24658 = (state_24727[(8)]);
var inst_24710 = cljs.core.async.muxch_STAR_.call(null,inst_24708);
var state_24727__$1 = state_24727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24727__$1,(22),inst_24710,inst_24658);
} else {
if((state_val_24728 === (11))){
var inst_24682 = (state_24727[(10)]);
var inst_24668 = (state_24727[(15)]);
var inst_24682__$1 = cljs.core.seq.call(null,inst_24668);
var state_24727__$1 = (function (){var statearr_24751 = state_24727;
(statearr_24751[(10)] = inst_24682__$1);

return statearr_24751;
})();
if(inst_24682__$1){
var statearr_24752_24798 = state_24727__$1;
(statearr_24752_24798[(1)] = (13));

} else {
var statearr_24753_24799 = state_24727__$1;
(statearr_24753_24799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (9))){
var inst_24704 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
var statearr_24754_24800 = state_24727__$1;
(statearr_24754_24800[(2)] = inst_24704);

(statearr_24754_24800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (5))){
var inst_24665 = cljs.core.deref.call(null,mults);
var inst_24666 = cljs.core.vals.call(null,inst_24665);
var inst_24667 = cljs.core.seq.call(null,inst_24666);
var inst_24668 = inst_24667;
var inst_24669 = null;
var inst_24670 = (0);
var inst_24671 = (0);
var state_24727__$1 = (function (){var statearr_24755 = state_24727;
(statearr_24755[(13)] = inst_24671);

(statearr_24755[(14)] = inst_24670);

(statearr_24755[(15)] = inst_24668);

(statearr_24755[(16)] = inst_24669);

return statearr_24755;
})();
var statearr_24756_24801 = state_24727__$1;
(statearr_24756_24801[(2)] = null);

(statearr_24756_24801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (14))){
var state_24727__$1 = state_24727;
var statearr_24760_24802 = state_24727__$1;
(statearr_24760_24802[(2)] = null);

(statearr_24760_24802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (16))){
var inst_24682 = (state_24727[(10)]);
var inst_24686 = cljs.core.chunk_first.call(null,inst_24682);
var inst_24687 = cljs.core.chunk_rest.call(null,inst_24682);
var inst_24688 = cljs.core.count.call(null,inst_24686);
var inst_24668 = inst_24687;
var inst_24669 = inst_24686;
var inst_24670 = inst_24688;
var inst_24671 = (0);
var state_24727__$1 = (function (){var statearr_24761 = state_24727;
(statearr_24761[(13)] = inst_24671);

(statearr_24761[(14)] = inst_24670);

(statearr_24761[(15)] = inst_24668);

(statearr_24761[(16)] = inst_24669);

return statearr_24761;
})();
var statearr_24762_24803 = state_24727__$1;
(statearr_24762_24803[(2)] = null);

(statearr_24762_24803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (10))){
var inst_24671 = (state_24727[(13)]);
var inst_24670 = (state_24727[(14)]);
var inst_24668 = (state_24727[(15)]);
var inst_24669 = (state_24727[(16)]);
var inst_24676 = cljs.core._nth.call(null,inst_24669,inst_24671);
var inst_24677 = cljs.core.async.muxch_STAR_.call(null,inst_24676);
var inst_24678 = cljs.core.async.close_BANG_.call(null,inst_24677);
var inst_24679 = (inst_24671 + (1));
var tmp24757 = inst_24670;
var tmp24758 = inst_24668;
var tmp24759 = inst_24669;
var inst_24668__$1 = tmp24758;
var inst_24669__$1 = tmp24759;
var inst_24670__$1 = tmp24757;
var inst_24671__$1 = inst_24679;
var state_24727__$1 = (function (){var statearr_24763 = state_24727;
(statearr_24763[(17)] = inst_24678);

(statearr_24763[(13)] = inst_24671__$1);

(statearr_24763[(14)] = inst_24670__$1);

(statearr_24763[(15)] = inst_24668__$1);

(statearr_24763[(16)] = inst_24669__$1);

return statearr_24763;
})();
var statearr_24764_24804 = state_24727__$1;
(statearr_24764_24804[(2)] = null);

(statearr_24764_24804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (18))){
var inst_24697 = (state_24727[(2)]);
var state_24727__$1 = state_24727;
var statearr_24765_24805 = state_24727__$1;
(statearr_24765_24805[(2)] = inst_24697);

(statearr_24765_24805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24728 === (8))){
var inst_24671 = (state_24727[(13)]);
var inst_24670 = (state_24727[(14)]);
var inst_24673 = (inst_24671 < inst_24670);
var inst_24674 = inst_24673;
var state_24727__$1 = state_24727;
if(cljs.core.truth_(inst_24674)){
var statearr_24766_24806 = state_24727__$1;
(statearr_24766_24806[(1)] = (10));

} else {
var statearr_24767_24807 = state_24727__$1;
(statearr_24767_24807[(1)] = (11));

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
});})(c__22917__auto___24779,mults,ensure_mult,p))
;
return ((function (switch__22805__auto__,c__22917__auto___24779,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_24771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24771[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_24771[(1)] = (1));

return statearr_24771;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_24727){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_24727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e24772){if((e24772 instanceof Object)){
var ex__22809__auto__ = e24772;
var statearr_24773_24808 = state_24727;
(statearr_24773_24808[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24809 = state_24727;
state_24727 = G__24809;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_24727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_24727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___24779,mults,ensure_mult,p))
})();
var state__22919__auto__ = (function (){var statearr_24774 = f__22918__auto__.call(null);
(statearr_24774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___24779);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___24779,mults,ensure_mult,p))
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
var args24810 = [];
var len__20747__auto___24813 = arguments.length;
var i__20748__auto___24814 = (0);
while(true){
if((i__20748__auto___24814 < len__20747__auto___24813)){
args24810.push((arguments[i__20748__auto___24814]));

var G__24815 = (i__20748__auto___24814 + (1));
i__20748__auto___24814 = G__24815;
continue;
} else {
}
break;
}

var G__24812 = args24810.length;
switch (G__24812) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24810.length)].join('')));

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
var args24817 = [];
var len__20747__auto___24820 = arguments.length;
var i__20748__auto___24821 = (0);
while(true){
if((i__20748__auto___24821 < len__20747__auto___24820)){
args24817.push((arguments[i__20748__auto___24821]));

var G__24822 = (i__20748__auto___24821 + (1));
i__20748__auto___24821 = G__24822;
continue;
} else {
}
break;
}

var G__24819 = args24817.length;
switch (G__24819) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24817.length)].join('')));

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
var args24824 = [];
var len__20747__auto___24895 = arguments.length;
var i__20748__auto___24896 = (0);
while(true){
if((i__20748__auto___24896 < len__20747__auto___24895)){
args24824.push((arguments[i__20748__auto___24896]));

var G__24897 = (i__20748__auto___24896 + (1));
i__20748__auto___24896 = G__24897;
continue;
} else {
}
break;
}

var G__24826 = args24824.length;
switch (G__24826) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24824.length)].join('')));

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
var c__22917__auto___24899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___24899,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___24899,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24865){
var state_val_24866 = (state_24865[(1)]);
if((state_val_24866 === (7))){
var state_24865__$1 = state_24865;
var statearr_24867_24900 = state_24865__$1;
(statearr_24867_24900[(2)] = null);

(statearr_24867_24900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (1))){
var state_24865__$1 = state_24865;
var statearr_24868_24901 = state_24865__$1;
(statearr_24868_24901[(2)] = null);

(statearr_24868_24901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (4))){
var inst_24829 = (state_24865[(7)]);
var inst_24831 = (inst_24829 < cnt);
var state_24865__$1 = state_24865;
if(cljs.core.truth_(inst_24831)){
var statearr_24869_24902 = state_24865__$1;
(statearr_24869_24902[(1)] = (6));

} else {
var statearr_24870_24903 = state_24865__$1;
(statearr_24870_24903[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (15))){
var inst_24861 = (state_24865[(2)]);
var state_24865__$1 = state_24865;
var statearr_24871_24904 = state_24865__$1;
(statearr_24871_24904[(2)] = inst_24861);

(statearr_24871_24904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (13))){
var inst_24854 = cljs.core.async.close_BANG_.call(null,out);
var state_24865__$1 = state_24865;
var statearr_24872_24905 = state_24865__$1;
(statearr_24872_24905[(2)] = inst_24854);

(statearr_24872_24905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (6))){
var state_24865__$1 = state_24865;
var statearr_24873_24906 = state_24865__$1;
(statearr_24873_24906[(2)] = null);

(statearr_24873_24906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (3))){
var inst_24863 = (state_24865[(2)]);
var state_24865__$1 = state_24865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24865__$1,inst_24863);
} else {
if((state_val_24866 === (12))){
var inst_24851 = (state_24865[(8)]);
var inst_24851__$1 = (state_24865[(2)]);
var inst_24852 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24851__$1);
var state_24865__$1 = (function (){var statearr_24874 = state_24865;
(statearr_24874[(8)] = inst_24851__$1);

return statearr_24874;
})();
if(cljs.core.truth_(inst_24852)){
var statearr_24875_24907 = state_24865__$1;
(statearr_24875_24907[(1)] = (13));

} else {
var statearr_24876_24908 = state_24865__$1;
(statearr_24876_24908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (2))){
var inst_24828 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24829 = (0);
var state_24865__$1 = (function (){var statearr_24877 = state_24865;
(statearr_24877[(7)] = inst_24829);

(statearr_24877[(9)] = inst_24828);

return statearr_24877;
})();
var statearr_24878_24909 = state_24865__$1;
(statearr_24878_24909[(2)] = null);

(statearr_24878_24909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (11))){
var inst_24829 = (state_24865[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24865,(10),Object,null,(9));
var inst_24838 = chs__$1.call(null,inst_24829);
var inst_24839 = done.call(null,inst_24829);
var inst_24840 = cljs.core.async.take_BANG_.call(null,inst_24838,inst_24839);
var state_24865__$1 = state_24865;
var statearr_24879_24910 = state_24865__$1;
(statearr_24879_24910[(2)] = inst_24840);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24865__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (9))){
var inst_24829 = (state_24865[(7)]);
var inst_24842 = (state_24865[(2)]);
var inst_24843 = (inst_24829 + (1));
var inst_24829__$1 = inst_24843;
var state_24865__$1 = (function (){var statearr_24880 = state_24865;
(statearr_24880[(10)] = inst_24842);

(statearr_24880[(7)] = inst_24829__$1);

return statearr_24880;
})();
var statearr_24881_24911 = state_24865__$1;
(statearr_24881_24911[(2)] = null);

(statearr_24881_24911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (5))){
var inst_24849 = (state_24865[(2)]);
var state_24865__$1 = (function (){var statearr_24882 = state_24865;
(statearr_24882[(11)] = inst_24849);

return statearr_24882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24865__$1,(12),dchan);
} else {
if((state_val_24866 === (14))){
var inst_24851 = (state_24865[(8)]);
var inst_24856 = cljs.core.apply.call(null,f,inst_24851);
var state_24865__$1 = state_24865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24865__$1,(16),out,inst_24856);
} else {
if((state_val_24866 === (16))){
var inst_24858 = (state_24865[(2)]);
var state_24865__$1 = (function (){var statearr_24883 = state_24865;
(statearr_24883[(12)] = inst_24858);

return statearr_24883;
})();
var statearr_24884_24912 = state_24865__$1;
(statearr_24884_24912[(2)] = null);

(statearr_24884_24912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (10))){
var inst_24833 = (state_24865[(2)]);
var inst_24834 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24865__$1 = (function (){var statearr_24885 = state_24865;
(statearr_24885[(13)] = inst_24833);

return statearr_24885;
})();
var statearr_24886_24913 = state_24865__$1;
(statearr_24886_24913[(2)] = inst_24834);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24865__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (8))){
var inst_24847 = (state_24865[(2)]);
var state_24865__$1 = state_24865;
var statearr_24887_24914 = state_24865__$1;
(statearr_24887_24914[(2)] = inst_24847);

(statearr_24887_24914[(1)] = (5));


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
});})(c__22917__auto___24899,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22805__auto__,c__22917__auto___24899,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_24891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24891[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_24891[(1)] = (1));

return statearr_24891;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_24865){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_24865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e24892){if((e24892 instanceof Object)){
var ex__22809__auto__ = e24892;
var statearr_24893_24915 = state_24865;
(statearr_24893_24915[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24916 = state_24865;
state_24865 = G__24916;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_24865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_24865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___24899,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22919__auto__ = (function (){var statearr_24894 = f__22918__auto__.call(null);
(statearr_24894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___24899);

return statearr_24894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___24899,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24918 = [];
var len__20747__auto___24974 = arguments.length;
var i__20748__auto___24975 = (0);
while(true){
if((i__20748__auto___24975 < len__20747__auto___24974)){
args24918.push((arguments[i__20748__auto___24975]));

var G__24976 = (i__20748__auto___24975 + (1));
i__20748__auto___24975 = G__24976;
continue;
} else {
}
break;
}

var G__24920 = args24918.length;
switch (G__24920) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24918.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22917__auto___24978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___24978,out){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___24978,out){
return (function (state_24950){
var state_val_24951 = (state_24950[(1)]);
if((state_val_24951 === (7))){
var inst_24930 = (state_24950[(7)]);
var inst_24929 = (state_24950[(8)]);
var inst_24929__$1 = (state_24950[(2)]);
var inst_24930__$1 = cljs.core.nth.call(null,inst_24929__$1,(0),null);
var inst_24931 = cljs.core.nth.call(null,inst_24929__$1,(1),null);
var inst_24932 = (inst_24930__$1 == null);
var state_24950__$1 = (function (){var statearr_24952 = state_24950;
(statearr_24952[(7)] = inst_24930__$1);

(statearr_24952[(8)] = inst_24929__$1);

(statearr_24952[(9)] = inst_24931);

return statearr_24952;
})();
if(cljs.core.truth_(inst_24932)){
var statearr_24953_24979 = state_24950__$1;
(statearr_24953_24979[(1)] = (8));

} else {
var statearr_24954_24980 = state_24950__$1;
(statearr_24954_24980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (1))){
var inst_24921 = cljs.core.vec.call(null,chs);
var inst_24922 = inst_24921;
var state_24950__$1 = (function (){var statearr_24955 = state_24950;
(statearr_24955[(10)] = inst_24922);

return statearr_24955;
})();
var statearr_24956_24981 = state_24950__$1;
(statearr_24956_24981[(2)] = null);

(statearr_24956_24981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (4))){
var inst_24922 = (state_24950[(10)]);
var state_24950__$1 = state_24950;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24950__$1,(7),inst_24922);
} else {
if((state_val_24951 === (6))){
var inst_24946 = (state_24950[(2)]);
var state_24950__$1 = state_24950;
var statearr_24957_24982 = state_24950__$1;
(statearr_24957_24982[(2)] = inst_24946);

(statearr_24957_24982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (3))){
var inst_24948 = (state_24950[(2)]);
var state_24950__$1 = state_24950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24950__$1,inst_24948);
} else {
if((state_val_24951 === (2))){
var inst_24922 = (state_24950[(10)]);
var inst_24924 = cljs.core.count.call(null,inst_24922);
var inst_24925 = (inst_24924 > (0));
var state_24950__$1 = state_24950;
if(cljs.core.truth_(inst_24925)){
var statearr_24959_24983 = state_24950__$1;
(statearr_24959_24983[(1)] = (4));

} else {
var statearr_24960_24984 = state_24950__$1;
(statearr_24960_24984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (11))){
var inst_24922 = (state_24950[(10)]);
var inst_24939 = (state_24950[(2)]);
var tmp24958 = inst_24922;
var inst_24922__$1 = tmp24958;
var state_24950__$1 = (function (){var statearr_24961 = state_24950;
(statearr_24961[(11)] = inst_24939);

(statearr_24961[(10)] = inst_24922__$1);

return statearr_24961;
})();
var statearr_24962_24985 = state_24950__$1;
(statearr_24962_24985[(2)] = null);

(statearr_24962_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (9))){
var inst_24930 = (state_24950[(7)]);
var state_24950__$1 = state_24950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24950__$1,(11),out,inst_24930);
} else {
if((state_val_24951 === (5))){
var inst_24944 = cljs.core.async.close_BANG_.call(null,out);
var state_24950__$1 = state_24950;
var statearr_24963_24986 = state_24950__$1;
(statearr_24963_24986[(2)] = inst_24944);

(statearr_24963_24986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (10))){
var inst_24942 = (state_24950[(2)]);
var state_24950__$1 = state_24950;
var statearr_24964_24987 = state_24950__$1;
(statearr_24964_24987[(2)] = inst_24942);

(statearr_24964_24987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24951 === (8))){
var inst_24930 = (state_24950[(7)]);
var inst_24922 = (state_24950[(10)]);
var inst_24929 = (state_24950[(8)]);
var inst_24931 = (state_24950[(9)]);
var inst_24934 = (function (){var cs = inst_24922;
var vec__24927 = inst_24929;
var v = inst_24930;
var c = inst_24931;
return ((function (cs,vec__24927,v,c,inst_24930,inst_24922,inst_24929,inst_24931,state_val_24951,c__22917__auto___24978,out){
return (function (p1__24917_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24917_SHARP_);
});
;})(cs,vec__24927,v,c,inst_24930,inst_24922,inst_24929,inst_24931,state_val_24951,c__22917__auto___24978,out))
})();
var inst_24935 = cljs.core.filterv.call(null,inst_24934,inst_24922);
var inst_24922__$1 = inst_24935;
var state_24950__$1 = (function (){var statearr_24965 = state_24950;
(statearr_24965[(10)] = inst_24922__$1);

return statearr_24965;
})();
var statearr_24966_24988 = state_24950__$1;
(statearr_24966_24988[(2)] = null);

(statearr_24966_24988[(1)] = (2));


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
});})(c__22917__auto___24978,out))
;
return ((function (switch__22805__auto__,c__22917__auto___24978,out){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_24970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24970[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_24970[(1)] = (1));

return statearr_24970;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_24950){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_24950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e24971){if((e24971 instanceof Object)){
var ex__22809__auto__ = e24971;
var statearr_24972_24989 = state_24950;
(statearr_24972_24989[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24990 = state_24950;
state_24950 = G__24990;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_24950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_24950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___24978,out))
})();
var state__22919__auto__ = (function (){var statearr_24973 = f__22918__auto__.call(null);
(statearr_24973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___24978);

return statearr_24973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___24978,out))
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
var args24991 = [];
var len__20747__auto___25040 = arguments.length;
var i__20748__auto___25041 = (0);
while(true){
if((i__20748__auto___25041 < len__20747__auto___25040)){
args24991.push((arguments[i__20748__auto___25041]));

var G__25042 = (i__20748__auto___25041 + (1));
i__20748__auto___25041 = G__25042;
continue;
} else {
}
break;
}

var G__24993 = args24991.length;
switch (G__24993) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24991.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22917__auto___25044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___25044,out){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___25044,out){
return (function (state_25017){
var state_val_25018 = (state_25017[(1)]);
if((state_val_25018 === (7))){
var inst_24999 = (state_25017[(7)]);
var inst_24999__$1 = (state_25017[(2)]);
var inst_25000 = (inst_24999__$1 == null);
var inst_25001 = cljs.core.not.call(null,inst_25000);
var state_25017__$1 = (function (){var statearr_25019 = state_25017;
(statearr_25019[(7)] = inst_24999__$1);

return statearr_25019;
})();
if(inst_25001){
var statearr_25020_25045 = state_25017__$1;
(statearr_25020_25045[(1)] = (8));

} else {
var statearr_25021_25046 = state_25017__$1;
(statearr_25021_25046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (1))){
var inst_24994 = (0);
var state_25017__$1 = (function (){var statearr_25022 = state_25017;
(statearr_25022[(8)] = inst_24994);

return statearr_25022;
})();
var statearr_25023_25047 = state_25017__$1;
(statearr_25023_25047[(2)] = null);

(statearr_25023_25047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (4))){
var state_25017__$1 = state_25017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25017__$1,(7),ch);
} else {
if((state_val_25018 === (6))){
var inst_25012 = (state_25017[(2)]);
var state_25017__$1 = state_25017;
var statearr_25024_25048 = state_25017__$1;
(statearr_25024_25048[(2)] = inst_25012);

(statearr_25024_25048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (3))){
var inst_25014 = (state_25017[(2)]);
var inst_25015 = cljs.core.async.close_BANG_.call(null,out);
var state_25017__$1 = (function (){var statearr_25025 = state_25017;
(statearr_25025[(9)] = inst_25014);

return statearr_25025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25017__$1,inst_25015);
} else {
if((state_val_25018 === (2))){
var inst_24994 = (state_25017[(8)]);
var inst_24996 = (inst_24994 < n);
var state_25017__$1 = state_25017;
if(cljs.core.truth_(inst_24996)){
var statearr_25026_25049 = state_25017__$1;
(statearr_25026_25049[(1)] = (4));

} else {
var statearr_25027_25050 = state_25017__$1;
(statearr_25027_25050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (11))){
var inst_24994 = (state_25017[(8)]);
var inst_25004 = (state_25017[(2)]);
var inst_25005 = (inst_24994 + (1));
var inst_24994__$1 = inst_25005;
var state_25017__$1 = (function (){var statearr_25028 = state_25017;
(statearr_25028[(10)] = inst_25004);

(statearr_25028[(8)] = inst_24994__$1);

return statearr_25028;
})();
var statearr_25029_25051 = state_25017__$1;
(statearr_25029_25051[(2)] = null);

(statearr_25029_25051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (9))){
var state_25017__$1 = state_25017;
var statearr_25030_25052 = state_25017__$1;
(statearr_25030_25052[(2)] = null);

(statearr_25030_25052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (5))){
var state_25017__$1 = state_25017;
var statearr_25031_25053 = state_25017__$1;
(statearr_25031_25053[(2)] = null);

(statearr_25031_25053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (10))){
var inst_25009 = (state_25017[(2)]);
var state_25017__$1 = state_25017;
var statearr_25032_25054 = state_25017__$1;
(statearr_25032_25054[(2)] = inst_25009);

(statearr_25032_25054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25018 === (8))){
var inst_24999 = (state_25017[(7)]);
var state_25017__$1 = state_25017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25017__$1,(11),out,inst_24999);
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
});})(c__22917__auto___25044,out))
;
return ((function (switch__22805__auto__,c__22917__auto___25044,out){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_25036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25036[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_25036[(1)] = (1));

return statearr_25036;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_25017){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_25017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e25037){if((e25037 instanceof Object)){
var ex__22809__auto__ = e25037;
var statearr_25038_25055 = state_25017;
(statearr_25038_25055[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25056 = state_25017;
state_25017 = G__25056;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_25017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_25017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___25044,out))
})();
var state__22919__auto__ = (function (){var statearr_25039 = f__22918__auto__.call(null);
(statearr_25039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___25044);

return statearr_25039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___25044,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25064 = (function (map_LT_,f,ch,meta25065){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25065 = meta25065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25066,meta25065__$1){
var self__ = this;
var _25066__$1 = this;
return (new cljs.core.async.t_cljs$core$async25064(self__.map_LT_,self__.f,self__.ch,meta25065__$1));
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25066){
var self__ = this;
var _25066__$1 = this;
return self__.meta25065;
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25067 = (function (map_LT_,f,ch,meta25065,_,fn1,meta25068){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25065 = meta25065;
this._ = _;
this.fn1 = fn1;
this.meta25068 = meta25068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25069,meta25068__$1){
var self__ = this;
var _25069__$1 = this;
return (new cljs.core.async.t_cljs$core$async25067(self__.map_LT_,self__.f,self__.ch,self__.meta25065,self__._,self__.fn1,meta25068__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25069){
var self__ = this;
var _25069__$1 = this;
return self__.meta25068;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25067.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25057_SHARP_){
return f1.call(null,(((p1__25057_SHARP_ == null))?null:self__.f.call(null,p1__25057_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25067.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25065","meta25065",-755491505,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25064","cljs.core.async/t_cljs$core$async25064",2014181122,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25068","meta25068",1231315721,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25067";

cljs.core.async.t_cljs$core$async25067.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async25067");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25067 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25067(map_LT___$1,f__$1,ch__$1,meta25065__$1,___$2,fn1__$1,meta25068){
return (new cljs.core.async.t_cljs$core$async25067(map_LT___$1,f__$1,ch__$1,meta25065__$1,___$2,fn1__$1,meta25068));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25067(self__.map_LT_,self__.f,self__.ch,self__.meta25065,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19677__auto__ = ret;
if(cljs.core.truth_(and__19677__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19677__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25065","meta25065",-755491505,null)], null);
});

cljs.core.async.t_cljs$core$async25064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25064";

cljs.core.async.t_cljs$core$async25064.cljs$lang$ctorPrWriter = (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async25064");
});

cljs.core.async.__GT_t_cljs$core$async25064 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25064(map_LT___$1,f__$1,ch__$1,meta25065){
return (new cljs.core.async.t_cljs$core$async25064(map_LT___$1,f__$1,ch__$1,meta25065));
});

}

return (new cljs.core.async.t_cljs$core$async25064(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25073 = (function (map_GT_,f,ch,meta25074){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25074 = meta25074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25075,meta25074__$1){
var self__ = this;
var _25075__$1 = this;
return (new cljs.core.async.t_cljs$core$async25073(self__.map_GT_,self__.f,self__.ch,meta25074__$1));
});

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25075){
var self__ = this;
var _25075__$1 = this;
return self__.meta25074;
});

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25074","meta25074",1671012876,null)], null);
});

cljs.core.async.t_cljs$core$async25073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25073";

cljs.core.async.t_cljs$core$async25073.cljs$lang$ctorPrWriter = (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async25073");
});

cljs.core.async.__GT_t_cljs$core$async25073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25073(map_GT___$1,f__$1,ch__$1,meta25074){
return (new cljs.core.async.t_cljs$core$async25073(map_GT___$1,f__$1,ch__$1,meta25074));
});

}

return (new cljs.core.async.t_cljs$core$async25073(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25079 = (function (filter_GT_,p,ch,meta25080){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25080 = meta25080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25081,meta25080__$1){
var self__ = this;
var _25081__$1 = this;
return (new cljs.core.async.t_cljs$core$async25079(self__.filter_GT_,self__.p,self__.ch,meta25080__$1));
});

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25081){
var self__ = this;
var _25081__$1 = this;
return self__.meta25080;
});

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25080","meta25080",-707685079,null)], null);
});

cljs.core.async.t_cljs$core$async25079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25079";

cljs.core.async.t_cljs$core$async25079.cljs$lang$ctorPrWriter = (function (this__20287__auto__,writer__20288__auto__,opt__20289__auto__){
return cljs.core._write.call(null,writer__20288__auto__,"cljs.core.async/t_cljs$core$async25079");
});

cljs.core.async.__GT_t_cljs$core$async25079 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25079(filter_GT___$1,p__$1,ch__$1,meta25080){
return (new cljs.core.async.t_cljs$core$async25079(filter_GT___$1,p__$1,ch__$1,meta25080));
});

}

return (new cljs.core.async.t_cljs$core$async25079(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25082 = [];
var len__20747__auto___25126 = arguments.length;
var i__20748__auto___25127 = (0);
while(true){
if((i__20748__auto___25127 < len__20747__auto___25126)){
args25082.push((arguments[i__20748__auto___25127]));

var G__25128 = (i__20748__auto___25127 + (1));
i__20748__auto___25127 = G__25128;
continue;
} else {
}
break;
}

var G__25084 = args25082.length;
switch (G__25084) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25082.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22917__auto___25130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___25130,out){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___25130,out){
return (function (state_25105){
var state_val_25106 = (state_25105[(1)]);
if((state_val_25106 === (7))){
var inst_25101 = (state_25105[(2)]);
var state_25105__$1 = state_25105;
var statearr_25107_25131 = state_25105__$1;
(statearr_25107_25131[(2)] = inst_25101);

(statearr_25107_25131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (1))){
var state_25105__$1 = state_25105;
var statearr_25108_25132 = state_25105__$1;
(statearr_25108_25132[(2)] = null);

(statearr_25108_25132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (4))){
var inst_25087 = (state_25105[(7)]);
var inst_25087__$1 = (state_25105[(2)]);
var inst_25088 = (inst_25087__$1 == null);
var state_25105__$1 = (function (){var statearr_25109 = state_25105;
(statearr_25109[(7)] = inst_25087__$1);

return statearr_25109;
})();
if(cljs.core.truth_(inst_25088)){
var statearr_25110_25133 = state_25105__$1;
(statearr_25110_25133[(1)] = (5));

} else {
var statearr_25111_25134 = state_25105__$1;
(statearr_25111_25134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (6))){
var inst_25087 = (state_25105[(7)]);
var inst_25092 = p.call(null,inst_25087);
var state_25105__$1 = state_25105;
if(cljs.core.truth_(inst_25092)){
var statearr_25112_25135 = state_25105__$1;
(statearr_25112_25135[(1)] = (8));

} else {
var statearr_25113_25136 = state_25105__$1;
(statearr_25113_25136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (3))){
var inst_25103 = (state_25105[(2)]);
var state_25105__$1 = state_25105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25105__$1,inst_25103);
} else {
if((state_val_25106 === (2))){
var state_25105__$1 = state_25105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25105__$1,(4),ch);
} else {
if((state_val_25106 === (11))){
var inst_25095 = (state_25105[(2)]);
var state_25105__$1 = state_25105;
var statearr_25114_25137 = state_25105__$1;
(statearr_25114_25137[(2)] = inst_25095);

(statearr_25114_25137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (9))){
var state_25105__$1 = state_25105;
var statearr_25115_25138 = state_25105__$1;
(statearr_25115_25138[(2)] = null);

(statearr_25115_25138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (5))){
var inst_25090 = cljs.core.async.close_BANG_.call(null,out);
var state_25105__$1 = state_25105;
var statearr_25116_25139 = state_25105__$1;
(statearr_25116_25139[(2)] = inst_25090);

(statearr_25116_25139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (10))){
var inst_25098 = (state_25105[(2)]);
var state_25105__$1 = (function (){var statearr_25117 = state_25105;
(statearr_25117[(8)] = inst_25098);

return statearr_25117;
})();
var statearr_25118_25140 = state_25105__$1;
(statearr_25118_25140[(2)] = null);

(statearr_25118_25140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25106 === (8))){
var inst_25087 = (state_25105[(7)]);
var state_25105__$1 = state_25105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25105__$1,(11),out,inst_25087);
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
});})(c__22917__auto___25130,out))
;
return ((function (switch__22805__auto__,c__22917__auto___25130,out){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_25122 = [null,null,null,null,null,null,null,null,null];
(statearr_25122[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_25122[(1)] = (1));

return statearr_25122;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_25105){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_25105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e25123){if((e25123 instanceof Object)){
var ex__22809__auto__ = e25123;
var statearr_25124_25141 = state_25105;
(statearr_25124_25141[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25142 = state_25105;
state_25105 = G__25142;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_25105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_25105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___25130,out))
})();
var state__22919__auto__ = (function (){var statearr_25125 = f__22918__auto__.call(null);
(statearr_25125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___25130);

return statearr_25125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___25130,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25143 = [];
var len__20747__auto___25146 = arguments.length;
var i__20748__auto___25147 = (0);
while(true){
if((i__20748__auto___25147 < len__20747__auto___25146)){
args25143.push((arguments[i__20748__auto___25147]));

var G__25148 = (i__20748__auto___25147 + (1));
i__20748__auto___25147 = G__25148;
continue;
} else {
}
break;
}

var G__25145 = args25143.length;
switch (G__25145) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25143.length)].join('')));

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
var c__22917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto__){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto__){
return (function (state_25315){
var state_val_25316 = (state_25315[(1)]);
if((state_val_25316 === (7))){
var inst_25311 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25317_25358 = state_25315__$1;
(statearr_25317_25358[(2)] = inst_25311);

(statearr_25317_25358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (20))){
var inst_25281 = (state_25315[(7)]);
var inst_25292 = (state_25315[(2)]);
var inst_25293 = cljs.core.next.call(null,inst_25281);
var inst_25267 = inst_25293;
var inst_25268 = null;
var inst_25269 = (0);
var inst_25270 = (0);
var state_25315__$1 = (function (){var statearr_25318 = state_25315;
(statearr_25318[(8)] = inst_25269);

(statearr_25318[(9)] = inst_25292);

(statearr_25318[(10)] = inst_25270);

(statearr_25318[(11)] = inst_25268);

(statearr_25318[(12)] = inst_25267);

return statearr_25318;
})();
var statearr_25319_25359 = state_25315__$1;
(statearr_25319_25359[(2)] = null);

(statearr_25319_25359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (1))){
var state_25315__$1 = state_25315;
var statearr_25320_25360 = state_25315__$1;
(statearr_25320_25360[(2)] = null);

(statearr_25320_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (4))){
var inst_25256 = (state_25315[(13)]);
var inst_25256__$1 = (state_25315[(2)]);
var inst_25257 = (inst_25256__$1 == null);
var state_25315__$1 = (function (){var statearr_25321 = state_25315;
(statearr_25321[(13)] = inst_25256__$1);

return statearr_25321;
})();
if(cljs.core.truth_(inst_25257)){
var statearr_25322_25361 = state_25315__$1;
(statearr_25322_25361[(1)] = (5));

} else {
var statearr_25323_25362 = state_25315__$1;
(statearr_25323_25362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (15))){
var state_25315__$1 = state_25315;
var statearr_25327_25363 = state_25315__$1;
(statearr_25327_25363[(2)] = null);

(statearr_25327_25363[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (21))){
var state_25315__$1 = state_25315;
var statearr_25328_25364 = state_25315__$1;
(statearr_25328_25364[(2)] = null);

(statearr_25328_25364[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (13))){
var inst_25269 = (state_25315[(8)]);
var inst_25270 = (state_25315[(10)]);
var inst_25268 = (state_25315[(11)]);
var inst_25267 = (state_25315[(12)]);
var inst_25277 = (state_25315[(2)]);
var inst_25278 = (inst_25270 + (1));
var tmp25324 = inst_25269;
var tmp25325 = inst_25268;
var tmp25326 = inst_25267;
var inst_25267__$1 = tmp25326;
var inst_25268__$1 = tmp25325;
var inst_25269__$1 = tmp25324;
var inst_25270__$1 = inst_25278;
var state_25315__$1 = (function (){var statearr_25329 = state_25315;
(statearr_25329[(8)] = inst_25269__$1);

(statearr_25329[(10)] = inst_25270__$1);

(statearr_25329[(11)] = inst_25268__$1);

(statearr_25329[(12)] = inst_25267__$1);

(statearr_25329[(14)] = inst_25277);

return statearr_25329;
})();
var statearr_25330_25365 = state_25315__$1;
(statearr_25330_25365[(2)] = null);

(statearr_25330_25365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (22))){
var state_25315__$1 = state_25315;
var statearr_25331_25366 = state_25315__$1;
(statearr_25331_25366[(2)] = null);

(statearr_25331_25366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (6))){
var inst_25256 = (state_25315[(13)]);
var inst_25265 = f.call(null,inst_25256);
var inst_25266 = cljs.core.seq.call(null,inst_25265);
var inst_25267 = inst_25266;
var inst_25268 = null;
var inst_25269 = (0);
var inst_25270 = (0);
var state_25315__$1 = (function (){var statearr_25332 = state_25315;
(statearr_25332[(8)] = inst_25269);

(statearr_25332[(10)] = inst_25270);

(statearr_25332[(11)] = inst_25268);

(statearr_25332[(12)] = inst_25267);

return statearr_25332;
})();
var statearr_25333_25367 = state_25315__$1;
(statearr_25333_25367[(2)] = null);

(statearr_25333_25367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (17))){
var inst_25281 = (state_25315[(7)]);
var inst_25285 = cljs.core.chunk_first.call(null,inst_25281);
var inst_25286 = cljs.core.chunk_rest.call(null,inst_25281);
var inst_25287 = cljs.core.count.call(null,inst_25285);
var inst_25267 = inst_25286;
var inst_25268 = inst_25285;
var inst_25269 = inst_25287;
var inst_25270 = (0);
var state_25315__$1 = (function (){var statearr_25334 = state_25315;
(statearr_25334[(8)] = inst_25269);

(statearr_25334[(10)] = inst_25270);

(statearr_25334[(11)] = inst_25268);

(statearr_25334[(12)] = inst_25267);

return statearr_25334;
})();
var statearr_25335_25368 = state_25315__$1;
(statearr_25335_25368[(2)] = null);

(statearr_25335_25368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (3))){
var inst_25313 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25315__$1,inst_25313);
} else {
if((state_val_25316 === (12))){
var inst_25301 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25336_25369 = state_25315__$1;
(statearr_25336_25369[(2)] = inst_25301);

(statearr_25336_25369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (2))){
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25315__$1,(4),in$);
} else {
if((state_val_25316 === (23))){
var inst_25309 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25337_25370 = state_25315__$1;
(statearr_25337_25370[(2)] = inst_25309);

(statearr_25337_25370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (19))){
var inst_25296 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25338_25371 = state_25315__$1;
(statearr_25338_25371[(2)] = inst_25296);

(statearr_25338_25371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (11))){
var inst_25281 = (state_25315[(7)]);
var inst_25267 = (state_25315[(12)]);
var inst_25281__$1 = cljs.core.seq.call(null,inst_25267);
var state_25315__$1 = (function (){var statearr_25339 = state_25315;
(statearr_25339[(7)] = inst_25281__$1);

return statearr_25339;
})();
if(inst_25281__$1){
var statearr_25340_25372 = state_25315__$1;
(statearr_25340_25372[(1)] = (14));

} else {
var statearr_25341_25373 = state_25315__$1;
(statearr_25341_25373[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (9))){
var inst_25303 = (state_25315[(2)]);
var inst_25304 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25315__$1 = (function (){var statearr_25342 = state_25315;
(statearr_25342[(15)] = inst_25303);

return statearr_25342;
})();
if(cljs.core.truth_(inst_25304)){
var statearr_25343_25374 = state_25315__$1;
(statearr_25343_25374[(1)] = (21));

} else {
var statearr_25344_25375 = state_25315__$1;
(statearr_25344_25375[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (5))){
var inst_25259 = cljs.core.async.close_BANG_.call(null,out);
var state_25315__$1 = state_25315;
var statearr_25345_25376 = state_25315__$1;
(statearr_25345_25376[(2)] = inst_25259);

(statearr_25345_25376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (14))){
var inst_25281 = (state_25315[(7)]);
var inst_25283 = cljs.core.chunked_seq_QMARK_.call(null,inst_25281);
var state_25315__$1 = state_25315;
if(inst_25283){
var statearr_25346_25377 = state_25315__$1;
(statearr_25346_25377[(1)] = (17));

} else {
var statearr_25347_25378 = state_25315__$1;
(statearr_25347_25378[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (16))){
var inst_25299 = (state_25315[(2)]);
var state_25315__$1 = state_25315;
var statearr_25348_25379 = state_25315__$1;
(statearr_25348_25379[(2)] = inst_25299);

(statearr_25348_25379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25316 === (10))){
var inst_25270 = (state_25315[(10)]);
var inst_25268 = (state_25315[(11)]);
var inst_25275 = cljs.core._nth.call(null,inst_25268,inst_25270);
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25315__$1,(13),out,inst_25275);
} else {
if((state_val_25316 === (18))){
var inst_25281 = (state_25315[(7)]);
var inst_25290 = cljs.core.first.call(null,inst_25281);
var state_25315__$1 = state_25315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25315__$1,(20),out,inst_25290);
} else {
if((state_val_25316 === (8))){
var inst_25269 = (state_25315[(8)]);
var inst_25270 = (state_25315[(10)]);
var inst_25272 = (inst_25270 < inst_25269);
var inst_25273 = inst_25272;
var state_25315__$1 = state_25315;
if(cljs.core.truth_(inst_25273)){
var statearr_25349_25380 = state_25315__$1;
(statearr_25349_25380[(1)] = (10));

} else {
var statearr_25350_25381 = state_25315__$1;
(statearr_25350_25381[(1)] = (11));

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
});})(c__22917__auto__))
;
return ((function (switch__22805__auto__,c__22917__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22806__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22806__auto____0 = (function (){
var statearr_25354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25354[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22806__auto__);

(statearr_25354[(1)] = (1));

return statearr_25354;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22806__auto____1 = (function (state_25315){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_25315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e25355){if((e25355 instanceof Object)){
var ex__22809__auto__ = e25355;
var statearr_25356_25382 = state_25315;
(statearr_25356_25382[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25383 = state_25315;
state_25315 = G__25383;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22806__auto__ = function(state_25315){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22806__auto____1.call(this,state_25315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22806__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22806__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto__))
})();
var state__22919__auto__ = (function (){var statearr_25357 = f__22918__auto__.call(null);
(statearr_25357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto__);

return statearr_25357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto__))
);

return c__22917__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25384 = [];
var len__20747__auto___25387 = arguments.length;
var i__20748__auto___25388 = (0);
while(true){
if((i__20748__auto___25388 < len__20747__auto___25387)){
args25384.push((arguments[i__20748__auto___25388]));

var G__25389 = (i__20748__auto___25388 + (1));
i__20748__auto___25388 = G__25389;
continue;
} else {
}
break;
}

var G__25386 = args25384.length;
switch (G__25386) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25384.length)].join('')));

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
var args25391 = [];
var len__20747__auto___25394 = arguments.length;
var i__20748__auto___25395 = (0);
while(true){
if((i__20748__auto___25395 < len__20747__auto___25394)){
args25391.push((arguments[i__20748__auto___25395]));

var G__25396 = (i__20748__auto___25395 + (1));
i__20748__auto___25395 = G__25396;
continue;
} else {
}
break;
}

var G__25393 = args25391.length;
switch (G__25393) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25391.length)].join('')));

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
var args25398 = [];
var len__20747__auto___25449 = arguments.length;
var i__20748__auto___25450 = (0);
while(true){
if((i__20748__auto___25450 < len__20747__auto___25449)){
args25398.push((arguments[i__20748__auto___25450]));

var G__25451 = (i__20748__auto___25450 + (1));
i__20748__auto___25450 = G__25451;
continue;
} else {
}
break;
}

var G__25400 = args25398.length;
switch (G__25400) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25398.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22917__auto___25453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___25453,out){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___25453,out){
return (function (state_25424){
var state_val_25425 = (state_25424[(1)]);
if((state_val_25425 === (7))){
var inst_25419 = (state_25424[(2)]);
var state_25424__$1 = state_25424;
var statearr_25426_25454 = state_25424__$1;
(statearr_25426_25454[(2)] = inst_25419);

(statearr_25426_25454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (1))){
var inst_25401 = null;
var state_25424__$1 = (function (){var statearr_25427 = state_25424;
(statearr_25427[(7)] = inst_25401);

return statearr_25427;
})();
var statearr_25428_25455 = state_25424__$1;
(statearr_25428_25455[(2)] = null);

(statearr_25428_25455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (4))){
var inst_25404 = (state_25424[(8)]);
var inst_25404__$1 = (state_25424[(2)]);
var inst_25405 = (inst_25404__$1 == null);
var inst_25406 = cljs.core.not.call(null,inst_25405);
var state_25424__$1 = (function (){var statearr_25429 = state_25424;
(statearr_25429[(8)] = inst_25404__$1);

return statearr_25429;
})();
if(inst_25406){
var statearr_25430_25456 = state_25424__$1;
(statearr_25430_25456[(1)] = (5));

} else {
var statearr_25431_25457 = state_25424__$1;
(statearr_25431_25457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (6))){
var state_25424__$1 = state_25424;
var statearr_25432_25458 = state_25424__$1;
(statearr_25432_25458[(2)] = null);

(statearr_25432_25458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (3))){
var inst_25421 = (state_25424[(2)]);
var inst_25422 = cljs.core.async.close_BANG_.call(null,out);
var state_25424__$1 = (function (){var statearr_25433 = state_25424;
(statearr_25433[(9)] = inst_25421);

return statearr_25433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25424__$1,inst_25422);
} else {
if((state_val_25425 === (2))){
var state_25424__$1 = state_25424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25424__$1,(4),ch);
} else {
if((state_val_25425 === (11))){
var inst_25404 = (state_25424[(8)]);
var inst_25413 = (state_25424[(2)]);
var inst_25401 = inst_25404;
var state_25424__$1 = (function (){var statearr_25434 = state_25424;
(statearr_25434[(10)] = inst_25413);

(statearr_25434[(7)] = inst_25401);

return statearr_25434;
})();
var statearr_25435_25459 = state_25424__$1;
(statearr_25435_25459[(2)] = null);

(statearr_25435_25459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (9))){
var inst_25404 = (state_25424[(8)]);
var state_25424__$1 = state_25424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25424__$1,(11),out,inst_25404);
} else {
if((state_val_25425 === (5))){
var inst_25404 = (state_25424[(8)]);
var inst_25401 = (state_25424[(7)]);
var inst_25408 = cljs.core._EQ_.call(null,inst_25404,inst_25401);
var state_25424__$1 = state_25424;
if(inst_25408){
var statearr_25437_25460 = state_25424__$1;
(statearr_25437_25460[(1)] = (8));

} else {
var statearr_25438_25461 = state_25424__$1;
(statearr_25438_25461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (10))){
var inst_25416 = (state_25424[(2)]);
var state_25424__$1 = state_25424;
var statearr_25439_25462 = state_25424__$1;
(statearr_25439_25462[(2)] = inst_25416);

(statearr_25439_25462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (8))){
var inst_25401 = (state_25424[(7)]);
var tmp25436 = inst_25401;
var inst_25401__$1 = tmp25436;
var state_25424__$1 = (function (){var statearr_25440 = state_25424;
(statearr_25440[(7)] = inst_25401__$1);

return statearr_25440;
})();
var statearr_25441_25463 = state_25424__$1;
(statearr_25441_25463[(2)] = null);

(statearr_25441_25463[(1)] = (2));


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
});})(c__22917__auto___25453,out))
;
return ((function (switch__22805__auto__,c__22917__auto___25453,out){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_25445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25445[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_25445[(1)] = (1));

return statearr_25445;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_25424){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_25424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e25446){if((e25446 instanceof Object)){
var ex__22809__auto__ = e25446;
var statearr_25447_25464 = state_25424;
(statearr_25447_25464[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25465 = state_25424;
state_25424 = G__25465;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_25424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_25424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___25453,out))
})();
var state__22919__auto__ = (function (){var statearr_25448 = f__22918__auto__.call(null);
(statearr_25448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___25453);

return statearr_25448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___25453,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25466 = [];
var len__20747__auto___25536 = arguments.length;
var i__20748__auto___25537 = (0);
while(true){
if((i__20748__auto___25537 < len__20747__auto___25536)){
args25466.push((arguments[i__20748__auto___25537]));

var G__25538 = (i__20748__auto___25537 + (1));
i__20748__auto___25537 = G__25538;
continue;
} else {
}
break;
}

var G__25468 = args25466.length;
switch (G__25468) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25466.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22917__auto___25540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___25540,out){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___25540,out){
return (function (state_25506){
var state_val_25507 = (state_25506[(1)]);
if((state_val_25507 === (7))){
var inst_25502 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25508_25541 = state_25506__$1;
(statearr_25508_25541[(2)] = inst_25502);

(statearr_25508_25541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (1))){
var inst_25469 = (new Array(n));
var inst_25470 = inst_25469;
var inst_25471 = (0);
var state_25506__$1 = (function (){var statearr_25509 = state_25506;
(statearr_25509[(7)] = inst_25471);

(statearr_25509[(8)] = inst_25470);

return statearr_25509;
})();
var statearr_25510_25542 = state_25506__$1;
(statearr_25510_25542[(2)] = null);

(statearr_25510_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (4))){
var inst_25474 = (state_25506[(9)]);
var inst_25474__$1 = (state_25506[(2)]);
var inst_25475 = (inst_25474__$1 == null);
var inst_25476 = cljs.core.not.call(null,inst_25475);
var state_25506__$1 = (function (){var statearr_25511 = state_25506;
(statearr_25511[(9)] = inst_25474__$1);

return statearr_25511;
})();
if(inst_25476){
var statearr_25512_25543 = state_25506__$1;
(statearr_25512_25543[(1)] = (5));

} else {
var statearr_25513_25544 = state_25506__$1;
(statearr_25513_25544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (15))){
var inst_25496 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25514_25545 = state_25506__$1;
(statearr_25514_25545[(2)] = inst_25496);

(statearr_25514_25545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (13))){
var state_25506__$1 = state_25506;
var statearr_25515_25546 = state_25506__$1;
(statearr_25515_25546[(2)] = null);

(statearr_25515_25546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (6))){
var inst_25471 = (state_25506[(7)]);
var inst_25492 = (inst_25471 > (0));
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25492)){
var statearr_25516_25547 = state_25506__$1;
(statearr_25516_25547[(1)] = (12));

} else {
var statearr_25517_25548 = state_25506__$1;
(statearr_25517_25548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (3))){
var inst_25504 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25506__$1,inst_25504);
} else {
if((state_val_25507 === (12))){
var inst_25470 = (state_25506[(8)]);
var inst_25494 = cljs.core.vec.call(null,inst_25470);
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25506__$1,(15),out,inst_25494);
} else {
if((state_val_25507 === (2))){
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25506__$1,(4),ch);
} else {
if((state_val_25507 === (11))){
var inst_25486 = (state_25506[(2)]);
var inst_25487 = (new Array(n));
var inst_25470 = inst_25487;
var inst_25471 = (0);
var state_25506__$1 = (function (){var statearr_25518 = state_25506;
(statearr_25518[(7)] = inst_25471);

(statearr_25518[(10)] = inst_25486);

(statearr_25518[(8)] = inst_25470);

return statearr_25518;
})();
var statearr_25519_25549 = state_25506__$1;
(statearr_25519_25549[(2)] = null);

(statearr_25519_25549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (9))){
var inst_25470 = (state_25506[(8)]);
var inst_25484 = cljs.core.vec.call(null,inst_25470);
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25506__$1,(11),out,inst_25484);
} else {
if((state_val_25507 === (5))){
var inst_25471 = (state_25506[(7)]);
var inst_25470 = (state_25506[(8)]);
var inst_25479 = (state_25506[(11)]);
var inst_25474 = (state_25506[(9)]);
var inst_25478 = (inst_25470[inst_25471] = inst_25474);
var inst_25479__$1 = (inst_25471 + (1));
var inst_25480 = (inst_25479__$1 < n);
var state_25506__$1 = (function (){var statearr_25520 = state_25506;
(statearr_25520[(12)] = inst_25478);

(statearr_25520[(11)] = inst_25479__$1);

return statearr_25520;
})();
if(cljs.core.truth_(inst_25480)){
var statearr_25521_25550 = state_25506__$1;
(statearr_25521_25550[(1)] = (8));

} else {
var statearr_25522_25551 = state_25506__$1;
(statearr_25522_25551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (14))){
var inst_25499 = (state_25506[(2)]);
var inst_25500 = cljs.core.async.close_BANG_.call(null,out);
var state_25506__$1 = (function (){var statearr_25524 = state_25506;
(statearr_25524[(13)] = inst_25499);

return statearr_25524;
})();
var statearr_25525_25552 = state_25506__$1;
(statearr_25525_25552[(2)] = inst_25500);

(statearr_25525_25552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (10))){
var inst_25490 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25526_25553 = state_25506__$1;
(statearr_25526_25553[(2)] = inst_25490);

(statearr_25526_25553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (8))){
var inst_25470 = (state_25506[(8)]);
var inst_25479 = (state_25506[(11)]);
var tmp25523 = inst_25470;
var inst_25470__$1 = tmp25523;
var inst_25471 = inst_25479;
var state_25506__$1 = (function (){var statearr_25527 = state_25506;
(statearr_25527[(7)] = inst_25471);

(statearr_25527[(8)] = inst_25470__$1);

return statearr_25527;
})();
var statearr_25528_25554 = state_25506__$1;
(statearr_25528_25554[(2)] = null);

(statearr_25528_25554[(1)] = (2));


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
});})(c__22917__auto___25540,out))
;
return ((function (switch__22805__auto__,c__22917__auto___25540,out){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_25532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25532[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_25532[(1)] = (1));

return statearr_25532;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_25506){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_25506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e25533){if((e25533 instanceof Object)){
var ex__22809__auto__ = e25533;
var statearr_25534_25555 = state_25506;
(statearr_25534_25555[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25556 = state_25506;
state_25506 = G__25556;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_25506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_25506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___25540,out))
})();
var state__22919__auto__ = (function (){var statearr_25535 = f__22918__auto__.call(null);
(statearr_25535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___25540);

return statearr_25535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___25540,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25557 = [];
var len__20747__auto___25631 = arguments.length;
var i__20748__auto___25632 = (0);
while(true){
if((i__20748__auto___25632 < len__20747__auto___25631)){
args25557.push((arguments[i__20748__auto___25632]));

var G__25633 = (i__20748__auto___25632 + (1));
i__20748__auto___25632 = G__25633;
continue;
} else {
}
break;
}

var G__25559 = args25557.length;
switch (G__25559) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25557.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22917__auto___25635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22917__auto___25635,out){
return (function (){
var f__22918__auto__ = (function (){var switch__22805__auto__ = ((function (c__22917__auto___25635,out){
return (function (state_25601){
var state_val_25602 = (state_25601[(1)]);
if((state_val_25602 === (7))){
var inst_25597 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25603_25636 = state_25601__$1;
(statearr_25603_25636[(2)] = inst_25597);

(statearr_25603_25636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (1))){
var inst_25560 = [];
var inst_25561 = inst_25560;
var inst_25562 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25601__$1 = (function (){var statearr_25604 = state_25601;
(statearr_25604[(7)] = inst_25562);

(statearr_25604[(8)] = inst_25561);

return statearr_25604;
})();
var statearr_25605_25637 = state_25601__$1;
(statearr_25605_25637[(2)] = null);

(statearr_25605_25637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (4))){
var inst_25565 = (state_25601[(9)]);
var inst_25565__$1 = (state_25601[(2)]);
var inst_25566 = (inst_25565__$1 == null);
var inst_25567 = cljs.core.not.call(null,inst_25566);
var state_25601__$1 = (function (){var statearr_25606 = state_25601;
(statearr_25606[(9)] = inst_25565__$1);

return statearr_25606;
})();
if(inst_25567){
var statearr_25607_25638 = state_25601__$1;
(statearr_25607_25638[(1)] = (5));

} else {
var statearr_25608_25639 = state_25601__$1;
(statearr_25608_25639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (15))){
var inst_25591 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25609_25640 = state_25601__$1;
(statearr_25609_25640[(2)] = inst_25591);

(statearr_25609_25640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (13))){
var state_25601__$1 = state_25601;
var statearr_25610_25641 = state_25601__$1;
(statearr_25610_25641[(2)] = null);

(statearr_25610_25641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (6))){
var inst_25561 = (state_25601[(8)]);
var inst_25586 = inst_25561.length;
var inst_25587 = (inst_25586 > (0));
var state_25601__$1 = state_25601;
if(cljs.core.truth_(inst_25587)){
var statearr_25611_25642 = state_25601__$1;
(statearr_25611_25642[(1)] = (12));

} else {
var statearr_25612_25643 = state_25601__$1;
(statearr_25612_25643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (3))){
var inst_25599 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25601__$1,inst_25599);
} else {
if((state_val_25602 === (12))){
var inst_25561 = (state_25601[(8)]);
var inst_25589 = cljs.core.vec.call(null,inst_25561);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25601__$1,(15),out,inst_25589);
} else {
if((state_val_25602 === (2))){
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25601__$1,(4),ch);
} else {
if((state_val_25602 === (11))){
var inst_25569 = (state_25601[(10)]);
var inst_25565 = (state_25601[(9)]);
var inst_25579 = (state_25601[(2)]);
var inst_25580 = [];
var inst_25581 = inst_25580.push(inst_25565);
var inst_25561 = inst_25580;
var inst_25562 = inst_25569;
var state_25601__$1 = (function (){var statearr_25613 = state_25601;
(statearr_25613[(11)] = inst_25581);

(statearr_25613[(7)] = inst_25562);

(statearr_25613[(12)] = inst_25579);

(statearr_25613[(8)] = inst_25561);

return statearr_25613;
})();
var statearr_25614_25644 = state_25601__$1;
(statearr_25614_25644[(2)] = null);

(statearr_25614_25644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (9))){
var inst_25561 = (state_25601[(8)]);
var inst_25577 = cljs.core.vec.call(null,inst_25561);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25601__$1,(11),out,inst_25577);
} else {
if((state_val_25602 === (5))){
var inst_25569 = (state_25601[(10)]);
var inst_25562 = (state_25601[(7)]);
var inst_25565 = (state_25601[(9)]);
var inst_25569__$1 = f.call(null,inst_25565);
var inst_25570 = cljs.core._EQ_.call(null,inst_25569__$1,inst_25562);
var inst_25571 = cljs.core.keyword_identical_QMARK_.call(null,inst_25562,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25572 = (inst_25570) || (inst_25571);
var state_25601__$1 = (function (){var statearr_25615 = state_25601;
(statearr_25615[(10)] = inst_25569__$1);

return statearr_25615;
})();
if(cljs.core.truth_(inst_25572)){
var statearr_25616_25645 = state_25601__$1;
(statearr_25616_25645[(1)] = (8));

} else {
var statearr_25617_25646 = state_25601__$1;
(statearr_25617_25646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (14))){
var inst_25594 = (state_25601[(2)]);
var inst_25595 = cljs.core.async.close_BANG_.call(null,out);
var state_25601__$1 = (function (){var statearr_25619 = state_25601;
(statearr_25619[(13)] = inst_25594);

return statearr_25619;
})();
var statearr_25620_25647 = state_25601__$1;
(statearr_25620_25647[(2)] = inst_25595);

(statearr_25620_25647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (10))){
var inst_25584 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25621_25648 = state_25601__$1;
(statearr_25621_25648[(2)] = inst_25584);

(statearr_25621_25648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (8))){
var inst_25569 = (state_25601[(10)]);
var inst_25565 = (state_25601[(9)]);
var inst_25561 = (state_25601[(8)]);
var inst_25574 = inst_25561.push(inst_25565);
var tmp25618 = inst_25561;
var inst_25561__$1 = tmp25618;
var inst_25562 = inst_25569;
var state_25601__$1 = (function (){var statearr_25622 = state_25601;
(statearr_25622[(7)] = inst_25562);

(statearr_25622[(14)] = inst_25574);

(statearr_25622[(8)] = inst_25561__$1);

return statearr_25622;
})();
var statearr_25623_25649 = state_25601__$1;
(statearr_25623_25649[(2)] = null);

(statearr_25623_25649[(1)] = (2));


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
});})(c__22917__auto___25635,out))
;
return ((function (switch__22805__auto__,c__22917__auto___25635,out){
return (function() {
var cljs$core$async$state_machine__22806__auto__ = null;
var cljs$core$async$state_machine__22806__auto____0 = (function (){
var statearr_25627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25627[(0)] = cljs$core$async$state_machine__22806__auto__);

(statearr_25627[(1)] = (1));

return statearr_25627;
});
var cljs$core$async$state_machine__22806__auto____1 = (function (state_25601){
while(true){
var ret_value__22807__auto__ = (function (){try{while(true){
var result__22808__auto__ = switch__22805__auto__.call(null,state_25601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22808__auto__;
}
break;
}
}catch (e25628){if((e25628 instanceof Object)){
var ex__22809__auto__ = e25628;
var statearr_25629_25650 = state_25601;
(statearr_25629_25650[(5)] = ex__22809__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25651 = state_25601;
state_25601 = G__25651;
continue;
} else {
return ret_value__22807__auto__;
}
break;
}
});
cljs$core$async$state_machine__22806__auto__ = function(state_25601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22806__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22806__auto____1.call(this,state_25601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22806__auto____0;
cljs$core$async$state_machine__22806__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22806__auto____1;
return cljs$core$async$state_machine__22806__auto__;
})()
;})(switch__22805__auto__,c__22917__auto___25635,out))
})();
var state__22919__auto__ = (function (){var statearr_25630 = f__22918__auto__.call(null);
(statearr_25630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22917__auto___25635);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22919__auto__);
});})(c__22917__auto___25635,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map